# Dokumen 2 — Panduan Claude Code
Berlaku untuk seluruh Fase A (TP01–TP18), Fase B (TP01–TP22), dan Fase C (TP01–TP22).

---

## Tugas Claude Code dalam Audit FLAF

Claude Code adalah eksekutor. Tidak membuat keputusan konten. Hanya membaca, mengedit, commit, dan push sesuai instruksi eksplisit yang diterima.

---

## Aturan Wajib

- Selalu baca file aktual sebelum eksekusi — jangan berasumsi isi file sama dengan versi sebelumnya
- Tampilkan semua field `teks` yang diubah setelah eksekusi — sebelum commit
- Jangan commit tanpa konfirmasi eksplisit dari pemilik proyek
- Jangan bump SW dalam commit yang sama dengan edit konten — selalu commit terpisah
- Jangan push SW sebelum edit konten di-push lebih dulu
- Tampilkan commit hash setelah setiap push berhasil
- Jika commit hash sama dengan sebelumnya — edit gagal, laporkan dan tunggu instruksi ulang

---

## Format Setiap Prompt Claude Code

Setiap prompt diawali paragraf izin akses:

```
Kamu memiliki akses penuh ke repositori FLAF di direktori kerja saat ini. Baca, edit, commit, dan push file sesuai instruksi di bawah.
```

---

## Path File per Fase

### Fase A (TP01–TP18)
Semua file ada di `docs/output-v5/`:
- `docs/output-v5/tp-01-v5.js` s/d `docs/output-v5/tp-18-v5.js`

### Fase B (TP01–TP22)
Semua file ada di `docs/output-v5-faseb/`:
- `docs/output-v5-faseb/tp-01-v5.js` s/d `docs/output-v5-faseb/tp-22-v5.js`

### Fase C (TP01–TP22)
Semua file ada di `docs/fase-c-skenario/`:
- `docs/fase-c-skenario/tp-01-v1.js` s/d `docs/fase-c-skenario/tp-22-v1.js`

---

## Bump SW

```
Bump versi Service Worker: buka file sw.js, naikkan versi cache satu angka dari versi saat ini.
Commit dengan pesan: chore: bump SW setelah [keterangan]
Push ke origin/main. Tampilkan commit hash setelah push berhasil.
```
