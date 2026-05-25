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
import FASE_A       from '../data/fase-a.js';
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
};

let _container   = null;
let _renderToken = 0;

// --- HELPERS -----------------------------------------------------------------

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

function _tpRange(tingkat) {
  return tingkat === 2
    ? [10,11,12,13,14,15,16,17,18]
    : [1,2,3,4,5,6,7,8,9];
}

function _tpList(tingkat) {
  const range = _tpRange(tingkat);
  return (FASE_A.tujuan_pembelajaran || []).filter(tp => tp && range.includes(tp.nomor));
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
  if (_state.view === 'tp')     await _renderTP(token);
  if (_state.view === 'input')  await _renderInput(token);
  if (_state.view === 'sas')    await _renderSAS(token);
  if (_state.view === 'rapor')  await _renderRapor(token);
  if (_state.view === 'unduh')    await _renderUnduh(token);
  if (_state.view === 'formatif') await _renderFormatif(token);
  if (_state.view === 'formatif-detail') await _renderFormatifDetail(token);
}

// --- LEVEL 1: DAFTAR ROMBEL --------------------------------------------------

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
    const tpTuntas = `${r.tpTuntas || 0}/9`;
    return `
    <div class="nv-rombel-item">
      <div class="nv-rombel-top">
        <div>
          <div class="nv-rombel-name">${_escape(k.nama)}</div>          
        </div>
        <div class="nv-rombel-actions">
          <button onclick="nilaiPilihRombel('${k.id}','${_escape(k.nama)}',${k.tingkat || 1})" class="nv-btn nv-btn--gold">Buka →</button>
          <button onclick="nilaiHapusKelas('${k.id}','${_escape(k.nama)}')" class="nv-btn" style="border:1px solid rgba(255,255,255,.25);color:rgba(255,255,255,.5);">🗑</button>
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
  const tpTuntas = `${rombelRekap.tpTuntas || 0}/9`;

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

    ${_menuCard('nilaiMenuTP()',
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE3A" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
      'rgba(212,174,58,.15)', 'Sumatif Mid Semester', 'Input nilai per TP — masuk nilai rapor')}

    ${_menuCard('nilaiMenuSAS()',
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE3A" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      'rgba(212,174,58,.15)', 'Sumatif Akhir Semester', 'Input nilai ujian akhir semester — masuk nilai rapor')}

    ${_menuCard('nilaiMenuRapor()',
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE3A" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
      'rgba(212,174,58,.15)', 'Nilai Rapor', 'Lihat nilai rapor (STS + SAS) ÷ 2')}

    ${_menuCard('nilaiMenuUnduh()',
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE3A" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
      'rgba(212,174,58,.15)', 'Unduh & Cetak', 'Semua unduhan: soal, nilai dan kehadiran')}
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

async function _renderTP(token) {
  const tpList    = _tpList(_state.tingkat);
  const siswaList = await nilai.getSiswaList(_state.kelasId);
  if (token !== _renderToken) return;

  const tpStatus = {};
  for (const tp of tpList) {
    if (token !== _renderToken) return;
    let adaNilai = 0;
    for (const s of siswaList) {
      const n = await nilai.getNilai(_state.kelasId, s.id, tp.nomor);
      if (n !== null && n !== undefined) adaNilai++;
    }
    tpStatus[tp.nomor] = adaNilai;
  }

  const totalDinilai = Object.values(tpStatus).filter(v => v > 0).length;
  const totalSiswa   = siswaList.length;

  // Kelompokkan per 5 TP
  const GRUP_SIZE = 5;
  const tpGroups  = [];
  for (let i = 0; i < tpList.length; i += GRUP_SIZE) {
    tpGroups.push(tpList.slice(i, i + GRUP_SIZE));
  }

  const accordionHTML = tpGroups.map((group, gi) => {
    const isOpen    = gi === 0;
    const firstNum  = String(group[0].nomor).padStart(2, '0');
    const lastNum   = String(group[group.length - 1].nomor).padStart(2, '0');
    const dinilaiGrup = group.filter(tp => (tpStatus[tp.nomor] || 0) > 0).length;
    const allDone   = dinilaiGrup === group.length;
    const anyDone   = dinilaiGrup > 0;
    const countColor = allDone ? 'rgba(212,174,58,.9)' : anyDone ? 'rgba(255,255,255,.6)' : 'rgba(255,255,255,.3)';

    const itemsHTML = group.map(tp => {
      const dinilai    = tpStatus[tp.nomor] || 0;
      const nilaiLabel = totalSiswa > 0 ? `${dinilai}/${totalSiswa} dinilai` : '—';
      const nilaiColor = dinilai === totalSiswa && totalSiswa > 0 ? 'rgba(212,174,58,.9)'
                       : dinilai > 0 ? 'rgba(255,255,255,.6)'
                       : 'rgba(255,255,255,.3)';
      return `
      <div class="nv-tp-item" onclick="nilaiPilihTP(${tp.nomor},'${_escape(tp.nama)}')" style="cursor:pointer;border-top:1px solid rgba(212,174,58,.1);">
        <div style="flex:1;min-width:0;">
          <div class="nv-tp-num">TP ${String(tp.nomor).padStart(2,'0')}</div>
          <div class="nv-tp-name">${_escape(tp.nama)}</div>
          <div class="nv-tp-status" style="color:${nilaiColor};">${nilaiLabel}</div>
        </div>
        <div class="nv-menu-arrow">›</div>
      </div>`;
    }).join('');

    return `
    <div class="ds-subfase-item ${isOpen ? 'ds-subfase-item--open' : ''}" id="nv-tp-group-${gi}" style="margin-bottom:8px;border-radius:10px;overflow:hidden;border:1px solid rgba(212,174,58,.15);">
      <div class="ds-subfase-head" onclick="nilaiToggleTPGroup(${gi})" style="padding:13px 16px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;">
        <div style="flex:1;min-width:0;">
          <div style="font-size:11px;font-weight:700;color:rgba(212,174,58,.8);letter-spacing:.08em;margin-bottom:2px;">TP ${firstNum} – TP ${lastNum}</div>
          <div style="font-size:12px;color:${countColor};">${dinilaiGrup}/${group.length} TP dinilai</div>
        </div>
        <div class="ds-collapse-chevron" id="nv-tp-chevron-${gi}" style="font-size:14px;color:rgba(212,174,58,.7);">${isOpen ? '▲' : '▼'}</div>
      </div>
      <div class="ds-subfase-body" ${isOpen ? '' : 'style="display:none;"'}>
        ${itemsHTML}
      </div>
    </div>`;
  }).join('');

  _container.innerHTML = `
