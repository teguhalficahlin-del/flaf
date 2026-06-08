# EDIT REPORT — TP-02

**File input** : `docs/output-v5/tp-02-v5.js`
**File output** : `docs/output-v5/tp-02-v6.js`
**Basis audit** : `docs/output-v5/audit-output-1-tp02.md`
**Tanggal edit** : 2026-06-07
**Editor** : Claude Code (Sonnet 4.6)

---

## RINGKASAN

| Temuan | Diterapkan | Tidak Diterapkan |
|--------|-----------|-----------------|
| 8 total | 8 | 0 |

---

## DETAIL PERUBAHAN

### 1 — IG-03 Mayor — L9 teks + cue

**Temuan** : Langkah "praktikkan clap twice" hanya ada di cue — guru yang membaca teks linear melewati prasyarat L10.

**Perubahan teks L9** : Tambahkan di akhir teks:
`AKSI: Praktikkan clap twice bersama kelas — tepuk dua kali, freeze, diam.`

**Perubahan cue L9** : Hapus `Clap twice = stop and freeze — praktikkan sekali bersama kelas sebelum mulai.`

**Tidak diubah** : Isi teks L9 sebelumnya, darurat, energi.

---

### 2 — UC-04 Sedang — L3 teks

**Temuan** : `UCAP: "Now I know your teacher's name."` — kalimat logis keliru (guru sudah tahu nama sendiri).

**Perubahan** :
`UCAP: "Now I know your teacher's name."` → `UCAP: "Now you know my name!"`

---

### 3 — IG-01 Sedang + IG-07 Sedang — L11 teks (diterapkan bersama)

**Temuan IG-01** : `"berdiri diam"` ambigu setelah siswa baru duduk.
**Temuan IG-07** : `"Tepuk 1 kali"` di L11 konflik dengan `"Clap twice"` yang dibangun di L9/L10.

**Perubahan** :
`AKSI: Angkat tangan. AKSI: Tepuk 1 kali — berdiri diam. AKSI: Tunggu sampai kelas diam minimal 3 detik.`
→
`AKSI: Angkat tangan — tunggu sampai kelas diam minimal 3 detik.`

Satu penggantian menyelesaikan kedua temuan — menghilangkan signal bertepuk (IG-07) dan ambiguitas "berdiri diam" (IG-01) sekaligus.

---

### 4 — UC-04 Sedang — L11 teks (UCAP self-assessment)

**Temuan** : `UCAP: "Now practise with your partner. If you need help, look at the board. If you are ready, try without looking!"` — dua kondisi bersyarat dalam satu kalimat terlalu kompleks untuk kelas 1.

**Perubahan** : Ganti UCAP tunggal dengan dua instruksi bertahap:
```
AKSI: Tunjuk papan — ke siswa yang butuh bantuan.
UCAP: "Look at the board. Say it together."
AKSI: Palingkan dari papan — ke siswa yang siap.
UCAP: "Ready? No looking. Try alone."
```

`diferensiasi.needHelp` dan `diferensiasi.ready` tidak diubah — sudah selaras dengan dua UCAP baru.

---

### 5 — UC-02 Sedang — L1, L2, L4, L5, L7, L12 teks + cue (sistematis)

**Temuan** : Pola `...` di 6 UCAP — TTS behavior tidak dapat diprediksi.

**Kategori A — placeholder nama guru (L1, L2, L12)** :
- L1: `"My name is..."` → `"My name is [nama Anda]."`
- L2: `"Your name is...!"` → `"Your name is [nama Anda]!"`
- L12: `"Hello! My name is... Nice to meet you all!"` → `"Hello! My name is [nama Anda]. Nice to meet you all!"`

**Kategori B — sentence starters (L4, L5, L7)** :
- L4: `"Now you! My name is..."` → `"Now you! My name is."`
- L5: `"Write your name here. My name is..."` → `"Write your name here. My name is."`
- L7: `"I am..."` → `"I am."`

Untuk Kategori B: `...` diganti `.` — TTS menghasilkan sentence-ending intonation alami; guru berhenti dan menunggu siswa melengkapi sesuai konteks pedagogis yang sudah ada.

