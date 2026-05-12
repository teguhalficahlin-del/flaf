/**
 * storage/jejak.js — FLAF Jejak Mengajar
 *
 * Menyimpan log aktivitas mengajar secara lokal (IndexedDB).
 * Data sepenuhnya offline — tidak ada koneksi ke server eksternal.
 * Backup dilakukan via export.js (JSON download).
 *
 * API publik:
 *   jejak.log(tpNomor, tpNama, action, note?, extra?)  → Promise<string>  id log baru
 *   jejak.hapus(id)                                     → Promise<void>
 *   jejak.getAll()                                      → Promise<Array>
 *   jejak.getStreak()                                   → Promise<number>
 *   jejak.getByDate(dateStr)                            → Promise<Array>
 *   jejak.getMonthSummary()                             → Promise<object>
 *   jejak.getShareSummary()                             → Promise<object>
 *   jejak.sync(deviceId)                                → Promise<object>  (no-op — offline-only)
 */

import { db } from './db.js';

const STORE = 'teaching_log';

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function _dateStr(date) {
  // Format: YYYYMMDD
  const d = date || new Date();
  return d.toISOString().slice(0, 10).replace(/-/g, '');
}

function _timeStr(date) {
  // Format: HHmmss
  const d = date || new Date();
  return d.toISOString().slice(11, 19).replace(/:/g, '');
}

function _randomId() {
  return Math.random().toString(36).slice(2, 6);
}

function _buildId(tpNomor, date) {
  const d = date || new Date();
  return `log_${_dateStr(d)}_${_timeStr(d)}_tp${tpNomor}_${_randomId()}`;
}

function _isoDate(taught_at) {
  // Pakai local time agar konsisten dengan timezone pengguna (WIB, dll)
  const d = new Date(taught_at);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// ─── LOG ─────────────────────────────────────────────────────────────────────

/**
 * Catat aksi mengajar ke IndexedDB.
 * @param {number} tpNomor
 * @param {string} tpNama
 * @param {'mulai'|'selesai'|'reset'|'nilai'} action
 * @param {string} [note] — opsional, refleksi guru
 * @param {object} [extra] — opsional: { rombel_nama, jumlah_siswa }
 * @returns {Promise<string>} id log yang baru dibuat
 */
async function log(tpNomor, tpNama, action, note, extra) {
  const now   = new Date();
  const id    = _buildId(tpNomor, now);
  const entry = {
    id,
    tp_nomor    : tpNomor,
    tp_nama     : tpNama,
    action,
    note        : note || null,
    kendala     : extra?.kendala || null,
    rombel_nama : extra?.rombel_nama  || null,
    jumlah_siswa: extra?.jumlah_siswa ?? null,
    taught_at   : now.toISOString(),
    synced      : false,
  };

  await db.set(STORE, id, entry);
  console.log('[JEJAK] log:', action, 'TP', tpNomor, '→', id);
  return id;
}

// ─── HAPUS ───────────────────────────────────────────────────────────────────

/**
 * Hapus satu entri log dari IndexedDB.
 * @param {string} id
 * @returns {Promise<void>}
 */
async function hapus(id) {
  await db.remove(STORE, id);
  console.log('[JEJAK] hapus:', id);
}

// ─── GET ALL ─────────────────────────────────────────────────────────────────

/**
 * Ambil semua log, diurutkan terbaru dulu.
 * @returns {Promise<Array>}
 */
async function getAll() {
  const entries = await db.getAll(STORE);
  return entries
    .map(e => e.value)
    .sort((a, b) => b.taught_at.localeCompare(a.taught_at));
}

// ─── STREAK ──────────────────────────────────────────────────────────────────

/**
 * Hitung streak hari berturut-turut mengajar.
 * Hari dihitung jika ada minimal 1 log 'mulai', 'selesai', atau 'nilai'.
 * @returns {Promise<number>}
 */
async function getStreak() {
  const logs = await getAll();

  // Kumpulkan hari unik yang ada aktivitas (action bukan 'reset')
  const activeDays = new Set(
    logs
      .filter(l => l.action !== 'reset')
      .map(l => _isoDate(l.taught_at))
  );

  if (activeDays.size === 0) return 0;

  // Hitung streak mundur dari hari ini
  let streak = 0;
  const today = new Date();

  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);

    if (activeDays.has(dateStr)) {
      streak++;
    } else {
      // Hari ini boleh kosong (belum mengajar hari ini)
      // tapi hari sebelumnya tidak boleh kosong
      if (i > 0) break;
    }
  }

  return streak;
}

// ─── GET BY DATE ─────────────────────────────────────────────────────────────