<div class="nv-wrap">
  <div class="nv-card nv-card--inset" style="padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <button onclick="nilaiBackToMenu()" class="nv-btn nv-btn--gold" style="font-size:12px;">← Menu</button>
      <div class="ds-section-label">${_escape(_state.kelasNama)}</div>
    </div>
    <div style="font-size:13px;color:rgba(255,255,255,.55);margin-top:4px;">Sumatif Mid Semester — nilai per TP, masuk nilai rapor</div>
  </div>
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div style="padding:12px 16px;border-bottom:1px solid rgba(212,174,58,.15);display:flex;align-items:center;justify-content:space-between;">
      <div class="ds-section-label">Pilih TP</div>
      <div style="font-size:12px;color:rgba(255,255,255,.45);">${totalDinilai}/${tpList.length} TP dinilai</div>
    </div>
    <div style="padding:12px;">
      ${accordionHTML}
    </div>
  </div>
</div>`;
}

// --- LEVEL 4: INPUT NILAI L/S/R ----------------------------------------------

async function _renderInput(token) {
  if (!_state.kelasId || _state.tpNomor === null || _state.tpNomor === undefined) return;

  const siswaList = await nilai.getSiswaList(_state.kelasId);
  if (token !== _renderToken) return;

  const lsrMap = {};
  for (const s of siswaList) {
    lsrMap[s.id] = await nilai.getNilaiLSR(_state.kelasId, s.id, _state.tpNomor);
  }
  if (token !== _renderToken) return;

  const PAGE_SIZE = 5;
  const filtered  = siswaList.filter(s => s && s.id);

  function _siswaRowHTML(s) {
    const lsr    = lsrMap[s.id] || { l: null, s: null, r: null, nilai: null, catatan: '' };
    const valL   = lsr.l    !== null && lsr.l    !== undefined ? lsr.l    : '';
    const valS   = lsr.s    !== null && lsr.s    !== undefined ? lsr.s    : '';
    const valR   = lsr.r    !== null && lsr.r    !== undefined ? lsr.r    : '';
    const rerata = lsr.nilai !== null && lsr.nilai !== undefined ? lsr.nilai : '—';
    return `
    <div class="nv-input-row">
      <div class="nv-input-top">
        <div class="ds-siswa-nomor">${s.nomor}</div>
        <div class="nv-siswa-name">${_escape(s.nama)}</div>
        <div id="rerata-display-${s.id}" class="nv-rerata-display" style="color:${_nilaiColor(lsr.nilai)};">${rerata}</div>
      </div>
      <div class="nv-lsr-grid">
        ${['L','S','R'].map((dim, i) => {
          const vals = [valL, valS, valR];
          return `
          <div>
            <div class="nv-lsr-label">${dim}</div>
            <input id="input-${dim.toLowerCase()}-${s.id}" type="number" min="0" max="100" placeholder="—"
              value="${vals[i]}"
              class="nv-lsr-input"
              oninput="nilaiUpdateRerata('${s.id}')"
              onfocus="this.style.borderColor='rgba(212,174,58,.4)'"
              onblur="this.style.borderColor='rgba(255,255,255,.12)';nilaiAutoSaveSiswa('${s.id}')">
          </div>`;
        }).join('')}
      </div>
      <textarea id="catatan-${s.id}" placeholder="Catatan observasi (opsional)..." maxlength="500" rows="2"
        class="ds-textarea"
        onfocus="this.style.borderColor='rgba(212,174,58,.3)'"
        onblur="this.style.borderColor='rgba(255,255,255,.08)';nilaiAutoSaveSiswa('${s.id}')"
      >${_escape(lsr.catatan || '')}</textarea>
    </div>`;
  }

  const barisHTML = filtered.length === 0 ? `
    <div style="padding:32px;text-align:center;font-size:13px;color:rgba(255,255,255,.5);">
      Belum ada siswa. Tambah siswa dulu di menu Kelola Siswa.
    </div>
  ` : (() => {
    const groups = [];
    for (let i = 0; i < filtered.length; i += PAGE_SIZE) {
      groups.push(filtered.slice(i, i + PAGE_SIZE));
    }
    return groups.map((group, gi) => {
      const dari  = group[0].nomor;
      const ke    = group[group.length - 1].nomor;
      const isOpen = gi === 0;
      return `
      <div class="ds-subfase-item ${isOpen ? 'ds-subfase-item--open' : ''}" id="nv-group-${gi}">
        <div class="ds-subfase-head" onclick="nilaiToggleGroup(${gi})">
          <div class="ds-subfase-label">Siswa ${dari}–${ke}</div>
          <div style="font-size:12px;color:${group.some(s => { const l = lsrMap[s.id]; return l && (l.l !== null || l.s !== null || l.r !== null); }) ? 'rgba(212,174,58,.9)' : 'rgba(255,255,255,.3)'};">
            ${group.filter(s => { const l = lsrMap[s.id]; return l && (l.l !== null || l.s !== null || l.r !== null); }).length}/${group.length} diisi
          </div>
          <div class="ds-collapse-chevron" id="nv-chevron-${gi}">${isOpen ? '▲' : '▼'}</div>
        </div>
        <div class="ds-subfase-body" ${isOpen ? '' : 'style="display:none;"'}>
          ${group.map(s => _siswaRowHTML(s)).join('')}
        </div>
      </div>`;
    }).join('');
  })();

  _container.innerHTML = `
