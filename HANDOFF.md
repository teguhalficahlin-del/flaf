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

---

## Sprint Skenario Ajar Fase D (17 Juni 2026)

### Keputusan Arsitektur
Seluruh TP Fase D akan dirombak dengan skenario ajar baru
dalam format AKSI/UCAP per langkah — menggantikan runtime[]
yang ada sekarang. Ini adalah perombakan total, bukan tambahan
field. Renderer PWA akan dibangun ulang setelah semua skenario
selesai dan divalidasi.

### Format Skenario
- Setiap instruksi ditulis sebagai AKSI atau UCAP per baris
- AKSI: instruksi fisik guru — boleh campur BI dan Inggris
- UCAP: kalimat guru — wajib Bahasa Inggris, ramah TTS,
  tanpa simbol atau kode apapun
- Urutan langkah wajib: PERSIAPAN → SIAPKAN KELAS → MODEL →
  REPEAT → CHANGE → INTERACT → SHARE → CHECK → BOOST
- CHECK adalah langkah terminal — dua jalur eksplisit
- BOOST hanya jika CHECK mayoritas lancar, satu fokus,
  maksimal tiga siswa

### Anchor Kualitas
- TP 7-01 adalah skenario acuan untuk semua TP
- File: docs/canonical/skenario-fase-d-kelas 7/skenario-7-01.txt
- Divalidasi ChatGPT — 9.9/10, semua aspek LOLOS
- Checklist lolos: 28 item (F-01 s/d F-07, S-01 s/d S-10,
  K-01 s/d K-05, C-01 s/d C-05, P-01 s/d P-03)

### Progress Skenario

**Kelas 7 — SELESAI**
- Generate: Claude Code — 24/24 file tersimpan
- Review: ChatGPT — satu TP per sesi, checklist 28 item
- Revisi: Claude Code — 15 file diperbarui, 8 file LOLOS langsung
- File lokasi: docs/canonical/skenario-fase-d-kelas 7/
- File format: skenario-7-XX.txt
- Status: semua 24 file final, siap digunakan

**Kelas 8 — BELUM DIMULAI**
- 24 TP menunggu
- File lokasi target: docs/canonical/skenario-fase-d-kelas 8/
- File format: skenario-8-XX.txt

**Kelas 9 — BELUM DIMULAI**
- 18 TP menunggu
- File lokasi target: docs/canonical/skenario-fase-d-kelas 9/
- File format: skenario-9-XX.txt

### Temuan Penting dari Kelas 7
Item paling sering bermasalah: K-01 + C-01
— MODEL memperkenalkan pola di luar target TP
— Muncul di 13 dari 15 file yang direvisi
— Perlu penekanan ekstra di prompt generate Kelas 8 dan 9

### Alur Kerja per Kelas
1. Generate — Claude Code baca data TP + skenario-7-01.txt
   sebagai acuan, tulis dan simpan semua skenario
2. Review — ChatGPT, satu TP per sesi, checklist 28 item,
   simpan semua hasil review dalam satu file txt
   dengan penanda ## Review TP X-XX
3. Revisi — Claude Code baca file review, parse verdict,
   perbaiki file yang PERLU REVISI
4. Lanjut ke kelas berikutnya

### Prompt Generate (untuk Kelas 8 dan 9)
Sama dengan Kelas 7 dengan dua penyesuaian:
1. Nada bahasa: K8 semi-formal, K9 formal
2. Tambahkan catatan khusus di prompt:

PERHATIAN KHUSUS — K-01 + C-01:
Di langkah MODEL, guru hanya boleh mengucapkan kalimat
yang ada di model_sentences[] data TP.
Jangan tambahkan kalimat contoh lain di luar model_sentences[].
Jangan perkenalkan pola bahasa yang bukan target TP ini.

### File Referensi Penting
- Skenario acuan: docs/canonical/skenario-fase-d-kelas 7/skenario-7-01.txt
- Data TP Kelas 7: docs/canonical/fase-d/kelas-7/
- Data TP Kelas 8: docs/canonical/fase-d/kelas-8/
- Data TP Kelas 9: docs/canonical/fase-d/kelas-9/
- Review Kelas 7: docs/canonical/## Review TP kelas 7.txt

### SW Aktif
flaf-v250 (tidak ada perubahan kode di sprint ini —
semua pekerjaan adalah konten skenario, bukan PWA)

