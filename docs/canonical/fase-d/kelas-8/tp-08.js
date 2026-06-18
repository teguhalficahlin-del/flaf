const skenario = {
  "persiapan": {
    "papan_tulis": "This happens because ___.\nThis helps ___ to ___.",
    "kartu": "Siapkan tiga kartu di meja guru — grafik data sederhana yang menunjukkan detak jantung sebelum dan selama olahraga (istirahat vs aktif), kartu fakta-ke-alasan (gambar fakta dengan tanda panah ke \"This happens because ___\" dan \"This helps ___ to ___\"), dan kartu ikon tubuh (jantung berdetak, paru-paru bernapas, otot menggunakan energi selama olahraga).",
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
        "teks": "Alright, class. Let us get into science mode today."
      },
      {
        "tipe": "AKSI",
        "teks": "Kondisikan kelas agar siap mengamati data."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "What happens to your heart when you run or do exercise? Can you feel it?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan grafik data sederhana: detak jantung sebelum dan selama olahraga — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this chart. What do you notice about heart rate during exercise versus at rest?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to connect what we observe to a reason or an effect, using This happens because and This helps ... to."
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
          "teks": "Tunjuk ikon jantung di kartu ikon — satukan kedua tangan untuk \"which\"."
        },
        {
          "tipe": "UCAP",
          "teks": "The heart has strong muscles which pump blood."
        },
        {
          "tipe": "AKSI",
          "teks": "Tepuk grafik data untuk menjangkarkan fakta \"detak lebih cepat\" — lalu tunjuk kembali ke alasannya."
        },
        {
          "tipe": "UCAP",
          "teks": "During exercise, the heart beats faster. This happens because the muscles need more oxygen."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk ikon tubuh hangat — peragakan gesture satu hal yang mengarah ke hasil bermanfaat."
        },
        {
          "tipe": "UCAP",
          "teks": "Exercise makes the body warm. This helps the body to use energy."
        },
        {
          "tipe": "AKSI",
          "teks": "Tepuk grafik data untuk \"paru-paru bernapas cepat\" — lalu tunjuk kembali ke alasannya."
        },
        {
          "tipe": "UCAP",
          "teks": "The lungs breathe quickly. This happens because the body needs more air."
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
              "teks": "Tunjuk ikon jantung — satukan kedua tangan untuk \"which\"."
            },
            {
              "tipe": "UCAP",
              "teks": "The heart has strong muscles which pump blood."
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
              "teks": "Tepuk grafik data — lalu tunjuk kembali ke alasan mengapa detak lebih cepat."
            },
            {
              "tipe": "UCAP",
              "teks": "During exercise, the heart beats faster. This happens because the muscles need more oxygen."
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
              "teks": "Tunjuk ikon tubuh hangat — peragakan gesture satu hal mengarah ke hasil bermanfaat."
            },
            {
              "tipe": "UCAP",
              "teks": "Exercise makes the body warm. This helps the body to use energy."
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
              "teks": "Tepuk grafik data — lalu tunjuk kembali ke alasan paru-paru bernapas cepat."
            },
            {
              "tipe": "UCAP",
              "teks": "The lungs breathe quickly. This happens because the body needs more air."
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
          "teks": "Good. Now it is your turn. Connect a fact to its reason or effect."
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
      "intro": "Siswa menghubungkan satu fakta dengan alasan atau efeknya versi sendiri. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan grafik data dan kartu fakta-ke-alasan di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use these patterns. Connect a fact from the chart to a reason or an effect."
        },
        {
          "tipe": "UCAP",
          "teks": "One fact, one reason or effect, no step-by-step process, no I believe, and no I learned."
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
          "teks": "Jika siswa tidak tahu fakta apa yang akan ditulis — tunjuk grafik data di papan tulis dan minta siswa pilih satu titik data sebagai fakta awal."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kolom \"selama olahraga\" di grafik, dan minta siswa ucapkan \"The heart beats faster.\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Nyatakan satu fakta dan lengkapi: \"This happens because ___.\" atau \"This helps ___ to ___.\"",
        "standar": "Tulis dua hubungan fakta: satu dengan \"This happens because ...\" dan satu dengan \"This helps ... to ...\"",
        "tantangan": "Mulai dengan ciri (\"The heart has ... which ...\"), lalu hubungkan satu fakta ke alasan dan satu ke efeknya."
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
          "teks": "Minta Siswa A menyatakan satu fakta dan menghubungkannya (\"This happens because ...\" atau \"This helps ... to ...\")."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B memeriksa apakah hubungan tersebut masuk akal, lalu tukar peran."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Your turn now. State a fact from the chart and connect it. Your partner checks the link makes sense. Then swap."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk grafik dan tanya \"What happens to the heart during exercise?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan hubungan faktanya sekali lagi tanpa melihat buku."
        }
      ],
      "diferensiasi": {
        "mudah": "Nyatakan satu fakta dan hubungkan (boleh membaca); pasangan periksa apakah hubungan masuk akal. Lalu tukar peran.",
        "standar": "Hubungkan dua fakta tanpa membaca, satu dengan \"because\" dan satu dengan \"helps ... to\". Lalu tukar peran.",
        "tantangan": "Beri ciri, lalu hubungkan satu fakta ke alasan dan satu ke efek; pasangan tambahkan satu fakta terhubung lagi. Lalu tukar peran."
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
          "teks": "The person I point to presents your fact card first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns presenting a fact explanation to the group."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, tunjuk grafik, dan minta ucapkan \"The heart beats faster. This happens because ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambah satu fakta terhubung yang berbeda."
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
        "mudah": "Presentasikan satu hubungan fakta ke kelompok. Boleh membaca.",
        "standar": "Presentasikan dua hubungan fakta (because dan helps ... to) tanpa membaca.",
        "tantangan": "Presentasikan ciri dan dua fakta terhubung, lalu jawab satu pertanyaan tentang fakta tersebut."
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
          "teks": "Give me your This happens because sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menghubungkan satu fakta dengan satu alasan yang jelas? Apakah ini hubungan fakta, bukan urutan langkah atau argumen?"
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
          "teks": "Your This helps ... to sentence. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan \"This helps ... to ...\" sebagai efek yang bermanfaat?"
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
          "teks": "Angkat kembali kartu fakta-ke-alasan."
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
          "teks": "Angkat kartu fakta-ke-alasan."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. The heart beats faster. This happens because the muscles need more oxygen."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try. The lungs breathe quickly. This happens because..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kolom \"selama olahraga\" di grafik — tunggu siswa melengkapi."
        },
        {
          "tipe": "AKSI",
          "teks": "Lanjutkan untuk \"This helps ... to ...\" sampai siswa siap bicara tanpa bantuan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. The heart beats faster. This happens because the muscles need oxygen, and this helps the body to keep moving."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Link a reason and an effect in one sentence."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba merangkai alasan dan efek dalam satu penjelasan."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. You connected cause and effect in one go.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan kedua hubungan fakta tanpa melihat buku, atau menulis satu hubungan fakta baru dari grafik di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-08.js",
    pattern_id: "PAT-8-08",
    title: "Exercise and Heart Rate: Connecting Facts",
    short_title: "Heart Rate",
    grade: 8,
    genre: "Report",
    cluster: "B",
    topic: "Exercise and Heart Rate",
    context: "Students observe simple data and pictures showing how the body responds during physical activity and discuss factual relationships.",
    context_id: "Siswa mengamati data dan gambar sederhana yang menunjukkan respons tubuh selama aktivitas fisik serta mendiskusikan hubungan faktualnya.",
    communicative_goal: "connect observable facts with simple causes and effects",
    communicative_goal_id: "menghubungkan fakta yang teramati dengan sebab dan akibat sederhana",
    vocabulary_domain: ["exercise", "heart", "body", "energy"],
    input_anchor: "data chart",
    output_anchor: "fact explanation card",
    prerequisite_patterns: ["PAT-8-07"],
    reusable_in: ["PAT-8-09", "PAT-8-11", "PAT-9-13"],
    complexity_level: "Expand",
    notes: "TP kedelapan Kelas 8, GENRE CLOSER REPORT Kelas 8. target_pattern PAT-8-08 = 'This happens because ... / This helps ... to ...' (menghubungkan fakta ke alasan/efek; kali pertama 'because' muncul di Report Kelas 8). Reaktivasi PAT-8-07 (WAJIB, VR-1): '[Benda] has [fitur] which [fungsi]' -> 'This happens because.../This helps...to...'. forbidden_overlap (process with ordered stages, argumentation, personal reflection): SATU hubungan fakta->alasan/efek -- BUKAN 'First,...Next,...' (itu PAT-8-10, JANGAN dipakai dulu), BUKAN 'I believe.../Therefore...' (PAT-8-13+), BUKAN 'I learned...' (PAT-7-16/24). PENTING -- TOPIK 'Exercise and Heart Rate' SAMA dengan TP-33 (PAT-8-09): TP ini membangun FAKTA SPESIFIK ('During exercise, the heart beats faster. This happens because the muscles need more oxygen.') yang akan DIGENERALISASI jadi pola kausal kondisional di TP-33 ('When people exercise, their heart rate increases because ...'). vocabulary_domain (exercise, heart, body, energy) muncul di bahasa target. Ekstensi opsional menautkan alasan dan efek ('This happens because ... and this helps ... to ...') -- menjaga head hubungan-fakta, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Alright, class. Let's get into science mode today." },
      { type: "AKSI", text: "Kondisikan kelas agar siap mengamati data." },
      // HOOK
      { type: "UCAP", text: "What happens to your heart when you run or do exercise? Can you feel it?" },
      { type: "AKSI", text: "Tampilkan grafik data sederhana: detak jantung sebelum dan selama olahraga (istirahat vs aktif)." },
      { type: "UCAP", text: "Look at this chart. What do you notice about heart rate during exercise versus at rest?" },
    ],

    active_vocabulary: [
      "This happens because",
      "This helps",
      "to",
      "exercise",
      "heart",
      "body",
      "energy",
      "oxygen"
    ],

    model_sentences: [
      { id: "model_1", text: "The heart has strong muscles which pump blood." },
      { id: "model_2", text: "During exercise, the heart beats faster. This happens because the muscles need more oxygen." },
      { id: "model_3", text: "Exercise makes the body warm. This helps the body to use energy." },
      { id: "model_4", text: "The lungs breathe quickly. This happens because the body needs more air." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A simple data chart showing heart rate before and during exercise (resting vs active).", description_id: "Grafik data sederhana yang menunjukkan detak jantung sebelum dan selama olahraga (istirahat vs aktif).", asset_id: null },
      { id: "visual_2", description: "Fact-to-reason cards: a fact picture linked by an arrow to 'This happens because ...' / 'This helps ... to ...'.", description_id: "Kartu fakta-ke-alasan: gambar fakta dihubungkan dengan tanda panah ke 'This happens because ...' / 'This helps ... to ...'.", asset_id: null },
      { id: "visual_3", description: "Body icons: a heart beating, lungs breathing, muscles using energy during exercise.", description_id: "Ikon tubuh: jantung berdetak, paru-paru bernapas, otot menggunakan energi selama olahraga.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher states a fact, then points back to its cause while saying 'This happens because ...'.", description_id: "Guru menyatakan suatu fakta, lalu menunjuk kembali ke sebabnya sambil mengucapkan 'This happens because ...'." },
      { id: "gesture_2", description: "Teacher shows one thing leading to a helpful result while saying 'This helps ... to ...'.", description_id: "Guru menunjukkan satu hal yang mengarah ke hasil yang bermanfaat sambil mengucapkan 'This helps ... to ...'." },
      { id: "gesture_3", description: "Teacher taps the data chart to anchor each fact before giving the reason or effect.", description_id: "Guru menepuk grafik data untuk menjangkarkan setiap fakta sebelum memberikan alasan atau dampaknya." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher connect an observed fact to a simple reason or effect with 'This happens because ...' and 'This helps ... to ...', after stating a feature.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-07"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the fact-to-reason sentences ('This happens because ...' / 'This helps ... to ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Connect a fact about the body during exercise to a reason or effect.",
      prompt: "Use the patterns 'This happens because [reason].' and 'This helps [something] to [result].' Connect a fact from the chart (exercise, heart, body, energy). Use one fact and one reason or effect -- not a step-by-step process ('First, ...'), not 'I believe ...', not 'I learned ...'.",
      change_target: ["fact + reason (This happens because ...)", "fact + effect (This helps ... to ...)"],
      differentiation: {
        easy: { task: "State a fact and complete: 'This happens because ___.' or 'This helps ___ to ___.'" },
        standard: { task: "Write two fact links: one with 'This happens because ...' and one with 'This helps ... to ...'." },
        challenge: { task: "Start with a feature ('The heart has ... which ...'), then connect a fact to a reason and an effect." }
      },
      support: { pattern_support: ["PAT-8-07"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Connect facts to reasons and effects with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: state a fact from the chart and connect it ('This happens because ...' / 'This helps ... to ...'). Your partner checks the link makes sense. Then swap.",
      differentiation: {
        easy: { task: "State one fact and connect it (you may read); your partner checks the link. Then swap." },
        standard: { task: "Connect two facts without reading, one with 'because' and one with 'helps ... to'. Then swap." },
        challenge: { task: "Give a feature, then connect a fact to a reason and an effect; your partner adds one more linked fact. Then swap." }
      },
      support: { pattern_support: ["PAT-8-07"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present a fact explanation card to a new group (fact explanation card).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting a fact explanation card ('This happens because ...' / 'This helps ... to ...').",
      differentiation: {
        easy: { task: "Present one fact link to the new group. You may read it." },
        standard: { task: "Present two fact links (because / helps ... to) without reading." },
        challenge: { task: "Present a feature and two linked facts, then answer one question about a fact." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students connect a fact to a reason or effect with 'This happens because ...' and 'This helps ... to ...'",
        "students keep it one fact + one reason/effect, not an ordered process or an argument",
        "students still use 'First,/Next,' stages, 'I believe ... / Therefore ...', or 'I learned ...' instead of a single fact link"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to link a reason and an effect in one explanation.",
        needs_model: "Repeat the MODEL step, emphasizing one fact connected to one reason ('because') or effect ('helps ... to').",
        needs_repeat: "Do one more round of REPEAT (choral) on the fact-to-reason sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "lists an ordered process or gives an argument/reflection instead of one fact link",
        "relies only on the written card and cannot connect a fact without reading",
        "connects facts to reasons and effects with 'This happens because ...' / 'This helps ... to ...' accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling one fact connected to one reason or effect",
        "model one more fact link on a different topic to show the same pattern still works",
        "for a student who is ready, model ONE explanation that links a reason and an effect first -- 'The heart beats faster. This happens because the muscles need oxygen, and this helps the body to keep moving.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the single fact-link head, with no ordered stages or argument"
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
