/**
 * storage/db.js — FLAF IndexedDB Wrapper
 *
 * KONTRAK PENGGUNAAN:
 *   1. Panggil `await db.init()` di initApp() SEBELUM operasi lain
 *   2. logger.js boleh memanggil fungsi db SEBELUM init() selesai
 *      → fungsi akan return null/false (bukan throw) jika belum ready
 *      → ini by design: logger harus bisa fallback ke console-only
 *   3. Semua caller lain (activation, dashboard, export) HANYA dipanggil
 *      setelah db.init() selesai → akan throw jelas jika kontrak dilanggar
 *
 * API publik:
 *   db.init()                        → Promise<void>
 *   db.get(store, key)               → Promise<value|null>
 *   db.set(store, key, value)        → Promise<boolean>
 *   db.remove(store, key)            → Promise<boolean>
 *   db.getAll(store)                 → Promise<Array<{key,value}>>
 *   db.isReady()                     → boolean  (sinkron)
 *   db.isAvailable()                 → Promise<boolean>  (alias, untuk logger.js)
 *   db.exportAll()                   → Promise<object>
 *   db.importMerge(data,onConflict)  → Promise<{merged,kept,conflicts}>
 *
 * Schema (DB_VERSION = 2):
 *   kv           — session, device_id, nonce_*, data_version, export metadata
 *   log_queue    — log entries (autoIncrement)
 *   teacher_data — progress per TP: progress_tp_N, catatan
 */

const DB_NAME    = 'flaf_db';
const DB_VERSION = 6;

const VALID_STORES = new Set(['kv', 'log_queue', 'teacher_data', 'teaching_log', 'nilai_data', 'presensi_log', 'siswa_per_kelas']);

let _db          = null;
let _initPromise = null;
let _ready       = false;

// ─── INIT ────────────────────────────────────────────────────────────────────

/**
 * Buka IndexedDB secara eksplisit dan deterministik.
 * Idempotent: aman dipanggil lebih dari sekali — Promise yang sama dikembalikan.
 * Throw jika gagal — tidak ada silent failure.
 *
 * Console yang DIJAMIN muncul saat berhasil:
 *   [DB] init start
 *   [DB] upgrade needed  (hanya saat pertama / upgrade versi)
 *   [DB] init success
 */
function init() {
  if (_initPromise) return _initPromise;

  _initPromise = new Promise(function(resolve, reject) {
    console.log('[DB] init start');

    if (typeof indexedDB === 'undefined' || !indexedDB) {
      var err = new Error('[DB] IndexedDB tidak tersedia di browser ini');
      console.error('[DB] init error', err.message);
      _initPromise = null;
      reject(err);
      return;
    }

    var req;
    try {
      req = indexedDB.open(DB_NAME, DB_VERSION);
    } catch (e) {
      var openErr = new Error('[DB] indexedDB.open() throw: ' + e.message);
      console.error('[DB] init error', openErr.message);
      _initPromise = null;
      reject(openErr);
      return;
    }

    // Dipanggil saat DB baru pertama kali, atau versi lama ditemukan
    req.onupgradeneeded = function(event) {
      console.log('[DB] upgrade needed — oldVersion:', event.oldVersion, '→ newVersion:', event.newVersion);
      var upgradeDB = event.target.result;

      if (!upgradeDB.objectStoreNames.contains('kv')) {
        upgradeDB.createObjectStore('kv');
        console.log('[DB] store created: kv');
      }
      if (!upgradeDB.objectStoreNames.contains('log_queue')) {
        upgradeDB.createObjectStore('log_queue', { autoIncrement: true });
        console.log('[DB] store created: log_queue');
      }
      if (!upgradeDB.objectStoreNames.contains('teacher_data')) {
        upgradeDB.createObjectStore('teacher_data');
        console.log('[DB] store created: teacher_data');
      }
      if (!upgradeDB.objectStoreNames.contains('teaching_log')) {
        upgradeDB.createObjectStore('teaching_log');
        console.log('[DB] store created: teaching_log');
      }
      if (!upgradeDB.objectStoreNames.contains('nilai_data')) {
        upgradeDB.createObjectStore('nilai_data');
        console.log('[DB] store created: nilai_data');
      }
      if (!upgradeDB.objectStoreNames.contains('presensi_log')) {
        upgradeDB.createObjectStore('presensi_log');
        console.log('[DB] store created: presensi_log');
      }
      if (!upgradeDB.objectStoreNames.contains('siswa_per_kelas')) {
        upgradeDB.createObjectStore('siswa_per_kelas');
        console.log('[DB] store created: siswa_per_kelas');
      }
    };

    req.onsuccess = function(event) {
      _db    = event.target.result;
      _ready = true;

      // Validasi semua store ada (defence-in-depth)
      var missing = [];
      for (var store of VALID_STORES) {
        if (!_db.objectStoreNames.contains(store)) missing.push(store);
      }
      if (missing.length > 0) {
        console.error('[DB] WARNING: store hilang setelah init:', missing.join(', '));
      }

      // Handle koneksi ditutup paksa oleh browser
      _db.onclose = function() {
        console.warn('[DB] koneksi ditutup oleh browser — reset state');
        _db          = null;
        _ready       = false;
        _initPromise = null;
      };

      // Handle tab lain upgrade DB ke versi lebih baru
      _db.onversionchange = function() {
        console.warn('[DB] onversionchange — menutup koneksi lama');
        _db.close();
        _db          = null;
        _ready       = false;
        _initPromise = null;
      };

      var storeList = Array.from(_db.objectStoreNames).join(', ');
      console.log('[DB] init success — stores:', storeList, '— version:', _db.version);
      resolve();
    };

    req.onerror = function(event) {
      var err = event.target.error;
      var msg = err ? (err.name + ': ' + err.message) : 'unknown error';
      console.error('[DB] init error', msg);
      _initPromise = null;
      reject(new Error('IndexedDB gagal dibuka: ' + msg));
    };

    req.onblocked = function() {
      console.warn('[DB] init blocked — ada tab lain yang masih pakai versi lama. Tutup tab lain dan reload.');
    };
  });

  return _initPromise;
}

