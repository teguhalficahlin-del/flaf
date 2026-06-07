# Dokumen 1 — Panduan Audit FLAF v9
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
- Gunakan filter "Jangan laporkan jika" sebelum menulis temuan
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

## Field yang Diaudit

---

### 1. `preOpening.teks`

Teks polos yang ditampilkan di layar "Sebelum Memulai". Guru membacanya sebelum kelas dimulai — bukan script runtime.

**Standar: S1, S2, S2b**

**Larangan:**
- Jangan gunakan prefix `UCAP:` atau `AKSI:` — field ini teks polos, bukan script runtime
- Jangan gunakan istilah asing atau jargon yang tidak dipahami guru SD biasa
- Jangan gunakan kata ambigu tanpa ukuran konkret: "sebentar", "secukupnya", "pelan", "cepat" tanpa keterangan lanjutan
- Jangan tulis dua aksi berbeda dalam satu kalimat — pisah menjadi dua kalimat
- Jangan nyatakan kondisi akhir kelas tanpa aksi pembentuk — tulis aksi guru yang membentuk kondisi tersebut. Contoh salah: "Pastikan kelas tenang." Contoh benar: "Tepuk 1 kali — berdiri diam sampai kelas tenang."
- Jangan tulis penjelasan konsep atau alasan pedagogis — tulis panduan aksi
- Jangan rujuk benda atau kondisi yang belum disebutkan sebelumnya

**Jangan laporkan jika:**
- Kalimat berikutnya sudah menjawab ambiguitas
- Kata yang tampak abstrak langsung diikuti ukuran operasional

---

### 2. `preOpening.bantuan`

Panduan aksi untuk guru jika kelas tidak merespons sebelum sesi dimulai.

**Standar: S1, S2, S2b**

**Larangan:**
- Jangan gunakan prefix `UCAP:` atau `AKSI:`
- Jangan gunakan istilah asing atau jargon yang tidak dipahami guru SD biasa
- Jangan gunakan kata ambigu tanpa ukuran konkret
- Jangan tulis penjelasan konsep atau alasan pedagogis — tulis panduan aksi responsif
- Jangan tulis kondisi akhir kelas tanpa aksi pembentuk
- Jangan rujuk benda atau kondisi yang belum disebutkan sebelumnya

**Jangan laporkan jika:**
- Kalimat berikutnya sudah menjawab ambiguitas

---

### 3. `preOpening.cue`

Panduan guru yang ditampilkan di bagian "Panduan Guru" pada layar preOpening.

**Standar: S1, S2, S2b**

**Larangan:**
- Jangan gunakan prefix `UCAP:` atau `AKSI:`
- Jangan gunakan istilah asing atau jargon yang tidak dipahami guru SD biasa
- Jangan gunakan kata ambigu tanpa ukuran konkret
- Jangan tulis penjelasan konsep, alasan pedagogis, atau catatan untuk perancang — tulis panduan aksi untuk guru. Contoh salah: "Bagian ini membangun phonological awareness." Contoh benar: hapus seluruhnya.
- Jangan tulis kalimat evaluatif tanpa aksi lanjutan — contoh salah: "Bagian ini kritis." Ganti dengan instruksi konkret atau hapus.
- Jangan tulis alasan yang berdiri sendiri tanpa aksi — alasan hanya boleh ada jika terikat langsung pada aksi konkret di kalimat yang sama. Contoh boleh: "Jeda 3 detik — beri siswa waktu melihat kartu sebelum menjawab." Contoh salah: "Lagu penutup = shared emotional ending." — hapus seluruhnya.
- Jangan gunakan kode kelas bahasa Inggris tanpa padanan bahasa Indonesia — contoh salah: "Pakai 'Fast voice!'" Contoh benar: "Ucapkan dengan cepat."
- Jangan rujuk benda atau kondisi yang belum disebutkan sebelumnya

**Jangan laporkan jika:**
- Kalimat berikutnya sudah menjawab ambiguitas
- Alasan sudah terikat langsung pada aksi konkret di kalimat yang sama

---

### 4. `preOpening.darurat`

Panduan aksi untuk guru jika terjadi situasi darurat sebelum sesi dimulai.

**Standar: S1, S2, S2b**

**Larangan:**
- Jangan gunakan prefix `UCAP:` atau `AKSI:`
- Jangan gunakan istilah asing atau jargon yang tidak dipahami guru SD biasa
- Jangan gunakan kata ambigu tanpa ukuran konkret
- Jangan tulis penjelasan konsep atau alasan pedagogis — tulis panduan aksi
- Jangan rujuk benda atau kondisi yang belum disebutkan sebelumnya

---

### 5. `langkah.teks`

