# TP 01 vs TP 04 — Perbandingan untuk Review Substansi

**Tujuan dokumen ini**: Membantu Anda **menilai apakah schema v4 cukup fleksibel**
untuk menampung variasi antar TP, atau ada hal yang harus diperluas.

**Cara baca**: Buka 3 tab berdampingan:
1. `tp-01.js` (greetings — TP yang sudah Anda baca)
2. `tp-04.js` (numbers — yang baru saya migrasi)
3. Dokumen ini

---

## A. Karakter Mendasar yang Berbeda

| Aspek | TP 01 — Greetings | TP 04 — Numbers |
|---|---|---|
| **Fokus pedagogis** | Interaksi sosial (sapa orang) | Hafalan + recall cepat |
| **Cognitive load** | Rendah (4-7 frasa) | Tinggi (20 angka, pola belasan) |
| **Dominan aktivitas** | Modeling, pair-tanya-jawab | Chant, chorus, permainan |
| **Emotional concern utama** | Rasa malu disapa | Rasa malu salah pengucapan |
| **Pair work natural** | Tanya-jawab nama, salam | Hitung bersama (cooperative) |
| **Movement** | Minimal (sapa, tunjuk) | Tinggi (chant, blast off, race) |
| **Konteks rumah** | Sapa orang tua | Hitung benda — bukan link rumah |

## B. Apa yang Schema Sudah Cukup Tangani

Schema v4 (dari Fase 1) sudah **berhasil** menampung variasi ini tanpa ada
perubahan struktur:

✅ **Pair work disesuaikan jenisnya** — TP 01 pair = tanya-jawab. TP 04 pair =
hitung bersama bergantian. Sama tipe `pair_work`, beda micro_script & audio_cue.

✅ **Mode diferensiasi konkret per aktivitas** — Mode mudah TP 04 di permainan
("per baris, bukan kompetisi individu") sangat berbeda dari mode mudah TP 01
("demo dulu di papan"). Schema fleksibel.

✅ **Emotional safety per TP** — TP 04 punya pengakuan eksplisit "11-19 tricky"
di `micro_script.pembuka`. Schema bebas teks.

✅ **Tipe aktivitas re-used** — 12 tipe enum cukup untuk TP 04. Tidak perlu
tipe baru.

✅ **Fallback per kondisi** — TP 04 punya fallback berbeda (mis: untuk
permainan, fallback "kelas_ribut" = "ganti mode mudah: per baris"). Schema
mendukung.

✅ **Durasi target & min berbeda** — TP 04 punya aktivitas 8 menit (permainan),
TP 01 paling panjang 7 menit. Bebas atur.

## C. Apa yang Saya Temukan SUSAH atau Memaksa

Beberapa hal yang saat migrasi TP 04 terasa **tidak alami** atau memaksa:

### Masalah 1 — Tipe aktivitas: "blast off" tidak pas dengan enum

Aktivitas `tp04-penutup-blast-off` saya beri tipe `game_movement`, tapi
sebenarnya itu **bukan permainan kompetitif** — itu **chant berirama dengan
gerakan duduk**. Lebih dekat ke `chant` tapi dengan gerakan.

**Konsekuensi**: Schema enum 12 tipe **mungkin perlu** tipe baru `chant_movement`
atau `routine_movement`. Atau, kita longgarkan: izinkan kombinasi tipe via
field tambahan `tipe_sekunder`.

**Yang saya lakukan sementara**: Pilih `game_movement` karena paling dekat,
substansi tetap di micro_script. Tapi label "game" terasa salah.

### Masalah 2 — Validasi Penilaian membutuhkan kartu, tidak hanya nama siswa

Di TP 01, aktivitas `observation_validation` cukup "sapa siswa pakai nama."
Di TP 04, aktivitas validasi butuh **tunjukkan kartu acak**. Substansinya
berbeda: bukan hanya nama, tapi **alat bantu**.

**Konsekuensi**: Schema bahkan tidak punya field untuk "alat bantu validasi."
Saya improvisasi dengan `media_dipakai`. Tapi semantically beda — media untuk
mengajar vs media untuk asesmen mungkin perlu field berbeda.

### Masalah 3 — "Permainan kompetitif vs aman" tidak terdokumentasi

TP 04 punya permainan `tunjuk-cepat` di mana mode mudah **harus tidak
kompetitif individual** (untuk emotional safety, Dok 03 §14). Tapi schema
tidak punya field `kompetitif_safety_flag` atau sejenisnya.

**Yang saya lakukan**: Tulis di `mode.mudah.bantuan` secara prosa. Tapi ini
**hidden information** — engineer Fase 5 bisa miss kalau hanya baca struktur,
tidak baca prosa.

### Masalah 4 — TP 04 punya `tipe` aktivitas yang berbeda perilakunya bahkan dalam tipe yang sama

