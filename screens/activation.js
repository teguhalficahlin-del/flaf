/**
 * screens/activation.js — FLAF Aktivasi Guru
 *
 * PUBLIC API:
 *   checkExistingSession()                  → { active, name, school, code, ... } | { active: false }
 *   activate({ name, school, code })        → { success, name, school, code, via } | { success: false, error }
 *   renderActivationScreen(container, cb)   → void
 *   clearSession()                          → void
 *
 * Session fields (standar): name, school, code, device_id, issued_at, expires_at
 */

import { db }                                        from '../storage/db.js';
import { SUPABASE_URL, SUPABASE_ANON_KEY, SECRET_SALT } from '../secrets.js';

const CODE_REGEX  = /^FLAF-2026-[A-Z0-9]{4}$/;
const MAX_DEVICES = 20;
const KEY_SESSION   = 'session';
const KEY_DEVICE_ID = 'device_id';

// ─── CRYPTO ──────────────────────────────────────────────────────────────────

async function _hmacSHA256(message, key) {
  const enc       = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    enc.encode(key),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, enc.encode(message));
  return Array.from(new Uint8Array(sig))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

async function _signSession(payload) {
  const data = `${payload.name}|${payload.school}|${payload.code}|${payload.device_id}|${payload.issued_at}`;
  return _hmacSHA256(data, SECRET_SALT);
}

async function _verifySession(payload, signature) {
  const expected = await _signSession(payload);
  return expected === signature;
}

// ─── DEVICE ID ───────────────────────────────────────────────────────────────

function _generateDeviceId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  const rand = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(rand).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function _getOrCreateDeviceId() {
  const dbReady = db.isReady();
  if (!dbReady) return _generateDeviceId();

  const existing = await db.get('kv', KEY_DEVICE_ID);
  if (existing) return existing;

  const newId = _generateDeviceId();
  await db.set('kv', KEY_DEVICE_ID, newId);
  return newId;
}

// ─── SESSION STORAGE ─────────────────────────────────────────────────────────

async function _saveSession(data) {
  const payload = {
    name      : data.name,
    school    : data.school,
    code      : data.code,
    device_id : data.device_id,
    issued_at : data.issued_at,
    expires_at: data.expires_at,
    via       : data.via || 'server',
  };

  const signature = await _signSession(payload);

  await db.set('kv', KEY_SESSION, { payload, signature });
}

async function _loadSession() {
  const dbReady = db.isReady();
  if (!dbReady) return null;
  return await db.get('kv', KEY_SESSION);
}

// ─── PUBLIC: checkExistingSession ────────────────────────────────────────────

export async function checkExistingSession() {
  try {
    const dbReady = db.isReady();
    if (!dbReady) return { active: false };

    const session = await _loadSession();
    if (!session || typeof session !== 'object') return { active: false };

    const { payload, signature } = session;

    const isValid =
      payload &&
      typeof payload.name       === 'string' &&
      typeof payload.school     === 'string' &&
      typeof payload.code       === 'string' &&
      typeof payload.device_id  === 'string' &&
      typeof payload.issued_at  === 'number' &&
      typeof payload.expires_at === 'number' &&
      typeof signature          === 'string';

    if (!isValid) {
      await clearSession();
      return { active: false };
    }

    if (payload.expires_at < Date.now()) {
      await clearSession();
      return { active: false };
    }

    const deviceId = await _getOrCreateDeviceId();
    if (payload.device_id !== deviceId) {
      await clearSession();
      return { active: false };
    }

    const sigValid = await _verifySession(payload, signature);
    if (!sigValid) {
      console.warn('[FLAF] signature tidak valid — session ditolak');
      await clearSession();
      return { active: false };
    }

    return {
      active   : true,
      name     : payload.name,
      school   : payload.school,
      code     : payload.code,
      via      : payload.via,
      device_id: payload.device_id,
    };

  } catch (err) {
    console.warn('[FLAF] session validation error:', err.message);
    return { active: false };
  }
}

export async function clearSession() {
  try {
    const dbReady = db.isReady();
    if (!dbReady) return;
    await db.remove('kv', KEY_SESSION);
  } catch (err) {
    console.warn('[FLAF] clearSession gagal:', err.message);
  }
}

