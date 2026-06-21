# Investigasi Bug: State Sesi Hilang + _rerenderStep Crash

**Tanggal investigasi**: 20 Juni 2026
**Status**: REPORT ONLY — belum ada fix

---

## Ringkasan

Dua bug terkait ditemukan di area yang sama (`screens/dashboard.js`):

1. **Bug Utama (P0)** — State sesi mengajar hilang saat navigasi keluar-masuk layar Dashboard. User tidak bisa kembali ke step yang sedang berjalan; harus mulai ulang dari Pilih Rombel → Pilih TP.

2. **Bug Sekunder (P1)** — `_rerenderStep` crash (console error berulang) saat rapid-click navigasi dengan sesi aktif di background. Ini konsekuensi dari bug #1: DOM dihancurkan tanpa cleanup, async callback dari sesi-runtime menemukan DOM stale/orphan.

---

## Repro Deterministik (Bug #1 — 100% reproducible)

1. Mulai sesi mengajar (rombel/TP apapun, SD atau SMP)
2. Lanjut sampai step aktif (mis. Step 2 Pembuka / Step 3 Inti)
3. Tap **SATU KALI** tab bottom nav lain (mis. "Kelas" / layar s-nilai)
4. Tap **SATU KALI** balik ke tab "Mengajar" (layar s-dash)
5. **HASIL**: Muncul layar "Pilih Rombel" dari awal, bukan step yang ditinggalkan

Tidak ada console error/exception — ini bug logic/state silent.

---

## Root Cause

### Penyebab Langsung: `renderDashboard()` selalu reset state

**File**: `screens/dashboard.js`
**Baris 109–134**:

```js
export async function renderDashboard(container, opts = {}) {
  if (!container) return;
  _container = container;
  _bindDelegatedEvents(container);
  // ...
  _flow = { view: 'landing', rombel: null, tp: null, statusMap: {}, siswaList: [], nilaiCache: null };  // ← BARIS 116
  _renderSkeleton(container);
  // ...
  container.innerHTML = await _buildLandingHTML(...);  // ← BARIS 129
}
```

**Baris 116** menghapus total `_flow` — termasuk `rombel`, `tp`, `statusMap`, `siswaList`. Semua state sesi aktif hilang.

**Baris 129** mengganti `container.innerHTML` dengan landing HTML (Pilih Rombel). DOM sesi stepper (`#ds-step-body`, `#ds-step-nav`, `.ds-step-indicator`, `#sr-root`) dihancurkan.

### Penyebab Struktural: Tidak ada guard "sesi aktif" di entry point

**File**: `app.js`
**Baris 205–207**:

```js
case 's-dash': {
  _initDashboard();  // ← selalu dipanggil, tanpa cek state
  break;
}
```

**File**: `app.js`
**Baris 450–477** (`_initDashboard`):

```js
async function _initDashboard() {
  // ...
  await renderDashboard(dashRoot, { ... });  // ← selalu panggil renderDashboard
  // ...
}
```

Tidak ada pengecekan apakah `_flow.view === 'sesi'` atau sesi-runtime sedang aktif. Setiap navigasi ke s-dash memanggil `renderDashboard()` tanpa syarat → reset ke landing.

### State Sesi: 100% In-Memory, Tidak Ada Persist di Level Dashboard

| Variable | Isi | Persist? |
|---|---|---|
| `_flow` (dashboard.js:39) | rombel, tp, statusMap, siswaList, view | ❌ In-memory only |
| `_skenario` (dashboard.js:47) | stepIndex, langkahIndex, speaking, dll | ❌ In-memory only |
| `_faseData` (dashboard.js:35) | TP data cache | ❌ In-memory only |

Sesi-runtime (SD) **punya** mekanisme resume via IDB (`sesi_aktif` key di store `kv`, sesi-runtime.js:34/153), tapi ini baru dibaca saat `srMount()` dipanggil — yang memerlukan user sudah kembali ke step 2-4 via stepper. Karena `_flow` direset, user tidak pernah sampai ke titik itu.

