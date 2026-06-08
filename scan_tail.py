import os

path = 'D:/ribuan_pengguna/CLAUDE/FLAF/docs/fase-c-skenario'

for i in range(1, 23):
    fname = '{}/tp-{:02d}-v1.js'.format(path, i)
    with open(fname, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    tail = lines[-5:]
    problems = []
    export_found = False

    for j, line in enumerate(tail):
        stripped = line.rstrip('\r\n')
        abs_line = len(lines) - 5 + j + 1
        s = stripped.strip()

        if 'export default' in stripped:
            export_found = True
            continue

        if export_found:
            # Any non-empty line after export default is suspicious
            if s:
                problems.append('L{}: [{}] hex={}'.format(
                    abs_line, repr(s), s.encode('utf-8').hex()))

    if problems:
        print('tp-{:02d}-v1.js  BERMASALAH:'.format(i))
        for p in problems:
            print('    ' + p)
        print('    5 baris terakhir: {}'.format([l.rstrip() for l in tail]))
    else:
        print('tp-{:02d}-v1.js  OK'.format(i))
