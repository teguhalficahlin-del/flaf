const TP_B10 = {

  // METADATA
  id     : 'tp-b10',
  nomor  : 10,
  kelas  : 3,
  nama   : 'Weather and What We Wear',
  tema   : 'Menghubungkan kondisi cuaca dengan pilihan pakaian menggunakan kalimat kondisional sederhana',
  kluster: 'C — Alam, Tubuh, dan Kesehatan',
  jenis  : 'Biasa',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebutkan nama dua benda terkait hujan (raincoat dan umbrella) dan membedakan cara menggunakannya (wear vs carry).',
    'Peserta didik dapat menggunakan pola "When it rains/sunny/cold, I wear..." dalam kalimat lisan dan tulisan.',
    'Peserta didik dapat menulis weather report sederhana yang menghubungkan minimal dua kondisi cuaca dengan pilihan pakaian.',
  ],
  vocab     : ['sunny', 'rainy', 'cloudy', 'windy', 'hot', 'cold', 'raincoat', 'umbrella',
               'When it rains...', 'I wear...'],
  persiapan : [
    'Jas hujan nyata dan payung nyata, dibawa ke kelas sebelum kelas dimulai, untuk Layar 3.',
    'Gambar empat kondisi cuaca, sunny, rainy, cloudy, dan cold, satu gambar per kondisi, disiapkan sebelum kelas dimulai, untuk Layar 2 dan Layar 5.',
    'Lembar kerja siswa satu per siswa, berisi template laporan cuaca dengan baris today, when it rains, when it\'s sunny, when it\'s cold, dan favorite weather, di meja guru sebelum dibagikan.',
    'Papan tulis dan spidol untuk menulis pola When it rains, I wear dan variasinya di Layar 4 dan Layar 6.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [
    { file: 'tp-b10-cloudy.png',                    label: 'Cloudy' },
    { file: 'tp-b10-hat.png',                       label: 'Hat' },
    { file: 'tp-b10-jacket.png',                    label: 'Jacket' },
    { file: 'tp-b10-raincoat.png',                  label: 'Raincoat' },
    { file: 'tp-b10-rainy.png',                     label: 'Rainy' },
    { file: 'tp-b10-sandals.png',                   label: 'Sandals' },
    { file: 'tp-b10-shorts.png',                    label: 'Shorts' },
    { file: 'tp-b10-sunny.png',                     label: 'Sunny' },
    { file: 'tp-b10-umbrella.png',                  label: 'Umbrella' },
    { file: 'tp-b10-weather-outfit-worksheet.png',  label: 'Weather Outfit Worksheet' },
    { file: 'tp-b10-windy.png',                     label: 'Windy' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi',                          tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-09 dan Chant Cuaca',                      tujuan: 'Guru menghubungkan TP-09 dan menyalakan energi lewat chant cuaca.' },
    { layar:  2, judul: 'Pembuka · Reactivation Cuaca dan Warna',                       tujuan: 'Guru meninjau kondisi cuaca dan warna.' },
    { layar:  3, judul: 'Inti · Introduksi Raincoat dan Umbrella',                      tujuan: 'Guru memperkenalkan dua benda pakaian hujan.' },
    { layar:  4, judul: 'Inti · Introduksi When It Rains I Wear',                       tujuan: 'Guru memperkenalkan pola kondisi dan tindakan.' },
    { layar:  5, judul: 'Inti · Drill Cuaca dan Pakaian',                               tujuan: 'Guru memimpin drill cuaca dan pakaian.' },
    { layar:  6, judul: 'Inti · Modeling Kalimat Lengkap dan Variasi Cuaca',            tujuan: 'Guru memodelkan laporan cuaca lengkap.' },
    { layar:  7, judul: 'Inti · Pair Practice Tanya-Jawab Cuaca dan Pakaian',           tujuan: 'Guru memandu latihan tanya jawab berpasangan.' },
    { layar:  8, judul: 'Inti · Writing Individual Laporan Cuacaku',                    tujuan: 'Guru memandu siswa menulis laporan cuaca.' },
    { layar:  9, judul: 'Inti · Berkeliling dan Review Tulisan',                        tujuan: 'Guru meninjau hasil tulisan dan menguatkan pola kondisi.' },
    { layar: 10, judul: 'Penutup · Review dan Hapus Papan',                             tujuan: 'Guru mengonsolidasi pola cuaca dan pakaian lalu menghapus papan tulis.' },
    { layar: 11, judul: 'Penutup · Closure Emosional dan Teaser TP-11',                 tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-11.' },
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
UCAP: "Last time, we talked about animals. Tigers live in the jungle. Elephants eat plants."
UCAP: "And we said, the jungle is hot and wet. The forest is cool."
AKSI: Jeda 1 detik.
UCAP: "Today, same weather. But now, it's about us. When it's hot, what do you wear? When it rains, what do you put on?"
👂 LISTEN FIRST
AKSI: Ucapkan chant cuaca dengan ritme ketukan meja.
UCAP: "Sunny, hot, I wear a shirt, go!"
UCAP: "Rainy, cold, I wear a coat, go!"
UCAP: "Cloudy, windy, what do I wear, go!"
UCAP: "Weather, weather, let's find out, go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "Sunny, hot, I wear a shirt, go!"
UCAP: "Rainy, cold, I wear a coat, go!"
UCAP: "Cloudy, windy, what do I wear, go!"
UCAP: "Weather, weather, let's find out, go!"`,
          bantuan     : 'Jika siswa tidak hafal chant di putaran pertama: tunjukkan gestur fisik — tunjuk matahari di luar jendela untuk sunny, telapak tangan ke atas untuk rainy. Lakukan sendiri; siswa akan mengikuti.',
          cue         : 'Ucapkan jembatan ke TP-09 dengan penekanan pada "us" sebelum chant dimulai.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk jendela kelas.
UCAP: "What's the weather today?"
AKSI: Tunggu respons semua siswa.
UCAP: "Sunny, how does it feel?"
AKSI: Tunggu respons semua siswa.
UCAP: "Rainy, how does it feel?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan arti "windy" dalam Bahasa Indonesia.
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Now, colors. What color is the sky when it's sunny?"
AKSI: Tunggu respons semua siswa.
UCAP: "What color are rain clouds?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk ke arah semua siswa.
UCAP: "And your raincoat, what color is yours?"
AKSI: Tunjuk dua sampai tiga siswa.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Good. Today, we talk about weather and what we wear. Let's start."`,
          bantuan     : 'Jika kelas tidak merespons pertanyaan cuaca hari ini: ucapkan "Is it sunny? Rainy? Cloudy?" sambil tunjuk gambar cuaca di papan tulis.',
          cue         : 'Terima jawaban apa pun untuk pertanyaan raincoat. Ini preview yang disengaja untuk Layar 3.',
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
AKSI: Tunjukkan jas hujan ke semua siswa.
AKSI: Tunjuk jas hujan.
UCAP: "Look at this."
UCAP: "This is a raincoat."
AKSI: Ucapkan "raincoat" perlahan per suku kata.
AKSI: Jeda 3 detik.
UCAP: "We wear a raincoat when it rains. It keeps us dry."
AKSI: Tunjukkan payung ke semua siswa.
UCAP: "And this. An umbrella."
AKSI: Ucapkan "umbrella" perlahan per suku kata.
AKSI: Jeda 3 detik.
UCAP: "We use an umbrella when it rains too."
AKSI: Buat gestur tangan menunjuk ke badan sendiri untuk wear.
AKSI: Buat gestur tangan mengangkat ke atas untuk hold.
UCAP: "Raincoat, we wear it. Umbrella, we hold it."
AKSI: Tunjuk dua sampai tiga siswa secara acak.
UCAP: "Do you have a raincoat at home?"
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "And an umbrella?"
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika siswa bingung perbedaan raincoat dan umbrella: buat gestur memakai jas dengan gerakan lengan masuk, lalu gestur memegang payung dengan tangan menggenggam ke atas. Kontras fisik lebih cepat daripada penjelasan verbal.',
          cue         : 'Gunakan gestur wear dan hold secara konsisten sampai Layar 6.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
UCAP: "Now, let's put them together."
UCAP: "When it rains, I wear a raincoat."
AKSI: Tulis "When it rains, I wear a raincoat." di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Tunjuk tulisan "When it rains" di papan tulis.
AKSI: Tunjuk tulisan "I wear a raincoat" di papan tulis.
AKSI: Beri penjelasan bahwa "when it rains" adalah kondisinya, yaitu saat hujan.
AKSI: Beri penjelasan bahwa "I wear a raincoat" adalah tindakannya, yaitu memakai jas hujan.
UCAP: "Condition, then action. When this happens, I do this."
UCAP: "When it's sunny, I wear a hat."
AKSI: Tulis "When it's sunny, I wear a hat." di papan tulis.
AKSI: Jeda 1 detik.
UCAP: "When it's cold, I wear a jacket."
AKSI: Tulis "When it's cold, I wear a jacket." di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan "When it rains, I wear a raincoat." di papan tulis.
UCAP: "Say it with me!"
UCAP: "When it rains, I wear a raincoat."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "When it's sunny, I wear a hat." di papan tulis.
UCAP: "When it's sunny, I wear a hat."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa hanya mengucapkan "I wear a raincoat" tanpa "When it rains": ucapkan "When it rains" dengan nada menggantung, tunggu kelas melengkapi.',
          cue         : 'Pola "When it rains, I wear" disampaikan sebagai satu unit utuh, bukan diurai secara grammar.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk gambar rainy.
UCAP: "Say it together!"
AKSI: Ucapkan "When it rains" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar sunny.
AKSI: Ucapkan "When it's hot" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar cold.
AKSI: Ucapkan "When it's cold" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar cuaca berbeda secara acak empat sampai lima kali.
AKSI: Tunggu respons semua siswa setiap kali.
AKSI: Sebut "raincoat".
UCAP: "Raincoat. When?"
AKSI: Tunggu respons semua siswa.
AKSI: Sebut "hat".
UCAP: "Hat. When?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk satu siswa.
UCAP: "When it's rainy, what do you wear?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi pertanyaan individual untuk satu sampai dua siswa lain secara acak.`,
          bantuan     : 'Jika siswa yang ditunjuk diam lebih dari 5 detik: tunjuk gambar cuaca di papan tulis, ucapkan "When it rains, you wear a?". Pilihan kontekstual lebih mudah daripada produksi bebas.',
          cue         : null,
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima nama pakaian, "raincoat" atau "jacket", tanpa kalimat penuh.',
            sudahBisa   : 'Minta kalimat penuh dengan warna, "When it rains, I wear my blue raincoat.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan volume suara.
AKSI: Jeda 2 detik.
👂 LISTEN FIRST
UCAP: "Now, let's make a complete weather report. Listen."
UCAP: "Today, it is sunny."
AKSI: Tulis "Today, it is sunny." di papan tulis.
UCAP: "When it's sunny, I wear a white shirt and a hat."
AKSI: Tulis "When it's sunny, I wear a white shirt and a hat." di papan tulis di bawahnya.
UCAP: "I also use an umbrella to protect from the sun."
AKSI: Tulis "I use an umbrella." di papan tulis di bawahnya.
UCAP: "But when it rains."
UCAP: "When it rains, I wear my blue raincoat."
AKSI: Tulis "When it rains, I wear my blue raincoat." di papan tulis di bawahnya.
UCAP: "And I carry an umbrella."
AKSI: Tulis "I carry an umbrella." di papan tulis di bawahnya.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat pertama di papan tulis.
UCAP: "Say it with me!"
AKSI: Tunjuk tiap kalimat satu per satu, tunggu semua siswa membaca bersama.
AKSI: Ulangi sekali, tunjuk tiap kalimat sambil semua siswa membaca sendiri.
UCAP: "Good. Now, you will write your own weather report."`,
          bantuan     : 'Jika kelas membaca tidak sinkron di putaran kedua: biarkan. Familiarisasi dengan struktur lebih penting daripada sinkronisasi.',
          cue         : 'Pertahankan lima kalimat laporan cuaca di papan tulis sampai Layar 8 selesai. Dua kondisi cuaca dimodelkan, sunny dan rainy.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Ask your partner: What do you wear when it rains?"
UCAP: "Partner answers, then swap."
AKSI: Tanyakan siapa yang mau menjadi contoh.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "Ask me: What do you wear when it rains?"
AKSI: Tunggu siswa yang ditunjuk bertanya.
UCAP: "I wear my green raincoat. What about you?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Good. Now, your turn with your partner. You have four minutes."
AKSI: Berkeliling dan dengarkan tanpa menyela kecuali ada kekeliruan konsep besar.`,
          bantuan     : 'Jika satu pasang tidak tahu harus mulai dari mana: ucapkan kalimat tanya pertama untuk mereka, "Ask: What do you wear when it rains?", setelah mereka mengulangi arahkan partnernya untuk menjawab.',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit, atau energi kelas rendah → lewati layar ini, langsung ke Layar 8.',
            'Jika pair practice menjadi gaduh dalam satu menit → ucapkan "Okay. Take your pencil. Let\'s write.", langsung ke Layar 8.',
          ],
          diferensiasi: {
            perluSupport: 'Terima tanya jawab satu kondisi cuaca saja.',
            sudahBisa   : 'Minta tanya jawab dua kondisi berbeda dengan warna dalam jawaban.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Okay. Take your pencil. Let's write."
AKSI: Jeda 3 detik.
AKSI: Bagikan lembar kerja, satu per siswa.
UCAP: "Write your weather report. Use the board for help."
UCAP: "Your real clothes, not random. What do you actually wear?"
👂 LISTEN FIRST
AKSI: Tunjuk jendela kelas dan perhatikan kondisi cuaca saat ini.
AKSI: Tulis baris pertama contoh di papan tulis dengan kondisi cuaca hari ini.
UCAP: "Watch me. Today, it is sunny."
AKSI: Tulis "When it rains, I wear my yellow raincoat." di papan tulis.
UCAP: "When it rains, I wear my yellow raincoat."
UCAP: "Now, your turn."
AKSI: Pantau penulisan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa bertanya arti "because": ucapkan "karena", biarkan mereka melanjutkan dalam Bahasa Indonesia jika perlu.',
          cue         : 'Baris favorite weather dengan because adalah preview TP-11. Terima jawaban tanpa because jika siswa belum siap.',
          darurat     : 'Jika waktu tersisa 8 menit atau kurang saat layar ini dimulai → minta siswa hanya mengisi dua baris pertama, today dan when it rains, langsung ke Layar 10 tanpa melalui Layar 9.',
          diferensiasi: {
            perluSupport: 'Izinkan mengisi hanya tiga baris pertama, today, when it rains, dan when it\'s sunny.',
            sudahBisa   : 'Setelah semua baris terisi, minta tambah satu kalimat bebas, seperti "When it\'s cloudy, I bring an umbrella just in case.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua hasil tulisan siswa — satu yang menggunakan When it rains dengan benar, satu yang menggunakan warna dalam deskripsi pakaian.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good. Let's hear from two friends."
AKSI: Minta siswa pertama membacakan laporan cuacanya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What weather did they write about?"
AKSI: Tunggu respons semua siswa.
AKSI: Tulis satu kalimat "When it rains" dari laporan siswa pertama di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Minta siswa kedua membacakan laporan cuacanya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What weather did they write about?"
AKSI: Tunggu respons semua siswa.
AKSI: Tulis satu kalimat "When it rains" dari laporan siswa kedua di papan tulis.
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
UCAP: "What do we wear when it rains? Two things."
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "ketika hujan, saya memakai".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
UCAP: "And when it's sunny?"
AKSI: Tunggu respons semua siswa.
UCAP: "Give me one complete sentence about rain."
AKSI: Tunggu respons semua siswa.
AKSI: Simpan jas hujan dan payung di meja guru.
AKSI: Tunggu semua siswa mengucapkan "raincoat" dan "umbrella".
AKSI: Hapus kalimat "When it's sunny" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "When it's sunny".
AKSI: Hapus kalimat "When it rains" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "When it rains".`,
          bantuan     : null,
          cue         : 'Simpan benda pakaian sebelum menghapus pola kalimat.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, look outside."
AKSI: Jeda 3 detik.
AKSI: Beri waktu semua siswa melihat ke luar jendela.
UCAP: "What's the weather right now?"
AKSI: Tunggu respons semua siswa.
UCAP: "And what would you wear if you had to go outside right now?"
AKSI: Tunjuk satu sampai dua siswa.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Jeda 3 detik.
UCAP: "You made a decision, based on the weather. That's what language is for. To say real things about real life."
UCAP: "Next time, we talk about our body and our health. What we eat. What we do to stay healthy."
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'Akhiri sesi dengan ritual goodbye, bukan instruksi administratif. Instruksi "Look outside" tidak bisa diganti dengan instruksi hipotetis.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → biarkan siswa merapikan meja, jangan tambahkan aktivitas baru.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B10;
