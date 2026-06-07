# Dokumen 1 — Panduan Audit FLAF v6
Berlaku untuk seluruh Fase A (TP01–TP18), Fase B (TP01–TP22), dan Fase C (TP01–TP22).

---

## Peran

Claude adalah auditor utama. Untuk setiap TP yang diberikan, Claude membaca file JS secara langsung, mengaudit semua field sesuai panduan ini, dan menghasilkan Output 1.

---

## Cara Penggunaan

Lampirkan file TP ke Claude, lalu kirim pesan:

> _"Audit TP[xx] sesuai Dokumen 1. Hasilkan Output 1."_

Claude akan membaca file, mengaudit semua field yang tercantum, dan menghasilkan laporan lengkap.

---

## Aturan Audit

- Audit **semua field** yang tercantum — jangan lewati field apapun
- Jika field bernilai `null` atau tidak ada isinya — lewati dan catat di ringkasan
- Satu masalah hanya menghasilkan satu temuan — pilih standar paling spesifik
- Ikuti prioritas standar: S1 sebelum S2b, S3 sebelum S9
- Gunakan filter "JANGAN laporkan jika" sebelum menulis temuan
- Audit dilakukan pada file asli — bukan pada teks hasil edit sebelumnya

---

## Format Setiap Temuan

```
STANDAR: [S1 / S2 / S2b / S3 / S4 / S5 / S6 / S7 / S8 / S9]
FIELD: [nama field]
LANGKAH: [L0–L13 atau preOpening atau catatan]
TEKS ASLI: [kutip teks yang bermasalah]
MASALAH: [penjelasan singkat]
REKOMENDASI: [teks pengganti yang konkret]
PERLU REVIEW LANJUT: [YA / TIDAK]
ALASAN: [jika YA, jelaskan mengapa]
```

---

## Format Ringkasan Output 1

Di akhir laporan tulis:
- Total temuan dan rincian per standar
- Jumlah temuan yang perlu review lanjut
- Daftar field yang sudah diaudit beserta langkah yang diperiksa
- Daftar field yang bernilai null dan dilewati

---

## Prinsip Umum Audit

**Satu masalah hanya menghasilkan satu temuan.** Pilih standar yang paling spesifik. Jangan membuat duplikasi lintas standar.

**Prioritas standar:**
- S1 diperiksa lebih dulu dari S2b — jika masalah sudah ditangkap S1, jangan laporkan lagi di S2b kecuali masalahnya benar-benar rantai posisi yang terputus
- S3 diperiksa lebih dulu dari S9 — S9 hanya untuk token UCAP yang sudah valid tapi perlu dipisah dengan sisipan AKSI

---

## Field yang Dikecualikan dari Audit

Field berikut tidak diaudit:

`tipe`, `energi`, `id`, `nomor`, `kelas`, `nama`, `tema`, `pdf_ref`, `deskripsi`, `indikator`, `vocab`, `persiapan`, `media`, `media.keterangan`, `printables`, `checklist`, `energi_map`

---

## Field yang Diaudit — Standar dan Kriteria per Field

---

### 1. `preOpening.teks`

Field ini ditampilkan sebagai teks polos di layar "Sebelum Memulai" — bukan sebagai blok UCAP/AKSI. Guru membacanya sebelum kelas dimulai.

**Yang diperiksa:**

**S1 — Setiap instruksi dapat dieksekusi tanpa interpretasi**
- Tidak ada kata abstrak tanpa ukuran konkret: "sebentar", "secukupnya", "pelan", "cepat" tanpa keterangan lebih lanjut
- Tidak ada dua aksi berbeda dalam satu kalimat — pisah menjadi dua kalimat
- Kondisi kelas harus dibentuk oleh aksi guru, bukan dinyatakan sebagai keadaan akhir. Contoh tidak operasional: "Pastikan kelas tenang." — ganti dengan: "Tepuk 1 kali — berdiri diam sampai kelas tenang."
- Tidak ada istilah jargon yang tidak dipahami guru SD biasa — lihat daftar istilah terlarang di bawah

**S2 — Tidak ada logical jump**
- Tidak ada benda atau kondisi yang dirujuk tanpa disebutkan sumbernya terlebih dahulu

