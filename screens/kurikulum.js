/**
 * =============================================================
 * FLAF — SCREEN: KURIKULUM (s-jadwal)
 * File: screens/kurikulum.js
 * =============================================================
 *
 * FUNGSI:
 *   Render seluruh konten panel s-jadwal dari data/index.js.
 *   Tidak ada konten hardcode di sini — semua dari data fase.
 *
 * PANEL YANG DIRENDER:
 *   - Panel CP   : Capaian Pembelajaran (collapsible)
 *   - Panel ATP  : ringkasan 18 TP dalam tabel scroll
 *   - Panel TP   : detail per TP + 3 indikator + vocab + tombol unduh PDF
 *
 * KONTRAK DOM (elemen yang HARUS ada di index.html):
 *   #kurikulum-root    ← container utama panel kurikulum di s-jadwal
 *
 * KONTRAK IMPORT:
 *   import { renderKurikulum } from './screens/kurikulum.js';
 *   renderKurikulum(); // dipanggil sekali saat s-jadwal pertama kali ditampilkan
 *
 * DEPENDENCIES:
 *   - data/index.js   (getFase, getAllTP, getTP, getMeta)
 *   - storage/logger.js (logger)
 *
 * Terakhir direvisi : April 2026
 * =============================================================
 */

import { getFase, getAllTP, getMeta } from '../data/index.js';
import { logger } from '../storage/logger.js';

// ----------------------------------------------------------
// KONSTANTA
// ----------------------------------------------------------
const SCREEN = 's-jadwal';
const ROOT_ID = 'kurikulum-root';

// Warna tema per panel — sesuai design token v6
const THEME = {
  cp   : { bg: 'rgba(212,174,58,.15)', border: 'rgba(212,174,58,.4)', text: '#D4AE3A', label: 'CP'  },
  atp  : { bg: 'rgba(212,174,58,.15)', border: 'rgba(212,174,58,.4)', text: '#D4AE3A', label: 'ATP' },
  tp   : { bg: 'rgba(212,174,58,.15)', border: 'rgba(212,174,58,.4)', text: '#D4AE3A', label: 'TP'  },
  badge: { hp: '#5C8A6E', opsional: '#C87941', semua: '#5D7A8C' },
};

// ----------------------------------------------------------
// STATE LOKAL
// Menyimpan TP mana yang sedang expanded
// ----------------------------------------------------------
let _expandedTPId = 'tp-01';
let _rendered = false;

// ----------------------------------------------------------
// ENTRY POINT
// ----------------------------------------------------------

/**
 * renderKurikulum()
 * Dipanggil satu kali saat s-jadwal pertama kali dibuka.
 * Selanjutnya state dikelola secara internal (expand/collapse).
 *
 * @param {Object} options
 * @param {Function} [options.onDownloadPDF] — callback(tpId) saat tombol unduh diklik
 *   Kalau tidak disediakan, tombol unduh disabled dengan pesan fallback.
 */
window.kurFilterKelas = function(kelas) {
  const items = document.querySelectorAll('#kur-tp-list .kur-tp-item');
  items.forEach(el => {
    const k = el.dataset.kelas;
    el.style.display = (kelas === 'semua' || String(k) === String(kelas)) ? '' : 'none';
  });

  const activeStyle  = `flex:1;padding:6px 0;border-radius:8px;border:1px solid rgba(212,174,58,.4);background:rgba(212,174,58,.15);color:#D4AE3A;font-size:11px;font-weight:700;cursor:pointer;`;
  const inactiveStyle = `flex:1;padding:6px 0;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:rgba(255,255,255,.5);font-size:11px;font-weight:700;cursor:pointer;`;

  document.getElementById('kur-filter-1').style.cssText = kelas === 1 ? activeStyle : inactiveStyle;
  document.getElementById('kur-filter-2').style.cssText = kelas === 2 ? activeStyle : inactiveStyle;

  // Buka TP pertama yang tampil di kelas yang dipilih
  const firstVisible = [...items].find(el => el.style.display !== 'none');
  if (firstVisible) {
    const tpId = firstVisible.id.replace('kur-', '');
    const body = document.getElementById(`kur-${tpId}-body`);
    const btn  = firstVisible.querySelector('.kur-tp-head');
    // Tutup semua dulu
    document.querySelectorAll('.kur-tp-body').forEach(b => { b.hidden = true; });
    document.querySelectorAll('.kur-tp-head').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      const ch = b.querySelector('.kur-tp-chevron');
      if (ch) ch.textContent = '▼';
    });
    // Buka TP pertama
    if (body) body.hidden = false;
    if (btn) {
      btn.setAttribute('aria-expanded', 'true');
      const ch = btn.querySelector('.kur-tp-chevron');
      if (ch) ch.textContent = '▲';
    }
  }
};

