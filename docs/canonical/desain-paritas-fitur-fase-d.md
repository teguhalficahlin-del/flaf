# Desain Paritas Fitur Fase D — Overlay Penilaian, Kondisi Darurat, TTS

> Dokumen desain saja. Tidak ada kode implementasi di sini. `sesi-runtime-smp.js` belum disentuh.

---

## 1. Overlay Penilaian Formatif

### a) Lokasi implementasi di `sesi-runtime.js` (SD)

- Tombol pemicu: `_renderRunning()` baris ~843 — `<button id="sr-btn-penilaian">📋 Penilaian Formatif dan Observasi</button>`, hanya muncul jika `faseName === 'inti'` atau (`faseName === 'penutup'` dan `isLast`).
- Overlay utama: `_renderPenilaianOverlay()` baris 979–~1330 — accordion per siswa, 2 mode (`cepat`/`detail`), pagination 5 siswa/halaman, draft autosave.
- Persist akhir: `savePenilaian()` di `storage/siswa-history.js` baris 35–73, dipanggil dari `sesi-runtime.js` baris 1286.

### b) Dependensi data

- Field dari TP SD: `tp.nomor` (jadi `tpNomor` di key penilaian — **numerik**), `_state.rombel.id` (kelasId), `_state.sesiId`, `_state.siswaList`.
- IDB: store `kv` (draft sementara, key `draft_penilaian_${kelasId}_${tpId}`) via `storage/db.js` (`DB_VERSION = 11`), dan store `penilaian_log` (hasil final) di `storage/siswa-history.js` (`DB_NAME='flaf_db'`, `DB_VERSION = 10` — **catatan: dua DB_VERSION berbeda di dua file untuk DB yang sama, sudah ada sebelum Fase D, bukan isu baru dari analisis ini**).
- Key composite penilaian_log: `kelasId_tpNomor_sesiId_siswaId`.

### c) Field setara di skema Fase D

- Tidak ada `assessment_overlay` di Fase D. Yang setara secara fungsi: step bertipe **CHECK** (`observe[]`, `teacher_next_action.{ready,needs_model,needs_repeat}`).
- **Perbedaan filosofis penting**: CHECK di Fase D didesain *check_without_score = true* (constraint wajib, divalidasi `tools/validate-fase-d.js` aturan A7 — field skor/grade/value/points/percentage DILARANG ada di step CHECK). Overlay penilaian SD justru berbasis skor (`capaian: 85|75|65` atau L/S/R 0–100).
- `tp.nomor` (numerik) tidak ada di Fase D — penanda TP adalah `metadata.tp_id` (string path) atau `metadata.pattern_id` (string, misal `"PAT-7-01"`).

### d) Tabel pemetaan field

| Field SD | Field Fase D | Catatan |
|---|---|---|
| `tp.nomor` (key penilaian) | `metadata.pattern_id` | Beda tipe (number vs string) — key composite perlu disesuaikan, bukan reuse string langsung |
| `langkah.assessment_overlay` (trigger overlay) | TIDAK ADA — trigger berbasis `step.type === 'CHECK'` | Perlu pemicu baru, bukan field flag |
| `capaian: 85\|75\|65` / L,S,R 0–100 | TIDAK ADA, dilarang oleh constraint `check_without_score` | Tidak bisa di-port apa adanya — bertentangan dengan desain Fase D |
| `step.observe[]` (Fase D) | — | Ini observasi kualitatif, bukan skor; tidak ada equivalent di SD |
| `step.teacher_next_action.{ready,needs_model,needs_repeat}` | — | Mirip "hasil keputusan guru" tapi bentuknya pilihan kategorikal, bukan nilai |

### e) Usulan pendekatan adaptasi

Karena Fase D punya constraint eksplisit "tanpa skor" untuk CHECK, overlay penilaian SD (berbasis angka 85/75/65 atau L/S/R) **tidak bisa dipakai langsung** — ini bukan gap implementasi tapi perbedaan desain pedagogis yang disengaja. Pendekatan yang lebih cocok: overlay observasi ringan yang mencatat `teacher_next_action` per siswa (ready/needs_model/needs_repeat) ke store IDB baru atau store `penilaian_log` dengan skema longgar (field `capaian` diisi `null`, field baru `next_action` ditambahkan tanpa breaking schema lama). Keputusan ini perlu dikonfirmasi ke pemilik produk sebelum BUILD karena menyangkut filosofi assessment, bukan sekadar UI.

---

## 2. Kondisi Darurat Kelas

### a) Lokasi implementasi di `sesi-runtime.js` (SD)

- Tombol pemicu: `_renderRunning()` baris 841 — `<button id="sr-btn-kondisi">⚠ Kondisi kelas bermasalah?</button>`, selalu tampil (tidak bergantung field TP).
- Overlay tahap 1: `_renderKondisiOverlay()` baris 901–939 — daftar `KONDISI_LIST` statis (5 opsi: ribut, energi turun, siswa pasif, waktu mepet, lancar).
- Overlay tahap 2: `_renderFallbackOverlay()` baris 943–975 — menampilkan teks dari `FALLBACK_GENERIC[kondisi]`.

### b) Dependensi data

