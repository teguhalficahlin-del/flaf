/**
 * =============================================================
 * FLAF — MODUL AJAR GENERATOR
 * File: modules/modul-ajar-generator.js
 * =============================================================
 *
 * Membuat HTML Modul Ajar (Kurikulum Merdeka) lengkap satu
 * halaman dari objek TP canonical digabung dengan template
 * statis per fase. Tanpa library eksternal. Output ke user
 * lewat window.open() + window.print().
 *
 * PUBLIC API:
 *   generateModulHTML(tp)  → string  (HTML satu halaman penuh)
 *   printModulAjar(tp)     → void    (buka tab baru + window.print)
 *
 * Deteksi fase dari tp.kelas: 1–2 = A · 3–4 = B · 5–6 = C
 *
 * Sumber data canonical yang dipakai:
 *   A1 Identitas  : tp.id, tp.nomor, tp.nama, tp.tema, tp.kelas
 *   B1 Tujuan     : tp.indikator[]
 *   B4 Kegiatan   : tp.preOpening + tp.skenario[] (semua layar)
 *   C2 Glosarium  : tp.vocab[]
 * =============================================================
 */

import { BERMAKNA_PEMANTIK_FASE_A } from './modul-bermakna-pemantik-fase-a.js';
import { BERMAKNA_PEMANTIK_FASE_B } from './modul-bermakna-pemantik-fase-b.js';
import { BERMAKNA_PEMANTIK_FASE_C } from './modul-bermakna-pemantik-fase-c.js';
import NARASI_FASE_A from './modul-narasi-fase-a.js';
import NARASI_FASE_B from './modul-narasi-fase-b.js';
import NARASI_FASE_C from './modul-narasi-fase-c.js';

// ═══════════════════════════════════════════════════════════
// 1. TEMPLATE STATIS — SARANA & PRASARANA (identik semua fase)
// ═══════════════════════════════════════════════════════════
const SARANA_PRASARANA = {
  utama: [
    'Smartphone guru dengan aplikasi FLAF ter-install (offline ready)',
    'Audio dari speaker internal smartphone',
    'Koneksi internet tidak wajib setelah aktivasi',
  ],
  opsional: [
    'Speaker Bluetooth eksternal',
    'Proyektor / TV',
    'Kartu cetak flashcard',
    'Papan tulis dan spidol',
  ],
};

