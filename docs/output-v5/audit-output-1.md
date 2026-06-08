# AUDIT KETERPAKAIAN TP FLAF — OUTPUT 1

---

## IDENTITAS AUDIT

**TP** : TP-01 — Greetings & Farewells
**Tanggal Audit** : 2026-06-07
**Auditor** : Claude Code (Sonnet 4.6)
**Versi TP** : v5.0
**Versi Standar Audit** : 1.0

---

## BAGIAN 1 — PEMERIKSAAN AWAL

**Status** : Lengkap

**Struktur TP** : Valid — preOpening + 3 fase + 17 langkah. Export default tersedia.

**Catatan Awal** : TP memiliki alur pembelajaran yang jelas dan properti yang lengkap. Temuan terpusat di L11 (lompat logika), L13 (beban pengelolaan), dan konsistensi UCAP "Good morning" yang hardcoded di sepanjang TP.

---

## BAGIAN 2 — DOMAIN INSTRUKSI GURU

---

### Temuan IG-01 — Kata Ambigu

**Lokasi** : L3 — teks

**Teks** : `"Angkat kartu setinggi dada, hadapkan ke kelas satu per satu — sebut namanya dulu."`

**Alasan** : "Sebut namanya dulu" tidak menjelaskan nama apa yang dimaksud. Guru berpotensi menebak: nama kartu? nama waktu? nama bergambar?

**Rekomendasi** : Ganti menjadi `"Angkat kartu setinggi dada, hadapkan ke kelas satu per satu — ucapkan nama waktunya."`

**Prioritas** : Sedang

---

### Temuan IG-03 — Aksi Lompat Logika (1)

**Lokasi** : L11 — teks

**Teks** : `"AKSI: Angguk, tersenyum. Jeda — tunggu respons siswa."`

**Alasan** : Instruksi menunggu respons siswa muncul sebelum ada pertanyaan yang diajukan. Tidak ada yang perlu direspons siswa pada titik ini. Guru akan menunggu sesuatu yang belum dipicu.

**Rekomendasi** : Hapus `"Jeda — tunggu respons siswa."` dari posisi ini. Pindahkan ke setelah UCAP `"And when you leave? What do you say then?"`.

**Prioritas** : Mayor

---

### Temuan IG-03 — Aksi Lompat Logika (2)

**Lokasi** : L11 — teks

**Teks** : `"AKSI: Minta siswa mendengarkan terlebih dahulu tanpa mengikuti." → langsung → "AKSI: Angkat kartu perpisahan... minta kelas mengucapkan. UCAP: 'Goodbye! Bye! See you!'"`

**Alasan** : Guru meminta siswa mendengarkan dulu, tetapi tidak ada langkah demo/modelling setelah itu. Guru langsung meminta kelas mengucapkan tanpa mencontohkan terlebih dahulu. Siswa tidak punya model yang didengar.

**Rekomendasi** : Tambahkan langkah modelling setelah instruksi "mendengarkan tanpa mengikuti": `UCAP: "Goodbye. Bye. See you."` → baru → `UCAP: "Now say it with me!"`. Atau hapus `"Minta siswa mendengarkan tanpa mengikuti"` jika langkah modelling tidak ditambahkan.

**Prioritas** : Mayor

---

### Temuan IG-04 — Instruksi Kurang Operasional

**Lokasi** : preOpening — cue

**Teks** : `"Layar ini dilakukan sebelum kelas resmi dimulai — saat siswa masuk satu per satu. Boneka Kiki wajib ada di tangan. Lambaikan Kiki ke setiap siswa yang masuk. Layar ini pendek dan tidak boleh dilewati karena menjadi anchor emosi pertama siswa."`

**Alasan** : Cue berisi 4 kalimat. Dua kalimat pertama mengulang isi teks. Kalimat terakhir adalah penjelasan editorial, bukan pengingat operasional. Per Standar Redaksi Bab 6: cue harus singkat, mudah dipindai, dan tidak mengulang AKSI.

**Rekomendasi** : Pangkas menjadi: `"Mulai sebelum kelas masuk. Kiki wajib di tangan."` Instruksi "lambaikan Kiki" sudah cukup ada di teks.

