# FLAF — Skema Data TP (v4 / Hybrid Aktivitas)

**Status**: Draft Fase 1 · Mei 2026
**Tujuan**: Kontrak struktur data TP yang mendukung runtime baru "kompas guru"
sambil mempertahankan kompatibilitas dengan runtime lama selama migrasi.

---

## 1. Prinsip Skema

1. **Hybrid**: Setiap fase boleh punya `aktivitas[]` (baru) DAN/ATAU `langkah[]` (lama).
   Runtime baru baca `aktivitas` jika ada, fallback ke `langkah`.
2. **Self-contained per aktivitas**: Semua yang runtime butuh untuk menjalankan
   satu aktivitas ada di dalam objek aktivitas itu. Tidak perlu cross-reference
   ke aktivitas lain.
3. **Optional fields dengan default eksplisit**: Banyak field opsional. Runtime
   harus tahu default-nya, jangan throw saat field hilang.
4. **Mandat dokumen**: Setiap field mengacu ke dokumen kebijakan FLAF.

---

## 2. Struktur Top-Level TP (tidak berubah dari v3)

```javascript
{
  id          : string,    // 'tp-01' ... 'tp-18'
  nomor       : number,    // 1-18
  kelas       : number,    // 1 atau 2
  nama        : string,    // 'Greetings & Farewells'
  tema        : string,    // 'Interaksi Sosial Dasar'
  deskripsi   : string,    // Tujuan pembelajaran ringkas
  indikator   : string[],  // 3 indikator pencapaian
  vocab       : string[],  // Vocabulary level TP
  persiapan   : string[],  // [LAMA] daftar persiapan
  media       : Media[],   // [BARU] referensi media library terstruktur
  skenario    : Fase[],
}
```

### 2.1 Object Media (BARU)

Pengganti `persiapan` lama yang berupa string array. Mengikuti Dok 08 §12.

```javascript
{
  id              : string,    // 'media-kartu-waktu-pagi'
  nama            : string,    // 'Kartu Waktu — Pagi'
  tipe            : string,    // 'kartu_cetak' | 'kartu_digital' | 'audio_file'
  printable       : boolean,
  pdf_ref         : string?,   // 'tp-01-v1.pdf' jika printable
  pdf_halaman     : number?,   // halaman PDF
  reusable_lintas_tp : boolean, // Dok 08 §6
}
```

**Selama transisi**: `persiapan[]` lama tetap di TP untuk runtime lama.
TP yang sudah migrate ke v4 tambah `media[]` di sampingnya.

---

## 3. Struktur Fase (modified)

```javascript
{
  fase        : string,        // 'Pembuka' | 'Inti' | 'Penutup' | 'Penilaian'
  durasi      : number,        // menit
  langkah     : Langkah[]?,    // [LAMA] runtime lama
  aktivitas   : Aktivitas[]?,  // [BARU] runtime baru
}
```

**Kontrak**: Minimal salah satu (`langkah` atau `aktivitas`) wajib ada.
Jika dua-duanya ada, runtime baru prioritaskan `aktivitas`, runtime lama prioritaskan `langkah`.

---

## 4. Struktur Aktivitas (BARU — unit utama runtime baru)

