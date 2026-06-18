const skenario = {
  "persiapan": {
    "papan_tulis": "Some people think ___.\nHowever, I think ___ because ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu pendapat dengan dua sisi debat PR (\"homework is unnecessary\" versus \"homework helps learning\"), kerangka respons (\"Some people think ___. However, I think ___ because ___.\"), dan kartu ikon (buku PR, jam waktu, otak belajar, meja belajar).",
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
        "teks": "Alright, class. We are going to hear two sides of an argument today."
      },
      {
        "tipe": "AKSI",
        "teks": "Pastikan setiap siswa sudah duduk dan siap."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Some students say homework is a waste of time. Others say it is essential. What do you think?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu pendapat dua sisi debat PR — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these two views. Which one sounds more familiar to you?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to acknowledge what others think, then present your own view, using Some people think and However, I think."
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
          "teks": "Angkat satu jari — angkat jari kedua. Tarik kembali ke posisi pusat."
        },
        {
          "tipe": "UCAP",
          "teks": "One reason is that homework helps students review. Another reason is that it builds good habits."
        },
        {
          "tipe": "AKSI",
          "teks": "Gestur ke satu sisi (umum) untuk \"Some people think\" — angkat tangan untuk \"However\" lalu tunjuk ke diri sendiri untuk \"I think\"."
        },
        {
          "tipe": "UCAP",
          "teks": "Some people think homework is unnecessary. However, I think it helps students learn because they review the lesson at home."
        },
        {
          "tipe": "AKSI",
          "teks": "Gestur ke satu sisi — angkat tangan, tunjuk ke diri sendiri."
        },
        {
          "tipe": "UCAP",
          "teks": "Some people think homework takes too much time. However, I think a little homework is useful because it improves study skills."
        },
        {
          "tipe": "AKSI",
          "teks": "Gestur ke satu sisi — angkat tangan, tunjuk ke diri sendiri."
        },
        {
          "tipe": "UCAP",
          "teks": "Some people think homework is boring. However, I think it supports learning because practice makes ideas clear."
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
              "teks": "Angkat satu jari — angkat jari kedua — tarik kembali ke posisi pusat."
            },
            {
              "tipe": "UCAP",
              "teks": "One reason is that homework helps students review. Another reason is that it builds good habits."
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
              "teks": "Gestur ke satu sisi — angkat tangan untuk \"However\" — tunjuk ke diri sendiri."
            },
            {
              "tipe": "UCAP",
              "teks": "Some people think homework is unnecessary. However, I think it helps students learn because they review the lesson at home."
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
              "teks": "Gestur ke satu sisi — angkat tangan untuk \"However\" — tunjuk ke diri sendiri."
            },
            {
              "tipe": "UCAP",
              "teks": "Some people think homework takes too much time. However, I think a little homework is useful because it improves study skills."
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
              "teks": "Gestur ke satu sisi — angkat tangan untuk \"However\" — tunjuk ke diri sendiri."
            },
            {
              "tipe": "UCAP",
              "teks": "Some people think homework is boring. However, I think it supports learning because practice makes ideas clear."
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
          "teks": "Good. Now it is your turn. Acknowledge another view, then state your own."
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
      "intro": "Siswa mengakui sudut pandang lain lalu menyatakan posisi sendiri tentang PR. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan kartu pendapat dan kerangka respons di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this pattern. Acknowledge what others think, then present your own view about homework."
        },
        {
          "tipe": "UCAP",
          "teks": "Acknowledge the other view as valid, do not attack it, and do not only say I do not agree."
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
          "teks": "Jika siswa tidak tahu pandangan mana yang akan diakui — tunjuk kartu pendapat di papan tulis dan minta siswa pilih salah satu sisi sebagai pandangan yang akan diakui."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu \"homework is unnecessary\", dan minta siswa ucapkan \"Some people think homework is unnecessary. However, I think ...\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kartu pendapat dan lengkapi: \"Some people think ___. However, I think ___ because ___.\"",
        "standar": "Tulis pengakuan-dan-posisi sendiri tentang PR (\"Some people think ... However, I think ... because ...\").",
        "tantangan": "Bangun sudut pandang lain dengan alasannya terlebih dahulu (\"One reason is that ...\"), lalu tanggapi dengan \"However, I think ... because ...\""
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
          "teks": "Minta Siswa A mengambil satu sisi debat PR — mengakui pandangan lain, lalu menyampaikan posisinya sendiri."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B mengambil sisi yang berbeda — lakukan hal yang sama."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Take different sides on homework. Take turns acknowledging and presenting. Listen before you respond."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk kartu pendapat dan tanya \"What do some people think about homework?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan pengakuan dan posisinya sekali lagi tanpa melihat buku."
        }
      ],
      "diferensiasi": {
        "mudah": "Akui pandangan lain dan sampaikan posisimu (boleh membaca). Pasangan lakukan hal yang sama dengan sisi lain.",
        "standar": "Akui dan tanggapi tanpa membaca; keduanya menyampaikan posisi dengan alasan.",
        "tantangan": "Akui pandangan lain beserta alasannya, lalu sampaikan posisimu dengan alasan; pasangan menanggapi dengan cara yang sama."
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
          "teks": "The person I point to presents first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns presenting Some people think ... However, I think ... about homework."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, tunjuk kartu pendapat, dan minta ucapkan \"Some people think homework ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambahkan alasan kedua dengan \"and ...\" setelah \"because ...\""
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
        "mudah": "Presentasikan pengakuan dan posisimu ke kelompok. Boleh membaca.",
        "standar": "Presentasikan pengakuan dan posisi tanpa membaca.",
        "tantangan": "Presentasikan pengakuan dan posisimu, lalu jawab satu pertanyaan tentang alasanmu dari kelompok."
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
          "teks": "Give me your Some people think sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa merujuk pandangan lain secara impersonal dan umum (\"Some people think ...\"), bukan menyerang atau hanya mengatakan \"I don't agree\"?"
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
          "teks": "Your However sentence. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan \"However,\" sebelum menyatakan posisi sendiri?"
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
          "teks": "Angkat kembali kerangka respons."
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
          "teks": "Angkat kerangka respons."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Some people think homework is unnecessary. However, I think it helps students learn because they review the lesson at home."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try. Some people think homework takes too much time. However, I think..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu pendapat — tunggu siswa melengkapi dengan \"because ...\""
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi sampai siswa siap mengucapkan pola penuh tanpa bantuan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Some people think homework is unnecessary. However, I think it helps students learn because they review the lesson and practice new skills."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Support your position with two reasons joined by and."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba menambahkan alasan kedua setelah \"because ...\""
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Two reasons in one sentence make your view clearer.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan pengakuan dan posisi tanpa melihat buku, atau menulis satu pengakuan-dan-posisi tentang topik sekolah yang berbeda di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-15.js",
    pattern_id: "PAT-8-15",
    title: "Homework Policy: Responding to Different Views",
    short_title: "Homework Debate",
    grade: 8,
    genre: "Exposition",
    cluster: "B",
    topic: "Homework Policy",
    context: "Students compare different opinions about homework and respond with their own position.",
    context_id: "Siswa membandingkan berbagai pendapat tentang pekerjaan rumah dan menanggapinya dengan posisi mereka sendiri.",
    communicative_goal: "acknowledge another viewpoint before presenting a different opinion",
    communicative_goal_id: "mengakui sudut pandang lain sebelum menyampaikan pendapat yang berbeda",
    vocabulary_domain: ["homework", "study", "time", "learning"],
    input_anchor: "opinion cards",
    output_anchor: "paired mini debate",
    prerequisite_patterns: ["PAT-8-14"],
    reusable_in: ["PAT-9-02", "PAT-9-03"],
    complexity_level: "Expand",
    notes: "TP kelima belas Kelas 8, Exposition (cluster B -- Responding to Different Views), dan LOMPATAN CEFR ke B1- (PERTAMA di Kelas 8). target_pattern PAT-8-15 = 'Some people think ... However, I think ... because ...'. Realisasi A2+ -> B1-: 'Some people think ...' (rujukan pihak ketiga impersonal/umum, BUKAN 'my partner said') + 'However,' (konektor kontras FORMAL, lebih formal dari 'but'). CEFR naik via STRUKTUR WACANA lebih formal, bukan vocab lebih sulit. forbidden_overlap (debate rebuttal, argumentative refutation, interpersonal disagreement only): 'Some people think X. However, I think Y because Z.' BUKAN menyerang/membantah 'some people' (rebuttal), dan BUKAN sekadar 'I don't agree' santai (PAT-8-01 territory) -- tetap MENGAKUI pandangan lain sebagai valid sebelum menyatakan posisi sendiri. Reaktivasi PAT-8-14 (WAJIB, VR-1): 'One reason is.../Another reason is...' (beberapa alasan untuk satu posisi) -> 'Some people think [posisi lain]. However, I think [posisi sendiri] because [alasan].' CATATAN (kekayaan notes): pola ini sekeluarga pragmatik dengan 'I agree, but I think...' (PAT-8-01, acknowledge->qualify->own view) -- versi B1-/formal/eksposisi; PAT-8-01 bukan prerequisite. vocabulary_domain (homework, study, time, learning) muncul di bahasa target. Ekstensi opsional memperkuat posisi dengan dua alasan ('However, I think ... because ... and ...') -- menjaga head acknowledge->position, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Alright, class. We are going to hear two sides of an argument today." },
      { type: "AKSI", text: "Pastikan setiap siswa sudah duduk dan siap." },
      // HOOK
      { type: "UCAP", text: "Some students say homework is a waste of time. Others say it is essential. What do you think?" },
      { type: "AKSI", text: "Tampilkan kartu pendapat dua sisi debat PR: 'homework is unnecessary' versus 'homework helps learning'." },
      { type: "UCAP", text: "Look at these two views. Which one sounds more familiar to you?" },
    ],

    active_vocabulary: [
      "Some people think",
      "However,",
      "I think",
      "because",
      "homework",
      "study",
      "time",
      "learning"
    ],

    model_sentences: [
      { id: "model_1", text: "One reason is that homework helps students review. Another reason is that it builds good habits." },
      { id: "model_2", text: "Some people think homework is unnecessary. However, I think it helps students learn because they review the lesson at home." },
      { id: "model_3", text: "Some people think homework takes too much time. However, I think a little homework is useful because it improves study skills." },
      { id: "model_4", text: "Some people think homework is boring. However, I think it supports learning because practice makes ideas clear." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Opinion cards with two sides of the homework debate: 'homework is unnecessary' versus 'homework helps learning'.", description_id: "Kartu pendapat dengan dua sisi debat pekerjaan rumah: 'homework is unnecessary' versus 'homework helps learning'.", asset_id: null },
      { id: "visual_2", description: "A response frame: 'Some people think ___. However, I think ___ because ___.'", description_id: "Kerangka respons: 'Some people think ___. However, I think ___ because ___.'", asset_id: null },
      { id: "visual_3", description: "Icons: a homework book, a clock (time), a brain (learning), a study desk.", description_id: "Ikon: buku pekerjaan rumah, jam (waktu), otak (belajar), meja belajar.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher gestures to one side (out there, general) while saying 'Some people think ...'.", description_id: "Guru memberi gestur ke satu sisi (di luar sana, umum) sambil mengucapkan 'Some people think ...'." },
      { id: "gesture_2", description: "Teacher raises a hand to mark a turn while saying 'However,' then points to self for 'I think ...'.", description_id: "Guru mengangkat tangan untuk menandai perubahan sambil mengucapkan 'However,' lalu menunjuk ke diri sendiri untuk 'I think ...'." },
      { id: "gesture_3", description: "Teacher opens a hand for the reason while saying 'because ...'.", description_id: "Guru membuka tangan untuk alasannya sambil mengucapkan 'because ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher acknowledge another viewpoint and then present a supported position with 'Some people think ... However, I think ... because ...'.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-14"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the acknowledge-then-position sentences ('Some people think ... However, I think ... because ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Acknowledge another view, then present your own position with a reason.",
      prompt: "Use the pattern 'Some people think [other view]. However, I think [your view] because [reason].' Make it about homework (homework, study, time, learning). Acknowledge the other view as valid -- do not attack it, and do not only say 'I don't agree'.",
      change_target: ["other view (Some people think ...)", "own position (However, I think ...)", "reason (because ...)"],
      differentiation: {
        easy: { task: "Use an opinion card and complete: 'Some people think ___. However, I think ___ because ___.'" },
        standard: { task: "Write your own acknowledge-then-position about homework ('Some people think ... However, I think ... because ...')." },
        challenge: { task: "Build the other view with a reason first (as in 'One reason is that ...'), then respond with 'However, I think ... because ...'." }
      },
      support: { pattern_support: ["PAT-8-14"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Hold a paired mini debate, each partner taking a different position (paired mini debate).",
      interaction_mode: "pair",
      task: "Find a partner and take different sides on homework. Take turns: acknowledge the other view, then present your own ('Some people think ... However, I think ... because ...'). Listen respectfully before you respond.",
      differentiation: {
        easy: { task: "Acknowledge the other view and give your position (you may read). Your partner does the same with the other side." },
        standard: { task: "Acknowledge and respond without reading; both partners present a position with a reason." },
        challenge: { task: "Acknowledge the other view with its reason, then present your position with a reason; your partner responds in the same way." }
      },
      support: { pattern_support: ["PAT-8-14"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Share your acknowledge-then-position with a new group.",
      share_mode: "short_dialogue",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting 'Some people think ... However, I think ... because ...' about homework.",
      differentiation: {
        easy: { task: "Present your acknowledge-then-position to the group. You may read it." },
        standard: { task: "Present your acknowledge-then-position without reading." },
        challenge: { task: "Present your acknowledge-then-position, then answer one question about your reason from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students acknowledge another view and then present their own with 'Some people think ... However, I think ... because ...'",
        "students refer to the other view impersonally ('Some people think ...') and use 'However,' before their own position",
        "students still attack the other view (rebuttal) or only say 'I don't agree' without acknowledging it"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to support the position with two reasons.",
        needs_model: "Repeat the MODEL step, emphasizing acknowledging the other view before 'However, I think ... because ...'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the acknowledge-then-position sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "attacks the other view or only disagrees without acknowledging it",
        "relies only on the written sentences and cannot present without reading",
        "acknowledges another view and presents a supported position accurately and confidently"
      ],
      action: [
        "recast the response slowly, modeling 'Some people think ...' (acknowledge) before 'However, I think ... because ...'",
        "model one more acknowledge-then-position on a different school topic to show the same pattern still works",
        "for a student who is ready, model ONE position with two reasons first -- 'Some people think homework is unnecessary. However, I think it helps students learn because they review the lesson and practice new skills.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the acknowledge-then-position head, not a rebuttal"
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
