/**
 * =============================================================
 * FLAF — SESI RUNTIME
 * File: screens/sesi-runtime.js
 *
 * State machine untuk satu sesi mengajar satu TP.
 * Membaca aktivitas[] dari TP v4.3.
 *
 * States:
 *   preview   → SesiPreviewing: pilih mode, mulai
 *   resume    → SesiResumePrompt: lanjut atau mulai ulang
 *   entering  → FaseEntering: transisi masuk fase
 *   ready     → AktivitasReady: instruksi + saran
 *   running   → AktivitasRunning: cue + timer + TTS
 *   obs       → ObservationCapture: catat 3-5 siswa
 *   selesai   → FaseSelesai: ringkasan fase, lanjut
 *   closure   → SesiClosure: mood + catatan + simpan
 *
 * Prinsip:
 *   - Satu objek _state, satu fungsi _transition()
 *   - Tidak ada state yang diubah langsung dari event handler
 *   - Tidak ada window.* pollution
 *   - Semua render tulis ke #sr-root via innerHTML
 * =============================================================
 */

import { db } from '../storage/db.js';

// ── Konstanta ─────────────────────────────────────────────────

const RESUME_MAX_MS    = 4 * 60 * 60 * 1000; // 4 jam
const RESUME_STORE_KEY = 'sesi_aktif';
const STORE_KV         = 'kv';

const TIPE_LABEL = {
  sapaan_kelas     : 'Sapaan Kelas',
  sapaan_individu  : 'Sapaan Individu',
  modeling         : 'Modeling',
  chorus           : 'Chorus',
  pair_work        : 'Pair Work',
  chant            : 'Chant',
  game_movement    : 'Permainan',
  review_quick     : 'Review',
  reflection       : 'Refleksi',
  farewell_kelas   : 'Penutup',
  tpr_action       : 'TPR',
  meaningful_link  : 'Meaningful Link',
  chant_movement   : 'Chant + Gerak',
  observation_validation: 'Observasi',
};

const MULAI_LABEL = {
  pair_work        : 'Mulai pair work',
  chant            : 'Mulai chant',
  chant_movement   : 'Mulai chant',
  game_movement    : 'Mulai permainan',
  sapaan_individu  : 'Sudah sapa, lanjut',
  sapaan_kelas     : 'Sudah sapa, lanjut',
  modeling         : 'Sudah modeling, lanjut',
  chorus           : 'Sudah chorus, lanjut',
  review_quick     : 'Sudah review, lanjut',
  reflection       : 'Sudah refleksi, lanjut',
  farewell_kelas   : 'Selesai sesi',
  tpr_action       : 'Sudah TPR, lanjut',
  meaningful_link  : 'Lanjut',
  observation_validation: 'Lanjut',
};

const KONDISI_OPSI = [
  { id: 'kelas_ribut',       label: 'Ribut, susah fokus' },
  { id: 'energi_turun',      label: 'Energi mulai turun' },
  { id: 'siswa_pasif',       label: 'Banyak yang takut bicara' },
  { id: 'waktu_mepet',       label: 'Waktu mepet' },
];
const KONDISI_PAIR  = { id: 'pair_tidak_jalan', label: 'Pair tidak jalan' };
const KONDISI_LANCAR = { id: 'lancar', label: 'Tidak, semua lancar ✓' };

const FALLBACK_GENERIC = {
  kelas_ribut      : 'Tangan di pinggang, tunggu sunyi. Ulangi instruksi setelah hening.',
  energi_turun     : 'Berdiri, ajak tepuk pendek. Lanjut aktivitas yang lebih bergerak.',
  siswa_pasif      : 'Mulai dari baris depan. Beri jempol untuk yang berani.',
  pair_tidak_jalan : 'Coba kelas dulu (bukan pair). Guru tanya, kelas jawab bersama.',
  waktu_mepet      : 'Pertimbangkan skip aktivitas berikutnya. Langsung ke Penutup.',
};

// ── State ─────────────────────────────────────────────────────

let _state = {
  tp          : null,     // objek TP dari fase-a.js
  rombel      : null,     // { id, nama, tingkat }
  siswaList   : [],       // array siswa untuk obs
  mode        : 'normal', // 'mudah' | 'normal' | 'tantangan'
  modeOverride: {},       // { aktId: 'mudah' }
  faseIdx     : 0,        // 0=Pembuka 1=Inti 2=Penutup
  aktIdx      : 0,
  aktState    : 'preview',
  obsRatings  : {},       // { siswaId: ['aktif','berani'] }
  closureMood : null,
  kendala     : null,     // kondisi kelas yang dipilih saat closure
  overlay     : null,     // null | 'kondisi' | 'fallback'
  fallbackKond: null,
  timerHandle : null,
  timerStart  : null,     // Date.now() saat timer mulai
  ttsUtterance: null,
  resumed     : false,
};

