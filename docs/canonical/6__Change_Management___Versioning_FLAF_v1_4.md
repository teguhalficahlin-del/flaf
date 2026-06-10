# CHANGE MANAGEMENT & VERSIONING

## FLAF v1.4

Dokumen ini merupakan spesifikasi resmi pengelolaan perubahan seluruh ekosistem FLAF.

Tujuan dokumen ini adalah memastikan perubahan dapat dilakukan secara terkontrol tanpa merusak konsistensi Teaching Prompt (TP), parser, generator JS, engine TTS, maupun proses review.

---

# 1. PRINSIP

Stabilitas lebih penting daripada perubahan.

Perubahan hanya dilakukan apabila memberikan manfaat yang jelas terhadap:

* kualitas pembelajaran,
* determinisme,
* keterbacaan,
* maintainability,
* atau kompatibilitas sistem.

---

# 2. SINGLE VERSION

Dalam satu waktu hanya boleh ada satu versi resmi yang aktif.

Contoh:

FLAF v1.4

Seluruh dokumen wajib mengacu pada versi tersebut.

---

# 3. VERSIONING

Gunakan format:

MAJOR.MINOR

Contoh:

v1.0

v1.1

v1.2

v2.0

---

# 4. MAJOR VERSION

Major Version digunakan apabila terjadi perubahan yang memengaruhi kompatibilitas.

Contoh:

* perubahan schema,
* perubahan nama field,
* perubahan struktur TP,
* perubahan Generation Protocol.

Major Version dapat menyebabkan parser lama tidak kompatibel.

---

# 5. MINOR VERSION

Minor Version digunakan apabila:

* penambahan contoh,
* perbaikan redaksi,
* penambahan glossary,
* penambahan checklist,

tanpa mengubah schema.

Minor Version wajib tetap kompatibel.

---

# 6. PATCH

Patch hanya digunakan untuk:

* typo,
* ejaan,
* format,
* perbaikan nonfungsional.

Patch tidak boleh mengubah makna.

---

# 7. STANDAR PERUBAHAN

Setiap perubahan wajib menjawab:

Apa masalahnya?

Mengapa perlu diubah?

Apa dampaknya?

Apa manfaatnya?

Apa risiko jika tidak diubah?

---

# 8. LARANGAN

Jangan melakukan perubahan hanya karena:

* preferensi pribadi,
* gaya bahasa,
* sinonim,
* atau kebiasaan penulis.

---

# 9. BREAKING CHANGE

Breaking Change adalah perubahan yang menyebabkan:

* parser gagal,
* checklist berubah,
* schema berubah,
* generation protocol berubah,
* output JS berubah.

Breaking Change wajib melalui revisi Major Version.

---

# 10. NON BREAKING CHANGE

Non Breaking Change meliputi:

* contoh tambahan,
* penjelasan tambahan,
* dokumentasi,
* glossary baru.

Schema tetap sama.

---

# 11. DEPRECATION

Istilah lama tidak boleh langsung dihapus.

Status:

ACTIVE

DEPRECATED

REMOVED

Contoh:

Teacher Autonomy

↓

DEPRECATED

↓

Fleksibilitas Guru

↓

REMOVED

Perubahan dilakukan bertahap.

---

# 12. KOMPATIBILITAS

Standar baru wajib menjaga kompatibilitas dengan:

Prompt

Standar Penulisan TP

Generation Protocol

Checklist

Glossary

Parser

Generator JS

Engine TTS

---

# 13. PROSEDUR PERUBAHAN

Usulan

↓

Analisis

↓

Evaluasi Dampak

↓

Persetujuan

↓

Perubahan Dokumen

↓

Validasi

↓

Release

↓

Implementasi

---

# 14. DOKUMEN YANG WAJIB DIPERBARUI

Jika terjadi perubahan resmi, seluruh dokumen berikut wajib diperiksa.

☐ Prompt Operasional

☐ Standar Penulisan TP

☐ Generation Protocol

☐ Checklist Kelolosan TP

☐ Glossary & Controlled Vocabulary

☐ Parser

☐ Generator JS

☐ Engine TTS

---

# 15. KRITERIA PENOLAKAN

Perubahan harus ditolak apabila:

☐ mengurangi determinisme,

☐ mengurangi keterbacaan,

☐ menambah multitafsir,

☐ mengubah schema tanpa alasan kuat,

☐ meningkatkan kompleksitas tanpa manfaat nyata.

---

# 16. KRITERIA PENERIMAAN

Perubahan dapat diterima apabila:

☑ meningkatkan kualitas,

☑ meningkatkan konsistensi,

☑ meningkatkan determinisme,

☑ mempertahankan human readability,

☑ mempertahankan machine readability,

☑ tidak merusak Stable Schema.

---

# 17. GOLDEN RULE

Setiap perubahan harus memenuhi prinsip berikut.

Determinisme meningkat.

Keterbacaan manusia tetap terjaga.

Stable Schema tetap dipertahankan.

Single Source of Truth tetap berlaku.

Jika satu saja prinsip tersebut dilanggar, perubahan tidak boleh diterapkan.

---

# 18. RELEASE POLICY

Teaching Prompt hanya boleh menggunakan versi yang telah berstatus:

RELEASE

Draft

Review

Deprecated

tidak boleh digunakan sebagai acuan produksi.

---

# 19. STATUS FINAL

Perubahan hanya dinyatakan resmi apabila:

☑ seluruh dokumen terkait telah diperbarui,

☑ seluruh checklist lulus,

☑ generation protocol tetap kompatibel,

☑ glossary tetap konsisten,

☑ parser tetap berjalan,

☑ generator JS tetap berjalan,

☑ engine TTS tetap berjalan,

☑ seluruh TP baru dapat dihasilkan tanpa perubahan prompt.

Dengan demikian, seluruh ekosistem FLAF tetap stabil, konsisten, dan dapat dipelihara dalam jangka panjang tanpa menimbulkan fragmentasi standar.
