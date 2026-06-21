# Uji Instansiasi Skema #3 — Fase A (Stress Test Kasus Ekstrem)

**Kenapa uji ini berbeda dari 2 sebelumnya**: Fase C dan D punya data kaya. Fase A punya **data paling minim** dari semua fase yang kita riset, dan punya satu fitur struktural yang belum pernah benar-benar diuji: `elemen: Elemen | null` untuk kasus CP yang sengaja tidak punya satu elemen (Menulis-Mempresentasikan "belum jadi fokus").

---

## 1. CapaianPembelajaran — uji `elemen: null`

```json
[
  {
    "id": "CP-A-MB",
    "fase": "A",
    "elemen": "menyimak-berbicara",
    "teks_id": "Pada akhir Fase A, peserta didik menggunakan bahasa Inggris sederhana untuk berinteraksi dalam situasi sosial dan kelas seperti berkenalan, memberikan informasi diri, mengucapkan salam dan selamat tinggal. Mereka merespon instruksi sederhana (dengan bantuan visual) melalui gerakan tubuh atau menjawab pertanyaan pendek sederhana dengan kata, frase atau kalimat sederhana.",
    "teks_en": "By the end of Phase A, students use basic English to interact in social and classroom situations such as introducing themselves, sharing personal information, greeting and bidding farewell.",
    "sumber_regulasi": "guru.kemendikdasmen.go.id — CP & ATP Bahasa Inggris Fase A",
    "schemaVersion": 1
  },
  {
    "id": "CP-A-MM",
    "fase": "A",
    "elemen": "membaca-memirsa",
    "teks_id": "Pada akhir Fase A, peserta didik merespon secara lisan terhadap teks pendek sederhana dan familiar, berbentuk teks tulis yang dibacakan oleh guru. Peserta didik menunjukkan pemahaman teks yang dibacakan atau gambar/ilustrasi yang diperlihatkan padanya, menggunakan komunikasi non-verbal.",
    "teks_en": "By the end of Phase A, students respond orally to short, simple, familiar texts in the form of print texts read by teachers.",
    "sumber_regulasi": "guru.kemendikdasmen.go.id — CP & ATP Bahasa Inggris Fase A",
    "schemaVersion": 1
  },
  {
    "id": "CP-A-MP",
    "fase": "A",
    "elemen": null,
    "teks_id": "Belum menjadi fokus pembelajaran pada fase ini, karena peserta didik belum diminta untuk mengungkapkan gagasan secara tertulis (composing/producing).",
    "teks_en": "",
    "sumber_regulasi": "guru.kemendikdasmen.go.id — CP & ATP Bahasa Inggris Fase A",
    "schemaVersion": 1
  }
]
```

### ⚠️ Friksi ditemukan: `elemen: null` tapi `id` masih menyiratkan elemen "MP"

Saya isi `id: "CP-A-MP"` (MP = Menulis-Presentasikan) untuk entri yang elemen-nya `null` — ini **kontradiktif**. Kalau elemen-nya memang null/tidak berlaku, ID yang menyiratkan elemen tertentu jadi membingungkan. Juga `teks_en: ""` (string kosong) terasa janggal — bukan benar-benar "tidak ada data", tapi "memang tidak ada apa-apa untuk diterjemahkan".

**Ini friksi desain nyata**, bukan cuma soal pengisian data. Pertanyaannya: haruskah entri CP yang elemen-nya null ini bahkan ADA sebagai row terpisah, atau cukup dicatat sebagai atribut di level fase ("Fase A tidak punya CP Menulis-Mempresentasikan") tanpa bikin instance kosong yang harus diisi paksa?

---

## 2. TujuanPembelajaran — uji dengan data paling minim yang kita punya

```json
[
  {
    "id": "TP-A-1-01",
    "fase": "A",
    "kelas": "1",
    "elemen": ["menyimak-berbicara"],
    "teks": "Menyebutkan sapaan kepada teman-teman, orang tua, dan guru menggunakan bahasa tubuh yang baik.",
    "cp_ref": "CP-A-MB",
    "provenance": "turunan_komunitas",
    "urutan": 1
  }
]
```

### ⚠️ Friksi: hanya 1 TP yang benar-benar tervalidasi dari seluruh riset Fase A

