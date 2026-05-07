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

// State skenario — tab aktif dan fase aktif
let _skenario = {
  tab        : 'materi',
  faseIndex  : 0,
  langkahIndex: 0,
  speaking   : false,
  kendala    : null,   // 'lancar'|'waktu_kurang'|'kurang_kondusif'|'media_tidak_ada'|'lainnya'|null
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
  { min: 0,  max: 3,        emoji: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 36 36"><rect x="2" y="14" width="28" height="16" rx="3" fill="#C0392B"/><rect x="2" y="14" width="28" height="16" rx="3" fill="none" stroke="#922B21" stroke-width="1"/><rect x="4" y="9" width="28" height="16" rx="3" fill="#E74C3C"/><rect x="4" y="9" width="28" height="16" rx="3" fill="none" stroke="#C0392B" stroke-width="1"/><rect x="6" y="4" width="28" height="16" rx="3" fill="#EC7063"/><rect x="6" y="4" width="28" height="16" rx="3" fill="none" stroke="#E74C3C" stroke-width="1"/><circle cx="20" cy="12" r="4" fill="#C0392B"/><circle cx="20" cy="12" r="2.5" fill="#922B21"/></svg>', nama: 'Tunjangan Sertifikasi', gaji: 'Rp 15.000.000' },
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
  <div style="background:rgba(212,174,58,.07);border:1px solid rgba(212,174,58,.2);border-radius:14px;padding:14px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;">Jejak Mengajar</div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:12px;">
      <div style="display:flex;align-items:center;gap:14px;flex:1;">
        <div id="jejak-card-emoji" style="font-size:28px;line-height:1;">${streakEmoji}</div>
        <div style="flex:1;">
          <div style="line-height:1.2;">
            <span id="jejak-card-streak" style="font-size:24px;font-weight:800;color:#D4AE3A;">${streak}</span>
            <span style="font-size:11px;font-weight:600;color:rgba(255,255,255,.5);margin-left:4px;">hari berturut-turut</span>
          </div>
          <div id="jejak-card-label" style="font-size:12px;font-weight:700;color:#fff;margin-top:3px;">${streakLabel}</div>
        </div>
      </div>
      <div style="flex-shrink:0;text-align:right;">
        <div id="jejak-card-level-emoji" style="font-size:22px;line-height:1;">${lv.current.emoji}</div>
        <div id="jejak-card-level-nama" style="font-size:9px;font-weight:700;color:rgba(255,255,255,.7);margin-top:2px;white-space:nowrap;">${lv.current.nama}</div>
        <div id="jejak-card-level-gaji" style="font-size:11px;font-weight:800;color:#5C8A6E;white-space:nowrap;">${lv.current.gaji}</div>
      </div>
    </div>
    <div style="display:flex;align-items:flex-start;margin-bottom:8px;">
      <div style="flex:1;min-width:0;">
        <div id="jejak-card-next-text" style="font-size:11px;font-weight:700;color:rgba(255,255,255,.55);line-height:1.4;">${nextText}</div>
        <div style="margin-top:6px;height:5px;background:rgba(255,255,255,.08);border-radius:3px;overflow:hidden;">
          <div id="jejak-card-bar" style="height:5px;width:${barPct}%;background:#D4AE3A;border-radius:3px;transition:width .4s ease;"></div>
        </div>
        <div id="jejak-card-bar-label" style="font-size:9px;color:rgba(255,255,255,.3);margin-top:3px;">${lv.progressInLevel}/${lv.levelSpan !== null ? lv.levelSpan + ' hari' : '60+ hari ✔'} di level ini</div>
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-top:4px;">
      <div style="flex:1;background:rgba(255,255,255,.04);border-radius:8px;padding:8px;text-align:center;">
        <div id="jejak-card-hari" style="font-size:16px;font-weight:800;color:#fff;">${hariAktif}</div>
        <div style="font-size:9px;color:rgba(255,255,255,.35);margin-top:2px;">Hari aktif</div>
      </div>
      <div style="flex:1;background:rgba(255,255,255,.04);border-radius:8px;padding:8px;text-align:center;">
        <div id="jejak-card-pertemuan" style="font-size:16px;font-weight:800;color:#D4AE3A;">${pertemuan}</div>
        <div style="font-size:9px;color:rgba(255,255,255,.35);margin-top:2px;">Pertemuan</div>
      </div>
      <div style="flex:1;background:rgba(255,255,255,.04);border-radius:8px;padding:8px;text-align:center;">
        <div id="jejak-card-tp" style="font-size:16px;font-weight:800;color:#5C8A6E;">${tpSelesai}</div>
        <div style="font-size:9px;color:rgba(255,255,255,.35);margin-top:2px;">TP selesai</div>
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
  <div style="background:rgba(212,174,58,.07);border:1px solid rgba(212,174,58,.2);border-radius:14px;padding:20px;text-align:center;">
    <div style="font-size:32px;margin-bottom:10px;">🏫</div>
    <div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:6px;">Belum ada rombel</div>
    <div style="font-size:11px;color:rgba(255,255,255,.45);line-height:1.6;margin-bottom:16px;">
      Buat rombel di Layar Nilai dulu.<br>Rombel dibutuhkan untuk mencatat presensi saat mengajar.
    </div>
    <button onclick="dashKeLayarNilai()"
      style="background:#D4AE3A;color:#1A1A1A;border:none;border-radius:10px;padding:11px 24px;font-size:12px;font-weight:800;cursor:pointer;letter-spacing:.04em;">
      📋 Buat Rombel di Layar Nilai
    </button>
  </div>` : `
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,174,58,.2);border-radius:14px;overflow:hidden;">
    <div style="padding:12px 16px;border-bottom:1px solid rgba(212,174,58,.15);">
      <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;">Mulai Mengajar — Pilih Rombel</div>
    </div>
    ${kelasList.map(k => `<div onclick="dashPilihRombel('${k.id}','${_escape(k.nama)}',${k.tingkat || 1})"
         style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,.05);cursor:pointer;-webkit-tap-highlight-color:transparent;">
      <div>
        <div style="font-size:13px;font-weight:700;color:#fff;">${_escape(k.nama)}</div>
        <div style="font-size:10px;color:rgba(255,255,255,.35);margin-top:2px;">Kelas ${k.tingkat || 1} · TP ${k.tingkat === 2 ? '10–18' : '1–9'} · ${rekapMap[k.id]?.totalSiswa ?? 0} siswa</div>
      </div>
      <div style="color:rgba(255,255,255,.3);font-size:18px;">›</div>
    </div>`).join('')}
  </div>`;

  return `
<div style="padding:16px 16px 90px;display:flex;flex-direction:column;gap:12px;">
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,174,58,.2);border-radius:12px;padding:16px;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background-image:radial-gradient(circle,rgba(212,174,58,.06) 1px,transparent 1px);background-size:20px 20px;pointer-events:none;"></div>
    <div style="position:relative;">
      <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.1em;text-transform:uppercase;margin-bottom:6px;">Sesi Mengajar</div>
      <div style="font-size:16px;font-weight:800;color:#fff;line-height:1.2;">${_escape(session.name)}</div>
      ${session.school ? `<div style="font-size:10px;color:rgba(255,255,255,.45);margin-top:3px;">${_escape(session.school)}</div>` : ''}
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
  <div onclick="dashPilihTP(${tp.nomor},'${_escape(tp.nama)}')"
       style="display:flex;align-items:center;gap:12px;padding:13px 16px;border-bottom:1px solid rgba(255,255,255,.05);cursor:pointer;-webkit-tap-highlight-color:transparent;">
    <div style="width:28px;height:28px;border-radius:50%;background:rgba(212,174,58,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <span style="font-size:10px;font-weight:700;color:#D4AE3A;">${tp.nomor}</span>
    </div>
    <div style="flex:1;min-width:0;">
      <div style="font-size:13px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${_escape(tp.nama)}</div>
    </div>
    <div style="color:rgba(255,255,255,.3);font-size:18px;">›</div>
  </div>`).join('');

  return `