// ── Container reference ────────────────────────────────────────

let _root    = null; // #sr-root element
let _onDone  = null; // callback saat closure selesai → dashboard.js

// ── Public API ────────────────────────────────────────────────

/**
 * mount(root, tpData, rombel, siswaList, onDone)
 *
 * Dipanggil dari dashboard.js saat step 2-4 aktif.
 * @param {HTMLElement} root       — #sr-root
 * @param {Object}      tpData     — objek TP v4.3
 * @param {Object}      rombel     — { id, nama, tingkat }
 * @param {Array}       siswaList  — array siswa dari IDB
 * @param {Function}    onDone     — callback(hasil) saat closure selesai
 */
export async function mount(root, tpData, rombel, siswaList, onDone) {
  if (!root || !tpData) {
    console.error('[SR] mount: root atau tpData null');
    return;
  }

  _root       = root;
  _onDone     = onDone || (() => {});
  _stopTimer();
  _ttsStop();

  // Reset state
  Object.assign(_state, {
    tp          : tpData,
    rombel      : rombel || { id: '', nama: '', tingkat: 1 },
    siswaList   : Array.isArray(siswaList) ? siswaList : [],
    mode        : 'normal',
    modeOverride: {},
    faseIdx     : 0,
    aktIdx      : 0,
    aktState    : 'preview',
    obsRatings  : {},
    closureMood : null,
    kendala     : null,
    overlay     : null,
    fallbackKond: null,
    timerHandle : null,
    timerStart  : null,
    ttsUtterance: null,
    resumed     : false,
  });

  // Cek resume
  try {
    const saved = await db.get(STORE_KV, RESUME_STORE_KEY);
    if (saved && saved.tpNomor === tpData.nomor && saved.rombelId === rombel?.id) {
      const age = Date.now() - (saved.savedAt || 0);
      if (age < RESUME_MAX_MS) {
        _state.faseIdx  = saved.faseIdx  ?? 0;
        _state.aktIdx   = saved.aktIdx   ?? 0;
        _state.mode     = saved.mode     ?? 'normal';
        _state.aktState = 'resume';
        _state.resumed  = true;
      } else {
        await db.remove(STORE_KV, RESUME_STORE_KEY).catch(() => {});
      }
    }
  } catch (e) {
    console.warn('[SR] cek resume gagal:', e.message);
  }

  _render();
}

/**
 * unmount() — bersihkan timer dan TTS saat dashboard pindah view
 */
export function unmount() {
  _stopTimer();
  _ttsStop();
  _root = null;
}

// ── Transition ────────────────────────────────────────────────

function _transition(patch) {
  Object.assign(_state, patch);
  _persistState();
  _render();
}

async function _persistState() {
  if (_state.aktState === 'closure' || _state.aktState === 'preview') {
    // Tidak perlu persist di state awal atau akhir
    return;
  }
  try {
    await db.set(STORE_KV, RESUME_STORE_KEY, {
      tpNomor : _state.tp?.nomor,
      rombelId: _state.rombel?.id,
      faseIdx : _state.faseIdx,
      aktIdx  : _state.aktIdx,
      mode    : _state.mode,
      savedAt : Date.now(),
    });
  } catch (e) {
    console.warn('[SR] persist gagal:', e.message);
  }
}

// ── Helpers ───────────────────────────────────────────────────

function _currentFase() {
  return _state.tp?.skenario?.[_state.faseIdx] || null;
}

function _currentAkt() {
  const fase = _currentFase();
  return fase?.aktivitas?.[_state.aktIdx] || null;
}

function _effectiveMode(akt) {
  return _state.modeOverride[akt?.id] || _state.mode;
}

