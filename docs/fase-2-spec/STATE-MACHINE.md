# FLAF — State Machine Runtime Skenario

**Status**: Draft Fase 2 · Mei 2026
**Prasyarat**: Sudah baca `SCHEMA.md` dan `tp-01.js` di `docs/fase-1-spec/`
**Tujuan**: Mendefinisikan bagaimana runtime berpindah antar state saat guru
menjalankan satu sesi mengajar — apa yang memicu transisi, apa yang disimpan,
bagaimana sistem merespons kondisi tidak ideal.

---

## 0. Prinsip Fondasi

Dokumen ini berdiri di atas satu kalimat yang Anda ucapkan di Mei 2026:

> **"Sistem hanya menunjukkan, hanya mengarahkan. Kendali tetap ada pada guru
> karena sistem tidak benar-benar tahu apa yang terjadi di kelas."**
> — *"jangan sampai layar berganti tanpa sepengetahuan guru."*

Konsekuensi konkret untuk state machine:

1. **Tidak ada transisi state otomatis berbasis waktu.** Timer hanya menampilkan
   info, tidak mengubah state.
2. **Setiap transisi state butuh tap eksplisit dari guru.** Pengecualian: tap
   tidak langsung pada tombol "Lanjut" — bisa juga tap fallback, tap chip
   observasi, dll. Tapi selalu ada aksi manusia.
3. **Sistem boleh menyarankan, tidak boleh memaksa.** Saran ditampilkan sebagai
   teks, bukan sebagai default yang tersorot otomatis.
4. **Sistem boleh menyimpan keputusan masa lalu untuk membantu masa depan.**
   Tapi guru tetap bisa override atau abaikan.

Setiap kali Anda menemukan rule di dokumen ini yang melanggar prinsip ini,
**itu bug spesifikasi, bukan feature.** Tolong panggil saya kembali.

---

## 1. Lingkup State Machine

State machine ini mengelola **satu sesi mengajar satu TP**.

Yang **di dalam scope**:
- State runtime saat guru menjalankan TP 01 (atau TP manapun)
- Transisi antara Preview → Pembuka → Inti → Penutup → Penilaian → Selesai
- Transisi antar aktivitas dalam satu fase
- Pencatatan observasi, lapor kondisi, override mode
- Persistensi state untuk resume sesi terputus

Yang **di luar scope** (ditangani di tempat lain):
- State sebelum guru pilih TP (Landing, Kurikulum, Pilih Kelas) → ada di FLAF
- State setelah sesi selesai (Jejak, Refleksi panjang) → ada di FLAF
- Asesmen kumulatif lintas TP → Fase berikutnya, mungkin out-of-scope total
- Logika tampilan visual per state → Fase 3 (UI Sketch)

---

## 2. Level Hierarki State

State machine FLAF runtime punya **tiga lapis**:

```
LAPIS 1: SESI         ← dari "mulai mengajar TP 01" sampai "selesai sesi"
   │
   ├── LAPIS 2: FASE   ← Pembuka / Inti / Penutup / Penilaian
   │      │
   │      └── LAPIS 3: AKTIVITAS  ← satu aktivitas konkret (mis: pair_work)
   │
   └── ...
```

Setiap lapis punya state-nya sendiri. Saat aktivitas selesai, runtime kembali ke
lapis Fase untuk pilih aktivitas berikutnya. Saat fase selesai, runtime kembali
ke lapis Sesi.

---

## 3. State Diagram — Lapis 1 (Sesi)

```
                  ┌──────────────────────────────────┐
                  │  Guru pilih TP di Kurikulum      │
                  └────────────────┬─────────────────┘
                                   │
                                   ▼
                  ┌──────────────────────────────────┐
                  │  STATE: SesiPreviewing           │
                  │  Guru lihat preview TP, pilih    │
                  │  mode diferensiasi, kondisi      │
                  │  kelas hari ini                  │
                  └──────────────┬───────────────────┘
                                 │
                       Tap "Mulai mengajar"
                                 │
                                 ▼
            ┌──────────────────────────────────────┐
            │ Cek IndexedDB: ada sesi belum selesai │
            │ untuk TP ini?                         │
            └────┬────────────────────────────┬─────┘
                 │ Tidak ada                  │ Ada
                 ▼                            ▼
   ┌────────────────────────┐  ┌─────────────────────────────────┐
   │ STATE: SesiAktif       │  │ STATE: SesiResumePrompt         │
   │ (mulai Pembuka)        │  │ "Sesi sebelumnya tidak selesai" │
   └────────┬───────────────┘  └────┬──────────────────────┬─────┘
            │                       │ Tap "Mulai dari awal"│ Tap "Lanjut dari X"
            │                       ▼                      ▼
            │            ┌──────────────────┐   ┌────────────────────┐
            │            │ Hapus state lama │   │ Load state lama    │
            │            │ Mulai fresh       │   │ Resume di aktivitas│
            │            └────┬─────────────┘   └────┬───────────────┘
            │                 │                      │
            └─────────────────┴──────────────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────────┐
                  │  STATE: SesiAktif                │
                  │  (delegasi ke Lapis 2)           │
                  │                                  │
                  │  Sub-states:                     │
                  │   - FasePembuka                  │
                  │   - FaseInti                     │
                  │   - FasePenutup                  │
                  │   - FasePenilaian                │
                  └──────────────┬───────────────────┘
                                 │
                Semua fase selesai ATAU
                Guru tap "Selesai sesi" anytime
                                 │
                                 ▼
                  ┌──────────────────────────────────┐
                  │  STATE: SesiClosure              │
                  │  Tampilkan ringkasan otomatis,   │
                  │  guru isi mood + catatan opsional│
                  └──────────────┬───────────────────┘
                                 │
                      Tap "Simpan & Selesai"
                                 │
                                 ▼
                  ┌──────────────────────────────────┐
                  │  Persist final ke IndexedDB,     │
                  │  clear state aktif,              │
                  │  kembali ke Kurikulum            │
                  └──────────────────────────────────┘
```

