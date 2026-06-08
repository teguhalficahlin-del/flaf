# FLAF — Claude Code Rules

## Langkah Pertama di Setiap Sesi

Baca `CONTEXT.md`. Tampilkan hanya:

* STATUS (TP berapa yang sudah selesai)
* NEXT TASK

Tunggu instruksi sebelum melakukan apapun.

---

## Workflow Wajib

```
ANALYZE → DESIGN → BUILD → HARDEN → VALIDATE
```

Satu fase selesai = **berhenti dan tunggu konfirmasi** sebelum lanjut.

---

## Aturan Konfirmasi

* Jangan mulai fase berikutnya tanpa persetujuan eksplisit
* Jangan tulis atau edit file sebelum BUILD disetujui
* Jangan sentuh file di luar scope yang disepakati
* Setelah VALIDATE selesai: ingatkan untuk update `CONTEXT.md`

---

## Pertanyaan Arsitektural

Ajukan **satu pertanyaan per giliran** — tunggu jawaban sebelum lanjut.

Jangan putuskan sendiri:

* Pilihan vocab atau tipe aktivitas
* Sensitivitas konten TP
* Struktur atau extension schema
* Nomor atau urutan TP

---

## ANALYZE

* Baca `fase-a.js` untuk konten v3 TP yang sedang dimigrasi
* Baca TP terakhir yang selesai sebagai referensi format (bukan semua TP)
* Sajikan: temuan konten + pertanyaan arsitektural (satu per satu)

## DESIGN

* Sajikan **ringkasan arah** saja — bukan implementasi lengkap
* Jika ada lebih dari satu opsi: tampilkan dengan trade-off singkat
* Tunggu persetujuan eksplisit sebelum lanjut ke BUILD

## BUILD

* Jika ada keraguan struktur: baca `CONTEXT.md §Schema Tier Policy` dan gunakan `docs/sesi-m11/tp-16.js` sebagai canonical reference
* Jangan gunakan `docs/fase-1-spec/SCHEMA.md` — schema itu obsolete (era aktivitas[])
* Tulis full file — tidak ada placeholder
* Sebutkan nama file sebelum mengedit

## HARDEN

* Cek konsistensi internal file yang baru ditulis
* Laporkan temuan saja — tunggu instruksi sebelum fix

## VALIDATE

* Verifikasi checklist schema v4.3 langkah[]-only:

  * `vocab[]` hanya lexical items (bukan frasa audio atau nama tipe aktivitas)
  * Semua `instruksi` dan `audio` langkah punya field `mode` dengan `mudah/normal/tantangan`
  * Semua `instruksi` langkah punya `pm` (mindful/meaningful/joyful) — kecuali TP04–14 yang tolerated legacy
  * Tidak ada `instruksi.teks` dimulai `'DIFERENSIASI'` atau `'JIKA WAKTU TERSISA'` di TP baru
  * `export default` ada di akhir file (untuk TP docs/ terpisah)
* Declare selesai hanya setelah semua checklist hijau
* Catatan: `closure_reinforcement`, `observation_validation`, `advance` adalah field schema lama (aktivitas[]) — tidak relevan untuk langkah[] v4.3

---

## Pattern yang Sudah Terbentuk

Baca bagian **Pattern Inklusivitas** dan **Pattern Lain** di `CONTEXT.md`
hanya jika topik TP yang sedang dikerjakan sensitif (keluarga, makanan,
tubuh, hobi, dll). Untuk TP netral (Animals, Weather, School): skip.

---

## Anti-Pattern Rules

Larangan ini berlaku di semua sesi tanpa pengecualian:

1. **Jangan tambahkan branching per-TP di `sesi-runtime.js`:**

   * `if (tp.nomor <= 14)` — DILARANG
   * `if (langkah.teks?.startsWith('DIFERENSIASI'))` — DILARANG
   * Compatibility logic atas nama "legacy support" — DILARANG
   * Semua TP melewati code path yang sama; degradasi UX ada di data, bukan di runtime

2. **Jangan inject pm massal ke TP04–14:**

   * 97 warning adalah INTENTIONAL TOLERATED DEBT — baca `CONTEXT.md §Schema Tier Policy`
   * Parity forcing tanpa sesi migration eksplisit = false compliance

3. **Jangan gunakan `docs/fase-1-spec/SCHEMA.md` sebagai schema authority:**

   * Schema itu mendeskripsikan era aktivitas[] yang sudah obsolete
   * Source of truth = `CONTEXT.md §Schema Tier Policy` + `docs/sesi-m11/tp-16.js`

4. **Jangan cleanup "semua TP harus punya X"** tanpa review boundary:

   * Cek dulu apakah X adalah tolerated debt di tier legacy
   * Jika TP04–14 terlibat: baca tier policy sebelum menyentuh apapun

---

## Komunikasi

* Diskusi: Bahasa Indonesia
* Kode: English
* Jawab ringkas kecuali diminta elaborasi
* Jangan berikan solusi sebelum masalah dipahami bersama

# Audit Operating System

Jika user meminta:

* audit TP
* review skenario
* cek keterpakaian
* validasi instruksi guru
* verifikasi redaksi
* Output 1 / Output 2 / Output 3

WAJIB:

1. Baca `audit.md` di root project.
2. Gunakan `audit.md` sebagai entry point.
3. Perlakukan `audit.md` sebagai source of truth Audit OS.
4. Ikuti seluruh referensi yang ditunjuk `audit.md`.
5. Jangan membuat standar baru apabila masih dapat diputuskan menggunakan Audit OS.
6. Bila menemukan kasus baru, lakukan gap analysis terlebih dahulu sebelum mengusulkan standar baru.

Audit OS bersifat self-contained.

`CLAUDE.md` hanya menentukan kapan Audit OS digunakan.

Seluruh aturan, workflow, prioritas, dan standar audit berada di `audit.md` beserta dokumen yang dirujuknya.