<div class="nv-wrap">
  <div class="nv-card nv-card--inset" style="padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <button onclick="nilaiBack()" class="nv-btn nv-btn--gold" style="font-size:12px;">← TP</button>
      <div class="ds-section-label">${_escape(_state.kelasNama)}</div>
    </div>
    <div class="nv-tp-num" style="margin-top:2px;">TP ${String(_state.tpNomor).padStart(2,'0')}</div>
    <div style="font-size:15px;font-weight:700;color:#fff;margin-top:2px;">${_escape(_state.tpNama)}</div>
    <div style="font-size:13px;color:rgba(255,255,255,.5);margin-top:4px;">Sumatif Mid Semester — nilai ini masuk rapor</div>
  </div>

  <div class="nv-color-legend">
    <div class="nv-color-legend-row">
      <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,.55);">L = Listening</div>
      <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,.55);">S = Speaking</div>
      <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,.55);">R = Reading</div>
    </div>
    <div class="nv-color-legend-row">
      <div class="nv-dot nv-dot--sage"></div><span class="nv-dot-label">≥80</span>
      <div class="nv-dot nv-dot--gold"></div><span class="nv-dot-label">≥70</span>
      <div class="nv-dot nv-dot--clay"></div><span class="nv-dot-label">&lt;70</span>
    </div>
  </div>

  <div class="nv-card nv-card--inset nv-card--overflow">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(212,174,58,.15);">
      <div class="ds-section-label">Input Nilai (${siswaList.length} siswa)</div>
      <div style="font-size:12px;color:rgba(255,255,255,.55);">Nilai = Rerata L+S+R</div>
    </div>
    ${barisHTML}
  </div>
  <div class="nv-card--inset">
    <button onclick="nilaiSimpanSemua()" class="nv-btn-simpan">SIMPAN NILAI</button>
  </div>
</div>`;
}

// --- LEVEL 5: SUMATIF AKHIR SEMESTER -----------------------------------------

async function _renderSAS(token) {
  const siswaList = await nilai.getSiswaList(_state.kelasId);
  if (token !== _renderToken) return;

  const sasMap = {};
  for (const s of siswaList) {
    sasMap[s.id] = await nilai.getNilaiSAS(_state.kelasId, s.id);
  }
  if (token !== _renderToken) return;

  const PAGE_SIZE_SAS = 5;
  const filteredSAS   = siswaList.filter(s => s && s.id);

  function _sasRowHTML(s) {
    const sas = sasMap[s.id];
    const val = sas !== null && sas !== undefined ? sas : '';
    return `
    <div class="nv-sas-row">
      <div class="ds-siswa-nomor ds-siswa-nomor--slate">${s.nomor}</div>
      <div class="nv-siswa-name">${_escape(s.nama)}</div>
      <input id="sas-${s.id}" type="number" min="0" max="100" placeholder="—"
        value="${val}"
        class="nv-sas-input"
        oninput="this.style.color=nilaiWarna(parseInt(this.value))"
        onfocus="this.style.borderColor='rgba(212,174,58,.5)'"
        onblur="this.style.borderColor='rgba(255,255,255,.12)';nilaiAutoSaveSAS('${s.id}')">
    </div>`;
  }

  const barisHTML = filteredSAS.length === 0 ? `
    <div style="padding:32px;text-align:center;font-size:13px;color:rgba(255,255,255,.5);">Belum ada siswa.</div>
  ` : (() => {
    const groups = [];
    for (let i = 0; i < filteredSAS.length; i += PAGE_SIZE_SAS) {
      groups.push(filteredSAS.slice(i, i + PAGE_SIZE_SAS));
    }
    return groups.map((group, gi) => {
      const dari  = group[0].nomor;
      const ke    = group[group.length - 1].nomor;
      const isOpen = gi === 0;
      return `
      <div class="ds-subfase-item ${isOpen ? 'ds-subfase-item--open' : ''}" id="nv-sas-group-${gi}">
        <div class="ds-subfase-head" onclick="nilaiToggleSASGroup(${gi})">
          <div class="ds-subfase-label">Siswa ${dari}–${ke}</div>
          <div style="font-size:12px;color:${group.some(s => sasMap[s.id] !== null && sasMap[s.id] !== undefined) ? 'rgba(212,174,58,.9)' : 'rgba(255,255,255,.3)'};">
            ${group.filter(s => sasMap[s.id] !== null && sasMap[s.id] !== undefined).length}/${group.length} diisi
          </div>
          <div class="ds-collapse-chevron" id="nv-sas-chevron-${gi}">${isOpen ? '▲' : '▼'}</div>
        </div>
        <div class="ds-subfase-body" ${isOpen ? '' : 'style="display:none;"'}>
          ${group.map(s => _sasRowHTML(s)).join('')}
        </div>
      </div>`;
    }).join('');
  })();

  _container.innerHTML = `
