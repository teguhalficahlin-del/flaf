# Sesi M3 — Perbandingan TP 07 & TP 08

**Tanggal**: Mei 2026
**Status**: Draft untuk review Anda
**Schema yang dipakai**: v4.3 (tidak ada extension baru)

---

## A. Status Migrasi Setelah M3

```
   TP 01 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.3 (Kelas 1)
   TP 02 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.3 (Kelas 1)
   TP 03 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.3 (Kelas 1)
   TP 04 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.3 (Kelas 1)
   TP 05 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.3 (Kelas 1)
   TP 06 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.3 (Kelas 1)
   TP 07 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.3 (NEW — Kelas 2 mulai)
   TP 08 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.3 (NEW — Kelas 2)
   TP 09-18                          ⬚ v3 (belum)
```

**Progress**: 8/18 migrate (44%). **Kelas 2 dimulai** dengan tema
"Keluarga dan Rumah". Setelah M3, posisi siap untuk M4 (TP 09 Animals
& TP 10) atau mid-checkpoint Kelas 2 setelah 4 TP.

---

## B. Schema v4.3 — Validasi Stabilitas (Lanjutan)

**Antisipasi M3 di refleksi M2**: TP 07 (My Family) mungkin butuh
`flags: ['privacy_sensitive']` baru karena topik personal.

**Hasil aktual**: TIDAK butuh flag baru. Sensitivitas privacy dihandle
lewat **kombinasi yang sudah ada**:
- `fallback.sensitif` (string deskriptif, sudah dipakai sejak v4.0)
- `micro_script` yang scripted-inklusif (mekanisme yang sudah ada)
- `mode.mudah` yang memberi opsi pendekatan lebih aman

Validasi penting Jalur 2 (ulang dari M2): **schema sudah matang. Antisipasi
tidak selalu jadi kenyataan. Reuse mekanisme yang ada lebih elegan daripada
menambah flag baru untuk tiap karakteristik TP.**

**Schema v4.3 changes dari M3**: TIDAK ADA. Schema tetap stabil sejak M2
cleanup batch.

---

## C. Karakter Mendasar — TP 07 vs TP 08

| Aspek | TP 07 — My Family | TP 08 — My House |
|---|---|---|
| **Fokus utama** | Naming anggota keluarga + introduce | Naming ruangan + elemen rumah |
| **Tema afektif** | TINGGI — keluarga personal | SEDANG — rumah lebih netral |
| **Sensitivitas** | Struktur keluarga bervariasi | Kondisi rumah bervariasi |
| **Output siswa** | Verbal (perkenalkan keluarga) | Verbal + Kinestetik (walk through) |
| **Tipe dominan** | `chorus`, `tpr_action` (chant), `pair_work`, `review_quick` | `chorus`, `tpr_action` (walk), `pair_work`, `review_quick` |
| **Pair work** | Cerita keluarga ke teman | Tour rumah pretend ke teman |
| **TPR ikonik** | Chant ritmis tepuk-mother | Walk Through the House |
| **Pola target** | "This is my ___" | "This is the ___" |
| **Cakupan vocab** | 6 anggota keluarga | 5 (3 ruangan + door/window) |
| **Mode tantangan** | Tambah sifat ("She is kind") | Pola 2-slot "There is a ___ in the ___" |
| **Transfer closure** | Recycle salam TP 01 ke keluarga | Touch door/window/kitchen di rumah |

---

## D. Yang Saya PERTAHANKAN dari v3

### TP 07:
- ✅ 6 anggota keluarga inti sebagai vocab target
- ✅ Pola "This is my ___" sebagai inti
- ✅ Pair work cerita keluarga ke teman
- ✅ Recap kartu acak di Penutup
- ✅ Validasi via kartu acak saat berkemas
- ✅ Catatan diagnostik (tertukar grandmother/grandfather)

### TP 08:
- ✅ Pengenalan ruangan utama (bedroom, kitchen, bathroom)
- ✅ Pola untuk deskripsi rumah ("This is the [room]")
- ✅ Pair work cerita rumah ke teman
- ✅ Recap di Penutup
- ✅ Validasi via kartu acak
- ✅ Catatan diagnostik (tertukar kitchen/bathroom)
- ✅ Pola "There is a ___ in the ___" — tapi dipindah ke mode tantangan

---

## E. Yang Saya UBAH dari v3

### TP 07 — Perubahan Substansi

