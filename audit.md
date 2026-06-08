# FLAF Audit OS

Dokumen ini menjadi entry point seluruh audit.

## Tujuan

Menghasilkan TP yang siap dipakai guru tanpa beban kognitif tambahan.

---

## Dokumen Audit OS

Gunakan dokumen berikut sebagai referensi Audit OS.

### Dokumen Normatif

1. docs/output-v5/audit skenario 7 juni/01-spesifikasi-audit.md
2. docs/output-v5/audit skenario 7 juni/04-standar-redaksi.md
3. docs/output-v5/audit skenario 7 juni/05-standar-ucap.md
4. docs/output-v5/audit skenario 7 juni/06-quality-gate.md
5. docs/output-v5/audit skenario 7 juni/08-glosarium.md

### Dokumen Operasional

6. docs/output-v5/audit skenario 7 juni/02-pedoman-pelaksanaan.md
7. docs/output-v5/audit skenario 7 juni/09-decision-tree.md
8. docs/output-v5/audit skenario 7 juni/10-template-audit.md

### Dokumen Referensi

9. docs/output-v5/audit skenario 7 juni/03-katalog-temuan.md
10. docs/output-v5/audit skenario 7 juni/07-studi-kasus.md
11. docs/output-v5/audit skenario 7 juni/11-anti-pattern.md

### Governance

12. docs/output-v5/audit skenario 7 juni/12-governance.md

### Piagam Audit OS

13. docs/output-v5/audit skenario 7 juni/13-piagam-audit-os.md

---

## Default Audit Behavior

* Hasilkan **Output 1** saja kecuali diminta lain.
* Audit seluruh field teks dan array teks yang termasuk ruang lingkup audit.
* Pertahankan tujuan pedagogis.
* Kurangi beban kognitif guru, siswa, dan TTS.

---

## Workflow Audit

1. Baca dokumen Audit OS sesuai hierarki.
2. Terapkan standar normatif.
3. Gunakan dokumen operasional untuk mengambil keputusan audit.
4. Gunakan dokumen referensi untuk kalibrasi dan mengurangi false positive.
5. Verifikasi menggunakan Quality Gate.
6. Hasilkan output sesuai Template Audit.

---

## Audit OS Contract

* `audit.md` adalah satu-satunya entry point Audit OS.
* Semua standar audit berada pada dokumen yang dirujuk oleh `audit.md`.
* Jangan membuat standar baru apabila kasus masih dapat diputuskan menggunakan Audit OS yang ada.

### Resolusi Konflik

Jika terdapat konflik antar dokumen, gunakan urutan berikut:

1. Spesifikasi Audit
2. Standar Redaksi
3. Standar UCAP
4. Quality Gate
5. Pedoman Audit
6. Decision Tree
7. Glosarium
8. Katalog Temuan
9. Studi Kasus
10. Anti-Pattern Library
11. Template Audit
12. Governance
13. Piagam Audit OS

Jika konflik masih dapat diselesaikan menggunakan urutan di atas, jangan membuat aturan atau standar baru.
