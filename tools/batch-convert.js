'use strict';
/**
 * tools/batch-convert.js — FLAF Batch Skenario Converter
 *
 * Node.js (CommonJS) port of tools/converter.html parser.
 * Processes all docs/skenario/flaf-skenario-tp*-v2.txt
 * and writes to docs/output-v5/tp-{N}-v5.js.
 *
 * Changes from converter.html:
 *   - parseLayer(): DARURAT_RE fixed to also match em-dash variant (⚠ DARURAT —)
 *   - generateJS(): accepts optional `manual` param to preserve existing fields
 *   - Added: batch file I/O loop + manual-field preservation
 *
 * Preserved fields (if already non-default in the existing output file):
 *   kelas, deskripsi, indikator, vocab, persiapan, media, printables
 *
 * Usage:
 *   node tools/batch-convert.js          # process all TP (all *-v2.txt found)
 *   node tools/batch-convert.js 8        # process TP 8 only
 */

const fs   = require('fs');
const path = require('path');

const ROOT     = path.resolve(__dirname, '..');
const SKENARIO = path.join(ROOT, 'docs', 'skenario');
const OUTPUT   = path.join(ROOT, 'docs', 'output-v5');

// ═════════════════════════════════════════════════════════════════════════════
// Parser — ported verbatim from tools/converter.html
// (Only change: DARURAT_RE / DARURAT_STRIP in parseLayer, documented inline)
// ═════════════════════════════════════════════════════════════════════════════

function toTitleCase(str) {
  const small = new Set(['and','or','the','in','of','a','an','to','for','with','at','by','from','but','as']);
  return str.toLowerCase().split(/\s+/).map((w, i) =>
    (i === 0 || !small.has(w)) ? w.charAt(0).toUpperCase() + w.slice(1) : w
  ).join(' ');
}

function extractEnergi(line) {
  return line
    .replace(/\b[A-Za-z]+\b/g, '')
    .replace(/\s*→\s*/g, ' → ')
    .replace(/\s+/g, ' ')
    .trim();
}

function determineFase(category) {
  const u = category.toUpperCase();
  if (u.includes('PEMBUKA') || u.includes('PRE-OPENING')) return 'Pembuka';
  if (u.includes('PENUTUP'))                               return 'Penutup';
  return 'Inti';
}

function parseLayer(blockText) {
  const lines = blockText.split('\n').map(l => l.trimEnd());

  const nonEmpty   = lines.filter(l => l.trim());
  const headerLine = nonEmpty[0] || '';
  const energiLine = nonEmpty[1] || '';

  const numMatch = headerLine.match(/^LAYAR\s+(\d+)/);
  const num      = numMatch ? parseInt(numMatch[1], 10) : -1;

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

  // FIX vs converter.html:
  //   Original DARURAT_RE: /^[⚠⛔]\s*DARURAT:\s*/i
  //   Only matched "⚠ DARURAT: …" (colon variant).
  //   TP08+ use em-dash: "⚠ DARURAT — …" which fell through to teksLines,
  //   embedding the full DARURAT sentence into the instruction teks field.
  //   New pattern matches colon (:), em-dash (—), en-dash (–), or hyphen (-).
  //   DARURAT_STRIP (for replacement) greedily consumes all separator chars.
  const DARURAT_RE    = /^[⚠⛔]\s*DARURAT[\s:—–-]/i;
  const DARURAT_STRIP = /^[⚠⛔]\s*DARURAT[\s:—–-]+\s*/i;

  let lastWas = null;  // tracks last special marker: 'darurat' | null

  for (const line of contentLines) {
    const t = line.trim();

    // Empty / separator line — reset continuation flag, skip
    if (!t || t === '---') {
      lastWas = null;
      continue;
    }

    if (BANTUAN_RE.test(t)) {
      lastWas = null;
      const text = t.replace(BANTUAN_RE, '').trim();
      if (text) bantuan.push(text);
    } else if (CUE_RE.test(t)) {
      lastWas = null;
      cue = t.replace(CUE_RE, '').trim();
    } else if (DARURAT_RE.test(t)) {
      darurat  = t.replace(DARURAT_STRIP, '').trim();
      lastWas  = 'darurat';
    } else if (lastWas === 'darurat') {
      // Continuation line of a multi-line DARURAT — append to darurat, not teks
      darurat = (darurat ? darurat + ' ' : '') + t;
    } else {
      teksLines.push(t);
    }
  }

  const teks       = teksLines.join(' ').replace(/\s{2,}/g, ' ').trim();
  const bantuanVal = bantuan.length === 0 ? null :
                     bantuan.length === 1 ? bantuan[0] :
                     bantuan;
  const fase       = determineFase(category);

  return { num, fase, energi, teks, bantuan: bantuanVal, cue, darurat };
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
  const defaultDurasi = { 'Pembuka': 10, 'Inti': 30, 'Penutup': 10 };
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
  const tema      = temaMatch ? temaMatch[1].trim() : '';
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

  // 4. Parse checklist (scan full text)
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

  // 5. Parse catatan (scan full text)
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
  warnings.push(
    'durasi fase diset default (Pembuka=10, Inti=30, Penutup=10) — verifikasi manual jika berbeda'
  );
  warnings.push(
    'kelas / deskripsi / indikator / vocab / persiapan / media / printables harus diisi manual'
  );

  return { nomor, nPad, id, varName, filename, nama, tema, checklist, energi_map, catatan, skenario, warnings };
}

