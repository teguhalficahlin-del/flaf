const TP_B17 = {

  // METADATA
  id     : 'tp-b17',
  nomor  : 17,
  kelas  : 4,
  nama   : 'Getting Around: Directions',
  tema   : 'Meminta dan memberikan petunjuk arah menggunakan instruksi navigasi sederhana',
  kluster: 'E — Aksi, Arah, dan Cerita',
  jenis  : 'Biasa',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat memberikan petunjuk arah sederhana menggunakan "turn left," "turn right," dan "go straight."',
    'Peserta didik dapat menggunakan pola "How do I get to…?" untuk meminta petunjuk arah.',
    'Peserta didik dapat menggambar peta sederhana dan menulis petunjuk arah dari satu tempat ke tempat lain.',
  ],
  vocab     : ['school', 'market', 'library', 'hospital', 'turn left', 'turn right', 'go straight', 'How do I get to...?'],
  persiapan : [
    'Peta sederhana di papan tulis, berupa grid jalan tiga kali tiga dengan bangunan berlabel school, market, hospital, dan library, serta satu titik START, digambar sebelum kelas dimulai, untuk Layar 2 sampai Layar 9.',
    'Lembar kerja siswa satu per siswa, berisi peta kosong tiga kali tiga dan ruang tulis petunjuk arah, di meja guru sebelum dibagikan.',
    'Papan tulis dan spidol untuk menulis turn left, turn right, go straight, dan dialog How do I get to di Layar 3, Layar 5, dan Layar 6.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi', tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-16 dan Chant Arah', tujuan: 'Guru menghubungkan TP-16 dan menyalakan energi lewat chant arah.' },
    { layar:  2, judul: 'Pembuka · Reactivation Neighborhood dan Numbers', tujuan: 'Guru meninjau nama tempat dan angka di peta.' },
    { layar:  3, judul: 'Inti · Introduksi Turn Left Turn Right Go Straight', tujuan: 'Guru memperkenalkan tiga kata arah.' },
    { layar:  4, judul: 'Inti · Drill Arah dengan Gerakan Fisik', tujuan: 'Guru memimpin drill arah dengan gerakan tubuh.' },
    { layar:  5, judul: 'Inti · Introduksi How Do I Get To', tujuan: 'Guru memperkenalkan pertanyaan arah.' },
    { layar:  6, judul: 'Inti · Modeling Dialog Petunjuk Arah Lengkap', tujuan: 'Guru memodelkan dialog tanya jawab arah.' },
    { layar:  7, judul: 'Inti · Pair Practice Tanya dan Beri Arah', tujuan: 'Guru memandu latihan tanya jawab arah berpasangan.' },
    { layar:  8, judul: 'Inti · Writing Individual Peta dan Petunjuk Arahku', tujuan: 'Guru memandu siswa menggambar peta dan menulis arah.' },
    { layar:  9, judul: 'Inti · Berkeliling dan Review Tulisan', tujuan: 'Guru meninjau hasil tulisan dan memverifikasi rute di peta.' },
    { layar: 10, judul: 'Penutup · Review dan Hapus Papan', tujuan: 'Guru mengonsolidasi kata arah dan dialog lalu menghapus papan tulis.' },
    { layar: 11, judul: 'Penutup · Closure Emosional dan Teaser TP-18', tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-18.' },
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
UCAP: "Last time, sports. You can run, you can kick, you can swim."
UCAP: "But where do you run to? Where do you go?"
AKSI: Jeda 1 detik.
UCAP: "Today, we talk about directions. How to get from here to there."
👂 LISTEN FIRST
AKSI: Ucapkan chant dengan ritme ketukan meja.
UCAP: "Turn left, turn right, go straight, go!"
UCAP: "How do I get to school, go!"
UCAP: "Left, right, straight, follow the way, go!"
UCAP: "Directions, let's go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "Turn left, turn right, go straight, go!"
UCAP: "How do I get to school, go!"
UCAP: "Left, right, straight, follow the way, go!"
UCAP: "Directions, let's go!"`,
          bantuan     : 'Jika siswa tidak hafal chant: tunjukkan gestur fisik — tangan menunjuk kiri untuk turn left, tangan menunjuk kanan untuk turn right, tangan mendorong ke depan untuk go straight. Tiga gestur yang dipakai sepanjang sesi.',
          cue         : 'Ucapkan jembatan ke TP-16 sebelum chant dimulai, bukan sesudahnya.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk peta di papan tulis.
UCAP: "Look at the map. What places do you see?"
AKSI: Tunggu respons semua siswa.
UCAP: "School. Where do you go every day?"
AKSI: Tunggu respons semua siswa.
UCAP: "And market. What do we buy there?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Now, numbers. How many steps to turn? We count."
UCAP: "Count with me, one, two, three, four, five."
AKSI: Tunjuk jalan di peta satu blok per hitungan.
AKSI: Tunggu semua siswa menghitung bersama.
UCAP: "On this map, the school is two blocks away. The market is three blocks. We use numbers to give directions."`,
          bantuan     : 'Jika kelas tidak merespons nama tempat: tunjuk satu bangunan di peta, tanyakan "What is this place? Is it a school? A hospital?". Pilihan biner lebih mudah daripada produksi bebas.',
          cue         : 'Peta di papan tulis cukup besar dan semua label tempat tertulis jelas dari seluruh sudut kelas.',
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
UCAP: "Now, three direction words. Listen and watch."
AKSI: Berdiri di depan kelas menghadap arah yang sama dengan siswa.
AKSI: Putar badan ke kiri sambil tangan menunjuk kiri.
UCAP: "Turn left."
AKSI: Tulis "TURN LEFT" dan buat gambar panah kiri di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Putar badan ke kanan sambil tangan menunjuk kanan.
UCAP: "Turn right."
AKSI: Tulis "TURN RIGHT" dan buat gambar panah kanan di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Jalan ke depan dua langkah sambil tangan mendorong ke depan.
UCAP: "Go straight."
AKSI: Tulis "GO STRAIGHT" dan buat gambar panah ke atas di papan tulis.
AKSI: Jeda 3 detik.
UCAP: "Three directions. Turn left. Turn right. Go straight."
AKSI: Tunjuk titik START di peta papan tulis.
UCAP: "From START, go straight two blocks."
AKSI: Tunjuk jalan di peta.
UCAP: "Then, turn left."
AKSI: Tunjuk persimpangan di peta.
UCAP: "Go straight one block, and you are at the school."
AKSI: Tunjuk bangunan school di peta.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan "TURN LEFT" di papan tulis.
UCAP: "Say it with me!"
UCAP: "Turn left."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "TURN RIGHT" di papan tulis.
UCAP: "Turn right."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "GO STRAIGHT" di papan tulis.
UCAP: "Go straight."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa mencampur left dan right: minta semua siswa angkat tangan kanan, ucapkan "Your right hand up. Turn right is that direction. Turn left is the other direction.". Jangkar fisik lebih kuat daripada penjelasan verbal.',
          cue         : 'Guru menghadap arah yang sama dengan siswa saat demo turn left dan turn right, bukan menghadap siswa.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Good. Now, let's move. Stand up."
AKSI: Tunggu semua siswa berdiri di tempat.
UCAP: "When I say turn left, you turn left. When I say turn right, you turn right. Go straight, you walk in place."
AKSI: Ucapkan "Turn left" sambil berputar ke kiri sebagai contoh.
UCAP: "Turn left!"
AKSI: Tunggu semua siswa berputar ke kiri.
UCAP: "Go straight!"
AKSI: Tunggu semua siswa berjalan di tempat.
UCAP: "Turn right!"
AKSI: Tunggu semua siswa berputar ke kanan.
UCAP: "Turn left!"
AKSI: Tunggu semua siswa berputar ke kiri.
UCAP: "Go straight!"
AKSI: Tunggu semua siswa berjalan di tempat.
AKSI: Beri enam sampai delapan perintah arah secara acak dalam 90 detik.
UCAP: "Sit down."
AKSI: Tunggu semua siswa duduk.
AKSI: Tunjuk bangunan school di peta papan tulis.
UCAP: "From school, turn right."
AKSI: Tunggu semua siswa membuat gestur tangan menunjuk kanan.
UCAP: "Go straight."
AKSI: Tunggu semua siswa membuat gestur tangan mendorong ke depan.
UCAP: "Turn left, and you are at the market."
AKSI: Tunggu semua siswa membuat gestur tangan menunjuk kiri.`,
          bantuan     : 'Jika siswa mencampur left dan right saat gerakan: berhenti, minta semua siswa angkat tangan kanan, ucapkan "Right hand up, that\'s right. The other side, left.", lalu ulangi dua perintah terakhir.',
          cue         : 'Jangan lanjut sampai mayoritas kelas bergerak ke arah yang benar.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima gerakan fisik tanpa mengucapkan kata.',
            sudahBisa   : 'Minta mereka ucapkan perintah berikutnya sebelum guru mengucapkannya.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan volume suara.
AKSI: Jeda 2 detik.
👂 LISTEN FIRST
UCAP: "Now, how do we ask for directions?"
UCAP: "Excuse me, how do I get to the school?"
AKSI: Tulis "How do I get to the school?" di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Tunjuk tulisan "How do I get to" di papan tulis.
AKSI: Tunjuk bangunan school di peta papan tulis.
AKSI: Beri penjelasan bahwa "how do I get to" adalah pertanyaan untuk menanyakan cara menuju suatu tempat.
UCAP: "How do I get to the market?"
AKSI: Tulis "How do I get to the market?" di papan tulis.
UCAP: "How do I get to the hospital?"
AKSI: Tulis "How do I get to the hospital?" di papan tulis.
UCAP: "Now, your turn. Ask me a question with how do I get to."
AKSI: Tunjuk dua sampai tiga siswa secara acak.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan "How do I get to the school?" di papan tulis.
UCAP: "Say it with me!"
UCAP: "How do I get to the school?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa membuat pertanyaan tanpa "How do I get to", misalnya hanya "Where is the school?": terima, lalu ucapkan versi yang diminta "Today we practice: How do I get to the school?".',
          cue         : '"How do I get to" disampaikan sebagai satu frasa utuh, bukan diurai kata per kata.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan volume suara.
AKSI: Jeda 2 detik.
👂 LISTEN FIRST
UCAP: "Now, a full conversation. I will play two people. Watch."
UCAP: "Excuse me, how do I get to the school?"
AKSI: Tulis "A: How do I get to the school?" di papan tulis.
UCAP: "Sure. From here, go straight two blocks."
AKSI: Tulis "B: Go straight two blocks." di papan tulis.
AKSI: Tunjuk rute di peta papan tulis.
UCAP: "Then, turn left."
AKSI: Tulis "B: Then, turn left." di papan tulis.
UCAP: "Go straight one block. The school is on your right."
AKSI: Tulis "B: Go straight one block. The school is on your right." di papan tulis.
UCAP: "Thank you!"
AKSI: Tulis "A: Thank you!" di papan tulis.
UCAP: "You're welcome!"
AKSI: Tulis "B: You're welcome!" di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bagian B bersama.
AKSI: Tunjuk dialog di papan tulis.
UCAP: "Let's read together. I am person A. You are person B."
UCAP: "Say it together!"
AKSI: Ucapkan tiap baris A, tunggu semua siswa mengucapkan baris B dari papan tulis.
AKSI: Tukar peran, ucapkan tiap baris B, tunggu semua siswa mengucapkan baris A.
UCAP: "Good. Now, with your partner, you will do the same."`,
          bantuan     : 'Jika kelas membaca tidak sinkron: perlambat tempo, tunjuk kata per kata. Prioritaskan kelas memahami urutan bagian A dan B, bukan kecepatan.',
          cue         : 'Pertahankan dialog di papan tulis sampai Layar 8 selesai.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "One person asks: How do I get to the market?"
UCAP: "Other person answers. Use turn left, turn right, go straight."
UCAP: "Use the map on the board to help."
AKSI: Tanyakan siapa yang mau menjadi contoh.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "Ask me: How do I get to the market?"
AKSI: Tunggu siswa yang ditunjuk bertanya.
UCAP: "Sure. Go straight two blocks, then turn right. The market is there."
AKSI: Tunjuk rute di peta papan tulis.
UCAP: "Your turn."
AKSI: Beri waktu empat menit, masing-masing dua menit per arah.
AKSI: Berkeliling dan dengarkan tanpa menyela.`,
          bantuan     : 'Jika satu pasang tidak bisa menjawab pertanyaan arah: tunjuk peta di papan tulis, tunjuk titik START, ucapkan "From here, look at the map. How do we go?", biarkan mereka melihat peta dan menjawab sendiri.',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit, atau energi kelas rendah → lewati layar ini, langsung ke Layar 8.',
            'Jika pair practice menjadi gaduh dalam satu menit → ucapkan "Okay. Take your pencil. Let\'s draw and write.", langsung ke Layar 8.',
          ],
          diferensiasi: {
            perluSupport: 'Terima satu instruksi, "Turn left" atau "Go straight", tanpa rute lengkap.',
            sudahBisa   : 'Minta rute tiga langkah dan sebut nama bangunan di akhir.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Okay. Take your pencil. Let's draw and write."
AKSI: Jeda 3 detik.
AKSI: Bagikan lembar kerja, satu per siswa.
UCAP: "First, draw your map. Put two or three places on it."
UCAP: "You have two minutes for the map, then write your directions."
UCAP: "Then, write directions from one place to another."
UCAP: "Use turn left, turn right, go straight."
👂 LISTEN FIRST
AKSI: Tulis contoh di papan tulis: "Start: school. Go straight two blocks. Turn right. The market is on your left."
UCAP: "Watch me. Start, school. Go straight two blocks. Turn right. The market is on your left."
UCAP: "Now, your turn. Draw your map first. Then write."
AKSI: Pantau penulisan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa menghabiskan terlalu banyak waktu menggambar: ingatkan "Two minutes for the map. Now write your directions.".',
          cue         : 'Bagian menggambar peta adalah fondasi untuk bagian menulis, bukan dekorasi.',
          darurat     : 'Jika waktu tersisa 8 menit atau kurang saat layar ini dimulai → minta siswa hanya menggambar peta dan menulis satu instruksi, langsung ke Layar 10 tanpa melalui Layar 9.',
          diferensiasi: {
            perluSupport: 'Cukup gambar peta dan tulis satu instruksi arah.',
            sudahBisa   : 'Setelah selesai, minta tambah dialog How do I get to dan jawabannya di bawah peta.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua hasil lembar kerja siswa — satu yang peta dan petunjuknya konsisten, satu yang memiliki rute menarik.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good. Let's hear from two friends."
AKSI: Minta siswa pertama membacakan petunjuk arahnya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
AKSI: Tunjuk peta di papan tulis.
AKSI: Ikuti rute yang dibacakan pada peta papan tulis dengan spidol.
UCAP: "Did we arrive at the right place?"
AKSI: Tunggu respons semua siswa.
AKSI: Minta siswa kedua membacakan petunjuk arahnya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
AKSI: Ikuti rute yang dibacakan pada peta papan tulis dengan spidol.
UCAP: "Did we arrive at the right place?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa yang diminta membaca menolak: ucapkan "That\'s okay.", lalu tunjuk siswa lain tanpa komentar tambahan.',
          cue         : 'Pilih siswa yang berbeda dari peserta Layar 4.',
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
AKSI: Tanyakan padanan Inggris dari "belok kiri".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "belok kanan".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "jalan lurus".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
UCAP: "And how do we ask for directions?"
AKSI: Tunggu respons semua siswa.
UCAP: "Give me one direction sentence, from school to market."
AKSI: Tunggu respons semua siswa.
AKSI: Hapus tulisan "Thank you" dan "You're welcome" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "Thank you" dan "You're welcome".
AKSI: Hapus baris dialog B dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan baris dialog B.
AKSI: Hapus baris dialog A dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan baris dialog A.
AKSI: Hapus tulisan "GO STRAIGHT", "TURN RIGHT", dan "TURN LEFT" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan tiap kata arah yang dihapus.`,
          bantuan     : null,
          cue         : 'Hapus dialog sebelum kata-kata arah.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, one question."
UCAP: "What is one place in your neighborhood that you love to go? And how do you get there?"
AKSI: Tunjuk satu sampai dua siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Jeda 3 detik.
UCAP: "Directions are not just about maps. They are about knowing where you belong."
UCAP: "Next time, we talk about the past. Yesterday. What happened. What you did."
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'Akhiri sesi dengan ritual goodbye, bukan instruksi administratif.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → biarkan siswa merapikan meja, jangan tambahkan aktivitas baru.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B17;
