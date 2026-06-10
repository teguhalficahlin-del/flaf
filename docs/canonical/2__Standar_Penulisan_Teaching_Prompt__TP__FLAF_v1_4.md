# STANDAR EMAS FLAF v1.4

## Standar Penulisan Teaching Prompt (TP)

Dokumen ini menjadi spesifikasi resmi penulisan seluruh Teaching Prompt (TP) FLAF.

Setiap TP wajib memenuhi seluruh standar berikut sebelum dinyatakan **FINAL**.

---

# 1. Satu Layar = Satu Tujuan

## Prinsip

Setiap layar hanya memiliki satu fokus pembelajaran.

Contoh:

* Pembuka
* Interaksi
* Drill
* Chant
* Game
* Konteks Nyata
* Farewell
* Diferensiasi
* Review
* Refleksi
* Penutup

## Larangan

❌ Mencampur dua atau lebih tujuan dalam satu layar.

❌ Mengubah tujuan layar di tengah aktivitas.

❌ Memasukkan review di layar drill atau game di layar refleksi.

## Checklist Lolos

☑ Guru dapat menjelaskan tujuan layar dalam satu kalimat.

☑ Seluruh AKSI dan UCAP mendukung tujuan yang sama.

☑ Tidak ada aktivitas yang keluar dari tujuan layar.

## Checklist Gagal

☐ Satu layar memiliki dua tujuan atau lebih.

☐ Guru harus menebak tujuan layar.

☐ Aktivitas tidak konsisten dengan judul layar.

---

# 2. Tidak Ada Logical Jump

## Prinsip

Setiap perpindahan harus mengikuti urutan:

AKSI

↓

UCAP

↓

Respons Siswa

↓

BANTUAN (jika perlu)

↓

Catatan Penting (jika perlu)

↓

Layar Berikutnya

## Larangan

❌ Melompat ke aktivitas baru tanpa transisi.

❌ Memunculkan objek, media, atau instruksi yang belum diperkenalkan.

❌ Mengubah mode kelas tanpa sinyal perubahan.

## Checklist Lolos

☑ Guru tidak perlu menebak langkah berikutnya.

☑ Setiap layar memiliki transisi yang jelas.

☑ Alur dapat dibaca dari awal hingga akhir tanpa kebingungan.

## Checklist Gagal

☐ Aktivitas muncul tiba-tiba.

☐ Media digunakan tanpa diperkenalkan.

☐ Guru harus mengisi sendiri bagian yang hilang.

---

# 3. Field Selain UCAP Bersifat Deterministik

## Prinsip

Satu kalimat menghasilkan satu aksi yang dapat diamati.

## Larangan

❌ Tujuan implisit.

❌ Kata relatif.

❌ Instruksi multitafsir.

❌ Dua aksi berbeda dalam satu kalimat.

## Checklist Lolos

☑ Satu kalimat = satu aksi.

☑ Dua AI berbeda menghasilkan urutan aksi yang sama.

☑ Instruksi dapat diamati secara langsung.

## Checklist Gagal

☐ AI menghasilkan interpretasi berbeda.

☐ Guru harus menebak maksud penulis.

☐ Instruksi mengandung makna ganda.

---

# 4. UCAP Ramah TTS

## Prinsip

UCAP ditulis sebagai suara, bukan sebagai naskah.

## Larangan

❌ Kalimat terlalu panjang.

❌ Simbol yang mengganggu TTS.

❌ Singkatan yang tidak dapat dibaca alami.

❌ Satu paragraf berisi banyak ucapan.

## Checklist Lolos

☑ Satu ucapan satu baris.

☑ Dapat langsung dibacakan guru.

☑ Dapat langsung diproses engine TTS.

## Checklist Gagal

☐ Membutuhkan preprocessing.

☐ TTS menghasilkan jeda yang aneh.

☐ Guru perlu mengubah kalimat sebelum mengucapkannya.

---

# 5. Whole Class Terlebih Dahulu

## Prinsip

Model

↓

Latihan Bersama

↓

Aktivitas Bersama

↓

Baru Diferensiasi

## Larangan

❌ Diferensiasi sebelum semua siswa mendapat pengalaman bersama.

❌ Membagi kelas sejak awal.

## Checklist Lolos

☑ Semua siswa mengikuti pembelajaran inti.

☑ Guru hanya mengelola satu ritme kelas pada tahap awal.

## Checklist Gagal

☐ Guru harus membagi perhatian sejak awal.

☐ Sebagian siswa belum memperoleh model bersama.

---

# 6. Diferensiasi di Akhir

## Prinsip