function _escape(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function _now() {
  const d = new Date();
  return d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' });
}

// ── Timer ─────────────────────────────────────────────────────

function _startTimer(detik) {
  _stopTimer();
  _state.timerStart = Date.now();
  _state.timerHandle = setInterval(() => _updateTimer(detik), 1000);
}

function _stopTimer() {
  if (_state.timerHandle) {
    clearInterval(_state.timerHandle);
    _state.timerHandle = null;
  }
  _state.timerStart = null;
}

function _updateTimer(target) {
  if (!_root) return;
  const el    = _root.querySelector('#sr-timer-elem');
  const txtEl = _root.querySelector('#sr-timer-text');
  const lblEl = _root.querySelector('#sr-timer-label');
  if (!el || !txtEl) return;

  const elapsed   = Math.floor((Date.now() - _state.timerStart) / 1000);
  const remaining = target - elapsed;

  if (remaining > 0) {
    txtEl.textContent = _fmt(remaining);
    lblEl.textContent = 'tersisa';
    el.className = 'sr-timer ' + (
      remaining > target * 0.5  ? 'sr-timer--green'  :
      remaining > target * 0.15 ? 'sr-timer--yellow' :
      'sr-timer--yellow'
    );
  } else {
    txtEl.textContent = '+' + _fmt(-remaining);
    lblEl.textContent = 'lewat — lanjut saat siap';
    el.className = 'sr-timer sr-timer--red';
  }
}

function _fmt(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ── TTS ───────────────────────────────────────────────────────

function _ttsSpeak(teks, btnEl) {
  if (!('speechSynthesis' in window)) return;
  _ttsStop();

  const u = new SpeechSynthesisUtterance(teks);
  u.lang  = 'en-US';
  u.rate  = 0.9;
  u.pitch = 1.1;

  if (btnEl) btnEl.classList.add('sr-audio-btn--playing');

  u.onend = u.onerror = () => {
    if (btnEl) btnEl.classList.remove('sr-audio-btn--playing');
    _state.ttsUtterance = null;
  };

  _state.ttsUtterance = u;
  window.speechSynthesis.speak(u);
}

function _ttsStop() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  _state.ttsUtterance = null;
}

// ── Observasi: pilih siswa acak ───────────────────────────────

function _getSiswaObs(n) {
  const list = _state.siswaList;
  if (!list || list.length === 0) return [];
  // Rotasi random — Phase 6 akan ganti dengan history-aware
  const shuffled = [...list].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, shuffled.length, 5));
}

// ── Advance aktivitas ─────────────────────────────────────────

function _advanceAktivitas() {
  _stopTimer();
  const akt = _currentAkt();
  if (!akt) return;

  if (akt.observation?.aktif) {
    _transition({ aktState: 'obs', obsRatings: {}, overlay: null });
  } else {
    _nextAktivitas();
  }
}

function _nextAktivitas() {
  const fase = _currentFase();
  if (!fase) return;

  const nextAktIdx = _state.aktIdx + 1;
  if (nextAktIdx < (fase.aktivitas?.length || 0)) {
    _transition({ aktIdx: nextAktIdx, aktState: 'ready', overlay: null });
  } else {
    _transition({ aktState: 'selesai', overlay: null });
  }
}

function _nextFase() {
  const tp       = _state.tp;
  const nextFaseIdx = _state.faseIdx + 1;

  if (nextFaseIdx < (tp?.skenario?.length || 0)) {
    _transition({
      faseIdx  : nextFaseIdx,
      aktIdx   : 0,
      aktState : 'entering',
      overlay  : null,
    });
  } else {
    _transition({ aktState: 'closure', overlay: null });
  }
}

// ── Render: router ────────────────────────────────────────────

function _render() {
  if (!_root) return;
  _stopTimer(); // Timer lama dibersihkan sebelum render baru

  switch (_state.aktState) {
    case 'preview'  : return _renderPreview();
    case 'resume'   : return _renderResume();
    case 'entering' : return _renderEntering();
    case 'ready'    : return _renderReady();
    case 'running'  : return _renderRunning();
    case 'obs'      : return _renderObs();
    case 'selesai'  : return _renderSelesai();
    case 'closure'  : return _renderClosure();
    default:
      _root.innerHTML = `<div style="padding:24px;color:rgba(255,255,255,.5);">State tidak dikenal: ${_state.aktState}</div>`;
  }
}

// ─── SCREEN: SesiPreviewing ───────────────────────────────────

function _renderPreview() {
  const tp      = _state.tp;
  const rombel  = _state.rombel;
  const jumlah  = _state.siswaList.length;

  const modeOpts = ['mudah', 'normal', 'tantangan'].map(m => {
    const desc = {
      mudah     : 'Bantuan tinggi, speaking pendek, banyak modeling guru',
      normal    : 'Speaking standar, bantuan sedang',
      tantangan : 'Speaking lebih spontan, bantuan minimal',
    }[m];
    const sel = _state.mode === m ? ' sr-mode-option--selected' : '';
    return `
      <div class="sr-mode-option${sel}" data-mode="${m}">
        <div class="sr-mode-name">${m.charAt(0).toUpperCase() + m.slice(1)}</div>
        <div class="sr-mode-desc">${desc}</div>
      </div>`;
  }).join('');

  _root.innerHTML = `
    <div class="sr-screen">
      <div class="sr-preview">
        <div class="sr-preview-title">TP ${String(tp.nomor).padStart(2,'0')} — ${_escape(tp.nama)}</div>
        <div class="sr-preview-sub">${_now()} · ${_escape(rombel.nama)}</div>

        <ul class="sr-preview-checklist">
          <li><span>${jumlah > 0 ? jumlah + ' siswa terdaftar' : 'Belum ada siswa'}</span><span class="sr-check">${jumlah > 0 ? '✓' : '—'}</span></li>
          <li><span>Audio TTS tersedia</span><span class="sr-check">${'speechSynthesis' in window ? '✓' : '—'}</span></li>
          <li><span>Data kurikulum dimuat</span><span class="sr-check">✓</span></li>
        </ul>

        <div class="sr-mode-label">Pilih mode untuk kelas Anda hari ini:</div>
        <div class="sr-mode-pick" id="sr-mode-pick">
          ${modeOpts}
        </div>

        <div class="sr-spacer"></div>
      </div>

      <div class="sr-footer">
        <button class="sr-btn-primary" id="sr-btn-mulai">Mulai mengajar →</button>
      </div>
    </div>`;

  _root.querySelectorAll('.sr-mode-option').forEach(el => {
    el.addEventListener('click', () => {
      _state.mode = el.dataset.mode;
      _renderPreview();
    });
  });

  _root.querySelector('#sr-btn-mulai').addEventListener('click', () => {
    _transition({ aktState: 'entering', faseIdx: 0, aktIdx: 0 });
  });
}

