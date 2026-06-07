/**
 * =============================================================
 * FLAF — TP 5 (Colours)
 * File: tp-05-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp05-v2.txt
 * Generated: 2026-05-25
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_05 = {

  id       : 'tp-05',
  pdf_ref  : 'Modul_Ajar_V3_TP05_Colours.docx',
  nomor    : 5,
  kelas    : 1,
  nama     : 'Colours',
  tema     : 'Dunia di Sekitar Kita',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menyebut nama 8 warna dasar (red, blue, green, yellow, orange, purple, black, white) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan warna benda menggunakan struktur "The ... is ..." atau "It is ..." dalam aktivitas show and tell.',
    'Peserta didik dapat merespons pertanyaan "What colour is it?" dan "What is your favourite colour?" dengan kalimat lengkap.',
  ],
  vocab    : ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink',
              'black', 'white', 'brown', 'colour', 'favourite', 'what colour'],
  persiapan: ['Kartu warna bergambar 9 warna'],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp05-black.png',  label: 'Black' },
    { file: 'tp05-blue.png',   label: 'Blue' },
    { file: 'tp05-green.png',  label: 'Green' },
    { file: 'tp05-orange.png', label: 'Orange' },
    { file: 'tp05-pink.png',   label: 'Pink' },
    { file: 'tp05-purple.png', label: 'Purple' },
    { file: 'tp05-red.png',    label: 'Red' },
    { file: 'tp05-white.png',  label: 'White' },
    { file: 'tp05-yellow.png', label: 'Yellow' },
  ],

  checklist: [
    'Kartu warna x8 tersedia sebelum kelas masuk',
    'Kartu pink (opsional) — siapkan jika tersedia',
    'Benda berwarna di meja guru siapkan sebelum kelas',
    'Kartu warna disimpan di meja — belum ditunjukkan saat Layar 0',
    'Layar 0 dilakukan sebelum kelas resmi dimulai',
    'Jika kelas belum fokus: ulangi "Are you ready?" sambil berdiri diam (Layar 0)',
    'Kartu warna baru dikeluarkan di Layar 1 — tidak sebelumnya (Layar 0–1)',
    'Jeda 3 detik setelah tunjuk kartu pertama sebelum tanya "What colour?" (Layar 1)',
    'Urutan drill: red → blue → green → yellow → orange → purple → black → white (Layar 4)',
    '"Fast voice!" untuk red/blue/green/black — tempo normal untuk yellow/orange/purple (Layar 4)',
    'Demo clap twice → come back → freeze sebelum sentuh warna (Layar 5)',
    'Jika waktu ≤10 menit saat masuk Layar 5: lewati sentuh warna, lanjut ke Layar 7',
    'Sentuh warna dibatasi 5–6 warna — urutan red/blue/green/yellow (Layar 6)',
    'Clap twice + freeze wajib setiap ronde (Layar 6)',
    'Variasi mikro hanya di ronde akhir sentuh warna (Layar 6)',
    'Diam 15 detik setelah cooldown sebelum masuk modeling show and tell (Layar 7)',
    'Tas ditutup dan diletakkan sebelum siswa tampil show and tell (Layar 7)',
    'Show and tell dibatasi 4–5 siswa, 15 detik per siswa (Layar 8)',
    'Jeda kecil sebelum siswa tampil — beri anak pemalu 1 detik ekstra (Layar 8)',
    'Diferensiasi dibatasi 30–45 detik (Layar 9)',
    '"Small voice" dimodelkan sebelum partner practice (Layar 9)',
    'Jika ada kartu pink: tempel sebentar saat lagu — jika tidak ada: skip (Layar 11)',
    '"Soft goodbye" dimodelkan sebelum chorus penutup (Layar 12)',
    'Kumpulkan kartu warna setelah sesi selesai',
    'Siswa tutup tas setelah sesi selesai',
    'Catat siswa yang kesulitan warna tertentu (orange/purple/green)',
    'Catat siswa yang tidak mau tampil show and tell',
    'Catat siswa yang tidak ikut nyanyi',
    'Catat siswa yang sulit kembali freeze setelah aktivitas gerak',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🟡',
    'L2 🟡',
    'L3 🟠',
    'L4 🟡',
    'L5 ⚪',
    'L6 🔴',
    'L7 ⚪',
    'L8 🟠',
    'L9 🟡',
    'L10 🟡',
    'L11 🟠',
    'L12 🔵',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L6: freeze wajib setiap ronde — variasi mikro di ronde akhir',
      'L7: 15 detik silence dulu — tas ditutup sebelum tampil',
      'L8: 4–5 siswa, 15 detik per siswa',
      'L9: 30–45 detik — "Then switch." untuk turn-taking',
    ],
    autonomy: [
      'Persingkat L2 jika kelas sudah kenal warna',
      'Skip L9 jika waktu mepet',
      'L11 boleh diulang jika antusias — gesture santai, bukan akurasi kartu',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Berdiri di depan kelas. Letakkan kartu warna di meja — jangan ditunjukkan. Angkat telapak tangan menghadap bawah — ucap 'Sit down, everyone.' Tunggu sampai semua siswa duduk. Ucap 'Good morning, everyone! How are you today?' — tunggu respons kelas. Ucap 'I'm fine, thank you! Today is a very colourful day! Are you ready?' — berdiri diam jika kelas belum fokus.`,
    bantuan: null,
    cue    : 'Layar ini pendek dan wajib. Kartu warna belum boleh ditunjukkan di sini — simpan kejutan untuk Layar 1. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.',
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
          teks   : `AKSI: Tepuk 1 kali — berdiri diam.\nAKSI: Tunggu sampai kelas diam — minimal 3 detik.\nUCAP: "Good morning! Colourful day today!"\nAKSI: Dekati meja — ambil satu kartu warna.\nAKSI: Angkat kartu "Red" setinggi dada, hadapkan ke kelas.\nUCAP: "Look first."\nAKSI: Jeda 3 detik.\nUCAP: "What colour is this?"\nAKSI: Tunggu 2 detik.\nUCAP: "Red!"\nUCAP: "This is red."\nAKSI: Angkat kartu "Blue" setinggi dada, hadapkan ke kelas.\nUCAP: "And this one?"\nAKSI: Jeda 2 detik.\nUCAP: "Blue!"\nUCAP: "This is blue."`,
          bantuan: null,
          cue    : 'Jeda 3 detik setelah tunjuk kartu pertama — beri siswa waktu observasi sebelum tanya. Jangan langsung ucap warnanya.',
          darurat: null,
          energi : '🟡',
        },

        // L2 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Red. Blue. Green. Yellow."\n→ Siswa: "Red! Blue! Green! Yellow!"\nUCAP: "Good!"\nUCAP: "Now four more colours."\nUCAP: "Orange. Purple. Black. White."\n→ Siswa: "Orange! Purple! Black! White!"\nAKSI: Arahkan kedua tangan ke kelas — isyarat bicara bersama.\nUCAP: "All together!"\n→ Siswa: "Red! Blue! Green! Yellow! Orange! Purple! Black! White!"\nAKSI: Dekatkan jari telunjuk ke bibir — turunkan volume suara.\nUCAP: "Whisper — red — blue — green — yellow — orange — purple — black — white."\nAKSI: Arahkan tangan ke kelas — isyarat ikut berbisik.`,
          bantuan: [
            'Jika diam: tunjuk kartu + ucap "Red..." menggantung.',
            'Jika pelan: dekatkan tangan ke telinga.',
          ],
          cue    : null,
          darurat: null,
          energi : '🟡',
        },

        // L3 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Angkat kartu satu per satu dari kiri ke kanan — tunjukkan setiap kartu setinggi dada, hadapkan ke kelas.\nUCAP: "What colour?"\nAKSI: Tunggu jawaban kelas bersama.\nAKSI: Tunggu sampai satu putaran selesai.\nUCAP: "Now — surprise cards!"\nAKSI: Angkat 3–4 kartu secara acak dan cepat, satu per satu — hadapkan ke kelas setiap kali.`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🟠',
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
          teks   : `AKSI: Angkat kartu "Red" setinggi dada, hadapkan ke kelas.\nUCAP: "What colour?"\nAKSI: Tunggu jawaban siswa.\nUCAP: "It is red."\nAKSI: Lanjut ke kartu berikutnya — angkat setinggi dada, hadapkan ke kelas.\nUCAP: "What colour?"\nAKSI: Tunggu jawaban siswa.\nUCAP: "It is blue."\nAKSI: Ulangi pola yang sama untuk green, yellow, orange, purple, black, white.`,
          bantuan: [
            'Jika diam: ucap huruf pertama → tunggu.',
            'Jika Bahasa Indonesia: ucap nama warna Inggris → ajak ulang.',
          ],
          cue    : 'Urutan drill: red → blue → green → yellow → orange → purple → black → white. Pakai "Fast voice!" setelah red/blue/green/black. Tempo normal untuk yellow/orange/purple — fonologi lebih sulit.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan sekali.\nUCAP: "Hands down."\nUCAP: "Eyes on me."\nUCAP: "Walk, don't run. Only touch near you."\nAKSI: Angkat telapak tangan ke depan — berdiri diam selama 2 detik.\n---\nUCAP: "Come back… freeze!"\nUCAP: "Watch — touch, come back, freeze."\nAKSI: Sentuh satu benda di dekat meja guru.\nAKSI: Kembali ke posisi semula.\nAKSI: Berdiri diam — tahan 2 detik.\n---\nUCAP: "Ready?"`,
          bantuan: null,
          cue    : '"Come back" dulu, baru "freeze" — urutan ini penting. Tunjuk lantai = sinyal kembali ke tempat. Pilih benda yang benar-benar dekat untuk demo — model jarak pendek.',
          darurat: 'Waktu ≤10 menit → lewati sentuh warna, lanjut ke Layar 7.',
          energi : '⚪',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Ulangi urutan berikut sebanyak 5–6 ronde: red → blue → green → yellow.\nUCAP: "Touch something red in the room!"\nAKSI: Tunggu semua siswa kembali ke tempat duduk.\nAKSI: Tepuk dua kali.\nAKSI: Berdiri diam — tunggu kelas freeze.\nUCAP: "What colour?"\n→ Siswa: "Red!"\nUCAP: "Red!"\nAKSI: Lanjut ke ronde berikutnya — ganti warna sesuai urutan.\nAKSI: Ronde akhir — tambahkan variasi: ucapkan instruksi dengan suara pelan atau minta langkah kecil.`,
          bantuan: [
            'Jika berlari: clap twice → "Walk!"',
            'Jika tidak ada benda: "Good try! Next colour."',
          ],
          cue    : 'Freeze wajib setiap ronde — jangan lanjut sebelum kelas kembali dan diam. Variasi mikro hanya di ronde akhir.',
          darurat: null,
          energi : '🔴',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk dua kali.\nUCAP: "Sit down."\nUCAP: "Hands in lap."\nAKSI: Diam 15 detik.\n---\nUCAP: "Watch me."\nAKSI: Angkat buku milik guru setinggi dada, hadapkan ke kelas.\nUCAP: "This is my book."\nAKSI: Jeda — arahkan tangan ke kelas, isyarat tirukan.\nUCAP: "It is red."\nAKSI: Jeda — arahkan tangan ke kelas, isyarat tirukan.\nUCAP: "This is my book. It is red."\nAKSI: Arahkan tangan ke kelas — isyarat tirukan bersama.\n---\nUCAP: "Open bag slowly."\nAKSI: Tunggu siswa membuka tas.\nUCAP: "Take one thing."\nAKSI: Tunggu siswa mengambil satu benda.\nUCAP: "Close the bag."\nAKSI: Tunggu siswa menutup tas.\nUCAP: "Bag down."\nAKSI: Tunggu semua tas diletakkan di lantai.\n---\nAKSI: Angkat pensil milik guru setinggi dada, hadapkan ke kelas.\nUCAP: "This is my pencil."\nAKSI: Jeda — arahkan tangan ke kelas, isyarat tirukan.\nUCAP: "It is yellow."\nAKSI: Jeda — arahkan tangan ke kelas, isyarat tirukan.\nUCAP: "This is my pencil. It is yellow."\nAKSI: Arahkan tangan ke kelas — isyarat tirukan bersama.`,
          bantuan: null,
          cue    : 'Diam 15 detik dulu setelah cooldown — jangan terburu masuk modeling. Tas ditutup dan diletakkan sebelum tampil — fokus ke speaking.',
          darurat: null,
          energi : '⚪',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Panggil 4–5 siswa ke depan.\nUCAP: "Face the class."\nUCAP: "Ready?"\nAKSI: Jeda 2–3 detik sebelum siswa mulai — beri waktu stabil.\nAKSI: Dekatkan jari telunjuk ke bibir — ucapkan contoh dengan suara pelan.\nUCAP: "When your friend finishes — say quietly: Good job!"\n→ Siswa: "This is my [benda]. It is [warna]."`,
          bantuan: [
            'Jika diam: bisik "This is my..."',
            'Jika lupa warna: tunjuk kartu di papan.',
            'Jika hanya sebut warna: angguk dan model kalimat penuh — ucap \'This is my book. It is red.\' lalu isyarat ke siswa untuk mengulangi.',
          ],
          cue    : 'Jeda kecil sebelum siswa tampil — beri anak pemalu 1 detik ekstra untuk stabil.',
          darurat: null,
          energi : '🟠',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Turn to your partner."\nUCAP: "Small voice — like this."\nAKSI: Dekatkan jari telunjuk ke bibir — ucapkan contoh dengan suara sangat pelan.\nUCAP: "Show one thing."\nAKSI: Tunggu 1 detik.\nUCAP: "Say the colour."\nAKSI: Tunggu 1 detik.\nUCAP: "Then switch."\nUCAP: "3… 2… 1… eyes here."\nAKSI: Tepuk 1 kali — berdiri diam.\nAKSI: Tunggu sampai semua siswa kembali fokus ke guru.`,
          bantuan: null,
          diferensiasi: {
            needHelp: 'Satu kata saja "Red!" — boleh lihat kartu di papan.',
            ready   : 'Kalimat penuh "This is my pencil. It is yellow." — boleh tanya partner "What colour?" — coba "My bag is blue and green."',
          },
          cue    : 'Aktivitas ini hanya 30–45 detik — jaga tempo, jangan biarkan meluas.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L10 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk semua kartu di papan.\nUCAP: "Look at all these colours!"\nAKSI: Tunjuk salah satu kartu warna di papan.\nUCAP: "My favourite colour is blue!"\nUCAP: "Point high — your favourite!"\nAKSI: Tunggu siswa menunjuk kartu warna pilihan mereka.\nUCAP: "Now say your favourite colour!"\n→ Siswa: "My favourite colour is [warna]!"\nAKSI: Panggil 4–5 siswa secara bergantian — jaga tempo cepat, satu siswa per giliran.`,
          bantuan: 'Jika diam: tunjuk 2 kartu → "This? Or this?"',
          cue    : null,
          darurat: null,
          energi : '🟡',
        },

        // L11 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Now — a song!"\nAKSI: Rentangkan kedua tangan ke atas membentuk lengkungan — gerakkan dari kiri ke kanan.\nUCAP: "Rainbow colours!"\nAKSI: Jika ada kartu pink — tempel sebentar di papan. Jika tidak ada, lanjut.\nUCAP: "Listen first."\nAKSI: Nyanyikan lagu dengan nada pelan dan tempo lambat.\nUCAP: "Red and yellow and pink and green, orange and purple and blue. I can sing a rainbow, sing a rainbow, sing a rainbow too!"\nUCAP: "Together — just the colours!"\nAKSI: Tepuk 1 kali — berdiri diam.\nAKSI: Tunggu kelas tenang — minimal 3 detik.`,
          bantuan: null,
          cue    : 'Gesture besar santai — tidak harus tunjuk semua kartu presisi. Lagu penutup = shared emotional ending, bukan akurasi drill.',
          darurat: null,
          energi : '🟠',
        },

        // L12 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Hands down."\nUCAP: "Quiet voice."\nUCAP: "Wonderful!"\nUCAP: "You know your colours."\nUCAP: "Soft goodbye."\nAKSI: Dekatkan jari telunjuk ke bibir — ucapkan kalimat berikut dengan suara pelan sebagai model.\nUCAP: "Goodbye, everyone!"\nUCAP: "See you next time!"\n→ Siswa: "Goodbye, teacher! See you!"`,
          bantuan: 'Jika diam: lambai tangan → "Good-bye..." menggantung.',
          cue    : 'Ucapkan "Soft goodbye" dulu sebelum chorus — set volume penutup yang tenang.',
          darurat: null,
          energi : '🔵',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kumpulkan semua kartu warna. AKSI: Minta semua siswa menutup tas. AKSI: Catat siswa yang kesulitan warna tertentu — orange/purple/green sering tertukar. AKSI: Catat siswa yang tidak mau tampil show and tell. AKSI: Catat siswa yang tidak ikut bernyanyi. AKSI: Catat siswa yang sulit kembali freeze setelah aktivitas gerak.`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_05;
