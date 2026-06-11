# AUDIT REPORT — FASE A (TP01–TP18)

**Standar acuan:** `docs/AUDIT TP FLAF V3.md` (AUDIT OS FLAF Versi 3.0) — satu-satunya acuan.
**Direktori objek audit:** `docs/output-v5/tp-01-v5.js` … `tp-18-v5.js`
**Tanggal audit:** 2026-06-08
**Aturan keras:** hanya 7 field objek audit; file TP asli tidak diubah; setiap temuan disertai justifikasi + kode standar.

---

## Ruang Lingkup Field (BAB 7)

Hanya tujuh field berikut yang diaudit:

1. `preOpening.teks`
2. `preOpening.cue`
3. `langkah.teks`
4. `langkah.bantuan`
5. `langkah.cue`
6. `langkah.darurat`
7. `langkah.diferensiasi`

**Dikecualikan (BAB 7):** `langkah.energi`, `langkah.tipe`, dan seluruh field non-objek-audit
(`id`, `nomor`, `kelas`, `nama`, `tema`, `deskripsi`, `indikator`, `vocab`, `persiapan`,
`media`, `printables`, `checklist`, `energi_map`, `catatan`, `durasi`, `fase`). Istilah asing di
field-field tersebut **tidak** dilaporkan.

**Catatan schema v5.0:** field `langkah.diferensiasi` hanya muncul pada sebagian langkah
(berupa objek `{ needHelp, ready }`). Bila tidak ada pada sebuah TP/langkah → dicatat
`✅ tidak ada di TP ini`. Konten diferensiasi yang tertanam di dalam `langkah.teks` tetap diaudit
sebagai bagian dari `langkah.teks`.

---

## Metodologi Penegakan "Istilah Asing pada Instruksi Guru" (BAB 7)

Pelanggaran utama yang dikejar standar: **istilah asing/jargon pada teks instruksi guru
(non-UCAP)** — lihat BAB 7 GAGAL dan CATATAN: UCAP DAN ISTILAH ASING.

**Dikecualikan dari larangan istilah asing (tidak ditandai):**

1. **Segmen UCAP** — seluruh teks Inggris dalam tanda kutip yang diucapkan ke siswa
   (`UCAP: "..."`) serta baris dialog/model (`→ Kiki:`, `→ Momo:`, `→ Siswa:`, `→ Mom:`, dll.).
   Ini bahasa yang memang diperdengarkan ke siswa (BAB 7 CATATAN).
2. **Nama karakter** boneka: Kiki, Momo.
3. **Kata serapan baku** dalam bahasa Indonesia: mode, materi/material, demo, game, poin, kartu,
   poster, spidol, volume, fokus, sinyal, energi.
4. **Nama aktivitas/objek yang sudah diputuskan dipertahankan** pada audit sebelumnya
   (commit `bef0c22`, "fix TP-01..03 — istilah asing"): **"Simon Says", "walk and talk",
   "name tag"**. Ini keputusan editorial proyek, bukan penilaian auditor.

**Ditandai sebagai temuan:** istilah/frasa Inggris lain pada `teks`/`cue`/`bantuan`/`darurat`/
`diferensiasi` di luar segmen UCAP, serta pelanggaran BAB 7/BAB 8 lain (ambiguitas, keputusan
operasional belum ditetapkan, konflik instruksi, redundansi).

- `PERLU REVIEW LANJUT: TIDAK` → terjemahan/koreksi langsung jelas.
- `PERLU REVIEW LANJUT: YA` → menyangkut nama bagian/aktivitas berulang yang butuh keputusan
  konsistensi penamaan lintas TP (BAB 4.6 / BAB 6).

---

# TEMUAN TP-01 (Greetings & Farewells)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ tidak ada di TP ini (diferensiasi
tertanam di langkah.teks L13, diaudit sebagai langkah.teks).

### Temuan 1.1
- **STANDAR:** BAB 7 — GAGAL: "Istilah asing atau jargon pada teks instruksi guru (non-UCAP)"; BAB 8 — `langkah.cue`
- **FIELD:** langkah.cue
- **LANGKAH:** L7 (Inti — chant bersama)
- **TEKS ASLI:** `Fast but controlled — pertahankan siswa tetap duduk selama chant. Berhenti saat energi masih tinggi.`
- **MASALAH:** "Fast but controlled" adalah frasa bahasa Inggris pada cue (instruksi guru, non-UCAP). Guru harus menerjemahkan saat membaca → melanggar Uji 3 Detik.
- **REKOMENDASI:** `Cepat tapi terkendali — pertahankan siswa tetap duduk selama chant. Berhenti saat energi masih tinggi.`
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 1.2
- **STANDAR:** BAB 7 — GAGAL: "Istilah asing atau jargon pada teks instruksi guru (non-UCAP)"; BAB 6 (konsistensi penamaan)
- **FIELD:** langkah.teks (L8, L9), langkah.darurat (L8), langkah.cue (L10)
- **LANGKAH:** L8, L9, L10 (Inti)
- **TEKS ASLI:**
  - L8 teks: `... AKSI: Lanjut ke aktivitas Real Life.`
  - L8 darurat: `Waktu ≤10 menit → lewati game, lanjut ke Layar 11 (Real Life).`
  - L9 teks: `... AKSI: Lanjut ke aktivitas Real Life.`
  - L10 cue: `Tunjuk ke luar jendela — arah rumah — saat membuka konteks Real Life. ...`
- **MASALAH:** "Real Life" adalah nama bagian/aktivitas dalam bahasa Inggris pada teks instruksi guru (non-UCAP), muncul di 4 lokasi. Istilah asing + berpotensi tidak konsisten.
- **REKOMENDASI:** Ganti seluruh "Real Life" → "Kehidupan Sehari-hari" (mis. "Lanjut ke aktivitas Kehidupan Sehari-hari", "Layar 11 (Kehidupan Sehari-hari)", "saat membuka konteks kehidupan sehari-hari").
- **PERLU REVIEW LANJUT:** YA
- **ALASAN:** "Real Life" dipakai sebagai nama bagian yang berulang; perlu keputusan editorial agar penamaan konsisten di seluruh TP (BAB 4.6).

### Temuan 1.3
- **STANDAR:** BAB 7 — GAGAL: "Istilah asing atau jargon pada teks instruksi guru (non-UCAP)"
- **FIELD:** langkah.cue
- **LANGKAH:** L8 (Inti — buka game)
- **TEKS ASLI:** `Turunkan tangan perlahan dan tunjuk mata sendiri saat reset — kelas perlu momen hening sebelum game dimulai. Jika kelas cepat tenang, langsung masuk game tanpa reset panjang.`
- **MASALAH:** "reset" (2×) adalah jargon Inggris pada cue. Pada audit sebelumnya, istilah "reset" yang sama sudah diterjemahkan di TP02/TP03 menjadi "menenangkan kelas" → ini residu yang terlewat.
- **REKOMENDASI:** `Turunkan tangan perlahan dan tunjuk mata sendiri saat menenangkan kelas — kelas perlu momen hening sebelum game dimulai. Jika kelas cepat tenang, langsung masuk game tanpa menenangkan terlalu lama.`
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 1.4
- **STANDAR:** BAB 7 — GAGAL: "Istilah asing atau jargon pada teks instruksi guru (non-UCAP)"
- **FIELD:** langkah.teks
- **LANGKAH:** L13 (Inti — praktik berpasangan)
- **TEKS ASLI:** `... AKSI: Bagi aktivitas menjadi dua kelompok berikut: - Need Help: gunakan kartu — guru pegang Kiki, siswa pegang Momo — dialog bersama guru. - Ready: tanpa kartu — pilih satu salam dan satu orang ...`
- **MASALAH:** Label kelompok "Need Help" dan "Ready" berbahasa Inggris pada teks instruksi guru (non-UCAP). (Catatan: UCAP "Now let us practice. If you need help... if you are ready..." tetap Inggris dan dikecualikan.)
- **REKOMENDASI:** Ganti label menjadi `- Butuh Bantuan: gunakan kartu ...` dan `- Siap: tanpa kartu ...`
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

---

# TEMUAN TP-02 (Introducing Myself)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ (ada di L11; LULUS).

