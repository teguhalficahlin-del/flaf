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
- **18 TP sudah migrate + integrated — FASE A 100% COMPLETE ✅**
- **UI-SKETCH.html sudah di-review dan disetujui — acuan layout runtime**
- **Fase 5 Build SELESAI + post-fix SELESAI ✅**
- **Fase 6 SELESAI ✅**
- **Fase 7 SELESAI ✅**

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

### Keputusan Arsitektural (Terkunci)
- **Schema**: `{ [siswaId]: { speakCount: number, lastSesi: timestamp } }` per `rombelId`
- **Update trigger**: saat Closure selesai (Opsi B) — otomatis, tidak ada UI tambahan
- **Delta**: +1 per sesi selesai untuk semua siswa di rombel
- **Fallback**: jika IDB kosong, `speakCount` dianggap 0 untuk semua siswa
- **UI saran observasi**: defer ke Fase 7 — Fase 6 hanya simpan data

### Perubahan yang Dibuat
```
9f33bcf  fase-6: siswa_per_kelas IDB store + updateSpeakCount saat closure
```

**`storage/db.js`** (DB_VERSION: 5 → 6):
- `VALID_STORES` ditambah `siswa_per_kelas`
- `onupgradeneeded` ditambah store `siswa_per_kelas`

**`storage/siswa-history.js`** (file baru):
- `getSiswaHistory(rombelId)` → ambil history dari IDB
- `updateSpeakCount(rombelId, siswaIdList, delta)` → increment speakCount
- `getSortedBySpeakCount(rombelId, siswaList)` → sort siswa terendah dulu (untuk Fase 7)

**`screens/sesi-runtime.js`**:
- Import `updateSpeakCount` dari `siswa-history.js`
- Di `_renderClosure` saat simpan: hitung `respons_siswa` count lalu `updateSpeakCount` semua siswa

### Hasil VALIDATE
- Store `siswa_per_kelas` ada di IDB version 6 ✅
- Data tersimpan setelah Closure ✅
- Console bersih ✅

## Fase 7 — UI Saran Observasi

### Keputusan Arsitektural (Terkunci)
- **Titik tampil**: Closure screen, setelah form kendala & catatan
- **Konten**: "💡 Besok coba perhatikan lebih ke:" + top 3 siswa speakCount terendah
- **Angka/statistik**: tidak ditampilkan ke guru
- **Trigger**: otomatis saat `_renderClosure` dipanggil
- **Fallback**: blok tidak muncul jika siswaList kosong atau error

### Perubahan yang Dibuat
**`screens/sesi-runtime.js`**:
- Import tambah `getSortedBySpeakCount` dari `siswa-history.js`
- `_renderClosure` diubah menjadi `async`
- Inject `sr-obs-card` (top 3 nama) sebelum tombol Simpan & Selesai

**`screens/sesi-runtime.css`**:
- Tambah class `sr-obs-card`, `sr-obs-judul`, `sr-obs-nama`

### Hasil VALIDATE
- Blok saran muncul dengan 3 nama benar ✅
- Nama terbaca jelas, tidak ada undefined ✅
- Fallback siswaList kosong: blok tidak muncul ✅
- Console bersih ✅

## Git Log (10 commit terakhir)
```
(hash)   fase-7: UI saran observasi di Closure (getSortedBySpeakCount, top 3 siswa)
9f33bcf  fase-6: siswa_per_kelas IDB store + updateSpeakCount saat closure
7ae6035  docs: update CONTEXT — full flow validated, production ready
6203e52  fix: sesi-runtime redesign sesuai UI-SKETCH, runtime full layar
d4c4336  docs: update CONTEXT — Fase 5 complete (B1-B4)
ca699ab  fase-5-b4: tambah link sesi-runtime.css di index.html
da46ccd  fase-5-b2-b4: integrate sesi-runtime, hapus RT v6
2f275c8  fase-5-b1: add sesi-runtime (7-state machine + css)
bb77ef7  docs: update CONTEXT — Opsi B integration complete (Fase A + Runtime)
42f2f9f  opsi-b: integrate v4.3 TP 15-18 into fase-a.js runtime
913f823  sesi-m10 to m13: migrate TP 15–18 (Fase A Complete)
```

## Struktur Folder Penting
```
FLAF/
├── screens/
│   ├── dashboard.js        ← RT v6 dihapus, sesi-runtime terpasang, runtime full layar
│   ├── dashboard.css       ← rt-* classes dihapus
│   ├── sesi-runtime.js     ← 5-state machine, light theme UI-SKETCH, updateSpeakCount saat closure, sr-obs-card Fase 7
│   ├── sesi-runtime.css    ← sr-* prefix, light theme, sr-obs-card Fase 7
│   ├── kurikulum.js/css
│   ├── nilai.js/css
│   ├── jejak.js
│   └── activation.js
├── data/
│   ├── index.js
│   └── fase-a.js           ← 18 TP v4.3 aktif, langkah[] siap dibaca runtime
├── storage/
│   ├── db.js               ← DB_VERSION 6, store siswa_per_kelas ditambahkan
│   ├── siswa-history.js    ← getSiswaHistory, updateSpeakCount, getSortedBySpeakCount
│   ├── logger.js
│   ├── export.js
│   ├── jejak.js
│   ├── nilai.js
│   └── presensi.js
├── docs/
│   ├── fase-1-spec/        ← SCHEMA.md
│   ├── fase-2-spec/        ← STATE-MACHINE.md
│   ├── fase-3-spec/        ← UI-SKETCH.html ✅ acuan layout runtime
│   ├── fase-4-spec/        ← MIGRATION-PLAN.md
│   └── sesi-m1/ sampai sesi-m13/
├── sw.js                   ← Service Worker v52
├── manifest.json
├── app.js
└── index.html
```

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
- **Mudah**: vocab dikurangi, pola pendek, tempo lambat
- **Normal**: vocab penuh, pola lengkap, tempo bertahap
- **Tantangan**: pola tambahan, tempo cepat, ekstensi

## Status Sesi

```
✅ FASE A MIGRATION COMPLETE (18 TP, M1–M13)
✅ UI-SKETCH.html DISETUJUI (acuan layout runtime)
✅ FASE 5 BUILD COMPLETE + POST-FIX + VALIDATED
✅ FASE 6 COMPLETE (commit 9f33bcf)
✅ FASE 7 COMPLETE — UI saran observasi di Closure screen

Next: Fase 8 — (belum ditentukan)
```
