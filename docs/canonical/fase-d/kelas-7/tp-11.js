const skenario = {
  "persiapan": {
    "papan_tulis": "Don't (action).\nBe (adjective).\nAlways (action).",
    "kartu": "Siapkan tiga kartu aturan — lingkaran disilang untuk Don't, tanda peringatan untuk Be careful, dan tanda centang untuk Always.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan ikon skenario — membagikan password disilang, keluar dari akun, memilih password yang kuat."
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
        "teks": "Hello, class! Settle down and listen up."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu seluruh siswa fokus sebelum memulai."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Quick check. Do you have a password on your phone or tablet?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu beberapa siswa menjawab singkat dengan ya atau tidak."
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan poster keamanan digital — tunjuk setiap ikon."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this digital safety poster. What things should we protect online?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu beberapa siswa menyebutkan sesuatu dari poster. Jika tidak ada yang menjawab dalam lima detik — tunjuk ikon gembok dan tanya \"What is this for?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — biarkan poster tetap terlihat."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today we learn how to give safety rules in English."
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
          "teks": "Silangkan kedua tangan membentuk X."
        },
        {
          "tipe": "UCAP",
          "teks": "Don't share your password with anyone."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu lingkaran disilang dan ikon gembok."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat telapak tangan terbuka dengan gesture hati-hati."
        },
        {
          "tipe": "UCAP",
          "teks": "Be careful with your account on the internet."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu tanda peringatan dan ikon kartu profil."
        },
        {
          "tipe": "AKSI",
          "teks": "Angguk tegas berulang — buat tanda centang di udara."
        },
        {
          "tipe": "UCAP",
          "teks": "Always protect your privacy."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu tanda centang dan ikon perisai."
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
      "intro": "Guru mengucapkan satu aturan — siswa menirukan bersama. Satu putaran per aturan. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Aturan 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Silangkan kedua tangan membentuk X."
            },
            {
              "tipe": "UCAP",
              "teks": "Don't share your password with anyone."
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
          "label": "Aturan 2",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat telapak tangan terbuka dengan gesture hati-hati."
            },
            {
              "tipe": "UCAP",
              "teks": "Be careful with your account on the internet."
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
          "label": "Aturan 3",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angguk tegas dan buat tanda centang di udara."
            },
            {
              "tipe": "UCAP",
              "teks": "Always protect your privacy."
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
          "teks": "Good. Now write your own safety rules."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk tiga kartu aturan di papan tulis dan minta siswa cocokkan gesture dengan kartu sebelum melanjutkan."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis aturan keamanan online sendiri menggunakan tiga pola. Dikerjakan secara individual, ditulis di buku catatan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel poster keamanan digital dan kartu aturan di papan tulis di sebelah pola."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Write your own online safety rules. Use the three patterns."
        },
        {
          "tipe": "UCAP",
          "teks": "Don't blank for a prohibition. Be blank for a warning. Always blank for a tip. Keep each rule short. Do not add because."
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
          "teks": "Berjalan keliling kelas — perhatikan siswa yang menambahkan because setelah aturan — ingatkan: \"Keep it short. No because.\""
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah lima menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop writing. Now sit in groups of three or four."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu konten aturan yang ingin ditulis — tunjuk ikon di poster keamanan digital dan minta siswa pilih salah satu."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, silangkan kedua tangan, dan ucapkan \"Don't blank your password. Share? Or lose?\" Tunggu siswa memilih dan menulis satu aturan, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih satu ikon keamanan dan lengkapi satu aturan: Don't blank. Atau: Be blank. Atau: Always blank.",
        "standar": "Tulis tiga aturan — satu Don't, satu Be, dan satu Always — tentang keamanan online.",
        "tantangan": "Tulis tiga aturan, dan pasangkan satu aturan dengan satu instruksi biasa: Put your password in a safe place. Don't share it with anyone."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Tulis tiga aturan, dan pasangkan satu aturan dengan satu instruksi biasa: Put your password in a safe place. Don't share it with anyone.",
        "perlu_bantuan": "Pilih satu ikon keamanan dan lengkapi satu aturan: Don't blank. Atau: Be blank. Atau: Always blank."
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Siswa duduk dalam kelompok tiga atau empat orang — guru yang menentukan komposisi kelompok.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tentukan komposisi kelompok — tunjuk secara eksplisit siapa bergabung dengan siapa."
        },
        {
          "tipe": "UCAP",
          "teks": "In your group, take turns giving a safety rule. Don't blank. Be blank. Or Always blank."
        },
        {
          "tipe": "UCAP",
          "teks": "After each rule, the others respond with That's true. Or I agree. Then write down the rules your group likes best."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk diskusi kelompok."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati apakah aturan berdiri mandiri tanpa penjelasan panjang."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop. Stay in your group for now."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok diam dan tidak ada yang memulai — tunjuk ikon gembok di poster dan minta satu siswa ucapkan \"Don't share your password.\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa menambahkan penjelasan panjang setelah aturan — ingatkan: \"Keep it short. Just the rule.\""
        }
      ],
      "diferensiasi": {
        "mudah": "Ucapkan satu aturan ke kelompok. Yang lain merespons dengan kartu respons: That's true. Atau I agree.",
        "standar": "Ucapkan dua aturan dengan tipe berbeda tanpa membaca, dan tanggapi aturan teman.",
        "tantangan": "Berikan satu aturan yang dipasangkan dengan instruksi biasa, tanggapi aturan teman, dan bantu pilih aturan terbaik untuk poster."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Berikan satu aturan yang dipasangkan dengan instruksi biasa, tanggapi aturan teman, dan bantu pilih aturan terbaik untuk poster.",
        "perlu_bantuan": "Ucapkan satu aturan ke kelompok. Yang lain merespons dengan kartu respons: That's true. Atau I agree."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Siswa bergabung dengan kelompok baru — bukan kelompok dari langkah INTERACT — dan mempresentasikan aturan-aturan mereka.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk siapa bergabung dengan kelompok mana untuk membentuk kelompok baru."
        },
        {
          "tipe": "UCAP",
          "teks": "Form a new group of four with classmates from other groups."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok baru terbentuk dan tenang."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns presenting your safety rules. Don't blank. Be blank. Always blank."
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
          "teks": "Berjalan antar kelompok — dengarkan apakah aturan singkat dan berdiri mandiri."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk ikon di poster dan minta siswa ucapkan satu aturan berdasarkan ikon tersebut."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari yang lain — minta siswa dengarkan aturan teman dan pilih yang terbaik untuk poster."
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
        "mudah": "Presentasikan dua aturan untuk poster — boleh membaca.",
        "standar": "Presentasikan tiga aturan dengan tipe berbeda tanpa membaca.",
        "tantangan": "Presentasikan aturan-aturan, tanggapi aturan teman dengan That's true. Atau I agree, dan usulkan aturan mana yang paling cocok untuk poster."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Presentasikan aturan-aturan, tanggapi aturan teman dengan That's true. Atau I agree, dan usulkan aturan mana yang paling cocok untuk poster.",
        "perlu_bantuan": "Presentasikan dua aturan untuk poster — boleh membaca."
      }
    },
    "check": {
      "durasi_menit": 4,
      "intro": "Guru mengamati selama langkah SHARE berlangsung — bukan setelah selesai. Setelah SHARE selesai, lakukan konfirmasi cepat ke dua siswa, lalu putuskan jalur berikutnya.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon gembok di poster."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa secara acak."
        },
        {
          "tipe": "UCAP",
          "teks": "Give me a safety rule about passwords. Don't, Be, or Always. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan aturan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah aturan berdiri sendiri tanpa penjelasan atau because?"
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
          "teks": "Give me your Always rule. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan Always dengan kata kerja yang tepat?"
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
          "teks": "Angkat kembali tiga kartu aturan."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan tiga aturan sekali lagi — beri isyarat tangan ke arah siswa setiap aturan."
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
          "teks": "Silangkan kedua tangan membentuk X perlahan."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Don't share your password."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat telapak tangan terbuka."
        },
        {
          "tipe": "UCAP",
          "teks": "Be careful with your account."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan — tekankan kata kunci Don't dan Be di awal setiap aturan."
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
          "teks": "Never give your password to a stranger."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Give me one strong prohibition using Never. Just one."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Try about your account.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang tiga aturan tanpa membaca, atau menulis satu aturan tambahan untuk topik keamanan yang berbeda."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-11.js",
    pattern_id: "PAT-7-11",
    title: "Online Safety: Giving Rules and Tips",
    short_title: "Online Safety",
    grade: 7,
    genre: "Procedure",
    cluster: "B",
    topic: "Safe Internet Use",
    context: "Students create simple digital safety reminders for friends.",
    context_id: "Siswa membuat pengingat keamanan digital sederhana untuk teman-teman.",
    communicative_goal: "give rules, warnings, and helpful tips",
    communicative_goal_id: "memberikan aturan, peringatan, dan tips yang bermanfaat",
    vocabulary_domain: ["password", "account", "privacy", "internet"],
    input_anchor: "digital poster",
    output_anchor: "class safety poster",
    prerequisite_patterns: ["PAT-7-10", "PAT-7-04"],
    reusable_in: ["PAT-8-21", "PAT-8-23"],
    complexity_level: "Acquire",
    notes: "TP kesebelas Fase D, Procedure. target_pattern PAT-7-11 = 'Don't ... / Be ... / Always ...' (tiga sub-bentuk: larangan, peringatan, anjuran). Tension forbidden_overlap vs prerequisite: PAT-7-04 vs 'expressing prohibition AS opinion' -> PAT-7-04 dipakai HANYA bentuk RESPONS pendek ('That's true.'/'I agree.') sebagai pengakuan pendengar terhadap sebuah rule ('Don't share your password. That's true!'); rule itu sendiri TIDAK dijadikan opini ('I think you shouldn't...'), dan 'I think...because...' TIDAK dipakai sama sekali. PAT-7-10 ('Verb+object+place/time') sebagai support: satu instruksi biasa berdampingan dengan rule ('Put your password in a safe place.'). Sesuai forbidden_overlap 'explanation of consequences': rule berdiri MANDIRI -- TIDAK diikuti 'because someone might...' (penjelasan akibat) atau argumentasi. vocabulary_domain (password, account, privacy, internet) muncul di bahasa target. Ekstensi opsional 'Never ...' (varian larangan yang menjaga head pattern aturan imperatif) ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Hello, class! Settle down and listen up." },
      { type: "AKSI", text: "Tunggu seluruh siswa fokus sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "Quick check — do you have a password on your phone or tablet?" },
      { type: "AKSI", text: "Tampilkan poster keamanan digital dengan ikon: gembok, kartu profil, perisai, dan globe wifi." },
      { type: "UCAP", text: "Look at this digital safety poster. What things should we protect online?" },
    ],

    active_vocabulary: [
      "Don't",
      "Be",
      "Always",
      "share",
      "careful",
      "protect",
      "password",
      "account",
      "privacy",
      "internet"
    ],

    model_sentences: [
      { id: "model_1", text: "Don't share your password with anyone." },
      { id: "model_2", text: "Be careful with your account on the internet." },
      { id: "model_3", text: "Always protect your privacy." },
      { id: "model_4", text: "Put your password in a safe place. That's true!" }
    ],

    visual_cues: [
      { id: "visual_1", description: "A digital safety poster with icons: a padlock (password), a profile card (account), a shield (privacy), and a globe with wifi (internet).", description_id: "Poster keamanan digital dengan ikon: gembok (kata sandi), kartu profil (akun), perisai (privasi), dan globe dengan wifi (internet).", asset_id: null },
      { id: "visual_2", description: "Rule cards: a crossed circle for 'Don't', a warning sign for 'Be careful', and a checkmark for 'Always'.", description_id: "Kartu aturan: lingkaran disilang untuk 'Don't', tanda peringatan untuk 'Be careful', dan tanda centang untuk 'Always'.", asset_id: null },
      { id: "visual_3", description: "Scenario icons: sharing a password (crossed out), logging out of an account, choosing a strong password.", description_id: "Ikon skenario: membagikan kata sandi (disilang), keluar dari akun, memilih kata sandi yang kuat.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher crosses both hands in an X while saying 'Don't ...'.", description_id: "Guru menyilangkan kedua tangan membentuk X sambil mengucapkan 'Don't ...'." },
      { id: "gesture_2", description: "Teacher holds up an open palm in a cautious 'stop and check' gesture while saying 'Be careful ...'.", description_id: "Guru mengangkat telapak tangan terbuka dengan gestur hati-hati 'berhenti dan periksa' sambil mengucapkan 'Be careful ...'." },
      { id: "gesture_3", description: "Teacher makes a firm repeated nod (a checkmark in the air) while saying 'Always ...'.", description_id: "Guru mengangguk tegas berulang (tanda centang di udara) sambil mengucapkan 'Always ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher give simple online-safety rules with 'Don't ...', 'Be ...', and 'Always ...', alongside one normal instruction and a short listener response.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-10", "PAT-7-04"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the safety rules ('Don't ... / Be ... / Always ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own online-safety rules using 'Don't ...', 'Be ...', and 'Always ...'.",
      prompt: "Use the patterns 'Don't [action].', 'Be [adjective].', and 'Always [action].' Make rules about online safety (password, account, privacy, internet). Keep each rule on its own -- do not add 'because'.",
      change_target: ["rule type (Don't / Be / Always)", "safety action or object"],
      differentiation: {
        easy: { task: "Choose a safety icon and complete one rule: 'Don't ___.', 'Be ___.', or 'Always ___.'" },
        standard: { task: "Write three rules -- one 'Don't ...', one 'Be ...', and one 'Always ...' -- about online safety." },
        challenge: { task: "Write three rules, and pair one of them with a normal instruction: 'Put your password in a safe place. Don't share it with anyone.'" }
      },
      support: { pattern_support: ["PAT-7-10"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share online-safety rules in a small group and collect the best ones for a poster.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, take turns giving a safety rule ('Don't ... / Be ... / Always ...'). After each rule, the others respond with a short reaction ('That's true.' or 'I agree.'). Write down the rules your group likes best for a class safety poster.",
      differentiation: {
        easy: { task: "Say one rule to your group; the others respond with a response card ('That's true.' or 'I agree.')." },
        standard: { task: "Say two rules of different types without reading, and respond to your classmates' rules." },
        challenge: { task: "Give a rule paired with a normal instruction, respond to others, and help choose the best rules for the poster." }
      },
      support: { pattern_support: ["PAT-7-10", "PAT-7-04"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your group's safety rules for the class safety poster.",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other groups. Take turns presenting your safety rules ('Don't ... / Be ... / Always ...') as contributions to the class safety poster.",
      differentiation: {
        easy: { task: "Present two of your rules for the poster. You may read them." },
        standard: { task: "Present three rules of different types without reading." },
        challenge: { task: "Present your rules, then respond to a classmate's rule with 'That's true.' or 'I agree.' and suggest which rules belong on the poster." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students give rules with 'Don't ...', 'Be ...', and 'Always ...'",
        "students keep each rule as a standalone command, without turning it into an opinion ('I think you shouldn't ...')",
        "students still add a consequence ('because someone might ...') or explain at length instead of giving a clear rule"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to give a strong prohibition with 'Never ...'.",
        needs_model: "Repeat the MODEL step, emphasizing 'Don't ...', 'Be ...', 'Always ...' as short, clear rules.",
        needs_repeat: "Do one more round of REPEAT (choral) on the rules before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "turns a rule into an opinion or adds a consequence explanation",
        "relies only on the written rules and cannot give them without reading",
        "gives 'Don't / Be / Always' rules accurately and confidently"
      ],
      action: [
        "recast the rule slowly as a short, clear command ('Don't ...', 'Be ...', 'Always ...')",
        "model one more rule about a different safety topic to show the same pattern still works",
        "for a student who is ready, model ONE strong prohibition with 'Never ...' first -- 'Never give your password to a stranger.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the rule on its own, with no 'because' or consequence explanation"
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
