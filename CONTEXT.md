# FLAF — Context Sesi Baru

## Identitas Project
- **Nama**: FLAF (Functional Language Accumulation Framework)
- **Deskripsi**: PWA offline-first untuk guru Bahasa Inggris SD Kelas 1 & 2
- **Stack**: Vanilla JS ES Modules, IndexedDB, Supabase (aktivasi & admin), Service Worker, GitHub Pages
- **Repo lokal**: `D:\ribuan_pengguna\CLAUDE\FLAF` (Git aktif, branch `main`)
- **GitHub**: https://github.com/teguhalficahlin-del/flaf
- **Deploy**: https://teguhalficahlin-del.github.io/flaf

## Status Terakhir (Mei 2026)
- Schema v4.3 aktif & stabil — `closure_reinforcement` WAJIB di setiap TP
- **18 TP sudah migrate + integrated — FASE A 100% COMPLETE ✅**
- **UI-SKETCH.html sudah di-review dan disetujui — tidak ada revisi**
- **Fase 5 Build sedang berjalan — B1 selesai**

### Detail Migrasi TP
- Kelas 1: TP 01–06 ✅ (lengkap, sudah diaudit di commit `a2a7a7c`)
- Kelas 2: TP 07–08 ✅ (sesi M3, commit `6a0f035`)
- Kelas 2: TP 09 Animals ✅ (sesi M4)
- Kelas 2: TP 10 Food and Drinks ✅ (sesi M5)
- Kelas 2: TP 11 Daily Routines ✅ (sesi M6)
- Kelas 2: TP 12 Body Parts ✅ (sesi M7)
- Kelas 2: TP 13 Weather ✅ (sesi M8)
- Kelas 2: TP 14 In the Classroom ✅ (sesi M9)
- Kelas 2: TP 15 Feelings and Emotions ✅ (sesi M10)
- Kelas 2: TP 16 Simple Story Retelling ✅ (sesi M11)
- Kelas 2: TP 17 My Hobbies ✅ (sesi M12)
- Kelas 2: TP 18 Integrative Project (My World) ✅ (sesi M13)

## Fase 5 — Status Build Runtime Baru

### Keputusan Arsitektural (Terkunci)
- **Pengganti penuh RT v6** — tidak ada compatibility layer, semua 18 TP sudah v4.3
- **`siswa_per_kelas` IDB store defer ke Fase 6** — observasi pakai rotasi random dulu
- **TTS tetap ada** di AktivitasRunning
- **7 state machine** sesuai UI-SKETCH: preview → resume → entering → ready → running → obs → selesai → closure

### Progress Build
```
B1 ✅ — screens/sesi-runtime.js + screens/sesi-runtime.css  (SELESAI)
B2 ⬜ — dashboard.js: hapus RT v6, mount sesi-runtime di Step 2-4
B3 ⬜ — dashboard.css: hapus rt-* classes
B4 ⬜ — index.html: tambah link sesi-runtime.css
```

### File Baru yang Dibuat di B1
- `screens/sesi-runtime.js` — 1013 baris, syntax valid
  - Public API: `mount(root, tpData, rombel, siswaList, onDone)` + `unmount()`
  - State machine via `_transition(patch)` — satu pintu perubahan state
  - 7 render functions: `_renderPreview`, `_renderResume`, `_renderEntering`, `_renderReady`, `_renderRunning`, `_renderObs`, `_renderSelesai`, `_renderClosure`
  - 2 overlay: `_renderKondisiOverlay`, `_renderFallbackOverlay`
  - Timer 3-warna (hijau/kuning/merah), tidak auto-advance
  - TTS via Web Speech API
  - Resume detection dari IDB `kv` key `sesi_aktif`, batas 4 jam
- `screens/sesi-runtime.css` — 751 baris
  - Semua class prefix `sr-*`, tidak konflik dengan `rt-*` atau `ds-*`
  - Dark theme konsisten dengan dashboard

### Yang Harus Dilakukan di B2 (Sesi Berikutnya)

**File**: `screens/dashboard.js`

Dua perubahan presisi:

