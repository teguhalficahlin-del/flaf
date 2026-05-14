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
- **UI-SKETCH.html sudah di-review dan disetujui — tidak ada revisi**
- **Fase 5 Build SELESAI — B1–B4 semua complete ✅**

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
- **`siswa_per_kelas` IDB store defer ke Fase 6** — observasi pakai rotasi random dulu
- **TTS tetap ada** di AktivitasRunning
- **7 state machine** sesuai UI-SKETCH: preview → resume → entering → ready → running → obs → selesai → closure

### Progress Build
```
B1 ✅ — screens/sesi-runtime.js + screens/sesi-runtime.css  (commit 2f275c8)
B2 ✅ — dashboard.js: hapus RT v6, mount sesi-runtime di Step 2-4  (commit da46ccd)
B3 ✅ — dashboard.css: hapus rt-* classes  (commit da46ccd)
B4 ✅ — index.html: tambah link sesi-runtime.css  (commit ca699ab)
```

### Ringkasan Perubahan B2–B4

**`screens/dashboard.js`** — 2827 baris → 1484 baris
- Import `srMount`/`srUnmount` dari `sesi-runtime.js`
- Blok RT v6 (baris 74–1221) dihapus: `const _rt`, semua `_rt*` functions, semua `window.rt*` handlers
- `_buildStepFase` + `PM_CFG` dihapus (dead code setelah RT v6 hilang)
- `_buildStepBody` case 2/3/4: return `<div id="sr-root">`
- `_rerenderStep`: step 2–4 mount `srMount` jika `sr-root` belum mounted; step lain call `srUnmount()`
- `dashStepNext`: hapus `_rt.spkMap` init block
- `dashStepPrev`: hapus `_rt` re-init block
- `dashKeLanding`: ganti `_rtUnmount()` + `Object.assign(_rt,...)` dengan `srUnmount()`
- `dashPilihTP`: ganti `_rtUnmount()` + `Object.assign(_rt,...)` dengan `srUnmount()`
- `_onSesiDone(hasil)` ditambahkan — callback dari sesi-runtime saat sesi selesai
- `_buildSesiHTML`: hapus FOUC logic `isRuntimeStep`/`runtimeClass`

**`screens/dashboard.css`** — 1921 baris → 1023 baris
- Seluruh blok RT v6 CSS (baris 1025–1921) dihapus: `.rt-surface` sampai `.rt-cl-save`
- `.ds-stepper-wrap--runtime` dan `.ds-step-body--runtime` dihapus

**`index.html`**
- Tambah `<link rel="stylesheet" href="screens/sesi-runtime.css">` setelah `dashboard.css`

### Hasil VALIDATE
- `SesiPreviewing` berhasil mount saat masuk Step 2 ✅
- Console bersih — tidak ada error ✅
- Step 0–1 (Materi, Presensi) tetap jalan normal ✅
- Uji di: localhost:3000, 420×640px (Responsive DevTools)

### File Runtime Baru (dari B1)
- `screens/sesi-runtime.js` — 1013 baris
  - Public API: `mount(root, tpData, rombel, siswaList, onDone)` + `unmount()`
  - State machine via `_transition(patch)` — satu pintu perubahan state
  - 7 render functions: `_renderPreview`, `_renderResume`, `_renderEntering`, `_renderReady`, `_renderRunning`, `_renderObs`, `_renderSelesai`, `_renderClosure`
  - 2 overlay: `_renderKondisiOverlay`, `_renderFallbackOverlay`
  - Timer 3-warna (hijau/kuning/merah), tidak auto-advance
  - TTS via Web Speech API
  - Resume detection dari IDB `kv` key `sesi_aktif`, batas 4 jam
  - Rotasi observasi random (Fase 6: history-aware)
- `screens/sesi-runtime.css` — 751 baris
  - Semua class prefix `sr-*`, tidak konflik dengan `ds-*`
  - Dark theme konsisten dengan dashboard
  - Mobile-first, tidak ada fixed width, tidak ada 100vh

