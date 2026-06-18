#!/usr/bin/env node
/**
 * tools/validate-skenario-fase-d.js
 *
 * Validates skenario{} field in all 66 TP .js files (Fase D).
 * Read-only — does not modify any file.
 *
 * Usage:
 *   node tools/validate-skenario-fase-d.js
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname }         from 'path';
import { fileURLToPath }            from 'url';

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

const VALID_TIPE = new Set(['AKSI', 'UCAP', 'bantuan', 'darurat', 'cue']);

// Characters not friendly for TTS
const TTS_BANNED_RE = /[()[\]{}\*_`~—]/;

function isNonEmptyStr(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

function isNonEmptyArray(v) {
  return Array.isArray(v) && v.length > 0;
}

// Collect ALL instruksi items from a given array for VR-S16/17
function collectInstruksi(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.filter(x => x && typeof x === 'object');
}

// ── Validator ──────────────────────────────────────────────────────

function validateTP(kelas, nn) {
  const path  = tpPath(kelas, nn);
  const label = tpLabel(kelas, nn);
  const errors   = [];
  const warnings = [];

  if (!existsSync(path)) {
    return { label, errors: [`File tidak ditemukan: ${path}`], warnings: [] };
  }

  // Dynamic import via readFileSync + eval-style extraction is unreliable across
  // ESM/CJS; instead we parse the JSON-serialised skenario block directly.
  const src = readFileSync(path, 'utf8');

  // Extract skenario object via JSON.parse on the const block
  const CONST_START = 'const skenario = ';
  const constIdx = src.indexOf(CONST_START);
  if (constIdx === -1) {
    errors.push('VR-S1: skenario{} tidak ditemukan (const skenario = ... tidak ada)');
    return { label, errors, warnings };
  }

  // Walk braces to find the full object literal
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
    errors.push(`VR-S1: skenario{} ada tapi gagal parse JSON: ${e.message}`);
    return { label, errors, warnings };
  }

  // Also check that export default includes skenario property
  if (!/skenario,/.test(src)) {
    errors.push('VR-S1: skenario tidak di-export di export default {}');
  }

  // Extract resources.model_sentences for VR-S18
  let modelSentences = [];
  const msMatch = src.match(/model_sentences\s*:\s*(\[[\s\S]*?\])\s*[,}]/);
  if (msMatch) {
    try {
      const parsed = JSON.parse(msMatch[1]);
      modelSentences = parsed.map(item =>
        typeof item === 'string' ? item : (item.teks || item.text || String(item))
      );
    } catch (_) { /* fallback: leave empty */ }
  }

  // ── VR-S2: persiapan.papan_tulis ──────────────────────────────────
  if (!isNonEmptyStr(sk?.persiapan?.papan_tulis)) {
    errors.push('VR-S2: persiapan.papan_tulis bukan string non-empty');
  }

  // ── VR-S3: persiapan.kartu ────────────────────────────────────────
  if (!isNonEmptyStr(sk?.persiapan?.kartu)) {
    errors.push('VR-S3: persiapan.kartu bukan string non-empty');
  }

  // ── VR-S4: siapkan_kelas.settling ────────────────────────────────
  if (!isNonEmptyArray(sk?.siapkan_kelas?.settling)) {
    errors.push('VR-S4: siapkan_kelas.settling bukan array atau kosong');
  }

  // ── VR-S5: siapkan_kelas.hook ─────────────────────────────────────
  if (!isNonEmptyArray(sk?.siapkan_kelas?.hook)) {
    errors.push('VR-S5: siapkan_kelas.hook bukan array atau kosong');
  }

  // ── VR-S6: langkah.model.instruksi ───────────────────────────────
  if (!isNonEmptyArray(sk?.langkah?.model?.instruksi)) {
    errors.push('VR-S6: langkah.model.instruksi bukan array atau kosong');
  }

  // ── VR-S7: langkah.repeat.kalimat ────────────────────────────────
  const kalimat = sk?.langkah?.repeat?.kalimat;
  if (!isNonEmptyArray(kalimat)) {
    errors.push('VR-S7: langkah.repeat.kalimat bukan array atau kosong');
  } else {
    kalimat.forEach((k, idx) => {
      if (!isNonEmptyStr(k?.label)) {
        errors.push(`VR-S7: kalimat[${idx}] tidak punya label string non-empty`);
      }
      if (!Array.isArray(k?.instruksi)) {
        errors.push(`VR-S7: kalimat[${idx}].instruksi bukan array`);
      }
    });
  }

  // ── VR-S8/S9/S10: diferensiasi ───────────────────────────────────
  const DIFSTEPS = [
    { key: 'change',   rule: 'VR-S8'  },
    { key: 'interact', rule: 'VR-S9'  },
    { key: 'share',    rule: 'VR-S10' },
  ];
  for (const { key, rule } of DIFSTEPS) {
    const dif = sk?.langkah?.[key]?.diferensiasi;
    if (!dif) {
      errors.push(`${rule}: langkah.${key}.diferensiasi tidak ada`);
    } else {
      for (const level of ['mudah', 'standar', 'tantangan']) {
        if (!isNonEmptyStr(dif[level])) {
          errors.push(`${rule}: langkah.${key}.diferensiasi.${level} bukan string non-empty`);
        }
      }
    }
  }

  // ── VR-S11: check.jalur_lancar ────────────────────────────────────
  if (!isNonEmptyArray(sk?.langkah?.check?.jalur_lancar)) {
    errors.push('VR-S11: langkah.check.jalur_lancar bukan array atau kosong');
  }

  // ── VR-S12: check.jalur_belum_lancar ─────────────────────────────
  if (!isNonEmptyArray(sk?.langkah?.check?.jalur_belum_lancar)) {
    errors.push('VR-S12: langkah.check.jalur_belum_lancar bukan array atau kosong');
  }

  // ── VR-S13: boost.untuk_kesulitan ────────────────────────────────
  if (!isNonEmptyArray(sk?.langkah?.boost?.untuk_kesulitan)) {
    errors.push('VR-S13: langkah.boost.untuk_kesulitan bukan array atau kosong');
  }

  // ── VR-S14: boost.untuk_lancar ───────────────────────────────────
  if (!isNonEmptyArray(sk?.langkah?.boost?.untuk_lancar)) {
    errors.push('VR-S14: langkah.boost.untuk_lancar bukan array atau kosong');
  }

  // ── VR-S15: boost.cue_sisa ───────────────────────────────────────
  if (!isNonEmptyStr(sk?.langkah?.boost?.cue_sisa)) {
    errors.push('VR-S15: langkah.boost.cue_sisa bukan string non-empty');
  }

  // ── VR-S16 + VR-S17: instruksi[] items ──────────────────────────
  // Gather all instruksi arrays across the whole skenario
  const allInstruksiSources = [];

  const addSource = (arr, path) => {
    if (Array.isArray(arr)) arr.forEach((item, idx) => allInstruksiSources.push({ item, path: `${path}[${idx}]` }));
  };

  addSource(sk?.persiapan?.instruksi,            'persiapan.instruksi');
  addSource(sk?.siapkan_kelas?.settling,          'siapkan_kelas.settling');
  addSource(sk?.siapkan_kelas?.hook,              'siapkan_kelas.hook');
  addSource(sk?.langkah?.model?.instruksi,        'langkah.model.instruksi');

  if (Array.isArray(kalimat)) {
    kalimat.forEach((k, ki) => {
      addSource(k?.instruksi, `langkah.repeat.kalimat[${ki}].instruksi`);
    });
  }
  addSource(sk?.langkah?.repeat?.instruksi_penutup, 'langkah.repeat.instruksi_penutup');
  addSource(sk?.langkah?.change?.instruksi,          'langkah.change.instruksi');
  addSource(sk?.langkah?.interact?.instruksi,        'langkah.interact.instruksi');
  addSource(sk?.langkah?.share?.instruksi,           'langkah.share.instruksi');
  addSource(sk?.langkah?.check?.instruksi,           'langkah.check.instruksi');
  addSource(sk?.langkah?.check?.jalur_lancar,        'langkah.check.jalur_lancar');
  addSource(sk?.langkah?.check?.jalur_belum_lancar,  'langkah.check.jalur_belum_lancar');
  addSource(sk?.langkah?.boost?.untuk_kesulitan,     'langkah.boost.untuk_kesulitan');
  addSource(sk?.langkah?.boost?.untuk_lancar,        'langkah.boost.untuk_lancar');

  const ucapTexts = [];

  for (const { item, path: ipath } of allInstruksiSources) {
    if (!item || typeof item !== 'object') {
      errors.push(`VR-S16: ${ipath} bukan objek`);
      continue;
    }
    // VR-S16: tipe
    if (!VALID_TIPE.has(item.tipe)) {
      errors.push(`VR-S16: ${ipath} tipe tidak valid: "${item.tipe}"`);
    }
    // VR-S16: teks
    if (!isNonEmptyStr(item.teks)) {
      errors.push(`VR-S16: ${ipath} teks bukan string non-empty`);
    }
    // VR-S17: TTS chars in UCAP
    if (item.tipe === 'UCAP' && isNonEmptyStr(item.teks)) {
      if (TTS_BANNED_RE.test(item.teks)) {
        errors.push(`VR-S17: UCAP di ${ipath} mengandung karakter tidak ramah TTS: "${item.teks.slice(0, 80)}"`);
      }
      ucapTexts.push(item.teks.trim());
    }
  }

  // ── VR-S18: model UCAP vs resources.model_sentences ──────────────
  const modelUcap = collectInstruksi(sk?.langkah?.model?.instruksi)
    .filter(x => x.tipe === 'UCAP' && isNonEmptyStr(x.teks))
    .map(x => x.teks.trim());

  if (modelSentences.length > 0 && modelUcap.length > 0) {
    const msSet = new Set(modelSentences.map(s => s.trim()));
    for (const ucap of modelUcap) {
      if (!msSet.has(ucap)) {
        warnings.push(`VR-S18: UCAP di model tidak match model_sentences: "${ucap.slice(0, 80)}"`);
      }
    }
  } else if (modelUcap.length > 0 && modelSentences.length === 0) {
    warnings.push('VR-S18: model_sentences tidak ditemukan — tidak bisa verifikasi UCAP model');
  }

  return { label, errors, warnings };
}