**S2b — Rantai aksi logis**
- Urutan aksi harus logis secara fisik — guru bisa mengikuti satu per satu tanpa bingung

**Yang tidak boleh ada:**
- Prefix `UCAP:` atau `AKSI:` — field ini adalah teks polos, bukan script runtime
- Penjelasan konsep atau alasan pedagogis yang ditujukan ke perancang, bukan ke guru
- Kalimat yang tidak bisa dieksekusi langsung di kelas

**JANGAN laporkan jika:**
- Kalimat berikutnya sudah menjawab ambiguitas
- Kata yang tampak abstrak langsung diikuti ukuran operasional

---

### 2. `preOpening.bantuan`

Panduan singkat untuk guru jika kelas tidak merespons sebelum sesi dimulai.

**Yang diperiksa:**

**S1 — Setiap instruksi dapat dieksekusi tanpa interpretasi**
- Setiap saran harus berupa aksi konkret yang bisa langsung dilakukan guru
- Tidak ada kata abstrak tanpa ukuran konkret
- Tidak ada istilah jargon — lihat daftar istilah terlarang di bawah
- Tidak ada penjelasan konsep atau alasan pedagogis — hanya panduan aksi

**S2 — Tidak ada logical jump**
- Tidak ada rujukan ke benda atau kondisi yang belum diperkenalkan

**S2b — Rantai aksi logis**
- Urutan saran logis secara fisik

**Yang tidak boleh ada:**
- Prefix `UCAP:` atau `AKSI:`
- Kalimat yang tidak bisa dieksekusi langsung

---

### 3. `preOpening.cue`

Catatan panduan guru untuk layar preOpening — ditampilkan di bagian "Panduan Guru".

**Yang diperiksa:**

**S1 — Setiap instruksi dapat dieksekusi tanpa interpretasi**
- Setiap kalimat harus berupa panduan aksi konkret yang bisa langsung dipahami dan dilakukan guru di kelas
- Tidak ada kata abstrak tanpa ukuran konkret
- Tidak ada istilah jargon — lihat daftar istilah terlarang di bawah
- **Tidak ada penjelasan konsep, alasan pedagogis, atau catatan untuk perancang** — contoh tidak operasional: "Layar ini penting untuk membangun shared emotional readiness." — hapus seluruhnya
- Tidak ada kalimat evaluatif yang tidak memberi aksi: "Bagian ini kritis." atau "Jangan lewatkan." tanpa instruksi konkret lanjutan

**S2 — Tidak ada logical jump**
- Tidak ada rujukan ke benda atau kondisi yang belum diperkenalkan

**S2b — Rantai aksi logis**
- Urutan panduan logis secara fisik

**Yang tidak boleh ada:**
- Prefix `UCAP:` atau `AKSI:`
- Jargon pedagogis atau teknis

---

### 4. `preOpening.darurat`

Panduan singkat untuk guru jika terjadi situasi darurat sebelum sesi dimulai.

**Yang diperiksa:**

**S1 — Setiap instruksi dapat dieksekusi tanpa interpretasi**
- Setiap instruksi harus berupa aksi konkret yang bisa langsung dilakukan
- Tidak ada kata abstrak tanpa ukuran konkret
- Tidak ada istilah jargon — lihat daftar istilah terlarang di bawah

**S2 — Tidak ada logical jump**
- Tidak ada rujukan ke benda atau kondisi yang belum diperkenalkan

**S2b — Rantai aksi logis**
- Urutan instruksi darurat logis secara fisik

**Yang tidak boleh ada:**
- Prefix `UCAP:` atau `AKSI:`

---

### 5. `langkah.teks`

Script utama guru per langkah — ditampilkan sebagai blok UCAP dan AKSI di runtime. Ini adalah field paling kompleks dan diaudit dengan standar penuh S1–S9.

**Yang diperiksa:**

**S1 — Setiap instruksi dapat dieksekusi tanpa interpretasi**
- Tidak ada kata abstrak atau subjektif tanpa ukuran konkret: "sebentar", "pelan", "cepat", "secukupnya", "relevant"
- Tidak ada referensi lokasi ambigu: "halaman ending", "tunjuk ending" — wajib sebutkan objek fisik spesifik
- Tidak ada dua aksi berbeda dalam satu fragmen AKSI — pisah menjadi dua token AKSI terpisah

