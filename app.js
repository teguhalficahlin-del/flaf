/**
 * app.js — FLAF Entry Point
 *
 * Tanggung jawab:
 * 1. Registrasi Service Worker
 * 2. Boot sequence: cek session → navigasi awal
 * 3. Navigation handler antar screen
 * 4. SW message listener (update, PDF, hard reset)
 * 5. Online/offline event
 * 6. Export manager init
 * 7. IndexedDB unavailable → tampilkan pesan blocking
 */

import { db }                                                      from './storage/db.js';
import { logger }                                                  from './storage/logger.js';
import { exportManager }                                           from './storage/export.js';
import { renderActivationScreen, checkExistingSession }           from './screens/activation.js';
import { renderKurikulum, resetKurikulum }                         from './screens/kurikulum.js';
import { renderDashboard, resetDashboard }                         from './screens/dashboard.js';
import { downloadPDF }                                             from './modules/pdf-handler.js';
import { renderJejakScreen }                                       from './screens/jejak.js';
import { renderNilaiScreen }                                       from './screens/nilai.js';
import { jejak }                                                   from './storage/jejak.js';
import { nilai }                                                   from './storage/nilai.js';

window.db = db;

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const SW_PATH       = './sw.js';
const DATA_FASE_URL = './data/fase-a.js';

/** @type {ServiceWorkerRegistration | null} */
let swReg = null;

/** Deferred PWA install prompt */
let deferredInstallPrompt = null;

/** Screen aktif saat ini */
let currentScreen = 's-splash';

/** Session guru */
let session = null;

/** Flag: dashboard sudah dirender */
let dashboardRendered = false;

/** Flag: jejak perlu re-render (di-set setelah sesi selesai) */
let _jejakDirty = true;

// ─── SCREEN NAVIGATION ────────────────────────────────────────────────────────

function navigateTo(screenId, opts = {}) {
  const prev = document.getElementById(currentScreen);
  const next = document.getElementById(screenId);

  if (!next) {
    logger.error('app', `navigateTo: screen tidak ditemukan: ${screenId}`);
    return;
  }

  if (prev && prev !== next) {
    // Animasi keluar
    prev.classList.remove('screen-active');
    prev.classList.add('screen-exit');
    setTimeout(() => {
      prev.classList.remove('screen-exit');
      prev.setAttribute('hidden', '');
    }, 220);
  }

  // Set state awal via class (bukan inline style) agar CSS transition bisa berjalan
  next.classList.remove('screen-active', 'screen-exit');
  next.classList.add('screen-entering');
  next.removeAttribute('hidden');

  // Dua frame: browser commit layout dengan state entering, lalu switch ke active
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      next.classList.remove('screen-entering');
      next.classList.add('screen-active');
    });
  });

  next.scrollTop = 0;
  currentScreen = screenId;

  logger.info('app', `navigasi ke: ${screenId}`);

  if (!opts.skipHistory) {
    history.pushState({ screen: screenId }, '', '');
  }

  if (!opts.skipRender) {
    _onScreenEnter(screenId);
  }
}

// Tangani tombol back browser
window.addEventListener('popstate', (e) => {
  const screenId = e.state?.screen ?? 's-splash';
  navigateTo(screenId, { skipHistory: true });
});

function _onScreenEnter(screenId) {
  switch (screenId) {

    case 's-activation': {
      const root = document.getElementById('activation-root');
      if (root && !root.dataset.rendered) {
        renderActivationScreen(root, _onActivationSuccess);
        root.dataset.rendered = 'true';
      }
      break;
    }

    case 's-start': {
      _populateStartScreen();
      break;
    }

    case 's-dash': {
      _initDashboard();
      break;
    }

    case 's-jadwal': {
      const kurRoot = document.getElementById('kurikulum-root');
      if (kurRoot && !kurRoot.dataset.rendered) {
        kurRoot.dataset.rendered = 'true';
        nilai.getKelasList()
          .then(kelasList => {
            const defaultKelas = (kelasList && kelasList.length > 0)
              ? (kelasList[0].tingkat || 1)
              : 'semua';
            renderKurikulum({ onDownloadPDF: downloadPDF, defaultKelas });
          })
          .catch(() => {
            renderKurikulum({ onDownloadPDF: downloadPDF });
          });
      }
      break;
    }

    case 's-jejak': {
      const jejakContent = document.getElementById('jejak-content');
      if (jejakContent && _jejakDirty) {
        _jejakDirty = false;
        renderJejakScreen(jejakContent, session);
      }
      break;
    }

    case 's-nilai': {
      const nilaiRoot = document.getElementById('nilai-root');
      if (nilaiRoot) {
        renderNilaiScreen(nilaiRoot);
      }
      break;
    }

    default:
      break;
  }
}

