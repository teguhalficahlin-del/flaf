/**
 * =============================================================
 * FLAF — SESI RUNTIME SMP (Fase D)
 * File: screens/sesi-runtime-smp.js
 *
 * State machine untuk satu sesi mengajar satu TP Fase D (SMP).
 * Schema input: metadata, resources, runtime[], constraints
 *
 * States:
 *   preview  → info TP sebelum mulai
 *   entering → transisi masuk kelas
 *   running  → navigasi runtime[] step by step
 *   selesai  → ringkasan sesi
 *   closure  → konfirmasi, panggil onDone()
 *
 * Dipanggil dari dashboard.js:
 *   srSMPMount(root, tpData, rombel, siswaList, statusMap, onDone, onBack)
 * =============================================================
 */

import { db } from '../storage/db.js';

// ── Konstanta: Kondisi Darurat Kelas ───────────────────────────
// Struktur (array/key/logic overlay) sama dengan sesi-runtime.js (SD),
// tapi konstanta ini didefinisikan terpisah di sini — bukan import dari
// SD. Teks FALLBACK_GENERIC sudah disesuaikan ke register SMP (Kelas 7-9):
// netral-suportif, langsung, tanpa framing childish/playful ala SD
// ("tepuk pendek", "jempol untuk yang berani").
const KONDISI_LIST = [
  { id: 'kelas_ribut',  label: 'Ribut, susah fokus'        },
  { id: 'energi_turun', label: 'Energi mulai turun'         },
  { id: 'siswa_pasif',  label: 'Banyak yang takut bicara'   },
  { id: 'waktu_mepet',  label: 'Waktu mepet (sisa singkat)' },
  { id: 'lancar',       label: 'Tidak, semua lancar ✓'      },
];

const FALLBACK_GENERIC = {
  kelas_ribut  : 'Hentikan sejenak, tunggu kelas tenang, lalu ulangi instruksi dengan suara tegas.',
  energi_turun : 'Beri waktu sebentar untuk gerak ringan, lalu lanjut ke langkah yang lebih aktif.',
  siswa_pasif  : 'Mulai dari siswa yang duduk di depan. Beri apresiasi singkat untuk yang berani mencoba.',
  waktu_mepet  : 'Skip langkah yang tersisa. Langsung ke Penutup sekarang.',
};

const KONDISI_NICE = {
  kelas_ribut  : 'Ribut, susah fokus',
  energi_turun : 'Energi mulai turun',
  siswa_pasif  : 'Banyak yang takut bicara',
  waktu_mepet  : 'Waktu mepet',
};

// ── State ─────────────────────────────────────────────────────

let _state = {
  tp                 : null,
  rombel             : null,
  siswaList          : [],
  statusMap          : {},
  stepIndex          : 0,
  aktState           : 'preview',
  sesiId             : null,
  ttsPlaying         : false,
  skenarioMode       : false,
  repeatKalimatIndex : 0,
  checkJalur         : null,
};

let _root   = null;
let _onDone = null;
let _onBack = null;
let _smpTtsBtn = null;

// ── Public API ────────────────────────────────────────────────

export async function mount(root, tpData, rombel, siswaList, statusMap, onDone, onBack) {
  if (!root || !tpData) {
    console.error('[SRS] mount: root atau tpData null');
    return;
  }
  _root      = root;
  _onDone    = onDone || (() => {});
  _onBack    = onBack || null;

  _state = {
    tp        : tpData,
    rombel    : rombel    || { nama: '—' },
    siswaList : siswaList || [],
    statusMap : statusMap || {},
    stepIndex : 0,
    aktState  : 'preview',
    sesiId    : Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
  };

  _render();
}

export function unmount() {
  if (_root) _root.innerHTML = '';
  _root   = null;
  _onDone = null;
  _onBack = null;
}

export { mount as srSMPMount, unmount as srSMPUnmount };

// ── Transition ────────────────────────────────────────────────

function _transition(patch) {
  if ('stepIndex' in patch && patch.stepIndex !== _state.stepIndex) {
    _state.repeatKalimatIndex = 0;
    _state.checkJalur         = null;
  }
  Object.assign(_state, patch);
  _render();
}

// ── Render dispatcher ─────────────────────────────────────────

function _render() {
  if (!_root) return;
  switch (_state.aktState) {
    case 'preview'  : return _renderPreview();
    case 'entering' : return _renderEntering();
    case 'running'  : return _renderRunning();
    case 'selesai'  : return _renderSelesai();
    case 'closure'  : return _renderClosure();
    default:
      _root.innerHTML = `<div class="sr-app"><div class="sr-body">State tidak dikenal</div></div>`;
  }
}

// ── Helpers ───────────────────────────────────────────────────

