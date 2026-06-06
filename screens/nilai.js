/**
 * screens/nilai.js — FLAF Layar Nilai Siswa
 *
 * Alur: Daftar Rombel → Menu → pilih aksi:
 *   - Kelola Siswa
 *   - Sumatif Lingkup Materi (per TP) → input nilai L/S/R
 *   - Sumatif Akhir Semester (SAS) → satu nilai per siswa
 *   - Nilai Rapor → tampil (S+AS)÷2, bisa download PDF
 *   - Rekap Kehadiran
 */

import { nilai, getSesiFormatifTP } from '../storage/nilai.js';
import { getAllTP } from '../data/index.js';
import { db }       from '../storage/db.js';
import { jejak }    from '../storage/jejak.js';
import { presensi } from '../storage/presensi.js';
import { generatePDFRekap, generatePDFRekap2, generatePDFRapor } from '../modules/pdf-generator.js';

// --- STATE -------------------------------------------------------------------

let _state = {
  view      : 'rombel',
  kelasId   : null,
  kelasNama : null,
  tingkat   : 1,
  tpNomor   : null,
  tpNama    : null,
  formatifTP: null,   // nomor TP yang sedang dibuka di detail formatif
  semester  : null,
  page      : 0,
};

let _container   = null;
let _renderToken = 0;

// --- HELPERS -----------------------------------------------------------------

function _nvToast(msg, duration = 3500, type = 'info') {
  window.__FLAF__?.showToast(msg, duration, type);
}

function showConfirmDialog(pesan, onConfirm) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.55);';
  overlay.innerHTML = `
    <div style="background:#1E1E1E;border:1px solid rgba(255,255,255,.15);border-radius:12px;padding:24px 20px;max-width:320px;width:90%;box-shadow:0 8px 32px rgba(0,0,0,.6);">
      <div style="font-size:14px;color:rgba(255,255,255,.85);line-height:1.5;margin-bottom:20px;">${_escape(pesan)}</div>
      <div style="display:flex;gap:10px;justify-content:flex-end;">
        <button id="nv-confirm-batal" style="padding:8px 16px;border-radius:8px;border:1px solid rgba(255,255,255,.2);background:transparent;color:rgba(255,255,255,.6);font-size:13px;cursor:pointer;font-family:inherit;">Batal</button>
        <button id="nv-confirm-hapus" style="padding:8px 16px;border-radius:8px;border:none;background:#B05A46;color:#fff;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">Hapus</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  const close = () => document.body.removeChild(overlay);
  overlay.querySelector('#nv-confirm-batal').addEventListener('click', close);
  overlay.querySelector('#nv-confirm-hapus').addEventListener('click', () => { close(); onConfirm(); });
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
}

function _nvEmptySiswa() {
  return `
    <div class="nv-empty">
      <div class="nv-empty-icon">👥</div>
      <div class="nv-empty-title">Belum ada siswa</div>
      <div class="nv-empty-desc">Tambahkan siswa ke rombel ini terlebih dahulu.</div>
      <button class="nv-empty-btn" data-action="kelola-siswa">Kelola Siswa</button>
    </div>
  `;
}

function _escape(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function _nilaiColor(n) {
  if (n === null || n === undefined) return 'rgba(255,255,255,.25)';
  if (n >= 80) return '#5C8A6E';
  if (n >= 70) return '#D4AE3A';
  return '#B05A46';
}

function _tpList(tingkat) {
  const all = getAllTP();
  if (tingkat === 'all') return all;
  return all.filter(tp => tp.kelas === tingkat);
}

function _statBox(label, value, color) {
  return `
  <div class="nv-stat-box">
    <div class="nv-stat-num" style="color:${color};">${value}</div>
    <div class="nv-stat-label">${label}</div>
  </div>`;
}

function _menuCard(onclick, iconSvg, iconBg, title, subtitle) {
  return `
  <button onclick="${onclick}" class="nv-menu-card">
    <div class="nv-menu-icon" style="background:${iconBg};">
      ${iconSvg}
    </div>
    <div style="flex:1;">
      <div class="nv-menu-title">${title}</div>
      <div class="nv-menu-sub">${subtitle}</div>
    </div>
    <div class="nv-menu-arrow">›</div>
  </button>`;
}

// --- RENDER UTAMA ------------------------------------------------------------

async function _render() {
  if (!_container) return;
  const token = ++_renderToken;
  if (_state.view === 'rombel') await _renderRombel(token);
  if (_state.view === 'menu')   await _renderMenu(token);
  if (_state.view === 'sas')          await _renderSAS(token);
  if (_state.view === 'sts')          await _renderSTS(token);
  if (_state.view === 'rapor-toggle') await _renderRapor(token);
  if (_state.view === 'rapor')        await _renderRapor(token);
  if (_state.view === 'unduh')    await _renderUnduh(token);
  if (_state.view === 'formatif') await _renderFormatif(token);
  if (_state.view === 'formatif-detail') await _renderFormatifDetail(token);
}

// --- LEVEL 1: DAFTAR ROMBEL --------------------------------------------------

const TP_TOTAL = { 1:9, 2:9, 3:11, 4:11, 5:11, 6:11 };

async function _renderRombel(token) {
  let list = [], rekap = [];
  try {
    list  = await nilai.getKelasList();
    rekap = await nilai.getRekapSemua();
  } catch (err) {
    console.warn('[NILAI] gagal load data rombel:', err.message);
  }
  const rekapMap = Object.fromEntries(rekap.map(r => [r.id, r]));

  const rombelHTML = list.length === 0 ? `
    <div style="padding:40px 24px;text-align:center;">
      <div style="font-size:40px;margin-bottom:14px;">🏫</div>
      <div style="font-size:15px;font-weight:600;color:rgba(255,255,255,.85);margin-bottom:6px;">Belum ada rombel.</div>
      <div style="font-size:14px;color:rgba(255,255,255,.55);line-height:1.5;">Tap <span style="color:#D4AE3A;font-weight:600;">+ Tambah Rombel</span> untuk mulai.</div>
    </div>
  ` : list.map(k => {
    const r        = rekapMap[k.id] || {};
    const rerata   = r.rerata !== null && r.rerata !== undefined ? r.rerata : '—';
    const peserta  = r.totalSiswa > 0 ? `${r.peserta}/${r.totalSiswa}` : '—';
    const total    = TP_TOTAL[k.tingkat] ?? 9;
    const tpTuntas = `${r.tpTuntas || 0}/${total}`;
    return `
    <div class="nv-rombel-item">
      <div class="nv-rombel-top">
        <div>
          <div class="nv-rombel-name">${_escape(k.nama)}</div>          
        </div>
        <div class="nv-rombel-actions">
          <button data-action="pilih-rombel" data-id="${k.id}" data-nama="${_escape(k.nama)}" data-tingkat="${k.tingkat || 1}" class="nv-btn nv-btn--gold">Buka →</button>
          <button data-action="hapus-kelas" data-id="${k.id}" data-nama="${_escape(k.nama)}" class="nv-btn" style="border:1px solid rgba(255,255,255,.25);color:rgba(255,255,255,.5);">🗑</button>
        </div>
      </div>
      <div class="nv-stat-grid nv-stat-grid--2col">
        ${_statBox('Siswa', r.totalSiswa || 0, 'rgba(255,255,255,.7)')}
        ${_statBox('TP Tuntas', tpTuntas, 'rgba(255,255,255,.7)')}
      </div>
    </div>`;
  }).join('');

  _container.innerHTML = `
<div class="nv-wrap">
  <div class="nv-card nv-card--inset" style="padding:14px 16px;">
    <div class="ds-section-label" style="margin-bottom:4px;">Manajemen Kelas</div>
    <div style="font-size:14px;color:rgba(255,255,255,.75);">Pilih rombel untuk input atau lihat nilai</div>
  </div>
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid rgba(212,174,58,.2);">
      <div class="ds-section-label">Daftar Rombel (${list.length})</div>
      <button onclick="nilaiTambahKelas()" class="nv-btn nv-btn--gold" style="font-size:13px;padding:8px 14px;">+ Tambah Rombel</button>
    </div>
    ${rombelHTML}
  </div>
