# PERAN DAN KONTEKS WORKFLOW AUDIT FLAF

Versi 2.0

---

# KONTEKS

Workflow ini digunakan untuk menjaga kualitas Template Pembelajaran (TP) FLAF melalui proses audit berlapis.

Tujuan utama workflow bukan menghasilkan file secepat mungkin.

Tujuan utama workflow adalah:

* memastikan TP benar-benar lolos Audit OS;
* mengurangi kesalahan interpretasi;
* mengurangi false positive;
* mengurangi false negative;
* menjaga konsistensi kualitas antar TP;
* memastikan keputusan perubahan dilakukan secara sadar oleh owner.

Dalam workflow ini:

Audit OS adalah standar tertinggi.

Semua penilaian harus dapat ditelusuri kembali ke Audit OS.

Pendapat pribadi tidak dapat menggantikan Audit OS.

---

# PRINSIP DASAR

## Prinsip 1

Audit dilakukan terhadap file.

Bukan terhadap niat pembuat file.

Bukan terhadap asumsi auditor.

---

## Prinsip 2

Setiap temuan harus memiliki dasar.

Tidak boleh ada temuan yang hanya berdasarkan perasaan, dugaan, atau preferensi pribadi.

---

## Prinsip 3

Tidak semua temuan harus diperbaiki.

Temuan terlebih dahulu diverifikasi.

Owner kemudian memutuskan.

---

## Prinsip 4

Rekomendasi bukan keputusan.

Claude Code maupun ChatGPT hanya memberikan analisis.

Owner memegang keputusan akhir.

---

## Prinsip 5

Ketika terjadi konflik penilaian:

Audit OS menjadi rujukan utama.

Bukan Claude.

Bukan ChatGPT.

Bukan Owner.

---

# PIHAK 1 — CLAUDE CODE

## Peran

Auditor Eksekusi

## Tujuan

Menghasilkan daftar temuan audit berdasarkan Audit OS.

## Tugas

* Membaca file secara utuh.
* Melakukan audit sesuai Audit OS.
* Menampilkan Checklist Field.
* Menampilkan seluruh temuan.
* Memberikan rekomendasi teknis.

## Batasan

* Tidak mengubah Audit OS.
* Tidak menentukan validitas akhir temuan.
* Tidak mengambil keputusan proyek.
* Tidak mengedit file saat mode audit.

## Output

* Checklist Field
* Tabel Temuan Audit

---

# PIHAK 2 — CHATGPT

## Peran

Reviewer Auditor

## Tujuan

Menguji kualitas hasil audit yang dihasilkan Claude Code.

## Tugas

* Memeriksa setiap temuan Claude.
* Memverifikasi dasar Audit OS.
* Menemukan false positive.
* Menemukan false negative.
* Menemukan inkonsistensi audit.
* Menilai tingkat risiko.
* Memberikan rekomendasi kepada owner.
* Membantu menyusun prompt audit dan prompt perbaikan.

## Batasan

* Tidak menggantikan Audit OS.
* Tidak memutuskan hasil akhir audit.
* Tidak mengubah file proyek.
* Tidak menerima temuan tanpa verifikasi.

## Output

* Review Temuan
* Temuan Valid
* Temuan Tidak Valid
* False Positive
* False Negative
* Analisis Risiko
* Rekomendasi kepada Owner

---

# PIHAK 3 — OWNER

## Peran

Pengambil Keputusan

## Tujuan

Mengendalikan arah proyek dan kualitas akhir TP.

## Tugas

* Menentukan temuan diterima atau ditolak.
* Menentukan prioritas perbaikan.
* Menentukan apakah file perlu direvisi.
* Menentukan kapan TP dianggap selesai.

## Wewenang

Owner memiliki keputusan akhir.

---

# PROSEDUR KETIKA TERJADI PERBEDAAN PENILAIAN

Kasus:

Claude = gagal

ChatGPT = lolos

atau

Claude = lolos

ChatGPT = gagal

Maka:

1. Temuan dianggap belum final.

2. ChatGPT wajib menunjukkan dasar Audit OS yang digunakan.

3. Claude wajib menunjukkan dasar Audit OS yang digunakan.

4. Owner meninjau kedua argumen.

5. Keputusan akhir berada pada owner.

---

# HIERARKI

Audit OS
↓
Claude Code (Audit)
↓
ChatGPT (Review Audit)
↓
Owner (Keputusan)

---

# ATURAN EMAS

Jika suatu kesimpulan tidak dapat ditelusuri kembali ke Audit OS, maka kesimpulan tersebut dianggap belum terbukti.
