'use strict';

/**
 * tools/batch-convert.js
 * Batch convert docs/skenario/flaf-skenario-tp{NN}-v2.txt → docs/output-v5/tp-{NN}-v5.js
 * Parser functions extracted from tools/converter.html (same logic, no DOM deps).
 *
 * Usage:
 *   node tools/batch-convert.js              — convert TP01–14
 *   node tools/batch-convert.js --all        — convert TP01–18
 */

const fs   = require('fs');
const path = require('path');

const ROOT         = path.join(__dirname, '..');
const SKENARIO_DIR = path.join(ROOT, 'docs', 'skenario');
const OUTPUT_DIR   = path.join(ROOT, 'docs', 'output-v5');

const convertAll = process.argv.includes('--all');
const MAX_TP     = convertAll ? 18 : 14;

// ─────────────────────────────────────────────────────────────
// Parser (identical to tools/converter.html — keep in sync)
// ─────────────────────────────────────────────────────────────

function parseSkenario(text) {
  const warnings = [];

  // 1. Header
  const headerMatch = text.match(/^TP\s+(\d+)\s*[—\-]+\s*(.+)/m);
  if (!headerMatch) {
    throw new Error('Format tidak dikenali — baris "TP N — JUDUL" tidak ditemukan di awal file');
  }
  const nomor    = parseInt(headerMatch[1], 10);
  const nPad     = String(nomor).padStart(2, '0');
  const nama     = toTitleCase(headerMatch[2].trim());
  const id       = `tp-${nPad}`;
  const varName  = `TP_${nPad}`;
  const filename = `tp-${nPad}-v5.js`;

  const temaMatch = text.match(/^Tema:\s*(.+)/m);
  const tema = temaMatch ? temaMatch[1].trim() : '';
  if (!tema) warnings.push('Baris "Tema:" tidak ditemukan — field tema akan kosong');

  // 2. Split into blocks by ════ dividers
  const blocks = text.split(/═{3,}/);

  // 3. Parse layers
  const layers = [];
  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;
    const firstLine = trimmed.split('\n')[0].trim();
    if (/^LAYAR\s+\d+/.test(firstLine)) {
      layers.push(parseLayer(trimmed));
    }
  }

  if (layers.length === 0) {
    throw new Error('Tidak ada LAYAR yang terdeteksi — pastikan file menggunakan format flaf-skenario-tp{N}-v2.txt');
  }

  // 4. Parse checklist
  const checklist = [];
  for (const line of text.split('\n')) {
    const t = line.trim();
    if (t.startsWith('[ ] ') || t === '[ ]') {
      checklist.push(t.slice(4).trim());
    }
  }
  if (checklist.length === 0) {
    warnings.push('✅ CHECKLIST tidak ditemukan — field checklist akan kosong');
  }

  // 5. Parse catatan
  const catatan = parseCatatan(text, warnings);

  // 6. Build energi_map from layer headers
  const energi_map = layers.map(l => `L${l.num} ${l.energi}`);

  // 7. Group into skenario phases
  const skenario = buildSkenario(layers);

  // 8. Content warnings
  layers.forEach(l => {
    if (!l.teks.trim()) {
      warnings.push(`L${l.num}: teks kosong — periksa blok layar ini`);
    }
  });
  warnings.push('durasi fase diset default (Pembuka=10, Inti=30, Penutup=10) — verifikasi manual jika berbeda');
  warnings.push('kelas / deskripsi / indikator / vocab / persiapan / media / printables harus diisi manual');

  return { nomor, nPad, id, varName, filename, nama, tema, checklist, energi_map, catatan, skenario, warnings };
}

function parseLayer(blockText) {
  const lines = blockText.split('\n').map(l => l.trimEnd());

  const nonEmpty    = lines.filter(l => l.trim());
  const headerLine  = nonEmpty[0] || '';
  const energiLine  = nonEmpty[1] || '';

  const numMatch = headerLine.match(/^LAYAR\s+(\d+)/);
  const num = numMatch ? parseInt(numMatch[1], 10) : -1;

  const afterDash = headerLine.replace(/^LAYAR\s+\d+\s*[—\-]+\s*/, '');
  const category  = afterDash.split(/\s*·\s*/)[0].trim();

  const energi = extractEnergi(energiLine);

  let nonEmptyFound = 0;
  let contentStart  = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim()) {
      nonEmptyFound++;
      if (nonEmptyFound === 2) { contentStart = i + 1; break; }
    }
  }
  const contentLines = lines.slice(contentStart);

  const teksLines = [];
  const bantuan   = [];
  let cue     = null;
  let darurat = null;

  const BANTUAN_RE = /^BANTUAN\s*[▸►]\s*/;
  const CUE_RE     = /^[⚡★]\s*Cue kritis:\s*/i;
  const DARURAT_RE = /^[⚠⛔]\s*DARURAT:\s*/i;

  for (const line of contentLines) {
    const t = line.trim();
    if (!t || t === '---') continue;

    if (BANTUAN_RE.test(t)) {
      const text = t.replace(BANTUAN_RE, '').trim();
      if (text) bantuan.push(text);
    } else if (CUE_RE.test(t)) {
      cue = t.replace(CUE_RE, '').trim();
    } else if (DARURAT_RE.test(t)) {
      darurat = t.replace(DARURAT_RE, '').trim();
    } else {
      teksLines.push(t);
    }
  }

  const teks = teksLines.join(' ').replace(/\s{2,}/g, ' ').trim();

  const bantuanVal =
    bantuan.length === 0 ? null :
    bantuan.length === 1 ? bantuan[0] :
    bantuan;

  const fase = determineFase(category);

  return { num, fase, energi, teks, bantuan: bantuanVal, cue, darurat };
}

