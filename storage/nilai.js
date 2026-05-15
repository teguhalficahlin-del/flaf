/**
 * storage/nilai.js — FLAF Nilai Siswa
 *
 * Menyimpan data kelas, siswa, dan nilai secara lokal (IndexedDB).
 * Sync ke Supabase dilepas — data sepenuhnya lokal, backup via export.js.
 *
 * API publik:
 *   nilai.getKelasList()                                        → Promise<Array>
 *   nilai.tambahKelas(nama, tingkat)                            → Promise<string> id
 *   nilai.hapusKelas(kelasId)                                   → Promise<void>
 *   nilai.getSiswaList(kelasId)                                 → Promise<Array>
 *   nilai.tambahSiswa(kelasId, nomor, nama)                     → Promise<string> id
 *   nilai.tambahSiswaBatch(kelasId, namaBatch)                  → Promise<number>
 *   nilai.hapusSiswa(kelasId, siswaId)                          → Promise<void>
 *   nilai.getNilai(kelasId, siswaId, tpNomor)                   → Promise<number|null>
 *   nilai.setNilai(kelasId, siswaId, tpNomor, nilaiAngka)       → Promise<void>
 *   nilai.getNilaiLSR(kelasId, siswaId, tpNomor)                → Promise<{l,s,r,nilai,catatan}>
 *   nilai.setNilaiLSR(kelasId, siswaId, tpNomor, l, s, r)       → Promise<void>
 *   nilai.getNilaiFormatif(kelasId, siswaId, tpNomor)           → Promise<{l,s,r,nilai,catatan}>
 *   nilai.setNilaiFormatif(kelasId, siswaId, tpNomor, l, s, r)  → Promise<void>
 *   nilai.setCatatanFormatif(kelasId, siswaId, tpNomor, teks)   → Promise<void>
 *   nilai.setCatatan(kelasId, siswaId, tpNomor, teks)           → Promise<void>
 *   nilai.getCatatan(kelasId, siswaId, tpNomor)                 → Promise<string>
 *   nilai.getNilaiSiswa(kelasId, siswaId)                       → Promise<object>
 *   nilai.getNilaiKelas(kelasId)                                → Promise<object>
 *   nilai.getRekapSemua()                                       → Promise<Array>
 *   nilai.getRekapTP(kelasId, tpNomor)                          → Promise<Array> ← Sumatif
 *   nilai.getRekapFormatifTP(kelasId, tpNomor)                  → Promise<Array> ← Formatif
 *   nilai.getRekapAkhir(kelasId)                                → Promise<Array>
 *   nilai.setNilaiSAS(kelasId, siswaId, nilaiAngka)             → Promise<void>
 *   nilai.getNilaiSAS(kelasId, siswaId)                         → Promise<number|null>
 *   nilai.getRekapSAS(kelasId)                                  → Promise<Array>
 *   nilai.getRekapRapor(kelasId)                                → Promise<Array>
 *
 * Schema record per siswa per TP (IndexedDB):
 *   record[`tp_N`] = {
 *     -- SUMATIF LINGKUP MATERI --
 *     nilai     : number|null,   <- rerata nilai_l+s+r otomatis
 *     nilai_l   : number|null,   <- Listening sumatif
 *     nilai_s   : number|null,   <- Speaking sumatif
 *     nilai_r   : number|null,   <- Reading sumatif
 *     catatan   : string|null,   <- catatan sumatif, max 500 char
 *     -- ASESMEN FORMATIF --
 *     formatif_l: number|null,   <- Listening formatif (observasi proses)
 *     formatif_s: number|null,   <- Speaking formatif
 *     formatif_r: number|null,   <- Reading formatif
 *     formatif  : number|null,   <- rerata formatif otomatis
 *     formatif_catatan: string|null,
 *     updated_at: string,
 *   }
 *
 * Kompatibilitas mundur: semua field opsional, data lama tetap valid.
 */

import { db } from './db.js';

const STORE = 'nilai_data';