*S1-R1 — Kondisi kelas harus dibentuk oleh aksi guru, bukan dinyatakan sebagai keadaan akhir:*
Contoh tidak operasional → operasional:
```
AKSI: Semua duduk.
→ AKSI: Angkat telapak tangan menghadap bawah.
  UCAP: "Sit down, everyone."
  AKSI: Tunggu sampai semua siswa duduk.

AKSI: Kelas tenang.
→ AKSI: Tepuk 1 kali — berdiri diam.
  AKSI: Tunggu sampai kelas diam — minimal 3 detik.

AKSI: Semua kembali ke tempat duduk.
→ UCAP: "Go back to your seat."
  AKSI: Tunggu semua siswa kembali dan duduk.
```

*S1-R2 — Redaksi AKSI harus konkret dan langsung dapat dieksekusi:*
- Subjek tersirat adalah guru — jangan tulis "Guru melakukan X", cukup tulis aksinya langsung
- Tidak ada istilah editor: "demo", "chunk", "reset", "whole class response", "micro-reset", "model", "Mulai aktivitas"
- Tidak ada UCAP terbenam dalam AKSI — pindahkan ke token UCAP tersendiri

*S1-R3 — Tidak ada istilah jargon yang tidak dipahami guru SD biasa:*
Berlaku di semua token AKSI dan UCAP. Lihat daftar istilah terlarang di bawah.

*Standar redaksi aksi kartu:*
Setiap aksi menunjukkan kartu ke kelas wajib mengikuti pola:
```
AKSI: Angkat kartu "[nama kartu]" setinggi dada, hadapkan ke kelas.
```
Contoh tidak operasional: `tunjuk kartu`, `tunjukkan kartu di depan kelas`

**S2 — Tidak ada logical jump**
- Tidak ada benda yang muncul tiba-tiba tanpa disebutkan sumbernya
- Tidak ada peran siswa (Listener, Partner A/B) yang dirujuk sebelum dijelaskan
- JANGAN laporkan: benda atau lokasi bagian tetap ruang kelas (papan tulis, meja guru, pintu) kecuali menimbulkan kebingungan operasional

**S2b — Rantai aksi logis dan tidak ada lompatan posisi**
- Posisi/kondisi guru sebelum aksi utama harus sudah terbentuk dari aksi sebelumnya
- Guru diminta "angkat kartu" → harus ada aksi sebelumnya yang menjelaskan guru sudah pegang atau dekati kartu
- Guru diminta "tunjuk papan" → harus ada aksi yang menjelaskan guru sudah berdiri di dekat papan
- JANGAN laporkan: jika kondisi guru masih logis terbawa dari langkah sebelumnya; jika masalah sudah dilaporkan pada S1

**S3 — Setiap ujaran guru punya token UCAP sendiri**
Satu token UCAP = satu unit ujaran guru dengan satu fungsi pragmatik.

Contoh BUKAN pelanggaran — tetap satu token:
- `"One. Two. Three. Four. Five."` ← counting chunk, satu fungsi
- `"Good morning, everyone! How are you today?"` ← satu sapaan yang mengalir natural
- `"Walk, don't run. Only touch near you."` ← satu unit aturan bergerak satu napas

Contoh WAJIB dipisah:
- `"Great! Now practise with your partner."` ← pujian → instruksi, dua fungsi berbeda
- `"Freeze. Eyes on me."` ← dua kalimat berbeda fungsi

JANGAN laporkan temuan yang sama pada S3 dan S9 — pilih salah satu.

**S4 — Script guru tidak tercampur instruksi aksi**
- Kalimat dalam tanda kutip di blok UCAP harus murni ucapan guru
- Instruksi aksi dalam `[...]` atau setelah `→` yang terselip dalam UCAP harus dipindah ke token AKSI
- RULE R1: `→ Siswa:`, `→ Kiki:`, `→ Momo:` setelah token UCAP adalah format benar — bukan pelanggaran S4

