/* =============================================================
   FLAF — storage/logger.js
   Sprint 5 Sesi 4 — Log Batching Aktif

   SPESIFIKASI (dari Rangkuman v6 Section 7):
   - 3 severity: info / warn / error
   - error → batch prioritas tinggi
   - warn + info → batch normal, flush tiap 5 menit ATAU 20 entries
   - Flush saat visibilitychange + beforeunload
   - Rate limit: max 100 entries/jam (lokal, tidak dikirim ke server)
   - IDB tidak tersedia → fallback console-only (tidak crash)
   - OFFLINE-ONLY: log hanya disimpan di IDB dan console.
     Tidak ada koneksi ke server eksternal.
   =============================================================*/

import { get, set, remove, isAvailable } from './db.js';

// ── KONSTANTA ─────────────────────────────────────────────────

const BATCH_SIZE_NORMAL   = 20;              // flush jika antrian normal ≥ 20
const BATCH_INTERVAL_MS   = 5 * 60 * 1000;  // 5 menit
const RATE_LIMIT_PER_HOUR = 100;             // max entry/jam yang disimpan ke IDB
const IDB_QUEUE_KEY       = 'log_queue_v1';
const IDB_RATE_KEY        = 'log_rate_v1';

// ── STATE ─────────────────────────────────────────────────────

let _initialized  = false;
let _consoleOnly  = false;   // IDB tidak tersedia
let _queue        = [];      // antrian log in-memory
let _priorityQ    = [];      // antrian prioritas (error severity)
let _timer        = null;    // setInterval untuk flush berkala
let _deviceInfo   = null;    // cache device info (diisi sekali)
let _hourlyCount  = 0;       // counter rate limit per jam
let _hourlyReset  = null;    // timestamp reset berikutnya

// ── INIT ──────────────────────────────────────────────────────

