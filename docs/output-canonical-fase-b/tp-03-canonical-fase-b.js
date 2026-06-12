const TP_B03 = {

  // METADATA
  id     : 'tp-b03',
  nomor  : 3,
  kelas  : 3,
  nama   : 'My Neighborhood',
  tema   : 'Mendeskripsikan tempat dan posisi di lingkungan sekitar',
  kluster: 'A — Diri, Sekolah, dan Komunitas',
  jenis  : 'Biasa',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebutkan nama tempat di lingkungan sekitar (market dan mosque) dalam kalimat sederhana bahasa Inggris.',
    'Peserta didik dapat menggunakan preposisi posisi "next to" dan "across from" untuk mendeskripsikan letak tempat secara lisan.',
    'Peserta didik dapat menulis kalimat sederhana tentang lingkungan tempat tinggal menggunakan preposisi posisi dan kosakata tempat.',
  ],
  vocab     : ['market', 'mosque', 'next to', 'across from', 'door', 'window', 'near',
               'in front of', 'house', 'school', 'big', 'fish'],
  persiapan : [
    'Lembar kerja siswa satu per siswa, berisi peta kosong berlabel "MY NEIGHBORHOOD" dengan satu kotak "MY HOUSE" terisi di tengah, tiga kotak kosong di sekitarnya, dan empat kalimat rumpang di bawah peta, di meja guru sebelum dibagikan.',
    'Papan tulis dan spidol untuk menggambar peta dan menulis kalimat di Layar 3, Layar 5, Layar 6, Layar 7, Layar 8, Layar 9, dan Layar 10.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [
    { file: 'tp-b03-bank.png',                        label: 'Bank' },
    { file: 'tp-b03-behind.png',                      label: 'Behind' },
    { file: 'tp-b03-hospital.png',                    label: 'Hospital' },
    { file: 'tp-b03-in-front-of.png',                 label: 'In Front Of' },
    { file: 'tp-b03-market.png',                      label: 'Market' },
    { file: 'tp-b03-mosque.png',                      label: 'Mosque' },
    { file: 'tp-b03-neighborhood-map-worksheet.png',  label: 'Neighborhood Map Worksheet' },
    { file: 'tp-b03-next-to.png',                     label: 'Next To' },
    { file: 'tp-b03-park.png',                        label: 'Park' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi',                  tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-02 dan Chant Lingkungan',         tujuan: 'Guru menghubungkan pelajaran lalu dan menyalakan energi lewat chant kosakata lingkungan.' },
    { layar:  2, judul: 'Pembuka · Reactivation House, School, Door, Window',   tujuan: 'Guru meninjau kosakata tempat dan benda dari Fase A.' },
    { layar:  3, judul: 'Inti · Introduksi Market dan Mosque',                  tujuan: 'Guru memperkenalkan dua tempat baru di lingkungan.' },
    { layar:  4, judul: 'Inti · Drill Market dan Mosque',                       tujuan: 'Guru memimpin drill nama tempat baru.' },
    { layar:  5, judul: 'Inti · Introduksi Next To',                            tujuan: 'Guru memperkenalkan preposisi posisi next to.' },
    { layar:  6, judul: 'Inti · Introduksi Across From',                        tujuan: 'Guru memperkenalkan preposisi posisi across from.' },
    { layar:  7, judul: 'Inti · Modeling Kalimat Posisi dan Baca Bersama',      tujuan: 'Guru memodelkan kalimat posisi dan memimpin baca bersama.' },
    { layar:  8, judul: 'Inti · Menulis Peta Lingkunganku',                     tujuan: 'Guru memandu siswa menulis dan menggambar peta lingkungan.' },
    { layar:  9, judul: 'Inti · Berkeliling dan Review Tulisan',                tujuan: 'Guru meninjau hasil tulisan dan kontras gestur posisi.' },
    { layar: 10, judul: 'Penutup · Sharing dan Review Cepat',                   tujuan: 'Guru mengonsolidasi kosakata dan preposisi inti.' },
    { layar: 11, judul: 'Penutup · Closure Emosional',                          tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-04.' },
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
    cue    : 'Jangan mulai Layar 1 sebelum minimal 80 persen siswa menatap ke depan. Ucapkan "Sit down" dan "Listen" dengan nada rutin, bukan instruksi baru.',
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
UCAP: "Last time, we talked about people."
UCAP: "How do we describe hair?"
AKSI: Tunggu respons semua siswa.
UCAP: "And if someone is good and caring?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. And how do we say it?"
AKSI: Tunggu respons semua siswa.
UCAP: "Great. Today, we talk about our neighborhood."
UCAP: "The places near our house."
👂 LISTEN FIRST
AKSI: Ucapkan chant dengan ritme ketukan meja.
UCAP: "House, school, door, window, let's go!"
UCAP: "Near my house, near my school, let's go!"
UCAP: "This is my neighborhood, let's go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "House, school, door, window, let's go!"
UCAP: "Near my house, near my school, let's go!"
UCAP: "This is my neighborhood, let's go!"
AKSI: Biarkan siswa ikut mengetuk meja di putaran kedua.`,
          bantuan     : 'Jika siswa tidak hafal chant di putaran pertama: turunkan tempo, tunjuk pintu kelas saat mengucapkan "door", tunjuk jendela saat mengucapkan "window".',
          cue         : 'Biarkan energi kelas naik selama chant. Ini satu-satunya momen energi tinggi di sesi ini.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk pintu kelas.
UCAP: "What is this?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk jendela kelas.
UCAP: "And this?"
AKSI: Tunggu respons semua siswa.
AKSI: Gerakkan tangan menunjuk sekeliling ruangan.
UCAP: "Good. Now, what is this building?"
AKSI: Tunggu respons semua siswa.
UCAP: "And where do you sleep at night?"
UCAP: "Where is your family?"
AKSI: Tunggu respons semua siswa.
UCAP: "Is our school big or small?"
AKSI: Tunggu respons semua siswa.
UCAP: "And your house, big or small?"
AKSI: Tunggu respons semua siswa.
UCAP: "What is near your house?"
AKSI: Biarkan dua sampai tiga siswa menjawab dalam Bahasa apa pun.
AKSI: Dengarkan tanpa koreksi.
UCAP: "Good. Today, we learn the words for those places."`,
          bantuan     : 'Jika semua siswa tidak merespons "near your house": ubah pertanyaan ke Bahasa Indonesia satu kali, ucapkan "Di dekat rumah kalian ada apa?", setelah siswa menjawab lanjut ke Layar 3 tanpa memaksa terjemahan.',
          cue         : 'Jangan berhenti di satu pertanyaan lebih dari 5 detik. Jawaban "big" atau "small" yang berbeda antar siswa diterima, tidak perlu disamakan.',
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
AKSI: Buat gambar dua bangunan sederhana di papan tulis.
AKSI: Buat gambar atap biasa pada bangunan pertama.
AKSI: Tulis label "MARKET" besar di bawah bangunan pertama.
AKSI: Buat gambar kubah pada bangunan kedua.
AKSI: Tulis label "MOSQUE" besar di bawah bangunan kedua.
AKSI: Tunjuk gambar market.
UCAP: "Look at this."
UCAP: "This is the market."
UCAP: "Mar-ket."
AKSI: Jeda 3 detik.
UCAP: "In the market, we buy food."
UCAP: "We buy vegetables."
UCAP: "We buy fish."
AKSI: Tunjuk gambar mosque.
UCAP: "And this."
UCAP: "This is the mosque."
UCAP: "Mosque."
AKSI: Jeda 3 detik.
UCAP: "In the mosque, we pray."
UCAP: "It has a big door."
AKSI: Tunjuk gambar market lalu gambar mosque sekali lagi.
UCAP: "Market, mosque."
UCAP: "These are places in our neighborhood."`,
          bantuan     : 'Jika siswa bingung dengan "market": tunjuk gambar, sebutkan padanan "pasar" satu kali, lalu ucapkan "market." Jangan ulang terjemahan di layar berikutnya.',
          cue         : 'Tulis label MARKET dan MOSQUE besar dan jelas, terlihat dari semua sudut kelas.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk gambar market.
UCAP: "This place?"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar mosque.
UCAP: "This place?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar market dan gambar mosque bergantian empat sampai lima kali.
AKSI: Berhenti menunjuk gambar.
UCAP: "Where do we buy food?"
AKSI: Tunggu respons semua siswa.
UCAP: "Where do we pray?"
AKSI: Tunggu respons semua siswa.
AKSI: Panggil nama satu siswa.
UCAP: "Where do you buy fish?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Panggil nama siswa yang berbeda.
UCAP: "What is near your house, market or mosque?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi pertanyaan individual untuk dua sampai tiga siswa secara acak.`,
          bantuan     : [
            'Jika siswa yang ditunjuk diam lebih dari 5 detik: tunjuk gambar, ucapkan suku awal "mar" lalu tunggu.',
            'Jika siswa masih diam: ucapkan kata bersama semua siswa, lalu lanjut tanpa komentar.',
          ],
          cue         : 'Bolak-balik dua gambar tanpa jeda panjang.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima jawaban satu kata "market" atau "mosque".',
            sudahBisa   : 'Minta kalimat "The market is near my house.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Buat gambar satu jalan horizontal di papan tulis.
AKSI: Buat gambar dua bangunan berdampingan di sisi jalan yang sama.
AKSI: Tulis label "SCHOOL" di bawah bangunan pertama.
AKSI: Tulis label "MARKET" di bawah bangunan kedua.
AKSI: Tunjuk peta di papan tulis.
UCAP: "Look at this map."
AKSI: Tunjuk bangunan market di peta.
UCAP: "Where is the market?"
AKSI: Jeda 3 detik.
AKSI: Tunjuk posisi market dan school di peta.
UCAP: "The market is next to the school."
AKSI: Tulis "The market is next to the school." di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Tunjuk tulisan di papan tulis.
AKSI: Tunjuk gambar di peta.
AKSI: Beri penjelasan bahwa "next to" artinya di sebelah.
AKSI: Gerakkan dua tangan berdampingan.
UCAP: "Next to. Side by side."
AKSI: Jeda 3 detik.
UCAP: "The market is next to the school."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan di papan tulis.
UCAP: "Say it with me!"
UCAP: "The market is next to the school."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk pintu dan jendela kelas yang berdekatan.
AKSI: Gerakkan dua tangan berdampingan.
UCAP: "The door is next to the window."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika semua siswa tidak merespons kalimat bersama: tunjuk gambar, ucapkan kalimat satu kata per satu — "The, market, is, next to, the, school." — minta siswa echo tiap kata sebelum kalimat penuh.',
          cue         : 'Gunakan gestur dua tangan berdampingan setiap kali "next to" muncul, sampai Layar 8.',
          darurat     : 'Jika Layar 5 melewati 6 menit dan siswa belum bisa mengulang kalimat → lanjut ke Layar 6. Scaffold peta dan kalimat tertulis sudah cukup sebagai referensi di Layar 8.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Tambahkan satu bangunan di sisi jalan yang berlawanan pada peta di papan tulis.
AKSI: Tulis label "MOSQUE" di bawah bangunan baru, berseberangan dari SCHOOL.
AKSI: Tunjuk peta di papan tulis.
UCAP: "Look at the map again."
AKSI: Tunjuk bangunan mosque di peta.
UCAP: "Where is the mosque?"
AKSI: Jeda 3 detik.
AKSI: Tunjuk jalan di tengah peta sebagai pemisah.
UCAP: "The mosque is across from the school."
AKSI: Tulis "The mosque is across from the school." di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Beri penjelasan bahwa "across from" artinya di seberang.
AKSI: Rentangkan dua tangan ke arah berlawanan.
UCAP: "Across from. On the other side of the road."
AKSI: Jeda 3 detik.
UCAP: "The mosque is across from the school."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan di papan tulis.
UCAP: "Say it with me!"
UCAP: "The mosque is across from the school."
AKSI: Tunggu respons semua siswa.
AKSI: Gerakkan dua tangan berdampingan.
UCAP: "The market is next to the school."
AKSI: Tunggu respons semua siswa.
AKSI: Rentangkan dua tangan ke arah berlawanan.
UCAP: "The mosque is across from the school."
AKSI: Tunggu respons semua siswa.
AKSI: Gerakkan dua tangan berdampingan.
UCAP: "Next to."
AKSI: Tunggu semua siswa membuat gestur yang sama.
AKSI: Rentangkan dua tangan ke arah berlawanan.
UCAP: "Across from."
AKSI: Tunggu semua siswa membuat gestur yang sama.`,
          bantuan     : 'Jika siswa masih mencampur "next to" dan "across from": tunjuk jalan di tengah peta, ucapkan "Across from, ada jalan di tengah. Next to, tidak ada jalan.".',
          cue         : 'Gunakan kontras gestur berdampingan dan berseberangan secara konsisten sampai Layar 8.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Periksa peta di papan tulis — pastikan label SCHOOL, MARKET, dan MOSQUE sudah tertulis.
UCAP: "Good. Now, let's add more."
AKSI: Tulis "The school has a big door." di papan tulis.
AKSI: Tulis "The market is near my house." di papan tulis.
AKSI: Tulis "The mosque is in front of the market." di papan tulis.
UCAP: "Five sentences."
UCAP: "Let's read them all together."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kelima kalimat di papan tulis satu per satu.
UCAP: "Say it with me!"
AKSI: Tunggu respons semua siswa.
AKSI: Pada putaran kedua, tunjuk kalimat tanpa memimpin suara.
AKSI: Tunjuk kalimat "The school has a big door." di papan tulis.
UCAP: "Look at this one."
UCAP: "The school has a big door."
UCAP: "Remember last time? She has curly hair."
UCAP: "Same word, has."
UCAP: "She has curly hair. The school has a big door."
UCAP: "Has, same pattern."
AKSI: Jeda 3 detik.
UCAP: "These are the sentences we use today."
UCAP: "In a moment, you will write about your own neighborhood."
UCAP: "Your house. Your market. Your mosque."`,
          bantuan     : 'Jika semua siswa membaca tidak sinkron di putaran kedua: jangan paksa sinkronisasi, biarkan tiap siswa membaca dalam tempo sendiri.',
          cue         : 'Pertahankan kelima kalimat di papan tulis sampai Layar 8 selesai. Jangan hapus sebelum semua siswa selesai menulis.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Okay. Take your pencil. Let's write."
AKSI: Bagikan lembar kerja, satu per siswa.
UCAP: "Draw the places near your house."
UCAP: "Write their names in the boxes."
UCAP: "Then complete the sentences."
UCAP: "Use the words on the board."
👂 LISTEN FIRST
AKSI: Buat gambar satu kotak di sebelah kotak MY HOUSE pada peta di papan tulis.
AKSI: Tulis "MARKET" di dalam kotak yang baru.
UCAP: "Watch me."
UCAP: "Near my house, there is a market."
AKSI: Tulis "The market is next to my house." di baris pertama template di papan tulis.
UCAP: "The market is next to my house."
UCAP: "Now, you draw your neighborhood."
UCAP: "Your places. Your sentences."
AKSI: Berkeliling di antara meja siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa tidak tahu apa yang ada di dekat rumahnya: bisikkan "Draw a place near our school.", tunjuk peta di papan tulis.',
          cue         : 'Siswa boleh menggambar tempat lain selain market dan mosque. Kosakata yang belum ada di papan tulis boleh ditulis dalam Bahasa Indonesia.',
          darurat     : 'Jika waktu tersisa 8 menit atau kurang saat layar dimulai, atau energi kelas jatuh sebelum menit keempat → lewati aktivitas menggambar peta, minta siswa mengisi dua kalimat pertama saja, langsung ke Layar 10 tanpa melalui Layar 9.',
          diferensiasi: {
            perluSupport: 'Minta isi dua kalimat pertama dan gambar dua tempat, izinkan menyalin kalimat dari papan tulis dengan mengganti satu kata.',
            sudahBisa   : 'Minta isi keempat kalimat dan tambah satu kalimat bebas tentang lingkungannya.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua hasil tulisan siswa — satu menggunakan "next to", satu menggunakan "across from" atau tempat di luar market dan mosque.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good. Let's hear from two friends."
AKSI: Minta dua siswa membacakan kalimat mereka ke semua siswa.
UCAP: "Nice."
AKSI: Tulis kalimat yang baru dibacakan siswa di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Let's say it together."
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Gerakkan dua tangan berdampingan.
UCAP: "Next to."
AKSI: Rentangkan dua tangan ke arah berlawanan.
UCAP: "Across from."
UCAP: "Remember these two. They are different."`,
          bantuan     : 'Jika siswa yang diminta membaca menolak: ucapkan "That\'s okay.", lalu tunjuk siswa lain tanpa komentar tambahan.',
          cue         : 'Pilih siswa yang berbeda dari peserta Layar 4. Siswa yang menulis nama tempat dalam Bahasa Indonesia dibaca dengan bangga, bukan dikoreksi.',
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
UCAP: "Good work today, everyone."
UCAP: "Let's remember."
AKSI: Tunjuk gambar market di papan tulis.
UCAP: "What place is this?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar mosque di papan tulis.
UCAP: "And this?"
AKSI: Tunggu respons semua siswa.
AKSI: Gerakkan dua tangan berdampingan.
UCAP: "Next to or across from?"
AKSI: Tunggu respons semua siswa.
AKSI: Rentangkan dua tangan ke arah berlawanan.
UCAP: "And this?"
AKSI: Tunggu respons semua siswa.
UCAP: "Give me a sentence."
AKSI: Ucapkan "The market is" agar siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Hapus kata-kata di papan tulis satu per satu dengan urutan "market", "mosque", "next to", lalu "across from".
AKSI: Tunggu semua siswa mengucapkan setiap kata yang dihapus.`,
          bantuan     : null,
          cue         : 'Jaga ritme tetap tenang di layar ini. Hapus papan tulis adalah ritual penutup, bukan drill.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, I want to ask you something."
UCAP: "What place did you draw today?"
UCAP: "What is near your house?"
AKSI: Tunjuk satu sampai dua siswa yang mau berbagi.
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Jeda 5 detik.
UCAP: "I like that."
UCAP: "Your neighborhood is your world."
UCAP: "Next time, something special."
UCAP: "We will use everything we learned, school, people, neighborhood."
UCAP: "We will write about it all together."
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'Akhiri sesi dengan ritual goodbye, bukan instruksi administratif. Ucapkan "Your neighborhood is your world." dengan tenang, bukan terburu-buru.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → biarkan siswa merapikan meja, jangan tambahkan aktivitas baru.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B03;