// --- HELPERS -----------------------------------------------------------------

function _randomId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
}

function _hitungRerata(l, s, r) {
  const valid = [l, s, r].filter(v => v !== null && v !== undefined && !isNaN(v));
  if (valid.length === 0) return null;
  return Math.round(valid.reduce((a, b) => a + b, 0) / valid.length);
}

function _clampNilai(v) {
  if (v === null || v === undefined || v === '') return null;
  const n = parseInt(v);
  if (isNaN(n)) return null;
  return Math.max(0, Math.min(100, n));
}

// --- KELAS -------------------------------------------------------------------

async function getKelasList() {
  const raw = await db.get(STORE, 'kelas_list');
  return raw || [];
}

async function tambahKelas(nama, tingkat) {
  const list = await getKelasList();
  const id   = 'kls_' + _randomId();
  list.push({
    id,
    nama,
    tingkat   : tingkat === 2 ? 2 : 1,
    created_at: new Date().toISOString(),
  });
  await db.set(STORE, 'kelas_list', list);
  return id;
}

async function hapusKelas(kelasId) {
  const list    = await getKelasList();
  const newList = list.filter(k => k.id !== kelasId);
  await db.set(STORE, 'kelas_list', newList);
  const siswaList = await getSiswaList(kelasId);
  for (const s of siswaList) {
    await _hapusNilaiSiswa(kelasId, s.id);
  }
  await db.remove(STORE, `siswa_${kelasId}`);
}

// --- SISWA -------------------------------------------------------------------

async function getSiswaList(kelasId) {
  const raw = await db.get(STORE, `siswa_${kelasId}`);
  return (raw || []).sort((a, b) => a.nomor - b.nomor);
}

async function tambahSiswa(kelasId, nomor, nama) {
  const list = await getSiswaList(kelasId);
  const id   = 'siswa_' + _randomId();
  list.push({
    id,
    nomor     : parseInt(nomor),
    nama,
    created_at: new Date().toISOString(),
  });
  list.sort((a, b) => a.nomor - b.nomor);
  await db.set(STORE, `siswa_${kelasId}`, list);
  return id;
}

async function tambahSiswaBatch(kelasId, namaBatch) {
  const namaList = namaBatch
    .split('\n')
    .map(n => n.trim())
    .filter(n => n.length > 0);
  if (namaList.length === 0) return 0;
  const existing   = await getSiswaList(kelasId);
  const startNomor = existing.length + 1;
  const newSiswa   = namaList.map((nama, i) => ({
    id        : 'siswa_' + _randomId(),
    nomor     : startNomor + i,
    nama,
    created_at: new Date().toISOString(),
  }));
  const merged = [...existing, ...newSiswa];
  merged.sort((a, b) => a.nomor - b.nomor);
  await db.set(STORE, `siswa_${kelasId}`, merged);
  return newSiswa.length;
}

async function hapusSiswa(kelasId, siswaId) {
  const list    = await getSiswaList(kelasId);
  const newList = list.filter(s => s.id !== siswaId);
  await db.set(STORE, `siswa_${kelasId}`, newList);
  await _hapusNilaiSiswa(kelasId, siswaId);
}

// --- NILAI CORE --------------------------------------------------------------

function _nilaiKey(kelasId, siswaId) {
  return `nilai_${kelasId}_${siswaId}`;
}

async function _getNilaiRecord(kelasId, siswaId) {
  const raw = await db.get(STORE, _nilaiKey(kelasId, siswaId));
  return raw || {};
}

async function _hapusNilaiSiswa(kelasId, siswaId) {
  await db.remove(STORE, _nilaiKey(kelasId, siswaId));
}

// --- NILAI GET ---------------------------------------------------------------

async function getNilai(kelasId, siswaId, tpNomor) {
  const record = await _getNilaiRecord(kelasId, siswaId);
  const entry  = record[`tp_${tpNomor}`];
  return entry !== undefined ? (entry.nilai ?? null) : null;
}

