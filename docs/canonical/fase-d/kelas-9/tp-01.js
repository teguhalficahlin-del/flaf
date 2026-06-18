const skenario = {
  "persiapan": {
    "papan_tulis": "I believe ___ because ___.\nOne reason is ___.\nFor example, ___.\nTherefore, I recommend ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu skenario daur ulang, kartu kerangka struktur argumen, dan kartu ikon (simbol daur ulang, komunitas, daun, pita ikrar).",
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
        "teks": "Tunggu sampai semua siswa duduk dan kondusif."
      },
      {
        "tipe": "UCAP",
        "teks": "Good morning. Please take your seats and prepare to think critically today."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu kelas kondusif sepenuhnya."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Consider this: our community produces a large amount of waste every week. What should be done about it?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu skenario daur ulang — siswa memilah sampah ke tempat sampah berkode warna dekat gerbang sekolah, dengan spanduk bertuliskan simbol daur ulang dan Our Environment Matters."
      },
      {
        "tipe": "AKSI",
        "teks": "Tahan sebentar — beri waktu siswa mengamati kartu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this recycling scenario. What argument would you make for or against a school recycling program?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan nada formal dan minta pendapatnya. Setelah dua respons atau sekitar tiga puluh detik — lanjutkan."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — lalu letakkan kartu skenario di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us now see how to build a complete argument for this issue."
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
          "teks": "Ambil kartu skenario daur ulang — tunjukkan ke seluruh kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk dada sendiri."
        },
        {
          "tipe": "UCAP",
          "teks": "I believe our school needs a community recycling program because it protects our environment."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu skenario — ambil kartu kerangka struktur argumen."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat satu jari."
        },
        {
          "tipe": "UCAP",
          "teks": "One reason is that recycling reduces plastic waste in our area. For example, students can collect bottles every week and bring them to the recycling centre."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kerangka — ambil kartu ikon."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka telapak tangan ke arah seluruh kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Therefore, I recommend that every student takes responsibility for sorting waste at school."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu ikon — tampilkan ketiga kartu sekaligus."
        },
        {
          "tipe": "AKSI",
          "teks": "Jalankan semua gesture secara berurutan: tunjuk dada, angkat satu jari, buka telapak tangan."
        },
        {
          "tipe": "UCAP",
          "teks": "I believe recycling helps our community because it teaches responsibility. One reason is that less waste means a cleaner environment for everyone. For example, neighbourhoods with recycling programs have less litter. Therefore, I recommend starting with one recycling station in the school canteen."
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
          "teks": "Angkat kedua tangan memberi isyarat bahwa langkah berikutnya adalah REPEAT."
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
              "teks": "Angkat kartu skenario daur ulang — tunjuk dada sendiri."
            },
            {
              "tipe": "UCAP",
              "teks": "I believe our school needs a community recycling program because it protects our environment."
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
              "teks": "Letakkan kartu skenario — angkat kartu kerangka struktur argumen, angkat satu jari."
            },
            {
              "tipe": "UCAP",
              "teks": "One reason is that recycling reduces plastic waste in our area. For example, students can collect bottles every week and bring them to the recycling centre."
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
              "teks": "Letakkan kartu kerangka — angkat kartu ikon, buka telapak tangan ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "Therefore, I recommend that every student takes responsibility for sorting waste at school."
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
              "teks": "Tampilkan ketiga kartu sekaligus — jalankan semua gesture secara berurutan (tunjuk dada, angkat satu jari, buka telapak tangan)."
            },
            {
              "tipe": "UCAP",
              "teks": "I believe recycling helps our community because it teaches responsibility. One reason is that less waste means a cleaner environment for everyone. For example, neighbourhoods with recycling programs have less litter. Therefore, I recommend starting with one recycling station in the school canteen."
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
          "teks": "Now it is your turn. Write your own argument."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk pola di papan tulis. Minta siswa menyalin di buku catatan sebelum melanjutkan. Beri waktu dua menit untuk menyalin, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi enam menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menyusun argumen empat komponen mereka sendiri tentang program daur ulang komunitas. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
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
          "teks": "Use this pattern. But write your own argument, not the same words as mine."
        },
        {
          "tipe": "UCAP",
          "teks": "Include all four components: claim, reason, example, and recommendation."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang berhenti menulis lebih dari sepuluh detik atau belum menulis satu komponen pun."
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
          "teks": "Jika siswa tidak tahu kosakata yang dibutuhkan — tunjuk kartu ikon di papan tulis dan minta siswa pilih salah satu sebagai titik awal."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk baris pertama di papan tulis, dan minta siswa ucapkan \"I believe\" lalu pendapatnya tentang daur ulang. Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kartu kerangka di papan tulis dan isi keempat slot. Boleh melihat kartu skenario untuk referensi. Tulis: I believe lalu posisi tentang daur ulang karena satu alasan. One reason is lalu satu alasan. For example lalu satu contoh konkret. Therefore, I recommend lalu satu rekomendasi.",
        "standar": "Tulis argumen empat komponen sendiri tanpa membaca kerangka. Gunakan kosakata: recycling, community, environment, atau responsibility.",
        "tantangan": "Tulis argumen empat komponen dan gunakan alasan yang berbeda dari contoh model — bukan recycling reduces plastic waste. Gunakan alasan lain yang didukung satu contoh spesifik dan berbeda."
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
          "teks": "Minta Siswa A membacakan atau menyampaikan argumennya ke Siswa B. Siswa B mendengarkan dan memeriksa: ada klaim? ada alasan? ada contoh? ada rekomendasi?"
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
          "teks": "That is it. Your turn now. Work with the person next to you."
        },
        {
          "tipe": "UCAP",
          "teks": "If you are in a group of three, take turns. A, then B, then C."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk baris pertama di buku catatan siswa dan minta siswa ucapkan \"I believe\" lalu pendapatnya tentang daur ulang."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this pattern.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan argumennya sekali lagi tanpa melihat buku."
        },
        {
          "tipe": "darurat",
          "teks": "Jika waktu tersisa kurang dari lima menit atau kelas menjadi sangat tidak kondusif — hentikan aktivitas kelompok. Tunjuk pola di papan tulis. Minta seluruh kelas mengucapkan empat komponen bersama satu kali, lalu tutup sesi."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca argumen dari buku catatan ke pasangan. Pasangan memeriksa apakah ada keempat komponen: klaim, alasan, contoh, rekomendasi.",
        "standar": "Sampaikan argumen tanpa membaca buku. Pasangan memeriksa keempat komponen dan memberi tahu mana yang paling meyakinkan.",
        "tantangan": "Sampaikan argumen tanpa membaca, lalu pasangan bertanya: \"Why do you recommend that specifically?\" Tambahkan satu kalimat untuk memperkuat rekomendasi."
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
          "teks": "The person I point to starts first."
        },
        {
          "tipe": "UCAP",
          "teks": "One person presents. The others listen and check for all four components."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"I believe\" lalu posisinya tentang daur ulang sebagai pembuka. Jika masih diam — ucapkan nama siswa tersebut terlebih dahulu lalu minta siswa mengulang."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa ucapkan argumennya sekali lagi tanpa melihat buku."
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
        "mudah": "Baca argumen dari buku catatan ke kelompok.",
        "standar": "Sampaikan argumen tanpa membaca buku.",
        "tantangan": "Sampaikan argumen tanpa membaca, lalu setelah semua anggota selesai — sebutkan satu komponen dari argumen teman yang paling meyakinkan dan jelaskan mengapa."
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
          "teks": "State your claim and your reason. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan klaim dan alasannya."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menyampaikan keempat komponen secara terintegrasi, atau hanya klaim tanpa alasan atau contoh?"
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
          "teks": "Your recommendation sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa bisa menyampaikan rekomendasi dengan lancar?"
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
          "teks": "Angkat kembali ketiga kartu."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan kalimat model_4 sekali lagi — tunjuk dada, angkat satu jari, buka telapak tangan, seiring setiap komponen."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri isyarat tangan ke arah siswa — tunggu seluruh kelas mengucapkan bersama."
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
          "teks": "Angkat kartu kerangka struktur argumen."
        },
        {
          "tipe": "UCAP",
          "teks": "Here is the frame. Tell me your claim."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan klaim."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk baris berikutnya di kerangka."
        },
        {
          "tipe": "UCAP",
          "teks": "Now your reason."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan alasan — lanjutkan frasa per frasa untuk contoh dan rekomendasi. Jangan minta keempat komponen sekaligus sampai siswa siap."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kalimat For example dalam argumen siswa di buku catatan."
        },
        {
          "tipe": "UCAP",
          "teks": "Try adding this after your example. Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "This shows that community recycling protects the environment we all share."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add your own This shows that sentence after your example."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"That links your evidence directly to your claim.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan argumen mereka sendiri tanpa melihat buku, atau menambah satu detail spesifik ke dalam kalimat For example mereka."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-01.js",
    pattern_id: "PAT-9-01",
    title: "Recycling for Our Community: Building an Argument",
    short_title: "Community Recycling",
    grade: 9,
    genre: "Argumentative Communication",
    cluster: "A",
    topic: "Community Recycling Program",
    context: "Students evaluate a community recycling proposal and construct a complete supported argument with claim, reason, example, and recommendation.",
    context_id: "Siswa mengevaluasi usulan daur ulang komunitas dan menyusun argumen lengkap yang didukung klaim, alasan, contoh, dan rekomendasi.",
    communicative_goal: "present a complete position supported by organized reasons, examples, and a recommendation",
    communicative_goal_id: "menyampaikan posisi lengkap yang didukung alasan terstruktur, contoh, dan rekomendasi",
    vocabulary_domain: ["recycling", "community", "environment", "responsibility"],
    input_anchor: "recycling scenario cards",
    output_anchor: "argument presentation",
    prerequisite_patterns: ["PAT-8-16", "PAT-8-13", "PAT-8-14", "PAT-8-04"],
    reusable_in: ["PAT-9-02", "PAT-9-04", "PAT-9-07"],
    complexity_level: "Integrate",
    notes: "TP pertama Kelas 9, genre Argumentative Communication (cluster A -- opener cluster). QUAD PREREQ: PAT-8-16, PAT-8-13, PAT-8-14, PAT-8-04. target_pattern PAT-9-01 = 'I believe...because...One reason is...For example,...Therefore, I recommend...' (integrasi 4 komponen retoris: claim, reason, example, recommendation). CEFR A2+→B1 dicapai via INTEGRASI STRUKTUR DISKURSUS (4 komponen terintegrasi), BUKAN vocabulary baru -- vocabulary familiar dari K7-8. Reaktivasi PAT-8-13 (WAJIB, VR-1): 'I believe...because...' (claim + reason, dasar) menjadi KOMPONEN PERTAMA dari struktur 4-komponen yang lebih utuh -- di K8 ini berdiri sendiri, di K9 menjadi opener dari rantai retoris. Reaktivasi PAT-8-14 (WAJIB, VR-1): kesadaran multi-reason dan pendukung argumen menjadi landasan 'One reason is...For example,...' -- di K8 bersifat alternatif pandangan, di K9 menjadi sub-struktur dukungan eksplisit. Reaktivasi PAT-8-16 (WAJIB, VR-1): 'Therefore, I recommend...' (konektor kesimpulan FORMAL) menjadi KOMPONEN KEEMPAT yang menutup argumen -- di K8 berdiri sendiri sebagai rekomendasi, di K9 menjadi penutup logis dari rantai claim→reason→example. Reaktivasi PAT-8-04 (WAJIB, VR-1): proposal 'should...' menjadi REPRESENTASI MENTAL untuk desain argumen 'I recommend... + shared benefit' -- register proposal K7 terintegrasi ke dalam recommendation slot K9. forbidden_overlap (exposition satu reason saja, factual report, process explanation): 4 komponen WAJIB terintegrasi dalam satu argumen utuh -- bukan hanya claim, bukan hanya recommendation, bukan penjelasan proses recycling. extends_to PAT-9-02 (menambah counterpoint acknowledge-counter). BOOST extension: tambah 'This shows that...' setelah contoh untuk mengeksplisitkan hubungan evidence→claim, tanpa mengulang model verbatim.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Please take your seats and prepare to think critically today." },
      { type: "AKSI", text: "Tunggu kelas kondusif dengan nada formal." },
      // HOOK
      { type: "UCAP", text: "Consider this: our community produces a large amount of waste every week. What should be done about it?" },
      { type: "AKSI", text: "Tampilkan skenario daur ulang: siswa memilah sampah ke tempat sampah berkode warna dekat gerbang sekolah." },
      { type: "UCAP", text: "Look at this recycling scenario. What argument would you make for or against a school recycling program?" },
    ],

    active_vocabulary: [
      "I believe",
      "because",
      "One reason is",
      "For example,",
      "Therefore, I recommend",
      "recycling",
      "community",
      "environment",
      "responsibility"
    ],

    model_sentences: [
      { id: "model_1", text: "I believe our school needs a community recycling program because it protects our environment." },
      { id: "model_2", text: "One reason is that recycling reduces plastic waste in our area. For example, students can collect bottles every week and bring them to the recycling centre." },
      { id: "model_3", text: "Therefore, I recommend that every student takes responsibility for sorting waste at school." },
      { id: "model_4", text: "I believe recycling helps our community because it teaches responsibility. One reason is that less waste means a cleaner environment for everyone. For example, neighbourhoods with recycling programs have less litter. Therefore, I recommend starting with one recycling station in the school canteen." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A community recycling scenario: students sorting waste into colour-coded bins near the school gate, with a banner showing a recycling symbol and 'Our Environment Matters'.", description_id: "Skenario daur ulang komunitas: siswa memilah sampah ke tempat sampah berkode warna dekat gerbang sekolah, dengan spanduk bertuliskan simbol daur ulang dan 'Our Environment Matters'.", asset_id: null },
      { id: "visual_2", description: "An argument structure frame with four labelled slots: 'I believe ___ because ___.' / 'One reason is ___. For example, ___.' / 'Therefore, I recommend ___.'", description_id: "Kerangka struktur argumen dengan empat slot berlabel: 'I believe ___ because ___.' / 'One reason is ___. For example, ___.' / 'Therefore, I recommend ___.'", asset_id: null },
      { id: "visual_3", description: "Icons: a recycling symbol, a community group circle, a leaf (environment), and a pledge ribbon (responsibility).", description_id: "Ikon: simbol daur ulang, lingkaran kelompok komunitas, daun (lingkungan), dan pita ikrar (tanggung jawab).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to own chest while saying 'I believe ...' -- to signal a personal position being staked.", description_id: "Guru menunjuk dadanya sendiri sambil mengucapkan 'I believe ...' -- untuk menandai posisi pribadi yang dinyatakan." },
      { id: "gesture_2", description: "Teacher raises one finger while saying 'One reason is ...' -- to signal organized, numbered support for the claim.", description_id: "Guru mengangkat satu jari sambil mengucapkan 'One reason is ...' -- untuk menandai dukungan yang terorganisir dan bernomor bagi klaimnya." },
      { id: "gesture_3", description: "Teacher opens a hand toward the audience while saying 'Therefore, I recommend ...' -- to signal a conclusion and call to shared action.", description_id: "Guru membuka tangan ke arah audiens sambil mengucapkan 'Therefore, I recommend ...' -- untuk menandai kesimpulan dan ajakan tindakan bersama." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher construct a complete argument with all four components integrated: claim ('I believe ... because ...'), reason ('One reason is ...'), example ('For example, ...'), and recommendation ('Therefore, I recommend ...') -- not just one component in isolation.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-16", "PAT-8-13", "PAT-8-14", "PAT-8-04"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the four-component argument ('I believe ... because ...' / 'One reason is ...' / 'For example, ...' / 'Therefore, I recommend ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Build your own four-component argument about the community recycling program.",
      prompt: "Write a complete argument using all four components: 'I believe ___ because ___.' (claim), 'One reason is ___. For example, ___.' (reason + example), 'Therefore, I recommend ___.' (recommendation). Use: recycling, community, environment, or responsibility. Keep all four components -- not just a claim alone, not just a recommendation, and not a step-by-step explanation of how recycling works.",
      change_target: ["claim (I believe ... because ...)", "reason (One reason is ...)", "example (For example, ...)", "recommendation (Therefore, I recommend ...)"],
      differentiation: {
        easy: { task: "Use the argument frame and fill in all four slots. You may look at the scenario cards." },
        standard: { task: "Write your own four-component argument without reading the frame." },
        challenge: { task: "Write the four-component argument and vary your reason -- use a different reason from the model (not 'recycling reduces plastic waste')." }
      },
      support: { pattern_support: ["PAT-8-16", "PAT-8-13", "PAT-8-14", "PAT-8-04"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share four-component arguments with a partner and check for all components.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns presenting your argument ('I believe ... because ...' / 'One reason is ...' / 'For example, ...' / 'Therefore, I recommend ...'). Your partner checks: Is there a claim? A reason? An example? A recommendation? Then swap.",
      differentiation: {
        easy: { task: "Read your argument to your partner. Your partner ticks each component on the frame: claim, reason, example, recommendation." },
        standard: { task: "Present your argument without reading. Your partner checks all four components." },
        challenge: { task: "Present your argument and your partner asks 'Why do you recommend that specifically?' -- you give one more sentence to strengthen your recommendation." }
      },
      support: { pattern_support: ["PAT-8-16", "PAT-8-13", "PAT-8-14", "PAT-8-04"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your argument to a new group (argument presentation).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your full argument ('I believe ... because ...' / 'One reason is ...' / 'For example, ...' / 'Therefore, I recommend ...').",
      differentiation: {
        easy: { task: "Present your argument to the group using your written notes." },
        standard: { task: "Present your argument without reading." },
        challenge: { task: "Present your argument, then answer one question from the group: 'What is your reason for that recommendation?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students produce all four components: claim (I believe ... because ...), reason (One reason is ...), example (For example, ...), recommendation (Therefore, I recommend ...)",
        "students integrate the four components into one connected argument, not four isolated sentences",
        "students produce only a claim and recommendation (skipping reason and example) or give a process explanation ('First, you collect ... Then, you sort ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add 'This shows that ...' after their example to explicitly link evidence to the claim.",
        needs_model: "Repeat the MODEL step, showing model_4 as the integrated example and pointing to each component in order.",
        needs_repeat: "Do one more round of REPEAT (choral) on the four-component argument before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "produces only a claim and recommendation without a reason or example, or gives a process explanation instead of a supported argument",
        "produces all four components but cannot present them without reading",
        "integrates all four components ('I believe ... because ...' / 'One reason is ...' / 'For example, ...' / 'Therefore, I recommend ...') accurately and confidently"
      ],
      action: [
        "recast the argument slowly, pointing to the frame: 'Here is the claim -- here is the reason -- here is the example -- here is the recommendation' -- show how each component connects to the next",
        "model one more argument on a different community topic (e.g. planting trees near the school) to show the same four-component structure still works",
        "for a student who is ready, model ONE argument with a linking phrase after the example first -- 'For example, neighbourhoods with recycling programs have less litter -- and this shows that community recycling protects the environment we all share.' -- then invite that student to add 'This shows that ...' after their own example; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the four-component structure intact while making the evidence link explicit"
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
