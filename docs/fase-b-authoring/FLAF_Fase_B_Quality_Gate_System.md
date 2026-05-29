# FLAF Fase B — Quality Gate System
### Standar Review Skenario Kelas 3 dan 4

> Dokumen ini untuk reviewer — bukan untuk penulis skenario.
> Penulis membaca Curriculum Authoring Standard.
> Reviewer membaca ini.
>
> Tujuan: reviewer yang berbeda-beda menghasilkan penilaian yang konsisten.
> Bukan bergantung pada intuisi. Bergantung pada kriteria yang bisa diverifikasi.

---

## Cara Menggunakan Dokumen Ini

Review setiap TP dalam urutan berikut:

1. **Scan cepat 5 menit** — cek Failure Signals (§1). Jika ada yang terpicu, tandai sebelum lanjut.
2. **Verifikasi kategori** — pastikan TP masuk kategori yang benar (§2).
3. **Jalankan checklist** — periksa semua item sesuai kategori TP (§3).
4. **Compliance vs Quality Test** — pastikan format bukan kamuflase kelemahan pedagogi (§4).
5. **Verdict** — tulis keputusan akhir dengan alasan spesifik (§5).

Jangan loncat ke checklist sebelum scan Failure Signals. Failure Signal yang terlewat di awal sering menjadi masalah yang baru terlihat di tengah review — dan membuang waktu.

---

## §1 — Failure Signals

Ini adalah tanda cepat bahwa TP bermasalah. Bisa diperiksa dalam 5 menit sebelum review mendalam. Satu signal yang terpicu tidak otomatis gagal — tapi wajib diselidiki lebih dalam.

Tiga atau lebih signal terpicu sekaligus = **kembalikan ke penulis tanpa review lebih lanjut.**

| # | Signal | Cara cek | Apa artinya jika terpicu |
|---|--------|----------|--------------------------|
| F1 | Lebih dari 3 layar berturut-turut tanpa output siswa | Baca urutan layar — hitung berapa layar guru bicara tanpa siswa memproduksi apapun | Terlalu teacher-centered — siswa pasif terlalu lama |
| F2 | Lebih dari 2 layar instruksi panjang (>4 baris teks padat) berturut-turut | Lihat visual density tiap layar | Cognitive overload — guru tidak bisa baca sambil mengajar |
| F3 | Writing muncul sebelum ada minimal 2 layar oral modeling | Cari layar writing pertama — hitung layar oral sebelumnya | Siswa akan freeze karena belum punya model bahasa |
| F4 | Lebih dari 2 layar 🔴 di 5 layar pertama Inti | Hitung energi layar Inti 1–5 | Energi collapse di tengah sesi — tidak ada ruang recovery |
| F5 | FLEX SCREEN memutus rantai pedagogis | Bayangkan skenario dengan FLEX dilewati — apakah alur tetap masuk akal? | Desain FLEX salah — layar ini seharusnya CORE |
| F6 | Penutup hanya recap verbal tanpa closure emosional | Baca 3 layar terakhir | Siswa tidak merasakan selesai — memory consolidation lemah |
| F7 | Pair work atau group work tanpa layar modeling sebelumnya | Cari layar pair/group — cek apakah ada demo sebelumnya | Aktivitas akan chaos — guru harus improvisasi penjelasan |
| F8 | Semua layar ditandai [CORE] | Hitung perbandingan CORE vs FLEX | Penulis tidak benar-benar memprioritaskan — atau takut memilih |
| F9 | Tidak ada satu pun kosakata Fase A yang muncul | Cari kosakata dari inventaris Fase A di CAS §8 | Recycling diabaikan — rantai Fase A → B putus |
| F10 | Total budget waktu layar melebihi 70 menit | Jumlahkan budget waktu semua layar menggunakan tabel di CAS §3 | Skenario tidak bisa selesai dalam 1 pertemuan |

---

## §2 — Definisi Operasional Kategori TP

Reviewer harus memverifikasi bahwa penulis mengategorikan TP dengan benar. Kategori menentukan target layar dan ekspektasi kompleksitas.

### TP Biasa
Tidak memenuhi kriteria Kompleks, Panen, atau Capstone.
Target layar: 11–13.

### TP Kompleks
Memenuhi **minimal 2** dari kriteria berikut:
- [ ] Ada hubungan sebab-akibat yang harus diproduksi siswa (bukan hanya didengar)
- [ ] Ada sequencing multi-step yang harus diikuti siswa (lebih dari 2 langkah berurutan)
- [ ] Ada perubahan tense atau bentuk kata kerja
- [ ] Ada aktivitas reading dan writing dalam satu alur sesi yang sama
- [ ] Ada produksi bahasa lebih dari satu kalimat utuh per siswa
- [ ] Ada inferensi sederhana — siswa harus menyimpulkan sesuatu, bukan hanya mengulang
- [ ] Ada integrasi dua skill atau lebih (misalnya: listening → speaking → writing)

Target layar: 13–15.

