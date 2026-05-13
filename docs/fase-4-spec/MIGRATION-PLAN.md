# FLAF — Migration Plan

**Status**: Draft Fase 4 · Mei 2026
**Prasyarat**: Sudah baca `SCHEMA.md`, `STATE-MACHINE.md`, `tp-01.js`, `tp-04.js`
**Tujuan**: Cetak biru migrasi 16 TP tersisa ke format v4 + perubahan
infrastruktur yang dibutuhkan + strategi aktivasi production tanpa break
runtime yang sudah dipakai guru.

---

## 0. Prinsip Fondasi Fase 4

Tiga keputusan strategis yang menentukan seluruh dokumen ini:

| # | Keputusan | Pilihan | Konsekuensi |
|---|---|---|---|
| A | Urutan Aktivasi | **Per TP** — TP yang selesai migrate langsung aktif | Runtime engine cek per-TP, tidak ada flag global |
| B | Coverage Aktivasi | **TP 01-06 dulu** (Kelas 1 prioritas) | Validasi schema di 6 TP sebelum sentuh 12 TP berikutnya |
| C | Pembagi Kerja | **Saya draft, Anda review** | 8 sesi migrasi @ 2 TP per sesi |

Plus rule of law sepanjang Fase 4:

> **Migrasi tidak boleh mengganggu guru yang sedang mengajar.**

Setiap perubahan kode dan data harus **backward compatible**. Guru yang baru
buka FLAF hari ini, sebelum migrasi selesai, **tidak boleh melihat error**.
TP yang belum migrate tetap pakai runtime lama. TP yang sudah migrate pakai
runtime baru. Switching otomatis, tidak butuh tap apapun dari guru.

---

## 1. Status Migrasi Saat Ini (Mei 2026)

```
   TP 01 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.1
   TP 02 ─ Introducing Myself      ⬚ v3 (belum)
   TP 03 ─ Classroom Instructions  ⬚ v3
   TP 04 ━━━━━━━━━━━━━━━━━━━━━━━━━━ ✓ v4.1
   TP 05 ─ Colours                 ⬚ v3
   TP 06 ─ Shapes                  ⬚ v3
   TP 07 ─ My Family               ⬚ v3
   TP 08 ─ My House                ⬚ v3
   TP 09 ─ Animals                 ⬚ v3
   TP 10 ─ Food and Drinks         ⬚ v3
   TP 11 ─ Daily Routines          ⬚ v3
   TP 12 ─ Body Parts              ⬚ v3
   TP 13 ─ Weather and Seasons     ⬚ v3
   TP 14 ─ In the Classroom        ⬚ v3
   TP 15 ─ Feelings and Emotions   ⬚ v3
   TP 16 ─ Simple Story Retelling  ⬚ v3
   TP 17 ─ My Hobbies              ⬚ v3
   TP 18 ─ Integrative Project     ⬚ v3
```

**Statistik**: 2/18 migrate (11%). Sisanya 16 TP, 8 sesi @ 2 TP per sesi
+ buffer 2 sesi untuk revisi/diskusi = ~10 sesi.

---

## 2. Roadmap Migrasi Per Sesi

Setiap sesi punya pola sama: saya draft 2 TP, kirim ke Anda, Anda review
dengan format yang sudah kita kenal (TP 04 review style):

```
"Substansi TP {NN} → Tepat / Tepat dengan koreksi: [list] / Perlu revisi"
```

### Sesi M1 — TP 02 & TP 03 (Kelompok Interaksi Sosial)

**TP 02 — Introducing Myself**
- Tema sama dengan TP 01 (Interaksi Sosial Dasar)
- Vocab: my name is, what's your name, nice to meet you
- Karakter: dialog interaksi, mirip TP 01 tapi konten berbeda
- **Antisipasi schema**: probably no extension needed (struktur seperti TP 01)
- **Pair work natural**: ya, dialog perkenalan