// ═══════════════════════════════════════════════════════════
// 1. TEMPLATE STATIS PER FASE
// ═══════════════════════════════════════════════════════════
const FASE_TEMPLATE = {

  A: {
    kompetensiAwal:
      'Siswa sudah mengenal bunyi bahasa Indonesia dan mampu berkomunikasi dasar dalam bahasa Indonesia. ' +
      'Siswa belum wajib bisa membaca atau menulis bahasa Inggris — fokus pada kemampuan menyimak dan berbicara (listening & speaking).',
    profilPancasila: [
      { dimensi: 'Beriman & Berakhlak Mulia', deskripsi: 'Siswa menunjukkan sikap sopan, santun, dan menghargai guru serta teman dalam setiap interaksi pembelajaran sebagai bentuk perilaku baik dalam kehidupan sehari-hari.' },
      { dimensi: 'Berkebinekaan Global',      deskripsi: 'Siswa mengenal bahasa Inggris sebagai bahasa internasional dan mulai membangun keterbukaan terhadap budaya dan komunikasi lintas bahasa.' },
      { dimensi: 'Bergotong Royong',          deskripsi: 'Siswa berpartisipasi aktif dalam kegiatan belajar bersama serta bekerja sama dengan teman untuk mencapai tujuan pembelajaran.' },
      { dimensi: 'Mandiri',                   deskripsi: 'Siswa berani mencoba berbicara bahasa Inggris secara mandiri tanpa takut salah dalam situasi pembelajaran yang aman.' },
      { dimensi: 'Bernalar Kritis',           deskripsi: 'Siswa mengenali penggunaan ungkapan bahasa Inggris yang sesuai dengan situasi sederhana dalam kehidupan sehari-hari.' },
      { dimensi: 'Kreatif',                   deskripsi: 'Siswa mencoba berbagai cara mengucapkan dan menggunakan ungkapan bahasa Inggris melalui permainan dan aktivitas terbimbing.' },
    ],
    saranaPrasarana: SARANA_PRASARANA,
  },

  B: {
    kompetensiAwal:
      'Siswa sudah memiliki kemampuan menyimak dan berbicara bahasa Inggris dasar dari Fase A. ' +
      'Siswa mulai mampu membaca kata dan kalimat sederhana serta menulis ungkapan pendek dalam bahasa Inggris.',
    profilPancasila: [
      { dimensi: 'Beriman & Berakhlak Mulia', deskripsi: 'Siswa menerapkan sikap sopan, santun, dan tanggung jawab dalam berinteraksi menggunakan bahasa Inggris di lingkungan sekolah maupun kehidupan sehari-hari.' },
      { dimensi: 'Berkebinekaan Global',      deskripsi: 'Siswa menggunakan bahasa Inggris untuk mengenal keberagaman budaya serta memahami penggunaan bahasa dalam berbagai situasi sederhana.' },
      { dimensi: 'Bergotong Royong',          deskripsi: 'Siswa bekerja sama dengan teman dalam berbagai kegiatan pembelajaran untuk mencapai tujuan belajar bersama.' },
      { dimensi: 'Mandiri',                   deskripsi: 'Siswa mengambil inisiatif dalam praktik berbicara dan menulis bahasa Inggris secara mandiri sesuai kemampuan masing-masing.' },
      { dimensi: 'Bernalar Kritis',           deskripsi: 'Siswa menganalisis konteks dan memilih ungkapan bahasa Inggris yang tepat sesuai situasi komunikasi yang dihadapi.' },
      { dimensi: 'Kreatif',                   deskripsi: 'Siswa menghasilkan ungkapan, kalimat, atau teks sederhana menggunakan kosakata dan struktur yang telah dipelajari.' },
    ],
    saranaPrasarana: SARANA_PRASARANA,
  },

  C: {
    kompetensiAwal:
      'Siswa sudah menguasai kosakata dan struktur kalimat sederhana dari Fase A dan B. ' +
      'Siswa mampu membaca teks pendek, menulis kalimat sederhana, dan berkomunikasi lisan dalam konteks yang familiar.',
    profilPancasila: [
      { dimensi: 'Beriman & Berakhlak Mulia', deskripsi: 'Siswa menunjukkan integritas dan tanggung jawab dalam berkomunikasi menggunakan bahasa Inggris secara jujur dan santun.' },
      { dimensi: 'Berkebinekaan Global',      deskripsi: 'Siswa menggunakan bahasa Inggris untuk memahami keberagaman budaya serta menghargai perbedaan dalam berbagai konteks kehidupan sehari-hari.' },
      { dimensi: 'Bergotong Royong',          deskripsi: 'Siswa berkolaborasi secara aktif dengan teman dalam berbagai kegiatan pembelajaran untuk menghasilkan karya atau menyelesaikan tugas bersama.' },
      { dimensi: 'Mandiri',                   deskripsi: 'Siswa merencanakan dan merefleksikan proses belajar bahasa Inggris secara mandiri, termasuk mengevaluasi kemajuan diri sendiri.' },
      { dimensi: 'Bernalar Kritis',           deskripsi: 'Siswa mengevaluasi informasi dan memilih ungkapan atau teks yang sesuai untuk menyampaikan pendapat secara logis dan jelas.' },
      { dimensi: 'Kreatif',                   deskripsi: 'Siswa menghasilkan teks dan berbagai karya komunikatif sederhana secara orisinal sesuai konteks dan tujuan pembelajaran.' },
    ],
    saranaPrasarana: SARANA_PRASARANA,
  },

};