function _escape(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function _now() {
  return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

function _lookupById(arr, id) {
  return arr?.find(item => item.id === id) || null;
}

function _totalDurasi(runtime) {
  return (runtime || []).reduce((s, r) => s + (r.duration || 0), 0);
}

function _typeLabel(type) {
  const map = {
    MODEL   : 'MODEL',
    REPEAT  : 'REPEAT',
    CHANGE  : 'UBAH',
    INTERACT: 'BERINTERAKSI',
    SHARE   : 'BERBAGI',
    CHECK   : 'CEK',
    BOOST   : 'BOOST',
  };
  return map[type] || type;
}

function _typeCls(type) {
  const map = {
    MODEL   : 'smp-type--model',
    REPEAT  : 'smp-type--repeat',
    CHANGE  : 'smp-type--change',
    INTERACT: 'smp-type--interact',
    SHARE   : 'smp-type--share',
    CHECK   : 'smp-type--check',
    BOOST   : 'smp-type--boost',
  };
  return map[type] || '';
}

const STEP_DESCRIPTION = {
  MODEL   : 'Guru demonstrasi — siswa menyimak.',
  REPEAT  : 'Guru memandu — siswa menirukan bersama.',
  CHANGE  : 'Siswa mengubah kalimat sesuai informasi diri mereka.',
  INTERACT: 'Siswa berlatih berpasangan.',
  SHARE   : 'Siswa berbagi hasil latihan.',
  CHECK   : 'Guru mengamati — tentukan langkah berikutnya.',
  BOOST   : 'Tantangan untuk siswa yang sudah siap.',
};

// ── TTS (reuse engine SD: voice availability check, sequential speak) ──

function _smpTtsStop() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  _state.ttsPlaying = false;
  if (_smpTtsBtn) {
    _smpTtsBtn.classList.remove('sr-tts-btn--playing');
    const iconEl = _smpTtsBtn.querySelector('span[aria-hidden]');
    if (iconEl) iconEl.innerHTML = '🔊';
    _smpTtsBtn = null;
  }
}

function _smpTtsShowError(btnEl, pesan) {
  if (btnEl) {
    const orig = btnEl.textContent;
    btnEl.textContent = pesan;
    btnEl.classList.add('error');
    setTimeout(() => {
      btnEl.textContent = orig;
      btnEl.classList.remove('error');
    }, 3000);
  }
}

function _smpTtsPlay(kalimatArr, btnEl) {
  if (!window.speechSynthesis) {
    _smpTtsShowError(btnEl, 'TTS tidak didukung browser ini.');
    return;
  }

  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en'));
  if (voices.length > 0 && !enVoice) {
    _smpTtsShowError(btnEl, 'Suara bahasa Inggris tidak tersedia di perangkat ini.');
    return;
  }

  _state.ttsPlaying = true;
  _smpTtsBtn = btnEl;
  if (btnEl) {
    btnEl.classList.add('sr-tts-btn--playing');
    const iconEl = btnEl.querySelector('span[aria-hidden]');
    if (iconEl) iconEl.innerHTML = '⏹';
  }

  const speakAt = i => {
    if (i >= kalimatArr.length || !_state.ttsPlaying) {
      _smpTtsStop();
      return;
    }
    const u = new SpeechSynthesisUtterance(kalimatArr[i]);
    u.lang  = 'en-US';
    u.rate  = 0.85;
    u.pitch = 1;
    if (enVoice) u.voice = enVoice;
    u.onend   = () => speakAt(i + 1);
    u.onerror = () => { _smpTtsStop(); _smpTtsShowError(btnEl, 'TTS gagal. Coba lagi.'); };
    window.speechSynthesis.speak(u);
  };
  speakAt(0);
}

function _difHTML(dif) {
  if (!dif) return '';
  const panels = [
    { key: 'easy',      label: 'Butuh Bantuan', cls: 'smp-dif--easy'      },
    { key: 'standard',  label: 'Standar',        cls: 'smp-dif--standard'  },
    { key: 'challenge', label: 'Sudah Lancar',   cls: 'smp-dif--challenge' },
  ];
  const cards = panels
    .filter(p => dif[p.key])
    .map(p => `
      <div class="smp-dif-card ${p.cls}">
        <div class="smp-dif-label">${p.label}</div>
        <div class="smp-dif-task">${_escape(dif[p.key].task || dif[p.key])}</div>
      </div>`)
    .join('');
  return cards ? `<div class="smp-dif-row">${cards}</div>` : '';
}

// ── SCREEN: PREVIEW ───────────────────────────────────────────

const COMPLEXITY_HINT = {
  Acquire:   'Pola baru — siswa butuh modeling penuh',
  Expand:    'Variasi — siswa sudah kenal pola dasar',
  Integrate: 'Lintas konteks — siswa produksi mandiri',
};

function _renderPreview() {
  const tp      = _state.tp;
  const meta    = tp.metadata || {};
  const res     = tp.resources || {};
  const runtime = tp.runtime   || [];
  const rombel  = _state.rombel;
  const jumlah  = _state.siswaList.length;
  const statusMap   = _state.statusMap || {};
  const hasPresensi = Object.keys(statusMap).length > 0;
  const hadir       = hasPresensi
    ? Object.values(statusMap).filter(v => v === 'H').length
    : jumlah;
  const tidakHadir  = jumlah - hadir;

  const presensiLabel = jumlah === 0
    ? 'Belum ada siswa'
    : !hasPresensi
      ? `${jumlah} siswa terdaftar`
      : tidakHadir === 0
        ? `${jumlah}/${jumlah} hadir`
        : `${hadir} hadir · ${tidakHadir} tidak hadir`;
  const total   = _totalDurasi(runtime);

  const vocabHTML = (res.active_vocabulary || [])
    .map(w => `<span class="smp-vocab-chip">${_escape(w)}</span>`)
    .join('');

  _root.innerHTML = `
    <div class="sr-app">
      <div class="sr-body">
        <div class="smp-preview-kelas">Kelas ${_escape(meta.grade)} · ${_escape(rombel.nama)} · ${_now()}</div>
        <div class="sr-preview-title">${_escape(meta.title || meta.short_title || '—')}</div>

        <div class="smp-preview-meta-row">
          <span class="smp-meta-chip">${_escape(meta.genre || '')}</span>
          <span class="smp-meta-chip">~${total} menit</span>
          <span class="smp-meta-chip">${runtime.length} langkah</span>
        </div>

        <div class="smp-preview-section">
          <div class="smp-section-label">Tingkat Kesulitan</div>
          <div class="smp-section-body">
            ${_escape(meta.complexity_level || '—')} —
            ${_escape(COMPLEXITY_HINT[meta.complexity_level] || '')}
          </div>
        </div>

        <div class="smp-preview-section">
          <div class="smp-section-label">Tujuan komunikatif</div>
          <div class="smp-section-body">${_escape(meta.communicative_goal_id || meta.communicative_goal || '—')}</div>
        </div>

        <div class="smp-preview-section">
          <div class="smp-section-label">Konteks</div>
          <div class="smp-section-body">${_escape(meta.context_id || meta.context || '—')}</div>
        </div>

        ${vocabHTML ? `
        <div class="smp-preview-section">
          <div class="smp-section-label">Kosakata aktif</div>
          <div class="smp-vocab-row">${vocabHTML}</div>
        </div>` : ''}

        <div class="smp-preview-section">
          <div class="smp-section-label">Siswa</div>
          <div class="smp-section-body">${presensiLabel}</div>
        </div>
      </div>

      <div class="sr-footer">
        ${_onBack ? `<button class="sr-btn-secondary" id="smp-btn-back">← Kembali</button>` : ''}
        <button class="sr-btn-primary" id="smp-btn-mulai">Mulai Sesi →</button>
      </div>
    </div>`;

  _root.querySelector('#smp-btn-mulai').addEventListener('click', () => {
    _transition({ aktState: 'entering' });
  });
  _root.querySelector('#smp-btn-back')?.addEventListener('click', () => {
    if (_onBack) _onBack();
  });
}

// ── SCREEN: ENTERING ──────────────────────────────────────────

function _renderEntering() {
  const meta  = _state.tp?.metadata  || {};
  const setup = _state.tp?.resources?.classroom_setup;

  let contentHTML;

  if (!setup || setup.length === 0) {
    contentHTML = `<div class="smp-entering-note">Pastikan semua siswa siap dan perhatian terpusat.</div>`;
  } else {
    // Detect boundary: first UCAP with "?" starts HOOK
    const hookStart = setup.findIndex(item => item.type === 'UCAP' && item.text.includes('?'));
    const hasSections = hookStart !== -1;

    const settling = hasSections ? setup.slice(0, hookStart) : setup;
    const hook     = hasSections ? setup.slice(hookStart)    : [];

    const renderItems = items => items.map(item => {
      if (item.type === 'UCAP') {
        return `<div class="entering-ucap"><span class="entering-icon">🗣</span><span>${_escape(item.text)}</span></div>`;
      }
      return `<div class="entering-aksi"><span class="entering-icon">⚡</span><span>${_escape(item.text)}</span></div>`;
    }).join('');

    if (hasSections) {
      contentHTML = `
        <div class="entering-section">
          <div class="smp-section-label">Settling</div>
          <div class="entering-section-sep"></div>
          ${renderItems(settling)}
        </div>
        <div class="entering-section">
          <div class="smp-section-label">Hook</div>
          <div class="entering-section-sep"></div>
          ${renderItems(hook)}
        </div>`;
    } else {
      contentHTML = `<div class="entering-section">${renderItems(settling)}</div>`;
    }
  }

  _root.innerHTML = `
    <div class="sr-app">
      <div class="sr-body">
        <div class="entering-header">
          <div class="sr-fase-label">SIAPKAN KELAS</div>
          <div class="sr-fase-judul">${_escape(meta.title || '—')}</div>
          <div class="sr-fase-meta">Kelas ${_escape(meta.grade)} · ${_escape(meta.topic || '')}</div>
        </div>
        <div class="entering-content">
          ${contentHTML}
        </div>
      </div>
      <div class="sr-footer">
        <button class="sr-btn-secondary" id="smp-btn-back-entering">← Kembali</button>
        <button class="sr-btn-primary" id="smp-btn-lanjut">Lanjut →</button>
      </div>
    </div>`;

  _root.querySelector('#smp-btn-lanjut').addEventListener('click', () => {
    _transition({ aktState: 'running', stepIndex: 0 });
  });
  _root.querySelector('#smp-btn-back-entering').addEventListener('click', () => {
    _transition({ aktState: 'preview' });
  });
}

// ── SCREEN: RUNNING ───────────────────────────────────────────

function _buildStepMap(runtime, currentIndex) {
  return runtime.map((step, i) => {
    let stateClass = '';
    if (i < currentIndex)      stateClass = 'smp-step--done';
    else if (i === currentIndex) stateClass = 'smp-step--active';
    else                         stateClass = 'smp-step--upcoming';

    const sep = i < runtime.length - 1
      ? '<span class="smp-step-sep">→</span>'
      : '';

    return `<span class="smp-step-item ${stateClass}">${_escape(step.type || '')}</span>${sep}`;
  }).join('');
}

function _renderRunning() {
  const tp      = _state.tp;
  const runtime = tp.runtime || [];
  const res     = tp.resources || {};
  const idx     = _state.stepIndex;
  const step    = runtime[idx];

  if (!step) {
    _transition({ aktState: 'selesai' });
    return;
  }

  const isFirst = idx === 0;
  const isLast  = idx === runtime.length - 1;

  const bodyHTML = _renderStep(step, res);

  _root.innerHTML = `
    <div class="sr-app">
      <div class="smp-run-header">
        <div class="smp-run-counter">Langkah ${idx + 1} / ${runtime.length}</div>
        <span class="smp-type-badge ${_typeCls(step.type)}">${_typeLabel(step.type)}</span>
        <div class="smp-run-durasi">~${step.duration || 0} menit</div>
      </div>

      <div class="sr-body">
        ${bodyHTML}
      </div>

      <div class="smp-stepmap">
        ${_buildStepMap(runtime, _state.stepIndex)}
      </div>

      <div class="sr-footer smp-run-footer">
        <div class="sr-btn-row">
          <button class="sr-btn-secondary" id="smp-btn-prev">← Sebelumnya</button>
          <button class="sr-btn-primary"   id="smp-btn-next">${isLast ? 'Selesai ✓' : 'Lanjut →'}</button>
        </div>
        <button class="sr-btn-kondisi" id="smp-btn-kondisi">⚠ Kondisi kelas bermasalah?</button>
        ${step.type === 'CHECK' ? `
        <button class="sr-btn-penilaian" id="smp-btn-penilaian">📋 Observasi Formatif</button>` : ''}
      </div>
    </div>`;

  _root.querySelectorAll('.smp-tts-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const kalimat = [btn.dataset.kalimat];
      if (_smpTtsBtn === btn) {
        _smpTtsStop();
      } else {
        _smpTtsPlay(kalimat, btn);
      }
    });
  });
  _root.querySelector('#smp-btn-prev').addEventListener('click', () => {
    if (isFirst) {
      _transition({ aktState: 'entering' });
    } else {
      _transition({ stepIndex: idx - 1 });
    }
  });
  _root.querySelector('#smp-btn-next').addEventListener('click', () => {
    if (isLast) {
      _transition({ aktState: 'selesai' });
    } else {
      _transition({ stepIndex: idx + 1 });
    }
  });
  _root.querySelector('#smp-btn-kondisi').addEventListener('click', () => _renderKondisiOverlay());
  _root.querySelector('#smp-btn-penilaian')?.addEventListener('click', () => _renderObservasiOverlay(step));
}

