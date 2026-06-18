const skenario = {
  "persiapan": {
    "papan_tulis": "It was (adjective) because (event that happened).",
    "kartu": "Siapkan kartu kerangka kalimat yang menghubungkan wajah perasaan dengan gambar peristiwa: It was blank because blank.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan foto pengalaman perpustakaan di meja guru — siswa mencari buku, membaca di meja, dan pojok baca yang tenang."
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
        "teks": "Hello, friends! Ready to share some experiences today?"
      },
      {
        "tipe": "AKSI",
        "teks": "Kondisikan kelas dengan tenang sebelum memulai."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Has anyone visited the school library or a reading corner recently? How did it feel?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan foto pengalaman perpustakaan satu per satu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these library photos. What feeling do you get when you see them?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa. Jika tidak ada yang menjawab dalam lima detik — tunjuk foto pojok baca dan tanya \"Is this place quiet or noisy?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — letakkan foto di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today we learn how to share how we felt and why."
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
          "teks": "Peragakan mencari buku di rak."
        },
        {
          "tipe": "UCAP",
          "teks": "I found a book and read it at the library."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk foto siswa mencari buku."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan tangan di dada — tunjuk kartu wajah senang — buka tangan ke arah foto buku dan perpustakaan."
        },
        {
          "tipe": "UCAP",
          "teks": "It was fun because the reading was interesting."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu kerangka kalimat."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan tangan di dada — tunjuk kartu wajah tenang — buka tangan ke arah foto pojok baca."
        },
        {
          "tipe": "UCAP",
          "teks": "It was quiet because everyone read together."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan tangan di dada — tunjuk kartu wajah antusias — buka tangan ke arah foto buku."
        },
        {
          "tipe": "UCAP",
          "teks": "It was exciting because I learned new things from the books."
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
              "teks": "Letakkan tangan di dada — tunjuk kartu wajah senang — buka tangan ke arah foto."
            },
            {
              "tipe": "UCAP",
              "teks": "It was fun because the reading was interesting."
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
              "teks": "Letakkan tangan di dada — tunjuk kartu wajah tenang — buka tangan ke arah foto pojok baca."
            },
            {
              "tipe": "UCAP",
              "teks": "It was quiet because everyone read together."
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
              "teks": "Letakkan tangan di dada — tunjuk kartu wajah antusias — buka tangan ke arah foto buku."
            },
            {
              "tipe": "UCAP",
              "teks": "It was exciting because I learned new things from the books."
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
          "teks": "Good. Now write about your own experience."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk kartu kerangka kalimat dan minta siswa baca bersama: It was blank because blank."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis tanggapan perasaan mereka sendiri tentang pengalaman perpustakaan. Dikerjakan secara individual, ditulis di buku catatan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel foto perpustakaan dan kartu perasaan di papan tulis di sebelah pola."
        },
        {
          "tipe": "AKSI",
          "teks": "Tempel kartu kerangka kalimat."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Write about how you felt at the library or reading corner. Use: It was blank because blank."
        },
        {
          "tipe": "UCAP",
          "teks": "The feeling: fun, quiet, exciting. The reason: something that really happened. Not a general opinion."
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
          "teks": "Berjalan keliling kelas — perhatikan siswa yang menulis alasan umum seperti because reading is good — ingatkan: \"A real event. What happened? Not a general reason.\""
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
          "teks": "Jika siswa bingung membedakan perasaan dan alasan — tunjuk kartu kerangka kalimat: tangan di dada untuk perasaan, tangan terbuka ke arah foto untuk peristiwa. Minta siswa pilih kartu perasaan dulu, lalu tunjuk foto peristiwa yang sesuai."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu wajah senang, dan ucapkan \"It was fun because blank. What happened at the library?\" Tunggu siswa menjawab dan bantu tulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih satu kartu perasaan dan lengkapi: It was blank because blank (sesuatu yang terjadi).",
        "standar": "Tulis dua tanggapan perasaan tentang pengalamanmu di perpustakaan — masing-masing It was blank because blank dengan peristiwa konkret.",
        "tantangan": "Awali dengan rangkuman tindakan terhubung: I found a book and read it. Lalu tulis tanggapan perasaanmu: It was blank because blank."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Awali dengan rangkuman tindakan terhubung: I found a book and read it. Lalu tulis tanggapan perasaanmu: It was blank because blank.",
        "perlu_bantuan": "Pilih satu kartu perasaan dan lengkapi: It was blank because blank (sesuatu yang terjadi)."
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
          "teks": "Minta Siswa A berbagi satu tanggapan perasaan ke Siswa B: It was quiet because everyone read together."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B mendengarkan dan menyebutkan perasaan dan peristiwa yang diingat."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B berbagi tanggapan perasaannya ke Siswa A."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Take turns. Share how you felt and why. Work with the person next to you."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk berbagi dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati apakah siswa menggunakan peristiwa konkret setelah because, bukan alasan umum."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk kartu wajah senang ke arah pasangan dan ucapkan \"It was blank because blank. How did you feel?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa memberikan alasan umum setelah because — tunjuk foto peristiwa dan ucapkan \"A real event. What happened? Because blank.\" Tunggu siswa menyebutkan peristiwa konkret."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai lebih cepat — minta siswa tambahkan satu tanggapan perasaan lagi dengan kata sifat berbeda."
        }
      ],
      "diferensiasi": {
        "mudah": "Bagikan satu kalimat It was blank because blank dari buku catatan — boleh membaca. Pasangan mendengarkan dan merespons.",
        "standar": "Bagikan dua tanggapan perasaan tanpa membaca. Dengarkan dan ingat perasaan serta peristiwa milik pasangan.",
        "tantangan": "Awali dengan rangkuman tindakan terhubung, lalu bagikan tanggapan perasaanmu. Pasangan melakukan hal yang sama."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Awali dengan rangkuman tindakan terhubung, lalu bagikan tanggapan perasaanmu. Pasangan melakukan hal yang sama.",
        "perlu_bantuan": "Bagikan satu kalimat It was blank because blank dari buku catatan — boleh membaca. Pasangan mendengarkan dan merespons."
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
          "teks": "Take turns. Share your library experience and how you felt. It was blank because blank."
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
          "teks": "Berjalan antar kelompok — dengarkan apakah because diikuti peristiwa konkret, bukan alasan umum atau argumentasi."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk kartu perasaan dan minta siswa mulai dengan \"It was blank because blank.\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa menjawab dengan alasan umum — tunjuk foto peristiwa di papan tulis dan ingatkan: \"A real event. What happened? Because everyone read. Because I found a book.\""
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
        "mudah": "Bagikan satu tanggapan perasaan ke kelompok baru — boleh membaca.",
        "standar": "Bagikan dua tanggapan perasaan tanpa membaca.",
        "tantangan": "Awali dengan rangkuman tindakan terhubung, lalu bagikan tanggapan perasaan, dan tanggapi satu pengalaman teman."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Awali dengan rangkuman tindakan terhubung, lalu bagikan tanggapan perasaan, dan tanggapi satu pengalaman teman.",
        "perlu_bantuan": "Bagikan satu tanggapan perasaan ke kelompok baru — boleh membaca."
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
          "teks": "How did you feel at the library? Use It was blank because blank. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan kalimat."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan peristiwa konkret setelah because, bukan alasan umum?"
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
          "teks": "Amati — apakah siswa bisa menyampaikan tanggapan perasaan dengan lancar tanpa membaca?"
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
          "teks": "Angkat kembali kartu kerangka kalimat."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan dua tanggapan perasaan sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Letakkan tangan di dada — tunjuk kartu wajah tenang."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. It was quiet because everyone read together."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka tangan ke arah foto pojok baca."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Because blank. A real event. Not because reading is good. Now try, It was blank because blank."
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
          "teks": "It was fun and exciting because we read together."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Two feelings, one sentence. Now you try. Give me one response with two feelings. Just one."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Keep the because and the real event.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang tanggapan perasaan tanpa membaca, atau menulis satu tanggapan baru tentang pengalaman membaca yang berbeda."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-15.js",
    pattern_id: "PAT-7-15",
    title: "My First Library Visit: Expressing Experience",
    short_title: "Library Visit",
    grade: 7,
    genre: "Recount",
    cluster: "B",
    topic: "Library Visit",
    context: "Students describe how they felt after a real visit to a library or reading corner.",
    context_id: "Siswa mendeskripsikan perasaan mereka setelah mengunjungi perpustakaan atau pojok baca.",
    communicative_goal: "express personal responses to a past experience with simple reasons",
    communicative_goal_id: "menyampaikan tanggapan pribadi terhadap pengalaman masa lalu dengan alasan sederhana",
    vocabulary_domain: ["books", "reading", "library", "feelings"],
    input_anchor: "experience photos",
    output_anchor: "experience sharing",
    prerequisite_patterns: ["PAT-7-14"],
    reusable_in: ["PAT-8-13", "PAT-9-04"],
    complexity_level: "Acquire",
    notes: "TP kelima belas Fase D, Recount. target_pattern PAT-7-15 = 'It was + adjective + because + simple event'. DISTINGSI PENTING: 'because' di sini SPESIFIK untuk respons emosional terhadap SATU pengalaman lampau tertentu ('It was [adj] because [event yang terjadi]') -- BUKAN opini topik UMUM seperti PAT-7-04 ('I think [topik umum] because [alasan umum]'). 'because [event]' harus EVENT KONKRET yang sudah diceritakan, bukan alasan abstrak/argumentatif. 'It was' = past tense (lanjutan dimensi lampau Recount). PAT-7-14 ('Subject + past action + and/then + past action') sebagai support: rangkaian kejadian sebelum respons emosi ('I found a book and read it. It was fun because the reading was interesting.'). forbidden_overlap lain: TIDAK ada opini topik umum, TIDAK ada argumentasi, TIDAK ada teks eksplanasi panjang. vocabulary_domain (books, reading, library, feelings) muncul di bahasa target. Ekstensi opsional menggabungkan dua perasaan ('It was fun and exciting because ...') -- menjaga head 'It was ... because ...' -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Hello, friends! Ready to share some experiences today?" },
      { type: "AKSI", text: "Kondisikan kelas dengan tenang sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "Has anyone visited the school library or a reading corner recently? How did it feel?" },
      { type: "AKSI", text: "Tampilkan foto pengalaman perpustakaan: mencari buku, membaca di meja, pojok baca tenang." },
      { type: "UCAP", text: "Look at these library photos. What feeling do you get when you see them?" },
    ],

    active_vocabulary: [
      "It was",
      "because",
      "fun",
      "quiet",
      "exciting",
      "books",
      "reading",
      "library"
    ],

    model_sentences: [
      { id: "model_1", text: "I found a book and read it at the library." },
      { id: "model_2", text: "It was fun because the reading was interesting." },
      { id: "model_3", text: "It was quiet because everyone read together." },
      { id: "model_4", text: "It was exciting because I learned new things from the books." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Experience photos of a library visit: a student finding a book, reading at a table, and a quiet reading corner.", description_id: "Foto pengalaman kunjungan perpustakaan: siswa mencari buku, membaca di meja, dan pojok baca yang tenang.", asset_id: null },
      { id: "visual_2", description: "Feeling cards: a happy face (fun), a calm face (quiet), and an excited face (exciting).", description_id: "Kartu perasaan: wajah senang (fun), wajah tenang (quiet), dan wajah antusias (exciting).", asset_id: null },
      { id: "visual_3", description: "A sentence-frame card linking a feeling face to an event picture: 'It was [feeling] because [what happened].'", description_id: "Kartu kerangka kalimat yang menghubungkan wajah perasaan dengan gambar peristiwa: 'It was [feeling] because [what happened].'", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher places a hand on their chest showing a feeling while saying 'It was [adjective] ...'.", description_id: "Guru meletakkan tangan di dada menunjukkan perasaan sambil mengucapkan 'It was [adjective] ...'." },
      { id: "gesture_2", description: "Teacher opens a hand toward an event picture while saying 'because [event] ...'.", description_id: "Guru membuka tangan ke arah gambar peristiwa sambil mengucapkan 'because [event] ...'." },
      { id: "gesture_3", description: "Teacher mimes finding and reading a book (the past actions) before giving the feeling.", description_id: "Guru memperagakan mencari dan membaca buku (tindakan lampau) sebelum menyampaikan perasaannya." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher express a personal feeling about a past library visit using 'It was [adjective] because [event that happened]'.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-14"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the feeling-and-reason sentences ('It was ... because ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Express your own feeling about a past experience by replacing the adjective and the event.",
      prompt: "Use the pattern 'It was [adjective] because [event].' Replace the adjective with a feeling (fun, quiet, exciting) and the reason with a concrete event that really happened. Keep the reason a real event, not a general opinion.",
      change_target: ["feeling (It was ...)", "event (because ...)"],
      differentiation: {
        easy: { task: "Choose a feeling card and complete: 'It was ___ because ___ (something that happened).'" },
        standard: { task: "Write two feeling responses about your library experience, each 'It was [adjective] because [event].'" },
        challenge: { task: "Start with a connected-action recap ('I found a book and read it.'), then give your 'It was [adjective] because [event].' response." }
      },
      support: { pattern_support: ["PAT-7-14"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share your library experience and your feeling about it with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your library experience and how you felt: 'It was [adjective] because [event].' Listen to your partner and notice the feeling and the event.",
      differentiation: {
        easy: { task: "Share one 'It was ... because ...' sentence using your sentence from CHANGE (you may read). Listen to your partner's sentence." },
        standard: { task: "Share two feeling responses without reading. Listen and remember your partner's feeling and event." },
        challenge: { task: "Recap your actions ('I found a book and read it.'), then give your feeling response. Your partner does the same." }
      },
      support: { pattern_support: ["PAT-7-14"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Share your experience and feeling with a new group (experience sharing).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns sharing your library experience and feeling: 'It was [adjective] because [event].'",
      differentiation: {
        easy: { task: "Share one feeling response with the new group. You may read it." },
        standard: { task: "Share two feeling responses without reading." },
        challenge: { task: "Recap your actions, then share your feeling response, and listen and respond to one classmate's experience." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students express a feeling about a past experience with 'It was [adjective] because [event]'",
        "students tie 'because' to a concrete event that happened, not a general or abstract reason",
        "students still drop the reason, or turn it into a general-topic opinion or a long explanation"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to combine two feelings in one response.",
        needs_model: "Repeat the MODEL step, emphasizing 'It was [adjective] because [event that happened]'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the feeling-and-reason sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "drops the reason, or gives a general opinion instead of a concrete event",
        "relies only on the written response and cannot share it without reading",
        "expresses a feeling with 'It was ... because [event]' accurately and confidently"
      ],
      action: [
        "recast the response slowly, modeling 'It was [adjective] because [concrete event]'",
        "model one more feeling response about a different experience to show the same pattern still works",
        "for a student who is ready, model ONE response with two feelings first -- 'It was fun and exciting because we read together.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the 'It was ... because [event]' head, with no general opinion or argument"
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
