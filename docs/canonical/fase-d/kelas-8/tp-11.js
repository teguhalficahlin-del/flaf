const skenario = {
  "persiapan": {
    "papan_tulis": "If ___, ___ so ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu skenario keuangan (menabung setiap minggu, mengikuti anggaran, memboroskan uang, mencapai tujuan), kartu kondisi-hasil (\"If [kondisi], [hasil] so [konsekuensi]\" dengan tanda panah), dan kartu ikon (toples koin, daftar anggaran, bendera tujuan, dompet kosong).",
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
        "teks": "Good morning, class. Let us think about money today."
      },
      {
        "tipe": "AKSI",
        "teks": "Pastikan kelas siap untuk diskusi bertopik praktis."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Have you ever saved up money to buy something? How did it feel when you finally could?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu skenario keuangan — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these money scenarios. Which one do you think leads to the best result?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to explain what happens when someone makes a money choice, using If and so."
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
          "teks": "Tunjuk tokoh \"seseorang\" yang umum di kartu skenario — bukan diri sendiri. Hitung tahap pertama dan kedua."
        },
        {
          "tipe": "UCAP",
          "teks": "First, a person earns money. Next, they spend some and save some."
        },
        {
          "tipe": "AKSI",
          "teks": "Tandai kondisi dengan satu tangan — tunjukkan hasilnya dengan tangan lain. Gerakkan tangan ke depan ke arah konsekuensi untuk \"so\"."
        },
        {
          "tipe": "UCAP",
          "teks": "If a person saves money every week, the savings grow so they can reach a goal."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu skenario \"mengikuti anggaran\" — tandai kondisi dan hasil."
        },
        {
          "tipe": "UCAP",
          "teks": "If people follow a budget, they spend less so they have more money."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu skenario \"memboroskan uang\" — tunjuk dompet kosong sebagai konsekuensi."
        },
        {
          "tipe": "UCAP",
          "teks": "If someone wastes money, the budget runs out so they cannot buy what they need."
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
              "teks": "Tunjuk tokoh \"seseorang\" di kartu — hitung tahap pertama dan kedua."
            },
            {
              "tipe": "UCAP",
              "teks": "First, a person earns money. Next, they spend some and save some."
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
              "teks": "Tandai kondisi dengan satu tangan — gerakkan ke depan ke arah konsekuensi untuk \"so\"."
            },
            {
              "tipe": "UCAP",
              "teks": "If a person saves money every week, the savings grow so they can reach a goal."
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
              "teks": "Tunjuk kartu skenario \"mengikuti anggaran\" — tandai kondisi dan hasil."
            },
            {
              "tipe": "UCAP",
              "teks": "If people follow a budget, they spend less so they have more money."
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
              "teks": "Tunjuk kartu skenario \"memboroskan uang\" — tunjuk ikon dompet kosong."
            },
            {
              "tipe": "UCAP",
              "teks": "If someone wastes money, the budget runs out so they cannot buy what they need."
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
          "teks": "Good. Now it is your turn. Connect a money choice to its result."
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
      "intro": "Siswa menghubungkan kondisi pilihan keuangan dengan hasil dan konsekuensinya versi sendiri. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan kartu skenario dan kartu kondisi-hasil di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this pattern. Explain how a money choice leads to a result."
        },
        {
          "tipe": "UCAP",
          "teks": "Use a person or people as the subject, not you should, not I think if, and not instructions."
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
          "teks": "Stop writing. Stay where you are. I will show you your partner."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu kondisi apa yang akan ditulis — tunjuk kartu skenario di papan tulis dan minta siswa pilih salah satu situasi sebagai kondisi awal."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu skenario \"menabung\", dan minta siswa ucapkan \"If a person saves money ...\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan salah satu kartu skenario dan lengkapi: \"If ___, ___ so ___.\"",
        "standar": "Tulis dua kalimat kondisi-hasil tentang pilihan keuangan (\"If ... , ... so ...\").",
        "tantangan": "Mulai dengan satu tahap proses (\"First, a person earns money. Next, they save some.\"), lalu bingkai ulang menjadi \"If ... , ... so ...\""
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
          "teks": "Minta Siswa A membacakan satu penjelasan kondisi-hasil (\"If ... , ... so ...\") dari kartu skenario."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B mencatat konsekuensinya, lalu tukar peran."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Your turn now. Read your condition-result explanation to your partner. Your partner notes the consequence. Then swap."
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
          "teks": "Good. Stay with your partner. Wait for my signal. I will show you which pair to join."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk kartu skenario pertama dan tanya \"What happens if a person saves every week?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan penjelasannya sekali lagi tanpa melihat buku."
        }
      ],
      "diferensiasi": {
        "mudah": "Jelaskan satu kondisi-hasil (boleh membaca); pasangan temukan konsekuensinya. Lalu tukar peran.",
        "standar": "Jelaskan dua rantai kondisi-hasil tanpa membaca; pasangan periksa apakah setiap kalimat punya hasil dan konsekuensi. Lalu tukar peran.",
        "tantangan": "Bingkai ulang satu tahap proses menjadi \"If ... , ... so ...\"; pasangan jelaskan skenario yang berbeda. Lalu tukar peran."
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
          "teks": "The person I point to presents your condition-result chart first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns presenting your money explanation to the group."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, tunjuk kartu skenario, dan minta ucapkan \"If a person ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambahkan satu kondisi-hasil yang berbeda."
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
        "mudah": "Presentasikan satu kondisi-hasil ke kelompok. Boleh membaca.",
        "standar": "Presentasikan dua rantai kondisi-hasil tanpa membaca.",
        "tantangan": "Presentasikan rantai kondisi-hasilmu, lalu jawab satu pertanyaan tentang konsekuensinya dari kelompok."
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
          "teks": "Give me your If sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menghubungkan kondisi dengan hasil dan konsekuensi menggunakan subjek generik? Apakah ini fakta umum, bukan saran atau opini?"
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
          "teks": "Your so part. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan \"so\" sebagai konsekuensi logis?"
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
          "teks": "Angkat kembali kartu kondisi-hasil."
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
          "teks": "Angkat kartu kondisi-hasil."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. If a person saves money every week, the savings grow so they can reach a goal."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try. If people follow a budget..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu skenario \"anggaran\" — tunggu siswa melengkapi dengan \"so\"."
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
          "teks": "Listen. If a person saves regularly and avoids waste, the savings grow quickly so they reach the goal sooner."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add a second condition with and."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba pola dengan dua kondisi."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. You showed two habits working together.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan dua kalimat kondisi-hasil tanpa melihat buku, atau menulis satu kondisi-hasil baru tentang tujuan keuangan yang berbeda di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-11.js",
    pattern_id: "PAT-8-11",
    title: "Saving Money: Connecting Conditions and Results",
    short_title: "Saving Money",
    grade: 8,
    genre: "Explanation",
    cluster: "B",
    topic: "Personal Saving Habits",
    context: "Students explore how everyday financial choices lead to different outcomes through simple conditional relationships.",
    context_id: "Siswa menjelajahi bagaimana pilihan keuangan sehari-hari mengarah pada hasil yang berbeda melalui hubungan kondisional sederhana.",
    communicative_goal: "connect conditions with logical results using if...so... patterns",
    communicative_goal_id: "menghubungkan kondisi dengan hasil logis menggunakan pola if...so...",
    vocabulary_domain: ["money", "saving", "goal", "budget"],
    input_anchor: "scenario cards",
    output_anchor: "condition-result chart",
    prerequisite_patterns: ["PAT-8-10"],
    reusable_in: ["PAT-9-14", "PAT-9-15"],
    complexity_level: "Expand",
    notes: "TP kesebelas Kelas 8, Explanation, cluster B (Connecting Conditions and Results). target_pattern PAT-8-11 = 'If ... , ... so ...' (penjelasan kondisional faktual umum). DISTINGSI dari PAT-7-12 Kelas 7 ('If you want to..., Verb...to...', goal->tool, cenderung saran/imperatif): PAT-8-11 = 'If [kondisi], [hasil] so [konsekuensi]' tentang sebab-akibat umum -- BUKAN saran ke pendengar ('If you want X, you should...'). PAT-7-12 bukan prerequisite, disebut hanya untuk kejelasan. forbidden_overlap (giving advice, hypothetical opinions, procedural directions): subjek GENERIK ('a person'/'people'/'someone'), present tense -- BUKAN 'you should...', BUKAN 'I think if...', BUKAN 'First, do ...'. Reaktivasi PAT-8-10 (WAJIB, VR-1): 'First,...Next,...' (proses bertahap, subjek generik) -> REFRAME salah satu tahap/hasil proses menjadi hubungan kondisional 'If [kondisi], [hasil] so [konsekuensi]'. 'so' di sini = hasil/konsekuensi (beda konteks dari 'so'=tujuan PAT-8-04, tidak perlu dibedakan eksplisit). vocabulary_domain (money, saving, goal, budget) muncul di bahasa target. Ekstensi opsional kondisi ganda ('If a person saves regularly and avoids waste, ... so ...') -- menjaga head kondisional, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, class. Let's think about money today." },
      { type: "AKSI", text: "Pastikan kelas siap untuk diskusi bertopik praktis." },
      // HOOK
      { type: "UCAP", text: "Have you ever saved up money to buy something? How did it feel when you finally could?" },
      { type: "AKSI", text: "Tampilkan kartu skenario keuangan: menabung, mengikuti anggaran, memboroskan uang, mencapai tujuan." },
      { type: "UCAP", text: "Look at these money scenarios. Which one do you think leads to the best result?" },
    ],

    active_vocabulary: [
      "If",
      "so",
      "money",
      "save",
      "savings",
      "goal",
      "budget",
      "spend"
    ],

    model_sentences: [
      { id: "model_1", text: "First, a person earns money. Next, they spend some and save some." },
      { id: "model_2", text: "If a person saves money every week, the savings grow so they can reach a goal." },
      { id: "model_3", text: "If people follow a budget, they spend less so they have more money." },
      { id: "model_4", text: "If someone wastes money, the budget runs out so they cannot buy what they need." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Scenario cards showing money choices: saving each week, following a budget, wasting money, reaching a goal.", description_id: "Kartu skenario yang menunjukkan pilihan keuangan: menabung setiap minggu, mengikuti anggaran, memboroskan uang, mencapai tujuan.", asset_id: null },
      { id: "visual_2", description: "Condition-result cards: 'If [condition], [result] so [consequence]' with arrows.", description_id: "Kartu kondisi-hasil: 'If [condition], [result] so [consequence]' dengan tanda panah.", asset_id: null },
      { id: "visual_3", description: "Icons: a coin jar (savings), a budget list, a goal flag, an empty wallet.", description_id: "Ikon: toples koin (tabungan), daftar anggaran, bendera tujuan, dompet kosong.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher marks a condition with one hand ('If ...'), then shows the result with the other.", description_id: "Guru menandai suatu kondisi dengan satu tangan ('If ...'), lalu menunjukkan hasilnya dengan tangan lain." },
      { id: "gesture_2", description: "Teacher moves the result hand forward to a consequence while saying 'so ...'.", description_id: "Guru menggerakkan tangan hasil ke depan ke arah konsekuensinya sambil mengucapkan 'so ...'." },
      { id: "gesture_3", description: "Teacher points to a generic 'a person' figure (not themselves) to keep the subject general.", description_id: "Guru menunjuk tokoh 'seseorang' yang umum (bukan dirinya sendiri) untuk menjaga subjek tetap umum." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher reframe a step of a process into a conditional explanation with 'If ... , ... so ...', using a generic subject in present tense.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-10"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the condition-result sentences ('If ... , ... so ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Explain a condition and its result by replacing the situation.",
      prompt: "Use the pattern 'If [condition], [result] so [consequence].' Explain how a money choice leads to an outcome (money, saving, goal, budget). Use a generic subject ('a person', 'people') in present tense -- not 'you should ...', not 'I think if ...', and not 'First, do ...'.",
      change_target: ["condition (If ...)", "result", "consequence (so ...)"],
      differentiation: {
        easy: { task: "Use a scenario card and complete: 'If ___, ___ so ___.'" },
        standard: { task: "Write two condition-result sentences about money choices ('If ... , ... so ...')." },
        challenge: { task: "Start with a step of the process ('First, a person earns money. Next, they save some.'), then reframe it as 'If ... , ... so ...'." }
      },
      support: { pattern_support: ["PAT-8-10"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Build a condition-result chart with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: read a condition-result explanation ('If ... , ... so ...') from a scenario card while your partner notes the condition, result, and consequence. Then swap.",
      differentiation: {
        easy: { task: "Explain one condition-result (you may read); your partner finds the consequence. Then swap." },
        standard: { task: "Explain two condition-result chains without reading; your partner checks each has a result and a consequence. Then swap." },
        challenge: { task: "Reframe a process step as 'If ... , ... so ...'; your partner explains a different scenario. Then swap." }
      },
      support: { pattern_support: ["PAT-8-10"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present a condition-result chart to a new group (condition-result chart).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting a condition-result chart ('If ... , ... so ...').",
      differentiation: {
        easy: { task: "Present one condition-result to the new group. You may read it." },
        standard: { task: "Present two condition-result chains without reading." },
        challenge: { task: "Present your condition-result chains, then answer one question about a consequence from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students connect a condition to a result and consequence with 'If ... , ... so ...'",
        "students use a generic subject ('a person', 'people') in present tense, explaining a general relationship",
        "students still give advice ('you should ...'), a hypothetical opinion ('I think if ...'), or a direction ('First, do ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a second condition.",
        needs_model: "Repeat the MODEL step, emphasizing a generic subject and 'If [condition], [result] so [consequence]'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the condition-result sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives advice ('you should ...') or a direction instead of a factual condition-result",
        "relies only on the written sentences and cannot explain without reading",
        "connects conditions and results with 'If ... , ... so ...' accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling a generic subject with 'If [condition], [result] so [consequence]'",
        "model one more condition-result from everyday life to show the same pattern still works",
        "for a student who is ready, model ONE explanation with two conditions first -- 'If a person saves regularly and avoids waste, the savings grow quickly so they reach the goal sooner.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the conditional head, not advice or a direction"
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
