# FLAF — Context Sesi Baru

## STATUS
- Canonical TP Fase A selesai: TP-01 sampai TP-18 (18 file) — FINAL · Document Freeze
- **Canonical TP Fase B selesai: TP-01 sampai TP-22 (22 file) — FINAL · Document Freeze**
  - Lokasi: `docs/canonical/skenario-fase-b/`
  - Pipeline tiap TP: (1) generasi Claude Code dari skenario sumber →
    (2) pemeriksaan logical jump & ambiguitas (Claude chat) →
    (3) review ChatGPT (Dokumen 9) → (4) semua temuan valid diperbaiki
- Semua file Fase A telah diaudit: logical jump, kata ambigu, field UCAP

### Patch global yang sudah diterapkan di semua file Fase B
- `gesture` → `gestur` (semua file)
- `UCAP: "In English?"` → `UCAP: "How do we say it in English?"`
- `Berkeliling pelan` → `Pantau [kegiatan spesifik] semua siswa.`
- `Berkeliling melihat hasil tulisan` → `Pantau hasil tulisan semua siswa.`
- Catatan Penting tidak boleh berisi penjelasan pedagogis atau kata instruksi
  aktif (ajarkan, perlakukan, perkenalkan, sebutkan, dst.)
- Hanya satu field BANTUAN per layar
- Format Catatan Penting L0 konsisten: hanya satu kalimat constraint

### Patch retroaktif Fase A
- Catatan Penting berisi kata instruksi aktif sudah diperbaiki di
  TP-04, TP-12, TP-18 (Fase A)

## NEXT TASK
- Keputusan arsitektur yang masih terbuka: konversi canonical Fase B ke
  format JS (in-place rewrite atau file baru), atau lanjut ke canonical Fase C

---

## Identitas Project
- **Nama**: FLAF (Functional Language Accumulation Framework)
- **Deskripsi**: PWA offline-first untuk guru Bahasa Inggris SD Kelas 1 & 2
- **Stack**: Vanilla JS ES Modules, IndexedDB, Supabase (aktivasi & admin), Service Worker, GitHub Pages
- **Repo lokal**: `D:\ribuan_pengguna\CLAUDE\FLAF` (Git aktif, branch `main`)
- **GitHub**: https://github.com/teguhalficahlin-del/flaf
- **Deploy**: https://teguhalficahlin-del.github.io/flaf

## Status Terakhir (Juni 2026)
- Schema v4.3 aktif & stabil — `closure_reinforcement` WAJIB di setiap TP
- **18 TP sudah migrate + integrated — schema v4.3 selesai** _(known issues: lihat §Technical Debt)_
- **UI-SKETCH.html sudah di-review dan disetujui — acuan layout runtime**
- **Fase 5 Build SELESAI + post-fix SELESAI ✅**
- **Fase 6 SELESAI ✅**
- **Fase 7 SELESAI ✅**
- **Fase 8 (UI sprint) SELESAI ✅**
- **Fase 9 SELESAI ✅**
- **Fase 10 SELESAI ✅**
- **Fase 11 SELESAI ✅ (akan direvisi di Fase 12)**
- **Fase 12 SELESAI ✅**
- **Fase 13 SELESAI ✅**
- **Skenario Live Mode v2 SELESAI ✅ (Mei 2026)** — `flaf-skenario-tp01-v2.txt` s/d `tp18-v2.txt`, semua verified
- **Schema v5.0 TP 15–18 SELESAI ✅ (Mei 2026)** — `tp-15-v5.js` s/d `tp-18-v5.js` ditulis ke `docs/sesi-m{10–13}/`; file lama tidak ditimpa
- **Sprint Data Flow SELESAI ✅ (Mei 2026)** — `teacher_data` terhubung, mood closure aktif, layar Nilai Formatif live (commit `2527af6`)
- **Sprint Dead Code + Batch Converter SELESAI ✅ (Mei 2026)** — obs_log + siswa_per_kelas dihapus, logger in-memory, mood render di jejak, TP01–14 v5.0 di `docs/output-v5/` (commit `0fe6dae`)
- **Sprint Output-v5 Data Completion SELESAI ✅ (Mei 2026)** — printables/persiapan TP01–14 (113 entries), vocab fix TP09/10, kelas field TP01–14, kurikulum default Kelas 1, SW v59 (commit `a904b73`)
- **Sprint Lihat Kurikulum Fix SELESAI ✅ (Mei 2026)** — "Lihat Kurikulum lengkap →" kini navigasi ke TP dan kelas yang benar (commit `d4ea64c`)
- **Sprint UX & Nilai Formatif SELESAI ✅ (Mei 2026)** — reorder menu, rename Sumatif Mid Semester, Nilai Formatif view-only, detail per sesi per siswa, auto-next penilaian, hapus toast precache (commit `179695d`)
- **Sprint Offline Readiness Audit SELESAI ✅ (Mei 2026)** — siswa-history.js ditambah ke SW precache, PDF_PATTERN diupdate ke .docx, dead code dihapus, SW v60 (commit `4b382dc`)
- **Sprint TTS Vocab Chip SELESAI ✅ (Mei 2026)** — vocab chip di layar Kurikulum kini memutar TTS via Web Speech API, event delegation, no window exposure (commit `f38ca3d`)
- **Sprint Bug Fix — Presensi & Runtime SELESAI ✅ (Mei 2026)** — 7 bug fix di dashboard.js + sesi-runtime.js (commit `6f5218e`)
- **Sprint Presensi Fix + DARURAT Batch + Runtime Teks + TP15–18 Data SELESAI ✅ (Mei 2026)** — presensi default H, nav fix, batch-convert.js rewrite DARURAT_RE, TP01–18 regenerated, teks Fase A/B/C split paragraf, data manual TP15–18 lengkap, SW v61 (commit `3f384c2`)
- **Sprint CSV Download + SAS SELESAI ✅ (Mei 2026)** — rename label PDF→CSV, migrasi 4 fungsi download ke CSV, nilaiDownloadSAS baru, card Sumatif Akhir Semester di Unduh & Cetak (commit `f307eb9`)
- **Sprint Audit Layar Nilai + Fix nilaiDraft Leak SELESAI ✅ (Mei 2026)** — hapus duplicate export generatePDFRapor, rewrite nilaiDownloadFormatif1 CSV per sesi/mode/perilaku, audit _renderUnduh (subtitle CSV, sumatif 1 tombol, label Indonesia), reset nilaiDraft di mount(), SW v64 (commit `9b31ac1`)
- **Sprint Refactor Multi-Fase SELESAI ✅ (Mei 2026)** — `_tpRange` → `_TP_RANGE_MAP`, `kelasOk` extend ke kelas 3–6, progress bar dinamis via `getAllTP().length`
- **Sprint Fix Kurikulum.js Fase B SELESAI ✅ (Mei 2026)** — fase dinamis dari session.kelas, header/CP/ATP reaktif per filter kelas, konten CP & ATP Fase B diperbarui sesuai BSKAP 046/2025 (commit `4bfa872`)
- **Sprint Printables Fase B SELESAI ✅ (01/06/2026)** — printables[] 22 TP Fase B, modal mode cetak 5 pilihan, PNG 140 file dikompres 275MB→79MB (71%), SW flaf-v93 (commit `b3a031e`)
- **Fix nilai.js Fase B — integrasi multi-fase SELESAI ✅ (30/05/2026)** — fix mencakup dua layer:
  - `screens/nilai.js` (commit `ee0ad26`): ganti import FASE_A → getAllTP() dari registry, hapus _TP_RANGE_MAP dan _tpRange() hardcode, _tpList() filter by tp.kelas, fix lookup _renderFormatifDetail filter allTP by _state.tingkat sebelum .find() — cegah overlap nomor TP lintas fase
  - `storage/nilai.js` (commit `76e95e4`): getRekapSemua & getRekapAkhir dinamis per tingkat (1–4) + totalTP dinamis via tpRange.length + fix fungsi SASGanjil1/2
  - SW cache bump v88 (commit `986d4ca`) — verified live di browser ✅

### Detail Migrasi TP
- Kelas 1: TP 01–06 ✅ (lengkap, sudah diaudit di commit `a2a7a7c`)
- Kelas 2: TP 07–08 ✅ (sesi M3, commit `6a0f035`)
- Kelas 2: TP 09 Animals ✅ (sesi M4)
- Kelas 2: TP 10 Food and Drinks ✅ (sesi M5)
- Kelas 2: TP 11 Daily Routines ✅ (sesi M6)
- Kelas 2: TP 12 Body Parts ✅ (sesi M7)
- Kelas 2: TP 13 Weather ✅ (sesi M8)
- Kelas 2: TP 14 In the Classroom ✅ (sesi M9)
- Kelas 2: TP 15 Feelings and Emotions ✅ (sesi M10)
- Kelas 2: TP 16 Simple Story Retelling ✅ (sesi M11)
- Kelas 2: TP 17 My Hobbies ✅ (sesi M12)
- Kelas 2: TP 18 Integrative Project (My World) ✅ (sesi M13)

## Fase 5 — Status Build Runtime Baru

### Keputusan Arsitektural (Terkunci)
- **Pengganti penuh RT v6** — tidak ada compatibility layer, semua 18 TP sudah v4.3
- **5 state machine**: preview → entering → running → selesai → closure
- **Resume** sebagai cabang dari preview
- **Unit terkecil: `langkah[]`** — fase-a.js hanya punya langkah[], bukan aktivitas[]
- **Layout mengikuti UI-SKETCH.html** — app-header tipis / app-body flex:1 / app-footer
- **Overlay kondisi 2 tahap**: pilih kondisi → detail fallback + instruksi konkret
- **Runtime full layar**: breadcrumb, ds-sesi-header, ds-step-indicator, ds-step-nav disembunyikan saat step 2–4

### Progress Build
```
B1  ✅ sesi-runtime.js + sesi-runtime.css  (commit 2f275c8)
B2  ✅ dashboard.js: hapus RT v6, mount sesi-runtime  (commit da46ccd)
B3  ✅ dashboard.css: hapus rt-* classes  (commit da46ccd)
B4  ✅ index.html: tambah link sesi-runtime.css  (commit ca699ab)
FIX ✅ sesi-runtime redesign UI-SKETCH + runtime full layar  (commit 6203e52)
VAL ✅ full flow validated — production ready  (commit 7ae6035)
```

## Fase 6 — siswa_per_kelas IDB Store
- DB_VERSION: 5 → 6
- Store `siswa_per_kelas` ditambahkan
- `updateSpeakCount` dipanggil saat Closure

## Fase 7 — UI Saran Observasi
- Closure screen: "💡 Besok coba perhatikan lebih ke:" + top 3 siswa
- `_renderClosure` async, inject `sr-obs-card`

## Fase 8 — UI Sprint
- Dark theme selaras `style.css` & `dashboard.css`
- `_buildTabMateri` ringkas — collapse deskripsi & indikator

## Fase 9 — Mode Fungsional TP 15–18
- Field `mode` ditambah ke `langkah[]` TP 15–18
- Runtime baca `langkah.mode?.[_state.mode]?.bantuan` → panel `sr-mode-bantuan`

## Fase 10 — Mode Fungsional TP 01–14
- Field `mode` ditambah ke semua `langkah[]` TP 01–14 di `fase-a.js`
- Commit: `c796acc`

## Fase 11 — ObservationCapture
- `_renderSelesai` async + inject kartu observasi (3 siswa, 4 tag)
- Store `obs_log` ditambah (DB_VERSION 7)
- `saveObsTags` ditambah ke `siswa-history.js`
- **CATATAN**: Fase 11 direvisi di Fase 12 — ObservationCapture dihapus

## Fase 12 — Overlay Penilaian Siswa

### Keputusan Arsitektural (Terkunci)
- **Posisi tombol**: layar `running`, di bawah "⚠ Kondisi kelas bermasalah?", hanya muncul saat fase Inti
- **Format**: overlay — tidak memutus alur mengajar
- **Accordion**: auto-open per siswa — setelah dinilai, tutup otomatis dan siswa berikutnya terbuka
- **Pagination**: 5 siswa per halaman, auto-next setelah siswa ke-5 dinilai
- **Mode Cepat**: ★ Lancar / ◐ Berkembang / ○ Perlu dampingi + aktif/perlu dorongan/belum siap
- **Mode Detail**: L/S/R angka 0–100 + aktif/perlu dorongan/belum siap
- **ObservationCapture (Fase 11)**: DIHAPUS

### Yang Dikerjakan
- DB_VERSION 8, store `penilaian_log`
- `savePenilaian()` + `getRekapFormatifTP()` di `siswa-history.js`
- Overlay accordion Mode Cepat (★◐○) & Mode Detail (L/S/R)
- Tombol penilaian di fase Inti, CSS `sr-pn-*`
- Fase Penilaian dihapus dari semua 18 TP di `fase-a.js`
- ObservationCapture & card observasi Fase 7 dihapus

## Fase 13 — Printables (Kartu Cetak Guru)

### Keputusan Arsitektural (Terkunci)
- **Trigger**: tombol "🖨 Cetak Kartu Persiapan" di dalam container "Siapkan Sebelum Kelas" (layar Materi / Step 0)
- **Output**: `window.print()` — popup window berisi halaman cetak bersih
- **Format gambar**: PNG, square 1:1 (1024×1024), gaya ilustrasi kartun anak Indonesia
- **Sumber gambar**: ChatGPT DALL-E, di-cache SW saat pertama online
- **Lokasi gambar**: `assets/images/printables/`
- **Cache strategy**: ikut `cacheFirstAppShell` (SW v54)
- **Layout cetak**: grid 4 kolom, label per kartu, footer tanggal cetak

### File yang Disentuh
| File | Perubahan |
|------|-----------|
| `data/fase-a.js` | Field `printables[]` di TP 01–18 (TP 15–18 via import docs/) |
| `data/printables.js` | **BARU** — `generatePrintHTML(tp)` generator |
| `screens/dashboard.js` | Import + tombol cetak + `dashCetakKartu()` |
| `sw.js` | v53→v55, precache 136 path gambar + 18 modul ajar .docx (TP 01–18) |
| `assets/images/printables/` | 136 gambar PNG (TP 01–18) |

### Status Gambar per TP
| TP | Nama | Jumlah | Status |
|----|------|--------|--------|
| 01 | Greetings & Farewells | 8 | ✅ |
| 02 | Introducing Myself | 3 | ✅ |
| 03 | Classroom Instructions | 6 | ✅ |
| 04 | Numbers | 20 | ✅ |
| 05 | Colors | 9 | ✅ |
| 06 | Shapes | 6 | ✅ |
| 07 | Family | 6 | ✅ |
| 08 | My House | 6 | ✅ |
| 09 | Animals | 10 | ✅ |
| 10 | Food and Drinks | 11 | ✅ |
| 11 | Daily Routines | 8 | ✅ |
| 12 | Body Parts | 8 | ✅ |
| 13 | Weather | 6 | ✅ |
| 14 | In the Classroom | 6 | ✅ |
| 15 | Feelings & Emotions | 7 | ✅ |
| 16 | Simple Story Retelling | 6 | ✅ |
| 17 | My Hobbies | 8 | ✅ |
| 18 | Integrative Project | 2 | ✅ |

### Prompt File Tersedia
- `flaf-prompts-lengkap.md` — 149 prompt ChatGPT untuk semua 18 TP
- Style reference: Indonesian school child, flat cartoon, square 1:1, no text

### Git Log Fase 13
```
147eed4  fix: title tab cetak undefined → tp.nama
792582c  fix: judul lembar cetak undefined → tp.nama
c494685  merge: pertahankan versi lokal fase-13
8c3cbec  fase-13: printables — kartu cetak guru TP 01-10
```

## Git Log (10 commit terakhir)
```
b3a031e  compress: Fase B 140 PNG 275MB→79MB (71%), revert compress-png.js, bump sw flaf-v93
c279818  feat: add 140 printable PNG assets for Fase B
d22e592  feat: add printables[] to all 22 Fase B TPs, update sw.js cache to flaf-v91
378c137  docs: update CONTEXT.md — UI polish dashboard 8 item (5bf94fb)
5bf94fb  style(dashboard): UI polish — chevron gold, opacity raise, Sebelumnya=Lanjut, vocab chip padding
986d4ca  fix(sw): bump cache v88 — label diferensiasi + nilai fix
420fbf9  feat: label diferensiasi di card runtime
bf7753e  feat: tambah preOpening dan diferensiasi ke TP 15–18 runtime
4bfa872  fix(kurikulum): CP & ATP Fase B reaktif per filter kelas
5bf94fb  style(dashboard): UI polish 8 item
```