### Keputusan yang Jangan Dipertanyakan Ulang
- Format AKSI/UCAP adalah final — tidak kembali ke runtime[]
- skenario-7-01.txt adalah anchor kualitas — tidak diubah
- Renderer PWA dibangun ulang setelah semua 66 skenario selesai
- Review dilakukan ChatGPT satu TP per sesi — bukan batch

---

## Sprint Renderer Skenario Fase D (18 Juni 2026)

### Status
SW aktif: flaf-v251

### Pekerjaan Sprint Ini
Konversi 66 skenario .txt ke field skenario{} di TP .js,
dan build renderer PWA paralel di sesi-runtime-smp.js.

### Tahap 1 — Generate & Review Skenario Kelas 8 dan 9
- Kelas 8: 24/24 skenario LOLOS review ChatGPT langsung
  (tanpa revisi) — prompt K-01+C-01 terbukti efektif
- Kelas 9: 18/18 skenario direvisi sistematis —
  pola gagal: F-07 (darurat), K-01+C-01 (UCAP MODEL),
  F-03 (em-dash) di seluruh 18 TP
- Total skenario final: 66/66 (K7+K8+K9)

### Tahap 2 — Konversi .txt ke skenario{}
- Jalur arsitektur dipilih: Jalur B (inject ke TP .js,
  bukan parse .txt di runtime)
- tools/convert-skenario-fase-d.js — konverter Node.js
- tools/fix-emdash-ucap.js — fix TTS safety (122 baris)
- tools/validate-skenario-fase-d.js — validator VR-S1–S17
- Hasil: 66/66 TP .js punya skenario{}, VR-S1–S17 LOLOS
- Anomali ditangani: label REPEAT variant
  (Kalimat/Pertukaran/Instruksi/Bagian/Flyer)
  — fix via regex generik /^\*\*\w+ \d+/

### Schema skenario{} (final)
persiapan: { papan_tulis, kartu, instruksi[] }
siapkan_kelas: { settling[], hook[] }
langkah: {
  model:   { durasi_menit, intro, instruksi[] }
  repeat:  { durasi_menit, intro, kalimat[], instruksi_penutup[] }
  change:  { durasi_menit, intro, instruksi[], diferensiasi{} }
  interact:{ durasi_menit, intro, instruksi[], diferensiasi{} }
  share:   { durasi_menit, intro, instruksi[], diferensiasi{} }
  check:   { durasi_menit, intro, instruksi[],
             jalur_lancar[], jalur_belum_lancar[] }
  boost:   { durasi_menit, intro, untuk_kesulitan[],
             untuk_lancar[], cue_sisa }
}
Instruksi = { tipe: AKSI|UCAP|bantuan|darurat|cue, teks }

### Tahap 3 — Renderer PWA
- screens/sesi-runtime-smp.js — +227 baris
- sesi-runtime-smp.css — +223 baris
- Arsitektur paralel: gate di _renderStep() —
  jika skenario{} ada → renderer baru,
  jika tidak → runtime[] lama (fallback tetap berjalan)
- State baru: skenarioMode, repeatKalimatIndex, checkJalur
- REPEAT: navigasi per kalimat dengan counter
- CHECK: dua jalur eksplisit (Lancar → BOOST, Ragu → remedial)
- Bantuan/darurat: collapsed default via <details>
- TTS: tombol 🔊 per UCAP via smp-tts-btn yang sudah ada
- Window exposure: _skenarioRepeatNav, _skenarioCheckJalur,
  _nextStep, _endSesi — diperlukan karena ES module scope
- Test Playwright: 7/7 PASS, 0 console error

### Commit Log Sprint Ini
| SHA | Pesan |
|---|---|
| d11fbd4 | feat(skenario): add 66 teaching scenario txt files |
| 422668f | feat(fase-d): inject skenario{} field into 66 TP js files |
| 5bf62d2 | feat(renderer): add skenario renderer to sesi-runtime-smp |
| f8c6765 | chore(sw): bump to flaf-v251 |

### Keputusan yang Jangan Dipertanyakan Ulang
- Jalur B (inject ke .js) dipilih atas Jalur A (parse .txt
  di runtime) — konsisten dengan arsitektur offline-first FLAF
