const TP_16 = {

  // METADATA
  id    : 'tp-16',
  nomor : 16,
  kelas : 2,
  nama  : 'Simple Story Retelling',
  tema  : 'Literasi Awal',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat memahami cerita bergambar sederhana dan menjawab pertanyaan "who, what, where" tentang isi cerita.',
    'Peserta didik dapat menceritakan kembali isi cerita dalam 3–4 kalimat menggunakan kata urutan (first, then, after that, finally) dengan bantuan kartu.',
    'Peserta didik dapat mengidentifikasi perasaan tokoh cerita secara mindful (without forced personal exposure).',
  ],
  vocab     : ['story', 'character', 'first', 'then', 'after that', 'finally',
               'who', 'what', 'where', 'because', 'I think'],
  persiapan : [
    'Buku cerita bergambar "Ani Finds a Cat" tersedia sebelum kelas masuk, terdiri dari tiga sampai lima halaman.',
    'Kartu urutan first, then, after that, finally, satu set per pasang, disiapkan di meja guru sebelum kelas masuk dan belum dibagikan.',
    'Kertas exit ticket disiapkan di bawah meja siswa sebelum kelas masuk.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [
    { file: 'tp16-cover.png',          label: 'Story Cover' },
    { file: 'tp16-page-01.png',        label: 'Page 1' },
    { file: 'tp16-page-02.png',        label: 'Page 2' },
    { file: 'tp16-page-03.png',        label: 'Page 3' },
    { file: 'tp16-page-04.png',        label: 'Page 4' },
    { file: 'tp16-sequence-cards.png', label: 'Sequence Cards' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',                 tujuan: 'Guru mengunci perhatian siswa sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Hook Prediksi',                     tujuan: 'Guru memancing antisipasi lewat sampul cerita.' },
    { layar:  2, judul: 'Inti · Story Listening',                      tujuan: 'Guru menceritakan kisah sambil memperlihatkan gambar.' },
    { layar:  3, judul: 'Inti · Whole-Class Comprehension QA',         tujuan: 'Guru mengecek pemahaman lewat tiga pertanyaan.' },
    { layar:  4, judul: 'Inti · Listen First Kata Urutan',             tujuan: 'Guru memperkenalkan empat kata urutan dengan gestur dua lapis.' },
    { layar:  5, judul: 'Inti · Produksi Bersama + Apply ke Cerita',   tujuan: 'Guru memimpin produksi kata urutan dan menerapkannya ke kalimat cerita.' },
    { layar:  6, judul: 'Inti · TPR Sequencing',                       tujuan: 'Guru memimpin retrieval kata urutan lewat gestur tanpa papan tulis.' },
    { layar:  7, judul: 'Inti · Reset + Distribusi Kartu Urutan',      tujuan: 'Guru membagikan kartu urutan dan mengecek kesiapan.' },
    { layar:  8, judul: 'Inti · Demo Partner Retelling',               tujuan: 'Guru mendemokan tugas storyteller dan listener.' },
    { layar:  9, judul: 'Inti · Pair Retelling',                       tujuan: 'Guru memandu latihan retelling berpasangan.' },
    { layar: 10, judul: 'Penutup · Reset + Refleksi Emosi Tokoh',      tujuan: 'Guru memimpin refleksi observasional tentang tokoh cerita.' },
    { layar: 11, judul: 'Penutup · Retrieval Choral Sequencing',       tujuan: 'Guru memimpin choral kata urutan dan kalimat cerita.' },
    { layar: 12, judul: 'Penutup · Exit Ticket',                       tujuan: 'Guru mengecek pemahaman lewat satu kalimat.' },
    { layar: 13, judul: 'Penutup · Closing',                           tujuan: 'Guru menutup kelas.' },
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
          teks        : `AKSI: Pegang buku cerita.
AKSI: Tunjukkan sampul buku ke semua siswa.
AKSI: Jangan buka halaman dalam dulu.
UCAP: "Look at this."
UCAP: "What do you see?"
AKSI: Tunggu dua sampai tiga respons siswa, boleh dalam Bahasa Indonesia.
→ Siswa: menjawab bebas.
UCAP: "Who is in the picture?"
AKSI: Tunggu dua sampai tiga respons siswa.
→ Siswa: menjawab bebas.
UCAP: "What do you think will happen in this story?"
AKSI: Tunggu dua sampai tiga prediksi siswa.
→ Siswa: memberi prediksi bebas.
UCAP: "Let's find out."
UCAP: "Listen carefully."`,
          bantuan     : null,
          cue         : 'Jangan konfirmasi prediksi benar atau salah; terima semua dengan anggukan. Jangan buka halaman dalam di layar ini.',
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
          teks        : `AKSI: Berdiri di depan kelas.
AKSI: Pegang buku cerita menghadap siswa.
UCAP: "Listen."
UCAP: "My turn to tell the story."
AKSI: Baca halaman satu dengan ekspresif.
AKSI: Tunjuk gambar Ani.
AKSI: Jeda 2 detik.
UCAP: "What do you think she will find?"
AKSI: Tunggu dua sampai tiga jawaban bebas.
→ Siswa: menjawab bebas.
AKSI: Lanjut tanpa konfirmasi.
AKSI: Baca halaman dua.
AKSI: Tunjuk gambar kucing.
AKSI: Baca halaman tiga.
AKSI: Peragakan gestur Ani memberi makan kucing.
AKSI: Baca halaman terakhir.
AKSI: Tunjuk gambar kucing menemukan rumah.
AKSI: Jeda 3 detik.
UCAP: "That is the end."
UCAP: "Did you like the story?"
AKSI: Tunggu respons bebas siswa.
→ Siswa: menjawab bebas.`,
          bantuan     : 'Jika perhatian kelas mulai turun: percepat transisi halaman, jangan berhenti lebih dari 3 detik per halaman, dan fokus pada tiga halaman utama yaitu pembuka, puncak, dan penutup.',
          cue         : 'Buku selalu menghadap kelas dan gambar terlihat semua siswa. Berhenti untuk prediksi hanya satu kali, antara halaman satu dan dua.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pegang buku terbuka di halaman yang relevan.
UCAP: "Now, questions."
AKSI: Tunjuk gambar Ani.
UCAP: "Point to Ani!"
→ Siswa: menunjuk gambar Ani.
UCAP: "Who is the main character?"
→ Siswa: "Ani!" atau "The girl!"
AKSI: Tunjuk gambar kucing.
UCAP: "Point to the cat!"
→ Siswa: menunjuk gambar kucing.
UCAP: "What did she find in the park?"
→ Siswa: "A cat!"
AKSI: Tunjuk halaman penutup.
UCAP: "Where did they find the cat's home?"
→ Siswa: menjawab apa pun yang masuk akal.
UCAP: "Good."
UCAP: "You understand the story."`,
          bantuan     : null,
          cue         : 'Dahului setiap pertanyaan dengan perintah "Point to". Terima jawaban Bahasa Indonesia dan campuran, dan batasi pada tiga pertanyaan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Simpan buku cerita di meja guru.
AKSI: Tulis "First", "Then", "After that", dan "Finally" di papan tulis berurutan dari kiri ke kanan.
AKSI: Tunjuk tulisan "First", "Then", "After that", dan "Finally" di papan tulis.
UCAP: "Listen."
UCAP: "Four magic words."
AKSI: Tunjuk tulisan "First" di papan tulis.
AKSI: Gerakkan tangan ke posisi paling kiri.
AKSI: Peragakan gestur berjalan.
UCAP: "First."
AKSI: Tunjuk tulisan "Then" di papan tulis.
AKSI: Geser tangan satu langkah ke kanan.
AKSI: Peragakan gestur terkejut.
UCAP: "Then."
AKSI: Tunjuk tulisan "After that" di papan tulis.
AKSI: Geser tangan satu langkah lagi ke kanan.
AKSI: Peragakan gestur memberi makan.
UCAP: "After that."
AKSI: Tunjuk tulisan "Finally" di papan tulis.
AKSI: Geser tangan ke posisi paling kanan.
AKSI: Buka kedua tangan lebar.
UCAP: "Finally."
UCAP: "One more time."
AKSI: Ulangi keempat kata sekali lagi dengan lambat.`,
          bantuan     : null,
          cue         : 'Gestur dua lapis selalu muncul bersama: posisi tangan kiri ke kanan dan gestur aksi cerita. Ucapkan "After that" pelan, kelas belum diminta produksi di layar ini.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Together."
UCAP: "I point, you say."
UCAP: "Say it together!"
AKSI: Tunjuk tulisan "First" di papan tulis.
→ Siswa: "First!"
AKSI: Tunjuk tulisan "Then" di papan tulis.
→ Siswa: "Then!"
AKSI: Tunjuk tulisan "After that" di papan tulis.
→ Siswa: "After that!"
AKSI: Tunjuk tulisan "Finally" di papan tulis.
→ Siswa: "Finally!"
AKSI: Ulangi urutan sekali lagi dengan kecepatan sedang.
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Now, the story."
UCAP: "Say it with me!"
AKSI: Tunjuk tulisan "First" di papan tulis.
AKSI: Gerakkan tangan ke posisi paling kiri.
AKSI: Peragakan gestur berjalan.
UCAP: "First, Ani walked in the park."
→ Siswa: "First, Ani walked in the park."
AKSI: Tunjuk tulisan "Then" di papan tulis.
AKSI: Geser tangan satu langkah ke kanan.
AKSI: Peragakan gestur terkejut.
UCAP: "Then, she found a cat."
→ Siswa: "Then, she found a cat."
AKSI: Tunjuk tulisan "After that" di papan tulis.
AKSI: Geser tangan dua langkah ke kanan.
AKSI: Peragakan gestur memberi makan.
UCAP: "After that, she helped the cat."
→ Siswa: "After that, she helped the cat."
AKSI: Tunjuk tulisan "Finally" di papan tulis.
AKSI: Geser tangan ke posisi paling kanan.
AKSI: Buka kedua tangan lebar.
UCAP: "Finally, they found the home!"
→ Siswa: "Finally, they found the home!"`,
          bantuan     : [
            'Jika kelas menghilangkan kata urutan dan hanya menyebut aksi: tunjuk papan tulis, ucapkan kata urutan, tunggu 2 detik, lalu lanjut choral.',
            'Jika kelas melambat di "After that": jangan ulang dari awal, lanjut langsung ke "Finally".',
          ],
          cue         : 'Gestur dua lapis wajib di setiap kalimat dan kelas mengulang kalimat penuh, bukan hanya kata urutan. Tunjuk papan tulis sebelum mengucapkan kalimat, bukan setelah.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Hapus tulisan "First", "Then", "After that", dan "Finally" dari papan tulis.
UCAP: "No board."
UCAP: "Just me and you."
AKSI: Gerakkan tangan ke posisi paling kiri.
AKSI: Peragakan gestur berjalan.
UCAP: "What word?"
→ Siswa: "First!"
AKSI: Geser tangan satu langkah ke kanan.
AKSI: Peragakan gestur terkejut.
UCAP: "What word?"
→ Siswa: "Then!"
AKSI: Geser tangan dua langkah ke kanan.
AKSI: Peragakan gestur memberi makan.
UCAP: "What word?"
→ Siswa: "After that!"
AKSI: Geser tangan ke posisi paling kanan.
AKSI: Buka kedua tangan lebar.
UCAP: "What word?"
→ Siswa: "Finally!"
UCAP: "My turn to watch."
UCAP: "You do it."
AKSI: Pilih empat gestur secara acak.
AKSI: Jangan ucapkan kata saat putaran acak.
→ Siswa: menyebut kata urutan sesuai gestur guru.
AKSI: Berhenti setelah empat gestur.
UCAP: "Stop."
UCAP: "Good."
AKSI: Tepuk tangan sekali.
UCAP: "Sit down."
UCAP: "Hands down."
AKSI: Jeda 3 detik.`,
          bantuan     : 'Jika kelas tertukar "then" dan "after that": tunjuk posisi tangan satu langkah dan ucapkan "Then.", geser ke dua langkah dan ucapkan "After that.", lalu lanjut.',
          cue         : 'Gestur identik dengan Layar 4 dan Layar 5, tanpa improvisasi gestur baru. Maksimal empat putaran acak tanpa guru mengucapkan kata, lalu freeze sebelum distribusi kartu.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Good."
UCAP: "Now, cards."
AKSI: Bagikan kartu urutan, satu set per pasang.
AKSI: Tahan semua instruksi cara pakai sampai semua pasang memegang kartu.
AKSI: Tunggu semua pasang siap.
UCAP: "Look at your cards."
UCAP: "Four cards."
UCAP: "Raise First!"
→ Siswa: mengangkat kartu "First".
UCAP: "Raise Finally!"
→ Siswa: mengangkat kartu "Finally".
UCAP: "Good."
UCAP: "Now listen before you practice."`,
          bantuan     : null,
          cue         : 'Selesaikan distribusi sebelum instruksi apa pun tentang cara memakai kartu. Cek kartu "First" dan "Finally" setelah distribusi.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Watch."
UCAP: "I show you first."
AKSI: Pegang satu set kartu urutan.
AKSI: Pilih satu siswa sukarela sebagai Listener.
AKSI: Minta siswa Listener memegang set kartunya sendiri.
AKSI: Angkat kartu "First".
AKSI: Peragakan gestur berjalan.
UCAP: "First, Ani walked in the park."
→ Siswa Listener: mengangkat kartu "First".
AKSI: Angkat kartu "Then".
AKSI: Peragakan gestur terkejut.
UCAP: "Then, she found a cat."
→ Siswa Listener: mengangkat kartu "Then".
AKSI: Angkat kartu "After that".
AKSI: Peragakan gestur memberi makan.
UCAP: "After that, she helped the cat."
→ Siswa Listener: mengangkat kartu "After that".
AKSI: Angkat kartu "Finally".
AKSI: Buka kedua tangan lebar.
UCAP: "Finally, they found the home!"
→ Siswa Listener: mengangkat kartu "Finally".
UCAP: "Storyteller tells."
UCAP: "Listener holds the card."
UCAP: "Raise when you hear the word."
UCAP: "Partner voice, not shouting."
UCAP: "When I clap, stop."
AKSI: Tepuk tangan sekali untuk melatih tanda berhenti.
UCAP: "Partner A tells the story."
UCAP: "Partner B holds cards."
UCAP: "Go."`,
          bantuan     : null,
          cue         : 'Lakukan demo sebagai Storyteller dengan satu siswa sukarela sebagai Listener sebelum pair practice. Gestur dua lapis tetap dipakai dan latih stop signal sebelum "Go".',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Partner A tells."
UCAP: "Partner B holds cards."
UCAP: "Raise when you hear the word."
UCAP: "Books closed on the desk."
UCAP: "You can peek if you forget."
UCAP: "Go."
AKSI: Batasi total durasi maksimal 4 menit.
AKSI: Setelah 2 menit, tepuk tangan sekali.
UCAP: "Switch."
UCAP: "Partner B tells."
UCAP: "Partner A holds cards."
AKSI: Tepuk tangan sekali untuk melanjutkan.
AKSI: Saat berkeliling, bergerak membentuk huruf U dan jangan berhenti lebih dari 10 detik di satu pasangan.`,
          bantuan     : [
            'Jika pasangan diam total: dekati, tunjuk kartu "First" di tangan mereka, bisikkan "First, Ani walked...", tunggu Partner A lanjut, tanpa menghentikan kelas.',
            'Jika Storyteller lupa urutan: tunjuk kartu berikutnya di tangannya tanpa bicara, tanpa menghentikan kelas.',
            'Jika Listener tidak mengangkat kartu: dekati, tunjuk kartu yang sesuai, peragakan gestur mengangkat, tanpa menghentikan kelas.',
            'Jika pasangan selesai terlalu cepat: tukar peran lagi, ucapkan "Try again. No book this time."',
          ],
          cue         : 'Cek apakah Listener aktif mengangkat kartu dan jangan koreksi grammar saat berkeliling. Buku tertutup di meja, boleh dilihat sebentar jika lupa.',
          darurat     : 'Jika volume kelas naik terlalu tinggi → tepuk tangan sekali, duduk diam 3 detik, lalu lanjut.',
          diferensiasi: {
            perluSupport: 'Dekati mereka dan izinkan melihat buku sebentar jika lupa urutan cerita.',
            sudahBisa   : 'Minta mereka bercerita tanpa melihat buku dengan kartu sebagai scaffold.',
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
          teks        : `AKSI: Ambil kembali buku cerita dari meja guru.
AKSI: Tepuk tangan sekali.
UCAP: "Stop."
UCAP: "Cards down."
UCAP: "Eyes on me."
AKSI: Jeda 3 detik.
UCAP: "Let's think about the story."
AKSI: Tunjuk halaman kucing di awal cerita.
UCAP: "The cat felt sad."
UCAP: "The cat was lost."
UCAP: "Alone."
AKSI: Tunjuk halaman Ani membantu.
UCAP: "Ani helped."
UCAP: "The cat felt happy."
AKSI: Tunjuk halaman penutup.
UCAP: "Ani helped."
UCAP: "Ani felt happy too."
AKSI: Jeda 2 detik.
UCAP: "Think quietly."
AKSI: Diam 5 detik.
AKSI: Jangan mengajukan pertanyaan selama jeda.
UCAP: "Good."
UCAP: "That is the story."`,
          bantuan     : 'Jika ada siswa tampak sedih: dekati diam-diam, lakukan kontak mata lembut, ucapkan "It is OK.", lalu lanjut tenang tanpa meneruskan refleksi untuk siswa itu.',
          cue         : 'Guru menyebut fakta cerita, bukan interpretasi moral. Diam 5 detik tanpa pertanyaan, dan refleksi maksimal 2 menit.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tulis kembali "First", "Then", "After that", dan "Finally" di papan tulis berurutan dari kiri ke kanan.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "One more time."
UCAP: "Say it together!"
AKSI: Tunjuk tulisan "First" di papan tulis.
→ Siswa: "First!"
AKSI: Tunjuk tulisan "Then" di papan tulis.
→ Siswa: "Then!"
AKSI: Tunjuk tulisan "After that" di papan tulis.
→ Siswa: "After that!"
AKSI: Tunjuk tulisan "Finally" di papan tulis.
→ Siswa: "Finally!"
AKSI: Pilih maksimal lima kartu secara acak.
AKSI: Tunjuk satu kartu, tahan 1 detik sebelum kartu berikutnya.
→ Siswa: menyebut kata setiap kartu.
UCAP: "And the story, fast."
AKSI: Gerakkan tangan ke posisi paling kiri.
AKSI: Peragakan gestur berjalan.
→ Siswa: "First, Ani walked!"
AKSI: Geser tangan satu langkah ke kanan.
AKSI: Peragakan gestur terkejut.
→ Siswa: "Then, she found a cat!"
AKSI: Geser tangan dua langkah ke kanan.
AKSI: Peragakan gestur memberi makan.
→ Siswa: "After that, she helped!"
AKSI: Geser tangan ke posisi paling kanan.
AKSI: Buka kedua tangan lebar.
→ Siswa: "Finally, they found the home!"`,
          bantuan     : null,
          cue         : 'Gestur dua lapis identik dengan Layar 4, 5, 6, dan 8. Pada putaran acak kartu, tahan 1 detik sebelum lanjut.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Take your pencil."
AKSI: Tunggu sampai semua siswa memegang pensil.
AKSI: Pegang kartu "Then".
AKSI: Tunjukkan kartu "Then" ke semua siswa.
AKSI: Tahan kartu di depan kelas.
UCAP: "Write one sentence."
UCAP: "Use this word."
UCAP: "Tell me about the story."
AKSI: Tunggu 45 sampai 60 detik.
UCAP: "Show me."`,
          bantuan     : [
            'Terima kalimat penuh seperti "Then she found a cat", frasa parsial seperti "then cat", atau gambar dengan label kata urutan, tanpa koreksi terbuka.',
            'Jika siswa belum selesai saat waktu habis: angkat kartu "Then", minta siswa mengucapkan lanjutan kalimat secara lisan kepada guru.',
          ],
          cue         : 'Pilih kartu "Then", bukan "First" atau "Finally". Tahan kartu yang sama selama siswa menulis, satu kata urutan dan satu kalimat.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "One more time."
UCAP: "All four words."
AKSI: Tunjuk kartu satu per satu.
→ Siswa: "First! Then! After that! Finally!"
UCAP: "Today, we listened to a story."
UCAP: "We used four words."
UCAP: "First, then, after that, finally."
UCAP: "You are great storytellers."
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

export default TP_16;
