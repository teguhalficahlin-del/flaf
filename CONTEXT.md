# FLAF — Context Sesi Baru

## Identitas Project
- **Nama**: FLAF (Functional Language Accumulation Framework)
- **Deskripsi**: PWA offline-first untuk guru Bahasa Inggris SD Kelas 1 & 2
- **Stack**: Vanilla JS ES Modules, IndexedDB, Supabase (aktivasi & admin), Service Worker, GitHub Pages
- **Repo lokal**: `D:\ribuan_pengguna\CLAUDE\FLAF` (Git aktif, branch `main`)
- **GitHub**: https://github.com/teguhalficahlin-del/flaf
- **Deploy**: https://teguhalficahlin-del.github.io/flaf

## Status Terakhir (Mei 2026)
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
2527af6  fix: connect progress TP, mood closure, formatif view
abcbf1e  feat(runtime): redesign running state
878c22c  fix: default attendance status H (hadir) instead of A
1ad4012  fix: remove undefined JP references from kurikulum UI
8cc01f2  docs: update CONTEXT — remove filename label fix
a76ae4b  fix: remove filename label from kurikulum download button
e2c73ac  fix: pdf-handler path, cache lookup, MIME detection for .docx
147eed4  fix: title tab cetak undefined → tp.nama
792582c  fix: judul lembar cetak undefined → tp.nama
c494685  merge: pertahankan versi lokal fase-13
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
│   ├── fase-a.js           ← 18 TP v4.3, field mode[] + printables[] (TP 01-18)
│   └── printables.js       ← generate HTML cetak dari tp.printables[] (PNG via assets/images/printables/)
├── modules/
│   ├── pdf-generator.js    ← generate PNG rekap nilai per TP & rekap akhir semua TP (canvas HTML5, tanpa library)
│   └── pdf-handler.js      ← download modul ajar via cache-first (serve dari pdf/, fallback ke network)
├── storage/
│   ├── db.js               ← DB_VERSION 8, stores: kv, log_queue, nilai_data, penilaian_log, presensi_log, siswa_per_kelas, teacher_data, teaching_log
│   ├── siswa-history.js    ← getSiswaHistory, updateSpeakCount, getSortedBySpeakCount, savePenilaian
│   ├── logger.js
│   ├── export.js
│   ├── jejak.js
│   ├── nilai.js
│   └── presensi.js
├── assets/
│   └── images/
│       └── printables/     ← 136 PNG (TP 01-18)
├── docs/
│   ├── fase-3-spec/        ← UI-SKETCH.html ✅ acuan layout runtime
│   ├── sesi-m10/tp-15.js   ← langkah[] + field mode ✅
│   ├── sesi-m11/tp-16.js   ← langkah[] + field mode ✅
│   ├── sesi-m12/tp-17.js   ← langkah[] + field mode ✅
│   └── sesi-m13/tp-18.js   ← langkah[] + field mode ✅
├── pdf/                    ← modul ajar per TP (lihat §Modul Ajar)
├── sw.js                   ← Service Worker v54
├── manifest.json
├── app.js
└── index.html
```

## Aset Printable

- **Lokasi**: `assets/images/printables/`
- **Pola nama**: `tp{NN}-{descriptor}.png` (contoh: `tp01-salam-pagi.png`, `tp16-cover.png`)
- **Cakupan**: TP01–18, semua topik lengkap
- **Referensi**: field `printables[]` di setiap TP → dibaca oleh `data/printables.js`

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

### TD-4: Encoding Artifact
- String `'2├ù'` (harusnya `2×`) masih ada di TP02 dan TP12 — sisa mojibake dari migrasi.

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
| `siswa_per_kelas` | ⚠️ DEAD — tidak ada writer aktif | `updateSpeakCount()` — tidak dipanggil dari layar manapun | `getSiswaList()` — terpanggil tapi data hanya muncul jika guru sudah input manual |
| `obs_log` | ⚠️ DEAD — tidak ada writer aktif | `saveObsTags()` — tidak dipanggil dari layar manapun | Tidak ada reader |
| `log_queue` | ⚠️ DEAD — konvensi call salah | `logger.js` call `db.get('log_queue_v1')` — salah, butuh `db.get('log_queue', key)` | Tidak efektif |

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
- **Card di menu:** setelah "Sumatif Lingkup Materi", sebelum "Sumatif Akhir Semester"
- **Konten:** daftar 18 TP dari `_tpList(_state.tingkat)` — tiap TP tombol "Unduh PDF →" memanggil `nilaiDownloadFormatif1()`
- **Back:** `nilaiBackToMenu()` → kembali ke `'menu'`

### Dead Features (Belum Disentuh — Intentional)

- `obs_log`: tidak ada writer aktif — `saveObsTags()` tidak dipanggil dari screens
- `siswa_per_kelas.updateSpeakCount()`: tidak dipanggil dari screens
- `log_queue`: logger.js salah konvensi call — belum difix
- `nilai_data.formatif_*`: ditulis stepper lama (Step 5 sudah jadi placeholder) — tidak dibaca output apapun; data lama aman tapi tidak terpakai

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

⏳ LANGKAH BERIKUTNYA: HTML converter txt skenario → v5.0 JS download
   - data/printables.js: generatePrintHTML()
   - field printables[] di fase-a.js TP 01-18 (TP 15-18 via import docs/)
   - 136 PNG di assets/images/printables/
   - SW v54→v55, precache 136 gambar + 18 modul ajar .docx

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

Next: Bangun HTML converter — pilih file txt skenario di browser → download v5.0 JS otomatis

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
