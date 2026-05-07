/**
 * modules/pdf-generator.js — FLAF PDF Generator
 *
 * Membuat PDF rekap nilai siswa langsung di browser menggunakan
 * canvas HTML5 — tanpa library eksternal, tanpa koneksi internet.
 *
 * API publik:
 *   generatePDFRekap(opts)      → Promise<void>  Dokumen 1: per TP per siswa
 *   generatePDFRekap2(opts)     → Promise<void>  Dokumen 2: rekap akhir semua TP
 *
 * opts Dokumen 1:
 *   { namaSekolah, namaGuru, kelasNama, tpNomor, tpNama, siswaList }
 *   siswaList: Array<{ nomor, nama, l, s, r, nilai, catatan }>
 *
 * opts Dokumen 2:
 *   { namaSekolah, namaGuru, kelasNama, tingkat, siswaList }
 *   siswaList: Array<{ nomor, nama, tp: {[n]: number|null}, rerata }>
 */

// --- KONSTANTA LAYOUT --------------------------------------------------------

const PAGE_W    = 794;   // A4 landscape px @96dpi = 842, portrait = 794
const PAGE_H    = 1123;  // A4 portrait
const MARGIN    = 40;
const FONT      = 'Arial, sans-serif';

const COLOR = {
  header  : '#1A1A1A',
  subhead : '#444444',
  gold    : '#B8860B',
  green   : '#2E7D52',
  red     : '#C0392B',
  border  : '#CCCCCC',
  rowAlt  : '#F9F9F6',
  white   : '#FFFFFF',
  muted   : '#888888',
  label   : '#555555',
};

// --- HELPER CANVAS -----------------------------------------------------------

function _createCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width  = w;
  c.height = h;
  return c;
}

function _ctx(canvas) {
  return canvas.getContext('2d');
}

function _text(ctx, str, x, y, opts = {}) {
  ctx.font         = `${opts.style || 'normal'} ${opts.weight || 400} ${opts.size || 12}px ${FONT}`;
  ctx.fillStyle    = opts.color || COLOR.header;
  ctx.textAlign    = opts.align || 'left';
  ctx.textBaseline = opts.baseline || 'top';
  ctx.fillText(String(str ?? ''), x, y);
}

function _line(ctx, x1, y1, x2, y2, color = COLOR.border, width = 0.5) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth   = width;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function _rect(ctx, x, y, w, h, fill, stroke) {
  if (fill)   { ctx.fillStyle = fill;     ctx.fillRect(x, y, w, h); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 0.5; ctx.strokeRect(x, y, w, h); }
}

function _nilaiColor(n) {
  if (n === null || n === undefined) return COLOR.muted;
  if (n >= 80) return COLOR.green;
  if (n >= 70) return COLOR.gold;
  return COLOR.red;
}

function _triggerDownload(canvas, filename) {
  canvas.toBlob(blob => {
    if (!blob) { console.error('[PDF-GEN] toBlob gagal'); return; }
    const url = URL.createObjectURL(blob);
    const a   = document.createElement('a');
    a.href     = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 2000);
  }, 'image/png');
}

// Alternatif: generate PDF halaman sebagai PNG lalu download
// Catatan: ini output PNG bukan PDF, tapi bisa dicetak langsung dari browser
// dengan hasil setara PDF. Untuk menghasilkan .pdf sejati butuh library seperti
// jsPDF yang memerlukan CDN — kita hindari ketergantungan eksternal.

// --- HEADER DOKUMEN ----------------------------------------------------------

