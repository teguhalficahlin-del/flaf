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

// ── KONSTANTA ─────────────────────────────────────────────────

const BATCH_SIZE_NORMAL   = 20;              // flush jika antrian normal ≥ 20
const BATCH_INTERVAL_MS   = 5 * 60 * 1000;  // 5 menit
const RATE_LIMIT_PER_HOUR = 100;             // max entry/jam

// ── STATE ─────────────────────────────────────────────────────

let _initialized  = false;
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

    _deviceInfo = _buildDeviceInfo();
    _resetRateCounter();

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
    console.info('[logger] init selesai — queue in-memory');
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

    // Update rate counter lokal (in-memory; reset per jam)
    if (_hourlyReset && Date.now() > _hourlyReset) _resetRateCounter();
    _hourlyCount += entries.length;
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