Script utama guru per langkah — ditampilkan sebagai blok UCAP dan AKSI di runtime. Diaudit dengan standar penuh S1–S9.

**Standar: S1, S2, S2b, S3, S4, S5, S6, S7, S8, S9**

**S1 — Larangan pada token AKSI dan keseluruhan teks:**
- Jangan gunakan kata ambigu tanpa ukuran konkret: "sebentar", "pelan", "cepat", "secukupnya", "relevant"
- Jangan rujuk lokasi ambigu — sebutkan objek fisik spesifik
- Jangan tulis dua aksi berbeda dalam satu token AKSI — pisah menjadi dua token terpisah
- Jangan nyatakan kondisi akhir kelas tanpa aksi pembentuk. Contoh salah: `AKSI: Semua duduk.` Contoh benar: `AKSI: Angkat telapak tangan menghadap bawah. UCAP: "Sit down, everyone." AKSI: Tunggu sampai semua siswa duduk.`
- Jangan tulis subjek "Guru" dalam token AKSI — subjek tersirat adalah guru, tulis aksinya langsung
- Jangan gunakan istilah editor: "demo", "chunk", "reset", "whole class response", "micro-reset", "model", "Mulai aktivitas"
- Jangan benamkan UCAP dalam token AKSI — pindahkan ke token UCAP tersendiri
- Jangan gunakan istilah asing atau jargon yang tidak dipahami guru SD biasa
- Jangan gunakan kode kelas bahasa Inggris dalam token AKSI tanpa padanan bahasa Indonesia
- Jangan tunjuk kartu dengan "tunjuk kartu" — gunakan pola baku: `AKSI: Angkat kartu "[nama kartu]" setinggi dada, hadapkan ke kelas.`

**S2 — Larangan:**
- Jangan rujuk benda yang belum disebutkan sumbernya
- Jangan rujuk peran siswa (Listener, Partner A/B) sebelum dijelaskan
- Jangan laporkan benda tetap ruang kelas (papan tulis, meja guru, pintu) kecuali menimbulkan kebingungan operasional

**S2b — Larangan:**
- Jangan minta guru melakukan aksi tanpa posisi/kondisi awal yang sudah terbentuk dari aksi sebelumnya. Contoh: jangan minta "angkat kartu" tanpa aksi sebelumnya yang menjelaskan guru sudah pegang atau dekati kartu
- Jangan laporkan jika kondisi guru masih logis terbawa dari langkah sebelumnya
- Jangan laporkan jika masalah sudah dilaporkan pada S1

**S3 — Larangan pada token UCAP:**
- Jangan gabungkan dua fungsi pragmatik berbeda dalam satu token UCAP. Contoh salah: `"Great! Now practise with your partner."` ← pujian + instruksi. Contoh salah: `"Freeze. Eyes on me."` ← dua fungsi berbeda
- Jangan laporkan satu napas natural sebagai pelanggaran. Contoh boleh satu token: `"Good morning, everyone! How are you today?"` / `"Walk, don't run. Only touch near you."` / `"One. Two. Three. Four. Five."`
- Jangan laporkan temuan yang sama pada S3 dan S9 — pilih salah satu

**S4 — Larangan pada token UCAP:**
- Jangan benamkan instruksi aksi dalam tanda kutip UCAP — pindahkan ke token AKSI
- Jangan laporkan `→ Siswa:`, `→ Kiki:`, `→ Momo:` setelah token UCAP — ini format benar

**S5 — Larangan:**
- Jangan biarkan tindakan fisik guru tanpa prefix `AKSI:`
- Jangan biarkan label editor atau heading internal tanpa prefix. Contoh yang wajib dihapus atau diubah: `👂 LISTEN FIRST`, `🗣 TOGETHER`, `🔁 Putaran kedua`, `Guru nyanyi:`
- Jangan biarkan narasi aksi mengambang tanpa prefix UCAP atau AKSI
- Jangan tulis narasi aksi siswa tanpa mengubah subjek ke guru. Contoh salah: `Siswa Listener angkat kartu.` Contoh benar: `AKSI: Minta Siswa Listener angkat kartu.`
- Jangan laporkan keterangan konteks dalam kurung siku yang bukan aksi fisik: `[spatial: paling kiri]`

**S6 — Larangan:**
- Jangan biarkan langkah dengan lebih dari ±8 baris token atau lebih dari 3 kelompok aktivitas berbeda tanpa separator `---`
- Jangan pecah langkah menjadi sub-langkah baru — gunakan separator saja

**S7 — Larangan:**
- Jangan biarkan langkah yang berakhir tanpa transisi keluar — terutama setelah permainan gerak, diferensiasi, atau aktivitas berbasis waktu
- Jangan laporkan jika langkah berikutnya sudah merupakan kelanjutan natural tanpa perubahan mode aktivitas