```javascript
{
  // ────────── A. IDENTITAS ──────────
  id              : string,     // 'tp01-inti-pair-greeting'
  tipe            : AktivitasTipe,
  judul           : string,     // 'Sapa Teman' — untuk header layar
  pm              : 'mindful' | 'meaningful' | 'joyful' | null,
  flags           : Flag[]?,    // Tanda perilaku khusus runtime. Lihat §4.5.

  // ────────── B. PEDAGOGI ──────────
  tujuan_komunikasi : string,
  vocab_target      : string[],  // Subset vocab TP yang dilatih di sini

  // ────────── C. DURASI ──────────
  durasi_target_detik : number,  // Target normal
  durasi_min_detik    : number,  // Versi pendek (kondisi waktu mepet)
  durasi_max_detik    : number?, // Cap maksimum (informational only — sistem tidak auto-stop)

  // ────────── D. SCRIPT & AUDIO (Dok 07) ──────────
  micro_script : {
    pembuka  : string?,   // ≤ 2 kalimat (Dok 07 §4)
    selama   : string?,   // Yang guru ucapkan sambil aktivitas jalan
    penutup  : string?,   // Transisi ke aktivitas berikutnya
  },

  audio_cue : {                  // Yang sistem PUTAR via TTS (atau audio file masa depan)
    contoh_guru     : string?,   // Contoh kalimat guru
    contoh_siswa    : string?,   // Contoh respons siswa yang diharapkan.
                                 // KOSONG untuk tipe `tpr_action` (siswa
                                 // tidak ucap kembali, hanya bertindak).
    target_vocab    : string[]?, // Kata-kata yang bisa diputar terpisah on-demand
  },

  // ────────── E. MEDIA ──────────
  media_dipakai : string[],      // ID media dari Media[] level TP.
                                 // Berlaku untuk aktivitas mengajar maupun
                                 // observation_validation (mis: kartu yang
                                 // dibawa guru saat validasi).

  // ────────── F. MODE DIFERENSIASI (Dok 06 §3) ──────────
  mode : {
    mudah     : ModeConfig,
    normal    : ModeConfig,
    tantangan : ModeConfig,
  },

  // ────────── G. OBSERVATION SLOT (Dok 09 §12) ──────────
  observation : {
    aktif       : boolean,        // Apakah ini titik observasi
    n_siswa     : number?,        // Berapa siswa diobservasi (default 3)
    indikator   : Indikator[]?,   // Indikator apa yang diukur
    rotasi_priority : string?,    // 'belum_observed' | 'belum_speaking_turn' | 'random'
    tag_set     : 'standar' | 'akurasi'?,  // Rating tag set untuk capture. Default 'standar'. Lihat §4.6.
  },

  // ────────── H. FALLBACK (Dok 03 §16, Dok 05 §11) ──────────
  fallback : {
    [kondisi_id] : string,        // Mapping kondisi → instruksi konkret
  },

  // ────────── I. AUTO-ADVANCE BEHAVIOR ──────────
  advance : {
    mode      : 'manual' | 'timer_visible_only',
    // Catatan: tidak ada auto-advance. Apapun mode-nya, transisi layar
    // selalu butuh tap eksplisit dari guru. Lihat §5 untuk penjelasan.
  },
}
```

### 4.1 AktivitasTipe (enum)

| Tipe | Deskripsi | Observation default |
|---|---|---|
| `sapaan_kelas` | Guru menyapa seluruh kelas, kelas merespons bersama | Tidak |
| `sapaan_individu` | Guru menyapa siswa satu per satu (saat masuk kelas) | Ya |
| `modeling` | Guru demonstrasi pola bahasa | Tidak |
| `chorus` | Kelas mengulang bersama setelah guru | Tidak |
| `chant` | Aktivitas berirama dengan tepuk/gerak | Tidak |
| `pair_work` | Siswa berinteraksi berpasangan | Ya |
| `chant_movement` | Chant berirama dengan gerakan (countdown, action song, dll) — bukan kompetitif | Tidak |
| `game_movement` | Permainan dengan gerakan & elemen kompetitif | Tidak |
| `tpr_action` | Total Physical Response — guru ucap instruksi, siswa lakukan aksi fisik (BUKAN ucap kembali). `audio_cue.contoh_siswa` umumnya kosong. | Ya (untuk `response`) |
| `meaningful_link` | Mengaitkan ke kehidupan nyata siswa | Tidak |
| `review_quick` | Review cepat di Penutup (opsional) | Ya |
| `reflection` | Siswa atau guru berefleksi | Tidak |
| `closure_reinforcement` | **WAJIB di setiap TP** — fase paling akhir: pengakuan pencapaian siswa + farewell. Berfungsi memperkuat hasil belajar secara emosional dan kognitif. Bukan sekadar "goodbye." | Tidak |
| `observation_validation` | [Penilaian] Validasi siswa belum terobservasi | Ya |

### 4.2 ModeConfig (struktur per mode diferensiasi)

```javascript
{
  bantuan          : string,   // Tingkat bantuan visual/verbal guru
  panjang_speaking : string,   // Target speaking siswa di mode ini
  audio_diputar    : boolean?, // Apakah audio cue diputar otomatis di mode ini
  cue_extra        : string?,  // Tambahan instruksi spesifik mode (mis: untuk Mudah, "tunjuk gambar dulu")
}
```

**Default jika `mode` tidak ada**: Sistem anggap aktivitas single-mode (semua siswa
diperlakukan sama). Hanya untuk aktivitas yang sangat fundamental seperti
`farewell_kelas` di mana diferensiasi tidak masuk akal.

### 4.3 Indikator (enum, dari Dok 09 §3)

