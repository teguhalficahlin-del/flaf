/**
 * =============================================================
 * FLAF — DATA KURIKULUM FASE A
 * File: data/fase-a.js
 * =============================================================
 * Terakhir direvisi: Mei 2026 — Schema v5.0
 *
 * Semua TP dimuat dari file terpisah (docs/sesi-mN/tp-N-v5.js).
 * Tidak ada definisi inline TP di file ini.
 *
 * =============================================================
 */

import TP_01 from '../docs/output-v5/tp-01-v5.js';
import TP_02 from '../docs/output-v5/tp-02-v5.js';
import TP_03 from '../docs/output-v5/tp-03-v5.js';
import TP_04 from '../docs/output-v5/tp-04-v5.js';
import TP_05 from '../docs/output-v5/tp-05-v5.js';
import TP_06 from '../docs/output-v5/tp-06-v5.js';
import TP_07 from '../docs/output-v5/tp-07-v5.js';
import TP_08 from '../docs/output-v5/tp-08-v5.js';
import TP_09 from '../docs/output-v5/tp-09-v5.js';
import TP_10 from '../docs/output-v5/tp-10-v5.js';
import TP_11 from '../docs/output-v5/tp-11-v5.js';
import TP_12 from '../docs/output-v5/tp-12-v5.js';
import TP_13 from '../docs/output-v5/tp-13-v5.js';
import TP_14 from '../docs/output-v5/tp-14-v5.js';
import TP_15 from '../docs/sesi-m10/tp-15-v5.js';
import TP_16 from '../docs/output-v5/tp-16-v5.js';
import TP_17 from '../docs/output-v5/tp-17-v5.js';
import TP_18 from '../docs/output-v5/tp-18-v5.js';

const FASE_A = {

  meta: {
    fase          : 'A',
    kelas         : '1 & 2 SD',
    mata_pelajaran: 'Bahasa Inggris',
    data_version  : '2026-05-v5',
    total_tp      : 18,
  },

  cp: {
    menyimak_berbicara: `Pada akhir Fase A, peserta didik menggunakan bahasa Inggris
      sederhana untuk berinteraksi dalam situasi sosial dan kelas seperti berkenalan,
      memberikan informasi diri, mengucapkan salam dan perpisahan, serta merespons
      instruksi sederhana. Mereka memahami dan menggunakan kosakata dasar terkait
      lingkungan sekitar, anggota keluarga, warna, bentuk, angka, dan rutinitas
      sehari-hari. Peserta didik mampu menyanyikan lagu dan melakukan chant sederhana
      dalam bahasa Inggris.`,
    membaca_memirsa: `Pada akhir Fase A, peserta didik mampu memahami teks sangat
      sederhana berupa kata, frasa, dan kalimat pendek yang disertai gambar. Mereka
      dapat mengenali huruf, membaca nyaring kata-kata yang sudah dikenal, dan
      memahami makna kata-kata tersebut dalam konteks bergambar.`,
    menulis_mempresentasikan: `Pada akhir Fase A, peserta didik mampu menulis kata
      dan kalimat sangat sederhana dengan bantuan gambar atau model. Mereka dapat
      menyalin kata-kata yang sudah dikenal dan menulis label sederhana untuk
      benda-benda di sekitar mereka.`,
  },

  atp: {
    deskripsi: `ATP Fase A Bahasa Inggris disusun secara spiral dan tematik.
      TP 1–6 membangun fondasi interaksi dasar. TP 7–12 memperluas kosakata
      tematik. TP 13–18 mengintegrasikan kemampuan dalam konteks yang lebih
      kompleks dan bermakna.`,
    total_tp: 18,
  },

  tujuan_pembelajaran: [

    TP_01,
    TP_02,
    TP_03,
    TP_04,
    TP_05,
    TP_06,
    TP_07,
    TP_08,
    TP_09,
    TP_10,
    TP_11,
    TP_12,
    TP_13,
    TP_14,
    TP_15,
    TP_16,
    TP_17,
    TP_18,

  ],

};

(function validateFaseA() {
  const { tujuan_pembelajaran: tps, meta } = FASE_A;
  if (!Array.isArray(tps)) throw new Error('[FLAF] fase-a.js: tujuan_pembelajaran harus berupa array');
  if (tps.length !== meta.total_tp) throw new Error(`[FLAF] fase-a.js: jumlah TP harus ${meta.total_tp}, ditemukan ${tps.length}`);
  tps.forEach((tp, i) => {
    const num = i + 1;
    if (!tp.id)        throw new Error(`[FLAF] fase-a.js: TP ${num} tidak punya id`);
    if (!tp.nama)      throw new Error(`[FLAF] fase-a.js: TP ${num} tidak punya nama`);
    if (!Array.isArray(tp.indikator) || tp.indikator.length !== 3)
      throw new Error(`[FLAF] fase-a.js: TP ${num} harus punya tepat 3 indikator`);
    if (!Array.isArray(tp.vocab) || tp.vocab.length === 0)
      throw new Error(`[FLAF] fase-a.js: TP ${num} vocab tidak boleh kosong`);
    if (!Array.isArray(tp.skenario) || tp.skenario.length === 0)
      throw new Error(`[FLAF] fase-a.js: TP ${num} skenario tidak boleh kosong`);
  });
})();

export default FASE_A;
