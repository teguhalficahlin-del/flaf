# Uji Instansiasi Skema — Data Nyata Fase C Unit 1

**Tujuan**: mengisi skema Layer 0 dengan data sungguhan dari pilot "What Delicious Bakso!" — bukan desain tipe lagi, tapi instance JSON nyata. Kalau ada field yang dipaksakan atau tidak pas, itu sinyal skema perlu direvisi sebelum diteruskan ke kode.

---

## 1. CapaianPembelajaran (3 instance, fase C)

```json
[
  {
    "id": "CP-C-MB",
    "fase": "C",
    "elemen": "menyimak-berbicara",
    "teks_id": "Pada akhir fase C, murid memiliki kemampuan: Memahami alur informasi teks secara keseluruhan dan merespon teks lisan atau teks multimodal sederhana tentang topik sehari-hari secara lisan dengan kalimat pendek dan sederhana sesuai konteks.",
    "teks_en": "Understand the entire flow of information and respond to simple oral or multimodal texts about everyday topics using short and simple sentences verbally in line with its context.",
    "sumber_regulasi": "Kepala BSKAP No. 046/H/KR/2025",
    "schemaVersion": 1
  },
  {
    "id": "CP-C-MM",
    "fase": "C",
    "elemen": "membaca-memirsa",
    "teks_id": "Memahami alur informasi secara keseluruhan, gagasan utama dan informasi rinci dari beragam teks pendek atau teks multimodal tentang topik sehari-hari dan meresponnya sesuai konteks.",
    "teks_en": "Understand the entire flow of information, main ideas and details from a variety of short texts or multimodal texts about everyday topics and respond in line with its context.",
    "sumber_regulasi": "Kepala BSKAP No. 046/H/KR/2025",
    "schemaVersion": 1
  },
  {
    "id": "CP-C-MP",
    "fase": "C",
    "elemen": "menulis-mempresentasikan",
    "teks_id": "Mengomunikasikan ide dan pengalamannya melalui berbagai jenis teks tulis sederhana atau teks multimodal tentang topik sehari-hari sesuai konteks.",
    "teks_en": "Communicate their ideas and experiences through various types of simple written texts or multimodal texts about everyday topics in line with its context.",
    "sumber_regulasi": "Kepala BSKAP No. 046/H/KR/2025",
    "schemaVersion": 1
  }
]
```

✅ **Cocok tanpa hambatan.** Field `elemen: null` (untuk kasus Fase A Menulis) tidak terpakai di sini karena Fase C punya 3 elemen penuh — fitur itu baru teruji nanti kalau kita instansiasi Fase A.

---

## 2. TujuanPembelajaran (3 instance, level unit)

```json
[
  {
    "id": "TP-C-5-U1-01",
    "fase": "C",
    "kelas": "5",
    "elemen": ["menyimak-berbicara"],
    "teks": "Mengidentifikasi rasa makanan dan minuman dalam bahasa Inggris (sweet, sour, bitter, salty).",
    "cp_ref": "CP-C-MB",
    "provenance": "disusun_FLAF",
    "urutan": 1
  },
  {
    "id": "TP-C-5-U1-02",
    "fase": "C",
    "kelas": "5",
    "elemen": ["menyimak-berbicara"],
    "teks": "Menyebutkan rasa makanan/minuman menggunakan kalimat sederhana secara lisan.",
    "cp_ref": "CP-C-MB",
    "provenance": "disusun_FLAF",
    "metode_pengurutan": "mudah-sulit",
    "urutan": 2
  },
  {
    "id": "TP-C-5-U1-03",
    "fase": "C",
    "kelas": "5",
    "elemen": ["menulis-mempresentasikan"],
    "teks": "Menyusun kalimat tertulis untuk mengekspresikan rasa makanan/minuman.",
    "cp_ref": "CP-C-MP",
    "provenance": "disusun_FLAF",
    "metode_pengurutan": "mudah-sulit",
    "urutan": 3
  }
]
```

⚠️ **Satu friksi kecil ditemukan**: TP-01 secara konsep sebenarnya juga menyentuh `membaca-memirsa` (murid membaca flashcard/gambar), tapi field `elemen` di desain awal mengasumsikan satu TP bisa multi-elemen (`elemen: Elemen[]`) — jadi sebenarnya **tidak ada masalah skema**, saya sempat ragu sebelum sadar array sudah mengakomodasi ini. Saya tetap pilih `["menyimak-berbicara"]` saja di sini karena fokus utamanya memang lisan, bukan karena keterbatasan skema.