**S8 — Larangan pada token UCAP:**
- Jangan biarkan placeholder dalam token UCAP — ganti dengan konten konkret yang bisa disuarakan. Contoh: `"This is my [benda]."` → `"This is my book."` Pilih benda yang wajar dan mudah ditemukan di kelas
- Jangan laporkan placeholder dalam AKSI, bantuan, cue, atau darurat
- Jangan laporkan script siswa `→ Siswa:`, `→ Kiki:`, `→ Momo:` meskipun mengandung placeholder
- Jangan gunakan karakter berikut dalam token UCAP karena dibaca TTS secara tidak natural:

| Karakter | Dibaca TTS sebagai | Tindakan |
|---|---|---|
| `...` | "dot dot dot" | Hapus atau ganti konten konkret |
| `___` | "blank" atau skip tidak natural | Hapus atau ganti konten konkret |
| `→` | "arrow" atau skip | Pindah ke AKSI |
| `[...]` | "bracket [isi] bracket" | Pindah ke AKSI atau ganti konten konkret |
| Emoji apapun | Nama emoji atau skip | Hapus dari UCAP |

- Jangan laporkan karakter ini jika ada di AKSI, bantuan, cue, atau darurat — hanya berlaku di token UCAP
- Em-dash `—` dan ellipsis `…` sebagai jeda dramatis natural boleh dipertahankan dalam UCAP. Laporkan ellipsis hanya jika dipakai sebagai placeholder slot terbuka

**S9 — Larangan:**
- Jangan biarkan dua token UCAP berurutan yang masing-masing membutuhkan jeda eksekusi siswa di antara keduanya — sisipkan token AKSI konkret
- Jangan pisah UCAP yang merupakan satu napas natural: echo drill, counting chunk, atau rangkaian instruksi satu fungsi
- Jangan laporkan temuan yang sama pada S3 dan S9 — pilih salah satu

---

### 6. `langkah.bantuan`

Panduan aksi untuk guru jika siswa tidak merespons atau kesulitan pada langkah tersebut.

**Standar: S1, S2, S2b**

**Larangan:**
- Jangan gunakan prefix `UCAP:` atau `AKSI:`
- Jangan gunakan istilah asing atau jargon yang tidak dipahami guru SD biasa
- Jangan gunakan kata ambigu tanpa ukuran konkret
- Jangan tulis penjelasan konsep atau alasan pedagogis — tulis panduan aksi responsif
- Jangan tulis kondisi akhir kelas tanpa aksi pembentuk
- Jangan gunakan kode kelas bahasa Inggris tanpa padanan bahasa Indonesia
- Jangan rujuk benda atau kondisi yang belum diperkenalkan di langkah ini

**Jangan laporkan jika:**
- Kalimat berikutnya sudah menjawab ambiguitas

---

### 7. `langkah.cue`

Panduan guru yang ditampilkan di bagian "Panduan Guru" pada langkah tersebut. Guru membaca ini sambil mengajar.

**Standar: S1, S2, S2b**

**Larangan:**
- Jangan gunakan prefix `UCAP:` atau `AKSI:`
- Jangan gunakan istilah asing atau jargon yang tidak dipahami guru SD biasa
- Jangan gunakan kata ambigu tanpa ukuran konkret
- Jangan tulis penjelasan konsep, alasan pedagogis, atau catatan untuk perancang — tulis panduan aksi untuk guru. Contoh salah: "Bagian ini membangun phonological awareness." → hapus. Contoh salah: "Lagu penutup = shared emotional ending." → hapus.
- Jangan tulis kalimat evaluatif tanpa aksi lanjutan — contoh salah: "Bagian ini kritis." → hapus atau ganti instruksi konkret
- Jangan tulis alasan yang berdiri sendiri tanpa aksi — alasan hanya boleh ada jika terikat langsung pada aksi konkret di kalimat yang sama
- Jangan gunakan kode kelas bahasa Inggris tanpa padanan bahasa Indonesia. Contoh salah: "Pakai 'Fast voice!'" → ganti: "Ucapkan dengan cepat."
- Jangan rujuk benda atau kondisi yang belum disebutkan sebelumnya

**Jangan laporkan jika:**
- Alasan sudah terikat langsung pada aksi konkret di kalimat yang sama. Contoh boleh: "Jeda 3 detik — beri siswa waktu melihat kartu sebelum menjawab."

---

### 8. `langkah.darurat`

Panduan aksi untuk guru jika terjadi situasi darurat pada langkah tersebut.

**Standar: S1, S2, S2b**

