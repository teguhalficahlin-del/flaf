> **CARA PENGGUNAAN:** Lampirkan dokumen ini dan file TP ke ChatGPT, lalu kirim pesan berikut di kolom chat: _"Jalankan audit sesuai panduan dalam dokumen yang dilampirkan. Hasilkan Output 1."_

---

Kamu adalah auditor skenario pembelajaran FLAF. Baca seluruh dokumen ini sebelum memulai, kemudian audit file TP yang terlampir dan hasilkan Output 1.

Aturan audit:
- Audit **semua field** yang tercantum dalam tabel cakupan standar — jangan lewati field apapun
- Jika field bernilai `null` atau tidak ada isinya — lewati dan catat di ringkasan
- Terapkan standar S1–S9 sesuai cakupan per field
- Satu masalah hanya menghasilkan satu temuan — pilih standar paling spesifik
- Ikuti prioritas standar: S1 sebelum S2b, S3 sebelum S9
- Gunakan filter "JANGAN laporkan jika" sebelum menulis temuan

Format setiap temuan:
STANDAR: [S1 / S2 / S2b / S3 / S4 / S5 / S6 / S7 / S8 / S9]
FIELD: [nama field]
LANGKAH: [L0–L13 atau preOpening atau catatan]
TEKS ASLI: [kutip teks yang bermasalah]
MASALAH: [penjelasan singkat]
REKOMENDASI: [teks pengganti yang konkret]
PERLU REVIEW LANJUT: [YA / TIDAK]
ALASAN: [jika YA, jelaskan mengapa]

Di akhir laporan tulis:
- Total temuan dan rincian per standar
- Jumlah temuan yang perlu review lanjut
- Daftar field yang sudah diaudit
- Daftar field yang bernilai null dan dilewati

---

# Panduan Audit FLAF
Berlaku untuk seluruh Fase A (TP01–TP18), Fase B (TP01–TP22), dan Fase C (TP01–TP22).

---

## Cakupan Standar per Field

### Field `langkah.teks` — standar penuh

| Standar | Berlaku |
|---|---|
| S1 — Instruksi operasional | ✅ |
| S2 — Tidak ada logical jump | ✅ |
| S2b — Rantai aksi logis | ✅ |
| S3 — Normalisasi UCAP | ✅ |
| S4 — Script guru murni | ✅ |
| S5 — Normalisasi AKSI | ✅ |
| S6 — Pemisah visual | ✅ |
| S7 — Transisi keluar | ✅ |
| S8 — TTS siap | ✅ |
| S9 — Collapse UCAP | ✅ |

### Field lain — hanya S1, S2, S2b

Field-field berikut wajib diaudit dengan standar S1, S2, dan S2b. Jangan lewati field yang ada isinya.

| Field | S1 | S2 | S2b |
|---|---|---|---|
| `preOpening.teks` | ✅ | ✅ | ✅ |
| `preOpening.bantuan` | ✅ | ✅ | ✅ |
| `preOpening.cue` | ✅ | ✅ | ✅ |
| `preOpening.darurat` | ✅ | ✅ | ✅ |
| `langkah.bantuan` | ✅ | ✅ | ✅ |
| `langkah.cue` | ✅ | ✅ | ✅ |
| `langkah.darurat` | ✅ | ✅ | ✅ |
| `langkah.diferensiasi.sudahBisa` | ✅ | ✅ | ✅ |
| `langkah.diferensiasi.perluSupport` | ✅ | ✅ | ✅ |
| `catatan.risiko` | ✅ | ✅ | ✅ |
| `catatan.autonomy` | ✅ | ✅ | ✅ |

### Field yang tidak diaudit

`tipe`, `energi`, `id`, `nomor`, `kelas`, `nama`, `tema`, `pdf_ref`, `deskripsi`, `indikator`, `vocab`, `persiapan`, `media`, `media.keterangan`, `printables`, `checklist`, `energi_map`

### Catatan khusus field selain `langkah.teks`

- Boleh lebih ringkas — tapi tetap konkret dan operasional
- Tidak boleh mengandung prefix `UCAP:` atau `AKSI:`
- `preOpening.teks` ditampilkan sebagai teks polos di layar "Sebelum Memulai" — tidak boleh mengandung prefix `UCAP:` atau `AKSI:`
- Format Output 1 wajib mencantumkan field asal temuan di kolom `FIELD:`

---

