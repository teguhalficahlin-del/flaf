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
import { db } from '../storage/db.js';
import { logger } from '../storage/logger.js';

let _metaMap = null;
// { 1: metaFaseA, 2: metaFaseA, 3: metaFaseB, 4: metaFaseB }
// null = mode non-'all', header tidak reaktif

let _faseMap = null;
// { 1: faseA, 2: faseA, 3: faseB, 4: faseB }
// null = mode non-'all'

function _updateHeader(kelas) {
  if (!_metaMap) return;
  const meta = _metaMap[kelas];
  if (!meta) return;
  const root = document.getElementById('kurikulum-root');
  if (!root) return;
  const badge   = root.querySelector('.kur-fase-badge');
  const kelasEl = root.querySelector('.kur-kelas');
  const statNum = root.querySelector('.kur-stat-num');
  if (badge)   badge.textContent   = 'Fase ' + _esc(String(meta.fase));
  if (kelasEl) kelasEl.textContent = _esc(String(meta.kelas));
  if (statNum) statNum.textContent = meta.total_tp;
}

function _updateCP(fase) {
  if (!fase?.cp) return;
  const body = document.getElementById('kur-cp-body');
  if (!body) return;
  const sections = body.querySelectorAll('.kur-cp-section');
  const fields = ['menyimak_berbicara', 'membaca_memirsa', 'menulis_mempresentasikan'];
  sections.forEach((sec, i) => {
    const p = sec.querySelector('.kur-cp-text');
    if (p && fase.cp[fields[i]]) p.textContent = fase.cp[fields[i]].trim();
  });
}

function _updateATP(fase, tps, kelas) {
  if (!fase?.atp) return;

  // Update deskripsi
  const body = document.getElementById('kur-atp-body');
  if (!body) return;
  const desc = body.querySelector('.kur-cp-text');
  if (desc && fase.atp.deskripsi) desc.textContent = fase.atp.deskripsi.trim();

  // Update total TP di header panel
  const total = document.querySelector('.kur-atp-total');
  if (total && fase.atp.total_tp) total.textContent = fase.atp.total_tp + ' TP';

  // Update isi tabel — show/hide baris sesuai kelas aktif
  const rows = body.querySelectorAll('.kur-atp-row');
  rows.forEach(row => {
    const tpId = row.dataset.tpId;
    const tp = tps.find(t => t.id === tpId);
    if (tp) {
      row.style.display = (String(tp.kelas) === String(kelas)) ? '' : 'none';
    }
  });
}

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

  const activeStyle  = `flex:1;padding:6px 0;border-radius:8px;border:1px solid rgba(212,174,58,.4);background:rgba(212,174,58,.15);color:#D4AE3A;font-size:13px;font-weight:700;cursor:pointer;`;
  const inactiveStyle = `flex:1;padding:6px 0;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:rgba(255,255,255,.5);font-size:13px;font-weight:700;cursor:pointer;`;

  [1, 2, 3, 4, 5, 6].forEach(n => {
    const el = document.getElementById(`kur-filter-${n}`);
    if (el) el.style.cssText = (String(kelas) === String(n)) ? activeStyle : inactiveStyle;
  });

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

  _updateHeader(Number(kelas));

  if (_faseMap) {
    const fase = _faseMap[Number(kelas)];
    if (fase) {
      _updateCP(fase);
      _updateATP(fase, getAllTP(), kelas);
    }
  }

  if (_metaMap) {
    const meta = _metaMap[Number(kelas)];
    if (meta) {
      const atpTotal = document.querySelector('.kur-atp-total');
      if (atpTotal) atpTotal.textContent = meta.total_tp + ' TP';
    }
  }
};

// ----------------------------------------------------------
// SESSION HELPERS
// ----------------------------------------------------------

async function _getSessionKelas() {
  try {
    const stored = await db.get('kv', 'session');
    return stored?.payload?.kelas || 'all';
  } catch {
    return 'all';
  }
}