## Struktur Folder Penting
```
FLAF/
├── screens/
│   ├── dashboard.js        ← RT v6 dihapus, sesi-runtime terpasang, _buildTabMateri ringkas
│   ├── dashboard.css       ← rt-* classes dihapus
│   ├── sesi-runtime.js     ← 5-state machine, dark theme, mode bantuan, overlay penilaian (Fase 12 ✅)
│   ├── sesi-runtime.css    ← sr-* prefix, dark theme, sr-mode-bantuan, overlay penilaian (Fase 12 ✅)
│   ├── nilai.js            ← layar Kelas — card unduh & cetak (Fase 12 ✅)
│   ├── nilai.css           ← styling card unduh & cetak (Fase 12 ✅)
│   ├── kurikulum.js/css
│   ├── jejak.js
│   └── activation.js
├── data/
│   ├── index.js
│   ├── fase-a.js           ← 18 TP v4.3, field mode[] + printables[] (TP 01-18); import TP01–14 dari docs/output-v5/
│   └── printables.js       ← generatePrintHTML(tp, mode='standar') — 5 mode cetak, fase-aware base path (Fase A/B/C)
├── modules/
│   ├── pdf-generator.js    ← generate PNG rekap nilai per TP & rekap akhir semua TP (canvas HTML5, tanpa library)
│   └── pdf-handler.js      ← download modul ajar via cache-first (serve dari pdf/, fallback ke network)
├── storage/
│   ├── db.js               ← DB_VERSION 10, stores: kv, log_queue, nilai_data, penilaian_log, presensi_log, teacher_data, teaching_log (obs_log + siswa_per_kelas DIHAPUS)
│   ├── siswa-history.js    ← savePenilaian() saja (getSiswaHistory, updateSpeakCount, getSortedBySpeakCount DIHAPUS)
│   ├── logger.js
│   ├── export.js
│   ├── jejak.js
│   ├── nilai.js
│   └── presensi.js
├── assets/
│   └── images/
│       ├── printables/         ← 136 PNG (TP 01-18, Fase A)
│       └── printables_fase_b/  ← 140 PNG (TP B01-B22, Fase B) — dikompres 275MB→79MB
├── docs/
│   ├── fase-3-spec/        ← UI-SKETCH.html ✅ acuan layout runtime
│   ├── output-v5/          ← tp-01..18-v5.js — generated batch converter (Mei 2026)
│   ├── sesi-m10/tp-15.js   ← langkah[] + field mode ✅
│   ├── sesi-m11/tp-16.js   ← langkah[] + field mode ✅
│   ├── sesi-m12/tp-17.js   ← langkah[] + field mode ✅
│   └── sesi-m13/tp-18.js   ← langkah[] + field mode ✅
├── pdf/                    ← modul ajar per TP (lihat §Modul Ajar)
├── sw.js                   ← Service Worker v93 (flaf-v93)
├── manifest.json
├── app.js
└── index.html
```

## Aset Printable

**Fase A:**
- **Lokasi**: `assets/images/printables/`
- **Pola nama**: `tp{NN}-{descriptor}.png`
- **Cakupan**: TP01–18, 136 file, ~49 MB

**Fase B:**
- **Lokasi**: `assets/images/printables_fase_b/`
- **Pola nama**: `tp-b{NN}-{descriptor}.png`
- **Cakupan**: TP B01–B22, 140 file, ~79 MB (dikompres dari 275 MB)

- **Referensi**: field `printables[]` di setiap TP → dibaca oleh `data/printables.js`
- **Generator**: `generatePrintHTML(tp, mode)` — 5 mode: hemat/standar/flash/display/poster
- **Base path**: dipilih otomatis via `PRINTABLES_BASE_MAP` berdasarkan `tp.fase` atau `tp.id` prefix

## Modul Ajar (pdf/)

Folder `pdf/` berisi modul ajar yang diunduh guru via `modules/pdf-handler.js` (cache-first):

| Range | Format | Pola nama |
|-------|--------|-----------|
| TP01–18 | `.docx` | `Modul_Ajar_V3_TP{NN}_{Topic}.docx` |

**Konversi selesai** — semua 18 TP sudah `.docx` (Tahap 5 ✅).

## Technical Debt yang Diketahui

### TD-1: Dua Skema Printable Hidup Berdampingan
- **TP01–14** pakai field `printables[]` → PNG via `data/printables.js`; field `pdf_ref` ada di tiap TP
- **TP15–18** pakai field `media[]` → `pdf_ref` via `modules/pdf-handler.js`
- Belum diunifikasi. Jangan merge dua skema ini tanpa keputusan arsitektural.
- `kurikulum.js` baca `tp.pdf_ref` (bukan construct dari `tp.id`); `pdf-handler.js` terima `.docx`

### TD-2: pdf_ref Mismatch di TP16 dan TP18
✅ RESOLVED — pdf_ref dikoreksi ke tp-16-v1.pdf dan tp-18-v1.pdf; kemudian diupdate ke .docx (Tahap 5)

### TD-3: Mode Bantuan Boilerplate di TP03–14
- Semua `instruksi` langkah di TP03–14 mendapat teks bantuan generik yang sama.
- Semua `audio` langkah di TP03–14 mendapat teks bantuan generik yang sama.
- TP01–02 dan TP15–18 sudah punya bantuan kontekstual per langkah.
- Catatan pm: pm annotations TP01–14 (93 missing) — INTENTIONAL BY DESIGN (keputusan Mei 2026).
  Runtime berjalan normal tanpa pm. Tidak berdampak ke pengalaman guru di lapangan.
  Jangan inject pm ke TP01–14 tanpa sesi migration eksplisit.

### TD-4: Encoding Artifact
- String `'2├ù'` (harusnya `2×`) masih ada di TP02 dan TP12 — sisa mojibake dari migrasi.

### TD-8: Footer printables.js hardcoded Fase A/B
- `data/printables.js` baris 145: `tp.kelas <= 2 ? 'Fase A' : 'Fase B'` — tidak support Fase C.
- Fix saat Fase C onboard.

### TD-9: Nilai screen bug Fase B (Kelas 3/4)
- `getRekapSemua()`, `getRekapAkhir()`, `_renderUnduh()` di `storage/nilai.js` + `screens/nilai.js`
- Fungsi-fungsi ini mungkin belum sepenuhnya correct untuk Kelas 3/4 — belum diverifikasi end-to-end dengan data Fase B.
- Verifikasi diperlukan sebelum distribusi ke guru Kelas 3/4.

### TD-5: Komentar Stale di fase-a.js
✅ RESOLVED — Dua baris stale dihapus dari header fase-a.js

### TD-6: jsPDF CDN
✅ RESOLVED — Script tag jsPDF (cdnjs) dihapus dari index.html — tidak dipakai oleh kode manapun

### TD-7: Field `jp` tidak ada di fase-a.js dan meta
✅ RESOLVED — JP dihapus dari UI kurikulum (baris 172, 229, 243, 313 screens/kurikulum.js)
- `tp.jp` dan `meta.total_jp` tidak pernah didefinisikan di fase-a.js
- Semua referensi menghasilkan `undefined` di UI — dihapus di commit `1ad4012`

---

## Sprint Data Flow — Mei 2026

### IndexedDB Store — Status Live

| Store | Status | Writer | Reader |
|-------|--------|--------|--------|
| `teacher_data` | ✅ **AKTIF** | `dashboard.js:_doSelesaiSesi()` saat sesi selesai | `app.js:_populateStartScreen()` → progress bar X/18 |
| `teaching_log` | ✅ **AKTIF** — field `mood` ditambahkan | `jejak.log()` via `_doSelesaiSesi()` | Jejak card, streak, share summary |
| `penilaian_log` | ✅ **AKTIF** — jalur utama nilai formatif | `siswa-history.js:savePenilaian()` dari overlay runtime | `nilai.js:getRekapFormatifTP()` → `_renderFormatif()` + `nilaiDownloadFormatif1()` |
| `presensi_log` | ✅ AKTIF | `presensi.simpan()` dari `_doSelesaiSesi()` | PDF rekap presensi |
| `nilai_data` | ✅ AKTIF (sumatif) | `nilai.js:setNilaiFormatif/LSR/SAS` (via stepper) | `getRekapRapor()` |
| `kv` | ✅ AKTIF | session, resume state | App-wide |
| `siswa_per_kelas` | 🗑️ **DIHAPUS** (DB v10) | Store dihapus dari IDB + semua fungsi di siswa-history.js dihapus | — |
| `obs_log` | 🗑️ **DIHAPUS** (DB v9) | Store dihapus dari IDB + saveObsTags() dihapus dari siswa-history.js | — |
| `log_queue` | ℹ️ **IN-MEMORY ONLY** | logger.js queue in-memory, tidak ada IDB read/write | — (flush ke console saja) |

**Key format `teacher_data`:** `progress_tp_N` (N = 1–18)
**Value format:** `{ status: 'selesai', rombel_id, rombel_nama, taught_at: Date.now() }`

**Field `mood` di `teaching_log`:**
- Ditulis dari `_state.closureMood` (sesi-runtime.js)
- Propagasi: `_onDone({ mood })` → `_onSesiDone()` → `_skenario.mood` → `jejak.log(extra.mood)` → entry IDB

**`nilai_data.formatif_*`:** ditulis Step 5 stepper lama (diganti placeholder) — tidak dibaca output apapun. Data lama yang tersimpan tidak dipakai.

### Fitur — Status Live

| Fitur | Status Sebelum | Status Sekarang |
|-------|---------------|-----------------|
| Progress bar X/18 TP (home screen) | ❌ PUTUS — `teacher_data` tidak ditulis | ✅ TERHUBUNG |
| Mood closure | ❌ PUTUS — `closureMood` tidak dipropagasi | ✅ TERHUBUNG — tersimpan di `teaching_log` |
| Nilai Formatif | ⚠️ PARSIAL — dua jalur tak terhubung | ✅ TERHUBUNG — jalur tunggal via `penilaian_log` |
| Step 5 asesmen stepper | ❌ PUTUS — tulis ke `nilai_data.formatif_*` yang tidak dibaca | ✅ DIGANTI — placeholder informatif |

### Layar Nilai — View `formatif`

- **Router:** `_render()` di `screens/nilai.js` — `if (_state.view === 'formatif') await _renderFormatif(token);`
- **Entry point:** `window.nilaiMenuFormatif()` → set `_state.view = 'formatif'`
- **Card di menu:** posisi 2 (setelah "Kelola Siswa"), sebelum "Sumatif Mid Semester"
- **Konten:** daftar TP view-only — tiap TP row clickable → `nilaiBukaFormatifTP(nomor)` → view `formatif-detail`
- **Detail view:** `_renderFormatifDetail` via `getSesiFormatifTP(kelasId, tpNomor)` — per-sesi breakdown dari `penilaian_log`
- **Back:** `nilaiBackToFormatif()` → kembali ke `'formatif'`

### Dead Features — Status Terkini

- `obs_log`: ✅ **DIHAPUS** (commit `2145cd8`) — store dihapus DB v9, saveObsTags() dihapus dari siswa-history.js
- `siswa_per_kelas`: ✅ **DIHAPUS** (commit `2145cd8`) — store dihapus DB v10, getSiswaHistory/updateSpeakCount/getSortedBySpeakCount dihapus
- `log_queue` IDB: ✅ **DISEDERHANAKAN** (commit `2145cd8`) — logger.js kini in-memory only, tidak ada IDB read/write
- `nilai_data.formatif_*`: ⏳ masih ada — ditulis stepper lama (Step 5 sudah jadi placeholder) — tidak dibaca output apapun; data lama aman tapi tidak terpakai

### Commit Referensi Sprint Ini

```
abcbf1e  feat(runtime): redesign running state
2527af6  fix: connect progress TP, mood closure, formatif view
         ├── dashboard.js: write progress_tp_N to teacher_data on sesi selesai
         ├── sesi-runtime.js + dashboard.js + jejak.js: propagate closureMood
         │   through _onDone → _onSesiDone → jejak.log → teaching_log
         ├── dashboard.js: replace Step 5 asesmen with informational placeholder
         └── nilai.js: add Nilai Formatif card + _renderFormatif() view
```

---

## Schema Tier Policy

> **Kebijakan permanen** — tidak berubah kecuali ada keputusan arsitektural eksplisit baru.
> Baca sebelum menyentuh TP, runtime, atau pm annotations.

### Tiga Tier TP

| Tier | TP | Karakteristik runtime |
|------|----|-----------------------|
| **Canonical Modern** | TP15–18 | instruksi + audio + respons_siswa + diferensiasi + darurat; pm lengkap; bantuan kontekstual; tidak ada embedded structural content |
| **Transitional Modern** | TP01–03 | instruksi + audio + respons_siswa (TP01–02) + diferensiasi + darurat proper; pm partial; bantuan kontekstual |
| **Quarantined Working Legacy** | TP04–14 | instruksi + audio efektif; pm tidak hadir (intentional); bantuan generik (TD-3); DIFERENSIASI/DARURAT embedded dalam instruksi.teks |

**Canonical reference**: `docs/sesi-m11/tp-16.js` (TP16 — 14/14 pm, full tipe set, bantuan kontekstual)

### Compatibility Boundary

**Boundary berada di DATA (`fase-a.js`) — bukan di runtime CODE (`sesi-runtime.js`).**

Runtime membaca semua 18 TP melalui code path yang sama. Tidak ada branching per TP nomor
atau ID. Degradasi UX di TP04–14 (tidak ada pm badge, tidak ada 2-kolom diferensiasi,
bantuan generik) adalah **intentional tolerated debt**, bukan bug.

### Tolerated Debt TP04–14 — Tidak perlu diperbaiki tanpa sesi migration eksplisit

| Debt | Jumlah | Impact runtime |
|------|--------|----------------|
| pm annotations absent | 97 instruksi | Kosmetik — no badge |
| bantuan generik (TD-3) | ~110 langkah | Minor — generic advice setiap langkah |
| Embedded DIFERENSIASI/DARURAT | 22 instruksi | Degraded — teks mentah, bukan 2-kolom |
| Tidak ada respons_siswa | TP03–14 | Feature gap — no respons badge |

**97 pm warnings = INTENTIONAL TOLERATED DEBT.** Jangan inject pm ke TP04–14 tanpa sesi
migration eksplisit. Parity forcing tanpa review boundary = false compliance.

### Anti-Branching Rule (Konstitusional)

`sesi-runtime.js` tidak pernah mengandung kondisi berdasarkan identitas TP:

```javascript
// DILARANG — jangan pernah tambahkan ke sesi-runtime.js:
if (tp.nomor <= 14) { ... }
if (tp.id.match(/tp-0[1-9]/)) { ... }
if (langkah.teks?.startsWith('DIFERENSIASI')) { ... }
if (langkah.teks?.includes('JIKA WAKTU TERSISA')) { ... }
```

### Progressive Enhancement Rule (Konstitusional)

Semua field langkah bersifat optional dari perspektif runtime — absennya field tidak pernah
menjadi error atau kondisi khusus:

```javascript
// WAJIB — safe access, bukan precondition:
const tipe    = langkah.tipe || 'instruksi';          // fallback, bukan branch
const pm      = langkah.pm;                            // undefined = no badge, bukan error
const bantuan = langkah.mode?.[mode]?.bantuan;         // undefined = no box, bukan error
```

### Selective Migration — Keputusan Implementasi

TP baru (TP19+) wajib mengikuti canonical tier. Migrasi TP04–14 hanya dilakukan dengan
sesi eksplisit, urutan wajib: **(1)** bantuan kontekstual → **(2)** extract embedded
DIFERENSIASI/DARURAT → **(3)** pm annotation.

**Optional low-cost migration (bisa dilakukan kapan saja):**
- TP03: +7 pm annotations — bantuan sudah spesifik, tipe sudah proper
- TP15: +7 pm annotations — bantuan sudah spesifik (docs/ file)
- TP01: +2 pm missing · TP02: +3 pm missing

### Schema Reference yang Berlaku

`docs/fase-1-spec/SCHEMA.md` mendeskripsikan schema `aktivitas[]` dari Fase 1 — **sudah
obsolete**. Runtime v4.3 tidak membaca `aktivitas[]`, `advance`, `observation_validation`,
atau `closure_reinforcement` sebagai field runtime.

---

## Aturan Kerja (WAJIB diikuti Claude)
- Setiap perubahan kode: sebutkan **nama file**, **blok lama presisi** (ctrl+F-findable), **blok baru**
- **Jangan tulis kode sebelum diminta**
- Mobile-first wajib — uji logika di 320×640px sebelum desktop
- Workflow wajib: **ANALYZE → DESIGN → BUILD → HARDEN → VALIDATE**
- Konfirmasi satu perubahan sebelum lanjut ke berikutnya
- Jangan putuskan sendiri pertanyaan arsitektural — tanya dulu

## Layout Rules (WAJIB)
- Tidak ada `100vh` atau `position:fixed` pada main layout
- Primary actions visible tanpa scroll di semua target phone size
- Tidak ada fixed width pada main layout
- Natural scroll diprioritaskan
- Tidak ada horizontal scroll di 320px width

## Mode Fungsional — Status per TP

