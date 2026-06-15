#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

// ─── Config ────────────────────────────────────────────────────────────────

const FASE_D_DIR = path.resolve('docs/fase-d');

const GRADE_CONFIG = [
  { kelas: 'kelas-7', count: 24 },
  { kelas: 'kelas-8', count: 24 },
  { kelas: 'kelas-9', count: 18 },
];

const VALID_STEP_TYPES     = ['MODEL', 'REPEAT', 'CHANGE', 'INTERACT', 'SHARE', 'CHECK', 'BOOST'];
const VALID_INTERACT_MODES = ['pair', 'small_group', 'whole_group', 'walk_around'];
const VALID_SHARE_MODES    = ['oral_response', 'short_dialogue', 'mini_presentation', 'short_writing', 'gallery_share'];
const VALID_COMPLEXITY     = ['Acquire', 'Expand', 'Integrate'];
const VALID_GRADES         = [7, 8, 9];

const REQUIRED_META = [
  'tp_id', 'pattern_id', 'title', 'short_title', 'grade', 'genre', 'cluster',
  'topic', 'context', 'communicative_goal', 'vocabulary_domain',
  'input_anchor', 'output_anchor', 'prerequisite_patterns', 'reusable_in',
  'complexity_level', 'session_version',
];

const CONSTRAINT_FLAGS = [
  'single_productive_pattern', 'requires_student_output', 'check_without_score',
  'boost_without_label', 'tts_optional_backup', 'self_contained',
];

const DIFF_ALLOWED_TYPES  = new Set(['CHANGE', 'INTERACT', 'SHARE']);
const SUPPORT_FORBIDDEN   = new Set(['CHECK', 'BOOST']);
const CHECK_FORBIDDEN     = ['score', 'grade', 'value', 'points', 'percentage'];
const BOOST_FORBIDDEN     = ['student_level', 'weak', 'remedial_group', 'level', 'group', 'category'];

// ─── Rule checkers ─────────────────────────────────────────────────────────

function checkA1(tp, errors) {
  const meta = tp.metadata;
  if (!meta || typeof meta !== 'object') {
    errors.push('[A1] metadata tidak ditemukan');
    return;
  }
  for (const field of REQUIRED_META) {
    if (meta[field] === undefined || meta[field] === null) {
      errors.push(`[A1] metadata.${field} tidak ditemukan`);
    }
  }
  if (meta.grade !== undefined && (typeof meta.grade !== 'number' || !VALID_GRADES.includes(meta.grade))) {
    errors.push(`[A1] metadata.grade harus number 7|8|9 — dapat: ${JSON.stringify(meta.grade)}`);
  }
  if (meta.complexity_level !== undefined && !VALID_COMPLEXITY.includes(meta.complexity_level)) {
    errors.push(`[A1] metadata.complexity_level harus "Acquire"|"Expand"|"Integrate" — dapat: ${JSON.stringify(meta.complexity_level)}`);
  }
  if (meta.session_version !== undefined && meta.session_version !== '1.0') {
    errors.push(`[A1] metadata.session_version harus "1.0" — dapat: ${JSON.stringify(meta.session_version)}`);
  }
  for (const arr of ['vocabulary_domain', 'prerequisite_patterns', 'reusable_in']) {
    if (meta[arr] !== undefined && !Array.isArray(meta[arr])) {
      errors.push(`[A1] metadata.${arr} harus Array`);
    }
  }
}

function checkA2(tp, errors) {
  const res = tp.resources;
  if (!res || typeof res !== 'object') {
    errors.push('[A2] resources tidak ditemukan');
    return;
  }
  if (!Array.isArray(res.active_vocabulary) || res.active_vocabulary.length === 0) {
    errors.push('[A2] resources.active_vocabulary harus non-kosong Array');
  }
  if (!Array.isArray(res.model_sentences) || res.model_sentences.length === 0) {
    errors.push('[A2] resources.model_sentences harus non-kosong Array');
  } else {
    for (const m of res.model_sentences) {
      if (!m.id || !m.text) {
        errors.push(`[A2] model_sentence ${JSON.stringify(m.id)} harus punya id dan text`);
      }
    }
  }
  if (!Array.isArray(res.visual_cues) || res.visual_cues.length === 0) {
    errors.push('[A2] resources.visual_cues harus non-kosong Array');
  } else {
    for (const v of res.visual_cues) {
      if (!v.id || !v.description) {
        errors.push(`[A2] visual_cue ${JSON.stringify(v.id)} harus punya id dan description`);
      }
    }
  }
  if (!Array.isArray(res.gesture_cues) || res.gesture_cues.length === 0) {
    errors.push('[A2] resources.gesture_cues harus non-kosong Array');
  } else {
    for (const g of res.gesture_cues) {
      if (!g.id || !g.description) {
        errors.push(`[A2] gesture_cue ${JSON.stringify(g.id)} harus punya id dan description`);
      }
    }
  }
}