**Perubahan tambahan** :
- cue L1: tambahkan `Ganti "[nama Anda]" dengan nama Anda.`
- cue L4: tambahkan `— tunggu siswa melengkapi dengan nama mereka.`
- cue L7: update referensi dari `"I am..."` ke `"I am."`
- checklist: tambahkan item `'Ganti "[nama Anda]" di UCAP Layar 1, 2, 12 dengan nama Anda yang sebenarnya'`

---

### 6 — IG-08 Minor — L4 teks

**Temuan** : `— ucapkan dulu sendiri, siswa dengarkan` redundan — instruksi sama sudah ada di `AKSI: Minta siswa mendengarkan terlebih dahulu tanpa mengikuti`.

**Perubahan** :
`AKSI: Tulis di papan: My name is ___. Tunjuk papan — ucapkan dulu sendiri, siswa dengarkan.`
→
`AKSI: Tulis di papan: My name is ___. Tunjuk papan.`

---

### 7 — UC-06 Minor — L2 cue

**Temuan** : Cue membuka dengan English.

**Perubahan** :
`'Wait 2 seconds first setelah tanya "What is my name?"...'`
→
`'Tunggu 2 detik setelah tanya "What is my name?"...'`

---

### 8 — UC-06 Minor — L13 cue

**Temuan** : Cue membuka dengan English.

**Perubahan** :
`'Keep each turn short — jaga tempo penutup...'`
→
`'Jaga tempo — setiap giliran singkat...'`

---

## YANG TIDAK DIUBAH

- Alur dan urutan seluruh 16 langkah
- Semua field `bantuan`, `darurat`, `energi`
- Field `diferensiasi` L11 — selaras dengan UC-04 fix
- `catatan.risiko` dan `catatan.autonomy`
- `preOpening`
- `energi_map`
- Semua `indikator`, `vocab`, `persiapan`, `media`, `printables`
- L6, L8, L10, L14, L15, L16 — tidak ada temuan

---

## QUALITY GATE EDITOR

| Gate | Status | Catatan |
|------|--------|---------|
| QG-1: Semua temuan Mayor diterapkan | ✅ LULUS | IG-03 Mayor → diterapkan di L9 |
| QG-2: Prinsip Perubahan Minimum | ✅ LULUS | Setiap perubahan traceable ke temuan audit |
| QG-3: Tujuan pedagogis dipertahankan | ✅ LULUS | Alur, strategi, diferensiasi tidak berubah |
| QG-4: Tidak ada redesain tersembunyi | ✅ LULUS | Tidak ada langkah baru, tidak ada struktur baru |
| QG-5: Konsistensi internal file | ✅ LULUS | `diferensiasi` selaras; `checklist` diperbarui |
| QG-6: Export default tersedia | ✅ LULUS | `export default TP_02;` di akhir file |

**STATUS: SIAP AUDIT ULANG**

---

## IDENTITAS EDIT (LEGACY TP-01 — ARSIP)

---

## BAGIAN 1 — PEMERIKSAAN AWAL

**Status** : ☑ Output Audit tersedia (`docs/output-v5/audit-output-1.md`)

**File Target** : `docs/output-v5/tp-01-v6.js`

**Jumlah Temuan Audit**

Mayor : 2
Sedang : 7 *(6 di tabel ringkasan + IG-01 di Domain A)*
Minor : 2
Total : 11

> Catatan: Temuan IG-01 (L3, Sedang) tercantum lengkap dengan rekomendasi di Bagian 2 Domain A audit output, namun tidak muncul pada tabel ringkasan Bagian 5. Temuan tetap diterapkan karena rekomendasi jelas dan dapat ditelusuri ke audit output.

---

## BAGIAN 2 — PENERAPAN TEMUAN

---

### Temuan 1

**Kode** : IG-01

**Lokasi** : L3 — teks

**Status** : ☑ Diterapkan

**Catatan** : `"sebut namanya dulu"` diubah menjadi `"ucapkan nama waktunya"` — menghilangkan ambiguitas tentang nama apa yang dimaksud.