| TP | Nama | Mode di langkah[] |
|----|------|-------------------|
| 01–14 | Greetings s/d In the Classroom | ✅ Fase 10 |
| 15–18 | Feelings s/d My World | ✅ Fase 9 |

## Pattern Inklusivitas (TERBENTUK di Sesi M3)

### Pattern 1 — Scripted micro_script Inklusivitas
### Pattern 2 — Skip Aktivitas Personal di Main Flow
### Pattern 3 — Kartu Generik (Bukan Bring-from-Home)
### Pattern 4 — Aktivitas "Pretend" sebagai Substitusi
### Pattern 5 — Fallback `sensitif` Wajib di Aktivitas Personal

## Pattern Lain yang Sudah Terbentuk

### Pattern A — TPR sebagai Energy Break di Tengah Inti
### Pattern B — Closure Transfer ke Rumah
### Pattern C — Diferensiasi 3-Tier yang Konsisten
- **Mudah**: vocab dikurangi, pola pendek, tempo lambat, bantuan tinggi
- **Normal**: vocab penuh, pola lengkap, tempo bertahap, bantuan sedang
- **Tantangan**: pola tambahan, tempo cepat, ekstensi, bantuan minimal

## Status Sesi

```
⚠️  FASE A SCHEMA: v4.3 selesai (TP01–18). Known issues tercatat di §Technical Debt.
✅ UI-SKETCH.html DISETUJUI (acuan layout runtime)
✅ FASE 5 BUILD COMPLETE + POST-FIX + VALIDATED
✅ FASE 6 COMPLETE — siswa_per_kelas IDB store
✅ FASE 7 COMPLETE — UI saran observasi di Closure screen
✅ FASE 8 COMPLETE — dark theme + UI ringkas layar Materi
✅ FASE 9 COMPLETE — mode fungsional TP 15-18
✅ FASE 10 COMPLETE — mode fungsional TP 01-14
✅ FASE 11 COMPLETE — ObservationCapture (direvisi di Fase 12)
✅ FASE 12 COMPLETE — Overlay penilaian siswa
✅ FASE 13 COMPLETE — Printables kartu cetak guru (TP 01-18)
✅ SKENARIO LIVE MODE v2 COMPLETE — flaf-skenario-tp01-v2.txt s/d tp18-v2.txt (Mei 2026)
✅ SCHEMA v5.0 TP15–18 COMPLETE — tp-15-v5.js s/d tp-18-v5.js (Mei 2026)
   Struktur: tipe/teks/bantuan(string|string[]|null)/cue/darurat/energi per langkah
   Root baru: checklist[], energi_map[], catatan{risiko[],autonomy[]}
   mode.mudah/normal/tantangan DIHAPUS | pm DIHAPUS | file lama tidak ditimpa
✅ SPRINT DATA FLOW COMPLETE (Mei 2026) — 2527af6
   - teacher_data: progress_tp_N ditulis saat sesi selesai → progress bar X/18 hidup
   - teaching_log: field mood aktif (closureMood dari closure screen)
   - nilai.js: view 'formatif' aktif → daftar TP + tombol Unduh PDF per TP
   - dashboard.js: Step 5 asesmen → placeholder informatif

✅ SPRINT DEAD CODE + BATCH CONVERTER COMPLETE (Mei 2026) — 2145cd8, 0fe6dae
   - obs_log store + siswa_per_kelas store DIHAPUS (DB_VERSION 10)
   - logger.js: IDB logic dihapus → queue in-memory only
   - screens/jejak.js: mood render aktif (MOOD_MAP lancar/biasa/berat → emoji + label)
   - tools/converter.html: fix PRE-OPENING bug di determineFase()
   - tools/batch-convert.js: batch converter Node.js (TP01–14 dari skenario txt)
   - docs/output-v5/tp-01..14-v5.js: 14 file v5.0 dengan checklist, energi_map, catatan, indikator, vocab
   - data/fase-a.js: import TP01–14 dimigrasikan dari sesi-mN/ ke docs/output-v5/

✅ SPRINT OUTPUT-V5 DATA COMPLETION (Mei 2026) — 025c47b → a904b73
   - printables[] + persiapan[] diisi TP01–14 (113 entries PNG, format { file, label })
   - vocab TP09: +frog, +lion | vocab TP10: +apple, +banana
   - printables label TP04: 'Num 01–20' → '1–20'
   - kelas field TP01–14: TP01–09=1, TP10–14=2 (filter kurikulum aktif)
   - docs/output-v5/ (14 file) ditambah ke SW APP_SHELL precache
   - screens/kurikulum.js: defaultKelas 'semua' → 1 (Kelas 1 aktif saat load)
   - SW: v57 → v58 → v59

✅ SPRINT LIHAT KURIKULUM FIX (Mei 2026) — 29de097 → d4ea64c
   - dashboard.js: "Lihat Kurikulum lengkap →" meneruskan tpNomor+kelas ke navigateTo
   - app.js: navigateTo meneruskan opts ke _onScreenEnter
   - app.js: _onScreenEnter menerima opts = {} sebagai parameter
   - app.js: kurRoot.dataset.rendered di-set setelah renderKurikulum berhasil (defer)
   - app.js: kurFilterKelas dipanggil sebelum scrollIntoView agar kelas filter aktif dulu

✅ SPRINT UX & NILAI FORMATIF (Mei 2026) — 30d85a2 → 179695d
   - nilai.js: reorder menu Kelas — Nilai Formatif naik ke posisi 2
   - nilai.js: rename "Sumatif Lingkup Materi" → "Sumatif Mid Semester"
   - nilai.js: hapus tombol Unduh PDF dari Nilai Formatif (view-only)
   - nilai.js + storage/nilai.js: Nilai Formatif detail per sesi per siswa (klik TP → riwayat sesi via getSesiFormatifTP)
   - sesi-runtime.js: auto-next setelah pilih perilaku (bukan setelah pilih capaian)
   - app.js: hapus showToast saat precache PDF di background

✅ SPRINT OFFLINE READINESS AUDIT (Mei 2026) — 8e55c96 → 4b382dc
   - sw.js: tambah storage/siswa-history.js ke APP_SHELL precache (bug: 404 saat offline)
   - sw.js: bump CACHE_VERSION v59 → v60
   - sw.js: PDF_PATTERN diupdate ke /\/pdf\/.*\.docx$/i (era .docx)
   - sw.js: hapus cleanupOldPDFVersions (dead code — regex .pdf tidak pernah match .docx)
   - modules/pdf-handler.js: hapus konstanta VALID_MIME stale (tidak dipakai)
   - modules/pdf-handler.js: perbaiki error string _validateArgs (.pdf → .pdf atau .docx)

✅ SPRINT TTS VOCAB CHIP (Mei 2026) — f38ca3d, ba89e1d
   - screens/kurikulum.js: _kurTtsStop + _kurTtsSpeak (Web Speech API, lang en-US, rate 0.9)
   - Vocab chip: <span> → <button data-vocab="..."> + event delegation di _attachEventListeners
   - screens/kurikulum.css: hover/active/kur-vocab-chip--playing states
   - assets/images/printablessss/: 88 PNG typo folder dihapus (ba89e1d)

✅ SPRINT PDF_REF FIX (Mei 2026) — 4859bd3, e30a3f8
   - docs/output-v5/tp-01..14-v5.js: tambah root-level pdf_ref ke 14 file TP01–14
   - screens/kurikulum.js: resolve pdfFilename via tp.pdf_ref || tp.media?.find()?.pdf_ref || null
   - screens/kurikulum.js: button guard null — disabled + kur-pdf-btn--unavailable jika pdf_ref tidak ada
   - pdf/Modul_Ajar_V3_TP15_Feelings_and_Emotions.docx + TP16: konten diperbarui (e30a3f8)

✅ SPRINT BUG FIX — PRESENSI & RUNTIME (Mei 2026) — a0cbe43..6f5218e
   - screens/dashboard.js: navigasi presensi → ‹ Halaman X/Y › (a0cbe43)
   - screens/dashboard.js: reload nilaiCache sebelum hitung dinilai di dashSelesaiSesi (919bfc7)
   - screens/sesi-runtime.js: _langkahPrev mundur ke fase sebelumnya jika langkahIdx=0 (011f4aa)
   - screens/sesi-runtime.js: auto-next penilaian hanya jika capaian sudah diisi (0881d97)
   - screens/sesi-runtime.js: nilai overlay persist via _state.nilaiDraft (0d242fc)
   - screens/sesi-runtime.js: persist dan restore sesiId saat resume (b98b828)
   - screens/sesi-runtime.js: log warning saat langkah null di _renderRunning (6f5218e)

✅ SPRINT PRESENSI FIX + DARURAT BATCH + RUNTIME TEKS + TP15–18 DATA (Mei 2026) — 2beca0b..3f384c2
   - screens/dashboard.js: presensi default H semua siswa saat sesi baru (2beca0b)
   - screens/dashboard.js: nav paginasi presensi pindah ke atas list (2beca0b)
   - screens/dashboard.js: tombol nav presensi fixed 40px, tidak stretch (6166fd8)
   - tools/batch-convert.js: port parser dari converter.html ke Node.js CommonJS
   - tools/batch-convert.js: DARURAT_RE fix — support em-dash (⚠ DARURAT —) selain colon
   - tools/batch-convert.js: multi-line DARURAT continuation logic (lastWas flag)
   - tools/batch-convert.js: extractManualFields() — preservasi kelas, vocab, pdf_ref, dll
   - docs/output-v5/tp-01..18-v5.js: batch regenerated, darurat field terpisah dari teks (2fc27b3)
   - screens/sesi-runtime.js: teks biasa dipecah per Fase A/B/C menjadi div terpisah (1dff4ce)
   - screens/dashboard.js: statusMap diinisialisasi setelah siswaList terload (7393938)
   - storage/nilai.js: getSiswaDinilaiFromLog() — query penilaian_log per kelas+TP (0388d14)
   - screens/dashboard.js: _hitungSiswaDinilai gabungkan nilaiCache dan penilaian_log (0388d14)
   - docs/output-v5/tp-15..18-v5.js: kelas, indikator, vocab, persiapan, printables, pdf_ref (15774b6)
   - sw.js: bump CACHE_VERSION v60 → v61 (3f384c2)

✅ SPRINT CSV DOWNLOAD + SAS (Mei 2026) — 7f4a3e7..f307eb9
   - screens/nilai.js: rename "Sumatif Lingkup Materi" → "Sumatif Mid Semester" (3 occurrences) (7f4a3e7)
   - modules/pdf-generator.js: generatePDFKehadiran() via canvas HTML5, PNG per halaman (38280cf)
   - screens/nilai.js: nilaiDownloadKehadiran migrasi jsPDF → generatePDFKehadiran (38280cf)
   - screens/nilai.js: _downloadCSV helper — BOM UTF-8, Blob + anchor click (ef9e2eb)
   - screens/nilai.js: nilaiDownloadFormatif1 → CSV detail L/S/R + CSV cepat dari penilaian_log (ef9e2eb)
   - screens/nilai.js: nilaiDownloadRekap1 dihapus — redundan (ef9e2eb)
   - screens/nilai.js: nilaiDownloadRapor → CSV (Sumatif Mid Semester, SAS, Rapor) (ef9e2eb)
   - screens/nilai.js: nilaiDownloadKehadiran → CSV (kolom TP{N} DD/MM, status H/S/I/A) (ef9e2eb)
   - screens/nilai.js: nilaiDownloadRekap2 → CSV (kolom per TP + Rerata) (ef9e2eb)
   - screens/nilai.js: nilaiDownloadSAS baru → CSV via getRekapSAS() (0d54dcf)
   - screens/nilai.js: card Sumatif Akhir Semester ditambah di Unduh & Cetak (0d54dcf)
   - modules/pdf-generator.js: hapus duplicate export generatePDFKehadiran (f307eb9)

✅ SPRINT AUDIT LAYAR NILAI + FIX NILAIDRAFT LEAK (Mei 2026) — f7b4492..9b31ac1
   - modules/pdf-generator.js: hapus duplicate export generatePDFRapor (baris 682) (f7b4492)
   - screens/nilai.js: rewrite nilaiDownloadFormatif1 — CSV per sesi, per mode (cepat/detail), kolom Perilaku (ca6e44a)
   - screens/nilai.js: audit _renderUnduh — subtitle "format CSV", sumatif 1 tombol (nilaiDownloadRekap2), perilaku label Indonesia (a91e454)
   - screens/sesi-runtime.js: reset nilaiDraft: null di mount() — cegah draft bocor antar TP (d990716)
   - sw.js: bump CACHE_VERSION v61 → v64 (9b31ac1)

✅ SPRINT FIX COUNTER DINILAI SELESAI ✅ (Mei 2026)
   - getSiswaDinilaiFromLog: filter sudahDinilai (capaian/l/s/r tidak null)
   - _rerenderStep: async + guard await _loadLogSetDinilai() saat step === 6
   - _refreshLogSetDinilai: terima sesiId, sync _flow.sesiId dari runtime
   - SW v70 (commit a58e0c7)

✅ SPRINT FILTER KELAS PER SESSION SELESAI ✅ (Mei 2026)
   - Supabase activation_codes: tambah kolom kelas (text, default 'all')
   - activation.js: baca kelas dari Supabase → simpan ke session IDB
   - dashboard.js: _loadSession return kelas, _buildPilihTPHTML guard kelasOk
   - nilai.js: nilaiTambahKelas disable tombol tingkat tidak sesuai kelas session
   - SW v71 (commit 9e5d452)

✅ SPRINT SOAL STS SELESAI ✅ (Mei 2026)
   - Soal_STS_Fase_A_Kelas_1.docx: 50 soal PG TP 01–05 — di folder pdf/
   - Soal_STS_Fase_A_Kelas_2.docx: 50 soal PG TP 10–14 — di folder pdf/
   - nilai.js: kartu unduh Soal STS Kelas 1 + Kelas 2 di Unduh & Cetak
   - SW v73 (commit d16da57)

✅ SPRINT SOAL SAS SELESAI ✅ (Mei 2026)
   - Soal_SAS_Fase_A_Kelas_1_Ganjil.docx: 50 soal PG TP 01–09
   - Soal_SAS_Fase_A_Kelas_2_Ganjil.docx: 50 soal PG TP 10–18
   - Soal_SAS_Fase_A_Kelas_1_Genap.docx: 50 soal PG TP 01–09
   - Soal_SAS_Fase_A_Kelas_2_Genap.docx: 50 soal PG TP 10–18
   - nilai.js: 4 kartu unduh soal SAS di Unduh & Cetak
   - SW v75 (commit 4f8a8f8)

✅ SPRINT SEMESTER GANJIL/GENAP SELESAI ✅ (Mei 2026) — commit 9688c09
   - storage/nilai.js: setNilaiSumatif/getNilaiSumatif/getRekapSumatif BARU
   - storage/nilai.js: setNilaiSAS/getNilaiSAS/getRekapSAS +semester param
   - storage/nilai.js: getRekapRapor rewrite — (STS + SAS) ÷ 2 per semester
   - screens/nilai.js: menu 8 kartu — STS Ganjil/Genap + SAS Ganjil/Genap
   - screens/nilai.js: _renderSTS BARU — 1 angka per siswa per semester
   - screens/nilai.js: _renderRapor toggle Ganjil/Genap
   - screens/nilai.js: download CSV STS/SAS/Rapor per semester
   - dead code dihapus: _renderTP, _renderInput, nilaiDownloadRekap2 + helpers
   - SW v76 (commit 9688c09)

✅ SPRINT UI NILAI + SOAL STS SELESAI ✅ (Mei 2026)
   - _renderSTS, _renderSAS, _renderRapor: ganti accordion → paginasi ‹ Halaman X/Y ›
   - Tombol paginasi: gold, 52×44px, border #D4AE3A
   - Hierarki warna: badge gold redup, nama siswa .85, label grup .55, counter .35
   - Subtitle kartu Unduh & Cetak disederhanakan → "Unduh nilai" / "Unduh soal"
   - Soal_STS_Fase_A_Kelas_1_Ganjil.docx: 50 soal TP 01–03
   - Soal_STS_Fase_A_Kelas_1_Genap.docx: 50 soal TP 06–07
   - Soal_STS_Fase_A_Kelas_2_Ganjil.docx: 50 soal TP 10–12
   - Soal_STS_Fase_A_Kelas_2_Genap.docx: 50 soal TP 15–16
   - 4 kartu unduh STS di _renderUnduh
   - SW v77 (commit 0fc813c)

✅ SPRINT AUDIT DISTRIBUSI MASAL SELESAI ✅ (Mei 2026)
   - window.onerror + onunhandledrejection — global error handler (commit 2672657)
   - TP15–18 + icon-512 ditambah ke APP_SHELL precache SW v78 (commit e54fdfd)
   - PNG printables dikompres 219MB → 48MB, 78% reduction, sharp compressionLevel 9 (commit 2b93ee6)
   - SW reload ditunda saat sesi mengajar aktif — reload otomatis setelah sesi selesai (commit 3d3da74)
   - Supabase error handling: semua skenario tertangani
   - Samsung Internet v14+: semua fitur kompatibel
   - Export/backup data: lengkap via export.js
   - pm TP01–14 (93 missing): INTENTIONAL BY DESIGN

✅ LANGKAH BERIKUTNYA — Sprint Refactor Multi-Fase (Fase A → A+B+C)

   KONTEKS:
   - Audit kode selesai (Mei 2026) — 4 file perlu diubah, effort ~2–3 jam
   - Supabase kolom 'kelas' sudah fleksibel — nilai '1'–'6' + 'all', tidak perlu ubah schema
   - data/index.js sudah siap multi-fase — tinggal uncomment 2 baris saat fase-b.js siap
   - Pendekatan: satu perubahan per langkah, validasi sebelum commit — jaga Fase A tidak rusak

   LANGKAH (urutan wajib diikuti):
   1. screens/nilai.js — _tpRange: extend ke kelas 3–6, mapping kelas → tpRange dinamis
   2. screens/dashboard.js — _tpList + _buildPilihTPHTML: extend kelasOk ke kelas 3–6
   3. storage/nilai.js — getRekapFormatif + getRekapAkhir: tpRange dinamis per kelas
   4. app.js — angka 18 hardcode → dinamis (minor, kosmetik)
   Setiap langkah: ubah → audit → validasi Fase A tidak rusak → commit

   Hasil sprint:
   - screens/nilai.js: `_tpRange` → `_TP_RANGE_MAP` — kelas 3–6 → `[]`, 'all' dinamis dari `getAllTP()`
   - screens/dashboard.js: `kelasOk` extend ke kelas 3–6 — pesan "Rombel tidak sesuai" tidak lagi muncul untuk kelas 3–6
   - app.js: `getAllTP().length` menggantikan hardcode `18` di `_populateStartScreen`
   - Empat sisa angka 18 dibiarkan: warna CSS, default param, label denominator, fallback SW

   SETELAH REFACTOR SELESAI:
   - Tulis data/fase-b.js (18 TP Kelas 3–4) — schema v4.3 sama dengan Fase A
   - Uncomment fase-b.js di data/index.js
   - Tambah path fase-b.js ke SW precache
   - Buat soal STS + SAS Fase B
   - Distribusi ke guru Kelas 3–4

   CATATAN ARSITEKTUR:
   - Satu app untuk SD Fase A + B + C — tidak pisah app
   - Fase D (SMP) dan E–F+SMK → evaluasi arsitektur terpisah setelah Fase C selesai
   - Kolom 'kelas' Supabase: '1'/'2' = Fase A, '3'/'4' = Fase B, '5'/'6' = Fase C, 'all' = semua

⏳ LANGKAH BERIKUTNYA — Fase B (Kelas 3–4)

   LANGKAH (urutan wajib diikuti):
   1. Tulis data/fase-b.js — 18 TP Kelas 3–4, schema v4.3 sama dengan Fase A
   2. Uncomment fase-b.js di data/index.js
   3. Tambah path fase-b.js ke SW precache
   4. Buat soal STS + SAS Fase B
   5. Distribusi ke guru Kelas 3–4

✅ Tahap 2: Koreksi pdf_ref di TP16 dan TP18 — DONE
✅ Tahap 3: Hapus komentar format v2 di fase-a.js — DONE
✅ Tahap 4: jsPDF CDN dihapus dari index.html — DONE
✅ Tahap 5: Konversi TP13–18 dari pdf ke docx — DONE
   - pdf/ folder: semua 18 TP sudah Modul_Ajar_V3_TP{NN}_{Topic}.docx
   - pdf_ref di TP15–18 docs/ diupdate ke .docx
   - SW v55, PDF_MANIFEST diupdate ke 18 path .docx
✅ Tahap 6: Fix pdf_ref wiring TP01–14 — DONE
   - pdf_ref ditambah ke fase-a.js untuk TP01–14
   - kurikulum.js: baca tp.pdf_ref (fallback ke tp.id-v1.pdf)
   - pdf-handler.js: validasi terima .docx selain .pdf
✅ FASE 15 TP16 MIGRATED — 39 langkah v4.3, L0–L13, pm 14/14
   ANALYZE → BUILD (4 batch) → HARDEN → VALIDATE = READY
   aktivitas[] hybrid TP15+TP16: cleanup ✅ DONE — semua pure v4.3
   Total pm warning: 96 (turun dari 104)
✅ BUG FIX: SW cache test + pdf-handler .docx support (e2c73ac)
   - sw.js: cache.match './index.html' (fix FATAL log salah path)
   - pdf-handler.js: PDF_BASE_PATH './pdf/' (fix 404 GitHub Pages)
   - pdf-handler.js: caches.match() semua cache (fix miss APP_SHELL)
   - pdf-handler.js: MIME detection .docx via _mimeForFilename/_isValidContentType
```