function determineFase(category) {
  const u = category.toUpperCase();
  if (u.includes('PEMBUKA') || u.includes('PRE-OPENING')) return 'Pembuka';
  if (u.includes('PENUTUP')) return 'Penutup';
  return 'Inti';
}

function extractEnergi(line) {
  return line
    .replace(/\b[A-Za-z]+\b/g, '')
    .replace(/\s*→\s*/g, ' → ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseCatatan(text, warnings) {
  const risiko   = [];
  const autonomy = [];

  const BULLET_RE = /^[·•‧]\s*/;

  const risikoMatch = text.match(/Risiko pacing:\s*\n([\s\S]*?)(?:Teacher autonomy:|[═]{3,}|$)/);
  if (risikoMatch) {
    for (const l of risikoMatch[1].split('\n')) {
      const t = l.trim();
      if (BULLET_RE.test(t)) risiko.push(t.replace(BULLET_RE, ''));
    }
  } else {
    warnings.push('"Risiko pacing:" tidak ditemukan di CATATAN RUNTIME GURU');
  }

  const autoMatch = text.match(/Teacher autonomy:\s*\n([\s\S]*?)(?:[═]{3,}|$)/);
  if (autoMatch) {
    for (const l of autoMatch[1].split('\n')) {
      const t = l.trim();
      if (BULLET_RE.test(t)) autonomy.push(t.replace(BULLET_RE, ''));
    }
  } else {
    warnings.push('"Teacher autonomy:" tidak ditemukan di CATATAN RUNTIME GURU');
  }

  return { risiko, autonomy };
}

function buildSkenario(layers) {
  const defaultDurasi = { Pembuka: 10, Inti: 30, Penutup: 10 };
  const groups   = [];
  let curFase    = null;
  let curLangkah = [];

  for (const lk of layers) {
    if (lk.fase !== curFase) {
      if (curFase !== null) {
        groups.push({ fase: curFase, durasi: defaultDurasi[curFase] ?? 10, langkah: curLangkah });
      }
      curFase    = lk.fase;
      curLangkah = [lk];
    } else {
      curLangkah.push(lk);
    }
  }
  if (curFase !== null) {
    groups.push({ fase: curFase, durasi: defaultDurasi[curFase] ?? 10, langkah: curLangkah });
  }

  return groups;
}

function toTitleCase(str) {
  const small = new Set(['and','or','the','in','of','a','an','to','for','with','at','by','from','but','as']);
  return str.toLowerCase().split(/\s+/).map((w, i) =>
    (i === 0 || !small.has(w)) ? w.charAt(0).toUpperCase() + w.slice(1) : w
  ).join(' ');
}

// ─────────────────────────────────────────────────────────────
// Code generator
// ─────────────────────────────────────────────────────────────

function generateJS(data) {
  const { nomor, nPad, id, varName, filename, nama, tema, checklist, energi_map, catatan, skenario } = data;
  const today = new Date().toISOString().slice(0, 10);

  const out = [];

  out.push(`/**`);
  out.push(` * =============================================================`);
  out.push(` * FLAF — TP ${nomor} (${nama})`);
  out.push(` * File: ${filename}`);
  out.push(` * Format: v5.0`);
  out.push(` * Source: flaf-skenario-tp${nPad}-v2.txt`);
  out.push(` * Generated: ${today}`);
  out.push(` * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables`);
  out.push(` *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.`);
  out.push(` * =============================================================`);
  out.push(` */`);
  out.push(``);
  out.push(`const ${varName} = {`);
  out.push(``);
  out.push(`  id       : '${id}',`);
  out.push(`  nomor    : ${nomor},`);
  out.push(`  kelas    : 0,          // TODO: isi manual`);
  out.push(`  nama     : ${sq(nama)},`);
  out.push(`  tema     : ${sq(tema)},`);
  out.push(`  deskripsi: '',         // TODO: isi manual`);
  out.push(``);
  out.push(`  indikator: [],         // TODO: isi manual`);
  out.push(`  vocab    : [],         // TODO: isi manual`);
  out.push(`  persiapan: [],         // TODO: isi manual`);
  out.push(`  media    : [],         // TODO: isi manual`);
  out.push(`  printables: [],        // TODO: isi manual`);
  out.push(``);
  out.push(`  checklist: [`);
  for (const item of checklist) out.push(`    ${sq(item)},`);
  out.push(`  ],`);
  out.push(``);
  out.push(`  energi_map: [`);
  for (const e of energi_map) out.push(`    ${sq(e)},`);
  out.push(`  ],`);
  out.push(``);
  out.push(`  catatan: {`);
  out.push(`    risiko: [`);
  for (const r of catatan.risiko) out.push(`      ${sq(r)},`);
  out.push(`    ],`);
  out.push(`    autonomy: [`);
  for (const a of catatan.autonomy) out.push(`      ${sq(a)},`);
  out.push(`    ],`);
  out.push(`  },`);
  out.push(``);
  out.push(`  skenario: [`);
  out.push(``);

  for (const fase of skenario) {
    out.push(`    {`);
    out.push(`      fase  : ${sq(fase.fase)},`);
    out.push(`      durasi: ${fase.durasi},  // TODO: verifikasi`);
    out.push(``);
    out.push(`      langkah: [`);
    out.push(``);

    for (const lk of fase.langkah) {
      out.push(`        // L${lk.num} — ${fase.fase.toUpperCase()}`);
      out.push(`        {`);
      out.push(`          tipe   : 'instruksi',`);
      out.push(`          teks   : ${tl(lk.teks)},`);
      out.push(`          bantuan: ${fmtBantuan(lk.bantuan)},`);
      out.push(`          cue    : ${fmtNullable(lk.cue)},`);
      out.push(`          darurat: ${fmtNullable(lk.darurat)},`);
      out.push(`          energi : ${sq(lk.energi)},`);
      out.push(`        },`);
      out.push(``);
    }

    out.push(`      ],`);
    out.push(`    },`);
    out.push(``);
  }

  out.push(`  ],`);
  out.push(``);
  out.push(`};`);
  out.push(``);
  out.push(`export default ${varName};`);
  out.push(``);

  return out.join('\n');
}

// ─────────────────────────────────────────────────────────────
// String helpers
// ─────────────────────────────────────────────────────────────

function sq(str) {
  if (str === null || str === undefined) return 'null';
  return "'" + String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
}

function tl(str) {
  if (!str) return "''";
  const escaped = String(str)
    .replace(/\\/g, '\\\\')
    .replace(/`/g,  '\\`')
    .replace(/\$\{/g, '\\${');
  return '`' + escaped + '`';
}

function fmtNullable(val) {
  return (val === null || val === undefined) ? 'null' : sq(val);
}

function fmtBantuan(val) {
  if (val === null || val === undefined) return 'null';
  if (Array.isArray(val)) {
    const items = val.map(v => `            ${sq(v)},`).join('\n');
    return `[\n${items}\n          ]`;
  }
  return sq(val);
}

// ─────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const files = fs.readdirSync(SKENARIO_DIR)
  .filter(f => {
    if (!f.endsWith('-v2.txt')) return false;
    const m = f.match(/tp(\d+)-v2\.txt$/);
    if (!m) return false;
    const n = parseInt(m[1], 10);
    return n >= 1 && n <= MAX_TP;
  })
  .sort();

if (files.length === 0) {
  console.error('Tidak ada file yang cocok di', SKENARIO_DIR);
  process.exit(1);
}

let ok = 0;
let fail = 0;

for (const file of files) {
  try {
    const text = fs.readFileSync(path.join(SKENARIO_DIR, file), 'utf8');
    const data = parseSkenario(text);
    const js   = generateJS(data);
    const out  = path.join(OUTPUT_DIR, data.filename);
    fs.writeFileSync(out, js, 'utf8');

    const warnCount = data.warnings.length;
    const warnLabel = warnCount > 0 ? ` (${warnCount} warnings)` : '';
    console.log(`✅  ${file.padEnd(38)} → ${data.filename}${warnLabel}`);

    const faseList = data.skenario.map(f => `${f.fase}:${f.langkah.length}`).join(' + ');
    console.log(`    langkah: ${faseList} | checklist: ${data.checklist.length} | energi_map: ${data.energi_map.length}`);
    ok++;
  } catch (err) {
    console.error(`❌  ${file}: ${err.message}`);
    fail++;
  }
}

console.log(`\n${ok} file berhasil, ${fail} gagal → ${OUTPUT_DIR}`);
