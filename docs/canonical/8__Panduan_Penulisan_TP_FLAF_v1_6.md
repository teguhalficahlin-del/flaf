# PANDUAN PENULISAN TEACHING PROMPT (TP)

## FLAF v1.6

Dokumen ini berisi panduan konkret penulisan setiap field Teaching Prompt FLAF.

Gunakan dokumen ini sebagai acuan saat menulis atau merevisi Canonical TP.

---

# 1. AKSI

## Prinsip

Satu kalimat = satu aksi = satu gerakan yang dapat diamati.

## Benar

```
AKSI: Berdiri di pintu.
AKSI: Pegang Kiki di tangan kiri.
AKSI: Sambut siswa satu per satu saat masuk.
```

## Salah

```
AKSI: Berdiri di pintu sambil memegang Kiki dan menyambut siswa.
```
❌ Tiga aksi digabung dalam satu kalimat.

```
AKSI: Hubungkan materi dengan situasi di rumah.
```
❌ Tidak observable. Guru harus menebak caranya.

```
AKSI: Bagi kelas menjadi dua kelompok.
```
❌ Tidak ada mekanisme konkret. Guru harus memutuskan sendiri.

## Aturan

- Gunakan kata kerja imperatif: Pegang, Turunkan, Angkat, Tempel, Tunjuk, Tepuk, Ambil, Simpan, Catat, Lambaikan, Condongkan, Angguk, Tunggu, Peragakan.
- Jangan gunakan kata: hubungkan, perkenalkan, jelaskan konsep, bagi kelas, motivasi, dorong.
- Jangan gunakan "jeda sebentar" — tulis durasi konkret sesuai konteks layar: "Tunggu 2 detik", "Tunggu 3 detik", dst.
- Jika satu langkah membutuhkan lebih dari satu aksi, tulis sebagai baris AKSI terpisah.

---

# 2. UCAP

## Prinsip

Satu baris = satu ucapan. Ditulis sebagai suara yang akan diucapkan.

## Benar

```
UCAP: "Good morning, everyone! How are you today?"
UCAP: "I am fine, thank you! Say it with me!"
```

## Salah

```
UCAP: "Good morning, everyone! How are you today? I am fine, thank you! Say it with me!"
```
❌ Dua ucapan digabung dalam satu baris.

```
UCAP: "Good morning, everyone! (tunggu respons) How are you today?"
```
❌ Ada instruksi di dalam UCAP. Instruksi masuk ke AKSI.

## Aturan

- Satu ucapan satu baris.
- Jangan sisipkan instruksi di dalam tanda kurung dalam UCAP.
- Respons siswa ditulis sebagai: → Siswa: "..."
- Dialog boneka ditulis sebagai: UCAP: (Kiki) "..." atau UCAP: (Momo) "..."
- Jangan gunakan ellipsis unicode (…) — gunakan tiga titik ASCII (...).

---

# 3. BANTUAN

## Prinsip

Tindakan konkret guru saat siswa tidak merespons atau merespons salah.

## Benar

```
BANTUAN: Jika diam: condongkan badan, alis naik, ucap "I am fi-ne..." menggantung.
```

```
BANTUAN:
- Jika diam: tunjuk kartu pertama → "Good mor-ning..." menggantung.
- Jika pelan: dekatkan tangan ke telinga, angguk semangat.
```

## Salah

```
BANTUAN: Berikan motivasi kepada siswa agar lebih percaya diri.
```
❌ Tidak konkret. Guru harus menebak caranya.

```
BANTUAN: Guru bisa mencoba berbagai pendekatan sesuai kondisi kelas.
```
❌ Multitafsir. Tidak deterministik.

## Aturan

- Selalu diawali dengan kondisi: "Jika diam:", "Jika pelan:", "Jika benar:".
- Isi berupa tindakan fisik yang langsung bisa dilakukan.
- Gunakan array jika lebih dari satu kondisi.
- Tulis null jika tidak ada bantuan yang diperlukan.

---

# 4. CATATAN PENTING

## Prinsip

Satu constraint yang tidak boleh terlewat. Bukan penjelasan, bukan alasan.

## Benar

```
Catatan Penting: Satu demo saja. Jangan ulang demo boneka lebih dari sekali.
```