function _renderStep(step, res) {
  const sk = _state.tp?.skenario;
  if (sk) return _renderStepSkenario(step, sk);

  switch (step.type) {
    case 'MODEL'   : return _renderModel(step, res);
    case 'REPEAT'  : return _renderRepeat(step, res);
    case 'CHANGE'  : return _renderChange(step);
    case 'INTERACT': return _renderInteract(step);
    case 'SHARE'   : return _renderShare(step);
    case 'CHECK'   : return _renderCheck(step);
    case 'BOOST'   : return _renderBoost(step);
    default:
      return `<div class="sr-teks-biasa">Tipe langkah tidak dikenal: ${_escape(step.type)}</div>`;
  }
}

function _ttsSentenceHTML(text) {
  return `
    <div class="smp-model-sentence">
      <span>"${_escape(text)}"</span>
      <button class="sr-tts-ucap-btn smp-tts-btn" data-kalimat="${_escape(text)}" aria-label="Putar kalimat">
        <span aria-hidden="true">🔊</span>
      </button>
    </div>`;
}

function _renderModel(step, res) {
  const sentenceList = (step.sentence_refs || [])
    .map(id => _lookupById(res.model_sentences, id))
    .filter(Boolean);

  const visualList = (step.visual_refs || [])
    .map(id => _lookupById(res.visual_cues, id))
    .filter(Boolean);

  const gestureList = (step.gesture_refs || [])
    .map(id => _lookupById(res.gesture_cues, id))
    .filter(Boolean);

  const maxLen = Math.max(sentenceList.length, visualList.length, gestureList.length);
  let pairsHTML = '';
  for (let i = 0; i < maxLen; i++) {
    const s = sentenceList[i];
    const v = visualList[i];
    const g = gestureList[i];
    pairsHTML += `
      <div class="smp-model-pair">
        ${v ? `<div class="smp-model-visual">🖼 <span>${_escape(v.description_id || v.description || '')}</span></div>` : ''}
        ${g ? `<div class="smp-model-gesture">🤝 <span>${_escape(g.description_id || g.description || '')}</span></div>` : ''}
        ${s ? `<div class="smp-model-sentence">
          🗣 <span class="smp-sentence-text">${_escape(s.text)}</span>
          <button class="smp-tts-btn" data-kalimat="${_escape(s.text)}" aria-label="Putar kalimat">🔊</button>
        </div>` : ''}
      </div>`;
  }

  return `
    <p class="smp-step-description">${STEP_DESCRIPTION[step.type] || ''}</p>
    ${step.board_suggestion === 'optional' ? `
    <p class="smp-board-suggestion">
      💡 Opsional: tulis kalimat-kalimat ini di papan tulis.
    </p>` : ''}
    <div class="smp-step-objective">${_escape(step.objective || '')}</div>
    ${pairsHTML ? `<div class="smp-model-pairs">${pairsHTML}</div>` : ''}`;
}

