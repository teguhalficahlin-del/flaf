/**
 * =============================================================
 * FLAF — TP 18 (Integrative Project: My World)
 * File: tp-18-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp18-v2.txt
 * Generated: 2026-05-25
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_18 = {

  id       : 'tp-18',
  pdf_ref  : 'Modul_Ajar_V3_TP18_Integrative_Project_My_World.docx',
  nomor    : 18,
  kelas    : 2,
  nama     : 'Integrative Project: My World',
  tema     : 'Proyek Integratif — Penutup Fase A',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menggunakan kosakata dari TP01–17 dalam konteks terintegrasi.',
    'Peserta didik dapat mempresentasikan diri menggunakan frame kalimat lengkap.',
    'Peserta didik dapat membuat poster "My World" dengan panduan struktur kalimat.',
  ],
  vocab    : [],
  persiapan: [
    'Template poster "My World" (1 per siswa, disiapkan di meja — terbalik sebelum kelas masuk)',
    'Spidol warna atau pensil warna (1 set per siswa)',
    'Kartu reference sentences disiapkan di meja guru',
    'Papan tulis: tulis frame kalimat sebelum kelas masuk',
    'Timer 10 menit disiapkan',
  ],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp18-poster-template.png', label: 'Template Poster My World' },
    { file: 'tp18-reference-card.png',  label: 'Kartu Reference Sentences' },
  ],

  checklist: [
    'Template poster (1 per siswa) sudah di meja — terbalik/face down sebelum kelas masuk',
    'Spidol/pensil warna sudah di meja setiap siswa',
    'Kartu reference sentences disiapkan di meja guru',
    'Papan tulis: Hello! My name is ___. I have a ___ family. I live in a house. I like ___ because it is ___ sudah tertulis sebelum kelas masuk',
    'Timer 10 menit disiapkan',
    'Layar 0: tambahkan "Today is a very special day"',
    'Jeda 3 detik setelah "last day of Phase A" di L1 — wajib',
    'L1 cukup 4 kalimat pendek — stop setelah "I will help you"',
    'Guru tunjuk template section per section di L2 — bukan bacakan semuanya',
    'Template terlihat jelas dari belakang kelas saat demo L2',
    'Demo 5 kalimat guru di L2 sambil tunjuk papan',
    'Contoh keluarga netral — tidak gunakan "happy family" atau "complete family"',
    'Siswa balik poster setelah instruksi — tunggu semua siap sebelum "Start now"',
    'Timer 10 menit dimulai saat siswa mulai mengisi',
    'Checkpoint menit ke-5: Section 1 dan 2 done — lanjut 3 dan 4',
    'Countdown "2 more minutes" diucapkan di menit ke-7',
    'Guru scribe untuk siswa yang blank di menit ke-8',
    'Siswa freeze/poster kosong total: guru pegang poster bersama + Q&A support',
    'Demo presentasi guru dilakukan sebelum sesi presentasi L5',
    'Guru applause untuk diri sendiri saat demo — tunggu kelas ikut',
    'Thumbs up diperkenalkan dan dilatih sebelum sesi presentasi dimulai',
    'Urutan presentasi dari baris/deretan — default bukan volunteer',
    'Presentasi dari tempat duduk dihitung penuh — tidak wajib maju ke depan',
    '"Posters on lap. Eyes front." diucapkan sebelum presenter pertama maju',
    'Batas ±20 detik per presenter — akselerasi jika melewati ini',
    'Monitor energi kelas mulai dari presenter ke-6 — bukan ke-10',
    'Thumbs up setelah setiap presenter — ritual tetap, bukan tepuk tangan bebas',
    'Panggil nama berikutnya segera setelah thumbs up — tanpa dead air',
    'Siswa sangat nervous: dekati sebelum giliran dipanggil — bukan saat sudah di depan',
    'Siswa blank: Q&A singkat → guru announce → thumbs up → lanjut — tetap dihitung',
    'Akselerasi: "Quick round — just your name and one hobby" jika energi turun',
    'Jika waktu tidak cukup: janji presentasi di break time atau besok — tidak ada siswa ditinggal',
    'Guru tidak koreksi grammar saat presentasi',
    'Reset jeda dilakukan setelah sesi presentasi sebelum celebration L7',
    'L7: "Clap for yourself" dulu — baru "clap for your friends"',
    'Guru lead tepuk tangan dengan gesture — bukan hanya instruksi verbal',
    'Sinyal tangan turun setelah tepuk tangan kedua sebelum kalimat penutup L7',
    'Closure ritual L8 baris per baris — tunggu kelas ulang setiap baris',
    'Jeda 3 detik di akhir ritual L8 — tidak ditambahkan komentar apapun setelahnya',
  ],

  energi_map: [
    'L0 🔵',
    'L1 🔵',
    'L2 🟡',
    'L3 🟡',
    'L4 🟡',
    'L5 🟠',
    'L6 ⚪',
    'L7 🔴',
    'L8 🔵',
  ],

  catatan: {
    risiko: [
      'L1: jeda 3 detik setelah "last day of Phase A" wajib — beri kelas waktu merasakan',
      'L3: checkpoint menit ke-5 wajib — countdown "2 more minutes" di menit ke-7',
      'L5: "Posters on lap. Eyes front." wajib sebelum presenter pertama maju',
      'L5: batas ±20 detik per presenter — akselerasi jika melewati ini',
    ],
    autonomy: [
      'Monitor energi kelas mulai dari presenter ke-6, bukan ke-10',
      'Thumbs up adalah ritual tetap — bukan tepuk tangan bebas yang bisa jadi noise',
      'Panggil nama berikutnya segera setelah thumbs up — dead air menguras energi',
      'Jika waktu tidak cukup: "You will present at break time or tomorrow. I promise."',
      'Guru tidak koreksi grammar saat presentasi — fokus pada courage dan attempt',
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
          teks   : `UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] UCAP: "I'm fine, thank you! Today is a very special day. Are you ready? Let's start."`,
          bantuan: null,
          cue    : 'Tambahkan "Today is a very special day" — ini anchor emosional pertama untuk tone capstone. Jika kelas belum fokus: berdiri diam, tunggu, ulangi "Are you ready?"',
          darurat: null,
          energi : '🔵',
        },

        // L1 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berdiri di depan kelas — tenang, senyum lebar. UCAP: "Today — this is the LAST day of Phase A English." [Jeda 3 detik — biarkan kelas merasakan] UCAP: "Today is not a test. It is a celebration." "You may feel nervous. That is OK." "You may forget words. That is OK." "I will help you." [Pause — tunggu anggukan atau respons] UCAP: "Are you ready?" [Tunggu respons — lanjut]`,
          bantuan: 'Jika ada siswa terlihat sangat nervous sebelum mulai: dekati diam-diam, kontak mata lembut — "You will do great. I will help you."',
          cue    : 'Jeda 3 detik setelah "last day of Phase A" wajib — beri kelas waktu merasakan momen. Empat kalimat pendek saja — stop setelah "I will help you." Tidak perlu kalimat tambahan tentang merayakan atau keberanian — struktur acara yang akan menyampaikan pesan itu sendiri. Guru bicara pelan dan hangat — bukan bersemangat berlebihan.',
          darurat: null,
          energi : '🔵',
        },

        // L2 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru ambil satu template poster contoh — tunjuk ke kelas, hadap kelas. "Look at this. This is the template. Four sections." → Tunjuk Section 1: "My name — write your name here." → Tunjuk Section 2: "My family — write about your family." → Tunjuk Section 3: "My house — write about your house." → Tunjuk Section 4: "My hobby — write about your hobby." "Now — I show you what to say." AKSI: Tunjuk papan — Hello! My name is ___. I have a ___ family. I live in a house. I like ___ because it is ___. → Guru model sambil tunjuk papan: "Hello! My name is [nama guru]." "I have a big family." "I live in a house." "I like reading because it is fun!" "That is my world!" UCAP: "Simple. You know all these words. You learned them in Phase A."`,
          bantuan: null,
          cue    : 'Tunjuk template section per section — bukan bacakan semuanya sekaligus. Template harus terlihat jelas dari belakang kelas. Tunjuk papan setiap kali model kalimat — ini anchor untuk siswa yang lupa struktur saat mengisi poster. Demo cukup 5 kalimat — tidak perlu lebih. Hindari contoh yang terlalu normatif: "big family" netral — jangan tambahkan "happy family" atau "complete family."',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,  // TODO: verifikasi

      langkah: [

        // L3 — INTI
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Now — flip your poster. Face up." [Tunggu semua siswa balik poster — pastikan semua siap] "Section 1 — write your name. Start now." [Timer 10 menit mulai] Checkpoint menit ke-5: UCAP: "Check — Section 1 and 2 done? Good. Move to Section 3 and 4." Checkpoint menit ke-7: UCAP: "2 more minutes. Finish your favorite part." Guru circulate sepanjang pembuatan — prioritas: FAST FINISHER → "Draw pictures! Make it beautiful!" SISWA STUCK → Dekati, bisik: "What is your hobby? Tell me." Guru scribe jika perlu. SISWA PANIK → "You are doing great. Take your time." SCRIBE SUPPORT (menit ke-8, poster masih banyak kosong) → Guru scribe — siswa bicara, guru tulis. POSTER KOSONG TOTAL / SISWA FREEZE → Guru pegang poster bersama siswa, lakukan Q&A: "What is your name?" → tulis. "What do you like?" → tulis. Tidak perlu siswa menulis sendiri. UCAP saat waktu habis: "Time! Posters face down. Look here."`,
          bantuan: 'Jika siswa belum selesai saat waktu habis: lanjut ke presentasi dengan poster yang ada — guru bantu lengkapi saat siswa maju.',
          cue    : 'Jangan berikan instruksi apapun sambil siswa masih membalik poster — tunggu semua siap. Checkpoint menit ke-5 wajib. Countdown "2 more minutes" di menit ke-7 lebih efektif dari timer abstrak untuk kelas 1. Spelling bukan prioritas — drawing + writing keduanya diterima. Guru scribe adalah keputusan benar, bukan kemudahan berlebihan.',
          darurat: null,
          energi : '🟡',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru ambil poster contoh — berdiri di depan kelas. UCAP: "Watch me. I present first." → Guru pegang poster menghadap kelas. → "Hello! My name is [nama guru]." → "I have a big family." → "I live in a house." → "I like reading because it is fun!" → "That is my world! Thank you!" [Guru beri applause untuk diri sendiri — tunggu kelas ikut] UCAP: "See? Simple. 4–5 sentences. That is all." UCAP: "Now — before we start: when someone finishes, we do this." [tunjuk gesture thumbs up] "Thumbs up — means: I heard you. Well done." [Minta kelas latih thumbs up sekali] UCAP: "I will start from this side." [tunjuk baris atau deretan pertama] [Jika ada siswa yang spontan angkat tangan mau duluan → persilakan sebagai bonus]`,
          bantuan: null,
          cue    : 'Demo guru wajib sebelum sesi presentasi. Guru applause untuk diri sendiri dulu — ini mengajarkan cara kelas merespons. Perkenalkan dan latih thumbs up sebelum sesi dimulai — jangan pertama kali dipakai saat presenter sudah selesai. Urutan dari baris/deretan adalah default — tidak menunggu volunteer. Presentasi dari tempat duduk tetap dihitung penuh — tidak ada kewajiban maju ke depan.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Siswa presentasi satu per satu — dari tempat duduk atau maju ke depan, fleksibel. Setiap siswa: → Berdiri atau tetap duduk. → Pegang poster menghadap kelas. → Ucap 2–5 kalimat. → Selesai → guru: "Thank you!" → kelas thumbs up. → Guru langsung panggil nama berikutnya — tanpa jeda panjang. Batas waktu per presenter: ±20 detik. Jika belum selesai → guru bantu akselerasi. "Posters on lap. Eyes front." — ucapkan ke penonton sebelum presenter pertama maju. SUPPORT: AKSELERASI: Mulai monitor energi kelas setelah presenter ke-6 atau ke-8. Jika fokus mulai turun → akselerasi lebih awal: "Quick round — just your name and one hobby. Go!"`,
          bantuan: [
            'Siswa gugup tapi mau coba: guru berdiri di samping, bisik kalimat pertama — "Hello, my name is…" Tunggu siswa lanjut.',
            'Siswa blank: guru Q&A singkat — "What is your name?" → "What do you like?" → guru announce: "This is [nama]. [Nama] likes drawing!" → thumbs up → lanjut. Tetap dihitung presentasi.',
            'Siswa sangat nervous saat menunggu giliran: dekati sebelum namanya dipanggil — bisik: "I will stand next to you. You will be fine."',
          ],
          cue    : '"Posters on lap. Eyes front." wajib diucapkan sebelum presenter pertama — poster di tangan penonton adalah distraksi utama. Thumbs up adalah ritual tetap — bukan tepuk tangan bebas yang bisa jadi noise. Panggil nama berikutnya segera setelah thumbs up — dead air antar presenter menguras energi kelas. Batas ±20 detik per presenter — akselerasi jika melewati ini. Monitor mulai dari presenter ke-6, bukan ke-10. Guru tidak koreksi grammar. Fokus pada courage dan attempt — bukan perfection. Presentasi dari tempat duduk tetap dihitung penuh.',
          darurat: 'Jika waktu tidak cukup untuk semua siswa: "You will present at break time or tomorrow. I promise. No one is left out."',
          energi : '🟠',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — kelas freeze] UCAP: "Stop. Everyone — well done." [Jeda 3 detik] UCAP: "You all presented your world. That was brave." [Jeda 2 detik — tidak tanya apa-apa]`,
          bantuan: null,
          cue    : 'Jeda reset ini wajib sebelum celebration — kelas perlu satu momen tenang setelah energi presentasi sebelum masuk puncak perayaan. Dua kalimat saja — tidak lebih. Jangan loncat langsung ke celebration.',
          darurat: null,
          energi : '⚪',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L7 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Now — stand up!" [Kelas berdiri] "You were brave." "You tried." "You spoke English." "That is AMAZING." "Now — clap for yourself!" [Guru lead tepuk tangan dengan gesture jelas — tunggu kelas ikut penuh] "And clap for your friends!" [Guru lead tepuk tangan lagi] [Setelah tepuk tangan kedua: guru angkat tangan ke atas — sinyal tangan turun] UCAP: "You finished Phase A. All of you. Together."`,
          bantuan: null,
          cue    : '"Clap for yourself" dulu — baru "clap for your friends." Urutan ini penting: self-recognition dulu, baru community recognition. Guru lead tepuk tangan dengan gesture jelas — bukan hanya instruksi verbal. Satu napas satu kalimat — tidak ada blok panjang. Setelah tepuk tangan kedua: sinyal tangan turun sebelum kalimat penutup — supaya loud tidak carry over ke ritual closure.',
          darurat: null,
          energi : '🔴',
        },

        // L8 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — kelas diam] UCAP: "Repeat after me." → Guru: "Thank you, Phase A!" → kelas ulang. → Guru: "I learned!" → kelas ulang. → Guru: "I tried!" → kelas ulang. → Guru: "I was brave!" → kelas ulang. → Guru: "Goodbye, Phase A!" → kelas ulang. → Guru: "Hello, Phase B!" → kelas ulang. [Jeda 3 detik — diam bersama] UCAP: "Well done. See you next time."`,
          bantuan: null,
          cue    : 'Ritual ini wajib baris per baris — satu baris, tunggu kelas ulang, lanjut. Jangan diucapkan sekaligus. Jeda 3 detik di akhir wajib — ini emotional closure, bukan transisi ke aktivitas berikutnya. Guru tidak tambahkan komentar apapun setelah jeda — biarkan momen itu selesai sendiri. Guru yang bicara lagi setelah jeda akan memecah closure.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_18;
