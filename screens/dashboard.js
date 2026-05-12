/**
 * screens/dashboard.js — FLAF Dashboard Guru
 *
 * Alur: Landing → Pilih Rombel → Pilih TP → Sesi Berlangsung (Stepper)
 *
 * Stepper Sesi:
 *   Step 0 — Materi    (deskripsi, indikator, vocab, persiapan)
 *   Step 1 — Presensi  (kehadiran siswa, paginasi)
 *   Step 2 — Pembuka   (langkah linear, TTS)
 *   Step 3 — Inti      (langkah linear, TTS)
 *   Step 4 — Penutup   (langkah linear, TTS)
 *   Step 5 — Asesmen   (nilai L/S/R per siswa, opsional)
 *   Step 6 — Selesai   (ringkasan, refleksi, kendala)
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
  stepIndex       : 0,   // 0=Materi 1=Presensi 2=Pembuka 3=Inti 4=Penutup 5=Asesmen 6=Selesai
  langkahIndex    : 0,   // langkah aktif dalam step fase (2–4)
  speaking        : false,
  kendala         : null,
  presensiPage    : 0,
  asesmenPage     : 0,
  openSiswaId     : null,
  asesmenModeCepat: false,
  warnAsesmen     : false, // true = tampilkan peringatan lewati asesmen
};

const SISWA_PER_HALAMAN = 5;

// Stepper — urutan step dan mapping ke fase skenario
const STEPS = [
  { id: 'materi',   label: 'Materi'   },
  { id: 'presensi', label: 'Presensi' },
  { id: 'pembuka',  label: 'Pembuka'  },
  { id: 'inti',     label: 'Inti'     },
  { id: 'penutup',  label: 'Penutup'  },
  { id: 'asesmen',  label: 'Asesmen'  },
  { id: 'selesai',  label: 'Selesai'  },
];
const STEP_FASE = { 2: 'Pembuka', 3: 'Inti', 4: 'Penutup', 5: 'Penilaian' };

function _getFaseData(tp, stepIndex) {
  const faseName = STEP_FASE[stepIndex];
  if (!faseName || !tp?.skenario) return null;
  return tp.skenario.find(f => f.fase === faseName) || null;
}

// --- RUNTIME V6 ---

/* =============================================================
   FLAF Runtime v6 — Persistent Classroom Surface
   Integrasi ke dashboard.js

   Arsitektur terkunci:
   - Single persistent surface (tidak pernah di-replace saat runtime)
   - Three-layer: Focus / Peripheral Awareness / Context Overlay
   - Auto-dim → awareness state (guru melihat kelas, bukan layar)
   - Micro-context: context-triggered, height-animated
   - Situational map: text-intensity only, peripheral orientation
   - Speaking turn: distribusi, bukan skor
   - Sistem mundur agar kelas maju
   ============================================================= */

// ── Runtime State ────────────────────────────────────────────

const _rt = {
  // Fase aktif: 0=Pembuka, 1=Inti, 2=Penutup
  faseOffset    : 0,
  langkahIndex  : 0,

  // Attention states
  dimmed        : false,
  dimTimer      : null,
  DIM_DELAY_MS  : 9000, // 9 detik sebelum cue redup

  // Micro-context
  currentStu    : null,

  // Speaking map — siswaId → 'sudah'|'diam'|'pair'|'bantu'
  spkMap        : {},

  // Timer fase (satu timer aktif saja)
  timerInterval : null,
  timerSisa     : 0,
  timerFaseIdx  : -1,

  // Situasi overlay
  situasiKey    : null,
  situasiActKey : null,

  // TTS
  ttsUtterance  : null,
  ttsPlaying    : false,

  // Session timer (dari mulai kelas, bukan per fase)
  sessionSec    : 0,
  sessionTimer  : null,

  // Flag: apakah runtime sudah di-mount
  mounted       : false,

  // Closure surface state
  closureMode   : false,
  closureKendala: null,
};

// Data situasi kelas — respons guru praktis, singkat
const RT_SIT_DATA = {
  ribut   : { lbl: 'Kelas ribut',    resp: '"Everyone, freeze." Diam dulu. Beri instruksi ulang setelah sunyi.', act: '→ Ke Penutup', key: 'penutup' },
  energi  : { lbl: 'Energi turun',   resp: 'Minta siswa berdiri. Lakukan instruksi bersama 1 menit.',            act: '→ Ke Inti',    key: 'inti'    },
  pair    : { lbl: 'Pair macet',      resp: 'Kumpulkan kembali. Demo 1 pasangan di depan, baru pair lagi.',        act: '→ Ke Inti',    key: 'inti'    },
  waktu   : { lbl: 'Waktu mepet',     resp: 'Lewati langkah tersisa. Langsung ke Penutup sekarang.',               act: '→ Penutup',    key: 'penutup' },
  lancar  : { lbl: 'Sesi lancar',     resp: 'Lanjutkan sesuai rencana.',                                           act: 'Tutup',        key: 'close'   },
};

// Label langkah untuk focus nav button
const RT_NEXT_LABELS = {
  audio        : '→ Siswa bicara',
  respons_siswa: '→ Lanjutkan',
  instruksi    : '→ Berikutnya',
  diferensiasi : '→ Diferensiasi',
  darurat      : '→ Darurat',
};

// ── Runtime Mount ─────────────────────────────────────────────
// Dipanggil sekali saat memasuki step fase (2-4).
// Membangun DOM runtime di dalam #ds-step-body.
// Setelah mount, hanya state yang berubah — DOM surface persisten.

function _rtMount(tpData) {
  if (_rt.mounted) return; // Sudah mounted — jangan rebuild
  if (!tpData) { console.error('[RT] _rtMount: tpData null — aborting'); return; }

  const body = _container?.querySelector('#ds-step-body');
  if (!body) { console.error('[RT] _rtMount: #ds-step-body tidak ditemukan'); return; }

  // Ambil siswa hadir untuk speaking peripheral
  const hadir = (_flow.siswaList || []).filter(s => _flow.statusMap[s.id] === 'H');
  const siswaHadir = hadir.length > 0 ? hadir : (_flow.siswaList || []);

  // Inisialisasi spkMap dari siswa hadir
  for (const s of siswaHadir) {
    if (!_rt.spkMap[s.id]) _rt.spkMap[s.id] = null;
  }

  // Build HTML surface — sekali saja
  body.innerHTML = _rtBuildSurface(siswaHadir);
  body.classList.add('ds-step-body--runtime');

  // Sembunyikan elemen stepper yang tidak relevan saat runtime
  const wrap = _container?.querySelector('.ds-stepper-wrap');
  if (wrap) wrap.classList.add('ds-stepper-wrap--runtime');

  _rt.mounted = true;

  // Render konten awal
  _rtRenderStep(tpData);
  _rtRenderSitmap(tpData);
  _rtRenderSpk(siswaHadir);
  _rtStartSessionTimer();

  // Event: stop TTS saat halaman di-background (iOS Safari guard)
  // Dipasang sekali, pakai WeakRef agar tidak memory leak
  if (!window._rtVisibilityBound) {
    window._rtVisibilityBound = true;
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && _rt.ttsPlaying) _rtTtsStop();
    });
  }

  // Event: tap focus cue → undim + TTS jika tipe audio/respons
  const cueEl = body.querySelector('.rt-focus-cue');
  if (cueEl) {
    cueEl.addEventListener('click', () => {
      _rtUndim(tpData);
      // Auto-play TTS saat tap cue untuk langkah audio/respons_siswa
      const fase    = _rtGetFase(tpData);
      const langkah = fase?.langkah?.[_rt.langkahIndex];
      if (langkah && (langkah.tipe === 'audio' || langkah.tipe === 'respons_siswa')) {
        _rtTtsSpeak(langkah.teks);
      }
    });
  }

  // Event: tap awareness return → undim saja (tidak trigger TTS)
  const awReturn = body.querySelector('.rt-aw-return');
  if (awReturn) awReturn.addEventListener('click', () => _rtUndim(tpData));
}

function _rtBuildSurface(siswaHadir) {
  const spkChips = siswaHadir.map(s => {
    const first = _rtFirstName(s.nama);
    return `<span class="rt-spk-chip" data-sid="${s.id}" onclick="rtTapSiswa('${s.id}')">${first}</span>`;
  }).join('');

  return `
<div class="rt-surface" id="rt-surface">

  <!-- LAYER 2: Peripheral Band — fase + awareness strip + timer -->
  <div class="rt-periph">
    <span class="rt-p-fase" id="rt-p-fase">—</span>
    <div class="rt-p-sep"></div>
    <div class="rt-p-aw" id="rt-p-aw">Ketuk nama untuk catat speaking turn</div>
    <span class="rt-p-timer" id="rt-p-timer">00:00</span>
  </div>

  <!-- LAYER 3: Micro-context — context-triggered, height-animated -->
  <div class="rt-micro" id="rt-micro">
    <div class="rt-micro-inner">
      <div class="rt-micro-name" id="rt-micro-name">—</div>
      <button class="rt-micro-primary" onclick="rtMicroAction('sudah')">✓ Sudah bicara</button>
      <div class="rt-micro-secondary">
        <button class="rt-micro-sec-btn" onclick="rtMicroAction('diam')">diam</button>
        <button class="rt-micro-sec-btn" onclick="rtMicroAction('pair')">pair</button>
        <button class="rt-micro-sec-btn" onclick="rtMicroAction('bantu')">bantu</button>
      </div>
      <button class="rt-micro-close" onclick="rtMicroClose()">×</button>
    </div>
  </div>

  <!-- LAYER 3: Signal Strip — guru-triggered, situasi kelas -->
  <div class="rt-sig-strip">
    <button class="rt-sp" id="rt-sp-ribut"  onclick="rtOpenSituasi('ribut')">Ribut</button>
    <button class="rt-sp" id="rt-sp-energi" onclick="rtOpenSituasi('energi')">Energi ↓</button>
    <button class="rt-sp" id="rt-sp-pair"   onclick="rtOpenSituasi('pair')">Pair macet</button>
    <button class="rt-sp" id="rt-sp-waktu"  onclick="rtOpenSituasi('waktu')">Waktu mepet</button>
    <button class="rt-sp rt-sp--ok" id="rt-sp-lancar" onclick="rtOpenSituasi('lancar')">Lancar ✓</button>
  </div>

  <!-- LAYER 1: Focus Zone — dua attention states -->
  <div class="rt-focus-zone">

    <!-- STATE A: Active cue -->
    <div class="rt-focus-cue" id="rt-focus-cue">
      <div class="rt-fc-type" id="rt-fc-type" style="display:none;">
        <div class="rt-ft-ic" id="rt-fc-ic"></div>
        <span class="rt-ft-lbl" id="rt-fc-lbl"></span>
        <span class="rt-ft-pm" id="rt-fc-pm" style="display:none;"></span>
      </div>
      <div id="rt-fc-teks" class="rt-focus-teks"></div>
    </div>

    <!-- STATE B: Awareness — muncul saat cue dimmed -->
    <div class="rt-focus-aw" id="rt-focus-aw">
      <div class="rt-aw-label">belum speaking turn</div>
      <div class="rt-aw-names" id="rt-aw-names"></div>
      <div class="rt-aw-sub" id="rt-aw-sub"></div>
      <div class="rt-aw-return">ketuk untuk kembali →</div>
    </div>

  </div>

  <!-- Focus Nav — minimal, samar -->
  <div class="rt-focus-nav">
    <button class="rt-fn-btn rt-fn-btn--disabled" id="rt-fn-back" onclick="rtStepBack()">←</button>
    <span class="rt-fn-info" id="rt-fn-info">1/1</span>
    <button class="rt-fn-btn rt-fn-btn--primary" id="rt-fn-fwd" onclick="rtStepFwd()">→</button>
  </div>

  <!-- LAYER 2: Situational Map — peripheral orientation, text-intensity only -->
  <div class="rt-sitmap">
    <div class="rt-sitmap-scroll" id="rt-sitmap"></div>
  </div>

  <!-- LAYER 2: Speaking Peripheral — selalu hadir -->
  <div class="rt-spk-periph" id="rt-spk-periph">
    ${spkChips}
  </div>

  <!-- Anchor — samar, tidak dominan -->
  <div class="rt-anchor">
    <button class="rt-anc" onclick="rtOpenOv('rt-ov-situasi')">Situasi kelas</button>
    <button class="rt-anc rt-anc--end" onclick="rtOpenSelesai()">Selesai sesi</button>
  </div>

  <!-- Overlay: Situasi Kelas -->
  <div class="rt-ov-back" id="rt-ov-situasi" onclick="rtCloseOv('rt-ov-situasi')">
    <div class="rt-ov-sheet" onclick="event.stopPropagation()">
      <div class="rt-ov-handle"></div>
      <div id="rt-sit-pick">
        <div class="rt-ov-lbl" style="margin-bottom:8px;">Situasi kelas sekarang</div>
        <div class="rt-ov-sit-list">
          <div class="rt-ov-sit-opt" onclick="rtPickSituasi('ribut')">
            <div class="rt-ov-sit-ic" style="background:rgba(217,123,90,.09);color:rgba(217,123,90,.8);">!</div>
            Kelas ribut, susah fokus
          </div>
          <div class="rt-ov-sit-opt" onclick="rtPickSituasi('energi')">
            <div class="rt-ov-sit-ic" style="background:rgba(201,168,76,.1);color:rgba(201,168,76,.8);">↓</div>
            Energi turun, siswa lesu
          </div>
          <div class="rt-ov-sit-opt" onclick="rtPickSituasi('pair')">
            <div class="rt-ov-sit-ic" style="background:rgba(217,123,90,.09);color:rgba(217,123,90,.8);">⇄</div>
            Pair tidak berjalan
          </div>
          <div class="rt-ov-sit-opt" onclick="rtPickSituasi('waktu')">
            <div class="rt-ov-sit-ic" style="background:rgba(217,123,90,.09);color:rgba(217,123,90,.8);">⌛</div>
            Waktu hampir habis
          </div>
          <div class="rt-ov-sit-opt" onclick="rtPickSituasi('lancar')">
            <div class="rt-ov-sit-ic" style="background:rgba(77,184,150,.1);color:rgba(77,184,150,.8);">✓</div>
            Sesi lancar, lanjutkan
          </div>
        </div>
      </div>
      <div id="rt-sit-resp" style="display:none;">
        <div class="rt-ov-lbl" id="rt-sit-resp-lbl" style="margin-bottom:6px;">—</div>
        <div class="rt-ov-resp" id="rt-sit-resp-txt">—</div>
        <div class="rt-ov-acts">
          <button class="rt-ov-act" onclick="rtCloseSitResp()">← Balik ke kelas</button>
          <button class="rt-ov-act rt-ov-act--primary" id="rt-sit-resp-act" onclick="rtDoSitAct()">—</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Overlay: Selesai Sesi -->
  <div class="rt-ov-back" id="rt-ov-selesai" onclick="rtCloseOv('rt-ov-selesai')">
    <div class="rt-ov-sheet" onclick="event.stopPropagation()">
      <div class="rt-ov-handle"></div>
      <div class="rt-ov-lbl" style="margin-bottom:6px;">Akhiri sesi</div>
      <div class="rt-ov-selesai-txt" id="rt-selesai-txt">—</div>
      <div class="rt-ov-acts" style="margin-top:8px;">
        <button class="rt-ov-act" onclick="rtCloseOv('rt-ov-selesai')">← Kembali</button>
        <button class="rt-ov-act rt-ov-act--primary" onclick="rtKonfirmasiSelesai()">Selesai Sesi →</button>
      </div>
    </div>
  </div>

</div>`;
}

