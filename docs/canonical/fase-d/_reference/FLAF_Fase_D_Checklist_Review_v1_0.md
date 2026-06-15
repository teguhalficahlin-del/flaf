# FLAF Fase D v1.0 — Checklist Review TP

---

## Metadata

| Field            | Nilai                                                          |
|------------------|------------------------------------------------------------------|
| Versi            | v1.0                                                            |
| Status           | FINAL — Siap dipakai mulai TP-02                                |
| Tanggal Dibuat   | 14 Juni 2026                                                    |
| Dokumen Induk    | FLAF Fase D Schema JS v1.1                                      |
| Dokumen Terkait  | FLAF Fase D Fondasi Pedagogis v1.0, Pattern Registry v1.0, TP Mapping v1.0, tp-01.js (referensi tervalidasi) |
| Disusun oleh     | Romo (pemilik proyek), Claude Chat, ChatGPT                     |

---

## Catatan

Checklist ini KONSOLIDASI dari PILOT TP-01 (PAT-7-01), yang
sudah melalui 2 round review independen ChatGPT + 1 revisi
substantif (temuan Anchor leak di SHARE → diperbaiki dan
dikonfirmasi memperkuat konsistensi). TP-01 menjadi REFERENSI
("gold standard") untuk gaya dan kedalaman konten TP-02 s.d.
TP-66.

Untuk TP-02 dan seterusnya: jalankan checklist A–E dalam SATU
pass per TP (atau per batch beberapa TP). Eskalasi ke diskusi
mendalam (seperti PILOT round 1–2) HANYA jika checklist
menemukan isu yang belum pernah muncul sebelumnya / belum
tercakup checklist ini.

---

## Checklist A — Kepatuhan Struktural (Schema JS v1.1)

| # | Item |
|---|------|
| A1 | Seluruh 18 field `metadata` terisi sesuai tipe; `session_version: "1.0"` |
| A2 | `resources` lengkap: `active_vocabulary` (string[]), `model_sentences` (`{id,text}`), `visual_cues` (`{id,description,asset_id}`), `gesture_cues` (`{id,description}`) |
| A3 | `runtime`: 7 step types hadir (boleh lebih jika perlu untuk GR-4); setiap step punya `id`/`type`/`duration` |
| A4 | Semua `*_refs` (`sentence_refs`/`visual_refs`/`gesture_refs`) merujuk `id` yang benar-benar ada di `resources` — tidak ada dangling reference |
| A5 | `differentiation` HANYA pada CHANGE/INTERACT/SHARE, dengan konten `easy`/`standard`/`challenge` terisi nyata (bukan `{}`) |
| A6 | `support.pattern_support` HANYA opsional pada MODEL/REPEAT/CHANGE/INTERACT/SHARE — TIDAK pada CHECK/BOOST |
| A7 | CHECK tidak memiliki field `score`/`grade`/`value`/`points`/`percentage` |
| A8 | BOOST tidak memiliki field label identitas (`student_level`/`weak`/`remedial_group`/dst.) |

---

## Checklist B — constraints vs Isi Aktual

Untuk masing-masing dari 6 flag, verifikasi isi `runtime`/
`resources` benar-benar mendukung deklarasi (bukan sekadar
`true` tanpa dasar):

| # | Flag | Memetakan |
|---|------|-----------|
| B1 | single_productive_pattern | NS-2 |
| B2 | requires_student_output | NS-7 |
| B3 | check_without_score | NS-5 |
| B4 | boost_without_label | NS-6 |
| B5 | tts_optional_backup | NS-11 |
| B6 | self_contained | NS-13 |

---

## Checklist C — 8 NS Kualitatif (di luar constraints)

| # | Item |
|---|------|
| C1 | NS-1 — tidak ada ketergantungan Bahasa Indonesia pada alur yang DIALAMI SISWA (field `notes` boleh campuran, karena itu author metadata) |
| C2 | NS-3/NS-4 — MODEL = demonstrasi penggunaan bahasa, BUKAN penjelasan grammar |
| C3 | NS-8 — INTERACT melibatkan >1 siswa aktif (pair/small_group/whole_group/walk_around — bukan urutan guru↔1 siswa) |
| C4 | NS-9 — SHARE memberi kesempatan SEBAGIAN BESAR siswa berproduksi paralel, bukan hanya beberapa presentasi |
| C5 | NS-10 — tidak ada output yang diwajibkan identik untuk semua siswa, dan tidak ada step yang mengharuskan menunggu seluruh kelas selesai |
| C6 | NS-12 — tidak ada pattern baru diperkenalkan ulang tanpa alasan eksplisit |

---

## Checklist D — Anchor Listen → Say → Change → Use (TEMUAN PILOT — PENTING)

| # | Item |
|---|------|
| D1 | Setiap bentuk bahasa yang WAJIB diproduksi siswa di INTERACT/SHARE — di SEMUA level diferensiasi (easy/standard/challenge), bukan hanya satu level — HARUS sudah didemonstrasikan di MODEL/REPEAT/CHANGE terlebih dahulu. Tidak ada bentuk yang diminta "Use" tanpa pernah "Listen"/"Say". |
| D2 | Jika ada ekstensi bentuk bahasa DI LUAR `target_pattern` (mis. person-shift He/She, perubahan tense, dll.), ekstensi tersebut HANYA boleh muncul di BOOST, dengan framing: (a) opsional, (b) individual/reaktif terhadap siswa yang siap, (c) guru memodelkan SATU contoh konkret sebelum siswa diundang mencoba. Lihat Schema JS Bagian 9.2. |

---

## Checklist E — Kesesuaian Pattern Registry & TP Mapping

| # | Item |
|---|------|
| E1 | `model_sentences` BARU — bukan salinan `example_output` Pattern Registry — tetap mengikuti struktur `target_pattern`, dan sesuai `topic`/`context` TP ini |
| E2 | Seluruh item `vocabulary_domain` terwakili di `model_sentences`/`active_vocabulary` |
| E3 | `active_vocabulary` = unit leksikal reusable saja (lihat Schema JS Bagian 9.1) — tidak ada item orphan (semua item benar-benar dipakai di TP ini), tidak ada nilai instansiasi spesifik (nama/angka contoh) |
| E4 | `forbidden_overlap` (Pattern Registry) tidak dilanggar — konten TP tidak masuk wilayah komunikatif pattern lain |
| E5 | Total durasi (`sum(runtime[].duration)`) berada dalam rentang 45–90 menit (GR-4), proporsional dengan `complexity_level` |
| E6 | Jika `prerequisite_patterns` non-kosong: VR-1 (`union(runtime[*].support.pattern_support) ⊇ metadata.prerequisite_patterns`) dan VR-2 (`pattern_id` sendiri TIDAK muncul di `pattern_support` manapun) terpenuhi |

---

## Format Laporan Review

Untuk satu TP atau satu batch (beberapa TP):

```
TP-XX (PAT-X-XX)
A: [LOLOS / item bermasalah + catatan singkat]
B: [LOLOS / flag bermasalah + catatan singkat]
C: [LOLOS / item bermasalah + catatan singkat]
D: [LOLOS / catatan singkat — INI YANG PALING KRITIS]
E: [LOLOS / item bermasalah + catatan singkat]
```

Verdict keseluruhan: LOLOS / PERLU REVISI (sebutkan field
spesifik + usulan perbaikan jika PERLU REVISI).
