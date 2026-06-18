const skenario = {
  "persiapan": {
    "papan_tulis": "(Day), (time) (Event) in (place).\n(Date), (Event) on (place).",
    "kartu": "Siapkan kartu potongan jadwal dalam format Day, Time + Event + Place sebagai label singkat.",
    "instruksi": [
      {
        "tipe": "AKSI",
        "teks": "Siapkan kalender acara atau kisi-kisi jadwal klub di meja guru — dengan hari, waktu, dan ruangan untuk setiap entri."
      },
      {
        "tipe": "AKSI",
        "teks": "Siapkan ikon untuk tiga bagian — jam untuk waktu a.m. atau p.m., halaman kalender untuk tanggal, dan tanda ruangan atau lapangan untuk lokasi."
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
        "teks": "Hello, class! Let's check the clock, are we ready to begin?"
      },
      {
        "tipe": "AKSI",
        "teks": "Pastikan siswa duduk dan fokus ke depan."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "Do you know when your school clubs meet? Which day and what time?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kalender acara jadwal klub."
      },
      {
        "tipe": "UCAP",
        "teks": "Look at this club schedule. What information can you find here?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons beberapa siswa. Jika tidak ada yang menjawab dalam lima detik — tunjuk satu entri jadwal dan tanya \"What day? What time? Which club?\""
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — letakkan kalender di tempat terlihat."
      },
      {
        "tipe": "UCAP",
        "teks": "Good. Today we learn how to read and make a simple schedule."
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
          "teks": "Tunjuk hari dan waktu di kalender — tepuk bagian waktu."
        },
        {
          "tipe": "UCAP",
          "teks": "Monday, 8 a.m. English Club in Room 3."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk nama acara — lalu tunjuk lokasi. Tepuk setiap bagian secara bergantian: waktu, acara, tempat."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk hari dan waktu berikutnya di kalender."
        },
        {
          "tipe": "UCAP",
          "teks": "Friday, 2 p.m. Art Club in the hall."
        },
        {
          "tipe": "AKSI",
          "teks": "Tepuk setiap bagian: waktu, acara, tempat."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk tanggal di kalender."
        },
        {
          "tipe": "UCAP",
          "teks": "July 10, Sports Day in the school field."
        },
        {
          "tipe": "AKSI",
          "teks": "Tepuk setiap bagian: tanggal, acara, tempat."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk entri keempat di kalender."
        },
        {
          "tipe": "UCAP",
          "teks": "Wednesday, 3 p.m. Music Club in Room 5."
        },
        {
          "tipe": "AKSI",
          "teks": "Tepuk setiap bagian: waktu, acara, tempat."
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
      "intro": "Guru membacakan satu entri jadwal — siswa menirukan bersama. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Entri 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk entri Monday di kalender — tepuk setiap bagian."
            },
            {
              "tipe": "UCAP",
              "teks": "Monday, 8 a.m. English Club in Room 3."
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
          "label": "Entri 2",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk entri Friday di kalender — tepuk setiap bagian."
            },
            {
              "tipe": "UCAP",
              "teks": "Friday, 2 p.m. Art Club in the hall."
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
          "label": "Entri 3",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tunjuk tanggal July 10 di kalender — tepuk setiap bagian."
            },
            {
              "tipe": "UCAP",
              "teks": "July 10, Sports Day in the school field."
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
          "teks": "Good. Now make your own schedule entries."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tepuk tiga ikon secara bergantian dan minta siswa baca bersama: Day, time, blank event in blank place."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa membuat entri jadwal klub mereka sendiri. Dikerjakan secara individual, ditulis di buku catatan.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempel kalender acara dan kartu potongan jadwal di papan tulis di sebelah pola."
        },
        {
          "tipe": "AKSI",
          "teks": "Tempel ikon waktu, acara, dan tempat di papan tulis."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Make your own schedule entries. Use the format: Day, time, club in place."
        },
        {
          "tipe": "UCAP",
          "teks": "Short labels only. Not a full sentence. Not a past story. Not There is. Just the three parts: time, event, place."
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
          "teks": "Berjalan keliling kelas — perhatikan siswa yang menulis kalimat penuh seperti The English Club meets on Monday, dan ingatkan: \"Short. Day, time, club in place. Like a schedule.\""
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
          "teks": "Jika siswa tidak tahu klub mana yang ingin ditulis — tunjuk kalender acara dan minta siswa pilih satu klub dari kalender, lalu bantu: \"Monday, 8 a.m. blank Club in blank.\""
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk ikon jam, dan ucapkan \"Monday, 8 a.m. blank Club in blank. Choose a club.\" Tunggu siswa menjawab dan menulis satu entri, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Lengkapi satu entri jadwal: blank Day, blank a.m./p.m. blank Club in blank.",
        "standar": "Tulis dua entri jadwal dalam format potongan (hari atau tanggal, waktu, acara, tempat).",
        "tantangan": "Buat kartu jadwal kecil dengan dua atau tiga entri, dan tambahkan satu pengingat sopan: Please arrive on time."
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
          "teks": "Minta Siswa A membacakan satu entri jadwalnya: Monday, 8 a.m. English Club in Room 3."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B menunjuk hari, waktu, dan tempat yang sesuai di kalender."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya tukar peran."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "That is it. Read one entry. Your partner points to the day, time, and place. Then swap. Work with the person next to you."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk bertukar entri jadwal dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati apakah entri memiliki tiga bagian: waktu atau tanggal, acara, dan tempat."
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
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tepuk tiga ikon secara bergantian ke arah pasangan dan tanya \"Day? Time? Club? Where?\" Tunggu siswa mulai membacakan satu entri."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa membacakan kalimat penuh atau cerita masa lalu — tepuk tiga ikon dan ucapkan \"Short. Day, time, club in place. Like a schedule.\""
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai lebih cepat — minta siswa periksa apakah entri pasangan memiliki ketiga bagian."
        }
      ],
      "diferensiasi": {
        "mudah": "Bacakan satu entri jadwal. Pasangan tunjuk hari, waktu, dan tempat di kalender. Lalu tukar.",
        "standar": "Bacakan dua entri tanpa membaca kata per kata. Pasangan catat waktu dan tempat setiap entri. Lalu tukar.",
        "tantangan": "Bacakan seluruh kartu jadwal. Pasangan periksa setiap entri memiliki tiga bagian. Lalu tukar."
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
          "teks": "Take turns. Present your schedule card to the new group. Read each entry: Day, time, club in place."
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
          "teks": "Beri waktu enam menit untuk semua anggota mempresentasikan kartu jadwal mereka."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — dengarkan apakah setiap entri memiliki tiga bagian dan tetap dalam format potongan jadwal."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tepuk tiga ikon ke arahnya dan tanya \"Day? Time? Club? Where?\" Minta siswa membacakan satu entri dari catatannya."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa membacakan entri tanpa menyebutkan tempat — tepuk ikon lokasi dan tanya \"Where? Room? Hall? Field?\""
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
        "mudah": "Presentasikan satu atau dua entri jadwal ke kelompok baru — boleh membaca.",
        "standar": "Presentasikan kartu jadwal (dua atau tiga entri) tanpa membaca kata per kata.",
        "tantangan": "Presentasikan kartu jadwal dengan pengingat sopan, dan periksa satu kartu teman memiliki ketiga bagian di setiap entri."
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
          "teks": "Give me one schedule entry. Day, time, club, and place. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan entri."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah entri memiliki ketiga bagian? Apakah dalam format potongan jadwal, bukan kalimat penuh atau cerita masa lalu?"
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
          "teks": "Your second entry. Without looking at your book."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa bisa membacakan entri jadwal dengan lancar tanpa membaca kata per kata?"
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
          "teks": "Angkat kembali kartu potongan jadwal."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Tepuk tiga ikon secara bergantian — ucapkan dua entri sekali lagi — beri isyarat tangan ke arah siswa setiap entri."
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
          "teks": "Tepuk tiga ikon secara bergantian: waktu, acara, tempat."
        },
        {
          "tipe": "UCAP",
          "teks": "Listen. Monday, 8 a.m. English Club in Room 3."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa menirukan."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk kalender di entri yang berbeda."
        },
        {
          "tipe": "UCAP",
          "teks": "Now your turn. Blank, blank a.m. blank Club in blank. Read this one."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa membacakan entri dari kalender."
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
          "teks": "Monday, 8-9 a.m. English Club in Room 3."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "A time range. Now you try. Give me one entry with a time range. Just one."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"Good. Try with a different club.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka mengulang dua entri jadwal tanpa membaca, atau membuat satu entri baru untuk klub berbeda."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-18.js",
    pattern_id: "PAT-7-18",
    title: "Club Events: Reading Schedules",
    short_title: "Club Events",
    grade: 7,
    genre: "Functional",
    cluster: "A",
    topic: "School Club Schedule",
    context: "Students read and create simple schedules for different extracurricular activities.",
    context_id: "Siswa membaca dan membuat jadwal sederhana untuk berbagai kegiatan ekstrakurikuler.",
    communicative_goal: "share event information using time, date, and place expressions",
    communicative_goal_id: "membagikan informasi acara menggunakan ungkapan waktu, tanggal, dan tempat",
    vocabulary_domain: ["calendar", "club", "time", "location"],
    input_anchor: "event calendar",
    output_anchor: "schedule card",
    prerequisite_patterns: ["PAT-7-17"],
    reusable_in: ["PAT-8-21", "PAT-8-23"],
    complexity_level: "Acquire",
    notes: "TP kedelapan belas Fase D, Functional. target_pattern PAT-7-18 = 'Time/Date + event + place'. FORMAT FRAGMEN: ini adalah fragmen TANPA subjek/verba utama (mis. 'Monday, 8 a.m. English Club in Room 3.' -- BUKAN 'The English Club meets on Monday...'). Ini FITUR REGISTER OTENTIK teks jadwal/pengumuman (seperti jadwal bus atau poster acara), BUKAN kesalahan grammar; dijelaskan di CHECK. Distingsi dari pattern berpermukaan mirip: (a) BUKAN recount 'Yesterday,/Last...,... + past event' (PAT-7-13, past tense naratif) -- PAT-7-18 adalah jadwal kini/akan datang ('Monday, 8 a.m. ...', bukan 'Last Monday, ...'); (b) BUKAN 'There is/are ... [place]' (PAT-7-07, eksistensial) -- fragmen event+place tanpa 'There is/are'; (c) BUKAN 'First,/Then,/Finally,' (PAT-7-09, procedural). PAT-7-17 ('Please.../Please don't...') sebagai support: satu pesan sopan pendamping jadwal ('Please arrive on time.'). vocabulary_domain (calendar, club, time, location) muncul di bahasa target: hari/tanggal (Monday/Friday/July 10 = calendar), club, a.m./p.m. (time), Room/hall/field (location). Ekstensi opsional menambah rentang waktu pada satu entri ('Monday, 8-9 a.m. English Club in Room 3.') -- menjaga head fragmen jadwal -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Hello, class! Let's check the clock — are we ready to begin?" },
      { type: "AKSI", text: "Pastikan siswa duduk dan fokus ke depan." },
      // HOOK
      { type: "UCAP", text: "Do you know when your school clubs meet? Which day and what time?" },
      { type: "AKSI", text: "Tampilkan kalender acara atau kisi-kisi jadwal klub dengan hari, waktu, dan ruangan." },
      { type: "UCAP", text: "Look at this club schedule. What information can you find here?" },
    ],

    active_vocabulary: [
      "Monday",
      "Friday",
      "a.m.",
      "p.m.",
      "club",
      "Room",
      "hall",
      "field"
    ],

    model_sentences: [
      { id: "model_1", text: "Monday, 8 a.m. English Club in Room 3." },
      { id: "model_2", text: "Friday, 2 p.m. Art Club in the hall." },
      { id: "model_3", text: "July 10, Sports Day on the school field." },
      { id: "model_4", text: "Please arrive on time. Wednesday, 3 p.m. Music Club in Room 5." }
    ],

    visual_cues: [
      { id: "visual_1", description: "An event calendar / timetable grid showing club activities with day, time, and room for each entry.", description_id: "Kalender acara / kisi-kisi jadwal yang menunjukkan kegiatan klub dengan hari, waktu, dan ruangan untuk setiap entri.", asset_id: null },
      { id: "visual_2", description: "Schedule fragment cards in 'Day, Time + Event + Place' format (short labels, not full sentences).", description_id: "Kartu potongan jadwal dalam format 'Day, Time + Event + Place' (label singkat, bukan kalimat lengkap).", asset_id: null },
      { id: "visual_3", description: "Icons for the three chunks: a clock (time, a.m./p.m.), a calendar page (date), and a room/hall/field sign (location).", description_id: "Ikon untuk tiga bagian: jam (waktu, a.m./p.m.), halaman kalender (tanggal), dan tanda ruangan/aula/lapangan (lokasi).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to a day and time on the calendar while reading the time/date chunk.", description_id: "Guru menunjuk hari dan waktu di kalender sambil membaca bagian waktu/tanggalnya." },
      { id: "gesture_2", description: "Teacher points to the event name, then to the place, showing the two remaining chunks.", description_id: "Guru menunjuk nama acara, lalu ke tempatnya, menunjukkan dua bagian yang tersisa." },
      { id: "gesture_3", description: "Teacher taps each chunk in turn (time, event, place) to show the schedule fragment format, not a full sentence.", description_id: "Guru menepuk setiap bagian secara bergantian (waktu, acara, tempat) untuk menunjukkan format potongan jadwal, bukan kalimat lengkap." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher read club schedule entries in the 'Time/Date + event + place' fragment format used on real schedules and notices.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-17"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice reading the schedule entries ('Time/Date + event + place') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Make your own schedule entries by replacing the time/date, event, and place.",
      prompt: "Use the schedule format 'Time/Date + event + place', e.g. '[Day], [time] [Club] in [place].' Replace the words with club activities from the calendar (club names, a.m./p.m., Room/hall/field). Keep it as a short schedule fragment -- do not write a full sentence or a past story.",
      change_target: ["time/date", "event", "place"],
      differentiation: {
        easy: { task: "Complete one schedule entry: '[Day], [time] ___ Club in ___.'" },
        standard: { task: "Write two schedule entries in fragment format (day/time + event + place)." },
        challenge: { task: "Make a small schedule card with two or three entries, and add a polite reminder ('Please arrive on time.')." }
      },
      support: { pattern_support: ["PAT-7-17"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Read and check schedule entries with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: read one of your schedule entries ('Time/Date + event + place'), and your partner points to (or writes) the matching day, time, and place. Then swap.",
      differentiation: {
        easy: { task: "Read one schedule entry; your partner points to the day, time, and place on the calendar. Then swap." },
        standard: { task: "Read two entries without reading word-by-word; your partner notes the time and place of each. Then swap." },
        challenge: { task: "Read your whole schedule card, and your partner checks every entry has a time/date, an event, and a place. Then swap." }
      },
      support: { pattern_support: ["PAT-7-17"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your schedule card to a new group (schedule card).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting your schedule card, reading each entry as 'Time/Date + event + place'.",
      differentiation: {
        easy: { task: "Present one or two schedule entries to the new group. You may read them." },
        standard: { task: "Present your schedule card (two or three entries) without reading word-by-word." },
        challenge: { task: "Present your schedule card with a polite reminder, and check a classmate's card has all three chunks in each entry." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students write schedule entries with all three chunks: time/date + event + place",
        "students use the short fragment format on purpose (this is the authentic register of schedules and notices, not a grammar error)",
        "students still turn the entry into a past recount ('Last Monday, ...'), a 'There is ...' description, or a 'First,/Then,' procedure"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a time range to one entry.",
        needs_model: "Repeat the MODEL step, emphasizing the three chunks (time/date + event + place) in fragment format.",
        needs_repeat: "Do one more round of REPEAT (choral) on the schedule entries before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "leaves out a chunk (time/date, event, or place), or rewrites the entry as a full past/descriptive sentence",
        "relies only on the written entries and cannot read the schedule without reading word-by-word",
        "writes schedule entries with all three chunks in fragment format accurately and confidently"
      ],
      action: [
        "recast the entry slowly, pointing to each chunk: time/date, event, place",
        "model one more schedule entry for a different club to show the same format still works",
        "for a student who is ready, model ONE entry with a time range first -- 'Monday, 8-9 a.m. English Club in Room 3.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the schedule fragment format, not a sentence, story, or description"
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