**TP 03 — Classroom Instructions**
- Tema sama (Interaksi Sosial Dasar)
- Vocab: stand up, sit down, listen, look, raise your hand, quiet
- Karakter: TPR (Total Physical Response), instruksi → aksi
- **Antisipasi schema**: mungkin perlu tipe baru `tpr_response` (instruksi guru → siswa lakukan aksi fisik, bukan ucap kembali)
- **Pair work natural**: opsional (siswa A perintah, siswa B lakukan)

**Output sesi**: 2 file `tp-02.js`, `tp-03.js` + dokumen perbandingan singkat
mirip COMPARISON.md untuk TP 04. Kalau ada schema extension → SCHEMA v4.2.

---

### Sesi M2 — TP 05 & TP 06 (Kelompok Dunia Sekitar)

**TP 05 — Colours**
- Tema: Dunia di Sekitar Kita
- Vocab: red, blue, yellow, green, white, black, dst (~10 warna)
- Karakter: visual identification, "What colour is this?"
- **Antisipasi schema**: kemungkinan `tag_set: 'akurasi'` reused untuk vocab observation
- **Pair work natural**: ya — "Show me red," siswa cari benda warna tertentu

**TP 06 — Shapes**
- Tema sama
- Vocab: circle, square, triangle, rectangle, star, heart
- Karakter: visual recognition + drawing
- **Antisipasi schema**: mungkin perlu tipe baru `drawing` atau `visual_creation` jika ada aktivitas menggambar bentuk
- **Pair work natural**: ya — siswa A sebut shape, siswa B gambar atau tunjuk

**Output sesi**: 2 file + comparison + schema audit.

---

### **🎯 Checkpoint setelah Sesi M2 — Validasi Kelas 1**

Setelah TP 01-06 selesai (6 TP Kelas 1), kita berhenti sebentar untuk audit:

1. Apakah schema v4.x stabil? Berapa kali sudah extend?
2. Apakah substansi 6 TP terasa konsisten gaya?
3. Apakah ada **pattern yang muncul** yang harusnya dimasukkan ke schema sebagai pattern wajib?
4. **Aktivasi production**: apakah 6 TP Kelas 1 sudah ready untuk live di FLAF?

**Output checkpoint**: dokumen `KELAS-1-AUDIT.md` yang me-review 6 TP, dan
keputusan apakah aktifkan production atau tunggu lagi.

---

### Sesi M3 — TP 07 & TP 08 (Keluarga & Rumah)

**TP 07 — My Family**
- Tema: Keluarga dan Rumah
- Vocab: mother, father, brother, sister, grandmother, grandfather
- Karakter: personal, kontekstual ke kehidupan siswa
- **Antisipasi**: tipe `meaningful_link` dominan, foto/gambar keluarga sebagai media

**TP 08 — My House**
- Tema sama
- Vocab: living room, bedroom, kitchen, bathroom, garden
- Karakter: spatial, mungkin pakai gambar denah
- **Antisipasi**: mungkin perlu `flags: ['privacy_sensitive']` jika ada aktivitas siswa cerita tentang rumah pribadi

---

### Sesi M4 — TP 09 & TP 10 (Animals, Food)

**TP 09 — Animals**
- Vocab: cat, dog, bird, fish, cow, dst
- Karakter: chant + sound (cow says moo)
- **Antisipasi**: tipe `chant_movement` reused untuk action song

**TP 10 — Food and Drinks**
- Vocab: rice, bread, water, milk, fruit
- Karakter: kontekstual ke makanan Indonesia + Inggris
- **Antisipasi**: balanced — beberapa item culturally specific

---

### Sesi M5 — TP 11 & TP 12 (Routines, Body)

**TP 11 — Daily Routines**
- Vocab: wake up, brush teeth, eat breakfast, go to school
- Karakter: sekuensial, time-based
- **Antisipasi**: mungkin perlu tipe `sequence_practice` (urutan harus tepat)

**TP 12 — Body Parts**
- Vocab: head, eyes, nose, mouth, hand, foot
- Karakter: TPR ("touch your nose"), action song
- **Antisipasi**: kombinasi TPR + chant_movement

---

### Sesi M6 — TP 13 & TP 14 (Weather, Classroom)

