/**
 * FLAF — admin/admin.js
 * ========================
 * Sprint 2: Admin Panel Logic
 *
 * Responsibilities:
 * 1. Auth via Supabase magic link — persistent session di localStorage
 * 2. Load daftar activation_codes dari Supabase
 * 3. Reset device count per kode (atomic via RPC)
 * 4. Rate control: max 3x reset per kode per bulan — flag otomatis
 * 5. Audit trail: setiap aksi tercatat di tabel admin_actions
 * 6. Tambah kode baru
 *
 * CATATAN:
 * - Admin Panel adalah halaman terpisah (admin/index.html)
 * - Auth state disimpan di localStorage — Admin = desktop, bukan guru SD
 * - Tidak menggunakan Supabase JS SDK — fetch langsung ke REST API
 */

// ─── CONFIG ───────────────────────────────────────────────────────────────────

import { SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_KEY } from '../secrets.js';

const MAX_RESETS_PER_MONTH = 3;

// ─── SUPABASE HELPERS ─────────────────────────────────────────────────────────

function serviceHeaders() {
  return {
    'apikey':        SUPABASE_SERVICE_KEY,
    'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
    'Content-Type':  'application/json',
    'Prefer':        'return=representation',
  };
}

async function sbGet(path, params = {}) {
  const url = new URL(`${SUPABASE_URL}/rest/v1/${path}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url, { headers: serviceHeaders() });
  if (!res.ok) throw new Error(`GET ${path} → ${res.status}: ${await res.text()}`);
  return res.json();
}

async function sbPost(path, body) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method:  'POST',
    headers: serviceHeaders(),
    body:    JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} → ${res.status}: ${await res.text()}`);
  return res.json();
}

async function sbRpc(fn, body = {}) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
    method:  'POST',
    headers: serviceHeaders(),
    body:    JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`RPC ${fn} → ${res.status}: ${await res.text()}`);
  return res.json();
}

// ─── AUTH ─────────────────────────────────────────────────────────────────────

const SESSION_KEY = 'flaf_admin_session';

export function getAdminSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw);
    if (session.expires_at && Date.now() > session.expires_at) return null;
    return session;
  } catch {
    return null;
  }
}

export function saveAdminSession(session) {
  const extended = {
    ...session,
    expires_at: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 hari
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(extended));
}

export function clearAdminSession() {
  localStorage.removeItem(SESSION_KEY);
}

export async function sendMagicLink(email) {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/otp`, {
    method:  'POST',
    headers: { 'apikey': SUPABASE_ANON_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      options: { emailRedirectTo: window.location.href },
    }),
  });
  if (!res.ok) throw new Error(`Magic link error: ${res.status}`);
  return true;
}

export async function exchangeTokenFromHash() {
  const hash = new URLSearchParams(window.location.hash.slice(1));
  const accessToken  = hash.get('access_token');
  const refreshToken = hash.get('refresh_token');
  if (!accessToken) return null;

  const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${accessToken}` },
  });
  if (!res.ok) return null;

  const user = await res.json();
  const session = { accessToken, refreshToken, email: user.email, id: user.id };
  saveAdminSession(session);
  history.replaceState(null, '', window.location.pathname);
  return session;
}

// ─── DATA OPERATIONS ──────────────────────────────────────────────────────────

export async function loadCodes() {
  const startMonth = _startOfMonth();
  const [codes, actions] = await Promise.all([
    sbGet('activation_codes', { order: 'created_at.desc' }),
    sbGet('admin_actions', { action: 'eq.reset_device', timestamp: `gte.${startMonth}` }),
  ]);

  const resetCounts = {};
  actions.forEach(a => {
    resetCounts[a.target_code] = (resetCounts[a.target_code] || 0) + 1;
  });

  return codes.map(c => ({
    ...c,
    resets_this_month: resetCounts[c.code] || 0,
    is_flagged: (resetCounts[c.code] || 0) >= MAX_RESETS_PER_MONTH,
  }));
}

export async function resetDeviceCount(code, adminId, note = '') {
  // Cek rate limit
  const actions = await sbGet('admin_actions', {
    action:      'eq.reset_device',
    target_code: `eq.${code}`,
    timestamp:   `gte.${_startOfMonth()}`,
  });

  if (actions.length >= MAX_RESETS_PER_MONTH) {
    throw new RateLimitError(
      `Kode ${code} sudah di-reset ${actions.length}× bulan ini. Maksimum ${MAX_RESETS_PER_MONTH}×.`
    );
  }

  await sbRpc('admin_reset_device', { p_code: code });

  await sbPost('admin_actions', {
    admin_id:    adminId,
    action:      'reset_device',
    target_code: code,
    timestamp:   new Date().toISOString(),
    note:        note || 'Reset via Admin Panel',
  });

  return true;
}

