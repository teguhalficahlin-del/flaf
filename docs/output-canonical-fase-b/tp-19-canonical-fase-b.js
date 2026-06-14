const TP_B19 = {

  // METADATA
  id     : 'tp-b19',
  nomor  : 19,
  kelas  : 4,
  nama   : 'Reading: Short Narrative Texts',
  tema   : 'Membaca dan memahami teks naratif pendek menggunakan kosakata past tense',
  kluster: 'E — Aksi, Arah, dan Cerita',
  jenis  : 'Kompleks',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat membaca teks naratif pendek "Budi\'s Day" dan menjawab pertanyaan pemahaman literal tentang isi cerita.',
    'Peserta didik dapat mengenali kata kerja bentuk lampau (went, ate, played, woke up) dalam konteks cerita dan membedakan pola "he went" dari "I went."',
    'Peserta didik dapat menceritakan kembali urutan kejadian dalam teks secara lisan dan tulisan menggunakan kata penghubung "first, then, after that."',
  ],
  vocab     : ['went', 'ate', 'played', 'Yesterday, I...', 'once upon a time', 'then', 'after that', 'the end', 'first', 'wake up', 'eat breakfast', 'go to school', 'sleep', 'school', 'friends'],
  persiapan : [
    'Teks "Budi\'s Day" tujuh kalimat, ditulis tangan di papan tulis dan ditutup kertas lebar sebelum kelas dimulai, dibuka di Layar 4 dan tetap ada sampai Layar 12.',
    'Kartu urutan kejadian enam kartu dalam satu amplop per kelompok tiga siswa, tiap kartu berisi satu kejadian: woke up at six o\'clock, ate breakfast rice and egg, went to school, played football with friends, went home and ate rice, went to sleep, disiapkan sebelum kelas dimulai, untuk Layar 8.',
    'Lembar kerja siswa satu per siswa, berisi tabel retelling "Budi\'s Story" dengan lima baris urutan kejadian dan dua baris opini, di meja guru sebelum dibagikan, untuk Layar 10.',
    'Papan tulis dan spidol untuk menulis judul, kontras "I went - He went", "my - his", "friends = teman", dan baris demo di Layar 3, Layar 7, dan Layar 10.',
  ],
  media     : [],
  printables: [
    { file: 'tp-b19-budis-day-text.png',                  label: 'Budis Day Text' },
    { file: 'tp-b19-reading-comprehension-worksheet.png', label: 'Reading Comprehension Worksheet' },
    { file: 'tp-b19-sequence-cards.png',                  label: 'Sequence Cards' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi', tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-18 dan Chant Cerita', tujuan: 'Guru menghubungkan TP-18 dan menyalakan energi lewat chant cerita.' },
    { layar:  2, judul: 'Pembuka · Reactivation Past Tense dan Story Retelling', tujuan: 'Guru meninjau past tense dan kata penanda cerita.' },
    { layar:  3, judul: 'Inti · Pre-Reading Orientasi Teks', tujuan: 'Guru membuka teks dengan prediksi sebelum membaca.' },
    { layar:  4, judul: 'Inti · First Read Guru Membaca Keras', tujuan: 'Guru membaca teks dengan keras dan ekspresif.' },
    { layar:  5, judul: 'Inti · Comprehension Check Pertanyaan Pemahaman', tujuan: 'Guru memeriksa pemahaman lewat pertanyaan literal.' },
    { layar:  6, judul: 'Inti · Second Read Baca Bersama', tujuan: 'Guru memandu kelas membaca teks bersama.' },
    { layar:  7, judul: 'Inti · Perkenalan He His Friends', tujuan: 'Guru memperkenalkan kontras orang ketiga.' },
    { layar:  8, judul: 'Inti · Kartu Urutan Siswa Susun Ulang Kejadian', tujuan: 'Guru memandu siswa menyusun ulang urutan kejadian.' },
    { layar:  9, judul: 'Inti · Pair Retelling Ceritakan Kembali ke Partner', tujuan: 'Guru memandu siswa menceritakan kembali cerita ke partner.' },
    { layar: 10, judul: 'Inti · Guided Writing Tabel Retelling', tujuan: 'Guru memandu siswa mengisi tabel retelling dan opini.' },
    { layar: 11, judul: 'Inti · Berkeliling dan Review Tulisan', tujuan: 'Guru meninjau hasil tabel dan menghargai baris opini.' },
    { layar: 12, judul: 'Penutup · Review dan Hapus Papan', tujuan: 'Guru mengonsolidasi cerita lalu menghapus teks di papan tulis.' },
    { layar: 13, judul: 'Penutup · Closure Emosional dan Teaser TP-20', tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-20.' },
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
UCAP: "Last time, we talked about yesterday. We wrote about what we did."
UCAP: "Yesterday I went. Yesterday I ate. Yesterday I played."
AKSI: Jeda 1 detik.
UCAP: "Today, we read about someone else's yesterday. Someone else's story."
UCAP: "His name is Budi. And yesterday, Budi had a day."
👂 LISTEN FIRST
AKSI: Ucapkan chant dengan ritme ketukan meja.
UCAP: "Once upon a time, there was a day, go!"
UCAP: "First this, then that, after that, go!"
UCAP: "He went, he ate, he played, go!"
UCAP: "Read the story, let's go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "Once upon a time, there was a day, go!"
UCAP: "First this, then that, after that, go!"
UCAP: "He went, he ate, he played, go!"
UCAP: "Read the story, let's go!"`,
          bantuan     : 'Jika siswa tidak hafal chant: ulangi baris ketiga "He went, he ate, he played" dua kali, baris ini yang paling penting.',
          cue         : 'Jembatan ke TP-18 hadir sebelum chant dimulai, bukan sesudahnya. Pergeseran dari "I went" ke "he went" adalah inti koneksi.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan review past tense ke semua siswa.
UCAP: "Past tense, quick review. Go, yesterday?"
AKSI: Tunggu respons semua siswa.
UCAP: "Eat, yesterday?"
AKSI: Tunggu respons semua siswa.
UCAP: "Play, yesterday?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. And story words, do you remember?"
UCAP: "How do stories begin in English?"
AKSI: Tunggu respons semua siswa.
UCAP: "And how do they end?"
AKSI: Tunggu respons semua siswa.
UCAP: "In the middle, first, then, after that."
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Today, we read a story. A short story. About a boy named Budi."`,
          bantuan     : 'Jika kelas tidak ingat "once upon a time": ucapkan dengan nada mendongeng, "Once, upon, a time.", kelas biasanya langsung tahu konteksnya.',
          cue         : '"Once upon a time" dan "The end" hadir kembali sebagai penanda awal dan akhir cerita.',
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
          teks        : `AKSI: Tulis "BUDI'S DAY" di papan tulis di atas kertas penutup teks.
UCAP: "Look at this title. Budi's Day."
UCAP: "Budi is a boy, like many of you. And this story is about one day in his life."
UCAP: "Before we read, I have two questions. Think about them."
UCAP: "Question one. What do you think Budi did yesterday?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk dua sampai tiga siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Question two. What words do you think will appear in this story?"
AKSI: Tunggu siswa menyebut kata-kata.
AKSI: Tulis kata-kata yang disebut di pojok papan tulis.
UCAP: "Now, let's read and find out."`,
          bantuan     : 'Jika siswa tidak bisa menebak isi cerita: berikan petunjuk, ucapkan "Look at the title: Budi\'s Day. What happens in a day? Morning? Afternoon? Evening?".',
          cue         : 'Semua tebakan siswa diterima tanpa koreksi.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Lepaskan kertas penutup dari teks "Budi's Day" di papan tulis.
👂 LISTEN FIRST
UCAP: "Listen. I will read the story first. Just listen."
AKSI: Baca seluruh teks ke semua siswa.
AKSI: Beri jeda di antara tiap kalimat.
AKSI: Beri penekanan pada kata woke up, ate, went, dan played.
UCAP: "Good. Now, what did you understand?"
AKSI: Tunggu dua sampai tiga siswa mengangkat tangan.
AKSI: Tunjuk dua sampai tiga siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : null,
          cue         : 'Teks dibaca ekspresif tanpa berhenti pada arti tiap kata. Pemahaman datang dari konteks, bukan definisi.',
          darurat     : 'Jika tidak ada siswa yang bisa berbagi setelah first read → lewati Layar 5, langsung ke Layar 6.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan pertanyaan pemahaman ke semua siswa setelah first read.
UCAP: "Let me ask a few questions about Budi."
UCAP: "What day was yesterday for Budi?"
AKSI: Tunggu respons semua siswa.
UCAP: "What time did Budi wake up?"
AKSI: Tunggu respons semua siswa.
UCAP: "What did he eat for breakfast?"
AKSI: Tunggu respons semua siswa.
UCAP: "Where did Budi go after breakfast?"
AKSI: Tunggu respons semua siswa.
UCAP: "What did he play at school?"
AKSI: Tunggu respons semua siswa.
UCAP: "Was it a good day?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. You understood the story. Now let's read it together."`,
          bantuan     : 'Jika kelas tidak bisa menjawab pertanyaan: tunjuk kalimat yang relevan di teks, baca ulang kalimat itu, tunggu jawaban, jangan beri jawaban langsung.',
          cue         : 'Jawaban semua pertanyaan ada di teks. Ini verifikasi literal, bukan inferensi.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa membaca bersama.
UCAP: "I will point, you read."
UCAP: "Say it together!"
AKSI: Tunjuk teks kalimat per kalimat di papan tulis.
AKSI: Tunggu semua siswa membaca bersama.
AKSI: Tunjuk awal teks di papan tulis.
UCAP: "Read from the beginning."
UCAP: "Say it together!"
AKSI: Tunggu semua siswa membaca bersama tanpa panduan guru.
UCAP: "Good. Now, you know this story."`,
          bantuan     : 'Jika kelas membaca tidak sinkron: perlambat tempo di kalimat pertama, tunjuk kata dengan jelas.',
          cue         : 'Biarkan kelas membaca dengan kecepatan mereka sendiri.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "One thing you noticed. We use he, not I, in this story."
UCAP: "In TP18, Yesterday I went. Now, Yesterday he went."
AKSI: Tulis "I went - He went" di papan tulis.
AKSI: Jeda 3 detik.
UCAP: "Same word went, but different person."
UCAP: "And his. His friends, his school."
AKSI: Beri penjelasan bahwa "his" berarti miliknya untuk anak laki-laki.
AKSI: Tulis "my - his" di papan tulis.
UCAP: "His. Like my, but for a boy."
AKSI: Beri penjelasan bahwa "friends" berarti teman.
AKSI: Tulis "friends = teman" di papan tulis.
UCAP: "Budi played football with his friends."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
UCAP: "I went, he?"
AKSI: Tunggu respons semua siswa.
UCAP: "I ate, he?"
AKSI: Tunggu respons semua siswa.
UCAP: "My school, his?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa bingung dengan "his": berikan analogi, ucapkan "Budi\'s school is his school. Your school is my school.".',
          cue         : 'Tidak perlu diperluas ke she, her, they, atau their. Itu di luar scope TP-19.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan satu amplop kartu urutan untuk tiap kelompok tiga siswa.
UCAP: "Look at the cards. These are things Budi did, but they are mixed up."
UCAP: "Put them in the correct order. Use the story on the board to help."
AKSI: Beri waktu dua menit untuk menyusun urutan.
AKSI: Tunjuk satu kelompok.
UCAP: "Say the story in order. Use first, then, after that."
AKSI: Tunggu jawaban kelompok yang ditunjuk.
AKSI: Ulangi dengan satu kelompok lain.
AKSI: Bandingkan urutan kelompok dengan teks di papan tulis.
UCAP: "Does the order match the story?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika kelompok tidak bisa menyusun: tunjuk satu kalimat di teks, minta mereka mencari kartu yang sesuai, satu kalimat satu kartu.',
          cue         : 'Kartu urutan sudah dalam amplop per kelompok sebelum kelas dimulai. Kartu disusun acak, bukan terbalik total.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa menyimpan kartu di dalam amplop di meja.
AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Tell your partner Budi's story. In your own words."
UCAP: "You don't need to use the exact same words. Just tell what happened."
UCAP: "Start with: Yesterday was Monday. Budi woke up."
AKSI: Peragakan cerita singkat ke semua siswa.
UCAP: "Watch me. Yesterday was Monday. Budi woke up at six. First, he ate breakfast. After that, he went to school and played football."
UCAP: "Short, simple, in your own words. Now, your turn."
AKSI: Beri waktu empat menit, masing-masing dua menit per arah.
AKSI: Berkeliling dan dengarkan tanpa menyela.`,
          bantuan     : 'Jika satu pasang tidak bisa memulai: minta mereka membuka amplop kartu, ucapkan "Look at the cards. Start with the first card.".',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit, atau energi kelas rendah → lewati layar ini, langsung ke Layar 10.',
            'Jika pair retelling menjadi gaduh dalam satu menit → ucapkan "Okay. Let\'s write instead.", langsung ke Layar 10.',
          ],
          diferensiasi: {
            perluSupport: 'Cukup sebut tiga kejadian dari teks.',
            sudahBisa   : 'Ceritakan ulang dengan tambahan detail, "I think Budi was happy because he played football.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan lembar kerja tabel retelling, satu per siswa.
UCAP: "Fill in the table. Use the story to help."
UCAP: "For the last two lines, your opinion. No right or wrong answer."
👂 LISTEN FIRST
AKSI: Tulis "First, Budi woke up at six o'clock." di papan tulis.
UCAP: "Watch me. Line one. First, Budi woke up at six o'clock."
UCAP: "Now, your turn."
AKSI: Pantau penulisan semua siswa dari meja ke meja.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa berhenti setelah satu baris: duduk di sebelahnya, baca yang sudah ada, tanyakan "What did Budi do next?", tunggu jawaban, lalu ucapkan "Write that.".',
          cue         : 'Dua baris opini di akhir tidak dinilai benar atau salah.',
          darurat     : 'Jika waktu tersisa 8 menit atau kurang saat layar ini dimulai → minta siswa hanya mengisi tiga baris pertama, langsung ke Layar 12 tanpa melalui Layar 11.',
          diferensiasi: {
            perluSupport: 'Cukup isi tiga baris pertama dari tabel.',
            sudahBisa   : 'Setelah tabel selesai, tambah satu kalimat, "If I were Budi, I would also ___.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tabel semua siswa.
AKSI: Pilih dua hasil lembar kerja siswa — satu yang mengisi tabel dengan lengkap, satu yang memiliki jawaban opini menarik di baris terakhir.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good. Let's hear from two friends."
AKSI: Minta siswa pertama membacakan tabelnya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What did Budi do first in their version?"
AKSI: Tunggu respons semua siswa.
UCAP: "And how did they say Budi felt?"
AKSI: Tunggu respons semua siswa.
AKSI: Minta siswa kedua membacakan tabelnya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What did Budi do first in their version?"
AKSI: Tunggu respons semua siswa.
UCAP: "And how did they say Budi felt?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa yang diminta membaca menolak: ucapkan "That\'s okay.", lalu tunjuk siswa lain tanpa komentar tambahan.',
          cue         : 'Pilih siswa yang berbeda dari peserta Layar 5.',
          darurat     : 'Jika waktu tersisa kurang dari 10 menit → lewati layar ini, langsung ke Layar 12.',
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
UCAP: "What was the story about?"
AKSI: Tunggu respons semua siswa.
UCAP: "What did Budi do first?"
AKSI: Tunggu respons semua siswa.
UCAP: "What sport did he play?"
AKSI: Tunggu respons semua siswa.
UCAP: "And who is the word he for?"
AKSI: Tunggu respons semua siswa.
UCAP: "Today, you read a story in English. And you understood it."
AKSI: Hapus kalimat "It was a good day." dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan kalimat yang dihapus.
AKSI: Hapus kalimat "He ate rice and went to sleep." dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan kalimat yang dihapus.
AKSI: Hapus kalimat "Then, he went home." dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan kalimat yang dihapus.
AKSI: Hapus kalimat "At school, he played football with his friends." dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan kalimat yang dihapus.
AKSI: Hapus kalimat "After that, he went to school." dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan kalimat yang dihapus.
AKSI: Hapus kalimat "First, he ate breakfast. He ate rice and egg." dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan kalimat yang dihapus.
AKSI: Hapus kalimat "Budi woke up at six o'clock." dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan kalimat yang dihapus.
AKSI: Hapus kalimat "Yesterday was Monday." dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan kalimat yang dihapus.`,
          bantuan     : null,
          cue         : 'Hapus teks dari akhir ke awal cerita.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, I want to ask."
UCAP: "What is one thing from Budi's day that is the same as your day?"
AKSI: Tunjuk satu sampai dua siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Ucapkan "I also" dan ajak siswa melengkapi kalimat.
AKSI: Jeda 3 detik.
UCAP: "Budi's story is simple. But it is real. It is a day, just like yours."
UCAP: "The difference? Budi's story is written. And now, you can read it."
UCAP: "Next time, you write your own story. Your own adventure. In English."
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

export default TP_B19;
