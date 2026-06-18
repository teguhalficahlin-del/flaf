#!/usr/bin/env node
/**
 * tools/inject-diferensiasi-baru.js
 *
 * Inject diferensiasi_baru{ sudah_bisa, perlu_bantuan } ke langkah
 * change/interact/share di 66 file TP (Fase D), sebagai sibling dari
 * field diferensiasi{ mudah, standar, tantangan } yang sudah ada.
 *
 * - sudah_bisa   <- diferensiasi.tantangan
 * - perlu_bantuan <- diferensiasi.mudah
 * - standar tidak dipakai
 * - field diferensiasi lama TIDAK dihapus
 *
 * Usage:
 *   node tools/inject-diferensiasi-baru.js
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname }                        from 'path';
import { fileURLToPath }                           from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = resolve(__dirname, '..');

// ── TP manifest ────────────────────────────────────────────────────

const MANIFEST = [
  ...Array.from({ length: 24 }, (_, i) => ({ kelas: 7, nn: i + 1 })),
  ...Array.from({ length: 24 }, (_, i) => ({ kelas: 8, nn: i + 1 })),
  ...Array.from({ length: 18 }, (_, i) => ({ kelas: 9, nn: i + 1 })),
];

function tpPath(kelas, nn) {
  const pad = String(nn).padStart(2, '0');
  return resolve(ROOT, `docs/canonical/fase-d/kelas-${kelas}/tp-${pad}.js`);
}

function tpLabel(kelas, nn) {
  return `tp-${String(nn).padStart(2, '0')}.js (K${kelas})`;
}

// ── Helpers ────────────────────────────────────────────────────────

function isNonEmptyStr(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

// Extract the `const skenario = {...}` object literal text + parsed value,
// mirroring tools/validate-skenario-fase-d.js's brace-walk approach.
function extractSkenarioBlock(src) {
  const CONST_START = 'const skenario = ';
  const constIdx = src.indexOf(CONST_START);
  if (constIdx === -1) return null;

  let depth = 0, i = constIdx + CONST_START.length, opened = false;
  while (i < src.length) {
    if (src[i] === '{') { depth++; opened = true; }
    else if (src[i] === '}') depth--;
    i++;
    if (opened && depth === 0) break;
  }
  const rawBlock = src.slice(constIdx + CONST_START.length, i);

  let sk;
  try {
    sk = JSON.parse(rawBlock);
  } catch (e) {
    return { error: e.message };
  }

  return {
    sk,
    blockStart: constIdx + CONST_START.length,
    blockEnd:   i,
    rawBlock,
  };
}

// Matches a "diferensiasi": { "mudah": "...", "standar": "...", "tantangan": "..." }
// object literal, capturing leading indentation + the mudah/tantangan text
// (still in their original escaped form, so they can be reused verbatim).
const DIF_RE = /([ \t]*)"diferensiasi":\s*\{\s*"mudah":\s*"((?:\\.|[^"\\])*)",\s*"standar":\s*"((?:\\.|[^"\\])*)",\s*"tantangan":\s*"((?:\\.|[^"\\])*)"\s*\}/g;

const STEP_KEYS = ['change', 'interact', 'share'];

// ── Process one file ──────────────────────────────────────────────

function processFile(kelas, nn) {
  const path  = tpPath(kelas, nn);
  const label = tpLabel(kelas, nn);
  const result = { label, injected: 0, skipped: [], error: null };

  if (!existsSync(path)) {
    result.error = `File tidak ditemukan: ${path}`;
    return result;
  }

  const src = readFileSync(path, 'utf8');
  const extracted = extractSkenarioBlock(src);

  if (!extracted) {
    result.error = 'const skenario = ... tidak ditemukan';
    return result;
  }
  if (extracted.error) {
    result.error = `skenario{} gagal parse JSON: ${extracted.error}`;
    return result;
  }

  const { sk, blockStart, blockEnd, rawBlock } = extracted;

  // Determine which steps qualify for injection
  for (const key of STEP_KEYS) {
    const dif = sk?.langkah?.[key]?.diferensiasi;
    if (!dif) {
      result.skipped.push(`langkah.${key} (diferensiasi null/tidak ada)`);
      continue;
    }
    if (!isNonEmptyStr(dif.mudah) || !isNonEmptyStr(dif.tantangan)) {
      result.skipped.push(`langkah.${key} (field mudah/tantangan kosong atau tidak ada)`);
    }
  }

  const qualifyingKeys = STEP_KEYS.filter(key => {
    const dif = sk?.langkah?.[key]?.diferensiasi;
    return dif && isNonEmptyStr(dif.mudah) && isNonEmptyStr(dif.tantangan);
  });

  // Replace each matched diferensiasi block (in source order, which matches
  // change -> interact -> share) with itself + diferensiasi_baru sibling.
  let matchIdx = 0;
  const newRawBlock = rawBlock.replace(DIF_RE, (full, indent, mudah, _standar, tantangan) => {
    const key = qualifyingKeys[matchIdx];
    matchIdx++;
    if (!key) return full; // safety: more matches than expected qualifying steps
    result.injected++;
    const inner = indent + '  ';
    return `${full},\n${indent}"diferensiasi_baru": {\n${inner}"sudah_bisa": "${tantangan}",\n${inner}"perlu_bantuan": "${mudah}"\n${indent}}`;
  });

  if (matchIdx !== qualifyingKeys.length) {
    result.error = `Jumlah blok diferensiasi cocok (${matchIdx}) tidak sama dengan langkah qualifying (${qualifyingKeys.length})`;
    return result;
  }

  if (result.injected === 0) {
    // nothing to do, no need to write
    return result;
  }

  const newSrc = src.slice(0, blockStart) + newRawBlock + src.slice(blockEnd);

  // Validate: re-extract + JSON.parse the new skenario block before writing
  const reExtracted = extractSkenarioBlock(newSrc);
  if (!reExtracted || reExtracted.error) {
    result.error = `Validasi pasca-injeksi gagal: ${reExtracted?.error || 'tidak bisa re-extract skenario{}'}`;
    return result;
  }

  writeFileSync(path, newSrc, 'utf8');
  return result;
}

// ── Run all ────────────────────────────────────────────────────────

const results = MANIFEST.map(({ kelas, nn }) => processFile(kelas, nn));

let filesProcessed   = 0;
let totalInjected     = 0;
let totalSkippedSteps = 0;
let filesError        = 0;

for (const r of results) {
  filesProcessed++;
  if (r.error) {
    filesError++;
    console.log(`\n${r.label} ERROR — file TIDAK di-overwrite`);
    console.log(`  ✗ ${r.error}`);
    continue;
  }
  totalInjected += r.injected;
  totalSkippedSteps += r.skipped.length;
  if (r.skipped.length > 0) {
    console.log(`\n${r.label} — diinjeksi: ${r.injected}, diskip: ${r.skipped.length}`);
    for (const s of r.skipped) console.log(`  ⚠ skip ${s}`);
  } else {
    console.log(`${r.label} — diinjeksi: ${r.injected}`);
  }
}

console.log('\n════════════════════════════════════════════════════════════');
console.log('RINGKASAN INJEKSI diferensiasi_baru — 66 TP FASE D');
console.log('════════════════════════════════════════════════════════════');
console.log(`File diproses        : ${filesProcessed}`);
console.log(`diferensiasi_baru OK : ${totalInjected}`);
console.log(`Langkah diskip       : ${totalSkippedSteps}`);
console.log(`File error (no write): ${filesError}`);
console.log('════════════════════════════════════════════════════════════');