Next: —

## Fase 15 — Audit Struktur & pm TP01–18

### Status Per TP
- TP01–14: format langkah[] ✅ | pm ⚠️ 93 missing
- TP15:    format langkah[] ✅ pure v4.3 | pm ✅ bersih | DONE
- TP16:    format langkah[] ✅ pure v4.3 | pm ✅ 14/14 lengkap
  → 39 items L0–L13 | DONE
- TP17:    format langkah[] ✅ | pm ⚠️ 2 missing
- TP18:    format langkah[] ✅ | pm ⚠️ 1 missing
- Total pm warning: 96 (TP16 −8 fixed Mei 2026)

### Temuan Kritis
✅ RESOLVED — TP16 telah dimigrasikan ke langkah[] v4.3 (Mei 2026).
39 items L0–L13, pm 14/14 instruksi lengkap, pure v4.3 ✅
aktivitas[] cleanup ✅ DONE (Mei 2026).

### Urutan Kerja Sesi Berikutnya
1. ✅ Migrasi TP16 → langkah[] v4.3 DONE (Mei 2026)
2. ✅ Cleanup hybrid aktivitas[] TP15 + TP16 — DONE (Mei 2026)
3. pm audit TP17 (2 missing) + TP18 (1 missing)
4. Keputusan pm TP01–14 (93 missing):
   Opsi A: fix per langkah (review konten)
   Opsi B: intentional by design

### Path File TP15–18

**v4.3 (aktif di runtime):**
- TP15: docs/sesi-m10/tp-15.js
- TP16: docs/sesi-m11/tp-16.js
- TP17: docs/sesi-m12/tp-17.js
- TP18: docs/sesi-m13/tp-18.js

**v5.0 (selesai, belum diintegrasikan ke runtime):**
- TP15: docs/sesi-m10/tp-15-v5.js ✅ — 14 langkah, 36 checklist, 14 energi_map
- TP16: docs/sesi-m11/tp-16-v5.js ✅ — 14 langkah, 42 checklist, 14 energi_map
- TP17: docs/sesi-m12/tp-17-v5.js ✅ — 15 langkah, 46 checklist, 15 energi_map
- TP18: docs/sesi-m13/tp-18-v5.js ✅ — 9 langkah, 39 checklist, 9 energi_map

## Fase 14 — Migrasi langkah[] TP15–18

FASE 14 ✅ COMPLETE — Migrasi langkah[] TP15–18
  - TP15 ✅ — pure v4.3 | aktivitas[] cleanup DONE
  - TP16 ✅ — 39 langkah v4.3, L0–L13, pm 14/14 | pure v4.3 | aktivitas[] cleanup DONE
  - TP17 ✅ — pure v4.3, aktivitas[] tidak ada
  - TP18 ✅ — pure v4.3, aktivitas[] tidak ada

### Hotfix Post-Fase 14
- TP17 dan TP18: rollback format mode
  solo/duo/grup → mudah/normal/tantangan
  (commit 94a68f1)
- TP15 dan TP16: sudah mudah/normal/tantangan
  sejak awal — tidak perlu disentuh
- fase-a.js (TP01–14): sudah mudah/normal/tantangan
  — tidak perlu disentuh
- Status runtime: screens/sesi-runtime.js hanya
  mengenal mudah/normal/tantangan — konsisten
  di semua 18 TP

## Skenario Live Mode v2

### Status
✅ COMPLETE — semua 18 TP (Mei 2026)

### File
- Lokasi: `docs/skenario/`
- Pola nama: `flaf-skenario-tp{NN}-v2.txt`
- Cakupan: TP01–TP18 (`flaf-skenario-tp01-v2.txt` s/d `flaf-skenario-tp18-v2.txt`)

### Format v2 (standar)
- AKSI/UCAP tanpa simbol ▸ (hanya BANTUAN yang pakai ▸)
- `BANTUAN ▸` untuk fallback fisik atau support siswa
- `⚡ Cue kritis` per layar
- `⚠ DARURAT` dengan kondisi eksplisit (time-based skip atau volume management)
- `════` dividers antar layar
- `[ ]` checklist selesai
- `CATATAN RUNTIME GURU` — energi kelas per layar + Risiko pacing + Teacher autonomy
- Energi di CATATAN konsisten dengan header layar (ending state untuk dual-energy)

### Perubahan Standar dari v1 → v2
- Hapus `(FINAL)` dari judul dan `Fokus:` dari header
- Koreksi energi CATATAN agar konsisten dengan header layar
- Koreksi label Risiko pacing (mislabel ke nama layar/aktivitas yang benar)
- Perbaiki inkonsistensi internal konten (jika ada)

### Riwayat Penulisan
- TP01–TP06: selesai sebelum sesi Mei 2026
- TP07–TP11: selesai sesi Mei 2026 (batch pertama)
- TP12–TP18: selesai sesi Mei 2026 (batch kedua, sesi ini)

---

## Audit Media Persiapan vs Skenario

Dilakukan di sesi Mei 2026. Menelusuri seluruh 18 TP — mencocokkan
field `persiapan[]` dan `printables[]` dengan media yang dipakai di `langkah[]`/`aktivitas[]`.

### Hasil: 4 Gap Ditemukan

| TP | Nama | Gap |
|----|------|-----|
| 07 | My Family | Instruksi Pembuka minta guru tunjukkan "foto keluarga guru" (opsional di persiapan, tidak ada di printables). Instruksi Inti minta "siswa ambil gambar keluarga yang disiapkan" — tidak jelas apakah printable atau bawa dari rumah. |
| 10 | Food & Drinks | "Gambar piring kosong" ada di `persiapan[]` tapi tidak ada di `printables[]`. Guru yang cetak via Cetak Kartu Persiapan tidak mendapat lembar ini. |
| 16 | Simple Story Retelling | Buku cerita bergambar pre-defined (`tp-16-story-v1.pdf`) direferensikan di `media[]` tapi belum dibuat — tidak ada di printables maupun assets. Seluruh skenario bertumpu pada media ini. |
| 18 | Integrative Project | Template poster "My World" dan kartu Reference Sentences (`tp-18-template-v1.pdf`, `tp-18-support-v1.pdf`) direferensikan di `media[]` tapi belum dibuat. |

### Status
⏳ **Belum diaddress** — ditunda sampai semua media persiapan tersedia untuk seluruh TP.
Gap ini akan diaddress bersamaan dengan penyiapan media PDF/cetak yang direferensikan.

### TD-1 — Sinkronisasi Printables (Partially Resolved)
- **printables[]** sekarang ada di semua TP 01–18 (TP 15–18 via docs/ import)
- **SW precache** sudah sinkron dengan file aktual di disk (v54, 136 path, semua nama benar)
- **Sisa**: unifikasi skema printables[] vs media[] belum dilakukan

---

## AUDIT & FIX TP 01 — Greetings & Farewells
Tanggal: 27 Mei 2026
Commit range: 52f84d7 → 51c73da
File disentuh: tp-01-v5.js, sesi-runtime.js, sesi-runtime.css,
siswa-history.js, screens/nilai.js, storage/nilai.js

### Status Konten
18 layar diaudit terhadap skenario txt — 100% sesuai.
Tidak ada konten yang hilang atau salah.

### Fix yang Diterapkan

#### FIX 1 — Offset nomor Pembuka (tp-01-v5.js, sesi-runtime.js)
Masalah: Pre-Opening masuk array fase Pembuka → header
"Pembuka · 1/4" sampai "4/4".
Solusi: Pre-Opening dipindah ke field `preOpening` di level
atas objek TP. Ditampilkan sebagai card "Sebelum Memulai"
di layar FaseEntering sebelum tombol "Mulai Pembuka" ditekan.
Hasil: Header sekarang "Pembuka · 1/3" sampai "3/3".
Berlaku untuk TP lain: Cek apakah TP 02-18 juga punya
Pre-Opening di dalam array fase — jika ya, perlakukan sama.

#### FIX 2 — Render teks per baris (sesi-runtime.js)
Masalah: Dialog boneka dan daftar → tampil satu blok
paragraf panjang.
Solusi: Regex split `/\n|\s+(?=→)/` diterapkan di renderer
— setiap item → dan pemisah \n jadi div terpisah.
Hasil: Guru tinggal scan ke bawah satu baris per aksi.
Berlaku untuk TP lain: Fix ini sudah generik — berlaku
otomatis untuk semua TP yang menggunakan → di data.

#### FIX 3 — Label LISTEN FIRST dan TOGETHER (sesi-runtime.js, sesi-runtime.css)
Masalah: 👂 LISTEN FIRST dan 🗣 TOGETHER tenggelam dalam
paragraf narasi.
Solusi: Ditambahkan ke regex split. Item yang diawali 👂
atau 🗣 dirender dengan class sr-label-aktivitas (muted,
uppercase, margin atas).
Hasil: Tampil sebagai label transisi yang terlihat jelas.
Berlaku untuk TP lain: Fix sudah generik — berlaku otomatis
untuk semua TP yang menggunakan 👂 atau 🗣 di data.

#### FIX 4 — Diferensiasi dua jalur (sesi-runtime.js, sesi-runtime.css)
Masalah: Item "- Need Help" dan "- Ready" tampil satu blok
tanpa pemisah visual.
Solusi: Ditambahkan ke regex split. "Diferensiasi:" dirender
sebagai sr-label-diferensiasi (uppercase, muted). Item "- "
dirender sebagai sr-dif-item (border kiri, padding).
Hasil: Dua jalur terpecah dan mudah dibaca sekilas.
Berlaku untuk TP lain: Fix sudah generik — berlaku otomatis
untuk semua TP yang menggunakan format "- " di data.

#### FIX 5 — Font-size (sesi-runtime.css)
Masalah: 23 class CSS berkisar 10–13px — terlalu kecil
untuk dibaca sambil mengajar.
Solusi: 23 class dinaikkan. Yang paling signifikan:
  .sr-teks-biasa      13px → 15px
  .sr-ucap-teks       14px → 17px
  .sr-bantuan-list li 11px → 13px
  .sr-darurat-teks    12px → 14px
Berlaku untuk TP lain: Perubahan CSS berlaku global —
semua TP otomatis ikut.

#### FIX 6 — Line-height (sesi-runtime.css)
Masalah: 8 class di bawah 1.6, 3 class tanpa line-height
eksplisit.
Solusi: 8 class dinaikkan ke 1.6–1.65. 3 class ditambahkan
line-height eksplisit.
Berlaku untuk TP lain: Perubahan CSS berlaku global —
semua TP otomatis ikut.

#### FIX 7 — Konsolidasi layar penutup sesi (sesi-runtime.js, dashboard.js)
Commit: ee144cd
Masalah: Ada dua layar penutup sesi yang redundan:
- Layar 1: _renderClosure() di sesi-runtime.js —
  guru mengisi mood, kendala, catatan. Catatan TIDAK
  tersimpan ke IDB — hilang diam-diam.
- Layar 2: Step 6 _buildStepSelesai() di dashboard.js —
  guru mengisi kendala dan refleksi lagi. Baru tersimpan
  ke IDB di sini.
  Guru mengisi dua kali. Catatan dari layar 1 hilang.
Solusi:
- Hapus _renderClosure() dari sesi-runtime.js beserta
  semua referensinya (_state.closureMood, _state.kendala,
  state machine closure)
- Setelah "Selesai Fase →" di Penutup langkah terakhir,
  langsung panggil _onDone() tanpa melewati closure
- Step 6 dashboard diperkaya:
    · Pilihan mood (😊 Lancar / 😐 Biasa / 😟 Berat)
      ditambahkan di atas kendala
    · Textarea placeholder diselaraskan
    · Mood disimpan ke teaching_log via _doSelesaiSesi()
Hasil: Satu layar penutup, satu kali simpan, tidak ada
data yang hilang. Mood + kendala + refleksi tersimpan
semua ke IDB.
Berlaku untuk TP lain: Fix ini generik — berlaku otomatis
untuk semua TP karena perubahan ada di dashboard.js dan
sesi-runtime.js, bukan di data TP.