function _renderRepeat(step, res) {
  const sentences = (step.sentence_refs || [])
    .map(id => _lookupById(res.model_sentences, id))
    .filter(Boolean)
    .map(s => _ttsSentenceHTML(s.text))
    .join('');

  const modeLabel = {
    choral    : 'Kelas bersama (choral)',
    individual: 'Individual',
    pair      : 'Berpasangan',
  }[step.repeat_mode] || _escape(step.repeat_mode || '');

  return `
    <p class="smp-step-description">${STEP_DESCRIPTION[step.type] || ''}</p>
    <div class="smp-step-objective">${_escape(step.objective || '')}</div>
    ${modeLabel ? `<div class="smp-mode-badge">Mode: ${modeLabel}</div>` : ''}
    ${sentences ? `<div class="smp-model-block">${sentences}</div>` : ''}`;
}

function _renderChange(step) {
  const targets = (step.change_target || [])
    .map(t => `<span class="smp-vocab-chip">${_escape(t)}</span>`)
    .join('');

  return `
    <p class="smp-step-description">${STEP_DESCRIPTION[step.type] || ''}</p>
    <div class="smp-step-objective">${_escape(step.objective || '')}</div>
    ${step.prompt ? `
      <div class="smp-cue-block">
        <div class="smp-section-label">Instruksi guru</div>
        <div class="smp-prompt-text">${_escape(step.prompt)}</div>
      </div>` : ''}
    ${targets ? `<div class="smp-change-targets"><span class="smp-section-label">Ubah: </span>${targets}</div>` : ''}
    ${_difHTML(step.differentiation)}`;
}

function _renderInteract(step) {
  const modeLabel = {
    pair : 'Berpasangan',
    group: 'Kelompok',
    class: 'Kelas',
  }[step.interaction_mode] || _escape(step.interaction_mode || '');

  return `
    <p class="smp-step-description">${STEP_DESCRIPTION[step.type] || ''}</p>
    <div class="smp-step-objective">${_escape(step.objective || '')}</div>
    ${modeLabel ? `<div class="smp-mode-badge">Mode: ${modeLabel}</div>` : ''}
    ${step.task ? `
      <div class="smp-cue-block">
        <div class="smp-section-label">Tugas</div>
        <div class="smp-prompt-text">${_escape(step.task)}</div>
      </div>` : ''}
    ${_difHTML(step.differentiation)}`;
}

