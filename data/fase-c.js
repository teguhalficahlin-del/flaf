/**
 * =============================================================
 * FLAF — DATA KURIKULUM FASE C
 * File: data/fase-c.js
 * =============================================================
 * Terakhir direvisi: Juni 2026 — Schema v1.0
 *
 * 22 TP dimuat langsung dari docs/fase-c-skenario/.
 * Berbeda dari Fase B yang berbasis kluster — Fase C
 * menggunakan file per-TP (konversi dari flaf-c-tpXX-v2.txt).
 *
 * Catatan validasi:
 *   - TP Panen (mis. tp-20) boleh punya vocab kosong by design.
 *   - Indikator wajib 3 per TP.
 *   - skenario wajib non-kosong.
 * =============================================================
 */

import { tp_c01 } from '../docs/fase-c-skenario/tp-01-v1.js';
import { tp_c02 } from '../docs/fase-c-skenario/tp-02-v1.js';
import { tp_c03 } from '../docs/fase-c-skenario/tp-03-v1.js';
import { tp_c04 } from '../docs/fase-c-skenario/tp-04-v1.js';
import { tp_c05 } from '../docs/fase-c-skenario/tp-05-v1.js';
import { tp_c06 } from '../docs/fase-c-skenario/tp-06-v1.js';
import { tp_c07 } from '../docs/fase-c-skenario/tp-07-v1.js';
import { tp_c08 } from '../docs/fase-c-skenario/tp-08-v1.js';
import { tp_c09 } from '../docs/fase-c-skenario/tp-09-v1.js';
import { tp_c10 } from '../docs/fase-c-skenario/tp-10-v1.js';
import { tp_c11 } from '../docs/fase-c-skenario/tp-11-v1.js';
import { tp_c12 } from '../docs/fase-c-skenario/tp-12-v1.js';
import { tp_c13 } from '../docs/fase-c-skenario/tp-13-v1.js';
import { tp_c14 } from '../docs/fase-c-skenario/tp-14-v1.js';
import { tp_c15 } from '../docs/fase-c-skenario/tp-15-v1.js';
import { tp_c16 } from '../docs/fase-c-skenario/tp-16-v1.js';
import { tp_c17 } from '../docs/fase-c-skenario/tp-17-v1.js';
import { tp_c18 } from '../docs/fase-c-skenario/tp-18-v1.js';
import { tp_c19 } from '../docs/fase-c-skenario/tp-19-v1.js';
import { tp_c20 } from '../docs/fase-c-skenario/tp-20-v1.js';
import { tp_c21 } from '../docs/fase-c-skenario/tp-21-v1.js';
import { tp_c22 } from '../docs/fase-c-skenario/tp-22-v1.js';

const FASE_C = {

  meta: {
    fase          : 'C',
    kelas         : '5-6',
    mata_pelajaran: 'Bahasa Inggris',
    data_version  : 'v1.0',
    total_tp      : 22,
    total_kluster : 5,
  },

  cp: {
    menyimak_berbicara: `Pada akhir Fase C, peserta didik menggunakan bahasa
    Inggris untuk berinteraksi dalam situasi sosial dan kelas yang lebih
    beragam. Mereka mampu memahami teks lisan dan multimodal tentang topik
    yang lebih luas dan merespons secara verbal maupun non-verbal. Peserta
    didik dapat menyampaikan pendapat, menceritakan pengalaman, dan
    mendeskripsikan hal-hal dalam lingkungan mereka menggunakan kalimat
    yang lebih kompleks.`,

    membaca_memirsa: `Pada akhir Fase C, peserta didik mampu memahami teks
    tulis dan multimodal tentang berbagai topik yang relevan dengan
    kehidupan sehari-hari. Mereka dapat membaca dan merespons teks pendek
    hingga sedang, mengenali struktur teks, dan memahami makna kata-kata
    dalam konteks yang lebih beragam termasuk teks fungsional di luar kelas.`,

    menulis_mempresentasikan: `Pada akhir Fase C, peserta didik mampu
    mengomunikasikan gagasan dalam tiga register utama (opini, cerita,
    deskripsi) secara tertulis dengan minimal satu connector yang terintegrasi
    natural. Mereka dapat memproduksi teks mandiri tanpa scaffold template
    dan mempresentasikan ide menggunakan kombinasi teks dan elemen visual.`,
  },

  atp: {
    deskripsi: `ATP Fase C Bahasa Inggris disusun dalam lima kluster tematik
    untuk Kelas 5–6. Kluster A–B membangun fondasi menyimak dan berbicara
    dengan teks anchor dan connector dasar. Kluster C–D memperluas ke teks
    tulis opini, cerita, dan deskripsi. Kluster E merupakan fase produksi
    mandiri tanpa scaffold, ditutup dengan Capstone Integratif Akhir Fase C.`,
    total_tp  : 22,
  },

  tujuan_pembelajaran: [
    tp_c01, tp_c02, tp_c03, tp_c04, tp_c05,
    tp_c06, tp_c07, tp_c08, tp_c09, tp_c10,
    tp_c11, tp_c12, tp_c13, tp_c14, tp_c15,
    tp_c16, tp_c17, tp_c18, tp_c19, tp_c20,
    tp_c21, tp_c22,
  ],

};

(function validateFaseC() {
  const { tujuan_pembelajaran: tps, meta } = FASE_C;
  if (!Array.isArray(tps)) throw new Error('[FLAF] fase-c.js: tujuan_pembelajaran harus berupa array');
  if (tps.length !== meta.total_tp) throw new Error(`[FLAF] fase-c.js: jumlah TP harus ${meta.total_tp}, ditemukan ${tps.length}`);
  tps.forEach((tp, i) => {
    const num = i + 1;
    if (!tp.id)   throw new Error(`[FLAF] fase-c.js: TP ${num} tidak punya id`);
    if (!tp.nama) throw new Error(`[FLAF] fase-c.js: TP ${num} tidak punya nama`);
    if (!Array.isArray(tp.indikator) || tp.indikator.length !== 3)
      throw new Error(`[FLAF] fase-c.js: TP ${num} harus punya tepat 3 indikator`);
    if (!Array.isArray(tp.skenario) || tp.skenario.length === 0)
      throw new Error(`[FLAF] fase-c.js: TP ${num} skenario tidak boleh kosong`);
    // vocab boleh kosong di TP Panen — tidak divalidasi strict
  });
})();

export default FASE_C;
