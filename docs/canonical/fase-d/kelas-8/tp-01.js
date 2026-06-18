const skenario = {
  "persiapan": {
    "papan_tulis": "I think ___ because ___, but ___. What do you think?",
    "kartu": "Siapkan tiga kartu di meja guru — kartu diskusi dua sisi (\"No phones at break time\" vs \"Phones allowed at break time\"), kartu kerangka pendapat (\"I think ___ because ___, but ___. What do you think?\"), dan kartu ikon topik (ponsel, teman mengobrol, jam istirahat, balon chat).",
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
        "teks": "Good morning, class. Please take your seats."
      },
      {
        "tipe": "AKSI",
        "teks": "Pastikan semua siswa duduk dan perhatian ke depan."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Quick show of hands, who uses their phone during school break time?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa."
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu diskusi dua sisi — \"No phones at break time\" versus \"Phones allowed at break time\" — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "The school is thinking about a phone-free break. What do you think about that idea?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how we can share an opinion clearly, with a reason and a caveat."
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
          "teks": "Angkat kartu ikon topik — tunjukkan ke seluruh kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Yesterday, everyone felt surprised because the school announced a phone-free break time."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu ikon — angkat kartu kerangka pendapat. Tepuk pelipis untuk \"I think\", buka tangan untuk \"because\", lalu miringkan tangan ke sisi lain untuk \"but\"."
        },
        {
          "tipe": "UCAP",
          "teks": "I think a phone-free break is good because we can talk to our friends, but I miss my games. What do you think?"
        },
        {
          "tipe": "AKSI",
          "teks": "Balikkan kartu kerangka pendapat. Kembali peragakan gesture tepuk pelipis, buka tangan, miringkan tangan, lalu buka kedua tangan ke arah siswa untuk \"What do you think?\"."
        },
        {
          "tipe": "UCAP",
          "teks": "I think break time is better with phones because we can relax, but we talk less. What do you think?"
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kerangka pendapat. Peragakan gesture angguk untuk \"I agree\", tepuk pelipis untuk \"I think\", buka kedua tangan ke arah siswa untuk \"What do you think?\"."
        },
        {
          "tipe": "UCAP",
          "teks": "I agree, but I think phones help communication because we can chat with friends. What do you think?"
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
              "teks": "Angkat kartu ikon topik."
            },
            {
              "tipe": "UCAP",
              "teks": "Yesterday, everyone felt surprised because the school announced a phone-free break time."
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
              "teks": "Letakkan kartu ikon — angkat kartu kerangka pendapat. Peragakan gesture tepuk pelipis, buka tangan, miringkan tangan, buka kedua tangan ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "I think a phone-free break is good because we can talk to our friends, but I miss my games. What do you think?"
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
              "teks": "Balikkan kartu kerangka pendapat. Kembali peragakan gesture tepuk pelipis, buka tangan, miringkan tangan, buka kedua tangan ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "I think break time is better with phones because we can relax, but we talk less. What do you think?"
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
              "teks": "Letakkan kartu. Peragakan gesture angguk untuk \"I agree\", tepuk pelipis untuk \"I think\", buka kedua tangan ke arah siswa untuk \"What do you think?\"."
            },
            {
              "tipe": "UCAP",
              "teks": "I agree, but I think phones help communication because we can chat with friends. What do you think?"
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
          "teks": "Good. Now it is your turn. Write your own opinion."
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
      "intro": "Siswa mengganti isi kalimat dengan pendapat diri sendiri tentang topik yang sama. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan kartu kerangka pendapat di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this pattern. Write your own opinion about phone-free break time."
        },
        {
          "tipe": "UCAP",
          "teks": "Change the words in the blanks. Use your own reason and your own caveat."
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
          "teks": "Jika siswa tidak tahu kata yang tepat untuk alasan atau caveats mereka — tunjuk kartu diskusi di papan tulis dan minta siswa pilih salah satu sisi sebagai pendapat awal."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk pola di papan tulis, dan minta siswa ucapkan \"I think a phone-free break...\" lalu pilihan mereka. Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kartu diskusi dan lengkapi: \"I think ___ because ___, but ___. What do you think?\" — pilih salah satu sisi kartu sebagai pendapat.",
        "standar": "Tulis pendapat sendiri tentang phone-free break time menggunakan pola \"I think ... because ..., but .... What do you think?\"",
        "tantangan": "Tulis pendapat seimbang, lalu tulis juga satu kalimat respons yang bisa diberikan kepada teman — misalnya \"I agree, but I think ... because ...\" atau \"I don't think so. I think ... because ...\""
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Tulis pendapat seimbang, lalu tulis juga satu kalimat respons yang bisa diberikan kepada teman — misalnya \"I agree, but I think ... because ...\" atau \"I don't think so. I think ... because ...\"",
        "perlu_bantuan": "Gunakan kartu diskusi dan lengkapi: \"I think ___ because ___, but ___. What do you think?\" — pilih salah satu sisi kartu sebagai pendapat."
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
          "teks": "Minta Siswa A mengucapkan pendapatnya ke Siswa B, lalu tanya \"What do you think?\""
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B merespons dengan \"I agree, but I think ...\" atau \"I don't think so. I think ...\" lalu balik bertanya."
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
          "teks": "Take turns sharing your opinion. Ask your partner What do you think? after you speak."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk kalimat pertama di buku catatan siswa dan minta siswa ucapkan \"I think\" lalu pendapat mereka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan pendapatnya sekali lagi tanpa melihat buku."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca pendapat dari buku catatan ke pasangan, lalu tanya \"What do you think?\" Dengarkan pasangan menjawab dengan \"I agree.\" atau \"I don't think so.\" dan satu alasan.",
        "standar": "Tukar pendapat tanpa membaca buku. Respons dengan \"I agree, but I think ...\" atau \"I don't think so. I think ...\", lalu balik bertanya.",
        "tantangan": "Lanjutkan pertukaran selama dua putaran. Setiap kali, tambahkan caveat \"but ...\" dan undang pasangan dengan \"What do you think?\""
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Lanjutkan pertukaran selama dua putaran. Setiap kali, tambahkan caveat \"but ...\" dan undang pasangan dengan \"What do you think?\"",
        "perlu_bantuan": "Baca pendapat dari buku catatan ke pasangan, lalu tanya \"What do you think?\" Dengarkan pasangan menjawab dengan \"I agree.\" atau \"I don't think so.\" dan satu alasan."
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
          "teks": "One person speaks. The others listen. Ask What do you think? after each person shares."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"I think\" lalu pendapat mereka sebagai pembuka. Jika masih diam — ucapkan \"I think a phone-free break is...\" lalu tunggu siswa menirukan."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa ucapkan pendapatnya sekali lagi tanpa melihat buku."
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
        "mudah": "Baca pendapat dari buku catatan ke kelompok, lalu tanya \"What do you think?\" Dengarkan satu teman merespons.",
        "standar": "Tukar pendapat tanpa membaca buku, merespons dengan \"I agree, but ...\" atau \"I don't think so. I think ...\"",
        "tantangan": "Pimpin satu pertukaran pendek: sampaikan pendapat seimbang, undang dua teman, dan respons masing-masing dengan bentuk pendapat sebelum menyatakan ulang pendapat sendiri."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Pimpin satu pertukaran pendek: sampaikan pendapat seimbang, undang dua teman, dan respons masing-masing dengan bentuk pendapat sebelum menyatakan ulang pendapat sendiri.",
        "perlu_bantuan": "Baca pendapat dari buku catatan ke kelompok, lalu tanya \"What do you think?\" Dengarkan satu teman merespons."
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
          "teks": "Say your opinion sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan pendapatnya."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan \"I think ... because ..., but ...\"? Apakah ada alasan dan caveat yang jelas, bukan sekadar \"I think phones are bad\"?"
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
          "teks": "What did your partner say? Just the main idea, without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa dapat menyampaikan isi dengan lancar, atau berhenti lama?"
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
          "teks": "Angkat kembali kartu kerangka pendapat."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan kalimat kedua dan ketiga sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu seluruh kelas mengucapkan bersama."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta siswa buka buku catatan — lengkapi atau perbaiki pendapat yang belum selesai. Beri waktu dua menit."
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
          "teks": "Angkat kartu kerangka pendapat."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. I think a phone-free break is good because we can talk to our friends, but I miss my games."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan kalimat tersebut."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa belum bisa penuh — minta hanya frasa \"I think ... because ...\" dulu, lalu tambah \"but ...\" setelah siswa siap."
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi frasa per frasa sampai siswa bisa mengucapkan kalimat lengkap."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen to this. I think a phone-free break is good because we talk more and we rest our eyes, but I miss my games. What do you think?"
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add one more reason after because, use and to connect them."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Try that with a classmate.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan pendapat sendiri tanpa melihat buku, atau menulis satu kalimat respons tambahan di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-01.js",
    pattern_id: "PAT-8-01",
    title: "Phone-Free Break Time: Exchanging Views",
    short_title: "Phone-Free Break",
    grade: 8,
    genre: "Interpersonal",
    cluster: "A",
    topic: "Phone-Free Break Time",
    context: "Students discuss whether break time should be used without mobile phones and respond to different opinions.",
    context_id: "Siswa mendiskusikan apakah waktu istirahat sebaiknya digunakan tanpa ponsel dan menanggapi pendapat yang berbeda.",
    communicative_goal: "exchange and respond to opinions with reasons and contrasting ideas",
    communicative_goal_id: "bertukar dan menanggapi pendapat dengan alasan serta gagasan yang berlawanan",
    vocabulary_domain: ["phones", "break time", "friends", "communication"],
    input_anchor: "discussion cards",
    output_anchor: "paired opinion exchange",
    prerequisite_patterns: ["PAT-7-04", "PAT-7-24"],
    reusable_in: ["PAT-8-13", "PAT-9-01"],
    complexity_level: "Expand",
    notes: "TP PERTAMA Kelas 8 dan TP pertama tingkat EXPAND (transisi dari Acquire Kelas 7). target_pattern PAT-8-01 = 'I think ... because ... but ... / What do you think?' -- ekstensi LANGSUNG dari 'I think...because...' PAT-7-04 (bagian inti ini secara inheren mereaktivasi PAT-7-04 di kalimat target sendiri). DUA elemen BARU yang dibedakan eksplisit: (1) 'but [caveat]' = KUALIFIKASI/CAVEAT terhadap OPINI SENDIRI (opini seimbang/nuanced, mis. 'I think X is good because Y, but I prefer Z') -- BUKAN kontras dua-adjektiva PAT-7-06 ('big but light'), BUKAN konflik naratif PAT-7-22 ('but the forest became dark'); (2) 'What do you think?' = pertanyaan OPINI TERBUKA yang mengundang 'I think...' -- BUKAN pertanyaan Yes/No PAT-7-02 ('Do you/Can you...'); respons yang diharapkan adalah OPINI ('I think.../I agree.../I don't think so.'), bukan 'Yes/No'. Reaktivasi prerequisite: PAT-7-04 -- forms respons ('I agree.'/'I don't think so.'/'That's true.') dipakai sebagai lead-in respons sebelum opini sendiri (mis. 'I agree, but I think...because...'); PAT-7-24 -- sub-bentuk 'Everyone felt...because...' (past tense) dipakai sebagai HOOK pembuka topik tentang kejadian baru-baru ini di sekolah ('Yesterday, everyone felt surprised because the school announced a phone-free break time.'), support BUKAN target. forbidden_overlap (formal argumentation, analytical exposition, debate claims) KRUSIAL karena PAT-8-01 reusable_in PAT-8-13 (Exposition 'I believe...because...For example...', jauh lebih formal): PAT-8-01 WAJIB tetap register interpersonal/santai (obrolan antar teman), SATU alasan + SATU caveat -- TIDAK ada 'For example...', bukti terstruktur, atau struktur debat pro/kontra. Ekstensi opsional menambah satu alasan pendukung dengan 'and' di dalam 'I think...because... and ..., but...' -- menjaga head opini seimbang, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, class. Please take your seats." },
      { type: "AKSI", text: "Pastikan semua siswa duduk dan perhatian ke depan." },
      // HOOK
      { type: "UCAP", text: "Quick show of hands — who uses their phone during school break time?" },
      { type: "AKSI", text: "Tampilkan kartu diskusi: 'No phones at break time' versus 'Phones allowed at break time'." },
      { type: "UCAP", text: "The school is thinking about a phone-free break. What do you think about that idea?" },
    ],

    active_vocabulary: [
      "I think",
      "because",
      "but",
      "What do you think?",
      "I agree",
      "phones",
      "break time",
      "friends",
      "communication"
    ],

    model_sentences: [
      { id: "model_1", text: "Yesterday, everyone felt surprised because the school announced a phone-free break time." },
      { id: "model_2", text: "I think a phone-free break is good because we can talk to our friends, but I miss my games. What do you think?" },
      { id: "model_3", text: "I think break time is better with phones because we can relax, but we talk less. What do you think?" },
      { id: "model_4", text: "I agree, but I think phones help communication because we can chat with friends. What do you think?" }
    ],

    visual_cues: [
      { id: "visual_1", description: "Discussion cards with two contrasting statements: 'No phones at break time' and 'Phones allowed at break time', to trigger opinions.", description_id: "Kartu diskusi dengan dua pernyataan yang berlawanan: 'No phones at break time' dan 'Phones allowed at break time', untuk memicu pendapat.", asset_id: null },
      { id: "visual_2", description: "An opinion-frame card: 'I think ___ because ___, but ___. What do you think?'", description_id: "Kartu kerangka pendapat: 'I think ___ because ___, but ___. What do you think?'", asset_id: null },
      { id: "visual_3", description: "Icons for the topic: a mobile phone, friends talking face to face, a break-time clock, and chat bubbles (communication).", description_id: "Ikon untuk topiknya: ponsel, teman-teman mengobrol langsung, jam waktu istirahat, dan balon chat (komunikasi).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher taps the temple for 'I think', opens a hand for 'because', then tips the hand to the other side for 'but' to show a balanced caveat.", description_id: "Guru menepuk pelipis untuk 'I think', membuka tangan untuk 'because', lalu memiringkan tangan ke sisi lain untuk 'but' untuk menunjukkan catatan penyeimbang." },
      { id: "gesture_2", description: "Teacher opens both hands toward a partner while asking 'What do you think?' to invite an opinion.", description_id: "Guru membuka kedua tangan ke arah teman sambil bertanya 'What do you think?' untuk mengundang pendapat." },
      { id: "gesture_3", description: "Teacher nods for 'I agree' and shakes the head for 'I don't think so' to show response forms.", description_id: "Guru mengangguk untuk 'I agree' dan menggeleng untuk 'I don't think so' untuk menunjukkan bentuk responsnya." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher give a balanced opinion ('I think ... because ... but ...') and invite another ('What do you think?'), opening from a recent-event hook and showing a short response form.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-04", "PAT-7-24"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the balanced-opinion sentences ('I think ... because ... but ... What do you think?') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Build your own balanced opinion with a reason and a caveat, and invite a reply.",
      prompt: "Use the pattern 'I think [opinion] because [one reason], but [one caveat]. What do you think?' Make it about phone-free break time (phones, break time, friends, communication). Keep it casual -- one reason and one caveat, not a formal argument and no 'For example'.",
      change_target: ["opinion (I think ...)", "reason (because ...)", "caveat (but ...)"],
      differentiation: {
        easy: { task: "Use a discussion card and complete: 'I think ___ because ___, but ___. What do you think?'" },
        standard: { task: "Write your own balanced opinion about phone-free break time ('I think ... because ... but ...') and end with 'What do you think?'" },
        challenge: { task: "Write your balanced opinion, and also write a reply you could give to a classmate ('I agree, but I think ... because ...' or 'I don't think so. I think ... because ...')." }
      },
      support: { pattern_support: ["PAT-7-04"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Exchange opinions about phone-free break time with a partner, responding before giving your own view.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: give your balanced opinion ('I think ... because ... but ...') and ask 'What do you think?' Your partner responds with an opinion form ('I agree, but I think ...' / 'I don't think so. I think ...'), then asks back. You may open with the hook: 'Everyone felt surprised because of the phone-free break time.'",
      differentiation: {
        easy: { task: "Give your opinion from CHANGE and ask 'What do you think?' Your partner answers with 'I agree.' or 'I don't think so.' and one reason." },
        standard: { task: "Exchange opinions without reading. Respond with 'I agree, but I think ...' or 'I don't think so. I think ...', then ask back." },
        challenge: { task: "Keep the exchange going for two rounds. Each time, add a caveat ('but ...') and invite your partner with 'What do you think?'" }
      },
      support: { pattern_support: ["PAT-7-04", "PAT-7-24"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Exchange opinions about the topic with a new group (paired opinion exchange).",
      share_mode: "short_dialogue",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns: give your balanced opinion ('I think ... because ... but ...') and ask 'What do you think?' The others respond with an opinion form before adding their own view.",
      differentiation: {
        easy: { task: "Give your opinion to the group and ask 'What do you think?' One classmate replies with an opinion form." },
        standard: { task: "Exchange opinions with the group without reading, responding with 'I agree, but ...' / 'I don't think so. I think ...'." },
        challenge: { task: "Lead a short exchange: give your balanced opinion, invite two classmates, and respond to each with an opinion form before re-stating your view." }
      },
      support: { pattern_support: ["PAT-7-04"] }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students give a balanced opinion with one reason and one caveat ('I think ... because ... but ...') and invite a reply ('What do you think?')",
        "students use 'but' as a caveat on their own opinion (not a two-adjective contrast or a story conflict), and respond to 'What do you think?' with an opinion ('I think ... / I agree / I don't think so'), not 'Yes/No'",
        "students still turn it into a formal argument or add 'For example ...', instead of a short, casual opinion"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a second reason with 'and' while keeping one caveat.",
        needs_model: "Repeat the MODEL step, emphasizing 'I think ... because ... but ...' and 'What do you think?' as a casual exchange.",
        needs_repeat: "Do one more round of REPEAT (choral) on the balanced-opinion sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives an opinion without a caveat, or answers 'What do you think?' with 'Yes/No', or turns it into a formal argument",
        "relies only on the written opinion and cannot exchange without reading",
        "gives a balanced opinion and invites and responds to others accurately and confidently"
      ],
      action: [
        "recast the opinion slowly, modeling 'I think ... because ... but ...' as one casual, balanced sentence",
        "model one more balanced opinion on a different school topic to show the same pattern still works",
        "for a student who is ready, model ONE opinion with a second supporting reason joined by 'and' first -- 'I think a phone-free break is good because we talk more and we rest our eyes, but I miss my games. What do you think?' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the balanced-opinion head, with no 'For example' or formal argument"
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
