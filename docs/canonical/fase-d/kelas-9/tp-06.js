const skenario = {
  "persiapan": {
    "papan_tulis": "It is ___.\nI believe ___ because ___.\nOne strength is ___.\nHowever, ___.\nTherefore, I recommend ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu ringkasan tiga proyek bakti sosial, kartu kerangka review lengkap enam slot (DESCRIBE, CLAIM, STRENGTH, LIMITATION, RECOMMENDATION), dan kartu ikon (kotak donasi, kelompok bakti sosial, daftar centang partisipasi, bintang evaluasi).",
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
        "teks": "Welcome back. We are ready for a complete review today."
      },
      {
        "tipe": "AKSI",
        "teks": "Pastikan siswa memiliki catatan dari proyek bakti sosial sebelumnya jika tersedia."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Think of the class charity project you know about. How would you describe it, and would you recommend it?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu ringkasan tiga proyek — pengumpulan buku, bersih-bersih sekolah, bank makanan — dengan deskripsi singkat dan jumlah partisipan di setiap kartu."
      },
      {
        "tipe": "AKSI",
        "teks": "Tahan sebentar — beri waktu siswa membaca ketiga kartu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these project summaries. Which one could you give a full, balanced review?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan nada formal dan minta mereka memilih salah satu proyek. Setelah dua respons atau sekitar tiga puluh detik — lanjutkan."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — lalu letakkan kartu di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us now see how all five components come together in one complete review."
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
          "teks": "Ambil kartu ringkasan proyek — tunjuk kartu."
        },
        {
          "tipe": "UCAP",
          "teks": "It is a charity project where students collect books for children in the local community, and it runs every term."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu ringkasan — ambil kartu kerangka review lengkap."
        },
        {
          "tipe": "UCAP",
          "teks": "I believe this project is valuable because it builds real community service skills and gives participants a sense of purpose."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kerangka — ambil kartu ikon."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat satu tangan untuk strength, lalu miringkan ke sisi lain untuk limitation."
        },
        {
          "tipe": "UCAP",
          "teks": "One strength is the high level of student participation across all classes. However, the project needs clearer evaluation criteria to measure its real impact."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu ikon — tampilkan ketiga kartu sekaligus."
        },
        {
          "tipe": "AKSI",
          "teks": "Satukan kedua tangan ke depan."
        },
        {
          "tipe": "UCAP",
          "teks": "Therefore, I recommend continuing the charity project with a simple evaluation plan so students can see the results of their community service and feel proud of their participation."
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
              "teks": "Angkat kartu ringkasan proyek — tunjuk kartu."
            },
            {
              "tipe": "UCAP",
              "teks": "It is a charity project where students collect books for children in the local community, and it runs every term."
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
              "teks": "Letakkan kartu ringkasan — angkat kartu kerangka review lengkap."
            },
            {
              "tipe": "UCAP",
              "teks": "I believe this project is valuable because it builds real community service skills and gives participants a sense of purpose."
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
              "teks": "Letakkan kartu kerangka — angkat kartu ikon, angkat satu tangan untuk strength lalu miringkan untuk limitation."
            },
            {
              "tipe": "UCAP",
              "teks": "One strength is the high level of student participation across all classes. However, the project needs clearer evaluation criteria to measure its real impact."
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
              "teks": "Tampilkan ketiga kartu sekaligus — satukan kedua tangan ke depan."
            },
            {
              "tipe": "UCAP",
              "teks": "Therefore, I recommend continuing the charity project with a simple evaluation plan so students can see the results of their community service and feel proud of their participation."
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
          "teks": "Now it is your turn. Write your own complete review."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk pola di papan tulis dan tunjuk slot berurutan. Minta siswa menyalin pola di buku catatan sebelum melanjutkan. Beri waktu dua menit, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi enam menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis review lengkap tentang satu proyek bakti sosial pilihan mereka. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
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
          "teks": "Choose one project from the summary cards. Write a full review using all five components."
        },
        {
          "tipe": "UCAP",
          "teks": "The recommendation must follow from your balanced evaluation, not appear on its own."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang melewati komponen However atau langsung melompat ke rekomendasi tanpa evaluasi."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah lima menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop writing. Now form a group of three or four."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu cara memulai deskripsi — tunjuk kartu ringkasan proyek di papan tulis dan minta siswa mulai dengan \"It is a project where students...\""
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu ringkasan satu proyek, dan minta siswa ucapkan \"It is a project where\" lalu satu deskripsi singkat. Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kerangka review lima slot di papan tulis dan isi setiap slot secara berurutan. Boleh melihat kartu ringkasan proyek untuk referensi. Pastikan ada deskripsi, klaim, kelebihan, kekurangan, dan rekomendasi.",
        "standar": "Tulis review lengkap sendiri tanpa membaca kerangka. Gunakan kosakata: charity, community service, participation, atau evaluation.",
        "tantangan": "Tulis review lengkap lalu tambah satu kelebihan atau kekurangan kedua untuk membuat evaluasi lebih menyeluruh sebelum rekomendasi."
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
          "teks": "Take turns presenting your complete review in your group."
        },
        {
          "tipe": "UCAP",
          "teks": "After each review, one member names the most convincing part and explains why."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk semua anggota kelompok berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — pastikan setiap anggota sudah mendapat giliran berbicara."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now form a new group with students from other groups."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam lebih dari sepuluh detik — tunjuk buku catatannya dan minta ucapkan \"It is a project\" lalu deskripsi singkat sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this pattern.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan reviewnya sekali lagi tanpa melihat buku."
        },
        {
          "tipe": "darurat",
          "teks": "Jika waktu tersisa kurang dari lima menit atau kelas tidak lagi kondusif — hentikan aktivitas kelompok. Tunjuk kerangka review lengkap di papan tulis, minta seluruh kelas mengucapkan lima komponen secara berurutan bersama satu kali, lalu tutup sesi."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca review dari buku catatan ke kelompok. Kelompok mencentang setiap komponen saat mendengarnya: deskripsi, klaim, kelebihan, kekurangan, rekomendasi.",
        "standar": "Sampaikan review tanpa membaca. Kelompok memeriksa kelima komponen.",
        "tantangan": "Sampaikan review, lalu kelompok bertanya: \"Does your recommendation follow logically from your evaluation?\" Jelaskan hubungannya."
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
          "teks": "One person presents the complete review. The others listen for all five components."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"It is a project\" lalu deskripsi singkat sebagai pembuka. Jika masih diam — ucapkan nama siswa tersebut terlebih dahulu lalu minta siswa mengulang."
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
        "mudah": "Baca review dari buku catatan ke kelompok baru.",
        "standar": "Sampaikan review tanpa membaca buku.",
        "tantangan": "Sampaikan review tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"Why does your recommendation follow from the limitation you identified?\""
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
          "teks": "Describe the project in one sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan kalimat deskripsi It is."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa membuka dengan deskripsi sebelum evaluasi, atau langsung ke opini?"
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
          "teks": "Your recommendation sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah rekomendasi muncul setelah evaluasi berimbang, bukan sebagai kalimat berdiri sendiri?"
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
          "teks": "Angkat kembali kartu kerangka review lengkap."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk setiap slot di kerangka secara berurutan sambil mengucapkan kalimat model yang sesuai — tunjuk dada, angkat satu tangan, miringkan, satukan tangan ke depan."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri isyarat tangan ke arah siswa — tunggu seluruh kelas mengucapkan bersama."
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
          "teks": "Tunjuk kerangka review di papan tulis dan tunjuk setiap slot berurutan."
        },
        {
          "tipe": "UCAP",
          "teks": "Describe it. Evaluate it. Strength. Limitation. Then recommend. Five steps."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk slot pertama (DESCRIBE) dan minta siswa ucapkan \"It is a project where...\" Lanjutkan slot per slot. Jangan tergesa-gesa — tunggu respons di setiap slot sebelum lanjut."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kalimat Therefore, I recommend dalam review siswa di buku catatan."
        },
        {
          "tipe": "UCAP",
          "teks": "Try adding an evaluative framing before your recommendation. Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "Based on this evaluation, I am confident that a stronger charity project with regular participation would bring lasting benefits to the whole community."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now add Based on this evaluation before your own recommendation sentence."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"That signals your recommendation follows from your full review.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka ucapkan review lengkap mereka tanpa melihat buku, atau memperkuat kalimat However dengan satu detail spesifik tentang dampak kekurangan tersebut."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-06.js",
    pattern_id: "PAT-9-06",
    title: "Class Charity Project: Review and Recommendation",
    short_title: "Charity Project Review",
    grade: 9,
    genre: "Review",
    cluster: "B",
    topic: "Class Charity Project",
    context: "Students review a class charity project by describing it, evaluating its strengths and limitations, and concluding with a recommendation.",
    context_id: "Siswa mengulas proyek bakti sosial kelas dengan mendeskripsikannya, mengevaluasi kelebihan dan kekurangannya, serta menutup dengan rekomendasi.",
    communicative_goal: "produce a complete review integrating description, evaluation, balanced judgment, and recommendation",
    communicative_goal_id: "membuat ulasan lengkap yang memadukan deskripsi, evaluasi, penilaian berimbang, dan rekomendasi",
    vocabulary_domain: ["charity", "community service", "participation", "evaluation"],
    input_anchor: "project summary cards",
    output_anchor: "complete project review",
    prerequisite_patterns: ["PAT-7-06", "PAT-8-13", "PAT-8-15", "PAT-8-16", "PAT-9-05"],
    reusable_in: ["PAT-9-07"],
    complexity_level: "Integrate",
    notes: "TP keenam Kelas 9, genre Review (cluster B -- CLOSER CLUSTER 2, integrasi struktur review terlengkap). QUINT PREREQ: PAT-7-06, PAT-8-13, PAT-8-15, PAT-8-16, PAT-9-05. target_pattern PAT-9-06 = 'It is...I believe...because...One strength is...However,...Therefore, I recommend...' (6 komponen: description + claim + reason + strength + limitation + recommendation). PERFORMA REVIEW TERLENGKAP di cluster ini -- meminta siswa menggabungkan seluruh komponen Review dari TP-04 (describe+evaluate) dan TP-05 (strength+However) menjadi performa utuh dengan recommendation sebagai penutup. Reaktivasi PAT-7-06 (WAJIB, VR-1): 'It is...and...' (deskripsi K7) direaktivasi sebagai KOMPONEN DESKRIPTIF pembuka review -- fungsi sama (menggabungkan dua ciri), konteks bergeser dari benda/tempat netral ke proyek yang akan dievaluasi. Reaktivasi PAT-8-13 (WAJIB, VR-1): 'I believe...because...' (claim+reason K8 argumentatif) direaktivasi sebagai evaluative claim dalam review -- lebih personal dari report, kurang advokasi dari argumen publik. Reaktivasi PAT-8-15 (WAJIB, VR-1): acknowledge-counter K8 direaktivasi sebagai BALANCED EVALUATION -- 'However,' kini penanda limitation dalam review, bukan counter-argumen. Reaktivasi PAT-8-16 (WAJIB, VR-1): 'Therefore, I recommend...' (konektor formal K8) menjadi KOMPONEN PENUTUP review -- rekomendasi berdasarkan evaluasi seimbang, bukan rekomendasi standalone. Reaktivasi PAT-9-05 (WAJIB, VR-1): balanced review 'One strength is...However,...' (TP-05) terintegrasi sebagai sub-struktur dalam TP-06 -- bukan diulang verbatim melainkan diperluas dengan komponen deskripsi (It is...) dan recommendation (Therefore, I recommend...). forbidden_overlap (argumentative essay on public issues, neutral report, promotional advertisement): 'It is...' bukan pure description (report) -- harus diikuti evaluasi. 'Therefore, I recommend...' bukan standalone advocacy (argument) -- harus muncul setelah balanced evaluation. BOOST extension: tambah 'Based on this evaluation,...I am confident that...' sebelum recommendation -- framing evaluatif lebih sophisticated.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Welcome back. We are ready for a complete review today." },
      { type: "AKSI", text: "Pastikan siswa memiliki catatan dari proyek bakti sosial sebelumnya." },
      // HOOK
      { type: "UCAP", text: "Think of the class charity project you know about. How would you describe it — and would you recommend it?" },
      { type: "AKSI", text: "Tampilkan kartu ringkasan proyek: pengumpulan buku, bersih-bersih sekolah, bank makanan — dengan deskripsi dan jumlah partisipan." },
      { type: "UCAP", text: "Look at these project summaries. Which one could you give a full, balanced review?" },
    ],

    active_vocabulary: [
      "It is",
      "I believe",
      "because",
      "One strength is",
      "However,",
      "Therefore, I recommend",
      "charity",
      "community service",
      "participation",
      "evaluation"
    ],

    model_sentences: [
      { id: "model_1", text: "It is a charity project where students collect books for children in the local community, and it runs every term." },
      { id: "model_2", text: "I believe this project is valuable because it builds real community service skills and gives participants a sense of purpose." },
      { id: "model_3", text: "One strength is the high level of student participation across all classes. However, the project needs clearer evaluation criteria to measure its real impact." },
      { id: "model_4", text: "Therefore, I recommend continuing the charity project with a simple evaluation plan so students can see the results of their community service and feel proud of their participation." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Project summary cards showing three charity project options: a book collection drive, a school clean-up day, and a community food bank contribution -- each with a brief description and participation numbers.", description_id: "Kartu ringkasan proyek yang menunjukkan tiga pilihan proyek bakti sosial: pengumpulan buku, hari bersih-bersih sekolah, dan kontribusi ke bank makanan komunitas -- masing-masing dengan deskripsi singkat dan jumlah partisipan.", asset_id: null },
      { id: "visual_2", description: "A complete review structure frame with six labelled slots: DESCRIBE (It is...) / CLAIM (I believe... because...) / STRENGTH (One strength is...) / LIMITATION (However,...) / RECOMMENDATION (Therefore, I recommend...).", description_id: "Kerangka struktur ulasan lengkap dengan enam slot berlabel: DESCRIBE (It is...) / CLAIM (I believe... because...) / STRENGTH (One strength is...) / LIMITATION (However,...) / RECOMMENDATION (Therefore, I recommend...).", asset_id: null },
      { id: "visual_3", description: "Icons: a charity box, a community service group, a participation checklist, and an evaluation rubric star -- matching vocabulary_domain items.", description_id: "Ikon: kotak donasi, kelompok bakti sosial, daftar centang partisipasi, dan bintang rubrik evaluasi -- sesuai item vocabulary_domain.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to the project card while saying 'It is ...' -- to signal opening with description before evaluation begins.", description_id: "Guru menunjuk kartu proyek sambil mengucapkan 'It is ...' -- untuk menandai pembukaan dengan deskripsi sebelum evaluasi dimulai." },
      { id: "gesture_2", description: "Teacher alternates one hand up (strength) and one hand tilted (however/limitation) to show the balance move in the middle of the review.", description_id: "Guru bergantian mengangkat satu tangan (kelebihan) dan memiringkan tangan lain (however/kekurangan) untuk menunjukkan gerakan penyeimbang di tengah ulasan." },
      { id: "gesture_3", description: "Teacher brings both hands forward together while saying 'Therefore, I recommend ...' -- to signal that the recommendation follows from the full evaluation, not just from one side.", description_id: "Guru menyatukan kedua tangan ke depan sambil mengucapkan 'Therefore, I recommend ...' -- untuk menandai bahwa rekomendasi muncul dari evaluasi penuh, bukan hanya dari satu sisi." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher produce a complete six-component review: describe ('It is ...'), evaluate ('I believe ... because ...'), identify a strength ('One strength is ...'), identify a limitation ('However, ...'), and conclude with a recommendation ('Therefore, I recommend ...') -- a complete review, not an argument and not a neutral report.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-06", "PAT-8-13", "PAT-8-15", "PAT-8-16", "PAT-9-05"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the complete review sentences ('It is ...' / 'I believe ... because ...' / 'One strength is ...' / 'However, ...' / 'Therefore, I recommend ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own complete review of a class charity project.",
      prompt: "Write a full review using all five components: 'It is ___ ...' (describe the project), 'I believe ___ because ___.' (your overall evaluation), 'One strength is ___.' (a positive), 'However, ___.' (a limitation), 'Therefore, I recommend ___.' (recommendation based on your evaluation). Use: charity, community service, participation, or evaluation. Keep all five components -- the recommendation must follow from your balanced evaluation, not appear on its own.",
      change_target: ["description (It is ...)", "evaluative claim (I believe ... because ...)", "strength (One strength is ...)", "limitation (However, ...)", "recommendation (Therefore, I recommend ...)"],
      differentiation: {
        easy: { task: "Use the review structure frame and fill in each slot in order. You may look at the project summary cards." },
        standard: { task: "Write your own complete review without reading the frame." },
        challenge: { task: "Write the complete review and add a second strength or limitation to make the evaluation more thorough before the recommendation." }
      },
      support: { pattern_support: ["PAT-7-06", "PAT-8-13", "PAT-8-15", "PAT-8-16", "PAT-9-05"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share complete reviews in a small group and check for all five components.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, take turns presenting your complete charity project review. The group checks: description? evaluative claim with reason? strength? limitation? recommendation? After each review, one group member names the most convincing part and explains why.",
      differentiation: {
        easy: { task: "Read your review to the group. Others tick each component on the frame as they hear it." },
        standard: { task: "Present your review without reading. The group checks all five components." },
        challenge: { task: "Present your review and the group asks 'Does your recommendation follow logically from your evaluation?' -- you explain the connection." }
      },
      support: { pattern_support: ["PAT-7-06", "PAT-8-13", "PAT-8-15", "PAT-8-16", "PAT-9-05"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your complete project review to a new group (complete project review).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting your complete review ('It is ...' / 'I believe ...' / 'One strength is ...' / 'However, ...' / 'Therefore, I recommend ...').",
      differentiation: {
        easy: { task: "Present your review to the new group using your written notes." },
        standard: { task: "Present your complete review without reading." },
        challenge: { task: "Present your complete review, then answer one question from the group: 'Why does your recommendation follow from the limitation you identified?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students produce all five review components: description, evaluative claim, strength, limitation, and recommendation that follows from the evaluation",
        "students keep 'Therefore, I recommend ...' grounded in the balanced evaluation -- not a standalone persuasive call",
        "students skip the limitation ('However, ...') and make a purely positive review, or jump straight to a recommendation without any evaluation"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a 'Based on this evaluation,...' framing before their recommendation.",
        needs_model: "Repeat the MODEL step, walking through the review structure frame component by component.",
        needs_repeat: "Do one more round of REPEAT (choral) on the complete review sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "skips the limitation or gives a recommendation without any prior evaluation (straight to 'Therefore, I recommend ...')",
        "produces all five components but cannot present without reading",
        "integrates all five review components into one coherent complete review accurately and confidently"
      ],
      action: [
        "recast the review slowly, pointing to the structure frame: describe -- evaluate -- strength -- limitation -- recommend; show that the recommendation is the last step, not the first",
        "model one more complete review on a different class project (e.g. a school garden project) to show the same five-component structure still works",
        "for a student who is ready, model ONE evaluative framing phrase before the recommendation first -- 'Based on this evaluation, I am confident that a stronger charity project with regular participation would bring lasting benefits to the whole community.' -- then invite that student to add 'Based on this evaluation,...' before their own 'Therefore, I recommend ...' to signal that the recommendation follows from their full review; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it strengthens the review-to-recommendation link without replacing any component"
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
