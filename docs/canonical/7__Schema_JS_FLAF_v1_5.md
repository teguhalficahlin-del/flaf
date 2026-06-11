# SCHEMA JS FLAF

## FLAF v1.5

Dokumen ini merupakan spesifikasi resmi struktur file JavaScript Teaching Prompt (TP) FLAF.

Setiap file JS yang dihasilkan dari Canonical TP wajib mengikuti schema ini tanpa pengecualian.

**Prinsip dasar:** Canonical TP adalah satu-satunya sumber kebenaran. Field yang tidak ada
di Canonical TP tidak masuk ke skema JS dan tidak ditampilkan di layar runtime.

---

# 1. STRUKTUR UMUM

## 1.1 Fase A (Kelas 1–2)

```js
const TP_XX = {

  // METADATA
  id        : 'tp-XX',
  nomor     : X,
  kelas     : X,
  nama      : '...',
  tema      : '...',

  // KURIKULUM
  indikator : [ '...', '...' ],
  vocab     : [ '...', '...' ],
  persiapan : [ '...', '...' ],
  media     : [ '...', '...' ],
  printables: [ { file: '...', label: '...' } ],
  ringkasan : [ { layar: 0, judul: '...', tujuan: '...' } ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : '...',
    bantuan: null,
    cue    : null,
    darurat: null,
  },

  // SKENARIO
  skenario: [
    {
      fase  : 'Pembuka',
      durasi: 10,
      langkah: [ /* lihat struktur langkah */ ],
    },
    {
      fase  : 'Inti',
      durasi: 30,
      langkah: [],
    },
    {
      fase  : 'Penutup',
      durasi: 10,
      langkah: [],
    },
  ],

};

export default TP_XX;
```

## 1.2 Fase B (Kelas 3–4)

Sama dengan Fase A, dengan tambahan field `kluster` dan `jenis` di metadata:

```js
const TP_BXX = {

  id        : 'tp-bXX',
  nomor     : X,
  kelas     : X,
  nama      : '...',
  tema      : '...',
  kluster   : '...',   // tambahan Fase B
  jenis     : '...',   // tambahan Fase B
  deskripsi : '...',

  // ... selebihnya sama dengan Fase A

};

export default TP_BXX;
```

## 1.3 Fase C (Kelas 5–6)

Sama dengan Fase B, dengan tambahan field `text_anchor`, `connector_aktif`,
`recycle_fase_b`, dan `breakpoints` di metadata:

```js
const TP_CXX = {

  id             : 'tp-cXX',
  nomor          : X,
  kelas          : X,
  nama           : '...',
  tema           : '...',
  kluster        : '...',
  jenis          : '...',
  deskripsi      : '...',
  text_anchor    : '...',          // tambahan Fase C
  connector_aktif: '...',          // tambahan Fase C
  recycle_fase_b : [ '...', '...' ], // tambahan Fase C
  breakpoints    : [],             // tambahan Fase C

  // ... selebihnya sama dengan Fase B

};

export default TP_CXX;
```

---

# 2. STRUKTUR LANGKAH

## 2.1 Fase A — Struktur Langkah

```js
{
  tipe        : 'instruksi',
  teks        : `...`,
  bantuan     : null | '...' | [ '...', '...' ],
  cue         : null | '...',
  darurat     : null | '...',
  diferensiasi: null | { perluSupport: '...', sudahBisa: '...' },
}
```

Catatan: `diferensiasi` diisi hanya pada layar yang memiliki blok diferensiasi
di canonical. `null` untuk semua layar lainnya. TP-10 dan TP-18 Fase A tidak
memiliki blok diferensiasi — seluruh langkahnya menggunakan `diferensiasi: null`.

## 2.2 Fase B — Struktur Langkah

Sama dengan Fase A (termasuk `diferensiasi`), dengan struktur identik:

```js
{
  tipe        : 'instruksi',
  teks        : `...`,
  bantuan     : null | '...' | [ '...', '...' ],
  cue         : null | '...',
  darurat     : null | '...',
  diferensiasi: null | { perluSupport: '...', sudahBisa: '...' },
}
```

## 2.3 Fase C — Struktur Langkah

Sama dengan Fase B, dengan tambahan field `id` dan `blok`:

