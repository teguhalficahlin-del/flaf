"""
fix_backtick_v2.py
==================
Line-level context-aware replacement of backtick-emphasis (`word`) in TP Fase C files.

Heuristic (reliable for these data files):
  Count unescaped single-quotes BEFORE the first backtick emphasis on the line:
  - Odd  → we are inside a single-quoted string  → replace `word` with "word"
  - Even → we are inside a template literal       → replace `word` with 'word'

Why this works for these files:
  - Template literal content lines have 0 single-quotes before emphasis
  - Single-quoted field value lines have exactly 1 opening ' before emphasis
  - Checklist array items start with ' (1 quote before emphasis)
  Apostrophes in English examples (don't, can't) appear AFTER the emphasis, not before.
"""

import re
import os

os.chdir(r'D:\ribuan_pengguna\CLAUDE\FLAF\docs\fase-c-skenario')

# Same-line backtick emphasis: `...` with no newline or ${ inside
EMPHASIS = re.compile(r'`([^`\n${}]+)`')


def fix_line(line):
    if '`' not in line:
        return line, 0

    m = EMPHASIS.search(line)
    if not m:
        return line, 0

    # Count single quotes before the first emphasis
    sq_before = line[:m.start()].count("'")

    if sq_before % 2 == 1:
        # Inside single-quoted string → use double quotes
        fixed, n = EMPHASIS.subn(r'"\1"', line)
    else:
        # Inside template literal (or top-level) → use single quotes
        fixed, n = EMPHASIS.subn(r"'\1'", line)

    return fixed, n


files_changed = 0
total_replacements = 0

for idx in range(1, 23):
    fname = 'tp-{:02d}-v1.js'.format(idx)
    with open(fname, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    file_count = 0
    for line in lines:
        fixed, n = fix_line(line)
        new_lines.append(fixed)
        file_count += n

    if file_count > 0:
        with open(fname, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        files_changed += 1
        total_replacements += file_count
        print('  {}: {} lokasi diperbaiki'.format(fname, file_count))
    else:
        print('  {}: tidak ada perubahan'.format(fname))

print()
print('Total: {} file berubah, {} lokasi diperbaiki'.format(files_changed, total_replacements))