**TP 13 — Weather and Seasons**
- Vocab: sunny, rainy, cloudy, windy, hot, cold
- Karakter: kontekstual hari ini, mungkin perlu observasi cuaca aktual
- **Antisipasi**: mungkin perlu field `media_dinamis` (cuaca berubah, tidak hardcoded)

**TP 14 — In the Classroom**
- Vocab: book, pencil, eraser, ruler, board, table, chair
- Karakter: object identification dalam ruang kelas

---

### Sesi M7 — TP 15 & TP 16 (Feelings, Story)

**TP 15 — Feelings and Emotions**
- Vocab: happy, sad, angry, scared, surprised
- Karakter: emotional literacy, sensitive
- **Antisipasi**: mungkin perlu `flags: ['emotional_sensitive']` — guru harus
  hati-hati saat siswa share emosi pribadi

**TP 16 — Simple Story Retelling**
- Vocab: integratif, kembali ke TP-TP sebelumnya
- Karakter: sequence, narrative
- **Antisipasi**: tipe baru `storytelling` (alur naratif berurutan) — sudah
  diantisipasi di SCHEMA-CHANGELOG roadmap

---

### Sesi M8 — TP 17 & TP 18 (Hobbies, Integrative)

**TP 17 — My Hobbies**
- Vocab: read, draw, play football, sing, dance
- Karakter: personal expression

**TP 18 — Integrative Project — My World**
- Tema: Proyek Integratif
- Karakter: kompilasi semua TP, project-based, multi-sesi
- **Antisipasi**: mungkin TP paling kompleks — bisa pecah jadi 2 sesi migrasi
  jika perlu

---

### **🎯 Checkpoint Akhir setelah Sesi M8 — Full Migration Complete**

18 TP selesai migrate. Schema v4.x final. Persiapan untuk Fase 5 (Build).

---

## 3. Compatibility Layer — Bagaimana Dua Runtime Hidup Berdampingan

### 3.1 Prinsip Routing

Runtime di FLAF (yang akan dibangun di Fase 5) **tidak punya feature flag
global**. Routing dilakukan **per-TP berdasarkan data**:

```javascript
// Pseudocode di runtime engine — bukan implementasi final
function pilihRuntime(tpData) {
  if (tpData.skenario.every(fase => fase.aktivitas?.length > 0)) {
    return 'runtime-baru';   // Semua fase punya aktivitas[]
  }
  return 'runtime-lama';      // Setidaknya satu fase pakai langkah[]
}
```

**Kontrak**:
- TP yang **semua fase**-nya punya `aktivitas[]` → runtime baru
- TP yang **sebagian fase**-nya masih `langkah[]` → runtime lama (untuk
  konsistensi UI dalam satu sesi)
- TP yang punya **dua-duanya** (`aktivitas[]` + `langkah[]`) → runtime
  baru prioritas, `langkah[]` diabaikan saja

### 3.2 Konsekuensi untuk Migrasi

**Migrasi parsial per fase TIDAK direkomendasikan**. Saat saya migrate TP,
saya migrate **semua 4 fase sekaligus** (Pembuka, Inti, Penutup, Penilaian).
Tidak ada TP yang setengah jadi.

Alasan: kalau TP punya Pembuka v4 + Inti v3 + Penutup v4, guru di tengah
sesi akan switch UI dari runtime baru → lama → baru. Itu **lebih buruk**
daripada konsisten lama dari awal.

### 3.3 Per-User Override (Future Consideration)

Belum ada di scope Fase 4-5. Catatan untuk masa depan: kalau ada guru
veteran yang lebih suka UI runtime lama, kita bisa tambah toggle di
Settings. Tapi itu **bukan prioritas sekarang**.

---

## 4. Store IDB Baru — `siswa_per_kelas`

Ini infrastruktur baru yang Fase 2 sudah identifikasi sebagai dibutuhkan
untuk rotasi observasi lintas sesi (Keputusan 2 di STATE-MACHINE.md).

### 4.1 Tujuan Store

Menyimpan **data per-siswa** yang akumulasi lintas sesi:
- Berapa kali siswa pernah diobservasi (per indikator)
- Berapa speaking turn yang sudah dia dapat
- Rating terakhir (untuk insight guru)
- Kapan terakhir diobservasi (untuk rotasi adil)

