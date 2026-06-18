const skenario = {
  "persiapan": {
    "papan_tulis": "If you want to (goal), (verb) ...\nUse (tool) to (goal).",
    "kartu": "Siapkan kartu panah tujuan-ke-tindakan — If you want to blank dipasangkan dengan use blank atau kata kerja.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan ikon alat dan tindakan — kamus untuk dictionary, buku catatan untuk notes, siswa berlatih untuk practice."
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
        "teks": "Good morning, everyone! I hope you studied last night."
      },
      {
        "tipe": "AKSI",
        "teks": "Tanya siswa apakah ada yang memiliki pertanyaan sebelum memulai."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "What do you do when you want to remember something important from class?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu beberapa siswa menjawab singkat."
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan tiga kartu skenario belajar satu per satu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these study goals. Which one do you need the most help with?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu beberapa siswa merespons. Jika tidak ada yang menjawab dalam lima detik — tunjuk kartu pertama dan tanya \"Want to learn new words? What do you use?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — letakkan kartu di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today we learn how to connect a goal with the right tool or action."
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
          "teks": "Tunjuk ke depan untuk tujuan — lalu arahkan ke ikon kamus."
        },
        {
          "tipe": "UCAP",
          "teks": "If you want to learn new words, use a dictionary."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan membuka kamus."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan menulis catatan."
        },
        {
          "tipe": "UCAP",
          "teks": "Use your notes to remember the lesson."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon buku catatan."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ke depan untuk tujuan — peragakan menulis berulang."
        },
        {
          "tipe": "UCAP",
          "teks": "If you want to study well, practice every day."
        },
        {
          "tipe": "AKSI",
          "teks": "Angguk tegas berulang — buat tanda centang di udara."
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
      "intro": "Guru mengucapkan satu pasangan tujuan-tindakan — siswa menirukan bersama. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Pasangan 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk ke depan untuk tujuan — arahkan ke ikon kamus."
            },
            {
              "tipe": "UCAP",
              "teks": "If you want to learn new words, use a dictionary."
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
          "label": "Pasangan 2",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Peragakan menulis catatan — tunjuk ikon buku catatan."
            },
            {
              "tipe": "UCAP",
              "teks": "Use your notes to remember the lesson."
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
          "label": "Pasangan 3",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk ke depan — peragakan berlatih."
            },
            {
              "tipe": "UCAP",
              "teks": "If you want to study well, practice every day."
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
          "teks": "Good. Now write your own goal and action pairs."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk kartu panah tujuan-ke-tindakan dan minta siswa membaca bersama: If you want to blank, blank. Atau: Use blank to blank."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menghubungkan tujuan belajar mereka sendiri dengan alat atau tindakan yang tepat. Dikerjakan secara individual, ditulis di buku catatan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel kartu skenario belajar dan ikon alat di papan tulis di sebelah pola."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Write your own study goal and the right action or tool."
        },
        {
          "tipe": "UCAP",
          "teks": "Use: If you want to blank, blank. Or: Use blank to blank. Do not add because."
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
          "teks": "Berjalan keliling kelas — perhatikan siswa yang menambahkan because atau menulis tindakan tanpa tujuan."
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
          "teks": "Jika siswa bingung menghubungkan tujuan dan alat — tunjuk kartu panah tujuan-ke-tindakan dan minta siswa cocokkan kartu tujuan dengan kartu alat yang tepat terlebih dahulu."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk ikon kamus, dan ucapkan \"If you want to learn new words, use blank.\" Tunggu siswa melengkapi dan menulis, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Cocokkan satu kartu tujuan dengan satu alat dan lengkapi: If you want to blank, use blank.",
        "standar": "Tulis dua pasangan tujuan-tindakan: satu If you want to blank, blank dan satu Use blank to blank.",
        "tantangan": "Tulis satu pasangan tujuan-tindakan, lalu dukung dengan prosedur singkat: First, blank. Then, blank. Tambahkan satu instruksi: Put blank. Dan satu aturan: Always blank."
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
          "teks": "Minta Siswa A menyebutkan satu tujuan belajar: If you want to learn new words."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B menjawab dengan alat atau tindakan yang tepat: use a dictionary."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya tukar peran."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Take turns. One says the goal, the other answers with the tool or action. Then swap. Work with the person next to you."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk dialog tujuan-tindakan dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati beberapa pasangan di setiap baris."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk kartu tujuan belajar pertama dan minta Siswa A ucapkan \"If you want to blank\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai lebih cepat — minta siswa gunakan tujuan berbeda yang belum disebutkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Sebutkan satu tujuan. Pasangan jawab dengan alat: use a dictionary. Lalu tukar.",
        "standar": "Bergantian mencocokkan tujuan dan tindakan tanpa membaca — minimal dua pasang masing-masing, menggunakan kedua pola If you want to dan Use blank to.",
        "tantangan": "Setelah mencocokkan tujuan dan tindakan, tambahkan prosedur singkat atau aturan pada jawabanmu: First, blank. Then, blank. Atau: Always blank. Lalu tukar."
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
          "teks": "Take turns performing your goal-action matching dialogue for the new group."
        },
        {
          "tipe": "UCAP",
          "teks": "One says the study goal, the partner answers with the tool or action."
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
          "teks": "Beri waktu enam menit untuk semua pasangan tampil ke kelompok baru."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — dengarkan apakah pasangan menjaga struktur tujuan-ke-tindakan."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada pasangan yang diam dan tidak mulai — tunjuk kartu tujuan belajar dan minta Siswa A mulai dengan \"If you want to blank.\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa menjawab dengan because atau penjelasan panjang — ingatkan: \"Just the action. If you want to blank, use blank. Short.\""
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
        "mudah": "Tampilkan satu pasangan tujuan-tindakan ke kelompok baru — boleh membaca.",
        "standar": "Tampilkan dua pasangan tujuan-tindakan tanpa membaca, menggunakan kedua pola.",
        "tantangan": "Tampilkan pasangan tujuan-tindakan dan tambahkan prosedur singkat atau aturan pada satu jawaban, lalu dengarkan dan tanggapi pasangan teman."
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
          "teks": "If you want to remember the lesson, what do you use? Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menjawab dengan alat atau tindakan yang tepat."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menjaga struktur Use blank to blank tanpa menambahkan because atau penjelasan?"
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
          "teks": "Give me a goal: If you want to blank. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa bisa menyebutkan tujuan dengan If you want to dengan lancar?"
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
          "teks": "Angkat kembali kartu panah tujuan-ke-tindakan."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan dua pasangan tujuan-tindakan sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Tunjuk ke depan untuk tujuan — arahkan ke ikon kamus."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. If you want to learn new words, use a dictionary."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Satukan kedua tangan untuk menunjukkan tujuan dan tindakan adalah satu pasangan."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now try: If you want to remember the lesson, use blank."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa melengkapi."
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
          "teks": "If you want to learn new words, use a dictionary or ask your teacher."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Give me one goal with two different options. Just one."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Try with a different goal.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang pasangan tujuan-tindakan tanpa membaca, atau menulis satu pasangan baru tentang tujuan belajar yang berbeda."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-12.js",
    pattern_id: "PAT-7-12",
    title: "Study Habits: Choosing Helpful Strategies",
    short_title: "Study Habits",
    grade: 7,
    genre: "Procedure",
    cluster: "B",
    topic: "Effective Study Habits",
    context: "Students discuss simple goals and choose appropriate tools or actions to study better.",
    context_id: "Siswa mendiskusikan tujuan sederhana dan memilih alat atau tindakan yang sesuai untuk belajar lebih baik.",
    communicative_goal: "connect goals with appropriate actions or tools",
    communicative_goal_id: "menghubungkan tujuan dengan tindakan atau alat yang sesuai",
    vocabulary_domain: ["study", "dictionary", "notes", "practice"],
    input_anchor: "study scenario cards",
    output_anchor: "goal-action matching dialogue",
    prerequisite_patterns: ["PAT-7-09", "PAT-7-10", "PAT-7-11"],
    reusable_in: ["PAT-8-09", "PAT-8-11", "PAT-9-14"],
    complexity_level: "Acquire",
    notes: "TP kedua belas Fase D, Procedure, menutup genre Procedure Kelas 7. target_pattern PAT-7-12 = 'If you want to ..., Verb ... / Use ... to ...' -- memetakan tujuan ke tindakan/alat yang tepat. DISTINGSI PENTING: meskipun target memuat 'If you want to...', forbidden_overlap melarang 'conditional problem solving'. 'If you want to [GOAL], [Verb.../Use...to...]' di sini adalah PEMETAAN GOAL->TOOL/AKSI yang FORMULAIK (satu pasangan tujuan-tindakan tetap), BUKAN penalaran hipotetis if-then tentang konsekuensi ('if X happens, then Y will result', 'what if...', menimbang outcome). TIDAK ada 'because' (cause-effect/giving reasons). Tiga prerequisite dari genre Procedure di-chain alami: PAT-7-09 ('First,...Then,...Finally,...'), PAT-7-10 ('Verb+object+place/time'), PAT-7-11 ('Always ...') -- dipakai sebagai support setelah pemetaan goal->action. vocabulary_domain (study, dictionary, notes, practice) muncul di bahasa target. Ekstensi opsional menawarkan dua alternatif untuk satu goal ('If you want to learn new words, use a dictionary or ask your teacher.') -- menjaga head pattern 'If you want to...' -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, everyone! I hope you studied last night." },
      { type: "AKSI", text: "Tanya siswa apakah ada yang memiliki pertanyaan sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "What do you do when you want to remember something important from class?" },
      { type: "AKSI", text: "Tampilkan kartu skenario belajar: belajar kata baru, mengingat pelajaran, belajar untuk ujian." },
      { type: "UCAP", text: "Look at these study goals. Which one do you need the most help with?" },
    ],

    active_vocabulary: [
      "If you want to",
      "Use",
      "to",
      "study",
      "dictionary",
      "notes",
      "practice",
      "learn",
      "remember"
    ],

    model_sentences: [
      { id: "model_1", text: "If you want to learn new words, use a dictionary." },
      { id: "model_2", text: "Use your notes to remember the lesson." },
      { id: "model_3", text: "If you want to study well, practice every day. Always check your spelling." },
      { id: "model_4", text: "First, open your dictionary. Then, find the word. Put it in your notes." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Study scenario cards showing goals: learning new words, remembering a lesson, and studying for a test.", description_id: "Kartu skenario belajar yang menunjukkan tujuan: mempelajari kata baru, mengingat pelajaran, dan belajar untuk ujian.", asset_id: null },
      { id: "visual_2", description: "Tool and action icons: a dictionary, a notebook (notes), and a student practicing (repeating/writing).", description_id: "Ikon alat dan tindakan: kamus, buku catatan (catatan), dan siswa berlatih (mengulang/menulis).", asset_id: null },
      { id: "visual_3", description: "Goal-to-action arrow cards matching 'If you want to [goal]' with 'use [tool] / [action]'.", description_id: "Kartu panah tujuan-ke-tindakan yang memasangkan 'If you want to [goal]' dengan 'use [tool] / [action]'.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points ahead ('the goal') while saying 'If you want to ...', then gestures to a tool while saying 'use ...'.", description_id: "Guru menunjuk ke depan ('tujuan') sambil mengucapkan 'If you want to ...', lalu mengarahkan ke alat sambil mengucapkan 'use ...'." },
      { id: "gesture_2", description: "Teacher mimes using the tool (opening a dictionary, writing notes) while saying 'Use ... to ...'.", description_id: "Guru memperagakan penggunaan alatnya (membuka kamus, menulis catatan) sambil mengucapkan 'Use ... to ...'." },
      { id: "gesture_3", description: "Teacher links the two hands together to show the goal and the action belong as one pair.", description_id: "Guru menyatukan kedua tangan untuk menunjukkan bahwa tujuan dan tindakan adalah satu pasangan." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher connect a study goal with a helpful tool or action using 'If you want to ..., Verb ...' and 'Use ... to ...', supported by a simple procedure and rule.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-09", "PAT-7-10", "PAT-7-11"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the goal-action sentences ('If you want to ..., Verb ...' / 'Use ... to ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Connect your own study goal with a helpful tool or action.",
      prompt: "Use the patterns 'If you want to [goal], [verb] ...' and 'Use [tool] to [goal].' Replace the goal and the tool/action with study ideas (study, dictionary, notes, practice). Do not add 'because'.",
      change_target: ["goal (If you want to ...)", "tool/action (Use ... / Verb ...)"],
      differentiation: {
        easy: { task: "Match a goal card with a tool and complete: 'If you want to ___, use ___.'" },
        standard: { task: "Write two goal-action pairs: one 'If you want to ..., [verb] ...' and one 'Use ... to ...'." },
        challenge: { task: "Write one goal-action pair, then support it with a short procedure ('First, ... Then, ...'), one instruction ('Put ...'), and one rule ('Always ...')." }
      },
      support: { pattern_support: ["PAT-7-09", "PAT-7-10", "PAT-7-11"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Play a goal-action matching dialogue with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: one says a study goal ('If you want to ...'), and the other answers with a helpful tool or action ('use ...' / a verb). Then swap roles.",
      differentiation: {
        easy: { task: "Say a goal; your partner answers with a tool ('use a dictionary'). Then swap." },
        standard: { task: "Take turns matching goals and actions without reading, at least two each, using both 'If you want to ..., [verb] ...' and 'Use ... to ...'." },
        challenge: { task: "After matching a goal and action, add a short procedure or rule to your answer ('First, ... Then, ...' / 'Always ...'). Then swap." }
      },
      support: { pattern_support: ["PAT-7-09", "PAT-7-10", "PAT-7-11"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Perform your goal-action matching dialogue for a new group.",
      share_mode: "short_dialogue",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns performing your goal-action matching dialogues -- one says a study goal, the partner answers with a tool or action.",
      differentiation: {
        easy: { task: "Perform one goal-action match for the new group. You may read it." },
        standard: { task: "Perform two goal-action matches without reading, using both patterns." },
        challenge: { task: "Perform your matches and add a short procedure or rule to one answer, then listen and respond to a classmate's match." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students connect a goal with a tool or action using 'If you want to ..., [verb] ...' or 'Use ... to ...'",
        "students keep it as a fixed goal-action pairing, without hypothetical reasoning ('what if ...') or 'because'",
        "students still give an action without a goal, or add a cause-effect explanation"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to offer two alternative actions for one goal.",
        needs_model: "Repeat the MODEL step, emphasizing the goal-action pairing 'If you want to ..., [verb] ...' / 'Use ... to ...'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the goal-action sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives an action without naming the goal, or adds a cause-effect explanation",
        "relies only on the written pairs and cannot match without reading",
        "connects goals with tools/actions accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling the goal-action pairing 'If you want to ..., [verb] ...' / 'Use ... to ...'",
        "model one more goal-action pair on a different study goal to show the same pattern still works",
        "for a student who is ready, model ONE pair with two alternative actions first -- 'If you want to learn new words, use a dictionary or ask your teacher.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the 'If you want to ...' head, with no 'because' or hypothetical reasoning"
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
