const skenario = {
  "persiapan": {
    "papan_tulis": "I am (name).\nI am (age) years old.\nI like (hobby).\nI can (ability), but I cannot (ability).",
    "kartu": "Siapkan tiga kartu bergambar di meja guru — kartu nama, kartu hobi, kartu kemampuan.",
    "instruksi": []
  },
  "siapkan_kelas": {
    "settling": [
      {
        "tipe": "AKSI",
        "teks": "Berdiri di depan kelas."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu sampai semua siswa duduk dan tenang."
      },
      {
        "tipe": "UCAP",
        "teks": "Good morning, everyone."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons siswa."
      }
    ],
    "hook": [
      {
        "tipe": "AKSI",
        "teks": "Angkat kartu nama Dito 12 tahun — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "AKSI",
        "teks": "Tahan sebentar — beri waktu siswa melihat."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this name tag card. What information can you see on it?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa."
      },
      {
        "tipe": "UCAP",
        "teks": "Today is your first day here. Who would like to share their name with the class?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu satu atau dua siswa merespons. Jika tidak ada yang angkat tangan dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua siswa berbicara atau setelah sekitar tiga puluh detik — lanjutkan."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — lalu letakkan kartu nama di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Now let us see how Dito introduces himself."
      }
    ]
  },
  "langkah": {
    "model": {
      "durasi_menit": 5,
      "intro": "Siswa hanya menonton dan mendengarkan — belum diminta melakukan apapun.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Ambil kartu nama Dito 12 tahun — tunjukkan ke seluruh kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tepuk dada sendiri."
        },
        {
          "tipe": "UCAP",
          "teks": "I am Dito. I am twelve years old."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat jari tunjukkan angka dua belas saat mengucapkan usia."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu nama — ambil kartu bergambar hobi berisi buku komik dan raket bulu tangkis."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan membalik halaman buku."
        },
        {
          "tipe": "AKSI",
          "teks": "Lalu ayunkan lengan seperti memukul raket."
        },
        {
          "tipe": "UCAP",
          "teks": "I like reading comics and playing badminton."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu hobi — ambil kartu bergambar kemampuan berisi sepeda dan kolam renang dengan tanda silang."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan mengayuh sepeda."
        },
        {
          "tipe": "AKSI",
          "teks": "Gelengkan kepala sambil silangkan kedua tangan di depan dada."
        },
        {
          "tipe": "UCAP",
          "teks": "I can ride a bicycle, but I cannot swim yet."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kemampuan."
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
      "intro": "Guru mengucapkan satu kalimat — siswa menirukan bersama. Satu putaran per kalimat. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Kalimat 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat kartu nama — peragakan gesture tepuk dada dan angkat jari."
            },
            {
              "tipe": "UCAP",
              "teks": "I am Dito. I am twelve years old."
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
              "teks": "Letakkan kartu nama — angkat kartu bergambar hobi, peragakan gesture buku dan raket."
            },
            {
              "tipe": "UCAP",
              "teks": "I like reading comics and playing badminton."
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
              "teks": "Letakkan kartu hobi — angkat kartu bergambar kemampuan, peragakan gesture sepeda dan silang tangan."
            },
            {
              "tipe": "UCAP",
              "teks": "I can ride a bicycle, but I cannot swim yet."
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
          "teks": "Letakkan kartu kemampuan."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now it is your turn. Write about yourself."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk pola di papan tulis. Minta siswa menyalin di buku catatan sebelum melanjutkan. Beri waktu dua menit untuk menyalin, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi tiga menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa mengganti informasi dalam kalimat dengan informasi diri sendiri. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan ketiga kartu bergambar di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this pattern. But write about yourself, not Dito."
        },
        {
          "tipe": "UCAP",
          "teks": "Change the words in the brackets. Use your own information."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang berhenti menulis lebih dari sepuluh detik atau belum menulis satu kalimat pun."
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
          "teks": "Jika siswa tidak tahu kosakata hobi atau kemampuan yang ingin ditulis — tunjuk kartu bergambar di papan tulis dan minta siswa pilih salah satu."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk baris pertama di papan tulis, dan minta siswa ucapkan \"I am\" lalu nama mereka sendiri. Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Jika belum bisa menulis informasi sendiri — pilih contoh dari kartu bergambar di papan tulis sebagai latihan. Tulis: I am, lalu nama. I am, lalu usia, years old. I like, lalu hobi. I can, lalu kemampuan. Jika mampu, lanjutkan dengan but I cannot, lalu kemampuan.",
        "standar": "Tulis empat kalimat dengan informasi diri sendiri mengikuti pola di papan tulis.",
        "tantangan": "Tulis empat kalimat, lalu tambah satu detail ekstra di setiap kalimat. Contoh: I like reading comics every weekend. Atau: I can ride a bicycle very well."
      }
    },
    "interact": {
      "durasi_menit": 10,
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
          "teks": "Minta Siswa A membaca atau mengucapkan kalimatnya ke Siswa B."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B mendengarkan tanpa menyela."
        },
        {
          "tipe": "AKSI",
          "teks": "Lalu minta Siswa B mengucapkan kalimatnya ke Siswa A."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Your turn now. Work with the person next to you."
        },
        {
          "tipe": "UCAP",
          "teks": "If you are in a group of three, take turns. A, then B, then C."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu lima menit untuk dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati beberapa pasangan di setiap baris dan pastikan sebagian besar siswa sudah mulai berbicara."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah lima menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Stay with your partner. Wait for my signal. I will show you which pair to join."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk kalimat pertama di buku catatan siswa dan minta siswa ucapkan \"I am\" lalu nama mereka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan kalimatnya sekali lagi tanpa melihat buku."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca kalimat dari buku catatan ke pasangan. Dengarkan pasangan membaca miliknya.",
        "standar": "Ucapkan kalimat tanpa membaca buku. Dengarkan pasangan — ingat satu fakta tentang mereka: nama, usia, hobi, atau kemampuan.",
        "tantangan": "Ucapkan kalimat tanpa membaca, lalu tambahkan satu detail ekstra secara spontan. Minta pasangan melakukan hal yang sama."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Setiap pasangan bergabung dengan satu pasangan lain — bukan pasangan dari langkah INTERACT — membentuk kelompok empat orang.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pasangan mana bergabung dengan pasangan mana — jangan biarkan siswa memilih sendiri."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika kursi bisa diputar — pasangan di baris depan putar kursi menghadap pasangan di baris belakang."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika meja permanen — dua pasangan cukup saling mendekat tanpa memindahkan meja."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok terbentuk dan tenang."
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
          "tipe": "UCAP",
          "teks": "One person speaks. The others listen. No interrupting."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk semua anggota kelompok berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — pastikan tidak ada anggota kelompok yang diam terus selama sesi."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"I am\" lalu nama mereka sebagai pembuka. Jika masih diam — ucapkan nama siswa tersebut terlebih dahulu lalu minta siswa mengulang."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa ucapkan kalimatnya sekali lagi tanpa melihat buku."
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
        "mudah": "Baca kalimat dari buku catatan ke kelompok.",
        "standar": "Ucapkan kalimat tanpa membaca buku.",
        "tantangan": "Ucapkan kalimat tanpa membaca, lalu setelah semua anggota selesai — sebutkan satu fakta tentang setiap orang: nama, usia, hobi, atau kemampuan."
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
          "teks": "Say your first sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan kalimat pertamanya."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa mengisi dengan informasi diri sendiri, atau masih meniru contoh Dito?"
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
          "teks": "Say your second sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa bisa mengucapkan dengan lancar, atau berhenti di tengah kalimat?"
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
          "teks": "Angkat kembali ketiga kartu bergambar."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan tiga kalimat sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu seluruh kelas mengucapkan bersama."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta siswa buka buku catatan — lengkapi atau tulis ulang kalimat yang belum selesai. Beri waktu dua menit."
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
          "teks": "Angkat kartu nama."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. I am..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan \"I am.\""
        },
        {
          "tipe": "AKSI",
          "teks": "Sebutkan nama siswa tersebut dengan suara pelan."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan namanya sendiri."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta siswa ucapkan kalimat lengkap: \"I am\" lalu nama mereka."
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi frasa per frasa untuk kalimat berikutnya — jangan minta kalimat penuh sekaligus sampai siswa siap."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu teman siswa tersebut yang duduk di dekatnya."
        },
        {
          "tipe": "UCAP",
          "teks": "Try a new way to talk about your friend. Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "This is Rina. She likes reading comics."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Tell me about your friend. Just two sentences."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Try with another friend.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang kalimat sendiri tanpa melihat buku, atau menulis satu kalimat tambahan di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-01.js",
    pattern_id: "PAT-7-01",
    title: "Getting to Know Friends: Introducing Yourself",
    short_title: "Introducing Yourself",
    grade: 7,
    genre: "Interpersonal",
    cluster: "A",
    topic: "Personal Identity",
    context: "Students meet new classmates on the first day of school.",
    context_id: "Siswa bertemu teman-teman baru di hari pertama sekolah.",
    communicative_goal: "share basic personal information",
    communicative_goal_id: "berbagi informasi pribadi dasar",
    vocabulary_domain: ["name", "age", "hobbies", "abilities"],
    input_anchor: "picture cards",
    output_anchor: "pair conversation",
    prerequisite_patterns: [],
    reusable_in: ["PAT-8-01"],
    complexity_level: "Acquire",
    notes: "TP pembuka Fase D, menetapkan pattern dasar PAT-7-01 (I am / I like / I can). MODEL, REPEAT, CHANGE, INTERACT, dan SHARE seluruhnya berfokus pada pattern orang pertama ini (NS-2) dan mengikuti anchor Listen->Say->Change->Use. Ekstensi ke He/She is / likes / can (memperkenalkan orang lain) ditempatkan di BOOST sebagai extension opsional untuk siswa yang sudah siap: guru memodelkan langsung (Listen) sebelum siswa mencoba (Say), sehingga tidak ada bentuk bahasa yang diminta 'Use' tanpa pernah dimodelkan.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Hello, everyone! Welcome to our class." },
      { type: "AKSI", text: "Tunggu semua siswa duduk dan tenang sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "Look at this name tag card — what information can you see on it?" },
      { type: "AKSI", text: "Tunjukkan kartu bergambar papan nama 'Dito, 12 tahun' ke seluruh kelas." },
      { type: "UCAP", text: "Today is your first day here. Who would like to share their name with the class?" },
    ],

    active_vocabulary: [
      "years old", "like", "can", "can't",
      "playing badminton", "reading comics",
      "ride a bicycle", "swim",
      "every weekend", "very well"
    ],

    model_sentences: [
      { id: "model_1", text: "I am Dito. I am twelve years old." },
      { id: "model_2", text: "I like reading comics and playing badminton." },
      { id: "model_3", text: "I can ride a bicycle, but I can't swim yet." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A name tag picture card showing a name and an age, e.g. 'Dito, 12 years old'.", description_id: "Kartu bergambar papan nama yang menunjukkan nama dan usia, contohnya 'Dito, 12 tahun'.", asset_id: null },
      { id: "visual_2", description: "Picture cards showing hobby icons: a comic book and a badminton racket.", description_id: "Kartu bergambar yang menunjukkan ikon hobi: buku komik dan raket bulu tangkis.", asset_id: null },
      { id: "visual_3", description: "Picture cards showing ability icons: a bicycle (can) and a swimming pool with a cross mark (can't).", description_id: "Kartu bergambar yang menunjukkan ikon kemampuan: sepeda (can) dan kolam renang dengan tanda silang (can't).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher taps their own chest while saying 'I am...' and holds up fingers to show age while saying 'I am ... years old.'", description_id: "Guru menepuk dadanya sendiri sambil mengucapkan 'I am...' dan mengangkat jari untuk menunjukkan usia sambil mengucapkan 'I am ... years old.'" },
      { id: "gesture_2", description: "Teacher mimes flipping pages of a book and swinging a badminton racket while saying 'I like...'", description_id: "Guru memperagakan membalik halaman buku dan mengayunkan raket bulu tangkis sambil mengucapkan 'I like...'" },
      { id: "gesture_3", description: "Teacher mimes pedaling a bicycle for 'I can...' and shakes their head with crossed arms for 'I can't...'", description_id: "Guru memperagakan mengayuh sepeda untuk 'I can...' dan menggelengkan kepala sambil menyilangkan tangan untuk 'I can't...'" }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 5,
      objective: "Observe the teacher demonstrate how to introduce yourself using name, age, hobbies, and abilities.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"]
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the introduction pattern together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Replace the example information with your own personal information.",
      prompt: "Use the pattern 'I am [name]. I am [age] years old. I like [hobby]. I can [ability], but I can't [ability].' Replace the words in brackets with information about yourself.",
      change_target: ["name", "age", "hobby", "ability"],
      differentiation: {
        easy: { task: "Choose your name, age, one hobby, and one ability from the picture cards, then complete: 'I am ___. I am ___ years old. I like ___. I can ___.'" },
        standard: { task: "Write your own sentences: 'I am [name]. I am [age] years old. I like [hobby]. I can [ability], but I can't [ability].'" },
        challenge: { task: "Write your own sentences and add one extra detail to each, e.g. 'I like [hobby] every weekend' or 'I can [ability] very well.'" }
      }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 10,
      objective: "Introduce yourself to a partner using your own sentences and listen to your partner's introduction.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns introducing yourselves using the sentences from the CHANGE step. Listen carefully to your partner's introduction.",
      differentiation: {
        easy: { task: "Use your sentences from CHANGE as a script. Read them to your partner, then listen to your partner read theirs." },
        standard: { task: "Say your sentences from CHANGE to your partner without reading. Listen to your partner and remember one fact about them." },
        challenge: { task: "Say your sentences to your partner, then say them again adding one extra detail to one sentence, e.g. 'I like reading comics, especially on weekends.' Ask your partner to do the same." }
      }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Introduce yourself again to a new group of classmates using your sentences.",
      share_mode: "oral_response",
      task: "Form a group of 4 with another pair (someone other than your INTERACT partner). Take turns introducing yourselves to the new group using your sentences from CHANGE.",
      differentiation: {
        easy: { task: "Read your sentences from CHANGE to the new group." },
        standard: { task: "Say your sentences from CHANGE to the new group without reading." },
        challenge: { task: "Say your sentences to the new group, then try to remember one fact (name, age, hobby, or ability) about each person after everyone has shared." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students produce 'I am / I like / I can' sentences with their own information",
        "students can repeat their sentences fluently to a new group without re-reading",
        "students still rely on picture cards or sentence frames to complete sentences"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a few students to try the partner-introduction extension with the whole class.",
        needs_model: "Repeat the MODEL step with the same sentences before continuing.",
        needs_repeat: "Do one more round of REPEAT (choral) before CHANGE."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "hesitates when forming 'I am / I like / I can' sentences",
        "relies only on picture cards without attempting own words",
        "produces all three sentences accurately and confidently across multiple groups"
      ],
      action: [
        "recast the sentence slowly, emphasizing the pattern",
        "model one more example using a different topic (e.g., favorite food) to show the pattern still works",
        "for students who are ready for extra practice, model ONE example introducing another person -- 'This is [name]. He/She is... He/She likes... He/She can...' -- and invite that student to try; this is an optional individual extension, not a whole-class activity"
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
