const TP_10 = {

  // METADATA
  id    : 'tp-10',
  nomor : 10,
  kelas : 2,
  nama  : 'Food and Drinks',
  tema  : 'Kehidupan Sehari-hari',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebut nama 10 makanan dan minuman umum dengan lafal yang benar.',
    'Peserta didik dapat mengungkapkan preferensi menggunakan "I like ..." dan "I do not like ..." dengan alasan sederhana.',
    'Peserta didik dapat menanyakan dan merespons preferensi makanan: "Do you like ...? Yes, I do / No, I do not."',
  ],
  vocab     : ['apple', 'banana', 'rice', 'noodles', 'bread', 'egg', 'chicken', 'fish', 'milk', 'water', 'juice', 'like', 'do not like'],
  persiapan : [
    'Kartu printable makanan dan minuman x10: rice, bread, egg, apple, banana, milk, water, juice, noodles, chicken.',
    'Kartu sudah diberi nomor urut di belakang, ditempel sesuai gelombang.',
    'Lembar piring kosong dengan sepuluh ikon makanan kecil, satu per siswa, disiapkan sebelum kelas masuk, belum dibagikan.',
    'Papan tulis: tulis "I like ___.", "I don\'t like ___.", "Do you like ___?", "Yes, I do.", dan "No, I don\'t." sebelum kelas masuk.',
    'Simbol A dan B ditempel di papan tulis sebelum kelas masuk.',
    'Tidak ada material siswa di meja sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [
    { file: 'tp10-apple.png',           label: 'Apple' },
    { file: 'tp10-banana.png',          label: 'Banana' },
    { file: 'tp10-bread.png',           label: 'Bread' },
    { file: 'tp10-chicken.png',         label: 'Chicken' },
    { file: 'tp10-egg.png',             label: 'Egg' },
    { file: 'tp10-juice.png',           label: 'Juice' },
    { file: 'tp10-milk.png',            label: 'Milk' },
    { file: 'tp10-noodles.png',         label: 'Noodles' },
    { file: 'tp10-plate-worksheet.png', label: 'Plate Worksheet' },
    { file: 'tp10-rice.png',            label: 'Rice' },
    { file: 'tp10-water.png',           label: 'Water' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',                          tujuan: 'Guru mengunci perhatian siswa sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Hook Sarapan',                               tujuan: 'Guru memancing minat lewat cerita sarapan.' },
    { layar:  2, judul: 'Inti · Listen First Gelombang 1',                      tujuan: 'Guru memperkenalkan lima makanan pertama.' },
    { layar:  3, judul: 'Inti · Produksi Bersama Gelombang 1',                  tujuan: 'Guru memimpin produksi nama lima makanan pertama.' },
    { layar:  4, judul: 'Inti · Reactivation + Listen First Gelombang 2',       tujuan: 'Guru meninjau gelombang 1 dan memperkenalkan lima makanan berikutnya.' },
    { layar:  5, judul: 'Inti · Produksi Bersama Gelombang 2 + Gabungan',       tujuan: 'Guru memimpin produksi sepuluh makanan dalam tiga fase.' },
    { layar:  6, judul: 'Inti · Reset Sebelum Struktur',                        tujuan: 'Guru menenangkan kelas sebelum masuk struktur kalimat.' },
    { layar:  7, judul: 'Inti · Listen First "I like" dan "I don\'t like"',     tujuan: 'Guru memodelkan pola suka dan tidak suka.' },
    { layar:  8, judul: 'Inti · Produksi Bersama "I like / I don\'t like"',     tujuan: 'Guru memimpin produksi pola suka dan tidak suka.' },
    { layar:  9, judul: 'Inti · Listen First Dialog "Do you like?"',            tujuan: 'Guru memodelkan dan melatih dialog tanya jawab.' },
    { layar: 10, judul: 'Inti · Demo Partner + Distribusi Piring',              tujuan: 'Guru mendemokan dialog dan memandu latihan berpasangan.' },
    { layar: 11, judul: 'Penutup · Reset + Survei Oral',                        tujuan: 'Guru memimpin survei oral cepat.' },
    { layar: 12, judul: 'Penutup · Exit Ticket',                               tujuan: 'Guru mengecek pemahaman lewat satu kalimat.' },
    { layar: 13, judul: 'Penutup · Closing',                                   tujuan: 'Guru menutup kelas.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
UCAP: "Good morning, everyone!"
UCAP: "How are you today?"
AKSI: Tunggu respons siswa.
UCAP: "Great! Me too."
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
          teks        : `AKSI: Berdiri di tengah kelas.
UCAP: "Are you hungry?"
AKSI: Tunggu respons siswa.
→ Siswa: menjawab bebas.
UCAP: "What did you eat for breakfast today?"
AKSI: Tunggu dua sampai tiga respons siswa, boleh dalam Bahasa Indonesia.
→ Siswa: menyebut makanan sarapan secara bebas.
UCAP: "Me too."
UCAP: "Listen."
AKSI: Tunjuk diri sendiri.
AKSI: Angkat jempol sambil tersenyum lebar.
UCAP: "This morning I ate rice!"
UCAP: "I like rice."
UCAP: "Say it with me."
→ Siswa: "I like rice."`,
          bantuan     : 'Jika ada siswa yang diam: lanjut tanpa menunjuk siswa itu, tanpa komentar.',
          cue         : 'Jangan koreksi apa pun di layar ini. Jika kelas diam total saat ditanya sarapan: jawab sendiri dua kali dengan makanan berbeda, lalu lanjut.',
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
AKSI: Tempel kartu rice di papan tulis.
AKSI: Tempel kartu bread di papan tulis.
AKSI: Tempel kartu egg di papan tulis.
AKSI: Tempel kartu apple di papan tulis.
AKSI: Tempel kartu banana di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu rice.
AKSI: Peragakan gestur makan nasi.
UCAP: "Rice."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu bread.
AKSI: Peragakan gestur menggigit roti.
UCAP: "Bread."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu egg.
AKSI: Peragakan gestur memecah telur.
UCAP: "Egg."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu apple.
AKSI: Peragakan gestur menggigit apel.
UCAP: "Apple."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu banana.
AKSI: Peragakan gestur mengupas pisang.
UCAP: "Banana."`,
          bantuan     : null,
          cue         : 'Satu tangan menunjuk kartu, satu tangan membuat gestur. Ucapkan hanya nama makanan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "I point, you say the name."
UCAP: "Say it together!"
AKSI: Tunjuk kartu rice.
→ Siswa: "Rice!"
AKSI: Tunjuk kartu bread.
→ Siswa: "Bread!"
AKSI: Tunjuk kartu egg.
→ Siswa: "Egg!"
AKSI: Tunjuk kartu apple.
→ Siswa: "Apple!"
AKSI: Tunjuk kartu banana.
→ Siswa: "Banana!"
AKSI: Ulangi urutan sekali lagi dengan dua kartu diacak.
UCAP: "Now, with feeling."
AKSI: Peragakan ekspresi senang.
AKSI: Tunjuk kartu apple.
AKSI: Ucapkan "I like..." agar siswa melengkapi kalimat.
→ Siswa: "...apple!"
AKSI: Tunjuk kartu banana.
AKSI: Ucapkan "I like..." agar siswa melengkapi kalimat.
→ Siswa: "...banana!"`,
          bantuan     : 'Jika hanya sebagian siswa ikut: ucapkan "Everybody. Together.", lalu ulangi kartu itu sekali.',
          cue         : '"With feeling" berarti ekspresi wajah, bukan suara keras.',
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
AKSI: Tempel kartu milk di papan tulis.
AKSI: Tempel kartu water di papan tulis.
AKSI: Tempel kartu juice di papan tulis.
AKSI: Tempel kartu noodles di papan tulis.
AKSI: Tempel kartu chicken di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu milk.
AKSI: Peragakan gestur menuang susu.
UCAP: "Milk."
AKSI: Tunjuk kartu water.
AKSI: Peragakan gestur minum air.
UCAP: "Water."
AKSI: Tunjuk kartu juice.
AKSI: Peragakan gestur memegang gelas jus.
UCAP: "Juice."
AKSI: Tunjuk kartu noodles.
AKSI: Peragakan gestur makan mi dengan sumpit.
UCAP: "Noo-dles."
UCAP: "Noodles."
AKSI: Tunjuk kartu chicken.
AKSI: Peragakan gestur menggigit ayam.
UCAP: "Chicken."
UCAP: "Listen one more time."
AKSI: Ulangi kelima nama sekali lagi.`,
          bantuan     : null,
          cue         : 'Ucapkan "Noo-dles" dua kali jika terasa asing, dan ucapkan juice dengan bunyi /dʒuːs/, bukan "jus". Reactivation cukup 15–20 detik tanpa koreksi.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunjuk kartu milk, water, juice, noodles, dan chicken berurutan.
→ Siswa: menyebut nama setiap kartu.
UCAP: "Now, names only."
AKSI: Tunjuk kesepuluh kartu berurutan.
→ Siswa: menyebut nama setiap kartu.
UCAP: "Ready?"
UCAP: "Fast!"
AKSI: Pilih lima kartu secara acak.
AKSI: Tunjuk satu kartu, lalu tahan 1 detik sebelum kartu berikutnya.
→ Siswa: menyebut nama setiap kartu.`,
          bantuan     : 'Jika kelas lambat pada noodles atau juice: kurangi kecepatan, ulangi kartu itu dua kali, lalu lanjut.',
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
AKSI: Tunjuk pola "I like ___." di papan tulis.
AKSI: Tunjuk pola "I don't like ___." di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu rice.
AKSI: Angkat jempol sambil tersenyum lebar.
UCAP: "I like rice."
AKSI: Tunjuk kartu egg.
AKSI: Peragakan ekspresi senang.
UCAP: "I like egg."
AKSI: Tunjuk kartu juice.
AKSI: Peragakan gestur menggeleng dengan ekspresi tidak suka.
UCAP: "I don't like juice."
UCAP: "Listen one more time."
AKSI: Ulangi ketiga kalimat sekali lagi.`,
          bantuan     : null,
          cue         : 'Lebih-lebihkan ekspresi suka dan tidak suka. Modelkan tiga contoh sendiri sebelum kelas produksi.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunjuk kartu chicken.
AKSI: Ucapkan "I like..." agar siswa melengkapi kalimat.
→ Siswa: "...chicken!"
AKSI: Tunjuk kartu banana.
AKSI: Ucapkan "I like..." agar siswa melengkapi kalimat.
→ Siswa: "...banana!"
AKSI: Tunjuk kartu water.
AKSI: Ucapkan "I don't like..." agar siswa melengkapi kalimat.
→ Siswa: "...water!"
AKSI: Tunjuk kartu bread.
AKSI: Ucapkan "I don't like..." agar siswa melengkapi kalimat.
→ Siswa: "...bread!"
UCAP: "Your turn!"
UCAP: "Pick one."
AKSI: Tunjuk satu kartu secara acak.
UCAP: "I like? Or I don't like?"
→ Siswa: memilih sendiri lalu mengucapkan kalimatnya.`,
          bantuan     : 'Jika kelas diam saat diminta memilih: tunjuk dua kartu sekaligus, ucapkan "This one, or this one?", lalu biarkan siswa memilih.',
          cue         : 'Target produksi: kelas dapat memilih "I like" atau "I don\'t like" sendiri untuk satu kartu.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Tunjuk pola "Do you like ___?" di papan tulis.
AKSI: Tunjuk pola "Yes, I do." di papan tulis.
AKSI: Tunjuk pola "No, I don't." di papan tulis.
UCAP: "Listen."
UCAP: "Question only first."
AKSI: Condongkan badan ke kiri.
UCAP: "Do you like rice?"
UCAP: "Say it together."
→ Siswa: "Do you like rice?"
AKSI: Condongkan badan ke kiri.
UCAP: "Do you like banana?"
UCAP: "Say it together."
→ Siswa: "Do you like banana?"
UCAP: "Now, answer only."
AKSI: Condongkan badan ke kanan.
AKSI: Angkat jempol.
UCAP: "Yes, I do!"
UCAP: "Say it together."
→ Siswa: "Yes, I do!"
AKSI: Condongkan badan ke kanan.
AKSI: Peragakan gestur menggeleng.
UCAP: "No, I don't."
UCAP: "Say it together."
→ Siswa: "No, I don't."
UCAP: "Now, full dialog."
AKSI: Condongkan badan ke kiri.
UCAP: "Do you like rice?"
AKSI: Condongkan badan ke kanan.
UCAP: "Yes, I do!"
AKSI: Condongkan badan ke kiri.
UCAP: "Do you like water?"
AKSI: Condongkan badan ke kanan.
UCAP: "No, I don't."
AKSI: Condongkan badan ke kiri.
UCAP: "Do you like noodles?"
AKSI: Condongkan badan ke kanan.
UCAP: "Yes, I do!"
UCAP: "I ask, you answer."
AKSI: Condongkan badan ke kiri.
UCAP: "Do you like rice?"
→ Siswa: "Yes, I do!"
AKSI: Condongkan badan ke kiri.
UCAP: "Do you like water?"
→ Siswa: "No, I don't."`,
          bantuan     : null,
          cue         : 'Urutan wajib: question only, answer only, full dialog, lalu whole-class drill. Jaga marker badan kiri dan kanan konsisten sepanjang layar.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Watch first."
AKSI: Tunjuk satu siswa untuk maju ke depan.
UCAP: "You, you."
AKSI: Condongkan badan ke kiri.
UCAP: "Do you like rice?"
→ Siswa: "Yes, I do!" atau "No, I don't."
AKSI: Condongkan badan ke kiri.
UCAP: "Do you like banana?"
→ Siswa: menjawab.
UCAP: "Good."
UCAP: "Switch."
→ Siswa: "Do you like chicken?"
UCAP: "Yes, I do!"
UCAP: "That's the game."
UCAP: "Ask, answer, switch."
UCAP: "Partner voice, not shouting."
AKSI: Tunjuk simbol A dan B di papan tulis.
UCAP: "A asks first."
UCAP: "B answers."
AKSI: Tunjuk kartu rice, banana, milk, noodles, dan chicken.
UCAP: "Use these five cards only."
AKSI: Bagikan lembar piring kosong, satu per siswa.
AKSI: Jangan memberi instruksi baru saat membagikan lembar.
UCAP: "Circle the foods you like."
UCAP: "Quick, no coloring."
AKSI: Tetap berdiri di depan kelas.
UCAP: "Five, four, three, two, one."
UCAP: "When I clap, stop."
AKSI: Tepuk tangan sekali untuk melatih tanda berhenti.
UCAP: "Now, ask your partner."
UCAP: "Go."
AKSI: Setelah 90 detik, tepuk tangan sekali.
UCAP: "Switch."
UCAP: "Other partner asks now."
AKSI: Tepuk tangan sekali untuk melanjutkan.`,
          bantuan     : 'Jika pasangan diam total: dekati, bisikkan "Ask: Do you like rice?", tanpa menghentikan kelas.',
          cue         : 'Jangan koreksi grammar saat latihan berlangsung. Lembar piring kosong adalah bahan bicara, bukan aktivitas utama.',
          darurat     : 'Jika waktu ≤10 menit → lewati demo dan partner practice, langsung ke Layar 11.',
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
          teks        : `AKSI: Tepuk tangan sekali.
UCAP: "Stop."
UCAP: "Eyes on me."
AKSI: Jeda 2 detik.
UCAP: "Quick survey."
AKSI: Condongkan badan ke kiri.
UCAP: "Do you like rice?"
→ Siswa: "Yes, I do!" sambil mengangkat tangan, atau "No, I don't."
UCAP: "Do you like banana?"
→ Siswa: menjawab.
UCAP: "Do you like water?"
→ Siswa: menjawab.
UCAP: "Wow, many people like rice!"
UCAP: "Interesting."`,
          bantuan     : null,
          cue         : 'Survei maksimal tiga item. Jangan hitung detail, cukup sebut "many!" atau "only a few!".',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pegang kartu apple dan kartu noodles.
AKSI: Tunjukkan kedua kartu ke semua siswa.
UCAP: "Last one."
UCAP: "Choose one."
UCAP: "Write one sentence."
UCAP: "I like, or I don't like."
UCAP: "Your choice."
AKSI: Tunggu 45 sampai 60 detik.
UCAP: "Show me."`,
          bantuan     : 'Terima kalimat penuh, kata saja seperti "like apple", atau lingkaran di lembar piring dengan jempol naik atau turun, tanpa koreksi terbuka.',
          cue         : 'Gunakan dua pilihan kartu dengan satu kalimat. Jangan diperluas.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "One more time."
UCAP: "Do you like noodles?"
→ Siswa: "Yes, I do!" atau "No, I don't."
AKSI: Tunjuk kesepuluh kartu berurutan.
→ Siswa: menyebut nama setiap kartu bersama.
UCAP: "Today, food and drinks."
UCAP: "You can say: I like."
UCAP: "You can say: I don't like."
UCAP: "You can say: Do you like?"
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

export default TP_10;