export function renderKurikulum({ onDownloadPDF, defaultKelas = 'semua' } = {}) {
  const root = document.getElementById(ROOT_ID);
  if (!root) {
    logger.error(SCREEN, `[kurikulum] #${ROOT_ID} tidak ditemukan di DOM`);
    return;
  }

  // Guard: jangan render ulang kalau sudah dirender
  // (navigasi balik ke s-jadwal tidak boleh reset state expand)
  if (_rendered) return;

  try {
    const fase  = getFase();
    const tps   = getAllTP();
    const meta  = getMeta();

    root.innerHTML = _buildKurikulumHTML(fase, tps, meta);
    _attachEventListeners(root, tps, onDownloadPDF);
    _rendered = true;

    // Apply filter default sesuai rombel aktif
    if (defaultKelas !== 'semua') {
      window.kurFilterKelas(defaultKelas);
    }

    logger.info(SCREEN, '[kurikulum] render selesai', {
      fase       : meta.fase,
      total_tp   : meta.total_tp,
      data_version: meta.data_version,
    });

  } catch (err) {
    logger.error(SCREEN, '[kurikulum] render gagal', { error: err.message });
    root.innerHTML = _buildErrorHTML(err.message);
  }
}

/**
 * resetKurikulum()
 * Paksa render ulang — dipanggil saat Soft Update berhasil
 * dan data_version berubah.
 */
export function resetKurikulum() {
  _rendered = false;
  _expandedTPId = 'tp-01';
  const root = document.getElementById(ROOT_ID);
  if (root) root.innerHTML = '';
}

// ----------------------------------------------------------
// BUILD HTML
// ----------------------------------------------------------

function _buildKurikulumHTML(fase, tps, meta) {
  return `
    <div class="kur-wrap">

      ${_buildHeaderHTML(meta)}
      ${_buildTPListHTML(tps)}
      ${_buildATPHTML(tps, meta)}
      ${_buildCPHTML(fase.cp)}

    </div>
  `;
}

// ── Header ────────────────────────────────────────────────
function _buildHeaderHTML(meta) {
  const totalJP = meta.total_jp;
  const totalTP = meta.total_tp;
  return `
    <div class="kur-header">
      <div class="kur-header-title">
        <span class="kur-fase-badge">Fase ${_esc(meta.fase)}</span>
        <span class="kur-mapel">Bahasa Inggris</span>
        <span class="kur-kelas">${_esc(meta.kelas)}</span>
      </div>
      <div class="kur-header-stats">
        <div class="kur-stat">
          <span class="kur-stat-num">${totalTP}</span>
          <span class="kur-stat-label">TP</span>
        </div>
        <div class="kur-stat">
          <span class="kur-stat-num">${totalJP}</span>
          <span class="kur-stat-label">JP</span>
        </div>
      </div>
    </div>
  `;
}

