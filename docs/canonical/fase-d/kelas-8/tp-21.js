const skenario = {
  "persiapan": {
    "papan_tulis": "Subject: ___\nHi ___,\nI'm writing to ___.\nSee you soon, ___",
    "kartu": "Siapkan tiga kartu di meja guru — templat pesan digital di layar dengan empat bagian berlabel yang disorot (baris subjek, salam \"Hi ...\", isi \"I'm writing to ...\", penutup \"See you soon,\"), layar terbagi menunjukkan refleksi cerita TP sebelumnya di kiri dan pembuka email di kanan, dan email model lengkap di layar komputer sekolah (\"Subject: A Surprising School Discovery / Hi everyone, / I'm writing to ... / See you soon, Dito and Wulan\").",
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
        "teks": "Good morning. Dito and Wulan have something to share with the school."
      },
      {
        "tipe": "AKSI",
        "teks": "Kondisikan kelas dengan nada semi-formal sebelum memulai."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "If you found something incredible at school, how would you tell other people about it?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan templat pesan digital — tunjuk keempat bagian berlabel satu per satu ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this message template. What are the four parts of a well-structured email?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to write a complete digital message, Subject, greeting, purpose, and closing."
      }
    ]
  },
  "langkah": {
    "model": {
      "durasi_menit": 6,
      "intro": "Siswa hanya menonton dan mendengarkan — belum diminta melakukan apapun. Keempat bagian berikut membentuk SATU email utuh — bukan variasi independen.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk baris subjek di templat. Ketuk baris subjek di udara dengan jari seolah mengetik sambil mengucapkan \"Subject:\"."
        },
        {
          "tipe": "UCAP",
          "teks": "Subject: A Surprising School Discovery"
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk baris salam di templat. Lambaikan salam ke seluruh kelas sambil mengucapkan \"Hi everyone,\"."
        },
        {
          "tipe": "UCAP",
          "teks": "Hi everyone,"
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk baris isi di templat. Tunjuk ke depan dengan penuh tujuan sambil mengucapkan \"I'm writing to\". Tunjuk layar terbagi — tampilkan bagaimana refleksi cerita mengalir menjadi isi email."
        },
        {
          "tipe": "UCAP",
          "teks": "I'm writing to share a message about something amazing we found in the old storage room -- old letters and photos full of school memories!"
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk baris penutup di templat."
        },
        {
          "tipe": "UCAP",
          "teks": "See you soon, Dito and Wulan"
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
      "intro": "Guru mengucapkan satu bagian email — siswa menirukan bersama. Satu putaran per bagian. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Bagian 1 — Subject",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk baris subjek di templat. Ketuk baris subjek di udara sambil mengucapkan \"Subject:\"."
            },
            {
              "tipe": "UCAP",
              "teks": "Subject: A Surprising School Discovery"
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
          "label": "Bagian 2 — Greeting",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk baris salam di templat. Lambaikan salam ke kelas."
            },
            {
              "tipe": "UCAP",
              "teks": "Hi everyone,"
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
          "label": "Bagian 3 — Body",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk baris isi di templat. Tunjuk ke depan dengan penuh tujuan untuk \"I'm writing to\"."
            },
            {
              "tipe": "UCAP",
              "teks": "I'm writing to share a message about something amazing we found in the old storage room -- old letters and photos full of school memories!"
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
          "label": "Bagian 4 — Closing",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk baris penutup di templat."
            },
            {
              "tipe": "UCAP",
              "teks": "See you soon, Dito and Wulan"
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
          "teks": "Good. Now it is your turn. Write your own email."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk pola di papan tulis dan tunjuk email model lengkap. Minta siswa menyalin keempat bagian di buku catatan sebelum melanjutkan. Beri waktu dua menit untuk menyalin, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi tiga menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis satu email lengkap tentang penemuan di sekolah. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan templat pesan digital di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this format. Write a complete email with all four parts, Subject, Hi, I'm writing to, and See you soon."
        },
        {
          "tipe": "UCAP",
          "teks": "The body should share the discovery, not a story dialogue, not a recommendation, and not a casual chat."
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
          "teks": "Jika siswa tidak tahu harus menulis apa di bagian isi — tunjuk baris isi di templat dan minta siswa mulai dari \"I'm writing to share ...\""
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk baris subjek, dan minta siswa tulis \"Subject: A School Discovery.\" Tunggu siswa menulis satu baris, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan templat dan lengkapi semua empat bagian. Boleh lihat email model.",
        "standar": "Tulis email lengkap (semua empat bagian) tanpa melihat model.",
        "tantangan": "Tulis email lengkap dan tambahkan satu kalimat lagi di bagian isi tentang apa yang dapat dilakukan siswa lain dengan penemuan itu."
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
          "teks": "Minta Siswa A membacakan emailnya satu bagian per bagian (Subject, Hi, I'm writing to, See you soon)."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B memeriksa: Ada Subject? Ada salam \"Hi ...\"? Ada tujuan \"I'm writing to ...\"? Ada penutup \"See you soon,\"? Lalu tukar peran."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Read your email to your partner. Your partner checks for all four parts. Then swap."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk pola di papan tulis dan tanya \"What is your Subject line?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa menulis hanya salam dan isi tanpa Subject atau penutup — tunjuk pola dan minta siswa tambahkan bagian yang kurang."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca emailmu ke pasangan. Pasangan tunjuk setiap bagian dari keempat bagian.",
        "standar": "Baca email tanpa templat. Pasangan periksa semua empat bagian ada.",
        "tantangan": "Baca email dan pasangan tanya satu pertanyaan tentang penemuan dalam pesanmu — kamu jawab dalam satu kalimat."
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
          "teks": "The person I point to presents your email first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns presenting your digital message to the group."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, tunjuk baris subjek di templat, dan minta ucapkan \"Subject: ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambahkan satu kalimat lagi di bagian isi yang mengundang pembaca untuk datang melihat museum kecil."
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
        "mudah": "Baca emailmu ke kelompok.",
        "standar": "Presentasikan emailmu tanpa membaca.",
        "tantangan": "Presentasikan emailmu, lalu jawab satu pertanyaan dari kelompok tentang penemuan atau tujuan pesanmu."
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
          "teks": "Give me your Subject line. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menulis baris Subject yang jelas dan relevan dengan penemuan? Bukan tanpa Subject sama sekali?"
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
          "teks": "Your I'm writing to sentence. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menyatakan tujuan yang jelas dengan \"I'm writing to ...\" — bukan obrolan kasual dan bukan dialog cerita?"
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
          "teks": "Angkat kembali templat pesan digital."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan bagian pertama dan ketiga sekali lagi — beri isyarat tangan ke arah siswa setiap bagian."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu seluruh kelas mengucapkan bersama."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta siswa buka buku catatan — lengkapi atau perbaiki bagian yang belum selesai. Beri waktu dua menit."
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
          "teks": "Angkat templat pesan digital — tunjuk setiap bagian satu per satu."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Subject: A Surprising School Discovery. Hi everyone, I'm writing to share a message about old letters we found. See you soon, Dito and Wulan."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan satu bagian per satu."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try your own. What is your Subject?"
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan Subject mereka, lalu minta \"Hi who?\", lalu \"I'm writing to ...\", lalu \"See you soon, ...\""
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi sampai siswa siap mengucapkan keempat bagian berurutan tanpa bantuan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. You are all welcome to visit the storage room -- it is now our school's small memory room."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add one more sentence to the body of your email inviting readers to visit or learn more."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba menambahkan satu kalimat isi tambahan setelah \"I'm writing to ...\" yang mengundang pembaca."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. That sentence makes your email more inviting.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan keempat bagian email berurutan tanpa melihat buku, atau menulis email baru untuk penemuan sekolah yang berbeda menggunakan format yang sama di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-21.js",
    pattern_id: "PAT-8-21",
    title: "The Old Storage Room: Sharing the Discovery",
    short_title: "Storage Room Message",
    grade: 8,
    genre: "Functional",
    cluster: "A",
    topic: "Writing a Digital Message about a School Discovery",
    context: "After finding old letters in the storage room, students write an email or message to share the discovery with teachers and classmates.",
    context_id: "Setelah menemukan surat-surat lama di gudang, siswa menulis email atau pesan untuk membagikan penemuan itu kepada guru dan teman sekelas.",
    communicative_goal: "write a structured digital message with subject, greeting, purpose, and closing",
    communicative_goal_id: "menulis pesan digital terstruktur dengan subjek, salam, tujuan, dan penutup",
    vocabulary_domain: ["email", "discovery", "school", "message"],
    input_anchor: "story reflection and message draft",
    output_anchor: "digital message",
    prerequisite_patterns: ["PAT-8-20"],
    reusable_in: ["PAT-9-07", "PAT-9-10"],
    complexity_level: "Expand",
    notes: "TP ke-21 Kelas 8, genre Functional A 'Digital Communication' (cluster A). PENUTUP ARC 'The Old Storage Room Mystery' (5 TP, lintas 2 genre). SINGLE PREREQ: PAT-8-20. target_pattern PAT-8-21 = 'Subject: ... / Hi ... / I\\'m writing to ... / See you soon.' (FORMAT PESAN DIGITAL LENGKAP PERTAMA di korpus). Reaktivasi PAT-8-20 (WAJIB, VR-1): ISI pesan adalah RECAP/PARAFRASE dari resolusi TP-44 (museum sekolah & makna penemuan) -- jembatan konten naratif -> fungsional via kontinuitas input_anchor/output_anchor ('story reflection and message draft' dari TP-44 menjadi input_anchor di sini). 'email' terealisasi di CHANGE prompt dan INTERACT task (runtime). 'message' terealisasi di model_3. forbidden_overlap (interpersonal conversation, narrative dialogue, exposition paragraph): format SURAT/EMAIL UTUH (4 bagian: Subject/Hi/I\\'m writing to/See you soon), BUKAN obrolan kasual (PAT-8-01), BUKAN kutipan dialog cerita (PAT-8-19), BUKAN paragraf argumentatif 'I believe...because...' (PAT-8-13+). model_sentences 1-4 membentuk SATU EMAIL UTUH -- berbeda dari TP lain di mana setiap model adalah variasi independen. BOOST extension: tambah satu kalimat body email tentang ajakan mengunjungi museum kecil -- bukan mengulang model_3 verbatim.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Dito and Wulan have something to share with the school." },
      { type: "AKSI", text: "Kondisikan kelas dengan nada semi-formal sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "If you found something incredible at school, how would you tell other people about it?" },
      { type: "AKSI", text: "Tampilkan templat pesan digital di layar dengan empat bagian berlabel: Subject, Hi, body, closing." },
      { type: "UCAP", text: "Look at this message template. What are the four parts of a well-structured email?" },
    ],

    active_vocabulary: [
      "Subject:",
      "Hi",
      "I'm writing to",
      "See you soon,",
      "email",
      "discovery",
      "school",
      "message"
    ],

    model_sentences: [
      { id: "model_1", text: "Subject: A Surprising School Discovery" },
      { id: "model_2", text: "Hi everyone," },
      { id: "model_3", text: "I'm writing to share a message about something amazing we found in the old storage room -- old letters and photos full of school memories!" },
      { id: "model_4", text: "See you soon, Dito and Wulan" }
    ],

    visual_cues: [
      { id: "visual_1", description: "A digital message template on a screen, four labeled sections highlighted: Subject line, greeting (Hi ...), body (I'm writing to ...), and closing (See you soon,).", description_id: "Templat pesan digital di layar, empat bagian berlabel disorot: baris subjek, salam (Hi ...), isi (I'm writing to ...), dan penutup (See you soon,).", asset_id: null },
      { id: "visual_2", description: "A split screen: on the left, the story reflection from TP-44 ('The story shows that a small discovery ...'); on the right, the opening of the email being drafted -- showing content flowing from narrative to message.", description_id: "Layar terbagi: di kiri, refleksi cerita dari TP-44 ('The story shows that a small discovery ...'); di kanan, pembuka email yang sedang disusun -- menunjukkan konten mengalir dari narasi ke pesan.", asset_id: null },
      { id: "visual_3", description: "The complete model email displayed on a school computer screen: Subject / Hi everyone, / I'm writing to ... / See you soon, Dito and Wulan.", description_id: "Email model lengkap ditampilkan di layar komputer sekolah: Subject / Hi everyone, / I'm writing to ... / See you soon, Dito and Wulan.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher types an imaginary subject line in the air while saying 'Subject: ...'.", description_id: "Guru mengetik baris subjek khayalan di udara sambil mengucapkan 'Subject: ...'." },
      { id: "gesture_2", description: "Teacher waves a greeting to the class while saying 'Hi everyone,'.", description_id: "Guru melambaikan salam ke kelas sambil mengucapkan 'Hi everyone,'." },
      { id: "gesture_3", description: "Teacher points forward purposefully while saying 'I\\'m writing to ...' -- to signal a stated purpose.", description_id: "Guru menunjuk ke depan dengan penuh tujuan sambil mengucapkan 'I'm writing to ...' -- untuk menandai tujuan yang dinyatakan." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher write one complete digital message with all four parts: Subject, Hi, I'm writing to, See you soon -- using the story discovery as the content.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-20"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice reading the complete email aloud together as a class, part by part.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own complete digital email about a school discovery.",
      prompt: "Write an email with all four parts: Subject: ___ / Hi ___, / I'm writing to ___ / See you soon, ___. The body ('I'm writing to ...') should share something from the story -- a discovery, old letters, or school memories. Imagine you are sending this email to your school. Keep it a formal digital message -- not a casual chat ('Hey!'), not a story dialogue ('said Dito'), and not a recommendation paragraph.",
      change_target: ["subject line (Subject: ...)", "greeting (Hi ...)", "purpose (I'm writing to ...)", "closing (See you soon,)"],
      differentiation: {
        easy: { task: "Use the email template and complete all four parts. You may look at the model email on the screen." },
        standard: { task: "Write your complete email (all four parts) without looking at the model." },
        challenge: { task: "Write a complete email and add one more sentence in the body sharing what students can do with the discovery." }
      },
      support: { pattern_support: ["PAT-8-20"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Read your email message to a partner and check for all four parts.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns reading your email aloud. Your partner checks: Is there a Subject? A greeting (Hi ...)? A purpose (I'm writing to ...)? A closing (See you soon,)? Then swap.",
      differentiation: {
        easy: { task: "Read your email to your partner. Your partner points to each of the four parts." },
        standard: { task: "Read your email without the template. Your partner checks all four parts." },
        challenge: { task: "Read your email and your partner asks one question about the discovery in your message -- you answer in one sentence." }
      },
      support: { pattern_support: ["PAT-8-20"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your digital message to a new group (digital message).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your email ('Subject: ... / Hi ... / I'm writing to ... / See you soon,').",
      differentiation: {
        easy: { task: "Read your email to the group." },
        standard: { task: "Present your email without reading." },
        challenge: { task: "Present your email, then answer one question from the group about the discovery or the purpose of your message." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students write a complete digital message with Subject, Hi, I'm writing to, and See you soon",
        "students use 'I'm writing to ...' to state a clear purpose, not just to chat or tell a story",
        "students omit one or more parts (no subject, no closing) or write a casual chat instead of a structured email"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a second sentence to the email body.",
        needs_model: "Repeat the MODEL step, emphasizing that a digital message always has all four parts and 'I'm writing to ...' states the purpose.",
        needs_repeat: "Do one more round of REPEAT (choral) on the four-part email structure before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "writes only a greeting and message body without a subject line or closing",
        "writes all four parts but cannot present the email without reading",
        "writes a complete four-part digital message with a clear purpose accurately and confidently"
      ],
      action: [
        "recast the email structure slowly, modeling each of the four parts in order -- Subject / Hi / I'm writing to / See you soon -- and pointing to the template",
        "model one more short email on a different school topic (e.g. a school event) to show the same four-part format still works",
        "for a student who is ready, model ONE additional body sentence first -- 'You are all welcome to visit the storage room -- it is now our school's small memory room.' -- then invite that student to add one more sentence to the body of their own email inviting readers to visit or learn more; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the email format intact (not a story or an argument)"
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
