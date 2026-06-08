import re
import os

os.chdir(r'D:\ribuan_pengguna\CLAUDE\FLAF\docs\fase-c-skenario')

CONNECTORS = r'(?:and|but|because|so|when|if|or|then)'

# Match 'connector' embedded in content — preceded and followed by content chars
# Lookbehind: letter/digit/space/dash/arrow/paren (not a string-opening boundary)
# Lookahead:  letter/digit/space/dash/arrow/paren/punctuation (not a string-closing boundary)
pattern = re.compile(
    r"(?<=[a-zA-Z0-9 —–→(])'("
    + CONNECTORS +
    r")'(?=[a-zA-Z0-9 —–→.!?,)\\-])"
)

files_changed = 0
total_replacements = 0

for i in range(1, 23):
    fname = 'tp-{:02d}-v1.js'.format(i)
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()
    matches = pattern.findall(content)
    if matches:
        new_content = pattern.sub(r'"\g<1>"', content)
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(new_content)
        files_changed += 1
        total_replacements += len(matches)
        print('  {}: {} lokasi — {}'.format(fname, len(matches), sorted(set(matches))))

print()
print('Total: {} file berubah, {} lokasi diperbaiki'.format(files_changed, total_replacements))
