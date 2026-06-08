# AUDIT OS FLAF
Versi 3.0

---

# BAB 1 — FILOSOFI

TP bukan dokumen administrasi.
TP adalah alat kerja yang digunakan guru saat mengajar.

Kualitas TP diukur dari keterpakaian nyata:

* guru membaca → langsung melakukan;
* siswa mendengar → langsung memahami dan meniru;
* TTS memutar → audio alami dan konsisten.

TP belum berkualitas apabila pengguna masih harus:

* menafsirkan;
* menebak;
* mengingat informasi yang tidak tertulis;
* memilih alternatif;
* menyusun ulang urutan;
* mengambil keputusan operasional tambahan.

---

# BAB 2 — MODEL PENGGUNA

## Guru

* Berdiri di depan 20–30 siswa.
* Memegang HP dengan satu tangan.
* Hanya memiliki waktu sekitar 3 detik untuk
  membaca instruksi berikutnya.
* Harus tetap mengelola kelas sambil membaca TP.

## Siswa

* Berada pada usia sasaran TP.
* Baru belajar bahasa Inggris.
* Memahami bahasa melalui contoh, pengulangan,
  dan konteks.
* Memiliki kapasitas perhatian yang terbatas.

## Sistem TTS

* Seluruh UCAP diasumsikan diputar melalui TTS.
* UCAP harus menghasilkan audio yang alami,
  jelas, konsisten, dan mudah ditiru.

---

# BAB 3 — UJI 3 DETIK

## Instruksi Guru

Guru membaca → 3 detik → langsung melakukan.

Jika masih perlu membaca ulang, menafsirkan,
memilih, mengingat, atau menyusun ulang →
instruksi belum memenuhi standar.

## UCAP

Siswa mendengar → langsung memahami dan meniru.

Jika tidak → UCAP belum memenuhi standar.

---

# BAB 4 — STANDAR UCAP

## 4.1 Natural Spoken English

Gunakan bentuk yang lazim dalam percakapan nyata.
Prioritaskan spoken English dibanding written English.

## 4.2 Child First

UCAP ditulis untuk siswa, bukan untuk menunjukkan
kekayaan kosakata guru.

## 4.3 Satu Tujuan Satu UCAP

Satu UCAP hanya memiliki satu tujuan komunikasi:
bertanya, memberi instruksi, atau memberi pujian.
Jangan digabung dalam satu UCAP.

## 4.4 Mudah Ditiru

UCAP harus mudah ditiru setelah satu kali dengar.
Prioritaskan chunk pendek yang dapat ditiru
dalam satu tarikan napas.

## 4.5 TTS Friendly

Hindari:
* simbol yang tidak perlu;
* tanda baca berlebihan;
* em-dash — dalam UCAP;
* ellipsis unicode … — gunakan ... ASCII;
* kurung siku [...] dalam UCAP;
* karakter khusus seperti ~.

## 4.6 Konsistensi Pola

Gunakan pola yang sama sepanjang TP.
Hindari variasi yang tidak memiliki
tujuan pedagogis.

---

# BAB 5 — STANDAR REKOMENDASI

Setiap rekomendasi wajib:

* mempertahankan tujuan pedagogis;
* menghilangkan kebutuhan interpretasi;
* mengurangi keputusan pengguna;
* mengurangi beban kognitif;
* meningkatkan keterpakaian;
* menggunakan redaksi sesingkat mungkin;
* mudah dibaca sekali lihat;
* mudah diucapkan;
* mudah diproses TTS.

Rekomendasi tidak boleh:

* mengubah tujuan pembelajaran;
* mengubah strategi pedagogis;
* menambah aktivitas baru;
* menambah beban guru;
* memindahkan konten ke field lain
  kecuali field tersebut sudah ada dan relevan.

---

# BAB 6 — PRIORITAS KONFLIK

Jika terjadi konflik antar kriteria:

1. Keterpakaian
2. Kejelasan
3. Tidak memerlukan keputusan tambahan
4. Tidak ambigu
5. Konsistensi
6. Ekonomi redaksi

