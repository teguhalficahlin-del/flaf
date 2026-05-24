/**
 * =============================================================
 * FLAF — TP 9 (Animals)
 * File: tp-09-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp09-v2.txt
 * Generated: 2026-05-24
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_09 = {

  id       : 'tp-09',
  nomor    : 9,
  kelas    : 0,          // TODO: isi manual
  nama     : 'Animals',
  tema     : 'Alam dan Lingkungan',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menyebut nama 10 hewan umum (cat, dog, bird, fish, rabbit, cow, chicken, elephant, monkey, snake) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan hewan menggunakan "A ... can ..." dan "A ... has ...".',
    'Peserta didik dapat mengidentifikasi hewan berdasarkan deskripsi sederhana yang diucapkan guru.',
  ],
  vocab    : ['cat', 'dog', 'bird', 'fish', 'rabbit', 'cow', 'chicken', 'elephant', 'monkey', 'snake', 'frog', 'lion', 'can', 'has'],
  persiapan: ['Kartu hewan bergambar 10 hewan'],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp09-bird.png',     label: 'Bird' },
    { file: 'tp09-cat.png',      label: 'Cat' },
    { file: 'tp09-dog.png',      label: 'Dog' },
    { file: 'tp09-elephant.png', label: 'Elephant' },
    { file: 'tp09-fish.png',     label: 'Fish' },
    { file: 'tp09-frog.png',     label: 'Frog' },
    { file: 'tp09-lion.png',     label: 'Lion' },
    { file: 'tp09-monkey.png',   label: 'Monkey' },
    { file: 'tp09-rabbit.png',   label: 'Rabbit' },
    { file: 'tp09-snake.png',    label: 'Snake' },
  ],

  checklist: [
    '10 kartu printable tersedia sebelum kelas masuk',
    'Papan tulis: A ___ can ___ dan A ___ has ___ ditulis sebelum kelas masuk',
    'Kartu belum ditunjukkan saat L0–L1 (hook suara dulu)',
    'Layar 0 dilakukan sebelum kelas resmi dimulai',
    'Jika kelas diam total di L1: guru jawab sendiri dan lanjut',
    'L2: satu tangan tunjuk kartu, satu tangan gestur — bersamaan',
    'Fish di L3: angkat bahu + senyum + lanjut — jangan buka diskusi',
    'Reactivation gelombang 1 dilakukan sebelum gelombang 2 masuk (L4)',
    'Elephant diucapkan 2x suku kata terpisah sebelum kelas ikut (L4)',
    'Fase C L5: stop setelah 5 kartu — jangan perpanjang speed round',
    'Reset L6 dilakukan — tidak diskip',
    'L6: kelas freeze + jeda 3 detik sebelum lanjut ke struktur',
    'L7: tiga contoh "can" oleh guru dulu — kelas tidak ditanya',
    'L8: production target hanya bird dan lion — sisanya repeat after me',
    '"An elephant" (bukan "A elephant") diucapkan natural di L9',
    'Gestur fins dan long nose dibesar-besarkan di L9',
    'Jika waktu ≤10 menit saat L10: skip ke L11 langsung',
    'Demo guru (snake clue) dilakukan sebelum demo partner (L10)',
    'Demo partner: guru pilih siswa langsung — bukan tanya siapa mau maju (L10)',
    'Instruksi 3 hal selesai sebelum kartu dibagikan (L10)',
    'Distribusi kartu dalam diam — tidak ada instruksi baru saat distribusi (L10)',
    'Stop signal dilatih 1x sebelum "Go" (L10)',
    'Checkpoint switch dilakukan di ±90 detik (L10)',
    'Guru tidak koreksi kalimat saat practice berlangsung (L10)',
    'L11: putaran 1 lambat dulu — baru putaran 2 cepat',
    'Exit ticket: 1 kartu, 1 output, 30 detik — tidak diperluas (L12)',
    'Terima tulisan, huruf awal, atau gambar di exit ticket (L12)',
    'Setiap siswa sudah produksi minimal 1 output sepanjang sesi',
  ],

  energi_map: [
    'L0 🔵',
    'L1 🔴',
    'L2 🟡',
    'L3 🟠',
    'L4 🟡',
    'L5 🟠',
    'L6 ⚪',
    'L7 🟡',
    'L8 🟠',
    'L9 🟡',
    'L10 🔴',
    'L11 ⚪ → 🟡',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L5 Fase C: stop setelah 5 kartu — energi naik = akurasi turun',
      'L6 Reset: wajib dan tidak boleh dilewati — L7 gagal jika kelas belum tenang',
      'L10: instruksi selesai sebelum kartu dibagikan — bukan bersamaan',
      'L10: checkpoint switch di tengah wajib dilakukan',
    ],
    autonomy: [
      'L4 Reactivation: 15–20 detik saja, tidak dikoreksi, langsung lanjut',
      'Elephant paling berat — ucapkan 2x suku kata terpisah sebelum kelas ikut',
      'Fish tidak punya suara — angkat bahu, senyum, lanjut. Jangan buka diskusi.',
      'Jika waktu ≤10 menit di L10: skip ke L11 — langsung speed round',
      'Jika waktu mepet di L11: putaran 1 saja cukup',
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
          teks   : `UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] UCAP: "I'm fine, thank you! Are you ready? Let's start." perhatian kelas sebelum masuk sesi. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.`,
          bantuan: null,
          cue    : 'Layar ini pendek dan wajib. Jangan skip. Fungsinya mengunci',
          darurat: null,
          energi : '🔵',
        },

        // L1 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berdiri tengah kelas. Tidak ada kartu. Tidak ada papan. UCAP: "Listen. What animal is this?" → Tiru suara: Meow! RESPONS SISWA: Tebak bebas — boleh Bahasa Indonesia. UCAP: "Yes — cat! Listen — Woof!" RESPONS SISWA: "Dog!" UCAP: "One more —" [brek-brek-brek] RESPONS SISWA: Tebak bebas. UCAP: "Frog! Today — animals. Let's go." sendiri dan lanjut.`,
          bantuan: null,
          cue    : 'Jangan buka kartu dulu. Jika kelas diam total, guru jawab',
          darurat: null,
          energi : '🔴',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,  // TODO: verifikasi

      langkah: [

        // L2 — INTI
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST AKSI: Tempel 5 kartu satu per satu: cat — dog — bird — fish — rabbit Setiap kartu: tunjuk → suara → nama. Satu detik jeda, lanjut. UCAP setelah 5 kartu terpasang: "Listen. My turn." → "Cat — meow." → "Dog — woof." → "Bird — tweet tweet." → "Fish —" [gestur sirip, dua tangan besar] → "Rabbit —" [gestur telinga panjang] kata lain selain nama hewan.`,
          bantuan: null,
          cue    : 'Satu tangan tunjuk kartu, satu tangan gestur. Tidak ada',
          darurat: null,
          energi : '🟡',
        },

        // L3 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Now together. I point — you say name and sound." → Tunjuk cat: kelas ucap "Cat — meow!" → Tunjuk dog: "Dog — woof!" → Tunjuk bird: "Bird — tweet tweet!" → Tunjuk fish: "Fish —" [guru angkat bahu + senyum, kelas tertawa, lanjut] → Tunjuk rabbit: "Rabbit —" [gestur telinga] AKSI: Ulangi urutan sekali lagi, acak 2 kartu. ulangi kartu itu sekali. Jangan buka diskusi "ikan bunyinya apa."`,
          bantuan: 'Jika kelas hanya sebagian ikut: "Everybody. Together." —',
          cue    : 'Momen fish — angkat bahu, senyum, langsung lanjut.',
          darurat: null,
          energi : '🟠',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI — Reactivation (15–20 detik): "Quick check." → Tunjuk cepat 5 kartu gelombang 1 berurutan — kelas sebut nama saja. → Tidak dikoreksi. Tidak diulang. Langsung lanjut. 👂 LISTEN FIRST Gelombang 2 AKSI: Tempel 5 kartu berikutnya: elephant — lion — monkey — snake — frog Setiap kartu: tunjuk → suara → nama. "Elephant —" [gestur belalai] → ucapkan 2x: "El-e-phant. Elephant." "Lion — roar!" "Monkey — ooh ooh!" [gestur garuk-garuk] "Snake — ssss." [gestur tangan melengkung] "Frog — brek brek." [gestur lompat] UCAP setelah 5 kartu terpasang: "Listen. My turn." → Ulang kelima nama + suara sekali. terpisah. Jangan lanjut sebelum guru sendiri sudah ucapkan 2x.`,
          bantuan: null,
          cue    : 'Elephant paling berat — ucapkan dua kali, suku kata',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER Fase A — Gelombang 2 saja, lambat: "Together." → Tunjuk elephant → lion → monkey → snake → frog. → Kelas ucap nama + suara. Lambat, tidak terburu. Fase B — Campur 10 kartu, medium: "Now — names only." → Tunjuk semua 10 kartu berurutan — medium speed. → Kelas ucap nama saja. Tidak perlu suara. Fase C — 5 kartu acak, cepat: "Ready? Fast." → Pilih 5 kartu acak — tunjuk cepat. → Tahan 1 detik sebelum menunjuk kartu berikutnya. kartu itu, ulangi 2x, lanjut. Energi naik = akurasi turun.`,
          bantuan: 'Jika kelas lambat di elephant/rabbit: kurangi kecepatan di',
          cue    : 'Stop setelah 5 kartu — jangan perpanjang speed round.',
          darurat: null,
          energi : '🟠',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — kelas freeze] UCAP: "Stop. Hands down. Look at me." [Jeda 3 detik — guru berdiri diam] "Sit up. Ready." = Layar 7 gagal.`,
          bantuan: null,
          cue    : 'Reset ini wajib — jangan skip. Kelas yang belum tenang',
          darurat: null,
          energi : '⚪',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST AKSI: Tunjuk papan — A ___ can ___. "Listen. My turn." → Tunjuk kartu bird: "A bird can fly." [tangan mengepak] → Tunjuk kartu lion: "A lion can roar." [tangan ke mulut, buka lebar] → Tunjuk kartu frog: "A frog can jump." [gestur lompat] "Listen one more time." — ulangi ketiga kalimat. hewan, bukan semua 10.`,
          bantuan: null,
          cue    : 'Tiga contoh dulu — guru tidak tanya kelas. Hanya 3',
          darurat: null,
          energi : '🟡',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Together now." AKSI: Tunjuk papan: A ___ can ___. → Tunjuk kartu bird: "A bird can…" → Tunggu kelas: "…fly!" → Tunjuk kartu lion: "A lion can…" → Kelas: "…roar!" AKSI: Untuk sisa kartu — guru model, kelas ikut choral: → "A cat can meow. Say it." → kelas ulang. → "A monkey can climb. Say it." → kelas ulang. → "A snake can hiss. Say it." → kelas ulang. "Repeat after me." after me — bukan produksi mandiri.`,
          bantuan: 'Jika kelas diam di produksi mandiri: kembali ke choral —',
          cue    : 'Production target hanya bird dan lion. Sisanya repeat',
          darurat: null,
          energi : '🟠',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST AKSI: Tunjuk papan — A ___ has ___. "Listen. My turn." → Tunjuk kartu elephant: "An elephant has a long nose." [gestur belalai besar-besar] → Tunjuk kartu rabbit: "A rabbit has long ears." [gestur telinga panjang] → Tunjuk kartu fish: "A fish has fins." [dua tangan sirip besar] "Listen one more time." — ulangi ketiga kalimat. "Together. An elephant has…" → Kelas: "…a long nose!" "A rabbit has…" → Kelas: "…long ears!" tidak perlu jelaskan grammar. Gestur harus dibesar-besarkan — terutama fins dan long nose.`,
          bantuan: null,
          cue    : '"An elephant" — bukan "A elephant." Ucapkan natural,',
          darurat: null,
          energi : '🟡',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `⚠ DARURAT — Waktu ≤10 menit: skip ke Layar 11 — langsung speed round, lewati partner practice. "Before we play — watch me." AKSI: Guru pegang 1 kartu tersembunyi (snake). Tidak ditunjukkan. UCAP: "I give clues. You guess." → Tunjuk papan: "It can hiss. It is long. What is it?" → Kelas tebak: "Snake!" UCAP: "Now — partner game. Watch first." Demo dengan 1 siswa sukarela: "You, you." — tunjuk satu siswa maju. Berikan kartu frog. "Give clues. Use this." [tunjuk papan — It can… / It has…] Jika siswa beku: guru bisik — "It can… jump." Kelas tebak setelah siswa beri 1–2 clue. Sebelum distribusi — ucapkan 3 hal ini: "Partner voice — not shouting." "Partner A gives clues first. Partner B guesses." "Too hard? Just say the name and sound. That's okay." DISTRIBUSI: Bagikan 1 kartu per pasangan — sekarang. Guru tidak bicara instruksi baru saat distribusi. Latih stop signal: "When I clap —" [tepuk 1 kali] "— stop." — latih 1x. UCAP: "Go." Checkpoint tengah (±90 detik): [Tepuk 1 kali — freeze] "Switch. Partner B now." [Tepuk 1 kali — lanjut] Tidak hentikan kelas. Diferensiasi (di sisi papan, tidak dibacakan): - Sudah bisa: buat 3 clue per hewan - Perlu support: sebut nama + suara saja Catat, model ulang saat lewat. Acceptance rule berlaku.`,
          bantuan: 'Pasangan diam total: dekati, bisik — "It can jump. Say that."',
          cue    : 'Guru tidak koreksi kalimat saat practice berlangsung.',
          darurat: null,
          energi : '🔴',
        },

        // L11 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — freeze] UCAP: "Stop. Cards down. Look here." [Jeda 2 detik] "Last round — fast." AKSI: Putaran 1: tunjuk 10 kartu berurutan — lambat — kelas sebut nama saja. Putaran 2: tunjuk 5 kartu acak — cepat — tahan 1 detik sebelum kartu berikutnya. ulangi 2x, lanjut.`,
          bantuan: null,
          cue    : 'Tidak ada koreksi di sini. Jika 1 kartu banyak salah —',
          darurat: null,
          energi : '⚪ → 🟡',
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
          teks   : `AKSI: Guru ambil 1 kartu — jangan ditunjuk ke kelas. UCAP: "Last. Listen — what animal?" → "It can roar. It has four legs. What is it?" → Kelas: "Lion!" "Write the name. Or draw if you forget." [Tunggu 30 detik] "Show me." Tidak ada koreksi terbuka.`,
          bantuan: 'Terima: tulisan "lion", huruf awal "l", atau gambar singa.',
          cue    : 'Exit ticket = 1 kartu, 1 output, 30 detik. Tidak diperluas.',
          darurat: null,
          energi : '🟡',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk semua 10 kartu cepat — kelas sebut bersama. UCAP: "Today — animals. Well done. See you next time."`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_09;
