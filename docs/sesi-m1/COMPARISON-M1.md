# Sesi M1 — Perbandingan TP 02 & TP 03

**Tanggal**: Mei 2026
**Status**: Draft untuk review Anda
**Schema yang dipakai**: v4.2 (baru — sebelumnya v4.1)

---

## A. Status Migrasi Setelah M1

```
   TP 01 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.1
   TP 02 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.2 (NEW — sesi ini)
   TP 03 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.2 (NEW — sesi ini)
   TP 04 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.1
   TP 05-18                          ⬚ v3 (belum)
```

**Progress**: 4/18 migrate (22%). Sesi berikutnya M2 = TP 05 & TP 06.

---

## B. Schema Extension v4.2

Satu extension utama dipicu oleh TP 03:

**Tipe baru `tpr_action` di enum AktivitasTipe**

- **Pemicu**: TP 03 dominan TPR (Stand up, Sit down, Open your book)
- **Masalah yang dipecahkan**: Tipe lama (`modeling`, `chorus`) salah representasi
  — di TPR, siswa bertindak fisik, tidak ucap kembali. Field `audio_cue.contoh_siswa`
  kosong. Engineer Fase 5 perlu tahu untuk render UI berbeda (tanpa kotak
  "siswa akan jawab").
- **Dampak ke TP yang sudah migrate**: TP 01 & TP 04 tidak ada TPR, tidak perlu update.

Klarifikasi pendukung:
- `audio_cue.contoh_siswa` boleh kosong eksplisit untuk `tpr_action`

Detail lengkap di SCHEMA-CHANGELOG.md entry v4.2.

---

## C. Karakter Mendasar yang Berbeda — TP 02 vs TP 03

| Aspek | TP 02 — Introducing Myself | TP 03 — Classroom Instructions |
|---|---|---|
| **Fokus utama** | Self-disclosure verbal (ucap perkenalan) | Listening comprehension (respons fisik) |
| **Output siswa** | Verbal (ucap kalimat) | Fisik (lakukan aksi) |
| **Tipe dominan** | `chorus`, `pair_work`, `review_quick` | `tpr_action` × 5 aktivitas |
| **Pair work** | Walk-and-talk (dialog perkenalan) | Role-reversal (siswa jadi guru) |
| **Emotional concern** | Malu tampil di depan kelas | Malu salah respons cepat |
| **Permainan ikonik** | Walk-and-talk | Simon Says (dengan trap) |
| **Media wajib** | Name tag kosong | Kartu instruksi bergambar |

---

## D. Yang Saya PERTAHANKAN dari v3

Substansi pedagogis v3 yang sudah baik, saya tidak ubah:

### TP 02:
- ✅ Guru jadi model perkenalan (Pembuka)
- ✅ Pola "My name is" sebagai fondasi (Inti)
- ✅ Aktivitas membuat name tag (meaningful_link)
- ✅ Pola "I am ___ years old" hubungkan dengan ulang tahun
- ✅ Walk and talk dengan 3 teman
- ✅ Tampil sukarela di Penutup
- ✅ Refleksi: nama teman baru
- ✅ Validasi via tanya langsung saat berkemas

### TP 03:
- ✅ Demo TPR tanpa penjelasan (Pembuka) — Stand up / Sit down
- ✅ Perkenalkan kartu instruksi: siswa tebak dulu sebelum guru ucap
- ✅ Simon Says dengan trap mechanic
- ✅ Instruksi dua langkah (Open and read, dst)
- ✅ Siswa jadi pemimpin (peran terbalik)
- ✅ Review cepat 5 instruksi (Penutup)
- ✅ Validasi via instruksi acak saat berkemas

---

## E. Yang Saya UBAH dari v3 (perubahan substansi)

Setiap perubahan saya jelaskan dengan justifikasi. Anda bisa tolak per item.

### TP 02 — Perubahan Substansi

| # | Perubahan | Justifikasi |
|---|---|---|
| 1 | Walk and talk = 1 aktivitas pair_work (bukan dipecah jadi 2) | Keputusan 1 sesi sebelumnya — anak 6-7 butuh flow kontinyu (Dok 02 §2) |
| 2 | Mode tantangan walk-and-talk tambah "What is your favorite color?" sebagai info bonus | Buat aktivitas tetap menantang untuk siswa cepat |
| 3 | Tampil di depan kelas (Penutup) eksplisit mode mudah = guru berdiri di sebelah siswa untuk dukungan | Emotional safety untuk anak pemalu (Dok 03 §14) |
| 4 | Mode mudah name tag = guru tulis tipis dulu, siswa tebalkan | Anak kelas 1 banyak yang belum lancar menulis nama sendiri |
| 5 | Mode tantangan name tag = tulis nama lengkap + nickname | Ekstensi untuk siswa cepat |
| 6 | Refleksi: tanya "siapa tahu nama teman baru?" boleh dijawab Indonesia | Fokus refleksi pada kebersamaan, bukan tes bahasa (Dok 03 §14) |

### TP 03 — Perubahan Substansi

