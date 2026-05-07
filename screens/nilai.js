/**
 * screens/nilai.js — FLAF Layar Nilai Siswa
 *
 * Alur: Daftar Rombel → Menu → pilih aksi:
 *   - Kelola Siswa
 *   - Sumatif Lingkup Materi (per TP) → input nilai L/S/R
 *   - Sumatif Akhir Semester (SAS) → satu nilai per siswa
 *   - Nilai Rapor → tampil (S+AS)÷2, bisa download PDF
 *   - Rekap Kehadiran
 *
 * Terminologi Kurikulum Merdeka:
 *   Asesmen Formatif  = observasi proses, tidak masuk rapor (di tab Skenario)
 *   Sumatif Lingkup Materi (S) = nilai per TP, masuk rapor
 *   Sumatif Akhir Semester (AS) = nilai ujian akhir, masuk rapor
 *   Nilai Rapor = (S + AS) ÷ 2
 */

import { nilai }    from '../storage/nilai.js';
import FASE_A       from '../data/fase-a.js';
import { db }       from '../storage/db.js';
import { jejak }    from '../storage/jejak.js';
import { presensi } from '../storage/presensi.js';
import { generatePDFRekap, generatePDFRekap2, generatePDFRapor } from '../modules/pdf-generator.js';

// --- STATE -------------------------------------------------------------------

