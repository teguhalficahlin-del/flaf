/**
 * screens/dashboard.js — FLAF Dashboard Guru
 *
 * Alur: Landing → Pilih Rombel → Pilih TP → Sesi Berlangsung
 *
 * Card Materi & Skenario:
 *   Tab MATERI  — deskripsi, indikator, vocab
 *   Tab SKENARIO — langkah bertahap dengan TTS + penilaian L/S/R per siswa
 *
 * Public API:
 *   renderDashboard(container, opts) → render ke container
 *   resetDashboard()                 → hapus state lokal
 */

import { db }       from '../storage/db.js';
import { getFase }  from '../data/index.js';
import { jejak }    from '../storage/jejak.js';
import { nilai }    from '../storage/nilai.js';
import { presensi } from '../storage/presensi.js';

const STORE_KV = 'kv';

// --- STATE -------------------------------------------------------------------

let _container      = null;
let _onNavigateBack = null;
let _faseData       = null;

let _flow = {
  view      : 'landing',
  rombel    : null,
  tp        : null,
  statusMap : {},
  siswaList : [],
};

let _skenario = {
  tab        : 'materi',
  faseIndex  : 0,
  langkahIndex: 0,
  speaking   : false,
  kendala    : null,
};

// --- PUBLIC API --------------------------------------------------------------

export async function renderDashboard(container, opts = {}) {
  if (!container) return;
  _container = container;
  if (typeof opts.onNavigateBack === 'function') {
    _onNavigateBack = opts.onNavigateBack;
  }
  _flow = { view: 'landing', rombel: null, tp: null, statusMap: {}, siswaList: [] };
  _renderSkeleton(container);
  try {
    const [session, faseData, kelasList, rekapList, jejakStreak, jejakSummary] = await Promise.all([
      _loadSession(),
      _loadFaseData(),
      nilai.getKelasList(),
      nilai.getRekapSemua(),
      jejak.getStreak(),
      jejak.getMonthSummary(),
    ]);
    _faseData = faseData;
    const rekapMap = Object.fromEntries(rekapList.map(r => [r.id, r]));
    container.innerHTML = _buildLandingHTML(session, kelasList, rekapMap, jejakStreak, jejakSummary);
  } catch (err) {
    console.error('[DASHBOARD] Render gagal:', err.message);
    container.innerHTML = _buildErrorHTML(err.message);
  }
}

export function resetDashboard() {
  _faseData = null;
  _flow = { view: 'landing', rombel: null, tp: null, statusMap: {}, siswaList: [] };
}

// --- DATA LOADERS ------------------------------------------------------------

async function _loadSession() {
  try {
    const stored  = await db.get(STORE_KV, 'session');
    const payload = stored?.payload;
    return {
      name  : payload?.name   ? String(payload.name).slice(0, 60)   : 'Guru',
      school: payload?.school ? String(payload.school).slice(0, 80) : '',
    };
  } catch {
    return { name: 'Guru', school: '' };
  }
}

async function _loadFaseData() {
  if (_faseData) return _faseData;
  try {
    const data = getFase();
    if (!data || !Array.isArray(data.tujuan_pembelajaran)) {
      throw new Error('Struktur data fase tidak valid');
    }
    return data;
  } catch (err) {
    console.warn('[DASHBOARD] Gagal load fase data:', err.message);
    return { tujuan_pembelajaran: [] };
  }
}

function _tpList(tingkat) {
  const range = tingkat === 2
    ? [10,11,12,13,14,15,16,17,18]
    : [1,2,3,4,5,6,7,8,9];
  return (_faseData?.tujuan_pembelajaran || []).filter(tp => range.includes(tp.nomor));
}

function _getTP(nomor) {
  return (_faseData?.tujuan_pembelajaran || []).find(t => t.nomor === nomor) || null;
}

// --- LEVEL SYSTEM ------------------------------------------------------------

const LEVELS = [
  { min: 0,  max: 3,        emoji: '🎖️', nama: 'Tunjangan Sertifikasi', gaji: 'Rp 15.000.000' },
  { min: 4,  max: 7,        emoji: '💰', nama: 'Tunjangan Kinerja',      gaji: 'Rp 25.000.000' },
  { min: 8,  max: 11,       emoji: '🏦', nama: 'Tunjangan Penuh',        gaji: 'Rp 40.000.000' },
  { min: 12, max: 15,       emoji: '🚗', nama: 'Mobil Dinas',            gaji: 'Rp 65.000.000' },
  { min: 16, max: Infinity, emoji: '🎖️', nama: 'Tunjangan Guru Teladan', gaji: 'Rp 100.000.000' },
];

function _getLevelInfo(hariAktif) {
  const current         = [...LEVELS].reverse().find(l => hariAktif >= l.min) ?? LEVELS[0];
  const nextIndex       = LEVELS.indexOf(current) + 1;
  const next            = LEVELS[nextIndex] ?? null;
  const progressInLevel = hariAktif - current.min;
  const levelSpan       = current.max === Infinity ? null : (current.max - current.min + 1);
  return { current, next, progressInLevel, levelSpan };
}

