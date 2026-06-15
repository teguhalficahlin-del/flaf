# FLAF Fase D v1.1 — Schema JS

---

## Metadata

| Field            | Nilai                                                          |
|------------------|------------------------------------------------------------------|
| Versi            | v1.1 — Schema JS + Addendum Authoring dari PILOT TP-01          |
| Status           | FINAL — PILOT TP-01 Tervalidasi, Siap untuk Pengisian 65 TP     |
| Tanggal Dibuat   | 14 Juni 2026                                                    |
| Tanggal Selesai  | 14 Juni 2026                                                    |
| Dokumen Induk    | FLAF Fase D Fondasi Pedagogis v1.0                              |
| Dokumen Terkait  | FLAF Fase D Pattern Registry v1.0, FLAF Fase D TP Mapping v1.0 |
| Disusun oleh     | Romo (pemilik proyek), Claude Chat, ChatGPT                     |

---

## Catatan Versioning

| Versi | Tipe Perubahan | Status |
|-------|----------------|--------|
| v0.1  | Proposal awal — 4-layer architecture (metadata/resources/runtime/constraints) | ✅ Selesai |
| v0.2  | Revisi: shared envelope vs payload per tipe, prerequisite/support, penghapusan TTS per-TP, terminologi interaction_mode/share_mode | ✅ Selesai |
| v1.0  | Finalisasi: struktur model_sentences, generalisasi support.pattern_support, session_version, validation rules | ✅ Selesai |
| v1.1  | Editorial — Addendum Authoring dari PILOT TP-01: prinsip active_vocabulary dan framing ekstensi BOOST | ✅ Selesai |

---

## Daftar Isi

1. Filosofi Schema
2. Layer 1 — metadata
3. Layer 2 — resources
4. Layer 3 — runtime
5. Layer 4 — constraints
6. Validation Rules
7. Konvensi Engine
8. Skeleton Referensi (TP-01 Kelas 7)
9. Catatan Authoring (Addendum v1.1)
10. Penutup

---

## 1. Filosofi Schema

Setiap file `docs/fase-d/kelas-X/tp-XX.js` mengikuti arsitektur
4-layer:

```
TP
├── metadata     // identitas & relasi (dari TP Mapping)
├── resources    // seluruh aset self-contained (NS-13)
├── runtime      // urutan 7 Runtime Step Types — single source
│                   of truth untuk perilaku pembelajaran
└── constraints  // deklarasi yang dapat diverifikasi struktural
```

Prinsip pemisahan tanggung jawab:

- **metadata** hanya menyediakan identitas dan relasi (tidak
  memengaruhi rendering/perilaku runtime).
- **resources** hanya menyediakan aset yang dapat
  direferensikan (tidak menentukan urutan/perilaku).
- **runtime** adalah satu-satunya sumber kebenaran untuk
  perilaku pembelajaran — apa yang terjadi, kapan, dan
  bagaimana.
- **constraints** hanya menyediakan deklarasi terverifikasi
  struktural — subset dari 14 Negative Specification yang bisa
  dicek tanpa membaca konten secara kualitatif.

### Shared Envelope vs Payload per Tipe

Ketujuh Runtime Step Types (MODEL, REPEAT, CHANGE, INTERACT,
SHARE, CHECK, BOOST) berbagi ENVELOPE minimal:

```
{ id, type, duration }
```

Selebihnya adalah PAYLOAD spesifik per tipe (lihat Layer 3).
Ini BUKAN "satu shape universal" — setiap tipe punya field yang
relevan dengan fungsinya, sementara id/type/duration konsisten
di semua tipe untuk kebutuhan rendering dan perhitungan total
durasi.

---

## 2. Layer 1 — metadata

**Struktur: FLAT** (bukan nested/grouped).

Rationale: 66 file akan sering dicari (grep/search/generator);
akses langsung (`metadata.pattern_id`) lebih sederhana
daripada melalui sub-grup; seluruh field (kecuali
session_version) berasal langsung dari TP Mapping sehingga
mapping 1:1 terlihat jelas.