### 4.2 Skema Store

Ditambahkan ke `storage/db.js` `VALID_STORES`:

```javascript
const VALID_STORES = new Set([
  'kv',
  'log_queue',
  'teacher_data',
  'teaching_log',
  'nilai_data',
  'presensi_log',
  'siswa_per_kelas',  // ← BARU di v4
]);
```

### 4.3 Struktur Record Per Siswa

Key di store: `{kelas_id}::{nama_siswa}` (mis: `kelas-1A::Aditia`)

Value:
```javascript
{
  kelas_id            : 'kelas-1A',
  nama                : 'Aditia',
  added_at            : timestamp,
  last_updated_at     : timestamp,

  // Tracking observasi
  observation_count   : {
    participation : 0,   // Berapa kali diobservasi indikator ini
    response      : 0,
    confidence    : 0,
    vocab_use     : 0,
  },
  last_observed_at    : timestamp | null,

  // Recent ratings (untuk display di Jejak / refleksi guru)
  // Disimpan max 20 entry terakhir — yang lama di-truncate
  recent_ratings      : [
    {
      tp_id     : 'tp-01',
      aktivitas : 'tp01-inti-pair-sapa-teman',
      tag_set   : 'standar',
      tags      : ['aktif', 'berani'],
      at        : timestamp,
    },
    // ... max 20 entry
  ],

  // Tracking speaking turn (auto-counted dari pair_work yang dia ikuti)
  total_speaking_turns: 0,
  last_speaking_at    : timestamp | null,

  // Catatan guru manual (opsional)
  catatan_guru        : string?,  // Diisi via UI khusus, bukan auto
}
```

### 4.4 Operasi pada Store

**WRITE** (saat ObservationCapture di runtime selesai):

```javascript
// Pseudocode
async function recordObservation(kelas_id, nama_siswa, observasi) {
  const key = `${kelas_id}::${nama_siswa}`;
  const current = await db.get('siswa_per_kelas', key) || createNewRecord(kelas_id, nama_siswa);

  // Update counters
  observasi.indikator.forEach(ind => {
    current.observation_count[ind] = (current.observation_count[ind] || 0) + 1;
  });
  current.last_observed_at = Date.now();

  // Append to recent_ratings, truncate to 20
  current.recent_ratings.push({...});
  if (current.recent_ratings.length > 20) {
    current.recent_ratings = current.recent_ratings.slice(-20);
  }

  current.last_updated_at = Date.now();
  await db.set('siswa_per_kelas', key, current);
}
```

**READ** (saat AktivitasReady butuh saran rotasi siswa):

```javascript
async function getSiswaForRotasi(kelas_id, indikator_prioritas, n) {
  const all = await db.getAll('siswa_per_kelas');
  const filtered = all
    .filter(entry => entry.key.startsWith(`${kelas_id}::`))
    .map(entry => entry.value);

  // Filter siswa yang hadir hari ini (dari presensi_log)
  const hadir = await getPresensiHariIni(kelas_id);
  const candidates = filtered.filter(s => hadir.includes(s.nama));

  // Sort by observation_count[indikator] ascending, lalu last_observed_at ascending
  candidates.sort((a, b) => {
    const aCount = a.observation_count[indikator_prioritas] || 0;
    const bCount = b.observation_count[indikator_prioritas] || 0;
    if (aCount !== bCount) return aCount - bCount;
    return (a.last_observed_at || 0) - (b.last_observed_at || 0);
  });

  return candidates.slice(0, n).map(s => s.nama);
}
```

### 4.5 Initial Seeding (Kelas Baru)

Saat guru pertama kali pakai FLAF di kelas tertentu, store kosong. Strategi:

**Opsi 1 — Auto-seed dari presensi_log**: Saat guru tap "Mulai sesi pertama,"
sistem cek `presensi_log`, ekstrak nama-nama siswa hadir, otomatis buat
record awal di `siswa_per_kelas` dengan counter=0.

**Opsi 2 — Manual setup**: UI khusus "Setup Kelas Baru" yang guru isi nama-nama
siswa di awal tahun ajar.