```
Catatan Penting: Pertahankan siswa tetap duduk selama chant. Berhenti saat energi masih tinggi.
```

```
Catatan Penting: Tunjuk ke luar jendela ke arah rumah saat membuka konteks ini.
```

## Salah

```
Catatan Penting: Gerakkan tangan seperti orang tidur saat ucap "good night" — gerakan ini membantu siswa mengenali kata tersebut karena visual anchor penting untuk usia SD.
```
❌ Berisi alasan pedagogis. Potong sampai constraint saja.

```
Catatan Penting: Demo boneka dilakukan sekali agar siswa tetap fokus dan tidak bosan menunggu giliran.
```
❌ Penjelasan teori. Bukan constraint.

## Versi yang benar dari contoh salah di atas

```
Catatan Penting: Gerakkan tangan seperti orang tidur saat ucap "good night."
```

```
Catatan Penting: Demo boneka hanya sekali.
```

## Aturan

- Maksimal 2 kalimat.
- Tidak boleh berisi kata: "karena", "agar", "supaya", "sehingga".
- Tidak boleh mengulang AKSI yang sudah ada di layar yang sama.
- Tulis — jika tidak ada constraint di layar tersebut.

---

# 5. DARURAT

## Prinsip

Jalur alternatif yang dapat langsung dilaksanakan saat kondisi tertentu terjadi.

## Benar

```
Darurat: Waktu ≤10 menit → lewati game, langsung ke Layar 10.
```

## Salah

```
Darurat: Jika waktu tidak cukup, guru bisa mempertimbangkan untuk melewati beberapa aktivitas sesuai kondisi kelas.
```
❌ Tidak deterministik. Guru harus memutuskan sendiri.

## Aturan

- Format: Kondisi → tindakan konkret.
- Kondisi harus terukur: waktu, jumlah siswa, energi kelas.
- Tindakan harus langsung bisa dilakukan tanpa keputusan tambahan.
- Tulis — jika tidak ada kondisi darurat di layar tersebut.

---

# 6. TRANSISI ANTAR LAYAR

## Prinsip

Setiap layar harus memiliki penutup yang jelas sebelum pindah ke layar berikutnya.

## Benar

```
AKSI: Tunggu sampai semua siswa duduk.
AKSI: Lanjut ke Layar berikutnya.
```

```
AKSI: Angkat tangan.
UCAP: "Stop. Sit down."
AKSI: Tunggu sampai semua siswa duduk.
```

## Salah

Layar langsung berakhir tanpa AKSI penutup — layar berikutnya langsung dimulai.

❌ Guru harus menebak kapan berpindah.

## Aturan

- Setiap layar yang mengakhiri aktivitas aktif wajib memiliki AKSI reset sebelum berakhir.
- Transisi ke mode baru (dari aktif ke tenang, dari bersama ke individual) wajib ditandai dengan AKSI eksplisit.

---

# 7. PEMBAGIAN KELAS

## Prinsip

Instruksi pembagian kelas harus konkret dan tidak memerlukan keputusan guru.

## Benar

```
AKSI: Tunjuk siswa di sisi kiri kelas.
UCAP: "This side — with me."
AKSI: Tunjuk siswa di sisi kanan kelas.
UCAP: "This side — with your partner."
```

## Salah

```
AKSI: Bagi kelas menjadi dua kelompok.
```
❌ Tidak ada mekanisme. Guru harus memutuskan sendiri.

---

# 8. LOGICAL JUMP

## Prinsip

Jika AKSI dan UCAP saling berkaitan, keduanya harus berdampingan — AKSI dulu, langsung diikuti UCAP-nya.

## Benar

```
AKSI: Tunjuk telinga dan mata sendiri.
UCAP: "Listen and watch."
AKSI: Peragakan chant satu putaran penuh sambil duduk.
```

## Salah

```
AKSI: Tepuk tangan sekali.
UCAP: "Good! Now, let's say it with a chant."
AKSI: Tunjuk telinga dan mata sendiri.
UCAP: "Listen and watch."
```
❌ AKSI "Tunjuk telinga dan mata" dipisah dari UCAP "Listen and watch" oleh AKSI dan UCAP lain yang tidak berkaitan.