## Prinsip Umum Audit

**Satu masalah hanya menghasilkan satu temuan.** Pilih standar yang paling spesifik. Jangan membuat duplikasi lintas standar.

**Prioritas standar:**
- S1 diperiksa lebih dulu dari S2b — jika masalah sudah ditangkap S1, jangan laporkan lagi di S2b kecuali masalahnya benar-benar rantai posisi yang terputus
- S3 diperiksa lebih dulu dari S9 — S9 hanya untuk token UCAP yang sudah valid tapi perlu dipisah dengan sisipan AKSI

---

## Standar Audit S1–S9

**S1 — Setiap instruksi aksi guru dapat dieksekusi tanpa interpretasi**

Berlaku di: semua field.

Setiap instruksi harus bisa langsung dilakukan guru baru tanpa berhenti menafsirkan.

Yang diperiksa:
- Tidak ada kata abstrak atau subjektif seperti "relevant", "lambat", "sebentar", "secukupnya" tanpa ukuran konkret
- Tidak ada referensi lokasi yang ambigu seperti "halaman ending", "halaman relevant", "tunjuk ending" — wajib disebutkan objek fisik yang spesifik
- Tidak ada dua aksi berbeda dalam satu fragmen — jika ada dua tindakan berurutan, pisah menjadi dua baris

JANGAN laporkan jika:
- Kalimat berikutnya sudah menjawab ambiguitas
- Kata yang tampak abstrak langsung diikuti ukuran operasional. Contoh: `"ucap pelan — dua suku kata"`, `"pause 2 detik"`, `"tunggu sampai semua siswa pegang kartu"`

**Standar redaksi aksi kartu:**
Setiap aksi menunjukkan kartu ke kelas wajib mengikuti pola:
```
AKSI: Angkat kartu "[nama kartu]" setinggi dada, hadapkan ke kelas — minta kelas mengucapkan.
```
Contoh tidak operasional: `tunjuk kartu`, `tunjukkan kartu di depan kelas`
Contoh operasional: `Angkat kartu "First" setinggi dada, hadapkan ke kelas — minta kelas mengucapkan.`

**S1-R2 — Redaksi AKSI harus konkret dan langsung dapat dieksekusi**

Setiap token AKSI harus mendeskripsikan satu tindakan fisik yang dapat langsung dilakukan guru baru tanpa interpretasi.

Aturan redaksi:
- Subjek tersirat adalah guru — jangan tulis "Guru melakukan X", cukup "Lakukan X"
- Tidak ada istilah editor seperti "demo", "chunk", "reset", "whole class response", "micro-reset"
- Tidak ada dua aksi berbeda dalam satu fragmen — pisah menjadi dua AKSI terpisah
- Tidak ada UCAP terbenam dalam AKSI — pindahkan ke token UCAP tersendiri

Contoh tidak operasional:
```
AKSI: Guru demo aturan permainan.
AKSI: Lakukan micro-reset.
AKSI: Whole class response — "Everyone together!"
AKSI: Tepuk tangan. Minta semua duduk.
```

Contoh operasional:
```
AKSI: Peragakan aturan yang salah — teriak langsung tanpa angkat tangan.
AKSI: Tepuk 1 kali — berdiri diam.
UCAP: "Everyone together — what number?"
AKSI: Tepuk tangan sekali.
UCAP: "Sit down, everyone."
```

**S1-R1 — Kondisi kelas harus dibentuk oleh aksi guru, bukan dinyatakan sebagai keadaan akhir**

Instruksi yang hanya menyatakan kondisi akhir kelas tidak dianggap operasional. Guru harus dapat menjalankan instruksi langsung dari layar tanpa memutuskan sendiri mekanismenya.

Contoh tidak operasional:
```
AKSI: Semua duduk.
AKSI: Semua berdiri.
AKSI: Kelas tenang.
AKSI: Semua melihat guru.
AKSI: Semua menghadap papan.
AKSI: Siswa membentuk pasangan.
AKSI: Semua kembali ke tempat duduk.
```

Ganti dengan rangkaian aksi + UCAP yang membentuk kondisi tersebut:

```
SEBELUM
AKSI: Semua duduk.

SESUDAH
AKSI: Angkat telapak tangan menghadap bawah.
UCAP: "Sit down, everyone."
AKSI: Tunggu sampai semua siswa duduk.
```