**Rekomendasi**: **Opsi 1**. Lebih sedikit friction untuk guru. Setup manual
hanya jika presensi_log juga kosong (sangat jarang — biasanya presensi dilakukan
sebelum sesi mengajar).

### 4.6 Storage Footprint

Estimasi: 25 siswa × ~5KB per record = ~125KB per kelas. Sangat ringan,
aman untuk IDB di HP jadul.

### 4.7 Migration dari Data Lama

`teaching_log` lama mungkin sudah punya catatan observasi tapi dalam format
berbeda. Strategi:

**Tidak ada auto-migration**. Store `siswa_per_kelas` mulai fresh dari sesi
pertama setelah Fase 5 deploy. `teaching_log` lama tetap ada untuk referensi
historical, tapi tidak di-impor ke store baru.

Alasan: data lama mungkin bias (lebih ke arah siswa yang sering bicara,
karena guru ingat mereka). Mulai fresh menghindari membawa bias ke sistem
rotasi.

---

## 5. Aktivasi Routing — Perubahan `data/index.js`

### 5.1 Saat Ini (Mei 2026)

```javascript
// data/index.js sekarang
const FASE_AKTIF = 'A';
const REGISTRY = {
  'A': FASE_A,
};
```

Semua TP diambil dari `fase-a.js`. TP yang di-migrate (TP 01, TP 04) sekarang
hanya hidup di `docs/fase-1-spec/tp-01.js` dan `docs/fase-3-spec/tp-04.js`
— tidak diaktifkan.

### 5.2 Setelah Fase 5 Deploy

Strategi: **TP yang sudah migrate dipindahkan ke folder `data/tp/`**, dan
`data/index.js` di-update untuk **override per-TP** dari `fase-a.js`:

```javascript
// data/index.js setelah Fase 5
import FASE_A from './fase-a.js';
import TP_01 from './tp/tp-01.js';   // Override v4
import TP_04 from './tp/tp-04.js';   // Override v4

const FASE_AKTIF = 'A';

// Build registry yang override TP migrate
const FASE_A_MERGED = {
  ...FASE_A,
  tujuan_pembelajaran: FASE_A.tujuan_pembelajaran.map(tp => {
    if (tp.id === 'tp-01') return TP_01;
    if (tp.id === 'tp-04') return TP_04;
    return tp;
  }),
};

const REGISTRY = {
  'A': FASE_A_MERGED,
};
```

### 5.3 Setelah Setiap Sesi Migrasi

Pola berulang yang sama: tambah import + tambah mapping di merge.

```javascript
// Setelah Sesi M1 (TP 02 & 03 migrate)
import TP_02 from './tp/tp-02.js';
import TP_03 from './tp/tp-03.js';

// ... di merge:
if (tp.id === 'tp-02') return TP_02;
if (tp.id === 'tp-03') return TP_03;
```

### 5.4 Saat Semua 18 TP Migrate

`fase-a.js` lama bisa di-deprecate. `data/index.js` jadi:

```javascript
import { ALL_TPS } from './tp/index.js';  // BARU: aggregator semua TP v4

const FASE_AKTIF = 'A';
const REGISTRY = {
  'A': {
    meta: {...},
    cp: {...},
    atp: {...},
    tujuan_pembelajaran: ALL_TPS,
  },
};
```

`fase-a.js` lama tetap ada di repo untuk historical reference, tapi tidak
di-import.

---

## 6. Testing Strategy

### 6.1 Per-TP Migration Test

Setiap kali TP baru di-migrate, sebelum di-aktifkan di `data/index.js`:

**Test 1 — Syntax**: `node --check tp-{NN}.js` harus pass.

**Test 2 — Struktur Validasi**: Script validator yang cek setiap aktivitas:
- Punya field wajib (id, tipe, judul, dst)
- Tipe dari enum AktivitasTipe yang valid
- Mode (jika ada) lengkap 3 sub-mode
- Pair work punya `fallback.pair_tidak_jalan`
- Observation aktif punya `n_siswa` ≥ 1
- Vocab target subset dari vocab TP

