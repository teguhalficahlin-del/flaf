#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const FASE_D_DIR = path.resolve('docs/canonical/fase-d');

const GRADE_CONFIG = [
  { kelas: 'kelas-7', count: 24 },
  { kelas: 'kelas-8', count: 24 },
  { kelas: 'kelas-9', count: 18 },
];

function processSource(source) {
  const lines = source.split('\n');
  const result = [];

  let inModelStep = false;
  let modelStepsFound = 0;
  let boardSuggestionInjected = 0;
  let boardSuggestionRemoved = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect entering a step block with type: "MODEL"
    if (/type:\s*["']MODEL["']/.test(line)) {
      inModelStep = true;
      modelStepsFound++;
      result.push(line);
      continue;
    }

    // Detect entering a non-MODEL step block (type: "REPEAT" etc.)
    if (/type:\s*["'](REPEAT|CHANGE|INTERACT|SHARE|CHECK|BOOST)["']/.test(line)) {
      inModelStep = false;
      result.push(line);
      continue;
    }

    // Strip board_suggestion from non-MODEL context
    if (!inModelStep && /board_suggestion:/.test(line)) {
      boardSuggestionRemoved++;
      continue; // skip this line
    }

    // Skip duplicate board_suggestion in MODEL context
    if (inModelStep && /board_suggestion:/.test(line)) {
      // Already present — keep it
      result.push(line);
      continue;
    }

    // Inject board_suggestion after objective in MODEL context
    if (inModelStep && /objective:/.test(line)) {
      result.push(line);

      // Check if next non-empty line is already board_suggestion
      const nextLine = lines[i + 1] || '';
      if (!/board_suggestion:/.test(nextLine)) {
        const indentMatch = line.match(/^(\s+)/);
        const indent = indentMatch ? indentMatch[1] : '      ';
        result.push(`${indent}board_suggestion: "optional",`);
        boardSuggestionInjected++;
      }
      continue;
    }

    result.push(line);
  }

  return {
    output: result.join('\n'),
    modelStepsFound,
    boardSuggestionInjected,
    boardSuggestionRemoved,
  };
}

function main() {
  let totalTPs = 0;
  let totalModelSteps = 0;
  let totalInjected = 0;
  let totalRemoved = 0;

  for (const { kelas, count } of GRADE_CONFIG) {
    for (let i = 1; i <= count; i++) {
      const filename = `tp-${String(i).padStart(2, '0')}.js`;
      const absPath = path.resolve(FASE_D_DIR, kelas, filename);

      if (!fs.existsSync(absPath)) {
        console.warn(`  ⚠ NOT FOUND: ${kelas}/${filename}`);
        continue;
      }

      totalTPs++;
      const source = fs.readFileSync(absPath, 'utf8');
      const { output, modelStepsFound, boardSuggestionInjected, boardSuggestionRemoved } = processSource(source);

      if (output !== source) {
        fs.writeFileSync(absPath, output, 'utf8');
        const actions = [];
        if (boardSuggestionInjected > 0) actions.push(`+${boardSuggestionInjected} injected`);
        if (boardSuggestionRemoved > 0) actions.push(`-${boardSuggestionRemoved} removed`);
        console.log(`  ✅ UPDATED  ${kelas}/${filename}  [${actions.join(', ')}]`);
      } else {
        console.log(`  ─  OK       ${kelas}/${filename}  (${modelStepsFound} MODEL, board_suggestion already correct)`);
      }

      totalModelSteps += modelStepsFound;
      totalInjected += boardSuggestionInjected;
      totalRemoved += boardSuggestionRemoved;
    }
  }

  console.log('\n  ════════════════════════════════');
  console.log(`  TPs processed      : ${totalTPs}`);
  console.log(`  MODEL steps found  : ${totalModelSteps}`);
  console.log(`  board_suggestion + : ${totalInjected}`);
  console.log(`  board_suggestion - : ${totalRemoved}`);
  console.log('  ════════════════════════════════');
}

main();