async function _populateStartScreen() {
  if (!session) return;

  const nameEl   = document.getElementById('start-teacher-name');
  const schoolEl = document.getElementById('start-teacher-school');
  if (nameEl)   nameEl.textContent   = session.name   || '—';
  if (schoolEl) schoolEl.textContent = session.school || '—';

  // Progress bar
  try {
    const all = await db.getAll('teacher_data');
    let selesai = 0;
    for (const { key, value } of all) {
      if (/^progress_tp_\d+$/.test(key) && value?.status === 'selesai') selesai++;
    }
    const pct = Math.round((selesai / 18) * 100);
    const fillEl = document.getElementById('home-progress-fill');
    const countEl = document.getElementById('home-tp-done');
    if (fillEl)  fillEl.style.width = pct + '%';
    if (countEl) countEl.textContent = selesai;
  } catch (err) {
    console.warn('[APP] progress bar gagal:', err.message);
  }

  // Widget rekap nilai per rombel
  try {
    const rekap  = await nilai.getRekapSemua();
    const wrapEl = document.getElementById('home-rekap-nilai');
    if (wrapEl && rekap.length > 0) {
      let totalNilai = 0, jumlahNilai = 0, totalPeserta = 0, totalSiswa = 0, totalTPTuntas = 0;
      for (const r of rekap) {
        if (r.rerata !== null) { totalNilai += r.rerata; jumlahNilai++; }
        totalPeserta  += r.peserta;
        totalSiswa    += r.totalSiswa;
        totalTPTuntas += r.tpTuntas;
      }
      const rerata = jumlahNilai > 0 ? Math.round(totalNilai / jumlahNilai) : null;
      const rerataColor = rerata === null ? 'rgba(255,255,255,.3)'
        : rerata >= 80 ? '#5C8A6E' : rerata >= 70 ? '#D4AE3A' : '#B05A46';

      const avgEl = document.getElementById('home-nilai-avg');
      const cntEl = document.getElementById('home-nilai-count');
      const tpEl  = document.getElementById('home-nilai-tp');
      if (avgEl) { avgEl.textContent = rerata !== null ? rerata : '—'; avgEl.style.color = rerataColor; }
      if (cntEl) cntEl.textContent = totalSiswa > 0 ? `${totalPeserta}/${totalSiswa}` : '—';
      if (tpEl)  tpEl.textContent  = `${totalTPTuntas}/${rekap.length * 9}`;

      // label sudah di-hardcode di HTML — tidak perlu di-override
    }
  } catch (err) {
    console.warn('[APP] rekap nilai gagal:', err.message);
  }

  // Backup status
  try {
    const lastExport = await db.get('kv', 'last_export_at');
    const backupBar  = document.getElementById('home-backup-bar');
    const backupDesc = document.getElementById('home-backup-desc');
    if (backupBar && backupDesc) {
      const now  = Date.now();
      const last = lastExport ? Number(lastExport) : null;
      const days = last ? Math.floor((now - last) / 86400000) : null;
      if (!last || days >= 7) {
        backupBar.className = 'home-backup home-backup--warn';
        backupDesc.textContent = last
          ? `${days} hari lalu — simpan sekarang`
          : 'Belum pernah disimpan';
      } else {
        backupBar.className = 'home-backup home-backup--safe';
        backupDesc.textContent = days === 0
          ? 'Hari ini · Data aman tersimpan'
          : `${days} hari lalu · Data aman`;
        const btn = document.getElementById('home-backup-action');
        if (btn) btn.textContent = '✓ Aman';
      }
    }
  } catch (err) {
    console.warn('[APP] backup status gagal:', err.message);
  }
}