### Temuan 2.1
- **STANDAR:** BAB 7 — GAGAL: "Istilah asing atau jargon pada teks instruksi guru (non-UCAP)"; BAB 6 (konsistensi)
- **FIELD:** langkah.cue
- **LANGKAH:** L9 (Inti — aturan walk and talk)
- **TEKS ASLI:** `Turunkan tangan perlahan dan tunjuk mata sendiri saat menenangkan kelas — kelas perlu momen hening sebelum aturan dijelaskan. Clap twice = berhenti berbicara, berhenti bergerak, lihat guru — praktikkan sekali bersama kelas sebelum mulai.`
- **MASALAH:** "Clap twice" frasa Inggris pada cue. Di L10 cue istilah yang sama sudah diterjemahkan menjadi "dua tepukan tangan" → inkonsistensi internal + istilah asing non-UCAP.
- **REKOMENDASI:** `... saat menenangkan kelas — kelas perlu momen hening sebelum aturan dijelaskan. Dua tepukan tangan = berhenti berbicara, berhenti bergerak, lihat guru — praktikkan sekali bersama kelas sebelum mulai.`
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 2.2
- **STANDAR:** BAB 7 — GAGAL: "Istilah asing atau jargon pada teks instruksi guru (non-UCAP)"; BAB 6 (konsistensi)
- **FIELD:** langkah.teks
- **LANGKAH:** L10 (Inti — pelaksanaan walk and talk)
- **TEKS ASLI:** `AKSI: Beri aba-aba mulai. ... AKSI: Clap twice untuk berhenti. UCAP: "Go back to your seat." ...`
- **MASALAH:** "Clap twice" pada teks instruksi guru (non-UCAP). Tidak konsisten dengan terjemahan di cue L10 ("dua tepukan tangan").
- **REKOMENDASI:** `... AKSI: Beri dua tepukan tangan untuk berhenti. UCAP: "Go back to your seat." ...`
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 2.3
- **STANDAR:** BAB 7 — GAGAL: "Istilah asing atau jargon pada teks instruksi guru (non-UCAP)"
- **FIELD:** langkah.bantuan
- **LANGKAH:** L10 (Inti)
- **TEKS ASLI:** `Jika kelas terlalu ramai: clap twice → "Hands down. Eyes on me." — reset sebentar lalu lanjut.`
- **MASALAH:** Dua istilah asing non-UCAP: "clap twice" dan "reset". (UCAP "Hands down. Eyes on me." dikecualikan.)
- **REKOMENDASI:** `Jika kelas terlalu ramai: beri dua tepukan tangan → "Hands down. Eyes on me." — tenangkan sebentar lalu lanjut.`
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

---

# TEMUAN TP-03 (Classroom Instructions)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ (ada di L10; LULUS).

### Temuan 3.1
- **STANDAR:** BAB 7 — GAGAL: "Istilah asing atau jargon pada teks instruksi guru (non-UCAP)"
- **FIELD:** langkah.teks
- **LANGKAH:** L10 (Inti — praktik berpasangan)
- **TEKS ASLI:** `... AKSI: Keliling selama partner practice — prioritaskan: kebisingan (jika naik, tepuk tangan sekali dan bisik "small voice"), semua siswa ikut, baru diferensiasi level.`
- **MASALAH:** "partner practice" adalah istilah Inggris pada teks instruksi guru (non-UCAP). Istilah jargon sejenis di langkah ini ("Proximity control", "noise") sudah diterjemahkan pada audit sebelumnya → "partner practice" residu yang terlewat. (UCAP "small voice" dalam kutip dikecualikan.)
- **REKOMENDASI:** `... AKSI: Keliling selama latihan berpasangan — prioritaskan: kebisingan (jika naik, tepuk tangan sekali dan bisik "small voice"), semua siswa ikut, baru diferensiasi level.`
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

---

# TEMUAN SISTEMIK (berlaku lintas TP)

Dua pola pelanggaran muncul berulang di banyak TP. Agar laporan tidak memuat ratusan entri
identik, kedua pola dilaporkan sekali di sini dengan indeks lokasi per TP. Pada bagian per-TP,
temuan ini **tidak diulang** — hanya dirujuk ("lihat SIS-1 / SIS-2").

### TEMUAN SISTEMIK SIS-1 — Marker terstruktur berbahasa Inggris + emoji pada `langkah.teks`
- **STANDAR:** BAB 7 — GAGAL: "Istilah asing atau jargon pada teks instruksi guru (non-UCAP)"; BAB 6 (konsistensi)
- **FIELD:** langkah.teks
- **LANGKAH:** tersebar di banyak langkah (lihat indeks di bawah)
- **TEKS ASLI (contoh):** `👂 LISTEN FIRST`, `🗣 TOGETHER`, `🗣 FULL 6`, `⚡ MICRO-FREEZE`, `⚡ MINI DISCRIMINATION CHECK`, `⚡ MINI CONTRAST CHECK`, `🔁 Putaran acak`
- **MASALAH:** Penanda struktur ini memakai label berbahasa Inggris (LISTEN FIRST, TOGETHER, FULL, MICRO-FREEZE, dst.) pada teks instruksi guru (non-UCAP). Ini istilah asing pada field instruksi. Audit sebelumnya (commit `bef0c22`) sudah mengubah `🗣 TOGETHER → Siswa:` di TP-03 menjadi `AKSI: Ajak seluruh kelas mengucapkan bersama. → Siswa:`, sehingga keberadaannya di TP lain menimbulkan inkonsistensi lintas TP.
- **REKOMENDASI:** Ganti tiap marker menjadi baris AKSI berbahasa Indonesia yang setara, mengikuti pola TP-03 hasil audit sebelumnya. Pemetaan yang disarankan:
  - `👂 LISTEN FIRST` → `AKSI: Minta siswa mendengarkan dulu tanpa menirukan.`
  - `🗣 TOGETHER` → `AKSI: Ajak seluruh kelas mengucapkan bersama.`
  - `🗣 FULL 6` → `AKSI: Ucapkan keenam kata sekaligus bersama kelas.`
  - `⚡ MICRO-FREEZE` → `AKSI: Minta kelas diam sejenak.`
  - `⚡ MINI DISCRIMINATION CHECK` / `⚡ MINI CONTRAST CHECK` → `AKSI: Cek pembeda singkat (bandingkan dua kartu).`
  - `🔁 Putaran acak` → `AKSI: Putaran acak.`
- **PERLU REVIEW LANJUT:** YA
- **ALASAN:** Marker ini tersebar di hampir seluruh TP04 & TP06–TP17 — **termasuk TP15–17** (tier kanonik). Perlu keputusan editorial menyeluruh: pertahankan sebagai konvensi penanda atau terjemahkan untuk konsistensi BAB 7/BAB 6. Karena menyentuh banyak file sekaligus, sebaiknya diputuskan dan dikerjakan dalam satu sesi tersendiri.
- **INDEKS LOKASI (TP : penanda yang muncul):**
  - TP-04: `🗣 TOGETHER` (L13)
  - TP-06: `👂 LISTEN FIRST` ×2, `🗣 TOGETHER` ×2, `🗣 FULL 6` (L3, L12)
  - TP-07: `👂 LISTEN FIRST`, `🗣 TOGETHER`, `⚡ MICRO-FREEZE`, `⚡ MINI DISCRIMINATION CHECK` (L2–L9, L16)
  - TP-08: `👂 LISTEN FIRST`, `🗣 TOGETHER` (×5), `⚡ MINI CONTRAST CHECK`, `🔁 Putaran acak` (L2–L8, L15)
  - TP-09: `👂 LISTEN FIRST` ×4, `🗣 TOGETHER` ×3 (L2–L9)
  - TP-10: `👂 LISTEN FIRST` ×4, `🗣 TOGETHER` ×3 (L2–L9)
  - TP-11: `👂 LISTEN FIRST` ×3, `🗣 TOGETHER` ×3 (L2–L8)
  - TP-12: `👂 LISTEN FIRST` ×2, `🗣 TOGETHER` ×3 (L3–L9)
  - TP-13: `👂 LISTEN FIRST` ×3, `🗣 TOGETHER` ×3 (L2–L9)
  - TP-14: `👂 LISTEN FIRST` ×2, `🗣 TOGETHER` ×3 (L2–L9)
  - TP-15: `👂 LISTEN FIRST` ×2, `🗣 TOGETHER` ×3 (L2–L9)
  - TP-16: `👂 LISTEN FIRST`, `🗣 TOGETHER` (L4–L5)
  - TP-17: `👂 LISTEN FIRST` ×2, `🗣 TOGETHER` ×3 (L2–L8)
  - TP-18: lihat hasil pemeriksaan per-TP (dikonfirmasi saat audit TP-18)

### TEMUAN SISTEMIK SIS-2 — Ellipsis unicode `…` pada segmen UCAP
- **STANDAR:** BAB 4.5 — TTS Friendly: "ellipsis unicode … — gunakan ... ASCII"
- **FIELD:** langkah.teks (segmen UCAP) dan field lain yang memuat model ucap
- **LANGKAH:** tersebar (lihat hitungan per TP)
- **TEKS ASLI (contoh):** `"There is…"`, `"3… 2… 1…"`, `"Grand— … mother!"`, `"I like…"`
- **MASALAH:** Karakter ellipsis unicode `…` dipakai di dalam segmen UCAP yang diputar TTS. BAB 4.5 mewajibkan ASCII `...` agar audio TTS konsisten. Audit sebelumnya (commit `bef0c22`) sudah mengganti `Hmm…` → `Hmm...` di TP-01.
- **REKOMENDASI:** Ganti seluruh `…` (U+2026) menjadi tiga titik ASCII `...` pada segmen UCAP di setiap TP.
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —
- **HITUNGAN PER TP (jumlah `…`):** TP-05: 2 · TP-07: 6 · TP-08: 7 · TP-09: 3 · TP-10: 5 · TP-11: 6 · TP-12: 14 · TP-13: 8 · TP-14: 3 · TP-15: 2 · TP-16: 1 · TP-17: 4 · TP-18: 1. (TP-01–04 & TP-06 sudah bersih / memakai ASCII.)