function _renderShare(step) {
  const modeLabel = {
    oral_response : 'Respons lisan',
    written       : 'Tertulis',
    presentation  : 'Presentasi',
  }[step.share_mode] || _escape(step.share_mode || '');

  return `
    <p class="smp-step-description">${STEP_DESCRIPTION[step.type] || ''}</p>
    <div class="smp-step-objective">${_escape(step.objective || '')}</div>
    ${modeLabel ? `<div class="smp-mode-badge">Mode: ${modeLabel}</div>` : ''}
    ${step.task ? `
      <div class="smp-cue-block">
        <div class="smp-section-label">Tugas</div>
        <div class="smp-prompt-text">${_escape(step.task)}</div>
      </div>` : ''}
    ${_difHTML(step.differentiation)}`;
}

function _renderCheck(step) {
  const observeHTML = (step.observe || [])
    .map(o => `<li class="smp-observe-item">◉ ${_escape(o)}</li>`)
    .join('');

  const na = step.teacher_next_action || {};
  const actionPanels = [
    { key: 'ready',        label: '✓ Siap lanjut',        cls: 'smp-action--ready'  },
    { key: 'needs_model',  label: '⟳ Perlu model ulang',  cls: 'smp-action--model'  },
    { key: 'needs_repeat', label: '↩ Perlu repeat',        cls: 'smp-action--repeat' },
  ]
    .filter(p => na[p.key])
    .map(p => `
      <div class="smp-action-panel ${p.cls}">
        <div class="smp-action-label">${p.label}</div>
        <div class="smp-action-text">${_escape(na[p.key])}</div>
      </div>`)
    .join('');

  return `
    <p class="smp-step-description">${STEP_DESCRIPTION[step.type] || ''}</p>
    ${step.objective ? `<div class="smp-step-objective">${_escape(step.objective)}</div>` : ''}
    ${observeHTML ? `
      <div class="smp-cue-block">
        <div class="smp-section-label">Yang perlu diamati</div>
        <ul class="smp-observe-list">${observeHTML}</ul>
      </div>` : ''}
    ${actionPanels ? `<div class="smp-action-row">${actionPanels}</div>` : ''}`;
}

function _renderBoost(step) {
  const triggers = (step.trigger || [])
    .map(t => `<li class="smp-boost-item smp-boost--trigger">⚡ ${_escape(t)}</li>`)
    .join('');

  const actions = (step.action || [])
    .map((a, i) => `<li class="smp-boost-item smp-boost--action">${i + 1}. ${_escape(a)}</li>`)
    .join('');

  return `
    <p class="smp-step-description">${STEP_DESCRIPTION[step.type] || ''}</p>
    <div class="smp-boost-header">BOOST — Aktivitas Pengayaan</div>
    ${triggers ? `
      <div class="smp-cue-block">
        <div class="smp-section-label">Kondisi pemicu</div>
        <ul class="smp-boost-list">${triggers}</ul>
      </div>` : ''}
    ${actions ? `
      <div class="smp-cue-block">
        <div class="smp-section-label">Langkah guru</div>
        <ul class="smp-boost-list">${actions}</ul>
      </div>` : ''}`;
}

// ── SKENARIO RENDERER ─────────────────────────────────────────

function _renderStepSkenario(step, sk) {
  const langkah = sk.langkah;
  switch (step.type) {
    case 'MODEL'   : return _renderSkenarioModel(langkah.model, sk);
    case 'REPEAT'  : return _renderSkenarioRepeat(langkah.repeat, sk);
    case 'CHANGE'  : return _renderSkenarioChange(langkah.change);
    case 'INTERACT': return _renderSkenarioInteract(langkah.interact);
    case 'SHARE'   : return _renderSkenarioShare(langkah.share);
    case 'CHECK'   : return _renderSkenarioCheck(langkah.check);
    case 'BOOST'   : return _renderSkenarioBoost(langkah.boost);
    default:
      return `<div class="smp-teks-biasa">Langkah tidak dikenal: ${_escape(step.type)}</div>`;
  }
}

// ── Helper: render instruksi[] ─────────────────────────────────

function _renderInstruksiList(instruksi) {
  if (!Array.isArray(instruksi) || instruksi.length === 0) return '';
  return instruksi.map(item => {
    if (!item || !item.tipe) return '';
    const teks = _escape(item.teks || '');
    switch (item.tipe) {
      case 'AKSI':
        return `<div class="sk-instruksi sk-aksi">
          <span class="sk-ikon">⚡</span>
          <span class="sk-teks">${teks}</span>
        </div>`;
      case 'UCAP':
        return `<div class="sk-instruksi sk-ucap">
          <span class="sk-ikon">🗣</span>
          <span class="sk-teks sk-ucap-teks">${teks}</span>
          <button class="smp-tts-btn sk-tts" data-kalimat="${_escape(item.teks || '')}"
                  aria-label="Dengarkan">🔊</button>
        </div>`;
      case 'bantuan':
        return `<details class="sk-bantuan">
          <summary><span class="sk-ikon">💡</span> Bantuan</summary>
          <div class="sk-bantuan-isi">${teks}</div>
        </details>`;
      case 'darurat':
        return `<details class="sk-darurat">
          <summary><span class="sk-ikon">🚨</span> Darurat</summary>
          <div class="sk-darurat-isi">${teks}</div>
        </details>`;
      case 'cue':
        return `<div class="sk-instruksi sk-cue">
          <span class="sk-ikon">📌</span>
          <span class="sk-teks">${teks}</span>
        </div>`;
      default:
        return `<div class="sk-instruksi sk-aksi">
          <span class="sk-ikon">•</span>
          <span class="sk-teks">${teks}</span>
        </div>`;
    }
  }).join('');
}

