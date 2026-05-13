# FLAF Fase 3 — UI Sketch (Prototype Interaktif)

**Status**: Draft Fase 3 · Mei 2026
**Format**: File HTML standalone, buka di browser
**Prasyarat**: Sudah baca `STATE-MACHINE.md` di Fase 2 untuk konteks state

---

## Cara Menjalankan

1. Buka `UI-SKETCH.html` di Chrome / Firefox / Edge / Safari
2. Halaman akan menampilkan device frame (simulasi HP 360px) di tengah
3. Di atas device ada label state aktif (info debug)
4. Di atas label state ada tombol-tombol "jumper" untuk langsung loncat ke state tertentu

**Untuk uji mobile-first**: buka Chrome DevTools (F12), aktifkan device emulator,
pilih "iPhone SE" (375×667) atau lebar manual 360px untuk lihat tampilan di HP kecil.

---

## Yang Bisa Anda Lakukan

### Skenario A — Walk-through Penuh Sebagai Ibu Tini

1. Mulai di state "1. Preview"
2. Pilih mode (Normal direkomendasikan untuk pertama)
3. Tap "Mulai mengajar →"
4. Ikuti seluruh sesi:
   - Pembuka: 3 aktivitas (sambut → sapa kelas → kenalkan waktu)
   - Inti: 3 aktivitas (4 kartu salam → chant → pair work)
   - Penutup: 2 aktivitas (review → goodbye)
5. Tap "Simpan & Selesai" di Closure

**Yang harus Anda perhatikan**:
- Apakah natural berpindah antar aktivitas?
- Apakah bahasa di tombol jelas?
- Apakah informasi yang ditampilkan cukup, atau terlalu padat?

### Skenario B — Test Timer Visible Only

1. Jump ke state "3b. Aktivitas (timer)" — itu pair work
2. Tap "Mulai pair work"
3. **Tunggu 30-60 detik** tanpa tap apapun
4. Lihat timer: hijau → kuning → kuning intens
5. **Tunggu sampai melewati 3 menit** (atau lebih cepat: tap jump lalu kembali)
6. Lihat: timer jadi merah, label berubah ke "lewat — lanjut saat siap"
7. **PENTING**: layar TIDAK berganti otomatis — Anda harus tap "Lanjut" sendiri

**Yang harus Anda perhatikan**:
- Apakah perubahan warna timer terlihat tanpa mengganggu?
- Apakah Anda merasa ditekan untuk lanjut, atau merasa bebas memilih?

### Skenario C — Test Fallback & Mode Override

1. Di aktivitas manapun (rekomendasi: pair work via jumper "3b")
2. Tap "Mulai..." untuk masuk running
3. Tap "⚠ Kondisi kelas?" di footer
4. Pilih salah satu kondisi
5. Lihat instruksi yang muncul + opsi "Mode lebih mudah" (jika kondisi memungkinkan)
6. Tap "Mode lebih mudah" → kembali ke aktivitas, perhatikan mode badge berubah jadi "mudah (override)"

**Yang harus Anda perhatikan**:
- Apakah flow fallback intuitif?
- Apakah instruksi fallback bermanfaat untuk situasi nyata?

### Skenario D — Test Observation Capture

1. Jump ke "4. Observation" langsung, atau
2. Jalankan pair work lengkap (3b → tap Mulai → tap Lanjut)
3. Lihat layar dengan 3 siswa + 4 tag rating per siswa
4. Tap tag untuk pilih rating per siswa (multi-select)
5. Tap "Skip catatan" atau "Lanjut →"

**Yang harus Anda perhatikan**:
- Apakah 3 siswa dengan 4 tag terasa overload, atau pas?
- Apakah 30 detik cukup untuk catat?
- Apakah ada tag yang seharusnya ada tapi tidak ada?

### Skenario E — Test Resume Prompt