### TEMUAN SISTEMIK SIS-3 — `cue`/`bantuan` terpotong + fragmen menggantung di `teks` (artefak batch converter)
- **STANDAR:** BAB 8 — `langkah.cue` GAGAL ("menjelaskan prosedur panjang"/tidak berfungsi sebagai pengingat utuh) & `langkah.teks` GAGAL ("Lompat logika", "Kurang operasional"); BAB 7 — GAGAL ("Ambigu", "Keputusan operasional yang belum ditetapkan")
- **FIELD:** langkah.cue, langkah.bantuan, langkah.teks (dan preOpening.cue/teks)
- **LANGKAH:** tersebar di TP-07 s/d TP-14 (lihat indeks per-TP di tiap bagian)
- **TEKS ASLI (contoh TP-09 preOpening):**
  - cue: `Layar ini pendek dan wajib. Jangan skip. Fungsinya mengunci` ← terpotong
  - teks (ekor): `... UCAP: "...Let's start." perhatian kelas sebelum masuk sesi. Jika kelas belum fokus: ...` ← fragmen `perhatian kelas sebelum masuk sesi.` menggantung tanpa AKSI/UCAP
- **MASALAH:** Konversi batch (lihat header file: "tidak dapat diparsing dari txt") salah memotong tiap catatan: **awal** catatan tertinggal di `cue`/`bantuan` lalu terpotong, sedangkan **ekornya** menempel sebagai fragmen tanpa AKSI/UCAP di akhir `teks`. Akibatnya: (a) `cue` tidak utuh → tidak bisa dipakai sekali baca; (b) `teks` memuat kalimat menggantung yang membingungkan (lompat logika). Banyak `cue` berakhir di tengah kata/frasa ("— setiap", "Guru tetap", "tunjuk benda dulu, tunjuk", "Hanya 3").
- **REKOMENDASI:** Perbaikan bersifat mekanis — **gabungkan kembali**: pindahkan fragmen menggantung dari akhir `teks` untuk melengkapi `cue`/`bantuan` langkah yang sama, lalu rapikan. Sumber acuan: `docs/skenario/flaf-skenario-tp{NN}-v2.txt`. Sekaligus terjemahkan istilah asing yang ikut terbawa (lihat bagian per-TP).
- **PERLU REVIEW LANJUT:** YA
- **ALASAN:** Membutuhkan rujukan ke txt skenario sumber untuk memastikan teks lengkap yang benar; sebaiknya dikerjakan satu sesi perbaikan data tersendiri. Indeks langkah terdampak dicantumkan di tiap bagian TP.

---

# TEMUAN TP-04 (Numbers 1–20)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ (ada di L9; LULUS). Lihat juga SIS-1 (🗣 TOGETHER di L13).

### Temuan 4.1
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** preOpening.cue, langkah.cue (L1), langkah.teks (L14)
- **LANGKAH:** preOpening, L1, L14
- **TEKS ASLI:**
  - preOpening cue: `... Jangan mulai clap and count sebelum kelas tenang. ...`
  - L1 cue: `... jangan tunggu terlalu lama, keep the energy moving. Angkat tangan sebagai micro-transition fisik sebelum clap and count.`
  - L14 teks: `... atau tidak ikut clap and count.`
- **MASALAH:** "clap and count" (3 lokasi), "keep the energy moving", "micro-transition" — frasa/istilah Inggris pada instruksi guru non-UCAP.
- **REKOMENDASI:** "clap and count" → "tepuk dan hitung"; "keep the energy moving" → "jaga energi tetap mengalir"; "micro-transition fisik" → "transisi fisik singkat". Contoh L1 cue: `... jangan tunggu terlalu lama, jaga energi tetap mengalir. Angkat tangan sebagai transisi fisik singkat sebelum tepuk dan hitung.`
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 4.2
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.teks (L3), langkah.cue (L3)
- **LANGKAH:** L3
- **TEKS ASLI:**
  - L3 teks: `... AKSI: Putaran kedua — whisper voice: "Whisper voice!" → Siswa ucap semua angka dengan suara bisik.`
  - L3 cue: `Guru ucapkan sendiri dulu sebelum siswa ikut. Whisper voice menjaga bentuk bunyi asli lebih baik dari robot voice — satu putaran singkat saja.`
- **MASALAH:** "whisper voice" / "Whisper voice" (penanda instruksi non-UCAP, beda dari UCAP "Whisper voice!" yang diucapkan) dan "robot voice" pada cue. (UCAP `"Whisper voice!"` dalam kutip dikecualikan.)
- **REKOMENDASI:** teks: `... AKSI: Putaran kedua — suara bisik: "Whisper voice!" ...`; cue: `... Suara bisik menjaga bentuk bunyi asli lebih baik dari suara datar/robot — satu putaran singkat saja.`
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 4.3
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.teks (L5), langkah.bantuan (L5), langkah.cue (L5)
- **LANGKAH:** L5
- **TEKS ASLI:**
  - L5 teks: `... AKSI: Minta siswa mendengarkan Chunk 1 ... mendengarkan Chunk 2 ... AKSI: Semi-echo satu putaran ...`
  - L5 bantuan: `Jika kelas kuat: skip semi-echo, langsung full chunk.`
  - L5 cue: `Ucapkan Chunk 1 pelan ... Jangan terlalu lama di semi-echo — tempo runtuh jika over-scaffolding. Fokus ke exposure, bukan akurasi.`
- **MASALAH:** "Chunk 1/2", "Semi-echo/semi-echo", "skip", "full chunk", "over-scaffolding", "exposure" — istilah asing/jargon pada instruksi guru.
- **REKOMENDASI:** "Chunk 1/2" → "Bagian 1/2"; "Semi-echo" → "tiru bertahap (satu kata, jeda, siswa ikut)"; "skip" → "lewati"; "full chunk" → "langsung satu rangkaian penuh"; "over-scaffolding" → "terlalu banyak bantuan"; "exposure" → "paparan / kesempatan mendengar".
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 4.4
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.teks (L7), langkah.bantuan (L7), langkah.cue (L7)
- **LANGKAH:** L7
- **TEKS ASLI:**
  - L7 teks: `... AKSI: Selingi 1–2 ronde whole class di antara ronde individual. ...`
  - L7 bantuan: `... Jika chaos: "Freeze. Hands down. Eyes here." → reset → lanjut.`
  - L7 cue: `Jangan pakai "Fast!" untuk belasan — target masih recognition stabil, bukan speed. Ronde whole class menjaga partisipasi merata — siswa lambat tetap dapat exposure.`
- **MASALAH:** "whole class" (2×), "chaos", "reset", "recognition", "speed", "exposure" — istilah asing/jargon non-UCAP. (UCAP `"Freeze. Hands down. Eyes here."` dan `"Fast!"` dikecualikan.)
- **REKOMENDASI:** "whole class" → "seluruh kelas"; "chaos" → "kelas gaduh/kacau"; "reset" → "tenangkan"; "recognition" → "pengenalan"; "speed" → "kecepatan"; "exposure" → "kesempatan mendengar".
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 4.5
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.cue (L8), langkah.diferensiasi (L9), langkah.cue (L9)
- **LANGKAH:** L8, L9
- **TEKS ASLI:**
  - L8 cue: `Semua benda harus sudah reachable di meja guru ... Object talk singkat — kembali ke counting cepat. ... "There are..." adalah bonus yang guru model saja.`
  - L9 diferensiasi.ready: `... guru model "There are [n] [benda]" jika siswa siap ikuti.`
  - L9 cue: `Ucapkan "Partner voice" sebelum mulai — volume cue cegah eskalasi noise.`
- **MASALAH:** "reachable", "Object talk", "counting", "model" (kata kerja, 2 lokasi), "volume cue", "noise" — istilah asing/jargon non-UCAP.
- **REKOMENDASI:** "reachable" → "dalam jangkauan"; "Object talk" → "bahas benda sebentar"; "counting" → "menghitung"; "guru model" → "guru contohkan"; "volume cue" → "isyarat volume suara"; "eskalasi noise" → "kegaduhan meningkat".
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 4.6
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP; BAB 6 (konsistensi)
- **FIELD:** langkah.teks (L11), langkah.cue (L11)
- **LANGKAH:** L11
- **TEKS ASLI:**
  - L11 teks: `... AKSI: Group 1 duduk. ... AKSI: Group 2 duduk. ... AKSI: Group 3 duduk. ...`
  - L11 cue: `Siswa tetap duduk saat "Blast off!" — cegah re-escalation sebelum refleksi. ...`
- **MASALAH:** "Group 1/2/3" sebagai label pada instruksi (AKSI), dan "re-escalation" pada cue. (Catatan: UCAP `"Group 1, ten!"` dikecualikan; label lisan tetap "Group".)
- **REKOMENDASI:** Pada AKSI gunakan "Kelompok 1/2/3 duduk." (guru tetap mengucapkan UCAP "Group 1"); "re-escalation" → "kelas kembali ramai".
- **PERLU REVIEW LANJUT:** YA
- **ALASAN:** Penamaan kelompok di AKSI ("Kelompok") vs label lisan UCAP ("Group") perlu keputusan konsistensi agar guru tidak bingung.

### Temuan 4.7
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP; BAB 6 (konsistensi dengan hasil audit TP-03)
- **FIELD:** langkah.cue (L13)
- **LANGKAH:** L13
- **TEKS ASLI:** `Model volume "Soft goodbye" dulu sebelum chorus — cegah eskalasi noise di penutup.`
- **MASALAH:** "Model" (kata kerja), "chorus", "eskalasi noise" — identik dengan cue L13 TP-03 yang SUDAH diperbaiki audit sebelumnya menjadi "Tunjukkan ... ucap bersama ... kelas semakin gaduh". Di TP-04 belum diperbaiki. (UCAP `"Soft goodbye"` dikecualikan.)
- **REKOMENDASI:** `Tunjukkan volume "Soft goodbye" dulu sebelum ucap bersama — cegah kelas semakin gaduh di penutup.`
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