### 3.1 Daftar State Sesi

| State | Deskripsi |
|---|---|
| `SesiPreviewing` | Guru di halaman Preview TP, belum mulai mengajar |
| `SesiResumePrompt` | Sistem detect sesi belum selesai, tanya guru |
| `SesiAktif` | Guru sedang mengajar (delegasi ke fase) |
| `SesiClosure` | Sesi sudah selesai semua fase, atau guru tap "Selesai sesi" |
| `SesiDone` | State final — data sudah persisted, kembali ke Kurikulum |

### 3.2 Tabel Transisi Sesi

| Dari | Trigger | Ke | Aksi |
|---|---|---|---|
| (entry) | Guru pilih TP di Kurikulum | `SesiPreviewing` | Load TP data dari fase-a.js / tp-01.js |
| `SesiPreviewing` | Tap "Mulai mengajar" | Check IDB | Query `kv:sesi_aktif` |
| Check IDB | Sesi lama tidak ada | `SesiAktif` (entry) | Init state baru |
| Check IDB | Sesi lama ada | `SesiResumePrompt` | Tampilkan prompt |
| `SesiResumePrompt` | Tap "Mulai dari awal" | `SesiAktif` (entry) | Hapus state lama, init baru |
| `SesiResumePrompt` | Tap "Lanjut dari X" | `SesiAktif` (mid) | Load state lama, restore posisi |
| `SesiAktif` | Semua fase selesai | `SesiClosure` | Compute ringkasan |
| `SesiAktif` | Tap "Selesai sesi" anytime | `SesiClosure` | Compute ringkasan parsial |
| `SesiClosure` | Tap "Simpan & Selesai" | `SesiDone` | Persist final, clear aktif |
| `SesiDone` | (auto) | (exit) | Navigate ke Kurikulum |

**Catatan**: Tidak ada transisi otomatis dari `SesiAktif` ke `SesiClosure` selain
"semua fase selesai" yang itu pun memerlukan guru tap "Lanjut" di aktivitas
terakhir. Tidak ada timer global sesi. Sesi bisa berjalan 30 menit atau 90 menit
— sistem hanya menunjukkan elapsed time, tidak menghentikan.

---

## 4. State Diagram — Lapis 2 (Fase)

Setiap fase (Pembuka, Inti, Penutup, Penilaian) punya state machine identik.
Hanya isi aktivitasnya yang berbeda.

```
            ┌──────────────────────────────────────┐
            │  STATE: FaseEntering                 │
            │  Setup pointer ke aktivitas pertama  │
            │  Tampilkan judul fase (transisi)     │
            └────────────────┬─────────────────────┘
                             │
                  Tap "Mulai [Pembuka/Inti/...]"
                             │
                             ▼
            ┌──────────────────────────────────────┐
            │  STATE: AktivitasAktif (Lapis 3)     │
            │  Delegasi ke state machine aktivitas │
            └────────────────┬─────────────────────┘
                             │
                  Aktivitas selesai
                  (guru tap "Lanjut")
                             │
                             ▼
            ┌──────────────────────────────────────┐
            │  Cek: masih ada aktivitas berikutnya?│
            └─────┬────────────────────────────┬───┘
                  │ Ya                         │ Tidak
                  ▼                            ▼
        ┌───────────────────┐      ┌──────────────────────┐
        │ Increment pointer │      │  STATE: FaseSelesai  │
        │ Loop kembali ke   │      │  Tampilkan "Pembuka  │
        │ AktivitasAktif    │      │  selesai" + ringkasan│
        └───────────────────┘      │  observasi parsial    │
                                   └──────────┬───────────┘
                                              │
                                  Tap "Lanjut ke [Inti/...]"
                                              │
                                              ▼
                                   (exit ke fase berikutnya)
```

