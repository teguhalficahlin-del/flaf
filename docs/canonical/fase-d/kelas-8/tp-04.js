const skenario = {
  "persiapan": {
    "papan_tulis": "I agree that ___ because ___.\nMaybe we should ___ so ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu usulan perbaikan kantin (lebih banyak buah, hari salad, kurangi minuman bergula, kebijakan baru), kartu kerangka keputusan (\"I agree that ___ because ___\" dan \"Maybe we should ___ so ___\"), dan kartu ikon kantin sehat (buah, salad, pilihan sehat, poster kebijakan).",
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
        "teks": "Let's get started, class. Focus, please."
      },
      {
        "tipe": "AKSI",
        "teks": "Kondisikan kelas agar siap berdiskusi secara serius."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Think about our school canteen, is the food healthy enough for you?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa."
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu usulan perbaikan kantin — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these canteen improvement ideas. Which one would you agree to start with?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to agree on a decision together, with a reason and a follow-up plan."
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
          "teks": "Angkat kartu usulan — tunjukkan kartu \"lebih banyak buah\". Angguk mantap, lalu buka tangan untuk \"because\"."
        },
        {
          "tipe": "UCAP",
          "teks": "We could sell more fruit in the canteen. I agree that this is a good choice because it is healthy."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat kartu kerangka keputusan. Kembali angguk mantap, buka tangan."
        },
        {
          "tipe": "UCAP",
          "teks": "I agree that we should offer healthy food because students need energy."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kerangka — angkat kartu ikon kantin sehat. Miringkan tangan (mungkin), lalu tunjuk ke depan ke arah tujuan."
        },
        {
          "tipe": "UCAP",
          "teks": "Maybe we should start a salad day so everyone can try it."
        },
        {
          "tipe": "AKSI",
          "teks": "Kembali peragakan gesture miringkan tangan, lalu tunjuk ke depan."
        },
        {
          "tipe": "UCAP",
          "teks": "Maybe we should change the school policy so the canteen has more choices."
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
              "teks": "Angkat kartu usulan buah — peragakan gesture angguk mantap, buka tangan."
            },
            {
              "tipe": "UCAP",
              "teks": "We could sell more fruit in the canteen. I agree that this is a good choice because it is healthy."
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
              "teks": "Angkat kartu kerangka keputusan — peragakan gesture angguk mantap, buka tangan."
            },
            {
              "tipe": "UCAP",
              "teks": "I agree that we should offer healthy food because students need energy."
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
              "teks": "Angkat kartu ikon kantin — peragakan gesture miringkan tangan, tunjuk ke depan."
            },
            {
              "tipe": "UCAP",
              "teks": "Maybe we should start a salad day so everyone can try it."
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
              "teks": "Kembali peragakan gesture miringkan tangan, tunjuk ke depan."
            },
            {
              "tipe": "UCAP",
              "teks": "Maybe we should change the school policy so the canteen has more choices."
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
          "teks": "Good. Now it is your turn. Write your own shared decision."
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
      "intro": "Siswa mengganti keputusan dan alasan dengan pilihan sendiri tentang kantin. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan kartu usulan dan kartu kerangka di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use these patterns. Write your own shared decision about the canteen."
        },
        {
          "tipe": "UCAP",
          "teks": "Keep it simple, one decision, one reason, and one follow-up."
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
          "teks": "Jika siswa tidak tahu keputusan apa yang akan ditulis — tunjuk kartu usulan di papan tulis dan minta siswa pilih salah satu sebagai keputusan awal."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu \"lebih banyak buah\", dan minta siswa ucapkan \"I agree that the canteen should sell more fruit.\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Lengkapi satu kalimat: \"I agree that ___ because ___.\" atau \"Maybe we should ___ so ___.\"",
        "standar": "Tulis satu kalimat \"I agree that ... because ...\" dan satu kalimat \"Maybe we should ... so ...\" tentang kantin.",
        "tantangan": "Ambil satu saran dari sebelumnya (\"We could ...\") dan ubah menjadi keputusan bersama (\"I agree that ... because ...\") plus tindak lanjut (\"Maybe we should ... so ...\")."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Ambil satu saran dari sebelumnya (\"We could ...\") dan ubah menjadi keputusan bersama (\"I agree that ... because ...\") plus tindak lanjut (\"Maybe we should ... so ...\").",
        "perlu_bantuan": "Lengkapi satu kalimat: \"I agree that ___ because ___.\" atau \"Maybe we should ___ so ___.\""
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
          "teks": "Demonstrasikan bersama satu siswa: satu orang menyetujui satu usulan (\"I agree that ... because ...\"), yang lain menambah tindak lanjut (\"Maybe we should ... so ...\")."
        },
        {
          "tipe": "UCAP",
          "teks": "In your group, look at the proposal cards. Take turns agreeing and suggesting a follow-up."
        },
        {
          "tipe": "UCAP",
          "teks": "Work toward one shared decision."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk diskusi kelompok."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — amati apakah setiap anggota sudah menyetujui setidaknya satu keputusan."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now each group will join a new group and share your decision."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok diam lebih dari sepuluh detik — tunjuk kartu usulan pertama dan tanya \"Can you agree with this idea? Why?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika anggota kelompok berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum melanjutkan."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa mendominasi diskusi — tunjuk siswa lain dan minta mereka menambah tindak lanjut \"Maybe we should ...\""
        }
      ],
      "diferensiasi": {
        "mudah": "Setujui satu usulan (\"I agree that ... because ...\") dan tambah satu tindak lanjut (\"Maybe we should ... so ...\"). Boleh membaca.",
        "standar": "Setujui dan usulkan tanpa membaca buku sehingga kelompok mencapai satu keputusan bersama.",
        "tantangan": "Ubah saran teman menjadi keputusan bersama dengan alasan, lalu usulkan tindak lanjut dengan \"so\"."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Ubah saran teman menjadi keputusan bersama dengan alasan, lalu usulkan tindak lanjut dengan \"so\".",
        "perlu_bantuan": "Setujui satu usulan (\"I agree that ... because ...\") dan tambah satu tindak lanjut (\"Maybe we should ... so ...\"). Boleh membaca."
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
          "teks": "The person I point to presents your group's shared decision first."
        },
        {
          "tipe": "UCAP",
          "teks": "Present your decision and follow-up, then listen to what others decided."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"I agree that ...\" lalu keputusan yang sudah ditulis sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambahkan satu tindak lanjut yang berbeda dengan \"Maybe we should ...\""
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
        "mudah": "Presentasikan keputusan bersama dalam satu kalimat (\"I agree that ... because ...\"). Boleh membaca.",
        "standar": "Presentasikan keputusan bersama dan satu tindak lanjut tanpa membaca.",
        "tantangan": "Presentasikan keputusan dan tindak lanjut, lalu setujui juga satu keputusan kelompok lain (\"I agree that ... because ...\")."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Presentasikan keputusan dan tindak lanjut, lalu setujui juga satu keputusan kelompok lain (\"I agree that ... because ...\").",
        "perlu_bantuan": "Presentasikan keputusan bersama dalam satu kalimat (\"I agree that ... because ...\"). Boleh membaca."
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
          "teks": "Tell me your group's decision. Use the pattern."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan keputusan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan \"I agree that ... because ...\"? Apakah ada satu keputusan jelas dengan satu alasan, bukan daftar panjang argumen?"
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
          "teks": "And the follow-up plan, what did you suggest?"
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan \"Maybe we should ... so ...\" dengan tujuan yang jelas?"
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
          "teks": "Angkat kembali kartu kerangka keputusan."
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
          "teks": "Angkat kartu kerangka keputusan."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. I agree that we should sell more fruit because it is healthy."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try. I agree that..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk salah satu kartu usulan — tunggu siswa melengkapi dengan \"because ...\""
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi frasa per frasa jika siswa belum siap mengucapkan kalimat penuh sekaligus."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. I agree that we should sell more fruit because it is healthy, so maybe we should start next week."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Link your decision straight to the action with so."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba kalimat lengkap dengan \"I agree that ... because ..., so maybe we should ...\""
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. That is one clean shared decision.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan keputusan dan tindak lanjut tanpa melihat buku, atau menulis satu keputusan bersama yang berbeda di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-04.js",
    pattern_id: "PAT-8-04",
    title: "Healthy School Canteen: Building Shared Decisions",
    short_title: "Healthy Canteen",
    grade: 8,
    genre: "Interpersonal",
    cluster: "B",
    topic: "Healthy School Canteen",
    context: "Students evaluate several canteen improvement ideas and work toward a shared recommendation for healthier food choices.",
    context_id: "Siswa mengevaluasi beberapa ide perbaikan kantin dan menyusun rekomendasi bersama untuk pilihan makanan yang lebih sehat.",
    communicative_goal: "build agreement and formulate shared decisions supported by reasons",
    communicative_goal_id: "membangun kesepakatan dan merumuskan keputusan bersama yang didukung alasan",
    vocabulary_domain: ["canteen", "healthy food", "choices", "school policy"],
    input_anchor: "proposal cards",
    output_anchor: "consensus discussion",
    prerequisite_patterns: ["PAT-8-03"],
    reusable_in: ["PAT-8-13", "PAT-8-16", "PAT-9-01"],
    complexity_level: "Expand",
    notes: "TP keempat Kelas 8, Interpersonal, GENRE CLOSER Interpersonal Kelas 8 (cluster B -- Building Shared Decisions), Expand. target_pattern PAT-8-04 = 'I agree that ... because ... / Maybe we should ... so ...'. extends_to PAT-8-13 (Exposition, genre opener Kelas 8) -- pola genre-closer -> genre-opener (sama seperti TP-04/TP-24 Kelas 7 -> PAT-8-01). forbidden_overlap (exposition with multiple arguments, formal recommendation, problem-solution exposition) KRUSIAL: PAT-8-04 = SATU keputusan bersama + SATU alasan ('I agree that...because...') + SATU usulan tindak lanjut ('Maybe we should...so...') -- BUKAN ringkasan multi-argumen (wilayah PAT-8-14 'One reason is...Another reason is...'), BUKAN rekomendasi formal (wilayah PAT-8-16 'Therefore, I recommend...because...'), TIDAK ada 'For example...'. CATATAN 'so': 'Maybe we should...so...' -> 'so' = penghubung TUJUAN di TENGAH kalimat ('so that / in order that'); berbeda dari 'So,...' (PAT-7-23, penghubung wacana di AWAL kalimat = 'as a result/therefore') -- PAT-7-23 bukan prerequisite, disebut hanya untuk kejelasan. Reaktivasi PAT-8-03 (WAJIB, VR-1): 'How about...?/We could.../That's a good idea, but...' (usulan/negosiasi yang BELUM disepakati) -> di sini usulan AKHIRNYA DISEPAKATI ('I agree that...because...') TANPA caveat 'but' lagi (caveat dari TP-25/27 RESOLVED jadi konsensus). vocabulary_domain (canteen, healthy food, choices, school policy) muncul di bahasa target. Ekstensi opsional menautkan kesepakatan langsung ke tindakan ('I agree that X because Y, so maybe we should Z.') -- menjaga head keputusan bersama, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Let's get started, class. Focus, please." },
      { type: "AKSI", text: "Kondisikan kelas agar siap berdiskusi secara serius." },
      // HOOK
      { type: "UCAP", text: "Think about our school canteen — is the food healthy enough for you?" },
      { type: "AKSI", text: "Tampilkan kartu usulan perbaikan kantin: lebih banyak buah, hari salad, kurangi minuman bergula." },
      { type: "UCAP", text: "Look at these canteen improvement ideas. Which one would you agree to start with?" },
    ],

    active_vocabulary: [
      "I agree that",
      "because",
      "Maybe we should",
      "so",
      "canteen",
      "healthy food",
      "choices",
      "school policy"
    ],

    model_sentences: [
      { id: "model_1", text: "We could sell more fruit in the canteen. I agree that this is a good choice because it is healthy." },
      { id: "model_2", text: "I agree that we should offer healthy food because students need energy." },
      { id: "model_3", text: "Maybe we should start a salad day so everyone can try it." },
      { id: "model_4", text: "Maybe we should change the school policy so the canteen has more choices." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Proposal cards for canteen improvements: more fruit, a salad day, fewer sugary drinks, a new policy.", description_id: "Kartu usulan perbaikan kantin: lebih banyak buah, hari salad, kurangi minuman bergula, kebijakan baru.", asset_id: null },
      { id: "visual_2", description: "A decision-frame card: 'I agree that ___ because ___' and 'Maybe we should ___ so ___'.", description_id: "Kartu kerangka keputusan: 'I agree that ___ because ___' dan 'Maybe we should ___ so ___'.", asset_id: null },
      { id: "visual_3", description: "Healthy canteen icons: fruit, a salad, healthy food choices, and a school-policy poster.", description_id: "Ikon kantin sehat: buah, salad, pilihan makanan sehat, dan poster kebijakan sekolah.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher nods firmly for 'I agree that ...', then opens a hand for 'because ...'.", description_id: "Guru mengangguk mantap untuk 'I agree that ...', lalu membuka tangan untuk 'because ...'." },
      { id: "gesture_2", description: "Teacher tilts a hand (maybe), then points forward to a goal, while saying 'Maybe we should ... so ...'.", description_id: "Guru memiringkan tangan (mungkin), lalu menunjuk ke depan ke arah tujuan, sambil mengucapkan 'Maybe we should ... so ...'." },
      { id: "gesture_3", description: "Teacher draws both hands together to show the group reaching a shared decision.", description_id: "Guru menyatukan kedua tangan untuk menunjukkan kelompok mencapai keputusan bersama." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher build a shared decision with 'I agree that ... because ...' and propose a follow-up with 'Maybe we should ... so ...', turning an earlier suggestion into agreement.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-03"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the shared-decision sentences ('I agree that ... because ...' / 'Maybe we should ... so ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Build your own shared decision with a reason and a follow-up action.",
      prompt: "Use the patterns 'I agree that [decision] because [reason].' and 'Maybe we should [action] so [purpose].' Make it about the canteen (canteen, healthy food, choices, school policy). Keep it to one decision, one reason, and one follow-up -- not a list of many arguments and no 'For example'.",
      change_target: ["agreement (I agree that ... because ...)", "action (Maybe we should ... so ...)"],
      differentiation: {
        easy: { task: "Complete one sentence: 'I agree that ___ because ___.' or 'Maybe we should ___ so ___.'" },
        standard: { task: "Write one 'I agree that ... because ...' sentence and one 'Maybe we should ... so ...' sentence about the canteen." },
        challenge: { task: "Take a suggestion ('We could ...') and turn it into a shared decision ('I agree that ... because ...') plus a follow-up ('Maybe we should ... so ...')." }
      },
      support: { pattern_support: ["PAT-8-03"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Reach a shared decision about the canteen in a small group (consensus discussion).",
      interaction_mode: "small_group",
      task: "In a group of 3-4, look at the proposal cards. Take turns agreeing on one improvement ('I agree that ... because ...') and proposing a follow-up ('Maybe we should ... so ...'). Work toward one shared decision.",
      differentiation: {
        easy: { task: "Agree with one proposal ('I agree that ... because ...') and add one follow-up ('Maybe we should ... so ...'). You may read." },
        standard: { task: "Agree and propose without reading, so the group settles on one shared decision." },
        challenge: { task: "Turn a classmate's suggestion into a shared decision with a reason, then propose a follow-up action with 'so'." }
      },
      support: { pattern_support: ["PAT-8-03"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Share your group's shared decision with a new group (consensus discussion).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting your group's shared decision ('I agree that ... because ...') and follow-up ('Maybe we should ... so ...').",
      differentiation: {
        easy: { task: "Present your shared decision in one sentence ('I agree that ... because ...'). You may read it." },
        standard: { task: "Present your shared decision and one follow-up without reading." },
        challenge: { task: "Present your shared decision and follow-up, then listen and agree with one other group's decision ('I agree that ... because ...')." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students build a shared decision with 'I agree that ... because ...' and a follow-up with 'Maybe we should ... so ...'",
        "students keep it to one decision, one reason, and one follow-up (using 'so' for purpose), not a list of many arguments",
        "students still give a formal recommendation or add 'For example ...' / multiple arguments instead of a simple shared decision"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to link the agreement directly to the action with 'so'.",
        needs_model: "Repeat the MODEL step, emphasizing 'I agree that ... because ...' and 'Maybe we should ... so ...' as one simple shared decision.",
        needs_repeat: "Do one more round of REPEAT (choral) on the shared-decision sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "lists several arguments or gives a formal recommendation instead of one shared decision",
        "relies only on the written sentences and cannot share the decision without reading",
        "builds a shared decision and a follow-up with 'I agree that ... because ...' / 'Maybe we should ... so ...' accurately and confidently"
      ],
      action: [
        "recast the decision slowly, modeling 'I agree that ... because ...' and 'Maybe we should ... so ...' as one simple, shared decision",
        "model one more shared decision on a different school topic to show the same pattern still works",
        "for a student who is ready, model ONE sentence linking the agreement straight to the action first -- 'I agree that we should sell more fruit because it is healthy, so maybe we should start next week.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the shared-decision head, with no 'For example' or multiple arguments"
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
