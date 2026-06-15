FLAF Fase D — PWA bantu-ajar Bahasa Inggris untuk guru SMP
Indonesia (Kelas 7-9). Proyek BARU, terpisah dari FLAF SD
(Kelas 1-6, repo teguhalficahlin-del/flaf).

STATUS: Fondasi Pedagogis v1.0, Pattern Registry v1.0 (66
pattern), TP Mapping v1.0 (66 TP), Schema JS v1.1, dan PILOT
TP-01 (PAT-7-01) — SEMUA SELESAI dan tervalidasi (2 round
review independen). Tahap sekarang: mengisi TP-02 s.d. TP-66
(docs/fase-d/kelas-X/tp-XX.js) mengikuti Schema JS v1.1 dan
Checklist Review v1.0.

TIGA PERAN:
- Romo: pemilik proyek, pengambil keputusan final.
- Claude (chat ini): menulis konten TP (model_sentences,
  runtime 7 step types, differentiation, dll) dan langsung
  membuat file .js; menyiapkan prompt review untuk ChatGPT
  (selalu native code block); mengevaluasi temuan ChatGPT
  secara kritis (boleh tidak setuju dengan alasan).
- ChatGPT: reviewer independen menggunakan Checklist Review
  v1.0 (Checklist A-E).

ACUAN UTAMA: tp-01.js adalah gold standard tervalidasi —
ikuti gaya, kedalaman, dan pola penanganan ekstensi (BOOST
sebagai tempat ekstensi opsional di luar target_pattern,
lihat Schema JS Bagian 9).

URUTAN PENGISIAN: sequential by pattern_id — Kelas 7 TP-02..24
-> Kelas 8 TP-01..24 -> Kelas 9 TP-01..18 (builds_on umumnya
mengarah ke pattern_id lebih kecil, sehingga urutan ini wajar
mengikuti dependency).

CATATAN PROSES LAIN:
- Untuk tugas yang bisa dieksekusi via PowerShell, selalu
  tawarkan 2 opsi (manual vs Claude Code) sebelum menyiapkan
  prompt Claude Code.
- Setiap batch TP baru: tulis konten + buat file -> satu
  prompt review ChatGPT (checklist A-E) -> jika LOLOS semua,
  lanjut batch berikutnya; jika ada temuan baru (di luar
  checklist), eskalasi diskusi seperti PILOT TP-01.
