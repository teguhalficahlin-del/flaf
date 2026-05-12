# SPRINT5-INTEGRASI.md
# Instruksi Integrasi Sprint 5 — Dashboard + Observability Aktif
# Sesi 2 — Integrasi screen s-dash ke index.html + app.js + render.js

---

## FILE YANG DIHASILKAN SESI INI

| File | Aksi | Keterangan |
|------|------|------------|
| `index.html` | REPLACE | Versi lengkap Sprint 5 — screen s-dash sudah ada |
| `app.js` | REPLACE | Versi lengkap Sprint 5 — import + call renderDashboard |
| `render.js` | REPLACE | Versi lengkap Sprint 5 — tab handler + restore PDF state |
| `style-dash.css` | TAMBAH | CSS baru untuk s-dash, bot-nav, skeleton, toast, modal settings |

---

## LANGKAH INTEGRASI (WAJIB BERURUTAN)

### Langkah 1: Tambah CSS

Buka `style.css`, tambahkan di paling atas (setelah `:root {}` dan sebelum selector pertama):

```css
@import './style-dash.css';
```

**ATAU** salin seluruh isi `style-dash.css` ke `style.css` di bagian paling akhir.

---

### Langkah 2: Ganti index.html

Ganti `FLAF/index.html` dengan file `index.html` yang dihasilkan sesi ini.

Perbedaan dari versi Sprint 4:
- ✅ Screen `#s-dash` sudah ada dengan struktur lengkap
- ✅ `#dash-root` — container untuk `renderDashboard()`
- ✅ `#dash-skeleton` — skeleton loading (tersembunyi setelah render selesai)
- ✅ Tombol `#dash-back` — kembali ke s-start
- ✅ Bot-nav s-dash: 2 item (Beranda + Dashboard aktif)
- ✅ Tombol `#btn-go-dash` di s-start — navigasi ke dashboard
- ✅ Modal settings sudah ada
- ✅ Semua screen belum siap tetap disembunyikan (prinsip v6)

---

### Langkah 3: Ganti app.js

Ganti `FLAF/app.js` dengan file `app.js` yang dihasilkan sesi ini.

Perbedaan dari versi Sprint 4:
- ✅ `import { renderDashboard } from './screens/dashboard.js'`
- ✅ `_initDashboard()` — memanggil renderDashboard + skeleton handling
- ✅ `navigateTo('s-dash')` setelah session ditemukan saat boot
- ✅ `navigateTo('s-dash')` setelah aktivasi berhasil
- ✅ Semua event handler s-dash terikat (back btn, bot-nav)
- ✅ `window.__FLAF_NAV__` di-expose untuk debugging

---

### Langkah 4: Ganti render.js

Ganti `FLAF/render.js` dengan file `render.js` yang dihasilkan sesi ini.

Fungsi baru:
- `setupTabBar()` — init tab handler s-jadwal
- `restorePDFCachedState()` — restore label "✓ Sudah diunduh"
- `showPanelSkeleton(panelId, rows)` — helper skeleton
- `showPanelError(panelId, message, onRetry)` — helper error state

---

### Langkah 5: Pastikan screens/dashboard.js sudah ada

File ini dihasilkan di Sprint 5 Sesi 1. Verifikasi kontrak interface:

```javascript
// screens/dashboard.js harus export:
export async function renderDashboard(containerEl, { session, onNavigateBack }) { ... }

// dan expose ke window:
window.dashToggleTP    = (tpNum) => { ... }
window.dashUpdateStatus = (tpNum, status) => { ... }
window.dashSaveNotes   = (tpNum, notes) => { ... }
window.__FLAF_DASH__   = { reload: () => { ... }, refreshStats: () => { ... } }
```

Jika `window.__FLAF_DASH__.refreshStats` belum ada di dashboard.js dari Sesi 1,
tambahkan fungsi stub:

```javascript
window.__FLAF_DASH__ = {
  reload: () => renderDashboard(containerEl, opts),
  refreshStats: () => _renderProgressStats(), // atau nama fungsi yang relevan
};
```

---

### Langkah 6: Update screens/kurikulum.js