export async function addCode(adminId, note = '') {
  const result = await sbRpc('admin_generate_code', {
    p_year:     new Date().getFullYear(),
    p_admin_id: adminId,
  });

  await sbPost('admin_actions', {
    admin_id:    adminId,
    action:      'add_code',
    target_code: result.code,
    timestamp:   new Date().toISOString(),
    note:        note || 'Kode baru via Admin Panel',
  });

  return result.code;
}

/**
 * Generate kode aktivasi dalam jumlah banyak sekaligus.
 * @param {string} adminId
 * @param {number} jumlah  — 1 sampai 500
 * @param {string} note    — catatan batch
 * @param {function} onProgress(done, total) — callback progress
 * @returns {Promise<Array<{code, status}>>}
 */
export async function addCodeBatch(adminId, jumlah, note = '', onProgress = null) {
  const max    = Math.min(Math.max(1, parseInt(jumlah) || 1), 500);
  const hasil  = [];
  const prefix = `Batch ${new Date().toLocaleDateString('id-ID')}${note ? ' — ' + note : ''}`;

  for (let i = 0; i < max; i++) {
    try {
      const code = await addCode(adminId, prefix);
      hasil.push({ code, status: 'ok' });
    } catch (err) {
      hasil.push({ code: '—', status: 'error', error: err.message });
    }
    if (typeof onProgress === 'function') onProgress(i + 1, max);
    // Jeda kecil agar tidak flood Supabase
    if (i < max - 1) await new Promise(r => setTimeout(r, 120));
  }

  return hasil;
}

export async function loadAuditTrail() {
  return sbGet('admin_actions', { order: 'timestamp.desc', limit: '50' });
}

export class RateLimitError extends Error {
  constructor(msg) { super(msg); this.name = 'RateLimitError'; }
}

// ─── UI ───────────────────────────────────────────────────────────────────────

export async function initAdminPanel() {
  const app = document.getElementById('app');

  if (window.location.hash.includes('access_token')) {
    renderLoading(app, 'Memverifikasi sesi...');
    try {
      const session = await exchangeTokenFromHash();
      if (session) { renderDashboard(app, session); return; }
    } catch {
      renderError(app, 'Token tidak valid. Coba minta magic link baru.');
      return;
    }
  }

  const session = getAdminSession();
  if (session) { renderDashboard(app, session); return; }
  renderLoginScreen(app);
}

// ── Login ──────────────────────────────────────────────────────────────────────

function renderLoginScreen(app) {
  app.innerHTML = `
    <div class="adm-login-wrap">
      <div class="adm-login-card">
        <div class="adm-brand">
          <span class="adm-brand-mark">FL</span>
          <div>
            <div class="adm-brand-title">FLAF Admin</div>
            <div class="adm-brand-sub">Panel Manajemen Kode Aktivasi</div>
          </div>
        </div>
        <div class="adm-divider"></div>
        <p class="adm-login-desc">Masukkan email admin. Magic link akan dikirim ke inbox Anda.</p>
        <div class="adm-field">
          <label class="adm-label" for="adm-email">Email Admin</label>
          <input class="adm-input" id="adm-email" type="email"
            placeholder="admin@yourdomain.com" autocomplete="email" inputmode="email" />
        </div>
        <div class="adm-error" id="adm-login-error" hidden></div>
        <button class="adm-btn adm-btn-primary" id="adm-send-link">Kirim Magic Link</button>
        <div class="adm-sent-box" id="adm-sent-msg" hidden>
          <span class="adm-sent-icon">✓</span>
          Magic link terkirim. Cek email Anda lalu klik link di dalamnya.
        </div>
      </div>
    </div>
  `;

  const btn = document.getElementById('adm-send-link');
  const err = document.getElementById('adm-login-error');
  const sent = document.getElementById('adm-sent-msg');

  btn.addEventListener('click', async () => {
    const email = document.getElementById('adm-email').value.trim();
    err.hidden = true;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      err.textContent = 'Masukkan alamat email yang valid.';
      err.hidden = false;
      return;
    }
    btn.disabled = true;
    btn.textContent = 'Mengirim...';
    try {
      await sendMagicLink(email);
      sent.hidden = false;
      btn.textContent = 'Terkirim ✓';
    } catch (e) {
      err.textContent = `Gagal mengirim: ${e.message}`;
      err.hidden = false;
      btn.disabled = false;
      btn.textContent = 'Kirim Magic Link';
    }
  });
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

