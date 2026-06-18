const skenario = {
  "persiapan": {
    "papan_tulis": "Most ___.\nSome ___.\nThey usually ___.",
    "kartu": "Siapkan tiga kartu di meja guru — tabel perbandingan pohon kota (maple, beringin, palem) dengan kolom daun/keteduhan/tempat tumbuh, kartu generalisasi (\"Most ___\" / \"Some ___\" / \"They usually ___\"), dan kartu ikon (daun hijau, pohon rindang di taman, matahari dan air).",
    "instruksi": []
  },
  "siapkan_kelas": {
    "settling": [
      {
        "tipe": "AKSI",
        "teks": "Berdiri di depan kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Welcome back, class. Shall we begin?"
      },
      {
        "tipe": "AKSI",
        "teks": "Periksa kesiapan kelas secara singkat."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "When you walk to school, do you pass any trees? What do they look like?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa."
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan tabel perbandingan pohon kota — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this comparison chart. What do most of these city trees have in common?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to describe shared characteristics of a group, using Most, Some, and They usually."
      }
    ]
  },
  "langkah": {
    "model": {
      "durasi_menit": 6,
      "intro": "Siswa hanya menonton dan mendengarkan — belum diminta melakukan apapun.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Angkat tabel perbandingan — tunjuk kolom pohon maple. Sapukan tangan ke sekelompok pohon untuk \"is a kind of\"."
        },
        {
          "tipe": "UCAP",
          "teks": "A maple is a kind of tree. It usually has wide leaves."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat kartu generalisasi — sapukan tangan melintasi banyak pohon untuk \"Most\"."
        },
        {
          "tipe": "UCAP",
          "teks": "Most trees have green leaves."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk bagian yang lebih kecil dari kelompok pohon untuk \"Some\"."
        },
        {
          "tipe": "UCAP",
          "teks": "Some trees grow in parks and give shade."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan gesture umum yang stabil sambil tunjuk kartu ikon matahari dan air."
        },
        {
          "tipe": "UCAP",
          "teks": "They usually need water and sunlight."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan semua kartu."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "You watched me. Now let us say it together."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa mulai ikut berbicara sebelum waktunya — angkat telapak tangan ke arah mereka dan ucapkan \"Just watch first.\""
        }
      ],
      "diferensiasi": null
    },
    "repeat": {
      "durasi_menit": 5,
      "intro": "Guru mengucapkan satu kalimat — siswa menirukan bersama. Satu putaran per kalimat. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Kalimat 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk kolom pohon maple di tabel perbandingan."
            },
            {
              "tipe": "UCAP",
              "teks": "A maple is a kind of tree. It usually has wide leaves."
            },
            {
              "tipe": "AKSI",
              "teks": "Jeda 1 detik."
            },
            {
              "tipe": "AKSI",
              "teks": "Beri isyarat tangan ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "Say it with me."
            },
            {
              "tipe": "AKSI",
              "teks": "Tunggu seluruh kelas mengucapkan bersama."
            },
            {
              "tipe": "AKSI",
              "teks": "Jika pengucapan masih ragu-ragu — ulangi sekali lagi sebelum lanjut."
            }
          ]
        },
        {
          "label": "Kalimat 2",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat kartu generalisasi — sapukan tangan melintasi banyak pohon."
            },
            {
              "tipe": "UCAP",
              "teks": "Most trees have green leaves."
            },
            {
              "tipe": "AKSI",
              "teks": "Jeda 1 detik."
            },
            {
              "tipe": "AKSI",
              "teks": "Beri isyarat tangan ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "Say it with me."
            },
            {
              "tipe": "AKSI",
              "teks": "Tunggu seluruh kelas mengucapkan bersama."
            },
            {
              "tipe": "AKSI",
              "teks": "Jika pengucapan masih ragu-ragu — ulangi sekali lagi sebelum lanjut."
            }
          ]
        },
        {
          "label": "Kalimat 3",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk bagian yang lebih kecil dari gambar pohon di tabel."
            },
            {
              "tipe": "UCAP",
              "teks": "Some trees grow in parks and give shade."
            },
            {
              "tipe": "AKSI",
              "teks": "Jeda 1 detik."
            },
            {
              "tipe": "AKSI",
              "teks": "Beri isyarat tangan ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "Say it with me."
            },
            {
              "tipe": "AKSI",
              "teks": "Tunggu seluruh kelas mengucapkan bersama."
            },
            {
              "tipe": "AKSI",
              "teks": "Jika pengucapan masih ragu-ragu — ulangi sekali lagi sebelum lanjut."
            }
          ]
        },
        {
          "label": "Kalimat 4",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat kartu ikon matahari dan air — peragakan gesture stabil dan umum."
            },
            {
              "tipe": "UCAP",
              "teks": "They usually need water and sunlight."
            },
            {
              "tipe": "AKSI",
              "teks": "Jeda 1 detik."
            },
            {
              "tipe": "AKSI",
              "teks": "Beri isyarat tangan ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "Say it with me."
            },
            {
              "tipe": "AKSI",
              "teks": "Tunggu seluruh kelas mengucapkan bersama."
            },
            {
              "tipe": "AKSI",
              "teks": "Jika pengucapan masih ragu-ragu — ulangi sekali lagi sebelum lanjut."
            }
          ]
        }
      ],
      "instruksi_penutup": [
        {
          "tipe": "AKSI",
          "teks": "Letakkan semua kartu."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now it is your turn. Describe the shared characteristics."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk pola di papan tulis. Minta siswa menyalin di buku catatan sebelum melanjutkan. Beri waktu dua menit untuk menyalin, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi tiga menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa mengganti ciri umum dengan deskripsi pohon kota versi sendiri. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan tabel perbandingan dan kartu generalisasi di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use these patterns. Describe shared characteristics of city trees."
        },
        {
          "tipe": "UCAP",
          "teks": "Keep the subject plural and general, not one specific tree, and not a personal memory."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Open your notebook. You have five minutes. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu lima menit untuk menulis."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang berhenti menulis lebih dari sepuluh detik atau belum menulis satu kalimat pun."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah lima menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop writing. Stay where you are. I will show you your group."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu ciri apa yang akan ditulis — tunjuk kolom di tabel perbandingan dan minta siswa pilih salah satu ciri sebagai titik awal."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kolom \"daun\" di tabel, dan minta siswa ucapkan \"Most trees have ...\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan tabel perbandingan dan lengkapi: \"Most trees ___.\" dan \"Some trees ___.\"",
        "standar": "Tulis tiga kalimat umum: satu \"Most ...\", satu \"Some ...\", dan satu \"They usually ...\"",
        "tantangan": "Mulai dengan klasifikasi satu pohon (\"A ___ is a kind of tree.\"), lalu generalisasikan dengan \"Most ... / Some ... / They usually ...\""
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Mulai dengan klasifikasi satu pohon (\"A ___ is a kind of tree.\"), lalu generalisasikan dengan \"Most ... / Some ... / They usually ...\"",
        "perlu_bantuan": "Gunakan tabel perbandingan dan lengkapi: \"Most trees ___.\" dan \"Some trees ___.\""
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Bentuk kelompok tiga atau empat orang. Guru menentukan kelompok.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk siapa bergabung dalam kelompok yang sama — jangan biarkan siswa memilih sendiri."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok terbentuk dan tenang."
        },
        {
          "tipe": "UCAP",
          "teks": "In your group, use the comparison chart. Take turns adding one general sentence."
        },
        {
          "tipe": "UCAP",
          "teks": "Together, build a short report of what city trees share."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk membangun laporan kelompok."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — amati apakah setiap anggota sudah menyumbang setidaknya satu kalimat."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now each group will present to a new group."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok diam lebih dari sepuluh detik — tunjuk kolom pertama di tabel dan minta satu siswa ucapkan \"Most trees ...\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika anggota kelompok berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum melanjutkan."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa mendominasi — tunjuk siswa lain dan minta mereka tambahkan kalimat berikutnya."
        }
      ],
      "diferensiasi": {
        "mudah": "Tambahkan satu kalimat umum ke laporan kelompok (\"Most trees ___.\" Boleh membaca.",
        "standar": "Tambahkan dua kalimat umum (satu \"Most/Some\", satu \"They usually\") tanpa membaca.",
        "tantangan": "Klasifikasikan satu pohon, lalu tambahkan dua generalisasi, dan pastikan laporan kelompok menggunakan subjek plural dan umum."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Klasifikasikan satu pohon, lalu tambahkan dua generalisasi, dan pastikan laporan kelompok menggunakan subjek plural dan umum.",
        "perlu_bantuan": "Tambahkan satu kalimat umum ke laporan kelompok (\"Most trees ___.\" Boleh membaca."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Setiap kelompok bergabung dengan satu kelompok lain — membentuk kelompok baru empat orang dari kelompok yang berbeda.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kelompok mana bergabung dengan kelompok mana — jangan biarkan siswa memilih sendiri."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok baru terbentuk dan tenang."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa di tiap kelompok sebagai pembicara pertama."
        },
        {
          "tipe": "UCAP",
          "teks": "The person I point to presents your group report first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns presenting general characteristics of city trees."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk semua anggota berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — pastikan tidak ada anggota kelompok yang diam terus selama sesi."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, tunjuk kartu generalisasi, dan minta ucapkan \"Most trees ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambah satu kalimat generalisasi yang belum disebutkan kelompok."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah enam menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop. Everyone back to your seat."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua siswa kembali ke posisi semula dan tenang."
        }
      ],
      "diferensiasi": {
        "mudah": "Presentasikan dua kalimat umum ke kelompok baru. Boleh membaca.",
        "standar": "Presentasikan tiga kalimat umum (Most / Some / They usually) tanpa membaca.",
        "tantangan": "Presentasikan generalisasi, lalu jawab satu pertanyaan tentang ciri pohon dari kelompok."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Presentasikan generalisasi, lalu jawab satu pertanyaan tentang ciri pohon dari kelompok.",
        "perlu_bantuan": "Presentasikan dua kalimat umum ke kelompok baru. Boleh membaca."
      }
    },
    "check": {
      "durasi_menit": 4,
      "intro": "Guru mengamati selama langkah SHARE berlangsung — bukan setelah selesai. Setelah SHARE selesai, lakukan konfirmasi cepat ke dua siswa, lalu putuskan jalur berikutnya.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa secara acak."
        },
        {
          "tipe": "UCAP",
          "teks": "Give me your Most sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan subjek plural dan umum (\"trees\", bukan satu pohon spesifik)? Apakah ini generalisasi faktual, bukan cerita pribadi?"
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk siswa lain."
        },
        {
          "tipe": "UCAP",
          "teks": "Your They usually sentence. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan \"They usually ...\" sebagai ciri umum kelompok?"
        }
      ],
      "jalur_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Lanjut ke BOOST."
        }
      ],
      "jalur_belum_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Angkat kembali kartu generalisasi."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan kalimat kedua dan keempat sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu seluruh kelas mengucapkan bersama."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta siswa buka buku catatan — lengkapi atau perbaiki kalimat yang belum selesai. Beri waktu dua menit."
        },
        {
          "tipe": "UCAP",
          "teks": "Good work today. We will continue next time."
        },
        {
          "tipe": "AKSI",
          "teks": "Tutup sesi — lewati BOOST karena waktu tidak mencukupi."
        }
      ]
    },
    "boost": {
      "durasi_menit": 5,
      "intro": "Dijalankan hanya jika CHECK menunjukkan sebagian besar siswa sudah lancar. Pilih SATU fokus yang paling dibutuhkan kelas. Jangan jalankan kedua aktivitas jika waktu tidak mencukupi. Maksimal tiga siswa per fokus.",
      "untuk_kesulitan": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat kartu generalisasi."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Most trees have green leaves."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try. Most trees..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kolom daun di tabel — tunggu siswa melengkapi."
        },
        {
          "tipe": "AKSI",
          "teks": "Lanjutkan untuk \"Some trees ...\" dan \"They usually ...\" sampai siswa siap bicara tanpa bantuan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Most trees have green leaves, but some have red leaves."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add a contrast, Most... but some..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba menambahkan kontras generalisasi."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. That shows you see differences within the group.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan ketiga kalimat generalisasi tanpa melihat buku, atau menulis satu generalisasi kontras di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-06.js",
    pattern_id: "PAT-8-06",
    title: "City Trees: Describing General Characteristics",
    short_title: "City Trees",
    grade: 8,
    genre: "Report",
    cluster: "A",
    topic: "City Trees",
    context: "Students compare several common trees found in parks and streets and identify their shared characteristics.",
    context_id: "Siswa membandingkan beberapa pohon umum yang ditemukan di taman dan jalan serta mengidentifikasi ciri-ciri yang sama.",
    communicative_goal: "describe general characteristics using most, some, and usually",
    communicative_goal_id: "mendeskripsikan ciri-ciri umum menggunakan most, some, dan usually",
    vocabulary_domain: ["trees", "leaves", "shade", "parks"],
    input_anchor: "comparison chart",
    output_anchor: "group report",
    prerequisite_patterns: ["PAT-8-05"],
    reusable_in: ["PAT-8-12", "PAT-9-10"],
    complexity_level: "Expand",
    notes: "TP keenam Kelas 8, Report. target_pattern PAT-8-06 = 'Most ... / Some ... / They usually ...' (generalisasi sederhana). Reaktivasi PAT-8-05 (WAJIB, VR-1): 'It is a kind of [X]. It usually [Y].' (klasifikasi SATU jenis pohon) -> 'Most/Some [pohon jenis lain] ... They usually ...' (GENERALISASI ke BANYAK jenis/kelompok). Progresi: SATU kategori (8-05) -> BEBERAPA kategori dibandingkan (8-06). SUBJEK WAJIB PLURAL/GENERIK (trees, leaves), bukan satu pohon spesifik. forbidden_overlap (specific event recount, personal preference, fictional narrative): TIDAK ada 'Yesterday I saw...', TIDAK ada 'I prefer this tree because...', TIDAK ada cerita pohon. vocabulary_domain (trees, leaves, shade, parks) muncul di bahasa target. Ekstensi opsional generalisasi berkontras ('Most trees have green leaves, but some have red leaves.') -- menjaga head generalisasi, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Welcome back, class. Shall we begin?" },
      { type: "AKSI", text: "Periksa kesiapan kelas secara singkat." },
      // HOOK
      { type: "UCAP", text: "When you walk to school, do you pass any trees? What do they look like?" },
      { type: "AKSI", text: "Tampilkan tabel perbandingan pohon kota: maple, beringin, palem — dengan kolom daun, keteduhan, tempat tumbuh." },
      { type: "UCAP", text: "Look at this comparison chart. What do most of these city trees have in common?" },
    ],

    active_vocabulary: [
      "Most",
      "Some",
      "They usually",
      "trees",
      "leaves",
      "shade",
      "parks",
      "sunlight"
    ],

    model_sentences: [
      { id: "model_1", text: "A maple is a kind of tree. It usually has wide leaves." },
      { id: "model_2", text: "Most trees have green leaves." },
      { id: "model_3", text: "Some trees grow in parks and give shade." },
      { id: "model_4", text: "They usually need water and sunlight." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A comparison chart of several common city trees (maple, banyan, palm) with columns for leaves, shade, and where they grow.", description_id: "Tabel perbandingan beberapa pohon kota umum (maple, beringin, palem) dengan kolom untuk daun, keteduhan, dan tempat tumbuhnya.", asset_id: null },
      { id: "visual_2", description: "Generalization cards: 'Most ___', 'Some ___', 'They usually ___'.", description_id: "Kartu generalisasi: 'Most ___', 'Some ___', 'They usually ___'.", asset_id: null },
      { id: "visual_3", description: "Icons: green leaves, a shady tree in a park, sun and water for what trees usually need.", description_id: "Ikon: daun hijau, pohon rindang di taman, matahari dan air untuk kebutuhan umum pohon.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher sweeps a hand across many trees while saying 'Most ...' to show a large group.", description_id: "Guru menyapukan tangan melintasi banyak pohon sambil mengucapkan 'Most ...' untuk menunjukkan kelompok besar." },
      { id: "gesture_2", description: "Teacher points to a smaller part of the group while saying 'Some ...'.", description_id: "Guru menunjuk bagian yang lebih kecil dari kelompok sambil mengucapkan 'Some ...'." },
      { id: "gesture_3", description: "Teacher makes a steady, general gesture while saying 'They usually ...' for a shared characteristic.", description_id: "Guru membuat gestur umum yang stabil sambil mengucapkan 'They usually ...' untuk ciri yang sama." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher move from classifying one tree to generalizing across many trees with 'Most ... / Some ... / They usually ...'.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-05"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the generalization sentences ('Most ... / Some ... / They usually ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Describe general characteristics of trees by replacing the shared features.",
      prompt: "Use the patterns 'Most [plural] ...', 'Some [plural] ...', and 'They usually ...' Describe shared characteristics of city trees (trees, leaves, shade, parks). Keep the subject plural and general -- not one specific tree, and not 'Yesterday I saw ...'.",
      change_target: ["most (Most ...)", "some (Some ...)", "usual characteristic (They usually ...)"],
      differentiation: {
        easy: { task: "Use the comparison chart and complete: 'Most trees ___.' and 'Some trees ___.'" },
        standard: { task: "Write three general sentences: one 'Most ...', one 'Some ...', and one 'They usually ...'." },
        challenge: { task: "Start by classifying one tree ('A ___ is a kind of tree.'), then generalize with 'Most ... / Some ... / They usually ...'." }
      },
      support: { pattern_support: ["PAT-8-05"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Build a group report of shared tree characteristics together (group report).",
      interaction_mode: "small_group",
      task: "In a group of 3-4, use the comparison chart. Take turns adding a general sentence ('Most ... / Some ... / They usually ...') so the group builds a short report of what city trees share.",
      differentiation: {
        easy: { task: "Add one general sentence to the group's report ('Most trees ___.'). You may read." },
        standard: { task: "Add two general sentences (one 'Most/Some', one 'They usually') without reading." },
        challenge: { task: "Classify one tree, then add two generalizations, and check the group's report uses plural, general subjects." }
      },
      support: { pattern_support: ["PAT-8-05"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your group report to a new group (group report).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting general characteristics of city trees ('Most ... / Some ... / They usually ...').",
      differentiation: {
        easy: { task: "Present two general sentences to the new group. You may read them." },
        standard: { task: "Present three general sentences (Most / Some / They usually) without reading." },
        challenge: { task: "Present your generalizations, then answer one question about the characteristics from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students generalize with 'Most ... / Some ... / They usually ...'",
        "students keep the subject plural and general (trees, leaves), not one specific tree",
        "students still recount a specific event ('Yesterday I saw ...'), give a preference ('I prefer ...'), or tell a story"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a contrast generalization ('Most ... but some ...').",
        needs_model: "Repeat the MODEL step, emphasizing plural, general subjects with 'Most / Some / They usually'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the generalization sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "uses a singular/specific subject or recounts a personal event instead of generalizing",
        "relies only on the written sentences and cannot report without reading",
        "generalizes with 'Most / Some / They usually' and plural subjects accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling a plural, general subject with 'Most / Some / They usually'",
        "model one more generalization about a different group of living things to show the same pattern still works",
        "for a student who is ready, model ONE contrast generalization first -- 'Most trees have green leaves, but some have red leaves.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the general-report head, with no personal recount or preference"
      ]
    }
  ],

  constraints: {
    single_productive_pattern: true,
    requires_student_output: true,
    check_without_score: true,
    boost_without_label: true,
    tts_optional_backup: true,
    self_contained: true
  },
  skenario,
}