async function getNilaiLSR(kelasId, siswaId, tpNomor) {
  const record = await _getNilaiRecord(kelasId, siswaId);
  const entry  = record[`tp_${tpNomor}`] || {};
  return {
    l      : entry.nilai_l  ?? null,
    s      : entry.nilai_s  ?? null,
    r      : entry.nilai_r  ?? null,
    nilai  : entry.nilai    ?? null,
    catatan: entry.catatan  || '',
  };
}

async function getCatatan(kelasId, siswaId, tpNomor) {
  const record = await _getNilaiRecord(kelasId, siswaId);
  return record[`tp_${tpNomor}`]?.catatan || '';
}

async function getNilaiSiswa(kelasId, siswaId) {
  return await _getNilaiRecord(kelasId, siswaId);
}

async function getNilaiKelas(kelasId) {
  const siswaList = await getSiswaList(kelasId);
  const result    = {};
  for (const s of siswaList) {
    result[s.id] = await _getNilaiRecord(kelasId, s.id);
  }
  return result;
}

// --- NILAI SET ---------------------------------------------------------------

async function setNilai(kelasId, siswaId, tpNomor, nilaiAngka) {
  const record = await _getNilaiRecord(kelasId, siswaId);
  const key    = `tp_${tpNomor}`;
  record[key]  = {
    ...(record[key] || {}),
    nilai     : _clampNilai(nilaiAngka),
    updated_at: new Date().toISOString(),
  };
  await db.set(STORE, _nilaiKey(kelasId, siswaId), record);
}

async function setNilaiLSR(kelasId, siswaId, tpNomor, l, s, r) {
  const cl     = _clampNilai(l);
  const cs     = _clampNilai(s);
  const cr     = _clampNilai(r);
  const rerata = _hitungRerata(cl, cs, cr);
  const record = await _getNilaiRecord(kelasId, siswaId);
  const key    = `tp_${tpNomor}`;
  record[key]  = {
    ...(record[key] || {}),
    nilai_l   : cl,
    nilai_s   : cs,
    nilai_r   : cr,
    nilai     : rerata,
    updated_at: new Date().toISOString(),
  };
  await db.set(STORE, _nilaiKey(kelasId, siswaId), record);
}

async function setCatatan(kelasId, siswaId, tpNomor, teks) {
  const record = await _getNilaiRecord(kelasId, siswaId);
  const key    = `tp_${tpNomor}`;
  const bersih = String(teks || '').trim().slice(0, 500);
  record[key]  = {
    ...(record[key] || {}),
    catatan   : bersih || null,
    updated_at: new Date().toISOString(),
  };
  await db.set(STORE, _nilaiKey(kelasId, siswaId), record);
}

// --- ASESMEN FORMATIF --------------------------------------------------------
// Terpisah dari Sumatif Lingkup Materi.
// Disimpan di field formatif_l/s/r/catatan dalam record TP yang sama.
// Tidak digunakan dalam perhitungan nilai rapor.

async function getNilaiFormatif(kelasId, siswaId, tpNomor) {
  const record = await _getNilaiRecord(kelasId, siswaId);
  const entry  = record[`tp_${tpNomor}`] || {};
  return {
    l      : entry.formatif_l       ?? null,
    s      : entry.formatif_s       ?? null,
    r      : entry.formatif_r       ?? null,
    nilai  : entry.formatif         ?? null,
    catatan: entry.formatif_catatan || '',
  };
}

async function setNilaiFormatif(kelasId, siswaId, tpNomor, l, s, r) {
  const cl     = _clampNilai(l);
  const cs     = _clampNilai(s);
  const cr     = _clampNilai(r);
  const rerata = _hitungRerata(cl, cs, cr);
  const record = await _getNilaiRecord(kelasId, siswaId);
  const key    = `tp_${tpNomor}`;
  record[key]  = {
    ...(record[key] || {}),
    formatif_l : cl,
    formatif_s : cs,
    formatif_r : cr,
    formatif   : rerata,
    updated_at : new Date().toISOString(),
  };
  await db.set(STORE, _nilaiKey(kelasId, siswaId), record);
}

