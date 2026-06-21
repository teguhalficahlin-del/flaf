# Uji Instansiasi Skema #2 — Data Resmi Fase D "Speak Your Mind"

**Kenapa instance kedua ini lebih ketat sebagai uji**: pilot Fase C dibangun OLEH saya, jadi wajar kalau cocok dengan skema yang juga saya rancang. Fase D ini konten **resmi BSKAP, ditulis independen, jauh sebelum skema ini dirancang** — kalau ada friksi, itu sinyal asli, bukan bias.

---

## 1. ModulAjar — diisi dari Identitas resmi yang baru saya re-cek ke sumber

```json
{
  "id": "MOD-D-8-speakyourmind",
  "schemaVersion": 1,

  "identitas": {
    "judul": "Speak Your Mind",
    "fase": "D",
    "kelas": "8",
    "jenjang": "SMP",
    "mapel": "Bahasa Inggris",
    "alokasi_waktu_jp": 10,
    "jumlah_pertemuan": 5,
    "semester": 1
  },

  "cp_refs": ["CP-D-MB", "CP-D-MM", "CP-D-MP"],
  "tp_refs": ["TP-D-8-04"],

  "dimensi_profil_lulusan": ["penalaran_kritis", "kolaborasi", "komunikasi"],

  "identifikasi_kesiapan": {
    "pengetahuan_awal": "(tidak dideskripsikan terpisah di sumber — lihat catatan friksi #3)",
    "minat": "Fashion items dan tren yang dekat keseharian murid",
    "kebutuhan_belajar": "(tergabung dalam asesmen awal, lihat catatan friksi #3)"
  },

  "praktik_pedagogis": ["genre-based-approach", "mini-survey", "role-play", "presentasi"],

  "lingkungan_pembelajaran": {
    "ruang_fisik": "Ruang kelas atau ruang lain yang mendukung pembelajaran kolaboratif dan partisipasi aktif",
    "budaya_belajar": "Kolaboratif dan partisipatif (diturunkan dari deskripsi ruang fisik — lihat catatan friksi #2)"
  },

  "langkah_pembelajaran": {
    "memahami": {
      "prinsip": ["berkesadaran", "menggembirakan", "bermakna"],
      "pertemuan_ke": [1, 2, 3],
      "aktivitas": [
        {
          "id": "AKT-D-01",
          "deskripsi": "Pertanyaan pemandu kontekstual: What is your favorite fashion item and why? + gambar/video tren fashion.",
          "tp_terukur": []
        },
        {
          "id": "AKT-D-02",
          "deskripsi": "Permainan This or That sebagai asesmen awal sekaligus identifikasi kesiapan — murid pilih fashion item, jawab 'Why do you prefer...?'",
          "diferensiasi": {
            "rubrik": {
              "MB": "Tidak merespons / hanya memilih tanpa bicara / opini tanpa alasan jelas",
              "BSH": "Opini dengan alasan sederhana (boleh campur bahasa)",
              "SB": "Opini dengan alasan jelas & lengkap dalam Bahasa Inggris"
            }
          },
          "tp_terukur": ["TP-D-8-04"]
        },
        {
          "id": "AKT-D-03",
          "deskripsi": "Video + teks rumpang 'Fashion Items Vocabulary', diferensiasi 3-tingkat lewat jumlah bantuan daftar kata.",
          "diferensiasi": {
            "rubrik": {
              "MB": "Diberi daftar kata/frasa pilihan lengkap",
              "BSH": "Daftar kata/frasa lebih terbatas",
              "SB": "Lengkapi tanpa bantuan daftar kata"
            }
          },
          "tp_terukur": ["TP-D-8-04"]
        },
        {
          "id": "AKT-D-04",
          "deskripsi": "Teks percakapan Wulan & Ryan ttg expensive vs comfortable clothes — garis bawahi ungkapan opini.",
          "tp_terukur": ["TP-D-8-04"]
        }
      ]
    },
    "mengaplikasi": {
      "prinsip": ["bermakna", "berkesadaran", "menggembirakan"],
      "pertemuan_ke": [2, 3, 4],
      "aktivitas": [
        {
          "id": "AKT-D-05",
          "deskripsi": "Role play berkelompok berdasarkan transkrip, dikelompokkan menurut pilihan fashion item.",
          "tp_terukur": ["TP-D-8-04"]
        },
        {
          "id": "AKT-D-06",
          "deskripsi": "Menulis opini terstruktur: Pendapat-Alasan-Kesimpulan tentang 'expensive vs comfortable clothes'.",
          "tp_terukur": ["TP-D-8-04"]
        },
        {
          "id": "AKT-D-07",
          "deskripsi": "Mini survey 'Find Who...' — wawancara 7-10 teman, susun pertanyaan sendiri, laporkan dalam tulisan/poster/video.",
          "tp_terukur": ["TP-D-8-04"]
        }
      ]
    },
    "merefleksi": {
      "prinsip": ["bermakna", "berkesadaran", "menggembirakan"],
      "pertemuan_ke": [5],
      "aktivitas": [
        {
          "id": "AKT-D-08",
          "deskripsi": "Presentasi hasil survey per kelompok, umpan balik struktur presentasi.",
          "tp_terukur": ["TP-D-8-04"]
        },
        {
          "id": "AKT-D-09",
          "deskripsi": "Refleksi individual terpandu 7 pertanyaan (What was your opinion today? dst).",
          "tp_terukur": []
        }
      ]
    }
  },

  "asesmen": {
    "awal": {
      "bentuk": "Permainan This or That",
      "pertanyaan_pemantik": ["Which one do you like?", "Why do you prefer...?"],
      "hasil_dipetakan_ke": "kategori_resmi"
    },
    "proses": [
      {
        "tp_ref": "TP-D-8-04",
        "teknik": "observasi mengidentifikasi ungkapan opini dalam teks",
        "rubrik": {
          "MB": "Mengidentifikasi 0-3 ungkapan",
          "BSH": "Mengidentifikasi 4-7 ungkapan",
          "SB": "Mengidentifikasi 8-10 ungkapan"
        }
      },
      {
        "tp_ref": "TP-D-8-04",
        "teknik": "observasi penggunaan ungkapan dengan struktur & kosakata tepat",
        "rubrik": {
          "MB": "Hanya bertanya/mengulang jawaban tanpa alasan",
          "BSH": "Bisa menjawab dengan alasan sederhana",
          "SB": "Bisa bertanya & menjawab dengan alasan jelas"
        }
      }
    ],
    "akhir": {
      "tp_refs": ["TP-D-8-04"],
      "bentuk": "Unjuk kerja menyusun & menyampaikan opini",
      "instrumen": [
        {
          "deskripsi": "Menyusun opini tertulis didukung alasan relevan",
          "rubrik": {
            "MB": "Tidak ada alasan/kurang relevan/hanya 1 alasan; 1 kalimat opini",
            "BSH": "2 alasan relevan; 2-3 kalimat opini",
            "SB": "≥3 alasan relevan + contoh/data; 4-5 kalimat opini"
          }
        }
      ],
      "validasi_cakupan": [
        { "tp_id": "TP-D-8-04", "instrumen_cocok": true }
      ]
    }
  },

  "provenance": {
    "sumber_konten": "resmi_BSKAP",
    "disusun_oleh": "Pusat Kurikulum dan Pembelajaran, Panduan Mapel Bahasa Inggris Fase B-F",
    "tanggal_disusun": "2025-09",
    "catatan_koreksi": []
  }
}
```

