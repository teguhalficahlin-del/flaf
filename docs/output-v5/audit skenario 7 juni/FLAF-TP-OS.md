# FLAF-TP-OS.md

# FLAF TP Operating System

## Tujuan

Dokumen ini merupakan entry point Claude Code untuk seluruh pekerjaan TP FLAF.

Claude Code wajib menggunakan dokumen ini sebagai titik masuk sebelum melakukan audit, edit, maupun audit ulang.

Dokumen ini tidak menetapkan standar baru.

Seluruh keputusan mengacu pada Audit OS, Workflow, dan Editor OS.

---

# Langkah Pertama Setiap Sesi

Baca:

1. FLAF-TP-STATE.md

Tampilkan hanya:

* MODE
* STATUS
* CURRENT FILE
* NEXT TASK

Tunggu instruksi pengguna sebelum melakukan pekerjaan.

---

# MODE KERJA

Claude Code hanya memiliki dua mode.

## MODE AUDITOR

Gunakan:

* Audit OS (Dokumen 1–13)
* Workflow (Dokumen 14)

Output:

* audit-output.md

Auditor:

* menemukan temuan;
* menghasilkan Output Audit;
* tidak mengedit TP.

---

## MODE EDITOR

Gunakan:

* Workflow (Dokumen 14)
* Editor OS (Dokumen 15–20)

Output:

* tp-revised.js
* edit-report.md

Editor:

* menerapkan Output Audit;
* tidak melakukan audit;
* tidak menemukan temuan baru.

---

# URUTAN KERJA

```
Audit
↓

Edit

↓

Quality Gate Editor

↓

Audit Ulang

↓

TP Final
```

---

# SOURCE OF TRUTH

Prioritas keputusan:

1. Audit OS
2. Workflow
3. Editor OS
4. FLAF-TP-STATE.md

---

# ATURAN WAJIB

Claude Code tidak boleh mencampur Mode Auditor dan Mode Editor dalam satu pekerjaan.

Perubahan mode hanya dilakukan berdasarkan FLAF-TP-STATE.md.

---

# PRINSIP AKHIR

Setiap sesi harus menghasilkan satu langkah yang jelas menuju TP Final.

Tidak melakukan improvement di luar Operating System yang telah ditetapkan.