| ID | Nama | Yang Diukur |
|---|---|---|
| `participation` | Participation | Apakah siswa berbicara, frekuensi giliran |
| `response` | Response | Kemampuan merespons salam/prompt sederhana |
| `confidence` | Confidence | Keberanian mencoba tanpa dipaksa |
| `vocab_use` | Target Vocabulary Use | Penggunaan kosakata target dalam konteks |

### 4.4 Kondisi Fallback (enum)

| ID | Konteks |
|---|---|
| `pair_tidak_jalan` | Pair work gagal (siswa diam, pasangan tidak interaksi) |
| `siswa_pasif` | Banyak siswa diam saat aktivitas |
| `kelas_ribut` | Kelas sulit fokus |
| `energi_turun` | Siswa lesu, butuh re-energize |
| `waktu_mepet` | Sisa waktu fase tidak cukup untuk durasi normal |
| `media_tidak_tersedia` | Kartu/PDF tidak siap |

### 4.5 Flag (enum)

Field `flags[]` di level aktivitas adalah array yang memberitahu runtime engine
tentang perilaku khusus aktivitas. Optional — kalau tidak ada, behavior default.

| Flag | Maksud | Behavior yang Diharapkan dari Runtime |
|---|---|---|
| `kompetitif_safety` | Aktivitas mengandung elemen kompetisi yang bisa membahayakan emotional safety siswa pemalu | Saat mode mudah aktif, runtime WAJIB menampilkan reminder safety di UI (mis: "Mode mudah: tidak kompetitif individual"). Saat mode normal/tantangan, reminder tidak ditampilkan. |

**Catatan**: Daftar flag ini akan bertumbuh seiring migrasi TP. Lihat
SCHEMA-CHANGELOG.md untuk riwayat penambahan.

### 4.6 Tag Set (untuk Observation Capture)

Field `observation.tag_set` menentukan jenis rating tag yang ditampilkan
saat guru tap chip rating per siswa di state `ObservationCapture`.

| Tag Set | Tags | Cocok untuk Indikator |
|---|---|---|
| `standar` (default) | `aktif`, `berani`, `diam`, `perlu_help` | `participation`, `confidence`, `response` |
| `akurasi` | `tepat`, `agak_tepat`, `belum`, `belum_dicoba` | `vocab_use` (lafal angka, penggunaan vocabulary spesifik) |

**Default**: Jika `tag_set` tidak ditetapkan, runtime gunakan `standar`.

**Kapan pakai `akurasi`**: Aktivitas yang fokus utamanya pengukuran lafal/recall
vocabulary spesifik — misalnya validasi angka di TP 04, validasi vocabulary
target di TP fokus kosakata.

---

## 5. Kontrak Advance Behavior

**Prinsip dasar**: Sistem tidak benar-benar tahu apa yang terjadi di kelas.
Sistem menunjukkan dan mengarahkan, tapi kendali transisi tetap di tangan guru.
**Layar tidak boleh berganti tanpa tap eksplisit dari guru.**

```javascript
advance: {
  mode: 'manual' | 'timer_visible_only'
}
```

- **`manual`**: Tidak ada timer di layar. Guru tap "Lanjut" saat siap.
  Default untuk: modeling, sapaan_kelas, sapaan_individu, meaningful_link,
  reflection, review_quick, farewell_kelas, observation_validation.

- **`timer_visible_only`**: Timer tampil di layar sebagai indikator informasi
  (countdown dari `durasi_target_detik`). Saat timer habis, layar **tidak**
  berganti otomatis — timer hanya berubah warna (hijau → kuning → merah lembut)
  dan menampilkan label "Waktu habis, lanjut saat siap." Guru tap "Lanjut"
  kapanpun dia mau (sebelum, saat, atau setelah timer habis).
  Default untuk: pair_work, chant, game_movement.

### 5.1 Mengapa tidak ada auto-advance

Timer berfungsi sebagai:

1. **Glanceable awareness** — guru tahu kelas sudah berapa lama di aktivitas ini
   tanpa harus ingat jam mulai (Dok 10 §3).
2. **Visual untuk siswa** — timer bisa diperlihatkan ke siswa sebagai sinyal
   ritme ("tinggal sedikit lagi") (Dok 02 §2, Dok 03 §15).
3. **Sinyal soft ke guru** — kalau timer sudah merah dan kelas masih asik,
   guru sendiri yang putuskan apakah lanjut atau perpanjang.