// ─── GUARDS ──────────────────────────────────────────────────────────────────

function _assertReady() {
  if (!_ready || !_db) {
    throw new Error('[DB] belum diinisialisasi — panggil await db.init() dulu di initApp()');
  }
}

function _assertStore(store) {
  if (!VALID_STORES.has(store)) {
    throw new Error('[DB] store tidak valid: "' + store + '". Pilihan: ' + Array.from(VALID_STORES).join(', '));
  }
}

// ─── isReady (sinkron) ────────────────────────────────────────────────────────

/** Cek apakah DB sudah siap — tanpa await. */
function isReady() {
  return _ready && _db !== null;
}

/**
 * isAvailable — alias async untuk kompatibilitas dengan logger.js.
 * logger.js memanggil ini sebelum db.init() selesai → return false (bukan throw).
 * Setelah db.init() selesai → return true.
 */
async function isAvailable() {
  if (_ready && _db) return true;
  // Jika init sudah dimulai (Promise ada), tunggu hasilnya
  if (_initPromise) {
    try {
      await _initPromise;
      return _ready && _db !== null;
    } catch {
      return false;
    }
  }
  // Init belum dipanggil sama sekali → false (bukan throw)
  return false;
}

// ─── GET ─────────────────────────────────────────────────────────────────────

/**
 * Ambil nilai dari store.
 * Jika DB belum ready: return null (untuk logger yang bisa dipanggil sebelum init).
 * Untuk caller non-logger: akan throw via _assertReady jika dipanggil sebelum init.
 *
 * @param {string} store
 * @param {IDBValidKey} key
 * @param {boolean} [softFail=false] jika true, return null alih-alih throw saat belum ready
 */
async function get(store, key, softFail) {
  _assertStore(store);
  if (!_ready || !_db) {
    if (softFail) return null;
    _assertReady();
  }

  return new Promise(function(resolve, reject) {
    try {
      var tx  = _db.transaction(store, 'readonly');
      var req = tx.objectStore(store).get(key);
      req.onsuccess = function() { resolve(req.result !== undefined ? req.result : null); };
      req.onerror   = function() { reject(req.error); };
    } catch (err) {
      reject(err);
    }
  });
}

// ─── SET ─────────────────────────────────────────────────────────────────────

/**
 * @param {string} store
 * @param {IDBValidKey} key
 * @param {any} value
 * @param {boolean} [softFail=false]
 */
async function set(store, key, value, softFail) {
  _assertStore(store);
  if (!_ready || !_db) {
    if (softFail) return false;
    _assertReady();
  }

  return new Promise(function(resolve, reject) {
    try {
      var tx  = _db.transaction(store, 'readwrite');
      var req = tx.objectStore(store).put(value, key);
      req.onsuccess = function() { resolve(true); };
      req.onerror   = function() { reject(req.error); };
    } catch (err) {
      reject(err);
    }
  });
}