```js
{
  id          : '...',
  tipe        : 'instruksi',
  teks        : `...`,
  bantuan     : null | '...' | [ '...', '...' ],
  cue         : null | '...',
  darurat     : null | '...',
  diferensiasi: null | { perluSupport: '...', sudahBisa: '...' },
  blok        : null | 'INPUT' | 'INTERACT' | 'OUTPUT',
}
```

---

# 3. SPESIFIKASI FIELD

## 3.1 METADATA — Semua Fase

| Field | Tipe | Fase | Wajib | Keterangan |
|-------|------|------|-------|------------|
| id | string | A B C | ✅ | Fase A: `tp-XX` · Fase B: `tp-bXX` · Fase C: `tp-cXX` |
| nomor | number | A B C | ✅ | Nomor TP (integer) |
| kelas | number | A B C | ✅ | Kelas target (1–6) |
| nama | string | A B C | ✅ | Nama TP |
| tema | string | A B C | ✅ | Tema pembelajaran |
| kluster | string | B C | ✅ | Kode kluster (A–E) |
| jenis | string | B C | ✅ | `'Biasa'` \| `'Kompleks'` \| `'Capstone'` \| `'Panen'` |
| text_anchor | string | C | ✅ | Kalimat anchor yang ditulis di papan sebelum kelas |
| connector_aktif | string | C | ✅ | Deskripsi connector yang aktif di TP ini |
| recycle_fase_b | string[] | C | ✅ | Daftar kosakata/struktur yang didaur ulang dari Fase B |
| breakpoints | object[] | C | ✅ | Titik jeda antar sesi (boleh kosong `[]`) |

## 3.2 KURIKULUM — Semua Fase

| Field | Tipe | Wajib | Keterangan |
|-------|------|-------|------------|
| indikator | string[] | ✅ | Minimal 1 item |
| vocab | string[] | ✅ | Daftar kosakata target |
| persiapan | string[] | ✅ | Daftar persiapan fisik sebelum kelas |
| media | string[] | ✅ | Media digital (boleh kosong `[]`) |
| printables | object[] | ✅ | Format: `{ file, label }` (boleh kosong `[]`) |
| ringkasan | object[] | ✅ | Format: `{ layar, judul, tujuan }` — dari tabel Ringkasan Sesi canonical |

## 3.3 PRE-OPENING — Semua Fase

| Field | Tipe | Wajib | Keterangan |
|-------|------|-------|------------|
| tipe | string | ✅ | Selalu `'instruksi'` |
| teks | string | ✅ | Teks instruksi guru |
| bantuan | null \| string | ✅ | null jika tidak ada |
| cue | null \| string | ✅ | null jika tidak ada |
| darurat | null \| string | ✅ | null jika tidak ada |

## 3.4 SKENARIO — Semua Fase

| Field | Tipe | Wajib | Keterangan |
|-------|------|-------|------------|
| fase | string | ✅ | `'Pembuka'` \| `'Inti'` \| `'Penutup'` |
| durasi | number | ✅ | Estimasi menit |
| langkah | object[] | ✅ | Minimal 1 langkah |

## 3.5 LANGKAH — Semua Fase

| Field | Tipe | Fase | Wajib | Keterangan |
|-------|------|------|-------|------------|
| id | string | C | ✅ | Format: `'lX'` (nomor layar) |
| tipe | string | A B C | ✅ | Selalu `'instruksi'` |
| teks | string | A B C | ✅ | Teks instruksi guru |
| bantuan | null \| string \| string[] | A B C | ✅ | null jika tidak ada; array jika lebih dari satu |
| cue | null \| string | A B C | ✅ | null jika tidak ada |
| darurat | null \| string | A B C | ✅ | null jika tidak ada |
| diferensiasi | null \| object | A B C | ✅ | null jika tidak ada; format: `{ perluSupport, sudahBisa }` |
| blok | null \| string | C | ✅ | null jika tidak ada; `'INPUT'` \| `'INTERACT'` \| `'OUTPUT'` |

---

# 4. NILAI YANG DIIZINKAN

## 4.1 Fase Skenario

| Nilai | Keterangan |
|-------|------------|
| `'Pembuka'` | Fase pembuka pembelajaran |
| `'Inti'` | Fase inti pembelajaran |
| `'Penutup'` | Fase penutup pembelajaran |

## 4.2 Jenis TP (Fase B dan C)

