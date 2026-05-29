/**
 * =============================================================
 * FLAF — DATA KURIKULUM FASE B — KLUSTER D
 * File: data/fase-b-kluster-d.js
 * =============================================================
 * Fase B — Kelas 4 SD
 * Kluster D — Komunitas, Budaya, dan Dunia (TP 12–15)
 * Schema: v5.0
 *
 * Semua TP dimuat dari file terpisah (docs/output-v5-faseb/).
 * Tidak ada definisi inline TP di file ini.
 *
 * =============================================================
 */

import TP_B12 from '../docs/output-v5-faseb/tp-12-v5.js';
import TP_B13 from '../docs/output-v5-faseb/tp-13-v5.js';
import TP_B14 from '../docs/output-v5-faseb/tp-14-v5.js';
import TP_B15 from '../docs/output-v5-faseb/tp-15-v5.js';

const FASE_B_KLUSTER_D = {

  meta: {
    fase          : 'B',
    kluster       : 'D',
    kelas         : 4,
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
    deskripsi: 'Kluster D — Komunitas, Budaya, dan Dunia',
    total_tp  : 4,
  },

  tujuan_pembelajaran: [

    TP_B12,
    TP_B13,
    TP_B14,
    TP_B15,

  ],

};

(function validateFaseB_KlusterD() {
  const { tujuan_pembelajaran: tps, meta } = FASE_B_KLUSTER_D;
  if (!Array.isArray(tps)) throw new Error('[FLAF] fase-b-kluster-d.js: tujuan_pembelajaran harus berupa array');
  if (tps.length !== meta.total_tp) throw new Error(`[FLAF] fase-b-kluster-d.js: jumlah TP harus ${meta.total_tp}, ditemukan ${tps.length}`);
  tps.forEach((tp, i) => {
    const num = i + 1;
    if (!tp.id)        throw new Error(`[FLAF] fase-b-kluster-d.js: TP ${num} tidak punya id`);
    if (!tp.nama)      throw new Error(`[FLAF] fase-b-kluster-d.js: TP ${num} tidak punya nama`);
    if (!Array.isArray(tp.indikator) || tp.indikator.length !== 3)
      throw new Error(`[FLAF] fase-b-kluster-d.js: TP ${num} harus punya tepat 3 indikator`);
    if (!Array.isArray(tp.vocab) || tp.vocab.length === 0)
      throw new Error(`[FLAF] fase-b-kluster-d.js: TP ${num} vocab tidak boleh kosong`);
    if (!Array.isArray(tp.skenario) || tp.skenario.length === 0)
      throw new Error(`[FLAF] fase-b-kluster-d.js: TP ${num} skenario tidak boleh kosong`);
  });
})();

export default FASE_B_KLUSTER_D;