// ─── PUBLIC: activate ────────────────────────────────────────────────────────

export async function activate({ name, school, code }) {
  if (!name?.trim() || !school?.trim() || !code?.trim()) {
    return { success: false, error: 'INPUT_EMPTY' };
  }

  const cleanCode   = code.trim().toUpperCase();
  const cleanName   = name.trim();
  const cleanSchool = school.trim();

  if (!CODE_REGEX.test(cleanCode)) {
    return { success: false, error: 'FORMAT_INVALID' };
  }

  const dbReady = db.isReady();
  if (!dbReady) {
    return { success: false, error: 'DB_UNAVAILABLE' };
  }

  const deviceId = await _getOrCreateDeviceId();

  try {
    const rows = await _supabaseSelect('activation_codes', { code: cleanCode });

    if (!rows || rows.length === 0) {
      return { success: false, error: 'CODE_WRONG' };
    }

    const record    = rows[0];
    const deviceIds = record.device_ids || [];

    if (deviceIds.includes(deviceId)) {
      return _finalizeActivation({
        name  : cleanName,
        school: cleanSchool,
        code  : cleanCode,
        device_id: deviceId,
        via   : 'supabase_known_device',
      });
    }

    if (record.device_count >= MAX_DEVICES) {
      return { success: false, error: 'CODE_FULL' };
    }

    await _supabaseRpc('register_device', {
      p_code     : cleanCode,
      p_device_id: deviceId,
      p_name     : cleanName,
      p_school   : cleanSchool,
    });

    return _finalizeActivation({
      name  : cleanName,
      school: cleanSchool,
      code  : cleanCode,
      device_id: deviceId,
      via   : 'supabase_new',
    });

  } catch (err) {
    console.warn('[FLAF] Supabase unreachable:', err.message);
    return { success: false, error: 'SUPABASE_DOWN' };
  }
}

async function _finalizeActivation(data) {
  if (!data?.name || !data?.school || !data?.code || !data?.device_id) {
    throw new Error('[FLAF] _finalizeActivation: data tidak lengkap');
  }

  const now = Date.now();
  await _saveSession({
    name      : data.name,
    school    : data.school,
    code      : data.code,
    device_id : data.device_id,
    issued_at : now,
    expires_at: now + (365 * 24 * 60 * 60 * 1000),
    via       : data.via || 'server',
  });

  return {
    success  : true,
    name     : data.name,
    school   : data.school,
    code     : data.code,
    device_id: data.device_id,
    via      : data.via || 'server',
  };
}

// ─── SUPABASE CLIENT ─────────────────────────────────────────────────────────

async function _supabaseSelect(table, filters = {}) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([k, v]) => params.set(k, `eq.${v}`));

  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params}`, {
    headers: {
      'apikey'       : SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!res.ok) throw new Error(`Supabase error: ${res.status}`);
  return res.json();
}

async function _supabaseRpc(fn, body = {}) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
    method : 'POST',
    headers: {
      'apikey'       : SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Supabase RPC error: ${res.status}`);
  return res.json();
}

// ─── UI ──────────────────────────────────────────────────────────────────────

const ERROR_MESSAGES = {
  INPUT_EMPTY    : 'Nama, sekolah, dan kode aktivasi wajib diisi.',
  FORMAT_INVALID : 'Format kode tidak valid. Contoh: FLAF-2026-AB1C',
  CODE_WRONG     : 'Kode tidak ditemukan. Periksa kembali kode yang diberikan.',
  CODE_FULL      : 'Kode ini sudah digunakan di 20 perangkat. Hubungi administrator.',
  SUPABASE_DOWN  : 'Server tidak dapat dihubungi. Silakan coba lagi.',
  DB_UNAVAILABLE : 'Penyimpanan tidak tersedia. Coba buka ulang di mode non-private.',
  UNKNOWN        : 'Terjadi kesalahan. Coba lagi.',
};

