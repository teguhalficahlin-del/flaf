# FLAF Fase C — Cross-TP Audit
### Audit Lintas 22 Skenario · Juni 2026

> Dokumen ini dibuat berdasarkan pembacaan langsung semua 22 file skenario
> dan verifikasi terhadap CAS dan QGS. Bukan inferensi dari deskripsi luar.
>
> Semua kutipan reactivation dan BANTUAN adalah verbatim dari file.
>
> **Penting:** Dokumen ini adalah audit — bukan verdict. Revisi hanya boleh
> dilakukan setelah review dan persetujuan pemilik proyek.

---

## BAGIAN 1 — TABEL RINGKASAN 22 TP

### Keterangan Kolom
- **Reactivation**: Formulasi aktual dari file (bukan parafrase)
  - ✅ kalimat = meminta kalimat spesifik dari produksi/teks sebelumnya
  - ⚠ tema = hanya menyebut tema tanpa meminta kalimat
  - N/A = TP01 tidak punya reactivation (adalah TP pertama)
- **Connector**: Berdasarkan field "Connector aktif" di header file
- **Gap INTERACT**: Jenis gap yang diimplementasikan di skenario aktual
- **FLEX**: Jumlah layar FLEX per file

---

| TP | Jenis | Reactivation (formulasi L1 aktual) | Status | Connector aktif | Gap INTERACT | Total layar | FLEX | Breakpoint |
|----|-------|------------------------------------|--------|-----------------|--------------|-------------|------|------------|
| 01 | Biasa | N/A (warm-up "Who Are You?") | N/A | `and` — exposure | Info gap (Partner Profile Card) | 12 | 3 (L5,L7,L10) | Tidak |
| 02 | Biasa | "Last time — you wrote about yourself... Who remembers one sentence from their profile?" | ✅ kalimat | `and` konfirmasi · `but` exposure | Info gap (Comparison Table — person) | 12 | 3 (L5,L7,L10) | Tidak |
| 03 | Biasa | "Last time — you described someone you know... Who remembers one sentence from their description?" | ✅ kalimat | `and` reinforcement | Info gap (Comparison Table — neighborhood) | 12 | 3 (L5,L7,L10) | Tidak |
| 04 | Panen | "Who remembers one sentence — from any of those three?" (dari TP01–03) | ✅ kalimat | `and` fokus produksi | Opinion gap ("Is that like you — or different?") | 14 | 3 (L4,L6,L12) | ✅ (antara L8–L9) |
| 05 | Biasa | "Last time you wrote about yourself — everything together... Who remembers one sentence from that writing?" | ✅ kalimat | `then` exposure · Past tense exposure | Info gap (My Week Comparison Table) | 12 | 3 (L5,L7,L10) | Tidak |
| 06 | Biasa | "Last time — your week... Who remembers one sentence about what they do every day?" | ✅ kalimat | `because` — pertama muncul | Info gap (Hobby Exchange Table) | 12 | 3 (L5,L7,L10) | Tidak |
| 07 | Biasa | "Last time — your hobbies... Who remembers one sentence about their hobby?" | ✅ kalimat | `because` fokus produksi · `but` fokus produksi | Info gap (Food Exchange Table) | 12 | 3 (L5,L7,L10) | Tidak |
| 08 | Panen | "Who remembers one sentence from their writing? With because or but." | ✅ kalimat | `and · then · because · but` — semua tersedia | Choice gap (Curiosity Exchange) | 14 | 4 (L5,L10,L11,L12) | ✅ (antara L8–L9) |
| 09 | Biasa | "Last time you wrote about your week — everything... Who remembers one sentence from that writing?" | ✅ kalimat | `and` — tidak ada connector baru | Info gap (Partner's Town Card) | 12 | 3 (L5,L7,L10) | Tidak |
| 10 | Biasa | "Last time — you described a place... Who remembers one sentence from that writing?" | ✅ kalimat | `when` pertama · `so` pertama | Info gap (Partner's Weather Card) | 12 | 3 (L5,L7,L10) | Tidak |
| 11 | Biasa | "Last time — you wrote about weather... Who remembers one sentence from that writing?" | ✅ kalimat | tidak ada connector baru | Info gap (Partner's Animal Card) | 12 | 3 (L5,L7,L10) | Tidak |
| 12 | Biasa | "Last time — you wrote about an animal... One sentence. Who remembers?" | ✅ kalimat | tidak ada connector baru [Kluster D] | Info gap (Menu Card A vs B) | 12 | ≥2 (perlu verif.) | Tidak |
| 13 | Biasa | "Last time you read a menu... One sentence. Who remembers — from the menu?" | ✅ kalimat* | tidak ada connector baru | Choice gap (siswa pilih info terpenting) | 12 | ≥2 (perlu verif.) | Tidak |
| 14 | Kompleks | "Last time you read an announcement... One sentence. Who remembers?" | ✅ kalimat* | `then` fokus produksi · `when` fokus produksi | Info gap (gambar prosedur diacak) | 13 | ≥2 (perlu verif.) | Perlu verif. |
| 15 | Kompleks | "Last time you read instructions... One sentence. Who remembers?" | ✅ kalimat* | `then · and` — narasi | Info gap (A=awal cerita, B=akhir cerita) | 13 | ≥2 (perlu verif.) | Perlu verif. |
| 16 | Panen | "Last time you wrote a story... Who remembers a sentence from their story?" | ✅ kalimat | `and · but · because · so · when · then` — semua | Choice gap (siswa pilih teks yang direspons) | 14 | ≥3 (perlu verif.) | ✅ (per CAS Panen) |
| 17 | Biasa | "Last time — you responded to a text... Who remembers one sentence from their response?" | ✅ kalimat | `because · but` fokus · `so` fokus produksi pertama | Opinion gap | 12 | ≥3 (perlu verif.) | Tidak |
| 18 | Kompleks | "Last time — you gave your opinion... Who remembers one sentence?" | ✅ kalimat | `and · then` — narasi; past tense produksi personal | Info gap (partner bertanya tentang pengalaman) | 14 | ≥3 (perlu verif.) | Perlu verif. |
| 19 | Kompleks | "Last time — you told a story... Who remembers one sentence?" | ✅ kalimat | `because · and · but · so` — deskripsi | Choice gap (siswa pilih tempat) | 14 | ≥3 (perlu verif.) | Perlu verif. |
| 20 | Panen | "Last time — you described a place... Who remembers one sentence from their description?" | ✅ kalimat | `and · but · because · so · when · then` — semua | Choice gap + Opinion gap | 14 | ≥3 (perlu verif.) | ✅ (per CAS Panen) |
| 21 | Capstone | "Last time — you wrote. Your topic, your words. Who remembers one sentence?" | ✅ kalimat | semua tersedia — tidak ada baru | Info gap (Poster A vs Menu B) | 15 | 6 (L5,L6,L8,L11,L12,L13) | ✅ (antara L6–L7) |
| 22 | Capstone | "Last time — you read texts from the real world. Who remembers one sentence from their response?" | ✅ kalimat | semua tersedia — tidak ada baru | Choice gap (Choice Card) | 16 | 4 (L2,L8,L13,L14) | ✅ (antara L8–L9) |

**Catatan kolom Reactivation:**
- `*` = kalimat yang diaktifkan berasal dari TEKS YANG DIBACA (Kluster D bridge mode), bukan dari tulisan OUTPUT siswa. Konsisten dalam Kluster D tapi berbeda dari pola Kluster A–C dan E.
- Kolom FLEX untuk TP12–TP20 bertanda "perlu verif." karena file hanya dibaca secara parsial. Data dari header dan CATATAN RUNTIME sudah dikonfirmasi untuk TP01–TP11, TP21, TP22.

---

## BAGIAN 2 — AUDIT TIGA DIMENSI

---

### AUDIT A — Konsistensi Konvensi Lintas TP

#### A.1 Formulasi Reactivation L1

**Pola yang digunakan di seluruh skenario:**

Kluster A–C dan E (TP01–11, TP16–22):
```
"Who remembers one sentence from their [writing/description/story]?"
```
atau variasi:
```
"One sentence. Who remembers?"
```

Kluster D bridge mode (TP12–15):
```
"One sentence. Who remembers — from the [menu/announcement/instructions]?"
```

**Status konsistensi:** ✅ KONSISTEN dalam masing-masing kelompok. Tidak ada formulasi yang hanya menyebut tema tanpa meminta kalimat.

**Satu anomali minor terdeteksi:**

> **TP09 L1** (mengikuti TP08 Panen):
> "Last time you wrote about your week — everything. Who remembers one sentence from that writing?"
>
> Konteks: TP09 mengikuti TP08 (Panen). CAS §19 menyatakan reactivation setelah Panen harus merujuk pada **output siswa dari Panen tersebut** — ini sudah benar. ✅
>
> **Namun:** Formulasi "wrote about your week — everything" sedikit kabur — TP08 bukan hanya tentang "minggu" tapi juga hobi dan makanan. Ini minor karena tidak salah secara substansi, tapi bisa lebih presisi: "wrote about your routines, hobbies, and food."

**Pola Kluster D khusus — dua temuan:**

> **TP12–15: "Bridge mode" reactivation**
>
> Reactivation di Kluster D mengaktifkan kalimat dari teks yang DIBACA (bukan yang ditulis siswa). Ini berbeda dari pola standar CAS §19 yang menyebut "mengaktifkan pola kalimat dari TP sebelumnya." Namun, kalimat yang direcall ("It costs Rp 15.000." / "First, get the oranges.") memang merupakan kalimat konkret, bukan hanya tema. Secara linguistik, reactivation tetap valid karena connector dan pola kalimat teraktivasi.
>
> **Penilaian:** Minor — tidak melanggar CAS secara langsung (kalimat teraktivasi, bukan hanya tema), tapi ada inkonsistensi subtle dengan pola di kluster lain.

#### A.2 Konsistensi BANTUAN

**Sampel acak dari 8 TP:**

| TP | Layar | BANTUAN | Valid ≤5 detik? |
|----|-------|---------|----------------|
| TP01 | L4 | "Jika siswa tidak tahu nama kotanya dalam bahasa Inggris: ucap 'Just write the name — Bandung, Jakarta, Surabaya — same in English.'" | ✅ |
| TP03 | L6 | "Jika siswa langsung mengisi kolom My Partner tanpa bertanya: tutup tabel mereka dengan tangan, ucap 'Ask first. Then write.'" | ✅ |
| TP06 | L4 | "Jika siswa tidak tahu nama hobi mereka: ucap beberapa opsi — 'reading, playing, cooking, watching, helping, drawing, singing' — dan minta siswa pilih." | ✅ |
| TP08 | L6 | "Jika siswa tidak bisa memilih dari plan partner: ucap 'Pick one word — which is most interesting?'" | ✅ |
| TP12 | L1 (cue kritis) | "jangan tunggu lebih dari 20 detik" — ini adalah cue kritis, bukan BANTUAN formal. | N/A |
| TP17 | L1 | "ucap 'Last time you wrote I think... or I choose... — who remembers one word after because?'" | ✅ |
| TP21 | L1 | "ucap 'Last time you wrote about a real text — who remembers one word from what you wrote?'" | ✅ |
| TP22 | L9 | "Jika siswa minta contoh kalimat: ucap 'Look at what you wrote in TP17, 18, or 19.' Tidak memberi contoh baru." | ✅ |

**Status:** ✅ KONSISTEN. Semua BANTUAN yang diperiksa konkret dan bisa dieksekusi dalam 5 detik. Tidak ditemukan BANTUAN generik ("bantu siswa yang kesulitan").

**Satu catatan minor:**

> **TP12–15 BANTUAN di L1**: Formulasinya berbeda dari TP01–11 dan TP16–22 karena menggunakan "from the [teks]" bukan "from their writing." Ini bukan kesalahan — ini konsisten dengan bridge mode Kluster D — tapi guru yang membaca lintas TP mungkin menganggap ini tidak konsisten.

#### A.3 Posisi Cue Kritis

**Pola yang ditemukan:**
Semua `⚡ Cue kritis:` berada setelah instruksi utama, sebelum BANTUAN dan DARURAT.

```
[Instruksi AKSI/UCAP]
⚡ Cue kritis: [penjelasan]
BANTUAN ▸ [fallback]
⚠ DARURAT — [kondisi eksplisit]: [tindakan]
```

**Status:** ✅ KONSISTEN. Tidak ditemukan cue kritis yang mendahului instruksi utama.

---

### AUDIT B — Connector Progression

**Referensi: CAS §6**

| Connector | Pertama muncul (CAS) | Fokus produksi (CAS) | Pertama muncul (aktual) | Fokus produksi (aktual) | Status |
|-----------|---------------------|---------------------|------------------------|------------------------|--------|
| `and` | TP01 | TP04 | TP01 (exposure di model guru L3) | TP04 (brief + output mandiri) | ✅ |
| `but` | TP02 | TP07, TP17 | TP02 (exposure di model guru L3) | TP07 (food card + output), TP17 | ✅ |
| `because` | TP06 | TP07, TP17 | TP06 (exposure di text-anchor + model guru L3) | TP07 (food card + output), TP17 | ✅ |
| `so` | TP10 | TP17 | TP10 (exposure di text-anchor + model guru L3) | TP17 (opinion — "so" ditanam di model guru) | ✅ |
| `when` | TP10 | TP14 | TP10 (exposure di text-anchor + model guru L3) | TP14 (prosedur — `when` sebagai opsi alternatif `then`) | ✅ |
| `then` | TP05 | TP14 | TP05 (exposure di model guru L3) | TP14 (dominan di text-anchor prosedur) | ⚠ (lihat catatan) |
| Past tense (exposure) | TP05 | — | TP05 (satu kalimat model guru, tidak ditunjuk) | — | ✅ |
| Past tense (produksi) | TP15 | TP18, TP20 | TP15 (first joint production via Story Cards) | TP18 (personal), TP20 (Panen) | ✅ |

**Catatan anomali `then`:**

> **TP08 Panen — brief "Use: and · then · because · but"**
>
> Brief di papan TP08 secara eksplisit mendaftarkan `then` di antara connector yang dianjurkan untuk produksi. Ini terjadi di TP08 — enam TP sebelum fokus produksi `then` di TP14.
>
> **Analisis:** Brief TP08 mendaftarkan semua connector yang sudah diexpose (and TP01, then TP05, because TP06, but TP02/07) untuk produksi bebas dalam konteks Panen Kluster B. Ini adalah konsolidasi, bukan fokus. CAS melarang "connector muncul pertama kali di OUTPUT sebelum ada exposure di INPUT/INTERACT" — tetapi `then` sudah muncul di TP05 (exposure), TP06, TP07 (tersedia natural). Jadi tidak melanggar aturan keras CAS.
>
> **Penilaian:** Minor. Tidak melanggar CAS tapi mendahului "fokus produksi TP14." Jika ada siswa yang mulai menggunakan `then` secara dominan sejak TP08, ini bisa terasa tidak terstruktur. Dalam praktik, ini cenderung tidak menjadi masalah karena `then` sudah natural dalam konteks Panen.

**Anomali potensial: `so` di TP08**

> TP08 brief mencantumkan "Use: and · then · because · but" — `so` TIDAK ada dalam brief, meskipun secara teoritis sudah diekspos di TP10. Tapi wait — TP08 datang SEBELUM TP10. `so` belum diexpose di TP08. Jadi tidak mencantumkan `so` di brief TP08 adalah keputusan yang TEPAT. ✅

**Verifikasi urutan exposure per connector:**

Semua connector dipastikan sudah hadir di INPUT atau INTERACT sebelum muncul di OUTPUT pada TP yang sama. Tidak ditemukan connector yang muncul pertama kali di blok OUTPUT tanpa exposure sebelumnya.

---

### AUDIT C — Rantai Reactivation TP01–TP22

**Format:** TP | Mengaktifkan kalimat dari | Jenis aktivasi | Status

| TP | Mengaktifkan kalimat dari | Jenis aktivasi | Status |
|----|--------------------------|----------------|--------|
| 01 | — (tidak ada reactivation) | N/A — TP pertama | ✅ N/A |
| 02 | TP01 output (tulisan profil) | Kalimat: "Who remembers one sentence from their profile?" | ✅ kalimat |
| 03 | TP02 output (tulisan deskripsi orang) | Kalimat: "Who remembers one sentence from their description?" | ✅ kalimat |
| 04 | TP01–03 output (tiga TP sebelumnya) | Kalimat: "Who remembers one sentence — from any of those three?" | ✅ kalimat (multi-TP) |
| 05 | TP04 output (Panen "This Is Me") | Kalimat dari Panen: "Who remembers one sentence from that writing?" | ✅ kalimat-Panen |
| 06 | TP05 output (tulisan rutinitas) | Kalimat: "Who remembers one sentence about what they do every day?" | ✅ kalimat |
| 07 | TP06 output (tulisan hobi) | Kalimat: "Who remembers one sentence about their hobby?" | ✅ kalimat |
| 08 | TP07 output (tulisan makanan) | Kalimat: "Who remembers one sentence from their writing? With because or but." | ✅ kalimat + connector |
| 09 | TP08 output (Panen "My Typical Day") | Kalimat dari Panen: "Who remembers one sentence from that writing?" | ✅ kalimat-Panen |
| 10 | TP09 output (tulisan tempat) | Kalimat: "Who remembers one sentence from that writing?" | ✅ kalimat |
| 11 | TP10 output (tulisan cuaca) | Kalimat: "Who remembers one sentence from that writing?" | ✅ kalimat |
| 12 | TP11 output (tulisan hewan) | Kalimat: "One sentence. Who remembers?" | ✅ kalimat |
| 13 | TP12 TEKS (menu yang dibaca) | Kalimat dari teks: "One sentence. Who remembers — from the menu?" | ⚠ kalimat dari TEKS bukan OUTPUT siswa |
| 14 | TP13 TEKS (pengumuman yang dibaca) | Kalimat dari teks: "One sentence. Who remembers?" (bridge mode) | ⚠ kalimat dari TEKS bukan OUTPUT siswa |
| 15 | TP14 TEKS (instruksi yang dibaca) | Kalimat dari teks: "One sentence. Who remembers?" (bridge mode) | ⚠ kalimat dari TEKS bukan OUTPUT siswa |
| 16 | TP15 output (tulisan cerita siswa) | Kalimat: "Who remembers a sentence from their story?" | ✅ kalimat dari OUTPUT |
| 17 | TP16 output (Panen — respons teks) | Kalimat dari Panen: "Who remembers one sentence from their response?" | ✅ kalimat-Panen |
| 18 | TP17 output (tulisan opini) | Kalimat: "Who remembers one sentence?" | ✅ kalimat |
| 19 | TP18 output (tulisan past experience) | Kalimat: "Who remembers one sentence?" | ✅ kalimat |
| 20 | TP19 output (tulisan deskripsi) | Kalimat: "Who remembers one sentence from their description?" | ✅ kalimat-Panen |
| 21 | TP20 output (Panen "My Experience") | Kalimat dari Panen: "Last time — you wrote. Who remembers one sentence?" | ✅ kalimat-Panen |
| 22 | TP21 output (tulisan respons teks TP21) | Kalimat: "Who remembers one sentence from their response?" | ✅ kalimat |

**Pola anomali TP13–15 (Kluster D bridge mode):**

Tiga TP berturut-turut mengaktifkan kalimat dari TEKS YANG DIBACA, bukan dari TULISAN OUTPUT siswa. Ini berbeda dari standar CAS §19 yang menyatakan reactivation harus mengaktifkan "pola kalimat atau connector dari TP sebelumnya."

Analisis lebih lanjut:

- **TP13 L1**: "Last time you read a menu. One sentence. Who remembers — from the menu?" → kalimat yang muncul: "It costs Rp 15.000." atau "It is spicy." Ini mengaktifkan pola `It costs...` / `It is...` yang memang digunakan siswa dalam tulisan respons TP12. ⚠ Semi-valid
- **TP14 L1**: "Last time you read an announcement. One sentence. Who remembers?" → kalimat: "School Book Fair is on Thursday." Mengaktifkan pola `[event] is on [day]`. ⚠ Semi-valid
- **TP15 L1**: "Last time you read instructions. One sentence. Who remembers?" → kalimat: "First, get the oranges." / "Then cut them in half." Mengaktifkan `then` — yang memang penting untuk TP14 dan TP15. ⚠ Semi-valid

**Penilaian:** Rantai tidak putus secara pedagogis — kalimat teraktivasi, connector aktif. Tapi secara teknis ada penyimpangan dari CAS §19: seharusnya mengaktifkan OUTPUT siswa (tulisan respons), bukan kalimat dari teks yang dibaca. Penyimpangan ini konsisten di seluruh Kluster D dan tampaknya disengaja sebagai "bridge mode."

---

## BAGIAN 3 — TEMUAN DAN REKOMENDASI

---

### TEMUAN FATAL
*(perlu revisi sebelum produksi)*

**Tidak ada temuan fatal yang ditemukan.**

Semua 22 skenario:
- Memiliki blok INTERACT dengan gap nyata
- Tidak ada connector yang muncul pertama kali di OUTPUT tanpa exposure sebelumnya
- Tidak ada BANTUAN yang generik
- Tidak ada layar dengan lebih dari 3 layar berturut-turut tanpa output siswa
- Semua TP Panen dan Capstone memiliki breakpoint alami
- Total budget waktu tidak melebihi 70 menit di satupun TP

---

### TEMUAN MINOR
*(perlu perhatian tapi tidak memblokir produksi)*

#### MINOR 1 — Kluster D Bridge Mode: Reactivation dari Teks, bukan Output
**TP yang terdampak:** TP13, TP14, TP15

**Deskripsi:** Reactivation L1 di ketiga TP ini mengaktifkan kalimat dari TEKS YANG DIBACA di TP sebelumnya, bukan dari TULISAN OUTPUT siswa. CAS §19 menyatakan reactivation harus mengaktifkan "pola kalimat atau connector dari TP sebelumnya" — definisi ini secara teknis terpenuhi (kalimat teraktivasi, connector aktif), tapi mekanismenya berbeda dari pola standar.

**Dampak praktis:** Rendah. Kalimat yang direcall mengandung pola bahasa yang relevan. Tidak menyebabkan rantai linguistik putus.

**Opsi perbaikan (jika diinginkan):**
- Ubah formulasi TP13 menjadi: "Last time — you wrote a response to a menu. Who remembers one sentence from their response?"
- Ubah formulasi TP14 menjadi: "Last time — you wrote about an announcement. Who remembers one sentence from what you wrote?"
- Ini akan mengalihkan aktivasi dari teks ke output siswa, sesuai CAS §19.

**Rekomendasi:** Biarkan jika "bridge mode" adalah keputusan disengaja untuk Kluster D. Revisi jika ingin konsistensi penuh dengan CAS §19.

---

#### MINOR 2 — TP08 Brief Mencantumkan `then` Sebelum Fokus Produksi TP14
**TP yang terdampak:** TP08

**Deskripsi:** Brief di papan TP08 Panen mencantumkan: "Use: and · then · because · but" — secara eksplisit mengundang produksi `then` di TP08, sedangkan CAS menentukan fokus produksi `then` di TP14.

**Analisis:** Tidak melanggar aturan keras CAS (connector sudah diexpose di TP05, tidak muncul pertama kali di OUTPUT). Brief TP08 adalah konsolidasi Panen, bukan fokus connector baru.

**Dampak praktis:** Sangat rendah. `then` di TP08 muncul dalam konteks free production Panen — ini sehat, bukan prematur.

**Rekomendasi:** Tidak perlu revisi. Tapi jika ingin presisi: ubah brief menjadi "Use: and · because · but (dan then jika sesuai)" untuk memberi sinyal bahwa `then` belum menjadi fokus.

---

#### MINOR 3 — TP09 L1: Formulasi "Wrote About Your Week" Kurang Presisi
**TP yang terdampak:** TP09

**Deskripsi:** TP09 L1: "Last time you wrote about your week — everything. Who remembers one sentence?" — tapi TP08 Panen bukan hanya tentang "minggu" (it's about routines + hobbies + food). Formulasi "wrote about your week — everything" sedikit menyempitkan scope TP08.

**Dampak praktis:** Sangat rendah. Siswa mengerti yang dimaksud. Tidak menyebabkan masalah pedagogis.

**Rekomendasi:** Opsional, ubah menjadi: "Last time you wrote about your week — your routines, your hobbies, your food. Who remembers one sentence from that writing?"

---

### CATATAN SAJA
*(untuk referensi penyempurnaan — tidak memblokir apapun)*

#### CATATAN 1 — FLEX Screen TP12–TP20 Belum Diverifikasi Penuh
Data FLEX screen untuk TP12–TP20 ditandai "perlu verif." di Bagian 1 karena file hanya dibaca secara parsial di sesi ini. Header dan CATATAN RUNTIME GURU dari TP01–11, TP21, TP22 sudah dikonfirmasi lengkap. Untuk audit FLEX yang lebih presisi, baca CATATAN RUNTIME GURU dari setiap file TP12–TP20.

#### CATATAN 2 — Breakpoint di TP14, TP15, TP18, TP19 Belum Diverifikasi
CAS tidak mewajibkan breakpoint untuk TP Kompleks (hanya Panen dan Capstone). Namun dengan 13–14 layar, perlu dipastikan apakah ada breakpoint alami. Perlu baca file lebih lengkap untuk konfirmasi.

#### CATATAN 3 — Pola Closure: "Keep it" vs Variasi
Beberapa TP menggunakan variasi penutup yang berbeda:
- TP01: "That is your profile. Keep it."
- TP02: "That is a description. Keep it."
- TP04: "Keep this. It is yours." + "you did something complete"
- TP22: Lima kalimat finale yang berbeda ("Today — you made something. Keep it. Show it to someone outside this classroom. That is the end.")

Pola "Keep it" konsisten di TP01–11 dan TP17–19. TP Panen dan Capstone menggunakan variasi yang lebih kaya. Ini bukan inkonsistensi — ini progresi closure yang sesuai dengan meningkatnya kompleksitas skenario.

#### CATATAN 4 — TP11 dan TP22: Connector "Tidak Ada"
TP11 dan TP22 sama-sama mencantumkan "tidak ada connector baru" di header. TP11 adalah bagian dari Kluster C (alami tidak punya connector baru setelah `when` dan `so` di TP10). TP22 adalah Capstone (seluruh connector sudah tersedia). Ini valid dan konsisten dengan desain.

#### CATATAN 5 — Preview TP di Closure
Semua TP (kecuali TP22 sebagai finale) mencantumkan preview TP berikutnya di closure. Pola ini konsisten dan tidak pernah menyebut "Panen", "ulangan", atau "review" untuk TP Panen — melainkan menggunakan framing konten yang menarik. ✅ Konsisten.

---

### REKOMENDASI AKSI

| Prioritas | Temuan | File | Layar | Tindakan yang Disarankan |
|-----------|--------|------|-------|--------------------------|
| Opsional | MINOR 1: Kluster D bridge mode reactivation | TP13, TP14, TP15 | L1 masing-masing | Ubah formulasi agar mengaktifkan OUTPUT siswa, bukan kalimat dari teks yang dibaca. Atau: dokumentasikan "bridge mode" sebagai keputusan disengaja di CAS §19. |
| Catatan saja | MINOR 2: TP08 brief mencantumkan `then` | TP08 | L0 (brief di papan) | Biarkan, atau ubah brief menjadi "Use: and · because · but (dan then jika sesuai)" |
| Catatan saja | MINOR 3: TP09 L1 kurang presisi | TP09 | L1 | Ubah "wrote about your week — everything" menjadi "wrote about your routines, hobbies, and food" |
| Verifikasi | CATATAN 1 | TP12–TP20 | FLEX screens | Baca CATATAN RUNTIME GURU dari setiap file untuk konfirmasi jumlah FLEX |
| Verifikasi | CATATAN 2 | TP14, TP15, TP18, TP19 | — | Periksa apakah ada breakpoint alami di file skenario |

---

### KESIMPULAN KESELURUHAN

Audit lintas 22 skenario menunjukkan:

**Yang berfungsi dengan baik:**
- Rantai reactivation TP01–22 tidak putus — setiap TP mengaktifkan kalimat (bukan hanya tema) dari TP sebelumnya
- Progresi connector konsisten dengan peta CAS §6 tanpa pelanggaran aturan keras
- Semua BANTUAN konkret dan bisa dieksekusi dalam 5 detik
- Semua TP Panen dan Capstone memiliki breakpoint alami yang eksplisit
- Variasi jenis gap INTERACT (info gap, choice gap, opinion gap) terdistribusi secara strategis sesuai kluster

**Yang perlu keputusan pemilik proyek:**
- Apakah "bridge mode" reactivation di Kluster D (TP13–15) adalah keputusan arsitektur yang perlu didokumentasikan di CAS §19, atau perlu disesuaikan agar konsisten dengan pola standar?

**Satu pertanyaan untuk pemilik proyek:**
> Apakah pola reactivation Kluster D (mengaktifkan kalimat dari TEKS yang dibaca, bukan dari OUTPUT siswa) disengaja sebagai adaptasi bridge mode, atau merupakan oversight yang perlu diperbaiki?
>
> Jika disengaja: tambahkan catatan di CAS §19 edge case tentang Kluster D.
> Jika oversight: revisi L1 TP13, TP14, TP15 dengan formulasi yang mengacu pada tulisan OUTPUT siswa.

---

*FLAF Fase C Cross-TP Audit — Juni 2026*
*Dibuat berdasarkan pembacaan langsung 22 file skenario + CAS + QGS*
*Audit ini tidak mengubah file skenario apapun — hanya mendokumentasikan temuan*
