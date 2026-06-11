const TP_B09 = {

  // METADATA
  id     : 'tp-b09',
  nomor  : 9,
  kelas  : 3,
  nama   : 'Plants, Animals, and Nature',
  tema   : 'Mendeskripsikan hewan dan tempat tinggalnya menggunakan fakta sederhana',
  kluster: 'C — Alam, Tubuh, dan Kesehatan',
  jenis  : 'Biasa',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebutkan nama dua habitat (jungle dan forest) dan mengaitkan masing-masing dengan hewan yang tinggal di sana.',
    'Peserta didik dapat menggunakan pola "They live in..." dan "They eat..." dalam kalimat lisan dan tulisan tentang hewan.',
    'Peserta didik dapat menulis minimal tiga fakta tentang satu hewan pilihan mereka menggunakan kosakata Kluster C.',
  ],
  vocab     : ['cat', 'dog', 'bird', 'fish', 'rabbit', 'elephant', 'tiger', 'frog', 'lion',
               'jungle', 'forest', 'They live in...', 'They eat...'],
  persiapan : [
    'Gambar jungle berupa hutan lebat dan gelap, dengan label JUNGLE, disiapkan sebelum kelas dimulai, untuk Layar 3.',
    'Gambar forest berupa hutan terbuka dan lebih terang, dengan label FOREST, disiapkan sebelum kelas dimulai, untuk Layar 3.',
    'Gambar tiga hewan, tiger untuk jungle, elephant untuk forest, dan satu hewan pilihan guru, disiapkan sebelum kelas dimulai, untuk Layar 4, Layar 5, dan Layar 6.',
    'Lembar kerja siswa satu per siswa, berisi template fakta hewan dengan baris nama hewan, adjektif, They live in, They eat, dan One more fact, di meja guru sebelum dibagikan.',
    'Papan tulis dan spidol untuk menulis pola They live in dan They eat di Layar 4 dan Layar 6.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi',                          tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-08 dan Chant Hewan',                      tujuan: 'Guru menghubungkan TP-08 dan menyalakan energi lewat chant hewan.' },
    { layar:  2, judul: 'Pembuka · Reactivation Hewan Warna dan Cuaca',                 tujuan: 'Guru meninjau nama hewan, warna, dan cuaca.' },
    { layar:  3, judul: 'Inti · Introduksi Jungle dan Forest',                          tujuan: 'Guru memperkenalkan dua habitat.' },
    { layar:  4, judul: 'Inti · Introduksi They Live In',                               tujuan: 'Guru memperkenalkan pola They live in.' },
    { layar:  5, judul: 'Inti · Drill Hewan dan Habitatnya',                            tujuan: 'Guru memimpin drill hewan dan tempat tinggalnya.' },
    { layar:  6, judul: 'Inti · Introduksi They Eat dan Modeling Fakta Lengkap',        tujuan: 'Guru memperkenalkan They eat dan memodelkan fakta lengkap.' },
    { layar:  7, judul: 'Inti · Pair Practice Fakta Satu Hewan',                        tujuan: 'Guru memandu latihan menyebut fakta hewan berpasangan.' },
    { layar:  8, judul: 'Inti · Writing Individual Faktaku tentang Satu Hewan',         tujuan: 'Guru memandu siswa menulis fakta satu hewan.' },
    { layar:  9, judul: 'Inti · Berkeliling dan Review Tulisan',                        tujuan: 'Guru meninjau hasil tulisan dan menguatkan pola fakta.' },
    { layar: 10, judul: 'Penutup · Review dan Hapus Papan',                             tujuan: 'Guru mengonsolidasi habitat dan pola fakta lalu menghapus papan tulis.' },
    { layar: 11, judul: 'Penutup · Closure Emosional dan Teaser TP-10',                 tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-10.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Tunggu sampai semua siswa duduk dan tenang.
UCAP: "Good morning, everyone."
AKSI: Tunggu respons semua siswa.
UCAP: "Sit down, please."
UCAP: "Listen."
UCAP: "We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh: jeda 3 detik dalam diam, pandang bagian kelas yang paling ramai, lanjut hanya setelah mereka berhenti.',
    cue    : 'Jangan mulai Layar 1 sebelum minimal 80 persen siswa menatap ke depan.',
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
          teks        : `AKSI: Tepuk tangan dua kali untuk menarik perhatian.
UCAP: "Last time, we wrote our weekly schedule. Days, times, activities."
UCAP: "Your schedule was about you, what you do."
AKSI: Jeda 1 detik.
UCAP: "Today, we talk about animals. What they do. Where they live. What they eat."
UCAP: "Animals have schedules too. They just don't write them down."
👂 LISTEN FIRST
AKSI: Ucapkan chant hewan dengan ritme ketukan meja.
UCAP: "Cat, dog, bird, fish, go!"
UCAP: "Rabbit, elephant, tiger, go!"
UCAP: "Frog, lion, they're alive, go!"
UCAP: "Animals, animals, let's learn, go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "Cat, dog, bird, fish, go!"
UCAP: "Rabbit, elephant, tiger, go!"
UCAP: "Frog, lion, they're alive, go!"
UCAP: "Animals, animals, let's learn, go!"`,
          bantuan     : 'Jika siswa tidak hafal chant di putaran pertama: tunjukkan gestur fisik — cakar harimau untuk tiger, tangan terangkat seperti belalai untuk elephant. Lakukan sendiri; siswa akan mengikuti.',
          cue         : 'Ucapkan jembatan ke TP-08 dengan penekanan pada "you" dan "they" sebelum chant dimulai.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Name an animal. Any animal."
AKSI: Tunjuk tiga sampai empat siswa.
AKSI: Tulis nama hewan yang disebut di papan tulis.
UCAP: "What color is a tiger?"
AKSI: Tunggu respons semua siswa.
UCAP: "What color is a frog?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk jendela kelas.
UCAP: "What's the weather today? Sunny, rainy, cloudy?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Animals live in different places. Some like hot weather. Some like cold. Today, we learn their homes."`,
          bantuan     : 'Jika kelas tidak merespons pertanyaan cuaca: tunjuk langit lewat jendela, ucapkan "Is it sunny today? Rainy?". Konteks nyata lebih cepat daripada pertanyaan abstrak.',
          cue         : 'Aktifkan warna hewan sekarang. Warna ini akan dipakai siswa saat menulis di Layar 8.',
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
AKSI: Tempel gambar jungle di sisi kiri papan tulis dengan label JUNGLE.
AKSI: Tempel gambar forest di sisi kanan papan tulis dengan label FOREST.
AKSI: Tunjuk gambar jungle.
UCAP: "Look at this."
UCAP: "This is the jungle."
AKSI: Ucapkan "jungle" perlahan per suku kata.
AKSI: Jeda 3 detik.
UCAP: "The jungle is hot and wet. Many trees. Many animals."
UCAP: "In Indonesia, we have jungle. Kalimantan. Sumatra."
AKSI: Tunjuk gambar forest.
UCAP: "And this."
UCAP: "This is the forest."
AKSI: Ucapkan "forest" perlahan per suku kata.
AKSI: Jeda 3 detik.
UCAP: "The forest is cooler. Quieter. Also many trees, but different."
AKSI: Tunjuk kedua gambar secara bergantian.
AKSI: Beri penjelasan bahwa jungle adalah hutan lebat yang panas dan forest adalah hutan yang lebih sejuk.
UCAP: "Both are homes for animals."`,
          bantuan     : 'Jika siswa bingung perbedaannya: tunjuk gambar jungle, ucapkan "sangat lebat, seperti hutan di Kalimantan". Tunjuk gambar forest, ucapkan "seperti hutan di pegunungan". Satu kontras lokal cukup.',
          cue         : 'Cukup dua adjektif per habitat dan satu jangkar lokal. Jangan masuk ke diskusi ekologi.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
UCAP: "Now, let's talk about animals and their homes."
UCAP: "Tigers, where do tigers live?"
AKSI: Jeda 1 detik.
AKSI: Biarkan dua sampai tiga siswa menjawab dalam Bahasa apa pun.
UCAP: "Tigers live in the jungle."
AKSI: Tulis "They live in the jungle." di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Tunjuk tulisan "They" di papan tulis.
AKSI: Tunjuk gambar tiger.
AKSI: Beri penjelasan bahwa "they" berarti mereka, merujuk lebih dari satu hewan.
UCAP: "Not I live. Not you live. They live. The animals."
AKSI: Tunjuk gambar elephant.
UCAP: "Elephants, where do they live?"
AKSI: Biarkan dua sampai tiga siswa menjawab dalam Bahasa apa pun.
UCAP: "They live in the forest. Or the savanna, the open grassland."
AKSI: Tulis "They live in the forest." di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk gambar tiger.
UCAP: "Say it with me!"
AKSI: Ucapkan "Tigers. They live in" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "They live in the jungle." di papan tulis.
UCAP: "They live in the jungle."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa mengucapkan "He live" atau "It live": jangan koreksi dengan keras. Ucapkan "They. The animals, more than one. They live.", lalu ulangi kalimat penuh dengan penekanan pada "They".',
          cue         : 'Tunjuk subjek "They" setiap kali diucapkan. Ini kata baru sebagai subjek non-orang-pertama.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk gambar tiger.
UCAP: "Say it together!"
UCAP: "Tiger. Where?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar elephant.
UCAP: "Elephant. Where?"
AKSI: Tunggu respons semua siswa.
AKSI: Sebut "fish".
UCAP: "Fish. Where?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk empat sampai lima gambar atau nama hewan berbeda secara acak.
AKSI: Tunggu respons semua siswa setiap kali.
AKSI: Sebut "jungle".
UCAP: "In the jungle, which animal?"
AKSI: Tunggu respons semua siswa.
AKSI: Sebut "water".
UCAP: "In the water, which animal?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk satu siswa.
UCAP: "Rabbits. Where do they live?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi pertanyaan individual untuk satu sampai dua siswa lain secara acak.`,
          bantuan     : 'Jika siswa yang ditunjuk diam lebih dari 5 detik: tunjuk gambar habitat di papan tulis, ucapkan "Jungle, or forest?". Pilihan biner lebih mudah daripada produksi bebas.',
          cue         : null,
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima satu kata, "jungle" atau "forest", tanpa kalimat penuh.',
            sudahBisa   : 'Minta kalimat penuh, "They live in the jungle. They are orange and black.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan volume suara.
AKSI: Jeda 2 detik.
👂 LISTEN FIRST
UCAP: "Now, what do animals eat?"
UCAP: "Tigers, they eat meat. They eat other animals."
AKSI: Tulis "They eat meat." di papan tulis.
AKSI: Jeda 3 detik.
UCAP: "Elephants, they eat plants. Grass, leaves, fruit."
AKSI: Tulis "They eat plants." di papan tulis.
UCAP: "Rabbits, they eat?"
AKSI: Tunggu respons semua siswa.
UCAP: "Yes, they eat grass and vegetables."
AKSI: Tulis "They eat grass." di papan tulis.
UCAP: "Let's put it together. Watch me. I will say facts about the tiger."
UCAP: "Tigers are big cats."
AKSI: Tulis "Tigers are big cats." di papan tulis.
UCAP: "They live in the jungle."
AKSI: Tulis "They live in the jungle." di papan tulis di bawahnya.
UCAP: "They eat meat. They hunt other animals."
AKSI: Tulis "They eat meat." di papan tulis di bawahnya.
UCAP: "And remember first and after that? We can use them too."
UCAP: "First, they hunt. After that, they sleep."
AKSI: Tulis "First, they hunt. After that, they sleep." di papan tulis di bawahnya.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan "Tigers are big cats." di papan tulis.
UCAP: "Say it with me!"
UCAP: "Tigers are big cats."
AKSI: Tunggu semua siswa membaca bersama dari papan tulis.
AKSI: Tunjuk tulisan "They live in the jungle." di papan tulis.
UCAP: "They live in the jungle."
AKSI: Tunggu semua siswa membaca bersama dari papan tulis.
AKSI: Tunjuk tulisan "They eat meat." di papan tulis.
UCAP: "They eat meat."
AKSI: Tunggu semua siswa membaca bersama dari papan tulis.`,
          bantuan     : 'Jika kelas membaca tidak sinkron: perlambat tempo, tunjuk kata per kata dengan spidol. Familiarisasi dengan struktur tiga kalimat lebih penting daripada sinkronisasi.',
          cue         : 'Pertahankan lima kalimat fakta harimau di papan tulis sampai Layar 8 selesai. Jika papan tulis penuh, pindahkan gambar ke pojok dan prioritaskan kelima kalimat itu.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Tell your partner facts about one animal. Choose any animal."
UCAP: "Say: They live in the forest. They eat grass."
AKSI: Tanyakan siapa yang mau menjadi contoh.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "Choose an animal. Any animal."
AKSI: Tunggu siswa yang ditunjuk menyebut satu hewan.
UCAP: "Good. Now tell me, where do they live? What do they eat?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Good. Now, your turn with your partner."
AKSI: Beri waktu empat menit, masing-masing dua menit per arah.
AKSI: Berkeliling dan dengarkan tanpa menyela.`,
          bantuan     : 'Jika satu pasang tidak bisa mulai: tunjuk gambar hewan di papan tulis, ucapkan nama hewan "Elephant. Where do they live?", setelah salah satu menjawab arahkan ke partnernya "Good. Now you ask.".',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit, atau energi kelas rendah → lewati layar ini, langsung ke Layar 8.',
            'Jika pair practice menjadi gaduh dalam satu menit → ucapkan "Okay. Take your pencil. Let\'s write.", langsung ke Layar 8.',
          ],
          diferensiasi: {
            perluSupport: 'Terima dua kalimat saja, "They live in the forest. They eat grass.".',
            sudahBisa   : 'Minta tambah satu kalimat deskripsi tentang warna, ukuran, atau sifat hewan.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Okay. Take your pencil. Let's write."
AKSI: Jeda 3 detik.
AKSI: Bagikan lembar kerja, satu per siswa.
UCAP: "Choose one animal. Write three or four facts about it."
UCAP: "Use the structure on the board. Your animal, your facts."
👂 LISTEN FIRST
AKSI: Tulis contoh fakta tiger di papan tulis: "Tigers are big cats. They live in the jungle. They eat meat."
UCAP: "Watch me. My animal, tiger. Tigers are big cats. They live in the jungle. They eat meat."
UCAP: "See the adjective, big. You can use big, small, green, fast, slow, beautiful. Choose one for your animal."
UCAP: "Now, your turn. Choose your animal."
AKSI: Pantau penulisan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa tidak tahu nama hewan dalam Bahasa Inggris: tulis lima nama hewan cadangan di pojok papan tulis, crocodile, butterfly, monkey, snake, deer, untuk dipilih.',
          cue         : 'Siswa boleh memilih hewan apa pun. Baris One more fact boleh diisi dalam Bahasa Indonesia selama tiga baris pertama dalam Bahasa Inggris.',
          darurat     : 'Jika waktu tersisa 8 menit atau kurang saat layar ini dimulai → minta siswa hanya mengisi dua baris pertama, nama dan live in, langsung ke Layar 10 tanpa melalui Layar 9.',
          diferensiasi: {
            perluSupport: 'Izinkan mengisi hanya tiga baris pertama, nama dan adjektif, live in, dan eat.',
            sudahBisa   : 'Setelah empat baris selesai, minta tambah satu kalimat dengan first atau after that, seperti "First, they hunt. After that, they sleep.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua hasil tulisan siswa — satu yang menggunakan They live in dan They eat dengan benar, satu yang memilih hewan yang tidak umum.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good. Let's hear from two friends."
AKSI: Minta siswa pertama membacakan fakta hewannya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "Nice. What animal was that?"
AKSI: Tunggu respons semua siswa.
AKSI: Tulis kalimat "They live in" dan "They eat" dari fakta siswa pertama di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Minta siswa kedua membacakan fakta hewannya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "Nice. What animal was that?"
AKSI: Tunggu respons semua siswa.
AKSI: Tulis kalimat "They live in" dan "They eat" dari fakta siswa kedua di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa yang diminta membaca menolak: ucapkan "That\'s okay.", lalu tunjuk siswa lain tanpa komentar tambahan.',
          cue         : 'Pilih siswa yang berbeda dari peserta Layar 5.',
          darurat     : 'Jika waktu tersisa kurang dari 10 menit → lewati layar ini, langsung ke Layar 10.',
          diferensiasi: null,
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,
      langkah: [

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa menyimpan lembar kerja di dalam tas.
AKSI: Berdiri kembali di depan kelas.
UCAP: "Good work today. Let's remember."
AKSI: Tanyakan kata Inggris untuk "hutan lebat yang panas".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan kata Inggris untuk "hutan yang lebih sejuk".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
UCAP: "How do we say animals live somewhere?"
AKSI: Tunggu respons semua siswa.
UCAP: "And what they eat?"
AKSI: Tunggu respons semua siswa.
UCAP: "Give me two facts about tigers. Fast."
AKSI: Tunggu respons semua siswa.
AKSI: Hapus tulisan "They eat" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "They eat".
AKSI: Hapus tulisan "They live in" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "They live in".
AKSI: Lepaskan gambar forest dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "forest".
AKSI: Lepaskan gambar jungle dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "jungle".`,
          bantuan     : null,
          cue         : 'Hapus "They eat" sebelum "They live in".',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, one question."
UCAP: "What is your favorite animal? And why?"
AKSI: Tunjuk satu sampai dua siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Jeda 3 detik.
UCAP: "Every animal has a home. Every animal has food. Now you can say that in English."
UCAP: "Next time, we talk about weather and what we wear. Sunny days, rainy days, and what we put on."
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'Akhiri sesi dengan ritual goodbye, bukan instruksi administratif. Jika siswa menjawab dalam Bahasa Indonesia, ucapkan nama Inggrisnya sekali lalu lanjut.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → biarkan siswa merapikan meja, jangan tambahkan aktivitas baru.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B09;