<div style="padding:16px 16px 90px;display:flex;flex-direction:column;gap:12px;">
  <div style="display:flex;align-items:center;gap:8px;">
    <button onclick="dashKeLanding()" style="background:transparent;border:1px solid rgba(212,174,58,.4);color:rgba(212,174,58,.8);border-radius:8px;padding:6px 12px;font-size:11px;cursor:pointer;">← Rombel</button>
    <div style="font-size:11px;color:rgba(212,174,58,.6);">${_escape(_flow.rombel.nama)}</div>
  </div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,174,58,.2);border-radius:14px;overflow:hidden;">
    <div style="padding:12px 16px;border-bottom:1px solid rgba(212,174,58,.15);">
      <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;">Pilih Tujuan Pembelajaran</div>
    </div>
    ${tpList.length > 0 ? tpHTML : `<div style="padding:24px;text-align:center;font-size:12px;color:rgba(255,255,255,.35);">Data kurikulum belum tersedia.</div>`}
  </div>
</div>`;
}

// --- MATERI PANEL: TAB MATERI ------------------------------------------------

function _buildTabMateri(tp) {
  const indikatorHTML = tp.indikator.map((ind, i) => `
    <div style="display:flex;gap:8px;margin-bottom:6px;">
      <div style="min-width:16px;height:16px;border-radius:50%;background:rgba(212,174,58,.15);color:#D4AE3A;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">${i+1}</div>
      <div style="font-size:11px;color:rgba(255,255,255,.65);line-height:1.5;">${_escape(ind)}</div>
    </div>`).join('');

  const vocabHTML = tp.vocab.map(v =>
    `<span style="background:rgba(212,174,58,.1);border:1px solid rgba(212,174,58,.2);color:rgba(212,174,58,.8);border-radius:5px;padding:3px 8px;font-size:10px;font-weight:600;">${_escape(v)}</span>`
  ).join('');

  return `
    <div style="font-size:10px;color:rgba(255,255,255,.4);margin-bottom:10px;padding-top:4px;border-top:1px solid rgba(255,255,255,.06);">${_escape(tp.tema)} · ${tp.jp} JP</div>
    <div style="font-size:11px;color:rgba(255,255,255,.55);line-height:1.6;margin-bottom:12px;">${_escape(tp.deskripsi)}</div>
    <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px;">Indikator</div>
    ${indikatorHTML}
    <div style="font-size:9px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;margin:10px 0 8px;">Kosakata Kunci</div>
    <div style="display:flex;flex-wrap:wrap;gap:5px;">${vocabHTML}</div>`;
}

// --- MATERI PANEL: TAB SKENARIO ----------------------------------------------

function _buildTabSkenario(tp) {
  if (!tp.skenario || tp.skenario.length === 0) {
    return '<div style="font-size:11px;color:rgba(255,255,255,.3);padding:8px 0;">Skenario belum tersedia.</div>';
  }

  const fase      = tp.skenario[_skenario.faseIndex] || tp.skenario[0];
  const faseNames = tp.skenario.map(f => f.fase);

  // Tab fase
  const faseTabsHTML = faseNames.map((nama, i) => {
    const isActive = i === _skenario.faseIndex;
    const isPenilaian = nama === 'Penilaian';
    const color = isPenilaian ? '#5C8A6E' : '#D4AE3A';
    const label = isPenilaian ? 'Asesmen Formatif' : nama;
    return `<button onclick="dashSkenarioFase(${i})"
      style="padding:5px 10px;border-radius:6px;border:1px solid ${isActive ? color : 'rgba(255,255,255,.1)'};
      background:${isActive ? (isPenilaian ? 'rgba(92,138,110,.15)' : 'rgba(212,174,58,.1)') : 'transparent'};
      color:${isActive ? color : 'rgba(255,255,255,.35)'};font-size:10px;font-weight:700;cursor:pointer;white-space:nowrap;">
      ${label}
    </button>`;
  }).join('');

  // Langkah-langkah skenario (bukan Penilaian)
  let kontenHTML = '';
  if (fase.fase !== 'Penilaian') {
    const langkahHTML = (fase.langkah || []).map((l, idx) => {
      if (l.tipe === 'audio') {
        return `
        <div style="background:rgba(92,138,110,.08);border:1px solid rgba(92,138,110,.2);border-radius:10px;padding:10px 12px;display:flex;align-items:flex-start;gap:10px;">
          <button onclick="dashTTS(${idx},'${_escapeTTS(l.teks)}')"
            id="tts-btn-${idx}"
            style="flex-shrink:0;width:32px;height:32px;border-radius:50%;background:rgba(92,138,110,.2);border:1px solid rgba(92,138,110,.4);color:#5C8A6E;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;">
            ▶
          </button>
          <div style="flex:1;">
            <div style="font-size:9px;font-weight:700;color:#5C8A6E;letter-spacing:.05em;text-transform:uppercase;margin-bottom:3px;">Audio untuk siswa</div>
            <div style="font-size:12px;color:rgba(255,255,255,.8);line-height:1.5;font-style:italic;">"${_escape(l.teks)}"</div>
          </div>
        </div>`;
      } else {
        return `
        <div style="display:flex;gap:10px;align-items:flex-start;padding:6px 0;">
          <div style="width:20px;height:20px;border-radius:50%;background:rgba(212,174,58,.15);color:#D4AE3A;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">${idx+1}</div>
          <div style="font-size:12px;color:rgba(255,255,255,.7);line-height:1.5;">${_escape(l.teks)}</div>
        </div>`;
      }
    }).join('');

    kontenHTML = `
      <div style="margin-bottom:6px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
          <div style="font-size:10px;font-weight:700;color:rgba(212,174,58,.7);">${_escape(fase.fase)} · ${fase.durasi} menit</div>
          <button onclick="dashTTSStop()" style="font-size:9px;color:rgba(255,255,255,.3);background:transparent;border:none;cursor:pointer;">⏹ Stop</button>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          ${langkahHTML}
        </div>
      </div>`;

  } else {
    // Fase Penilaian — input L/S/R per siswa
    kontenHTML = _buildFasePenilaian();
  }

  return `
    <div style="padding-top:4px;border-top:1px solid rgba(255,255,255,.06);">
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">
        ${faseTabsHTML}
      </div>
      ${kontenHTML}
    </div>`;
}

// --- FASE PENILAIAN ----------------------------------------------------------

function _buildFasePenilaian() {
  const { siswaList, rombel, tp } = _flow;

  if (!siswaList || siswaList.length === 0) {
    return `
    <div style="text-align:center;padding:16px;font-size:12px;color:rgba(255,255,255,.35);">
      Belum ada siswa di rombel ini.<br>Tambah siswa di Layar Nilai terlebih dahulu.
    </div>`;
  }

  const siswaHTML = siswaList.map(s => `
  <div style="border-bottom:1px solid rgba(255,255,255,.05);padding:10px 0;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
      <div style="width:24px;height:24px;border-radius:50%;background:rgba(92,138,110,.15);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#5C8A6E;flex-shrink:0;">${s.nomor}</div>
      <div style="font-size:12px;font-weight:700;color:#fff;flex:1;">${_escape(s.nama)}</div>
      <div id="nilai-rerata-${s.id}" style="font-size:12px;font-weight:800;color:#D4AE3A;min-width:28px;text-align:right;">—</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-bottom:6px;">
      ${['L','S','R'].map(dim => `
      <div>
        <div style="font-size:9px;font-weight:700;color:rgba(255,255,255,.4);letter-spacing:.05em;text-align:center;margin-bottom:3px;">${dim}</div>
        <input
          id="nilai-${dim.toLowerCase()}-${s.id}"
          type="number" min="0" max="100" placeholder="—"
          style="width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#fff;font-size:14px;font-weight:700;text-align:center;padding:6px 4px;outline:none;box-sizing:border-box;"
          oninput="dashNilaiUpdate('${s.id}')"
          onfocus="this.style.borderColor='rgba(92,138,110,.5)'"
          onblur="this.style.borderColor='rgba(255,255,255,.12)'"
        >
      </div>`).join('')}
    </div>
    <div>
      <div style="font-size:9px;font-weight:700;color:rgba(255,255,255,.35);margin-bottom:3px;">Catatan</div>
      <textarea
        id="catatan-${s.id}"
        placeholder="Observasi singkat..."
        maxlength="500"
        rows="2"
        style="width:100%;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:8px;color:rgba(255,255,255,.7);font-size:11px;padding:6px 8px;resize:none;outline:none;font-family:inherit;box-sizing:border-box;"
        onfocus="this.style.borderColor='rgba(92,138,110,.4)'"
        onblur="dashCatatanSimpan('${s.id}')"
      ></textarea>
    </div>
  </div>`).join('');

  return `
  <div style="margin-bottom:6px;">
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:6px;margin-bottom:10px;">
      <div style="font-size:10px;font-weight:700;color:#5C8A6E;">Asesmen Formatif · L / S / R</div>
      <button onclick="dashNilaiSimpanSemua()"
        style="background:rgba(92,138,110,.15);border:1px solid rgba(92,138,110,.4);color:#5C8A6E;border-radius:8px;padding:5px 12px;font-size:10px;font-weight:700;cursor:pointer;">
        Simpan Semua
      </button>
      <div style="font-size:9px;color:rgba(255,255,255,.3);width:100%;">Observasi proses — tidak masuk nilai rapor</div>
    </div>
    <div style="font-size:10px;color:rgba(255,255,255,.35);margin-bottom:10px;">
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
  <div style="padding:24px;text-align:center;font-size:12px;color:rgba(255,255,255,.35);">
    Belum ada siswa di rombel ini.<br>
    <button onclick="dashKeLayarNilai()" style="margin-top:12px;background:transparent;border:1px solid #D4AE3A;color:#D4AE3A;border-radius:8px;padding:7px 14px;font-size:11px;cursor:pointer;">+ Tambah Siswa di Layar Nilai</button>
  </div>` : siswaList.map(s => {
    const st  = statusMap[s.id] || 'A';
    const cfg = STATUS_CFG[st];
    return `
  <div id="presensi-row-${s.id}"
       style="display:flex;align-items:center;gap:12px;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,.05);background:${cfg.bg};">
    <div style="width:28px;height:28px;border-radius:50%;background:rgba(212,174,58,.15);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#D4AE3A;flex-shrink:0;">${s.nomor}</div>
    <div style="flex:1;font-size:13px;font-weight:500;color:rgba(255,255,255,.8);">${_escape(s.nama)}</div>
    <div style="display:flex;gap:4px;">
      ${['H','S','I','A'].map(k => `
      <button onclick="dashSetStatus('${s.id}','${k}')"
        style="padding:4px 8px;border-radius:6px;border:1px solid ${st===k ? STATUS_CFG[k].color : 'rgba(255,255,255,.1)'};background:${st===k ? STATUS_CFG[k].dot : 'transparent'};color:${st===k ? STATUS_CFG[k].color : 'rgba(255,255,255,.25)'};font-size:10px;font-weight:700;cursor:pointer;">
        ${k}
      </button>`).join('')}
    </div>
  </div>`;
  }).join('');

  // Render tab materi/skenario
  const tpData    = _getTP(tp.nomor);
  const tabMateri = _skenario.tab === 'materi';

  const materiKonten = tpData
    ? (tabMateri ? _buildTabMateri(tpData) : _buildTabSkenario(tpData))
    : '<div style="font-size:11px;color:rgba(255,255,255,.3);">Data tidak tersedia.</div>';

  return `
