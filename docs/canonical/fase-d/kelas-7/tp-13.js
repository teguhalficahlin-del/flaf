const skenario = {
  "persiapan": {
    "papan_tulis": "Yesterday, (past event).\nLast (weekend / Sunday), (past event).",
    "kartu": "Siapkan kartu ungkapan waktu dengan kalender menunjuk hari lampau — Yesterday, Last weekend, Last Sunday.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan urutan foto piknik keluarga di meja guru — keluarga tiba di taman, makan piknik di atas tikar, bermain bersama."
      },
      {
        "tipe": "AKSI",
        "teks": "Siapkan ikon tindakan lampau berlabel -ed — visited dengan jejak kaki ke taman, played dengan bola, cooked dengan panci berisi makanan."
      }
    ]
  },
  "siapkan_kelas": {
    "settling": [
      {
        "tipe": "AKSI",
        "teks": "Berdiri di depan kelas dengan nada hangat."
      },
      {
        "tipe": "UCAP",
        "teks": "Good morning! How was your weekend, everyone?"
      },
      {
        "tipe": "AKSI",
        "teks": "Biarkan satu atau dua siswa menjawab singkat sebelum melanjutkan."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Has your family ever gone somewhere together last weekend? Where did you go?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan urutan foto piknik keluarga satu per satu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these family photos. What happened here, do you think?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa. Jika tidak ada yang menjawab dalam lima detik — tunjuk foto keluarga tiba di taman dan tanya \"Where is this family going?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — biarkan foto tetap terlihat."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today we learn how to talk about something that already happened."
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
          "teks": "Tunjuk ke belakang melewati bahu — gestur masa lalu. Tunjuk kartu Last weekend."
        },
        {
          "tipe": "UCAP",
          "teks": "Last weekend, my family visited the park."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon visited dengan jejak kaki ke taman."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ke belakang melewati bahu. Tunjuk kartu Yesterday."
        },
        {
          "tipe": "UCAP",
          "teks": "Yesterday, we played games and enjoyed a picnic."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan bermain dengan bola — lalu peragakan makan piknik."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ke belakang melewati bahu. Tunjuk kartu Last Sunday."
        },
        {
          "tipe": "UCAP",
          "teks": "Last Sunday, my family cooked food together."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan memasak."
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
              "teks": "Tunjuk ke belakang melewati bahu — tunjuk kartu Last weekend."
            },
            {
              "tipe": "UCAP",
              "teks": "Last weekend, my family visited the park."
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
              "teks": "Tunjuk ke belakang melewati bahu — tunjuk kartu Yesterday. Peragakan bermain."
            },
            {
              "tipe": "UCAP",
              "teks": "Yesterday, we played games and enjoyed a picnic."
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
              "teks": "Tunjuk ke belakang melewati bahu — tunjuk kartu Last Sunday. Peragakan memasak."
            },
            {
              "tipe": "UCAP",
              "teks": "Last Sunday, my family cooked food together."
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
          "teks": "Good. Now write about your own outing."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk kartu ungkapan waktu dan ikon tindakan lampau. Minta siswa baca bersama: Yesterday, blank. Last weekend, blank."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis kalimat pengalaman masa lalu mereka sendiri dengan mengganti ungkapan waktu dan peristiwa. Dikerjakan secara individual, ditulis di buku catatan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel kartu ungkapan waktu dan ikon tindakan lampau di papan tulis di sebelah pola."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Write about your own past outing. Use a time expression: Yesterday, or Last weekend, or Last Sunday."
        },
        {
          "tipe": "UCAP",
          "teks": "Use past-tense verbs: visited, played, enjoyed, cooked, walked. Do not use present tense. Do not say will."
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
          "teks": "Berjalan keliling kelas — perhatikan siswa yang menulis present tense seperti visit atau play, dan ingatkan gestur tunjuk ke belakang: \"Past tense. Visited. Played.\""
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
          "teks": "Jika siswa tidak tahu outing mana yang ingin diceritakan — tunjuk foto piknik dan tanya \"Where did you go last weekend? Or last Sunday?\" Tunggu siswa menyebutkan tempat, lalu bantu dengan \"So: Last weekend, I visited blank.\""
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk ke belakang melewati bahu, dan ucapkan \"Last weekend, I blank. Did you go to the park? Or somewhere else?\" Tunggu siswa menjawab dan bantu tulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih satu foto dan lengkapi: Last weekend, I blank (visited, played, cooked) blank.",
        "standar": "Tulis dua kalimat tentang outing nyata di masa lalu — masing-masing diawali ungkapan waktu dan menggunakan kata kerja lampau.",
        "tantangan": "Tulis dua kalimat ungkapan waktu, lalu tambahkan rangkuman cerita singkat bentuk lampau: First, we walked blank. Then, we had blank. Pertahankan dua kalimat utama sebagai bagian utama."
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
          "teks": "Minta Siswa A menceritakan outing masa lalunya ke Siswa B: Last weekend, I visited blank."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B mendengarkan dan menyebutkan satu hal yang diingat dari cerita Siswa A."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B bercerita tentang outing masa lalunya ke Siswa A."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Take turns. Tell your past outing to your partner. Your partner listens and remembers one thing. Work with the person next to you."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk bercerita dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati apakah siswa menggunakan ungkapan waktu dan kata kerja lampau."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk ke belakang melewati bahu ke arah pasangan tersebut dan ucapkan \"Last weekend, I blank. What did you do?\" Tunggu siswa menjawab."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan menggunakan present tense — tunjuk ikon tindakan lampau berlabel -ed dan ucapkan \"Past tense. Visited. Played.\" Tunggu siswa mengulang dalam bentuk lampau."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai lebih cepat — minta siswa tambahkan rangkuman singkat First, we blank. Then, we blank."
        }
      ],
      "diferensiasi": {
        "mudah": "Ceritakan satu kalimat outing masa lalu dari buku catatan — boleh membaca. Pasangan mendengarkan dan merespons.",
        "standar": "Ceritakan dua kalimat outing masa lalu tanpa membaca. Dengarkan dan ingat satu hal yang dilakukan pasangan.",
        "tantangan": "Ceritakan outing dengan rangkuman cerita singkat bentuk lampau: First, we walked blank. Then, we had blank. Pasangan melakukan hal yang sama."
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
          "teks": "Take turns. Tell your group about your past outing. Yesterday, blank. Or: Last weekend, blank."
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
          "teks": "Berjalan antar kelompok — dengarkan apakah ungkapan waktu dan kata kerja lampau digunakan secara konsisten."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk kartu ungkapan waktu dan minta siswa mulai dengan \"Last weekend, I blank.\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa menggunakan present tense saat bercerita ke kelompok — tunjuk ke belakang melewati bahu dan ucapkan \"Past. Visited, played, cooked.\""
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
        "mudah": "Ceritakan satu atau dua kalimat outing masa lalu ke kelompok baru — boleh membaca.",
        "standar": "Ceritakan outing masa lalumu ke kelompok baru tanpa membaca.",
        "tantangan": "Ceritakan outing dengan rangkuman cerita singkat bentuk lampau, lalu dengarkan dan ingat satu hal yang dilakukan setiap teman."
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
          "teks": "Tell me about your family outing. Start with Yesterday or Last weekend. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan kalimat."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan ungkapan waktu dan kata kerja lampau (-ed)?"
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
          "teks": "Amati — apakah siswa bisa menceritakan outing masa lalu dengan lancar tanpa membaca?"
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
          "teks": "Angkat kembali kartu ungkapan waktu."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan dua kalimat masa lalu sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Tunjuk ke belakang melewati bahu — tunjuk kartu Last weekend."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Last weekend, my family visited the park."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon visited."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now, visited. Not visit. Past. Say this, Last weekend, I visited blank."
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
          "teks": "Last weekend, we went to the beach."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Went is past for go. Now you try. Give me one sentence with went. Just one."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Keep the time expression. Last weekend, we went blank.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang kalimat outing masa lalu tanpa membaca, atau menulis satu kalimat tambahan tentang kegiatan lain yang dilakukan saat outing yang sama."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-13.js",
    pattern_id: "PAT-7-13",
    title: "Family Picnic: Recalling Past Events",
    short_title: "Family Picnic",
    grade: 7,
    genre: "Recount",
    cluster: "A",
    topic: "Family Picnic",
    context: "Students share a real family outing that happened last weekend.",
    context_id: "Siswa menceritakan kegiatan keluarga nyata yang terjadi pada akhir pekan lalu.",
    communicative_goal: "introduce a past experience using simple time expressions",
    communicative_goal_id: "memperkenalkan pengalaman masa lalu menggunakan ungkapan waktu sederhana",
    vocabulary_domain: ["family", "park", "weekend", "activities"],
    input_anchor: "photo sequence",
    output_anchor: "pair storytelling",
    prerequisite_patterns: ["PAT-7-09"],
    reusable_in: ["PAT-8-17"],
    complexity_level: "Acquire",
    notes: "TP ketiga belas Fase D dan TP RECOUNT PERTAMA -- memperkenalkan PAST TENSE untuk pertama kalinya di Kelas 7. target_pattern PAT-7-13 = 'Yesterday, ... / Last ..., ... + past event'. Semua kalimat target memakai verba lampau; pengenalan awal MEMPRIORITASKAN verba REGULER -ed (visited, played, enjoyed, cooked, walked) agar pola morfologis jelas, dengan hanya satu verba irregular umum (had) untuk kewajaran konteks. Tension forbidden_overlap vs prerequisite: PAT-7-09 ('First,...Then,...Finally,...') vs 'giving procedures' -> connector words direaktivasi HANYA dalam MODE NARASI LAMPAU DEKLARATIF (menceritakan apa yang SUDAH terjadi, past tense: 'First, we walked to the park. Then, we had a picnic.') -- bukan instruksi imperatif present tense untuk diikuti orang lain; dipakai secukupnya (1-2 kalimat support), fokus utama tetap 'Yesterday,/Last...,... + past event'. forbidden_overlap lain: TIDAK ada 'It is/has/looks' present tense (describing present characteristics), TIDAK ada 'will/going to' (future plans). vocabulary_domain (family, park, weekend, activities) muncul di bahasa target. Ekstensi opsional satu verba irregular umum tambahan ('We went to the beach.') -- menjaga head recount 'time expression + past event' -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning! How was your weekend, everyone?" },
      { type: "AKSI", text: "Biarkan satu atau dua siswa menjawab singkat sebelum melanjutkan." },
      // HOOK
      { type: "UCAP", text: "Has your family ever gone somewhere together last weekend? Where did you go?" },
      { type: "AKSI", text: "Tampilkan urutan foto piknik keluarga: tiba di taman, makan piknik di atas tikar, bermain." },
      { type: "UCAP", text: "Look at these family photos. What happened here, do you think?" },
    ],

    active_vocabulary: [
      "Yesterday,",
      "Last weekend",
      "Last Sunday",
      "visited",
      "played",
      "enjoyed",
      "cooked",
      "family",
      "park",
      "picnic",
      "games"
    ],

    model_sentences: [
      { id: "model_1", text: "Last weekend, my family visited the park." },
      { id: "model_2", text: "Yesterday, we played games and enjoyed a picnic." },
      { id: "model_3", text: "First, we walked to the park. Then, we had a picnic." },
      { id: "model_4", text: "Last Sunday, my family cooked food together." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A photo sequence of a family picnic last weekend: the family arriving at the park, eating a picnic on a mat, and playing games.", description_id: "Urutan foto piknik keluarga akhir pekan lalu: keluarga tiba di taman, makan piknik di atas tikar, dan bermain.", asset_id: null },
      { id: "visual_2", description: "Time-expression cards with a calendar pointing to past days: 'Yesterday,', 'Last weekend', 'Last Sunday'.", description_id: "Kartu ungkapan waktu dengan kalender menunjuk hari-hari lampau: 'Yesterday,', 'Last weekend', 'Last Sunday'.", asset_id: null },
      { id: "visual_3", description: "Past-action icons labeled with -ed: visited (footprints to a park), played (a ball), cooked (a pot of food).", description_id: "Ikon tindakan lampau berlabel -ed: visited (jejak kaki ke taman), played (bola), cooked (panci berisi makanan).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points back over one shoulder (a 'past / before now' gesture) while saying 'Yesterday, ... / Last weekend, ...'.", description_id: "Guru menunjuk ke belakang melewati bahu (gestur 'masa lalu / sebelum sekarang') sambil mengucapkan 'Yesterday, ... / Last weekend, ...'." },
      { id: "gesture_2", description: "Teacher mimes the past action (walking, playing, cooking) while saying the past-tense verb.", description_id: "Guru memperagakan tindakan lampaunya (berjalan, bermain, memasak) sambil mengucapkan kata kerja bentuk lampaunya." },
      { id: "gesture_3", description: "Teacher shows order with fingers for the short narrative recap 'First, ... Then, ...' (telling what happened, not giving orders).", description_id: "Guru menunjukkan urutan dengan jari untuk rangkuman cerita singkat 'First, ... Then, ...' (menceritakan apa yang terjadi, bukan memberi perintah)." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher introduce a past family outing using time expressions ('Yesterday, ... / Last ..., ...') and past-tense verbs, with a short past-tense narrative recap.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-09"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the past-event sentences ('Yesterday, ... / Last ..., ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Introduce your own past outing by replacing the time expression and the past event.",
      prompt: "Use the pattern 'Yesterday, ... + past event' or 'Last [weekend/Sunday], ... + past event.' Replace the words with a real outing of your own, using past-tense verbs (visited, played, enjoyed, cooked, walked). Do not use present tense or future ('will').",
      change_target: ["time expression", "past event (past verb + details)"],
      differentiation: {
        easy: { task: "Choose a photo and complete: 'Last weekend, I ___ (visited / played / cooked) ___.'" },
        standard: { task: "Write two sentences about a real past outing, each starting with a time expression ('Yesterday,' / 'Last ...,') and using a past-tense verb." },
        challenge: { task: "Write your two time-expression sentences, then add a short past-tense recap: 'First, we walked ... Then, we had ...' Keep the 'Yesterday,/Last ...,' sentences as the main part." }
      },
      support: { pattern_support: ["PAT-7-09"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Tell a partner about a past outing using time expressions and past-tense verbs (pair storytelling).",
      interaction_mode: "pair",
      task: "Find a partner. Take turns telling about a real past outing ('Yesterday, ... / Last ..., ... + past event'). Listen to your partner and remember one thing they did.",
      differentiation: {
        easy: { task: "Tell your partner one past-outing sentence using your sentence from CHANGE (you may read). Listen to your partner's sentence." },
        standard: { task: "Tell your partner two past-outing sentences without reading. Listen and remember one thing your partner did." },
        challenge: { task: "Tell your outing with a short past-tense recap ('First, we walked ... Then, we had ...'). Your partner does the same." }
      },
      support: { pattern_support: ["PAT-7-09"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Tell your past outing to a new group (pair storytelling).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns telling about your past outing using 'Yesterday, ... / Last ..., ... + past event'.",
      differentiation: {
        easy: { task: "Tell the new group one or two past-outing sentences. You may read them." },
        standard: { task: "Tell the new group about your outing without reading." },
        challenge: { task: "Tell your outing with a short past-tense recap, then listen and remember one thing each classmate did." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students introduce a past event with a time expression ('Yesterday,' / 'Last ...,')",
        "students use past-tense verbs consistently (mostly regular -ed forms)",
        "students still slip into present tense ('I visit') or use future ('I will visit')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to use one common irregular past verb (e.g. 'went').",
        needs_model: "Repeat the MODEL step, emphasizing the time expression and the -ed past-tense verbs.",
        needs_repeat: "Do one more round of REPEAT (choral) on the past-event sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "slips into present tense or future when telling a past event",
        "relies only on the written sentences and cannot tell the outing without reading",
        "introduces past events with time expressions and past-tense verbs accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, emphasizing the time expression and the past-tense verb",
        "model one more past-event sentence about a different outing to show the same pattern still works",
        "for a student who is ready, model ONE sentence with a common irregular past verb first -- 'Last weekend, we went to the beach.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the recount head (time expression + past event), not a procedure or a future plan"
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