Sistem tidak memaksa transisi karena sistem tidak punya cara tahu apakah
aktivitas sudah "selesai" secara pedagogis. Hanya guru yang tahu.

### 5.2 Default jika `advance` tidak ada di data

- `pair_work`, `chant`, `game_movement` → `timer_visible_only`
- Sisanya → `manual`

Runtime engine berhak override default ini jika data eksplisit menyebut
mode lain. Tapi tidak ada konfigurasi yang bisa mengaktifkan auto-advance.

---

## 6. Kontrak Mode Diferensiasi (Per Sesi)

Mode dipilih di Preview oleh guru, disimpan di sesi state, diterapkan ke
semua aktivitas dalam sesi tersebut.

**Klarifikasi penting** — cara baca field `mode` per aktivitas:

```javascript
mode: {
  mudah:     { ... },   // ← Konten siap-pakai untuk mode Mudah
  normal:    { ... },   // ← Konten siap-pakai untuk mode Normal
  tantangan: { ... },   // ← Konten siap-pakai untuk mode Tantangan
}
```

Field `mode` di setiap aktivitas berisi **3 versi konten yang disiapkan**.
Saat runtime, hanya **1 versi yang ditampilkan** — yang sesuai dengan pilihan
guru di Preview. Bukan: "guru pilih per aktivitas." Engineer Fase 5 render
satu versi `mode[effectiveMode]`, bukan tiga sekaligus.

Override per aktivitas (escape hatch): runtime menyediakan tombol kecil
"Sesuaikan kesulitan" yang muncul setelah aktivitas berjalan ≥30 detik tanpa
respons siswa yang baik. Tap → naik/turun satu mode untuk aktivitas itu saja.

---

## 7. Backward Compatibility Rules

Runtime lama harus tetap jalan untuk TP yang belum migrate. Aturan:

1. Jangan hapus field lama: `langkah`, `persiapan`, `tipe` (di level langkah).
2. Field baru harus opsional di sisi runtime lama (runtime lama mengabaikan
   `aktivitas`, `media`, dll).
3. Routing di `data/index.js` tidak berubah — getTP() return objek apa adanya,
   runtime yang putuskan format mana yang dia baca.

---

## 8. Validation (untuk dijalankan di build time, bukan runtime)

Sebuah TP dianggap valid v4 jika:

- Punya `media[]` (boleh kosong array, tapi field harus ada)
- Setiap fase punya `aktivitas[]` ATAU `langkah[]`
- Setiap aktivitas dengan `mode` punya ketiga sub-mode (mudah, normal, tantangan)
- Setiap aktivitas tipe `pair_work` punya `fallback.pair_tidak_jalan`
- Setiap aktivitas dengan `observation.aktif = true` punya `n_siswa` ≥ 1
- **Fase Penutup WAJIB punya tepat 1 aktivitas tipe `closure_reinforcement` sebagai aktivitas terakhir** (Schema v4.3+)

Pelanggaran → warning di console, BUKAN throw. Kelas tetap jalan.

---

## 9. Yang TIDAK Ada di Skema Ini (Sengaja)

- **Skoring numerik**: Asesmen fase A tidak pakai angka. Kategorisasi (Active /
  Emerging / Passive) ditentukan runtime engine, bukan di data.
- **Branching tree kompleks**: Tidak ada if-then-else di data. Adaptasi kondisi
  ditangani oleh runtime engine + tabel fallback sederhana.
- **Per-siswa diferensiasi**: Dok 06 fokus pada 3 mode kelas. Per-siswa override
  ditunda sampai sistem matang (mungkin fase v5).
- **Realtime sync**: Data TP statis, tidak diubah di runtime. Hanya state sesi
  yang berubah (di-handle di Fase 2 State Machine).

---

## 10. Referensi Dokumen FLAF

| Field | Dokumen Acuan |
|---|---|
| `aktivitas` sebagai unit | Dok 04 §8 |
| `pair_work` di Inti | Dok 03 §9, Dok 04 §7 |
| `mode` 3-tier | Dok 06 §3 |
| `observation.aktif` | Dok 09 §12 |
| `fallback` per aktivitas | Dok 03 §16, Dok 05 §11 |
| `micro_script` ≤ 2 kalimat | Dok 07 §4 |
| `media[]` dengan ID | Dok 08 §12 |
| `vocab_target` per aktivitas | Dok 09 §7 |
| Backward compatibility | Dok 11 §15, Dok 10 §14 |

---

## Akhir SCHEMA.md