## Aturan

- Jika AKSI adalah persiapan untuk UCAP berikutnya, keduanya harus berdampingan.
- Jangan sisipkan AKSI atau UCAP lain di antara pasangan AKSI-UCAP yang berkaitan.
- AKSI yang berdiri sendiri (tidak berpasangan dengan UCAP) diperbolehkan.
- UCAP yang berdiri sendiri (tidak berpasangan dengan AKSI) diperbolehkan.

---

# 9. UCAP BERISI INSTRUKSI FISIK

## Prinsip

UCAP hanya berisi suara yang diucapkan. Instruksi fisik masuk ke AKSI.

## Benar

```
UCAP: "Hel-lo hel-lo."
AKSI: Tepuk tangan 4 kali.
UCAP: "How are you?"
AKSI: Ketuk lutut 3 kali.
UCAP: "I am fine."
AKSI: Tepuk tangan 3 kali.
UCAP: "Thank you!"
AKSI: Angkat kedua tangan.
```

## Salah

```
UCAP: "Hel-lo hel-lo" → tepuk tangan 4x
UCAP: "how are you?" → ketuk lutut 3x
UCAP: "I am fine" → tepuk tangan 3x
UCAP: "thank you!" → angkat kedua tangan
```
❌ Instruksi fisik (tepuk tangan, ketuk lutut) berada di dalam baris UCAP.
❌ Tanda panah → bukan suara — TTS akan membacanya sebagai teks.
❌ Satu baris berisi ucapan dan instruksi fisik sekaligus.

## Aturan

- Jangan gunakan → di dalam UCAP untuk instruksi fisik.
- Jangan gunakan tanda kurung () di dalam UCAP untuk instruksi fisik.
- Semua instruksi fisik dipindahkan ke baris AKSI tersendiri.
- UCAP hanya boleh berisi teks yang akan diucapkan atau diputar TTS.

---

# 9b. FRAME TRAILING

## Prinsip

Frame trailing digunakan saat guru mengucapkan awal kalimat atau kata lalu berhenti agar siswa melengkapi. Tulis sebagai AKSI, bukan UCAP.

## Benar

```
AKSI: Ucapkan "This is my..." agar siswa melengkapi kalimat.
AKSI: Ucapkan "Grand..." agar siswa melengkapi kata.
```

## Salah

```
UCAP: "This is my..."
UCAP: "Grand..."
```
❌ Elipsis di UCAP akan dibaca literal oleh TTS sebagai "dot dot dot".

## Aturan

- Semua frame trailing dipindahkan ke baris AKSI dengan pola: Ucapkan "..." agar siswa melengkapi.
- UCAP tidak boleh berisi elipsis sebagai penanda kalimat yang sengaja digantung.

---

# 10. TUNJUK VS TUNJUKKAN

## Prinsip

Dua kata dengan makna berbeda.

**Tunjuk** — mengarahkan jari ke objek yang sudah ada di tempatnya.

```
AKSI: Tunjuk kartu di papan tulis.
```

**Tunjukkan** — memperlihatkan objek kepada semua siswa.

```
AKSI: Tunjukkan kartu pagi ke semua siswa.
```

## Aturan

- Gunakan **tunjuk** jika objek sudah tertempel atau berada di suatu tempat.
- Gunakan **tunjukkan** jika guru mengangkat atau menghadapkan objek ke siswa.
- Selalu gunakan "ke semua siswa" bukan "ke kelas".

---

# 11. UCAP VS UCAPKAN

## Prinsip

**UCAP** — nama field resmi dalam schema. Digunakan sebagai label field saja.

**ucapkan** — kata kerja yang digunakan di dalam AKSI atau BANTUAN.

## Benar

```
AKSI: Ucapkan "Good morning" kepada semua siswa.
BANTUAN: Jika diam: ucapkan "Good mor-ning..." menggantung.
```

## Salah

```
AKSI: Ucap "Good morning" kepada semua siswa.
```
❌ "Ucap" bukan kata kerja yang digunakan di luar field UCAP.

---

# 12. DIALOG BONEKA

## Prinsip

Identitas karakter boneka masuk ke AKSI. UCAP bersih dari tanda kurung.

