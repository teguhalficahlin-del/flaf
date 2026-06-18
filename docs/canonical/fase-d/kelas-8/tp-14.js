const skenario = {
  "persiapan": {
    "papan_tulis": "One reason is that ___.\nAnother reason is that ___.",
    "kartu": "Siapkan tiga kartu di meja guru — profil siswa yang menunjukkan berbagai alasan bergabung klub (belajar keterampilan, mencari teman, mendapatkan pengalaman), peta alasan (satu posisi di tengah dengan cabang \"One reason is that ___\" dan \"Another reason is that ___\"), dan kartu ikon (lencana keterampilan, sekelompok teman, sertifikat pengalaman, tanda klub).",
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
        "teks": "Morning, class. I want you thinking critically today."
      },
      {
        "tipe": "AKSI",
        "teks": "Cek apakah semua siswa membawa catatan dari sesi sebelumnya."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Think about a school club you are in, or would like to join. Why is it worth your time?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan profil siswa dengan berbagai alasan bergabung klub — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these student profiles. What reasons do they give, and can you add your own?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to support one position with more than one reason, using One reason is that and Another reason is that."
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
          "teks": "Letakkan tangan di dada untuk \"I believe\" — buka tangan untuk \"because\" — angkat satu jari untuk \"For example\"."
        },
        {
          "tipe": "UCAP",
          "teks": "I believe joining a club is useful because it helps students grow. For example, they learn new things."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat satu jari sambil tunjuk ke peta alasan. Angkat jari kedua — tarik kedua alasan ke posisi pusat."
        },
        {
          "tipe": "UCAP",
          "teks": "One reason is that clubs build new skills. Another reason is that they help students make friends."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat satu jari — angkat jari kedua — tarik kembali ke posisi pusat."
        },
        {
          "tipe": "UCAP",
          "teks": "One reason is that members gain experience. Another reason is that they enjoy teamwork."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat satu jari — angkat jari kedua — tarik kembali ke posisi pusat."
        },
        {
          "tipe": "UCAP",
          "teks": "One reason is that clubs are fun. Another reason is that they prepare students for the future."
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
              "teks": "Letakkan tangan di dada — buka tangan untuk \"because\" — angkat satu jari untuk \"For example\"."
            },
            {
              "tipe": "UCAP",
              "teks": "I believe joining a club is useful because it helps students grow. For example, they learn new things."
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
              "teks": "Angkat satu jari — angkat jari kedua — tarik kembali ke posisi pusat."
            },
            {
              "tipe": "UCAP",
              "teks": "One reason is that clubs build new skills. Another reason is that they help students make friends."
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
              "teks": "Angkat satu jari — angkat jari kedua — tarik kembali ke posisi pusat."
            },
            {
              "tipe": "UCAP",
              "teks": "One reason is that members gain experience. Another reason is that they enjoy teamwork."
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
              "teks": "Angkat satu jari — angkat jari kedua — tarik kembali ke posisi pusat."
            },
            {
              "tipe": "UCAP",
              "teks": "One reason is that clubs are fun. Another reason is that they prepare students for the future."
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
          "teks": "Good. Now it is your turn. Support your position with two reasons."
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
      "intro": "Siswa mendukung posisi tentang bergabung klub dengan dua alasan versi sendiri. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan profil siswa dan peta alasan di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use these patterns. Give two reasons for joining a club."
        },
        {
          "tipe": "UCAP",
          "teks": "Both reasons must support the same position, not Most, not First, and not a story."
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
          "teks": "Jika siswa tidak tahu alasan apa yang akan ditulis — tunjuk profil siswa di papan tulis dan minta siswa pilih salah satu alasan sebagai titik awal."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk ikon lencana keterampilan, dan minta siswa ucapkan \"One reason is that clubs build ...\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan profil siswa dan lengkapi: \"One reason is that ___. Another reason is that ___.\"",
        "standar": "Tulis dua alasan paralel untuk bergabung dengan klub (\"One reason is that ... Another reason is that ...\").",
        "tantangan": "Mulai dengan posisimu (\"I believe joining a club is useful because ...\"), lalu berikan dua alasan dengan \"One reason is that ... Another reason is that ...\""
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
          "teks": "In your group, choose one position about clubs. Take turns adding a reason."
        },
        {
          "tipe": "UCAP",
          "teks": "Together, build a reason map that supports the same position."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk membangun peta alasan bersama."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — amati apakah setiap anggota sudah menyumbang setidaknya satu alasan."
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
          "teks": "Jika kelompok diam lebih dari sepuluh detik — tunjuk profil siswa pertama dan tanya \"Why is joining a club useful?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika anggota kelompok berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum melanjutkan."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa mendominasi — tunjuk siswa lain dan minta mereka tambahkan alasan berikutnya."
        }
      ],
      "diferensiasi": {
        "mudah": "Tambahkan satu alasan ke peta kelompok (\"One reason is that ___\"). Boleh membaca.",
        "standar": "Tambahkan dua alasan tanpa membaca, keduanya mendukung posisi yang sama.",
        "tantangan": "Nyatakan posisi, lalu tambahkan dua alasan, dan pastikan semua alasan kelompok mendukung klaim yang sama."
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
          "teks": "The person I point to presents your reason map first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns presenting a position and its reasons to the group."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, tunjuk peta alasan, dan minta ucapkan \"One reason is that ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambahkan alasan ketiga dengan \"A third reason is that ...\""
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
        "mudah": "Presentasikan dua alasan ke kelompok baru. Boleh membaca.",
        "standar": "Presentasikan posisi dan dua alasan tanpa membaca.",
        "tantangan": "Presentasikan posisi dan alasan-alasanmu, lalu jawab satu pertanyaan tentang satu alasan dari kelompok."
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
          "teks": "Give me your One reason sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa memberikan alasan yang mendukung posisi yang jelas? Apakah ini alasan paralel, bukan daftar ciri atau urutan langkah?"
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
          "teks": "Your Another reason sentence. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah alasan kedua mendukung posisi yang sama dengan alasan pertama?"
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
          "teks": "Angkat kembali peta alasan."
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
          "teks": "Angkat peta alasan."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. One reason is that clubs build new skills. Another reason is that they help students make friends."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try with your own reasons. One reason is that..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk profil siswa — tunggu siswa melengkapi, lalu minta \"Another reason is that ...\""
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi sampai siswa siap mengucapkan dua alasan tanpa bantuan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. One reason is that clubs build skills. Another reason is that they make friends. A third reason is that they give real experience."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add a third reason with A third reason is that."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba menambahkan alasan ketiga."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Three reasons make a stronger argument.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan dua alasan paralel tanpa melihat buku, atau menulis dua alasan untuk topik yang berbeda di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-14.js",
    pattern_id: "PAT-8-14",
    title: "After-School Clubs: Building Arguments",
    short_title: "School Clubs",
    grade: 8,
    genre: "Exposition",
    cluster: "A",
    topic: "After-School Clubs",
    context: "Students give multiple reasons for joining an extracurricular club.",
    context_id: "Siswa memberikan beberapa alasan untuk bergabung dengan klub ekstrakurikuler.",
    communicative_goal: "support one position using more than one reason",
    communicative_goal_id: "mendukung satu posisi menggunakan lebih dari satu alasan",
    vocabulary_domain: ["clubs", "skills", "friends", "experience"],
    input_anchor: "student profiles",
    output_anchor: "reason map",
    prerequisite_patterns: ["PAT-8-13"],
    reusable_in: ["PAT-9-01", "PAT-9-03"],
    complexity_level: "Expand",
    notes: "TP keempat belas Kelas 8, Exposition (cluster A -- Building Arguments). target_pattern PAT-8-14 = 'One reason is ... Another reason is ...' (mengorganisasi beberapa alasan pendukung untuk SATU klaim). Reaktivasi PAT-8-13 (WAJIB, VR-1): 'I believe [join a club] because [satu alasan]. For example, [bukti].' -> 'One reason is that [X]. Another reason is that [Y].' (ekspansi dari SATU alasan ke BEBERAPA alasan paralel untuk POSISI yang sama). forbidden_overlap (listing factual characteristics, chronological explanation, narrative sequencing): 'One reason.../Another reason...' BUKAN 'Most.../Some...' (PAT-8-06 report), BUKAN 'First,.../Next,...' (PAT-8-10 process), BUKAN 'One day.../Then...' (narasi). 'that' = complementizer ('One reason is that ...'), fungsi gramatikal dasar. vocabulary_domain (clubs, skills, friends, experience) muncul di bahasa target. Ekstensi opsional menambah alasan ketiga ('A third reason is that ...') -- menjaga head argumen multi-alasan, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Morning, class. I want you thinking critically today." },
      { type: "AKSI", text: "Cek apakah semua siswa membawa catatan dari sesi sebelumnya." },
      // HOOK
      { type: "UCAP", text: "Think about a school club you are in — or would like to join. Why is it worth your time?" },
      { type: "AKSI", text: "Tampilkan profil siswa dengan berbagai alasan bergabung klub: belajar keterampilan, mencari teman, mendapatkan pengalaman." },
      { type: "UCAP", text: "Look at these student profiles. What reasons do they give — and can you add your own?" },
    ],

    active_vocabulary: [
      "One reason is",
      "Another reason is",
      "that",
      "clubs",
      "skills",
      "friends",
      "experience",
      "students"
    ],

    model_sentences: [
      { id: "model_1", text: "I believe joining a club is useful because it helps students grow. For example, they learn new things." },
      { id: "model_2", text: "One reason is that clubs build new skills. Another reason is that they help students make friends." },
      { id: "model_3", text: "One reason is that members gain experience. Another reason is that they enjoy teamwork." },
      { id: "model_4", text: "One reason is that clubs are fun. Another reason is that they prepare students for the future." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Student profiles showing different reasons for joining clubs: learning skills, making friends, gaining experience.", description_id: "Profil siswa yang menunjukkan berbagai alasan bergabung dengan klub: belajar keterampilan, mencari teman, mendapatkan pengalaman.", asset_id: null },
      { id: "visual_2", description: "A reason map: one position in the center with branches 'One reason is that ...' and 'Another reason is that ...'.", description_id: "Peta alasan: satu posisi di tengah dengan cabang 'One reason is that ...' dan 'Another reason is that ...'.", asset_id: null },
      { id: "visual_3", description: "Icons: a skill badge, a group of friends, an experience certificate, a club sign.", description_id: "Ikon: lencana keterampilan, sekelompok teman, sertifikat pengalaman, tanda klub.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher holds up one finger while saying 'One reason is that ...'.", description_id: "Guru mengangkat satu jari sambil mengucapkan 'One reason is that ...'." },
      { id: "gesture_2", description: "Teacher holds up a second finger while saying 'Another reason is that ...'.", description_id: "Guru mengangkat jari kedua sambil mengucapkan 'Another reason is that ...'." },
      { id: "gesture_3", description: "Teacher draws both reasons back to one central position to show they support the same claim.", description_id: "Guru menggambar kembali kedua alasan ke satu posisi pusat untuk menunjukkan keduanya mendukung klaim yang sama." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher expand a single-reason position into several parallel reasons with 'One reason is that ... Another reason is that ...'.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-13"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the multi-reason sentences ('One reason is that ... Another reason is that ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Support a position about joining a club with more than one reason.",
      prompt: "Use the pattern 'One reason is that [reason 1]. Another reason is that [reason 2].' Give two reasons for joining a club (clubs, skills, friends, experience). Both reasons support the SAME position -- not 'Most ...' (report), not 'First, ...' (process), not 'One day ...' (story).",
      change_target: ["first reason (One reason is that ...)", "second reason (Another reason is that ...)"],
      differentiation: {
        easy: { task: "Use a student profile and complete: 'One reason is that ___. Another reason is that ___.'" },
        standard: { task: "Write two parallel reasons for joining a club ('One reason is that ... Another reason is that ...')." },
        challenge: { task: "Start with your position ('I believe joining a club is useful because ...'), then give two reasons with 'One reason is that ... Another reason is that ...'." }
      },
      support: { pattern_support: ["PAT-8-13"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Build a reason map together in a small group (reason map).",
      interaction_mode: "small_group",
      task: "In a group of 3-4, choose one position about clubs. Take turns adding a reason ('One reason is that ... / Another reason is that ...') so the group builds a reason map supporting that position.",
      differentiation: {
        easy: { task: "Add one reason to the group's map ('One reason is that ___.'). You may read." },
        standard: { task: "Add two reasons without reading, both supporting the same position." },
        challenge: { task: "State the position, then add two reasons, and check the group's reasons all support the same claim." }
      },
      support: { pattern_support: ["PAT-8-13"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your reason map to a new group (reason map).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting a position and its reasons ('One reason is that ... Another reason is that ...').",
      differentiation: {
        easy: { task: "Present two reasons to the new group. You may read them." },
        standard: { task: "Present your position and two reasons without reading." },
        challenge: { task: "Present your position and reasons, then answer one question about a reason from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students give more than one reason for one position with 'One reason is that ... Another reason is that ...'",
        "students keep the reasons parallel and supporting the same claim",
        "students still list characteristics ('Most ... / Some ...'), sequence steps ('First, ... Next, ...'), or tell a story ('One day ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a third reason.",
        needs_model: "Repeat the MODEL step, emphasizing 'One reason is that ...' and 'Another reason is that ...' supporting one position.",
        needs_repeat: "Do one more round of REPEAT (choral) on the multi-reason sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives only one reason, or lists characteristics/steps/story events instead of parallel reasons",
        "relies only on the written reasons and cannot present without reading",
        "supports one position with several reasons ('One reason is that ... Another reason is that ...') accurately and confidently"
      ],
      action: [
        "recast the reasons slowly, modeling 'One reason is that ...' and 'Another reason is that ...' for one position",
        "model one more two-reason argument on a different topic to show the same pattern still works",
        "for a student who is ready, model ONE argument with a third reason first -- 'One reason is that clubs build skills. Another reason is that they make friends. A third reason is that they give real experience.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the multi-reason head, not a list, a process, or a story"
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