**Perubahan 1** — Tambah import di baris paling atas:
```javascript
import { mount as srMount, unmount as srUnmount } from './sesi-runtime.js';
```

**Perubahan 2** — Di fungsi `_buildStepBody`, case 2/3/4 (baris ~1888):
```javascript
// LAMA:
case 2:
case 3:
case 4:
  // Runtime v6: step 2-4 = persistent classroom surface
  // DOM disiapkan oleh _rtMount — bukan di sini
  return '<div id="rt-surface-placeholder" style="height:100%;"></div>';

// BARU:
case 2:
case 3:
case 4:
  return '<div id="sr-root" style="height:100%;"></div>';
```

**Perubahan 3** — Di `window.dashPilihTP` setelah `_container.innerHTML = _buildSesiHTML()` (baris ~2776), tambah mount call:
```javascript
if (_container) {
  _container.innerHTML = _buildSesiHTML();
  // Mount sesi-runtime jika step sudah di fase (2-4)
  if (_skenario.stepIndex >= 2 && _skenario.stepIndex <= 4) {
    const srRoot = _container.querySelector('#sr-root');
    if (srRoot) {
      srMount(srRoot, tpData, _flow.rombel, _flow.siswaList, _onSesiDone);
    }
  }
}
```

**Perubahan 4** — Di `dashStepNext` saat pindah ke step 2, tambah mount. Di `dashStepPrev` saat keluar dari step 2-4, panggil `srUnmount()`.

**Perubahan 5** — Buat fungsi `_onSesiDone(hasil)` yang menggantikan `_doSelesaiSesi`:
```javascript
async function _onSesiDone(hasil) {
  srUnmount();
  _skenario.stepIndex = 6; // langsung ke Selesai
  _skenario.kendala   = hasil.kendala;
  if (_container) _container.innerHTML = _buildSesiHTML();
  // Simpan ke jejak dan presensi seperti _doSelesaiSesi
}
```

**Perubahan 6 (scope B2)** — Hapus seluruh blok RT v6 dari dashboard.js:
- Baris 77–1222: `_rt`, `_rtMount`, `_rtBuildSurface`, `_rtRenderStep`, semua `_rt*` functions
- Baris 1619–1738: `_buildStepFase` (diganti dengan sr-root placeholder)

### Yang TIDAK Diubah di B2
- Landing, Presensi (Step 0-1), Asesmen (Step 5), Selesai (Step 6) — tetap
- `_doSelesaiSesi` masih dipakai untuk Step 6 Selesai button
- `app.js`, `data/index.js`, `storage/*` — tidak disentuh

## Git Log (10 commit terakhir)
```
bb77ef7  docs: update CONTEXT — Opsi B integration complete (Fase A + Runtime)
42f2f9f  opsi-b: integrate v4.3 TP 15-18 into fase-a.js runtime
913f823  sesi-m10 to m13: migrate TP 15–18 (Fase A Complete)
3f7b0d1  sesi-m7/m8/m9: migrate TP 12-14 + update CONTEXT
95e3a3b  docs: update CONTEXT TP 11 selesai, next M7
56aad44  sesi-m6: migrate TP 11 Daily Routines + update CONTEXT
0b4c473  sesi-m5: migrate TP 10 Food and Drinks + update CONTEXT
d4b8a28  docs: pindah CONTEXT.md ke root, tambah CLAUDE.md, update status M5
a105fad  sesi-m4: migrate TP 09 Animals + update CONTEXT
d62168e  docs: update context after sesi-m3
```