#### FIX 8 — Pisah label LISTEN FIRST dari teks berikutnya
Commit: c88f64d
Masalah: Label 👂 LISTEN FIRST masih menempel dengan
teks AKSI: berikutnya dalam satu div.
Solusi: Renderer memotong teks item 👂/🗣 sampai akhir
label saja — sisa teks (AKSI:/UCAP:) dirender sebagai
div sr-teks-biasa terpisah.
Berlaku untuk TP lain: Fix generik — berlaku otomatis
untuk semua TP.

### Fitur Baru — Penilaian Formatif dan Observasi
(siswa-history.js, sesi-runtime.js, sesi-runtime.css,
screens/nilai.js, storage/nilai.js)

Perubahan:
- Nama tombol dan overlay: "Catat penilaian siswa" →
  "Penilaian Formatif dan Observasi"
- Tombol ditambahkan di Penutup langkah terakhir
  (sebelumnya hanya fase Inti)
- Sub-pilihan "Lebih spesifik:" muncul setelah pilih
  perilaku — 3 alasan per perilaku, 9 nilai total:
    Aktif:       menjawab_sendiri | membantu_teman | berani_mencoba
    Dorongan:    perlu_dipancing | ikut_bersama_diam_sendiri | butuh_visual
    Belum siap:  tidak_merespons | mencoba_tapi_salah | terlihat_bingung
- Subtitle overlay dinamis (bukan hardcode "Fase Inti")
- Auto-next setelah alasan dipilih (bukan setelah perilaku)
- Field alasan tersimpan di IDB (penilaian_log)
- Alasan tampil di Nilai Formatif per TP:
  "Perlu dorongan · Perlu dipancing"
- Kolom Alasan masuk CSV export Mode Cepat dan Mode Detail

Berlaku untuk TP lain: Fitur ini generik — berlaku
otomatis untuk semua TP tanpa perubahan tambahan.

### Checklist untuk Audit TP 02-18
Setiap TP perlu dicek:
[ ] Apakah ada Pre-Opening di dalam array fase?
    → Jika ya, pindahkan ke field preOpening
[ ] Apakah ada teks multi-baris yang masih satu blok?
    → Cek dengan regex split sudah cukup atau perlu
      tambah pemisah di data
[ ] Apakah ada label transisi selain 👂 dan 🗣?
    → Jika ya, tambahkan ke regex split dan renderer
[ ] Apakah ada format diferensiasi selain "- "?
    → Jika ya, tambahkan deteksi di renderer
[ ] Konten audit: bandingkan semua layar dengan txt sumber
[ ] Verifikasi alur penutup sesi tidak melewati closure
    lama — pastikan langsung ke Step 6 dashboard
[ ] Cek semua kemunculan 👂 LISTEN FIRST dan 🗣 TOGETHER
    — pastikan label terpisah dari teks AKSI/UCAP
    berikutnya (sudah handled oleh renderer, verifikasi
    visual tetap diperlukan)

---

## AUDIT & FIX TP 02 — Introducing Myself
Tanggal: 27 Mei 2026
File aktif: docs/output-v5/tp-02-v5.js
Status: 2 fix diterapkan, 15/17 langkah OK tanpa perubahan.

### Fix yang Diterapkan

#### FIX-1 — L0 dipindah ke `preOpening`
L0 (Door Greeting) dipindah dari array `langkah[]` fase Pembuka ke
field `preOpening` di root TP_02. Pola identik dengan FIX-1 TP 01.
Konten teks dan cue tidak diubah. Cue khusus TP 02: "Berbeda dari
TP 01 — tidak memakai boneka. Fokus pada kontak mata dan senyum
hangat."

#### FIX-2 — L11 Diferensiasi dipisah ke field terpisah
Blok "Diferensiasi: - Need Help: ... - Ready: ..." dihapus dari
field `teks` dan dipindah ke field baru `diferensiasi: { needHelp,
ready }`. Urutan field L11: `tipe → teks → bantuan → diferensiasi
→ cue → darurat → energi`.

### Konfirmasi Tidak Butuh Fix

- **FIX-3 (encoding artifact '2├ù')** — tidak ditemukan di file
  aktif. Karakter `×` tidak dipakai, diganti `·`. Clear.
- **`bantuan` string vs array** — renderer `sesi-runtime.js`
  baris 465–480 sudah handle keduanya: array → `<ol>`, string →
  blok teks, null → tidak dirender. L5 dan L15 dengan `bantuan`
  string aman.

### Catatan Struktur

- `preOpening` adalah pola global — berlaku untuk semua TP yang
  memiliki Layar 0 pre-kelas.
- Field `diferensiasi: { needHelp, ready }` pertama kali
  diterapkan di TP 02. Renderer perlu dikonfirmasi support field
  ini sebelum audit TP berikutnya.

---

## AUDIT & FIX TP 03 — Classroom Instructions
Tanggal: 27 Mei 2026
File aktif: docs/output-v5/tp-03-v5.js
Status: 2 fix diterapkan. FIX-0 dan FIX-2 sudah ada di file —
batch converter sudah menangani saat generate 2026-05-25.

### Fix yang Diterapkan

#### FIX-1 — L0 dipindah ke `preOpening`
L0 (Pembuka Kelas) dipindah dari array langkah[] fase Pembuka
ke field preOpening di root TP_03. Pola identik dengan TP 01
dan TP 02. Konten teks dan cue tidak diubah.

#### FIX-3 — L10 Diferensiasi dipisah ke field terpisah
Blok "Diferensiasi: - Need Help: ... - Ready: ..." dihapus dari
field teks dan dipindah ke field baru diferensiasi: { needHelp,
ready }. Pola identik dengan TP 02 L11. Urutan field L10:
tipe → teks → bantuan → diferensiasi → cue → darurat → energi.

### Konfirmasi Tidak Butuh Fix

- **FIX-0 — Struktur 3 fase** — sudah ada di file. Batch
  converter sudah memecah Pembuka/Inti/Penutup dengan benar saat
  generate 2026-05-25. Dikonfirmasi: Pembuka (L1–L2), Inti
  (L3–L10), Penutup (L11–L14).
- **FIX-2 — L3 bantuan ke-2** — sudah ada di file. "Jika siswa
  menulis di meja: tunjuk udara → 'In the air! Like this.'" ada
  di bantuan[1] baris 158. Batch converter sudah menangani.

### Catatan Pola Batch Converter

Mulai TP 03, batch converter sudah:
- Memecah fase dengan benar (3 fase terpisah)
- Menambah bantuan ke-2 yang ada di txt sumber

Audit TP 04–18 perlu verifikasi apakah pola ini konsisten atau
ada regresi di TP tertentu.

---

## AUDIT & FIX TP 04 — Numbers 1–20
Tanggal: 27 Mei 2026
File aktif: docs/output-v5/tp-04-v5.js
Commit: 6856459
Status: 2 fix diterapkan, 13/15 langkah OK tanpa perubahan.

### Fix yang Diterapkan

#### FIX-1 — L0 dipindah ke `preOpening`
L0 (Pembuka Kelas) dipindah dari array langkah[] fase Pembuka
ke field preOpening di root TP_04. Pola identik dengan TP 01,
02, dan 03. Konten teks dan cue tidak diubah.

#### FIX-2 — L9 Diferensiasi dipisah ke field terpisah
Blok "Diferensiasi: - Need Help: ... - Ready: ..." dihapus dari
field teks dan dipindah ke field baru diferensiasi: { needHelp,
ready }. Pola identik dengan TP 02 L11 dan TP 03 L10. Urutan
field L9: tipe → teks → bantuan → diferensiasi → cue → darurat
→ energi.

### Konfirmasi Tidak Butuh Fix

- **Struktur 3 fase** — sudah benar. Batch converter memecah
  Pembuka (L1–L2), Inti (L3–L9), Penutup (L10–L14) dengan
  benar. Pola konsisten dengan TP 03.

### Pola yang Terkonfirmasi Konsisten (TP 02–04)

Setiap TP yang punya Layar Diferensiasi selalu memiliki blok
embedded "Diferensiasi: - Need Help: ... - Ready: ..." di field
teks. Fix ini perlu diterapkan di semua TP berikutnya yang
punya layar serupa.

---

## AUDIT BATCH TP 05–14

**Audit selesai:** 2026-05-27
**Commit batch:** 4d0fbba
**File disentuh:** tp-05-v5.js sampai tp-14-v5.js

### Fix yang diterapkan (semua TP)

**FIX-1 — L0 dipindah ke `preOpening` (semua TP 05–14)**
Identik dengan pola TP 01–04. L0 di setiap TP dipindah
dari array langkah[] fase Pembuka ke field preOpening
di root objek TP. Konten teks dan cue tidak diubah.

**FIX-2 — Diferensiasi dipisah ke field terpisah**
Berlaku untuk TP yang memiliki layar Diferensiasi.
Blok embedded dipindah ke field diferensiasi: { needHelp, ready }.

| TP | Layar Diferensiasi | Label field |
|----|-------------------|-------------|
| 05 | L9  | needHelp / ready |
| 06 | L9  | needHelp / ready |
| 09 | L10 | needHelp / ready |
| 11 | L9  | needHelp / ready |
| 12 | L10 | needHelp / ready |
| 13 | L10 | needHelp / ready |
| 14 | L10 | needHelp / ready |

TP 07, 08, 10 tidak memiliki layar Diferensiasi —
tidak ada FIX-2 untuk ketiga TP ini.

### Konfirmasi tidak butuh fix

Struktur 3 fase (Pembuka/Inti/Penutup) sudah benar
di semua TP 05–14 — batch converter konsisten.

### Status keseluruhan audit

TP 01–14 selesai diaudit dan diperbaiki.
TP 15–18 belum diaudit.

---

## FIX RENDERER — Diferensiasi Object

**Tanggal:** 2026-05-27
**Commit:** 3479781
**File:** screens/sesi-runtime.js

### Masalah
Field `diferensiasi: { needHelp, ready }` yang diekstrak
di TP 02–14 tidak dirender — renderer lama hanya handle
string "Diferensiasi:" sebagai teks biasa.

### Solusi
Tambah handler dinamis menggunakan Object.entries —
tidak hardcode key, handle semua variasi label:

  if (langkah.diferensiasi != null
      && typeof langkah.diferensiasi === 'object') {
    const items = Object.entries(langkah.diferensiasi)
      .map(([key, val]) =>
        `<div class="sr-dif-item">${_escape(val)}</div>`)
      .join('');
    difHTML = `
      <div class="sr-dif-block">
        <div class="sr-label-diferensiasi">DIFERENSIASI</div>
        ${items}
      </div>`;
  }

### Urutan render langkah (setelah fix)
teksHTML → bantuanHTML → difHTML → cueHTML → daruratHTML

### Berlaku untuk
Semua TP yang punya field diferensiasi object —
TP 02–15 dan seterusnya. Handle semua variasi key:
- needHelp / ready (TP 02–14)
- sudahBisa / perluSupport (TP 15)
- variasi lain di TP 16–18 jika ada

---

## AUDIT BATCH TP 16–18

**Audit selesai:** 2026-05-27
**Commit batch:** 756d1c4
**File disentuh:** tp-16-v5.js, tp-17-v5.js, tp-18-v5.js

### Fix yang diterapkan (semua TP)

**FIX-1 — L0 dipindah ke `preOpening` (TP 16, 17, 18)**
Identik dengan pola TP 01–15. Energi preOpening = 🔵
untuk ketiga TP — konsisten dengan TP 15–17.
TP 18 cue khusus: "Tambahkan 'Today is a very special
day' — ini anchor emosional pertama untuk tone capstone."

**FIX-2 — Diferensiasi ditambah sebagai field baru**
Berbeda dari TP 02–14 (extract dari teks yang ada) —
di TP 16 dan 17, blok Diferensiasi ada di txt sumber
tapi tidak dimasukkan ke runtime saat generate.
Field ditambahkan langsung tanpa hapus dari teks.

| TP | Layar | sudahBisa | perluSupport |
|----|-------|-----------|--------------|
| 16 | L9  | cerita tanpa lihat buku — kartu saja sebagai scaffold | boleh lihat buku sebentar jika lupa |
| 17 | L10 | ganti kartu setiap giliran, ciptakan reason sendiri | cukup ucap hobi saja tanpa "because" |

TP 18 tidak memiliki layar Diferensiasi — hanya FIX-1.

### Konfirmasi tidak butuh fix

Struktur 3 fase sudah benar di semua TP 16–18.
Semua konten langkah sesuai txt sumber.
Bantuan, cue, darurat lengkap tanpa perubahan.

### Status keseluruhan audit FLAF

**TP 01–18 selesai diaudit dan diperbaiki.**
Audit sprint selesai 2026-05-27.

Pola fix yang konsisten di semua TP:
- FIX-1 (preOpening): berlaku di semua 18 TP
- FIX-2 (diferensiasi): berlaku di TP yang punya
  layar Diferensiasi (TP 02–17, kecuali 07, 08, 10, 18)
- Renderer diferensiasi object: commit 3479781

---

## AUDIT & FIX TP 15 — Feelings and Emotions

**Audit selesai:** 2026-05-27
**File aktif:** `docs/output-v5/tp-15-v5.js`
**Commit:** d13d040
**Status:** 2 fix diterapkan, 12/14 langkah OK tanpa
perubahan.

### Fix yang diterapkan

**FIX-1 — L0 dipindah ke `preOpening`**
L0 (Greeting) dipindah dari array langkah[] fase Pembuka
ke field preOpening di root TP_15. Pola identik TP 01–14.
Catatan khusus: energi preOpening TP 15 = 🔵 (bukan ⚪
seperti TP lain) — sesuai txt sumber.

**FIX-2 — L10 Diferensiasi dipisah ke field terpisah**
Blok embedded dipindah ke field baru
diferensiasi: { sudahBisa, perluSupport }.
Label berbeda dari TP 02–14 (needHelp/ready) —
mengikuti label asli txt sumber TP 15.
Urutan field L10: tipe → teks → bantuan → diferensiasi
→ cue → darurat → energi.

### Catatan format baru

TP 15 menggunakan label diferensiasi berbeda:
- TP 02–14: { needHelp, ready }
- TP 15: { sudahBisa, perluSupport }

Renderer dinamis (commit 3479781) handle keduanya
tanpa perubahan tambahan.

---

## AUDIT & FIX TP 05 — Colours
Tanggal: 27 Mei 2026
File aktif: docs/output-v5/tp-05-v5.js
Commit: 7e5e8ba
Status: 2 fix diterapkan, langkah lain OK tanpa perubahan.

### Fix yang Diterapkan

#### FIX-1 — L0 dipindah ke `preOpening`
L0 (Pembuka Kelas) dipindah dari array langkah[] fase Pembuka
ke field preOpening di root TP_05. Pola identik dengan TP 01–04.
Konten teks dan cue tidak diubah.

#### FIX-2 — L9 Diferensiasi dipisah ke field terpisah
Blok "Diferensiasi: - Need Help: ... - Ready: ..." dihapus dari
field teks dan dipindah ke field baru diferensiasi: { needHelp,
ready }. Pola identik dengan TP 02–04. Urutan field L9: tipe →
teks → bantuan → diferensiasi → cue → darurat → energi.

### Konfirmasi Tidak Butuh Fix

- **Struktur 3 fase** — sudah benar. Batch converter memecah
  Pembuka (L1–L3), Inti (L4–L9), Penutup (L10–L14) dengan
  benar. Pola konsisten dengan TP 03–04.

---

## AUDIT & FIX TP 06–14 — Batch Audit
Tanggal: 27 Mei 2026
Scope: docs/output-v5/tp-06-v5.js s/d tp-14-v5.js
Status: Semua TP selesai diaudit dan diperbaiki.

### Fix yang Diterapkan (semua TP)

#### FIX-1 — L0 dipindah ke `preOpening` (universal)
Berlaku di semua TP 06–14. L0 (Pembuka Kelas) dipindah dari
array langkah[] fase Pembuka ke field preOpening di root TP.
Pola identik dengan TP 01–05.

#### FIX-2 — Diferensiasi dipisah ke field terpisah (per-TP)

| TP | Langkah | Label asli | needHelp | ready |
|----|---------|-----------|---------|-------|
| 06 | L9  | Need Help / Ready | Satu kata "Circle!" — boleh lihat kartu | Kalimat penuh "This is my eraser..." |
| 07 | —   | Tidak ada embedded diferensiasi | — | — |
| 08 | —   | Tidak ada embedded diferensiasi | — | — |
| 09 | L10 | Perlu support / Sudah bisa | Sebut nama + suara saja | Buat 3 clue per hewan |
| 10 | —   | Tidak ada embedded diferensiasi | — | — |
| 11 | L9  | Perlu support / Sudah bisa | Cukup 2 kartu — "First … Then …" | Cerita 5–6 kartu + "then" berulang |
| 12 | L10 | Perlu support / Sudah bisa | Cukup 2 kartu — eyes dan ears | Pakai semua 8 kartu, tambah legs dan feet |
| 13 | L10 | Perlu support / Sudah bisa | Cukup 2 kartu — rainy dan sunny | Pakai semua 6 kartu, buat 3 kalimat berbeda |
| 14 | L10 | Perlu support / Sudah bisa | Cukup 1 preposisi — on atau in | Pakai 3 preposisi berbeda, ganti benda setiap putaran |