function _drawHeader(ctx, opts, judul, subjudul) {
  const { namaSekolah, namaGuru, kelasNama } = opts;

  // Garis atas
  _rect(ctx, MARGIN, MARGIN, PAGE_W - MARGIN * 2, 4, COLOR.gold);

  // Judul
  _text(ctx, 'REKAPITULASI PENILAIAN', MARGIN, MARGIN + 14, { size: 14, weight: 700, color: COLOR.header });
  _text(ctx, judul, MARGIN, MARGIN + 32, { size: 11, color: COLOR.subhead });

  // Info kanan
  const kanan = PAGE_W - MARGIN;
  _text(ctx, new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }), kanan, MARGIN + 14, { size: 9, color: COLOR.muted, align: 'right' });

  // Info sekolah
  const infoY = MARGIN + 54;
  _rect(ctx, MARGIN, infoY, PAGE_W - MARGIN * 2, 56, COLOR.rowAlt, COLOR.border);

  const cols = [
    { label: 'Satuan Pendidikan', val: namaSekolah || '—' },
    { label: 'Mata Pelajaran',    val: 'Bahasa Inggris' },
    { label: 'Fase / Kelas',      val: `Fase A / ${kelasNama || '—'}` },
    { label: 'Guru',              val: namaGuru || '—' },
  ];

  const colW = (PAGE_W - MARGIN * 2) / cols.length;
  cols.forEach((c, i) => {
    const cx = MARGIN + i * colW + 10;
    _text(ctx, c.label, cx, infoY + 10, { size: 8, color: COLOR.muted });
    _text(ctx, c.val,   cx, infoY + 24, { size: 10, weight: 700, color: COLOR.header });
    if (i > 0) _line(ctx, MARGIN + i * colW, infoY + 4, MARGIN + i * colW, infoY + 52);
  });

  // Subjudul
  if (subjudul) {
    _text(ctx, subjudul, MARGIN, infoY + 68, { size: 10, weight: 700, color: COLOR.gold });
  }

  return infoY + 86; // return Y posisi setelah header
}

// --- FOOTER ------------------------------------------------------------------

function _drawFooter(ctx, namaGuru) {
  const footerY = PAGE_H - MARGIN - 60;

  _line(ctx, MARGIN, footerY, PAGE_W - MARGIN, footerY);

  // Tanda tangan
  const ttdX = PAGE_W - MARGIN - 160;
  _text(ctx, 'Mengetahui,', MARGIN, footerY + 8, { size: 9, color: COLOR.muted });
  _text(ctx, 'Guru Bahasa Inggris', ttdX, footerY + 8, { size: 9, color: COLOR.muted });

  _text(ctx, '(                                    )', MARGIN, footerY + 42, { size: 9, color: COLOR.muted });
  _text(ctx, namaGuru || '(                                    )', ttdX, footerY + 42, { size: 9, color: COLOR.header, weight: 700 });

  // Catatan
  _text(ctx, '* L = Listening  ·  S = Speaking  ·  R = Reading  ·  Nilai = Rerata L+S+R',
    MARGIN, PAGE_H - MARGIN - 14, { size: 8, color: COLOR.muted });
}

// --- DOKUMEN 1: REKAP PER TP -------------------------------------------------

/**
 * generatePDFRekap — Rekap nilai L/S/R per TP per siswa
 * @param {{ namaSekolah, namaGuru, kelasNama, tpNomor, tpNama, siswaList }} opts
 */