// ── Panel CP ──────────────────────────────────────────────
function _buildCPHTML(cp) {
  return `
    <div class="kur-panel kur-panel-cp">
      <button class="kur-panel-head" data-toggle="cp" aria-expanded="false">
        <span class="kur-panel-badge" style="background:${THEME.cp.bg};color:${THEME.cp.text}">CP</span>
        <span class="kur-panel-title">Capaian Pembelajaran</span>
        <span class="kur-chevron">▼</span>
      </button>
      <div class="kur-panel-body kur-panel-body--cp" id="kur-cp-body" hidden>
        <div class="kur-cp-section">
          <div class="kur-cp-label">Menyimak &amp; Berbicara</div>
          <p class="kur-cp-text">${_esc(cp.menyimak_berbicara.trim())}</p>
        </div>
        <div class="kur-cp-section">
          <div class="kur-cp-label">Membaca &amp; Memirsa</div>
          <p class="kur-cp-text">${_esc(cp.membaca_memirsa.trim())}</p>
        </div>
        <div class="kur-cp-section">
          <div class="kur-cp-label">Menulis &amp; Mempresentasikan</div>
          <p class="kur-cp-text">${_esc(cp.menulis_mempresentasikan.trim())}</p>
        </div>
      </div>
    </div>
  `;
}

// ── Panel ATP ─────────────────────────────────────────────
function _buildATPHTML(tps, meta) {
  const rows = tps.map(tp => `
    <tr class="kur-atp-row" data-tp-id="${_esc(tp.id)}">
      <td class="kur-atp-num">${tp.nomor}</td>
      <td class="kur-atp-nama">${_esc(tp.nama)}</td>
      <td class="kur-atp-tema">${_esc(tp.tema)}</td>
      <td class="kur-atp-jp">${tp.jp}</td>
    </tr>
  `).join('');

  return `
    <div class="kur-panel kur-panel-atp">
      <button class="kur-panel-head" data-toggle="atp" aria-expanded="false">
        <span class="kur-panel-badge" style="background:${THEME.atp.bg};color:${THEME.atp.text}">ATP</span>
        <span class="kur-panel-title">Alur Tujuan Pembelajaran</span>
        <span class="kur-atp-total">${meta.total_tp} TP · ${meta.total_jp} JP</span>
        <span class="kur-chevron">▼</span>
      </button>
      <div class="kur-panel-body" id="kur-atp-body" hidden>
        <div class="kur-atp-scroll">
          <table class="kur-atp-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Tujuan Pembelajaran</th>
                <th>Tema</th>
                <th>JP</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <p class="kur-atp-hint">Ketuk baris TP untuk melihat detail dan modul ajar.</p>
      </div>
    </div>
  `;
}

// ── Panel TP List ─────────────────────────────────────────
function _buildTPListHTML(tps) {
  const items = tps.map(tp => _buildTPItemHTML(tp)).join('');
  return `
    <div class="kur-panel kur-panel-tp">
      <div class="kur-panel-head kur-panel-head--static">
        <span class="kur-panel-badge" style="background:${THEME.tp.bg};color:${THEME.tp.text}">TP</span>
        <span class="kur-panel-title">Detail Tujuan Pembelajaran</span>
      </div>
      <div style="display:flex;gap:8px;padding:10px 14px;border-bottom:1px solid var(--tema-border-light);">
        <button onclick="kurFilterKelas(1)" id="kur-filter-1" style="flex:1;padding:6px 0;border-radius:8px;border:1px solid rgba(212,174,58,.4);background:rgba(212,174,58,.15);color:#D4AE3A;font-size:11px;font-weight:700;cursor:pointer;">Kelas 1</button>
        <button onclick="kurFilterKelas(2)" id="kur-filter-2" style="flex:1;padding:6px 0;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:rgba(255,255,255,.5);font-size:11px;font-weight:700;cursor:pointer;">Kelas 2</button>
      </div>
      <div class="kur-tp-list" id="kur-tp-list">
        ${items}
      </div>
    </div>
  `;
}