Sesi-runtime SMP **tidak punya resume sama sekali** (tidak ada `RESUME_STORE_KEY` di `sesi-runtime-smp.js`).

---

## Hubungan dengan _rerenderStep Crash (Bug #2)

### Mekanisme Crash

Saat `renderDashboard()` menghapus DOM (baris 129: `container.innerHTML = ...`), elemen-elemen stepper (`#ds-step-body`, `.ds-step-indicator`, dll) dihancurkan. Tapi:

1. `srUnmount()` **TIDAK dipanggil** oleh `renderDashboard()` — sesi-runtime tetap berjalan di background (interval, event listener masih aktif)
2. Callback dari sesi-runtime (mis. `_onSesiDone`, onBack callback) masih referensi `_rerenderStep`
3. Saat callback ter-trigger setelah DOM sudah dihancurkan:
   - **Timing A** (body sudah null): `_rerenderStep` baris 1113 `if (!body) return;` — bail out silent, tidak crash
   - **Timing B** (race condition): `body` ditemukan sesaat sebelum innerHTML diganti, lalu `ind.outerHTML` (baris 1176) crash karena `ind` sudah orphan/detached dari document

### Bukti dari Kode

**Baris 1176** (`screens/dashboard.js`):
```js
if (ind) ind.outerHTML = _buildStepIndicator(step);
```

`ind` bisa berupa referensi ke DOM element yang sudah di-remove dari document tree oleh `container.innerHTML = ...`. Operasi `outerHTML` pada orphan element menyebabkan error.

### Call Sites yang Bisa Trigger Crash Post-Navigasi

| Baris | Fungsi | Bagaimana terpanggil |
|---|---|---|
| 1147 | callback onBack dari srSMPMount | User tap back di sesi SMP |
| 1153 | callback onBack dari srMount | User tap back di sesi SD |
| 1359 | dashStepNext (async) | Await belum selesai saat navigasi |
| 1374 | dashStepNext | Step advance |
| 1384 | dashStepPrev | Step mundur |
| 1684 | dashToggleAsesmenMode (async) | Await `_loadNilaiCache()` selesai setelah navigasi |
| 1701 | dashNilaiCepat (async) | Await `nilai.setNilaiFormatif()` selesai setelah navigasi |

Fungsi-fungsi `async` (baris 1359, 1684, 1701) paling rawan: `await` bisa resolve SETELAH user sudah navigasi keluar dan `renderDashboard` sudah menghapus DOM.

---

## Scope Bug

### Bug #1 (State hilang): SEMUA kombinasi

- ✅ Berlaku untuk SD (semua tingkat/TP)
- ✅ Berlaku untuk SMP/Fase D (semua tingkat/TP)
- ✅ Berlaku di semua step (0–6)
- ✅ Berlaku navigasi ke layar apapun (Nilai, Kurikulum, Jejak, Menu)

Penyebab: `renderDashboard()` baris 116 tidak punya branching per jenjang/tingkat — selalu reset.

### Bug #2 (_rerenderStep crash): TERGANTUNG TIMING

- Hanya muncul saat ada async operation in-flight (`_loadLogSetDinilai`, `_loadNilaiCache`, `nilai.setNilaiFormatif`, dll) yang resolve setelah DOM dihancurkan
- Lebih mungkin terjadi saat rapid-click (interval < 150ms)
- SD dan SMP sama-sama terpengaruh

---

## Risiko Integritas Data

### Presensi
**Risiko RENDAH** — `presensi.simpan()` hanya dipanggil saat `dashSelesaiSesi()` (baris 1553). Jika sesi terputus karena navigasi, presensi belum tersimpan. Sesi baru yang dimulai akan menulis presensi baru — tidak ada duplikasi.

### Penilaian Formatif (SD)
**Risiko SEDANG** — Penilaian per-siswa disimpan individual saat user mengisi nilai di step 5 (Asesmen). Jika user sudah mengisi beberapa nilai, navigasi keluar, lalu memulai sesi baru:
- Nilai yang sudah disimpan tetap ada di IDB (`penilaian_log`) dengan `sesiId` lama
- Sesi baru akan generate `sesiId` baru (sesi-runtime.js:462/1243)
- Record dengan `sesiId` lama menjadi **orphan** — tidak ada sesi induk yang "Simpan & Selesai"
- Dampak: rekap dan CSV export mungkin menghitung ganda jika query tidak filter by sesiId

