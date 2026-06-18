const skenario = {
  "persiapan": {
    "papan_tulis": "I believe ___ because ___.\nOne reason is ___.\nAnother reason is ___.\nSome people think ___.\nHowever, ___.\nFor example, ___.\nTherefore, I recommend ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu kelompok empat siswa bekerja sama, kartu peta argumen enam simpul, dan kartu ikon (dua tangan bekerja sama, spanduk klub, bahan proyek, lencana rekomendasi).",
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
        "teks": "Good morning. This session, we put everything together."
      },
      {
        "tipe": "AKSI",
        "teks": "Informasikan siswa bahwa ini akan menjadi sesi argumentasi terlengkap."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Think about a team project you worked on. What made the teamwork successful, or difficult?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu kelompok empat siswa bekerja sama — masing-masing memegang bahan berbeda, spanduk klub terlihat di latar belakang."
      },
      {
        "tipe": "AKSI",
        "teks": "Tahan sebentar — beri waktu siswa mengamati kartu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this teamwork scene. Can you build a complete argument for why teamwork improves school projects?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan nada formal dan minta pendapatnya tentang kerja sama. Setelah dua respons atau sekitar tiga puluh detik — lanjutkan."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — lalu letakkan kartu di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us now see how all six components come together in one argument."
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
          "teks": "Ambil kartu kelompok empat siswa — tunjukkan ke seluruh kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk dada sendiri, lalu angkat dua jari secara berurutan."
        },
        {
          "tipe": "UCAP",
          "teks": "I believe teamwork makes school projects better because students can share ideas and learn from each other."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kelompok — ambil kartu peta argumen."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat satu jari, lalu angkat jari kedua."
        },
        {
          "tipe": "UCAP",
          "teks": "One reason is that working in clubs teaches cooperation. Another reason is that students finish projects faster when they work as a team."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu peta — ambil kartu ikon."
        },
        {
          "tipe": "AKSI",
          "teks": "Angguk untuk Some people think, lalu beri gestur tandingan yang tenang untuk However."
        },
        {
          "tipe": "UCAP",
          "teks": "Some people think group work is unfair because not everyone contributes equally. However, I believe that with clear roles, every team member can cooperate effectively."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu ikon — tampilkan ketiga kartu sekaligus."
        },
        {
          "tipe": "AKSI",
          "teks": "Satukan semua jari perlahan untuk gesture penutup."
        },
        {
          "tipe": "UCAP",
          "teks": "For example, our school science club finished their project early because every member took a role. Therefore, I recommend that all students join at least one school club to practise teamwork and cooperation."
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
          "teks": "Angkat kedua tangan sebagai isyarat bahwa kelas memasuki langkah REPEAT."
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
              "teks": "Angkat kartu kelompok — tunjuk dada sendiri dan angkat dua jari berurutan."
            },
            {
              "tipe": "UCAP",
              "teks": "I believe teamwork makes school projects better because students can share ideas and learn from each other."
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
              "teks": "Letakkan kartu kelompok — angkat kartu peta argumen, angkat satu jari lalu jari kedua."
            },
            {
              "tipe": "UCAP",
              "teks": "One reason is that working in clubs teaches cooperation. Another reason is that students finish projects faster when they work as a team."
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
              "teks": "Letakkan kartu peta — angkat kartu ikon, angguk lalu beri gestur tandingan tenang."
            },
            {
              "tipe": "UCAP",
              "teks": "Some people think group work is unfair because not everyone contributes equally. However, I believe that with clear roles, every team member can cooperate effectively."
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
              "teks": "Tampilkan ketiga kartu sekaligus — satukan semua jari perlahan."
            },
            {
              "tipe": "UCAP",
              "teks": "For example, our school science club finished their project early because every member took a role. Therefore, I recommend that all students join at least one school club to practise teamwork and cooperation."
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
          "teks": "Now it is your turn. Write your own complete argument."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk peta argumen di papan tulis dan minta siswa menyalin pola. Beri waktu dua menit untuk menyalin, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi enam menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menyusun argumen enam komponen mereka sendiri tentang kerja sama dalam klub sekolah. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
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
          "teks": "Use this pattern. Write your own six-component argument about teamwork in school clubs."
        },
        {
          "tipe": "UCAP",
          "teks": "Include all six components, claim, two reasons, acknowledge, counter, example, and recommendation."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang berhenti menulis lebih dari sepuluh detik atau belum menulis dua komponen."
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
          "teks": "Jika siswa tidak tahu cara memulai — tunjuk simpul pertama di peta argumen di papan tulis dan minta siswa tuliskan klaim mereka tentang kerja sama terlebih dahulu."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk baris pertama di papan tulis, dan minta siswa ucapkan \"I believe teamwork\" lalu pendapatnya. Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan peta argumen di papan tulis dan isi setiap simpul secara berurutan. Boleh melihat kartu skenario untuk referensi. Pastikan ada klaim, dua alasan, acknowledge, counter, contoh, dan rekomendasi.",
        "standar": "Tulis argumen enam komponen sendiri tanpa membaca peta. Gunakan kosakata: teamwork, clubs, projects, atau cooperation.",
        "tantangan": "Tulis argumen enam komponen dan buat contoh yang spesifik — peristiwa sekolah atau hasil proyek nyata, bukan pernyataan umum tentang kerja sama."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Tulis argumen enam komponen dan buat contoh yang spesifik — peristiwa sekolah atau hasil proyek nyata, bukan pernyataan umum tentang kerja sama.",
        "perlu_bantuan": "Gunakan peta argumen di papan tulis dan isi setiap simpul secara berurutan. Boleh melihat kartu skenario untuk referensi. Pastikan ada klaim, dua alasan, acknowledge, counter, contoh, dan rekomendasi."
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Langkah ini menggunakan kelompok kecil tiga atau empat orang. Guru menentukan komposisi kelompok.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk tiga atau empat siswa yang duduk berdekatan sebagai satu kelompok — lanjutkan hingga semua siswa tergabung."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk dua siswa dari kelompok yang berbeda sebagai contoh — minta mereka berdiri sebentar."
        },
        {
          "tipe": "UCAP",
          "teks": "Watch first. Then you do the same in your group."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa A menyampaikan argumennya. Siswa B, C, D mendengarkan dan memeriksa: ada klaim? dua alasan? acknowledge dan counter? contoh? rekomendasi?"
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah Siswa A selesai, minta satu anggota menyebut komponen yang paling meyakinkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta siswa kembali ke kelompok masing-masing."
        },
        {
          "tipe": "UCAP",
          "teks": "Your turn now. Take turns in your group. After each person, name the most convincing component."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk semua anggota kelompok berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — pastikan setiap anggota sudah mendapat giliran berbicara."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Stay with your group. Wait for my signal. I will show you which group to join."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam lebih dari sepuluh detik — tunjuk buku catatannya dan minta ucapkan klaim mereka sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this pattern.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan argumennya sekali lagi tanpa melihat buku."
        },
        {
          "tipe": "darurat",
          "teks": "Jika waktu tersisa kurang dari lima menit atau kelas tidak lagi kondusif — hentikan diskusi. Tunjuk peta argumen di papan tulis, minta seluruh kelas mengucapkan enam komponen bersama satu kali, lalu tutup sesi."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca argumen dari buku catatan ke kelompok. Kelompok mencentang setiap komponen saat mendengarnya.",
        "standar": "Sampaikan argumen tanpa membaca. Kelompok memeriksa semua enam komponen.",
        "tantangan": "Sampaikan argumen tanpa membaca, lalu kelompok bertanya: \"What would you say to someone who still thinks group work is unfair?\" Tambahkan satu respons."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Sampaikan argumen tanpa membaca, lalu kelompok bertanya: \"What would you say to someone who still thinks group work is unfair?\" Tambahkan satu respons.",
        "perlu_bantuan": "Baca argumen dari buku catatan ke kelompok. Kelompok mencentang setiap komponen saat mendengarnya."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Setiap siswa bergabung ke kelompok baru yang berbeda dari kelompok INTERACT — membentuk kelompok empat orang.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk komposisi kelompok baru — jangan biarkan siswa memilih sendiri."
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
          "teks": "One person presents the full six-component argument. The others listen."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"I believe\" lalu klaimnya sebagai pembuka. Jika masih diam — ucapkan nama siswa terlebih dahulu lalu minta mengulang."
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
        "mudah": "Baca argumen dari buku catatan ke kelompok baru.",
        "standar": "Sampaikan argumen tanpa membaca buku.",
        "tantangan": "Sampaikan argumen tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"Can you give another example of teamwork in clubs?\""
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Sampaikan argumen tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"Can you give another example of teamwork in clubs?\"",
        "perlu_bantuan": "Baca argumen dari buku catatan ke kelompok baru."
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
          "teks": "State your two reasons. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan One reason is dan Another reason is."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menyebutkan dua alasan yang berbeda, atau hanya mengulang satu alasan yang sama?"
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
          "teks": "Your acknowledge-counter move. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan Some people think dan However."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah komponen acknowledge dan counter terintegrasi dalam argumen, bukan berdiri sendiri?"
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
          "teks": "Angkat kembali kartu peta argumen."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk setiap simpul di peta sambil mengucapkan komponen yang sesuai — minta siswa mengikuti bersama."
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
          "teks": "Angkat kartu peta argumen dan tunjuk setiap simpul secara berurutan."
        },
        {
          "tipe": "UCAP",
          "teks": "Claim. Two reasons. Acknowledge. Counter. Example. Recommendation. Six steps."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk simpul pertama dan minta siswa ucapkan klaimnya. Lanjutkan simpul per simpul. Jangan tergesa-gesa — tunggu respons di setiap simpul sebelum lanjut."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kalimat rekomendasi dalam argumen siswa di buku catatan."
        },
        {
          "tipe": "UCAP",
          "teks": "Try adding a closing call-to-action after your recommendation. Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "If we want our school to produce confident, responsible students, we need to make teamwork through clubs a regular part of learning -- not just an optional activity."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now add your own closing sentence after your recommendation. One sentence only."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"That strengthens your recommendation with a forward-looking vision.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan argumen lengkap mereka tanpa melihat buku, atau memperkuat contoh mereka dengan satu detail spesifik tentang kejadian nyata di sekolah."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-03.js",
    pattern_id: "PAT-9-03",
    title: "Teamwork in School Clubs: Integrating Arguments",
    short_title: "Teamwork Arguments",
    grade: 9,
    genre: "Argumentative Communication",
    cluster: "B",
    topic: "Teamwork in After-School Clubs and Projects",
    context: "Students construct a full argumentative performance that integrates a claim, two reasons, a counter-argument, an example, and a recommendation.",
    context_id: "Siswa menyusun argumen lengkap yang memadukan klaim, dua alasan, argumen tandingan, contoh, dan rekomendasi.",
    communicative_goal: "construct an integrated argumentative performance combining claim, multiple reasons, counter-argument, evidence, and recommendation",
    communicative_goal_id: "menyusun argumen terpadu yang menggabungkan klaim, beberapa alasan, argumen tandingan, bukti, dan rekomendasi",
    vocabulary_domain: ["teamwork", "clubs", "projects", "cooperation"],
    input_anchor: "teamwork scenario cards",
    output_anchor: "full argument performance",
    prerequisite_patterns: ["PAT-8-13", "PAT-8-14", "PAT-8-15", "PAT-8-16", "PAT-8-04"],
    reusable_in: ["PAT-9-04", "PAT-9-06", "PAT-9-07"],
    complexity_level: "Integrate",
    notes: "TP ketiga Kelas 9, genre Argumentative Communication (cluster B -- CLOSER CLUSTER, integrasi struktur terlengkap di cluster ini). QUINT PREREQ: PAT-8-13, PAT-8-14, PAT-8-15, PAT-8-16, PAT-8-04. target_pattern PAT-9-03 = 'I believe...because...One reason is...Another reason is...Some people think...However,...For example,...Therefore, I recommend...' (integrasi 6 komponen retoris: claim, two reasons, acknowledge, counter, example, recommendation). CEFR B1. PERFORMA ARGUMENTATIF TERLENGKAP di cluster ini -- meminta siswa menggabungkan seluruh komponen dari PAT-9-01 (4 komponen) dan PAT-9-02 (5 komponen) menjadi 6 komponen terintegrasi dalam satu performa. Reaktivasi PAT-8-13 (WAJIB, VR-1): 'I believe...because...' (claim + reason dasar) menjadi OPENER argumen 6-komponen. Reaktivasi PAT-8-14 (WAJIB, VR-1): 'Another reason is...' menjadi realisasi MULTI-REASON -- di K8 digunakan untuk menimbang opsi lain, di K9 menjadi second reason eksplisit dalam satu argumen terpadu. Reaktivasi PAT-8-15 (WAJIB, VR-1): 'Some people think...However,...' (acknowledge-counter) terintegrasi ke dalam tubuh argumen sebagai komponen kelima -- bukan berdiri sendiri seperti di K8. Reaktivasi PAT-8-16 (WAJIB, VR-1): 'Therefore, I recommend...' menjadi penutup formal setelah 5 komponen sebelumnya. Reaktivasi PAT-8-04 (WAJIB, VR-1): proposal 'should...' / 'we should...' menjadi REPRESENTASI MENTAL -- desain argumen berbasis kepentingan bersama berakar dari register proposal K7. extends_to PAT-9-04 (JEMBATAN ke cluster Review -- PAT-9-04 builds_on PAT-9-03; kemampuan evaluatif 'I believe X is better because...' + 'However,...' yang dibangun di sini menjadi landasan PAT-9-04 'This review argues...' meski topik berbeda -- Healthy Canteen Menu). forbidden_overlap (exposition linear, review text, analytical essay): TIDAK butuh evidence eksternal -- argumen berbasis observasi dan reasoning personal yang terstruktur. BOOST extension: tambah CLOSING CALL-TO-ACTION 'If we want...we need to...' yang memperkuat recommendation -- bukan mengulang model verbatim.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. This session, we put everything together." },
      { type: "AKSI", text: "Informasikan siswa bahwa ini akan menjadi sesi argumentasi terlengkap." },
      // HOOK
      { type: "UCAP", text: "Think about a team project you worked on. What made the teamwork successful — or difficult?" },
      { type: "AKSI", text: "Tampilkan sekelompok empat siswa bekerja sama pada proyek, masing-masing memegang bahan berbeda, spanduk klub terlihat." },
      { type: "UCAP", text: "Look at this teamwork scene. Can you build a complete argument for why teamwork improves school projects?" },
    ],

    active_vocabulary: [
      "I believe",
      "because",
      "One reason is",
      "Another reason is",
      "Some people think",
      "However,",
      "For example,",
      "Therefore, I recommend",
      "teamwork",
      "clubs",
      "projects",
      "cooperation"
    ],

    model_sentences: [
      { id: "model_1", text: "I believe teamwork makes school projects better because students can share ideas and learn from each other." },
      { id: "model_2", text: "One reason is that working in clubs teaches cooperation. Another reason is that students finish projects faster when they work as a team." },
      { id: "model_3", text: "Some people think group work is unfair because not everyone contributes equally. However, I believe that with clear roles, every team member can cooperate effectively." },
      { id: "model_4", text: "For example, our school science club finished their project early because every member took a role. Therefore, I recommend that all students join at least one school club to practise teamwork and cooperation." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A group of four students working together on a school project, each holding a different material -- showing clear roles and active cooperation, with a club banner visible in the background.", description_id: "Sekelompok empat siswa bekerja sama pada proyek sekolah, masing-masing memegang bahan yang berbeda -- menunjukkan peran yang jelas dan kerja sama aktif, dengan spanduk klub terlihat di latar belakang.", asset_id: null },
      { id: "visual_2", description: "A full argument map with six labelled nodes connected by arrows: 'I believe ... because ...' → 'One reason is ...' + 'Another reason is ...' → 'Some people think ... However, ...' → 'For example, ...' → 'Therefore, I recommend ...'", description_id: "Peta argumen lengkap dengan enam simpul berlabel yang dihubungkan tanda panah: 'I believe ... because ...' → 'One reason is ...' + 'Another reason is ...' → 'Some people think ... However, ...' → 'For example, ...' → 'Therefore, I recommend ...'", asset_id: null },
      { id: "visual_3", description: "Icons: two hands cooperating (teamwork/cooperation), a club banner, project materials on a table, and a recommendation badge -- matching vocabulary_domain items.", description_id: "Ikon: dua tangan bekerja sama (kerja tim/kerja sama), spanduk klub, bahan proyek di atas meja, dan lencana rekomendasi -- sesuai item vocabulary_domain.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to own chest for 'I believe ...' then raises two fingers in sequence for 'One reason is ... / Another reason is ...' -- to signal a claim followed by dual support.", description_id: "Guru menunjuk dadanya sendiri untuk 'I believe ...' lalu mengangkat dua jari secara berurutan untuk 'One reason is ... / Another reason is ...' -- untuk menandai klaim yang diikuti dukungan ganda." },
      { id: "gesture_2", description: "Teacher nods for 'Some people think ...' then turns with a calm counter-gesture for 'However, ...' -- to model the acknowledge-then-counter move embedded within the argument.", description_id: "Guru mengangguk untuk 'Some people think ...' lalu berbalik dengan gestur tandingan yang tenang untuk 'However, ...' -- untuk mencontohkan gerakan mengakui-lalu-menyanggah yang tertanam dalam argumen." },
      { id: "gesture_3", description: "Teacher brings all fingers together slowly while saying 'Therefore, I recommend ...' -- to signal integration of all six components into one conclusion.", description_id: "Guru menyatukan semua jari secara perlahan sambil mengucapkan 'Therefore, I recommend ...' -- untuk menandai integrasi keenam komponen menjadi satu kesimpulan." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher construct a full six-component argument: claim ('I believe ... because ...'), two reasons ('One reason is ...' / 'Another reason is ...'), acknowledge-counter ('Some people think ... / However, ...'), example ('For example, ...'), and recommendation ('Therefore, I recommend ...') -- all integrated into one coherent performance.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-13", "PAT-8-14", "PAT-8-15", "PAT-8-16", "PAT-8-04"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the six-component argument together as a class, pausing at each component marker to name it: claim / reason-1 / reason-2 / acknowledge / counter / example / recommendation.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own six-component argument about teamwork in school clubs.",
      prompt: "Write a complete argument using all six components: 'I believe ___ because ___.' (claim), 'One reason is ___.' / 'Another reason is ___.' (two reasons), 'Some people think ___. However, ___.' (acknowledge + counter), 'For example, ___.' (example), 'Therefore, I recommend ___.' (recommendation). Use: teamwork, clubs, projects, or cooperation. Keep all six components -- not just two or three, and not a factual description of what clubs do.",
      change_target: ["claim (I believe ... because ...)", "two reasons (One reason is ... / Another reason is ...)", "acknowledge + counter (Some people think ... / However, ...)", "example (For example, ...)", "recommendation (Therefore, I recommend ...)"],
      differentiation: {
        easy: { task: "Use the argument map and fill in each node in order. You may look at the scenario cards." },
        standard: { task: "Write your own six-component argument without reading the map." },
        challenge: { task: "Write the six-component argument and make your example a specific school event or project result (not a general statement)." }
      },
      support: { pattern_support: ["PAT-8-13", "PAT-8-14", "PAT-8-15", "PAT-8-16", "PAT-8-04"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Present full argumentative performances in a small group and check for all six components.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, take turns presenting your full six-component argument. The group checks: claim? two reasons? acknowledge + counter? example? recommendation? After each presentation, one group member names the component they found most convincing and explains why.",
      differentiation: {
        easy: { task: "Present your argument using your written notes. The group ticks each of the six components as they hear it." },
        standard: { task: "Present your argument without reading. The group checks all six components." },
        challenge: { task: "Present your argument and the group asks 'What would you say to someone who still thinks group work is unfair?' -- you give one more response." }
      },
      support: { pattern_support: ["PAT-8-13", "PAT-8-14", "PAT-8-15", "PAT-8-16", "PAT-8-04"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your full argument performance to a new group (full argument performance).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting your full six-component argument ('I believe ...' / 'One reason is ...' / 'Another reason is ...' / 'Some people think ...' / 'However, ...' / 'For example, ...' / 'Therefore, I recommend ...').",
      differentiation: {
        easy: { task: "Present your argument to the new group using your written notes." },
        standard: { task: "Present your full argument without reading." },
        challenge: { task: "Present your full argument, then answer one question from the group: 'Can you give another example of teamwork in clubs?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students integrate all six components into one coherent argument: claim, two reasons, acknowledge-counter, example, recommendation",
        "students place the acknowledge-counter ('Some people think ... / However, ...') inside the argument rather than as a standalone opener",
        "students produce only three or four components (e.g. skip the second reason or the acknowledge-counter), or present the six components as disconnected sentences rather than one flowing argument"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a closing call-to-action after 'Therefore, I recommend ...'.",
        needs_model: "Repeat the MODEL step, walking through the argument map node by node -- name each component aloud before reading the matching sentence.",
        needs_repeat: "Do one more round of REPEAT (choral) on the six-component argument, pausing at each component marker, before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "produces only four components (skipping the second reason or the acknowledge-counter) or presents them as disconnected sentences",
        "produces all six components but cannot flow through the argument without reading",
        "integrates all six components into one coherent argument performance accurately and confidently"
      ],
      action: [
        "recast the argument slowly, walking through the map: 'Claim -- two reasons -- acknowledge -- counter -- example -- recommendation' -- pointing to each node before each sentence, so the structure is visible",
        "model one more six-component argument on a different topic (e.g. physical education in the school schedule) to show the same structure still works",
        "for a student who is ready, model ONE closing call-to-action sentence first -- 'If we want our school to produce confident, responsible students, we need to make teamwork through clubs a regular part of learning -- not just an optional activity.' -- then invite that student to add their own closing call-to-action after 'Therefore, I recommend ...' to give their argument a stronger finish; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it extends the recommendation without replacing any of the six core components"
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
