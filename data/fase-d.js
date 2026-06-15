import KELAS_7 from './fase-d-kelas-7.js';
import KELAS_8 from './fase-d-kelas-8.js';
import KELAS_9 from './fase-d-kelas-9.js';

function validateFaseD(tp) {
  if (!tp.metadata?.tp_id)
    throw new Error(`Fase D: missing metadata.tp_id`);
  if (!tp.metadata?.grade)
    throw new Error(`Fase D: missing metadata.grade — ${tp.metadata?.tp_id}`);
  if (!Array.isArray(tp.runtime) || tp.runtime.length === 0)
    throw new Error(`Fase D: runtime[] kosong — ${tp.metadata?.tp_id}`);
  if (!tp.constraints)
    throw new Error(`Fase D: missing constraints — ${tp.metadata?.tp_id}`);
}

const allTP = [
  ...KELAS_7.tujuan_pembelajaran,
  ...KELAS_8.tujuan_pembelajaran,
  ...KELAS_9.tujuan_pembelajaran,
];

allTP.forEach(validateFaseD);

export default {
  jenjang: 'SMP',
  tujuan_pembelajaran: allTP,
};
