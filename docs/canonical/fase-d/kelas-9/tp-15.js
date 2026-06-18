const skenario = {
  "persiapan": {
    "papan_tulis": "The problem is ___.\nTo solve it, ___.\nThis solution works because ___.\nAs a result, ___.\nTherefore, ___.",
    "kartu": "Siapkan tiga kartu di meja guru — peta evaluasi masalah-solusi lengkap (lima kotak terhubung tanda panah: The problem is / To solve it / This solution works because / As a result / Therefore), kartu kerangka lima komponen berlabel, dan kartu diagram perkembangan kluster (TP-13: kartu identifikasi masalah; TP-14: kartu usulan solusi; TP-15: kartu evaluasi terpadu lengkap).",
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
        "teks": "Kondisikan kelas untuk sesi evaluasi terstruktur."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu sampai semua siswa duduk dan kondusif."
      },
      {
        "tipe": "UCAP",
        "teks": "Welcome. Today we evaluate the solution we proposed last session."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "We proposed an active break program. Does it actually work, and how do we know?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan peta evaluasi masalah-solusi lengkap — tunjuk kelima kotak secara berurutan dengan tanda panah yang menghubungkannya."
      },
      {
        "tipe": "AKSI",
        "teks": "Tahan sebentar — beri waktu siswa mengamati peta."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this evaluation map. What does a complete problem-solution evaluation need to include?"
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
        "teks": "Let us now see how to combine problem identification, solution, causal evaluation, consequence, and conclusion into one integrated evaluation."
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
          "teks": "Ambil peta evaluasi — tunjuk kotak masalah lalu kotak solusi."
        },
        {
          "tipe": "UCAP",
          "teks": "The problem is that students are not getting enough movement during the school day, which affects their focus and healthy lifestyle."
        },
        {
          "tipe": "UCAP",
          "teks": "To solve it, the school could introduce a daily active break program that encourages student participation across all year groups."
        },
        {
          "tipe": "AKSI",
          "teks": "Tepuk tanda panah kausal di peta."
        },
        {
          "tipe": "UCAP",
          "teks": "This solution works because regular movement during the school day has been shown to improve concentration and energy, which contributes to wider school improvement."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan peta — satukan kedua tangan ke depan."
        },
        {
          "tipe": "UCAP",
          "teks": "As a result, students will be healthier and more engaged in their learning. Therefore, making active breaks a permanent part of school life is an investment in the long-term benefits of a healthy lifestyle and sustained school improvement for every student."
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
              "teks": "Angkat peta evaluasi — tunjuk kotak masalah."
            },
            {
              "tipe": "UCAP",
              "teks": "The problem is that students are not getting enough movement during the school day, which affects their focus and healthy lifestyle."
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
              "teks": "Tunjuk kotak solusi di peta."
            },
            {
              "tipe": "UCAP",
              "teks": "To solve it, the school could introduce a daily active break program that encourages student participation across all year groups."
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
              "teks": "Tepuk tanda panah kausal di peta."
            },
            {
              "tipe": "UCAP",
              "teks": "This solution works because regular movement during the school day has been shown to improve concentration and energy, which contributes to wider school improvement."
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
              "teks": "Letakkan peta — satukan kedua tangan ke depan."
            },
            {
              "tipe": "UCAP",
              "teks": "As a result, students will be healthier and more engaged in their learning. Therefore, making active breaks a permanent part of school life is an investment in the long-term benefits of a healthy lifestyle and sustained school improvement for every student."
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
          "teks": "Now it is your turn. Write your own integrated problem-solution evaluation."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk peta evaluasi dan sebutkan fungsi setiap komponen: \"The problem is = what is wrong. To solve it = what we will do. Works because = WHY it will work. As a result = what changes. Therefore = my overall conclusion.\" Minta siswa menyalin pola di buku catatan sebelum melanjutkan. Beri waktu dua menit, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi enam menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis evaluasi masalah-solusi terpadu mereka sendiri tentang menciptakan budaya sekolah aktif. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
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
          "teks": "Write a full evaluation using all five components. Draw on your problem statement from lesson thirteen and your solution from lesson fourteen."
        },
        {
          "tipe": "UCAP",
          "teks": "This solution works because explains WHY, not what. Therefore is your conclusion, different from As a result."
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
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang menggabungkan komponen (\"To solve this problem, it works because...\") atau yang menggunakan Therefore sebagai pengulangan As a result."
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
          "teks": "Jika siswa tidak tahu cara membedakan This solution works because dari To solve it — tunjuk tanda panah kausal di peta dan minta siswa bertanya: \"Not WHAT the solution is — but WHY it will work. What is the causal reason?\""
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kotak pertama di peta, dan minta siswa ucapkan \"The problem is that students\" lalu satu kalimat singkat. Tunggu siswa menulis satu baris, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kerangka lima komponen dan isi setiap slot menggunakan pernyataan masalah dari TP-13 dan usulan solusi dari TP-14.",
        "standar": "Tulis evaluasi terpadu sendiri tanpa membaca kerangka, menggabungkan kerja dari TP-13 dan TP-14. Gunakan kosakata: school improvement, healthy lifestyle, student participation, atau long-term benefits.",
        "tantangan": "Tulis evaluasi dan buat This solution works because mengutip bukti dari sumber-sumber di TP-12 (Information Synthesis) untuk membenarkan solusi — koneksi lintas kluster."
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
          "teks": "Take turns sharing your evaluation in your group."
        },
        {
          "tipe": "UCAP",
          "teks": "After each turn, the group checks: Does This solution works because explain WHY, not just what? Does Therefore add a conclusion beyond As a result?"
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk semua anggota kelompok berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — prioritaskan kelompok yang tampak kesulitan membedakan This solution works because dari To solve it, atau Therefore dari As a result."
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
          "teks": "Jika ada anggota kelompok yang diam lebih dari sepuluh detik — tunjuk buku catatannya dan minta ucapkan \"The problem is that\" lalu satu kalimat singkat."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this pattern.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa sampaikan evaluasi lengkap sekali lagi tanpa melihat buku."
        },
        {
          "tipe": "darurat",
          "teks": "Jika waktu tersisa kurang dari lima menit atau kelas tidak lagi kondusif — hentikan aktivitas evaluasi individual. Tunjuk pola The problem is, To solve it, This solution works because, As a result, Therefore di papan tulis, minta seluruh kelas mengucapkan kelima komponen bersama satu kali, lalu tutup sesi."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca evaluasi dari buku catatan ke kelompok. Kelompok mencentang setiap komponen saat mendengarnya: The problem is, To solve it, works because, As a result, Therefore.",
        "standar": "Bagikan evaluasi tanpa membaca. Kelompok memeriksa apakah kelima komponen benar-benar berbeda.",
        "tantangan": "Bagikan evaluasi dan kelompok bertanya: \"Why is this solution better than just doing one more lesson of physical education?\" — kamu jawab dengan bukti."
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
          "teks": "Take turns presenting your full evaluation. Others listen for all five components."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"The problem is that\" lalu satu kalimat. Jika masih diam — ucapkan nama siswa tersebut terlebih dahulu lalu minta siswa mengulang."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa sampaikan evaluasi lengkap sekali lagi tanpa melihat buku."
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
        "mudah": "Presentasikan evaluasi ke kelompok baru menggunakan catatan.",
        "standar": "Presentasikan evaluasi tanpa membaca.",
        "tantangan": "Presentasikan evaluasi tanpa membaca, lalu jawab satu pertanyaan dari kelompok: \"What long-term benefits would this solution bring to the school beyond the students currently enrolled?\""
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
          "teks": "Give me your This solution works because sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menjelaskan MENGAPA solusinya efektif, bukan hanya APANYA?"
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
          "teks": "Amati — apakah Therefore menarik kesimpulan yang melampaui As a result, atau sekadar pengulangan?"
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
          "teks": "Angkat kembali peta evaluasi."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk setiap kotak dan sebutkan fungsinya — \"The problem is = what is wrong. To solve it = what we do. Works because = WHY. As a result = what changes. Therefore = my overall conclusion.\""
        },
        {
          "tipe": "AKSI",
          "teks": "Beri isyarat ke siswa — ucapkan kalimat This solution works because dari model kalimat 3 bersama-sama."
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
          "teks": "Sebutkan fungsi setiap komponen perlahan menggunakan peta evaluasi."
        },
        {
          "tipe": "UCAP",
          "teks": "The problem is = what is wrong. To solve it = what we will do. Works because = WHY it will work, this is different from what. As a result = what changes. Therefore = my overall conclusion, this is different from what changes; it is what we should do or think."
        },
        {
          "tipe": "AKSI",
          "teks": "Modelkan satu evaluasi terpadu lagi menggunakan topik peningkatan sekolah berbeda — misalnya memperkenalkan kebun sekolah untuk kesejahteraan siswa. Minta siswa mengikuti kelima langkah."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kalimat This solution works because dalam catatan siswa."
        },
        {
          "tipe": "UCAP",
          "teks": "Try adding a second long-term benefit. Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "Not only does this solution address the immediate problem of low physical activity, but it also builds student participation habits that support school improvement well beyond their school years, contributing to a healthy lifestyle in the community."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now add Not only does this solution address the immediate problem, but it also after your own works because sentence."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"That elevates your evaluation from single-benefit to multi-benefit reasoning.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka sampaikan seluruh evaluasi terpadu mereka sekali lagi tanpa melihat buku, atau perkuat kalimat Therefore dengan satu implikasi jangka panjang yang spesifik bagi peningkatan sekolah."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-15.js",
    pattern_id: "PAT-9-15",
    title: "Creating an Active School Culture: Evaluating the Solution",
    short_title: "Solution Evaluation",
    grade: 9,
    genre: "Problem & Solution",
    cluster: "B",
    topic: "Creating an Active School Culture",
    context: "Students evaluate a proposed solution to low student physical activity, explaining how the solution works, why it succeeds, and what long-term benefits it produces.",
    context_id: "Siswa mengevaluasi usulan solusi untuk rendahnya aktivitas fisik siswa, menjelaskan cara kerja solusi tersebut, mengapa solusi itu berhasil, dan manfaat jangka panjang apa yang dihasilkannya.",
    communicative_goal: "evaluate a solution by combining problem identification, solution proposal, causal reasoning, consequence, and evidence-based conclusion into one integrated discourse",
    communicative_goal_id: "mengevaluasi solusi dengan memadukan identifikasi masalah, usulan solusi, penalaran kausal, akibat, dan kesimpulan berbasis bukti menjadi satu wacana terpadu",
    vocabulary_domain: ["school improvement", "healthy lifestyle", "student participation", "long-term benefits"],
    input_anchor: "solution proposal",
    output_anchor: "integrated problem-solution evaluation",
    prerequisite_patterns: ["PAT-9-13", "PAT-9-14", "PAT-8-11", "PAT-9-12"],
    reusable_in: ["PAT-9-16"],
    complexity_level: "Integrate",
    notes: "TP kelimabelas Kelas 9, genre Problem & Solution (cluster B -- CLOSER CLUSTER 5). QUAD PREREQ: PAT-9-13, PAT-9-14, PAT-8-11, PAT-9-12. LIMA KOMPONEN terintegrasi: 'The problem is... To solve it,... This solution works because... As a result,... Therefore,...'. CROSS-CLUSTER PREREQ: PAT-9-12 (WAJIB, VR-1) -- Information Synthesis CLOSER dari Cluster 4 -- direaktivasi sebagai KAPASITAS 'Therefore,...' yang berlandaskan evidence; 'Therefore,...' di TP-15 menutup Problem & Solution arc dengan cara yang sejajar dengan 'Therefore,...' di Cluster 4. Ini adalah satu-satunya TP di Cluster 5 dengan prereq lintas cluster. Reaktivasi PAT-9-13 (WAJIB, VR-1): 'The problem is... because... As a result,...' (K9, problem identification) direaktivasi sebagai KOMPONEN PERTAMA integrasi -- 'The problem is...' di TP-15 lebih ringkas dari TP-13 karena berfungsi sebagai recap sebelum fokus ke evaluasi solusi, bukan sebagai pernyataan masalah utuh. Reaktivasi PAT-9-14 (WAJIB, VR-1): 'To solve this problem,... If..., so... This will help...' (K9, solution proposal) direaktivasi sebagai KOMPONEN SOLUSI yang dikompres menjadi 'To solve it,...' dan 'This solution works because...' di TP-15 -- conditional logic dari TP-14 kini diformalkan sebagai 'works because'. Reaktivasi PAT-8-11 (WAJIB, VR-1): 'The best way to... is to...' (K8, recommendation) direaktivasi sebagai REGISTER EVALUASI -- 'This solution works because...' adalah elevasi dari rekomendasi (K8) ke evaluasi solusi yang sudah diimplementasikan (K9). forbidden_overlap (solution proposal only, problem identification only, argumentative recommendation): TP-15 WAJIB mengintegrasikan SEMUA LIMA komponen dalam satu discourse -- bukan TP-13 (problem only), bukan TP-14 (solution only), bukan ekspositif tanpa problem framing. 'This solution works because...' membedakan TP-15 dari TP-14 ('This will help...') dengan menambah evaluasi kausalitas. vocabulary_domain: school improvement ✓ model_3/4, healthy lifestyle ✓ model_1/4, student participation ✓ model_2/4, long-term benefits ✓ model_4. BOOST extension: tambah 'Not only does this solution address the immediate problem, but it also...' sebagai escalation move yang menambah dimensi kedua manfaat. extends_to PAT-9-16 (CLOSER KELAS 9).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Welcome. Today we evaluate the solution we proposed last session." },
      { type: "AKSI", text: "Kondisikan kelas untuk sesi evaluasi terstruktur." },
      // HOOK
      { type: "UCAP", text: "We proposed an active break program. Does it actually work — and how do we know?" },
      { type: "AKSI", text: "Tampilkan peta evaluasi masalah-solusi lengkap: 5 kotak terhubung oleh tanda panah." },
      { type: "UCAP", text: "Look at this evaluation map. What does a complete problem-solution evaluation need to include?" },
    ],

    active_vocabulary: [
      "The problem is",
      "To solve it,",
      "This solution works because",
      "As a result,",
      "Therefore,",
      "school improvement",
      "healthy lifestyle",
      "student participation",
      "long-term benefits"
    ],

    model_sentences: [
      { id: "model_1", text: "The problem is that students are not getting enough movement during the school day, which affects their focus and healthy lifestyle." },
      { id: "model_2", text: "To solve it, the school could introduce a daily active break program that encourages student participation across all year groups." },
      { id: "model_3", text: "This solution works because regular movement during the school day has been shown to improve concentration and energy, which contributes to wider school improvement." },
      { id: "model_4", text: "As a result, students will be healthier and more engaged in their learning. Therefore, making active breaks a permanent part of school life is an investment in the long-term benefits of a healthy lifestyle and sustained school improvement for every student." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A complete problem-solution evaluation map showing five connected boxes: 'The problem is...' → 'To solve it,...' → 'This solution works because...' → 'As a result,...' → 'Therefore,...' -- each connected by arrows showing the logical flow.", description_id: "Peta evaluasi masalah-solusi lengkap yang menunjukkan lima kotak terhubung: 'The problem is...' → 'To solve it,...' → 'This solution works because...' → 'As a result,...' → 'Therefore,...' -- masing-masing dihubungkan tanda panah menunjukkan alur logisnya.", asset_id: null },
      { id: "visual_2", description: "A five-component frame with labelled slots: 'The problem is...' (problem recap) / 'To solve it,...' (solution) / 'This solution works because...' (causal evaluation) / 'As a result,...' (consequence) / 'Therefore,...' (evidence-based conclusion).", description_id: "Kerangka lima komponen dengan slot berlabel: 'The problem is...' (ringkasan masalah) / 'To solve it,...' (solusi) / 'This solution works because...' (evaluasi kausal) / 'As a result,...' (konsekuensi) / 'Therefore,...' (kesimpulan berbasis bukti).", asset_id: null },
      { id: "visual_3", description: "A cluster progression diagram: TP-13 (problem identification card) → TP-14 (solution proposal card) → TP-15 (full integrated evaluation card) -- showing that TP-15 combines both into a single coherent discourse.", description_id: "Diagram perkembangan kelompok: TP-13 (kartu identifikasi masalah) → TP-14 (kartu usulan solusi) → TP-15 (kartu evaluasi terpadu lengkap) -- menunjukkan bahwa TP-15 memadukan keduanya menjadi satu wacana yang koheren.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to the problem box and then the solution box on the map while moving from 'The problem is...' to 'To solve it,...' -- to show the problem-solution link clearly.", description_id: "Guru menunjuk kotak masalah lalu kotak solusi di peta sambil berpindah dari 'The problem is...' ke 'To solve it,...' -- untuk menunjukkan keterkaitan masalah-solusi secara jelas." },
      { id: "gesture_2", description: "Teacher taps a causal arrow while saying 'This solution works because...' -- to signal evaluating WHY the solution is effective, not just what the solution is.", description_id: "Guru menepuk tanda panah kausal sambil mengucapkan 'This solution works because...' -- untuk menandai mengevaluasi MENGAPA solusinya efektif, bukan hanya apa solusinya." },
      { id: "gesture_3", description: "Teacher brings both hands forward while saying 'Therefore,...' -- to signal that the final conclusion draws on all five components as an integrated whole, not just the last point.", description_id: "Guru menyatukan kedua tangan ke depan sambil mengucapkan 'Therefore,...' -- untuk menandai bahwa kesimpulan akhir mengacu pada kelima komponen sebagai satu kesatuan terpadu, bukan hanya poin terakhir." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher integrate all five components: 'The problem is...' (problem recap) + 'To solve it,...' (solution) + 'This solution works because...' (causal evaluation) + 'As a result,...' (consequence) + 'Therefore,...' (evidence-based conclusion) -- an integrated evaluation, not a problem statement alone, not a solution proposal alone, and not an argumentative recommendation.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-9-13", "PAT-9-14", "PAT-8-11", "PAT-9-12"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the five integrated components ('The problem is...' / 'To solve it,...' / 'This solution works because...' / 'As a result,...' / 'Therefore,...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own integrated problem-solution evaluation about creating an active school culture.",
      prompt: "Write a full evaluation using all five components: 'The problem is that ___.' (briefly state the problem -- one sentence), 'To solve it, ___.' (name the solution), 'This solution works because ___.' (explain WHY it works -- the causal reason), 'As a result, ___.' (describe the consequence for students), 'Therefore, ___.' (draw your conclusion for the school). Use: school improvement, healthy lifestyle, student participation, or long-term benefits. All five components must be distinct -- 'This solution works because...' is different from 'To solve it,...' and 'Therefore,...' is different from 'As a result,...'",
      change_target: ["problem recap (The problem is ...)", "solution (To solve it, ...)", "causal evaluation (This solution works because ...)", "consequence (As a result, ...)", "conclusion (Therefore, ...)"],
      differentiation: {
        easy: { task: "Use the five-component frame and fill in each slot using your TP-13 problem statement and TP-14 solution proposal." },
        standard: { task: "Write your own integrated evaluation without reading the frame, drawing on your work from TP-13 and TP-14." },
        challenge: { task: "Write the evaluation and make 'This solution works because...' cite evidence from the sources in TP-12 (Information Synthesis) to justify the solution -- a cross-cluster connection." }
      },
      support: { pattern_support: ["PAT-9-13", "PAT-9-14", "PAT-8-11", "PAT-9-12"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share integrated problem-solution evaluations with a small group and evaluate whether all five components are distinct.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, take turns sharing your evaluation ('The problem is...' / 'To solve it,...' / 'This solution works because...' / 'As a result,...' / 'Therefore,...'). After each turn, the group checks: Does 'This solution works because...' explain WHY (not just what)? Does 'Therefore,...' add a conclusion that goes beyond 'As a result,...'? Rate whether all five steps feel distinct.",
      differentiation: {
        easy: { task: "Read your evaluation to the group. Others tick each of the five components as they hear it." },
        standard: { task: "Share your evaluation without reading. The group checks all five components are distinct." },
        challenge: { task: "Share your evaluation and the group asks 'Why is this solution better than just doing one more lesson of physical education?' -- you defend the solution with evidence." }
      },
      support: { pattern_support: ["PAT-9-13", "PAT-9-14", "PAT-8-11", "PAT-9-12"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your integrated problem-solution evaluation to a new group (integrated problem-solution evaluation).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting your full evaluation ('The problem is...' / 'To solve it,...' / 'This solution works because...' / 'As a result,...' / 'Therefore,...').",
      differentiation: {
        easy: { task: "Present your evaluation to the new group using your written notes." },
        standard: { task: "Present your evaluation without reading." },
        challenge: { task: "Present your evaluation, then answer one question from the group: 'What long-term benefits would this solution bring to the school beyond the students currently enrolled?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students integrate all five components in order: problem recap → solution → causal evaluation → consequence → evidence-based conclusion, with each component doing a distinct discursive job",
        "students distinguish 'This solution works because...' (WHY the solution is effective) from 'To solve it,...' (WHAT the solution is) and 'Therefore,...' (CONCLUSION) from 'As a result,...' (CONSEQUENCE)",
        "students collapse components ('To solve this problem, it works because...') or repeat the same idea in multiple slots without each one adding something new"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add 'Not only does this solution address the immediate problem, but it also...' to add a second benefit dimension.",
        needs_model: "Repeat the MODEL step, using the five-component map and pointing to each arrow -- name the function of each component before each model sentence.",
        needs_repeat: "Do one more round of REPEAT (choral) with pauses naming each component before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "collapses components ('To solve this problem, it works because students will feel better, therefore it is a good idea') or uses 'Therefore,...' as a repetition of 'As a result,...' without adding a new conclusion",
        "produces all five components correctly but cannot present without reading",
        "integrates all five components as distinct discursive moves, with 'This solution works because...' providing causal evidence and 'Therefore,...' drawing a conclusion about long-term school improvement, accurately and confidently"
      ],
      action: [
        "recast all five components naming the function of each: 'The problem is = what is wrong. To solve it = what we will do. Works because = WHY it will work (this is different from what). As a result = what changes. Therefore = my overall conclusion (this is different from what changes -- it is what we should do or think).'",
        "model one more integrated evaluation on a different school improvement topic (e.g. introducing a school garden for wellbeing) to show the same five-component structure still works",
        "for a student who is ready, model ONE second-benefit sentence first -- 'Not only does this solution address the immediate problem of low physical activity, but it also builds student participation habits that support school improvement well beyond their school years, contributing to a healthy lifestyle in the community.' -- then invite that student to add 'Not only does this solution address the immediate problem, but it also...' after their own 'This solution works because...' to introduce a second long-term benefit; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it elevates the evaluation from single-benefit to multi-benefit reasoning"
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