## Struktur Folder Penting
```
FLAF/
├── screens/
│   ├── dashboard.js        ← RT v6 masih ada, AKAN dihapus di B2
│   ├── dashboard.css       ← rt-* classes masih ada, AKAN dihapus di B3
│   ├── sesi-runtime.js     ← BARU (B1 selesai) — 7-state runtime
│   ├── sesi-runtime.css    ← BARU (B1 selesai) — sr-* prefix
│   ├── kurikulum.js/css
│   ├── nilai.js/css
│   ├── jejak.js
│   └── activation.js
├── data/
│   ├── index.js
│   └── fase-a.js           ← 18 TP v4.3 aktif, aktivitas[] siap dibaca
├── docs/
│   ├── fase-1-spec/        ← SCHEMA.md, tp-01.js
│   ├── fase-2-spec/        ← STATE-MACHINE.md
│   ├── fase-3-spec/        ← UI-SKETCH.html ✅ DISETUJUI, tp-04.js
│   ├── fase-4-spec/        ← MIGRATION-PLAN.md
│   ├── sesi-m1/ sampai sesi-m13/  ← semua TP v4.3
├── storage/
│   └── db.js, logger.js, export.js, jejak.js, nilai.js, presensi.js
├── sw.js                   ← Service Worker v52
├── manifest.json
├── app.js
└── index.html
```

## Aturan Kerja (WAJIB diikuti Claude)
- Setiap perubahan kode: sebutkan **nama file**, **blok lama presisi** (ctrl+F-findable), **blok baru**
- **Jangan tulis kode sebelum diminta**
- Mobile-first wajib — uji logika di 320×640px sebelum desktop
- Workflow wajib: **ANALYZE → DESIGN → BUILD → HARDEN → VALIDATE**
- Konfirmasi satu perubahan sebelum lanjut ke berikutnya
- Jangan putuskan sendiri pertanyaan arsitektural — tanya dulu

## Layout Rules (WAJIB)
- Tidak ada `100vh` atau `position:fixed` pada main layout
- Primary actions visible tanpa scroll di semua target phone size
- Tidak ada fixed width pada main layout
- Natural scroll diprioritaskan
- Tidak ada horizontal scroll di 320px width

## Pattern Inklusivitas (TERBENTUK di Sesi M3)

Untuk TP dengan topik **personal/sensitif** (keluarga, rumah, makanan, hobi, masa depan, dll), pattern berikut sudah terbukti efektif:

### Pattern 1 — Scripted micro_script Inklusivitas
- Frasa inklusivitas ditulis **konkret dalam Bahasa Indonesia** di `micro_script.selama` pada aktivitas Pembuka pertama
- Contoh TP 07: *"Siapa yang tinggal bersamamu di rumah? Itu keluargamu. Bisa papa, mama, kakak, adik, kakek, nenek, om, tante — siapa pun."*

### Pattern 2 — Skip Aktivitas Personal di Main Flow
- Aktivitas yang memaksa siswa expose kondisi pribadi dihapus dari main flow
- Presentasi ke kelas hanya di `fallback.kelas_sangat_aktif` sebagai opt-in sukarela

### Pattern 3 — Kartu Generik (Bukan Bring-from-Home)
- Media utama = kartu cetak generik yang sama untuk semua siswa

### Pattern 4 — Aktivitas "Pretend" sebagai Substitusi
- Pakai pretend universal: semua siswa pakai konteks yang sama dari kartu/instruksi

### Pattern 5 — Fallback `sensitif` Wajib di Aktivitas Personal
- Setiap aktivitas yang berpotensi sensitif HARUS punya entry `fallback.sensitif`

## Pattern Lain yang Sudah Terbentuk

### Pattern A — TPR sebagai Energy Break di Tengah Inti
### Pattern B — Closure Transfer ke Rumah
### Pattern C — Diferensiasi 3-Tier yang Konsisten
- **Mudah**: vocab dikurangi, pola pendek, tempo lambat
- **Normal**: vocab penuh, pola lengkap, tempo bertahap
- **Tantangan**: pola tambahan, tempo cepat, ekstensi

## Status Sesi

```
✅ FASE A MIGRATION COMPLETE (18 TP, M1–M13)
✅ UI-SKETCH.html DISETUJUI (Fase 3 review selesai)
🔄 FASE 5 BUILD SEDANG BERJALAN

B1 ✅ sesi-runtime.js + sesi-runtime.css
B2 ⬜ dashboard.js — hapus RT v6, mount sesi-runtime
B3 ⬜ dashboard.css — hapus rt-* classes
B4 ⬜ index.html — tambah link sesi-runtime.css

Next: mulai B2 di sesi berikutnya.
Instruksi detail B2 ada di bagian "Fase 5 — Status Build" di atas.
```