</div>`;
}

// --- LEVEL 2: MENU ROMBEL ----------------------------------------------------

async function _renderMenu(token) {
  const siswaList   = await nilai.getSiswaList(_state.kelasId);
  const rekap       = await nilai.getRekapSemua();
  const rombelRekap = rekap.find(r => r.id === _state.kelasId) || {};
  const tpSelesai   = await jejak.getTPSelesaiPerRombel(_state.kelasNama);
  if (token !== _renderToken) return;

  const rerata   = rombelRekap.rerata !== null && rombelRekap.rerata !== undefined ? rombelRekap.rerata : '—';
  const peserta  = rombelRekap.totalSiswa > 0 ? `${rombelRekap.peserta}/${rombelRekap.totalSiswa}` : '—';
  const total    = TP_TOTAL[_state.tingkat] ?? 9;
  const tpTuntas = `${rombelRekap.tpTuntas || 0}/${total}`;

  _container.innerHTML = `
<div class="nv-wrap">

  <div class="nv-card nv-card--inset" style="padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
      <button onclick="nilaiBack()" class="nv-btn nv-btn--gold" style="font-size:12px;">← Rombel</button>
      <div class="ds-section-label">${_escape(_state.kelasNama)}</div>
    </div>
    <div class="nv-stat-grid nv-stat-grid--2col">
      ${_statBox('Siswa', rombelRekap.totalSiswa || 0, 'rgba(255,255,255,.7)')}
      ${_statBox('TP Tuntas', tpTuntas, 'rgba(255,255,255,.7)')}
    </div>
  </div>
  
  <div class="nv-card--inset" style="display:flex;flex-direction:column;gap:8px;">
    ${_menuCard('nilaiKelolaSiswa()',
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE3A" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
      'rgba(212,174,58,.15)', 'Kelola Siswa', 'Tambah atau hapus siswa di rombel ini')}

    ${_menuCard('nilaiMenuFormatif()',
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE3A" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
      'rgba(212,174,58,.15)', 'Nilai Formatif', 'Lihat penilaian proses dan observasi per TP')}

    ${_menuCard('nilaiMenuSTSGanjil()',
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE3A" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      'rgba(212,174,58,.15)', 'STS Ganjil', 'Input nilai ujian tengah semester ganjil')}

    ${_menuCard('nilaiMenuSTSGenap()',
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE3A" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      'rgba(212,174,58,.15)', 'STS Genap', 'Input nilai ujian tengah semester genap')}

    ${_menuCard('nilaiMenuSASGanjil()',
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE3A" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      'rgba(212,174,58,.15)', 'SAS Ganjil', 'Input nilai ujian akhir semester ganjil')}

    ${_menuCard('nilaiMenuSASGenap()',
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE3A" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      'rgba(212,174,58,.15)', 'SAS Genap', 'Input nilai ujian akhir semester genap')}

    ${_menuCard('nilaiMenuRapor()',
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE3A" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
      'rgba(212,174,58,.15)', 'Nilai Rapor', 'Lihat nilai rapor (STS + SAS) ÷ 2 per semester')}

    ${_menuCard('nilaiMenuUnduh()',
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE3A" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
      'rgba(212,174,58,.15)', 'Unduh & Cetak', 'Unduh dalam format CSV dan DOCX')}
  </div>
</div>`;
}

// --- LEVEL: NILAI FORMATIF ---------------------------------------------------

async function _renderFormatif(token) {
  const tpList = _tpList(_state.tingkat);
  if (token !== _renderToken) return;

  const rowsHTML = tpList.map(tp => `
    <div class="nv-tp-item" style="border-top:1px solid rgba(212,174,58,.1);cursor:pointer;"
         onclick="nilaiBukaFormatifTP(${tp.nomor})">
      <div style="flex:1;min-width:0;">
        <div class="nv-tp-num">TP ${String(tp.nomor).padStart(2,'0')}</div>
        <div class="nv-tp-name">${_escape(tp.nama)}</div>
      </div>
      <div style="color:rgba(212,174,58,.5);font-size:14px;flex-shrink:0;">›</div>
    </div>`).join('');

  _container.innerHTML = `
<div class="nv-wrap">
  <div class="nv-card nv-card--inset" style="padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;">
      <button onclick="nilaiBackToMenu()" class="nv-btn nv-btn--gold" style="font-size:12px;">← Kembali</button>
      <div class="ds-section-label">Nilai Formatif — ${_escape(_state.kelasNama)}</div>
    </div>
  </div>
  <div class="nv-card nv-card--inset">
    ${rowsHTML}
  </div>
</div>`;
}

// --- LEVEL 3: DAFTAR TP ------------------------------------------------------

// --- LEVEL 5b: SUMATIF TENGAH SEMESTER ----------------------------------------

async function _renderSTS(token) {
  const siswaList = await nilai.getSiswaList(_state.kelasId);
  if (token !== _renderToken) return;

  const stsMap = {};
  for (const s of siswaList) {
    stsMap[s.id] = await nilai.getNilaiSumatif(_state.kelasId, s.id, _state.semester);
  }
  if (token !== _renderToken) return;

  const PAGE_SIZE  = 5;
  const filtered   = siswaList.filter(s => s && s.id);
  const totalPage  = Math.ceil(filtered.length / PAGE_SIZE);
  const page       = Math.min(_state.page, Math.max(0, totalPage - 1));
  const pageItems  = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const semLabel   = _state.semester === 'ganjil' ? 'Ganjil' : 'Genap';

  const navHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 16px;border-bottom:1px solid rgba(212,174,58,.15);">
      <button onclick="nilaiSTSPrevPage()"
        style="width:52px;height:44px;border-radius:10px;border:2px solid #D4AE3A;
        background:rgba(212,174,58,.1);color:#D4AE3A;font-size:22px;font-weight:700;
        opacity:${page === 0 ? '0.3' : '1'};cursor:${page === 0 ? 'default' : 'pointer'};">‹</button>
      <div style="font-size:13px;color:rgba(255,255,255,.55);font-weight:600;">
        Halaman ${page + 1}/${totalPage || 1}
      </div>
      <button onclick="nilaiSTSNextPage()"
        style="width:52px;height:44px;border-radius:10px;border:2px solid #D4AE3A;
        background:rgba(212,174,58,.1);color:#D4AE3A;font-size:22px;font-weight:700;
        opacity:${page >= totalPage - 1 ? '0.3' : '1'};cursor:${page >= totalPage - 1 ? 'default' : 'pointer'};">›</button>
    </div>`;

  const barisHTML = filtered.length === 0 ? _nvEmptySiswa()
  : navHTML + pageItems.map(s => {
    const sts = stsMap[s.id];
    const val = sts !== null && sts !== undefined ? sts : '';
    return `
    <div class="nv-sas-row">
      <div class="ds-siswa-nomor ds-siswa-nomor--slate" style="background:rgba(212,174,58,.15);color:rgba(212,174,58,.7);">${s.nomor}</div>
      <div class="nv-siswa-name" style="color:rgba(255,255,255,.85);">${_escape(s.nama)}</div>
      <input id="sts-${s.id}" type="number" min="0" max="100" placeholder="—"
        value="${val}"
        class="nv-sas-input"
        oninput="this.style.color=nilaiWarna(parseInt(this.value))"
        onfocus="this.style.borderColor='rgba(212,174,58,.4)'"
        onblur="this.style.borderColor='rgba(255,255,255,.15)';nilaiAutoSaveSTS('${s.id}')">
    </div>`;
  }).join('');

  _container.innerHTML = `
<div class="nv-wrap">
  <div class="nv-card nv-card--inset" style="padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <button onclick="nilaiBackToMenu()" class="nv-btn nv-btn--gold" style="font-size:12px;">← Menu</button>
      <div class="ds-section-label">${_escape(_state.kelasNama)}</div>
    </div>
    <div style="font-size:15px;font-weight:700;color:#fff;margin-top:2px;">STS ${semLabel}</div>
    <div style="font-size:13px;color:rgba(255,255,255,.5);margin-top:4px;">Nilai ujian tengah semester ${_state.semester} — masuk rapor sebagai STS</div>
  </div>
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div style="padding:12px 16px;border-bottom:1px solid rgba(212,174,58,.15);">
      <div class="ds-section-label">Input Nilai STS (${siswaList.length} siswa)</div>
    </div>
    ${barisHTML}
  </div>
  <div class="nv-card--inset">
    <button onclick="nilaiSimpanSTS()" class="nv-btn-simpan nv-btn-simpan--slate">SIMPAN NILAI STS</button>
  </div>
</div>`;
}

// --- LEVEL 5: SUMATIF AKHIR SEMESTER -----------------------------------------

async function _renderSAS(token) {
  const siswaList = await nilai.getSiswaList(_state.kelasId);
  if (token !== _renderToken) return;

  const sasMap = {};
  for (const s of siswaList) {
    sasMap[s.id] = await nilai.getNilaiSAS(_state.kelasId, s.id, _state.semester);
  }
  if (token !== _renderToken) return;

  const PAGE_SIZE  = 5;
  const filtered   = siswaList.filter(s => s && s.id);
  const totalPage  = Math.ceil(filtered.length / PAGE_SIZE);
  const page       = Math.min(_state.page, Math.max(0, totalPage - 1));
  const pageItems  = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const semLabel   = _state.semester === 'ganjil' ? 'Ganjil' : 'Genap';

  const navHTML = filtered.length === 0 ? '' : `
  <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 16px;border-bottom:1px solid rgba(212,174,58,.1);">
    <button onclick="nilaiSASPrevPage()"
      style="width:52px;height:44px;border-radius:10px;border:2px solid #D4AE3A;background:rgba(212,174,58,.1);color:#D4AE3A;font-size:22px;font-weight:700;cursor:${page === 0 ? 'default' : 'pointer'};opacity:${page === 0 ? '0.3' : '1'};">‹</button>
    <div style="font-size:12px;color:rgba(255,255,255,.45);">Halaman ${page + 1} / ${totalPage}</div>
    <button onclick="nilaiSASNextPage()"
      style="width:52px;height:44px;border-radius:10px;border:2px solid #D4AE3A;background:rgba(212,174,58,.1);color:#D4AE3A;font-size:22px;font-weight:700;cursor:${page >= totalPage - 1 ? 'default' : 'pointer'};opacity:${page >= totalPage - 1 ? '0.3' : '1'};">›</button>
  </div>`;

  const barisHTML = filtered.length === 0 ? _nvEmptySiswa()
  : navHTML + pageItems.map(s => {
    const sas = sasMap[s.id];
    const val = sas !== null && sas !== undefined ? sas : '';
    return `
    <div class="nv-sas-row">
      <div class="ds-siswa-nomor ds-siswa-nomor--slate" style="background:rgba(212,174,58,.15);color:rgba(212,174,58,.7);">${s.nomor}</div>
      <div class="nv-siswa-name" style="color:rgba(255,255,255,.85);">${_escape(s.nama)}</div>
      <input id="sas-${s.id}" type="number" min="0" max="100" placeholder="—"
        value="${val}"
        class="nv-sas-input"
        oninput="this.style.color=nilaiWarna(parseInt(this.value))"
        onfocus="this.style.borderColor='rgba(212,174,58,.4)'"
        onblur="this.style.borderColor='rgba(255,255,255,.15)';nilaiAutoSaveSAS('${s.id}')">
    </div>`;
  }).join('');

  _container.innerHTML = `
<div class="nv-wrap">
  <div class="nv-card nv-card--inset" style="padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <button onclick="nilaiBackToMenu()" class="nv-btn nv-btn--gold" style="font-size:12px;">← Menu</button>
      <div class="ds-section-label">${_escape(_state.kelasNama)}</div>
    </div>
    <div style="font-size:15px;font-weight:700;color:#fff;margin-top:2px;">Sumatif Akhir Semester — ${_state.semester === 'ganjil' ? 'Ganjil' : 'Genap'}</div>
    <div style="font-size:13px;color:rgba(255,255,255,.5);margin-top:4px;">Nilai ujian akhir semester ${_state.semester} — masuk rapor sebagai SAS</div>
  </div>
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div style="padding:12px 16px;border-bottom:1px solid rgba(212,174,58,.15);">
      <div class="ds-section-label">Input Nilai SAS (${siswaList.length} siswa)</div>
    </div>
    ${barisHTML}
  </div>
  <div class="nv-card--inset">
    <button onclick="nilaiSimpanSAS()" class="nv-btn-simpan nv-btn-simpan--slate">SIMPAN NILAI AS</button>
  </div>
</div>`;
}

// --- LEVEL 6: NILAI RAPOR ----------------------------------------------------

async function _renderRapor(token) {
  if (!_state.semester) _state.semester = 'ganjil';
  const siswaList = await nilai.getRekapRapor(_state.kelasId, _state.semester);
  if (token !== _renderToken) return;

  const semLabel  = _state.semester === 'ganjil' ? 'Ganjil' : 'Genap';
  const PAGE_SIZE = 5;
  const totalPage = Math.ceil(siswaList.length / PAGE_SIZE);
  const page      = Math.min(_state.page, Math.max(0, totalPage - 1));
  const pageItems = siswaList.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  function _raporRowHTML(s) {
    const val = (v) => v !== null && v !== undefined ? v : '—';
    const hasRapor = s.rapor !== null && s.rapor !== undefined;
    return `
    <div class="nv-rapor-row" style="flex-direction:column;align-items:flex-start;gap:4px;">
      <div style="display:flex;align-items:center;gap:8px;width:100%;">
        <div class="ds-siswa-nomor">${s.nomor}</div>
        <div class="nv-siswa-name">${_escape(s.nama)}</div>
      </div>
      <div style="display:flex;gap:12px;padding-left:36px;">
        <span style="font-size:12px;color:rgba(255,255,255,.5);">STS: <span style="color:${_nilaiColor(s.sts)};font-weight:700;">${val(s.sts)}</span></span>
        <span style="font-size:12px;color:rgba(255,255,255,.5);">SAS: <span style="color:${_nilaiColor(s.sas)};font-weight:700;">${val(s.sas)}</span></span>
        <span style="font-size:12px;color:rgba(255,255,255,.5);">Rapor: <span style="color:${hasRapor ? 'rgba(212,174,58,.9)' : 'rgba(255,255,255,.3)'};font-weight:800;">${val(s.rapor)}</span></span>
      </div>
    </div>`;
  }

  const navHTML = siswaList.length === 0 ? '' : `
  <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 16px;border-bottom:1px solid rgba(212,174,58,.15);">
    <button onclick="nilaiRaporPrevPage()"
      style="width:52px;height:44px;border-radius:10px;border:2px solid #D4AE3A;
      background:rgba(212,174,58,.1);color:#D4AE3A;font-size:22px;font-weight:700;cursor:pointer;
      opacity:${page === 0 ? '0.3' : '1'};">‹</button>
    <div style="font-size:13px;color:rgba(255,255,255,.55);font-weight:600;">
      Halaman ${page + 1}/${totalPage || 1}
    </div>
    <button onclick="nilaiRaporNextPage()"
      style="width:52px;height:44px;border-radius:10px;border:2px solid #D4AE3A;
      background:rgba(212,174,58,.1);color:#D4AE3A;font-size:22px;font-weight:700;cursor:pointer;
      opacity:${page >= totalPage - 1 ? '0.3' : '1'};">›</button>
  </div>`;

  const barisHTML = siswaList.length === 0 ? _nvEmptySiswa()
  : navHTML + pageItems.map(s => _raporRowHTML(s)).join('');

  _container.innerHTML = `
<div class="nv-wrap">
  <div class="nv-card nv-card--inset" style="padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <button onclick="nilaiBackToMenu()" class="nv-btn nv-btn--gold" style="font-size:12px;">← Menu</button>
      <div class="ds-section-label">${_escape(_state.kelasNama)}</div>
    </div>
    <div style="font-size:15px;font-weight:700;color:#fff;margin-top:2px;">Nilai Rapor</div>
    <div style="font-size:13px;color:rgba(212,174,58,.8);margin-top:4px;">Rumus: (STS + SAS) ÷ 2 · Semester ${semLabel}</div>
    <div style="font-size:12px;color:rgba(255,255,255,.4);margin-top:3px;">STS = Sumatif Tengah Semester · SAS = Sumatif Akhir Semester</div>
  </div>

  <div class="nv-card nv-card--inset" style="padding:14px 16px;">
    <div style="display:flex;gap:8px;margin-bottom:12px;">
      <button onclick="nilaiToggleRaporSemester('ganjil')"
        style="flex:1;padding:10px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;
        border: ${_state.semester==='ganjil' ? '2px solid #D4AE3A' : '1px solid rgba(255,255,255,.2)'};
        color: ${_state.semester==='ganjil' ? '#D4AE3A' : 'rgba(255,255,255,.4)'};
        background:transparent;">Ganjil</button>
      <button onclick="nilaiToggleRaporSemester('genap')"
        style="flex:1;padding:10px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;
        border: ${_state.semester==='genap' ? '2px solid #D4AE3A' : '1px solid rgba(255,255,255,.2)'};
        color: ${_state.semester==='genap' ? '#D4AE3A' : 'rgba(255,255,255,.4)'};
        background:transparent;">Genap</button>
    </div>
  </div>

  <div class="nv-card nv-card--inset nv-card--overflow" style="border-color:rgba(250,199,117,.3);">
    <div style="padding:12px 16px;border-bottom:1px solid rgba(250,199,117,.15);">
      <div class="ds-section-label" style="color:rgba(250,199,117,.8);">Rekap Nilai (${siswaList.length} siswa)</div>
    </div>
    ${barisHTML}
  </div>
</div>`;
}

// --- MODAL: KELOLA SISWA -----------------------------------------------------

async function _renderModalKelolaSiswa() {
  const existing = await nilai.getSiswaList(_state.kelasId);
  const existingHTML = existing.length === 0 ? '' : `
    <div style="margin-bottom:12px;">
      <div class="ds-section-label" style="margin-bottom:8px;">Siswa Terdaftar (${existing.length})</div>
      ${existing.map(s => `
        <div class="nv-siswa-list-item">
          <div class="nv-siswa-list-name">${s.nomor}. ${_escape(s.nama)}</div>
          <button data-action="hapus-siswa" data-id="${s.id}" data-nama="${_escape(s.nama)}" class="nv-siswa-hapus-btn">Hapus</button>
        </div>
      `).join('')}
    </div>
  `;

  const modal = document.createElement('div');
  modal.id = 'modal-kelola-siswa';
  modal.className = 'nv-modal-overlay';
  modal.innerHTML = `
    <div onclick="nilaiTutupModal()" class="nv-modal-backdrop"></div>
    <div class="nv-modal-sheet">
      <div class="nv-modal-header">
        <div class="nv-modal-title">Kelola Siswa</div>
        <button onclick="nilaiTutupModal()" class="nv-modal-close">✕ Tutup</button>
      </div>
      ${existingHTML}
      <div class="ds-section-label" style="margin-bottom:8px;">Tambah Siswa Baru</div>
      <div style="font-size:13px;color:rgba(255,255,255,.55);margin-bottom:8px;">Ketik satu nama per baris.</div>
      <textarea id="textarea-siswa-baru" placeholder="Ahmad Fauzi&#10;Budi Santoso&#10;Citra Dewi&#10;..."
        class="nv-textarea-siswa"></textarea>
      <button onclick="nilaiSimpanSiswaBaru()" class="nv-btn-simpan" style="margin-top:10px;">SIMPAN DAFTAR SISWA</button>
    </div>
  `;
  modal.addEventListener('click', e => {
    const el = e.target.closest('[data-action="hapus-siswa"]');
    if (!el) return;
    window.nilaiHapusSiswaModal(el.dataset.id, el.dataset.nama);
  });
  document.body.appendChild(modal);
}

// --- ACTIONS -----------------------------------------------------------------

window.nilaiBack = async function() {
  if (_state.view === 'sas')   await _flushSemuaSAS();
  if (_state.view === 'sts')   await _flushSemuaSTS();
  if (_state.view === 'sas' || _state.view === 'sts') _state.page = 0;
  if (_state.view === 'menu')  { _state.view = 'rombel'; _state.kelasId = null; _state.kelasNama = null; }
  if (_state.view === 'sas')   { _state.view = 'menu'; }
  if (_state.view === 'sts')   { _state.view = 'menu'; }
  if (_state.view === 'rapor') { _state.view = 'menu'; }
  if (_state.view === 'unduh') { _state.view = 'menu'; }
  _render();
};

window.nilaiBackToMenu = async function() {
  if (_state.view === 'sas')   await _flushSemuaSAS();
  if (_state.view === 'sts')   await _flushSemuaSTS();
  if (_state.view === 'sas' || _state.view === 'sts') _state.page = 0;
  _state.view = 'menu';
  _render();
};
window.nilaiMenuSAS      = function() { _state.view = 'sas';      _render(); };
window.nilaiMenuRapor    = function() { _state.view = 'rapor'; _state.page = 0; _render(); };
window.nilaiMenuUnduh    = function() { _state.view = 'unduh';    _render(); };
window.nilaiMenuFormatif  = function() { _state.view = 'formatif'; _render(); };
window.nilaiMenuSTSGanjil = function() { _state.semester = 'ganjil'; _state.view = 'sts'; _state.page = 0; _render(); };
window.nilaiMenuSTSGenap  = function() { _state.semester = 'genap';  _state.view = 'sts'; _state.page = 0; _render(); };
window.nilaiMenuSASGanjil = function() { _state.semester = 'ganjil'; _state.view = 'sas'; _state.page = 0; _render(); };
window.nilaiMenuSASGenap  = function() { _state.semester = 'genap';  _state.view = 'sas'; _state.page = 0; _render(); };
window.nilaiToggleSASGroup = function(gi) {
  const item    = document.getElementById(`nv-sas-group-${gi}`);
  const body    = item?.querySelector('.ds-subfase-body');
  const chevron = document.getElementById(`nv-sas-chevron-${gi}`);
  if (!body) return;
  const isOpen = body.style.display !== 'none';

  // Tutup semua group lain
  let idx = 0;
  while (true) {
    const other = document.getElementById(`nv-sas-group-${idx}`);
    if (!other) break;
    if (idx !== gi) {
      const otherBody    = other.querySelector('.ds-subfase-body');
      const otherChevron = document.getElementById(`nv-sas-chevron-${idx}`);
      if (otherBody)    otherBody.style.display = 'none';
      if (otherChevron) otherChevron.textContent = '▼';
      other.classList.remove('ds-subfase-item--open');
    }
    idx++;
  }

  // Toggle group yang dipilih
  body.style.display  = isOpen ? 'none' : '';
  chevron.textContent = isOpen ? '▼' : '▲';
  item.classList.toggle('ds-subfase-item--open', !isOpen);
};
window.nilaiToggleSTSGroup = function(gi) {
  const item    = document.getElementById(`nv-sts-group-${gi}`);
  const body    = item?.querySelector('.ds-subfase-body');
  const chevron = document.getElementById(`nv-sts-chevron-${gi}`);
  if (!body) return;
  const isOpen = body.style.display !== 'none';

  // Tutup semua group lain
  let idx = 0;
  while (true) {
    const other = document.getElementById(`nv-sts-group-${idx}`);
    if (!other) break;
    if (idx !== gi) {
      const otherBody    = other.querySelector('.ds-subfase-body');
      const otherChevron = document.getElementById(`nv-sts-chevron-${idx}`);
      if (otherBody)    otherBody.style.display = 'none';
      if (otherChevron) otherChevron.textContent = '▼';
      other.classList.remove('ds-subfase-item--open');
    }
    idx++;
  }

  // Toggle group yang dipilih
  body.style.display  = isOpen ? 'none' : '';
  chevron.textContent = isOpen ? '▼' : '▲';
  item.classList.toggle('ds-subfase-item--open', !isOpen);
};
window.nilaiSTSNextPage = function() { _state.page++; _render(); };
window.nilaiSTSPrevPage = function() { if (_state.page > 0) { _state.page--; _render(); } };
window.nilaiSASNextPage = function() { _state.page++; _render(); };
window.nilaiSASPrevPage = function() { if (_state.page > 0) { _state.page--; _render(); } };
window.nilaiToggleRaporSemester = function(semester) {
  _state.semester = semester;
  _state.page = 0;
  _renderRapor(++_renderToken);
};
window.nilaiRaporNextPage = function() { _state.page++; _renderRapor(++_renderToken); };
window.nilaiRaporPrevPage = function() { if (_state.page > 0) { _state.page--; _renderRapor(++_renderToken); } };
window.nilaiToggleUnduh = function(key) {
  const keys = ['formatif', 'sumatif'];
  keys.forEach(k => {
    const body    = document.getElementById(`nv-unduh-body-${k}`);
    const chevron = document.getElementById(`nv-unduh-chevron-${k}`);
    if (k === key) {
      const isOpen = body.style.display !== 'none';
      body.style.display  = isOpen ? 'none' : '';
      chevron.textContent = isOpen ? '▼' : '▲';
    } else {
      if (body)    body.style.display = 'none';
      if (chevron) chevron.textContent = '▼';
    }
  });
};
window.nilaiPilihRombel = function(id, nama, tingkat) {
  _state.view      = 'menu';
  _state.kelasId   = id;
  _state.kelasNama = nama;
  _state.tingkat   = parseInt(tingkat) || 1;
  _render();
};

window.nilaiAutoSaveSAS = async function(siswaId) {
  if (!_state.kelasId) return;
  const raw = document.getElementById(`sas-${siswaId}`)?.value.trim();
  if (!raw) return;
  const n = parseInt(raw);
  if (isNaN(n)) return;
  const v = Math.max(0, Math.min(100, n));
  try {
    await nilai.setNilaiSAS(_state.kelasId, siswaId, _state.semester, v);
  } catch (err) {
    console.warn('[NILAI] autosave SAS gagal:', err.message);
  }
};

window.nilaiAutoSaveSTS = async function(siswaId) {
  if (!_state.kelasId) return;
  const raw = document.getElementById(`sts-${siswaId}`)?.value.trim();
  if (!raw) return;
  const n = parseInt(raw);
  if (isNaN(n)) return;
  const v = Math.max(0, Math.min(100, n));
  try {
    await nilai.setNilaiSumatif(_state.kelasId, siswaId, _state.semester, v);
  } catch (err) {
    console.warn('[NILAI] autosave STS gagal:', err.message);
  }
};

async function _flushSemuaSAS() {
  if (!_state.kelasId) return;
  try {
    const siswaList = await nilai.getSiswaList(_state.kelasId);
    for (const s of siswaList) {
      await window.nilaiAutoSaveSAS(s.id);
    }
  } catch (err) {
    console.warn('[NILAI] flush SAS gagal:', err.message);
  }
}

async function _flushSemuaSTS() {
  if (!_state.kelasId) return;
  try {
    const siswaList = await nilai.getSiswaList(_state.kelasId);
    for (const s of siswaList) {
      await window.nilaiAutoSaveSTS(s.id);
    }
  } catch (err) {
    console.warn('[NILAI] flush STS gagal:', err.message);
  }
}

window.nilaiSimpanSAS = async function() {
  const btn = document.querySelector('button[onclick="nilaiSimpanSAS()"]');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Menyimpan...'; }
  try {
    const siswaList = await nilai.getSiswaList(_state.kelasId);
    let saved = 0, clamped = 0;
    for (const s of siswaList) {
      const raw = document.getElementById(`sas-${s.id}`)?.value.trim();
      if (!raw) continue;
      const n = parseInt(raw); if (isNaN(n)) continue;
      const v = Math.max(0, Math.min(100, n)); if (v !== n) clamped++;
      await nilai.setNilaiSAS(_state.kelasId, s.id, _state.semester, v);
      saved++;
    }
    if (clamped > 0) _nvToast(`${clamped} nilai di luar 0–100 dikoreksi otomatis.`);
    if (btn) {
      btn.textContent = `✓ Tersimpan (${saved})`;
      setTimeout(() => { btn.textContent = 'SIMPAN NILAI AS'; }, 2000);
    }
  } finally {
    if (btn) btn.disabled = false;
  }
};

window.nilaiSimpanSTS = async function() {
  const btn = document.querySelector('button[onclick="nilaiSimpanSTS()"]');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Menyimpan...'; }
  try {
    const siswaList = await nilai.getSiswaList(_state.kelasId);
    let saved = 0, clamped = 0;
    for (const s of siswaList) {
      const raw = document.getElementById(`sts-${s.id}`)?.value.trim();
      if (!raw) continue;
      const n = parseInt(raw); if (isNaN(n)) continue;
      const v = Math.max(0, Math.min(100, n)); if (v !== n) clamped++;
      await nilai.setNilaiSumatif(_state.kelasId, s.id, _state.semester, v);
      saved++;
    }
    if (clamped > 0) _nvToast(`${clamped} nilai di luar 0–100 dikoreksi otomatis.`);
    if (btn) {
      btn.textContent = `✓ Tersimpan (${saved})`;
      setTimeout(() => { btn.textContent = 'SIMPAN NILAI STS'; }, 2000);
    }
  } finally {
    if (btn) btn.disabled = false;
  }
};
// --- LEVEL 3: SUB-LAYAR UNDUH & CETAK ----------------------------------------

async function _renderUnduh(token) {
  const tpList = _tpList(_state.tingkat);
  if (token !== _renderToken) return;

  const _tpItemHTML = (tp) => `
    <div class="nv-tp-item"
         data-action="download-formatif"
         data-kelas-id="${_state.kelasId}"
         data-kelas-nama="${_escape(_state.kelasNama)}"
         data-nomor="${tp.nomor}"
         data-tp-nama="${_escape(tp.nama)}"
         style="cursor:pointer;">
      <div style="flex:1;min-width:0;">
        <div class="nv-tp-num">TP ${String(tp.nomor).padStart(2,'0')}</div>
        <div class="nv-tp-name">${_escape(tp.nama)}</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>`;

  const formatifHTML = tpList.map(tp => _tpItemHTML(tp)).join('');

  _container.innerHTML = `
<div class="nv-wrap">
  <div class="nv-card nv-card--inset" style="padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <button onclick="nilaiBackToMenu()" class="nv-btn nv-btn--gold" style="font-size:12px;">← Menu</button>
      <div class="ds-section-label">${_escape(_state.kelasNama)}</div>
    </div>
    <div style="font-size:15px;font-weight:700;color:#fff;margin-top:2px;">Unduh & Cetak</div>
    <div style="font-size:13px;color:rgba(255,255,255,.55);margin-top:4px;">Semua unduhan dalam format CSV</div>
  </div>

  <!-- Formatif collapse -->
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div class="ds-subfase-head" onclick="nilaiToggleUnduh('formatif')" style="padding:14px 16px;">
      <div style="flex:1;">
        <div class="ds-section-label">Nilai Formatif — per TP</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Unduh nilai formatif per TP</div>
      </div>
      <div class="ds-collapse-chevron" id="nv-unduh-chevron-formatif">▼</div>
    </div>
    <div id="nv-unduh-body-formatif" style="display:none;">
      ${formatifHTML}
    </div>
  </div>

  <!-- STS -->
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div onclick="nilaiDownloadSTS('ganjil')" style="cursor:pointer;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:700;color:#fff;">Nilai STS Ganjil</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Unduh nilai</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>
  </div>
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div onclick="nilaiDownloadSTS('genap')" style="cursor:pointer;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:700;color:#fff;">Nilai STS Genap</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Unduh nilai</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>
  </div>

  <!-- SAS -->
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div onclick="nilaiDownloadSAS('ganjil')" style="cursor:pointer;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:700;color:#fff;">Nilai SAS Ganjil</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Unduh nilai</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>
  </div>
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div onclick="nilaiDownloadSAS('genap')" style="cursor:pointer;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:700;color:#fff;">Nilai SAS Genap</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Unduh nilai</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>
  </div>

  <!-- Rapor -->
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div onclick="nilaiDownloadRapor('ganjil')" style="cursor:pointer;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:700;color:#fff;">Nilai Rapor Ganjil</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Unduh nilai</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>
  </div>
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div onclick="nilaiDownloadRapor('genap')" style="cursor:pointer;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:700;color:#fff;">Nilai Rapor Genap</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Unduh nilai</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>
  </div>

  <!-- Kehadiran -->
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div data-action="download-kehadiran" data-kelas-id="${_state.kelasId}" data-kelas-nama="${_escape(_state.kelasNama)}" style="cursor:pointer;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:700;color:#fff;">Rekap Kehadiran</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Unduh rekap</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>
  </div>
  ${(() => {
    const t = _state.tingkat;
    const soalCards =
      t === 1 ? [
        { label: 'Soal STS Ganjil Kelas 1', fn: 'nilaiDownloadSoalSTSGanjil1()' },
        { label: 'Soal STS Genap Kelas 1',  fn: 'nilaiDownloadSoalSTSGenap1()' },
        { label: 'Soal SAS Ganjil Kelas 1', fn: 'nilaiDownloadSoalSASGanjil1()' },
        { label: 'Soal SAS Genap Kelas 1',  fn: 'nilaiDownloadSoalSASGenap1()' },
      ] :
      t === 2 ? [
        { label: 'Soal STS Ganjil Kelas 2', fn: 'nilaiDownloadSoalSTSGanjil2()' },
        { label: 'Soal STS Genap Kelas 2',  fn: 'nilaiDownloadSoalSTSGenap2()' },
        { label: 'Soal SAS Ganjil Kelas 2', fn: 'nilaiDownloadSoalSASGanjil2()' },
        { label: 'Soal SAS Genap Kelas 2',  fn: 'nilaiDownloadSoalSASGenap2()' },
      ] :
      []; // Kelas 3 dan 4 (Fase B) belum ada file soal
    return soalCards.map(s => `
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div onclick="${s.fn}" style="cursor:pointer;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:700;color:#fff;">${_escape(s.label)}</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Unduh soal</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>
  </div>`).join('');
  })()}
</div>`;
}

window.nilaiDownloadSoalSTS = function() {
  const link = document.createElement('a');
  link.href = './pdf/Soal_SAS_Fase_A_Kelas_1_Ganjil.docx';
  link.download = 'Soal_SAS_Fase_A_Kelas_1_Ganjil.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

window.nilaiDownloadSoalSTS2 = function() {
  const link = document.createElement('a');
  link.href = './pdf/Soal_SAS_Fase_A_Kelas_2_Ganjil.docx';
  link.download = 'Soal_SAS_Fase_A_Kelas_2_Ganjil.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

window.nilaiDownloadSoalSTSGanjil1 = function() {
  const link = document.createElement('a');
  link.href = './pdf/Soal_STS_Fase_A_Kelas_1_Ganjil.docx';
  link.download = 'Soal_STS_Fase_A_Kelas_1_Ganjil.docx';
  document.body.appendChild(link); link.click(); document.body.removeChild(link);
};

window.nilaiDownloadSoalSTSGanjil2 = function() {
  const link = document.createElement('a');
  link.href = './pdf/Soal_STS_Fase_A_Kelas_2_Ganjil.docx';
  link.download = 'Soal_STS_Fase_A_Kelas_2_Ganjil.docx';
  document.body.appendChild(link); link.click(); document.body.removeChild(link);
};

window.nilaiDownloadSoalSTSGenap1 = function() {
  const link = document.createElement('a');
  link.href = './pdf/Soal_STS_Fase_A_Kelas_1_Genap.docx';
  link.download = 'Soal_STS_Fase_A_Kelas_1_Genap.docx';
  document.body.appendChild(link); link.click(); document.body.removeChild(link);
};

window.nilaiDownloadSoalSTSGenap2 = function() {
  const link = document.createElement('a');
  link.href = './pdf/Soal_STS_Fase_A_Kelas_2_Genap.docx';
  link.download = 'Soal_STS_Fase_A_Kelas_2_Genap.docx';
  document.body.appendChild(link); link.click(); document.body.removeChild(link);
};

window.nilaiDownloadSoalSASGenap1 = function() {
  const link = document.createElement('a');
  link.href = './pdf/Soal_SAS_Fase_A_Kelas_1_Genap.docx';
  link.download = 'Soal_SAS_Fase_A_Kelas_1_Genap.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

window.nilaiDownloadSoalSASGenap2 = function() {
  const link = document.createElement('a');
  link.href = './pdf/Soal_SAS_Fase_A_Kelas_2_Genap.docx';
  link.download = 'Soal_SAS_Fase_A_Kelas_2_Genap.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

window.nilaiDownloadSoalSASGanjil1 = function() {
  const link = document.createElement('a');
  link.href = './pdf/Soal_SAS_Fase_A_Kelas_1_Ganjil.docx';
  link.download = 'Soal_SAS_Fase_A_Kelas_1_Ganjil.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

window.nilaiDownloadSoalSASGanjil2 = function() {
  const link = document.createElement('a');
  link.href = './pdf/Soal_SAS_Fase_A_Kelas_2_Ganjil.docx';
  link.download = 'Soal_SAS_Fase_A_Kelas_2_Ganjil.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
// ── CSV helper ─────────────────────────────────
function _downloadCSV(filename, rows) {
  const csv = rows.map(r =>
    r.map(v => {
      const s = String(v ?? '');
      return s.includes(',') || s.includes('"') || s.includes('\n')
        ? `"${s.replace(/"/g, '""')}"` : s;
    }).join(',')
  ).join('\r\n');
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = filename; a.style.display = 'none';
  document.body.appendChild(a); a.click();
  setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 2000);
}

window.nilaiDownloadFormatif1 = async function(kelasId, kelasNama, tpNomor, tpNama) {
  const _labelPerilaku = { aktif: 'Aktif', dorongan: 'Perlu dorongan', belum_siap: 'Belum siap' };
  const _labelAlasan   = {
    menjawab_sendiri: 'Menjawab sendiri', membantu_teman: 'Membantu teman',
    berani_mencoba: 'Berani mencoba', perlu_dipancing: 'Perlu dipancing',
    ikut_bersama_diam_sendiri: 'Ikut bersama, diam sendiri',
    butuh_visual: 'Butuh visual/kartu', tidak_merespons: 'Tidak merespons',
    mencoba_tapi_salah: 'Mencoba tapi masih salah', terlihat_bingung: 'Terlihat bingung',
  };
  try {
    const sesiList = await getSesiFormatifTP(kelasId, tpNomor);
    if (!sesiList || sesiList.length === 0) {
      _nvToast('Belum ada data penilaian untuk TP ini.', 3500, 'warning');
      return;
    }
    const safeName = kelasNama.replace(/\s+/g, '_').toLowerCase();
    const safeTP   = String(tpNomor).padStart(2, '0');
    for (const sesi of sesiList) {
      const tgl  = sesi.tanggal;
      const mode = sesi.mode || 'cepat';
      let rows;
      if (mode === 'detail') {
        rows = [['No', 'Nama', 'Listening', 'Speaking', 'Reading', 'Rerata', 'Perilaku', 'Alasan']];
        for (const s of sesi.siswa) {
          const rerata = [s.l, s.s, s.r].filter(v => v !== null && !isNaN(v));
          const avg    = rerata.length ? Math.round(rerata.reduce((a, b) => a + b, 0) / rerata.length) : '';
          rows.push([
            s.nomor, s.nama,
            s.l ?? '', s.s ?? '', s.r ?? '',
            avg,
            _labelPerilaku[s.perilaku] ?? '',
            _labelAlasan[s.alasan]     ?? '',
          ]);
        }
      } else {
        rows = [['No', 'Nama', 'Nilai', 'Perilaku', 'Alasan']];
        for (const s of sesi.siswa) {
          rows.push([
            s.nomor, s.nama,
            s.capaian ?? '',
            _labelPerilaku[s.perilaku] ?? '',
            _labelAlasan[s.alasan]     ?? '',
          ]);
        }
      }
      const filename = `formatif-tp${safeTP}-sesi${sesi.sesiIdx}-${mode}-${safeName}.csv`;
      await new Promise(r => setTimeout(r, 300));
      _downloadCSV(filename, rows);
    }
  } catch (err) {
    console.error('[NILAI] download formatif error:', err);
    _nvToast('Gagal membuat CSV rekap formatif.');
  }
};


window.nilaiDownloadRapor = async function(semester) {
  try {
    const kelasId   = _state.kelasId;
    const kelasNama = _state.kelasNama;
    const safeName  = kelasNama.replace(/\s+/g, '_').toLowerCase();
    const siswaList = await nilai.getRekapRapor(kelasId, semester);
    const rows = [['No', 'Nama', 'STS', 'SAS', 'Nilai Rapor']];
    siswaList.forEach(s => rows.push([s.nomor, s.nama, s.sts ?? '', s.sas ?? '', s.rapor ?? '']));
    if (rows.length <= 1) {
      _nvToast('Belum ada nilai rapor untuk diunduh.', 3500, 'warning');
      return;
    }
    _downloadCSV(`nilai-rapor-${semester}-${safeName}.csv`, rows);
  } catch (err) {
    console.error('[NILAI] download rapor error:', err);
    _nvToast('Gagal membuat CSV nilai rapor.');
  }
};

window.nilaiTambahKelas = function() {
  const modal = document.createElement('div');
  modal.id = 'modal-tambah-rombel';
  modal.className = 'nv-modal-overlay';
  modal.innerHTML = `
    <div onclick="nilaiTutupModal()" class="nv-modal-backdrop"></div>
    <div class="nv-modal-sheet">
      <div class="nv-modal-title" style="margin-bottom:16px;">Tambah Rombel</div>
      <div class="ds-section-label" style="margin-bottom:6px;">Nama Rombel</div>
      <input id="input-nama-rombel" type="text" placeholder="contoh: Kelas 1 Abdullah"
        class="nv-input-rombel">
      <div class="ds-section-label" style="margin-bottom:8px;">Tingkat Kelas</div>
      <div class="nv-tingkat-grid">
        <button onclick="nilaiPilihTingkat(1)" id="btn-tingkat-1" class="nv-tingkat-btn nv-tingkat-btn--active">Kelas 1<br><span style="font-size:12px;font-weight:400;opacity:.7;">TP 1 – 9</span></button>
        <button onclick="nilaiPilihTingkat(2)" id="btn-tingkat-2" class="nv-tingkat-btn nv-tingkat-btn--idle">Kelas 2<br><span style="font-size:12px;font-weight:400;opacity:.7;">TP 10 – 18</span></button>
        <button onclick="nilaiPilihTingkat(3)" id="btn-tingkat-3" class="nv-tingkat-btn nv-tingkat-btn--idle">Kelas 3<br><span style="font-size:12px;font-weight:400;opacity:.7;">TP 1 – 11</span></button>
        <button onclick="nilaiPilihTingkat(4)" id="btn-tingkat-4" class="nv-tingkat-btn nv-tingkat-btn--idle">Kelas 4<br><span style="font-size:12px;font-weight:400;opacity:.7;">TP 12 – 22</span></button>
        <button onclick="nilaiPilihTingkat(5)" id="btn-tingkat-5" class="nv-tingkat-btn nv-tingkat-btn--idle">Kelas 5<br><span style="font-size:12px;font-weight:400;opacity:.7;">TP 1 – 11</span></button>
        <button onclick="nilaiPilihTingkat(6)" id="btn-tingkat-6" class="nv-tingkat-btn nv-tingkat-btn--idle">Kelas 6<br><span style="font-size:12px;font-weight:400;opacity:.7;">TP 12 – 22</span></button>
      </div>
      <input type="hidden" id="input-tingkat-rombel" value="1">
      <button onclick="nilaiSimpanRombel()" class="nv-btn-simpan">SIMPAN ROMBEL</button>
    </div>
  `;
  document.body.appendChild(modal);

  // Guard kelas
  (async () => {
    try {
      const stored  = await db.get('kv', 'session');
      const kelas   = stored?.payload?.kelas || 'all';
      if (kelas !== 'all') {
        const k = parseInt(kelas);
        [1,2,3,4,5,6].forEach(n => {
          if (n !== k) {
            const btn = document.getElementById(`btn-tingkat-${n}`);
            if (btn) {
              btn.setAttribute('disabled', 'true');
              btn.style.opacity = '0.3';
              btn.style.pointerEvents = 'none';
            }
          }
        });
        nilaiPilihTingkat(k);
      }
    } catch { /* abaikan */ }
  })();
};

window.nilaiPilihTingkat = function(t) {
  document.getElementById('input-tingkat-rombel').value = t;
  [1, 2, 3, 4, 5, 6].forEach(n => {
    const btn = document.getElementById('btn-tingkat-' + n);
    if (btn) btn.className = 'nv-tingkat-btn ' +
      (t === n ? 'nv-tingkat-btn--active' : 'nv-tingkat-btn--idle');
  });
};

window.nilaiSimpanRombel = async function() {
  const nama    = document.getElementById('input-nama-rombel')?.value?.trim();
  const tingkat = parseInt(document.getElementById('input-tingkat-rombel')?.value) || 1;
  if (!nama) { _nvToast('Nama rombel tidak boleh kosong.'); return; }
  await nilai.tambahKelas(nama, tingkat);
  nilaiTutupModal(); _render();
};

window.nilaiHapusKelas = function(id, nama) {
  showConfirmDialog(`Hapus rombel "${nama}" beserta semua siswa dan nilainya?`, () => {
    nilai.hapusKelas(id).then(() => _render());
  });
};

window.nilaiKelolaSiswa     = function() { _renderModalKelolaSiswa(); };

window.nilaiSimpanSiswaBaru = async function() {
  const textarea = document.getElementById('textarea-siswa-baru');
  if (!textarea?.value?.trim()) { _nvToast('Masukkan minimal satu nama siswa.'); return; }
  const count = await nilai.tambahSiswaBatch(_state.kelasId, textarea.value);
  nilaiTutupModal();
  _nvToast(`${count} siswa berhasil ditambahkan.`);
  _render();
};

window.nilaiHapusSiswaModal = function(id, nama) {
  showConfirmDialog(`Hapus siswa "${nama}" beserta semua nilainya?`, () => {
    nilai.hapusSiswa(_state.kelasId, id).then(() => { nilaiTutupModal(); _renderModalKelolaSiswa(); });
  });
};

window.nilaiTutupModal = function() {
  document.getElementById('modal-kelola-siswa')?.remove();
  document.getElementById('modal-tambah-rombel')?.remove();
};

window.nilaiWarna = function(n) {
  if (isNaN(n) || n === null) return 'rgba(255,255,255,.3)';
  if (n >= 80) return '#5C8A6E';
  if (n >= 70) return '#D4AE3A';
  return '#B05A46';
};

window.nilaiDownloadKehadiran = async function(kelasId, kelasNama) {
  try {
    const siswaList = await nilai.getSiswaList(kelasId);
    const kelasList = await nilai.getKelasList();
    const kelas     = kelasList.find(k => k.id === kelasId);
    const tingkat   = kelas?.tingkat || 1;
    const tpList    = _tpList(tingkat);

    const sesiPerTP = {};
    for (const tp of tpList) {
      sesiPerTP[tp.nomor] = (await presensi.getByTP(kelasId, tp.nomor))
        .sort((a, b) => a.taught_at.localeCompare(b.taught_at));
    }

    const koloms = [];
    for (const tp of tpList) {
      for (const sesi of sesiPerTP[tp.nomor]) {
        const tgl = new Date(sesi.taught_at);
        koloms.push({
          tpNomor  : tp.nomor,
          tanggal  : tgl.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit' }),
          statusMap: sesi.status_map || {},
        });
      }
    }

    if (koloms.length === 0) { _nvToast('Belum ada sesi mengajar yang tercatat.', 3500, 'warning'); return; }

    const safeName = kelasNama.replace(/\s+/g, '_').toLowerCase();
    const header   = ['No', 'Nama', ...koloms.map(k => `TP${k.tpNomor} ${k.tanggal}`)];
    const rows     = [header];
    for (const s of siswaList) {
      rows.push([s.nomor, s.nama, ...koloms.map(k => k.statusMap[s.id] || '—')]);
    }
    _downloadCSV(`rekap-kehadiran-${safeName}.csv`, rows);
  } catch (err) {
    console.error('[NILAI] download kehadiran error:', err);
    _nvToast('Gagal membuat CSV rekap kehadiran.');
  }
};

// --- ENTRY POINT -------------------------------------------------------------

function _bindNilaiDelegatedEvents(container) {
  if (container.dataset.delegatesBound) return;
  container.dataset.delegatesBound = '1';
  container.addEventListener('click', e => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    switch (el.dataset.action) {
      case 'pilih-rombel':
        window.nilaiPilihRombel(el.dataset.id, el.dataset.nama, Number(el.dataset.tingkat));
        break;
      case 'hapus-kelas':
        window.nilaiHapusKelas(el.dataset.id, el.dataset.nama);
        break;
      case 'download-kehadiran':
        window.nilaiDownloadKehadiran(el.dataset.kelasId, el.dataset.kelasNama);
        break;
      case 'download-formatif':
        window.nilaiDownloadFormatif1(el.dataset.kelasId, el.dataset.kelasNama, Number(el.dataset.nomor), el.dataset.tpNama);
        break;
      case 'kelola-siswa':
        _renderModalKelolaSiswa();
        break;
    }
  });
}

export async function renderNilaiScreen(container) {
  if (!container) return;
  _container = container;
  _bindNilaiDelegatedEvents(container);
  _state = { view:'rombel', kelasId:null, kelasNama:null, tingkat:1, tpNomor:null, tpNama:null };
  document.getElementById('modal-kelola-siswa')?.remove();
  document.getElementById('modal-tambah-rombel')?.remove();

  container.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;height:60vh;">
      <div style="text-align:center;">
        <div style="font-size:32px;margin-bottom:12px;">📊</div>
        <div style="font-size:13px;color:rgba(255,255,255,.4);">Memuat nilai siswa…</div>
      </div>
    </div>`;

  try {
    await _render();
  } catch (err) {
    console.error('[NILAI] render error:', err);
    container.innerHTML = `<div style="padding:32px;text-align:center;font-size:13px;color:rgba(255,255,255,.4);">Gagal memuat nilai siswa.</div>`;
  }
}

window.nilaiDownloadSAS = async function(semester) {
  try {
    const kelasId   = _state.kelasId;
    const kelasNama = _state.kelasNama;
    const safeName  = kelasNama.replace(/\s+/g, '_').toLowerCase();
    const siswaList = await nilai.getRekapSAS(kelasId, semester);
    const rows      = [['No', 'Nama', 'Nilai SAS']];
    siswaList.forEach(s => rows.push([s.nomor, s.nama, s.sas ?? '']));
    if (rows.length <= 1) {
      _nvToast('Belum ada nilai SAS untuk diunduh.', 3500, 'warning');
      return;
    }
    _downloadCSV(`nilai-sas-${semester}-${safeName}.csv`, rows);
  } catch (err) {
    console.error('[NILAI] download SAS error:', err);
    _nvToast('Gagal membuat CSV nilai SAS.');
  }
};

window.nilaiDownloadSTS = async function(semester) {
  try {
    const kelasId   = _state.kelasId;
    const kelasNama = _state.kelasNama;
    const safeName  = kelasNama.replace(/\s+/g, '_').toLowerCase();
    const siswaList = await nilai.getRekapSumatif(kelasId, semester);
    const rows      = [['No', 'Nama', 'Nilai STS']];
    siswaList.forEach(s => rows.push([s.nomor, s.nama, s.sts ?? '']));
    if (rows.length <= 1) {
      _nvToast('Belum ada nilai STS untuk diunduh.', 3500, 'warning');
      return;
    }
    _downloadCSV(`nilai-sts-${semester}-${safeName}.csv`, rows);
  } catch (err) {
    console.error('[NILAI] download STS error:', err);
    _nvToast('Gagal membuat CSV nilai STS.');
  }
};

async function _renderFormatifDetail(token) {
  if (_state.view !== 'formatif-detail') return;
  const tpNomor  = _state.formatifTP;
  const sesiList = await getSesiFormatifTP(_state.kelasId, tpNomor);
  const allTP    = getAllTP().filter(tp => tp.kelas === _state.tingkat);
  const tp       = allTP.find(t => t.nomor === tpNomor);
  const tpNama   = tp ? tp.nama : `TP ${tpNomor}`;

  if (sesiList.length === 0) {
    _container.innerHTML = `
    <div class="nv-wrap">
      <div class="nv-card nv-card--inset" style="padding:14px 16px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="nilaiBackToFormatif()" class="nv-btn nv-btn--gold" style="font-size:12px;">← Kembali</button>
          <div class="ds-section-label">TP ${String(tpNomor).padStart(2,'0')} — ${_escape(tpNama)}</div>
        </div>
      </div>
      <div class="nv-card nv-card--inset" style="padding:24px 16px;text-align:center;color:rgba(255,255,255,.4);font-size:13px;">
        Belum ada penilaian tercatat untuk TP ini.
      </div>
    </div>`;
    return;
  }

  const sesiHTML = sesiList.map(sesi => `
    <div class="nv-card nv-card--inset" style="margin-bottom:8px;">
      <div style="padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.06);">
        <span style="font-size:12px;font-weight:700;color:rgba(212,174,58,.8);">Sesi ${sesi.sesiIdx}</span>
        <span style="font-size:11px;color:rgba(255,255,255,.4);margin-left:8px;">${_escape(sesi.tanggal)}</span>
        <span style="font-size:11px;color:rgba(255,255,255,.3);margin-left:6px;">(${sesi.mode === 'cepat' ? 'Cepat' : 'Detail'})</span>
      </div>
      <div style="padding:8px 14px;">
        ${sesi.siswa.map(s => {
          const nilaiTeks = sesi.mode === 'cepat'
            ? (s.capaian !== null ? `${s.capaian}` : '—')
            : [s.l !== null ? `L:${s.l}` : null, s.s !== null ? `S:${s.s}` : null, s.r !== null ? `R:${s.r}` : null].filter(Boolean).join(' ') || '—';
          const _lp = { aktif: 'Aktif', dorongan: 'Perlu dorongan', belum_siap: 'Belum siap' };
          const _la = {
            menjawab_sendiri: 'Menjawab sendiri', membantu_teman: 'Membantu teman',
            berani_mencoba: 'Berani mencoba', perlu_dipancing: 'Perlu dipancing',
            ikut_bersama_diam_sendiri: 'Ikut bersama, diam sendiri',
            butuh_visual: 'Butuh visual/kartu', tidak_merespons: 'Tidak merespons',
            mencoba_tapi_salah: 'Mencoba tapi masih salah', terlihat_bingung: 'Terlihat bingung',
          };
          const perilakuTeks = s.perilaku ? ` · ${_lp[s.perilaku] ?? s.perilaku}` : '';
          const alasanTeks   = s.alasan   ? ` · ${_la[s.alasan]   ?? s.alasan}`   : '';
          return `
          <div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);">
            <div style="font-size:12px;color:rgba(255,255,255,.75);">${s.nomor}. ${_escape(s.nama)}</div>
            <div style="font-size:12px;color:rgba(212,174,58,.9);white-space:nowrap;">${nilaiTeks}<span style="color:rgba(255,255,255,.35);font-size:11px;">${_escape(perilakuTeks)}${_escape(alasanTeks)}</span></div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `).join('');

  _container.innerHTML = `
  <div class="nv-wrap">
    <div class="nv-card nv-card--inset" style="padding:14px 16px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <button onclick="nilaiBackToFormatif()" class="nv-btn nv-btn--gold" style="font-size:12px;">← Kembali</button>
        <div class="ds-section-label">TP ${String(tpNomor).padStart(2,'0')} — ${_escape(tpNama)}</div>
      </div>
    </div>
    ${sesiHTML}
  </div>`;
}

window.nilaiBackToFormatif = function() {
  _state.view       = 'formatif';
  _state.formatifTP = null;
  _render();
};

window.nilaiBukaFormatifTP = async function(tpNomor) {
  _state.view       = 'formatif-detail';
  _state.formatifTP = tpNomor;
  _render();
};