### TP Panen
Adalah TP ke-4 dari setiap kluster: TP04, TP08, TP15, TP20.
Ditandai eksplisit di header file sebagai "Panen".
Didominasi aktivitas produksi mandiri siswa.
Harus memiliki breakpoint alami yang ditandai eksplisit.
Target layar: 14–16.

### TP Capstone
Adalah TP21 dan TP22.
Tidak memperkenalkan kosakata baru — hanya mengintegrasikan.
Siswa memilih sendiri apa yang diproduksi.
Harus memiliki breakpoint alami.
Target layar: 15–17.

---

## §3 — Reviewer Checklist

### 3A — Checklist Universal (semua kategori TP)

**Header dan metadata**
- [ ] Nama file sesuai format: `flaf-skenario-tp{NN}-v2.txt`
- [ ] Nomor di nama file cocok dengan `TP {N} — JUDUL` di dalam file
- [ ] Header mencantumkan: Tema, Kelas, Kluster, Jenis, Total layar, Recycle dari Fase A, Kosakata baru, Persiapan Media
- [ ] Kelas tercantum dengan benar (3 atau 4)
- [ ] Minimal 5 kata dari inventaris Fase A tercantum di header "Recycle dari Fase A"

**Struktur dan format**
- [ ] Pre-Opening ada dan tepat 1 layar
- [ ] Divider `════` digunakan konsisten antar layar
- [ ] Setiap layar punya label energi yang benar (⚪ 🔵 🟡 🟠 🔴)
- [ ] Setiap layar ditandai [CORE] atau [FLEX] dengan kondisi FLEX yang eksplisit
- [ ] CATATAN RUNTIME GURU ada di akhir file
- [ ] Energi di CATATAN konsisten dengan label energi per layar
- [ ] Checklist ada di akhir file dan spesifik untuk TP ini

**Durasi dan pacing**
- [ ] Total budget waktu tidak melebihi 70 menit kalender
- [ ] Pre-Opening tidak lebih dari 3 menit
- [ ] Pembuka tidak lebih dari 15 menit total
- [ ] Penutup minimal 5 menit
- [ ] Tidak ada satu layar writing individual yang dialokasikan lebih dari 12 menit
- [ ] Jumlah layar sesuai target kategori TP

**Aliran pedagogis**
- [ ] TP01 tidak berlaku; TP lainnya: ada referensi eksplisit ke TP sebelumnya di Pembuka
- [ ] Minimal 5–8 kata Fase A muncul dalam konteks baru di body skenario (bukan hanya di header)
- [ ] Tidak ada writing sebelum minimal 2 layar oral modeling
- [ ] Tidak ada pair/group work tanpa layar modeling sebelumnya
- [ ] Ada minimal 1 momen penilaian formatif yang ditandai ⚡
- [ ] Diferensiasi ada minimal di 1 layar Inti

**Energi**
- [ ] Tidak ada dua layar 🔴 berturut-turut tanpa reset ⚪ di antaranya
- [ ] Penutup tidak ada layar di atas 🟡
- [ ] Pre-Opening selalu ⚪

**BANTUAN dan DARURAT**
- [ ] Setiap BANTUAN adalah instruksi spesifik yang bisa dilakukan langsung — bukan saran generik
- [ ] Setiap DARURAT memiliki kondisi eksplisit dan terukur
- [ ] Tidak ada BANTUAN yang berbunyi seperti: "bantu siswa", "ulangi instruksi", "beri lebih banyak waktu"

---

### 3B — Checklist Tambahan: TP Panen dan Capstone

- [ ] Didominasi energi 🔵 dan 🟡 — bukan 🔴
- [ ] Ada breakpoint alami yang ditandai eksplisit dengan format `════ BREAKPOINT ALAMI ════`
- [ ] Breakpoint terjadi di titik yang logis (bukan di tengah aktivitas)
- [ ] Guru berperan sebagai fasilitator, bukan instructor — tidak mendominasi lebih dari 40% layar
- [ ] Ada ruang bagi siswa untuk membuat pilihan sendiri dalam produksi

---

### 3C — Checklist Tambahan: TP Capstone

- [ ] Tidak ada kosakata baru diperkenalkan
- [ ] Siswa bisa memilih kosakata dari Fase A dan Fase B secara bebas
- [ ] Skenario tidak memaksa semua siswa menghasilkan output yang identik

---

## §4 — Compliance vs Quality Test

Ini adalah lapisan terpenting dalam review. Skenario bisa lulus semua checklist tapi tetap lemah secara pedagogis jika penulis "menulis untuk format" bukan "menulis untuk kelas."

### Test 1: CORE Justification Test

Untuk setiap layar bertanda [CORE], tanyakan:

**"Jika layar ini dihapus, apa yang benar-benar rusak di skenario ini?"**

Jawaban yang valid untuk CORE:
- Siswa tidak punya kosakata yang dibutuhkan di layar berikutnya
- Rantai energi akan putus — tidak ada transisi yang masuk akal
- Aktivitas di layar berikutnya tidak punya model yang bisa diikuti

Jawaban yang TIDAK valid untuk CORE:
- "Layarnya bagus dan sayang dihapus"
- "Ini melengkapi skenario"
- "Supaya ada variasi"

Jika tidak ada jawaban valid → turunkan ke FLEX.

