const skenario = {
  "persiapan": {
    "papan_tulis": "A ___ is a kind of ___.\nIts ___ is used for ___.\nIt usually ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu foto alam berbagai kupu-kupu (ditambah lebah dan semut untuk kategori serangga), kartu klasifikasi dengan tiga slot (\"is a kind of ___\" / \"is used for ___\" / \"usually ___\"), dan kartu ikon habitat (taman dan hutan).",
    "instruksi": []
  },
  "siapkan_kelas": {
    "settling": [
      {
        "tipe": "AKSI",
        "teks": "Berdiri di depan kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Good morning. Let's begin today with something from nature."
      },
      {
        "tipe": "AKSI",
        "teks": "Minta siswa menyimpan buku lain dan fokus ke depan."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Have you ever seen a butterfly up close? How would you describe it?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa."
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu foto alam berbagai kupu-kupu, ditambah lebah dan semut — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these nature photos. What do all these creatures have in common?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to classify a living thing clearly, by its category, its use, and its usual characteristics."
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
          "teks": "Angkat satu kartu foto kupu-kupu — tunjuk foto tersebut."
        },
        {
          "tipe": "UCAP",
          "teks": "It is small and colorful. It is helpful for the garden."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu foto — angkat kartu klasifikasi. Tunjuk satu foto kupu-kupu, lalu sapukan tangan ke sekelompok foto serangga lain."
        },
        {
          "tipe": "UCAP",
          "teks": "A butterfly is a kind of insect. It usually has colorful wings."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat kartu ikon habitat — peragakan gesture sayap mengepak untuk \"flying\"."
        },
        {
          "tipe": "UCAP",
          "teks": "Its wings are used for flying."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu ikon taman dan hutan — peragakan gesture menyapu luas dan umum."
        },
        {
          "tipe": "UCAP",
          "teks": "It usually lives in gardens and forests."
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
      "intro": "Guru mengucapkan satu kalimat — siswa menirukan bersama. Satu putaran per kalimat. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Kalimat 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat satu kartu foto kupu-kupu — tunjuk foto tersebut."
            },
            {
              "tipe": "UCAP",
              "teks": "It is small and colorful. It is helpful for the garden."
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
              "teks": "Tunjuk satu foto kupu-kupu, lalu sapukan tangan ke sekelompok foto serangga lain."
            },
            {
              "tipe": "UCAP",
              "teks": "A butterfly is a kind of insect. It usually has colorful wings."
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
              "teks": "Angkat kartu ikon habitat — peragakan gesture sayap mengepak."
            },
            {
              "tipe": "UCAP",
              "teks": "Its wings are used for flying."
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
              "teks": "Tunjuk kartu ikon taman dan hutan — peragakan gesture menyapu luas dan umum."
            },
            {
              "tipe": "UCAP",
              "teks": "It usually lives in gardens and forests."
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
          "teks": "Good. Now it is your turn. Classify your own living thing."
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
      "intro": "Siswa mengganti kategori, fungsi, dan ciri umum dengan hewan pilihan sendiri. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan kartu foto alam dan kartu klasifikasi di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this pattern. Classify a butterfly or another animal from the cards."
        },
        {
          "tipe": "UCAP",
          "teks": "Keep it factual, no \"I think,\" no personal story, and no \"I have a pet.\""
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
          "teks": "Jika siswa tidak tahu hewan mana yang akan diklasifikasikan — tunjuk kartu foto di papan tulis dan minta siswa pilih salah satu gambar."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu foto kupu-kupu, dan minta siswa ucapkan \"A butterfly is a kind of insect.\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih satu kartu foto dan lengkapi: \"A ___ is a kind of ___. It usually ___.\"",
        "standar": "Tulis tiga kalimat klasifikasi tentang hewanmu: satu \"is a kind of\", satu \"is used for\", satu \"usually\".",
        "tantangan": "Mulai dengan satu deskripsi spesifik (\"It is small and colorful.\"), lalu tulis tiga kalimat klasifikasi umum."
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
          "teks": "Minta Siswa A membacakan klasifikasi hewannya ke Siswa B."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B memeriksa — apakah ada kategori, fungsi, dan ciri umum? Lalu tukar peran."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Your turn now. Read your classification to your partner."
        },
        {
          "tipe": "UCAP",
          "teks": "Your partner checks, is there a category, a use, and a usual characteristic? Then swap."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati beberapa pasangan di setiap baris dan pastikan sebagian besar siswa sudah mulai berbicara."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk kartu foto dan minta siswa ucapkan \"A ___ is a kind of ...\" lalu nama kategori hewan tersebut."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan klasifikasinya sekali lagi tanpa melihat buku."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca dua kalimat klasifikasi ke pasangan; pasangan sebutkan kategorinya. Lalu tukar peran.",
        "standar": "Baca tiga kalimat klasifikasi tanpa membaca kata per kata; pasangan periksa ketiga slot. Lalu tukar peran.",
        "tantangan": "Berikan deskripsi spesifik dulu, lalu klasifikasi; pasangan tambahkan satu ciri umum lagi. Lalu tukar peran."
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
          "teks": "Take turns presenting your classification card. The group listens and checks all three slots."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, angkat kartu foto salah satu hewan, dan minta ucapkan \"This is a kind of ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambah satu ciri umum lagi yang belum disebutkan."
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
        "mudah": "Presentasikan dua kalimat klasifikasi ke kelompok. Boleh membaca.",
        "standar": "Presentasikan tiga kalimat klasifikasi lengkap tanpa membaca.",
        "tantangan": "Presentasikan klasifikasi, lalu jawab satu pertanyaan tentang kategorinya dari kelompok."
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
          "teks": "What did you classify? Tell me the category."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan kalimat \"is a kind of\"."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menyebut kategori yang tepat dan faktual, bukan opini atau cerita pribadi?"
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
          "teks": "Say your \"usually\" sentence. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan \"usually\" sebagai ciri umum kategori, bukan tentang satu hewan spesifik?"
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
          "teks": "Angkat kembali kartu klasifikasi."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan kalimat kedua dan keempat sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu seluruh kelas mengucapkan bersama."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta siswa buka buku catatan — lengkapi atau perbaiki kalimat yang belum selesai. Beri waktu dua menit."
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
          "teks": "Angkat kartu klasifikasi."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. A butterfly is a kind of insect."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try with your animal. Say the name, then is a kind of."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu foto hewan pilihan siswa — tunggu siswa melengkapi."
        },
        {
          "tipe": "AKSI",
          "teks": "Lanjutkan frasa per frasa untuk \"is used for\" dan \"usually\" sampai siswa siap bicara lengkap."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. A butterfly is a kind of insect, like bees and ants."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add an example of another member of the same category."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba menambah contoh anggota kategori."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. That makes your classification richer.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan ketiga kalimat klasifikasi tanpa melihat buku, atau menulis klasifikasi untuk hewan kedua di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-05.js",
    pattern_id: "PAT-8-05",
    title: "Butterflies Around Us: Classifying Living Things",
    short_title: "Butterflies",
    grade: 8,
    genre: "Report",
    cluster: "A",
    topic: "Butterflies Around Us",
    context: "Students observe photographs of butterflies and classify them as insects while describing their common characteristics.",
    context_id: "Siswa mengamati foto kupu-kupu dan mengklasifikasikannya sebagai serangga sambil mendeskripsikan ciri-ciri umumnya.",
    communicative_goal: "classify living things using kind, use, and usual characteristics",
    communicative_goal_id: "mengklasifikasikan makhluk hidup berdasarkan jenis, kegunaan, dan ciri umum",
    vocabulary_domain: ["butterflies", "insects", "wings", "habitat"],
    input_anchor: "nature photo cards",
    output_anchor: "classification card",
    prerequisite_patterns: ["PAT-7-08"],
    reusable_in: ["PAT-8-09", "PAT-9-10"],
    complexity_level: "Expand",
    notes: "TP kelima Kelas 8 dan GENRE OPENER REPORT Kelas 8. PERGESERAN REGISTER ke FAKTUAL/OBJEKTIF/GENERALISASI (kebalikan dari Interpersonal TP-25-28). target_pattern PAT-8-05 = 'It is a kind of ... / It is used for ... / It usually ...'. DISTINGSI dari prerequisite PAT-7-08 ('It is + adj + for/to', SPESIFIK tentang 1 makhluk/benda, mis. 'It is small and busy, helpful for carrying food'): PAT-8-05 = KLASIFIKASI ke KATEGORI + fungsi/karakteristik UMUM kategori ('A butterfly is a kind of insect. It usually has colorful wings.'). Reaktivasi PAT-7-08 (WAJIB, VR-1): deskripsi SPESIFIK ala PAT-7-08 sebagai HOOK/support ('It is small and colorful.' tentang SATU kupu-kupu), lalu TRANSISI ke klasifikasi umum target. forbidden_overlap (personal description, opinion, narrative introduction): TIDAK ada 'I think/I have a pet/I like', TIDAK ada 'Once there was a butterfly...' -- murni faktual tentang KATEGORI; subjek generic ('A butterfly...', 'It usually...'). vocabulary_domain (butterflies, insects, wings, habitat) muncul di bahasa target (habitat via garden/forest). Ekstensi opsional menambah contoh anggota kategori ('It is a kind of insect, like bees and ants.') -- menjaga head klasifikasi, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Let's begin today with something from nature." },
      { type: "AKSI", text: "Minta siswa menyimpan buku lain dan fokus ke depan." },
      // HOOK
      { type: "UCAP", text: "Have you ever seen a butterfly up close? How would you describe it?" },
      { type: "AKSI", text: "Tampilkan kartu foto alam berbagai kupu-kupu, ditambah serangga lain (lebah, semut)." },
      { type: "UCAP", text: "Look at these nature photos. What do all these creatures have in common?" },
    ],

    active_vocabulary: [
      "is a kind of",
      "is used for",
      "usually",
      "butterfly",
      "insect",
      "wings",
      "garden",
      "forest"
    ],

    model_sentences: [
      { id: "model_1", text: "It is small and colorful. It is helpful for the garden." },
      { id: "model_2", text: "A butterfly is a kind of insect. It usually has colorful wings." },
      { id: "model_3", text: "Its wings are used for flying." },
      { id: "model_4", text: "It usually lives in gardens and forests." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Nature photo cards of different butterflies, plus other insects (bees, ants) for the category 'insect'.", description_id: "Kartu foto alam berbagai kupu-kupu, ditambah serangga lain (lebah, semut) untuk kategori 'serangga'.", asset_id: null },
      { id: "visual_2", description: "A classification card with three slots: 'is a kind of ___', 'is used for ___', 'usually ___'.", description_id: "Kartu klasifikasi dengan tiga slot: 'is a kind of ___', 'is used for ___', 'usually ___'.", asset_id: null },
      { id: "visual_3", description: "Habitat icons: a garden and a forest where butterflies usually live.", description_id: "Ikon habitat: taman dan hutan tempat kupu-kupu biasanya hidup.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to one butterfly photo, then sweeps to a group of insects, to show classifying into a category ('is a kind of').", description_id: "Guru menunjuk satu foto kupu-kupu, lalu menyapu ke sekelompok serangga, untuk menunjukkan pengklasifikasian ke dalam kategori ('is a kind of')." },
      { id: "gesture_2", description: "Teacher mimes the use of a feature (wings flapping for flying) while saying 'is used for ...'.", description_id: "Guru memperagakan penggunaan suatu ciri (sayap mengepak untuk terbang) sambil mengucapkan 'is used for ...'." },
      { id: "gesture_3", description: "Teacher makes a wide, general sweep while saying 'It usually ...' to show a typical characteristic.", description_id: "Guru membuat gerakan menyapu yang luas dan umum sambil mengucapkan 'It usually ...' untuk menunjukkan ciri khas." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher move from a specific description of one butterfly to a general classification ('It is a kind of ... / It is used for ... / It usually ...').",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-08"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the classification sentences ('It is a kind of ... / It is used for ... / It usually ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Classify a living thing by replacing the category, use, and usual characteristic.",
      prompt: "Use the patterns 'A [thing] is a kind of [category].', 'Its [part] is used for [function].', and 'It usually [general characteristic].' Classify a butterfly or another animal from the cards. Keep it factual about the category -- no 'I think', no 'I have a pet', no story.",
      change_target: ["category (is a kind of ...)", "use (is used for ...)", "usual characteristic (usually ...)"],
      differentiation: {
        easy: { task: "Choose a nature card and complete: 'A ___ is a kind of ___. It usually ___.'" },
        standard: { task: "Write three classification sentences about your animal: one 'is a kind of', one 'is used for', one 'usually'." },
        challenge: { task: "Start with a one-line specific description ('It is small and colorful.'), then give your three general classification sentences." }
      },
      support: { pattern_support: ["PAT-7-08"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Compare classification cards with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns reading your classification ('It is a kind of ... It usually ...') while your partner checks the card has a category, a use, and a usual characteristic. Then swap.",
      differentiation: {
        easy: { task: "Read two classification sentences to your partner; your partner names the category. Then swap." },
        standard: { task: "Read your three classification sentences without reading word-by-word; your partner checks all three slots. Then swap." },
        challenge: { task: "Give a specific description first, then your classification; your partner adds one more usual characteristic. Then swap." }
      },
      support: { pattern_support: ["PAT-7-08"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your classification card to a new group (classification card).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting your classification card ('It is a kind of ... It is used for ... It usually ...').",
      differentiation: {
        easy: { task: "Present two classification sentences to the new group. You may read them." },
        standard: { task: "Present your full classification (category, use, usual characteristic) without reading." },
        challenge: { task: "Present your classification, then answer one question about the category from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students classify with 'It is a kind of ...', 'It is used for ...', and 'It usually ...'",
        "students keep it factual about the category (general 'It usually ...'), not a personal or story statement",
        "students still slip into 'I think ... / I have a ... / Once there was ...' instead of a factual classification"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add an example of another member of the category.",
        needs_model: "Repeat the MODEL step, emphasizing 'is a kind of', 'is used for', and 'usually' as factual category language.",
        needs_repeat: "Do one more round of REPEAT (choral) on the classification sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "describes only one specific thing or slips into 'I think / I have / Once there was'",
        "relies only on the written card and cannot classify without reading",
        "classifies with 'is a kind of / is used for / usually' accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling the move from a specific thing to a general category ('is a kind of ... usually ...')",
        "model one more classification of a different living thing to show the same pattern still works",
        "for a student who is ready, model ONE classification that adds category examples first -- 'A butterfly is a kind of insect, like bees and ants.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the factual classification head, with no opinion or story"
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