| Field                 | Type     | Wajib    | Rationale                                                      | Mapping              |
|-----------------------|----------|----------|------------------------------------------------------------------|----------------------|
| tp_id                 | string   | Ya       | identitas file (path)                                           | TP Mapping           |
| pattern_id            | string   | Ya       | target pattern tunggal sesi ini                                 | NS-2, TP Mapping     |
| title                 | string   | Ya       | judul lengkap ("[Topic]: [Communicative Function]")             | TP Mapping           |
| short_title           | string   | Ya       | tampilan ringkas (mobile)                                       | TP Mapping           |
| grade                 | number   | Ya       | 7 / 8 / 9 — filter                                              | TP Mapping           |
| genre                 | string   | Ya       | sesuai Genre Architecture — filter                              | TP Mapping           |
| cluster               | string   | Ya       | sesuai Pattern Registry                                         | TP Mapping           |
| topic                 | string   | Ya       | tema umum sesi                                                  | TP Mapping           |
| context               | string   | Ya       | situasi konkret satu kalimat                                    | TP Mapping           |
| communicative_goal    | string   | Ya       | tujuan komunikatif operasional                                  | TP Mapping           |
| vocabulary_domain     | string[] | Ya       | domain kosakata                                                 | TP Mapping           |
| input_anchor          | string   | Ya       | sumber stimulus (anchor MODEL)                                  | TP Mapping           |
| output_anchor         | string   | Ya       | produk utama siswa (anchor SHARE)                               | TP Mapping           |
| prerequisite_patterns | string[] | Ya       | pattern_id yang harus muncul sebagai support (lihat VR-1)       | GR-GEN-3, TP Mapping |
| reusable_in           | string[] | Ya       | pattern_id yang dapat memakai ulang topik ini                   | TP Mapping           |
| complexity_level      | string   | Ya       | Acquire / Expand / Integrate                                    | TP Mapping           |
| notes                 | string   | Opsional | catatan author                                                  | TP Mapping           |
| session_version       | string   | Ya       | versi Schema JS yang diikuti file ini (mis. "1.0") — untuk migrasi terarah bila schema berevolusi | Schema evolution |

`estimated_duration` SENGAJA TIDAK DISIMPAN — dapat dihitung
kapan saja sebagai `sum(runtime[].duration)`.

---

## 3. Layer 2 — resources

Seluruh aset yang dapat direferensikan oleh `runtime[]`,
memastikan setiap TP self-contained (NS-13) — guru dapat
menjalankan sesi hanya dengan membuka satu file ini.

| Field             | Type  | Wajib | Struktur Item                       | Rationale |
|-------------------|-------|-------|--------------------------------------|-----------|
| active_vocabulary | string[] | Ya | —                                   | kosakata aktif sesi ini |
| model_sentences   | array | Ya    | `{ id, text }`                      | sumber MODEL & REPEAT — kalimat realisasi konkret dari target_pattern, sesuai topic/context TP ini (BUKAN salinan example_output Pattern Registry yang generik) |
| visual_cues       | array | Ya    | `{ id, description, asset_id }`     | dukungan visual untuk MODEL/INTERACT (NS-11) — `asset_id: null` di v1, dapat diisi referensi aset gambar PWA tanpa breaking change |
| gesture_cues      | array | Ya    | `{ id, description }`               | demonstrasi gestur guru untuk MODEL (NS-11) |

### Contoh item

```javascript
// model_sentences
{ id: "model_1", text: "I am Rina. I am from Bandung." }

// visual_cues
{ id: "visual_1", description: "student waves and smiles", asset_id: null }

// gesture_cues
{ id: "gesture_1", description: "teacher points to self while saying 'I am...'" }
```

> Lihat Bagian 9.1 untuk prinsip authoring `active_vocabulary`
> (unit leksikal reusable, bukan nilai instansiasi spesifik).

---

## 4. Layer 3 — runtime

Array berurutan dari step objects. Urutan dapat bervariasi per
TP (sesuai Fondasi Bagian 6); jumlah step per tipe TIDAK
dibatasi — satu TP dapat memiliki lebih dari satu CHANGE/
INTERACT bila diperlukan untuk memenuhi rentang 45–90 menit
(GR-4).

### Envelope (semua tipe)

| Field    | Type   |
|----------|--------|
| id       | string |
| type     | string — salah satu dari MODEL/REPEAT/CHANGE/INTERACT/SHARE/CHECK/BOOST |
| duration | number (menit) |

### `support` (field umum opsional)

```javascript
support: { pattern_support: string[] }
```

Valid pada: **MODEL, REPEAT, CHANGE, INTERACT, SHARE** (tidak
pada CHECK/BOOST — keduanya bukan aktivitas produksi pattern).
Field ini OPSIONAL per step; lihat Validation Rules untuk
aturan cakupannya.

