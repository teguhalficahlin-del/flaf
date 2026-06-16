# HANDOFF — FLAF Fase D
SW aktif: flaf-v247
Terakhir diupdate: 17 Juni 2026

---

## Status
- Fase D: 66/66 TP LOLOS review independen (ChatGPT)
- Kelas 7: 24/24 | Kelas 8: 24/24 | Kelas 9: 18/18

## Sprint B — Test Suite Otomatis (SELESAI)
- tools/validate-fase-d.js — validator VR-1, VR-2, struktur
  7-step, constraint schema, dangling refs, enum, durasi
- Hasil: 66/66 LOLOS, 0 error, 0 warning
- Commits: e7c1a41 → 51c477f → 88e3883

## Preseden Desain (FINAL — jangan dipertanyakan ulang)
- Reaktivasi prerequisite = kapasitas struktural, bukan konten
- BOOST TP-18 lebih kaya dari biasanya — disengaja, tidak melanggar schema
- PAT-8-24 dihilangkan dari prerequisite_patterns TP-12 (final)

## Sprint C — Integrasi PWA (SELESAI)
Commit: 47e1520, ab95149 — SW: v246 → v247

**classroom_setup[] — 66 TP Fase D**
- Field baru di resources{} setiap TP
- Struktur: SETTLING (2–3 item) + HOOK (3–4 item)
- UCAP: Bahasa Inggris, memancing respons siswa
- AKSI: Bahasa Indonesia/Inggris
- Nada: K7 hangat · K8 semi-formal · K9 formal
- Tidak ada duplikasi UCAP antar TP
- Validasi: 66/66 LOLOS

**Layar SIAPKAN KELAS (_renderEntering())**
- Render classroom_setup[] dari data TP yang sudah loaded
- Deteksi section SETTLING/HOOK via UCAP pertama dengan "?"
- UCAP: bubble italic, ikon 🗣
- AKSI: plain text redup, ikon ⚡
- Fallback ke teks statis jika field tidak ada

**Dashboard tab Materi**
- Section "Siapkan Sebelum Kelas" via _buildAlatBantu()
- "Media Belajar" (🖼) dari visual_cues[]
- "Gestur Guru" (🤝) dari gesture_cues[]

**Keputusan desain sesi ini:**
- classroom_setup[] = SETTLING + HOOK saja
  (TRANSISI KE MODEL dihapus — mendahului langkah kelas)
- Reference mode dipilih untuk SIAPKAN KELAS
  (semua item sekaligus, scroll — bukan per item tap)

---

## Ringkasan Kerja Sprint C — Integrasi sesi-runtime + Kurikulum

**Tahap 1 — Analisis pra-integrasi (read-only):**
Audit registry (`data/index.js`), renderer groups SD vs SMP, struktur data Fase D, gap analysis field, dan kelas mapping. Tidak ada perubahan kode.

**Tahap 2 — BUILD hardcode SD-only + DESIGN paritas fitur:**
- `nilai.js`: dikonfirmasi sudah mendukung Kelas 7-9 dari sesi sebelumnya, tidak ada perubahan kode.
- `kurikulum.js:344`: `kelasLabel` dibuat dinamis SD/SMP.
- Desain pemetaan field SD↔Fase D untuk 3 fitur paritas (TTS, Kondisi Darurat, Overlay Penilaian) — dokumen saja, belum ada kode.

**Tahap 3 — BUILD inti:**
- `kurikulum.js`: `_resolveKurikulumData()` diperbaiki agar Kelas 7-9 di-route ke **placeholder Fase D**, bukan fallback `'ALL'` SD yang salah. Placeholder dipilih (bukan render penuh) karena `data/fase-d.js` tidak punya `meta`/`cp` setara SD — render penuh akan crash/menampilkan data salah.
- `sesi-runtime-smp.js`: 3 fitur paritas ditambahkan —
  - **TTS**: baca `resources.model_sentences[]` via `sentence_refs[]`, tidak pakai parser regex `UCAP:` ala SD karena Fase D sudah terstruktur.
  - **Kondisi Darurat**: overlay generik direuse (duplikat konstanta, bukan import dari SD) — tidak baca field skema TP apa pun.
  - **Overlay Penilaian** → **Observasi Formatif**: kualitatif murni, tidak ada skor/huruf/skala. Disimpan ke store baru `penilaian_log_smp` (`storage/db.js` `DB_VERSION` 11→12), terisolasi total dari `penilaian_log` SD.

**Tahap 4 — Penyesuaian bahasa:**
Teks `FALLBACK_GENERIC` di overlay Kondisi Darurat SMP direvisi dari register childish/playful ala SD ("ajak tepuk pendek", "Beri jempol untuk yang berani") ke register netral-suportif sesuai usia SMP. Struktur data tidak diubah.

