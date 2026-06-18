const skenario = {
  "persiapan": {
    "papan_tulis": "Once, there was ___ who ___.\nEveryone believed ___.",
    "kartu": "Siapkan tiga kartu di meja guru — ilustrasi cerita yang menunjukkan gedung sekolah dengan gudang tua misterius di belakang (pintu sedikit terbuka di antara tanaman liar), foto close-up pintu kayu dengan tulisan tangan \"Notice: Keep this door locked.\" dan benda-benda tua berdebu, serta kerangka cerita (\"Once, there was ... who ...\" dihubungkan tanda panah ke \"Everyone believed ...\").",
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
        "teks": "Good morning. Today we begin a new story, one that starts at school."
      },
      {
        "tipe": "AKSI",
        "teks": "Bangun suasana naratif dengan nada yang sedikit misterius."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Is there any part of this school building that you have never entered, or that feels mysterious?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan ilustrasi gedung sekolah dengan gudang tua misterius di belakang — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this school illustration. What do you notice behind the main building?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to open a story, introducing a character, a setting, and what everyone believed."
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
          "teks": "Sapukan tangan pelan untuk membuka pemandangan — seolah membalik halaman buku cerita."
        },
        {
          "tipe": "UCAP",
          "teks": "Once, there was a curious student named Dito who loved exploring old places."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ke luar untuk menandai lokasi \"Behind the school\"."
        },
        {
          "tipe": "UCAP",
          "teks": "Behind the school, there was an old storage room full of dusty boxes and broken chairs."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk foto close-up pintu dengan tulisan tangan — tunjuk teks \"Notice: Keep this door locked.\""
        },
        {
          "tipe": "UCAP",
          "teks": "On the storage room door, there was a sign that said, Notice: Keep this door locked."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka kedua lengan lebar-lebar mewakili seluruh komunitas sekolah."
        },
        {
          "tipe": "UCAP",
          "teks": "Everyone believed the storage room hid an old secret."
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
              "teks": "Sapukan tangan pelan untuk membuka pemandangan — seolah membalik halaman."
            },
            {
              "tipe": "UCAP",
              "teks": "Once, there was a curious student named Dito who loved exploring old places."
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
              "teks": "Tunjuk ke luar untuk menandai lokasi \"Behind the school\"."
            },
            {
              "tipe": "UCAP",
              "teks": "Behind the school, there was an old storage room full of dusty boxes and broken chairs."
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
              "teks": "Tunjuk foto close-up pintu — tunjuk teks tanda."
            },
            {
              "tipe": "UCAP",
              "teks": "On the storage room door, there was a sign that said, Notice: Keep this door locked."
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
              "teks": "Buka kedua lengan lebar-lebar mewakili seluruh komunitas sekolah."
            },
            {
              "tipe": "UCAP",
              "teks": "Everyone believed the storage room hid an old secret."
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
          "teks": "Good. Now it is your turn. Build your own story world."
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
      "intro": "Siswa membangun pembuka cerita sendiri dengan tokoh, latar, dan keyakinan bersama. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan ilustrasi cerita dan kerangka cerita di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use these patterns. Introduce a character in a school setting, then add what everyone believed."
        },
        {
          "tipe": "UCAP",
          "teks": "Keep it third-person fiction, not It is a kind of, and not I remember from your own memory."
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
          "teks": "Jika siswa tidak tahu tokoh apa yang akan diperkenalkan — tunjuk ilustrasi sekolah dan minta siswa mulai dari \"Once, there was a student who ...\""
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk ilustrasi tokoh Dito, dan minta siswa ucapkan \"Once, there was a student who ...\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kerangka cerita dan lengkapi: \"Once, there was ___ who ___. Everyone believed ___.\" Boleh gunakan ilustrasi.",
        "standar": "Tulis pembuka ceritamu sendiri: \"Once, there was ... who ...\" dan \"Everyone believed ...\" tanpa membaca.",
        "tantangan": "Tulis dua kalimat latar (satu untuk lokasi di sekolah, satu untuk benda tua di dalamnya) lalu \"Everyone believed ...\" untuk membangun dunia cerita yang lebih penuh."
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
          "teks": "Minta Siswa A membacakan pembuka ceritanya (\"Once, there was ... who ...\" dan \"Everyone believed ...\")."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B memeriksa: Ada tokoh? Ada latar? Ada keyakinan bersama? Lalu tukar peran."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Share your story opening with your partner. Your partner checks for character, setting, and belief. Then swap."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk ilustrasi dan tanya \"Who do you want to introduce in your story?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa tambahkan detail latar \"Behind the school, there was ...\""
        }
      ],
      "diferensiasi": {
        "mudah": "Baca pembuka ceritamu ke pasangan. Pasangan tunjuk tokoh dan keyakinan bersama.",
        "standar": "Bagikan pembuka cerita tanpa membaca; pasangan periksa ada tokoh, latar, dan keyakinan.",
        "tantangan": "Bagikan pembuka cerita dan tambahkan satu detail tentang benda tua; pasangan tanya \"What exactly did everyone believe?\" dan kamu jawab."
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
          "teks": "The person I point to presents your story opening first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns presenting your story opening to the group."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, tunjuk ilustrasi, dan minta ucapkan \"Once, there was ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambahkan tokoh kedua \"and his friend ... believed ...\""
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
        "mudah": "Baca pembuka ceritamu ke kelompok.",
        "standar": "Presentasikan pembuka cerita tanpa membaca.",
        "tantangan": "Presentasikan pembuka cerita, lalu jawab satu pertanyaan dari kelompok tentang latar atau keyakinan bersama."
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
          "teks": "Give me your Once, there was sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa memperkenalkan tokoh dalam fiksi orang ketiga? Bukan laporan faktual atau ingatan pribadi?"
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
          "teks": "Your Everyone believed sentence. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan \"Everyone believed ...\" sebagai keyakinan bersama yang membangun misteri?"
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
          "teks": "Angkat kembali kerangka cerita."
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
          "teks": "Angkat kerangka cerita."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Once, there was a curious student named Dito who loved exploring old places."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try. Once, there was a student named..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ilustrasi — tunggu siswa melengkapi nama dan karakteristik tokoh."
        },
        {
          "tipe": "UCAP",
          "teks": "Now add Everyone believed..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa melengkapi keyakinan bersama."
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi sampai siswa siap mengucapkan pembuka cerita tanpa bantuan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Once, there was a curious student named Dito who loved exploring old places at school, and his friend Wulan believed the storage room held many old objects no one remembered."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add a second character to your story opening."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba menambahkan tokoh kedua."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Two characters make the story world richer.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan pembuka cerita lengkap tanpa melihat buku, atau menulis pembuka cerita untuk lokasi misterius lain di sekolah di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-17.js",
    pattern_id: "PAT-8-17",
    title: "The Old Storage Room: Building a Rich Story World",
    short_title: "Old Storage Room",
    grade: 8,
    genre: "Narrative",
    cluster: "A",
    topic: "The Old Storage Room Mystery",
    context: "Students enter the story of an old locked storage room that everyone at school believes hides a forgotten secret.",
    context_id: "Siswa memasuki cerita tentang gudang tua terkunci yang dipercaya seluruh warga sekolah menyimpan rahasia yang terlupakan.",
    communicative_goal: "build a richer story world with characters, setting, and shared beliefs",
    communicative_goal_id: "membangun dunia cerita yang lebih kaya dengan tokoh, latar, dan keyakinan bersama",
    vocabulary_domain: ["storage room", "school", "secret", "old objects"],
    input_anchor: "story illustration",
    output_anchor: "story opening",
    prerequisite_patterns: ["PAT-7-24", "PAT-7-20"],
    reusable_in: ["PAT-9-05"],
    complexity_level: "Expand",
    notes: "TP ke-17 Kelas 8, genre Narrative A 'Building Rich Story Worlds' (cluster A -- Opener arc baru 'The Old Storage Room Mystery'). DUAL PREREQ lintas kelas: PAT-7-24 + PAT-7-20. target_pattern = 'Once ..., ... was ... who ... / Everyone believed ...' (orientasi naratif lebih rinci: tokoh, latar, keyakinan kolektif). Reaktivasi PAT-7-20 (WAJIB, VR-1): papan tanda 'Notice: Keep this door locked.' sebagai OBJEK DIEGETIK dalam cerita -- struktur fungsional PAT-7-20 direaktivasi dengan FUNGSI NARATIF berbeda (bukan instruksi kepada pembaca, melainkan pemicu cerita). Reaktivasi PAT-7-24 (WAJIB, VR-1): 'Everyone believed...' menggunakan struktur 'Everyone [verb]...' sama dengan PAT-7-24 'Everyone felt...because...', TAPI fungsi berbalik: dulu refleksi emosional penutup cerita Firefly, sekarang keyakinan kolektif PEMBUKA misteri baru. forbidden_overlap (factual report, descriptive classification, personal recount): fiksi orang ketiga -- bukan 'It is a kind of...' (report), bukan 'It has...which...' (klasifikasi), bukan 'I remember...' (recount). ARC: Dito & Wulan konsisten TP-41 s.d. TP-45. 'old objects' terealisasi di CHANGE prompt (runtime). BOOST extension: orientasi diperluas dengan karakter kedua Wulan dan kepercayaan lebih spesifik tentang old objects tersembunyi.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Today we begin a new story — one that starts at school." },
      { type: "AKSI", text: "Bangun suasana naratif dengan nada yang sedikit misterius." },
      // HOOK
      { type: "UCAP", text: "Is there any part of this school building that you have never entered — or that feels mysterious?" },
      { type: "AKSI", text: "Tampilkan ilustrasi gedung sekolah dengan gudang tua misterius di belakang, pintunya sedikit terbuka di antara tanaman liar." },
      { type: "UCAP", text: "Look at this school illustration. What do you notice behind the main building?" },
    ],

    active_vocabulary: [
      "Once,",
      "there was",
      "who",
      "Everyone believed",
      "storage room",
      "school",
      "secret",
      "old objects"
    ],

    model_sentences: [
      { id: "model_1", text: "Once, there was a curious student named Dito who loved exploring old places." },
      { id: "model_2", text: "Behind the school, there was an old storage room full of dusty boxes and broken chairs." },
      { id: "model_3", text: "On the storage room door, there was a sign that said, 'Notice: Keep this door locked.'" },
      { id: "model_4", text: "Everyone believed the storage room hid an old secret." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A story illustration showing a school building with a mysterious old storage room visible at the back, door slightly ajar behind overgrown plants.", description_id: "Ilustrasi cerita yang menunjukkan gedung sekolah dengan gudang tua misterius terlihat di belakang, pintunya sedikit terbuka di antara tanaman yang tumbuh liar.", asset_id: null },
      { id: "visual_2", description: "A close-up of a wooden door with a handwritten sign: 'Notice: Keep this door locked.' and dusty old objects barely visible through a gap.", description_id: "Foto close-up pintu kayu dengan tanda tulisan tangan: 'Notice: Keep this door locked.' dan benda-benda tua berdebu yang samar terlihat melalui celah.", asset_id: null },
      { id: "visual_3", description: "Story frames: 'Once, there was ... who ...' linked by an arrow to 'Everyone believed ...' -- showing character introduction leading to shared belief.", description_id: "Kerangka cerita: 'Once, there was ... who ...' dihubungkan tanda panah ke 'Everyone believed ...' -- menunjukkan perkenalan tokoh yang mengarah ke keyakinan bersama.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher sweeps a hand slowly to open the scene while saying 'Once, there was ...' -- as if turning the page of a storybook.", description_id: "Guru menyapukan tangan pelan untuk membuka pemandangan sambil mengucapkan 'Once, there was ...' -- seolah membalik halaman buku cerita." },
      { id: "gesture_2", description: "Teacher points outward to indicate location while saying 'Behind the school, there was ...'.", description_id: "Guru menunjuk ke luar untuk menandai lokasi sambil mengucapkan 'Behind the school, there was ...'." },
      { id: "gesture_3", description: "Teacher opens arms wide to represent the whole community while saying 'Everyone believed ...'.", description_id: "Guru membuka kedua lengan lebar-lebar mewakili seluruh komunitas sambil mengucapkan 'Everyone believed ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher build a rich story world with a character, setting, and shared belief: 'Once ..., ... was ... who ...' and 'Everyone believed ...'.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-24", "PAT-7-20"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the story-opening sentences ('Once, there was ... who ...' and 'Everyone believed ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Build your own story world opening with a character, a setting, and a shared belief.",
      prompt: "Use 'Once, there was ... who ...' to introduce a character in a school setting. Then add 'Everyone believed ...' to create a shared mystery. Include words from: storage room, school, secret, old objects. Keep it third-person fiction -- not 'It is a kind of ...' (a report), and not 'I remember ...' (your own memory).",
      change_target: ["character (Once, there was ... who ...)", "shared belief (Everyone believed ...)"],
      differentiation: {
        easy: { task: "Use the story frames and complete: 'Once, there was ___ who ___. Everyone believed ___.' You may use the illustration." },
        standard: { task: "Write your own story opening: 'Once, there was ... who ...' and 'Everyone believed ...' without reading." },
        challenge: { task: "Write two setting sentences (one for the school location, one for the old objects inside) then 'Everyone believed ...' to build a fuller story world." }
      },
      support: { pattern_support: ["PAT-7-24", "PAT-7-20"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share story openings with a partner and check for character, setting, and shared belief.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your story opening ('Once, there was ... who ...' and 'Everyone believed ...'). Your partner checks: Is there a character? A setting? A shared belief? Then swap and give feedback.",
      differentiation: {
        easy: { task: "Read your story opening to your partner. Your partner points to the character and the belief." },
        standard: { task: "Share your story opening without reading. Your partner checks character, setting, and belief." },
        challenge: { task: "Share your story opening and add one more detail about the old objects; your partner asks 'What exactly did everyone believe?' and you answer." }
      },
      support: { pattern_support: ["PAT-7-24", "PAT-7-20"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your story opening to a new group (story opening).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your story opening ('Once, there was ... who ...' and 'Everyone believed ...').",
      differentiation: {
        easy: { task: "Read your story opening to the group." },
        standard: { task: "Present your story opening without reading." },
        challenge: { task: "Present your story opening, then answer one question from the group about your setting or the shared belief." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students open a story with a character ('Once, there was ... who ...') and a shared belief ('Everyone believed ...')",
        "students keep the story in third-person fiction, not a factual report or personal recount",
        "students only describe a place without introducing a character, or slip into first person ('I ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to expand the story world with a second character.",
        needs_model: "Repeat the MODEL step, emphasizing 'Once, there was ... who ...' as character introduction and 'Everyone believed ...' as shared story belief.",
        needs_repeat: "Do one more round of REPEAT (choral) on the story-opening sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "writes a factual description ('It is a storage room that has ...') or personal recount ('I remember the room ...') instead of third-person fiction",
        "introduces a character but forgets to add a shared belief ('Everyone believed ...')",
        "builds the story opening with character, setting, and shared belief accurately and confidently"
      ],
      action: [
        "recast the opening slowly, modeling 'Once, there was ... who ...' as third-person fiction introducing a character, not a factual description or personal memory",
        "model one more story opening on a different school location to show the same pattern still works",
        "for a student who is ready, model ONE expanded story world with a second character first -- 'Once, there was a curious student named Dito who loved exploring old places at school, and his friend Wulan believed the storage room held many old objects no one remembered.' -- then invite that student to add a second character to their own story opening; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the third-person fiction frame, not a personal account or a report"
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
