# FLAF Fase B — Authoring Briefing
### Panduan Lengkap Penulisan 22 Skenario Kelas 3 dan 4

> Dokumen ini self-contained.
> Baca dari awal sampai akhir sebelum menulis satu layar pun.
> Tidak perlu tahu apapun tentang FLAF selain yang tertulis di sini.

---

## 1. Apa Itu FLAF dan Apa yang Kamu Tulis

FLAF adalah aplikasi PWA untuk guru Bahasa Inggris SD. Guru membuka FLAF di HP atau laptop saat mengajar. Layar menampilkan langkah-langkah mengajar secara berurutan — instruksi aksi, kalimat yang diucapkan, bantuan jika siswa tidak merespons, sinyal darurat jika kelas mulai tidak kondusif.

**Fase A** (Kelas 1–2, 18 TP) sudah selesai dan berjalan di production.
**Fase B** (Kelas 3–4, 22 TP) perlu ditulis dari nol.

Tugasmu: tulis **22 file skenario txt** untuk Fase B, satu file per TP, dalam urutan TP01 → TP22. Jangan loncat urutan — setiap TP membangun di atas yang sebelumnya.

Setiap skenario yang kamu tulis akan:
1. Dibaca guru sambil berdiri di depan kelas — harus bisa dipindai dalam 2 detik per layar
2. Diproses oleh `batch-convert.js` menjadi file JS yang dibaca oleh runtime aplikasi
3. Ditampilkan di layar HP guru saat sesi mengajar berlangsung

---

## 2. Untuk Siapa Skenario Ini Ditulis

### Guru
Guru SD kelas 3 atau 4. Kemungkinan bukan spesialis Bahasa Inggris. Membaca skenario **sambil berdiri, kelas sedang berjalan**. Tidak punya waktu membaca paragraf panjang. Butuh instruksi yang bisa dilakukan langsung tanpa berpikir.

Desain untuk kondisi ini:
- Guru biasa, hari biasa, energi biasa
- Kelas heterogen, pacing tidak presisi, recovery sering terjadi
- Bukan untuk guru terbaik di kelas terbaik

### Siswa
Usia 8–10 tahun. Sudah dua tahun belajar Bahasa Inggris di Fase A (Kelas 1–2). Mereka punya fondasi — fondasi itu perlu **ditemukan kembali**, bukan diajarkan ulang.

Yang berbeda dari Fase A:
- Sudah bisa membaca dan menulis Bahasa Inggris permulaan
- Lebih sadar sosial — malu jika salah di depan teman, butuh rasa aman
- Rentang perhatian ~20–25 menit per aktivitas — variasi wajib
- Lebih mandiri — bisa kerja berpasangan tanpa pengawasan penuh

---

## 3. Apa yang Berbeda dari Fase A

Di Fase A, guru mendominasi. Boneka, kartu, chant, game — semua dikendalikan guru. Siswa merespons.

Di Fase B, guru memfasilitasi. Siswa mulai memproduksi bahasa sendiri. Ada aktivitas individual (menulis, membaca) yang guru pantau sambil berkeliling.

Implikasinya:
- Lebih banyak instruksi "circulate" — guru bergerak ke siswa
- Lebih banyak diferensiasi individual — scaffolding untuk yang butuh, ekstensi untuk yang sudah bisa
- Lebih banyak momen jeda yang disengaja — beri siswa waktu berpikir
- Lebih sedikit drill massal — lebih banyak produksi mandiri

---

## 4. Standar Durasi — Tidak Bisa Dinegosiasikan

**1 TP = 1 pertemuan = 2 JP × 35 menit = 70 menit kalender**

Ini bukan 70 menit aktif murni. Settling awal, transisi, distribusi alat, recovery energi, dan closure adalah bagian nyata pembelajaran.

| Komponen | Waktu |
|----------|-------|
| Runtime kalender total | 70 menit |
| Runtime efektif kelas kondusif | 55–60 menit |
| Runtime efektif kelas berat | 45–50 menit |

Skenario harus survive di kelas berat. Jika hanya berjalan baik di kelas kondusif, ia gagal di lapangan.

### Distribusi durasi per fase

| Fase | Durasi target |
|------|-------------|
| Pre-Opening | 2–3 menit |
| Pembuka | 10–15 menit |
| Inti | 35–40 menit |
| Penutup | 5–8 menit |

### Budget waktu per jenis layar

| Jenis layar | Maksimum realistis |
|-------------|-------------------|
| Drill cepat / chant | 3–5 menit |
| Tanya-jawab kelas | 4–6 menit |
| Pair practice | 5–7 menit |
| Writing individual | 8–12 menit |
| Reading bersama | 5–8 menit |
| Circulation + penilaian formatif | 6–10 menit |
| Transition / reset | 1–2 menit |
| Demo guru | 2–4 menit |