// ─── SCREEN: SesiResumePrompt ─────────────────────────────────

function _renderResume() {
  const tp   = _state.tp;
  const fase = _currentFase();
  const akt  = _currentAkt();
  const minsAgo = ''; // Fase 6: bisa hitung dari savedAt

  _root.innerHTML = `
    <div class="sr-screen">
      <div class="sr-resume">
        <div class="sr-resume-icon">⏸</div>
        <div class="sr-resume-title">Sesi TP ${String(tp.nomor).padStart(2,'0')} belum selesai</div>
        <div class="sr-resume-sub">
          Posisi terakhir: ${_escape(fase?.fase || '—')} —<br>
          "${_escape(akt?.judul || '—')}"
        </div>
        <div class="sr-resume-actions">
          <button class="sr-btn-primary" id="sr-btn-lanjut">Lanjut dari sini →</button>
          <button class="sr-btn-secondary" id="sr-btn-baru">Mulai sesi baru dari awal</button>
        </div>
      </div>
    </div>`;

  _root.querySelector('#sr-btn-lanjut').addEventListener('click', () => {
    // Kembali ke ready, bukan running — sesuai STATE-MACHINE.md §8.3
    _transition({ aktState: 'ready' });
  });

  _root.querySelector('#sr-btn-baru').addEventListener('click', async () => {
    try { await db.remove(STORE_KV, RESUME_STORE_KEY); } catch {}
    _transition({ faseIdx: 0, aktIdx: 0, aktState: 'preview', resumed: false });
  });
}

// ─── SCREEN: FaseEntering ────────────────────────────────────

function _renderEntering() {
  const fase    = _currentFase();
  if (!fase) { _transition({ aktState: 'closure' }); return; }

  const totalAkt = fase.aktivitas?.length || 0;

  _root.innerHTML = `
    <div class="sr-screen">
      <div class="sr-fase-transisi">
        <div class="sr-fase-label">SEKARANG</div>
        <div class="sr-fase-judul">${_escape(fase.fase)}</div>
        <div class="sr-fase-meta">
          ${totalAkt} aktivitas · ${fase.durasi || '—'} menit
        </div>
        <button class="sr-btn-fase" id="sr-btn-mulai-fase">
          Mulai ${_escape(fase.fase)} →
        </button>
      </div>
    </div>`;

  _root.querySelector('#sr-btn-mulai-fase').addEventListener('click', () => {
    _transition({ aktState: 'ready' });
  });
}

// ─── SCREEN: AktivitasReady ───────────────────────────────────

