/**
 * storage/siswa-history.js — FLAF Penilaian Siswa
 *
 * API:
 *   savePenilaian(kelasId, tpNomor, sesiId, mode, entries) → Promise<void>
 */

import { db, DB_VERSION } from './db.js';

const DB_NAME    = 'flaf_db';

/**
 * Simpan hasil penilaian proses per siswa per sesi (Fase 12).
 * Dipanggil dari overlay penilaian di sesi-runtime.js saat guru tap Simpan.
 *
 * Seluruh batch ditulis dalam SATU transaksi IDB — atomic.
 * Error di-propagate ke caller tanpa ditangkap di sini.
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
 *   alasan   : string|null,
 * }>} entries  — semua siswa, yang kosong tetap disimpan sebagai null
 */
export async function savePenilaian(kelasId, tpNomor, sesiId, mode, entries) {
  if (!kelasId || !tpNomor || !sesiId || !entries?.length) return;
  const STORE = 'penilaian_log';
  const now   = Date.now();

  await db.init();

  return new Promise(function(resolve, reject) {
    var openReq = indexedDB.open(DB_NAME, DB_VERSION);

    openReq.onerror = function() { reject(openReq.error); };

    openReq.onsuccess = function(event) {
      var idb = event.target.result;
      try {
        var tx    = idb.transaction(STORE, 'readwrite');
        var store = tx.objectStore(STORE);

        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i];
          var key   = kelasId + '_' + tpNomor + '_' + sesiId + '_' + entry.siswaId;
          store.put({
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
            alasan   : entry.alasan   ?? null,
            createdAt: now,
          }, key);
        }

        tx.oncomplete = function() { resolve(); };
        tx.onabort    = function() { reject(tx.error || new Error('Transaksi penilaian dibatalkan')); };
        tx.onerror    = function() { reject(tx.error); };
      } catch (err) {
        reject(err);
      }
    };
  });
}