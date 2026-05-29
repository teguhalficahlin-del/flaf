/**
 * =============================================================
 * FLAF — DATA KURIKULUM FASE B — KLUSTER A
 * File: data/fase-b-kluster-a.js
 * =============================================================
 * Fase B — Kelas 3 SD
 * Kluster A — Diri, Sekolah, dan Komunitas (TP 01–04)
 * Schema: v5.0
 *
 * Semua TP dimuat dari file terpisah (docs/output-v5-faseb/).
 * Tidak ada definisi inline TP di file ini.
 *
 * =============================================================
 */

import TP_B01 from '../docs/output-v5-faseb/tp-01-v5.js';
import TP_B02 from '../docs/output-v5-faseb/tp-02-v5.js';
import TP_B03 from '../docs/output-v5-faseb/tp-03-v5.js';
import TP_B04 from '../docs/output-v5-faseb/tp-04-v5.js';

const FASE_B_KLUSTER_A = {

  meta: {
    fase          : 'B',
    kluster       : 'A',
    kelas         : 3,
    mata_pelajaran: 'Bahasa Inggris',
    data_version  : 'v5.0',
    total_tp      : 4,
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
    deskripsi: 'Kluster A — Diri, Sekolah, dan Komunitas',
    total_tp  : 4,
  },

  tujuan_pembelajaran: [

    TP_B01,
    TP_B02,
    TP_B03,
    TP_B04,

  ],

};

(function validateFaseB_KlusterA() {
  const { tujuan_pembelajaran: tps, meta } = FASE_B_KLUSTER_A;
  if (!Array.isArray(tps)) throw new Error('[FLAF] fase-b-kluster-a.js: tujuan_pembelajaran harus berupa array');
  if (tps.length !== meta.total_tp) throw new Error(`[FLAF] fase-b-kluster-a.js: jumlah TP harus ${meta.total_tp}, ditemukan ${tps.length}`);
  tps.forEach((tp, i) => {
    const num = i + 1;
    if (!tp.id)        throw new Error(`[FLAF] fase-b-kluster-a.js: TP ${num} tidak punya id`);
    if (!tp.nama)      throw new Error(`[FLAF] fase-b-kluster-a.js: TP ${num} tidak punya nama`);
    if (!Array.isArray(tp.indikator) || tp.indikator.length !== 3)
      throw new Error(`[FLAF] fase-b-kluster-a.js: TP ${num} harus punya tepat 3 indikator`);
    if (!Array.isArray(tp.vocab) || tp.vocab.length === 0)
      throw new Error(`[FLAF] fase-b-kluster-a.js: TP ${num} vocab tidak boleh kosong`);
    if (!Array.isArray(tp.skenario) || tp.skenario.length === 0)
      throw new Error(`[FLAF] fase-b-kluster-a.js: TP ${num} skenario tidak boleh kosong`);
  });
})();

export default FASE_B_KLUSTER_A;
