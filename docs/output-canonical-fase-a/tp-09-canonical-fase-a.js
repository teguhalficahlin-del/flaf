const TP_09 = {

  // METADATA
  id    : 'tp-09',
  nomor : 9,
  kelas : 1,
  nama  : 'Animals',
  tema  : 'Alam dan Lingkungan',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebut nama 10 hewan umum (cat, dog, bird, fish, rabbit, cow, chicken, elephant, monkey, snake) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan hewan menggunakan "A ... can ..." dan "A ... has ...".',
    'Peserta didik dapat mengidentifikasi hewan berdasarkan deskripsi sederhana yang diucapkan guru.',
  ],
  vocab     : ['cat', 'dog', 'bird', 'fish', 'rabbit', 'cow', 'chicken', 'elephant', 'monkey', 'snake', 'frog', 'lion', 'can', 'has'],
  persiapan : [
    'Kartu printable hewan x10: cat, dog, bird, fish, rabbit, elephant, lion, monkey, snake, frog.',
    'Kartu sudah diberi nomor urut di belakang, ditempel sesuai gelombang.',
    'Papan tulis: tulis "A ___ can ___." dan "A ___ has ___." sebelum kelas masuk.',
    'Buku tulis dan alat tulis siswa untuk exit ticket Layar 12.',
    'Tidak ada material siswa di meja sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',                       tujuan: 'Guru mengunci perhatian siswa sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Hook Suara Hewan',                        tujuan: 'Guru memancing minat lewat tebak suara hewan.' },
    { layar:  2, judul: 'Inti · Listen First Gelombang 1',                   tujuan: 'Guru memperkenalkan lima hewan pertama.' },
    { layar:  3, judul: 'Inti · Produksi Bersama Gelombang 1',               tujuan: 'Guru memimpin produksi nama dan suara lima hewan pertama.' },
    { layar:  4, judul: 'Inti · Reactivation + Listen First Gelombang 2',    tujuan: 'Guru meninjau gelombang 1 dan memperkenalkan lima hewan berikutnya.' },
    { layar:  5, judul: 'Inti · Produksi Bersama Gelombang 2 + Gabungan',    tujuan: 'Guru memimpin produksi sepuluh hewan dalam tiga fase.' },
    { layar:  6, judul: 'Inti · Reset Sebelum Struktur',                     tujuan: 'Guru menenangkan kelas sebelum masuk struktur kalimat.' },
    { layar:  7, judul: 'Inti · Listen First Struktur "can"',                tujuan: 'Guru memodelkan pola "A ___ can ___".' },
    { layar:  8, judul: 'Inti · Produksi Bersama "can"',                     tujuan: 'Guru memimpin produksi pola "can".' },
    { layar:  9, judul: 'Inti · Listen First + Produksi Struktur "has"',     tujuan: 'Guru memodelkan dan memimpin pola "A ___ has ___".' },
    { layar: 10, judul: 'Inti · Demo + Partner Practice Teka-teki',          tujuan: 'Guru mendemokan dan memandu permainan tebak-tebakan berpasangan.' },
    { layar: 11, judul: 'Penutup · Reset + Retrieval Speed Round',           tujuan: 'Guru memimpin retrieval cepat sepuluh hewan.' },
    { layar: 12, judul: 'Penutup · Exit Ticket',                             tujuan: 'Guru mengecek pemahaman lewat satu teka-teki.' },
    { layar: 13, judul: 'Penutup · Closing',                                 tujuan: 'Guru menutup kelas.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
UCAP: "Good morning, everyone!"
UCAP: "How are you today?"
AKSI: Tunggu respons siswa.
UCAP: "I'm fine, thank you!"
UCAP: "Are you ready?"
UCAP: "Let's start."`,
    bantuan: 'Jika kelas belum fokus: berdiri diam, ucapkan "Are you ready?" sekali lagi.',
    cue    : 'Layar ini tidak boleh dilewati.',
    darurat: null,
  },

  // SKENARIO
  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,
      langkah: [

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di tengah kelas tanpa kartu.
UCAP: "Listen."
UCAP: "What animal is this?"
AKSI: Tirukan suara kucing.
→ Siswa: menebak bebas, boleh dalam Bahasa Indonesia.
UCAP: "Yes, cat!"
UCAP: "Listen."
AKSI: Tirukan suara anjing.
→ Siswa: "Dog!"
UCAP: "One more."
AKSI: Tirukan suara katak tiga kali.
→ Siswa: menebak bebas.
UCAP: "Frog!"
UCAP: "Today, animals."
UCAP: "Let's go."`,
          bantuan     : 'Jika kelas diam total: jawab sendiri lalu lanjut.',
          cue         : 'Jangan tunjukkan kartu di layar ini.',
          darurat     : null,
          diferensiasi: null,
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,
      langkah: [

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Tempel kartu cat di papan tulis.
AKSI: Tempel kartu dog di papan tulis.
AKSI: Tempel kartu bird di papan tulis.
AKSI: Tempel kartu fish di papan tulis.
AKSI: Tempel kartu rabbit di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu cat.
UCAP: "Cat."
AKSI: Tirukan suara kucing.
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu dog.
UCAP: "Dog."
AKSI: Tirukan suara anjing.
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu bird.
UCAP: "Bird."
AKSI: Tirukan suara burung.
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu fish.
AKSI: Peragakan gestur sirip dengan dua tangan.
UCAP: "Fish."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu rabbit.
AKSI: Peragakan gestur telinga panjang.
UCAP: "Rabbit."`,
          bantuan     : null,
          cue         : 'Satu tangan menunjuk kartu, satu tangan membuat gestur. Ucapkan hanya nama dan suara hewan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
UCAP: "I point, you say the name and the sound."
AKSI: Tunjuk kartu cat.
→ Siswa: "Cat, meow!"
AKSI: Tunjuk kartu dog.
→ Siswa: "Dog, woof!"
AKSI: Tunjuk kartu bird.
→ Siswa: "Bird, tweet tweet!"
AKSI: Tunjuk kartu fish.
AKSI: Angkat bahu sambil tersenyum.
→ Siswa: "Fish!"
AKSI: Tunjuk kartu rabbit.
AKSI: Peragakan gestur telinga panjang.
→ Siswa: "Rabbit!"
AKSI: Ulangi urutan sekali lagi dengan dua kartu diacak.`,
          bantuan     : 'Jika hanya sebagian siswa ikut: ucapkan "Everybody. Together.", lalu ulangi kartu itu sekali.',
          cue         : 'Jangan membuka diskusi tentang suara ikan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk lima kartu gelombang pertama berurutan.
UCAP: "Quick check."
→ Siswa: menyebut nama setiap kartu.
AKSI: Lanjut tanpa mengoreksi.
👂 LISTEN FIRST
AKSI: Tempel kartu elephant di papan tulis.
AKSI: Tempel kartu lion di papan tulis.
AKSI: Tempel kartu monkey di papan tulis.
AKSI: Tempel kartu snake di papan tulis.
AKSI: Tempel kartu frog di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu elephant.
AKSI: Peragakan gestur belalai.
UCAP: "El-e-phant."
UCAP: "Elephant."
AKSI: Tunjuk kartu lion.
UCAP: "Lion."
AKSI: Tirukan suara singa.
AKSI: Tunjuk kartu monkey.
AKSI: Peragakan gestur menggaruk.
UCAP: "Monkey."
AKSI: Tirukan suara monyet.
AKSI: Tunjuk kartu snake.
AKSI: Peragakan gestur tangan melengkung.
UCAP: "Snake."
AKSI: Tirukan suara ular.
AKSI: Tunjuk kartu frog.
AKSI: Peragakan gestur lompat.
UCAP: "Frog."
AKSI: Tirukan suara katak dua kali.`,
          bantuan     : null,
          cue         : 'Jangan lanjut sebelum "Elephant" diucapkan dua kali dengan suku kata terpisah. Reactivation cukup 15–20 detik tanpa koreksi.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunjuk kartu elephant, lion, monkey, snake, dan frog berurutan.
→ Siswa: menyebut nama dan suara setiap hewan.
UCAP: "Now, names only."
AKSI: Tunjuk kesepuluh kartu berurutan.
→ Siswa: menyebut nama setiap hewan.
UCAP: "Ready?"
UCAP: "Fast!"
AKSI: Pilih lima kartu secara acak.
AKSI: Tunjuk satu kartu, lalu tahan 1 detik sebelum kartu berikutnya.
→ Siswa: menyebut nama setiap hewan.`,
          bantuan     : 'Jika siswa lambat pada elephant atau rabbit: ulangi kartu itu dua kali, lalu lanjut.',
          cue         : 'Jangan perpanjang putaran cepat melebihi lima kartu. Putaran pertama lebih lambat dari putaran terakhir.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan sekali.
UCAP: "Stop."
UCAP: "Hands down."
UCAP: "Eyes on me."
AKSI: Jeda 3 detik.
UCAP: "Sit up."
UCAP: "Ready."`,
          bantuan     : null,
          cue         : 'Layar ini tidak boleh dilewati.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Tunjuk pola "A ___ can ___." di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu bird.
AKSI: Peragakan gestur mengepak.
UCAP: "A bird can fly."
AKSI: Tunjuk kartu lion.
AKSI: Peragakan gestur tangan ke mulut.
UCAP: "A lion can roar."
AKSI: Tunjuk kartu frog.
AKSI: Peragakan gestur lompat.
UCAP: "A frog can jump."
UCAP: "Listen one more time."
AKSI: Ulangi ketiga kalimat sekali lagi.`,
          bantuan     : null,
          cue         : 'Modelkan tiga contoh sendiri, jangan menanyakan kelas. Gunakan hanya tiga hewan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunjuk pola "A ___ can ___." di papan tulis.
AKSI: Tunjuk kartu bird.
AKSI: Ucapkan pola "A bird can..." agar siswa melengkapi kalimat.
→ Siswa: "...fly!"
AKSI: Tunjuk kartu lion.
AKSI: Ucapkan pola "A lion can..." agar siswa melengkapi kalimat.
→ Siswa: "...roar!"
AKSI: Modelkan kalimat untuk kartu sisanya, lalu ajak siswa mengulang.
UCAP: "A cat can meow."
UCAP: "Say it."
→ Siswa: "A cat can meow."
UCAP: "A monkey can climb."
UCAP: "Say it."
→ Siswa: "A monkey can climb."
UCAP: "A snake can hiss."
UCAP: "Say it."
→ Siswa: "A snake can hiss."`,
          bantuan     : 'Jika siswa diam saat produksi mandiri: kembali ke choral, ucapkan "Repeat after me.".',
          cue         : 'Target produksi mandiri hanya bird dan lion. Kartu lain cukup repeat after me.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Tunjuk pola "A ___ has ___." di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu elephant.
AKSI: Peragakan gestur belalai dengan besar.
UCAP: "An elephant has a long nose."
AKSI: Tunjuk kartu rabbit.
AKSI: Peragakan gestur telinga panjang.
UCAP: "A rabbit has long ears."
AKSI: Tunjuk kartu fish.
AKSI: Peragakan gestur sirip dengan dua tangan besar.
UCAP: "A fish has fins."
UCAP: "Listen one more time."
AKSI: Ulangi ketiga kalimat sekali lagi.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunjuk kartu elephant.
AKSI: Ucapkan pola "An elephant has..." agar siswa melengkapi kalimat.
→ Siswa: "...a long nose!"
AKSI: Tunjuk kartu rabbit.
AKSI: Ucapkan pola "A rabbit has..." agar siswa melengkapi kalimat.
→ Siswa: "...long ears!"`,
          bantuan     : null,
          cue         : 'Ucapkan "An elephant" secara natural, bukan "A elephant".',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Before we play, watch me."
AKSI: Pegang satu kartu snake tanpa menunjukkannya.
UCAP: "I give clues."
UCAP: "You guess."
AKSI: Tunjuk pola di papan tulis.
UCAP: "It can hiss."
UCAP: "It is long."
UCAP: "What is it?"
→ Siswa: "Snake!"
UCAP: "Now, partner game."
UCAP: "Watch first."
AKSI: Tunjuk satu siswa untuk maju ke depan.
UCAP: "You, you."
AKSI: Berikan kartu frog ke siswa itu.
UCAP: "Give clues."
UCAP: "Use this."
AKSI: Tunjuk pola "It can..." dan "It has..." di papan tulis.
→ Siswa: memberi satu sampai dua clue lalu kelas menebak.
AKSI: Jika siswa beku, bisikkan "It can jump.".
UCAP: "Partner voice, not shouting."
UCAP: "Partner A gives clues first."
UCAP: "Partner B guesses."
UCAP: "Say the name and the sound."
UCAP: "That's okay."
AKSI: Bagikan satu kartu ke setiap pasangan.
AKSI: Jangan memberi instruksi baru saat membagikan kartu.
AKSI: Latih tanda berhenti dengan tepuk tangan sekali.
UCAP: "When I clap, stop."
UCAP: "Go."
AKSI: Setelah 90 detik, tepuk tangan sekali.
UCAP: "Switch."
UCAP: "Partner B now."
AKSI: Tepuk tangan sekali untuk melanjutkan.`,
          bantuan     : 'Jika pasangan diam total: dekati, bisikkan "It can jump. Say that.", tanpa menghentikan kelas.',
          cue         : 'Jangan koreksi kalimat siswa saat latihan berlangsung. Clue = petunjuk/ciri.',
          darurat     : 'Jika waktu ≤10 menit → lewati partner practice, langsung ke Layar 11.',
          diferensiasi: {
            perluSupport: 'Dekati mereka dan izinkan menyebut nama dan suara hewan saja.',
            sudahBisa   : 'Minta mereka memberi satu sampai dua clue untuk setiap hewan.',
          },
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,
      langkah: [

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan sekali.
UCAP: "Stop."
UCAP: "Cards down."
UCAP: "Eyes on me."
AKSI: Jeda 2 detik.
UCAP: "Last round."
UCAP: "Fast!"
AKSI: Tunjuk kesepuluh kartu berurutan.
→ Siswa: menyebut nama setiap hewan.
AKSI: Pilih lima kartu secara acak.
AKSI: Tunjuk satu kartu, lalu tahan 1 detik sebelum kartu berikutnya.
→ Siswa: menyebut nama setiap hewan.`,
          bantuan     : 'Jika satu kartu banyak salah: ulangi kartu itu dua kali, lalu lanjut.',
          cue         : 'Putaran pertama lebih lambat dari putaran kedua. Jangan mengoreksi di putaran ini.',
          darurat     : 'Jika waktu mepet → cukup lakukan putaran pertama.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ambil satu kartu tanpa menunjukkannya ke semua siswa.
UCAP: "Last one."
UCAP: "Listen."
UCAP: "What animal?"
UCAP: "It can roar."
UCAP: "It has four legs."
UCAP: "What is it?"
→ Siswa: "Lion!"
UCAP: "Write the name."
UCAP: "Or draw if you forget."
AKSI: Tunggu 30 detik.
UCAP: "Show me."`,
          bantuan     : 'Terima tulisan "lion", huruf awal "l", atau gambar singa, tanpa koreksi terbuka.',
          cue         : 'Gunakan satu kartu dengan satu output saja.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk kesepuluh kartu berurutan.
→ Siswa: menyebut nama setiap hewan bersama.
UCAP: "Today, animals."
UCAP: "Well done."
UCAP: "See you next time."`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_09;
