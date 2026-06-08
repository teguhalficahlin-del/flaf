"""
fix_backtick_final.py
=====================
Context-aware replacement of backtick-emphasis (`word`) in all 22 TP Fase C files.

Rules:
  - Inside single-quoted string: `word` → "word"  (double quotes won't conflict)
  - Inside template literal:     `word` → 'word'  (single quotes won't conflict)
  - "word" = any backtick-enclosed content on a SINGLE LINE with no ${ inside

The script is a character-level state machine — it correctly handles:
  - Escaped characters (\\' and \\`)
  - Template literals with ${} expressions
  - Multi-line template literals
  - Single-quoted strings
"""

import re
import os

os.chdir(r'D:\ribuan_pengguna\CLAUDE\FLAF\docs\fase-c-skenario')

# Pattern for same-line backtick emphasis (no newline, no ${} inside)
EMPHASIS = re.compile(r'`([^`\n${}]+)`')


def fix_content(src):
    out = []
    i = 0
    n = len(src)
    total = [0]  # mutable counter

    def _replace_emphasis_sq(text):
        """Inside single-quoted string: `word` → "word" """
        fixed, count = EMPHASIS.subn(r'"\1"', text)
        total[0] += count
        return fixed

    def _replace_emphasis_tl(text):
        """Inside template literal content: `word` → 'word' """
        fixed, count = EMPHASIS.subn(r"'\1'", text)
        total[0] += count
        return fixed

    while i < n:
        ch = src[i]

        # --- escaped character (inside any context) ---
        if ch == '\\' and i + 1 < n:
            out.append(src[i:i+2])
            i += 2
            continue

        # --- single-quoted string ---
        if ch == "'":
            j = i + 1
            while j < n:
                if src[j] == '\\':
                    j += 2
                    continue
                if src[j] == "'":
                    break
                j += 1
            # src[i:j+1] is the full single-quoted string including delimiters
            inner = src[i+1:j]              # content without quotes
            fixed = _replace_emphasis_sq(inner)
            out.append("'")
            out.append(fixed)
            out.append("'")
            i = j + 1
            continue

        # --- template literal ---
        if ch == '`':
            j = i + 1
            depth = 0   # nesting depth of ${...}
            while j < n:
                c2 = src[j]
                if c2 == '\\':
                    j += 2
                    continue
                if c2 == '$' and j + 1 < n and src[j+1] == '{':
                    depth += 1
                    j += 2
                    continue
                if c2 == '}' and depth > 0:
                    depth -= 1
                    j += 1
                    continue
                if c2 == '`' and depth == 0:
                    break
                j += 1
            # src[i:j+1] is the full template literal
            inner = src[i+1:j]              # content without backtick delimiters
            fixed = _replace_emphasis_tl(inner)
            out.append('`')
            out.append(fixed)
            out.append('`')
            i = j + 1
            continue

        out.append(ch)
        i += 1

    return ''.join(out), total[0]


files_changed = 0
total_replacements = 0

for idx in range(1, 23):
    fname = 'tp-{:02d}-v1.js'.format(idx)
    with open(fname, 'r', encoding='utf-8') as f:
        src = f.read()

    fixed, count = fix_content(src)

    if count > 0:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(fixed)
        files_changed += 1
        total_replacements += count
        print('  {}: {} lokasi diperbaiki'.format(fname, count))
    else:
        print('  {}: tidak ada perubahan'.format(fname))

print()
print('Total: {} file berubah, {} lokasi diperbaiki'.format(files_changed, total_replacements))
