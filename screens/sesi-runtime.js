/**
 * =============================================================
 * FLAF — SESI RUNTIME
 * File: screens/sesi-runtime.js
 *
 * State machine untuk satu sesi mengajar satu TP.
 * Membaca langkah[] dari fase-a.js (schema v4.3).
 *
 * States:
 *   preview   → SesiPreviewing: pilih mode, mulai
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

import { db }               from '../storage/db.js';
import { updateSpeakCount, getSortedBySpeakCount } from '../storage/siswa-history.js';

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
  mode           : 'normal',
  faseIdx        : 0,
  langkahIdx     : 0,
  aktState       : 'preview',
  fallbackKondisi: null,
  closureMood    : null,
  kendala        : null,
  ttsUtterance   : null,
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
    mode           : 'normal',
    faseIdx        : 0,
    langkahIdx     : 0,
    aktState       : 'preview',
    fallbackKondisi: null,
    closureMood    : null,
    kendala        : null,
    ttsUtterance   : null,
  });

  // Cek resume
  try {
    const saved = await db.get(STORE_KV, RESUME_STORE_KEY);
    if (saved && saved.tpNomor === tpData.nomor && saved.rombelId === rombel?.id) {
      const age = Date.now() - (saved.savedAt || 0);
      if (age < RESUME_MAX_MS) {
        _state.faseIdx    = saved.faseIdx    ?? 0;
        _state.langkahIdx = saved.langkahIdx ?? 0;
        _state.mode       = saved.mode       ?? 'normal';
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
      mode      : _state.mode,
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
    <div class="sr-app">
      <div class="sr-body">
        <div class="sr-preview-title">TP ${String(tp.nomor).padStart(2,'0')} — ${_escape(tp.nama)}</div>
        <div class="sr-preview-sub">${_now()} · ${_escape(rombel.nama)}</div>

        <ul class="sr-checklist">
          <li>
            <span>${jumlah > 0 ? jumlah + ' siswa terdaftar' : 'Belum ada siswa'}</span>
            <span class="sr-check">${jumlah > 0 ? '✓' : '—'}</span>
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

        <div class="sr-mode-label">Pilih mode untuk kelas Anda hari ini:</div>
        <div class="sr-mode-pick">${modeOpts}</div>
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
    _transition({ aktState: 'entering', faseIdx: 0, langkahIdx: 0 });
  });
}

// ─── SCREEN: Resume ───────────────────────────────────────────

function _renderResume() {
  const fase = _currentFase();

  _root.innerHTML = `
    <div class="sr-app">
      <div class="sr-body sr-body--center">
        <div class="sr-resume-icon">⏸</div>
        <div class="sr-resume-title">Sesi belum selesai</div>
        <div class="sr-resume-sub">${_escape(_state.tp?.nama || '—')}</div>
        <div class="sr-resume-pos">
          Terakhir di: <strong>${_escape(fase?.fase || '—')}</strong>,
          langkah ${_state.langkahIdx + 1}
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
    _transition({ aktState: 'preview', faseIdx: 0, langkahIdx: 0, mode: 'normal' });
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

// ─── SCREEN: Running ─────────────────────────────────────────

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
    diferensiasi : { label: 'Diferensiasi',     cls: 'df' },
    darurat      : { label: 'Jika waktu mepet', cls: 'dr' },
    instruksi    : { label: 'Instruksi',         cls: 'in' },
  };
  const info = TIPE_INFO[tipe] || TIPE_INFO.instruksi;

  const PM_LABEL = { mindful: 'Mindful', meaningful: 'Bermakna', joyful: 'Joyful' };
  const pmBadge  = langkah.pm
    ? `<span class="sr-pm-badge sr-pm-badge--${langkah.pm}">${PM_LABEL[langkah.pm] || langkah.pm}</span>`
    : '';

  // Mode bantuan
  const bantuan = langkah.mode?.[_state.mode]?.bantuan;
  const bantuanHTML = bantuan ? `
    <div class="sr-mode-bantuan">
      <div class="sr-mode-bantuan-label">📋 Mode ${_state.mode.charAt(0).toUpperCase() + _state.mode.slice(1)}</div>
      <div class="sr-mode-bantuan-teks">${_escape(bantuan)}</div>
    </div>` : '';

  // Body content
  let bodyContent = '';
  if (tipe === 'diferensiasi') {
    bodyContent = `
      <div class="sr-dif-wrap">
        <div class="sr-dif-col sr-dif-col--s">
          <div class="sr-dif-lbl">Sudah bisa</div>
          <div class="sr-dif-teks">${_escape(langkah.sudah || '')}</div>
        </div>
        <div class="sr-dif-col sr-dif-col--b">
          <div class="sr-dif-lbl">Belum bisa</div>
          <div class="sr-dif-teks">${_escape(langkah.belum || '')}</div>
        </div>
      </div>`;
  } else if (tipe === 'audio' || tipe === 'respons_siswa') {
    bodyContent = `
      <div class="sr-cue-text">"${_escape(langkah.teks || '')}"</div>
      ${langkah.teks ? `<button class="sr-audio-btn" id="sr-tts-btn">▶ Putar Audio</button>` : ''}`;
  } else {
    bodyContent = `<div class="sr-instruksi-text">${_escape(langkah.teks || '')}</div>`;
  }

  _root.innerHTML = `
    <div class="sr-app">
      <div class="sr-app-header">
        <span class="sr-fase-info">${_escape(faseName)} · ${idx + 1}/${total}</span>
        <span class="sr-mode-badge">${_state.mode}</span>
      </div>

      <div class="sr-body sr-body--center">
        <div class="sr-tipe-row">
          <span class="sr-aktivitas-tipe-badge sr-tipe--${info.cls}">${info.label}</span>
          ${pmBadge}
        </div>
        ${bodyContent}
        ${bantuanHTML}
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
      </div>
    </div>`;

  _root.querySelector('#sr-tts-btn')?.addEventListener('click', () => {
    _ttsSpeak(langkah.teks, _root.querySelector('#sr-tts-btn'));
  });
  _root.querySelector('#sr-btn-next').addEventListener('click', () => _langkahNext());
  _root.querySelector('#sr-btn-prev').addEventListener('click', () => _langkahPrev());
  _root.querySelector('#sr-btn-kondisi').addEventListener('click', () => _renderKondisiOverlay());
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
  _root.querySelector('#sr-btn-next-fase')?.addEventListener('click', () => _nextFase());
}

// ─── SCREEN: SesiClosure ─────────────────────────────────────

async function _renderClosure() {
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

        ${await (async () => {
          try {
            if (!_state.rombel?.id || !_state.siswaList?.length) return '';
            const sorted = await getSortedBySpeakCount(_state.rombel.id, _state.siswaList);
            const top3   = sorted.slice(0, 3);
            if (!top3.length) return '';
            const namaHTML = top3.map(s =>
              `<div class="sr-obs-nama">• ${_escape(s.nama || '—')}</div>`
            ).join('');
            return `
              <div class="sr-obs-card">
                <div class="sr-obs-judul">💡 Besok coba perhatikan lebih ke:</div>
                ${namaHTML}
              </div>`;
          } catch { return ''; }
        })()}
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

    // Hitung jumlah langkah respons_siswa di semua fase — dipakai sebagai delta
    const allFase   = _state.tp?.skenario || [];
    const respCount = allFase.reduce((sum, fase) => {
      return sum + (fase.langkah || []).filter(l => l.tipe === 'respons_siswa').length;
    }, 0);

    // Update speaking history untuk semua siswa di rombel (semua belajar bersama)
    if (_state.rombel?.id && _state.siswaList?.length) {
      const delta      = respCount > 0 ? 1 : 1; // selalu +1 per sesi selesai
      const siswaIds   = _state.siswaList.map(s => s.id);
      await updateSpeakCount(_state.rombel.id, siswaIds, delta);
    }

    _onDone({ tp: _state.tp, rombel: _state.rombel, kendala: _state.kendala, catatan });
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