function _buildJejakCard(streak, jejakSummary, tpSelesai, hariAktif, pertemuan, streakEmoji, streakLabel) {
  const lv      = _getLevelInfo(hariAktif);
  const barPct  = Math.round((lv.progressInLevel / (lv.levelSpan ?? 1)) * 100);
  const nextText = lv.next
    ? `${lv.next.min - hariAktif} hari lagi → ${lv.next.nama}`
    : '🏆 Level Tertinggi!';

  return `
  <div class="ds-jejak-card">
    <div class="ds-section-label" style="margin-bottom:10px;">Jejak Mengajar</div>
    <div class="ds-jejak-top">
      <div class="ds-jejak-streak-row">
        <div id="jejak-card-emoji" class="ds-streak-emoji">${streakEmoji}</div>
        <div style="flex:1;min-width:0;">
          <div style="line-height:1.2;">
            <span id="jejak-card-streak" class="ds-streak-num">${streak}</span>
            <span class="ds-streak-unit">hari berturut-turut</span>
          </div>
          <div id="jejak-card-label" class="ds-streak-label">${streakLabel}</div>
        </div>
      </div>
      <div class="ds-jejak-level-col">
        <div id="jejak-card-level-emoji" class="ds-level-emoji">${lv.current.emoji}</div>
        <div id="jejak-card-level-nama" class="ds-level-nama ds-level-nama--current">${lv.current.nama}</div>
        <div id="jejak-card-level-gaji" class="ds-level-gaji">${lv.current.gaji}</div>
      </div>
    </div>
    <div class="ds-jejak-progress-wrap">
      <div class="ds-jejak-progress-inner">
        <div id="jejak-card-next-text" class="ds-progress-next-text">${nextText}</div>
        <div class="ds-progress-track">
          <div id="jejak-card-bar" class="ds-progress-fill" style="width:${barPct}%;"></div>
        </div>
        <div id="jejak-card-bar-label" class="ds-progress-bar-label">${lv.progressInLevel}/${lv.levelSpan !== null ? lv.levelSpan + ' hari' : '60+ hari ✔'} di level ini</div>
      </div>
    </div>
    <div class="ds-stat-grid" style="margin-top:4px;">
      <div class="ds-stat-box">
        <div id="jejak-card-hari" class="ds-stat-num ds-stat-num--gold">${hariAktif}</div>
        <div class="ds-stat-label">Hari aktif</div>
      </div>
      <div class="ds-stat-box">
        <div id="jejak-card-pertemuan" class="ds-stat-num ds-stat-num--gold">${pertemuan}</div>
        <div class="ds-stat-label">Pertemuan</div>
      </div>
      <div class="ds-stat-box">
        <div id="jejak-card-tp" class="ds-stat-num ds-stat-num--gold">${tpSelesai}</div>
        <div class="ds-stat-label">TP selesai</div>
      </div>
    </div>
  </div>`;
}

// --- VIEW: LANDING -----------------------------------------------------------

function _buildLandingHTML(session, kelasList, rekapMap, streak, jejakSummary) {
  const hariAktif   = jejakSummary.hari_aktif || 0;
  const pertemuan   = jejakSummary.pertemuan  || 0;
  const tpSelesai   = jejakSummary.tp_selesai || 0;
  const streakEmoji = streak === 0 ? '📚' : streak < 3 ? '✨' : streak < 7 ? '⚡' : streak < 14 ? '🌟' : '🔥';
  const streakLabel = streak === 0 ? 'Belum ada aktivitas' : streak < 3 ? 'Awal yang bagus!' : streak < 7 ? 'Terus semangat!' : streak < 14 ? 'Guru Konsisten!' : 'Luar Biasa!';

  const mulaiSection = kelasList.length === 0 ? `
  <div class="ds-empty">
    <div class="ds-empty-icon">🏫</div>
    <div class="ds-empty-title">Belum ada rombel</div>
    <div class="ds-empty-desc">
      Buat rombel di Layar Nilai dulu<br>agar presensi bisa dicatat.
    </div>
    <button onclick="dashKeLayarNilai()" class="ds-empty-btn">📋 Buat Rombel di Layar Nilai</button>
  </div>` : `
  <div class="ds-card ds-card--overflow">
    <div class="ds-section-header">
      <div class="ds-section-label">Mulai Mengajar — Pilih Rombel</div>
    </div>
    ${kelasList.map(k => `
    <div onclick="dashPilihRombel('${k.id}','${_escape(k.nama)}',${k.tingkat || 1})"
         class="ds-list-item">
      <div>
        <div class="ds-list-item-name">${_escape(k.nama)}</div>
        <div class="ds-list-item-sub">Kelas ${k.tingkat || 1} · TP ${k.tingkat === 2 ? '10–18' : '1–9'} · ${rekapMap[k.id]?.totalSiswa ?? 0} siswa</div>
      </div>
      <div class="ds-list-arrow">›</div>
    </div>`).join('')}
  </div>`;

  return `
<div class="ds-wrap">
  <div class="ds-hero">
    <div class="ds-hero-inner">
      <div class="ds-hero-label">Sesi Mengajar</div>
      <div class="ds-hero-name">${_escape(session.name)}</div>
      ${session.school ? `<div class="ds-hero-school">${_escape(session.school)}</div>` : ''}
    </div>
  </div>
  ${mulaiSection}
  ${_buildJejakCard(streak, jejakSummary, tpSelesai, hariAktif, pertemuan, streakEmoji, streakLabel)}
</div>`;
}

