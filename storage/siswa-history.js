/**
 * storage/siswa-history.js — FLAF Penilaian Siswa
 *
 * API:
 *   savePenilaian(kelasId, tpNomor, sesiId, mode, entries) → Promise<void>
 */

import { db } from './db.js';

/**
 * Simpan hasil penilaian proses per siswa per sesi (Fase 12).
 * Dipanggil dari overlay penilaian di sesi-runtime.js saat guru tap Simpan.
 *
 * Mode Cepat  : capaian = 85|75|65, l/s/r = null
 * Mode Detail : capaian = null, l/s/r = 0–100
 * Perilaku    : 'aktif' | 'dorongan' | 'belum_siap'
 *
 * @param {string} kelasId
 * @param {string} tpNomor
 * @param {string} sesiId       — id unik sesi mengajar (dari _state di runtime)
 * @param {string} mode         — 'cepat' | 'detail'
 * @param {Array<{
 *   siswaId  : string,
 *   capaian  : 85|75|65|null,
 *   l        : number|null,
 *   s        : number|null,
 *   r        : number|null,
 *   perilaku : string|null,
 * }>} entries  — semua siswa, yang kosong tetap disimpan sebagai null
 */
export async function savePenilaian(kelasId, tpNomor, sesiId, mode, entries) {
  if (!kelasId || !tpNomor || !sesiId || !entries?.length) return;
  const STORE = 'penilaian_log';
  try {
    const now = Date.now();
    for (const entry of entries) {
      const key = `${kelasId}_${tpNomor}_${sesiId}_${entry.siswaId}`;
      await db.set(STORE, key, {
        kelasId,
        siswaId  : entry.siswaId,
        tpNomor,
        sesiId,
        mode,
        capaian  : entry.capaian  ?? null,
        l        : entry.l        ?? null,
        s        : entry.s        ?? null,
        r        : entry.r        ?? null,
        perilaku : entry.perilaku ?? null,
        createdAt: now,
      });
    }
  } catch (e) {
    console.warn('[SISWA-HISTORY] savePenilaian gagal:', e.message);
  }
}