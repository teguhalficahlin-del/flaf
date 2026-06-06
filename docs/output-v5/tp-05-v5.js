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
    teks   : `AKSI: Berdiri di depan kelas. Kartu warna disimpan di meja — belum ditunjukkan. Tunggu semua duduk tenang. UCAP: "Good morning, everyone! How are you today?" AKSI: Tunggu respons kelas. UCAP: "I'm fine, thank you!" UCAP: "Today is a very colourful day!" UCAP: "Are you ready?" AKSI: Tunggu respons — berdiri diam jika kelas belum fokus.`,
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
          teks   : `AKSI: Tunggu semua duduk tenang. UCAP: "Good morning!" UCAP: "Colourful day today!" AKSI: Ambil satu kartu warna. Tunjuk ke kelas. UCAP: "Look first." AKSI: Jeda 3 detik. UCAP: "What colour is this?" AKSI: Beri 2 detik. Lanjut. UCAP: "Red!" UCAP: "This is red." AKSI: Tunjuk kartu kedua. UCAP: "And this one?" AKSI: Jeda. UCAP: "Blue!" UCAP: "This is blue."`,
          bantuan: null,
          cue    : 'Jeda 3 detik setelah tunjuk kartu pertama — beri siswa waktu observasi sebelum tanya. Jangan langsung ucap warnanya.',
          darurat: null,
          energi : '🟡',
        },

        // L2 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — GELOMBANG 1 UCAP: "Red. Blue. Green. Yellow." 🗣 TOGETHER → Siswa: "Red! Blue! Green! Yellow!" UCAP: "Good!" UCAP: "Now four more colours." 👂 LISTEN FIRST — GELOMBANG 2 UCAP: "Orange. Purple. Black. White." 🗣 TOGETHER → Siswa: "Orange! Purple! Black! White!" 🗣 FULL 8 UCAP: "All together!" → Siswa: "Red! Blue! Green! Yellow! Orange! Purple! Black! White!" 🔁 Putaran kedua — whisper voice.`,
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
          teks   : `AKSI: Tunjuk kartu kiri ke kanan — satu putaran predictable. UCAP: "What colour?" [siswa jawab bersama] AKSI: Setelah satu putaran. UCAP: "Now — surprise cards!" AKSI: Tunjuk 3–4 kartu secara acak dan cepat.`,
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
          teks   : `AKSI: Tunjuk kartu satu per satu. UCAP: "What colour?" [siswa jawab] → Guru: "It is [warna]."`,
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
          teks   : `AKSI: Tepuk tangan sekali. UCAP: "Hands down." UCAP: "Eyes on me." UCAP: "Walk, don't run. Only touch near you." AKSI: Demo stop signal. UCAP: "Come back… freeze!" UCAP: "Clap twice — come back and freeze." AKSI: Demo urutan menyentuh lalu kembali. UCAP: "Watch." UCAP: "Touch, come back, freeze." UCAP: "Ready?"`,
          bantuan: null,
          cue    : '"Come back" dulu, baru "freeze" — urutan ini penting. Tunjuk lantai = sinyal kembali ke tempat. Pilih benda yang benar-benar dekat untuk demo — model jarak pendek.',
          darurat: 'Waktu ≤10 menit → lewati sentuh warna, lanjut ke Layar 7.',
          energi : '⚪',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Mulai aktivitas. 🔁 5–6 warna. Urutan: red → blue → green → yellow. UCAP: "Touch something red in the room!" AKSI: Setelah kembali → clap twice → freeze. UCAP: "What colour?" → "Red!" AKSI: Ronde akhir — variasi mikro satu kali: "Touch something blue… quietly!" atau "Tiny steps!"`,
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
          teks   : `AKSI: Clap twice. UCAP: "Sit down." UCAP: "Hands in lap." AKSI: Diam 15 detik. UCAP: "Watch me." AKSI: Guru model — bertahap: → "This is my [benda]." [jeda → kelas tirukan] → "It is [warna]." [jeda → kelas tirukan] → "This is my [benda]. It is [warna]." [kelas tirukan bersama] AKSI: Ulangi dengan benda kedua. UCAP: "Open bag slowly." UCAP: "Take one thing." UCAP: "Close the bag." UCAP: "Bag down." AKSI: Guru model sekali lagi: → "This is my [benda]." [ulang] → "It is [warna]." [ulang] → gabung sekali.`,
          bantuan: null,
          cue    : 'Diam 15 detik dulu setelah cooldown — jangan terburu masuk modeling. Tas ditutup dan diletakkan sebelum tampil — fokus ke speaking.',
          darurat: null,
          energi : '⚪',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Panggil 4–5 siswa. Maksimal 15 detik per siswa. UCAP: "Face the class." UCAP: "Ready?" AKSI: Jeda kecil — beri anak pemalu 1 detik ekstra untuk stabil. AKSI: Model volume pelan ke kelas. UCAP: "When your friend finishes — say quietly: 'Good job!'" → Siswa: "This is my [benda]. It is [warna]." [Jika hanya sebut warna: terima — model kalimat penuh.]`,
          bantuan: [
            'Jika diam: bisik "This is my..."',
            'Jika lupa warna: tunjuk kartu di papan.',
          ],
          cue    : 'Jeda kecil sebelum siswa tampil — beri anak pemalu 1 detik ekstra untuk stabil.',
          darurat: null,
          energi : '🟠',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Turn to your partner." UCAP: "Small voice — like this." AKSI: Guru model volume kecil. UCAP: "Show one thing." UCAP: "Say the colour." UCAP: "Then switch." UCAP: "3… 2… 1… eyes here."`,
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
          teks   : `AKSI: Tunjuk semua kartu di papan. UCAP: "Look at all these colours!" AKSI: Guru demo. UCAP: "My favourite colour is..." UCAP: "Point high — your favourite!" UCAP: "Now say your favourite colour!" → Siswa: "My favourite colour is [warna]!" 🔁 4–5 siswa. Tempo cepat.`,
          bantuan: 'Jika diam: tunjuk 2 kartu → "This? Or this?"',
          cue    : null,
          darurat: null,
          energi : '🟡',
        },

        // L11 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Now — a song!" AKSI: Gesture pelangi dengan kedua tangan. UCAP: "Rainbow colours!" AKSI: Jika ada kartu pink: tempel sebentar — jika tidak ada: skip. UCAP: "Listen first." AKSI: Guru nyanyi: "Red and yellow and pink and green, orange and purple and blue. I can sing a rainbow, sing a rainbow, sing a rainbow too!" UCAP: "Together — just the colours!"`,
          bantuan: null,
          cue    : 'Gesture besar santai — tidak harus tunjuk semua kartu presisi. Lagu penutup = shared emotional ending, bukan akurasi drill.',
          darurat: null,
          energi : '🟠',
        },

        // L12 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Hands down." UCAP: "Quiet voice." UCAP: "Wonderful!" UCAP: "You know your colours." UCAP: "Soft goodbye..." AKSI: Guru ucap pelan sebagai model, siswa ikut. UCAP: "Goodbye, everyone!" UCAP: "See you next time!" 🗣 TOGETHER → Siswa: "Goodbye, teacher! See you!"`,
          bantuan: 'Jika diam: lambai tangan → "Good-bye..." menggantung.',
          cue    : 'Ucapkan "Soft goodbye" dulu sebelum chorus — set volume penutup yang tenang.',
          darurat: null,
          energi : '🔵',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kumpulkan dan simpan semua material: → Kumpulkan kartu warna → Siswa tutup tas AKSI: Catat siswa yang: → Kesulitan warna tertentu — orange/purple/green sering tertukar → Tidak mau tampil show and tell → Tidak ikut nyanyi → Sulit kembali freeze setelah aktivitas gerak`,
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