// --- VIEW: PILIH TP ----------------------------------------------------------

function _buildPilihTPHTML() {
  const tpList = _tpList(_flow.rombel.tingkat);
  const tpHTML = tpList.map(tp => `
  <div onclick="dashPilihTP(${tp.nomor},'${_escape(tp.nama)}')" class="ds-list-item">
    <div style="width:28px;height:28px;border-radius:50%;background:rgba(212,174,58,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <span style="font-size:15px;font-weight:700;color:#D4AE3A;">${tp.nomor}</span>
    </div>
    <div style="flex:1;min-width:0;">
      <div class="ds-list-item-name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${_escape(tp.nama)}</div>
    </div>
    <div class="ds-list-arrow">›</div>
  </div>`).join('');

  return `
<div class="ds-wrap">
  <div class="ds-breadcrumb">
    <button onclick="dashKeLanding()" class="ds-btn-back">← Rombel</button>
    <div class="ds-breadcrumb-label">${_escape(_flow.rombel.nama)}</div>
  </div>
  <div class="ds-card ds-card--overflow">
    <div class="ds-section-header">
      <div class="ds-section-label">Pilih Tujuan Pembelajaran</div>
    </div>
    ${tpList.length > 0 ? tpHTML : `<div style="padding:24px;text-align:center;font-size:13px;color:rgba(255,255,255,.5);">Data kurikulum belum tersedia.</div>`}
  </div>
</div>`;
}

// --- MATERI PANEL: TAB MATERI ------------------------------------------------

function _buildTabMateri(tp) {
  const indikatorHTML = tp.indikator.map((ind, i) => `
    <div class="ds-indikator-item">
      <div class="ds-indikator-num">${i+1}</div>
      <div class="ds-indikator-teks">${_escape(ind)}</div>
    </div>`).join('');

  const vocabHTML = tp.vocab.map(v =>
    `<span class="ds-vocab-chip">${_escape(v)}</span>`
  ).join('');

  return `
    <div class="ds-materi-meta">${_escape(tp.tema)} · ${tp.jp} JP</div>
    <div class="ds-materi-desc">${_escape(tp.deskripsi)}</div>
    <div class="ds-sub-label">Indikator</div>
    ${indikatorHTML}
    <div class="ds-sub-label" style="margin-top:10px;">Kosakata Kunci</div>
    <div class="ds-vocab-wrap">${vocabHTML}</div>`;
}

// --- MATERI PANEL: TAB SKENARIO ----------------------------------------------

function _buildTabSkenario(tp) {
  if (!tp.skenario || tp.skenario.length === 0) {
    return '<div style="font-size:13px;color:rgba(255,255,255,.5);padding:8px 0;">Skenario belum tersedia.</div>';
  }

  const fase      = tp.skenario[_skenario.faseIndex] || tp.skenario[0];
  const faseNames = tp.skenario.map(f => f.fase);

  const faseTabsHTML = faseNames.map((nama, i) => {
    const isActive    = i === _skenario.faseIndex;
    const isPenilaian = nama === 'Penilaian';
    const activeClass = isActive
      ? (isPenilaian ? 'ds-fase-tab--sage-active' : 'ds-fase-tab--gold-active')
      : '';
    const label = isPenilaian ? 'Asesmen Formatif' : nama;
    return `<button onclick="dashSkenarioFase(${i})" class="ds-fase-tab ${activeClass}">${label}</button>`;
  }).join('');

  let kontenHTML = '';
  if (fase.fase !== 'Penilaian') {
    const langkahHTML = (fase.langkah || []).map((l, idx) => {
      if (l.tipe === 'audio') {
        return `
        <div class="ds-langkah-audio">
          <button onclick="dashTTS(${idx},'${_escapeTTS(l.teks)}')"
            id="tts-btn-${idx}" class="ds-tts-btn">▶</button>
          <div style="flex:1;">
            <div class="ds-langkah-audio-label">Audio untuk siswa</div>
            <div class="ds-langkah-audio-teks">"${_escape(l.teks)}"</div>
          </div>
        </div>`;
      } else {
        return `
        <div class="ds-langkah-instruksi">
          <div class="ds-langkah-num">${idx+1}</div>
          <div class="ds-langkah-teks">${_escape(l.teks)}</div>
        </div>`;
      }
    }).join('');

    kontenHTML = `
      <div style="margin-bottom:6px;">
        <div class="ds-fase-header">
          <div class="ds-fase-title">${_escape(fase.fase)} · ${fase.durasi} menit</div>
          <button onclick="dashTTSStop()" class="ds-tts-stop">⏹ Stop</button>
        </div>
        <div class="ds-langkah-wrap">${langkahHTML}</div>
      </div>`;
  } else {
    kontenHTML = _buildFasePenilaian();
  }

  return `
    <div style="padding-top:4px;border-top:1px solid rgba(255,255,255,.06);">
      <div class="ds-fase-tabs">${faseTabsHTML}</div>
      ${kontenHTML}
    </div>`;
}