// ── Helper: render diferensiasi ────────────────────────────────

function _renderDiferensiasi(dif) {
  if (!dif) return '';
  return `<div class="sk-dif-wrap">
    <div class="sk-dif-label">Diferensiasi</div>
    <table class="sk-dif-tabel">
      <tr>
        <td class="sk-dif-level sk-mudah">Mudah</td>
        <td class="sk-dif-tugas">${_escape(dif.mudah || '')}</td>
      </tr>
      <tr>
        <td class="sk-dif-level sk-standar">Standar</td>
        <td class="sk-dif-tugas">${_escape(dif.standar || '')}</td>
      </tr>
      <tr>
        <td class="sk-dif-level sk-tantangan">Tantangan</td>
        <td class="sk-dif-tugas">${_escape(dif.tantangan || '')}</td>
      </tr>
    </table>
  </div>`;
}

// ── Helper: header langkah ─────────────────────────────────────

function _renderLangkahHeader(nama, durasi) {
  return `<div class="sk-langkah-header">
    <span class="sk-langkah-nama">${_escape(nama)}</span>
    <span class="sk-langkah-durasi">${_escape(String(durasi ?? ''))} menit</span>
  </div>`;
}

// ── Skenario render: MODEL ─────────────────────────────────────

function _renderSkenarioModel(model, sk) {
  return _renderLangkahHeader('MODEL', model.durasi_menit)
    + (model.intro ? `<div class="sk-intro">${_escape(model.intro)}</div>` : '')
    + _renderInstruksiList(model.instruksi);
}

// ── Skenario render: REPEAT ────────────────────────────────────

function _renderSkenarioRepeat(repeat, sk) {
  const idx     = _state.repeatKalimatIndex;
  const kalimat = repeat.kalimat || [];
  const total   = kalimat.length;
  const current = kalimat[idx];

  if (!current) return _renderLangkahHeader('REPEAT', repeat.durasi_menit);

  const isLast  = idx === total - 1;

  const navPrev = idx > 0
    ? `<button class="sk-btn sk-btn-prev" onclick="_skenarioRepeatNav(-1)">◀ Sebelumnya</button>`
    : '';
  const navNext = !isLast
    ? `<button class="sk-btn sk-btn-next" onclick="_skenarioRepeatNav(1)">Berikutnya ▶</button>`
    : '';

  const penutupHTML = isLast
    ? _renderInstruksiList(repeat.instruksi_penutup || [])
    : '';

  return _renderLangkahHeader('REPEAT', repeat.durasi_menit)
    + (repeat.intro ? `<div class="sk-intro">${_escape(repeat.intro)}</div>` : '')
    + `<div class="sk-repeat-nav">
        <span class="sk-repeat-counter">${_escape(current.label)} dari ${total}</span>
      </div>`
    + _renderInstruksiList(current.instruksi)
    + penutupHTML
    + `<div class="sk-repeat-tombol">${navPrev}${navNext}</div>`;
}

function _skenarioRepeatNav(delta) {
  const repeat = _state.tp?.skenario?.langkah?.repeat;
  if (!repeat) return;
  const total = (repeat.kalimat || []).length;
  const next  = _state.repeatKalimatIndex + delta;
  if (next < 0 || next >= total) return;
  _state.repeatKalimatIndex = next;
  _render();
}

// ── Skenario render: CHANGE ────────────────────────────────────

function _renderSkenarioChange(change) {
  return _renderLangkahHeader('CHANGE', change.durasi_menit)
    + (change.intro ? `<div class="sk-intro">${_escape(change.intro)}</div>` : '')
    + _renderInstruksiList(change.instruksi)
    + _renderDiferensiasi(change.diferensiasi);
}

// ── Skenario render: INTERACT ──────────────────────────────────

function _renderSkenarioInteract(interact) {
  return _renderLangkahHeader('INTERACT', interact.durasi_menit)
    + (interact.intro ? `<div class="sk-intro">${_escape(interact.intro)}</div>` : '')
    + _renderInstruksiList(interact.instruksi)
    + _renderDiferensiasi(interact.diferensiasi);
}

// ── Skenario render: SHARE ─────────────────────────────────────

function _renderSkenarioShare(share) {
  return _renderLangkahHeader('SHARE', share.durasi_menit)
    + (share.intro ? `<div class="sk-intro">${_escape(share.intro)}</div>` : '')
    + _renderInstruksiList(share.instruksi)
    + _renderDiferensiasi(share.diferensiasi);
}

// ── Skenario render: CHECK ─────────────────────────────────────

function _renderSkenarioCheck(check) {
  const jalur  = _state.checkJalur;
  const header = _renderLangkahHeader('CHECK', check.durasi_menit);
  const intro  = check.intro ? `<div class="sk-intro">${_escape(check.intro)}</div>` : '';
  const instruksi = _renderInstruksiList(check.instruksi);

  if (jalur === null || jalur === undefined) {
    return header + intro + instruksi
      + `<div class="sk-check-pilih">
          <div class="sk-check-label">Pilih jalur:</div>
          <div class="sk-check-tombol">
            <button class="sk-btn sk-btn-lancar"
                    onclick="_skenarioCheckJalur('lancar')">✓ Mayoritas Lancar</button>
            <button class="sk-btn sk-btn-belum"
                    onclick="_skenarioCheckJalur('belum')">✗ Masih Ragu</button>
          </div>
        </div>`;
  }

  if (jalur === 'lancar') {
    const runtime  = _state.tp?.runtime || [];
    const idx      = _state.stepIndex;
    const isLast   = idx >= runtime.length - 1;
    const lanjutBtn = isLast
      ? `<button class="sk-btn sk-btn-next" onclick="_endSesi()">Selesai ✓</button>`
      : `<button class="sk-btn sk-btn-next" onclick="_nextStep()">Lanjut ke BOOST →</button>`;
    return header + intro + instruksi
      + _renderInstruksiList(check.jalur_lancar)
      + `<div class="sk-repeat-tombol">${lanjutBtn}</div>`;
  }

  if (jalur === 'belum') {
    return header + intro + instruksi
      + _renderInstruksiList(check.jalur_belum_lancar)
      + `<div class="sk-repeat-tombol">
          <button class="sk-btn sk-btn-belum" onclick="_endSesi()">Selesai</button>
        </div>`;
  }

  return header + intro + instruksi;
}