// ── Unmount runtime — dipanggil saat keluar ke step lain ─────

function _rtUnmount() {
  _rtStopDimTimer();
  _rtStopSessionTimer();
  _rtStopFaseTimer();
  _rtTtsStop();

  const body = _container?.querySelector('#ds-step-body');
  if (body) body.classList.remove('ds-step-body--runtime');

  const wrap = _container?.querySelector('.ds-stepper-wrap');
  if (wrap) wrap.classList.remove('ds-stepper-wrap--runtime');

  _rt.mounted      = false;
  _rt.dimmed       = false;
  _rt.currentStu   = null;
  _rt.situasiKey   = null;
  _rt.ttsPlaying   = false;
  _rt.ttsUtterance = null;
  _rt.closureMode  = false;
}

// ── Step Rendering ────────────────────────────────────────────
// Render cue aktif, situational map, nav button.
// Tidak rebuild DOM — hanya update elemen spesifik.

function _rtRenderStep(tpData) {
  if (!_rt.mounted) return;

  const fase = _rtGetFase(tpData);
  if (!fase) return;

  const langkahList = fase.langkah || [];
  const total       = langkahList.length;
  if (total === 0) {
    console.warn('[RT] Fase tanpa langkah:', fase.fase);
    return;
  }
  // Guard: langkahIndex tidak boleh melebihi total
  if (_rt.langkahIndex >= total) _rt.langkahIndex = total - 1;
  if (_rt.langkahIndex < 0)      _rt.langkahIndex = 0;
  const aktif   = _rt.langkahIndex;
  const langkah = langkahList[aktif];
  if (!langkah) return;

  // Peripheral Band: fase label
  _rtSetText('rt-p-fase', `${fase.fase} · ${fase.durasi ? fase.durasi + ' mnt' : ''}`);

  // Focus Cue: type row
  const TYPE_MAP = {
    audio        : { ic: '▶', lbl: 'Ucapkan ke siswa', cls: 'au' },
    respons_siswa: { ic: '💬', lbl: 'Respons siswa',    cls: 'rs' },
    diferensiasi : { ic: '≠',  lbl: 'Diferensiasi',     cls: 'df' },
    darurat      : { ic: '!',  lbl: 'Waktu ≤ 10 mnt',   cls: 'dr' },
    instruksi    : { ic: '›',  lbl: 'Instruksi',         cls: 'in' },
  };

  const tm      = TYPE_MAP[langkah.tipe] || TYPE_MAP.instruksi;
  const typeEl  = document.getElementById('rt-fc-type');
  const icEl    = document.getElementById('rt-fc-ic');
  const lblEl   = document.getElementById('rt-fc-lbl');
  const pmEl    = document.getElementById('rt-fc-pm');
  const teksEl  = document.getElementById('rt-fc-teks');

  if (typeEl) typeEl.style.display = 'flex';
  if (icEl)  { icEl.textContent = tm.ic; icEl.className = `rt-ft-ic rt-ft-ic--${tm.cls}`; }
  if (lblEl) { lblEl.textContent = tm.lbl; lblEl.className = `rt-ft-lbl rt-ft-lbl--${tm.cls}`; }

  // PM badge
  if (pmEl) {
    if (langkah.pm) {
      pmEl.style.display = '';
      pmEl.textContent   = langkah.pm === 'mindful' ? 'Mindful' : langkah.pm === 'meaningful' ? 'Bermakna' : 'Joyful';
      pmEl.className     = `rt-ft-pm rt-ft-pm--${langkah.pm}`;
    } else {
      pmEl.style.display = 'none';
    }
  }

  // Focus teks — konten utama
  if (teksEl) {
    if (langkah.tipe === 'diferensiasi') {
      teksEl.className = 'rt-focus-teks';
      teksEl.innerHTML = `
        <div class="rt-dif-row">
          <div class="rt-dif-cell rt-dif-cell--s">
            <div class="rt-dif-lbl rt-dif-lbl--s">Sudah bisa</div>
            ${_escape(langkah.sudah || '')}
          </div>
          <div class="rt-dif-cell rt-dif-cell--b">
            <div class="rt-dif-lbl rt-dif-lbl--b">Belum bisa</div>
            ${_escape(langkah.belum || '')}
          </div>
        </div>`;
    } else if (langkah.tipe === 'audio' || langkah.tipe === 'respons_siswa') {
      teksEl.className   = 'rt-focus-teks rt-focus-teks--quote';
      teksEl.textContent = `"${langkah.teks}"`;
    } else {
      // instruksi / darurat — plain, lebih kecil
      teksEl.className   = 'rt-focus-teks rt-focus-teks--plain';
      teksEl.textContent = langkah.teks || '';
    }
  }

  // Attention dim: reset, set timer untuk tipe yang perlu dim
  _rtUndim(tpData, false); // reset tanpa restart timer
  _rtStopDimTimer();
  const needsDim = langkah.tipe === 'audio' || langkah.tipe === 'instruksi';
  if (needsDim) {
    _rt.dimTimer = setTimeout(() => _rtDim(tpData), _rt.DIM_DELAY_MS);
  }

  // Nav buttons
  _rtRenderNav(tpData, langkahList, aktif);

  // Sitmap update
  _rtRenderSitmap(tpData);
}

function _rtRenderNav(tpData, langkahList, aktif) {
  const total     = langkahList.length;
  const isFirstL  = aktif === 0 && _rt.faseOffset === 0;
  const isLastL   = aktif === total - 1;
  const isLastF   = _rt.faseOffset === 2; // Penutup adalah fase terakhir

  const backEl  = document.getElementById('rt-fn-back');
  const infoEl  = document.getElementById('rt-fn-info');
  const fwdEl   = document.getElementById('rt-fn-fwd');

  if (backEl) {
    backEl.classList.toggle('rt-fn-btn--disabled', isFirstL);
    backEl.classList.remove('rt-fn-btn--primary');
  }

  if (infoEl) infoEl.textContent = `${aktif + 1}/${total}`;

  if (fwdEl) {
    if (isLastL && isLastF) {
      // Akhir Penutup — tawarkan selesai sesi
      fwdEl.textContent = 'Selesai sesi';
      fwdEl.onclick     = () => rtOpenSelesai();
    } else if (isLastL && !isLastF) {
      // Akhir fase, masih ada fase berikutnya
      const faseLabelMap = { 0: 'Inti', 1: 'Penutup' };
      fwdEl.textContent = `→ ${faseLabelMap[_rt.faseOffset] || 'Berikutnya'}`;
      fwdEl.onclick     = () => rtStepFwd();
    } else {
      // Normal: langkah berikutnya
      const next = langkahList[aktif + 1];
      fwdEl.textContent = RT_NEXT_LABELS[next?.tipe] || '→ Berikutnya';
      fwdEl.onclick     = () => rtStepFwd();
    }
    fwdEl.classList.add('rt-fn-btn--primary');
  }
}

// ── Situational Map Render ────────────────────────────────────
// Text-intensity only. Peripheral orientation.
// Bukan progress tracker.

function _rtRenderSitmap(tpData) {
  const fase      = _rtGetFase(tpData);
  if (!fase) return;
  const langkahList = fase.langkah || [];
  const aktif     = _rt.langkahIndex;
  const scroll    = document.getElementById('rt-sitmap');
  if (!scroll) return;

  const TIC  = { audio: '▶', respons_siswa: '💬', diferensiasi: '≠', darurat: '!', instruksi: '' };
  const TLBL = { audio: 'Ucapkan', respons_siswa: 'Siswa', diferensiasi: 'Dif', darurat: 'Darurat', instruksi: '' };

  scroll.innerHTML = langkahList.map((l, i) => {
    const cls = i < aktif ? 'rt-sm-txt--been'
              : i === aktif ? 'rt-sm-txt--now'
              : i === aktif + 1 ? 'rt-sm-txt--next'
              : '';
    const ic  = TIC[l.tipe] || '';
    // Label singkat — max 14 karakter, peripheral bukan detail
    const baseLbl = TLBL[l.tipe] || '';
    let lbl;
    if (l.tipe === 'instruksi' && l.teks) {
      lbl = l.teks.length > 14 ? l.teks.substring(0, 14) + '…' : l.teks;
    } else {
      lbl = baseLbl;
    }
    return `<div class="rt-sm-item" onclick="rtJumpStep(${i})">
      <span class="rt-sm-ic">${ic}</span>
      <span class="rt-sm-txt ${cls}">${_escape(lbl)}</span>
    </div>`;
  }).join('');

  // Auto-scroll item aktif ke view — tanpa animasi agresif
  requestAnimationFrame(() => {
    const nowEl = scroll.querySelector('.rt-sm-txt--now');
    if (nowEl) nowEl.parentElement?.scrollIntoView({ inline: 'nearest', block: 'nearest' });
  });
}

