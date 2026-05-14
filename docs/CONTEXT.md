# FLAF — Context Sesi Baru

## Identitas Project
- **Nama**: FLAF (Functional Language Accumulation Framework)
- **Deskripsi**: PWA offline-first untuk guru Bahasa Inggris SD Kelas 1 & 2
- **Stack**: Vanilla JS ES Modules, IndexedDB, Supabase (aktivasi & admin), Service Worker, GitHub Pages
- **Repo lokal**: `D:\ribuan_pengguna\CLAUDE\FLAF` (Git aktif, branch `main`)
- **GitHub**: https://github.com/teguhalficahlin-del/flaf
- **Deploy**: https://teguhalficahlin-del.github.io/flaf

## Status Terakhir (Mei 2026)
- Schema v4.3 aktif — `closure_reinforcement` WAJIB di setiap TP
- **6 TP sudah migrate**: TP 01–06 (Kelas 1 selesai)
- Audit Kelas 1 selesai → commit `a2a7a7c`
- **Cleanup A2+A3 BELUM selesai** (sesi terpotong usage):
  - A2: tambah `flags: ['kompetitif_safety']` di TP 06 aktivitas "Tebak Bentuk"
  - A3: wajibkan `reflection` ATAU `review_quick` di SCHEMA §8 + update TP 03/04/05/06
- **Next**: eksekusi A2+A3 → commit → mulai M3 (TP 07 My Family & TP 08 My House)

## Git Log (10 commit terakhir)
```
a2a7a7c  audit: checkpoint kelas 1 (TP 01-06)
946be25  sesi-m2: migrate TP 05 & TP 06 + cleanup batch
a32c1f3  sesi-m1: migrate TP 02 & TP 03
884d63c  docs(fase-4): add migration plan
986ecf9  schema(v4.1): extension from TP 04
d1625d8  docs(fase-3): add TP 04 v4 migration
a43d527  docs(fase-2): add runtime state machine spec
833f7bb  docs(fase-1): timer_visible_only
783ce74  docs(fase-1): add data model spec
63b1f0d  chore: initial commit
```

## Struktur Folder Penting
```
FLAF/
├── screens/
│   ├── dashboard.js      ← runtime utama (sedang diaudit gap arsitektur)
│   ├── dashboard.css
│   ├── kurikulum.js/css
│   ├── nilai.js/css
│   ├── jejak.js
│   └── activation.js
├── data/
│   ├── index.js
│   └── fase-a.js         ← semua 18 TP v3 (belum dioverride)
├── docs/
│   ├── fase-1-spec/      ← SCHEMA.md, tp-01.js
│   ├── fase-2-spec/      ← STATE-MACHINE.md
│   ├── fase-3-spec/      ← tp-04.js, UI-SKETCH.html
│   ├── fase-4-spec/      ← MIGRATION-PLAN.md
│   ├── sesi-m1/          ← tp-02.js, tp-03.js, COMPARISON-M1.md
│   └── sesi-m2/          ← tp-05.js, tp-06.js, COMPARISON-M2.md, KELAS-1-AUDIT.md
├── storage/
│   └── db.js, logger.js, export.js, jejak.js, nilai.js, presensi.js
├── sw.js                 ← Service Worker v52
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

## Tugas Sesi Ini
*Isi sesuai kebutuhan sesi — contoh:*

```
Eksekusi cleanup A2+A3 di FLAF:
- A2: tambah flags kompetitif_safety di TP 06 "Tebak Bentuk" 
  (file: docs/sesi-m2/tp-06.js)
- A3: update SCHEMA §8 + tambah reflection/review_quick 
  di TP 03/04/05/06
Commit setelah selesai, lalu konfirmasi sebelum mulai M3.
```
