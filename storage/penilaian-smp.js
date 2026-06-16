/**
 * storage/penilaian-smp.js — FLAF Observasi Formatif Fase D (SMP)
 *
 * Berbeda total dari storage/siswa-history.js (penilaian SD):
 * KUALITATIF MURNI — tidak ada field skor numerik atau huruf (L/S/R) sama
 * sekali, menegakkan constraint Fase D `check_without_score: true` (rule
 * validator A7) juga di sisi penyimpanan runtime, bukan cuma validator data.
 *
 * Disimpan di store terpisah 'penilaian_log_smp' (storage/db.js) —
 * SENGAJA tidak menyentuh/migrasikan store 'penilaian_log' milik SD untuk
 * menghindari risiko merusak CSV export & rekap formatif SD yang sudah jalan.
 *
 * API:
 *   saveObservasiSMP(kelasId, patternId, sesiId, stepId, entries) → Promise<void>
 */

import { db } from './db.js';

const STORE = 'penilaian_log_smp';

/**
 * @param {string} kelasId
 * @param {string} patternId   — metadata.pattern_id TP Fase D (mis. "PAT-7-01")
 * @param {string} sesiId
 * @param {string} stepId      — id step CHECK yang memicu observasi
 * @param {Array<{
 *   siswaId : string,
 *   tags    : string[],        — tag observasi kualitatif, mis. ['Aktif']
 *   catatan : string|null,     — catatan tindak lanjut guru, teks bebas
 * }>} entries
 */
export async function saveObservasiSMP(kelasId, patternId, sesiId, stepId, entries) {
  if (!kelasId || !patternId || !sesiId || !entries?.length) return;
  const now = Date.now();

  await Promise.all(entries.map(entry => {
    const key = `${kelasId}_${patternId}_${sesiId}_${stepId}_${entry.siswaId}`;
    return db.set(STORE, key, {
      kelasId,
      siswaId  : entry.siswaId,
      patternId,
      sesiId,
      stepId,
      tags     : entry.tags || [],
      catatan  : entry.catatan ?? null,
      createdAt: now,
    });
  }));
}

export default { saveObservasiSMP };