// ─── REMOVE ──────────────────────────────────────────────────────────────────

/**
 * @param {string} store
 * @param {IDBValidKey} key
 * @param {boolean} [softFail=false]
 */
async function remove(store, key, softFail) {
  _assertStore(store);
  if (!_ready || !_db) {
    if (softFail) return false;
    _assertReady();
  }

  return new Promise(function(resolve, reject) {
    try {
      var tx  = _db.transaction(store, 'readwrite');
      var req = tx.objectStore(store).delete(key);
      tx.oncomplete = function() { resolve(true); };
      tx.onerror    = function() { reject(tx.error); };
    } catch (err) {
      reject(err);
    }
  });
}

// ─── GET ALL ─────────────────────────────────────────────────────────────────

/**
 * Ambil semua record dari store via cursor.
 * Return Array<{ key, value }>.
 */
async function getAll(store) {
  _assertReady();
  _assertStore(store);

  return new Promise(function(resolve, reject) {
    try {
      var tx      = _db.transaction(store, 'readonly');
      var results = [];

      var cursorReq = tx.objectStore(store).openCursor();
      cursorReq.onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
          results.push({ key: cursor.key, value: cursor.value });
          cursor.continue();
        } else {
          resolve(results);
        }
      };
      cursorReq.onerror = function() { reject(cursorReq.error); };
    } catch (err) {
      reject(err);
    }
  });
}

// ─── EXPORT ALL ──────────────────────────────────────────────────────────────

async function exportAll() {
  _assertReady();

  async function _toObj(store) {
    var entries = await getAll(store);
    var obj = {};
    for (var i = 0; i < entries.length; i++) obj[entries[i].key] = entries[i].value;
    return obj;
  }

  return {
    version      : 2,
    exported_at  : new Date().toISOString(),
    kv           : await _toObj('kv'),
    teacher_data : await _toObj('teacher_data'),
    nilai_data   : await _toObj('nilai_data'),
    teaching_log : await _toObj('teaching_log'),
    presensi_log : await _toObj('presensi_log'),
  };
}

// ─── IMPORT MERGE ────────────────────────────────────────────────────────────

async function importMerge(parsed, onConflict) {
  _assertReady();

  var merged    = 0;
  var kept      = 0;
  var conflicts = [];

  // KEAMANAN: kunci 'session' dan 'device_id' dikecualikan dari merge.
  // Mengimport backup orang lain tidak boleh mengganti identitas atau sesi perangkat ini.
  const KV_EXCLUDED_KEYS = new Set(['session', 'device_id']);

  async function mergeStore(storeName, incoming) {
    if (!incoming || typeof incoming !== 'object') return;
    var entries = Object.entries(incoming);
    for (var i = 0; i < entries.length; i++) {
      var key         = entries[i][0];
      var incomingVal = entries[i][1];

      // Kecualikan kunci sensitif dari store kv
      if (storeName === 'kv' && KV_EXCLUDED_KEYS.has(key)) continue;

      var current     = await get(storeName, key);

      if (!current) {
        await set(storeName, key, incomingVal);
        merged++;
        continue;
      }

      var currentTs  = (current && (current.updated_at  || current.issued_at))  || 0;
      var incomingTs = (incomingVal && (incomingVal.updated_at || incomingVal.issued_at)) || 0;

      if (incomingTs > currentTs) {
        await set(storeName, key, incomingVal);
        merged++;
      } else if (incomingTs === currentTs && incomingTs > 0) {
        conflicts.push(key);
        var decision = onConflict ? await onConflict(key, current, incomingVal) : 'keep';
        if (decision === 'overwrite') {
          await set(storeName, key, incomingVal);
          merged++;
        } else {
          kept++;
        }
      } else {
        kept++;
      }
    }
  }

  await mergeStore('kv',           parsed.kv);
  await mergeStore('teacher_data', parsed.teacher_data);
  await mergeStore('nilai_data',   parsed.nilai_data);
  await mergeStore('teaching_log', parsed.teaching_log);
  await mergeStore('presensi_log', parsed.presensi_log);

  return { merged: merged, kept: kept, conflicts: conflicts };
}

// ─── EXPORTS ─────────────────────────────────────────────────────────────────

export const db = {
  init,
  get,
  set,
  remove,
  getAll,
  isReady,
  isAvailable,
  exportAll,
  importMerge,
};

// Named exports — agar logger.js yang import { get, set, remove, isAvailable }
// tetap bisa resolve tanpa perubahan
export { init, get, set, remove, getAll, isReady, isAvailable, exportAll, importMerge };