// ═════════════════════════════════════════════════════════════════════════════
// String helpers — ported verbatim from tools/converter.html
// ═════════════════════════════════════════════════════════════════════════════

/** Single-quoted JS string literal — escapes \ and ' */
function sq(str) {
  if (str === null || str === undefined) return 'null';
  return "'" + String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
}

/** Template literal — escapes ` and ${ */
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

// ═════════════════════════════════════════════════════════════════════════════
// Manual field preservation
// ═════════════════════════════════════════════════════════════════════════════

/**
 * Read manually-filled fields from an existing output file.
 * Returns only fields that differ from the TODO placeholder defaults.
 *
 * Scalar defaults treated as "not set":  kelas=0, deskripsi='' or ""
 * Array  defaults treated as "not set":  any field = []
 *
 * @param {string} text  — content of existing tp-{N}-v5.js
 * @returns {object}     — subset of { kelas, deskripsi, indikator, vocab, persiapan, media, printables }
 */
function extractManualFields(text) {
  const fields = {};

  // ── Scalar fields ──────────────────────────────────────────────────────────
  const scalars = [
    { name: 'pdf_ref',   defaults: [] },          // always preserve if present
    { name: 'kelas',     defaults: ['0'] },
    { name: 'deskripsi', defaults: ["''", '""'] },
  ];
  for (const { name, defaults } of scalars) {
    const re = new RegExp(`^\\s*${name}\\s*:\\s*(.+)`, 'm');
    const m  = re.exec(text);
    if (!m) continue;
    let raw = m[1].trim();
    // Strip inline comment FIRST, then all trailing commas
    raw = raw.replace(/\s*\/\/.*$/, '').trim();
    raw = raw.replace(/,+$/, '').trim();
    if (!defaults.includes(raw)) fields[name] = raw;
  }

  // ── Array fields ───────────────────────────────────────────────────────────
  for (const name of ['indikator', 'vocab', 'persiapan', 'media', 'printables']) {
    const re = new RegExp(`^\\s*${name}\\s*:\\s*`, 'm');
    const m  = re.exec(text);
    if (!m) continue;
    const start = m.index + m[0].length;
    const sub   = text.slice(start);
    if (!sub.startsWith('[')) continue;
    // Bracket-match to find the closing ]
    let depth = 0, i = 0;
    for (; i < sub.length; i++) {
      if      (sub[i] === '[') depth++;
      else if (sub[i] === ']') { depth--; if (depth === 0) { i++; break; } }
    }
    const raw = sub.slice(0, i).trim();
    if (raw !== '[]') fields[name] = raw;
  }

  return fields;
}

// ═════════════════════════════════════════════════════════════════════════════
// Code generator — ported from tools/converter.html, adds `manual` param
// ═════════════════════════════════════════════════════════════════════════════

/**
 * @param {object} data     — from parseSkenario()
 * @param {object} manual   — from extractManualFields(), may be {}
 * @returns {string}        — JS source for the output file
 */
