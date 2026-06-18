const skenario = {
  "persiapan": {
    "papan_tulis": "I believe ___ because ___.\nFor example, ___.",
    "kartu": "Siapkan tiga kartu di meja guru — perbandingan foto dua pilihan kantin (jajanan bergula versus buah segar dan makanan sehat), kartu pendapat (\"I believe ___ because ___. For example, ___.\"), dan kartu ikon (keranjang buah, pilihan makanan sehat, siswa berenergi di kelas).",
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
        "teks": "Good morning. Today you will take a position on something important."
      },
      {
        "tipe": "AKSI",
        "teks": "Kondisikan kelas untuk diskusi yang lebih formal dari biasanya."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Remember the canteen? We discussed ideas for it earlier. Now, what do YOU believe should change?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan perbandingan foto dua pilihan kantin — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these two canteen options. Which one do you believe the school should offer more of, and why?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to state a position clearly, using I believe, because, and For example."
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
          "teks": "Letakkan tangan di dada dengan mantap untuk \"I agree\" — tunjuk kartu skenario kantin."
        },
        {
          "tipe": "UCAP",
          "teks": "I agree that the canteen should sell more fruit because it is healthy."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan tangan di dada dengan mantap untuk \"I believe\" — buka tangan untuk \"because\". Angkat satu jari untuk \"For example\"."
        },
        {
          "tipe": "UCAP",
          "teks": "I believe the canteen should sell more healthy food because it helps students stay healthy. For example, fresh fruit gives them energy for afternoon classes."
        },
        {
          "tipe": "AKSI",
          "teks": "Susuri penalaran dari proses ke hasil — tunjuk ikon siswa berenergi."
        },
        {
          "tipe": "UCAP",
          "teks": "Selling fruit also reduces waste because fruit needs less plastic. As a result, the school produces less trash."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan tangan di dada untuk \"I believe\" — buka tangan untuk \"because\", angkat satu jari untuk \"For example\"."
        },
        {
          "tipe": "UCAP",
          "teks": "I believe students should have more healthy choices because good food improves learning. For example, a salad bar offers many options."
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
              "teks": "Letakkan tangan di dada dengan mantap — tunjuk kartu skenario kantin."
            },
            {
              "tipe": "UCAP",
              "teks": "I agree that the canteen should sell more fruit because it is healthy."
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
              "teks": "Letakkan tangan di dada — buka tangan untuk \"because\" — angkat satu jari untuk \"For example\"."
            },
            {
              "tipe": "UCAP",
              "teks": "I believe the canteen should sell more healthy food because it helps students stay healthy. For example, fresh fruit gives them energy for afternoon classes."
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
              "teks": "Susuri penalaran dari proses ke hasil — tunjuk ikon siswa berenergi."
            },
            {
              "tipe": "UCAP",
              "teks": "Selling fruit also reduces waste because fruit needs less plastic. As a result, the school produces less trash."
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
              "teks": "Letakkan tangan di dada — buka tangan untuk \"because\" — angkat satu jari untuk \"For example\"."
            },
            {
              "tipe": "UCAP",
              "teks": "I believe students should have more healthy choices because good food improves learning. For example, a salad bar offers many options."
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
          "teks": "Good. Now it is your turn. State your position about the canteen."
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
      "intro": "Siswa menyatakan posisi sendiri tentang kantin dengan satu alasan dan satu contoh. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan perbandingan foto dan kartu pendapat di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this pattern. State your position about the school canteen with a reason and one example."
        },
        {
          "tipe": "UCAP",
          "teks": "Not What do you think, not Most, and not First, this is your position with evidence."
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
          "teks": "Jika siswa tidak tahu posisi apa yang akan ditulis — tunjuk foto kedua pilihan kantin dan minta siswa pilih salah satu sebagai posisi awal."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk foto buah segar, dan minta siswa ucapkan \"I believe the canteen should sell more fruit because ...\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan perbandingan foto dan lengkapi: \"I believe ___ because ___. For example, ___.\"",
        "standar": "Tulis posisimu sendiri dengan satu alasan dan satu contoh (\"I believe ... because ... For example, ...\").",
        "tantangan": "Mulai dengan mengingat kembali kesepakatan kelompok (\"I agree that the canteen should ...\"), lalu nyatakan posisimu sendiri dengan alasan dan \"For example, ...\""
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Mulai dengan mengingat kembali kesepakatan kelompok (\"I agree that the canteen should ...\"), lalu nyatakan posisimu sendiri dengan alasan dan \"For example, ...\"",
        "perlu_bantuan": "Gunakan perbandingan foto dan lengkapi: \"I believe ___ because ___. For example, ___.\""
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
          "teks": "Minta Siswa A mempresentasikan kartu pendapatnya (\"I believe ... because ... For example, ...\")."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B memeriksa apakah ada posisi, alasan, dan contoh — lalu tukar peran."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Your turn now. Present your opinion card to your partner. Your partner checks for position, reason, and example. Then swap."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk foto kantin dan tanya \"What do you believe the canteen should sell more of?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan posisinya sekali lagi tanpa melihat buku."
        }
      ],
      "diferensiasi": {
        "mudah": "Presentasikan posisi dan alasan (boleh membaca); pasangan periksa apakah ada \"For example, ...\" Lalu tukar peran.",
        "standar": "Presentasikan posisi lengkap dengan contoh tanpa membaca; pasangan sebutkan contohnya. Lalu tukar peran.",
        "tantangan": "Ingat kembali kesepakatan kelompok, lalu nyatakan posisi dengan alasan dan contoh; pasangan lakukan hal yang sama. Lalu tukar peran."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Ingat kembali kesepakatan kelompok, lalu nyatakan posisi dengan alasan dan contoh; pasangan lakukan hal yang sama. Lalu tukar peran.",
        "perlu_bantuan": "Presentasikan posisi dan alasan (boleh membaca); pasangan periksa apakah ada \"For example, ...\" Lalu tukar peran."
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
          "teks": "The person I point to presents your opinion card first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns presenting your position about the canteen to the group."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, tunjuk foto pilihan kantin, dan minta ucapkan \"I believe ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambah satu contoh lagi dengan \"Another example is ...\""
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
        "mudah": "Presentasikan posisi dan alasanmu ke kelompok. Boleh membaca.",
        "standar": "Presentasikan posisi lengkap dengan contoh tanpa membaca.",
        "tantangan": "Presentasikan posisimu, lalu jawab satu pertanyaan tentang alasan atau contohmu dari kelompok."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Presentasikan posisimu, lalu jawab satu pertanyaan tentang alasan atau contohmu dari kelompok.",
        "perlu_bantuan": "Presentasikan posisi dan alasanmu ke kelompok. Boleh membaca."
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
          "teks": "Give me your I believe sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menyatakan posisi dengan alasan yang jelas? Apakah ini posisi personal berbukti, bukan laporan atau proses?"
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
          "teks": "Your For example sentence. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa memberikan contoh konkret yang mendukung klaimnya?"
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
          "teks": "Angkat kembali kartu pendapat."
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
          "teks": "Angkat kartu pendapat."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. I believe the canteen should sell more healthy food because it helps students stay healthy."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now add For example. For example..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk foto buah segar — tunggu siswa melengkapi."
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi sampai siswa siap mengucapkan posisi lengkap dengan contoh tanpa bantuan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. I believe the canteen should sell more healthy food because it helps students stay healthy. For example, fresh fruit gives energy. Another example is that yogurt helps digestion."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add a second example with Another example is."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba menambahkan contoh kedua."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Two examples make your position stronger.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan posisi lengkap dengan contoh tanpa melihat buku, atau menulis satu posisi tentang topik sekolah yang berbeda di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-13.js",
    pattern_id: "PAT-8-13",
    title: "Healthy School Canteen: Stating a Position",
    short_title: "Healthy Canteen",
    grade: 8,
    genre: "Exposition",
    cluster: "A",
    topic: "Healthy School Canteen",
    context: "Students express a position about improving the school canteen and support it with a simple example.",
    context_id: "Siswa menyampaikan posisi tentang perbaikan kantin sekolah dan mendukungnya dengan contoh sederhana.",
    communicative_goal: "state a position with a reason and one supporting example",
    communicative_goal_id: "menyatakan posisi dengan satu alasan dan satu contoh pendukung",
    vocabulary_domain: ["canteen", "healthy food", "students", "choices"],
    input_anchor: "photo comparison",
    output_anchor: "opinion card",
    prerequisite_patterns: ["PAT-8-04", "PAT-8-12"],
    reusable_in: ["PAT-9-01", "PAT-9-04"],
    complexity_level: "Expand",
    notes: "TP ketiga belas Kelas 8 dan GENRE OPENER EXPOSITION Kelas 8 (cluster A -- Stating a Position). KONVERGENSI BESAR (dual prereq lintas-genre + topik berlanjut). target_pattern PAT-8-13 = 'I believe ... because ... For example, ...'. 'For example,' = ELEMEN BARU UTAMA (bukti/ilustrasi konkret untuk klaim) -- TIDAK ada di PAT-8-04 maupun PAT-8-12. forbidden_overlap (interpersonal opinion exchange, factual report, process explanation) = BOUNDARY terhadap KETIGA GENRE sebelumnya SEKALIGUS: BUKAN 'What do you think?' (Interpersonal PAT-8-01), BUKAN 'Most.../It has...' (Report), BUKAN 'This process.../First,...' (Explanation). Reaktivasi PAT-8-04 (WAJIB, VR-1; topik SAMA dengan TP-28 'Healthy School Canteen'): konsensus KELOMPOK TP-28 ('I agree that the canteen should sell more fruit because it is healthy.') DIANGKAT jadi POSISI PERSONAL BERBUKTI ('I believe the canteen should sell more healthy food because it helps students stay healthy. For example, ...'); model_1 = recap dekat-literal TP-28. Reaktivasi PAT-8-12 (WAJIB, VR-1): penalaran sistem/proses ('This process...because...As a result,...') mewarnai DASAR LOGIS klausa 'because' (opini berbasis sistem, bukan sekadar preferensi). STRATEGI: model_1 = recap PAT-8-04; model_3 = dukungan bergaya PAT-8-12; model_2/4 = target PAT-8-13 dengan 'For example,' sebagai elemen baru. vocabulary_domain (canteen, healthy food, students, choices) muncul di bahasa target. Ekstensi opsional menambah contoh kedua ('Another example is ...') -- menjaga head klaim, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Today you will take a position on something important." },
      { type: "AKSI", text: "Kondisikan kelas untuk diskusi yang lebih formal dari biasanya." },
      // HOOK
      { type: "UCAP", text: "Remember the canteen? We discussed ideas for it earlier. Now — what do YOU believe should change?" },
      { type: "AKSI", text: "Tampilkan perbandingan foto dua pilihan kantin: jajanan bergula versus buah segar dan makanan sehat." },
      { type: "UCAP", text: "Look at these two canteen options. Which one do you believe the school should offer more of — and why?" },
    ],

    active_vocabulary: [
      "I believe",
      "because",
      "For example,",
      "canteen",
      "healthy food",
      "students",
      "choices",
      "fruit"
    ],

    model_sentences: [
      { id: "model_1", text: "I agree that the canteen should sell more fruit because it is healthy." },
      { id: "model_2", text: "I believe the canteen should sell more healthy food because it helps students stay healthy. For example, fresh fruit gives them energy for afternoon classes." },
      { id: "model_3", text: "Selling fruit also reduces waste because fruit needs less plastic. As a result, the school produces less trash." },
      { id: "model_4", text: "I believe students should have more healthy choices because good food improves learning. For example, a salad bar offers many options." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A photo comparison of two canteen options: sugary snacks versus fresh fruit and healthy meals.", description_id: "Perbandingan foto dua pilihan kantin: jajanan bergula versus buah segar dan makanan sehat.", asset_id: null },
      { id: "visual_2", description: "An opinion card: 'I believe ___ because ___. For example, ___.'", description_id: "Kartu pendapat: 'I believe ___ because ___. For example, ___.'", asset_id: null },
      { id: "visual_3", description: "Icons: a fruit basket, healthy meal choices, students with energy in class.", description_id: "Ikon: keranjang buah, pilihan makanan sehat, siswa berenergi di kelas.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher places a hand firmly on the chest while saying 'I believe ...' to show a position.", description_id: "Guru meletakkan tangan dengan mantap di dada sambil mengucapkan 'I believe ...' untuk menunjukkan suatu posisi." },
      { id: "gesture_2", description: "Teacher opens a hand for the reason while saying 'because ...'.", description_id: "Guru membuka tangan untuk alasannya sambil mengucapkan 'because ...'." },
      { id: "gesture_3", description: "Teacher holds up one finger to introduce a concrete case while saying 'For example, ...'.", description_id: "Guru mengangkat satu jari untuk memperkenalkan contoh konkret sambil mengucapkan 'For example, ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher turn a group consensus into a personal position supported by a reason and a concrete example: 'I believe ... because ... For example, ...'.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-04", "PAT-8-12"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the position sentences ('I believe ... because ... For example, ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "State your own position about the canteen with a reason and one example.",
      prompt: "Use the pattern 'I believe [position] because [reason]. For example, [concrete case].' Make it about the school canteen (canteen, healthy food, students, choices). State a position with one reason and one example -- not 'What do you think?' (exchange), not 'Most ...' (report), not 'First, ...' (process).",
      change_target: ["position (I believe ...)", "reason (because ...)", "example (For example, ...)"],
      differentiation: {
        easy: { task: "Use the photo comparison and complete: 'I believe ___ because ___. For example, ___.'" },
        standard: { task: "Write your own position with a reason and one example ('I believe ... because ... For example, ...')." },
        challenge: { task: "Start by recalling the group's idea ('I agree that the canteen should ...'), then state your own position with a reason and a 'For example, ...'." }
      },
      support: { pattern_support: ["PAT-8-04"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Compare opinion cards about the canteen with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns presenting your position ('I believe ... because ... For example, ...'). Your partner checks the card has a position, a reason, and an example. Then swap.",
      differentiation: {
        easy: { task: "Present your position with a reason (you may read); your partner adds 'For example, ...' is present. Then swap." },
        standard: { task: "Present your full position with an example without reading; your partner names the example. Then swap." },
        challenge: { task: "Recall the group's idea, then state your position with a reason and example; your partner does the same. Then swap." }
      },
      support: { pattern_support: ["PAT-8-04", "PAT-8-12"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your opinion card to a new group (opinion card).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting your opinion card ('I believe ... because ... For example, ...').",
      differentiation: {
        easy: { task: "Present your position and reason to the new group. You may read." },
        standard: { task: "Present your full position with an example without reading." },
        challenge: { task: "Present your position, then answer one question about your reason or example from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students state a position with a reason and one example: 'I believe ... because ... For example, ...'",
        "students include a concrete example ('For example, ...') to support the claim",
        "students still drift into an exchange ('What do you think?'), a report ('Most ...'), or a process ('First, ...') instead of stating and supporting a position"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a second example.",
        needs_model: "Repeat the MODEL step, emphasizing 'I believe ... because ...' followed by a concrete 'For example, ...'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the position sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "states a position without an example, or drifts into exchange/report/process",
        "relies only on the written card and cannot present the position without reading",
        "states a position with a reason and a concrete example accurately and confidently"
      ],
      action: [
        "recast the position slowly, modeling 'I believe ... because ...' with a concrete 'For example, ...'",
        "model one more position on a different school topic to show the same pattern still works",
        "for a student who is ready, model ONE position with a second example first -- 'I believe the canteen should sell more healthy food because it helps students stay healthy. For example, fresh fruit gives energy. Another example is that yogurt helps digestion.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the position head, not an exchange, report, or process"
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
