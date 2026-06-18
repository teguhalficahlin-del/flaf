const skenario = {
  "persiapan": {
    "papan_tulis": "___ friends like ___.\n___ friends can play ___.",
    "kartu": "Siapkan kartu bergambar kegiatan klub (bernyanyi, menggambar, bulu tangkis, catur) dan dua kartu jawaban (hijau jempol atas untuk Yes, merah jempol bawah untuk No) di meja guru.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan tiga poster klub di papan tulis — poster Klub Musik, poster Klub Seni, dan poster Klub Olahraga."
      },
      {
        "tipe": "AKSI",
        "teks": "Siapkan lembar tally kosong (nama kegiatan + kolom Yes / No) untuk setiap siswa."
      }
    ]
  },
  "siapkan_kelas": {
    "settling": [
      {
        "tipe": "AKSI",
        "teks": "Berdiri di depan kelas."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu semua siswa duduk dan perhatian ke depan."
      },
      {
        "tipe": "UCAP",
        "teks": "Good morning, everyone! Please take your seats."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons siswa."
      }
    ],
    "hook": [
      {
        "tipe": "AKSI",
        "teks": "Arahkan tangan ke ketiga poster klub di papan tulis."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these posters on the board. What clubs do you see?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu beberapa siswa menjawab — terima jawaban singkat dalam Bahasa Indonesia atau Bahasa Inggris."
      },
      {
        "tipe": "UCAP",
        "teks": "Which club would you like to join this semester? Raise your hand!"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu beberapa siswa mengangkat tangan. Jika tidak ada yang merespons dalam lima detik — tunjuk satu poster dan tanya \"Music Club or Sports Club?\" untuk memancing respons."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — lalu tunjuk pola di papan tulis."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Before we join a club, let us learn how to ask a friend."
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
          "teks": "Angkat kartu jawaban hijau (Yes) dan merah (No) — tunjukkan ke kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk poster Klub Musik."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka telapak tangan ke arah satu siswa sambil angkat alis."
        },
        {
          "tipe": "UCAP",
          "teks": "I like music. Do you like singing? Yes, I do."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat kartu hijau sambil mengangguk dengan jempol ke atas."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu hijau. Ambil kartu bergambar tangan menggambar."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka telapak tangan ke arah siswa lain sambil angkat alis."
        },
        {
          "tipe": "UCAP",
          "teks": "Do you like drawing? No, I don't."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat kartu merah sambil gelengkan kepala dengan jempol ke bawah."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu bergambar. Ambil kartu bergambar raket bulu tangkis — peragakan mengayunkan raket."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka telapak tangan ke arah siswa lain sambil angkat alis."
        },
        {
          "tipe": "UCAP",
          "teks": "Can you play badminton? Yes, I can."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat kartu hijau sambil mengangguk dengan jempol ke atas."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu bulu tangkis. Ambil kartu bergambar papan catur — peragakan menggerakkan bidak catur."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka telapak tangan ke arah siswa lain sambil angkat alis."
        },
        {
          "tipe": "UCAP",
          "teks": "Can you play chess? No, I can't."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat kartu merah sambil gelengkan kepala dengan jempol ke bawah."
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
      "intro": "Guru mengucapkan satu pertukaran — siswa menirukan bersama. Satu putaran per kalimat. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Pertukaran 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat kartu bergambar bernyanyi — buka telapak tangan ke arah siswa sambil angkat alis."
            },
            {
              "tipe": "UCAP",
              "teks": "I like music. Do you like singing? Yes, I do."
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
              "teks": "Angkat kartu bergambar menggambar — buka telapak tangan ke arah siswa sambil angkat alis."
            },
            {
              "tipe": "UCAP",
              "teks": "Do you like drawing? No, I don't."
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
              "teks": "Angkat kartu bergambar raket bulu tangkis — peragakan mengayunkan raket."
            },
            {
              "tipe": "UCAP",
              "teks": "Can you play badminton? Yes, I can."
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
              "teks": "Angkat kartu bergambar papan catur — peragakan menggerakkan bidak catur."
            },
            {
              "tipe": "UCAP",
              "teks": "Can you play chess? No, I can't."
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
          "teks": "Good. Now it is your turn. Write your own questions."
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
      "intro": "Siswa membuat pertanyaan Yes/No sendiri dan menjawabnya dengan short answer. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel kartu bergambar kegiatan klub di papan tulis di sebelah pola."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this pattern. Choose an activity from the posters or picture cards."
        },
        {
          "tipe": "UCAP",
          "teks": "Write your question and the short answer. Do you like drawing? Yes, I do. Can you play chess? No, I can't. Like that."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang berhenti menulis lebih dari sepuluh detik atau belum menulis apapun."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah lima menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop writing. Now keep your notebook open and wait."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu kegiatan yang ingin ditanyakan — tunjuk kartu bergambar di papan tulis dan minta siswa pilih salah satu."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu bergambar bernyanyi, dan ucapkan \"Do you like singing?\" sambil buka telapak tangan. Tunggu siswa meniru dan menulis, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih satu kegiatan dari poster dan tulis satu pertanyaan beserta jawabannya: Do you like singing? Yes, I do. Atau: Can you play chess? No, I can't.",
        "standar": "Tulis dua pertanyaan beserta jawabannya — satu pertanyaan Do you like dan satu pertanyaan Can you play. Pastikan jawaban pendeknya sesuai: do atau don't untuk Do you, can atau can't untuk Can you.",
        "tantangan": "Tulis tiga pertanyaan beserta jawabannya, campurkan Do you like dan Can you play. Untuk satu kegiatan olahraga, tulis keduanya: Do you like badminton? Can you play badminton?"
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Siswa berjalan keliling kelas dan bertanya kepada beberapa teman menggunakan pertanyaan dari langkah CHANGE. Setiap siswa membawa lembar tally.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Bagikan lembar tally (satu per siswa) — kolom berisi nama kegiatan dan dua kolom: Yes / No."
        },
        {
          "tipe": "UCAP",
          "teks": "Take this tally sheet. Walk around the class. Ask your classmates your questions."
        },
        {
          "tipe": "UCAP",
          "teks": "Put a mark in the Yes or No column for each answer you get."
        },
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
          "teks": "Minta Siswa A bertanya kepada Siswa B menggunakan pertanyaannya. Siswa B menjawab dengan short answer. Siswa A memberi tanda di lembar tally."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now go. You have eight minutes."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk berjalan keliling."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati beberapa pasang siswa di berbagai baris."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop. Go back to your seat."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa diam lebih dari sepuluh detik dan tidak mulai bertanya — dekati, tunjuk pertanyaan pertama di buku catatannya, dan ucapkan \"Ask your friend this question.\" Tunggu siswa mulai bertanya sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa sudah selesai bertanya kepada empat teman sebelum waktunya — minta siswa tanya kepada satu teman lagi dengan pertanyaan berbeda."
        }
      ],
      "diferensiasi": {
        "mudah": "Tanya dua teman menggunakan satu pertanyaan Do you like dari buku catatan. Beri tanda di lembar tally untuk setiap jawaban. Boleh membaca pertanyaan dari buku.",
        "standar": "Tanya tiga teman dengan kedua pertanyaanmu tanpa membaca buku. Beri tanda di lembar tally untuk setiap jawaban.",
        "tantangan": "Tanya empat teman. Setelah teman menjawab, tambahkan informasimu sendiri: I like chess too. I can play chess. Lalu beri tanda di lembar tally."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Siswa bergabung dengan kelompok empat orang — bukan teman dari langkah INTERACT — dan melaporkan hasil tally survey.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk siapa bergabung dengan siapa — jangan biarkan siswa memilih sendiri."
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
          "teks": "Look at your tally sheet. Write one or two sentences about your results."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this: blank friends like blank. Or: blank friends can play blank."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola pelaporan di papan tulis (tulis cepat jika belum ada):"
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu dua menit untuk menulis kalimat laporan."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa di tiap kelompok sebagai pembicara pertama."
        },
        {
          "tipe": "UCAP",
          "teks": "The person I point to starts first. Read your report sentences to your group."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu empat menit untuk semua anggota kelompok berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — amati apakah siswa menggunakan pola pelaporan yang benar."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk lembar tally siswa tersebut dan minta mereka ucapkan angka yang ada di kolom Yes. Bantu mereka menyusun kalimat: \"Two friends like ...\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa bingung perbedaan pola like dan can play dalam laporan — tunjuk papan tulis dan jelaskan kata-katanya tetap sama seperti di pertanyaan."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah empat menit — ketuk meja sekali sebagai tanda berhenti."
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
        "mudah": "Tulis dan baca satu kalimat laporan: blank friends like blank. Misalnya: Two friends like drawing.",
        "standar": "Tulis dua kalimat laporan — satu dengan like dan satu dengan can play. Baca keduanya ke kelompok.",
        "tantangan": "Tulis kalimat laporan untuk setiap pertanyaan yang kamu tanyakan, gunakan blank friends like atau most friends can play. Baca laporan lengkapmu ke kelompok."
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
          "teks": "Ask me one question. Do you like, or can you play. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan pertanyaan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan Do you like atau Can you play dengan benar?"
        },
        {
          "tipe": "AKSI",
          "teks": "Jawab dengan short answer yang sesuai."
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
          "teks": "Answer this: Can you play badminton?"
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menjawab dengan Yes, I can atau No, I can't."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah jawaban pendeknya sesuai dengan tipe pertanyaan?"
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
          "teks": "Angkat kembali kartu bergambar kegiatan klub."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan dua pertukaran — Do you like drawing? No, I don't. Can you play badminton? Yes, I can. — beri isyarat tangan ke arah siswa setiap pertukaran."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu seluruh kelas mengucapkan bersama."
        },
        {
          "tipe": "UCAP",
          "teks": "Good work today. We will practice more next time."
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
          "teks": "Angkat kartu bergambar bernyanyi — buka telapak tangan ke arah siswa."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Do you like singing?"
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan pertanyaan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now answer. Yes, I do. Or No, I don't."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menjawab."
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi dengan Can you play badminton jika siswa sudah bisa Do you like — tekankan bahwa jawabannya berbeda: can atau can't."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk nama satu teman siswa tersebut di lembar tally."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "This is Rina. She likes drawing. She can play badminton."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Tell me about one friend from your tally sheet. Just two sentences."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Try another friend.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang pertanyaan dan jawaban dari buku catatan tanpa membaca lembar tally, atau menambah satu pertanyaan baru di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-02.js",
    pattern_id: "PAT-7-02",
    title: "School Clubs: Asking About Preferences",
    short_title: "Asking Preferences",
    grade: 7,
    genre: "Interpersonal",
    cluster: "A",
    topic: "School Clubs",
    context: "Students ask classmates about interests before joining clubs.",
    context_id: "Siswa bertanya kepada teman sekelas tentang minat mereka sebelum bergabung dengan klub.",
    communicative_goal: "ask and answer simple preference questions",
    communicative_goal_id: "bertanya dan menjawab pertanyaan sederhana tentang preferensi",
    vocabulary_domain: ["clubs", "sports", "music", "arts"],
    input_anchor: "club posters",
    output_anchor: "class survey",
    prerequisite_patterns: ["PAT-7-01"],
    reusable_in: ["PAT-8-02"],
    complexity_level: "Acquire",
    notes: "TP kedua Fase D, target pattern PAT-7-02 (Yes/No questions 'Do you like...?' / 'Can you play...?' dengan jawaban pendek 'Yes, I do./No, I don't./Yes, I can./No, I can't.'). prerequisite_patterns berisi PAT-7-01 ('I am/I like/I can'), yang direaktivasi sebagai support di MODEL (guru membuka dengan 'I like music' sebelum bertanya) dan di INTERACT challenge (siswa menambahkan 'I like.../I can...' setelah menjawab). Sesuai forbidden_overlap, TP ini HANYA memakai Yes/No questions -- tidak ada WH-question, tidak ada permintaan alasan ('because...'), tidak ada opini terbuka. SHARE (titik kebocoran yang ditemukan di PILOT TP-01) melaporkan hasil survei HANYA dengan bentuk yang sudah dimodelkan, atau dengan subjek jamak yang TIDAK mengubah konjugasi ('Two friends like...', 'Most friends can play...' -- 'like'/'can' identik dengan 'I like'/'I can'); tidak ada orang ketiga tunggal (likes/-s) maupun bentuk lampau di level diferensiasi manapun. Pelaporan orang ketiga tunggal ('She likes.../He can...') ditempatkan sebagai ekstensi opsional di BOOST (guru memodelkan satu contoh dulu, individual/reaktif) sesuai Schema JS Bagian 9.2.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, everyone! Please take your seats." },
      { type: "AKSI", text: "Pastikan semua siswa sudah duduk dan perhatian ke depan." },
      // HOOK
      { type: "UCAP", text: "Look at these posters on the board — what clubs do you see?" },
      { type: "AKSI", text: "Arahkan perhatian siswa ke poster Klub Musik, Klub Seni, dan Klub Olahraga." },
      { type: "UCAP", text: "Which club would you like to join this semester? Raise your hand!" },
    ],

    active_vocabulary: [
      "like", "play",
      "can", "can't",
      "Yes, I do.", "No, I don't.",
      "Yes, I can.", "No, I can't.",
      "music", "singing",
      "drawing",
      "badminton", "chess"
    ],

    model_sentences: [
      { id: "model_1", text: "I like music. Do you like singing? Yes, I do." },
      { id: "model_2", text: "Do you like drawing? No, I don't." },
      { id: "model_3", text: "Can you play badminton? Yes, I can." },
      { id: "model_4", text: "Can you play chess? No, I can't." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Club posters on a board, e.g. a Music Club poster (microphone icon), an Art Club poster (paintbrush icon), and a Sports Club poster (badminton racket icon).", description_id: "Poster klub di papan, misalnya poster Klub Musik (ikon mikrofon), poster Klub Seni (ikon kuas), dan poster Klub Olahraga (ikon raket bulu tangkis).", asset_id: null },
      { id: "visual_2", description: "Picture cards showing club activities: a person singing, a hand drawing, a badminton racket and shuttlecock, a chess board.", description_id: "Kartu bergambar yang menunjukkan kegiatan klub: seseorang bernyanyi, tangan menggambar, raket dan kok bulu tangkis, papan catur.", asset_id: null },
      { id: "visual_3", description: "Two answer cards: a green card with a thumbs-up for 'Yes', and a red card with a thumbs-down for 'No'.", description_id: "Dua kartu jawaban: kartu hijau dengan jempol ke atas untuk 'Yes', dan kartu merah dengan jempol ke bawah untuk 'No'.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher opens one palm toward a student and raises eyebrows while asking 'Do you like...?' / 'Can you play...?' to show it is a question.", description_id: "Guru membuka satu telapak tangan ke arah siswa dan mengangkat alis sambil bertanya 'Do you like...?' / 'Can you play...?' untuk menunjukkan bahwa itu pertanyaan." },
      { id: "gesture_2", description: "Teacher mimes the activity while asking 'Can you play...?' -- swinging a racket for badminton, moving a chess piece for chess.", description_id: "Guru memperagakan kegiatannya sambil bertanya 'Can you play...?' -- mengayunkan raket untuk bulu tangkis, menggerakkan bidak untuk catur." },
      { id: "gesture_3", description: "Teacher nods with a thumbs-up for 'Yes, I do. / Yes, I can.' and shakes their head with a thumbs-down for 'No, I don't. / No, I can't.'", description_id: "Guru mengangguk dengan jempol ke atas untuk 'Yes, I do. / Yes, I can.' dan menggelengkan kepala dengan jempol ke bawah untuk 'No, I don't. / No, I can't.'" }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher ask and answer simple Yes/No questions about club activities, starting from 'I like...' and moving to 'Do you like...?' and 'Can you play...?'.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-01"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the questions and the matching short answers together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Make your own Yes/No questions and short answers by replacing the club activity.",
      prompt: "Use the patterns 'Do you like [activity]? Yes, I do. / No, I don't.' and 'Can you play [activity]? Yes, I can. / No, I can't.' Replace the activity with another one from the club posters (singing, drawing, badminton, chess, ...).",
      change_target: ["activity (Do you like ...?)", "activity (Can you play ...?)"],
      differentiation: {
        easy: { task: "Choose one activity from the posters and write one question with its answer: 'Do you like ___? Yes, I do.' (or 'No, I don't.')." },
        standard: { task: "Write two questions with their short answers -- one 'Do you like ___?' question and one 'Can you play ___?' question. Make sure each answer matches its question (do/don't for 'Do you', can/can't for 'Can you')." },
        challenge: { task: "Write three questions with their short answers, mixing 'Do you like...?' and 'Can you play...?'. For ONE sport, ask both forms about the same activity, e.g. 'Do you like badminton? Can you play badminton?'" }
      }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Ask several classmates your Yes/No questions and record their answers as a class survey.",
      interaction_mode: "walk_around",
      task: "Walk around the class with your questions and a simple tally sheet (activity name + two columns: Yes / No). Ask classmates your 'Do you like...?' and 'Can you play...?' questions, and put a mark in the Yes or No column for each answer.",
      differentiation: {
        easy: { task: "Ask 2 classmates your one 'Do you like ___?' question from CHANGE. Mark each answer (Yes / No) on your tally sheet. You may read your question from your CHANGE script." },
        standard: { task: "Ask 3 classmates both of your questions ('Do you like...?' and 'Can you play...?') without reading. Mark every answer on your tally sheet." },
        challenge: { task: "Ask 4 classmates your questions. After a classmate answers, add your own information using 'I like...' or 'I can...', e.g. 'Do you like chess? -- Yes, I do. -- I like chess too. I can play chess.' Mark every answer on your tally sheet." }
      },
      support: { pattern_support: ["PAT-7-01"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Report the results of your class survey using simple sentences about your classmates.",
      share_mode: "short_writing",
      task: "Form a group of 4 with nearby classmates. Look at your tally sheet and write a few report sentences using the frames 'A: [number] friends like [activity].' and 'B: [number] friends can play [activity].' You may also use 'Most friends like/can play [activity].' Then take turns reading your report sentences to your group and compare your survey results. (The frame words 'like' and 'can play' stay the same as in 'I like / I can' -- you do not change them.)",
      differentiation: {
        easy: { task: "Write one report sentence with the frame: '___ friends like ___.' (for example, 'Two friends like drawing.'). Read it to your group." },
        standard: { task: "Write two report sentences -- one with 'like' and one with 'can play': '___ friends like ___.' and '___ friends can play ___.' Read them to your group." },
        challenge: { task: "Write a report sentence for each question you asked, using '[number] friends like/can play ___' or 'Most friends like/can play ___'. Read your whole report to your group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students ask 'Do you like...?' and 'Can you play...?' questions clearly, with rising intonation",
        "students answer with the matching short form (Yes, I do. / No, I don't. for 'Do you'; Yes, I can. / No, I can't. for 'Can you')",
        "students still mix up 'Do you' and 'Can you', or give a short answer that does not match the question type"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to try reporting one survey result about a classmate.",
        needs_model: "Repeat the MODEL step, emphasizing the difference between 'Do you LIKE...?' and 'Can you PLAY...?' and their matching answers.",
        needs_repeat: "Do one more round of REPEAT (choral) on the questions and short answers before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "hesitates when choosing between 'Do you like...?' and 'Can you play...?'",
        "relies only on the written script and cannot ask a question without reading it",
        "asks and answers both question types accurately and confidently with several classmates"
      ],
      action: [
        "recast the question slowly, stressing the key word -- 'Do you LIKE...?' versus 'Can you PLAY...?' -- and the matching short answer",
        "model one more pair of questions on a different topic (e.g. a school subject) to show the same pattern still works",
        "for a student who is ready, model ONE third-person report about a classmate first -- '[Name] likes drawing. He/She can play badminton.' -- then invite that student to report ONE of their own survey results the same way; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity"
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
