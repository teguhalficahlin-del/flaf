const TP_C14 = {

  // METADATA
  id             : 'tp-c14',
  nomor          : 14,
  kelas          : 6,
  nama           : 'Reading: Instructions and Steps',
  tema           : 'Membaca Dunia',
  kluster        : 'D — Membaca Dunia',
  jenis          : 'Kompleks',
  text_anchor    : 'First, get the oranges. Then cut them in half. Next, squeeze the oranges into a glass. After that, add sugar. Finally, stir and enjoy.',
  connector_aktif: 'then (fokus produksi — exposure sejak TP-05) · when (fokus produksi — exposure sejak TP-10); then dominan; when muncul satu kali sebagai opsi di model guru',
  recycle_fase_b : [
    'I usually... / first, then, after that (TP-06 Fase B)',
    'When it..., I... (TP-10 Fase B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat membaca teks prosedur dan mengidentifikasi urutan lima langkah secara benar.',
    'Peserta didik dapat menggunakan connector then untuk menghubungkan langkah-langkah dalam tulisan prosedur.',
    'Peserta didik dapat merekonstruksi urutan langkah yang benar dari gambar acak melalui komunikasi verbal dengan pasangan.',
  ],
  vocab     : ['squeeze', 'pour', 'stir', 'half', 'glass', 'sugar'],
  persiapan : [
    'Teks prosedur ditulis di papan tulis sebelum siswa masuk, lengkap dengan nomor: "1. First, get the oranges. 2. Then cut them in half. 3. Next, squeeze the oranges into a glass. 4. After that, add sugar. 5. Finally, stir and enjoy." Tetap tampil sepanjang sesi termasuk saat OUTPUT.',
    'Image Cards Set A satu set per siswa versi A, lima kartu gambar dalam urutan acak 3–1–5–2–4. Label langkah ditulis di belakang kartu, tidak terlihat siswa, untuk pemeriksaan guru. Dibagikan pada awal Layar 7 ke siswa versi A.',
    'Image Cards Set B satu set per siswa versi B, lima kartu gambar yang sama dalam urutan acak berbeda 2–4–1–5–3. Dibagikan pada awal Layar 7 ke siswa versi B.',
    'Sequence Sheet satu per siswa, selembar kertas dengan lima kotak bernomor: Step 1, Step 2, Step 3, Step 4, Step 5, semua kosong. Dibagikan bersama Image Cards pada awal Layar 7.',
    'Papan tulis dan spidol untuk menampilkan dan menutup teks prosedur di Layar 5 dan Layar 6.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Kluster D', tujuan: 'Guru menjembatani membaca pengumuman TP-13 ke teks prosedur.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Context dan Text-anchor', tujuan: 'Guru memperkenalkan prosedur lima langkah membuat jus jeruk.' },
    { layar:  3, judul: 'Inti · INPUT · Membaca Prosedur Bersama', tujuan: 'Guru memandu siswa menemukan lima langkah dari teks.' },
    { layar:  4, judul: 'Inti · Model Guru then Dominan when Sekali', tujuan: 'Guru memodelkan then sebagai penghubung langkah dan when sebagai opsi.' },
    { layar:  5, judul: 'Inti · Latihan Oral Chained Steps', tujuan: 'Guru melatih siswa merangkai langkah dengan then.' },
    { layar:  6, judul: 'Inti · Speed Drill then', tujuan: 'Guru melatih then di awal kalimat instruksi.' },
    { layar:  7, judul: 'Inti · INTERACT · Shuffled Images Rekonstruksi Urutan', tujuan: 'Guru memandu siswa menyusun urutan lewat deskripsi gambar.' },
    { layar:  8, judul: 'Inti · Verifikasi Sequence Sheet vs Teks', tujuan: 'Guru memandu siswa mencocokkan urutan dengan teks.' },
    { layar:  9, judul: 'Inti · OUTPUT · Tulis Langkah-Langkahnya', tujuan: 'Guru memandu siswa menulis langkah dengan kalimat sendiri.' },
    { layar: 10, judul: 'Inti · Check and Extend', tujuan: 'Guru memandu siswa memeriksa urutan dan menambah kalimat.' },
    { layar: 11, judul: 'Penutup · Share Satu Langkah', tujuan: 'Guru memandu siswa membagikan satu langkah ke semua siswa.' },
    { layar: 12, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-15.' },
  ],

  // BREAKPOINTS
  breakpoints: [],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Tunggu sampai kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
AKSI: Tunggu respons semua siswa.
UCAP: "Today, instructions. How to make something."`,
    bantuan: 'Jika tidak ada respons: angkat tangan, tunggu siswa ikut menjawab.',
    cue    : 'Teks prosedur sudah tertulis di papan tulis sebelum siswa masuk.',
    darurat: null,
  },

  // SKENARIO
  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,
      langkah: [

        {
          id          : 'l1',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas tanpa menunjukkan teks baru.
UCAP: "Last time you read an announcement."
AKSI: Jeda 2 detik.
UCAP: "One sentence. Who remembers?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk satu siswa.
AKSI: Tunggu satu siswa menyebut kalimat dari TP-13 mereka.
AKSI: Angguk dan terima.
UCAP: "Good. Today, we read something different."
UCAP: "Instructions. How to make something."`,
          bantuan     : 'Jika tidak ada yang merespons dalam 20 detik: ucapkan contoh "School Book Fair is on Thursday.", lalu lanjut ke Layar 2.',
          cue         : 'Reactivation di layar ini berasal dari tulisan siswa sendiri di TP-13, bukan dari text-anchor baru. Satu respons cukup.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk teks prosedur di papan tulis.
UCAP: "Look at the board. This is a procedure, how to make orange juice."
UCAP: "Five steps. Let's read them."
👂 LISTEN FIRST
AKSI: Baca teks perlahan sambil menunjuk tiap langkah.
UCAP: "First, get the oranges."
UCAP: "Then cut them in half."
UCAP: "Next, squeeze the oranges into a glass."
UCAP: "After that, add sugar."
UCAP: "Finally, stir and enjoy."
UCAP: "Each step tells you what to do. And in what order."`,
          bantuan     : 'Jika siswa tidak memperhatikan saat dibacakan: ketuk papan tulis sebelum setiap langkah, ucapkan "Step one. Read.".',
          cue         : 'Di layar ini siswa hanya mendengarkan dan membaca. Teks diserap utuh dulu sebelum diekstraksi per langkah.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,
      langkah: [

        {
          id          : 'l3',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk teks prosedur di papan tulis.
UCAP: "What is Step 1?"
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "What do you do after that? Step 2?"
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "Step 3?"
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "Step 4?"
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "And the last step?"
AKSI: Tunggu siswa menjawab dari teks.
🗣 TOGETHER
AKSI: Ajak semua siswa membaca teks prosedur bersama.
UCAP: "Read with me. Ready?"
UCAP: "Say it with me!"
AKSI: Tunggu semua siswa membaca teks prosedur bersama.`,
          bantuan     : 'Jika siswa menjawab tanpa melihat papan tulis: ucapkan "Show me where in the text.", tunggu siswa menemukan jawabannya sendiri.',
          cue         : 'Setiap jawaban ditemukan dari teks, bukan dari ingatan.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas tanpa melihat papan tulis.
UCAP: "Now, I will describe the steps. Listen to how I connect them."
UCAP: "First, get the oranges."
UCAP: "Then cut them in half."
UCAP: "Then squeeze the oranges."
UCAP: "Then add sugar."
UCAP: "Then stir and enjoy."
AKSI: Jeda 1 detik.
UCAP: "Then, then, then. That is how steps connect."
UCAP: "Each step follows the next."
AKSI: Jeda 1 detik.
AKSI: Beri satu contoh when sebagai opsi alternatif.
UCAP: "When the glass is full, stop pouring."
UCAP: "When is for a condition. But for steps, then is easier."`,
          bantuan     : 'Jika siswa tidak mengikuti kecepatan model guru: beri jeda 2 detik setelah setiap "Then..." agar siswa bisa mengikuti.',
          cue         : 'then muncul empat kali, satu per transisi. when muncul satu kali sebagai opsi, bukan alternatif setara. Jangan tambahkan contoh when kedua.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Tutup atau sembunyikan teks prosedur di papan tulis sementara.
UCAP: "Now, without the text. Tell me the steps. Use then."
UCAP: "Step 1, get the oranges. Then what?"
AKSI: Tunjuk satu siswa.
AKSI: Tunggu siswa yang ditunjuk menjawab.
UCAP: "Then what next?"
AKSI: Tunjuk siswa lain.
AKSI: Tunggu siswa yang ditunjuk menjawab.
AKSI: Lanjutkan sampai semua lima langkah terucapkan oleh lima siswa berbeda.`,
          bantuan     : 'Jika siswa tidak bisa melanjutkan chain: ucapkan kata pertama dari langkah tersebut, "Squeeze...", tunggu siswa melanjutkan.',
          cue         : 'Siswa harus bisa mendeskripsikan setiap langkah secara verbal sebelum mendeskripsikan gambar ke pasangan di Layar 7.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Tampilkan kembali teks prosedur di papan tulis.
AKSI: Tunjuk satu langkah secara acak.
UCAP: "Read the step. Add then at the beginning. Fast."
AKSI: Tunggu siswa membaca langkah dengan then di awal.
AKSI: Ulangi dengan empat sampai lima langkah secara acak dan cepat tanpa koreksi.`,
          bantuan     : 'Jika siswa lambat merespons: ucapkan "Then...", tunggu siswa melanjutkan sisa kalimat dari teks.',
          cue         : 'Layar ini FLEX — lewati jika kelas sudah lancar menggunakan then di Layar 4 dan Layar 5. Cepat, tidak lebih dari tiga menit.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan Image Cards Set A ke setengah siswa dan Set B ke setengah siswa lainnya secara bergantian.
AKSI: Bagikan Sequence Sheet satu per siswa.
UCAP: "You have 5 image cards. They are not in the right order."
UCAP: "Your partner has the same 5 images, but in a different wrong order."
👂 LISTEN FIRST
AKSI: Pegang Set A dan tunjukkan kartu pertama ke semua siswa.
UCAP: "My first card. Someone is squeezing oranges."
AKSI: Tunjuk satu siswa yang memegang Set B.
UCAP: "What is your first card?"
AKSI: Tunggu siswa menjawab.
UCAP: "Different starting point. That is the gap."
UCAP: "Together, figure out the correct order. Fill in the Sequence Sheet."
UCAP: "Describe your cards. Use, my first card shows, my second card shows."
AKSI: Minta siswa duduk berpasangan, satu siswa A dengan satu siswa B.
AKSI: Minta siswa mendeskripsikan kartu pertama mereka ke pasangan.
AKSI: Minta pasangan menyebut kartu pertama mereka.
AKSI: Minta siswa bersama mengisi Sequence Sheet berdasarkan diskusi.
AKSI: Beri waktu tujuh sampai delapan menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa tidak tahu cara mendeskripsikan gambar: ucapkan "Say what you see. My first card shows someone doing something.", tunggu siswa meniru pola ini.',
          cue         : 'Image Cards tidak diperlihatkan ke pasangan, dideskripsikan secara verbal. Urutan Set A dan Set B sengaja berbeda.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, deskripsikan kartu pertama Set A lalu kartu pertama Set B untuk menunjukkan dua aksi berbeda, sederhanakan ke "Say, my first card shows. Then ask, what is your first card?", lalu restart selama 60 detik per arah.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Tampilkan kembali teks prosedur di papan tulis jika sudah disembunyikan.
UCAP: "Now, read the text. Check your Sequence Sheet."
UCAP: "Is your order the same? If not, talk to your partner first. Why is this step before that?"
AKSI: Beri waktu dua sampai tiga menit untuk membandingkan.
AKSI: Untuk pasangan yang urutannya salah, tunjuk Step 1 di teks.
UCAP: "Look at Step 1 in the text. Does it match what you wrote in Step 1?"
AKSI: Beri waktu siswa melihat sendiri dari teks tanpa diberi jawaban.`,
          bantuan     : 'Jika siswa tidak bisa menjelaskan mengapa satu langkah sebelum langkah lain: ucapkan "Can you cut an orange before you get it?", dorong logika kausal tanpa memberi jawaban.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 10 menit sebelum OUTPUT. Teks adalah alat verifikasi, bukan jawaban yang disalin.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l9',
          tipe        : 'instruksi',
          teks        : `AKSI: Biarkan teks prosedur tetap tampil di papan tulis.
UCAP: "Now, write the steps. In your own words."
UCAP: "Use then between each step. You can also use when if it feels right."
UCAP: "Listen."
AKSI: Ucapkan "First, get the oranges. Then" agar siswa melanjutkan sendiri.
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit ketiga, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa freeze: tunjuk Sequence Sheet siswa di Step 1, ucapkan "Write this step first. First, then the action.", tunggu satu kalimat, lalu tinggalkan.',
          cue         : 'Teks prosedur tetap tampil selama OUTPUT. Output adalah parafrase, bukan salinan verbatim. Perbedaan kecil dalam diksi sudah cukup bukti produksi mandiri.',
          darurat     : 'Jika waktu tersisa 5 menit atau kurang dan sebagian besar siswa baru menulis dua kalimat → ucapkan "Three steps. That is enough. Step 1, then Step 2, then Step 3.", lalu lanjut ke Layar 10.',
          diferensiasi: null,
          blok        : 'OUTPUT',
        },

        {
          id          : 'l10',
          tipe        : 'instruksi',
          teks        : `AKSI: Setelah delapan menit, beri sinyal tanpa menghentikan siswa yang masih menulis.
UCAP: "Two more minutes. Read your steps. Is the order correct? Did you use then?"
AKSI: Pantau kehadiran then di tulisan semua siswa tanpa mengoreksi grammar.`,
          bantuan     : 'Jika siswa sudah menulis semua lima langkah tapi belum ada connector: tunjuk jarak antara dua kalimat, ucapkan "What word connects these? Then?", tunggu siswa menambahkan then sendiri.',
          cue         : 'Connector when yang muncul spontan diterima, tetapi tidak dipaksakan. Fokus produksi adalah then.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati, tunjuk Sequence Sheet siswa, ucapkan "Write this step. Then, the action.".',
            sudahBisa   : 'Minta tambah satu kalimat dengan when, "When the juice is ready, you can drink it.".',
          },
          blok        : null,
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,
      langkah: [

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau membacakan satu kalimat dari tulisannya.
AKSI: Tunjuk satu sampai tiga siswa yang mengangkat tangan.
UCAP: "One step, just one sentence. From your seat is fine."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "What connector did they use? Then or when?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk satu siswa yang Sequence Sheet-nya terlihat sudah terisi lengkap di Layar 7.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Pertanyaan "Then or when?" memfokuskan perhatian pada connector dari kalimat nyata.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l12',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today you read instructions. Step by step."
AKSI: Jeda 2 detik.
UCAP: "First. Then. Next. After that. Finally."
AKSI: Jeda 2 detik.
UCAP: "And you put the steps back in the right order."
AKSI: Jeda 1 detik.
UCAP: "Keep it."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, we read a story."
AKSI: Jeda 1 detik.
UCAP: "What happened. Who was there."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : '"And you put the steps back in the right order." merangkum pencapaian TP-14, rekonstruksi logis dari informasi yang tidak berurutan.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C14;