let _state = {
  view     : 'rombel',  // 'rombel'|'menu'|'tp'|'input'|'sas'|'rapor'
  kelasId  : null,
  kelasNama: null,
  tingkat  : 1,
  tpNomor  : null,
  tpNama   : null,
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

function _cardStyle() {
  return 'background:rgba(255,255,255,.04);border:1px solid rgba(212,174,58,.2);border-radius:14px;';
}

function _btnStyle(color) {
  return `background:transparent;border:1px solid ${color};color:${color};border-radius:8px;padding:6px 12px;font-size:11px;font-weight:700;cursor:pointer;`;
}

function _statBox(label, value, color) {
  return `
  <div style="background:rgba(255,255,255,.04);border-radius:10px;padding:10px 8px;text-align:center;">
    <div style="font-size:16px;font-weight:800;color:${color};">${value}</div>
    <div style="font-size:9px;color:rgba(255,255,255,.35);margin-top:3px;letter-spacing:.05em;text-transform:uppercase;">${label}</div>
  </div>`;
}

function _menuCard(onclick, iconSvg, iconColor, title, subtitle, arrow = true) {
  return `
  <button onclick="${onclick}" style="${_cardStyle()}display:flex;align-items:center;gap:14px;padding:16px;width:100%;text-align:left;border:1px solid rgba(212,174,58,.2);cursor:pointer;background:rgba(255,255,255,.04);">
    <div style="width:36px;height:36px;border-radius:10px;background:${iconColor}22;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      ${iconSvg}
    </div>
    <div style="flex:1;">
      <div style="font-size:13px;font-weight:700;color:#fff;">${title}</div>
      <div style="font-size:11px;color:rgba(255,255,255,.4);margin-top:2px;">${subtitle}</div>
    </div>
    ${arrow ? `<div style="color:rgba(255,255,255,.3);font-size:16px;">›</div>` : ''}
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
    <div style="padding:40px;text-align:center;">
      <div style="font-size:32px;margin-bottom:10px;">🏫</div>
      <div style="font-size:13px;color:rgba(255,255,255,.35);">Belum ada rombel.</div>
      <div style="font-size:11px;color:rgba(255,255,255,.2);margin-top:4px;">Tap "+ Tambah Rombel" untuk mulai.</div>
    </div>
  ` : list.map(k => {
    const r        = rekapMap[k.id] || {};
    const rerata   = r.rerata !== null && r.rerata !== undefined ? r.rerata : '—';
    const peserta  = r.totalSiswa > 0 ? `${r.peserta}/${r.totalSiswa}` : '—';
    const tpTuntas = `${r.tpTuntas || 0}/9`;
    return `
    <div style="border-bottom:1px solid rgba(255,255,255,.06);">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px 10px;">
        <div>
          <div style="font-size:14px;font-weight:700;color:#fff;">${_escape(k.nama)}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.3);margin-top:2px;">Kelas ${k.tingkat || 1} · ${r.totalSiswa || 0} siswa</div>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end;">
          <button onclick="nilaiPilihRombel('${k.id}','${_escape(k.nama)}',${k.tingkat || 1})" style="${_btnStyle('#D4AE3A')}">Buka →</button>
          <button onclick="nilaiHapusKelas('${k.id}','${_escape(k.nama)}')" style="${_btnStyle('#B05A46')}">🗑</button>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;padding:0 16px 14px;gap:8px;">
        ${_statBox('Rerata S', rerata, _nilaiColor(r.rerata))}
        ${_statBox('Peserta', peserta, 'rgba(255,255,255,.7)')}
        ${_statBox('TP Tuntas', tpTuntas, 'rgba(255,255,255,.7)')}
      </div>
    </div>`;
  }).join('');

  _container.innerHTML = `
<div style="padding:16px 0 90px;display:flex;flex-direction:column;gap:12px;">
  <div style="margin:0 16px;${_cardStyle()}padding:14px 16px;">
    <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;margin-bottom:2px;">Manajemen Kelas</div>
    <div style="font-size:13px;color:rgba(255,255,255,.5);">Pilih rombel untuk input atau lihat nilai</div>
  </div>
  <div style="margin:0 16px;background:rgba(255,255,255,.04);border:1px solid rgba(212,174,58,.2);border-radius:14px;overflow:hidden;">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(212,174,58,.15);">
      <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;">Daftar Rombel (${list.length})</div>
      <button onclick="nilaiTambahKelas()" style="${_btnStyle('#D4AE3A')}">+ Tambah Rombel</button>
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
<div style="padding:16px 0 90px;display:flex;flex-direction:column;gap:12px;">

  <!-- HEADER -->
  <div style="margin:0 16px;${_cardStyle()}padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
      <button onclick="nilaiBack()" style="${_btnStyle('rgba(212,174,58,.8)')}font-size:12px;">← Rombel</button>
      <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;">${_escape(_state.kelasNama)}</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
      ${_statBox('Rerata S', rerata, _nilaiColor(rombelRekap.rerata))}
      ${_statBox('Peserta', peserta, 'rgba(255,255,255,.7)')}
      ${_statBox('TP Tuntas', tpTuntas, 'rgba(255,255,255,.7)')}
    </div>
  </div>

  <div style="margin:0 16px;font-size:11px;color:rgba(255,255,255,.35);">${siswaList.length} siswa terdaftar</div>

  <!-- GRID TP -->
  <div style="margin:0 16px;${_cardStyle()}padding:14px 16px;">
    <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;margin-bottom:10px;">Progres Asesmen — ${_escape(_state.kelasNama)}</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px;">
      ${_tpList(_state.tingkat).map(tp => {
        const sudah = tpSelesai.has(tp.nomor);
        return `<div title="TP ${tp.nomor} — ${tp.nama}" style="
          width:32px;height:32px;border-radius:8px;
          background:${sudah ? 'rgba(92,138,110,.25)' : 'rgba(255,255,255,.06)'};
          border:1px solid ${sudah ? 'rgba(92,138,110,.5)' : 'rgba(255,255,255,.1)'};
          display:flex;align-items:center;justify-content:center;
          font-size:10px;font-weight:700;
          color:${sudah ? '#5C8A6E' : 'rgba(255,255,255,.25)'};
        ">${tp.nomor}</div>`;
      }).join('')}
    </div>
    <div style="display:flex;align-items:center;gap:12px;">
      <div style="display:flex;align-items:center;gap:4px;">
        <div style="width:10px;height:10px;border-radius:3px;background:rgba(92,138,110,.25);border:1px solid rgba(92,138,110,.5);"></div>
        <span style="font-size:9px;color:rgba(255,255,255,.35);">Sudah diajarkan (${tpSelesai.size}/9)</span>
      </div>
      <div style="display:flex;align-items:center;gap:4px;">
        <div style="width:10px;height:10px;border-radius:3px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);"></div>
        <span style="font-size:9px;color:rgba(255,255,255,.35);">Belum diajarkan</span>
      </div>
    </div>
  </div>

  <!-- MENU AKSI -->
  <div style="margin:0 16px;display:flex;flex-direction:column;gap:8px;">

    ${_menuCard('nilaiKelolaSiswa()',
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE3A" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
      '#D4AE3A', 'Kelola Siswa', 'Tambah atau hapus siswa di rombel ini')}

    ${_menuCard('nilaiMenuTP()',
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5C8A6E" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
      '#5C8A6E', 'Sumatif Lingkup Materi', 'Input nilai L/S/R per TP — masuk nilai rapor')}

    ${_menuCard(`nilaiMenuSAS()`,
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7B9FD4" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      '#7B9FD4', 'Sumatif Akhir Semester', 'Input nilai ujian akhir semester — masuk nilai rapor')}

    ${_menuCard(`nilaiMenuRapor()`,
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAC775" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
      '#FAC775', 'Nilai Rapor', 'Lihat & unduh rekap nilai rapor (S + AS) ÷ 2')}

    ${_menuCard(`nilaiDownloadKehadiran('${_state.kelasId}','${_escape(_state.kelasNama)}')`,
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B05A46" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
      '#B05A46', 'Rekap Kehadiran', 'Unduh PDF presensi per sesi mengajar')}

  </div>
</div>`;
}

// --- LEVEL 3: DAFTAR TP (Sumatif Lingkup Materi) ----------------------------

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

  const tpHTML = tpList.map(tp => {
    const dinilai    = tpStatus[tp.nomor] || 0;
    const total      = siswaList.length;
    const nilaiLabel = total > 0 ? `${dinilai}/${total} dinilai` : '—';
    const nilaiColor = dinilai === total && total > 0 ? '#5C8A6E'
                     : dinilai > 0 ? '#D4AE3A'
                     : 'rgba(255,255,255,.2)';
    return `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.05);">
      <div style="flex:1;min-width:0;cursor:pointer;" onclick="nilaiPilihTP(${tp.nomor},'${_escape(tp.nama)}')">
        <div style="font-size:10px;font-weight:700;color:#B05A46;letter-spacing:.05em;">TP ${String(tp.nomor).padStart(2,'0')}</div>
        <div style="font-size:13px;font-weight:600;color:#fff;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${_escape(tp.nama)}</div>
        <div style="font-size:10px;color:${nilaiColor};margin-top:3px;">${nilaiLabel}</div>
      </div>
      <div style="display:flex;gap:6px;align-items:center;flex-shrink:0;margin-left:10px;">
        <button onclick="nilaiDownloadFormatif1('${_state.kelasId}','${_escape(_state.kelasNama)}',${tp.nomor},'${_escape(tp.nama)}')"
          style="${_btnStyle('#7B9FD4')}padding:4px 8px;font-size:10px;">⬇ Formatif</button>
        <button onclick="nilaiDownloadRekap1('${_state.kelasId}','${_escape(_state.kelasNama)}',${tp.nomor},'${_escape(tp.nama)}')"
          style="${_btnStyle('#5C8A6E')}padding:4px 8px;font-size:10px;">⬇ Sumatif</button>
        <div onclick="nilaiPilihTP(${tp.nomor},'${_escape(tp.nama)}')" style="color:rgba(255,255,255,.3);font-size:14px;cursor:pointer;">›</div>
      </div>
    </div>`;
  }).join('');

  _container.innerHTML = `
<div style="padding:16px 0 90px;display:flex;flex-direction:column;gap:12px;">
  <div style="margin:0 16px;${_cardStyle()}padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <button onclick="nilaiBackToMenu()" style="${_btnStyle('rgba(212,174,58,.8)')}font-size:12px;">← Menu</button>
      <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;">${_escape(_state.kelasNama)}</div>
    </div>
    <div style="font-size:11px;color:rgba(255,255,255,.35);margin-top:4px;">Sumatif Lingkup Materi — nilai per TP, masuk nilai rapor</div>
  </div>
  <div style="margin:0 16px;background:rgba(255,255,255,.04);border:1px solid rgba(212,174,58,.2);border-radius:14px;overflow:hidden;">
    <div style="padding:12px 16px;border-bottom:1px solid rgba(212,174,58,.15);">
      <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;">Pilih TP — Input Nilai L / S / R</div>
    </div>
    ${tpHTML}
  </div>
</div>`;
}

// --- LEVEL 4: INPUT NILAI L/S/R + CATATAN ------------------------------------

async function _renderInput(token) {
  if (!_state.kelasId || _state.tpNomor === null || _state.tpNomor === undefined) return;

  const siswaList = await nilai.getSiswaList(_state.kelasId);
  if (token !== _renderToken) return;

  const lsrMap = {};
  for (const s of siswaList) {
    lsrMap[s.id] = await nilai.getNilaiLSR(_state.kelasId, s.id, _state.tpNomor);
  }
  if (token !== _renderToken) return;

  const barisHTML = siswaList.length === 0 ? `
    <div style="padding:32px;text-align:center;font-size:13px;color:rgba(255,255,255,.3);">
      Belum ada siswa. Tambah siswa dulu di menu Kelola Siswa.
    </div>
  ` : siswaList.filter(s => s && s.id).map(s => {
    const lsr    = lsrMap[s.id] || { l: null, s: null, r: null, nilai: null, catatan: '' };
    const valL   = lsr.l     !== null && lsr.l     !== undefined ? lsr.l     : '';
    const valS   = lsr.s     !== null && lsr.s     !== undefined ? lsr.s     : '';
    const valR   = lsr.r     !== null && lsr.r     !== undefined ? lsr.r     : '';
    const rerata = lsr.nilai  !== null && lsr.nilai  !== undefined ? lsr.nilai  : '—';
    return `
    <div style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.05);">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
        <div style="width:24px;height:24px;background:rgba(212,174,58,.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#D4AE3A;flex-shrink:0;">${s.nomor}</div>
        <div style="flex:1;font-size:13px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${_escape(s.nama)}</div>
        <div id="rerata-display-${s.id}" style="font-size:13px;font-weight:800;color:${_nilaiColor(lsr.nilai)};min-width:28px;text-align:right;">${rerata}</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-bottom:8px;">
        ${['L','S','R'].map((dim, i) => {
          const vals = [valL, valS, valR];
          return `
          <div>
            <div style="font-size:9px;font-weight:700;color:rgba(255,255,255,.4);letter-spacing:.05em;text-align:center;margin-bottom:3px;">${dim}</div>
            <input id="input-${dim.toLowerCase()}-${s.id}" type="number" min="0" max="100" placeholder="—"
              value="${vals[i]}"
              style="width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#fff;font-size:14px;font-weight:700;text-align:center;padding:6px 4px;outline:none;box-sizing:border-box;"
              oninput="nilaiUpdateRerata('${s.id}')"
              onfocus="this.style.borderColor='rgba(212,174,58,.4)'"
              onblur="this.style.borderColor='rgba(255,255,255,.12)'">
          </div>`;
        }).join('')}
      </div>
      <textarea id="catatan-${s.id}" placeholder="Catatan observasi (opsional)..." maxlength="500" rows="2"
        style="width:100%;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:rgba(255,255,255,.6);font-size:11px;padding:6px 8px;resize:none;outline:none;font-family:inherit;box-sizing:border-box;"
        onfocus="this.style.borderColor='rgba(212,174,58,.3)'"
        onblur="this.style.borderColor='rgba(255,255,255,.08)'"
      >${_escape(lsr.catatan || '')}</textarea>
    </div>`;
  }).join('');

  _container.innerHTML = `
