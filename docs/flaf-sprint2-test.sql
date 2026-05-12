-- =============================================================
-- FLAF — Migration Verification & Manual Test Script
-- Jalankan SETELAH flaf-sprint2-migration.sql berhasil COMMIT
-- Jalankan satu blok per satu — jangan sekaligus
-- =============================================================


-- =============================================================
-- TEST 0: Verifikasi struktur terbuat
-- =============================================================

-- 0a. Cek 4 tabel ada
SELECT table_name, pg_size_pretty(pg_total_relation_size(quote_ident(table_name)::text)) AS size
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_name IN ('activation_codes','teachers','error_logs','admin_actions')
ORDER BY table_name;
-- Expected: 4 baris

-- 0b. Cek 4 function ada
SELECT routine_name, routine_type
FROM information_schema.routines
WHERE routine_schema = 'public'
  AND routine_name IN ('register_device','admin_reset_device','admin_generate_code','insert_error_logs')
ORDER BY routine_name;
-- Expected: 4 baris, type = FUNCTION

-- 0c. Cek RLS aktif di semua tabel
SELECT relname AS table_name, relrowsecurity AS rls_enabled
FROM pg_class
WHERE relname IN ('activation_codes','teachers','error_logs','admin_actions')
  AND relnamespace = 'public'::regnamespace;
-- Expected: relrowsecurity = true untuk semua 4 tabel


-- =============================================================
-- TEST 1: admin_generate_code
-- =============================================================

-- 1a. Generate kode untuk tahun 2026
SELECT public.admin_generate_code(2026, 'admin-test-id', 'Test pilot pertama');
-- Expected: {"ok": true, "code": "FLAF-2026-XXXX", "attempt": 1}

-- Simpan kode yang dihasilkan — ganti 'FLAF-2026-XXXX' di test berikut

-- 1b. Cek kode masuk ke tabel
SELECT code, is_used, device_count, device_ids, created_by, notes
FROM public.activation_codes
ORDER BY created_at DESC
LIMIT 5;

-- 1c. Cek audit trail tercatat
SELECT admin_id, action, target_code, note, created_at
FROM public.admin_actions
ORDER BY created_at DESC
LIMIT 5;

-- 1d. Test input invalid: year out of range
SELECT public.admin_generate_code(1999, 'admin-test-id', NULL);
-- Expected: ERROR P0001 INPUT_INVALID: year tidak valid

-- 1e. Test input invalid: admin_id kosong
SELECT public.admin_generate_code(2026, '', NULL);
-- Expected: ERROR P0001 INPUT_INVALID: admin_id kosong


-- =============================================================
-- TEST 2: register_device (ganti FLAF-2026-XXXX dengan kode nyata dari Test 1)
-- =============================================================

-- Set kode yang akan dipakai
DO $$ BEGIN
    RAISE NOTICE 'Ganti FLAF-2026-XXXX dengan kode dari Test 1a sebelum jalankan Test 2';
END $$;

-- 2a. Register device pertama — harus berhasil
SELECT public.register_device(
    'FLAF-2026-XXXX',           -- ganti dengan kode nyata
    'device-id-test-001',
    'Bu Sari',
    'SDN 01 Padang'
);
-- Expected: {"ok": true, "already_registered": false, "device_count": 1}

-- 2b. Cek tabel teachers
SELECT name, school, code, device_id, activated_at, is_active
FROM public.teachers
ORDER BY activated_at DESC
LIMIT 5;

-- 2c. Cek activation_codes terupdate
SELECT code, is_used, device_count, device_ids
FROM public.activation_codes
WHERE code = 'FLAF-2026-XXXX';   -- ganti
-- Expected: is_used=true, device_count=1, device_ids=['device-id-test-001']

-- 2d. Register device yang SAMA lagi (re-activation)
SELECT public.register_device(
    'FLAF-2026-XXXX',           -- ganti
    'device-id-test-001',       -- device_id SAMA
    'Bu Sari',
    'SDN 01 Padang'
);
-- Expected: {"ok": true, "already_registered": true, "device_count": 1}
-- device_count tidak boleh bertambah

-- 2e. Register device kedua — masih boleh (slot tersisa 1)
SELECT public.register_device(
    'FLAF-2026-XXXX',           -- ganti
    'device-id-test-002',       -- device_id BEDA
    'Pak Budi',
    'SDN 02 Padang'
);
-- Expected: {"ok": true, "already_registered": false, "device_count": 2}

-- 2f. Register device ketiga — harus ditolak CODE_FULL
SELECT public.register_device(
    'FLAF-2026-XXXX',           -- ganti
    'device-id-test-003',
    'Bu Dewi',
    'SDN 03 Padang'
);
-- Expected: ERROR P0002 CODE_FULL

-- 2g. Test kode tidak ada
SELECT public.register_device(
    'FLAF-2026-XXXX',
    'device-id-test-999',
    'Siapa',
    'SD Mana'
);
-- Expected: ERROR P0001 CODE_NOT_FOUND

-- 2h. RACE CONDITION TEST (simulasi manual — jalankan 2 query ini hampir bersamaan)
-- Buat kode baru dulu untuk test ini:
-- SELECT public.admin_generate_code(2026, 'admin-race-test', 'race condition test');
-- Lalu jalankan dua SELECT register_device berikut di dua tab SQL Editor bersamaan:
-- SELECT public.register_device('FLAF-2026-YYYY', 'race-device-A', 'Race A', 'SD A');
-- SELECT public.register_device('FLAF-2026-YYYY', 'race-device-B', 'Race B', 'SD B');
-- Expected: salah satu berhasil, salah satu berhasil (kode baru, device_count=1 masing2)
-- Kalau device_count = 3 setelah kedua query → race condition bug (tidak seharusnya terjadi dengan FOR UPDATE)