function _renderReady() {
  const fase = _currentFase();
  const akt  = _currentAkt();

  if (!fase || !akt) {
    _transition({ aktState: 'selesai' });
    return;
  }

  const mode       = _effectiveMode(akt);
  const isOverride = !!_state.modeOverride[akt.id];
  const modeData   = akt.mode?.[mode];
  const tipeLabel  = TIPE_LABEL[akt.tipe] || akt.tipe?.replace(/_/g, ' ') || '';
  const mulaiLabel = MULAI_LABEL[akt.tipe] || 'Lanjut';

  // Saran observasi — rotasi random
  let saranHTML = '';
  if (akt.observation?.aktif) {
    const n      = akt.observation.n_siswa || 3;
    const saran  = _getSiswaObs(n);
    const names  = saran.map(s => _escape(s.nama)).join(', ');
    saranHTML = `
      <div class="sr-saran">
        <div class="sr-saran-label">💡 Saran observasi</div>
        <div class="sr-saran-teks">Perhatikan: ${names || 'beberapa siswa'} — pilih sesuai kondisi hari ini</div>
      </div>`;
  }

  // Audio preview di state Ready
  let audioHTML = '';
  if (akt.audio_cue?.contoh_guru) {
    audioHTML += `<button class="sr-audio-btn" data-tts="${_escape(akt.audio_cue.contoh_guru)}">Contoh guru</button>`;
  }
  if (akt.audio_cue?.contoh_siswa) {
    audioHTML += `<button class="sr-audio-btn" data-tts="${_escape(akt.audio_cue.contoh_siswa)}">Contoh siswa</button>`;
  }

  // Mode hint
  let modeHintHTML = '';
  if (modeData?.bantuan && isOverride) {
    modeHintHTML = `<div class="sr-mode-hint">Mode ${mode}: ${_escape(modeData.bantuan)}</div>`;
  }

  _root.innerHTML = `
    <div class="sr-screen">
      <div class="sr-header">
        <span class="sr-fase-info">${_escape(fase.fase)} · ${_state.aktIdx + 1}/${fase.aktivitas.length}</span>
        <span class="sr-mode-badge${isOverride ? ' sr-mode-badge--override' : ''}">${mode}${isOverride ? ' (override)' : ''}</span>
      </div>

      <div class="sr-body" style="text-align:left;">
        <div class="sr-tipe-badge">${_escape(tipeLabel)}</div>
        <div class="sr-judul">${_escape(akt.judul)}</div>
        <div class="sr-instruksi">${_escape(akt.micro_script?.pembuka || '')}</div>
        ${modeHintHTML}
        ${audioHTML ? `<div class="sr-audio-row">${audioHTML}</div>` : ''}
        ${saranHTML}
      </div>

      <div class="sr-footer">
        <button class="sr-btn-primary" id="sr-btn-mulai-akt">${_escape(mulaiLabel)} →</button>
        <button class="sr-btn-kondisi" id="sr-btn-kondisi">⚠ Kondisi kelas?</button>
      </div>
    </div>`;

  _root.querySelectorAll('.sr-audio-btn').forEach(btn => {
    btn.addEventListener('click', () => _ttsSpeak(btn.dataset.tts, btn));
  });

  _root.querySelector('#sr-btn-mulai-akt').addEventListener('click', () => {
    const hasTimer = akt.advance?.mode === 'timer_visible_only';
    _transition({ aktState: 'running' });
    if (hasTimer) _startTimer(akt.durasi_target_detik || 180);
  });

  _root.querySelector('#sr-btn-kondisi').addEventListener('click', () => {
    _state.overlay = 'kondisi';
    _renderOverlay();
  });
}

// ─── SCREEN: AktivitasRunning ─────────────────────────────────

function _renderRunning() {
  const fase = _currentFase();
  const akt  = _currentAkt();

  if (!fase || !akt) {
    _transition({ aktState: 'selesai' });
    return;
  }

  const mode       = _effectiveMode(akt);
  const isOverride = !!_state.modeOverride[akt.id];
  const hasTimer   = akt.advance?.mode === 'timer_visible_only';
  const target     = akt.durasi_target_detik || 180;

  // Timer HTML — nilai awal, akan di-update oleh interval
  const timerHTML = hasTimer ? `
    <span id="sr-timer-elem" class="sr-timer sr-timer--green">
      <span id="sr-timer-text">${_fmt(target)}</span>
      <span class="sr-timer-label" id="sr-timer-label">tersisa</span>
    </span>` : '';

  // Lanjut label
  let lanjutLabel = 'Lanjut →';
  if (akt.tipe === 'sapaan_kelas' && akt.audio_cue?.contoh_siswa) {
    lanjutLabel = 'Siswa balas →';
  }
  if (akt.tipe === 'farewell_kelas') {
    lanjutLabel = 'Selesai sesi';
  }

  // Mode hint untuk running
  const modeData    = akt.mode?.[mode];
  const panjangHint = modeData?.panjang_speaking
    ? `<div class="sr-mode-hint">Speaking ${mode}: ${_escape(modeData.panjang_speaking)}</div>`
    : '';

  _root.innerHTML = `
    <div class="sr-screen">
      <div class="sr-header">
        <span class="sr-fase-info">${_escape(fase.fase)} · ${_state.aktIdx + 1}/${fase.aktivitas.length}</span>
        ${timerHTML}
      </div>

      <div class="sr-body">
        <div class="sr-tipe-badge">UCAPKAN / LAKUKAN</div>

        ${akt.audio_cue?.contoh_guru
          ? `<div class="sr-cue">"${_escape(akt.audio_cue.contoh_guru)}"</div>`
          : ''}

        ${akt.audio_cue?.contoh_siswa ? `
          <div class="sr-respons-label">Mereka akan jawab:</div>
          <div class="sr-respons-teks">"${_escape(akt.audio_cue.contoh_siswa)}"</div>
        ` : ''}

        ${panjangHint}

        <div class="sr-audio-row" style="margin-top:20px;">
          ${akt.audio_cue?.contoh_guru
            ? `<button class="sr-audio-btn" id="sr-tts-guru" data-tts="${_escape(akt.audio_cue.contoh_guru)}">Putar contoh guru</button>`
            : ''}
          ${akt.audio_cue?.contoh_siswa
            ? `<button class="sr-audio-btn" id="sr-tts-siswa" data-tts="${_escape(akt.audio_cue.contoh_siswa)}">Putar contoh siswa</button>`
            : ''}
        </div>
      </div>

      <div class="sr-footer">
        <button class="sr-btn-primary" id="sr-btn-lanjut">${_escape(lanjutLabel)}</button>
        <button class="sr-btn-kondisi" id="sr-btn-kondisi">⚠ Kondisi kelas?</button>
      </div>
    </div>`;

  _root.querySelectorAll('.sr-audio-btn').forEach(btn => {
    btn.addEventListener('click', () => _ttsSpeak(btn.dataset.tts, btn));
  });

  _root.querySelector('#sr-btn-lanjut').addEventListener('click', () => {
    _ttsStop();
    _advanceAktivitas();
  });

  _root.querySelector('#sr-btn-kondisi').addEventListener('click', () => {
    _state.overlay = 'kondisi';
    _renderOverlay();
  });

  // Restart timer jika ada (render ulang setelah state change)
  if (hasTimer && !_state.timerHandle) {
    // Estimasi posisi timer dari kapan state running dimulai
    // Untuk simplisitas: timer mulai ulang dari durasi penuh
    _startTimer(target);
  }
}