// ═══════════════════════════════════════════════════════════
// 2. TEMPLATE GLOBAL (sama untuk semua fase)
// ═══════════════════════════════════════════════════════════
const GLOBAL_TEMPLATE = {

  targetPesertaDidik: [
    'Target Utama: Peserta didik reguler (Fase A, B, atau C)',
    'Kebutuhan Khusus: Guru melakukan penyesuaian mandiri sesuai kebutuhan',
    'Ukuran Kelas: Optimal 20–30 siswa',
  ],

  modelPembelajaran: {
    model            : 'Tatap Muka — Total Physical Response (TPR)',
    metode           : 'Demonstrasi guru, respons fisik siswa, choral repetition, pair work',
    pendekatan       : 'Communicative Language Teaching (CLT)',
    pendekatanMendalam: 'Mindful Learning, Meaningful Learning, Joyful Learning',
  },

  asesmen: {
    jenis     : 'Formatif — observasi guru selama kegiatan',
    instrumen : 'Checklist partisipasi + rubrik unjuk kerja lisan',
    waktu     : 'Selama dan akhir sesi pembelajaran',
    pencatatan: 'Guru input via FLAF app setelah kelas selesai',
    rubrik: [
      { aspek: 'Pengucapan',        sb: 'Mengucapkan dengan jelas dan alami', b: 'Ada sedikit kesalahan kecil', pb: 'Kesulitan mengucapkan dan perlu bantuan' },
      { aspek: 'Ketepatan Konteks', sb: 'Selalu tepat memilih ungkapan',      b: 'Kadang tertukar',            pb: 'Sering salah konteks' },
      { aspek: 'Respons Interaktif',sb: 'Merespons spontan dan variatif',      b: 'Merespons saat diminta',     pb: 'Tidak merespons' },
    ],
  },

  pengayaanRemedial: {
    pengayaan: 'Siswa yang sudah menguasai diminta membuat kalimat baru dalam konteks berbeda atau menjadi guru kecil membantu teman.',
    remedial : 'Guru melakukan repetisi individual atau kelompok kecil menggunakan bantuan visual.',
  },

  bahanBacaanGuru:
    'Guru dapat memperdalam pemahaman pendekatan dan materi melalui referensi pada Daftar Pustaka, ' +
    'khususnya pendekatan Total Physical Response (Asher, 1969), teori pemerolehan bahasa kedua (Krashen, 1982), ' +
    'serta Capaian Pembelajaran Bahasa Inggris (Kemdikbudristek, 2022).',

  refleksiGuru: [
    'Apakah seluruh peserta didik terlibat aktif selama kegiatan pembelajaran?',
    'Bagian mana dari pembelajaran yang paling menantang bagi peserta didik?',
    'Strategi atau aktivitas apa yang paling efektif dalam sesi ini?',
    'Apa yang perlu saya perbaiki atau sesuaikan pada pertemuan berikutnya?',
  ],

  daftarPustaka: [
    'Asher, J. J. (1969). The Total Physical Response Approach to Second Language Learning.',
    'Krashen, S. D. (1982). Principles and Practice in Second Language Acquisition.',
    'Kemdikbudristek. (2022). Capaian Pembelajaran Bahasa Inggris Fase A, B, dan C.',
    'Permendikdasmen Nomor 13 Tahun 2025 tentang Perubahan atas Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 12 Tahun 2024 tentang Kurikulum pada Pendidikan Anak Usia Dini, Jenjang Pendidikan Dasar, dan Jenjang Pendidikan Menengah.',
  ],

  tandaTangan: {
    kiri : { jabatan: 'Mengetahui,<br>Kepala Sekolah', nama: '( ………………………………… )', nip: 'NIP. ………………………………' },
    kanan: { jabatan: 'Guru Mata Pelajaran',           nama: '( ………………………………… )', nip: 'NIP. ………………………………' },
  },

};

// ═══════════════════════════════════════════════════════════
// HELPER
// ═══════════════════════════════════════════════════════════

function _esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** string | string[] | null → HTML (list jika array) */
function _strOrList(val) {
  if (val == null) return '';
  if (Array.isArray(val)) return '<ul>' + val.map(v => `<li>${_esc(v)}</li>`).join('') + '</ul>';
  return _esc(val);
}

function _faseFromKelas(kelas) {
  const k = Number(kelas);
  if (k <= 2) return 'A';
  if (k <= 4) return 'B';
  return 'C';
}

