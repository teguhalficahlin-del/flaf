# SCHEMA JS FLAF

## FLAF v1.4

Dokumen ini merupakan spesifikasi resmi struktur file JavaScript Teaching Prompt (TP) FLAF.

Setiap file JS yang dihasilkan dari Canonical TP wajib mengikuti schema ini tanpa pengecualian.

---

# 1. STRUKTUR UMUM

```js
const TP_XX = {

  // METADATA
  id        : 'tp-XX',
  pdf_ref   : 'Modul_Ajar_...',
  nomor     : X,
  kelas     : X,
  nama      : '...',
  tema      : '...',
  deskripsi : '...',

  // KURIKULUM
  indikator : [ '...', '...' ],
  vocab     : [ '...', '...' ],
  persiapan : [ '...', '...' ],
  media     : [ '...', '...' ],
  printables: [ { file: '...', label: '...' } ],

  // OPERASIONAL (kosong — tidak ada field operasional di v1.4)

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : '...',
    bantuan: null,
    cue    : '...',
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

---

# 2. STRUKTUR LANGKAH

Setiap item dalam `langkah[]` wajib mengikuti struktur berikut:

```js
{
  tipe   : 'instruksi',
  teks   : `...`,
  bantuan: null | '...' | [ '...', '...' ],
  cue    : null | '...',
  darurat: null | '...',
}
```

---

# 3. SPESIFIKASI FIELD

## 3.1 METADATA

| Field | Tipe | Wajib | Keterangan |
|-------|------|-------|------------|
| id | string | ✅ | Format: `tp-XX` (dua digit) |
| pdf_ref | string | ✅ | Nama file modul ajar |
| nomor | number | ✅ | Nomor TP (integer) |
| kelas | number | ✅ | Kelas target (1–6) |
| nama | string | ✅ | Nama TP |
| tema | string | ✅ | Tema pembelajaran |
| deskripsi | string | ✅ | Deskripsi singkat TP |

## 3.2 KURIKULUM

| Field | Tipe | Wajib | Keterangan |
|-------|------|-------|------------|
| indikator | string[] | ✅ | Minimal 1 item |
| vocab | string[] | ✅ | Daftar kosakata target |
| persiapan | string[] | ✅ | Daftar media yang disiapkan |
| media | string[] | ✅ | Media digital (boleh kosong `[]`) |
| printables | object[] | ✅ | Format: `{ file, label }` (boleh kosong `[]`) |

## 3.3 PRE-OPENING

| Field | Tipe | Wajib | Keterangan |
|-------|------|-------|------------|
| tipe | string | ✅ | Selalu `'instruksi'` |
| teks | string | ✅ | Teks instruksi guru |
| bantuan | null \| string | ✅ | null jika tidak ada |
| cue | null \| string | ✅ | null jika tidak ada |
| darurat | null \| string | ✅ | null jika tidak ada |

## 3.4 SKENARIO

| Field | Tipe | Wajib | Keterangan |
|-------|------|-------|------------|
| fase | string | ✅ | `'Pembuka'` \| `'Inti'` \| `'Penutup'` |
| durasi | number | ✅ | Estimasi menit |
| langkah | object[] | ✅ | Minimal 1 langkah |

## 3.5 LANGKAH

| Field | Tipe | Wajib | Keterangan |
|-------|------|-------|------------|
| tipe | string | ✅ | Selalu `'instruksi'` |
| teks | string | ✅ | Teks instruksi guru |
| bantuan | null \| string \| string[] | ✅ | null jika tidak ada; array jika lebih dari satu |
| cue | null \| string | ✅ | null jika tidak ada |
| darurat | null \| string | ✅ | null jika tidak ada |

---

# 4. NILAI YANG DIIZINKAN

## 4.1 Fase

| Nilai | Keterangan |
|-------|------------|
| `'Pembuka'` | Fase pembuka pembelajaran |
| `'Inti'` | Fase inti pembelajaran |
| `'Penutup'` | Fase penutup pembelajaran |

## 4.3 Tipe

Selalu `'instruksi'` untuk semua langkah dan preOpening.

---

# 5. ATURAN PENULISAN TEKS

## 5.1 Format teks

Gunakan template literal (backtick) untuk field `teks` yang panjang:

```js
teks: `AKSI: ... UCAP: "..." → Siswa: "..."`,
```

## 5.2 Pemisah segmen

Gunakan `---` sebagai pemisah antar segmen dalam satu langkah:

```js
teks: `AKSI: ... UCAP: "..." --- AKSI: ...`,
```

## 5.3 Marker pedagogis

Marker ditulis inline menggunakan token kanonik:

```js
teks: `👂 LISTEN FIRST ... 🗣 TOGETHER ...`,
```

Token yang diizinkan: `👂 LISTEN FIRST` · `🗣 TOGETHER` · `⚡ MICRO-FREEZE` · `🔁`

## 5.4 Bantuan array

Gunakan array string jika bantuan lebih dari satu:

```js
bantuan: [
  'Jika diam: ...',
  'Jika benar: ...',
],
```

---

# 6. LARANGAN

❌ Menambah field baru di luar yang terdaftar.

❌ Mengubah nama field.

❌ Mengubah tipe data field.

❌ Mengosongkan field wajib (gunakan `null` untuk field opsional yang tidak terisi).

❌ Menggunakan string selain `'instruksi'` untuk field `tipe`.

❌ Menggunakan marker pedagogis selain 4 token kanonik.

---

# 7. EXPORT

Setiap file JS wajib diakhiri dengan:

```js
export default TP_XX;
```

---

# 8. KESIAPAN KONVERSI

File JS dinyatakan siap apabila:

☑ Seluruh field wajib terisi.

☑ Tidak ada field `null` pada `teks`.

☑ Struktur identik dengan schema ini.

☑ File dapat di-import sebagai ES module tanpa error.

☑ Tidak ada TODO yang tersisa.
