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
/**
 * Simpan hasil observasi tag per siswa per fase.
 * Dipanggil dari ObservationCapture di _renderSelesai.
 *
 * @param {string} rombelId
 * @param {Array<{siswaId, siswaName, tags[]}>} entries
 * @param {number} tpNomor
 * @param {string} faseNama
 */
export async function saveObsTags(rombelId, entries, tpNomor, faseNama) {
  if (!rombelId || !entries?.length) return;
  const OBS_STORE = 'obs_log';
  try {
    const now = Date.now();
    for (const entry of entries) {
      for (const tag of (entry.tags || [])) {
        const id = `${rombelId}_${entry.siswaId}_${tag}_${now}`;
        await db.set(OBS_STORE, id, {
          id,
          rombelId,
          siswaId   : entry.siswaId,
          siswaName : entry.siswaName,
          tag,
          tpNomor,
          faseNama,
          createdAt : now,
        });
      }
    }
  } catch (e) {
    console.warn('[SISWA-HISTORY] saveObsTags gagal:', e.message);
  }
}

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