function _skenarioCheckJalur(jalur) {
  _state.checkJalur = jalur;
  _render();
}

function _nextStep() {
  const runtime = _state.tp?.runtime || [];
  const next    = _state.stepIndex + 1;
  if (next < runtime.length) {
    _transition({ stepIndex: next });
  } else {
    _transition({ aktState: 'selesai' });
  }
}

function _endSesi() {
  _transition({ aktState: 'selesai' });
}

// ── Skenario render: BOOST ─────────────────────────────────────

function _renderSkenarioBoost(boost) {
  return _renderLangkahHeader('BOOST', boost.durasi_menit)
    + (boost.intro ? `<div class="sk-intro">${_escape(boost.intro)}</div>` : '')
    + `<div class="sk-boost-section">
        <div class="sk-boost-label">Untuk siswa yang masih kesulitan</div>
        ${_renderInstruksiList(boost.untuk_kesulitan)}
      </div>`
    + `<div class="sk-boost-section">
        <div class="sk-boost-label">Untuk siswa yang sudah lancar</div>
        ${_renderInstruksiList(boost.untuk_lancar)}
      </div>`
    + (boost.cue_sisa ? `<div class="sk-cue-sisa">📌 ${_escape(boost.cue_sisa)}</div>` : '');
}

// ── SCREEN: SELESAI ───────────────────────────────────────────

function _renderSelesai() {
  const tp      = _state.tp;
  const meta    = tp?.metadata || {};
  const runtime = tp?.runtime  || [];
  const total   = _totalDurasi(runtime);

  _root.innerHTML = `
    <div class="sr-app">
      <div class="sr-body sr-body--center">
        <div style="font-size:48px;margin-bottom:12px;">✅</div>
        <div class="sr-fase-label">SESI SELESAI</div>
        <div class="sr-fase-judul">${_escape(meta.title || '—')}</div>
        <div class="sr-fase-meta">
          ${runtime.length} langkah · ~${total} menit · Kelas ${_escape(meta.grade)}
        </div>
        <div class="smp-selesai-note" style="margin-top:16px;">Semua langkah telah dilalui.</div>
        <div class="smp-selesai-note" style="margin-top:8px;font-size:12px;color:rgba(255,255,255,.4);">
          Tekan Tutup Sesi untuk kembali ke dashboard.
        </div>
      </div>
      <div class="sr-footer">
        <button class="sr-btn-primary" id="smp-btn-tutup">Tutup Sesi</button>
      </div>
    </div>`;

  _root.querySelector('#smp-btn-tutup').addEventListener('click', () => {
    _transition({ aktState: 'closure' });
  });
}

// ── OVERLAY: Kondisi kelas tahap 1 (reuse generik dari SD) ─────