function _buildTPItemHTML(tp) {
  const vocabHTML = tp.vocab
    .map(v => `<span class="kur-vocab-chip">${_esc(v)}</span>`)
    .join('');

  const indikatorHTML = tp.indikator
    .map((ind, i) => `
      <li class="kur-ind-item">
        <div class="kur-ind-num">${i + 1}</div>
        <div class="kur-ind-text">${_esc(ind)}</div>
      </li>
    `).join('');

  const pdfFilename = `${tp.id}-v1.pdf`;

  const isFirst = tp.nomor === 1;
  return `
    <div class="kur-tp-item" id="kur-${_esc(tp.id)}" data-kelas="${tp.kelas || ''}">

      <!-- TP Header (selalu terlihat) -->
      <button class="kur-tp-head" data-tp-id="${_esc(tp.id)}" aria-expanded="${isFirst}">
        <div class="kur-tp-head-left">
          <span class="kur-tp-num">TP ${String(tp.nomor).padStart(2, '0')}</span>
          <span class="kur-tp-nama">${_esc(tp.nama)}</span>
        </div>
        <div class="kur-tp-head-right">
          <span class="kur-tp-jp">${tp.jp} JP</span>
          <span class="kur-chevron kur-tp-chevron">${isFirst ? '▲' : '▼'}</span>
        </div>
      </button>

      <!-- TP Body (expand/collapse) -->
      <div class="kur-tp-body" id="kur-${_esc(tp.id)}-body" ${isFirst ? '' : 'hidden'}>

        <div class="kur-tp-tema">
          <span class="kur-tp-tema-label">Tema</span>
          <span class="kur-tp-tema-val">${_esc(tp.tema)}</span>
        </div>

        <p class="kur-tp-desc">${_esc(tp.deskripsi.trim())}</p>

        <div class="kur-ind-wrap">
          <div class="kur-ind-title">Indikator Pencapaian</div>
          <ol class="kur-ind-list">${indikatorHTML}</ol>
        </div>

        <div class="kur-vocab-wrap">
          <div class="kur-vocab-title">Kosakata Utama</div>
          <div class="kur-vocab-chips">${vocabHTML}</div>
        </div>

        <div class="kur-pdf-wrap">
          <button
            class="kur-pdf-btn"
            data-pdf="${_esc(pdfFilename)}"
            data-tp-id="${_esc(tp.id)}"
            aria-label="Unduh modul ajar ${_esc(tp.nama)}"
          >
            <span class="kur-pdf-icon">📄</span>
            <span class="kur-pdf-label">Download Modul Ajar — ${_esc(tp.nama)}</span>
            <span class="kur-pdf-filename">${_esc(pdfFilename)}</span>
          </button>
        </div>

      </div>
    </div>
  `;
}

// ── Error fallback ────────────────────────────────────────
function _buildErrorHTML(msg) {
  return `
    <div class="kur-error">
      <div class="kur-error-icon">⚠</div>
      <div class="kur-error-title">Konten kurikulum tidak dapat dimuat</div>
      <div class="kur-error-msg">${_esc(msg)}</div>
      <button class="kur-error-retry" onclick="location.reload()">Muat Ulang</button>
    </div>
  `;
}

// ----------------------------------------------------------
// EVENT LISTENERS
// ----------------------------------------------------------

function _attachEventListeners(root, tps, onDownloadPDF) {
  // ── Toggle CP & ATP panel ────────────────────────────────
  root.querySelectorAll('[data-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key  = btn.dataset.toggle;         // 'cp' | 'atp'
      const body = document.getElementById(`kur-${key}-body`);
      if (!body) return;

      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isExpanded));
      body.hidden = isExpanded;

      const chevron = btn.querySelector('.kur-chevron');
      if (chevron) chevron.textContent = isExpanded ? '▼' : '▲';
    });
  });

  // ── Klik baris tabel ATP → scroll ke TP dan expand ───────
  root.querySelectorAll('.kur-atp-row').forEach(row => {
    row.addEventListener('click', () => {
      const tpId = row.dataset.tpId;
      if (tpId) _expandTP(tpId);
    });
  });

  // ── Toggle expand/collapse per TP ────────────────────────
  root.querySelectorAll('.kur-tp-head').forEach(btn => {
    btn.addEventListener('click', () => {
      const tpId = btn.dataset.tpId;
      if (!tpId) return;

      const isCurrentlyExpanded = _expandedTPId === tpId;

      // Tutup semua TP
      _collapseAllTP(root);

      // Kalau TP ini belum expanded, buka
      if (!isCurrentlyExpanded) {
        _expandTP(tpId);
      }
    });
  });

  // ── Tombol unduh PDF ─────────────────────────────────────
  root.querySelectorAll('.kur-pdf-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const tpId    = btn.dataset.tpId;
      const pdfFile = btn.dataset.pdf;

      if (typeof onDownloadPDF === 'function') {
        // Tandai loading
        _setPDFBtnState(btn, 'loading');
        logger.info(SCREEN, '[kurikulum] unduh PDF diminta', { tpId, pdfFile });

        onDownloadPDF(tpId, pdfFile)
          .then(() => _setPDFBtnState(btn, 'success'))
          .catch(err => {
            logger.warn(SCREEN, '[kurikulum] unduh PDF gagal', { tpId, error: err.message });
            _setPDFBtnState(btn, 'error');
          });

      } else {
        // Fallback: tidak ada handler — beri tahu user
        _setPDFBtnState(btn, 'unavailable');
        logger.warn(SCREEN, '[kurikulum] onDownloadPDF tidak tersedia', { tpId });
      }
    });
  });
}

