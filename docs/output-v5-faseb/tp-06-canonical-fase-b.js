const TP_B06 = {

  // METADATA
  id     : 'tp-b06',
  nomor  : 6,
  kelas  : 3,
  nama   : 'My Daily Schedule',
  tema   : 'Menyusun dan menceritakan jadwal harian menggunakan penanda urutan',
  kluster: 'B — Waktu, Jadwal, dan Kebiasaan',
  jenis  : 'Biasa',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menggunakan penanda urutan "first", "then", dan "after that" untuk menceritakan kegiatan harian dalam urutan yang benar.',
    'Peserta didik dapat membuat kalimat dengan "I usually..." untuk menyatakan kegiatan yang biasa dilakukan beserta waktunya.',
    'Peserta didik dapat menulis jadwal harian sederhana dalam 5–6 kalimat menggunakan penanda urutan dan ekspresi waktu.',
  ],
  vocab     : ['first', 'then', 'after that', 'I usually...', 'brush teeth', 'wake up',
               'go to school', 'eat breakfast', 'sleep'],
  persiapan : [
    'Kartu jadwal guru, satu strip kertas atau papan kecil berisi jadwal pagi guru dengan empat sampai lima kegiatan dan jam, disiapkan sebelum kelas dimulai, untuk Layar 3 dan Layar 4.',
    'Lembar kerja siswa satu per siswa, berisi template jadwal harian dengan enam baris kalimat berpola, di meja guru sebelum dibagikan.',
    'Papan tulis dan spidol untuk menulis tabel kegiatan dan jam, scaffold first, then, after that, dan kalimat I usually di Layar 2, Layar 3, Layar 5, dan Layar 6.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi',                  tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-05 dan Chant Rutinitas',          tujuan: 'Guru menghubungkan TP-05 dan menyalakan energi lewat chant rutinitas.' },
    { layar:  2, judul: 'Pembuka · Reactivation Jam dan Rutinitas',             tujuan: 'Guru meninjau ekspresi waktu dan rutinitas harian.' },
    { layar:  3, judul: 'Inti · Modeling Jadwal First Then After That',         tujuan: 'Guru memodelkan jadwal pagi dengan penanda urutan.' },
    { layar:  4, judul: 'Inti · Drill Urutan Susun Jadwal Bersama',             tujuan: 'Guru memimpin drill kalimat jadwal berurutan.' },
    { layar:  5, judul: 'Inti · Introduksi I Usually',                          tujuan: 'Guru memperkenalkan frasa I usually.' },
    { layar:  6, judul: 'Inti · Modeling Kalimat Lengkap dan Baca Bersama',     tujuan: 'Guru memodelkan struktur jadwal lengkap dan membacanya bersama.' },
    { layar:  7, judul: 'Inti · Pair Practice Ceritakan Jadwal Pagi',           tujuan: 'Guru memandu latihan bercerita jadwal berpasangan.' },
    { layar:  8, judul: 'Inti · Writing Individual Jadwal Harianku',            tujuan: 'Guru memandu siswa menulis jadwal harian mereka.' },
    { layar:  9, judul: 'Inti · Berkeliling dan Review Tulisan',                tujuan: 'Guru meninjau hasil tulisan dan menguatkan penanda urutan.' },
    { layar: 10, judul: 'Penutup · Review dan Hapus Papan',                     tujuan: 'Guru mengonsolidasi penanda urutan dan menghapus papan tulis.' },
    { layar: 11, judul: 'Penutup · Closure Emosional dan Teaser TP-07',         tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-07.' },
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
UCAP: "Last time, we learned to say the time."
UCAP: "Quick, what time do you wake up? Tell me."
AKSI: Tunjuk dua sampai tiga siswa secara acak.
AKSI: Terima jawaban dalam format apa pun.
UCAP: "Good. Seven o'clock. Six o'clock. Half past five."
UCAP: "Today, we use those times to tell our whole day. First this, then that, after that, this."
👂 LISTEN FIRST
AKSI: Ucapkan chant rutinitas dengan ritme ketukan meja.
UCAP: "Wake up, brush teeth, eat breakfast, go!"
UCAP: "Go to school, study, go home, go!"
UCAP: "Sleep at night, that's my day, go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "Wake up, brush teeth, eat breakfast, go!"
UCAP: "Go to school, study, go home, go!"
UCAP: "Sleep at night, that's my day, go!"`,
          bantuan     : 'Jika siswa tidak hafal chant di putaran pertama: tunjukkan gestur fisik — tangan di pipi untuk sleep, tangan melambai untuk go to school, tangan di mulut untuk eat. Lakukan sendiri dengan berlebihan; siswa akan mengikuti.',
          cue         : 'Ucapkan jembatan ke TP-05 sebelum chant dimulai, bukan sesudahnya.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tulis tabel dua kolom di papan tulis dengan judul ACTIVITY di kiri dan TIME di kanan.
AKSI: Tulis di kolom ACTIVITY: wake up, brush teeth, eat breakfast, go to school, sleep.
UCAP: "You see this table. Left side, activities. Right side, time."
UCAP: "Tell me, what time do you wake up? Use o'clock or half past."
AKSI: Tunjuk dua sampai tiga siswa.
AKSI: Tulis jawaban siswa di kolom JAM.
UCAP: "And brush teeth, when?"
AKSI: Tunjuk dua sampai tiga siswa.
AKSI: Tulis jawaban siswa di kolom JAM.
UCAP: "Good. Your day has times. Today, we put those times in order."`,
          bantuan     : 'Jika siswa memberikan jawaban dalam Bahasa Indonesia: terima dengan anggukan, lalu tulis versi Inggrisnya di kolom JAM. Tulis "six o\'clock" tanpa mengoreksi cara mereka menjawab.',
          cue         : 'Pertahankan tabel kegiatan dan jam di papan tulis sampai Layar 8 selesai. Kolom JAM boleh berisi jawaban siswa yang berbeda-beda.',
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
AKSI: Tunjukkan kartu jadwal guru ke semua siswa.
AKSI: Tempel kartu jadwal guru di papan tulis.
UCAP: "Listen. I will tell you my morning."
UCAP: "First, I wake up at six o'clock."
AKSI: Tulis "First, I wake up at six o'clock." di papan tulis.
AKSI: Jeda 1 detik.
AKSI: Tunjuk tulisan "First" di papan tulis.
AKSI: Tunjuk "6:00" di kartu jadwal guru.
UCAP: "Then, I brush my teeth at half past six."
AKSI: Tulis "Then, I brush my teeth at half past six." di papan tulis.
AKSI: Jeda 1 detik.
AKSI: Tunjuk tulisan "Then" di papan tulis.
AKSI: Tunjuk "6:30" di kartu jadwal guru.
UCAP: "After that, I eat breakfast at seven o'clock."
AKSI: Tulis "After that, I eat breakfast at seven o'clock." di papan tulis.
AKSI: Jeda 1 detik.
AKSI: Tunjuk tulisan "After that" di papan tulis.
AKSI: Tunjuk "7:00" di kartu jadwal guru.
UCAP: "After that, I go to school at half past seven."
AKSI: Tulis "After that, I go to school at half past seven." di papan tulis.
AKSI: Tunjuk seluruh urutan kalimat di papan tulis.
UCAP: "First, then, after that. This is the order."
UCAP: "First is number one. Then is number two. After that is number three, four, five."`,
          bantuan     : 'Jika siswa tampak bingung dengan perbedaan first dan then: angkat satu jari untuk first, dua jari untuk then, tiga jari untuk after that. Gesture nomor ini lebih konkret daripada penjelasan verbal.',
          cue         : 'Tunjuk kata First, Then, dan After that setiap kali diucapkan, bukan kegiatan atau jamnya.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Hapus kalimat jadwal dari papan tulis.
AKSI: Tunjuk kartu jadwal guru di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "I will point, you say the sentence."
UCAP: "Say it together!"
AKSI: Tunjuk "6:00 wake up" di kartu jadwal guru.
AKSI: Ucapkan "First" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk "6:30 brush teeth" di kartu jadwal guru.
AKSI: Ucapkan "Then" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk "7:00 eat breakfast" di kartu jadwal guru.
AKSI: Ucapkan "After that" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk "7:30 go to school" di kartu jadwal guru.
AKSI: Ucapkan "After that" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Ulangi seluruh urutan sekali lebih cepat sambil hanya menunjuk tiap baris di kartu jadwal guru.
AKSI: Tunggu semua siswa mengucapkan tiap kalimat sendiri.
AKSI: Tunjuk satu siswa.
UCAP: "Number two. Say it."
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi pertanyaan individual untuk dua siswa lain secara acak dengan nomor kalimat berbeda.
UCAP: "One more thing. Then and after that mean the same. You can use either one. Both are correct."`,
          bantuan     : 'Jika kelas mengucapkan kegiatan tanpa penanda urutan: ulangi prompt dengan penekanan "First", lalu tunggu. Jika masih tidak ada, ucapkan "First, I" dan tunggu kelas melanjutkan "wake up at six o\'clock.".',
          cue         : 'Pertahankan kartu jadwal guru di papan tulis sampai drill selesai.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima penanda urutan dan kegiatan tanpa jam, seperti "Then, I brush my teeth.".',
            sudahBisa   : 'Setelah kalimat selesai, minta tambah "in the morning" atau "in the afternoon".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan volume suara.
AKSI: Tarik napas kecil yang terlihat oleh semua siswa.
AKSI: Jeda 2 detik.
👂 LISTEN FIRST
UCAP: "Now, one more thing."
UCAP: "I usually wake up at six o'clock."
AKSI: Tulis "I usually wake up at six o'clock." di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Beri penjelasan bahwa "usually" berarti biasanya, hampir setiap hari.
UCAP: "Every day. Almost every day."
UCAP: "I usually wake up at six o'clock. Almost every day, I do this."
UCAP: "I usually go to school at half past seven."
AKSI: Tulis "I usually go to school at half past seven." di papan tulis.
UCAP: "Now, your turn. Tell me one thing you usually do."
AKSI: Tunjuk dua sampai tiga siswa secara acak.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika siswa bingung dengan "usually": ucapkan satu kalimat Bahasa Indonesia sebagai jangkar, "Biasanya saya bangun jam enam", lalu ucapkan "I usually wake up at six o\'clock.". Satu jangkar cukup.',
          cue         : '"I usually" adalah frasa yang dipakai, bukan materi grammar di layar ini.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Good. Now, let's put it all together. First, then, after that, plus I usually."
AKSI: Tulis scaffold enam kalimat berpola di papan tulis dengan baris berikut: "I usually wake up at ___ o'clock.", "First, I ___ at ___.", "Then, I ___ at ___.", "After that, I ___ at ___.", "After that, I ___ at ___.", "I usually sleep at ___ o'clock.".
UCAP: "Look at the board. This is the structure for your schedule."
UCAP: "Let's read it together. Fill in the blanks with my schedule."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk baris pertama scaffold di papan tulis.
UCAP: "Say it with me!"
UCAP: "I usually wake up at six o'clock."
AKSI: Tunggu semua siswa membaca bersama dari papan tulis.
AKSI: Tunjuk baris kedua scaffold di papan tulis.
UCAP: "First, I brush my teeth at half past six."
AKSI: Tunggu semua siswa membaca bersama dari papan tulis.
AKSI: Tunjuk baris ketiga scaffold di papan tulis.
UCAP: "Then, I eat breakfast at seven o'clock."
AKSI: Tunggu semua siswa membaca bersama dari papan tulis.
AKSI: Tunjuk baris keempat scaffold di papan tulis.
UCAP: "After that, I go to school at half past seven."
AKSI: Tunggu semua siswa membaca bersama dari papan tulis.
AKSI: Tunjuk baris kelima scaffold di papan tulis.
UCAP: "After that, I study at school."
AKSI: Tunggu semua siswa membaca bersama dari papan tulis.
AKSI: Tunjuk baris keenam scaffold di papan tulis.
UCAP: "I usually sleep at nine o'clock."
AKSI: Tunggu semua siswa membaca bersama dari papan tulis.
UCAP: "Good. Now, you will use this structure. Your schedule. Your times."`,
          bantuan     : 'Jika kelas membaca tidak sinkron: perlambat tempo, tunjuk kata per kata dengan spidol. Familiarisasi dengan struktur lebih penting daripada sinkronisasi.',
          cue         : 'Jangan hapus satu baris scaffold pun sampai semua siswa selesai menulis di Layar 8. Jika papan tulis penuh, pindahkan tabel kegiatan dan jam dari Layar 2 ke sudut papan tulis.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Tell your partner your morning schedule. Use first, then, after that."
UCAP: "Start with I usually wake up."
AKSI: Tanyakan siapa yang mau menjadi contoh.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "Tell me your morning. Start with I usually wake up."
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Good. Now, your turn with your partner."
AKSI: Beri waktu empat menit, masing-masing dua menit per arah.
AKSI: Berkeliling dan dengarkan tanpa menyela kecuali ada kekeliruan urutan yang sistematis.`,
          bantuan     : 'Jika satu pasang berbicara dalam Bahasa Indonesia sepenuhnya: dekati, tunjuk scaffold di papan tulis, ucapkan kalimat pertama dengan suara pelan "I usually wake up at", tunggu salah satu dari mereka melanjutkan.',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit, atau energi kelas rendah → lewati layar ini, langsung ke Layar 8.',
            'Jika pair practice menjadi gaduh dalam satu menit → ucapkan "Okay. Look at the board. Take your pencil.", langsung ke Layar 8.',
          ],
          diferensiasi: {
            perluSupport: 'Terima dua kalimat saja, "I usually wake up at six o\'clock." dan "First, I brush my teeth.".',
            sudahBisa   : 'Setelah jadwal pagi selesai, minta ceritakan satu kegiatan sore atau malam dengan "In the afternoon, I usually".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Okay. Take your pencil. Let's write."
AKSI: Jeda 3 detik.
AKSI: Bagikan lembar kerja, satu per siswa.
UCAP: "Write your real schedule. Your activities. Your times."
UCAP: "Use the structure on the board. Use first, then, after that."
👂 LISTEN FIRST
AKSI: Tulis "I usually wake up at six o'clock." di bawah scaffold di papan tulis.
UCAP: "Watch me. I usually wake up at six o'clock."
UCAP: "Now, your turn."
AKSI: Pantau penulisan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa duduk diam tidak menulis setelah satu menit: dekati, tunjuk tabel kegiatan di papan tulis, bisikkan kalimat pembuka "I usually wake up at", tunggu siswa melanjutkan dengan jamnya sendiri.',
          cue         : 'Terima kegiatan apa pun yang ditulis siswa selama ada penanda urutan dan jam. Koreksi hanya jika penanda urutan hilang sepenuhnya.',
          darurat     : 'Jika waktu tersisa 8 menit atau kurang saat layar ini dimulai → minta siswa hanya mengisi tiga baris pertama, langsung ke Layar 10 tanpa melalui Layar 9.',
          diferensiasi: {
            perluSupport: 'Izinkan mengisi hanya empat baris pertama.',
            sudahBisa   : 'Setelah enam baris selesai, minta tambah satu kalimat tentang kegiatan sore atau malam.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua hasil tulisan siswa — satu yang menggunakan first, then, after that dengan benar, satu yang menambahkan kegiatan di luar tabel standar.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good. Let's hear from two friends."
AKSI: Minta siswa pertama membacakan jadwalnya ke semua siswa, satu kalimat per kegiatan.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "Nice."
AKSI: Tulis kalimat terakhir yang dibacakan siswa pertama di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Minta siswa kedua membacakan jadwalnya ke semua siswa, satu kalimat per kegiatan.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "Nice."
AKSI: Tulis kalimat terakhir yang dibacakan siswa kedua di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk scaffold di papan tulis.
UCAP: "First, then, after that. This is the order. Remember it for next time."`,
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
UCAP: "Good work today. Let's remember three words."
AKSI: Angkat satu jari.
UCAP: "Number one. What is the word?"
AKSI: Tunggu respons semua siswa.
AKSI: Angkat dua jari.
UCAP: "Number two. What is the word?"
AKSI: Tunggu respons semua siswa.
AKSI: Angkat tiga jari.
UCAP: "Number three, four, five. What are the words?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "I usually" di papan tulis.
UCAP: "And how do we say this word in Indonesian?"
AKSI: Tunggu respons semua siswa.
UCAP: "Give me one sentence about your morning. Use first."
AKSI: Tunggu respons semua siswa.
AKSI: Hapus papan tulis satu bagian per satu bagian dengan urutan after that, then, first, I usually, lalu scaffold kalimat.
AKSI: Tunggu semua siswa mengucapkan setiap bagian yang dihapus.`,
          bantuan     : null,
          cue         : 'Hapus scaffold dari baris terakhir ke baris pertama. Jaga ritme tetap tenang di layar ini.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, I want to tell you something."
UCAP: "Your schedule is yours. Nobody else wakes up at the same time, does the same things, in the same order."
AKSI: Jeda 3 detik.
UCAP: "That is what language does. It lets you say things that are true about you."
UCAP: "One question. What is the first thing you do after you wake up? Tell your neighbor."
AKSI: Beri waktu 20 detik untuk siswa berbisik ke tetangga.
UCAP: "Next time, we will talk about days. Monday. Tuesday. The whole week."
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

export default TP_B06;