- Renderer paralel, bukan replace — runtime[] lama tetap ada
  sebagai fallback sampai renderer baru stabil di lapangan
- Bantuan/darurat collapsed default — guru di depan kelas
  butuh layar fokus, bukan semua teks sekaligus
- REPEAT per kalimat — guru butuh pause antar kalimat,
  konsisten dengan TTS per kalimat yang sudah ada
- onclick= inline + window exposure — konsisten dengan
  pola yang sudah ada di runtime SMP (addEventListener
  untuk interaksi kompleks, onclick untuk navigasi sederhana)

### Backlog Sprint Berikutnya
1. Sprint A — validasi lapangan 3-5 TP sampel (prioritas)
2. Desain kurikulum Fase D proper — meta/cp untuk
   placeholder di kurikulum.js
3. Migrasi wrapper db.js penuh — follow-up hotfix DB_VERSION
4. Hapus runtime[] lama dari sesi-runtime-smp.js setelah
   renderer baru stabil di lapangan (Sprint E)

---

## Sprint Observasi Formatif & UI Audit (19 Juni 2026)

### Status
SW aktif: flaf-v253

### Pekerjaan Sprint Ini

**Audit UI Runtime Skenario Fase D**
- Audit keterbacaan dan warna seluruh layar runtime (17 screenshot)
- Fix CSS: cue_sisa, color-text-dim, font-size minimum 12px — commit 581b316
- Fix UI: bantuan label, dif border, layar selesai — commit 7bec4fa
- Fix root cause: --color-surface collision dengan style.css (#ffffff)
  → hardcode 6 kemunculan var(--color-surface) — commit 615fca8

**Audit UCAP Fase D**
- Audit TTS safety: 2.288 UCAP diperiksa, 50 flagged, 13 genuine fix
  → commit 5e9656c
- Audit determinisme transisi: 109 fix di 59 file, 4 pola global
  → commit ec4939b
- SW bump v252 — commit 253c2df

**Redesign Observasi Formatif Fase A-C**
Keputusan arsitektur:
- Hapus Mode Detail — hanya Mode Cepat, diganti judul "Observasi Formatif"
- Hierarki 3 level:
  Level 1: Sudah Bisa / Perlu Bantuan
  Level 2 (per Level 1):
    Sudah Bisa → Aktif (BSB, nilai 90) / Perlu pengingat (BSH, nilai 75)
    Perlu Bantuan → Perlu dorongan (MB, nilai 60) / Butuh intervensi (BB, nilai 45)
  Level 3: tag spesifik per Level 2, multi-select
- Level 2 terhubung ke rubrik BSB/BSH/MB/BB di modul ajar resmi
- Level 3 mengisi kolom Deskripsi di rubrik
- Label seragam: "Perlu Bantuan" (bukan "Perlu Support") di semua permukaan

Commit log:
| SHA | Pesan |
|---|---|
| 9530e3e | fix(observasi): hapus mode detail, judul jadi Observasi Formatif |
| d81e9e7 | feat(observasi): redesign hierarki 3 level Fase A-C |
| b2f1342 | chore: hapus dead code mode detail + bump SW v253 |
| 31cef14 | fix(observasi): hapus label fase dari subtitle overlay |
| 4a38716 | fix(observasi): label tombol + warna judul gold |

Validasi: 6/6 item PASS via browser (screenshot dikonfirmasi Romo)

**Desain Observasi Formatif Fase D (belum diimplementasi)**
Keputusan yang sudah final:
- Diferensiasi: 2 jalur — Perlu Support / Sudah Bisa
- Observasi Level 1: Sudah Bisa / Perlu Bantuan
- Observasi Level 2:
    Sudah Bisa → Tanpa buku/catatan / Dengan buku/catatan
    Perlu Bantuan → Mencoba, belum tepat / Diam
- Observasi Level 3: tag spesifik per TP (diturunkan dari observe[] dan objective)
- Mapping ke rubrik: L1+L2 → BSB/BSH/MB/BB, L3 → kolom Deskripsi
- Output: data observasi runtime → rubrik modul ajar resmi
- Hubungan dengan BOOST: diputus — observasi murni faktual

### Sprint Berikutnya
1. Implementasi observasi Fase D (diferensiasi + overlay + export rubrik)
2. Export data observasi → rubrik modul ajar (Fase A-C dan Fase D)
3. VR-S18 parser fix — backlog