export function renderActivationScreen(container, onSuccess) {
  if (!container) {
    console.error('[FLAF] renderActivationScreen: container tidak ditemukan');
    return;
  }
  container.innerHTML = _buildActivationHTML();
  _attachActivationListeners(container, onSuccess);
}

function _buildActivationHTML() {
  return `
    <div class="act-wrap">

      <div class="act-header">
        <div class="act-badge">✦ FASE A · SD KELAS 1 &amp; 2</div>
        <h1 class="act-title">
          <span class="act-title-plain">Functional Language</span>
          <span class="act-title-italic">Accumulation</span>
          <span class="act-title-plain">Framework</span>
        </h1>
        <p class="act-tagline-new">Persiapan minimal, hasil maksimal.</p>
      </div>

      <div class="act-fields">
        <div class="act-field">
          <label class="act-label" for="act-name">Nama Guru</label>
          <input
            id="act-name"
            class="act-input"
            type="text"
            placeholder="Nama lengkap dan gelar"
            autocomplete="name"
            maxlength="80"
          >
        </div>

        <div class="act-field">
          <label class="act-label" for="act-school">Nama Sekolah</label>
          <input
            id="act-school"
            class="act-input"
            type="text"
            placeholder="Tempat mengajar"
            autocomplete="organization"
            maxlength="100"
          >
        </div>

        <div class="act-field">
          <label class="act-label" for="act-code">Kode Aktivasi</label>
          <input
            id="act-code"
            class="act-input act-input--code"
            type="text"
            placeholder="XXXX-XXXX-XXXX"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="characters"
            spellcheck="false"
            maxlength="14"
          >
        </div>

        <div class="act-error" id="act-error" hidden></div>
      </div>

      <div class="act-bottom">
        <button class="act-btn" id="act-submit">
          <span class="act-btn-label">AKTIVASI →</span>
        </button>
        <button class="act-btn act-btn--secondary" id="act-retry" hidden>
          <span class="act-btn-label">Coba Lagi</span>
        </button>
        <div class="act-footer">Butuh bantuan? Hubungi administrator.</div>
      </div>

    </div>
  `;
}

function _attachActivationListeners(container, onSuccess) {
  const inputName   = container.querySelector('#act-name');
  const inputSchool = container.querySelector('#act-school');
  const inputCode   = container.querySelector('#act-code');
  const errorBox    = container.querySelector('#act-error');
  const submitBtn   = container.querySelector('#act-submit');
  const retryBtn    = container.querySelector('#act-retry');

  let lastError = null;

  inputCode.addEventListener('input', () => {
    const pos = inputCode.selectionStart;
    inputCode.value = inputCode.value.toUpperCase();
    inputCode.setSelectionRange(pos, pos);
  });

  submitBtn.addEventListener('click', () => _handleSubmit());
  retryBtn.addEventListener('click',  () => _handleSubmit());

  inputCode.addEventListener('keydown', e => {
    if (e.key === 'Enter') _handleSubmit();
  });

  async function _handleSubmit() {
    _setSubmitting(true);
    _hideError();
    lastError = null;

    const result = await activate({
      name  : inputName.value,
      school: inputSchool.value,
      code  : inputCode.value,
    });

    _setSubmitting(false);

    if (result.success) {
      if (typeof onSuccess === 'function') {
        onSuccess({
          name     : result.name,
          school   : result.school,
          code     : result.code,
          device_id: result.device_id,
        });
      }
    } else {
      lastError = result.error;
      const msg = ERROR_MESSAGES[result.error] || ERROR_MESSAGES.UNKNOWN;
      _showError(msg);

      if (result.error === 'SUPABASE_DOWN') {
        retryBtn.hidden = false;
      }
    }
  }

  function _setSubmitting(loading) {
    const label = submitBtn.querySelector('.act-btn-label');
    submitBtn.disabled = loading;
    retryBtn.hidden    = true;
    if (label) label.textContent = loading ? 'Memverifikasi...' : 'Aktivasi';
  }

  function _showError(msg) {
    errorBox.textContent = msg;
    errorBox.hidden      = false;
  }

  function _hideError() {
    errorBox.hidden      = true;
    errorBox.textContent = '';
  }
}
