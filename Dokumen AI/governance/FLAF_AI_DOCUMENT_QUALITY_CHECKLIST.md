# FLAF AI DOCUMENT QUALITY CHECKLIST

## A. GENERAL QUALITY

* [ ] Dokumen berbasis source code nyata, bukan asumsi
* [ ] Tidak mengandung fitur imajiner
* [ ] Tidak mengandung marketing language
* [ ] Ringkas dan padat
* [ ] Konsisten dengan struktur project terbaru
* [ ] Menggunakan istilah yang konsisten
* [ ] Tidak kontradiktif dengan dokumen lain
* [ ] Memiliki tanggal/update version
* [ ] Memiliki scope yang jelas
* [ ] Tidak terlalu verbose

---

# B. AI READABILITY

* [ ] Struktur heading jelas
* [ ] Menggunakan bullet/list dibanding paragraf panjang
* [ ] Menggunakan nama file/folder nyata
* [ ] Menyebut module secara eksplisit
* [ ] Menyebut dependency penting
* [ ] Menjelaskan relasi antar bagian sistem
* [ ] Menghindari istilah ambigu
* [ ] Menghindari “magic behavior”
* [ ] Menjelaskan constraint sistem
* [ ] Menjelaskan area berbahaya

---

# C. CONTEXT QUALITY

* [ ] Menjelaskan tujuan FLAF
* [ ] Menjelaskan filosofi local-first
* [ ] Menjelaskan konsekuensi offline architecture
* [ ] Menjelaskan prioritas sistem
* [ ] Menjelaskan data criticality
* [ ] Menjelaskan operational risk
* [ ] Menjelaskan dependency eksternal
* [ ] Menjelaskan flow activation/auth
* [ ] Menjelaskan export/import strategy
* [ ] Menjelaskan storage strategy

---

# D. ENGINEERING SAFETY

* [ ] Ada daftar area sensitif
* [ ] Ada daftar file critical
* [ ] Ada aturan migration
* [ ] Ada aturan backup
* [ ] Ada aturan release
* [ ] Ada aturan credential handling
* [ ] Ada aturan service worker update
* [ ] Ada rollback guidance
* [ ] Ada disaster recovery guidance
* [ ] Ada warning untuk destructive change

---

# E. AI OPERATIONAL SAFETY

* [ ] Ada aturan read-first workflow
* [ ] Ada aturan approval-before-refactor
* [ ] Ada batas autonomous behavior AI
* [ ] Ada contoh prompt aman
* [ ] Ada contoh prompt berbahaya
* [ ] Ada workflow observasi → plan → execute
* [ ] Ada rule “minimal scoped change”
* [ ] Ada rule “no global rewrite”
* [ ] Ada rule “no assumption without evidence”
* [ ] Ada rule “verify against source code”

---

# F. ARCHITECTURE QUALITY

* [ ] Entry point aplikasi jelas
* [ ] Runtime flow jelas
* [ ] Data flow jelas
* [ ] Module boundary jelas
* [ ] Storage boundary jelas
* [ ] UI boundary jelas
* [ ] Export pipeline jelas
* [ ] Dependency flow jelas
* [ ] Activation flow jelas
* [ ] Error handling flow jelas

---

# G. DATA MODEL QUALITY

* [ ] Entity utama dijelaskan
* [ ] Relasi entity dijelaskan
* [ ] Storage key dijelaskan
* [ ] IndexedDB schema dijelaskan
* [ ] Migration strategy dijelaskan
* [ ] Backup format dijelaskan
* [ ] Restore flow dijelaskan
* [ ] Data integrity risk dijelaskan
* [ ] Versioning dijelaskan
* [ ] Conflict risk dijelaskan

---

# H. MAINTAINABILITY

* [ ] Naming convention dijelaskan
* [ ] Folder responsibility dijelaskan
* [ ] Dependency rule dijelaskan
* [ ] Anti-pattern dijelaskan
* [ ] Technical debt area dijelaskan
* [ ] Known limitation dijelaskan
* [ ] Future constraint dijelaskan
* [ ] Manual workflow dijelaskan
* [ ] Release workflow dijelaskan
* [ ] Testing expectation dijelaskan

---

# I. FINAL VALIDATION

* [ ] AI lain dapat memahami project tanpa chat history
* [ ] Developer baru dapat onboarding dari dokumen
* [ ] AI dapat membuat perubahan kecil dengan aman
* [ ] AI dapat menghindari area kritis
* [ ] AI dapat memahami prioritas sistem
* [ ] AI dapat memahami operational risk
* [ ] AI dapat memahami arsitektur utama
* [ ] AI dapat memahami batas perubahan aman
* [ ] AI dapat memahami filosofi project
* [ ] Dokumen cukup stabil untuk long-term maintenance