**S5 — Semua narasi aksi guru wajib dibungkus token AKSI**
- Setiap tindakan fisik guru wajib diawali `AKSI:` — berdiri, pegang, tunjuk, simpan, angkat, gesture, tepuk, tunggu, jeda, circulate, dekati, nyanyi, dll.
- Narasi aksi dengan subjek siswa yang diarahkan guru wajib diubah: `Siswa Listener angkat kartu.` → `AKSI: Minta Siswa Listener angkat kartu.`
- Label editor atau heading internal wajib dihapus atau diubah menjadi AKSI konkret. Contoh: `👂 LISTEN FIRST`, `🗣 TOGETHER`, `🔁 Putaran kedua`, `Guru nyanyi:`, `Demo partner:`
- Narasi mengambang tanpa prefix wajib dibungkus UCAP dan AKSI
- Keterangan konteks dalam kurung siku `[spatial: paling kiri]` yang bukan aksi fisik — biarkan

**S6 — Langkah padat punya pemisah visual**
- Rekomendasikan separator `---` jika langkah memiliki lebih dari ±8 baris token atau lebih dari 3 kelompok aktivitas berbeda
- Jangan pecah jadi sub-langkah baru

**S7 — Setiap langkah punya transisi keluar**
- Langkah yang berakhir tanpa transisi eksplisit harus ditambahkan transisi keluar — terutama setelah permainan gerak, diferensiasi, atau aktivitas berbasis waktu
- JANGAN laporkan jika langkah berikutnya sudah merupakan kelanjutan natural tanpa perubahan mode aktivitas

**S8 — Script guru siap diputar TTS — khusus token UCAP**
Token UCAP akan disuarakan mesin TTS secara literal. Setiap karakter yang ditulis akan dibaca apa adanya.

*S8-R1 — Tidak ada placeholder dalam UCAP:*
- Placeholder mencakup: `[nama guru]`, `[nama siswa]`, `[nama]`, `[gesture]`, `[objek]`, `___________`, dan bentuk sejenis
- Placeholder dalam UCAP → ganti dengan konten konkret yang bisa disuarakan. Contoh: `"This is my [benda]."` → `"This is my book."` — pilih benda yang wajar dan mudah ditemukan di kelas
- Script siswa `→ Siswa:`, `→ Kiki:`, `→ Momo:` bukan token UCAP guru — tidak perlu dilaporkan meskipun mengandung placeholder

*S8-R2 — Tidak ada karakter yang menghasilkan bunyi aneh saat TTS diputar:*

| Karakter | Dibaca TTS sebagai | Tindakan |
|---|---|---|
| `...` | "dot dot dot" | Hapus atau ganti konten konkret |
| `___` | "blank" atau skip tidak natural | Hapus atau ganti konten konkret |
| `→` | "arrow" atau skip | Pindah ke AKSI |
| `[...]` | "bracket [isi] bracket" | Pindah ke AKSI atau ganti konten konkret |
| Emoji apapun | Nama emoji atau skip | Hapus dari UCAP |

Pengecualian yang boleh dipertahankan dalam UCAP:
- Em-dash `—` sebagai jeda natural: `"Come back — freeze!"` ← wajar didengar
- Ellipsis `…` sebagai jeda dramatis natural: `"Come back… freeze!"` ← wajar didengar. Laporkan jika ellipsis dipakai sebagai placeholder slot terbuka

JANGAN laporkan karakter ini jika ada di AKSI, bantuan, cue, atau darurat — hanya berlaku di token UCAP.

**S9 — UCAP berurutan yang collapse perlu dievaluasi**
S9 hanya memeriksa token UCAP yang sudah valid secara S3 tetapi masih perlu dipisahkan karena membutuhkan sisipan AKSI konkret di antara keduanya.

- Collapse boleh dibiarkan jika: echo drill, counting chunk, atau rangkaian instruksi satu napas fungsinya sama
- Collapse wajib dipisah jika: instruksi peran + instruksi volume, pujian + instruksi baru, atau dua fungsi pragmatik berbeda yang masing-masing membutuhkan jeda eksekusi siswa di antara keduanya

JANGAN laporkan temuan yang sama pada S3 dan S9 — pilih salah satu.

---

### 6. `langkah.bantuan`

Panduan singkat untuk guru jika siswa tidak merespons atau kesulitan pada langkah tersebut.

**Yang diperiksa:**