### Pola yang Terkonfirmasi

- TP 07, 08, 10 tidak punya embedded diferensiasi — langkah
  diferensiasi menggunakan pola "Belum bisa / Normal / Tantangan"
  yang bukan needHelp/ready, atau tidak ada sama sekali.
- TP 09, 11–14 memakai label Indonesia "Perlu support / Sudah bisa"
  (bukan "Need Help / Ready") — tetap diekstrak ke schema yang sama.
- Urutan field setelah fix: tipe → teks → bantuan → diferensiasi
  → cue → darurat → energi (konsisten dengan TP 02–05).

### Commit Summary
- af4c0b6 — fix: TP 06 — preOpening L0, diferensiasi L9
- 2bbdb12 — fix: TP 07 — preOpening L0
- f9350b2 — fix: TP 08 — preOpening L0
- 25eae3a — fix: TP 09 — preOpening L0, diferensiasi L10
- df21406 — fix: TP 10 — preOpening L0
- 47a9090 — fix: TP 11 — preOpening L0, diferensiasi L9
- cf46463 — fix: TP 12 — preOpening L0, diferensiasi L10
- 68b5a3c — fix: TP 13 — preOpening L0, diferensiasi L10
- 430b173 — fix: TP 14 — preOpening L0, diferensiasi L10

---

## FASE B — TP Individual (docs/output-v5-faseb/)

**Status: SELESAI ✅ — 29/05/2026**

### Yang dikerjakan
- Folder `docs/output-v5-faseb/` sekarang lengkap: 22 file TP (tp-01-v5.js s/d tp-22-v5.js)
- TP 01–18 ditulis dari skenario sumber `Fase B/Skenario/flaf-skenario-tpXX-v2.txt`
- TP 19–22 ditulis dalam sesi 29/05/2026 (skenario diterima di pertengahan sesi)
- Semua 22 file lolos checklist 23 item (schema v5.0)

### Schema v5.0 — field wajib per TP
`id`, `nomor`, `kelas`, `nama`, `tema`, `kluster`, `jenis`, `deskripsi`, `indikator[]`, `vocab[]`, `persiapan[]`, `checklist[]`, `energi_map[]`, `catatan { risiko[], autonomy[] }`, `preOpening`, `skenario[]`, `export default`

### Distribusi jenis
- Kluster A (TP 01–04, Kelas 3): Biasa ×3, Panen ×1
- Kluster B (TP 05–08, Kelas 3): Biasa ×3, Panen ×1
- Kluster C (TP 09–11, Kelas 3): Biasa ×2, Kompleks ×1
- Kluster D (TP 12–15, Kelas 4): Biasa ×3, Panen ×1
- Kluster E (TP 16–20, Kelas 4): Biasa ×2, Kompleks ×2, Panen ×1
- Capstone (TP 21–22, Kelas 4): Capstone ×2

### Perbaikan post-review
- `tp-19-v5.js`: inkonsistensi "lunch" vs "rice" → diseragamkan ke "rice"
- `tp-21-v5.js`: inkonsistensi "Eight!" vs teks sumber → diseragamkan ke "Every day!"

### Catatan penting
- Field `kluster` dan `jenis` ditambahkan di Fase B (tidak ada di Fase A)
- Field `printables[]` sudah ditambahkan ke semua 22 TP Fase B (01/06/2026) — lihat §Sprint Printables Fase B
- Field `pdf_ref` dan `media` belum ada di Fase B
- TP Panen memiliki field `breakpoint { posisi, instruksi }` di root
- TP Kompleks: 13 langkah, Inti ≥ 45 menit
- TP Capstone: 13–14 langkah, tidak ada kosakata baru, tidak ada template wajib

---

## NEXT TASK — Integrasi Fase B ke Runtime

**Status file data: SELESAI ✅ — commit `2fc2c37`**

File kluster dan induk sudah ada di repo:
- `data/fase-b-kluster-a.js` — TP 01–04
- `data/fase-b-kluster-b.js` — TP 05–08
- `data/fase-b-kluster-c.js` — TP 09–11
- `data/fase-b-kluster-d.js` — TP 12–15
- `data/fase-b-kluster-e.js` — TP 16–20
- `data/fase-b-capstone.js`  — TP 21–22
- `data/fase-b.js`           — induk, spread 22 TP

Dokumen referensi authoring tersimpan di repo — commit `43b5af9`:
- `docs/fase-b-authoring/` — 3 dokumen (Briefing, Curriculum Standard, Quality Gate)
- `docs/fase-b-skenario/`  — 22 file skenario sumber (flaf-skenario-tp01..22-v2.txt)

### Yang belum dikerjakan
1. Uncomment `fase-b.js` di `data/index.js`
2. Tambah `fase-b.js` ke SW precache
3. Test runtime — pastikan 22 TP Fase B terbaca oleh aplikasi

## SELESAI — Integrasi Fase B ke Runtime (29/05/2026)

**Commit: `a260688`** — 3 files changed, 12 insertions, 5 deletions

### Yang dikerjakan
- `data/index.js`: uncomment import FASE_B, FASE_AKTIF → `'B'`, uncomment registry entry `'B': FASE_B`
- `sw.js`: tambah 7 file Fase B ke APP_SHELL precache, bump CACHE_VERSION → `flaf-v79`
- `docs/output-v5-faseb/tp-07-v5.js:326`: fix syntax bug — outer single-quote → backtick pada field `bantuan`

### Verifikasi runtime
- `getFaseAktif()` → `'B'` ✅
- `getAllTP().length` → `22` ✅
- Range ID: `tp-b01` s/d `tp-b22` ✅

### Catatan arsitektur
- `FASE_AKTIF` adalah global switch di `data/index.js` — tidak perlu filter per guru
- Filter akses per guru tetap dilakukan di downstream: `kelasOk` di `dashboard.js`, `_TP_RANGE_MAP` di `nilai.js`
- Guru Fase A (`kelas 1/2`) tidak terdampak — `kelasOk` memblokir TP Fase B di layer UI
- Bug `tp-07-v5.js:326` adalah pre-existing — ditemukan saat verifikasi runtime, bukan akibat edit integrasi
- Scan 22 file Fase B: hanya 1 bug ditemukan, sudah diperbaiki

## REVERT & ROOT CAUSE — Integrasi Fase B Pertama (29/05/2026)

**Commit revert: `2a4cc2f`** — kembalikan runtime ke Fase A stabil

### Penyebab revert
- Schema mismatch pada field `kelas`:
  - Fase A: `kelas` hanya ada di level objek fase (`meta.kelas = '1 & 2 SD'`) — tidak ada per TP
  - Fase B: `kelas` ada per TP sebagai integer (3 atau 4)
- Filter `_tpList()` di `dashboard.js` diganti pakai `tp.kelas` untuk mendukung Fase B
- Karena TP Fase A tidak punya `tp.kelas`, filter gagal — semua TP Fase A tidak tampil

### Temuan saat investigasi
- `tp.kelas` sebenarnya **sudah ada** di semua 18 TP Fase A (integer: 1 atau 2)
  — terverifikasi via Node, `typeof tp.kelas === 'number'`
- Masalah bukan di data files, tapi di `dashboard.js`:
  - `_tpList()` pakai range hardcoded `[1..9]` / `[10..18]` — tidak pakai `tp.kelas`
  - `kelasOk` hanya menangani string `'1'` dan `'2'` — tidak ada case untuk `'3'` dan `'4'`
  - Progress range di `_buildLandingHTML()` juga hardcoded nomor TP
- `data/index.js` lama pakai `FASE_AKTIF` sebagai global switch — tidak bisa dua fase aktif bersamaan

---

## SELESAI — Integrasi Fase B Multi-Fase (29/05/2026)

**Commit: `8bd08d1`** — 4 files changed, 79 insertions, 91 deletions

### Arsitektur baru: multi-fase registry
- Hapus `FASE_AKTIF` switch — semua fase aktif bersamaan
- `data/index.js`: REGISTRY memuat `'A': FASE_A, 'B': FASE_B`
- `getAllTP()`: merge `tujuan_pembelajaran` dari semua fase, sort by `kelas` lalu `nomor`
- `getFase(key)`: ambil satu objek fase by key — wajib pakai argumen
- `getTP(id)`: cari di semua fase
- `getMeta(key)`: meta per fase by key
- `getFaseList()`: daftar key fase yang terdaftar
- `getFaseAktif()`: deprecated, tetap ada untuk backward compat

### Yang berubah per file
- `data/index.js`: rewrite full — multi-fase registry, tidak ada FASE_AKTIF
- `screens/dashboard.js`:
  - import: `getFase` → `getAllTP`
  - `_loadFaseData()`: pakai `getAllTP()`, return `{ tujuan_pembelajaran: tps }`
  - `_tpList(tingkat)`: filter `tp.kelas === tingkat` (ganti range hardcoded)
  - `_buildLandingHTML()` progress range: derive dari `_faseData` by `tp.kelas`
  - `kelasOk`: `parseInt(kelasSesi, 10) === tingkat` (dinamis, tidak hardcode per kelas)
- ✅ `screens/kurikulum.js`: fase dinamis dari session.kelas, header/CP/ATP reaktif — commit `4bfa872`
- `sw.js`: bump `flaf-v79` → `flaf-v80`

### Verifikasi runtime
- `getAllTP().length` → `40` ✅
- Kelas 1: 9 TP — Greetings & Farewells ✅
- Kelas 2: 9 TP — Food and Drinks ✅
- Kelas 3: 11 TP — My School Life ✅
- Kelas 4: 11 TP — Jobs and Community Helpers ✅

### Yang ditahan untuk sprint berikutnya
- `app.js` `DATA_FASE_URL`: masih fetch `fase-a.js` untuk soft update check — tidak crash, hanya soft update kurang presisi untuk Fase B
- ✅ **SELESAI** — `screens/nilai.js` + `storage/nilai.js`: fix multi-fase — screens pakai getAllTP() (commit `ee0ad26`), storage tpRange dinamis per tingkat + fix SASGanjil1/2 (commit `76e95e4`)
- ✅ **SELESAI** — `screens/kurikulum.js`: fase dinamis dari session.kelas, header/CP/ATP reaktif per filter kelas (commit `4bfa872`)

---

## SELESAI — Fix Bug Post-Integrasi Fase B (29/05/2026)

**Commit terakhir: `5bf94fb`** — rangkaian 4 commit perbaikan setelah integrasi

### Bug yang ditemukan dan diperbaiki

**1. Label TP range di rombel card salah untuk Kelas 3 & 4**
- `storage/nilai.js` `tambahKelas`: `tingkat === 2 ? 2 : 1` — hanya simpan tingkat 1 atau 2
- Fix: `Number(tingkat) || 1` — menerima tingkat 1–4
- Commit: `4043c0c`

**2. Konten materi salah — Kelas 3 tampil konten Fase A**
- `dashboard.js` `_getTP(nomor)`: cari TP by `nomor` integer
- Fase A TP 01 dan Fase B TP B01 sama-sama punya `nomor: 1` — Fase A selalu menang karena posisi array
- Fix 1: `_getTP(id)` — cari by `tp.id` string (unik cross-fase)
- Fix 2: `dashPilihTP(id, nomor, nama)` — pass `tp.id` sebagai argumen pertama
- Fix 3: `_flow.tp = { id, nomor, nama }` — simpan `id` di state
- Commit: `69c559b`

**3. SW cache stale — file yang sudah dipatch belum ter-serve**
- `dashboard.js` ada di APP_SHELL (cache-first) — bump SW version paksa refetch
- Bump `flaf-v80` → `flaf-v81` setelah patch TP range label — commit `152787c`
- Bump `flaf-v81` → `flaf-v82` setelah patch `tp.id` — commit `bf79fcb`

### Pola yang terkonfirmasi
- Setiap edit `dashboard.js` atau file APP_SHELL lain butuh bump `CACHE_VERSION` di `sw.js`
- TP lookup harus pakai `tp.id` (string, unik cross-fase) — bukan `tp.nomor` (integer, ambigu)
- `tambahKelas` menerima tingkat 1–4; data lama yang salah perlu dihapus dan dibuat ulang

### Verifikasi final (browser, 29/05/2026)
- Kelas 1 Abdullah → TP 1–9, konten Fase A ✅
- Kelas 2 Aminah → TP 10–18, konten Fase A ✅
- Kelas 3 Ibrahim → TP 1–11, konten Fase B ✅
- Kelas 4 Siti Sarah → TP 12–22, konten Fase B ✅

**Integrasi Fase B selesai dan terverifikasi end-to-end.**

---

## Sesi Runtime UX — Ringkasan Presensi & Truncate Persiapan (29/05/2026)

### Yang dikerjakan

**1. Ringkasan presensi di layar pre-mengajar**
- `sesi-runtime.js` `mount()`: tambah parameter `statusMap` di antara `siswaList` dan `onDone`
- `sesi-runtime.js` `_renderPreview()`: hitung hadir/tidakHadir dari `statusMap`, render label dinamis
  - Semua hadir → `"25/25 hadir"`
  - Ada absen → `"17 hadir · 3 tidak hadir"`
  - Fallback (statusMap kosong) → `"X siswa terdaftar"`
- `dashboard.js` baris 866: teruskan `_flow.statusMap` ke `srMount` sebagai argumen ke-5
- Commit: `2e4f242`, bump cache: `565c532`

**2. Truncate+expand teks persiapan panjang di layar Materi & Persiapan**
- `dashboard.js` `_buildTabMateri()`: ganti `<div flex-wrap>` chip → `<ul>` list vertikal
- Teks `persiapan[]` > 60 karakter: potong + tombol `▼` inline
- Teks ≤ 60 karakter: tampil penuh, tidak ada tombol
- `dashTogglePersiapan(btn)`: toggle expand/collapse — akses teks asli via `_getTP(_flow.tp?.id)` (hindari double-escaping)
- Commit: `9b71ee3`, bump cache: `367313e`

### Verifikasi runtime (browser, 29/05/2026)
- Kelas 1 Abdullah → presensi 25/25, konten Fase A ✅
- Kelas 2 Aminah → presensi tampil, konten Fase A ✅
- Kelas 3 Ibrahim → presensi 17/20, konten Fase B ✅
- Kelas 4 Siti Sarah → presensi tampil, konten Fase B ✅
- Teks persiapan panjang Fase B terpotong rapi, expand berjalan ✅

---

## SELESAI — Sprint Printables Fase B (01/06/2026)

**Commit: `b3a031e`** (sw flaf-v93)

### Yang dikerjakan

**1. `data/printables.js` — multi-mode + fase-aware**
- Signature baru: `generatePrintHTML(tp, mode = 'standar')`
- `PRINTABLES_BASE_MAP`: routing ke `printables/` (Fase A) atau `printables_fase_b/` (Fase B) via `tp.fase` / `tp.id` prefix
- `PRINT_MODE_CONFIG`: 5 mode — hemat (4×4), standar (2×4), flash (2×2), display (1×2), poster (1×1)
- Grid cols, label font-size, dan header sub menyesuaikan mode

**2. `screens/dashboard.js` — modal pemilihan mode**
- `dashCetakKartu()` → `_showPrintModal(tp)` (overlay programatik, bukan string HTML)
- `_showPrintModal(tp)`: 5 tombol mode + SVG grid preview per mode
- `_doCetak(tp, mode)`: print window handler
- `window.dashCetakKartu` tetap diexpose

**3. `docs/output-v5-faseb/` — field `printables[]` di 22 TP**
- Disisipkan setelah `checklist` dan sebelum `energi_map` di semua tp-01 s/d tp-22
- Total: 140 entri `{ file, label }`
- Commit: `d22e592`

**4. `assets/images/printables_fase_b/` — 140 PNG**
- Ditambahkan ke repo dan SW precache (commit `c279818`)
- Dikompres dengan sharp (compressionLevel: 9, quality: 80): 275 MB → 79 MB (71%)

**5. SW cache: flaf-v91 → flaf-v92 → flaf-v93**

### Tech Debt yang ditinggal
- Footer `printables.js` baris 145: `tp.kelas <= 2 ? 'Fase A' : 'Fase B'` — hardcoded, tidak support Fase C. Fix saat Fase C.

---

### BUG-PRINT-C — Fungsi cetak Fase C ✅ CLOSED
**Commits:** b420664 · 652024f · 5b3369d
**Root causes:**
1. 97 file PNG Fase C belum di-commit ke repo (untracked) → fixed: 5b3369d
2. Footer cetak hardcoded "Fase B" untuk kelas > 2 → fixed: b420664
   (`data/printables.js` baris 156, ternary diperluas ke Fase C)
3. SW bump v114 → 652024f

**Status:** Semua Fase C printables berfungsi penuh. Path, precache, footer dinamis.