// --- FASE PENILAIAN ----------------------------------------------------------

function _buildFasePenilaian() {
  const { siswaList } = _flow;

  if (!siswaList || siswaList.length === 0) {
    return `
    <div style="text-align:center;padding:16px;font-size:13px;color:rgba(255,255,255,.5);">
      Belum ada siswa di rombel ini.<br>Tambah siswa di Layar Nilai terlebih dahulu.
    </div>`;
  }

  const siswaHTML = siswaList.map(s => `
  <div class="ds-siswa-row">
    <div class="ds-siswa-top">
      <div class="ds-siswa-nomor ds-siswa-nomor--sage">${s.nomor}</div>
      <div class="ds-siswa-nama">${_escape(s.nama)}</div>
      <div id="nilai-rerata-${s.id}" class="ds-rerata-display">—</div>
    </div>
    <div class="ds-lsr-grid">
      ${['L','S','R'].map(dim => `
      <div>
        <div class="ds-lsr-label">${dim}</div>
        <input
          id="nilai-${dim.toLowerCase()}-${s.id}"
          type="number" min="0" max="100" placeholder="—"
          class="ds-lsr-input"
          oninput="dashNilaiUpdate('${s.id}')"
          onfocus="this.style.borderColor='rgba(92,138,110,.5)'"
          onblur="this.style.borderColor='rgba(255,255,255,.12)'"
        >
      </div>`).join('')}
    </div>
    <div>
      <div class="ds-sub-label" style="font-size:12px;color:rgba(255,255,255,.35);margin-bottom:3px;">Catatan</div>
      <textarea
        id="catatan-${s.id}"
        placeholder="Observasi singkat..."
        maxlength="500"
        rows="2"
        class="ds-textarea"
        onfocus="this.style.borderColor='rgba(92,138,110,.4)'"
        onblur="dashCatatanSimpan('${s.id}')"
      ></textarea>
    </div>
  </div>`).join('');

  return `
  <div style="margin-bottom:6px;">
    <div class="ds-penilaian-header">
      <div class="ds-penilaian-title">Asesmen Formatif · L / S / R</div>
      <button onclick="dashNilaiSimpanSemua()" class="ds-penilaian-save-btn">Simpan Semua</button>
      <div class="ds-penilaian-note">Observasi proses — tidak masuk nilai rapor</div>
    </div>
    <div class="ds-penilaian-desc">
      Isi nilai L (Listening), S (Speaking), R (Reading). Nilai akhir dihitung otomatis.
    </div>
    ${siswaHTML}
  </div>`;
}

// --- VIEW: SESI BERLANGSUNG --------------------------------------------------

