# AUDIT KETERPAKAIAN TP FLAF — OUTPUT 1

---

## IDENTITAS AUDIT

**TP** : TP-02 — Introducing Myself
**Tanggal Audit** : 2026-06-07
**Auditor** : Claude Code (Sonnet 4.6)
**Versi TP** : v5.0
**Versi Standar Audit** : 1.0

---

## BAGIAN 1 — PEMERIKSAAN AWAL

**Status** : Lengkap

**Struktur TP** : Valid — preOpening + 3 fase + 16 langkah. Export default tersedia.

**Catatan Awal** : TP memiliki alur yang jelas. Temuan utama terpusat di L9 (prosedur kritis hanya ada di cue), L11 (dua signal bertepuk yang bertentangan + ambiguitas "berdiri diam"), dan pola `...` sistematis di UCAP yang berpotensi mengganggu TTS.

---

## BAGIAN 2 — DOMAIN INSTRUKSI GURU

---

### Temuan IG-03 — Aksi Lompat Logika

**Lokasi** : L9 — cue vs. teks

**Teks cue** : `'Clap twice = stop and freeze — praktikkan sekali bersama kelas sebelum mulai.'`
**Teks L10** : `'AKSI: Clap twice untuk berhenti.'`

**Alasan** : Langkah "praktikkan clap twice bersama kelas" adalah prasyarat agar L10 dapat berjalan. Tanpa siswa mengenal sinyal ini, instruksi "clap twice untuk berhenti" di L10 tidak akan direspons. Namun langkah praktik ini hanya ada di cue L9, bukan di teks L9. Guru yang membaca teks secara linear akan melewati langkah kritis ini dan aktivitas walk and talk di L10 tidak akan bisa dihentikan.

**Rekomendasi** : Tambahkan AKSI konkret di teks L9 sebelum aba-aba mulai:
`AKSI: Praktikkan clap twice bersama kelas — tepuk dua kali, freeze, diam.`
Pindahkan dari cue ke teks.

**Prioritas** : Mayor

---

### Temuan IG-01 — Kata Ambigu

**Lokasi** : L11 — teks

**Teks** : `'AKSI: Angkat tangan. AKSI: Tepuk 1 kali — berdiri diam.'`

**Alasan** : "Berdiri diam" ambigu. Siswa baru saja diminta duduk di awal L11 (`UCAP: "Sit down, everyone."`). Instruksi "berdiri diam" yang muncul setelahnya tidak jelas — apakah siswa harus berdiri kembali dari kursi, atau "berdiri diam" digunakan dalam arti "freeze di posisi saat ini"? Dalam Bahasa Indonesia, "berdiri" secara harfiah berarti berdiri dari tempat duduk.

**Rekomendasi** : Ganti `"berdiri diam"` dengan `"tunggu kelas diam"`:
`AKSI: Angkat tangan — tunggu sampai kelas diam minimal 3 detik.`

**Prioritas** : Sedang

---

### Temuan IG-07 — Konflik Instruksi

**Lokasi** : L9 cue, L10 teks → L11 teks

**Teks L9 cue** : `'Clap twice = stop and freeze'`
**Teks L10** : `'AKSI: Clap twice untuk berhenti.'`
**Teks L11** : `'AKSI: Tepuk 1 kali — berdiri diam.'`

**Alasan** : L9 dan L10 membangun kondisi pada siswa kelas 1: tepuk dua kali = stop. L11 kemudian menggunakan tepuk satu kali untuk signal berbeda. Dua sinyal bertepuk (1x vs. 2x) dalam satu sesi adalah beban diskriminasi yang tinggi untuk siswa kelas 1.

**Rekomendasi** : Ganti signal di L11 dengan sinyal yang secara fisik berbeda dari clap:
`AKSI: Angkat tangan — tunggu sampai kelas diam minimal 3 detik.` (tanpa tepuk)

**Prioritas** : Sedang

---

### Temuan IG-08 — Redundansi

**Lokasi** : L4 — teks

**Teks** : `'Tunjuk papan — ucapkan dulu sendiri, siswa dengarkan. --- AKSI: Minta siswa mendengarkan terlebih dahulu tanpa mengikuti.'`

**Alasan** : "Ucapkan dulu sendiri, siswa dengarkan" dan "Minta siswa mendengarkan terlebih dahulu tanpa mengikuti" menyatakan instruksi yang sama dua kali.

**Rekomendasi** : Hapus `— ucapkan dulu sendiri, siswa dengarkan`. Pertahankan:
`AKSI: Tulis di papan: My name is ___. Tunjuk papan. --- AKSI: Minta siswa mendengarkan terlebih dahulu tanpa mengikuti.`

**Prioritas** : Minor

---

## BAGIAN 3 — DOMAIN UCAP

---

### UC-02 — TTS Friendly

**Lokasi** : L1, L2, L4, L5, L7, L12 — teks (sistematis)

**Temuan** : Pola `...` digunakan di enam titik UCAP:
- L1: `UCAP: "My name is..."`
- L2: `UCAP: "Your name is...!"`
- L4: `UCAP: "Now you! My name is..."`
- L5: `UCAP: "Write your name here. My name is..."`
- L7: `UCAP: "I am..."`
- L12: `UCAP: "Hello! My name is... Nice to meet you all!"`

L1, L2, L12 menggunakan `...` sebagai placeholder nama guru — TTS tidak dapat mengisi nama. L4, L5, L7 menggunakan `...` sebagai sentence starter (siswa melengkapi). Perilaku TTS terhadap `...` tidak dapat diprediksi dan menghasilkan audio yang tidak konsisten.

