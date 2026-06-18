const skenario = {
  "persiapan": {
    "papan_tulis": "Notice: (message)\nNo (thing).\nKeep (short instruction).\nUse (short instruction).",
    "kartu": "Siapkan kartu format tanda yang menunjukkan empat jenis pengumuman: Notice: blank, No blank, Keep blank, Use blank.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan pemandangan gudang tua tidak terpakai dengan pintu tertutup dan tanda peringatan sebagai hook motivasi."
      }
    ]
  },
  "siapkan_kelas": {
    "settling": [
      {
        "tipe": "AKSI",
        "teks": "Berdiri di depan kelas — berbicara perlahan dengan nada misterius."
      },
      {
        "tipe": "UCAP",
        "teks": "Morning! I have something mysterious to show you today."
      },
      {
        "tipe": "AKSI",
        "teks": "Buat suasana penasaran sebelum memulai."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Have you ever noticed old signs or warning notices around this school?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu tanda dan pengumuman dekat gudang tua satu per satu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these signs near an old storage room. What do you think is behind that door?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa. Jika tidak ada yang menjawab dalam lima detik — tunjuk kartu Keep Out dan tanya \"What does this sign tell you to do?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — biarkan kartu tetap terlihat."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today we learn how to read and write short notices like these."
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
          "teks": "Tunjuk tegas ke kartu Notice."
        },
        {
          "tipe": "UCAP",
          "teks": "Notice: Keep this door closed."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pintu di gambar pemandangan gudang tua."
        },
        {
          "tipe": "AKSI",
          "teks": "Buat gestur X atau berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "No entry to the secret room."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu No Entry."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pintu lain di gambar."
        },
        {
          "tipe": "UCAP",
          "teks": "Keep out. Use the side door only."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pintu samping."
        },
        {
          "tipe": "AKSI",
          "teks": "Buat gestur X atau berhenti — tunjuk pintu lain."
        },
        {
          "tipe": "UCAP",
          "teks": "No food in this room."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu No."
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
      "intro": "Guru membacakan satu notice — siswa menirukan bersama. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Notice 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk tegas ke kartu Notice — tunjuk pintu."
            },
            {
              "tipe": "UCAP",
              "teks": "Notice: Keep this door closed."
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
          "label": "Notice 2",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Buat gestur X atau berhenti — tunjuk kartu No Entry."
            },
            {
              "tipe": "UCAP",
              "teks": "No entry to the secret room."
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
          "label": "Notice 3",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk pintu lain — tunjuk kartu Use."
            },
            {
              "tipe": "UCAP",
              "teks": "Keep out. Use the side door only."
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
          "teks": "Good. Now write your own notices."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk kartu format tanda dan minta siswa baca bersama empat jenis: Notice: blank, No blank, Keep blank, Use blank."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa membuat tanda dan pengumuman mereka sendiri untuk gudang tua. Dikerjakan secara individual, ditulis di buku catatan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel kartu tanda dan kartu format di papan tulis di sebelah pola."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Create your own notices for the old storage room. Use: Notice: blank, No blank, Keep blank, or Use blank."
        },
        {
          "tipe": "UCAP",
          "teks": "Short signs only. Not a story. Not a description. Not an opinion. Just a notice."
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
          "teks": "Berjalan keliling kelas — perhatikan siswa yang menulis cerita atau penjelasan panjang, dan ingatkan: \"Short. Like a sign. Notice: blank. Or: No blank.\""
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
          "teks": "Jika siswa tidak tahu pesan apa yang ingin ditulis — tunjuk kartu format tanda dan tanya \"What should people do near this door? No blank? Keep blank?\" Bantu siswa melengkapi."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, buat gestur X, dan ucapkan \"No blank. Entry? Or: No blank. Enter?\" Tunggu siswa melengkapi dan menulis satu notice, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih satu ikon tanda dan lengkapi satu notice: No blank. Atau: Keep blank. Atau: Use blank.",
        "standar": "Tulis dua notices dengan jenis yang berbeda untuk gudang tua.",
        "tantangan": "Tulis tiga notices (Notice: blank, No blank, Keep blank atau Use blank), dan tambahkan satu kolom formulir netral: Choice: Storage Room."
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Siswa duduk dalam kelompok tiga atau empat — guru yang menentukan komposisi kelompok.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tentukan komposisi kelompok — tunjuk secara eksplisit siapa bergabung dengan siapa."
        },
        {
          "tipe": "UCAP",
          "teks": "In your group, look at the notice cards near the old storage room. Read each one and point to what it means."
        },
        {
          "tipe": "UCAP",
          "teks": "Then write your own notices for the room using Notice: blank, No blank, Keep blank, or Use blank."
        },
        {
          "tipe": "AKSI",
          "teks": "Bagikan kartu notice misterius ke setiap kelompok."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk membaca, mencocokkan makna, dan menulis notice sendiri."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati apakah notice yang ditulis tetap dalam format singkat, bukan cerita."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop. Stay in your group."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok diam dan tidak ada yang memulai — tunjuk satu kartu notice dan minta satu siswa membacakannya keras."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada siswa yang menulis cerita atau penjelasan — tunjuk kartu format tanda: \"Short. Like a sign. Notice: blank. Or: No blank.\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok selesai lebih cepat — minta kelompok tukar kartu notice dan cocokkan dengan makna yang berbeda."
        }
      ],
      "diferensiasi": {
        "mudah": "Bacakan satu kartu notice dan tunjuk apa maknanya. Lalu salin atau lengkapi satu notice sendiri.",
        "standar": "Cocokkan dua atau tiga kartu notice dengan maknanya, lalu tulis dua notices sendiri.",
        "tantangan": "Cocokkan semua kartu notice dengan maknanya, lalu tulis tiga notices dan satu kolom formulir netral."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Siswa menempelkan notices mereka di dinding kelas dan berkeliling membaca notices kelompok lain.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Minta setiap kelompok menempelkan notices mereka di satu bagian dinding kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Post your notices on the wall. Then walk around and read other groups' notices. Match each one to what it means."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk berkeliling dan membaca notices kelompok lain."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — perhatikan apakah siswa dapat mencocokkan notice dengan makna yang tepat."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada siswa yang tidak bisa membaca notice kelompok lain — dekati, tunjuk kata kunci di notice (No, Keep, Use, Notice), dan minta siswa cocokkan dengan gambar atau tindakan yang sesuai."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada notice yang ditulis sebagai cerita — tepuk kartu format tanda dan ingatkan: \"Short sign. Notice: blank. Not a story.\""
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
        "mudah": "Tempelkan satu notice dan baca dua notices kelompok lain — tunjuk apa yang dimaksud setiap notice.",
        "standar": "Tempelkan dua notices dan baca beberapa lainnya — cocokkan setiap notice dengan maknanya.",
        "tantangan": "Tempelkan set notices, baca notices kelompok lain, dan temukan satu notice yang cocok dengan setiap makna di dinding."
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
          "teks": "Give me one notice for the old storage room. Notice: blank, No blank, Keep blank, or Use blank. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan notice."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah notice dalam format singkat tanpa menjadi cerita atau penjelasan panjang?"
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
          "teks": "Your second notice. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa bisa membacakan notice dengan format yang tepat tanpa membaca kata per kata?"
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
          "teks": "Angkat kembali kartu format tanda."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan dua notices sekali lagi — beri isyarat tangan ke arah siswa setiap notice."
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
          "teks": "Tunjuk tegas ke kartu Notice."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Notice: Keep this door closed."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Buat gestur X."
        },
        {
          "tipe": "UCAP",
          "teks": "No entry to the secret room."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan — tekankan bahwa notice harus singkat, dimulai dengan kata kunci."
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
          "teks": "Please keep out."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "A polite notice. Now you try. Give me one polite public notice with Please. Just one."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Short and polite. Keep the notice format.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang dua notices tanpa membaca, atau menulis satu notice baru untuk tempat lain di sekolah."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-20.js",
    pattern_id: "PAT-7-20",
    title: "The Old Storage Room: Reading Mysterious Notices",
    short_title: "Old Storage Room",
    grade: 7,
    genre: "Functional",
    cluster: "B",
    topic: "Mysterious School Notices",
    context: "Students observe warning signs and public notices placed near an old unused room and imagine why they exist.",
    context_id: "Siswa mengamati tanda peringatan dan pengumuman publik di dekat ruangan tua yang tidak terpakai dan membayangkan alasan keberadaannya.",
    communicative_goal: "interpret public notices and infer simple contextual meaning",
    communicative_goal_id: "menafsirkan pengumuman publik dan menyimpulkan makna kontekstual sederhana",
    vocabulary_domain: ["notice", "warning", "door", "secret"],
    input_anchor: "notice and sign cards",
    output_anchor: "notice interpretation",
    prerequisite_patterns: ["PAT-7-19"],
    reusable_in: ["PAT-8-17", "PAT-8-18", "PAT-8-20"],
    complexity_level: "Acquire",
    notes: "TP kedua puluh Fase D, Functional, menutup blok Functional Kelas 7. target_pattern PAT-7-20 = 'Notice: ... / No ... / Keep ... / Use ...' -- FORMAT NOTICE/SIGN (lanjutan register fragmen). Topik 'mysterious'/'secret' (ruang penyimpanan tua) adalah HOOK MOTIVASI lewat input_anchor (kartu notice/sign) dan output_anchor 'notice interpretation' (menafsirkan makna/konteks notice). TAPI output bahasa WAJIB tetap FORMAT NOTICE (Notice:/No.../Keep.../Use...) -- JANGAN bergeser jadi CERITA NARATIF lampau (itu wilayah Genre Narrative PAT-7-21+, bukan batch ini). 'Interpret' di sini = mencocokkan notice dengan makna/tindakan (menunjuk gambar), BUKAN opini ('I think...'). forbidden_overlap lain: TIDAK ada penjelasan prosedural panjang, TIDAK ada label deskriptif murni, TIDAK ada pesan argumentatif. PAT-7-19 ('Name:/Class:/Choice:...') sebagai support: satu field formulir NETRAL terkait ('Choice: Storage Room.' -- bukan 'Choice: I think...'). vocabulary_domain (notice, warning, door, secret) muncul di bahasa target. Ekstensi opsional notice publik yang sopan ('Please keep out.') -- menggabungkan kesopanan dengan head notice, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Morning! I have something mysterious to show you today." },
      { type: "AKSI", text: "Buat suasana penasaran — berbicara perlahan dan dengan nada misterius." },
      // HOOK
      { type: "UCAP", text: "Have you ever noticed old signs or warning notices around this school?" },
      { type: "AKSI", text: "Tampilkan kartu pengumuman dan tanda dekat gudang tua: 'Keep Out', 'No Entry', 'Notice:', pintu tertutup." },
      { type: "UCAP", text: "Look at these signs near an old storage room. What do you think is behind that door?" },
    ],

    active_vocabulary: [
      "Notice:",
      "No",
      "Keep",
      "Use",
      "Warning:",
      "door",
      "secret"
    ],

    model_sentences: [
      { id: "model_1", text: "Notice: Keep this door closed." },
      { id: "model_2", text: "No entry to the secret room." },
      { id: "model_3", text: "Keep out. Use the side door only." },
      { id: "model_4", text: "Warning: Do not open. Choice: Storage Room." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Notice and sign cards near an old storage room: 'Keep Out', 'No Entry', a 'Notice:' sign, and a mysterious closed door.", description_id: "Kartu pengumuman dan tanda dekat gudang tua: 'Keep Out', 'No Entry', tanda 'Notice:', dan pintu tertutup yang misterius.", asset_id: null },
      { id: "visual_2", description: "Sign-format cards showing the four notice types: 'Notice: ...', 'No ...', 'Keep ...', 'Use ...'.", description_id: "Kartu format tanda yang menunjukkan empat jenis pengumuman: 'Notice: ...', 'No ...', 'Keep ...', 'Use ...'.", asset_id: null },
      { id: "visual_3", description: "A scene of the old, unused storage room with a closed door and a warning sign, as a motivating hook.", description_id: "Pemandangan gudang tua yang tidak terpakai dengan pintu tertutup dan tanda peringatan, sebagai pemicu motivasi.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points firmly to a posted sign while reading 'Notice: ...' / 'Warning: ...'.", description_id: "Guru menunjuk tegas ke tanda yang terpasang sambil membaca 'Notice: ...' / 'Warning: ...'." },
      { id: "gesture_2", description: "Teacher makes an X / stop gesture while reading 'No ...'.", description_id: "Guru membuat gestur X / berhenti sambil membaca 'No ...'." },
      { id: "gesture_3", description: "Teacher points to the correct door while reading 'Keep ...' / 'Use ...'.", description_id: "Guru menunjuk pintu yang benar sambil membaca 'Keep ...' / 'Use ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher read short public notices and signs in the 'Notice: ... / No ... / Keep ... / Use ...' format and match each to what it means.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-19"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice reading the notices ('Notice: ... / No ... / Keep ... / Use ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Create your own notices for the old storage room using the notice format.",
      prompt: "Use the notice formats 'Notice: [message]', 'No [thing]', 'Keep [short instruction]', and 'Use [short instruction]'. Write signs for the old storage room (notice, warning, door, secret). Keep them as short signs -- do not write a story.",
      change_target: ["notice type (Notice / No / Keep / Use)", "message"],
      differentiation: {
        easy: { task: "Choose a sign icon and complete one notice: 'No ___.', 'Keep ___.', or 'Use ___.'" },
        standard: { task: "Write two notices of different types for the old storage room." },
        challenge: { task: "Write three notices (Notice:/No.../Keep.../Use...), and add a neutral form field about the room ('Choice: Storage Room.')." }
      },
      support: { pattern_support: ["PAT-7-19"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Interpret the mysterious notices and create notices with a small group.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, look at the mysterious notice cards near the old storage room. Read each notice and match it to what it means by pointing to the right picture or action. Then write your own notices for the room using 'Notice: / No ... / Keep ... / Use ...'.",
      differentiation: {
        easy: { task: "Read one notice card and point to what it means. Then copy or complete one notice of your own." },
        standard: { task: "Match two or three notice cards to their meanings, then write two notices of your own." },
        challenge: { task: "Match all the notice cards to their meanings, then write three notices and a neutral form field about the room." }
      },
      support: { pattern_support: ["PAT-7-19"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Post and read notices for the old storage room (notice interpretation).",
      share_mode: "gallery_share",
      task: "Post your notices for the old storage room on the class wall. Walk around and read other groups' notices, matching each one to what it means.",
      differentiation: {
        easy: { task: "Post one notice and read two notices from other groups, pointing to what each means." },
        standard: { task: "Post two notices and read several others, matching each to its meaning." },
        challenge: { task: "Post your set of notices, read other groups' notices, and find one notice that matches each meaning on the wall." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students write notices in the 'Notice: ... / No ... / Keep ... / Use ...' format",
        "students keep them as short signs, not a past story or a long procedural explanation",
        "students still write a descriptive label only, or an argumentative message, instead of a notice"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to write a polite public notice ('Please keep out.').",
        needs_model: "Repeat the MODEL step, emphasizing the four notice forms (Notice: / No ... / Keep ... / Use ...).",
        needs_repeat: "Do one more round of REPEAT (choral) on the notices before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "writes a story or a long explanation instead of a short notice",
        "relies only on the written notices and cannot read a sign without reading word-by-word",
        "writes notices in the 'Notice: / No ... / Keep ... / Use ...' format accurately and confidently"
      ],
      action: [
        "recast the message slowly as a short notice ('Notice: ...', 'No ...', 'Keep ...', 'Use ...')",
        "model one more notice for a different place to show the same format still works",
        "for a student who is ready, model ONE polite public notice first -- 'Please keep out.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the notice head, not a story or an argument"
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