async function setCatatanFormatif(kelasId, siswaId, tpNomor, teks) {
  const record = await _getNilaiRecord(kelasId, siswaId);
  const key    = `tp_${tpNomor}`;
  const bersih = String(teks || '').trim().slice(0, 500);
  record[key]  = {
    ...(record[key] || {}),
    formatif_catatan: bersih || null,
    updated_at      : new Date().toISOString(),
  };
  await db.set(STORE, _nilaiKey(kelasId, siswaId), record);
}

/**
 * Rekap nilai Formatif per siswa untuk satu TP — untuk PDF Rekap Formatif.
 * Fase 12: membaca dari store penilaian_log (bukan formatif_l/s/r).
 * Satu TP bisa punya banyak sesi — nilai per siswa = rerata semua sesi.
 *
 * Return format sama seperti sebelumnya agar nilaiDownloadFormatif1 tidak perlu diubah:
 *   { nomor, nama, l, s, r, nilai, catatan }
 *   l/s/r : rerata dimensi dari sesi mode detail (null jika tidak ada)
 *   nilai : rerata semua sesi (cepat + detail digabung)
 *   catatan: selalu '' (Fase 12 tidak ada catatan)
 */
async function getRekapFormatifTP(kelasId, tpNomor) {
  const siswaList = await getSiswaList(kelasId);
  const STORE     = 'penilaian_log';

  // Ambil semua record penilaian_log untuk kelasId + tpNomor ini
  let allRecords = [];
  try {
    const semua = await db.getAll(STORE);
    allRecords  = semua
      .map(e => e.value)
      .filter(v => v && v.kelasId === kelasId && String(v.tpNomor) === String(tpNomor));
  } catch (e) {
    console.warn('[NILAI] getRekapFormatifTP — gagal baca penilaian_log:', e.message);
  }

  // Grup per siswaId
  const perSiswa = {};
  for (const rec of allRecords) {
    if (!perSiswa[rec.siswaId]) perSiswa[rec.siswaId] = [];
    perSiswa[rec.siswaId].push(rec);
  }

  // Hitung rerata per siswa
  const hasil = [];
  for (const siswa of siswaList) {
    const sesiList = perSiswa[siswa.id] || [];

    const allNilai = [];
    const allL     = [];
    const allS     = [];
    const allR     = [];

    for (const sesi of sesiList) {
      if (sesi.mode === 'cepat' && sesi.capaian !== null) {
        allNilai.push(sesi.capaian);
      } else if (sesi.mode === 'detail') {
        const valid = [sesi.l, sesi.s, sesi.r].filter(v => v !== null && !isNaN(v));
        if (valid.length > 0) {
          const rerata = Math.round(valid.reduce((a, b) => a + b, 0) / valid.length);
          allNilai.push(rerata);
        }
        if (sesi.l !== null) allL.push(sesi.l);
        if (sesi.s !== null) allS.push(sesi.s);
        if (sesi.r !== null) allR.push(sesi.r);
      }
    }

    const _avg = arr => arr.length > 0
      ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length)
      : null;

    hasil.push({
      nomor  : siswa.nomor,
      nama   : siswa.nama,
      l      : _avg(allL),
      s      : _avg(allS),
      r      : _avg(allR),
      nilai  : _avg(allNilai),
      catatan: '',
    });
  }

  return hasil;
}

// --- REKAP -------------------------------------------------------------------