// ─── SCREEN: DASHBOARD ────────────────────────────────────────────────────────

async function _initDashboard() {
  const dashRoot     = document.getElementById('dash-root');
  const dashSkeleton = document.getElementById('dash-skeleton');

  if (!dashRoot) {
    logger.error('app', '_initDashboard: #dash-root tidak ditemukan');
    return;
  }

  if (dashSkeleton) dashSkeleton.removeAttribute('hidden');
  try {
    await renderDashboard(dashRoot, {
      session,
      onNavigateBack: (target) => navigateTo(target === 'nilai' ? 's-nilai' : 's-start'),
    });
    dashboardRendered = true;
    if (dashSkeleton) dashSkeleton.setAttribute('hidden', '');
  } catch (err) {
    logger.error('app', 'renderDashboard gagal', { err: err.message });
    if (dashSkeleton) dashSkeleton.setAttribute('hidden', '');
  }

  _updateDashConnectivity();
}

function _updateDashConnectivity() {
  const badge = document.getElementById('dash-connectivity-badge');
  if (!badge) return;
  if (navigator.onLine) {
    badge.textContent = '';
    badge.className   = '';
  } else {
    badge.textContent = '● Offline';
    badge.className   = 'connectivity-badge-offline';
  }
}

// ─── ACTIVATION CALLBACK ──────────────────────────────────────────────────────

async function _onActivationSuccess(teacherData) {
  session = teacherData;
  dashboardRendered = false;

  // Init export manager tapi TIDAK auto-export saat aktivasi pertama
  // — data masih kosong, tidak ada yang perlu di-backup
  exportManager.init({ getTeacherName: () => session?.name });

  logger.info('app', 'aktivasi berhasil', { name: teacherData.name });

  navigateTo('s-start');
}

// ─── BOOT SEQUENCE ────────────────────────────────────────────────────────────

async function initApp() {
  // STEP 0: logger — sebelum apapun agar semua error tercatat
  try {
    await logger.init();
  } catch (err) {
    console.error('[APP] logger.init() gagal:', err?.message);
  }

  // STEP 1: Registrasi SW (non-blocking — tidak perlu tunggu)
  _registerServiceWorker();

  // STEP 2: Init IndexedDB — WAJIB selesai sebelum langkah berikutnya
  // Urutan log yang dijamin:
  //   [DB] init start
  //   [DB] upgrade needed  (hanya saat pertama / versi baru)
  //   [DB] init success
  let idbOk = false;
  try {
    await db.init();
    idbOk = true;
    console.log('[APP] IndexedDB siap');
  } catch (err) {
    console.error('[APP] IndexedDB gagal init:', err.message);
  }

  // STEP 3: Jika IDB tidak tersedia, hentikan boot dan tampilkan pesan
  if (!idbOk) {
    _showIDBUnavailableScreen();
    return;
  }

  // STEP 4: Load session — IndexedDB sudah pasti siap di sini
  console.log('[APP] load session');
  let sessionCheck = null;
  try {
    sessionCheck = await checkExistingSession();
  } catch (err) {
    console.warn('[APP] session check gagal:', err.message);
  }

  session = (sessionCheck && sessionCheck.active === true) ? sessionCheck : null;

  // STEP 5: Bind semua event listener
  _bindNavigation();
  _listenToSW();
  _bindConnectivity();
  _bindPWAInstall();

  // STEP 6: Init export manager jika session valid
  if (session) {
    try {
      exportManager.init({ getTeacherName: () => session?.name });
      // Auto-download dihapus — cukup tampilkan pengingat jika backup sudah lama
      exportManager.getExportInfo().then(info => {
        if (info.isDue) {
          const reminder = document.getElementById('export-reminder');
          if (reminder) reminder.removeAttribute('hidden');
        }
      }).catch(() => {});
    } catch (err) {
      console.warn('[APP] exportManager.init gagal:', err.message);
    }
  }

  // STEP 7: App siap — aktifkan tombol MULAI
  const btnMulai     = document.getElementById('btn-mulai');
  const btnMulaiText = document.getElementById('btn-mulai-text');

  if (btnMulai && btnMulaiText) {
    btnMulaiText.textContent = 'MULAI →';
    btnMulai.disabled = false;
    btnMulai.addEventListener('click', () => {
      btnMulai.disabled = true;
      btnMulaiText.textContent = 'Membuka…';
      console.log('[APP] navigasi →', session ? 's-start' : 's-activation');
      if (!session) {
        navigateTo('s-activation');
      } else {
        navigateTo('s-start');
      }
    }, { once: true });
  } else {
    // Fallback jika elemen tidak ditemukan
    console.log('[APP] navigasi →', session ? 's-start' : 's-activation');
    if (!session) {
      navigateTo('s-activation');
    } else {
      navigateTo('s-start');
    }
  }
}

