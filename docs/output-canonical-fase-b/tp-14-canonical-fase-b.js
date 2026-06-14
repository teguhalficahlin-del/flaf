const TP_B14 = {

  // METADATA
  id     : 'tp-b14',
  nomor  : 14,
  kelas  : 4,
  nama   : 'Celebrations and Traditions',
  tema   : 'Mendeskripsikan perayaan dan tradisi keluarga menggunakan pola kalimat komunal',
  kluster: 'D — Komunitas, Budaya, dan Dunia',
  jenis  : 'Biasa',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebutkan nama perayaan dan mendeskripsikan tradisi keluarga menggunakan pola "On ___, we ___".',
    'Peserta didik dapat menggunakan "we" sebagai subjek komunal untuk membedakan tindakan bersama dari tindakan personal.',
    'Peserta didik dapat menulis deskripsi perayaan favorit lengkap termasuk nama perayaan, tradisi, dan perasaan dengan alasan.',
  ],
  vocab     : ['grandmother', 'grandfather', 'sister', 'brother', 'family', 'happy', 'rendang', 'Eid', 'visit', 'On... we...'],
  persiapan : [
    'Gambar suasana perayaan Eid yang menunjukkan keluarga berkumpul, meja makan, dan pakaian baru, disiapkan sebelum kelas dimulai, untuk Layar 3.',
    'Lembar kerja siswa satu per siswa, berisi template deskripsi perayaan dengan baris nama perayaan, On we, We also, We eat because, I feel because, dan satu tradisi, di meja guru sebelum dibagikan.',
    'Papan tulis dan spidol untuk menulis pola On Eid we dan kalimat tradisi di Layar 4 dan Layar 6.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [
    { file: 'tp-b14-birthday.png',                  label: 'Birthday' },
    { file: 'tp-b14-christmas.png',                 label: 'Christmas' },
    { file: 'tp-b14-eid.png',                       label: 'Eid' },
    { file: 'tp-b14-graduation.png',                label: 'Graduation' },
    { file: 'tp-b14-my-celebration-worksheet.png',  label: 'My Celebration Worksheet' },
    { file: 'tp-b14-nyepi.png',                     label: 'Nyepi' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi', tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-13 dan Chant Perayaan', tujuan: 'Guru menghubungkan TP-13 dan menyalakan energi lewat chant perayaan.' },
    { layar:  2, judul: 'Pembuka · Reactivation Family dan Feelings', tujuan: 'Guru meninjau anggota keluarga dan perasaan.' },
    { layar:  3, judul: 'Inti · Introduksi Eid dan Visit', tujuan: 'Guru memperkenalkan Eid dan kata visit.' },
    { layar:  4, judul: 'Inti · Introduksi On We', tujuan: 'Guru memperkenalkan pola On Eid we.' },
    { layar:  5, judul: 'Inti · Drill Tradisi Perayaan', tujuan: 'Guru memimpin drill tradisi perayaan.' },
    { layar:  6, judul: 'Inti · Modeling Kalimat Tradisi Lengkap', tujuan: 'Guru memodelkan deskripsi perayaan lengkap.' },
    { layar:  7, judul: 'Inti · Pair Practice Ceritakan Perayaan', tujuan: 'Guru memandu latihan bercerita perayaan berpasangan.' },
    { layar:  8, judul: 'Inti · Writing Individual Perayaan Favoritku', tujuan: 'Guru memandu siswa menulis perayaan favorit.' },
    { layar:  9, judul: 'Inti · Berkeliling dan Review Tulisan', tujuan: 'Guru meninjau hasil tulisan dan menguatkan pola On we.' },
    { layar: 10, judul: 'Penutup · Review dan Hapus Papan', tujuan: 'Guru mengonsolidasi kosakata dan pola lalu menghapus papan tulis.' },
    { layar: 11, judul: 'Penutup · Closure Emosional dan Teaser TP-15', tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-15.' },
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
UCAP: "Last time, we talked about food. Rendang. Spicy. I like rendang because it is delicious."
UCAP: "And we said, food reminds us of family."
AKSI: Jeda 1 detik.
UCAP: "When do families eat together the most? When do you see your grandmother, your cousins, everyone?"
AKSI: Tunggu respons semua siswa.
UCAP: "Yes, celebrations. Today, we talk about those special days."
👂 LISTEN FIRST
AKSI: Ucapkan chant dengan ritme ketukan meja.
UCAP: "Eid is here, we celebrate, go!"
UCAP: "Visit family, eat together, go!"
UCAP: "Happy, happy, it's a special day, go!"
UCAP: "Celebrations, let's go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "Eid is here, we celebrate, go!"
UCAP: "Visit family, eat together, go!"
UCAP: "Happy, happy, it's a special day, go!"
UCAP: "Celebrations, let's go!"`,
          bantuan     : 'Jika siswa tidak hafal chant: tunjukkan gestur fisik — tangan terbuka untuk celebrate, tangan melambai untuk visit, senyum besar dan tepuk tangan untuk happy. Tiga gestur yang menyenangkan.',
          cue         : 'Ucapkan jembatan ke TP-13 sebelum chant dimulai, bukan sesudahnya.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Family. Who comes to your house during celebrations?"
AKSI: Tunjuk dua sampai tiga siswa.
AKSI: Tulis nama anggota keluarga yang disebut di papan tulis dengan nama Inggrisnya.
AKSI: Tanyakan padanan Inggris dari "nenek".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "kakek".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
UCAP: "Sister? Brother?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Now, feelings. When Eid comes, how do you feel?"
AKSI: Tunggu respons semua siswa.
AKSI: Beri penjelasan bahwa "excited" berarti sangat antusias dan tidak sabar menunggu.
UCAP: "Excited."
AKSI: Tunggu respons semua siswa.
UCAP: "When you see your grandmother after a long time, how do you feel?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Celebrations make us feel happy and excited. Today, we learn to talk about them."`,
          bantuan     : 'Jika kelas tidak merespons pertanyaan feelings: ucapkan sambil buat ekspresi muka — senyum lebar dan tangan ke atas untuk excited, peluk diri sendiri untuk happy. Ekspresi fisik lebih cepat daripada penjelasan.',
          cue         : 'Tawarkan "excited" sebagai kosakata bonus, tidak perlu didrill.',
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
AKSI: Tempel gambar suasana perayaan Eid di papan tulis.
AKSI: Tunjuk gambar Eid.
UCAP: "Look at this."
UCAP: "This is Eid."
AKSI: Ucapkan "Eid" dengan jelas.
AKSI: Jeda 3 detik.
UCAP: "Eid is a special celebration. We wear new clothes. We pray together. We eat together."
AKSI: Beri penjelasan bahwa di Indonesia perayaan ini disebut Lebaran atau Hari Raya Idul Fitri.
UCAP: "And we visit family."
AKSI: Ucapkan "visit" dengan jelas.
AKSI: Tulis "VISIT" di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Beri penjelasan bahwa "visit" berarti mengunjungi, pergi menemui orang yang kita sayangi.
UCAP: "On Eid, we visit grandmother. We visit relatives."
AKSI: Tunjuk gambar Eid.
UCAP: "And what do we eat on Eid?"
AKSI: Tunggu respons semua siswa.
UCAP: "Yes. The food from last time is now part of the celebration."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk gambar Eid.
UCAP: "Say it with me!"
UCAP: "Eid."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "VISIT" di papan tulis.
UCAP: "Visit."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika ada siswa yang tidak merayakan Eid: ucapkan dengan hangat "Not everyone celebrates Eid, that\'s okay. We also talk about other celebrations. Birthdays, New Year, any special day with family.".',
          cue         : 'Kaitan dengan TP-13 perlu muncul di layar ini — makanan rendang kini hadir dalam konteks perayaan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
UCAP: "Now, let's talk about what we do on celebrations."
UCAP: "On Eid, we visit family."
AKSI: Tulis "On Eid, we visit family." di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Tunjuk tulisan "On Eid" di papan tulis.
AKSI: Tunjuk tulisan "we visit family" di papan tulis.
AKSI: Beri penjelasan bahwa "we" berarti kita semua bersama, bukan hanya saya.
UCAP: "On Eid, we eat rendang and rice."
AKSI: Tulis "On Eid, we eat rendang and rice." di papan tulis.
UCAP: "On Eid, we wear new clothes."
AKSI: Tulis "On Eid, we wear new clothes." di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan "On Eid, we visit family." di papan tulis.
UCAP: "Say it with me!"
UCAP: "On Eid, we visit family."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "On Eid, we eat rendang and rice." di papan tulis.
UCAP: "On Eid, we eat rendang and rice."
AKSI: Tunggu respons semua siswa.
UCAP: "On Eid, on birthdays, on New Year, same pattern. On a celebration, we do an activity."`,
          bantuan     : 'Jika siswa mengucapkan "On Eid, I visit" alih-alih "we visit": jangan koreksi keras. Ucapkan dengan penekanan "We, kita semua. On Eid, we visit family.", lalu lanjut.',
          cue         : 'Tunjuk subjek "We" setiap kali diucapkan. Tegaskan perbedaan we dan I satu kali saja.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Good. Now, let's practice together. Fast."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
UCAP: "On Eid, what do we do?"
AKSI: Tunggu respons semua siswa.
UCAP: "On New Year, what do we do?"
AKSI: Tunggu respons semua siswa.
UCAP: "On your birthday, what do we do?"
AKSI: Tunggu respons semua siswa.
AKSI: Sebut tiga sampai empat perayaan lain secara acak.
AKSI: Tunggu respons semua siswa setiap kali.
AKSI: Sebut aktivitas, minta semua siswa menyebut perayaannya.
UCAP: "We eat rendang and ketupat. When?"
AKSI: Tunggu respons semua siswa.
UCAP: "We blow out candles. When?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk satu siswa.
UCAP: "On Eid, what does your family do?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi pertanyaan individual untuk satu sampai dua siswa lain.`,
          bantuan     : 'Jika siswa tidak tahu menjawab: tunjuk daftar aktivitas di papan tulis dengan pilihan visit family, eat together, wear new clothes, pray, minta mereka memilih satu.',
          cue         : null,
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima satu aktivitas, "visit family" atau "eat rendang", tanpa kalimat penuh.',
            sudahBisa   : 'Minta kalimat penuh, "On Eid, we visit grandmother and eat rendang.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan volume suara.
AKSI: Jeda 2 detik.
👂 LISTEN FIRST
UCAP: "Now, let's describe a celebration completely. Listen."
UCAP: "My favorite celebration is Eid."
AKSI: Tulis "My favorite celebration is Eid." di papan tulis.
UCAP: "On Eid, we wear new clothes."
AKSI: Tulis "On Eid, we wear new clothes." di papan tulis di bawahnya.
UCAP: "We visit grandmother and grandfather."
AKSI: Tulis "We visit grandmother and grandfather." di papan tulis di bawahnya.
UCAP: "We eat rendang and rice because they are delicious."
AKSI: Tulis "We eat rendang and rice because they are delicious." di papan tulis di bawahnya.
UCAP: "I feel happy and excited on Eid."
AKSI: Tulis "I feel happy and excited on Eid." di papan tulis di bawahnya.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat pertama di papan tulis.
UCAP: "Say it with me!"
AKSI: Tunjuk tiap kalimat satu per satu, tunggu semua siswa membaca bersama.
AKSI: Ulangi sekali, tunjuk tiap kalimat sambil semua siswa membaca sendiri.
UCAP: "Good. Now, you will describe your own favorite celebration."`,
          bantuan     : 'Jika kelas membaca tidak sinkron: biarkan. Yang penting setiap siswa membaca setidaknya sekali sebelum Layar 7.',
          cue         : 'Pertahankan lima kalimat tradisi di papan tulis sampai Layar 8 selesai.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Tell your partner about your favorite celebration."
UCAP: "Use: My favorite celebration is Eid. On Eid, we visit family. I feel happy because I see everyone."
AKSI: Tanyakan siapa yang mau menjadi contoh.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "What is your favorite celebration?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "On that day, what does your family do?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Good. How do you feel?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Now, your turn with your partner."
AKSI: Beri waktu empat menit, masing-masing dua menit per arah.
AKSI: Berkeliling dan dengarkan tanpa menyela.`,
          bantuan     : 'Jika satu pasang tidak bisa memulai: tunjuk scaffold di papan tulis, ucapkan kalimat pertama "My favorite celebration is", tunggu mereka melengkapi.',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit, atau energi kelas rendah → lewati layar ini, langsung ke Layar 8.',
            'Jika pair practice menjadi gaduh dalam satu menit → ucapkan "Okay. Take your pencil. Let\'s write.", langsung ke Layar 8.',
          ],
          diferensiasi: {
            perluSupport: 'Terima dua kalimat, "My favorite celebration is Eid. On Eid, we visit family.".',
            sudahBisa   : 'Minta tambah kalimat because, "I feel happy because I see my family.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Okay. Take your pencil. Let's write."
AKSI: Jeda 3 detik.
AKSI: Bagikan lembar kerja, satu per siswa.
UCAP: "Write about your favorite celebration. Eid, birthday, New Year, any special day."
UCAP: "Use On a day, we, and because in your sentences."
👂 LISTEN FIRST
AKSI: Tulis contoh di papan tulis: "My favorite celebration is Eid. On Eid, we visit grandmother and eat rendang. I feel happy because I see all my family."
UCAP: "Watch me. My favorite celebration is Eid. On Eid, we visit grandmother and eat rendang."
UCAP: "I feel happy because I see all my family."
UCAP: "Now, your turn."
AKSI: Pantau penulisan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa tampak diam dan tidak merayakan Eid: dekati, tanyakan "Kamu merayakan hari apa yang istimewa?", setelah mereka menjawab arahkan ke template.',
          cue         : 'Terima perayaan apa pun yang dipilih siswa. Semua perayaan valid.',
          darurat     : 'Jika waktu tersisa 8 menit atau kurang saat layar ini dimulai → minta siswa hanya mengisi tiga baris pertama, nama perayaan, On we, dan I feel because, langsung ke Layar 10 tanpa melalui Layar 9.',
          diferensiasi: {
            perluSupport: 'Izinkan mengisi hanya empat baris pertama.',
            sudahBisa   : 'Setelah template selesai, minta tambah satu kalimat, "This celebration is important to me because ___.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua hasil tulisan siswa — satu yang menggunakan because dengan alasan personal, satu yang menceritakan tradisi yang tidak biasa.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good. Let's hear from two friends."
AKSI: Minta siswa pertama membacakan deskripsi perayaannya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What celebration was that?"
AKSI: Tunggu respons semua siswa.
UCAP: "What do they do on that day?"
AKSI: Tunggu respons semua siswa.
AKSI: Tulis kalimat "On" yang baru dibacakan siswa pertama di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Minta siswa kedua membacakan deskripsi perayaannya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What celebration was that?"
AKSI: Tunggu respons semua siswa.
UCAP: "What do they do on that day?"
AKSI: Tunggu respons semua siswa.
AKSI: Tulis kalimat "On" yang baru dibacakan siswa kedua di papan tulis.
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
UCAP: "What is Eid?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan arti "visit" dalam Bahasa Indonesia.
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "On Eid, we visit family." di papan tulis.
UCAP: "How do we say this in Indonesian?"
AKSI: Tunggu respons semua siswa.
UCAP: "Give me one complete sentence about your celebration."
AKSI: Tunggu respons semua siswa.
AKSI: Hapus kalimat because dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan kalimat because.
AKSI: Hapus tulisan "we eat rendang" dan "we visit grandmother" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan tiap kalimat yang dihapus.
AKSI: Hapus tulisan "On Eid" dan "VISIT" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "On Eid" dan "visit".
AKSI: Lepaskan gambar Eid dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "Eid".`,
          bantuan     : null,
          cue         : 'Hapus kalimat because sebelum kalimat On Eid, we.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, I want to say something."
UCAP: "You have learned to talk about jobs. About food. About celebrations."
UCAP: "These are not just English words. These are parts of your life."
AKSI: Jeda 3 detik.
UCAP: "One question. What is one tradition in your family that you love?"
AKSI: Tunjuk satu sampai dua siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Jeda 3 detik.
UCAP: "Next time, something special. We will put everything together, jobs, food, celebrations, and write about our country."
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'Akhiri sesi dengan ritual goodbye, bukan instruksi administratif. Ucapkan teaser TP-15 dengan nada penuh harapan.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → biarkan siswa merapikan meja, jangan tambahkan aktivitas baru.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B14;