// ── Run all ────────────────────────────────────────────────────────

const results = MANIFEST.map(({ kelas, nn }) => validateTP(kelas, nn));

// ── Print per-TP log ───────────────────────────────────────────────

let totalLolos   = 0;
let totalGagal   = 0;
let totalWarning = 0;
const gagalDetails = [];

for (const { label, errors, warnings } of results) {
  if (errors.length > 0) {
    totalGagal++;
    gagalDetails.push({ label, errors });
    console.log(`\n${label} GAGAL`);
    for (const e of errors) console.log(`  ✗ ${e}`);
    if (warnings.length > 0) {
      for (const w of warnings) console.log(`  ⚠ ${w}`);
      totalWarning++;
    }
  } else if (warnings.length > 0) {
    totalWarning++;
    console.log(`\n${label} WARNING`);
    for (const w of warnings) console.log(`  ⚠ ${w}`);
  } else {
    totalLolos++;
    console.log(`${label} LOLOS`);
  }
}

// ── Summary ────────────────────────────────────────────────────────

console.log('\n════════════════════════════════════════════════════════════');
console.log('RINGKASAN VALIDASI SKENARIO{} — 66 TP FASE D');
console.log('════════════════════════════════════════════════════════════');
console.log(`Total LOLOS   : ${totalLolos}`);
console.log(`Total GAGAL   : ${totalGagal}`);
console.log(`Total WARNING : ${totalWarning}`);

if (totalGagal > 0) {
  console.log('\nTP GAGAL:');
  for (const { label, errors } of gagalDetails) {
    const rules = [...new Set(errors.map(e => e.match(/VR-S\d+/)?.[0]).filter(Boolean))].join(', ');
    console.log(`  ${label} — ${rules || 'parse error'}`);
  }
}

// Check for empty kalimat[]
const emptyKalimat = results.filter(r => {
  // re-check from the log — we flagged this in errors already; just flag here too
  return r.errors.some(e => e.includes('VR-S7') && e.includes('kosong'));
});
if (emptyKalimat.length > 0) {
  console.log('\nTP dengan kalimat[] kosong:');
  emptyKalimat.forEach(r => console.log(`  ${r.label}`));
} else {
  console.log('\nSemua TP punya kalimat[] non-kosong.');
}

console.log('════════════════════════════════════════════════════════════');
