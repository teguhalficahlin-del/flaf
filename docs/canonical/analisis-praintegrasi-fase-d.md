# Analisis Pra-Integrasi Fase D ke Runtime

> Sifat dokumen: laporan investigasi (read-only). Tidak ada perubahan kode yang dilakukan di tahap ini.

## 1. Registry Pattern — `data/index.js`

Registry SD dan SMP sudah **dipisah secara eksplisit**, bukan disatukan via satu `flatMap`:

```js
const REGISTRY     = { 'A': FASE_A, 'B': FASE_B, 'C': FASE_C };   // SD
const REGISTRY_SMP = { 'D': FASE_D };                              // SMP
```

- `getAllTP_SD()` — flatMap atas `REGISTRY`, sort by `kelas`/`nomor` (skema SD).
- `getAllTP_SMP()` — flatMap atas `REGISTRY_SMP`, sort by `metadata.grade`/`metadata.tp_id` (skema SMP).
- `getAllTP()` — alias legacy, **hanya** memanggil `getAllTP_SD()` (tidak breaking untuk caller lama).

**Tidak ditemukan hardcode yang menolak/mengabaikan Fase D.** Justru sebaliknya: jalur SMP sudah didaftarkan terpisah dan zero-breaking terhadap REGISTRY SD. `getTP(id)` dan `getFase(key)` masih hanya menyisir `REGISTRY` (SD) — ini bukan blocker untuk Fase D karena Fase D punya jalur baca sendiri via `getAllTP_SMP()`/`REGISTRY_SMP` export, tapi perlu dicatat sebagai **gap konsistensi API** (lihat §6).

## 2. Renderer Groups

### 2a. `screens/sesi-runtime.js` (SD — Fase A/B/C)

State machine: `preview → resume/bp_resume → entering → running → selesai`.

Field yang dibaca dari `langkah[]` (via `_currentLangkah()`):

| Field | Generic/Phase-specific | Catatan |
|---|---|---|
| `langkah.tipe` | Generic | fallback `'instruksi'` |
| `langkah.teks` | Generic | wajib |
| `langkah.cue` | Generic | opsional |
| `langkah.bantuan` | Generic | null \| string \| string[] |
| `langkah.diferensiasi` | Generic | `{ perluSupport, sudahBisa, needHelp, ready }` |
| `langkah.darurat` | Generic | opsional |
| `langkah.energi` | Generic | render energi pill |
| `langkah.interaction_mode` | Phase-C leaning | render mode badge, opsional |
| `langkah.blok` | Phase-C leaning | render header INPUT/INTERACT/OUTPUT |
| `langkah.assessment_overlay` | Phase-C only | render panel penilaian |
| `_state.tp.breakpoints[]` | Phase-C only | resume via `after_langkah_id` |

Anti-branching rule dipatuhi: **tidak ada** `if (tp.nomor <= 14)` atau `fase === 'A'` di file ini — boundary tier ada di data, bukan runtime (sesuai CONTEXT.md §Schema Tier Policy).

### 2b. `screens/sesi-runtime-smp.js` (SMP — Fase D, sudah ada, 156 baris)

State machine: `preview → entering → running → selesai → closure`. Export: `srSMPMount`, `srSMPUnmount`.

Field yang dibaca dari TP Fase D:

- `metadata.{grade, title, short_title, topic, genre, complexity_level, communicative_goal, context}`
- `resources.{active_vocabulary[], model_sentences[], visual_cues[], gesture_cues[]}`
- `runtime[]` — step object per tipe:
  - **MODEL**: `sentence_refs[]`, `visual_refs[]`, `gesture_refs[]`
  - **REPEAT**: `sentence_refs[]`, `repeat_mode`
  - **CHANGE**: `prompt`, `change_target[]`, `differentiation.{easy,standard,challenge}`
  - **INTERACT**: `interaction_mode`, `task`, `differentiation`
  - **SHARE**: `share_mode`, `task`, `differentiation`
  - **CHECK**: `observe[]`, `teacher_next_action.{ready,needs_model,needs_repeat}`
  - **BOOST**: `trigger[]`, `action[]`

