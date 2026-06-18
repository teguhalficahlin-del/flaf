const skenario = {
  "persiapan": {
    "papan_tulis": "Once there was (character) near (place).\nThere was (setting) around (place).",
    "kartu": "Siapkan kartu latar — kolam yang tenang dengan hutan kecil di sekitarnya.",
    "instruksi": []
  },
  "siapkan_kelas": {
    "settling": [
      {
        "tipe": "AKSI",
        "teks": "Berdiri di depan kelas dengan nada hangat dan penuh cerita."
      },
      {
        "tipe": "UCAP",
        "teks": "Good morning, storytellers! Get comfortable, we have a story to enter today."
      },
      {
        "tipe": "AKSI",
        "teks": "Minta siswa duduk nyaman dan siap mendengarkan."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Have you ever seen a firefly glow in the dark? What was it like?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunjukkan kartu bergambar cerita — kunang-kunang bersinar di dekat kolam malam hari."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this picture. What do you think the little firefly is thinking?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa. Jika tidak ada yang menjawab dalam lima detik — tunjuk balon pikiran di kartu tokoh dan tanya \"What does the firefly want?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — letakkan kartu di tempat terlihat."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today we open a story about this little firefly."
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
          "teks": "Buka kedua tangan seperti membuka buku cerita."
        },
        {
          "tipe": "UCAP",
          "teks": "Once there was a small firefly near a quiet pond."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu tokoh kunang-kunang — lalu tunjuk kartu latar kolam."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka kedua tangan seperti membuka buku cerita."
        },
        {
          "tipe": "UCAP",
          "teks": "There was a little forest around the pond."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu latar hutan di sekitar kolam."
        },
        {
          "tipe": "AKSI",
          "teks": "Buat gerakan berkilau kecil dengan jari-jari."
        },
        {
          "tipe": "UCAP",
          "teks": "It was tiny and bright."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu tokoh."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan tangan dekat pelipis — gestur bermimpi."
        },
        {
          "tipe": "UCAP",
          "teks": "The firefly dreamed of finding bright friends."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk balon pikiran di kartu tokoh."
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
      "intro": "Guru mengucapkan satu kalimat pembuka cerita — siswa menirukan bersama. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Kalimat 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Buka kedua tangan seperti membuka buku cerita — tunjuk kartu tokoh dan kartu latar."
            },
            {
              "tipe": "UCAP",
              "teks": "Once there was a small firefly near a quiet pond."
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
              "teks": "Buka kedua tangan — tunjuk kartu latar hutan."
            },
            {
              "tipe": "UCAP",
              "teks": "There was a little forest around the pond."
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
              "teks": "Letakkan tangan dekat pelipis — tunjuk balon pikiran."
            },
            {
              "tipe": "UCAP",
              "teks": "The firefly dreamed of finding bright friends."
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
          "teks": "Good. Now write your own story opening."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — buka kedua tangan dan minta siswa baca bersama: Once there was a blank near a blank."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis pembuka cerita mereka sendiri dengan mengganti tokoh dan latar. Dikerjakan secara individual, ditulis di buku catatan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel kartu tokoh dan kartu latar di papan tulis di sebelah pola."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Write your own story opening. Choose a character and a place."
        },
        {
          "tipe": "UCAP",
          "teks": "Say this, Once there was blank near blank. Then say, There was blank around blank. Use past tense, there was, it was. Not there is. Not I am."
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
          "teks": "Berjalan keliling kelas — perhatikan siswa yang menggunakan present tense (There is) atau perkenalan diri (I am), dan ingatkan: \"Story. Past tense. Once there was blank.\""
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
          "teks": "Jika siswa tidak tahu hewan apa yang ingin dipilih — tunjuk kartu tokoh di papan tulis dan minta siswa pilih satu: a small rabbit, a tiny bird, a little frog."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, buka kedua tangan, dan ucapkan \"Once there was a blank. An animal. Near a blank. A place.\" Tunggu siswa menjawab dan bantu tulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih satu kartu tokoh dan satu kartu tempat, lalu lengkapi: Once there was a blank near a blank.",
        "standar": "Tulis dua kalimat pembuka cerita: Once there was blank near blank. There was blank around blank.",
        "tantangan": "Tulis pembuka, tambahkan satu deskripsi tokoh bentuk lampau: It was blank and blank. Dan tambahkan mimpi tokoh: It dreamed of blank."
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
          "teks": "Minta Siswa A menceritakan pembuka ceritanya ke Siswa B: Once there was a small firefly near a quiet pond."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B mendengarkan dan menyebutkan tokoh dan tempat yang diingat."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B menceritakan pembuka ceritanya ke Siswa A."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Take turns. Tell your story opening to your partner. Your partner listens and remembers the character and place. Work with the person next to you."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk bercerita dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati apakah siswa menggunakan Once there was atau There was dalam past tense."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — buka kedua tangan ke arah pasangan dan ucapkan \"Once there was a blank. What is your character?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa menggunakan There is atau I am — ingatkan dengan gestur buka buku cerita: \"Story. Past tense. Once there was blank.\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai lebih cepat — minta siswa tambahkan deskripsi tokoh atau mimpi."
        }
      ],
      "diferensiasi": {
        "mudah": "Ceritakan satu kalimat pembuka dari buku catatan — boleh membaca. Pasangan mendengarkan dan menyebutkan tokoh atau tempatnya.",
        "standar": "Ceritakan dua kalimat pembuka tanpa membaca. Pasangan melakukan hal yang sama.",
        "tantangan": "Ceritakan pembuka dengan deskripsi dan mimpi tokoh. Pasangan melakukan hal yang sama, lalu menyebutkan nama tokoh dan tempat milik partner."
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
          "teks": "Take turns. Tell your story opening to the new group. Once there was blank. There was blank."
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
          "teks": "Beri waktu enam menit untuk semua anggota kelompok bercerita."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — dengarkan apakah past tense digunakan secara konsisten."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — buka kedua tangan ke arahnya dan minta siswa mulai dengan \"Once there was a blank.\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa menggunakan present tense — tunjuk pola di papan tulis dan ucapkan \"Past tense. Once there was. It was.\""
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
        "mudah": "Ceritakan satu kalimat pembuka ke kelompok baru — boleh membaca.",
        "standar": "Ceritakan dua kalimat pembuka ke kelompok baru tanpa membaca.",
        "tantangan": "Ceritakan pembuka dengan deskripsi dan mimpi, lalu dengarkan dan ingat tokoh setiap teman."
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
          "teks": "Open a story for me. Once there was blank. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan kalimat pembuka."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan Once there was atau There was dalam past tense? Apakah ada tokoh dan latar?"
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
          "teks": "Your second sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa bisa menceritakan pembuka cerita dengan lancar tanpa membaca?"
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
          "teks": "Angkat kembali kartu tokoh dan kartu latar."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka kedua tangan — ucapkan dua kalimat pembuka sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Buka kedua tangan perlahan."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Once there was a small firefly near a quiet pond."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka kedua tangan lagi."
        },
        {
          "tipe": "UCAP",
          "teks": "There was a little forest around the pond."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan — tekankan Once there was dan There was sebagai pembuka cerita past tense."
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
          "teks": "Long ago, there was a small firefly near a quiet pond."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Long ago adds time to the opening. Now you try. Give me one opening with Long ago. Just one."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Long ago, there was blank.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang dua kalimat pembuka cerita tanpa membaca, atau menambahkan satu deskripsi tokoh bentuk lampau di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-21.js",
    pattern_id: "PAT-7-21",
    title: "The Lost Firefly: Building Story World",
    short_title: "The Lost Firefly",
    grade: 7,
    genre: "Narrative",
    cluster: "A",
    topic: "The Lost Firefly",
    context: "Students meet a small firefly who lives near a quiet pond and dreams of finding bright friends.",
    context_id: "Siswa berkenalan dengan seekor kunang-kunang kecil yang tinggal di dekat kolam yang tenang dan bermimpi menemukan teman-teman yang bersinar.",
    communicative_goal: "introduce characters and setting in a simple story world",
    communicative_goal_id: "memperkenalkan tokoh dan latar dalam dunia cerita sederhana",
    vocabulary_domain: ["animals", "forest", "pond", "friends"],
    input_anchor: "story picture cards",
    output_anchor: "story opening",
    prerequisite_patterns: ["PAT-7-05"],
    reusable_in: ["PAT-8-17"],
    complexity_level: "Acquire",
    notes: "TP kedua puluh satu Fase D dan TP NARRATIVE PERTAMA. Babak 1 dari satu cerita berkelanjutan 'The Lost Firefly' (TP-21 s.d. TP-24). Cerita fiksi PIHAK KETIGA, past tense ('there WAS', bukan 'there is'); karakter = 'a small firefly' (bukan 'I/we' -- forbidden: personal recount/self-introduction). target_pattern PAT-7-21 = 'Once there was ... / There was ... + character + place'. Tension forbidden_overlap vs prerequisite: PAT-7-05 ('It is/has/looks', present-tense factual description) vs 'factual description' -> direaktivasi sebagai DESKRIPSI KARAKTER dalam cerita yang DI-TENSE-SHIFT ke PAST ('It was tiny and bright.' -- bukan 'It is...'); ini elaborasi singkat (1 kalimat support) tentang karakter yang baru diperkenalkan, bukan deskripsi faktual berdiri sendiri. Elemen Babak 1 (sesuai alur): firefly kecil di dekat kolam tenang, kecil dan bersinar, BERMIMPI menemukan teman-teman yang bersinar -- setup 'bermimpi menemukan teman' ini PENTING sebagai dasar konflik TP-22 (kehilangan teman) dan resolusi TP-23/penutup TP-24 (menemukan teman). vocabulary_domain (animals, forest, pond, friends) muncul di bahasa target. Ekstensi opsional pembuka naratif waktu ('Long ago, ...') -- menjaga head pembuka cerita -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, storytellers! Get comfortable — we have a story to enter today." },
      { type: "AKSI", text: "Minta siswa duduk nyaman dan siap mendengarkan." },
      // HOOK
      { type: "UCAP", text: "Have you ever seen a firefly glow in the dark? What was it like?" },
      { type: "AKSI", text: "Tunjukkan kartu bergambar cerita: kunang-kunang kecil bersinar di dekat kolam yang tenang di hutan malam hari." },
      { type: "UCAP", text: "Look at this picture. What do you think the little firefly is thinking?" },
    ],

    active_vocabulary: [
      "Once there was",
      "There was",
      "firefly",
      "pond",
      "forest",
      "bright",
      "friends",
      "dreamed"
    ],

    model_sentences: [
      { id: "model_1", text: "Once there was a small firefly near a quiet pond." },
      { id: "model_2", text: "There was a little forest around the pond." },
      { id: "model_3", text: "It was tiny and bright." },
      { id: "model_4", text: "The firefly dreamed of finding bright friends." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Story picture cards: a small glowing firefly near a calm pond in a little forest at night.", description_id: "Kartu bergambar cerita: kunang-kunang kecil yang bersinar di dekat kolam yang tenang di hutan kecil pada malam hari.", asset_id: null },
      { id: "visual_2", description: "A character card: the tiny, bright firefly with a thought bubble showing it dreaming of other glowing fireflies (bright friends).", description_id: "Kartu tokoh: kunang-kunang kecil yang bersinar dengan balon pikiran menunjukkan ia bermimpi tentang kunang-kunang lain yang bersinar (teman-teman yang bersinar).", asset_id: null },
      { id: "visual_3", description: "A setting card: the quiet pond with the little forest around it.", description_id: "Kartu latar: kolam yang tenang dengan hutan kecil di sekitarnya.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher opens both hands like opening a storybook while saying 'Once there was ... / There was ...'.", description_id: "Guru membuka kedua tangan seperti membuka buku cerita sambil mengucapkan 'Once there was ... / There was ...'." },
      { id: "gesture_2", description: "Teacher makes a small twinkling motion with the fingers while describing the tiny, bright firefly.", description_id: "Guru membuat gerakan berkilau kecil dengan jari-jari sambil mendeskripsikan kunang-kunang kecil yang bersinar." },
      { id: "gesture_3", description: "Teacher places a hand near the temple (dreaming) while saying 'dreamed of finding bright friends'.", description_id: "Guru meletakkan tangan dekat pelipis (bermimpi) sambil mengucapkan 'dreamed of finding bright friends'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher open a story by introducing a character and a setting with 'Once there was ... / There was ...' in past tense, with a short past-tense description of the character.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-05"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the story-opening sentences ('Once there was ... / There was ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Open your own story by replacing the character and the place.",
      prompt: "Use the patterns 'Once there was [character] [place].' and 'There was [setting].' Use a story character (an animal) and a place (forest, pond). Use past tense ('there was', 'it was') -- this is a story, not 'I am ...' and not 'There is ...'.",
      change_target: ["character (Once there was ...)", "place"],
      differentiation: {
        easy: { task: "Choose a character card and a place card and complete: 'Once there was a ___ near a ___.'" },
        standard: { task: "Write a two-sentence story opening: 'Once there was [character] [place]. There was [setting].'" },
        challenge: { task: "Write your opening, add one past-tense description ('It was [adjective] and [adjective].'), and a dream ('It dreamed of ...')." }
      },
      support: { pattern_support: ["PAT-7-05"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Tell your story opening to a partner and listen to your partner's opening.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns telling your story opening ('Once there was ... / There was ...'). Listen and remember your partner's character and place.",
      differentiation: {
        easy: { task: "Tell your partner one opening sentence from CHANGE (you may read). Listen to your partner's sentence." },
        standard: { task: "Tell your two-sentence opening without reading. Your partner does the same." },
        challenge: { task: "Tell your opening with a description and a dream. Your partner does the same, then names your character and place." }
      },
      support: { pattern_support: ["PAT-7-05"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Tell your story opening to a new group (story opening).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns telling your story opening using 'Once there was ... / There was ...'.",
      differentiation: {
        easy: { task: "Tell the new group your opening sentence. You may read it." },
        standard: { task: "Tell the new group your two-sentence opening without reading." },
        challenge: { task: "Tell your opening with a description and a dream, then listen and remember each classmate's character." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students open a story with 'Once there was ... / There was ...' and a character and place",
        "students use past tense for the story ('there was', 'it was'), not present tense",
        "students still slip into 'There is ...' (present) or 'I am ...' (self-introduction) instead of a story opening"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a narrative time opener ('Long ago, ...').",
        needs_model: "Repeat the MODEL step, emphasizing 'Once there was ... / There was ...' with a character and place in past tense.",
        needs_repeat: "Do one more round of REPEAT (choral) on the story-opening sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "opens with present tense ('There is ...') or with self-introduction ('I am ...')",
        "relies only on the written opening and cannot tell it without reading",
        "opens a story with 'Once there was ... / There was ...' in past tense accurately and confidently"
      ],
      action: [
        "recast the opening slowly, emphasizing 'Once there was ... / There was ...' and past tense",
        "model one more story opening with a different character to show the same pattern still works",
        "for a student who is ready, model ONE opening with a narrative time opener first -- 'Long ago, there was a small firefly near a quiet pond.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the story-opening head, not a present-tense description or self-introduction"
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