// ── B4: satu blok layar (preOpening atau langkah skenario) ──
function _renderLayar(n, judul, durasi, lk, isPre) {
  let h = '<div class="layar">';
  h += `<div class="layar-head">LAYAR ${n} — ${_esc(judul)}</div>`;
  if (!isPre && durasi != null) {
    h += `<div class="layar-durasi">Estimasi waktu: ${_esc(durasi)} menit</div>`;
  }
  if (lk.teks)    h += `<div class="lk-teks">${_esc(lk.teks)}</div>`;
  if (lk.bantuan) h += `<div class="lk-field"><span class="lk-label">Bantuan:</span> ${_strOrList(lk.bantuan)}</div>`;
  if (lk.cue)     h += `<div class="lk-field"><span class="lk-label">Catatan Penting:</span> ${_esc(lk.cue)}</div>`;
  if (lk.darurat) h += `<div class="lk-field"><span class="lk-label">Darurat:</span> ${_strOrList(lk.darurat)}</div>`;
  if (lk.diferensiasi) {
    h += '<div class="lk-field"><span class="lk-label">Diferensiasi:</span>';
    if (lk.diferensiasi.perluSupport) h += `<div class="dif">• Perlu pendampingan: ${_esc(lk.diferensiasi.perluSupport)}</div>`;
    if (lk.diferensiasi.sudahBisa)    h += `<div class="dif">• Sudah mampu: ${_esc(lk.diferensiasi.sudahBisa)}</div>`;
    h += '</div>';
  }
  h += '</div>';
  return h;
}

function _buildKegiatan(tp) {
  const ringMap = {};
  (tp.ringkasan || []).forEach(r => { ringMap[r.layar] = r; });

  let html = '';

  // preOpening = Layar 0 (tanpa estimasi waktu)
  if (tp.preOpening) {
    const judul = ringMap[0] ? ringMap[0].judul : 'Pre-Opening';
    html += _renderLayar(0, judul, null, tp.preOpening, true);
  }

  // langkah skenario, nomor layar berjalan mulai 1
  let n = 1;
  (tp.skenario || []).forEach(fase => {
    (fase.langkah || []).forEach(lk => {
      const judul = ringMap[n] ? ringMap[n].judul : fase.fase;
      html += _renderLayar(n, judul, fase.durasi, lk, false);
      n += 1;
    });
  });

  return html || '<p><em>Tidak ada skenario kegiatan.</em></p>';
}

// ── B4 (narasi): render string narasiKegiatan → HTML ──
// Blok dipisah baris kosong. Baris diawali "- " menjadi item <ul>;
// baris lain digabung menjadi paragraf <p>.
function _buildNarasi(teks) {
  const blocks = String(teks).split(/\n\s*\n/);
  let html = '';

  blocks.forEach(block => {
    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length === 0) return;

    let i = 0;
    while (i < lines.length) {
      if (lines[i].startsWith('- ')) {
        // kumpulkan item bullet berurutan
        const items = [];
        while (i < lines.length && lines[i].startsWith('- ')) {
          items.push(lines[i].slice(2).trim());
          i += 1;
        }
        html += '<ul>' + items.map(it => `<li>${_esc(it)}</li>`).join('') + '</ul>';
      } else {
        // kumpulkan baris teks berurutan menjadi satu paragraf
        const para = [];
        while (i < lines.length && !lines[i].startsWith('- ')) {
          para.push(lines[i]);
          i += 1;
        }
        html += `<p>${_esc(para.join(' '))}</p>`;
      }
    }
  });

  return html || '<p><em>Tidak ada narasi kegiatan.</em></p>';
}