Status: preview/entering/running/selesai/closure sudah implementasi penuh dan ketujuh tipe step sudah tercover. **Belum ada**: overlay penilaian formatif, breakpoint resume, TTS untuk model sentences, kondisi darurat kelas — semuanya ada di runtime SD tapi tidak (belum) di-port ke runtime SMP.

## 3. File Fase D — Lokasi & Contoh

- Data: `data/fase-d.js` (agregator) + `data/fase-d-kelas-7.js`, `-8.js`, `-9.js`.
- Sumber TP individual: `docs/canonical/fase-d/kelas-{7,8,9}/tp-NN.js`.
- Cakupan: Kelas 7 = 24 TP, Kelas 8 = 24 TP, Kelas 9 = 18 TP → **total 66 TP**.
- Validator: `tools/validate-fase-d.js` (350 baris).

Contoh TP (Kelas 7, `tp-01.js`) field lengkap:

```
metadata: { tp_id, pattern_id, title, short_title, grade, genre, cluster, topic,
            context, communicative_goal, vocabulary_domain[], input_anchor,
            output_anchor, prerequisite_patterns[], reusable_in[],
            complexity_level, notes, session_version }
resources: { active_vocabulary[], model_sentences[{id,text}],
             visual_cues[{id,description,asset_id}], gesture_cues[{id,description}] }
runtime[]: 7 tipe step (MODEL/REPEAT/CHANGE/INTERACT/SHARE/CHECK/BOOST) — field per tipe lihat §2b
constraints: { single_productive_pattern, requires_student_output, check_without_score,
               boost_without_label, tts_optional_backup, self_contained } — semua true
```

Struktur ini konsisten dipakai lintas Kelas 7/8/9 (skema sama, isi konten beda) — tidak ditemukan divergensi struktural antar tingkat.

### `tools/validate-fase-d.js`

Memvalidasi 11 grup rule: metadata wajib (A1), resources non-kosong + id/text (A2), 7 tipe runtime wajib + enum valid (A3), referential integrity refs→resources (A4), struktur differentiation easy/standard/challenge (A5), larangan support block di CHECK/BOOST (A6), larangan field skor di CHECK (A7), larangan field level/grup di BOOST (A8), 6 constraint flag wajib true (B), total durasi 45–90 menit (E5), prerequisite coverage (VR-1), self-pattern exclusion (VR-2).

## 4. Gap Analysis — Field Fase D vs Renderer SD

| Field Fase D | Status di sesi-runtime.js (SD) | Status di sesi-runtime-smp.js |
|---|---|---|
| `metadata.grade/title/topic/...` | Tidak ada (SD pakai `kelas`, `judul` di level lain) | ✅ sudah ditangani |
| `resources.*` | Tidak ada konsep "resources" terpisah di SD (semua inline di `langkah`) | ✅ sudah ditangani |
| `runtime[]` step types (MODEL/REPEAT/CHANGE/INTERACT/SHARE/CHECK/BOOST) | SD pakai `langkah[]` dengan `tipe` bebas-teks, bukan enum 7-tipe | ✅ sudah ditangani |
| `differentiation.{easy,standard,challenge}` | **Mirip tapi beda struktur**: SD punya `diferensiasi.{perluSupport,sudahBisa,needHelp,ready}` — nama field & semantik berbeda | ✅ ditangani sesuai skema Fase D sendiri |
| `assessment_overlay` (SD/Fase C) | Ada, overlay penilaian besar (350+ baris) | ❌ **belum ada equivalent** untuk CHECK step Fase D |
| `breakpoints[]` (SD/Fase C) | Ada | ❌ tidak ada di Fase D |
| TTS untuk `langkah` (SD) vs `model_sentences` (Fase D) | Ada (Web Speech API) | ❌ belum di-port |
| Kondisi darurat kelas (overlay 2-tahap, SD) | Ada | ❌ Fase D punya `darurat` versi data (`BOOST.trigger/action`) tapi belum ada UI overlay setara |