Saya tulis `validate-tp.js` di Sesi M1 sebagai tool reusable.

**Test 3 — Backward Compat**: TP yang di-migrate masih punya `langkah[]`
v3 di setiap fase. Runtime lama tetap bisa baca TP itu kalau perlu fallback.

**Test 4 — Cross-reference**: Vocab di `aktivitas.vocab_target` semuanya
subset dari `tp.vocab`. Media di `aktivitas.media_dipakai` semuanya ID
yang ada di `tp.media[]`.

### 6.2 Per-Sesi Integration Test

Setelah 2 TP per sesi migrate, sebelum commit:

**Test 5 — Routing**: TP yang sudah migrate (terisi `aktivitas[]`) **dan**
TP yang belum migrate (hanya `langkah[]`) dua-duanya muncul di Kurikulum
tanpa error.

**Test 6 — UI sketch jalan**: Buka `UI-SKETCH.html`, ganti data demo dengan
TP yang baru migrate. Walk-through dengan jumper. Tidak ada error console.

### 6.3 Production Test (Setelah Aktivasi)

Setelah `data/index.js` di-update di Fase 5:

**Test 7 — Smoke test FLAF**: Buka FLAF, masuk kurikulum, pilih TP yang
migrate, pilih TP yang tidak migrate. Dua-duanya jalan tanpa error.

**Test 8 — Resume test**: Buka FLAF, mulai sesi TP migrate, swipe close di
tengah Inti. Buka lagi → SesiResumePrompt muncul.

**Test 9 — Observation persistence**: Selesaikan 1 sesi dengan observasi.
Buka IDB DevTools, pastikan `siswa_per_kelas` ter-update.

---

## 7. Rollback Plan

Asumsikan suatu saat di production, runtime baru ada bug yang ketahuan saat
guru sedang mengajar. Bagaimana revert dengan cepat?

### 7.1 Rollback Per TP

**Skenario**: TP 02 yang baru di-migrate ternyata bug saat dipakai live.

**Aksi**:
1. Di `data/index.js`, **comment out** baris `if (tp.id === 'tp-02') return TP_02;`
2. TP 02 otomatis fallback ke versi v3 di `fase-a.js`
3. Deploy ulang (rebuild SW cache version di `sw.js`)
4. Guru yang reload FLAF dapat versi rollback dalam 1-2 menit

**Waktu total**: ~15 menit dari deteksi bug ke rollback live.

### 7.2 Rollback Global Runtime Baru

**Skenario**: Runtime baru itu sendiri (UI, state machine) ternyata punya
masalah fundamental.

**Aksi**:
1. Tambahkan feature flag global di `app.js`: `RUNTIME_BARU_AKTIF = false`
2. Semua route ke runtime lama, abaikan `aktivitas[]`
3. Deploy ulang
4. Semua TP fallback ke runtime lama

**Waktu total**: ~30 menit dari deteksi ke rollback. Lebih lama karena harus
ubah code, bukan data.

**Catatan**: Feature flag global ini **tidak** dirancang dari awal — saya
sengaja tidak masukkan ke kontrak runtime untuk hindari over-engineering.
Tapi sebagai escape hatch emergency, mudah ditambah jika perlu.

### 7.3 Rollback Schema Extension

**Skenario**: Schema v4.2 yang baru ditambah ternyata punya field yang
broken di runtime engine.

**Aksi**: Karena field schema **opsional**, runtime baru yang tidak mengenal
field bisa **abaikan saja**. Tidak perlu rollback. Hanya perlu **fix bug
runtime** untuk handle field baru dengan benar.

Ini keuntungan disiplin "field baru selalu opsional" di SCHEMA-CHANGELOG.

---

## 8. Edge Cases & Risk Mitigation

### 8.1 Guru Sedang Mengajar Saat Update FLAF Deploy

**Skenario**: Guru pakai TP 02 (runtime lama), engineer deploy update yang
include TP 02 v4. Service worker update di background.

**Risiko**: Guru di tengah sesi tiba-tiba reload, dapat runtime baru, state
hilang.