const logger = {

  async init() {
    if (_initialized) return;

    // Cek IDB
    const idbOk = await isAvailable();
    if (!idbOk) {
      console.warn('[logger] IDB tidak tersedia — mode console-only aktif');
      _consoleOnly = true;
      _initialized = true;
      return;
    }

    // Pulihkan antrian yang belum ter-flush dari sesi sebelumnya
    try {
      const savedQueue = await get(IDB_QUEUE_KEY);
      if (Array.isArray(savedQueue) && savedQueue.length > 0) {
        _queue = savedQueue;
        console.info(`[logger] Pulihkan ${_queue.length} log dari sesi sebelumnya`);
      }
    } catch (err) {
      console.warn('[logger] Gagal pulihkan antrian:', err?.message);
    }

    // Pulihkan rate limit counter
    try {
      const rateData = await get(IDB_RATE_KEY);
      if (rateData && rateData.resetAt > Date.now()) {
        _hourlyCount = rateData.count ?? 0;
        _hourlyReset = rateData.resetAt;
      } else {
        _resetRateCounter();
      }
    } catch {
      _resetRateCounter();
    }

    // Cache device info
    _deviceInfo = _buildDeviceInfo();

    // Setup flush berkala (5 menit)
    _timer = setInterval(() => {
      this._flushNormal();
    }, BATCH_INTERVAL_MS);

    // Flush saat visibility berubah (tab ke background, close tab, switch app)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this._flushAll();
      }
    });

    // Flush saat browser akan close
    window.addEventListener('beforeunload', () => {
      this._flushAll();
    });

    // Flush saat kembali online
    window.addEventListener('online', () => {
      this._flushAll();
    });

    _initialized = true;
    console.info('[logger] init selesai', {
      queueRestored: _queue.length,
      consoleOnly: false
    });
  },

  // ── PUBLIC API ───────────────────────────────────────────────

  info(screen, event, data = {}) {
    this._log('info', screen, event, data);
  },

  warn(screen, event, data = {}) {
    this._log('warn', screen, event, data);
  },

  error(screen, event, data = {}) {
    this._log('error', screen, event, data);
  },

  // ── INTERNAL: _log ───────────────────────────────────────────

  _log(severity, screen, event, data) {
    // Guard: belum init
    if (!_initialized) {
      console.warn(`[logger] dipanggil sebelum init (${severity}):`, screen, event);
      return;
    }

    // Selalu tulis ke console untuk debugging lokal
    const consoleFn = severity === 'error' ? 'error'
                    : severity === 'warn'  ? 'warn'
                    : 'log';
    console[consoleFn](`[FLAF/${screen}]`, event, data);

    // Console-only mode: tidak perlu lanjut
    if (_consoleOnly) return;

    const entry = {
      ts:         new Date().toISOString(),
      severity,
      screen,
      event,
      data:       _sanitize(data),
      device:     _deviceInfo,
      cache_ver:  window.__FLAF_VERSION__ ?? 'unknown',
    };

    if (severity === 'error') {
      // Error → antrian prioritas → flush segera
      _priorityQ.push(entry);
      this._flushPriority();
    } else {
      // info/warn → antrian normal
      _queue.push(entry);
      this._persistQueue();   // simpan ke IDB asinkron

      // Flush jika antrian sudah mencapai batas
      if (_queue.length >= BATCH_SIZE_NORMAL) {
        this._flushNormal();
      }
    }
  },

  // ── INTERNAL: flush ──────────────────────────────────────────

  async _flushPriority() {
    if (_priorityQ.length === 0) return;
    if (!navigator.onLine) return; // simpan untuk nanti

    const batch = [..._priorityQ];
    _priorityQ = [];

    await this._sendBatch(batch);
  },

  async _flushNormal() {
    if (_queue.length === 0) return;
    if (!navigator.onLine) return;

    const batch = [..._queue];
    _queue = [];
    await remove(IDB_QUEUE_KEY); // hapus dari IDB

    await this._sendBatch(batch);
  },

  async _flushAll() {
    // Flush prioritas dulu, lalu normal
    await this._flushPriority();
    await this._flushNormal();
  },

  // ── INTERNAL: send (console + IDB only — offline-first) ─────

  async _sendBatch(entries) {
    if (!entries || entries.length === 0) return;

    // Rate limit check — cegah IDB membengkak
    if (_hourlyCount >= RATE_LIMIT_PER_HOUR) {
      console.warn('[logger] Rate limit tercapai — log dibuang:', entries.length);
      return;
    }

    // FLAF berjalan offline-only: log hanya ke console.
    // Tidak ada pengiriman data ke server eksternal.
    for (const entry of entries) {
      const consoleFn = entry.severity === 'error' ? 'error'
                      : entry.severity === 'warn'  ? 'warn'
                      : 'log';
      console[consoleFn]('[FLAF/logger]', entry.screen, entry.event, entry.data);
    }

    // Update rate counter lokal
    _hourlyCount += entries.length;
    this._persistRateCounter();
  },

  // ── INTERNAL: persist ────────────────────────────────────────

  async _persistQueue() {
    if (_consoleOnly) return;
    try {
      // Batas antrian: 200 entry agar tidak membebani IDB
      const toSave = _queue.slice(-200);
      await set(IDB_QUEUE_KEY, toSave);
    } catch (err) {
      console.warn('[logger] Gagal persist queue ke IDB:', err?.message);
    }
  },

  async _persistRateCounter() {
    if (_consoleOnly) return;
    try {
      await set(IDB_RATE_KEY, {
        count:   _hourlyCount,
        resetAt: _hourlyReset,
      });
    } catch {
      // Non-critical — abaikan
    }
  },

};

// ── HELPER FUNCTIONS ──────────────────────────────────────────

function _resetRateCounter() {
  _hourlyCount = 0;
  _hourlyReset = Date.now() + 60 * 60 * 1000; // 1 jam dari sekarang
}

function _buildDeviceInfo() {
  const ua = navigator.userAgent ?? '';
  return {
    ua:       ua.substring(0, 120),     // potong agar tidak terlalu panjang
    online:   navigator.onLine,
    lang:     navigator.language ?? '',
    sw:       'serviceWorker' in navigator,
    idb:      !_consoleOnly,
  };
}

/**
 * _sanitize() — hilangkan data sensitif sebelum dikirim ke server.
 * Recursif untuk objek nested.
 */
function _sanitize(data, depth = 0) {
  if (depth > 3) return '[nested]'; // cegah infinite recursion
  if (data === null || data === undefined) return data;
  if (typeof data !== 'object') return data;
  if (Array.isArray(data)) return data.slice(0, 10).map(v => _sanitize(v, depth + 1));

  const BLOCKED_KEYS = ['password', 'token', 'secret', 'key', 'code', 'pin'];
  const out = {};
  for (const [k, v] of Object.entries(data)) {
    if (BLOCKED_KEYS.some(b => k.toLowerCase().includes(b))) {
      out[k] = '[REDACTED]';
    } else {
      out[k] = _sanitize(v, depth + 1);
    }
  }
  return out;
}

export default logger;
export { logger };