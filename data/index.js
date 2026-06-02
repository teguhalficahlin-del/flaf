/**
 * =============================================================
 * FLAF — DATA ROUTER (FASE INDEX)
 * File: data/index.js
 * =============================================================
 *
 * FUNGSI FILE INI:
 *   Satu-satunya tempat untuk mendaftarkan fase aktif.
 *   App tidak pernah import langsung dari fase-a.js atau fase-b.js.
 *   Semua akses data kurikulum melewati file ini.
 *
 * CARA TAMBAH FASE BARU:
 *   1. Deploy file fase-X.js ke folder data/
 *   2. Import dan daftarkan di REGISTRY di bawah
 *   3. Update CACHE_VERSION di sw.js
 *   4. Deploy — selesai. Fase lama tidak terganggu.
 *
 * YANG TIDAK BOLEH DIUBAH:
 *   - Nama export (getFase, getTP, getAllTP, getMeta, getFaseAktif)
 *   - Struktur return value setiap fungsi
 *   - Blok validasi di bagian bawah
 *
 * Terakhir direvisi : Mei 2026
 * =============================================================
 */

import FASE_A from './fase-a.js';
import FASE_B from './fase-b.js';
import FASE_C from './fase-c.js';

// ----------------------------------------------------------
// REGISTRY FASE
// Daftarkan setiap fase yang tersedia di sini.
// Tidak ada lagi FASE_AKTIF — semua fase aktif bersamaan,
// filter per guru dilakukan di layer UI via tp.kelas.
// ----------------------------------------------------------
const REGISTRY = {
  'A': FASE_A,
  'B': FASE_B,
  'C': FASE_C,
};

// ----------------------------------------------------------
// GUARD — validasi setiap fase punya tujuan_pembelajaran
// ----------------------------------------------------------
for (const [key, fase] of Object.entries(REGISTRY)) {
  if (!fase || !Array.isArray(fase.tujuan_pembelajaran)) {
    throw new Error(
      `[FLAF] data/index.js: Fase '${key}' tidak punya tujuan_pembelajaran yang valid.`
    );
  }
}

// ----------------------------------------------------------
// PUBLIC API
// ----------------------------------------------------------

/**
 * getAllTP()
 * Mengembalikan array semua TP dari semua fase yang terdaftar,
 * diurutkan berdasarkan kelas lalu nomor.
 * Gunakan ini untuk filter di dashboard (_tpList).
 *
 * @returns {Array}
 */
export function getAllTP() {
  return Object.values(REGISTRY)
    .flatMap(f => f.tujuan_pembelajaran)
    .sort((a, b) => a.kelas - b.kelas || a.nomor - b.nomor);
}

/**
 * getFase(key)
 * Mengembalikan objek fase lengkap berdasarkan key ('A', 'B', dst.)
 * Gunakan ini di kurikulum.js untuk mendapat CP, ATP, dan meta fase tertentu.
 *
 * @param {string} key — 'A' | 'B' | dst.
 * @returns {Object|null}
 */
export function getFase(key) {
  if (!key) {
    console.warn('[FLAF] getFase: key diperlukan. Gunakan getFaseList() untuk melihat fase yang tersedia.');
    return null;
  }
  return REGISTRY[key] || null;
}

/**
 * getTP(id)
 * Mengembalikan satu objek TP berdasarkan id-nya, dicari di semua fase.
 *
 * @param {string} id — 'tp-01' s/d 'tp-18', 'tp-b01' s/d 'tp-b22', 'tp-c01' s/d 'tp-c22'
 * @returns {Object|null}
 */
export function getTP(id) {
  if (typeof id !== 'string' || !id.trim()) {
    console.warn('[FLAF] getTP: id harus berupa string non-kosong');
    return null;
  }
  for (const fase of Object.values(REGISTRY)) {
    const tp = fase.tujuan_pembelajaran.find(t => t.id === id);
    if (tp) return tp;
  }
  console.warn(`[FLAF] getTP: TP '${id}' tidak ditemukan di semua fase yang terdaftar`);
  return null;
}

/**
 * getMeta(key)
 * Mengembalikan meta data fase tertentu.
 *
 * @param {string} key — 'A' | 'B' | dst.
 * @returns {Object|null}
 */
export function getMeta(key) {
  return getFase(key)?.meta || null;
}

/**
 * getFaseList()
 * Mengembalikan array key fase yang terdaftar.
 * Gunakan ini di kurikulum.js untuk render tab per fase.
 *
 * @returns {string[]} — ['A', 'B']
 */
export function getFaseList() {
  return Object.keys(REGISTRY);
}

/**
 * getFaseAktif()
 * @deprecated — tidak relevan di arsitektur multi-fase.
 * Tetap ada untuk backward compat. Mengembalikan key fase pertama.
 */
export function getFaseAktif() {
  return Object.keys(REGISTRY)[0];
}

// ----------------------------------------------------------
// DEFAULT EXPORT
// ----------------------------------------------------------
export default {
  getFase,
  getAllTP,
  getTP,
  getMeta,
  getFaseList,
  getFaseAktif,
};