### Observasi Formatif (SMP)
**Risiko SEDANG** — Pola sama dengan penilaian SD, tapi disimpan di `penilaian_log_smp`. Observasi yang sudah di-submit sebelum navigasi menjadi orphan.

### Jejak Mengajar
**Risiko RENDAH** — `jejak.log()` hanya dipanggil saat `_doSelesaiSesi()` (baris 1569). Sesi terputus tidak menghasilkan jejak duplikat.

### Progress TP
**Risiko RENDAH** — `db.set('teacher_data', ...)` hanya saat `_doSelesaiSesi()` (baris 1583). Tanda "Sudah diajarkan" tidak terset sebelum sesi selesai.

---

## Sesi-Runtime Resume: Ada Tapi Tidak Terjangkau

### SD (`sesi-runtime.js`)
- **Ada** mekanisme resume: state disimpan ke IDB key `sesi_aktif` via `_persistState()` (baris 150–164)
- Dibaca saat `mount()` dipanggil ulang (baris 102–118)
- **Max age**: 4 jam (`RESUME_MAX_MS`, baris 33)
- **Masalah**: `mount()` baru dipanggil di `_rerenderStep` saat `step >= 2 && step <= 4` DAN `!srRoot.dataset.mounted` (baris 1140). Karena `_flow` direset, user tidak pernah sampai step 2.

### SMP (`sesi-runtime-smp.js`)
- **Tidak ada** mekanisme resume sama sekali
- State 100% hilang saat unmount atau DOM destroyed

---

## Mekanisme Resume yang SUDAH ADA di Fase A-C (SD)

### Sistem 1: Resume Posisi Langkah (Fase A, B, C — semua)

**File**: `screens/sesi-runtime.js`

**Cara kerja**:

1. **Persist** — Setiap kali guru maju/mundur langkah, `_transition()` (baris 144) memanggil `_persistState()` (baris 150) yang menyimpan ke IDB:

```js
// sesi-runtime.js:150-164
async function _persistState() {
  if (_state.aktState === 'preview') return;  // belum mulai = jangan simpan
  await db.set(STORE_KV, RESUME_STORE_KEY, {  // key: 'sesi_aktif' di store 'kv'
    tpNomor   : _state.tp?.nomor,
    rombelId  : _state.rombel?.id,
    faseIdx   : _state.faseIdx,
    langkahIdx: _state.langkahIdx,
    sesiId    : _state.sesiId,
    savedAt   : Date.now(),
  });
}
```

2. **Cek saat mount** — Saat `srMount()` dipanggil ulang (baris 102-118), data resume dibaca:

```js
// sesi-runtime.js:102-118
const saved = await db.get(STORE_KV, RESUME_STORE_KEY);  // baca IDB
if (saved && saved.tpNomor === tpData.nomor && saved.rombelId === rombel?.id) {
  const age = Date.now() - (saved.savedAt || 0);
  if (age < RESUME_MAX_MS) {    // < 4 jam
    _state.faseIdx    = saved.faseIdx;
    _state.langkahIdx = saved.langkahIdx;
    _state.sesiId     = saved.sesiId;
    _state.aktState   = 'resume';  // → tampilkan prompt resume
  } else {
    await db.remove(STORE_KV, RESUME_STORE_KEY);  // expired, hapus
  }
}
```

3. **UI prompt** — State `resume` merender `_renderResume()` (baris 469-497):

```
┌──────────────────────────┐
│        ⏸                 │
│   Sesi belum selesai     │
│   TP 05 — Animals · 1A   │
│   Terakhir di: Inti,     │
│   langkah 3 dari 8       │
│                          │
│   [Lanjut dari sini →]   │
│   [Mulai sesi baru]      │
└──────────────────────────┘
```