## Benar

```
AKSI: Peragakan dialog Kiki dan Momo.
UCAP: "Good morning, Kiki!"
UCAP: "Good morning, Momo!"
```

## Salah

```
UCAP: (Kiki) "Good morning, Momo!"
UCAP: (Momo) "Good morning, Kiki!"
```
❌ Tanda kurung (Kiki) dan (Momo) merusak TTS.

---

# 13. DARURAT

## Format wajib

Diawali dengan kata "Jika" — kondisi eksplisit sebelum tindakan.

## Benar

```
Darurat: Jika waktu ≤10 menit → lewati game, langsung ke Layar 10.
```

## Salah

```
Darurat: Waktu ≤10 menit → lewati game, langsung ke Layar 10.
```
❌ Tidak diawali "Jika" — kondisi tidak eksplisit.

---

# 14. FORMAT 🗣 TOGETHER

## Aturan Wajib

Setiap kemunculan marker 🗣 TOGETHER wajib diikuti langsung dengan
dua baris penguat sebelum AKSI/UCAP berikutnya:

```
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
```

Jika guru ikut mengucapkan bersama siswa, ganti dengan:

```
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it with me!"
```

## Contoh Benar

```
🗣 TOGETHER

AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
→ Siswa: "Bedroom! Kitchen! Bathroom! Living room!"
```

## Contoh Salah

```
🗣 TOGETHER

→ Siswa: "Bedroom! Kitchen! Bathroom! Living room!"
```
❌ Tidak ada penguat AKSI + UCAP sebelum siswa mengucapkan.
   Guru tidak memberi sinyal eksplisit kepada siswa untuk mulai.

## Pengecualian (tidak perlu penguat)

1. Penutup salam perpisahan
   Konteks: siswa menjawab salam penutup secara natural di akhir sesi.
   Contoh:
     🗣 TOGETHER
     → Siswa: "Goodbye, teacher! See you!"

2. Semi-echo suku kata
   Konteks: guru mengucapkan suku awal, siswa melengkapi —
   bukan echo penuh.
   Contoh:
     AKSI: Ucapkan "Grand..." agar siswa melengkapi kata.
     → Siswa: "...mother!"

3. Konten individual
   Konteks: setiap siswa menjawab dengan konten berbeda
   (nama, usia, warna favorit, dst.).
   Tindakan: hapus marker 🗣 TOGETHER — tidak diganti marker lain.
   Gunakan "Your turn!" jika perlu sinyal produksi serentak.

---

## §15 — PRECONDITION JUMP: POLA MASALAH DAN KONVERSI WAJIB

Precondition jump terjadi ketika sebuah AKSI atau UCAP mengasumsikan
kondisi yang belum ditetapkan oleh AKSI sebelumnya — misalnya menunjuk
siswa yang belum dipilih, atau merujuk benda yang belum ada di papan
tulis. Berikut pola yang wajib diperiksa sebelum menyimpan file.

---

### 15.1 Pertanyaan individual tanpa AKSI menunjuk siswa

SALAH:
  UCAP: "Where do we read books?"
  AKSI: Tunggu jawaban siswa yang ditunjuk.

BENAR:
  UCAP: "Where do we read books?"
  AKSI: Tunggu siswa mengangkat tangan.
  AKSI: Tunjuk salah satu siswa.
  AKSI: Tunggu jawaban siswa yang ditunjuk.

---

### 15.2 Instruksi membacakan tanpa AKSI memanggil siswa

SALAH:
  AKSI: Pilih dua hasil tulisan siswa.
  AKSI: Minta dua siswa membacakan kalimat mereka.

BENAR:
  AKSI: Pilih dua hasil tulisan siswa.
  AKSI: Panggil dua siswa yang sudah dipilih ke depan.
  AKSI: Minta dua siswa membacakan kalimat mereka.

---

### 15.3 🗣 TOGETHER mengulang kalimat yang belum ada di papan tulis

Jika siswa diminta mengulang kalimat dari lembar kerja mereka sendiri,
kalimat itu harus ditulis ke papan tulis dulu sebelum marker 🗣 TOGETHER.