-- 2i. Test input invalid
SELECT public.register_device('', 'dev', 'nama', 'sekolah');
-- Expected: ERROR INPUT_INVALID: code kosong


-- =============================================================
-- TEST 3: admin_reset_device
-- =============================================================

-- 3a. Reset device pertama kali (resets_this_month = 0 sebelumnya)
SELECT public.admin_reset_device(
    'FLAF-2026-XXXX',           -- ganti dengan kode nyata
    'admin-test-id',
    'Test reset pertama'
);
-- Expected: {"ok": true, "resets_this_month": 1, "resets_remaining": 2}

-- 3b. Cek activation_codes: device_count harus 0, device_ids harus '{}'
SELECT code, is_used, device_count, device_ids
FROM public.activation_codes
WHERE code = 'FLAF-2026-XXXX';
-- Expected: is_used=false, device_count=0, device_ids={}

-- 3c. Cek teachers: is_active harus FALSE
SELECT name, device_id, is_active
FROM public.teachers
WHERE code = 'FLAF-2026-XXXX';
-- Expected: semua is_active = false (bukan dihapus, hanya dinonaktifkan)

-- 3d. Cek audit trail
SELECT admin_id, action, target_code, note, created_at
FROM public.admin_actions
WHERE action = 'reset_device'
ORDER BY created_at DESC
LIMIT 5;

-- 3e. Reset kedua (resets_this_month = 1)
SELECT public.admin_reset_device('FLAF-2026-XXXX', 'admin-test-id', 'Test reset kedua');
-- Expected: {"ok": true, "resets_this_month": 2, "resets_remaining": 1}

-- 3f. Reset ketiga (resets_this_month = 2)
SELECT public.admin_reset_device('FLAF-2026-XXXX', 'admin-test-id', 'Test reset ketiga');
-- Expected: {"ok": true, "resets_this_month": 3, "resets_remaining": 0}

-- 3g. Reset keempat — harus ditolak RATE_LIMIT
SELECT public.admin_reset_device('FLAF-2026-XXXX', 'admin-test-id', 'Test rate limit');
-- Expected: ERROR P0003 RATE_LIMIT: kode ini sudah di-reset 3 kali bulan ini (maks 3)

-- 3h. Test kode tidak ada
SELECT public.admin_reset_device('FLAF-2026-NOTEXIST', 'admin-test-id', NULL);
-- Expected: ERROR P0001 CODE_NOT_FOUND


-- =============================================================
-- TEST 4: insert_error_logs
-- =============================================================

-- 4a. Insert batch normal
SELECT public.insert_error_logs('[
    {"severity": "info",  "screen": "s-activation", "error_msg": "aktivasi berhasil",  "device_id": "dev-001", "cache_ver": "flaf-v1"},
    {"severity": "warn",  "screen": "s-jadwal",     "error_msg": "PDF load lambat",    "device_id": "dev-001", "cache_ver": "flaf-v1"},
    {"severity": "error", "screen": "s-start",      "error_msg": "render gagal total", "device_id": "dev-002", "cache_ver": "flaf-v1",
     "extra": {"stack": "TypeError: cannot read ...", "line": 42}}
]'::jsonb);
-- Expected: {"ok": true, "inserted": 3}

-- 4b. Cek tabel error_logs
SELECT severity, screen, error_msg, device_id, created_at
FROM public.error_logs
ORDER BY created_at DESC
LIMIT 10;

-- 4c. Test severity invalid
SELECT public.insert_error_logs('[{"severity": "critical", "screen": "test"}]'::jsonb);
-- Expected: ERROR INPUT_INVALID: severity tidak valid: critical

-- 4d. Test batch terlalu besar (> 50)
-- Buat array 51 entries:
SELECT public.insert_error_logs(
    (SELECT jsonb_agg(
        jsonb_build_object('severity', 'info', 'screen', 'test', 'device_id', 'dev-' || i::text)
    ) FROM generate_series(1, 51) AS i)
);
-- Expected: ERROR BATCH_TOO_LARGE: maks 50 entries per call, dikirim 51

-- 4e. Test input bukan array
SELECT public.insert_error_logs('{"severity": "info"}'::jsonb);
-- Expected: ERROR INPUT_INVALID: p_logs harus JSON array


-- =============================================================
-- TEST 5: Cleanup setelah testing
-- Hapus data test — JANGAN dijalankan di production
-- =============================================================

-- DELETE FROM public.admin_actions WHERE admin_id LIKE 'admin-test%' OR admin_id LIKE 'admin-race%';
-- DELETE FROM public.teachers WHERE device_id LIKE 'device-id-test%' OR device_id LIKE 'race-device%';
-- DELETE FROM public.activation_codes WHERE created_by LIKE 'admin-test%' OR notes LIKE '%test%' OR notes LIKE '%race%';
-- DELETE FROM public.error_logs WHERE device_id LIKE 'dev-00%';


-- =============================================================
-- RINGKASAN: Semua test PASS berarti:
-- [x] Tabel terbuat dengan constraint yang benar
-- [x] RLS aktif (tabel tidak bisa diakses langsung)
-- [x] register_device: atomic, anti race-condition, re-activation berfungsi
-- [x] admin_reset_device: rate limit 3x/bulan enforce di DB
-- [x] admin_generate_code: format benar, unik, audit trail
-- [x] insert_error_logs: batch insert, validasi severity, limit ukuran
-- =============================================================