---

# TEMUAN TP-05 (Colours)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ (ada di L9; LULUS). Lihat juga SIS-2 (2 ellipsis unicode di L5 & L9).

### Temuan 5.1
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.cue (L4)
- **LANGKAH:** L4
- **TEKS ASLI:** `Urutan drill: red → blue → green → yellow → orange → purple → black → white. Pakai "Fast voice!" setelah red/blue/green/black. Tempo normal untuk yellow/orange/purple — fonologi lebih sulit.`
- **MASALAH:** "drill" istilah asing pada cue (audit sebelumnya menerjemahkan "Micro-drill" → "Latihan singkat" di TP-03). (UCAP `"Fast voice!"` dikecualikan.)
- **REKOMENDASI:** `Urutan latihan: red → blue → ... Pakai "Fast voice!" setelah red/blue/green/black. Tempo normal untuk yellow/orange/purple — bunyinya lebih sulit.`
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 5.2
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.cue (L5), langkah.bantuan (L6), langkah.bantuan (L8), langkah.cue (L5)
- **LANGKAH:** L5, L6, L8
- **TEKS ASLI:**
  - L5 cue: `... Pilih benda yang benar-benar dekat untuk demo — model jarak pendek.`
  - L6 bantuan: `Jika berlari: clap twice → "Walk!"`
  - L8 bantuan: `... angguk dan model kalimat penuh — ucap 'This is my book. It is red.' lalu isyarat ...`
- **MASALAH:** "model" (kata kerja, L5 & L8), "clap twice" (L6) — istilah asing non-UCAP.
- **REKOMENDASI:** "model jarak pendek" → "contohkan jarak pendek"; "clap twice" → "beri dua tepukan tangan"; "model kalimat penuh" → "contohkan kalimat penuh".
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 5.3
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.cue (L7)
- **LANGKAH:** L7
- **TEKS ASLI:** `Diam 15 detik dulu setelah cooldown — jangan terburu masuk modeling. Tas ditutup dan diletakkan sebelum tampil — fokus ke speaking.`
- **MASALAH:** "cooldown", "modeling", "speaking" — istilah asing non-UCAP.
- **REKOMENDASI:** `Diam 15 detik dulu untuk menenangkan — jangan terburu masuk pemberian contoh. Tas ditutup dan diletakkan sebelum tampil — fokus ke berbicara.`
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 5.4
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.cue (L11), langkah.cue (L12)
- **LANGKAH:** L11, L12
- **TEKS ASLI:**
  - L11 cue: `Gesture besar santai — tidak harus tunjuk semua kartu presisi. Lagu penutup = shared emotional ending, bukan akurasi drill.`
  - L12 cue: `Ucapkan "Soft goodbye" dulu sebelum chorus — set volume penutup yang tenang.`
- **MASALAH:** "Gesture", "shared emotional ending", "drill" (L11); "chorus", "set" (L12). (UCAP `"Soft goodbye"` dikecualikan.)
- **REKOMENDASI:** "Gesture besar santai" → "Gerakan besar santai"; "shared emotional ending" → "momen kebersamaan penutup"; "drill" → "latihan"; "chorus" → "ucap bersama"; "set volume" → "atur volume".
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 5.5
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP; BAB 6 (konsistensi)
- **FIELD:** langkah.teks (L13)
- **LANGKAH:** L13
- **TEKS ASLI:** `... AKSI: Catat siswa yang tidak mau tampil show and tell. ...`
- **MASALAH:** "show and tell" nama aktivitas berbahasa Inggris pada teks instruksi (juga muncul di L7 konteks). Setara kasus "walk and talk" yang dipertahankan di TP-02 — butuh keputusan editorial.
- **REKOMENDASI:** Pertahankan sebagai nama baku, atau terjemahkan konsisten (mis. "tunjuk dan cerita") di seluruh TP-05.
- **PERLU REVIEW LANJUT:** YA
- **ALASAN:** Nama aktivitas berulang; perlu keputusan keep-as-name vs terjemahkan demi konsistensi BAB 4.6.

---

# TEMUAN TP-06 (Shapes)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ (ada di L9; LULUS). Lihat juga SIS-1 (👂 LISTEN FIRST, 🗣 TOGETHER, 🗣 FULL 6 di L3 & L12).

### Temuan 6.1
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.cue (L1, L5)
- **LANGKAH:** L1, L5
- **TEKS ASLI:**
  - L1 cue: `Gesture tangan bentuk dilakukan bersamaan dengan menyebut nama — sebelum kartu dikeluarkan. ...`
  - L5 cue: `Gambar bentuk di udara sambil ucapkan instruksi — gesture visual membantu pemahaman. ...`
- **MASALAH:** "Gesture" / "gesture visual" — istilah asing non-UCAP.
- **REKOMENDASI:** "Gesture tangan bentuk" → "Gerakan tangan membentuk"; "gesture visual" → "gerakan visual".
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 6.2
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.teks (L3), langkah.cue (L3)
- **LANGKAH:** L3
- **TEKS ASLI:**
  - L3 teks: `AKSI: Tempel kartu di papan — dua batch. ... AKSI: Bentuk tangan bulat — pause 1 detik. ... AKSI: Freeze mini 3 detik. ...`
  - L3 cue: `Pause 1 detik setelah setiap bentuk saat modeling. Freeze mini 3 detik antara BATCH 1 dan BATCH 2. Slow voice menjaga artikulasi lebih baik dari whisper.`
- **MASALAH:** "batch"/"BATCH", "pause"/"Pause" (sebagai instruksi), "modeling", "whisper", "Freeze mini" — istilah asing/jargon non-UCAP. (Penanda emoji `👂 LISTEN FIRST`/`🗣 TOGETHER`/`🗣 FULL 6` → lihat SIS-1.)
- **REKOMENDASI:** "batch/BATCH" → "kelompok/GELOMBANG"; "pause 1 detik" → "jeda 1 detik"; "modeling" → "memberi contoh"; "whisper" → "berbisik"; "Freeze mini 3 detik" → "diam sejenak 3 detik".
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 6.3
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.teks (L4)
- **LANGKAH:** L4
- **TEKS ASLI:** `AKSI: Tunjuk kartu kiri ke kanan — satu putaran predictable. ... AKSI: Sebelum surprise: ... AKSI: Reset 3 detik. ...`
- **MASALAH:** "predictable", "surprise" (sebagai instruksi, beda dari UCAP "surprise cards!"), "Reset" — istilah asing non-UCAP.
- **REKOMENDASI:** "satu putaran predictable" → "satu putaran berurutan (mudah ditebak)"; "Sebelum surprise:" → "Sebelum putaran kejutan:"; "Reset 3 detik" → "Tenangkan 3 detik".
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 6.4
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.teks (L6), langkah.bantuan (L6)
- **LANGKAH:** L6
- **TEKS ASLI:**
  - L6 teks: `... AKSI: Setelah selesai — reset sebelum masuk Layar 7. ... AKSI: Reset 5 detik.`
  - L6 bantuan: `Jika chaos: "Hands up. Mouth closed." → reset → lanjut.`
- **MASALAH:** "reset"/"Reset" (3×), "chaos" — istilah asing non-UCAP.
- **REKOMENDASI:** "reset" → "tenangkan"; "Reset 5 detik" → "Tenangkan 5 detik"; "chaos" → "kelas gaduh".
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 6.5
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.teks (L7), langkah.cue (L7)
- **LANGKAH:** L7
- **TEKS ASLI:**
  - L7 teks: `... AKSI: Ladder mini dulu. ...`
  - L7 cue: `Ladder mini dua kata dulu sebelum model full sentence. Kurangi scaffold bertahap di kartu ke-3/4. Target utama dua kata: colour + shape.`
- **MASALAH:** "Ladder mini", "model" (kata kerja), "full sentence", "scaffold", "colour + shape" — istilah asing/jargon non-UCAP.
- **REKOMENDASI:** "Ladder mini" → "naik bertahap (dua kata dulu)"; "model full sentence" → "contohkan kalimat penuh"; "scaffold" → "bantuan"; "colour + shape" → "warna + bentuk".
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 6.6
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.teks (L9), langkah.cue (L9), langkah.cue (L8), langkah.cue (L12)
- **LANGKAH:** L8, L9, L12
- **TEKS ASLI:**
  - L8 cue: `Tas harus ditutup ... fokus ke speaking. ... Terima closest shape untuk benda ambigu — jangan debat.`
  - L9 teks: `... AKSI: Demo switch 10 detik: A bicara. ...`
  - L9 cue: `Demo switch A→B sebelum mulai. ...`
  - L12 cue: `Ucapkan "Soft goodbye" dulu sebelum chorus — set volume penutup yang tenang.`
