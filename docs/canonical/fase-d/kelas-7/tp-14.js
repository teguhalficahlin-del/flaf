const skenario = {
  "persiapan": {
    "papan_tulis": "(Subject) + (past action) + and / and then + (past action).",
    "kartu": "Siapkan kartu penghubung yang menggabungkan dua ikon tindakan — and dengan lari dan lompat, dan then dengan sorak dan tepuk tangan.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan ikon tindakan lampau berlabel — ran, jumped, played, won, cheered."
      }
    ]
  },
  "siapkan_kelas": {
    "settling": [
      {
        "tipe": "AKSI",
        "teks": "Berdiri di depan kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Morning, class! I heard there was a sports event recently."
      },
      {
        "tipe": "AKSI",
        "teks": "Tanya kelas siapa yang mengikuti atau menonton hari olahraga."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Can you remember the last sports day at school? What did you do?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunjukkan kartu foto hari olahraga satu per satu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these sports day photos. What activities can you see?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa. Jika tidak ada yang menjawab dalam lima detik — tunjuk kartu lomba lari dan tanya \"What are they doing here?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — letakkan kartu di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today we learn how to tell two things we did together in one sentence."
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
          "teks": "Tunjuk ke belakang melewati bahu — gestur masa lalu. Tunjuk kartu foto hari olahraga."
        },
        {
          "tipe": "UCAP",
          "teks": "Last Friday, we had Sports Day."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan berlari di tempat."
        },
        {
          "tipe": "UCAP",
          "teks": "We ran"
        },
        {
          "tipe": "AKSI",
          "teks": "Satukan kedua tangan — peragakan melompat."
        },
        {
          "tipe": "UCAP",
          "teks": "and jumped in the games."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu penghubung and dengan ikon lari dan lompat."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu foto pertandingan sepak bola."
        },
        {
          "tipe": "UCAP",
          "teks": "My friends played football"
        },
        {
          "tipe": "AKSI",
          "teks": "Satukan kedua tangan."
        },
        {
          "tipe": "UCAP",
          "teks": "and won the competition."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon played dan won."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan bersorak."
        },
        {
          "tipe": "UCAP",
          "teks": "I cheered"
        },
        {
          "tipe": "AKSI",
          "teks": "Satukan kedua tangan — peragakan bertepuk tangan."
        },
        {
          "tipe": "UCAP",
          "teks": "and then clapped for my team."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu penghubung and then dengan ikon sorak dan tepuk tangan."
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
      "intro": "Guru mengucapkan satu kalimat — siswa menirukan bersama. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Kalimat 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Peragakan berlari — satukan tangan — peragakan melompat."
            },
            {
              "tipe": "UCAP",
              "teks": "We ran and jumped in the games."
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
              "teks": "Tunjuk kartu foto sepak bola — satukan tangan — tunjuk ikon won."
            },
            {
              "tipe": "UCAP",
              "teks": "My friends played football and won the competition."
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
              "teks": "Peragakan bersorak — satukan tangan — peragakan bertepuk tangan."
            },
            {
              "tipe": "UCAP",
              "teks": "I cheered and then clapped for my team."
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
          "teks": "Good. Now write your own connected-action sentences."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk kartu penghubung dan minta siswa baca bersama: blank and blank. Atau: blank and then blank."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menggabungkan dua tindakan masa lalu mereka sendiri dalam satu kalimat. Dikerjakan secara individual, ditulis di buku catatan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel kartu foto hari olahraga dan ikon tindakan lampau di papan tulis di sebelah pola."
        },
        {
          "tipe": "AKSI",
          "teks": "Tempel kartu penghubung and dan and then di papan tulis."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Write your own sentences. Join two past actions with and or and then inside one sentence."
        },
        {
          "tipe": "UCAP",
          "teks": "We ran and jumped. Or: I cheered and then clapped. Use past-tense verbs. Do not start with First or Then. Do not add because."
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
          "teks": "Berjalan keliling kelas — perhatikan siswa yang memulai kalimat dengan First, Then, atau Finally, dan ingatkan: \"Inside one sentence. And. Or: and then.\""
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah lima menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop writing. Stay where you are. I will show you your partner."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa menulis dua kalimat terpisah alih-alih satu kalimat terhubung — satukan kedua tangan dan ucapkan \"One sentence. We blank AND blank.\" Tunjuk kartu penghubung."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, peragakan berlari dan melompat, dan ucapkan \"We ran blank jumped. And? Or: and then?\" Tunggu siswa melengkapi dan menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih dua kartu aksi dan gabungkan: We blank and blank. Gunakan kata kerja lampau.",
        "standar": "Tulis dua kalimat — masing-masing menggabungkan dua tindakan lampau dengan and atau and then di bawah satu subjek.",
        "tantangan": "Awali dengan ungkapan waktu lampau: Last Friday, we had Sports Day. Lalu tulis dua kalimat tindakan terhubung."
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Guru menentukan pasangan — tunjuk dua siswa yang duduk berdekatan. Untuk jumlah ganjil, bentuk satu kelompok tiga.",
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
          "teks": "Minta Siswa A menceritakan dua atau tiga kalimat tindakan terhubung tentang hari olahraga: We ran and jumped."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B mendengarkan dan menyebutkan satu hal yang diingat dari cerita Siswa A."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B menceritakan kalimat tindakan terhubungnya ke Siswa A."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Take turns. Tell your partner what you did at a sports event. Join two actions in each sentence. Work with the person next to you."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk bercerita dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati apakah siswa menggunakan and atau and then di dalam kalimat (bukan di awal kalimat)."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Stay with your partner. Wait for my signal. I will show you which pair to join."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan diam lebih dari sepuluh detik — satukan kedua tangan ke arah pasangan dan ucapkan \"We blank AND blank. What did you do at sports day?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan menggunakan First, Then di awal kalimat — tunjuk kartu penghubung dan ucapkan \"Inside one sentence. And. We ran and jumped.\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai lebih cepat — minta siswa tambahkan satu kalimat lagi dengan tiga tindakan terhubung."
        }
      ],
      "diferensiasi": {
        "mudah": "Ceritakan satu kalimat tindakan terhubung dari buku catatan — boleh membaca. Pasangan mendengarkan dan merespons.",
        "standar": "Ceritakan dua atau tiga kalimat tindakan terhubung tanpa membaca. Pasangan melakukan hal yang sama.",
        "tantangan": "Awali dengan ungkapan waktu lampau, lalu ceritakan beberapa kalimat tindakan terhubung berurutan. Pasangan melakukan hal yang sama."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Setiap pasangan bergabung dengan satu pasangan lain — bukan pasangan dari langkah INTERACT — membentuk kelompok empat orang.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pasangan mana bergabung dengan pasangan mana."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok terbentuk dan tenang."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns. Tell your group about what you did at sports day. Join two actions in each sentence."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa di tiap kelompok sebagai pembicara pertama."
        },
        {
          "tipe": "UCAP",
          "teks": "The person I point to starts first."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk semua anggota kelompok berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — dengarkan apakah and dan and then digunakan di dalam kalimat sebagai konektor naratif."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — satukan kedua tangan ke arahnya dan minta siswa mulai dengan \"We blank and blank.\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa menambahkan because ke dalam kalimat — ingatkan: \"Just the actions. Ran and jumped. No because.\""
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
        "mudah": "Ceritakan dua kalimat tindakan terhubung ke kelompok baru — boleh membaca.",
        "standar": "Ceritakan kalimat tindakan terhubung ke kelompok baru tanpa membaca.",
        "tantangan": "Awali dengan ungkapan waktu lampau dan ceritakan beberapa kalimat terhubung, lalu dengarkan dan urutkan satu kalimat milik teman."
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
          "teks": "Tell me two things you did at sports day in one sentence. Use and or and then. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan kalimat."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggabungkan dua tindakan lampau di dalam satu kalimat dengan and atau and then? Apakah tidak dimulai dengan First, atau Then,?"
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
          "teks": "Your sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa bisa menceritakan dua tindakan terhubung dengan lancar tanpa membaca?"
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
          "teks": "Angkat kembali kartu penghubung."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Satukan kedua tangan — ucapkan dua kalimat tindakan terhubung sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Satukan kedua tangan perlahan."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. We ran and jumped."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu penghubung."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. And joins two actions. Inside one sentence. Now try: I blank and blank."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba dan melengkapi."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "We ran, jumped, and cheered."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Three actions, one sentence. Now you try. Give me one sentence with three past actions. Just one."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Try with different actions.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang kalimat tindakan terhubung tanpa membaca, atau menulis satu kalimat baru dengan tindakan yang berbeda."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-14.js",
    pattern_id: "PAT-7-14",
    title: "Sports Day: Connecting Past Events",
    short_title: "Sports Day",
    grade: 7,
    genre: "Recount",
    cluster: "A",
    topic: "School Sports Day",
    context: "Students retell a sequence of real activities during a school sports event.",
    context_id: "Siswa menceritakan kembali urutan kegiatan nyata selama acara olahraga sekolah.",
    communicative_goal: "connect past actions into a simple chronological recount",
    communicative_goal_id: "menghubungkan tindakan masa lalu menjadi cerita ulang kronologis sederhana",
    vocabulary_domain: ["sports", "games", "friends", "competition"],
    input_anchor: "event photo cards",
    output_anchor: "timeline retelling",
    prerequisite_patterns: ["PAT-7-13"],
    reusable_in: ["PAT-8-17", "PAT-8-18"],
    complexity_level: "Acquire",
    notes: "TP keempat belas Fase D, Recount. target_pattern PAT-7-14 = 'Subject + past action + and / then + past action'. DISTINGSI PENTING: 'and'/'then' di sini adalah KONEKTOR NARATIF MID-SENTENCE yang menghubungkan dua verba lampau di bawah SATU subjek (mis. 'We ran and jumped.', 'I cheered and then clapped.') -- BUKAN penanda sentence-initial 'First,/Then,/Finally,' bergaya prosedural (PAT-7-09, procedure sequencing, forbidden di sini). Distingsi ini ditegaskan di CHECK. PAT-7-13 ('Yesterday,/Last...,... + past event') sebagai support: kalimat pembuka pemberi waktu ('Last Friday, we had Sports Day. We ran and jumped.'). forbidden_overlap lain: TIDAK ada 'because' (cause-effect -- PAT-7-15 bukan target di sini), TIDAK ada elemen konflik naratif ('but then something went wrong'). vocabulary_domain (sports, games, friends, competition) muncul di bahasa target. Ekstensi opsional menggabungkan TIGA aksi lampau dalam satu kalimat ('We ran, jumped, and cheered.') -- menjaga head konektor naratif -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Morning, class! I heard there was a sports event recently." },
      { type: "AKSI", text: "Tanya kelas siapa yang mengikuti atau menonton hari olahraga." },
      // HOOK
      { type: "UCAP", text: "Can you remember the last sports day at school? What did you do?" },
      { type: "AKSI", text: "Tunjukkan kartu foto dari hari olahraga: lomba lari, lompat, sepak bola, penonton bersorak." },
      { type: "UCAP", text: "Look at these sports day photos. What activities can you see?" },
    ],

    active_vocabulary: [
      "and",
      "then",
      "ran",
      "jumped",
      "played",
      "won",
      "cheered",
      "sports",
      "games",
      "friends",
      "competition"
    ],

    model_sentences: [
      { id: "model_1", text: "Last Friday, we had Sports Day." },
      { id: "model_2", text: "We ran and jumped in the games." },
      { id: "model_3", text: "My friends played football and won the competition." },
      { id: "model_4", text: "I cheered and then clapped for my team." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Event photo cards from a school sports day: a running race, a jumping event, a football game, and a cheering crowd.", description_id: "Kartu foto acara dari hari olahraga sekolah: lomba lari, lompat, pertandingan sepak bola, dan penonton bersorak.", asset_id: null },
      { id: "visual_2", description: "Connector cards joining two action icons: 'and' (run + jump) and 'and then' (cheer + clap).", description_id: "Kartu penghubung yang menggabungkan dua ikon tindakan: 'and' (lari + lompat) dan 'and then' (sorak + tepuk tangan).", asset_id: null },
      { id: "visual_3", description: "Past-action icons: ran, jumped, played, won, cheered.", description_id: "Ikon tindakan lampau: ran, jumped, played, won, cheered.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher links two hands together while saying 'and / and then' to show two actions joined in one sentence.", description_id: "Guru menyatukan dua tangan sambil mengucapkan 'and / and then' untuk menunjukkan dua tindakan yang digabung dalam satu kalimat." },
      { id: "gesture_2", description: "Teacher mimes the two past actions one after the other (running, then jumping).", description_id: "Guru memperagakan dua tindakan lampau secara berurutan (berlari, lalu melompat)." },
      { id: "gesture_3", description: "Teacher points back over one shoulder while giving the past time-expression opener.", description_id: "Guru menunjuk ke belakang melewati bahu sambil memberikan ungkapan pembuka waktu lampau." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher connect two past actions under one subject using mid-sentence 'and' / 'and then', after a past time-expression opener.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-13"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the connected-action sentences ('... and ...', '... and then ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Connect two of your own past actions with 'and' or 'and then'.",
      prompt: "Use the pattern 'Subject + past action + and/then + past action', e.g. 'We ran and jumped.' Replace the actions with what you really did at a sports event (ran, jumped, played, won, cheered). Join the two actions inside one sentence -- do not start with 'First,/Then,/Finally,'.",
      change_target: ["first past action", "second past action (and / and then)"],
      differentiation: {
        easy: { task: "Choose two action cards and join them: 'We ___ and ___.' (past verbs)." },
        standard: { task: "Write two sentences, each joining two past actions with 'and' or 'and then' under one subject." },
        challenge: { task: "Start with a past time-expression opener ('Last Friday, we had Sports Day.'), then write two connected-action sentences." }
      },
      support: { pattern_support: ["PAT-7-13"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Retell the order of events at a sports day to a partner using connected past actions.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns retelling what happened at a sports event, joining two actions in each sentence ('We ran and jumped.'). Listen and put your partner's events in order.",
      differentiation: {
        easy: { task: "Tell your partner one connected-action sentence from CHANGE (you may read). Listen to your partner's sentence." },
        standard: { task: "Retell two or three connected-action sentences without reading. Your partner does the same." },
        challenge: { task: "Open with a past time expression, then retell several connected-action sentences in order. Your partner does the same." }
      },
      support: { pattern_support: ["PAT-7-13"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Retell your sports-day timeline to a new group (timeline retelling).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns retelling your sports-day events in order, joining two actions in each sentence ('... and ...', '... and then ...').",
      differentiation: {
        easy: { task: "Retell two connected-action sentences to the new group. You may read them." },
        standard: { task: "Retell your events in order without reading." },
        challenge: { task: "Open with a past time expression and retell your full timeline, then listen and order one classmate's events." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students join two past actions in one sentence with mid-sentence 'and' or 'and then'",
        "students keep it as a narrative recount, not a sentence-initial 'First,/Then,/Finally,' procedure",
        "students still add 'because' (cause-effect) or a conflict twist ('but then something went wrong')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to join three past actions in one sentence.",
        needs_model: "Repeat the MODEL step, emphasizing 'and' / 'and then' joining two past actions inside one sentence.",
        needs_repeat: "Do one more round of REPEAT (choral) on the connected-action sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "joins actions with a procedural 'First,/Then,/Finally,' style instead of mid-sentence 'and/then', or adds 'because'",
        "relies only on the written sentences and cannot retell without reading",
        "joins two past actions with 'and / and then' accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling two past actions joined with 'and' or 'and then' under one subject",
        "model one more connected-action sentence about a different event to show the same pattern still works",
        "for a student who is ready, model ONE sentence joining three past actions first -- 'We ran, jumped, and cheered.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the narrative connector head, with no 'because' or conflict twist"
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