// ─── SCREEN: ObservationCapture ───────────────────────────────

function _renderObs() {
  const fase  = _currentFase();
  const akt   = _currentAkt();
  if (!fase || !akt) { _nextAktivitas(); return; }

  const n      = akt.observation?.n_siswa || 3;
  const siswa  = _getSiswaObs(n);
  const isPair = akt.tipe === 'pair_work';

  const cardsHTML = siswa.length > 0
    ? siswa.map(s => `
      <div class="sr-obs-card">
        <div class="sr-obs-name">${_escape(s.nama)}</div>
        <div class="sr-obs-tags">
          <button class="sr-obs-tag" data-sid="${_escape(s.id)}" data-tag="aktif">aktif</button>
          <button class="sr-obs-tag" data-sid="${_escape(s.id)}" data-tag="berani">berani</button>
          <button class="sr-obs-tag" data-sid="${_escape(s.id)}" data-tag="diam">diam</button>
          <button class="sr-obs-tag" data-sid="${_escape(s.id)}" data-tag="help">perlu help</button>
        </div>
      </div>`).join('')
    : `<div style="padding:20px;text-align:center;font-size:13px;color:rgba(255,255,255,.4);">Belum ada siswa terdaftar di rombel ini.</div>`;

  _root.innerHTML = `
    <div class="sr-screen">
      <div class="sr-header">
        <span class="sr-fase-info">${_escape(fase.fase)} · Catat cepat</span>
        <span style="font-size:11px;color:rgba(255,255,255,.35);">opsional</span>
      </div>

      <div class="sr-body" style="text-align:left;padding-top:16px;justify-content:flex-start;">
        <div class="sr-obs-question">
          Bagaimana ${n} ${isPair ? 'pasangan' : 'siswa'} tadi?
        </div>
        ${cardsHTML}
      </div>

      <div class="sr-footer">
        <div class="sr-btn-row">
          <button class="sr-btn-secondary" id="sr-btn-skip-obs">Skip catatan</button>
          <button class="sr-btn-primary" id="sr-btn-lanjut-obs">Lanjut →</button>
        </div>
      </div>
    </div>`;

  // Tag toggle
  _root.querySelectorAll('.sr-obs-tag').forEach(btn => {
    btn.addEventListener('click', () => {
      const sid = btn.dataset.sid;
      const tag = btn.dataset.tag;
      if (!_state.obsRatings[sid]) _state.obsRatings[sid] = [];
      const idx = _state.obsRatings[sid].indexOf(tag);
      if (idx >= 0) {
        _state.obsRatings[sid].splice(idx, 1);
        btn.classList.remove(`sr-obs-tag--${tag}`);
      } else {
        _state.obsRatings[sid].push(tag);
        btn.classList.add(`sr-obs-tag--${tag}`);
      }
    });
  });

  _root.querySelector('#sr-btn-skip-obs').addEventListener('click', () => _nextAktivitas());
  _root.querySelector('#sr-btn-lanjut-obs').addEventListener('click', () => {
    // Fase 6: simpan _state.obsRatings ke IDB
    _nextAktivitas();
  });
}

// ─── SCREEN: FaseSelesai ─────────────────────────────────────