function generateJS(data, manual = {}) {
  const { nomor, nPad, id, varName, filename, nama, tema,
          checklist, energi_map, catatan, skenario } = data;
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
  if (manual.pdf_ref !== undefined) {
    out.push(`  pdf_ref  : ${manual.pdf_ref},`);
  }
  out.push(`  nomor    : ${nomor},`);

  if (manual.kelas !== undefined) {
    out.push(`  kelas    : ${manual.kelas},`);
  } else {
    out.push(`  kelas    : 0,          // TODO: isi manual`);
  }

  out.push(`  nama     : ${sq(nama)},`);
  out.push(`  tema     : ${sq(tema)},`);

  if (manual.deskripsi !== undefined) {
    out.push(`  deskripsi: ${manual.deskripsi},`);
  } else {
    out.push(`  deskripsi: '',         // TODO: isi manual`);
  }

  out.push(``);

  if (manual.indikator !== undefined) {
    out.push(`  indikator: ${manual.indikator},`);
  } else {
    out.push(`  indikator: [],         // TODO: isi manual`);
  }

  if (manual.vocab !== undefined) {
    out.push(`  vocab    : ${manual.vocab},`);
  } else {
    out.push(`  vocab    : [],         // TODO: isi manual`);
  }

  if (manual.persiapan !== undefined) {
    out.push(`  persiapan: ${manual.persiapan},`);
  } else {
    out.push(`  persiapan: [],         // TODO: isi manual`);
  }

  if (manual.media !== undefined) {
    out.push(`  media    : ${manual.media},`);
  } else {
    out.push(`  media    : [],         // TODO: isi manual`);
  }

  if (manual.printables !== undefined) {
    out.push(`  printables: ${manual.printables},`);
  } else {
    out.push(`  printables: [],        // TODO: isi manual`);
  }

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

// ═════════════════════════════════════════════════════════════════════════════
// Batch runner
// ═════════════════════════════════════════════════════════════════════════════

function run(filterTp) {
  // ── Ensure output directory exists ─────────────────────────────────────────
  if (!fs.existsSync(OUTPUT)) {
    fs.mkdirSync(OUTPUT, { recursive: true });
  }

  // ── Collect input files ─────────────────────────────────────────────────────
  let files;
  try {
    files = fs.readdirSync(SKENARIO)
      .filter(f => /^flaf-skenario-tp\d+-v2\.txt$/.test(f))
      .sort((a, b) => {
        const na = parseInt(a.match(/tp(\d+)/)[1], 10);
        const nb = parseInt(b.match(/tp(\d+)/)[1], 10);
        return na - nb;
      });
  } catch (err) {
    console.error(`❌ Cannot read skenario dir: ${SKENARIO}\n   ${err.message}`);
    process.exit(1);
  }

  if (filterTp !== undefined) {
    files = files.filter(f => {
      const m = f.match(/tp(\d+)/);
      return m && parseInt(m[1], 10) === filterTp;
    });
    if (files.length === 0) {
      console.error(`❌ No skenario file found for TP ${filterTp}`);
      process.exit(1);
    }
  }

  console.log(`\nFLAF Batch Converter — ${files.length} file(s)\n`);

  let ok = 0, errors = 0;

  for (const file of files) {
    const inputPath = path.join(SKENARIO, file);
    let parsed;

    // ── Parse ──────────────────────────────────────────────────────────────
    try {
      const text = fs.readFileSync(inputPath, 'utf8');
      parsed = parseSkenario(text);
    } catch (err) {
      console.error(`❌ ${file} — PARSE ERROR: ${err.message}`);
      errors++;
      continue;
    }

    // ── Preserve manual fields from existing output ─────────────────────────
    const outputPath = path.join(OUTPUT, parsed.filename);
    let manual = {};
    if (fs.existsSync(outputPath)) {
      try {
        const existing = fs.readFileSync(outputPath, 'utf8');
        manual = extractManualFields(existing);
      } catch (err) {
        console.warn(`   ⚠  Could not read existing ${parsed.filename}: ${err.message}`);
      }
    }

    // ── Generate JS ────────────────────────────────────────────────────────
    let js;
    try {
      js = generateJS(parsed, manual);
    } catch (err) {
      console.error(`❌ ${file} — GENERATE ERROR: ${err.message}`);
      errors++;
      continue;
    }

    // ── Write output ────────────────────────────────────────────────────────
    try {
      fs.writeFileSync(outputPath, js, 'utf8');
    } catch (err) {
      console.error(`❌ ${file} — WRITE ERROR: ${err.message}`);
      errors++;
      continue;
    }

    // ── Log ─────────────────────────────────────────────────────────────────
    const total     = parsed.skenario.reduce((s, f) => s + f.langkah.length, 0);
    const preserved = Object.keys(manual);
    const extraWarn = parsed.warnings.slice(0, -2); // skip the 2 always-present boilerplate warnings

    const preservedNote = preserved.length ? `  [preserved: ${preserved.join(', ')}]` : '';
    console.log(`✅ ${file} → ${parsed.filename}  (${total} langkah${preservedNote})`);
    for (const w of extraWarn) console.warn(`   ⚠  ${w}`);

    ok++;
  }

  console.log(`\n─────────────────────────────────`);
  console.log(`   ${ok} OK  /  ${errors} ERROR(S)`);
  console.log(`─────────────────────────────────\n`);
}

// ─── Entry point ──────────────────────────────────────────────────────────────

const argStr   = process.argv[2];
const filterTp = argStr !== undefined ? parseInt(argStr, 10) : undefined;
run(!isNaN(filterTp) ? filterTp : undefined);