function _buildSesiHTML() {
  const { rombel, tp, statusMap, siswaList } = _flow;
  const total  = siswaList.length;
  const totalH = Object.values(statusMap).filter(v => v === 'H').length;

  const STATUS_CFG = {
    H: { bg: 'rgba(92,138,110,.15)',  color: '#5C8A6E',  dot: 'rgba(92,138,110,.3)'   },
    S: { bg: 'rgba(212,174,58,.1)',   color: '#D4AE3A',  dot: 'rgba(212,174,58,.25)'  },
    I: { bg: 'rgba(100,140,200,.1)',  color: '#7B9FD4',  dot: 'rgba(100,140,200,.25)' },
    A: { bg: 'transparent',           color: 'rgba(255,255,255,.2)', dot: 'rgba(255,255,255,.06)' },
  };

  const siswaHTML = siswaList.length === 0 ? `
  <div style="padding:24px;text-align:center;font-size:13px;color:rgba(255,255,255,.5);">
    Belum ada siswa di rombel ini.<br>
    <button onclick="dashKeLayarNilai()" class="ds-btn-back" style="margin-top:12px;color:#D4AE3A;border-color:rgba(212,174,58,.4);">+ Tambah Siswa di Layar Nilai</button>
  </div>` : siswaList.map(s => {
    const st  = statusMap[s.id] || 'A';
    const cfg = STATUS_CFG[st];
    return `
  <div id="presensi-row-${s.id}" class="ds-presensi-row" style="background:${cfg.bg};">
    <div class="ds-siswa-nomor">${s.nomor}</div>
    <div class="ds-siswa-nama">${_escape(s.nama)}</div>
    <div class="ds-status-btns">
      ${['H','S','I','A'].map(k => `
      <button onclick="dashSetStatus('${s.id}','${k}')" class="ds-status-btn"
        style="border-color:${st===k ? STATUS_CFG[k].color : 'rgba(255,255,255,.1)'};background:${st===k ? STATUS_CFG[k].dot : 'transparent'};color:${st===k ? STATUS_CFG[k].color : 'rgba(255,255,255,.25)'};">
        ${k}
      </button>`).join('')}
    </div>
  </div>`;
  }).join('');

  const tpData    = _getTP(tp.nomor);
  const tabMateri = _skenario.tab === 'materi';

  const materiKonten = tpData
    ? (tabMateri ? _buildTabMateri(tpData) : _buildTabSkenario(tpData))
    : '<div style="font-size:13px;color:rgba(255,255,255,.5);">Data tidak tersedia.</div>';

  return `
<div class="ds-wrap">

  <div class="ds-breadcrumb">
    <button onclick="dashKeLanding()" class="ds-btn-back">← Rombel</button>
    <button onclick="dashKePilihTP()" class="ds-btn-back">← TP</button>
    <div class="ds-breadcrumb-label">TP ${tp.nomor} · ${_escape(rombel.nama)}</div>
  </div>

  <div class="ds-sesi-header">
    <div class="ds-sesi-tag">Sesi Berlangsung</div>
    <div class="ds-sesi-tp-num">TP ${String(tp.nomor).padStart(2,'0')}</div>
    <div class="ds-sesi-tp-name">${_escape(tp.nama)}</div>
    <div class="ds-sesi-rombel">${_escape(rombel.nama)}</div>
    <div class="ds-sesi-date">${new Date().toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
  </div>

  <div class="ds-card ds-card--overflow">
    <div onclick="dashTogglePresensi()" class="ds-list-item">
      <div class="ds-section-label">Isi Presensi</div>
      <div style="display:flex;align-items:center;gap:8px;">
        <div id="presensi-count" style="font-size:16px;font-weight:700;color:#D4AE3A;">${totalH > 0 ? `${totalH}/${total} hadir` : ''}</div>
        <div id="presensi-toggle-icon" style="font-size:14px;color:rgba(255,255,255,.3);transition:transform .2s;">›</div>
      </div>
    </div>
    <div id="presensi-panel" style="display:none;">
      ${siswaHTML}
    </div>
  </div>

  <div class="ds-card ds-card--overflow">
    <div style="padding:12px 16px;border-bottom:1px solid rgba(212,174,58,.15);">
      <div class="ds-section-label" style="margin-bottom:8px;">Materi & Skenario</div>
      <div class="ds-tab-row">
        <button onclick="dashMateriTab('materi')" class="ds-tab-btn ${tabMateri ? 'ds-tab-btn--gold-active' : ''}">Materi</button>
        <button onclick="dashMateriTab('skenario')" class="ds-tab-btn ${!tabMateri ? 'ds-tab-btn--sage-active' : ''}">Skenario</button>
      </div>
    </div>
    <div style="padding:0 16px 16px;">
      <div id="materi-konten" class="ds-materi-konten">${materiKonten}</div>
    </div>
  </div>

  <div class="ds-card" style="padding:14px;">
    <div class="ds-section-label" style="margin-bottom:8px;">Refleksi Mengajar</div>
    <textarea id="sesi-refleksi"
      placeholder="Catatan singkat tentang sesi ini..."
      maxlength="300"
      class="ds-refleksi-textarea"
      onfocus="this.style.borderColor='rgba(212,174,58,.4)'"
      onblur="this.style.borderColor='rgba(255,255,255,.1)'"
    ></textarea>
    <div style="margin-top:10px;">
      <div class="ds-sub-label" style="font-size:12px;color:rgba(255,255,255,.35);margin-bottom:6px;">Kendala sesi</div>
      <div class="ds-kendala-wrap">
        ${[
          { val: 'lancar',          label: '✅ Lancar' },
          { val: 'waktu_kurang',    label: '⏱ Waktu kurang' },
          { val: 'kurang_kondusif', label: '📢 Kurang kondusif' },
          { val: 'media_tidak_ada', label: '🖼 Media tidak ada' },
          { val: 'lainnya',         label: '📝 Lainnya' },
        ].map(k => `
        <button onclick="dashPilihKendala('${k.val}')"
          id="kendala-btn-${k.val}"
          class="ds-kendala-btn">
          ${k.label}
        </button>`).join('')}
      </div>
    </div>
  </div>

  <div class="ds-action-grid">
    <button onclick="dashKeLanding()" class="ds-btn-cancel">Batalkan</button>
    <button onclick="dashSelesaiSesi()" class="ds-btn-selesai">✓ Selesai</button>
  </div>

</div>`;
}