// ── C2: glosarium dari tp.vocab[] (tabel 2 kolom) ──
function _buildGlosarium(tp) {
  const vocab = Array.isArray(tp.vocab) ? tp.vocab : [];
  if (vocab.length === 0) return '<p><em>Tidak ada kosakata.</em></p>';
  const rows = vocab.map(v => `<tr><td>${_esc(v)}</td><td></td></tr>`).join('');
  return `<table class="tbl">
    <thead><tr><th style="width:45%">Kata Bahasa Inggris</th><th>Arti (diisi guru)</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function _buildRubrik(rubrik) {
  const rows = rubrik.map(r =>
    `<tr><td><strong>${_esc(r.aspek)}</strong></td><td>${_esc(r.sb)}</td><td>${_esc(r.b)}</td><td>${_esc(r.pb)}</td></tr>`
  ).join('');
  return `<table class="tbl">
    <thead><tr><th>Aspek</th><th>Sangat Baik (4)</th><th>Baik (3)</th><th>Perlu Bimbingan (1–2)</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function _liList(arr) {
  return '<ul>' + arr.map(x => `<li>${_esc(x)}</li>`).join('') + '</ul>';
}

// ── B7: refleksi guru per-TP (tabel 2 kolom) ──
// Kolom 1: pertanyaan refleksi spesifik TP; Kolom 2: kosong, diisi guru setelah sesi.
// Fallback ke daftar generik bila refleksiGuru kosong/tidak tersedia.
function _buildRefleksiGuru(refleksiArr, fallbackArr) {
  if (!Array.isArray(refleksiArr) || refleksiArr.length === 0) {
    return _liList(fallbackArr);
  }
  const rows = refleksiArr.map(q =>
    `<tr><td>${_esc(q)}</td><td></td></tr>`
  ).join('');
  return `<table class="tbl">
    <thead><tr><th style="width:55%">Pertanyaan Refleksi</th><th>Catatan Guru (diisi setelah sesi)</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

// ═══════════════════════════════════════════════════════════
// 3. FUNGSI UTAMA — generateModulHTML(tp)
// ═══════════════════════════════════════════════════════════

export function generateModulHTML(tp) {
  if (!tp || typeof tp !== 'object') {
    return '<!DOCTYPE html><html><body><p>Data TP tidak valid.</p></body></html>';
  }

  const fase = _faseFromKelas(tp.kelas);
  const ft   = FASE_TEMPLATE[fase] || FASE_TEMPLATE.A;
  const g    = GLOBAL_TEMPLATE;

  // Pemahaman bermakna & pertanyaan pemantik — per-TP, dari modul data fase
  const lookup = fase === 'A' ? BERMAKNA_PEMANTIK_FASE_A :
                 fase === 'B' ? BERMAKNA_PEMANTIK_FASE_B :
                                BERMAKNA_PEMANTIK_FASE_C;
  const bpData = lookup[tp.id] || { pemahamanBermakna: '', pertanyaanPemantik: [] };

  // Narasi kegiatan per-TP (Fase A tersedia; Fase B/C fallback ke AKSI/UCAP)
  const NARASI_MAP = { A: NARASI_FASE_A, B: NARASI_FASE_B, C: NARASI_FASE_C };
  const narasiData = NARASI_MAP[fase]?.[tp.id]?.narasiKegiatan || null;

  const totalDurasi = (tp.skenario || []).reduce((s, f) => s + (Number(f.durasi) || 0), 0);

  // ── Profil Pelajar Pancasila ──
  const pancasilaHTML = ft.profilPancasila.map(p =>
    `<li><strong>${_esc(p.dimensi)}:</strong> ${_esc(p.deskripsi)}</li>`
  ).join('');

  // ── A1 Identitas ──
  const identitasHTML = `
    <table class="tbl idtable">
      <tr><td class="k">Mata Pelajaran</td><td>Bahasa Inggris</td></tr>
      <tr><td class="k">Fase / Kelas</td><td>Fase ${_esc(fase)} / Kelas ${_esc(tp.kelas)}</td></tr>
      <tr><td class="k">Kode TP</td><td>${_esc(tp.id)}</td></tr>
      <tr><td class="k">Nomor TP</td><td>${_esc(tp.nomor)}</td></tr>
      <tr><td class="k">Judul TP</td><td>${_esc(tp.nama)}</td></tr>
      <tr><td class="k">Tema</td><td>${_esc(tp.tema)}</td></tr>
      <tr><td class="k">Alokasi Waktu</td><td>${_esc(totalDurasi)} menit (1 pertemuan)</td></tr>
    </table>`;

  // ── B1 Tujuan Pembelajaran + Indikator ──
  const indikator = Array.isArray(tp.indikator) ? tp.indikator : [];
  const indikatorHTML = indikator.length
    ? _liList(indikator)
    : '<p><em>Tidak ada indikator.</em></p>';

  // ── Tanda tangan ──
  const tt = g.tandaTangan;

  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Modul Ajar — ${_esc(tp.nama)} (Fase ${_esc(fase)})</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: 'Times New Roman', Georgia, serif; color: #1a1a1a; line-height: 1.5;
         max-width: 820px; margin: 0 auto; padding: 24px; font-size: 12pt; }
  h1 { text-align: center; font-size: 16pt; margin: 0 0 2px; }
  .subtitle { text-align: center; font-size: 11pt; color: #444; margin: 0 0 18px; }
  .sec-title { background: #1A1A1A; color: #fff; padding: 6px 10px; font-weight: bold;
               margin: 20px 0 8px; font-size: 12pt; border-radius: 2px; }
  .sub-title { font-weight: bold; margin: 12px 0 4px; }
  p { margin: 6px 0; text-align: justify; }
  ul { margin: 4px 0; padding-left: 22px; }
  li { margin: 3px 0; }
  table.tbl { width: 100%; border-collapse: collapse; margin: 8px 0; }
  table.tbl th, table.tbl td { border: 1px solid #999; padding: 5px 8px; text-align: left;
               vertical-align: top; font-size: 11pt; }
  table.tbl th { background: #efefe8; }
  table.idtable td.k { background: #f7f7f2; font-weight: bold; width: 28%; }
  .layar { border: 1px solid #ccc; border-radius: 4px; padding: 8px 10px; margin: 8px 0;
           page-break-inside: avoid; }
  .layar-head { font-weight: bold; background: #f3efe0; padding: 4px 6px; margin: -8px -10px 6px;
                border-radius: 2px 2px 0 0; }
  .layar-durasi { font-style: italic; color: #666; font-size: 10pt; margin-bottom: 4px; }
  .lk-teks { white-space: pre-wrap; font-size: 11pt; margin: 4px 0; }
  .lk-field { margin: 5px 0; font-size: 11pt; }
  .lk-label { font-weight: bold; }
  .dif { margin-left: 14px; font-size: 11pt; }
  .ttd { display: flex; justify-content: space-between; margin-top: 44px; }
  .ttd > div { text-align: center; width: 45%; }
  .ttd .nama { margin-top: 60px; font-weight: bold; }
  .no-print { text-align: center; margin: 0 0 16px; }
  .no-print button { padding: 8px 18px; font-size: 12pt; cursor: pointer; }
  @page { margin: 2cm; }
  @media print {
    body { padding: 0; max-width: none; }
    .no-print { display: none; }
    .sec-title { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .layar, table.tbl { page-break-inside: avoid; }
  }
</style>
</head>
<body>

  <div class="no-print"><button onclick="window.print()">🖨 Cetak / Simpan PDF</button></div>

  <h1>MODUL AJAR BAHASA INGGRIS</h1>
  <div class="subtitle">${_esc(tp.nama)} &middot; Fase ${_esc(fase)} &middot; Kelas ${_esc(tp.kelas)}</div>

  <!-- ══ A. INFORMASI UMUM ══ -->
  <div class="sec-title">A. INFORMASI UMUM</div>

  <div class="sub-title">A1. Identitas Modul</div>
  ${identitasHTML}

  <div class="sub-title">A2. Kompetensi Awal</div>
  <p>${_esc(ft.kompetensiAwal)}</p>

  <div class="sub-title">A3. Profil Pelajar Pancasila</div>
  <ul>${pancasilaHTML}</ul>

  <div class="sub-title">A4. Sarana &amp; Prasarana</div>
  <p><strong>Lapisan Utama (Wajib):</strong></p>
  ${_liList(ft.saranaPrasarana.utama)}
  <p><strong>Lapisan Opsional (Jika Tersedia):</strong></p>
  ${_liList(ft.saranaPrasarana.opsional)}

  <div class="sub-title">A5. Target Peserta Didik</div>
  ${_liList(g.targetPesertaDidik)}

  <div class="sub-title">A6. Model Pembelajaran</div>
  <ul>
    <li><strong>Model:</strong> ${_esc(g.modelPembelajaran.model)}</li>
    <li><strong>Metode:</strong> ${_esc(g.modelPembelajaran.metode)}</li>
    <li><strong>Pendekatan:</strong> ${_esc(g.modelPembelajaran.pendekatan)}</li>
    <li><strong>Pembelajaran Mendalam:</strong> ${_esc(g.modelPembelajaran.pendekatanMendalam)}</li>
  </ul>

  <!-- ══ B. KOMPONEN INTI ══ -->
  <div class="sec-title">B. KOMPONEN INTI</div>

  <div class="sub-title">B1. Tujuan Pembelajaran &amp; Indikator</div>
  <p>Melalui kegiatan pembelajaran dengan pendekatan Total Physical Response (TPR), peserta didik dapat mencapai indikator berikut:</p>
  ${indikatorHTML}

  <div class="sub-title">B2. Pemahaman Bermakna</div>
  <p>${_esc(bpData.pemahamanBermakna)}</p>

  <div class="sub-title">B3. Pertanyaan Pemantik</div>
  ${_liList(bpData.pertanyaanPemantik)}

  <div class="sub-title">B4. Kegiatan Pembelajaran</div>
  ${narasiData ? _buildNarasi(narasiData) : _buildKegiatan(tp)}

  <div class="sub-title">B5. Asesmen</div>
  <ul>
    <li><strong>Jenis:</strong> ${_esc(g.asesmen.jenis)}</li>
    <li><strong>Instrumen:</strong> ${_esc(g.asesmen.instrumen)}</li>
    <li><strong>Waktu:</strong> ${_esc(g.asesmen.waktu)}</li>
    <li><strong>Pencatatan:</strong> ${_esc(g.asesmen.pencatatan)}</li>
  </ul>
  <p class="sub-title">Rubrik Penilaian</p>
  ${_buildRubrik(g.asesmen.rubrik)}

  <div class="sub-title">B6. Pengayaan &amp; Remedial</div>
  <p><strong>Pengayaan:</strong> ${_esc(g.pengayaanRemedial.pengayaan)}</p>
  <p><strong>Remedial:</strong> ${_esc(g.pengayaanRemedial.remedial)}</p>

  <div class="sub-title">B7. Refleksi Guru</div>
  ${_buildRefleksiGuru(bpData.refleksiGuru, g.refleksiGuru)}

  <!-- ══ C. LAMPIRAN ══ -->
  <div class="sec-title">C. LAMPIRAN</div>

  <div class="sub-title">C1. Bahan Bacaan Guru</div>
  <p>${_esc(g.bahanBacaanGuru)}</p>

  <div class="sub-title">C2. Glosarium</div>
  ${_buildGlosarium(tp)}

  <div class="sub-title">C3. Daftar Pustaka</div>
  ${_liList(g.daftarPustaka)}

  <!-- ══ Tanda Tangan ══ -->
  <div class="ttd">
    <div>
      <div>${tt.kiri.jabatan}</div>
      <div class="nama">${_esc(tt.kiri.nama)}</div>
      <div>${_esc(tt.kiri.nip)}</div>
    </div>
    <div>
      <div>${tt.kanan.jabatan}</div>
      <div class="nama">${_esc(tt.kanan.nama)}</div>
      <div>${_esc(tt.kanan.nip)}</div>
    </div>
  </div>

</body>
</html>`;
}

// ═══════════════════════════════════════════════════════════
// 4. FUNGSI PUBLIK — printModulAjar(tp)
// ═══════════════════════════════════════════════════════════

export function printModulAjar(tp) {
  const html = generateModulHTML(tp);
  const win  = window.open('', '_blank');

  if (!win) {
    alert('Izinkan popup di browser untuk mencetak modul ajar.');
    return;
  }

  win.document.open();
  win.document.write(html);
  win.document.close();

  // Trigger print setelah konten ter-render — guard agar tidak dobel
  let printed = false;
  const doPrint = () => {
    if (printed) return;
    printed = true;
    win.focus();
    win.print();
  };
  win.onload = doPrint;
  setTimeout(doPrint, 600);
}

export default { generateModulHTML, printModulAjar };
