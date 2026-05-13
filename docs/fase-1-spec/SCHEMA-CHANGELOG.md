# FLAF Schema — Changelog

**Tujuan**: Mencatat setiap perubahan struktur Schema v4 + alasan + TP pemicunya.
**Disiplin**: Setiap kali Schema berubah, entry baru wajib ditambah di sini
SEBELUM commit perubahan ke SCHEMA.md.

**Format entry**:
```
## [tanggal] — Versi mini X
**Pemicu**: TP {NN} migrasi
**Perubahan**:
- [Tipe: Field|Enum|Convention|Doc] Deskripsi
**Dampak ke TP yang sudah migrate**:
- [TP NN]: [perubahan yang dibutuhkan / tidak ada]
**Justifikasi**: Referensi dokumen FLAF
```

---

## [Mei 2026] — Mini-versi 4.2

**Pemicu**: Sesi M1 — migrasi TP 03 (Classroom Instructions) mengungkap
kebutuhan tipe aktivitas baru untuk TPR (Total Physical Response).

**Perubahan**:

1. **[Enum] Tambah `tpr_action` ke AktivitasTipe**
   Lokasi: SCHEMA §4.1
   Konteks: TP 03 dominan dengan instruksi TPR (Stand up, Sit down, Open
   your book) di mana siswa **lakukan aksi fisik**, BUKAN ucap kembali.
   Tipe yang ada (`modeling`, `chorus`) tidak akurat — chorus mengasumsikan
   siswa ucap kembali, modeling mengasumsikan demonstrasi pola bahasa.
   TPR fundamentally berbeda: input verbal → output fisik.
   Definisi: "Total Physical Response — guru ucap instruksi, siswa lakukan
   aksi fisik (BUKAN ucap kembali). `audio_cue.contoh_siswa` umumnya kosong."
   Observation default: `Ya (untuk `response`)` — sistem menyarankan observasi
   apakah siswa lakukan aksi yang benar dan tepat waktu.

2. **[Doc] Klarifikasi `audio_cue.contoh_siswa` bisa kosong**
   Lokasi: SCHEMA §4 (section D)
   Konteks: Untuk tipe `tpr_action`, siswa tidak ucap respons verbal.
   Sebelumnya field ini selalu diisi, sekarang eksplisit: boleh kosong
   untuk tipe TPR. Engineer Fase 5 perlu render UI berbeda saat field
   kosong (tidak ada bagian "Siswa akan jawab: [X]").

**Dampak ke TP yang sudah migrate**:

- **TP 01 v4**: Tidak ada aktivitas TPR. Tidak perlu update.
- **TP 04 v4**: Tidak ada aktivitas TPR. Tidak perlu update.

**Justifikasi**:
- Dok 02 §2 (anak fase A "membutuhkan visual dan gerak"): TPR adalah metode
  utama untuk usia 6-7 yang belajar melalui gerakan.
- Dok 03 §15 (Movement Interaction Rules): aktivitas speaking fase A
  "sebaiknya melibatkan movement ringan."
- Hidden information problem (analisa Sesi M1): kalau TPR dikamuflase sebagai
  modeling/chorus, engineer Fase 5 akan render kotak "siswa akan jawab" yang
  kosong — membingungkan guru.

**Backward compatibility**:
- ✓ Field `contoh_siswa` tetap opsional — TP lama yang isi field ini tetap valid.
- ✓ Tipe baru tidak mengganggu enum yang ada.
- ✓ TP yang sudah migrate (TP 01, TP 04) tidak terpengaruh.

---

## [Mei 2026] — Mini-versi 4.1

**Pemicu**: TP 04 (Numbers 1–20) migrasi mengungkap 5 kebutuhan yang tidak
ter-cover schema v4.0.

**Perubahan**:

1. **[Enum] Tambah `chant_movement` ke AktivitasTipe**
   Lokasi: SCHEMA §4.1
   Konteks: TP 04 `tp04-penutup-blast-off` adalah chant berirama + gerakan duduk,
   bukan permainan kompetitif (`game_movement`) dan bukan chant statis (`chant`).
   Definisi: "Chant berirama dengan gerakan (countdown, action song, dll) —
   bukan kompetitif."

2. **[Field] Tambah `flags[]` opsional di level aktivitas**
   Lokasi: SCHEMA §4 (section A. IDENTITAS) + §4.5 (enum baru)
   Konteks: TP 04 `tp04-inti-permainan-cepat` butuh sinyal eksplisit ke runtime
   bahwa mode mudah harus tidak kompetitif individual (emotional safety).
   Sebelumnya hanya tersirat di prosa `mode.mudah.bantuan` — hidden information.
   Flag pertama yang didefinisikan: `kompetitif_safety`.

3. **[Field] Tambah `observation.tag_set` opsional**
   Lokasi: SCHEMA §4 (section G) + §4.6 (enum baru)
   Konteks: TP 04 fokus akurasi lafal vocabulary (angka). Rating tag standar
   (`aktif`/`berani`/`diam`/`perlu_help`) bagus untuk participation & confidence,
   kurang presisi untuk vocab_use. Tag set alternatif: `akurasi` =
   (`tepat`/`agak_tepat`/`belum`/`belum_dicoba`).
   Default: `'standar'` (backward compat).