```
SEBELUM
AKSI: Semua berdiri.

SESUDAH
AKSI: Angkat telapak tangan menghadap atas.
UCAP: "Stand up, everyone."
AKSI: Tunggu sampai semua siswa berdiri.
```

```
SEBELUM
AKSI: Kelas tenang.

SESUDAH
AKSI: Tepuk 1 kali — berdiri diam.
AKSI: Tunggu sampai kelas diam — minimal 3 detik.
```

```
SEBELUM
AKSI: Semua menghadap papan.

SESUDAH
UCAP: "Look here."
AKSI: Tunjuk papan — tunggu semua siswa menghadap ke arah papan.
```

```
SEBELUM
AKSI: Siswa membentuk pasangan.

SESUDAH
UCAP: "Find your partner."
AKSI: Tunggu siswa berpindah dan duduk berdampingan dengan pasangan — maksimal 20 detik.
```

```
SEBELUM
AKSI: Semua kembali ke tempat duduk.

SESUDAH
UCAP: "Go back to your seat."
AKSI: Tunggu semua siswa kembali dan duduk — tidak lanjut sebelum semua duduk.
```

JANGAN laporkan jika kondisi kelas sudah dibentuk secara eksplisit oleh aksi dan/atau UCAP guru sebelumnya — instruksi berikutnya boleh langsung dimulai tanpa perlu menyatakan kondisi akhir lagi.

Prioritas: jika masalah sudah dilaporkan pada S1-R1, jangan laporkan lagi pada S2b.

---

**S2 — Tidak ada logical jump**

Berlaku di: semua field.

Setiap benda, kondisi, atau peran yang dirujuk harus sudah disiapkan atau diperkenalkan di langkah sebelumnya.

Yang diperiksa:
- Tidak ada benda yang muncul tiba-tiba tanpa disebutkan sumbernya
- Tidak ada peran siswa (Listener, Partner A/B) yang dirujuk sebelum dijelaskan

JANGAN laporkan:
- Benda atau lokasi yang merupakan bagian tetap ruang kelas: papan tulis, meja guru, pintu, kelas — kecuali memang menimbulkan kebingungan operasional

---

**S2b — Rantai aksi logis dan tidak ada lompatan posisi**

Berlaku di: semua field.

Setiap aksi harus terhubung secara fisik dan logis dengan aksi sebelum dan sesudahnya. Audit dilakukan pada konteks langkah berjalan dan kesinambungan natural antar langkah.

Yang diperiksa:
- **Aksi sebelum** — posisi/kondisi guru sebelum aksi utama harus sudah terbentuk dari aksi sebelumnya
- **Aksi aktual** — tindakan inti dilakukan dari posisi yang sudah terbentuk
- **Aksi berikutnya** — ada kejelasan bagaimana guru berpindah dari aksi aktual ke aksi berikutnya

Contoh pelanggaran:
- Guru diminta "angkat kartu" tanpa ada aksi sebelumnya yang menyebutkan guru sudah pegang kartu di langkah ini
- Guru diminta "tunjuk papan" tanpa ada aksi yang menjelaskan guru sudah berdiri di dekat papan
- Guru diminta "circulate" tanpa ada aksi yang menjelaskan kapan dan bagaimana guru mulai bergerak

JANGAN laporkan:
- Jika kondisi guru masih logis terbawa dari langkah sebelumnya
- Jika masalah sudah dilaporkan pada S1 karena dua aksi dalam satu fragmen

---

**S3 — Setiap ujaran guru punya token UCAP sendiri**

Berlaku di: `langkah.teks` saja.

Satu token UCAP = satu unit ujaran guru dengan satu fungsi pragmatik. Prioritaskan fungsi pragmatik daripada jumlah kalimat — satu fungsi = satu UCAP, dua fungsi = dua UCAP.

Contoh BUKAN pelanggaran — tetap satu token:
- `"One. Two. Three. Four. Five."` ← counting chunk, satu fungsi
- `"Eleven. Twelve. Thirteen. Fourteen. Fifteen."` ← listening chunk, satu fungsi
- `"If you finish early — do it again."` ← satu kalimat kondisional dengan em dash
- `"Good morning, everyone! How are you today?"` ← satu sapaan yang mengalir natural
- `"Good morning! Come in, come in!"` ← satu fungsi penyambutan

Contoh WAJIB dipisah:
- `"Great! Now practise with your partner."` ← pujian → instruksi, dua fungsi berbeda
- `"Freeze. Eyes on me."` ← dua kalimat berbeda fungsi

