# Sesi M2 — Perbandingan TP 05 & TP 06

**Tanggal**: Mei 2026
**Status**: Draft untuk review Anda
**Schema yang dipakai**: v4.3 (cleanup batch + Sesi M2)

---

## A. Status Migrasi Setelah M2

```
   TP 01 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.3 (relabeled)
   TP 02 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.3 (relabeled)
   TP 03 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.3 (relabeled)
   TP 04 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.3 (relabeled)
   TP 05 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.3 (NEW)
   TP 06 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.3 (NEW)
   TP 07-18                          ⬚ v3 (belum)
```

**Progress**: 6/18 migrate (33%). **🎯 CHECKPOINT KELAS 1 TERCAPAI** — sesuai
Migration Plan §2.

Setelah review TP 05 & TP 06, kita di posisi untuk **audit Kelas 1** sebelum
lanjut ke TP 07 (Kelas 2 mulai).

---

## B. Cleanup Batch (Tahap 1 sesi ini)

3 perbaikan dari review Anda atas Sesi M1:

### B1. Label TP 01 & TP 04 → v4.3

- TP 01: "Format: v4" → "Format: v4.3 — Hybrid"
- TP 04: "Format: v4 — Hybrid" → "Format: v4.3 — Hybrid"
- TP 02 & TP 03 sudah v4.2 → di-update ke v4.3

Konten **tidak berubah** — v4.0/4.1/4.2/4.3 semuanya backward compatible.

### B2. Rename `farewell_kelas` → `closure_reinforcement`

Di SCHEMA §4.1:
- Sebelum: `farewell_kelas` — Perpisahan kelas bersama
- Sesudah: `closure_reinforcement` — **WAJIB di setiap TP** — pengakuan
  pencapaian + farewell. Memperkuat hasil belajar secara emosional dan
  kognitif.

Di SCHEMA §8 (Validation): tambah rule baru — "Fase Penutup WAJIB punya
tepat 1 aktivitas tipe `closure_reinforcement` sebagai aktivitas terakhir."

TP 01-04 sudah punya aktivitas yang sesuai definisi baru — hanya rename
tipe, konten tetap.

### B3. Klarifikasi field `mode` di SCHEMA §6

Dokumentasi diperjelas: field `mode: { mudah, normal, tantangan }` berisi
**3 versi konten siap-pakai**, bukan "guru pilih per aktivitas." Saat
runtime, 1 versi ditampilkan sesuai pilihan Preview.

---

## C. Schema v4.3 — Validasi Stabilitas

**Antisipasi M2 di Migration Plan**: TP 06 mungkin butuh tipe baru `drawing`
atau `visual_creation`.

**Hasil aktual**: TIDAK butuh tipe baru. Menggambar di kertas digantikan
dengan TPR di udara (tipe `tpr_action` yang sudah ada dari v4.2).

Ini **validasi penting Jalur 2**: schema mulai matang. Antisipasi tidak
selalu jadi kenyataan. Reuse tipe yang ada lebih sederhana.

**Schema v4.3 changes hanya dari Tahap 1 cleanup** (rename farewell_kelas).
TP 05 & TP 06 tidak picu schema extension lain.

---

## D. Karakter Mendasar — TP 05 vs TP 06

| Aspek | TP 05 — Colours | TP 06 — Shapes |
|---|---|---|
| **Fokus utama** | Visual + verbal naming warna | Visual + verbal naming bentuk |
| **Output siswa** | Verbal (ucap warna) | Verbal + Kinestetik (TPR udara) |
| **Tipe dominan** | `chorus`, `game_movement`, `pair_work`, `chant_movement` | `chorus`, `tpr_action`, `pair_work`, `review_quick` |
| **Pair work** | Show & tell dialog | Cari bentuk cooperative |
| **Permainan ikonik** | Sentuh warna di kelas | Tebak bentuk yang sedang digambar |
| **Lagu/Chant** | "I Can Sing a Rainbow" | (tidak ada) |
| **Cakupan vocab** | 8 warna | 6 bentuk |
| **Integrasi TP lain** | (mandiri) | Bonus: warna + bentuk (link ke TP 05) |

---

## E. Yang Saya PERTAHANKAN dari v3

### TP 05:
- ✅ Pengantar dengan look-around kelas (Pembuka)
- ✅ Tebak kartu warna sebelum guru sebut
- ✅ Pola "What colour is this? It is ___" sebagai inti
- ✅ Permainan sentuh warna di kelas
- ✅ Show and tell benda berwarna
- ✅ Warna favorit (personal preference)
- ✅ Lagu "I Can Sing a Rainbow" di Penutup
- ✅ Validasi via kartu acak saat berkemas

### TP 06:
- ✅ Look around kelas untuk bentuk nyata (pintu, jam, papan)
- ✅ Tebak kartu bentuk sebelum guru sebut
- ✅ Pola "This is a ___" untuk bentuk
- ✅ Permainan tebak bentuk yang sedang digambar
- ✅ Show & cari bentuk dari tas
- ✅ Integrasi warna + bentuk sebagai bonus
- ✅ Review cepat di Penutup
- ✅ Validasi via kartu acak

---

## F. Yang Saya UBAH dari v3

### TP 05 — Perubahan Substansi

| # | Perubahan | Justifikasi |
|---|---|---|
| 1 | Cakupan 8 warna (lepas pink, brown dari core vocab) | 6-8 optimal untuk usia 6-7. Mode mudah hanya 4 primary, mode tantangan boleh ekstensi |
| 2 | Show and tell yang di v3 "tampil ke kelas" → format pair_work | Emotional safety + semua siswa dapat speaking turn (Dok 03 §10) |
| 3 | Permainan sentuh warna tambah `flags: ['kompetitif_safety']` | Mode mudah versi per-baris non-kompetitif |
| 4 | Lagu rainbow diformat sebagai `chant_movement` (tipe v4.1) | Konsisten dengan TP 04 blast-off |
| 5 | Tambah aktivitas `closure_reinforcement` di Penutup (WAJIB v4.3) | Sesuai keputusan Anda — closure bukan sekadar farewell |