| # | Perubahan | Justifikasi |
|---|---|---|
| 1 | Pendekatan **inklusif scripted** di Pembuka (frasa "siapa pun yang dianggap keluarga") | Q1c keputusan Anda — guru tidak improvisasi, scripted konkret. Aman untuk single parent, yatim, tinggal dgn kakek-nenek |
| 2 | Aktivitas **presentasi ke kelas DIHAPUS** dari main flow → masuk fallback `kelas_sangat_aktif` | Q2c — anak 6-7 tahun belum siap tampil di depan kelas dalam bahasa asing tanpa tekanan. Pair_work = primary speaking turn |
| 3 | Foto keluarga siswa **TIDAK DIPAKAI**. Hanya kartu generik 6 anggota | Q3a — foto dari rumah bergantung pada kondisi keluarga, tidak bisa dijamin semua bawa. Zero-prep, konsisten TP 06 |
| 4 | Closure = **recycle salam TP 01** ("Tonight say Good night, tomorrow say Good morning") | Q4b refined — zero vocab baru, 2 momen nyata, semua siswa pasti mengalami keduanya |
| 5 | TPR aktivitas BARU: **chant ritmis** [tepuk-tepuk-mother] | P2c — lebih sederhana dari gerakan per-anggota. Semua siswa bisa ikut tanpa hafal gerakan khusus. Guru fasilitas minimal langsung bisa jalan |
| 6 | Kartu ilustrasi dirancang **netral & beragam** (usia, penampilan) | Mendukung inklusivitas Q1c di level visual |

### TP 08 — Perubahan Substansi

| # | Perubahan | Justifikasi |
|---|---|---|
| 1 | Core vocab = **bedroom, kitchen, bathroom + door, window** (5 vocab) | Q1c — "living room" dihapus karena tidak universal di rumah sederhana. Door & window dipilih karena ada di SEMUA rumah, mudah ditunjuk langsung di kelas |
| 2 | Pola **HYBRID** — "This is the [room]" untuk semua mode, "There is a [thing] in the [room]" hanya di mode tantangan | Q2c — anak Kelas 1 belum siap 2-slot pattern. Pola dasar paralel dengan TP 07. Diferensiasi 3-tier yang konsisten |
| 3 | Aktivitas v3 **"gambar rumah sendiri" DIHAPUS** → diganti "Walk Through the House" (pretend tour TPR-like) | Q3b — menggambar rumah sendiri bisa memalukan untuk siswa rumah sederhana. Walk Through inklusif, kinestetik, tidak menyinggung kondisi pribadi |
| 4 | Benda dalam ruangan (bed, table, chair) **HANYA di mode tantangan** | Q4c — vocab utama fokus 5 vocab inti. Benda tidak masuk indikator, hanya untuk siswa siap |
| 5 | "Sofa" dihapus dari benda yang ditarget bahkan di tantangan | Konsisten Q1c — sofa tidak universal di rumah sederhana. Bed/table/chair lebih aman |
| 6 | Door & window dihubungkan ke **benda nyata di kelas** (media `media-benda-kelas`) | Zero-prep visual + koneksi konkret langsung. Anak bisa tunjuk pintu/jendela kelas sendiri |
| 7 | Aktivitas presentasi individu **TIDAK ADA** di main flow (konsisten TP 07) | Anak 6-7 belum siap presentasi tunggal. Pair_work cukup |

---

## F. Risiko yang Saya Akui

### Risiko 1 — TP 07 chant ritmis bisa kacau di kelas besar

Tepuk + ucap berbarengan 30 siswa butuh sinkronisasi. Fallback `ritme_kacau`
ada ("Stop. Listen first!"). Tapi guru baru mungkin tetap kewalahan. Bisa
revisi jadi guru-only-tepuk + siswa hanya ucap, atau per-baris bergantian.

### Risiko 2 — TP 07 closure "Good night/Good morning" mungkin kurang menantang

Recycle salam TP 01 adalah keputusan sadar (P1 jawaban Anda: "Good morning"
+ "Good night"). Tapi untuk siswa yang sudah lancar, closure ini mungkin
terasa underwhelming. Mode tantangan pair_work sudah kompensasi dengan
"She is kind" — semestinya cukup. Tapi kalau Anda merasa closure perlu
lebih, bisa tambah opsi "Tonight, say 'This is my mother' to your mom!"
sebagai variasi optional.

### Risiko 3 — TP 08 "Walk Through the House" butuh ruang fisik

Banyak kelas SD di daerah sempit, bangku rapat. Fallback `kelas_sempit`
ada — siswa berdiri di tempat dan tunjuk. Tapi spirit kinestetiknya
sebagian hilang. Apakah Anda mau saya buat varian "Walk Through" yang
murni dari kursi (point + lean direction)?

### Risiko 4 — TP 08 hapus "living room" dari core vocab

V3 punya 4 ruangan + living room. Saya hapus karena tidak universal. Tapi:
(a) banyak buku teks Kelas 1 SD di Indonesia tetap pakai living room, jadi
siswa mungkin papar dari sumber lain; (b) anak kelas menengah ke atas yang
punya living room akan merasa "kenapa tidak diajarkan?". Mode tantangan
pair_work memang buka pintu untuk "tambah vocab sendiri" — tapi tidak
eksplisit menyebut living room. Bisa tambah di tantangan jika Anda mau.

