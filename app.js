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

// --- GLOBAL ERROR HANDLER ---------------------------------------------------

window.onerror = function(message, source, lineno, colno, error) {
  console.error('[FLAF] Global error:', message, 'at', source, lineno, colno, error);
  const existing = document.getElementById('flaf-error-overlay');
  if (existing) return false;
  const overlay = document.createElement('div');
  overlay.id = 'flaf-error-overlay';
  overlay.style.cssText = [
    'position:fixed', 'inset:0', 'z-index:99999',
    'background:rgba(18,18,18,.97)',
    'display:flex', 'flex-direction:column',
    'align-items:center', 'justify-content:center',
    'padding:32px', 'text-align:center',
    'font-family:system-ui,sans-serif',
  ].join(';');
  overlay.innerHTML = `
    <div style="font-size:36px;margin-bottom:16px;">⚠️</div>
    <div style="font-size:17px;font-weight:700;color:#fff;margin-bottom:10px;">
      Terjadi kesalahan
    </div>
    <div style="font-size:14px;color:rgba(255,255,255,.6);line-height:1.6;margin-bottom:24px;">
      Coba tutup dan buka kembali aplikasi.<br>
      Jika masalah berlanjut, hubungi admin.
    </div>
    <button onclick="location.reload()"
      style="padding:12px 28px;border-radius:10px;border:none;
      background:#D4AE3A;color:#1a1a1a;font-size:15px;
      font-weight:700;cursor:pointer;">
      Muat Ulang
    </button>
    <div style="margin-top:16px;font-size:11px;color:rgba(255,255,255,.25);">
      ${message || ''} · ${source ? source.split('/').pop() : ''} :${lineno || ''}
    </div>
  `;
  document.body.appendChild(overlay);
  return false;
};

window.onunhandledrejection = function(event) {
  console.error('[FLAF] Unhandled promise rejection:', event.reason);
  window.onerror(
    event.reason?.message || 'Unhandled promise rejection',
    event.reason?.stack || '',
    0, 0,
    event.reason
  );
};

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
    // Bersihkan runtime height jika keluar dari s-dash
    if (prev.id === 's-dash') {
      const dashRoot = document.getElementById('dash-root');
      if (dashRoot) {
        dashRoot.style.height   = '';
        dashRoot.style.overflow = '';
      }
      prev.style.height   = '';
      prev.style.overflow = '';
    }
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

  /*
   * Reset scroll ke atas saat berganti screen.
   * Dalam arsitektur baru, scroll ada di #app-viewport — bukan di screen.
   * next.scrollTop = 0 tidak efektif lagi; yang harus di-reset adalah viewport.
   */
  const viewport = document.getElementById('app-viewport');
  if (viewport) {
    viewport.scrollTop = 0;
    /*
     * Screen dengan nav mengelola scrollnya sendiri (area konten internal).
     * Tambah class 'viewport-locked' agar #app-viewport tidak ikut scroll.
     *
     * Pengecualian: s-dash dikelola oleh _bindRuntimeObserver.
     * Observer akan toggle viewport-locked berdasarkan state runtime v6.
     * Saat masuk s-dash pertama kali (belum runtime), viewport tidak locked.
     */
    if (screenId !== 's-dash') {
      const nextHasNav = next.classList.contains('screen-with-nav');
      viewport.classList.toggle('viewport-locked', nextHasNav);
    }
    // s-dash: viewport-locked dikontrol oleh _bindRuntimeObserver
    // Pastikan dimulai tidak locked (runtime belum aktif)
    if (screenId === 's-dash') {
      viewport.classList.remove('viewport-locked');
    }
  }

  currentScreen = screenId;

  logger.info('app', `navigasi ke: ${screenId}`);

  if (!opts.skipHistory) {
    history.pushState({ screen: screenId }, '', '');
  }

  if (!opts.skipRender) {
    _onScreenEnter(screenId, opts);
  }
}

// Tangani tombol back browser
window.addEventListener('popstate', (e) => {
  const screenId = e.state?.screen ?? 's-splash';
  navigateTo(screenId, { skipHistory: true });
});