// ── Speaking Peripheral Render ────────────────────────────────
// Selalu hadir. Chips kecil tapi tappable.
// Distribusi bukan skor.

function _rtRenderSpk(siswaHadir) {
  const periph = document.getElementById('rt-spk-periph');
  if (!periph) return;
  if (!siswaHadir || siswaHadir.length === 0) {
    periph.innerHTML = '<span style="font-size:10px;color:rgba(255,255,255,.2);padding:0 4px;">Belum ada siswa</span>';
    return;
  }

  periph.innerHTML = siswaHadir.map(s => {
    const obs   = _rt.spkMap[s.id];
    let cls     = 'rt-spk-chip';
    if (obs === 'sudah') cls += ' rt-spk-chip--sudah';
    else if (obs !== null && obs !== undefined) cls += ' rt-spk-chip--obs';
    const first = _rtFirstName(s.nama);
    return `<span class="${cls}" data-sid="${s.id}" onclick="rtTapSiswa('${s.id}')">${_escape(first)}</span>`;
  }).join('');

  // Peripheral band: awareness strip
  _rtRenderPeriphAw(siswaHadir);

  // Jika awareness sedang visible, update nama-nama
  if (_rt.dimmed) _rtRenderAwNames(siswaHadir);
}

function _rtRenderPeriphAw(siswaHadir) {
  const awEl  = document.getElementById('rt-p-aw');
  if (!awEl) return;
  const belum = siswaHadir.filter(s => _rt.spkMap[s.id] !== 'sudah');

  if (belum.length === 0) {
    awEl.innerHTML = '<span class="rt-aw-ok">Semua sudah speaking ✓</span>';
  } else if (belum.length === siswaHadir.length) {
    awEl.textContent = 'Ketuk nama untuk catat speaking turn';
  } else {
    const names = belum.slice(0, 4).map(s => _rtFirstName(s.nama)).join(', ');
    const more  = belum.length > 4 ? ` +${belum.length - 4}` : '';
    awEl.innerHTML = `Belum: <span class="rt-aw-al">${_escape(names + more)}</span>`;
  }
}

// ── Attention States ──────────────────────────────────────────

function _rtDim(tpData) {
  _rt.dimmed = true;
  const cueEl = document.getElementById('rt-focus-cue');
  const awEl  = document.getElementById('rt-focus-aw');
  if (cueEl) cueEl.classList.add('rt-focus-cue--dimmed');

  const hadir = (_flow.siswaList || []).filter(s => _flow.statusMap[s.id] === 'H');
  const siswa = hadir.length > 0 ? hadir : (_flow.siswaList || []);
  _rtRenderAwNames(siswa);

  if (awEl) awEl.classList.add('rt-focus-aw--visible');
}

function _rtUndim(tpData, restartTimer = true) {
  _rt.dimmed = false;
  const cueEl = document.getElementById('rt-focus-cue');
  const awEl  = document.getElementById('rt-focus-aw');
  if (cueEl) cueEl.classList.remove('rt-focus-cue--dimmed');
  if (awEl)  awEl.classList.remove('rt-focus-aw--visible');

  if (restartTimer) {
    _rtStopDimTimer();
    const fase = _rtGetFase(tpData);
    if (fase) {
      const l = (fase.langkah || [])[_rt.langkahIndex];
      if (l && (l.tipe === 'audio' || l.tipe === 'instruksi')) {
        _rt.dimTimer = setTimeout(() => _rtDim(tpData), _rt.DIM_DELAY_MS);
      }
    }
  }
}

function _rtRenderAwNames(siswaHadir) {
  const namesEl = document.getElementById('rt-aw-names');
  const subEl   = document.getElementById('rt-aw-sub');
  if (!namesEl) return;

  const belum = siswaHadir.filter(s => _rt.spkMap[s.id] !== 'sudah');

  if (belum.length === 0) {
    namesEl.innerHTML = '<span class="rt-aw-all-done">Semua sudah speaking turn</span>';
    if (subEl) subEl.textContent = '';
  } else {
    // Nama-nama dengan low-contrast — tenang, bukan alarm
    namesEl.innerHTML = belum.map(s => {
      const first = _rtFirstName(s.nama);
      return `<span class="rt-aw-name-chip" onclick="rtTapSiswa('${s.id}')">${_escape(first)}</span>`;
    }).join('');

    if (subEl) {
      subEl.textContent = belum.length === 1
        ? '1 siswa belum speaking turn'
        : `${belum.length} siswa belum speaking turn`;
    }
  }
}

function _rtStopDimTimer() {
  if (_rt.dimTimer) { clearTimeout(_rt.dimTimer); _rt.dimTimer = null; }
}

// ── Session Timer ─────────────────────────────────────────────

function _rtStartSessionTimer() {
  if (_rt.sessionTimer) return; // Sudah jalan
  _rt.sessionSec   = 0;
  _rt.sessionTimer = setInterval(() => {
    _rt.sessionSec++;
    const m   = Math.floor(_rt.sessionSec / 60);
    const s   = String(_rt.sessionSec % 60).padStart(2, '0');
    const el  = document.getElementById('rt-p-timer');
    if (el) el.textContent = `${m}:${s}`;
  }, 1000);
}

function _rtStopSessionTimer() {
  if (_rt.sessionTimer) { clearInterval(_rt.sessionTimer); _rt.sessionTimer = null; }
}

// ── Fase Timer (per-fase, optional) ──────────────────────────

function _rtStartFaseTimer(faseIdx, durasiMenit) {
  _rtStopFaseTimer();
  _rt.timerFaseIdx = faseIdx;
  _rt.timerSisa    = durasiMenit * 60;
}

function _rtStopFaseTimer() {
  if (_rt.timerInterval) { clearInterval(_rt.timerInterval); _rt.timerInterval = null; }
  _rt.timerFaseIdx = -1;
}

// ── Navigation ────────────────────────────────────────────────
// Navigasi langkah dalam fase, atau fase ke fase.

function _rtNavigate(tpData, direction) {
  const fase      = _rtGetFase(tpData);
  if (!fase) return;
  const langkahList = fase.langkah || [];
  const total     = langkahList.length;
  const next      = _rt.langkahIndex + direction;

  _rtTtsStop(); // Stop TTS saat pindah langkah

  // Guard: tpData valid
  if (!tpData) { console.warn('[RT] _rtNavigate: tpData null'); return; }

  if (direction > 0) {
    if (next < total) {
      _rt.langkahIndex = next;
    } else {
      // Akhir fase — coba ke fase berikutnya
      if (_rt.faseOffset < 2) {
        _rt.faseOffset++;
        _rt.langkahIndex = 0;
      } else {
        // Akhir runtime — tawarkan selesai
        rtOpenSelesai();
        return;
      }
    }
  } else {
    if (next >= 0) {
      _rt.langkahIndex = next;
    } else {
      // Awal fase — coba ke fase sebelumnya
      if (_rt.faseOffset > 0) {
        _rt.faseOffset--;
        const prevFase = _rtGetFase(tpData);
        _rt.langkahIndex = (prevFase?.langkah?.length || 1) - 1;
      }
    }
  }

  // Sync ke _skenario agar step nav di stepper tahu posisi
  _skenario.langkahIndex = _rt.langkahIndex;
  _skenario.stepIndex    = 2 + _rt.faseOffset;

  _rtRenderStep(tpData);
}

// ── Micro-context ─────────────────────────────────────────────

function _rtOpenMicro(siswaId) {
  _rt.currentStu = siswaId;
  const s     = (_flow.siswaList || []).find(x => x.id === siswaId);
  const first = s ? _rtFirstName(s.nama) : siswaId;

  const nameEl = document.getElementById('rt-micro-name');
  if (nameEl) nameEl.textContent = first;

  const micro = document.getElementById('rt-micro');
  if (micro) micro.classList.add('rt-micro--open');
}

function _rtCloseMicro() {
  const micro = document.getElementById('rt-micro');
  if (micro) micro.classList.remove('rt-micro--open');
  _rt.currentStu = null;
}

function _rtMicroAction(val) {
  if (!_rt.currentStu) return;
  const VALID_VALS = ['sudah', 'diam', 'pair', 'bantu'];
  if (!VALID_VALS.includes(val)) { console.warn('[RT] Invalid micro val:', val); return; }
  _rt.spkMap[_rt.currentStu] = val;
  _rtCloseMicro();

  const hadir = (_flow.siswaList || []).filter(s => _flow.statusMap[s.id] === 'H');
  const siswa = hadir.length > 0 ? hadir : (_flow.siswaList || []);
  _rtRenderSpk(siswa);
}

// ── Situasi Kelas ─────────────────────────────────────────────

function _rtPickSituasi(key, tpData) {
  const d = RT_SIT_DATA[key];
  if (!d) { console.warn('[RT] Situasi key tidak dikenal:', key); return; }

  _rt.situasiKey    = key;
  _rt.situasiActKey = d.key;

  const pickEl   = document.getElementById('rt-sit-pick');
  const respEl   = document.getElementById('rt-sit-resp');
  const lblEl    = document.getElementById('rt-sit-resp-lbl');
  const txtEl    = document.getElementById('rt-sit-resp-txt');
  const actEl    = document.getElementById('rt-sit-resp-act');

  if (pickEl) pickEl.style.display  = 'none';
  if (respEl) respEl.style.display  = 'block';
  if (lblEl)  lblEl.textContent     = d.lbl;
  if (txtEl)  txtEl.textContent     = d.resp;
  if (actEl)  actEl.textContent     = d.act;

  // Signal strip update
  document.querySelectorAll('.rt-sp').forEach(b => b.classList.remove('rt-sp--on', 'rt-sp--ok'));
  const stripEl = document.getElementById(`rt-sp-${key}`);
  if (stripEl) stripEl.classList.add(key === 'lancar' ? 'rt-sp--ok' : 'rt-sp--on');
}

function _rtCloseSitResp() {
  const pickEl = document.getElementById('rt-sit-pick');
  const respEl = document.getElementById('rt-sit-resp');
  if (pickEl) pickEl.style.display = 'block';
  if (respEl) respEl.style.display = 'none';
  _rtCloseOv('rt-ov-situasi');
}

function _rtDoSitAct(tpData) {
  const k = _rt.situasiActKey;
  _rtCloseSitResp();
  if (!k || k === 'close') return;

  if (k === 'penutup') { _rt.faseOffset = 2; _rt.langkahIndex = 0; }
  if (k === 'inti')    { _rt.faseOffset = 1; _rt.langkahIndex = 0; }

  _skenario.langkahIndex = 0;
  _skenario.stepIndex    = 2 + _rt.faseOffset;

  _rtRenderStep(tpData);
}

// ── Closure Surface ───────────────────────────────────────────
// Bukan overlay, bukan step baru.
// Runtime fade out → closure surface fade in, in-place.
// Transisi ritme, bukan perpindahan wizard.