1. Jump ke "1b. Resume Prompt"
2. Lihat surface yang muncul saat FLAF detect sesi belum selesai
3. Tap "Lanjut dari Pair Work" — sistem restore ke aktivitas itu di state ready
4. Atau tap "Mulai sesi baru" — sistem reset ke Pembuka

**Yang harus Anda perhatikan**:
- Apakah pesan jelas tanpa membingungkan?
- Apakah kembali ke "ready" (bukan "running") masuk akal?

---

## Yang ADA di Prototype Ini

| State Machine | Ter-implement? |
|---|---|
| SesiPreviewing | ✓ — pilih mode + start |
| SesiResumePrompt | ✓ — 2 pilihan resume |
| FaseEntering | ✓ — transisi label fase |
| AktivitasReady | ✓ — judul + cue + saran observasi |
| AktivitasRunning | ✓ — cue besar + timer (jika ada) |
| Timer visible only | ✓ — 4 stage warna, tidak auto-advance |
| Mode override per aktivitas | ✓ — via fallback |
| FallbackUI (kondisi prompt) | ✓ — overlay bawah |
| ObservationCapture | ✓ — 3-5 siswa + 4 tag |
| FaseSelesai | ✓ — transisi ke fase berikutnya |
| SesiClosure | ✓ — ringkasan + mood + catatan |

---

## Yang TIDAK ADA di Prototype Ini (Sengaja)

Beberapa hal dari STATE-MACHINE.md sengaja **tidak** dibuat di prototype untuk
menjaga scope manageable. Akan dibangun di Fase 5 dengan integrasi modul yang
sudah ada di FLAF:

1. **Persistensi IndexedDB nyata** — semua state cuma in-memory, refresh = reset
2. **Data siswa lintas sesi** — siswa hardcode 8 nama saja
3. **Audio TTS** — tombol "Putar contoh" tidak benar-benar bunyi
4. **Integrasi dengan presensi** — diasumsikan 25 siswa hadir
5. **Integrasi dengan teaching_log** — log tidak ditulis
6. **Edge case error handling** — IDB error, browser close, dll

---

## Yang Harus Anda Putuskan Setelah Review

Setelah Anda coba 5 skenario di atas, Anda akan punya feel untuk flow runtime
baru. Saya minta Anda jawab **3 pertanyaan kunci**:

### Pertanyaan 1 — Apakah ada state yang terasa SALAH?

Maksud "salah" di sini:
- Bahasa tombol membingungkan
- Informasi yang ditampilkan kurang/lebih
- Layout terasa sumpek atau terlalu kosong
- Transisi antar state aneh

Sebutkan state yang bermasalah + apa masalahnya.

### Pertanyaan 2 — Apakah ada state yang KURANG?

Mungkin saat menjalankan sesi, Anda merasa "di sini seharusnya ada layar X" tapi
tidak ada. Contoh hipotesis:
- Apakah perlu surface "Setup Kelas Baru" sebelum sesi pertama?
- Apakah perlu surface "Ringkasan Mid-Sesi" di antara Pembuka dan Inti?
- Apakah perlu shortcut "Skip aktivitas ini"?

### Pertanyaan 3 — Apakah filosofi "guru pegang kendali" terasa?

Spesifik:
- Saat timer habis, apakah Anda merasa ditekan?
- Saat fallback muncul, apakah Anda merasa dikontrol atau dibantu?
- Saat saran observasi muncul, apakah Anda merasa wajib mengikuti?

Kalau jawaban Anda mengisyaratkan filosofi terlanggar di titik tertentu, itu
prioritas tertinggi untuk revisi.

---

## Setelah Anda Review

Kembali dengan salah satu dari:

- **"Setuju, lanjut Fase 4"** → saya mulai Migration Plan
- **"Ada hal yang ingin saya revisi di [state X]"** → kita revisi sebelum lanjut
- **"Saya belum yakin di bagian [Y]"** → saya elaborasi

Tidak buru-buru. Prototype ini menggambarkan ratusan keputusan kecil — tidak
mungkin semua benar di percobaan pertama.

---

## Akhir README