### `differentiation` (field umum opsional)

```javascript
differentiation: { easy: {}, standard: {}, challenge: {} }
```

Valid HANYA pada: **CHANGE, INTERACT, SHARE** — tiga step yang
menghasilkan output produksi siswa. MODEL dan REPEAT tidak
memerlukan diferensiasi karena seluruh kelas menerima input
yang sama (Fondasi Bagian 8: "Materi sama. Pattern sama. Yang
berubah hanya target output."). Struktur internal masing-
masing level (easy/standard/challenge) bersifat konten-spesifik
per TP — ditentukan saat pengisian TP, bukan dipaksakan oleh
schema.

### Payload per Tipe

**MODEL**

| Field         | Type     |
|---------------|----------|
| objective     | string   |
| sentence_refs | string[] (id → resources.model_sentences) |
| visual_refs   | string[] (id → resources.visual_cues) |
| gesture_refs  | string[] (id → resources.gesture_cues) |
| support       | opsional |

**REPEAT**

| Field         | Type     |
|---------------|----------|
| objective     | string   |
| sentence_refs | string[] (id → resources.model_sentences) |
| repeat_mode   | string (contoh: "choral", "individual" — dapat diperluas saat pilot) |
| support       | opsional |

**CHANGE**

| Field           | Type     |
|-----------------|----------|
| objective       | string   |
| prompt          | string   |
| change_target   | string[] (elemen pattern yang divariasikan, mis. ["name","place"]) |
| differentiation | object   |
| support         | opsional |

**INTERACT**

| Field            | Type   |
|------------------|--------|
| objective        | string |
| interaction_mode | string — salah satu: `pair`, `small_group`, `whole_group`, `walk_around` |
| task             | string |
| differentiation  | object |
| support          | opsional |

**SHARE**

| Field           | Type   |
|-----------------|--------|
| objective       | string |
| share_mode      | string — salah satu: `oral_response`, `short_dialogue`, `mini_presentation`, `short_writing`, `gallery_share` |
| task            | string |
| differentiation | object |
| support         | opsional |

**CHECK** (NS-5 — tanpa skor)

| Field               | Type     |
|---------------------|----------|
| observe             | string[] — daftar sinyal observasi (mis. "students respond immediately", "students still imitate") |
| teacher_next_action | object — mis. `{ ready: "...", needs_model: "...", needs_repeat: "..." }` |

TIDAK ADA field `score`/`grade`/`value`/`points`/`percentage` —
NS-5 terjaga secara struktural.

**BOOST** (NS-6 — tanpa label)

| Field   | Type     |
|---------|----------|
| trigger | string[] — kondisi berbasis perilaku yang teramati (mis. "hesitates before producing target pattern", "produces target pattern accurately and independently") |
| action  | string[] — tindakan guru (mis. "recast", "model again", "give extension", "encourage partner support") |

TIDAK ADA field `student_level`/`weak`/`remedial_group`/label
identitas lain — NS-6 terjaga secara struktural.

> Lihat Bagian 9.2 untuk prinsip authoring ekstensi BOOST di
> luar target_pattern (mis. person-shift He/She).

---

## 5. Layer 4 — constraints

```javascript
constraints: {
  single_productive_pattern: true,
  requires_student_output: true,
  check_without_score: true,
  boost_without_label: true,
  tts_optional_backup: true,
  self_contained: true
}
```

| Flag                       | Memetakan |
|----------------------------|-----------|
| single_productive_pattern  | NS-2 |
| requires_student_output    | NS-7 |
| check_without_score        | NS-5 |
| boost_without_label        | NS-6 |
| tts_optional_backup        | NS-11 |
| self_contained             | NS-13 |

**Scope.** `constraints` HANYA mencakup subset Negative
Specification yang dapat diverifikasi secara struktural (6 dari
14). Delapan NS lainnya (NS-1, NS-3, NS-4, NS-8, NS-9, NS-10,
NS-12, NS-14) bersifat kualitatif/konten dan TIDAK direduksi
menjadi boolean — tetap diverifikasi melalui proses review
konten (alur 3-AI: generator → evaluator → reviewer, mengikuti
pola checklist seperti Dokumen 9 di FLAF SD).

`constraints` bersifat PUBLIK dan dual-purpose: generator AI
mengisi sebagai deklarasi self-check saat menulis TP; validator
engine memverifikasi deklarasi tersebut cocok dengan struktur
aktual file.

---

## 6. Validation Rules

Aturan invarian berikut berlaku untuk SEMUA 66 TP, dicek oleh
validator terhadap struktur aktual (bukan field tersimpan):

**VR-1 — Prerequisite Coverage (GR-GEN-3)**

```
union(runtime[*].support.pattern_support) ⊇ metadata.prerequisite_patterns
```

Setiap pattern_id di `prerequisite_patterns` harus muncul
minimal sekali sebagai `pattern_support` di salah satu step —
boleh tersebar di beberapa step (MODEL untuk reaktivasi
vocabulary, CHANGE untuk reuse struktur, INTERACT untuk
aplikasi komunikatif, dst.), dan boleh muncul lebih dari sekali
tanpa batas — akumulasi pattern lintas step justru pola yang
sehat (Pattern Registry Bagian 1).

**VR-2 — Target Pattern Exclusion**

```
∀ step ∈ runtime: step.support.pattern_support ∩ { metadata.pattern_id } = ∅
```

`pattern_id` (target pattern sesi ini) TIDAK PERNAH muncul di
`pattern_support` manapun — target pattern sudah
direpresentasikan oleh seluruh `runtime`, bukan sebagai support
bagi dirinya sendiri.

---

## 7. Konvensi Engine

Hal-hal berikut adalah konvensi ENGINE (runtime/app), BUKAN
field di schema TP — agar tidak terjadi redundansi 66×.

**TTS.** MODEL dan REPEAT membaca teks untuk TTS dari
`resources.model_sentences` melalui `sentence_refs` — tanpa
field TTS eksplisit di TP. Konfigurasi TTS (bahasa English-US,
kecepatan normal/natural, preferensi suara perempuan dengan
fallback ke suara en-US apapun yang tersedia di perangkat)
adalah PENGATURAN GLOBAL APLIKASI, ditangani saat implementasi
runtime engine (fase Repo) — bukan bagian dari Schema JS
per-TP.

**Reference by id.** Semua field `*_refs` (`sentence_refs`,
`visual_refs`, `gesture_refs`) mereferensikan item `resources`
melalui field `id`, bukan index array — menghindari masalah
jika urutan item resources berubah.

**Durasi total.** `estimated_duration` tidak disimpan; dihitung
sebagai `sum(runtime[].duration)` oleh engine/validator kapan
diperlukan, untuk memverifikasi kepatuhan GR-4 (45–90 menit).

---

## 8. Skeleton Referensi (TP-01 Kelas 7 — PAT-7-01)

Skeleton berikut menunjukkan STRUKTUR LENGKAP (bukan konten
final — pengisian konten adalah tugas PILOT).

```javascript
export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-01.js",
    pattern_id: "PAT-7-01",
    title: "",
    short_title: "",
    grade: 7,
    genre: "Interpersonal",
    cluster: "A",
    topic: "",
    context: "",
    communicative_goal: "",
    vocabulary_domain: [],
    input_anchor: "",
    output_anchor: "",
    prerequisite_patterns: [],
    reusable_in: ["PAT-8-01"],
    complexity_level: "Acquire",
    notes: "",
    session_version: "1.0"
  },

  resources: {
    active_vocabulary: [],

    model_sentences: [
      { id: "model_1", text: "" },
      { id: "model_2", text: "" },
      { id: "model_3", text: "" }
    ],

    visual_cues: [
      { id: "visual_1", description: "", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "" }
    ]
  },

  runtime: [
    {
      id: "model_1",
      type: "MODEL",
      duration: 5,
      objective: "",
      sentence_refs: [],
      visual_refs: [],
      gesture_refs: []
      // support: { pattern_support: [] } — opsional, isi jika
      // TP ini punya prerequisite_patterns
    },
    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "",
      sentence_refs: [],
      repeat_mode: "choral"
    },
    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "",
      prompt: "",
      change_target: [],
      differentiation: { easy: {}, standard: {}, challenge: {} }
    },
    {
      id: "interact_1",
      type: "INTERACT",
      duration: 10,
      objective: "",
      interaction_mode: "pair",
      task: "",
      differentiation: { easy: {}, standard: {}, challenge: {} }
      // support: { pattern_support: [] } — opsional
    },
    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "",
      share_mode: "mini_presentation",
      task: "",
      differentiation: { easy: {}, standard: {}, challenge: {} }
    },
    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [],
      teacher_next_action: {}
    },
    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [],
      action: []
    }
  ],

  constraints: {
    single_productive_pattern: true,
    requires_student_output: true,
    check_without_score: true,
    boost_without_label: true,
    tts_optional_backup: true,
    self_contained: true
  }
}
```

Catatan: PAT-7-01 = ROOT (tidak punya prerequisite_patterns),
sehingga `support.pattern_support` tidak muncul di skeleton
ini. TP lain dengan `prerequisite_patterns` non-kosong WAJIB
memenuhi VR-1 (lihat Bagian 6).

---

## 9. Catatan Authoring (Addendum v1.1)

Dua prinsip berikut muncul dari review independen PILOT TP-01
Kelas 7 (PAT-7-01, 2 round) dan berlaku untuk seluruh 66 TP.

### 9.1 active_vocabulary — unit leksikal reusable, bukan nilai instansiasi

`resources.active_vocabulary` berisi kata/frasa KATEGORI yang
dapat digunakan ulang lintas konteks (contoh: "years old",
"every weekend", "ride a bicycle"). JANGAN memasukkan nilai
instansiasi spesifik dari `model_sentences` — nama orang, angka
usia, dll. (contoh: "Dito", "twelve") — karena nilai tersebut
adalah REALISASI CONTOH, bukan vocabulary produktif yang siswa
pelajari sebagai unit.

### 9.2 BOOST sebagai tempat ekstensi di luar target_pattern

Jika BOOST memuat ekstensi ke bentuk bahasa DI LUAR
`target_pattern` TP ini (mis. person-shift "He/She is/likes/
can" untuk target_pattern "I am/I like/I can"), framing pada
`action[]` WAJIB eksplisit mencakup ketiga hal berikut:

1. **Opsional** — bukan kewajiban bagi seluruh kelas.
2. **Individual/reaktif** — merespons satu siswa yang sudah
   siap (sesuai `trigger[]` yang relevan), BUKAN whole-class
   mini-lesson dengan target pattern baru.
3. **Guru memodelkan dulu** — SATU contoh konkret (Listen)
   diberikan guru sebelum siswa diundang mencoba (Say). Tidak
   ada bentuk bahasa yang diminta "Use" tanpa pernah "Listen"/
   "Say" terlebih dahulu, di TP manapun (Anchor Bagian 3,
   Fondasi).

Prinsip ini mencegah kebocoran yang sama dengan yang ditemukan
pada SHARE round 1 PILOT TP-01 — di mana bentuk yang tidak
pernah dimodelkan diminta sebagai output WAJIB di semua level
diferensiasi SHARE, bukan hanya sebagai ekstensi opsional.

---

## Penutup

Dokumen ini merupakan **dokumen operasional** FLAF Fase D —
pelengkap Fondasi Pedagogis v1.0, Pattern Registry v1.0, dan TP
Mapping v1.0.

Seluruh 66 file `docs/fase-d/kelas-X/tp-XX.js` WAJIB mengikuti
schema ini. Jika terjadi konflik antara dokumen ini dengan TP
aktual atau generator, dokumen ini menjadi acuan utama sampai
dilakukan revisi versi resmi.

Struktur 4-layer, field reference table, dan Validation Rules
(Bagian 1–8) merupakan baseline v1.0 dan TIDAK DIUBAH. Bagian 9
(Catatan Authoring) adalah addendum editorial v1.1 —
non-breaking, berisi prinsip authoring tambahan yang ditemukan
selama PILOT TP-01, tidak mengubah struktur schema. Perubahan
pada TP individual di masa depan menggunakan
`metadata.session_version` untuk tracking migrasi.

### Status Roadmap Fase D

| # | Deliverable | Status |
|---|---|---|
| 1 | Dokumen Fondasi Pedagogis v1.0 | ✅ Selesai |
| 2 | Genre Architecture | ✅ Selesai |
| 3 | Pattern Registry v1.0 (66/66) | ✅ Selesai |
| 4 | TP Mapping v1.0 (66/66) | ✅ Selesai |
| 5 | **Schema JS Fase D v1.1** | **✅ Selesai** |
| 6 | Pilot TP-01 Kelas 7 (PAT-7-01) | ✅ Selesai — tervalidasi 2 round review |
| 7 | Pengisian 65 TP lainnya (Kelas 7-9) | ⏳ Berikutnya |
| 8 | Repository baru (fork dari FLAF SD) | ⏳ Menunggu |