async function _resolveKurikulumData(kelas) {
  const kelasNum = parseInt(kelas, 10);
  let faseKey, defaultKelas, kelasList;

  if (kelasNum === 1 || kelasNum === 2) {
    faseKey      = 'A';
    defaultKelas = kelasNum;
    kelasList    = [1, 2];
  } else if (kelasNum === 3 || kelasNum === 4) {
    faseKey      = 'B';
    defaultKelas = kelasNum;
    kelasList    = [3, 4];
  } else if (kelasNum === 5 || kelasNum === 6) {
    faseKey      = 'C';
    defaultKelas = kelasNum;
    kelasList    = [5, 6];
  } else {
    faseKey      = 'ALL';
    defaultKelas = 1;
    kelasList    = [1, 2, 3, 4, 5, 6];
  }

  let fase, tps, meta;
  if (faseKey === 'ALL') {
    fase = getFase('A');
    tps  = getAllTP();
    meta = getMeta('A');
  } else {
    fase = getFase(faseKey);
    tps  = getAllTP().filter(tp => kelasList.includes(tp.kelas));
    meta = getMeta(faseKey);
  }

  return { faseKey, fase, tps, meta, defaultKelas, kelasList };
}

export async function renderKurikulum({ onDownloadPDF, defaultKelas = 1 } = {}) {
  const root = document.getElementById(ROOT_ID);
  if (!root) {
    logger.error(SCREEN, `[kurikulum] #${ROOT_ID} tidak ditemukan di DOM`);
    return;
  }

  // Guard: jangan render ulang kalau sudah dirender
  // (navigasi balik ke s-jadwal tidak boleh reset state expand)
  if (_rendered) return;

  try {
    const kelasUser = await _getSessionKelas();
    const { fase, tps, meta, defaultKelas, kelasList } = await _resolveKurikulumData(kelasUser);

    if (kelasUser === 'all') {
      _metaMap = {
        1: getMeta('A'),
        2: getMeta('A'),
        3: getMeta('B'),
        4: getMeta('B'),
        5: getMeta('C'),
        6: getMeta('C'),
      };
    } else {
      _metaMap = null;
    }

    if (kelasUser === 'all') {
      const faseA = getFase('A');
      const faseB = getFase('B');
      const faseC = getFase('C');
      _faseMap = { 1: faseA, 2: faseA, 3: faseB, 4: faseB, 5: faseC, 6: faseC };
    } else {
      _faseMap = null;
    }

    root.innerHTML = _buildKurikulumHTML(fase, tps, meta, kelasList, kelasUser);
    _attachEventListeners(root, tps, onDownloadPDF);
    _rendered = true;

    // Apply filter default sesuai kelas dari session user
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

function _buildKurikulumHTML(fase, tps, meta, kelasList, sessionKelas) {
  return `
    <div class="kur-wrap">

      ${_buildHeaderHTML(meta)}
      ${_buildTPListHTML(tps, kelasList, sessionKelas)}
      ${_buildATPHTML(tps, meta, fase)}
      ${_buildCPHTML(fase.cp)}

    </div>
  `;
}

// ── TTS ─────────────────────────────────────────────────────────────
function _kurTtsStop() {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
}

function _kurTtsSpeak(teks, btnEl) {
  if (!('speechSynthesis' in window)) return;
  _kurTtsStop();
  const u  = new SpeechSynthesisUtterance(teks);
  u.lang   = 'en-US';
  u.rate   = 0.9;
  u.pitch  = 1.1;
  if (btnEl) btnEl.classList.add('kur-vocab-chip--playing');
  u.onend = u.onerror = () => {
    if (btnEl) btnEl.classList.remove('kur-vocab-chip--playing');
  };
  window.speechSynthesis.speak(u);
}

// ── Header ────────────────────────────────────────────────
function _buildHeaderHTML(meta) {
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
function _buildATPHTML(tps, meta, fase) {
  const rows = tps.map(tp => `
    <tr class="kur-atp-row" data-tp-id="${_esc(tp.id)}">
      <td class="kur-atp-num">${tp.nomor}</td>
      <td class="kur-atp-nama">${_esc(tp.nama)}</td>
      <td class="kur-atp-tema">${_esc(tp.tema)}</td>
    </tr>
  `).join('');

  // Poin 5: deskripsi spiral dari fase.atp.deskripsi
  const atpDeskripsi = fase?.atp?.deskripsi
    ? `<p class="kur-cp-text" style="margin-bottom:10px;">${_esc(fase.atp.deskripsi.trim())}</p>`
    : '';

  return `
    <div class="kur-panel kur-panel-atp">
      <button class="kur-panel-head" data-toggle="atp" aria-expanded="false">
        <span class="kur-panel-badge" style="background:${THEME.atp.bg};color:${THEME.atp.text}">ATP</span>
        <span class="kur-panel-title">Alur Tujuan Pembelajaran</span>
        <span class="kur-atp-total">${meta.total_tp} TP</span>
        <span class="kur-chevron">▼</span>
      </button>
      <div class="kur-panel-body" id="kur-atp-body" hidden>
        ${atpDeskripsi}
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
function _buildTPListHTML(tps, kelasList, sessionKelas) {
  const items = tps.map(tp => _buildTPItemHTML(tp)).join('');
  const activeStyle   = `flex:1;padding:6px 0;border-radius:8px;border:1px solid rgba(212,174,58,.4);background:rgba(212,174,58,.15);color:#D4AE3A;font-size:13px;font-weight:700;cursor:pointer;`;
  const inactiveStyle = `flex:1;padding:6px 0;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:rgba(255,255,255,.5);font-size:13px;font-weight:700;cursor:pointer;`;
  const filterBtns = kelasList.map((k, i) => {
    const isDisabled = sessionKelas !== 'all' && k !== parseInt(sessionKelas);
    const btnStyle = isDisabled
      ? 'opacity:0.3;pointer-events:none;cursor:default;'
      : (i === 0 ? activeStyle : inactiveStyle);
    return `<button ${isDisabled ? '' : `onclick="kurFilterKelas(${k})"`}
      id="kur-filter-${k}" style="${btnStyle}">Kelas ${k}</button>`;
  }).join('');
  return `
    <div class="kur-panel kur-panel-tp">
      <div class="kur-panel-head kur-panel-head--static">
        <span class="kur-panel-badge" style="background:${THEME.tp.bg};color:${THEME.tp.text}">TP</span>
        <span class="kur-panel-title">Detail Tujuan Pembelajaran</span>
      </div>
      <div style="display:flex;gap:8px;padding:10px 14px;border-bottom:1px solid var(--tema-border-light);">
        ${filterBtns}
      </div>
      <div class="kur-tp-list" id="kur-tp-list">
        ${items}
      </div>
    </div>
  `;
}

function _buildTPItemHTML(tp) {
  const vocabHTML = tp.vocab
    .map(v => `<button class="kur-vocab-chip" data-vocab="${_esc(v)}" aria-label="Putar ${_esc(v)}">▶ ${_esc(v)}</button>`)
    .join('');

  const indikatorHTML = tp.indikator
    .map((ind, i) => `
      <li class="kur-ind-item">
        <div class="kur-ind-num">${i + 1}</div>
        <div class="kur-ind-text">${_esc(ind)}</div>
      </li>
    `).join('');

  const pdfFilename = tp.pdf_ref
    || tp.media?.find(m => m.pdf_ref)?.pdf_ref
    || null;

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
            class="kur-pdf-btn${pdfFilename ? '' : ' kur-pdf-btn--unavailable'}"
            data-pdf="${_esc(pdfFilename || '')}"
            data-tp-id="${_esc(tp.id)}"
            aria-label="Unduh modul ajar ${_esc(tp.nama)}"
            ${pdfFilename ? '' : 'disabled'}
          >
            <span class="kur-pdf-icon">📄</span>
            <span class="kur-pdf-label">Download Modul Ajar — ${_esc(tp.nama)}</span>
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

  // ── Vocab chip TTS ───────────────────────────────────────────────
  root.querySelectorAll('.kur-vocab-chip[data-vocab]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      _kurTtsSpeak(btn.dataset.vocab, btn);
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
