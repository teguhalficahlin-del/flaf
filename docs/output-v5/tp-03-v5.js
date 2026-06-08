/**
 * =============================================================
 * FLAF — TP 3 (Classroom Instructions)
 * File: tp-03-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp03-v2.txt
 * Generated: 2026-05-25
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_03 = {

  id       : 'tp-03',
  pdf_ref  : 'Modul_Ajar_V3_TP03_Classroom_Instructions.docx',
  nomor    : 3,
  kelas    : 1,
  nama     : 'Classroom Instructions',
  tema     : 'Interaksi Sosial Dasar',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat merespons instruksi satu langkah (sit down, stand up, open your book, close your book, listen, look) dengan tindakan yang benar.',
    'Peserta didik dapat merespons instruksi dua langkah sederhana (open your book and read, listen and repeat) dengan urutan tindakan yang tepat.',
    'Peserta didik dapat mengucapkan instruksi kelas dasar untuk memimpin teman dalam aktivitas terbimbing.',
  ],
  vocab    : ['sit down', 'stand up', 'open', 'close', 'listen', 'look',
              'repeat', 'read', 'write', 'draw', 'stop', 'go'],
  persiapan: ['Kartu instruksi bergambar 6 perintah kelas'],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp03-close-book.png', label: 'Close Book' },
    { file: 'tp03-draw.png',       label: 'Draw' },
    { file: 'tp03-listen.png',     label: 'Listen' },
    { file: 'tp03-look.png',       label: 'Look' },
    { file: 'tp03-open-book.png',  label: 'Open Book' },
    { file: 'tp03-write.png',      label: 'Write' },
  ],

  checklist: [
    'Kartu instruksi bergambar x6 (listen/look/write/open/close/draw) tersedia sebelum kelas masuk',
    'Poster TPR tersedia sebelum kelas masuk',
    'Buku siswa sudah di atas meja sebelum kelas mulai — cek sebelum Layar 0',
    'Layar 0 dilakukan sebelum kelas resmi dimulai',
    'Tidak mulai Layar 1 sebelum kelas benar-benar tenang (Layar 0)',
    'Gerakan dilakukan sebelum kata di setiap instruksi baru — prinsip TPR (Layar 1–4)',
    '"Careful body. Stay in your space." diucapkan sebelum putaran cepat (Layar 1)',
    'Freeze dan tunjuk mata setelah putaran cepat — tunggu diam total (Layar 1)',
    'Micro-drill dilakukan setelah Gelombang 1 sebelum lanjut Gelombang 2 (Layar 3)',
    'Pastikan mayoritas sudah mapping sebelum lanjut Gelombang 2 (Layar 3)',
    'Jeda 1 detik setelah "Close your book" — beri waktu transisi motorik (Layar 4)',
    'Semua 6 kartu ditempel di papan sebelum Drill dimulai (Layar 5)',
    'Putaran bisik dilakukan sebelum putaran super cepat (Layar 5)',
    'Demo Simon Says dilakukan sebelum permainan dimulai (Layar 6)',
    'Jika waktu ≤10 menit saat masuk Layar 6: lewati Simon Says, lanjut ke Layar 9',
    'Simon Says dibatasi 8–10 instruksi — berhenti saat kelas masih antusias (Layar 7)',
    'Micro-reset dilakukan sebelum masuk Instruksi Dua Langkah (Layar 8)',
    '"Write" selalu dimodelkan di udara, bukan di buku — kelas 1 sangat literal (Layar 8)',
    'Kartu instruksi diberikan ke tangan siswa yang maju sebagai prop (Layar 9)',
    'Siswa cukup tunjuk kartu — guru yang ucapkan instruksi segera (Layar 9)',
    'Tampil sebagai pemimpin dibatasi 2–3 siswa, 15–20 detik per siswa (Layar 9)',
    'Prioritas partner practice: noise → semua ikut → baru diferensiasi level (Layar 10)',
    'Guru keliling selama partner practice — proximity control (Layar 10)',
    'Partner practice dibatasi 3–4 menit (Layar 10)',
    'Model "Soft goodbye" sebelum chorus penutup (Layar 13)',
    'Kumpulkan kartu instruksi setelah sesi selesai',
    'Simpan poster TPR setelah sesi selesai',
    'Catat siswa yang tidak merespons gerakan TPR',
    'Catat siswa yang tidak bisa bedakan "Simon says" vs tidak',
    'Catat siswa yang tidak mau / tidak bisa maju sebagai pemimpin',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 ⚪',
    'L3 🟡',
    'L4 🟡',
    'L5 🟡',
    'L6 ⚪',
    'L7 🔴',
    'L8 ⚪ → 🟡',
    'L9 🟠',
    'L10 🟡',
    'L11 ⚪ → 🔴',
    'L12 🔵',
    'L13 🔵',
    'L14 🔵',
  ],

  catatan: {
    risiko: [
      'L7 Simon Says — berhenti saat kelas masih antusias, disiplin 8–10 instruksi',
      'L10 partner practice — prioritas: noise → semua ikut → baru diferensiasi',
      'L9 siswa jadi pemimpin — guru pegang kendali verbal, siswa hanya tunjuk kartu',
    ],
    autonomy: [
      'Jika kelas sudah melakukan semua 6 gerakan dengan benar di Putaran 2 (L5), boleh langsung lanjut ke Simon Says',
      'Jika kelas antusias di L9, tambah satu putaran sebelum diferensiasi',
      'Jika waktu terbatas, L8 cukup 2 contoh saja',
      'Jika kelas cepat tenang di L11, langsung mulai review tanpa tunggu hitungan selesai',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas — cek semua siswa sudah duduk dan buku ada di atas meja. UCAP: "Good morning, everyone! How are you today?" AKSI: Tunggu respons kelas. UCAP: "I'm fine, thank you!" UCAP: "Today we learn classroom instructions." UCAP: "Are you ready?" AKSI: Jika kelas belum merespons: berdiri diam — ulangi "Are you ready?" sekali.`,
    bantuan: null,
    cue    : 'Layar ini pendek dan wajib. Fungsinya mengunci perhatian sebelum aktivitas instruksi dan gerakan dimulai. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam. Jangan mulai Layar 1 sebelum kelas benar-benar tenang.',
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
          teks   : `AKSI: Berdiri di depan kelas. Langsung lakukan gerakan tanpa penjelasan dulu. UCAP: "Stand up!" AKSI: Berdiri. UCAP: "Sit down!" AKSI: Duduk. UCAP: "Stand up!" AKSI: Berdiri. UCAP: "Sit down!" AKSI: Duduk. --- AKSI: Sebelum putaran cepat — tunjuk ruang tubuh sendiri. UCAP: "Careful body." UCAP: "Stay in your space." --- AKSI: Putaran ketiga — lebih cepat. --- AKSI: Setelah putaran cepat — angkat tangan → diam total → tunjuk mata sendiri. UCAP: "Freeze." UCAP: "Eyes on me."`,
          bantuan: null,
          cue    : 'Gerakan sebelum kata — siswa ikuti secara naluriah. Jika siswa tertawa saat putaran cepat: itu bagus, tanda mereka terlibat. Tunggu sampai semua benar-benar diam sebelum lanjut.',
          darurat: null,
          energi : '🔴',
        },

        // L2 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Angkat tangan. UCAP: "Sit nicely." AKSI: Tunggu sampai semua siswa duduk tenang 2–3 detik. UCAP: "Eyes here." UCAP: "Good!" UCAP: "You know 'stand up' and 'sit down'." UCAP: "Now let us learn more instructions!" AKSI: Angkat kartu instruksi pertama ke depan kelas.`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '⚪',
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
          teks   : `UCAP: "Books on the table." AKSI: Lanjut jika lebih dari separuh siswa sudah siap — jangan tunggu semua sempurna. AKSI: Angkat kartu instruksi setinggi dada, hadapkan ke kelas — lakukan gerakan dulu sebelum ucapkan kata. UCAP: "Listen." AKSI: Tunjuk telinga. UCAP: "Look." AKSI: Tunjuk mata. UCAP: "Write." AKSI: Gerak menulis di udara. AKSI: Ulangi 3 kartu ini sekali lagi dengan tempo sedikit lebih cepat. → Siswa melakukan gerakan — tidak perlu mengucapkan kata.`,
          bantuan: [
            'Jika siswa tidak ikut: dekati, tunjuk kartu + lakukan gerakan perlahan → ajak ikut.',
            'Jika siswa menulis di meja: tunjuk udara → "In the air! Like this."',
          ],
          cue    : 'Gerakan dulu, kata belakangan — siswa mengikuti gerakan sebelum memahami kata. Tunjukkan gerakan di udara sebagai contoh — siswa kelas 1 cenderung meniru persis apa yang dilihat. Pastikan mayoritas sudah menghubungkan gerakan dan kata sebelum lanjut Gelombang 2.',
          darurat: null,
          energi : '🟡',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Lanjut 3 kartu berikutnya — pola sama. UCAP: "Open your book." AKSI: Buka buku. UCAP: "Close your book." AKSI: Tutup buku — jeda 1 detik. UCAP: "Draw." AKSI: Gerak menggambar di udara. AKSI: Latihan singkat — ulangi 3 kartu ini sekali lagi. → Siswa melakukan gerakan mengikuti guru.`,
          bantuan: [
            'Jika siswa tidak ikut: dekati, tunjuk kartu + lakukan gerakan perlahan → ajak ikut.',
            'Jika ada siswa masih cari buku: biarkan, fokus ke mayoritas yang sudah siap.',
          ],
          cue    : 'Jeda 1 detik setelah "Close your book" — beri waktu transisi motorik.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tempel semua 6 kartu di papan. AKSI: Angkat kartu satu per satu setinggi dada, hadapkan ke kelas — minta siswa melakukan gerakan. UCAP: "Listen and do! Ready?" --- AKSI: Putaran 1 — pelan. UCAP: "Listen... Look... Write... Open your book... Close your book... Draw!" --- AKSI: Putaran 2 — cepat. UCAP: "Listen! Look! Write! Open! Close! Draw!" --- AKSI: Putaran 3 — bisik. Bisikkan instruksi satu per satu — siswa tetap lakukan gerakan. UCAP: "Ready? Fast, not loud." --- AKSI: Putaran 4 — super cepat, 4 instruksi saja. UCAP: "Listen! Open! Draw! Close!" → Siswa melakukan gerakan serentak.`,
          bantuan: 'Jika siswa salah gerakan: lakukan ulang perlahan + tunjuk kartu — jangan koreksi verbal, cukup tunjukkan gerakan yang benar.',
          cue    : 'Putaran bisik adalah tanda pergantian mode sebelum putaran super cepat. Batasi Putaran 4 hanya 4 instruksi — jaga rasa berhasil siswa, hindari siswa kelelahan.',
          darurat: null,
          energi : '🟡',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan sekali. UCAP: "Hands down." UCAP: "Eyes on me." AKSI: Tunggu sampai seluruh kelas fokus. UCAP: "Stay in your space." UCAP: "Hands to yourself." --- UCAP: "Simon says? Do it!" UCAP: "No Simon says? Freeze!" --- AKSI: Berdiri — peragakan aturan Simon says. UCAP: "Simon says, stand up!" UCAP: "Good — Simon says!" AKSI: Tetap berdiri — peragakan aturan tanpa Simon says. UCAP: "Sit down!" UCAP: "Freeze! No Simon says!" AKSI: Tunjuk telinga — peragakan aturan Simon says sekali lagi. UCAP: "Simon says, listen!" UCAP: "Good!"`,
          bantuan: null,
          cue    : 'Turunkan tangan perlahan dan tunjuk mata sendiri saat menenangkan kelas — kelas perlu momen hening sebelum aturan permainan dijelaskan.',
          darurat: 'Waktu ≤10 menit → lewati Simon Says, lanjut ke Layar 9 (Siswa Jadi Pemimpin).',
          energi : '⚪',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Mulai permainan. Campur instruksi dengan dan tanpa "Simon says". AKSI: Lakukan 8–10 instruksi dengan tempo cepat dan mengejutkan. Contoh urutan: → "Simon says, stand up!" → "Simon says, listen!" → "Sit down!" [jebakan] → "Simon says, open your book!" → "Write!" [jebakan] → "Simon says, close your book!" Konsekuensi jika salah: "Oops — hands on head." [lanjut segera — jangan sorot siswa yang salah] --- AKSI: Setelah 8–10 instruksi — tepuk tangan sekali. UCAP: "Great job!" AKSI: Jeda 2 detik. UCAP: "Sit down." AKSI: Tunggu sampai semua siswa duduk. AKSI: Lanjut ke Layar 8.`,
          bantuan: [
            'Jika kelas selalu bergerak tanpa filter: perlambat → ucapkan "Simon says?" dengan jeda panjang sebelum instruksi tanpa "Simon says".',
            'Jika kelas terlalu ramai: tepuk tangan dua kali → "Hands down. Eyes on me."',
          ],
          cue    : 'Konsekuensi cukup ringan — jangan berhenti memastikan semua menjalankan. Simon Says hidup dari ritme permainan, bukan ketepatan memberi hukuman. Berhenti saat kelas masih bersemangat.',
          darurat: null,
          energi : '🔴',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Angkat telapak tangan menghadap bawah. UCAP: "Sit down, everyone." AKSI: Tunggu sampai semua siswa duduk. UCAP: "Sit nicely." UCAP: "Eyes here." AKSI: Angkat telapak tangan menghadap bawah — tunggu sampai kelas hening 3 detik. AKSI: Angkat dua jari sebagai penanda "dua langkah". UCAP: "Now — two steps!" UCAP: "Listen carefully." --- AKSI: Pola bertahap — ucapkan langkah pertama, jeda, langkah kedua, ulangi gabung. UCAP: "Open your book..." AKSI: Tunggu siswa buka buku. UCAP: "...and look." AKSI: Tunjuk mata. UCAP: "Open your book and look." --- UCAP: "Listen..." AKSI: Tunjuk telinga. UCAP: "...and write." AKSI: Gerak menulis di udara. UCAP: "Listen and write." --- UCAP: "Open your book..." AKSI: Buka buku. UCAP: "...and write." AKSI: Gerak menulis di udara. UCAP: "Open your book and write." → Siswa melakukan dua gerakan berurutan.`,
          bantuan: 'Jika siswa hanya lakukan satu gerakan: ucapkan instruksi kedua lagi dengan penekanan → "AND... write!"',
          cue    : 'Saat memperagakan "write" — tetap di udara, bukan di buku. Kelas 1 cenderung meniru persis apa yang dilihat.',
          darurat: null,
          energi : '⚪ → 🟡',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Ambil satu kartu instruksi. AKSI: Angkat kartu setinggi dada, hadapkan ke kelas — minta kelas melakukan gerakan. AKSI: Ulangi — angkat kartu + minta kelas lakukan gerakan sekali lagi. UCAP: "Now YOU are the teacher!" UCAP: "Watch me first." --- AKSI: Panggil satu siswa sukarela maju. AKSI: Berikan kartu instruksi ke tangan siswa. AKSI: Hadapkan siswa ke kelas. UCAP: "Show the card to the class!" --- AKSI: Ucapkan instruksi sesuai kartu yang ditunjuk siswa — langsung, tanpa menunggu. → Kelas melakukan gerakan. AKSI: Panggil 2–3 siswa bergantian — maksimal 15–20 detik per siswa.`,
          bantuan: 'Jika siswa maju diam: bisik nama instruksi → beri waktu 5 detik → guru ucapkan sendiri sambil siswa tetap tunjuk kartu.',
          cue    : 'Siswa cukup TUNJUK kartu — guru yang ucapkan instruksi segera. Jangan ada jeda sosial antara tunjuk kartu dan instruksi guru.',
          darurat: null,
          energi : '🟠',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Angkat telapak tangan menghadap bawah. UCAP: "Sit down, everyone." AKSI: Tunggu sampai semua siswa duduk. AKSI: Tepuk tangan dua kali. AKSI: Tunggu sampai kelas tenang. UCAP: "Great!" AKSI: Jeda sebentar. UCAP: "Now practise with your partner. Small voice." AKSI: Tunggu sampai kelas paham — tunjuk teman sebelah sebagai model. UCAP: "Partner A — three instructions. Stop. Then Partner B." AKSI: Arahkan tangan bergantian kiri-kanan sebagai model giliran. UCAP: "Need help? Look at the cards. Ready? No cards!" AKSI: Keliling selama partner practice — prioritaskan: kebisingan (jika naik, tepuk tangan sekali dan bisik "small voice"), semua siswa ikut, baru diferensiasi level.`,
          bantuan: 'Jika kelas gaduh: tepuk tangan dua kali → "Hands down. Eyes on me." → tunggu sampai kelas tenang → lanjut.',
          diferensiasi: {
            needHelp: 'Lihat kartu saat memberi instruksi — cukup 1 instruksi per giliran — guru bantu dengan bisik kata instruksi.',
            ready   : 'Tanpa kartu, 3 instruksi per giliran — jika sudah lancar: coba dua langkah "Open your book and write!" — jika sangat lancar: tambahkan "Simon says".',
          },
          cue    : 'Batas waktu 3–4 menit. Naik satu level per satu — jangan tumpuk sekaligus. Guru yang terus bergerak mendekati siswa lebih efektif daripada sering menegur dari jauh.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L11 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan sekali. UCAP: "Freeze." UCAP: "Hands down." UCAP: "3... 2... 1..." UCAP: "Last round! Listen and do!" --- UCAP: "Stand up!" AKSI: Berdiri. UCAP: "Listen." AKSI: Tunjuk telinga. UCAP: "Look." AKSI: Tunjuk mata. UCAP: "Sit down!" AKSI: Duduk. UCAP: "Close your book." AKSI: Tutup buku. → Siswa melakukan gerakan serentak mengikuti instruksi guru.`,
          bantuan: null,
          cue    : 'Jika kelas sudah cepat tenang — boleh langsung mulai pengulangan instruksi terakhir tanpa tunggu hitungan selesai.',
          darurat: null,
          energi : '⚪ → 🔴',
        },

        // L12 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Beri pujian singkat. Tunjuk kartu-kartu instruksi di papan. UCAP: "Well done!" UCAP: "Look at all these instructions." UCAP: "Which one is your favourite? 3... 2... 1... point!" → Siswa tunjuk satu kartu instruksi favorit serentak saat hitungan selesai — cukup menunjuk, tidak perlu mengucapkan.`,
          bantuan: 'Jika siswa bingung: guru tunjuk satu kartu → "This one?" → siswa angguk atau geleng.',
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Berdiri di depan kelas. Lambaikan tangan. UCAP: "Excellent work today!" UCAP: "You know classroom instructions in English!" AKSI: Turunkan volume — guru ucap pelan sebagai model, siswa ikut. UCAP: "Soft goodbye..." UCAP: "Goodbye, everyone! See you next time!" AKSI: Ajak seluruh kelas mengucapkan bersama. → Siswa: "Goodbye, teacher! See you!"`,
          bantuan: 'Jika diam: mulai lambai tangan → ucap "Good-bye..." menggantung.',
          cue    : 'Tunjukkan volume "Soft goodbye" dulu sebelum ucap bersama — cegah kelas semakin gaduh di penutup.',
          darurat: null,
          energi : '🔵',
        },

        // L14 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kumpulkan kartu instruksi. AKSI: Simpan poster. --- AKSI: Catat siswa yang: → Tidak merespons gerakan — perlu observasi pemahaman instruksi lisan → Tidak bisa bedakan "Simon says" vs tidak — perlu latihan menyimak terfokus → Tidak mau / tidak bisa maju sebagai pemimpin — catat untuk dorongan bertahap`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_03;
