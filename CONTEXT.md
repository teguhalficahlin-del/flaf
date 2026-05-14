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
- **TTS tetap ada** di state running
- **5 state machine** (disederhanakan dari 7): preview → entering → running → selesai → closure
- **Resume** sebagai cabang dari preview (bukan state tersendiri)
- **Unit terkecil: `langkah[]`** — fase-a.js hanya punya langkah[], bukan aktivitas[]
- **Layout mengikuti UI-SKETCH.html** — app-header tipis / app-body flex:1 / app-footer
- **Overlay kondisi 2 tahap**: pilih kondisi → detail fallback + instruksi konkret
- **Runtime full layar**: breadcrumb, ds-sesi-header, ds-step-indicator, ds-step-nav disembunyikan saat step 2–4

### Progress Build
```
B1  ✅ — sesi-runtime.js + sesi-runtime.css  (commit 2f275c8)
B2  ✅ — dashboard.js: hapus RT v6, mount sesi-runtime  (commit da46ccd)
B3  ✅ — dashboard.css: hapus rt-* classes  (commit da46ccd)
B4  ✅ — index.html: tambah link sesi-runtime.css  (commit ca699ab)
FIX ✅ — sesi-runtime redesign UI-SKETCH + runtime full layar  (commit 6203e52)
```

### Ringkasan sesi-runtime.js (633 baris, commit 6203e52)
- Public API: `mount(root, tpData, rombel, siswaList, onDone)` + `unmount()`
- State machine via `_transition(patch)` — satu pintu perubahan state
- 6 render functions: `_renderPreview`, `_renderResume`, `_renderEntering`, `_renderRunning`, `_renderSelesai`, `_renderClosure`
- 2 overlay: `_renderKondisiOverlay` (tahap 1), `_renderFallbackOverlay` (tahap 2)
- TTS via Web Speech API, toggle per langkah audio/respons_siswa
- Resume detection dari IDB `kv` key `sesi_aktif`, batas 4 jam
- Overlay: `position: fixed`, append ke `document.body`

### Ringkasan sesi-runtime.css (604 baris)
- Semua class prefix `sr-*`, tidak konflik dengan `ds-*`
- Light theme sesuai UI-SKETCH (background `#fafafa`, teks `#1a1a1a`)
- Mobile-first, tidak ada fixed width, tidak ada 100vh
- Tombol: `sr-btn-primary` (hitam penuh) / `sr-btn-secondary` (outline) / `sr-btn-kondisi` (dashed samar)

### Perubahan dashboard.js terkait runtime full layar
- Step 2–4: sembunyikan breadcrumb, ds-sesi-header, ds-step-indicator, ds-step-nav; body flex:1
- Non-runtime step: restore semua elemen; `srUnmount()`
- `_onSesiDone(hasil)`: callback dari runtime → langsung ke Step 6 Selesai

## Git Log (10 commit terakhir)
```
6203e52  fix: sesi-runtime redesign sesuai UI-SKETCH, runtime full layar
d4c4336  docs: update CONTEXT — Fase 5 complete (B1-B4)
ca699ab  fase-5-b4: tambah link sesi-runtime.css di index.html
da46ccd  fase-5-b2-b4: integrate sesi-runtime, hapus RT v6
2f275c8  fase-5-b1: add sesi-runtime (7-state machine + css)
bb77ef7  docs: update CONTEXT — Opsi B integration complete (Fase A + Runtime)
42f2f9f  opsi-b: integrate v4.3 TP 15-18 into fase-a.js runtime
913f823  sesi-m10 to m13: migrate TP 15–18 (Fase A Complete)
3f7b0d1  sesi-m7/m8/m9: migrate TP 12-14 + update CONTEXT
95e3a3b  docs: update CONTEXT TP 11 selesai, next M7
```

## Struktur Folder Penting
```
FLAF/
├── screens/
│   ├── dashboard.js        ← RT v6 dihapus, sesi-runtime terpasang, runtime full layar
│   ├── dashboard.css       ← rt-* classes dihapus
│   ├── sesi-runtime.js     ← 633 baris, 5-state machine, light theme UI-SKETCH
│   ├── sesi-runtime.css    ← 604 baris, sr-* prefix, light theme
│   ├── kurikulum.js/css
│   ├── nilai.js/css
│   ├── jejak.js
│   └── activation.js
├── data/
│   ├── index.js
│   └── fase-a.js           ← 18 TP v4.3 aktif, langkah[] siap dibaca runtime
├── docs/
│   ├── fase-1-spec/        ← SCHEMA.md, tp-01.js
│   ├── fase-2-spec/        ← STATE-MACHINE.md
│   ├── fase-3-spec/        ← UI-SKETCH.html ✅ DISETUJUI, acuan layout runtime
│   ├── fase-4-spec/        ← MIGRATION-PLAN.md
│   └── sesi-m1/ sampai sesi-m13/  ← semua TP v4.3
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

### Pattern 1 — Scripted micro_script Inklusivitas
- Frasa inklusivitas ditulis **konkret dalam Bahasa Indonesia** di `micro_script.selama`

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
✅ FASE 5 BUILD COMPLETE + POST-FIX SELESAI (commit 6203e52)

Next: Validasi full flow runtime (preview → closure)
      Fase 6 — siswa_per_kelas IDB store (defer dari Fase 5)
```