function renderLoading(app, msg = 'Memuat...') {
  app.innerHTML = `<div class="adm-state-msg">${_escHtml(msg)}</div>`;
}

function renderError(app, msg) {
  app.innerHTML = `<div class="adm-state-msg adm-state-error">${_escHtml(msg)}</div>`;
}

async function renderDashboard(app, session) {
  renderLoading(app, 'Memuat data kode aktivasi...');
  let codes = [], audit = [];
  try {
    [codes, audit] = await Promise.all([loadCodes(), loadAuditTrail()]);
  } catch (e) {
    renderError(app, `Gagal memuat: ${e.message}`);
    return;
  }

  app.innerHTML = `
    <div class="adm-layout">

      <aside class="adm-sidebar">
        <div class="adm-sidebar-brand">
          <span class="adm-brand-mark sm">FL</span>
          <span class="adm-sidebar-title">FLAF Admin</span>
        </div>
        <nav class="adm-nav">
          <button class="adm-nav-item active" data-tab="codes">
            <span class="adm-nav-icon">◈</span> Kode Aktivasi
          </button>
          <button class="adm-nav-item" data-tab="audit">
            <span class="adm-nav-icon">◷</span> Audit Trail
          </button>
        </nav>
        <div class="adm-sidebar-footer">
          <div class="adm-session-info">
            <div class="adm-session-label">Login sebagai</div>
            <div class="adm-session-email">${_escHtml(session.email)}</div>
          </div>
          <button class="adm-logout-btn" id="adm-logout">Logout</button>
        </div>
      </aside>

      <main class="adm-main">

        <!-- Tab Kode Aktivasi -->
        <section class="adm-tab" id="tab-codes">
          <div class="adm-topbar">
            <div>
              <h2 class="adm-tab-title">Kode Aktivasi</h2>
              <p class="adm-tab-sub">${codes.length} kode · ${codes.filter(c=>c.is_used).length} aktif · ${codes.filter(c=>c.is_flagged).length} terflag</p>
            </div>
            <button class="adm-btn adm-btn-primary" id="adm-add-code-btn">+ Tambah Kode</button>
          </div>

          <div class="adm-inline-form" id="adm-add-form" hidden>
            <div class="adm-inline-form-inner">
              <div class="adm-field" style="width:110px;flex-shrink:0">
                <label class="adm-label">Jumlah Kode</label>
                <input class="adm-input" id="adm-add-jumlah" type="number"
                  min="1" max="500" value="10" placeholder="10" />
              </div>
              <div class="adm-field" style="flex:1">
                <label class="adm-label">Catatan Batch (opsional)</label>
                <input class="adm-input" id="adm-add-note" type="text"
                  placeholder="Contoh: SDN 01 Padang — batch April 2026" maxlength="120" />
              </div>
              <div class="adm-inline-form-actions">
                <button class="adm-btn adm-btn-primary" id="adm-add-confirm">Generate</button>
                <button class="adm-btn adm-btn-ghost" id="adm-add-cancel">Batal</button>
              </div>
            </div>
            <div id="adm-add-progress" hidden style="margin-top:10px">
              <div style="background:#E8E4DC;border-radius:4px;height:6px;overflow:hidden;margin-bottom:6px">
                <div id="adm-progress-fill" style="height:100%;background:#4A7C5E;border-radius:4px;width:0%;transition:width .2s"></div>
              </div>
              <div id="adm-progress-label" style="font-size:11px;color:#888;font-family:monospace">Memproses...</div>
            </div>
            <div class="adm-error" id="adm-add-error" hidden></div>
            <div id="adm-add-result" hidden style="margin-top:12px">
              <div id="adm-add-summary" style="font-size:12px;color:#4A7C5E;margin-bottom:8px;font-family:monospace"></div>
              <button class="adm-btn adm-btn-ghost" id="adm-download-csv" style="font-size:12px">⬇ Download CSV</button>
            </div>
          </div>

          <div class="adm-table-wrap">
            <table class="adm-table">
              <thead>
                <tr>
                  <th>Kode</th><th>Status</th><th>Device</th>
                  <th>Reset/Bln</th><th>Dipakai Sejak</th><th>Aksi</th>
                </tr>
              </thead>
              <tbody id="adm-codes-body">
                ${codes.map(c => _codeRow(c)).join('')}
              </tbody>
            </table>
          </div>
        </section>

        <!-- Tab Audit Trail -->
        <section class="adm-tab" id="tab-audit" hidden>
          <div class="adm-topbar">
            <div>
              <h2 class="adm-tab-title">Audit Trail</h2>
              <p class="adm-tab-sub">50 aksi admin terakhir</p>
            </div>
          </div>
          <div class="adm-table-wrap">
            <table class="adm-table">
              <thead>
                <tr><th>Waktu</th><th>Aksi</th><th>Kode</th><th>Catatan</th></tr>
              </thead>
              <tbody>
                ${audit.length === 0
                  ? '<tr><td colspan="4" style="text-align:center;color:#9A9690;padding:24px">Belum ada aksi tercatat.</td></tr>'
                  : audit.map(a => `
                  <tr>
                    <td class="adm-mono adm-date">${_fmtDate(a.timestamp)}</td>
                    <td><span class="adm-action-tag adm-action-${a.action}">${a.action}</span></td>
                    <td class="adm-mono">${_escHtml(a.target_code || '—')}</td>
                    <td class="adm-note-cell">${_escHtml(a.note || '—')}</td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>

    <!-- Reset Modal -->
    <div class="adm-overlay" id="adm-modal" hidden role="dialog" aria-modal="true">
      <div class="adm-modal">
        <h3 class="adm-modal-title">Reset Device Count</h3>
        <p class="adm-modal-meta" id="adm-modal-meta"></p>
        <div class="adm-field" style="margin:16px 0 0">
          <label class="adm-label">Alasan Reset</label>
          <input class="adm-input" id="adm-reset-note" type="text"
            placeholder="Contoh: Guru ganti HP" maxlength="120" />
        </div>
        <div class="adm-error" id="adm-reset-error" hidden></div>
        <div class="adm-modal-actions">
          <button class="adm-btn adm-btn-danger" id="adm-modal-confirm">Reset</button>
          <button class="adm-btn adm-btn-ghost" id="adm-modal-cancel">Batal</button>
        </div>
      </div>
    </div>
  `;

  _bindDashboard(app, session, codes);
}

function _codeRow(c) {
  const isActive  = c.is_used;
  const resetWarn = c.resets_this_month >= MAX_RESETS_PER_MONTH;
  return `
    <tr ${c.is_flagged ? 'class="adm-row-flagged"' : ''}>
      <td class="adm-mono adm-code-col">
        <span class="adm-code-text">${_escHtml(c.code)}</span>
        ${c.is_flagged ? '<span class="adm-flag">⚠ Sering direset</span>' : ''}
      </td>
      <td><span class="adm-status ${isActive ? 'adm-s-active' : 'adm-s-unused'}">${isActive ? 'Aktif' : 'Belum dipakai'}</span></td>
      <td class="adm-mono adm-center">${c.device_count ?? 0} / 2</td>
      <td class="adm-mono adm-center ${resetWarn ? 'adm-warn' : ''}">${c.resets_this_month}×</td>
      <td class="adm-date">${c.used_at ? _fmtDate(c.used_at) : '—'}</td>
      <td>
        <button class="adm-btn adm-btn-sm adm-btn-reset"
          data-code="${_escHtml(c.code)}"
          data-count="${c.device_count ?? 0}"
          data-resets="${c.resets_this_month}"
          ${resetWarn ? 'disabled title="Batas reset bulan ini"' : ''}>
          Reset
        </button>
      </td>
    </tr>
  `;
}

function _bindDashboard(app, session, codes) {
  // Tab switch
  app.querySelectorAll('.adm-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      app.querySelectorAll('.adm-nav-item').forEach(b => b.classList.remove('active'));
      app.querySelectorAll('.adm-tab').forEach(t => { t.hidden = true; });
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`).hidden = false;
    });
  });

  // Logout
  document.getElementById('adm-logout').addEventListener('click', () => {
    if (!confirm('Logout dari Admin Panel?')) return;
    clearAdminSession();
    renderLoginScreen(app);
  });

  // Toggle form tambah kode
  const addForm = document.getElementById('adm-add-form');
  document.getElementById('adm-add-code-btn').addEventListener('click', () => {
    addForm.hidden = !addForm.hidden;
    if (!addForm.hidden) document.getElementById('adm-add-note').focus();
  });
  document.getElementById('adm-add-cancel').addEventListener('click', () => {
    addForm.hidden = true;
  });

  document.getElementById('adm-add-confirm').addEventListener('click', async () => {
    const jumlah  = Math.min(Math.max(1, parseInt(document.getElementById('adm-add-jumlah').value) || 1), 500);
    const note    = document.getElementById('adm-add-note').value.trim();
    const btn     = document.getElementById('adm-add-confirm');
    const err     = document.getElementById('adm-add-error');
    const prog    = document.getElementById('adm-add-progress');
    const fill    = document.getElementById('adm-progress-fill');
    const label   = document.getElementById('adm-progress-label');
    const result  = document.getElementById('adm-add-result');
    const summary = document.getElementById('adm-add-summary');

    btn.disabled = true;
    btn.textContent = 'Generating...';
    err.hidden = true;
    result.hidden = true;
    prog.hidden = false;
    fill.style.width = '0%';
    label.textContent = `0 / ${jumlah} kode dibuat...`;

    let lastBatch = [];
    try {
      lastBatch = await addCodeBatch(session.id, jumlah, note, (done, total) => {
        const pct = Math.round((done / total) * 100);
        fill.style.width = pct + '%';
        label.textContent = `${done} / ${total} kode dibuat...`;
      });

      const ok    = lastBatch.filter(r => r.status === 'ok').length;
      const gagal = lastBatch.filter(r => r.status === 'error').length;

      prog.hidden = true;
      result.hidden = false;
      summary.textContent = `✓ ${ok} kode berhasil dibuat${gagal > 0 ? ` · ${gagal} gagal` : ''}.`;

      // Bind download CSV
      const dlBtn = document.getElementById('adm-download-csv');
      dlBtn.onclick = () => {
        const tanggal = new Date().toLocaleDateString('id-ID').replace(/\//g, '-');
        downloadCSV(
          lastBatch.map(r => ({
            kode    : r.code,
            status  : r.status === 'ok' ? 'Berhasil' : 'Gagal',
            catatan : note || '',
            tanggal : tanggal,
          })),
          `FLAF-kode-aktivasi-${tanggal}.csv`
        );
      };

      // Reload tabel kode
      renderDashboard(app, session);
    } catch (e) {
      prog.hidden = true;
      err.textContent = `Gagal: ${e.message}`;
      err.hidden = false;
    } finally {
      btn.disabled = false;
      btn.textContent = 'Generate';
    }
  });

  // Reset buttons
  app.querySelectorAll('.adm-btn-reset').forEach(btn => {
    btn.addEventListener('click', () => {
      _openModal(app, btn.dataset.code, btn.dataset.count, btn.dataset.resets, session);
    });
  });
}

