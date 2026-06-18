const skenario = {
  "persiapan": {
    "papan_tulis": "The firefly was lost in the dark forest.\nSo, (characters helped).\nThen, (action) and (action).\nFinally, (the problem is solved).",
    "kartu": "Siapkan tiga set kartu di meja guru — papan cerita penyelesaian (kelinci dan burung menemukan firefly, kelinci menunjukkan jalan, burung terbang di depan, firefly tiba di rumah), kartu penghubung So Then and Finally, dan gambar karakter kelinci, burung, dan firefly menuju rumah saat subuh.",
    "instruksi": []
  },
  "siapkan_kelas": {
    "settling": [
      {
        "tipe": "AKSI",
        "teks": "Berdiri di depan kelas."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu sampai semua siswa duduk dan tenang."
      },
      {
        "tipe": "UCAP",
        "teks": "Good morning. Are you ready to find out how the story ends?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons siswa."
      }
    ],
    "hook": [
      {
        "tipe": "AKSI",
        "teks": "Tanya kelas satu pertanyaan recap — sambil menunjuk papan tulis."
      },
      {
        "tipe": "UCAP",
        "teks": "Last time, the firefly was lost in the dark forest. Who do you think could help it?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk kata rabbit dan bird di papan cerita dan tanya: Can these animals help?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan papan cerita penyelesaian — tunjukkan seluruh urutan gambar satu per satu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this story board. Who helped the little firefly get home?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa — cukup dua atau tiga kalimat sederhana."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — letakkan papan cerita di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Let us see exactly how they helped."
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
          "teks": "Ambil papan cerita — tunjuk gambar firefly sendirian di hutan gelap."
        },
        {
          "tipe": "UCAP",
          "teks": "The firefly was lost in the dark forest."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kalimat pertama di papan tulis."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk gambar kelinci dan burung menemukan firefly — lalu peragakan gesture satu tangan mengarah ke tangan lainnya."
        },
        {
          "tipe": "UCAP",
          "teks": "So, a rabbit and a bird helped the little firefly."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola So di papan tulis — tekankan bahwa So muncul karena ada masalah sebelumnya."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk gambar kelinci menunjukkan jalan dan burung terbang di depan — peragakan dua gesture terhubung."
        },
        {
          "tipe": "UCAP",
          "teks": "Then, the rabbit showed the way and the bird flew ahead."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola Then and di papan tulis — tunjukkan dua aksi terhubung."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk gambar firefly tiba di rumah saat subuh — satukan kedua tangan perlahan."
        },
        {
          "tipe": "UCAP",
          "teks": "Finally, the firefly found the way home before sunrise."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kata Finally di papan tulis."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan papan cerita."
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
          "teks": "Jika siswa mulai ikut berbicara sebelum waktunya — angkat telapak tangan ke arah mereka dan ucapkan: Just watch first."
        }
      ],
      "diferensiasi": null
    },
    "repeat": {
      "durasi_menit": 5,
      "intro": "Guru mengucapkan satu kalimat — siswa menirukan bersama. Papan cerita dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Kalimat 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk gambar firefly di hutan gelap."
            },
            {
              "tipe": "UCAP",
              "teks": "The firefly was lost in the dark forest."
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
              "teks": "Tunjuk gambar kelinci dan burung — peragakan gesture satu tangan ke tangan lainnya."
            },
            {
              "tipe": "UCAP",
              "teks": "So, a rabbit and a bird helped the little firefly."
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
              "teks": "Tunjuk gambar dua aksi terhubung — peragakan gesture kelinci menunjukkan jalan lalu burung terbang."
            },
            {
              "tipe": "UCAP",
              "teks": "Then, the rabbit showed the way and the bird flew ahead."
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
              "teks": "Tunjuk gambar firefly di rumah — satukan kedua tangan perlahan."
            },
            {
              "tipe": "UCAP",
              "teks": "Finally, the firefly found the way home before sunrise."
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
          "teks": "Good. Now it is your turn. Write the resolution."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk pola di papan tulis dan minta siswa menyalin di buku catatan sebelum melanjutkan. Beri waktu dua menit untuk menyalin, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi empat menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa membangun penyelesaian cerita sendiri menggunakan pola di papan tulis. Dikerjakan secara individual, ditulis di buku catatan. Ingatkan: ini adalah cerita masa lalu dengan karakter — bukan instruksi untuk diikuti.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan papan cerita di papan tulis di sebelah pola — biarkan terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this pattern. Write a resolution. Use past tense with characters."
        },
        {
          "tipe": "UCAP",
          "teks": "So, someone helped. Then, two actions. Finally, the problem is solved."
        },
        {
          "tipe": "UCAP",
          "teks": "This is a story, not instructions. Use the characters: the rabbit, the bird."
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
          "teks": "Stop writing. Now get into groups of three or four."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa menulis dalam present tense atau menulis instruksi seperti First, go to the forest — tunjuk kalimat model di papan tulis, tunjuk kata showed dan flew, dan ucapkan: Past tense. Characters. Not you. Try again."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu nama aksi yang dilakukan karakter — tunjuk papan cerita dan gambarkan aksinya: the rabbit showed the way, the bird flew ahead."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk baris kedua di papan tulis, dan minta siswa ucapkan: So, a rabbit helped. Tunggu siswa menuliskan itu dulu sebelum melanjutkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Lengkapi dua kalimat: So, the ___ helped the firefly. Finally, the firefly ___.",
        "standar": "Tulis penyelesaian lengkap: So, ... Then, ... and ... Finally, ... dalam past tense dengan karakter yang membantu.",
        "tantangan": "Mulai dengan recap masalah: The firefly was lost in the dark forest. Lalu tulis penyelesaian lengkap milikmu sendiri."
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Guru menentukan kelompok tiga atau empat — tunjuk siswa yang duduk berdekatan. Tiap anggota bergantian menambahkan satu bagian penyelesaian secara bersambung.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk empat siswa yang duduk berdekatan sebagai contoh — minta mereka berdiri sebentar."
        },
        {
          "tipe": "UCAP",
          "teks": "Watch first. Then your group does the same."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa A mengucapkan: So, ..."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B melanjutkan: Then, ... and ..."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa C mengucapkan: Finally, ..."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta ketiganya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Build the resolution together. Each person adds one part."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen so the events connect and solve the firefly's problem."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk seluruh kelompok membangun cerita bersama."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati beberapa kelompok dan pastikan sebagian besar siswa sudah mulai berbicara."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now form a new group of four with classmates from other groups."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok diam lebih dari sepuluh detik — tunjuk pola So di papan tulis dan ucapkan: Start here. So, who helped?"
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok berbicara Bahasa Indonesia — tunjuk pola di papan tulis dan ucapkan: In English. Use this. Tunggu kelompok mengulang dalam Bahasa Inggris sebelum berpindah ke kelompok lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa mendominasi dan anggota lain tidak berbicara — tunjuk anggota yang diam dan ucapkan: Your turn. Which part is yours?"
        }
      ],
      "diferensiasi": {
        "mudah": "Tambahkan satu kalimat penyelesaian ke cerita kelompok. Boleh membaca dari buku catatan. Contoh: So, the rabbit helped the firefly.",
        "standar": "Tambahkan dua kalimat penyelesaian yang saling terhubung tanpa membaca — sehingga masalah terselesaikan.",
        "tantangan": "Recap masalah dulu, lalu bangun penyelesaian lengkap bersama kelompok — pastikan setiap bagian merespons masalah dari sesi sebelumnya."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Setiap kelompok bergabung dengan kelompok lain yang belum pernah bekerja sama — membentuk kelompok empat orang baru.",
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
          "teks": "Take turns telling the resolution. So, ... Then, ... and ... Finally, ..."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen and check: does the resolution solve the firefly's problem?"
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan ucapkan: Your turn. Say: So, ... Jika masih diam — ucapkan So, a rabbit dan tunggu siswa melanjutkan."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan penyelesaian sekali lagi tanpa melihat buku."
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
        "mudah": "Ucapkan dua kalimat penyelesaian ke kelompok baru. Boleh membaca dari buku catatan.",
        "standar": "Ucapkan penyelesaian lengkap tanpa membaca — sehingga peristiwa terhubung dan masalah terselesaikan.",
        "tantangan": "Ucapkan masalah dan penyelesaian lengkap, lalu periksa apakah penyelesaian satu teman benar-benar menjawab masalah."
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
          "teks": "Say your So sentence. Who helped and what did they do?"
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan past tense dengan karakter eksplisit, atau masih menggunakan present tense atau instruksi?"
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
          "teks": "Your Finally sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menyebutkan penyelesaian yang merespons masalah, atau hanya urutan kegiatan netral?"
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
          "teks": "Angkat kembali papan cerita dan kartu penghubung."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan kalimat dua, tiga, dan empat sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu seluruh kelas mengucapkan bersama."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta siswa buka buku catatan — perbaiki kalimat penyelesaian yang belum selesai. Beri waktu dua menit."
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
          "teks": "Tunjuk papan cerita — arahkan ke gambar So."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. So, a rabbit and a bird helped the little firefly."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk gambar Then."
        },
        {
          "tipe": "UCAP",
          "teks": "Then, the rabbit showed the way and the bird flew ahead."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta siswa coba dengan kalimatnya sendiri — satu kalimat dulu, jangan minta seluruh penyelesaian sekaligus."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "You connected two actions very well. Listen to one more."
        },
        {
          "tipe": "UCAP",
          "teks": "Then, the rabbit showed the way, the bird flew ahead, and they all glowed together."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Try one. Connect three helping actions in your Then sentence. Just one sentence."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan: Good. Three actions, one sentence."
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan kalimat penyelesaian sekali lagi tanpa melihat buku, atau menulis satu kalimat tambahan tentang bagaimana rasanya saat firefly akhirnya menemukan jalan pulang."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-23.js",
    pattern_id: "PAT-7-23",
    title: "The Lost Firefly: Solving the Story",
    short_title: "Firefly Solution",
    grade: 7,
    genre: "Narrative",
    cluster: "B",
    topic: "The Lost Firefly",
    context: "Other small animals work together to help the firefly return home before sunrise.",
    context_id: "Hewan-hewan kecil lainnya bekerja sama membantu kunang-kunang itu pulang sebelum matahari terbit.",
    communicative_goal: "connect events to build a simple resolution",
    communicative_goal_id: "menghubungkan peristiwa untuk membangun penyelesaian sederhana",
    vocabulary_domain: ["help", "rabbit", "bird", "home"],
    input_anchor: "story board",
    output_anchor: "group storytelling",
    prerequisite_patterns: ["PAT-7-22"],
    reusable_in: ["PAT-8-19", "PAT-9-17"],
    complexity_level: "Acquire",
    notes: "TP kedua puluh tiga Fase D, Narrative. Babak 3 (RESOLUSI) dari cerita berkelanjutan 'The Lost Firefly'. target_pattern PAT-7-23 = 'So, ... / Then, ... and ... / Finally, ...' (past tense). Babak 3 (sesuai alur): 'So, ...' = rabbit & bird mendengar firefly tersesat lalu MEMBANTU (respons terhadap konflik TP-22); 'Then, ... and ...' = rabbit menunjukkan jalan DAN bird terbang memandu (dua aksi resolusi terhubung); 'Finally, ...' = firefly menemukan jalan pulang sebelum matahari terbit. DISTINGSI KRITIS (overlap permukaan): 'Then,/Finally,' di sini BERPERMUKAAN SAMA dengan PAT-7-09, TAPI (a) PAT-7-09 = present-tense IMPERATIF (instruksi untuk diikuti), sedangkan PAT-7-23 = PAST-TENSE NARATIF dengan subjek eksplisit ('Then, the rabbit showed ... and the bird flew ...') yang SPESIFIK MERESOLUSI konflik TP-22; (b) BUKAN PAT-7-14 ('and/then' recount TANPA konflik) -- di sini 'and' menghubungkan aksi-aksi RESOLUSI yang merespons konflik, bukan urutan kegiatan netral. Distingsi ini ditegaskan di CHECK. PAT-7-22 ('One day,...but.../Suddenly,...') sebagai support: recap konflik singkat sebelum resolusi ('The firefly was lost in the dark forest. So, ...'). vocabulary_domain (help, rabbit, bird, home) muncul di bahasa target. Ekstensi opsional menggabungkan tiga aksi resolusi dalam 'Then, ... , ... and ...' -- menjaga head konektor resolusi, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning! Are you ready to find out how the story ends?" },
      { type: "AKSI", text: "Tanya kelas apakah mereka ingat masalah yang dialami kunang-kunang." },
      // HOOK
      { type: "UCAP", text: "The little firefly was lost in the dark forest. Who do you think could help it?" },
      { type: "AKSI", text: "Tampilkan papan cerita penyelesaian: kelinci dan burung menemukan kunang-kunang, menunjukkan jalan, kunang-kunang tiba di rumah." },
      { type: "UCAP", text: "Look at this story board. Who helped the little firefly get home?" },
    ],

    active_vocabulary: [
      "So,",
      "Then,",
      "Finally,",
      "and",
      "helped",
      "rabbit",
      "bird",
      "home"
    ],

    model_sentences: [
      { id: "model_1", text: "The firefly was lost in the dark forest." },
      { id: "model_2", text: "So, a rabbit and a bird helped the little firefly." },
      { id: "model_3", text: "Then, the rabbit showed the way and the bird flew ahead." },
      { id: "model_4", text: "Finally, the firefly found the way home before sunrise." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A story board of the resolution: a rabbit and a bird finding the lost firefly, the rabbit showing the way, the bird flying ahead, and the firefly reaching home at dawn.", description_id: "Papan cerita penyelesaian: kelinci dan burung menemukan kunang-kunang yang tersesat, kelinci menunjukkan jalan, burung terbang di depan, dan kunang-kunang tiba di rumah saat subuh.", asset_id: null },
      { id: "visual_2", description: "Resolution connector cards: 'So,' (problem leads to help), 'Then, ... and ...' (two helping actions), 'Finally,' (home).", description_id: "Kartu penghubung penyelesaian: 'So,' (masalah mengarah ke bantuan), 'Then, ... and ...' (dua tindakan menolong), 'Finally,' (rumah).", asset_id: null },
      { id: "visual_3", description: "The characters helping together: rabbit, bird, and firefly heading home before sunrise.", description_id: "Para tokoh saling membantu: kelinci, burung, dan kunang-kunang menuju rumah sebelum matahari terbit.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher leads one hand into the other (a 'this led to that' motion) while saying 'So, ...'.", description_id: "Guru mengarahkan satu tangan ke tangan lainnya (gerakan 'ini menyebabkan itu') sambil mengucapkan 'So, ...'." },
      { id: "gesture_2", description: "Teacher shows two linked helping actions (rabbit showing the way, bird flying) while saying 'Then, ... and ...'.", description_id: "Guru menunjukkan dua tindakan menolong yang terhubung (kelinci menunjukkan jalan, burung terbang) sambil mengucapkan 'Then, ... and ...'." },
      { id: "gesture_3", description: "Teacher brings both hands to a resolved close while saying 'Finally, ...' (home).", description_id: "Guru menyatukan kedua tangan sebagai penutup yang terselesaikan sambil mengucapkan 'Finally, ...' (rumah)." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher resolve the story problem with 'So, ... / Then, ... and ... / Finally, ...' in past tense, with characters helping the firefly.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-22"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the resolution sentences ('So, ... / Then, ... and ... / Finally, ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Build your own resolution using 'So, ... / Then, ... and ... / Finally, ...'.",
      prompt: "Use the patterns 'So, [characters helped].', 'Then, [action] and [action].', and 'Finally, [the problem is solved].' Resolve the firefly's problem (help, rabbit, bird, home). Use past tense with characters (the rabbit, the bird) -- this is a story, not an instruction to follow.",
      change_target: ["help response (So, ...)", "connected actions (Then, ... and ...)", "ending (Finally, ...)"],
      differentiation: {
        easy: { task: "Complete: 'So, the ___ helped the firefly. Finally, the firefly ___.'" },
        standard: { task: "Write a resolution: 'So, ... Then, ... and ... Finally, ...' in past tense, with characters helping." },
        challenge: { task: "Recap the problem ('The firefly was lost in the dark forest.'), then write your full resolution." }
      },
      support: { pattern_support: ["PAT-7-22"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Build the resolution of the story together in a small group (group storytelling).",
      interaction_mode: "small_group",
      task: "In a group of 3-4, build the resolution together. Take turns adding one part: 'So, ...', then 'Then, ... and ...', then 'Finally, ...' Listen so the events connect and solve the firefly's problem.",
      differentiation: {
        easy: { task: "Add one resolution sentence to the group's story (you may read), e.g. 'So, the rabbit helped the firefly.'" },
        standard: { task: "Add two connected resolution sentences without reading, so they solve the problem." },
        challenge: { task: "Recap the problem, then build the full resolution with your group, checking that each event responds to the problem." }
      },
      support: { pattern_support: ["PAT-7-22"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Tell the resolution of the story to a new group (group storytelling).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns telling the resolution using 'So, ... / Then, ... and ... / Finally, ...'.",
      differentiation: {
        easy: { task: "Tell the new group two resolution sentences. You may read them." },
        standard: { task: "Tell the resolution without reading, so the events connect and solve the problem." },
        challenge: { task: "Tell the problem and the full resolution, then check that a classmate's resolution answers the problem." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students resolve the problem with 'So, ... / Then, ... and ... / Finally, ...' in past tense, with explicit characters",
        "students use these as past-tense story events that respond to the conflict, not present-tense instructions to follow (procedure)",
        "students still tell a neutral list of activities without solving the problem (recount without conflict), or switch to imperatives"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to connect three helping actions in one 'Then, ...' sentence.",
        needs_model: "Repeat the MODEL step, emphasizing past-tense events with characters that solve the problem (not instructions).",
        needs_repeat: "Do one more round of REPEAT (choral) on the resolution sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "turns the resolution into present-tense instructions, or lists neutral activities that do not solve the problem",
        "relies only on the written resolution and cannot tell it without reading",
        "resolves the problem with 'So, ... / Then, ... and ... / Finally, ...' accurately and confidently"
      ],
      action: [
        "recast the events slowly as past-tense story actions with characters that solve the problem",
        "model one more resolution for a different story to show the same pattern still works",
        "for a student who is ready, model ONE sentence connecting three helping actions first -- 'Then, the rabbit showed the way, the bird flew ahead, and they all glowed together.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the past-tense resolution head, not a procedure"
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