4. **Cleanup** — Resume key dihapus saat:
   - Sesi selesai normal (`_onDone`, baris 292)
   - User pilih "Mulai sesi baru" (baris 494)
   - Closure/simpan (baris 890)
   - Data expired > 4 jam (baris 113)

**Data yang disimpan**: `tpNomor`, `rombelId`, `faseIdx`, `langkahIdx`, `sesiId`, `savedAt`
**Data yang TIDAK disimpan**: `statusMap` (presensi), `siswaList`, `nilaiDraft`

**Matching key**: resume hanya aktif jika TP nomor DAN rombel ID cocok dengan yang sedang dimulai (baris 105). Jika guru membuka TP lain, resume diabaikan.

---

### Sistem 2: Breakpoint / Checkpoint (Fase C saja)

**File**: `screens/sesi-runtime.js` (baris 297-341)

**Apa itu breakpoint**: Titik jeda yang didefinisikan di DATA TP, bukan di kode runtime. Hanya beberapa TP Fase C yang punya breakpoints non-kosong:

| TP Fase C | breakpoints |
|---|---|
| TP 04 | `[{ id: 'bp-1', after_langkah_id: '...', resume_at: '...' }]` |
| TP 08 | 1 breakpoint |
| TP 16 | 1 breakpoint |
| TP 20 | 1 breakpoint |
| TP 21 | 1 breakpoint |
| TP 22 | 1 breakpoint |
| TP 01-03, 05-07, 09-15, 17-19 | `[]` (kosong) |
| Fase A semua TP | field `breakpoints` tidak ada |
| Fase B semua TP | field `breakpoints` tidak ada |

**Cara kerja**:

1. **Trigger** — Saat guru tap "Lanjut" setelah langkah tertentu, `_langkahNext()` → `_checkBreakpoint()` (baris 270):

```js
// sesi-runtime.js:299-304
function _checkBreakpoint(langkah, onContinue) {
  if (!langkah || !_state.tp?.breakpoints?.length) return false;
  const bp = _state.tp.breakpoints.find(b => b.after_langkah_id === langkah.id);
  if (!bp) return false;
  _renderBreakpointOverlay(bp, onContinue);
  return true;
}
```

2. **UI overlay** — Dua pilihan:
   - **"Simpan & keluar"** — Simpan breakpoint ke IDB (`bp_resume` key, baris 323) dan panggil `_onDone()` → keluar ke dashboard
   - **"Lanjut mengajar"** — Tutup overlay, lanjut langkah berikutnya

3. **Resume dari breakpoint** — Saat `mount()` dipanggil lagi (baris 120-131):

```js
// sesi-runtime.js:120-131
if (_state.aktState !== 'resume') {  // hanya jika tidak ada resume biasa
  const bpSaved = await db.get(STORE_KV, BP_RESUME_KEY);
  if (bpSaved && bpSaved.breakpointId && bpSaved.tpId === tpData.id
      && bpSaved.rombelId === rombel?.id) {
    _state.bpResumeLangkahId = bpSaved.langkahId;
    _state.aktState = 'bp_resume';  // → tampilkan prompt checkpoint
  }
}
```

4. **UI prompt checkpoint** — `_renderBpResume()` (baris 501-541):

```
┌──────────────────────────┐
│        📌                │
│   Lanjutkan sesi?        │
│   TP 22 — Text Types ·   │
│   Kelas 6B               │
│   Lanjutkan dari L9?     │
│                          │
│   [Ya, lanjutkan →]      │
│   [Mulai dari awal]      │
└──────────────────────────┘
```

**Perbedaan kunci resume vs checkpoint**:

| Aspek | Resume (Sistem 1) | Checkpoint (Sistem 2) |
|---|---|---|
| Fase | A, B, C (semua) | C saja (6 TP tertentu) |
| IDB key | `sesi_aktif` | `bp_resume` |
| Trigger simpan | Otomatis setiap transisi | Manual (guru tap "Simpan & keluar") |
| Data matching | `tpNomor` + `rombelId` | `tpId` + `rombelId` |
| Expire | 4 jam | Tidak expire (sampai dihapus) |
| Prioritas | Dicek duluan | Dicek hanya jika resume tidak ada |
| Posisi resume | `faseIdx` + `langkahIdx` (numerik) | `langkahId` (string, dicari di skenario) |