Pastikan `renderKurikulum()` memanggil `setupTabBar()` dari render.js:

```javascript
// Di dalam renderKurikulum():
import { setupTabBar, restorePDFCachedState } from '../render.js';

export function renderKurikulum() {
  // ... render CP, ATP, TP content ...
  setupTabBar();
  restorePDFCachedState();
}
```

---

## TESTING CHECKLIST (10 ITEM)

Lakukan di device nyata (Android) atau Chrome DevTools mobile emulation.

### Boot & Session

- [ ] **T1** — App tanpa session: splash → s-activation (bukan s-dash)
- [ ] **T2** — App dengan session valid di IndexedDB: splash → s-dash langsung
- [ ] **T3** — Setelah aktivasi berhasil: langsung navigasi ke s-dash (bukan s-start)

### Navigasi

- [ ] **T4** — s-start: tap "Dashboard Mengajar" → s-dash terbuka
- [ ] **T5** — s-dash: tap tombol back (←) → kembali ke s-start
- [ ] **T6** — s-dash: tap "Beranda" di bot-nav → kembali ke s-start
- [ ] **T7** — s-start: tap "Dokumen Kurikulum" → s-jadwal
- [ ] **T8** — s-jadwal: tap "Beranda" di bot-nav → kembali ke s-start

### Dashboard Content

- [ ] **T9** — s-dash: nama + sekolah guru tampil di header (dari session)
- [ ] **T10** — s-dash: skeleton tampil saat loading, hilang setelah render selesai

### Edge Cases

- [ ] **T11** — Offline: s-dash tetap bisa diakses (data dari IndexedDB)
- [ ] **T12** — Navigasi bolak-balik s-start ↔ s-dash: tidak ada double render
- [ ] **T13** — Settings modal: buka, isi data session tampil, tutup dengan ✕ atau tap overlay
- [ ] **T14** — Hard Reset disabled saat offline: toast muncul, tidak ada aksi
- [ ] **T15** — PDF bulk precache disabled saat offline: toast muncul

---

## CHECKLIST KEPUTUSAN FINAL (konfirmasi tidak ada yang dilanggar)

- [x] IndexedDB digunakan (bukan localStorage) untuk session dan progress
- [x] Soft Update via fetch() saja — tidak menyentuh SW
- [x] Hard Reset disabled saat `navigator.onLine === false`
- [x] Fitur belum siap (s-nilai, s-kuis) disembunyikan total di DOM — tidak ada di index.html
- [x] PDF cache terpisah dari app shell cache (ditangani sw.js)
- [x] Satu screen aktif sekaligus (navigateTo() hide screen lama)
- [x] `CACHE_VERSION` tidak diubah di sesi ini (hanya saat deploy)

---

## CATATAN TEKNIS

### Kenapa dashboardRendered flag?

`renderDashboard()` membaca IndexedDB (async) dan render 18 TP accordion.
Jika dipanggil setiap kali user tap "Dashboard", terjadi flicker dan memory leak.
Flag `dashboardRendered` memastikan render penuh hanya sekali per session.

Jika user import backup → `dashboardRendered = false` → render ulang dengan data baru.

### Kenapa navigateTo() tidak async?

`_onScreenEnter()` yang dipanggil di dalamnya sudah handle async sendiri.
Kode pemanggil (event listener) tidak perlu await navigateTo() —
screen sudah visible seketika, lalu konten menyusul setelah data siap.

### Urutan boot yang benar

```
initApp()
  ↓ _registerServiceWorker()  ← non-blocking
  ↓ db.open()                 ← blocking (perlu sebelum baca session)
  ↓ db.get('keyval', 'session')
  ↓ _bindNavigation()
  ↓ _listenToSW()
  ↓ _bindConnectivity()
  ↓ exportManager.init()      ← hanya jika session ada
  ↓ wait(800ms)               ← splash minimum display time
  ↓ navigateTo('s-dash')      ← jika session ada
     ATAU
  ↓ navigateTo('s-activation') ← jika tidak ada session
```

---

_Dihasilkan: Sprint 5 Sesi 2 — 30 April 2026_