### 4.1 Daftar State Fase

| State | Deskripsi |
|---|---|
| `FaseEntering` | Layar transisi: "Pembuka — 3 aktivitas, 10 menit" |
| `AktivitasAktif` | Sedang menjalankan aktivitas (delegasi Lapis 3) |
| `FaseSelesai` | Semua aktivitas fase selesai, layar transisi |

### 4.2 Tabel Transisi Fase

| Dari | Trigger | Ke | Aksi |
|---|---|---|---|
| (entry dari Lapis 1) | Fase baru dimulai | `FaseEntering` | Set pointer = aktivitas[0] |
| `FaseEntering` | Tap "Mulai" | `AktivitasAktif` | Init state aktivitas pertama |
| `AktivitasAktif` | Aktivitas selesai, ada next | `AktivitasAktif` | Increment pointer, init aktivitas baru |
| `AktivitasAktif` | Aktivitas selesai, tidak ada next | `FaseSelesai` | Tampilkan ringkasan fase |
| `FaseSelesai` | Tap "Lanjut" | (exit ke Lapis 1) | Trigger transisi fase berikutnya |

**Catatan**: `FaseEntering` dan `FaseSelesai` adalah state pendek (5-10 detik
visual), tapi tetap state — bukan dilewati. Tujuannya: kasih guru jeda kognitif
antar fase, sesuai Dok 05 §3 ("classroom flow harus glanceable").

---

## 5. State Diagram — Lapis 3 (Aktivitas)

Ini adalah state machine paling detail. Setiap aktivitas memiliki bentuk yang
sama, tapi dengan variasi berdasarkan field `advance.mode` dan `observation.aktif`.

```
            ┌──────────────────────────────────────┐
            │  STATE: AktivitasReady                │
            │  Tampilkan judul + micro_script        │
            │  pembuka + tombol audio (jika ada)     │
            │  Tampilkan saran (jika observation     │
            │  aktif → saran siswa)                  │
            └────────────────┬─────────────────────┘
                             │
                  Tap tombol primary
                  (label tergantung tipe)
                             │
                             ▼
            ┌──────────────────────────────────────┐
            │  STATE: AktivitasRunning              │
            │  Tampilkan teks "selama"               │
            │  Jika timer_visible_only: tampilkan    │
            │  countdown                             │
            │  Tampilkan tombol fallback             │
            └────┬──────────┬────────────┬──────────┘
                 │          │            │
        Tap fallback   Tap "Lanjut"  Timer habis
                 │          │       (visible only)
                 ▼          │            │
   ┌──────────────────┐    │     ┌──────▼──────────┐
   │ STATE: FallbackUI│    │     │ Timer turn merah│
   │ Tampilkan opsi:  │    │     │ Label "Waktu    │
   │ - Instruksi      │    │     │  habis, lanjut  │
   │ - Turun mode     │    │     │  saat siap"     │
   └──┬──────────┬────┘    │     │ Layar TIDAK     │
      │          │         │     │ berganti        │
   Sudah     Mode mudah    │     └────────┬────────┘
   coba      dipilih       │              │
      │          │         │      Tap "Lanjut"
      │          ▼         │              │
      │   ┌──────────────┐ │              │
      │   │ Mode aktif    │ │              │
      │   │ diturunkan    │ │              │
      │   │ Tampilkan     │ │              │
      │   │ bantuan baru  │ │              │
      │   └──────┬───────┘ │              │
      │          │         │              │
      └──────────┴─────────┴──────────────┘
                           │
                           ▼
            ┌──────────────────────────────────────┐
            │  Cek: observation.aktif untuk        │
            │  aktivitas ini?                      │
            └─────┬────────────────────────────┬───┘
                  │ Ya                         │ Tidak
                  ▼                            ▼
        ┌──────────────────────┐   ┌──────────────────────┐
        │ STATE:                │   │ (exit aktivitas)     │
        │ ObservationCapture    │   └──────────────────────┘
        │ Tampilkan 3-5 siswa   │
        │ + chip tag rating     │
        └──┬──────────┬─────────┘
           │          │
        Tap "Skip"  Tap "Lanjut"
           │          │
           └──────────┴────────► (exit aktivitas)
```

### 5.1 Daftar State Aktivitas

| State | Deskripsi |
|---|---|
| `AktivitasReady` | Layar awal aktivitas, sebelum guru tap "Mulai" |
| `AktivitasRunning` | Aktivitas sedang berjalan (guru sedang mengajar) |
| `FallbackUI` | Guru tap salah satu kondisi fallback |
| `ObservationCapture` | Setelah aktivitas, catat 3-5 siswa (jika obs aktif) |

