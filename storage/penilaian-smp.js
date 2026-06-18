/**
 * storage/penilaian-smp.js — FLAF Observasi Formatif Fase D (SMP)
 *
 * Dua fungsi simpan:
 *   saveObservasiSMP()   — format lama (tags + catatan), masih dipanggil
 *   savePenilaianSMP()   — format baru hierarki L1/L2/L3 + rubrik BSB/BSH/MB/BB
 *
 * Kedua fungsi menulis ke store 'penilaian_log_smp' (storage/db.js).
 * SENGAJA tidak menyentuh store 'penilaian_log' milik SD.
 *
 * API:
 *   saveObservasiSMP(kelasId, patternId, sesiId, stepId, entries) → Promise<void>
 *   savePenilaianSMP(kelasId, tpNomor, sesiId, entries)           → Promise<void>
 */

import { db, DB_VERSION } from './db.js';

const DB_NAME = 'flaf_db';
const STORE   = 'penilaian_log_smp';

/**
 * Format lama — tags + catatan kualitatif.
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

/**
 * Format baru — hierarki L1/L2/L3 + rubrik BSB/BSH/MB/BB.
 * Hanya entry yang sudah minimal L2 (perilaku !== null) yang ditulis.
 * Satu transaksi atomic untuk seluruh batch.
 *
 * @param {string} kelasId
 * @param {string} tpNomor     — e.g. "7-01"
 * @param {string} sesiId
 * @param {Array<{
 *   siswaId   : string,
 *   capaian   : 'sudah_bisa'|'perlu_bantuan'|null,
 *   perilaku  : 'tanpa_buku'|'dengan_buku'|'mencoba_belum_tepat'|'diam'|null,
 *   nilai     : 90|75|60|45|null,
 *   predikat  : 'BSB'|'BSH'|'MB'|'BB'|null,
 *   alasan    : string[],
 *   catatan   : string,
 * }>} entries
 */
export async function savePenilaianSMP(kelasId, tpNomor, sesiId, entries) {
  if (!kelasId || !tpNomor || !sesiId || !entries?.length) return;
  const now = Date.now();

  const valid = entries.filter(e => e.perilaku !== null);
  if (!valid.length) return;

  await db.init();

  return new Promise(function(resolve, reject) {
    var openReq = indexedDB.open(DB_NAME, DB_VERSION);

    openReq.onerror = function() { reject(openReq.error); };

    openReq.onsuccess = function(event) {
      var idb = event.target.result;
      try {
        var tx    = idb.transaction(STORE, 'readwrite');
        var store = tx.objectStore(STORE);

        for (var i = 0; i < valid.length; i++) {
          var entry = valid[i];
          var key   = kelasId + '_' + tpNomor + '_' + sesiId + '_' + entry.siswaId;
          store.put({
            kelasId,
            siswaId   : entry.siswaId,
            tpNomor,
            sesiId,
            mode      : 'observasi_smp',
            capaian   : entry.capaian   ?? null,
            perilaku  : entry.perilaku  ?? null,
            nilai     : entry.nilai     ?? null,
            predikat  : entry.predikat  ?? null,
            alasan    : entry.alasan    || [],
            catatan   : entry.catatan   || '',
            createdAt : now,
          }, key);
        }

        tx.oncomplete = function() { resolve(); };
        tx.onabort    = function() { reject(tx.error || new Error('Transaksi penilaian SMP dibatalkan')); };
        tx.onerror    = function() { reject(tx.error); };
      } catch (err) {
        reject(err);
      }
    };
  });
}

export default { saveObservasiSMP, savePenilaianSMP };