<div class="nv-wrap">
  <div class="nv-card nv-card--inset" style="padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <button onclick="nilaiBackToMenu()" class="nv-btn nv-btn--gold" style="font-size:12px;">← Menu</button>
      <div class="ds-section-label">${_escape(_state.kelasNama)}</div>
    </div>
    <div style="font-size:15px;font-weight:700;color:#fff;margin-top:2px;">Sumatif Akhir Semester</div>
    <div style="font-size:13px;color:rgba(255,255,255,.5);margin-top:4px;">Nilai ujian akhir semester — masuk rapor sebagai AS</div>
  </div>
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div style="padding:12px 16px;border-bottom:1px solid rgba(212,174,58,.15);">
      <div class="ds-section-label">Input Nilai AS (${siswaList.length} siswa)</div>
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
  const siswaList = await nilai.getRekapRapor(_state.kelasId);
  if (token !== _renderToken) return;

  const PAGE_SIZE_RAPOR = 5;

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
        <span style="font-size:12px;color:rgba(255,255,255,.5);">S: <span style="color:${_nilaiColor(s.s)};font-weight:700;">${val(s.s)}</span></span>
        <span style="font-size:12px;color:rgba(255,255,255,.5);">AS: <span style="color:${_nilaiColor(s.sas)};font-weight:700;">${val(s.sas)}</span></span>
        <span style="font-size:12px;color:rgba(255,255,255,.5);">Rapor: <span style="color:${hasRapor ? 'rgba(212,174,58,.9)' : 'rgba(255,255,255,.3)'};font-weight:800;">${val(s.rapor)}</span></span>
      </div>
    </div>`;
  }

  const barisHTML = siswaList.length === 0 ? `
    <div style="padding:32px;text-align:center;font-size:13px;color:rgba(255,255,255,.5);">Belum ada siswa.</div>
  ` : (() => {
    const groups = [];
    for (let i = 0; i < siswaList.length; i += PAGE_SIZE_RAPOR) {
      groups.push(siswaList.slice(i, i + PAGE_SIZE_RAPOR));
    }
    return groups.map((group, gi) => {
      const dari   = group[0].nomor;
      const ke     = group[group.length - 1].nomor;
      const isOpen = gi === 0;
      return `
      <div class="ds-subfase-item ${isOpen ? 'ds-subfase-item--open' : ''}" id="nv-rapor-group-${gi}">
        <div class="ds-subfase-head" onclick="nilaiToggleRaporGroup(${gi})">
          <div class="ds-subfase-label">Siswa ${dari}–${ke}</div>
          <div style="font-size:12px;color:${group.some(s => s.rapor !== null && s.rapor !== undefined) ? 'rgba(212,174,58,.9)' : 'rgba(255,255,255,.3)'};">
            ${group.filter(s => s.rapor !== null && s.rapor !== undefined).length}/${group.length} ada nilai
          </div>
          <div class="ds-collapse-chevron" id="nv-rapor-chevron-${gi}">${isOpen ? '▲' : '▼'}</div>
        </div>
        <div class="ds-subfase-body" ${isOpen ? '' : 'style="display:none;"'}>
          ${group.map(s => _raporRowHTML(s)).join('')}
        </div>
      </div>`;
    }).join('');
  })();

  _container.innerHTML = `
<div class="nv-wrap">
  <div class="nv-card nv-card--inset" style="padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <button onclick="nilaiBackToMenu()" class="nv-btn nv-btn--gold" style="font-size:12px;">← Menu</button>
      <div class="ds-section-label">${_escape(_state.kelasNama)}</div>
    </div>
    <div style="font-size:15px;font-weight:700;color:#fff;margin-top:2px;">Nilai Rapor</div>
    <div style="font-size:13px;color:rgba(212,174,58,.8);margin-top:4px;">Rumus: (S + AS) ÷ 2 · Nilai bersifat referensi</div>
    <div style="font-size:12px;color:rgba(255,255,255,.4);margin-top:3px;">S = Rerata Sumatif per TP · AS = Sumatif Akhir Semester</div>
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
          <button onclick="nilaiHapusSiswaModal('${s.id}','${_escape(s.nama)}')" class="nv-siswa-hapus-btn">Hapus</button>
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
  document.body.appendChild(modal);
}

// --- ACTIONS -----------------------------------------------------------------

