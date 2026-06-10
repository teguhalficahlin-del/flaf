# CANVAS CONTINUITY & GENERATION PROTOCOL

## FLAF v1.4

Dokumen ini merupakan spesifikasi resmi proses generasi Teaching Prompt (TP) FLAF.

Dokumen ini tidak mengatur isi pembelajaran, melainkan mengatur bagaimana AI menghasilkan dokumen yang konsisten, utuh, deterministik, dan siap digunakan sebagai Single Source of Truth.

---

# 1. TUJUAN

Memastikan seluruh Teaching Prompt yang dihasilkan:

* memenuhi Standar Emas FLAF,
* bebas logical jump,
* memiliki Stable Schema,
* siap diparse AI,
* siap dikonversi menjadi JS,
* siap digunakan engine TTS,
* tetap utuh walaupun ditampilkan dalam beberapa canvas.

---

# 2. PRINSIP UTAMA

Prioritaskan kualitas daripada jumlah output.

AI tidak boleh:

* memadatkan isi,
* meringkas isi,
* mengurangi isi,
* menghilangkan bagian,
* atau mengubah struktur,

hanya karena keterbatasan panjang output.

---

# 3. SINGLE SOURCE OF TRUTH

Seluruh output berasal dari satu sumber.

```text
Standar Penulisan TP
        │
        ▼
Prompt Operasional
        │
        ▼
Generation Protocol
        │
        ▼
Canonical TP
        │
        ▼
Canvas Output
```

Canonical TP menjadi sumber kebenaran tunggal.

Canvas hanya merupakan representasi Canonical TP.

---

# 4. URUTAN GENERASI

AI wajib mengikuti urutan berikut.

## Tahap 1

Analisis dokumen.

## Tahap 2

Analisis Standar Emas FLAF.

## Tahap 3

Generate Canonical TP secara utuh.

## Tahap 4

Lakukan validasi terhadap Canonical TP.

## Tahap 5

Bekukan Canonical TP (Document Freeze).

## Tahap 6

Tentukan jumlah canvas dan pembagian layar.

## Tahap 7

Tampilkan Canonical TP melalui beberapa canvas tanpa perubahan isi.

---

# 5. CANONICAL TP

Canonical TP wajib memuat:

* Persiapan Media
* Layar Ringkasan Sesi
* Seluruh LAYAR

Canonical TP harus selesai sebelum Canvas 1 ditampilkan.

---

# 6. DOCUMENT FREEZE

Setelah Canonical TP selesai dan lolos validasi:

☑ isi tidak boleh berubah,

☑ schema tidak boleh berubah,

☑ istilah tidak boleh berubah,

☑ urutan layar tidak boleh berubah.

---

# 7. PERENCANAAN CANVAS

Sebelum menghasilkan output, AI wajib menentukan:

* jumlah canvas,
* isi setiap canvas,
* batas layar setiap canvas.

Pembagian dapat berubah sesuai panjang isi.

---

# 8. ATOMIC SCREEN RULE

LAYAR adalah unit atomik.

Satu layar tidak boleh:

* dipotong,
* dibagi,
* dipindahkan sebagian,
* diringkas,
* diteruskan ke canvas berikutnya.

Jika sisa ruang tidak cukup:

pindahkan seluruh layar ke canvas berikutnya.

---

# 9. CANVAS CONTINUITY

Canvas berikutnya tidak melakukan regenerasi.

Canvas berikutnya hanya menampilkan bagian Canonical TP yang belum ditampilkan.

AI tidak boleh mengubah:

* schema,
* nama field,
* istilah,
* format,
* gaya penulisan,
* urutan layar,
* isi Canonical TP.

---

# 10. STABLE SCHEMA

Seluruh canvas wajib menggunakan schema yang identik.

Urutan field:

LAYAR

AKSI

UCAP

BANTUAN

Catatan Penting

Darurat

Tidak boleh berubah.

---

# 11. FIELD INTEGRITY

AKSI

* satu kalimat = satu aksi,
* observable,
* deterministik.

UCAP

* ramah TTS,
* satu ucapan satu baris.

BANTUAN

* tindakan guru,
* bukan teori.

Catatan Penting

* satu constraint,
* bukan penjelasan.

Darurat

* jalur alternatif,
* dapat langsung dilaksanakan.

Ringkasan Sesi

* tabel tiga kolom: Layar, Judul, Tujuan,
* tujuan ditulis dengan guru sebagai subjek,
* singkat dan mencerminkan inti kegiatan layar.

---

# 12. LARANGAN

AI dilarang:

* memotong layar,
* menghilangkan field,
* menghilangkan AKSI,
* menghilangkan UCAP,
* menghilangkan BANTUAN,
* menghilangkan Catatan Penting,
* menghilangkan Darurat,
* mengganti schema,
* membuat patch,
* membuat placeholder,
* meringkas isi,
* mengubah Canonical TP setelah Document Freeze.

---

# 13. LARANGAN ESTIMASI

AI tidak boleh mengasumsikan hasil akan muat.

Jika terdapat keraguan:

gunakan canvas tambahan.

Lebih baik menggunakan satu canvas lebih banyak daripada memotong satu layar.

---

# 14. GENERATION PRIORITY

Prioritas generasi:

1. Memenuhi Standar Emas FLAF.
2. Menghasilkan Canonical TP.
3. Menjaga integritas satu layar.
4. Menjaga Stable Schema.
5. Menjaga determinisme.
6. Menyesuaikan jumlah canvas.

Jumlah canvas bukan prioritas.

---

# 15. FINAL VALIDATION

Validasi dilakukan terhadap Canonical TP sebelum Canvas ditampilkan.

Pastikan:

☑ tidak ada layar hilang,

☑ tidak ada layar ganda,

☑ tidak ada layar terpotong,

☑ schema identik,

☑ istilah konsisten,


☑ seluruh field deterministik,

☑ seluruh UCAP ramah TTS,

☑ seluruh Catatan Penting hanya berisi constraint,

☑ seluruh Standar Emas FLAF terpenuhi.

---

# 16. STATUS FINAL

Teaching Prompt hanya boleh dinyatakan FINAL apabila:

* Canonical TP telah selesai,
* Canonical TP telah lolos validasi,
* Canonical TP telah berstatus Document Freeze,
* seluruh Canvas merupakan representasi identik dari Canonical TP,
* tidak ditemukan pelanggaran Generation Protocol,
* tidak ditemukan pelanggaran Standar Emas FLAF.

Jika satu saja pemeriksaan gagal, dokumen belum boleh dinyatakan FINAL dan wajib direvisi sebelum digunakan.