## Git Log (10 commit terakhir)
```
ca699ab  fase-5-b4: tambah link sesi-runtime.css di index.html
da46ccd  fase-5-b2-b4: integrate sesi-runtime, hapus RT v6
2f275c8  fase-5-b1: add sesi-runtime (7-state machine + css)
bb77ef7  docs: update CONTEXT — Opsi B integration complete (Fase A + Runtime)
42f2f9f  opsi-b: integrate v4.3 TP 15-18 into fase-a.js runtime
913f823  sesi-m10 to m13: migrate TP 15–18 (Fase A Complete)
3f7b0d1  sesi-m7/m8/m9: migrate TP 12-14 + update CONTEXT
95e3a3b  docs: update CONTEXT TP 11 selesai, next M7
56aad44  sesi-m6: migrate TP 11 Daily Routines + update CONTEXT
0b4c473  sesi-m5: migrate TP 10 Food and Drinks + update CONTEXT
```

## Struktur Folder Penting
```
FLAF/
├── screens/
│   ├── dashboard.js        ← 1484 baris, RT v6 sudah dihapus, sesi-runtime terpasang
│   ├── dashboard.css       ← 1023 baris, rt-* classes sudah dihapus
│   ├── sesi-runtime.js     ← 7-state runtime (B1 selesai)
│   ├── sesi-runtime.css    ← sr-* prefix (B1 selesai)
│   ├── kurikulum.js/css
│   ├── nilai.js/css
│   ├── jejak.js
│   └── activation.js
├── data/
│   ├── index.js
│   └── fase-a.js           ← 18 TP v4.3 aktif, aktivitas[] siap dibaca
├── docs/
│   ├── fase-1-spec/        ← SCHEMA.md, tp-01.js
│   ├── fase-2-spec/        ← STATE-MACHINE.md
│   ├── fase-3-spec/        ← UI-SKETCH.html ✅ DISETUJUI, tp-04.js
│   ├── fase-4-spec/        ← MIGRATION-PLAN.md
│   ├── sesi-m1/ sampai sesi-m13/  ← semua TP v4.3
├── storage/
│   └── db.js, logger.js, export.js, jejak.js, nilai.js, presensi.js
├── sw.js                   ← Service Worker v52
├── manifest.json
├── app.js
└── index.html              ← link sesi-runtime.css sudah ditambahkan
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

Untuk TP dengan topik **personal/sensitif** (keluarga, rumah, makanan, hobi, masa depan, dll), pattern berikut sudah terbukti efektif:

### Pattern 1 — Scripted micro_script Inklusivitas
- Frasa inklusivitas ditulis **konkret dalam Bahasa Indonesia** di `micro_script.selama` pada aktivitas Pembuka pertama
- Contoh TP 07: *"Siapa yang tinggal bersamamu di rumah? Itu keluargamu. Bisa papa, mama, kakak, adik, kakek, nenek, om, tante — siapa pun."*

### Pattern 2 — Skip Aktivitas Personal di Main Flow
- Aktivitas yang memaksa siswa expose kondisi pribadi dihapus dari main flow
- Presentasi ke kelas hanya di `fallback.kelas_sangat_aktif` sebagai opt-in sukarela

### Pattern 3 — Kartu Generik (Bukan Bring-from-Home)
- Media utama = kartu cetak generik yang sama untuk semua siswa

### Pattern 4 — Aktivitas "Pretend" sebagai Substitusi
- Pakai pretend universal: semua siswa pakai konteks yang sama dari kartu/instruksi

### Pattern 5 — Fallback `sensitif` Wajib di Aktivitas Personal
- Setiap aktivitas yang berpotensi sensitif HARUS punya entry `fallback.sensitif`

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
✅ UI-SKETCH.html DISETUJUI (Fase 3 review selesai)
✅ FASE 5 BUILD COMPLETE (B1–B4 selesai, validated)

B1 ✅ sesi-runtime.js + sesi-runtime.css  (commit 2f275c8)
B2 ✅ dashboard.js — hapus RT v6, mount sesi-runtime  (commit da46ccd)
B3 ✅ dashboard.css — hapus rt-* classes  (commit da46ccd)
B4 ✅ index.html — tambah link sesi-runtime.css  (commit ca699ab)

Next: Fase 6 — siswa_per_kelas IDB store + rotasi observasi history-aware
```
