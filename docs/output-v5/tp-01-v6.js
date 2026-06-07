/**
 * =============================================================
 * FLAF — TP 1 (Greetings & Farewells)
 * File: tp-01-v6.js
 * Format: v5.0
 * Source: flaf-skenario-tp01-v2.txt
 * Revised: 2026-06-07
 * Basis revisi: audit-output-1.md (10 temuan)
 * Hotfix: 2026-06-07 — pisahkan gesture dari UCAP di L13 (browser/TTS fix)
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

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Berdiri di pintu. Pegang Kiki di tangan kiri. Sambut siswa satu per satu saat masuk sambil mengucapkan "Good morning! Come in, come in!"`,
    bantuan: null,
    // REVISI T3+T4 (UC-06+IG-04): pangkas cue, tambah panduan penyesuaian salam
    cue    : 'Mulai sebelum kelas masuk. Kiki wajib di tangan. Sesuaikan salam dengan waktu kelas hari ini.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L1 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Angkat telapak tangan menghadap bawah. UCAP: "Sit down, please." AKSI: Tunggu sampai semua siswa duduk. AKSI: Pegang Kiki dan Momo — satu di setiap tangan. AKSI: Gerakkan Kiki dan Momo saling menghadap lalu peragakan dialog berikut. → Kiki: "Good morning, Momo! How are you today?" → Momo: "Good morning, Kiki! I am fine, thank you!"`,
          bantuan: null,
          // REVISI T10 (UC-06): alihbahasakan cue ke Bahasa Indonesia penuh
          cue    : 'Satu demo saja — jangan diulang.',
          darurat: null,
          energi : '🔴',
        },

        // L2 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Turunkan boneka. Tunjuk diri sendiri → tunjuk kelas. UCAP: "Good morning, everyone! How are you today?" UCAP: "I am fine, thank you! Say it with me!" → Siswa: "Good morning, teacher! I am fine, thank you!"`,
          bantuan: 'Jika diam: condongkan badan, alis naik → ucap "I am fi-ne..." menggantung.',
          // REVISI T10 (UC-06): alihbahasakan cue ke Bahasa Indonesia penuh
          cue    : 'Langsung model jawaban setelah ucap "Say it with me!" — jangan jeda.',
          darurat: null,
          energi : '🟡',
        },

        // L3 — PEMBUKA
        {
          // REVISI T1 (IG-01): "sebut namanya dulu" → "ucapkan nama waktunya"
          tipe   : 'instruksi',
          teks   : `AKSI: Ambil kartu waktu. Angkat kartu setinggi dada, hadapkan ke kelas satu per satu — ucapkan nama waktunya. UCAP: "Look! Morning, afternoon, evening." UCAP: "Each time has its own greeting!" UCAP: "This is morning." UCAP: "This is afternoon." UCAP: "This is evening." UCAP: "Now — what time is this?" → Siswa: "Morning!" / "Good morning!" (terima kedua jawaban)`,
          bantuan: [
            'Jika diam: "Hmm… morning or afternoon?" — tunjuk 2 kartu bergantian. Tunjuk gambar matahari → "mor-ning..." menggantung.',
            'Jika benar: angkat jempol, angguk.',
          ],
          cue    : 'Condongkan badan dan alis naik setelah ucap "Now — what time is this?" — tunggu respons sebelum lanjut. Letakkan kartu waktu di meja guru setelah selesai digunakan.',
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
          teks   : `AKSI: Tempel 4 kartu salam di papan satu per satu. UCAP: "We know morning, afternoon, and evening." UCAP: "And this one is different — good night. We say it before sleeping." UCAP: "See? Four greetings. One for each time. Let us learn them all!" --- AKSI: Gerakkan Kiki dan Momo saling menghadap lalu peragakan empat dialog salam berikut. → Kiki: "Good morning, Momo!" / Momo: "Good morning, Kiki!" → Kiki: "Good afternoon, Momo!" / Momo: "Good afternoon, Kiki!" → Kiki: "Good evening, Momo!" / Momo: "Good evening, Kiki!" → Kiki: "Good night, Momo!" / Momo: "Good night, Kiki!"`,
          bantuan: null,
          cue    : 'Gerakkan tangan seperti orang tidur saat ucap "good night" — gesture ini menjadi anchor untuk siswa yang belum familiar dengan kata tersebut.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Turunkan boneka. Angkat kartu salam setinggi dada, hadapkan ke kelas — minta kelas memperhatikan. AKSI: Minta siswa mendengarkan terlebih dahulu tanpa mengikuti. UCAP: "Good morning. Good afternoon. Good evening. Good night." AKSI: Ajak seluruh kelas mengucapkan bersama. UCAP: "Now say it with me!" → Siswa: "Good morning! Good afternoon! Good evening! Good night!"`,
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
          teks   : `AKSI: Tepuk tangan sekali. UCAP: "Good! Now, let us say it with a chant. Watch me first!" --- AKSI: Peragakan chant satu putaran penuh sambil duduk. → "Hel-lo hel-lo" → 👏👏👏👏 → "how are you?" → tap knees x3 → "I am fine" → 👏👏👏 → "thank you!" → 🙌`,
          bantuan: null,
          cue    : 'Tunjuk telinga + mata sebelum demo — siswa dengar dan lihat dulu, jangan ikut dulu. Demo dilakukan sambil duduk.',
          darurat: null,
          energi : '🟠',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Ajak seluruh kelas mengucapkan bersama. AKSI: Dua putaran — putaran kedua lebih cepat. UCAP: "Now together!" → Siswa: "Hello hello, how are you? I am fine, thank you!"`,
          bantuan: 'Jika tidak ikut: perlambat tempo → tunjuk lutut saat bagian tap knees.',
          // REVISI T10 (UC-06): alihbahasakan cue ke Bahasa Indonesia penuh
          cue    : 'Tempo cepat tapi terkontrol — siswa tetap duduk. Berhenti saat energi masih tinggi.',
          darurat: null,
          energi : '🔴',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Angkat tangan — minta siswa diam dan fokus. UCAP: "Hands down. Eyes on me." --- AKSI: Jelaskan aturan. Peragakan dengan Kiki — angkat Kiki ke atas cepat saat tunjuk kartu, sebagai contoh siswa yang bergerak cepat. UCAP: "Now a game! I show a card — stand up fast. Say it right. Get a point!"`,
          bantuan: null,
          cue    : 'Turunkan tangan perlahan dan tunjuk mata sendiri saat reset — kelas perlu momen hening sebelum game dimulai. Jika kelas cepat tenang, langsung masuk game tanpa reset panjang.',
          darurat: 'Waktu ≤10 menit → lewati game, lanjut ke Layar 11 (Real Life).',
          energi : '⚪',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          // REVISI T9 (IG-08): hapus "AKSI: Lanjut ke aktivitas Real Life." — meta-navigasi redundan
          teks   : `AKSI: Angkat kartu — siswa berlomba ucapkan salam yang tepat. Siapa pertama berdiri dan benar, dapat poin. AKSI: Lakukan hanya 5–6 putaran, lalu hentikan permainan.\n--- AKSI: Angkat jempol. UCAP: "Great job, everyone!" UCAP: "Sit down, everyone." AKSI: Tunggu sampai semua siswa duduk kembali.`,
          bantuan: 'Jika tidak ada yang menjawab: dekatkan kartu → "Good mor-..." menggantung.',
          cue    : null,
          darurat: null,
          energi : '🔴',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          // REVISI T6 (IG-08): hapus instruksi duduk redundan di awal L10 — sudah ditangani akhir L9
          teks   : `AKSI: Hubungkan materi dengan situasi di rumah. UCAP: "Nice! Do you say these greetings at home too?" AKSI: Gerakkan Kiki dan Momo saling menghadap lalu peragakan dialog berikut. → Kiki: "Good morning, Mom!" → Mom: "Good morning, Kiki!" --- AKSI: Turunkan boneka. AKSI: Tanya kelas — condongkan badan, alis naik. UCAP: "What do you say to your parents in the morning at home?" → Siswa: "Good morning, Mom! Good morning, Dad!"`,
          bantuan: 'Jika diam: "Good mor-ning, Mom..." menggantung → tunjuk siswa bergantian.',
          cue    : 'Tunjuk ke luar jendela — arah rumah — saat membuka konteks Real Life. Cukup 1–2 contoh jika waktu mepet.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — INTI
        {
          tipe   : 'instruksi',
          // REVISI T1 (IG-03a): pindahkan "Jeda — tunggu respons" ke setelah pertanyaan diajukan
          // REVISI T2 (IG-03b): tambahkan langkah modelling sebelum kelas mengucapkan
          teks   : `AKSI: Tempel 3 kartu perpisahan di papan (goodbye / bye / see you). ---\nAKSI: Angguk, tersenyum. UCAP: "And when you leave? What do you say then?" AKSI: Jeda — tunggu respons siswa. AKSI: Sambut jawaban siswa. Tunjuk kartu perpisahan di papan. UCAP: "Yes! We can say goodbye. Look at these!" UCAP: "Goodbye means we are leaving." --- AKSI: Gerakkan Kiki dan Momo saling menghadap lalu peragakan dialog perpisahan berikut. → Kiki: "Goodbye, Momo! See you!" → Momo: "Goodbye, Kiki! Bye!" --- AKSI: Minta siswa mendengarkan terlebih dahulu tanpa mengikuti. UCAP: "Goodbye. Bye. See you." AKSI: Turunkan boneka. Angkat kartu perpisahan setinggi dada, hadapkan ke kelas. UCAP: "Now say it with me!" → Siswa: "Goodbye! Bye! See you!"`,
          bantuan: null,
          cue    : 'Gerakkan tangan seperti melambai pergi saat tanya "And when you leave?" — gesture ini menjadi anchor untuk farewell.',
          darurat: null,
          energi : '🟡',
        },

        // L12 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Ajak seluruh kelas mengucapkan bersama. AKSI: Dua kali pengulangan. UCAP: "Now say it with me!" → Siswa: "Goodbye! Bye! See you!"`,
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
          // REVISI T5 (IG-05): tambah kriteria pembagian kelompok yang konkret
          // REVISI T8 (UC-04): ganti UCAP dua kondisi dengan dua UCAP terpisah + gesture
          // REVISI T7 (IG-10): sederhanakan logistik rotasi boneka
          teks   : `AKSI: Beri sinyal perubahan mode. Tunjuk kartu di papan untuk yang butuh bantuan. AKSI: Siswa yang bisa menyebut satu salam tanpa melihat kartu → grup Ready. Siswa lain → grup Need Help. AKSI: Tunjuk kartu di papan — arahkan ke grup Need Help. UCAP: "Look at the cards. Say it with me." AKSI: Sembunyikan kartu — arahkan ke grup Ready. UCAP: "No cards. Try alone." AKSI: Bagi aktivitas menjadi dua kelompok berikut: - Need Help: gunakan kartu — guru pegang Kiki, siswa pegang Momo — dialog bersama guru. - Ready: tanpa kartu — pilih satu greeting dan satu orang (Mom, Dad, Friend, Teacher), lalu buat kalimat. Kiki & Momo hanya untuk grup Need Help. Guru pegang Kiki, siswa pegang Momo. Ganti siswa setiap 1 menit.\n--- AKSI: Setelah ±3 menit — angkat tangan. UCAP: "Stop. Sit down." AKSI: Tunggu sampai semua siswa duduk. AKSI: Lanjut ke kegiatan penutup.`,
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
          teks   : `AKSI: Ambil kartu waktu dari meja guru. Angkat kartu setinggi dada, hadapkan ke kelas — minta kelas mengucapkan. AKSI: Gunakan 3–4 kartu waktu yang berbeda secara bergantian. UCAP: "Remember these? Let us see what you know." AKSI: Tunjuk satu kartu waktu ke kelas. UCAP: "What greeting do we use for this?" → Siswa (3–4 acak): menyebut salam yang tepat.`,
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
          teks   : `AKSI: Pegang Kiki dan Momo. Demo sekali saja: → Kiki: "Goodbye, everyone! See you next time!" → Momo: "Goodbye! See you!" --- AKSI: Ajak seluruh kelas mengucapkan bersama sambil melambaikan tangan. AKSI: Turunkan boneka dan lambaikan tangan ke seluruh kelas. UCAP: "See you next time. Goodbye, everyone!"`,
          bantuan: 'Jika diam: mulai lambai tangan → "Good-bye..." menggantung.',
          cue    : 'Demo boneka hanya sekali — jangan diulang. Langsung pindah ke bersama setelah demo selesai.',
          darurat: null,
          energi : '🔵',
        },

        // L17 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kumpulkan dan simpan semua material: → Kumpulkan kartu waktu + kartu salam → Simpan Kiki dan Momo\nAKSI: Catat siswa yang: → Diam sepanjang sesi → Salah greeting berulang → Butuh kartu terus`,
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