| Nilai | Keterangan |
|-------|------------|
| `'Biasa'` | TP reguler |
| `'Kompleks'` | TP dengan struktur INPUT/INTERACT/OUTPUT penuh |
| `'Capstone'` | TP puncak kluster |
| `'Panen'` | TP panen hasil belajar |

## 4.3 Blok Fase C

| Nilai | Keterangan |
|-------|------------|
| `'INPUT'` | Blok penerimaan input |
| `'INTERACT'` | Blok interaksi berpasangan atau kelompok |
| `'OUTPUT'` | Blok produksi output |
| `null` | Layar di luar struktur blok |

## 4.4 Tipe Langkah

Selalu `'instruksi'` untuk semua langkah dan preOpening.

## 4.5 Diferensiasi (Semua Fase)

| Key | Keterangan |
|-----|------------|
| `perluSupport` | Instruksi untuk siswa yang membutuhkan bantuan |
| `sudahBisa` | Instruksi untuk siswa yang sudah menguasai |

---

# 5. ATURAN PENULISAN TEKS

## 5.1 Format teks

Gunakan template literal (backtick) untuk field `teks`:

```js
teks: `AKSI: Berdiri di depan kelas.
UCAP: "Good morning, everyone!"
→ Siswa: "Good morning, teacher!"`,
```

## 5.2 Token dalam teks

Token pedagogis ditulis inline di dalam field `teks`:

```js
teks: `👂 LISTEN FIRST
AKSI: ...
🗣 TOGETHER
UCAP: "Say it with me!"`,
```

Token yang diizinkan: `👂 LISTEN FIRST` · `🗣 TOGETHER` · `⚡ MICRO-FREEZE` · `🔁`

## 5.3 Pemisah segmen

Gunakan `---` sebagai pemisah antar segmen dalam satu langkah jika diperlukan:

```js
teks: `AKSI: ...
UCAP: "..."
---
AKSI: ...`,
```

## 5.4 Bantuan array

Gunakan array string jika bantuan lebih dari satu:

```js
bantuan: [
  'Jika diam: ...',
  'Jika pelan: ...',
],
```

## 5.5 Kondisi FLEX (Fase B dan C)

Layar yang bisa dilewati ditulis kondisinya di field `cue`:

```js
cue: 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 18 menit.',
```

Tidak ada field boolean terpisah untuk FLEX.

## 5.6 Diferensiasi (Semua Fase)

```js
diferensiasi: {
  perluSupport: 'Cukup menyebut nama pakaian tanpa kalimat penuh.',
  sudahBisa   : 'Minta kalimat penuh dengan warna — "When it rains, I wear my blue raincoat."',
},
```

## 5.7 Ringkasan Sesi

Ambil langsung dari tabel Ringkasan Sesi di canonical:

```js
ringkasan: [
  { layar: 0, judul: 'Pre-Opening · Door Greeting',    tujuan: 'Guru menyambut siswa satu per satu di pintu.' },
  { layar: 1, judul: 'Pembuka · Demo Boneka',           tujuan: 'Guru memperagakan dialog salam dengan boneka.' },
  // dst — satu objek per layar, urutan sesuai canonical
],
```

Field ini digunakan oleh dashboard untuk menampilkan overlay Ringkasan Sesi
di Step 0 Materi. Implementasi UI overlay ada di dashboard.js (backlog).

## 6.1 Field `id` di langkah

Setiap langkah Fase C wajib punya `id` unik dalam format `'lX'`:

```js
{ id: 'l1', tipe: 'instruksi', teks: `...`, ... }
{ id: 'l2', tipe: 'instruksi', teks: `...`, ... }
```

`id` dipakai oleh sistem breakpoint untuk resume sesi.

## 6.2 Field `blok`

`blok` hanya ditulis di layar pertama setiap blok baru. Layar berikutnya dalam
blok yang sama menggunakan `blok: null`:

```js
// Layar pertama blok INPUT
{ id: 'l3', blok: 'INPUT',  teks: `...` }

// Layar kedua — masih dalam blok INPUT, tapi blok null
{ id: 'l4', blok: null,     teks: `...` }

// Layar pertama blok INTERACT
{ id: 'l5', blok: 'INTERACT', teks: `...` }
```

## 6.3 Field `breakpoints`

Array objek yang mendefinisikan titik jeda antar sesi. Boleh kosong `[]` jika
tidak ada breakpoint:

