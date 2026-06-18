const skenario = {
  "persiapan": {
    "papan_tulis": "Therefore, I recommend ___ because ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu usulan proyek bakti sosial kelas (jualan buku, jualan jajanan, cuci mobil, penggalangan donasi), kerangka rekomendasi (\"Therefore, I recommend ___ because ___\"), dan kartu ikon (tumpukan buku, kelompok komunitas, relawan, kotak donasi).",
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
        "teks": "Good morning. Let us close a chapter today, with a recommendation."
      },
      {
        "tipe": "AKSI",
        "teks": "Minta siswa mengingat sesi negosiasi proyek bakti sosial sebelumnya."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "We discussed several charity project ideas before. Have you decided which one you recommend?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu usulan proyek — tunjukkan ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these project proposals again. Which one would you recommend, and can you say why?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to give a formal recommendation, using Therefore, I recommend and because."
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
          "teks": "Gestur ke satu sisi untuk \"Some people think\" — angkat tangan untuk \"However\", tunjuk ke diri sendiri."
        },
        {
          "tipe": "UCAP",
          "teks": "Some people think a car wash is best. However, I think a book sale is better because more students can help."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka tangan dalam gestur menawarkan — tunjuk kartu usulan jualan buku."
        },
        {
          "tipe": "UCAP",
          "teks": "How about a book sale for charity? We could ask volunteers to help."
        },
        {
          "tipe": "AKSI",
          "teks": "Satukan kedua tangan sebagai kesimpulan — tunjuk ke depan ke opsi yang dipilih, buka tangan untuk \"because\"."
        },
        {
          "tipe": "UCAP",
          "teks": "Therefore, I recommend a book sale because it raises money easily and everyone can help."
        },
        {
          "tipe": "AKSI",
          "teks": "Satukan kedua tangan — tunjuk ke depan ke kartu donasi, buka tangan untuk \"because\"."
        },
        {
          "tipe": "UCAP",
          "teks": "Therefore, I recommend asking for donations because the community can support our project."
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
              "teks": "Gestur ke satu sisi — angkat tangan untuk \"However\" — tunjuk ke diri sendiri."
            },
            {
              "tipe": "UCAP",
              "teks": "Some people think a car wash is best. However, I think a book sale is better because more students can help."
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
              "teks": "Buka tangan dalam gestur menawarkan — tunjuk kartu usulan jualan buku."
            },
            {
              "tipe": "UCAP",
              "teks": "How about a book sale for charity? We could ask volunteers to help."
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
              "teks": "Satukan kedua tangan sebagai kesimpulan — tunjuk ke depan ke opsi jualan buku — buka tangan untuk \"because\"."
            },
            {
              "tipe": "UCAP",
              "teks": "Therefore, I recommend a book sale because it raises money easily and everyone can help."
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
              "teks": "Satukan kedua tangan — tunjuk ke depan ke kartu donasi — buka tangan untuk \"because\"."
            },
            {
              "tipe": "UCAP",
              "teks": "Therefore, I recommend asking for donations because the community can support our project."
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
          "teks": "Good. Now it is your turn. Write your recommendation."
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
      "intro": "Siswa merekomendasikan satu ide bakti sosial dengan alasan versi sendiri. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan kartu usulan dan kerangka rekomendasi di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this pattern. Recommend one charity idea with a reason."
        },
        {
          "tipe": "UCAP",
          "teks": "Not step-by-step instructions, not I learned, and not a process summary, just your recommendation."
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
          "teks": "Stop writing. Stay where you are. I will show you your group."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu proyek mana yang akan direkomendasikan — tunjuk kartu usulan di papan tulis dan minta siswa pilih salah satu yang paling banyak manfaatnya."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu \"jualan buku\", dan minta siswa ucapkan \"Therefore, I recommend a book sale because ...\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kartu usulan dan lengkapi: \"Therefore, I recommend ___ because ___.\"",
        "standar": "Tulis rekomendasimu dengan satu alasan pendukung (\"Therefore, I recommend ... because ...\").",
        "tantangan": "Pertimbangkan pilihan-pilihan yang ada (\"Some people think ... However, I think ...\"), lalu simpulkan dengan \"Therefore, I recommend ... because ...\""
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Bentuk kelompok tiga atau empat orang. Guru menentukan kelompok.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk siapa bergabung dalam kelompok yang sama — jangan biarkan siswa memilih sendiri."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok terbentuk dan tenang."
        },
        {
          "tipe": "UCAP",
          "teks": "In your group, look at the proposal cards. Take turns weighing options and giving your recommendation."
        },
        {
          "tipe": "UCAP",
          "teks": "Work toward one recommendation the group supports, using Therefore, I recommend ... because."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk evaluasi dan rekomendasi kelompok."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — amati apakah setiap anggota sudah merekomendasikan setidaknya satu pilihan."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now each group will present to a new group."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika kelompok diam lebih dari sepuluh detik — tunjuk kartu usulan pertama dan tanya \"Which project do you recommend?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika anggota kelompok berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum melanjutkan."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa mendominasi — tunjuk siswa lain dan minta mereka menyampaikan rekomendasi sendiri."
        }
      ],
      "diferensiasi": {
        "mudah": "Rekomendasikan satu opsi dengan alasan (\"Therefore, I recommend ... because ...\"). Boleh membaca.",
        "standar": "Pertimbangkan dua opsi, lalu rekomendasikan satu dengan alasan, tanpa membaca.",
        "tantangan": "Akui opsi lain (\"Some people think ... However, ...\"), lalu simpulkan dengan \"Therefore, I recommend ... because ...\""
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Setiap kelompok bergabung dengan satu kelompok lain — membentuk kelompok baru empat orang dari kelompok yang berbeda.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kelompok mana bergabung dengan kelompok mana — jangan biarkan siswa memilih sendiri."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok baru terbentuk dan tenang."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa di tiap kelompok sebagai pembicara pertama."
        },
        {
          "tipe": "UCAP",
          "teks": "The person I point to presents your recommendation first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns presenting your charity project recommendation to the group."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk semua anggota berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — pastikan tidak ada anggota kelompok yang diam terus selama sesi."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, tunjuk kartu usulan, dan minta ucapkan \"Therefore, I recommend ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambahkan alasan kedua dengan \"and ...\" setelah \"because ...\""
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
        "mudah": "Presentasikan rekomendasimu dengan satu alasan. Boleh membaca.",
        "standar": "Presentasikan rekomendasimu dengan alasan tanpa membaca.",
        "tantangan": "Presentasikan rekomendasimu, lalu jawab satu pertanyaan tentang alasanmu dari kelompok."
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
          "teks": "Give me your Therefore sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa memberikan rekomendasi yang didukung alasan? Apakah ini kesimpulan, bukan daftar instruksi atau pelajaran yang dipetik?"
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
          "teks": "Your because part. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa memberikan alasan yang mendukung rekomendasi, bukan prosedur langkah demi langkah?"
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
          "teks": "Angkat kembali kerangka rekomendasi."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan kalimat ketiga dan keempat sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Angkat kerangka rekomendasi."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Therefore, I recommend a book sale because it raises money easily."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try with a different project. Therefore, I recommend..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu usulan lain — tunggu siswa melengkapi dengan \"because ...\""
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi sampai siswa siap mengucapkan rekomendasi penuh tanpa bantuan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Therefore, I recommend asking for donations because the community can support our project and students learn about helping others."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add a second reason with and."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba menambahkan alasan kedua setelah \"because ...\""
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Two reasons make your recommendation stronger.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan rekomendasi lengkap tanpa melihat buku, atau menulis satu rekomendasi untuk topik sekolah yang berbeda di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-16.js",
    pattern_id: "PAT-8-16",
    title: "Class Charity Project: Making Recommendations",
    short_title: "Charity Project",
    grade: 8,
    genre: "Exposition",
    cluster: "B",
    topic: "Class Charity Project",
    context: "Students evaluate several community service ideas and recommend one with supporting reasons.",
    context_id: "Siswa mengevaluasi beberapa ide bakti sosial dan merekomendasikan salah satunya dengan alasan pendukung.",
    communicative_goal: "make a recommendation based on reasons and shared benefits",
    communicative_goal_id: "membuat rekomendasi berdasarkan alasan dan manfaat bersama",
    vocabulary_domain: ["charity", "community", "volunteers", "donation"],
    input_anchor: "project proposal cards",
    output_anchor: "recommendation presentation",
    prerequisite_patterns: ["PAT-8-15", "PAT-8-03"],
    reusable_in: ["PAT-9-01", "PAT-9-15", "PAT-9-16"],
    complexity_level: "Expand",
    notes: "TP keenam belas Kelas 8, GENRE CLOSER EXPOSITION dan GENRE KE-4 Kelas 8 yang selesai (Interpersonal/Report/Explanation/Exposition). cluster B -- Making Recommendations, CEFR B1-. DUAL PREREQ. target_pattern PAT-8-16 = 'Therefore, I recommend ... because ...'. 'Therefore,' = konektor kesimpulan FORMAL (sentence-initial), PALING FORMAL dalam progresi register 'So,' (PAT-7-23) -> 'As a result,' (PAT-8-12, TP-36) -> 'Therefore,' (di sini), sesuai posisi penutup Exposition. Reaktivasi PAT-8-03 (WAJIB, VR-1; topik SAMA dengan TP-27 'Class Charity Project'): negosiasi BELUM TUNTAS TP-27 ('How about a book sale for charity? We could sell snacks. That's a good idea, but we need more helpers.') -> setelah dipertimbangkan (gaya PAT-8-15), AKHIRNYA jadi REKOMENDASI FORMAL: 'Therefore, I recommend a book sale because ...'. Reaktivasi PAT-8-15 (WAJIB, VR-1): 'Some people think...However, I think...because...' (mengakui pandangan lain + posisi) -> 'Therefore, I recommend...because...' (kesimpulan/tindak lanjut dari pertimbangan); model_1 = recap gaya PAT-8-15 tentang opsi charity, model_3/4 = target. forbidden_overlap (procedural instructions, narrative moral, explanation summary): 'Therefore, I recommend X because Y' BUKAN 'First, do X...' (PAT-7-09/8-10), BUKAN 'I/the character learned...' (PAT-7-16/24), BUKAN ringkasan proses (PAT-8-12). vocabulary_domain (charity, community, volunteers, donation) muncul di bahasa target. extends_to PAT-9-01 (Kelas 9) -- dicatat untuk konteks masa depan. Ekstensi opsional rekomendasi dengan dua alasan ('Therefore, I recommend ... because ... and ...') -- menjaga head rekomendasi, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Let's close a chapter today — with a recommendation." },
      { type: "AKSI", text: "Minta siswa mengingat sesi negosiasi proyek bakti sosial sebelumnya." },
      // HOOK
      { type: "UCAP", text: "We discussed several charity project ideas before. Have you decided which one you recommend?" },
      { type: "AKSI", text: "Tampilkan kartu usulan proyek: jualan buku, jualan jajanan, cuci mobil, penggalangan donasi." },
      { type: "UCAP", text: "Look at these project proposals again. Which one would you recommend — and can you say why?" },
    ],

    active_vocabulary: [
      "Therefore,",
      "I recommend",
      "because",
      "charity",
      "community",
      "volunteers",
      "donation"
    ],

    model_sentences: [
      { id: "model_1", text: "Some people think a car wash is best. However, I think a book sale is better because more students can help." },
      { id: "model_2", text: "How about a book sale for charity? We could ask volunteers to help." },
      { id: "model_3", text: "Therefore, I recommend a book sale because it raises money easily and everyone can help." },
      { id: "model_4", text: "Therefore, I recommend asking for donations because the community can support our project." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Project proposal cards for a class charity: a book sale, a snack sale, a car wash, a donation drive.", description_id: "Kartu usulan proyek untuk bakti sosial kelas: jualan buku, jualan jajanan, cuci mobil, penggalangan donasi.", asset_id: null },
      { id: "visual_2", description: "A recommendation frame: 'Therefore, I recommend ___ because ___.'", description_id: "Kerangka rekomendasi: 'Therefore, I recommend ___ because ___.'", asset_id: null },
      { id: "visual_3", description: "Icons: a stack of books, a community group, volunteers, a donation box.", description_id: "Ikon: tumpukan buku, kelompok komunitas, relawan, kotak donasi.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher draws the hands together to a conclusion while saying 'Therefore, ...'.", description_id: "Guru menyatukan kedua tangan sebagai kesimpulan sambil mengucapkan 'Therefore, ...'." },
      { id: "gesture_2", description: "Teacher points forward to the chosen option while saying 'I recommend ...'.", description_id: "Guru menunjuk ke depan ke arah opsi yang dipilih sambil mengucapkan 'I recommend ...'." },
      { id: "gesture_3", description: "Teacher opens a hand for the supporting reason while saying 'because ...'.", description_id: "Guru membuka tangan untuk alasan pendukungnya sambil mengucapkan 'because ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher weigh charity options and conclude with a supported recommendation: 'Therefore, I recommend ... because ...'.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-15", "PAT-8-03"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the recommendation sentences ('Therefore, I recommend ... because ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Make your own recommendation for the charity project with a supporting reason.",
      prompt: "Use the pattern 'Therefore, I recommend [option] because [reason].' Recommend one charity idea (charity, community, volunteers, donation). Give a recommendation with a reason -- not a step-by-step instruction ('First, ...'), not 'I learned ...', and not a process summary.",
      change_target: ["recommendation (Therefore, I recommend ...)", "reason (because ...)"],
      differentiation: {
        easy: { task: "Use a proposal card and complete: 'Therefore, I recommend ___ because ___.'" },
        standard: { task: "Write your recommendation with a supporting reason ('Therefore, I recommend ... because ...')." },
        challenge: { task: "Weigh the options first ('Some people think ... However, I think ...'), then conclude with 'Therefore, I recommend ... because ...'." }
      },
      support: { pattern_support: ["PAT-8-15", "PAT-8-03"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Evaluate proposal cards and recommend one in a small group.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, look at the proposal cards. Take turns weighing options and concluding with a recommendation ('Therefore, I recommend ... because ...'). Work toward one recommendation the group supports.",
      differentiation: {
        easy: { task: "Recommend one option with a reason ('Therefore, I recommend ... because ...'). You may read." },
        standard: { task: "Weigh two options, then recommend one with a reason, without reading." },
        challenge: { task: "Acknowledge another option ('Some people think ... However, ...'), then conclude with 'Therefore, I recommend ... because ...'." }
      },
      support: { pattern_support: ["PAT-8-15", "PAT-8-03"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your recommendation to a new group (recommendation presentation).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting your recommendation ('Therefore, I recommend ... because ...') for the class charity project.",
      differentiation: {
        easy: { task: "Present your recommendation with a reason. You may read it." },
        standard: { task: "Present your recommendation with a reason without reading." },
        challenge: { task: "Present your recommendation, then answer one question about your reason from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students conclude with a supported recommendation: 'Therefore, I recommend ... because ...'",
        "students give a recommendation with a reason (a conclusion), not a set of instructions or a lesson learned",
        "students still give steps ('First, do ...'), a moral ('I learned ...'), or a process summary instead of a recommendation"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to support the recommendation with two reasons.",
        needs_model: "Repeat the MODEL step, emphasizing 'Therefore, I recommend ... because ...' as a supported conclusion.",
        needs_repeat: "Do one more round of REPEAT (choral) on the recommendation sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives instructions or a lesson learned instead of a supported recommendation",
        "relies only on the written recommendation and cannot present without reading",
        "concludes with 'Therefore, I recommend ... because ...' accurately and confidently"
      ],
      action: [
        "recast the recommendation slowly, modeling 'Therefore, I recommend ... because ...' as a supported conclusion",
        "model one more recommendation on a different school topic to show the same pattern still works",
        "for a student who is ready, model ONE recommendation with two reasons first -- 'Therefore, I recommend asking for donations because the community can support our project and students learn about helping others.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the recommendation head, not instructions, a moral, or a summary"
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