// --- HELPERS: RE-RENDER ------------------------------------------------------

function _rerenderMateriKonten() {
  const el = _container && _container.querySelector('#materi-konten');
  if (!el) return;
  const tpData = _getTP(_flow.tp?.nomor);
  if (!tpData) return;
  const vp        = document.getElementById('app-viewport');
  const scrollY   = vp?.scrollTop ?? 0;
  const tabMateri = _skenario.tab === 'materi';
  el.innerHTML    = tabMateri ? _buildTabMateri(tpData) : _buildTabSkenario(tpData);
  if (vp) vp.scrollTop = scrollY;
}

function _rerenderPresensiUI() {
  if (!_container) return;
  const countEl = _container.querySelector('#presensi-count');
  const total   = _flow.siswaList.length;
  const totalH  = Object.values(_flow.statusMap).filter(v => v === 'H').length;
  if (countEl) countEl.textContent = totalH > 0 ? `${totalH}/${total} hadir` : '';
}

async function _refreshJejakCard() {
  try {
    const [streak, summary] = await Promise.all([
      jejak.getStreak(),
      jejak.getMonthSummary(),
    ]);
    const streakEmoji = streak === 0 ? '📚' : streak < 3 ? '✨' : streak < 7 ? '⚡' : streak < 14 ? '🌟' : '🔥';
    const streakLabel = streak === 0 ? 'Belum ada aktivitas' : streak < 3 ? 'Awal yang bagus!' : streak < 7 ? 'Terus semangat!' : streak < 14 ? 'Guru Konsisten!' : 'Luar Biasa!';
    const tpSelesai   = summary.tp_selesai || 0;
    const hariAktif   = summary.hari_aktif || 0;
    const lv          = _getLevelInfo(hariAktif);
    const barPct      = Math.round((lv.progressInLevel / (lv.levelSpan ?? 1)) * 100);
    const nextText    = lv.next ? `${lv.next.min - hariAktif} hari lagi → ${lv.next.nama}` : '🏆 Level Tertinggi!';

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('jejak-card-emoji',      streakEmoji);
    set('jejak-card-streak',     streak);
    set('jejak-card-label',      streakLabel);
    set('jejak-card-hari',       hariAktif);
    set('jejak-card-pertemuan',  summary.pertemuan || 0);
    set('jejak-card-tp',         tpSelesai);
    set('jejak-card-next-text',  nextText);
    set('jejak-card-bar-label',  `${lv.progressInLevel}/${lv.levelSpan !== null ? lv.levelSpan + ' hari' : '60+ hari ✔'} di level ini`);
    set('jejak-card-level-nama', lv.current.nama);
    set('jejak-card-level-gaji', lv.current.gaji);
    const emojiEl = document.getElementById('jejak-card-level-emoji');
    if (emojiEl) emojiEl.innerHTML = lv.current.emoji;
    const barEl = document.getElementById('jejak-card-bar');
    if (barEl) barEl.style.width = barPct + '%';
  } catch (err) {
    console.warn('[DASHBOARD] _refreshJejakCard error:', err.message);
  }
}

// --- TTS ---------------------------------------------------------------------

let _ttsUtterance = null;
let _ttsActiveBtn = null;

function _ttsSpeak(teks, btnEl) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  _ttsResetBtn();
  const u  = new SpeechSynthesisUtterance(teks);
  u.lang   = 'en-US';
  u.rate   = 0.85;
  u.pitch  = 1.0;
  u.onend  = () => _ttsResetBtn();
  u.onerror = () => _ttsResetBtn();
  _ttsUtterance = u;
  if (btnEl) {
    _ttsActiveBtn = btnEl;
    btnEl.textContent = '⏸';
    btnEl.style.background  = 'rgba(92,138,110,.5)';
    btnEl.style.borderColor = '#5C8A6E';
  }
  window.speechSynthesis.speak(u);
}

function _ttsResetBtn() {
  if (_ttsActiveBtn) {
    _ttsActiveBtn.textContent = '▶';
    _ttsActiveBtn.style.background  = 'rgba(92,138,110,.2)';
    _ttsActiveBtn.style.borderColor = 'rgba(92,138,110,.4)';
    _ttsActiveBtn = null;
  }
}

function _ttsStop() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  _ttsResetBtn();
  _ttsUtterance = null;
}

// --- GLOBAL HANDLERS ---------------------------------------------------------

window.dashTogglePresensi = function() {
  const panel = document.getElementById('presensi-panel');
  const icon  = document.getElementById('presensi-toggle-icon');
  if (!panel || !icon) return;
  const isOpen = panel.style.display !== 'none';
  panel.style.display    = isOpen ? 'none' : 'block';
  icon.style.transform   = isOpen ? '' : 'rotate(90deg)';
};

window.dashMateriTab = function(tab) {
  _skenario.tab = tab;
  _skenario.faseIndex = 0;
  _ttsStop();
  _rerenderMateriKonten();
};

