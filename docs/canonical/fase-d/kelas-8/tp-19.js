const skenario = {
  "persiapan": {
    "papan_tulis": "\"___\" said ___.\n\"___,\" replied ___.\n[Name] decided to ___.",
    "kartu": "Siapkan tiga kartu di meja guru — strip komik dialog yang menunjukkan Dito dan Wulan berdiri di luar pintu gudang dengan balon kata dan kotak narator orang ketiga di bawah setiap panel, kerangka prosa dialog (\"\\\"___\\\" said [name]. / \\\"___,\\\" replied [name]. / [Name] decided to ___.\" — menunjukkan struktur naratif orang ketiga, bukan skrip drama), dan kartu kata kerja pelapor (said, replied, whispered, asked — dengan tanda panah menunjuk ke tanda kutip).",
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
        "teks": "Good morning. We are going to bring our story to life today."
      },
      {
        "tipe": "AKSI",
        "teks": "Persiapkan suasana kelas seperti sesi storytelling."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Dito found a key. Wulan heard a strange sound. What do you think they said to each other?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan strip komik dialog — tunjuk balon kata Dito dan Wulan di luar pintu gudang, lalu tunjuk kotak narator orang ketiga di bawah setiap panel."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this comic strip. Can you read what they are saying to each other?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to write story dialogue in third-person prose, using said, replied, and decided to."
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
          "teks": "Angkat dua jari membentuk tanda kutip di udara — tunjuk ke arah Wulan di komik."
        },
        {
          "tipe": "UCAP",
          "teks": "\"Did you hear that voice?\" said Wulan softly."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat dua jari tanda kutip — bergantian tunjuk kiri (Dito) lalu kanan (Wulan) untuk menunjukkan dua pembicara."
        },
        {
          "tipe": "UCAP",
          "teks": "\"I have a question,\" replied Dito. \"Should we open the door now?\""
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kotak narator orang ketiga di bawah panel komik."
        },
        {
          "tipe": "UCAP",
          "teks": "As good friends, Dito and Wulan made a decision together."
        },
        {
          "tipe": "AKSI",
          "teks": "Buat gestur menunjuk ke depan yang tegas sambil mengucapkan \"decided to\"."
        },
        {
          "tipe": "UCAP",
          "teks": "Dito decided to turn the key in the lock."
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
              "teks": "Angkat dua jari membentuk tanda kutip di udara — tunjuk ke arah Wulan di komik."
            },
            {
              "tipe": "UCAP",
              "teks": "\"Did you hear that voice?\" said Wulan softly."
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
              "teks": "Angkat dua jari tanda kutip — bergantian tunjuk kiri (Dito) lalu kanan (Wulan)."
            },
            {
              "tipe": "UCAP",
              "teks": "\"I have a question,\" replied Dito. \"Should we open the door now?\""
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
              "teks": "Tunjuk kotak narator orang ketiga di bawah panel komik."
            },
            {
              "tipe": "UCAP",
              "teks": "As good friends, Dito and Wulan made a decision together."
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
              "teks": "Buat gestur menunjuk ke depan yang tegas untuk \"decided to\"."
            },
            {
              "tipe": "UCAP",
              "teks": "Dito decided to turn the key in the lock."
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
          "teks": "Good. Now it is your turn. Write your own story dialogue."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk pola di papan tulis dan tunjuk kerangka prosa dialog. Minta siswa menyalin pola di buku catatan sebelum melanjutkan. Beri waktu dua menit untuk menyalin, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi tiga menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis pertukaran dialog naratif singkat antara Dito dan Wulan. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan strip komik dan kerangka prosa dialog di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this frame. Write a dialogue between Dito and Wulan about opening the storage room door."
        },
        {
          "tipe": "UCAP",
          "teks": "Third-person prose, not a drama script, and not a personal conversation. End with decided to."
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
          "teks": "Stop writing. Now find a partner."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu harus menulis apa — tunjuk balon kata pertama di komik dan minta siswa mulai dari \"\\\"Did you hear ...\" lalu lanjutkan dengan replied."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu kata kerja pelapor \"said\", dan minta siswa ucapkan \"\\\"___\\\" said Wulan.\" Tunggu siswa menulis satu baris, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kerangka dialog dan isi: \"\\\"___\\\" said ___. \\\"___,\\\" replied ___. ___ decided to ___.\" Boleh lihat strip komik.",
        "standar": "Tulis pertukaran dialog (said / replied) dan akhiri dengan \"[Name] decided to ...\" tanpa membaca.",
        "tantangan": "Tulis tiga baris dialog menggunakan said, replied, dan satu kata kerja pelapor lain (misalnya whispered), lalu tambahkan \"[Name] decided to ...\""
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Guru menentukan pasangan — tunjuk dua siswa yang duduk berdekatan. Untuk jumlah ganjil, bentuk satu kelompok tiga. Aktivitas ini menggabungkan role play dan pembacaan versi prosa orang ketiga.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk dua siswa yang duduk berdekatan sebagai contoh — minta mereka berdiri sebentar."
        },
        {
          "tipe": "UCAP",
          "teks": "Watch first. Then you do the same."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa A berperan sebagai Dito, Siswa B berperan sebagai Wulan — keduanya role play dialog menggunakan kalimat yang sudah ditulis."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B kemudian membacakan versi prosa orang ketiga dengan lantang sementara Siswa A memeriksa: Ada \"said\"? Ada \"replied\"? Ada \"decided to\"? Lalu tukar peran."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Role play your dialogue first, then read the prose version. Your partner checks for said, replied, and decided to. Then swap."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati beberapa pasangan di setiap baris dan pastikan sebagian besar siswa sudah mulai berbicara."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now stay with your partner and join another pair."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk balon kata pertama di komik dan tanya \"What did Wulan say first?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan menulis skrip drama (\"WULAN: Did you hear that?\") — tunjuk pola prosa di papan tulis dan minta mereka ubah ke format \"\\\"Did you hear that?\\\" said Wulan.\""
        }
      ],
      "diferensiasi": {
        "mudah": "Role play dialog dengan pasangan menggunakan kerangka. Pasangan periksa \"said\" dan \"replied\" ada.",
        "standar": "Role play lalu baca versi prosa dengan lantang. Pasangan periksa said, replied, dan decided to.",
        "tantangan": "Role play, baca versi prosa, lalu tambahkan satu baris dengan kata kerja pelapor baru. Pasangan tanya \"What did the character decide?\" dan kamu jawab."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Setiap pasangan bergabung dengan satu pasangan lain — bukan pasangan dari langkah INTERACT — membentuk kelompok empat orang.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pasangan mana bergabung dengan pasangan mana — jangan biarkan siswa memilih sendiri."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok terbentuk dan tenang."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa di tiap kelompok sebagai pembicara pertama."
        },
        {
          "tipe": "UCAP",
          "teks": "The person I point to presents your role play first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns performing your role play, then reading the prose version to the group."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk semua anggota kelompok berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — pastikan tidak ada anggota kelompok yang diam terus selama sesi."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, tunjuk kartu kata kerja pelapor \"said\", dan minta ucapkan \"\\\"___\\\" said ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambahkan satu baris narator orang ketiga sebelum dialog dimulai."
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
        "mudah": "Baca prosa dialog ke kelompok menggunakan kerangka.",
        "standar": "Lakukan role play lalu baca versi prosa tanpa kerangka.",
        "tantangan": "Lakukan role play dan baca versi prosa, lalu jawab satu pertanyaan dari kelompok: \"What did the character decide?\""
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
          "teks": "Give me your said sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menulis prosa naratif orang ketiga dengan tanda kutip dan kata kerja pelapor? Bukan skrip drama (\"WULAN: ...\")?"
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
          "teks": "Your decided to sentence. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan nama tokoh nyata (Dito atau Wulan) diikuti \"decided to ...\" — bukan \"character decided to ...\"?"
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
          "teks": "Angkat kembali kerangka prosa dialog."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan kalimat pertama dan keempat sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Tunjuk kerangka prosa dialog."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. \"Did you hear that voice?\" said Wulan softly."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk perbedaan di papan tulis: \"WULAN: Did you hear that?\" (skrip drama) versus \"\\\"Did you hear that voice?\\\" said Wulan softly.\" (prosa orang ketiga dengan kata kerja pelapor)."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try. What did Dito reply?"
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu kata kerja pelapor \"replied\" — tunggu siswa melengkapi baris berikutnya."
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi sampai siswa siap mengucapkan satu pertukaran dialog penuh tanpa bantuan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. \"We should not open it alone,\" whispered Wulan, stepping back from the door."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add a third dialogue line using a new reporting verb, whispered or asked."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba menambahkan baris dialog ketiga dengan kata kerja pelapor baru."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. A new reporting verb makes your dialogue more vivid.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan dua baris dialog lengkap plus \"decided to\" tanpa melihat buku, atau menulis satu pertukaran dialog baru untuk momen berbeda dalam cerita di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-19.js",
    pattern_id: "PAT-8-19",
    title: "The Old Storage Room: Character Dialogue",
    short_title: "Storage Room Dialogue",
    grade: 8,
    genre: "Narrative",
    cluster: "B",
    topic: "The Old Storage Room Mystery",
    context: "Students bring the story to life by creating conversations as friends decide whether to open the mysterious room.",
    context_id: "Siswa menghidupkan cerita dengan membuat percakapan saat teman-teman memutuskan apakah akan membuka ruangan misterius itu.",
    communicative_goal: "express character responses and advance the story through dialogue",
    communicative_goal_id: "menyampaikan tanggapan tokoh dan mengembangkan cerita melalui dialog",
    vocabulary_domain: ["friends", "voice", "question", "decision"],
    input_anchor: "dialogue comic",
    output_anchor: "role play",
    prerequisite_patterns: ["PAT-8-18"],
    reusable_in: ["PAT-9-07", "PAT-9-09"],
    complexity_level: "Expand",
    notes: "TP ke-19 Kelas 8, genre Narrative B 'Character Response and Dialogue' (cluster B). SINGLE PREREQ: PAT-8-18. target_pattern PAT-8-19 = '\"...\" said ... / \"...,\" replied ... / [Name] decided to ...' (FIRST direct quoted dialogue di seluruh korpus). CEFR B1- via MEKANISME DISKURSUS (bukan vocabulary) -- preseden TP-39 (PAT-8-15): yang naik adalah FITUR DISKURSUS BARU (kutipan langsung + verba pelapor + keputusan tokoh orang-ketiga), bukan kosakata sulit. Reaktivasi PAT-8-18 (WAJIB, VR-1): konflik 'Suddenly...so...but...' (kunci ditemukan di lantai, langkah kaki berhenti) menjadi PEMICU dialog -- tokoh Dito & Wulan bereaksi terhadap penemuan kunci. '[Name] decided to...' merealisasikan target dengan NAMA TOKOH nyata (Dito/Wulan), BUKAN kata literal 'character'. forbidden_overlap (interpersonal conversation, drama script, personal opinion): tetap PROSA NARATIF ORANG KETIGA dengan kutipan + verba pelapor -- bukan format skrip 'NAMA: dialog', bukan 'I think...because...' literal di dalam kutipan. vocabulary_domain (friends, voice, question, decision) semua terealisasi di model_sentences. BOOST extension: tambah satu pertukaran dialog ketiga dengan verba pelapor baru ('whispered') -- tidak mengulang model_1 atau model_2 verbatim.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. We are going to bring our story to life today." },
      { type: "AKSI", text: "Persiapkan suasana kelas seperti sesi storytelling." },
      // HOOK
      { type: "UCAP", text: "Dito found a key. Wulan heard a strange sound. What do you think they said to each other?" },
      { type: "AKSI", text: "Tampilkan strip komik dialog: Dito dan Wulan berdiri di luar pintu gudang, dengan balon kata dan kotak narator." },
      { type: "UCAP", text: "Look at this comic strip. Can you read what they are saying to each other?" },
    ],

    active_vocabulary: [
      "said",
      "replied",
      "decided to",
      "friends",
      "voice",
      "question",
      "decision"
    ],

    model_sentences: [
      { id: "model_1", text: "\"Did you hear that voice?\" said Wulan softly." },
      { id: "model_2", text: "\"I have a question,\" replied Dito. \"Should we open the door now?\"" },
      { id: "model_3", text: "As good friends, Dito and Wulan made a decision together." },
      { id: "model_4", text: "Dito decided to turn the key in the lock." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A dialogue comic strip showing Dito and Wulan standing outside the storage room door, with speech bubbles and a third-person narrator box below each panel.", description_id: "Strip komik dialog yang menunjukkan Dito dan Wulan berdiri di luar pintu gudang, dengan balon kata dan kotak narator orang ketiga di bawah setiap panel.", asset_id: null },
      { id: "visual_2", description: "A dialogue prose frame: '\"___\" said [name]. / \"___,\" replied [name]. / [Name] decided to ___.' -- showing third-person narrative structure, not a drama script.", description_id: "Kerangka prosa dialog: '\"___\" said [name]. / \"___,\" replied [name]. / [Name] decided to ___.' -- menunjukkan struktur naratif orang ketiga, bukan skrip drama.", asset_id: null },
      { id: "visual_3", description: "Reporting verb cards: said, replied, whispered, asked -- with arrows pointing into quotation marks to show the said/replied pattern.", description_id: "Kartu kata kerja pelapor: said, replied, whispered, asked -- dengan tanda panah menunjuk ke tanda kutip untuk menunjukkan pola said/replied.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher raises two fingers to form quotation marks in the air before reading each dialogue line.", description_id: "Guru mengangkat dua jari membentuk tanda kutip di udara sebelum membaca setiap baris dialog." },
      { id: "gesture_2", description: "Teacher alternates pointing left and right to represent two speakers (said / replied).", description_id: "Guru bergantian menunjuk kiri dan kanan untuk mewakili dua pembicara (said / replied)." },
      { id: "gesture_3", description: "Teacher makes a decisive forward-pointing gesture while saying 'decided to ...'.", description_id: "Guru membuat gestur menunjuk ke depan yang tegas sambil mengucapkan 'decided to ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher write narrative dialogue in third-person prose with '\"...\" said ...' / '\"...,\" replied ...' / '[Name] decided to ...' -- not a drama script, not a personal conversation.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-18"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice reading the dialogue sentences in third-person prose together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write a short narrative dialogue exchange using '\"...\" said ...' / '\"...,\" replied ...' and '[Name] decided to ...'.",
      prompt: "Write a 2-3 sentence dialogue between Dito and Wulan about opening the storage room door. Use '\"...\" said [name]' and '\"...,\" replied [name]'. End with '[Name] decided to ...'. Keep it third-person prose -- not a drama script ('NAME: ...'), and not a personal conversation. Include: friends, voice, question, or decision.",
      change_target: ["quoted speech ('\"...\" said ...')", "reported reply ('\"...,\" replied ...')", "character decision ('[Name] decided to ...')"],
      differentiation: {
        easy: { task: "Use the dialogue frame and fill in: '\"___\" said ___. \"___,\" replied ___. ___ decided to ___.' You may look at the comic." },
        standard: { task: "Write a dialogue exchange (said / replied) and end with '[Name] decided to ...' without reading." },
        challenge: { task: "Write three dialogue lines using said, replied, and one more reporting verb (e.g. whispered), then add '[Name] decided to ...'." }
      },
      support: { pattern_support: ["PAT-8-18"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Perform a short role play from the dialogue, then present the third-person prose version.",
      interaction_mode: "pair",
      task: "Find a partner. Role play the dialogue (one as Dito, one as Wulan) using your written sentences. Then swap: one person reads the third-person prose version aloud while the other checks: Is there 'said'? 'replied'? 'decided to'?",
      differentiation: {
        easy: { task: "Role play the dialogue with a partner using the frame. Your partner checks that 'said' and 'replied' are included." },
        standard: { task: "Role play and then read the prose version aloud. Your partner checks for 'said', 'replied', and 'decided to'." },
        challenge: { task: "Role play, read the prose version, and add a third line using a new reporting verb. Your partner asks 'What did the character decide?' and you answer." }
      },
      support: { pattern_support: ["PAT-8-18"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your narrative role play to a new group (role play).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Perform your role play, then read the third-person prose version. The group listens and checks: said, replied, decided to.",
      differentiation: {
        easy: { task: "Read your prose dialogue to the group using the frame." },
        standard: { task: "Perform the role play and read the prose version without the frame." },
        challenge: { task: "Perform the role play and read the prose version, then answer one question from the group: 'What did the character decide?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students write third-person narrative dialogue with '\"...\" said ...' / '\"...,\" replied ...' and '[Name] decided to ...'",
        "students keep the prose frame -- not a drama script ('WULAN: ...')",
        "students write only the spoken words without a reporting verb, or slip into first person ('I said ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a third dialogue line with a new reporting verb.",
        needs_model: "Repeat the MODEL step, emphasizing that narrative dialogue is always third-person prose with a reporting verb, not a drama script.",
        needs_repeat: "Do one more round of REPEAT (choral) on the dialogue sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "writes a drama script ('WULAN: Did you hear that?') instead of third-person prose with reporting verbs",
        "writes the dialogue but cannot present it without reading",
        "writes third-person narrative dialogue with said / replied and 'decided to' accurately and confidently"
      ],
      action: [
        "recast one line slowly, modeling the difference: 'WULAN: Did you hear that?' (drama script) vs. '\"Did you hear that voice?\" said Wulan softly.' (third-person prose with reporting verb)",
        "model one more dialogue exchange on a different story moment (e.g. just after finding the key) to show the same said / replied structure still works",
        "for a student who is ready, model ONE additional dialogue line with a new reporting verb first -- '\"We should not open it alone,\" whispered Wulan, stepping back from the door.' -- then invite that student to add a third dialogue line using a new reporting verb (whispered / asked) to their own exchange; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the third-person prose frame, not a drama script"
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