### 5.2 Tabel Transisi Aktivitas

| Dari | Trigger | Ke | Aksi |
|---|---|---|---|
| (entry) | Aktivitas baru dimulai | `AktivitasReady` | Render layar awal dengan saran |
| `AktivitasReady` | Tap tombol primary | `AktivitasRunning` | Jika timer mode: start timer |
| `AktivitasRunning` | Tap "Lanjut" | Check obs | Jika obs aktif → `ObservationCapture`, else exit |
| `AktivitasRunning` | Tap fallback chip | `FallbackUI` | Tampilkan instruksi + opsi turun mode |
| `AktivitasRunning` | Timer habis (visible only) | `AktivitasRunning` | UI berubah (timer merah), state TETAP, tunggu tap |
| `FallbackUI` | Tap "Sudah coba" | `AktivitasRunning` | Kembali ke layar utama |
| `FallbackUI` | Tap "Mode lebih mudah" | `AktivitasRunning` | Reload aktivitas dengan mode.mudah |
| `ObservationCapture` | Tap "Skip" | (exit) | Tidak ada data tersimpan |
| `ObservationCapture` | Tap "Lanjut" | (exit) | Persist observasi ke IDB |

### 5.3 Detail: Timer Visible Only Behavior

Untuk aktivitas dengan `advance.mode = 'timer_visible_only'` dan
`durasi_target_detik` ditetapkan:

```
Detik 0   ─────► Timer mulai, warna HIJAU, label "3:00 tersisa"
Detik 1-90 ──► Hijau, countdown normal
Detik 91 ───► Warna jadi KUNING, label "1:30 tersisa"
Detik 150 ──► Warna KUNING lebih intens, label "30 detik lagi"
Detik 180 ──► Timer habis, warna MERAH lembut
              Label: "Waktu habis — lanjut saat siap"
Detik 181+ ─► Timer tetap MERAH, mungkin menampilkan elapsed positive:
              "Tambahan +0:30" (untuk awareness, bukan tekanan)
              Layar TIDAK berganti. Tunggu guru tap.
```

**Penting**: Saat timer habis, **tidak ada notifikasi**, **tidak ada bunyi**,
**tidak ada vibration**. Hanya perubahan warna timer di tempatnya. Guru lihat
saat dia lirik HP — kalau dia tidak lirik, dia tidak terganggu.

---

## 6. Persistensi: Apa yang Disimpan Kapan

### 6.1 Yang ada di Memory (RAM) selama runtime aktif

```javascript
// Hanya hidup selama `SesiAktif`, hilang saat tab close atau navigate away
sessionMemoryState = {
  tp_id              : string,
  mode_diferensiasi  : 'mudah' | 'normal' | 'tantangan',
  kondisi_kelas_awal : string,                  // dari Preview
  fase_aktif         : string,                  // 'Pembuka' | 'Inti' | ...
  aktivitas_aktif    : string,                  // ID aktivitas
  aktivitas_state    : 'ready' | 'running' | 'fallback' | 'obs_capture',
  timer_started_at   : timestamp?,              // Untuk hitung elapsed
  mode_override      : Map<aktivitasId, mode>,  // Override per aktivitas
  observations_pending : Observation[],         // Belum di-persist
  fallback_log       : { aktivitasId, kondisi, timestamp }[],
}
```

### 6.2 Yang di-persist ke IndexedDB

Persistensi dilakukan **di transisi tertentu**, bukan setiap detik. Ini hemat
storage dan minim freeze (Dok 12 §14).

| Saat | Yang disimpan | Store IDB |
|---|---|---|
| Tap "Mulai mengajar" di Preview | Snapshot awal sesi | `kv:sesi_aktif` |
| Transisi antar aktivitas | Update pointer aktivitas | `kv:sesi_aktif` |
| Tap "Lanjut" di ObservationCapture | Observasi 3-5 siswa | `teaching_log` + update `siswa_per_kelas` |
| Tap fallback chip | Log kondisi yang dilaporkan | `teaching_log` |
| Tap "Simpan & Selesai" di Closure | Refleksi guru, mood, ringkasan | `teaching_log`, hapus `kv:sesi_aktif` |
| Browser tab close (beforeunload event) | Snapshot final state | `kv:sesi_aktif` (best-effort) |

### 6.3 Struktur `kv:sesi_aktif` (untuk resume logic)

```javascript
{
  tp_id              : 'tp-01',
  started_at         : timestamp,
  last_update_at     : timestamp,
  mode_diferensiasi  : 'mudah',
  fase_aktif         : 'Inti',
  aktivitas_aktif    : 'tp01-inti-pair-sapa-teman',
  aktivitas_state    : 'running',
  aktivitas_started_at: timestamp,    // Untuk restore timer
  completed_aktivitas: ['tp01-pembuka-...', ...],  // ID yang sudah selesai
  observations_so_far: [...],         // Observasi yang sudah dicatat
  fallback_log       : [...],
}
```

