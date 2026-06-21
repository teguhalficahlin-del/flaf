# HANDOFF — FLAF Fase D
SW aktif: flaf-v257
Terakhir diupdate: 20 Juni 2026

---

## META — Cara Kerja Tim & Konteks Lanjutan (baca SEBELUM sprint manapun di bawah)

### Untuk Claude Code yang baru membuka sesi ini

Ini BUKAN proyek baru. Anda melanjutkan pekerjaan yang sudah berjalan
lama dengan konvensi yang sudah mapan — JANGAN mulai dari asumsi nol,
JANGAN pertanyakan ulang keputusan arsitektur yang sudah ditetapkan
(ditandai eksplisit di tiap sprint sebagai "Keputusan yang Jangan
Dipertanyakan Ulang"). Baca dokumen ini dulu sebelum menyentuh kode
apapun.

### Konteks proyek

FLAF (Functional Language Accumulation Framework) — PWA offline-first
untuk guru Bahasa Inggris Indonesia, jenjang SD (Fase A-C, kelas 1-6)
dan SMP (Fase D, kelas 7-9). Stack: Vanilla JS ES Modules, IndexedDB,
Service Worker, GitHub Pages. Supabase HANYA untuk aktivasi lisensi.

Romo adalah satu-satunya developer, penulis kurikulum, DAN pengguna
nyata aplikasi ini — guru SD sungguhan yang memakai FLAF di kelasnya
sendiri. Bug yang ditemukan/diperbaiki biasanya berasal dari
pengalaman mengajar nyata Romo, bukan laporan QA buatan — kalau Romo
bilang "ini yang saya alami sehari-hari", itu prioritas tinggi,
bukan sekadar anekdot.

### Peran tiga pihak (jangan tertukar)

1. **Romo** — arsitek dan pengambil keputusan akhir, terutama untuk
   keputusan produk/UX. Juga relay manusia antara Claude (chat) dan
   Claude Code — paste-menempel terjadi manual.
2. **Claude (chat)** — analis/reviewer, TIDAK punya akses repo
   langsung. Tugas: terjemahkan kebutuhan Romo jadi prompt presisi
   untuk Claude Code, review SETIAP hasil dengan kode literal (bukan
   ringkasan), tahan approval sampai bukti nyata terlihat, desain
   arsitektur sebelum BUILD dimulai. Jika memberi pilihan atau
   rekomendasi, jelaskan dari sudut pandang guru pengguna. Hasil
   analisa juga disajikan dalam sudut pandang guru pengguna.
3. **Claude Code** — eksekutor dengan akses repo nyata. Tugas:
   ANALYZE dulu (baca kode aktual) sebelum menulis kode, tampilkan
   diff SEBELUM/SESUDAH LITERAL (git diff/git show — bukan
   dijelaskan ulang dengan kata-kata) sebelum setiap commit, JANGAN
   commit/deploy/SW bump tanpa approval eksplisit dari Claude (chat)
   — walau instruksi sebelumnya sudah menyebut langkah berikutnya
   secara berurutan, urutan instruksi BUKAN izin lompat ke akhir
   tanpa checkpoint di tengah.

### Alur kerja standar (ANALYZE → DESIGN → BUILD → HARDEN → VALIDATE)

1. ANALYZE — baca struktur file aktual dulu, JANGAN asumsi nama
   field/fungsi dari ingatan atau dari nama yang "terdengar benar".
2. DESIGN — presentasikan rencana perubahan SEBELUM menulis kode,
   tunggu konfirmasi.
3. BUILD — kerjakan file per file, mulai dari yang paling terisolasi/
   rendah risiko ke yang paling berisiko.
4. HARDEN — setiap diff WAJIB ditampilkan literal (git diff -U10+
   atau git show) sebelum direview. Ringkasan/poin-poin TIDAK CUKUP
   — riwayat proyek membuktikan ringkasan berkali-kali menyembunyikan
   bug nyata yang baru ketemu setelah kode literal dibaca.
5. VALIDATE — test via Playwright BROWSER NYATA dengan BUKTI (output
   command, dump data asli, screenshot) — bukan "saya cek kode dan
   seharusnya benar". Kalau test diminta mencakup skenario tertentu,
   penuhi PERSIS cakupan itu — jangan kirim versi yang dipersempit
   diam-diam.

### Cara kerja spesifik — pelajaran dari sprint resume (19-20 Juni 2026)

- Field identitas Fase D = `metadata.pattern_id` untuk matching
  sesi/penilaian. `metadata.tp_id` (path file) field TERPISAH untuk
  lookup objek TP di dashboard.js — dua field beda tujuan, jangan
  dicampur.
- SD dan SMP selalu isolasi storage terpisah (`sesi_aktif` vs
  `sesi_aktif_smp`, `penilaian_log` vs `penilaian_log_smp`) — pola
  tetap, jangan digabung demi "efisiensi".
- `runtime[]` dan `skenario{}` di TP Fase D hidup berdampingan
  dengan peran berbeda (manifest step vs konten aktif). JANGAN
  asumsi salah satu "lama/mati" tanpa cek data file produksi asli.
- Key penyimpanan tunggal (bukan per-TP) seperti `sesi_aktif`/
  `bp_resume` — pertimbangkan SELALU skenario guru mengajar banyak
  kelas berbeda. Operasi hapus pada logic prioritas HARUS dicek
  same-target (TP+rombel sama) dulu, supaya tidak menghapus data
  sesi/checkpoint kelas LAIN yang tidak terkait.
- Konteks low-end Android kelas nyata tetap berlaku untuk semua
  keputusan UX — ikuti pola yang SUDAH ADA dan dikenal guru, jangan
  ciptakan pola baru kalau yang lama sudah terbukti jalan.

### Status terkini

SW aktif: flaf-v257. Validasi lapangan oleh Romo BELUM dikonfirmasi
selesai — cek dengan Romo sebelum menganggap closed.

---

## Sprint Selesai (ringkasan)

### 1. Sprint B — Test Suite Otomatis

tools/validate-fase-d.js — validator VR-1/VR-2, struktur 7-step,
constraint schema, dangling refs, enum, durasi. 66/66 LOLOS.
Commits: e7c1a41 → 88e3883.

### 2. Sprint C — Integrasi PWA (SW v246→v247)

**Pekerjaan:** classroom_setup[] 66 TP, layar Siapkan Kelas, tab
Materi dashboard, paritas fitur TTS/kondisi darurat/observasi formatif
di sesi-runtime-smp.js, kurikulum.js route Kelas 7-9 ke placeholder
Fase D. IDB v11→v12 (store baru `penilaian_log_smp`).
Commits: cbc1390 → ab95149. Test: 6/8 PASS (2 FAIL = bug pre-existing
DB_VERSION, bukan regresi).

### 3. Hotfix DB_VERSION SD (16 Juni 2026)

**Root cause:** `siswa-history.js` dan `nilai.js` hardcode DB_VERSION
lokal, VersionError saat DB sudah v12. Fix: satu sumber DB_VERSION +
gating `await db.init()`. Race condition fresh install juga ditangani.
Commits: 19d2e0e, d93e41d. Test: semua PASS.

### 4. Sprint Skenario Ajar Fase D (17 Juni 2026, SW v250)

66 skenario .txt dalam format AKSI/UCAP per langkah. K7: 24/24
(anchor: skenario-7-01.txt, skor 9.9/10). K8: 24/24. K9: 18/18.
Commit: d11fbd4.

### 5. Sprint Renderer Skenario Fase D (18 Juni 2026, SW v251)

Konversi 66 .txt → field skenario{} di TP .js via tools/convert-*.js.
Renderer paralel di sesi-runtime-smp.js (+227 baris) + CSS (+223 baris).
Gate: skenario{} ada → renderer baru, tidak → runtime[] fallback.
REPEAT per kalimat, CHECK dua jalur, bantuan/darurat collapsed.
Commits: d11fbd4 → f8c6765. Test: 7/7 PASS.

### 6. Sprint Observasi Formatif & UI Audit (19 Juni 2026, SW v253)

**UI audit:** fix CSS cue_sisa, color-text-dim, font-size 12px min,
--color-surface collision. **UCAP audit:** 2.288 UCAP, 13 genuine fix,
109 fix determinisme transisi. **Redesign Observasi Fase A-C:** hapus
Mode Detail, hierarki 3 level (L1 Sudah Bisa/Perlu Bantuan → L2
BSB/BSH/MB/BB → L3 tags multi-select). Commits: 581b316 → 4a38716.
Test: 6/6 PASS.

### 7. Sprint Observasi Formatif Fase D (19 Juni 2026, SW v254)

Replace overlay lama (flat tags + textarea) → hierarki L1/L2/L3
identik Fase A-C. L3 generik per L2, Bahasa Indonesia (bukan dari
observe[]). savePenilaianSMP() atomic batch. Tombol visible di semua
step. Commits: 123e23b → 0202141. Test: 7/7 PASS.

### 8. Sprint CHECK Redesign & Diferensiasi Baru (19 Juni 2026, SW v255)

**Diferensiasi:** field baru diferensiasi_baru{} (sudah_bisa /
perlu_bantuan), konten spesifik per TP, accordion 3 level.
**CHECK redesign:** hapus "Pilih Jalur" + tombol dua jalur, ganti
dengan satu tombol accordion remedial. Footer normal.
Commits: 7af4a27 → cf6911a.

### 9. Sprint Fix Nilai Formatif Fase D (19 Juni 2026, SW v257)

**Root cause:** nilai.js pakai getAllTP() (SD-only), TP Fase D tidak
muncul. Fix: getAllTPGabungan(tingkat), getSesiFormatifTP() baca store
SMP, render/CSV cabang eksplisit mode === 'observasi_smp', _tpList()
normalisasi Fase D ke {nomor, nama, kelas, _patternId}.
Commits: 17655eb → f5b9ba1. Test: 7/7 PASS.

### 10. Sprint Resume Bridge (20 Juni 2026, SW v257)

**Root cause:** renderDashboard() reset _flow setiap masuk tab Mengajar.
Fix: _persistState() di sesi-runtime-smp.js, _checkResumeAndRestore()
di dashboard.js, prioritas savedAt terbaru, same-target scoped delete.
Commits: 30a70ab. Test: 13/13 PASS.

### 11. Sprint Fix Presensi — Type Safety tp_nomor (20 Juni 2026, SW v258)

**Root cause:** el.dataset.nomor selalu string, dibandingkan strict ===
dengan number. Fix defense in depth 5 titik: String() coercion di
pembaca + Number() di sumber. Commits: 83b7fa1. Test: 6/6 PASS.

### 12. Sprint Resume 3 Tombol + Fix Breadcrumb Unmount (21 Juni 2026)

**Resume prompt 3 tombol:** ubah dari 2 → 3 tombol di 3 fungsi
(_renderResume SD, _renderBpResume SD, _renderResume SMP). Tombol:
"Lanjut dari sini →" (unchanged), "Mulai awal sesi" (hapus checkpoint +
unmount + dashPilihTP ke TP yang sama), "Mulai TP Baru" (unmount +
dashKePilihTP tanpa hapus checkpoint). Double-tap guard (_isNavigating)
di semua 9 tombol.

**Fix dashKePilihTP():** tambah jenjang-aware unmount (srUnmount /
srSMPUnmount) sebelum reset _flow. Fix ini diverifikasi BEKERJA via
pemanggilan langsung `window.dashKePilihTP()` di Playwright. Namun
reachability via klik UI sungguhan saat step 2–4 BELUM terkonfirmasi —
breadcrumb `← TP` di-hide (`display:none`) oleh stepper saat runtime
mounted (step 2–4), sehingga tidak ada path klik manual ke
dashKePilihTP selama sesi aktif.

**dashPilihTP() defensive:** tambah srSMPUnmount() setelah srUnmount()
yang sudah ada — cost zero jika SMP tidak mounted.

Commits: 7cddc9d. Test: 15/15 PASS (A1–A3 SD sesi_aktif, B1–B3 SD
bp_resume, C1–C3 SMP sesi_aktif_smp, D1–D3 breadcrumb, E1–E3
double-tap).

---

## Keputusan yang Jangan Dipertanyakan Ulang (gabungan semua sprint)

### Identitas & Storage

- `pattern_id` adalah satu-satunya sumber identitas key Fase D — tidak
  ada field `tp_number` di skema
- `metadata.pattern_id` untuk matching sesi/penilaian, `metadata.tp_id`
  untuk lookup objek TP — dua field beda tujuan
- IDB key SMP terpisah: `sesi_aktif_smp`, `penilaian_log_smp` —
  konsisten, jangan gabung
- `getAllTP()` legacy tetap SD-only — `getAllTPGabungan(tingkat)` untuk
  gabungan

### Resume & Navigasi

- Prioritas resume: savedAt terbaru menang, bukan bp selalu menang
- Key yang kalah dihapus HANYA jika same TP+rombel
- Resume prompt tampil dari DALAM sesi-runtime, bukan UI baru di
  dashboard
- Resume Bridge (tpData via _getTP(id)) dan presensi/jejak/nilai
  (_flow.tp.nomor via dataset) adalah DUA jalur identitas TP terpisah
- Resume prompt 3 tombol: "Mulai awal sesi" hapus checkpoint, "Mulai TP
  Baru" preserve checkpoint — unmount() SELALU dipanggil sebelum navigasi
- dashKePilihTP() wajib unmount runtime aktif — tapi breadcrumb `← TP`
  tidak reachable saat step 2–4 (display:none), jadi fix ini hanya
  relevan jika stepper logic berubah di masa depan

### Type Safety

- tp_nomor/tpNomor WAJIB dibandingkan dengan String() coercion — tidak
  pernah strict ===
- Fix di titik baca didahulukan dari fix di titik tulis/sumber — data
  lama tetap terbaca tanpa migrasi
- Badge "sudah diajarkan" Fase D wajib pakai _tpNomor(tp), bukan
  tp.nomor mentah

### Skenario & Renderer

- Format AKSI/UCAP adalah final — tidak kembali ke runtime[]
- skenario-7-01.txt adalah anchor kualitas — tidak diubah
- Renderer paralel, bukan replace — runtime[] lama tetap sebagai
  fallback
- Jalur B (inject ke .js) dipilih atas Jalur A (parse .txt di runtime)
- REPEAT per kalimat, bantuan/darurat collapsed default
- onclick= inline + window exposure — konsisten dengan pola existing

### Observasi Formatif

- L3 generik per L2, bukan dari observe[] TP
- 3 tag per L2 — cukup untuk observasi cepat di kelas
- nilai 90/75/60/45 ada di UI dan record meskipun check_without_score:
  true — constraint itu untuk penilaian sumatif
- penilaian_log_smp terisolasi total dari penilaian_log SD
- Render/CSV SMP punya cabang terpisah (mode === 'observasi_smp')

### Diferensiasi & CHECK

- diferensiasi_baru{} field baru, bukan replace field lama
- Konten sudah_bisa dan perlu_bantuan spesifik per TP
- CHECK tidak meminta penilaian eksplisit dari guru — satu tombol
  remedial, footer normal

### Arsitektur Umum

- classroom_setup[] hanya SETTLING + HOOK (TRANSISI KE MODEL dihapus)
- Reference mode untuk SIAPKAN KELAS (scroll, bukan tap per item)
- UCAP wajib Bahasa Inggris di classroom_setup[], AKSI boleh BI
- Overlay Penilaian Fase D kualitatif murni — tidak ada skor/huruf/skala
  untuk sumatif
- Kurikulum Fase D pakai placeholder, bukan field meta/cp ala SD
- Reaktivasi prerequisite = kapasitas struktural, bukan konten
- BOOST TP-18 lebih kaya dari biasanya — disengaja
- PAT-8-24 dihilangkan dari prerequisite_patterns TP-12 (final)

---

## Preseden Desain (berlaku ke depan)

| Keputusan | Mengapa |
|-----------|---------|
| classroom_setup[] hanya SETTLING + HOOK | TRANSISI KE MODEL mendahului langkah kelas — efek atensi hilang |
| Reference mode untuk SIAPKAN KELAS | Guru berdiri di depan kelas butuh scan cepat — tangan harus bebas |
| Deteksi boundary SETTLING/HOOK via "?" | UCAP pertama dengan "?" selalu awal HOOK berdasarkan spec authoring |
| UCAP wajib Bahasa Inggris di classroom_setup[] | Guru harus model bahasa target sejak sebelum sesi |
| AKSI boleh Bahasa Indonesia | Instruksi fisik lebih efektif dalam bahasa guru |
| Tidak ada duplikasi UCAP antar 66 TP | Guru banyak kelas merasakan repetisi — variasi menjaga engagement |

---

## Status Konten

- Fase D: 66/66 TP LOLOS review independen (ChatGPT)
- Kelas 7: 24/24 | Kelas 8: 24/24 | Kelas 9: 18/18
- tools/validate-fase-d.js: 66/66 LOLOS, 0 error, 0 warning

---

## Backlog (belum disentuh)

### Fitur & Improvement
1. Resume Bridge — tambah opsi ke-3 "Pilih TP baru"
2. Label "Lanjut TP" landing page SMP — hardcode tpDiKelas[0],
   selesaiSet tidak dipakai (gap fitur, bukan bug)
3. Export data observasi → rubrik modul ajar (Fase A-C dan Fase D)
4. Desain kurikulum Fase D proper — meta/cp untuk placeholder
   kurikulum.js
5. Tombol "Lihat Kurikulum lengkap" tidak ada di tab Materi SMP

### Refactor & Cleanup
6. Migrasi wrapper db.js penuh — hilangkan indexedDB.open() mandiri
   di siswa-history.js dan nilai.js
7. Hapus runtime[] lama dari sesi-runtime-smp.js setelah renderer
   skenario stabil di lapangan (Sprint E)
8. nilai.js:208 — dead code tpSelesai di _renderMenu(), query IDB
   boros tiap buka menu

### Bug Kosmetik
9. Counter pagination presensi "Halaman X/Y · Hadir N/M" stale
   setelah ubah status — tidak memengaruhi data
10. REPEAT step dual-button UI ambiguity
11. Label "(Detail)" salah untuk sesi SMP — mode 'observasi_smp'
    jatuh ke fallback "Detail"

### Open Question
- Kemungkinan ada nilai/penilaian yang gagal tersimpan selama periode
  bug DB_VERSION aktif. Perlu keputusan Romo: apakah komunikasi ke
  guru untuk pengisian ulang data diperlukan. **BELUM diputuskan.**

### Item Terbuka

- TP-7-01 (Kelas 7) - instruksi UCAP baris sekitar 161 "Good. Now stay
  with your partner and join another pair." teridentifikasi belum
  deterministik (siswa diminta mengambil keputusan sendiri, bukan
  instruksi pasti). Perbaikan sudah diusulkan dalam review di
  docs/canonical/reviews/ucap-tp7-01-kelas7.txt: "Good. Stay with your
  partner. Wait for my signal..." - perbaikan ini BELUM diterapkan ke
  skenario-7-01.txt canonical. Perlu fix manual terpisah pada baris
  yang relevan, jangan overwrite seluruh file.

---

## File Referensi Penting

- Skenario acuan: docs/canonical/skenario-fase-d-kelas 7/skenario-7-01.txt
- Data TP Kelas 7: docs/canonical/fase-d/kelas-7/
- Data TP Kelas 8: docs/canonical/fase-d/kelas-8/
- Data TP Kelas 9: docs/canonical/fase-d/kelas-9/
- Review Kelas 7: docs/canonical/## Review TP kelas 7.txt
