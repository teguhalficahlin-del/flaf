import re
import os

os.chdir(r'D:\ribuan_pengguna\CLAUDE\FLAF\docs\fase-c-skenario')

CONNECTORS = r'(?:and|but|because|so|when|if|or|then)'

# Fix A: ''connector' (double single-quote at value start)
# ''WORD'  →  '"WORD"
# The first ' is the string-open delimiter; ''WORD' breaks it.
fix_a = re.compile(r"''(" + CONNECTORS + r")'")

# Fix B: 'connector': (connector followed by colon — mid single-quoted string)
# 'WORD':  →  "WORD":
fix_b = re.compile(r"'(" + CONNECTORS + r")':")

files_changed = 0
total_a = 0
total_b = 0

for i in range(1, 23):
    fname = 'tp-{:02d}-v1.js'.format(i)
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()

    m_a = fix_a.findall(content)
    m_b = fix_b.findall(content)

    if m_a or m_b:
        new = fix_a.sub(r'"\g<1>"', content)   # ''WORD'  →  "WORD"  (keeps outer ' as delimiter)
        new = fix_b.sub(r'"\g<1>":', new)        # 'WORD':  →  "WORD":
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(new)
        files_changed += 1
        total_a += len(m_a)
        total_b += len(m_b)
        parts = []
        if m_a: parts.append('Fix-A {} ({})'.format(len(m_a), sorted(set(m_a))))
        if m_b: parts.append('Fix-B {} ({})'.format(len(m_b), sorted(set(m_b))))
        print('  tp-{:02d}-v1.js: {}'.format(i, ' | '.join(parts)))

print()
print('Total: {} file berubah — Fix-A: {} lokasi, Fix-B: {} lokasi'.format(
    files_changed, total_a, total_b))