**Prioritas** : Sedang

---

### Temuan IG-05 — Keputusan Operasional

**Lokasi** : L13 — teks

**Teks** : `"AKSI: Bagi aktivitas menjadi dua kelompok berikut: - Need Help: ... - Ready: ..."`

**Alasan** : Tidak ada mekanisme pembagian kelompok. Guru harus memutuskan sendiri siswa mana masuk Need Help dan mana masuk Ready. Ini adalah keputusan operasional yang diserahkan sepenuhnya kepada guru tanpa panduan.

**Rekomendasi** : Tambahkan kriteria konkret sebelum instruksi bagi kelompok: `"Siswa yang bisa menyebut satu salam tanpa melihat kartu → Ready. Siswa lain → Need Help."`

**Prioritas** : Sedang

---

### Temuan IG-08 — Redundansi (1)

**Lokasi** : L9 → L10

**Teks L9** : `"UCAP: 'Sit down, everyone.' AKSI: Tunggu sampai semua siswa duduk kembali."`
**Teks L10** : `"AKSI: Angkat telapak tangan menghadap bawah. UCAP: 'Sit down, everyone.' AKSI: Tunggu sampai semua siswa duduk."`

**Alasan** : L9 sudah memastikan semua siswa duduk sebelum langkah berakhir. L10 mengulangi instruksi duduk yang sama. Guru membaca dua instruksi identik tanpa ada situasi baru yang memicu instruksi kedua.

**Rekomendasi** : Hapus `"AKSI: Angkat telapak tangan menghadap bawah. UCAP: 'Sit down, everyone.' AKSI: Tunggu sampai semua siswa duduk."` dari awal L10. Mulai langsung dari `"AKSI: Hubungkan materi dengan situasi di rumah."`

**Prioritas** : Sedang

---

### Temuan IG-08 — Redundansi (2)

**Lokasi** : L9 — teks

**Teks** : `"AKSI: Lanjut ke aktivitas Real Life."`

**Alasan** : Instruksi meta-navigasi. Langkah berikutnya (L10) adalah aktivitas Real Life itu sendiri. Guru tidak membutuhkan instruksi eksplisit untuk meneruskan membaca.

**Rekomendasi** : Hapus kalimat ini.

**Prioritas** : Minor

---

### Temuan IG-10 — Beban Kognitif

**Lokasi** : L13 — teks

**Teks** : `"Kiki & Momo digunakan oleh satu pasangan setiap giliran — pasangan lain praktik tanpa boneka. Ganti pasangan setiap ±1 menit saat guru memberi sinyal."`

**Alasan** : Guru harus mengelola rotasi boneka (siapa yang pegang, kapan ganti, memberi sinyal) sambil mendampingi grup Need Help. Terlalu banyak hal yang harus dilacak secara bersamaan.

**Rekomendasi** : Sederhanakan pengelolaan boneka: `"Kiki & Momo hanya untuk grup Need Help. Guru pegang Kiki, siswa pegang Momo. Ganti siswa setiap 1 menit."`

**Prioritas** : Sedang

---

## BAGIAN 3 — DOMAIN UCAP

---

### UC-04 — Child Comprehension

**Lokasi** : L13 — teks

**Temuan** : UCAP `"Now let us practice. If you need help, look at the cards. If you are ready, try without the cards."` meminta siswa kelas 1 melakukan self-assessment dari satu kalimat dan memilih kelompoknya sendiri. Dua kondisi bersyarat dalam satu UCAP terlalu kompleks untuk dipahami melalui pendengaran pertama.

**Rekomendasi** : Pisah menjadi dua UCAP dengan gesture berbeda:
- (sambil tunjuk kartu di papan) `"Look at the cards. Say it with me."`
- (sambil sembunyikan kartu) `"No cards. Try alone."`
Guru mengarahkan UCAP berbeda ke masing-masing kelompok.

---

### UC-06 — Consistency (UCAP "Good morning")

**Lokasi** : preOpening, L1, L2, L10

**Temuan** : UCAP "Good morning" hardcoded di empat titik. TP mengajarkan empat salam sesuai waktu. Jika pembelajaran berlangsung sore, seluruh contoh model tidak sesuai konteks.

