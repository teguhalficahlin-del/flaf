const skenario = {
  "persiapan": {
    "papan_tulis": "Step 1: ___\nBefore ___, ___.\nAfter ___, ___.\nRemember to ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu antarmuka aplikasi yang menunjukkan empat layar berurutan (layar login, daftar tugas, halaman tugas, konfirmasi pengiriman), kerangka instruksi terbimbing dengan empat slot berlabel (\"Step 1: ___\" / \"Before ___, ___.\" / \"After ___, ___.\" / \"Remember to ___.\"), dan ikon (layar login, daftar centang tugas, tombol submit, ikon simpan).",
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
        "teks": "Alright, class. Today we help someone navigate a new app."
      },
      {
        "tipe": "AKSI",
        "teks": "Pastikan kelas sudah siap dan perangkat tersedia jika diperlukan."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Have you ever had to explain to someone how to use an app? What did you say first?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu antarmuka aplikasi — tunjuk keempat layar berurutan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these app screens. What is the correct order to use this learning app?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to write practical guided instructions, using Step 1, Before, After, and Remember to."
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
          "teks": "Angkat satu jari sambil mengucapkan \"Step 1:\" — tunjuk kartu layar login."
        },
        {
          "tipe": "UCAP",
          "teks": "Step 1: Open the school learning application and log in with your username and password."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat tangan sebelum tindakan sambil mengucapkan \"Before\" — tunjuk kartu daftar tugas."
        },
        {
          "tipe": "UCAP",
          "teks": "Before you start an assignment, check the due date on the screen."
        },
        {
          "tipe": "AKSI",
          "teks": "Gerakkan tangan ke depan ke arah hasil sambil mengucapkan \"After\" — tunjuk kartu halaman tugas lalu kartu konfirmasi pengiriman."
        },
        {
          "tipe": "UCAP",
          "teks": "After you finish your work, click the submit button."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon simpan."
        },
        {
          "tipe": "UCAP",
          "teks": "Remember to save your work before you close the application."
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
              "teks": "Angkat satu jari sambil mengucapkan \"Step 1:\" — tunjuk kartu layar login."
            },
            {
              "tipe": "UCAP",
              "teks": "Step 1: Open the school learning application and log in with your username and password."
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
              "teks": "Angkat tangan sebelum tindakan sambil mengucapkan \"Before\" — tunjuk kartu daftar tugas."
            },
            {
              "tipe": "UCAP",
              "teks": "Before you start an assignment, check the due date on the screen."
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
              "teks": "Gerakkan tangan ke depan ke arah hasil sambil mengucapkan \"After\" — tunjuk kartu konfirmasi pengiriman."
            },
            {
              "tipe": "UCAP",
              "teks": "After you finish your work, click the submit button."
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
              "teks": "Tunjuk ikon simpan."
            },
            {
              "tipe": "UCAP",
              "teks": "Remember to save your work before you close the application."
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
          "teks": "Good. Now it is your turn. Write your own instruction guide."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk pola di papan tulis dan tunjuk kerangka instruksi. Minta siswa menyalin pola di buku catatan sebelum melanjutkan. Beri waktu dua menit untuk menyalin, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi tiga menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis petunjuk terbimbing untuk menggunakan aplikasi sekolah. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan kartu antarmuka dan kerangka instruksi di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use these markers. Write one instruction for each: Step 1, Before, After, and Remember to."
        },
        {
          "tipe": "UCAP",
          "teks": "Direct your instructions to the reader, not students log in, and not First, then, finally."
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
          "teks": "Jika siswa tidak tahu kata kerja imperatif apa yang digunakan — tunjuk kartu layar login dan minta siswa mulai dari \"Open the ...\""
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu layar login, dan minta siswa ucapkan \"Step 1: Open the application ...\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kerangka instruksi dan lengkapi setiap slot. Boleh lihat kartu antarmuka.",
        "standar": "Tulis semua empat petunjuk terbimbing tanpa membaca.",
        "tantangan": "Tulis semua empat petunjuk terbimbing dan tambahkan \"Step 2:\" untuk tindakan bernomor kedua dalam panduan."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Tulis semua empat petunjuk terbimbing dan tambahkan \"Step 2:\" untuk tindakan bernomor kedua dalam panduan.",
        "perlu_bantuan": "Gunakan kerangka instruksi dan lengkapi setiap slot. Boleh lihat kartu antarmuka."
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
          "teks": "Minta Siswa A memberi panduan instruksinya kepada Siswa B — Siswa B membaca kembali dan memeriksa: Ada \"Step 1:\"? Ada \"Before\"? Ada \"After\"? Ada \"Remember to\"? Tunjuk setiap penanda. Lalu tukar peran."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Exchange your instruction guides. Your partner checks for all four markers. Then swap and give feedback."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk kartu layar login dan tanya \"What is the first step in your guide?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa menulis \"students log in\" (orang ketiga) — tunjuk pola dan minta siswa ganti ke imperatif langsung ke pembaca: \"log in.\""
        }
      ],
      "diferensiasi": {
        "mudah": "Baca panduan pasanganmu dan tandai setiap penanda (Step 1, Before, After, Remember to).",
        "standar": "Baca panduan pasangan, periksa semua empat penanda, dan katakan mana yang paling jelas.",
        "tantangan": "Baca panduan pasangan dan tanya: \"What happens if I forget the step before submitting?\" — pasangan jawab dengan satu instruksi lagi."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Baca panduan pasangan dan tanya: \"What happens if I forget the step before submitting?\" — pasangan jawab dengan satu instruksi lagi.",
        "perlu_bantuan": "Baca panduan pasanganmu dan tandai setiap penanda (Step 1, Before, After, Remember to)."
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
          "teks": "The person I point to presents your instruction guide first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns presenting your guide to the group."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, tunjuk kartu layar login, dan minta ucapkan \"Step 1: Open ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambahkan \"Step 2:\" untuk tindakan bernomor kedua."
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
        "mudah": "Baca panduan instruksimu ke kelompok.",
        "standar": "Presentasikan panduan instruksimu tanpa membaca.",
        "tantangan": "Presentasikan panduan instruksimu, lalu jawab satu pertanyaan dari kelompok tentang salah satu langkah spesifik."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Presentasikan panduan instruksimu, lalu jawab satu pertanyaan dari kelompok tentang salah satu langkah spesifik.",
        "perlu_bantuan": "Baca panduan instruksimu ke kelompok."
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
          "teks": "Give me your Step 1 instruction. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan kata kerja imperatif yang ditujukan kepada pembaca (\"Open\", \"Log in\")? Bukan deskripsi orang ketiga (\"students open\") dan bukan langkah generik (\"First,\")?"
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
          "teks": "Your Remember to instruction. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menyatakan pengingat yang jelas dengan \"Remember to ...\" diikuti kata kerja imperatif?"
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
          "teks": "Angkat kembali kerangka instruksi."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan kalimat pertama dan keempat sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Angkat kartu antarmuka layar login."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Step 1: Open the school learning application and log in."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk perbedaan: \"the student opens\" (orang ketiga, bukan instruksi) versus \"Open the application\" (imperatif, ditujukan ke pembaca)."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try. Before you start..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu daftar tugas — tunggu siswa melengkapi \"Before you start an assignment, ...\""
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi sampai siswa siap mengucapkan keempat penanda dengan kata kerja imperatif yang tepat tanpa bantuan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. If you cannot log in to the application, ask your teacher for help and try again."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add one troubleshooting instruction to the end of your guide."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba menambahkan satu instruksi pemecahan masalah setelah \"Remember to ...\""
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. That instruction helps users when something goes wrong.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan keempat petunjuk terbimbing berurutan tanpa melihat buku, atau menulis panduan instruksi untuk aplikasi atau alat digital sekolah yang berbeda di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-22.js",
    pattern_id: "PAT-8-22",
    title: "School Learning App: Creating Guided Instructions",
    short_title: "Learning App Guide",
    grade: 8,
    genre: "Functional",
    cluster: "A",
    topic: "Using a School Learning Application",
    context: "Students create simple guided instructions to help new users access assignments and submit their work.",
    context_id: "Siswa membuat petunjuk terbimbing sederhana untuk membantu pengguna baru mengakses tugas dan mengumpulkan pekerjaan mereka.",
    communicative_goal: "write clear guided instructions with ordered actions and reminders",
    communicative_goal_id: "menulis petunjuk terbimbing yang jelas dengan langkah-langkah berurutan dan pengingat",
    vocabulary_domain: ["application", "login", "assignment", "submit"],
    input_anchor: "app interface cards",
    output_anchor: "instruction guide",
    prerequisite_patterns: ["PAT-8-21"],
    reusable_in: ["PAT-9-08", "PAT-9-10"],
    complexity_level: "Expand",
    notes: "TP ke-22 Kelas 8, genre Functional A 'Guided Instructions' (cluster A). SINGLE PREREQ: PAT-8-21. target_pattern PAT-8-22 = 'Step 1: ... / Before ..., ... / After ..., ... / Remember to ...' (petunjuk praktis bernomor + marker temporal). Reaktivasi PAT-8-21 (WAJIB, VR-1): TEMATIK (sama-sama teks fungsional digital untuk konteks sekolah) -- bukan reaktivasi struktur kalimat literal, melainkan TRANSISI FORMAT: dari email (4 bagian: Subject/Hi/body/closing) ke petunjuk bernomor dengan marker temporal (Step/Before/After/Remember to). Fokus pada FORMAT BARU yang berbeda total dari PAT-8-21. forbidden_overlap (explanation of natural processes, procedure as generic genre, recount chronology): format PETUNJUK NYATA bernomor + marker Before/After/Remember to, IMPERATIF kepada pembaca ('you'), KHUSUS app sekolah -- BUKAN 'First,/Then,/Finally,' generik ala PAT-7-09, BUKAN deskripsi proses orang ketiga ala PAT-8-10 ('the customer searches...'). vocabulary_domain (application, login, assignment, submit) semua terealisasi di model_sentences. BOOST extension: tambah instruksi untuk situasi masalah/error -- merupakan KATEGORI BARU (troubleshooting) yang tidak muncul di model_sentences utama.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Alright, class. Today we help someone navigate a new app." },
      { type: "AKSI", text: "Pastikan kelas sudah siap dan perangkat tersedia jika diperlukan." },
      // HOOK
      { type: "UCAP", text: "Have you ever had to explain to someone how to use an app? What did you say first?" },
      { type: "AKSI", text: "Tampilkan kartu antarmuka aplikasi: layar login, daftar tugas, halaman tugas, konfirmasi pengiriman." },
      { type: "UCAP", text: "Look at these app screens. What is the correct order to use this learning app?" },
    ],

    active_vocabulary: [
      "Step 1:",
      "Before",
      "After",
      "Remember to",
      "application",
      "login",
      "assignment",
      "submit"
    ],

    model_sentences: [
      { id: "model_1", text: "Step 1: Open the school learning application and log in with your username and password." },
      { id: "model_2", text: "Before you start an assignment, check the due date on the screen." },
      { id: "model_3", text: "After you finish your work, click the submit button." },
      { id: "model_4", text: "Remember to save your work before you close the application." }
    ],

    visual_cues: [
      { id: "visual_1", description: "App interface cards showing four screens in sequence: login screen, assignment list, assignment page, and submit confirmation.", description_id: "Kartu antarmuka aplikasi yang menunjukkan empat layar berurutan: layar login, daftar tugas, halaman tugas, dan konfirmasi pengiriman.", asset_id: null },
      { id: "visual_2", description: "A guided instruction frame with four labeled slots: 'Step 1: ___' / 'Before ___, ___.' / 'After ___, ___.' / 'Remember to ___.'", description_id: "Kerangka instruksi terbimbing dengan empat slot berlabel: 'Step 1: ___' / 'Before ___, ___.' / 'After ___, ___.' / 'Remember to ___.'", asset_id: null },
      { id: "visual_3", description: "Icons: a login screen, a checklist (assignment), a send/submit button, a save icon -- matching vocabulary_domain items.", description_id: "Ikon: layar login, daftar centang (tugas), tombol kirim/submit, ikon simpan -- sesuai item vocabulary_domain.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher raises one finger while saying 'Step 1:' -- to signal a numbered, ordered action.", description_id: "Guru mengangkat satu jari sambil mengucapkan 'Step 1:' -- untuk menandai tindakan bernomor dan berurutan." },
      { id: "gesture_2", description: "Teacher holds a hand up before the action while saying 'Before ...' -- to signal a prior check.", description_id: "Guru mengangkat tangan sebelum tindakannya sambil mengucapkan 'Before ...' -- untuk menandai pengecekan sebelumnya." },
      { id: "gesture_3", description: "Teacher moves a hand forward to the result while saying 'After ...' -- to signal a completed action leading to the next step.", description_id: "Guru menggerakkan tangan ke depan ke arah hasilnya sambil mengucapkan 'After ...' -- untuk menandai tindakan yang selesai mengarah ke langkah berikutnya." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher write practical guided instructions with 'Step 1:', 'Before', 'After', and 'Remember to' -- numbered actions + temporal markers directed at the reader, not a general explanation.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-21"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the guided instruction sentences ('Step 1:' / 'Before ...' / 'After ...' / 'Remember to ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own guided instruction guide for using the school learning application.",
      prompt: "Write one instruction for each marker: 'Step 1: ...' (the first action), 'Before ..., ...' (a check before starting), 'After ..., ...' (what to do after finishing), 'Remember to ...' (a reminder). Use: application, login, assignment, or submit. Direct your instructions to the reader ('you') -- not 'students log in' (third person), and not 'First, / Then, / Finally,' (generic steps).",
      change_target: ["numbered step (Step 1: ...)", "prior check (Before ..., ...)", "follow-up action (After ..., ...)", "reminder (Remember to ...)"],
      differentiation: {
        easy: { task: "Use the instruction frame and complete each slot. You may look at the interface cards." },
        standard: { task: "Write all four guided instructions without reading." },
        challenge: { task: "Write all four instructions and add 'Step 2:' for a second numbered action in the guide." }
      },
      support: { pattern_support: ["PAT-8-21"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Exchange instruction guides with a partner and check for all four markers.",
      interaction_mode: "pair",
      task: "Find a partner. Exchange your instruction guides. Read your partner's guide and check: Is there 'Step 1:'? 'Before'? 'After'? 'Remember to'? Point to each one. Then swap roles and give feedback.",
      differentiation: {
        easy: { task: "Read your partner's guide and circle each marker (Step 1, Before, After, Remember to)." },
        standard: { task: "Read your partner's guide, check all four markers, and say which one is clearest." },
        challenge: { task: "Read your partner's guide and ask: 'What happens if I forget the step before submitting?' -- your partner answers in one more instruction." }
      },
      support: { pattern_support: ["PAT-8-21"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your instruction guide to a new group (instruction guide).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your instruction guide ('Step 1:' / 'Before ...' / 'After ...' / 'Remember to ...').",
      differentiation: {
        easy: { task: "Read your instruction guide to the group." },
        standard: { task: "Present your instruction guide without reading." },
        challenge: { task: "Present your instruction guide, then answer one question from the group about what to do in a specific step." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students write practical instructions using 'Step 1:', 'Before', 'After', and 'Remember to' directed at the reader",
        "students use imperative verbs ('Open', 'Check', 'Click', 'Save') aimed at the reader, not third-person descriptions",
        "students write generic steps ('First, then, finally') or a third-person process ('students log in and then submit')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a troubleshooting instruction.",
        needs_model: "Repeat the MODEL step, emphasizing the four markers and imperative verbs ('Open', 'Click') directed at the reader.",
        needs_repeat: "Do one more round of REPEAT (choral) on the instruction sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "writes generic steps ('First, you do ... Then, you do ...') or describes the process in third person ('the student clicks ...')",
        "writes all four markers but cannot present the guide without reading",
        "writes 'Step 1:', 'Before', 'After', and 'Remember to' with correct imperative verbs accurately and confidently"
      ],
      action: [
        "recast one instruction slowly, modeling the imperative form ('Open the application' not 'The student opens the application') directed at the reader",
        "model one more instruction guide on a different digital tool (e.g. a school video call) to show the same four markers still work",
        "for a student who is ready, model ONE troubleshooting instruction first -- 'If you cannot log in to the application, ask your teacher for help and try again.' -- then invite that student to add one troubleshooting instruction to the end of their own guide; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it adds a new instruction category (problem-solving) without repeating the existing steps"
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