async function getRekapSemua() {
  const kelasList = await getKelasList();
  const result    = [];

  for (const kelas of kelasList) {
    const siswaList = await getSiswaList(kelas.id);
    const tingkat   = kelas.tingkat === 2 ? 2 : 1;
    const tpRange   = tingkat === 1
      ? [1,2,3,4,5,6,7,8,9]
      : [10,11,12,13,14,15,16,17,18];

    let totalNilai     = 0;
    let jumlahNilai    = 0;
    let pesertaDinilai = 0;
    const tpAdaNilai   = new Set();

    for (const siswa of siswaList) {
      const record      = await _getNilaiRecord(kelas.id, siswa.id);
      let siswaAdaNilai = false;
      for (const tpNomor of tpRange) {
        const entry = record[`tp_${tpNomor}`];
        if (entry && entry.nilai !== null && entry.nilai !== undefined) {
          totalNilai  += entry.nilai;
          jumlahNilai += 1;
          siswaAdaNilai = true;
          tpAdaNilai.add(tpNomor);
        }
      }
      if (siswaAdaNilai) pesertaDinilai++;
    }

    result.push({
      id        : kelas.id,
      nama      : kelas.nama,
      tingkat,
      rerata    : jumlahNilai > 0 ? Math.round(totalNilai / jumlahNilai) : null,
      peserta   : pesertaDinilai,
      totalSiswa: siswaList.length,
      tpTuntas  : tpAdaNilai.size,
      totalTP   : 9,
    });
  }

  return result;
}

/**
 * Rekap nilai L/S/R per siswa untuk satu TP — untuk PDF Dokumen 1.
 */
async function getRekapTP(kelasId, tpNomor) {
  const siswaList = await getSiswaList(kelasId);
  const hasil     = [];
  for (const siswa of siswaList) {
    const lsr = await getNilaiLSR(kelasId, siswa.id, tpNomor);
    hasil.push({
      nomor  : siswa.nomor,
      nama   : siswa.nama,
      l      : lsr.l,
      s      : lsr.s,
      r      : lsr.r,
      nilai  : lsr.nilai,
      catatan: lsr.catatan,
    });
  }
  return hasil;
}

/**
 * Rekap nilai akhir semua TP per siswa — untuk PDF Dokumen 2.
 */
async function getRekapAkhir(kelasId) {
  const kelas   = (await getKelasList()).find(k => k.id === kelasId);
  const tingkat = kelas?.tingkat === 2 ? 2 : 1;
  const tpRange = tingkat === 1
    ? [1,2,3,4,5,6,7,8,9]
    : [10,11,12,13,14,15,16,17,18];

  const siswaList = await getSiswaList(kelasId);
  const hasil     = [];

  for (const siswa of siswaList) {
    const record  = await _getNilaiRecord(kelasId, siswa.id);
    const tpNilai = {};
    let total     = 0;
    let jumlah    = 0;

    for (const tp of tpRange) {
      const entry  = record[`tp_${tp}`];
      const n      = entry?.nilai ?? null;
      tpNilai[tp]  = n;
      if (n !== null) { total += n; jumlah++; }
    }

    hasil.push({
      nomor : siswa.nomor,
      nama  : siswa.nama,
      tp    : tpNilai,
      rerata: jumlah > 0 ? Math.round(total / jumlah) : null,
    });
  }

  return hasil;
}

// --- EXPORTS -----------------------------------------------------------------

/**
 * sync() — no-op stub. Data nilai sepenuhnya lokal, tidak dikirim ke server.
 * Dipertahankan agar app.js/_syncAll tidak throw TypeError.
 * @returns {Promise<{synced: number, failed: number}>}
 */
async function sync(_deviceId) {
  console.log('[NILAI] sync — offline-only, tidak ada pengiriman data');
  return { synced: 0, failed: 0 };
}

export const nilai = {
  getKelasList,
  tambahKelas,
  hapusKelas,
  getSiswaList,
  tambahSiswa,
  tambahSiswaBatch,
  hapusSiswa,
  getNilai,
  setNilai,
  getNilaiLSR,
  setNilaiLSR,
  getNilaiFormatif,
  setNilaiFormatif,
  setCatatanFormatif,
  getCatatan,
  setCatatan,
  getNilaiSiswa,
  getNilaiKelas,
  getRekapSemua,
  getRekapTP,
  getRekapFormatifTP,
  getRekapAkhir,
  setNilaiSAS,
  getNilaiSAS,
  getRekapSAS,
  getRekapRapor,
  sync,
};

