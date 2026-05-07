/**
 * storage/presensi.js — FLAF Data Presensi Siswa
 *
 * Menyimpan catatan kehadiran per sesi mengajar secara lokal (IndexedDB).
 * Satu record = satu sesi (satu rombel, satu TP, satu hari).
 *
 * API publik:
 *   presensi.simpan(data)              → Promise<string>   id sesi baru
 *   presensi.getByKelas(kelasId)       → Promise<Array>    semua sesi kelas ini
 *   presensi.getByTP(kelasId, tpNomor) → Promise<Array>    sesi untuk TP tertentu
 *   presensi.hapus(id)                 → Promise<void>
 *   presensi.rekapKehadiran(kelasId)   → Promise<object>   { [siswaId]: { [tpNomor]: string[] } }
 */

import { db } from './db.js';

const STORE = 'presensi_log';

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function _randomId() {
  return Math.random().toString(36).slice(2, 6);
}

function _buildId(kelasId, tpNomor, date) {
  const d       = date || new Date();
  const dateStr = d.toISOString().slice(0, 10).replace(/-/g, '');
  const timeStr = d.toISOString().slice(11, 19).replace(/:/g, '');
  return `sesi_${dateStr}_${timeStr}_${String(kelasId).slice(-4)}_tp${tpNomor}_${_randomId()}`;
}

// ─── SIMPAN ───────────────────────────────────────────────────────────────────

/**
 * Simpan satu sesi presensi ke IndexedDB.
 *
 * @param {object} data
 * @param {string}   data.kelasId
 * @param {string}   data.kelasNama
 * @param {number}   data.tpNomor
 * @param {string}   data.tpNama
 * @param {string[]} data.hadirIds    — array siswaId yang hadir
 * @returns {Promise<string>} id sesi yang baru dibuat
 */
async function simpan({ kelasId, kelasNama, tpNomor, tpNama, statusMap, siswaList }) {
  const now   = new Date();
  const id    = _buildId(kelasId, tpNomor, now);

  // Simpan status_map: { [siswaId]: 'H'|'S'|'I'|'A' }
  // Inisialisasi semua siswa ke 'A' dulu, lalu tindih dari statusMap
  const fullStatusMap = {};
  for (const s of siswaList) {
    fullStatusMap[s.id] = statusMap[s.id] || 'A';
  }

  const totalH = Object.values(fullStatusMap).filter(v => v === 'H').length;

  const entry = {
    id,
    kelas_id   : kelasId,
    kelas_nama : kelasNama,
    tp_nomor   : tpNomor,
    tp_nama    : tpNama,
    tanggal    : now.toISOString().slice(0, 10),
    status_map : fullStatusMap,
    taught_at  : now.toISOString(),
    synced     : false,
  };

  await db.set(STORE, id, entry);
  console.log('[PRESENSI] simpan sesi:', id, '— hadir:', totalH);
  return id;
}

// ─── GET BY KELAS ─────────────────────────────────────────────────────────────

/**
 * Ambil semua sesi untuk satu kelas, diurutkan terbaru dulu.
 * @param {string} kelasId
 * @returns {Promise<Array>}
 */
async function getByKelas(kelasId) {
  const all = await db.getAll(STORE);
  return all
    .map(e => e.value)
    .filter(v => v.kelas_id === kelasId)
    .sort((a, b) => b.taught_at.localeCompare(a.taught_at));
}

// ─── GET BY TP ────────────────────────────────────────────────────────────────

/**
 * Ambil semua sesi untuk kelas + TP tertentu.
 * @param {string} kelasId
 * @param {number} tpNomor
 * @returns {Promise<Array>}
 */
async function getByTP(kelasId, tpNomor) {
  const sesi = await getByKelas(kelasId);
  return sesi.filter(s => s.tp_nomor === tpNomor);
}

// ─── HAPUS ────────────────────────────────────────────────────────────────────

/**
 * Hapus satu sesi dari IndexedDB.
 * @param {string} id
 * @returns {Promise<void>}
 */
async function hapus(id) {
  await db.remove(STORE, id);
  console.log('[PRESENSI] hapus sesi:', id);
}

// ─── REKAP KEHADIRAN ──────────────────────────────────────────────────────────

/**
 * Hitung rekap kehadiran per siswa per TP untuk satu kelas.
 * Dipakai oleh PDF generator.
 *
 * @param {string} kelasId
 * @returns {Promise<object>}
 *   {
 *     [siswaId]: {
 *       [tpNomor]: string[]   ← array tanggal ('YYYY-MM-DD') saat hadir
 *     }
 *   }
 */
async function rekapKehadiran(kelasId) {
  const sesiList = await getByKelas(kelasId);
  const rekap    = {};

  for (const sesi of sesiList) {
    const tp        = sesi.tp_nomor;
    const statusMap = sesi.status_map || {};

    for (const [siswaId, status] of Object.entries(statusMap)) {
      if (!rekap[siswaId])     rekap[siswaId]     = {};
      if (!rekap[siswaId][tp]) rekap[siswaId][tp] = {};
      // Simpan per sesiId: status kehadiran
      rekap[siswaId][tp][sesi.id] = status;
    }
  }

  return rekap;
}

// ─── EXPORTS ─────────────────────────────────────────────────────────────────

export const presensi = {
  simpan,
  getByKelas,
  getByTP,
  hapus,
  rekapKehadiran,
};

export { simpan, getByKelas, getByTP, hapus, rekapKehadiran };