**Tahap 5 — HARDEN/VALIDATE (uji nyata via Playwright, bukan baca kode):**
Semua item dijalankan di browser sungguhan (server statis + Chromium headless). 1 bug nyata ditemukan dan diperbaiki di tempat (chip tag observasi tampil blok vertikal, bukan wrap — `.sr-opsi` base class tidak ter-override). 1 bug pre-existing independen ditemukan dan **tidak diperbaiki** (lihat known-issues.md), sesuai instruksi untuk tidak auto-fix tanpa lapor.

## Commit Log Sprint C (Tahap 1–5)

| SHA | Pesan |
|---|---|
| `cbc1390` | fix: kelasLabel dinamis SD/SMP di kurikulum.js |
| `bba4b95` | docs: laporan analisis pra-integrasi + desain paritas fitur Fase D |
| `316aee5` | fix: kurikulum.js route Kelas 7-9 ke Fase D, bukan fallback SD 'ALL' |
| `66e8cdd` | feat: paritas fitur TTS, kondisi darurat, observasi formatif di sesi-runtime-smp.js |
| `c1c9143` | fix: register bahasa overlay Kondisi Darurat SMP — netral, bukan childish ala SD |
| `ae52da9` | fix: chip tag observasi formatif SMP tampil wrap, bukan blok vertikal |
| `47e1520` | feat(fase-d): add classroom_setup[] to 66 TPs + render in _renderEntering() |
| `ab95149` | feat(dashboard): add Siapkan Sebelum Kelas section to tab Materi |

## Hasil Tes Final (Tahap 5)

| # | Item | Hasil | Catatan |
|---|---|---|---|
| 1 | Migrasi IDB | ✅ PASS | `oldVersion 11→12`, `penilaian_log_smp` baru terbentuk, data lama utuh |
| 2 | kurikulum.js — regresi SD | ✅ PASS | Kelas 2/5 identik seperti sebelumnya, nol error |
| 3 | kurikulum.js — Fase D | ✅ PASS | Placeholder muncul, nol crash, nol error |
| 4 | TTS (SMP) | ✅ PASS | `speechSynthesis.speak()` terpicu, nol error |
| 5 | Kondisi Darurat (SMP) | ✅ PASS | Teks revisi Tahap 4 tampil benar |
| 6 | Observasi Formatif (SMP) | ✅ PASS | 1 bug visual ditemukan+diperbaiki saat tes; tidak ada field skor tersimpan; export/import round-trip aman |
| 7 | Regresi fitur SD terkait | ❌ FAIL | UI normal, tapi **penyimpanan gagal** — bug independen `DB_VERSION` (lihat known-issues.md), bukan disebabkan store baru |
| 8 | Keseluruhan nol error | ❌ FAIL | Satu error console dari item 7, pre-existing |

Item 7 dan 8 FAIL karena bug independen yang sudah ada sebelum Sprint C, bukan regresi dari pekerjaan sprint ini.

## Preseden Desain Baru (Sprint C — berlaku ke depan)

1. **Overlay Penilaian Fase D kualitatif murni** — `observe[]`/tags + catatan teks bebas, **tidak ada skor/huruf/skala apa pun**. Ini bukan versi simplified dari overlay SD, melainkan desain berbeda total, konsisten dengan constraint `check_without_score: true` (rule validator A7) — ditegakkan juga di sisi runtime, bukan cuma di `tools/validate-fase-d.js`.
2. **`penilaian_log_smp` terisolasi total dari `penilaian_log` SD** — store IDB berbeda, tidak ada migrasi/percampuran data, untuk menghindari risiko merusak CSV export & rekap formatif SD yang sudah berjalan.
3. **Kurikulum Fase D pakai placeholder, bukan field `meta`/`cp` ala SD** — karena `data/fase-d.js` tidak punya struktur tersebut, dan memaksakan field SD ke Fase D adalah fabrikasi data, bukan solusi.

## Item Belum Terverifikasi (bukan blocking)

- **Discrepancy tombol "Lihat Kurikulum lengkap" di `dashboard.js:466`**: tombol ini ada di `_buildTabMateri()` (tab Materi SD), tapi **tidak ada** di `_buildTabMateriSMP()` (tab Materi SMP, baris ~640). Artinya untuk TP Fase D, tidak ada jalur dashboard → kurikulum langsung. Risiko nyata bagi guru SMP justru datang dari tab nav "Dokumen Kurikulum" (bottom nav) yang langsung baca `session.kelas` — ini sudah ditangani di Tahap 3 (item 3 test). Tapi perlu diverifikasi ulang: apakah memang disengaja tidak ada tombol tap-through untuk SMP, atau ini gap yang perlu diisi di sprint berikutnya.

---

## Update — Hotfix DB_VERSION SD (16 Juni 2026)

### Status
Known-issue #1 di [known-issues.md](docs/canonical/known-issues.md) — **RESOLVED**.

### Root Cause
`storage/siswa-history.js` (`savePenilaian`) dan `storage/nilai.js` (helper `_atomicUpdate`, dipakai oleh `setNilai`/`setNilaiLSR`/`setCatatan`/`setNilaiFormatif`/`setCatatanFormatif`) masing-masing hardcode `DB_VERSION` lokal sendiri dan membuka koneksi `indexedDB.open()` terpisah dari `storage/db.js`. Saat versi lokal lebih rendah dari versi DB yang sudah ada di browser, `indexedDB.open()` gagal dengan `VersionError` permanen — bukan transient.