export async function generatePDFRekap(opts) {
  const { tpNomor, tpNama, siswaList = [], namaGuru } = opts;

  const canvas = _createCanvas(PAGE_W, PAGE_H);
  const ctx    = _ctx(canvas);

  // Background
  _rect(ctx, 0, 0, PAGE_W, PAGE_H, COLOR.white);

  // Header
  const subjudul = `TP ${String(tpNomor).padStart(2,'0')} — ${tpNama}`;
  let y = _drawHeader(ctx, opts, 'Per Tujuan Pembelajaran (TP) · L / S / R', subjudul);

  // Kolom tabel
  const COL = {
    no    : { x: MARGIN,       w: 30,  label: 'No',      align: 'center' },
    nama  : { x: MARGIN + 30,  w: 200, label: 'Nama Siswa', align: 'left' },
    l     : { x: MARGIN + 230, w: 50,  label: 'L',       align: 'center' },
    s     : { x: MARGIN + 280, w: 50,  label: 'S',       align: 'center' },
    r     : { x: MARGIN + 330, w: 50,  label: 'R',       align: 'center' },
    nilai : { x: MARGIN + 380, w: 60,  label: 'Nilai',   align: 'center' },
    catatan: { x: MARGIN + 440, w: PAGE_W - MARGIN - 440 - MARGIN, label: 'Catatan', align: 'left' },
  };

  const ROW_H  = 24;
  const HEAD_H = 28;

  // Header tabel
  _rect(ctx, MARGIN, y, PAGE_W - MARGIN * 2, HEAD_H, '#1A1A1A');
  Object.values(COL).forEach(c => {
    _text(ctx, c.label, c.x + (c.align === 'center' ? c.w / 2 : 8), y + 8, {
      size: 9, weight: 700, color: COLOR.white, align: c.align === 'center' ? 'center' : 'left',
    });
  });

  // Sub-header keterangan
  const subY = y + HEAD_H;
  _rect(ctx, MARGIN, subY, PAGE_W - MARGIN * 2, 16, '#333333');
  _text(ctx, 'Listening', COL.l.x + COL.l.w / 2, subY + 3, { size: 7, color: '#AAAAAA', align: 'center' });
  _text(ctx, 'Speaking',  COL.s.x + COL.s.w / 2, subY + 3, { size: 7, color: '#AAAAAA', align: 'center' });
  _text(ctx, 'Reading',   COL.r.x + COL.r.w / 2, subY + 3, { size: 7, color: '#AAAAAA', align: 'center' });
  _text(ctx, 'Rerata Akhir', COL.nilai.x + COL.nilai.w / 2, subY + 3, { size: 7, color: '#AAAAAA', align: 'center' });

  y = subY + 16;

  // Baris data siswa
  siswaList.forEach((s, i) => {
    const rowY   = y + i * ROW_H;
    const isAlt  = i % 2 === 1;
    _rect(ctx, MARGIN, rowY, PAGE_W - MARGIN * 2, ROW_H, isAlt ? COLOR.rowAlt : COLOR.white);

    // Garis bawah baris
    _line(ctx, MARGIN, rowY + ROW_H, PAGE_W - MARGIN, rowY + ROW_H, COLOR.border);

    const cy = rowY + 6;

    _text(ctx, s.nomor,  COL.no.x + COL.no.w / 2, cy, { size: 9, align: 'center', color: COLOR.muted });
    _text(ctx, s.nama,   COL.nama.x + 8,            cy, { size: 10, weight: 700 });

    const valStr = (v) => v !== null && v !== undefined ? String(v) : '—';

    _text(ctx, valStr(s.l), COL.l.x + COL.l.w / 2, cy, { size: 10, align: 'center', color: _nilaiColor(s.l) });
    _text(ctx, valStr(s.s), COL.s.x + COL.s.w / 2, cy, { size: 10, align: 'center', color: _nilaiColor(s.s) });
    _text(ctx, valStr(s.r), COL.r.x + COL.r.w / 2, cy, { size: 10, align: 'center', color: _nilaiColor(s.r) });

    // Nilai akhir — lebih besar
    _text(ctx, valStr(s.nilai), COL.nilai.x + COL.nilai.w / 2, cy - 1, {
      size: 11, weight: 700, align: 'center', color: _nilaiColor(s.nilai),
    });

    // Catatan — potong jika terlalu panjang
    const catatan = String(s.catatan || '').slice(0, 55);
    _text(ctx, catatan, COL.catatan.x + 6, cy, { size: 8, color: COLOR.subhead });

    // Garis vertikal kolom
    Object.values(COL).forEach(c => {
      _line(ctx, c.x, y - HEAD_H - 16, c.x, rowY + ROW_H, COLOR.border, 0.3);
    });
    _line(ctx, PAGE_W - MARGIN, y - HEAD_H - 16, PAGE_W - MARGIN, rowY + ROW_H, COLOR.border, 0.3);
  });

  // Garis tepi tabel
  const tableBottom = y + siswaList.length * ROW_H;
  _rect(ctx, MARGIN, y - HEAD_H - 16, PAGE_W - MARGIN * 2, tableBottom - y + HEAD_H + 16, null, COLOR.border);

  // Statistik ringkas
  const nilaiValid = siswaList.filter(s => s.nilai !== null && s.nilai !== undefined).map(s => s.nilai);
  const rerata     = nilaiValid.length > 0 ? Math.round(nilaiValid.reduce((a,b) => a+b, 0) / nilaiValid.length) : null;
  const tertinggi  = nilaiValid.length > 0 ? Math.max(...nilaiValid) : null;
  const terendah   = nilaiValid.length > 0 ? Math.min(...nilaiValid) : null;

  const statY = tableBottom + 16;
  _rect(ctx, MARGIN, statY, PAGE_W - MARGIN * 2, 36, COLOR.rowAlt, COLOR.border);
  const statItems = [
    { label: 'Jumlah Siswa', val: siswaList.length },
    { label: 'Sudah Dinilai', val: nilaiValid.length },
    { label: 'Rerata Kelas', val: rerata ?? '—' },
    { label: 'Nilai Tertinggi', val: tertinggi ?? '—' },
    { label: 'Nilai Terendah', val: terendah ?? '—' },
  ];
  const sW = (PAGE_W - MARGIN * 2) / statItems.length;
  statItems.forEach((st, i) => {
    const sx = MARGIN + i * sW + 10;
    _text(ctx, st.label, sx, statY + 6, { size: 8, color: COLOR.muted });
    _text(ctx, String(st.val), sx, statY + 18, { size: 11, weight: 700, color: _nilaiColor(typeof st.val === 'number' ? st.val : null) });
  });

  // Footer
  _drawFooter(ctx, namaGuru);

  // Download
  const safeName = (opts.kelasNama || 'kelas').replace(/\s+/g, '_').toLowerCase();
  _triggerDownload(canvas, `FLAF_Nilai_TP${String(tpNomor).padStart(2,'0')}_${safeName}.png`);
}