**Field yang namanya sama tapi makna berbeda** — yang paling perlu diwaspadai jika ada upaya "menyatukan" kode runtime di masa depan:
- `interaction_mode`: di SD bernilai bebas (badge render generik); di Fase D enum ketat (`pair/small_group/whole_group/walk_around`) khusus step INTERACT.
- `differentiation` vs `diferensiasi`: struktur key berbeda total (easy/standard/challenge vs perluSupport/sudahBisa/needHelp/ready) — **jangan disamakan secara naif**.

Tidak ditemukan field Fase D yang sama sekali tidak punya jalur baca — `sesi-runtime-smp.js` sudah mencakup seluruh field skema Fase D kecuali fitur UI tambahan (penilaian, darurat overlay, TTS, breakpoint) yang memang belum diimplementasikan, bukan soal field tidak terbaca.

## 5. Kelas Mapping (SD vs SMP)

- `dashboard.js` baris ~192: `_tpJenjang(tp)` → `tp.metadata?.grade >= 7 ? 'SMP' : 'SD'` — **branching jenjang sudah ada** di layer UI, bukan di runtime.
- `dashboard.js` baris ~1113: mount dispatcher → `isSMP ? srSMPMount(...) : srMount(...)` — titik kritis dimana SD/SMP dipisah berdasarkan `metadata.grade`.
- `data/index.js` baris ~160: `allTps = [...getAllTP(), ...getAllTP_SMP()]` — penggabungan untuk listing di dashboard.

**Hardcode UI yang masih SD-only / Kelas 1–6, belum mendukung Kelas 7–9:**
- `nilai.js` (~baris 1104–1114): tombol pilih tingkat hanya render Kelas 1–6, **tidak ada tombol Kelas 7–9**.
- `nilai.js` (~baris 896–905): tombol download soal STS/SAS hanya untuk Kelas 1–2 (komentar di kode sendiri menyebut Kelas 3–4/Fase B "belum ada file soal" — jadi Kelas 7–9 juga belum punya jalur ini sama sekali).
- `kurikulum.js` (~baris 344): `kelasLabel` hardcode suffix `"SD"` (`` `Kelas ${k} SD` ``) — akan salah konteks bila dipakai untuk render TP Fase D.
- `activation.js` (~baris 340): badge teks `"FASE A · SD KELAS 1 & 2"` — ini display statis untuk Fase A spesifik, bukan logic, jadi tidak salah konteks tapi murni informatif.

Tidak ditemukan fungsi `tambahKelas()` di codebase saat ini (kemungkinan nama fungsi sudah berubah atau tidak relevan lagi) — perlu konfirmasi nama fungsi aktual ke user bila ingin ditelusuri lebih jauh.

## 6. Ringkasan

**Tidak ada hardblock struktural** yang mencegah Fase D tampil/berjalan: registry, getAllTP_SMP, dan runtime SMP terpisah sudah dibangun dan saling terhubung melalui `dashboard.js`. Pekerjaan integrasi yang tersisa bersifat **penambahan fitur paritas**, bukan perbaikan penolakan:

1. `nilai.js` — tambah jalur UI Kelas 7–9 (tombol tingkat, soal — jika diperlukan untuk SMP).
2. `kurikulum.js` baris ~344 — `kelasLabel` perlu cabang dinamis agar tidak memaksa suffix "SD" untuk TP Fase D.
3. `sesi-runtime-smp.js` — gap fitur: penilaian formatif (CHECK), kondisi darurat (BOOST UI), TTS model_sentences, breakpoint/resume granular. Ini adalah keputusan produk (apakah fitur ini memang diperlukan untuk Fase D atau secara desain disengaja lebih sederhana) — bukan bug.
4. `data/index.js` — `getTP(id)` dan `getFase(key)` belum menyisir `REGISTRY_SMP`; perlu diputuskan apakah API ini perlu diperluas atau memang sengaja dipisah karena pemanggil SD/SMP sudah eksplisit beda jalur.

Tidak ada perubahan kode dilakukan dalam analisis ini.
