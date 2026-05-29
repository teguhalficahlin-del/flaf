/**
 * =============================================================
 * FLAF — DATA KURIKULUM FASE B — KLUSTER C
 * File: data/fase-b-kluster-c.js
 * =============================================================
 * Fase B — Kelas 3 SD
 * Kluster C — Alam, Tubuh, dan Kesehatan (TP 09–11)
 * Schema: v5.0
 *
 * Semua TP dimuat dari file terpisah (docs/output-v5-faseb/).
 * Tidak ada definisi inline TP di file ini.
 *
 * =============================================================
 */

import TP_B09 from '../docs/output-v5-faseb/tp-09-v5.js';
import TP_B10 from '../docs/output-v5-faseb/tp-10-v5.js';
import TP_B11 from '../docs/output-v5-faseb/tp-11-v5.js';

const FASE_B_KLUSTER_C = {

  meta: {
    fase          : 'B',
    kluster       : 'C',
    kelas         : 3,
    mata_pelajaran: 'Bahasa Inggris',
    data_version  : 'v5.0',
    total_tp      : 3,
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
    deskripsi: 'Kluster C — Alam, Tubuh, dan Kesehatan',
    total_tp  : 3,
  },

  tujuan_pembelajaran: [

    TP_B09,
    TP_B10,
    TP_B11,

  ],

};

(function validateFaseB_KlusterC() {
  const { tujuan_pembelajaran: tps, meta } = FASE_B_KLUSTER_C;
  if (!Array.isArray(tps)) throw new Error('[FLAF] fase-b-kluster-c.js: tujuan_pembelajaran harus berupa array');
  if (tps.length !== meta.total_tp) throw new Error(`[FLAF] fase-b-kluster-c.js: jumlah TP harus ${meta.total_tp}, ditemukan ${tps.length}`);
  tps.forEach((tp, i) => {
    const num = i + 1;
    if (!tp.id)        throw new Error(`[FLAF] fase-b-kluster-c.js: TP ${num} tidak punya id`);
    if (!tp.nama)      throw new Error(`[FLAF] fase-b-kluster-c.js: TP ${num} tidak punya nama`);
    if (!Array.isArray(tp.indikator) || tp.indikator.length !== 3)
      throw new Error(`[FLAF] fase-b-kluster-c.js: TP ${num} harus punya tepat 3 indikator`);
    if (!Array.isArray(tp.vocab) || tp.vocab.length === 0)
      throw new Error(`[FLAF] fase-b-kluster-c.js: TP ${num} vocab tidak boleh kosong`);
    if (!Array.isArray(tp.skenario) || tp.skenario.length === 0)
      throw new Error(`[FLAF] fase-b-kluster-c.js: TP ${num} skenario tidak boleh kosong`);
  });
})();

export default FASE_B_KLUSTER_C;
