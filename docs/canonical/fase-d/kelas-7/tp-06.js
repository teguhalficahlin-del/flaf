const skenario = {
  "persiapan": {
    "papan_tulis": "It is (adjective) and (adjective).\nIt is (adjective) but (adjective).",
    "kartu": "Siapkan dua kartu penghubung — kartu and yang menggabungkan dua kata sifat serasi, dan kartu but yang menggabungkan dua kata sifat kontras.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan empat foto jajanan sehat di meja guru — apel, pisang, stik wortel, dan segelas yogurt — semuanya terlihat segar."
      },
      {
        "tipe": "AKSI",
        "teks": "Siapkan ikon rasa dan tekstur — kubus gula untuk sweet, biskuit kering untuk crunchy, daun untuk healthy atau fresh, mulut tersenyum untuk tasty."
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
        "teks": "Good morning, friends! Are you ready to learn today?"
      },
      {
        "tipe": "AKSI",
        "teks": "Atur kelas agar siswa fokus ke depan."
      }
    ],
    "hook": [
      {
        "tipe": "AKSI",
        "teks": "Tunjukkan keempat foto jajanan satu per satu kepada kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these snacks. An apple, a banana, carrot sticks, and yogurt."
      },
      {
        "tipe": "UCAP",
        "teks": "What words can you use to describe them? Sweet? Crunchy? Fresh?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu beberapa siswa menjawab. Jika tidak ada yang merespons dalam lima detik — tunjuk foto apel dan gigit perlahan sambil berkata \"Mmm, is it sweet?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — letakkan foto di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today let us learn how to describe snacks with two words in one sentence."
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
          "teks": "Angkat foto apel — kaitkan jari kedua tangan bersama."
        },
        {
          "tipe": "UCAP",
          "teks": "It is sweet and crunchy."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon gula dan ikon biskuit secara bergantian."
        },
        {
          "tipe": "AKSI",
          "teks": "Miring satu tangan ke atas dan tangan lainnya ke bawah — gesture kontras kecil."
        },
        {
          "tipe": "UCAP",
          "teks": "It is healthy but sour."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon daun, lalu tunjuk jari kelingking sebagai isyarat \"kecil\"."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan foto apel. Angkat foto pisang — kaitkan jari kedua tangan bersama."
        },
        {
          "tipe": "UCAP",
          "teks": "It is fresh and tasty."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan semua foto dan ikon."
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
      "intro": "Guru mengucapkan satu kalimat — siswa menirukan bersama. Satu putaran per kalimat. Foto dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Kalimat 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat foto apel — kaitkan jari kedua tangan."
            },
            {
              "tipe": "UCAP",
              "teks": "It is sweet and crunchy."
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
              "teks": "Tetap pegang foto apel — miring satu tangan ke atas dan tangan lainnya ke bawah."
            },
            {
              "tipe": "UCAP",
              "teks": "It is healthy but sour."
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
              "teks": "Angkat foto pisang — kaitkan jari kedua tangan."
            },
            {
              "tipe": "UCAP",
              "teks": "It is fresh and tasty."
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
          "teks": "Letakkan semua foto."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now write about your own snack."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk pola di papan tulis dan minta siswa membaca bersama sekali lagi: It is blank and blank. It is blank but blank."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa memilih satu foto jajanan dan menulis kalimat deskripsi dengan menggabungkan dua kata sifat. Dikerjakan secara individual, ditulis di buku catatan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel keempat foto jajanan di papan tulis di sebelah pola. Tempel juga ikon rasa dan tekstur, serta kartu penghubung and dan but."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Choose a snack photo. Write sentences about it using and or but."
        },
        {
          "tipe": "UCAP",
          "teks": "Use and for matching features, like sweet and crunchy. Use but for contrasting features, like healthy but small."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang berhenti menulis lebih dari sepuluh detik."
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
          "teks": "Jika siswa bingung memilih and atau but — tunjuk kartu penghubung di papan tulis dan tanya \"Do the two words match, or are they different?\" Bantu siswa memutuskan."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk foto apel dan ikon gula, dan ucapkan \"It is sweet and blank.\" Tunggu siswa melengkapi dan menulis, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih satu foto jajanan dan lengkapi satu kalimat: It is blank and blank. Gunakan dua kata sifat dari ikon di papan tulis.",
        "standar": "Tulis dua kalimat tentang jajanan — satu menggunakan and dan satu menggunakan but: It is blank and blank. It is blank but blank.",
        "tantangan": "Tulis dua kalimat gabungan, dan tambahkan satu baris ringkasan sebelumnya: It is a blank. It looks blank. Pertahankan kalimat gabungan It is blank and/but blank sebagai bagian utama."
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
          "teks": "Minta Siswa A memegang foto jajanannya dan membacakan kalimat gabungannya ke Siswa B."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B mendengarkan dan memperhatikan kata sifat mana yang digabungkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B mendeskripsikan jajanannya ke Siswa A."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Work with the person next to you."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati apakah siswa menggunakan and dan but dengan tepat."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk foto jajanan siswa dan minta siswa ucapkan \"It is\" diikuti satu kata sifat pertama."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan deskripsinya sekali lagi tanpa melihat buku."
        }
      ],
      "diferensiasi": {
        "mudah": "Deskripsikan jajananmu menggunakan satu kalimat gabungan dari buku catatan — boleh membaca. Pasangan mendengarkan dan mendeskripsikan jajanannya.",
        "standar": "Deskripsikan jajananmu tanpa membaca, menggunakan satu kalimat and dan satu kalimat but. Pasangan melakukan hal yang sama.",
        "tantangan": "Mulai dengan ringkasan terlebih dahulu: It is a blank. It looks blank. Lalu berikan dua kalimat gabungan. Pasangan melakukan hal yang sama."
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
          "teks": "Take turns. Hold up your snack photo and describe it to the new group."
        },
        {
          "tipe": "UCAP",
          "teks": "It is blank and blank. Or: It is blank but blank."
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
          "teks": "Berjalan antar kelompok — dengarkan apakah siswa menggunakan and dan but dengan benar."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk foto jajanannya dan minta siswa ucapkan \"It is\" diikuti satu kata sifat saja untuk memulai."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak membedakan and dan but — tunjuk kartu penghubung di papan tulis dan minta siswa periksa apakah dua kata sifatnya cocok atau kontras."
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
        "mudah": "Angkat foto jajananmu dan ucapkan satu kalimat gabungan ke kelompok baru — boleh membaca.",
        "standar": "Angkat foto dan deskripsikan tanpa membaca, menggunakan satu kalimat and dan satu kalimat but.",
        "tantangan": "Angkat foto, tambahkan ringkasan terlebih dahulu, lalu berikan dua kalimat gabungan."
      }
    },
    "check": {
      "durasi_menit": 4,
      "intro": "Guru mengamati selama langkah SHARE berlangsung — bukan setelah selesai. Setelah SHARE selesai, lakukan konfirmasi cepat ke dua siswa, lalu putuskan jalur berikutnya.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk foto pisang di papan tulis."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa secara acak."
        },
        {
          "tipe": "UCAP",
          "teks": "Describe this banana. Use and or but. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan kalimat gabungan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggabungkan dua kata sifat dalam satu kalimat It is?"
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
          "teks": "Your but sentence. About any snack."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan but untuk menghubungkan dua sifat yang kontras?"
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
          "teks": "Angkat kembali foto apel."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan dua kalimat gabungan sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Angkat foto apel — kaitkan jari kedua tangan."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. It is sweet and crunchy."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Miring satu tangan ke atas dan tangan lainnya ke bawah."
        },
        {
          "tipe": "UCAP",
          "teks": "Now: It is healthy but small."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan — tekankan perbedaan gesture and dan but."
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
          "teks": "It is fresh, sweet, and crunchy."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Three words in one sentence, using and. Just one sentence."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Try with a different snack.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang kalimat gabungan tanpa melihat buku, atau menulis deskripsi jajanan kedua di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-06.js",
    pattern_id: "PAT-7-06",
    title: "Healthy Snacks: Comparing Characteristics",
    short_title: "Healthy Snacks",
    grade: 7,
    genre: "Descriptive",
    cluster: "A",
    topic: "Healthy Snacks",
    context: "Students describe different snacks using connected adjectives.",
    context_id: "Siswa mendeskripsikan berbagai jajanan menggunakan kata sifat yang dihubungkan.",
    communicative_goal: "combine descriptive features with and/but",
    communicative_goal_id: "menggabungkan ciri-ciri deskriptif menggunakan and/but",
    vocabulary_domain: ["food", "taste", "texture", "health"],
    input_anchor: "food photos",
    output_anchor: "pair description",
    prerequisite_patterns: ["PAT-7-05"],
    reusable_in: ["PAT-8-06"],
    complexity_level: "Acquire",
    notes: "TP keenam Fase D, Descriptive. target_pattern PAT-7-06 = 'It is + adjective + and/but + adjective' -- ekstensi LANGSUNG dari sub-bentuk 'It is + adj' PAT-7-05 menjadi penggabungan dua sifat. model_sentences menunjukkan progresi: recap singkat PAT-7-05 ('It is an apple. It looks fresh.') sebagai support, lalu target baru 'It is [adj] and [adj]' / 'It is [adj] but [adj]'. 'and' untuk sifat yang searah, 'but' untuk kontras. Sesuai forbidden_overlap: TIDAK ada comparison ('bigger/smaller than'), TIDAK ada reasons ('because'), TIDAK ada sequencing ('first/then/finally'). vocabulary_domain (food, taste, texture, health) muncul di bahasa target: apple/snack (food), sweet/tasty (taste), crunchy (texture), healthy/fresh (health). Ekstensi opsional daftar tiga sifat ('It is fresh, sweet, and crunchy.') -- perluasan ringan di luar pola biner adj+and/but+adj -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, friends! Are you ready to learn today?" },
      { type: "AKSI", text: "Atur kelas agar siswa fokus ke depan." },
      // HOOK
      { type: "UCAP", text: "Look at these snacks — an apple, a banana, carrot sticks, and yogurt." },
      { type: "AKSI", text: "Tunjukkan foto jajanan sehat: apel, pisang, stik wortel, dan yogurt." },
      { type: "UCAP", text: "What words can you use to describe them? Sweet? Crunchy? Fresh?" },
    ],

    active_vocabulary: [
      "It is",
      "It looks",
      "and",
      "but",
      "apple",
      "snack",
      "sweet",
      "crunchy",
      "healthy",
      "fresh",
      "tasty",
      "small"
    ],

    model_sentences: [
      { id: "model_1", text: "It is an apple. It looks fresh." },
      { id: "model_2", text: "It is sweet and crunchy." },
      { id: "model_3", text: "It is healthy but small." },
      { id: "model_4", text: "It is a snack. It is fresh and tasty." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Food photos of healthy snacks: an apple, a banana, carrot sticks, and a cup of yogurt, all looking fresh.", description_id: "Foto makanan jajanan sehat: apel, pisang, stik wortel, dan segelas yogurt, semuanya terlihat segar.", asset_id: null },
      { id: "visual_2", description: "Taste and texture icons: a sugar cube (sweet), a cracker (crunchy), a leaf (healthy/fresh), a smiling mouth (tasty).", description_id: "Ikon rasa dan tekstur: kubus gula (manis), biskuit kering (renyah), daun (sehat/segar), mulut tersenyum (lezat).", asset_id: null },
      { id: "visual_3", description: "Connector cards: an 'and' card joining two matching adjectives (sweet + crunchy), and a 'but' card joining two contrasting adjectives (healthy + small).", description_id: "Kartu penghubung: kartu 'and' yang menggabungkan dua kata sifat yang serasi (manis + renyah), dan kartu 'but' yang menggabungkan dua kata sifat yang kontras (sehat + kecil).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher holds up a food photo and points to it while saying 'It is ...'.", description_id: "Guru mengangkat foto makanan dan menunjuknya sambil mengucapkan 'It is ...'." },
      { id: "gesture_2", description: "Teacher links the fingers of both hands together while saying 'and' to join two matching features.", description_id: "Guru mengaitkan jari kedua tangan sambil mengucapkan 'and' untuk menggabungkan dua ciri yang serasi." },
      { id: "gesture_3", description: "Teacher tips one hand up and the other down (a small contrast gesture) while saying 'but' to join two contrasting features.", description_id: "Guru memiringkan satu tangan ke atas dan tangan lainnya ke bawah (gestur kontras kecil) sambil mengucapkan 'but' untuk menggabungkan dua ciri yang kontras." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher describe a snack by combining two features in one sentence with 'and' (matching features) or 'but' (contrasting features).",
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
      objective: "Practice saying the combined-feature sentences ('It is ... and/but ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Describe your own snack by combining two features with 'and' or 'but'.",
      prompt: "Use the pattern 'It is [adjective] and [adjective].' for matching features, or 'It is [adjective] but [adjective].' for contrasting features. Replace the adjectives with the features of a snack from the photos (sweet, crunchy, healthy, fresh, tasty, small).",
      change_target: ["adjective 1", "adjective 2", "connector (and/but)"],
      differentiation: {
        easy: { task: "Choose a snack photo and complete one sentence: 'It is ___ and ___.' using two adjectives from the cues." },
        standard: { task: "Write two sentences about snacks: one using 'and' ('It is ___ and ___.') and one using 'but' ('It is ___ but ___.')." },
        challenge: { task: "Write two combined-feature sentences, and add a one-line recap before them: 'It is a/an [snack]. It looks [adjective].' Keep the combined description ('It is ... and/but ...') as the main part." }
      },
      support: { pattern_support: ["PAT-7-05"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Describe your snack to a partner using combined features, and listen to your partner's description.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns describing your snack with 'It is [adjective] and/but [adjective].' Listen to your partner and notice which features they combine.",
      differentiation: {
        easy: { task: "Describe your snack using your sentence from CHANGE (you may read). Then listen to your partner's one combined-feature sentence." },
        standard: { task: "Describe your snack without reading, using one 'and' sentence and one 'but' sentence. Your partner does the same." },
        challenge: { task: "Recap first ('It is a/an [snack]. It looks [adjective].'), then give two combined-feature sentences. Your partner does the same." }
      },
      support: { pattern_support: ["PAT-7-05"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Describe your snack to a new pair using combined features.",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with another pair (not your INTERACT partner). Take turns: hold up your snack photo and describe it to the new group with 'It is [adjective] and/but [adjective].'",
      differentiation: {
        easy: { task: "Show your snack photo and say one combined-feature sentence ('It is ___ and/but ___.'). You may read it." },
        standard: { task: "Show your snack photo and describe it without reading, using one 'and' and one 'but' sentence." },
        challenge: { task: "Show your snack photo, recap with 'It is a/an [snack]. It looks [adjective].', then give two combined-feature sentences." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students combine two features in one sentence using 'It is ... and/but ...'",
        "students use 'and' for matching features and 'but' for contrasting features",
        "students still describe with one adjective only, or join features without 'and'/'but'"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to try listing three features in one sentence.",
        needs_model: "Repeat the MODEL step, emphasizing 'and' (matching) versus 'but' (contrast) as the joining words.",
        needs_repeat: "Do one more round of REPEAT (choral) on the combined-feature sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "describes with one adjective only and does not join features",
        "relies only on the written sentence and cannot describe without reading it",
        "combines two features with 'and'/'but' accurately and confidently"
      ],
      action: [
        "recast the description slowly, modeling 'It is [adjective] and/but [adjective].' as one smooth sentence",
        "model one more combined description with a different snack to show the same pattern still works",
        "for a student who is ready, model ONE three-feature list first -- 'It is fresh, sweet, and crunchy.' -- then invite that student to try it once; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it adds no comparison ('than') or reason ('because')"
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
