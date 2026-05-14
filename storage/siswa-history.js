/**
 * storage/siswa-history.js — FLAF Speaking History per Rombel
 *
 * Menyimpan history speaking count siswa lintas sesi.
 * Dipakai untuk rotasi observasi history-aware di Fase 7.
 *
 * Schema (store: siswa_per_kelas):
 *   key   : rombelId (string)
 *   value : { [siswaId]: { speakCount: number, lastSesi: number (timestamp) } }
 *
 * API:
 *   getSiswaHistory(rombelId)                    → Promise<object>
 *   updateSpeakCount(rombelId, siswaIdList)      → Promise<void>
 *   getSortedBySpeakCount(rombelId, siswaList)   → Promise<Array<siswa>>
 */

import { db } from './db.js';

const STORE = 'siswa_per_kelas';

/**
 * Ambil history speaking count untuk satu rombel.
 * Return {} jika belum ada data.
 */
export async function getSiswaHistory(rombelId) {
  if (!rombelId) return {};
  try {
    const data = await db.get(STORE, rombelId);
    return data || {};
  } catch (e) {
    console.warn('[SISWA-HISTORY] getSiswaHistory gagal:', e.message);
    return {};
  }
}

/**
 * Increment speakCount untuk setiap siswa di list.
 * Dipanggil saat Closure selesai — semua siswa yang hadir di sesi dapat +delta.
 *
 * @param {string} rombelId
 * @param {string[]} siswaIdList  — array siswaId yang hadir
 * @param {number} [delta=1]      — jumlah increment (default 1 per sesi)
 */
export async function updateSpeakCount(rombelId, siswaIdList, delta = 1) {
  if (!rombelId || !siswaIdList?.length) return;
  try {
    const current = await getSiswaHistory(rombelId);
    const now     = Date.now();

    for (const id of siswaIdList) {
      if (!current[id]) {
        current[id] = { speakCount: 0, lastSesi: now };
      }
      current[id].speakCount += delta;
      current[id].lastSesi    = now;
    }

    await db.set(STORE, rombelId, current);
  } catch (e) {
    console.warn('[SISWA-HISTORY] updateSpeakCount gagal:', e.message);
  }
}

/**
 * Return siswaList diurutkan dari speakCount terendah ke tertinggi.
 * Siswa yang belum pernah dapat giliran (speakCount 0) selalu di depan.
 * Dipakai Fase 7 untuk saran observasi.
 *
 * @param {string} rombelId
 * @param {Array<{id, nama}>} siswaList
 */
export async function getSortedBySpeakCount(rombelId, siswaList) {
  if (!siswaList?.length) return [];
  try {
    const history = await getSiswaHistory(rombelId);
    return [...siswaList].sort((a, b) => {
      const countA = history[a.id]?.speakCount ?? 0;
      const countB = history[b.id]?.speakCount ?? 0;
      return countA - countB;
    });
  } catch (e) {
    console.warn('[SISWA-HISTORY] getSortedBySpeakCount gagal:', e.message);
    return siswaList;
  }
}