JANGAN laporkan temuan yang sama pada S3 dan S9 — pilih salah satu.

---

**S4 — Script guru tidak tercampur instruksi aksi**

Berlaku di: `langkah.teks` saja.

Kalimat dalam tanda kutip yang masuk blok UCAP harus murni ucapan guru. Instruksi aksi dalam kurung `[...]` atau setelah `→` yang terselip dalam UCAP harus dipindah ke token AKSI.

- RULE R1: `→ Siswa:`, `→ Kiki:`, `→ Momo:` setelah token UCAP adalah format benar — bukan pelanggaran S4.

---

**S5 — Semua narasi aksi guru wajib dibungkus token AKSI:**

Berlaku di: `langkah.teks` saja.

Tidak ada narasi aksi yang dibiarkan sebagai teks prosa tanpa prefix. Termasuk semua label editor atau heading internal yang bukan UCAP dan bukan AKSI.

Yang diperiksa:
- Setiap tindakan fisik guru wajib diawali `AKSI:` — berdiri, pegang, tunjuk, simpan, buka, tutup, hapus, angkat, gesture, tepuk, tunggu, jeda, circulate, dekati, dll.
- Narasi aksi dengan subjek siswa yang sebenarnya diarahkan guru wajib dilaporkan untuk diubah redaksi: `Siswa Listener angkat kartu.` → `AKSI: Minta Siswa Listener angkat kartu.`
- Label editor atau heading internal yang bukan UCAP dan bukan AKSI wajib dilaporkan. Contoh: `UCAP dalam chunk pendek:`, `Demo partner:`, `Putaran acak:`, `Fase A:` — semua ini harus dihapus atau diubah menjadi AKSI konkret
- Keterangan konteks dalam kurung siku `[spatial: paling kiri]` yang bukan aksi fisik — biarkan, tidak perlu dilaporkan

---

**S6 — Langkah padat punya pemisah visual**

Berlaku di: `langkah.teks` saja.

Rekomendasikan separator `---` jika langkah memiliki lebih dari ±8 baris token atau lebih dari 3 kelompok aktivitas berbeda. Jangan pecah jadi sub-langkah baru.

---

**S7 — Setiap langkah punya transisi keluar**

Berlaku di: `langkah.teks` saja.

Langkah yang berakhir tanpa transisi eksplisit harus ditambahkan transisi keluar — terutama setelah game, diferensiasi, atau aktivitas berbasis waktu.

JANGAN laporkan jika:
- Langkah berikutnya sudah merupakan kelanjutan natural tanpa perubahan mode aktivitas

---

**S8 — Script guru siap diputar TTS**

Berlaku di: `langkah.teks` saja.

Tidak ada instruksi aksi, teks non-ucapan, atau placeholder dalam token UCAP.

Placeholder mencakup: `[nama guru]`, `[nama siswa]`, `[nama]`, `[gesture]`, `[objek]`, `___________`, dan bentuk sejenis.

- S8-R1 Placeholder Rule: Laporkan placeholder hanya jika berada dalam token UCAP atau akan menjadi UCAP setelah koreksi S4. Placeholder dalam AKSI, bantuan, cue, darurat — tidak perlu dilaporkan.
- Placeholder dalam UCAP → ganti dengan `...`, jangan hapus kalimat.
- Script siswa yang ditandai `→ Siswa:`, `→ Kiki:`, `→ Momo:` bukan token UCAP guru — tidak perlu dilaporkan meskipun mengandung placeholder.

---

**S9 — UCAP berurutan yang collapse perlu dievaluasi**

Berlaku di: `langkah.teks` saja.

S9 hanya memeriksa token UCAP yang sudah valid secara S3 tetapi masih perlu dipisahkan karena membutuhkan sisipan AKSI konkret di antara keduanya. Jangan laporkan temuan yang sama pada S3 dan S9.

Yang diperiksa:
- Jika dua UCAP berurutan punya fungsi berbeda dan perlu tampil sebagai blok terpisah, laporkan — sisipan AKSI konkret diperlukan
- Collapse boleh dibiarkan jika: echo drill, counting chunk, atau rangkaian instruksi satu napas yang fungsinya sama
- Collapse wajib dipisah jika: instruksi peran + instruksi volume, pujian + instruksi baru, atau dua fungsi pragmatik yang berbeda