- **MASALAH:** "speaking", "closest shape" (L8); "switch" sebagai instruksi (L9 teks & cue, beda dari UCAP "Switch."); "chorus", "set" (L12). (UCAP `"Soft goodbye"` dikecualikan.)
- **REKOMENDASI:** "speaking" → "berbicara"; "closest shape" → "bentuk paling mirip"; "Demo switch" → "Contohkan pergantian (A→B)"; "chorus" → "ucap bersama"; "set volume" → "atur volume".
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 6.7
- **STANDAR:** BAB 7 — GAGAL: istilah asing non-UCAP
- **FIELD:** langkah.teks (L10)
- **LANGKAH:** L10
- **TEKS ASLI:** `... Pola: cepat, cepat, pause, cepat lagi. ... AKSI: Pause 2 detik. ...`
- **MASALAH:** "pause" / "Pause" sebagai instruksi (non-UCAP).
- **REKOMENDASI:** "pause" → "jeda"; "Pause 2 detik" → "Jeda 2 detik".
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

---

# TEMUAN TP-07 (My Family)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ tidak ada di TP ini.

**Rujukan sistemik:**
- **SIS-1** (marker emoji-Inggris): `👂 LISTEN FIRST` (L2, L3, L4), `🗣 TOGETHER` (L3, L4, L7, L13), `⚡ MICRO-FREEZE` (L3), `⚡ MINI DISCRIMINATION CHECK` (L4).
- **SIS-3** (cue/teks terpotong-menggantung): preOpening (cue OK, teks ekor), **cue terpotong** di L1, L2, L4, L5, L7, L8; **bantuan terpotong** di L9, L11; **fragmen menggantung di teks** L1 ("jawaban valid…"), L7 ("bangun bertahap…"), L9 ("siswa satunya meniru…").

### Temuan 7.1 — Istilah asing/jargon pada field instruksi (non-UCAP)
- **STANDAR:** BAB 7 — GAGAL: "Istilah asing atau jargon pada teks instruksi guru (non-UCAP)"
- **FIELD:** langkah.teks / langkah.cue / langkah.bantuan (lokasi di kolom)
- **LANGKAH:** preOpening, L2–L13
- **TEKS ASLI → MASALAH → REKOMENDASI (peta istilah):**
  - preOpening.cue: `Tone calm` → istilah Inggris → "Nada tenang"
  - L2.cue: `emotional flavour` → "sentuhan emosi / nada hangat"
  - L4.teks/cue: `Semi-echo`, `discrimination check`, `half-class`, `clarity` → "tiru bertahap (suku kata)", "cek pembeda", "separuh kelas", "kejelasan"
  - L4.teks: `jangan skip` → "jangan lewati"
  - L5.teks/cue: `speed round` → "putaran cepat"
  - L6.teks: `Micro-reset 15 detik` → "jeda tenang 15 detik"
  - L7.cue: `model kalimat penuh` → "contohkan kalimat penuh"
  - L8.teks: `volunteer`, `model sekali` → "siswa sukarela", "contohkan sekali"
  - L9.teks: `DEMO VOLUME`, `partner voice`, `STOPPING SIGNAL`, `vocab`, `printable` → "Contohkan volume", "suara untuk berpasangan", "Isyarat berhenti", "kosakata", "kartu cetak"
  - L10.teks/darurat: `skip`, `Extension opsional` → "lewati", "Perluasan opsional"
  - L11.teks: `volunteer`, `MICRO-RESET`, `exit ticket` → "siswa sukarela", "jeda tenang singkat", "cek akhir"
  - L13.teks: `kartu printable` → "kartu cetak"
- **PERLU REVIEW LANJUT:** TIDAK (terjemahan langsung). Catatan: `printable`/`vocab` dipakai berulang sebagai istilah proyek — bila ingin dipertahankan, perlu keputusan editorial (review YA).
- **ALASAN:** —

---

# TEMUAN TP-08 (My House)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ tidak ada di TP ini.

**Rujukan sistemik:**
- **SIS-1:** `👂 LISTEN FIRST` (L2), `🗣 TOGETHER` (L3, L6 ×3, L7 ×2, L13), `⚡ MINI CONTRAST CHECK` (L3), `🔁 Putaran acak` (L3).
- **SIS-2:** 7 ellipsis unicode (a.l. L4 "Wait… look… answer!", L7 "There is…", L9 "3… 2… 1…", L11 bantuan "There is a…").
- **SIS-3:** preOpening (cue terpotong "…Tone calm" + teks ekor "dijaga dari sini."), **cue terpotong** L1, L2, L3, L4, L6, L7, L8; **bantuan terpotong** L1, L3, L4, L9, L11(×2); **fragmen menggantung di teks** L1 ("koneksi ke vocab…"), L2 ("sesudah."), L4 ("…wajib masuk sequence."), L6 ("dengan menyebut kata — bukan sesudah."), L7 ("ruangan kemudian."), L11 ("…serentak.").

### Temuan 8.1 — Istilah asing/jargon pada field instruksi (non-UCAP)
- **STANDAR:** BAB 7 — GAGAL: istilah asing/jargon non-UCAP
- **FIELD:** langkah.teks / langkah.cue / preOpening.cue
- **LANGKAH:** preOpening, L2–L13
- **PETA ISTILAH:**
  - preOpening.cue: `Tone calm` → "Nada tenang"
  - L2.teks/cue: `Micro-pause` → "jeda singkat"; `gesture` → "gerakan"
  - L3.teks: `speed` (`jangan langsung speed`) → "jangan langsung cepat"; `retrieval cepat` → "pengambilan cepat / sebut cepat"
  - L4.teks/cue: `speed round`, `Discrimination`/`recall`, `sampling individual`, `sequence` → "putaran cepat", "pembedaan/saat mengingat", "ambil contoh per individu", "urutan"
  - L5.teks: `Visual relation` → "hubungan visual / kaitkan gambar"
  - L6.teks: `retention` → "daya ingat"
  - L7.teks: `Processing gap` → "jeda memproses"; `Chunking gesture` (cue) → "gerakan per bagian"
  - L8.teks: `volunteer`, `model sekali`, `gesture` → "siswa sukarela", "contohkan sekali", "gerakan"
  - L9.teks: `ACCEPTANCE RULE`, `SCAFFOLD PARSIAL`, `DEMO VOLUME`, `partner voice`, `STOPPING SIGNAL`, `change voice`/`robot voice`/`slow voice`/`tiny voice` (di teks sebagai label, bukan UCAP) → "Aturan penerimaan", "Bantuan sebagian", "Contohkan volume", "suara berpasangan", "Isyarat berhenti", "ubah suara/suara datar/suara pelan/suara kecil"
  - L10.teks: `level`, `extension`, `full-class` → "tingkat", "perluasan", "seluruh kelas"
  - L11.teks: `volunteer`, `distraksi`, `medium-confidence`, `momentum`, `MICRO-RESET` → "siswa sukarela", "pengalih perhatian", "rasa percaya diri sedang", "lanjut tanpa tekanan", "jeda tenang singkat"
  - L12.teks/cue: `FLEKSIBILITAS RUNTIME`, `teacher-led choral`, `retrieval`, `noisy` → "Fleksibilitas pelaksanaan", "ucap bersama dipimpin guru", "pengambilan/sebut", "gaduh"
  - L13.teks: `kartu printable` → "kartu cetak"
- **PERLU REVIEW LANJUT:** TIDAK (terjemahan langsung; `printable`/`vocab` lihat catatan TP-07).
- **ALASAN:** —

---

# TEMUAN TP-09 (Animals)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ (ada di L10; LULUS).

**Rujukan sistemik:**
- **SIS-1:** `👂 LISTEN FIRST` (L2, L4, L7, L9), `🗣 TOGETHER` (L3, L5, L8).
- **SIS-2:** 3 ellipsis unicode (L8 "A bird can…" / "…fly!", dst.).
- **SIS-3:** preOpening (cue terpotong "…Fungsinya mengunci" + teks ekor "perhatian kelas sebelum masuk sesi."), **cue terpotong** L1, L2, L4, L6, L7, L8, L9, L11; **bantuan terpotong** L3, L5; **fragmen menggantung di teks** L1 ("sendiri dan lanjut."), L2 ("kata lain selain nama hewan."), L3 ("…Jangan buka diskusi…"), L4 ("terpisah. Jangan lanjut…"), L6 ("= Layar 7 gagal."), L7 ("hewan, bukan semua 10."), L8 ("after me — bukan produksi mandiri."), L9 ("tidak perlu jelaskan grammar…").

### Temuan 9.1 — Istilah asing/jargon pada field instruksi (non-UCAP)
- **STANDAR:** BAB 7 — GAGAL: istilah asing/jargon non-UCAP
- **FIELD:** langkah.teks / langkah.cue / preOpening.cue
- **LANGKAH:** preOpening, L1–L12
- **PETA ISTILAH:**
  - preOpening.cue: `Jangan skip` → "Jangan lewati"
  - L4.teks: `Reactivation` → "pengaktifan ulang"; `Quick check` (label, bukan UCAP) → "cek cepat"
  - L5.teks: `medium speed`, `speed round` (cue) → "kecepatan sedang", "putaran cepat"
  - L7.teks: (lihat SIS-1/3) `repeat after me`/`after me` (fragmen) → "tirukan setelah guru"
  - L8.teks: `choral`, `Production target` (cue), `repeat` → "ucap bersama", "target produksi", "tirukan"
  - L9.teks: `grammar` → "tata bahasa"; `natural` (cue) → "wajar/alami"
  - L10.teks: `clue/clues` (sbg instruksi, mis. "beri 1–2 clue") → "petunjuk"; `stop signal`, `Checkpoint tengah`/`switch`, `Acceptance rule` → "isyarat berhenti", "titik cek tengah/pergantian", "aturan penerimaan"
  - L12.cue: `Exit ticket` → "cek akhir / tiket keluar"
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