**Rekomendasi** : Tambahkan catatan di cue preOpening: `"Sesuaikan 'Good morning' dengan waktu kelas hari ini."` agar berlaku sebagai panduan global.

---

### UC-06 — Consistency (Bahasa Cue)

**Lokasi** : L1 cue, L2 cue, L7 cue

**Temuan** : Tiga cue mencampur English dan Bahasa Indonesia. Semua cue lain menggunakan Bahasa Indonesia penuh.

**Rekomendasi** :
- L1 cue: `"Satu demo saja — jangan diulang."`
- L2 cue: `'Langsung model jawaban setelah ucap "Say it with me!" — jangan jeda.'`
- L7 cue: `"Tempo cepat tapi terkontrol — siswa tetap duduk. Berhenti saat energi masih tinggi."`

---

## BAGIAN 4 — QUALITY GATE

| Gate | Status |
|------|--------|
| A — Keterpakaian Guru | Belum — 2 temuan Mayor di L11 |
| B — Keterpakaian Siswa | Belum — UCAP L13 terlalu kompleks |
| C — Keterpakaian UCAP | Belum — UC-06 konsistensi |
| D — Keterpakaian TTS | Lulus |
| E — Keterpakaian Redaksi | Belum — IG-03 Mayor di L11 |
| F — Beban Kognitif | Belum — IG-10 di L13 |
| G — Konsistensi | Belum — UC-06 bahasa cue |
| H — Tujuan Pedagogis | Lulus |

---

## BAGIAN 5 — RINGKASAN

**Jumlah Temuan Mayor** : 2
**Jumlah Temuan Sedang** : 6
**Jumlah Temuan Minor** : 2

| # | Kode | Lokasi | Isu | Prioritas |
|---|------|--------|-----|-----------|
| 1 | IG-03 | L11 | Tunggu respons sebelum pertanyaan diajukan | Mayor |
| 2 | IG-03 | L11 | Dengarkan dulu → langsung ucapkan (tanpa demo) | Mayor |
| 3 | UC-06 | preOpening/L1/L2/L10 | "Good morning" hardcoded | Sedang |
| 4 | IG-04 | preOpening cue | Cue terlalu panjang | Sedang |
| 5 | IG-05 | L13 | Pembagian kelompok tanpa mekanisme konkret | Sedang |
| 6 | IG-08 | L9 → L10 | "Sit down" dan tunggu duduk diulang | Sedang |
| 7 | IG-10 | L13 | Logistik rotasi boneka terlalu kompleks | Sedang |
| 8 | UC-04 | L13 | UCAP self-assessment dua kondisi untuk kelas 1 | Sedang |
| 9 | IG-08 | L9 | "Lanjut ke Real Life" — meta-navigasi redundan | Minor |
| 10 | UC-06 | L1/L2/L7 cue | Bahasa cue tidak konsisten (campur EN-ID) | Minor |

---

## BAGIAN 6 — STATUS AKHIR

**BELUM LULUS**

Alasan: Dua temuan Mayor di L11 menyebabkan guru harus menunggu respons yang tidak dipicu (IG-03a) dan meminta siswa mengucapkan tanpa ada model yang didengar terlebih dahulu (IG-03b).

---

## BAGIAN 7 — UJI 3 DETIK

**Guru** : Masih perlu berpikir (L11)

**Siswa** : Masih perlu penjelasan (L13 UCAP)

**TTS** : Langsung menghasilkan audio yang sesuai

---

## BAGIAN 8 — PERTANYAAN TERAKHIR

> Jika saya adalah guru yang berdiri di depan 25 siswa sambil memegang HP, apakah saya dapat menggunakan TP ini tanpa berhenti berpikir?

**Tidak** — L11 memerlukan improvisasi dan L13 memerlukan keputusan pembagian kelompok yang belum terpanduan.

Audit belum selesai.

---

**Catatan untuk revisi:** Prioritaskan perbaikan 2 temuan Mayor di L11. Setelah itu, temuan Sedang di L13 (IG-05, IG-10, UC-04) dapat ditangani dalam satu putaran karena saling berkaitan.