Hitung total budget waktu sebelum finalisasi. Jika melebihi 70 menit, pangkas layar.

### Target jumlah layar

| Jenis TP | Target layar |
|----------|-------------|
| TP Biasa | 11–13 |
| TP Kompleks | 13–15 |
| TP Panen | 14–16 |
| TP Capstone | 15–17 |

---

## 5. CORE FLOW dan FLEX SCREEN

Setiap layar harus ditandai salah satu:

**[CORE]** — tidak boleh dipotong. Jika layar ini dilewati, rantai pembelajaran putus.

**[FLEX — lewati jika waktu tersisa < {N} menit atau energi kelas di bawah 🟡]** — boleh dilewati dengan kondisi yang sudah ditentukan. Ini bukan kegagalan — ini adaptasi yang terencana.

Aturan penting: jika melewati FLEX SCREEN merusak alur, berarti itu seharusnya CORE.

---

## 6. TP Panen dan Capstone — Split-Ready Structure

TP04, TP08, TP15, TP20 (Panen) dan TP21, TP22 (Capstone) harus memiliki **breakpoint alami** — titik di mana sesi bisa dihentikan dengan bermartabat jika kelas lambat, lalu dilanjutkan di pertemuan berikutnya.

Tandai dengan:
```
════ BREAKPOINT ALAMI ════
Jika waktu tidak cukup: hentikan di sini.
Sesi berikutnya mulai dari Layar {N}.
Siswa simpan pekerjaan mereka.
```

Jangan hentikan TP Panen di tengah aktivitas produksi — itu yang merusak trust siswa dan guru.

---

## 7. Prinsip Aliran Skenario

### Setiap layar mendorong ke layar berikutnya
Tidak ada layar yang berdiri sendiri. Jika layar N bisa dihapus tanpa mempengaruhi layar N+1, layar N tidak perlu ada.

### Energi adalah desain
Energi naik dan turun dengan sengaja. Pola umum:
```
Pre-Opening ⚪ → Pembuka naik bertahap → Inti puncak 🔴 →
reset ⚪ → turun ke 🟡 → Penutup turun ke 🔵
```

Aturan keras:
- Tidak ada dua layar 🔴 berturut-turut tanpa reset ⚪ di antaranya
- Penutup tidak boleh energi di atas 🟡
- TP Panen didominasi 🔵 dan 🟡

### 5 level energi

| Simbol | Label | Kapan dipakai |
|--------|-------|---------------|
| ⚪ | Reset | Transisi, reset setelah energi tinggi, pre-opening |
| 🔵 | Calm | Menulis, membaca individual, refleksi, penutup |
| 🟡 | Focused | Tanya-jawab, pair work, drill ringan |
| 🟠 | Active | Drill cepat, game ringan, aktivitas semi-kompetitif |
| 🔴 | Loud | Game kompetitif, gerak tubuh, chant penuh kelas |

### BANTUAN adalah instruksi konkret, bukan saran

Salah: `BANTUAN ▸ Bantu siswa jika kesulitan.`

Benar: `BANTUAN ▸ Jika diam lebih dari 5 detik: ucap suku kata pertama sambil menggantung — "tur-n..." — tunggu siswa melanjutkan.`

BANTUAN harus bisa dilakukan dalam 5 detik tanpa berpikir.

### DARURAT adalah kondisi eksplisit

Selalu dengan kondisi konkret dan terukur:

`⚠ DARURAT — waktu ≤ 8 menit: lewati aktivitas menulis, langsung ke review lisan.`

Bukan: `⚠ DARURAT — jika kelas bermasalah: sesuaikan.`

### Penilaian formatif punya momen yang tepat

Di setiap TP ada satu momen natural untuk guru membuka overlay penilaian — saat siswa mengerjakan sesuatu secara individual dan guru berkeliling. Tandai eksplisit:

```
⚡ Ini waktu yang tepat untuk buka overlay penilaian formatif.
   Prioritaskan siswa yang belum pernah dinilai di TP ini.
```

---

## 8. Recycling Kosakata Fase A

Setiap TP Fase B harus memunculkan kembali **minimal 5–8 kata dari Fase A** dalam konteks yang lebih kompleks. Bukan mengajarkan ulang — menemukan kembali dalam situasi baru.

Contoh yang benar:
- Fase A: siswa hafal "sunny", "rainy" sebagai kosakata terisolasi
- Fase B TP10: siswa mendengar "When it's rainy, I wear a raincoat" — kata lama, struktur baru

