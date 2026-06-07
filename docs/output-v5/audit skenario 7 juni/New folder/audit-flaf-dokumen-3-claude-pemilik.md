# Dokumen 3 — Panduan Kerja Claude dan Pemilik Proyek
Berlaku untuk seluruh Fase A (TP01–TP18), Fase B (TP01–TP22), dan Fase C (TP01–TP22).

---

## Peran

- **Pemilik proyek** — pemegang keputusan tunggal. Tidak ada perubahan tanpa konfirmasi eksplisit.
- **Claude** — arsitek-konsultan senior. Mereview Output 1, memfilter false positive, memetakan temuan, menyusun prompt Claude Code, dan memverifikasi hasil eksekusi. Semua penjelasan dari sudut pandang guru, bukan teknis.

---

## Urutan Kerja Per TP

1. ChatGPT audit file → hasilkan Output 1
2. Claude review Output 1 → filter false positive → konfirmasi ke pemilik
3. Pemilik setujui temuan → Claude susun prompt Claude Code
4. Claude Code eksekusi edit → tampilkan semua field teks yang diubah
5. Claude verifikasi hasil edit → konfirmasi ke pemilik
6. Pemilik konfirmasi → Claude Code commit + push
7. Claude Code bump SW dalam commit terpisah + push
8. Pemilik uji browser → laporkan hasil ke Claude
9. Claude verifikasi screenshot → semua ceklis lolos → TP diterima

---

## Filter False Positive Wajib

Sebelum menyetujui eksekusi, Claude wajib memeriksa:

- **S1** — apakah kata yang tampak abstrak sudah dijawab oleh kalimat berikutnya?
- **S2** — apakah benda atau peran yang dirujuk sudah diperkenalkan sebelumnya?
- **S2b** — apakah lompatan posisi yang tampak sebenarnya sudah jelas dari konteks langkah sebelumnya?
- **S3** — apakah benar-benar dua fungsi pragmatik berbeda, atau satu unit ujaran natural?
- **S4** — apakah `→ Siswa/Kiki/Momo` berada setelah token UCAP (benar) atau di dalam tanda kutip ucapan guru (salah)?
- **S5** — apakah subjek narasi adalah guru atau siswa? Jika siswa dan bukan arahan guru, tidak perlu dibungkus AKSI
- **S8** — apakah placeholder ada di dalam UCAP atau hanya di AKSI?
- Keterangan konteks dalam kurung siku yang bukan aksi fisik — biarkan
- Lirik lagu dalam AKSI — biarkan

---

## Ceklis Lolos Per TP

### Bagian 1 — Review Output 1 sebelum eksekusi
- [ ] Semua temuan S1 valid — ambiguitas tidak dijawab kalimat berikutnya
- [ ] Semua temuan S2 valid — tidak ada benda atau peran yang muncul tanpa perkenalan
- [ ] Semua temuan S2b valid — tidak ada lompatan posisi yang nyata
- [ ] Semua temuan S3 valid — benar-benar dua fungsi pragmatik berbeda
- [ ] Semua temuan S4 valid — RULE R1 sudah diterapkan
- [ ] Semua temuan S5 valid — subjek narasi adalah guru atau arahan guru
- [ ] Semua temuan S8 valid — S8-R1 sudah diterapkan
- [ ] Tidak ada false positive

### Bagian 2 — Review hasil edit sebelum commit
- [ ] Setiap token UCAP satu unit ujaran
- [ ] Setiap token AKSI satu tindakan fisik yang konkret dan operasional — tidak ada istilah editor (demo, chunk, reset), tidak ada subjek "Guru", tidak ada UCAP terbenam dalam AKSI
- [ ] Rantai aksi logis — tidak ada lompatan posisi
- [ ] Tidak ada placeholder dalam UCAP
- [ ] Semua `---` di titik yang tepat
- [ ] Semua langkah yang butuh transisi sudah punya instruksi keluar
- [ ] UCAP berurutan yang collapse sudah dievaluasi — pisah jika fungsi berbeda

### Bagian 3 — Setelah eksekusi Claude Code
- [ ] Jumlah edit sesuai temuan yang disetujui
- [ ] Commit berhasil dengan pesan deskriptif
- [ ] Verifikasi file aktual — semua field teks yang diubah sudah ditampilkan dan dicek sebelum bump SW
- [ ] Tidak ada token UCAP menyatu dengan AKSI tanpa pemisah
- [ ] Cek pola S4 yang sering terlewat: `AKSI: ... → "kalimat guru"` dan `AKSI: ... [kalimat guru]`
- [ ] Commit hash baru berbeda dari commit sebelumnya — jika sama, edit gagal, kirim ulang
- [ ] Push ke origin/main dikonfirmasi
- [ ] SW di-bump dalam commit terpisah dan sudah di-push

### Bagian 4 — Uji browser
- [ ] Hard refresh setelah bump SW
- [ ] Setiap layar yang berubah render sesuai ekspektasi
- [ ] Tidak ada placeholder tampil di blok UCAP
- [ ] Setiap kalimat guru tampil dalam blok UCAP kuning sendiri
- [ ] Setiap aksi guru tampil sebagai token AKSI terpisah — tidak terbenam dalam prosa
- [ ] Tombol 🔊 TTS tersedia di setiap blok UCAP
- [ ] Semua ceklis lolos → TP diterima → lanjut TP berikutnya

---

## Prinsip Teknis Runtime

- `_collapseUcap()` menggabungkan token UCAP berurutan menjadi satu blok kuning. Untuk memisahkan dua blok UCAP yang berdekatan, sisipkan token AKSI di antara keduanya.
- `→ Siswa:`, `→ Kiki:`, `→ Momo:` dirender sebagai teks biasa di luar blok kuning — bukan pelanggaran S4.
- Bump SW selalu commit terpisah, selalu di-push ke origin/main sebelum uji browser.
- Jika Claude Code mengirim konfirmasi dengan commit hash yang sama dengan sebelumnya — edit gagal, kirim ulang dengan instruksi string exact yang lebih eksplisit.
- Jangan buat prompt TP berikutnya sebelum TP saat ini diterima dan uji browser lolos.