function _renderSelesai() {
  const fase     = _currentFase();
  const tp       = _state.tp;
  const nextFase = tp?.skenario?.[_state.faseIdx + 1];

  if (!fase) { _transition({ aktState: 'closure' }); return; }

  const totalAkt = fase.aktivitas?.length || 0;
  const lanjutLabel = nextFase
    ? `Lanjut ke ${_escape(nextFase.fase)} →`
    : 'Lanjut ke Penutup Sesi →';

  _root.innerHTML = `
    <div class="sr-screen">
      <div class="sr-fase-transisi">
        <div class="sr-fase-label">SELESAI</div>
        <div class="sr-fase-judul">${_escape(fase.fase)}</div>
        <div class="sr-fase-meta">
          ${totalAkt} aktivitas selesai<br>
          ${nextFase ? `Berikutnya: <strong>${_escape(nextFase.fase)}</strong>` : 'Sesi hampir selesai'}
        </div>
        <button class="sr-btn-fase" id="sr-btn-lanjut-fase">
          ${lanjutLabel}
        </button>
      </div>
    </div>`;

  _root.querySelector('#sr-btn-lanjut-fase').addEventListener('click', () => _nextFase());
}

// ─── SCREEN: SesiClosure ─────────────────────────────────────

function _renderClosure() {
  const tp     = _state.tp;
  const rombel = _state.rombel;

  // Ringkasan sederhana — Fase 6 bisa diperkaya
  const faseSelesai = tp?.skenario?.map(f => f.fase).join(', ') || '—';
  const moodOpts    = [
    { id: 'lancar', emoji: '😊', label: 'Lancar'  },
    { id: 'biasa',  emoji: '😐', label: 'Biasa'   },
    { id: 'berat',  emoji: '😓', label: 'Berat'   },
  ];

  const moodHTML = moodOpts.map(m => `
    <button class="sr-mood-btn${_state.closureMood === m.id ? ' sr-mood-btn--selected' : ''}"
            data-mood="${m.id}">
      <span class="sr-mood-emoji">${m.emoji}</span>${m.label}
    </button>`).join('');

  const kondisiOpts = [
    { val: 'lancar',          label: 'Lancar, sesuai rencana' },
    { val: 'waktu_kurang',    label: 'Waktu tidak cukup' },
    { val: 'kurang_kondusif', label: 'Kelas kurang kondusif' },
    { val: 'media_tidak_ada', label: 'Media tidak tersedia' },
    { val: 'lainnya',         label: 'Lainnya' },
  ];

  const kendalaHTML = kondisiOpts.map(k => `
    <button class="sr-overlay-opsi${_state.kendala === k.val ? ' sr-overlay-opsi--override' : ''}"
            data-kendala="${k.val}">
      ${_escape(k.label)}
    </button>`).join('');

  _root.innerHTML = `
    <div class="sr-screen">
      <div class="sr-closure">
        <div class="sr-closure-title">Sesi Selesai</div>
        <div class="sr-closure-sub">${_escape(tp?.nama || '—')} · ${_escape(rombel?.nama || '—')}</div>

        <div class="sr-closure-section-label">Yang terjadi</div>
        <ul class="sr-closure-summary">
          <li>Fase yang dilalui: ${_escape(faseSelesai)}</li>
          <li>${_state.siswaList.length} siswa terdaftar di rombel</li>
        </ul>

        <div class="sr-closure-section-label">Kendala hari ini</div>
        <div id="sr-kendala-wrap">
          ${kendalaHTML}
        </div>

        <div class="sr-closure-section-label">Yang Anda rasakan?</div>
        <div class="sr-mood-row">
          ${moodHTML}
        </div>

        <div class="sr-closure-section-label">Catatan singkat (opsional)</div>
        <textarea class="sr-note-input" id="sr-note" placeholder="Apa yang ingin diingat untuk sesi berikutnya?"></textarea>

        <div class="sr-closure-hint">
          💡 Data sesi akan tersimpan di Jejak Mengajar.
        </div>

        <div style="height:16px;"></div>
      </div>

      <div class="sr-footer">
        <button class="sr-btn-primary" id="sr-btn-simpan">Simpan &amp; Selesai</button>
      </div>
    </div>`;

  // Mood
  _root.querySelectorAll('.sr-mood-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _state.closureMood = btn.dataset.mood;
      _root.querySelectorAll('.sr-mood-btn').forEach(b => b.classList.remove('sr-mood-btn--selected'));
      btn.classList.add('sr-mood-btn--selected');
    });
  });

  // Kendala
  _root.querySelectorAll('[data-kendala]').forEach(btn => {
    btn.addEventListener('click', () => {
      _state.kendala = btn.dataset.kendala;
      _root.querySelectorAll('[data-kendala]').forEach(b => b.classList.remove('sr-overlay-opsi--override'));
      btn.classList.add('sr-overlay-opsi--override');
    });
  });

  // Simpan
  _root.querySelector('#sr-btn-simpan').addEventListener('click', async () => {
    const catatan = _root.querySelector('#sr-note')?.value?.trim() || null;
    try {
      await db.remove(STORE_KV, RESUME_STORE_KEY);
    } catch {}
    _onDone({
      tp       : _state.tp,
      rombel   : _state.rombel,
      mood     : _state.closureMood,
      kendala  : _state.kendala,
      catatan,
      obsRatings: _state.obsRatings,
    });
  });
}