### Inventaris kosakata Fase A

| Topik | Kosakata |
|-------|----------|
| Greetings | hello, goodbye, good morning/afternoon/evening/night, hi, see you |
| Introducing Myself | name, age, I am, my name is, I'm from |
| Classroom Instructions | sit down, stand up, open, close, listen, look, write, read |
| Numbers | one–twenty, how many, count |
| Colors | red, blue, green, yellow, black, white, orange, purple, pink |
| Shapes | circle, square, triangle, rectangle, star |
| Family | mother, father, sister, brother, grandmother, grandfather |
| My House | bedroom, kitchen, bathroom, living room, door, window |
| Animals | cat, dog, bird, fish, rabbit, elephant, tiger, frog, lion |
| Food & Drinks | rice, noodle, bread, egg, milk, water, juice, apple, banana |
| Daily Routines | wake up, brush teeth, eat breakfast, go to school, sleep |
| Body Parts | head, eyes, ears, nose, mouth, hands, feet, legs, arms |
| Weather | sunny, rainy, cloudy, windy, hot, cold |
| In the Classroom | pencil, book, ruler, eraser, bag, table, chair, board |
| Feelings | happy, sad, angry, scared, surprised, tired, hungry |
| Story Retelling | once upon a time, then, after that, the end |
| Hobbies | reading, drawing, playing, singing, dancing, swimming, I like |

---

## 9. Rantai Antar TP

Setiap TP (kecuali TP01) harus menyebut secara eksplisit satu hal yang disambungkan dari TP sebelumnya — lewat kalimat guru, aktivitas yang membangun di atas pola sebelumnya, atau referensi langsung.

```
TP01 → TP02: kosakata sekolah dipakai untuk deskripsi teman sekelas
TP02 → TP03: kemampuan deskripsi orang diperluas ke deskripsi tempat
TP03 → TP04: semua kosakata Kluster A disambung untuk menulis [PANEN]
TP04 → TP05: konteks penulisan diperluas dengan ekspresi waktu
TP05 → TP06: ekspresi waktu dipakai untuk menyusun jadwal berurutan
TP06 → TP07: jadwal harian diperluas ke konteks mingguan dan bulanan
TP07 → TP08: semua ekspresi waktu disambung untuk menulis [PANEN]
TP08 → TP09: struktur kalimat berurutan dipakai untuk fakta alam
TP09 → TP10: kosakata alam/cuaca dihubungkan ke pilihan pakaian
TP10 → TP11: struktur sebab-akibat dipakai untuk alasan kebiasaan sehat
TP11 → TP12: konteks kesehatan jadi pintu ke topik profesi
TP12 → TP13: konteks profesi jadi pintu ke topik makanan
TP13 → TP14: kosakata makanan dan budaya diperluas ke perayaan
TP14 → TP15: semua kosakata Kluster D disambung untuk menulis [PANEN]
TP15 → TP16: dari komunitas/budaya kembali ke konteks personal — olahraga
TP16 → TP17: dari gerakan fisik ke pergerakan di ruang — arah dan tempat
TP17 → TP18: dari "kita pergi ke..." ke "kemarin kita pergi ke..." — lampau
TP18 → TP19: kosakata lampau dipakai untuk membaca cerita [BACA]
TP19 → TP20: dari membaca cerita ke menulis cerita sendiri [PANEN]
TP20 → TP21: dari menulis teks ke membaca teks yang lebih kompleks
TP21 → TP22: dari membaca teks multimodal ke membuat teks multimodal [CAPSTONE]
```

---

## 10. Daftar 22 TP

### Kluster A — Diri, Sekolah, dan Komunitas (Kelas 3)

| No | Topik | Jenis | Kosakata baru utama | Recycle Fase A |
|----|-------|-------|--------------------|--------------------|
| 01 | My School Life | Biasa | library, canteen, raise your hand | pencil, book, sit down, listen |
| 02 | Describing People | Biasa | curly, straight, kind, She has… | mother, father, eyes, hands, colors |
| 03 | My Neighborhood | Biasa | market, mosque, next to, across from | door, window, near, in front of |
| 04 | Writing: Who and Where | **Panen** | — | semua kosakata TP01–03 |

### Kluster B — Waktu, Jadwal, dan Kebiasaan (Kelas 3)