---

# TEMUAN TP-10 (Food and Drinks)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ tidak ada di TP ini.

**Rujukan sistemik:**
- **SIS-1:** `👂 LISTEN FIRST` (L2, L4, L7, L9), `🗣 TOGETHER` (L3, L5, L8).
- **SIS-2:** 5 ellipsis unicode (a.l. L8 "I like…", "…chicken!").
- **SIS-3:** cue/bantuan terpotong di preOpening & L1–L12 (mayoritas langkah); fragmen menggantung di teks (L1 "tunjuk — tidak dipaksa…", L2 "ada kata lain selain nama makanan.", L6 "Layar 7 gagal.", L9 "dialog → whole-class drill…", L10 "rule berlaku…", L12 "…siswa sendiri. Tidak diperluas."). **Artefak `UCAP: UCAP:` ganda** di L1, L3, L6, L11.

### Temuan 10.1 — `UCAP: UCAP:` ganda pada langkah.teks
- **STANDAR:** BAB 7 — GAGAL: "Redundansi yang tidak perlu"
- **FIELD:** langkah.teks
- **LANGKAH:** L1, L3, L6, L11
- **TEKS ASLI (L1):** `... UCAP: UCAP: "Are you hungry?" ...`
- **MASALAH:** Penanda `UCAP:` tertulis dua kali berurutan — redundansi artefak konversi.
- **REKOMENDASI:** Hapus salah satu `UCAP:` → `... UCAP: "Are you hungry?" ...`
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 10.2 — Istilah asing/jargon pada field instruksi (non-UCAP)
- **STANDAR:** BAB 7 — GAGAL: istilah asing/jargon non-UCAP
- **FIELD:** langkah.teks / langkah.cue / preOpening.cue
- **LANGKAH:** preOpening, L1–L13
- **PETA ISTILAH:**
  - preOpening.cue: `Jangan skip` → "Jangan lewati"
  - L1.cue: `warm-up` → "pemanasan"
  - L4.teks: `Reactivation`, `Quick check` (label) → "pengaktifan ulang", "cek cepat"
  - L5.teks/cue: `medium speed`, `speed round` → "kecepatan sedang", "putaran cepat"
  - L8.cue: `Production target` → "target produksi"
  - L9.teks/cue: `whole-class drill`, `Marker tubuh` → "ucap bersama satu kelas", "penanda tubuh"
  - L10.teks: `stop signal`, `Checkpoint tengah`/`switch`, `Acceptance rule`, `grammar` → "isyarat berhenti", "titik cek tengah/pergantian", "aturan penerimaan", "tata bahasa"
  - L11.teks: `Quick survey` (label) / `numerasi` → "survei cepat" / (serapan, boleh)
  - L13.teks: `Retrieval mikro` → "pengulangan singkat"
  - L12.cue: `Exit ticket` → "cek akhir"
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

---

# TEMUAN TP-11 (Daily Routines)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ (ada di L9; LULUS).

**Rujukan sistemik:**
- **SIS-1:** `👂 LISTEN FIRST` (L2, L4, L7), `🗣 TOGETHER` (L3, L5, L8).
- **SIS-2:** 6 ellipsis unicode (a.l. L8 "First, I…", "…study!").
- **SIS-3:** cue terpotong di preOpening, L1–L11; bantuan terpotong (L1, L3, L5, L8, L9); fragmen menggantung di teks (L1 "tunjuk — tidak dipaksa… / monolog + gestur…", L6 "Layar 7 gagal.", L8 "…drop First/Then.", L12 "…Tidak diperluas."). **Artefak `UCAP: UCAP:` ganda** di L1.

### Temuan 11.1 — Istilah asing/jargon pada field instruksi (non-UCAP)
- **STANDAR:** BAB 7 — GAGAL: istilah asing/jargon non-UCAP
- **FIELD:** langkah.teks / langkah.cue / langkah.bantuan
- **LANGKAH:** L2–L13
- **PETA ISTILAH:**
  - L2.teks: `anchor pembeda` → "penanda pembeda"
  - L4.teks: `Reactivation`, `Quick check`, `Contrast drill` → "pengaktifan ulang", "cek cepat", "latihan pembeda"
  - L5.cue/teks: `Fast — but clear` (UCAP — dikecualikan); `clarity`/`speed` → "kejelasan/kecepatan"
  - L8.teks/cue: `Choral frame`, `fill-in-the-blank`, `drop connector` (bantuan) → "kerangka ucap bersama", "isian", "menghilangkan kata sambung"
  - L9.teks/cue: `stop signal`, `Checkpoint tengah`/`switch`, `Acceptance rule`, `fragment`, `grammar` → "isyarat berhenti", "titik cek tengah/pergantian", "aturan penerimaan", "penggalan", "tata bahasa"
  - L10.cue: `discourse frame` → "kerangka kalimat"
  - L13.teks: `Retrieval mikro` → "pengulangan singkat"
  - L12.cue: `Exit ticket` → "cek akhir"
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

---

# TEMUAN TP-12 (Body Parts)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ (ada di L10; LULUS).

**Rujukan sistemik:**
- **SIS-1:** `👂 LISTEN FIRST` (L3, L5), `🗣 TOGETHER` (L4, L6, L9).
- **SIS-2:** 14 ellipsis unicode (terbanyak — pola fill-in UCAP "I use my nose…" / "…to smell!", dst.). Prioritas perbaikan.
- **SIS-3:** TP-12 relatif bersih dari pemotongan — cue & bantuan umumnya utuh. **Artefak `UCAP: UCAP:` ganda** di L11.

### Temuan 12.1 — `UCAP: UCAP:` ganda pada langkah.teks
- **STANDAR:** BAB 7 — GAGAL: "Redundansi yang tidak perlu"
- **FIELD:** langkah.teks
- **LANGKAH:** L11
- **TEKS ASLI:** `[Tepuk 1 kali — freeze] UCAP: UCAP: "Stop. Look here." ...`
- **MASALAH:** Penanda `UCAP:` ganda.
- **REKOMENDASI:** `... UCAP: "Stop. Look here." ...`
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 12.2 — Istilah asing/jargon pada field instruksi (non-UCAP)
- **STANDAR:** BAB 7 — GAGAL: istilah asing/jargon non-UCAP
- **FIELD:** langkah.cue (dominan), langkah.teks
- **LANGKAH:** L1–L13
- **PETA ISTILAH (mayoritas pada `cue`):**
  - L1.cue: `hook energi`, `exposure`, `treat lagu sebagai energizer`, `vocab source` → "pemantik energi", "paparan", "perlakukan lagu sebagai pemantik energi", "sumber kosakata"
  - L3.cue: `anchor contrast drill` → "dasar latihan pembeda"
  - L4.cue: `Contrast drill` → "latihan pembeda"
  - L5.cue: `Reactivation`, `Contrast drill`, `Anchor spatial` → "pengaktifan ulang", "latihan pembeda", "penanda ruang"
  - L7.cue: `retrieval dari memori` → "mengingat dari memori"
  - L8.cue: `domain fungsi tubuh` → "cakupan fungsi tubuh"
  - L9.cue: `Choral frame`, `fill-in` → "kerangka ucap bersama", "isian"
  - L10.cue: `Acceptance rule`, `fragment`, `circulate`, `retrieval ... collapse` → "aturan penerimaan", "penggalan", "berkeliling", "agar pengambilan tidak runtuh ke hands/write"
  - L11.cue: `discourse frame` → "kerangka kalimat"
  - L12.cue: `Exit ticket`, `pasangan contrast` → "cek akhir", "pasangan pembeda"
  - L13.teks: `Retrieval mikro` → "pengulangan singkat"
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

---

# TEMUAN TP-13 (Weather and Seasons)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ (ada di L10; LULUS).

**Rujukan sistemik:**
- **SIS-1:** `👂 LISTEN FIRST` (L2, L4, L9), `🗣 TOGETHER` (L3, L5, L8).
- **SIS-2:** 8 ellipsis unicode (pola fill-in UCAP L8 "Today is…", L9 "When it is rainy —").
- **SIS-3:** TP-13 relatif bersih — cue & teks umumnya utuh.

### Temuan 13.1 — Istilah asing/jargon pada field instruksi (non-UCAP)
- **STANDAR:** BAB 7 — GAGAL: istilah asing/jargon non-UCAP
- **FIELD:** langkah.cue (dominan), langkah.teks
- **LANGKAH:** L1–L13
- **PETA ISTILAH:**
  - L1.cue: `kata anchor "weather"` → "kata kunci"
  - L2.cue: `anchor fisik` → "penanda fisik"
  - L3.cue: `Contrast drill`, `circulate` → "latihan pembeda", "berkeliling"
  - L4.cue: `Reactivation`, `Contrast drill`, `anchor utama` → "pengaktifan ulang", "latihan pembeda", "penanda utama"
  - L5.cue: `interference tinggi` → "kebingungan tinggi"
  - L6.cue: `retrieval dari memori` → "mengingat dari memori"
  - L7.cue: `explain`, `improv` → "menjelaskan", "berimprovisasi"
  - L8.cue/bantuan: `konteks real`, `drop` → "konteks nyata", "menghilangkan"
  - L9.cue: `discourse frame`, `vocab benda`, `explain` → "kerangka kalimat", "kosakata benda", "menjelaskan"
  - L10.cue: `Acceptance rule`, `fragment`, `circulate`, `retrieval ... collapse`, `grammar` → "aturan penerimaan", "penggalan", "berkeliling", "agar pengambilan tidak runtuh", "tata bahasa"
  - L11.cue: `discourse frame`, `exit ticket` → "kerangka kalimat", "cek akhir"
  - L12.cue: `Exit ticket`, `pasangan contrast` → "cek akhir", "pasangan pembeda"
  - L13.teks: `Retrieval mikro` → "pengulangan singkat"
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