// --- DOKUMEN 2: REKAP AKHIR SEMUA TP -----------------------------------------

/**
 * generatePDFRekap2 — Rekap nilai akhir semua TP per siswa
 * @param {{ namaSekolah, namaGuru, kelasNama, tingkat, siswaList }} opts
 * siswaList: Array<{ nomor, nama, tp: {[n]: number|null}, rerata }>
 */
export async function generatePDFRekap2(opts) {
  const { tingkat = 1, siswaList = [], namaGuru } = opts;
  const tpRange = tingkat === 2
    ? [10,11,12,13,14,15,16,17,18]
    : [1,2,3,4,5,6,7,8,9];

  // Landscape untuk banyak kolom
  const W      = PAGE_H;   // landscape: tukar W dan H
  const H      = PAGE_W;
  const canvas = _createCanvas(W, H);
  const ctx    = _ctx(canvas);

  _rect(ctx, 0, 0, W, H, COLOR.white);

  // Header (landscape)
  const optsL = { ...opts };
  _rect(ctx, MARGIN, MARGIN, W - MARGIN * 2, 4, COLOR.gold);
  _text(ctx, 'REKAPITULASI NILAI AKHIR', MARGIN, MARGIN + 14, { size: 14, weight: 700 });
  _text(ctx, `Fase A · Kelas ${opts.kelasNama || '—'} · Semua TP`, MARGIN, MARGIN + 32, { size: 11, color: COLOR.subhead });
  _text(ctx, new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    W - MARGIN, MARGIN + 14, { size: 9, color: COLOR.muted, align: 'right' });

  // Info strip
  const infoY = MARGIN + 54;
  _rect(ctx, MARGIN, infoY, W - MARGIN * 2, 44, COLOR.rowAlt, COLOR.border);
  const infoCols = [
    { label: 'Satuan Pendidikan', val: opts.namaSekolah || '—' },
    { label: 'Mata Pelajaran',    val: 'Bahasa Inggris' },
    { label: 'Fase / Kelas',      val: `Fase A / ${opts.kelasNama || '—'}` },
    { label: 'Guru',              val: opts.namaGuru || '—' },
  ];
  const icW = (W - MARGIN * 2) / infoCols.length;
  infoCols.forEach((c, i) => {
    const cx = MARGIN + i * icW + 10;
    _text(ctx, c.label, cx, infoY + 8,  { size: 8, color: COLOR.muted });
    _text(ctx, c.val,   cx, infoY + 22, { size: 10, weight: 700 });
    if (i > 0) _line(ctx, MARGIN + i * icW, infoY + 4, MARGIN + i * icW, infoY + 40);
  });

  let y = infoY + 56;

  // Kolom: No + Nama + TP1..TP9 + Rerata
  const noW    = 28;
  const namaW  = 180;
  const tpW    = 44;
  const rerataW = 52;
  const totalCols = 2 + tpRange.length + 1;
  const tableW = noW + namaW + tpRange.length * tpW + rerataW;
  const startX = MARGIN;

  const ROW_H  = 26;
  const HEAD_H = 30;

  // Header tabel
  _rect(ctx, startX, y, tableW, HEAD_H, '#1A1A1A');
  _text(ctx, 'No',   startX + noW / 2, y + 9, { size: 9, weight: 700, color: COLOR.white, align: 'center' });
  _text(ctx, 'Nama Siswa', startX + noW + 8, y + 9, { size: 9, weight: 700, color: COLOR.white });

  let tpX = startX + noW + namaW;
  tpRange.forEach(n => {
    _text(ctx, `TP${n}`, tpX + tpW / 2, y + 9, { size: 9, weight: 700, color: COLOR.white, align: 'center' });
    tpX += tpW;
  });
  _text(ctx, 'Rerata', tpX + rerataW / 2, y + 9, { size: 9, weight: 700, color: COLOR.white, align: 'center' });

  y += HEAD_H;

  // Baris siswa
  siswaList.forEach((s, i) => {
    const rowY = y + i * ROW_H;
    _rect(ctx, startX, rowY, tableW, ROW_H, i % 2 === 1 ? COLOR.rowAlt : COLOR.white);
    _line(ctx, startX, rowY + ROW_H, startX + tableW, rowY + ROW_H, COLOR.border, 0.3);

    const cy = rowY + 7;
    _text(ctx, s.nomor, startX + noW / 2, cy, { size: 9, color: COLOR.muted, align: 'center' });
    _text(ctx, s.nama,  startX + noW + 8, cy, { size: 10, weight: 700 });

    let tx = startX + noW + namaW;
    tpRange.forEach(n => {
      const v = s.tp?.[n] ?? null;
      _text(ctx, v !== null ? String(v) : '—', tx + tpW / 2, cy, {
        size: 9, align: 'center', color: _nilaiColor(v),
      });
      _line(ctx, tx, y - HEAD_H, tx, rowY + ROW_H, COLOR.border, 0.2);
      tx += tpW;
    });

    // Rerata
    _text(ctx, s.rerata !== null ? String(s.rerata) : '—', tx + rerataW / 2, cy - 1, {
      size: 11, weight: 700, align: 'center', color: _nilaiColor(s.rerata),
    });
    _line(ctx, tx, y - HEAD_H, tx, rowY + ROW_H, COLOR.border, 0.3);
  });

  // Garis tepi
  const tableBottom = y + siswaList.length * ROW_H;
  _rect(ctx, startX, y - HEAD_H, tableW, tableBottom - y + HEAD_H, null, COLOR.border);
  _line(ctx, startX + noW + namaW, y - HEAD_H, startX + noW + namaW, tableBottom, COLOR.border, 0.5);
  _line(ctx, startX + tableW - rerataW, y - HEAD_H, startX + tableW - rerataW, tableBottom, COLOR.border, 0.5);
  _line(ctx, startX + noW, y - HEAD_H, startX + noW, tableBottom, COLOR.border, 0.3);

  // Statistik
  const nilaiValid  = siswaList.map(s => s.rerata).filter(v => v !== null);
  const rerataKelas = nilaiValid.length > 0 ? Math.round(nilaiValid.reduce((a,b) => a+b, 0) / nilaiValid.length) : null;

  const stY = tableBottom + 14;
  _rect(ctx, MARGIN, stY, W - MARGIN * 2, 32, COLOR.rowAlt, COLOR.border);
  const sts = [
    { label: 'Jumlah Siswa',   val: siswaList.length },
    { label: 'Sudah Dinilai',  val: nilaiValid.length },
    { label: 'Rerata Kelas',   val: rerataKelas ?? '—' },
    { label: 'Nilai Tertinggi', val: nilaiValid.length ? Math.max(...nilaiValid) : '—' },
    { label: 'Nilai Terendah',  val: nilaiValid.length ? Math.min(...nilaiValid) : '—' },
  ];
  const stW = (W - MARGIN * 2) / sts.length;
  sts.forEach((st, i) => {
    const sx = MARGIN + i * stW + 10;
    _text(ctx, st.label,    sx, stY + 5,  { size: 8, color: COLOR.muted });
    _text(ctx, String(st.val), sx, stY + 17, { size: 10, weight: 700, color: _nilaiColor(typeof st.val === 'number' ? st.val : null) });
  });

  // Footer landscape
  const fY = H - MARGIN - 50;
  _line(ctx, MARGIN, fY, W - MARGIN, fY);
  _text(ctx, 'Mengetahui,', MARGIN, fY + 8, { size: 9, color: COLOR.muted });
  _text(ctx, 'Guru Bahasa Inggris', W - MARGIN - 160, fY + 8, { size: 9, color: COLOR.muted });
  _text(ctx, namaGuru || '(                                    )', W - MARGIN - 160, fY + 30, { size: 9, weight: 700 });
  _text(ctx, '(                                    )', MARGIN, fY + 30, { size: 9, color: COLOR.muted });
  _text(ctx, '* Nilai = Rerata L+S+R per TP  ·  — = Belum dinilai',
    MARGIN, H - MARGIN - 12, { size: 8, color: COLOR.muted });

  // Download
  const safeName = (opts.kelasNama || 'kelas').replace(/\s+/g, '_').toLowerCase();
  _triggerDownload(canvas, `FLAF_Rekap_Akhir_${safeName}.png`);
}

