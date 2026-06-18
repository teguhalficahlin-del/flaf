const skenario = {
  "persiapan": {
    "papan_tulis": "After that, (past event).\nAt the end, (past event).\nI learned (something short and concrete).",
    "kartu": "Siapkan kartu kata penutup — After that dengan tanda panah peristiwa berikutnya, At the end dengan bendera finish, I learned dengan lampu bohlam.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan foto kegiatan komunitas di meja guru — siswa dan warga membersihkan taman bersama, mengumpulkan sampah ke dalam karung, dan taman yang bersih di akhir."
      },
      {
        "tipe": "AKSI",
        "teks": "Siapkan ikon tema — tangan bergandengan untuk kerja sama, taman bersih untuk kebersihan, dan tangan menolong untuk tanggung jawab."
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
        "teks": "Good morning! I have a topic close to our community today."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu kelas siap dan perhatian penuh ke depan."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Have you ever helped clean up a public space, a park, a street, or your neighborhood?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan foto kegiatan komunitas satu per satu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at what these students did together. What do you think they learned from it?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa. Jika tidak ada yang menjawab dalam lima detik — tunjuk foto taman bersih dan tanya \"What does the park look like now? And how did it get this way?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — letakkan foto di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today we learn how to close a story and share what we learned."
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
          "teks": "Letakkan tangan di dada."
        },
        {
          "tipe": "UCAP",
          "teks": "It was tiring because we worked hard as a team."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon tangan bergandengan."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri gestur ke depan dengan satu tangan — tunjuk kartu After that."
        },
        {
          "tipe": "UCAP",
          "teks": "After that, our community cleaned the park together."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk foto komunitas membersihkan taman."
        },
        {
          "tipe": "AKSI",
          "teks": "Satukan kedua tangan sebagai penutup — tunjuk kartu At the end."
        },
        {
          "tipe": "UCAP",
          "teks": "At the end, the park was clean and tidy."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk foto taman bersih."
        },
        {
          "tipe": "AKSI",
          "teks": "Tepuk pelipis dengan satu jari — tunjuk kartu I learned."
        },
        {
          "tipe": "UCAP",
          "teks": "I learned to take responsibility."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon tangan menolong."
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
              "teks": "Beri gestur ke depan — tunjuk kartu After that dan foto komunitas."
            },
            {
              "tipe": "UCAP",
              "teks": "After that, our community cleaned the park together."
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
              "teks": "Satukan kedua tangan sebagai penutup — tunjuk kartu At the end dan foto taman bersih."
            },
            {
              "tipe": "UCAP",
              "teks": "At the end, the park was clean and tidy."
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
              "teks": "Tepuk pelipis — tunjuk kartu I learned dan ikon tangan menolong."
            },
            {
              "tipe": "UCAP",
              "teks": "I learned to take responsibility."
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
          "teks": "Good. Now write your own closing."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk tiga kartu kata penutup dan minta siswa baca bersama: After that, blank. At the end, blank. I learned blank."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis penutup cerita ulang komunitas mereka sendiri. Dikerjakan secara individual, ditulis di buku catatan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel foto kegiatan komunitas dan kartu kata penutup di papan tulis di sebelah pola."
        },
        {
          "tipe": "AKSI",
          "teks": "Tempel ikon tema di papan tulis."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Write your own closing for a community clean-up story."
        },
        {
          "tipe": "UCAP",
          "teks": "Say, After that, blank. At the end, blank. Then say, I learned blank. Keep I learned short. One thing. Not a long message."
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
          "teks": "Berjalan keliling kelas — perhatikan siswa yang menulis I learned diikuti pesan moral panjang — ingatkan: \"Short. One thing. I learned to blank.\""
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah lima menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop writing. Now sit in small groups of three or four."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu apa yang ingin ditulis setelah I learned — tunjuk ikon tema dan minta siswa pilih satu: team, clean, help, responsibility. Bantu dengan \"I learned to blank.\" Dan minta siswa melengkapi."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu At the end dan foto taman bersih, dan ucapkan \"At the end, the park was blank. Clean? Or tidy?\" Tunggu siswa melengkapi dan menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Lengkapi tiga kalimat penutup: After that, blank. At the end, blank. I learned blank. Jaga setiap kalimat tetap singkat.",
        "standar": "Tulis dua kalimat penutup (After that dan At the end) dan satu I learned yang singkat dan konkret.",
        "tantangan": "Awali dengan tanggapan perasaan: It was tiring because we worked hard. Lalu tulis penutup dan satu I learned singkat."
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Siswa duduk dalam kelompok tiga atau empat sebagai lingkaran refleksi — guru yang menentukan komposisi kelompok.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tentukan komposisi kelompok — tunjuk secara eksplisit siapa bergabung dengan siapa."
        },
        {
          "tipe": "UCAP",
          "teks": "In your circle, take turns giving the closing of your story."
        },
        {
          "tipe": "UCAP",
          "teks": "After that, blank. At the end, blank. I learned blank. Keep each part short. Listen to each classmate."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk berbagi penutup cerita ulang di dalam kelompok."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati apakah I learned diikuti satu hal yang singkat dan konkret."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop. Stay in your group for a moment."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam dan tidak mulai — tunjuk kartu After that dan minta siswa ucapkan \"After that, blank.\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika I learned diikuti penjelasan panjang — tepuk pelipismu dan ucapkan \"Short. One thing. I learned to blank.\""
        }
      ],
      "diferensiasi": {
        "mudah": "Bagikan penutupmu dari buku catatan ke lingkaran — boleh membaca — akhiri dengan satu I learned singkat.",
        "standar": "Bagikan penutupmu tanpa membaca, akhiri dengan I learned singkat. Dengarkan pembelajaran setiap teman.",
        "tantangan": "Tambahkan tanggapan perasaan terlebih dahulu, lalu penutup dan I learned. Dengarkan dan ingat satu pembelajaran milik teman."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Siswa bergabung dengan kelompok baru — bukan kelompok dari langkah INTERACT — membentuk lingkaran refleksi baru.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk siapa bergabung dengan kelompok mana untuk membentuk lingkaran baru empat orang."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok baru terbentuk dan tenang."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns sharing your recount closing in the new circle. After that, blank. At the end, blank. I learned blank."
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
          "teks": "Beri waktu enam menit untuk semua anggota berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — dengarkan apakah ketiga bagian penutup muncul dan I learned tetap singkat."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk kartu I learned ke arahnya dan minta siswa ucapkan \"I learned to blank.\" sebagai penutup."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika I learned terlalu panjang — tepuk pelipismu: \"Short. One thing. I learned to blank.\""
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
        "mudah": "Bagikan dua kalimat penutup dan satu I learned singkat ke lingkaran baru — boleh membaca.",
        "standar": "Bagikan penutupmu tanpa membaca.",
        "tantangan": "Bagikan tanggapan perasaan, penutup, dan I learned, lalu tanggapi satu pembelajaran teman dengan That's true. Atau I agree."
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
          "teks": "Give me your At the end sentence and your I learned. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah At the end diikuti peristiwa lampau konkret? Apakah I learned singkat dan konkret (satu hal)?"
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
          "teks": "Your I learned sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa bisa mengucapkan I learned dengan singkat dan konkret tanpa membaca?"
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
          "teks": "Angkat kembali tiga kartu kata penutup."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan tiga kalimat penutup sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Satukan kedua tangan sebagai penutup — tunjuk kartu At the end."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. At the end, the park was clean and tidy."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Tepuk pelipis — tunjuk kartu I learned."
        },
        {
          "tipe": "UCAP",
          "teks": "I learned to take responsibility."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan — tekankan bahwa I learned harus singkat: satu hal, bukan esai."
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
          "teks": "I learned to clean up and to help others."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Two things, still short. Now you try. Give me one I learned with two things. Just one."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Keep it short. Not a long message.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang ketiga kalimat penutup tanpa membaca, atau menulis penutup baru tentang kegiatan komunitas yang berbeda."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-16.js",
    pattern_id: "PAT-7-16",
    title: "Community Clean-Up: Reflecting on Helping Others",
    short_title: "Community Clean-Up",
    grade: 7,
    genre: "Recount",
    cluster: "B",
    topic: "Community Clean-Up Day",
    context: "Students recount a real community service activity and reflect on what they learned from working together.",
    context_id: "Siswa menceritakan ulang kegiatan bakti sosial nyata dan merefleksikan apa yang mereka pelajari dari bekerja sama.",
    communicative_goal: "close a recount by expressing personal learning and social value",
    communicative_goal_id: "menutup cerita ulang dengan menyampaikan pembelajaran pribadi dan nilai sosial",
    vocabulary_domain: ["community", "teamwork", "cleanliness", "responsibility"],
    input_anchor: "community activity photos",
    output_anchor: "reflection circle",
    prerequisite_patterns: ["PAT-7-15"],
    reusable_in: ["PAT-8-13", "PAT-8-16", "PAT-9-01", "PAT-9-16"],
    complexity_level: "Acquire",
    notes: "TP keenam belas Fase D, Recount, menutup genre Recount Kelas 7. target_pattern PAT-7-16 = 'At the end, ... / After that, ... / I learned ...' -- tiga sub-bentuk penutup recount. 'At the end, [past event].' dan 'After that, [past event].' adalah penutup naratif lampau; 'I learned [hal konkret/singkat]' HARUS hasil KONKRET DAN SINGKAT (mis. 'I learned to work as a team and take responsibility.') -- BUKAN esai pesan moral panjang, refleksi formal, atau kesimpulan argumentatif (forbidden_overlap). PAT-7-15 ('It was+adj because+event') sebagai support: respons emosi sebelum penutup ('It was tiring because we worked hard. At the end, the park was clean. I learned to work as a team.'). vocabulary_domain (community, teamwork, cleanliness, responsibility) muncul di bahasa target (teamwork direalisasikan via 'team', cleanliness via 'clean'/'cleaned'). Ekstensi opsional 'I learned' dengan dua hal konkret yang digabung ('I learned to clean up and to help others.') -- menjaga head 'I learned ...' tetap singkat/konkret -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning! I have a topic close to our community today." },
      { type: "AKSI", text: "Tunggu kelas siap dan perhatian penuh ke depan." },
      // HOOK
      { type: "UCAP", text: "Have you ever helped clean up a public space — a park, a street, or your neighborhood?" },
      { type: "AKSI", text: "Tampilkan foto komunitas membersihkan taman bersama, mengumpulkan sampah, dan taman bersih di akhir." },
      { type: "UCAP", text: "Look at what these students did together. What do you think they learned from it?" },
    ],

    active_vocabulary: [
      "At the end,",
      "After that,",
      "I learned",
      "community",
      "team",
      "responsibility",
      "cleaned",
      "clean"
    ],

    model_sentences: [
      { id: "model_1", text: "It was tiring because we worked hard as a team." },
      { id: "model_2", text: "After that, our community cleaned the park together." },
      { id: "model_3", text: "At the end, the park was clean and tidy." },
      { id: "model_4", text: "I learned to take responsibility." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Community activity photos: students and neighbors cleaning a park together, collecting trash into bags, and the clean park at the end.", description_id: "Foto kegiatan komunitas: siswa dan warga membersihkan taman bersama, mengumpulkan sampah ke dalam karung, dan taman yang bersih di akhir.", asset_id: null },
      { id: "visual_2", description: "Closing-word cards: 'After that,' (a next-event arrow), 'At the end,' (a finish flag), 'I learned' (a lightbulb).", description_id: "Kartu kata penutup: 'After that,' (tanda panah peristiwa berikutnya), 'At the end,' (bendera finish), 'I learned' (lampu bohlam).", asset_id: null },
      { id: "visual_3", description: "Theme icons: joined hands (team), a clean park (cleanliness), a community group, and a helping hand (responsibility).", description_id: "Ikon tema: tangan bergandengan (kerja sama), taman bersih (kebersihan), kelompok komunitas, dan tangan menolong (tanggung jawab).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher gestures onward with one hand while saying 'After that, ...' to show the next event.", description_id: "Guru memberi gestur ke depan dengan satu tangan sambil mengucapkan 'After that, ...' untuk menunjukkan peristiwa berikutnya." },
      { id: "gesture_2", description: "Teacher brings both hands together to a close while saying 'At the end, ...'.", description_id: "Guru menyatukan kedua tangan sebagai penutup sambil mengucapkan 'At the end, ...'." },
      { id: "gesture_3", description: "Teacher taps their temple while saying 'I learned ...' to show a short, concrete realization.", description_id: "Guru menepuk pelipisnya sambil mengucapkan 'I learned ...' untuk menunjukkan kesadaran yang singkat dan konkret." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher close a recount using 'After that, ...', 'At the end, ...', and a short, concrete 'I learned ...', after a feeling response.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-15"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the closing sentences ('After that, ... / At the end, ... / I learned ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Close your own recount by replacing the closing events and your short learning.",
      prompt: "Use the patterns 'After that, [past event].', 'At the end, [past event].', and 'I learned [something short and concrete].' Replace the words with your real community clean-up (community, team, cleaned, clean, responsibility). Keep 'I learned ...' short -- one concrete thing, not a long message.",
      change_target: ["closing event (After that / At the end)", "learning (I learned ...)"],
      differentiation: {
        easy: { task: "Complete the closers: 'After that, ___. At the end, ___. I learned ___.' (keep each one short)." },
        standard: { task: "Write two closing sentences ('After that, ...' and 'At the end, ...') plus one short 'I learned ...'." },
        challenge: { task: "Start with a feeling response ('It was tiring because we worked hard.'), then add your closers and one short 'I learned ...'." }
      },
      support: { pattern_support: ["PAT-7-15"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share the closing of your recount in a small reflection circle.",
      interaction_mode: "small_group",
      task: "Sit in a small group of 3-4 (a reflection circle). Take turns giving the closing of your community clean-up recount: 'After that, ... At the end, ... I learned ...' Listen to each classmate's short learning.",
      differentiation: {
        easy: { task: "Give your closers from CHANGE to the circle (you may read), ending with one short 'I learned ...'." },
        standard: { task: "Give your closing without reading, ending with a short 'I learned ...'. Listen to your classmates' learnings." },
        challenge: { task: "Add a feeling response first, then your closers and learning. Listen and remember one classmate's learning." }
      },
      support: { pattern_support: ["PAT-7-15"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Share your recount closing with a new reflection circle.",
      share_mode: "oral_response",
      task: "Form a new circle of 4 with classmates from other groups. Take turns sharing your recount closing: 'After that, ... At the end, ... I learned ...'",
      differentiation: {
        easy: { task: "Share your two closers and one short 'I learned ...' with the new circle. You may read." },
        standard: { task: "Share your closing without reading." },
        challenge: { task: "Share a feeling response, your closers, and your short learning, then respond to one classmate's learning with 'That's true.' or 'I agree.'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students close the recount with 'After that, ...', 'At the end, ...', and 'I learned ...'",
        "students keep 'I learned ...' short and concrete (one thing learned)",
        "students still stretch 'I learned ...' into a long moral message or an argumentative conclusion"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to name two concrete things in one 'I learned ...'.",
        needs_model: "Repeat the MODEL step, emphasizing the closers and a short, concrete 'I learned ...'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the closing sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "stretches 'I learned ...' into a long message or leaves out a closer",
        "relies only on the written closing and cannot share it without reading",
        "closes the recount with 'After that, ... / At the end, ... / I learned ...' accurately and confidently"
      ],
      action: [
        "recast the closing slowly, modeling 'After that, ...', 'At the end, ...', and a short 'I learned ...'",
        "model one more closing about a different activity to show the same pattern still works",
        "for a student who is ready, model ONE 'I learned ...' with two concrete things first -- 'I learned to clean up and to help others.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps 'I learned ...' short and concrete, not a long moral message"
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
