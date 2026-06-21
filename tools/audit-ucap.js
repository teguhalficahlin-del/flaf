#!/usr/bin/env node
/**
 * Audit UCAP fields di skenario{} untuk 66 TP Fase D.
 * Read-only — tidak mengubah file TP apapun.
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'docs', 'canonical', 'fase-d');
const CLASSES = [
  { dir: 'kelas-7', label: 'KELAS 7', prefix: '7', count: 24 },
  { dir: 'kelas-8', label: 'KELAS 8', prefix: '8', count: 24 },
  { dir: 'kelas-9', label: 'KELAS 9', prefix: '9', count: 18 },
];

// TTS_SYMBOL: karakter yang perlu di-flag
// Titik dua: flag jika > 1 dalam satu teks, atau di tengah kalimat bukan sebagai pemisah label awal
const SYMBOL_PATTERN = /[—–\/\(\)\*_#&+<>]/;

function checkColons(teks) {
  const colons = (teks.match(/:/g) || []).length;
  if (colons > 1) return true;
  // Single colon: flag only if it's mid-sentence (not a label separator)
  // A "label separator" is a colon preceded by ≤3 words since the last sentence boundary (. ! ?)
  if (colons === 1) {
    const idx = teks.indexOf(':');
    const before = teks.slice(0, idx);
    // Get the clause right before the colon (since last . ! ?)
    const clauseMatch = before.match(/(?:[.!?]\s+|\s*^)([^.!?]*)$/);
    const clause = clauseMatch ? clauseMatch[1].trim() : before.trim();
    const wordsBefore = clause.split(/\s+/).filter(Boolean);
    if (wordsBefore.length > 3) return true;
  }
  return false;
}

// TTS_ABBREV: singkatan yang perlu di-flag (whole-word, case-insensitive)
const ABBREVS = ['TP', 'SD', 'SMP', 'SMA', 'K7', 'K8', 'K9', 'K10'];
// Untuk e.g., etc., vs., i.e., no. — match literal dengan titik
const ABBREV_WITH_DOT = ['e.g.', 'etc.', 'vs.', 'i.e.', 'no.'];

function checkAbbrevs(teks) {
  const found = [];
  for (const abbr of ABBREVS) {
    const re = new RegExp(`\\b${abbr}\\b`, 'i');
    if (re.test(teks)) found.push(abbr);
  }
  for (const abbr of ABBREV_WITH_DOT) {
    // escape dots for regex
    const escaped = abbr.replace(/\./g, '\\.');
    const re = new RegExp(escaped, 'i');
    if (re.test(teks)) found.push(abbr);
  }
  return found;
}

function extractUCAPs(content, filePath) {
  // Ekstrak semua { tipe: "UCAP", teks: "..." } menggunakan regex
  const results = [];
  // Match multi-line UCAP objects
  const ucapRe = /"tipe"\s*:\s*"UCAP"[^}]*?"teks"\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  // Also match teks before tipe order
  const ucapRe2 = /"teks"\s*:\s*"((?:[^"\\]|\\.)*)"[^}]*?"tipe"\s*:\s*"UCAP"/g;

  let m;
  while ((m = ucapRe.exec(content)) !== null) {
    results.push(m[1]);
  }
  while ((m = ucapRe2.exec(content)) !== null) {
    results.push(m[1]);
  }
  return results;
}

function extractUCAPsWithContext(content) {
  const results = [];
  const teksRe = /"teks"\s*:\s*"((?:[^"\\]|\\.)*)"/;

  let pos = 0;
  while (true) {
    const ucapIdx = content.indexOf('"tipe": "UCAP"', pos);
    if (ucapIdx === -1) break;

    // Search for "teks" only AFTER "tipe": "UCAP" within the same object (max 200 chars forward)
    const searchAfter = content.slice(ucapIdx, ucapIdx + 200);
    const teksMatch = teksRe.exec(searchAfter);

    if (teksMatch) {
      const lineNum = content.slice(0, ucapIdx).split('\n').length;

      // Get section context: look backwards for last langkah/section key
      const before = content.slice(0, ucapIdx);
      const sectionMatch = before.match(/"(model|repeat|change|interact|share|check|boost|persiapan|siapkan_kelas|settling|hook|kalimat|instruksi_penutup|jalur_lancar|jalur_belum_lancar|untuk_kesulitan|untuk_lancar)"\s*:/g);
      const sectionCtx = sectionMatch ? sectionMatch[sectionMatch.length - 1].replace(/[":]/g, '').trim() : 'unknown';

      results.push({ teks: teksMatch[1], lineNum, context: sectionCtx });
    }

    pos = ucapIdx + 1;
  }

  return results;
}

function analyzeTP(filePath, tpId) {
  const content = fs.readFileSync(filePath, 'utf8');
  const ucaps = extractUCAPsWithContext(content);

  const findings = [];

  for (const ucap of ucaps) {
    const teks = ucap.teks;
    const flags = [];

    // Check TTS_SYMBOL
    if (SYMBOL_PATTERN.test(teks)) {
      const matchedChars = teks.match(/[—–\/\(\)\*_#&+<>]/g);
      const unique = [...new Set(matchedChars)];
      flags.push({ kriteria: 'TTS_SYMBOL', detail: `karakter: ${unique.join(' ')}` });
    }
    if (checkColons(teks)) {
      flags.push({ kriteria: 'TTS_SYMBOL', detail: 'titik dua berlebih atau di tengah kalimat' });
    }

    // Check TTS_ABBREV
    const abbrevFound = checkAbbrevs(teks);
    if (abbrevFound.length > 0) {
      flags.push({ kriteria: 'TTS_ABBREV', detail: `singkatan: ${abbrevFound.join(', ')}` });
    }

    if (flags.length > 0) {
      findings.push({ teks, context: ucap.context, lineNum: ucap.lineNum, flags });
    }
  }

  return { ucapCount: ucaps.length, findings };
}

// Main
const now = new Date().toISOString().slice(0, 10);
let totalUCAP = 0;
let totalFlagged = 0;
let totalSymbol = 0;
let totalAbbrev = 0;

const sections = [];
const cleanTPs = [];

console.log('=== VALIDASI FILE COUNT ===');
for (const cls of CLASSES) {
  const dir = path.join(BASE, cls.dir);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  console.log(`${cls.label}: ${files.length} file (expected: ${cls.count})`);
  if (files.length !== cls.count) {
    console.error(`STOP: File count mismatch di ${cls.dir}!`);
    process.exit(1);
  }
}

console.log('\nExtract UCAP...');

for (const cls of CLASSES) {
  const dir = path.join(BASE, cls.dir);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort();
  const sectionLines = [`[${cls.label}]`];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const tpNum = i + 1;
    const tpId = `${cls.prefix}-${String(tpNum).padStart(2, '0')}`;
    const relPath = `docs/canonical/fase-d/${cls.dir}/${file}`;
    const filePath = path.join(dir, file);

    const { ucapCount, findings } = analyzeTP(filePath, tpId);
    totalUCAP += ucapCount;

    if (findings.length === 0) {
      cleanTPs.push(`TP ${tpId}`);
      sectionLines.push(`TP ${tpId} | ${relPath}`);
      sectionLines.push('  [TIDAK ADA TEMUAN]');
    } else {
      totalFlagged += findings.length;
      sectionLines.push(`TP ${tpId} | ${relPath}`);
      findings.forEach((f, idx) => {
        sectionLines.push(`  [${idx + 1}] Langkah: ${f.context} | Baris ~${f.lineNum}`);
        f.flags.forEach(flag => {
          if (flag.kriteria === 'TTS_SYMBOL') totalSymbol++;
          if (flag.kriteria === 'TTS_ABBREV') totalAbbrev++;
          sectionLines.push(`      Kriteria: ${flag.kriteria}`);
          sectionLines.push(`      Teks: "${f.teks}"`);
          sectionLines.push(`      Flag: ${flag.detail}`);
        });
      });
    }
    sectionLines.push('');
  }

  sections.push(sectionLines.join('\n'));
}

console.log(`\nTotal UCAP ditemukan: ${totalUCAP}`);
if (totalUCAP < 300) {
  console.error(`STOP: Total UCAP terlalu sedikit (${totalUCAP} < 300) — kemungkinan ekstraksi gagal!`);
  process.exit(1);
}

const report = `AUDIT UCAP FASE D
Generated: ${now}
Total TP diperiksa: 66
Total UCAP diperiksa: ${totalUCAP}
Total UCAP flagged: ${totalFlagged}

=== SUMMARY PER KRITERIA ===
TTS_SYMBOL : ${totalSymbol} UCAP
TTS_ABBREV : ${totalAbbrev} UCAP

=== DETAIL TEMUAN ===

${sections.join('\n')}

=== UCAP BERSIH (tidak ada temuan) ===
${cleanTPs.join(', ')}
`;

const outPath = path.join(__dirname, 'audit-ucap-report.txt');
fs.writeFileSync(outPath, report, 'utf8');

console.log('\n=== SUMMARY ===');
console.log(`Total TP diperiksa : 66`);
console.log(`Total UCAP diperiksa: ${totalUCAP}`);
console.log(`Total UCAP flagged : ${totalFlagged}`);
console.log(`TTS_SYMBOL         : ${totalSymbol}`);
console.log(`TTS_ABBREV         : ${totalAbbrev}`);
console.log(`\nReport disimpan ke: ${outPath}`);
