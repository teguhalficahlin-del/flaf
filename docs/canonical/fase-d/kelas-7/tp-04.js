const skenario = {
  "persiapan": {
    "papan_tulis": "I think (idea) because (reason).\nThat's true.\nI agree.\nI don't think so.",
    "kartu": "Siapkan tiga kartu respons — wajah mengangguk untuk I agree dan That's true, dan wajah menggeleng untuk I don't think so.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan foto kelas yang dibagi dua — satu sisi kotor dan satu sisi bersih — di meja guru."
      },
      {
        "tipe": "AKSI",
        "teks": "Siapkan empat ikon topik diskusi (sapu untuk clean, tempat sampah daur ulang untuk recycle, tangan bergandengan untuk teamwork, poster peraturan untuk rules)."
      }
    ]
  },
  "siapkan_kelas": {
    "settling": [
      {
        "tipe": "AKSI",
        "teks": "Berdiri di depan kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Morning, class! Find your seat quickly."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu sebentar hingga kelas kondusif."
      }
    ],
    "hook": [
      {
        "tipe": "AKSI",
        "teks": "Tunjukkan foto kelas yang dibagi dua — pegang dengan kedua tangan agar semua siswa bisa melihat."
      },
      {
        "tipe": "UCAP",
        "teks": "Take a look at this photo. Which side of the classroom looks better to you?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu beberapa siswa merespons — terima jawaban singkat dalam Bahasa Indonesia atau Bahasa Inggris."
      },
      {
        "tipe": "UCAP",
        "teks": "What do you think we should do to keep our classroom clean?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang menjawab dalam lima detik — tunjuk sisi bersih di foto dan tanya \"How do we get it like this?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Letakkan foto. Tunjuk ikon topik diskusi."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us think together about our classroom today."
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
          "teks": "Tunjuk foto kelas bersih — tepuk pelipis sendiri."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka tangan ke depan."
        },
        {
          "tipe": "UCAP",
          "teks": "I think we should keep our classroom clean because I like a clean classroom."
        },
        {
          "tipe": "AKSI",
          "teks": "Angguk dengan jempol ke atas — tunjuk kartu respons wajah mengangguk."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon tempat sampah daur ulang — tepuk pelipis."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka tangan ke depan."
        },
        {
          "tipe": "UCAP",
          "teks": "I think we should recycle paper because it helps the school."
        },
        {
          "tipe": "AKSI",
          "teks": "Angguk dengan jempol ke atas."
        },
        {
          "tipe": "UCAP",
          "teks": "I agree."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon tangan bergandengan — tepuk pelipis."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka tangan ke depan."
        },
        {
          "tipe": "UCAP",
          "teks": "Can you help with classroom jobs? Yes, I can. I think teamwork is important because everyone helps."
        },
        {
          "tipe": "AKSI",
          "teks": "Angguk dengan jempol ke atas."
        },
        {
          "tipe": "UCAP",
          "teks": "That's true."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon poster peraturan — tepuk pelipis."
        },
        {
          "tipe": "UCAP",
          "teks": "I think we need clear classroom rules."
        },
        {
          "tipe": "AKSI",
          "teks": "Lambaikan tangan pelan dari sisi ke sisi dan gelengkan kepala."
        },
        {
          "tipe": "UCAP",
          "teks": "I don't think so."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu respons wajah menggeleng."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan semua kartu dan ikon."
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
      "intro": "Guru mengucapkan satu kalimat atau pertukaran — siswa menirukan bersama. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Kalimat 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tepuk pelipis — buka tangan ke depan."
            },
            {
              "tipe": "UCAP",
              "teks": "I think teamwork is important because everyone helps."
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
              "teks": "Angguk dengan jempol ke atas."
            },
            {
              "tipe": "UCAP",
              "teks": "I agree."
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
            }
          ]
        },
        {
          "label": "Kalimat 3",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angguk dengan jempol ke atas."
            },
            {
              "tipe": "UCAP",
              "teks": "That's true."
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
            }
          ]
        },
        {
          "label": "Kalimat 4",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Lambaikan tangan pelan dan gelengkan kepala."
            },
            {
              "tipe": "UCAP",
              "teks": "I don't think so."
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
          "teks": "Good. Now write your own opinion."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk pola di papan tulis dan minta siswa membaca bersama sekali lagi sebelum melanjutkan."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis pendapat sendiri dengan alasan sederhana tentang menjaga kebersihan kelas. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel ikon topik diskusi di papan tulis di sebelah pola."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this pattern. Choose an idea from the icons, clean, recycle, teamwork, or rules."
        },
        {
          "tipe": "UCAP",
          "teks": "Write your opinion with a short reason. I think blank because blank. Keep the reason short."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang berhenti menulis lebih dari sepuluh detik atau belum menulis apapun."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah lima menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop writing. Now sit in groups of three or four."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu ide untuk ditulis — tunjuk ikon di papan tulis dan minta siswa pilih salah satu."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk ikon sapu di papan tulis, dan ucapkan \"I think we should clean our classroom. Because blank.\" Tunggu siswa melengkapi dan menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Lengkapi satu pendapat: I think blank because blank. Gunakan alasan pendek dari ikon, misalnya because everyone helps. Lalu pilih satu kartu respons untuk menanggapi teman.",
        "standar": "Tulis satu pendapat: I think blank because blank. Dan tulis dua respons berbeda yang bisa kamu gunakan untuk menanggapi teman: I agree, That's true, atau I don't think so.",
        "tantangan": "Tulis dua pendapat dengan alasan. Mulai satu dengan ajakan Let's terlebih dahulu, misalnya: Let's keep our classroom clean! I think that's a good idea because I like a clean classroom. Masukkan I like di salah satu alasan. Siapkan satu respons setuju dan satu I don't think so."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Tulis dua pendapat dengan alasan. Mulai satu dengan ajakan Let's terlebih dahulu, misalnya: Let's keep our classroom clean! I think that's a good idea because I like a clean classroom. Masukkan I like di salah satu alasan. Siapkan satu respons setuju dan satu I don't think so.",
        "perlu_bantuan": "Lengkapi satu pendapat: I think blank because blank. Gunakan alasan pendek dari ikon, misalnya because everyone helps. Lalu pilih satu kartu respons untuk menanggapi teman."
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Siswa duduk dalam kelompok tiga atau empat orang — guru yang menentukan komposisi kelompok.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tentukan komposisi kelompok (tiga atau empat siswa) — tunjuk secara eksplisit siapa bergabung dengan siapa."
        },
        {
          "tipe": "UCAP",
          "teks": "In your group, take turns. One person gives an opinion. The others respond with I agree, That's true, or I don't think so."
        },
        {
          "tipe": "UCAP",
          "teks": "Everyone must give at least one opinion and one response."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjukkan gesture — tepuk pelipis untuk memberi pendapat, angguk untuk setuju, geleng untuk tidak setuju."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk diskusi kelompok."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati beberapa kelompok dan pastikan semua anggota mendapat giliran berbicara."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop. Stay in your group for now."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok diam dan tidak ada yang memulai — tunjuk ikon sapu dan minta satu siswa ucapkan \"I think we should keep our classroom clean.\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke kelompok lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika semua anggota kelompok hanya setuju terus — minta satu siswa coba gunakan \"I don't think so.\" dan tunjuk kartu respons wajah menggeleng."
        }
      ],
      "diferensiasi": {
        "mudah": "Ucapkan pendapatmu dari buku catatan ke kelompok — boleh membaca. Lalu gunakan kartu respons untuk menanggapi satu teman.",
        "standar": "Sampaikan pendapatmu tanpa membaca, lalu tanggapi minimal dua teman dengan respons yang berbeda.",
        "tantangan": "Mulai dengan ajakan Let's, lalu sampaikan pendapat dengan alasan yang mengandung I like. Gunakan juga Can you help? Yes, I can. dalam diskusi tentang teamwork. Tanggapi teman lain, termasuk satu I don't think so."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Mulai dengan ajakan Let's, lalu sampaikan pendapat dengan alasan yang mengandung I like. Gunakan juga Can you help? Yes, I can. dalam diskusi tentang teamwork. Tanggapi teman lain, termasuk satu I don't think so.",
        "perlu_bantuan": "Ucapkan pendapatmu dari buku catatan ke kelompok — boleh membaca. Lalu gunakan kartu respons untuk menanggapi satu teman."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Setiap siswa bergabung dengan kelompok baru — bukan kelompok dari langkah INTERACT — dan berbagi pendapat utamanya.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk siapa bergabung dengan kelompok mana untuk membentuk kelompok baru."
        },
        {
          "tipe": "UCAP",
          "teks": "Form a new group of four with classmates from other groups."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok baru terbentuk dan tenang."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns. Say your main opinion: I think blank because blank. The others respond."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk semua anggota kelompok berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — dengarkan apakah siswa menggunakan respons yang beragam."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — dekati dan tunjuk pendapat di buku catatannya. Minta siswa membaca satu kalimat saja ke kelompok."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai berbicara jauh lebih cepat dari yang lain — minta siswa siapkan satu respons untuk setiap teman yang belum selesai berbicara."
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
        "mudah": "Sampaikan pendapat I think blank because blank ke kelompok baru — boleh membaca. Tanggapi satu teman dengan kartu respons.",
        "standar": "Sampaikan pendapat tanpa membaca, dan tanggapi minimal dua teman dengan respons yang berbeda.",
        "tantangan": "Sampaikan pendapat dengan ajakan Let's di depan dan alasan yang mengandung I like, lalu tanggapi teman lain termasuk satu I don't think so."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Sampaikan pendapat dengan ajakan Let's di depan dan alasan yang mengandung I like, lalu tanggapi teman lain termasuk satu I don't think so.",
        "perlu_bantuan": "Sampaikan pendapat I think blank because blank ke kelompok baru — boleh membaca. Tanggapi satu teman dengan kartu respons."
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
          "teks": "Tell me your opinion about our classroom. I think blank because blank. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan pendapatnya."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menyertakan because dan alasan singkat?"
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan satu pendapat sederhana ke arah siswa lain."
        },
        {
          "tipe": "UCAP",
          "teks": "I think teamwork is important because everyone helps. What do you say?"
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa merespons dengan I agree, That's true, atau I don't think so."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah respons siswa sesuai dan tidak berupa penjelasan panjang?"
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
          "teks": "Angkat kembali ikon topik diskusi."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan satu pendapat dan satu respons sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu seluruh kelas mengucapkan bersama."
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
          "teks": "Tepuk pelipis sendiri perlahan."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. I think we should recycle paper because it helps the school."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan kalimat perlahan."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa ragu di bagian because — jeda setelah I think blank, tunjuk baris because di papan tulis, dan minta siswa melanjutkan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "I think teamwork is important because everyone helps. What about you?"
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Give your opinion, then ask: What about you? Just once."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Try with a classmate.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang pendapat dari buku catatan tanpa membaca, atau menulis satu pendapat tambahan dengan topik yang berbeda."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-04.js",
    pattern_id: "PAT-7-04",
    title: "Clean School: Sharing Simple Opinions",
    short_title: "Sharing Opinions",
    grade: 7,
    genre: "Interpersonal",
    cluster: "B",
    topic: "School Environment",
    context: "Students discuss ideas for keeping the classroom clean.",
    context_id: "Siswa mendiskusikan ide-ide untuk menjaga kebersihan kelas.",
    communicative_goal: "express and respond to simple opinions with reasons",
    communicative_goal_id: "menyampaikan dan menanggapi pendapat sederhana dengan alasan",
    vocabulary_domain: ["clean", "recycle", "teamwork", "rules"],
    input_anchor: "classroom photo",
    output_anchor: "small-group discussion",
    prerequisite_patterns: ["PAT-7-01", "PAT-7-02", "PAT-7-03"],
    reusable_in: ["PAT-8-01", "PAT-8-13", "PAT-9-01"],
    complexity_level: "Acquire",
    notes: "TP keempat Fase D dan TP PERTAMA yang menarget 'because'/alasan. target_pattern PAT-7-04 punya 4 sub-bentuk: (a) 'I think [X] because [Y]' (opini + alasan -- inti baru), (b) 'That's true.', (c) 'I agree.', (d) 'I don't think so.' (tiga bentuk respons). Keempatnya dimodelkan di model_sentences sebelum dipakai di INTERACT/SHARE (Checklist D). Tiga prerequisite direaktivasi sebagai support: PAT-7-03 ('Let's...!') sebagai LEAD-IN sebelum opini, PAT-7-02 ('Can you help...? Yes, I can.') terkait teamwork, dan PAT-7-01 ('I like...') sebagai BAGIAN DARI alasan ('...because I like a clean classroom.'). Sesuai forbidden_overlap, 'because [Y]' WAJIB tetap sangat sederhana (satu klausa A2, mis. 'because everyone helps') -- TIDAK ada argumentasi formal, eksposisi multi-kalimat, persuasi panjang, atau diskusi analitis ('on the other hand', dst). Ekstensi turn-taking opsional 'What about you?' (di luar empat sub-bentuk target, sekadar mengoper giliran -- bukan argumentasi) ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan satu contoh dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Morning, class! Find your seat quickly." },
      { type: "AKSI", text: "Tunggu sebentar hingga kelas kondusif." },
      // HOOK
      { type: "UCAP", text: "Take a look at this photo — which side of the classroom looks better to you?" },
      { type: "AKSI", text: "Tunjukkan foto kelas yang dibagi dua: satu sisi kotor, satu sisi bersih dan rapi." },
      { type: "UCAP", text: "What do you think we should do to keep our classroom clean?" },
    ],

    active_vocabulary: [
      "I think",
      "because",
      "That's true.",
      "I agree.",
      "I don't think so.",
      "clean",
      "recycle",
      "teamwork",
      "rules",
      "help"
    ],

    model_sentences: [
      { id: "model_1", text: "Let's keep our classroom clean! I think that's a good idea because I like a clean classroom." },
      { id: "model_2", text: "I think we should recycle paper because it helps the school. I agree." },
      { id: "model_3", text: "Can you help with classroom jobs? Yes, I can. I think teamwork is important because everyone helps. That's true." },
      { id: "model_4", text: "I think we need many rules. I don't think so." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A classroom photo split in two: one side untidy (litter on the floor, messy desks) and one side clean and tidy, to spark a discussion about keeping the classroom clean.", description_id: "Foto kelas yang dibagi dua: satu sisi tidak rapi (sampah di lantai, meja berantakan) dan satu sisi bersih dan rapi, untuk memicu diskusi tentang menjaga kebersihan kelas.", asset_id: null },
      { id: "visual_2", description: "Topic icons for the discussion: a broom (clean), a recycling bin with paper (recycle), several hands joined together (teamwork), and a class-rules poster (rules).", description_id: "Ikon topik untuk diskusi: sapu (bersih), tempat sampah daur ulang berisi kertas (daur ulang), beberapa tangan bergandengan (kerja sama), dan poster peraturan kelas (peraturan).", asset_id: null },
      { id: "visual_3", description: "Response cards: a nodding face for 'I agree. / That's true.' and a face shaking its head for 'I don't think so.'", description_id: "Kartu respons: wajah mengangguk untuk 'I agree. / That's true.' dan wajah menggeleng untuk 'I don't think so.'", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher taps their temple while saying 'I think...', then opens a hand forward while saying 'because...' to link the opinion to its reason.", description_id: "Guru menepuk pelipisnya sambil mengucapkan 'I think...', lalu membuka tangan ke depan sambil mengucapkan 'because...' untuk menghubungkan pendapat dengan alasannya." },
      { id: "gesture_2", description: "Teacher nods firmly with a thumbs-up while saying 'I agree. / That's true.'", description_id: "Guru mengangguk mantap dengan jempol ke atas sambil mengucapkan 'I agree. / That's true.'" },
      { id: "gesture_3", description: "Teacher waves a hand gently from side to side and shakes their head while saying 'I don't think so.'", description_id: "Guru melambaikan tangan pelan dari sisi ke sisi dan menggelengkan kepala sambil mengucapkan 'I don't think so.'" }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher give a simple opinion with a reason ('I think ... because ...') and respond to others with 'That's true.', 'I agree.', or 'I don't think so.'",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-01", "PAT-7-02", "PAT-7-03"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the opinions with reasons and the matching responses together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Make your own opinion with a simple reason about keeping the classroom clean, and choose how to respond to a classmate.",
      prompt: "Use the pattern 'I think [idea] because [reason].' with a short, simple reason. Replace the idea with one about keeping the classroom clean (clean, recycle, teamwork, rules). To respond to a classmate, use 'That's true.', 'I agree.', or 'I don't think so.'",
      change_target: ["idea (I think ...)", "reason (because ...)"],
      differentiation: {
        easy: { task: "Complete one opinion: 'I think ___ because ___.' using a short reason from the cues (e.g. 'because everyone helps'). Then choose one response card to reply to a classmate." },
        standard: { task: "Write one opinion 'I think ___ because ___.', and write two different responses you could give to classmates ('I agree.', 'That's true.', or 'I don't think so.')." },
        challenge: { task: "Write two opinions with reasons. Start one with a 'Let's...!' lead-in (e.g. 'Let's keep our classroom clean! I think that's a good idea because ...') and put 'I like...' inside one reason. Prepare one agreeing response and one 'I don't think so.' response." }
      },
      support: { pattern_support: ["PAT-7-01", "PAT-7-03"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Discuss ideas for keeping the classroom clean in a small group, giving opinions with reasons and responding to each other.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, take turns. One person gives an opinion ('I think ... because ...'); the others respond with 'I agree.', 'That's true.', or 'I don't think so.' Keep going until everyone has given at least one opinion and one response.",
      differentiation: {
        easy: { task: "Say your opinion from CHANGE to your group (you may read it), then respond to one classmate using a response card ('I agree.', 'That's true.', or 'I don't think so.')." },
        standard: { task: "Give your opinion without reading, then respond to at least two classmates using different responses." },
        challenge: { task: "Start with a 'Let's...!' lead-in, give your opinion with a reason that includes 'I like...', and use a 'Can you help...? Yes, I can.' exchange about teamwork in your discussion. Respond to others, including one 'I don't think so.'" }
      },
      support: { pattern_support: ["PAT-7-01", "PAT-7-02", "PAT-7-03"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Share your main opinion with a new group and respond to theirs.",
      share_mode: "oral_response",
      task: "Form a group of 4 with classmates from other groups (not your INTERACT group). Take turns saying your main opinion ('I think ... because ...') and listen to the others, responding with 'I agree.', 'That's true.', or 'I don't think so.'",
      differentiation: {
        easy: { task: "Say your 'I think ... because ...' opinion to the new group (you may read it), and respond to one classmate with a response card." },
        standard: { task: "Say your opinion without reading, and respond to at least two classmates with different responses." },
        challenge: { task: "Say your opinion with a 'Let's...!' lead-in and a reason that includes 'I like...', then respond to others, including one 'I don't think so.'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students give an opinion with a simple reason: 'I think ... because ...'",
        "students respond appropriately with 'I agree.', 'That's true.', or 'I don't think so.'",
        "students still give an opinion without a reason, or stretch the reason into a long, complex explanation beyond this stage"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to try a turn-taking question after giving an opinion.",
        needs_model: "Repeat the MODEL step, emphasizing 'I think ... because ...' as one smooth sentence and the three response forms.",
        needs_repeat: "Do one more round of REPEAT (choral) on the opinions and responses before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "hesitates to add a reason after 'I think...'",
        "relies only on the written opinion and cannot respond without reading it",
        "gives opinions with reasons and responds to others accurately and confidently"
      ],
      action: [
        "recast the opinion slowly, modeling 'I think ... because ...' as one smooth sentence with a short reason",
        "model one more opinion on a different classroom idea to show the same pattern still works",
        "for a student who is ready, model ONE turn-taking question first -- after giving an opinion, add 'What about you?' to invite a classmate's opinion -- then invite that student to try it once; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the talk a short exchange, not a long argument"
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