window.dashSkenarioFase = function(idx) {
  _skenario.faseIndex = idx;
  _ttsStop();
  _rerenderMateriKonten();
};

window.dashTTS = function(idx, teks) {
  const decoded = teks.replace(/\\n/g, '\n').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
  const btnEl = document.getElementById(`tts-btn-${idx}`);
  _ttsSpeak(decoded, btnEl);
};

window.dashTTSStop = function() {
  _ttsStop();
};

window.dashPilihKendala = function(val) {
  _skenario.kendala = val;
  ['lancar','waktu_kurang','kurang_kondusif','media_tidak_ada','lainnya'].forEach(k => {
    const btn = document.getElementById(`kendala-btn-${k}`);
    if (!btn) return;
    btn.classList.toggle('ds-kendala-btn--active', k === val);
  });
};

window.dashNilaiUpdate = function(siswaId) {
  const l = parseInt(document.getElementById(`nilai-l-${siswaId}`)?.value) || null;
  const s = parseInt(document.getElementById(`nilai-s-${siswaId}`)?.value) || null;
  const r = parseInt(document.getElementById(`nilai-r-${siswaId}`)?.value) || null;
  const valid  = [l, s, r].filter(v => v !== null && !isNaN(v));
  const rerata = valid.length > 0 ? Math.round(valid.reduce((a,b) => a+b, 0) / valid.length) : null;
  const el = document.getElementById(`nilai-rerata-${siswaId}`);
  if (el) {
    el.textContent = rerata !== null ? rerata : '—';
    el.style.color = rerata !== null ? (rerata >= 80 ? '#5C8A6E' : rerata >= 70 ? '#D4AE3A' : '#B05A46') : '#D4AE3A';
  }
};

window.dashCatatanSimpan = async function(siswaId) {
  const { rombel, tp } = _flow;
  if (!rombel || !tp) return;
  const teks = document.getElementById(`catatan-${siswaId}`)?.value || '';
  try {
    await nilai.setCatatanFormatif(rombel.id, siswaId, tp.nomor, teks);
  } catch (err) {
    console.warn('[DASHBOARD] setCatatan gagal:', err.message);
  }
};

window.dashNilaiSimpanSemua = async function() {
  const { rombel, tp, siswaList } = _flow;
  if (!rombel || !tp || !siswaList) return;
  let saved = 0;
  for (const s of siswaList) {
    const l  = parseInt(document.getElementById(`nilai-l-${s.id}`)?.value);
    const sv = parseInt(document.getElementById(`nilai-s-${s.id}`)?.value);
    const r  = parseInt(document.getElementById(`nilai-r-${s.id}`)?.value);
    const cl = isNaN(l)  ? null : Math.max(0, Math.min(100, l));
    const cs = isNaN(sv) ? null : Math.max(0, Math.min(100, sv));
    const cr = isNaN(r)  ? null : Math.max(0, Math.min(100, r));
    if (cl !== null || cs !== null || cr !== null) {
      try { await nilai.setNilaiFormatif(rombel.id, s.id, tp.nomor, cl, cs, cr); saved++; } catch (err) {
        console.warn('[DASHBOARD] setNilaiFormatif gagal:', s.nama, err.message);
      }
    }
    const teks = document.getElementById(`catatan-${s.id}`)?.value || '';
    if (teks.trim()) {
      try { await nilai.setCatatanFormatif(rombel.id, s.id, tp.nomor, teks); } catch {}
    }
  }
  const btn = document.querySelector('button[onclick="dashNilaiSimpanSemua()"]');
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = `✓ Tersimpan (${saved})`;
    btn.style.color = '#D4AE3A';
    setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 2000);
  }
};

window.dashKeLayarNilai = function() {
  if (typeof _onNavigateBack === 'function') _onNavigateBack('nilai');
};

window.dashKeLanding = async function() {
  _ttsStop();
  _flow     = { view: 'landing', rombel: null, tp: null, statusMap: {}, siswaList: [] };
  _skenario = { tab: 'materi', faseIndex: 0, langkahIndex: 0, speaking: false };
  try {
    const [session, kelasList, rekapList, streak, summary] = await Promise.all([
      _loadSession(),
      nilai.getKelasList(),
      nilai.getRekapSemua(),
      jejak.getStreak(),
      jejak.getMonthSummary(),
    ]);
    const rekapMap = Object.fromEntries(rekapList.map(r => [r.id, r]));
    if (_container) _container.innerHTML = _buildLandingHTML(session, kelasList, rekapMap, streak, summary);
  } catch (err) {
    console.error('[DASHBOARD] dashKeLanding error:', err.message);
  }
};

window.dashPilihRombel = async function(id, nama, tingkat) {
  _flow.rombel    = { id, nama, tingkat: parseInt(tingkat) || 1 };
  _flow.view      = 'pilihTP';
  _flow.statusMap = {};
  _flow.siswaList = [];
  if (_container) _container.innerHTML = _buildPilihTPHTML();
};

