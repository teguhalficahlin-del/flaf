/**
 * =============================================================
 * FLAF — TP 1 (Greetings & Farewells)
 * File: tp-01-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp01-v2.txt
 * Generated: 2026-05-25
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_01 = {

  id       : 'tp-01',
  pdf_ref  : 'Modul_Ajar_V3_TP01_Greetings_And_Farewells.docx',
  nomor    : 1,
  kelas    : 1,
  nama     : 'Greetings & Farewells',
  tema     : 'Interaksi Sosial Dasar',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat mengucapkan salam (hello, good morning, good afternoon, good evening) dan perpisahan (goodbye, bye, see you) dengan benar sesuai waktu.',
    'Peserta didik dapat merespons salam dan perpisahan dari guru atau teman dengan ekspresi dan gestur yang tepat.',
    'Peserta didik dapat menggunakan salam dan perpisahan secara spontan dalam rutinitas kelas sehari-hari.',
  ],
  vocab    : ['hello', 'hi', 'goodbye', 'bye', 'see you', 'good morning',
              'good afternoon', 'good evening', 'good night'],
  persiapan: ['Kartu salam bergambar 8 waktu dan salam'],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp01-afternoon.png',      label: 'Afternoon' },
    { file: 'tp01-evening.png',        label: 'Evening' },
    { file: 'tp01-good-afternoon.png', label: 'Good Afternoon' },
    { file: 'tp01-good-evening.png',   label: 'Good Evening' },
    { file: 'tp01-good-morning.png',   label: 'Good Morning' },
    { file: 'tp01-good-night.png',     label: 'Good Night' },
    { file: 'tp01-morning.png',        label: 'Morning' },
    { file: 'tp01-night.png',          label: 'Night' },
  ],

  checklist: [
    'Kartu salam x4 tersedia sebelum kelas masuk (pagi/siang/sore/malam)',
    'Kartu waktu x4 tersedia sebelum kelas masuk',
    'Boneka tangan Kiki dan Momo tersedia sebelum kelas masuk',
    'Layar 0 dilakukan sebelum kelas resmi dimulai — saat siswa masuk satu per satu',
    'Boneka Kiki ada di tangan saat door greeting (Layar 0)',
    'Kiki dilambaikan ke setiap siswa yang masuk (Layar 0)',
    'Demo boneka Kiki & Momo dilakukan hanya sekali (Layar 1)',
    'Tidak ada jeda antara ucap "Say it with me!" dan respons kelas (Layar 2)',
    'Condongkan badan + alis naik setelah "Now — what time is this?" — tunggu (Layar 3)',
    'Gerakkan tangan seperti orang tidur saat ucap "good night" (Layar 4)',
    'Tunjuk telinga + mata sebelum demo chant — siswa dengar dan lihat dulu (Layar 6)',
    'Demo chant dilakukan sambil duduk, satu putaran penuh (Layar 6)',
    'Pertahankan siswa tetap duduk selama chant bersama (Layar 7)',
    'Reset kelas dengan tangan naik sebelum penjelasan game (Layar 8)',
    'Jika waktu ≤10 menit saat masuk Layar 8: lewati game, lanjut ke Layar 11',
    'Game dibatasi 5–6 putaran saja — stop sebelum energi turun (Layar 9)',
    'Tunjuk ke luar jendela arah rumah saat membuka konteks Real Life (Layar 10)',
    'Gerakkan tangan melambai pergi saat tanya "And when you leave?" (Layar 11)',
    'Demo penutup boneka hanya sekali — langsung pindah ke bersama (Layar 16)',
    'Kumpulkan kartu waktu + kartu salam setelah sesi selesai',
    'Simpan Kiki dan Momo setelah sesi selesai',
    'Catat siswa yang diam sepanjang sesi',
    'Catat siswa yang salah greeting berulang',
    'Catat siswa yang masih butuh kartu terus',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 🟡',
    'L3 🟡',
    'L4 🟡',
    'L5 🟠',
    'L6 🟠',
    'L7 🔴',
    'L8 ⚪',
    'L9 🔴',
    'L10 🟡',
    'L11 🟡',
    'L12 🟡',
    'L13 🟡',
    'L14 🟡',
    'L15 🔵',
    'L16 🔵',
    'L17 🔵',
  ],

  catatan: {
    risiko: [
      'L1 Demo Boneka — satu demo saja, jangan ulang terlalu lama',
      'L7 Chant Bersama — berhenti saat energi masih tinggi',
      'L9 Game — disiplin putaran, jangan teruskan sampai energi turun',
      'L13 Diferensiasi — prioritas: semua ikut → baru diferensiasi level',
    ],
    autonomy: [
      'Jika kelas sudah kenal salam di L4, persingkat drill dan langsung ke chant',
      'Jika waktu mepet, L10 Real Life cukup 1–2 contoh',
      'L13 boleh dilewati jika sangat mepet — langsung ke L14',
      'Jika kelas cepat tenang di L8, langsung masuk game tanpa reset panjang',
    ],
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L0 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Berdiri di pintu. Pegang Kiki di tangan kiri. Sambut siswa satu per satu saat masuk. UCAP: "Good morning! Come in, come in!"`,
          bantuan: null,
          cue    : 'Layar ini dilakukan sebelum kelas resmi dimulai — saat siswa masuk satu per satu. Boneka Kiki wajib ada di tangan. Lambaikan Kiki ke setiap siswa yang masuk. Layar ini pendek dan tidak boleh dilewati karena menjadi anchor emosi pertama siswa.',
          darurat: null,
          energi : '⚪',
        },

        // L1 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Semua duduk. Pegang Kiki dan Momo — satu di setiap tangan. AKSI: Demo Kiki & Momo: → Kiki: "Good morning, Momo! How are you today?" → Momo: "Good morning, Kiki! I am fine, thank you!"`,
          bantuan: null,
          cue    : 'Keep it short — one quick demo only. Jangan ulang demo boneka lebih dari sekali.',
          darurat: null,
          energi : '🔴',
        },

        // L2 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Turunkan boneka. Tunjuk diri sendiri → tunjuk kelas. UCAP: "Good morning, everyone! How are you today?" "I am fine, thank you! Say it with me!" → Siswa: "Good morning, teacher! I am fine, thank you!"`,
          bantuan: 'Jika diam: condongkan badan, alis naik → ucap "I am fi-ne..." menggantung.',
          cue    : 'No pause — model the answer immediately setelah guru ucap "Say it with me!"',
          darurat: null,
          energi : '🟡',
        },

        // L3 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Ambil kartu waktu. Tunjukkan ke kelas satu per satu — sebut namanya dulu. UCAP: "Look! Morning, afternoon, evening." "Each time has its own greeting!" "This is morning." "This is afternoon." "This is evening." "Now — what time is this?" → Siswa: "Morning!" / "Good morning!" (terima kedua jawaban)`,
          bantuan: [
            'Jika diam: "Hmm… morning or afternoon?" — tunjuk 2 kartu bergantian. Tunjuk gambar matahari → "mor-ning..." menggantung.',
            'Jika benar: angkat jempol, angguk.',
          ],
          cue    : 'Condongkan badan dan alis naik setelah ucap "Now — what time is this?" — tunggu respons sebelum lanjut.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,  // TODO: verifikasi

      langkah: [

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tempel 4 kartu salam di papan satu per satu. UCAP: "We know morning, afternoon, and evening." "Now one more — good night!" "See? Four greetings. One for each time. Let us learn them all!" AKSI: Demo Kiki & Momo — 4 salam: → Kiki: "Good morning, Momo!" / Momo: "Good morning, Kiki!" → Kiki: "Good afternoon, Momo!" / Momo: "Good afternoon, Kiki!" → Kiki: "Good evening, Momo!" / Momo: "Good evening, Kiki!" → Kiki: "Good night, Momo!" / Momo: "Good night, Kiki!"`,
          bantuan: null,
          cue    : 'Gerakkan tangan seperti orang tidur saat ucap "good night" — gesture ini menjadi anchor untuk siswa yang belum familiar dengan kata tersebut.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Turunkan boneka. Tunjuk kartu salam satu per satu. 👂 LISTEN FIRST UCAP: "Good morning. Good afternoon. Good evening. Good night." 🗣 TOGETHER UCAP: "Now say it with me!" → Siswa: "Good morning! Good afternoon! Good evening! Good night!"`,
          bantuan: [
            'Jika diam: tunjuk kartu pertama → "Good mor-ning..." menggantung.',
            'Jika pelan: dekatkan tangan ke telinga, angguk semangat.',
          ],
          cue    : null,
          darurat: null,
          energi : '🟠',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan sekali. UCAP: "Good! Now, let us say it with a chant. Watch me first!" 👂 DEMO — GURU SENDIRI AKSI: Demo chant guru sendiri — satu putaran penuh, sambil duduk: → "Hel-lo hel-lo" → 👏👏👏👏 → "how are you?" → tap knees x3 → "I am fine" → 👏👏👏 → "thank you!" → 🙌`,
          bantuan: null,
          cue    : 'Tunjuk telinga + mata sebelum demo — siswa dengar dan lihat dulu, jangan ikut dulu. Demo dilakukan sambil duduk.',
          darurat: null,
          energi : '🟠',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER AKSI: Dua putaran — putaran kedua lebih cepat. UCAP: "Now together!" → Siswa: "Hello hello, how are you? I am fine, thank you!"`,
          bantuan: 'Jika tidak ikut: perlambat tempo → tunjuk lutut saat bagian tap knees.',
          cue    : 'Fast but controlled — pertahankan siswa tetap duduk selama chant. Berhenti saat energi masih tinggi.',
          darurat: null,
          energi : '🔴',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Angkat tangan — minta siswa diam dan fokus. UCAP: "Hands down. Eyes on me." AKSI: Jelaskan aturan. Peragakan dengan Kiki — gerakkan Kiki berdiri cepat sebagai contoh. UCAP: "Now a game! I show a card — stand up fast. Say it right. Get a point!"`,
          bantuan: null,
          cue    : 'Turunkan tangan perlahan dan tunjuk mata sendiri saat reset — kelas perlu momen hening sebelum game dimulai. Jika kelas cepat tenang, langsung masuk game tanpa reset panjang.',
          darurat: 'Waktu ≤10 menit → lewati game, lanjut ke Layar 11 (Real Life).',
          energi : '⚪',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Angkat kartu — siswa berlomba ucapkan salam yang tepat. Siapa pertama berdiri dan benar, dapat poin. 🔁 5–6 rounds only.`,
          bantuan: 'Jika tidak ada yang menjawab: dekatkan kartu → "Good mor-..." menggantung.',
          cue    : null,
          darurat: null,
          energi : '🔴',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: 🏠 Real Life Connection — minta siswa duduk. UCAP: "Nice! Do you say these greetings at home too?" AKSI: Demo boneka — real life context: → Kiki: "Good morning, Mom!" → Mom: "Good morning, Kiki!" AKSI: Turunkan boneka. Tanya kelas — condongkan badan, alis naik. UCAP: "What do you say to your parents in the morning at home?" → Siswa: "Good morning, Mom! Good morning, Dad!"`,
          bantuan: 'Jika diam: "Good mor-ning, Mom..." menggantung → tunjuk siswa bergantian.',
          cue    : 'Tunjuk ke luar jendela — arah rumah — saat membuka konteks Real Life. Cukup 1–2 contoh jika waktu mepet.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Angguk, tersenyum. Jeda — tunggu respons siswa. UCAP: "And when you leave? What do you say then?" AKSI: Sambut jawaban siswa. Tunjuk kartu perpisahan di papan. UCAP: "Yes! We can say goodbye. Look at these!" AKSI: Demo Kiki & Momo — perpisahan: → Kiki: "Goodbye, Momo! See you!" → Momo: "Goodbye, Kiki! Bye!" 👂 LISTEN FIRST AKSI: Turunkan boneka. Tunjuk kartu perpisahan satu per satu. UCAP: "Goodbye! Bye! See you!"`,
          bantuan: null,
          cue    : 'Gerakkan tangan seperti melambai pergi saat tanya "And when you leave?" — gesture ini menjadi anchor untuk farewell.',
          darurat: null,
          energi : '🟡',
        },

        // L12 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER AKSI: Ajak siswa ikut. Dua kali pengulangan. UCAP: "Now say it with me!" → Siswa: "Goodbye! Bye! See you!" 🔁 Repeat 2x.`,
          bantuan: [
            'Jika diam: "Good-bye..." menggantung → gerakkan tangan melambai.',
            'Jika pelan: dekatkan tangan ke telinga, angguk semangat.',
          ],
          cue    : null,
          darurat: null,
          energi : '🟡',
        },

        // L13 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Beri sinyal perubahan mode. Tunjuk kartu di papan untuk yang butuh bantuan. UCAP: "Now let us practice. If you need help, look at the cards. If you are ready, try without the cards." Diferensiasi: - Need Help: gunakan kartu — guru pegang Kiki, siswa pegang Momo — dialog bersama guru. - Ready: tanpa kartu — buat kalimat sendiri (contoh: "Good evening, Dad!") — praktik berpasangan pakai Kiki & Momo bergantian.`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L14 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Ambil kartu waktu. Tunjuk ke kelas. 🔁 3–4 different cards. UCAP: "Remember these? Let us see what you know." UCAP: "What greeting do we use in the morning?" → Siswa (3–4 acak): "Good morning!"`,
          bantuan: [
            'Jika diam: dekatkan kartu → "Good mor-..." menggantung.',
            'Jika benar: angkat jempol → lanjut siswa berikutnya.',
          ],
          cue    : null,
          darurat: null,
          energi : '🟡',
        },

        // L15 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Beri pujian singkat. Demo jawaban dengan Kiki: → Kiki: "I like good morning!" UCAP: "Very good! Now tell me — which greeting do you like best?" → Siswa: sebut satu salam favorit.`,
          bantuan: [
            'Jika diam: tunjuk kartu satu per satu — siswa boleh menunjuk kartu.',
            'Jika jawab Bahasa Indonesia: tunjuk kartu → bantu ucapkan dalam Inggris.',
          ],
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

        // L16 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pegang Kiki dan Momo. Demo sekali saja: → Kiki: "Goodbye, everyone! See you next time!" → Momo: "Goodbye! See you!" 🗣 TOGETHER AKSI: Turunkan boneka. Lambaikan tangan ke seluruh kelas. UCAP: "See you next time. Goodbye, everyone!"`,
          bantuan: 'Jika diam: mulai lambai tangan → "Good-bye..." menggantung.',
          cue    : 'Demo boneka hanya sekali — jangan diulang. Langsung pindah ke bersama setelah demo selesai.',
          darurat: null,
          energi : '🔵',
        },

        // L17 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kumpulkan dan simpan semua material: → Kumpulkan kartu waktu + kartu salam → Simpan Kiki dan Momo AKSI: Catat siswa yang: → Diam sepanjang sesi → Salah greeting berulang → Butuh kartu terus`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_01;