function checkA3(tp, errors) {
  const runtime = tp.runtime;
  if (!Array.isArray(runtime)) {
    errors.push('[A3] runtime tidak ditemukan atau bukan Array');
    return;
  }
  const foundTypes = new Set(runtime.map(s => s.type));
  for (const t of VALID_STEP_TYPES) {
    if (!foundTypes.has(t)) {
      errors.push(`[A3] Step type ${t} tidak ditemukan`);
    }
  }
  for (const step of runtime) {
    if (step.type === 'INTERACT' && step.interaction_mode !== undefined) {
      if (!VALID_INTERACT_MODES.includes(step.interaction_mode)) {
        errors.push(`[A3] INTERACT.interaction_mode nilai tidak valid: "${step.interaction_mode}" (step: ${step.id})`);
      }
    }
    if (step.type === 'SHARE' && step.share_mode !== undefined) {
      if (!VALID_SHARE_MODES.includes(step.share_mode)) {
        errors.push(`[A3] SHARE.share_mode nilai tidak valid: "${step.share_mode}" (step: ${step.id})`);
      }
    }
  }
}

function checkA4(tp, errors) {
  const res = tp.resources;
  if (!res) return;
  const sentenceIds = new Set((res.model_sentences || []).map(m => m.id));
  const visualIds   = new Set((res.visual_cues    || []).map(v => v.id));
  const gestureIds  = new Set((res.gesture_cues   || []).map(g => g.id));

  for (const step of (tp.runtime || [])) {
    if (Array.isArray(step.sentence_refs)) {
      for (const ref of step.sentence_refs) {
        if (!sentenceIds.has(ref)) {
          errors.push(`[A4] sentence_ref "${ref}" di step ${step.id} tidak ada di model_sentences`);
        }
      }
    }
    if (Array.isArray(step.visual_refs)) {
      for (const ref of step.visual_refs) {
        if (!visualIds.has(ref)) {
          errors.push(`[A4] visual_ref "${ref}" di step ${step.id} tidak ada di visual_cues`);
        }
      }
    }
    if (Array.isArray(step.gesture_refs)) {
      for (const ref of step.gesture_refs) {
        if (!gestureIds.has(ref)) {
          errors.push(`[A4] gesture_ref "${ref}" di step ${step.id} tidak ada di gesture_cues`);
        }
      }
    }
  }
}

function checkA5(tp, errors) {
  for (const step of (tp.runtime || [])) {
    if (step.differentiation === undefined) continue;
    if (!DIFF_ALLOWED_TYPES.has(step.type)) {
      errors.push(`[A5] differentiation tidak boleh ada di step type ${step.type} (${step.id})`);
      continue;
    }
    const d = step.differentiation;
    for (const key of ['easy', 'standard', 'challenge']) {
      if (!d[key] || typeof d[key] !== 'object' || Object.keys(d[key]).length === 0) {
        errors.push(`[A5] differentiation.${key} kosong atau tidak ada di step ${step.id}`);
      }
    }
  }
}

function checkA6(tp, errors) {
  for (const step of (tp.runtime || [])) {
    if (SUPPORT_FORBIDDEN.has(step.type) && step.support !== undefined) {
      errors.push(`[A6] support tidak boleh ada di step type ${step.type} (${step.id})`);
    }
  }
}

function checkA7(tp, errors) {
  for (const step of (tp.runtime || [])) {
    if (step.type !== 'CHECK') continue;
    for (const field of CHECK_FORBIDDEN) {
      if (step[field] !== undefined) {
        errors.push(`[A7] CHECK step ${step.id} tidak boleh punya field "${field}"`);
      }
    }
  }
}

function checkA8(tp, errors) {
  for (const step of (tp.runtime || [])) {
    if (step.type !== 'BOOST') continue;
    for (const field of BOOST_FORBIDDEN) {
      if (step[field] !== undefined) {
        errors.push(`[A8] BOOST step ${step.id} tidak boleh punya field "${field}"`);
      }
    }
  }
}

