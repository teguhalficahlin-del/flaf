# FLAF — Dokumen Audit Uji Coba Kelas [2]

**Kode Aktivasi:** `FLAF-2026-[0252]`  
**Fase:** [A] · **TP Range:** [10–18] · **Jumlah TP:** [9]  
**Tanggal Uji:** _______________  
**Tester:** _______________

---

> **Panduan nilai expected per kelas:**
>
> | Kelas | Fase | TP Range | Jumlah TP | Fase Header | Kelas Header | Kode |
> |---|---|---|---|---|---|---|
> | 2 | A | TP 10–18 | 9 TP | Fase A | 1 & 2 SD | FLAF-2026-0252 |
> | 3 | B | TP 1–11 | 11 TP | Fase B | 3 & 4 SD | FLAF-2026-BFD1 |
> | 4 | B | TP 12–22 | 11 TP | Fase B | 3 & 4 SD | FLAF-2026-947B |
> | 5 | C | TP 1–11 | 11 TP | Fase C | 5 & 6 SD | FLAF-2026-904A |
> | 6 | C | TP 12–22 | 11 TP | Fase C | 5 & 6 SD | FLAF-2026-90B8 |

---

## A. Aktivasi

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| A1 | Aktivasi dengan kode Kelas [2] berhasil | Masuk home screen | ☐ OK ☐ Bug | |
| A2 | Nama & sekolah guru tampil benar | Sesuai input saat aktivasi | ☐ OK ☐ Bug | |
| A3 | Session tersimpan dengan `kelas = [2]` | Tidak bisa akses kelas lain | ☐ OK ☐ Bug | |

---

## B. Home Screen

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| B1 | Label progress bar | "PROGRES FASE [A]" | ☐ OK ☐ Bug | |
| B2 | Jumlah TP di progress bar | "[9] / [9] TP" | ☐ OK ☐ Bug | |
| B3 | Persentase progress bar | Sesuai TP selesai ÷ [9] | ☐ OK ☐ Bug | |
| B4 | Deskripsi card Dokumen Kurikulum | "CP, ATP, [9] TP + modul PDF siap unduh" | ☐ OK ☐ Bug | |
| B5 | Semua card navigasi tampil | Sesi Mengajar, Manajemen Kelas, Dokumen Kurikulum, Jejak Mengajar, Pasang Aplikasi | ☐ OK ☐ Bug | |

---

## C. Manajemen Kelas — Tambah Rombel

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| C1 | Buka Manajemen Kelas → Tambah Rombel | Form terbuka | ☐ OK ☐ Bug | |
| C2 | Kelas [2] aktif dan ter-select otomatis | Hanya Kelas [2] aktif (gold border) | ☐ OK ☐ Bug | |
| C3 | Kelas [1] disabled | Opacity rendah, tidak bisa diklik | ☐ OK ☐ Bug | |
| C4 | Kelas 3–6 disabled | Opacity rendah, tidak bisa diklik | ☐ OK ☐ Bug | |
| C5 | Simpan rombel berhasil | Rombel muncul di daftar | ☐ OK ☐ Bug | |

---

## D. Manajemen Kelas — Kelola Siswa

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| D1 | Tambah siswa ke rombel | Siswa tersimpan dengan nomor urut | ☐ OK ☐ Bug | |
| D2 | Daftar siswa tampil benar | Nama & nomor urut benar | ☐ OK ☐ Bug | |
| D3 | Hapus siswa | Siswa terhapus dari daftar | ☐ OK ☐ Bug | |

---

## E. Sesi Mengajar — Pilih TP

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| E1 | Daftar TP yang muncul | TP [10–18] saja (Kelas [2]) | ☐ OK ☐ Bug | |
| E2 | Tidak ada TP kelas lain yang bocor | Hanya [9] TP Kelas [2] | ☐ OK ☐ Bug | |
| E3 | Guard kelas — coba akses rombel kelas lain | Pesan blokir muncul | ☐ OK ☐ Bug | |

---

## F. Sesi Mengajar — Materi & Persiapan

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| F1 | Tema tampil benar | Sesuai TP yang dipilih | ☐ OK ☐ Bug | |
| F2 | Vocab chip TTS — klik putar audio | Audio terdengar (bahasa Inggris) | ☐ OK ☐ Bug | |
| F3 | Persiapan tampil (truncate >60 karakter) | Teks terpotong + tombol expand | ☐ OK ☐ Bug | |
| F4 | Detail materi collapsible | Buka/tutup berfungsi | ☐ OK ☐ Bug | |
| F5 | Tombol Cetak Kartu Persiapan | Modal mode cetak muncul | ☐ OK ☐ Bug | |
| F6 | Mode Standar — print preview | Gambar muncul (tidak broken) | ☐ OK ☐ Bug | |
| F7 | Footer cetak | "FLAF — Bahasa Inggris Fase [A]" | ☐ OK ☐ Bug | |