---

### Test 2: BANTUAN Reality Test

Ambil tiga BANTUAN secara acak dari skenario. Bayangkan Anda adalah guru yang baru pertama kali mengajar kelas ini, di menit ke-30, dengan kelas yang mulai gaduh.

Tanyakan untuk setiap BANTUAN:

**"Bisakah instruksi ini dilakukan dalam 5 detik tanpa berpikir?"**

Jika jawabannya tidak → BANTUAN perlu ditulis ulang.

---

### Test 3: Minute 45 Simulation

Baca skenario sampai layar ke-8 atau ke-9 (perkiraan menit ke-40–45). Bayangkan:
- Guru sudah mengajar 45 menit
- Energi kelas mulai tidak stabil
- Satu atau dua siswa mulai terganggu
- Guru sedikit lelah

Tanyakan:
- Apakah instruksi di layar ini masih bisa diikuti guru dalam kondisi tersebut?
- Apakah siswa masih punya energi untuk aktivitas yang diminta?
- Jika ini layar writing atau produksi — apakah siswa sudah cukup dipersiapkan?

Jika ada satu pun yang meragukan → tandai sebagai "perlu revisi pacing."

---

### Test 4: Flow Without Markers Test

Baca skenario dengan mengabaikan semua marker format (`[CORE]`, `[FLEX]`, energi emoji, `BANTUAN ▸`, `⚡`, `⚠ DARURAT`).

Baca hanya teks instruksi dan ucapan guru.

Tanyakan:
**"Apakah skenario ini masih terasa seperti satu sesi yang mengalir natural?"**

Jika jawabannya tidak — artinya marker dipakai untuk menutupi flow yang lemah, bukan melengkapi flow yang kuat. Ini adalah tanda compliance theater.

---

### Test 5: Student Output Audit

Hitung berapa kali siswa diminta memproduksi sesuatu dalam sesi ini:
- Bicara (menjawab, mengulang, berdialog)
- Menulis
- Membaca dengan respons
- Gestur atau aksi fisik yang menunjukkan pemahaman

Bandingkan dengan jumlah total layar.

**Rasio minimum yang sehat:** siswa memproduksi sesuatu di minimal 60% layar Inti.

Jika di bawah 60% → skenario terlalu teacher-centered.

---

## §5 — Verdict

Setiap TP harus diakhiri dengan salah satu dari tiga verdict:

### ✅ APPROVED
Semua checklist lulus. Tidak ada Failure Signal yang tidak terselesaikan. Semua Compliance Test lulus.

Tulis satu kalimat alasan spesifik — bukan "sudah bagus" tapi "TP ini lulus karena [hal konkret]."

---

### ⚠ REVISION REQUIRED
Ada item checklist yang gagal, atau ada Compliance Test yang meragukan, tapi skenario masih bisa diperbaiki tanpa menulis ulang dari nol.

Tulis daftar yang perlu direvisi — spesifik per layar dan per item. Contoh:
- L6: BANTUAN terlalu generik — tulis ulang dengan kondisi dan tindakan yang konkret
- L9: ditandai [CORE] tapi tidak lolos CORE Justification Test — turunkan ke FLEX
- Total budget waktu 78 menit — pangkas L11 atau L12

---

### ❌ REWRITE
Tiga atau lebih Failure Signal terpicu, atau skenario gagal di Minute 45 Simulation secara fundamental, atau Flow Without Markers Test menunjukkan bahwa alur pedagogis tidak berdiri sendiri.

Kembalikan ke penulis dengan penjelasan singkat tentang masalah struktural utama — bukan daftar panjang detail. Penulis perlu tahu apa yang salah secara prinsip, bukan apa yang perlu diubah baris per baris.

---

## §6 — Catatan untuk Reviewer

**Konsistensi lebih penting dari ketepatan absolut.**
Dua reviewer yang berbeda harus sampai pada verdict yang sama untuk TP yang sama. Jika tidak, sistem ini gagal fungsinya. Jika ada keraguan pada sebuah kriteria, diskusikan — jangan putuskan sendiri.

**Jangan review lebih dari 2 TP dalam satu sesi.**
Review yang terburu-buru atau lelah akan melewatkan hal yang kritis. Dua TP per sesi adalah batas yang sehat.

**Verdict ⚠ REVISION REQUIRED bukan kegagalan.**
Ini adalah output normal dari sistem yang berfungsi. Skenario yang langsung ✅ APPROVED tanpa revisi apapun justru patut dicurigai — reviewer mungkin tidak cukup ketat.

**Jangan tambahkan kriteria baru saat review.**
Jika ada sesuatu yang mengganggu tapi tidak ada di checklist ini, catat sebagai catatan terpisah. Jangan jadikan alasan verdict. Bawa ke diskusi untuk diputuskan apakah perlu masuk ke versi berikutnya dari dokumen ini.

---

*FLAF Fase B Quality Gate System — Mei 2026*
*Digunakan bersama: FLAF Fase B Curriculum Authoring Standard*
*Versi dokumen ini berlaku sampai ada keputusan eksplisit untuk mengubahnya.*