<div style="padding:16px 0 90px;display:flex;flex-direction:column;gap:12px;">
  <div style="margin:0 16px;${_cardStyle()}padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <button onclick="nilaiBack()" style="${_btnStyle('rgba(212,174,58,.8)')}font-size:12px;">← TP</button>
      <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;">${_escape(_state.kelasNama)}</div>
    </div>
    <div style="font-size:10px;font-weight:700;color:#B05A46;letter-spacing:.05em;margin-top:2px;">TP ${String(_state.tpNomor).padStart(2,'0')}</div>
    <div style="font-size:15px;font-weight:700;color:#fff;margin-top:2px;">${_escape(_state.tpNama)}</div>
    <div style="font-size:10px;color:rgba(255,255,255,.3);margin-top:4px;">Sumatif Lingkup Materi — nilai ini masuk rapor</div>
  </div>
  <div style="margin:0 16px;display:flex;gap:12px;align-items:center;">
    <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.4);">L = Listening</div>
    <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.4);">S = Speaking</div>
    <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.4);">R = Reading</div>
    <div style="flex:1;"></div>
    <div style="width:8px;height:8px;border-radius:50%;background:#5C8A6E;"></div><span style="font-size:9px;color:rgba(255,255,255,.3);">≥80</span>
    <div style="width:8px;height:8px;border-radius:50%;background:#D4AE3A;"></div><span style="font-size:9px;color:rgba(255,255,255,.3);">≥70</span>
    <div style="width:8px;height:8px;border-radius:50%;background:#B05A46;"></div><span style="font-size:9px;color:rgba(255,255,255,.3);">&lt;70</span>
  </div>
  <div style="margin:0 16px;background:rgba(255,255,255,.04);border:1px solid rgba(212,174,58,.2);border-radius:14px;overflow:hidden;">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(212,174,58,.15);">
      <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;">Input Nilai (${siswaList.length} siswa)</div>
      <div style="font-size:9px;color:rgba(255,255,255,.35);">Nilai = Rerata L+S+R</div>
    </div>
    ${barisHTML}
  </div>
  <div style="margin:0 16px;">
    <button onclick="nilaiSimpanSemua()" style="width:100%;padding:14px;background:#D4AE3A;border:none;border-radius:12px;font-size:14px;font-weight:800;color:#1A1A1A;cursor:pointer;letter-spacing:.04em;">SIMPAN NILAI</button>
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

  const barisHTML = siswaList.length === 0 ? `
    <div style="padding:32px;text-align:center;font-size:13px;color:rgba(255,255,255,.3);">Belum ada siswa.</div>
  ` : siswaList.map(s => {
    const sas = sasMap[s.id];
    const val = sas !== null && sas !== undefined ? sas : '';
    return `
    <div style="display:flex;align-items:center;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.05);gap:12px;">
      <div style="width:24px;height:24px;background:rgba(123,159,212,.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#7B9FD4;flex-shrink:0;">${s.nomor}</div>
      <div style="flex:1;font-size:13px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${_escape(s.nama)}</div>
      <input id="sas-${s.id}" type="number" min="0" max="100" placeholder="—"
        value="${val}"
        style="width:64px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#fff;font-size:15px;font-weight:700;text-align:center;padding:6px 4px;outline:none;"
        oninput="this.style.color=nilaiWarna(parseInt(this.value))"
        onfocus="this.style.borderColor='rgba(123,159,212,.5)'"
        onblur="this.style.borderColor='rgba(255,255,255,.12)'">
    </div>`;
  }).join('');

  _container.innerHTML = `
<div style="padding:16px 0 90px;display:flex;flex-direction:column;gap:12px;">
  <div style="margin:0 16px;${_cardStyle()}padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <button onclick="nilaiBackToMenu()" style="${_btnStyle('rgba(212,174,58,.8)')}font-size:12px;">← Menu</button>
      <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;">${_escape(_state.kelasNama)}</div>
    </div>
    <div style="font-size:15px;font-weight:700;color:#fff;margin-top:2px;">Sumatif Akhir Semester</div>
    <div style="font-size:10px;color:rgba(255,255,255,.3);margin-top:4px;">Nilai ujian akhir semester — masuk rapor sebagai AS</div>
  </div>
  <div style="margin:0 16px;background:rgba(255,255,255,.04);border:1px solid rgba(123,159,212,.3);border-radius:14px;overflow:hidden;">
    <div style="padding:12px 16px;border-bottom:1px solid rgba(123,159,212,.2);">
      <div style="font-size:9px;font-weight:700;color:rgba(123,159,212,.8);letter-spacing:.08em;text-transform:uppercase;">Input Nilai AS (${siswaList.length} siswa)</div>
    </div>
    ${barisHTML}
  </div>
  <div style="margin:0 16px;">
    <button onclick="nilaiSimpanSAS()" style="width:100%;padding:14px;background:#7B9FD4;border:none;border-radius:12px;font-size:14px;font-weight:800;color:#fff;cursor:pointer;letter-spacing:.04em;">SIMPAN NILAI AS</button>
  </div>
</div>`;
}