Diferensiasi menjadi penguatan, bukan pembuka pembelajaran.

## Larangan

❌ Diferensiasi berulang di banyak layar.

❌ Membuat guru terus berpindah mode mengajar.

## Checklist Lolos

☑ Diferensiasi muncul setelah pembelajaran inti.

☑ Seluruh siswa telah memperoleh pengalaman bersama.

## Checklist Gagal

☐ Guru harus terus membagi perhatian.

☐ Alur kelas menjadi terfragmentasi.

---

# 7. Catatan Penting Hanya Berisi Constraint

## Prinsip

Catatan Penting menjawab:

"Apa yang tidak boleh terlewat?"

## Larangan

❌ Penjelasan teori.

❌ Alasan pedagogis panjang.

❌ Instruksi baru yang belum ada di AKSI.

## Checklist Lolos

☑ Singkat.

☑ Spesifik.

☑ Dapat diperiksa.

## Checklist Gagal

☐ Cue berubah menjadi paragraf penjelasan.

☐ Cue berisi aktivitas baru.

---

# 8. Human Readable + Machine Readable

## Prinsip

Satu dokumen digunakan oleh:

* Guru
* Editor
* AI
* Parser
* Generator JS
* Engine TTS

## Larangan

❌ Membuat versi manusia dan versi mesin yang berbeda.

❌ Menambahkan format yang hanya dipahami salah satu pihak.

## Checklist Lolos

☑ Guru nyaman membaca.

☑ Parser dapat memproses tanpa modifikasi.

## Checklist Gagal

☐ Guru kesulitan membaca.

☐ Parser membutuhkan aturan khusus.

---

# 9. Single Source of Truth

## Prinsip

Markdown menjadi sumber utama seluruh ekosistem.

## Larangan

❌ Mengedit JS tanpa memperbarui Markdown.

❌ Mengedit TTS tanpa memperbarui Markdown.

❌ Memiliki dua sumber yang saling berbeda.

## Checklist Lolos

☑ Semua output berasal dari Markdown.

☑ Tidak ada duplikasi sumber.

## Checklist Gagal

☐ JS dan Markdown berbeda.

☐ Perubahan harus dilakukan di banyak tempat.

---

# 10. Determinisme Meningkat Tanpa Mengurangi Keterbacaan

## Prinsip

Setiap perubahan harus:

* meningkatkan determinisme,
* mempertahankan keterbacaan manusia.

## Larangan

❌ Mengorbankan guru demi AI.

❌ Mengorbankan AI demi guru.

## Checklist Lolos

☑ Guru tetap nyaman membaca.

☑ AI tetap menghasilkan output konsisten.

## Checklist Gagal

☐ Dokumen menjadi terlalu teknis.

☐ Dokumen menjadi terlalu bebas untuk diparse.

---

# 11. Stable Schema

## Prinsip

Nama field, urutan field, dan struktur dokumen harus identik di seluruh TP.

Standar:

LAYAR

AKSI

UCAP

BANTUAN

Catatan Penting

Darurat

## Aturan Marker Pedagogis

Marker pedagogis ditulis inline di dalam field teks menggunakan token kanonik berikut.

Token wajib ditulis persis seperti di bawah — tidak boleh divariasikan:

👂 LISTEN FIRST

🗣 TOGETHER

⚡ MICRO-FREEZE

🔁

Marker selain keempat token di atas tidak diperbolehkan.

## Larangan

❌ Mengganti nama field.

❌ Mengubah urutan field.

❌ Menambah atau menghapus field tanpa revisi spesifikasi resmi.

## Checklist Lolos

☑ Semua TP memiliki struktur yang sama.

☑ Parser dapat menggunakan satu schema untuk seluruh TP.

☑ Reviewer dapat menggunakan checklist yang sama.

## Checklist Gagal

☐ TP memiliki struktur berbeda.

☐ Parser membutuhkan aturan khusus untuk setiap TP.

☐ Review menjadi tidak konsisten.

---

# Kriteria Kelulusan TP

Teaching Prompt hanya dapat dinyatakan **FINAL** apabila:

☑ Lolos seluruh 11 Standar Emas.

☑ Tidak ditemukan logical jump.

☑ Seluruh field selain UCAP bersifat deterministik.

☑ Seluruh UCAP ramah TTS.

☑ Struktur identik dengan schema resmi.

☑ Dapat diparse menjadi JS tanpa modifikasi manual.

☑ Dapat digunakan guru tanpa penjelasan tambahan.

**Jika satu saja checklist gagal, TP belum boleh dinyatakan FINAL.**
