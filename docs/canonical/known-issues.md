# Known Issues — FLAF

> Bug yang terdokumentasi tapi belum diperbaiki, beserta asal-usul dan dampaknya.
> Setiap entry: kapan ditemukan, apakah terkait sprint yang sedang berjalan, dan usulan perbaikan (belum dieksekusi kecuali dinyatakan lain).

---

## 1. Penilaian formatif SD gagal simpan (VersionError)

**Ditemukan:** Sprint C Fase D, Tahap 5 (HARDEN/VALIDATE) — saat menjalankan regression test nyata untuk overlay penilaian SD, bukan dari membaca kode.

**Lokasi:**
- `storage/siswa-history.js:9` — `const DB_VERSION = 10;` (hardcode lokal)
- `storage/db.js:29` — `const DB_VERSION = 12;` (sumber kebenaran aktual, dipakai `db.init()`)

`savePenilaian()` di `siswa-history.js` membuka koneksi IDB sendiri via `indexedDB.open(DB_NAME, DB_VERSION)` dengan versi lokalnya (10), terpisah dari koneksi `storage/db.js`. Saat versi yang diminta lebih rendah dari versi DB yang sudah ada di browser, `indexedDB.open()` gagal dengan `VersionError` — bukan fallback ke versi yang ada.

**Bukti (observasi langsung, Playwright):**
```
[error] [SR] savePenilaian gagal: VersionError: The requested version (10) is less than the existing version (12).
```
Record di store `penilaian_log` tetap kosong (`[]`) setelah tombol Simpan diklik.

**Asal — pre-existing, bukan regresi Sprint C:**
Diverifikasi via git history pada commit `43b5a82` (commit terakhir sebelum Sprint C Fase D Tahap 1 dimulai):
- `storage/db.js` saat itu: `DB_VERSION = 11`
- `storage/siswa-history.js` saat itu: `DB_VERSION = 10` (sudah hardcode, sudah lebih rendah)

Artinya bug ini sudah aktif **sebelum** Sprint C — kenaikan `DB_VERSION` ke 12 (untuk menambah store `penilaian_log_smp`) tidak menyebabkan bug ini, tapi juga tidak memperbaikinya. Bug murni baru *terungkap* karena Sprint C Tahap 5 menjalankan tes nyata sampai ke titik simpan, bukan sekadar membaca kode statis.

**Dampak terhadap guru (dicek langsung, bukan asumsi):**
Tidak benar-benar silent. Ada UI feedback di `screens/sesi-runtime.js:1293-1304`:
- Toast: *"Penilaian gagal disimpan. Coba ulangi sebelum menutup sesi."*
- Teks error inline di overlay: *"Gagal menyimpan. Coba lagi."*
- Tombol "Simpan" di-enable kembali untuk retry.

Namun pesan ini menyarankan **retry**, padahal bug ini struktural/permanen (bukan error transient seperti gangguan jaringan) — retry oleh guru tidak akan pernah berhasil selama mismatch `DB_VERSION` ini ada. Guru akan terus melihat kegagalan setiap kali mencoba menyimpan penilaian formatif, tanpa indikasi bahwa ini bukan kesalahan mereka atau hal yang bisa diperbaiki dengan mengulang.

**Severity: TINGGI**
- Ini fitur inti SD (penilaian formatif per siswa per sesi) — bukan fitur sekunder.
- Kemungkinan sudah berdampak ke pengguna aktif yang browser/IndexedDB-nya sudah pernah ter-upgrade ke versi ≥11 (yaitu sejak fitur `penilaian_log` ditambahkan).
- Tidak ada cara bagi guru untuk recover data penilaian yang gagal tersimpan — workaroundnya hanya mencatat manual di luar aplikasi.

**Usulan perbaikan (belum dieksekusi):**
`storage/siswa-history.js` seharusnya tidak hardcode `DB_VERSION` sendiri. Sumber kebenaran versi harus satu — diekspor dari `storage/db.js` (misal `export const DB_VERSION` ditambahkan di sana) dan diimpor oleh `siswa-history.js`, atau (lebih baik secara arsitektur) `savePenilaian()` direfaktor untuk memakai koneksi/wrapper `db` dari `storage/db.js` langsung (seperti yang dilakukan `storage/penilaian-smp.js` yang baru ditambahkan Sprint C) alih-alih membuka koneksi `indexedDB.open()` sendiri. Ini mencegah drift versi berulang di masa depan.

**Status:** belum diperbaiki — menunggu keputusan apakah ini dikerjakan sebagai hotfix terpisah dari Sprint C Fase D.