### 6.4 Persistensi observasi siswa lintas sesi

Saat tap "Lanjut" di `ObservationCapture`, sistem update store baru
`siswa_per_kelas`:

```javascript
{
  kelas_id            : 'kelas-1A',
  nama                : 'Aditia',
  observation_count   : { participation: 3, response: 5, confidence: 2, vocab_use: 1 },
  last_observed_at    : timestamp,
  recent_ratings      : ['aktif', 'aktif', 'berani', 'diam'],  // Last 10
  total_speaking_turns: 8,             // Dari pair_work yang dia ikuti
}
```

**Struktur lengkap store baru `siswa_per_kelas`** akan dirancang di Fase 4.
Untuk Fase 2, cukup tahu bahwa store ini eksis dan menyimpan data lintas sesi.

---

## 7. Logika Rotasi Observasi

Saat aktivitas dengan `observation.aktif = true` dimulai, sistem menyarankan
nama siswa untuk diobservasi. Logika pemilihan:

### 7.1 Algoritma Rotasi (priority: belum_observed)

```
1. Load semua siswa kelas ini dari `siswa_per_kelas`
2. Filter siswa yang sudah dicatat presensi hari ini (hadir)
3. Sort by:
   - Primary: indikator yang dibutuhkan (mis: 'confidence'),
              ascending by observation_count[indikator]
   - Secondary: last_observed_at, ascending (oldest first)
4. Ambil N siswa pertama (N = observation.n_siswa)
5. Tampilkan sebagai saran, BUKAN sebagai pilihan terkunci
```

### 7.2 Algoritma Rotasi (priority: belum_speaking_turn)

```
1. Sama langkah 1-2
3. Sort by total_speaking_turns, ascending
4. Ambil N siswa
5. Tampilkan saran
```

### 7.3 Penting: Saran, Bukan Paksaan

Sistem **menampilkan** 3-5 nama yang disarankan. Guru bebas:
- Mengobservasi siswa yang disarankan (sistem catat sebagai "observed")
- Mengobservasi siswa lain yang dia lihat butuh perhatian hari ini
- Skip observasi sama sekali (tap "Skip catatan")

Bahasa di UI:
> "Belum lama bicara: Aditia, Bunga, Citra — pilih sesuai kondisi mereka hari ini"

Bukan:
> "Observasi siswa berikut: Aditia, Bunga, Citra"

---

## 8. Logika Resume Sesi

### 8.1 Detection: Kapan sistem tahu ada sesi belum selesai

Setiap kali guru tap "Mulai mengajar" di Preview TP:

```
1. Query IDB: kv:sesi_aktif
2. Jika ada:
   a. Cek apakah tp_id sama dengan TP yang sekarang dipilih
   b. Cek apakah last_update_at < 6 jam yang lalu
      (lebih lama → kemungkinan sesi terlupakan, lebih baik mulai baru)
3. Jika kedua syarat terpenuhi → masuk SesiResumePrompt
4. Jika tidak → langsung SesiAktif (mulai baru)
```

### 8.2 SesiResumePrompt UI

```
┌────────────────────────────────────────────┐
│  Sesi TP 01 sebelumnya tidak selesai       │
│  (terakhir aktif: 47 menit yang lalu)      │
│  Posisi: Inti — "Pair Work: Sapa Teman"    │
│                                            │
│  [Lanjut dari Pair Work: Sapa Teman]       │
│  [Mulai sesi baru dari awal]               │
└────────────────────────────────────────────┘
```

### 8.3 Restoration Behavior

Saat guru tap "Lanjut dari X":

```
1. Load full sessionMemoryState dari kv:sesi_aktif
2. Restore pointer: fase_aktif, aktivitas_aktif
3. Restore mode_override map
4. Restore observations_pending (yang belum di-persist)
5. Set state ke AktivitasReady untuk aktivitas tersebut
   (BUKAN AktivitasRunning — guru perlu re-orientasi)
6. Tampilkan layar AktivitasReady seperti baru masuk aktivitas
```

**Penting**: Restoration **selalu** kembali ke `AktivitasReady`, bukan ke
`AktivitasRunning` atau `FallbackUI`. Alasan: kalau HP mati di tengah pair work,
guru pasti sudah berhenti pair work-nya di kelas. Kembalinya ke `AktivitasReady`
memberi dia kesempatan ulang dari awal aktivitas itu dengan kelas yang sudah
re-organized.

---

## 9. Logika Override Mode (Keputusan 4)

### 9.1 Trigger: Lewat Fallback, Bukan Tombol Independen

Tidak ada tombol "Sesuaikan kesulitan" yang permanent visible. Override mode
diakses **melalui** fallback UI.

### 9.2 Flow

