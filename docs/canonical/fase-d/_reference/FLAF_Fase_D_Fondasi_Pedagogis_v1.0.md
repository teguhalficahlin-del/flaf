# FLAF Fase D v1.0 — Dokumen Fondasi Pedagogis

---

## Metadata

| Field             | Nilai                                      |
|-------------------|--------------------------------------------|
| Versi             | v1.0                                       |
| Status            | Final — Baseline Resmi                     |
| Tanggal Rilis     | 13 Juni 2026                               |
| Status Perubahan  | Baseline — tidak ada perubahan sejak rilis |
| Disusun oleh      | Romo (pemilik proyek), Claude Chat, ChatGPT |

---

## Catatan Versioning

| Versi | Tipe Perubahan |
|-------|----------------|
| v1.0  | Baseline resmi |
| v1.1  | Editorial / non-breaking |
| v1.2  | Clarification |
| v2.0  | Breaking pedagogical changes |

Jika terjadi konflik antara dokumen ini dengan TP, generator, schema, atau implementasi runtime, dokumen ini menjadi acuan utama sampai dilakukan revisi versi resmi.

---

## Daftar Isi

1. Filosofi
2. Prinsip Bahasa
3. Anchor Pedagogis
4. Prinsip Inti
5. Rumus Sesi
6. Runtime Step Types
7. Input
8. Diferensiasi
9. TTS
10. Framework Internal
11. Konsistensi Sistem
12. Konsekuensi Desain
13. Negative Specification

---

## 1. Filosofi

### Tagline

**English is never explained. English is experienced.**

Bahasa Inggris dipelajari melalui pengalaman menggunakan bahasa, bukan melalui penjelasan tentang bahasa.

---

## 2. Prinsip Bahasa

### English Only by Design

Bahasa Inggris menjadi bahasa utama seluruh pengalaman belajar.

Hal ini dicapai melalui desain pembelajaran, bukan melalui larangan penggunaan bahasa lain.

### Meaning before Translation

Makna dibangun melalui:

- visual
- gesture
- demonstrasi
- konteks
- audio
- TTS
- modeling guru

bukan melalui penerjemahan.

---

## 3. Anchor Pedagogis

Setiap aktivitas mengikuti pola sederhana:

```
Listen → Say → Change → Use
```

Anchor ini menjadi pola dasar seluruh aktivitas lintas elemen dan lintas kelas (Kelas 7–9).

---

## 4. Prinsip Inti

**One Pattern, Many Contexts, Constant Interaction.**

Dalam satu sesi:

- fokus pada satu target pola bahasa,
- digunakan berulang,
- diterapkan pada berbagai konteks,
- selalu mendorong interaksi nyata antarsiswa.

---

## 5. Rumus Sesi

```
Input
  ↓
Imitate
  ↓
Modify
  ↓
Interact
  ↓
Reflect
```

Rumus ini menjadi struktur konseptual setiap Teaching Package. Di runtime, rumus ini dipetakan ke Runtime Step Types berikut (lihat Bagian 6):

| Rumus Sesi | Runtime Step Types |
|---|---|
| Input | MODEL |
| Imitate | REPEAT |
| Modify | CHANGE |
| Interact | INTERACT · SHARE |
| Reflect | CHECK · BOOST |

---

## 6. Runtime Step Types

Runtime hanya mengenal tujuh tipe langkah. Urutan dapat bervariasi per TP, tetapi setiap tipe memiliki fungsi yang tetap.

### MODEL

Guru memperlihatkan.

Bentuk dapat berupa:

- gesture
- gambar
- audio
- dialog
- demonstrasi fisik
- video pendek

MODEL bukan penjelasan verbal. MODEL adalah demonstrasi penggunaan bahasa dalam konteks.

---

### REPEAT

Siswa meniru secara bersama atau individu.

Fokus:

- pronunciation
- rhythm
- confidence
- automatisasi pola

---

### CHANGE

Siswa mengubah sebagian pola.

Contoh variasi:

- satu kata
- satu frasa
- satu informasi
- satu konteks

Pola dasar tidak berubah.

---

### INTERACT

Siswa menggunakan pola bersama teman.

Mode dapat berupa:

- pair
- group
- individual
- walk-around

Engine tetap sama untuk semua mode.

---

### SHARE

Siswa menunjukkan hasil kepada kelas.

Output dapat berupa:

- jawaban lisan
- dialog
- presentasi singkat
- tulisan pendek

---

### CHECK

Guru melakukan observasi cepat.

Tujuan:

- mengetahui ketercapaian
- menemukan hambatan
- menentukan langkah berikutnya

CHECK bukan asesmen administratif. CHECK tidak menghasilkan skor atau catatan nilai.

---

### BOOST

Guru membantu siswa maju satu langkah.

BOOST dapat berupa:

- recast
- praise
- quick correction
- extension
- challenge
- encouragement

Fokus pada kemajuan, bukan kesalahan. BOOST tidak menghakimi — BOOST mengarahkan. Correction dilakukan melalui modeling atau recast, bukan evaluasi identitas siswa.