**Mitigasi**: Service worker config harus pakai `skipWaiting: false` saat
ada sesi aktif. Tambahkan di SW: deteksi `kv:sesi_aktif`, jika ada, tunda
activate sampai sesi selesai atau timeout 4 jam.

**Catatan**: Detail teknis ini dieksekusi di Fase 5, bukan sekarang. Cukup
catat sebagai risiko untuk diingat.

### 8.2 IndexedDB Penuh di HP Jadul

**Skenario**: HP siswa dengan storage 8GB hampir penuh. Saat sesi pair work
selesai, `db.set('siswa_per_kelas', ...)` throw QuotaExceededError.

**Mitigasi**:
1. Di runtime engine, wrap semua write dalam try-catch
2. Toast lembut: "Catatan disimpan sementara, akan dicoba lagi"
3. Data tetap di sessionMemoryState (RAM)
4. Saat closure: prompt guru untuk export data sebelum kehilangan

Sudah disebutkan di STATE-MACHINE.md §11.1.

### 8.3 Schema v4 Stabil di TP 1-6, Lalu TP 12 Butuh Major Extension

**Skenario**: TP 12 Body Parts butuh tipe baru `tpr_full_body` yang
butuh struktur fundamental berbeda dari aktivitas lain. Schema v4 tidak
cukup.

**Mitigasi**:
1. Jangan paksa TP 12 ke schema v4
2. Evaluasi: apakah ini schema v5 (major version)?
3. Jika ya: tunda TP 12 migrate sampai Fase 5 selesai dan ada bandwidth
   untuk rancang schema v5
4. TP 12 tetap pakai v3 + runtime lama, tidak masalah

Risiko ini real karena saya tidak bisa prediksi 100% kebutuhan TP 07-18.

### 8.4 Substansi Draft Saya Terlalu Sering Salah di Sesi M3+

**Skenario**: Sampai TP 06, koreksi Anda minimal (1-2 hal per TP). Tapi
mulai TP 07 (My Family), koreksi Anda banyak — saya miss nuansa kultural
yang penting.

**Mitigasi**:
1. Pivot dari C2 ke C3 (Anda kerjakan beberapa TP yang paling kultural)
2. Atau: sebelum saya draft TP berikutnya, saya tanya Anda **1-2 pertanyaan
   konteks** terlebih dahulu untuk reduce miss
3. Atau: saya draft hanya struktur (skeleton), Anda isi substansi

Keputusan pivot di made-on-the-fly, bukan ditetapkan sekarang.

### 8.5 Data Siswa di `siswa_per_kelas` Korup atau Hilang

**Skenario**: IDB error, data siswa per kelas hilang. Rotasi observasi
jadi tidak fair karena tidak ada history.

**Mitigasi**:
1. Auto-recovery: jika `siswa_per_kelas` kosong, sistem fallback ke
   rotasi random (`rotasi_priority: 'random'` default)
2. Saran observasi tetap muncul, hanya tidak optimal
3. Guru tetap bisa observe siapa saja — sistem tidak menghalangi

Resilience > optimal accuracy.

---

## 9. Definition of Done Per Fase

Cara tahu kapan Fase 4 ini benar-benar selesai dan boleh lanjut ke Fase 5:

### 9.1 Definition of Done Migrasi Per TP

Sebuah TP dianggap "selesai migrate v4" jika:

- [ ] File `tp-{NN}.js` ada di `docs/fase-X-spec/` dengan format v4
- [ ] Syntax valid (`node --check`)
- [ ] Struktur validasi (Test 2 di §6.1) pass
- [ ] Substansi di-review Anda dengan format "Tepat" atau "Tepat dengan koreksi: [list]"
- [ ] Semua koreksi Anda sudah saya implement
- [ ] Backward compat (Test 3) pass — `langkah[]` v3 tetap ada
- [ ] Commit ke Git dengan message standar

### 9.2 Definition of Done Sesi Migrasi (2 TP)

Sebuah sesi migrasi dianggap selesai jika:

