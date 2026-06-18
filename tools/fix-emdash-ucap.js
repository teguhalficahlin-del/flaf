#!/usr/bin/env node
/**
 * tools/fix-emdash-ucap.js
 *
 * Replaces em-dash (—) in UCAP lines only across all 66 skenario .txt files,
 * then re-injects skenario{} into TP .js via convert-skenario-fase-d.js.
 *
 * Usage:
 *   node tools/fix-emdash-ucap.js --dry-run --file skenario-8-01.txt
 *   node tools/fix-emdash-ucap.js --all
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname, basename }              from 'path';
import { fileURLToPath }                           from 'url';
import { execSync }                                from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = resolve(__dirname, '..');

// ── CLI ────────────────────────────────────────────────────────────

const args    = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const ALL     = args.includes('--all');
const fileArg = (() => {
  const idx = args.indexOf('--file');
  return idx !== -1 ? args[idx + 1] : null;
})();

// ── File manifest ──────────────────────────────────────────────────

function skenarioPath(kelas, nn) {
  const pad = String(nn).padStart(2, '0');
  return resolve(ROOT, `docs/canonical/skenario-fase-d-kelas ${kelas}/skenario-${kelas}-${pad}.txt`);
}

const MANIFEST = [
  ...Array.from({ length: 24 }, (_, i) => ({ kelas: 7, nn: i + 1 })),
  ...Array.from({ length: 24 }, (_, i) => ({ kelas: 8, nn: i + 1 })),
  ...Array.from({ length: 18 }, (_, i) => ({ kelas: 9, nn: i + 1 })),
];

// ── Em-dash replacement logic ──────────────────────────────────────

const EM_DASH = '—';

function fixEmDashInUcapLine(line) {
  // Only process lines that begin with "UCAP:" (with optional leading whitespace)
  if (!/^\s*UCAP:/.test(line)) return { line, changed: false };

  let fixed = line;

  // Rule 1: " — " (space–em-dash–space) → ", "
  fixed = fixed.replace(/ — /g, ', ');

  // Rule 2: "— " (em-dash–space, possibly after non-space) → ", "
  // Catches cases like "word— next" that Rule 1 didn't get (em-dash with no leading space)
  fixed = fixed.replace(/— /g, ', ');

  // Rule 3: " —" (space–em-dash at end or before punctuation) → ","
  fixed = fixed.replace(/ —(?=\s|$)/g, ',');

  // Catch any remaining bare em-dash (shouldn't normally occur after above rules)
  fixed = fixed.replace(/—/g, ',');

  return { line: fixed, changed: fixed !== line };
}

// ── Process one file ───────────────────────────────────────────────

function processFile(filePath, dryRun) {
  if (!existsSync(filePath)) {
    console.log(`SKIP — file tidak ditemukan: ${filePath}`);
    return 0;
  }

  const src   = readFileSync(filePath, 'utf8');
  const lines = src.split('\n');
  let changes = 0;
  const out   = [];

  for (const line of lines) {
    const { line: fixed, changed } = fixEmDashInUcapLine(line);
    if (changed) {
      changes++;
      if (dryRun) {
        console.log(`SEBELUM: ${line.trimEnd()}`);
        console.log(`SESUDAH: ${fixed.trimEnd()}`);
        console.log('');
      }
    }
    out.push(fixed);
  }

  if (!dryRun && changes > 0) {
    writeFileSync(filePath, out.join('\n'), 'utf8');
  }

  return changes;
}

// ── Resolve target files ───────────────────────────────────────────

let targets = [];

if (fileArg) {
  // Find the file in all kelas dirs
  let found = null;
  for (const { kelas, nn } of MANIFEST) {
    const p = skenarioPath(kelas, nn);
    if (basename(p) === fileArg || p.endsWith(fileArg)) {
      found = p;
      break;
    }
  }
  if (!found) {
    // Try direct resolve
    found = resolve(ROOT, fileArg);
  }
  targets = [found];
} else if (ALL) {
  targets = MANIFEST.map(({ kelas, nn }) => skenarioPath(kelas, nn));
} else {
  console.error('Gunakan --file <nama> atau --all');
  process.exit(1);
}

// ── Run ────────────────────────────────────────────────────────────

let totalFiles   = 0;
let totalChanges = 0;

for (const filePath of targets) {
  const label = basename(filePath);
  const n = processFile(filePath, DRY_RUN);
  if (n > 0) {
    totalFiles++;
    totalChanges += n;
    if (!DRY_RUN) {
      console.log(`[FIXED] ${label} — ${n} baris diubah`);
    } else {
      console.log(`--- ${label}: ${n} baris UCAP akan diubah ---\n`);
    }
  } else {
    if (DRY_RUN) console.log(`[OK] ${label} — tidak ada em-dash di UCAP\n`);
  }
}

if (DRY_RUN) {
  console.log('════════════════════════════════════════');
  console.log(`DRY-RUN selesai.`);
  console.log(`File diperiksa  : ${targets.length}`);
  console.log(`File akan diubah: ${totalFiles}`);
  console.log(`Total baris UCAP: ${totalChanges}`);
  console.log('Tidak ada file yang dimodifikasi.');
} else {
  console.log(`\n[SELESAI] ${totalFiles} file diubah, ${totalChanges} baris UCAP diperbaiki.`);

  if (totalChanges > 0) {
    console.log('\nRe-inject skenario{} ke semua TP .js...');
    try {
      execSync('node tools/convert-skenario-fase-d.js --force --all', {
        cwd: ROOT,
        stdio: 'inherit',
      });
    } catch (e) {
      console.error('Re-inject gagal:', e.message);
      process.exit(1);
    }
  }
}