// --- DOKUMEN 3: REKAP NILAI RAPOR --------------------------------------------

/**
 * generatePDFRapor — Rekap Nilai Rapor (S + AS) ÷ 2
 * @param {{ namaSekolah, namaGuru, kelasNama, tingkat, siswaList }} opts
 * siswaList: Array<{ nomor, nama, tp, s, sas, rapor }>
 */
export async function generatePDFRapor(opts) {
  const { tingkat = 1, siswaList = [], namaGuru } = opts;
  const tpRange = tingkat === 2
    ? [10,11,12,13,14,15,16,17,18]
    : [1,2,3,4,5,6,7,8,9];

  // Landscape
  const W      = PAGE_H;
  const H      = PAGE_W;
  const canvas = _createCanvas(W, H);
  const ctx    = _ctx(canvas);
  _rect(ctx, 0, 0, W, H, COLOR.white);

  // Garis atas
  _rect(ctx, MARGIN, MARGIN, W - MARGIN * 2, 4, COLOR.gold);

  // Judul
  _text(ctx, 'REKAP NILAI RAPOR', MARGIN, MARGIN + 14, { size: 14, weight: 700 });
  _text(ctx, 'Kurikulum Merdeka · Rumus: (S + AS) ÷ 2', MARGIN, MARGIN + 32, { size: 11, color: COLOR.subhead });
  _text(ctx, new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    W - MARGIN, MARGIN + 14, { size: 9, color: COLOR.muted, align: 'right' });

  // Info strip
  const infoY = MARGIN + 54;
  _rect(ctx, MARGIN, infoY, W - MARGIN * 2, 44, COLOR.rowAlt, COLOR.border);
  const infoCols = [
    { label: 'Satuan Pendidikan', val: opts.namaSekolah || '—' },
    { label: 'Mata Pelajaran',    val: 'Bahasa Inggris' },
    { label: 'Fase / Kelas',      val: `Fase A / ${opts.kelasNama || '—'}` },
    { label: 'Guru',              val: opts.namaGuru || '—' },
  ];
  const icW = (W - MARGIN * 2) / infoCols.length;
  infoCols.forEach((c, i) => {
    const cx = MARGIN + i * icW + 10;
    _text(ctx, c.label, cx, infoY + 8,  { size: 8, color: COLOR.muted });
    _text(ctx, c.val,   cx, infoY + 22, { size: 10, weight: 700 });
    if (i > 0) _line(ctx, MARGIN + i * icW, infoY + 4, MARGIN + i * icW, infoY + 40);
  });

  // Keterangan rumus
  _text(ctx, 'S = Rerata Sumatif Lingkup Materi semua TP   ·   AS = Sumatif Akhir Semester   ·   Nilai Rapor = (S + AS) ÷ 2',
    MARGIN, infoY + 52, { size: 9, color: COLOR.muted });
  _text(ctx, '* Nilai rapor di bawah bersifat referensi — guru tetap memiliki kewenangan penuh dalam penentuan nilai akhir.',
    MARGIN, infoY + 64, { size: 8, color: COLOR.gold });

  let y = infoY + 82;

  // Kolom tabel
  const noW    = 28;
  const namaW  = 160;
  const tpW    = 36;
  const sW     = 44;
  const asW    = 44;
  const raporW = 54;
  const tableW = noW + namaW + tpRange.length * tpW + sW + asW + raporW;
  const ROW_H  = 26;
  const HEAD_H = 30;

  // Header tabel
  _rect(ctx, MARGIN, y, tableW, HEAD_H, '#1A1A1A');
  _text(ctx, 'No',   MARGIN + noW / 2,              y + 9, { size: 9, weight: 700, color: COLOR.white, align: 'center' });
  _text(ctx, 'Nama', MARGIN + noW + 8,              y + 9, { size: 9, weight: 700, color: COLOR.white });
  let tpX = MARGIN + noW + namaW;
  tpRange.forEach(n => {
    _text(ctx, `TP${n}`, tpX + tpW / 2, y + 9, { size: 8, weight: 700, color: COLOR.white, align: 'center' });
    tpX += tpW;
  });
  _text(ctx, 'S',       tpX + sW / 2,              y + 9, { size: 9, weight: 700, color: '#FAC775', align: 'center' });
  _text(ctx, 'AS',      tpX + sW + asW / 2,        y + 9, { size: 9, weight: 700, color: '#9FE1CB', align: 'center' });
  _text(ctx, 'Rapor',   tpX + sW + asW + raporW/2, y + 9, { size: 9, weight: 700, color: '#FCDE5A', align: 'center' });

  y += HEAD_H;

  // Baris siswa
  siswaList.forEach((s, i) => {
    const rowY = y + i * ROW_H;
    _rect(ctx, MARGIN, rowY, tableW, ROW_H, i % 2 === 1 ? COLOR.rowAlt : COLOR.white);
    _line(ctx, MARGIN, rowY + ROW_H, MARGIN + tableW, rowY + ROW_H, COLOR.border, 0.3);

    const cy  = rowY + 7;
    const val = (v) => v !== null && v !== undefined ? String(v) : '—';

    _text(ctx, s.nomor, MARGIN + noW / 2, cy, { size: 9, color: COLOR.muted, align: 'center' });
    _text(ctx, s.nama,  MARGIN + noW + 8, cy, { size: 10, weight: 700 });

    let tx = MARGIN + noW + namaW;
    tpRange.forEach(n => {
      const v = s.tp?.[n] ?? null;
      _text(ctx, val(v), tx + tpW / 2, cy, { size: 8, align: 'center', color: _nilaiColor(v) });
      _line(ctx, tx, y - HEAD_H, tx, rowY + ROW_H, COLOR.border, 0.2);
      tx += tpW;
    });

    // S
    _text(ctx, val(s.s), tx + sW / 2, cy, { size: 10, weight: 700, align: 'center', color: _nilaiColor(s.s) });
    _line(ctx, tx, y - HEAD_H, tx, rowY + ROW_H, COLOR.border, 0.5);
    tx += sW;

    // AS
    _text(ctx, val(s.sas), tx + asW / 2, cy, { size: 10, weight: 700, align: 'center', color: _nilaiColor(s.sas) });
    _line(ctx, tx, y - HEAD_H, tx, rowY + ROW_H, COLOR.border, 0.5);
    tx += asW;

    // Rapor — paling besar, kotak latar
    if (s.rapor !== null) {
      _rect(ctx, tx + 4, rowY + 3, raporW - 8, ROW_H - 6, _nilaiColor(s.rapor) + '22');
    }
    _text(ctx, val(s.rapor), tx + raporW / 2, cy - 1, {
      size: 12, weight: 700, align: 'center', color: _nilaiColor(s.rapor),
    });
    _line(ctx, tx, y - HEAD_H, tx, rowY + ROW_H, COLOR.border, 0.5);
  });

  // Garis tepi
  const tableBottom = y + siswaList.length * ROW_H;
  _rect(ctx, MARGIN, y - HEAD_H, tableW, tableBottom - y + HEAD_H, null, COLOR.border);
  _line(ctx, MARGIN + noW + namaW, y - HEAD_H, MARGIN + noW + namaW, tableBottom, COLOR.border, 0.3);

  // Statistik
  const raporValid  = siswaList.map(s => s.rapor).filter(v => v !== null);
  const rerataRapor = raporValid.length > 0 ? Math.round(raporValid.reduce((a,b) => a+b,0) / raporValid.length) : null;
  const stY = tableBottom + 14;
  _rect(ctx, MARGIN, stY, W - MARGIN * 2, 32, COLOR.rowAlt, COLOR.border);
  const sts = [
    { label: 'Jumlah Siswa',    val: siswaList.length },
    { label: 'Sudah Dinilai',   val: raporValid.length },
    { label: 'Rerata Rapor',    val: rerataRapor ?? '—' },
    { label: 'Nilai Tertinggi', val: raporValid.length ? Math.max(...raporValid) : '—' },
    { label: 'Nilai Terendah',  val: raporValid.length ? Math.min(...raporValid) : '—' },
  ];
  const stW = (W - MARGIN * 2) / sts.length;
  sts.forEach((st, i) => {
    const sx = MARGIN + i * stW + 10;
    _text(ctx, st.label,      sx, stY + 5,  { size: 8, color: COLOR.muted });
    _text(ctx, String(st.val), sx, stY + 17, { size: 10, weight: 700, color: _nilaiColor(typeof st.val === 'number' ? st.val : null) });
  });

  // Footer
  const fY = H - MARGIN - 50;
  _line(ctx, MARGIN, fY, W - MARGIN, fY);
  _text(ctx, 'Mengetahui,', MARGIN, fY + 8, { size: 9, color: COLOR.muted });
  _text(ctx, 'Guru Bahasa Inggris', W - MARGIN - 160, fY + 8, { size: 9, color: COLOR.muted });
  _text(ctx, namaGuru || '(                                    )', W - MARGIN - 160, fY + 30, { size: 9, weight: 700 });
  _text(ctx, '(                                    )', MARGIN, fY + 30, { size: 9, color: COLOR.muted });
  _text(ctx, 'S = Rerata Sumatif Lingkup Materi  ·  AS = Sumatif Akhir Semester  ·  Nilai Rapor = (S + AS) ÷ 2  ·  Kurikulum Merdeka',
    MARGIN, H - MARGIN - 12, { size: 8, color: COLOR.muted });

  const safeName = (opts.kelasNama || 'kelas').replace(/\s+/g, '_').toLowerCase();
  _triggerDownload(canvas, `FLAF_Nilai_Rapor_${safeName}.png`);
}