// --- LEVEL 6: NILAI RAPOR ----------------------------------------------------

async function _renderRapor(token) {
  const siswaList = await nilai.getRekapRapor(_state.kelasId);
  if (token !== _renderToken) return;

  const barisHTML = siswaList.length === 0 ? `
    <div style="padding:32px;text-align:center;font-size:13px;color:rgba(255,255,255,.3);">Belum ada siswa.</div>
  ` : siswaList.map(s => {
    const val = (v) => v !== null && v !== undefined ? v : '—';
    return `
    <div style="display:flex;align-items:center;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.05);gap:10px;">
      <div style="width:24px;height:24px;background:rgba(212,174,58,.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#D4AE3A;flex-shrink:0;">${s.nomor}</div>
      <div style="flex:1;font-size:12px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${_escape(s.nama)}</div>
      <div style="text-align:center;min-width:36px;">
        <div style="font-size:9px;color:rgba(255,255,255,.3);">S</div>
        <div style="font-size:12px;font-weight:700;color:${_nilaiColor(s.s)};">${val(s.s)}</div>
      </div>
      <div style="text-align:center;min-width:36px;">
        <div style="font-size:9px;color:rgba(255,255,255,.3);">AS</div>
        <div style="font-size:12px;font-weight:700;color:${_nilaiColor(s.sas)};">${val(s.sas)}</div>
      </div>
      <div style="text-align:center;min-width:44px;background:rgba(250,199,117,.08);border-radius:8px;padding:4px 6px;">
        <div style="font-size:9px;color:rgba(250,199,117,.6);">Rapor</div>
        <div style="font-size:14px;font-weight:800;color:${_nilaiColor(s.rapor)};">${val(s.rapor)}</div>
      </div>
    </div>`;
  }).join('');

  _container.innerHTML = `
<div style="padding:16px 0 90px;display:flex;flex-direction:column;gap:12px;">
  <div style="margin:0 16px;${_cardStyle()}padding:14px 16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <button onclick="nilaiBackToMenu()" style="${_btnStyle('rgba(212,174,58,.8)')}font-size:12px;">← Menu</button>
      <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;">${_escape(_state.kelasNama)}</div>
    </div>
    <div style="font-size:15px;font-weight:700;color:#fff;margin-top:2px;">Nilai Rapor</div>
    <div style="font-size:10px;color:rgba(250,199,117,.6);margin-top:4px;">Rumus Kurikulum Merdeka: (S + AS) ÷ 2</div>
    <div style="font-size:9px;color:rgba(255,255,255,.25);margin-top:2px;">Nilai rapor bersifat referensi — guru memiliki kewenangan penuh</div>
  </div>

  <!-- LEGENDA -->
  <div style="margin:0 16px;display:flex;gap:16px;align-items:center;">
    <div style="font-size:10px;color:rgba(255,255,255,.4);">S = Rerata Sumatif per TP</div>
    <div style="font-size:10px;color:rgba(255,255,255,.4);">AS = Sumatif Akhir Semester</div>
  </div>

  <div style="margin:0 16px;background:rgba(255,255,255,.04);border:1px solid rgba(250,199,117,.3);border-radius:14px;overflow:hidden;">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(250,199,117,.15);">
      <div style="font-size:9px;font-weight:700;color:rgba(250,199,117,.8);letter-spacing:.08em;text-transform:uppercase;">Rekap Nilai (${siswaList.length} siswa)</div>
      <button onclick="nilaiDownloadRapor()" style="${_btnStyle('#FAC775')}padding:4px 10px;font-size:10px;">⬇ PDF Rapor</button>
    </div>
    ${barisHTML}
  </div>
</div>`;
}

