const skenario = {
  "persiapan": {
    "papan_tulis": "Let's (activity)!\nShall we (activity)?\nSure!\nSorry, I can't.",
    "kartu": "Siapkan kartu waktu kecil — after school dan this weekend.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan empat gambar kegiatan akhir pekan di meja guru — sepeda di jalur, taman dengan pepohonan, perpustakaan dengan rak buku, dan permainan papan."
      }
    ]
  },
  "siapkan_kelas": {
    "settling": [
      {
        "tipe": "AKSI",
        "teks": "Berdiri di depan kelas dengan nada hangat."
      },
      {
        "tipe": "UCAP",
        "teks": "Good morning! Let's get the day started."
      },
      {
        "tipe": "AKSI",
        "teks": "Sapa beberapa siswa di baris depan dan cek apakah mereka sudah siap."
      }
    ],
    "hook": [
      {
        "tipe": "AKSI",
        "teks": "Tampilkan keempat gambar kegiatan akhir pekan."
      },
      {
        "tipe": "UCAP",
        "teks": "Quick question. What do you like to do on weekends?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu dua atau tiga siswa menjawab bebas — terima jawaban pendek dalam Bahasa Indonesia atau Bahasa Inggris."
      },
      {
        "tipe": "UCAP",
        "teks": "Imagine a friend invites you to go cycling after school. What would you say?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons siswa. Jika tidak ada yang menjawab dalam lima detik — tunjuk kartu wajah tersenyum dan ucapkan \"Sure? Or this?\" sambil tunjuk kartu wajah meminta maaf."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — letakkan kartu di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Let us learn how to invite a friend today."
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
          "teks": "Ambil gambar sepeda — lambaikan tangan terbuka ke arah satu siswa dan ke arah diri sendiri."
        },
        {
          "tipe": "UCAP",
          "teks": "Do you like cycling? Yes, I do. Let's go cycling this weekend!"
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu this weekend. Angkat kartu wajah tersenyum dengan jempol ke atas."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan gambar sepeda. Ambil gambar taman."
        },
        {
          "tipe": "AKSI",
          "teks": "Lambaikan tangan terbuka ke arah siswa dan ke arah diri sendiri."
        },
        {
          "tipe": "UCAP",
          "teks": "Shall we go to the park? Sure! I like the park."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat kartu wajah tersenyum — angguk dengan antusias."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan gambar taman. Ambil gambar perpustakaan."
        },
        {
          "tipe": "AKSI",
          "teks": "Lambaikan tangan terbuka ke arah siswa."
        },
        {
          "tipe": "UCAP",
          "teks": "Let's study at the library after school. Sorry, I can't."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan satu tangan di dada dengan bahasa tubuh meminta maaf. Angkat kartu wajah meminta maaf."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan gambar perpustakaan. Ambil gambar permainan papan."
        },
        {
          "tipe": "AKSI",
          "teks": "Lambaikan tangan terbuka ke arah siswa dan ke arah diri sendiri."
        },
        {
          "tipe": "UCAP",
          "teks": "Shall we play games? Sure!"
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat kartu wajah tersenyum — angguk dengan antusias."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan semua kartu dan gambar."
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
      "intro": "Guru mengucapkan satu pertukaran — siswa menirukan bersama. Satu putaran per pertukaran. Gambar dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Pertukaran 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat gambar sepeda — lambaikan tangan terbuka ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "Let's go cycling this weekend!"
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
          "label": "Pertukaran 2",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat gambar taman — lambaikan tangan terbuka ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "Shall we go to the park? Sure! I like the park."
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
          "label": "Pertukaran 3",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat gambar perpustakaan — letakkan satu tangan di dada dengan bahasa tubuh meminta maaf."
            },
            {
              "tipe": "UCAP",
              "teks": "Let's study at the library after school. Sorry, I can't."
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
          "label": "Pertukaran 4",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat gambar permainan papan — lambaikan tangan terbuka ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "Shall we play games? Sure!"
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
          "teks": "Good. Now write your own invitations."
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
      "intro": "Siswa membuat undangan dan respons sendiri dengan mengganti kegiatan. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel keempat gambar kegiatan di papan tulis di sebelah pola."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this pattern. Choose an activity from the pictures."
        },
        {
          "tipe": "UCAP",
          "teks": "Write an invitation and a response. Let's go cycling. Sure. Or: Shall we go to the park? Sorry, I can't. Like that."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang berhenti menulis lebih dari sepuluh detik."
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
          "teks": "Jika siswa tidak tahu harus menggunakan Let's atau Shall we — tunjuk keduanya di papan tulis dan jelaskan dengan gesture: keduanya sama-sama mengundang."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk gambar bersepeda, dan ucapkan \"Let's go cycling.\" sambil lambaikan tangan. Tunggu siswa meniru dan menulis satu pertukaran, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih satu kegiatan dan tulis satu undangan beserta satu respons: Let's blank. Sure. Atau: Shall we go to the blank? Sorry, I can't.",
        "standar": "Tulis dua pertukaran pendek — satu yang diterima dengan Sure dan satu yang ditolak dengan Sorry, I can't. Gunakan Let's di satu pertukaran dan Shall we di pertukaran lainnya.",
        "tantangan": "Tulis dua pertukaran. Mulai setiap pertukaran dengan pertanyaan Do you like terlebih dahulu sebelum mengundang, seperti: Do you like cycling? Yes, I do. Let's go cycling this weekend! Setelah undangan diterima, tambahkan satu kalimat I like. Sertakan satu yang diterima dan satu yang ditolak."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Tulis dua pertukaran. Mulai setiap pertukaran dengan pertanyaan Do you like terlebih dahulu sebelum mengundang, seperti: Do you like cycling? Yes, I do. Let's go cycling this weekend! Setelah undangan diterima, tambahkan satu kalimat I like. Sertakan satu yang diterima dan satu yang ditolak.",
        "perlu_bantuan": "Pilih satu kegiatan dan tulis satu undangan beserta satu respons: Let's blank. Sure. Atau: Shall we go to the blank? Sorry, I can't."
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
          "teks": "Minta Siswa A mengundang Siswa B dengan Let's atau Shall we dari buku catatannya."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B merespons dengan Sure atau Sorry, I can't."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B mengundang balik Siswa A."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Partner A invites first, Partner B responds. Then swap. Work with the person next to you."
        },
        {
          "tipe": "UCAP",
          "teks": "If you are in a group of three, take turns. A, then B, then C."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk role play dua arah."
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
          "teks": "Good. Stay with your partner. Wait for my signal. I will show you which pair to join."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk baris pertama di buku catatan siswa dan minta siswa ucapkan \"Let's\" atau \"Shall we\" untuk memulai."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa mencoba sekali lagi tanpa melihat buku."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan pertukaran dari buku catatan sebagai naskah. Partner A mengundang, Partner B merespons, lalu tukar. Boleh membaca dari buku.",
        "standar": "Role play tanpa membaca buku. Lakukan minimal dua pertukaran masing-masing, sehingga kedua partner pernah mendapat Sure dan Sorry, I can't.",
        "tantangan": "Mulai setiap role play dengan pertanyaan Do you like terlebih dahulu, lalu undang. Setelah undangan diterima, tambahkan I like. Tukar peran dan pastikan satu pertukaran ditolak dengan Sorry, I can't."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Mulai setiap role play dengan pertanyaan Do you like terlebih dahulu, lalu undang. Setelah undangan diterima, tambahkan I like. Tukar peran dan pastikan satu pertukaran ditolak dengan Sorry, I can't.",
        "perlu_bantuan": "Gunakan pertukaran dari buku catatan sebagai naskah. Partner A mengundang, Partner B merespons, lalu tukar. Boleh membaca dari buku."
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
          "teks": "Tunggu semua kelompok terbentuk dan tenang."
        },
        {
          "tipe": "UCAP",
          "teks": "Now perform your invitation role play for the new group."
        },
        {
          "tipe": "UCAP",
          "teks": "One pair goes first. Invite with Let's or Shall we, then respond with Sure or Sorry, I can't."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk semua pasangan tampil ke kelompok baru."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — pastikan semua pasangan mendapat giliran."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada pasangan yang diam dan tidak mulai — tunjuk gambar kegiatan di papan tulis dan minta Siswa A pilih satu sebagai undangan pertama."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang berbicara Bahasa Indonesia selama menonton — ingatkan dengan gesture dan ucapkan \"In English, please.\""
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
        "mudah": "Tampilkan role play dari langkah INTERACT ke kelompok baru. Boleh membaca naskah.",
        "standar": "Tampilkan role play ke kelompok baru tanpa membaca.",
        "tantangan": "Tampilkan role play, lalu lakukan satu pertukaran tambahan dengan kegiatan berbeda di depan kelompok baru — sertakan satu yang diterima dan satu yang ditolak."
      },
      "diferensiasi_baru": {
        "sudah_bisa": "Tampilkan role play, lalu lakukan satu pertukaran tambahan dengan kegiatan berbeda di depan kelompok baru — sertakan satu yang diterima dan satu yang ditolak.",
        "perlu_bantuan": "Tampilkan role play dari langkah INTERACT ke kelompok baru. Boleh membaca naskah."
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
          "teks": "Invite me somewhere. Let's or Shall we. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan undangan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan Let's atau Shall we dengan benar?"
        },
        {
          "tipe": "AKSI",
          "teks": "Respons dengan Sure atau Sorry, I can't sesuai konteks."
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
          "teks": "I say: Shall we go to the park? You answer."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa merespons dengan Sure atau Sorry, I can't."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah respons siswa sesuai dengan undangan?"
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
          "teks": "Angkat kembali gambar taman dan kartu wajah tersenyum."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan dua pertukaran sekali lagi — beri isyarat tangan ke arah siswa setiap pertukaran."
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
          "teks": "Angkat gambar taman — lambaikan tangan ke arah siswa."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Shall we go to the park?"
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan undangan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now answer. Sure! Or: Sorry, I can't."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menjawab."
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi dengan Let's go cycling dan minta siswa yang mengundang kali ini — tekankan perbedaan Let's dan Shall we hanya di awal."
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
          "teks": "Shall we go to the park? Sorry, I can't. Maybe next time."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Say sorry, then add: Maybe next time. Just one time."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Try it with your friend.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang pertukaran dari buku catatan tanpa membaca, atau menulis satu pertukaran baru dengan kegiatan yang berbeda."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-03.js",
    pattern_id: "PAT-7-03",
    title: "Weekend Plans: Making Simple Invitations",
    short_title: "Making Invitations",
    grade: 7,
    genre: "Interpersonal",
    cluster: "B",
    topic: "Weekend Activities",
    context: "Friends plan an activity after school or on the weekend.",
    context_id: "Teman-teman merencanakan kegiatan setelah sekolah atau di akhir pekan.",
    communicative_goal: "invite, accept, and refuse politely",
    communicative_goal_id: "mengundang, menerima, dan menolak dengan sopan",
    vocabulary_domain: ["park", "library", "cycling", "games"],
    input_anchor: "activity pictures",
    output_anchor: "role play",
    prerequisite_patterns: ["PAT-7-01", "PAT-7-02"],
    reusable_in: ["PAT-8-03"],
    complexity_level: "Acquire",
    notes: "TP ketiga Fase D, target pattern PAT-7-03 (membuat/menerima/menolak ajakan: 'Let's... / Shall we...? / Sure. / Sorry, I can't.'). Dua prerequisite direaktivasi sebagai support: PAT-7-02 ('Do you like...? Yes, I do.') sebagai LEAD-IN sebelum mengajak, dan PAT-7-01 ('I like...') sebagai respons natural setelah menerima. 'Sorry, I can't.' (menolak) sengaja meng-echo 'No, I can't.' dari PAT-7-02. Sesuai forbidden_overlap: TIDAK ada instruksi langkah-demi-langkah (First..., then... -- itu genre Procedure), TIDAK ada permintaan IZIN ('May I.../Can I...'), dan saat menolak TIDAK diberi ALASAN ('because...') -- 'Sorry, I can't.' berdiri sendiri (alasan/justifikasi adalah wilayah PAT-7-04 berikutnya, NS-12). Seluruh bentuk wajib di INTERACT/SHARE (Let's.../Shall we...?/Sure./Sorry, I can't.) sudah dimodelkan di MODEL/REPEAT/CHANGE (Checklist D). Ekstensi penghalus opsional 'Maybe next time.' (di luar empat bentuk target, bukan alasan) ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan satu contoh dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning! Let's get the day started." },
      { type: "AKSI", text: "Sapa beberapa siswa dan cek apakah mereka sudah siap." },
      // HOOK
      { type: "UCAP", text: "Quick question — what do you like to do on weekends?" },
      { type: "AKSI", text: "Tampilkan gambar kegiatan akhir pekan: bersepeda, taman, perpustakaan, permainan papan." },
      { type: "UCAP", text: "Imagine a friend invites you to go cycling after school. What would you say?" },
    ],

    active_vocabulary: [
      "Let's",
      "Shall we",
      "Sure.",
      "Sorry, I can't.",
      "cycling",
      "park",
      "library",
      "games",
      "after school",
      "this weekend"
    ],

    model_sentences: [
      { id: "model_1", text: "Do you like cycling? Yes, I do. Let's go cycling this weekend!" },
      { id: "model_2", text: "Shall we go to the park? Sure! I like the park." },
      { id: "model_3", text: "Let's study at the library after school. Sorry, I can't." },
      { id: "model_4", text: "Shall we play games? Sure!" }
    ],

    visual_cues: [
      { id: "visual_1", description: "Activity pictures showing four weekend options: a bicycle on a path (cycling), a park with trees, a library with bookshelves, and a board game.", description_id: "Gambar kegiatan yang menunjukkan empat pilihan akhir pekan: sepeda di jalur (bersepeda), taman dengan pepohonan, perpustakaan dengan rak buku, dan permainan papan.", asset_id: null },
      { id: "visual_2", description: "Two response faces: a smiling face nodding with a thumbs-up (accept = 'Sure!'), and an apologetic face with one hand raised (decline = 'Sorry, I can't.').", description_id: "Dua wajah respons: wajah tersenyum sambil mengangguk dengan jempol ke atas (menerima = 'Sure!'), dan wajah meminta maaf dengan satu tangan terangkat (menolak = 'Sorry, I can't.').", asset_id: null },
      { id: "visual_3", description: "A small time card showing 'after school' (a clock at the end of the day) and 'this weekend' (a calendar with Saturday and Sunday marked).", description_id: "Kartu waktu kecil yang menunjukkan 'after school' (jam di akhir hari) dan 'this weekend' (kalender dengan Sabtu dan Minggu ditandai).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher beckons with an open hand toward themselves and a partner while saying 'Let's...' / 'Shall we...?' to show an invitation.", description_id: "Guru melambaikan tangan terbuka ke arah dirinya dan seorang teman sambil mengucapkan 'Let's...' / 'Shall we...?' untuk menunjukkan undangan." },
      { id: "gesture_2", description: "Teacher gives an enthusiastic thumbs-up and nods while saying 'Sure!'", description_id: "Guru memberi jempol ke atas dengan antusias dan mengangguk sambil mengucapkan 'Sure!'" },
      { id: "gesture_3", description: "Teacher places one hand on their chest with an apologetic shrug while saying 'Sorry, I can't.'", description_id: "Guru meletakkan satu tangan di dada dengan bahasa tubuh meminta maaf sambil mengucapkan 'Sorry, I can't.'" }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher invite a friend to a weekend activity, then accept ('Sure!') or politely decline ('Sorry, I can't.'), starting from a 'Do you like...?' lead-in.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-01", "PAT-7-02"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the invitations and the matching responses together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Make your own invitations and responses by replacing the weekend activity.",
      prompt: "Use the patterns 'Let's [activity].' / 'Shall we [activity]?' and the responses 'Sure!' or 'Sorry, I can't.' Replace the activity with another one from the pictures (cycling, the park, the library, games, ...).",
      change_target: ["activity (Let's ... / Shall we ...?)"],
      differentiation: {
        easy: { task: "Choose one activity and write one invitation with one response: 'Let's ___.' (or 'Shall we ___?') -- 'Sure!' (or 'Sorry, I can't.')." },
        standard: { task: "Write two short exchanges -- one that is accepted ('Sure!') and one that is declined ('Sorry, I can't.'). Use 'Let's...' in one and 'Shall we...?' in the other." },
        challenge: { task: "Write two exchanges, and start each one with a 'Do you like...?' lead-in before inviting, e.g. 'Do you like cycling? Yes, I do. Let's go cycling this weekend!' After an accepted invitation, add one 'I like...' sentence. Include one accepted and one declined exchange." }
      },
      support: { pattern_support: ["PAT-7-01", "PAT-7-02"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Role play planning a weekend activity with a partner -- one invites, the other accepts or politely declines -- then swap roles.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: Partner A invites with 'Let's...' or 'Shall we...?', and Partner B responds with 'Sure!' or 'Sorry, I can't.' Then swap roles so both of you invite and respond.",
      differentiation: {
        easy: { task: "Use your exchange from CHANGE as a script. Partner A invites, Partner B responds, then swap. You may read from your script." },
        standard: { task: "Role play without reading. Do at least two exchanges each, so both partners get an accepted ('Sure!') and a declined ('Sorry, I can't.') response." },
        challenge: { task: "Start each role play with a 'Do you like...?' lead-in, then invite; after an accepted invitation, add 'I like...'. Swap roles and make sure one exchange is declined with 'Sorry, I can't.'" }
      },
      support: { pattern_support: ["PAT-7-01", "PAT-7-02"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Perform your weekend-plan role play again for a new group of classmates.",
      share_mode: "short_dialogue",
      task: "Form a group of 4 with another pair (someone other than your INTERACT partner). Take turns performing your invitation role play for the new group -- invite with 'Let's...' or 'Shall we...?', then accept ('Sure!') or decline ('Sorry, I can't.').",
      differentiation: {
        easy: { task: "Perform your role play from INTERACT for the new group. You may read your script." },
        standard: { task: "Perform your role play for the new group without reading." },
        challenge: { task: "Perform your role play, then do one more exchange with a different activity, including one accepted ('Sure!') and one declined ('Sorry, I can't.') response. Keep to the same forms." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students invite using 'Let's...' and 'Shall we...?' clearly",
        "students respond with 'Sure!' to accept and 'Sorry, I can't.' to decline, matching the invitation",
        "students still mix up inviting and responding, or add an explanation ('because...') that is not needed at this stage"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to try adding a polite softener after declining.",
        needs_model: "Repeat the MODEL step, emphasizing the invitation forms ('Let's...' / 'Shall we...?') and their matching responses.",
        needs_repeat: "Do one more round of REPEAT (choral) on the invitations and responses before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "hesitates when choosing between 'Let's...' and 'Shall we...?'",
        "relies only on the written script and cannot invite or respond without reading it",
        "invites and responds accurately and confidently across several exchanges"
      ],
      action: [
        "recast the invitation slowly, stressing 'Let's...' versus 'Shall we...?' and the matching response",
        "model one more invitation on a different activity to show the same pattern still works",
        "for a student who is ready, model ONE polite softener after declining first -- 'Sorry, I can't. Maybe next time.' -- then invite that student to try it once; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it adds no reason ('because...')"
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
