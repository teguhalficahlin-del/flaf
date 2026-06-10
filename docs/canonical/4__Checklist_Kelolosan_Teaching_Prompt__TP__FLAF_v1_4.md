# CHECKLIST KELOLOSAN TEACHING PROMPT (TP)

## FLAF v1.4

Dokumen ini merupakan spesifikasi resmi audit Teaching Prompt (TP) FLAF.

Tujuan dokumen ini adalah memastikan setiap TP yang dihasilkan memenuhi Standar Emas FLAF v1.4 sebelum dinyatakan **FINAL**.

---

# ATURAN AUDIT

Audit dilakukan terhadap dokumen hasil akhir.

Audit dilakukan berdasarkan isi dokumen, bukan niat penulis.

Satu temuan yang gagal sudah cukup untuk menyatakan TP **BELUM FINAL**.

---

# STATUS KELULUSAN

PASS

Seluruh checklist terpenuhi.

FAIL

Minimal satu checklist tidak terpenuhi.

---

# CHECKLIST 1

## Satu Layar = Satu Tujuan

### Pemeriksaan

☐ Setiap layar hanya memiliki satu tujuan utama.

☐ Seluruh AKSI mendukung tujuan layar.

☐ Seluruh UCAP mendukung tujuan layar.

☐ Tidak ada aktivitas di luar tujuan layar.

### Gagal Jika

☐ Satu layar memiliki dua tujuan atau lebih.

☐ Aktivitas tidak sesuai judul layar.

---

# CHECKLIST 2

## Logical Flow

### Pemeriksaan

☐ AKSI muncul sebelum UCAP.

☐ UCAP menghasilkan respons siswa.

☐ BANTUAN muncul hanya jika diperlukan.

☐ Catatan Penting muncul hanya jika diperlukan.

☐ Transisi menuju layar berikutnya jelas.

### Gagal Jika

☐ Ada logical jump.

☐ Guru harus menebak langkah berikutnya.

☐ Media muncul tanpa diperkenalkan.

---

# CHECKLIST 3

## Determinisme Field

### Pemeriksaan

☐ Seluruh AKSI observable.

☐ Satu kalimat = satu aksi.

☐ Tidak ada tujuan implisit.

☐ Tidak ada multitafsir.

☐ Tidak ada kata relatif.

### Gagal Jika

☐ AI dapat menghasilkan interpretasi berbeda.

☐ Guru harus menafsirkan instruksi.

---

# CHECKLIST 4

## UCAP Ramah TTS

### Pemeriksaan

☐ Satu ucapan satu baris.

☐ Kalimat pendek.

☐ Tidak ada simbol yang mengganggu TTS.

☐ Dapat langsung dibacakan.

### Gagal Jika

☐ Membutuhkan preprocessing.

☐ TTS menghasilkan jeda tidak natural.

---

# CHECKLIST 5

## Whole Class

### Pemeriksaan

☐ Model dilakukan bersama.

☐ Latihan dilakukan bersama.

☐ Aktivitas dilakukan bersama.

☐ Diferensiasi belum muncul.

### Gagal Jika

☐ Diferensiasi muncul sebelum pembelajaran inti selesai.

---

# CHECKLIST 6

## Diferensiasi

### Pemeriksaan

☐ Diferensiasi berada di akhir.

☐ Seluruh siswa telah mengikuti pembelajaran inti.

☐ Diferensiasi menjadi penguatan.

### Gagal Jika

☐ Guru harus membagi perhatian sejak awal.

☐ Alur kelas menjadi terfragmentasi.

---

# CHECKLIST 7

## Catatan Penting

### Pemeriksaan

☐ Cue hanya berisi constraint.

☐ Cue singkat.

☐ Cue dapat diverifikasi.

### Gagal Jika

☐ Cue berubah menjadi penjelasan.

☐ Cue berisi aktivitas baru.

---

# CHECKLIST 8

## Human Readable

### Pemeriksaan

☐ Guru dapat membaca tanpa penjelasan tambahan.

☐ Struktur mudah dipindai.

☐ Urutan mudah diikuti.

### Gagal Jika

☐ Guru harus menafsirkan isi.

---

# CHECKLIST 10

## Machine Readable

### Pemeriksaan

☐ Schema konsisten.

☐ Field mudah diparse.

☐ Tidak ada struktur ambigu.

### Gagal Jika

☐ Parser membutuhkan aturan khusus.

---

# CHECKLIST 11

## Single Source of Truth

### Pemeriksaan

☐ Seluruh informasi berasal dari Markdown.

☐ Tidak ada referensi silang yang wajib dibaca.

### Gagal Jika

☐ Ada lebih dari satu sumber kebenaran.

---

# CHECKLIST 12

## Stable Schema

### Pemeriksaan

Urutan field:

☐ LAYAR

☐ AKSI

☐ UCAP

☐ BANTUAN

☐ Catatan Penting

☐ Darurat (jika ada kondisi waktu atau kelas yang memerlukan jalur alternatif)

Nama field identik dengan spesifikasi.

### Gagal Jika

☐ Nama field berubah.

☐ Urutan field berubah.

☐ Ada field baru.

☐ Ada field wajib yang hilang.

---

# CHECKLIST 13

## Canvas Integrity

### Pemeriksaan

☐ Tidak ada layar yang terpotong.

☐ Tidak ada layar yang dibagi.

☐ Setiap canvas dapat dibaca mandiri.

### Gagal Jika

☐ Satu layar berada di dua canvas.

☐ Ada placeholder seperti:

"Lanjut..."

"Bersambung..."

---

# CHECKLIST 13

## Kesiapan Konversi JS

### Pemeriksaan

☐ Seluruh field konsisten.

☐ Tidak ada logical jump.

☐ Tidak ada field ambigu.

☐ Tidak ada field kosong yang wajib.

### Gagal Jika

☐ Parser membutuhkan koreksi manual.

---

# KEPUTUSAN AKHIR

Teaching Prompt hanya dapat dinyatakan **FINAL** apabila:

☑ Seluruh 13 Checklist PASS.

☑ Tidak ditemukan logical jump.

☑ Seluruh field selain UCAP deterministik.

☑ Seluruh UCAP ramah TTS.

☑ Stable Schema terjaga.

☑ Canvas Integrity terjaga.

☑ Dokumen siap diparse AI.

☑ Dokumen siap dikonversi menjadi JS.

☑ Dokumen siap digunakan guru SD tanpa penjelasan tambahan.

---

# ATURAN FINAL

Jika satu saja checklist gagal:

STATUS = BELUM FINAL

Reviewer wajib memberikan daftar temuan.

AI wajib merevisi dokumen.

Teaching Prompt tidak boleh digunakan sebelum seluruh checklist dinyatakan PASS.
