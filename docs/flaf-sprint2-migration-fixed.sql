-- =============================================================
-- FLAF — Supabase Migration
-- Sprint 2: Aktivasi Tahan Banting + Admin Panel
-- File: flaf-sprint2-migration.sql
-- Jalankan di: Supabase Dashboard → SQL Editor
-- Urutan: jalankan seluruh file sekaligus (satu transaksi)
-- =============================================================

BEGIN;

-- =============================================================
-- SECTION 1: EXTENSIONS
-- =============================================================

-- random() digunakan untuk generate suffix kode aktivasi (tidak butuh pgcrypto)


-- =============================================================
-- SECTION 2: TABEL
-- Urutan: activation_codes → teachers → error_logs → admin_actions
-- =============================================================

-- -------------------------------------------------------------
-- 2.1 activation_codes
-- Satu baris per kode aktivasi yang diterbitkan admin.
-- device_ids: array device_id yang sudah terdaftar.
-- device_count: denormalized dari len(device_ids) — lebih cepat dibanding COUNT.
-- reset_count_this_month: di-reset tiap awal bulan via admin_reset_device.
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.activation_codes (
    id              BIGSERIAL PRIMARY KEY,
    code            TEXT        NOT NULL UNIQUE,           -- 'FLAF-2026-XK9M'
    is_used         BOOLEAN     NOT NULL DEFAULT FALSE,
    device_count    INTEGER     NOT NULL DEFAULT 0
                    CONSTRAINT device_count_non_negative CHECK (device_count >= 0)
                    CONSTRAINT device_count_max         CHECK (device_count <= 2),
    device_ids      TEXT[]      NOT NULL DEFAULT '{}',
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    used_at         TIMESTAMPTZ,
    created_by      TEXT        NOT NULL DEFAULT 'admin', -- admin_id yang menerbitkan
    notes           TEXT                                  -- catatan opsional admin

    -- Tidak ada kolom reset_count_this_month di sini.
    -- Rate limit dihitung dari admin_actions (COUNT per bulan per code).
    -- Ini lebih akurat dan tidak perlu cron job reset bulanan.
);

-- Index untuk lookup cepat saat aktivasi (called hot path)
CREATE INDEX IF NOT EXISTS idx_activation_codes_code
    ON public.activation_codes (code);


-- -------------------------------------------------------------
-- 2.2 teachers
-- Satu baris per device yang sudah aktif.
-- Satu kode bisa punya max 2 baris (max 2 device).
-- device_id: fingerprint device, dicompute di client (activation.js).
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.teachers (
    id              BIGSERIAL PRIMARY KEY,
    name            TEXT        NOT NULL,
    school          TEXT        NOT NULL,
    code            TEXT        NOT NULL REFERENCES public.activation_codes(code)
                    ON DELETE RESTRICT,
    device_id       TEXT        NOT NULL UNIQUE,          -- satu device hanya boleh ada sekali
    activated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_seen_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),   -- bisa di-update saat app dibuka
    is_active       BOOLEAN     NOT NULL DEFAULT TRUE     -- FALSE saat device di-reset admin
);

CREATE INDEX IF NOT EXISTS idx_teachers_code      ON public.teachers (code);
CREATE INDEX IF NOT EXISTS idx_teachers_device_id ON public.teachers (device_id);


-- -------------------------------------------------------------
-- 2.3 error_logs
-- Insert-only. Tidak ada UPDATE/DELETE.
-- Dikirim dalam batch dari logger.js.
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.error_logs (
    id          BIGSERIAL PRIMARY KEY,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    severity    TEXT        NOT NULL
                CONSTRAINT severity_valid CHECK (severity IN ('info', 'warn', 'error')),
    screen      TEXT,
    error_msg   TEXT,
    device_info TEXT,
    device_id   TEXT,
    cache_ver   TEXT,
    extra       JSONB                                     -- metadata tambahan bebas
);

