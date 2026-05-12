# FLAF — Catatan Migrasi v3 → v4 (Hybrid Aktivitas)

**Status**: Draft Fase 1 · Mei 2026
**Untuk siapa**: Penulis kurikulum FLAF (Anda sendiri) saat migrasi TP 02-18 nanti.
**Pra-syarat**: Sudah baca SCHEMA.md dan sudah lihat tp-01.js sebagai contoh.

---

## 1. Urutan Migrasi yang Disarankan

**Jangan migrate semua TP sekaligus.** Lakukan bertahap dengan urutan ini:

1. **TP 01** — Pilot (sudah dilakukan, ada di tp-01.js)
2. **TP 02** — Validasi pola: TP 02 ("Introducing Myself") sudah punya pair work
   (walk-and-talk di Inti) di v3, jadi migrasi seharusnya straightforward.
   Kalau TP 02 berhasil dimigrate **tanpa** perlu revisi struktur skema,
   skema kita stabil dan bisa lanjut ke TP lain.
3. **TP 03-06** — TP fondasi (interaksi dasar). Pair work harus eksplisit di Inti.
4. **TP 07-12** — TP tematik (kosakata). Aktivitas chant + game lebih dominan.
5. **TP 13-18** — TP integrasi. Aktivitas lebih kompleks, durasi pair lebih panjang.

**Aturan**: Jangan migrate TP berikutnya sebelum TP sebelumnya diuji jalan
end-to-end di runtime baru.

---

## 2. Checklist Per TP yang Dimigrate

Untuk setiap TP, kerjakan checklist ini berurutan:

### Fase A — Analisis (sebelum nulis kode)

- [ ] Baca v3 TP tersebut di fase-a.js
- [ ] Hitung berapa langkah per fase
- [ ] Tandai langkah-langkah yang **berkelompok** sebagai satu aktivitas
      (mis: 3 langkah berturut-turut tentang chorus → 1 aktivitas chorus)
- [ ] Identifikasi: ada pair work eksplisit? Kalau tidak ada, tambah minimal 1
- [ ] Identifikasi: ada movement activity? (Dok 03 §15)
- [ ] Identifikasi: aktivitas mana yang cocok jadi observation_window
      (rekomendasi: minimal 2 di Inti)

### Fase B — Strukturisasi

- [ ] Pecah setiap fase menjadi 3-6 aktivitas (jangan lebih dari 6 — terlalu fragmen)
- [ ] Beri ID konsisten: `tp{NN}-{fase}-{slug-judul}`
      (mis: `tp02-inti-pair-introduce`)
- [ ] Pilih `tipe` aktivitas dari enum di SCHEMA §4.1
- [ ] Tetapkan `durasi_target_detik` dan `durasi_min_detik` per aktivitas
      (totalnya harus ≈ durasi fase × 60)

### Fase C — Pengisian Konten

- [ ] Ekstrak `micro_script` dari langkah `instruksi` di v3
      (sederhanakan, maks 2 kalimat per slot)
- [ ] Ekstrak `audio_cue` dari langkah `audio` dan `respons_siswa` di v3
- [ ] Tulis 3 mode (mudah/normal/tantangan) untuk setiap aktivitas
      yang bukan fundamental (fundamental = farewell, validasi)
- [ ] Untuk setiap mode, tulis `bantuan` dan `panjang_speaking` yang konkret
      — jangan abstrak

### Fase D — Resiliensi (Fallback)

- [ ] Setiap `pair_work` wajib punya `fallback.pair_tidak_jalan`
- [ ] Setiap aktivitas dengan media wajib punya `fallback.media_tidak_tersedia`
      ATAU dipastikan aktivitas masih jalan tanpa media
- [ ] Setiap aktivitas dengan durasi >5 menit wajib punya `fallback.waktu_mepet`
- [ ] Aktivitas Inti yang berenergi tinggi wajib punya `fallback.kelas_ribut`

### Fase E — Media

- [ ] Konversi `persiapan[]` (string) → `media[]` (object dengan ID)
- [ ] Setiap media yang printable wajib punya `pdf_ref` dan `pdf_halaman`
- [ ] Tandai media yang reusable lintas TP dengan `reusable_lintas_tp: true`

### Fase F — Verifikasi

