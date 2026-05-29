/**
 * =============================================================
 * FLAF — DATA ROUTER (FASE INDEX)
 * File: data/index.js
 * =============================================================
 *
 * FUNGSI FILE INI:
 *   Satu-satunya tempat untuk mengatur fase aktif.
 *   App tidak pernah import langsung dari fase-a.js atau fase-b.js.
 *   Semua akses data kurikulum melewati file ini.
 *
 * CARA GANTI FASE:
 *   1. Deploy file fase-b.js ke folder data/
 *   2. Ubah FASE_AKTIF di bawah dari 'A' menjadi 'B'
 *   3. Update CACHE_VERSION di sw.js
 *   4. Deploy — selesai
 *
 * YANG TIDAK BOLEH DIUBAH:
 *   - Nama export (export default, getFase, getTP, getAllTP)
 *   - Struktur return value setiap fungsi
 *   - Blok validasi di bagian bawah
 *
 * Terakhir direvisi : April 2026
 * =============================================================
 */

import FASE_A from './fase-a.js';
// import FASE_B from './fase-b.js'; // ← aktifkan saat Sprint 6

// ----------------------------------------------------------
// KONFIGURASI — SATU BARIS INI YANG DIUBAH SAAT GANTI FASE
// ----------------------------------------------------------
const FASE_AKTIF = 'A'; // 'A' | 'B' | 'C'

// ----------------------------------------------------------
// REGISTRY FASE
// Daftarkan setiap fase di sini saat tersedia.
// ----------------------------------------------------------
const REGISTRY = {
  'A': FASE_A,
  // 'B': FASE_B, // ← aktifkan saat Sprint 6
};

// ----------------------------------------------------------
// GUARD — validasi fase aktif ada di registry
// ----------------------------------------------------------
if (!REGISTRY[FASE_AKTIF]) {
  throw new Error(
    `[FLAF] data/index.js: FASE_AKTIF='${FASE_AKTIF}' tidak ditemukan di REGISTRY. ` +
    `Fase yang tersedia: ${Object.keys(REGISTRY).join(', ')}`
  );
}

const DATA_AKTIF = REGISTRY[FASE_AKTIF];

// ----------------------------------------------------------
// PUBLIC API
// ----------------------------------------------------------

/**
 * getFase()
 * Mengembalikan seluruh objek data fase aktif.
 * Gunakan ini kalau butuh CP, meta, atau atp.
 *
 * @returns {Object} — objek FASE lengkap
 *
 * Contoh:
 *   import { getFase } from './data/index.js';
 *   const fase = getFase();
 *   console.log(fase.meta.fase);      // 'A'
 *   console.log(fase.cp.menyimak_berbicara);
 */
export function getFase() {
  return DATA_AKTIF;
}

/**
 * getAllTP()
 * Mengembalikan array semua Tujuan Pembelajaran fase aktif.
 * Gunakan ini untuk render daftar TP di panel Kurikulum.
 *
 * @returns {Array} — array TP, sudah terurut nomor 1–18
 *
 * Contoh:
 *   import { getAllTP } from './data/index.js';
 *   const semua = getAllTP();
 *   semua.forEach(tp => console.log(tp.id, tp.nama));
 */
export function getAllTP() {
  return DATA_AKTIF.tujuan_pembelajaran;
}

/**
 * getTP(id)
 * Mengembalikan satu objek TP berdasarkan id-nya.
 * Gunakan ini untuk render detail TP atau modul ajar.
 *
 * @param {string} id — format 'tp-01' sampai 'tp-18'
 * @returns {Object|null} — objek TP, atau null jika tidak ditemukan
 *
 * Contoh:
 *   import { getTP } from './data/index.js';
 *   const tp1 = getTP('tp-01');
 *   if (tp1) console.log(tp1.nama, tp1.indikator);
 */
export function getTP(id) {
  if (typeof id !== 'string' || !id.trim()) {
    console.warn('[FLAF] getTP: id harus berupa string non-kosong');
    return null;
  }
  const tp = DATA_AKTIF.tujuan_pembelajaran.find(t => t.id === id);
  if (!tp) {
    console.warn(`[FLAF] getTP: TP dengan id '${id}' tidak ditemukan di fase ${FASE_AKTIF}`);
    return null;
  }
  return tp;
}

/**
 * getMeta()
 * Mengembalikan meta data fase aktif (versi, total TP, total JP, dll.)
 * Gunakan ini untuk header panel atau info app.
 *
 * @returns {Object} — objek meta
 *
 * Contoh:
 *   import { getMeta } from './data/index.js';
 *   const meta = getMeta();
 *   console.log(meta.data_version); // dipakai app.js untuk Soft Update
 */
export function getMeta() {
  return DATA_AKTIF.meta;
}

/**
 * getFaseAktif()
 * Mengembalikan string kode fase aktif ('A', 'B', dst.)
 * Gunakan ini untuk label UI atau kondisional rendering.
 *
 * @returns {string}
 */
export function getFaseAktif() {
  return FASE_AKTIF;
}

// ----------------------------------------------------------
// DEFAULT EXPORT — seluruh API dalam satu objek
// Untuk konsumsi via: import dataRouter from './data/index.js'
// ----------------------------------------------------------
export default {
  getFase,
  getAllTP,
  getTP,
  getMeta,
  getFaseAktif,
};