`tp04-inti-pair-count` adalah `pair_work` **cooperative** (hitung bergantian
sambil saling membantu).
`tp01-inti-pair-sapa-teman` adalah `pair_work` **dialog** (tanya-jawab).

Tipe enum-nya sama, tapi behavior runtime mungkin perlu berbeda (mis: durasi
ideal, cara observasi, fallback yang ditampilkan).

**Yang saya lakukan**: Tetap pakai `pair_work` tunggal, perbedaan di micro_script.
Tapi mungkin perlu sub-tipe: `pair_dialog` vs `pair_cooperative` vs `pair_race`.

### Masalah 5 — Indikator observasi yang berbeda secara fundamental

TP 04 butuh indikator `vocab_use` (apakah siswa sebut angka benar) dengan **tingkat ketat berbeda**:
- "Mudah" — apakah pernah ucap, tidak peduli akurat
- "Normal" — akurat lafal
- "Tantangan" — akurat + cepat

Schema saat ini punya 4 indikator (participation, response, confidence, vocab_use)
dengan rating tag (aktif/berani/diam/help). **Rating tag tidak menangkap nuansa
akurasi vocabulary**.

**Yang saya lakukan**: Pakai tag yang ada. Tapi substansi observasi vocab di
TP 04 mungkin perlu tag baru: `tepat/agak_tepat/belum`.

## D. Pertanyaan Strategis untuk Anda

Berdasarkan 5 masalah di atas, ada 3 pilihan jalur:

### Jalur 1 — Schema Lock, Konten Adaptasi

Schema v4 dianggap **final**. Variasi antar TP diakomodasi via micro_script
prosa, bukan field terstruktur. Engineer Fase 5 baca prosa untuk pahami nuansa.

**Plus**: Schema stabil, mudah migrasi TP lain.
**Minus**: Banyak "hidden information" di prosa yang bisa miss.

### Jalur 2 — Schema Extension Bertahap

Setiap kali migrasi TP baru ketemu kebutuhan, schema diperluas. TP yang sudah
migrate, di-update.

**Plus**: Schema selalu sesuai kebutuhan nyata.
**Minus**: Schema bergerak, butuh disiplin tracking. Bisa jadi rework loop.

### Jalur 3 — Re-design Schema dengan Lebih Banyak Polymorphism

Restruktur schema sebelum lanjut migrasi TP lain. Tambah field-field yang
sudah saya identifikasi:
- `tipe_sekunder` (untuk kombinasi tipe)
- `kompetitif_safety_required` (boolean per aktivitas)
- `tag_observasi_custom[]` (override 4 tag default)
- `media_kategori` (mengajar / asesmen)

**Plus**: Schema kaya, lebih tahan banting untuk variasi TP.
**Minus**: Re-migrate TP 01 dan TP 04. Penundaan Fase 4 & 5.

---

## E. Yang Saya Rekomendasi Anda Lakukan untuk Review

1. **Buka tp-04.js**, scroll ke aktivitas yang paling kontras dengan TP 01:
   - `tp04-inti-kartu-11-20` (yang punya pengakuan emosional "tricky")
   - `tp04-inti-pair-count` (pair work cooperative, bukan dialog)
   - `tp04-inti-permainan-cepat` (mode mudah non-kompetitif)
   - `tp04-penutup-blast-off` (chant + movement)

2. **Bandingkan dengan TP 01** — apakah keduanya terasa **konsisten gayanya**,
   atau ada yang terasa terlalu kaku/longgar di salah satunya?

3. **Tanya ke diri sendiri**:
   - Apakah substansi TP 04 menangkap cara Anda mengajar angka?
   - Apakah ada nuansa pedagogis yang hilang karena struktur schema?
   - Apakah 5 masalah di Bagian C terasa **penting** atau **bisa diabaikan**?

4. **Pilih Jalur**: 1, 2, atau 3 dari Bagian D.

---

## F. Yang Sengaja Saya Buat Sama-Tapi-Berbeda

Untuk memudahkan compare side-by-side, beberapa hal saya sengaja struktur sama
di TP 01 dan TP 04:

- Field ordering identik (id → tipe → judul → tujuan_komunikasi → vocab_target → ...)
- Indentasi & whitespace style identik
- Penamaan ID konsisten: `tp{NN}-{fase}-{slug}`
- Field opsional dihilangkan, bukan diisi null (kecuali `mode: null` yang
  semantically bermakna "fundamental, no diferensiasi")

Kalau Anda lihat keduanya berdampingan dan **format kelihatan rapih bersama**,
itu sinyal schema bisa scale ke TP lain dengan visual familiarity yang membantu
migrator (Anda sendiri) di TP 02-18.

---

## Akhir COMPARISON.md