// ----------------------------------------------------------
// HELPER: TP EXPAND / COLLAPSE
// ----------------------------------------------------------

function _expandTP(tpId) {
  const body = document.getElementById(`kur-${tpId}-body`);
  const btn  = document.querySelector(`.kur-tp-head[data-tp-id="${tpId}"]`);
  if (!body || !btn) return;

  body.hidden = false;
  btn.setAttribute('aria-expanded', 'true');

  const chevron = btn.querySelector('.kur-tp-chevron');
  if (chevron) chevron.textContent = '▲';

  _expandedTPId = tpId;

  // Scroll ke TP yang dibuka — smooth, dengan offset atas
  const item = document.getElementById(`kur-${tpId}`);
  if (item) {
    setTimeout(() => {
      item.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
}

function _collapseAllTP(root) {
  root.querySelectorAll('.kur-tp-body').forEach(body => {
    body.hidden = true;
  });
  root.querySelectorAll('.kur-tp-head').forEach(btn => {
    btn.setAttribute('aria-expanded', 'false');
    const chevron = btn.querySelector('.kur-tp-chevron');
    if (chevron) chevron.textContent = '▼';
  });
  _expandedTPId = null;
}

// ----------------------------------------------------------
// HELPER: PDF BUTTON STATE
// ----------------------------------------------------------

function _setPDFBtnState(btn, state) {
  const label = btn.querySelector('.kur-pdf-label');
  const icon  = btn.querySelector('.kur-pdf-icon');

  btn.removeAttribute('disabled');
  btn.classList.remove('kur-pdf-btn--loading', 'kur-pdf-btn--error', 'kur-pdf-btn--unavailable');

  switch (state) {
    case 'loading':
      btn.setAttribute('disabled', '');
      btn.classList.add('kur-pdf-btn--loading');
      if (icon)  icon.textContent  = '⏳';
      if (label) label.textContent = 'Mengunduh...';
      break;

    case 'success':
      if (icon)  icon.textContent  = '✓';
      if (label) label.textContent = 'Berhasil diunduh';
      // Reset ke normal setelah 2.5 detik
      setTimeout(() => {
        if (icon)  icon.textContent  = '📄';
        const tpId = btn.dataset.tpId;
        const tp   = getAllTP().find(t => t.id === tpId);
        if (label && tp) label.textContent = `Modul Ajar — ${tp.nama}`;
      }, 2500);
      break;

    case 'error':
      btn.classList.add('kur-pdf-btn--error');
      if (icon)  icon.textContent  = '✕';
      if (label) label.textContent = 'Gagal — ketuk untuk coba lagi';
      break;

    case 'unavailable':
      btn.classList.add('kur-pdf-btn--unavailable');
      if (icon)  icon.textContent  = '🔒';
      if (label) label.textContent = 'Modul belum tersedia';
      break;
  }
}

// ----------------------------------------------------------
// UTILITY
// ----------------------------------------------------------

/**
 * _esc(str) — escape HTML entities untuk mencegah XSS
 * Semua string dari data kurikulum harus melewati fungsi ini.
 */
function _esc(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