**Larangan:**
- Jangan gunakan prefix `UCAP:` atau `AKSI:`
- Jangan gunakan istilah asing atau jargon yang tidak dipahami guru SD biasa
- Jangan gunakan kata ambigu tanpa ukuran konkret
- Jangan tulis penjelasan konsep atau alasan pedagogis — tulis panduan aksi darurat
- Jangan rujuk benda atau kondisi yang belum disebutkan sebelumnya

---

### 9. `langkah.diferensiasi.needHelp`

Panduan aksi untuk guru dalam mendampingi siswa yang membutuhkan dukungan ekstra.

**Standar: S1, S2, S2b**

**Larangan:**
- Jangan gunakan prefix `UCAP:` atau `AKSI:`
- Jangan gunakan istilah asing atau jargon yang tidak dipahami guru SD biasa
- Jangan gunakan kata ambigu tanpa ukuran konkret
- Jangan tulis penjelasan konsep atau alasan pedagogis — tulis panduan aksi konkret
- Jangan rujuk benda atau kondisi yang belum diperkenalkan

---

### 10. `langkah.diferensiasi.ready`

Panduan aksi untuk guru dalam mengarahkan siswa yang sudah menguasai materi.

**Standar: S1, S2, S2b**

**Larangan:**
- Jangan gunakan prefix `UCAP:` atau `AKSI:`
- Jangan gunakan istilah asing atau jargon yang tidak dipahami guru SD biasa
- Jangan gunakan kata ambigu tanpa ukuran konkret
- Jangan tulis penjelasan konsep atau alasan pedagogis — tulis panduan aksi konkret
- Jangan rujuk benda atau kondisi yang belum diperkenalkan

---

### 11. `catatan.risiko`

Daftar panduan antisipatif untuk guru terhadap risiko pelaksanaan yang mungkin terjadi.

**Standar: S1, S2, S2b**

**Larangan:**
- Jangan gunakan prefix `UCAP:` atau `AKSI:`
- Jangan gunakan istilah asing atau jargon yang tidak dipahami guru SD biasa
- Jangan gunakan kata ambigu tanpa ukuran konkret
- Jangan tulis penjelasan konsep atau alasan pedagogis — tulis panduan antisipatif konkret
- Jangan gunakan kode kelas bahasa Inggris tanpa padanan bahasa Indonesia
- Jangan rujuk benda atau kondisi yang tidak jelas konteksnya

---

### 12. `catatan.autonomy`

Daftar panduan keputusan yang boleh diambil guru secara mandiri saat mengajar.

**Standar: S1, S2, S2b**

**Larangan:**
- Jangan gunakan prefix `UCAP:` atau `AKSI:`
- Jangan gunakan istilah asing atau jargon yang tidak dipahami guru SD biasa
- Jangan gunakan kata ambigu tanpa ukuran konkret
- Jangan tulis penjelasan konsep atau alasan pedagogis — tulis panduan keputusan konkret
- Jangan gunakan kode kelas bahasa Inggris tanpa padanan bahasa Indonesia
- Jangan rujuk benda atau kondisi yang tidak jelas konteksnya

---

## Daftar Istilah Terlarang

Berlaku di semua field yang diaudit. Istilah berikut tidak boleh muncul di field manapun selain sebagai token UCAP guru ke siswa di `langkah.teks`.

| Istilah terlarang | Ganti dengan |
|---|---|
| "chorus" | sebutkan kalimat spesifik yang diucapkan bersama — contoh: "ucap 'Goodbye, everyone!' bersama" |
| "modeling" / "model" | "ucapkan sebagai contoh", "peragakan", "tunjukkan caranya" |
| "cooldown" | "setelah aktivitas gerak", "setelah siswa kembali ke tempat duduk" |
| "freeze" sebagai istilah teknis | "berdiri diam", "diam di tempat" |
| "drill" | "latihan pengucapan", "ulangi bersama" |
| "chunk" | "kelompok kata", "bagian" |
| "cue" sebagai instruksi | "isyarat", "tanda", "sinyal" |
| "reset" | "tenangkan kelas kembali", "kembali ke posisi awal" |
| "shared emotional ending" | hapus — catatan perancang, bukan panduan guru |
| "phonological awareness" | hapus — istilah akademik, bukan panduan guru |
| "flow" dalam konteks pedagogis | "urutan", "kelancaran sesi" |
| "scaffolding" | "bantuan bertahap", "panduan langkah demi langkah" |
| "Fast voice!" / "Small voice!" / "Big voice!" / "Slow voice!" di field selain UCAP | ganti dengan keterangan aksi setara — contoh: "ucapkan dengan cepat", "ucapkan dengan suara kecil" |

**Jangan laporkan jika:**
- Istilah sudah dijelaskan oleh kalimat berikutnya secara konkret
- Istilah adalah bagian dari token UCAP guru ke siswa di `langkah.teks` yang memang diajarkan di TP ini