// ─── IDB UNAVAILABLE SCREEN ───────────────────────────────────────────────────

function _showIDBUnavailableScreen() {
  const splash = document.getElementById('s-splash');
  if (splash) {
    splash.querySelector('.splash-status') &&
      (splash.querySelector('.splash-status').textContent = '');

    const inner = splash.querySelector('.splash-inner');
    if (inner) {
      inner.innerHTML = `
        <div style="text-align:center;padding:24px 20px;max-width:320px;margin:0 auto">
          <div style="font-size:32px;margin-bottom:16px">⚠️</div>
          <div style="font-size:15px;font-weight:800;color:#fff;margin-bottom:10px">Penyimpanan Tidak Tersedia</div>
          <div style="font-size:12px;color:rgba(255,255,255,.6);line-height:1.7;margin-bottom:20px">
            Aplikasi tidak bisa menyimpan data karena penyimpanan browser tidak tersedia.<br><br>
            Kemungkinan penyebab:<br>
            • Mode penyamaran (private/incognito)<br>
            • Storage penuh<br>
            • Kebijakan browser memblokir IndexedDB
          </div>
          <div style="font-size:11px;color:rgba(255,255,255,.4)">
            Tutup mode penyamaran dan buka ulang aplikasi, atau bebaskan ruang penyimpanan.
          </div>
        </div>`;
    }
  }
}

