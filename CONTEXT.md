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
e2c73ac  fix: pdf-handler path, cache lookup, MIME detection for .docx
147eed4  fix: title tab cetak undefined → tp.nama
792582c  fix: judul lembar cetak undefined → tp.nama
c494685  merge: pertahankan versi lokal fase-13
8c3cbec  fase-13: printables — kartu cetak guru TP 01-10
4c3fc8a  docs: update CONTEXT — Fase 12 complete
617ce24  fase-12: fix syntax fase-a.js — hapus fase Penilaian TP01-14
08f9a11  fase-12: hapus card observasi Fase 7 + cleanup import siswa-history
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
✅ BUG FIX: SW cache test + pdf-handler .docx support (e2c73ac)
   - sw.js: cache.match './index.html' (fix FATAL log salah path)
   - pdf-handler.js: PDF_BASE_PATH './pdf/' (fix 404 GitHub Pages)
   - pdf-handler.js: caches.match() semua cache (fix miss APP_SHELL)
   - pdf-handler.js: MIME detection .docx via _mimeForFilename/_isValidContentType
```

Next: Fase 14 — (belum ditentukan)

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
