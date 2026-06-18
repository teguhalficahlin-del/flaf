const skenario = {
  "persiapan": {
    "papan_tulis": "Please (action).\nPlease don't (action).",
    "kartu": "Siapkan kartu kesopanan yang menunjukkan peraturan blak-blakan di sebelah versi sopannya: Don't lose my book di sebelah Please don't lose my book.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan ikon barang yang dipinjam dan dikembalikan teman — buku, kotak pensil, dan pulpen."
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
        "teks": "Morning, everyone! Check your phones quickly, then put them away."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu kelas siap untuk memulai pelajaran."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Have you ever sent a message to a class group chat? What did you write?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu tangkapan layar grup chat kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these chat messages. What makes them polite?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa. Jika tidak ada yang menjawab dalam lima detik — tunjuk kartu kesopanan dan tanya \"What word makes this message polite?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — letakkan kartu di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today we learn how to write polite messages in English."
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
          "teks": "Peragakan mengetik pesan di ponsel."
        },
        {
          "tipe": "AKSI",
          "teks": "Ulurkan tangan terbuka yang ramah."
        },
        {
          "tipe": "UCAP",
          "teks": "Please bring my English book tomorrow."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon buku."
        },
        {
          "tipe": "AKSI",
          "teks": "Buat gestur tidak lembut dengan satu tangan."
        },
        {
          "tipe": "UCAP",
          "teks": "Please don't forget your pencil case."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon kotak pensil."
        },
        {
          "tipe": "AKSI",
          "teks": "Buat gestur tidak lembut — tunjuk ikon pulpen."
        },
        {
          "tipe": "UCAP",
          "teks": "Please don't lose my pen."
        },
        {
          "tipe": "AKSI",
          "teks": "Ulurkan tangan terbuka. Angguk."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan mengetik pesan di ponsel."
        },
        {
          "tipe": "UCAP",
          "teks": "Please reply to my friends in the class chat."
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
      "intro": "Guru mengucapkan satu pesan — siswa menirukan bersama. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Pesan 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Ulurkan tangan terbuka — tunjuk ikon buku."
            },
            {
              "tipe": "UCAP",
              "teks": "Please bring my English book tomorrow."
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
          "label": "Pesan 2",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Buat gestur tidak lembut — tunjuk ikon kotak pensil."
            },
            {
              "tipe": "UCAP",
              "teks": "Please don't forget your pencil case."
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
          "label": "Pesan 3",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Buat gestur tidak lembut — tunjuk ikon pulpen."
            },
            {
              "tipe": "UCAP",
              "teks": "Please don't lose my pen."
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
          "teks": "Good. Now write your own polite messages."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk kartu kesopanan dan minta siswa baca bersama sekali lagi: Please blank. Dan: Please don't blank."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis pesan chat sopan mereka sendiri. Dikerjakan secara individual, ditulis di buku catatan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel ikon barang di papan tulis di sebelah pola."
        },
        {
          "tipe": "AKSI",
          "teks": "Tempel kartu kesopanan di papan tulis."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Write your own polite chat messages. One request and one reminder."
        },
        {
          "tipe": "UCAP",
          "teks": "Please blank for a request. Please don't blank for a reminder. About school items. No sequencing. No Let's. No I think."
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
          "teks": "Berjalan keliling kelas — perhatikan siswa yang menulis First atau Let's atau I think, dan ingatkan: \"Just a message. Please blank. Or: Please don't blank.\""
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
          "teks": "Jika siswa tidak tahu aksi apa yang ingin ditulis — tunjuk ikon barang dan tanya \"What can you ask your friend to do with this?\" Bantu dengan \"Please blank my blank.\" Dan tunggu siswa melengkapi."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, ulurkan tangan terbuka, dan ucapkan \"Please bring my blank. Book? Pencil?\" Tunggu siswa memilih dan menulis satu pesan, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih satu ikon barang dan lengkapi satu pesan: Please blank my blank. Atau: Please don't blank my blank.",
        "standar": "Tulis dua pesan — satu Please blank sebagai permintaan dan satu Please don't blank sebagai pengingat.",
        "tantangan": "Ambil satu peraturan blak-blakan: Don't lose my pen. Tulis ulang secara sopan: Please don't lose my pen. Lalu tambahkan satu permintaan Please blank."
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
          "teks": "Minta Siswa A mengirimkan satu pesan sopan tentang barang sekolah ke Siswa B: Please bring my English book tomorrow."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B membalas dengan pesan sopan: Please don't forget my pencil case."
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
          "teks": "That is it. Take turns. Send a polite message. Your partner replies politely. Then swap. Work with the person next to you."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk bertukar pesan dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati apakah pesan tetap singkat dan mandiri tanpa sequencing atau invitation."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — ulurkan tangan terbuka ke arah pasangan dan ucapkan \"Please blank my blank. What do you need from your friend?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan menulis First atau Let's di pesan — tunjuk pola di papan tulis dan ucapkan \"Just a chat message. Please blank. Short.\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai lebih cepat — minta siswa tulis satu pesan sopan lagi tentang barang berbeda."
        }
      ],
      "diferensiasi": {
        "mudah": "Kirimkan satu pesan dari buku catatan ke pasangan — boleh membaca. Pasangan membalas dengan pesan sopan.",
        "standar": "Tukarkan dua pesan masing-masing tanpa membaca — satu permintaan dan satu pengingat.",
        "tantangan": "Kirimkan pengingat dan permintaan sopan, dan balas pesan pasangan secara sopan."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Setiap pasangan bergabung dengan satu pasangan lain — bukan pasangan dari langkah INTERACT — membentuk kelompok empat orang.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Bagikan kartu kosong kecil kepada setiap siswa — atau minta siswa gunakan selembar kertas."
        },
        {
          "tipe": "UCAP",
          "teks": "Write your polite messages on the card. One Please blank. And one Please don't blank."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu dua menit untuk menulis kartu pesan."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pasangan mana bergabung dengan pasangan mana untuk membentuk kelompok empat orang baru."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok terbentuk dan tenang."
        },
        {
          "tipe": "UCAP",
          "teks": "Pass your cards around the group and read each other's messages."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa di tiap kelompok sebagai pembicara pertama."
        },
        {
          "tipe": "UCAP",
          "teks": "The person I point to reads first."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu empat menit untuk semua anggota berbagi dan bertukar kartu pesan."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — dengarkan apakah pesan menggunakan Please dan Please don't dengan benar."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang tidak menulis apapun di kartu — dekati, tunjuk ikon buku, dan minta siswa tulis: Please bring my blank."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pesan di kartu tidak menggunakan Please — tunjuk kartu kesopanan di papan tulis dan ingatkan: \"Please makes it polite. Add it.\""
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah empat menit — ketuk meja sekali sebagai tanda berhenti."
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
        "mudah": "Tulis satu kartu pesan sopan dan baca ke kelompok — boleh menyalin dari CHANGE.",
        "standar": "Tulis dua kartu pesan (permintaan dan pengingat) dan tukarkan dengan kelompok.",
        "tantangan": "Tulis pesan untuk dua situasi, tukarkan, dan balas satu pesan teman secara sopan."
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
          "teks": "Give me one polite message about a school item. Please blank. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan pesan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah pesan dimulai dengan Please dan tidak menambahkan sequencing, Let's, atau I think?"
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
          "teks": "Your Please don't message. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa bisa mengucapkan pengingat sopan dengan lancar tanpa membaca?"
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
          "teks": "Angkat kembali kartu kesopanan."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan dua pesan sopan sekali lagi — beri isyarat tangan ke arah siswa setiap pesan."
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
          "teks": "Ulurkan tangan terbuka."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Please bring my English book tomorrow."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Buat gestur tidak lembut."
        },
        {
          "tipe": "UCAP",
          "teks": "Please don't forget your pencil case."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan — tekankan Please di awal setiap pesan."
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
          "teks": "Please bring my book. Thank you."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "A polite closer. Now you try. Give me one Please message with Thank you at the end. Just one."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Try with a different item.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang dua pesan sopan tanpa membaca, atau menulis satu pesan baru tentang barang sekolah yang berbeda."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-17.js",
    pattern_id: "PAT-7-17",
    title: "Class Chat: Writing Polite Messages",
    short_title: "Class Chat",
    grade: 7,
    genre: "Functional",
    cluster: "A",
    topic: "Class Group Messages",
    context: "Students write short polite messages for a class chat about borrowing or returning school items.",
    context_id: "Siswa menulis pesan singkat yang sopan untuk grup chat kelas tentang meminjam atau mengembalikan barang sekolah.",
    communicative_goal: "use polite requests and reminders in everyday messages",
    communicative_goal_id: "menggunakan permintaan dan pengingat yang sopan dalam pesan sehari-hari",
    vocabulary_domain: ["chat", "friends", "books", "stationery"],
    input_anchor: "chat screenshot cards",
    output_anchor: "mini chat messages",
    prerequisite_patterns: ["PAT-7-11"],
    reusable_in: ["PAT-8-21", "PAT-9-07"],
    complexity_level: "Acquire",
    notes: "TP ketujuh belas Fase D dan TP FUNCTIONAL PERTAMA. target_pattern PAT-7-17 = 'Please ... / Please don't ...' -- permintaan dan pengingat sopan dalam pesan sehari-hari. PAT-7-11 ('Don't.../Be.../Always...') sebagai support: 'Please' ditunjukkan sebagai PENANDA KESOPANAN pada imperatif yang sudah dikenal -- rule blunt ('Don't lose my pen.') vs versi sopan dengan struktur sama + Please ('Please don't lose my pen.'). Sesuai forbidden_overlap: TIDAK ada sequencing 'First,/Then,/Finally,' (PAT-7-09), TIDAK ada 'Let's...' (PAT-7-03, invitations), TIDAK ada 'I think/I like' (PAT-7-04, opinions). 'Please.../Please don't...' berdiri sebagai pesan singkat mandiri. vocabulary_domain (chat, friends, books, stationery) muncul di bahasa target: chat/friends (model class chat), book (books), pencil case/pen (stationery). Ekstensi opsional menambah penutup sopan 'Thank you.' setelah permintaan -- menjaga head 'Please ...' dan bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Morning, everyone! Check your phones quickly — then put them away." },
      { type: "AKSI", text: "Tunggu kelas siap untuk memulai pelajaran." },
      // HOOK
      { type: "UCAP", text: "Have you ever sent a message to a class group chat? What did you write?" },
      { type: "AKSI", text: "Tampilkan kartu tangkapan layar grup chat kelas dengan pesan-pesan sopan singkat." },
      { type: "UCAP", text: "Look at these chat messages. What makes them polite?" },
    ],

    active_vocabulary: [
      "Please",
      "Please don't",
      "bring",
      "reply",
      "chat",
      "friends",
      "book",
      "pencil case",
      "pen"
    ],

    model_sentences: [
      { id: "model_1", text: "Please bring my English book tomorrow." },
      { id: "model_2", text: "Please don't forget your pencil case." },
      { id: "model_3", text: "Don't lose my pen. Please don't lose my pen." },
      { id: "model_4", text: "Please reply to my friends in the class chat." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Chat screenshot cards showing a class group chat with short polite messages about borrowing and returning books and stationery.", description_id: "Kartu tangkapan layar obrolan yang menunjukkan grup chat kelas dengan pesan-pesan sopan singkat tentang meminjam dan mengembalikan buku serta alat tulis.", asset_id: null },
      { id: "visual_2", description: "A politeness card showing a blunt rule ('Don't lose my book') next to the polite version ('Please don't lose my book') to show how 'Please' softens an imperative.", description_id: "Kartu kesopanan yang menunjukkan aturan blak-blakan ('Don't lose my book') di sebelah versi sopannya ('Please don't lose my book') untuk menunjukkan bagaimana 'Please' memperhalus kalimat perintah.", asset_id: null },
      { id: "visual_3", description: "Item icons for things friends borrow and return: a book, a pencil case, a pen.", description_id: "Ikon barang yang dipinjam dan dikembalikan teman: buku, kotak pensil, pulpen.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher holds out an open, friendly hand while saying 'Please ...' to show a polite request.", description_id: "Guru mengulurkan tangan terbuka yang ramah sambil mengucapkan 'Please ...' untuk menunjukkan permintaan sopan." },
      { id: "gesture_2", description: "Teacher makes a gentle 'no' gesture with one hand while saying 'Please don't ...' for a polite reminder.", description_id: "Guru membuat gestur 'tidak' lembut dengan satu tangan sambil mengucapkan 'Please don't ...' untuk pengingat sopan." },
      { id: "gesture_3", description: "Teacher mimes typing a message on a phone while saying the chat message.", description_id: "Guru memperagakan mengetik pesan di ponsel sambil mengucapkan pesan chat-nya." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher write short polite messages with 'Please ...' and 'Please don't ...', showing how 'Please' softens a known rule.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-11"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the polite messages ('Please ...' / 'Please don't ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own polite messages using 'Please ...' and 'Please don't ...'.",
      prompt: "Use the patterns 'Please [action].' for a request and 'Please don't [action].' for a polite reminder. Write messages about borrowing or returning school items (book, pencil case, pen) in the class chat.",
      change_target: ["request (Please ...)", "reminder (Please don't ...)"],
      differentiation: {
        easy: { task: "Choose an item icon and complete one message: 'Please ___ my ___.' or 'Please don't ___ my ___.'" },
        standard: { task: "Write two messages -- one 'Please ...' request and one 'Please don't ...' reminder." },
        challenge: { task: "Take a blunt rule ('Don't lose my pen.') and rewrite it politely ('Please don't lose my pen.'), then add one 'Please ...' request." }
      },
      support: { pattern_support: ["PAT-7-11"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Exchange polite chat messages with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: send a polite chat message ('Please ...' / 'Please don't ...') about a school item, and your partner replies with a polite message. Then swap.",
      differentiation: {
        easy: { task: "Send one message from CHANGE to your partner (you may read). Your partner replies politely." },
        standard: { task: "Exchange two messages each without reading -- one request and one reminder." },
        challenge: { task: "Send a polite reminder and a request, and reply politely to your partner's messages in the chat." }
      },
      support: { pattern_support: ["PAT-7-11"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Write and exchange mini chat messages with a new group.",
      share_mode: "short_writing",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Write your polite messages ('Please ...' / 'Please don't ...') on cards, then pass them around the group and read each other's messages.",
      differentiation: {
        easy: { task: "Write one polite message card and read it to the group. You may copy from CHANGE." },
        standard: { task: "Write two message cards (a request and a reminder) and exchange them with the group." },
        challenge: { task: "Write messages for two situations, exchange them, and reply politely to one classmate's message." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students write polite messages with 'Please ...' and 'Please don't ...'",
        "students keep each message short and standalone (a request or a reminder)",
        "students still add sequencing ('First,/Then,'), an invitation ('Let's ...'), or an opinion ('I think ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a polite closer ('Thank you.') after a request.",
        needs_model: "Repeat the MODEL step, emphasizing 'Please ...' (request) and 'Please don't ...' (reminder) as short messages.",
        needs_repeat: "Do one more round of REPEAT (choral) on the polite messages before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "writes a blunt rule without 'Please', or adds sequencing/invitation/opinion",
        "relies only on the written messages and cannot send one without reading",
        "writes polite 'Please ...' / 'Please don't ...' messages accurately and confidently"
      ],
      action: [
        "recast the message slowly, adding 'Please' to soften the imperative",
        "model one more polite message about a different item to show the same pattern still works",
        "for a student who is ready, model ONE request with a polite closer first -- 'Please bring my book. Thank you.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the 'Please ...' head, with no sequencing, invitation, or opinion"
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
