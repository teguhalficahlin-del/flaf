# FLAF — Audit Checkpoint Kelas 1 (TP 01-06)

**Status**: Sesi audit pasca-M2 · Mei 2026 · Schema v4.3
**Scope**: Pola struktur & schema compliance. **Bukan** substansi pedagogis.

---

## Tabel Audit (6 TP berdampingan)

| Aspek | TP 01 Greetings | TP 02 Introducing | TP 03 Instructions | TP 04 Numbers | TP 05 Colours | TP 06 Shapes |
|---|---|---|---|---|---|---|
| Durasi total (menit) | 56 | 56 | 56 | **58** ⚠️ | 56 | 56 |
| Jumlah aktivitas | 12 | 10 | 9 | 10 | 9 | 9 |
| `pair_work` count | 2 | 1 | 1 | 1 | 1 | 1 |
| `closure_reinforcement`? | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `reflection` di Penutup? | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ |
| Schema version | v4.3 | v4.3 | v4.3 | v4.3 | v4.3 | v4.3 |
| `flags` aktif | 0 | 0 | 1 | 1 | 1 | **0** ⚠️ |
| `tag_set: akurasi` | 0 | 0 | 3 | 2 | 2 | 2 |
| Observation aktif=true | 5 | 4 | 5 | 4 | 4 | 4 |
| Backward compat `langkah[]` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `media[]` field ada | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

---

## Inkonsistensi Teridentifikasi

| # | Inkonsistensi | TP terdampak | Severity |
|---|---|---|---|
| I1 | Durasi 58 menit (Inti 35) vs 56 menit (Inti 30) di TP lain | TP 04 | **Major** |
| I2 | Permainan kompetitif "Tebak Bentuk" tanpa `flags: ['kompetitif_safety']` — TP 03/04/05 punya | TP 06 | **Medium** |
| I3 | Pola Penutup tidak baku: 2 TP punya `reflection`, 4 TP tidak | TP 03/04/05/06 (vs 01/02) | **Medium** |
| I4 | TP 01 punya 12 aktivitas (vs 9-10 di TP lain) — risiko terlalu padat | TP 01 | **Low** |
| I5 | Jumlah `observation.aktif=true` variatif: 4-5 — tidak ada rule baku | semua TP | **Low** |
| I6 | Tipe aktivitas pertama Penutup variatif: review_quick / tpr_action / chant_movement | semua TP | **Low** |

---

## Action Items Sebelum M3

**A1 (I1) — Durasi TP 04**
- A1a: Turunkan Inti TP 04 ke 30 menit, sesuaikan durasi aktivitas internal
- A1b: Naikkan TP 01/02/03/05/06 ke 58 menit (Inti 35)
- A1c: Biarkan — durasi keputusan pedagogis per TP

**A2 (I2) — Flag `kompetitif_safety` di TP 06**
- A2a: Tambah flag ke "Tebak Bentuk" TP 06 (konsisten dengan TP 03/04/05)
- A2b: Biarkan — bukan kompetitif individual (siswa angkat tangan, guru pilih)
- A2c: Hapus flag dari TP 03/04/05 supaya konsisten "longgar" (tidak rekomendasi)

**A3 (I3) — Pola Penutup**
- A3a: Wajibkan `reflection` di setiap Penutup — tambah ke SCHEMA §8
- A3b: Wajibkan `review_quick` ATAU `reflection` (salah satu) — fleksibel
- A3c: Biarkan opsional — pola Penutup fleksibel per TP

**A4 (I4) — Jumlah aktivitas TP 01**
- A4a: Konsolidasi ke 10 aktivitas, sesuaikan durasi
- A4b: Biarkan — TP 01 memang lebih kaya (greetings + farewell terpisah)

**A5 (I5) — Observation count**
- A5a: Tetapkan rule 4-5 sebagai minimum-maksimum di SCHEMA §8
- A5b: Biarkan — count bergantung karakter TP

**A6 (I6) — Tipe aktivitas pertama Penutup**
- Rekomendasi: biarkan — tergantung karakter TP

---

## Penilaian Saya

**Sehat**: closure_reinforcement enforced, backward compat OK, version konsisten,
media[] lengkap, pair work di semua TP, tag_set akurasi konsisten di TP vocab.

**Cleanup needed**: 1 Major (A1), 2 Medium (A2, A3), 3 Low bisa skip.

**Verdict**: Schema v4.3 stabil. Pola Kelas 1 cukup konsisten untuk lanjut M3
setelah minimal A1+A2+A3.

---

## Keputusan untuk Anda

```
A1 → [a / b / c / skip]
A2 → [a / b / c / skip]
A3 → [a / b / c / skip]
A4 → [a / b / skip]
A5 → [a / b / skip]
A6 → [skip / catatan]

Setelah cleanup → [Lanjut M3 / Review TP individual dulu / Berhenti]
```

Atau `silahkan anda pilih yang terbaik untuk guru pengguna`.
