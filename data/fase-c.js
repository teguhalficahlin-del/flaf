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

import TP_C01 from '../docs/output-canonical-fase-c/tp-01-canonical-fase-c.js';
import TP_C02 from '../docs/output-canonical-fase-c/tp-02-canonical-fase-c.js';
import TP_C03 from '../docs/output-canonical-fase-c/tp-03-canonical-fase-c.js';
import TP_C04 from '../docs/output-canonical-fase-c/tp-04-canonical-fase-c.js';
import TP_C05 from '../docs/output-canonical-fase-c/tp-05-canonical-fase-c.js';
import TP_C06 from '../docs/output-canonical-fase-c/tp-06-canonical-fase-c.js';
import TP_C07 from '../docs/output-canonical-fase-c/tp-07-canonical-fase-c.js';
import TP_C08 from '../docs/output-canonical-fase-c/tp-08-canonical-fase-c.js';
import TP_C09 from '../docs/output-canonical-fase-c/tp-09-canonical-fase-c.js';
import TP_C10 from '../docs/output-canonical-fase-c/tp-10-canonical-fase-c.js';
import TP_C11 from '../docs/output-canonical-fase-c/tp-11-canonical-fase-c.js';
import TP_C12 from '../docs/output-canonical-fase-c/tp-12-canonical-fase-c.js';
import TP_C13 from '../docs/output-canonical-fase-c/tp-13-canonical-fase-c.js';
import TP_C14 from '../docs/output-canonical-fase-c/tp-14-canonical-fase-c.js';
import TP_C15 from '../docs/output-canonical-fase-c/tp-15-canonical-fase-c.js';
import TP_C16 from '../docs/output-canonical-fase-c/tp-16-canonical-fase-c.js';
import TP_C17 from '../docs/output-canonical-fase-c/tp-17-canonical-fase-c.js';
import TP_C18 from '../docs/output-canonical-fase-c/tp-18-canonical-fase-c.js';
import TP_C19 from '../docs/output-canonical-fase-c/tp-19-canonical-fase-c.js';
import TP_C20 from '../docs/output-canonical-fase-c/tp-20-canonical-fase-c.js';
import TP_C21 from '../docs/output-canonical-fase-c/tp-21-canonical-fase-c.js';
import TP_C22 from '../docs/output-canonical-fase-c/tp-22-canonical-fase-c.js';

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
    TP_C01, TP_C02, TP_C03, TP_C04, TP_C05,
    TP_C06, TP_C07, TP_C08, TP_C09, TP_C10,
    TP_C11, TP_C12, TP_C13, TP_C14, TP_C15,
    TP_C16, TP_C17, TP_C18, TP_C19, TP_C20,
    TP_C21, TP_C22,
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
