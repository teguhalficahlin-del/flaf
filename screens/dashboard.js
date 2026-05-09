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
  // Sprint 6 — accordion state
  openMateri : false,
  openSkenario: false,
  openSubFase: -1,
  asesmenPage: 0,
  openSiswaId: null,
};

const SISWA_PER_HALAMAN = 5;

// --- PUBLIC API --------------------------------------------------------------

export async function renderDashboard(container, opts = {}) {
  if (!container) return;
  _container = container;
  if (typeof opts.onNavigateBack === 'function') {
    _onNavigateBack = opts.onNavigateBack;
  }
  _flow = { view: 'landing', rombel: null, tp: null, statusMap: {}, siswaList: [], nilaiCache: null };
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
  _flow = { view: 'landing', rombel: null, tp: null, statusMap: {}, siswaList: [], nilaiCache: null };
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

// --- COLLAPSE: MATERI --------------------------------------------------------

function _buildMateriCollapse(tp) {
  const isOpen = _skenario.openMateri;
  const headerHTML = `
    <div onclick="dashToggleMateri()" class="ds-list-item ds-collapse-head">
      <div style="display:flex;align-items:center;gap:8px;">
        <div id="materi-chevron" class="ds-collapse-chevron" style="transform:${isOpen ? 'rotate(90deg)' : ''};">›</div>
        <div class="ds-section-label" style="margin:0;">Materi</div>
      </div>
    </div>`;

  if (!isOpen) return headerHTML;

  const isiHTML = tp
    ? _buildTabMateri(tp)
    : '<div style="font-size:13px;color:rgba(255,255,255,.5);">Data tidak tersedia.</div>';

  return `
    ${headerHTML}
    <div class="ds-collapse-body">${isiHTML}</div>`;
}

// --- COLLAPSE: SKENARIO (parent + 4 sub-fase accordion) ----------------------

function _buildSkenarioCollapse(tp) {
  const isOpen = _skenario.openSkenario;
  const headerHTML = `
    <div onclick="dashToggleSkenario()" class="ds-list-item ds-collapse-head">
      <div style="display:flex;align-items:center;gap:8px;">
        <div id="skenario-chevron" class="ds-collapse-chevron" style="transform:${isOpen ? 'rotate(90deg)' : ''};">›</div>
        <div class="ds-section-label" style="margin:0;">Skenario</div>
      </div>
    </div>`;

  if (!isOpen) return headerHTML;

  if (!tp || !tp.skenario || tp.skenario.length === 0) {
    return `
      ${headerHTML}
      <div class="ds-collapse-body">
        <div style="font-size:13px;color:rgba(255,255,255,.5);padding:8px 0;">Skenario belum tersedia.</div>
      </div>`;
  }

  const subFaseHTML = tp.skenario.map((fase, i) =>
    _buildSubFaseCollapseItem(fase, i)
  ).join('');

  return `
    ${headerHTML}
    <div class="ds-collapse-body ds-collapse-body--nested">
      ${subFaseHTML}
    </div>`;
}

function _buildSubFaseCollapseItem(fase, idx) {
  const isOpen      = _skenario.openSubFase === idx;
  const isPenilaian = fase.fase === 'Penilaian';
  const label       = isPenilaian ? 'Asesmen Formatif' : fase.fase;
  const meta        = fase.durasi ? `${fase.durasi} menit` : '';

  const headerHTML = `
    <div onclick="dashToggleSubFase(${idx})" class="ds-subfase-head">
      <div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0;">
        <div class="ds-collapse-chevron" style="transform:${isOpen ? 'rotate(90deg)' : ''};">›</div>
        <div class="ds-subfase-label">${_escape(label)}</div>
      </div>
      ${meta ? `<div class="ds-subfase-meta">${meta}</div>` : ''}
    </div>`;

  if (!isOpen) return `<div class="ds-subfase-item">${headerHTML}</div>`;

  let isiHTML = '';
  if (isPenilaian) {
    isiHTML = _buildAsesmenPaginated();
  } else {
    isiHTML = _buildLangkahFase(fase);
  }

  return `
    <div class="ds-subfase-item ds-subfase-item--open">
      ${headerHTML}
      <div class="ds-subfase-body">${isiHTML}</div>
    </div>`;
}

function _buildLangkahFase(fase) {
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

  return `
    <div style="display:flex;justify-content:flex-end;margin-bottom:8px;">
      <button onclick="dashTTSStop()" class="ds-tts-stop">⏹ Stop</button>
    </div>
    <div class="ds-langkah-wrap">${langkahHTML}</div>`;
}

// --- FASE PENILAIAN: paginated + collapse per siswa --------------------------

function _buildAsesmenPaginated() {
  const { siswaList } = _flow;

  if (!siswaList || siswaList.length === 0) {
    return `
    <div style="text-align:center;padding:16px;font-size:13px;color:rgba(255,255,255,.5);">
      Belum ada siswa di rombel ini.<br>Tambah siswa di Layar Nilai terlebih dahulu.
    </div>`;
  }

  const total       = siswaList.length;
  const totalPages  = Math.max(1, Math.ceil(total / SISWA_PER_HALAMAN));
  const safePage    = Math.max(0, Math.min(_skenario.asesmenPage, totalPages - 1));
  if (safePage !== _skenario.asesmenPage) _skenario.asesmenPage = safePage;
  const startIdx    = safePage * SISWA_PER_HALAMAN;
  const endIdx      = Math.min(startIdx + SISWA_PER_HALAMAN, total);
  const halaman     = siswaList.slice(startIdx, endIdx);

  const dinilaiCount = _hitungSiswaDinilai();

  const siswaHTML = halaman.map(s => _buildSiswaCollapseItem(s)).join('');

  const navPrevDisabled = safePage <= 0;
  const navNextDisabled = safePage >= totalPages - 1;
  const nextStart       = endIdx + 1;
  const nextEnd         = Math.min(endIdx + SISWA_PER_HALAMAN, total);

  return `
  <div>
    <div class="ds-penilaian-header">
      <div class="ds-penilaian-title">Asesmen · L / S / R</div>
      <button onclick="dashNilaiSimpanSemua()" class="ds-penilaian-save-btn">Simpan Semua</button>
      <div class="ds-penilaian-note">Observasi proses — tidak masuk nilai rapor</div>
    </div>

    <div class="ds-penilaian-progress">
      Halaman ${safePage + 1}/${totalPages} · Dinilai ${dinilaiCount}/${total}
    </div>

    <div class="ds-asesmen-list">
      ${siswaHTML}
    </div>

    <div class="ds-asesmen-nav">
      <button onclick="dashHalamanPrev()" class="ds-page-btn"
        ${navPrevDisabled ? 'disabled' : ''}>‹ Sebelumnya</button>
      <button onclick="dashSimpanLanjut()" class="ds-page-btn ds-page-btn--primary"
        ${navNextDisabled ? 'disabled' : ''}>
        ${navNextDisabled ? 'Halaman Terakhir' : `Simpan & Lanjut → ${nextStart}–${nextEnd}`}
      </button>
    </div>
  </div>`;
}

function _buildSiswaCollapseItem(s) {
  const isOpen = _skenario.openSiswaId === s.id;
  const cached = _flow.nilaiCache && _flow.nilaiCache[s.id];
  const l      = cached?.l ?? null;
  const sv     = cached?.s ?? null;
  const r      = cached?.r ?? null;
  const cat    = cached?.catatan || '';
  const valid  = [l, sv, r].filter(v => v !== null && !isNaN(v));
  const rerata = valid.length > 0 ? Math.round(valid.reduce((a,b)=>a+b,0) / valid.length) : null;

  const dotL = l !== null && !isNaN(l) ? '●' : '○';
  const dotS = sv !== null && !isNaN(sv) ? '●' : '○';
  const dotR = r !== null && !isNaN(r) ? '●' : '○';
  const rerataLabel = rerata !== null ? rerata : '—';

  const headerHTML = `
    <div onclick="dashToggleSiswa('${s.id}')" class="ds-siswa-collapse-head">
      <div class="ds-collapse-chevron" style="transform:${isOpen ? 'rotate(90deg)' : ''};">›</div>
      <div class="ds-siswa-nomor ds-siswa-nomor--sage">${s.nomor}</div>
      <div class="ds-siswa-nama" style="flex:1;min-width:0;">${_escape(s.nama)}</div>
      <div class="ds-siswa-status-dots" aria-label="Status nilai L S R">${dotL}${dotS}${dotR}</div>
      <div id="nilai-rerata-head-${s.id}" class="ds-rerata-display">${rerataLabel}</div>
    </div>`;

  if (!isOpen) {
    return `<div class="ds-siswa-collapse-item">${headerHTML}</div>`;
  }

  const valueAttr = (v) => (v !== null && !isNaN(v)) ? ` value="${v}"` : '';
  const inputsHTML = ['L','S','R'].map(dim => {
    const key = dim.toLowerCase();
    const val = key === 'l' ? l : key === 's' ? sv : r;
    return `
      <div>
        <div class="ds-lsr-label">${dim}</div>
        <input
          id="nilai-${key}-${s.id}"
          type="number" min="0" max="100" placeholder="—"
          class="ds-lsr-input"${valueAttr(val)}
          oninput="dashNilaiUpdate('${s.id}')"
          onfocus="this.style.borderColor='rgba(212,174,58,.4)'"
          onblur="this.style.borderColor='rgba(255,255,255,.12)'"
        >
      </div>`;
  }).join('');

  return `
    <div class="ds-siswa-collapse-item ds-siswa-collapse-item--open">
      ${headerHTML}
      <div class="ds-siswa-collapse-body">
        <div class="ds-lsr-grid">${inputsHTML}</div>
        <div>
          <div class="ds-sub-label" style="font-size:12px;color:rgba(255,255,255,.55);margin-bottom:3px;">Catatan</div>
          <textarea
            id="catatan-${s.id}"
            placeholder="Observasi singkat..."
            maxlength="500"
            rows="2"
            class="ds-textarea"
            onfocus="this.style.borderColor='rgba(212,174,58,.4)'"
            onblur="dashCatatanSimpan('${s.id}')"
          >${_escape(cat)}</textarea>
        </div>
      </div>
    </div>`;
}

function _hitungSiswaDinilai() {
  const cache = _flow.nilaiCache || {};
  let count = 0;
  for (const s of (_flow.siswaList || [])) {
    const c = cache[s.id];
    if (!c) continue;
    const hasAny = (c.l !== null && !isNaN(c.l))
                || (c.s !== null && !isNaN(c.s))
                || (c.r !== null && !isNaN(c.r));
    if (hasAny) count++;
  }
  return count;
}

async function _loadNilaiCache() {
  const { rombel, tp, siswaList } = _flow;
  if (!rombel || !tp || !siswaList) return;
  const cache = {};
  for (const s of siswaList) {
    try {
      cache[s.id] = await nilai.getNilaiFormatif(rombel.id, s.id, tp.nomor);
    } catch {
      cache[s.id] = { l: null, s: null, r: null, catatan: '' };
    }
  }
  _flow.nilaiCache = cache;
}

// --- VIEW: SESI BERLANGSUNG --------------------------------------------------

function _buildSesiHTML() {
  const { rombel, tp, statusMap, siswaList } = _flow;
  const total  = siswaList.length;
  const totalH = Object.values(statusMap).filter(v => v === 'H').length;

  const STATUS_CFG = {
    H: { bg: 'rgba(212,174,58,.12)',  color: '#D4AE3A',             dot: 'rgba(212,174,58,.25)'  },
    S: { bg: 'rgba(255,255,255,.05)', color: 'rgba(255,255,255,.55)', dot: 'rgba(255,255,255,.12)' },
    I: { bg: 'rgba(255,255,255,.03)', color: 'rgba(255,255,255,.35)', dot: 'rgba(255,255,255,.08)' },
    A: { bg: 'transparent',           color: 'rgba(255,255,255,.2)',  dot: 'rgba(255,255,255,.06)' },
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

  const tpData = _getTP(tp.nomor);

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
        <div id="presensi-toggle-icon" style="font-size:14px;color:rgba(255,255,255,.5);transition:transform .2s;">›</div>
      </div>
    </div>
    <div id="presensi-panel" style="display:none;">
      ${siswaHTML}
    </div>
  </div>

  <div id="collapse-materi-wrap" class="ds-card ds-card--overflow">
    ${_buildMateriCollapse(tpData)}
  </div>

  <div id="collapse-skenario-wrap" class="ds-card ds-card--overflow">
    ${_buildSkenarioCollapse(tpData)}
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
      <div class="ds-sub-label" style="font-size:12px;color:rgba(255,255,255,.55);margin-bottom:6px;">Kendala sesi</div>
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

function _rerenderCollapseMateri() {
  const wrap = _container && _container.querySelector('#collapse-materi-wrap');
  if (!wrap) return;
  const tpData = _getTP(_flow.tp?.nomor);
  wrap.innerHTML = _buildMateriCollapse(tpData);
}

function _rerenderCollapseSkenario() {
  const wrap = _container && _container.querySelector('#collapse-skenario-wrap');
  if (!wrap) return;
  const tpData = _getTP(_flow.tp?.nomor);
  wrap.innerHTML = _buildSkenarioCollapse(tpData);
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
    btnEl.style.background  = 'rgba(212,174,58,.3)';
    btnEl.style.borderColor = '#D4AE3A';
  }
  window.speechSynthesis.speak(u);
}

function _ttsResetBtn() {
  if (_ttsActiveBtn) {
    _ttsActiveBtn.textContent = '▶';
    _ttsActiveBtn.style.background  = 'rgba(212,174,58,.15)';
    _ttsActiveBtn.style.borderColor = 'rgba(212,174,58,.4)';
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

window.dashToggleMateri = function() {
  _skenario.openMateri = !_skenario.openMateri;
  _rerenderCollapseMateri();
};

window.dashToggleSkenario = async function() {
  _skenario.openSkenario = !_skenario.openSkenario;
  _ttsStop();
  if (_skenario.openSkenario && !_flow.nilaiCache) {
    await _loadNilaiCache();
  }
  _rerenderCollapseSkenario();
};

window.dashToggleSubFase = async function(idx) {
  _ttsStop();
  if (_skenario.openSubFase === idx) {
    _skenario.openSubFase = -1;
  } else {
    _skenario.openSubFase = idx;
    _skenario.openSiswaId = null;
    const tpData = _getTP(_flow.tp?.nomor);
    const fase   = tpData?.skenario?.[idx];
    if (fase && fase.fase === 'Penilaian' && !_flow.nilaiCache) {
      await _loadNilaiCache();
    }
    if (fase && fase.fase === 'Penilaian') {
      _autoPilihSiswaPertamaBelum();
    }
  }
  _rerenderCollapseSkenario();
};

window.dashToggleSiswa = async function(siswaId) {
  if (_skenario.openSiswaId === siswaId) {
    await _autoSaveSiswa(siswaId);
    _skenario.openSiswaId = null;
  } else {
    if (_skenario.openSiswaId) await _autoSaveSiswa(_skenario.openSiswaId);
    _skenario.openSiswaId = siswaId;
  }
  _rerenderCollapseSkenario();
};

window.dashHalamanPrev = async function() {
  if (_skenario.openSiswaId) await _autoSaveSiswa(_skenario.openSiswaId);
  _skenario.asesmenPage  = Math.max(0, _skenario.asesmenPage - 1);
  _skenario.openSiswaId  = null;
  _autoPilihSiswaPertamaBelum();
  _rerenderCollapseSkenario();
};

window.dashSimpanLanjut = async function() {
  if (_skenario.openSiswaId) await _autoSaveSiswa(_skenario.openSiswaId);
  const total      = _flow.siswaList.length;
  const totalPages = Math.max(1, Math.ceil(total / SISWA_PER_HALAMAN));
  _skenario.asesmenPage  = Math.min(totalPages - 1, _skenario.asesmenPage + 1);
  _skenario.openSiswaId  = null;
  _autoPilihSiswaPertamaBelum();
  _rerenderCollapseSkenario();
};

function _autoPilihSiswaPertamaBelum() {
  const total    = _flow.siswaList.length;
  const startIdx = _skenario.asesmenPage * SISWA_PER_HALAMAN;
  const endIdx   = Math.min(startIdx + SISWA_PER_HALAMAN, total);
  const halaman  = _flow.siswaList.slice(startIdx, endIdx);
  const cache    = _flow.nilaiCache || {};
  for (const s of halaman) {
    const c = cache[s.id];
    const sudah = c && ((c.l !== null && !isNaN(c.l)) || (c.s !== null && !isNaN(c.s)) || (c.r !== null && !isNaN(c.r)));
    if (!sudah) {
      _skenario.openSiswaId = s.id;
      return;
    }
  }
}

async function _autoSaveSiswa(siswaId) {
  const { rombel, tp } = _flow;
  if (!rombel || !tp) return;
  const lEl = document.getElementById(`nilai-l-${siswaId}`);
  const sEl = document.getElementById(`nilai-s-${siswaId}`);
  const rEl = document.getElementById(`nilai-r-${siswaId}`);
  const cEl = document.getElementById(`catatan-${siswaId}`);
  if (!lEl && !sEl && !rEl && !cEl) return;

  const lVal = lEl ? parseInt(lEl.value) : NaN;
  const sVal = sEl ? parseInt(sEl.value) : NaN;
  const rVal = rEl ? parseInt(rEl.value) : NaN;
  const l    = isNaN(lVal) ? null : Math.max(0, Math.min(100, lVal));
  const s    = isNaN(sVal) ? null : Math.max(0, Math.min(100, sVal));
  const r    = isNaN(rVal) ? null : Math.max(0, Math.min(100, rVal));

  if (l !== null || s !== null || r !== null) {
    try { await nilai.setNilaiFormatif(rombel.id, siswaId, tp.nomor, l, s, r); }
    catch (err) { console.warn('[DASHBOARD] auto-save nilai gagal:', err.message); }
  }
  const teks = cEl ? (cEl.value || '') : '';
  if (teks.trim()) {
    try { await nilai.setCatatanFormatif(rombel.id, siswaId, tp.nomor, teks); }
    catch (err) { console.warn('[DASHBOARD] auto-save catatan gagal:', err.message); }
  }

  if (!_flow.nilaiCache) _flow.nilaiCache = {};
  _flow.nilaiCache[siswaId] = { l, s, r, catatan: teks.trim() };
}

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
  const headEl = document.getElementById(`nilai-rerata-head-${siswaId}`);
  if (headEl) {
    headEl.textContent = rerata !== null ? rerata : '—';
    headEl.style.color = rerata !== null ? (rerata >= 80 ? '#D4AE3A' : rerata >= 70 ? 'rgba(212,174,58,.6)' : 'rgba(255,255,255,.4)') : '#D4AE3A';
  }
};

window.dashCatatanSimpan = async function(siswaId) {
  const { rombel, tp } = _flow;
  if (!rombel || !tp) return;
  const teks = document.getElementById(`catatan-${siswaId}`)?.value || '';
  try {
    await nilai.setCatatanFormatif(rombel.id, siswaId, tp.nomor, teks);
    if (!_flow.nilaiCache) _flow.nilaiCache = {};
    if (!_flow.nilaiCache[siswaId]) _flow.nilaiCache[siswaId] = { l: null, s: null, r: null, catatan: '' };
    _flow.nilaiCache[siswaId].catatan = teks.trim();
  } catch (err) {
    console.warn('[DASHBOARD] setCatatan gagal:', err.message);
  }
};

window.dashNilaiSimpanSemua = async function() {
  const { rombel, tp, siswaList } = _flow;
  if (!rombel || !tp || !siswaList) return;

  if (_skenario.openSiswaId) {
    await _autoSaveSiswa(_skenario.openSiswaId);
  }

  let saved = 0;
  const cache = _flow.nilaiCache || {};
  for (const s of siswaList) {
    const lEl = document.getElementById(`nilai-l-${s.id}`);
    const sEl = document.getElementById(`nilai-s-${s.id}`);
    const rEl = document.getElementById(`nilai-r-${s.id}`);
    const cEl = document.getElementById(`catatan-${s.id}`);

    const c   = cache[s.id] || { l: null, s: null, r: null, catatan: '' };
    const lV  = lEl ? parseInt(lEl.value) : (c.l ?? NaN);
    const sV  = sEl ? parseInt(sEl.value) : (c.s ?? NaN);
    const rV  = rEl ? parseInt(rEl.value) : (c.r ?? NaN);
    const cl  = isNaN(lV) ? null : Math.max(0, Math.min(100, lV));
    const cs  = isNaN(sV) ? null : Math.max(0, Math.min(100, sV));
    const cr  = isNaN(rV) ? null : Math.max(0, Math.min(100, rV));

    if (cl !== null || cs !== null || cr !== null) {
      try {
        await nilai.setNilaiFormatif(rombel.id, s.id, tp.nomor, cl, cs, cr);
        saved++;
        if (!_flow.nilaiCache) _flow.nilaiCache = {};
        _flow.nilaiCache[s.id] = { ..._flow.nilaiCache[s.id], l: cl, s: cs, r: cr };
      } catch (err) {
        console.warn('[DASHBOARD] setNilaiFormatif gagal:', s.nama, err.message);
      }
    }
    const teks = cEl ? (cEl.value || '') : (c.catatan || '');
    if (teks.trim()) {
      try {
        await nilai.setCatatanFormatif(rombel.id, s.id, tp.nomor, teks);
        if (!_flow.nilaiCache[s.id]) _flow.nilaiCache[s.id] = { l: null, s: null, r: null };
        _flow.nilaiCache[s.id].catatan = teks.trim();
      } catch {}
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
  _flow     = { view: 'landing', rombel: null, tp: null, statusMap: {}, siswaList: [], nilaiCache: null };
  _skenario = {
    tab: 'materi', faseIndex: 0, langkahIndex: 0, speaking: false,
    kendala: null,
    openMateri: false, openSkenario: false, openSubFase: -1,
    asesmenPage: 0, openSiswaId: null,
  };
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
  _flow.tp         = { nomor, nama };
  _flow.statusMap  = {};
  _flow.view       = 'sesi';
  _flow.nilaiCache = null;
  _skenario        = {
    tab: 'materi', faseIndex: 0, langkahIndex: 0, speaking: false,
    kendala: null,
    openMateri: false, openSkenario: false, openSubFase: -1,
    asesmenPage: 0, openSiswaId: null,
  };
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
    H: { bg: 'rgba(212,174,58,.12)',  color: '#D4AE3A',             dot: 'rgba(212,174,58,.25)'  },
    S: { bg: 'rgba(255,255,255,.05)', color: 'rgba(255,255,255,.55)', dot: 'rgba(255,255,255,.12)' },
    I: { bg: 'rgba(255,255,255,.03)', color: 'rgba(255,255,255,.35)', dot: 'rgba(255,255,255,.08)' },
    A: { bg: 'transparent',           color: 'rgba(255,255,255,.2)',  dot: 'rgba(255,255,255,.06)' },
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

  if (_skenario.openSiswaId) {
    await _autoSaveSiswa(_skenario.openSiswaId);
  }

  const dinilai = _hitungSiswaDinilai();
  const total   = (_flow.siswaList || []).length;
  if (total > 0 && dinilai < total) {
    const lanjut = window.confirm(
      `Baru ${dinilai} dari ${total} siswa yang dinilai.\n\nTetap selesaikan sesi?`
    );
    if (!lanjut) return;
  }

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