function _onScreenEnter(screenId, opts = {}) {
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
      const tpNomor = opts?.tpNomor ?? null;
      const _scrollToTP = (nomor, kelas) => {
        if (!nomor) return;
        if (kelas && window.kurFilterKelas) window.kurFilterKelas(kelas);
        const tpId = opts?.tpId ?? `tp-${String(nomor).padStart(2, '0')}`;
        const el = document.getElementById(`kur-${tpId}`);
        if (!el) return;
        // Buka accordion jika tertutup
        const head = el.querySelector('.kur-tp-head');
        const body = document.getElementById(`kur-${tpId}-body`);
        if (head && body && body.hidden) head.click();
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
      };
      if (kurRoot && !kurRoot.dataset.rendered) {
        nilai.getKelasList()
          .then(kelasList => {
            const defaultKelas = tpNomor
              ? (opts?.kelas ?? 1)
              : (kelasList && kelasList.length > 0)
                ? (kelasList[0].tingkat || 1)
                : 'semua';
            kurRoot.dataset.rendered = 'true';
            renderKurikulum({ onDownloadPDF: downloadPDF, defaultKelas });
            setTimeout(() => _scrollToTP(tpNomor, opts?.kelas), 300);
          })
          .catch(() => {
            kurRoot.dataset.rendered = 'true';
            renderKurikulum({ onDownloadPDF: downloadPDF });
            setTimeout(() => _scrollToTP(tpNomor, opts?.kelas), 300);
          });
      } else {
        // Sudah rendered — langsung scroll
        setTimeout(() => _scrollToTP(tpNomor, opts?.kelas), 100);
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

function _totalTP(kelas) {
  if (kelas <= 2) return 9;
  return 11;
}

function _buildProgressText(tpSelesai, total = 18, fase = 'A') {
  const pct  = Math.round((tpSelesai / total) * 100);
  const sisa = total - tpSelesai;
  if (tpSelesai === 0)   return `0% · Ayo mulai langkah pertama!`;
  if (tpSelesai <= 4)    return `${pct}% · ${tpSelesai} TP selesai — terus semangat!`;
  if (tpSelesai <= 13)   return `${pct}% · ${tpSelesai} TP selesai — ${sisa} TP lagi sampai tuntas`;
  if (tpSelesai < total) return `${pct}% · Hampir tuntas — ${sisa} TP tersisa!`;
  return `100% · Semua TP Fase ${fase} tuntas! 🎉`;
}

async function _populateStartScreen() {
  if (!session) return;

  const nameEl   = document.getElementById('start-teacher-name');
  const kelasEl  = document.getElementById('start-teacher-kelas');
  const schoolEl = document.getElementById('start-teacher-school');
  if (nameEl)   nameEl.textContent   = session.name   || '—';
  if (kelasEl) {
    const k = session.kelas;
    kelasEl.textContent = (k && k !== 'all') ? `Kelas ${k}` : '';
  }
  if (schoolEl) schoolEl.textContent = session.school || '';

  // Progress bar
  try {
    const all = await db.getAll('teacher_data');
    let selesai = 0;
    for (const { key, value } of all) {
      if (/^progress_tp_tp-\d+_/.test(key) && value?.status === 'selesai') selesai++;
    }
    const totalTP = _totalTP(session?.kelas ?? 1);
    // Update deskripsi card Dokumen Kurikulum
    const descEl = document.querySelector('#btn-go-jadwal .home-card-desc');
    if (descEl) descEl.textContent = `CP, ATP, ${totalTP} TP + modul PDF siap unduh`;
    const fase = session?.kelas <= 2 ? 'A' : session?.kelas <= 4 ? 'B' : 'C';
    const pct      = Math.round((selesai / totalTP) * 100);
    const fillEl   = document.getElementById('home-progress-fill');
    const countEl  = document.getElementById('home-tp-done');
    const totalEl  = document.getElementById('home-tp-total');
    const subEl    = document.getElementById('home-progress-sub');
    const labelEl  = document.getElementById('home-fase-label');
    if (fillEl)  fillEl.style.width  = pct + '%';
    if (countEl) countEl.textContent = selesai;
    if (totalEl) totalEl.textContent = ` / ${totalTP} TP`;
    if (labelEl) labelEl.textContent = `PROGRES FASE ${fase}`;
    if (subEl)   subEl.textContent   = _buildProgressText(selesai, totalTP, fase);
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

  const homeBackupAction = document.getElementById('home-backup-action');
  if (homeBackupAction) {
    homeBackupAction.addEventListener('click', () => {
      exportManager.triggerManualExport();
    });
  }

  _showWelcomeOverlay(session);
}

// ─── WELCOME OVERLAY ──────────────────────────────────────────────────────────

function _showWelcomeOverlay(sess) {
  if (!sess?.code) return;
  const key = `flaf_welcomed_${sess.code}`;
  if (localStorage.getItem(key)) return;
  localStorage.setItem(key, '1');

  const k      = sess.kelas;
  const fase   = (!k || k === 'all') ? null : k <= 2 ? 'A' : k <= 4 ? 'B' : 'C';
  const tp     = (!k || k === 'all') ? null : k <= 2 ? 9 : 11;
  const kelasLine = (k && k !== 'all' && fase)
    ? `Kelas ${k} · Fase ${fase}`
    : '';
  const tpLine = tp
    ? `Siap membantu Anda mengajar Bahasa Inggris dengan ${tp} Tujuan Pembelajaran yang terstruktur.`
    : 'Siap membantu Anda mengajar Bahasa Inggris.';

  const overlay = document.createElement('div');
  overlay.id = 'home-welcome-overlay';
  overlay.className = 'home-welcome-overlay';
  overlay.innerHTML = `
    <div class="home-welcome-card">
      <div class="home-welcome-label">SELAMAT DATANG DI FLAF</div>
      <div class="home-welcome-name">${_escHTML(sess.name || '—')}</div>
      ${kelasLine ? `<div class="home-welcome-kelas">${_escHTML(kelasLine)}</div>` : ''}
      ${sess.school ? `<div class="home-welcome-school">${_escHTML(sess.school)}</div>` : ''}
      <div class="home-welcome-desc">${_escHTML(tpLine)}</div>
      <div class="home-welcome-hint">Tutup otomatis dalam 5 detik</div>
    </div>
  `;

  overlay.addEventListener('click', () => _closeWelcomeOverlay(overlay));
  document.body.appendChild(overlay);

  // Fade in
  requestAnimationFrame(() => overlay.classList.add('home-welcome-overlay--visible'));

  setTimeout(() => _closeWelcomeOverlay(overlay), 5000);
}

function _closeWelcomeOverlay(overlay) {
  if (!overlay || !overlay.parentNode) return;
  overlay.classList.remove('home-welcome-overlay--visible');
  overlay.classList.add('home-welcome-overlay--exit');
  setTimeout(() => overlay.parentNode?.removeChild(overlay), 300);
}

function _escHTML(str) {
  return String(str || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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

  // Runtime v6: pasang observer untuk mendeteksi masuk/keluar runtime
  // sehingga #dash-root bisa dapat height:100% yang diperlukan
  _bindRuntimeObserver(dashRoot);
}

/**
 * Mengamati perubahan class di dalam #dash-root.
 * Saat runtime v6 aktif (.ds-stepper-wrap--runtime ada),
 * #dash-root dan #s-dash perlu height:100% agar rantai flex bekerja.
 * Saat runtime selesai, height dikembalikan ke normal (scroll biasa).
 */
function _bindRuntimeObserver(dashRoot) {
  if (!dashRoot || dashRoot._rtObserver) return; // Jangan pasang dua kali

  const sDash    = document.getElementById('s-dash');
  const viewport = document.getElementById('app-viewport');

  function _applyRuntimeHeight(active) {
    // #dash-root: height:100% saat runtime, auto saat normal
    dashRoot.style.height   = active ? '100%' : '';
    dashRoot.style.overflow = active ? 'hidden' : '';

    // #s-dash: height:100% diperlukan agar rantai sampai ke rt-surface
    if (sDash) {
      sDash.style.height   = active ? '100%' : '';
      sDash.style.overflow = active ? 'hidden' : '';
    }

    // #app-viewport: saat runtime, viewport tidak boleh scroll
    // (runtime mengelola scrollnya sendiri — tidak ada scroll)
    if (viewport) {
      viewport.classList.toggle('viewport-locked', active);
    }
  }

  const observer = new MutationObserver(() => {
    const isRuntime = !!dashRoot.querySelector('.ds-stepper-wrap--runtime');
    _applyRuntimeHeight(isRuntime);
  });

  observer.observe(dashRoot, {
    subtree   : true,
    attributes: true,
    attributeFilter: ['class'],
  });

  dashRoot._rtObserver = observer;
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

  exportManager.init({ getTeacherName: () => session?.name });
  logger.info('app', 'aktivasi berhasil', { name: teacherData.name });

  navigateTo('s-start');

  // Pre-cache PDF di background jika online — tanpa notifikasi
  if (navigator.onLine) {
    setTimeout(() => {
      try {
        precacheAllPDF();
      } catch (e) {
        console.warn('[APP] precacheAllPDF gagal:', e.message);
      }
    }, 1500);
  }
}

// ─── BOOT SEQUENCE ────────────────────────────────────────────────────────────

async function initApp() {
  // STEP 0: logger — sebelum apapun agar semua error tercatat
  try {
    await logger.init();
  } catch (err) {
    console.error('[APP] logger.init() gagal:', err?.message);
  }

  /*
   * STEP 0.5: Inisialisasi state #app-viewport.
   * Splash adalah screen pertama dan bukan screen-with-nav,
   * jadi viewport dimulai dalam mode scroll (tidak locked).
   * Ini juga memastikan state konsisten jika halaman di-reload
   * dari screen yang berbeda via back-button popstate.
   */
  const viewport = document.getElementById('app-viewport');
  if (viewport) {
    const initialScreen = document.querySelector('.screen.screen-active');
    const initialHasNav = initialScreen?.classList.contains('screen-with-nav') ?? false;
    viewport.classList.toggle('viewport-locked', initialHasNav);
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
    await db.init(() => {
      _updateSplashStatus(
        'FLAF sedang dibuka di tab lain.\n' +
        'Tutup tab FLAF yang lain, lalu muat ulang halaman ini.'
      );
      showToast(
        'Ada tab FLAF lain yang terbuka. Tutup tab lain dan muat ulang.',
        8000
      );
    });
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
          const reminder   = document.getElementById('export-reminder');
          const backupBar  = document.getElementById('home-backup-bar');
          const barIsWarning = backupBar?.classList.contains('home-backup--warn');
          if (reminder && !barIsWarning) reminder.removeAttribute('hidden');
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
        if (localStorage.getItem('flaf_ever_activated')) {
          showToast('Data mengajar Anda mungkin hilang karena browser membersihkan penyimpanan. Jika punya file backup, pulihkan setelah aktivasi ulang.', 8000);
        }
        navigateTo('s-activation');
      } else {
        navigateTo('s-start');
      }
    }, { once: true });
  } else {
    // Fallback jika elemen tidak ditemukan
    console.log('[APP] navigasi →', session ? 's-start' : 's-activation');
    if (!session) {
      if (localStorage.getItem('flaf_ever_activated')) {
        showToast('Data mengajar Anda mungkin hilang karena browser membersihkan penyimpanan. Jika punya file backup, pulihkan setelah aktivasi ulang.', 8000);
      }
      navigateTo('s-activation');
    } else {
      navigateTo('s-start');
    }
  }
}

// ─── IDB UNAVAILABLE SCREEN ───────────────────────────────────────────────────

function _showIDBUnavailableScreen() {
  _updateSplashStatus(
    '⚠️ Penyimpanan tidak tersedia.\n\n' +
    'Kemungkinan penyebab:\n' +
    '• Mode penyamaran (private/incognito)\n' +
    '• Storage penuh\n' +
    '• Kebijakan browser memblokir IndexedDB\n\n' +
    'Tutup mode penyamaran dan buka ulang aplikasi, atau bebaskan ruang penyimpanan.'
  );
  showToast('Penyimpanan tidak tersedia. Buka di browser biasa (bukan incognito).', 8000);
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
    e.target.value = '';
    _confirmDialog(
      `Mulai restore backup?\n\nFile: ${file.name}\nData lokal akan di-merge dengan isi file ini. Record yang lebih baru di file akan menimpa data lokal.`,
      'Mulai Restore',
      async () => {
        try {
          const result = await exportManager.importBackup(file);
          showToast(`✓ Restore selesai: ${result.merged} record dimerge`);
          dashboardRendered = false;
          if (currentScreen === 's-dash') _initDashboard();
        } catch (err) {
          showToast(`Import gagal: ${err.message}`);
        }
      }
    );
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
    const reminder  = document.getElementById('export-reminder');
    const backupBar = document.getElementById('home-backup-bar');
    if (reminder && !backupBar?.classList.contains('home-backup--warn')) {
      reminder.removeAttribute('hidden');
    }
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
          const sesiAktif =
            document.querySelector('#sesi-runtime-root') !== null ||
            document.body.classList.contains('sr-active');
          if (sesiAktif) {
            sessionStorage.setItem('sw_pending_update', '1');
            showToast('Versi baru tersedia — akan diperbarui setelah sesi selesai');
            return;
          }
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

      case 'CACHE_PARTIAL':
        showToast('Beberapa materi belum tersedia offline. Buka app saat online untuk melengkapi.');
        break;

      case 'STORAGE_LOW':
        showToast('Ruang penyimpanan HP hampir habis. Pertimbangkan untuk hapus file yang tidak diperlukan.');
        break;

      case 'STORAGE_FULL':
        showStorageFullToast();
        break;

      case 'SW_UPDATE_READY': {
        const sesiAktif = document.querySelector('#sr-root[data-mounted="1"]') !== null;
        if (!sesiAktif) {
          swReg?.waiting?.postMessage({ type: 'NO_ACTIVE_SESSION' });
        } else {
          window.__FLAF__.updatePending = true;
          showToast('Ada pembaruan app yang akan diterapkan setelah sesi mengajar selesai.', 6000);
          const observer = new MutationObserver(() => {
            if (!document.querySelector('#sr-root[data-mounted="1"]')) {
              observer.disconnect();
              if (window.__FLAF__.updatePending) {
                swReg?.waiting?.postMessage({ type: 'SESSION_ENDED' });
                window.__FLAF__.updatePending = false;
              }
            }
          });
          observer.observe(document.body, { childList: true, subtree: true });
        }
        break;
      }

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
    ? `⚠ ${total - failed}/${total} tersimpan (${failed} gagal)`
    : `✓ Semua ${total} PDF tersimpan offline`;

  if (status) status.textContent = failed > 0 ? `${total - failed}/${total} tersimpan` : 'Semua tersimpan ✓';
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

function showStorageFullToast() {
  showToast('Penyimpanan HP hampir penuh. Hapus file atau foto yang tidak diperlukan.');
}

function _confirmDialog(pesan, labelKonfirmasi, onConfirm) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.6);';
  overlay.innerHTML = `
    <div style="background:#1E1E1E;border:1px solid rgba(255,255,255,.15);border-radius:12px;padding:24px 20px;max-width:340px;width:92%;box-shadow:0 8px 32px rgba(0,0,0,.6);">
      <div style="font-size:14px;color:rgba(255,255,255,.85);line-height:1.6;margin-bottom:20px;white-space:pre-line;">${pesan}</div>
      <div style="display:flex;gap:10px;justify-content:flex-end;">
        <button id="_flaf-confirm-batal" style="padding:8px 16px;border-radius:8px;border:1px solid rgba(255,255,255,.2);background:transparent;color:rgba(255,255,255,.6);font-size:13px;cursor:pointer;font-family:inherit;">Batal</button>
        <button id="_flaf-confirm-ok" style="padding:8px 16px;border-radius:8px;border:none;background:#4A7C5E;color:#fff;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">${labelKonfirmasi}</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  const close = () => document.body.removeChild(overlay);
  overlay.querySelector('#_flaf-confirm-batal').addEventListener('click', close);
  overlay.querySelector('#_flaf-confirm-ok').addEventListener('click', () => { close(); onConfirm(); });
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
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
  _confirmDialog(
    'Hard Reset akan menghapus SEMUA cache aplikasi dan PDF.\n' +
    'Data kemajuan mengajar di IndexedDB TIDAK dihapus.\n\n' +
    'Lanjutkan?',
    'Hapus Semua Data',
    async () => {
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
  );
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
  _confirmDialog(
    'Hapus semua file PDF yang tersimpan offline?',
    'Hapus Cache',
    () => {
      const sw = navigator.serviceWorker?.controller;
      if (!sw) return;
      sw.postMessage({ type: 'CLEAR_PDF_CACHE' });
    }
  );
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
  if (el) {
    el.textContent = text;
    el.style.display = 'block';
  } else {
    showToast(text, 8000);
  }
}

// ─── PUBLIC API ───────────────────────────────────────────────────────────────

// Poin 17: backup via Web Share API (Share Sheet native iOS/Android)
async function triggerExport() {
  try {
    // Coba Web Share API dengan file jika tersedia
    if (exportManager.getExportBlob && navigator.canShare) {
      const blob = await exportManager.getExportBlob();
      const file = new File([blob], `flaf-backup-${new Date().toISOString().slice(0,10)}.json`, { type: 'application/json' });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: 'Backup FLAF', text: 'Data mengajar FLAF' });
        showToast('✓ Backup dibagikan');
        return;
      }
    }
    // Fallback: download manual biasa
    await exportManager.triggerManualExport();
    showToast('✓ Backup berhasil disimpan');
  } catch (err) {
    if (err.name !== 'AbortError') showToast('Backup gagal. Coba lagi.');
  }
}

window.__FLAF__ = {
  softUpdate,
  hardReset,
  showToast,
  showStorageFullToast,
  precacheAllPDF,
  getPDFCacheStatus,
  clearPDFCache,
  triggerExport,
  sessionActive : false,
  updatePending : false,
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