| No | Topik | Jenis | Kosakata baru utama | Recycle Fase A |
|----|-------|-------|--------------------|--------------------|
| 05 | Telling Time | Biasa | o'clock, half past, What time is it? | numbers, wake up, go to school |
| 06 | My Daily Schedule | Biasa | first, then, after that, I usually… | daily routines, telling time |
| 07 | Days, Months, and the Calendar | Biasa | Monday–Sunday, January–December, tomorrow | numbers, morning, afternoon |
| 08 | Writing: My Weekly Schedule | **Panen** | — | semua kosakata TP05–07 |

### Kluster C — Alam, Tubuh, dan Kesehatan (Kelas 3)

| No | Topik | Jenis | Kosakata baru utama | Recycle Fase A |
|----|-------|-------|--------------------|--------------------|
| 09 | Plants, Animals, and Nature | Biasa | jungle, forest, They live in…, They eat… | animals, colors, weather |
| 10 | Weather and What We Wear | Biasa | raincoat, umbrella, When it rains… I wear… | weather, colors |
| 11 | Healthy Habits | Kompleks | healthy, exercise, I eat… because… | body parts, food, daily routines |

### Kluster D — Komunitas, Budaya, dan Dunia (Kelas 4)

| No | Topik | Jenis | Kosakata baru utama | Recycle Fase A |
|----|-------|-------|--------------------|--------------------|
| 12 | Jobs and Community Helpers | Biasa | doctor, farmer, She works at… | family, body parts |
| 13 | Food, Culture, and Choices | Biasa | rendang, spicy, I like… because… | food & drinks, feelings |
| 14 | Celebrations and Traditions | Biasa | Eid, visit, On… we… | family, feelings, food |
| 15 | Writing: My Country | **Panen** | — | semua kosakata TP12–14 |

### Kluster E — Aksi, Arah, dan Cerita (Kelas 4)

| No | Topik | Jenis | Kosakata baru utama | Recycle Fase A |
|----|-------|-------|--------------------|--------------------|
| 16 | Sports and Physical Activities | Biasa | football, always, sometimes, I can… | hobbies, body parts |
| 17 | Getting Around: Directions | Biasa | turn left, go straight, How do I get to…? | neighborhood, numbers |
| 18 | Talking About the Past | Kompleks | went, ate, played, Yesterday I… | daily routines, days |
| 19 | Reading: Short Narrative Texts | Kompleks | — (tidak ada kosakata baru) | story retelling, past tense |
| 20 | Writing: My Story | **Panen** | — | semua kosakata TP16–19 |

### Capstone (Kelas 4)

| No | Topik | Jenis | Catatan |
|----|-------|-------|---------|
| 21 | Reading: Multimodal Texts | Capstone | Tidak ada kosakata baru — strategi membaca |
| 22 | Integrative Project: My World Story | Capstone | Semua kosakata Fase A + B, siswa memilih |

---

## 11. Format File Skenario

### 11.1 Nama file
```
flaf-skenario-tp{NN}-v2.txt
```
Nomor di nama file harus cocok dengan `TP {N} — JUDUL` di dalam file. File disimpan di `docs/skenario/`.

### 11.2 Header file
```
TP {NN} — {NAMA TOPIK}
Tema: {tema dalam satu frasa}
Kelas: {3 atau 4}
Kluster: {nama kluster}
Jenis: {Biasa / Kompleks / Panen / Capstone}
Total layar: {N} (termasuk Layar 0)
Recycle dari Fase A: {daftar 5–8 kata}
Kosakata baru: {daftar kosakata utama}

PERSIAPAN MEDIA:
- {item 1}
- {item 2}
```

### 11.3 Divider antar layar
```
════════════════════════════════════════════════════════════════
```

### 11.4 Header setiap layar
```
LAYAR {N} — {NAMA FASE} · {NAMA AKTIVITAS}
{emoji energi} {label energi}
[CORE] atau [FLEX — lewati jika waktu tersisa < {N} menit]
```

### 11.5 Penanda yang dikenali runtime

Penanda berikut dirender secara khusus oleh aplikasi. Tulis persis seperti ini:

| Penanda | Fungsi |
|---------|--------|
| `BANTUAN ▸` | Fallback — dirender sebagai panel tersendiri di layar guru |
| `⚡ Cue kritis:` | Hal paling penting di layar ini |
| `⚠ DARURAT —` | Kondisi eksplisit dan instruksi singkat |
| `👂 LISTEN FIRST` | Guru demo dulu, siswa belum ikut |
| `🗣 TOGETHER` | Guru dan siswa bersama |
| `Diferensiasi:` | Diikuti `- Perlu support:` dan `- Sudah bisa:` |

Penanda yang **tidak** dikenali parser tapi tetap wajib ditulis karena dirender oleh runtime:
`AKSI:`, `UCAP:`, `→` (untuk dialog atau urutan), `[instruksi dalam kurung kotak]`