export {
  getKelasList,
  tambahKelas,
  hapusKelas,
  getSiswaList,
  tambahSiswa,
  tambahSiswaBatch,
  hapusSiswa,
  getNilai,
  setNilai,
  getNilaiLSR,
  setNilaiLSR,
  getNilaiFormatif,
  setNilaiFormatif,
  setCatatanFormatif,
  getCatatan,
  setCatatan,
  getNilaiSiswa,
  getNilaiKelas,
  getRekapSemua,
  getRekapTP,
  getRekapFormatifTP,
  getRekapAkhir,
  setNilaiSAS,
  getNilaiSAS,
  getRekapSAS,
  getRekapRapor,
  sync,
};

// --- SUMATIF AKHIR SEMESTER (SAS) --------------------------------------------

/**
 * Key SAS per kelas per siswa — satu nilai per siswa per semester.
 */
function _sasKey(kelasId, siswaId) {
  return `sas_${kelasId}_${siswaId}`;
}

/**
 * Simpan nilai Sumatif Akhir Semester (SAS).
 * @param {string} kelasId
 * @param {string} siswaId
 * @param {number|null} nilaiAngka
 */
async function setNilaiSAS(kelasId, siswaId, nilaiAngka) {
  const v = _clampNilai(nilaiAngka);
  await db.set(STORE, _sasKey(kelasId, siswaId), {
    nilai     : v,
    updated_at: new Date().toISOString(),
  });
}

/**
 * Ambil nilai SAS satu siswa.
 * @returns {Promise<number|null>}
 */
async function getNilaiSAS(kelasId, siswaId) {
  const raw = await db.get(STORE, _sasKey(kelasId, siswaId));
  return raw?.nilai ?? null;
}

/**
 * Rekap SAS seluruh siswa dalam satu kelas.
 * @returns {Promise<Array<{ nomor, nama, sas }>>}
 */
async function getRekapSAS(kelasId) {
  const siswaList = await getSiswaList(kelasId);
  const hasil     = [];
  for (const s of siswaList) {
    const sas = await getNilaiSAS(kelasId, s.id);
    hasil.push({ nomor: s.nomor, nama: s.nama, sas });
  }
  return hasil;
}

/**
 * Rekap Nilai Rapor per siswa.
 * Rumus resmi Kurikulum Merdeka: (S + AS) ÷ 2
 *   S  = rerata nilai Sumatif Lingkup Materi semua TP
 *   AS = Sumatif Akhir Semester
 *
 * Nilai akhir ditampilkan sebagai referensi — guru tetap punya kendali penuh.
 *
 * @returns {Promise<Array<{ nomor, nama, tp, s, as: sas, rapor }>>}
 */
async function getRekapRapor(kelasId) {
  const kelas   = (await getKelasList()).find(k => k.id === kelasId);
  const tingkat = kelas?.tingkat === 2 ? 2 : 1;
  const tpRange = tingkat === 1
    ? [1,2,3,4,5,6,7,8,9]
    : [10,11,12,13,14,15,16,17,18];

  const siswaList = await getSiswaList(kelasId);
  const hasil     = [];

  for (const siswa of siswaList) {
    const record  = await _getNilaiRecord(kelasId, siswa.id);
    const sas     = await getNilaiSAS(kelasId, siswa.id);
    const tpNilai = {};
    let totalS    = 0;
    let jumlahS   = 0;

    for (const tp of tpRange) {
      const entry  = record[`tp_${tp}`];
      const n      = entry?.nilai ?? null;
      tpNilai[tp]  = n;
      if (n !== null) { totalS += n; jumlahS++; }
    }

    const s     = jumlahS > 0 ? Math.round(totalS / jumlahS) : null;
    const rapor = (s !== null && sas !== null)
      ? Math.round((s + sas) / 2)
      : null;

    hasil.push({
      nomor: siswa.nomor,
      nama : siswa.nama,
      tp   : tpNilai,
      s,
      sas,
      rapor,
    });
  }

  return hasil;
}
