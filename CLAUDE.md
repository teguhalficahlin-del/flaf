# FLAF — Claude Code Rules

## Langkah Pertama di Setiap Sesi
Baca `CONTEXT.md`. Tampilkan hanya:
- STATUS (TP berapa yang sudah selesai)
- NEXT TASK

Tunggu instruksi sebelum melakukan apapun.

---

## Workflow Wajib
```
ANALYZE → DESIGN → BUILD → HARDEN → VALIDATE
```
Satu fase selesai = **berhenti dan tunggu konfirmasi** sebelum lanjut.

---

## Aturan Konfirmasi
- Jangan mulai fase berikutnya tanpa persetujuan eksplisit
- Jangan tulis atau edit file sebelum BUILD disetujui
- Jangan sentuh file di luar scope yang disepakati
- Setelah VALIDATE selesai: ingatkan untuk update `CONTEXT.md`

---

## Pertanyaan Arsitektural
Ajukan **satu pertanyaan per giliran** — tunggu jawaban sebelum lanjut.

Jangan putuskan sendiri:
- Pilihan vocab atau tipe aktivitas
- Sensitivitas konten TP
- Struktur atau extension schema
- Nomor atau urutan TP

---

## ANALYZE
- Baca `fase-a.js` untuk konten v3 TP yang sedang dimigrasi
- Baca TP terakhir yang selesai sebagai referensi format (bukan semua TP)
- Sajikan: temuan konten + pertanyaan arsitektural (satu per satu)

## DESIGN
- Sajikan **ringkasan arah** saja — bukan implementasi lengkap
- Jika ada lebih dari satu opsi: tampilkan dengan trade-off singkat
- Tunggu persetujuan eksplisit sebelum lanjut ke BUILD

## BUILD
- Baca `docs/fase-1-spec/SCHEMA.md` jika ada keraguan struktur
- Tulis full file — tidak ada placeholder
- Sebutkan nama file sebelum mengedit

## HARDEN
- Cek konsistensi internal file yang baru ditulis
- Laporkan temuan saja — tunggu instruksi sebelum fix

## VALIDATE
- Verifikasi checklist schema v4.3:
  - `closure_reinforcement` hadir
  - `observation_validation` hadir di Penilaian
  - `vocab[]` hanya lexical items (bukan audio_cue)
  - Semua aktivitas punya `advance`
  - `export default` ada di akhir file
- Declare selesai hanya setelah semua checklist hijau

---

## Pattern yang Sudah Terbentuk
Baca bagian **Pattern Inklusivitas** dan **Pattern Lain** di `CONTEXT.md`
hanya jika topik TP yang sedang dikerjakan sensitif (keluarga, makanan,
tubuh, hobi, dll). Untuk TP netral (Animals, Weather, School): skip.

---

## Komunikasi
- Diskusi: Bahasa Indonesia
- Kode: English
- Jawab ringkas kecuali diminta elaborasi
- Jangan berikan solusi sebelum masalah dipahami bersama
