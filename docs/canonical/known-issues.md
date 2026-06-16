# Known Issues — FLAF

> Bug yang terdokumentasi tapi belum diperbaiki, beserta asal-usul dan dampaknya.
> Setiap entry: kapan ditemukan, apakah terkait sprint yang sedang berjalan, dan usulan perbaikan (belum dieksekusi kecuali dinyatakan lain).

---

## 1. Penilaian formatif SD gagal simpan (VersionError) — RESOLVED

**Status:** RESOLVED via hotfix terpisah (di luar Sprint C Fase D). Detail di bagian "Resolusi" di akhir entry ini.

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

**Cakupan bug ternyata lebih luas — `storage/nilai.js` juga terdampak:**
Saat investigasi hotfix, ditemukan `storage/nilai.js` punya pola persis sama: helper `_atomicUpdate()` (dipakai oleh `setNilai`, `setNilaiLSR`, `setCatatan`, `setNilaiFormatif`, `setCatatanFormatif`) membuka koneksi `indexedDB.open(DB_NAME, DB_VERSION)` sendiri dengan `DB_VERSION = 10` hardcode lokal — terpisah dari `db.js`. Fungsi-fungsi lain di `nilai.js` (kelas, siswa, SAS, dll) sudah memakai wrapper `db.js` dan tidak terdampak.

**Bukti (observasi langsung, Playwright, kondisi DB sudah versi 12):**
```
setNilaiError: "The requested version (10) is less than the existing version (12)."
```
Berarti setiap kali guru mengisi **nilai sumatif/formatif L/S/R atau catatan** (bukan hanya penilaian proses per sesi SD), gagal total di setiap instalasi yang sudah pernah upgrade ke DB versi ≥11 — bug aktif yang sama severity-nya (TINGGI) dengan #1, hanya belum terlihat di Tahap 5 karena Tahap 5 tidak menguji jalur `setNilai`/`setNilaiLSR`.

**Resolusi (hotfix, divalidasi Playwright real, bukan asumsi):**
1. `storage/db.js` — `DB_VERSION` (sebelumnya variabel lokal tak terekspor) ditambahkan ke named export, jadi satu sumber kebenaran untuk semua modul.
2. `storage/siswa-history.js` — hapus hardcode `DB_VERSION = 10`, import dari `db.js`. Ditambahkan `await db.init()` di awal `savePenilaian()` SEBELUM `indexedDB.open()` lokal dipanggil — ini mencegah race condition baru yang terungkap saat investigasi (lihat di bawah).
3. `storage/nilai.js` — hapus hardcode `DB_VERSION = 10` di `_atomicUpdate()`, import dari `db.js`. Ditambahkan `await db.init()` di awal `_atomicUpdate()` dengan alasan sama.

**Race condition yang ditemukan & diselesaikan dalam proses yang sama:**
Menyamakan `DB_VERSION` persis di semua modul (tanpa gating) ternyata membuka risiko baru: pada fresh install, jika modul yang TIDAK punya `onupgradeneeded` handler (`siswa-history.js`/`nilai.js`) memenangkan race membuka koneksi IndexedDB pertama, browser memilih request itu sebagai pemilik event upgrade satu-satunya — dan karena modul itu tidak punya logic pembuatan store, DB jadi permanen stuck di versi tinggi dengan nol object store (dibuktikan: `NotFoundError: One of the specified object stores was not found`). Solusinya: `await db.init()` di awal kedua titik (`siswa-history.js` line ~43, `nilai.js` `_atomicUpdate`) — karena `db.init()` mengembalikan promise singleton (`_initPromise`) yang sama untuk semua caller, siapa pun yang memanggilnya lebih dulu menang membuka koneksi resmi (lengkap dengan `onupgradeneeded`), dan modul lain menunggu promise itu selesai sebelum membuka koneksi mereka sendiri — yang pada titik itu DB sudah lengkap semua store-nya.

Divalidasi dengan 5 variasi urutan race pada fresh install (`hist`/`nilai`/`db` dalam berbagai kombinasi) — semua 7 store selalu terbentuk, nol error.

**Follow-up yang TIDAK dieksekusi (dicatat untuk sprint lain):**
Migrasi penuh `siswa-history.js` dan `nilai.js`'s `_atomicUpdate()` ke wrapper `db.js` (pola yang sudah dipakai `penilaian-smp.js`) — menghilangkan kebutuhan modul-modul ini membuka koneksi `indexedDB.open()` sendiri sama sekali. Ini akan menutup kemungkinan drift versi/pola berbahaya serupa muncul lagi di masa depan, tapi merupakan refactor lebih besar (perlu mendesain ulang pola atomic read-modify-write `_atomicUpdate` agar tetap atomic lewat wrapper) — di luar scope hotfix minimal ini.