---

### TD-11: app.js progress bar hardcoded 18 ✅ CLOSED (pending full validate)
**Commits:** 160912c · ce10f38
**Root cause:** `app.js` hardcoded angka `18` di progress bar home
screen — guru Fase B/C akan lihat persentase salah (>100%) dan
teks "Fase A tuntas" yang tidak sesuai.
**Fix:**
- Tambah helper `_totalTP(kelas)` → 18 untuk Fase A, 22 untuk Fase B/C
- `_buildProgressText` diperluas dengan param `fase`
- Pemanggil diteruskan `totalTP` dan `fase` dari `session.kelas`
- Fix `/18` hardcoded di pesan error PDF precache → `/${total}`
- SW bump v115
**Validate:** Fase A confirmed ✅ — Fase B/C pending sampai
fix pembatasan akses per guru selesai (akun per kelas tersedia).

---

### Fix Pembatasan Akses Per Guru ✅ CLOSED
**Commits:** 0b0bf2d · 9a19468
**Root cause:** `_finalizeActivation()` di `screens/activation.js`
tidak meneruskan field `kelas` dari Supabase ke `_saveSession()` →
semua guru tersimpan `kelas: 'all'` → guard di `dashboard.js` tidak
pernah aktif.
**Fix:** Tambah `kelas: data.kelas || 'all'` di call `_saveSession()`
(baris 248). Data `kelas` dari Supabase sudah tersedia di scope,
tinggal diteruskan.
**Catatan arsitektural:** FLAF menggunakan Model A — kode aktivasi
per kelas, terikat ke kolom `kelas` di Supabase. Distribusi via
iklan dengan mekanisme request kode terpisah.
**Validate:** Pending — belum ada guru aktif di production.
SW bump v116.

---

### Sprint Uji Coba Per Kelas — Fix UI & Data ✅
**Commits:** 071dad4 · 9d5cdfc · 18b3e22 · 20e27fa · efb0524 · 4662e2c · 96476f8 · a462520

**Fix yang dilakukan:**
1. `screens/nilai.js` — disable pilihan kelas lain saat Tambah Rombel
   sesuai `session.kelas` (sebelumnya parsial & tidak konsisten)
2. `app.js` — deskripsi card Dokumen Kurikulum dinamis per kelas
   (Kelas 1–2: "9 TP", Kelas 3–6: "11 TP"; sebelumnya hardcoded "18 TP")
3. `screens/kurikulum.js` — disable tab kelas lain di screen Kurikulum
   sesuai `session.kelas` (sebelumnya semua tab aktif)
4. `screens/dashboard.js` — LEVELS teks diubah dari hardcoded
   "Fase A Tuntas / Semua 18 TP selesai" menjadi berbasis hari aktif
   yang berlaku untuk semua fase

**SW bumps:** v117 · v118 · v119 · v120

**Status:** Validate ongoing — uji coba per kelas sedang berlangsung.
Kelas 1 sudah ditest, Kelas 2–6 pending.

---

### Sprint Audit Kode Kelas 1–6 ✅ CLOSED (Juni 2026)

Audit kode statis untuk semua 6 kelas menggunakan dokumen audit 89 item
(15 kategori A–O). Metode: Claude Code membaca kodebase dan menentukan
status tiap item (✅ OK dari kode / ⚠️ Verifikasi manual / ❌ Bug).

**Hasil per kelas:**
- Kelas 1: diaudit sesi sebelumnya
- Kelas 2: 32 OK, 55 verifikasi manual, 0 bug
- Kelas 3: 33 OK, 55 verifikasi manual, 1 bug (N3 header kelas)
- Kelas 4: 34 OK, 55 verifikasi manual, 0 bug
- Kelas 5: 34 OK, 55 verifikasi manual, 0 bug
- Kelas 6: 34 OK, 55 verifikasi manual, 0 bug

**Bug yang ditemukan dan sudah difix:**
1. B1 — `index.html:155`: label fase hardcoded → fix: `a7f3e32`
2. B2/B3 — `index.html:156`: total TP hardcoded → fix: `a7f3e32`
3. A2 — `app.js:422`: kelas hilang dari session saat aktivasi pertama → fix: `efa36dd`
4. B2 — `app.js:274`: `_totalTP` mengembalikan per fase bukan per kelas → fix: `09239df`
5. N3 — `data/fase-b.js:26`: `meta.kelas = '3-4'` inkonsisten →
   fix: header kurikulum diubah dinamis per session (`4804f3d`)

**Fitur baru yang ditambahkan selama sprint:**
- Header home screen: "Halo," dihapus, emoji dihapus, baris kelas
  ditambahkan → commit `da9ffd9`
- Overlay sambutan sekali pakai saat pertama aktivasi → commit `797a571`
- Header kurikulum menampilkan kelas dan TP spesifik per session
  (bukan per fase) → commit `4804f3d`

**SW aktif:** v124. Semua commit sudah di-push ke main.

**Status verifikasi manual:**
55 item per kelas masih perlu diverifikasi di browser — semua item
yang membutuhkan interaksi UI, audio, dan download file.
Uji manual Kelas 2 sudah dimulai (38 item lolos, 19 item pending).

---

## NEXT TASK — Fix Pembatasan Akses Per Guru (Pre-Onboarding)

**Status: BELUM dikerjakan — tahan sampai sebelum guru pertama onboard**

### Bug yang ditemukan (29/05/2026)
- File: `screens/activation.js` baris 240–248 (`_finalizeActivation`)
- Masalah: field `kelas` dari Supabase tidak diteruskan ke `_saveSession()`
- Akibat: semua guru tersimpan dengan `kelas: 'all'` — tidak ada pembatasan akses

### Yang perlu diperbaiki
- `_finalizeActivation` di `activation.js`: teruskan `kelas` dari `data` ke `_saveSession()`
- Verifikasi `kelasOk` di `dashboard.js` berjalan benar setelah fix

### Catatan
- `kelas: 'all'` saat ini disengaja untuk memudahkan review dan testing
- Tidak ada guru aktif di production — aman ditahan
- Setelah fix: guru kelas 3/4 hanya akses Fase B, guru kelas 1/2 hanya Fase A

---

## feat: tambah preOpening dan diferensiasi ke TP 15–18 runtime (Fase A)

**Commit:** bf7753e — 4 file, 48 insertions

**Latar belakang:**
TP 15–18 Fase A menggunakan file runtime dari folder sesi-mN
(sesi-m10 s.d. sesi-m13), bukan dari docs/output-v5. Field
preOpening dan diferensiasi sudah ditulis di output-v5 sejak
commit d13d040/756d1c4, tapi tidak pernah dimigrasikan ke file
runtime yang benar-benar dipakai app.

**Yang ditambahkan:**
- sesi-m10/tp-15-v5.js: preOpening + diferensiasi di Inti L10
  (Partner Practice — sudahBisa/perluSupport)
- sesi-m11/tp-16-v5.js: preOpening + diferensiasi di Inti L9
  (Pair Retelling — sudahBisa/perluSupport)
- sesi-m12/tp-17-v5.js: preOpening + diferensiasi di Inti L10
  (Pair Dialogue — sudahBisa/perluSupport)
- sesi-m13/tp-18-v5.js: preOpening saja — TP 18 adalah capstone
  (poster + presentasi), tidak punya diferensiasi di kedua versi

**Catatan arsitektur:**
- TP 01–14 Fase A: runtime dari docs/output-v5/ ✅ sudah benar
- TP 15–18 Fase A: runtime dari docs/sesi-mN/ — sudah diperbaiki ✅
- Field diferensiasi di Fase A muncul dengan dua konvensi key:
  needHelp/ready (TP 02–14) dan sudahBisa/perluSupport (TP 15–17)
- sesi-runtime.js sudah menangani kedua konvensi dengan benar
  via Object.entries() — tidak perlu perubahan di runtime

**Status:**
- Rendering diferensiasi di sesi-runtime.js: tampil tanpa label
- Keputusan label ditunda — belum ada keputusan dari pemilik

---

## feat: label diferensiasi di card runtime (420fbf9)

- Tambah LABEL_MAP di sesi-runtime.js untuk memetakan key
  diferensiasi ke label bahasa Indonesia
- perluSupport → "Perlu support", sudahBisa → "Sudah bisa"
- needHelp → "Perlu support", ready → "Sudah bisa"
- Berlaku untuk semua TP semua fase yang punya field diferensiasi
- Key tidak dikenal fallback ke nama key mentah
- SW cache bump v90 (3758201)
* Audit layar nilai — Fix 1/2/3 selesai: tpRange 4-way Fase B di getRekapSemua + getRekapAkhir, soalCards dinamis per tingkat di _renderUnduh (76e95e4, 6caf5ef)
* UI polish dashboard.js — 8 item: chevron gold, opacity raise (Halaman/Hadir, Tujuan Akhir, list-arrow), Sebelumnya sejajar Lanjut, ds-warn-btn--cancel diperkuat, H S I A border+text, vocab chip padding (5bf94fb)

✅ SPRINT PRINTABLES FASE B SELESAI ✅ (01/06/2026)
   - data/printables.js: generatePrintHTML(tp, mode='standar') — PRINT_MODE_CONFIG 5 mode, PRINTABLES_BASE_MAP fase-aware
   - screens/dashboard.js: _showPrintModal(tp) overlay modal + _doCetak(tp, mode) + dashCetakKartu() dipersingkat (baris 402–522)
   - docs/output-v5-faseb/: printables[] disisipkan di 22 TP (setelah checklist, sebelum energi_map) — 140 entri total (d22e592)
   - assets/images/printables_fase_b/: 140 PNG ditambahkan + dikompres 275MB→79MB 71% (c279818)
   - sw.js: 140 path printables_fase_b/ ditambah ke APP_SHELL precache
   - CACHE_VERSION: flaf-v91 → flaf-v92 → flaf-v93 (b3a031e)
   - Tech debt: footer hardcoded 'Fase A'/'Fase B' (TD-8), nilai screen Kelas 3/4 belum diverifikasi (TD-9)

---

## Update Status Proyek — Juni 2026

- **SW aktif**: `flaf-v163`
- **Commit terakhir**: `59da906` — chore: bump SW setelah audit fase-a-tp04
- **Tanggal**: 7 Juni 2026
- **Fase C**: SELESAI ✅ — integrasi penuh ke PWA
- **Sesi terakhir**: 3 Juni 2026 — TD-12 fix nilai TP range Kelas 5/6,
  TD-13 visual polish Layar Mengajar (batch 1 & 2 selesai), SW v112

---

## FASE C — Selesai (3 Juni 2026)

### Authoring (selesai, semua approved)

- 22 skenario `.txt` di `docs/fase-c-skenario/`
- Dokumen sistem authoring di `docs/fase-c-authoring/`:
  - `FLAF_Fase_C_Curriculum_Authoring_Standard.md`
  - `FLAF_Fase_C_Quality_Gate_System.md`
  - `FLAF_Fase_C_Authoring_Briefing.md`
  - `FLAF_Fase_C_Cross_TP_Audit.md`
- Audit lintas TP selesai — tidak ada temuan fatal
- 3 temuan minor (Kluster D bridge mode, TP08 `then` brief, TP09 formulasi) — semua di bawah threshold blocking
- Revisi pasca-audit: TP13/14/15 L1 reactivation ditambah opsi kalimat dari tulisan OUTPUT siswa

### Schema JS (selesai)

- 22 file `tp-01-v1.js` s/d `tp-22-v1.js` di `docs/fase-c-skenario/`
- Canonical schema Fase C v1.0 (backward compatible dengan Fase B v5.0)
- Field baru vs Fase B: `text_anchor`, `connector_aktif`, `recycle_fase_b`, `breakpoints[]`, `flex`, `flex_kondisi`, `blok`, `assessment_overlay`, `interact_contract`, `artifact`, `interaction_mode`, `energy_level`

### Distribusi TP per kelas

| Kelas | Range | Jenis |
|-------|-------|-------|
| 5 | TP 01–11 | Biasa ×8, Panen ×2, Kompleks ×1 |
| 6 | TP 12–22 | Biasa ×3, Kompleks ×4, Panen ×2, Capstone ×2 |

### Vocab Fase C

- 17 dari 22 TP terisi vocab
- 5 TP kosong by design: C-04, C-08, C-16, C-20 (writing/Panen), C-22 (Capstone — menggunakan 10 vocab meta)
- Guard `tp.vocab.length > 0` dipasang di `dashboard.js` — label "Kosakata Kunci" tidak tampil jika kosong

### Integrasi PWA (selesai)

| File | Perubahan |
|------|-----------|
| `data/fase-c.js` | Aggregator 22 TP — import dari `docs/fase-c-skenario/` |
| `data/index.js` | Tambah `'C': FASE_C` ke REGISTRY — multi-fase A+B+C aktif |
| `screens/kurikulum.js` | Kelas 5-6, `_metaMap`, `_faseMap` dinamis |
| `screens/nilai.js` | Tambah rombel kelas 5-6, `nilaiPilihTingkat` dinamis, TP Tuntas dinamis |
| `screens/dashboard.js` | Mapping kelas 5-6, badge TP selesai hijau, `cpHTML` tujuan akhir fase dinamis, scroll kurikulum ke TP spesifik via `tp.id`, `onBack` ke Presensi |
| `screens/sesi-runtime.js` | Renderer Kelompok 1+2: `breakpoints[]` activation/persist/resume, block header INPUT/INTERACT/OUTPUT, assessment panel, `interaction_mode` badge, `onBack` callback |

### Testing (semua passed)

- Test 1: Fase C di kurikulum — 22 TP, kelas 5-6 ✅
- Test 2: Breakpoint overlay, persist, resume TP20 ✅
- Test 3: Fase A/B backward compatible ✅
- Test 4: Daftar TP per kelas semua 6 kelas ✅

### SW Version History — v94 s/d v109

| Versi | Commit | Keterangan |
|-------|--------|------------|
| v94 | 1e9e965 | renderer Kelompok 1+2 + 22 TP schema |
| v95 | fde2fe6 | fix backtick emphasis dalam template literal |
| v96 | 65d4f2b | fix kutip tunggal di single-quoted string |
| v97 | 1335ba3 | fix backtick emphasis komprehensif 22 TP |
| v98 | ee8a2bf | fix orphan quote tp-03-v1.js |
| v99 | 9a1382b | kurikulum kelas 5-6 |
| v100 | 2907cb7 | tambah rombel kelas 5-6 di dashboard + nilai |
| v101 | 6278fae | fix nilaiPilihTingkat kelas 5-6 |
| v102 | d97cb9d | sederhanakan guard kelas 5-6 |
| v103 | 593a6fa | TP Tuntas dinamis per kelas |
| v104 | 48fa46b | badge TP selesai hijau + teks nama redup |
| v105 | 9b3646b | vocab guard kosong + isi C-17 C-21 |
| v106 | 5d901f6 | tujuan akhir fase dinamis per kelas TP |
| v107 | b2b2555 | scroll kurikulum ke TP Fase B/C dengan id benar |
| v108 | 5a10b4b | tombol Sebelumnya dari Pembuka kembali ke Presensi |
| v109 | e22a2e8 | aktifkan tombol Sebelumnya jika onBack tersedia |
| v110 | dbe8c7d | fix(nilai): tambah TP range Kelas 5 & 6 di getRekapSemua dan getRekapAkhir |
| v111 | d6a3428 | style(dashboard): batch 1 — hapus emoji mood, opacity durasi, standarisasi Sebelumnya/Lanjut, label Batalkan |
| v112 | 5603fe3 | style(dashboard): batch 2 — HSIA opacity, materi-desc, vocab-chip, JP text |

---

## Technical Debt Tambahan

### TD-10: Renderer Kelompok 3 (analytics layer)
- `interact_contract` display, `artifact` hints, `energy_level` filtering — ditunda
- Menunggu data dari kelas nyata sebelum desain UI diputuskan

### TD-11: Testing breakpoint visual semua TP Panen/Capstone
✅ RESOLVED (4 Juni 2026)
- Verified di browser: semua 5 TP lolos 3 checkpoint (overlay, simpan, resume).
  TP04 ✅ TP08 ✅ TP16 ✅ TP21 ✅ TP22 ✅ — tidak ada bug ditemukan.

### TD-12: Nilai screen Kelas 5/6 belum lengkap
✅ RESOLVED — commit `dbe8c7d` (3 Juni 2026)
- Fixed: tambah cabang `tingkat === 5` dan fallback eksplisit `tingkat === 6`
  di `getRekapSemua()` dan `getRekapAkhir()` di `storage/nilai.js`
- Ternary 4-cabang → 6-cabang eksplisit: Kelas 5 → `[1..11]`, Kelas 6 → `[12..22]`