-- Index untuk filter severity di Supabase dashboard
CREATE INDEX IF NOT EXISTS idx_error_logs_severity   ON public.error_logs (severity);
CREATE INDEX IF NOT EXISTS idx_error_logs_created_at ON public.error_logs (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_error_logs_device_id  ON public.error_logs (device_id);


-- -------------------------------------------------------------
-- 2.4 admin_actions
-- Insert-only audit trail semua aksi admin.
-- Dipakai untuk: rate limit admin_reset_device, history, investigasi.
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.admin_actions (
    id          BIGSERIAL PRIMARY KEY,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    admin_id    TEXT        NOT NULL,
    action      TEXT        NOT NULL
                CONSTRAINT action_valid CHECK (
                    action IN ('reset_device', 'generate_code', 'view_codes', 'view_audit')
                ),
    target_code TEXT,                                     -- NULL untuk aksi non-spesifik
    note        TEXT
);

CREATE INDEX IF NOT EXISTS idx_admin_actions_target_code ON public.admin_actions (target_code);
CREATE INDEX IF NOT EXISTS idx_admin_actions_admin_id    ON public.admin_actions (admin_id);
CREATE INDEX IF NOT EXISTS idx_admin_actions_created_at  ON public.admin_actions (created_at DESC);


-- =============================================================
-- SECTION 3: ROW LEVEL SECURITY
-- Prinsip: anon tidak bisa sentuh tabel apapun secara langsung.
-- Semua akses via RPC SECURITY DEFINER.
-- =============================================================

ALTER TABLE public.activation_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teachers          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.error_logs        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_actions     ENABLE ROW LEVEL SECURITY;

-- Hapus policy lama jika ada (idempotent re-run)
DROP POLICY IF EXISTS "anon_no_access_codes"   ON public.activation_codes;
DROP POLICY IF EXISTS "anon_no_access_teachers" ON public.teachers;
DROP POLICY IF EXISTS "anon_no_access_logs"    ON public.error_logs;
DROP POLICY IF EXISTS "anon_no_access_actions" ON public.admin_actions;

-- Tidak ada policy yang mengizinkan akses → semua ditolak by default.
-- RPC SECURITY DEFINER berjalan sebagai owner tabel (postgres/service_role),
-- sehingga tidak terkena RLS. Ini adalah pola yang benar untuk Supabase.

-- Note: jika di masa depan admin perlu SELECT langsung (via Supabase dashboard),
-- tambahkan policy khusus untuk role 'authenticated' dengan filter auth.uid().


-- =============================================================
-- SECTION 4: RPC FUNCTIONS
-- Semua function: SECURITY DEFINER + search_path dikunci ke 'public'
-- untuk mencegah search_path injection.
-- =============================================================


-- -------------------------------------------------------------
-- 4.1 register_device
--
-- Dipanggil dari: activation.js → setelah HMAC lokal pass
-- Flow:
--   1. Lock baris activation_codes FOR UPDATE (atomic, anti race condition)
--   2. Validasi kode ada
--   3. Cek apakah device_id sudah terdaftar (re-activation flow)
--   4. Cek device_count < 2
--   5. INSERT teachers + UPDATE activation_codes
--   6. Return JSON hasil
--
-- Return sukses : {"ok": true, "already_registered": false}
-- Return re-reg  : {"ok": true, "already_registered": true}
-- Return error  : raise exception dengan SQLSTATE custom (ditangkap client)
--   P0001 CODE_NOT_FOUND  → kode tidak ada di DB
--   P0002 CODE_FULL       → device_count sudah 2
-- -------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.register_device(
    p_code      TEXT,
    p_device_id TEXT,
    p_nama      TEXT,
    p_sekolah   TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_code_row  public.activation_codes%ROWTYPE;
    v_existing  BOOLEAN := FALSE;
BEGIN
    -- Validasi input dasar (defense in depth — client sudah validasi, tapi DB tidak percaya)
    IF p_code IS NULL OR TRIM(p_code) = '' THEN
        RAISE EXCEPTION 'INPUT_INVALID: code kosong' USING ERRCODE = 'P0001';
    END IF;
    IF p_device_id IS NULL OR TRIM(p_device_id) = '' THEN
        RAISE EXCEPTION 'INPUT_INVALID: device_id kosong' USING ERRCODE = 'P0001';
    END IF;
    IF p_nama IS NULL OR TRIM(p_nama) = '' THEN
        RAISE EXCEPTION 'INPUT_INVALID: nama kosong' USING ERRCODE = 'P0001';
    END IF;
    IF p_sekolah IS NULL OR TRIM(p_sekolah) = '' THEN
        RAISE EXCEPTION 'INPUT_INVALID: sekolah kosong' USING ERRCODE = 'P0001';
    END IF;

    -- Lock baris kode SEBELUM membaca nilainya.
    -- Ini kunci utama anti-race-condition:
    -- Jika dua request masuk bersamaan, yang kedua akan WAIT sampai yang pertama commit.
    SELECT * INTO v_code_row
    FROM public.activation_codes
    WHERE code = p_code
    FOR UPDATE;                      -- <-- KUNCI UTAMA

    -- Kode tidak ditemukan
    IF NOT FOUND THEN
        RAISE EXCEPTION 'CODE_NOT_FOUND' USING ERRCODE = 'P0001';
    END IF;

    -- Cek apakah device_id ini sudah terdaftar (re-activation: guru ganti browser/reinstall)
    IF p_device_id = ANY(v_code_row.device_ids) THEN
        v_existing := TRUE;

        -- Update last_seen_at saja — tidak tambah device_count
        UPDATE public.teachers
        SET    last_seen_at = NOW(),
               is_active    = TRUE
        WHERE  device_id = p_device_id
          AND  code      = p_code;

        RETURN jsonb_build_object(
            'ok',                true,
            'already_registered', true,
            'device_count',      v_code_row.device_count
        );
    END IF;

    -- Device baru: cek apakah masih ada slot
    IF v_code_row.device_count >= 2 THEN
        RAISE EXCEPTION 'CODE_FULL' USING ERRCODE = 'P0002';
    END IF;

    -- Semua validasi pass → insert teacher baru
    INSERT INTO public.teachers (name, school, code, device_id)
    VALUES (TRIM(p_nama), TRIM(p_sekolah), p_code, p_device_id);

    -- Update activation_codes secara atomic
    UPDATE public.activation_codes
    SET
        device_count = device_count + 1,
        device_ids   = array_append(device_ids, p_device_id),
        is_used      = TRUE,
        used_at      = COALESCE(used_at, NOW())    -- set used_at hanya saat pertama kali
    WHERE code = p_code;

    RETURN jsonb_build_object(
        'ok',                true,
        'already_registered', false,
        'device_count',      v_code_row.device_count + 1
    );

EXCEPTION
    WHEN OTHERS THEN
        -- Re-raise agar client bisa tangkap pesan yang benar
        RAISE;
END;
$$;


-- -------------------------------------------------------------
-- 4.2 admin_reset_device
--
-- Dipanggil dari: admin.js → tombol "Reset Device" di tabel kode
-- Flow:
--   1. Validasi p_code ada
--   2. Hitung berapa kali kode ini sudah di-reset bulan ini (dari admin_actions)
--   3. Jika >= 3 → raise RATE_LIMIT
--   4. Reset: device_count=0, device_ids='{}', is_used=FALSE
--   5. Nonaktifkan semua teacher entry untuk kode ini
--   6. Insert audit trail
--   7. Return {ok, resets_this_month}
--
-- Rate limit: 3x per bulan per kode — dihitung dari admin_actions,
-- bukan dari kolom counter (tidak perlu cron job reset).
-- -------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.admin_reset_device(
    p_code     TEXT,
    p_admin_id TEXT,
    p_note     TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_resets_this_month INTEGER;
    v_code_exists       BOOLEAN;
BEGIN
    -- Validasi input
    IF p_code IS NULL OR TRIM(p_code) = '' THEN
        RAISE EXCEPTION 'INPUT_INVALID: code kosong' USING ERRCODE = 'P0001';
    END IF;
    IF p_admin_id IS NULL OR TRIM(p_admin_id) = '' THEN
        RAISE EXCEPTION 'INPUT_INVALID: admin_id kosong' USING ERRCODE = 'P0001';
    END IF;

    -- Cek kode ada
    SELECT EXISTS(
        SELECT 1 FROM public.activation_codes WHERE code = p_code
    ) INTO v_code_exists;

    IF NOT v_code_exists THEN
        RAISE EXCEPTION 'CODE_NOT_FOUND' USING ERRCODE = 'P0001';
    END IF;

    -- Hitung reset bulan ini untuk kode ini
    -- date_trunc('month', NOW()) = awal bulan berjalan (1 bulan = bulan kalender, bukan rolling 30 hari)
    SELECT COUNT(*) INTO v_resets_this_month
    FROM public.admin_actions
    WHERE target_code  = p_code
      AND action       = 'reset_device'
      AND created_at  >= date_trunc('month', NOW());

    -- Rate limit: 3x per bulan per kode
    IF v_resets_this_month >= 3 THEN
        RAISE EXCEPTION 'RATE_LIMIT: kode ini sudah di-reset % kali bulan ini (maks 3)',
            v_resets_this_month
            USING ERRCODE = 'P0003';
    END IF;

    -- Reset activation_codes: hapus semua device
    UPDATE public.activation_codes
    SET
        device_count = 0,
        device_ids   = '{}',
        is_used      = FALSE,
        used_at      = NULL
    WHERE code = p_code;

    -- Nonaktifkan semua teacher entry untuk kode ini
    -- (Tidak dihapus — untuk keperluan audit historical)
    UPDATE public.teachers
    SET is_active = FALSE
    WHERE code = p_code;

    -- Catat ke audit trail
    INSERT INTO public.admin_actions (admin_id, action, target_code, note)
    VALUES (p_admin_id, 'reset_device', p_code, p_note);

    RETURN jsonb_build_object(
        'ok',                 true,
        'resets_this_month',  v_resets_this_month + 1,
        'resets_remaining',   3 - (v_resets_this_month + 1)
    );

EXCEPTION
    WHEN OTHERS THEN
        RAISE;
END;
$$;


-- -------------------------------------------------------------
-- 4.3 admin_generate_code
--
-- Dipanggil dari: admin.js → tombol "Buat Kode Baru"
-- Format kode: FLAF-{YEAR}-{SUFFIX4}
-- Karakter suffix: A-Z + 2-9 (exclude O, I, 0, 1 — ambiguous secara visual)
-- Loop max 10x sampai dapat suffix yang unik di DB.
-- Jika 10x tidak dapat unik → raise (sangat tidak mungkin dalam praktik).
--
-- Return: {"ok": true, "code": "FLAF-2026-XK9M"}
-- -------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.admin_generate_code(
    p_year      INTEGER,
    p_admin_id  TEXT,
    p_notes     TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    -- Karakter yang diizinkan: A-Z (minus O, I) + 2-9 (minus 0, 1)
    -- Total: 24 huruf + 8 angka = 32 karakter
    -- 32^4 = 1.048.576 kemungkinan → aman untuk skala pilot
    v_charset   TEXT    := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    v_suffix    TEXT;
    v_code      TEXT;
    v_exists    BOOLEAN;
    v_attempt   INTEGER := 0;
    v_max_try   CONSTANT INTEGER := 10;
    v_char_len  CONSTANT INTEGER := 4;
    v_idx       INTEGER;
    i           INTEGER;
BEGIN
    -- Validasi input
    IF p_year IS NULL OR p_year < 2024 OR p_year > 2099 THEN
        RAISE EXCEPTION 'INPUT_INVALID: year tidak valid (2024–2099)' USING ERRCODE = 'P0001';
    END IF;
    IF p_admin_id IS NULL OR TRIM(p_admin_id) = '' THEN
        RAISE EXCEPTION 'INPUT_INVALID: admin_id kosong' USING ERRCODE = 'P0001';
    END IF;

    -- Loop generate sampai dapat kode yang unik
    LOOP
        v_attempt := v_attempt + 1;

        IF v_attempt > v_max_try THEN
            RAISE EXCEPTION 'GENERATE_FAILED: tidak dapat kode unik setelah % percobaan', v_max_try
                USING ERRCODE = 'P0004';
        END IF;

        -- Generate 4 karakter random dari charset menggunakan random()
        -- Catatan: gen_random_bytes tidak tersedia di semua konfigurasi Supabase
        -- random() cukup untuk use case ini (bukan kebutuhan kriptografi)
        v_suffix := '';
        FOR i IN 1..v_char_len LOOP
            v_idx    := (floor(random() * length(v_charset)) + 1)::INTEGER;
            v_suffix := v_suffix || SUBSTRING(v_charset FROM v_idx FOR 1);
        END LOOP;

        v_code := 'FLAF-' || p_year::TEXT || '-' || v_suffix;

        -- Cek apakah kode sudah ada
        SELECT EXISTS(
            SELECT 1 FROM public.activation_codes WHERE code = v_code
        ) INTO v_exists;

        EXIT WHEN NOT v_exists;   -- Unik → keluar loop
    END LOOP;

    -- Insert kode baru
    INSERT INTO public.activation_codes (code, created_by, notes)
    VALUES (v_code, p_admin_id, p_notes);

    -- Catat audit trail
    INSERT INTO public.admin_actions (admin_id, action, target_code, note)
    VALUES (p_admin_id, 'generate_code', v_code, p_notes);

    RETURN jsonb_build_object(
        'ok',       true,
        'code',     v_code,
        'attempt',  v_attempt          -- informational: berapa loop yang diperlukan
    );

EXCEPTION
    WHEN OTHERS THEN
        RAISE;
END;
$$;


-- -------------------------------------------------------------
-- 4.4 insert_error_logs (helper untuk logger.js)
--
-- Menerima array JSON log entries, insert sekaligus.
-- Rate limit: DB-level CHECK akan menolak batch terlalu besar.
-- Dipanggil saat: flush di visibilitychange, beforeunload, interval 5 menit.
-- -------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.insert_error_logs(
    p_logs JSONB   -- Array of log objects
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_log    JSONB;
    v_count  INTEGER := 0;
    v_max    CONSTANT INTEGER := 50;    -- maks 50 entries per batch call
BEGIN
    -- Validasi: harus array
    IF jsonb_typeof(p_logs) != 'array' THEN
        RAISE EXCEPTION 'INPUT_INVALID: p_logs harus JSON array' USING ERRCODE = 'P0001';
    END IF;

    -- Batasi ukuran batch (defense terhadap abuse)
    IF jsonb_array_length(p_logs) > v_max THEN
        RAISE EXCEPTION 'BATCH_TOO_LARGE: maks % entries per call, dikirim %',
            v_max, jsonb_array_length(p_logs)
            USING ERRCODE = 'P0001';
    END IF;

    -- Insert per entry
    FOR v_log IN SELECT * FROM jsonb_array_elements(p_logs)
    LOOP
        -- Severity harus valid (CHECK constraint di tabel juga menangkap ini,
        -- tapi pesan error lebih jelas jika kita cek dulu)
        IF v_log->>'severity' NOT IN ('info', 'warn', 'error') THEN
            RAISE EXCEPTION 'INPUT_INVALID: severity tidak valid: %', v_log->>'severity'
                USING ERRCODE = 'P0001';
        END IF;

        INSERT INTO public.error_logs (
            severity, screen, error_msg, device_info,
            device_id, cache_ver, extra,
            -- Override created_at dengan timestamp dari client jika ada (lebih akurat)
            -- Fallback ke NOW() jika tidak ada atau format salah
            created_at
        )
        VALUES (
            v_log->>'severity',
            v_log->>'screen',
            v_log->>'error_msg',
            v_log->>'device_info',
            v_log->>'device_id',
            v_log->>'cache_ver',
            CASE WHEN v_log ? 'extra' THEN v_log->'extra' ELSE NULL END,
            CASE
                WHEN v_log ? 'created_at' AND v_log->>'created_at' ~ '^\d{4}-\d{2}-\d{2}T'
                THEN (v_log->>'created_at')::TIMESTAMPTZ
                ELSE NOW()
            END
        );

        v_count := v_count + 1;
    END LOOP;

    RETURN jsonb_build_object(
        'ok',       true,
        'inserted', v_count
    );

EXCEPTION
    WHEN OTHERS THEN
        RAISE;
END;
$$;


-- =============================================================
-- SECTION 5: GRANT
-- Function bisa dipanggil oleh anon (client-side via Supabase JS SDK).
-- Tabel tetap tertutup — hanya bisa diakses lewat function.
-- =============================================================

-- register_device & insert_error_logs: boleh dipanggil anon (dipanggil dari PWA guru)
GRANT EXECUTE ON FUNCTION public.register_device(TEXT, TEXT, TEXT, TEXT)
    TO anon, authenticated;

GRANT EXECUTE ON FUNCTION public.insert_error_logs(JSONB)
    TO anon, authenticated;

-- admin_reset_device & admin_generate_code: hanya boleh dipanggil authenticated
-- (admin sudah login via magic link → role = authenticated)
GRANT EXECUTE ON FUNCTION public.admin_reset_device(TEXT, TEXT, TEXT)
    TO authenticated;

GRANT EXECUTE ON FUNCTION public.admin_generate_code(INTEGER, TEXT, TEXT)
    TO authenticated;

-- Tabel: tidak ada GRANT ke anon/authenticated — semua akses via function
-- (RLS enabled, tidak ada permissive policy = ditolak otomatis)


-- =============================================================
-- SECTION 6: DATA SEED (opsional — untuk testing lokal)
-- Comment out saat deploy production
-- =============================================================

-- INSERT INTO public.activation_codes (code, created_by, notes)
-- VALUES
--     ('FLAF-2026-TEST', 'admin', 'Kode testing — hapus sebelum production'),
--     ('FLAF-2026-DEV1', 'admin', 'Developer bypass'),
--     ('FLAF-2026-DEMO', 'admin', 'Demo pilot pertama');


-- =============================================================
-- SECTION 7: VERIFY — Cek semua object terbuat dengan benar
-- Jalankan query ini setelah migration untuk konfirmasi.
-- =============================================================

-- SELECT table_name FROM information_schema.tables
--   WHERE table_schema = 'public'
--     AND table_name IN ('activation_codes','teachers','error_logs','admin_actions')
--   ORDER BY table_name;

-- SELECT routine_name FROM information_schema.routines
--   WHERE routine_schema = 'public'
--     AND routine_name IN ('register_device','admin_reset_device','admin_generate_code','insert_error_logs')
--   ORDER BY routine_name;

-- SELECT relname, relrowsecurity
--   FROM pg_class
--  WHERE relname IN ('activation_codes','teachers','error_logs','admin_actions')
--    AND relnamespace = 'public'::regnamespace;


COMMIT;

-- =============================================================
-- END OF MIGRATION
-- Checklist setelah COMMIT:
-- [ ] 4 tabel terbuat
-- [ ] RLS enabled di semua tabel
-- [ ] 4 function terbuat
-- [ ] GRANT sesuai role
-- [ ] Test manual: panggil register_device via Supabase dashboard
-- =============================================================
