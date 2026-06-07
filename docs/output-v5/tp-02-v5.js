/**
 * =============================================================
 * FLAF — TP 2 (Introducing Myself)
 * File: tp-02-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp02-v2.txt
 * Generated: 2026-05-25
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_02 = {

  id       : 'tp-02',
  pdf_ref  : 'Modul_Ajar_V3_TP02_Introducing_Myself.docx',
  nomor    : 2,
  kelas    : 1,
  nama     : 'Introducing Myself',
  tema     : 'Interaksi Sosial Dasar',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menyebutkan nama diri sendiri menggunakan struktur "My name is ..." atau "I am ..." dengan lafal yang jelas.',
    'Peserta didik dapat menyebutkan usia menggunakan struktur "I am ... years old" dan merespons pertanyaan "How old are you?"',
    'Peserta didik dapat memperkenalkan diri lengkap (nama + usia) kepada teman dan guru dalam situasi bermain peran.',
  ],
  vocab    : ['name', 'my name is', 'I am', 'years old', 'how old',
              'nice to meet you', 'what is your name'],
  persiapan: ['Kartu perkenalan bergambar 3 kartu'],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp02-introduce-boy.png',  label: 'Introduce Boy' },
    { file: 'tp02-introduce-girl.png', label: 'Introduce Girl' },
    { file: 'tp02-name-tag.png',       label: 'Name Tag' },
  ],

  checklist: [
    'Papan tulis + spidol tersedia sebelum kelas masuk',
    'Kertas name tag kosong tersedia (atau name tag pre-printed sebagai cadangan)',
    '2 boneka tangan Kiki dan Momo tersedia',
    'Layar 0 dilakukan sebelum kelas resmi dimulai',
    'Tidak memakai boneka di Layar 0 — fokus pada kontak mata dan senyum hangat',
    'Tulis nama guru di papan sambil berbicara — pelan dan jelas (Layar 1)',
    'Tunjuk nama di papan saat mengucapkannya (Layar 1)',
    'Tunggu 2 detik setelah "What is my name?" sebelum modeling (Layar 2)',
    'Tunjuk satu siswa lalu gerakkan tangan mengajak seluruh kelas saat "My name is..." (Layar 4)',
    'Guru keliling dan bantu satu per satu saat name tag (Layar 5)',
    'Tunjuk garis kosong di name tag saat ucap instruksi (Layar 5)',
    'Siswa yang sudah selesai diminta trace nama sambil tunggu teman (Layar 5)',
    'Angkat jari sesuai angka usia saat setiap contoh "I am ... years old" (Layar 7)',
    'Tunjuk siswa dan tunggu saat ucap "I am..." — beri waktu melengkapi (Layar 7)',
    'Demo walk and talk dengan boneka dilakukan sekali saja (Layar 8)',
    'Reset kelas dengan tangan naik sebelum jelaskan aturan walk and talk (Layar 9)',
    'Clap twice dipraktikkan bersama kelas sebelum mulai walk and talk (Layar 9)',
    'Jika waktu ≤10 menit sebelum walk and talk: batalkan, siswa perkenalkan ke teman sebelah di tempat',
    'Walk and talk dibatasi 2 menit — 3 teman berbeda (Layar 10)',
    'Demo guru dilakukan sekali lagi sebelum sesi tampil di depan (Layar 12)',
    'Tepuk tangan bersama kelas setelah demo guru (Layar 12)',
    'Tampil di depan dibatasi 2–3 siswa — jaga tempo penutup (Layar 13)',
    'Tunjuk satu siswa + gesture ajak kelas saat ucap pertanyaan refleksi (Layar 14)',
    'Kumpulkan dan simpan kertas name tag setelah sesi selesai',
    'Hapus tulisan di papan setelah sesi selesai',
    'Catat siswa yang diam saat walk and talk',
    'Catat siswa yang hanya bisa sebut nama, belum kalimat lengkap',
    'Catat siswa yang perlu bantuan menulis name tag',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔵',
    'L2 🟡',
    'L3 🟡',
    'L4 🟡',
    'L5 🟡',
    'L6 🟠',
    'L7 🟠',
    'L8 ⚪',
    'L9 🟡',
    'L10 🟡',
    'L11 🔴',
    'L12 🟡',
    'L13 🟡',
    'L14 🔵',
    'L15 🔵',
    'L16 🔵',
  ],

  catatan: {
    risiko: [
      'L5 & L8: choral response dengan jawaban berbeda (nama/usia) — verifikasi kelas terkendali',
      'L6: tracing nama — verifikasi efektivitas sebagai idle management early finisher',
      'L11: clap twice — verifikasi sebagai stopping signal walk and talk kelas 1',
      'L11 Walk and Talk: "Small voice" wajib diucapkan sebelum mulai — cegah eskalasi noise',
    ],
    autonomy: [
      'Jika kelas belum bisa tulis nama di L5, pakai name tag pre-printed sebagai cadangan',
      'L8: jembatan ke usia cukup singkat — jangan habiskan waktu di transisi',
      'Jika waktu mepet, L12 Diferensiasi cukup 2 menit partner practice',
      'L14: tampil di depan — jika tidak ada volunteer, tunjuk 2 siswa serentak',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Berdiri di depan kelas. Sambut siswa saat masuk dengan senyum dan anggukan sambil mengucapkan "Good morning! Come in, come in!"`,
    bantuan: null,
    cue    : 'Layar ini dilakukan sebelum kelas resmi dimulai. Berbeda dari TP 01 — tidak memakai boneka. Fokus pada kontak mata dan senyum hangat. Jangan skip.',
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
          teks   : `AKSI: Angkat telapak tangan menghadap bawah. UCAP: "Sit down, everyone." AKSI: Tunggu sampai semua siswa duduk. AKSI: Tulis nama guru di papan sambil berbicara — pelan dan jelas. UCAP: "Hello, everyone!" UCAP: "My name is..." UCAP: "Nice to meet you!"`,
          bantuan: null,
          cue    : 'Tunjuk nama di papan saat mengucapkannya.',
          darurat: null,
          energi : '🔵',
        },

        // L2 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk diri sendiri, lalu tunjuk kelas. UCAP: "What is my name?" UCAP: "Your name is...!" UCAP: "Say it with me!" → Siswa: "Your name is...!"`,
          bantuan: [
            'Jika diam: tunjuk nama di papan → ucap "Your name is..." menggantung.',
            'Jika jawab Bahasa Indonesia: angguk, ucapkan dalam Inggris pelan → ajak ikut.',
          ],
          cue    : 'Wait 2 seconds first setelah tanya "What is my name?" — beri siswa kesempatan recall sebelum modeling.',
          darurat: null,
          energi : '🟡',
        },

        // L3 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk diri sendiri, lalu tunjuk kelas bergantian. UCAP: "Now I know your teacher's name." UCAP: "But I don't know your names yet!" UCAP: "Let us learn how to introduce ourselves!"`,
          bantuan: null,
          cue    : null,
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
          teks   : `AKSI: Tulis di papan: My name is ___. Tunjuk papan — ucapkan dulu sendiri, siswa dengarkan. --- AKSI: Minta siswa mendengarkan terlebih dahulu tanpa mengikuti. UCAP: "My name is Budi. My name is Sari. My name is Andi." --- AKSI: Ajak seluruh kelas mengucapkan bersama. UCAP: "Now you! My name is..." → Siswa: "My name is [nama sendiri]."`,
          bantuan: [
            'Jika diam: tunjuk name tag / papan → ucap "My name is..." menggantung → tunjuk siswa.',
            'Jika jawab Bahasa Indonesia: angguk, ucap "My name is..." + nama mereka → ajak ulang.',
          ],
          cue    : 'Tunjuk satu siswa dulu, lalu gerakkan tangan mengajak seluruh kelas saat ucap "My name is..."',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Bagikan kertas name tag. Bantu yang belum bisa menulis — tidak apa-apa kalau belum rapi. AKSI: Minta siswa yang sudah selesai trace nama lagi sampai semua siap. UCAP: "Write your name here. My name is..."`,
          bantuan: 'Jika belum bisa menulis: guru tulis nama di name tag, siswa tempelkan sendiri.',
          cue    : 'Guru keliling dan bantu satu per satu jika perlu. Tunjuk garis kosong di name tag saat ucap instruksi.',
          darurat: null,
          energi : '🟡',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Wear your name tag." AKSI: Tunggu sampai semua siswa memakai name tag. AKSI: Tunjuk name tag sendiri. AKSI: Tunjuk name tag siswa. UCAP: "Great!" UCAP: "Now I know your names." UCAP: "But how old are you? Let us find out!"`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🟠',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk diri sendiri. Angkat jari sesuai jumlah usia yang diucapkan. --- AKSI: Minta siswa mendengarkan terlebih dahulu tanpa mengikuti. UCAP: "How old are you?" AKSI: Angkat 6 jari — jeda sebentar. UCAP: "I am six years old." AKSI: Angkat 7 jari — jeda sebentar. UCAP: "I am seven years old." --- AKSI: Ajak seluruh kelas mengucapkan bersama. UCAP: "How old are you?" UCAP: "I am..." → Siswa: "I am [usia] years old!"`,
          bantuan: [
            'Jika diam: angkat jari sebanyak usia siswa → ucap "I am..." menggantung → tunggu.',
            'Jika jawab angka saja ("six!"): angguk, ucap "I am six years old!" → ajak ulang.',
          ],
          cue    : 'Angkat jari sesuai angka usia saat setiap contoh — gesture ini anchor utama. Tunjuk siswa dan tunggu saat ucap "I am..." — beri waktu melengkapi.',
          darurat: null,
          energi : '🟠',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pegang Kiki dan Momo — satu di setiap tangan. AKSI: Gerakkan Kiki dan Momo saling menghadap lalu peragakan percakapan perkenalan berikut. → Kiki: "Hello! My name is Kiki. I am six years old." → Momo: "Hi! My name is Momo. I am seven years old." --- AKSI: Turunkan boneka. AKSI: Tunjuk papan — pastikan kalimat lengkap tertulis. UCAP: "That is what you will say to your friends. Let us practise!"`,
          bantuan: null,
          cue    : 'Demo dilakukan sekali saja — tunjukkan seluruh interaksi dari salam hingga perkenalan lengkap.',
          darurat: null,
          energi : '⚪',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Angkat tangan — minta siswa tenang dan fokus. UCAP: "Hands down. Eyes on me." --- AKSI: Jelaskan aturan walk and talk dengan singkat. UCAP: "Stand up." UCAP: "Walk." UCAP: "Find a friend." UCAP: "Say hello and introduce yourself." UCAP: "Then find another friend." UCAP: "Three friends total!"`,
          bantuan: null,
          cue    : 'Turunkan tangan perlahan dan tunjuk mata sendiri saat reset — kelas perlu momen hening sebelum aturan dijelaskan. Clap twice = stop and freeze — praktikkan sekali bersama kelas sebelum mulai.',
          darurat: 'Waktu ≤10 menit → batalkan walk and talk, siswa perkenalkan diri ke teman di sebelah saja, duduk di tempat.',
          energi : '🟡',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Beri aba-aba mulai. Pantau kelas — bantu pasangan yang kesulitan. AKSI: Lakukan walk and talk selama 2 menit dengan 3 teman berbeda. --- AKSI: Clap twice untuk berhenti. UCAP: "Go back to your seat." AKSI: Tunggu sampai semua siswa kembali dan duduk.`,
          bantuan: [
            'Jika siswa diam saat bertemu teman: dekati, bisik "Say: Hello! My name is..."',
            'Jika kelas terlalu ramai: clap twice → "Hands down. Eyes on me." — reset sebentar lalu lanjut.',
          ],
          cue    : 'Clap twice untuk berhenti saat waktu habis — signal ini wajib dipraktikkan di Layar 9 sebelum walk and talk dimulai.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Angkat telapak tangan menghadap bawah. UCAP: "Sit down, everyone." AKSI: Tunggu sampai semua siswa duduk. AKSI: Angkat tangan. AKSI: Tepuk 1 kali — berdiri diam. AKSI: Tunggu sampai kelas diam minimal 3 detik. UCAP: "Well done!" AKSI: Jeda sebentar. UCAP: "Now practise with your partner. If you need help, look at the board. If you are ready, try without looking!"`,
          bantuan: null,
          diferensiasi: {
            needHelp: 'Lihat papan saat berbicara — boleh hanya nama saja dulu, usia bisa belakangan — guru duduk dekat dan bantu.',
            ready   : 'Tanpa lihat papan — kalimat lengkap: "My name is ... I am ... years old. Nice to meet you!" — tambahkan "And you? What is your name?" jika sudah lancar.',
          },
          cue    : null,
          darurat: null,
          energi : '🔴',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L12 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan sekali. UCAP: "Look here." AKSI: Tunggu sampai semua siswa menghadap ke depan. UCAP: "Great practice!" AKSI: Jeda sebentar. UCAP: "Now, who wants to introduce themselves to the class? Watch first — I will show you." --- AKSI: Demo sekali lagi secara singkat dan natural. UCAP: "Hello! My name is... Nice to meet you all!"`,
          bantuan: null,
          cue    : 'Tunjuk ke kelas setelah demo selesai → ajak tepuk tangan untuk transisi ke sesi tampil.',
          darurat: null,
          energi : '🟡',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Panggil 2–3 siswa sukarela. Beri tepuk semangat sebelum mulai. AKSI: Batasi sesi tampil untuk 2–3 siswa saja. UCAP: "Come to the front! Introduce yourself!" → Siswa: "Hello! My name is ... I am ... years old. Nice to meet you!"`,
          bantuan: [
            'Jika diam di depan: bisik "Say: Hello! My name is..." pelan — beri waktu.',
            'Jika hanya bilang nama: angguk, ucap "My name is [nama siswa]!" bersama kelas → beri applause.',
          ],
          cue    : 'Keep each turn short — jaga tempo penutup. Jika tidak ada volunteer, tunjuk 2 siswa serentak.',
          darurat: null,
          energi : '🟡',
        },

        // L14 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Beri pujian. Tunjuk name tag beberapa siswa secara acak. UCAP: "Excellent! Now — tell me one friend's name you learned today." → Siswa: sebut satu nama teman yang baru dikenal.`,
          bantuan: [
            'Jika diam: tunjuk name tag teman di sebelah → ucap "His name is..." menggantung.',
            'Jika jawab Bahasa Indonesia: angguk, ucap dalam Inggris → ajak ulang pelan.',
          ],
          cue    : 'Tunjuk satu siswa, lalu gestur tangan mengajak seluruh kelas saat ucap pertanyaan.',
          darurat: null,
          energi : '🔵',
        },

        // L15 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Berdiri di depan kelas. Lambaikan tangan ke seluruh kelas. UCAP: "Great job, everyone! You can introduce yourselves in English!" UCAP: "See you next time." UCAP: "Goodbye!" --- AKSI: Ajak seluruh kelas mengucapkan bersama. → Siswa: "Goodbye, teacher! See you!"`,
          bantuan: 'Jika diam: mulai lambai tangan → ucap "Good-bye..." menggantung.',
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

        // L16 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kumpulkan dan simpan semua material: → Kumpulkan kertas name tag (simpan untuk referensi nama siswa) → Hapus tulisan di papan --- AKSI: Catat siswa yang: → Diam saat walk and talk — tidak mau / tidak bisa berinteraksi → Hanya bisa sebut nama, belum bisa kalimat lengkap → Perlu bantuan menulis name tag`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_02;
