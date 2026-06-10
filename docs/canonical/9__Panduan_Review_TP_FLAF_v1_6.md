# PANDUAN REVIEW TEACHING PROMPT (TP)

## FLAF v1.6

Dokumen ini adalah panduan resmi untuk reviewer Teaching Prompt FLAF.

Reviewer wajib mengikuti dokumen ini sepenuhnya.
Reviewer dilarang memberi penilaian di luar yang ditetapkan dokumen ini.
Reviewer dilarang menggunakan penilaian pribadi.

---

# 1. PERAN REVIEWER

Reviewer bertugas memeriksa apakah Canonical TP yang dihasilkan memenuhi standar FLAF v1.6.

Reviewer bukan editor. Reviewer tidak menulis ulang. Reviewer tidak memberi saran gaya.

Reviewer hanya melakukan dua hal:

1. Memeriksa setiap item checklist — LULUS atau GAGAL.
2. Melaporkan temuan dengan format yang ditetapkan.

---

# 2. ATURAN REVIEW

## 2.1 Dasar Penilaian

Setiap temuan wajib mengacu pada salah satu dari:

- Checklist (Bagian 4)
- Standar Field (Bagian 5)
- Aturan Bahasa (Bagian 6)
- Kosakata Resmi (Bagian 7)

Temuan yang tidak mengacu pada salah satu di atas tidak valid dan tidak boleh dilaporkan.

## 2.2 Format Temuan

Setiap temuan wajib ditulis dalam format berikut:

```
TEMUAN [nomor urut]
Checklist/Standar: [nomor checklist atau nama standar]
Layar: [nomor layar]
Field: [nama field]
Teks asli: [kutip teks yang bermasalah]
Masalah: [deskripsi singkat pelanggaran]
```

Temuan yang tidak mengikuti format ini tidak valid.

## 2.3 Status Akhir

Setelah seluruh checklist diperiksa, reviewer wajib menyatakan salah satu:

```
STATUS: LULUS
```

atau

```
STATUS: GAGAL
Jumlah temuan: [angka]
```

---

# 3. YANG TIDAK BOLEH DILAKUKAN REVIEWER

Reviewer dilarang:

- Memberi rekomendasi penulisan ulang
- Memberi saran gaya atau estetika
- Mengomentari pilihan pedagogis
- Menambah temuan di luar checklist dan standar
- Mengubah urutan pemeriksaan
- Melewatkan checklist dengan alasan apapun
- Menyatakan LULUS sebelum semua checklist diperiksa

---

# 4. CHECKLIST KELOLOSAN

Periksa setiap item berikut secara berurutan. Jangan lewati satu pun.

## CHECKLIST 1 — Satu Layar = Satu Tujuan

☐ Setiap layar hanya memiliki satu tujuan utama.
☐ Seluruh AKSI mendukung tujuan layar.
☐ Seluruh UCAP mendukung tujuan layar.
☐ Tidak ada aktivitas di luar tujuan layar.

GAGAL JIKA: satu layar memiliki dua tujuan atau lebih, atau aktivitas tidak sesuai judul layar.

## CHECKLIST 2 — Logical Flow

☐ AKSI muncul sebelum UCAP yang berkaitan.
☐ UCAP menghasilkan respons siswa yang jelas.
☐ BANTUAN muncul hanya jika diperlukan.
☐ Catatan Penting muncul hanya jika diperlukan.
☐ Transisi menuju layar berikutnya jelas.

GAGAL JIKA: ada logical jump, guru harus menebak langkah berikutnya, atau media muncul tanpa diperkenalkan.

Catatan: Media yang sudah diperkenalkan di layar sebelumnya tidak perlu diperkenalkan ulang di layar berikutnya. Ini bukan pelanggaran logical flow.

## CHECKLIST 3 — Determinisme Field

☐ Seluruh AKSI observable — satu kalimat satu aksi.
☐ Tidak ada tujuan implisit.
☐ Tidak ada multitafsir.
☐ Tidak ada kata relatif.

GAGAL JIKA: AI dapat menghasilkan interpretasi berbeda, atau guru harus menafsirkan instruksi.

## CHECKLIST 4 — UCAP Ramah TTS

☐ Satu ucapan satu baris.
☐ Kalimat pendek dan natural.
☐ Tidak ada simbol yang mengganggu TTS.
☐ Tidak ada instruksi fisik di dalam UCAP.
☐ Dapat langsung dibacakan guru.

GAGAL JIKA: UCAP membutuhkan preprocessing, atau TTS menghasilkan jeda tidak natural.

## CHECKLIST 5 — Whole Class