<div style="padding:16px 16px 90px;display:flex;flex-direction:column;gap:12px;">

  <!-- BREADCRUMB -->
  <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
    <button onclick="dashKeLanding()" style="background:transparent;border:1px solid rgba(212,174,58,.4);color:rgba(212,174,58,.8);border-radius:8px;padding:6px 12px;font-size:11px;cursor:pointer;">← Rombel</button>
    <button onclick="dashKePilihTP()" style="background:transparent;border:1px solid rgba(212,174,58,.4);color:rgba(212,174,58,.8);border-radius:8px;padding:6px 12px;font-size:11px;cursor:pointer;">← TP</button>
    <div style="font-size:11px;color:rgba(212,174,58,.6);">TP ${tp.nomor} · ${_escape(rombel.nama)}</div>
  </div>

  <!-- HEADER SESI -->
  <div style="background:rgba(92,138,110,.12);border:1px solid rgba(92,138,110,.3);border-radius:14px;padding:16px;">
    <div style="font-size:9px;font-weight:700;color:#D4AE3A;letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px;">Sesi Berlangsung</div>
    <div style="font-size:10px;font-weight:700;color:#B05A46;">TP ${String(tp.nomor).padStart(2,'0')}</div>
    <div style="font-size:15px;font-weight:800;color:#fff;margin-top:2px;">${_escape(tp.nama)}</div>
    <div style="font-size:11px;color:rgba(255,255,255,.5);margin-top:4px;">${_escape(rombel.nama)}</div>
    <div style="font-size:11px;color:rgba(212,174,58,.6);margin-top:4px;">${new Date().toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
  </div>

  <!-- PRESENSI -->
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,174,58,.2);border-radius:14px;overflow:hidden;">
    <div onclick="dashTogglePresensi()" style="display:flex;align-items:center;justify-content:space-between;padding:13px 16px;cursor:pointer;-webkit-tap-highlight-color:transparent;">
      <div style="font-size:9px;font-weight:700;color:#D4AE3A;letter-spacing:.08em;text-transform:uppercase;">Isi Presensi</div>
      <div style="display:flex;align-items:center;gap:8px;">
        <div id="presensi-count" style="font-size:11px;font-weight:700;color:#5C8A6E;">${totalH > 0 ? `${totalH}/${total} hadir` : ''}</div>
        <div id="presensi-toggle-icon" style="font-size:14px;color:rgba(255,255,255,.3);transition:transform .2s;">›</div>
      </div>
    </div>
    <div id="presensi-panel" style="display:none;">
      ${siswaHTML}
    </div>
  </div>

  <!-- MATERI & SKENARIO -->
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,174,58,.2);border-radius:14px;overflow:hidden;">
    <div style="padding:12px 16px;border-bottom:1px solid rgba(212,174,58,.15);">
      <div style="font-size:9px;font-weight:700;color:#D4AE3A;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px;">Materi & Skenario</div>
      <div style="display:flex;gap:6px;">
        <button onclick="dashMateriTab('materi')"
          style="padding:5px 14px;border-radius:6px;border:1px solid ${tabMateri ? 'rgba(212,174,58,.5)' : 'rgba(255,255,255,.1)'};background:${tabMateri ? 'rgba(212,174,58,.1)' : 'transparent'};color:${tabMateri ? '#D4AE3A' : 'rgba(255,255,255,.35)'};font-size:10px;font-weight:700;cursor:pointer;">
          Materi
        </button>
        <button onclick="dashMateriTab('skenario')"
          style="padding:5px 14px;border-radius:6px;border:1px solid ${!tabMateri ? 'rgba(92,138,110,.5)' : 'rgba(255,255,255,.1)'};background:${!tabMateri ? 'rgba(92,138,110,.1)' : 'transparent'};color:${!tabMateri ? '#5C8A6E' : 'rgba(255,255,255,.35)'};font-size:10px;font-weight:700;cursor:pointer;">
          Skenario
        </button>
      </div>
    </div>
    <div style="padding:0 16px 16px;">
      <div id="materi-konten" style="padding-top:12px;">
        ${materiKonten}
      </div>
    </div>
  </div>

  <!-- REFLEKSI -->
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,174,58,.2);border-radius:14px;padding:14px;">
    <div style="font-size:9px;font-weight:700;color:#D4AE3A;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px;">Refleksi Mengajar</div>
    <textarea id="sesi-refleksi"
      placeholder="Catatan singkat tentang sesi ini..."
      maxlength="300"
      style="width:100%;height:72px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#fff;font-size:12px;padding:8px 10px;resize:none;outline:none;font-family:inherit;box-sizing:border-box;"
      onfocus="this.style.borderColor='rgba(212,174,58,.4)'"
      onblur="this.style.borderColor='rgba(255,255,255,.1)'"
    ></textarea>
    <div style="margin-top:10px;">
      <div style="font-size:9px;font-weight:700;color:rgba(255,255,255,.35);letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;">Kendala sesi</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        ${[
          { val: 'lancar',       label: '✅ Lancar' },
          { val: 'waktu_kurang', label: '⏱ Waktu kurang' },
          { val: 'kurang_kondusif', label: '📢 Kurang kondusif' },
          { val: 'media_tidak_ada', label: '🖼 Media tidak ada' },
          { val: 'lainnya',      label: '📝 Lainnya' },
        ].map(k => `
        <button onclick="dashPilihKendala('${k.val}')"
          id="kendala-btn-${k.val}"
          style="padding:5px 10px;border-radius:20px;border:1px solid rgba(255,255,255,.15);background:transparent;color:rgba(255,255,255,.4);font-size:10px;cursor:pointer;">
          ${k.label}
        </button>`).join('')}
      </div>
    </div>
  </div>

  <!-- TOMBOL -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
    <button onclick="dashKeLanding()"
      style="padding:13px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:12px;font-size:12px;font-weight:600;color:rgba(255,255,255,.45);cursor:pointer;">
      Batalkan
    </button>
    <button onclick="dashSelesaiSesi()"
      style="padding:13px;background:rgba(92,138,110,.12);border:1px solid rgba(92,138,110,.3);border-radius:12px;font-size:13px;font-weight:800;color:#5C8A6E;cursor:pointer;letter-spacing:.04em;">
      ✓ Selesai
    </button>
  </div>

