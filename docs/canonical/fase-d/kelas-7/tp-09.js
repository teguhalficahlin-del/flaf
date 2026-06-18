const skenario = {
  "persiapan": {
    "papan_tulis": "First, (action).\nThen, (action).\nFinally, (action).",
    "kartu": "Siapkan tiga kartu kata urutan dengan tanda panah — First, Then, Finally.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan urutan gambar bernomor (1-2-3) dari rutinitas pagi — anak bangun, sarapan, dan berjalan ke sekolah."
      },
      {
        "tipe": "AKSI",
        "teks": "Siapkan tiga ikon tindakan — jam alarm untuk wake up early, piring sarapan untuk eat breakfast, dan tas sekolah untuk go to school."
      }
    ]
  },
  "siapkan_kelas": {
    "settling": [
      {
        "tipe": "AKSI",
        "teks": "Berdiri di depan kelas dengan semangat."
      },
      {
        "tipe": "UCAP",
        "teks": "Rise and shine, everyone! Let's start our morning."
      },
      {
        "tipe": "AKSI",
        "teks": "Sapa siswa dengan semangat dan cek kesiapan kelas."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "What do you do first when you wake up in the morning?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu beberapa siswa menjawab singkat."
      },
      {
        "tipe": "AKSI",
        "teks": "Tempel urutan gambar bernomor di papan tulis."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this picture sequence. Does this morning routine look familiar to you?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu beberapa siswa merespons. Jika tidak ada yang menjawab dalam lima detik — tunjuk gambar nomor satu dan tanya \"What is he doing here?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — biarkan gambar tetap terpasang di papan tulis."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today we learn how to talk about our morning routine in order."
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
          "teks": "Angkat satu jari — tunjuk gambar nomor satu."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan menggeliat bangun."
        },
        {
          "tipe": "UCAP",
          "teks": "First, wake up early."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat dua jari — tunjuk gambar nomor dua."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan makan."
        },
        {
          "tipe": "UCAP",
          "teks": "Then, eat breakfast."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat tiga jari — tunjuk gambar nomor tiga."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan berjalan."
        },
        {
          "tipe": "UCAP",
          "teks": "Finally, go to school."
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
      "intro": "Guru mengucapkan satu kalimat — siswa menirukan bersama. Satu putaran per kalimat. Gambar dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Kalimat 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat satu jari — tunjuk gambar nomor satu dan peragakan menggeliat bangun."
            },
            {
              "tipe": "UCAP",
              "teks": "First, wake up early."
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
              "teks": "Angkat dua jari — tunjuk gambar nomor dua dan peragakan makan."
            },
            {
              "tipe": "UCAP",
              "teks": "Then, eat breakfast."
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
              "teks": "Angkat tiga jari — tunjuk gambar nomor tiga dan peragakan berjalan."
            },
            {
              "tipe": "UCAP",
              "teks": "Finally, go to school."
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
          "teks": "Good. Now write your own morning routine."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — minta siswa sortir tiga kartu kata urutan First, Then, Finally secara berurutan di meja masing-masing, lalu ulangi REPEAT sekali lagi."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menyusun tiga langkah rutinitas pagi mereka sendiri menggunakan pola dari papan tulis. Dikerjakan secara individual, ditulis di buku catatan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel kartu ikon tindakan di papan tulis di sebelah pola. Tempel juga tiga kartu kata urutan."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Write your own morning routine. Three steps, in order."
        },
        {
          "tipe": "UCAP",
          "teks": "Use First, Then, Finally. Use action words like wake up, brush your teeth, eat breakfast, get dressed, go to school."
        },
        {
          "tipe": "UCAP",
          "teks": "Use present tense, not woke up, not ate. Say wake up, eat, go."
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
          "teks": "Berjalan keliling kelas — perhatikan siswa yang menggunakan bentuk lampau seperti woke up atau ate — ingatkan dengan gesture angkat tangan dan ucapkan \"Present tense.\""
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
          "teks": "Jika siswa tidak tahu kata kerja untuk kegiatan yang ingin ditulis — tunjuk ikon tindakan di papan tulis dan minta siswa pilih salah satu."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, angkat satu jari, dan ucapkan \"First, blank. Wake up early?\" Tunggu siswa mengulang dan menulis satu langkah, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Urutkan tiga kartu gambar dan lengkapi: First, blank. Then, blank. Finally, blank.",
        "standar": "Tulis tiga langkah rutinitas pagi sendiri menggunakan First, Then, Finally dengan kata kerja present tense.",
        "tantangan": "Tulis tiga langkah rutinitas, dan tambahkan satu baris lead-in dan motivasi sebelumnya: I like my morning routine. It is important to have a good start. Pertahankan tiga langkah sebagai bagian utama."
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
          "teks": "Minta Siswa A menceritakan rutinitas paginya kepada Siswa B dengan First, Then, Finally."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B merespons dengan That's true. Atau I agree."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B menceritakan rutinitas paginya."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Tell your morning routine to your partner. Your partner responds, then shares theirs. Work with the person next to you."
        },
        {
          "tipe": "UCAP",
          "teks": "If you are in a group of three, take turns. A, then B, then C."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati beberapa pasangan di setiap baris dan perhatikan apakah kata kerja present tense digunakan."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — angkat satu jari ke arah pasangan tersebut dan ucapkan \"First, blank. What do you do first in the morning?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ceritakan rutinitasnya sekali lagi tanpa melihat buku."
        }
      ],
      "diferensiasi": {
        "mudah": "Ceritakan rutinitasmu menggunakan tiga kalimat dari buku catatan — boleh membaca. Pasangan merespons dengan That's true. Atau I agree.",
        "standar": "Ceritakan rutinitasmu tanpa membaca. Pasangan merespons, lalu bercerita tentang rutinitasnya sendiri.",
        "tantangan": "Tambahkan lead-in dan motivasi terlebih dahulu, lalu ceritakan tiga langkah. Pasangan merespons dan bercerita tentang rutinitasnya sendiri."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Setiap pasangan bergabung dengan satu pasangan lain — bukan pasangan dari langkah INTERACT — membentuk kelompok empat orang.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pasangan mana bergabung dengan pasangan mana."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok terbentuk dan tenang."
        },
        {
          "tipe": "UCAP",
          "teks": "Take turns. Tell your morning routine to the new group using First, Then, Finally."
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
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk semua anggota kelompok berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — dengarkan apakah kata urutan First, Then, Finally digunakan secara konsisten."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — angkat satu jari ke arah siswa tersebut dan minta mereka ucapkan \"First, blank.\" sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai berbagi jauh lebih cepat dari yang lain — minta siswa dengarkan dan coba ingat satu langkah rutinitas setiap teman."
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
        "mudah": "Ceritakan tiga langkah rutinitasmu ke kelompok baru — boleh membaca.",
        "standar": "Ceritakan rutinitasmu ke kelompok baru tanpa membaca.",
        "tantangan": "Ceritakan rutinitas dengan lead-in dan motivasi, lalu dengarkan dan tanggapi rutinitas satu teman dengan That's true. Atau I agree."
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
          "teks": "Tell me your three morning steps. First, Then, Finally. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan tiga langkah."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan kata urutan dengan benar? Apakah kata kerja dalam present tense?"
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
          "teks": "Say your Finally sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa bisa mengucapkan langkah terakhir dengan lancar?"
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
          "teks": "Angkat tiga kartu kata urutan berurutan."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan tiga langkah sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Angkat satu jari."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. First, wake up early."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat dua jari."
        },
        {
          "tipe": "UCAP",
          "teks": "Then, eat breakfast."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Angkat tiga jari."
        },
        {
          "tipe": "UCAP",
          "teks": "Finally, go to school."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan — tekankan kata urutan di awal setiap kalimat."
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
          "teks": "First, wake up. Then, eat breakfast. Next, pack your bag. Finally, go to school."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Add one more step using Next. Just once."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Try with a different routine.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang tiga langkah rutinitas pagi tanpa melihat buku, atau menulis satu langkah tambahan di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-09.js",
    pattern_id: "PAT-7-09",
    title: "Morning Routine: Sequencing Daily Actions",
    short_title: "Morning Routine",
    grade: 7,
    genre: "Procedure",
    cluster: "A",
    topic: "Morning Routine",
    context: "Students arrange and describe simple daily activities before going to school.",
    context_id: "Siswa menyusun dan mendeskripsikan kegiatan harian sederhana sebelum berangkat sekolah.",
    communicative_goal: "sequence actions using first, then, and finally",
    communicative_goal_id: "mengurutkan kegiatan menggunakan first, then, dan finally",
    vocabulary_domain: ["wake up", "breakfast", "school", "daily routine"],
    input_anchor: "picture sequence",
    output_anchor: "ordered oral retelling",
    prerequisite_patterns: ["PAT-7-08", "PAT-7-01", "PAT-7-04"],
    reusable_in: ["PAT-8-10"],
    complexity_level: "Acquire",
    notes: "TP kesembilan Fase D dan TP PROCEDURE PERTAMA. Mood bergeser dari deskriptif/deklaratif ke IMPERATIF + SEQUENCING. target_pattern PAT-7-09 = 'First, ... Then, ... Finally, ...' di mana tiap klausa setelah penanda urutan adalah AKSI IMPERATIF present tense (mis. 'First, wake up early.') -- BUKAN past tense (forbidden: recounting past events; HINDARI 'woke up', 'ate'). Tension ganda forbidden_overlap vs prerequisite (tiga prereq): (1) PAT-7-08 ('It is+adj+for/to') vs 'describing characteristics' -> dipakai HANYA satu baris framing/motivasi sebelum sequence ('It is important to have a good start.'), bukan fokus; (2) PAT-7-04 vs 'explaining causes' -> dipakai HANYA bentuk RESPONS pendek ('That's true.'/'I agree.') sebagai reaksi pendengar; sub-bentuk 'I think...because...' TIDAK dipakai sama sekali di TP ini; (3) PAT-7-01 ('I like...') sebagai lead-in personal singkat. Output WAJIB di CHANGE/INTERACT/SHARE tetap 'First,...Then,...Finally,...'; ketiga prereq hanya pelengkap 1 kalimat. Ekstensi opsional penanda urutan tambahan 'Next,' (menjaga head pattern sequencing, sekadar menambah langkah) ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Rise and shine, everyone! Let's start our morning." },
      { type: "AKSI", text: "Sapa siswa dengan semangat dan cek kesiapan kelas." },
      // HOOK
      { type: "UCAP", text: "What do you do first when you wake up in the morning?" },
      { type: "AKSI", text: "Tampilkan urutan gambar bernomor (1-2-3): anak bangun, sarapan, dan berjalan ke sekolah." },
      { type: "UCAP", text: "Look at this picture sequence. Does this morning routine look familiar to you?" },
    ],

    active_vocabulary: [
      "First,",
      "Then,",
      "Finally,",
      "wake up",
      "breakfast",
      "go to school",
      "morning routine",
      "early"
    ],

    model_sentences: [
      { id: "model_1", text: "I like my morning routine. It is important to have a good start." },
      { id: "model_2", text: "First, wake up early. Then, eat breakfast." },
      { id: "model_3", text: "Finally, go to school." },
      { id: "model_4", text: "That's true! I agree." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A numbered picture sequence (1-2-3) of a morning routine: a child waking up, eating breakfast, and walking to school.", description_id: "Urutan gambar bernomor (1-2-3) dari rutinitas pagi: anak bangun, sarapan, dan berjalan ke sekolah.", asset_id: null },
      { id: "visual_2", description: "Order-word cards with arrows: 'First,', 'Then,', 'Finally,' showing the sequence direction.", description_id: "Kartu kata urutan dengan tanda panah: 'First,', 'Then,', 'Finally,' yang menunjukkan arah urutan.", asset_id: null },
      { id: "visual_3", description: "Action icons: an alarm clock (wake up early), a breakfast plate, and a school bag.", description_id: "Ikon tindakan: jam alarm (bangun pagi), piring sarapan, dan tas sekolah.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher holds up one finger for 'First,', two fingers for 'Then,', and three fingers for 'Finally,' to show the order.", description_id: "Guru mengangkat satu jari untuk 'First,', dua jari untuk 'Then,', dan tiga jari untuk 'Finally,' untuk menunjukkan urutannya." },
      { id: "gesture_2", description: "Teacher mimes each action (stretching awake, eating, walking) while saying the imperative verb.", description_id: "Guru memperagakan setiap tindakan (menggeliat bangun, makan, berjalan) sambil mengucapkan kata kerja imperatifnya." },
      { id: "gesture_3", description: "Teacher nods with a thumbs-up while saying the short response 'That's true! / I agree.'", description_id: "Guru mengangguk dengan jempol ke atas sambil mengucapkan respons singkat 'That's true! / I agree.'" }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher sequence three morning actions with 'First, ... Then, ... Finally, ...', after a one-line personal lead-in and motivation, and hear a short listener response.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-08", "PAT-7-01", "PAT-7-04"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the ordered steps ('First, ... Then, ... Finally, ...') and the short response together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Sequence your own three morning actions using 'First, ... Then, ... Finally, ...'.",
      prompt: "Use the pattern 'First, [action]. Then, [action]. Finally, [action].' Replace the actions with your own morning steps (wake up, brush your teeth, eat breakfast, get dressed, go to school). Use present-tense action words, not past tense.",
      change_target: ["first action", "then action", "finally action"],
      differentiation: {
        easy: { task: "Put three picture cards in order and complete: 'First, ___. Then, ___. Finally, ___.'" },
        standard: { task: "Write your own three-step morning routine using 'First, ... Then, ... Finally, ...' with present-tense actions." },
        challenge: { task: "Write your three-step routine, and add a one-line lead-in and motivation before it: 'I like my morning routine. It is important to have a good start.' Keep the sequence as the main part." }
      },
      support: { pattern_support: ["PAT-7-08", "PAT-7-01"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Tell your morning routine in order to a partner and respond briefly to your partner's routine.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns telling your morning routine ('First, ... Then, ... Finally, ...'). After listening, respond with a short reaction ('That's true.' or 'I agree.').",
      differentiation: {
        easy: { task: "Tell your routine using your sentences from CHANGE (you may read). Your partner responds with a response card ('That's true.' or 'I agree.')." },
        standard: { task: "Tell your routine without reading. Your partner responds, then tells their own routine." },
        challenge: { task: "Add the one-line lead-in and motivation first, then your three-step routine. Your partner responds and tells their own." }
      },
      support: { pattern_support: ["PAT-7-08", "PAT-7-01", "PAT-7-04"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Retell your morning routine in order to a new group (ordered oral retelling).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns retelling your morning routine to the group using 'First, ... Then, ... Finally, ...'.",
      differentiation: {
        easy: { task: "Retell your three-step routine to the new group. You may read your sentences." },
        standard: { task: "Retell your routine to the group without reading." },
        challenge: { task: "Retell your routine with the one-line lead-in and motivation, then listen and respond to one classmate's routine with 'That's true.' or 'I agree.'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students sequence three actions in order using 'First, ... Then, ... Finally, ...'",
        "students use present-tense action words (imperatives), not past-tense forms",
        "students still leave out an order word, or slip into past tense ('I woke up', 'I ate')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add one more step with 'Next, ...'.",
        needs_model: "Repeat the MODEL step, emphasizing the order words 'First, ... Then, ... Finally, ...' with present-tense actions.",
        needs_repeat: "Do one more round of REPEAT (choral) on the ordered steps before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "leaves out an order word or puts the steps in the wrong order",
        "relies only on the written steps and cannot retell without reading",
        "sequences the three steps with 'First, ... Then, ... Finally, ...' accurately and confidently"
      ],
      action: [
        "recast the steps slowly, emphasizing 'First, ... Then, ... Finally, ...' and present-tense actions",
        "model one more three-step routine on a different topic (e.g. getting ready for bed) to show the same pattern still works",
        "for a student who is ready, model ONE four-step version first by adding 'Next, ...' between 'Then,' and 'Finally,' -- 'First, wake up. Then, eat breakfast. Next, pack your bag. Finally, go to school.' -- then invite that student to try it; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps present-tense actions, not past events"
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