☐ Model dilakukan bersama semua siswa.
☐ Latihan dilakukan bersama semua siswa.
☐ Aktivitas dilakukan bersama semua siswa.
☐ Diferensiasi belum muncul sebelum pembelajaran inti selesai.

GAGAL JIKA: diferensiasi muncul sebelum pembelajaran inti selesai.

## CHECKLIST 6 — Diferensiasi

☐ Diferensiasi muncul setelah pembelajaran inti.
☐ Seluruh siswa telah mengikuti pembelajaran inti.

GAGAL JIKA: guru harus membagi perhatian sejak awal, atau alur kelas menjadi terfragmentasi.

## CHECKLIST 7 — Catatan Penting

☐ Catatan Penting hanya berisi constraint.
☐ Catatan Penting singkat — maksimal 2 kalimat.
☐ Tidak mengandung kata: karena, agar, supaya, sehingga.

GAGAL JIKA: Catatan Penting berisi penjelasan atau alasan pedagogis.

## CHECKLIST 8 — Human Readable

☐ Guru dapat membaca tanpa penjelasan tambahan.
☐ Struktur mudah dipindai.
☐ Urutan mudah diikuti.

GAGAL JIKA: guru harus menafsirkan isi.

## CHECKLIST 9 — Machine Readable

☐ Schema konsisten di seluruh layar.
☐ Field mudah diparse.
☐ Tidak ada struktur ambigu.

GAGAL JIKA: parser membutuhkan aturan khusus.

## CHECKLIST 10 — Single Source of Truth

☐ Seluruh informasi berasal dari satu dokumen.
☐ Tidak ada referensi silang yang wajib dibaca.

GAGAL JIKA: ada lebih dari satu sumber kebenaran.

## CHECKLIST 11 — Stable Schema

Urutan field wajib di setiap layar:

☐ BANTUAN
☐ Catatan Penting
☐ Darurat

☐ Nama field identik di seluruh layar.
☐ Darurat ditulis di setiap layar — isi "—" jika tidak ada.

Catatan: AKSI dan UCAP boleh bergantian berkali-kali dalam satu layar sesuai kebutuhan pedagogis. Yang wajib konsisten adalah urutan field penutup: BANTUAN → Catatan Penting → Darurat — selalu di akhir layar, selalu dalam urutan ini.

GAGAL JIKA: nama field berubah, urutan field penutup berubah, atau Darurat tidak ada di satu layar pun.

## CHECKLIST 12 — Canvas Integrity

☐ Tidak ada layar yang terpotong.
☐ Setiap layar dapat dibaca secara mandiri.

GAGAL JIKA: satu layar terpotong atau tidak utuh.

## CHECKLIST 13 — Kesiapan Konversi JS

☐ Seluruh field konsisten.
☐ Tidak ada logical jump.
☐ Tidak ada field ambigu.
☐ Tidak ada field wajib yang kosong.

GAGAL JIKA: parser membutuhkan koreksi manual.

---

# 5. STANDAR PER FIELD

## AKSI

LULUS:
- Satu kalimat = satu aksi = satu gerakan yang dapat diamati.
- Menggunakan kata kerja imperatif: Pegang, Turunkan, Angkat, Tempel, Tunjuk, Tunjukkan, Duduk, Berdiri, Angguk, Lambaikan, Ambil, Simpan, Catat, Peragakan, Tepuk, Ucapkan, Tunggu.
- "Tunjukkan" digunakan jika guru memperlihatkan objek ke semua siswa.
- "Tunjuk" digunakan jika guru mengarahkan jari ke objek yang sudah ada di tempatnya.

GAGAL JIKA:
- Dua aksi dalam satu kalimat.
- Menggunakan kata: hubungkan, perkenalkan konsep, jelaskan konsep, bagi kelas, motivasi.
- Menggunakan "tunjuk" padahal guru memperlihatkan objek ke siswa.

## UCAP

LULUS:
- Satu ucapan satu baris.
- Bersih dari instruksi fisik.
- Bersih dari tanda panah → sebagai instruksi.
- Bersih dari tanda kurung berisi instruksi.
- Bahasa Inggris.

GAGAL JIKA:
- Ada instruksi fisik di dalam baris UCAP.
- Ada tanda panah → diikuti instruksi fisik.
- Bukan Bahasa Inggris.

Catatan: Yang dimaksud instruksi fisik adalah gerakan yang
diperagakan guru, seperti [berdiri], [tunjuk telinga],
[tepuk tangan]. Instruksi manajemen kelas yang diucapkan
seperti "Hands down.", "Eyes on me.", "Sit nicely." bukan
instruksi fisik dan diperbolehkan di UCAP.

## BANTUAN