---

### Temuan 2

**Kode** : IG-03 (Mayor — 1)

**Lokasi** : L11 — teks

**Status** : ☑ Diterapkan

**Catatan** : `"Jeda — tunggu respons siswa."` dipindahkan dari setelah `"Angguk, tersenyum."` ke setelah UCAP `"And when you leave? What do you say then?"` — menghilangkan instruksi menunggu sebelum ada pertanyaan.

---

### Temuan 3

**Kode** : IG-03 (Mayor — 2)

**Lokasi** : L11 — teks

**Status** : ☑ Diterapkan

**Catatan** : Ditambahkan `UCAP: "Goodbye. Bye. See you."` sebagai langkah modelling guru setelah `"Minta siswa mendengarkan tanpa mengikuti."`. Frasa undangan diganti menjadi `UCAP: "Now say it with me!"` — konsisten dengan pola yang digunakan sepanjang TP.

---

### Temuan 4

**Kode** : UC-06 (Sedang — UCAP "Good morning")

**Lokasi** : preOpening cue

**Status** : ☑ Diterapkan

**Catatan** : Panduan `"Sesuaikan salam dengan waktu kelas hari ini."` ditambahkan ke cue preOpening — berlaku sebagai panduan global untuk seluruh UCAP "Good morning" yang hardcoded di preOpening, L1, L2, dan L10. Perubahan minimum satu titik untuk empat lokasi.

---

### Temuan 5

**Kode** : IG-04 (Sedang)

**Lokasi** : preOpening — cue

**Status** : ☑ Diterapkan

**Catatan** : Cue dipangkas dari 4 kalimat menjadi 3 kalimat: `"Mulai sebelum kelas masuk. Kiki wajib di tangan. Sesuaikan salam dengan waktu kelas hari ini."` Kalimat yang mengulang teks dan penjelasan editorial dihapus. (Temuan 4 dan 5 diterapkan bersama di satu field.)

---

### Temuan 6

**Kode** : IG-05 (Sedang)

**Lokasi** : L13 — teks

**Status** : ☑ Diterapkan

**Catatan** : Ditambahkan `AKSI: Siswa yang bisa menyebut satu salam tanpa melihat kartu → grup Ready. Siswa lain → grup Need Help.` sebelum `"AKSI: Bagi aktivitas menjadi dua kelompok"` — menghilangkan keputusan operasional pembagian kelompok dari guru.

---

### Temuan 7

**Kode** : IG-08 (Sedang — L9 → L10)

**Lokasi** : L10 — teks

**Status** : ☑ Diterapkan

**Catatan** : `"AKSI: Angkat telapak tangan menghadap bawah. UCAP: 'Sit down, everyone.' AKSI: Tunggu sampai semua siswa duduk."` dihapus dari awal L10. L10 kini dimulai langsung dari `"AKSI: Hubungkan materi dengan situasi di rumah."` — siswa sudah duduk dari akhir L9.

---

### Temuan 8

**Kode** : IG-10 (Sedang)

**Lokasi** : L13 — teks

**Status** : ☑ Diterapkan

**Catatan** : `"Kiki & Momo digunakan oleh satu pasangan setiap giliran — pasangan lain praktik tanpa boneka. Ganti pasangan setiap ±1 menit saat guru memberi sinyal."` diganti menjadi `"Kiki & Momo hanya untuk grup Need Help. Guru pegang Kiki, siswa pegang Momo. Ganti siswa setiap 1 menit."` — menghilangkan beban pelacakan rotasi multi-kelompok.

---

### Temuan 9

**Kode** : UC-04 (Sedang)

**Lokasi** : L13 — teks

**Status** : ☑ Diterapkan

**Catatan** : `UCAP: "Now let us practice. If you need help, look at the cards. If you are ready, try without the cards."` diganti dengan dua UCAP terpisah:
- `UCAP: (tunjuk kartu, ke grup Need Help) "Look at the cards. Say it with me."`
- `UCAP: (sembunyikan kartu, ke grup Ready) "No cards. Try alone."`
Menghilangkan self-assessment dua kondisi dalam satu kalimat untuk siswa kelas 1.