// ─── EVENT BINDING ────────────────────────────────────────────────────────────
function _syncHardResetBtn() {
  const btn = document.getElementById('btn-hard-reset');
  if (!btn) return;
  btn.disabled = !navigator.onLine;
}
function _bindNavigation() {
  _on('btn-go-dash',    'click', () => navigateTo('s-dash'));
  _on('btn-go-jadwal',  'click', () => navigateTo('s-jadwal'));
  _on('btn-go-jejak',   'click', () => navigateTo('s-jejak'));
  _on('btn-go-nilai',   'click', () => navigateTo('s-nilai'));
  _on('dash-nav-menu',     'click', () => navigateTo('s-start'));
  _on('dash-nav-dash',     'click', () => navigateTo('s-dash'));
  _on('dash-nav-nilai',    'click', () => navigateTo('s-nilai'));
  _on('dash-nav-dokumen',  'click', () => navigateTo('s-jadwal'));
  _on('dash-nav-jejak',    'click', () => navigateTo('s-jejak'));
  _on('jejak-nav-menu',    'click', () => navigateTo('s-start'));
  _on('jejak-nav-dash',    'click', () => navigateTo('s-dash'));
  _on('jejak-nav-nilai',   'click', () => navigateTo('s-nilai'));
  _on('jejak-nav-dokumen', 'click', () => navigateTo('s-jadwal'));
  _on('jejak-nav-jejak',   'click', () => navigateTo('s-jejak'));
  _on('jadwal-nav-menu',   'click', () => navigateTo('s-start'));
  _on('jadwal-nav-dash',   'click', () => navigateTo('s-dash'));
  _on('jadwal-nav-nilai',  'click', () => navigateTo('s-nilai'));
  _on('jadwal-nav-dokumen','click', () => navigateTo('s-jadwal'));
  _on('jadwal-nav-jejak',  'click', () => navigateTo('s-jejak'));
  _on('nilai-nav-menu',    'click', () => navigateTo('s-start'));
  _on('nilai-nav-dash',    'click', () => navigateTo('s-dash'));
  _on('nilai-nav-nilai',   'click', () => navigateTo('s-nilai'));
  _on('nilai-nav-dokumen', 'click', () => navigateTo('s-jadwal'));
  _on('nilai-nav-jejak',   'click', () => navigateTo('s-jejak'));

  _on('btn-settings',          'click', _openSettings);
  _on('modal-settings-close',  'click', _closeSettings);
  _on('modal-settings-overlay','click', _closeSettings);

  _on('btn-export-now', 'click', async () => {
    try {
      await exportManager.triggerManualExport();
      showToast('✓ Backup berhasil disimpan');
    } catch (err) {
      showToast('Backup gagal. Coba lagi.');
    }
  });

  _on('btn-import-data', 'click', () => {
    document.getElementById('import-file-input')?.click();
  });

  _on('import-file-input', 'change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const result = await exportManager.importBackup(file);
      showToast(`✓ Restore selesai: ${result.merged} record dimerge`);
      dashboardRendered = false;
      if (currentScreen === 's-dash') _initDashboard();
    } catch (err) {
      showToast(`Import gagal: ${err.message}`);
    }
    e.target.value = '';
  });

  _on('btn-soft-update', 'click', () => window.__FLAF__?.softUpdate());
  _on('btn-hard-reset',  'click', () => window.__FLAF__?.hardReset());

  window.addEventListener('online',  _syncHardResetBtn);
  window.addEventListener('offline', _syncHardResetBtn);
  _syncHardResetBtn();

  _on('btn-manual-export', 'click', async () => {
    try {
      await exportManager.triggerManualExport();
      showToast('✓ Backup berhasil disimpan');
      document.getElementById('export-reminder')?.setAttribute('hidden', '');
    } catch {
      showToast('Backup gagal. Coba lagi.');
    }
  });

  _on('btn-precache-all', 'click', () => {
    if (!navigator.onLine) {
      showToast('Tidak ada koneksi. Sambungkan internet terlebih dahulu.');
      return;
    }
    window.__FLAF__?.precacheAllPDF();
  });

  window.addEventListener('flaf:export-needed', (e) => {
    const { urgent } = e.detail || {};
    const reminder = document.getElementById('export-reminder');
    if (reminder) reminder.removeAttribute('hidden');
    if (urgent) showToast('⚠ Backup diperlukan segera');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') _closeSettings();
  });
}

// ─── SETTINGS MODAL ───────────────────────────────────────────────────────────

function _openSettings() {
  _syncHardResetBtn();
  const modal = document.getElementById('modal-settings');
  if (!modal) return;

  _setText('settings-name',   session?.name   || '—');
  _setText('settings-school', session?.school || '—');
  _setText('settings-code',   session?.code   || '—');

  _loadCacheStats();

  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function _closeSettings() {
  const modal = document.getElementById('modal-settings');
  if (!modal) return;
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

async function _loadCacheStats() {
  if (!swReg?.active) return;
  try {
    const stats = await _swRequest('GET_CACHE_STATS');
    if (!stats) return;
    const fmtKB = (b) => b > 0 ? `${Math.round(b / 1024)} KB` : '0 KB';
    _setText('settings-cache-app', fmtKB(stats.appShell?.totalBytes ?? 0));
    _setText('settings-cache-pdf',
      `${stats.pdf?.files ?? 0}/18 file · ${fmtKB(stats.pdf?.totalBytes ?? 0)}`
    );
  } catch {
    // Non-fatal
  }
}

// ─── SW REGISTRATION ──────────────────────────────────────────────────────────

async function _registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    logger.warn('app', 'Service Worker tidak didukung browser ini');
    return;
  }

  try {
    swReg = await navigator.serviceWorker.register(SW_PATH);

    // Kasus 1: SW baru ditemukan (update) — tunggu activated lalu reload
    swReg.addEventListener('updatefound', () => {
      const newWorker = swReg.installing;
      if (!newWorker) return;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'activated') {
          // Reload otomatis agar halaman dikontrol SW baru
          // Flag di sessionStorage mencegah reload loop
          if (!sessionStorage.getItem('sw_reloaded')) {
            sessionStorage.setItem('sw_reloaded', '1');
            location.reload();
          } else {
            showToast('Aplikasi diperbarui. Muat ulang untuk versi terbaru.');
          }
        }
      });
    });

    // Kasus 2: SW sudah aktif tapi controller null (first-install atau claim belum terjadi)
    // Reload sekali agar halaman ini dikontrol oleh SW yang sudah aktif
    if (swReg.active && !navigator.serviceWorker.controller) {
      if (!sessionStorage.getItem('sw_reloaded')) {
        sessionStorage.setItem('sw_reloaded', '1');
        logger.info('app', 'SW aktif tapi controller null — reload sekali');
        location.reload();
        return;
      }
    }

    // Reset flag reload setelah SW sudah mengontrol halaman
    if (navigator.serviceWorker.controller) {
      sessionStorage.removeItem('sw_reloaded');
    }

    logger.info('app', 'SW terdaftar', { scope: swReg.scope });

  } catch (err) {
    logger.error('app', 'SW registrasi gagal', { err: err.message });
  }
}