LULUS:
- Diawali dengan kondisi eksplisit dalam format "Jika [kondisi]:".
- Isi berupa tindakan fisik yang langsung bisa dilakukan.
- Menggunakan "ucapkan" — bukan "ucap".

GAGAL JIKA:
- Tidak ada kondisi eksplisit.
- Isi tidak konkret.
- Menggunakan "ucap" tanpa "kan".

## CATATAN PENTING

LULUS:
- Hanya berisi constraint.
- Maksimal 2 kalimat.
- Tidak mengandung kata: karena, agar, supaya, sehingga.

GAGAL JIKA:
- Berisi alasan pedagogis.
- Lebih dari 2 kalimat.

## DARURAT

LULUS:
- Format: "Jika [kondisi] → [tindakan]."
- Kondisi terukur: waktu, jumlah siswa, energi kelas.
- Tindakan langsung bisa dilakukan.
- Ditulis "—" jika tidak ada.

GAGAL JIKA:
- Tidak diawali "Jika".
- Kondisi tidak terukur.
- Tindakan tidak konkret.
- Field tidak ada di layar.

---

# 6. ATURAN BAHASA

## Field UCAP

Wajib Bahasa Inggris.

GAGAL JIKA: ada Bahasa Indonesia di dalam field UCAP.

## Field Selain UCAP

Wajib Bahasa Indonesia yang konkret, kecuali:

1. Kata atau frasa Bahasa Inggris yang dikutip sebagai contoh ucapan — ditulis dalam tanda kutip.
   Contoh yang benar: ucapkan "Goodbye..." menggantung.

2. Tiga istilah berikut dipertahankan tanpa terjemahan: gestur, walk and talk, chant, reset.

GAGAL JIKA:
- Ada istilah asing di luar tanda kutip selain empat pengecualian di atas.
- Instruksi guru menggunakan Bahasa Inggris tanpa tanda kutip.

---

# 7. KOSAKATA RESMI

## Nama Field Resmi

Gunakan persis seperti ini — tidak boleh divariasikan:

AKSI · UCAP · BANTUAN · Catatan Penting · Darurat

## Nama Bagian Resmi

Persiapan Media · Ringkasan Sesi · Pembuka · Inti · Penutup · Penutup Sesi

## Token Marker Pedagogis

Gunakan persis seperti ini:

👂 LISTEN FIRST · 🗣 TOGETHER · ⚡ MICRO-FREEZE · 🔁

## Istilah yang Dipertahankan

gestur · walk and talk · chant · reset

## Larangan Sinonim

Jangan gunakan sinonim untuk istilah resmi di atas.

---

# 8. FORMAT LAPORAN REVIEW

## Header

```
REVIEW TP-[nomor]
Reviewer: [nama AI]
Tanggal: [tanggal]
File: [nama file]
```

## Hasil Checklist

Untuk setiap checklist, tulis status dan bukti pemeriksaan:

```
CHECKLIST 1: LULUS / GAGAL
Bukti: [satu kalimat yang membuktikan pemeriksaan dilakukan]

CHECKLIST 2: LULUS / GAGAL
Bukti: [satu kalimat yang membuktikan pemeriksaan dilakukan]

...

CHECKLIST 13: LULUS / GAGAL
Bukti: [satu kalimat yang membuktikan pemeriksaan dilakukan]
```

Bukti wajib diisi untuk setiap checklist — LULUS maupun GAGAL.
Bukti yang hanya menyalin ulang kriteria checklist tidak valid.
Bukti harus merujuk pada konten spesifik dari file yang direview.

## Daftar Temuan

Untuk setiap checklist yang GAGAL, tulis temuan dengan format:

```
TEMUAN [nomor urut]
Checklist: [nomor]
Status: GAGAL
Layar: [nomor layar]
Field: [nama field]
Teks asli: [kutip teks yang bermasalah]
Masalah: [deskripsi singkat pelanggaran]
```

## Status Akhir

```
STATUS: LULUS
```

atau

```
STATUS: GAGAL
Jumlah temuan: [angka]
```

---

# 9. ATURAN FINAL

Laporan review dinyatakan valid apabila:

☑ Semua 13 checklist diperiksa.
☑ Setiap checklist disertai bukti pemeriksaan yang merujuk konten spesifik file.
☑ Setiap temuan mengacu pada checklist atau standar yang spesifik.
☑ Setiap temuan menyertakan teks asli yang dikutip.
☑ Status akhir dinyatakan dengan jelas.
☑ Tidak ada rekomendasi penulisan ulang.
☑ Tidak ada penilaian pribadi.

Laporan yang tidak memenuhi syarat di atas tidak valid dan harus diulang.