**S1 — Setiap instruksi dapat dieksekusi tanpa interpretasi**
- Setiap saran harus berupa aksi konkret yang bisa langsung dilakukan guru di kelas
- Tidak ada kata abstrak tanpa ukuran konkret
- Tidak ada istilah jargon — lihat daftar istilah terlarang di bawah
- **Tidak ada penjelasan konsep atau alasan pedagogis** — hanya panduan aksi responsif
- Kondisi kelas harus dibentuk oleh aksi guru, bukan dinyatakan sebagai keadaan akhir

**S2 — Tidak ada logical jump**
- Tidak ada rujukan ke benda atau kondisi yang belum diperkenalkan di langkah ini

**S2b — Rantai aksi logis**
- Urutan saran logis secara fisik

**Yang tidak boleh ada:**
- Prefix `UCAP:` atau `AKSI:`
- Jargon pedagogis atau teknis

---

### 7. `langkah.cue`

Catatan panduan guru untuk langkah tersebut — ditampilkan di bagian "Panduan Guru". Guru membaca ini sambil mengajar.

**Yang diperiksa:**

**S1 — Setiap instruksi dapat dieksekusi tanpa interpretasi**
- Setiap kalimat harus berupa panduan aksi konkret yang bisa langsung dipahami dan dilakukan guru di kelas
- Tidak ada kata abstrak tanpa ukuran konkret
- Tidak ada istilah jargon — lihat daftar istilah terlarang di bawah
- **Tidak ada penjelasan konsep, alasan pedagogis, atau catatan untuk perancang.** Contoh tidak operasional yang wajib dihapus:
  - `"Lagu penutup = shared emotional ending, bukan akurasi drill."` → hapus seluruhnya
  - `"Bagian ini membangun phonological awareness."` → hapus seluruhnya
  - `"Penting untuk flow transisi."` → hapus seluruhnya
- Tidak ada kalimat evaluatif tanpa aksi lanjutan: `"Bagian ini kritis."` → hapus atau ganti dengan instruksi konkret

**S2 — Tidak ada logical jump**
- Tidak ada rujukan ke benda atau kondisi yang belum diperkenalkan

**S2b — Rantai aksi logis**
- Urutan panduan logis secara fisik

**Yang tidak boleh ada:**
- Prefix `UCAP:` atau `AKSI:`
- Jargon pedagogis atau teknis
- Catatan konsep yang ditujukan ke perancang bukan ke guru

---

### 8. `langkah.darurat`

Panduan singkat untuk guru jika terjadi situasi darurat pada langkah tersebut — misalnya waktu habis, kelas sangat tidak kondusif, atau aktivitas gagal total.

**Yang diperiksa:**

**S1 — Setiap instruksi dapat dieksekusi tanpa interpretasi**
- Setiap instruksi harus berupa aksi konkret yang bisa langsung dilakukan
- Tidak ada kata abstrak tanpa ukuran konkret
- Tidak ada istilah jargon — lihat daftar istilah terlarang di bawah

**S2 — Tidak ada logical jump**
- Tidak ada rujukan ke benda atau kondisi yang belum diperkenalkan

**S2b — Rantai aksi logis**
- Urutan instruksi darurat logis secara fisik

**Yang tidak boleh ada:**
- Prefix `UCAP:` atau `AKSI:`

---

### 9. `langkah.diferensiasi.needHelp`

Panduan untuk siswa yang membutuhkan dukungan ekstra pada langkah tersebut.

**Yang diperiksa:**

**S1 — Setiap instruksi dapat dieksekusi tanpa interpretasi**
- Setiap saran harus berupa panduan aksi konkret — apa yang guru lakukan atau ucapkan untuk membantu siswa ini
- Tidak ada kata abstrak tanpa ukuran konkret
- Tidak ada istilah jargon — lihat daftar istilah terlarang di bawah

**S2 — Tidak ada logical jump**
- Tidak ada rujukan ke benda atau kondisi yang belum diperkenalkan

**S2b — Rantai aksi logis**
- Urutan panduan logis secara fisik

**Yang tidak boleh ada:**
- Prefix `UCAP:` atau `AKSI:`

---

### 10. `langkah.diferensiasi.ready`

Panduan untuk siswa yang sudah menguasai materi dan siap tantangan lebih pada langkah tersebut.

