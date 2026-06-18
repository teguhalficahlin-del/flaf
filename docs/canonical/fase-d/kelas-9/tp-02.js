const skenario = {
  "persiapan": {
    "papan_tulis": "Some people think ___.\nHowever, I believe ___ because ___.\nOne reason is ___.\nFor example, ___.\nTherefore, ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu dua pendapat berlawanan, kartu kerangka argumen dua kolom, dan kartu ikon (buku catatan PR, buku terbuka, jam, timbangan).",
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
        "teks": "Welcome, class. Today requires careful reasoning, so let us begin calmly."
      },
      {
        "tipe": "AKSI",
        "teks": "Kondisikan kelas untuk sesi yang lebih terstruktur dari biasanya."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Some students argue that homework wastes their time. Do you agree, or is there another way to see it?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu dua pendapat berlawanan — dua siswa dengan balon kata: I think homework wastes our time di kiri, dan I think homework helps our learning di kanan."
      },
      {
        "tipe": "AKSI",
        "teks": "Tahan sebentar — beri waktu siswa membaca kedua pendapat."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these two viewpoints. Before defending your own, can you state the other side fairly?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan nada formal dan minta pendapatnya tentang salah satu sisi. Setelah dua respons atau sekitar tiga puluh detik — lanjutkan."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — lalu letakkan kartu di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us now see how to acknowledge a different view and still defend your own."
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
          "teks": "Ambil kartu dua pendapat berlawanan — tunjukkan ke seluruh kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Angguk dengan hormat ke arah kartu kiri."
        },
        {
          "tipe": "UCAP",
          "teks": "Some people think homework wastes students' time. However, I believe homework helps learning because it gives students time to practise on their own."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu dua pendapat — ambil kartu kerangka argumen dua kolom."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat satu jari, lalu beri gestur ke depan."
        },
        {
          "tipe": "UCAP",
          "teks": "One reason is that homework builds good study habits. For example, students who spend thirty minutes reviewing notes at home usually do better in tests."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kerangka — ambil kartu ikon."
        },
        {
          "tipe": "AKSI",
          "teks": "Angguk ke arah kiri, lalu putar sedikit dan angkat telapak tangan rata."
        },
        {
          "tipe": "UCAP",
          "teks": "Some people think too much homework upsets the balance between school and family life. However, I believe the right amount of homework makes learning more effective."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu ikon — tampilkan ketiga kartu sekaligus."
        },
        {
          "tipe": "AKSI",
          "teks": "Jalankan semua gesture secara berurutan: angguk hormat, angkat telapak tangan rata, angkat satu jari dan gestur ke depan."
        },
        {
          "tipe": "UCAP",
          "teks": "Therefore, homework should be given with care -- enough to support learning, but not so much that it takes all a student's time and breaks the balance of their day."
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
          "teks": "Angkat kedua tangan memberi isyarat bahwa kelas akan memasuki langkah REPEAT."
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
              "teks": "Angkat kartu dua pendapat berlawanan — angguk hormat ke arah kartu kiri, lalu angkat telapak tangan rata."
            },
            {
              "tipe": "UCAP",
              "teks": "Some people think homework wastes students' time. However, I believe homework helps learning because it gives students time to practise on their own."
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
              "teks": "Letakkan kartu dua pendapat — angkat kartu kerangka, angkat satu jari lalu gestur ke depan."
            },
            {
              "tipe": "UCAP",
              "teks": "One reason is that homework builds good study habits. For example, students who spend thirty minutes reviewing notes at home usually do better in tests."
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
              "teks": "Letakkan kartu kerangka — angkat kartu ikon, angguk ke kiri lalu putar dan angkat telapak rata."
            },
            {
              "tipe": "UCAP",
              "teks": "Some people think too much homework upsets the balance between school and family life. However, I believe the right amount of homework makes learning more effective."
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
              "teks": "Tampilkan ketiga kartu sekaligus — jalankan semua gesture secara berurutan."
            },
            {
              "tipe": "UCAP",
              "teks": "Therefore, homework should be given with care -- enough to support learning, but not so much that it takes all a student's time and breaks the balance of their day."
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
      "intro": "Siswa menulis argumen acknowledge-defend mereka sendiri tentang kebijakan pekerjaan rumah. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
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
          "teks": "Use this pattern. Acknowledge the other view first, then defend your own position."
        },
        {
          "tipe": "UCAP",
          "teks": "Include all five components: acknowledge, counter, reason, example, and conclusion."
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
          "teks": "Jika siswa tidak tahu cara memulai kalimat Some people think — tunjuk kartu dua pendapat di papan tulis dan minta siswa pilih salah satu balon kata sebagai titik awal."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk baris pertama di papan tulis, dan minta siswa ucapkan \"Some people think\" lalu satu pendapat tentang PR. Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan pola di papan tulis dan isi kelima slot. Boleh melihat kartu dua pendapat untuk referensi. Tulis: Some people think lalu satu pendapat tentang PR. However, I believe lalu posisi sendiri karena satu alasan. One reason is lalu satu alasan. For example lalu satu contoh. Therefore lalu kesimpulan.",
        "standar": "Tulis argumen acknowledge-defend sendiri tanpa membaca pola. Gunakan kosakata: homework, learning, time, atau balance.",
        "tantangan": "Tulis argumen lengkap dan gunakan sudut topik yang berbeda — misalnya PR akhir pekan versus PR hari sekolah — untuk menunjukkan pola yang sama tetap berlaku."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Tulis argumen lengkap dan gunakan sudut topik yang berbeda — misalnya PR akhir pekan versus PR hari sekolah — untuk menunjukkan pola yang sama tetap berlaku.",
        "perlu_bantuan": "Gunakan pola di papan tulis dan isi kelima slot. Boleh melihat kartu dua pendapat untuk referensi. Tulis: Some people think lalu satu pendapat tentang PR. However, I believe lalu posisi sendiri karena satu alasan. One reason is lalu satu alasan. For example lalu satu contoh. Therefore lalu kesimpulan."
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
          "teks": "Minta Siswa A menyampaikan argumennya membela PR kepada Siswa B. Siswa B mendengarkan dan memeriksa: ada acknowledge? ada counter? ada alasan? ada contoh? ada kesimpulan?"
        },
        {
          "tipe": "AKSI",
          "teks": "Lalu minta Siswa B menyampaikan argumen dengan posisi berlawanan ke Siswa A, mengakui pandangan A terlebih dahulu."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk baris pertama di buku catatan siswa dan minta siswa ucapkan \"Some people think\" lalu satu pendapat tentang PR."
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
          "teks": "Jika waktu tersisa kurang dari lima menit atau kelas tidak lagi kondusif — hentikan diskusi. Tunjuk pola di papan tulis, minta seluruh kelas mengucapkan lima komponen bersama satu kali, lalu tutup sesi."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca argumen dari buku catatan ke pasangan. Pasangan memeriksa kelima komponen: acknowledge, counter, reason, example, conclusion.",
        "standar": "Sampaikan argumen tanpa membaca buku. Pasangan memeriksa semua lima komponen dan nada — apakah terdengar acknowledge-then-defend, bukan rebuttal agresif?",
        "tantangan": "Sampaikan argumen, lalu pasangan bertanya: \"Can you give another reason?\" Tambahkan satu kalimat alasan kedua sebagai respons."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Sampaikan argumen, lalu pasangan bertanya: \"Can you give another reason?\" Tambahkan satu kalimat alasan kedua sebagai respons.",
        "perlu_bantuan": "Baca argumen dari buku catatan ke pasangan. Pasangan memeriksa kelima komponen: acknowledge, counter, reason, example, conclusion."
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
          "teks": "One person presents. The others listen and check: is the tone acknowledge-then-defend, not aggressive?"
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"Some people think\" lalu satu pendapat tentang PR sebagai pembuka. Jika masih diam — ucapkan nama siswa tersebut terlebih dahulu lalu minta siswa mengulang."
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
        "tantangan": "Sampaikan argumen tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"What would you say to someone who still disagrees?\""
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Sampaikan argumen tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"What would you say to someone who still disagrees?\"",
        "perlu_bantuan": "Baca argumen dari buku catatan ke kelompok."
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
          "teks": "State your acknowledgment and your counter. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan Some people think dan However, I believe."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa mengakui pandangan lain sebelum membela posisi sendiri, atau langsung ke opini tanpa acknowledgment?"
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
          "teks": "Your conclusion sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah nada tetap acknowledge-then-defend, bukan rebuttal agresif?"
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
          "teks": "Peragakan ulang gerakan angguk hormat lalu angkat telapak rata — ucapkan kalimat 1 dan 3 dengan gesture tersebut."
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
          "teks": "Angkat kartu dua pendapat berlawanan."
        },
        {
          "tipe": "UCAP",
          "teks": "This is the other view. Say it first."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan Some people think dan pandangan lain."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk sisi kanan kartu."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now your view. However, I believe..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa melanjutkan. Bantu frasa per frasa jika diperlukan — jangan minta kalimat penuh sekaligus sampai siswa siap."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kalimat Some people think dalam argumen siswa di buku catatan."
        },
        {
          "tipe": "UCAP",
          "teks": "Try a more nuanced opening. Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "While it is true that homework can take too much time, I still believe a balanced homework policy helps learning more than it hurts."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now replace your Some people think opener with While it is true that. Try once."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"That is a more sophisticated acknowledgment.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan argumen mereka sendiri tanpa melihat buku, atau menambah satu alasan kedua ke dalam argumen mereka."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-02.js",
    pattern_id: "PAT-9-02",
    title: "Homework Policy: Responding to Different Opinions",
    short_title: "Homework Policy",
    grade: 9,
    genre: "Argumentative Communication",
    cluster: "A",
    topic: "Homework Policy",
    context: "Students acknowledge an alternative view about homework policy and defend their own supported position with reasons and examples.",
    context_id: "Siswa mengakui pandangan alternatif tentang kebijakan pekerjaan rumah dan mempertahankan posisi mereka sendiri dengan alasan dan contoh.",
    communicative_goal: "acknowledge an alternative position while defending a supported personal stance",
    communicative_goal_id: "mengakui posisi alternatif sambil mempertahankan pendirian pribadi yang didukung alasan",
    vocabulary_domain: ["homework", "learning", "time", "balance"],
    input_anchor: "opinion cards",
    output_anchor: "position defence",
    prerequisite_patterns: ["PAT-8-15", "PAT-8-14", "PAT-8-16", "PAT-8-01"],
    reusable_in: ["PAT-9-03", "PAT-9-05"],
    complexity_level: "Integrate",
    notes: "TP kedua Kelas 9, genre Argumentative Communication (cluster A). QUAD PREREQ: PAT-8-15, PAT-8-14, PAT-8-16, PAT-8-01. target_pattern PAT-9-02 = 'Some people think...However, I believe...because...One reason is...For example,...Therefore...' (integrasi 4 komponen: acknowledge + defend + reason + example, plus conclusion). CEFR B1. Reaktivasi PAT-8-15 (WAJIB, VR-1): 'Some people think...However, I think...' (acknowledge-counter, K8) menjadi PEMBUKA 4-komponen TP-02 -- fungsi sama, skala bertambah (dilanjutkan reason+example+conclusion). Reaktivasi PAT-8-14 (WAJIB, VR-1): multi-reason awareness menjadi landasan 'One reason is...' di dalam defend-section -- di K8 digunakan untuk menimbang opsi, di K9 menjadi dukungan eksplisit posisi sendiri. Reaktivasi PAT-8-16 (WAJIB, VR-1): 'Therefore, I recommend...' / 'Therefore,...' (konektor kesimpulan FORMAL) menjadi KOMPONEN PENUTUP -- kini setelah full acknowledge+defend+reason+example, bukan standalone. Reaktivasi PAT-8-01 (WAJIB, VR-1): register opinion-exchange 'I think...but...' (K8 interpersonal) menjadi REPRESENTASI MENTAL untuk nada acknowledge -- bukan rebuttal agresif, tetap nuanced dan sopan. forbidden_overlap (interpersonal disagreement, exposition tanpa counterpoint, debate rebuttal): nada ACKNOWLEDGE-THEN-DEFEND, BUKAN konfrontasi langsung -- siswa mengakui pandangan lain sebelum membela posisi sendiri. BOOST extension: perkuat acknowledge dengan 'While it is true that...However, I still believe...' -- lebih nuanced dari 'Some people think...However,...', tidak mengulang model verbatim.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Welcome, class. Today requires careful reasoning, so let us begin calmly." },
      { type: "AKSI", text: "Kondisikan kelas untuk sesi yang lebih terstruktur dari biasanya." },
      // HOOK
      { type: "UCAP", text: "Some students argue that homework wastes their time. Do you agree — or is there another way to see it?" },
      { type: "AKSI", text: "Tampilkan dua siswa dengan balon kata berlawanan: 'I think homework wastes our time.' vs 'I think homework helps our learning.'" },
      { type: "UCAP", text: "Look at these two viewpoints. Before defending your own, can you state the other side fairly?" },
    ],

    active_vocabulary: [
      "Some people think",
      "However, I believe",
      "because",
      "One reason is",
      "For example,",
      "Therefore,",
      "homework",
      "learning",
      "time",
      "balance"
    ],

    model_sentences: [
      { id: "model_1", text: "Some people think homework wastes students' time. However, I believe homework helps learning because it gives students time to practise on their own." },
      { id: "model_2", text: "One reason is that homework builds good study habits. For example, students who spend thirty minutes reviewing notes at home usually do better in tests." },
      { id: "model_3", text: "Some people think too much homework upsets the balance between school and family life. However, I believe the right amount of homework makes learning more effective." },
      { id: "model_4", text: "Therefore, homework should be given with care -- enough to support learning, but not so much that it takes all a student's time and breaks the balance of their day." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Two students with opposing speech bubbles: 'I think homework wastes our time.' (left) and 'I think homework helps our learning.' (right) -- showing the acknowledge-counter setup.", description_id: "Dua siswa dengan balon kata yang berlawanan: 'I think homework wastes our time.' (kiri) dan 'I think homework helps our learning.' (kanan) -- menunjukkan setup mengakui-lalu-menyanggah.", asset_id: null },
      { id: "visual_2", description: "An argument frame split into two columns: 'Some people think ...' (left, greyed) and 'However, I believe ... because ...' (right, highlighted), then 'One reason is ... For example, ...' below both.", description_id: "Kerangka argumen terbagi dua kolom: 'Some people think ...' (kiri, abu-abu) dan 'However, I believe ... because ...' (kanan, disorot), lalu 'One reason is ... For example, ...' di bawah keduanya.", asset_id: null },
      { id: "visual_3", description: "Icons: a homework notebook, an open book (learning), a clock (time), and a balance scale (balance).", description_id: "Ikon: buku catatan pekerjaan rumah, buku terbuka (belajar), jam (waktu), dan timbangan (keseimbangan).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher nods respectfully while saying 'Some people think ...' -- to model acknowledging the other view without dismissing it.", description_id: "Guru mengangguk dengan hormat sambil mengucapkan 'Some people think ...' -- untuk mencontohkan mengakui pandangan lain tanpa mengabaikannya." },
      { id: "gesture_2", description: "Teacher turns slightly and raises a flat hand while saying 'However, I believe ...' -- to signal a counter-position without aggression.", description_id: "Guru berbalik sedikit dan mengangkat telapak tangan rata sambil mengucapkan 'However, I believe ...' -- untuk menandai posisi tandingan tanpa nada agresif." },
      { id: "gesture_3", description: "Teacher raises one finger for 'One reason is ...' and gestures forward while saying 'For example, ...' -- to signal organized support following the counter.", description_id: "Guru mengangkat satu jari untuk 'One reason is ...' dan memberi gestur ke depan sambil mengucapkan 'For example, ...' -- untuk menandai dukungan terorganisir setelah sanggahan." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher acknowledge a different opinion and then defend a supported position: 'Some people think ... However, I believe ... because ...' / 'One reason is ...' / 'For example, ...' / 'Therefore, ...' -- an acknowledge-then-defend move, not a dismissal or an aggressive rebuttal.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-15", "PAT-8-14", "PAT-8-16", "PAT-8-01"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the acknowledge-defend argument ('Some people think ...' / 'However, I believe ... because ...' / 'One reason is ...' / 'For example, ...' / 'Therefore, ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own acknowledge-defend argument about the homework policy.",
      prompt: "Write an argument using the acknowledge-defend structure: 'Some people think ...' (acknowledge the other view), 'However, I believe ... because ...' (defend your position), 'One reason is ...' (give a reason), 'For example, ...' (give an example), 'Therefore, ...' (conclude). Use: homework, learning, time, or balance. Keep the tone acknowledge-then-defend -- not a dismissal ('That is wrong!') and not a simple opinion without support.",
      change_target: ["acknowledgment (Some people think ...)", "counter (However, I believe ... because ...)", "reason (One reason is ...)", "example (For example, ...)", "conclusion (Therefore, ...)"],
      differentiation: {
        easy: { task: "Use the argument frame and fill in: 'Some people think ___. However, I believe ___ because ___. One reason is ___. For example, ___. Therefore, ___.' You may look at the opinion cards." },
        standard: { task: "Write your own acknowledge-defend argument without reading the frame." },
        challenge: { task: "Write the full argument and use a different topic angle (e.g. weekend homework vs weekday homework) to show the same pattern still works." }
      },
      support: { pattern_support: ["PAT-8-15", "PAT-8-14", "PAT-8-16", "PAT-8-01"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Practise the acknowledge-defend exchange with a partner, each taking an opposing starting point.",
      interaction_mode: "pair",
      task: "Find a partner. Partner A presents an argument defending homework ('I believe homework helps learning ...'). Partner B acknowledges A's view and defends the opposite ('Some people think homework helps. However, I believe ...'). Then swap roles. Each person checks that the other uses all five components.",
      differentiation: {
        easy: { task: "Read your argument to your partner. Your partner checks: acknowledge, counter, reason, example, conclusion." },
        standard: { task: "Present your argument without reading. Your partner checks all five components." },
        challenge: { task: "Present your argument and your partner asks 'Can you give another reason?' -- you add one more sentence in response." }
      },
      support: { pattern_support: ["PAT-8-15", "PAT-8-14", "PAT-8-16", "PAT-8-01"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your position defence to a new group (position defence).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your acknowledge-defend argument ('Some people think ...' / 'However, I believe ...' / 'One reason is ...' / 'For example, ...' / 'Therefore, ...').",
      differentiation: {
        easy: { task: "Present your argument to the group using your written notes." },
        standard: { task: "Present your argument without reading." },
        challenge: { task: "Present your argument, then answer one question from the group: 'What would you say to someone who still disagrees?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students acknowledge an alternative view ('Some people think ...') and then defend their position ('However, I believe ... because ...') with a reason and example",
        "students keep the tone acknowledge-then-defend -- not aggressive rebuttal ('That is completely wrong!') and not a simple agreement",
        "students skip the acknowledgment and go straight to their own opinion ('I think homework is good because ...') or only acknowledge without defending ('Some people think ... and I agree that ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to upgrade their acknowledgment with a more nuanced 'While it is true that ...' opening.",
        needs_model: "Repeat the MODEL step, emphasising the nod-then-counter move -- 'Some people think ... (nod) However, I believe ...' -- to make the acknowledge-defend structure visible.",
        needs_repeat: "Do one more round of REPEAT (choral) on the acknowledge-defend sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "skips the acknowledgment or turns it into an aggressive dismissal ('Some people think that, but they are wrong')",
        "produces all five components but cannot present without reading",
        "acknowledges the other view and defends a supported position with reason, example, and conclusion accurately and confidently"
      ],
      action: [
        "recast the acknowledge-defend move slowly, modelling the respectful nod before the counter: 'Some people think ... (pause, nod) However, I believe ...' -- not a dismissal, not an agreement",
        "model one more acknowledge-defend argument on a different school topic (e.g. school uniforms) to show the same five-component structure still works",
        "for a student who is ready, model ONE more nuanced acknowledgment first -- 'While it is true that homework can take too much time, I still believe a balanced homework policy helps learning more than it hurts.' -- then invite that student to replace their own 'Some people think ...' opener with 'While it is true that ...' for a more nuanced concession; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the acknowledge-defend structure intact"
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