**Rekomendasi** :
- L1, L2, L12: ganti `...` dengan `[nama Anda]` sebagai placeholder eksplisit. Tambahkan catatan di cue L1.
- L4, L5, L7: ganti `...` dengan titik (`.`) — TTS menghasilkan sentence-ending intonation yang alami; cue menjelaskan bahwa guru berhenti dan menunggu siswa melengkapi.

**Prioritas** : Sedang

---

### UC-04 — Child Comprehension (1)

**Lokasi** : L3 — teks

**Temuan** : `UCAP: "Now I know your teacher's name."`

Guru mengucapkan kalimat ini kepada kelas. Guru adalah teacher itu sendiri — mereka sudah mengetahui nama mereka sendiri. Kalimat ini logis keliru dari sudut pandang pembicara.

**Rekomendasi** : Ganti menjadi: `UCAP: "Now you know my name!"`

**Prioritas** : Sedang

---

### UC-04 — Child Comprehension (2)

**Lokasi** : L11 — teks

**Temuan** : `UCAP: "Now practise with your partner. If you need help, look at the board. If you are ready, try without looking!"`

Siswa kelas 1 harus memproses dua kondisi bersyarat dan secara mandiri memutuskan kelompok dari satu kalimat yang didengar sekali.

**Rekomendasi** : Pisah menjadi dua instruksi dengan gesture:
- `AKSI: Tunjuk papan — ke siswa yang butuh bantuan. UCAP: "Look at the board. Say it together."`
- `AKSI: Palingkan dari papan — ke siswa yang siap. UCAP: "Ready? No looking. Try alone."`

**Prioritas** : Sedang

---

### UC-06 — Consistency (Bahasa Cue)

**Lokasi** : L2 cue, L13 cue

**Temuan** :
- L2 cue: `'Wait 2 seconds first setelah tanya...'` — membuka dengan English
- L13 cue: `'Keep each turn short — jaga tempo penutup.'` — membuka dengan English

Seluruh cue lain di TP ini menggunakan Bahasa Indonesia penuh.

**Rekomendasi** :
- L2 cue: `'Tunggu 2 detik setelah tanya "What is my name?" — beri siswa kesempatan recall sebelum modeling.'`
- L13 cue: `'Jaga tempo — setiap giliran singkat. Jika tidak ada volunteer, tunjuk 2 siswa serentak.'`

**Prioritas** : Minor

---

## BAGIAN 4 — QUALITY GATE

| Gate | Status |
|------|--------|
| A — Keterpakaian Guru | Belum — IG-03 Mayor di L9 |
| B — Keterpakaian Siswa | Belum — UC-04 L11 (self-assessment dua kondisi) |
| C — Keterpakaian UCAP | Belum — UC-04 L3 (kalimat logis keliru) |
| D — Keterpakaian TTS | Belum — UC-02 pola `...` sistematis |
| E — Keterpakaian Redaksi | Belum — IG-01 L11 (ambigu), IG-07 (konflik signal) |
| F — Beban Kognitif | Lulus |
| G — Konsistensi | Belum — IG-07, UC-06 bahasa cue |
| H — Tujuan Pedagogis | Lulus |

---

## BAGIAN 5 — RINGKASAN

**Jumlah Temuan Mayor** : 1
**Jumlah Temuan Sedang** : 5
**Jumlah Temuan Minor** : 2

| # | Kode | Lokasi | Isu | Prioritas |
|---|------|--------|-----|-----------|
| 1 | IG-03 | L9 cue → L10 | "Clap twice practice" hanya di cue — prasyarat L10 hilang dari teks | Mayor |
| 2 | UC-04 | L3 | `"Now I know your teacher's name"` — kalimat logis keliru | Sedang |
| 3 | IG-01 | L11 | `"berdiri diam"` ambigu setelah siswa baru duduk | Sedang |
| 4 | IG-07 | L9/L10 vs L11 | Clap twice vs tepuk 1 kali — dua sinyal bertepuk berbeda | Sedang |
| 5 | UC-04 | L11 | UCAP self-assessment dua kondisi terlalu kompleks untuk kelas 1 | Sedang |
| 6 | UC-02 | L1/L2/L4/L5/L7/L12 | Pola `...` di 6 UCAP — TTS behavior tidak dapat diprediksi | Sedang |
| 7 | IG-08 | L4 | Instruksi "siswa dengarkan" diulang dua kali | Minor |
| 8 | UC-06 | L2 cue, L13 cue | Bahasa cue tidak konsisten (campur EN-ID) | Minor |

---

## BAGIAN 6 — STATUS AKHIR

**BELUM LULUS**

Alasan: Temuan Mayor di L9 — langkah "praktik clap twice" hanya ada di cue, bukan di teks linear. Guru membaca teks → langsung aba-aba mulai → siswa tidak mengenal stop signal → walk and talk tidak dapat dihentikan dengan teratur.

---

## BAGIAN 7 — UJI 3 DETIK

**Guru** : Masih perlu berpikir — L9 teks tidak mencantumkan langkah praktik clap twice; L11 ambigu
**Siswa** : Masih perlu penjelasan — L11 UCAP dua kondisi; L3 UCAP logis keliru
**TTS** : Masih perlu penyesuaian — pola `...` di 6 UCAP

---

## BAGIAN 8 — PERTANYAAN TERAKHIR

**Tidak** — L9: guru melewati praktik stop signal → L10 tidak bisa dihentikan teratur. L11: dua signal bertepuk membingungkan siswa.

Audit belum selesai.
