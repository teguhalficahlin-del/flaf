/**
 * printables.js
 * Generator HTML lembar cetak kartu per TP.
 * Dipanggil dari dashboard.js saat guru klik tombol cetak.
 */

const PRINTABLES_BASE = 'assets/images/printables/';

/**
 * Generate HTML lembar cetak untuk satu TP.
 * @param {Object} tp - object TP dari fase-a.js
 * @returns {string} HTML string siap di-inject ke print window
 */
export function generatePrintHTML(tp) {
  if (!tp.printables || tp.printables.length === 0) return null;

  const cards = tp.printables.map(item => `
    <div class="print-card">
      <img src="${PRINTABLES_BASE}${item.file}" alt="${item.label}" />
      <div class="print-card-label">${item.label}</div>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Kartu Cetak — ${tp.judul}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: Arial, sans-serif;
      background: white;
      padding: 12mm;
    }

    .print-header {
      border-bottom: 2px solid #111;
      padding-bottom: 8px;
      margin-bottom: 16px;
    }

    .print-header-label {
      font-size: 10px;
      letter-spacing: .08em;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 2px;
    }

    .print-header-title {
      font-size: 18px;
      font-weight: 700;
      color: #111;
    }

    .print-header-sub {
      font-size: 12px;
      color: #555;
      margin-top: 2px;
    }

    .print-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
    }

    .print-card {
      border: 1.5px solid #ddd;
      border-radius: 6px;
      overflow: hidden;
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .print-card img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      display: block;
    }

    .print-card-label {
      font-size: 10px;
      text-align: center;
      padding: 4px 4px 6px;
      color: #333;
      font-weight: 600;
      border-top: 1px solid #eee;
    }

    .print-footer {
      margin-top: 12px;
      border-top: 1px solid #ddd;
      padding-top: 8px;
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: #aaa;
    }

    .print-scissors {
      font-size: 10px;
      color: #aaa;
      text-align: center;
      margin-bottom: 8px;
      letter-spacing: .05em;
    }

    @media print {
      body { padding: 8mm; }
      .print-card { border-color: #ccc; }
    }
  </style>
</head>
<body>

  <div class="print-header">
    <div class="print-header-label">Kartu Cetak Guru — FLAF</div>
    <div class="print-header-title">${tp.nama}</div>
    <div class="print-header-sub">TP ${String(tp.nomor).padStart(2,'0')} &mdash; ${tp.printables.length} kartu</div>
  </div>

  <div class="print-scissors">✂ Gunting sepanjang garis kartu</div>

  <div class="print-grid">
    ${cards}
  </div>

  <div class="print-footer">
    <span>FLAF &mdash; Bahasa Inggris Fase A</span>
    <span>Dicetak ${new Date().toLocaleDateString('id-ID')}</span>
  </div>

  <script>
    window.onload = function() { window.print(); }
  </script>

</body>
</html>`;
}