</div>`;
}

// --- HELPERS: RE-RENDER MATERI KONTEN ----------------------------------------

function _rerenderMateriKonten() {
  const el = _container && _container.querySelector('#materi-konten');
  if (!el) return;
  const tpData = _getTP(_flow.tp?.nomor);
  if (!tpData) return;
  const scrollY = window.scrollY;
  const tabMateri = _skenario.tab === 'materi';
  el.innerHTML = tabMateri ? _buildTabMateri(tpData) : _buildTabSkenario(tpData);
  window.scrollTo({ top: scrollY, behavior: 'instant' });
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
    btnEl.style.background = 'rgba(92,138,110,.5)';
    btnEl.style.borderColor = '#5C8A6E';
  }
  window.speechSynthesis.speak(u);
}

function _ttsResetBtn() {
  if (_ttsActiveBtn) {
    _ttsActiveBtn.textContent = '▶';
    _ttsActiveBtn.style.background = 'rgba(92,138,110,.2)';
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
  panel.style.display = isOpen ? 'none' : 'block';
  icon.style.transform = isOpen ? '' : 'rotate(90deg)';
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

window.dashPilihKendala = function(val) {
  _skenario.kendala = val;
  // Reset semua tombol
  ['lancar','waktu_kurang','kurang_kondusif','media_tidak_ada','lainnya'].forEach(k => {
    const btn = document.getElementById(`kendala-btn-${k}`);
    if (!btn) return;
    if (k === val) {
      btn.style.background   = 'rgba(212,174,58,.15)';
      btn.style.borderColor  = 'rgba(212,174,58,.5)';
      btn.style.color        = '#D4AE3A';
    } else {
      btn.style.background   = 'transparent';
      btn.style.borderColor  = 'rgba(255,255,255,.15)';
      btn.style.color        = 'rgba(255,255,255,.4)';
    }
  });
};

window.dashNilaiUpdate = function(siswaId) {
  const l = parseInt(document.getElementById(`nilai-l-${siswaId}`)?.value) || null;
  const s = parseInt(document.getElementById(`nilai-s-${siswaId}`)?.value) || null;
  const r = parseInt(document.getElementById(`nilai-r-${siswaId}`)?.value) || null;
  const valid = [l, s, r].filter(v => v !== null && !isNaN(v));
  const rerata = valid.length > 0 ? Math.round(valid.reduce((a,b) => a+b, 0) / valid.length) : null;
  const el = document.getElementById(`nilai-rerata-${siswaId}`);
  if (el) el.textContent = rerata !== null ? rerata : '—';
  if (el) el.style.color = rerata !== null ? (rerata >= 80 ? '#5C8A6E' : rerata >= 70 ? '#D4AE3A' : '#B05A46') : '#D4AE3A';
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
    const l = parseInt(document.getElementById(`nilai-l-${s.id}`)?.value);
    const sv = parseInt(document.getElementById(`nilai-s-${s.id}`)?.value);
    const r = parseInt(document.getElementById(`nilai-r-${s.id}`)?.value);
    const cl = isNaN(l) ? null : Math.max(0, Math.min(100, l));
    const cs = isNaN(sv) ? null : Math.max(0, Math.min(100, sv));
    const cr = isNaN(r) ? null : Math.max(0, Math.min(100, r));
    if (cl !== null || cs !== null || cr !== null) {
      try {
        await nilai.setNilaiFormatif(rombel.id, s.id, tp.nomor, cl, cs, cr);
        saved++;
      } catch (err) {
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
    btn.style.color = '#5C8A6E';
    setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 2000);
  }
};

window.dashKeLayarNilai = function() {
  if (typeof _onNavigateBack === 'function') _onNavigateBack('nilai');
};

window.dashKeLanding = async function() {
  _ttsStop();
  _flow = { view: 'landing', rombel: null, tp: null, statusMap: {}, siswaList: [] };
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
      const active = k === status;
      btn.style.border     = `1px solid ${active ? STATUS_CFG[k].color : 'rgba(255,255,255,.1)'}`;
      btn.style.background = active ? STATUS_CFG[k].dot : 'transparent';
      btn.style.color      = active ? STATUS_CFG[k].color : 'rgba(255,255,255,.25)';
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
  // Escape untuk atribut onclick — hanya escape karakter yang merusak JS string
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n');
}

function _renderSkeleton(container) {
  container.innerHTML = `
  <div style="padding:16px;display:flex;flex-direction:column;gap:12px">
    ${['70%','90%','100%','80%'].map(w => `
    <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:14px">
      <div style="height:10px;width:${w};background:var(--parchment);border-radius:4px;margin-bottom:10px"></div>
      <div style="height:20px;width:50%;background:var(--parchment);border-radius:4px"></div>
    </div>`).join('')}
  </div>`;
}

function _buildErrorHTML(msg) {
  return `
  <div style="padding:24px;text-align:center">
    <div style="font-size:24px;margin-bottom:10px">⚠</div>
    <div style="font-size:13px;font-weight:700;color:var(--clay);margin-bottom:6px">Dashboard tidak bisa dimuat</div>
    <div style="font-size:10px;color:var(--muted);margin-bottom:16px">${_escape(msg)}</div>
    <button onclick="window.__FLAF_DASH__.reload()"
            style="background:var(--ink);color:#fff;border:none;border-radius:8px;padding:8px 16px;font-size:11px;font-weight:700;cursor:pointer">
      Coba Lagi
    </button>
  </div>`;
}

window.__FLAF_DASH__ = {
  reload: () => _container && renderDashboard(_container),
};
