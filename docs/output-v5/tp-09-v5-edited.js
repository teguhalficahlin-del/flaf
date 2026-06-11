/**
 * =============================================================
 * FLAF — TP 9 (Animals)
 * File: tp-09-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp09-v2.txt
 * Generated: 2026-05-25
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_09 = {

  id       : 'tp-09',
  pdf_ref  : 'Modul_Ajar_V3_TP09_Animals.docx',
  nomor    : 9,
  kelas    : 1,
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

  preOpening: {
    tipe   : 'instruksi',
    teks   : `UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] UCAP: "I'm fine, thank you! Are you ready? Let's start."`,
    bantuan: null,
    cue    : 'Layar ini pendek dan wajib. Jangan lewati. Fungsinya mengunci perhatian kelas sebelum masuk sesi. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.',
    darurat: null,
    energi : '🔵',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L1 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berdiri tengah kelas. Tidak ada kartu. Tidak ada papan. UCAP: "Listen. What animal is this?" → Tiru suara: Meow! RESPONS SISWA: Tebak bebas — boleh Bahasa Indonesia. UCAP: "Yes — cat! Listen — Woof!" RESPONS SISWA: "Dog!" UCAP: "One more —" [brek-brek-brek] RESPONS SISWA: Tebak bebas. UCAP: "Frog! Today — animals. Let's go."`,
          bantuan: null,
          cue    : 'Jangan buka kartu dulu. Jika kelas diam total, guru jawab sendiri dan lanjut.',
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
          teks   : `👂 LISTEN FIRST AKSI: Tempel 5 kartu satu per satu: cat — dog — bird — fish — rabbit Setiap kartu: tunjuk → suara → nama. Satu detik jeda, lanjut. UCAP setelah 5 kartu terpasang: "Listen. My turn." → "Cat — meow." → "Dog — woof." → "Bird — tweet tweet." → UCAP: "Fish —"
AKSI: Lakukan gestur sirip dengan dua tangan besar.
→ UCAP: "Rabbit —"
AKSI: Lakukan gestur telinga panjang.`,
          bantuan: null,
          cue    : 'Satu tangan tunjuk kartu, satu tangan gestur. Tidak ada kata lain selain nama hewan.',
          darurat: null,
          energi : '🟡',
        },

        // L3 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Now together. I point — you say name and sound." → Tunjuk cat: kelas ucap "Cat — meow!" → Tunjuk dog: "Dog — woof!" → Tunjuk bird: "Bird — tweet tweet!" → Tunjuk fish: UCAP: "Fish —"
AKSI: Guru angkat bahu, tersenyum, lalu lanjutkan.
→ Tunjuk rabbit: UCAP: "Rabbit —"
AKSI: Lakukan gestur telinga.
AKSI: Ulangi urutan sekali lagi, acak 2 kartu.`,
          bantuan: 'Jika kelas hanya sebagian ikut: "Everybody. Together." — ulangi kartu itu sekali.',
          cue    : 'Momen fish — angkat bahu, senyum, langsung lanjut. Jangan buka diskusi "ikan bunyinya apa."',
          darurat: null,
          energi : '🟠',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI — pengaktifan ulang (15–20 detik): "cek cepat." → Tunjuk cepat 5 kartu gelombang 1 berurutan — kelas sebut nama saja. → Tidak dikoreksi. Tidak diulang. Langsung lanjut. 👂 LISTEN FIRST Gelombang 2 AKSI: Tempel 5 kartu berikutnya: elephant — lion — monkey — snake — frog Setiap kartu: tunjuk → suara → nama. UCAP: "Elephant —"
AKSI: Lakukan gestur belalai.
UCAP: "El-e-phant. Elephant."
UCAP: "Lion — roar!"
UCAP: "Monkey — ooh ooh!"
AKSI: Lakukan gestur garuk-garuk.
UCAP: "Snake — ssss."
AKSI: Lakukan gestur tangan melengkung.
UCAP: "Frog — brek brek."
AKSI: Lakukan gestur lompat. UCAP setelah 5 kartu terpasang: "Listen. My turn." → Ulang kelima nama + suara sekali.`,
          bantuan: null,
          cue    : 'Elephant paling berat — ucapkan dua kali, suku kata terpisah. Jangan lanjut sebelum guru sendiri sudah ucapkan 2x.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER Fase A — Gelombang 2 saja, lambat: "Together." → Tunjuk elephant → lion → monkey → snake → frog. → Kelas ucap nama + suara. Lambat, tidak terburu. Fase B — Campur 10 kartu, medium: "Now — names only." → Tunjuk semua 10 kartu berurutan — kecepatan sedang. → Kelas ucap nama saja. Tidak perlu suara. Fase C — 5 kartu acak, cepat: "Ready? Fast." → Pilih 5 kartu acak — tunjuk cepat. → Tahan 1 detik sebelum menunjuk kartu berikutnya.`,
          bantuan: 'Jika kelas lambat di elephant/rabbit: kurangi kecepatan di kartu itu, ulangi 2x, lanjut.',
          cue    : 'Stop setelah 5 kartu — jangan perpanjang putaran cepat. Energi naik = akurasi turun.',
          darurat: null,
          energi : '🟠',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — kelas freeze] UCAP: "Stop. Hands down. Look at me." [Jeda 3 detik — guru berdiri diam] "Sit up. Ready."`,
          bantuan: null,
          cue    : 'Reset ini wajib — jangan skip. Kelas yang belum tenang = Layar 7 gagal.',
          darurat: null,
          energi : '⚪',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST AKSI: Tunjuk papan — A ___ can ___. "Listen. My turn." → Tunjuk kartu bird: UCAP: "A bird can fly."
AKSI: Lakukan gestur tangan mengepak.
→ Tunjuk kartu lion: UCAP: "A lion can roar."
AKSI: Tangan ke mulut, buka lebar.
→ Tunjuk kartu frog: UCAP: "A frog can jump."
AKSI: Lakukan gestur lompat. "Listen one more time." — ulangi ketiga kalimat.`,
          bantuan: null,
          cue    : 'Tiga contoh dulu — guru tidak tanya kelas. Hanya 3 hewan, bukan semua 10.',
          darurat: null,
          energi : '🟡',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Together now." AKSI: Tunjuk papan: A ___ can ___. → Tunjuk kartu bird: "A bird can..." → Tunggu kelas: "...fly!" → Tunjuk kartu lion: "A lion can..." → Kelas: "...roar!" AKSI: Untuk sisa kartu — guru model, kelas ikut ucap bersama: → "A cat can meow. Say it." → kelas ulang. → "A monkey can climb. Say it." → kelas ulang. → "A snake can hiss. Say it." → kelas ulang.`,
          bantuan: 'Jika kelas diam di produksi mandiri: kembali ke ucap bersama — "Repeat after me."',
          cue    : 'Target produksi hanya bird dan lion. Sisanya tirukan setelah guru — bukan produksi mandiri.',
          darurat: null,
          energi : '🟠',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST AKSI: Tunjuk papan — A ___ has ___. "Listen. My turn." → Tunjuk kartu elephant: UCAP: "An elephant has a long nose."
AKSI: Lakukan gestur belalai besar-besar.
→ Tunjuk kartu rabbit: UCAP: "A rabbit has long ears."
AKSI: Lakukan gestur telinga panjang.
→ Tunjuk kartu fish: UCAP: "A fish has fins."
AKSI: Lakukan gestur sirip dengan dua tangan besar. "Listen one more time." — ulangi ketiga kalimat. "Together. An elephant has..." → Kelas: "...a long nose!" "A rabbit has..." → Kelas: "...long ears!"`,
          bantuan: null,
          cue    : '"An elephant" — bukan "A elephant." Ucapkan wajar, tidak perlu jelaskan tata bahasa. Gestur harus dibesar-besarkan — terutama fins dan long nose.',
          darurat: null,
          energi : '🟡',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `"Before we play — watch me." AKSI: Guru pegang 1 kartu tersembunyi (snake). Tidak ditunjukkan. UCAP: "I give clues. You guess." → Tunjuk papan: "It can hiss. It is long. What is it?" → Kelas tebak: "Snake!"
---
UCAP: "Now — partner game. Watch first." Demo dengan 1 siswa sukarela: "You, you." — tunjuk satu siswa maju. Berikan kartu frog. UCAP: "Give clues. Use this."
AKSI: Tunjuk papan pada pola It can… / It has…. Jika siswa beku: guru bisik — "It can... jump." Kelas tebak setelah siswa beri 1–2 petunjuk.
---
Sebelum distribusi — ucapkan 3 hal ini: "Partner voice — not shouting." "Partner A gives clues first. Partner B guesses." "Too hard? Just say the name and sound. That's okay."
---
DISTRIBUSI: Bagikan 1 kartu per pasangan — sekarang. Guru tidak bicara instruksi baru saat distribusi. Latih isyarat berhenti: UCAP: "When I clap —"
AKSI: Tepuk 1 kali.
UCAP: "— stop." — latih 1x. UCAP: "Go." Titik cek tengah (±90 detik): AKSI: Tepuk 1 kali (freeze).
UCAP: "Switch. Partner B now."
AKSI: Tepuk 1 kali (lanjut).`,
          bantuan: 'Pasangan diam total: dekati, bisik — "It can jump. Say that." Tidak hentikan kelas.',
          diferensiasi: {
            needHelp: 'Sebut nama + suara saja.',
            ready   : 'Buat 3 clue per hewan.',
          },
          cue    : 'Guru tidak koreksi kalimat saat practice berlangsung. Catat, model ulang saat lewat. Aturan penerimaan berlaku.',
          darurat: 'Waktu ≤10 menit: lewati ke Layar 11 — langsung putaran cepat, lewati partner practice.',
          energi : '🔴',
        },

        // L11 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — freeze] UCAP: "Stop. Cards down. Look here." [Jeda 2 detik] "Last round — fast." AKSI: Putaran 1: tunjuk 10 kartu berurutan — lambat — kelas sebut nama saja. Putaran 2: tunjuk 5 kartu acak — cepat — tahan 1 detik sebelum kartu berikutnya.`,
          bantuan: null,
          cue    : 'Tidak ada koreksi di sini. Jika 1 kartu banyak salah — ulangi 2x, lanjut.',
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
          teks   : `AKSI: Guru ambil 1 kartu — jangan ditunjuk ke kelas. UCAP: "Last. Listen — what animal?" → "It can roar. It has four legs. What is it?" → Kelas: "Lion!" UCAP: "Write the name. Or draw if you forget."
AKSI: Tunggu 30 detik.
UCAP: "Show me."`,
          bantuan: 'Terima: tulisan "lion", huruf awal "l", atau gambar singa. Tidak ada koreksi terbuka.',
          cue    : 'Cek akhir = 1 kartu, 1 output, 30 detik. Tidak diperluas.',
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
