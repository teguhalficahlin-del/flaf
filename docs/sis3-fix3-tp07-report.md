# Laporan Perbaikan SIS-3 — TP07 preOpening (fix3)

**Tugas:**
1. **TUGAS 1 — preOpening.cue** — pulihkan dari TXT (sebelumnya terpotong, belum pernah dipulihkan).
2. **TUGAS 2 — preOpening.teks** — hapus ekor `preOpening.cue` yang bocor saat konversi.

**Sumber kebenaran:** `docs/skenario/flaf-skenario-tp07-v2.txt` (LAYAR 0 — PRE-OPENING)
**File hasil (baru, `-fixed2.js` tidak ditimpa):** `docs/output-v5/tp-07-v5-fixed3.js`
**Lingkup field:** hanya `preOpening.cue` dan `preOpening.teks`.

## Verifikasi

- `git diff --numstat` (fixed2 → fixed3): **2 added / 2 deleted** → tepat 1 baris `preOpening.teks` + 1 baris `preOpening.cue`.
- Cek diff: **tidak ada field lain yang berubah** (langkah, `bantuan`, `darurat`, `energi`, `tipe`, dst. utuh; baris yang berubah hanya `preOpening.teks` & `preOpening.cue` — indentasi 4 spasi, bukan langkah).
- File **valid sebagai ES module** (di-`import` Node berhasil; `export default` utuh). `preOpening.cue.len=168`, `preOpening.teks.len=331`.

---

## TUGAS 1 — preOpening.cue (dipulihkan dari TXT)

- **field:** `preOpening.cue`
- **lama:** `Tone calm dijaga dari sini — TP 07 bertumpu pada koneksi personal.`
- **baru:** `Tone calm dijaga dari sini — TP 07 bertumpu pada koneksi personal. Jangan tergesa masuk ke Layar 1. Jika kelas belum fokus: ulangi "Are you ready?" sambil berdiri diam.`

## TUGAS 2 — preOpening.teks (ekor cue dihapus)

- **field:** `preOpening.teks`
- **lama:** `AKSI: Berdiri di tengah kelas. Tangan kosong. Kartu disimpan di meja. Tunggu semua siswa duduk dan tenang — buat kontak mata sebelum bicara. UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] "I'm fine, thank you! Today is a special day. Are you ready?" [Tunggu respons — berdiri diam jika kelas belum fokus] Jangan tergesa masuk ke Layar 1. Jika kelas belum fokus: ulangi "Are you ready?" sambil berdiri diam.`
- **baru:** `AKSI: Berdiri di tengah kelas. Tangan kosong. Kartu disimpan di meja. Tunggu semua siswa duduk dan tenang — buat kontak mata sebelum bicara. UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] "I'm fine, thank you! Today is a special day. Are you ready?" [Tunggu respons — berdiri diam jika kelas belum fokus]`
- *(ekor dihapus: ` Jangan tergesa masuk ke Layar 1. Jika kelas belum fokus: ulangi "Are you ready?" sambil berdiri diam.`)*

---

## Status seri SIS-3

Dengan ini **preOpening seluruh TP07–TP11 selesai**: `preOpening.cue` lengkap & `preOpening.teks`
bersih dari ekor bocor di kelima TP. (Pemulihan `preOpening.cue` TP08–TP11 dilakukan di tahap fix2;
pembersihan `preOpening.teks` TP08–TP11 di tahap fix3; TP07 dituntaskan di sini.)

— Selesai. File `-fixed2.js` tidak diubah; hasil ada di `tp-07-v5-fixed3.js`.