---

## G. Sesi Mengajar — Presensi

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| G1 | Semua siswa default H (Hadir) | Tombol H aktif semua | ☐ OK ☐ Bug | |
| G2 | Toggle status H/S/I/A per siswa | Status berubah saat diklik | ☐ OK ☐ Bug | |
| G3 | Counter hadir real-time | "X/Y hadir" update otomatis | ☐ OK ☐ Bug | |
| G4 | Paginasi 5 siswa/halaman | Nav halaman berfungsi | ☐ OK ☐ Bug | |

---

## H. Sesi Mengajar — Runtime (Pembuka/Inti/Penutup)

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| H1 | Preview sesi — ringkasan presensi tampil | "X/Y hadir" benar | ☐ OK ☐ Bug | |
| H2 | Tombol Mulai → masuk langkah pertama | Langkah muncul | ☐ OK ☐ Bug | |
| H3 | Navigasi antar langkah (Lanjut/Sebelumnya) | Berpindah langkah dengan benar | ☐ OK ☐ Bug | |
| H4 | Audio TTS langkah | Terdengar saat ada teks audio | ☐ OK ☐ Bug | |
| H5 | Overlay Penilaian Formatif — Mode Cepat | ★◐○ berfungsi, data tersimpan | ☐ OK ☐ Bug | |
| H6 | Overlay Penilaian Formatif — pilih alasan | 9 alasan muncul, auto-next | ☐ OK ☐ Bug | |
| H7 | Diferensiasi 2-jalur tampil | Label "Perlu support" / "Sudah bisa" | ☐ OK ☐ Bug | |
| H8 | PreOpening (Layar 0) tampil sebelum Pembuka | Layar 0 muncul di awal | ☐ OK ☐ Bug | |

---

## I. Sesi Mengajar — Asesmen

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| I1 | Daftar siswa tampil di asesmen | Semua siswa dari rombel | ☐ OK ☐ Bug | |
| I2 | Mode Cepat — ★◐○ per siswa | Nilai tersimpan | ☐ OK ☐ Bug | |
| I3 | Mode Detail — L/S/R 0–100 | Input angka tersimpan | ☐ OK ☐ Bug | |
| I4 | Toggle mode cepat ↔ detail | Beralih tanpa error | ☐ OK ☐ Bug | |
| I5 | Auto-save saat pindah halaman | Data tidak hilang | ☐ OK ☐ Bug | |
| I6 | Counter dinilai/total | Update real-time | ☐ OK ☐ Bug | |

---

## J. Sesi Mengajar — Selesai & Simpan

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| J1 | Ringkasan sesi tampil benar | Rombel, TP, Hadir, Dinilai benar | ☐ OK ☐ Bug | |
| J2 | Pilihan mood (Lancar/Biasa/Berat) | Bisa dipilih | ☐ OK ☐ Bug | |
| J3 | Pilihan kendala | Bisa dipilih | ☐ OK ☐ Bug | |
| J4 | Textarea refleksi | Bisa diketik | ☐ OK ☐ Bug | |
| J5 | Simpan & Selesai | Kembali ke home, toast muncul | ☐ OK ☐ Bug | |
| J6 | Progress bar home bertambah | TP selesai +1 | ☐ OK ☐ Bug | |

---

## K. Nilai — Nilai Formatif

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| K1 | Daftar TP tampil | TP [10–18] saja | ☐ OK ☐ Bug | |
| K2 | Klik TP → riwayat penilaian per siswa | Data dari sesi sebelumnya muncul | ☐ OK ☐ Bug | |
| K3 | Detail penilaian: mode cepat (★◐○) | Tampil benar | ☐ OK ☐ Bug | |
| K4 | Detail penilaian: mode detail (L/S/R) | Tampil benar | ☐ OK ☐ Bug | |
| K5 | Alasan observasi tampil | 9 alasan ditampilkan dengan benar | ☐ OK ☐ Bug | |

---

## L. Nilai — Sumatif & Rapor

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| L1 | Input STS Ganjil per siswa | Angka tersimpan | ☐ OK ☐ Bug | |
| L2 | Input STS Genap per siswa | Angka tersimpan | ☐ OK ☐ Bug | |
| L3 | Input SAS Ganjil per siswa | Angka tersimpan | ☐ OK ☐ Bug | |
| L4 | Input SAS Genap per siswa | Angka tersimpan | ☐ OK ☐ Bug | |
| L5 | Rapor Ganjil — perhitungan (STS+SAS)÷2 | Nilai rapor benar | ☐ OK ☐ Bug | |
| L6 | Rapor Genap — perhitungan (STS+SAS)÷2 | Nilai rapor benar | ☐ OK ☐ Bug | |