function _openModal(app, code, deviceCount, resetsThisMonth, session) {
  const modal   = document.getElementById('adm-modal');
  const metaEl  = document.getElementById('adm-modal-meta');
  const errEl   = document.getElementById('adm-reset-error');
  const noteEl  = document.getElementById('adm-reset-note');

  metaEl.textContent = `Kode: ${code} · Device aktif: ${deviceCount} · Reset bulan ini: ${resetsThisMonth}×`;
  errEl.hidden = true;
  noteEl.value = '';
  modal.hidden = false;

  // Hapus listener lama — clone trick
  const oldConfirm = document.getElementById('adm-modal-confirm');
  const oldCancel  = document.getElementById('adm-modal-cancel');
  const newConfirm = oldConfirm.cloneNode(true);
  const newCancel  = oldCancel.cloneNode(true);
  oldConfirm.replaceWith(newConfirm);
  oldCancel.replaceWith(newCancel);

  const doClose = () => { modal.hidden = true; };

  newCancel.addEventListener('click', doClose);
  modal.addEventListener('click', e => { if (e.target === modal) doClose(); }, { once: true });

  newConfirm.addEventListener('click', async () => {
    const note = noteEl.value.trim() || 'Reset via Admin Panel';
    newConfirm.disabled = true;
    newConfirm.textContent = 'Mereset...';
    errEl.hidden = true;
    try {
      await resetDeviceCount(code, session.id, note);
      doClose();
      renderDashboard(app, session);
    } catch (e) {
      errEl.textContent = e instanceof RateLimitError ? e.message : `Gagal: ${e.message}`;
      errEl.hidden = false;
      newConfirm.disabled = false;
      newConfirm.textContent = 'Reset';
    }
  });
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

/**
 * Download array of objects sebagai file CSV.
 */
export function downloadCSV(rows, filename = 'kode-aktivasi.csv') {
  if (!rows || rows.length === 0) return;
  const header = Object.keys(rows[0]).join(',');
  const body   = rows.map(r =>
    Object.values(r).map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')
  ).join('\n');
  const blob = new Blob(['\uFEFF' + header + '\n' + body], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 2000);
}

function _escHtml(str) {
  return String(str ?? '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function _fmtDate(iso) {
  try {
    return new Date(iso).toLocaleString('id-ID', {
      day:'2-digit', month:'short', year:'numeric',
      hour:'2-digit', minute:'2-digit',
    });
  } catch { return iso ?? '—'; }
}

function _startOfMonth() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
}