- [ ] 2 TP selesai (Definition of Done per TP × 2)
- [ ] Dokumen comparison singkat ditulis (mirip COMPARISON.md tapi lebih pendek)
- [ ] Kalau ada schema extension: SCHEMA-CHANGELOG di-update
- [ ] Commit ke Git

### 9.3 Definition of Done Checkpoint Kelas 1 (Setelah M2)

- [ ] 6 TP Kelas 1 selesai migrate
- [ ] `KELAS-1-AUDIT.md` ditulis dan di-review
- [ ] Schema v4.x stabil (atau diputuskan extend untuk masalah baru)
- [ ] Keputusan aktivasi production: ya/tidak/tunggu

### 9.4 Definition of Done Fase 4 (Plan Document)

Fase 4 dianggap selesai (Anda boleh tap "Lanjut Fase 5") jika:

- [ ] File `MIGRATION-PLAN.md` ini di-review dan setuju
- [ ] Anda paham 3 keputusan strategis (A2, B2, C2) dan implikasinya
- [ ] Anda commit dokumen ini ke Git

**Migrasi 16 TP tersisa BUKAN bagian dari Definition of Done Fase 4**.
Migrasi terjadi di **Fase 4.5** (sesi M1-M8 di antara Fase 4 dan Fase 5).

---

## 10. Apa Yang Terjadi Setelah Fase 4

Setelah Anda commit dokumen ini, urutan kerja realistis:

```
Fase 4 (sekarang)
  └─ MIGRATION-PLAN.md ini di-review & commit
       │
       ▼
  Fase 4.5 — Migrasi (8 sesi)
  ├─ Sesi M1: TP 02 & TP 03 + validator script
  ├─ Sesi M2: TP 05 & TP 06
  ├─ 🎯 Checkpoint: KELAS-1-AUDIT
  ├─ Sesi M3: TP 07 & TP 08
  ├─ Sesi M4: TP 09 & TP 10
  ├─ Sesi M5: TP 11 & TP 12
  ├─ Sesi M6: TP 13 & TP 14
  ├─ Sesi M7: TP 15 & TP 16
  └─ Sesi M8: TP 17 & TP 18
       │
       ▼
  Fase 5 — Build Runtime Baru
  ├─ Build modul runtime baru (state machine + UI)
  ├─ Build store `siswa_per_kelas`
  ├─ Update `data/index.js` routing
  ├─ Update SW untuk handle deploy yang aman
  ├─ Production deploy bertahap (Kelas 1 dulu)
  └─ Migrasi data lama (jika diperlukan)
```

Setiap fase punya **transisi eksplisit** — saya tidak akan lompat ke Fase 5
tanpa konfirmasi Anda bahwa migrasi cukup matang.

---

## 11. Yang TIDAK Ada di Migration Plan Ini

Beberapa hal yang sengaja **tidak** saya rancang di Fase 4:

- **Visual design final** untuk runtime baru — itu di Fase 5
- **Implementasi detail** state machine code — Fase 5
- **Pricing/monetization logic** — out of scope total
- **Multi-user features** — masih single-user FLAF
- **Analytics dashboard** — refleksi guru terjadi di Jejak yang sudah ada,
  tidak butuh dashboard baru

---

## 12. Ringkasan Eksekutif

FLAF runtime baru akan di-deploy **per TP**, dengan TP 01-06 (Kelas 1)
sebagai prioritas pertama. Migrasi dilakukan di 8 sesi terstruktur, masing-masing
2 TP, dengan saya mendraft substansi dan Anda me-review. Setelah migrasi 6 TP
Kelas 1 selesai (~2 sesi + 1 checkpoint), runtime baru bisa aktif production
untuk Kelas 1. Sisanya 12 TP migrate dalam 6 sesi berikutnya. Total
estimasi: 8 sesi migrasi + 2 sesi Fase 5 build = **10 sesi sampai
runtime baru full deployed**.

Disiplin migrasi: backward compatible 100%, rollback per-TP tersedia, store
`siswa_per_kelas` baru untuk rotasi observasi adil lintas sesi, dan
filosofi "sistem menunjukkan, guru memutuskan" tetap rule of law di
seluruh runtime.

---

## Akhir MIGRATION-PLAN.md