```
Guru tap fallback chip "Pair tidak jalan"
   │
   ▼
STATE: FallbackUI
   │
   Tampilkan:
   ┌─────────────────────────────────────────┐
   │  Pair tidak jalan?                       │
   │                                          │
   │  Coba ini:                               │
   │  [text dari fallback.pair_tidak_jalan]   │
   │                                          │
   │  [Sudah coba, kembali]                   │
   │  [Mode lebih mudah untuk aktivitas ini]  │
   └─────────────────────────────────────────┘
   │
   ├─ Tap "Sudah coba" → kembali ke AktivitasRunning, mode tetap
   └─ Tap "Mode lebih mudah" → mode override, kembali ke AktivitasRunning
```

### 9.3 Mekanisme Override

```javascript
// Di sessionMemoryState
mode_override.set('tp01-inti-pair-sapa-teman', 'mudah');

// Saat render AktivitasRunning untuk aktivitas itu
const effectiveMode = mode_override.get(aktivitas.id)
                   || sessionMemoryState.mode_diferensiasi;

// Tampilkan bantuan & panjang_speaking dari mode.mudah, bukan mode.normal
```

### 9.4 Persistensi Override

Override **TIDAK** disimpan lintas sesi. Setiap sesi mulai fresh dengan mode
yang guru pilih di Preview. Alasan: mode tepat hari ini belum tentu tepat besok.

Override **DICATAT** di `teaching_log` untuk refleksi guru saat melihat history
("aktivitas X sering ditangani dengan mode mudah, mungkin perlu re-rancang").

### 9.5 Naik Mode (Edge Case Langka)

Kalau guru ingin mode lebih sulit untuk aktivitas tertentu: **tidak ada akses
cepat**. Dia harus menunggu aktivitas itu selesai, fallback ke mode terkait,
atau tunggu sesi berikutnya.

Alasan: untuk guru SD Fase A, "terlalu mudah" sangat jarang menjadi masalah
nyata. "Terlalu sulit" adalah pain point utama. Mengoptimalkan UI untuk yang
jarang akan menambah clutter untuk yang umum.

---

## 10. Logika Lapor Kondisi Kelas

### 10.1 Tombol Akses

Di setiap state `AktivitasRunning`, ada tombol kecil di pojok bawah kiri
(tidak dominan visual):

> "⚠ Kondisi kelas?"

Tap → masuk state `KondisiPrompt` (overlay, bukan transisi penuh).

### 10.2 Daftar Kondisi (dari SCHEMA §4.4)

```
┌──────────────────────────────────────────┐
│  Kondisi kelas sekarang?                 │
│                                          │
│  ○ Ribut, susah fokus                    │
│  ○ Energi mulai turun                    │
│  ○ Banyak yang takut bicara              │
│  ○ Pair tidak jalan (khusus pair_work)   │
│  ○ Waktu mepet (sisa fase singkat)       │
│  ○ Media tidak tersedia                  │
│  ○ Tidak, semua lancar                   │
│                                          │
│  [Batal]                                 │
└──────────────────────────────────────────┘
```

### 10.3 Behavior per Kondisi

| Kondisi dipilih | Aksi sistem |
|---|---|
| `Ribut, susah fokus` | Tampilkan instruksi dari `fallback.kelas_ribut`, opsi turun mode |
| `Energi mulai turun` | Tampilkan instruksi dari `fallback.energi_turun` |
| `Banyak yang takut bicara` | Tampilkan instruksi dari `fallback.siswa_pasif`, opsi turun mode |
| `Pair tidak jalan` | Tampilkan instruksi dari `fallback.pair_tidak_jalan`, opsi turun mode |
| `Waktu mepet` | Tampilkan instruksi dari `fallback.waktu_mepet`, saran skip aktivitas berikutnya |
| `Media tidak tersedia` | Tampilkan instruksi dari `fallback.media_tidak_tersedia` |
| `Tidak, semua lancar` | Tutup overlay, kembali tanpa aksi |

### 10.4 Penting: Sistem TIDAK Adaptasi Otomatis

Saat guru lapor "waktu mepet," sistem **menyarankan** skip, tapi **tidak**
otomatis skip. Guru tetap harus tap "Skip aktivitas berikutnya" eksplisit.

Bahasa UI:
> "Waktu mepet?"
> "Sisa fase Inti: 8 menit. Anda punya 2 aktivitas tersisa (10 menit total).
> Pertimbangan: lewati Permainan Kartu, langsung ke Pair Goodbye."
>
> [Lewati Permainan Kartu]   [Lanjut sesuai rencana]

Bukan: sistem skip diam-diam.

---

## 11. Edge Cases & Failure Modes

### 11.1 IndexedDB Gagal Write