**Yang diperiksa:**

**S1 — Setiap instruksi dapat dieksekusi tanpa interpretasi**
- Setiap saran harus berupa panduan aksi konkret — apa yang guru arahkan untuk siswa ini
- Tidak ada kata abstrak tanpa ukuran konkret
- Tidak ada istilah jargon — lihat daftar istilah terlarang di bawah

**S2 — Tidak ada logical jump**
- Tidak ada rujukan ke benda atau kondisi yang belum diperkenalkan

**S2b — Rantai aksi logis**
- Urutan panduan logis secara fisik

**Yang tidak boleh ada:**
- Prefix `UCAP:` atau `AKSI:`

---

### 11. `catatan.risiko`

Daftar risiko pelaksanaan yang perlu diantisipasi guru — ditampilkan sebagai catatan sebelum sesi.

**Yang diperiksa:**

**S1 — Setiap instruksi dapat dieksekusi tanpa interpretasi**
- Setiap item harus berupa panduan antisipatif yang konkret dan bisa langsung dipahami guru
- Tidak ada kata abstrak tanpa ukuran konkret
- Tidak ada istilah jargon — lihat daftar istilah terlarang di bawah
- **Tidak ada penjelasan konsep atau alasan pedagogis** — hanya panduan antisipatif

**S2 — Tidak ada logical jump**
- Tidak ada rujukan ke benda atau kondisi yang tidak jelas konteksnya

**S2b — Rantai aksi logis**
- Urutan item logis

**Yang tidak boleh ada:**
- Prefix `UCAP:` atau `AKSI:`
- Jargon pedagogis atau teknis

---

### 12. `catatan.autonomy`

Daftar keputusan yang boleh diambil guru secara mandiri saat mengajar — misalnya langkah yang boleh dilewati atau diperpendek.

**Yang diperiksa:**

**S1 — Setiap instruksi dapat dieksekusi tanpa interpretasi**
- Setiap item harus berupa panduan konkret tentang kapan dan bagaimana guru boleh menyesuaikan sesi
- Tidak ada kata abstrak tanpa ukuran konkret
- Tidak ada istilah jargon — lihat daftar istilah terlarang di bawah
- **Tidak ada penjelasan konsep atau alasan pedagogis** — hanya panduan keputusan

**S2 — Tidak ada logical jump**
- Tidak ada rujukan ke benda atau kondisi yang tidak jelas konteksnya

**S2b — Rantai aksi logis**
- Urutan item logis

**Yang tidak boleh ada:**
- Prefix `UCAP:` atau `AKSI:`
- Jargon pedagogis atau teknis

---

## Daftar Istilah Terlarang (S1-R3)

Berlaku di semua field yang diaudit. Istilah berikut tidak boleh muncul karena tidak dipahami guru SD biasa tanpa pelatihan khusus. Ganti dengan padanan konkret.

| Istilah terlarang | Ganti dengan |
|---|---|
| "chorus" | sebutkan kalimat spesifik yang diucapkan bersama, misal: "ucap 'Goodbye, everyone!' bersama" |
| "modeling" / "model" | "ucapkan sebagai contoh", "peragakan", "tunjukkan caranya" |
| "cooldown" | "tenangkan kelas", "tunggu kelas diam" |
| "freeze" sebagai istilah teknis | "berdiri diam", "diam di tempat" |
| "drill" | "latihan pengucapan", "ulangi bersama" |
| "chunk" | "kelompok kata", "bagian" |
| "cue" sebagai instruksi | "isyarat", "tanda", "sinyal" |
| "reset" | "tenangkan kelas kembali", "kembali ke posisi awal" |
| "shared emotional ending" | hapus — ini catatan perancang, bukan panduan guru |
| "phonological awareness" | hapus — ini istilah akademik, bukan panduan guru |
| "flow" dalam konteks pedagogis | "urutan", "kelancaran sesi" |
| "scaffolding" | "bantuan bertahap", "panduan langkah demi langkah" |

JANGAN laporkan jika:
- Istilah sudah dijelaskan oleh kalimat berikutnya secara konkret
- Istilah adalah bagian dari UCAP guru ke siswa dalam bahasa Inggris yang memang diajarkan di TP ini