SALAH:
  AKSI: Minta dua siswa membacakan kalimat mereka.
  🗣 TOGETHER
  AKSI: Ajak semua siswa mengucapkan bersama.
  UCAP: "Say it together!"

BENAR:
  AKSI: Minta dua siswa membacakan kalimat mereka.
  AKSI: Tulis kalimat yang baru dibacakan siswa di papan tulis.
  🗣 TOGETHER
  AKSI: Ajak semua siswa mengucapkan bersama.
  UCAP: "Let's say it together."
  AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
  UCAP: "Say it together!"

---

### 15.4 Benda atau media disebut di AKSI tapi belum ada di Persiapan Media

Setiap benda, alat, atau media yang digunakan di AKSI mana pun wajib
tercantum di bagian Persiapan Media. Periksa seluruh AKSI dari atas ke
bawah, catat semua benda yang disebut, lalu pastikan semuanya ada di
Persiapan Media.

SALAH (di Persiapan Media tidak ada spidol warna):
  AKSI: Warnai gambar rambut keriting dengan warna hitam.

BENAR (di Persiapan Media sudah ada):
  - Spidol warna hitam dan cokelat untuk Layar 4.
  ...
  AKSI: Warnai gambar rambut keriting dengan warna hitam.

---

## §16 — KATA AMBIGU DAN ABSTRAK: POLA MASALAH DAN KONVERSI WAJIB

Kata ambigu atau abstrak di field AKSI menyebabkan guru tidak tahu
persis apa yang harus dilakukan. Berikut pola yang wajib dihindari.

---

### 16.1 "Jelaskan" → ganti dengan konten penjelasan konkret

SALAH:
  AKSI: Jelaskan bahwa "She has" dipakai untuk orang perempuan.

BENAR:
  AKSI: Beri penjelasan bahwa "She has" dipakai untuk orang perempuan.

Catatan: "Beri penjelasan bahwa" diikuti konten spesifik yang harus
disampaikan guru. Jangan tulis "jelaskan" tanpa konten.

---

### 16.2 "Pilih siswa sukarela" → ganti dengan AKSI konkret

SALAH:
  AKSI: Pilih satu siswa sukarela.

BENAR:
  AKSI: Tanyakan siapa yang mau berdiri sebagai contoh.

---

### 16.3 "Pastikan" → bukan AKSI, ubah ke AKSI konkret

SALAH:
  AKSI: Pastikan peta di papan sudah lengkap.

BENAR:
  AKSI: Periksa peta di papan tulis — pastikan label SCHOOL, MARKET,
  dan MOSQUE sudah tertulis.

Atau jika ini adalah kondisi prasyarat:
  Darurat: Jika peta di papan tulis belum lengkap → tulis label yang
  kurang sebelum melanjutkan.

---

### 16.4 Nama siswa dalam UCAP → pindah ke AKSI

SALAH:
  UCAP: "[nama siswa], where do you buy fish?"

BENAR:
  AKSI: Panggil nama satu siswa.
  UCAP: "Where do you buy fish?"

---

### 16.5 Bahasa Indonesia dalam UCAP → pindah ke AKSI

SALAH:
  UCAP: "Next to — artinya di sebelah."

BENAR:
  AKSI: Beri penjelasan bahwa "next to" artinya di sebelah.
  UCAP: "Next to — side by side."

---

### 16.6 Instruksi fisik atau gesture dalam UCAP → pindah ke AKSI

SALAH:
  UCAP: "Now — next to or across from?" [buat gesture berdampingan]

BENAR:
  AKSI: Buat gesture dua tangan berdampingan.
  UCAP: "Next to or across from?"
  AKSI: Tunggu respons semua siswa.

---

### 16.7 "Beberapa" → kata terlarang, ganti dengan angka konkret

SALAH:
  AKSI: Biarkan beberapa siswa menjawab.

BENAR:
  AKSI: Biarkan dua sampai tiga siswa menjawab.

---

### 16.8 Gesture ambigu → ganti dengan AKSI konkret

SALAH:
  UCAP: "What is this building?" [tunjuk sekeliling kelas]

BENAR:
  AKSI: Gerakkan tangan menunjuk sekeliling ruangan.
  UCAP: "What is this building?"