- **Penting**: fitur ini TIDAK membaca `langkah.darurat` sama sekali untuk overlay-nya. `langkah.darurat` (baris 807–811) hanya teks statis inline di body langkah, terpisah dari overlay `_renderKondisiOverlay`/`_renderFallbackOverlay`.
- `FALLBACK_GENERIC` adalah map konstanta generik (didefinisikan di scope modul, tidak per-TP, tidak per-fase) — tidak ada dependensi IDB/DB_VERSION untuk fitur ini.

### c) Field setara di skema Fase D

- `langkah.darurat` (teks inline, SD) → **TIDAK ADA** field eksplisit di metadata/resources Fase D. Yang paling dekat secara fungsi adalah step **BOOST** (`trigger[]`, `action[]`) — tapi BOOST dirancang sebagai respons ke kondisi belajar siswa per-pattern (dipicu observasi CHECK), bukan kondisi kelas situasional darurat (ribut/energi turun/waktu mepet) seperti overlay SD.
- Overlay `_renderKondisiOverlay`/`_renderFallbackOverlay` itu sendiri generik dan tidak baca field TP apa pun — jadi secara teknis **bisa diadaptasi tanpa perlu field baru di Fase D**, karena overlay SD juga tidak bergantung pada `langkah.darurat`.

### d) Tabel pemetaan field

| Field SD | Field Fase D | Catatan |
|---|---|---|
| `KONDISI_LIST` (konstanta statis) | TIDAK ADA, tidak perlu — bisa direuse langsung | Overlay generik, tidak terikat skema TP |
| `FALLBACK_GENERIC` (konstanta statis) | TIDAK ADA, tidak perlu — bisa direuse langsung | sama seperti di atas |
| `langkah.darurat` (teks inline) | TIDAK ADA equivalent | Bukan dependensi overlay; fallback: tampilkan teks generik saja seperti SD, atau ambil dari `step.trigger`/`step.action` BOOST bila step BOOST sedang aktif |

### e) Usulan pendekatan adaptasi

Karena logic overlay-nya generik dan tidak membaca field TP, fitur ini bisa diadaptasi ke `sesi-runtime-smp.js` hampir tanpa perubahan data — cukup port dua fungsi overlay dan dua konstanta. Satu-satunya keputusan terbuka: apakah konten `FALLBACK_GENERIC` (saran teks per kondisi) perlu disesuaikan bahasa/konteksnya untuk siswa SMP, atau dipakai apa adanya.

---

## 3. TTS untuk model sentences

### a) Lokasi implementasi di `sesi-runtime.js` (SD)

- Player: `_srTtsPlay()` baris 213–249 (Web Speech API, `en-US`, rate 0.85), `_srTtsStop()` baris 191–199, `_srTtsShowError()` baris 201–211.
- Parser sumber teks: baris 588–693 — `langkah.teks` di-split berdasar marker literal `UCAP:` di dalam string, di-regex jadi array kalimat, lalu dirender sebagai `.sr-ucap-block` dengan tombol `.sr-tts-ucap-btn`.
- Binding klik: baris 847–856 — ambil `btn.dataset.kalimat.split('|||')` lalu panggil `_srTtsPlay(kalimatArr, btn)`.

### b) Dependensi data

- Field SD: `langkah.teks` (field bebas-teks, marker `UCAP:` inline) — tidak ada field terstruktur terpisah untuk audio. Tidak ada IDB/store yang terlibat (TTS murni client-side, tidak dipersist).

### c) Field setara di skema Fase D

- Fase D sudah punya struktur eksplisit untuk ini — **lebih baik daripada SD**: `resources.model_sentences[{id, text}]`, direferensikan oleh `step.sentence_refs[]` (di step MODEL dan REPEAT). Tidak perlu parsing teks dengan regex sama sekali.
- `resources.visual_cues[]` dan `resources.gesture_cues[]` adalah pendamping (deskripsi visual/gestur), bukan audio — tidak relevan untuk TTS tapi bisa ditampilkan berdampingan.

### d) Tabel pemetaan field

| Field SD | Field Fase D | Catatan |
|---|---|---|
| `langkah.teks` dengan marker `UCAP:` (parsed regex) | `resources.model_sentences[].text`, diacu via `step.sentence_refs[]` | Fase D sudah terstruktur — TIDAK perlu parser regex baru |
| `btn.dataset.kalimat` (array kalimat hasil parse, dipisah `\|\|\|`) | Array hasil `step.sentence_refs.map(id => lookup(model_sentences, id).text)` | Lookup sudah ada helper `_lookupById()` di `sesi-runtime-smp.js` baris 107–109 |

### e) Usulan pendekatan adaptasi

Ini adaptasi paling sederhana dari ketiganya: cukup port `_srTtsPlay`/`_srTtsStop`/`_srTtsShowError` (logic Web Speech API-nya generik, tidak spesifik SD) dan ganti sumber kalimat dari hasil parsing regex `UCAP:` menjadi hasil `_lookupById()` atas `sentence_refs` pada step MODEL/REPEAT — tidak perlu field skema baru di Fase D karena `model_sentences` sudah lebih siap pakai daripada sumber teks SD.

---

## Ringkasan Prioritas (usulan, bukan keputusan)

1. **TTS** — paling murah untuk diadaptasi, tidak ada konflik filosofi data.
2. **Kondisi Darurat** — murah juga karena generik, hanya perlu konfirmasi konten teks.
3. **Overlay Penilaian** — butuh keputusan produk dulu (skor vs tanpa-skor) sebelum BUILD, karena bertentangan dengan constraint `check_without_score` di Fase D.