function _renderKondisiOverlay() {
  document.querySelector('.sr-overlay')?.remove();

  const opsiHTML = KONDISI_LIST.map(k =>
    `<button class="sr-opsi" data-kondisi="${k.id}">${_escape(k.label)}</button>`
  ).join('');

  const overlay = document.createElement('div');
  overlay.className = 'sr-overlay';
  overlay.innerHTML = `
    <div class="sr-overlay-content">
      <h2 class="sr-overlay-title">Kondisi kelas sekarang?</h2>
      ${opsiHTML}
      <button class="sr-btn-secondary" id="smp-btn-kondisi-batal" style="margin-top:12px;">Batal</button>
    </div>`;

  document.body.appendChild(overlay);

  overlay.querySelectorAll('[data-kondisi]').forEach(btn => {
    btn.addEventListener('click', () => {
      const kondisi = btn.dataset.kondisi;
      overlay.remove();
      if (kondisi === 'lancar') return;
      _renderFallbackOverlay(kondisi);
    });
  });

  overlay.querySelector('#smp-btn-kondisi-batal').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

// ── OVERLAY: Fallback detail tahap 2 ────────────────────────

function _renderFallbackOverlay(kondisi) {
  document.querySelector('.sr-overlay')?.remove();

  const instruksi    = FALLBACK_GENERIC[kondisi] || 'Lanjut sesuai feeling Anda di kelas.';
  const judulKondisi = KONDISI_NICE[kondisi] || kondisi;

  const overlay = document.createElement('div');
  overlay.className = 'sr-overlay';
  overlay.innerHTML = `
    <div class="sr-overlay-content">
      <h2 class="sr-overlay-title">${_escape(judulKondisi)}?</h2>
      <div class="sr-fallback-box">
        <strong>Coba ini:</strong><br>${_escape(instruksi)}
      </div>
      <button class="sr-opsi" id="smp-btn-sudah-coba">Sudah coba, kembali ke kelas</button>
    </div>`;

  document.body.appendChild(overlay);

  overlay.querySelector('#smp-btn-sudah-coba').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

// ── OVERLAY: Observasi Formatif — KUALITATIF MURNI, TANPA SKOR ─
// Berbeda total dari overlay penilaian SD: tidak ada angka/huruf/skala
// apa pun di sini, menegakkan constraint Fase D check_without_score
// juga di sisi runtime (bukan cuma validator data).
// Disimpan ke store terpisah 'penilaian_log_smp' — TIDAK menyentuh
// store 'penilaian_log' milik SD (lihat storage/penilaian-smp.js).

const OBSERVE_TAGS = ['Aktif', 'Butuh dorongan', 'Belum siap', 'Perlu model ulang', 'Perlu repeat'];

async function _renderObservasiOverlay(step) {
  document.querySelector('.sr-overlay')?.remove();

  const siswaList = _state.siswaList || [];
  if (!siswaList.length) {
    window.__FLAF__?.showToast?.('Belum ada siswa di rombel ini.');
    return;
  }

  const draftKey = `draft_observasi_smp_${_state.rombel?.id}_${_state.tp?.metadata?.pattern_id}`;
  if (!_state.observasiDraft) _state.observasiDraft = {};
  for (const s of siswaList) {
    if (!_state.observasiDraft[s.id]) {
      _state.observasiDraft[s.id] = { tags: [], catatan: '' };
    }
  }

  const allBlank = Object.values(_state.observasiDraft).every(h => h.tags.length === 0 && !h.catatan);
  if (allBlank) {
    try {
      const saved = await db.get('kv', draftKey);
      if (saved && typeof saved === 'object' && Object.keys(saved).length > 0) {
        _state.observasiDraft = saved;
      }
    } catch (_) { /* db miss — lanjut normal */ }
  }

  const hasil = _state.observasiDraft;
  let openIdx = 0;

  function _siswaRowHTML(s, i) {
    const h = hasil[s.id];
    const tagsHTML = OBSERVE_TAGS.map(tag => `
      <button class="sr-opsi smp-obs-tag ${h.tags.includes(tag) ? 'smp-obs-tag--active' : ''}"
        data-siswa="${s.id}" data-tag="${_escape(tag)}">${_escape(tag)}</button>
    `).join('');

    return `
      <div class="smp-obs-row">
        <button class="smp-obs-head" data-toggle-idx="${i}">
          <span>${_escape(s.nama)}</span>
          <span>${h.tags.length > 0 || h.catatan ? '✓' : ''}</span>
        </button>
        ${openIdx === i ? `
        <div class="smp-obs-body">
          <div class="smp-obs-tags">${tagsHTML}</div>
          <textarea class="smp-obs-catatan" data-siswa="${s.id}"
            placeholder="Catatan tindak lanjut (opsional)">${_escape(h.catatan)}</textarea>
        </div>` : ''}
      </div>`;
  }

  function _draw() {
    const overlay = document.querySelector('.sr-overlay');
    if (!overlay) return;
    const list = overlay.querySelector('#smp-obs-list');
    if (list) list.innerHTML = siswaList.map((s, i) => _siswaRowHTML(s, i)).join('');
    _bindRows(overlay);
  }

  function _bindRows(overlay) {
    overlay.querySelectorAll('[data-toggle-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.dataset.toggleIdx, 10);
        openIdx = openIdx === i ? -1 : i;
        _draw();
      });
    });
    overlay.querySelectorAll('[data-siswa][data-tag]').forEach(btn => {
      btn.addEventListener('click', () => {
        const h = hasil[btn.dataset.siswa];
        const tag = btn.dataset.tag;
        const i = h.tags.indexOf(tag);
        if (i >= 0) h.tags.splice(i, 1); else h.tags.push(tag);
        db.set('kv', draftKey, hasil).catch(() => {});
        _draw();
      });
    });
    overlay.querySelectorAll('.smp-obs-catatan').forEach(ta => {
      ta.addEventListener('input', () => {
        hasil[ta.dataset.siswa].catatan = ta.value;
        db.set('kv', draftKey, hasil).catch(() => {});
      });
    });
  }

  const overlay = document.createElement('div');
  overlay.className = 'sr-overlay';
  overlay.innerHTML = `
    <div class="sr-overlay-content sr-overlay-content--wide">
      <h2 class="sr-overlay-title">Observasi Formatif</h2>
      <div class="smp-obs-hint">Catatan kualitatif — tidak ada skor/nilai.</div>
      <div id="smp-obs-list">${siswaList.map((s, i) => _siswaRowHTML(s, i)).join('')}</div>
      <div class="sr-btn-row" style="margin-top:14px;">
        <button class="sr-btn-secondary" id="smp-obs-batal">Tutup</button>
        <button class="sr-btn-primary" id="smp-obs-simpan">Simpan</button>
      </div>
    </div>`;

  document.body.appendChild(overlay);
  _bindRows(overlay);

  overlay.querySelector('#smp-obs-batal').addEventListener('click', () => overlay.remove());
  overlay.querySelector('#smp-obs-simpan').addEventListener('click', async () => {
    try {
      const { saveObservasiSMP } = await import('../storage/penilaian-smp.js');
      const entries = siswaList.map(s => ({
        siswaId : s.id,
        tags    : hasil[s.id].tags,
        catatan : hasil[s.id].catatan || null,
      }));
      await saveObservasiSMP(
        _state.rombel?.id, _state.tp?.metadata?.pattern_id, _state.sesiId, step?.id, entries
      );
      await db.remove('kv', draftKey).catch(() => {});
      window.__FLAF__?.showToast?.('Observasi tersimpan.');
      overlay.remove();
    } catch (e) {
      console.error('[SRS] saveObservasiSMP gagal:', e);
      window.__FLAF__?.showToast?.('Gagal menyimpan observasi.');
    }
  });
}

// ── SCREEN: CLOSURE ───────────────────────────────────────────

function _renderClosure() {
  _root.innerHTML = `
    <div class="sr-app">
      <div class="sr-body sr-body--center">
        <div class="sr-fase-label">KONFIRMASI</div>
        <div class="sr-fase-judul">Sesi dicatat.</div>
        <div class="smp-selesai-note">Kembali ke dashboard.</div>
      </div>
    </div>`;

  setTimeout(() => {
    if (_onDone) _onDone({ sesiId: _state.sesiId });
  }, 800);
}

// Expose skenario navigation callbacks ke window scope
// Diperlukan karena onclick= inline tidak bisa akses ES module scope
window._skenarioRepeatNav  = _skenarioRepeatNav;
window._skenarioCheckJalur = _skenarioCheckJalur;
window._nextStep           = _nextStep;
window._endSesi            = _endSesi;