async function _rtOpenSelesai() {
  if (_rt.closureMode) return; // Guard double-trigger
  _rt.closureMode    = true;
  _rt.closureKendala = null;

  _rtTtsStop();
  _rtStopDimTimer();
  _rtStopSessionTimer();

  // Data snapshot
  const hadir    = (_flow.siswaList || []).filter(s => _flow.statusMap[s.id] === 'H');
  const siswa    = hadir.length > 0 ? hadir : (_flow.siswaList || []);
  const spkCount = siswa.filter(s => _rt.spkMap[s.id] === 'sudah').length;
  const belum    = siswa.filter(s => _rt.spkMap[s.id] !== 'sudah');

  const surface = document.getElementById('rt-surface');
  if (!surface) {
    // Fallback: jika surface sudah tidak ada, langsung ke save
    console.warn('[RT] rt-surface tidak ditemukan saat closure — fallback langsung simpan');
    _rt.closureMode = false;
    await _doSelesaiSesi().catch(e => console.error('[RT] fallback selesai gagal:', e));
    return;
  }

  // Fade out runtime, fade in closure — di container yang sama
  surface.style.transition = 'opacity .35s ease';
  surface.style.opacity    = '0';

  setTimeout(() => {
    surface.innerHTML    = _rtBuildClosure(hadir, spkCount, belum);
    surface.style.opacity = '0';
    // Dua frame agar browser commit DOM dulu sebelum fade in
    requestAnimationFrame(() => requestAnimationFrame(() => {
      surface.style.opacity = '1';
    }));
  }, 350);
}

function _rtBuildClosure(hadir, spkCount, belum) {
  const { tp, rombel } = _flow;
  const totalH = hadir.length;
  if (!tp || !rombel) {
    console.warn('[RT] _rtBuildClosure: tp atau rombel null');
  }

  // SESSION SNAPSHOT — speaking distribution, bukan nilai
  const belumChips = belum.slice(0, 8).map(s =>
    `<span class="rt-cl-chip rt-cl-chip--belum">${_escape(_rtFirstName(s.nama))}</span>`
  ).join('');
  const moreBelum = belum.length > 8
    ? `<span class="rt-cl-chip rt-cl-chip--more">+${belum.length - 8}</span>`
    : '';

  const snapshotEl = spkCount === totalH
    ? `<div class="rt-cl-all-done">Semua ${totalH} siswa sudah speaking turn ✓</div>`
    : `<div class="rt-cl-dist">
        <span class="rt-cl-done">${spkCount}</span>
        <span class="rt-cl-dist-sep"> dari </span>
        <span class="rt-cl-total">${totalH}</span>
        <span class="rt-cl-dist-label"> sudah speaking turn</span>
      </div>
      ${belum.length > 0 ? `<div class="rt-cl-belum-row">${belumChips}${moreBelum}</div>` : ''}`;

  // QUICK REFLECTION — chips + textarea singkat
  const KENDALA_OPTS = [
    { val: 'lancar',          label: 'Lancar'          },
    { val: 'pair_kurang',     label: 'Pair kurang'     },
    { val: 'waktu_kurang',    label: 'Waktu kurang'    },
    { val: 'kurang_kondusif', label: 'Kurang kondusif' },
    { val: 'lainnya',         label: 'Lainnya'         },
  ];
  const kendalaChips = KENDALA_OPTS.map(k =>
    `<button class="rt-cl-kendala" id="rtcl-k-${k.val}"
       onclick="rtClKendala('${k.val}')">${k.label}</button>`
  ).join('');

  return `
<div class="rt-closure" id="rt-closure">

  <!-- Header: identitas sesi -->
  <div class="rt-cl-header">
    <div class="rt-cl-tp">TP ${String(tp?.nomor || 0).padStart(2,'0')} · ${_escape(tp?.nama || '')}</div>
    <div class="rt-cl-rombel">${_escape(rombel?.nama || '')}</div>
  </div>

  <!-- SESSION SNAPSHOT -->
  <div class="rt-cl-section">
    <div class="rt-cl-section-lbl">Speaking turn</div>
    ${snapshotEl}
  </div>

  <!-- QUICK REFLECTION -->
  <div class="rt-cl-section">
    <div class="rt-cl-section-lbl">Refleksi singkat</div>
    <div class="rt-cl-kendala-wrap" id="rtcl-kendala-wrap">
      ${kendalaChips}
    </div>
    <textarea
      id="rt-cl-catatan"
      class="rt-cl-textarea"
      placeholder="Catatan singkat (opsional)…"
      maxlength="200"
      rows="2"
    ></textarea>
  </div>

  <!-- SAVE & EXIT — satu tombol, jelas -->
  <div class="rt-cl-footer">
    <button class="rt-cl-save" id="rt-cl-save-btn" onclick="rtClSimpan()">
      ✓ Simpan &amp; Selesai
    </button>
  </div>

</div>`;
}

// ── TTS Runtime ──────────────────────────────────────────────
// Tidak ada tombol terpisah — tap focus cue = play/stop.
// Satu gesture, satu efek. Sistem mundur, guru fokus ke kelas.

function _rtTtsStop() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  _rt.ttsPlaying   = false;
  _rt.ttsUtterance = null;
  // Kembalikan visual cue ke state normal
  _rtTtsVisual(false);
}

function _rtTtsSpeak(teks) {
  if (!teks) return;
  if (!window.speechSynthesis) {
    // Fallback: tampilkan hint singkat di periph band
    const awEl = document.getElementById('rt-p-aw');
    if (awEl) {
      const prev = awEl.innerHTML;
      awEl.textContent = 'Audio tidak tersedia di browser ini';
      setTimeout(() => { awEl.innerHTML = prev; }, 2500);
    }
    return;
  }

  // Toggle: jika sedang play, stop
  if (_rt.ttsPlaying) {
    _rtTtsStop();
    return;
  }

  // Guard: speechSynthesis.speak() pada beberapa browser mobile
  // memerlukan resume() jika synthesis sedang paused
  try {
    if (window.speechSynthesis.paused) window.speechSynthesis.resume();
  } catch (_) { /* non-fatal */ }

  window.speechSynthesis.cancel();

  const u   = new SpeechSynthesisUtterance(teks);
  u.lang    = 'en-US';
  u.rate    = 0.85;
  u.pitch   = 1.0;
  u.onstart = () => {
    _rt.ttsPlaying = true;
    _rtTtsVisual(true);
  };
  u.onend = () => {
    _rt.ttsPlaying   = false;
    _rt.ttsUtterance = null;
    _rtTtsVisual(false);
  };
  u.onerror = () => {
    _rt.ttsPlaying   = false;
    _rt.ttsUtterance = null;
    _rtTtsVisual(false);
  };

  _rt.ttsUtterance = u;
  window.speechSynthesis.speak(u);
}

// Visual feedback pada focus cue saat TTS playing
// Subtle — hanya border tipis, tidak mengganggu teks
function _rtTtsVisual(playing) {
  const cueEl = document.getElementById('rt-focus-cue');
  if (!cueEl) return;
  if (playing) {
    cueEl.classList.add('rt-focus-cue--playing');
  } else {
    cueEl.classList.remove('rt-focus-cue--playing');
  }

  // Update indicator kecil di periph band
  const timerEl = document.getElementById('rt-p-timer');
  if (timerEl) {
    if (playing) {
      timerEl.dataset.baseText = timerEl.textContent;
      timerEl.textContent = '▶';
      timerEl.style.color = 'rgba(201,168,76,.6)';
    } else {
      timerEl.textContent = timerEl.dataset.baseText || '00:00';
      timerEl.style.color = '';
    }
  }
}

// ── Overlay helpers ───────────────────────────────────────────

function _rtOpenOv(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('rt-ov-back--open');
}

function _rtCloseOv(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('rt-ov-back--open');
    // Reset sit picker ke list view
    if (id === 'rt-ov-situasi') {
      const pickEl = document.getElementById('rt-sit-pick');
      const respEl = document.getElementById('rt-sit-resp');
      if (pickEl) pickEl.style.display = 'block';
      if (respEl) respEl.style.display = 'none';
    }
  }
}

// ── Helpers ───────────────────────────────────────────────────

function _rtGetFase(tpData) {
  if (!tpData?.skenario || !Array.isArray(tpData.skenario)) return null;
  const FASE_NAMES = ['Pembuka', 'Inti', 'Penutup'];
  // Guard: faseOffset harus 0-2
  const safeOffset = Math.max(0, Math.min(2, _rt.faseOffset || 0));
  if (safeOffset !== _rt.faseOffset) _rt.faseOffset = safeOffset;
  const name = FASE_NAMES[safeOffset];
  const fase = tpData.skenario.find(f => f.fase === name) || null;
  // Guard: jika fase tidak ditemukan, coba fase pertama yang ada
  if (!fase) {
    console.warn('[RT] Fase tidak ditemukan:', name, '— fallback ke skenario pertama');
    return tpData.skenario[0] || null;
  }
  return fase;
}

function _rtFirstName(nama) {
  if (!nama || typeof nama !== 'string') return '?';
  const trimmed = nama.trim();
  if (!trimmed) return '?';
  // Ambil nama pertama, max 12 karakter
  const first = trimmed.split(/\s+/)[0];
  return first.length > 12 ? first.substring(0, 11) + '…' : first;
}

function _rtSetText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// ── Global Handlers (window.*) ────────────────────────────────
// Dipanggil dari inline onclick di HTML runtime surface.
// Semua handler memerlukan tpData — diambil dari _flow state.

function _rtGetTpData() {
  return _getTP?.(_flow?.tp?.nomor) ?? null;
}

window.rtTapSiswa = function(siswaId) {
  _rtOpenMicro(siswaId);
};

window.rtMicroAction = function(val) {
  _rtMicroAction(val);
};

window.rtMicroClose = function() {
  _rtCloseMicro();
};

window.rtStepFwd = function() {
  const tpData = _rtGetTpData();
  if (tpData) _rtNavigate(tpData, 1);
};

window.rtStepBack = function() {
  const tpData = _rtGetTpData();
  if (tpData) _rtNavigate(tpData, -1);
};

window.rtJumpStep = function(idx) {
  const tpData = _rtGetTpData();
  if (!tpData) return;
  const fase   = _rtGetFase(tpData);
  const total  = fase?.langkah?.length || 0;
  if (idx >= 0 && idx < total) {
    _rt.langkahIndex       = idx;
    _skenario.langkahIndex = idx;
    _rtRenderStep(tpData);
  }
};

window.rtOpenSituasi = function(key) {
  const tpData = _rtGetTpData();
  _rtPickSituasi(key, tpData);
  _rtOpenOv('rt-ov-situasi');
};

window.rtPickSituasi = function(key) {
  const tpData = _rtGetTpData();
  _rtPickSituasi(key, tpData);
};

window.rtCloseSitResp = function() {
  _rtCloseSitResp();
};

window.rtDoSitAct = function() {
  const tpData = _rtGetTpData();
  _rtDoSitAct(tpData);
};

window.rtOpenOv = function(id) {
  _rtOpenOv(id);
};

window.rtCloseOv = function(id) {
  _rtCloseOv(id);
};

window.rtOpenSelesai = async function() {
  await _rtOpenSelesai();
};

// rtKonfirmasiSelesai — tidak lagi dipakai dari runtime overlay.
// Dipertahankan sebagai fallback jika ada referensi lain.
window.rtKonfirmasiSelesai = async function() {
  _rtOpenSelesai();
};

// ── Closure Surface Handlers ──────────────────────────────────

window.rtClKendala = function(val) {
  _rt.closureKendala = val;
  // Toggle aktif — hanya satu bisa aktif
  document.querySelectorAll('.rt-cl-kendala').forEach(btn => {
    btn.classList.toggle('rt-cl-kendala--active', btn.id === `rtcl-k-${val}`);
  });
};

