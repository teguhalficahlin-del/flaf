const skenario = {
  "persiapan": {
    "papan_tulis": "Both sources ___.\nHowever, Source A ___ while Source B ___.\nTherefore, ___.",
    "kartu": "Siapkan tiga kartu di meja guru — dua dokumen sumber berdampingan (Sumber A: laporan ruang hijau perkotaan dengan data kualitas udara dan suasana hati; Sumber B: laporan kesehatan aktivitas fisik dengan data frekuensi olahraga dan konsentrasi siswa), kartu kerangka perbandingan empat slot (Both sources / However, Source A / while Source B / Therefore), dan kartu ikon (pohon di taman, siswa berlari, hati dengan detak sehat, timbangan perbandingan).",
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
        "teks": "Minta siswa mempersiapkan kedua dokumen sumber sebelum memulai."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu sampai semua siswa duduk dan kondusif."
      },
      {
        "tipe": "UCAP",
        "teks": "Good morning. We are comparing two sources today, carefully."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Consider two topics: green spaces and physical activity. Are they related, or completely separate?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan dua dokumen sumber berdampingan — Sumber A di sebelah kiri (laporan ruang hijau) dan Sumber B di sebelah kanan (laporan aktivitas fisik)."
      },
      {
        "tipe": "AKSI",
        "teks": "Tahan sebentar — beri waktu siswa mengamati kedua kartu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at both sources. What do they agree on, and where do their focuses differ?"
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
        "teks": "Let us now see how to compare two sources and draw a conclusion from that comparison."
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
          "teks": "Ambil kedua kartu sumber — letakkan kedua tangan rata."
        },
        {
          "tipe": "UCAP",
          "teks": "Both sources suggest that green spaces and physical activity are closely connected to better public health."
        },
        {
          "tipe": "AKSI",
          "teks": "Miringkan tangan kiri ke atas untuk Sumber A, lalu miringkan tangan kanan ke arah berbeda untuk Sumber B."
        },
        {
          "tipe": "UCAP",
          "teks": "However, Source A focuses on how trees and parks improve air quality in urban environments, while Source B focuses on how regular exercise directly improves heart rate, energy levels, and concentration."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu sumber — angkat kartu kerangka perbandingan, satukan kedua tangan ke depan."
        },
        {
          "tipe": "UCAP",
          "teks": "Therefore, a comparison of both sources shows that improving public health requires both access to green spaces and regular physical activity, they support each other."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kerangka — tampilkan semua kartu. Letakkan kedua tangan rata, miringkan bergantian, satukan ke depan."
        },
        {
          "tipe": "UCAP",
          "teks": "Both sources agree that outdoor environments support better student health. However, Source A emphasizes the benefits of clean air from green spaces, while Source B emphasizes the direct physical benefits of movement and exercise. Therefore, the comparison suggests that schools should provide both green spaces and structured time for physical activity in their daily routine."
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
              "teks": "Angkat kedua kartu sumber — letakkan kedua tangan rata."
            },
            {
              "tipe": "UCAP",
              "teks": "Both sources suggest that green spaces and physical activity are closely connected to better public health."
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
              "teks": "Miringkan tangan kiri ke atas untuk Sumber A, lalu miringkan tangan kanan ke arah berbeda untuk Sumber B."
            },
            {
              "tipe": "UCAP",
              "teks": "However, Source A focuses on how trees and parks improve air quality in urban environments, while Source B focuses on how regular exercise directly improves heart rate, energy levels, and concentration."
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
              "teks": "Angkat kartu kerangka perbandingan — satukan kedua tangan ke depan."
            },
            {
              "tipe": "UCAP",
              "teks": "Therefore, a comparison of both sources shows that improving public health requires both access to green spaces and regular physical activity, they support each other."
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
              "teks": "Tampilkan semua kartu — letakkan kedua tangan rata, miringkan bergantian, satukan ke depan."
            },
            {
              "tipe": "UCAP",
              "teks": "Both sources agree that outdoor environments support better student health. However, Source A emphasizes the benefits of clean air from green spaces, while Source B emphasizes the direct physical benefits of movement and exercise. Therefore, the comparison suggests that schools should provide both green spaces and structured time for physical activity in their daily routine."
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
          "teks": "Now it is your turn. Write your own source comparison."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk kartu kerangka dan sebutkan fungsi setiap komponen: \"Both = agreement. However/while = different focus. Therefore = conclusion from the comparison.\" Minta siswa menyalin pola di buku catatan sebelum melanjutkan. Beri waktu dua menit, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi enam menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa membaca kedua dokumen sumber lalu menulis perbandingan empat komponen mereka sendiri. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
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
          "teks": "Read Source A and Source B. Write what both agree on, how their focus differs, and your conclusion from the comparison."
        },
        {
          "tipe": "UCAP",
          "teks": "Therefore must come from the comparison of BOTH sources, not from one source alone, not a list of differences without any conclusion."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang menulis daftar persamaan-perbedaan tanpa kesimpulan, atau yang hanya menulis dari satu sumber."
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
          "teks": "Jika siswa tidak tahu cara membuat kesimpulan dari perbandingan — tunjuk slot Therefore di kerangka dan minta siswa bertanya pada diri sendiri: \"What does this difference in focus tell us?\" Jawaban itu adalah kalimat Therefore."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kedua kartu sumber di papan tulis, dan minta siswa ucapkan \"Both sources...\" lalu satu poin yang keduanya sepakati. Tunggu siswa menulis satu baris, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kerangka perbandingan empat slot dan isi setiap slot menggunakan kedua dokumen sumber.",
        "standar": "Tulis perbandingan sumber sendiri tanpa membaca kerangka. Gunakan kosakata: green spaces, physical activity, public health, atau comparison.",
        "tantangan": "Tulis perbandingan dan buat Therefore menjelaskan mengapa perbedaan fokus antara kedua sumber justru memperkuat kesimpulan, bukan melemahkannya."
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
          "teks": "Minta Siswa A membacakan perbandingannya ke Siswa B. Siswa B mendengarkan dan memeriksa: ada poin kesamaan? ada perbedaan fokus yang jelas antara A dan B? apakah Therefore menarik kesimpulan dari perbandingan?"
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
          "teks": "Your turn. After your partner shares, ask: Would you reach the same conclusion if you only read one source?"
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — pastikan sebagian besar pasangan sudah menghasilkan kesimpulan Therefore yang nyata dari perbandingan, bukan sekadar ringkasan satu sumber."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk kedua kartu sumber di papan tulis dan minta siswa ucapkan \"Both sources\" lalu satu poin kesamaan sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this pattern.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan perbandingannya sekali lagi tanpa melihat buku."
        },
        {
          "tipe": "darurat",
          "teks": "Jika waktu tersisa kurang dari lima menit atau kelas tidak lagi kondusif — hentikan aktivitas perbandingan individual. Tunjuk pola Both sources, However, Therefore di papan tulis, minta seluruh kelas mengucapkan seluruh pola bersama satu kali, lalu tutup sesi."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca perbandinganmu ke pasangan. Pasangan menunjuk \"Both\", \"However\", \"while\", dan \"Therefore\" dalam teksmu.",
        "standar": "Bagikan perbandinganmu tanpa membaca. Pasangan memeriksa keempat komponen dan apakah Therefore menambahkan kesimpulan baru.",
        "tantangan": "Bagikan perbandinganmu dan pasangan bertanya: \"Would you reach the same conclusion if you only read one source?\" — kamu jelaskan mengapa keduanya diperlukan."
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
          "teks": "Take turns presenting your comparison. Others listen for all four components: Both sources, However, while, Therefore."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"Both sources\" lalu satu poin kesamaan. Jika masih diam — ucapkan nama siswa tersebut terlebih dahulu lalu minta siswa mengulang."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa ucapkan perbandingannya sekali lagi tanpa melihat buku."
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
        "mudah": "Presentasikan perbandinganmu ke kelompok baru menggunakan catatan.",
        "standar": "Presentasikan perbandinganmu tanpa membaca.",
        "tantangan": "Presentasikan perbandinganmu tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"What would we lose if we only read one source instead of both?\""
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
          "teks": "What do both sources agree on? One sentence starting with Both sources."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa mengidentifikasi poin kesamaan nyata, atau sekadar menyebut topik umum?"
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
          "teks": "Your Therefore sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menarik kesimpulan dari perbandingan, atau hanya merangkum satu sumber terakhir yang disebutkan?"
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
          "teks": "Angkat kembali kartu kerangka perbandingan."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk slot Therefore di kerangka dan ucapkan: \"Therefore must come from comparing BOTH sources — not a summary of one.\""
        },
        {
          "tipe": "AKSI",
          "teks": "Beri isyarat ke siswa — ucapkan kalimat Therefore dari model kalimat 3 bersama-sama."
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
          "teks": "Sebutkan fungsi setiap komponen perlahan."
        },
        {
          "tipe": "UCAP",
          "teks": "Both sources = what they agree on. However and while = where they differ in focus. Therefore = what this difference tells us together, not a summary of one source, a conclusion about both."
        },
        {
          "tipe": "AKSI",
          "teks": "Modelkan satu perbandingan lagi menggunakan sumber berbeda — misalnya dua artikel tentang nutrisi vs. olahraga di sekolah — menggunakan pola empat komponen yang sama. Minta siswa mengikuti."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kalimat Therefore dalam catatan siswa."
        },
        {
          "tipe": "UCAP",
          "teks": "Try adding a significance sentence after your conclusion. Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "Therefore, schools should invest in both green spaces and physical activity programs. This is significant because public health research shows neither alone is enough, students need both."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now add This is significant because after your own Therefore sentence."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"That upgrades your conclusion to an evaluative insight.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka ucapkan perbandingan lengkap mereka tanpa melihat buku, atau memperkuat kalimat Therefore dengan satu alasan spesifik mengapa kedua sumber diperlukan bersama-sama."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-11.js",
    pattern_id: "PAT-9-11",
    title: "Green Spaces and Physical Activity: Comparing Sources",
    short_title: "Comparing Sources",
    grade: 9,
    genre: "Information Synthesis",
    cluster: "A",
    topic: "Green Spaces and Physical Activity",
    context: "Students compare two sources -- one about the benefits of green spaces (Source A) and one about the benefits of physical activity (Source B) -- and draw a conclusion that uses both.",
    context_id: "Siswa membandingkan dua sumber — satu tentang manfaat ruang hijau (Sumber A) dan satu tentang manfaat aktivitas fisik (Sumber B) — lalu menarik kesimpulan yang menggunakan keduanya.",
    communicative_goal: "compare two sources explicitly, identify what they agree and disagree on, and draw a conclusion from the comparison",
    communicative_goal_id: "membandingkan dua sumber secara eksplisit, mengidentifikasi kesamaan dan perbedaannya, serta menarik kesimpulan dari perbandingan tersebut",
    vocabulary_domain: ["green spaces", "physical activity", "public health", "comparison"],
    input_anchor: "two source documents",
    output_anchor: "source comparison",
    prerequisite_patterns: ["PAT-9-10", "PAT-8-06", "PAT-8-08"],
    reusable_in: ["PAT-9-12"],
    complexity_level: "Integrate",
    notes: "TP kesebelas Kelas 9, genre Information Synthesis (cluster A -- development Cluster 4). TRIPLE PREREQ: PAT-9-10, PAT-8-06, PAT-8-08. target_pattern PAT-9-11 = 'Both sources... However, Source A... while Source B... Therefore,...' (perbandingan dua sumber: persamaan -> perbedaan -> kesimpulan). Reaktivasi PAT-9-10 (WAJIB, VR-1): 'Source A says... Source B says... Together, they show...' (K9, Information Synthesis) direaktivasi sebagai KAPASITAS DASAR sintesis dua sumber -- PAT-9-11 memperluas dengan menambahkan DUA DIMENSI BARU: (1) 'However, Source A... while Source B...' yang mengidentifikasi perbedaan fokus antar sumber (tidak ada di PAT-9-10 yang hanya mensintesis persamaan), (2) 'Therefore,...' sebagai kesimpulan evaluatif dari perbandingan. Reaktivasi PAT-8-06 (WAJIB, VR-1): 'On the other hand,...' / contrastive discourse (K8) direaktivasi sebagai KAPASITAS KONTRAS -- 'However, Source A... while Source B...' adalah perluasan register dari kontras interpersonal ke kontras antar-sumber. Reaktivasi PAT-8-08 (WAJIB, VR-1): 'Both... and...' / similarity marker (K8) direaktivasi sebagai KAPASITAS KESAMAAN -- 'Both sources...' adalah versi sintesis-level dari 'Both... and...' yang pertama muncul di K8. forbidden_overlap (reporting only from each source separately, listing similarities only, narrative contrast): WAJIB punya komponen 'Therefore,...' yang menarik kesimpulan dari perbandingan -- bukan daftar persamaan-perbedaan tanpa implikasi. vocabulary_domain: green spaces ✓ model_1/3/4, physical activity ✓ model_1/3/4, public health ✓ model_1/3/4, comparison ✓ model_3/4. BOOST extension: tambah 'This is significant because...' setelah 'Therefore,...' untuk mengeksplisitkan implikasi dari kesimpulan.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. We are comparing two sources today — carefully." },
      { type: "AKSI", text: "Minta siswa mempersiapkan kedua dokumen sumber sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "Consider two topics: green spaces and physical activity. Are they related, or completely separate?" },
      { type: "AKSI", text: "Tampilkan dua dokumen sumber berdampingan: laporan ruang hijau perkotaan dan laporan kesehatan aktivitas fisik." },
      { type: "UCAP", text: "Look at both sources. What do they agree on — and where do their focuses differ?" },
    ],

    active_vocabulary: [
      "Both sources",
      "However,",
      "Source A",
      "while Source B",
      "Therefore,",
      "green spaces",
      "physical activity",
      "public health",
      "comparison"
    ],

    model_sentences: [
      { id: "model_1", text: "Both sources suggest that green spaces and physical activity are closely connected to better public health." },
      { id: "model_2", text: "However, Source A focuses on how trees and parks improve air quality in urban environments, while Source B focuses on how regular exercise directly improves heart rate, energy levels, and concentration." },
      { id: "model_3", text: "Therefore, a comparison of both sources shows that improving public health requires both access to green spaces and regular physical activity -- they support each other." },
      { id: "model_4", text: "Both sources agree that outdoor environments support better student health. However, Source A emphasizes the benefits of clean air from green spaces, while Source B emphasizes the direct physical benefits of movement and exercise. Therefore, the comparison suggests that schools should provide both green spaces and structured time for physical activity in their daily routine." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Two source documents side by side: Source A -- a report about urban green spaces with data about air quality and mood; Source B -- a health report about physical activity with data about exercise frequency and student concentration.", description_id: "Dua dokumen sumber berdampingan: Sumber A -- laporan tentang ruang hijau perkotaan dengan data kualitas udara dan suasana hati; Sumber B -- laporan kesehatan tentang aktivitas fisik dengan data frekuensi olahraga dan konsentrasi siswa.", asset_id: null },
      { id: "visual_2", description: "A comparison frame with four labelled slots: 'Both sources...' (agreement) / 'However, Source A...' (what A focuses on) / 'while Source B...' (what B focuses on) / 'Therefore,...' (conclusion from the comparison).", description_id: "Kerangka perbandingan dengan empat slot berlabel: 'Both sources...' (kesepakatan) / 'However, Source A...' (fokus A) / 'while Source B...' (fokus B) / 'Therefore,...' (kesimpulan dari perbandingan).", asset_id: null },
      { id: "visual_3", description: "Icons: a tree in a park (green spaces), a student running (physical activity), a heart with a healthy pulse (public health), and weighing scales (comparison).", description_id: "Ikon: pohon di taman (ruang hijau), siswa berlari (aktivitas fisik), hati dengan detak sehat (kesehatan masyarakat), dan timbangan (perbandingan).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher places both hands flat while saying 'Both sources...' -- to signal that both sources agree on the same point.", description_id: "Guru meletakkan kedua tangan rata sambil mengucapkan 'Both sources...' -- untuk menandai bahwa kedua sumber sepakat pada poin yang sama." },
      { id: "gesture_2", description: "Teacher tilts one hand up for Source A and the other hand up in a different direction for Source B while saying 'However, Source A... while Source B...' -- to show they are looking at the same issue from different angles.", description_id: "Guru memiringkan satu tangan ke atas untuk Sumber A dan tangan lain ke arah berbeda untuk Sumber B sambil mengucapkan 'However, Source A... while Source B...' -- untuk menunjukkan keduanya melihat isu yang sama dari sudut berbeda." },
      { id: "gesture_3", description: "Teacher brings hands forward together while saying 'Therefore,...' -- to signal that the conclusion comes from combining the full comparison, not just one source.", description_id: "Guru menyatukan kedua tangan ke depan sambil mengucapkan 'Therefore,...' -- untuk menandai bahwa kesimpulan muncul dari memadukan keseluruhan perbandingan, bukan hanya satu sumber." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher compare two sources using the full pattern: 'Both sources...' (shared point) + 'However, Source A... while Source B...' (different focus) + 'Therefore,...' (conclusion from comparison) -- not a list of similarities and differences, and not a report from only one source.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-9-10", "PAT-8-06", "PAT-8-08"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the comparison sentences ('Both sources...' / 'However, Source A... while Source B...' / 'Therefore,...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own source comparison using the full four-component pattern.",
      prompt: "Read Source A (green spaces) and Source B (physical activity), then write: 'Both sources...' (what both agree on), 'However, Source A... while Source B...' (what each focuses on differently), 'Therefore,...' (your conclusion from the comparison). Include: green spaces, physical activity, public health, or comparison. Keep the 'Therefore,...' as a conclusion that uses the comparison -- not a summary of only one source, and not a list of differences without any conclusion.",
      change_target: ["shared point (Both sources ...)", "difference in focus (However, Source A ... while Source B ...)", "conclusion from comparison (Therefore, ...)"],
      differentiation: {
        easy: { task: "Use the comparison frame and fill in each slot using the two source documents." },
        standard: { task: "Write your own source comparison without reading the frame." },
        challenge: { task: "Write the comparison and make 'Therefore,...' explain why the difference in focus actually strengthens the conclusion rather than weakening it." }
      },
      support: { pattern_support: ["PAT-9-10", "PAT-8-06", "PAT-8-08"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share source comparisons with a partner and check for all four components.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your comparison ('Both sources...' / 'However, Source A... while Source B...' / 'Therefore,...'). Your partner checks: Is there a shared point? Is there a clear difference between A and B? Does 'Therefore,...' draw a conclusion from the comparison? Then swap.",
      differentiation: {
        easy: { task: "Read your comparison to your partner. Your partner points to 'Both', 'However', 'while', and 'Therefore' in your text." },
        standard: { task: "Share your comparison without reading. Your partner checks all four components and whether 'Therefore' adds a new conclusion." },
        challenge: { task: "Share your comparison and your partner asks 'Would you reach the same conclusion if you only read one source?' -- you explain why both are necessary." }
      },
      support: { pattern_support: ["PAT-9-10", "PAT-8-06", "PAT-8-08"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your source comparison to a new group (source comparison).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your comparison ('Both sources...' / 'However, Source A... while Source B...' / 'Therefore,...').",
      differentiation: {
        easy: { task: "Present your comparison to the group using your written notes." },
        standard: { task: "Present your comparison without reading." },
        challenge: { task: "Present your comparison, then answer one question from the group: 'What would we lose if we only read one source instead of both?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students identify a shared point ('Both sources...'), name what each source focuses on differently ('However, Source A... while Source B...'), and draw a conclusion ('Therefore,...') that emerges from the comparison",
        "students use 'Therefore,...' as a genuine conclusion from the contrast -- not just a summary of the last source mentioned",
        "students list similarities and differences separately without a conclusion ('Source A says... Source B says... They are different because...') or omit the 'Both sources' agreement entirely"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add 'This is significant because...' after 'Therefore,...' to make the implication of the comparison explicit.",
        needs_model: "Repeat the MODEL step, pointing to the conclusion slot on the frame -- 'Therefore,...' must come from the comparison of BOTH sources, not from one source alone.",
        needs_repeat: "Do one more round of REPEAT (choral) with pauses naming each component's function before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "lists similarities and differences without drawing a conclusion ('Both sources talk about health. Source A focuses on green spaces. Source B focuses on exercise. They are both important.') or leaves out 'Therefore,...'",
        "produces all four components correctly but cannot present without reading",
        "compares both sources with all four components and draws a clear evidence-based conclusion with 'Therefore,...' accurately and confidently"
      ],
      action: [
        "recast the pattern slowly, naming each component's function aloud: 'Both sources = what they agree on. However / while = where they differ in FOCUS. Therefore = what this difference tells us together -- not a summary of one source, a conclusion about both.'",
        "model one more comparison on different sources (e.g. two articles about school nutrition vs. exercise) to show the same four-component pattern still works",
        "for a student who is ready, model ONE significance sentence first -- 'Therefore, schools should invest in both green spaces and physical activity programs. This is significant because public health research shows neither alone is enough -- students need both.' -- then invite that student to add 'This is significant because...' after their own 'Therefore,...' to make the implication explicit; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it upgrades the conclusion from a summary to an evaluative insight"
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
