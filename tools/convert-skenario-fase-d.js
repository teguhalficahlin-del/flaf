#!/usr/bin/env node
/**
 * tools/convert-skenario-fase-d.js
 *
 * Converts skenario .txt files → skenario{} field → injects into TP .js files.
 *
 * Usage:
 *   node tools/convert-skenario-fase-d.js --dry-run --tp 7-01
 *   node tools/convert-skenario-fase-d.js --tp 7-01
 *   node tools/convert-skenario-fase-d.js all
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname }                         from 'path';
import { fileURLToPath }                            from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = resolve(__dirname, '..');

// ── CLI ────────────────────────────────────────────────────────────────

const args    = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const FORCE   = args.includes('--force');
const ALL_MODE = args.includes('--all') || args.includes('all');
const TP_ARG  = (() => {
  if (ALL_MODE) return 'all';
  const tpIdx = args.indexOf('--tp');
  if (tpIdx !== -1 && args[tpIdx + 1]) return args[tpIdx + 1];
  return args.find(a => !a.startsWith('--')) || null;
})();

// ── Paths ──────────────────────────────────────────────────────────────

function skenarioPath(kelas, nn) {
  const pad = String(nn).padStart(2, '0');
  return resolve(ROOT, `docs/canonical/skenario-fase-d-kelas ${kelas}/skenario-${kelas}-${pad}.txt`);
}

function tpPath(kelas, nn) {
  const pad = String(nn).padStart(2, '0');
  return resolve(ROOT, `docs/canonical/fase-d/kelas-${kelas}/tp-${pad}.js`);
}

// ── Parsing helpers ────────────────────────────────────────────────────

const INSTR_TYPES = ['AKSI', 'UCAP', 'bantuan', 'darurat', 'cue'];

function parseInstrLine(line) {
  for (const tipe of INSTR_TYPES) {
    if (line.startsWith(tipe + ':')) {
      return { tipe, teks: line.slice(tipe.length + 1).trim() };
    }
  }
  return null;
}

function parseTableCols(line) {
  return line.split('|').map(s => s.trim()).filter(Boolean);
}

const LEVEL_KEY  = { Mudah: 'mudah', Standar: 'standar', Tantangan: 'tantangan' };
const SECTION_KEY = {
  MODEL: 'model', REPEAT: 'repeat', CHANGE: 'change',
  INTERACT: 'interact', SHARE: 'share', CHECK: 'check', BOOST: 'boost',
};

// ── Main parser ────────────────────────────────────────────────────────

function parseSkenario(txt) {
  const lines = txt.split('\n');

  const sk = {
    persiapan: { papan_tulis: '', kartu: '', instruksi: [] },
    siapkan_kelas: { settling: [], hook: [] },
    langkah: {
      model:    { durasi_menit: 0, intro: '', instruksi: [], diferensiasi: null },
      repeat:   { durasi_menit: 0, intro: '', kalimat: [], instruksi_penutup: [], diferensiasi: null },
      change:   { durasi_menit: 0, intro: '', instruksi: [], diferensiasi: {} },
      interact: { durasi_menit: 0, intro: '', instruksi: [], diferensiasi: {} },
      share:    { durasi_menit: 0, intro: '', instruksi: [], diferensiasi: {} },
      check:    { durasi_menit: 0, intro: '', instruksi: [], jalur_lancar: [], jalur_belum_lancar: [] },
      boost:    { durasi_menit: 0, intro: '', untuk_kesulitan: [], untuk_lancar: [], cue_sisa: '' },
    },
  };

  let section     = null;  // 'PERSIAPAN'|'SIAPKAN_KELAS'|'MODEL'|'REPEAT'|...
  let sub         = null;  // sub-section within section
  let inCodeBlock = false;
  let codeLines   = [];
  let inDifTable  = false;
  let difTarget   = null;
  let difRows     = {};

  // REPEAT
  let curKalimat   = null;   // { label, instruksi[] }
  let repeatClosed = false;  // true after last kalimat finalized

  function finalizePendingKalimat() {
    if (curKalimat) {
      sk.langkah.repeat.kalimat.push(curKalimat);
      curKalimat = null;
    }
  }

  function setSection(name) {
    if (section === 'REPEAT') finalizePendingKalimat();
    if (inDifTable && difTarget) {
      sk.langkah[difTarget].diferensiasi = { ...difRows };
    }
    section     = name;
    sub         = null;
    inCodeBlock = false;
    codeLines   = [];
    inDifTable  = false;
    difTarget   = null;
    difRows     = {};
    curKalimat  = null;
    repeatClosed = false;
  }

  function pushInstr(instr) {
    if (!instr) return;
    switch (section) {
      case 'PERSIAPAN':
        if (instr.teks.includes('Siapkan') && instr.teks.toLowerCase().includes('kartu')) {
          sk.persiapan.kartu = instr.teks;
        } else if (!instr.teks.toLowerCase().startsWith('tulis persis ini')) {
          sk.persiapan.instruksi.push(instr);
        }
        break;
      case 'SIAPKAN_KELAS':
        if (sub === 'hook') sk.siapkan_kelas.hook.push(instr);
        else                sk.siapkan_kelas.settling.push(instr);
        break;
      case 'MODEL':
        sk.langkah.model.instruksi.push(instr);
        break;
      case 'REPEAT':
        if (repeatClosed || !curKalimat) {
          sk.langkah.repeat.instruksi_penutup.push(instr);
        } else {
          curKalimat.instruksi.push(instr);
        }
        break;
      case 'CHANGE':
        sk.langkah.change.instruksi.push(instr);
        break;
      case 'INTERACT':
        sk.langkah.interact.instruksi.push(instr);
        break;
      case 'SHARE':
        sk.langkah.share.instruksi.push(instr);
        break;
      case 'CHECK':
        if (sub === 'lancar')  sk.langkah.check.jalur_lancar.push(instr);
        else if (sub === 'belum') sk.langkah.check.jalur_belum_lancar.push(instr);
        else                   sk.langkah.check.instruksi.push(instr);
        break;
      case 'BOOST':
        if (instr.tipe === 'cue') {
          sk.langkah.boost.cue_sisa = instr.teks;
        } else if (sub === 'lancar') {
          sk.langkah.boost.untuk_lancar.push(instr);
        } else if (sub === 'kesulitan') {
          sk.langkah.boost.untuk_kesulitan.push(instr);
        }
        break;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const raw  = lines[i];
    const line = raw.trim();

    // ── Section headings (always highest priority) ──────────────
    if (line.startsWith('### PERSIAPAN')) {
      setSection('PERSIAPAN');
      continue;
    }
    if (line.startsWith('### SIAPKAN KELAS')) {
      setSection('SIAPKAN_KELAS');
      sub = 'settling';
      continue;
    }
    const lm = line.match(/^### LANGKAH \d+ — (\w+)\s*\((\d+)\s*menit\)/);
    if (lm) {
      const name = lm[1].toUpperCase();
      const dur  = parseInt(lm[2], 10);
      setSection(name);
      const key = SECTION_KEY[name];
      if (key) sk.langkah[key].durasi_menit = dur;
      if (name === 'CHECK') sub = 'instruksi';
      continue;
    }

    if (!section) continue;

    // ── Code block (papan_tulis) ────────────────────────────────
    if (line === '```') {
      inCodeBlock = !inCodeBlock;
      if (!inCodeBlock && codeLines.length) {
        sk.persiapan.papan_tulis = codeLines.join('\n');
        codeLines = [];
      }
      continue;
    }
    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    // ── Blank line ──────────────────────────────────────────────
    if (!line) {
      // REPEAT: check if this blank ends the last kalimat group
      if (section === 'REPEAT' && curKalimat && !repeatClosed) {
        let j = i + 1;
        while (j < lines.length && !lines[j].trim()) j++;
        const nextNB = j < lines.length ? lines[j].trim() : '';
        if (!nextNB.match(/^\*\*Kalimat \d+\*\*$/)) {
          finalizePendingKalimat();
          repeatClosed = true;
        }
      }
      continue;
    }

    // ── Skip misc lines ─────────────────────────────────────────
    if (line === '---') continue;
    if (line.match(/^## [^#]/)) continue;
    if (line.startsWith('Revisi final')) continue;
    if (line.match(/^\*\*Kelas \d/)) continue;
    if (line.startsWith('Konteks:') || line.startsWith('Tujuan komunikatif:')) continue;

    // ── Differentiation table ───────────────────────────────────
    if (line.startsWith('|') && line.includes('Level') && line.includes('Tugas')) {
      inDifTable = true;
      difRows    = {};
      difTarget  = { CHANGE: 'change', INTERACT: 'interact', SHARE: 'share' }[section] || null;
      continue;
    }
    if (inDifTable) {
      if (line.match(/^\|[-| ]+\|$/)) { continue; } // separator
      if (line.startsWith('|')) {
        const cols = parseTableCols(line);
        if (cols.length >= 2) {
          const key = LEVEL_KEY[cols[0]];
          if (key) difRows[key] = cols.slice(1).join(' | ');
        }
        continue;
      } else {
        // Table ended — finalize
        inDifTable = false;
        if (difTarget) {
          sk.langkah[difTarget].diferensiasi = { ...difRows };
          difTarget = null;
        }
        // Fall through: process this line normally
      }
    }

    // ── SIAPKAN_KELAS sub-sections ──────────────────────────────
    if (section === 'SIAPKAN_KELAS') {
      if (line === '**SETTLING**') { sub = 'settling'; continue; }
      if (line === '**HOOK**')     { sub = 'hook';     continue; }
    }

    // ── REPEAT: sub-group header (any **Label N** or **Label N — ...** pattern)
    if (section === 'REPEAT') {
      const km = line.match(/^\*\*(.+?)\*\*$/);
      if (km && /\d/.test(km[1])) {
        // Has a number somewhere → treat as kalimat group
        if (!repeatClosed && curKalimat) {
          sk.langkah.repeat.kalimat.push(curKalimat);
        }
        curKalimat   = { label: km[1], instruksi: [] };
        repeatClosed = false;
        continue;
      }
    }

    // ── CHECK: phase detection ──────────────────────────────────
    if (section === 'CHECK') {
      if (line === '**Tindak lanjut — pilih salah satu:**') continue;
      if (line.startsWith('Sebagian besar siswa lancar'))      { sub = 'lancar'; continue; }
      if (line.startsWith('Sebagian besar siswa masih ragu')) { sub = 'belum';  continue; }
    }

    // ── BOOST: sub-section headers ──────────────────────────────
    if (section === 'BOOST') {
      if (line === '**Untuk siswa yang masih kesulitan:**') { sub = 'kesulitan'; continue; }
      if (line === '**Untuk siswa yang sudah lancar:**')    { sub = 'lancar';    continue; }
    }

    // ── Intro line (italic, single asterisk) ───────────────────
    if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
      const intro  = line.replace(/^\*+|\*+$/g, '').trim();
      const secKey = SECTION_KEY[section];
      if (secKey && sk.langkah[secKey] !== undefined) {
        sk.langkah[secKey].intro = intro;
      }
      continue;
    }

    // ── Bold headers (structural, skip as content) ──────────────
    if (line.startsWith('**') && line.endsWith('**')) continue;

    // ── Instruction lines ───────────────────────────────────────
    const instr = parseInstrLine(line);
    if (instr) { pushInstr(instr); continue; }

    // Everything else: skip (prose, numbered headings, etc.)
  }

  // Finalize if file ended in REPEAT
  if (section === 'REPEAT') finalizePendingKalimat();

  // Finalize diff table if file ended mid-table (edge case)
  if (inDifTable && difTarget) {
    sk.langkah[difTarget].diferensiasi = { ...difRows };
  }

  return sk;
}

// ── Stats accumulator ──────────────────────────────────────────────

const STATS = {
  ok:    [],   // { label, langkah, kalimat_repeat, instruksi_total }
  skip:  [],   // { label, reason }
  fail:  [],   // { label, reason }
};

function countInstruksi(sk) {
  let n = 0;
  n += sk.persiapan.instruksi.length;
  n += sk.siapkan_kelas.settling.length;
  n += sk.siapkan_kelas.hook.length;
  const l = sk.langkah;
  n += l.model.instruksi.length;
  for (const k of l.repeat.kalimat) n += k.instruksi.length;
  n += l.repeat.instruksi_penutup.length;
  n += l.change.instruksi.length;
  n += l.interact.instruksi.length;
  n += l.share.instruksi.length;
  n += l.check.instruksi.length;
  n += l.check.jalur_lancar.length;
  n += l.check.jalur_belum_lancar.length;
  n += l.boost.untuk_kesulitan.length;
  n += l.boost.untuk_lancar.length;
  return n;
}

// ── Strip existing skenario from TP .js (for --force) ─────────────

function stripSkenario(src) {
  const START = 'const skenario = ';
  const startIdx = src.indexOf(START);
  if (startIdx === -1) return src;

  // Walk forward to find the matching closing "}" of the top-level object
  let depth = 0, i = startIdx + START.length, opened = false;
  while (i < src.length) {
    if (src[i] === '{') { depth++; opened = true; }
    else if (src[i] === '}') depth--;
    i++;
    if (opened && depth === 0) break;
  }
  // Consume ";\n" and any blank lines that follow (the separator before export default)
  if (i < src.length && src[i] === ';') i++;
  while (i < src.length && (src[i] === '\n' || src[i] === '\r')) i++;

  // Walk back to start of the line — handles corrupted files where a stray char
  // precedes "const" on the same line (e.g. "cconst skenario")
  let lineStart = startIdx;
  while (lineStart > 0 && src[lineStart - 1] !== '\n') lineStart--;

  const stripped = src.slice(0, lineStart) + src.slice(i);

  // Remove ",\n  skenario,\n" injected at end of export object
  return stripped.replace(/,\n\s+skenario,\n/g, '\n');
}

// ── Inject into TP .js ─────────────────────────────────────────────

function injectSkenario(tpFilePath, skenarioObj, label) {
  let src = readFileSync(tpFilePath, 'utf8');

  if (src.includes('const skenario =')) {
    if (!FORCE) {
      STATS.skip.push({ label, reason: 'already has skenario' });
      console.log(`[SKIP] ${label} — already has skenario`);
      return false;
    }
    src = stripSkenario(src);
  }

  const constBlock = `const skenario = ${JSON.stringify(skenarioObj, null, 2)};\n`;

  const exportIdx = src.lastIndexOf('export default {');
  if (exportIdx === -1) {
    STATS.fail.push({ label, reason: 'no "export default {"' });
    console.error(`[FAIL] ${label} — no "export default {"`);
    return false;
  }

  const lastBrace = src.lastIndexOf('}');
  if (lastBrace === -1 || lastBrace <= exportIdx) {
    STATS.fail.push({ label, reason: 'cannot find closing brace' });
    console.error(`[FAIL] ${label} — cannot find closing brace`);
    return false;
  }

  const beforeExport  = src.slice(0, exportIdx);
  const exportBody    = src.slice(exportIdx, lastBrace).trimEnd();
  const afterClosing  = src.slice(lastBrace);

  const bodyWithComma = exportBody.endsWith(',') ? exportBody : exportBody + ',';

  const newSrc = beforeExport
    + constBlock
    + '\n'
    + bodyWithComma + '\n'
    + '  skenario,\n'
    + afterClosing;

  writeFileSync(tpFilePath, newSrc, 'utf8');
  return true;
}

// ── Entry point ────────────────────────────────────────────────────

function processOne(kelas, nn) {
  const pad   = String(nn).padStart(2, '0');
  const label = `tp-${pad}.js (K${kelas})`;
  const sPath = skenarioPath(kelas, nn);
  const tPath = tpPath(kelas, nn);

  if (!existsSync(sPath)) {
    STATS.fail.push({ label, reason: 'skenario .txt not found' });
    console.error(`[FAIL] ${label} — skenario .txt not found`);
    return;
  }

  let txt, skenario;
  try {
    txt      = readFileSync(sPath, 'utf8');
    skenario = parseSkenario(txt);
  } catch (e) {
    STATS.fail.push({ label, reason: `parse error: ${e.message}` });
    console.error(`[FAIL] ${label} — parse error: ${e.message}`);
    return;
  }

  if (DRY_RUN) {
    console.log(`\n=== DRY-RUN skenario TP ${kelas}-${pad} ===`);
    console.log(JSON.stringify(skenario, null, 2));
    return;
  }

  if (!existsSync(tPath)) {
    STATS.fail.push({ label, reason: 'tp .js not found' });
    console.error(`[FAIL] ${label} — tp .js not found`);
    return;
  }

  const ok = injectSkenario(tPath, skenario, label);
  if (ok) {
    const langkah       = Object.keys(skenario.langkah).length;
    const kalimat_repeat = skenario.langkah.repeat.kalimat.length;
    const instruksi_total = countInstruksi(skenario);
    STATS.ok.push({ label, langkah, kalimat_repeat, instruksi_total });
    console.log(
      `[OK]   ${label} — langkah: ${langkah}, kalimat_repeat: ${kalimat_repeat}, instruksi_total: ${instruksi_total}`
    );
  }
}

function printSummary() {
  const totalInstruksi = STATS.ok.reduce((s, r) => s + r.instruksi_total, 0);

  console.log('\n' + '═'.repeat(60));
  console.log('RINGKASAN INJECT');
  console.log('═'.repeat(60));
  console.log(`Berhasil  : ${STATS.ok.length} file`);
  console.log(`Dilewati  : ${STATS.skip.length} file`);
  console.log(`Gagal     : ${STATS.fail.length} file`);
  console.log(`Total instruksi seluruh 66 TP : ${totalInstruksi}`);

  if (STATS.skip.length) {
    console.log('\nDilewati:');
    for (const s of STATS.skip) console.log(`  ${s.label} — ${s.reason}`);
  }
  if (STATS.fail.length) {
    console.log('\nGagal:');
    for (const f of STATS.fail) console.log(`  ${f.label} — ${f.reason}`);
  }
  console.log('═'.repeat(60));
}

function run() {
  if (!TP_ARG) {
    console.error('Usage: node tools/convert-skenario-fase-d.js [--dry-run] [--tp <kelas-nn> | --all | all]');
    process.exit(1);
  }

  if (TP_ARG === 'all') {
    const COUNTS = { 7: 24, 8: 24, 9: 18 };
    for (const [kelas, count] of Object.entries(COUNTS)) {
      for (let nn = 1; nn <= count; nn++) {
        processOne(parseInt(kelas), nn);
      }
    }
    printSummary();
    return;
  }

  const m = TP_ARG.match(/^(\d)-(\d{2})$/);
  if (!m) {
    console.error(`Invalid TP arg "${TP_ARG}". Expected format: 7-01`);
    process.exit(1);
  }
  processOne(parseInt(m[1]), parseInt(m[2]));
}

run();