---

## M. Nilai — Unduh & Cetak

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| M1 | Unduh CSV Nilai Formatif | File ter-download, data benar | ☐ OK ☐ Bug | |
| M2 | Unduh CSV Rekap Nilai | File ter-download, data benar | ☐ OK ☐ Bug | |
| M3 | Unduh CSV STS | File ter-download, data benar | ☐ OK ☐ Bug | |
| M4 | Unduh CSV SAS | File ter-download, data benar | ☐ OK ☐ Bug | |
| M5 | Unduh CSV Rapor | File ter-download, data benar | ☐ OK ☐ Bug | |
| M6 | Unduh PNG Rekap Kehadiran | Gambar ter-download, data benar | ☐ OK ☐ Bug | |
| M7 | Unduh Soal STS Ganjil (.docx) | File ter-download (Kelas [1/2] saja) | ☐ OK ☐ Bug | |
| M8 | Unduh Soal STS Genap (.docx) | File ter-download | ☐ OK ☐ Bug | |
| M9 | Unduh Soal SAS Ganjil (.docx) | File ter-download | ☐ OK ☐ Bug | |
| M10 | Unduh Soal SAS Genap (.docx) | File ter-download | ☐ OK ☐ Bug | |

---

## N. Dokumen Kurikulum

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| N1 | Header fase | "Fase [A]" | ☐ OK ☐ Bug | |
| N2 | Header jumlah TP | "[18] TP" | ☐ OK ☐ Bug | |
| N3 | Header kelas | "[1 & 2 SD]" | ☐ OK ☐ Bug | |
| N4 | Tab Kelas [2] aktif dan ter-select | Aktif, daftar TP [10–18] tampil | ☐ OK ☐ Bug | |
| N5 | Tab Kelas [1] disabled | Tidak bisa diklik | ☐ OK ☐ Bug | |
| N6 | Tab Kelas 3–6 disabled | Tidak bisa diklik | ☐ OK ☐ Bug | |
| N7 | Panel TP collapsible | Buka/tutup berfungsi | ☐ OK ☐ Bug | |
| N8 | Vocab chip TTS di panel TP | Audio terdengar | ☐ OK ☐ Bug | |
| N9 | Unduh modul ajar .docx | File ter-download | ☐ OK ☐ Bug | |
| N10 | Panel ATP — tabel ringkasan | Scroll horizontal berfungsi | ☐ OK ☐ Bug | |
| N11 | Panel CP — Capaian Pembelajaran | Collapsible berfungsi | ☐ OK ☐ Bug | |

---

## O. Jejak Mengajar

| # | Item | Expected | Result | Notes |
|---|---|---|---|---|
| O1 | Streak hari berturut-turut | Angka benar | ☐ OK ☐ Bug | |
| O2 | Level awal | 🌱 Pemula — "Baru mulai — 0–3 hari aktif" | ☐ OK ☐ Bug | |
| O3 | Statistik: hari aktif, pertemuan, TP selesai | Angka benar setelah sesi | ☐ OK ☐ Bug | |
| O4 | Riwayat sesi per TP | Data sesi tampil benar | ☐ OK ☐ Bug | |
| O5 | Mood per sesi (lancar/biasa/berat) | Emoji + label benar | ☐ OK ☐ Bug | |

---

## Ringkasan

| Kategori | Total Item | OK | Bug |
|---|---|---|---|
| A. Aktivasi | 3 | | |
| B. Home Screen | 5 | | |
| C. Tambah Rombel | 5 | | |
| D. Kelola Siswa | 3 | | |
| E. Pilih TP | 3 | | |
| F. Materi & Persiapan | 7 | | |
| G. Presensi | 4 | | |
| H. Runtime | 8 | | |
| I. Asesmen | 6 | | |
| J. Selesai & Simpan | 6 | | |
| K. Nilai Formatif | 5 | | |
| L. Sumatif & Rapor | 6 | | |
| M. Unduh & Cetak | 10 | | |
| N. Kurikulum | 11 | | |
| O. Jejak Mengajar | 5 | | |
| **Total** | **87** | | |

---

## Bug yang Ditemukan

| # | Kategori | Deskripsi Bug | Severity |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

*Catatan: Item M7–M10 (soal .docx) hanya tersedia untuk Kelas 1 & 2 (Fase A). Untuk Kelas 3–6, item ini bisa dilewati atau dicatat sebagai "N/A".*