```
Skenario: guru tap "Lanjut" setelah ObservationCapture, sistem coba persist,
          IDB error (storage penuh, atau corruption)

Behavior:
  - Tampilkan toast lembut: "Catatan disimpan sementara"
  - Data tetap di sessionMemoryState (RAM)
  - Coba persist lagi setiap transisi aktivitas
  - Saat tap "Simpan & Selesai" di Closure: kalau masih gagal, tampilkan dialog:
    "Tidak bisa menyimpan ke storage. Mau export sebagai file teks darurat?"
```

### 11.2 Browser Reload di Tengah Sesi

```
Skenario: guru tidak sengaja swipe close FLAF atau HP restart

Behavior:
  - sessionMemoryState (RAM) hilang
  - kv:sesi_aktif (IDB) tetap ada dengan snapshot terakhir
  - Saat guru buka FLAF lagi dan pilih TP yang sama:
    → SesiResumePrompt muncul (sesuai §8.1)
```

### 11.3 Guru Tap "Selesai Sesi" Sebelum Semua Fase Selesai

```
Skenario: kelas berakhir lebih cepat dari rencana, guru tap "Selesai sesi"
          di tengah Inti

Behavior:
  - Tidak ada "Apakah Anda yakin?" — hormati keputusan guru
  - Langsung ke SesiClosure
  - Ringkasan menampilkan: fase yang sudah selesai vs yang skip
  - Catat di teaching_log: status "selesai parsial"
```

### 11.4 Mode Override Tapi Lalu Guru Ganti TP

```
Skenario: guru di TP 01 set mode override untuk satu aktivitas → mudah,
          lalu tap "Selesai sesi," buka TP 02

Behavior:
  - mode_override map hilang bersama sessionMemoryState
  - TP 02 dimulai fresh dengan mode yang guru pilih di Preview TP 02
  - Tidak ada carry-over override antar TP
```

### 11.5 Sistem Saran Siswa Tapi Siswa Tidak Hadir

```
Skenario: sistem saran "Aditia" untuk observasi, tapi presensi hari ini
          menandai Aditia tidak hadir

Behavior:
  - Algoritma rotasi (§7.1) sudah filter berdasarkan presensi sebelum saran
  - Kalau kasus rare di mana data tidak sync (mis: guru ubah presensi setelah
    aktivitas dimulai), sistem tetap tampilkan saran, guru bebas abaikan
```

### 11.6 Timer Belum Habis Tapi Guru Tap "Lanjut"

```
Skenario: pair work 3 menit, baru 45 detik, guru sudah merasa cukup

Behavior:
  - Tap "Lanjut" tetap valid kapanpun
  - Tidak ada konfirmasi "Yakin lanjut padahal baru 45 detik?"
  - Sistem hormati keputusan guru
  - Catat actual_duration di teaching_log untuk refleksi
```

### 11.7 Timer Sudah Lewat Jauh (Mis: 8 Menit di Pair Work 3 Menit)

```
Skenario: guru lupa tap "Lanjut," kelas masih asik pair work

Behavior:
  - Timer terus jalan ke positive elapsed: "+5:00"
  - Warna tetap merah lembut, tidak makin agresif
  - Layar TIDAK berganti
  - Saat guru lirik HP, dia langsung tahu sudah jauh lewat dan bisa putuskan
```

### 11.8 Aktivitas Tanpa Field `advance` di Data

```
Skenario: data aktivitas tidak punya advance.mode (forgot to set)

Behavior:
  - Apply default dari SCHEMA §5.2 berdasarkan tipe:
    - pair_work, chant, game_movement → timer_visible_only
    - sisanya → manual
  - Log warning ke console untuk developer awareness
```

---

## 12. Yang TIDAK Ada di State Machine Ini

Penting untuk eksplisit menyebut hal-hal yang **bukan** scope, supaya tidak
ada keraguan saat implementasi:

### 12.1 Tidak Ada Auto-Advance

Pernyataan ulang dari §0: tidak ada satupun transisi state yang dipicu oleh
timer. Semua transisi butuh tap guru.

### 12.2 Tidak Ada Notification / Alarm / Bunyi Saat Timer Habis

Hanya perubahan warna visual. Tidak ada audio cue, vibration, atau notification.
Alasan: guru sedang berinteraksi dengan kelas, suara dari HP bisa mengganggu.

### 12.3 Tidak Ada Branching Skenario yang Kompleks

Tidak ada logika "jika kelas ribut DAN waktu mepet DAN energi turun, maka
lakukan X." Setiap kondisi ditangani secara independen. Kombinasi kondisi
dihandle oleh guru manual (dia tap kondisi yang paling dominan).

### 12.4 Tidak Ada AI / ML / Heuristik Adaptasi

Sistem tidak "belajar" dari pattern lapor kondisi guru untuk mengubah default.
Setiap sesi mulai fresh. Data history hanya untuk display di Jejak (refleksi
guru), bukan untuk algorithm.