// --- MODAL: KELOLA SISWA -----------------------------------------------------

async function _renderModalKelolaSiswa() {
  const existing     = await nilai.getSiswaList(_state.kelasId);
  const existingHTML = existing.length === 0 ? '' : `
    <div style="margin-bottom:12px;">
      <div style="font-size:10px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px;">Siswa Terdaftar (${existing.length})</div>
      ${existing.map(s => `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);">
          <div style="font-size:13px;color:rgba(255,255,255,.8);">${s.nomor}. ${_escape(s.nama)}</div>
          <button onclick="nilaiHapusSiswaModal('${s.id}','${_escape(s.nama)}')" style="background:rgba(176,90,70,.15);border:1px solid rgba(176,90,70,.3);color:#B05A46;border-radius:6px;padding:4px 10px;font-size:11px;cursor:pointer;">Hapus</button>
        </div>
      `).join('')}
    </div>
  `;

  const modal = document.createElement('div');
  modal.id = 'modal-kelola-siswa';
  modal.style.cssText = 'position:fixed;inset:0;z-index:1000;display:flex;align-items:flex-end;';
  modal.innerHTML = `
    <div onclick="nilaiTutupModal()" style="position:absolute;inset:0;background:rgba(0,0,0,.6);"></div>
    <div style="position:relative;width:100%;background:#1E1E1E;border-radius:20px 20px 0 0;padding:20px 16px 40px;max-height:80vh;overflow-y:auto;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <div style="font-size:15px;font-weight:700;color:#fff;">Kelola Siswa</div>
        <button onclick="nilaiTutupModal()" style="background:rgba(255,255,255,.08);border:none;color:rgba(255,255,255,.6);border-radius:8px;padding:6px 12px;font-size:12px;cursor:pointer;">✕ Tutup</button>
      </div>
      ${existingHTML}
      <div style="font-size:10px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px;">Tambah Siswa Baru</div>
      <div style="font-size:11px;color:rgba(255,255,255,.4);margin-bottom:8px;">Ketik satu nama per baris.</div>
      <textarea id="textarea-siswa-baru" placeholder="Ahmad Fauzi&#10;Budi Santoso&#10;Citra Dewi&#10;..."
        style="width:100%;height:140px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:10px;color:#fff;font-size:13px;padding:10px 12px;resize:none;outline:none;font-family:inherit;box-sizing:border-box;"></textarea>
      <button onclick="nilaiSimpanSiswaBaru()" style="width:100%;margin-top:10px;padding:13px;background:#D4AE3A;border:none;border-radius:10px;font-size:13px;font-weight:800;color:#1A1A1A;cursor:pointer;">SIMPAN DAFTAR SISWA</button>
    </div>
  `;
  document.body.appendChild(modal);
}

