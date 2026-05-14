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
- **10 TP sudah migrate**:
  - Kelas 1: TP 01–06 ✅ (lengkap, sudah diaudit di commit `a2a7a7c`)
  - Kelas 2: TP 07–08 ✅ (sesi M3, commit `6a0f035`)
  - Kelas 2: TP 09 Animals ✅ (sesi M4)
  - Kelas 2: TP 10 Food and Drinks ✅ (sesi M5)
- **Sisa**: TP 11–17 (7 TP) belum migrate — **TP 18 tidak ada di fase-a.js**
- **Next**: M6 — TP 11 (Daily Routines)

## Git Log (10 commit terakhir)
```
6a0f035  sesi-m3: migrate TP 07 & TP 08 + comparison
a2a7a7c  audit: checkpoint kelas 1 (TP 01-06)
946be25  sesi-m2: migrate TP 05 & TP 06 + cleanup batch
a32c1f3  sesi-m1: migrate TP 02 & TP 03
884d63c  docs(fase-4): add migration plan
986ecf9  schema(v4.1): extension from TP 04
d1625d8  docs(fase-3): add TP 04 v4 migration
a43d527  docs(fase-2): add runtime state machine spec
833f7bb  docs(fase-1): timer_visible_only
783ce74  docs(fase-1): add data model spec
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
│   └── fase-a.js         ← TP 09-18 masih v3 (belum dioverride)
├── docs/
│   ├── fase-1-spec/      ← SCHEMA.md, tp-01.js
│   ├── fase-2-spec/      ← STATE-MACHINE.md
│   ├── fase-3-spec/      ← tp-04.js, UI-SKETCH.html
│   ├── fase-4-spec/      ← MIGRATION-PLAN.md
│   ├── sesi-m1/          ← tp-02.js, tp-03.js, COMPARISON-M1.md
│   ├── sesi-m2/          ← tp-05.js, tp-06.js, COMPARISON-M2.md, KELAS-1-AUDIT.md
│   ├── sesi-m3/          ← tp-07.js, tp-08.js, COMPARISON-M3.md
│   └── sesi-m4/          ← tp-09.js
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

## Pattern Inklusivitas (TERBENTUK di Sesi M3)

Untuk TP dengan topik **personal/sensitif** (keluarga, rumah, makanan, hobi, masa depan, dll), pattern berikut sudah terbukti efektif dan **AKAN DIPAKAI LAGI** di M4–M8 untuk TP yang topiknya personal:

### Pattern 1 — Scripted micro_script Inklusivitas (bukan improvisasi)
- Frasa inklusivitas ditulis **konkret dalam Bahasa Indonesia** di `micro_script.selama` pada aktivitas Pembuka pertama
- Guru tinggal baca — tidak perlu improvisasi sendiri
- Contoh dari TP 07: *"Siapa yang tinggal bersamamu di rumah? Itu keluargamu. Bisa papa, mama, kakak, adik, kakek, nenek, om, tante — siapa pun."*
- Contoh dari TP 08: *"Rumah kalian semua berbeda. Ada yang besar, ada yang kecil. Semua rumah bagus karena itu rumahmu."*
- **Bukan** sekadar `flags: ['privacy_sensitive']` — flag hanyalah tag tanpa instruksi konkret untuk guru

### Pattern 2 — Skip Aktivitas Personal di Main Flow
- Aktivitas yang memaksa siswa **expose kondisi pribadi** (gambar denah rumah sendiri, presentasi keluarga ke kelas, bawa foto dari rumah) **DIHAPUS** dari main flow
- Anak 6-7 tahun belum siap untuk tampil tunggal dalam bahasa asing
- Presentasi ke kelas hanya muncul di `fallback.kelas_sangat_aktif` sebagai **opt-in sukarela**, bukan dipaksa
- Pair work = primary speaking turn

### Pattern 3 — Kartu Generik (Bukan Bring-from-Home)
- Media utama = **kartu cetak generik** yang sama untuk semua siswa
- Bring-from-home (foto keluarga, gambar rumah, dll) **TIDAK DIPAKAI** karena:
  - Bergantung pada kondisi orang tua & keluarga
  - Tidak bisa dijamin semua siswa bawa
  - Memperkuat ketimpangan di kelas
- Ilustrasi kartu dirancang **netral & beragam** (usia, penampilan)
- Konsisten dengan zero-prep philosophy

### Pattern 4 — Aktivitas "Pretend" sebagai Substitusi
- Untuk topik yang relate ke kondisi pribadi (rumah, makanan, dll), pakai **pretend universal**: semua siswa pakai konteks yang sama dari kartu/instruksi
- Contoh TP 08: "Walk Through the House" — semua siswa walk through rumah PRETEND yang sama, tidak ada yang membandingkan rumahnya
- Eksplisit ditulis di `langkah[]`: *"TIDAK ADA pemaksaan cerita rumah sendiri — semua siswa pakai kartu PRETEND yang sama."*

### Pattern 5 — Fallback `sensitif` Wajib di Aktivitas Personal
- Setiap aktivitas yang berpotensi sensitif HARUS punya entry `fallback.sensitif`
- Berisi instruksi konkret: *"Jika ada siswa terlihat sedih, jangan tunjuk dia untuk bicara. Lanjut tenang ke aktivitas berikutnya."*

### Antisipasi Aplikasi Pattern di TP 09–17

| TP | Topik (dari fase-a.js) | Sensitivitas | Pattern yang relevan |
|---|---|---|---|
| TP 09 | Animals | Rendah | — |
| TP 10 | Food and Drinks ✅ | Sedang | Pattern 1, 4, 5 — sudah diterapkan |
| TP 11 | Daily Routines | Sedang-Tinggi | Pattern 1, 2, 5 (rutinitas bisa expose kondisi keluarga) |
| TP 12 | Body Parts | Rendah-Sedang | Pattern 5 (jika ada siswa disabilitas) |
| TP 13 | Weather and Seasons | Rendah | (mungkin tidak butuh) |
| TP 14 | In the Classroom | Rendah | (mungkin tidak butuh) |
| TP 15 | Feelings and Emotions | Tinggi | Pattern 1, 2, 5 (emosi sangat personal) |
| TP 16 | Simple Story Retelling | Rendah | (cerita bergambar generik) |
| TP 17 | My Hobbies | Tinggi | Pattern 1, 2, 5 (hobi bisa expose kondisi ekonomi) |

**Catatan**: ini antisipasi, bukan keputusan. Setiap TP tetap di-ANALYZE sendiri di awal sesi migrasi.
**Koreksi**: tabel sebelumnya salah (TP 10 tercatat Body parts, TP 18 tidak ada). Sudah dikoreksi sesuai fase-a.js.

## Pattern Lain yang Sudah Terbentuk

### Pattern A — TPR sebagai Energy Break di Tengah Inti
4 dari 8 TP yang sudah migrate punya `tpr_action` di tengah Inti:
- TP 03: action verbs
- TP 06: gambar bentuk di udara
- TP 07: chant ritmis [tepuk-tepuk-mother]
- TP 08: walk through the house

**Risiko**: jadi monoton kalau dipakai di setiap TP. Untuk M4+, pertimbangkan tipe alternatif (`game`, `dialogue_practice`, dll) untuk variasi.

### Pattern B — Closure Transfer ke Rumah
TP 06, 07, 08 punya pattern closure_reinforcement yang menyatukan apply di rumah:
- TP 06: "Look at home — what shapes do you see?"
- TP 07: "Tonight say Good night, tomorrow morning say Good morning to your family!" (recycle TP 01)
- TP 08: "Touch your door, say door! Touch your window, say window!"

Pattern: closure bukan sekadar farewell, tapi **bridge ke konteks nyata di rumah**.

### Pattern C — Diferensiasi 3-Tier yang Konsisten
- **Mudah**: vocab dikurangi, pola pendek (1 kata), tempo lambat
- **Normal**: vocab penuh, pola lengkap, tempo bertahap
- **Tantangan**: pola tambahan (2-slot, sifat), tempo cepat, atau ekstensi

Tantangan **tidak menambah vocab utama** — hanya menambah kompleksitas pola atau variasi.

## Tugas Sesi Ini

```
M6: migrate TP 11 (Daily Routines) ke format v4.3.
Gunakan tp-10.js sebagai referensi format terbaru.
Sensitivitas: SEDANG-TINGGI — rutinitas bisa expose kondisi keluarga.
Terapkan Pattern 1, 2, 5. Monitor Pattern A: hindari tpr_action.
```