// ─── SW MESSAGE LISTENER ──────────────────────────────────────────────────────

function _listenToSW() {
  navigator.serviceWorker?.addEventListener('message', (event) => {
    const { type, payload } = event.data || {};

    switch (type) {
      case 'SW_ACTIVATED':
        logger.info('app', 'SW_ACTIVATED diterima');
        break;

      case 'DATA_UPDATED':
        showToast('✓ Data kurikulum diperbarui');
        break;

      case 'HARD_RESET_DONE':
        showToast('Reset selesai. Memuat ulang…');
        setTimeout(() => location.reload(), 1500);
        break;

      case 'PDF_PRECACHE_START':
        _onPDFPrecacheStart(event.data);
        break;

      case 'PDF_PRECACHE_PROGRESS':
        _onPDFPrecacheProgress(event.data);
        break;

      case 'PDF_PRECACHE_DONE':
        _onPDFPrecacheDone(event.data);
        break;

      case 'PDF_CACHE_STATUS':
        window.dispatchEvent(new CustomEvent('flaf:pdf:status', { detail: payload }));
        break;

      case 'PDF_CACHE_CLEARED':
        showToast('Cache PDF dihapus');
        _resetBulkPDFUI();
        break;

      default:
        break;
    }
  });
}

// ─── PDF PRECACHE UI ──────────────────────────────────────────────────────────

function _onPDFPrecacheStart({ total } = {}) {
  const bar    = document.getElementById('pdf-bulk-progress');
  const barFill= document.getElementById('pdf-bulk-progress-bar');
  const label  = document.getElementById('pdf-bulk-progress-label');
  const btn    = document.getElementById('btn-precache-all');
  const status = document.getElementById('pdf-bulk-status');

  if (bar)    bar.removeAttribute('hidden');
  if (barFill) barFill.style.width = '0%';
  if (label)  label.textContent = `0 / ${total ?? 18}`;
  if (btn)    { btn.disabled = true; btn.textContent = 'Menyimpan…'; }
  if (status) status.textContent = 'Sedang diunduh…';
}

function _onPDFPrecacheProgress({ current, total, filename } = {}) {
  const barFill = document.getElementById('pdf-bulk-progress-bar');
  const label   = document.getElementById('pdf-bulk-progress-label');
  const pct     = total > 0 ? Math.round((current / total) * 100) : 0;

  if (barFill) barFill.style.width = `${pct}%`;
  if (label)   label.textContent   = `${current} / ${total}`;

  if (filename) {
    const match = filename.match(/tp-(\d{2})-v\d+\.pdf$/);
    if (match) {
      const tpNum = parseInt(match[1], 10);
      markPDFCached(tpNum, 'cached');
    }
  }
}

function _onPDFPrecacheDone({ total, failed } = {}) {
  const bar    = document.getElementById('pdf-bulk-progress');
  const btn    = document.getElementById('btn-precache-all');
  const status = document.getElementById('pdf-bulk-status');

  if (bar) bar.setAttribute('hidden', '');
  if (btn) { btn.disabled = false; btn.textContent = 'Simpan Semua'; }

  const msg = failed > 0
    ? `⚠ ${total - failed}/18 tersimpan (${failed} gagal)`
    : `✓ Semua ${total} PDF tersimpan offline`;

  if (status) status.textContent = failed > 0 ? `${total - failed}/18 tersimpan` : 'Semua tersimpan ✓';
  showToast(msg);
}