---

## 3 Friksi Nyata yang Ditemukan (lebih signifikan dari uji pertama)

### Friksi #1 — TP tunggal di Identitas vs TP granular di ATP

Header "Identitas" resmi cuma menulis **1 kalimat TP ringkasan** ("Mengungkapkan pendapat tentang suatu isu..."), padahal ATP fase ini punya 13 TP granular bernomor. Modul ini ternyata hanya benar-benar memakai **1 dari 13 TP** (TP yang soal "mengungkapkan pendapat") — bukan referensi ke semua 13. **Resolusi**: `tp_refs: string[]` di skema sudah benar mengizinkan subset kecil, tidak harus mereferensi seluruh TP fase. Tidak perlu ubah skema — cuma perlu disiplin saat mengisi data: jangan asal masukkan semua TP fase ke setiap modul.

### Friksi #2 — Lingkungan Pembelajaran tidak terbagi rapi ke 3 sub-field

Skema saya desain dengan `ruang_fisik` / `ruang_virtual` / `budaya_belajar` terpisah. Sumber resmi cuma menulis **satu kalimat deskriptif gabungan** ("ruang kelas yang mendukung pembelajaran kolaboratif dan partisipasi aktif"). Saya terpaksa **menebak/memecah** kalimat itu jadi `ruang_fisik` + menyimpulkan `budaya_belajar` secara interpretatif — ini bukan field-mapping yang bersih, ini saya yang menambahkan struktur yang tidak ada di sumber. **Ini friksi sungguhan**, bukan cuma kekhawatiran semu seperti di uji pertama.

### Friksi #3 — Identifikasi Kesiapan dan Asesmen Awal menyatu di sumber, terpisah di skema

Modul resmi ini tidak punya bagian "Identifikasi Kesiapan Murid" yang berdiri sendiri — kesiapan murid **ditentukan lewat hasil permainan This or That** yang justru saya kategorikan sebagai `asesmen.awal`. Field `identifikasi_kesiapan.pengetahuan_awal` dan `kebutuhan_belajar` jadi nyaris kosong/dipaksakan karena informasinya sebenarnya ada di tempat lain dalam skema.

## Rekomendasi Perbaikan Skema (bukan desain ulang total — penyesuaian terarah)

1. **Lingkungan Pembelajaran**: ubah dari 3 sub-field wajib-terpisah menjadi 1 field teks bebas + sub-field opsional kalau penyusun ingin lebih rinci. Jangan paksa modul memilah sesuatu yang sumber aslinya tidak memilah.
2. **Identifikasi Kesiapan**: jadikan eksplisit opsional (`identifikasi_kesiapan?:`), dengan catatan bahwa kalau kosong, informasinya kemungkinan ada di `asesmen.awal` — bukan dianggap data hilang.

Ini perbaikan kecil dan terarah, bukan alasan mendesain ulang dari nol — skema intinya tetap berdiri, cuma 2 field yang perlu dilonggarkan strukturnya.