- [ ] Jalankan `node --check tp-NN.js` — syntax harus valid
- [ ] Cek total durasi aktivitas per fase = durasi fase yang ditetapkan
- [ ] Cek setiap aktivitas dengan `observation.aktif=true` punya `n_siswa` dan `indikator`
- [ ] Pertahankan `langkah[]` v3 apa adanya untuk backward compat
- [ ] Pertahankan `persiapan[]` v3 untuk backward compat

---

## 3. Pola Konversi Langkah → Aktivitas (Pattern Library)

Saat membaca v3, gunakan pola ini untuk mengelompokkan langkah:

### Pola 1: Modeling + Chorus
```
v3:
  - instruksi: "Tulis kalimat di papan. Tunjuk."
  - audio:     "My name is Budi."
  - respons:   "My name is ..."

v4 → 1 aktivitas tipe `modeling`:
  micro_script.pembuka: "Tulis di papan. Tunjuk."
  audio_cue.contoh_guru: "My name is Budi."
  audio_cue.contoh_siswa: "My name is ..."
```

### Pola 2: Permainan Bergerak
```
v3:
  - instruksi: "Permainan walk and talk: siswa berjalan 2 menit..."
  - audio:     "Hello! My name is..."
  - respons:   "Hi! My name is..."

v4 → 1 aktivitas tipe `game_movement` ATAU `pair_work` (kalau interaksi 2 arah):
  - Set durasi_target_detik = 120 (2 menit)
  - advance.mode = 'timer_with_grace'
  - observation.aktif = true (peluang observasi sambil pantau)
```

### Pola 3: Konteks Nyata (PM Meaningful)
```
v3:
  - instruksi: "Hubungkan dengan kehidupan nyata..."
  - audio:     "What do you say to your parents..."
  - respons:   "Good morning, Mom!"

v4 → 1 aktivitas tipe `meaningful_link`:
  pm: 'meaningful'
  observation.aktif = false (refleksi, bukan observasi formal)
```

### Pola 4: Diferensiasi (v3) → Mode (v4)
```
v3:
  { tipe: 'diferensiasi', sudah: 'Buat kalimat sendiri', belum: 'Bimbing satu per satu' }

v4 → tidak menjadi aktivitas terpisah!
  Sebaliknya: konten "sudah" masuk ke `mode.tantangan` aktivitas terkait,
  konten "belum" masuk ke `mode.mudah`.
  Tambahkan `mode.normal` di antaranya.
```

### Pola 5: Darurat (v3) → Fallback (v4)
```
v3:
  { tipe: 'darurat', teks: 'Langsung ke latihan berpasangan...' }

v4 → tidak menjadi aktivitas!
  Pindahkan teks ke `fallback.waktu_mepet` aktivitas terdekat sebelumnya.
```

### Pola 6: Refleksi Penutup
```
v3:
  - instruksi: "Refleksi: tanya siswa apa salam favorit hari ini..."

v4 → 1 aktivitas tipe `reflection`:
  observation.aktif = false
  advance.mode = 'manual'
  Mode tetap perlu ada (siswa pemalu vs aktif punya gaya refleksi beda)
```

---

## 4. Pertanyaan yang Sering Muncul

### "Apakah saya harus tambah pair_work di setiap TP?"

Tergantung TP. Beberapa TP fokus listening (mis: TP yang fokus pada lagu/chant),
pair work tidak natural. Tapi minimal **70% TP** harus punya pair work di Inti
(Dok 03 §9, §4).

Aturan: kalau TP punya >=2 vocabulary baru yang harus dipraktikkan, pair work
harus ada. Kalau TP fokus exposure/awareness (mis: kenal warna saja), pair work
opsional.

### "Bagaimana kalau aktivitas terlalu sederhana untuk 3 mode?"

Boleh `mode: null` untuk aktivitas fundamental. Contoh di tp-01.js:
`tp01-penutup-farewell` punya `mode: null` karena "Goodbye bersama" tidak
butuh diferensiasi.

**Tapi jangan abuse ini**: aturannya 80% aktivitas wajib punya mode, 20%
boleh tidak.

### "Berapa observation_window per TP?"

Minimal 2 (di Inti), maksimal 4. Lebih dari 4 = guru sibuk mencatat, bukan
mengajar. Lebih dari 2 = ada keseimbangan observasi sepanjang sesi.

Pengecualian: TP terakhir per kelompok (TP 06, TP 12, TP 18) boleh punya
lebih banyak observation untuk asesmen kumulatif.

### "Apakah durasi_target_detik dijumlahkan harus pas dengan durasi fase?"