---

# TEMUAN TP-14 (In the Classroom)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ (ada di L10; LULUS).

**Rujukan sistemik:**
- **SIS-1:** `👂 LISTEN FIRST` (L2, L4), `🗣 TOGETHER` (L3, L5, L8).
- **SIS-2:** 3 ellipsis unicode (pola fill-in UCAP L8).
- **SIS-3:** TP-14 relatif bersih — cue & teks umumnya utuh.

### Temuan 14.1 — Istilah asing/jargon pada field instruksi (non-UCAP)
- **STANDAR:** BAB 7 — GAGAL: istilah asing/jargon non-UCAP
- **FIELD:** langkah.cue (dominan), langkah.teks
- **LANGKAH:** L1–L13
- **PETA ISTILAH:**
  - L1.cue: `kata anchor "classroom"` → "kata kunci"
  - L2.cue: `anchor contrast drill` → "dasar latihan pembeda"
  - L3.cue: `Contrast drill`, `anchor "ink" vs "wood"`, `explain` → "latihan pembeda", "penanda", "menjelaskan"
  - L4.cue: `Reactivation`, `anchor terkuat` → "pengaktifan ulang", "penanda terkuat"
  - L5.cue: `interference`, `contrast drill` → "kebingungan", "latihan pembeda"
  - L6.cue: `retrieval dari benda nyata` → "mengingat"
  - L7.cue: `modeling posisi` → "peragaan posisi"
  - L8.cue: `Choral frame`, `fill-in`, `cue` → "kerangka ucap bersama", "isian", "tanda"
  - L9.cue: `whole-class QA drill`, `Keep the game moving` → "latihan tanya-jawab satu kelas", "jaga permainan tetap bergerak"
  - L10.cue: `Hide — but visible`, `circulate`, `grammar`, `transfer ... real` → "Sembunyikan tapi tetap terlihat", "berkeliling", "tata bahasa", "konteks nyata"
  - L11.cue: `discourse frame`, `exit ticket` → "kerangka kalimat", "cek akhir"
  - L12.cue: `Exit ticket` → "cek akhir"
  - L13.teks: `Retrieval mikro` → "pengulangan singkat"
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

---

# TEMUAN TP-15 (Feelings and Emotions)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ (ada di L10; LULUS — kunci `{sudahBisa, perluSupport}`).

**Rujukan sistemik:**
- **SIS-1:** `👂 LISTEN FIRST` (L2, L4), `🗣 TOGETHER` (L3, L5, L8).
- **SIS-2:** 2 ellipsis unicode (L8 "I feel angry because…").
- **SIS-3:** TP-15 bersih dari pemotongan — cue & teks utuh.

### Temuan 15.1 — Istilah asing/jargon pada field instruksi (non-UCAP)
- **STANDAR:** BAB 7 — GAGAL: istilah asing/jargon non-UCAP
- **FIELD:** langkah.cue, langkah.teks, langkah.bantuan, langkah.diferensiasi
- **LANGKAH:** L2–L13
- **PETA ISTILAH:**
  - L2.cue: `exaggerated`, `anchor utama` → "dilebih-lebihkan", "penanda utama"
  - L3.cue: `Contrast drill`, `explain` → "latihan pembeda", "menjelaskan"
  - L4.cue: `Reactivation`, `anchor` → "pengaktifan ulang", "penanda"
  - L6.cue: `retrieval dari memori tubuh` → "mengingat dari memori tubuh"
  - L8.cue: `fill-in` → "isian"
  - L9.teks/cue: `Whole-class QA drill`, `scenario`, `frame` → "latihan tanya-jawab satu kelas", "situasi", "kerangka"
  - L10.teks/cue/bantuan: `scenario` (banyak), `Frame collapse`, `circulate`, `fatigue`, `grammar` → "situasi", "kerangka runtuh", "berkeliling", "kelelahan", "tata bahasa"
  - L10.diferensiasi.sudahBisa: `scenario` → "situasi"
  - L11.cue: `discourse frame` → "kerangka kalimat"
  - L12.cue: `Exit ticket` → "cek akhir"
  - L13.teks: `Retrieval mikro` → "pengulangan singkat"
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** Catatan: `scenario` dipakai sangat sering sebagai istilah inti L9–L10; bila ingin dipertahankan sebagai "skenario" (serapan), perlu keputusan editorial agar konsisten.

---

# TEMUAN TP-16 (Simple Story Retelling)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ (ada di L9; LULUS — kunci `{sudahBisa, perluSupport}`).

**Rujukan sistemik:**
- **SIS-1:** `👂 LISTEN FIRST` (L4), `🗣 TOGETHER` (L5).
- **SIS-2:** 1 ellipsis unicode — verifikasi lokasi; jika berada di field non-audit (deskripsi/media/checklist), abaikan.
- **SIS-3:** TP-16 bersih dari pemotongan (file tier kanonik; cue & teks utuh, ada L0 eksplisit).

### Temuan 16.1 — Istilah asing/jargon pada field instruksi (non-UCAP)
- **STANDAR:** BAB 7 — GAGAL: istilah asing/jargon non-UCAP
- **FIELD:** langkah.cue (dominan), langkah.teks, langkah.bantuan, langkah.diferensiasi
- **LANGKAH:** L1–L13
- **PETA ISTILAH:**
  - L1.cue: `tes vocab` → "tes kosakata"
  - L2.cue: `Gesture untuk aksi cerita` → "Gerakan untuk aksi cerita"
  - L3.teks: `halaman relevant` → "halaman terkait"; L3.cue: `micro movement`, `mode focused` → "gerakan kecil", "mode fokus"
  - L4.teks: `[spatial: paling kiri]` dst → "[ruang: paling kiri]"; L4.cue: `Gesture dua lapis`, `spatial`, `layer` → "Gerakan dua lapis", "spasial/ruang", "lapis"
  - L5.cue: `Gesture dua lapis` → "Gerakan dua lapis"
  - L6.cue: `Gesture`, `retrieval mandiri` → "Gerakan", "mengingat mandiri"
  - L8.teks: `Listener`/`Storyteller` (pada AKSI, bukan UCAP) → "pendengar"/"pencerita"; L8.cue: `Demo wajib`, `stop signal` → "Peragaan wajib", "isyarat berhenti"
  - L9.teks: `chunk pendek`, `Checkpoint tengah` → "potongan pendek", "titik cek tengah"; L9.cue: `circulate`, `collapse`, `grammar` → "berkeliling", "runtuh", "tata bahasa"; L9.diferensiasi.sudahBisa: `scaffold` → "bantuan"
  - L10.cue: `Reflection`, `sharing wajib` → "Refleksi", "berbagi wajib"
  - L11.cue: `anchor retrieval utama` → "penanda utama"
  - L12.cue: `Middle sequence`, `comprehension` → "urutan tengah", "pemahaman"
  - L13.teks: `Retrieval mikro` → "pengulangan singkat"
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

---

# TEMUAN TP-17 (My Hobbies)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ (ada di L10; LULUS — kunci `{sudahBisa, perluSupport}`).

**Rujukan sistemik:**
- **SIS-1:** `👂 LISTEN FIRST` (L2, L4), `🗣 TOGETHER` (L3, L5, L8).
- **SIS-2:** 4 ellipsis unicode (L8 fill-in "because it is…").
- **SIS-3:** TP-17 bersih dari pemotongan (L0–L14, cue & teks utuh).

### Temuan 17.1 — Penggunaan "Gesture" sebagai kata instruksi (non-UCAP)
- **STANDAR:** BAB 7 — GAGAL: istilah asing/jargon non-UCAP
- **FIELD:** langkah.teks, langkah.cue
- **LANGKAH:** L1–L14 (sangat sering)
- **TEKS ASLI (contoh L2):** `... → "Reading." [gesture membuka buku, mata ke bawah — tunjuk kartu] ...`
- **MASALAH:** "Gesture"/"gesture" dipakai berulang-ulang sebagai kata kerja/penanda aksi pada instruksi guru (bukan UCAP). Istilah asing paling sering di TP ini.
- **REKOMENDASI:** Ganti seluruh "gesture/Gesture" → "gerakan/Peragakan" (mis. "[gerakan membuka buku, mata ke bawah — tunjuk kartu]").
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

