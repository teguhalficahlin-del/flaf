# GLOSSARY & CONTROLLED VOCABULARY

## FLAF v1.6

Dokumen ini merupakan spesifikasi resmi kosakata yang digunakan dalam seluruh Teaching Prompt (TP) FLAF.

Tujuan dokumen ini adalah memastikan seluruh TP memiliki:

* istilah yang konsisten,
* struktur yang stabil,
* hasil parser yang deterministik,
* hasil review yang konsisten,
* hasil konversi JS yang stabil.

---

# 1. PRINSIP

Setiap konsep hanya memiliki satu istilah resmi.

Gunakan istilah resmi.

Jangan menggunakan sinonim.

---

# 2. NAMA FIELD RESMI

Gunakan nama field berikut.

LAYAR

AKSI

UCAP

BANTUAN

Catatan Penting

Darurat

---

# 3. NAMA BAGIAN RESMI

Gunakan istilah berikut.

Persiapan Media

Ringkasan Sesi

Pembuka

Inti

Penutup

Penutup Sesi

---

# 4. LABEL AKTIVITAS RESMI

Gunakan:

Listen First

Together

Konteks Nyata

Diferensiasi

Review

Refleksi

Game

Drill

Chant

Farewell

Jangan mengganti nama label tanpa revisi spesifikasi resmi.

---

# 5. TOKEN KANONIK MARKER PEDAGOGIS

Marker pedagogis ditulis inline di dalam field teks.

Gunakan token berikut persis seperti tertulis — tidak boleh divariasikan:

👂 LISTEN FIRST

🗣 TOGETHER

⚡ MICRO-FREEZE

🔁

Marker diproses oleh MARKER_REGISTRY terpusat di runtime.

Marker selain keempat token di atas tidak diperbolehkan.

---

# 5b. NOTASI RESMI RESPONS SISWA

Respons siswa ditulis dengan notasi berikut — bukan bagian dari field UCAP:

→ Siswa: "[teks respons]"

Notasi ini muncul setelah baris UCAP yang meminta respons.
Notasi ini tidak diproses TTS.
Tanda panah → di luar notasi ini tidak diperbolehkan di dalam field UCAP.

---

# 6. KATA KERJA RESMI AKSI

Gunakan kata berikut.

Pegang

Turunkan

Angkat

Tempel

Tunjuk

Duduk

Berdiri

Angguk

Lambaikan

Ambil

Simpan

Catat

Peragakan

Tepuk

Jelaskan

Ajak

Tunggu

Gerakkan

Dekatkan

Condongkan

---

# 7. KATA YANG DILARANG PADA AKSI

Jangan menggunakan:

sesuai kebutuhan

secukupnya

seperlunya

bila memungkinkan

usahakan

dinamis

antusias

perlahan

cepat

cukup

singkat

optimal

idealnya

semaksimal mungkin

atau kata lain yang membutuhkan interpretasi.

---

# 8. STANDAR AKSI

Setiap AKSI wajib:

☑ satu kalimat,

☑ satu aksi,

☑ observable,

☑ deterministik.

Contoh:

Benar

Pegang Kiki.

Turunkan boneka.

Tunjuk kartu.

Salah

Pegang Kiki sambil mengajak siswa memperhatikan.

---

# 9. STANDAR UCAP

UCAP ditulis sebagai suara.

Aturan:

☑ satu ucapan satu baris,

☑ natural,

☑ mudah dibacakan,

☑ ramah TTS.

Jangan:

* paragraf panjang,
* simbol yang mengganggu,
* singkatan,
* placeholder,
* "let us" — gunakan "let's".

---

# 10. STANDAR BANTUAN

BANTUAN selalu berupa tindakan guru.

Benar

Angguk kepala.

Ucapkan:

"Good!"

Salah

Berikan motivasi.

Dorong siswa lebih percaya diri.

---

# 11. STANDAR CUE KRITIS