window.rtClSimpan = async function() {
  if (!_rt.closureMode) return; // Guard: double-call prevention
  const saveBtn = document.getElementById('rt-cl-save-btn');
  if (saveBtn) {
    saveBtn.disabled    = true;
    saveBtn.textContent = 'Menyimpan…';
  }

  // Ambil catatan dari textarea closure
  const catatan = document.getElementById('rt-cl-catatan')?.value?.trim() || null;

  // Inject ke _skenario agar _doSelesaiSesi bisa baca
  _skenario.kendala = _rt.closureKendala;

  // Inject refleksi — _doSelesaiSesi mencari #sesi-refleksi
  // Kita buat element sementara di luar DOM
  let tempRefleksi = null;
  if (catatan) {
    tempRefleksi          = document.createElement('textarea');
    tempRefleksi.id       = 'sesi-refleksi';
    tempRefleksi.value    = catatan;
    tempRefleksi.style.display = 'none';
    document.body.appendChild(tempRefleksi);
  }

  try {
    // Unmount runtime sebelum _doSelesaiSesi agar tidak ada
    // konflik DOM saat dashKeLanding me-replace container
    _rtUnmount();
    _rt.closureMode    = false;
    _rt.closureKendala = null;

    await _doSelesaiSesi();
  } catch (err) {
    console.error('[RT] rtClSimpan gagal:', err.message);
    // Restore button jika gagal
    if (saveBtn) {
      saveBtn.disabled    = false;
      saveBtn.textContent = '✓ Simpan & Selesai';
    }
  } finally {
    tempRefleksi?.remove();
  }
};


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
    container.innerHTML = await _buildLandingHTML(session, kelasList, rekapMap, jejakStreak, jejakSummary);
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
  { min: 0,  max: 3,        emoji: '🌱', nama: 'Pemula',            gaji: 'TP 1–3 selesai' },
  { min: 4,  max: 8,        emoji: '📚', nama: 'Fondasi Terbentuk', gaji: 'TP 4–8 selesai' },
  { min: 9,  max: 13,       emoji: '⭐', nama: 'Kosakata Meluas',   gaji: 'TP 9–13 selesai' },
  { min: 14, max: 17,       emoji: '🏅', nama: 'Integrasi Aktif',   gaji: 'TP 14–17 selesai' },
  { min: 18, max: Infinity, emoji: '🏆', nama: 'Fase A Tuntas',     gaji: 'Semua 18 TP selesai' },
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
  const nextText = lv.next && hariAktif > 0
    ? `${lv.next.min - hariAktif} hari lagi → ${lv.next.nama}`
    : lv.next ? '' : '🏆 Level Tertinggi!';

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
        <div id="jejak-card-level-gaji" class="ds-level-gaji" style="${hariAktif > 0 ? '' : 'display:none;'}">${lv.current.gaji}</div>
      </div>
    </div>
    <div class="ds-jejak-progress-wrap">
      <div class="ds-jejak-progress-inner">
        <div id="jejak-card-next-text" class="ds-progress-next-text">${nextText}</div>
        <div class="ds-progress-track">
          <div id="jejak-card-bar" class="ds-progress-fill" style="width:${barPct}%;"></div>
        </div>
        <div id="jejak-card-bar-label" class="ds-progress-bar-label" style="${hariAktif > 0 ? '' : 'display:none;'}">${lv.progressInLevel}/${lv.levelSpan !== null ? lv.levelSpan + ' hari' : '60+ hari ✔'} di level ini</div>
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

