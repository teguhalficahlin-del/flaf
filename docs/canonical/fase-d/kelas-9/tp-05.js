const skenario = {
  "persiapan": {
    "papan_tulis": "I believe ___ because ___.\nOne strength is ___.\nHowever, ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu ringkasan kebijakan PR, kartu kerangka review berimbang (STRENGTH dan LIMITATION dengan ikon timbangan), dan kartu ikon (buku catatan PR, jadwal belajar, jam, buku peraturan sekolah).",
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
        "teks": "Good morning. Today we evaluate something that affects all of us."
      },
      {
        "tipe": "AKSI",
        "teks": "Minta siswa mempersiapkan diri untuk berpikir secara seimbang, bukan hanya memihak satu sisi."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Think honestly: is the homework policy at this school working well? What is one strength and one problem?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu ringkasan kebijakan PR — berapa banyak mata pelajaran, perkiraan waktu, dan aturan sekolah."
      },
      {
        "tipe": "AKSI",
        "teks": "Tahan sebentar — beri waktu siswa membaca kartu ringkasan."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this policy summary. What do you think are its strengths and limitations?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan nada formal dan minta satu kelebihan kebijakan tersebut. Setelah dua respons atau sekitar tiga puluh detik — lanjutkan."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — lalu letakkan kartu di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us now see how to give a balanced evaluation that acknowledges both sides."
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
          "teks": "Ambil kartu ringkasan kebijakan PR — tunjukkan ke seluruh kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "I believe the current homework policy has real value because it helps students develop regular study habits."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu ringkasan — ambil kartu kerangka review berimbang."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat satu tangan ke atas untuk strength."
        },
        {
          "tipe": "UCAP",
          "teks": "One strength is that homework gives students time to review and strengthen what they learned in class."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kerangka — ambil kartu ikon."
        },
        {
          "tipe": "AKSI",
          "teks": "Perlahan miringkan tangan ke sisi lain untuk limitation."
        },
        {
          "tipe": "UCAP",
          "teks": "However, poor time management becomes a serious problem when homework assignments pile up near exam periods."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu ikon — tampilkan ketiga kartu sekaligus."
        },
        {
          "tipe": "AKSI",
          "teks": "Pegang kedua tangan rata dan setara untuk menunjukkan keseimbangan."
        },
        {
          "tipe": "UCAP",
          "teks": "I believe the homework policy follows school rules that most students understand. One strength is that it builds consistent habits. However, adjustments to the amount given could help students balance their time better."
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
              "teks": "Angkat kartu ringkasan kebijakan PR."
            },
            {
              "tipe": "UCAP",
              "teks": "I believe the current homework policy has real value because it helps students develop regular study habits."
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
              "teks": "Letakkan kartu ringkasan — angkat kartu kerangka berimbang, angkat satu tangan ke atas untuk strength."
            },
            {
              "tipe": "UCAP",
              "teks": "One strength is that homework gives students time to review and strengthen what they learned in class."
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
              "teks": "Letakkan kartu kerangka — angkat kartu ikon, perlahan miringkan tangan ke sisi lain untuk limitation."
            },
            {
              "tipe": "UCAP",
              "teks": "However, poor time management becomes a serious problem when homework assignments pile up near exam periods."
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
              "teks": "Tampilkan ketiga kartu sekaligus — pegang kedua tangan rata dan setara."
            },
            {
              "tipe": "UCAP",
              "teks": "I believe the homework policy follows school rules that most students understand. One strength is that it builds consistent habits. However, adjustments to the amount given could help students balance their time better."
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
          "teks": "Now it is your turn. Write your own balanced review."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk pola di papan tulis dan ikon timbangan di kartu kerangka. Minta siswa menyalin pola di buku catatan sebelum melanjutkan. Beri waktu dua menit, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi enam menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis review berimbang mereka sendiri tentang kebijakan pekerjaan rumah. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
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
          "teks": "Use this pattern. Give a balanced evaluation, one strength and one limitation."
        },
        {
          "tipe": "UCAP",
          "teks": "The tone must be evaluative, not persuasive. However shows a limitation, not a counterattack."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang hanya menulis kelebihan tanpa menulis kekurangan, atau sebaliknya."
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
          "teks": "Jika siswa hanya menulis kelebihan tanpa kekurangan — tunjuk kartu ikon jam di papan tulis dan minta siswa pikirkan dampak kebijakan pada manajemen waktu mereka."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk baris pertama di papan tulis, dan minta siswa ucapkan \"I believe this policy\" lalu satu penilaian umum. Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kerangka review berimbang di papan tulis dan isi setiap slot. Boleh melihat kartu ringkasan kebijakan untuk referensi. Tulis: I believe lalu penilaian keseluruhan karena satu alasan. One strength is lalu satu kelebihan. However lalu satu kekurangan.",
        "standar": "Tulis review berimbang sendiri tanpa membaca kerangka. Gunakan kosakata: homework, study habits, time management, atau school rules.",
        "tantangan": "Tulis review berimbang lalu tambah satu kelebihan atau kekurangan kedua untuk membuat evaluasi lebih lengkap sebelum kesimpulan."
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
          "teks": "Minta Siswa A membacakan atau menyampaikan reviewnya ke Siswa B. Siswa B mendengarkan dan memeriksa: ada klaim dengan alasan? ada kelebihan? ada kekurangan?"
        },
        {
          "tipe": "AKSI",
          "teks": "Siswa B juga mengamati nada: apakah review terdengar berimbang, atau lebih condong ke satu sisi?"
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
          "teks": "Berjalan keliling kelas — amati beberapa pasangan di setiap baris."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk baris pertama di buku catatan siswa dan minta siswa ucapkan \"I believe this policy\" lalu satu penilaian umum."
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
          "teks": "Jika waktu tersisa kurang dari lima menit atau kelas tidak lagi kondusif — hentikan aktivitas kelompok. Tunjuk kerangka review berimbang di papan tulis, minta seluruh kelas mengucapkan satu kalimat One strength is dan satu kalimat However bersama-sama, lalu tutup sesi."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca review dari buku catatan ke pasangan. Pasangan mengelilingi One strength is dan However dalam teks kamu.",
        "standar": "Sampaikan review tanpa membaca. Pasangan memeriksa ketiga komponen dan apakah nada terasa berimbang.",
        "tantangan": "Sampaikan review, lalu pasangan bertanya: \"Is this a balanced review or does it lean more to one side?\" Diskusikan bersama."
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
          "teks": "One person presents the balanced review. The others listen for the claim, the strength, and the limitation."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"I believe this policy\" sebagai pembuka. Jika masih diam — ucapkan nama siswa tersebut terlebih dahulu lalu minta siswa mengulang."
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
        "mudah": "Baca review berimbang dari buku catatan ke kelompok.",
        "standar": "Sampaikan review berimbang tanpa membaca buku.",
        "tantangan": "Sampaikan review berimbang tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"Do you think the strength outweighs the limitation?\""
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
          "teks": "State your strength and your limitation. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan One strength is dan However."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah kedua sisi mendapat bobot yang setara, atau satu sisi jauh lebih panjang dan dominan?"
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
          "teks": "Your overall evaluation, the I believe sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah nada evaluatif, bukan persuasif?"
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
          "teks": "Angkat kembali kartu kerangka berimbang."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon timbangan di kartu — angkat satu tangan untuk strength, miringkan ke sisi lain untuk limitation."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan kalimat 2 dan 3 dengan gesture tersebut — beri isyarat ke siswa dan tunggu seluruh kelas mengucapkan bersama."
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
          "teks": "Tunjuk kartu kerangka berimbang dan tunjuk ikon timbangan."
        },
        {
          "tipe": "UCAP",
          "teks": "This side is the strength. This side is the limitation. A balanced review gives weight to both."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk slot STRENGTH."
        },
        {
          "tipe": "UCAP",
          "teks": "One strength is..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa melengkapi. Tunjuk slot LIMITATION."
        },
        {
          "tipe": "UCAP",
          "teks": "However..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa melengkapi. Bantu frasa per frasa jika diperlukan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kalimat However dalam review siswa di buku catatan."
        },
        {
          "tipe": "UCAP",
          "teks": "Try adding a closing sentence with On balance. Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "On balance, the homework policy has more strengths than limitations, which suggests it is working but could be improved with small adjustments to the weekly amount."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now add your own On balance sentence after your However sentence."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"That closes your review with a clear overall judgment.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka ucapkan review berimbang mereka sendiri tanpa melihat buku, atau menambah satu kelebihan atau kekurangan kedua untuk membuat evaluasi lebih lengkap."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-05.js",
    pattern_id: "PAT-9-05",
    title: "Homework Policy: Writing a Balanced Review",
    short_title: "Homework Policy Review",
    grade: 9,
    genre: "Review",
    cluster: "A",
    topic: "Homework Policy",
    context: "Students evaluate the school homework policy by identifying a strength and a limitation, maintaining a balanced evaluative stance.",
    context_id: "Siswa mengevaluasi kebijakan pekerjaan rumah sekolah dengan mengidentifikasi satu kelebihan dan satu kekurangan, mempertahankan sikap evaluatif yang berimbang.",
    communicative_goal: "evaluate strengths and limitations while maintaining a balanced judgment",
    communicative_goal_id: "mengevaluasi kelebihan dan kekurangan sambil mempertahankan penilaian yang berimbang",
    vocabulary_domain: ["homework", "study habits", "time management", "school rules"],
    input_anchor: "policy summary cards",
    output_anchor: "balanced review",
    prerequisite_patterns: ["PAT-8-13", "PAT-8-15", "PAT-7-15"],
    reusable_in: ["PAT-9-06"],
    complexity_level: "Integrate",
    notes: "TP kelima Kelas 9, genre Review (cluster A). TRIPLE PREREQ: PAT-8-13, PAT-8-15, PAT-7-15. target_pattern PAT-9-05 = 'I believe...because...One strength is...However,...' (claim+reason evaluatif + balanced evaluation: strength + limitation). TITIK KRITIS PEMBEDA DARI PAT-9-02: TOPIK SAMA (homework policy), TAPI TUJUAN KOMUNIKATIF BERBEDA TOTAL. PAT-9-02 = defend a position against a counterpoint (argumentative, persuasif, advokasi publik). PAT-9-05 = evaluate strengths AND weaknesses in a balanced way (evaluatif, tidak memihak, mengakui dua sisi tanpa memenangkan salah satu). Reaktivasi PAT-8-13 (WAJIB, VR-1): 'I believe...because...' (claim+reason K8 argumentatif) direaktivasi dengan REGISTER EVALUATIF -- di sini 'I believe' bukan untuk mengadvokasi posisi publik melainkan untuk menyatakan penilaian umum ('I believe this policy has merits and limitations'). Reaktivasi PAT-8-15 (WAJIB, VR-1): 'Some people think...However,...' (acknowledge-counter K8) direaktivasi sebagai STRUKTUR BALANCED EVALUATION -- 'However,' kini bukan penanda counter-argumen melainkan penanda balanced turn ('One strength is...However,...' = evaluasi dua sisi). Reaktivasi PAT-7-15 (WAJIB, VR-1): personal response to experience 'It was...because...' (K7) menjadi fondasi untuk nada evaluatif personal -- review bukan sekadar fakta objektif, melainkan pengalaman/opini dinilai secara seimbang. forbidden_overlap (exposition defending a public issue, factual report, narrative reflection): nada harus EVALUATIF SEIMBANG -- bukan 'I believe homework is good therefore you should support it' (persuasif), bukan 'Homework is assigned every day and students do it after school' (factual report), bukan 'I remember when homework was difficult' (personal recount). BOOST extension: tambah 'On balance,...which suggests...' sebagai closing evaluatif lebih sophisticated -- tidak mengulang model verbatim.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Today we evaluate something that affects all of us." },
      { type: "AKSI", text: "Minta siswa mempersiapkan diri untuk berpikir secara seimbang, bukan hanya memihak satu sisi." },
      // HOOK
      { type: "UCAP", text: "Think honestly: is the homework policy at this school working well? What is one strength and one problem?" },
      { type: "AKSI", text: "Tampilkan kartu ringkasan kebijakan PR: berapa banyak mata pelajaran, perkiraan waktu, dan aturan sekolah." },
      { type: "UCAP", text: "Look at this policy summary. What do you think are its strengths and limitations?" },
    ],

    active_vocabulary: [
      "I believe",
      "because",
      "One strength is",
      "However,",
      "homework",
      "study habits",
      "time management",
      "school rules"
    ],

    model_sentences: [
      { id: "model_1", text: "I believe the current homework policy has real value because it helps students develop regular study habits." },
      { id: "model_2", text: "One strength is that homework gives students time to review and strengthen what they learned in class." },
      { id: "model_3", text: "However, poor time management becomes a serious problem when homework assignments pile up near exam periods." },
      { id: "model_4", text: "I believe the homework policy follows school rules that most students understand. One strength is that it builds consistent habits. However, adjustments to the amount given could help students balance their time better." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Policy summary cards showing the school homework policy: how many subjects assign homework per day, approximate time expected, and the school rule about completion.", description_id: "Kartu ringkasan kebijakan yang menunjukkan kebijakan pekerjaan rumah sekolah: berapa banyak mata pelajaran yang memberi pekerjaan rumah per hari, perkiraan waktu yang diharapkan, dan aturan sekolah tentang penyelesaiannya.", asset_id: null },
      { id: "visual_2", description: "A balanced review frame with two clearly labelled sides: STRENGTH ('One strength is ...') and LIMITATION ('However, ...'), connected by a scale icon showing balance.", description_id: "Kerangka ulasan berimbang dengan dua sisi berlabel jelas: STRENGTH ('One strength is ...') dan LIMITATION ('However, ...'), dihubungkan dengan ikon timbangan yang menunjukkan keseimbangan.", asset_id: null },
      { id: "visual_3", description: "Icons: a homework notebook, a study timetable (study habits), a clock (time management), and a school rulebook (school rules).", description_id: "Ikon: buku catatan pekerjaan rumah, jadwal belajar (kebiasaan belajar), jam (manajemen waktu), dan buku peraturan sekolah (aturan sekolah).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher raises one hand while saying 'One strength is ...' -- to signal a positive finding in the evaluation.", description_id: "Guru mengangkat satu tangan sambil mengucapkan 'One strength is ...' -- untuk menandai temuan positif dalam evaluasi." },
      { id: "gesture_2", description: "Teacher slowly tilts the hand to the other side while saying 'However, ...' -- to signal a balancing move toward a limitation, not a rebuttal.", description_id: "Guru perlahan memiringkan tangan ke sisi lain sambil mengucapkan 'However, ...' -- untuk menandai gerakan penyeimbang ke arah kekurangan, bukan sanggahan." },
      { id: "gesture_3", description: "Teacher holds both hands flat and level while summing up -- to signal that both sides are given equal weight, not one winning.", description_id: "Guru memegang kedua tangan rata dan setara sambil menyimpulkan -- untuk menandai bahwa kedua sisi diberi bobot yang sama, bukan salah satu yang menang." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher give a balanced evaluation of the homework policy: 'I believe ... because ...' (evaluative claim) + 'One strength is ...' (positive) + 'However, ...' (limitation) -- not a persuasive argument defending homework, and not a neutral factual report.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-13", "PAT-8-15", "PAT-7-15"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the balanced review sentences ('I believe ... because ...' / 'One strength is ...' / 'However, ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own balanced review of the homework policy.",
      prompt: "Write a balanced review using: 'I believe ___ because ___.' (your overall evaluation), 'One strength is ___.' (a positive point), 'However, ___.' (a limitation). Use: homework, study habits, time management, or school rules. Keep the tone balanced -- not persuasive advocacy ('Therefore, you must support homework!') and not a neutral description ('Homework is given every day.').",
      change_target: ["evaluative claim (I believe ... because ...)", "strength (One strength is ...)", "limitation (However, ...)"],
      differentiation: {
        easy: { task: "Use the balanced review frame and complete each slot. You may look at the policy summary cards." },
        standard: { task: "Write your own balanced review without reading the frame." },
        challenge: { task: "Write the balanced review and add a second strength or a second limitation to make the evaluation more complete." }
      },
      support: { pattern_support: ["PAT-8-13", "PAT-8-15", "PAT-7-15"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share balanced reviews with a partner and check for the evaluative claim, strength, and limitation.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your balanced review ('I believe ... because ...' / 'One strength is ...' / 'However, ...'). Your partner checks: Is there a claim with a reason? A strength? A limitation? Then swap. Together, discuss: are both sides given equal attention?",
      differentiation: {
        easy: { task: "Read your balanced review to your partner. Your partner circles 'One strength is' and 'However,' in your text." },
        standard: { task: "Share your review without reading. Your partner checks all three components." },
        challenge: { task: "Share your review and your partner asks 'Is this a balanced review or does it lean more to one side?' -- discuss together." }
      },
      support: { pattern_support: ["PAT-8-13", "PAT-8-15", "PAT-7-15"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your balanced review to a new group (balanced review).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your balanced review ('I believe ... because ...' / 'One strength is ...' / 'However, ...').",
      differentiation: {
        easy: { task: "Read your balanced review to the group." },
        standard: { task: "Present your balanced review without reading." },
        challenge: { task: "Present your balanced review, then answer one question from the group: 'Do you think the strength outweighs the limitation?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students give a balanced evaluation: evaluative claim ('I believe ... because ...'), a strength ('One strength is ...'), and a limitation ('However, ...')",
        "students maintain an evaluative (not persuasive) tone -- 'However,' signals a limitation, not a counterpoint to be defeated",
        "students tip the balance too far (e.g. give three strengths and no limitation) or write a persuasive argument instead of a balanced review"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add an 'On balance,...' closing sentence.",
        needs_model: "Repeat the MODEL step, pointing to the balance-scale visual and emphasising that 'However,' shows the other side -- not a rebuttal, a second perspective.",
        needs_repeat: "Do one more round of REPEAT (choral) on the balanced review sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "tips the evaluation too far one way (all strengths or all limitations) or slides into persuasive advocacy ('Therefore, I recommend changing the policy immediately')",
        "produces all three components but cannot present without reading",
        "produces a genuinely balanced review with evaluative claim, strength, and limitation accurately and confidently"
      ],
      action: [
        "recast the review slowly, pointing to the scale visual: 'This side is the strength -- this side is the limitation -- a balanced review gives weight to both'",
        "model one more balanced review on a different school policy (e.g. the uniform policy) to show the same evaluate-both-sides move still works",
        "for a student who is ready, model ONE closing sentence with 'On balance,...' first -- 'On balance, the homework policy has more strengths than limitations, which suggests it is working but could be improved with small adjustments to the weekly amount.' -- then invite that student to add an 'On balance,...which suggests...' closing to their own review; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it adds a sophisticated summary without tipping the balance toward persuasion"
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