---

### Mengapa Resume SUDAH ADA Tapi Tidak Berfungsi Saat Navigasi

**Masalah bukan di sesi-runtime** — mekanisme resume bekerja sempurna JIKA `mount()` dipanggil ulang dengan TP dan rombel yang sama.

**Masalah ada di layer di atasnya** — `dashboard.js`:

1. `renderDashboard()` (baris 116) menghapus `_flow` → `rombel` dan `tp` null
2. User harus manual: Pilih Rombel → Pilih TP → masuk stepper → step 2 (trigger `srMount`) → BARU resume prompt muncul
3. Sampai step 2, `_skenario.stepIndex` sudah direset ke 0 oleh `dashPilihTP` (baris 1843)
4. Stepper menampilkan Step 0 (Materi), bukan langsung masuk runtime

**Dengan kata lain**: data resume ada di IDB, mekanisme baca ada di kode, UI prompt ada — tapi user dipaksa mengulang 4 langkah manual (pilih rombel → pilih TP → klik Lanjut dua kali) sebelum sampai ke titik di mana resume prompt muncul.

---

### Fase D (SMP): Tidak Ada Resume Sama Sekali

**File**: `screens/sesi-runtime-smp.js`

- Tidak ada `_persistState()` atau equivalent
- Tidak ada cek IDB saat `mount()` — langsung reset ke `stepIndex: 0, aktState: 'preview'` (baris 82-88)
- Tidak ada `breakpoints` di data TP Fase D
- State 100% in-memory, hilang total saat unmount atau DOM destroyed

---

### Rekomendasi Reuse untuk Fix (Referensi, Bukan Instruksi)

**Untuk SD (Fase A-C)**: Mekanisme resume di `sesi-runtime.js` sudah lengkap. Yang perlu ditambahkan adalah **bridge di level `dashboard.js`/`app.js`**:

- Saat navigasi ke s-dash, cek IDB key `sesi_aktif` dan `bp_resume` SEBELUM memanggil `renderDashboard()`
- Jika ada resume data valid: restore `_flow` (rombel, tp) dari data yang tersimpan, skip landing, langsung render stepper di step 2+ → `srMount()` → resume prompt muncul natural
- Data yang sudah ada di IDB (`tpNomor`, `rombelId`, `faseIdx`, `langkahIdx`, `sesiId`) cukup untuk restore `_flow` — hanya `siswaList` dan `statusMap` perlu di-load ulang dari `nilai.getSiswaList()`

**Untuk SMP (Fase D)**: Perlu implementasi `_persistState()` dan resume check di `sesi-runtime-smp.js` terlebih dahulu — bisa mengikuti pola `sesi-runtime.js` (Sistem 1), karena:
- Struktur state (`stepIndex`, TP data, rombel) serupa
- IDB key bisa pakai nama berbeda (mis. `sesi_aktif_smp`) untuk menghindari collision
- Tidak perlu breakpoint/checkpoint (Fase D tidak punya field `breakpoints` di data TP)

**Catatan**: field `tpNomor` di resume SD menggunakan `tp.nomor` (integer). Fase D menggunakan `metadata.pattern_id` (string) sebagai identitas TP — matching logic perlu disesuaikan.

---

## Tidak Ada Logic Resume di Level Dashboard

Konfirmasi eksplisit: **tidak ditemukan** logic apapun di `dashboard.js` atau `app.js` yang:
- Mengecek apakah ada sesi aktif sebelum memanggil `renderDashboard()`
- Menyimpan `_flow.view` / `_flow.rombel` / `_flow.tp` ke persistent storage
- Membaca state sesi dari IDB saat kembali ke s-dash
- Memanggil `_rerenderStep()` sebagai resume path saat kembali ke s-dash

`renderDashboard()` always-reset adalah **by design** (atau setidaknya, tidak pernah ada alternatif yang diimplementasikan). Ini bukan regression — fitur resume di level dashboard **tidak pernah ada**.