| # | Perubahan | Justifikasi |
|---|---|---|
| 1 | 5 aktivitas TP 03 pakai tipe `tpr_action` baru | Hidden information problem — engineer Fase 5 perlu tahu tipe yang akurat |
| 2 | Simon Says tambah `flags: ['kompetitif_safety']` | Mode mudah = versi non-trap untuk anak pemalu (Dok 03 §14) |
| 3 | Aktivitas siswa pemimpin: mode mudah = pakai kartu sebagai bantuan baca | Anak kelas 1 belum siap improvisasi memimpin sendiri |
| 4 | Aktivitas siswa pemimpin: mode mudah fallback = guru jadi co-teacher dengan siswa | Reduce tekanan tampil sendirian |
| 5 | TPR perkenalan kartu: mode mudah = hanya 4 kartu (sit/stand/listen/look) | Anak 6-7 butuh pengulangan, bukan kuantitas |
| 6 | Mode tantangan kartu: acak urutan + tanpa demo guru | Latihan recall murni untuk siswa cepat |
| 7 | Permainan dua langkah dipisah jadi aktivitas tersendiri | Kompleksitas lebih tinggi, butuh ruang sendiri |
| 8 | Observation `tag_set: 'akurasi'` untuk TPR (kartu dan dua langkah) | Yang diukur akurasi respons fisik, bukan keberanian |

---

## F. Yang TIDAK Saya Ubah — Penting Anda Tahu

Hal-hal yang **sengaja** saya pertahankan apa adanya:

- **Substansi bahasa Inggris**: semua kalimat audio dari v3 tetap utuh
- **Indikator pedagogis**: 3 indikator per TP sama persis dengan v3
- **Durasi total per fase**: Pembuka 10 + Inti 30 + Penutup 10 + Penilaian 6
- **Vocabulary list**: sama persis dengan v3
- **Tag PM (mindful/meaningful/joyful)**: dipertahankan per aktivitas
- **Persiapan dan media**: hanya direstruktur, substansinya sama

---

## G. Risiko yang Saya Akui

Beberapa keputusan saya yang **mungkin Anda tolak**:

### Risiko 1 — Walk and Talk durasi 5 menit terlalu panjang?

v3: 2 menit. Saya: 5 menit (termasuk demo + walking + recall).

Saya pikir 5 menit cukup untuk siswa cari 3 teman. Tapi mungkin terlalu lama
untuk konsentrasi kelas 1. Mode mudah saya kasih durasi_min 2 menit sebagai
escape valve.

### Risiko 2 — Mode tantangan walk-and-talk tambah "favorite color"

Mungkin terlalu jauh dari fokus TP 02 (yang fokus nama + usia). Anda mungkin
lebih suka tetap fokus pada perkenalan saja, variasi bisa di TP berikutnya.

### Risiko 3 — Simon Says mode mudah TANPA trap mechanic

Apakah "Simon Says tanpa trap" masih Simon Says? Atau itu menghilangkan
esensi permainan? Saya pilih ini demi emotional safety, tapi mungkin Anda
merasa overcautious.

### Risiko 4 — Siswa jadi pemimpin TP 03 saya beri kartu sebagai bantuan di mode mudah

Mungkin terlalu mempermudah — esensi peran terbalik adalah siswa harus
ingat sendiri. Tapi anak kelas 1 banyak yang akan freeze tanpa bantuan.

### Risiko 5 — TP 03 aktivitas siswa pemimpin = pair_work (BUKAN tpr_action)

Karena siswa pemimpin UCAP instruksi (bukan bertindak), itu bukan TPR dari
sisi siswa pemimpin. Tapi kelas yang menjalankan instruksi ADALAH TPR. Saya
pilih label `pair_work` karena fokus pada interaksi 2-arah (pemimpin ←→ kelas).
Mungkin Anda lebih suka tipe lain.

---

## H. Format Review untuk Anda

Saya ingin Anda review dengan format berikut (sama seperti TP 04 dulu):

### TP 02

```
Substansi TP 02 → [Tepat / Tepat dengan koreksi / Perlu revisi]
Koreksi (jika ada):
1. ...
2. ...
```

### TP 03

```
Substansi TP 03 → [Tepat / Tepat dengan koreksi / Perlu revisi]
Koreksi (jika ada):
1. ...
2. ...
```

### Schema v4.2

```
Tipe tpr_action → [Setuju / Tidak setuju, alasan]
```

Tidak perlu jawab semua sekaligus. Kalau Anda hanya bisa review 1 TP dulu,
itu OK — kita revisi parsial.

---

## I. Apa yang Terjadi Setelah Review

**Skenario A — Setuju semua**: Saya commit ke `docs/fase-4-spec/sesi-m1/`,
lanjut ke Sesi M2 (TP 05 & TP 06).

**Skenario B — Koreksi substansi**: Saya revisi, kirim ulang draft, Anda
review lagi.

**Skenario C — Tolak schema v4.2 tpr_action**: Saya rancang ulang TP 03 pakai
kombinasi modeling/chorus. Lebih kompleks tapi tetap bisa.

**Skenario D — Pivot dari C2 ke C3**: Kalau koreksi Anda terlalu banyak,
mungkin saatnya Anda kerjakan sendiri beberapa TP dan saya bantu yang lain.

---

## J. Catatan untuk Diri Saya (Refleksi Sesi M1)

Hal yang saya temukan saat draft:

1. **TP 02 lebih panjang dari TP 01 atau TP 04**: total 11 aktivitas vs 12 (TP 01)
   atau 8 (TP 04). Substansi v3 memang lebih kaya — saya pertahankan.

2. **TP 03 sangat TPR-heavy**: 5 dari 8 aktivitas adalah `tpr_action`. Ini
   karakter TP yang fokus listening comprehension. Tidak masalah kalau pola
   monoton — anak fase A butuh repetisi.

3. **Schema v4.2 confirms Jalur 2 jalan**: 1 TP migration → 1 schema extension.
   Pattern ini wajar dan terkontrol. Tidak ada panic.

4. **Antisipasi M2 (TP 05 Colours, TP 06 Shapes)**: kemungkinan TIDAK butuh
   schema extension. Pola sudah ada (chorus + pair_work + observation). Akan
   menarik validasi apakah schema benar-benar stabil.

---

## Akhir COMPARISON-M1.md
