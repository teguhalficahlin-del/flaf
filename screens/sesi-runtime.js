/**
 * =============================================================
 * FLAF — SESI RUNTIME
 * File: screens/sesi-runtime.js
 *
 * State machine untuk satu sesi mengajar satu TP.
 * Membaca langkah[] dari fase-a.js (schema v5.0).
 *
 * States:
 *   preview   → SesiPreviewing: mulai
 *   resume    → SesiResumePrompt: lanjut atau mulai ulang
 *   entering  → FaseEntering: transisi masuk fase baru
 *   running   → satu langkah aktif, guru tap lanjut/mundur
 *   selesai   → FaseSelesai: ringkasan fase, lanjut
 *   closure   → SesiClosure: kendala + catatan + simpan
 *
 * Layout mengikuti UI-SKETCH.html:
 *   app-header (tipis) / app-body (flex:1, center) / app-footer
 *   Overlay kondisi 2 tahap: pilih kondisi → detail fallback
 *
 * Prinsip:
 *   - Satu objek _state, satu fungsi _transition()
 *   - Tidak ada window.* pollution
 *   - Semua render tulis ke #sr-root via innerHTML
 * =============================================================
 */

import { db }            from '../storage/db.js';
import { savePenilaian } from '../storage/siswa-history.js';

// ── Konstanta ─────────────────────────────────────────────────

const RESUME_MAX_MS    = 4 * 60 * 60 * 1000;
const RESUME_STORE_KEY = 'sesi_aktif';
const STORE_KV         = 'kv';

const FALLBACK_GENERIC = {
  kelas_ribut  : 'Tangan di pinggang, tunggu sunyi. Ulangi instruksi setelah hening.',
  energi_turun : 'Berdiri, ajak tepuk pendek. Lanjut langkah yang lebih bergerak.',
  siswa_pasif  : 'Mulai dari baris depan. Beri jempol untuk yang berani.',
  waktu_mepet  : 'Skip langkah yang tersisa. Langsung ke Penutup sekarang.',
};

const KONDISI_CLOSURE = [
  { val: 'lancar',          label: 'Lancar, sesuai rencana' },
  { val: 'waktu_kurang',    label: 'Waktu tidak cukup'      },
  { val: 'kurang_kondusif', label: 'Kelas kurang kondusif'  },
  { val: 'media_tidak_ada', label: 'Media tidak tersedia'   },
  { val: 'lainnya',         label: 'Lainnya'                },
];

// ── State ─────────────────────────────────────────────────────

let _state = {
  tp             : null,
  rombel         : null,
  siswaList      : [],
  faseIdx        : 0,
  langkahIdx     : 0,
  aktState       : 'preview',
  fallbackKondisi: null,
  closureMood    : null,
  kendala        : null,
  ttsUtterance   : null,
  sesiId         : null,   // id unik per sesi — dibuat saat mulai, dipakai penilaian_log
};

let _root   = null;
let _onDone = null;

// ── Public API ────────────────────────────────────────────────

export async function mount(root, tpData, rombel, siswaList, onDone) {
  if (!root || !tpData) {
    console.error('[SR] mount: root atau tpData null');
    return;
  }

  _root   = root;
  _onDone = onDone || (() => {});
  _ttsStop();

  Object.assign(_state, {
    tp             : tpData,
    rombel         : rombel || { id: '', nama: '', tingkat: 1 },
    siswaList      : Array.isArray(siswaList) ? siswaList : [],
    faseIdx        : 0,
    langkahIdx     : 0,
    aktState       : 'preview',
    fallbackKondisi: null,
    closureMood    : null,
    kendala        : null,
    ttsUtterance   : null,
    sesiId         : null,
  });

  // Cek resume
  try {
    const saved = await db.get(STORE_KV, RESUME_STORE_KEY);
    if (saved && saved.tpNomor === tpData.nomor && saved.rombelId === rombel?.id) {
      const age = Date.now() - (saved.savedAt || 0);
      if (age < RESUME_MAX_MS) {
        _state.faseIdx    = saved.faseIdx    ?? 0;
        _state.langkahIdx = saved.langkahIdx ?? 0;
        _state.aktState   = 'resume';
      } else {
        await db.remove(STORE_KV, RESUME_STORE_KEY).catch(() => {});
      }
    }
  } catch (e) {
    console.warn('[SR] cek resume gagal:', e.message);
  }

  _render();
}

export function unmount() {
  _ttsStop();
  document.querySelector('.sr-overlay')?.remove();
  _root = null;
}

// ── Transition ────────────────────────────────────────────────

function _transition(patch) {
  Object.assign(_state, patch);
  _persistState();
  _render();
}