---

## File & Baris Kunci untuk Fix (Referensi, Bukan Instruksi)

| File | Baris | Apa |
|---|---|---|
| `screens/dashboard.js` | 116 | `_flow` direset tanpa syarat |
| `screens/dashboard.js` | 129 | DOM diganti ke landing HTML |
| `screens/dashboard.js` | 1109–1186 | `_rerenderStep()` — render stepper |
| `screens/dashboard.js` | 1171 | `srUnmount()` saat keluar step 2-4 |
| `screens/dashboard.js` | 1176 | `ind.outerHTML` — titik crash |
| `app.js` | 205–207 | Entry point s-dash → `_initDashboard()` |
| `app.js` | 450–477 | `_initDashboard()` → `renderDashboard()` |
| `screens/sesi-runtime.js` | 102–118 | Resume logic (ada, tapi unreachable) |
| `screens/sesi-runtime.js` | 150–164 | `_persistState()` — simpan ke IDB |
| `screens/sesi-runtime-smp.js` | — | Tidak ada resume logic |

---

## Temuan Tambahan: Overlay & Breadcrumb (21 Juni 2026)

Ditemukan saat validasi fix `dashKePilihTP()` unmount (commit 9003d9f).

### 1. Breadcrumb Tidak Reachable Saat Runtime Aktif

Breadcrumb `.ds-btn-back` ("← TP") di dashboard stepper di-hide secara eksplisit via `display: none` saat step 2-4 (`_rerenderStep()` baris 1256-1261). Ini berarti **tidak ada celah timing** di mana user bisa klik breadcrumb saat sesi-runtime sedang mounted — breadcrumb disembunyikan sinkron sebelum runtime di-mount.

Fix `dashKePilihTP()` yang menambahkan `srUnmount/srSMPUnmount` **bekerja** (diverifikasi via `page.evaluate(() => dashKePilihTP())` — 15/15 test PASS), tapi pemanggilan via klik UI sungguhan saat step 2-4 **tidak mungkin terjadi** karena tombolnya `display: none`.

Pemanggil `dashKePilihTP()` yang reachable saat runtime aktif **hanya** tombol "Mulai TP Baru" di resume prompt (commit 9003d9f) — yang sudah self-unmount sebelum memanggil.

### 2. `.sr-overlay` Bisa Tertinggal di DOM via popstate

`.sr-overlay` di-append ke `document.body` (bukan ke `#sr-root`) — lihat `sesi-runtime.js` baris 321, 963, 1006, 1333.

`unmount()` membersihkan overlay via `document.querySelector('.sr-overlay')?.remove()` (baris 140). Tapi jalur **popstate** (browser back button) → `_initDashboard()` → `renderDashboard()` **TIDAK memanggil** `srUnmount()` atau `srSMPUnmount()`. `renderDashboard()` hanya me-replace `_container.innerHTML` (yang menghapus `#sr-root` dari tree), tapi `.sr-overlay` yang di-append ke `document.body` **tetap hidup**.

**Skenario konkret**: guru buka popup kondisi kelas (overlay muncul) → tekan back browser → overlay tetap terlihat di atas landing page.

**Status**: Ini bukan bug baru yang diperkenalkan commit ini — sudah ada sejak sebelumnya. Terkait langsung dengan root cause Bug #1 (renderDashboard tidak punya guard sesi aktif).

### 3. Jalur Lain ke dashKePilihTP Saat Runtime Mounted

Selain breadcrumb (yang `display: none`):
- "← Sebelumnya" di step 0 (`isFirst ? 'dashKePilihTP()' : 'dashStepPrev()'`) — hanya saat `step === 0`, runtime belum mounted → aman
- Tombol "Mulai TP Baru" di resume prompt — sudah self-unmount
- **Tidak ada** jalur lain (tidak ada keyboard shortcut, gesture, atau event lain yang memanggil `dashKePilihTP`)
- popstate/back button memanggil `navigateTo('s-dash')` → `_initDashboard()`, **bukan** `dashKePilihTP()` — jalur berbeda yang punya masalah sendiri (poin 2 di atas)