window.nilaiBack = async function() {
  if (_state.view === 'input') await _flushSemuaNilai();
  if (_state.view === 'sas')   await _flushSemuaSAS();
  if (_state.view === 'menu')  { _state.view = 'rombel'; _state.kelasId = null; _state.kelasNama = null; }
  if (_state.view === 'tp')    { _state.view = 'menu'; }
  if (_state.view === 'input') { _state.view = 'tp'; _state.tpNomor = null; _state.tpNama = null; }
  if (_state.view === 'sas')   { _state.view = 'menu'; }
  if (_state.view === 'rapor') { _state.view = 'menu'; }
  if (_state.view === 'unduh') { _state.view = 'menu'; }
  _render();
};

window.nilaiBackToMenu = async function() {
  if (_state.view === 'input') await _flushSemuaNilai();
  if (_state.view === 'sas')   await _flushSemuaSAS();
  _state.view = 'menu';
  _render();
};
window.nilaiMenuTP       = function() { _state.view = 'tp';       _render(); };
window.nilaiMenuSAS      = function() { _state.view = 'sas';      _render(); };
window.nilaiMenuRapor    = function() { _state.view = 'rapor';    _render(); };
window.nilaiMenuUnduh    = function() { _state.view = 'unduh';    _render(); };
window.nilaiMenuFormatif = function() { _state.view = 'formatif'; _render(); };
window.nilaiToggleGroup = function(gi) {
  const item    = document.getElementById(`nv-group-${gi}`);
  const body    = item?.querySelector('.ds-subfase-body');
  const chevron = document.getElementById(`nv-chevron-${gi}`);
  if (!body) return;
  const isOpen = body.style.display !== 'none';

  // Tutup semua group lain
  let idx = 0;
  while (true) {
    const other = document.getElementById(`nv-group-${idx}`);
    if (!other) break;
    if (idx !== gi) {
      const otherBody    = other.querySelector('.ds-subfase-body');
      const otherChevron = document.getElementById(`nv-chevron-${idx}`);
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
window.nilaiToggleTPGroup = function(gi) {
  const item    = document.getElementById(`nv-tp-group-${gi}`);
  const body    = item?.querySelector('.ds-subfase-body');
  const chevron = document.getElementById(`nv-tp-chevron-${gi}`);
  if (!body) return;
  const isOpen = body.style.display !== 'none';

  // Tutup semua grup lain
  let idx = 0;
  while (true) {
    const other = document.getElementById(`nv-tp-group-${idx}`);
    if (!other) break;
    if (idx !== gi) {
      const otherBody    = other.querySelector('.ds-subfase-body');
      const otherChevron = document.getElementById(`nv-tp-chevron-${idx}`);
      if (otherBody)    otherBody.style.display = 'none';
      if (otherChevron) otherChevron.textContent = '▼';
      other.classList.remove('ds-subfase-item--open');
    }
    idx++;
  }

  body.style.display  = isOpen ? 'none' : '';
  chevron.textContent = isOpen ? '▼' : '▲';
  item.classList.toggle('ds-subfase-item--open', !isOpen);
};
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
window.nilaiToggleRaporGroup = function(gi) {
  const item    = document.getElementById(`nv-rapor-group-${gi}`);
  const body    = item?.querySelector('.ds-subfase-body');
  const chevron = document.getElementById(`nv-rapor-chevron-${gi}`);
  if (!body) return;
  const isOpen = body.style.display !== 'none';

  let idx = 0;
  while (true) {
    const other = document.getElementById(`nv-rapor-group-${idx}`);
    if (!other) break;
    if (idx !== gi) {
      const otherBody    = other.querySelector('.ds-subfase-body');
      const otherChevron = document.getElementById(`nv-rapor-chevron-${idx}`);
      if (otherBody)    otherBody.style.display = 'none';
      if (otherChevron) otherChevron.textContent = '▼';
      other.classList.remove('ds-subfase-item--open');
    }
    idx++;
  }

  body.style.display  = isOpen ? 'none' : '';
  chevron.textContent = isOpen ? '▼' : '▲';
  item.classList.toggle('ds-subfase-item--open', !isOpen);
};
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

window.nilaiPilihTP = function(nomor, nama) {
  nilai.getSiswaList(_state.kelasId).then(list => {
    if (list.length === 0) { alert('Tambah siswa dulu sebelum input nilai.'); return; }
    _state.view    = 'input';
    _state.tpNomor = nomor;
    _state.tpNama  = nama;
    _render();
  });
};

window.nilaiUpdateRerata = function(siswaId) {
  const l = parseInt(document.getElementById(`input-l-${siswaId}`)?.value);
  const s = parseInt(document.getElementById(`input-s-${siswaId}`)?.value);
  const r = parseInt(document.getElementById(`input-r-${siswaId}`)?.value);
  const valid  = [l, s, r].filter(v => !isNaN(v));
  const rerata = valid.length > 0 ? Math.round(valid.reduce((a,b) => a+b, 0) / valid.length) : null;
  const el     = document.getElementById(`rerata-display-${siswaId}`);
  if (el) { el.textContent = rerata !== null ? rerata : '—'; el.style.color = _nilaiColor(rerata); }
};

window.nilaiAutoSaveSiswa = async function(siswaId) {
  if (!_state.kelasId || _state.tpNomor === null) return;
  const lRaw = document.getElementById(`input-l-${siswaId}`)?.value.trim();
  const sRaw = document.getElementById(`input-s-${siswaId}`)?.value.trim();
  const rRaw = document.getElementById(`input-r-${siswaId}`)?.value.trim();
  const cat  = document.getElementById(`catatan-${siswaId}`)?.value || '';
  const parse = (raw) => {
    if (!raw) return null;
    const n = parseInt(raw);
    return isNaN(n) ? null : Math.max(0, Math.min(100, n));
  };
  const cl = parse(lRaw), cs = parse(sRaw), cr = parse(rRaw);
  try {
    if (cl !== null || cs !== null || cr !== null) {
      await nilai.setNilaiLSR(_state.kelasId, siswaId, _state.tpNomor, cl, cs, cr);
    }
    if (cat.trim()) {
      await nilai.setCatatan(_state.kelasId, siswaId, _state.tpNomor, cat);
    }
  } catch (err) {
    console.warn('[NILAI] autosave siswa gagal:', err.message);
  }
};

window.nilaiAutoSaveSAS = async function(siswaId) {
  if (!_state.kelasId) return;
  const raw = document.getElementById(`sas-${siswaId}`)?.value.trim();
  if (!raw) return;
  const n = parseInt(raw);
  if (isNaN(n)) return;
  const v = Math.max(0, Math.min(100, n));
  try {
    await nilai.setNilaiSAS(_state.kelasId, siswaId, v);
  } catch (err) {
    console.warn('[NILAI] autosave SAS gagal:', err.message);
  }
};

async function _flushSemuaNilai() {
  if (!_state.kelasId || _state.tpNomor === null) return;
  try {
    const siswaList = await nilai.getSiswaList(_state.kelasId);
    for (const s of siswaList) {
      await window.nilaiAutoSaveSiswa(s.id);
    }
  } catch (err) {
    console.warn('[NILAI] flush nilai gagal:', err.message);
  }
}

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

window.nilaiSimpanSemua = async function() {
  const siswaList = await nilai.getSiswaList(_state.kelasId);
  let saved = 0, clamped = 0;
  for (const s of siswaList) {
    const lRaw = document.getElementById(`input-l-${s.id}`)?.value.trim();
    const sRaw = document.getElementById(`input-s-${s.id}`)?.value.trim();
    const rRaw = document.getElementById(`input-r-${s.id}`)?.value.trim();
    const cat  = document.getElementById(`catatan-${s.id}`)?.value || '';
    const parse = (raw) => {
      if (!raw) return null;
      const n = parseInt(raw); if (isNaN(n)) return null;
      const v = Math.max(0, Math.min(100, n)); if (v !== n) clamped++;
      return v;
    };
    const cl = parse(lRaw), cs = parse(sRaw), cr = parse(rRaw);
    if (cl !== null || cs !== null || cr !== null) {
      await nilai.setNilaiLSR(_state.kelasId, s.id, _state.tpNomor, cl, cs, cr);
      saved++;
    }
    if (cat.trim()) await nilai.setCatatan(_state.kelasId, s.id, _state.tpNomor, cat);
  }
  if (clamped > 0) alert(`${clamped} nilai di luar 0–100 dikoreksi otomatis.`);
  if (saved > 0) {
    jejak.log(_state.tpNomor, _state.tpNama, 'nilai', null, {
      rombel_nama: _state.kelasNama, jumlah_siswa: saved,
    }).catch(() => {});
  }
  _state.view = 'tp'; _state.tpNomor = null; _state.tpNama = null;
  await _render();
};

window.nilaiSimpanSAS = async function() {
  const siswaList = await nilai.getSiswaList(_state.kelasId);
  let saved = 0, clamped = 0;
  for (const s of siswaList) {
    const raw = document.getElementById(`sas-${s.id}`)?.value.trim();
    if (!raw) continue;
    const n = parseInt(raw); if (isNaN(n)) continue;
    const v = Math.max(0, Math.min(100, n)); if (v !== n) clamped++;
    await nilai.setNilaiSAS(_state.kelasId, s.id, v);
    saved++;
  }
  if (clamped > 0) alert(`${clamped} nilai di luar 0–100 dikoreksi otomatis.`);
  const btn = document.querySelector('button[onclick="nilaiSimpanSAS()"]');
  if (btn) {
    btn.textContent = `✓ Tersimpan (${saved})`;
    setTimeout(() => { btn.textContent = 'SIMPAN NILAI AS'; }, 2000);
  }
};
// --- LEVEL 3: SUB-LAYAR UNDUH & CETAK ----------------------------------------

async function _renderUnduh(token) {
  const tpList = _tpList(_state.tingkat);
  if (token !== _renderToken) return;

  const _tpItemHTML = (tp, onclickFn) => `
    <div class="nv-tp-item" onclick="${onclickFn}" style="cursor:pointer;">
      <div style="flex:1;min-width:0;">
        <div class="nv-tp-num">TP ${String(tp.nomor).padStart(2,'0')}</div>
        <div class="nv-tp-name">${_escape(tp.nama)}</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>`;

  const formatifHTML = tpList.map(tp =>
    _tpItemHTML(tp, `nilaiDownloadFormatif1('${_state.kelasId}','${_escape(_state.kelasNama)}',${tp.nomor},'${_escape(tp.nama)}')`
  )).join('');

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
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Observasi proses (L/S/R) — tidak masuk rapor</div>
      </div>
      <div class="ds-collapse-chevron" id="nv-unduh-chevron-formatif">▼</div>
    </div>
    <div id="nv-unduh-body-formatif" style="display:none;">
      ${formatifHTML}
    </div>
  </div>

  <!-- Sumatif -->
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div onclick="nilaiDownloadRekap2('${_state.kelasId}','${_escape(_state.kelasNama)}',${_state.tingkat})"
         style="padding:14px 16px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;">
      <div style="flex:1;">
        <div class="ds-section-label">Nilai Sumatif</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Rekap nilai semua TP — masuk rapor</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>
  </div>

  <!-- Rapor, SAS & Kehadiran -->
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div onclick="nilaiDownloadSAS('${_state.kelasId}','${_escape(_state.kelasNama)}')" style="cursor:pointer;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:700;color:#fff;">Sumatif Akhir Semester</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Unduh CSV nilai ujian akhir semester</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>
  </div>
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div onclick="nilaiDownloadRapor()" style="cursor:pointer;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:700;color:#fff;">Nilai Rapor</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Unduh CSV rapor lengkap (S + AS) ÷ 2</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>
  </div>
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div onclick="nilaiDownloadKehadiran('${_state.kelasId}','${_escape(_state.kelasNama)}')" style="cursor:pointer;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:700;color:#fff;">Rekap Kehadiran</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Unduh CSV presensi semua sesi mengajar</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>
  </div>
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div onclick="nilaiDownloadSoalSTS()" style="cursor:pointer;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:700;color:#fff;">SOAL SUMATIF TENGAH SEMESTER</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Fase A Kelas 1 — TP 01–05 · format DOCX</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>
  </div>
  <div class="nv-card nv-card--inset nv-card--overflow">
    <div onclick="nilaiDownloadSoalSTS2()" style="cursor:pointer;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:700;color:#fff;">SOAL SUMATIF TENGAH SEMESTER</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:3px;">Fase A Kelas 2 — TP 10–14 · format DOCX</div>
      </div>
      <div style="color:rgba(212,174,58,.7);font-size:16px;flex-shrink:0;">⬇</div>
    </div>
  </div>
</div>`;
}

window.nilaiDownloadSoalSTS = function() {
  const link = document.createElement('a');
  link.href = './pdf/Soal_STS_Fase_A_Kelas_1.docx';
  link.download = 'Soal_STS_Fase_A_Kelas_1.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

window.nilaiDownloadSoalSTS2 = function() {
  const link = document.createElement('a');
  link.href = './pdf/Soal_STS_Fase_A_Kelas_2.docx';
  link.download = 'Soal_STS_Fase_A_Kelas_2.docx';
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
  try {
    const sesiList = await getSesiFormatifTP(kelasId, tpNomor);
    if (!sesiList || sesiList.length === 0) {
      alert('Belum ada data penilaian untuk TP ini.');
      return;
    }
    const safeName = kelasNama.replace(/\s+/g, '_').toLowerCase();
    const safeTP   = String(tpNomor).padStart(2, '0');
    for (const sesi of sesiList) {
      const tgl  = sesi.tanggal;
      const mode = sesi.mode || 'cepat';
      let rows;
      if (mode === 'detail') {
        rows = [['No', 'Nama', 'Listening', 'Speaking', 'Reading', 'Rerata', 'Perilaku']];
        for (const s of sesi.siswa) {
          const rerata = [s.l, s.s, s.r].filter(v => v !== null && !isNaN(v));
          const avg    = rerata.length ? Math.round(rerata.reduce((a, b) => a + b, 0) / rerata.length) : '';
          rows.push([
            s.nomor, s.nama,
            s.l ?? '', s.s ?? '', s.r ?? '',
            avg,
            _labelPerilaku[s.perilaku] ?? '',
          ]);
        }
      } else {
        rows = [['No', 'Nama', 'Nilai', 'Perilaku']];
        for (const s of sesi.siswa) {
          rows.push([
            s.nomor, s.nama,
            s.capaian ?? '',
            _labelPerilaku[s.perilaku] ?? '',
          ]);
        }
      }
      const filename = `formatif-tp${safeTP}-sesi${sesi.sesiIdx}-${mode}-${safeName}.csv`;
      await new Promise(r => setTimeout(r, 300));
      _downloadCSV(filename, rows);
    }
  } catch (err) {
    console.error('[NILAI] download formatif error:', err);
    alert('Gagal membuat CSV rekap formatif.');
  }
};


window.nilaiDownloadRapor = async function() {
  try {
    const siswaList = await nilai.getRekapRapor(_state.kelasId);
    const safeName  = _state.kelasNama.replace(/\s+/g, '_').toLowerCase();
    const rows = [['No', 'Nama', 'Sumatif Mid Semester', 'Sumatif Akhir Semester', 'Nilai Rapor']];
    siswaList.forEach(s => rows.push([s.nomor, s.nama, s.s ?? '', s.sas ?? '', s.rapor ?? '']));
    _downloadCSV(`nilai-rapor-${safeName}.csv`, rows);
  } catch (err) {
    console.error('[NILAI] download rapor error:', err);
    alert('Gagal membuat CSV nilai rapor.');
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
      if (kelas === '1') {
        document.getElementById('btn-tingkat-2')?.setAttribute('disabled', 'true');
        document.getElementById('btn-tingkat-2')?.style.setProperty('opacity', '0.3');
      } else if (kelas === '2') {
        document.getElementById('btn-tingkat-1')?.setAttribute('disabled', 'true');
        document.getElementById('btn-tingkat-1')?.style.setProperty('opacity', '0.3');
      }
    } catch { /* abaikan */ }
  })();
};

window.nilaiPilihTingkat = function(t) {
  document.getElementById('input-tingkat-rombel').value = t;
  document.getElementById('btn-tingkat-1').className = `nv-tingkat-btn ${t === 1 ? 'nv-tingkat-btn--active' : 'nv-tingkat-btn--idle'}`;
  document.getElementById('btn-tingkat-2').className = `nv-tingkat-btn ${t === 2 ? 'nv-tingkat-btn--active' : 'nv-tingkat-btn--idle'}`;
};

window.nilaiSimpanRombel = async function() {
  const nama    = document.getElementById('input-nama-rombel')?.value?.trim();
  const tingkat = parseInt(document.getElementById('input-tingkat-rombel')?.value) || 1;
  if (!nama) { alert('Nama rombel tidak boleh kosong.'); return; }
  await nilai.tambahKelas(nama, tingkat);
  nilaiTutupModal(); _render();
};

window.nilaiHapusKelas = function(id, nama) {
  if (!confirm(`Hapus rombel "${nama}" beserta semua siswa dan nilainya?`)) return;
  nilai.hapusKelas(id).then(() => _render());
};

window.nilaiKelolaSiswa     = function() { _renderModalKelolaSiswa(); };

window.nilaiSimpanSiswaBaru = async function() {
  const textarea = document.getElementById('textarea-siswa-baru');
  if (!textarea?.value?.trim()) { alert('Masukkan minimal satu nama siswa.'); return; }
  const count = await nilai.tambahSiswaBatch(_state.kelasId, textarea.value);
  nilaiTutupModal();
  alert(`${count} siswa berhasil ditambahkan.`);
  _render();
};

window.nilaiHapusSiswaModal = function(id, nama) {
  if (!confirm(`Hapus siswa "${nama}" beserta semua nilainya?`)) return;
  nilai.hapusSiswa(_state.kelasId, id).then(() => { nilaiTutupModal(); _renderModalKelolaSiswa(); });
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

    if (koloms.length === 0) { alert('Belum ada sesi mengajar yang tercatat.'); return; }

    const safeName = kelasNama.replace(/\s+/g, '_').toLowerCase();
    const header   = ['No', 'Nama', ...koloms.map(k => `TP${k.tpNomor} ${k.tanggal}`)];
    const rows     = [header];
    for (const s of siswaList) {
      rows.push([s.nomor, s.nama, ...koloms.map(k => k.statusMap[s.id] || '—')]);
    }
    _downloadCSV(`rekap-kehadiran-${safeName}.csv`, rows);
  } catch (err) {
    console.error('[NILAI] download kehadiran error:', err);
    alert('Gagal membuat CSV rekap kehadiran.');
  }
};

// --- ENTRY POINT -------------------------------------------------------------

export async function renderNilaiScreen(container) {
  if (!container) return;
  _container = container;
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

// Fungsi legacy yang tetap diperlukan
window.nilaiDownloadRekap2 = async function(kelasId, kelasNama, tingkat) {
  try {
    const siswaList = await nilai.getRekapAkhir(kelasId);
    const safeName  = kelasNama.replace(/\s+/g, '_').toLowerCase();
    const tpList    = _tpList(parseInt(tingkat) || 1);

    const header = ['No', 'Nama', ...tpList.map(tp => `TP${String(tp.nomor).padStart(2, '0')}`), 'Rerata'];
    const rows   = [header];
    for (const s of siswaList) {
      rows.push([
        s.nomor,
        s.nama,
        ...tpList.map(tp => s.tp?.[tp.nomor] ?? ''),
        s.rerata ?? '',
      ]);
    }
    _downloadCSV(`rekap-akhir-${safeName}.csv`, rows);
  } catch (err) {
    console.error('[NILAI] download rekap2 error:', err);
    alert('Gagal membuat CSV rekap akhir.');
  }
};

window.nilaiDownloadSAS = async function(kelasId, kelasNama) {
  try {
    const siswaList = await nilai.getRekapSAS(kelasId);
    const safeName  = kelasNama.replace(/\s+/g, '_').toLowerCase();
    const rows      = [['No', 'Nama', 'Nilai Akhir Semester']];
    siswaList.forEach(s => rows.push([s.nomor, s.nama, s.sas ?? '']));
    _downloadCSV(`nilai-akhir-semester-${safeName}.csv`, rows);
  } catch (err) {
    console.error('[NILAI] download SAS error:', err);
    alert('Gagal membuat CSV nilai akhir semester.');
  }
};

async function _renderFormatifDetail(token) {
  if (_state.view !== 'formatif-detail') return;
  const tpNomor  = _state.formatifTP;
  const sesiList = await getSesiFormatifTP(_state.kelasId, tpNomor);
  const allTP    = FASE_A.tujuan_pembelajaran || [];
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
          const perilakuTeks = s.perilaku ? ` · ${_lp[s.perilaku] ?? s.perilaku}` : '';
          return `
          <div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);">
            <div style="font-size:12px;color:rgba(255,255,255,.75);">${s.nomor}. ${_escape(s.nama)}</div>
            <div style="font-size:12px;color:rgba(212,174,58,.9);white-space:nowrap;">${nilaiTeks}<span style="color:rgba(255,255,255,.35);font-size:11px;">${_escape(perilakuTeks)}</span></div>
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