### TP 06 — Perubahan Substansi

| # | Perubahan | Justifikasi |
|---|---|---|
| 1 | Aktivitas menggambar bentuk diformat sebagai `tpr_action` di udara | Keputusan kita sesi sebelumnya — zero-cost media, kinestetik tinggi |
| 2 | Show and tell benda dari tas → pair_work cooperative | Emotional safety + semua siswa dapat speaking turn |
| 3 | Integrasi warna + bentuk dijadikan mode tantangan bonus (bukan aktivitas terpisah) | Konsolidasi waktu Inti yang sudah padat |
| 4 | Permainan tebak bentuk TANPA flags kompetitif_safety | Karena ini lebih ke "siapa cepat menyadari pattern" bukan elimination |
| 5 | Tambah aktivitas `closure_reinforcement` di Penutup (WAJIB v4.3) | Sesuai keputusan Anda |
| 6 | Vocab v3 punya `diamond`, `oval` — saya lepas dari core | 6 bentuk sudah cukup untuk kelas 1, diamond/oval bisa di TP lanjutan |

---

## G. Risiko yang Saya Akui

### Risiko 1 — TP 05 cakupan 8 warna mungkin masih ambisius

8 warna untuk anak kelas 1 di 30 menit Inti tetap padat. Mode mudah hanya 4
primary adalah escape valve. Tapi kalau Anda merasa **6 warna** lebih aman
(lepas orange + purple dari core), saya bisa revisi.

### Risiko 2 — TP 06 vocab `diamond` dan `oval` dilepas

v3 punya 8 bentuk. Saya pakai 6 (lepas diamond + oval). Anak kelas 1
biasanya bingung membedakan diamond vs square, oval vs circle. Tapi
kalau Anda ada alasan pedagogis untuk pertahankan 8, saya bisa kembalikan.

### Risiko 3 — TP 06 tebak bentuk TANPA kompetitif_safety flag

Saya pikir ini tidak kompetitif individual — siswa angkat tangan dan
guru pilih. Tapi bisa berargumen ini mirip "Simon Says" mode normal yang
saya kasih flag. Apakah Anda merasa harus konsisten? Saya bisa tambah flag.

### Risiko 4 — Integrasi warna+bentuk hanya di mode tantangan TP 06

Di v3, gabungan warna + bentuk adalah aktivitas terpisah (semua siswa pakai).
Saya turunkan ke "bonus mode tantangan" untuk hemat waktu. Anda mungkin
merasa semua siswa harus pernah coba gabungan ini. Bisa naikkan ke aktivitas
normal di mode semua.

### Risiko 5 — Lagu rainbow durasi 6 menit di Penutup TP 05

v3: tidak ada durasi eksplisit. Saya kasih 6 menit. Mungkin terlalu lama
karena Penutup hanya 10 menit total. Mode mudah min_detik 3 menit sebagai
escape.

---

## H. Format Review untuk Anda

### TP 05 — Colours

```
Substansi TP 05 → [Tepat / Tepat dengan koreksi / Perlu revisi]
Koreksi (jika ada):
1. ...
```

### TP 06 — Shapes

```
Substansi TP 06 → [Tepat / Tepat dengan koreksi / Perlu revisi]
Koreksi (jika ada):
1. ...
```

### Cleanup Batch (Tahap 1)

```
Schema v4.3 (rename farewell_kelas → closure_reinforcement) → [Setuju / Tidak]
Label relabeling TP 01-04 → v4.3 → [Setuju / Tidak]
Klarifikasi field mode di §6 → [Setuju / Tidak]
```

---

## I. Apa yang Terjadi Setelah Review

**Skenario A — Setuju semua**: Commit ke repo. Lalu **🎯 Checkpoint Kelas 1
Audit** sebelum lanjut M3.

**Skenario B — Koreksi substansi**: Revisi sebelum checkpoint.

**Skenario C — Audit lebih dulu**: Anda mungkin mau lihat 6 TP berdampingan
dulu sebelum sentuh M3. Saya bisa siapkan `KELAS-1-AUDIT.md` setelah commit.

---

## J. Catatan untuk Diri Saya (Refleksi Sesi M2)

1. **Schema v4.3 lebih sehat dari yang saya antisipasi**: Saya khawatir M2
   akan picu schema extension (tipe `drawing`). Ternyata reuse `tpr_action`
   lebih elegan. Validasi: Jalur 2 berfungsi — extension hanya ketika
   benar-benar diperlukan, bukan setiap TP.

2. **Cleanup batch krusial**: Review Anda menyelamatkan kita dari pattern
   inkonsisten yang akan amplifikasi di 12 TP berikutnya. `farewell_kelas`
   yang berbeda-beda di 4 TP sebelumnya sekarang jadi pattern baku.

3. **TP 05 & TP 06 substansinya lebih dekat ke TP 04 daripada TP 01-03**:
   Pattern visual recognition + naming + game movement + pair work.
   Sub-tipe pair_work yang saya pakai konsisten (dialog di TP 05, cooperative
   di TP 06).

4. **Antisipasi M3 (TP 07 My Family, TP 08 My House)**: kemungkinan butuh
   handling khusus untuk informasi keluarga (privasi, sensitivitas).
   Mungkin perlu `flags: ['privacy_sensitive']` baru. Belum pasti — akan
   evaluasi saat draft.

---

## Akhir COMPARISON-M2.md
