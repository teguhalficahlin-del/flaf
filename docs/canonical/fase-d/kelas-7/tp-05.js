const skenario = {
  "persiapan": {
    "papan_tulis": "It is (size/color).\nIt has (feature).\nIt looks (adjective).",
    "kartu": "Siapkan tiga kartu penampilan untuk It looks — hewan yang terlihat ramah, lucu, mengantuk.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan ikon ciri-ciri untuk It has — telinga panjang, telinga pendek, bulu lembut, ekor panjang, mata besar."
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
        "tipe": "UCAP",
        "teks": "Good morning, class! Find your seat and get ready."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu kelas tenang, sapa beberapa siswa dengan nada hangat."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Quick question. Does anyone here have a pet at home?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu beberapa siswa menjawab bebas — respons singkat: \"Oh, a cat! Nice.\""
      },
      {
        "tipe": "AKSI",
        "teks": "Tunjukkan keempat kartu bergambar hewan peliharaan kepada kelas satu per satu."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at these animals. Can you tell me something about them?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons dua atau tiga siswa. Jika tidak ada yang menjawab dalam lima detik — tunjuk kartu kelinci dan tanya \"Small or big?\" untuk memancing respons."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — letakkan kartu di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today let us learn how to describe an animal in English."
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
          "teks": "Angkat kartu bergambar kelinci — tunjuk ke seluruh tubuh kelinci."
        },
        {
          "tipe": "UCAP",
          "teks": "I have a pet rabbit. I like my pet. It is small and white."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk seluruh tubuh kelinci saat mengucapkan It is."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk bagian telinga panjang kelinci di kartu — lalu tunjuk bagian bulu."
        },
        {
          "tipe": "UCAP",
          "teks": "It has long ears and soft fur."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk fitur telinga dan bulu secara bergantian."
        },
        {
          "tipe": "AKSI",
          "teks": "Bingkai wajah dengan kedua tangan — tirukan ekspresi ramah."
        },
        {
          "tipe": "UCAP",
          "teks": "It looks friendly and cute."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kelinci."
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
              "teks": "Angkat kartu kelinci — tunjuk ke seluruh tubuh."
            },
            {
              "tipe": "UCAP",
              "teks": "It is small and white."
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
              "teks": "Tunjuk bagian telinga dan bulu kelinci di kartu."
            },
            {
              "tipe": "UCAP",
              "teks": "It has long ears and soft fur."
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
              "teks": "Bingkai wajah dengan kedua tangan — tirukan ekspresi ramah."
            },
            {
              "tipe": "UCAP",
              "teks": "It looks friendly and cute."
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
          "teks": "Letakkan kartu kelinci."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now write about your own animal."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk pola di papan tulis dan minta siswa menyalin di buku catatan sebelum melanjutkan. Beri waktu dua menit untuk menyalin."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa memilih satu kartu bergambar hewan dan menulis tiga kalimat deskripsi menggunakan pola dari papan tulis. Dikerjakan secara individual, ditulis di buku catatan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel keempat kartu bergambar hewan di papan tulis di sebelah pola. Tempel juga ikon ciri-ciri dan kartu penampilan."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Choose an animal card. Write about it using the pattern."
        },
        {
          "tipe": "UCAP",
          "teks": "It is blank. It has blank. It looks blank. Three sentences about your animal."
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
          "teks": "Jika siswa tidak tahu kata sifat yang ingin digunakan — tunjuk ikon ciri-ciri di papan tulis dan minta siswa pilih salah satu."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kartu kucing di papan tulis, dan ucapkan \"It is blank. Small or big?\" Tunggu siswa menulis satu kalimat, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Pilih satu kartu hewan dan lengkapi tiga kalimat: It is blank. It has blank. It looks blank. Gunakan kata dari ikon di papan tulis.",
        "standar": "Tulis tiga kalimat deskripsi tentang hewanmu: satu It is, satu It has, dan satu It looks.",
        "tantangan": "Tulis tiga kalimat deskripsi, dan tambahkan satu kalimat lead-in sebelumnya: I have a pet. I like my pet. Pertahankan tiga kalimat deskripsi It is, It has, It looks sebagai bagian utama."
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
          "teks": "Minta Siswa A memegang kartu hewannya dan membacakan tiga kalimat deskripsi ke Siswa B."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B merespons: I think it looks blank because it has blank."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B mendeskripsikan hewannya ke Siswa A."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Work with the person next to you."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk dua arah."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk kalimat pertama di buku catatan siswa dan minta siswa ucapkan \"It is\" diikuti kata sifat pertama."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan berbicara Bahasa Indonesia — tunjuk pola di papan tulis, ucapkan \"In English. Use this.\" Tunggu siswa mengulang dalam Bahasa Inggris sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa ucapkan deskripsinya sekali lagi tanpa melihat buku."
        }
      ],
      "diferensiasi": {
        "mudah": "Deskripsikan hewanmu menggunakan tiga kalimat dari buku catatan — boleh membaca. Pasangan merespons dengan kartu respons: I agree. Atau: That's true.",
        "standar": "Deskripsikan hewanmu tanpa membaca buku. Pasangan merespons dengan: I think it looks blank because it has blank.",
        "tantangan": "Mulai dengan lead-in terlebih dahulu, lalu deskripsikan. Pasangan memberi pendapat dengan alasan, dan kamu merespons dengan That's true."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Setiap pasangan bergabung dengan satu pasangan lain — bukan pasangan dari langkah INTERACT — membentuk kelompok empat orang untuk show and tell.",
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
          "teks": "Take turns. Hold up your animal card and describe it to the group."
        },
        {
          "tipe": "UCAP",
          "teks": "It is blank. It has blank. It looks blank. The group listens."
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
          "teks": "Berjalan antar kelompok — pastikan setiap siswa angkat kartu dan deskripsikan hewannya."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk kartu hewannya dan minta siswa ucapkan \"It is\" diikuti satu kata sifat saja. Kemudian bantu siswa melanjutkan."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa ucapkan deskripsinya sekali lagi tanpa melihat buku."
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
        "mudah": "Angkat kartumu dan ucapkan tiga kalimat deskripsi ke kelompok — boleh membaca.",
        "standar": "Angkat kartumu dan deskripsikan hewan tanpa membaca.",
        "tantangan": "Angkat kartumu dan deskripsikan hewan, lalu tanggapi deskripsi satu teman dengan I think it looks blank because blank. Atau: That's true."
      }
    },
    "check": {
      "durasi_menit": 4,
      "intro": "Guru mengamati selama langkah SHARE berlangsung — bukan setelah selesai. Setelah SHARE selesai, lakukan konfirmasi cepat ke dua siswa, lalu putuskan jalur berikutnya.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu kucing di papan tulis."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa secara acak."
        },
        {
          "tipe": "UCAP",
          "teks": "Describe this cat to me. Use It is, It has, It looks. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan minimal dua kalimat deskripsi."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan It is, It has, atau It looks? Bukan I am atau I like sebagai kalimat deskripsi utama?"
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kartu anjing — tunjuk siswa lain."
        },
        {
          "tipe": "UCAP",
          "teks": "Your It looks sentence. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa bisa membuat kalimat It looks dengan lancar?"
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
          "teks": "Angkat kembali kartu kelinci."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan tiga kalimat deskripsi sekali lagi — beri isyarat tangan ke arah siswa setiap kalimat."
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
          "teks": "Angkat kartu kelinci — tunjuk ke seluruh tubuh."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. It is small and white."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk telinga panjang di kartu."
        },
        {
          "tipe": "UCAP",
          "teks": "It has long ears."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan frasa per frasa."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil dua kalimat — bantu lanjut ke It looks dengan bingkai wajah."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Ambil kartu bergambar yang menunjukkan dua kelinci."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "They are small. They have soft fur."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now you try. Tell me about these two animals. Just two sentences."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Try with the dogs too.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang tiga kalimat deskripsi tanpa melihat buku, atau menulis deskripsi hewan kedua di buku catatan."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-05.js",
    pattern_id: "PAT-7-05",
    title: "My Pet: Describing Basic Characteristics",
    short_title: "Describing a Pet",
    grade: 7,
    genre: "Descriptive",
    cluster: "A",
    topic: "Pets",
    context: "Students introduce and describe their favorite pet or an animal from picture cards.",
    context_id: "Siswa memperkenalkan dan mendeskripsikan hewan peliharaan favorit mereka atau hewan dari kartu bergambar.",
    communicative_goal: "describe basic characteristics using simple adjectives and noun phrases",
    communicative_goal_id: "mendeskripsikan ciri-ciri dasar menggunakan kata sifat dan frasa benda sederhana",
    vocabulary_domain: ["animals", "colors", "size", "appearance"],
    input_anchor: "animal picture cards",
    output_anchor: "show and tell",
    prerequisite_patterns: ["PAT-7-01", "PAT-7-04"],
    reusable_in: ["PAT-8-05"],
    complexity_level: "Acquire",
    notes: "TP kelima Fase D dan TP DESCRIPTIVE PERTAMA. Fokus bergeser dari pertukaran interpersonal ke MENDESKRIPSIKAN entitas pihak ketiga dengan subjek 'It': target_pattern PAT-7-05 = 'It is / It has / It looks + adjective/noun phrase'. Ketiga bentuk ini adalah TARGET (bukan ekstensi), maka dimodelkan sejak MODEL. Catatan tension: forbidden_overlap PAT-7-05 (introducing self, expressing opinions, giving instructions) justru menyentuh kedua prerequisite-nya (PAT-7-01 = introducing self; PAT-7-04 = expressing opinions). Resolusi: keduanya muncul HANYA sebagai support singkat/transisi, bukan fokus aktivitas. PAT-7-01 = LEAD-IN satu baris sebelum deskripsi ('I have a pet rabbit. I like my pet. It is small and white.'); PAT-7-04 = RESPONS PENDENGAR yang reaktif terhadap deskripsi siswa lain ('I think it looks friendly because it has long ears. That's true!'), bukan opini yang dikembangkan sebagai topik baru. OUTPUT WAJIB setiap siswa di CHANGE/INTERACT/SHARE tetap deskripsi 'It is/has/looks...'; lead-in dan respons hanya pelengkap singkat. Ekstensi opsional 'They are.../They have...' (number-shift jamak di luar target 'It') ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2). Comparison ('bigger than') sengaja TIDAK disentuh -- itu wilayah PAT-7-06 (NS-12).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, class! Find your seat and get ready." },
      { type: "AKSI", text: "Tunggu kelas tenang, sapa beberapa siswa dengan nada hangat." },
      // HOOK
      { type: "UCAP", text: "Quick question — does anyone here have a pet at home?" },
      { type: "AKSI", text: "Biarkan beberapa siswa menjawab bebas. Respons singkat: 'Oh, a cat! Nice.'" },
      { type: "AKSI", text: "Tunjukkan kartu bergambar hewan peliharaan (kelinci, kucing, anjing, ikan) kepada kelas." },
      { type: "UCAP", text: "Look at these animals. Can you tell me something about them?" },
    ],

    active_vocabulary: [
      "It is",
      "It has",
      "It looks",
      "pet",
      "rabbit",
      "small",
      "white",
      "long ears",
      "soft fur",
      "friendly",
      "cute"
    ],

    model_sentences: [
      { id: "model_1", text: "I have a pet rabbit. I like my pet. It is small and white." },
      { id: "model_2", text: "It has long ears and soft fur." },
      { id: "model_3", text: "It looks friendly and cute." },
      { id: "model_4", text: "I think it looks friendly because it has long ears. That's true!" }
    ],

    visual_cues: [
      { id: "visual_1", description: "Animal picture cards showing different pets (a rabbit, a cat, a dog, a fish) with clear colors and sizes, for describing 'It is ...'.", description_id: "Kartu bergambar hewan yang menunjukkan berbagai hewan peliharaan (kelinci, kucing, anjing, ikan) dengan warna dan ukuran yang jelas, untuk mendeskripsikan 'It is ...'.", asset_id: null },
      { id: "visual_2", description: "Feature icons for 'It has ...': long ears, short ears, soft fur, a long tail, big eyes.", description_id: "Ikon ciri-ciri untuk 'It has ...': telinga panjang, telinga pendek, bulu lembut, ekor panjang, mata besar.", asset_id: null },
      { id: "visual_3", description: "Appearance cards for 'It looks ...': a friendly-looking animal, a cute animal, a sleepy animal.", description_id: "Kartu penampilan untuk 'It looks ...': hewan yang terlihat ramah, hewan yang lucu, hewan yang mengantuk.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher holds up a picture card and points to the whole animal while saying 'It is ...'.", description_id: "Guru mengangkat kartu bergambar dan menunjuk ke seluruh tubuh hewan sambil mengucapkan 'It is ...'." },
      { id: "gesture_2", description: "Teacher points to specific features (the ears, the fur) on the card while saying 'It has ...'.", description_id: "Guru menunjuk ciri-ciri tertentu (telinga, bulu) pada kartu sambil mengucapkan 'It has ...'." },
      { id: "gesture_3", description: "Teacher frames their own face with both hands and mimics the animal's expression while saying 'It looks ...'.", description_id: "Guru membingkai wajahnya dengan kedua tangan dan menirukan ekspresi hewan tersebut sambil mengucapkan 'It looks ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher describe an animal's basic characteristics using 'It is ...', 'It has ...', and 'It looks ...', after a one-line 'I have/I like' lead-in.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-01", "PAT-7-04"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the description sentences ('It is/has/looks ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Describe your own pet or an animal card by replacing the characteristics (color, size, features, look).",
      prompt: "Use the pattern 'It is [size/color]. It has [feature]. It looks [adjective].' Replace the words with the characteristics of your pet or an animal card (small/big, white/brown/black, long ears/soft fur, friendly/cute/sleepy).",
      change_target: ["size/color (It is ...)", "feature (It has ...)", "look (It looks ...)"],
      differentiation: {
        easy: { task: "Choose an animal card and complete: 'It is ___. It has ___. It looks ___.' using words from the cues." },
        standard: { task: "Write three sentences describing your animal: one 'It is ...', one 'It has ...', and one 'It looks ...'." },
        challenge: { task: "Write your three description sentences, and add a one-line lead-in before them: 'I have a pet. I like my pet.' Keep the description ('It is/has/looks ...') as the main part." }
      },
      support: { pattern_support: ["PAT-7-01"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Describe your animal to a partner and respond briefly to your partner's description.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns describing your animal ('It is ... It has ... It looks ...'). After listening, respond with a short opinion ('I think it looks ... because it has ...', 'That's true.', or 'I agree.').",
      differentiation: {
        easy: { task: "Describe your animal using your three sentences from CHANGE (you may read). Your partner responds with a response card ('I agree.' or 'That's true.')." },
        standard: { task: "Describe your animal without reading. Your partner responds with 'I think it looks ... because it has ...'." },
        challenge: { task: "Describe your animal with the one-line lead-in first, then your partner gives an opinion with a reason ('I think it looks ... because ...'), and you respond with 'That's true.'" }
      },
      support: { pattern_support: ["PAT-7-01", "PAT-7-04"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Show your animal card to a new group and describe it (show and tell).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns: hold up your animal card and describe it to the group ('It is ... It has ... It looks ...'). The group listens and may respond briefly.",
      differentiation: {
        easy: { task: "Show your card and say your three description sentences ('It is/has/looks ...'). You may read them." },
        standard: { task: "Show your card and describe it to the group without reading." },
        challenge: { task: "Show your card and describe it, then respond to one classmate's description with 'I think it looks ... because ...' or 'That's true.'" }
      },
      support: { pattern_support: ["PAT-7-04"] }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students describe an animal using 'It is ...', 'It has ...', and 'It looks ...'",
        "students use simple adjectives and noun phrases for color, size, and appearance",
        "students still describe with single words only, or slip back into 'I am / I like' instead of describing the animal with 'It ...'"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to try describing two animals with 'They are/They have ...'.",
        needs_model: "Repeat the MODEL step, emphasizing 'It is ...', 'It has ...', 'It looks ...' as full sentences.",
        needs_repeat: "Do one more round of REPEAT (choral) on the description sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "describes with single words only (e.g. 'small', 'brown') instead of full 'It is/has/looks' sentences",
        "relies only on the written description and cannot describe without reading it",
        "describes the animal with 'It is/has/looks' accurately and confidently"
      ],
      action: [
        "recast the description slowly as full sentences, modeling 'It is ...', 'It has ...', 'It looks ...'",
        "model one more description with a different animal card to show the same pattern still works",
        "for a student who is ready, model ONE plural description first -- for a card with two animals, 'They are small. They have soft fur.' -- then invite that student to try it once; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity"
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