Mendekati, tidak harus pas. Aturan: total `durasi_target_detik` aktivitas
≤ `durasi` fase × 60. Sisa waktu = buffer untuk transisi.

Contoh TP 01 Inti: durasi 30 menit = 1800 detik.
Total aktivitas: 300+240+240+420+180+120 = 1500 detik.
Buffer: 300 detik (5 menit) untuk transisi antar aktivitas dan fallback.

### "Apakah saya boleh hapus langkah[] v3 setelah migrasi selesai?"

**Belum.** Tunggu sampai semua 18 TP selesai migrate DAN runtime baru sudah
production-stable selama minimal 2 sprint. Baru cleanup di sprint berikutnya.

---

## 5. Validasi Otomatis (Belum Ada — Roadmap)

Roadmap pasca-Fase 5: tulis script validator `validate-tp.js` yang:

1. Iterate semua TP di fase-a.js
2. Untuk setiap TP, cek apakah punya `aktivitas[]` (sudah migrate) atau hanya `langkah[]`
3. Untuk TP yang sudah migrate, validasi semua kontrak SCHEMA §8
4. Report ke console: "TP 03 valid v4 ✓" atau "TP 05 invalid v4: pair_work tanpa fallback.pair_tidak_jalan"
5. Exit dengan error code 1 jika ada invalid (untuk CI/build pipeline)

Sampai validator ini ada, validasi dilakukan **manual** mengikuti checklist §2.

---

## 6. Estimasi Waktu Migrasi Per TP

Berdasarkan effort TP 01:

| Tahap | Estimasi |
|---|---|
| Fase A (analisis) | 30 menit |
| Fase B (strukturisasi) | 20 menit |
| Fase C (pengisian) | 60-90 menit |
| Fase D (resiliensi) | 30 menit |
| Fase E (media) | 15-30 menit |
| Fase F (verifikasi) | 15 menit |
| **Total per TP** | **3-4 jam** |

Total 17 TP tersisa × 3-4 jam = **50-70 jam kerja**. Sebar ke beberapa
minggu, jangan dipaksakan dalam 1-2 hari (kualitas akan turun).

---

## 7. Apa yang Tidak Boleh Berubah Saat Migrasi

Hal-hal yang harus tetap identik dengan v3 (substansi, bukan struktur):

- **Vocabulary target** (`vocab[]` level TP) — sama persis
- **Indikator pencapaian** — sama persis
- **Tujuan pembelajaran (deskripsi)** — sama persis
- **Kalimat bahasa Inggris di audio_cue** — sama persis dengan langkah `audio`/`respons_siswa` di v3
- **Tag PM (mindful/meaningful/joyful)** — sama persis
- **Durasi total per fase** — sama persis

Yang BOLEH berubah saat migrasi:

- Struktur (langkah flat → aktivitas berhirarki)
- Pengelompokan langkah ke dalam aktivitas
- Tambahan field baru (mode 3-tier, fallback, observation)
- Pemecahan teks instruksi panjang ke `micro_script` per slot
- Restruktur media dari string array ke object array dengan ID

---

## 8. Risiko & Mitigasi

| Risiko | Mitigasi |
|---|---|
| Saya migrate, lalu mau ubah skema lagi (rework) | Selesaikan TP 02 dulu sebagai validasi. Kalau lolos, skema stabil. |
| Inkonsistensi penamaan ID aktivitas | Ikuti pola `tp{NN}-{fase}-{slug}` strict |
| Lupa update `data/index.js` saat aktivasi runtime baru | Buat checklist Fase 5 untuk aktivasi |
| Pair work di TP yang substansinya belum siap | Jangan paksakan. Tambah pair_work hanya jika natural untuk konten TP itu |
| Mode "tantangan" terlalu sulit untuk anak kelas 1 | Mode tantangan ≠ grammar lebih sulit. Mode tantangan = bantuan lebih sedikit, spontanitas lebih tinggi (Dok 06 §6). |

---

## 9. Komunikasi Dengan Engineer FLAF

Saat Anda selesai migrate satu TP dan butuh dia di-test di runtime baru,
informasi berikut harus disertakan ke engineer:

1. Nomor TP yang baru selesai migrate
2. List perubahan substansi dari v3 (kalau ada — selain restruktur)
3. Aktivitas baru yang perlu test khusus (mis: tipe pair_work baru pertama)
4. Mode yang paling sering dipakai (untuk testing default)

Format: 1 message Slack/issue tracker dengan checklist.

---

## Akhir MIGRATION-NOTES.md