```js
breakpoints: [
  {
    id              : 'bp-1',
    after_langkah_id: 'l6',
    resume_at       : 'l7',
    text            : 'Sesi pertama selesai sampai di sini.',
    ui: {
      primary_action  : 'Simpan & keluar',
      secondary_action: 'Lanjut mengajar',
    },
  },
],
```

---

# 7. LARANGAN

❌ Menambah field baru di luar yang terdaftar di dokumen ini.

❌ Mengubah nama field.

❌ Mengubah tipe data field.

❌ Mengosongkan field wajib — gunakan `null` untuk field opsional yang tidak terisi.

❌ Menggunakan string selain `'instruksi'` untuk field `tipe`.

❌ Menggunakan token pedagogis selain 4 token kanonik.

❌ Menulis field `energi`, `energi_map`, `checklist`, `catatan`, `interaction_mode`,
   `energy_level`, `assessment_overlay`, `interact_contract`, `artifact`, `pdf_ref`,
   atau `deskripsi` — field-field ini tidak diakui dalam skema v1.5.

❌ Menulis field `flex` atau `flex_kondisi` sebagai field terpisah — kondisi FLEX
   ditulis di dalam field `cue`.

---

# 8. EXPORT DAN NAMING

## 8.1 Export

Setiap file JS wajib diakhiri dengan:

```js
export default TP_XX;
```

## 8.2 Nama Konstanta

Nama konstanta mengikuti konvensi per fase:

| Fase | Format | Contoh |
|------|--------|--------|
| Fase A | `TP_XX` | `TP_01` |
| Fase B | `TP_BXX` | `TP_B10` |
| Fase C | `TP_CXX` | `TP_C17` |

## 8.3 Nama File

Nama file mengikuti konvensi:

| Fase | Format | Contoh |
|------|--------|--------|
| Fase A | `tp-XX-canonical-fase-a.js` | `tp-01-canonical-fase-a.js` |
| Fase B | `tp-XX-canonical-fase-b.js` | `tp-07-canonical-fase-b.js` |
| Fase C | `tp-XX-canonical-fase-c.js` | `tp-18-canonical-fase-c.js` |

Semua file output disimpan di folder:
- Fase A: `docs/output-v5-fasea/`
- Fase B: `docs/output-v5-faseb/`
- Fase C: `docs/output-v5-fasec/`

---

# 9. KESIAPAN KONVERSI

File JS dinyatakan siap apabila:

☑ Seluruh field wajib terisi sesuai fase.

☑ Tidak ada field `null` pada `teks`.

☑ Tidak ada field yang tidak terdaftar di skema ini.

☑ Struktur identik dengan skema fase yang sesuai.

☑ File dapat di-import sebagai ES module tanpa error.

☑ Tidak ada TODO yang tersisa.

---

# 10. PERUBAHAN DARI v1.4 KE v1.5

| Perubahan | Detail |
|-----------|--------|
| Dihapus | `pdf_ref` — tidak dipakai di implementasi manapun |
| Dihapus | `energi` per langkah dan `energi_map` — tidak ada di canonical |
| Dihapus | `checklist` dan `catatan` — tidak ada di canonical |
| Dihapus | `interaction_mode` dan `energy_level` — tidak ada di canonical |
| Dihapus | `assessment_overlay`, `interact_contract`, `artifact` — tidak ada di canonical |
| Dihapus | `flex` dan `flex_kondisi` sebagai field — kondisi FLEX masuk ke `cue` |
| Dihapus | `deskripsi` — tidak ada di canonical, tidak pernah tampil di layar guru |
| Ditambah | `ringkasan` di kurikulum — dari tabel Ringkasan Sesi canonical, untuk overlay dashboard (backlog) |
| Ditambah | `kluster` dan `jenis` untuk Fase B dan C |
| Ditambah | `text_anchor`, `connector_aktif`, `recycle_fase_b`, `breakpoints` untuk Fase C |
| Ditambah | `diferensiasi` di langkah untuk semua fase (A B C) — Fase A diseragamkan via commit `ea8b194` |
| Ditambah | `id` dan `blok` di langkah untuk Fase C |
| Ditambah | Seksi 6 khusus aturan Fase C |
| Ditambah | Konvensi naming file: `tp-XX-canonical-fase-[a/b/c].js` |