// --- ACTIONS -----------------------------------------------------------------

window.nilaiBack = function() {
  if (_state.view === 'menu')  { _state.view = 'rombel'; _state.kelasId = null; _state.kelasNama = null; }
  if (_state.view === 'tp')    { _state.view = 'menu'; }
  if (_state.view === 'input') { _state.view = 'tp'; _state.tpNomor = null; _state.tpNama = null; }
  if (_state.view === 'sas')   { _state.view = 'menu'; }
  if (_state.view === 'rapor') { _state.view = 'menu'; }
  _render();
};

window.nilaiBackToMenu = function() { _state.view = 'menu'; _render(); };
window.nilaiMenuTP     = function() { _state.view = 'tp';   _render(); };
window.nilaiMenuSAS    = function() { _state.view = 'sas';  _render(); };
window.nilaiMenuRapor  = function() { _state.view = 'rapor';_render(); };

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

window.nilaiDownloadFormatif1 = async function(kelasId, kelasNama, tpNomor, tpNama) {
  try {
    const session     = await db.get('kv', 'session');
    const namaGuru    = session?.payload?.name   || '—';
    const namaSekolah = session?.payload?.school || '—';
    const siswaList   = await nilai.getRekapFormatifTP(kelasId, tpNomor);
    await generatePDFRekap({
      namaSekolah,
      namaGuru,
      kelasNama,
      tpNomor,
      tpNama   : `[Formatif] ${tpNama}`,
      siswaList,
    });
  } catch (err) {
    console.error('[NILAI] download formatif error:', err);
    alert('Gagal membuat PDF rekap formatif.');
  }
};

window.nilaiDownloadRekap1 = async function(kelasId, kelasNama, tpNomor, tpNama) {
  try {
    const session     = await db.get('kv', 'session');
    const namaGuru    = session?.payload?.name   || '—';
    const namaSekolah = session?.payload?.school || '—';
    const siswaList   = await nilai.getRekapTP(kelasId, tpNomor);
    await generatePDFRekap({ namaSekolah, namaGuru, kelasNama, tpNomor, tpNama, siswaList });
  } catch (err) {
    console.error('[NILAI] download rekap1 error:', err);
    alert('Gagal membuat PDF rekap TP.');
  }
};