### 12.5 Tidak Ada Multi-Sesi Concurrent

Satu guru, satu device, satu sesi aktif sekaligus. Kalau guru buka FLAF di
device kedua sambil aktif di device pertama, behavior undefined (out of scope).

### 12.6 Tidak Ada Real-Time Sync ke Server

State machine berjalan 100% lokal. Tidak ada send-to-server di tengah sesi.
Sync ke Supabase (jika ada) hanya untuk export/backup, bukan untuk runtime
logic.

---

## 13. Pertanyaan Terbuka untuk Fase 3 & 4

Hal-hal yang **disengaja tidak diputuskan di Fase 2**, karena lebih cocok
diputuskan di fase berikutnya:

### Untuk Fase 3 (UI Sketch)

1. Warna spesifik timer di setiap stage (hijau/kuning/merah) — perlu A11Y check
2. Posisi tombol "Kondisi kelas?" — pojok kiri bawah cukup, atau ada layout lain?
3. Layout `ObservationCapture` — 3 siswa vertical atau horizontal stack?
4. Layout transisi fase (`FaseEntering`, `FaseSelesai`) — full screen atau toast?
5. Visual indicator untuk mode override aktif (sehingga guru sadar mode berbeda)

### Untuk Fase 4 (Migration Plan)

1. Struktur lengkap store IDB `siswa_per_kelas` (schema, indexes)
2. Algoritma initial seeding `siswa_per_kelas` saat guru pertama kali setup kelas
3. Migration path: apa yang terjadi dengan data lama di `teaching_log`?
4. Schema versioning untuk `kv:sesi_aktif` (kompatibilitas saat upgrade)
5. Apa yang terjadi dengan TP yang belum migrate ke v4 (masih `langkah[]` only)?

### Mungkin Out of Scope Total

1. Sinkronisasi siswa_per_kelas lintas device (kalau guru pakai 2 HP)
2. Multi-guru per kelas (kalau ada team teaching)
3. Export observasi siswa untuk laporan ke kepala sekolah
4. Visualisasi distribusi observasi untuk refleksi guru

Pertanyaan-pertanyaan terbuka ini didokumentasi di sini supaya tidak hilang.
Kita akan revisit di fase yang relevan.

---

## 14. Mapping State Machine → Implementasi (Hint untuk Fase 5)

Bukan kode, tapi arah arsitektural untuk Fase 5:

### 14.1 Single Source of Truth

State machine sebaiknya diimplementasi sebagai **satu objek state global** di
runtime engine, bukan tersebar di banyak komponen UI. Contoh struktur:

```javascript
// modules/runtime-state.js (akan dibangun di Fase 5)
const runtimeState = {
  level: 'sesi' | 'fase' | 'aktivitas',
  sesi: { /* lapis 1 */ },
  fase: { /* lapis 2 */ },
  aktivitas: { /* lapis 3 */ },

  // Listeners (komponen UI subscribe)
  subscribers: [],
  subscribe(fn) { ... },
  notify() { ... },

  // Transitions (satu-satunya cara ubah state)
  transition(event) { ... },
};
```

### 14.2 Transition Function

Semua transisi melalui satu fungsi `transition(event)` yang:
1. Validasi event valid untuk state saat ini
2. Hitung state baru
3. Persist ke IDB (jika kontrak persistensi memerlukan)
4. Update RAM state
5. Notify subscribers (UI re-render)

Ini mencegah race conditions dan inkonsistensi.

### 14.3 UI Komponen sebagai Subscriber Pasif

Komponen UI **tidak** mengubah state langsung. Mereka:
1. Subscribe ke state
2. Render berdasarkan state saat ini
3. Saat user tap, panggil `runtimeState.transition({ type: 'TAP_LANJUT' })`

State change → re-render. One-way data flow.

---

## 15. Ringkasan Eksekutif

State machine FLAF runtime punya 3 lapis: Sesi, Fase, Aktivitas. Setiap transisi
butuh tap eksplisit dari guru — tidak ada auto-advance. Timer hanya menampilkan
informasi, tidak mengubah state. Sistem menyarankan (siswa untuk observasi,
instruksi fallback, opsi turun mode) tapi tidak memutuskan untuk guru. Data
disimpan ke IndexedDB di transisi spesifik (hemat write), dengan store baru
`siswa_per_kelas` untuk rotasi observasi lintas sesi. Resume sesi terputus
selalu kembali ke `AktivitasReady`, bukan mid-running, supaya guru bisa
re-orientasi kelas dulu.

Semua aturan di atas akan kita uji ulang di Fase 3 (UI Sketch) — saat ada UI
konkret, mungkin akan muncul kontradiksi yang tidak terlihat di level abstrak
ini. Itu wajar dan diharapkan.

---

## Akhir STATE-MACHINE.md