---

## 7. Input

Input bersifat multimodal.

Prioritas:

1. visual
2. gesture
3. demonstrasi
4. audio (termasuk TTS)
5. konteks

Penjelasan verbal diminimalkan. Jika desain input berhasil, siswa memahami apa yang harus dilakukan tanpa terjemahan.

---

## 8. Diferensiasi

Materi sama. Pattern sama. Yang berubah hanya target output.

| Level    | Target Output |
|----------|---------------|
| Easy     | Melengkapi atau memilih |
| Standard | Menghasilkan kalimat sendiri |
| Challenge | Mengembangkan dengan alasan, detail, atau elaborasi |

Engine pembelajaran tetap sama untuk seluruh kelas. Guru tidak perlu menyiapkan tiga materi berbeda.

---

## 9. TTS

MODEL dan REPEAT menggunakan TTS secara konsisten.

TTS menjadi referensi pelafalan utama sehingga guru tidak dibebani menjadi model native-like pronunciation.

TTS bukan satu-satunya sumber input. Jika audio gagal, guru tetap dapat menjalankan sesi penuh menggunakan gesture, gambar, dan demonstrasi.

---

## 10. Framework Internal

SPEAK digunakan sebagai alat desain internal:

```
Start → Pattern → Explore → Apply → Keep & Share
```

Framework ini tidak ditampilkan pada runtime guru. Guru hanya melihat urutan langkah operasional. Guru tidak perlu mengetahui nama framework untuk menjalankan sesi.

---

## 11. Konsistensi Sistem

Seluruh Teaching Package wajib memenuhi prinsip berikut:

- satu pattern utama per sesi
- interaksi lebih banyak daripada penjelasan
- multimodal daripada verbal
- penggunaan bahasa lebih banyak daripada analisis bahasa
- BOOST lebih dominan daripada koreksi
- produksi bahasa siswa lebih dominan daripada produksi bahasa guru

---

## 12. Konsekuensi Desain

Jika muncul pilihan antara:

- menambah penjelasan, **atau**
- menambah pengalaman menggunakan bahasa,

maka FLAF selalu memilih **pengalaman menggunakan bahasa**.

Prinsip ini berlaku untuk setiap keputusan authoring, schema, generator, dan runtime.

---

## 13. Negative Specification

Setiap item pada bagian ini merupakan **hard constraint**. Satu pelanggaran saja sudah cukup menjadi alasan TP atau output generator dinyatakan tidak lolos review sampai diperbaiki.

❌ Siswa dapat menyelesaikan seluruh alur tanpa harus menerjemahkan ke Bahasa Indonesia.

❌ Setiap sesi hanya memiliki satu target pattern produktif yang menjadi fokus MODEL, REPEAT, CHANGE, INTERACT, dan SHARE.

❌ MODEL berpusat pada demonstrasi penggunaan bahasa, bukan penjelasan aturan bahasa.

❌ Runtime tidak menyampaikan grammar sebagai materi utama; pola bahasa diperoleh melalui MODEL dan penggunaan.

❌ CHECK tidak menghasilkan skor, nilai, ranking, atau pencatatan administratif; CHECK hanya memberi informasi bagi guru untuk menentukan langkah berikutnya.

❌ BOOST tidak menggunakan label identitas atau penilaian personal; BOOST selalu mengarahkan tindakan berikutnya.

❌ Setiap sesi wajib memiliki minimal satu output bahasa yang diproduksi siswa — lisan, tulisan, atau gestur berbahasa yang bermakna.

❌ INTERACT melibatkan pasangan, kelompok kecil, atau lebih dari satu siswa secara aktif; bukan urutan guru → satu siswa → guru → satu siswa.

❌ SHARE memberi kesempatan pada sebagian besar siswa untuk memproduksi bahasa, bukan hanya mendengarkan presentasi beberapa siswa.

❌ Tidak ada aktivitas yang mengharuskan seluruh siswa menghasilkan output yang identik atau menunggu seluruh kelas selesai sebelum dapat melanjutkan.

❌ TTS bukan satu-satunya sumber input bahasa; jika audio gagal, guru tetap dapat menjalankan sesi.

❌ Satu target pattern tidak diperkenalkan ulang sebagai pattern baru di TP lain tanpa alasan eksplisit.

❌ Setiap TP bersifat self-contained; guru dapat menjalankan sesi hanya dengan membuka TP tanpa membaca dokumen lain.

❌ Generator tidak menghasilkan placeholder, template text, atau instruksi yang belum diselesaikan.

---

## Penutup

Dokumen ini merupakan **spesifikasi normatif** FLAF Fase D.

Jika terjadi konflik antara dokumen ini dengan TP, generator, schema, atau implementasi runtime, dokumen ini menjadi acuan utama sampai dilakukan revisi versi resmi dengan versioning yang jelas.

Dokumen ini tidak diubah setelah ditetapkan sebagai baseline v1.0. Seluruh perubahan di masa depan menggunakan sistem versioning yang tercantum di bagian Metadata.