// ─── OVERLAY: Kondisi kelas ───────────────────────────────────

function _renderOverlay() {
  // Hapus overlay lama
  _root.querySelector('.sr-overlay')?.remove();

  if (!_state.overlay) return;

  if (_state.overlay === 'kondisi') return _renderKondisiOverlay();
  if (_state.overlay === 'fallback') return _renderFallbackOverlay();
}

function _renderKondisiOverlay() {
  const akt     = _currentAkt();
  const isPair  = akt?.tipe === 'pair_work' || akt?.tipe === 'chant_movement';

  const opsi = [...KONDISI_OPSI];
  if (isPair) opsi.splice(2, 0, KONDISI_PAIR);
  opsi.push(KONDISI_LANCAR);

  const opsiHTML = opsi.map(o =>
    `<button class="sr-overlay-opsi" data-kondisi="${o.id}">${_escape(o.label)}</button>`
  ).join('');

  const overlay = document.createElement('div');
  overlay.className = 'sr-overlay';
  overlay.innerHTML = `
    <div class="sr-overlay-sheet">
      <div class="sr-overlay-handle"></div>
      <div class="sr-overlay-title">Kondisi kelas sekarang?</div>
      ${opsiHTML}
      <button class="sr-overlay-batal" id="sr-ov-batal">Batal</button>
    </div>`;

  _root.appendChild(overlay);

  overlay.querySelectorAll('.sr-overlay-opsi').forEach(btn => {
    btn.addEventListener('click', () => {
      const kondisi = btn.dataset.kondisi;
      if (kondisi === 'lancar') {
        _state.overlay = null;
        _state.fallbackKond = null;
        overlay.remove();
        return;
      }
      _state.fallbackKond = kondisi;
      _state.overlay = 'fallback';
      _renderOverlay();
    });
  });

  overlay.querySelector('#sr-ov-batal').addEventListener('click', () => {
    _state.overlay = null;
    overlay.remove();
  });
}

function _renderFallbackOverlay() {
  const akt     = _currentAkt();
  const kondisi = _state.fallbackKond;
  const instruksi = (akt?.fallback?.[kondisi]) || FALLBACK_GENERIC[kondisi]
    || 'Lanjut sesuai feeling Anda di kelas.';

  const kondisiLabel = {
    kelas_ribut      : 'Ribut, susah fokus',
    energi_turun     : 'Energi mulai turun',
    siswa_pasif      : 'Banyak yang takut bicara',
    pair_tidak_jalan : 'Pair tidak jalan',
    waktu_mepet      : 'Waktu mepet',
  }[kondisi] || kondisi;

  const canOverride = ['pair_tidak_jalan', 'siswa_pasif', 'kelas_ribut'].includes(kondisi)
    && _effectiveMode(akt) !== 'mudah';

  _root.querySelector('.sr-overlay')?.remove();

  const overlay = document.createElement('div');
  overlay.className = 'sr-overlay';
  overlay.innerHTML = `
    <div class="sr-overlay-sheet">
      <div class="sr-overlay-handle"></div>
      <div class="sr-overlay-title">${_escape(kondisiLabel)}</div>
      <div class="sr-overlay-instruksi">
        <strong>Coba ini:</strong>
        ${_escape(instruksi)}
      </div>
      <button class="sr-overlay-opsi" id="sr-ov-sudah">Sudah coba, kembali</button>
      ${canOverride ? `
        <button class="sr-overlay-opsi sr-overlay-opsi--override" id="sr-ov-turun">
          Mode lebih mudah untuk aktivitas ini
        </button>` : ''}
      <button class="sr-overlay-batal" id="sr-ov-batal2">Batal</button>
    </div>`;

  _root.appendChild(overlay);

  overlay.querySelector('#sr-ov-sudah').addEventListener('click', () => {
    _state.overlay = null;
    _state.fallbackKond = null;
    overlay.remove();
  });

  overlay.querySelector('#sr-ov-turun')?.addEventListener('click', () => {
    if (akt) _state.modeOverride[akt.id] = 'mudah';
    _state.overlay = null;
    _state.fallbackKond = null;
    overlay.remove();
    _render(); // Re-render agar mode badge update
  });

  overlay.querySelector('#sr-ov-batal2').addEventListener('click', () => {
    _state.overlay = null;
    overlay.remove();
  });
}