### Risiko 5 — TP 08 vocab terlalu sedikit (5 dibanding 8-10 TP lain)

TP 05 punya 8 warna, TP 06 punya 6 bentuk, TP 07 punya 6 anggota. TP 08
hanya 5 vocab utama. Padat-cocok atau under-scoped? Argumentasi saya:
door/window = elemen yang **selalu bisa ditunjuk** sehingga reinforcement
visual jauh lebih kuat. Tapi kalau Anda merasa 5 terlalu sedikit, bisa
tambah balik "living room" + 1 benda jadi 6-7.

### Risiko 6 — TP 07 & TP 08 sama-sama pakai pola TPR sebagai aktivitas tengah Inti

Pattern: chorus → tpr_action → pair_work. Bagus untuk konsistensi pedagogis,
tapi siswa mungkin merasa "kok minggu lalu juga begini?". Untuk M4 (TP 09
Animals), saya akan eksplorasi tipe lain selain `tpr_action` untuk variasi.

### Risiko 7 — TP 08 closure transfer butuh siswa "sentuh pintu/jendela di rumah"

Realistis untuk usia 6-7? Anak mungkin lupa setelah pulang. Tapi karena
fokusnya transfer-mindful (bukan target hafal), kalau cuma sebagian apply
sudah berhasil. Bisa diperkuat dengan "Tomorrow, tell me what you said at
home!" tapi itu butuh integrasi ke TP berikutnya.

---

## G. Format Review untuk Anda

### TP 07 — My Family

```
Substansi TP 07 → [Tepat / Tepat dengan koreksi / Perlu revisi]
Koreksi (jika ada):
1. ...
```

### TP 08 — My House

```
Substansi TP 08 → [Tepat / Tepat dengan koreksi / Perlu revisi]
Koreksi (jika ada):
1. ...
```

### Pendekatan Inklusivitas (kedua TP)

```
Scripted inklusivitas di Pembuka → [Setuju / Tidak]
Skip presentasi individu di main flow → [Setuju / Tidak]
Recycle vocab TP 01 di closure TP 07 → [Setuju / Tidak]
"Walk Through the House" sebagai pengganti gambar denah → [Setuju / Tidak]
```

---

## H. Apa yang Terjadi Setelah Review

**Skenario A — Setuju semua**: Commit ke repo. Lalu siapkan M4 (TP 09
Animals & TP 10 Body Parts atau urutan lain sesuai fase-a.js).

**Skenario B — Koreksi substansi**: Revisi sebelum commit.

**Skenario C — Mid-checkpoint Kelas 2**: Anda mungkin mau audit Kelas 2
setelah 4 TP (TP 07-10), bukan setelah 2 TP. Konsisten dengan audit Kelas
1 yang Anda lakukan setelah 6 TP. Saya tunggu instruksi.

---

## I. Catatan untuk Diri Saya (Refleksi Sesi M3)

1. **Validasi schema v4.3 — TIDAK ADA extension dalam M3**: Antisipasi
   `privacy_sensitive` flag tidak terealisasi. Mekanisme `fallback.sensitif`
   + scripted micro_script + mode.mudah sudah cukup. Schema makin matang
   seiring pola handling sensitivitas ter-standardize.

2. **Pattern "TPR sebagai energy break di tengah Inti" sudah jadi resmi**:
   TP 03 (action verbs), TP 06 (gambar bentuk udara), TP 07 (chant ritmis),
   TP 08 (walk through). 4 dari 8 TP migrated punya pola ini. Untuk M4
   pertimbangkan eksplorasi tipe lain agar tidak monoton — mungkin `game`
   atau `dialogue_practice`.

3. **Pendekatan inklusif scripted lebih powerful daripada flag baru**:
   Awalnya saya pikir butuh `flags: ['privacy_sensitive']`. Ternyata
   menuliskan frasa konkret dalam Bahasa Indonesia di `micro_script.selama`
   jauh lebih actionable untuk guru. Flag hanya tag — script adalah
   guidance nyata.

4. **TP 08 = test case "kondisi rumah sederhana" yang lebih halus dari
   TP 07**: TP 07 sensitivitas keluarga sangat terlihat (orang tua, yatim).
   TP 08 sensitivitas rumah lebih halus (siapa yang punya living room?).
   Q3b "Walk Through" elegan karena rumah pretend universal — semua siswa
   pakai kartu yang sama, tidak ada perbandingan.

5. **Antisipasi M4 (TP 09 Animals)**: Kemungkinan tidak punya sensitivitas
   personal seperti TP 07/08. Tapi mungkin butuh penanganan **suara
   binatang** (vocab non-konvensional: meow, woof, moo). Apakah suara
   masuk vocab atau hanya audio_cue? Akan evaluasi saat draft.
   Antisipasi schema: kemungkinan tetap stabil. TPR sangat alami untuk
   binatang (pretend movements).

---

## Akhir COMPARISON-M3.md
