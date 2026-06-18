const skenario = {
  "persiapan": {
    "papan_tulis": "I prefer ___ because ___.\nI'd rather ___ than ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu kegiatan setelah sekolah (berolahraga, bermusik, coding, menjadi relawan), kartu kerangka preferensi (\"I prefer ___ because ___\" dan \"I'd rather ___ than ___\"), dan kartu skala dua pilihan dengan tanda hati.",
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
        "teks": "Good afternoon, everyone. Let's settle down."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu kelas kondusif sebelum memulai."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "After school, what activity do you usually prefer, sports, music, or something else?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu kegiatan setelah sekolah — berolahraga, bermusik, coding, menjadi relawan — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these four options. Which would you rather do, and why?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to talk about personal preferences clearly."
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
          "teks": "Angkat kartu kerangka preferensi — letakkan tangan di dada, lalu tunjuk kartu musik sebagai pilihan."
        },
        {
          "tipe": "UCAP",
          "teks": "I think both are fun, but I prefer music because it helps me relax."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kerangka — angkat kartu kegiatan coding. Kembali letakkan tangan di dada, lalu tunjuk kartu coding."
        },
        {
          "tipe": "UCAP",
          "teks": "I prefer coding because I like solving problems."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat kartu skala dua pilihan — timbang kedua tangan dan miringkan ke sisi olahraga."
        },
        {
          "tipe": "UCAP",
          "teks": "I'd rather play sports than make music."
        },
        {
          "tipe": "AKSI",
          "teks": "Timbang kembali kedua tangan, miringkan ke sisi relawan, lalu buka kedua tangan ke arah siswa."
        },
        {
          "tipe": "UCAP",
          "teks": "I'd rather do volunteering than play games. What do you think?"
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
              "teks": "Angkat kartu kerangka preferensi — peragakan gesture letakkan tangan di dada, lalu tunjuk kartu musik."
            },
            {
              "tipe": "UCAP",
              "teks": "I think both are fun, but I prefer music because it helps me relax."
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
              "teks": "Angkat kartu kegiatan coding — peragakan gesture letakkan tangan di dada, lalu tunjuk kartu."
            },
            {
              "tipe": "UCAP",
              "teks": "I prefer coding because I like solving problems."
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
              "teks": "Angkat kartu skala dua pilihan — peragakan gesture timbang kedua tangan, miringkan ke sisi olahraga."
            },
            {
              "tipe": "UCAP",
              "teks": "I'd rather play sports than make music."
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
              "teks": "Timbang kembali kedua tangan, miringkan ke sisi relawan, lalu buka kedua tangan ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "I'd rather do volunteering than play games. What do you think?"
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
          "teks": "Good. Now it is your turn. Write your own preference."
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
      "intro": "Siswa mengganti kegiatan dan alasan dengan pilihan diri sendiri. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan kartu kegiatan dan kartu kerangka preferensi di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use these patterns. Write your personal preference about after-school activities."
        },
        {
          "tipe": "UCAP",
          "teks": "Choose your own activities and your own reason. Keep it personal, not which activity is more popular."
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
          "teks": "Jika siswa tidak tahu kata kerja yang sesuai untuk kegiatan yang dipilih — tunjuk kartu kegiatan di papan tulis dan minta siswa pilih salah satu sebagai contoh."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu kegiatan, dan minta siswa ucapkan \"I prefer ...\" lalu nama kegiatan yang mereka sukai. Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih dua kartu kegiatan dan lengkapi satu kalimat: \"I prefer ___ because ___.\" atau \"I'd rather ___ than ___.\"",
        "standar": "Tulis satu kalimat \"I prefer ... because ...\" dan satu kalimat \"I'd rather ... than ...\" tentang kegiatan setelah sekolah.",
        "tantangan": "Mulai dengan lead-in seimbang (\"I think both are fun, but ...\"), lalu nyatakan preferensi dengan alasan dan satu kalimat \"I'd rather ... than ...\""
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Mulai dengan lead-in seimbang (\"I think both are fun, but ...\"), lalu nyatakan preferensi dengan alasan dan satu kalimat \"I'd rather ... than ...\"",
        "perlu_bantuan": "Pilih dua kartu kegiatan dan lengkapi satu kalimat: \"I prefer ___ because ___.\" atau \"I'd rather ___ than ___.\""
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
          "teks": "Minta Siswa A bertanya \"Which do you prefer? What do you think?\""
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B menjawab dengan \"I prefer ... because ...\" atau \"I'd rather ... than ...\" lalu balik bertanya."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Your turn now. Interview the person next to you."
        },
        {
          "tipe": "UCAP",
          "teks": "Ask your partner about their after-school preferences. Then swap."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk kartu kegiatan di papan tulis dan minta siswa tanya \"Do you prefer sports or music?\""
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
        "mudah": "Tanyakan satu pertanyaan preferensi; pasangan jawab dengan \"I prefer ... because ...\". Lalu tukar peran.",
        "standar": "Wawancarai pasangan tentang dua kegiatan tanpa membaca buku; pasangan gunakan \"I prefer ... because ...\" dan \"I'd rather ... than ...\". Lalu tukar peran.",
        "tantangan": "Wawancarai pasangan, dan setelah setiap jawaban berikan preferensi sendiri dengan lead-in seimbang (\"I think both are fun, but I'd rather ...\"). Lalu tukar peran."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Wawancarai pasangan, dan setelah setiap jawaban berikan preferensi sendiri dengan lead-in seimbang (\"I think both are fun, but I'd rather ...\"). Lalu tukar peran.",
        "perlu_bantuan": "Tanyakan satu pertanyaan preferensi; pasangan jawab dengan \"I prefer ... because ...\". Lalu tukar peran."
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
          "teks": "Share your preferences with the group. Ask What do you think? so others can share theirs."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"I prefer ...\" lalu kegiatan favorit mereka sebagai pembuka. Jika masih diam — ucapkan nama siswa lalu tanya \"Do you prefer music or sports?\""
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
        "mudah": "Bagikan satu preferensi ke kelompok dan tanya \"What do you think?\"",
        "standar": "Bagikan dua preferensi (satu \"I prefer ...\", satu \"I'd rather ... than ...\") tanpa membaca buku.",
        "tantangan": "Bagikan preferensi dengan lead-in seimbang, lalu undang dan respons preferensi dua teman."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Bagikan preferensi dengan lead-in seimbang, lalu undang dan respons preferensi dua teman.",
        "perlu_bantuan": "Bagikan satu preferensi ke kelompok dan tanya \"What do you think?\""
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
          "teks": "Tell me your preference. Use the pattern."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan \"I prefer ... because ...\" dengan alasan yang jelas? Apakah ini pilihan personal, bukan perbandingan faktual?"
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
          "teks": "Your I'd rather sentence. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan dua kata kerja paralel setelah \"I'd rather ... than ...\"?"
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
          "teks": "Angkat kembali kartu skala dua pilihan."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan kalimat ketiga dan keempat sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Angkat kartu skala dua pilihan."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. I'd rather play sports than make music."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa belum bisa penuh — minta hanya \"I'd rather play sports\" dulu, lalu tambah \"than make music\" setelah siswa siap."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta siswa mencoba dengan kegiatan pilihan mereka sendiri."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. I'd rather do volunteering than play games because it helps people."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add because and a reason after your I'd rather sentence."
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
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan kedua kalimat preferensi tanpa melihat buku, atau menambah satu alasan pada kalimat \"I'd rather ... than ...\" mereka."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-02.js",
    pattern_id: "PAT-8-02",
    title: "After-School Activities: Expressing Preferences",
    short_title: "After-School Choices",
    grade: 8,
    genre: "Interpersonal",
    cluster: "A",
    topic: "After-School Activities",
    context: "Students compare different activities and explain which one they prefer and why.",
    context_id: "Siswa membandingkan berbagai kegiatan dan menjelaskan mana yang lebih mereka sukai serta alasannya.",
    communicative_goal: "express preferences and compare alternatives with reasons",
    communicative_goal_id: "menyampaikan preferensi dan membandingkan pilihan dengan alasan",
    vocabulary_domain: ["sports", "music", "coding", "volunteering"],
    input_anchor: "activity cards",
    output_anchor: "preference interview",
    prerequisite_patterns: ["PAT-8-01"],
    reusable_in: ["PAT-8-14", "PAT-9-03"],
    complexity_level: "Expand",
    notes: "TP kedua Kelas 8, Interpersonal, Expand. target_pattern PAT-8-02 = 'I prefer ... because ... / I'd rather ... than ...'. STRUKTUR BARU: 'I'd rather [verb] than [verb]' = modal 'would rather' + bare infinitive + 'than' + bare infinitive (DUA verba paralel) -- karena vocabulary_domain berbentuk nomina/domain (sports, music, coding, volunteering), model_sentences memakai verba yang sesuai (play sports, make music, do volunteering) agar gramatikal. forbidden_overlap (descriptive comparison, factual classification, formal evaluation): perbandingan WAJIB tetap PREFERENSI PRIBADI ('I'd rather play sports than make music' = pilihan personal), BUKAN perbandingan OBJEKTIF/FAKTUAL ('Sports are more popular than music'). Reaktivasi PAT-8-01 (WAJIB, VR-1): 'I think...because...but...' sebagai LEAD-IN sebelum preferensi ('I think both are fun, but I prefer ...'), dan 'What do you think?' dipakai ulang sebagai undangan dalam interview. Ekstensi opsional menambah alasan pada 'I'd rather ... than ... because ...' -- menjaga head preferensi, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good afternoon, everyone. Let's settle down." },
      { type: "AKSI", text: "Tunggu kelas kondusif sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "After school, what activity do you usually prefer — sports, music, or something else?" },
      { type: "AKSI", text: "Tampilkan kartu kegiatan setelah sekolah: berolahraga, bermusik, coding, menjadi relawan." },
      { type: "UCAP", text: "Look at these four options. Which would you rather do — and why?" },
    ],

    active_vocabulary: [
      "I prefer",
      "because",
      "I'd rather",
      "than",
      "sports",
      "music",
      "coding",
      "volunteering"
    ],

    model_sentences: [
      { id: "model_1", text: "I think both are fun, but I prefer music because it helps me relax." },
      { id: "model_2", text: "I prefer coding because I like solving problems." },
      { id: "model_3", text: "I'd rather play sports than make music." },
      { id: "model_4", text: "I'd rather do volunteering than play games. What do you think?" }
    ],

    visual_cues: [
      { id: "visual_1", description: "Activity cards for after-school choices: playing sports, making music, coding, and volunteering.", description_id: "Kartu kegiatan untuk pilihan setelah sekolah: berolahraga, bermusik, coding, dan menjadi relawan.", asset_id: null },
      { id: "visual_2", description: "A preference-frame card: 'I prefer ___ because ___' and 'I'd rather ___ than ___'.", description_id: "Kartu kerangka preferensi: 'I prefer ___ because ___' dan 'I'd rather ___ than ___'.", asset_id: null },
      { id: "visual_3", description: "A two-choice scale (this vs that) with a heart on the personally preferred option.", description_id: "Skala dua pilihan (ini vs itu) dengan hati pada opsi yang lebih disukai secara pribadi.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher places a hand on the chest, then points to a preferred card, while saying 'I prefer ... because ...'.", description_id: "Guru meletakkan tangan di dada, lalu menunjuk kartu yang disukai, sambil mengucapkan 'I prefer ... because ...'." },
      { id: "gesture_2", description: "Teacher weighs two hands and tips toward one side while saying 'I'd rather ... than ...'.", description_id: "Guru menimbang kedua tangan dan memiringkannya ke satu sisi sambil mengucapkan 'I'd rather ... than ...'." },
      { id: "gesture_3", description: "Teacher opens both hands toward a partner while asking 'What do you think?'", description_id: "Guru membuka kedua tangan ke arah teman sambil bertanya 'What do you think?'" }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher express personal preferences with 'I prefer ... because ...' and 'I'd rather ... than ...', after a balanced lead-in, and invite a reply.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-01"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the preference sentences ('I prefer ... because ...' / 'I'd rather ... than ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Express your own preferences by replacing the activities and reasons.",
      prompt: "Use the patterns 'I prefer [activity] because [reason].' and 'I'd rather [verb] than [verb].' Make it a personal choice about after-school activities (play sports, make music, learn coding, do volunteering) -- your preference, not which one is more popular.",
      change_target: ["preference (I prefer ...)", "reason (because ...)", "alternative (I'd rather ... than ...)"],
      differentiation: {
        easy: { task: "Choose two activity cards and complete one sentence: 'I prefer ___ because ___.' or 'I'd rather ___ than ___.'" },
        standard: { task: "Write one 'I prefer ... because ...' sentence and one 'I'd rather ... than ...' sentence about after-school activities." },
        challenge: { task: "Start with a balanced lead-in ('I think both are fun, but ...'), then state your preference with a reason and an 'I'd rather ... than ...' choice." }
      },
      support: { pattern_support: ["PAT-8-01"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Interview a partner about their after-school preferences (preference interview).",
      interaction_mode: "pair",
      task: "Find a partner. Take turns interviewing each other: ask 'Which do you prefer ...? What do you think?' Your partner answers with 'I prefer ... because ...' or 'I'd rather ... than ...'. Then swap roles.",
      differentiation: {
        easy: { task: "Ask your partner one preference question; your partner answers with 'I prefer ... because ...'. Then swap." },
        standard: { task: "Interview your partner about two activities without reading; your partner uses both 'I prefer ... because ...' and 'I'd rather ... than ...'. Then swap." },
        challenge: { task: "Interview your partner, and after each answer give your own preference with a balanced lead-in ('I think both are fun, but I'd rather ...'). Then swap." }
      },
      support: { pattern_support: ["PAT-8-01"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Share your after-school preferences with a new group.",
      share_mode: "short_dialogue",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns sharing your own preferences ('I prefer ... because ...' / 'I'd rather ... than ...') and ask 'What do you think?' so others share theirs.",
      differentiation: {
        easy: { task: "Share one preference with the group and ask 'What do you think?'" },
        standard: { task: "Share two preferences (one 'I prefer ...', one 'I'd rather ... than ...') without reading." },
        challenge: { task: "Share your preferences with a balanced lead-in, then invite and respond to two classmates' preferences." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students express a personal preference with 'I prefer ... because ...' and 'I'd rather ... than ...'",
        "students keep it a personal choice (not a factual claim like 'X is more popular than Y') and use two parallel verbs after 'I'd rather ... than ...'",
        "students still leave out the reason, or compare the options objectively instead of choosing"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a reason after 'I'd rather ... than ...'.",
        needs_model: "Repeat the MODEL step, emphasizing 'I prefer ... because ...' and 'I'd rather [verb] than [verb]'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the preference sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "leaves out the reason, or makes an objective comparison instead of a personal choice",
        "relies only on the written sentences and cannot share a preference without reading",
        "expresses preferences with 'I prefer ... because ...' and 'I'd rather ... than ...' accurately and confidently"
      ],
      action: [
        "recast the preference slowly, modeling 'I prefer ... because ...' and 'I'd rather [verb] than [verb]'",
        "model one more preference on a different choice to show the same pattern still works",
        "for a student who is ready, model ONE 'I'd rather ... than ...' with a reason first -- 'I'd rather do volunteering than play games because it helps people.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the preference head, not an objective comparison"
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
