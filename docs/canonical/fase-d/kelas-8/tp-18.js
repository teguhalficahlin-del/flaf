const skenario = {
  "persiapan": {
    "papan_tulis": "Suddenly, ___ so ___, but ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu urutan cerita yang menunjukkan tiga momen konflik (tokoh mendengarkan di pintu dengan mata terbelalak, pintu terbuka tak terduga dalam kegelapan, sorot senter jatuh pada kunci tua di lantai berdebu), potongan penghubung bertiga slot berkode warna (\"Suddenly, ___ so ___, but ___.\" — oranye / hijau / merah dengan tanda panah satu kalimat terpadu), dan ikon kosakata (kunci tua, pintu berderak, jejak langkah kaki, sorot senter).",
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
        "teks": "Welcome back. The story continues, and things are about to change."
      },
      {
        "tipe": "AKSI",
        "teks": "Minta siswa mengingat tokoh dan latar yang sudah diperkenalkan."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Last time, Dito found out about the old storage room. What do you think he did next?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu urutan cerita — tunjuk panel pertama (tokoh mendengarkan di pintu), panel kedua (pintu terbuka dalam kegelapan), panel ketiga (senter menemukan kunci di lantai) satu per satu ke seluruh kelas."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these story cards. What unexpected things happened when he got closer to the door?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang merespons dalam lima detik — tunjuk satu siswa dengan ramah. Setelah dua atau tiga siswa berbicara atau sekitar tiga puluh detik berlalu — lanjutkan."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us see how to build a story conflict in one connected sentence, using Suddenly, so, and but."
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
          "teks": "Buka telapak tangan tiba-tiba sambil mengucapkan \"Suddenly,\" — tunjuk kartu panel pertama."
        },
        {
          "tipe": "UCAP",
          "teks": "Suddenly, Dito heard footsteps behind the storage room door, so he turned on his flashlight, but the footsteps immediately stopped."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka telapak tangan tiba-tiba sambil mengucapkan \"Suddenly,\" — tunjuk kartu panel kedua."
        },
        {
          "tipe": "UCAP",
          "teks": "Suddenly, the old door creaked open by itself, so Wulan jumped back, but nothing came out."
        },
        {
          "tipe": "AKSI",
          "teks": "Buka telapak tangan tiba-tiba sambil mengucapkan \"Suddenly,\" — tunjuk kartu panel ketiga."
        },
        {
          "tipe": "UCAP",
          "teks": "Suddenly, Dito's flashlight found an old key on the floor, so he picked it up, but the key felt strangely cold."
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
              "teks": "Buka telapak tangan tiba-tiba untuk \"Suddenly,\" — gerakkan tangan ke depan untuk \"so\" — angkat telapak tangan rata sebagai tanda berhenti untuk \"but\"."
            },
            {
              "tipe": "UCAP",
              "teks": "Suddenly, Dito heard footsteps behind the storage room door, so he turned on his flashlight, but the footsteps immediately stopped."
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
              "teks": "Buka telapak tangan tiba-tiba untuk \"Suddenly,\" — gerakkan tangan ke depan untuk \"so\" — angkat telapak tangan rata sebagai tanda berhenti untuk \"but\"."
            },
            {
              "tipe": "UCAP",
              "teks": "Suddenly, the old door creaked open by itself, so Wulan jumped back, but nothing came out."
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
              "teks": "Buka telapak tangan tiba-tiba untuk \"Suddenly,\" — gerakkan tangan ke depan untuk \"so\" — angkat telapak tangan rata sebagai tanda berhenti untuk \"but\"."
            },
            {
              "tipe": "UCAP",
              "teks": "Suddenly, Dito's flashlight found an old key on the floor, so he picked it up, but the key felt strangely cold."
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
          "teks": "Good. Now it is your turn. Build your own story conflict."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk pola di papan tulis dan tunjuk potongan penghubung tiga slot. Minta siswa menyalin pola di buku catatan sebelum melanjutkan. Beri waktu dua menit untuk menyalin, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi tiga menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa membangun satu kalimat konflik sendiri dengan \"Suddenly, ... so ..., but ...\". Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan kartu urutan cerita dan potongan penghubung di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Use this pattern. Write ONE conflict sentence: Suddenly, then so, then but."
        },
        {
          "tipe": "UCAP",
          "teks": "The event must happen in or near the storage room, not a general explanation, and not two separate sentences."
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
          "teks": "Stop writing. Now find a partner."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu peristiwa apa yang akan ditulis — tunjuk kartu panel kedua (pintu terbuka) dan minta siswa mulai dari \"Suddenly, the door ...\""
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu panel ketiga, dan minta siswa ucapkan \"Suddenly, Dito found ...\" Tunggu siswa menulis satu kata setelah \"Suddenly,\", lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan potongan penghubung dan lengkapi: \"Suddenly, ___ so ___, but ___.\" Boleh lihat kartu urutan cerita.",
        "standar": "Tulis kalimat konflikmu sendiri: \"Suddenly, ... so ..., but ...\" tanpa membaca.",
        "tantangan": "Tulis dua kalimat konflik — masing-masing dengan \"Suddenly ... so ... but ...\" — dengan reaksi tokoh yang berbeda di setiap kalimat."
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
          "teks": "Minta Siswa A membacakan kalimat konfliknya (\"Suddenly, ... so ..., but ...\")."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B memeriksa: Apakah ini satu kalimat? Ada peristiwa tak terduga? Ada konsekuensi? Ada komplikasi? Lalu tukar peran."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Share your conflict sentence with your partner. Your partner checks: one sentence, sudden event, consequence, complication. Then swap."
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
          "teks": "Good. Now stay with your partner and join another pair."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk kartu panel manapun dan tanya \"What suddenly happened at the storage room?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah ke pasangan lain."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa coba kalimat konflik lain dengan tokoh Wulan."
        }
      ],
      "diferensiasi": {
        "mudah": "Baca kalimatmu ke pasangan. Pasangan tunjuk \"so\" dan \"but\" dalam kalimatmu.",
        "standar": "Bagikan kalimatmu tanpa membaca. Pasangan periksa ketiga konektor ada.",
        "tantangan": "Bagikan dua kalimat konflik dan pasangan tanya \"What happened after the complication?\" — kamu jawab dengan satu kalimat lagi."
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
          "teks": "The person I point to presents your conflict sentence first."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns presenting your story conflict to the group."
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
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut, tunjuk kartu panel pertama, dan minta ucapkan \"Suddenly, Dito heard ...\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa tambahkan detail sensoris atau emosi setelah \"but\" dalam kalimatnya."
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
        "mudah": "Baca kalimat konflikmu ke kelompok.",
        "standar": "Presentasikan kalimat konflikmu tanpa membaca.",
        "tantangan": "Presentasikan kalimat konflikmu, lalu jawab satu pertanyaan dari kelompok tentang komplikasinya."
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
          "teks": "Give me your Suddenly sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menghasilkan satu kalimat terintegrasi dengan \"Suddenly ... so ... but ...\" (tiga konektor)? Bukan dua kalimat terpisah dan bukan penjelasan umum?"
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
          "teks": "Your but part. Without looking at your notes."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah bagian \"but\" adalah komplikasi naratif dari peristiwa spesifik, bukan penjelasan sebab-akibat umum?"
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
          "teks": "Angkat kembali potongan penghubung tiga slot."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan kalimat pertama dan ketiga sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Angkat potongan penghubung tiga slot."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Suddenly, Dito heard footsteps behind the storage room door, so he turned on his flashlight, but the footsteps immediately stopped."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "UCAP",
          "teks": "Now try with a different event. Suddenly, the door..."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu panel kedua — tunggu siswa melengkapi \"so ...\" dan \"but ...\"."
        },
        {
          "tipe": "AKSI",
          "teks": "Ulangi sampai siswa siap mengucapkan satu kalimat terintegrasi tanpa bantuan."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Suddenly, Dito's flashlight found an old key on the floor, so he picked it up carefully, but the key felt strangely cold and his heart started to beat faster."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add one feeling or sensory detail after but in your own sentence."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba memperpanjang bagian \"but\" dengan detail sensoris atau emosi."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. That detail makes the conflict feel real.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengucapkan kalimat konflik lengkap tanpa melihat buku, atau menulis kalimat konflik kedua dengan tokoh berbeda di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-18.js",
    pattern_id: "PAT-8-18",
    title: "The Old Storage Room: Developing the Mystery",
    short_title: "Storage Room Mystery",
    grade: 8,
    genre: "Narrative",
    cluster: "A",
    topic: "The Old Storage Room Mystery",
    context: "Students continue the story as unexpected sounds and a hidden key create new problems for the characters.",
    context_id: "Siswa melanjutkan cerita saat suara tak terduga dan kunci tersembunyi menimbulkan masalah baru bagi para tokoh.",
    communicative_goal: "develop a narrative conflict through connected events and unexpected changes",
    communicative_goal_id: "mengembangkan konflik cerita melalui peristiwa yang berkaitan dan perubahan tak terduga",
    vocabulary_domain: ["key", "door", "footsteps", "flashlight"],
    input_anchor: "story sequence cards",
    output_anchor: "conflict retelling",
    prerequisite_patterns: ["PAT-8-17"],
    reusable_in: ["PAT-9-05", "PAT-9-17"],
    complexity_level: "Expand",
    notes: "TP ke-18 Kelas 8, genre Narrative A 'Developing Conflict' (cluster A). SINGLE PREREQ: PAT-8-17. target_pattern PAT-8-18 = 'Suddenly ... so ... but ...' (SATU KALIMAT TERINTEGRASI -- 3 konektor dalam 1 kalimat, bukan dua kalimat terpisah). Reaktivasi PAT-8-17 (WAJIB, VR-1): orientasi naratif TP-41 (tokoh Dito & Wulan, latar gudang tua) menjadi konteks yang melatari konflik -- 'Suddenly [peristiwa di gudang] so [respons karakter] but [komplikasi tambahan]'. forbidden_overlap (explanation cause-effect, procedure sequence, factual chronology): 'so' di sini adalah KONSEKUENSI NARATIF PERISTIWA SPESIFIK (lampau, karakter), BUKAN 'happens because' (PAT-8-09, eksplanasi umum), BUKAN 'If...,...so...' (PAT-8-11, kondisional), BUKAN dua kalimat terpisah ala PAT-7-22 ('One day,...but.../Suddenly,...'). vocabulary_domain (key, door, footsteps, flashlight) semua terealisasi di model_sentences. BOOST extension: tambah REAKSI EMOSIONAL atau detail sensoris setelah 'but' -- memperpanjang kalimat tanpa merusak struktur 3-konektor.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Welcome back. The story continues — and things are about to change." },
      { type: "AKSI", text: "Minta siswa mengingat tokoh dan latar yang sudah diperkenalkan." },
      // HOOK
      { type: "UCAP", text: "Last time, Dito found out about the old storage room. What do you think he did next?" },
      { type: "AKSI", text: "Tampilkan kartu urutan cerita: tokoh mendengarkan di pintu, pintu terbuka dalam kegelapan, senter menemukan kunci di lantai." },
      { type: "UCAP", text: "Look at these story cards. What unexpected things happened when he got closer to the door?" },
    ],

    active_vocabulary: [
      "Suddenly,",
      "so",
      "but",
      "key",
      "door",
      "footsteps",
      "flashlight"
    ],

    model_sentences: [
      { id: "model_1", text: "Suddenly, Dito heard footsteps behind the storage room door, so he turned on his flashlight, but the footsteps immediately stopped." },
      { id: "model_2", text: "Suddenly, the old door creaked open by itself, so Wulan jumped back, but nothing came out." },
      { id: "model_3", text: "Suddenly, Dito's flashlight found an old key on the floor, so he picked it up, but the key felt strangely cold." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Story sequence cards showing three conflict moments: (1) a character listening at a door with wide eyes, (2) a door opening unexpectedly in darkness, (3) a flashlight beam landing on an old key on a dusty floor.", description_id: "Kartu urutan cerita yang menunjukkan tiga momen konflik: (1) seorang tokoh mendengarkan di pintu dengan mata terbelalak, (2) pintu terbuka tak terduga dalam kegelapan, (3) sorot senter jatuh pada kunci tua di lantai berdebu.", asset_id: null },
      { id: "visual_2", description: "A connector strip: 'Suddenly, ___ so ___, but ___.' with three color-coded slots (orange / green / red) and arrows showing one integrated sentence.", description_id: "Potongan penghubung: 'Suddenly, ___ so ___, but ___.' dengan tiga slot berkode warna (oranye / hijau / merah) dan tanda panah menunjukkan satu kalimat terpadu.", asset_id: null },
      { id: "visual_3", description: "Icons for vocabulary: an old key, a creaking door, footstep marks, a flashlight beam.", description_id: "Ikon kosakata: kunci tua, pintu berderak, jejak langkah kaki, sorot senter.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher makes a sudden open-palm gesture while saying 'Suddenly,' -- to signal an unexpected event.", description_id: "Guru membuat gestur telapak terbuka tiba-tiba sambil mengucapkan 'Suddenly,' -- untuk menandai peristiwa tak terduga." },
      { id: "gesture_2", description: "Teacher moves a hand forward for the consequence while saying 'so ...'.", description_id: "Guru menggerakkan tangan ke depan untuk konsekuensinya sambil mengucapkan 'so ...'." },
      { id: "gesture_3", description: "Teacher raises a flat hand as a stop signal while saying 'but ...' -- to mark the complication.", description_id: "Guru mengangkat telapak tangan rata sebagai tanda berhenti sambil mengucapkan 'but ...' -- untuk menandai komplikasinya." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher develop a story conflict in ONE integrated sentence with 'Suddenly ... so ... but ...' -- three connectors in one sentence, not two separate sentences.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-17"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the conflict sentences ('Suddenly ... so ... but ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Create your own story conflict sentence with 'Suddenly ... so ... but ...'.",
      prompt: "Write ONE sentence: 'Suddenly, [event] so [character response], but [complication].' The event must happen in or near the storage room and involve: key, door, footsteps, or flashlight. Keep it one integrated sentence -- not two separate sentences, and not a general explanation of why something happens.",
      change_target: ["sudden event (Suddenly, ...)", "consequence (so ...)", "complication (but ...)"],
      differentiation: {
        easy: { task: "Use the connector strip and complete: 'Suddenly, ___ so ___, but ___.' You may look at the sequence cards." },
        standard: { task: "Write your own conflict sentence: 'Suddenly, ... so ..., but ...' without reading." },
        challenge: { task: "Write two conflict sentences, each with 'Suddenly ... so ... but ...', showing a different character reaction each time." }
      },
      support: { pattern_support: ["PAT-8-17"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share conflict sentences with a partner and check the three-part structure.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your conflict sentence ('Suddenly ... so ... but ...'). Your partner checks: Is it one sentence? Is there a sudden event, a consequence, and a complication? Then swap.",
      differentiation: {
        easy: { task: "Read your sentence to your partner. Your partner points to 'so' and 'but' in your sentence." },
        standard: { task: "Share your sentence without reading. Your partner checks for all three connectors." },
        challenge: { task: "Share two conflict sentences and your partner asks 'What happened after the complication?' -- you give one more sentence." }
      },
      support: { pattern_support: ["PAT-8-17"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your conflict retelling to a new group (conflict retelling).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your story conflict sentence ('Suddenly ... so ... but ...').",
      differentiation: {
        easy: { task: "Read your conflict sentence to the group." },
        standard: { task: "Present your conflict sentence without reading." },
        challenge: { task: "Present your conflict sentence, then answer one question from the group about the complication." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students produce one integrated sentence with 'Suddenly ... so ... but ...' (three connectors)",
        "students use 'so' as a narrative consequence of a specific event, not as a general explanation",
        "students split the sentence into two parts ('Suddenly ... Wulan was scared. But ...') or use 'so' to explain a general process"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a feeling or sensory detail after 'but'.",
        needs_model: "Repeat the MODEL step, emphasizing that 'Suddenly ... so ... but ...' is ONE connected sentence with three slots, not two.",
        needs_repeat: "Do one more round of REPEAT (choral) on the conflict sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "splits the sentence into two parts or uses 'so' as a general cause ('so that means ...')",
        "produces the sentence structure but cannot retell it without reading",
        "produces 'Suddenly ... so ... but ...' as one integrated sentence accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling 'Suddenly ... so ... but ...' as one connected narrative event -- not two sentences and not a general explanation",
        "model one more conflict on a different story moment (e.g. Wulan's flashlight going out) to show the same pattern still works",
        "for a student who is ready, model ONE conflict sentence with an added sensory detail first -- 'Suddenly, Dito's flashlight found an old key on the floor, so he picked it up carefully, but the key felt strangely cold and his heart started to beat faster.' -- then invite that student to add one feeling or sensory detail after 'but' in their own sentence; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the 'Suddenly...so...but' structure intact"
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