window.dashKePilihTP = function() {
  _ttsStop();
  _flow.tp        = null;
  _flow.statusMap = {};
  _flow.view      = 'pilihTP';
  if (_container) _container.innerHTML = _buildPilihTPHTML();
};

window.dashPilihTP = async function(nomor, nama) {
  _flow.tp        = { nomor, nama };
  _flow.statusMap = {};
  _flow.view      = 'sesi';
  _skenario       = { tab: 'materi', faseIndex: 0, langkahIndex: 0, speaking: false };
  try {
    _flow.siswaList = await nilai.getSiswaList(_flow.rombel.id);
  } catch (err) {
    console.warn('[DASHBOARD] gagal load siswa:', err.message);
    _flow.siswaList = [];
  }
  if (_container) _container.innerHTML = _buildSesiHTML();
};

window.dashSetStatus = function(siswaId, status) {
  _flow.statusMap[siswaId] = status;
  const STATUS_CFG = {
    H: { bg: 'rgba(92,138,110,.15)',  color: '#5C8A6E',  dot: 'rgba(92,138,110,.3)'   },
    S: { bg: 'rgba(212,174,58,.1)',   color: '#D4AE3A',  dot: 'rgba(212,174,58,.25)'  },
    I: { bg: 'rgba(100,140,200,.1)',  color: '#7B9FD4',  dot: 'rgba(100,140,200,.25)' },
    A: { bg: 'transparent',           color: 'rgba(255,255,255,.2)', dot: 'rgba(255,255,255,.06)' },
  };
  const row = _container && _container.querySelector(`#presensi-row-${siswaId}`);
  if (row) {
    const cfg = STATUS_CFG[status];
    row.style.background = cfg.bg;
    const btns = row.querySelectorAll('button');
    ['H','S','I','A'].forEach((k, i) => {
      const btn = btns[i];
      if (!btn) return;
      const active       = k === status;
      btn.style.border   = `1px solid ${active ? STATUS_CFG[k].color : 'rgba(255,255,255,.1)'}`;
      btn.style.background = active ? STATUS_CFG[k].dot : 'transparent';
      btn.style.color    = active ? STATUS_CFG[k].color : 'rgba(255,255,255,.25)';
    });
  }
  _rerenderPresensiUI();
};

window.dashSelesaiSesi = async function() {
  _ttsStop();
  const refleksi = _container?.querySelector('#sesi-refleksi')?.value?.trim() || null;
  const { tp, rombel } = _flow;
  const totalH = Object.values(_flow.statusMap).filter(v => v === 'H').length;

  if (Object.keys(_flow.statusMap).length > 0) {
    try {
      await presensi.simpan({
        kelasId  : rombel.id,
        kelasNama: rombel.nama,
        tpNomor  : tp.nomor,
        tpNama   : tp.nama,
        statusMap: _flow.statusMap,
        siswaList: _flow.siswaList,
      });
    } catch (err) {
      console.warn('[DASHBOARD] presensi.simpan gagal:', err.message);
    }
  }

  try {
    await jejak.log(tp.nomor, tp.nama, 'selesai', refleksi, {
      rombel_nama : rombel.nama,
      jumlah_siswa: totalH,
      kendala     : _skenario.kendala || null,
    });
  } catch (err) {
    console.warn('[DASHBOARD] jejak.log gagal:', err.message);
  }

  await window.dashKeLanding();
  _refreshJejakCard();
  if (window.__FLAF_NAV__) window.__FLAF_NAV__._setJejakDirty?.();
};

// --- UTILITY -----------------------------------------------------------------

function _escape(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function _escapeTTS(str) {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n');
}

function _renderSkeleton(container) {
  container.innerHTML = `
  <div class="ds-skeleton-wrap">
    ${['70%','90%','100%','80%'].map(w => `
    <div class="ds-skeleton-card">
      <div class="ds-skeleton-line" style="width:${w};"></div>
      <div class="ds-skeleton-line ds-skeleton-line--short"></div>
    </div>`).join('')}
  </div>`;
}

function _buildErrorHTML(msg) {
  return `
  <div style="padding:24px;text-align:center">
    <div style="font-size:24px;margin-bottom:10px">⚠</div>
    <div style="font-size:13px;font-weight:700;color:var(--clay);margin-bottom:6px">Dashboard tidak bisa dimuat</div>
    <div style="font-size:13px;color:var(--muted);margin-bottom:16px">${_escape(msg)}</div>
    <button onclick="window.__FLAF_DASH__.reload()"
            style="background:var(--ink);color:#fff;border:none;border-radius:8px;padding:8px 16px;font-size:13px;font-weight:700;cursor:pointer">
      Coba Lagi
    </button>
  </div>`;
}

window.__FLAF_DASH__ = {
  reload: () => _container && renderDashboard(_container),
};