### TD-PRINT-B: Inkonsistensi printables[] Fase B
✅ RESOLVED (3 Juni 2026)
- File: `docs/output-v5-faseb/tp-11-v5.js` dan `tp-18-v5.js`
- Masalah: Kartu kegiatan (activity/sorting cards) disebutkan detail
  di `persiapan[]` — 6 kartu untuk B11, 6 kartu untuk B18 —
  tapi tidak ada di `printables[]`. Guru tidak bisa cetak via tombol
  Cetak Kartu Persiapan. Hanya B19 yang konsisten (`sequence-cards`
  ada di `printables[]`). Total 12 kartu hilang dari sistem cetak.
- Fix: tambah 12 entry ke `printables[]` B11 & B18, sinkron teks
  `'I drink milk in the morning.'` → `'I drink water every day.'`
  (commit `e137d0c`). Tambah 12 PNG ke SW precache (commit `09ad7c0`).
- Status file PNG: 12 file (`tp-b11-habit-card-1..6.png` dan
  `tp-b18-activity-card-1..6.png`) sudah di-generate dan tersimpan di
  `assets/images/printables_fase_b/`. Sudah masuk SW precache di
  `sw.js` (commit `09ad7c0`).

### TD-13: UI sprint Layar Mengajar (dashboard.js) — 12 item
✅ RESOLVED — Batch 1 (commit `d6a3428`) + Batch 2 (commit `1375491`) — 3 Juni 2026

8 item dikerjakan:
- Item 2: Hapus emoji dari mood buttons (Lancar/Biasa/Berat plain text)
- Item 3: Label tombol warn banner "← Kembali Isi" → "← Batalkan"
- Item 6: Raise opacity `.ds-fase-durasi` "10 menit" → `rgba(255,255,255,.75)`
- Item 8: HSIA non-aktif border `.1`→`.3`, color `.25`→`.55` (render + update)
- Item 9: `.ds-step-btn--prev:active` disamakan dengan `--next:active`
- Item 10: `.kur-atp-jp` opacity `.6`→`.75` di `kurikulum.css`
- Item 11: `.ds-materi-desc` color `.8`→`.85`
- Item 12: `.ds-vocab-chip` padding `9px 18px`→`10px 16px`

4 item di-skip (tidak perlu dikerjakan):
- Item 1: "SESI BERLANGSUNG" sudah gold sebelumnya
- Item 4 & 5: Chevron `›` elemen tidak ada di UI saat ini
- Item 7: "Halaman 1/4 · Hadir 0/20" sudah cukup terbaca sebelumnya

---

## Status Pending

### Sudah selesai (diupdate dari NEXT TASK sebelumnya)
- ✅ Fase C integrasi PWA — SELESAI (3 Juni 2026)
- ✅ Kelas 5-6 di kurikulum dan rombel — SELESAI
- ✅ Breakpoint runtime Fase C — SELESAI
- ✅ commit b2b2555 + a2a7430 (scroll kurikulum) — sudah di-push sebagai SW v107
- ✅ TD-12: fix nilai TP range Kelas 5/6 — SELESAI (3 Juni 2026, SW v110)
- ✅ TD-13: visual polish Layar Mengajar batch 1 & 2 — SELESAI (3 Juni 2026, SW v111–v112)
- ✅ TD-11: Testing breakpoint visual TP Panen/Capstone — SELESAI (4 Juni 2026)

### Pending
- TD-10: Renderer Kelompok 3 — tahan sampai ada data kelas nyata
- Keputusan: apakah bridge mode reactivation Kluster D (TP13–15) didokumentasikan di CAS §19 atau direvisi ke OUTPUT siswa

---

## AUDIT PWA — STATUS FIX (Sesi 6 Juni 2026)

### Item High Priority — Semua Selesai (sesi sebelumnya)

Lihat commit history Fix 1–Fix 15 (v125–v139).

### Item Medium Priority — Selesai di Sesi 6 Juni 2026

| ID  | Deskripsi | Commit |
|-----|-----------|--------|
| M4  | Ganti alert/confirm native → showToast + showConfirmDialog | 66a7751 |
| M5  | Empty state informatif + tombol Kelola Siswa di STS/SAS/Rapor | 62732ef |
| M6  | Peringatan toast jika CSV kosong sebelum diunduh | dbf8ac8 |
| M7  | Konfirmasi dialog sebelum import backup dimulai | e474bf8 |
| M8  | Union merge kelas_list saat restore backup | c463ea3 |
| M9  | Tolak backup version terlalu lama saat import | 2f4de4c |
| M10 | Pesan visible ke guru saat IDB blocked (splash-status + toast) | d4f10b5 |
| M11 | Sanitasi data backup sebelum masuk IDB | 6237a2e |

### SW Version History — v140 s/d v147

| Versi | Commit | Keterangan |
|-------|--------|------------|
| v140 | 66a7751 | M4 alert/confirm native diganti showToast dan dialog FLAF |
| v141 | 62732ef | M5 empty state informatif STS/SAS/Rapor |
| v142 | dbf8ac8 | M6 guard CSV kosong sebelum unduh |
| v143 | e474bf8 | M7 konfirmasi import backup |
| v144 | c463ea3 | M8 union merge kelas_list |
| v145 | 2f4de4c | M9 cek versi backup terlalu lama |
| v146 | d4f10b5 | M10 pesan IDB blocked |
| v147 | 6237a2e | M11 sanitasi data backup |

### Item Low Priority — Selesai di Sesi 6 Juni 2026

| ID | Item | Commit |
|----|------|--------|
| TD-18 | Ganti window.confirm native di hardReset + clearPDFCache | 1ef2879 |
| TD-16 | Refactor _showIDBUnavailableScreen pakai splash-status | 6f8f1ed |
| TD-14 | Tambah parameter type ke showToast — success/warning/error/info | 910eb06 |
| TD-17 | Update manifest + splash badge → Fase A+B+C Kelas 1–6 | 11f6102 |
| TD-23+24 | autocorrect off + maxlength di input rombel & textarea siswa | 61ac8dd |
| TD-26 | Guard kelas='all' di label fase progress bar | f888dfb |
| TD-19 | Hapus dead code sw_pending_update — alur lama sejak Fix 13 | ce625ed |
| TD-25 | Verified — tidak ada bug, _totalTP() akurat untuk kelas 1–6 | — |
| TD-20+21+22+32 | Batch A — JSDoc stale, version sinkron, hapus console.log | e513870 |
| TD-27+29+30+31 | Batch B — hapus log_queue, aria-label, type button, catch warn | 392bd50 |
| TD-15 | Skip — tunda sampai refactor shared utilities | — |
| TD-28 | Skip — admin panel, konteks terpisah | — |

### SW Version History — v148 s/d v156

| Versi | Commit | Keterangan |
|-------|--------|------------|
| v148 | 49f40f4 | TD-18 confirm native diganti dialog FLAF |
| v149 | 2806680 | TD-16 IDB unavailable screen fix |
| v150 | 0adb00b | TD-14 showToast type parameter |
| v151 | 6d34f9b | TD-17 manifest dan splash badge diupdate |
| v152 | 292d4de | TD-23 TD-24 autocorrect off input nilai |
| v153 | 89cf6b7 | TD-26 fix label fase progress bar |
| v154 | a72178e | TD-19 hapus dead code sw_pending_update |
| v155 | 0a9a807 | Batch A cleanup TD-20 TD-21 TD-22 TD-32 |
| v156 | ea58976 | Batch B cleanup TD-27 TD-29 TD-30 TD-31 |

### Antrian Pekerjaan — Status Terkini

- ✅ Semua item High Priority: selesai (Fix 1A–Fix 15C, SW v125–v139)
- ✅ Semua item Medium M4–M11: selesai di sesi 6 Juni 2026 (SW v140–v147)
- ✅ Semua item Low TD-14 s/d TD-32: selesai di sesi 6 Juni 2026 (SW v148–v156)
- ⏳ TD-15: di-skip — tunda sampai ada refactor shared utilities
- ⏳ TD-28: di-skip — admin panel, konteks terpisah, tidak mempengaruhi guru
- **Tidak ada item audit PWA yang tersisa**

---

## Catatan Hutang Teknis Baru (6 Juni 2026)

### TD-14: showToast parameter type
✅ RESOLVED — commit `910eb06` (6 Juni 2026)
- Tambah parameter `type` opsional ke `showToast(message, duration, type)`
- 4 varian CSS: `.toast--success`, `.toast--warning`, `.toast--error`, `.toast--info`
- Update pemanggil kunci: backup success, CSV kosong warning, IDB blocked error

### TD-15: Dua fungsi dialog konfirmasi terpisah
⏳ DITUNDA — menunggu refactor shared utilities
- `showConfirmDialog` di `nilai.js` dan `_confirmDialog` di `app.js` tetap terpisah
- Tidak mempengaruhi fungsionalitas — ditunda sampai ada sistem shared utilities

### TD-16: _showIDBUnavailableScreen() silent fail
✅ RESOLVED — commit `6f8f1ed` (6 Juni 2026)
- Refactor: hapus referensi `.splash-inner` yang tidak ada di HTML
- Sekarang menggunakan `_updateSplashStatus()` + `showToast()` yang sudah terbukti bekerja

---

## Sesi 6 Juni 2026 — Audit Skenario + Fitur Runtime

### Fitur Baru

| Fitur | File | Keterangan |
|-------|------|------------|
| TTS button pindah ke sebelah label UCAP | sesi-runtime.js / css | Tombol 🔊 direlokasi dari pojok kanan atas card ke dalam `.sr-ucap-header` (flex row bersama label UCAP) |
| UCAP collapse berurutan | sesi-runtime.js | `_collapseUcap()` — segmen ucap berturutan digabung menjadi satu blok, `isi` dipisah `\n` |
| Pemisah visual `---` | sesi-runtime.js / css | `_expandPemisah()` — string `---` di segmen biasa diubah menjadi `<div class="sr-pemisah">` (height 12px) |
| Icon TTS → emoji | sesi-runtime.js | Ganti `<i class="ti ti-volume">` (Tabler Icons tidak dimuat) dengan `<span aria-hidden>🔊</span>` / `⏹` |

### Fix Runtime & UI

| SW | Commit | Deskripsi |
|----|--------|-----------|
| v157 | 8b2fe49 | fix(dashboard): opacity:0.6 → opacity:0.85 di _buildStepAsesmen |
| v158 | 6b9c028 | feat(runtime): UCAP collapse + TTS button relokasi ke ucap-header |
| v159 | f8f8b26 | fix(runtime): TTS icon ti-volume → emoji 🔊/⏹ (Tabler Icons tidak dimuat) |
| v160 | b63efb9 | fix(tp-01): L14 pisah AKSI tunjuk dari UCAP "What greeting..." |
| v161 | e0ac9e8 | fix(dashboard): deskripsi asesmen opacity:0.85 → color:rgba(255,255,255,0.85) |
| v162 | 75e030a | feat(runtime): _expandPemisah() — render --- sebagai pemisah visual |
| v163 | 7c662e5 | fix(dashboard): title card asesmen tambah color:rgba(255,255,255,0.9) |

### Audit Skenario TP01 — Selesai

| Langkah | Tipe | Status | Catatan |
|---------|------|--------|---------|
| L1 | Instruksi | ✅ | Pembuka kelas, teks lengkap |
| L2 | Instruksi | ✅ | Intro vocab greetings |
| L3–L6 | Instruksi | ✅ | Core drills, flash cards |
| L7 | Instruksi | ✅ | Pair practice |
| L8 | Instruksi | ✅ | Class survey |
| L9 | Instruksi | ✅ | Diferensiasi (needHelp/ready) |
| L10 | Instruksi | ✅ | Penutup drill |
| L11 | Instruksi | ✅ | Reflection |
| L12 | Instruksi | ✅ | Vocab recap |
| L13 | Instruksi | ✅ | Goodbye song |
| L14 | Instruksi | ✅ | Fix: AKSI tunjuk dipisah dari UCAP "What greeting..." |

### 7 Standar Penerimaan Skenario FLAF

- **S1** — Setiap langkah punya tipe valid (instruksi/diferensiasi/asesmen)
- **S2** — Teks langkah menggunakan UCAP: prefix untuk setiap kalimat yang diucapkan guru
- **S3** — Frasa AKSI dan UCAP tidak tercampur dalam satu token teks
- **S4** — Diferensiasi ada di field `diferensiasi: { needHelp, ready }` — bukan di teks
- **S5** — `preOpening` ada di root TP, bukan di langkah[0]
- **S6** — `---` digunakan sebagai pemisah visual antar blok instruksi panjang
- **S7** — Setiap UCAP multi-kalimat: tiap kalimat punya prefix `UCAP:` sendiri

### Status Audit Skenario Fase A

**SW aktif saat ini:** `flaf-v206`

| TP | Topik | Status | Commit | SW |
|----|-------|--------|--------|----|
| TP01 | Greetings & Farewells | ✅ Re-audit selesai | `92c6144` | `flaf-v203` |
| TP02 | Classroom Objects | ✅ Re-audit selesai | `c7d7a89` | `flaf-v204` |
| TP03 | Action Verbs | ✅ Re-audit selesai | `06dc400` | `flaf-v205` |
| TP04 | Numbers 1–20 | ✅ Re-audit selesai | `22a9f27` | `flaf-v206` |
| TP05–TP18 | (belum re-audit) | ⏳ Pending | — | — |

### Keputusan Teknis Audit Skenario (Ditetapkan TP08–TP15)

1. **preOpening — format polos**: Field `teks` di `preOpening` tidak boleh menggunakan prefix token `UCAP:`/`AKSI:` — format polos (plain text) saja. Setiap TP perlu dicek dan dibersihkan dalam prompt yang sama saat audit.

2. **Pola "When I clap —" / "— stop."**: Dipertahankan sebagai dua fragmen UCAP terpisah dengan `AKSI: Tepuk 1 kali.` di antara keduanya — konsisten sejak TP09.

3. **Tiga atau lebih UCAP berurutan tanpa AKSI**: `_collapseUcap()` akan menggabungkan blok berturutan. Sisipkan `AKSI: Jeda sebentar.` sebagai pemisah di antara UCAP agar tidak collapse.

4. **Audit preOpening wajib per TP**: Setiap TP yang diaudit perlu dicek field `teks` preOpening-nya — jika mengandung prefix `UCAP:`/`AKSI:`, bersihkan dalam prompt yang sama sebelum commit.

5. **Bantuan terpotong wajib dilengkapi**: Field `bantuan` yang terpotong (akibat batch converter) perlu dilengkapi manual sebelum commit — jangan commit teks yang terpotong di tengah kalimat.

6. **"Listen. My turn." selalu satu token UCAP**: Tidak dipecah menjadi dua UCAP terpisah — berlaku lintas semua TP tanpa pengecualian.

7. **"Ready? Fast — but clear." adalah dua UCAP terpisah**: `UCAP: "Ready?"` dan `UCAP: "Fast — but clear."` — tidak digabung dalam satu token.

8. **Normalisasi penuh wajib**: Semua ujaran guru wajib `UCAP:`, semua gesture/jeda/ekspresi wajah/penunjukan/narasi wajib `AKSI:` — tidak ada pengecualian di semua TP baru.

9. **Sync ke folder sesi-mN setelah audit**: TP di-serve dari `docs/sesi-mN/` bukan `output-v5/`. Setelah audit `output-v5/`, wajib sync: TP15 → `sesi-m10/`, TP16 → `sesi-m11/`, TP17 → `sesi-m12/`, TP18 → `sesi-m13/`.

10. **AKSI: Jeda sebentar. sebagai pemisah blok UCAP**: Setiap dua UCAP berurutan yang seharusnya tampil sebagai blok kuning terpisah wajib dipisah dengan `AKSI: Jeda sebentar.` — tanpa ini `_collapseUcap()` akan menggabungkannya.

### SW Version History — v148 s/d v163

| Versi | Commit | Keterangan |
|-------|--------|------------|
| v148 | 49f40f4 | TD-18 confirm native diganti dialog FLAF |
| v149 | 2806680 | TD-16 IDB unavailable screen fix |
| v150 | 0adb00b | TD-14 showToast type parameter |
| v151 | 6d34f9b | TD-17 manifest dan splash badge diupdate |
| v152 | 292d4de | TD-23 TD-24 autocorrect off input nilai |
| v153 | 89cf6b7 | TD-26 fix label fase progress bar |
| v154 | a72178e | TD-19 hapus dead code sw_pending_update |
| v155 | 0a9a807 | Batch A cleanup TD-20 TD-21 TD-22 TD-32 |
| v156 | ea58976 | Batch B cleanup TD-27 TD-29 TD-30 TD-31 |
| v157 | 8b2fe49 | fix opacity asesmen placeholder |
| v158 | 6b9c028 | feat UCAP collapse + TTS relokasi |
| v159 | f8f8b26 | fix TTS icon → emoji |
| v160 | b63efb9 | fix tp-01 L14 pisah AKSI tunjuk |
| v161 | e0ac9e8 | fix asesmen deskripsi color |
| v162 | 75e030a | feat pemisah --- runtime |
| v163 | 7c662e5 | fix title color asesmen |