Catatan Penting hanya berisi constraint.

Benar

Demo hanya satu kali.

Tunggu respons sebelum lanjut.

Salah

Demo dilakukan satu kali agar siswa lebih fokus.

---

# 11b. STANDAR DARURAT

Darurat berisi jalur alternatif yang dapat langsung dilaksanakan.

Benar

Waktu ≤10 menit → lewati game, lanjut ke layar berikutnya.

Salah

Jika waktu tidak cukup, guru bisa mempertimbangkan untuk melewati beberapa aktivitas.

---

# 12. KONSISTENSI ISTILAH

Satu konsep = satu istilah.

Jika menggunakan:

Catatan Penting

maka seluruh TP wajib menggunakan:

Catatan Penting

bukan:

Catatan

Tips

Pengingat

Perhatian

atau istilah lain.

---

# 13. KONSISTENSI GAYA PENULISAN

Seluruh TP wajib menggunakan gaya yang sama.

AKSI

menggunakan kalimat imperatif.

UCAP

menggunakan kalimat yang akan diucapkan.

BANTUAN

menggunakan tindakan guru.

Catatan Penting

menggunakan constraint.

---

# 14. LARANGAN SINONIM

Jangan mengganti istilah resmi dengan sinonim.

Contoh:

Gunakan

Pegang

Jangan

Genggam

Bawa

Ambil dengan tangan

---

Gunakan

Turunkan

Jangan

Letakkan ke bawah

Posisikan lebih rendah

---

Gunakan

Tunjuk

Jangan

Arahkan jari

Berikan isyarat

---

# 15. ISTILAH YANG DIPERTAHANKAN

Istilah berikut dipertahankan tanpa terjemahan di semua field selain UCAP:

gestur · walk and talk · chant · reset

---

# 16. UNGKAPAN TRANSISI RESMI

Gunakan ungkapan berikut untuk transisi kelas dari mode aktif ke mode tenang:

```
AKSI: Angkat tangan untuk meminta perhatian kelas.
AKSI: Tunggu sampai semua siswa diam dan menatap guru.
UCAP: "Hands down."
UCAP: "Eyes on me."
```

Jangan mengganti ungkapan ini dengan sinonim.

---

# 16b. UNGKAPAN AJAKAN MENGUCAPKAN BERSAMA

Gunakan ungkapan berikut untuk mengajak siswa berproduksi lisan secara serentak. Pilih ungkapan sesuai konteks.

"Say it with me!"

Digunakan saat guru mengajak siswa mengucapkan bersama-sama dengan guru.

"Say it together!"

Digunakan saat guru mengajak siswa mengucapkan bersama-sama tanpa guru ikut mengucapkan.

"Your turn!"

Digunakan saat guru mengajak siswa berproduksi secara serentak dengan konten individual, misalnya menyebut nama masing-masing.

Jangan mengganti ungkapan ini dengan sinonim.

---

# 17. KONTROL PERUBAHAN

Perubahan istilah resmi hanya boleh dilakukan apabila:

* seluruh TP direvisi,
* parser diperbarui,
* checklist diperbarui,
* generation protocol diperbarui.

Perubahan sebagian tidak diperbolehkan.

---

# 18. TUJUAN DOKUMEN

Dokumen ini memastikan bahwa:

* dua AI berbeda menghasilkan istilah yang sama,

* dua reviewer berbeda menghasilkan audit yang sama,

* parser tidak memerlukan aturan khusus,

* generator JS dapat menggunakan satu schema,

* seluruh Teaching Prompt FLAF terasa ditulis oleh satu sistem dengan satu bahasa dan satu filosofi.

---

# ATURAN FINAL

Jika terdapat konflik antara preferensi penulis dan Glossary & Controlled Vocabulary FLAF v1.6,

maka dokumen ini menjadi sumber kebenaran resmi.

Seluruh Teaching Prompt wajib mengikuti kosakata yang ditetapkan dalam dokumen ini.
