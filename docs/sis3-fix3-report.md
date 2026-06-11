# Laporan Perbaikan SIS-3 — Tahap 3 (fix3): preOpening.teks + duplikasi UCAP (TP08–TP11)

**Tugas:**
1. **(TP08–TP11) preOpening.teks** — hapus ekor `preOpening.cue` yang bocor saat konversi (TXT = acuan).
2. **(TP10, TP11) langkah.teks** — hapus duplikasi label `UCAP: UCAP:` → `UCAP:`.

**Sumber kebenaran:** `docs/skenario/flaf-skenario-tp{08..11}-v2.txt`
**File hasil (baru, `-fixed2.js` tidak ditimpa):** `docs/output-v5/tp-08-v5-fixed3.js … tp-11-v5-fixed3.js`
**Lingkup field:** hanya `preOpening.teks` dan `langkah.teks`. (TP07 di luar lingkup tugas ini.)

## Catatan keputusan (TUGAS 2 — TP10)

Daftar Anda menyebut TP10 L1/L3/L6/L11, namun pemindaian menemukan **5** kemunculan
`UCAP: UCAP:` (ada tambahan di **L10**). Sesuai konfirmasi Anda ("perbaiki semua 5 termasuk L10"),
**kelima** kemunculan di TP10 diganti. TP11 memiliki **2** kemunculan, keduanya di L1.

## Ringkasan & Verifikasi

| TP | preOpening.teks | UCAP: UCAP: dihapus | Total baris berubah |
|----|-----------------|---------------------|---------------------|
| 08 | ✅ 1 | — | 1 |
| 09 | ✅ 1 | — | 1 |
| 10 | ✅ 1 | 5 (L1, L3, L6, L10, L11) | 6 |
| 11 | ✅ 1 | 2 (L1 ×2) | 3 |

Verifikasi otomatis (terhadap `-fixed2.js`):
- `grep "UCAP: UCAP:"` pada keempat file = **0** (semua duplikat hilang).
- `git diff --numstat`: TP08 1/1 · TP09 1/1 · TP10 6/6 · TP11 3/3.
- **Tidak ada field selain `teks` yang berubah** (cek diff berjangkar pada label `cue`/`bantuan`/`darurat`/`energi`/`tipe`/… → kosong). `preOpening.cue` & `langkah.cue` tidak tersentuh.
- Keempat file **valid sebagai ES module** (di-`import` Node berhasil; `export default` utuh).

## Catatan (tetap di luar lingkup — TIDAK diubah)

- **TP07** tidak termasuk tugas ini. `preOpening.teks` TP07 masih memuat ekor cue
  ("Jangan tergesa masuk ke Layar 1. Jika kelas belum fokus: ulangi …") karena `preOpening.cue`
  TP07 memang belum pernah dipulihkan. Perlu keputusan terpisah bila ingin disertakan.

---

## TUGAS 1 — preOpening.teks (ekor cue dihapus)

### tp-08-v5-fixed3.js · preOpening.teks
- **lama:** `AKSI: Berdiri di tengah kelas. Tangan kosong. Kartu denah dan kartu ruangan belum ditunjukkan. Tunggu semua duduk tenang — buat kontak mata sebelum bicara. UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] "I'm fine, thank you! Today — we talk about your house. Are you ready?" [Tunggu respons — berdiri diam jika kelas belum fokus] dijaga dari sini. Jika kelas belum fokus: ulangi "Are you ready?" sambil berdiri diam.`
- **baru:** `AKSI: Berdiri di tengah kelas. Tangan kosong. Kartu denah dan kartu ruangan belum ditunjukkan. Tunggu semua duduk tenang — buat kontak mata sebelum bicara. UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] "I'm fine, thank you! Today — we talk about your house. Are you ready?" [Tunggu respons — berdiri diam jika kelas belum fokus]`
- *(ekor dihapus: ` dijaga dari sini. Jika kelas belum fokus: ulangi "Are you ready?" sambil berdiri diam.`)*

### tp-09-v5-fixed3.js · preOpening.teks
- **lama:** `UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] UCAP: "I'm fine, thank you! Are you ready? Let's start." perhatian kelas sebelum masuk sesi. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.`
- **baru:** `UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] UCAP: "I'm fine, thank you! Are you ready? Let's start."`
- *(ekor dihapus: ` perhatian kelas sebelum masuk sesi. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.`)*

### tp-10-v5-fixed3.js · preOpening.teks
- **lama:** `"Good morning, everyone! How are you today?" Tunggu respons kelas. "Great! Me too. Are you ready? Let's start." mengunci perhatian kelas sebelum masuk sesi. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.`
- **baru:** `"Good morning, everyone! How are you today?" Tunggu respons kelas. "Great! Me too. Are you ready? Let's start."`
- *(ekor dihapus: ` mengunci perhatian kelas sebelum masuk sesi. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.`)*

### tp-11-v5-fixed3.js · preOpening.teks
- **lama:** `"Good morning, everyone! How are you today?" Tunggu respons kelas. "I'm fine, thank you! Are you ready? Let's start." ulangi "Are you ready?" sekali lagi sambil berdiri diam.`
- **baru:** `"Good morning, everyone! How are you today?" Tunggu respons kelas. "I'm fine, thank you! Are you ready? Let's start."`
- *(ekor dihapus: ` ulangi "Are you ready?" sekali lagi sambil berdiri diam.`)*

---

## TUGAS 2 — duplikasi `UCAP: UCAP:` → `UCAP:`

### tp-10-v5-fixed3.js · langkah.teks (5 kemunculan)
- **L1** — `... UCAP: UCAP: "Are you hungry?"` → `... UCAP: "Are you hungry?"`
- **L3** — `... acak 2 kartu. UCAP: UCAP: "Now — with feeling."` → `... acak 2 kartu. UCAP: "Now — with feeling."`
- **L6** — `[Tepuk 1 kali — kelas freeze] UCAP: UCAP: "Stop. Hands down. Look at me."` → `[Tepuk 1 kali — kelas freeze] UCAP: "Stop. Hands down. Look at me."`
- **L10** — `... saat distribusi. UCAP: UCAP: "Circle the foods you like. Quick — no coloring."` → `... saat distribusi. UCAP: "Circle the foods you like. Quick — no coloring."`
- **L11** — `[Tepuk 1 kali — freeze] UCAP: UCAP: "Stop. Look here."` → `[Tepuk 1 kali — freeze] UCAP: "Stop. Look here."`

### tp-11-v5-fixed3.js · langkah.teks (2 kemunculan, keduanya L1)
- **L1 (1)** — `... Tidak ada kartu dulu. UCAP: UCAP: "Before school today — what did you do?"` → `... Tidak ada kartu dulu. UCAP: "Before school today — what did you do?"`
- **L1 (2)** — `... boleh Bahasa Indonesia. UCAP: UCAP: "Me too — listen."` → `... boleh Bahasa Indonesia. UCAP: "Me too — listen."`

---

— Selesai tahap fix3. 4 `preOpening.teks` dibersihkan (TP08–11) + 7 duplikasi `UCAP: UCAP:` dihapus (TP10: 5, TP11: 2). File `-fixed2.js` tidak diubah; hasil ada di `-fixed3.js`.
