const skenario = {
  "persiapan": {
    "papan_tulis": "First, ___.  Next, ___.\nThen, ___.  Finally, ___.",
    "kartu": "Siapkan tiga kartu di meja guru — diagram proses belanja online (cari → keranjang dan pembayaran → proses dan pengepakan → pengiriman), kartu urutan (\"First, ...\" / \"Next, ...\" / \"Then, ...\" / \"Finally, ...\" di sepanjang tanda panah), dan kartu ikon (halaman toko online, metode pembayaran, kotak yang sudah dikemas, pengiriman ke alamat).",
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
        "teks": "Alright everyone, let us get started."
      },
      {
        "tipe": "AKSI",
        "teks": "Pastikan siswa sudah siap dan fokus ke depan."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Raise your hand, who has ordered something online before?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa — tanya lanjut: \"From which app? What did you order?\" Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan diagram proses belanja online — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "You clicked, paid, and the package arrived, but what actually happened in between?"
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to explain a process, step by step, using First, Next, Then, and Finally."
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
          "teks": "Tunjuk tokoh \"pelanggan\" yang umum di diagram — bukan diri sendiri. Gambar lingkaran berulang di udara untuk menunjukkan proses yang berulang."
        },
        {
          "tipe": "UCAP",
          "teks": "When a customer orders online, the order goes through several steps because each step has a different purpose."
        },
        {
          "tipe": "AKSI",
          "teks": "Hitung tahap pertama dan kedua di diagram — gunakan tangan untuk menghitung satu, dua."
        },
        {
          "tipe": "UCAP",
          "teks": "First, the customer searches for a product in an online store. Next, they add it to the cart and choose a payment method."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk tahap ketiga di diagram — hitung tiga."
        },
        {
          "tipe": "UCAP",
          "teks": "Then, the order is processed and packed."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk tahap keempat di diagram — hitung empat, akhiri dengan gesture pengiriman."
        },
        {
          "tipe": "UCAP",
          "teks": "Finally, the package is delivered to the customer's address."
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
              "teks": "Tunjuk tokoh \"pelanggan\" di diagram — gambar lingkaran berulang di udara."
            },
            {
              "tipe": "UCAP",
              "teks": "When a customer orders online, the order goes through several steps because each step has a different purpose."
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
              "teks": "Hitung tahap pertama dan kedua di diagram."
            },
            {
              "tipe": "UCAP",
              "teks": "First, the customer searches for a product in an online store. Next, they add it to the cart and choose a payment method."
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
              "teks": "Tunjuk tahap ketiga di diagram — hitung tiga."
            },
            {
              "tipe": "UCAP",
              "teks": "Then, the order is processed and packed."
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
              "teks": "Tunjuk tahap keempat di diagram — hitung empat."
            },
            {
              "tipe": "UCAP",
              "teks": "Finally, the package is delivered to the customer's address."
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
          "teks": "Good. Now it is your turn. Explain how online shopping works."
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
      "intro": "Siswa menjelaskan proses belanja online dengan kata-kata sendiri. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan diagram proses dan kartu urutan di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use these patterns. Explain how online shopping usually works."
        },
        {
          "tipe": "UCAP",
          "teks": "Use the customer or the order as the subject, not I or you, and not past tense."
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
          "teks": "Stop writing. Stay where you are. I will show you your group."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu tahap apa yang akan ditulis — tunjuk tahap pertama di diagram dan minta siswa mulai dari \"First, the customer ...\""
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk tahap pertama di diagram, dan minta siswa ucapkan \"First, the customer searches ...\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Urutkan langkah-langkah di diagram: \"First, ___. Next, ___. Finally, ___.\" (gunakan the customer atau the order).",
        "standar": "Jelaskan prosesnya dalam empat tahap (\"First, ... Next, ... Then, ... Finally, ...\"), present tense, subjek generik.",
        "tantangan": "Mulai dengan jembatan kausal (\"When a customer orders online, the order goes through several steps because ...\"), lalu jelaskan prosesnya secara lengkap dalam tahapan."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Mulai dengan jembatan kausal (\"When a customer orders online, the order goes through several steps because ...\"), lalu jelaskan prosesnya secara lengkap dalam tahapan.",
        "perlu_bantuan": "Urutkan langkah-langkah di diagram: \"First, ___. Next, ___. Finally, ___.\" (gunakan the customer atau the order)."
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Bentuk kelompok tiga atau empat orang. Guru menentukan kelompok.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk siapa bergabung dalam kelompok yang sama — jangan biarkan siswa memilih sendiri."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok terbentuk dan tenang."
        },
        {
          "tipe": "UCAP",
          "teks": "In your group, use the process diagram. Take turns adding one stage to explain the full process."
        },
        {
          "tipe": "UCAP",
          "teks": "Keep present tense and a generic subject, not I or you, and not a past story."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk membangun penjelasan proses bersama."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — amati apakah setiap anggota sudah menyumbang setidaknya satu tahap."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now each group will present to a new group."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok diam lebih dari sepuluh detik — tunjuk tahap pertama di diagram dan tanya \"What does the customer do first?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika anggota kelompok berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum melanjutkan."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa mendominasi — tunjuk siswa lain dan minta mereka tambahkan tahap berikutnya."
        }
      ],
      "diferensiasi": {
        "mudah": "Tambahkan satu tahap ke penjelasan kelompok (boleh membaca), gunakan the customer atau the order.",
        "standar": "Tambahkan dua tahap tanpa membaca, dengan present tense dan subjek generik.",
        "tantangan": "Berikan jembatan kausal, lalu jelaskan proses lengkap; kelompok periksa apakah tidak ada tahap yang menggunakan \"I\" atau past tense."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Berikan jembatan kausal, lalu jelaskan proses lengkap; kelompok periksa apakah tidak ada tahap yang menggunakan \"I\" atau past tense.",
        "perlu_bantuan": "Tambahkan satu tahap ke penjelasan kelompok (boleh membaca), gunakan the customer atau the order."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Setiap kelompok bergabung dengan satu kelompok lain — membentuk kelompok baru empat orang dari kelompok yang berbeda.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kelompok mana bergabung dengan kelompok mana — jangan biarkan siswa memilih sendiri."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok baru terbentuk dan tenang."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa di tiap kelompok sebagai pembicara pertama."
        },
        {
          "tipe": "UCAP",
          "teks": "The person I point to presents your process explanation first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns explaining how online shopping usually works."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk semua anggota berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — pastikan tidak ada anggota kelompok yang diam terus selama sesi."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, tunjuk diagram, dan minta ucapkan \"First, the customer ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambahkan satu tahap baru dengan \"After that, ...\""
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
        "mudah": "Presentasikan tiga tahap proses ke kelompok baru. Boleh membaca.",
        "standar": "Presentasikan keempat tahap proses secara lengkap tanpa membaca.",
        "tantangan": "Presentasikan prosesnya dan jawab satu pertanyaan tentang satu tahap, dengan tetap menggunakan present tense dan subjek generik."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Presentasikan prosesnya dan jawab satu pertanyaan tentang satu tahap, dengan tetap menggunakan present tense dan subjek generik.",
        "perlu_bantuan": "Presentasikan tiga tahap proses ke kelompok baru. Boleh membaca."
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
          "teks": "Give me the First step. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan present tense dan subjek generik (\"the customer\" / \"the order\"), bukan \"I\" atau \"you\" atau past tense?"
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
          "teks": "Your Finally step. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan passive atau subjek generik, bukan perintah langsung?"
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
          "teks": "Angkat kembali kartu urutan."
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
          "teks": "Angkat kartu urutan — tunjuk tahap pertama di diagram."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. First, the customer searches for a product."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try. Next, they..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk tahap kedua di diagram — tunggu siswa melengkapi."
        },
        {
          "tipe": "AKSI",
          "teks": "Lanjutkan untuk \"Then\" dan \"Finally\" sampai siswa siap bicara empat tahap tanpa bantuan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. After that, the customer receives a message that the package has shipped."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add one more stage with After that."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba menambahkan satu tahap baru dengan \"After that, ...\""
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. You extended the process with one more step.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan keempat tahap proses tanpa melihat buku, atau menulis penjelasan proses tentang cara kerja pinjaman perpustakaan di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-10.js",
    pattern_id: "PAT-8-10",
    title: "Online Shopping: Explaining a Digital Process",
    short_title: "Online Shopping",
    grade: 8,
    genre: "Explanation",
    cluster: "A",
    topic: "Online Shopping Process",
    context: "Students explain the sequence of buying an item through an online marketplace from choosing a product to receiving it.",
    context_id: "Siswa menjelaskan urutan membeli barang melalui marketplace online, dari memilih produk hingga menerimanya.",
    communicative_goal: "describe a multi-step process using clear sequencing language",
    communicative_goal_id: "mendeskripsikan proses bertahap menggunakan bahasa pengurutan yang jelas",
    vocabulary_domain: ["online store", "payment", "delivery", "order"],
    input_anchor: "process diagram",
    output_anchor: "process explanation",
    prerequisite_patterns: ["PAT-8-09"],
    reusable_in: ["PAT-9-08", "PAT-9-10"],
    complexity_level: "Expand",
    notes: "TP kesepuluh Kelas 8, Explanation (Explaining Processes). target_pattern PAT-8-10 = 'First, ... Next, ... Then, ... Finally, ...' (process explanation). TITIK PALING RAWAN: permukaan SAMA dengan (a) PAT-7-09 ('First,/Then,/Finally,' PROCEDURE, present-tense IMPERATIF, 'First, open the book'); (b) PAT-7-23 ('So,/Then,...and.../Finally,' NARRATIVE RESOLUSI, PAST tense, subjek karakter); (c) recount chronology (PAT-7-13/14, 'Yesterday, First I...'). PAT-8-10 WAJIB: PRESENT TENSE + SUBJEK GENERIK/IMPERSONAL ('the customer'/'they'/PASSIVE -- bukan 'I'/'you', bukan nama tokoh) + menjelaskan PROSES/SISTEM YANG BERULANG (bagaimana proses ini BIASANYA berjalan) -- BUKAN instruksi langsung ke pendengar ('First, click here'), BUKAN pengalaman pribadi lampau ('Yesterday I ordered...'), BUKAN cerita bertokoh ('First, the boy clicked...'). Reaktivasi PAT-8-09 (WAJIB, VR-1): pola kausal TUNGGAL 'When [trigger], ... happens because [reason]' (TP-33) -> PAT-8-10 merangkai BEBERAPA TAHAP BERURUTAN menjadi satu PROSES UTUH; model_1 = jembatan kausal ('When a customer orders online, the process happens because several steps are needed.') menuju 'First, ...'. CHECK menegaskan present tense + subjek generik + proses berulang (distingsi eksplisit dari PAT-7-09 imperatif & PAT-7-23 past naratif). vocabulary_domain (online store, payment, delivery, order) muncul di bahasa target (delivery via 'delivered'). Ekstensi opsional menambah satu tahap dengan 'After that, ...' (subjek generik, present) -- menjaga head proses, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Alright everyone, let's get started." },
      { type: "AKSI", text: "Pastikan siswa sudah siap dan fokus ke depan." },
      // HOOK
      { type: "UCAP", text: "Raise your hand — who has ordered something online before?" },
      { type: "AKSI", text: "Tunggu respons, lalu tanya lanjut: 'From which app? What did you order?'" },
      { type: "AKSI", text: "Tampilkan diagram proses belanja online di papan atau layar." },
      { type: "UCAP", text: "You clicked, paid, and the package arrived — but what actually happened in between?" },
    ],

    active_vocabulary: [
      "First,",
      "Next,",
      "Then,",
      "Finally,",
      "online store",
      "payment",
      "order",
      "delivered"
    ],

    model_sentences: [
      { id: "model_1", text: "When a customer orders online, the order goes through several steps because each step has a different purpose." },
      { id: "model_2", text: "First, the customer searches for a product in an online store. Next, they add it to the cart and choose a payment method." },
      { id: "model_3", text: "Then, the order is processed and packed." },
      { id: "model_4", text: "Finally, the package is delivered to the customer's address." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A process diagram of online shopping: search -> cart and payment -> processing and packing -> delivery.", description_id: "Diagram proses belanja online: cari -> keranjang dan pembayaran -> proses dan pengepakan -> pengiriman.", asset_id: null },
      { id: "visual_2", description: "Sequence cards: 'First, ...', 'Next, ...', 'Then, ...', 'Finally, ...' along an arrow.", description_id: "Kartu urutan: 'First, ...', 'Next, ...', 'Then, ...', 'Finally, ...' di sepanjang tanda panah.", asset_id: null },
      { id: "visual_3", description: "Icons: an online store page, a payment method, a packed box, a delivery to an address.", description_id: "Ikon: halaman toko online, metode pembayaran, kotak yang sudah dikemas, pengiriman ke alamat.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher counts the stages on the diagram (one, two, three, four) while saying 'First, ... Next, ... Then, ... Finally, ...'.", description_id: "Guru menghitung tahapan di diagram (satu, dua, tiga, empat) sambil mengucapkan 'First, ... Next, ... Then, ... Finally, ...'." },
      { id: "gesture_2", description: "Teacher points to a generic 'customer' figure on the diagram (not themselves) to show an impersonal subject.", description_id: "Guru menunjuk tokoh 'pelanggan' yang umum di diagram (bukan dirinya sendiri) untuk menunjukkan subjek yang tidak personal." },
      { id: "gesture_3", description: "Teacher draws a repeating loop in the air to show this is how the process usually works, every time.", description_id: "Guru menggambar lingkaran berulang di udara untuk menunjukkan bahwa proses ini biasanya berjalan seperti ini, setiap kali." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher explain how an online order is usually processed, in present tense with a generic subject, using 'First, ... Next, ... Then, ... Finally, ...'.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-09"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the process-explanation sentences ('First, ... Next, ... Then, ... Finally, ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Explain the online shopping process by replacing the stages, in present tense with a generic subject.",
      prompt: "Use the pattern 'First, ... Next, ... Then, ... Finally, ...' to explain how an online order usually works (online store, payment, order, delivery). Use present tense and a generic subject ('the customer', 'they', or passive 'the order is ...') -- not 'I'/'you', not a past story, and not a command ('click here').",
      change_target: ["stages (First / Next / Then / Finally)", "process details"],
      differentiation: {
        easy: { task: "Put the diagram steps in order: 'First, ___. Next, ___. Finally, ___.' (use 'the customer' / 'the order')." },
        standard: { task: "Explain the process in four stages ('First, ... Next, ... Then, ... Finally, ...'), present tense, generic subject." },
        challenge: { task: "Start with the causal bridge ('When a customer orders online, the order goes through several steps because each step has a different purpose.'), then explain the full process in stages." }
      },
      support: { pattern_support: ["PAT-8-09"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Explain the process and check the stages together in a small group.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, use the process diagram. Take turns adding one stage ('First, ... / Next, ... / Then, ... / Finally, ...') so the group explains the whole process. Keep present tense and a generic subject.",
      differentiation: {
        easy: { task: "Add one stage to the group's explanation (you may read), using 'the customer' or 'the order'." },
        standard: { task: "Add two stages without reading, keeping present tense and a generic subject." },
        challenge: { task: "Give the causal bridge, then explain the full process; the group checks no stage uses 'I' or past tense." }
      },
      support: { pattern_support: ["PAT-8-09"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present the online shopping process to a new group (process explanation).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns explaining how online shopping usually works ('First, ... Next, ... Then, ... Finally, ...'), present tense and generic subject.",
      differentiation: {
        easy: { task: "Present three stages of the process to the new group. You may read them." },
        standard: { task: "Present the full four-stage process without reading." },
        challenge: { task: "Present the process and answer one question about a stage, keeping present tense and generic subject." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students explain a repeating process with 'First, ... Next, ... Then, ... Finally, ...' in present tense",
        "students use a generic/impersonal subject ('the customer', 'they', passive 'the order is ...'), not 'I'/'you' and not a character's name",
        "students still give direct commands ('First, click here'), tell a past personal experience ('Yesterday I ordered ...'), or tell a story with a character"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add one more stage with 'After that, ...'.",
        needs_model: "Repeat the MODEL step, emphasizing present tense + generic subject + a process that happens every time (not a command or a past story).",
        needs_repeat: "Do one more round of REPEAT (choral) on the process-explanation sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "switches to commands ('click here'), to past personal experience ('Yesterday I ...'), or to a story with a character",
        "relies only on the written stages and cannot explain the process without reading",
        "explains the process in present tense with a generic subject and clear stages accurately and confidently"
      ],
      action: [
        "recast the stage slowly, modeling present tense and a generic subject ('the customer searches ...', 'the order is packed ...')",
        "model one more process (e.g. how a library loan works) to show the same pattern still works",
        "for a student who is ready, model ONE extra stage with 'After that, ...' first -- 'After that, the customer receives a message.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the present-tense, generic-subject process head, not a command or a past story"
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