Prioritas lebih tinggi tidak boleh dikorbankan
demi prioritas lebih rendah.

---

# BAB 7 — ATURAN GLOBAL WAJIB

Objek audit adalah field yang memenuhi dua syarat sekaligus:

1. dirender oleh runtime mengajar; dan
2. menampilkan teks dari data TP secara langsung ke layar guru.

Field yang dirender runtime tetapi tidak menampilkan teks dari data TP
— karena runtime menggantikannya dengan string hardcoded —
bukan objek audit dan tidak boleh diaudit.

## DAFTAR OBJEK AUDIT

Hanya tujuh field berikut yang menjadi objek audit.
Tidak ada field lain yang boleh diaudit.

1. preOpening.teks
2. preOpening.cue
3. langkah.teks
4. langkah.bantuan
5. langkah.cue
6. langkah.darurat
7. langkah.diferensiasi

## FIELD YANG DIKECUALIKAN

Field berikut dikecualikan dari audit karena runtime
tidak merender teks dari data TP — runtime hanya membaca
nilainya sebagai switch internal dan menampilkan
string hardcoded milik runtime sendiri:

* langkah.energi
* langkah.tipe
* langkah.interaction_mode
* langkah.blok
* langkah.assessment_overlay

Auditor dilarang memeriksa, mengomentari, atau memberikan
rekomendasi terhadap field yang dikecualikan di atas.

## LARANGAN GLOBAL

Larangan berikut berlaku tanpa pengecualian:

* Auditor hanya boleh memeriksa 7 field objek audit.
* Auditor dilarang memeriksa field lain yang ditemukan
  dalam file TP, seberapapun relevan field tersebut terlihat.
* Auditor dilarang mencantumkan temuan dari field
  di luar objek audit ke dalam checklist maupun tabel temuan.
* Auditor dilarang memberi prioritas, rekomendasi,
  atau komentar terhadap field di luar objek audit.
* Membaca file TP secara utuh diizinkan untuk memahami
  konteks — tetapi hanya 7 field objek audit yang boleh
  dinilai dan dilaporkan.

## ATURAN FIELD KOSONG

Field opsional boleh kosong.

Field kosong tidak diaudit kontennya dan dicatat sebagai:

✅ kosong, tidak perlu diaudit

Seluruh field yang diaudit wajib memenuhi seluruh ketentuan berikut.

## LULUS

□ Memiliki satu makna yang jelas.
□ Dapat dipahami sekali baca.
□ Dapat langsung digunakan oleh pengguna yang dituju.
□ Tidak memerlukan interpretasi tambahan.
□ Tidak memerlukan inferensi.
□ Menggunakan istilah yang langsung dipahami pengguna sasaran.
□ Tidak menambah beban kognitif yang tidak perlu.
□ Seluruh keputusan operasional yang diperlukan sudah ditetapkan.
□ Tidak bertentangan dengan instruksi lain.
□ Tidak memuat informasi yang tidak perlu.
□ Teks instruksi guru (non-UCAP) tidak menggunakan istilah asing.

## GAGAL

□ Ambigu.
□ Multitafsir.
□ Inferensi.
□ Istilah asing atau jargon pada teks instruksi guru (non-UCAP).
□ Keputusan operasional yang belum ditetapkan.
□ Konflik instruksi.
□ Redundansi yang tidak perlu.

## CATATAN: UCAP DAN ISTILAH ASING

Segmen yang diputar melalui TTS (segmen UCAP: dalam langkah.teks
dan bagian UCAP dalam preOpening.teks) dikecualikan dari larangan
istilah asing. Segmen UCAP menggunakan bahasa Inggris karena
itulah yang diperdengarkan kepada siswa.

Larangan istilah asing hanya berlaku untuk teks instruksi guru
di luar segmen UCAP.

---

# BAB 8 — CHECKLIST KHUSUS PER FIELD

## preOpening.teks

