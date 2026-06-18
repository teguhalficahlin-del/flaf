const skenario = {
  "persiapan": {
    "papan_tulis": "Name: (value)\nClass: (value)    Number: (value)\nAddress: (value)\nMembership: (value)    Favorite Club: (value)",
    "kartu": "Siapkan kartu anggota dan tumpukan buku di meja sebagai konteks peminjaman perpustakaan.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan formulir keanggotaan perpustakaan kosong untuk setiap siswa — dengan kolom berlabel Name, Class, Number, Address, Membership, Favorite Club."
      },
      {
        "tipe": "AKSI",
        "teks": "Siapkan contoh formulir terisi yang menunjukkan format Label: value untuk setiap kolom."
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
        "teks": "Good morning! I have some paperwork for us today, in English."
      },
      {
        "tipe": "AKSI",
        "teks": "Bagi setiap siswa formulir kosong sebelum memulai."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Have you ever filled in a form before, maybe for a library, a competition, or a school event?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan formulir keanggotaan perpustakaan kosong."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this membership form. What information do you need to fill in?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa. Jika tidak ada yang menjawab dalam lima detik — tunjuk kolom Name dan tanya \"What goes here?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — biarkan formulir tetap terlihat."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today we learn how to fill in a simple form in English."
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
          "teks": "Tunjuk kolom Name di formulir — peragakan menulis di ruang kosong."
        },
        {
          "tipe": "UCAP",
          "teks": "Name: Andi Saputra."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk label Name, lalu nilai yang diisi. Angguk."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kolom Class, lalu kolom Number."
        },
        {
          "tipe": "UCAP",
          "teks": "Class: 7A. Number: 12."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan menulis nilai di setiap ruang kosong."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kolom Address."
        },
        {
          "tipe": "UCAP",
          "teks": "Address: Jalan Melati No. 5."
        },
        {
          "tipe": "AKSI",
          "teks": "Peragakan menulis nilai."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kolom Membership, lalu Favorite Club."
        },
        {
          "tipe": "UCAP",
          "teks": "Membership: New Member. Favorite Club: Science Club."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk contoh formulir terisi — tunjuk setiap label dan nilainya secara bergantian."
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
      "intro": "Guru membacakan satu field formulir — siswa menirukan bersama. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Field 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk kolom Name di formulir."
            },
            {
              "tipe": "UCAP",
              "teks": "Name: Andi Saputra."
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
          "label": "Field 2",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk kolom Class dan Number."
            },
            {
              "tipe": "UCAP",
              "teks": "Class: 7A. Number: 12."
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
          "label": "Field 3",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk kolom Favorite Club."
            },
            {
              "tipe": "UCAP",
              "teks": "Favorite Club: Science Club."
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
          "teks": "Good. Now fill in your own form."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tunjuk contoh formulir terisi dan minta siswa baca bersama setiap label: Name: blank. Class: blank. Number: blank."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa mengisi formulir keanggotaan perpustakaan mereka sendiri. Dikerjakan secara individual pada formulir yang sudah dibagikan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk formulir di tangan setiap siswa."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk contoh formulir terisi di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Fill in your own form. Write Label: then your value. Name: then your name. Class: then your class."
        },
        {
          "tipe": "UCAP",
          "teks": "Do not write I am or My name is. Just the label and the value. Like the example."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "You have five minutes. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu lima menit untuk mengisi formulir."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — perhatikan siswa yang menulis kalimat penuh seperti My name is blank, dan ingatkan: \"Just the label and value. Name: blank. Not: My name is blank.\""
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
          "teks": "Jika siswa bingung kolom mana yang menggunakan format label-titik-dua-nilai — tunjuk contoh formulir terisi dan arahkan jari siswa ke setiap label dan nilai."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk kolom Name, dan ucapkan \"Name: blank. Write your name here.\" Tunggu siswa menulis, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Lengkapi tiga kolom: Name: blank, Class: blank, Number: blank.",
        "standar": "Lengkapi seluruh formulir: Name, Class, Number, Address, Membership, Favorite Club.",
        "tantangan": "Lengkapi seluruh formulir dan tambahkan satu kalimat pendapat: My favorite club is blank because blank."
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
          "teks": "Minta Siswa A dan B menukar formulir mereka."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa A membacakan kolom-kolom formulir Siswa B: Name: blank. Class: blank. Favorite Club: blank."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B mendengarkan dan memeriksa apakah semua kolom terisi."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya tukar kembali dan berganti peran."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Swap forms. Read your partner's fields aloud. Check that each field has a value. Work with the person next to you."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk bertukar dan membacakan formulir dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati apakah siswa membacakan label dan nilai dalam format Label: value."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk kolom Name di formulir pasangan dan ucapkan \"Read this. Name: blank. What is their name?\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa membacakan kolom sebagai kalimat penuh — tunjuk label di formulir: \"Just the label and value. Name: blank. Short.\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai lebih cepat — minta siswa periksa semua kolom pasangan dan tunjuk kolom yang masih kosong."
        }
      ],
      "diferensiasi": {
        "mudah": "Bacakan tiga kolom formulir pasangan dengan keras: Name: blank, Class: blank, Number: blank.",
        "standar": "Bacakan semua kolom formulir pasangan dengan keras, lalu sebutkan satu fakta dari formulir tersebut — misalnya klub favorit pasangan.",
        "tantangan": "Bacakan seluruh formulir pasangan, dan periksa tidak ada kolom yang kosong."
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
          "teks": "Take turns. Present a completed form to the new group by reading its fields: Label: value."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa di tiap kelompok sebagai pembicara pertama."
        },
        {
          "tipe": "UCAP",
          "teks": "The person I point to reads first."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk semua anggota mempresentasikan formulir."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — dengarkan apakah label dibacakan dengan nilai yang benar dalam format Label: value."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk kolom Name di formulirnya dan minta siswa bacakan: Name: blank."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa membacakan nilai tanpa label — tunjuk label di formulir: \"Say the label too. Name: blank. Not just the name.\""
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
        "mudah": "Bacakan tiga kolom formulir terisi ke kelompok baru.",
        "standar": "Bacakan semua kolom formulir terisi ke kelompok.",
        "tantangan": "Bacakan seluruh formulir, dan jawab satu pertanyaan dari kelompok tentang salah satu kolom."
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
          "teks": "Read me three fields from your form. Label: value. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa membacakan tiga kolom."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa menggunakan format Label: value tanpa menulis kalimat penuh atau perkenalan diri?"
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
          "teks": "Your Favorite Club field. Without looking at your form."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa bisa menyebutkan nilai kolom dalam format label dengan lancar?"
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
          "teks": "Angkat kembali contoh formulir terisi."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Ucapkan tiga kolom sekali lagi dalam format Label: value — beri isyarat tangan ke arah siswa setiap kolom."
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
          "teks": "Tunjuk kolom Name di formulir siswa."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Name: blank. Read it like this."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan format Label: value."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kolom Class."
        },
        {
          "tipe": "UCAP",
          "teks": "Class: blank. Read this one."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa membacakan — tekankan bahwa label dibaca bersama nilai, bukan diubah menjadi kalimat."
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
          "teks": "Email: andi@email.com."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "One more field. Same format: Label: value. Now you try. Add one more field to your form. Just one."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Label: value. That is the format.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka membacakan kembali semua kolom formulir mereka tanpa melihat buku, atau menambahkan satu kolom baru dalam format yang sama."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-19.js",
    pattern_id: "PAT-7-19",
    title: "Library Membership: Completing Forms",
    short_title: "Library Form",
    grade: 7,
    genre: "Functional",
    cluster: "B",
    topic: "Library Membership",
    context: "Students complete and exchange simple membership forms before borrowing books.",
    context_id: "Siswa mengisi dan menukar formulir keanggotaan sederhana sebelum meminjam buku.",
    communicative_goal: "fill in and understand basic personal information forms",
    communicative_goal_id: "mengisi dan memahami formulir informasi pribadi dasar",
    vocabulary_domain: ["name", "address", "class", "membership"],
    input_anchor: "membership form",
    output_anchor: "completed form",
    prerequisite_patterns: ["PAT-7-18"],
    reusable_in: ["PAT-8-21", "PAT-8-24"],
    complexity_level: "Acquire",
    notes: "TP kesembilan belas Fase D, Functional. target_pattern PAT-7-19 = 'Name: ... / Class: ... / Number: ... / Choice: ...' -- FORMAT FORMULIR 'Label: [isi]' (lanjutan register fragmen dari PAT-7-18). DISTINGSI PENTING dari forbidden_overlap 'self-introduction': ini FORMAT FIELD FORMULIR ('Name: [X]'), BUKAN kalimat personal 'I am [X]' / 'My name is [X]' (PAT-7-01). JANGAN paragraf deskriptif, JANGAN tulisan naratif. PAT-7-18 ('Time/Date+event+place') sebagai support: satu field formulir yang memuat info jadwal ('Visit Time: Monday, 3 p.m.'). vocabulary_domain (name, address, class, membership) muncul di bahasa target sebagai label field. 'Choice:' direalisasikan via field pilihan konkret ('Favorite Club:'). Ekstensi opsional menambah satu field relevan ('Email: ...') dengan format 'Label: [isi]' yang sama -- menjaga head format formulir, bukan kalimat perkenalan -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning! I have some paperwork for us today — in English." },
      { type: "AKSI", text: "Bagi setiap siswa formulir kosong atau gambar formulir sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "Have you ever filled in a form before — maybe for a library, a competition, or a school event?" },
      { type: "AKSI", text: "Tampilkan formulir keanggotaan perpustakaan kosong dengan kolom berlabel: Name, Class, Address." },
      { type: "UCAP", text: "Look at this membership form. What information do you need to fill in?" },
    ],

    active_vocabulary: [
      "Name:",
      "Class:",
      "Number:",
      "Address:",
      "Membership:",
      "Favorite Club:"
    ],

    model_sentences: [
      { id: "model_1", text: "Name: Andi Saputra" },
      { id: "model_2", text: "Class: 7A. Number: 12" },
      { id: "model_3", text: "Address: Jalan Melati No. 5" },
      { id: "model_4", text: "Membership: New Member. Favorite Club: Science Club. Visit Time: Monday, 3 p.m." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A blank library membership form with labeled fields: Name, Class, Number, Address, Membership, Favorite Club.", description_id: "Formulir keanggotaan perpustakaan kosong dengan kolom berlabel: Name, Class, Number, Address, Membership, Favorite Club.", asset_id: null },
      { id: "visual_2", description: "A sample completed form showing the 'Label: value' format for each field.", description_id: "Contoh formulir terisi yang menunjukkan format 'Label: value' untuk setiap kolom.", asset_id: null },
      { id: "visual_3", description: "A library borrowing context: a membership card and a stack of books at the desk.", description_id: "Konteks peminjaman perpustakaan: kartu anggota dan tumpukan buku di meja.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to each form label in turn while reading 'Name: ... Class: ... Number: ...'.", description_id: "Guru menunjuk setiap label formulir secara bergantian sambil membaca 'Name: ... Class: ... Number: ...'." },
      { id: "gesture_2", description: "Teacher mimes writing the value in the blank space after a label.", description_id: "Guru memperagakan menulis nilai di ruang kosong setelah sebuah label." },
      { id: "gesture_3", description: "Teacher points to the field that carries schedule information ('Visit Time: Monday, 3 p.m.').", description_id: "Guru menunjuk kolom yang membawa informasi jadwal ('Visit Time: Monday, 3 p.m.')." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher complete a library membership form in 'Label: value' format, including one field that carries schedule information.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-18"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice reading the form fields ('Name: ... / Class: ... / ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Fill in your own membership form by completing each field in 'Label: value' format.",
      prompt: "Complete each field as 'Label: value', e.g. 'Name: ___', 'Class: ___', 'Number: ___', 'Favorite Club: ___'. Write only the field and its value -- do not write 'I am ...' or full sentences.",
      change_target: ["field values (Name / Class / Number / Address / Membership / Favorite Club)"],
      differentiation: {
        easy: { task: "Complete three fields: 'Name: ___ Class: ___ Number: ___.'" },
        standard: { task: "Complete the whole form: Name, Class, Number, Address, Membership, Favorite Club." },
        challenge: { task: "Complete the form and add a field that carries schedule information: 'Visit Time: [day], [time].'" }
      },
      support: { pattern_support: ["PAT-7-18"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Exchange forms with a partner and read each other's information.",
      interaction_mode: "pair",
      task: "Find a partner. Swap your completed forms. Take turns reading your partner's fields aloud ('Name: ... Class: ... Favorite Club: ...'). Check that each field has a value.",
      differentiation: {
        easy: { task: "Read three of your partner's fields aloud ('Name: ... Class: ... Number: ...')." },
        standard: { task: "Read all of your partner's fields aloud, then tell the group one fact from the form (e.g. their favorite club)." },
        challenge: { task: "Read your partner's full form, including the schedule field, and check no field is empty." }
      },
      support: { pattern_support: ["PAT-7-18"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present a completed form to a new group (completed form).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting a completed form by reading its fields ('Label: value'). The group checks that all the fields are filled in.",
      differentiation: {
        easy: { task: "Read three fields of a completed form to the new group." },
        standard: { task: "Read all the fields of a completed form to the group." },
        challenge: { task: "Read the full form including the schedule field, and answer one question from the group about a field." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students complete each field in 'Label: value' format",
        "students keep it as form fields, not as 'I am ...' / 'My name is ...' sentences or a descriptive paragraph",
        "students still rewrite the fields as full self-introduction sentences"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add one more relevant field in the same format.",
        needs_model: "Repeat the MODEL step, emphasizing the 'Label: value' format of each field.",
        needs_repeat: "Do one more round of REPEAT (choral) reading the form fields before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "rewrites a field as a full sentence ('I am ...', 'My name is ...') or a paragraph",
        "relies only on the written form and cannot read the fields without reading word-by-word",
        "completes and reads form fields in 'Label: value' format accurately and confidently"
      ],
      action: [
        "recast the field slowly, modeling 'Label: value' (e.g. 'Name: ...') instead of a full sentence",
        "model one more form field to show the same format still works",
        "for a student who is ready, model ONE extra relevant field first -- 'Email: andi@email.com' -- then invite that student to add one field of their own; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the 'Label: value' form format, not a self-introduction sentence"
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
