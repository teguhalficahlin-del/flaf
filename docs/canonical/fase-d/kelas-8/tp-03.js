const skenario = {
  "persiapan": {
    "papan_tulis": "How about ___?\nWe could ___.\nThat's a good idea, but ___.",
    "kartu": "Siapkan tiga kartu di meja guru — papan rencana dengan ide bakti sosial di kertas tempel (jualan buku, jualan jajanan, poster), kartu negosiasi (\"How about ...?\" / \"We could ...\" / \"That's a good idea, but ...\"), dan kartu ikon bakti sosial (toples penggalangan dana, relawan, poster).",
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
        "teks": "Good morning. I need your full attention today."
      },
      {
        "tipe": "AKSI",
        "teks": "Tanya kelas apakah sudah siap berdiskusi — tunggu respons singkat sebelum melanjutkan."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Imagine your class wants to do something good for the community. What idea comes to mind?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa."
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan papan rencana dengan ide bakti sosial di kertas tempel — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this planning board. Which of these charity ideas do you think is best?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to suggest ideas and respond to them as a team."
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
          "teks": "Angkat kartu negosiasi — buka tangan dalam gestur menawarkan sambil tunjuk papan rencana."
        },
        {
          "tipe": "UCAP",
          "teks": "I'd rather do a book sale than a car wash. How about a book sale for charity?"
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu — angkat kartu ikon bakti sosial. Kembali buka tangan dalam gestur menawarkan."
        },
        {
          "tipe": "UCAP",
          "teks": "We could sell snacks for fundraising."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat kartu negosiasi kembali — angguk (ide bagus), lalu angkat satu jari (tetapi)."
        },
        {
          "tipe": "UCAP",
          "teks": "That's a good idea, but we need more helpers."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka tangan dalam gestur menawarkan, lalu beri gestur ke seluruh kelompok dan papan."
        },
        {
          "tipe": "UCAP",
          "teks": "How about asking the community to join? We could plan it together."
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
              "teks": "Angkat kartu negosiasi — peragakan gesture buka tangan menawarkan, tunjuk papan rencana."
            },
            {
              "tipe": "UCAP",
              "teks": "I'd rather do a book sale than a car wash. How about a book sale for charity?"
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
              "teks": "Angkat kartu ikon — peragakan gesture buka tangan menawarkan."
            },
            {
              "tipe": "UCAP",
              "teks": "We could sell snacks for fundraising."
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
              "teks": "Angkat kartu negosiasi — peragakan gesture angguk lalu angkat satu jari."
            },
            {
              "tipe": "UCAP",
              "teks": "That's a good idea, but we need more helpers."
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
              "teks": "Peragakan gesture buka tangan menawarkan, lalu gestur ke seluruh kelompok dan papan."
            },
            {
              "tipe": "UCAP",
              "teks": "How about asking the community to join? We could plan it together."
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
          "teks": "Good. Now it is your turn. Write your own suggestions."
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
      "intro": "Siswa mengganti ide dengan saran sendiri untuk proyek bakti sosial. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan papan rencana dan kartu negosiasi di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use these patterns. Write your own charity project suggestions."
        },
        {
          "tipe": "UCAP",
          "teks": "Keep it open and collaborative, a suggestion, not a command."
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
          "teks": "Stop writing. Now form a group of three or four."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu ide apa yang akan ditulis — tunjuk papan rencana di papan tulis dan minta siswa pilih salah satu kertas tempel sebagai ide awal."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk ide pertama di papan rencana, dan minta siswa ucapkan \"How about a book sale?\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih satu ide dari papan rencana dan lengkapi satu kalimat: \"How about ___?\" atau \"We could ___.\"",
        "standar": "Tulis dua saran (satu \"How about ...?\", satu \"We could ...\") dan satu respons \"That's a good idea, but ...\"",
        "tantangan": "Ubah preferensi pribadi menjadi usulan (\"I'd rather do X than Y. How about X?\"), lalu respons terhadap satu ide teman dengan \"That's a good idea, but ...\""
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
          "teks": "Watch first. Then you do the same."
        },
        {
          "tipe": "AKSI",
          "teks": "Demonstrasikan bersama satu siswa: satu orang menyarankan (\"How about ...?\"), yang lain merespons (\"That's a good idea, but ...\"), lalu menyarankan ide lain."
        },
        {
          "tipe": "UCAP",
          "teks": "In your group, take turns suggesting and responding. Work together to improve the plan."
        },
        {
          "tipe": "UCAP",
          "teks": "Use these phrases, How about, We could, and That's a good idea, but."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk negosiasi kelompok."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — amati apakah setiap anggota sudah menyarankan setidaknya satu ide."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now each group will join a new group to share their plan."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok diam lebih dari sepuluh detik — tunjuk salah satu kertas tempel di papan rencana dan tanya \"How about this one?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika anggota kelompok berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum melanjutkan."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa mendominasi seluruh saran — tunjuk siswa lain dan minta mereka menyarankan ide berikutnya."
        }
      ],
      "diferensiasi": {
        "mudah": "Buat satu saran ke kelompok (\"How about ...?\" atau \"We could ...\"); satu teman respons dengan \"That's a good idea, but ...\"",
        "standar": "Sarankan dan respons tanpa membaca buku sehingga kelompok memperbaiki rencana dengan setidaknya dua ide.",
        "tantangan": "Ubah preferensi jadi usulan, respons ide teman dengan \"That's a good idea, but ...\", dan bantu bentuk satu rencana bersama."
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
          "teks": "The person I point to starts first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns suggesting and responding in your new group. Negotiate a charity plan together."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk negosiasi kelompok baru."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — pastikan tidak ada anggota kelompok yang diam terus selama sesi."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"How about...\" lalu nama salah satu ide dari papan rencana."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa sarankan ide lain dengan \"We could ...\""
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
        "mudah": "Buat satu saran ke kelompok baru; satu teman respons dengan \"That's a good idea, but ...\"",
        "standar": "Sarankan dan respons tanpa membaca buku untuk membentuk rencana bersama kelompok baru.",
        "tantangan": "Pimpin negosiasi singkat: buat usulan, respons dua ide dengan caveat, dan sarankan satu rencana yang lebih baik."
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
          "teks": "Give me one suggestion for the charity project. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan saran."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan \"How about ...?\" atau \"We could ...\" sebagai saran terbuka, bukan perintah?"
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
          "teks": "Now respond to that idea. Use the phrase on the board."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa merespons dengan \"That's a good idea, but ...\""
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa dapat merespons dengan caveat yang wajar, atau hanya mengatakan \"yes\" atau \"no\"?"
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
          "teks": "Angkat kembali kartu negosiasi."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan kalimat kedua dan ketiga sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Angkat kartu negosiasi."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. How about a book sale for charity?"
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try with a different idea. How about..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kertas tempel lain di papan rencana — tunggu siswa melengkapi."
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi sampai siswa dapat membuat saran sendiri tanpa membaca."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. That's a good idea, but how about a snack sale instead?"
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Respond to an idea with a counter-suggestion."
        },
        {
          "tipe": "AKSI",
          "teks": "Sarankan satu ide — tunggu siswa merespons dengan \"That's a good idea, but how about ...?\""
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. That is how you keep negotiating.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan satu saran dan satu respons tanpa melihat buku, atau menambah satu ide ke rencana di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-03.js",
    pattern_id: "PAT-8-03",
    title: "Class Charity Project: Negotiating Plans",
    short_title: "Charity Project",
    grade: 8,
    genre: "Interpersonal",
    cluster: "B",
    topic: "Class Charity Project",
    context: "Students discuss different ideas for a class charity activity and negotiate a shared plan.",
    context_id: "Siswa mendiskusikan berbagai ide untuk kegiatan bakti sosial kelas dan menegosiasikan rencana bersama.",
    communicative_goal: "propose, modify, and negotiate ideas collaboratively",
    communicative_goal_id: "mengusulkan, mengubah, dan menegosiasikan ide secara kolaboratif",
    vocabulary_domain: ["charity", "fundraising", "community", "planning"],
    input_anchor: "planning board",
    output_anchor: "group negotiation",
    prerequisite_patterns: ["PAT-8-02"],
    reusable_in: ["PAT-8-16", "PAT-9-15"],
    complexity_level: "Expand",
    notes: "TP ketiga Kelas 8, Interpersonal, cluster BARU (B -- Negotiating Plans), Expand. target_pattern PAT-8-03 = 'How about ...? / We could ... / That's a good idea, but ...' (tiga sub-bentuk: saran-pertanyaan, saran-pernyataan, respons mengakui + caveat). Reaktivasi PAT-8-02 (WAJIB, VR-1): 'I prefer.../I'd rather...than...' di-reframe dari preferensi pribadi menjadi USULAN ke kelompok ('I'd rather do a book sale than a car wash. How about a book sale for charity?'). BONUS reaktivasi (non-wajib VR-1): 'That's a good idea, but ...' sejajar dengan 'That's true.' (PAT-7-04, bahasa kelas reusable, precedent TP-16/24/25) -- kata sifat berbeda ('good idea' vs 'true'). forbidden_overlap (giving procedures, direct commands, argumentative persuasion): saran WAJIB tetap NEGOSIASI KOLABORATIF (terbuka dimodifikasi/ditolak dengan caveat) -- BUKAN instruksi tahap-demi-tahap (PAT-7-09/PAT-8-10 'First,/Then,'), BUKAN imperatif langsung (PAT-7-11/17 'Don't.../Please...'), BUKAN persuasi formal (wilayah PAT-8-13). vocabulary_domain (charity, fundraising, community, planning) muncul di bahasa target (planning via 'plan'). Ekstensi opsional merantai respons menjadi usulan-tandingan ('That's a good idea, but how about ...?') -- menjaga head negosiasi, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. I need your full attention today." },
      { type: "AKSI", text: "Tanya kelas apakah sudah siap berdiskusi." },
      // HOOK
      { type: "UCAP", text: "Imagine your class wants to do something good for the community. What idea comes to mind?" },
      { type: "AKSI", text: "Tampilkan papan rencana dengan ide bakti sosial di kertas tempel: jualan buku, jajanan, poster." },
      { type: "UCAP", text: "Look at this planning board. Which of these charity ideas do you think is best?" },
    ],

    active_vocabulary: [
      "How about",
      "We could",
      "That's a good idea, but",
      "charity",
      "fundraising",
      "community",
      "plan"
    ],

    model_sentences: [
      { id: "model_1", text: "I'd rather do a book sale than a car wash. How about a book sale for charity?" },
      { id: "model_2", text: "We could sell snacks for fundraising." },
      { id: "model_3", text: "That's a good idea, but we need more helpers." },
      { id: "model_4", text: "How about asking the community to join? We could plan it together." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A planning board with class charity ideas (book sale, snack sale, posters) on sticky notes.", description_id: "Papan rencana dengan ide bakti sosial kelas (jualan buku, jualan jajanan, poster) di kertas tempel.", asset_id: null },
      { id: "visual_2", description: "Negotiation cards: 'How about ...?', 'We could ...', 'That's a good idea, but ...'.", description_id: "Kartu negosiasi: 'How about ...?', 'We could ...', 'That's a good idea, but ...'.", asset_id: null },
      { id: "visual_3", description: "Charity and community icons: a fundraising jar, helpers, and posters.", description_id: "Ikon bakti sosial dan komunitas: toples penggalangan dana, relawan, dan poster.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher opens a hand in an offering gesture while saying 'How about ...?' / 'We could ...' to suggest an idea.", description_id: "Guru membuka tangan dalam gestur menawarkan sambil mengucapkan 'How about ...?' / 'We could ...' untuk mengusulkan ide." },
      { id: "gesture_2", description: "Teacher nods (good idea), then raises one finger (but) while saying 'That's a good idea, but ...'.", description_id: "Guru mengangguk (ide bagus), lalu mengangkat satu jari (tetapi) sambil mengucapkan 'That's a good idea, but ...'." },
      { id: "gesture_3", description: "Teacher gestures to the whole group and the board to show collaborative planning.", description_id: "Guru memberi gestur ke seluruh kelompok dan papan untuk menunjukkan perencanaan kolaboratif." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher propose ideas for a charity plan with 'How about ...?' and 'We could ...', and respond to an idea with 'That's a good idea, but ...', turning a preference into a proposal.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-02"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the negotiation sentences ('How about ...?' / 'We could ...' / 'That's a good idea, but ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Make and respond to your own charity-plan suggestions.",
      prompt: "Use the patterns 'How about [idea]?', 'We could [idea].', and 'That's a good idea, but [caveat].' Suggest ideas for the class charity project (charity, fundraising, community, plan). Keep it open and collaborative -- a suggestion, not a command or a step-by-step procedure.",
      change_target: ["suggestion (How about ...? / We could ...)", "response (That's a good idea, but ...)"],
      differentiation: {
        easy: { task: "Choose a charity idea and complete one suggestion: 'How about ___?' or 'We could ___.'" },
        standard: { task: "Write two suggestions (one 'How about ...?', one 'We could ...') and one response 'That's a good idea, but ...'." },
        challenge: { task: "Turn a preference into a proposal ('I'd rather do X than Y. How about X?'), then respond to a classmate's idea with 'That's a good idea, but ...'." }
      },
      support: { pattern_support: ["PAT-8-02"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Negotiate a charity plan together in a small group (group negotiation).",
      interaction_mode: "small_group",
      task: "In a group of 3-4, take turns suggesting charity ideas ('How about ...?' / 'We could ...'). Respond to each idea with 'That's a good idea, but ...' and try to improve the plan together.",
      differentiation: {
        easy: { task: "Make one suggestion to the group ('How about ...?' / 'We could ...'); a classmate responds with 'That's a good idea, but ...'." },
        standard: { task: "Suggest and respond without reading, so the group improves the plan with at least two ideas." },
        challenge: { task: "Turn your preference into a proposal, respond to others with 'That's a good idea, but ...', and help shape one shared plan." }
      },
      support: { pattern_support: ["PAT-8-02"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Negotiate a charity plan with a new group (group negotiation).",
      share_mode: "short_dialogue",
      task: "Form a new group of 4 with classmates from other groups. Take turns suggesting and responding ('How about ...?' / 'We could ...' / 'That's a good idea, but ...') to negotiate a charity plan.",
      differentiation: {
        easy: { task: "Make one suggestion to the new group; a classmate responds with 'That's a good idea, but ...'." },
        standard: { task: "Suggest and respond without reading to shape a plan with the new group." },
        challenge: { task: "Lead a short negotiation: make a proposal, respond to two ideas with caveats, and suggest one improved plan." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students make suggestions with 'How about ...?' and 'We could ...' and respond with 'That's a good idea, but ...'",
        "students keep suggestions open and collaborative (able to be changed), not commands or step-by-step procedures",
        "students still give direct commands ('Do this'), use 'First,/Then,' procedures, or try to persuade formally"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to answer a caveat with a counter-suggestion.",
        needs_model: "Repeat the MODEL step, emphasizing 'How about ...?' / 'We could ...' as open suggestions and 'That's a good idea, but ...' as a response.",
        needs_repeat: "Do one more round of REPEAT (choral) on the negotiation sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "turns a suggestion into a command or a step-by-step procedure, or only states a preference without proposing",
        "relies only on the written sentences and cannot negotiate without reading",
        "suggests and responds collaboratively with 'How about ...? / We could ... / That's a good idea, but ...' accurately and confidently"
      ],
      action: [
        "recast the suggestion slowly, modeling 'How about ...?' / 'We could ...' as open ideas the group can change",
        "model one more suggestion for a different plan to show the same pattern still works",
        "for a student who is ready, model ONE response that adds a counter-suggestion first -- 'That's a good idea, but how about a snack sale instead?' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the collaborative negotiation head, not a command or a procedure"
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