### LULUS

□ Guru dapat langsung melakukan.
□ Jika ada UCAP, UCAP natural.
□ Jika ada UCAP, mudah dipahami siswa.
□ Jika ada UCAP, ramah TTS.

### GAGAL

□ UCAP tidak natural.
□ UCAP tidak ramah TTS.

---

## preOpening.cue

### LULUS

□ Singkat.
□ Mudah dipindai.
□ Berfungsi sebagai pengingat.

### GAGAL

□ Menjadi instruksi utama.
□ Menjelaskan prosedur panjang.

---

## langkah.teks

### LULUS

□ Linear.
□ Konkret.
□ Operasional.
□ Dapat dilakukan setelah sekali baca.
□ Jika ada UCAP, natural.
□ Jika ada UCAP, mudah dipahami siswa.
□ Jika ada UCAP, mudah ditiru.
□ Jika ada UCAP, ramah TTS.

### GAGAL

□ Lompat logika.
□ Kurang operasional.
□ Alur tidak natural.
□ Beban kognitif berlebihan.

---

## langkah.bantuan

### LULUS

□ Bantuan konkret.
□ Menjaga aktivitas utama tetap berjalan.

### GAGAL

□ Mengubah aktivitas.
□ Mengubah tujuan.
□ Membuka aktivitas baru.

---

## langkah.cue

### LULUS

□ Singkat.
□ Mudah dipindai.
□ Berfungsi sebagai pengingat.

### GAGAL

□ Menjadi instruksi utama.
□ Menjelaskan prosedur panjang.

---

## langkah.darurat

### LULUS

□ Jalur alternatif sudah ditentukan.
□ Dapat langsung dilaksanakan.

### GAGAL

□ Guru harus berimprovisasi.

---

## langkah.diferensiasi

### LULUS

□ Memberi dukungan atau tantangan tambahan.
□ Tetap dalam aktivitas yang sama.
□ Tujuan pembelajaran tetap sama.

### GAGAL

□ Aktivitas baru.
□ Tujuan baru.
□ Remedial terpisah.

---

# BAB 9 — CHECKLIST FIELD

Sebelum Quality Gate, auditor wajib menampilkan checklist seluruh field dengan status:

✅ = sudah diperiksa

⬜ = belum diperiksa

Audit tidak boleh masuk Quality Gate apabila masih ada field ⬜.

## ATURAN FORMAT CHECKLIST

* Checklist hanya memuat 7 field objek audit di bawah ini.
* Auditor dilarang menambah field lain ke dalam checklist.
* Auditor dilarang membagi checklist ke dalam bagian atau
  kategori tambahan (PART A, PART B, metadata, dsb.).
* Format checklist adalah flat list — persis seperti di bawah ini.

## PRE-OPENING

⬜ preOpening.teks
⬜ preOpening.cue

---

## UNTUK SETIAP LANGKAH YANG ADA PADA TP

⬜ langkah.teks
⬜ langkah.bantuan
⬜ langkah.cue
⬜ langkah.darurat
⬜ langkah.diferensiasi

---

Catatan:

* Jumlah langkah mengikuti TP yang sedang diaudit.
* Field tidak ada di TP → ✅ tidak ada di TP ini.
* Field kosong → ✅ kosong, tidak perlu diaudit.
* Seluruh field diaudit menggunakan BAB 7 dan BAB 8.
* Field di luar daftar ini tidak boleh diaudit.

## ATURAN FORMAT TABEL TEMUAN

* Tabel temuan hanya boleh memuat temuan dari 7 field objek audit.
* Temuan pada field di luar objek audit tidak boleh dicantumkan
  dalam tabel temuan, tidak boleh diberi prioritas, dan tidak
  boleh diberi rekomendasi.
* Setiap baris tabel temuan wajib mencantumkan nama field
  yang merupakan salah satu dari 7 field objek audit.
* Jika auditor menemukan masalah pada field di luar objek audit,
  temuan tersebut diabaikan sepenuhnya.