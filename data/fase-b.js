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
    menyimak_berbicara: `Pada akhir Fase B, peserta didik menggunakan bahasa
    Inggris untuk merespons dan berinteraksi dalam situasi sosial dan kelas
    yang lebih beragam menggunakan kalimat sederhana sesuai konteks. Mereka
    mampu memahami teks lisan dan multimodal sederhana tentang kehidupan
    sehari-hari dan meresponsnya secara verbal maupun non-verbal. Peserta
    didik mulai menggunakan pola kalimat yang lebih bervariasi untuk
    menyampaikan informasi, perasaan, dan kebutuhan dasar.`,

    membaca_memirsa: `Pada akhir Fase B, peserta didik mampu memahami teks
    tulis pendek sederhana dan teks multimodal tentang topik kehidupan
    sehari-hari. Mereka dapat membaca dan merespons teks pendek secara
    verbal maupun non-verbal sesuai konteks. Peserta didik mulai mengenali
    struktur teks sederhana dan memahami makna kata-kata dalam konteks
    yang familiar.`,

    menulis_mempresentasikan: `Pada akhir Fase B, peserta didik mampu
    mengomunikasikan gagasan tentang topik sehari-hari dalam teks tulis
    pendek atau teks multimodal sesuai konteks. Mereka dapat menulis
    kalimat sederhana secara mandiri dan mempresentasikan ide menggunakan
    kombinasi teks tulis dan elemen visual.`,
  },

  atp: {
    deskripsi: `ATP Fase B Bahasa Inggris disusun secara spiral dan tematik.
    TP 1–11 membangun kemampuan interaksi, deskripsi, dan penulisan dasar
    pada Kelas 3 dalam tiga kluster: Diri & Komunitas, Waktu & Jadwal, serta
    Alam & Kesehatan. TP 12–22 memperluas keterampilan ke konteks budaya,
    narasi, dan teks multimodal pada Kelas 4, ditutup dengan Proyek
    Integratif Akhir Fase B.`,
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
