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

// ── State ─────────────────────────────────────────────────────

let _state = {
  tp        : null,
  rombel    : null,
  siswaList : [],
  statusMap : {},
  stepIndex : 0,
  aktState  : 'preview',
  sesiId    : null,
};

let _root   = null;
let _onDone = null;
let _onBack = null;

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

function _renderPreview() {
  const tp      = _state.tp;
  const meta    = tp.metadata || {};
  const res     = tp.resources || {};
  const runtime = tp.runtime   || [];
  const rombel  = _state.rombel;
  const jumlah  = _state.siswaList.length;
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
          <span class="smp-meta-chip">${_escape(meta.complexity_level || '')}</span>
          <span class="smp-meta-chip">~${total} menit</span>
          <span class="smp-meta-chip">${runtime.length} langkah</span>
        </div>

        <div class="smp-preview-section">
          <div class="smp-section-label">Tujuan komunikatif</div>
          <div class="smp-section-body">${_escape(meta.communicative_goal || '—')}</div>
        </div>

        <div class="smp-preview-section">
          <div class="smp-section-label">Konteks</div>
          <div class="smp-section-body">${_escape(meta.context || '—')}</div>
        </div>

        ${vocabHTML ? `
        <div class="smp-preview-section">
          <div class="smp-section-label">Kosakata aktif</div>
          <div class="smp-vocab-row">${vocabHTML}</div>
        </div>` : ''}

        <div class="smp-preview-section">
          <div class="smp-section-label">Siswa</div>
          <div class="smp-section-body">${jumlah > 0 ? jumlah + ' terdaftar' : 'Belum ada siswa'}</div>
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
  const meta = _state.tp?.metadata || {};

  _root.innerHTML = `
    <div class="sr-app">
      <div class="sr-body sr-body--center">
        <div class="sr-fase-label">SIAPKAN KELAS</div>
        <div class="sr-fase-judul">${_escape(meta.title || '—')}</div>
        <div class="sr-fase-meta">Kelas ${_escape(meta.grade)} · ${_escape(meta.topic || '')}</div>
        <div class="smp-entering-note">Pastikan semua siswa siap dan perhatian terpusat.</div>
      </div>
      <div class="sr-footer">
        <button class="sr-btn-primary" id="smp-btn-lanjut">Lanjut →</button>
      </div>
    </div>`;

  _root.querySelector('#smp-btn-lanjut').addEventListener('click', () => {
    _transition({ aktState: 'running', stepIndex: 0 });
  });
}

// ── SCREEN: RUNNING ───────────────────────────────────────────

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

      <div class="sr-footer smp-run-footer">
        <button class="sr-btn-secondary" id="smp-btn-prev" ${isFirst ? 'disabled' : ''}>← Sebelumnya</button>
        <button class="sr-btn-primary"   id="smp-btn-next">${isLast ? 'Selesai ✓' : 'Lanjut →'}</button>
      </div>
    </div>`;

  _root.querySelector('#smp-btn-prev').addEventListener('click', () => {
    if (!isFirst) _transition({ stepIndex: idx - 1 });
  });
  _root.querySelector('#smp-btn-next').addEventListener('click', () => {
    if (isLast) {
      _transition({ aktState: 'selesai' });
    } else {
      _transition({ stepIndex: idx + 1 });
    }
  });
}

function _renderStep(step, res) {
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

function _renderModel(step, res) {
  const sentences = (step.sentence_refs || [])
    .map(id => _lookupById(res.model_sentences, id))
    .filter(Boolean)
    .map(s => `<div class="smp-model-sentence">"${_escape(s.text)}"</div>`)
    .join('');

  const visuals = (step.visual_refs || [])
    .map(id => _lookupById(res.visual_cues, id))
    .filter(Boolean)
    .map(v => `<li class="smp-cue-item smp-cue--visual">📸 ${_escape(v.description)}</li>`)
    .join('');

  const gestures = (step.gesture_refs || [])
    .map(id => _lookupById(res.gesture_cues, id))
    .filter(Boolean)
    .map(g => `<li class="smp-cue-item smp-cue--gesture">🤲 ${_escape(g.description)}</li>`)
    .join('');

  return `
    <div class="smp-step-objective">${_escape(step.objective || '')}</div>
    ${sentences ? `<div class="smp-model-block">${sentences}</div>` : ''}
    ${(visuals || gestures) ? `
      <div class="smp-cue-block">
        <div class="smp-section-label">Alat bantu</div>
        <ul class="smp-cue-list">${visuals}${gestures}</ul>
      </div>` : ''}`;
}

function _renderRepeat(step, res) {
  const sentences = (step.sentence_refs || [])
    .map(id => _lookupById(res.model_sentences, id))
    .filter(Boolean)
    .map(s => `<div class="smp-model-sentence">"${_escape(s.text)}"</div>`)
    .join('');

  const modeLabel = {
    choral    : 'Kelas bersama (choral)',
    individual: 'Individual',
    pair      : 'Berpasangan',
  }[step.repeat_mode] || _escape(step.repeat_mode || '');

  return `
    <div class="smp-step-objective">${_escape(step.objective || '')}</div>
    ${modeLabel ? `<div class="smp-mode-badge">Mode: ${modeLabel}</div>` : ''}
    ${sentences ? `<div class="smp-model-block">${sentences}</div>` : ''}`;
}

function _renderChange(step) {
  const targets = (step.change_target || [])
    .map(t => `<span class="smp-vocab-chip">${_escape(t)}</span>`)
    .join('');

  return `
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

// ── SCREEN: SELESAI ───────────────────────────────────────────

function _renderSelesai() {
  const tp      = _state.tp;
  const meta    = tp?.metadata || {};
  const runtime = tp?.runtime  || [];
  const total   = _totalDurasi(runtime);

  _root.innerHTML = `
    <div class="sr-app">
      <div class="sr-body sr-body--center">
        <div class="sr-fase-label">SESI SELESAI</div>
        <div class="sr-fase-judul">${_escape(meta.title || '—')}</div>
        <div class="sr-fase-meta">
          ${runtime.length} langkah · ~${total} menit · Kelas ${_escape(meta.grade)}
        </div>
        <div class="smp-selesai-note">Semua langkah telah dilalui.</div>
      </div>
      <div class="sr-footer">
        <button class="sr-btn-primary" id="smp-btn-tutup">Tutup Sesi</button>
      </div>
    </div>`;

  _root.querySelector('#smp-btn-tutup').addEventListener('click', () => {
    _transition({ aktState: 'closure' });
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
