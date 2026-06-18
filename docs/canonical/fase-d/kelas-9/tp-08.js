const skenario = {
  "persiapan": {
    "papan_tulis": "First, ___.\nNext, ___.\nAnother point is ___.\nFinally, ___.\nBased on this, ___.",
    "kartu": "Siapkan tiga kartu di meja guru — empat kartu catatan penemuan berlabel First / Next / Another point / Finally (isi: surat lama, foto, dokumen berisi nama, kondisi benda), kartu pengatur isi presentasi lima slot berkode warna (First / Next / Another point is / Finally / Based on this), dan kartu kontras visual (diagram alur penjelasan proses gaya PAT-8-10 di sebelah pengatur isi presentasi gaya PAT-9-08).",
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
        "teks": "Good morning. Please have your discovery notes ready on your desk."
      },
      {
        "tipe": "AKSI",
        "teks": "Berikan waktu sebentar bagi siswa menyiapkan catatan penemuan mereka."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "You have opened your presentation. Now, what are the main points you want to share about the storage room?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan empat kartu catatan penemuan berlabel First / Next / Another point / Finally — tunjuk setiap kartu satu per satu."
      },
      {
        "tipe": "AKSI",
        "teks": "Tahan sebentar — beri waktu siswa membaca keempat kartu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these discovery notes. How can you organize them into clear presentation points?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan nada formal dan minta pendapatnya tentang urutan poin. Setelah dua respons atau sekitar tiga puluh detik — lanjutkan."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — lalu letakkan kartu di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us now see how to build a clear, organized presentation body, with transitions and a conclusion from evidence."
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
          "teks": "Ambil kartu catatan penemuan — angkat satu jari."
        },
        {
          "tipe": "UCAP",
          "teks": "First, we found a collection of old letters and historical documents from the school's earliest years, carefully stored in wooden boxes."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat dua jari."
        },
        {
          "tipe": "UCAP",
          "teks": "Next, we discovered a set of photographs showing teachers and students from more than fifty years ago."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri gestur ke samping — angkat kartu pengatur isi presentasi."
        },
        {
          "tipe": "UCAP",
          "teks": "Another point is that several historical documents include the names of former teachers whose classrooms still exist in our school today, a direct link to our school history."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu pengatur — angkat telapak tangan terbuka, lalu satukan kedua tangan dari sisi berbeda."
        },
        {
          "tipe": "UCAP",
          "teks": "Finally, all the objects were in surprisingly good condition. Based on this evidence, we believe the storage room was used as an archive for important school history that no one had opened in decades."
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
          "teks": "Angkat kedua tangan dan beri isyarat bahwa kelas akan memasuki langkah REPEAT."
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
      "intro": "Guru mengucapkan satu kalimat — siswa menirukan bersama. Satu putaran per kalimat. Kartu dan gesture tetap digunakan. Guru menyebutkan fungsi setiap penanda sebelum menirukan.",
      "kalimat": [
        {
          "label": "Kalimat 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat kartu catatan penemuan berlabel First — angkat satu jari."
            },
            {
              "tipe": "UCAP",
              "teks": "First, we found a collection of old letters and historical documents from the school's earliest years, carefully stored in wooden boxes."
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
              "teks": "Angkat kartu berlabel Next — angkat dua jari."
            },
            {
              "tipe": "UCAP",
              "teks": "Next, we discovered a set of photographs showing teachers and students from more than fifty years ago."
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
              "teks": "Angkat kartu berlabel Another point — beri gestur ke samping."
            },
            {
              "tipe": "UCAP",
              "teks": "Another point is that several historical documents include the names of former teachers whose classrooms still exist in our school today, a direct link to our school history."
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
              "teks": "Angkat kartu berlabel Finally — angkat telapak tangan terbuka, lalu satukan kedua tangan dari sisi berbeda."
            },
            {
              "tipe": "UCAP",
              "teks": "Finally, all the objects were in surprisingly good condition. Based on this evidence, we believe the storage room was used as an archive for important school history that no one had opened in decades."
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
          "teks": "Now it is your turn. Write your own organized presentation body."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tampilkan kartu kontras visual dan tunjuk perbedaan antara penjelasan proses (PAT-8-10) dan isi presentasi (PAT-9-08). Minta siswa menyalin pola di buku catatan sebelum melanjutkan. Beri waktu dua menit, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi enam menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis isi presentasi mereka sendiri tentang penemuan gudang menggunakan kelima penanda. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan keempat kartu catatan penemuan dan kartu pengatur isi di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Write four main points using First, Next, Another point is, Finally, and Based on this."
        },
        {
          "tipe": "UCAP",
          "teks": "Remember, Another point is opens a new dimension, not just the next thing. Based on this draws a conclusion from all the evidence."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang menggunakan Another point is sebagai penanda urutan biasa atau yang langsung melompat ke Based on this tanpa poin terakhir."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah lima menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop writing. Stay where you are. I will show you your group."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu cara membedakan Another point is dari Next — tunjuk kartu kontras visual dan ucapkan \"Next = the next thing. Another point is = a new angle, a different dimension.\""
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu catatan berlabel First, dan minta siswa ucapkan \"First, we found\" lalu satu detail. Tunggu siswa menulis satu baris, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kartu pengatur isi presentasi lima slot dan isi setiap slot menggunakan kartu catatan penemuan. Boleh membaca catatan. Pastikan ada kelima penanda dalam urutan yang benar.",
        "standar": "Tulis isi presentasi empat poin sendiri dengan kesimpulan Based on this tanpa membaca kerangka. Gunakan kosakata: historical documents, school history, atau evidence.",
        "tantangan": "Tulis isi presentasi dan buat Another point is benar-benar sudut yang berbeda dari urutan — misalnya signifikansi penemuan, bukan sekadar benda lain yang ditemukan."
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Langkah ini menggunakan kelompok kecil tiga atau empat orang. Guru menentukan komposisi kelompok.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk tiga atau empat siswa yang duduk berdekatan sebagai satu kelompok — lanjutkan hingga semua siswa tergabung."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok terbentuk."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns delivering your presentation body in your group."
        },
        {
          "tipe": "UCAP",
          "teks": "The group checks: First? Next? Another point is? Finally? Based on this? After each delivery, one member says which transition felt like a genuine new dimension."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk semua anggota kelompok berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — prioritaskan kelompok yang tampak bingung membedakan Another point is dari penanda urutan biasa."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Stay with your group. Wait for my signal. I will show you which group to join."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam lebih dari sepuluh detik — tunjuk buku catatannya dan minta ucapkan \"First, we found\" lalu satu detail sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this pattern.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa sampaikan isi presentasinya sekali lagi tanpa melihat buku."
        },
        {
          "tipe": "darurat",
          "teks": "Jika waktu tersisa kurang dari lima menit atau kelas tidak lagi kondusif — hentikan aktivitas kelompok. Tunjuk pola lima penanda presentasi di papan tulis, minta seluruh kelas mengucapkannya bersama satu kali secara berurutan, lalu tutup sesi."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca isi presentasi dari buku catatan ke kelompok. Kelompok mencentang setiap penanda saat mendengarnya: First, Next, Another point is, Finally, Based on this.",
        "standar": "Sampaikan isi presentasi tanpa membaca. Kelompok memeriksa kelima penanda.",
        "tantangan": "Sampaikan isi presentasi, lalu kelompok bertanya: \"What does your evidence — Based on this — actually support?\" Jelaskan hubungannya."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Setiap siswa bergabung ke kelompok baru yang berbeda dari kelompok INTERACT — membentuk kelompok empat orang.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk komposisi kelompok baru — jangan biarkan siswa memilih sendiri."
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
          "teks": "Take turns delivering your organized presentation body. Others listen for all five markers."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"First, we found\" lalu satu detail sebagai pembuka. Jika masih diam — ucapkan nama siswa tersebut terlebih dahulu lalu minta siswa mengulang."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa sampaikan isi presentasinya sekali lagi tanpa melihat buku."
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
        "mudah": "Sampaikan isi presentasi ke kelompok baru menggunakan catatan.",
        "standar": "Sampaikan isi presentasi tanpa membaca.",
        "tantangan": "Sampaikan isi presentasi tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"What conclusion does your evidence support?\""
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
          "teks": "Give me your Another point is sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa membuka dimensi baru, atau sekadar menyebut benda berikutnya dalam urutan?"
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
          "teks": "Your Based on this sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menarik kesimpulan dari bukti, atau sekadar menggunakan Based on this sebagai transisi ke poin baru?"
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
          "teks": "Angkat kembali kartu kontras visual."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk diagram alur penjelasan proses — ucapkan \"This is a process explanation.\" Lalu tunjuk pengatur isi presentasi — ucapkan \"This is a presentation body.\" Tunjuk perbedaan Another point is dan Based on this."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri isyarat ke siswa — ucapkan kalimat model kalimat 3 dan 4 bersama-sama."
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
          "teks": "Sebutkan nama setiap penanda dan fungsinya satu per satu."
        },
        {
          "tipe": "UCAP",
          "teks": "First is the starting point. Next is the next thing. Another point is a NEW ANGLE, something different. Finally is the last item. Based on this is what all the evidence means."
        },
        {
          "tipe": "AKSI",
          "teks": "Modelkan satu isi presentasi lagi tentang topik penemuan berbeda — misalnya menemukan foto lama di arsip perpustakaan — menggunakan struktur lima penanda yang sama. Minta siswa mengikuti slot per slot."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk salah satu poin di isi presentasi siswa di buku catatan."
        },
        {
          "tipe": "UCAP",
          "teks": "Try adding an elaboration sentence after one of your points. Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "To illustrate this point further, here is one specific example from the documents we found: a letter written by the first school principal in 1972."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now add a To illustrate this point further sentence after one of your own points."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"That deepens one point without changing your overall structure.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka sampaikan seluruh isi presentasi mereka sekali lagi tanpa melihat buku, atau memperkuat kalimat Based on this dengan satu kalimat spesifik tentang mengapa bukti tersebut penting bagi komunitas sekolah."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-08.js",
    pattern_id: "PAT-9-08",
    title: "The Old Storage Room Discovery: Organizing Presentation Points",
    short_title: "Presentation Body",
    grade: 9,
    genre: "Presentation",
    cluster: "A",
    topic: "The Old Storage Room Discovery",
    context: "Students organize the main points of their presentation about the storage room discovery using explicit sequence markers and an evidence-based concluding move.",
    context_id: "Siswa menyusun poin-poin utama presentasi mereka tentang penemuan gudang menggunakan penanda urutan yang jelas dan penutup berbasis bukti.",
    communicative_goal: "organize information, arguments, or reviews into a coherent spoken presentation with explicit transitions",
    communicative_goal_id: "menyusun informasi, argumen, atau ulasan menjadi presentasi lisan yang koheren dengan transisi yang jelas",
    vocabulary_domain: ["sequence markers", "historical documents", "school history", "evidence"],
    input_anchor: "discovery notes",
    output_anchor: "organized presentation body",
    prerequisite_patterns: ["PAT-8-10", "PAT-9-06", "PAT-9-03"],
    reusable_in: ["PAT-9-09", "PAT-9-10"],
    complexity_level: "Integrate",
    notes: "TP kedelapan Kelas 9, genre Presentation (cluster A -- body/development Cluster 3). TRIPLE PREREQ: PAT-8-10, PAT-9-06, PAT-9-03. target_pattern PAT-9-08 = 'First,...Next,...Another point is...Finally,...Based on this,...' (sequence markers + evidence-based concluding move). BAGIAN 2 dari 3 presentasi 'The Old Storage Room Discovery' (TP-07=opening, TP-08=body, TP-09=closing). Reaktivasi PAT-8-10 (WAJIB, VR-1): sequence markers 'First,...Next,...Then,...Finally,...' (K8, process explanation/procedure) direaktivasi sebagai ORGANISASI TUBUH PRESENTASI -- struktur sama (marker urutan), TAPI fungsi bergeser dari penjelasan proses ke ORGANISASI POIN PRESENTASI dengan 'Another point is' sebagai marker argumen baru dan 'Based on this,' sebagai concluding move. PAT-8-10 asli = urutan proses objektif; PAT-9-08 = urutan poin presentasi dengan evaluasi/argumen di dalamnya. Reaktivasi PAT-9-06 (WAJIB, VR-1): KAPASITAS review/evaluasi terintegrasi (TP-06, Charity Project) direaktivasi sebagai ORGANIZING LOGIC -- isi poin presentasi bisa mengandung evaluasi ('One strength is...However,...') tanpa perlu mengulang konten charity. Yang direaktivasi adalah KAPASITAS mengelola konten multi-komponen dalam satu presentasi. Reaktivasi PAT-9-03 (WAJIB, VR-1): 'Based on this,' sebagai evidence-based concluding move berakar dari KAPASITAS ARGUMENTATIF PAT-9-03 (Teamwork, 6 komponen) -- 'Based on this evidence,...' merefleksikan cara argumen terintegrasi PAT-9-03 menghubungkan evidence ke klaim. KONTEN tetap storage room; yang direaktivasi adalah STRUKTUR dari PAT-9-03/PAT-9-06. forbidden_overlap (explanation process only, procedure instructions, narrative event sequence): BUKAN penjelasan proses biasa (PAT-8-10 asli = how recycling works), BUKAN narasi kronologis storage room (peran narasi sudah tuntas di K8 PAT-8-17-20), BUKAN petunjuk bernomor (PAT-8-22). vocabulary_domain: 'sequence markers' = First/Next/Another point/Finally/Based on this (pattern words). Konten: historical documents ✓ model_1/3, school history ✓ model_1/3/4, evidence ✓ model_4. BOOST extension: tambah 'To illustrate this point further,...' sebagai mid-body elaboration marker.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Please have your discovery notes ready on your desk." },
      { type: "AKSI", text: "Berikan waktu sebentar bagi siswa menyiapkan catatan penemuan mereka." },
      // HOOK
      { type: "UCAP", text: "You have opened your presentation. Now — what are the main points you want to share about the storage room?" },
      { type: "AKSI", text: "Tampilkan empat kartu catatan penemuan berlabel First / Next / Another point / Finally." },
      { type: "UCAP", text: "Look at these discovery notes. How can you organize them into clear presentation points?" },
    ],

    active_vocabulary: [
      "First,",
      "Next,",
      "Another point is",
      "Finally,",
      "Based on this,",
      "historical documents",
      "school history",
      "evidence"
    ],

    model_sentences: [
      { id: "model_1", text: "First, we found a collection of old letters and historical documents from the school's earliest years, carefully stored in wooden boxes." },
      { id: "model_2", text: "Next, we discovered a set of photographs showing teachers and students from more than fifty years ago." },
      { id: "model_3", text: "Another point is that several historical documents include the names of former teachers whose classrooms still exist in our school today -- a direct link to our school history." },
      { id: "model_4", text: "Finally, all the objects were in surprisingly good condition. Based on this evidence, we believe the storage room was used as an archive for important school history that no one had opened in decades." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Discovery notes: four cards summarizing what Dito and Wulan found -- old letters, photographs, documents with names, and the condition of the objects -- each labelled with a sequence marker (First / Next / Another point / Finally).", description_id: "Catatan penemuan: empat kartu merangkum apa yang ditemukan Dito dan Wulan -- surat lama, foto, dokumen berisi nama, dan kondisi benda-benda itu -- masing-masing berlabel penanda urutan (First / Next / Another point / Finally).", asset_id: null },
      { id: "visual_2", description: "A presentation body organizer: four slots with colour-coded sequence markers (First / Next / Another point is / Finally) and a fifth slot labelled 'Based on this,' for the concluding move.", description_id: "Pengatur isi presentasi: empat slot dengan penanda urutan berkode warna (First / Next / Another point is / Finally) dan slot kelima berlabel 'Based on this,' untuk gerakan penutup.", asset_id: null },
      { id: "visual_3", description: "A visual contrast: a process-explanation flow chart (PAT-8-10 style, e.g. 'First, water evaporates...') next to a presentation-body organizer (PAT-9-08 style, 'First, we found...Another point is...Based on this,...') -- showing same markers, different function.", description_id: "Kontras visual: diagram alur penjelasan proses (gaya PAT-8-10, misalnya 'First, water evaporates...') di sebelah pengatur isi presentasi (gaya PAT-9-08, 'First, we found...Another point is...Based on this,...') -- menunjukkan penanda yang sama, fungsi yang berbeda.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher raises one finger for 'First,' then moves to two for 'Next,' then gestures sideways for 'Another point is' -- to show that 'Another point' is a new dimension, not just the next step in a sequence.", description_id: "Guru mengangkat satu jari untuk 'First,' lalu pindah ke dua untuk 'Next,' lalu memberi gestur ke samping untuk 'Another point is' -- untuk menunjukkan bahwa 'Another point' adalah dimensi baru, bukan sekadar langkah berikutnya dalam urutan." },
      { id: "gesture_2", description: "Teacher raises a final open hand while saying 'Finally,' -- to signal the last point before the concluding move.", description_id: "Guru mengangkat telapak tangan terbuka terakhir sambil mengucapkan 'Finally,' -- untuk menandai poin terakhir sebelum gerakan penutup." },
      { id: "gesture_3", description: "Teacher brings both hands together from separate sides while saying 'Based on this,' -- to signal drawing a conclusion from all the evidence gathered, not just the last point.", description_id: "Guru menyatukan kedua tangan dari sisi yang berbeda sambil mengucapkan 'Based on this,' -- untuk menandai penarikan kesimpulan dari semua bukti yang dikumpulkan, bukan hanya poin terakhir." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher organize presentation points with 'First,...Next,...Another point is...Finally,...Based on this,...' -- explicit transitions plus an evidence-based conclusion, not a step-by-step process explanation or a narrative chronology.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-10", "PAT-9-06", "PAT-9-03"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the body sentences ('First,...' / 'Next,...' / 'Another point is...' / 'Finally,...' / 'Based on this,...') together as a class, pausing at each marker to name its function.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Organize your own presentation body about the storage room discovery using all five markers.",
      prompt: "Write four main points using: 'First,...' (first finding), 'Next,...' (second finding), 'Another point is...' (a different dimension -- not just the next thing, but a new angle), 'Finally,...' (last point), 'Based on this,...' (your conclusion from all the evidence). Use: historical documents, school history, or evidence. Keep it a presentation body -- not a narrative ('Then Dito opened the door and...'), not a procedure ('Step 1: open the box'), and not a general process explanation.",
      change_target: ["first point (First, ...)", "second point (Next, ...)", "new dimension (Another point is ...)", "final point (Finally, ...)", "evidence-based conclusion (Based on this, ...)"],
      differentiation: {
        easy: { task: "Use the body organizer and fill in each slot using the discovery notes cards. You may read." },
        standard: { task: "Write your own four-point body with 'Based on this,' conclusion without reading." },
        challenge: { task: "Write the body and make 'Another point is...' a genuinely different angle from the sequence (e.g. the significance, not just another object found)." }
      },
      support: { pattern_support: ["PAT-8-10", "PAT-9-06", "PAT-9-03"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Deliver your presentation body to a small group and check for all five markers.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, take turns delivering your presentation body. The group checks: First? Next? Another point is? Finally? Based on this? After each delivery, one group member says which transition felt clearest and which felt most like a genuine new dimension ('Another point is...').",
      differentiation: {
        easy: { task: "Read your body to the group. Others tick each marker as they hear it." },
        standard: { task: "Deliver your body without reading. The group checks all five markers." },
        challenge: { task: "Deliver your body and the group asks 'What does your evidence (Based on this,...) actually support?' -- you explain the link." }
      },
      support: { pattern_support: ["PAT-8-10", "PAT-9-06", "PAT-9-03"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Deliver your organized presentation body to a new group (organized presentation body).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns delivering your presentation body ('First,...' / 'Next,...' / 'Another point is...' / 'Finally,...' / 'Based on this,...').",
      differentiation: {
        easy: { task: "Deliver your presentation body to the new group using your notes." },
        standard: { task: "Deliver your body without reading." },
        challenge: { task: "Deliver your body, then answer one question from the group: 'What conclusion does your evidence support?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students use all five markers in the correct order: First / Next / Another point is / Finally / Based on this -- with 'Another point is' signalling a new dimension, not just the third step",
        "students use 'Based on this,' to draw a conclusion from the evidence, not as a transition to the next point",
        "students use 'Another point is' as a simple sequence marker (= 'Then,...Third,...') or skip 'Based on this,' and end with 'Finally,...' without a concluding move"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add 'To illustrate this point further,...' as a mid-body elaboration.",
        needs_model: "Repeat the MODEL step using the contrast visual -- show that 'Another point is' opens a new dimension, and 'Based on this,' draws a conclusion rather than introducing a new point.",
        needs_repeat: "Do one more round of REPEAT (choral) with pauses at each marker before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "uses 'Another point is' as a simple sequence step or skips 'Based on this,' entirely",
        "uses all five markers correctly but cannot deliver the body without reading",
        "delivers a well-organized body with all five markers -- including a genuine new dimension and a conclusion from evidence -- accurately and confidently"
      ],
      action: [
        "recast the body slowly, naming each marker's function aloud: 'First = the starting point. Next = the next thing. Another point is = a NEW ANGLE -- something different. Finally = the last item. Based on this = what all the evidence means.'",
        "model one more organized body on a different discovery topic (e.g. finding old photographs in a library archive) to show the same five-marker structure still works",
        "for a student who is ready, model ONE mid-body elaboration sentence first -- 'To illustrate this point further, here is one specific example from the documents we found: a letter written by the first school principal in 1972.' -- then invite that student to add a 'To illustrate this point further,...' sentence after one of their own points; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it deepens one point without changing the overall five-marker structure"
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