4. **[Doc] Klarifikasi semantik `media_dipakai`**
   Lokasi: SCHEMA §4 (section E)
   Konteks: TP 04 aktivitas `observation_validation` butuh kartu untuk
   ditunjukkan saat validasi. Schema tidak punya field terpisah untuk
   media-asesmen. Konfirmasi: `media_dipakai` berlaku untuk aktivitas
   mengajar maupun validasi.

5. **[Convention] Penamaan judul `pair_work`**
   Lokasi: SCHEMA tidak berubah; konvensi dokumentasi
   Konteks: Tipe `pair_work` mencakup 3 sub-jenis behavior berbeda:
   - **Dialog**: tanya-jawab (TP 01 sapa teman, goodbye)
   - **Cooperative**: bersama dengan dukungan (TP 04 hitung bersama)
   - **Race**: kompetitif berpasangan (belum ada di TP 01/04)
   Sub-jenis di-encode di `judul` aktivitas via format:
   `'Pair Work — {Sub-jenis}: {judul spesifik}'`
   Engineer Fase 5 baca dari judul untuk visual distinction.
   **Tidak ada perubahan struktur schema**, hanya konvensi penulisan.

**Dampak ke TP yang sudah migrate**:

- **TP 01 v4**: Cosmetic update — 2 aktivitas pair_work judul-nya disesuaikan
  ke konvensi baru (`Pair Work: Sapa Teman` → `Pair Work — Dialog: Sapa Teman Sebangku`).
  Tidak ada perubahan substansi atau struktur.
- **TP 04 v4** (baru): Sudah mengadopsi semua perubahan dalam migrasi.

**Justifikasi**:
- Dok 03 §14 (Emotional Safety): justifikasi `flags.kompetitif_safety`
- Dok 09 §7 (Target Vocabulary Use): justifikasi `tag_set: 'akurasi'`
- Dok 04 §8 (struktur diferensiasi): justifikasi penegasan sub-jenis pair_work
- COMPARISON.md (Fase 3): 5 masalah teridentifikasi saat migrasi TP 04

**Backward compatibility**:
- ✓ Semua field baru opsional. Schema v4.0 tetap valid.
- ✓ Runtime lama (TP yang masih pakai `langkah[]`) tidak terpengaruh.
- ✓ TP 01 v4 berfungsi penuh walau tidak adopsi field baru (cosmetic only).

---

## Konvensi Versi Schema

Saat ini schema tidak punya field `schema_version` eksplisit. Versi schema
dilacak via dokumen ini saja.

**Aturan upgrade versi**:
- **Mini-versi (4.1, 4.2, ...)**: Tambah field opsional, tambah enum value,
  klarifikasi dokumentasi. **Backward compatible.**
- **Major versi (5.0)**: Hapus/rename field wajib, ubah struktur top-level.
  **Breaking change** — semua TP harus migrate ulang.

Untuk Jalur 2 (Schema Extension Bertahap), target: tetap di major versi 4.x
sampai Fase 5 selesai. Major versi 5.0 hanya dipertimbangkan kalau ada
kebutuhan struktural yang tidak bisa di-akomodasi via mini-versi.

---

## Daftar Field Baru (per Mini-versi)

Daftar ini diupdate setiap mini-versi rilis, untuk referensi cepat migrator.

### v4.2
- Tidak ada field baru — hanya tambah enum value & klarifikasi field existing

### Enum v4.2
- `AktivitasTipe`: tambah `tpr_action`
- `audio_cue.contoh_siswa`: klarifikasi boleh kosong (eksplisit untuk `tpr_action`)

### v4.1
- `aktivitas.flags[]` (optional, array of Flag enum)
- `aktivitas.observation.tag_set` (optional, 'standar' | 'akurasi')

### Enum v4.1
- `AktivitasTipe`: tambah `chant_movement`
- **NEW enum** `Flag`: `kompetitif_safety`
- **NEW enum** `TagSet`: `standar` | `akurasi`

---

## Roadmap (Bukan Komitmen, Hanya Antisipasi)

Hal-hal yang **mungkin** muncul saat migrasi TP berikutnya. Belum diputuskan,
ditambahkan ke roadmap sebagai pengingat:

- **TP 06 Shapes**: mungkin butuh tipe `visual_recognition` yang berbeda dari `chorus`
- **TP 09 Animals**: mungkin butuh `tag_set` baru untuk recognition (mengenali) vs
  production (menyebut)
- **TP 14 Weather**: mungkin butuh konteks media dinamis (cuaca hari ini, di luar kontrol skenario)
- **TP 16 Story Retelling**: mungkin butuh tipe `storytelling` (sekuensial dengan
  alur naratif, beda dari modeling)

Saat TP-TP ini dimigrate, perubahan schema akan dicatat di mini-versi berikutnya.

---

## Akhir SCHEMA-CHANGELOG.md