---

### Temuan 10

**Kode** : IG-08 (Minor — L9)

**Lokasi** : L9 — teks

**Status** : ☑ Diterapkan

**Catatan** : `"AKSI: Lanjut ke aktivitas Real Life."` dihapus dari akhir L9 — meta-navigasi yang tidak diperlukan.

---

### Temuan 11

**Kode** : UC-06 (Minor — Bahasa Cue)

**Lokasi** : L1 cue, L2 cue, L7 cue

**Status** : ☑ Diterapkan

**Catatan** : Tiga cue yang mencampur English-Bahasa Indonesia dialihbahasakan penuh ke Bahasa Indonesia:
- L1: `'Satu demo saja — jangan diulang.'`
- L2: `'Langsung model jawaban setelah ucap "Say it with me!" — jangan jeda.'`
- L7: `'Tempo cepat tapi terkontrol — siswa tetap duduk. Berhenti saat energi masih tinggi.'`

---

## BAGIAN 3 — VALIDASI EDIT

☑ Seluruh temuan telah diterapkan

☑ Tidak ada perubahan di luar Output Audit

☑ Tujuan pembelajaran tetap sama

☑ Strategi pembelajaran tetap sama

☑ Struktur TP tetap sama

☑ Urutan aktivitas tetap sama

---

## BAGIAN 4 — RINGKASAN

**Jumlah temuan diterapkan** : 11

**Jumlah temuan tidak diterapkan** : 0

---

## BAGIAN 5 — PERUBAHAN DI LUAR OUTPUT AUDIT

☑ Tidak ada

---

## BAGIAN 6 — QUALITY GATE EDITOR

### Gate A — Kepatuhan terhadap Output Audit

☑ Lulus

Seluruh 11 temuan diterapkan. Setiap perubahan dapat ditelusuri ke audit-output-1.md.

---

### Gate B — Integritas TP

☑ Lulus

Tujuan pembelajaran, strategi pedagogis, urutan aktivitas, dan level kesulitan tidak berubah.

---

### Gate C — Perubahan Minimum

☑ Lulus

Tidak ada aktivitas baru atau yang dihapus. Tidak ada penjelasan baru di luar rekomendasi audit. Perubahan terbatas pada redaksi dan urutan instruksi dalam field yang ada.

---

### Gate D — Konsistensi Revisi

☑ Lulus

Istilah, format, pola UCAP, dan struktur TP tetap konsisten. Perubahan bahasa cue (L1/L2/L7) memperkuat konsistensi yang sudah ada.

---

### Gate E — Beban Kognitif

☑ Lulus

Seluruh revisi mengurangi interpretasi dan keputusan guru. Tidak ada beban baca baru yang ditambahkan.

---

### Gate F — Ruang Lingkup Editor

☑ Lulus

Editor tidak melakukan audit baru, tidak membuat rekomendasi baru, tidak melakukan redesign, tidak melakukan improvement di luar Output Audit.

---

## BAGIAN 7 — STATUS AKHIR

☑ **SIAP AUDIT ULANG**

---

## BAGIAN 8 — PERTANYAAN AKHIR

> Apakah seluruh perubahan pada TP ini dapat ditelusuri kembali ke Output Audit?

☑ Ya

Seluruh 11 perubahan dapat ditelusuri langsung ke temuan di `docs/output-v5/audit-output-1.md`.

---

## CATATAN EDITOR

**Penggabungan temuan:** Temuan 4 (UC-06 hardcoded "Good morning") dan Temuan 5 (IG-04 cue terlalu panjang) diterapkan bersama di satu field (preOpening cue). Penggabungan ini tidak memperluas ruang lingkup — kedua temuan memang merujuk ke field yang sama.

**Temuan IG-01:** Muncul di Domain A audit output dengan rekomendasi lengkap, namun tidak masuk tabel ringkasan Bagian 5. Diterapkan berdasarkan rekomendasi yang jelas di body audit output.