Semua penanda yang tidak dikenali parser akan jatuh ke field `teks` apa adanya dan tetap tampil di layar guru.

### 11.6 Penanda penilaian formatif
```
⚡ Ini waktu yang tepat untuk buka overlay penilaian formatif.
   Prioritaskan siswa yang belum pernah dinilai di TP ini.
```

### 11.7 Breakpoint alami (khusus TP Panen dan Capstone)
```
════ BREAKPOINT ALAMI ════
Jika waktu tidak cukup: hentikan di sini.
Sesi berikutnya mulai dari Layar {N}.
Siswa simpan pekerjaan mereka.
```

### 11.8 Checklist di akhir file
Spesifik untuk TP ini — bukan pengingat generik. Berisi hal kritis yang mudah terlupakan guru saat mengajar.

Format:
```
✅ CHECKLIST SELESAI TP {NN}
[ ] {item 1}
[ ] {item 2}
```

### 11.9 CATATAN RUNTIME GURU di akhir file
```
════════════════════════════════════════════════════════════════
CATATAN RUNTIME GURU
════════════════════════════════════════════════════════════════

Energi kelas:
L0 ⚪ → L1 🔵 → L2 🟡 → ... → LN 🔵

Risiko pacing:
· L{N}: {risiko spesifik layar ini}

Teacher autonomy:
· {hal yang boleh dimodifikasi guru sesuai kondisi kelas}
```

---

## 12. Hal yang Tidak Boleh Ada

- Paragraf lebih dari 4 baris tanpa jeda visual
- BANTUAN yang generik ("bantu siswa jika kesulitan")
- DARURAT tanpa kondisi eksplisit dan terukur
- Dua layar 🔴 berturut-turut tanpa reset ⚪ di antaranya
- Penutup dengan energi di atas 🟡
- Kosakata baru di luar yang terdaftar di §10 untuk TP tersebut
- Writing sebelum ada minimal 2 layar oral modeling
- Pair work tanpa layar demo/modeling sebelumnya
- Koreksi grammar saat siswa berbicara — fokus pada keberanian mencoba
- Total budget waktu melebihi 70 menit kalender
- Semua layar ditandai [CORE] — harus ada FLEX

---

## 13. Cara Kerja Pipeline (Informasi Teknis)

Setelah skenario txt selesai ditulis dan direview, file akan diproses oleh `batch-convert.js`:

```
node tools/batch-convert.js {N}
```

Output otomatis ke `docs/output-v5/tp-{N}-v5.js`.

**Field yang di-extract otomatis dari txt:**
`teks`, `bantuan`, `cue`, `darurat`, `energi`, `checklist`, `catatan.risiko`, `catatan.autonomy`

**Field yang harus diisi manual setelah convert (bukan tugasmu):**
`kelas`, `deskripsi`, `indikator`, `vocab`, `persiapan`, `media`, `printables`

Kamu hanya bertanggung jawab pada file txt. Field manual diisi oleh tim setelah convert.

---

## 14. Urutan Pengerjaan

Tulis satu TP per sesi. Urutan wajib: **TP01 → TP02 → ... → TP22**.

Sebelum menulis setiap TP, jawab empat pertanyaan ini:
1. Kosakata apa dari TP sebelumnya yang harus muncul kembali di TP ini?
2. Apa satu kemampuan baru yang ditambahkan di TP ini?
3. Di momen mana guru akan membuka overlay penilaian formatif?
4. Apakah ada FLEX SCREEN yang bisa didesain agar skenario tetap survive jika dipotong?

Setelah selesai menulis, hitung total budget waktu. Jika melebihi 70 menit, pangkas sebelum submit untuk review.

---

## 15. Proses Review

Setiap TP akan direview sebelum kamu lanjut ke TP berikutnya. Review dilakukan dalam dua tier:

**Tier 1 — Scan cepat (±15 menit):**
Format, durasi, Failure Signals. Jika ada masalah struktural, TP dikembalikan tanpa lanjut ke Tier 2.

**Tier 2 — Review mendalam:**
Aliran pedagogis, kualitas BANTUAN, survivability, compliance vs quality.

Verdict yang mungkin: ✅ APPROVED, ⚠ REVISION REQUIRED, ❌ REWRITE.

Jangan mulai TP berikutnya sebelum TP sebelumnya ✅ APPROVED.

---

*FLAF Fase B Authoring Briefing — Mei 2026*
*Dokumen ini digunakan bersama:*
*- FLAF Fase B Curriculum Authoring Standard*
*- FLAF Fase B Quality Gate System*
