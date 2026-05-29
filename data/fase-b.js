/**
 * =============================================================
 * FLAF — DATA KURIKULUM FASE B
 * File: data/fase-b.js
 * =============================================================
 * Terakhir direvisi: Mei 2026 — Schema v5.0
 *
 * Semua TP dimuat dari 6 file kluster terpisah.
 * tujuan_pembelajaran di-spread dari setiap kluster.
 * Tidak ada definisi inline TP di file ini.
 *
 * =============================================================
 */

import FASE_B_KLUSTER_A from './fase-b-kluster-a.js';
import FASE_B_KLUSTER_B from './fase-b-kluster-b.js';
import FASE_B_KLUSTER_C from './fase-b-kluster-c.js';
import FASE_B_KLUSTER_D from './fase-b-kluster-d.js';
import FASE_B_KLUSTER_E from './fase-b-kluster-e.js';
import FASE_B_CAPSTONE  from './fase-b-capstone.js';

const FASE_B = {

  meta: {
    fase          : 'B',
    kelas         : '3-4',
    mata_pelajaran: 'Bahasa Inggris',
    data_version  : 'v5.0',
    total_tp      : 22,
    total_kluster : 6,
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
    deskripsi: 'Fase B — Kelas 3–4, 22 Tujuan Pembelajaran dalam 5 Kluster + Capstone',
    total_tp  : 22,
  },

  tujuan_pembelajaran: [
    ...FASE_B_KLUSTER_A.tujuan_pembelajaran,
    ...FASE_B_KLUSTER_B.tujuan_pembelajaran,
    ...FASE_B_KLUSTER_C.tujuan_pembelajaran,
    ...FASE_B_KLUSTER_D.tujuan_pembelajaran,
    ...FASE_B_KLUSTER_E.tujuan_pembelajaran,
    ...FASE_B_CAPSTONE.tujuan_pembelajaran,
  ],

};

(function validateFaseB() {
  const { tujuan_pembelajaran: tps, meta } = FASE_B;
  if (!Array.isArray(tps)) throw new Error('[FLAF] fase-b.js: tujuan_pembelajaran harus berupa array');
  if (tps.length !== meta.total_tp) throw new Error(`[FLAF] fase-b.js: jumlah TP harus ${meta.total_tp}, ditemukan ${tps.length}`);
  tps.forEach((tp, i) => {
    const num = i + 1;
    if (!tp.id)        throw new Error(`[FLAF] fase-b.js: TP ${num} tidak punya id`);
    if (!tp.nama)      throw new Error(`[FLAF] fase-b.js: TP ${num} tidak punya nama`);
    if (!Array.isArray(tp.indikator) || tp.indikator.length !== 3)
      throw new Error(`[FLAF] fase-b.js: TP ${num} harus punya tepat 3 indikator`);
    if (!Array.isArray(tp.vocab) || tp.vocab.length === 0)
      throw new Error(`[FLAF] fase-b.js: TP ${num} vocab tidak boleh kosong`);
    if (!Array.isArray(tp.skenario) || tp.skenario.length === 0)
      throw new Error(`[FLAF] fase-b.js: TP ${num} skenario tidak boleh kosong`);
  });
})();

export default FASE_B;