### Temuan Tambahan — `nilai.js` Juga Terdampak
Investigasi awal hanya menemukan `siswa-history.js`. Saat digali lebih jauh, `storage/nilai.js` punya pola identik di `_atomicUpdate()`. Dibuktikan via Playwright (bukan asumsi pola kode) — kondisi DB sudah versi 12:
```
setNilaiError: "The requested version (10) is less than the existing version (12)."
```
Artinya bug ini bukan hanya menggagalkan penilaian proses per sesi SD (`penilaian_log`), tapi juga **nilai sumatif/formatif L/S/R dan catatan** (`nilai_data`) — severity sama-sama TINGGI, hanya belum terlihat di Tahap 5 Sprint C karena Tahap 5 tidak menguji jalur `setNilai`/`setNilaiLSR`.

### Race Condition Baru yang Ditemukan & Diselesaikan
Menyamakan `DB_VERSION` persis di semua modul (tanpa gating) membuka risiko baru: pada fresh install, jika modul tanpa `onupgradeneeded` handler memenangkan race membuka koneksi IndexedDB pertama, DB bisa stuck permanen di versi tinggi dengan nol object store (dibuktikan: `NotFoundError`). Diselesaikan dengan `await db.init()` di awal kedua titik (`siswa-history.js`, `nilai.js`) — memanfaatkan `_initPromise` singleton yang sudah ada di `db.js`, sehingga semua modul menunggu satu koneksi resmi yang sama sebelum membuka koneksi lokal mereka.

### Commit
| SHA | Pesan |
|---|---|
| `19d2e0e` | fix: VersionError penilaian SD — satu sumber DB_VERSION + gating db.init() |
| `d93e41d` | docs: known-issues.md — tandai bug VersionError SD RESOLVED |

### Validasi (Playwright, bukan baca kode)
- DB existing versi 12: `savePenilaian` + `setNilai` + `setNilaiLSR` — PASS, nol error.
- Fresh install, 5 variasi urutan race (`db`/`hist`/`nilai`): PASS, semua 7 store selalu terbentuk lengkap.
- Regression observasi formatif SMP (`penilaian_log_smp`): PASS, tidak terpengaruh.
- Jalur lain `nilai.js` (tambahKelas → tambahSiswa → getRekapTP): PASS.

### Follow-up Tidak Dieksekusi
Migrasi penuh `siswa-history.js` dan `nilai.js`'s `_atomicUpdate()` ke wrapper `db.js` (pola `penilaian-smp.js`) — menghilangkan kebutuhan modul-modul ini membuka `indexedDB.open()` sendiri sama sekali. Refactor lebih besar, di luar scope hotfix minimal. Dicatat sebagai backlog terpisah.

### Open Question Operasional (BELUM diputuskan)
Kemungkinan ada nilai/penilaian yang gagal tersimpan selama periode bug aktif (sebelum hotfix). Perlu keputusan Romo: apakah perlu komunikasi ke guru untuk pengisian ulang data. **Belum diputuskan.**

---

## Keputusan Mengapa (jangan dipertanyakan ulang)

| Keputusan | Mengapa |
|-----------|---------|
| classroom_setup[] hanya SETTLING + HOOK | Blok TRANSISI KE MODEL mendahului langkah kelas — siswa melihat media sebelum MODEL dimulai, efek atensi hilang |
| Reference mode untuk SIAPKAN KELAS | Guru berdiri di depan kelas butuh scan cepat, bukan tap per item — tangan harus bebas |
| Deteksi boundary SETTLING/HOOK via "?" | Komentar JS tidak terbaca di runtime — UCAP pertama dengan "?" selalu menjadi awal HOOK berdasarkan spec authoring |
| UCAP wajib Bahasa Inggris di classroom_setup[] | Guru harus memodelkan bahasa target sejak sebelum sesi dimulai |
| AKSI boleh Bahasa Indonesia | Instruksi fisik lebih efektif dalam bahasa guru untuk eksekusi cepat di kelas |
| Tidak ada duplikasi UCAP antar 66 TP | Guru yang mengajar banyak kelas akan merasakan repetisi — variasi menjaga engagement |

---

## Backlog Sprint Berikutnya (pilih salah satu)

1. **Desain kurikulum Fase D yang proper** — bangun `meta`/`cp` setara SD untuk `data/fase-d.js` agar placeholder di `kurikulum.js` bisa digantikan render penuh (panel CP/ATP/TP-detail).
2. **Migrasi wrapper db.js penuh** untuk `siswa-history.js` + `nilai.js` — follow-up prioritas rendah dari hotfix DB_VERSION, hilangkan `indexedDB.open()` mandiri di kedua modul.
3. **Sprint A** — validasi lapangan 3-5 TP sampel.
4. **Sprint D** — persiapan Fase E (Pattern Registry K10+).