---

## 3. ModulAjar (1 instance penuh)

```json
{
  "id": "MOD-C-5-U1-bakso",
  "schemaVersion": 1,

  "identitas": {
    "judul": "What Delicious Bakso!",
    "fase": "C",
    "kelas": "5",
    "jenjang": "SD",
    "mapel": "Bahasa Inggris",
    "alokasi_waktu_jp": 8,
    "jumlah_pertemuan": 4,
    "semester": 1
  },

  "cp_refs": ["CP-C-MB", "CP-C-MM", "CP-C-MP"],
  "tp_refs": ["TP-C-5-U1-01", "TP-C-5-U1-02", "TP-C-5-U1-03"],

  "dimensi_profil_lulusan": [
    "keimanan_ketakwaan",
    "kewargaan", "penalaran_kritis", "kreativitas",
    "kolaborasi", "kemandirian", "kesehatan", "komunikasi"
  ],

  "identifikasi_kesiapan": {
    "pengetahuan_awal": "Sudah kenal nama makanan/minuman dasar, bisa ungkapkan suka/tidak suka secara sederhana.",
    "minat": "Makanan dan minuman yang sering dikonsumsi/dilihat sehari-hari.",
    "kebutuhan_belajar": "Visual — flashcards makanan, menu, ilustrasi ekspresi rasa."
  },

  "praktik_pedagogis": ["kosakata-model-latihan-produksi", "genre-based-approach-implisit"],

  "kemitraan_pembelajaran": {
    "lingkungan_sekolah": "Amati & deskripsikan rasa makanan di kantin",
    "lingkungan_luar_sekolah": "Orang tua menanyakan rasa makanan di rumah dalam Bahasa Inggris",
    "mitra_lain": "Lagu Bahasa Inggris bertema makanan"
  },

  "lingkungan_pembelajaran": {
    "ruang_fisik": "Flashcards kosakata ditempel di dinding kelas",
    "ruang_virtual": "Proyektor untuk gambar makanan",
    "budaya_belajar": "Saling memuji saat berhasil mengucap kata/kalimat baru"
  },

  "langkah_pembelajaran": {
    "memahami": {
      "prinsip": ["berkesadaran", "bermakna"],
      "pertemuan_ke": [1, 2],
      "aktivitas": [
        {
          "id": "AKT-01",
          "deskripsi": "Tunjukkan flashcards makanan (cuka, gula, kopi, garam). Tanya: 'Sudah pernah coba ini? Rasanya bagaimana dalam bahasa Indonesia?'",
          "bahan": ["flashcards-makanan"],
          "tp_terukur": []
        },
        {
          "id": "AKT-02",
          "deskripsi": "Perkenalkan 4 kata inti: sweet, sour, bitter, salty lewat flashcard + benda nyata.",
          "bahan": ["flashcards-makanan", "benda-nyata-gula-cuka-kopi-garam"],
          "tp_terukur": ["TP-C-5-U1-01"]
        },
        {
          "id": "AKT-03",
          "deskripsi": "Model kalimat: 'It tastes sweet/sour/bitter/salty.' Guru ucapkan, murid tirukan klasikal lalu berpasangan.",
          "diferensiasi": {
            "rubrik": {
              "MB": "Hanya bisa menirukan dengan bantuan penuh",
              "BSH": "Bisa menirukan dan mengucap 2-3 kata mandiri",
              "SB": "Bisa mengucap kalimat lengkap mandiri tanpa contoh"
            }
          },
          "tp_terukur": ["TP-C-5-U1-02"]
        }
      ]
    },
    "mengaplikasi": {
      "prinsip": ["bermakna", "menggembirakan"],
      "pertemuan_ke": [3],
      "aktivitas": [
        {
          "id": "AKT-04",
          "deskripsi": "Kunjungan kantin berkelompok kecil, amati 3 makanan/minuman, tulis tebakan rasa pakai kosakata baru.",
          "tp_terukur": ["TP-C-5-U1-02", "TP-C-5-U1-03"]
        },
        {
          "id": "AKT-05",
          "deskripsi": "Permainan 'Guess the Taste' — murid mendeskripsikan rasa, teman menebak nama makanan.",
          "tp_terukur": ["TP-C-5-U1-02"]
        }
      ]
    },
    "merefleksi": {
      "prinsip": ["berkesadaran"],
      "pertemuan_ke": [4],
      "aktivitas": [
        {
          "id": "AKT-06",
          "deskripsi": "Presentasi singkat: tiap murid sebutkan 1 makanan favorit + rasanya di depan kelas.",
          "tp_terukur": ["TP-C-5-U1-02"]
        },
        {
          "id": "AKT-07",
          "deskripsi": "Penilaian diri: centang emoji untuk tiap kata sweet/sour/bitter/salty.",
          "tp_terukur": []
        }
      ]
    }
  },

  "asesmen": {
    "proses": [
      {
        "tp_ref": "TP-C-5-U1-01",
        "teknik": "observasi saat AKT-02 dan AKT-03",
        "rubrik": {
          "MB": "Mengenali 0-1 kata rasa",
          "BSH": "Mengenali 2-3 kata rasa",
          "SB": "Mengenali 4/4 kata rasa"
        }
      }
    ],
    "akhir": {
      "tp_refs": ["TP-C-5-U1-01", "TP-C-5-U1-02", "TP-C-5-U1-03"],
      "bentuk": "3 bagian sesuai 3 TP",
      "instrumen": [
        {
          "deskripsi": "Bagian A: 10 soal pilihan ganda identifikasi rasa dari gambar"
        },
        {
          "deskripsi": "Bagian B: Asesmen performa lisan — guru tunjuk gambar, murid jawab 'It tastes ___.'",
          "rubrik": {
            "MB": "Belum bisa menjawab tanpa bantuan penuh",
            "BSH": "Menjawab dengan bantuan sebagian",
            "SB": "Menjawab lancar mandiri"
          }
        },
        {
          "deskripsi": "Bagian C: murid menulis sendiri 1 kalimat deskriptif untuk 2 dari 4 makanan yang ditunjukkan"
        }
      ],
      "validasi_cakupan": [
        { "tp_id": "TP-C-5-U1-01", "instrumen_cocok": true },
        { "tp_id": "TP-C-5-U1-02", "instrumen_cocok": true, "catatan": "Awalnya tidak ada instrumen lisan sama sekali — ditambahkan Bagian B saat verifikasi." },
        { "tp_id": "TP-C-5-U1-03", "instrumen_cocok": false, "catatan": "Instrumen kandidat asli (5 kalimat terjemahan) tidak cocok — terjemahan ≠ menyusun kalimat sendiri. Diganti Bagian C." }
      ]
    }
  },

  "provenance": {
    "sumber_konten": "turunan_komunitas",
    "disusun_oleh": "Modul Guruku + dokumen KBC (identitas/konteks); FLAF (Langkah Pembelajaran, Asesmen)",
    "tanggal_disusun": "2026-06-21",
    "catatan_koreksi": [
      "Label fase dikoreksi dari 'B' (salah ketik sumber) menjadi 'C'",
      "Kutipan CP diganti teks resmi terverifikasi, sumber asli tidak cocok",
      "Dimensi Profil Lulusan ditambah 1 (Keimanan dan Ketakwaan) — sumber asli hanya 7 dari 8"
    ]
  }
}
```

---

## Hasil Uji: 3 Friksi Ditemukan, Semua Bisa Diselesaikan Tanpa Mengubah Struktur Skema

| Friksi | Sifat | Resolusi |
|---|---|---|
| TP yang menyentuh 2 elemen sekaligus (lisan+visual) | Kekhawatiran awal, ternyata sudah tertangani | `elemen: Elemen[]` sudah array sejak desain — tidak perlu perubahan |
| Aktivitas pembuka (AKT-01) tidak mengukur TP manapun | Wajar | `tp_terukur` memang dirancang opsional (array kosong sah) — aktivitas pemanasan tidak harus selalu terikat TP |
| Field `diferensiasi` cuma relevan di sebagian aktivitas (AKT-03), tidak semua | Wajar | `diferensiasi?:` sudah opsional di level Aktivitas — tidak perlu dipaksa ada di semua baris |

**Kesimpulan**: skema Layer 0 lolos uji instansiasi dengan data nyata. Tidak ada field yang harus dipaksakan kosong atau struktur yang harus dilanggar. Siap diteruskan ke implementasi kode.
