const skenario = {
  "persiapan": {
    "papan_tulis": "To solve this problem, ___.\nIf ___, so ___.\nThis will help ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu jadwal sekolah usulan (slot istirahat aktif lima menit disorot hijau di antara setiap dua pelajaran), kartu kerangka usulan solusi empat slot (To solve this problem / If..., so... / This will help), dan kartu ikon (jadwal harian dengan istirahat aktif ditandai, siswa melakukan stretching, poster program sekolah, daftar centang rencana tindakan).",
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
        "teks": "Minta siswa membuka pernyataan masalah yang ditulis sebelumnya."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu sampai semua siswa duduk dan kondusif."
      },
      {
        "tipe": "UCAP",
        "teks": "Good morning. The problem has been identified. Now we propose a solution."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "If you were in charge, what would you do to get students moving more during the school day?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu jadwal sekolah usulan — tunjuk slot istirahat aktif lima menit yang disorot hijau di antara dua pelajaran."
      },
      {
        "tipe": "AKSI",
        "teks": "Tahan sebentar — beri waktu siswa mengamati kartu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this proposed timetable. Could this active break program solve the problem we identified?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan nada formal dan minta pendapatnya. Setelah dua respons atau sekitar tiga puluh detik — lanjutkan."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — lalu letakkan kartu di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us now see how to propose a solution with a clear condition, a result, and a benefit."
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
          "teks": "Ambil kartu jadwal sekolah usulan — tunjuk ke depan dengan penuh tujuan."
        },
        {
          "tipe": "UCAP",
          "teks": "To solve this problem, the school could introduce a five-minute active break after every two lessons as part of its regular school programs."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu jadwal — angkat satu jari (IF) lalu sapukan tangan ke konsekuensinya (SO)."
        },
        {
          "tipe": "UCAP",
          "teks": "If students follow this active break schedule every day, their energy levels will improve and they will concentrate better in the afternoon, so the whole class benefits from better daily routines."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan — buka kedua tangan ke arah siswa."
        },
        {
          "tipe": "UCAP",
          "teks": "This will help students develop healthy habits by making regular movement a normal part of their school day and daily routines."
        },
        {
          "tipe": "AKSI",
          "teks": "Tampilkan semua kartu. Tunjuk ke depan, angkat satu jari lalu sapukan, buka ke arah siswa."
        },
        {
          "tipe": "UCAP",
          "teks": "To solve this problem, the school needs a clear action plan with active breaks built into daily routines across all year groups. If students move for at least ten minutes between lessons, their concentration improves and absences due to fatigue decrease, so the entire school community benefits from better health through these school programs. This will help students build healthy habits that last beyond the classroom."
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
          "teks": "Satukan kedua tangan di depan badan sebagai isyarat bahwa kelas akan memasuki langkah REPEAT."
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
              "teks": "Angkat kartu jadwal sekolah usulan — tunjuk ke depan dengan penuh tujuan."
            },
            {
              "tipe": "UCAP",
              "teks": "To solve this problem, the school could introduce a five-minute active break after every two lessons as part of its regular school programs."
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
              "teks": "Letakkan kartu jadwal — angkat satu jari (IF) lalu sapukan tangan ke konsekuensinya (SO)."
            },
            {
              "tipe": "UCAP",
              "teks": "If students follow this active break schedule every day, their energy levels will improve and they will concentrate better in the afternoon, so the whole class benefits from better daily routines."
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
              "teks": "Buka kedua tangan ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "This will help students develop healthy habits by making regular movement a normal part of their school day and daily routines."
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
              "teks": "Tampilkan semua kartu — tunjuk ke depan, angkat satu jari lalu sapukan, buka ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "To solve this problem, the school needs a clear action plan with active breaks built into daily routines across all year groups. If students move for at least ten minutes between lessons, their concentration improves and absences due to fatigue decrease, so the entire school community benefits from better health through these school programs. This will help students build healthy habits that last beyond the classroom."
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
          "teks": "Now it is your turn. Write your own solution proposal."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk kartu kerangka dan jelaskan logika kondisional: \"IF = the condition you need. SO = the result that follows.\" Minta siswa menyalin pola di buku catatan sebelum melanjutkan. Beri waktu dua menit, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi enam menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis usulan solusi mereka sendiri untuk masalah rendahnya aktivitas fisik siswa. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
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
          "teks": "Write a solution proposal. Name the solution, show the IF-SO logic, then explain the benefit."
        },
        {
          "tipe": "UCAP",
          "teks": "All four components must be distinct, name, condition, consequence, and benefit are not the same step."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang melewatkan logika kondisional If-so, atau yang menggunakan This will help sebagai pengulangan dari To solve this problem."
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
          "teks": "Jika siswa tidak tahu cara membuat logika kondisional — tunjuk kartu kerangka dan minta siswa bertanya: \"IF we do this, THEN what improves? And SO, what is the benefit?\" Jawaban itu adalah kalimat If-so."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu jadwal usulan di papan tulis, dan minta siswa ucapkan \"To solve this problem, the school could...\" lalu satu solusi. Tunggu siswa menulis satu baris, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kerangka solusi empat slot dan isi setiap slot berdasarkan kartu jadwal istirahat aktif.",
        "standar": "Tulis usulan solusi sendiri tanpa membaca kerangka. Gunakan kosakata: daily routines, healthy habits, school programs, atau action plans.",
        "tantangan": "Tulis usulan dan buat If..., so menunjukkan rantai dua konsekuensi: manfaat langsung dan dampak jangka panjang pada kebiasaan sehat atau rutinitas harian."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Tulis usulan dan buat If..., so menunjukkan rantai dua konsekuensi: manfaat langsung dan dampak jangka panjang pada kebiasaan sehat atau rutinitas harian.",
        "perlu_bantuan": "Gunakan kerangka solusi empat slot dan isi setiap slot berdasarkan kartu jadwal istirahat aktif."
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
          "teks": "Minta Siswa A membacakan usulan solusinya ke Siswa B. Siswa B mendengarkan dan memeriksa: ada solusi yang spesifik? ada logika IF-SO yang masuk akal? ada manfaat yang jelas?"
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
          "teks": "Your turn. After your partner shares, give one piece of feedback: does the If-so show a realistic connection between the condition and the result?"
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — pastikan sebagian besar pasangan sudah menghasilkan logika IF-SO yang logis, bukan sirkular."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk pola pertama di papan tulis dan minta siswa ucapkan \"To solve this problem, the school\" lalu satu tindakan."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this pattern.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan usulan solusinya sekali lagi tanpa melihat buku."
        },
        {
          "tipe": "darurat",
          "teks": "Jika waktu tersisa kurang dari lima menit atau kelas tidak lagi kondusif — hentikan aktivitas penyusunan solusi individual. Tunjuk pola To solve this problem, This solution works by, It will help because di papan tulis, minta seluruh kelas mengucapkan seluruh pola bersama satu kali, lalu tutup sesi."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca usulan solusi dari buku catatan ke pasangan. Pasangan menunjuk \"To solve\", \"If\", \"so\", dan \"This will help\" dalam teksmu.",
        "standar": "Bagikan usulan solusi tanpa membaca. Pasangan memeriksa keempat komponen dan apakah logika IF-SO masuk akal.",
        "tantangan": "Bagikan usulan solusi dan pasangan bertanya: \"What would happen if the school only did the solution for one week?\" — kamu jelaskan mengapa solusinya harus menjadi bagian dari rutinitas harian secara konsisten."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Bagikan usulan solusi dan pasangan bertanya: \"What would happen if the school only did the solution for one week?\" — kamu jelaskan mengapa solusinya harus menjadi bagian dari rutinitas harian secara konsisten.",
        "perlu_bantuan": "Baca usulan solusi dari buku catatan ke pasangan. Pasangan menunjuk \"To solve\", \"If\", \"so\", dan \"This will help\" dalam teksmu."
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
          "teks": "Take turns presenting your solution proposal. Others listen for all four components: solution, If-so logic, and benefit."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk semua anggota kelompok berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — pastikan tidak ada anggota yang diam terus selama sesi."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"To solve this problem\" lalu satu tindakan. Jika masih diam — ucapkan nama siswa tersebut terlebih dahulu lalu minta siswa mengulang."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa ucapkan usulan solusinya sekali lagi tanpa melihat buku."
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
        "mudah": "Presentasikan usulan solusi ke kelompok baru menggunakan catatan.",
        "standar": "Presentasikan usulan solusi tanpa membaca.",
        "tantangan": "Presentasikan usulan solusi tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"How would you turn this into a realistic school action plan?\""
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Presentasikan usulan solusi tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"How would you turn this into a realistic school action plan?\"",
        "perlu_bantuan": "Presentasikan usulan solusi ke kelompok baru menggunakan catatan."
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
          "teks": "Give me your To solve this problem sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menyebutkan solusi yang spesifik dan dapat ditindaklanjuti, bukan harapan umum?"
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
          "teks": "Your If-so sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah logika IF-SO menunjukkan hubungan yang logis antara kondisi dan hasil, bukan sirkular?"
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
          "teks": "Angkat kembali kartu kerangka usulan solusi."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk tanda panah IF-SO di kerangka — ucapkan: \"IF = the condition you need. SO = the result that follows. They must be logically connected.\""
        },
        {
          "tipe": "AKSI",
          "teks": "Beri isyarat ke siswa — ucapkan kalimat If-so dari model kalimat 2 bersama-sama."
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
          "teks": "Modelkan logika IF-SO secara eksplisit menggunakan contoh sederhana."
        },
        {
          "tipe": "UCAP",
          "teks": "IF = the condition you need. SO = the result that follows. They must be logically connected, not the same idea twice. For example: IF students get a break to move, their brain chemistry improves, SO concentration returns after the break."
        },
        {
          "tipe": "AKSI",
          "teks": "Modelkan satu usulan solusi lagi tentang masalah sekolah berbeda — misalnya kurangnya ruang hijau — menggunakan pola empat komponen yang sama. Minta siswa mengikuti."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kalimat To solve this problem dalam catatan siswa."
        },
        {
          "tipe": "UCAP",
          "teks": "Try adding a second implementation idea. Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "To solve this problem, schools can introduce an active break program. Another way to implement this solution is to train two student volunteers in each class to lead a two-minute stretching activity between lessons, no equipment needed, and students take ownership of their daily routines."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now add Another way to implement this solution is after your own proposal."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"That expands your proposal into a second implementation approach.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka ucapkan usulan solusi lengkap mereka tanpa melihat buku, atau perkuat kalimat This will help dengan satu manfaat jangka panjang yang spesifik bagi kesejahteraan siswa."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-14.js",
    pattern_id: "PAT-9-14",
    title: "Active Break Program: Proposing a Solution",
    short_title: "Solution Proposal",
    grade: 9,
    genre: "Problem & Solution",
    cluster: "A",
    topic: "Active Break Program",
    context: "Students propose a concrete solution to the problem of low student physical activity at school, explaining how it works and why it will help.",
    context_id: "Siswa mengusulkan solusi konkret untuk masalah rendahnya aktivitas fisik siswa di sekolah, menjelaskan cara kerjanya dan mengapa solusi itu akan membantu.",
    communicative_goal: "propose a solution by naming the action, showing its conditional logic, and explaining the benefit",
    communicative_goal_id: "mengusulkan solusi dengan menyebutkan tindakannya, menunjukkan logika kondisionalnya, dan menjelaskan manfaatnya",
    vocabulary_domain: ["daily routines", "healthy habits", "school programs", "action plans"],
    input_anchor: "problem statement",
    output_anchor: "solution proposal",
    prerequisite_patterns: ["PAT-7-12", "PAT-8-11", "PAT-9-13"],
    reusable_in: ["PAT-9-15"],
    complexity_level: "Integrate",
    notes: "TP keempatbelas Kelas 9, genre Problem & Solution (cluster A -- development Cluster 5). TRIPLE PREREQ: PAT-7-12, PAT-8-11, PAT-9-13. target_pattern PAT-9-14 = 'To solve this problem,... If...,... so... This will help...' (empat komponen: nama solusi -> conditional -> consequence -> benefit). CROSS-GRADE PREREQ: PAT-7-12 (Kelas 7) berasal dari K7, bukan K8 atau K9 -- ini lintas-grade yang bermakna karena PAT-7-12 adalah KAPASITAS CONDITIONAL 'If... you can...' yang menjadi fondasi 'If...,... so...' di K9. Reaktivasi PAT-7-12 (WAJIB, VR-1): 'If you want to..., use...' (K7, conditional advice) direaktivasi sebagai FONDASI CONDITIONAL -- 'If...,... so...' di TP-14 adalah elevasi dari conditional satu-langkah (K7) ke conditional dengan akibat ('so...') dan manfaat ('This will help...'). Reaktivasi PAT-8-11 (WAJIB, VR-1): 'The best way to... is to...' (K8, recommendation register) direaktivasi sebagai KAPASITAS MEREKOMENDASIKAN TINDAKAN -- 'To solve this problem,...' adalah elevasi register dari rekomendasi umum ke solusi spesifik untuk problem yang diidentifikasi. Reaktivasi PAT-9-13 (WAJIB, VR-1): 'The problem is... because... As a result,...' (K9, problem identification) direaktivasi sebagai INPUT untuk solusi -- TP-14 adalah respons langsung terhadap TP-13; yang direaktivasi bukan konten problem tapi KAPASITAS memahami struktur problem sebagai landasan untuk proposal solusi. forbidden_overlap (argumentative recommendation only, general advice, narrative description of a program): 'To solve this problem,...' WAJIB diikuti conditional 'If..., so...' yang menunjukkan mekanisme solusi dan 'This will help...' yang menunjukkan manfaat -- bukan rekomendasi tanpa logika kondisional, bukan penjelasan narasi program. vocabulary_domain: daily routines ✓ model_2/3/4, healthy habits ✓ model_3/4, school programs ✓ model_1/4, action plans ✓ model_4. BOOST extension: tambah 'Another way to implement this solution is...' untuk memperluas proposal dengan cara implementasi alternatif.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. The problem has been identified. Now we propose a solution." },
      { type: "AKSI", text: "Minta siswa membuka pernyataan masalah yang ditulis sebelumnya." },
      // HOOK
      { type: "UCAP", text: "If you were in charge, what would you do to get students moving more during the school day?" },
      { type: "AKSI", text: "Tampilkan kartu jadwal sekolah usulan: slot istirahat aktif 5 menit disorot hijau di antara setiap dua pelajaran." },
      { type: "UCAP", text: "Look at this proposed timetable. Could this active break program solve the problem we identified?" },
    ],

    active_vocabulary: [
      "To solve this problem,",
      "If",
      "so",
      "This will help",
      "daily routines",
      "healthy habits",
      "school programs",
      "action plans"
    ],

    model_sentences: [
      { id: "model_1", text: "To solve this problem, the school could introduce a five-minute active break after every two lessons as part of its regular school programs." },
      { id: "model_2", text: "If students follow this active break schedule every day, their energy levels will improve and they will concentrate better in the afternoon, so the whole class benefits from better daily routines." },
      { id: "model_3", text: "This will help students develop healthy habits by making regular movement a normal part of their school day and daily routines." },
      { id: "model_4", text: "To solve this problem, the school needs a clear action plan with active breaks built into daily routines across all year groups. If students move for at least ten minutes between lessons, their concentration improves and absences due to fatigue decrease, so the entire school community benefits from better health through these school programs. This will help students build healthy habits that last beyond the classroom." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A proposed school timetable card showing five-minute active break slots inserted between every two lessons -- highlighted in green alongside the existing lesson blocks.", description_id: "Kartu jadwal sekolah usulan yang menunjukkan slot istirahat aktif lima menit disisipkan di antara setiap dua pelajaran -- disorot hijau di samping blok pelajaran yang sudah ada.", asset_id: null },
      { id: "visual_2", description: "A solution-proposal frame with four labelled slots: 'To solve this problem,...' (name the solution) / 'If..., so...' (conditional logic and result) / 'This will help...' (benefit for students).", description_id: "Kerangka usulan solusi dengan empat slot berlabel: 'To solve this problem,...' (menyebutkan solusinya) / 'If..., so...' (logika kondisional dan hasilnya) / 'This will help...' (manfaat bagi siswa).", asset_id: null },
      { id: "visual_3", description: "Icons: a daily schedule with active breaks marked (daily routines), a student stretching with a smile (healthy habits), a school event poster (school programs), and a checklist with action items (action plans).", description_id: "Ikon: jadwal harian dengan istirahat aktif ditandai (rutinitas harian), siswa melakukan stretching dengan senyum (kebiasaan sehat), poster acara sekolah (program sekolah), dan daftar centang dengan butir tindakan (rencana tindakan).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points forward purposefully while saying 'To solve this problem,...' -- to signal proposing a specific, actionable solution, not a general wish.", description_id: "Guru menunjuk ke depan dengan penuh tujuan sambil mengucapkan 'To solve this problem,...' -- untuk menandai mengusulkan solusi yang spesifik dan dapat ditindaklanjuti, bukan harapan umum." },
      { id: "gesture_2", description: "Teacher shows one raised finger (IF) then sweeps hand to a consequence (SO) while saying 'If..., so...' -- to signal conditional logic: the solution works IF the condition is met, with a specific result.", description_id: "Guru menunjukkan satu jari terangkat (IF) lalu menyapukan tangan ke konsekuensinya (SO) sambil mengucapkan 'If..., so...' -- untuk menandai logika kondisional: solusi bekerja JIKA kondisinya terpenuhi, dengan hasil yang spesifik." },
      { id: "gesture_3", description: "Teacher opens both hands toward the students while saying 'This will help...' -- to signal that the benefit of the solution is directed specifically at the students in the room.", description_id: "Guru membuka kedua tangan ke arah siswa sambil mengucapkan 'This will help...' -- untuk menandai bahwa manfaat solusinya ditujukan khusus kepada siswa di ruangan itu." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher propose a solution using four components: 'To solve this problem,...' (name the solution) + 'If...,... so...' (conditional logic with consequence) + 'This will help...' (benefit) -- not a general wish, not a recommendation without conditional logic, and not a narrative description of a program.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-12", "PAT-8-11", "PAT-9-13"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the solution-proposal sentences ('To solve this problem,...' / 'If..., so...' / 'This will help...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own solution proposal for the problem of low student physical activity at school.",
      prompt: "Write a solution proposal: 'To solve this problem, ___.' (name a specific solution -- what the school or students will do), 'If ___, ___, so ___.' (IF the solution is implemented, THEN something improves, SO there is a clear benefit), 'This will help ___.' (explain the specific benefit for students). Use: daily routines, healthy habits, school programs, or action plans. Keep all four components -- name, conditional logic, consequence, and benefit -- as distinct steps.",
      change_target: ["solution name (To solve this problem, ...)", "conditional and consequence (If ..., so ...)", "benefit (This will help ...)"],
      differentiation: {
        easy: { task: "Use the solution frame and fill in each slot based on the active break timetable card." },
        standard: { task: "Write your own solution proposal without reading the frame." },
        challenge: { task: "Write the proposal and make 'If..., so...' show a chain of two consequences: the immediate benefit and a longer-term impact on healthy habits or daily routines." }
      },
      support: { pattern_support: ["PAT-7-12", "PAT-8-11", "PAT-9-13"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share solution proposals with a partner and evaluate the conditional logic.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your solution proposal ('To solve this problem,...' / 'If..., so...' / 'This will help...'). Your partner checks: Is the solution specific? Does the IF-SO logic make sense? Is the benefit clear? Then swap. Give one piece of feedback: does the 'If..., so...' show a realistic connection between the condition and the result?",
      differentiation: {
        easy: { task: "Read your proposal to your partner. Your partner points to 'To solve', 'If', 'so', and 'This will help' in your text." },
        standard: { task: "Share your proposal without reading. Your partner checks all four components and the IF-SO logic." },
        challenge: { task: "Share your proposal and your partner asks 'What would happen if the school only did the solution for one week?' -- you explain why the solution needs to be in the daily routine consistently." }
      },
      support: { pattern_support: ["PAT-7-12", "PAT-8-11", "PAT-9-13"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your solution proposal to a new group (solution proposal).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your solution proposal ('To solve this problem,...' / 'If..., so...' / 'This will help...').",
      differentiation: {
        easy: { task: "Present your proposal to the group using your written notes." },
        standard: { task: "Present your proposal without reading." },
        challenge: { task: "Present your proposal, then answer one question from the group: 'How would you turn this into a realistic school action plan?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students name a specific solution ('To solve this problem,...'), show conditional logic ('If..., so...'), and explain the benefit ('This will help...')",
        "students use 'If..., so...' to show a logical connection between the condition and the result -- not just 'If we do this, it is good' but a specific consequence",
        "students propose a solution but skip the conditional logic ('To solve this, students should exercise more. This will help.') or use 'This will help' as a repetition of 'To solve this' rather than a new benefit"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a second implementation idea using 'Another way to implement this solution is...'",
        needs_model: "Repeat the MODEL step, pointing to the IF-SO arrow on the frame -- 'If..., so...' must show a specific condition followed by a logical result, not a general statement.",
        needs_repeat: "Do one more round of REPEAT (choral) with pauses naming the function of each component before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "proposes a solution but the IF-SO logic is circular ('If students exercise, they will exercise more') or gives a benefit without explaining the conditional mechanism",
        "produces all four components correctly but cannot present without reading",
        "proposes a specific solution with clear conditional logic and a meaningful benefit that connects to the problem from TP-13, accurately and confidently"
      ],
      action: [
        "recast the proposal slowly, modelling the IF-SO move explicitly: 'IF = the condition you need. SO = the result that follows. They must be logically connected -- not the same idea twice. Example: IF students get a break to move, their brain chemistry improves, SO concentration returns after the break.'",
        "model one more solution proposal on a different school problem (e.g. lack of green spaces) to show the same four-component structure still works",
        "for a student who is ready, model ONE alternative implementation idea first -- 'To solve this problem, schools can introduce an active break program. Another way to implement this solution is to train two student volunteers in each class to lead a two-minute stretching activity between lessons -- no equipment needed, and students take ownership of their daily routines.' -- then invite that student to add 'Another way to implement this solution is...' after their own proposal; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it expands the solution proposal into a second implementation approach"
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