window.nilaiDownloadRekap2 = async function(kelasId, kelasNama, tingkat) {
  try {
    const session     = await db.get('kv', 'session');
    const namaGuru    = session?.payload?.name   || '—';
    const namaSekolah = session?.payload?.school || '—';
    const siswaList   = await nilai.getRekapAkhir(kelasId);
    await generatePDFRekap2({ namaSekolah, namaGuru, kelasNama, tingkat: parseInt(tingkat) || 1, siswaList });
  } catch (err) {
    console.error('[NILAI] download rekap2 error:', err);
    alert('Gagal membuat PDF rekap akhir.');
  }
};

window.nilaiDownloadRapor = async function() {
  try {
    const session     = await db.get('kv', 'session');
    const namaGuru    = session?.payload?.name   || '—';
    const namaSekolah = session?.payload?.school || '—';
    const kelasList   = await nilai.getKelasList();
    const kelas       = kelasList.find(k => k.id === _state.kelasId);
    const siswaList   = await nilai.getRekapRapor(_state.kelasId);
    await generatePDFRapor({
      namaSekolah, namaGuru,
      kelasNama: _state.kelasNama,
      tingkat  : kelas?.tingkat || 1,
      siswaList,
    });
  } catch (err) {
    console.error('[NILAI] download rapor error:', err);
    alert('Gagal membuat PDF nilai rapor.');
  }
};

window.nilaiTambahKelas = function() {
  const modal = document.createElement('div');
  modal.id = 'modal-tambah-rombel';
  modal.style.cssText = 'position:fixed;inset:0;z-index:1000;display:flex;align-items:flex-end;';
  modal.innerHTML = `
    <div onclick="nilaiTutupModal()" style="position:absolute;inset:0;background:rgba(0,0,0,.6);"></div>
    <div style="position:relative;width:100%;background:#1E1E1E;border-radius:20px 20px 0 0;padding:20px 16px 40px;">
      <div style="font-size:15px;font-weight:700;color:#fff;margin-bottom:16px;">Tambah Rombel</div>
      <div style="font-size:10px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px;">Nama Rombel</div>
      <input id="input-nama-rombel" type="text" placeholder="contoh: Kelas 1 Abdullah"
        style="width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:10px;color:#fff;font-size:14px;padding:10px 12px;outline:none;box-sizing:border-box;margin-bottom:14px;">
      <div style="font-size:10px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px;">Tingkat Kelas</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
        <button onclick="nilaiPilihTingkat(1)" id="btn-tingkat-1" style="padding:12px;background:rgba(212,174,58,.2);border:2px solid #D4AE3A;border-radius:10px;color:#D4AE3A;font-size:13px;font-weight:700;cursor:pointer;">Kelas 1<br><span style="font-size:10px;font-weight:400;opacity:.7;">TP 1 – 9</span></button>
        <button onclick="nilaiPilihTingkat(2)" id="btn-tingkat-2" style="padding:12px;background:rgba(255,255,255,.04);border:2px solid rgba(255,255,255,.12);border-radius:10px;color:rgba(255,255,255,.5);font-size:13px;font-weight:700;cursor:pointer;">Kelas 2<br><span style="font-size:10px;font-weight:400;opacity:.7;">TP 10 – 18</span></button>
      </div>
      <input type="hidden" id="input-tingkat-rombel" value="1">
      <button onclick="nilaiSimpanRombel()" style="width:100%;padding:13px;background:#D4AE3A;border:none;border-radius:10px;font-size:13px;font-weight:800;color:#1A1A1A;cursor:pointer;">SIMPAN ROMBEL</button>
    </div>
  `;
  document.body.appendChild(modal);
};

