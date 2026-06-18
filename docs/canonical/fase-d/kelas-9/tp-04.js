const skenario = {
  "persiapan": {
    "papan_tulis": "It is ___ and ___.\nI think ___ because ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu menu kantin empat hidangan sehat, kartu kerangka review sederhana (DESCRIBE dan EVALUATE), dan kartu ikon (mangkuk makanan sehat, gedung sekolah, label nutrisi, bintang rasa, label harga).",
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
        "teks": "Good morning. We begin today with something from the school canteen."
      },
      {
        "tipe": "AKSI",
        "teks": "Kondisikan kelas agar siap memberikan penilaian evaluatif."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "When you eat at the canteen, do you think about the food's nutrition and value? What matters most to you?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu menu kantin — sup sayur, ikan bakar, nasi campur, salad buah — dengan harga dan bahan di setiap kartu."
      },
      {
        "tipe": "AKSI",
        "teks": "Tahan sebentar — beri waktu siswa mengamati kartu-kartu tersebut."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these menu cards. If you were going to review one dish, what would you say about it?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan nada formal dan minta pendapatnya tentang salah satu hidangan. Setelah dua respons atau sekitar tiga puluh detik — lanjutkan."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — lalu letakkan kartu menu di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us now see how to give a simple review that describes and evaluates."
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
          "teks": "Ambil kartu menu kantin — tunjuk kartu sambil berbicara."
        },
        {
          "tipe": "UCAP",
          "teks": "The school canteen serves healthy food every day, and the portions are always generous."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu menu — ambil kartu kerangka review."
        },
        {
          "tipe": "AKSI",
          "teks": "Kaitkan dua jari sambil mengucapkan."
        },
        {
          "tipe": "UCAP",
          "teks": "It is fresh and colourful, and the price is very reasonable for students."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kerangka — ambil kartu ikon."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk dada sendiri."
        },
        {
          "tipe": "UCAP",
          "teks": "I think the vegetable soup is the best dish because it has great nutrition and keeps you full all morning."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu ikon — tampilkan ketiga kartu sekaligus."
        },
        {
          "tipe": "AKSI",
          "teks": "Kaitkan dua jari, lalu tunjuk dada."
        },
        {
          "tipe": "UCAP",
          "teks": "It is warm and filling, and I think the canteen menu is good because it balances nutrition with taste at a fair price."
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
          "teks": "Angkat kedua tangan sebagai isyarat bahwa kelas akan memasuki langkah REPEAT."
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
              "teks": "Angkat kartu menu kantin — tunjuk kartu."
            },
            {
              "tipe": "UCAP",
              "teks": "The school canteen serves healthy food every day, and the portions are always generous."
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
              "teks": "Letakkan kartu menu — angkat kartu kerangka review, kaitkan dua jari."
            },
            {
              "tipe": "UCAP",
              "teks": "It is fresh and colourful, and the price is very reasonable for students."
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
              "teks": "Letakkan kartu kerangka — angkat kartu ikon, tunjuk dada sendiri."
            },
            {
              "tipe": "UCAP",
              "teks": "I think the vegetable soup is the best dish because it has great nutrition and keeps you full all morning."
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
              "teks": "Tampilkan ketiga kartu sekaligus — kaitkan dua jari, lalu tunjuk dada."
            },
            {
              "tipe": "UCAP",
              "teks": "It is warm and filling, and I think the canteen menu is good because it balances nutrition with taste at a fair price."
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
          "teks": "Now it is your turn. Write your own review."
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
      "intro": "Siswa menulis review sederhana tentang satu hidangan kantin pilihan mereka. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
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
          "teks": "Choose one dish from the menu cards. Describe it, then evaluate it."
        },
        {
          "tipe": "UCAP",
          "teks": "Write two sentences: describe with It is and, then evaluate with I think because."
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
          "teks": "Stop writing. Now find a partner."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu ciri-ciri hidangan yang ingin dideskripsikan — tunjuk kartu menu di papan tulis dan minta siswa membaca bahan-bahan yang tercantum."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu menu dan tunjuk satu hidangan, lalu minta siswa ucapkan \"It is\" lalu satu kata deskriptif. Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kerangka review di papan tulis dan isi slot DESCRIBE dan EVALUATE. Boleh melihat kartu menu untuk detail hidangan. Tulis: It is lalu dua ciri hidangan dihubungkan dengan and. I think lalu evaluasi karena satu alasan.",
        "standar": "Tulis review sederhana tentang satu hidangan kantin tanpa membaca kerangka. Gunakan kosakata: canteen, healthy, nutrition, taste, atau price.",
        "tantangan": "Tulis review sederhana lalu tambah satu kalimat evaluatif lagi dengan fitur berbeda — misalnya harga atau ukuran porsi."
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
          "teks": "Minta Siswa A membacakan atau menyampaikan reviewnya ke Siswa B. Siswa B mendengarkan dan memeriksa: ada deskripsi dengan dua ciri? ada evaluasi dengan alasan?"
        },
        {
          "tipe": "AKSI",
          "teks": "Lalu minta Siswa B melakukan hal yang sama ke Siswa A."
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
          "teks": "Good. Now stay with your partner and join another pair."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk pola pertama di buku catatan siswa dan minta siswa ucapkan \"It is\" lalu satu kata deskriptif tentang hidangan pilihannya."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this pattern.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan reviewnya sekali lagi tanpa melihat buku."
        },
        {
          "tipe": "darurat",
          "teks": "Jika waktu tersisa kurang dari lima menit atau kelas tidak lagi kondusif — hentikan aktivitas kelompok. Tunjuk pola review di papan tulis, minta seluruh kelas mengucapkan satu kalimat It is dan satu kalimat I think bersama-sama, lalu tutup sesi."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca review dari buku catatan ke pasangan. Pasangan menunjuk bagian DESCRIBE dan bagian EVALUATE dalam teks kamu.",
        "standar": "Sampaikan review tanpa membaca buku. Pasangan memeriksa kedua komponen: deskripsi dan evaluasi.",
        "tantangan": "Sampaikan review, lalu pasangan bertanya: \"What would you change about this dish?\" Tambahkan satu kalimat evaluatif sebagai respons."
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
          "teks": "One person gives the review. The others listen and check for description and evaluation."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"It is\" lalu satu kata tentang hidangan pilihannya sebagai pembuka. Jika masih diam — ucapkan nama siswa tersebut terlebih dahulu lalu minta siswa mengulang."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa ucapkan reviewnya sekali lagi tanpa melihat buku."
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
        "mudah": "Baca review dari buku catatan ke kelompok.",
        "standar": "Sampaikan review tanpa membaca buku.",
        "tantangan": "Sampaikan review tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"What is the main strength of that dish?\""
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
          "teks": "Describe your dish in one sentence using It is. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan kalimat deskripsi dengan dua ciri."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa mendeskripsikan dua ciri yang terhubung dengan and, atau hanya satu ciri?"
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
          "teks": "Your I think sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa memberi evaluasi dengan alasan, bukan sekadar deskripsi lanjutan?"
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
          "teks": "Angkat kembali kartu kerangka review."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk slot DESCRIBE di kerangka dan ucapkan kalimat It is — beri isyarat ke siswa."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk slot EVALUATE dan ucapkan kalimat I think — beri isyarat ke siswa — tunggu seluruh kelas mengucapkan bersama."
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
          "teks": "Tunjuk kartu menu di papan tulis dan pilih satu hidangan bersama siswa."
        },
        {
          "tipe": "UCAP",
          "teks": "What does it look like? It is..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa melengkapi dengan satu kata deskriptif. Tunjuk and di pola."
        },
        {
          "tipe": "UCAP",
          "teks": "And one more detail. And..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa melengkapi. Kemudian tunjuk baris kedua di pola."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now tell me what you think. I think..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa melengkapi dengan evaluasi. Bantu frasa per frasa jika diperlukan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kalimat I think dalam review siswa di buku catatan."
        },
        {
          "tipe": "UCAP",
          "teks": "Try adding a light recommendation after your evaluation. Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "For anyone looking for a healthy and affordable meal, this canteen dish is really worth trying -- good nutrition at a fair price."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now add one recommendation sentence of your own after your I think sentence."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"That takes your review one step further.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka ucapkan review mereka sendiri tanpa melihat buku, atau menulis satu kalimat evaluatif tambahan dengan fitur berbeda dari hidangan yang sama."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-04.js",
    pattern_id: "PAT-9-04",
    title: "Healthy Canteen Menu: Giving a Simple Review",
    short_title: "Canteen Menu Review",
    grade: 9,
    genre: "Review",
    cluster: "A",
    topic: "Healthy Canteen Menu",
    context: "Students sample or observe healthy dishes from the school canteen and give a simple evaluative response combining description and opinion.",
    context_id: "Siswa mencicipi atau mengamati hidangan sehat dari kantin sekolah dan memberikan tanggapan evaluatif sederhana yang menggabungkan deskripsi dan opini.",
    communicative_goal: "describe an object or experience and give an initial evaluative response",
    communicative_goal_id: "mendeskripsikan suatu objek atau pengalaman dan memberikan tanggapan evaluatif awal",
    vocabulary_domain: ["healthy food", "school canteen", "nutrition", "taste and price"],
    input_anchor: "canteen menu cards",
    output_anchor: "simple review",
    prerequisite_patterns: ["PAT-9-03", "PAT-7-06", "PAT-8-13"],
    reusable_in: ["PAT-9-05", "PAT-9-06"],
    complexity_level: "Integrate",
    notes: "TP keempat Kelas 9, genre Review (cluster A -- opener cluster Review). TRIPLE PREREQ. target_pattern PAT-9-04 = 'It is...and...I think...because...' (deskripsi + evaluasi awal, format review paling sederhana di cluster). Reaktivasi PAT-7-06 (WAJIB, VR-1): deskripsi gabungan 'It is...and...' (K7, menggabungkan dua ciri objek) direaktivasi sebagai BAGIAN DESKRIPTIF review -- struktur sama, konteks bergeser dari deskripsi benda/tempat netral ke deskripsi evaluatif canteen menu. Reaktivasi PAT-8-13 (WAJIB, VR-1): 'I believe...because...' (K8, claim+reason argumentatif) menjadi 'I think...because...' sebagai KOMPONEN EVALUATIF review -- register sedikit lebih kasual ('I think' vs 'I believe') sesuai genre review informal. Reaktivasi PAT-9-03 (WAJIB, VR-1): kapasitas argumen utuh dari Cluster 1 direaktivasi sebagai REPRESENTASI MENTAL -- di sini DIREDUKSI ke bentuk review paling sederhana (2 komponen: describe+evaluate), BUKAN argumen 6-komponen. Jembatan struktural: PAT-9-03 membuktikan siswa SUDAH BISA argumen penuh; TP-04 mengajak mereka menerapkan kapasitas itu dalam format genre baru (review). forbidden_overlap (descriptive report tanpa evaluasi, personal recount tanpa judgment, argumentative persuasion): WAJIB ada komponen evaluatif 'I think...because...' -- bukan hanya deskripsi 'It is...and...' (itu report/recount), bukan argumen publik penuh (peran TP-06). Vocabulary_domain: canteen ✓ model_1, healthy ✓ model_1, nutrition ✓ model_3/4, taste ✓ model_4, price ✓ model_2. BOOST extension: tambah rekomendasi-lite 'For anyone looking for...this is worth trying' -- melampaui simple review tanpa menjadi argumen 4-komponen TP-01/TP-06.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. We begin today with something from the school canteen." },
      { type: "AKSI", text: "Kondisikan kelas agar siap memberikan penilaian evaluatif." },
      // HOOK
      { type: "UCAP", text: "When you eat at the canteen, do you think about the food's nutrition and value? What matters most to you?" },
      { type: "AKSI", text: "Tampilkan kartu menu kantin: sup sayur, ikan bakar, nasi campur, salad buah — dengan harga dan bahan." },
      { type: "UCAP", text: "Look at these menu cards. If you were going to review one dish, what would you say about it?" },
    ],

    active_vocabulary: [
      "It is",
      "and",
      "I think",
      "because",
      "canteen",
      "healthy",
      "nutrition",
      "taste",
      "price"
    ],

    model_sentences: [
      { id: "model_1", text: "The school canteen serves healthy food every day, and the portions are always generous." },
      { id: "model_2", text: "It is fresh and colourful, and the price is very reasonable for students." },
      { id: "model_3", text: "I think the vegetable soup is the best dish because it has great nutrition and keeps you full all morning." },
      { id: "model_4", text: "It is warm and filling, and I think the canteen menu is good because it balances nutrition with taste at a fair price." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Canteen menu cards showing four healthy dishes with name, price, and a short ingredient list: vegetable soup, grilled fish, mixed rice, and a fruit salad.", description_id: "Kartu menu kantin yang menunjukkan empat hidangan sehat dengan nama, harga, dan daftar bahan singkat: sup sayur, ikan bakar, nasi campur, dan salad buah.", asset_id: null },
      { id: "visual_2", description: "A simple review frame: 'It is ___ and ___.' / 'I think ___ because ___.' with two labelled slots: DESCRIBE and EVALUATE.", description_id: "Kerangka ulasan sederhana: 'It is ___ and ___.' / 'I think ___ because ___.' dengan dua slot berlabel: DESCRIBE dan EVALUATE.", asset_id: null },
      { id: "visual_3", description: "Icons: a healthy food bowl, a school building (canteen context), a nutrition label, a flavour star (taste), and a price tag.", description_id: "Ikon: mangkuk makanan sehat, gedung sekolah (konteks kantin), label nutrisi, bintang rasa (rasa), dan label harga.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to the menu card while saying 'It is ...' -- to signal describing what is in front of you.", description_id: "Guru menunjuk kartu menu sambil mengucapkan 'It is ...' -- untuk menandai mendeskripsikan apa yang ada di depan kita." },
      { id: "gesture_2", description: "Teacher links two fingers together while saying '... and ...' -- to signal combining two descriptive details.", description_id: "Guru mengaitkan dua jari sambil mengucapkan '... and ...' -- untuk menandai menggabungkan dua detail deskriptif." },
      { id: "gesture_3", description: "Teacher points to own chest while saying 'I think ...' -- to signal shifting from description to personal evaluation.", description_id: "Guru menunjuk dadanya sendiri sambil mengucapkan 'I think ...' -- untuk menandai pergeseran dari deskripsi ke evaluasi pribadi." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher describe a canteen dish and then give an evaluative response: 'It is ... and ...' (description) + 'I think ... because ...' (evaluation) -- a simple review, not a full argument and not a neutral report.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-9-03", "PAT-7-06", "PAT-8-13"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the simple review sentences ('It is ... and ...' / 'I think ... because ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own simple review of one canteen dish.",
      prompt: "Choose one dish from the menu cards and write a review using: 'It is ___ and ___.' (describe two features), 'I think ___ because ___.' (give your evaluation with a reason). Include: canteen, healthy, nutrition, taste, or price. Keep it a simple review -- not just a description without an opinion ('It is...and...'), and not a full argument about the canteen ('I recommend... because... One reason is...').",
      change_target: ["description (It is ... and ...)", "evaluation (I think ... because ...)"],
      differentiation: {
        easy: { task: "Use the review frame and complete: 'It is ___ and ___. I think ___ because ___.' You may look at the menu cards." },
        standard: { task: "Write your own simple review of a canteen dish without reading the frame." },
        challenge: { task: "Write the simple review and add one more evaluative sentence using a different feature (e.g. price or portion size)." }
      },
      support: { pattern_support: ["PAT-9-03", "PAT-7-06", "PAT-8-13"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share simple reviews with a partner and check for description and evaluation.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your canteen review ('It is ... and ...' / 'I think ... because ...'). Your partner checks: Is there a description with two details? Is there an evaluation with a reason? Then swap.",
      differentiation: {
        easy: { task: "Read your review to your partner. Your partner points to the description and the evaluation in your text." },
        standard: { task: "Share your review without reading. Your partner checks for both components." },
        challenge: { task: "Share your review and your partner asks 'What would you change about this dish?' -- you add one evaluative sentence in response." }
      },
      support: { pattern_support: ["PAT-9-03", "PAT-7-06", "PAT-8-13"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your simple review to a new group (simple review).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your canteen review ('It is ... and ...' / 'I think ... because ...').",
      differentiation: {
        easy: { task: "Read your review to the group." },
        standard: { task: "Present your review without reading." },
        challenge: { task: "Present your review, then answer one question from the group: 'What is the main strength of that dish?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students describe a dish with two features ('It is ... and ...') and then evaluate it with a reason ('I think ... because ...')",
        "students distinguish description (what it is) from evaluation (what they think of it)",
        "students only describe ('It is ... and ...') without an evaluative opinion, or jump straight to a full argument ('I recommend the canteen because...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a light recommendation sentence to their review.",
        needs_model: "Repeat the MODEL step, pointing to the review frame and naming each slot: DESCRIBE ('It is...and...') then EVALUATE ('I think...because...').",
        needs_repeat: "Do one more round of REPEAT (choral) on the review sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives only a description without an evaluative opinion, or makes a full argument ('I recommend...because...One reason is...') instead of a simple review",
        "produces the description and evaluation but cannot present without reading",
        "writes a clear simple review with description and evaluation accurately and confidently"
      ],
      action: [
        "recast the review slowly, modelling the two-step move: describe what you see ('It is...and...') then shift to your evaluation ('I think...because...') -- not just a neutral report",
        "model one more simple review on a different canteen item (e.g. the fruit salad) to show the same describe-then-evaluate move still works",
        "for a student who is ready, model ONE light recommendation sentence first -- 'For anyone looking for a healthy and affordable meal, this canteen dish is really worth trying -- good nutrition at a fair price.' -- then invite that student to add one recommendation sentence after their evaluation; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it adds a light recommendation without turning the review into a full argument"
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