async function _persistState() {
  if (_state.aktState === 'closure' || _state.aktState === 'preview') return;
  try {
    await db.set(STORE_KV, RESUME_STORE_KEY, {
      tpNomor   : _state.tp?.nomor,
      rombelId  : _state.rombel?.id,
      faseIdx   : _state.faseIdx,
      langkahIdx: _state.langkahIdx,
      savedAt   : Date.now(),
    });
  } catch (e) {
    console.warn('[SR] persist gagal:', e.message);
  }
}

// ── Helpers ───────────────────────────────────────────────────

function _currentFase() {
  return _state.tp?.skenario?.[_state.faseIdx] || null;
}

function _currentLangkah() {
  return _currentFase()?.langkah?.[_state.langkahIdx] || null;
}

function _escape(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function _now() {
  return new Date().toLocaleDateString('id-ID', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });
}

function _ttsSpeak(teks, btnEl) {
  if (!('speechSynthesis' in window)) return;
  _ttsStop();
  const u   = new SpeechSynthesisUtterance(teks);
  u.lang    = 'en-US';
  u.rate    = 0.9;
  u.pitch   = 1.1;
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

// ── Navigate langkah ──────────────────────────────────────────

function _langkahNext() {
  const total = _currentFase()?.langkah?.length || 0;
  const next  = _state.langkahIdx + 1;
  if (next < total) {
    _transition({ langkahIdx: next });
  } else {
    _transition({ aktState: 'selesai' });
  }
}

function _langkahPrev() {
  if (_state.langkahIdx > 0) {
    _transition({ langkahIdx: _state.langkahIdx - 1 });
  } else if (_state.faseIdx > 0) {
    const faseBefore = _state.tp?.skenario?.[_state.faseIdx - 1];
    const lastIdx = Math.max(0, (faseBefore?.langkah || []).length - 1);
    _transition({ faseIdx: _state.faseIdx - 1, langkahIdx: lastIdx, aktState: 'running' });
  }
}

function _nextFase() {
  const nextFaseIdx = _state.faseIdx + 1;
  if (nextFaseIdx < (_state.tp?.skenario?.length || 0)) {
    _transition({ aktState: 'entering', faseIdx: nextFaseIdx, langkahIdx: 0 });
  } else {
    _transition({ aktState: 'closure' });
  }
}

// ── Render ────────────────────────────────────────────────────

function _render() {
  if (!_root) return;
  _ttsStop();
  document.querySelector('.sr-overlay')?.remove();

  switch (_state.aktState) {
    case 'preview'  : return _renderPreview();
    case 'resume'   : return _renderResume();
    case 'entering' : return _renderEntering();
    case 'running'  : return _renderRunning();
    case 'selesai'  : return _renderSelesai();
    case 'closure'  : return _renderClosure();
    default:
      _root.innerHTML = `<div class="sr-app"><div class="sr-body">State tidak dikenal</div></div>`;
  }
}

// ─── SCREEN: SesiPreviewing ───────────────────────────────────

function _renderPreview() {
  const tp     = _state.tp;
  const rombel = _state.rombel;
  const jumlah = _state.siswaList.length;

  _root.innerHTML = `
    <div class="sr-app">
      <div class="sr-body">
        <div class="sr-preview-title">TP ${String(tp.nomor).padStart(2,'0')} — ${_escape(tp.nama)}</div>
        <div class="sr-preview-sub">${_now()} · ${_escape(rombel.nama)}</div>

        <ul class="sr-checklist">
          <li>
            <span>${jumlah > 0 ? jumlah + ' siswa terdaftar' : 'Belum ada siswa — penilaian tidak tersedia'}</span>
            <span class="sr-check${jumlah === 0 ? ' sr-check--warn' : ''}">${jumlah > 0 ? '✓' : '⚠'}</span>
          </li>
          <li>
            <span>Audio TTS tersedia</span>
            <span class="sr-check">${'speechSynthesis' in window ? '✓' : '—'}</span>
          </li>
          <li>
            <span>Data kurikulum dimuat</span>
            <span class="sr-check">✓</span>
          </li>
        </ul>
      </div>

      <div class="sr-footer">
        <button class="sr-btn-primary" id="sr-btn-mulai">Mulai mengajar →</button>
      </div>
    </div>`;

  _root.querySelector('#sr-btn-mulai').addEventListener('click', () => {
    _transition({
      aktState: 'entering',
      faseIdx : 0,
      langkahIdx: 0,
      sesiId  : Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
    });
  });
}

// ─── SCREEN: Resume ───────────────────────────────────────────

function _renderResume() {
  const fase  = _currentFase();
  const total = fase?.langkah?.length || 0;

  _root.innerHTML = `
    <div class="sr-app">
      <div class="sr-body sr-body--center">
        <div class="sr-resume-icon">⏸</div>
        <div class="sr-resume-title">Sesi belum selesai</div>
        <div class="sr-resume-sub">${_escape(_state.tp?.nama || '—')} · ${_escape(_state.rombel?.nama || '—')}</div>
        <div class="sr-resume-pos">
          Terakhir di: <strong>${_escape(fase?.fase || '—')}</strong>,
          langkah ${_state.langkahIdx + 1} dari ${total}
        </div>
      </div>
      <div class="sr-footer">
        <button class="sr-btn-primary" id="sr-btn-lanjut">Lanjut dari sini →</button>
        <button class="sr-btn-secondary" id="sr-btn-ulang">Mulai sesi baru</button>
      </div>
    </div>`;

  _root.querySelector('#sr-btn-lanjut').addEventListener('click', () => {
    _transition({ aktState: 'running' });
  });
  _root.querySelector('#sr-btn-ulang').addEventListener('click', async () => {
    await db.remove(STORE_KV, RESUME_STORE_KEY).catch(() => {});
    _transition({ aktState: 'preview', faseIdx: 0, langkahIdx: 0 });
  });
}

// ─── SCREEN: FaseEntering ─────────────────────────────────────

function _renderEntering() {
  const fase     = _currentFase();
  const total    = fase?.langkah?.length || 0;
  const durasi   = fase?.durasi || '—';
  const faseName = fase?.fase   || '—';

  _root.innerHTML = `
    <div class="sr-app">
      <div class="sr-body sr-body--center">
        <div class="sr-fase-label">SEKARANG</div>
        <div class="sr-fase-judul">${_escape(faseName)}</div>
        <div class="sr-fase-meta">${total} langkah · ${durasi} menit</div>
      </div>
      <div class="sr-footer">
        <button class="sr-btn-primary" id="sr-btn-mulai-fase">
          Mulai ${_escape(faseName)} →
        </button>
      </div>
    </div>`;

  _root.querySelector('#sr-btn-mulai-fase').addEventListener('click', () => {
    _transition({ aktState: 'running', langkahIdx: 0 });
  });
}

// ── Helpers: running ─────────────────────────────────────────

function _parseTeks(teks) {
  if (!teks) return [];
  const result = [];
  const chunks = teks.split('UCAP:');
  chunks.forEach((chunk, i) => {
    const trimmed = chunk.trim();
    if (!trimmed) return;
    if (i === 0) {
      result.push({ jenis: 'biasa', isi: trimmed });
    } else {
      const m = trimmed.match(/^("[^"]*")([\s\S]*)/);
      if (m) {
        result.push({ jenis: 'ucap', isi: m[1] });
        const rest = m[2].trim().replace(/^[→—–]\s*/, '').trim();
        if (rest) result.push({ jenis: 'biasa', isi: rest });
      } else {
        result.push({ jenis: 'ucap', isi: trimmed });
      }
    }
  });
  return result;
}

function _energiPill(energi) {
  if (!energi) return '';
  const map = {
    '🔵'      : { label: 'Rendah', cls: 'biru'   },
    '⚪'      : { label: 'Rendah', cls: 'biru'   },
    '🟡'      : { label: 'Sedang', cls: 'kuning' },
    '⚪ → 🟡': { label: 'Sedang', cls: 'kuning' },
    '🟠'      : { label: 'Tinggi', cls: 'oren'   },
    '🔴'      : { label: 'Tinggi', cls: 'merah'  },
  };
  const info = map[energi] || map[energi.trim()];
  if (!info) return '';
  return `<span class="sr-energi-pill sr-energi--${info.cls}">● ${info.label}</span>`;
}

// ─── SCREEN: Running ─────────────────────────────────────────
//
// RUNTIME CONTRACT — baca sebelum modifikasi:
//   Runtime ini bersifat GENERIC. Semua TP melewati code path yang sama.
//   Tidak ada branching per TP nomor, id, atau schema tier.
//   Field langkah bersifat opsional — progressive enhancement, bukan precondition.
//
//   DILARANG: if (tp.nomor <= 14) · startsWith('DIFERENSIASI') · per-TP checks
//   WAJIB:    langkah.bantuan  ·  langkah.cue  ·  langkah.darurat  ·  langkah.energi  ·  tipe || 'instruksi'
//
//   Data quality tiers (canonical vs legacy) ada di fase-a.js — bukan di sini.
//   Lihat: CONTEXT.md §Schema Tier Policy

function _renderRunning() {
  const fase    = _currentFase();
  const langkah = _currentLangkah();
  const total   = fase?.langkah?.length || 0;
  const idx     = _state.langkahIdx;
  const faseName = fase?.fase || '—';
  const isFirst  = idx === 0 && _state.faseIdx === 0;
  const isLast   = idx === total - 1;

  if (!langkah) {
    _transition({ aktState: 'selesai' });
    return;
  }

  const tipe = langkah.tipe || 'instruksi';

  const TIPE_INFO = {
    audio        : { label: 'Ucapkan ke siswa', cls: 'au' },
    respons_siswa: { label: 'Respons siswa',    cls: 'rs' },
    instruksi    : { label: 'Instruksi',         cls: 'in' },
  };
  const info = TIPE_INFO[tipe] || TIPE_INFO.instruksi;

  // Energi pill (header)
  const energiPillHTML = _energiPill(langkah.energi);

  // Teks segments
  const teksHTML = _parseTeks(langkah.teks).map(seg =>
    seg.jenis === 'ucap'
      ? `<div class="sr-ucap-block"><div class="sr-ucap-label">UCAP</div>` +
        `<div class="sr-ucap-teks">${_escape(seg.isi)}</div></div>`
      : `<div class="sr-teks-biasa">${_escape(seg.isi)}</div>`
  ).join('');

  // Panduan guru
  const cueHTML = langkah.cue ? `
    <hr class="sr-sep">
    <div class="sr-cue-block">
      <div class="sr-cue-label">⚡ Panduan guru</div>
      <div class="sr-cue-teks">${_escape(langkah.cue)}</div>
    </div>` : '';

  // Bantuan (null | string | string[])
  let bantuanHTML = '';
  if (langkah.bantuan != null) {
    if (Array.isArray(langkah.bantuan)) {
      const items = langkah.bantuan
        .map(b => `<li>${_escape(b)}</li>`)
        .join('');
      bantuanHTML = `
        <div class="sr-bantuan-block">
          <div class="sr-bantuan-label">BANTUAN</div>
          <ol class="sr-bantuan-list">${items}</ol>
        </div>`;
    } else {
      bantuanHTML = `
        <div class="sr-bantuan-block">
          <div class="sr-bantuan-label">BANTUAN</div>
          <div class="sr-bantuan-teks">${_escape(langkah.bantuan)}</div>
        </div>`;
    }
  }

  // Darurat
  const daruratHTML = langkah.darurat ? `
    <div class="sr-darurat">
      <div class="sr-darurat-label">⚠ Darurat</div>
      <div class="sr-darurat-teks">${_escape(langkah.darurat)}</div>
    </div>` : '';

  _root.innerHTML = `
    <div class="sr-app">
      <div class="sr-app-header">
        <span class="sr-fase-info">${_escape(faseName)} · ${idx + 1}/${total}</span>
        ${energiPillHTML}
      </div>

      <div class="sr-body">
        <div class="sr-tipe-row">
          <span class="sr-aktivitas-tipe-badge sr-tipe--${info.cls}">${info.label}</span>
        </div>
        ${teksHTML}
        ${cueHTML}
        ${bantuanHTML}
        ${daruratHTML}
      </div>

      <div class="sr-footer">
        <div class="sr-btn-row">
          <button class="sr-btn-secondary" id="sr-btn-prev"
            ${isFirst ? 'disabled' : ''}>← Sebelumnya</button>
          <button class="sr-btn-primary" id="sr-btn-next">
            ${isLast ? 'Selesai Fase →' : 'Lanjut →'}
          </button>
        </div>
        <button class="sr-btn-kondisi" id="sr-btn-kondisi">⚠ Kondisi kelas bermasalah?</button>
        ${faseName.toLowerCase() === 'inti' ? `
        <button class="sr-btn-penilaian" id="sr-btn-penilaian">📋 Catat penilaian siswa</button>` : ''}
      </div>
    </div>`;

  _root.querySelector('#sr-tts-btn')?.addEventListener('click', () => {
    _ttsSpeak(langkah.teks, _root.querySelector('#sr-tts-btn'));
  });
  _root.querySelector('#sr-btn-next').addEventListener('click', () => _langkahNext());
  _root.querySelector('#sr-btn-prev').addEventListener('click', () => _langkahPrev());
  _root.querySelector('#sr-btn-kondisi').addEventListener('click', () => _renderKondisiOverlay());
  _root.querySelector('#sr-btn-penilaian')?.addEventListener('click', () => _renderPenilaianOverlay());
}

// ─── SCREEN: FaseSelesai ─────────────────────────────────────

function _renderSelesai() {
  const fase     = _currentFase();
  const tp       = _state.tp;
  const faseName = fase?.fase || '—';
  const isLast   = _state.faseIdx >= (tp?.skenario?.length || 1) - 1;
  const nextFaseName = !isLast
    ? (tp?.skenario?.[_state.faseIdx + 1]?.fase || 'Berikutnya')
    : null;

  _root.innerHTML = `
    <div class="sr-app">
      <div class="sr-body sr-body--center">
        <div class="sr-fase-label sr-fase-label--done">SELESAI</div>
        <div class="sr-fase-judul">${_escape(faseName)}</div>
        <div class="sr-fase-meta">${fase?.langkah?.length || 0} langkah selesai</div>
      </div>
      <div class="sr-footer">
        ${isLast
          ? `<button class="sr-btn-primary" id="sr-btn-closure">Tutup Sesi →</button>`
          : `<button class="sr-btn-primary" id="sr-btn-next-fase">Lanjut ke ${_escape(nextFaseName)} →</button>`
        }
      </div>
    </div>`;

  _root.querySelector('#sr-btn-closure')?.addEventListener('click', () => {
    _transition({ aktState: 'closure' });
  });
  _root.querySelector('#sr-btn-next-fase')?.addEventListener('click', () => {
    _nextFase();
  });
}

// ─── SCREEN: SesiClosure ─────────────────────────────────────

function _renderClosure() {
  const tp     = _state.tp;
  const rombel = _state.rombel;

  const moodOpts = [
    { id: 'lancar', emoji: '😊', label: 'Lancar' },
    { id: 'biasa',  emoji: '😐', label: 'Biasa'  },
    { id: 'berat',  emoji: '😓', label: 'Berat'  },
  ];

  const moodHTML = moodOpts.map(m => `
    <div class="sr-mood-btn${_state.closureMood === m.id ? ' sr-mood-btn--selected' : ''}"
         data-mood="${m.id}">
      <span class="sr-mood-emoji">${m.emoji}</span>${m.label}
    </div>`).join('');

  const kendalaHTML = KONDISI_CLOSURE.map(k => `
    <button class="sr-opsi${_state.kendala === k.val ? ' sr-opsi--selected' : ''}"
            data-kendala="${k.val}">
      ${_escape(k.label)}
    </button>`).join('');

  _root.innerHTML = `
    <div class="sr-app">
      <div class="sr-closure">
        <h2 class="sr-closure-title">Sesi Selesai</h2>
        <div class="sr-closure-sub">${_escape(tp?.nama || '—')} · ${_escape(rombel?.nama || '—')}</div>

        <div class="sr-closure-label">Yang Anda rasakan?</div>
        <div class="sr-mood-row">${moodHTML}</div>

        <div class="sr-closure-label">Kendala hari ini</div>
        <div class="sr-opsi-list">${kendalaHTML}</div>

        <div class="sr-closure-label">Catatan singkat (opsional)</div>
        <textarea class="sr-note-input" id="sr-note"
          placeholder="Apa yang ingin diingat untuk sesi berikutnya?"
          maxlength="300"></textarea>

        <div class="sr-closure-hint">
          💡 Data sesi akan tersimpan di Jejak Mengajar.
        </div>
      </div>

      <div class="sr-footer">
        <button class="sr-btn-primary" id="sr-btn-simpan">Simpan &amp; Selesai</button>
      </div>
    </div>`;

  _root.querySelectorAll('[data-mood]').forEach(btn => {
    btn.addEventListener('click', () => {
      _state.closureMood = btn.dataset.mood;
      _root.querySelectorAll('[data-mood]').forEach(b => b.classList.remove('sr-mood-btn--selected'));
      btn.classList.add('sr-mood-btn--selected');
    });
  });

  _root.querySelectorAll('[data-kendala]').forEach(btn => {
    btn.addEventListener('click', () => {
      _state.kendala = btn.dataset.kendala;
      _root.querySelectorAll('[data-kendala]').forEach(b => b.classList.remove('sr-opsi--selected'));
      btn.classList.add('sr-opsi--selected');
    });
  });

  _root.querySelector('#sr-btn-simpan').addEventListener('click', async () => {
    const catatan = _root.querySelector('#sr-note')?.value?.trim() || null;
    const btn     = _root.querySelector('#sr-btn-simpan');
    if (btn) { btn.disabled = true; btn.textContent = 'Menyimpan…'; }
    try { await db.remove(STORE_KV, RESUME_STORE_KEY); } catch {}

    if (btn) { btn.textContent = 'Tersimpan ✓'; }
    _onDone({ tp: _state.tp, rombel: _state.rombel, kendala: _state.kendala, catatan, mood: _state.closureMood || null });
  });
}

// ─── OVERLAY: Kondisi kelas tahap 1 ──────────────────────────

function _renderKondisiOverlay() {
  document.querySelector('.sr-overlay')?.remove();

  const KONDISI_LIST = [
    { id: 'kelas_ribut',  label: 'Ribut, susah fokus'        },
    { id: 'energi_turun', label: 'Energi mulai turun'         },
    { id: 'siswa_pasif',  label: 'Banyak yang takut bicara'   },
    { id: 'waktu_mepet',  label: 'Waktu mepet (sisa singkat)' },
    { id: 'lancar',       label: 'Tidak, semua lancar ✓'      },
  ];

  const opsiHTML = KONDISI_LIST.map(k =>
    `<button class="sr-opsi" data-kondisi="${k.id}">${_escape(k.label)}</button>`
  ).join('');

  const overlay = document.createElement('div');
  overlay.className = 'sr-overlay';
  overlay.innerHTML = `
    <div class="sr-overlay-content">
      <h2 class="sr-overlay-title">Kondisi kelas sekarang?</h2>
      ${opsiHTML}
      <button class="sr-btn-secondary" id="sr-btn-batal" style="margin-top:12px;">Batal</button>
    </div>`;

  document.body.appendChild(overlay);

  overlay.querySelectorAll('[data-kondisi]').forEach(btn => {
    btn.addEventListener('click', () => {
      const kondisi = btn.dataset.kondisi;
      overlay.remove();
      if (kondisi === 'lancar') return;
      _state.fallbackKondisi = kondisi;
      _renderFallbackOverlay();
    });
  });

  overlay.querySelector('#sr-btn-batal').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

// ─── OVERLAY: Fallback detail tahap 2 ────────────────────────

function _renderFallbackOverlay() {
  document.querySelector('.sr-overlay')?.remove();

  const kondisi = _state.fallbackKondisi;
  const KONDISI_NICE = {
    kelas_ribut  : 'Ribut, susah fokus',
    energi_turun : 'Energi mulai turun',
    siswa_pasif  : 'Banyak yang takut bicara',
    waktu_mepet  : 'Waktu mepet',
  };

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
      <button class="sr-opsi" id="sr-btn-sudah-coba">Sudah coba, kembali ke kelas</button>
    </div>`;

  document.body.appendChild(overlay);

  overlay.querySelector('#sr-btn-sudah-coba').addEventListener('click', () => {
    _state.fallbackKondisi = null;
    overlay.remove();
  });
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

// ─── OVERLAY: Penilaian Siswa ─────────────────────────────────

function _renderPenilaianOverlay() {
  document.querySelector('.sr-overlay')?.remove();

  const siswaList = _state.siswaList || [];
  if (!siswaList.length) {
    alert('Belum ada siswa di rombel ini.');
    return;
  }

  // State overlay — hidup dalam closure ini
  const PAGE_SIZE  = 5;
  let modePenilaian = 'cepat';   // 'cepat' | 'detail'
  let halaman       = 0;
  let openIdx       = 0;         // indeks siswa yang accordion-nya terbuka

  // Hasil per siswaId — default semua kosong
  const hasil = {};
  for (const s of siswaList) {
    hasil[s.id] = { capaian: null, l: null, s: null, r: null, perilaku: null };
  }

  const totalHal = Math.ceil(siswaList.length / PAGE_SIZE);

  // ── Builder ──────────────────────────────────────────────────

  function _penilaianNilaiAngka(siswaId) {
    const h = hasil[siswaId];
    if (modePenilaian === 'cepat') return h.capaian;
    const valid = [h.l, h.s, h.r].filter(v => v !== null && !isNaN(v));
    return valid.length ? Math.round(valid.reduce((a, b) => a + b, 0) / valid.length) : null;
  }

  function _sudahDiisi(siswaId) {
    const h = hasil[siswaId];
    if (modePenilaian === 'cepat') return h.capaian !== null;
    return h.l !== null || h.s !== null || h.r !== null;
  }

  function _buildSiswaItem(siswa, localIdx) {
    const globalIdx = halaman * PAGE_SIZE + localIdx;
    const isOpen    = localIdx === openIdx;
    const sudah     = _sudahDiisi(siswa.id);
    const nilaiTamp = _penilaianNilaiAngka(siswa.id);
    const h         = hasil[siswa.id];

    // ── Isi accordion ──
    let isiHTML = '';
    if (modePenilaian === 'cepat') {
      const opsiCapaian = [
        { val: 85, sym: '★', label: 'Lancar'         },
        { val: 75, sym: '◐', label: 'Berkembang'     },
        { val: 65, sym: '○', label: 'Perlu dampingi' },
      ];
      isiHTML = `
        <div class="sr-pn-capaian-row">
          ${opsiCapaian.map(o => `
            <button class="sr-pn-capaian-btn${h.capaian === o.val ? ' sr-pn-capaian-btn--active' : ''}"
                    data-capaian="${o.val}" data-siswa="${siswa.id}">
              <span class="sr-pn-sym">${o.sym}</span>
              <span class="sr-pn-lbl">${o.label}</span>
            </button>`).join('')}
        </div>
        <div class="sr-pn-perilaku-row">
          ${['aktif','dorongan','belum_siap'].map(p => {
            const label = { aktif: 'Aktif', dorongan: 'Perlu dorongan', belum_siap: 'Belum siap' }[p];
            return `<button class="sr-pn-perilaku-btn${h.perilaku === p ? ' sr-pn-perilaku-btn--active' : ''}"
                            data-perilaku="${p}" data-siswa="${siswa.id}">${label}</button>`;
          }).join('')}
        </div>`;
    } else {
      isiHTML = `
        <div class="sr-pn-lsr-grid">
          ${['l','s','r'].map(dim => `
            <div class="sr-pn-lsr-col">
              <div class="sr-pn-lsr-label">${dim.toUpperCase()}</div>
              <input class="sr-pn-lsr-input" type="number" min="0" max="100"
                     placeholder="—" value="${h[dim] !== null ? h[dim] : ''}"
                     data-dim="${dim}" data-siswa="${siswa.id}">
            </div>`).join('')}
        </div>
        <div class="sr-pn-perilaku-row">
          ${['aktif','dorongan','belum_siap'].map(p => {
            const label = { aktif: 'Aktif', dorongan: 'Perlu dorongan', belum_siap: 'Belum siap' }[p];
            return `<button class="sr-pn-perilaku-btn${h.perilaku === p ? ' sr-pn-perilaku-btn--active' : ''}"
                            data-perilaku="${p}" data-siswa="${siswa.id}">${label}</button>`;
          }).join('')}
        </div>`;
    }

    return `
      <div class="sr-pn-siswa${isOpen ? ' sr-pn-siswa--open' : ''}" data-local-idx="${localIdx}">
        <div class="sr-pn-siswa-head" data-toggle="${localIdx}">
          <div class="sr-pn-siswa-info">
            <span class="sr-pn-nomor">${siswa.nomor}</span>
            <span class="sr-pn-nama">${_escape(siswa.nama)}</span>
          </div>
          <div class="sr-pn-siswa-right">
            ${sudah ? `<span class="sr-pn-nilai-chip">${nilaiTamp}</span>` : ''}
            <span class="sr-pn-chevron">${isOpen ? '▲' : '▼'}</span>
          </div>
        </div>
        ${isOpen ? `<div class="sr-pn-siswa-body">${isiHTML}</div>` : ''}
      </div>`;
  }

  function _buildOverlay() {
    const pageSiswa  = siswaList.slice(halaman * PAGE_SIZE, halaman * PAGE_SIZE + PAGE_SIZE);
    const paginasiHTML = totalHal > 1 ? `
      <div class="sr-pn-paginasi">
        <button class="sr-pn-hal-btn" id="sr-pn-prev-hal" ${halaman === 0 ? 'disabled' : ''}>‹</button>
        <span class="sr-pn-hal-info">Halaman ${halaman + 1} / ${totalHal}</span>
        <button class="sr-pn-hal-btn" id="sr-pn-next-hal" ${halaman >= totalHal - 1 ? 'disabled' : ''}>›</button>
      </div>` : '';

    const modeTabHTML = `
      <div class="sr-pn-mode-tab">
        <button class="sr-pn-tab-btn${modePenilaian === 'cepat'  ? ' sr-pn-tab-btn--active' : ''}" data-mode="cepat">Mode Cepat</button>
        <button class="sr-pn-tab-btn${modePenilaian === 'detail' ? ' sr-pn-tab-btn--active' : ''}" data-mode="detail">Mode Detail</button>
      </div>`;

    const siswaHTML = pageSiswa.map((s, i) => _buildSiswaItem(s, i)).join('');

    return `
      <div class="sr-overlay-content sr-pn-overlay-content">
        <div class="sr-pn-header">
          <div class="sr-pn-judul">Penilaian Siswa</div>
          <div class="sr-pn-sub">${_escape(_state.tp?.nama || '—')} · Fase Inti</div>
        </div>
        ${modeTabHTML}
        ${paginasiHTML}
        <div class="sr-pn-list" id="sr-pn-list">
          ${siswaHTML}
        </div>
        <div class="sr-pn-footer">
          <button class="sr-btn-secondary sr-pn-btn-tutup" id="sr-pn-tutup">Tutup</button>
          <button class="sr-btn-primary sr-pn-btn-simpan" id="sr-pn-simpan">Simpan</button>
        </div>
      </div>`;
  }

  // ── Mount overlay ────────────────────────────────────────────

  const overlay = document.createElement('div');
  overlay.className = 'sr-overlay sr-pn-overlay';

  function _mount() {
    overlay.innerHTML = _buildOverlay();
    _bindEvents();
  }

  function _bindEvents() {
    // Toggle accordion
    overlay.querySelectorAll('[data-toggle]').forEach(head => {
      head.addEventListener('click', () => {
        const li = parseInt(head.dataset.toggle);
        openIdx  = openIdx === li ? -1 : li;
        _mount();
      });
    });

    // Mode tab
    overlay.querySelectorAll('[data-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        modePenilaian = btn.dataset.mode;
        openIdx = 0;
        _mount();
      });
    });

    // Capaian (mode cepat)
    overlay.querySelectorAll('[data-capaian]').forEach(btn => {
      btn.addEventListener('click', () => {
        const siswaId = btn.dataset.siswa;
        const val     = parseInt(btn.dataset.capaian);
        hasil[siswaId].capaian = hasil[siswaId].capaian === val ? null : val;
        _mount();
      });
    });

    // LSR input (mode detail)
    overlay.querySelectorAll('.sr-pn-lsr-input').forEach(input => {
      input.addEventListener('change', () => {
        const siswaId = input.dataset.siswa;
        const dim     = input.dataset.dim;
        const raw     = parseInt(input.value);
        hasil[siswaId][dim] = isNaN(raw) ? null : Math.max(0, Math.min(100, raw));
      });
      input.addEventListener('blur', () => {
        const siswaId = input.dataset.siswa;
        const dim     = input.dataset.dim;
        const raw     = parseInt(input.value);
        hasil[siswaId][dim] = isNaN(raw) ? null : Math.max(0, Math.min(100, raw));
        _mount();
      });
    });

    // Perilaku
    overlay.querySelectorAll('[data-perilaku]').forEach(btn => {
      btn.addEventListener('click', () => {
        const siswaId = btn.dataset.siswa;
        const p       = btn.dataset.perilaku;
        hasil[siswaId].perilaku = hasil[siswaId].perilaku === p ? null : p;
        _autoNext();
      });
    });

    // Paginasi
    overlay.querySelector('#sr-pn-prev-hal')?.addEventListener('click', () => {
      if (halaman > 0) { halaman--; openIdx = 0; _mount(); }
    });
    overlay.querySelector('#sr-pn-next-hal')?.addEventListener('click', () => {
      if (halaman < totalHal - 1) { halaman++; openIdx = 0; _mount(); }
    });

    // Tutup
    overlay.querySelector('#sr-pn-tutup')?.addEventListener('click', () => {
      overlay.remove();
    });

    // Simpan
    overlay.querySelector('#sr-pn-simpan')?.addEventListener('click', async () => {
      const btn = overlay.querySelector('#sr-pn-simpan');
      if (btn) { btn.disabled = true; btn.textContent = 'Menyimpan…'; }
      try {
        const kelasId = _state.rombel?.id;
        const tpNomor = _state.tp?.nomor;
        const sesiId  = _state.sesiId || Date.now().toString(36);
        const entries = siswaList.map(s => ({
          siswaId : s.id,
          capaian : hasil[s.id].capaian,
          l       : hasil[s.id].l,
          s       : hasil[s.id].s,
          r       : hasil[s.id].r,
          perilaku: hasil[s.id].perilaku,
        }));
        await savePenilaian(kelasId, tpNomor, sesiId, modePenilaian, entries);
        overlay.remove();
      } catch (e) {
        console.error('[SR] savePenilaian gagal:', e);
        if (btn) { btn.disabled = false; btn.textContent = 'Simpan'; }
        let errEl = overlay.querySelector('#sr-pn-err');
        if (!errEl) {
          errEl = document.createElement('p');
          errEl.id = 'sr-pn-err';
          errEl.style.cssText = 'color:#f87171;font-size:12px;text-align:center;padding:6px 18px 0;margin:0';
          overlay.querySelector('.sr-pn-footer')?.insertAdjacentElement('beforebegin', errEl);
        }
        errEl.textContent = 'Gagal menyimpan. Coba lagi.';
      }
    });
  }

  // Auto-buka siswa berikutnya setelah capaian diisi
  function _autoNext() {
    const pageSiswa = siswaList.slice(halaman * PAGE_SIZE, halaman * PAGE_SIZE + PAGE_SIZE);
    const nextIdx   = openIdx + 1;
    if (nextIdx < pageSiswa.length) {
      openIdx = nextIdx;
      _mount();
    } else if (halaman < totalHal - 1) {
      // Siswa terakhir di halaman → auto-next halaman
      halaman++;
      openIdx = 0;
      _mount();
    } else {
      // Siswa terakhir keseluruhan → tutup accordion, biarkan guru simpan
      openIdx = -1;
      _mount();
    }
  }

  document.body.appendChild(overlay);
  _mount();
}
