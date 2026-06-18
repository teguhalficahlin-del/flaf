const skenario = {
  "persiapan": {
    "papan_tulis": "Good morning, ___.\nMy name is ___.\nToday I would like to present ___.\nThe purpose of this presentation is ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu setup skenario presentasi (dua siswa berdiri di depan kelas dengan layar di belakang, menghadap audiens), kartu kerangka pembuka presentasi empat slot (GREET, INTRODUCE, TOPIC, PURPOSE), dan kartu perbandingan register (pembuka email \"Hi everyone, I'm writing to share...\" di sebelah pembuka presentasi \"Good morning. My name is... The purpose of this presentation is...\").",
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
        "teks": "Posisikan ruangan untuk sesi presentasi formal jika memungkinkan."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu sampai semua siswa duduk dan kondusif."
      },
      {
        "tipe": "UCAP",
        "teks": "Good morning, and welcome. Please stand by your presentations today."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "You have investigated the old storage room. Today you present that discovery formally. Are you ready?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu setup skenario presentasi — tunjuk posisi Dito dan Wulan di depan, layar di belakang, audiens di depan mereka."
      },
      {
        "tipe": "AKSI",
        "teks": "Tahan sebentar — beri waktu siswa mengamati kartu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this presentation setup. What should a formal presentation opening include?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan nada formal dan minta pendapatnya. Setelah dua respons atau sekitar tiga puluh detik — lanjutkan."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — lalu letakkan kartu di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us now see how a formal presentation opening sounds, greet, introduce, announce the topic, and state the purpose."
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
          "teks": "Ambil kartu setup skenario presentasi — angguk ke arah audiens sambil berbicara."
        },
        {
          "tipe": "UCAP",
          "teks": "Good morning, everyone. My name is Dito, and I am a student at this school."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu setup — ambil kartu kerangka pembuka empat slot."
        },
        {
          "tipe": "UCAP",
          "teks": "Today I would like to present our discovery in the old storage room behind the school building."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat kartu kerangka — buka satu telapak tangan ke depan."
        },
        {
          "tipe": "UCAP",
          "teks": "The purpose of this presentation is to share the historical objects we found and explain why they matter to our school community."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kerangka — tampilkan ketiga kartu sekaligus."
        },
        {
          "tipe": "AKSI",
          "teks": "Angguk ke arah audiens, lalu letakkan tangan di dada, lalu buka telapak tangan ke depan."
        },
        {
          "tipe": "UCAP",
          "teks": "Good morning. My name is Wulan. Today I would like to present something extraordinary we discovered at school. The purpose of this presentation is to show how a simple discovery can reveal a part of our school's history that many people have forgotten."
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
          "tipe": "AKSI",
          "teks": "Angguk ke seluruh kelas dan angkat kedua tangan sebagai isyarat bahwa kelas akan memasuki langkah REPEAT."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa mulai ikut berbicara sebelum waktunya — angkat telapak tangan ke arah mereka dan ucapkan \"Please observe first.\""
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
              "teks": "Angkat kartu setup skenario presentasi — angguk ke arah audiens."
            },
            {
              "tipe": "UCAP",
              "teks": "Good morning, everyone. My name is Dito, and I am a student at this school."
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
              "teks": "Letakkan kartu setup — angkat kartu kerangka pembuka empat slot."
            },
            {
              "tipe": "UCAP",
              "teks": "Today I would like to present our discovery in the old storage room behind the school building."
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
              "teks": "Angkat kartu kerangka — buka satu telapak tangan ke depan."
            },
            {
              "tipe": "UCAP",
              "teks": "The purpose of this presentation is to share the historical objects we found and explain why they matter to our school community."
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
              "teks": "Tampilkan ketiga kartu sekaligus — angguk ke arah audiens, letakkan tangan di dada, buka telapak tangan ke depan."
            },
            {
              "tipe": "UCAP",
              "teks": "Good morning. My name is Wulan. Today I would like to present something extraordinary we discovered at school. The purpose of this presentation is to show how a simple discovery can reveal a part of our school's history that many people have forgotten."
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
          "teks": "Now it is your turn. Write your own presentation opening."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tampilkan kartu perbandingan register dan tunjuk perbedaan antara pembuka email dan pembuka presentasi. Minta siswa menyalin pola di buku catatan sebelum melanjutkan. Beri waktu dua menit, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi enam menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis pembuka presentasi formal mereka sendiri tentang penemuan gudang tua. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan ketiga kartu di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Write a formal presentation opening with all four components. Greet, introduce, announce the topic, then state the purpose."
        },
        {
          "tipe": "UCAP",
          "teks": "Keep the register formal. Not an email, not a casual chat, a presentation to an audience."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang menggunakan register kasual (\"Hey\", \"Hi, I want to tell you\") atau yang melewati salah satu dari empat komponen."
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
          "teks": "Jika siswa tidak tahu cara membuka dengan formal — tunjuk kartu perbandingan register di papan tulis dan tunjuk kolom presentasi. Minta siswa mulai dengan \"Good morning,\" bukan \"Hey\" atau \"Hi.\""
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk slot GREET di kerangka, dan minta siswa ucapkan \"Good morning,\" saja dulu. Tunggu siswa menulis satu baris, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kerangka pembuka empat slot di papan tulis dan isi setiap slot. Boleh melihat kartu setup skenario untuk referensi. Pastikan ada: greet, introduce, topic, purpose.",
        "standar": "Tulis pembuka presentasi sendiri tanpa membaca kerangka. Gunakan kosakata: discovery, historical objects, atau school.",
        "tantangan": "Tulis empat komponen pembuka lalu variasikan pernyataan purpose — buat spesifik untuk satu aspek penemuan, misalnya: \"The purpose of this presentation is to show why these historical objects should be displayed in our school.\""
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Tulis empat komponen pembuka lalu variasikan pernyataan purpose — buat spesifik untuk satu aspek penemuan, misalnya: \"The purpose of this presentation is to show why these historical objects should be displayed in our school.\"",
        "perlu_bantuan": "Gunakan kerangka pembuka empat slot di papan tulis dan isi setiap slot. Boleh melihat kartu setup skenario untuk referensi. Pastikan ada: greet, introduce, topic, purpose."
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
          "teks": "Minta Siswa A berdiri dan menyampaikan pembuka presentasinya ke Siswa B sebagai audiens. Siswa B mendengarkan dan memeriksa: ada sapaan formal? ada perkenalan diri? ada topik? ada purpose?"
        },
        {
          "tipe": "AKSI",
          "teks": "Lalu minta Siswa B melakukan hal yang sama ke Siswa A."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Stand up when you present. Address your partner as the audience. Your turn now."
        },
        {
          "tipe": "UCAP",
          "teks": "After your partner presents, give one piece of feedback: does it sound like a presentation or a casual chat?"
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati beberapa pasangan dan pastikan sebagian besar siswa sudah berdiri saat menyampaikan pembuka mereka."
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
          "teks": "Jika pasangan berbicara dengan register kasual (\"Hey everyone, today I'm going to talk about...\") — tunjuk kartu perbandingan register di papan tulis dan ucapkan \"Presentation register. Try again.\" Tunggu siswa mengulang sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk pola pertama di papan tulis dan minta siswa ucapkan \"Good morning,\" saja dulu sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa sampaikan pembuka sekali lagi tanpa melihat buku."
        },
        {
          "tipe": "darurat",
          "teks": "Jika waktu tersisa kurang dari lima menit atau kelas tidak lagi kondusif — hentikan aktivitas pasangan atau kelompok. Tunjuk pola pembuka presentasi di papan tulis, minta seluruh kelas mengucapkan empat komponen pembuka secara bersama satu kali, lalu tutup sesi."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca pembuka dari buku catatan ke pasangan. Pasangan mencentang setiap komponen: greet, introduce, topic, purpose.",
        "standar": "Sampaikan pembuka tanpa membaca buku. Pasangan memeriksa keempat komponen dan register formal.",
        "tantangan": "Sampaikan pembuka, lalu pasangan bertanya: \"What exactly will you cover in this presentation?\" — kamu memberi satu kalimat tambahan yang mempreview isi presentasi."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Sampaikan pembuka, lalu pasangan bertanya: \"What exactly will you cover in this presentation?\" — kamu memberi satu kalimat tambahan yang mempreview isi presentasi.",
        "perlu_bantuan": "Baca pembuka dari buku catatan ke pasangan. Pasangan mencentang setiap komponen: greet, introduce, topic, purpose."
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
          "teks": "Tunggu semua kelompok terbentuk dan kondusif."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa di tiap kelompok sebagai pembicara pertama."
        },
        {
          "tipe": "UCAP",
          "teks": "The person I point to starts first. Stand up when you present."
        },
        {
          "tipe": "UCAP",
          "teks": "One person delivers the presentation opening. The others listen and check all four components."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk semua anggota kelompok berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — pastikan tidak ada anggota yang diam terus selama sesi."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"Good morning,\" saja dulu sebagai pembuka. Jika masih diam — ucapkan nama siswa tersebut terlebih dahulu lalu minta siswa mengulang."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa sampaikan pembuka sekali lagi tanpa melihat buku."
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
          "teks": "Tunggu semua siswa kembali ke posisi semula dan kondusif."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca pembuka dari buku catatan ke kelompok.",
        "standar": "Sampaikan pembuka tanpa membaca buku.",
        "tantangan": "Sampaikan pembuka tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"What is the main thing you want us to understand from your presentation?\""
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Sampaikan pembuka tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"What is the main thing you want us to understand from your presentation?\"",
        "perlu_bantuan": "Baca pembuka dari buku catatan ke kelompok."
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
          "teks": "Greet the audience and introduce yourself. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan kalimat sapa dan perkenalan diri."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan register formal (\"Good morning\" / \"My name is\") atau register kasual?"
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
          "teks": "Your purpose statement. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa mengucapkan \"The purpose of this presentation is...\" atau langsung menyebut isi konten?"
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
          "teks": "Angkat kembali kartu perbandingan register."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kolom presentasi di kartu perbandingan — ucapkan \"Good morning, everyone.\" sambil angguk ke audiens — beri isyarat ke siswa — tunggu seluruh kelas mengucapkan bersama."
        },
        {
          "tipe": "AKSI",
          "teks": "Lanjutkan slot per slot hingga keempat komponen selesai."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta siswa buka buku catatan — lengkapi atau tulis ulang komponen yang belum selesai. Beri waktu dua menit."
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
          "teks": "Tampilkan kartu perbandingan register di dekat siswa — tunjuk kolom presentasi."
        },
        {
          "tipe": "UCAP",
          "teks": "This is the email version. This is the presentation version. Same purpose, different register."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu topik sekolah berbeda — misalnya proyek sains sekolah — dan modelkan satu pembuka presentasi baru menggunakan keempat komponen. Minta siswa mengikuti slot per slot."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kalimat The purpose of this presentation is dalam pembuka siswa di buku catatan."
        },
        {
          "tipe": "UCAP",
          "teks": "Try adding a roadmap sentence after your purpose statement. Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "In this presentation, I will cover three main points: the discovery we made, the historical objects we found, and our recommendation for the school."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now add one roadmap sentence of your own after your purpose statement."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"That bridges your opening to the body of your presentation.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka sampaikan seluruh pembuka presentasi mereka sekali lagi tanpa melihat buku, atau variasikan kalimat purpose mereka dengan aspek penemuan yang lebih spesifik."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-07.js",
    pattern_id: "PAT-9-07",
    title: "The Old Storage Room Discovery: Opening a Presentation",
    short_title: "Presentation Opening",
    grade: 9,
    genre: "Presentation",
    cluster: "A",
    topic: "The Old Storage Room Discovery",
    context: "Students open a formal presentation about the old storage room discovery, greeting the audience, introducing themselves, and stating the presentation purpose.",
    context_id: "Siswa membuka presentasi formal tentang penemuan gudang tua, menyapa audiens, memperkenalkan diri, dan menyatakan tujuan presentasi.",
    communicative_goal: "open a presentation by greeting the audience, introducing the speaker, and establishing a clear presentation purpose",
    communicative_goal_id: "membuka presentasi dengan menyapa audiens, memperkenalkan pembicara, dan menetapkan tujuan presentasi yang jelas",
    vocabulary_domain: ["presentation expressions", "school facilities", "historical objects", "discovery"],
    input_anchor: "presentation scenario",
    output_anchor: "presentation opening",
    prerequisite_patterns: ["PAT-7-01", "PAT-8-21"],
    reusable_in: ["PAT-9-08", "PAT-9-09"],
    complexity_level: "Integrate",
    notes: "TP ketujuh Kelas 9, genre Presentation (cluster A -- opener Cluster 3). DUAL PREREQ: PAT-7-01, PAT-8-21. target_pattern PAT-9-07 = 'Good morning...My name is...Today I would like to present...The purpose of this presentation is...' (FORMAT PRESENTASI FORMAL PERTAMA di seluruh 66 pattern). ARC: topik 'The Old Storage Room Discovery' mengaktifkan kembali arc narasi K8 PAT-8-17-20 (tokoh Dito & Wulan) yang berakhir di jembatan naratif->fungsional PAT-8-21 (email). Di K9, arc ini DIELEVASI ke register PRESENTASI FORMAL untuk audiens lebih luas. Reaktivasi PAT-7-01 (WAJIB, VR-1): self-introduction 'My name is...' / 'I am...' (K7, register kasual-personal) direaktivasi sebagai komponen presentasi formal -- struktur sama ('My name is...'), TAPI konteks bergeser dari perkenalan personal ke pembukaan presentasi di depan audiens. Reaktivasi PAT-8-21 (WAJIB, VR-1): structured opener dengan tujuan 'I\\'m writing to...' (K8, email) direaktivasi sebagai 'The purpose of this presentation is...' -- PARALLEL STRUCTURE antara pembuka email dan pembuka presentasi; register NAIK dari tulisan digital informal ke presentasi lisan formal. PENTING: hasil harus terasa REGISTER PRESENTASI FORMAL -- bukan email (PAT-8-21 asli), bukan perkenalan personal kasual (PAT-7-01 asli). TIGA TP (TP-07-09) = TIGA BAGIAN SATU PRESENTASI UTUH. forbidden_overlap (interpersonal self-introduction, email opening, casual greeting): 'My name is...' di sini adalah komponen presentasi publik formal, BUKAN perkenalan di kelas (K7) atau kalimat pembuka chat. Vocabulary_domain: discovery ✓ model_2/3/4, historical objects ✓ model_3, school ✓ model_1/2/3. 'presentation expressions' = pola itu sendiri (Good morning / My name is / Today I would like to present / The purpose of this presentation is). BOOST extension: tambah preview/roadmap 'In this presentation, I will cover...' yang menjembatani ke body TP-08.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, and welcome. Please stand by your presentations today." },
      { type: "AKSI", text: "Posisikan ruangan untuk sesi presentasi formal jika memungkinkan." },
      // HOOK
      { type: "UCAP", text: "You have investigated the old storage room. Today you present that discovery formally. Are you ready?" },
      { type: "AKSI", text: "Tampilkan setup skenario: Dito dan Wulan berdiri di depan kelas, layar di belakang, menghadap audiens dan guru." },
      { type: "UCAP", text: "Look at this presentation setup. What should a formal presentation opening include?" },
    ],

    active_vocabulary: [
      "Good morning,",
      "My name is",
      "Today I would like to present",
      "The purpose of this presentation is",
      "discovery",
      "historical objects",
      "school"
    ],

    model_sentences: [
      { id: "model_1", text: "Good morning, everyone. My name is Dito, and I am a student at this school." },
      { id: "model_2", text: "Today I would like to present our discovery in the old storage room behind the school building." },
      { id: "model_3", text: "The purpose of this presentation is to share the historical objects we found and explain why they matter to our school community." },
      { id: "model_4", text: "Good morning. My name is Wulan. Today I would like to present something extraordinary we discovered at school. The purpose of this presentation is to show how a simple discovery can reveal a part of our school's history that many people have forgotten." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A presentation scenario setup: two students (Dito and Wulan) standing at the front of a classroom with a screen behind them, facing an audience of classmates and a teacher.", description_id: "Setup skenario presentasi: dua siswa (Dito dan Wulan) berdiri di depan kelas dengan layar di belakang mereka, menghadap audiens teman sekelas dan seorang guru.", asset_id: null },
      { id: "visual_2", description: "A presentation opening frame with four labelled slots: GREET ('Good morning,...') / INTRODUCE ('My name is...') / TOPIC ('Today I would like to present...') / PURPOSE ('The purpose of this presentation is...').", description_id: "Kerangka pembuka presentasi dengan empat slot berlabel: GREET ('Good morning,...') / INTRODUCE ('My name is...') / TOPIC ('Today I would like to present...') / PURPOSE ('The purpose of this presentation is...').", asset_id: null },
      { id: "visual_3", description: "A side-by-side comparison of register: an email opening ('Hi everyone, I\\'m writing to share...') next to a presentation opening ('Good morning. My name is... The purpose of this presentation is...') -- showing the same communicative move in two different registers.", description_id: "Perbandingan berdampingan register: pembuka email ('Hi everyone, I'm writing to share...') di sebelah pembuka presentasi ('Good morning. My name is... The purpose of this presentation is...') -- menunjukkan gerakan komunikatif yang sama dalam dua register berbeda.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher nods to the audience while saying 'Good morning, everyone.' -- to model addressing the whole room, not just one person.", description_id: "Guru mengangguk ke audiens sambil mengucapkan 'Good morning, everyone.' -- untuk mencontohkan menyapa seluruh ruangan, bukan hanya satu orang." },
      { id: "gesture_2", description: "Teacher places a hand on chest while saying 'My name is ...' -- to signal formal self-introduction to an audience, not a casual personal greeting.", description_id: "Guru meletakkan tangan di dada sambil mengucapkan 'My name is ...' -- untuk menandai perkenalan diri formal kepada audiens, bukan sapaan pribadi yang santai." },
      { id: "gesture_3", description: "Teacher holds an open hand forward while saying 'The purpose of this presentation is ...' -- to signal stating a clear purpose for the audience, equivalent to 'I\\'m writing to ...' in an email but now spoken formally.", description_id: "Guru membuka satu telapak tangan ke depan sambil mengucapkan 'The purpose of this presentation is ...' -- untuk menandai pernyataan tujuan yang jelas bagi audiens, setara dengan 'I'm writing to ...' di email tetapi kini diucapkan secara formal." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher open a formal presentation with all four components: greet ('Good morning,...'), introduce ('My name is...'), announce the topic ('Today I would like to present...'), and state the purpose ('The purpose of this presentation is...') -- formal register, not a casual greeting or an email opening.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-01", "PAT-8-21"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the four-component presentation opening ('Good morning,...' / 'My name is...' / 'Today I would like to present...' / 'The purpose of this presentation is...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write and practise your own formal presentation opening about the storage room discovery.",
      prompt: "Write a four-component presentation opening: 'Good morning, ___.' (greet), 'My name is ___.' (introduce), 'Today I would like to present ___.' (announce the topic), 'The purpose of this presentation is ___.' (state the purpose). Use: discovery, historical objects, or school. Keep the register formal -- not an email ('Hi everyone, I\\'m writing to...') and not a personal greeting ('Hey, I\\'m Dito, and I want to tell you about...').",
      change_target: ["greeting (Good morning, ...)", "introduction (My name is ...)", "topic (Today I would like to present ...)", "purpose (The purpose of this presentation is ...)"],
      differentiation: {
        easy: { task: "Use the opening frame and fill in all four slots. You may look at the scenario setup." },
        standard: { task: "Write and practise your presentation opening without reading the frame." },
        challenge: { task: "Write the four-component opening and vary the purpose statement -- make it specific to one aspect of the discovery (e.g. 'The purpose of this presentation is to show why these historical objects should be displayed in our school.')." }
      },
      support: { pattern_support: ["PAT-7-01", "PAT-8-21"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Deliver your presentation opening to a partner and check the register and all four components.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns delivering your presentation opening standing up, addressing your partner as the audience. Your partner checks: formal greeting? self-introduction? topic announced? purpose stated? Then swap. Give one piece of feedback on the register -- does it sound like a presentation or a casual chat?",
      differentiation: {
        easy: { task: "Read your opening to your partner. Your partner ticks each of the four components on the frame." },
        standard: { task: "Deliver your opening without reading. Your partner checks all four components and the formal register." },
        challenge: { task: "Deliver your opening and your partner asks 'What exactly will you cover in this presentation?' -- you give one more sentence previewing the main points." }
      },
      support: { pattern_support: ["PAT-7-01", "PAT-8-21"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Deliver your presentation opening to a new group (presentation opening).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns delivering your presentation opening standing up, addressing the group as the audience.",
      differentiation: {
        easy: { task: "Deliver your opening to the group using your written notes." },
        standard: { task: "Deliver your opening without reading." },
        challenge: { task: "Deliver your opening, then answer one question from the group: 'What is the main thing you want us to understand from your presentation?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students deliver all four components in the correct order: greet / introduce / topic / purpose -- in formal presentation register",
        "students maintain formal register throughout: 'Good morning' not 'Hey', 'My name is' not 'I\\'m just', 'The purpose of this presentation is' not 'I\\'m here to'",
        "students slip into casual register ('Hi everyone, today I\\'m going to talk about...') or skip the purpose statement and jump straight to the topic content"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a preview/roadmap sentence after the purpose statement.",
        needs_model: "Repeat the MODEL step, using the register comparison visual -- email opening vs presentation opening -- to make the formal register visible.",
        needs_repeat: "Do one more round of REPEAT (choral) on the four-component opening before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "uses casual register ('Hey everyone / Hi, I\\'m going to talk about...') instead of formal presentation language",
        "delivers all four components but cannot present without reading",
        "delivers all four components in formal register accurately and confidently"
      ],
      action: [
        "recast the opening slowly, pointing to the register comparison visual: 'This is the email version -- this is the presentation version. Same purpose, different register.'",
        "model one more formal presentation opening on a different school topic (e.g. a school science project) to show the same four-component format still works",
        "for a student who is ready, model ONE roadmap sentence after the purpose statement first -- 'In this presentation, I will cover three main points: the discovery we made, the historical objects we found, and our recommendation for the school.' -- then invite that student to add one roadmap sentence to their own opening; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it bridges naturally to the presentation body in the next lesson"
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