### Temuan 17.2 — Istilah asing/jargon lain pada field instruksi (non-UCAP)
- **STANDAR:** BAB 7 — GAGAL: istilah asing/jargon non-UCAP
- **FIELD:** langkah.cue (dominan), langkah.teks, langkah.diferensiasi
- **LANGKAH:** L1–L13
- **PETA ISTILAH:**
  - L1.cue: `perform`, `respond` → "tampil/memeragakan", "merespons"
  - L2–L5.cue: `anchor`, `Contrast drill`, `Reactivation` → "penanda", "latihan pembeda", "pengaktifan ulang"
  - L6.cue: `retrieval dari memori tubuh` → "mengingat dari memori tubuh"
  - L7.cue: `frame kalimat`, `randomize reason` → "kerangka kalimat", "acak alasan"
  - L8.cue: `fill-in` → "isian"
  - L9.teks/cue: `Whole-class QA drill`, `Listener`, `chunk pendek` → "latihan tanya-jawab satu kelas", "pendengar", "potongan pendek"
  - L10.cue: `Checkpoint switch`, `circulate`, `grammar` → "titik cek pergantian", "berkeliling", "tata bahasa"; L10.diferensiasi.sudahBisa: `reason` → "alasan"
  - L11.cue: `exposure sosial`, `moral elaboration`, `komentar komparatif` → "paparan sosial", "ceramah moral", "komentar membandingkan"
  - L12.cue: `discourse frame`, `chanting otomatis`, `genuine` → "kerangka kalimat", "mengucap otomatis", "sungguhan"
  - L13/L14.teks: `Retrieval mikro` → "pengulangan singkat"
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** —

---

# TEMUAN TP-18 (Integrative Project — My World)

Field diperiksa: preOpening.teks ✅ · preOpening.cue ✅ · langkah.teks ✅ · langkah.bantuan ✅ ·
langkah.cue ✅ · langkah.darurat ✅ · langkah.diferensiasi ✅ tidak ada di TP ini.

**Rujukan sistemik:**
- **SIS-1:** tidak ada marker emoji-Inggris di TP-18 (bersih).
- **SIS-2:** 1 ellipsis unicode — L5.bantuan (`"Hello, my name is…"`) → ganti ke ASCII `...`.
- **SIS-3:** TP-18 bersih dari pemotongan — cue & teks utuh, ada L0 eksplisit.

### Temuan 18.1 — Istilah asing/jargon pada field instruksi (non-UCAP)
- **STANDAR:** BAB 7 — GAGAL: istilah asing/jargon non-UCAP
- **FIELD:** langkah.cue, langkah.teks, langkah.bantuan, preOpening.cue
- **LANGKAH:** preOpening, L2–L8
- **PETA ISTILAH:**
  - preOpening.cue: `anchor emosional`, `tone capstone` → "penanda emosional", "nada penutup"
  - L2.cue: `anchor untuk siswa` → "penanda untuk siswa"
  - L3.teks: `Guru circulate`, `Checkpoint` → "Guru berkeliling", "titik cek"; L3.bantuan: `Fast finisher`, `stuck`, `scribe`, `blank`, `freeze`, `Q&A` → "yang cepat selesai", "tersendat", "menuliskan untuk siswa", "kosong", "diam membeku", "tanya-jawab"; L3.cue: `Spelling`, `drawing + writing` → "Ejaan", "menggambar + menulis"
  - L4.teks: `applause`, `gesture thumbs up` → "tepuk tangan", "gerakan acungan jempol"; L4.cue: `volunteer` → "siswa sukarela"
  - L5.teks: `Monitor energi`, `courage dan attempt`, `perfection` → "Pantau energi", "keberanian dan usaha", "kesempurnaan"; L5.bantuan: `blank`, `Q&A`, `announce`, `nervous` → "diam/kosong", "tanya-jawab", "umumkan", "gugup"; L5.cue: `distraksi`, `noise`, `dead air` → "pengalih perhatian", "kegaduhan", "jeda kosong"
  - L6.cue: `celebration` → "perayaan"
  - L7.teks/cue: `celebration`, `self-recognition`, `community recognition`, `loud ... carry over` → "perayaan", "pengakuan diri", "pengakuan bersama", "suara keras terbawa"
  - L8.cue: `emotional closure` → "penutupan emosional"
- **PERLU REVIEW LANJUT:** TIDAK
- **ALASAN:** Catatan: UCAP `"Phase A"`/`"Phase B"` (mis. "Goodbye, Phase A! Hello, Phase B!") dikecualikan karena diucapkan ke siswa.

---

# RINGKASAN & REKAPITULASI

## Status per TP

Tidak ada TP yang sepenuhnya **✓ LULUS** — seluruh TP04–TP18 memuat istilah asing/jargon pada
field instruksi guru (non-UCAP); TP01–TP03 menyisakan residu yang terlewat dari audit `bef0c22`.

| TP | Temuan spesifik | Temuan sistemik berlaku | Catatan |
|----|-----------------|--------------------------|---------|
| 01 | 4 (1.1–1.4) | — | Residu: Fast but controlled, Real Life, reset, Need Help/Ready |
| 02 | 3 (2.1–2.3) | — | Residu: Clap twice, reset |
| 03 | 1 (3.1) | — | Residu: partner practice |
| 04 | 7 (4.1–4.7) | SIS-1 | Belum pernah diaudit istilah asing |
| 05 | 5 (5.1–5.5) | SIS-2 | — |
| 06 | 7 (6.1–6.7) | SIS-1 | — |
| 07 | 1 (7.1) | SIS-1, SIS-3 | Pemotongan cue/teks berat |
| 08 | 1 (8.1) | SIS-1, SIS-2, SIS-3 | Pemotongan cue/teks berat |
| 09 | 1 (9.1) | SIS-1, SIS-2, SIS-3 | Pemotongan cue/teks berat |
| 10 | 2 (10.1–10.2) | SIS-1, SIS-2, SIS-3 | + `UCAP:` ganda |
| 11 | 1 (11.1) | SIS-1, SIS-2, SIS-3 | + `UCAP:` ganda |
| 12 | 2 (12.1–12.2) | SIS-1, SIS-2, SIS-3 | SIS-2 terberat (14); SIS-3 ringan |
| 13 | 1 (13.1) | SIS-1, SIS-2 | SIS-3 bersih |
| 14 | 1 (14.1) | SIS-1, SIS-2 | SIS-3 bersih |
| 15 | 1 (15.1) | SIS-1, SIS-2 | Tier kanonik; SIS-3 bersih |
| 16 | 1 (16.1) | SIS-1, SIS-2(?) | Tier kanonik; SIS-3 bersih |
| 17 | 2 (17.1–17.2) | SIS-1, SIS-2 | "Gesture" sangat sering |
| 18 | 1 (18.1) | SIS-2 | Tanpa marker SIS-1; SIS-3 bersih |

## Tiga Temuan Sistemik
- **SIS-1** — marker emoji+Inggris (`👂 LISTEN FIRST`, `🗣 TOGETHER`, dll.) pada `langkah.teks`, tersebar di TP04, TP06–TP17. **PERLU REVIEW: YA** (keputusan editorial menyeluruh).
- **SIS-2** — ellipsis unicode `…` pada UCAP (TP05, TP07–TP18). **PERLU REVIEW: TIDAK** (ganti ke `...` ASCII).
- **SIS-3** — `cue`/`bantuan` terpotong + fragmen menggantung di `teks` (artefak konverter), berat di **TP07–TP11**; TP12–TP18 relatif bersih. **PERLU REVIEW: YA** (rujuk txt skenario sumber).

## Item "PERLU REVIEW LANJUT: YA" (butuh keputusan editorial)
1. **SIS-1** — pertahankan vs terjemahkan marker terstruktur (menyentuh ~13 file, termasuk tier kanonik TP15–17).
2. **SIS-3** — pulihkan teks utuh cue/bantuan TP07–TP11 dari `docs/skenario/flaf-skenario-tp{07..11}-v2.txt`.
3. **TP-01 Temuan 1.2** — penamaan bagian "Real Life" agar konsisten lintas TP.
4. **TP-04 Temuan 4.6** — "Group" (UCAP) vs "Kelompok" (AKSI) — konsistensi penamaan.
5. **TP-05 Temuan 5.5** — "show and tell" (nama aktivitas) — keep vs terjemahkan.
6. Istilah proyek berulang **`printable`**, **`vocab`**, **`scenario`** — bila ingin dipertahankan sebagai istilah baku, putuskan satu kali agar konsisten.

## Saran Urutan Perbaikan (di luar lingkup audit — hanya rekomendasi)
1. **SIS-2** (mekanis, aman): ganti seluruh `…` → `...`.
2. **`UCAP:` ganda** (TP10, TP11, TP12): hapus duplikat.
3. **SIS-3** (TP07–TP11): gabungkan fragmen teks ke cue/bantuan, rujuk txt sumber.
4. **Istilah asing/jargon per-TP** (peta istilah di tiap bagian): terjemahkan ke Indonesia.
5. **SIS-1**: putuskan kebijakan marker, lalu terapkan seragam.

## Catatan Kepatuhan Audit
- Hanya 7 field objek audit yang dinilai (BAB 7). Field di luar itu (`checklist`, `catatan`,
  `energi_map`, `deskripsi`, `indikator`, `vocab`, `media`, `persiapan`, `printables`,
  `tipe`, `energi`, dst.) **tidak** dilaporkan meskipun memuat istilah asing.
- Segmen UCAP (bahasa Inggris yang diucapkan ke siswa) dikecualikan dari larangan istilah asing,
  kecuali untuk aturan TTS BAB 4.5 (ellipsis unicode → ASCII).
- File TP asli **tidak diubah**. Laporan ini hanya berisi temuan + rekomendasi.

— Selesai. Audit 18 TP (Fase A) terhadap standar AUDIT OS FLAF V3.0.