function _resetBulkPDFUI() {
  const bar    = document.getElementById('pdf-bulk-progress');
  const btn    = document.getElementById('btn-precache-all');
  const status = document.getElementById('pdf-bulk-status');
  if (bar)    bar.setAttribute('hidden', '');
  if (btn)    { btn.disabled = false; btn.textContent = 'Simpan Semua'; }
  if (status) status.textContent = 'Belum tersimpan';
}

function markPDFCached(tpNum, status) {
  const btn = document.querySelector(`[data-tp-pdf="${tpNum}"]`);
  if (!btn) return;
  if (status === 'cached') {
    btn.textContent = '✓ Sudah diunduh';
    btn.classList.add('pdf-btn-cached');
  }
}

// ─── CONNECTIVITY ─────────────────────────────────────────────────────────────

function _bindConnectivity() {
  const emit = (online) => {
    window.dispatchEvent(new CustomEvent('flaf:connectivity', { detail: { online } }));
    if (currentScreen === 's-dash') _updateDashConnectivity();
    logger.info('app', online ? 'online' : 'offline');

    // Tidak ada sync ke server — FLAF berjalan sepenuhnya offline
    if (online && session?.device_id) {
      _syncAll(session.device_id);
    }
  };
  window.addEventListener('online',  () => emit(true));
  window.addEventListener('offline', () => emit(false));

  // Hook sync (no-op untuk mode offline-only)
  if (navigator.onLine && session?.device_id) {
    _syncAll(session.device_id);
  }
}

async function _syncAll(deviceId) {
  // jejak.sync() dan nilai.sync() adalah no-op offline-only stubs.
  // Fungsi ini dipertahankan untuk kompatibilitas struktur.
  try {
    const [r1, r2] = await Promise.all([
      jejak.sync(deviceId),
      nilai.sync(deviceId),
    ]);
    logger.info('app', 'sync selesai (offline-only)', {
      jejak: r1,
      nilai: r2,
    });
  } catch (err) {
    logger.warn('app', 'sync gagal', { err: err.message });
  }
}

function _isAppInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true
    || localStorage.getItem('flaf_pwa_installed') === '1';
}

function _bindPWAInstall() {
  // Jika sudah terinstall — sembunyikan selamanya, tidak perlu lanjut
  if (_isAppInstalled()) {
    _hidePWAInstallCTA();
    return;
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    _showPWAInstallCTA();
    logger.info('app', 'beforeinstallprompt diterima');
  });

  window.addEventListener('appinstalled', () => {
    localStorage.setItem('flaf_pwa_installed', '1');
    showToast('✓ FLAF berhasil dipasang.');
    logger.info('app', 'appinstalled event diterima');
    _hidePWAInstallCTA();
  });

  _on('btn-install-pwa', 'click', _promptInstall);
}

function _showPWAInstallCTA() {
  const btn = document.getElementById('btn-install-pwa');
  if (btn) btn.hidden = false;
}

function _hidePWAInstallCTA() {
  const btn = document.getElementById('btn-install-pwa');
  if (btn) btn.hidden = true;
}

async function _promptInstall() {
  if (!deferredInstallPrompt) {
    showToast('Instalasi aplikasi tidak tersedia saat ini.');
    return;
  }
  deferredInstallPrompt.prompt();
  const choice = await deferredInstallPrompt.userChoice;
  if (choice.outcome === 'accepted') {
    showToast('Terima kasih. Instalasi sedang diproses.');
  } else {
    showToast('Instalasi dibatalkan.');
  }
  deferredInstallPrompt = null;
  _hidePWAInstallCTA();
}

// ─── TOAST ────────────────────────────────────────────────────────────────────

let _toastTimer = null;

function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  clearTimeout(_toastTimer);
  toast.textContent = message;
  toast.classList.add('toast-visible');
  _toastTimer = setTimeout(() => toast.classList.remove('toast-visible'), duration);
}

// ─── SW UTILITY ───────────────────────────────────────────────────────────────

