const skenario = {
  "persiapan": {
    "papan_tulis": "Source A says ___.\nSource B says ___.\nTogether, they show ___.",
    "kartu": "Siapkan tiga kartu di meja guru — dua dokumen sumber berdampingan (Sumber A: surat tulisan tangan lama dengan stempel sekolah; Sumber B: foto hitam-putih berketerangan), kartu kerangka sintesis tiga slot (Source A says / Source B says / Together, they show — dengan tanda panah dari kedua sumber ke sintesis), dan kartu ikon (surat lama, foto hitam-putih, garis waktu gedung sekolah, kaca pembesar).",
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
        "teks": "Pastikan siswa sudah menyiapkan catatan dari sesi sebelumnya."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu sampai semua siswa duduk dan kondusif."
      },
      {
        "tipe": "UCAP",
        "teks": "Good morning. Today we work with two historical sources from the storage room."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "You have seen a handwritten letter and a black-and-white photograph from the old storage room. What do they each tell you?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan dua dokumen sumber berdampingan — Sumber A di sebelah kiri (surat tulisan tangan) dan Sumber B di sebelah kanan (foto hitam-putih berketerangan)."
      },
      {
        "tipe": "AKSI",
        "teks": "Tahan sebentar — beri waktu siswa mengamati kedua kartu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at both source documents. What shared understanding can you draw from them together?"
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
        "teks": "Let us now see how to combine two sources into one coherent understanding."
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
          "teks": "Ambil kartu Sumber A — tunjuk ke kiri."
        },
        {
          "tipe": "UCAP",
          "teks": "Source A says the storage room was used to keep official historical documents from the school's first decade."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu Sumber A — ambil kartu Sumber B, tunjuk ke kanan."
        },
        {
          "tipe": "UCAP",
          "teks": "Source B says the old photographs show student events from the 1970s with captions written by the school principal, giving us a picture of school history we did not know before."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu Sumber B — ambil kartu kerangka sintesis, satukan kedua tangan perlahan."
        },
        {
          "tipe": "UCAP",
          "teks": "Together, they show that the storage room was an important archive containing valuable evidence of the school's earliest years."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kerangka — tampilkan ketiga kartu sekaligus. Tunjuk ke kiri, ke kanan, lalu satukan kedua tangan."
        },
        {
          "tipe": "UCAP",
          "teks": "Source A says the letters describe the early teachers and founders of this school. Source B says the photographs include the first graduation ceremony. Together, they show that these historical documents preserve a picture of our school history that students today have never seen."
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
          "teks": "Satukan kedua tangan di depan dada sebagai isyarat bahwa kelas akan memasuki langkah REPEAT."
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
              "teks": "Angkat kartu Sumber A — tunjuk ke kiri."
            },
            {
              "tipe": "UCAP",
              "teks": "Source A says the storage room was used to keep official historical documents from the school's first decade."
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
              "teks": "Letakkan kartu Sumber A — angkat kartu Sumber B, tunjuk ke kanan."
            },
            {
              "tipe": "UCAP",
              "teks": "Source B says the old photographs show student events from the 1970s with captions written by the school principal, giving us a picture of school history we did not know before."
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
              "teks": "Letakkan kartu Sumber B — angkat kartu kerangka sintesis, satukan kedua tangan perlahan."
            },
            {
              "tipe": "UCAP",
              "teks": "Together, they show that the storage room was an important archive containing valuable evidence of the school's earliest years."
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
              "teks": "Tampilkan ketiga kartu sekaligus — tunjuk ke kiri, ke kanan, lalu satukan kedua tangan."
            },
            {
              "tipe": "UCAP",
              "teks": "Source A says the letters describe the early teachers and founders of this school. Source B says the photographs include the first graduation ceremony. Together, they show that these historical documents preserve a picture of our school history that students today have never seen."
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
          "teks": "Now it is your turn. Write your own synthesis from both sources."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk tanda panah di kartu kerangka sintesis dan ucapkan \"Source A plus Source B together — that is what Together, they show means.\" Minta siswa menyalin pola di buku catatan sebelum melanjutkan. Beri waktu dua menit, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi enam menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa membaca kedua dokumen sumber lalu menulis sintesis tiga bagian mereka sendiri. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
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
          "teks": "Read Source A and Source B. Then write: what Source A says, what Source B says, and what they show together."
        },
        {
          "tipe": "UCAP",
          "teks": "Together, they show must be a new insight, not just a list of two facts, not a report from only one source."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang menulis \"They are both about school history\" tanpa menyebut apa yang keduanya ungkapkan secara bersama-sama."
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
          "teks": "Jika siswa tidak tahu cara membedakan laporan sumber dari sintesis — tunjuk tanda panah di kartu kerangka dan ucapkan \"What do BOTH of these tell us together that neither one says alone? That is Together, they show.\""
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu Sumber A, dan minta siswa ucapkan \"Source A says the storage room...\" lalu satu detail. Tunggu siswa menulis satu baris, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kerangka sintesis tiga slot dan isi setiap slot menggunakan informasi dari kedua dokumen sumber.",
        "standar": "Tulis sintesis tiga bagian sendiri tanpa membaca kerangka. Gunakan kosakata: historical documents, school history, photographs, atau evidence.",
        "tantangan": "Tulis sintesis dan buat Together, they show benar-benar wawasan baru yang tidak dinyatakan oleh salah satu sumber secara terpisah."
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
          "teks": "Minta Siswa A membacakan atau menyampaikan sintesisnya ke Siswa B. Siswa B mendengarkan dan memeriksa: ada laporan Sumber A? ada laporan Sumber B? apakah Together, they show mengatakan sesuatu yang baru dari penggabungan keduanya?"
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
          "teks": "That is it. Your turn now."
        },
        {
          "tipe": "UCAP",
          "teks": "After your partner shares, ask: Could you have said this from just one source?"
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — pastikan sebagian besar siswa sudah menulis Together, they show sebagai sintesis yang nyata, bukan daftar dua fakta."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk kartu Sumber A di papan tulis dan minta siswa ucapkan \"Source A says\" lalu satu informasi dari surat."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this pattern.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan sintesisnya sekali lagi tanpa melihat buku."
        },
        {
          "tipe": "darurat",
          "teks": "Jika waktu tersisa kurang dari lima menit atau kelas tidak lagi kondusif — hentikan aktivitas sintesis individual. Tunjuk pola Source A, Source B, Together di papan tulis, minta seluruh kelas mengucapkan ketiga komponen bersama satu kali, lalu tutup sesi."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca sintesismu ke pasangan. Pasangan menunjuk \"Source A says\", \"Source B says\", dan \"Together\" dalam teksmu.",
        "standar": "Bagikan sintesismu tanpa membaca. Pasangan memeriksa ketiga komponen dan apakah sintesis menambahkan sesuatu yang baru.",
        "tantangan": "Bagikan sintesismu dan pasangan bertanya: \"Could you have said this from just one source?\" — kamu jelaskan mengapa kedua sumber diperlukan."
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
          "teks": "Take turns presenting your synthesis. Others listen for all three components: Source A, Source B, Together they show."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"Source A says\" lalu satu detail. Jika masih diam — ucapkan nama siswa tersebut terlebih dahulu lalu minta siswa mengulang."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa ucapkan sintesisnya sekali lagi tanpa melihat buku."
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
        "mudah": "Presentasikan sintesismu ke kelompok baru menggunakan catatan.",
        "standar": "Presentasikan sintesismu tanpa membaca.",
        "tantangan": "Presentasikan sintesismu tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"What would we still not know if we only had one source?\""
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
          "teks": "What does Source A say? One sentence."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa melaporkan informasi dari sumber, bukan hanya menyebut topik umum?"
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
          "teks": "Your Together, they show sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menyatakan wawasan baru dari penggabungan kedua sumber, atau sekadar daftar dua fakta?"
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
          "teks": "Angkat kembali kartu kerangka sintesis."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk tanda panah di kartu kerangka — ucapkan \"Together, they show must say something new that only comes from combining BOTH sources.\""
        },
        {
          "tipe": "AKSI",
          "teks": "Beri isyarat ke siswa — ucapkan kalimat Together, they show dari model kalimat 3 bersama-sama."
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
          "teks": "Modelkan langkah sintesis perlahan sambil bertanya."
        },
        {
          "tipe": "UCAP",
          "teks": "What does Source A say alone? What does Source B say alone? Now, what do BOTH of these tell us together that neither one says alone?"
        },
        {
          "tipe": "AKSI",
          "teks": "Modelkan satu sintesis lagi menggunakan sumber berbeda — misalnya jadwal lama dan foto kelas — menggunakan pola tiga bagian yang sama. Minta siswa mengikuti."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kalimat Together, they show dalam catatan siswa."
        },
        {
          "tipe": "UCAP",
          "teks": "Try adding an emphasis phrase after your synthesis. Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "Together, they show that these historical documents preserve an important part of our school history. What is most important is that this evidence was almost lost forever."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now add What is most important is after your own Together, they show sentence."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"That highlights the key insight from your synthesis.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka ucapkan sintesis lengkap mereka tanpa melihat buku, atau memperkuat kalimat Together, they show dengan satu aspek spesifik yang tidak dapat diungkapkan oleh salah satu sumber secara terpisah."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-10.js",
    pattern_id: "PAT-9-10",
    title: "The Old Storage Room Documents: Synthesizing Information",
    short_title: "Storage Room Sources",
    grade: 9,
    genre: "Information Synthesis",
    cluster: "A",
    topic: "The Old Storage Room Documents",
    context: "Students compare an old letter from a former principal (Source A) and a photograph with captions (Source B) discovered in the school storage room, and identify the shared understanding that emerges from both.",
    context_id: "Siswa membandingkan surat lama dari kepala sekolah terdahulu (Sumber A) dan foto berketerangan (Sumber B) yang ditemukan di gudang sekolah, lalu mengidentifikasi pemahaman bersama yang muncul dari keduanya.",
    communicative_goal: "combine information from two different sources into one coherent understanding",
    communicative_goal_id: "memadukan informasi dari dua sumber berbeda menjadi satu pemahaman yang koheren",
    vocabulary_domain: ["historical documents", "school history", "photographs", "evidence"],
    input_anchor: "source documents",
    output_anchor: "information synthesis",
    prerequisite_patterns: ["PAT-8-24", "PAT-9-09", "PAT-8-05"],
    reusable_in: ["PAT-9-11", "PAT-9-12"],
    complexity_level: "Integrate",
    notes: "TP kesepuluh Kelas 9, genre Information Synthesis (cluster A -- opener Cluster 4). TRIPLE PREREQ: PAT-8-24, PAT-9-09, PAT-8-05. target_pattern PAT-9-10 = 'Source A says... Source B says... Together, they show...' (sintesis dua sumber menjadi satu pemahaman koheren -- genre baru pertama di Cluster 4). TOPIK BRIDGE: storage room arc dari K8 (PAT-8-17-20) dan K9 Cluster 3 (PAT-9-07-09) selesai -- TP-10 menggunakan dokumen yang sama sebagai SUMBER yang disintesis, bukan topik narasi. Reaktivasi PAT-8-24 (WAJIB, VR-1): 'Title + key info + contact/action + note' (K8 flyer, struktur informasi terorganisir) direaktivasi sebagai KAPASITAS membaca dan mengekstrak key info dari sumber terstruktur -- siswa mengidentifikasi informasi kunci dari Source A (surat) dan Source B (foto+caption) sebelum mensintesis. BUKAN topik Book Swap. Reaktivasi PAT-9-09 (WAJIB, VR-1): 'In conclusion,...Based on this,...' (K9 Cluster 3 closing) direaktivasi sebagai KAPASITAS merangkum menjadi pernyataan koheren -- 'Together, they show...' adalah concluding synthesis move yang secara struktural sejajar dengan 'Based on this,...' di TP-09. Reaktivasi PAT-8-05 (WAJIB, VR-1): 'It is a kind of.../used for...' (K8 deskripsi fungsional) direaktivasi sebagai KAPASITAS deskripsi faktual sumber -- siswa mendeskripsikan isi masing-masing sumber ('Source A says...') sebelum mensintesis. forbidden_overlap (report from single source, presentation summary, factual listing without integration): WAJIB ada komponen 'Together, they show...' sebagai sintesis -- bukan rangkuman satu sumber saja, bukan daftar fakta tanpa integrasi. vocabulary_domain: historical documents ✓ model_1/4, school history ✓ model_2/3/4, photographs ✓ model_2/4, evidence ✓ model_3. BOOST extension: tambah 'What is most important is...' sebagai synthesis-emphasis move setelah 'Together, they show...' -- tidak mengulang model verbatim.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Today we work with two historical sources from the storage room." },
      { type: "AKSI", text: "Pastikan siswa sudah menyiapkan catatan dari sesi sebelumnya." },
      // HOOK
      { type: "UCAP", text: "You have seen a handwritten letter and a black-and-white photograph from the old storage room. What do they each tell you?" },
      { type: "AKSI", text: "Tampilkan dua dokumen sumber berdampingan: surat tulisan tangan lama dengan stempel sekolah, dan foto hitam-putih berketerangan." },
      { type: "UCAP", text: "Look at both source documents. What shared understanding can you draw from them together?" },
    ],

    active_vocabulary: [
      "Source A says",
      "Source B says",
      "Together, they show",
      "historical documents",
      "school history",
      "photographs",
      "evidence"
    ],

    model_sentences: [
      { id: "model_1", text: "Source A says the storage room was used to keep official historical documents from the school's first decade." },
      { id: "model_2", text: "Source B says the old photographs show student events from the 1970s with captions written by the school principal, giving us a picture of school history we did not know before." },
      { id: "model_3", text: "Together, they show that the storage room was an important archive containing valuable evidence of the school's earliest years." },
      { id: "model_4", text: "Source A says the letters describe the early teachers and founders of this school. Source B says the photographs include the first graduation ceremony. Together, they show that these historical documents preserve a picture of our school history that students today have never seen." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Two source documents displayed side by side: Source A -- an old handwritten letter with a school seal and formal headings; Source B -- a black-and-white photograph with typed captions below.", description_id: "Dua dokumen sumber ditampilkan berdampingan: Sumber A -- surat tulisan tangan lama dengan stempel sekolah dan judul formal; Sumber B -- foto hitam-putih dengan keterangan yang diketik di bawahnya.", asset_id: null },
      { id: "visual_2", description: "A synthesis frame with three labelled slots: 'Source A says...' / 'Source B says...' / 'Together, they show...' -- with an arrow flowing from the two sources down into the synthesis.", description_id: "Kerangka sintesis dengan tiga slot berlabel: 'Source A says...' / 'Source B says...' / 'Together, they show...' -- dengan tanda panah mengalir dari kedua sumber turun ke sintesisnya.", asset_id: null },
      { id: "visual_3", description: "Icons: an old letter (historical documents), a black-and-white photograph (photographs), a school building timeline (school history), and a magnifying glass (evidence).", description_id: "Ikon: surat lama (dokumen historis), foto hitam-putih (foto-foto), garis waktu gedung sekolah (sejarah sekolah), dan kaca pembesar (bukti).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points left while saying 'Source A says...' -- to signal reading from one source.", description_id: "Guru menunjuk ke kiri sambil mengucapkan 'Source A says...' -- untuk menandai membaca dari satu sumber." },
      { id: "gesture_2", description: "Teacher points right while saying 'Source B says...' -- to signal reading from the second source.", description_id: "Guru menunjuk ke kanan sambil mengucapkan 'Source B says...' -- untuk menandai membaca dari sumber kedua." },
      { id: "gesture_3", description: "Teacher brings both hands slowly together while saying 'Together, they show...' -- to signal the synthesis move combining both sources into one understanding.", description_id: "Guru menyatukan kedua tangan perlahan sambil mengucapkan 'Together, they show...' -- untuk menandai gerakan sintesis yang memadukan kedua sumber menjadi satu pemahaman." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher combine information from two sources into one coherent synthesis: 'Source A says...' (first source), 'Source B says...' (second source), 'Together, they show...' (synthesis) -- not a summary of one source and not a factual listing without integration.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-24", "PAT-9-09", "PAT-8-05"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the synthesis sentences ('Source A says...' / 'Source B says...' / 'Together, they show...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own three-part synthesis using both source documents.",
      prompt: "Read Source A and Source B, then write: 'Source A says ___ .' (what the letter tells you), 'Source B says ___ .' (what the photographs tell you), 'Together, they show ___ .' (what both sources together reveal). Include: historical documents, school history, photographs, or evidence. Keep the synthesis in 'Together, they show...' -- not just a list of two facts, and not a report from only one source.",
      change_target: ["source A report (Source A says ...)", "source B report (Source B says ...)", "synthesis (Together, they show ...)"],
      differentiation: {
        easy: { task: "Use the synthesis frame and fill in each slot using information from the two source documents." },
        standard: { task: "Write your own three-part synthesis without reading the frame." },
        challenge: { task: "Write the synthesis and make 'Together, they show...' a genuinely new insight that neither source states on its own." }
      },
      support: { pattern_support: ["PAT-8-24", "PAT-9-09", "PAT-8-05"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share information syntheses with a partner and check for all three components.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your synthesis ('Source A says...' / 'Source B says...' / 'Together, they show...'). Your partner checks: Is there information from Source A? From Source B? Is 'Together, they show...' a genuine new insight from combining both? Then swap.",
      differentiation: {
        easy: { task: "Read your synthesis to your partner. Your partner points to 'Source A says', 'Source B says', and 'Together' in your text." },
        standard: { task: "Share your synthesis without reading. Your partner checks all three components and whether the synthesis adds something new." },
        challenge: { task: "Share your synthesis and your partner asks 'Could you have said this from just one source?' -- you explain why both sources are needed." }
      },
      support: { pattern_support: ["PAT-8-24", "PAT-9-09", "PAT-8-05"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your information synthesis to a new group (information synthesis).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your synthesis ('Source A says...' / 'Source B says...' / 'Together, they show...').",
      differentiation: {
        easy: { task: "Present your synthesis to the group using your written notes." },
        standard: { task: "Present your synthesis without reading." },
        challenge: { task: "Present your synthesis, then answer one question from the group: 'What would we still not know if we only had one source?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students report from both sources ('Source A says...' / 'Source B says...') and then synthesize with 'Together, they show...' as a new integrating insight",
        "students distinguish between reporting a source (what it says) and synthesizing (what both together reveal)",
        "students report from both sources but give a simple list rather than a synthesis ('Source A says... Source B also says... They are both about school history.') or summarize only one source"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add 'What is most important is...' after their synthesis to emphasise the key insight.",
        needs_model: "Repeat the MODEL step, pointing to the synthesis arrow on the frame -- 'Together, they show' must say something new that only comes from combining both sources.",
        needs_repeat: "Do one more round of REPEAT (choral) on the three-part synthesis before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives a list from both sources without a genuine synthesis ('Source A says... Source B says... Both are about school history.') or summarizes only one source",
        "produces all three parts correctly but cannot present without reading",
        "synthesizes from both sources into a new insight with 'Together, they show...' accurately and confidently"
      ],
      action: [
        "recast the synthesis slowly, modelling the three-step move: report Source A -- report Source B -- then ask 'What do BOTH of these tell us together that neither one says alone?' -- that is 'Together, they show...'",
        "model one more synthesis on different sources (e.g. an old timetable and a class photograph) to show the same three-part pattern still works",
        "for a student who is ready, model ONE emphasis phrase first -- 'Together, they show that these historical documents preserve an important part of our school history. What is most important is that this evidence was almost lost forever.' -- then invite that student to add 'What is most important is...' after their own synthesis to highlight the key insight; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it deepens the synthesis without replacing any component"
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