Dibanding Fase C (19 TP) dan Fase D (13 TP resmi), Fase A cuma punya **1 TP yang teksnya benar-benar saya pegang utuh** dari hasil pencarian sesi ini — sisanya cuma judul unit ("Hi, I am Kimi. Meow.", "My name is Joshua.") tanpa teks TP lengkap. Skema-nya sendiri tidak bermasalah menerima 1 TP — tapi ini **bukan friksi skema, ini friksi kelengkapan data sumber** yang sudah kita tandai sejak awal di file referensi master.

---

## 3. ModulAjar — dipaksa diisi dari Unit 2 "Hi, I am Kimi. Meow." (data paling tipis yang kita punya)

```json
{
  "id": "MOD-A-1-U2-kimi",
  "schemaVersion": 1,

  "identitas": {
    "judul": "Hi, I am Kimi. Meow.",
    "fase": "A",
    "kelas": "1",
    "jenjang": "SD",
    "mapel": "Bahasa Inggris",
    "alokasi_waktu_jp": null,
    "jumlah_pertemuan": null,
    "semester": 1
  },

  "cp_refs": ["CP-A-MB"],
  "tp_refs": ["TP-A-1-01"],

  "dimensi_profil_lulusan": ["komunikasi", "kemandirian"],

  "praktik_pedagogis": ["lagu", "permainan", "pengenalan-lisan"],

  "lingkungan_pembelajaran": {
    "deskripsi": "(tidak tersedia di sumber — belum pernah diekstrak)"
  },

  "langkah_pembelajaran": {
    "memahami": {
      "prinsip": ["menggembirakan"],
      "pertemuan_ke": [1],
      "aktivitas": []
    },
    "mengaplikasi": { "prinsip": ["menggembirakan"], "pertemuan_ke": [1], "aktivitas": [] },
    "merefleksi": { "prinsip": ["berkesadaran"], "pertemuan_ke": [1], "aktivitas": [] }
  },

  "asesmen": {
    "proses": [],
    "akhir": {
      "tp_refs": ["TP-A-1-01"],
      "bentuk": "(belum ada data)",
      "instrumen": [],
      "validasi_cakupan": [
        { "tp_id": "TP-A-1-01", "instrumen_cocok": false, "catatan": "Belum ada instrumen sama sekali untuk diverifikasi" }
      ]
    }
  },

  "provenance": {
    "sumber_konten": "turunan_komunitas",
    "tanggal_disusun": "2026-06-21",
    "catatan_koreksi": ["Modul ini TIDAK SIAP — dibuat murni untuk uji batas skema, bukan konten terpakai"]
  }
}
```

### ⚠️ Friksi paling penting dari ketiga uji: `alokasi_waktu_jp: null` dan `jumlah_pertemuan: null`

Skema saya desain field ini sebagai `number` (wajib ada angka). Begitu dipaksa isi dari Fase A yang datanya belum lengkap, saya **terpaksa pakai `null`** — yang melanggar tipe `number` yang saya desain. Array `aktivitas: []` kosong juga teknisnya valid secara tipe, tapi secara makna **modul ini tidak benar-benar punya isi** — skema tidak mendeteksi bahwa modul "kosong tapi terstruktur" ini berbeda dari modul yang benar-benar lengkap.

---

## Kesimpulan Uji #3 — ini yang paling penting

Uji ini **bukan untuk membuktikan skema "lolos"** — tujuannya sebaliknya, sengaja mencari titik patah dengan data paling buruk yang realistis terjadi. Hasilnya:

1. **`elemen: null` punya masalah desain nyata** (ID yang kontradiktif) — perlu diperbaiki sebelum dipakai.
2. **Field numerik wajib (`alokasi_waktu_jp`, `jumlah_pertemuan`) tidak punya jalan keluar yang jujur untuk data tidak lengkap** — perlu jadi opsional, atau skema perlu field `status_kelengkapan` eksplisit supaya modul "kerangka kosong" tidak tercampur dengan modul yang benar-benar siap pakai.
3. Ini mengonfirmasi temuan riset kita di awal sesi: **Fase A memang fase dengan kesiapan data terendah** — bukan kesalahan skema, tapi sinyal bahwa Fase A perlu jadi prioritas riset/penyusunan TP tambahan sebelum modul ajar Fase A bisa benar-benar dibangun, terlepas dari skema apa pun yang dipakai.