/**
 * Ambil log untuk tanggal tertentu.
 * @param {string} dateStr — format YYYY-MM-DD
 * @returns {Promise<Array>}
 */
async function getByDate(dateStr) {
  const logs = await getAll();
  return logs.filter(l => _isoDate(l.taught_at) === dateStr);
}

// ─── MONTH SUMMARY ───────────────────────────────────────────────────────────

/**
 * Ringkasan bulan ini.
 * @returns {Promise<object>}
 */
async function getMonthSummary() {
  const logs      = await getAll();
  const now       = new Date();
  const thisMonth = now.toISOString().slice(0, 7); // YYYY-MM

  const monthLogs = logs.filter(l => l.taught_at.startsWith(thisMonth));

  const activeDays = new Set(
    monthLogs
      .filter(l => l.action !== 'reset')
      .map(l => _isoDate(l.taught_at))
  );

  const tpSelesai = new Set(
    monthLogs
      .filter(l => l.action === 'selesai')
      .map(l => l.tp_nomor)
  );

  const pertemuan = monthLogs.filter(l => l.action === 'selesai').length;

  return {
    hari_aktif  : activeDays.size,
    pertemuan,
    tp_selesai  : tpSelesai.size,
    active_days : Array.from(activeDays),
  };
}

// ─── SHARE SUMMARY ───────────────────────────────────────────────────────────

/**
 * Data ringkasan untuk fitur share.
 * @returns {Promise<object>}
 */
async function getShareSummary() {
  const [streak, monthSummary, allLogs] = await Promise.all([
    getStreak(),
    getMonthSummary(),
    getAll(),
  ]);

  const totalSelesai = new Set(
    allLogs
      .filter(l => l.action === 'selesai')
      .map(l => l.tp_nomor)
  ).size;

  const totalPertemuan = allLogs.filter(l => l.action === 'selesai').length;

  return {
    streak,
    total_selesai  : totalSelesai,
    total_pertemuan: totalPertemuan,
    bulan_ini      : monthSummary,
  };
}

// ─── SYNC (no-op — offline-only) ─────────────────────────────────────────────

/**
 * Stub sync() — FLAF berjalan sepenuhnya offline.
 * Tidak ada pengiriman data ke server eksternal.
 * Fungsi ini dipertahankan agar kontrak API tidak berubah.
 *
 * @param {string} _deviceId — diabaikan
 * @returns {Promise<{synced: number, failed: number}>}
 */
async function sync(_deviceId) {
  console.log('[JEJAK] sync — mode offline-only, tidak ada pengiriman data');
  return { synced: 0, failed: 0 };
}

// --- TP SELESAI PER ROMBEL --------------------------------------------------

/**
 * Ambil Set nomor TP yang sudah selesai diajarkan untuk satu rombel.
 * @param {string} rombelNama
 * @returns {Promise<Set<number>>}
 */
async function getTPSelesaiPerRombel(rombelNama) {
  const logs = await getAll();
  return new Set(
    logs
      .filter(l => l.action === 'selesai' && l.rombel_nama === rombelNama)
      .map(l => l.tp_nomor)
  );
}

// --- KENDALA SUMMARY --------------------------------------------------------

/**
 * Agregasi kendala sesi untuk bulan ini.
 * @returns {Promise<Array<{kendala: string, jumlah: number}>>} diurutkan terbanyak dulu
 */
async function getKendalaSummary() {
  const logs      = await getAll();
  const now       = new Date();
  const thisMonth = now.toISOString().slice(0, 7);

  const counter = {};
  logs
    .filter(l => l.action === 'selesai' && l.taught_at.startsWith(thisMonth) && l.kendala)
    .forEach(l => {
      counter[l.kendala] = (counter[l.kendala] || 0) + 1;
    });

  const LABEL = {
    lancar          : 'Lancar',
    waktu_kurang    : 'Waktu kurang',
    kurang_kondusif : 'Kurang kondusif',
    media_tidak_ada : 'Media tidak ada',
    lainnya         : 'Lainnya',
  };

  return Object.entries(counter)
    .sort((a, b) => b[1] - a[1])
    .map(([k, n]) => ({ kendala: LABEL[k] || k, jumlah: n }));
}

// --- EXPORTS -----------------------------------------------------------------

export const jejak = {
  log,
  hapus,
  getAll,
  getStreak,
  getByDate,
  getMonthSummary,
  getShareSummary,
  getTPSelesaiPerRombel,
  getKendalaSummary,
  sync,
};

export { log, hapus, getAll, getStreak, getByDate, getMonthSummary, getShareSummary, getTPSelesaiPerRombel, getKendalaSummary, sync };
