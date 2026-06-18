const skenario = {
  "persiapan": {
    "papan_tulis": "It has ___ which ___.\nIt can ___ to ___.",
    "kartu": "Siapkan tiga kartu di meja guru — benda atau foto olahraga nyata (bola, helm, raket) dengan ciri-ciri utamanya terlihat jelas, kartu ciri-fungsi (\"It has ___ which ___\" dan \"It can ___ to ___\"), dan kartu ikon yang menunjukkan fungsi (cangkang melindungi kepala, raket memukul bola, bola menggelinding).",
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
        "teks": "Good morning. Before we start, clear your desks."
      },
      {
        "tipe": "AKSI",
        "teks": "Pastikan siswa siap dan tidak ada gangguan di meja."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Can you name one piece of sports equipment you use regularly? What is it made for?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan benda atau foto olahraga: bola, helm, raket — dengan ciri-ciri utamanya terlihat jelas — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these objects. What features help each one do its job?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to connect a feature to what it does, using which and can ... to."
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
          "teks": "Angkat foto helm — sapukan tangan ke arah banyak helm untuk \"Most helmets\"."
        },
        {
          "tipe": "UCAP",
          "teks": "Most helmets have a hard shell."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ciri cangkang keras pada foto helm — satukan kedua tangan untuk \"which\"."
        },
        {
          "tipe": "UCAP",
          "teks": "A helmet has a hard shell which protects the head."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan gesture memukul bola dengan raket sambil tunjuk kartu ikon raket."
        },
        {
          "tipe": "UCAP",
          "teks": "A racket can hit the ball to score points."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk permukaan bola di foto — satukan kedua tangan untuk \"which\"."
        },
        {
          "tipe": "UCAP",
          "teks": "A ball has a smooth surface which helps it roll."
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
              "teks": "Angkat foto helm — sapukan tangan ke arah banyak helm."
            },
            {
              "tipe": "UCAP",
              "teks": "Most helmets have a hard shell."
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
              "teks": "Tunjuk ciri cangkang keras pada foto helm — satukan kedua tangan untuk \"which\"."
            },
            {
              "tipe": "UCAP",
              "teks": "A helmet has a hard shell which protects the head."
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
              "teks": "Peragakan gesture memukul bola dengan raket — tunjuk kartu ikon raket."
            },
            {
              "tipe": "UCAP",
              "teks": "A racket can hit the ball to score points."
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
              "teks": "Tunjuk permukaan bola di foto — satukan kedua tangan untuk \"which\"."
            },
            {
              "tipe": "UCAP",
              "teks": "A ball has a smooth surface which helps it roll."
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
          "teks": "Good. Now it is your turn. Connect a feature to what it does."
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
      "intro": "Siswa menghubungkan ciri peralatan olahraga dengan fungsinya versi sendiri. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan foto olahraga dan kartu ciri-fungsi di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use these patterns. Describe a ball, helmet, or racket. Connect the feature to what it does."
        },
        {
          "tipe": "UCAP",
          "teks": "No instructions like First or Next, no because, and no I like."
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
          "teks": "Jika siswa tidak tahu ciri apa yang akan ditulis — tunjuk foto benda di papan tulis dan minta siswa pilih satu ciri yang terlihat di foto."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk foto helm, dan minta siswa ucapkan \"A helmet has ...\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih satu benda dan lengkapi: \"It has ___ which ___.\" atau \"It can ___ to ___.\"",
        "standar": "Tulis dua kalimat ciri-fungsi tentang benda pilihanmu: satu dengan \"which\" dan satu dengan \"can ... to\".",
        "tantangan": "Mulai dengan pernyataan umum (\"Most helmets have ...\"), lalu hubungkan ciri dengan fungsinya menggunakan \"which\" dan \"can ... to\"."
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
          "teks": "Minta Siswa A memegang foto satu benda dan menjelaskan satu ciri-fungsinya (\"It has ... which ...\" atau \"It can ... to ...\")."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B menunjuk ciri tersebut di foto, lalu tukar peran."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Your turn now. Hold up an object and explain a feature and its function. Your partner points to the feature. Then swap."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk salah satu foto dan tanya \"What feature do you see here?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan kalimatnya sekali lagi tanpa melihat buku."
        }
      ],
      "diferensiasi": {
        "mudah": "Jelaskan satu ciri-fungsi benda pilihanmu (boleh membaca); pasangan menunjuk cirinya di foto. Lalu tukar peran.",
        "standar": "Jelaskan dua ciri-fungsi tanpa membaca; pasangan periksa apakah setiap kalimat menghubungkan ciri dengan fungsi. Lalu tukar peran.",
        "tantangan": "Beri pernyataan umum, lalu dua kalimat ciri-fungsi; pasangan tambahkan satu ciri lagi. Lalu tukar peran."
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
          "teks": "The person I point to presents your object first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns presenting one object's features and functions to the group."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, angkat foto salah satu benda, dan minta ucapkan \"It has ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambah satu kalimat ciri-fungsi yang berbeda untuk benda yang sama."
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
        "mudah": "Presentasikan satu kalimat ciri-fungsi ke kelompok. Boleh membaca.",
        "standar": "Presentasikan dua kalimat ciri-fungsi tanpa membaca.",
        "tantangan": "Presentasikan pernyataan umum dan dua kalimat ciri-fungsi, lalu jawab satu pertanyaan tentang benda pilihanmu."
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
          "teks": "Give me your which sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menghubungkan ciri fisik dengan fungsinya menggunakan \"which\"? Apakah ini fakta ciri-fungsi, bukan instruksi atau opini?"
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
          "teks": "Your can ... to sentence. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan \"can ... to\" sebagai menghubungkan aksi dengan tujuan?"
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
          "teks": "Angkat kembali kartu ciri-fungsi."
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
          "teks": "Angkat kartu ciri-fungsi."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. A helmet has a hard shell which protects the head."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try with a racket or a ball. It has..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk foto benda pilihan siswa — tunggu siswa melengkapi dengan \"which\"."
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi sampai siswa siap mengucapkan kalimat penuh tanpa bantuan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. A helmet has a hard shell which protects the head, and it has soft padding which keeps it comfortable."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Chain two features with which for the same object."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba merangkai dua ciri dalam satu penjelasan."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. You just showed two features doing two different jobs.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan kedua kalimat ciri-fungsi tanpa melihat buku, atau menulis satu kalimat ciri-fungsi untuk benda kedua di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-07.js",
    pattern_id: "PAT-8-07",
    title: "Sports Equipment: Explaining Features and Functions",
    short_title: "Sports Equipment",
    grade: 8,
    genre: "Report",
    cluster: "B",
    topic: "Sports Equipment",
    context: "Students examine everyday sports equipment and explain how different features support their functions.",
    context_id: "Siswa mengamati peralatan olahraga sehari-hari dan menjelaskan bagaimana berbagai ciri mendukung fungsinya.",
    communicative_goal: "connect physical features with practical functions",
    communicative_goal_id: "menghubungkan ciri fisik dengan fungsi praktis",
    vocabulary_domain: ["ball", "helmet", "racket", "protection"],
    input_anchor: "real objects",
    output_anchor: "feature-function presentation",
    prerequisite_patterns: ["PAT-8-06"],
    reusable_in: ["PAT-8-09", "PAT-9-10"],
    complexity_level: "Expand",
    notes: "TP ketujuh Kelas 8, Report, cluster BARU (B -- Explaining Features and Functions). target_pattern PAT-8-07 = 'It has ... which ... / It can ... to ...' (klausa relatif 'which' + infinitive-of-purpose 'to'). Reaktivasi PAT-8-06 (WAJIB, VR-1): 'Most [equipment] have [fitur umum].' (generalisasi) -> 'It has [fitur] which [fungsi]. It can [aksi] to [tujuan].' (menghubungkan fitur SPESIFIK ke fungsinya). forbidden_overlap (procedural instructions, causal explanation, descriptive opinion): BUKAN 'First, put on the helmet...' (PAT-7-09/PAT-8-10), BUKAN 'This happens because...' (itu PAT-8-08, TP BERIKUTNYA -- JANGAN dipakai dulu di sini), BUKAN 'I like this racket because...'. vocabulary_domain (ball, helmet, racket, protection) muncul di bahasa target (protection via 'protects'). Ekstensi opsional merantai dua fitur ('It has X which ..., and it has Y which ...') -- menjaga head fitur-fungsi, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Before we start, clear your desks." },
      { type: "AKSI", text: "Pastikan siswa siap dan tidak ada gangguan di meja." },
      // HOOK
      { type: "UCAP", text: "Can you name one piece of sports equipment you use regularly? What is it made for?" },
      { type: "AKSI", text: "Tampilkan benda atau foto olahraga: bola, helm, raket — dengan ciri-ciri utamanya terlihat jelas." },
      { type: "UCAP", text: "Look at these objects. What features help each one do its job?" },
    ],

    active_vocabulary: [
      "which",
      "can",
      "to",
      "protects",
      "ball",
      "helmet",
      "racket",
      "shell"
    ],

    model_sentences: [
      { id: "model_1", text: "Most helmets have a hard shell." },
      { id: "model_2", text: "A helmet has a hard shell which protects the head." },
      { id: "model_3", text: "A racket can hit the ball to score points." },
      { id: "model_4", text: "A ball has a smooth surface which helps it roll." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Real sports objects or photos: a ball, a helmet, a racket, with their key features visible.", description_id: "Benda atau foto olahraga nyata: bola, helm, raket, dengan ciri-ciri utamanya terlihat jelas.", asset_id: null },
      { id: "visual_2", description: "Feature-function cards: 'It has ___ which ___' and 'It can ___ to ___'.", description_id: "Kartu ciri-fungsi: 'It has ___ which ___' dan 'It can ___ to ___'.", asset_id: null },
      { id: "visual_3", description: "Icons showing functions: a shell protecting a head, a racket hitting a ball, a ball rolling.", description_id: "Ikon yang menunjukkan fungsi: cangkang melindungi kepala, raket memukul bola, bola menggelinding.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to a feature on the object while saying 'It has ... which ...'.", description_id: "Guru menunjuk ciri pada benda sambil mengucapkan 'It has ... which ...'." },
      { id: "gesture_2", description: "Teacher mimes the action (hitting, protecting) while saying 'It can ... to ...'.", description_id: "Guru memperagakan tindakannya (memukul, melindungi) sambil mengucapkan 'It can ... to ...'." },
      { id: "gesture_3", description: "Teacher links a feature to its function by joining two hands while saying 'which' / 'to'.", description_id: "Guru menghubungkan ciri dengan fungsinya dengan menyatukan kedua tangan sambil mengucapkan 'which' / 'to'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher connect a feature to its function with 'It has ... which ...' and 'It can ... to ...', after a general statement about the equipment.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-06"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the feature-function sentences ('It has ... which ...' / 'It can ... to ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Connect a feature of sports equipment to its function.",
      prompt: "Use the patterns 'It has [feature] which [function].' and 'It can [action] to [purpose].' Describe a ball, helmet, or racket. Connect the feature to what it does -- do not give instructions ('First, ...'), do not use 'because', and do not say 'I like ...'.",
      change_target: ["feature (It has ... which ...)", "function (It can ... to ...)"],
      differentiation: {
        easy: { task: "Choose an object and complete: 'It has ___ which ___.' or 'It can ___ to ___.'" },
        standard: { task: "Write two feature-function sentences about your object, one with 'which' and one with 'can ... to'." },
        challenge: { task: "Start with a general statement ('Most helmets have ...'), then connect a feature to its function with 'which' and 'can ... to'." }
      },
      support: { pattern_support: ["PAT-8-06"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Explain features and functions of equipment with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: hold up an object and explain one feature and its function ('It has ... which ...' / 'It can ... to ...'). Your partner points to the feature. Then swap.",
      differentiation: {
        easy: { task: "Explain one feature-function of your object (you may read); your partner points to the feature. Then swap." },
        standard: { task: "Explain two features and functions without reading; your partner checks each links a feature to a function. Then swap." },
        challenge: { task: "Give a general statement, then two feature-function sentences; your partner adds one more feature. Then swap." }
      },
      support: { pattern_support: ["PAT-8-06"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present features and functions of an object to a new group (feature-function presentation).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting one object's features and functions ('It has ... which ...' / 'It can ... to ...').",
      differentiation: {
        easy: { task: "Present one feature-function of your object. You may read it." },
        standard: { task: "Present two feature-function sentences without reading." },
        challenge: { task: "Present a general statement and two feature-function sentences, then answer one question about the object." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students connect a feature to a function with 'It has ... which ...' and 'It can ... to ...'",
        "students keep it a factual feature-function link, not an instruction, a 'because' explanation, or an opinion",
        "students still say 'First, do ...', add 'because ...', or say 'I like ...' instead of linking feature and function"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to chain two features in one explanation.",
        needs_model: "Repeat the MODEL step, emphasizing 'which' (relative clause) and 'can ... to' (purpose) to link feature and function.",
        needs_repeat: "Do one more round of REPEAT (choral) on the feature-function sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives an instruction or an opinion instead of linking a feature to a function",
        "relies only on the written sentences and cannot explain without reading",
        "connects features and functions with 'which' and 'can ... to' accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling 'It has [feature] which [function]' and 'It can [action] to [purpose]'",
        "model one more feature-function for a different object to show the same pattern still works",
        "for a student who is ready, model ONE explanation that chains two features first -- 'A helmet has a hard shell which protects the head, and it has soft padding which keeps it comfortable.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the feature-function head, with no instruction, 'because', or opinion"
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