async function _buildLandingHTML(session, kelasList, rekapMap, streak, jejakSummary) {
  const hariAktif   = jejakSummary.hari_aktif || 0;
  const pertemuan   = jejakSummary.pertemuan  || 0;
  const tpSelesai   = jejakSummary.tp_selesai || 0;
  const streakEmoji = streak === 0 ? '📚' : streak < 3 ? '✨' : streak < 7 ? '⚡' : streak < 14 ? '🌟' : '🔥';
  const streakLabel = streak === 0 ? 'Belum ada aktivitas' : streak < 3 ? 'Awal yang bagus!' : streak < 7 ? 'Terus semangat!' : streak < 14 ? 'Guru Konsisten!' : 'Luar Biasa!';

  const tpSelesaiPerRombel = {};
  for (const k of kelasList) {
    try {
      const selesaiSet = await jejak.getTPSelesaiPerRombel(k.nama);
      const range = k.tingkat === 2 ? [10,11,12,13,14,15,16,17,18] : [1,2,3,4,5,6,7,8,9];
      const selesaiDiRange = range.filter(n => selesaiSet.has(n));
      if (selesaiDiRange.length === 0) {
        tpSelesaiPerRombel[k.id] = { nomor: range[0], label: `Mulai TP ${String(range[0]).padStart(2,'0')}` };
      } else {
        const maks = Math.max(...selesaiDiRange);
        const next = range.find(n => n > maks);
        if (next) {
          tpSelesaiPerRombel[k.id] = { nomor: next, label: `Lanjut → TP ${String(next).padStart(2,'0')}` };
        } else {
          tpSelesaiPerRombel[k.id] = { nomor: null, label: 'Semua TP selesai ✓' };
        }
      }
    } catch {
      tpSelesaiPerRombel[k.id] = null;
    }
  }

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
    ${kelasList.map(k => {
      const lanjut = tpSelesaiPerRombel[k.id];
      const lanjutHTML = lanjut
        ? `<div style="margin-top:4px;font-size:12px;color:${lanjut.nomor ? '#D4AE3A' : 'rgba(255,255,255,.4)'};">${_escape(lanjut.label)}</div>`
        : '';
      return `
    <div onclick="dashPilihRombel('${k.id}','${k.nama.replace(/'/g, "\\'")}',${k.tingkat || 1})"
         class="ds-list-item">
      <div>
        <div class="ds-list-item-name">${_escape(k.nama)}</div>
        <div class="ds-list-item-sub">TP ${k.tingkat === 2 ? '10–18' : '1–9'} · ${rekapMap[k.id]?.totalSiswa ?? 0} siswa</div>
        ${lanjutHTML}
      </div>
      <div class="ds-list-arrow">›</div>
    </div>`;
    }).join('')}
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

async function _buildPilihTPHTML() {
  const tpList = _tpList(_flow.rombel.tingkat);
  let tpSelesaiSet = new Set();
  try {
    tpSelesaiSet = await jejak.getTPSelesaiPerRombel(_flow.rombel.nama);
  } catch { /* abaikan error */ }

  const tpHTML = tpList.map(tp => {
    const sudah = tpSelesaiSet.has(tp.nomor);
    return `
  <div onclick="dashPilihTP(${tp.nomor},'${_escape(tp.nama)}')" class="ds-list-item" style="${sudah ? 'opacity:.65;' : ''}">
    <div style="width:28px;height:28px;border-radius:50%;background:${sudah ? 'rgba(212,174,58,.25)' : 'rgba(212,174,58,.15)'};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <span style="font-size:15px;font-weight:700;color:#D4AE3A;">${sudah ? '✓' : tp.nomor}</span>
    </div>
    <div style="flex:1;min-width:0;">
      <div class="ds-list-item-name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${_escape(tp.nama)}</div>
      ${sudah ? `<div style="font-size:11px;color:rgba(212,174,58,.6);margin-top:1px;">Sudah diajarkan</div>` : ''}
    </div>
    <div class="ds-list-arrow">›</div>
  </div>`;
  }).join('');

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

// --- MATERI PANEL ------------------------------------------------------------

function _buildTabMateri(tp) {
  const indikatorHTML = tp.indikator.map((ind, i) => `
    <div class="ds-indikator-item">
      <div class="ds-siswa-nomor ds-siswa-nomor--sage">${i+1}</div>
      <div class="ds-indikator-teks">${_escape(ind)}</div>
    </div>`).join('');

  const vocabHTML = tp.vocab.map((v, vi) =>
    `<span class="ds-vocab-chip" onclick="dashTTS(${vi + 1000},'${_escapeTTS(v)}')" style="cursor:pointer;" title="Putar audio">▶ ${_escape(v)}</span>`
  ).join('');

  const persiapanHTML = (tp.persiapan && tp.persiapan.length > 0) ? `
    <div class="ds-sub-label" style="margin-top:10px;">Siapkan Sebelum Kelas</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px;">
      ${tp.persiapan.map(p => `<span style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:6px;padding:4px 10px;font-size:12px;color:rgba(255,255,255,.7);">📌 ${_escape(p)}</span>`).join('')}
    </div>` : '';

  const cpHTML = `
    <div style="margin-top:10px;padding:8px 10px;background:rgba(212,174,58,.06);border-radius:8px;border-left:2px solid rgba(212,174,58,.3);">
      <div style="font-size:11px;color:rgba(212,174,58,.6);font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:3px;">Tujuan Akhir Fase A</div>
      <div style="font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;">Peserta didik menggunakan bahasa Inggris sederhana untuk berinteraksi dalam situasi sosial dan kelas.</div>
      <button onclick="window.__FLAF_NAV__?.navigateTo('s-jadwal')" style="margin-top:6px;background:transparent;border:none;color:rgba(212,174,58,.7);font-size:12px;cursor:pointer;padding:0;font-family:inherit;">Lihat Kurikulum lengkap →</button>
    </div>`;

  return `
    <div class="ds-materi-meta">${_escape(tp.tema)}</div>
    <div class="ds-materi-desc">${_escape(tp.deskripsi)}</div>
    ${persiapanHTML}
    <div class="ds-sub-label">Indikator</div>
    ${indikatorHTML}
    <div class="ds-sub-label" style="margin-top:10px;">Kosakata Kunci <span style="font-size:10px;color:rgba(255,255,255,.4);font-weight:400;">(ketuk untuk audio)</span></div>
    <div class="ds-vocab-wrap">${vocabHTML}</div>
    ${cpHTML}`;
}

// --- STEP 0: MATERI ----------------------------------------------------------

function _buildStepMateri(tp) {
  if (!tp) return `<div class="ds-step-empty">Data materi tidak tersedia.</div>`;
  return `
  <div class="ds-card ds-card--overflow" style="padding:14px 16px;">
    <div class="ds-section-label" style="margin-bottom:10px;">Materi & Persiapan</div>
    ${_buildTabMateri(tp)}
  </div>`;
}

// --- STEP 1: PRESENSI --------------------------------------------------------

const PRESENSI_STATUS_CFG = {
  H: { bg: 'rgba(212,174,58,.12)',  color: '#D4AE3A',               dot: 'rgba(212,174,58,.25)'  },
  S: { bg: 'rgba(255,255,255,.05)', color: 'rgba(255,255,255,.55)', dot: 'rgba(255,255,255,.12)' },
  I: { bg: 'rgba(255,255,255,.03)', color: 'rgba(255,255,255,.35)', dot: 'rgba(255,255,255,.08)' },
  A: { bg: 'transparent',           color: 'rgba(255,255,255,.2)',  dot: 'rgba(255,255,255,.06)' },
};

function _buildStepPresensi() {
  const { siswaList, statusMap } = _flow;
  const total  = siswaList.length;
  const totalH = Object.values(statusMap).filter(v => v === 'H').length;

  if (total === 0) {
    return `
    <div class="ds-card" style="padding:20px;text-align:center;">
      <div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:12px;">
        Belum ada siswa di rombel ini.
      </div>
      <button onclick="dashKeLayarNilai()" class="ds-btn-back"
        style="color:#D4AE3A;border-color:rgba(212,174,58,.4);">
        + Tambah Siswa di Layar Nilai
      </button>
    </div>`;
  }

  const totalPages = Math.max(1, Math.ceil(total / SISWA_PER_HALAMAN));
  const safePage   = Math.max(0, Math.min(_skenario.presensiPage, totalPages - 1));
  if (safePage !== _skenario.presensiPage) _skenario.presensiPage = safePage;
  const startIdx   = safePage * SISWA_PER_HALAMAN;
  const endIdx     = Math.min(startIdx + SISWA_PER_HALAMAN, total);
  const halaman    = siswaList.slice(startIdx, endIdx);

  const navPrevDisabled = safePage <= 0;
  const navNextDisabled = safePage >= totalPages - 1;
  const nextStart       = endIdx + 1;
  const nextEnd         = Math.min(endIdx + SISWA_PER_HALAMAN, total);

  const siswaHTML = halaman.map(s => {
    const st  = statusMap[s.id] || 'A';
    const cfg = PRESENSI_STATUS_CFG[st];
    return `
    <div id="presensi-row-${s.id}" class="ds-presensi-row" style="background:${cfg.bg};">
      <div class="ds-siswa-nomor">${s.nomor}</div>
      <div class="ds-siswa-nama">${_escape(s.nama)}</div>
      <div class="ds-status-btns">
        ${['H','S','I','A'].map(k => `
        <button onclick="dashSetStatus('${s.id}','${k}')" class="ds-status-btn"
          style="border-color:${st===k ? PRESENSI_STATUS_CFG[k].color : 'rgba(255,255,255,.1)'};
                 background:${st===k ? PRESENSI_STATUS_CFG[k].dot : 'transparent'};
                 color:${st===k ? PRESENSI_STATUS_CFG[k].color : 'rgba(255,255,255,.25)'};">
          ${k}
        </button>`).join('')}
      </div>
    </div>`;
  }).join('');

  return `
  <div class="ds-card ds-card--overflow">
    <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 16px 10px;">
      <div class="ds-section-label" style="margin:0;">Presensi</div>
      <div id="presensi-count" style="font-size:14px;font-weight:700;color:#D4AE3A;">
        ${totalH > 0 ? `${totalH}/${total} hadir` : ''}
      </div>
    </div>
    <div class="ds-penilaian-progress" style="margin:0 16px 10px;">
      Halaman ${safePage + 1}/${totalPages} · Hadir ${totalH}/${total}
    </div>
    <div class="ds-asesmen-list">${siswaHTML}</div>
    <div class="ds-asesmen-nav" style="padding:10px 16px 14px;">
      <button onclick="dashPresensiPrev()" class="ds-page-btn"
        ${navPrevDisabled ? 'disabled' : ''}>‹ Sebelumnya</button>
      <button onclick="dashPresensiNext()" class="ds-page-btn ds-page-btn--primary"
        ${navNextDisabled ? 'disabled' : ''}>
        ${navNextDisabled ? 'Halaman Terakhir' : `Lanjut → ${nextStart}–${nextEnd}`}
      </button>
    </div>
  </div>`;
}

// --- STEP 2–4: FASE (Pembuka / Inti / Penutup) --------------------------------

const PM_CFG = {
  mindful  : { label: 'Mindful',   color: 'rgba(120,180,255,.9)', bg: 'rgba(120,180,255,.12)', border: 'rgba(120,180,255,.3)' },
  meaningful: { label: 'Bermakna', color: 'rgba(100,220,160,.9)', bg: 'rgba(100,220,160,.1)',  border: 'rgba(100,220,160,.3)' },
  joyful   : { label: 'Joyful',   color: 'rgba(255,190,80,.9)',  bg: 'rgba(255,190,80,.1)',   border: 'rgba(255,190,80,.3)'  },
};

function _buildStepFase(tpData, step) {
  const fase = _getFaseData(tpData, step);
  if (!fase) return `<div class="ds-step-empty">Data fase tidak tersedia.</div>`;

  const langkahList = fase.langkah || [];
  const total       = langkahList.length;
  const aktif       = Math.max(0, Math.min(_skenario.langkahIndex, total - 1));

  const langkahHTML = langkahList.map((l, idx) => {
    const tipe    = l.tipe;
    const isAktif = idx === aktif;
    const isDone  = idx < aktif;
    const pm      = l.pm ? PM_CFG[l.pm] : null;

    // Tentukan class item
    let itemClass = 'ds-langkah-item';
    if (isAktif)                  itemClass += ' ds-langkah-item--aktif';
    if (isDone)                   itemClass += ' ds-langkah-item--done';
    if (tipe === 'diferensiasi')  itemClass += ' ds-langkah-item--diferensiasi';
    if (tipe === 'darurat')       itemClass += ' ds-langkah-item--darurat';
    if (tipe === 'respons_siswa') itemClass += ' ds-langkah-item--respons';

    // Badge PM (pojok kanan atas)
    const pmBadge = pm ? `
      <div class="ds-pm-badge" style="background:${pm.bg};border-color:${pm.border};color:${pm.color};">
        ${pm.label}
      </div>` : '';

    // Nomor/ikon kiri
    let numHTML;
    if (isDone) {
      numHTML = `<div class="ds-langkah-num ds-langkah-num--done">✓</div>`;
    } else if (tipe === 'audio') {
      numHTML = `<div class="ds-langkah-num ds-langkah-num--audio">▶</div>`;
    } else if (tipe === 'respons_siswa') {
      numHTML = `<div class="ds-langkah-num ds-langkah-num--respons">💬</div>`;
    } else if (tipe === 'diferensiasi') {
      numHTML = `<div class="ds-langkah-num ds-langkah-num--dif">≠</div>`;
    } else if (tipe === 'darurat') {
      numHTML = `<div class="ds-langkah-num ds-langkah-num--darurat">!</div>`;
    } else {
      numHTML = `<div class="ds-langkah-num">${idx + 1}</div>`;
    }

    // Konten body sesuai tipe
    let bodyHTML;
    if (tipe === 'audio') {
      bodyHTML = `
        <div style="flex:1;">
          <div class="ds-langkah-audio-label">Ucapkan ke siswa</div>
          <div class="ds-langkah-audio-teks">"${_escape(l.teks)}"</div>
          ${isAktif ? `<button onclick="dashTTS(${idx},'${_escapeTTS(l.teks)}')"
            id="tts-btn-${idx}" class="ds-tts-btn-inline">▶ Putar Audio</button>` : ''}
        </div>`;
    } else if (tipe === 'respons_siswa') {
      bodyHTML = `
        <div style="flex:1;">
          <div class="ds-langkah-audio-label" style="color:rgba(160,220,255,.7);">Respons siswa</div>
          <div class="ds-langkah-audio-teks" style="color:rgba(160,220,255,.9);">"${_escape(l.teks)}"</div>
          ${isAktif ? `<button onclick="dashTTS(${idx},'${_escapeTTS(l.teks)}')"
            id="tts-btn-${idx}" class="ds-tts-btn-inline" style="border-color:rgba(160,220,255,.4);color:rgba(160,220,255,.9);">▶ Putar Contoh</button>` : ''}
        </div>`;
    } else if (tipe === 'diferensiasi') {
      bodyHTML = `
        <div style="flex:1;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:rgba(100,180,255,.08);border:1px solid rgba(100,180,255,.2);border-radius:8px;padding:8px 10px;">
              <div style="font-size:10px;font-weight:700;color:rgba(100,180,255,.7);letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px;">Sudah bisa</div>
              <div style="font-size:12px;color:rgba(255,255,255,.8);line-height:1.5;">${_escape(l.sudah)}</div>
            </div>
            <div style="background:rgba(255,160,80,.08);border:1px solid rgba(255,160,80,.2);border-radius:8px;padding:8px 10px;">
              <div style="font-size:10px;font-weight:700;color:rgba(255,160,80,.7);letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px;">Belum bisa</div>
              <div style="font-size:12px;color:rgba(255,255,255,.8);line-height:1.5;">${_escape(l.belum)}</div>
            </div>
          </div>
        </div>`;
    } else if (tipe === 'darurat') {
      bodyHTML = `
        <div style="flex:1;">
          <div style="font-size:10px;font-weight:700;color:rgba(255,160,80,.7);letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px;">Jika waktu tersisa ≤10 menit</div>
          <div style="font-size:13px;color:rgba(255,255,255,.8);line-height:1.5;">${_escape(l.teks)}</div>
        </div>`;
    } else {
      bodyHTML = `<div class="ds-langkah-teks">${_escape(l.teks)}</div>`;
    }

    return `
    <div class="${itemClass}" onclick="dashLangkahPilih(${idx})">
      ${numHTML}
      ${bodyHTML}
      ${pmBadge}
    </div>`;
  }).join('');

  const metaHTML = fase.durasi
    ? `<span class="ds-fase-durasi">${fase.durasi} menit</span>` : '';

  const timerHTML = fase.durasi ? `
    <button onclick="dashStartTimer(99,${fase.durasi})" id="fase-timer-99-btn"
      class="ds-timer-btn">▶ Timer</button>
    <span id="fase-timer-99" class="ds-timer-display" style="display:none;"></span>` : '';

  return `
  <div class="ds-card ds-card--overflow" style="padding:14px 16px;">
    <div class="ds-fase-header">
      <div style="display:flex;align-items:center;gap:8px;">
        <div class="ds-section-label" style="margin:0;">${_escape(fase.fase)}</div>
        ${metaHTML}
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        ${timerHTML}
        <button onclick="dashTTSStop()" class="ds-tts-stop">⏹ Stop</button>
      </div>
    </div>
    <div class="ds-langkah-list">
      ${langkahHTML}
    </div>
  </div>`;
}

// --- STEP 5: ASESMEN ---------------------------------------------------------

function _buildStepAsesmen() {
  const warn = _skenario.warnAsesmen;

  const warnHTML = warn ? `
  <div class="ds-warn-banner" id="asesmen-warn">
    <div class="ds-warn-title">⚠ Asesmen belum diisi</div>
    <div class="ds-warn-desc">Anda bisa lewati asesmen, tapi data nilai tidak akan tercatat untuk sesi ini.</div>
    <div class="ds-warn-actions">
      <button onclick="dashWarnBatalkan()" class="ds-warn-btn ds-warn-btn--cancel">← Kembali Isi</button>
      <button onclick="dashWarnLanjut()" class="ds-warn-btn ds-warn-btn--ok">Lewati Asesmen</button>
    </div>
  </div>` : '';

  return `
  ${warnHTML}
  <div class="ds-card ds-card--overflow">
    ${_buildAsesmenPaginated()}
  </div>`;
}

// --- STEP 6: SELESAI ---------------------------------------------------------

function _buildStepSelesai() {
  const { rombel, tp } = _flow;
  const totalH  = Object.values(_flow.statusMap).filter(v => v === 'H').length;
  const total   = (_flow.siswaList || []).length;
  const dinilai = _hitungSiswaDinilai();

  return `
  <div class="ds-card" style="padding:16px;">
    <div class="ds-section-label" style="margin-bottom:8px;">Ringkasan Sesi</div>
    <div class="ds-selesai-ringkasan">
      <div class="ds-ringkasan-row">
        <span class="ds-ringkasan-label">Rombel</span>
        <span class="ds-ringkasan-val">${_escape(rombel.nama)}</span>
      </div>
      <div class="ds-ringkasan-row">
        <span class="ds-ringkasan-label">TP</span>
        <span class="ds-ringkasan-val">TP ${String(tp.nomor).padStart(2,'0')} · ${_escape(tp.nama)}</span>
      </div>
      <div class="ds-ringkasan-row">
        <span class="ds-ringkasan-label">Hadir</span>
        <span class="ds-ringkasan-val">${totalH}/${total} siswa</span>
      </div>
      <div class="ds-ringkasan-row">
        <span class="ds-ringkasan-label">Dinilai</span>
        <span class="ds-ringkasan-val" style="color:${dinilai > 0 ? '#D4AE3A' : 'rgba(255,255,255,.4)'};">
          ${dinilai}/${total} siswa
        </span>
      </div>
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
    <div style="margin-top:12px;">
      <div class="ds-sub-label" style="font-size:12px;color:rgba(255,255,255,.55);margin-bottom:6px;">Kendala sesi</div>
      <div class="ds-kendala-wrap">
        ${[
          { val: 'lancar',          label: 'Lancar'          },
          { val: 'waktu_kurang',    label: 'Waktu kurang'    },
          { val: 'kurang_kondusif', label: 'Kurang kondusif' },
          { val: 'media_tidak_ada', label: 'Media tidak ada' },
          { val: 'lainnya',         label: 'Lainnya'         },
        ].map(k => `
        <button onclick="dashPilihKendala('${k.val}')"
          id="kendala-btn-${k.val}"
          class="ds-kendala-btn ${_skenario.kendala === k.val ? 'ds-kendala-btn--active' : ''}">
          ${k.label}
        </button>`).join('')}
      </div>
    </div>
  </div>`;
}

// --- VIEW: SESI BERLANGSUNG --------------------------------------------------

function _buildSesiHTML() {
  const { rombel, tp } = _flow;
  const tpData  = _getTP(tp.nomor);
  const step    = _skenario.stepIndex;
  const isFirst = step === 0;
  const isLast  = step === 6;

  return `
<div class="ds-wrap ds-stepper-wrap" style="height:100%;overflow:hidden;padding-bottom:0;">

  <div class="ds-breadcrumb">
    <button onclick="dashKeLanding()" class="ds-btn-back">← Rombel</button>
    <button onclick="dashKePilihTP()" class="ds-btn-back">← TP</button>
    <div class="ds-breadcrumb-label">TP ${tp.nomor} · ${_escape(rombel.nama)}</div>
  </div>

  <div class="ds-sesi-header">
    <div class="ds-sesi-tag">SESI BERLANGSUNG</div>
    <div class="ds-sesi-tp-num">TP ${String(tp.nomor).padStart(2,'0')}</div>
    <div class="ds-sesi-tp-name">${_escape(tp.nama)}</div>
    <div class="ds-sesi-rombel">${_escape(rombel.nama)}</div>
    <div class="ds-sesi-date">${new Date().toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
  </div>

  ${_buildStepIndicator(step)}

  <div id="ds-step-body" class="ds-step-body">
    ${_buildStepBody(tpData, step)}
  </div>

  <div class="ds-step-nav" id="ds-step-nav">
    <button
      onclick="dashStepPrev()"
      class="ds-step-btn ds-step-btn--prev"
      ${isFirst ? 'disabled' : ''}>
      ← Sebelumnya
    </button>
    ${isLast
      ? `<button onclick="dashSelesaiSesi()" class="ds-step-btn ds-step-btn--selesai">✓ Simpan & Selesai</button>`
      : `<button onclick="dashStepNext()" class="ds-step-btn ds-step-btn--next">Lanjut →</button>`
    }
  </div>

</div>`;
}

function _buildStepIndicator(step) {
  const dots = STEPS.map((s, i) => {
    const state = i < step ? 'done' : i === step ? 'active' : 'idle';
    return `<div class="ds-step-dot ds-step-dot--${state}" title="${s.label}"></div>`;
  }).join('');
  return `
  <div class="ds-step-indicator">
    <div class="ds-step-label">${STEPS[step].label}</div>
    <div class="ds-step-dots">${dots}</div>
  </div>`;
}

function _buildStepBody(tpData, step) {
  switch (step) {
    case 0: return _buildStepMateri(tpData);
    case 1: return _buildStepPresensi();
    case 2:
    case 3:
    case 4:
      // Runtime v6: step 2-4 = persistent classroom surface
      // DOM disiapkan oleh _rtMount — bukan di sini
      return '<div id="rt-surface-placeholder" style="height:100%;"></div>';
    case 5: return _buildStepAsesmen();
    case 6: return _buildStepSelesai();
    default: return '';
  }
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
  const modeCepat   = _skenario.asesmenModeCepat || false;

  const navPrevDisabled = safePage <= 0;
  const navNextDisabled = safePage >= totalPages - 1;
  const nextStart       = endIdx + 1;
  const nextEnd         = Math.min(endIdx + SISWA_PER_HALAMAN, total);

  let siswaHTML;
  if (modeCepat) {
    siswaHTML = halaman.map(s => {
      const cached  = _flow.nilaiCache?.[s.id];
      const aktif   = cached?.cepatPilihan || null;
      const catatan = cached?.catatan || '';
      const btnStyle = (k) =>
        `font-size:16px;width:36px;height:36px;border-radius:8px;cursor:pointer;font-family:inherit;` +
        `border:1px solid ${aktif === k ? '#D4AE3A' : 'rgba(255,255,255,.15)'};` +
        `background:${aktif === k ? 'rgba(212,174,58,.2)' : 'rgba(255,255,255,.05)'};` +
        `color:${aktif === k ? '#D4AE3A' : 'rgba(255,255,255,.4)'};`;
      return `
      <div style="padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.05);">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <div class="ds-siswa-nomor ds-siswa-nomor--sage" style="flex-shrink:0;">${s.nomor}</div>
          <div style="flex:1;font-size:13px;color:rgba(255,255,255,.85);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${_escape(s.nama)}</div>
          <div style="display:flex;gap:6px;flex-shrink:0;">
            <button onclick="dashNilaiCepat('${s.id}','sudah')" style="${btnStyle('sudah')}">★</button>
            <button onclick="dashNilaiCepat('${s.id}','perlu')" style="${btnStyle('perlu')}">◐</button>
            <button onclick="dashNilaiCepat('${s.id}','belum')" style="${btnStyle('belum')}">○</button>
          </div>
        </div>
        <input type="text" placeholder="Observasi singkat..." maxlength="100"
          value="${_escape(catatan)}"
          onblur="dashCatatanCepat('${s.id}',this.value)"
          style="width:100%;padding:6px 8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:6px;color:rgba(255,255,255,.7);font-size:12px;font-family:inherit;box-sizing:border-box;"
          onfocus="this.style.borderColor='rgba(212,174,58,.3)'">
      </div>`;
    }).join('');
  } else {
    siswaHTML = halaman.map(s => _buildSiswaCollapseItem(s)).join('');
  }

  return `
  <div style="padding:14px 16px;">
    <div class="ds-penilaian-header">
      <div class="ds-penilaian-title">Asesmen L / S / R</div>
      <div class="ds-penilaian-note">
        ${modeCepat
          ? `<span style="color:rgba(212,174,58,.85);">★ Sudah bisa &nbsp;·&nbsp; ◐ Perlu latihan &nbsp;·&nbsp; ○ Belum bisa</span>`
          : `<span style="color:rgba(212,174,58,.85);">L: Listening &nbsp; S: Speaking &nbsp; R: Reading</span><br>Observasi proses — tidak masuk nilai rapor`}
      </div>
    </div>

    <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0 4px;">
      <div class="ds-penilaian-progress" style="margin:0;">
        Halaman ${safePage + 1}/${totalPages} · Dinilai ${dinilaiCount}/${total}
      </div>
      <button onclick="dashToggleAsesmenMode()" style="font-size:11px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.6);border-radius:6px;padding:3px 8px;cursor:pointer;font-family:inherit;">
        ${modeCepat ? '📋 Mode detail' : '⚡ Mode cepat'}
      </button>
    </div>
  </div>

  <div class="ds-asesmen-list">
    ${siswaHTML}
  </div>

  <div class="ds-asesmen-nav" style="padding:10px 16px 14px;">
    <button onclick="dashHalamanPrev()" class="ds-page-btn"
      ${navPrevDisabled ? 'disabled' : ''}>‹ Sebelumnya</button>
    <button onclick="dashSimpanLanjut()" class="ds-page-btn ds-page-btn--primary"
      ${navNextDisabled ? 'disabled' : ''}>
      ${navNextDisabled ? 'Halaman Terakhir' : `Lanjut → ${nextStart}–${nextEnd}`}
    </button>
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

// --- RE-RENDER STEPPER -------------------------------------------------------

function _rerenderStep() {
  const body = _container?.querySelector('#ds-step-body');
  const nav  = _container?.querySelector('#ds-step-nav');
  const ind  = _container?.querySelector('.ds-step-indicator');
  if (!body) return;

  const tpData  = _getTP(_flow.tp?.nomor);
  const step    = _skenario.stepIndex;
  const isLast  = step === 6;
  const isFirst = step === 0;

  // ── Runtime v6: step 2-4 = persistent surface ──────────────
  if (step >= 2 && step <= 4) {
    const targetFaseOffset = step - 2; // 0=Pembuka, 1=Inti, 2=Penutup

    if (!_rt.mounted) {
      // Pertama kali masuk runtime: init faseOffset dari step
      _rt.faseOffset    = targetFaseOffset;
      _rt.langkahIndex  = _skenario.langkahIndex || 0;

      // Sembunyikan stepper UI — runtime menggantikannya
      const wrap = _container?.querySelector('.ds-stepper-wrap');
      if (wrap) wrap.classList.add('ds-stepper-wrap--runtime');

      // Build placeholder dulu agar #ds-step-body siap
      body.innerHTML = '<div id="rt-surface-placeholder" style="height:100%;"></div>';
      body.classList.add('ds-step-body--runtime');

      // Mount runtime ke #ds-step-body
      _rtMount(tpData);
    } else {
      // Runtime sudah mounted: hanya update faseOffset jika berubah
      if (_rt.faseOffset !== targetFaseOffset) {
        _rt.faseOffset   = targetFaseOffset;
        _rt.langkahIndex = 0;
        _skenario.langkahIndex = 0;
      }
      _rtRenderStep(tpData);
    }
    return; // Runtime handle segalanya
  }

  // ── Non-runtime step: unmount jika perlu ───────────────────
  if (_rt.mounted) {
    _rtUnmount();
    // Restore stepper UI
    const wrap = _container?.querySelector('.ds-stepper-wrap');
    if (wrap) wrap.classList.remove('ds-stepper-wrap--runtime');
  }

  body.innerHTML = _buildStepBody(tpData, step);

  if (ind) ind.outerHTML = _buildStepIndicator(step);

  if (nav) {
    nav.innerHTML = `
      <button onclick="dashStepPrev()" class="ds-step-btn ds-step-btn--prev"
        ${isFirst ? 'disabled' : ''}>← Sebelumnya</button>
      ${isLast
        ? `<button onclick="dashSelesaiSesi()" class="ds-step-btn ds-step-btn--selesai">✓ Simpan & Selesai</button>`
        : `<button onclick="dashStepNext()" class="ds-step-btn ds-step-btn--next">Lanjut →</button>`
      }`;
  }
}

// --- HELPERS -----------------------------------------------------------------

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
    _ttsActiveBtn.textContent = '▶ Putar Audio';
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

// Stepper navigasi
window.dashStepNext = async function() {
  _ttsStop();
  const step = _skenario.stepIndex;

  // Step 5 (Asesmen): cek apakah ada nilai terisi
  if (step === 5) {
    const dinilai = _hitungSiswaDinilai();
    const total   = (_flow.siswaList || []).length;
    if (total > 0 && dinilai === 0 && !_skenario.warnAsesmen) {
      _skenario.warnAsesmen = true;
      _rerenderStep();
      return;
    }
    if (_skenario.openSiswaId) await _autoSaveSiswa(_skenario.openSiswaId);
    _skenario.openSiswaId = null;
  }

  _skenario.warnAsesmen  = false;
  _skenario.langkahIndex = 0;
  _skenario.stepIndex    = Math.min(6, step + 1);

  // Preload nilai cache saat masuk step Asesmen
  if (_skenario.stepIndex === 5 && !_flow.nilaiCache) {
    await _loadNilaiCache();
  }

  // Saat memasuki runtime (step 2): init spkMap dari siswa hadir
  if (_skenario.stepIndex === 2 && !_rt.mounted) {
    const hadir = (_flow.siswaList || []).filter(s => _flow.statusMap[s.id] === 'H');
    const siswa = hadir.length > 0 ? hadir : (_flow.siswaList || []);
    for (const s of siswa) {
      if (_rt.spkMap[s.id] === undefined) _rt.spkMap[s.id] = null;
    }
    _rt.faseOffset   = 0;
    _rt.langkahIndex = 0;
  }

  _rerenderStep();
};

window.dashStepPrev = function() {
  _ttsStop();
  _skenario.warnAsesmen  = false;
  _skenario.langkahIndex = 0;
  const prevStep = Math.max(0, _skenario.stepIndex - 1);

  // Masuk kembali ke runtime dari Asesmen: re-init ke Penutup
  if (prevStep === 4 && _skenario.stepIndex === 5) {
    if (_rt.mounted) {
      // Runtime masih mounted (seharusnya tidak, tapi defensive)
      _rt.faseOffset   = 2;
      _rt.langkahIndex = 0;
    } else {
      // Re-mount dengan faseOffset=2 (Penutup)
      _rt.mounted      = false; // Pastikan mount ulang
      _rt.faseOffset   = 2;
      _rt.langkahIndex = 0;
    }
  }

  _skenario.stepIndex = prevStep;
  _rerenderStep();
};

window.dashLangkahPilih = function(idx) {
  _skenario.langkahIndex = idx;
  _rerenderStep();
};

window.dashWarnBatalkan = function() {
  _skenario.warnAsesmen = false;
  _rerenderStep();
};

window.dashWarnLanjut = function() {
  _skenario.warnAsesmen  = false;
  _skenario.langkahIndex = 0;
  _skenario.stepIndex    = 6;
  _rerenderStep();
};

// Presensi paginasi
window.dashPresensiPrev = function() {
  _skenario.presensiPage = Math.max(0, _skenario.presensiPage - 1);
  _rerenderStep();
};

window.dashPresensiNext = function() {
  const total      = (_flow.siswaList || []).length;
  const totalPages = Math.max(1, Math.ceil(total / SISWA_PER_HALAMAN));
  _skenario.presensiPage = Math.min(totalPages - 1, _skenario.presensiPage + 1);
  _rerenderStep();
};

// Asesmen paginasi
window.dashHalamanPrev = async function() {
  if (_skenario.openSiswaId) await _autoSaveSiswa(_skenario.openSiswaId);
  _skenario.asesmenPage = Math.max(0, _skenario.asesmenPage - 1);
  _skenario.openSiswaId = null;
  _autoPilihSiswaPertamaBelum();
  _rerenderStep();
};

window.dashSimpanLanjut = async function() {
  if (_skenario.openSiswaId) await _autoSaveSiswa(_skenario.openSiswaId);
  const total      = _flow.siswaList.length;
  const totalPages = Math.max(1, Math.ceil(total / SISWA_PER_HALAMAN));
  _skenario.asesmenPage = Math.min(totalPages - 1, _skenario.asesmenPage + 1);
  _skenario.openSiswaId = null;
  _autoPilihSiswaPertamaBelum();
  _rerenderStep();
};

window.dashToggleSiswa = async function(siswaId) {
  if (_skenario.openSiswaId === siswaId) {
    await _autoSaveSiswa(siswaId);
    _skenario.openSiswaId = null;
  } else {
    if (_skenario.openSiswaId) await _autoSaveSiswa(_skenario.openSiswaId);
    _skenario.openSiswaId = siswaId;
  }
  _rerenderStep();
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
  // Update count label tanpa re-render penuh
  const countEl = _container?.querySelector('#presensi-count');
  if (countEl) {
    const totalH = Object.values(_flow.statusMap).filter(v => v === 'H').length;
    const total  = _flow.siswaList.length;
    countEl.textContent = totalH > 0 ? `${totalH}/${total} hadir` : '';
  }
  const progressEl = _container?.querySelector('.ds-penilaian-progress');
  if (progressEl && _skenario.stepIndex === 1) {
    const totalH     = Object.values(_flow.statusMap).filter(v => v === 'H').length;
    const total      = _flow.siswaList.length;
    const totalPages = Math.max(1, Math.ceil(total / SISWA_PER_HALAMAN));
    progressEl.textContent = `Halaman ${_skenario.presensiPage + 1}/${totalPages} · Hadir ${totalH}/${total}`;
  }
};

window.dashSelesaiSesi = async function() {
  _ttsStop();

  if (_skenario.openSiswaId) {
    await _autoSaveSiswa(_skenario.openSiswaId);
  }

  const dinilai = _hitungSiswaDinilai();
  const total   = (_flow.siswaList || []).length;

  if (total > 0 && dinilai < total) {
    const existingWarn = _container?.querySelector('#sesi-warn-banner');
    if (!existingWarn) {
      const stepBody = _container?.querySelector('#ds-step-body');
      if (stepBody) {
        const warn = document.createElement('div');
        warn.id = 'sesi-warn-banner';
        warn.className = 'ds-warn-banner';
        warn.style.marginBottom = '10px';
        warn.innerHTML = `
          <div class="ds-warn-title">⚠ ${dinilai} dari ${total} siswa sudah dinilai</div>
          <div class="ds-warn-actions">
            <button onclick="document.getElementById('sesi-warn-banner').remove()"
              class="ds-warn-btn ds-warn-btn--cancel">← Kembali Isi</button>
            <button onclick="dashKonfirmasiSelesai()"
              class="ds-warn-btn ds-warn-btn--ok">Tetap Simpan</button>
          </div>`;
        stepBody.insertBefore(warn, stepBody.firstChild);
        warn.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
  }

  await _doSelesaiSesi();
};

window.dashKonfirmasiSelesai = async function() {
  document.getElementById('sesi-warn-banner')?.remove();
  await _doSelesaiSesi();
};

async function _doSelesaiSesi() {
  const refleksi = _container?.querySelector('#sesi-refleksi')?.value?.trim() || null;
  const { tp, rombel } = _flow;
  const totalH = Object.values(_flow.statusMap).filter(v => v === 'H').length;
  const dinilai = _hitungSiswaDinilai();
  const total   = (_flow.siswaList || []).length;

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

  const _ringkasan = { rombel: rombel.nama, tp: tp.nomor, tpNama: tp.nama, hadir: totalH, siswa: total, dinilai };

  await window.dashKeLanding();
  _refreshJejakCard();
  if (window.__FLAF_NAV__) window.__FLAF_NAV__._setJejakDirty?.();

  if (window.__FLAF__?.showToast) {
    window.__FLAF__.showToast(
      `✓ Sesi selesai · ${_ringkasan.rombel} · TP ${String(_ringkasan.tp).padStart(2,'0')} · ${_ringkasan.hadir}/${_ringkasan.siswa} hadir · ${_ringkasan.dinilai} dinilai`,
      5000
    );
  }
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

let _timerInterval = null;
window.dashStartTimer = function(idx, durasiMenit) {
  if (_timerInterval) clearInterval(_timerInterval);
  let sisa = durasiMenit * 60;
  const el  = document.getElementById(`fase-timer-${idx}`);
  const btn = document.getElementById(`fase-timer-${idx}-btn`);
  if (!el) return;
  el.style.display = 'inline';
  const stopFn = () => {
    clearInterval(_timerInterval);
    _timerInterval = null;
    el.style.display = 'none';
    if (btn) { btn.textContent = '▶ Timer'; btn.onclick = () => window.dashStartTimer(idx, durasiMenit); }
  };
  if (btn) { btn.textContent = '⏹ Stop'; btn.onclick = stopFn; }
  _timerInterval = setInterval(() => {
    sisa--;
    const m = Math.floor(sisa / 60);
    const s = String(sisa % 60).padStart(2, '0');
    el.textContent = `${m}:${s}`;
    if (sisa <= 0) {
      clearInterval(_timerInterval);
      _timerInterval = null;
      el.textContent = '0:00 ✓';
    }
  }, 1000);
};

window.dashToggleAsesmenMode = async function() {
  _skenario.asesmenModeCepat = !(_skenario.asesmenModeCepat || false);
  await _loadNilaiCache();
  _rerenderStep();
};

window.dashNilaiCepat = async function(siswaId, pilihan) {
  const CEPAT_MAP = { sudah: 85, perlu: 70, belum: 55 };
  const v = CEPAT_MAP[pilihan];
  const { rombel, tp } = _flow;
  if (!rombel || !tp) return;
  try {
    await nilai.setNilaiFormatif(rombel.id, siswaId, tp.nomor, v, v, v);
  } catch (err) { console.warn('[DASHBOARD] cepat save gagal:', err.message); }
  if (!_flow.nilaiCache) _flow.nilaiCache = {};
  if (!_flow.nilaiCache[siswaId]) _flow.nilaiCache[siswaId] = {};
  _flow.nilaiCache[siswaId].l = v;
  _flow.nilaiCache[siswaId].s = v;
  _flow.nilaiCache[siswaId].r = v;
  _flow.nilaiCache[siswaId].cepatPilihan = pilihan;
  _rerenderStep();
};

window.dashCatatanCepat = async function(siswaId, teks) {
  const { rombel, tp } = _flow;
  if (!rombel || !tp || !teks.trim()) return;
  try {
    await nilai.setCatatanFormatif(rombel.id, siswaId, tp.nomor, teks.trim());
  } catch (err) { console.warn('[DASHBOARD] cepat catatan gagal:', err.message); }
  if (!_flow.nilaiCache) _flow.nilaiCache = {};
  if (!_flow.nilaiCache[siswaId]) _flow.nilaiCache[siswaId] = {};
  _flow.nilaiCache[siswaId].catatan = teks.trim();
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
  // Unmount runtime v6 jika aktif
  if (_rt.mounted) _rtUnmount();
  Object.assign(_rt, {
    faseOffset: 0, langkahIndex: 0,
    dimmed: false, currentStu: null,
    spkMap: {}, situasiKey: null, situasiActKey: null,
    sessionSec: 0, ttsPlaying: false, ttsUtterance: null,
    closureMode: false, closureKendala: null,
  });
  _flow     = { view: 'landing', rombel: null, tp: null, statusMap: {}, siswaList: [], nilaiCache: null };
  _skenario = {
    stepIndex: 0, langkahIndex: 0, speaking: false,
    kendala: null,
    presensiPage: 0, asesmenPage: 0, openSiswaId: null,
    asesmenModeCepat: false, warnAsesmen: false,
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
    if (_container) _container.innerHTML = await _buildLandingHTML(session, kelasList, rekapMap, streak, summary);
  } catch (err) {
    console.error('[DASHBOARD] dashKeLanding error:', err.message);
  }
};

window.dashPilihRombel = async function(id, nama, tingkat) {
  _flow.rombel    = { id, nama, tingkat: parseInt(tingkat) || 1 };
  _flow.view      = 'pilihTP';
  _flow.statusMap = {};
  _flow.siswaList = [];
  if (_container) _container.innerHTML = await _buildPilihTPHTML();
};

window.dashKePilihTP = async function() {
  _ttsStop();
  _flow.tp        = null;
  _flow.statusMap = {};
  _flow.view      = 'pilihTP';
  if (_container) _container.innerHTML = await _buildPilihTPHTML();
};

window.dashPilihTP = async function(nomor, nama) {
  _flow.tp         = { nomor, nama };
  _flow.statusMap  = {};
  _flow.view       = 'sesi';
  _flow.nilaiCache = null;
  _skenario        = {
    stepIndex: 0, langkahIndex: 0, speaking: false,
    kendala: null,
    presensiPage: 0, asesmenPage: 0, openSiswaId: null,
    asesmenModeCepat: false, warnAsesmen: false,
  };
  // Reset runtime v6 state
  _rtUnmount();
  Object.assign(_rt, {
    faseOffset: 0, langkahIndex: 0,
    dimmed: false, currentStu: null,
    spkMap: {}, situasiKey: null, situasiActKey: null,
    sessionSec: 0, ttsPlaying: false, ttsUtterance: null,
    closureMode: false, closureKendala: null,
  });
  try {
    _flow.siswaList = await nilai.getSiswaList(_flow.rombel.id);
  } catch (err) {
    console.warn('[DASHBOARD] gagal load siswa:', err.message);
    _flow.siswaList = [];
  }
  if (_container) _container.innerHTML = _buildSesiHTML();
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
    <div style="font-size:13px;font-weight:700;color:rgba(255,255,255,.8);margin-bottom:6px">Dashboard tidak bisa dimuat</div>
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