function _swRequest(type, payload = {}) {
  return new Promise((resolve, reject) => {
    const sw = navigator.serviceWorker?.controller;
    if (!sw) { resolve(null); return; }
    const channel = new MessageChannel();
    const timer   = setTimeout(() => reject(new Error('SW request timeout')), 5000);
    channel.port1.onmessage = (e) => {
      clearTimeout(timer);
      resolve(e.data);
    };
    sw.postMessage({ type, payload }, [channel.port2]);
  });
}

// ─── SOFT UPDATE ──────────────────────────────────────────────────────────────

async function softUpdate() {
  if (!navigator.onLine) {
    showToast('Tidak ada koneksi untuk update data.');
    return;
  }
  showToast('Memeriksa update data…');
  try {
    const resp = await fetch(DATA_FASE_URL, {
      cache: 'no-cache',
      headers: { 'Cache-Control': 'no-cache' },
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const text = await resp.text();

    const versionMatch = text.match(/data_version\s*:\s*['"]([^'"]+)['"]/);
    const newVersion   = versionMatch?.[1];
    if (!newVersion) {
      showToast('Update tidak valid — data_version tidak ada.');
      return;
    }

    const currentVersion = await db.get('kv', 'data_version').catch(() => null);
    if (currentVersion === newVersion) {
      showToast('Data sudah versi terbaru.');
      return;
    }

    await db.set('kv', 'data_version', newVersion);
    showToast('✓ Data diperbarui ke versi terbaru.');
    logger.info('app', 'softUpdate selesai', { from: currentVersion, to: newVersion });
  } catch (err) {
    logger.error('app', 'softUpdate gagal', { err: err.message });
    showToast('Gagal memeriksa update. Coba lagi.');
  }
}

// ─── HARD RESET ───────────────────────────────────────────────────────────────

async function hardReset() {
  if (!navigator.onLine) {
    showToast('Hard Reset tidak bisa dilakukan saat offline.');
    return;
  }
  const confirmed = window.confirm(
    'Hard Reset akan menghapus SEMUA cache aplikasi dan PDF.\n' +
    'Data kemajuan mengajar di IndexedDB TIDAK dihapus.\n\n' +
    'Lanjutkan?'
  );
  if (!confirmed) return;

  logger.warn('app', 'hardReset dimulai oleh pengguna');

  const sw = navigator.serviceWorker?.controller;
  if (sw) {
    sw.postMessage({ type: 'HARD_RESET' });
  } else {
    try {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(n => caches.delete(n)));
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r => r.unregister()));
    } catch (err) {
      logger.error('app', 'hardReset fallback gagal', { err: err.message });
    }
    showToast('Reset selesai. Memuat ulang…');
    setTimeout(() => location.reload(), 1500);
  }
}

// ─── PDF CONTROLS ─────────────────────────────────────────────────────────────

function precacheAllPDF() {
  const sw = navigator.serviceWorker?.controller;
  if (!sw) { showToast('Service Worker belum aktif.'); return; }
  sw.postMessage({ type: 'PRECACHE_ALL_PDF' });
}

function getPDFCacheStatus() {
  const sw = navigator.serviceWorker?.controller;
  if (!sw) return;
  sw.postMessage({ type: 'GET_PDF_CACHE_STATUS' });
}

function clearPDFCache() {
  const confirmed = window.confirm('Hapus semua file PDF yang tersimpan offline?');
  if (!confirmed) return;
  const sw = navigator.serviceWorker?.controller;
  if (!sw) return;
  sw.postMessage({ type: 'CLEAR_PDF_CACHE' });
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function _on(id, event, handler) {
  const el = document.getElementById(id);
  if (el) el.addEventListener(event, handler);
}

function _setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function _wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function _updateSplashStatus(text) {
  const el = document.getElementById('splash-status');
  if (el) el.textContent = text;
}

// ─── PUBLIC API ───────────────────────────────────────────────────────────────

window.__FLAF__ = {
  softUpdate,
  hardReset,
  showToast,
  precacheAllPDF,
  getPDFCacheStatus,
  clearPDFCache,
};

window.__FLAF_NAV__ = {
  navigateTo,
  getCurrentScreen: () => currentScreen,
  _setJejakDirty  : () => { _jejakDirty = true; },
};

// ─── BOOT ─────────────────────────────────────────────────────────────────────

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