window.nilaiPilihTingkat = function(t) {
  document.getElementById('input-tingkat-rombel').value = t;
  const on  = 'padding:12px;background:rgba(212,174,58,.2);border:2px solid #D4AE3A;border-radius:10px;color:#D4AE3A;font-size:13px;font-weight:700;cursor:pointer;';
  const off = 'padding:12px;background:rgba(255,255,255,.04);border:2px solid rgba(255,255,255,.12);border-radius:10px;color:rgba(255,255,255,.5);font-size:13px;font-weight:700;cursor:pointer;';
  document.getElementById('btn-tingkat-1').style.cssText = t === 1 ? on : off;
  document.getElementById('btn-tingkat-2').style.cssText = t === 2 ? on : off;
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

window.nilaiKelolaSiswa    = function() { _renderModalKelolaSiswa(); };

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
    const session   = await db.get('kv', 'session');
    const namaGuru  = session?.payload?.name   || '—';
    const sekolah   = session?.payload?.school || '—';
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
          hari     : tgl.toLocaleDateString('id-ID', { weekday: 'short' }),
          tanggal  : tgl.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit' }),
          statusMap: sesi.status_map || {},
        });
      }
    }

    if (koloms.length === 0) { alert('Belum ada sesi mengajar yang tercatat.'); return; }
    if (!window.jspdf)       { alert('Library PDF tidak tersedia.'); return; }

    const { jsPDF } = window.jspdf;
    const doc   = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const mg    = 12;
    const rowH  = 6.5, colNo = 8, colNama = 44;
    const colSesi = Math.min(12, (pageW - mg*2 - colNo - colNama) / Math.max(koloms.length, 1));
    const dataBottom = pageH - 38;

    const drawHeader = () => {
      doc.setFillColor(26,26,26); doc.rect(0,0,pageW,22,'F');
      doc.setTextColor(212,174,58); doc.setFontSize(13); doc.setFont('helvetica','bold');
      doc.text(`REKAP KEHADIRAN — ${kelasNama}`, mg, 10);
      doc.setFontSize(8); doc.setFont('helvetica','normal'); doc.setTextColor(200,200,200);
      doc.text(`${namaGuru}   |   ${sekolah}`, mg, 16);
      doc.setTextColor(150,150,150);
      doc.text(`Dicetak: ${new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})}`, pageW-mg, 16, {align:'right'});
    };

    const drawTableHeader = (yStart) => {
      const rh = 6.5;
      doc.setFillColor(30,30,30); doc.rect(mg,yStart,pageW-mg*2,rh,'F');
      doc.setTextColor(212,174,58); doc.setFontSize(6); doc.setFont('helvetica','bold');
      let hx = mg;
      doc.text('No', hx+colNo/2, yStart+4.2, {align:'center'}); hx+=colNo;
      doc.text('Nama Siswa', hx+2, yStart+4.2); hx+=colNama;
      for (const k of koloms) { doc.text(k.hari, hx+colSesi/2, yStart+4.2, {align:'center'}); hx+=colSesi; }
      const h2Y = yStart+rh;
      doc.setFillColor(40,40,40); doc.rect(mg,h2Y,pageW-mg*2,rh,'F');
      doc.setTextColor(200,200,200); doc.setFontSize(5.5);
      hx = mg+colNo+colNama;
      for (const k of koloms) { doc.text(k.tanggal, hx+colSesi/2, h2Y+4, {align:'center'}); hx+=colSesi; }
      const h3Y = h2Y+rh;
      doc.setFillColor(50,50,50); doc.rect(mg,h3Y,pageW-mg*2,rh,'F');
      doc.setTextColor(176,90,70);
      hx = mg+colNo+colNama;
      for (const k of koloms) { doc.text(`TP${k.tpNomor}`, hx+colSesi/2, h3Y+4, {align:'center'}); hx+=colSesi; }
      return h3Y+rh;
    };

    drawHeader();
    let curY = drawTableHeader(28);

    for (let si = 0; si < siswaList.length; si++) {
      const s = siswaList[si];
      if (curY + rowH > dataBottom) {
        doc.setTextColor(150,150,150); doc.setFontSize(7); doc.setFont('helvetica','normal');
        doc.text('FLAF — Functional Language Accumulation Framework', pageW/2, pageH-6, {align:'center'});
        doc.addPage(); drawHeader(); curY = drawTableHeader(28);
      }
      if (si%2===0) { doc.setFillColor(248,248,244); doc.rect(mg,curY,pageW-mg*2,rowH,'F'); }
      doc.setTextColor(30,30,30); doc.setFontSize(6);
      let x = mg;
      doc.text(String(s.nomor), x+colNo/2, curY+4.2, {align:'center'}); x+=colNo;
      doc.text(s.nama.substring(0,26), x+2, curY+4.2); x+=colNama;
      for (const k of koloms) {
        const st = k.statusMap[s.id] || 'A';
        const stColor = st==='H'?[60,120,80]:st==='S'?[70,130,180]:st==='I'?[180,130,20]:[180,60,50];
        doc.setTextColor(...stColor); doc.setFont('helvetica','bold');
        doc.text(st, x+colSesi/2, curY+4.2, {align:'center'}); doc.setFont('helvetica','normal');
        x+=colSesi;
      }
      curY += rowH;
    }

    doc.setTextColor(150,150,150); doc.setFontSize(7); doc.setFont('helvetica','normal');
    doc.text('FLAF — Functional Language Accumulation Framework', pageW/2, pageH-6, {align:'center'});
    const ttX = pageW-mg-60, ttY = pageH-30;
    doc.setTextColor(30,30,30); doc.setFontSize(7);
    doc.text('Guru Bahasa Inggris', ttX+30, ttY+5, {align:'center'});
    doc.setDrawColor(30,30,30); doc.setLineWidth(0.3);
    doc.line(ttX, ttY+18, ttX+60, ttY+18);
    doc.setFont('helvetica','bold'); doc.text(namaGuru, ttX+30, ttY+23, {align:'center'});
    doc.save(`rekap-hadir-${kelasNama.replace(/\s+/g,'-')}.pdf`);
  } catch (err) {
    console.error('[NILAI] download kehadiran error:', err);
    alert('Gagal membuat PDF rekap kehadiran.');
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
