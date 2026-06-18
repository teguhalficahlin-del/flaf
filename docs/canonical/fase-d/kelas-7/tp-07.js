const skenario = {
  "persiapan": {
    "papan_tulis": "There is (one thing) (place expression).\nThere are (things) (place expression).",
    "kartu": "Siapkan satu kartu satu-versus-banyak — satu bangku untuk There is dan tiga bangku untuk There are.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan peta taman sederhana di meja guru — dengan area bermain, beberapa pohon, kolam, bangku, dan toilet, masing-masing ditandai ikon kecil berlabel."
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
        "teks": "Hello, everyone! Great to see you all here."
      },
      {
        "tipe": "AKSI",
        "teks": "Minta siswa menyimpan benda-benda di meja agar fokus."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Have you ever been to a park? What did you see there?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu beberapa siswa menjawab singkat."
      },
      {
        "tipe": "AKSI",
        "teks": "Tempel peta taman di papan tulis — beri waktu siswa melihat sebentar."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this park map. What can you find in this park?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu beberapa siswa menyebutkan sesuatu dari peta. Jika tidak ada yang menjawab dalam lima detik — tunjuk ikon area bermain di peta dan tanya \"What is this?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — biarkan peta tetap terpasang di papan tulis."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today let us describe what is in this park."
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
          "teks": "Tunjuk area bermain di peta dengan satu jari."
        },
        {
          "tipe": "UCAP",
          "teks": "There is a playground in the park."
        },
        {
          "tipe": "AKSI",
          "teks": "Tepuk lokasi in the park di peta."
        },
        {
          "tipe": "AKSI",
          "teks": "Sapukan tangan terbuka melintasi beberapa pohon di peta."
        },
        {
          "tipe": "UCAP",
          "teks": "There are tall trees near the playground."
        },
        {
          "tipe": "AKSI",
          "teks": "Tepuk lokasi near the playground di peta."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kolam di peta dengan satu jari."
        },
        {
          "tipe": "UCAP",
          "teks": "There is a pond in the park. It is clean and quiet."
        },
        {
          "tipe": "AKSI",
          "teks": "Tepuk kolam di peta dengan satu jari, lalu angguk menunjukkan kalimat It is sebagai deskripsi tambahan."
        },
        {
          "tipe": "AKSI",
          "teks": "Sapukan tangan terbuka melintasi bangku dan toilet di peta."
        },
        {
          "tipe": "UCAP",
          "teks": "There are benches and toilets in the park."
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
      "intro": "Guru mengucapkan satu kalimat — siswa menirukan bersama. Satu putaran per kalimat. Peta dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Kalimat 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk area bermain di peta dengan satu jari."
            },
            {
              "tipe": "UCAP",
              "teks": "There is a playground in the park."
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
              "teks": "Sapukan tangan terbuka melintasi beberapa pohon di peta."
            },
            {
              "tipe": "UCAP",
              "teks": "There are tall trees near the playground."
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
              "teks": "Tunjuk kolam di peta dengan satu jari."
            },
            {
              "tipe": "UCAP",
              "teks": "There is a pond in the park. It is clean and quiet."
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
              "teks": "Sapukan tangan terbuka melintasi bangku dan toilet di peta."
            },
            {
              "tipe": "UCAP",
              "teks": "There are benches and toilets in the park."
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
            }
          ]
        }
      ],
      "instruksi_penutup": [
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now write about the park map."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk kartu satu-versus-banyak di papan tulis dan jelaskan: satu benda pakai There is, lebih dari satu pakai There are."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa memilih benda-benda dari peta dan menulis kalimat There is atau There are dengan ungkapan tempat. Dikerjakan secara individual, ditulis di buku catatan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Pastikan peta taman masih terpasang di papan tulis. Tempel juga kartu ungkapan tempat dan kartu satu-versus-banyak."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Look at the park map. Choose things you can see and write about them."
        },
        {
          "tipe": "UCAP",
          "teks": "Use There is for one thing. Use There are for more than one. Add the place: in the park, or near the playground."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang menulis There is untuk benda jamak atau menghilangkan ungkapan tempat."
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
          "teks": "Jika siswa bingung memilih There is atau There are — tunjuk kartu satu-versus-banyak di papan tulis dan minta siswa hitung benda yang ingin mereka deskripsikan."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk area bermain di peta, dan ucapkan \"There is a playground blank the park. In or near?\" Tunggu siswa melengkapi dan menulis, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih satu benda di peta dan lengkapi: There is blank in the park. Atau: There are blank in the park.",
        "standar": "Tulis dua kalimat — satu There is untuk satu benda dan satu There are untuk lebih dari satu benda — masing-masing dengan ungkapan tempat.",
        "tantangan": "Tulis dua kalimat keberadaan, lalu tambahkan deskripsi singkat untuk satu benda: There is a pond in the park. It is clean and quiet."
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Guru menentukan pasangan — tunjuk dua siswa yang duduk berdekatan. Untuk jumlah ganjil, bentuk satu kelompok tiga.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Pastikan peta taman masih terlihat oleh semua siswa."
        },
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
          "teks": "Minta Siswa A mendeskripsikan dua benda di peta dengan There is dan There are kepada Siswa B."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B menunjuk setiap benda di peta saat mendengar namanya."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Describe the park to your partner. Your partner points to each thing on the map. Work with the person next to you."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk dua arah."
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
          "teks": "Good. Now stay with your partner and join another pair."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk peta dan minta siswa pilih satu benda, lalu ucapkan \"There is a playground...\" sambil tunjuk benda tersebut."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa mendeskripsikan tiga benda lagi dari peta yang belum disebutkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Deskripsikan dua benda menggunakan kalimat dari buku catatan — boleh membaca. Pasangan menunjuk setiap benda di peta.",
        "standar": "Deskripsikan minimal tiga benda tanpa membaca, menggunakan baik There is maupun There are dengan ungkapan tempat.",
        "tantangan": "Deskripsikan beberapa benda di peta, dan untuk satu benda tambahkan deskripsi singkat: There is a pond in the park. It is clean and quiet. Pasangan melakukan hal yang sama."
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
          "teks": "Take turns. Show the park map and describe it to the new group using There is and There are."
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
          "teks": "Berjalan antar kelompok — dengarkan apakah siswa menggunakan There is dan There are dengan konsisten."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk peta, tunjuk satu benda, dan minta siswa ucapkan \"There is a blank in the park.\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa menggunakan There is untuk benda jamak — tepuk kartu satu-versus-banyak di papan tulis perlahan dan tanya \"One or more than one?\""
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
        "mudah": "Tunjuk peta dan ucapkan dua kalimat keberadaan ke kelompok baru — boleh membaca.",
        "standar": "Tunjuk peta dan deskripsikan minimal tiga benda tanpa membaca, menggunakan baik There is maupun There are.",
        "tantangan": "Tunjuk peta, deskripsikan beberapa benda, dan tambahkan deskripsi singkat untuk satu benda."
      }
    },
    "check": {
      "durasi_menit": 4,
      "intro": "Guru mengamati selama langkah SHARE berlangsung — bukan setelah selesai. Setelah SHARE selesai, lakukan konfirmasi cepat ke dua siswa, lalu putuskan jalur berikutnya.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk tiga pohon di peta."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa secara acak."
        },
        {
          "tipe": "UCAP",
          "teks": "Describe these trees. Use There is or There are. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa memilih There are dengan tepat untuk benda jamak?"
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kolam di peta — tunjuk siswa lain."
        },
        {
          "tipe": "UCAP",
          "teks": "Describe the pond. Add the place expression too."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menyertakan ungkapan tempat seperti in the park atau near the playground?"
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
          "teks": "Tunjuk kartu satu-versus-banyak."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan dua kalimat sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Tunjuk satu bangku di peta dengan satu jari."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. There is a bench in the park."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Sapukan tangan terbuka melintasi tiga bangku di peta."
        },
        {
          "tipe": "UCAP",
          "teks": "There are benches in the park."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan — tekankan perbedaan satu jari untuk There is dan tangan terbuka untuk There are."
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
          "teks": "There isn't a swimming pool in the park. There aren't any shops near the playground."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Tell me one thing that is NOT in the park. Just one sentence."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Try one more.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang deskripsi peta tanpa membaca, atau menulis dua kalimat tambahan tentang benda lain yang ada di peta."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-07.js",
    pattern_id: "PAT-7-07",
    title: "Neighborhood Park: Describing Places",
    short_title: "Neighborhood Park",
    grade: 7,
    genre: "Descriptive",
    cluster: "B",
    topic: "Neighborhood Park",
    context: "Students explore a simple map or picture and describe what exists in the park.",
    context_id: "Siswa menjelajahi peta atau gambar sederhana dan mendeskripsikan apa yang ada di taman.",
    communicative_goal: "describe locations using there is/there are expressions",
    communicative_goal_id: "mendeskripsikan lokasi menggunakan ungkapan there is/there are",
    vocabulary_domain: ["park", "trees", "playground", "facilities"],
    input_anchor: "park map",
    output_anchor: "map description",
    prerequisite_patterns: ["PAT-7-05", "PAT-7-06"],
    reusable_in: ["PAT-8-05", "PAT-8-24"],
    complexity_level: "Acquire",
    notes: "TP ketujuh Fase D, Descriptive. target_pattern PAT-7-07 = 'There is / There are + noun + place expression'. PENTING: 'There is' DAN 'There are' KEDUANYA adalah target (bukan salah satu di BOOST) -- keduanya dimodelkan sejak MODEL, dilatih di REPEAT, diproduksi di CHANGE, dipakai di INTERACT/SHARE pada level manapun. 'There is' untuk satu benda, 'There are' untuk lebih dari satu. PAT-7-05/06 sebagai support: setelah menyebut eksistensi+lokasi, benda yang sama boleh diberi deskripsi singkat 'It is [adj] and [adj]' (pola 'introduce lalu describe', mis. 'There is a pond in the park. It is clean and quiet.'). Sesuai forbidden_overlap: TIDAK ada arah ('turn left', 'go straight' -- giving directions), TIDAK ada langkah prosedural ('first/then'), TIDAK ada narasi lampau. vocabulary_domain (park, trees, playground, facilities) muncul di bahasa target: park, trees, playground, dan facilities direalisasikan via benches/toilets/pond. Ekstensi opsional eksistensi negatif ('There isn't / There aren't') -- di luar empat bentuk afirmatif target -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Hello, everyone! Great to see you all here." },
      { type: "AKSI", text: "Minta siswa menyimpan benda-benda di meja agar fokus." },
      // HOOK
      { type: "UCAP", text: "Have you ever been to a park? What did you see there?" },
      { type: "AKSI", text: "Tampilkan peta taman sederhana dengan area bermain, pohon, kolam, bangku, dan toilet." },
      { type: "UCAP", text: "Look at this park map. What can you find in this park?" },
    ],

    active_vocabulary: [
      "There is",
      "There are",
      "in",
      "near",
      "park",
      "playground",
      "trees",
      "pond",
      "benches",
      "toilets"
    ],

    model_sentences: [
      { id: "model_1", text: "There is a playground in the park." },
      { id: "model_2", text: "There are tall trees near the playground." },
      { id: "model_3", text: "There is a pond in the park. It is clean and quiet." },
      { id: "model_4", text: "There are benches and toilets in the park." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A simple park map showing a playground, several trees, a pond, benches, and toilets, each marked with a small labeled icon.", description_id: "Peta taman sederhana yang menunjukkan area bermain, beberapa pohon, kolam, bangku, dan toilet, masing-masing ditandai dengan ikon kecil berlabel.", asset_id: null },
      { id: "visual_2", description: "Place-expression cards with arrows: 'in the park', 'near the playground', 'next to the pond'.", description_id: "Kartu ungkapan tempat dengan tanda panah: 'in the park', 'near the playground', 'next to the pond'.", asset_id: null },
      { id: "visual_3", description: "A one-versus-many card: one bench (for 'There is') and three benches (for 'There are').", description_id: "Kartu satu-versus-banyak: satu bangku (untuk 'There is') dan tiga bangku (untuk 'There are').", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to a single item on the map with one finger while saying 'There is ...'.", description_id: "Guru menunjuk satu benda di peta dengan satu jari sambil mengucapkan 'There is ...'." },
      { id: "gesture_2", description: "Teacher sweeps an open hand across several items on the map while saying 'There are ...'.", description_id: "Guru menyapukan tangan terbuka melintasi beberapa benda di peta sambil mengucapkan 'There are ...'." },
      { id: "gesture_3", description: "Teacher taps the location on the map while saying the place expression ('in the park', 'near the playground').", description_id: "Guru menepuk lokasi di peta sambil mengucapkan ungkapan tempatnya ('in the park', 'near the playground')." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher describe what exists in a park using 'There is ...' for one thing and 'There are ...' for more than one, each with a place expression.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-05", "PAT-7-06"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the 'There is ...' and 'There are ...' sentences with place expressions together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Describe the park map by replacing the things and their places, choosing 'There is' or 'There are'.",
      prompt: "Use 'There is [one thing] [place expression].' for a single thing, or 'There are [things] [place expression].' for more than one. Replace the things with what you see on the park map (playground, trees, pond, benches, toilets) and the place with 'in the park' or 'near the playground'.",
      change_target: ["thing (There is / There are ...)", "place expression"],
      differentiation: {
        easy: { task: "Choose one thing on the map and complete: 'There is ___ in the park.' or 'There are ___ in the park.'" },
        standard: { task: "Write two sentences -- one 'There is ...' (a single thing) and one 'There are ...' (more than one thing) -- each with a place expression." },
        challenge: { task: "Write two existence sentences, then add a short description of one thing: 'There is a pond in the park. It is clean and quiet.'" }
      },
      support: { pattern_support: ["PAT-7-05", "PAT-7-06"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Describe the park map to a partner using 'There is / There are' and place expressions.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns describing what is in the park ('There is ... / There are ... [place]'). Listen to your partner and point to each thing on the map as they describe it.",
      differentiation: {
        easy: { task: "Describe two things using your sentences from CHANGE (you may read). Your partner points to each thing on the map." },
        standard: { task: "Describe at least three things without reading, using both 'There is' and 'There are' with place expressions." },
        challenge: { task: "Describe the park, and for one thing add a short description ('There is a pond in the park. It is clean and quiet.'). Your partner does the same." }
      },
      support: { pattern_support: ["PAT-7-05", "PAT-7-06"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Describe your park map to a new group (map description).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns: show the park map and describe it to the group using 'There is ... / There are ... [place]'.",
      differentiation: {
        easy: { task: "Show the map and say two existence sentences ('There is/are ... in the park.'). You may read them." },
        standard: { task: "Show the map and describe at least three things without reading, using both 'There is' and 'There are'." },
        challenge: { task: "Show the map, describe several things, and add a short description ('It is clean and quiet.') for one of them." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students use 'There is ...' for one thing and 'There are ...' for more than one",
        "students add a place expression ('in the park', 'near the playground') to each sentence",
        "students still use 'There is' for plural things, or leave out the place expression"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to try a negative existence sentence ('There isn't / There aren't ...').",
        needs_model: "Repeat the MODEL step, emphasizing 'There is' (one) versus 'There are' (more than one) and the place expression.",
        needs_repeat: "Do one more round of REPEAT (choral) on the 'There is/are' sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "uses 'There is' for plural things or leaves out the place expression",
        "relies only on the written sentences and cannot describe the map without reading",
        "uses both 'There is' and 'There are' with place expressions accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling 'There is ...' (one) versus 'There are ...' (more than one) with the place expression",
        "model one more existence sentence about a different place to show the same pattern still works",
        "for a student who is ready, model ONE negative existence sentence first -- 'There isn't a swimming pool in the park. There aren't any shops near the playground.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it adds no directions ('turn left') or steps ('first/then')"
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