function checkB(tp, errors) {
  const con = tp.constraints;
  if (!con || typeof con !== 'object') {
    errors.push('[B] constraints tidak ditemukan');
    return;
  }
  for (const flag of CONSTRAINT_FLAGS) {
    if (con[flag] !== true) {
      errors.push(`[B] constraints.${flag} harus true — dapat: ${JSON.stringify(con[flag])}`);
    }
  }
}

function checkE5(tp, errors) {
  const runtime = tp.runtime;
  if (!Array.isArray(runtime)) return 0;
  const total = runtime.reduce((sum, s) => sum + (typeof s.duration === 'number' ? s.duration : 0), 0);
  if (total < 45 || total > 90) {
    errors.push(`[E5] Total durasi ${total} menit — harus antara 45–90 (inklusif)`);
  }
  return total;
}

function checkVR1(tp, errors) {
  const prereqs = tp.metadata?.prerequisite_patterns;
  if (!Array.isArray(prereqs) || prereqs.length === 0) return;

  const allSupport = new Set();
  for (const step of (tp.runtime || [])) {
    if (Array.isArray(step.support?.pattern_support)) {
      for (const p of step.support.pattern_support) allSupport.add(p);
    }
  }
  for (const prereq of prereqs) {
    if (!allSupport.has(prereq)) {
      errors.push(`[VR-1] ${prereq} tidak muncul di pattern_support manapun`);
    }
  }
}

function checkVR2(tp, errors) {
  const patternId = tp.metadata?.pattern_id;
  if (!patternId) return;
  for (const step of (tp.runtime || [])) {
    if (Array.isArray(step.support?.pattern_support)) {
      if (step.support.pattern_support.includes(patternId)) {
        errors.push(`[VR-2] pattern_id "${patternId}" muncul di support step ${step.id} — tidak boleh`);
      }
    }
  }
}

// ─── Main ──────────────────────────────────────────────────────────────────

async function main() {
  // Guard: docs/fase-d/ must exist
  try {
    fs.accessSync(FASE_D_DIR);
  } catch {
    console.error('ERROR: docs/fase-d/ tidak ditemukan. Jalankan dari root repo.');
    process.exit(1);
  }

  // Build file list
  const files = [];
  for (const { kelas, count } of GRADE_CONFIG) {
    for (let i = 1; i <= count; i++) {
      const filename = `tp-${String(i).padStart(2, '0')}.js`;
      files.push({
        relPath: `${kelas}/${filename}`,
        absPath: path.resolve(FASE_D_DIR, kelas, filename),
      });
    }
  }

  let passCount = 0;
  let failCount = 0;

  for (const { relPath, absPath } of files) {
    const errors = [];
    let tp = null;
    let totalDuration = 0;
    let stepCount = 0;

    // Import
    try {
      const mod = await import(pathToFileURL(absPath).href);
      tp = mod.default;
      if (!tp || typeof tp !== 'object') {
        errors.push('[IMPORT ERROR] export default bukan object');
        tp = null;
      }
    } catch (e) {
      errors.push(`[IMPORT ERROR] ${e.message}`);
    }

    // Run all checks
    if (tp !== null) {
      checkA1(tp, errors);
      checkA2(tp, errors);
      checkA3(tp, errors);
      checkA4(tp, errors);
      checkA5(tp, errors);
      checkA6(tp, errors);
      checkA7(tp, errors);
      checkA8(tp, errors);
      checkB(tp, errors);
      totalDuration = checkE5(tp, errors);
      checkVR1(tp, errors);
      checkVR2(tp, errors);
      stepCount = Array.isArray(tp.runtime) ? tp.runtime.length : 0;
    }

    // Report
    if (errors.length === 0) {
      console.log(`  ✅ LOLOS  ${relPath}  (${totalDuration} menit, ${stepCount} steps)`);
      passCount++;
    } else {
      console.log(`  ❌ GAGAL  ${relPath}`);
      for (const e of errors) {
        console.log(`       ${e}`);
      }
      failCount++;
    }
  }

  // Summary
  const total = passCount + failCount;
  console.log('\n  ════════════════════════════════');
  console.log(`  Total: ${total} | Lolos: ${passCount} | Gagal: ${failCount}`);
  console.log('  ════════════════════════════════');

  process.exit(failCount > 0 ? 1 : 0);
}

main().catch(e => {
  console.error('Unexpected error:', e);
  process.exit(1);
});
