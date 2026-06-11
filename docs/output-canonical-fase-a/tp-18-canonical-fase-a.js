const TP_18 = {

  // METADATA
  id    : 'tp-18',
  nomor : 18,
  kelas : 2,
  nama  : 'Integrative Project: My World',
  tema  : 'Proyek Integratif — Penutup Fase A',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat membuat poster sederhana yang menampilkan informasi diri (nama, usia), keluarga, rumah, dan hobi menggunakan kalimat-kalimat dari TP 1–17.',
    'Peserta didik dapat mempresentasikan "My World" dalam 2–5 kalimat dengan lafal yang jelas dan dengan dukungan guru jika diperlukan.',
    'Peserta didik dapat merespons pertanyaan sederhana dari guru tentang isi presentasi mereka, serta mendengarkan dan mengapresiasi presentasi teman-teman.',
  ],
  vocab     : ['my world', 'this is me', 'my family', 'my house', 'I like', 'every day',
               'my hobby', 'present', 'poster', 'project'],
  persiapan : [
    'Template poster "My World" satu per siswa, tertelungkup di meja siswa sebelum kelas masuk.',
    'Spidol warna atau pensil warna satu set per siswa, di meja siswa.',
    'Satu template poster contoh untuk demonstrasi guru, di meja guru.',
    'Kartu reference sentences di meja guru, dibagikan hanya jika dibutuhkan.',
    'Papan tulis: tulis "Hello! My name is ___. I have a ___ family. I live in a house. I like ___ because it is ___." sebelum kelas masuk.',
    'Timer 10 menit di meja guru.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar: 0, judul: 'Pre-Opening · Pembuka Kelas',          tujuan: 'Guru mengunci perhatian siswa sebelum sesi dimulai.' },
    { layar: 1, judul: 'Pembuka · Set Tone Perayaan',          tujuan: 'Guru membangun suasana perayaan penutup Fase A.' },
    { layar: 2, judul: 'Pembuka · Demo Template Poster',       tujuan: 'Guru memperkenalkan empat bagian poster dan memodelkan kalimatnya.' },
    { layar: 3, judul: 'Inti · Pembuatan Poster',              tujuan: 'Guru memandu siswa mengisi poster dalam batas waktu.' },
    { layar: 4, judul: 'Inti · Demo Presentasi Guru',          tujuan: 'Guru mendemokan cara presentasi dan ritual thumbs up.' },
    { layar: 5, judul: 'Inti · Sesi Presentasi',               tujuan: 'Guru memandu setiap siswa mempresentasikan posternya.' },
    { layar: 6, judul: 'Reset · Jeda Setelah Presentasi',      tujuan: 'Guru menenangkan kelas sebelum puncak perayaan.' },
    { layar: 7, judul: 'Penutup · Celebration',                tujuan: 'Guru memimpin perayaan penyelesaian Fase A.' },
    { layar: 8, judul: 'Penutup · Closure Ritual',             tujuan: 'Guru menutup Fase A lewat ritual baris per baris.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
UCAP: "Good morning, everyone!"
UCAP: "How are you today?"
AKSI: Tunggu respons siswa.
UCAP: "I'm fine, thank you!"
UCAP: "Today is a very special day."
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
          teks        : `AKSI: Berdiri di depan kelas.
AKSI: Senyum lebar.
UCAP: "Today, this is the last day of Phase A English."
AKSI: Jeda 3 detik.
UCAP: "Today is not a test."
UCAP: "It is a celebration."
UCAP: "You may feel nervous."
UCAP: "That is OK."
UCAP: "You may forget words."
UCAP: "That is OK."
UCAP: "I will help you."
AKSI: Tunggu respons siswa.
UCAP: "Are you ready?"
AKSI: Tunggu respons siswa.`,
          bantuan     : 'Jika ada siswa terlihat sangat nervous sebelum mulai: dekati diam-diam, lakukan kontak mata lembut, ucapkan "You will do great. I will help you.".',
          cue         : 'Jeda 3 detik setelah kalimat hari terakhir Phase A wajib. Berhenti setelah "I will help you", jangan tambahkan kalimat lain.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ambil template poster contoh dari meja guru.
AKSI: Tunjukkan template poster ke semua siswa.
UCAP: "Look at this."
UCAP: "This is the template."
UCAP: "Four sections."
AKSI: Tunjuk Section 1 pada template.
UCAP: "My name. Write your name here."
AKSI: Tunjuk Section 2 pada template.
UCAP: "My family. Write about your family."
AKSI: Tunjuk Section 3 pada template.
UCAP: "My house. Write about your house."
AKSI: Tunjuk Section 4 pada template.
UCAP: "My hobby. Write about your hobby."
UCAP: "Now I show you what to say."
AKSI: Tunjuk papan tulis.
AKSI: Ucapkan "Hello! My name is" diikuti nama guru sendiri.
UCAP: "I have a big family."
UCAP: "I live in a house."
UCAP: "I like reading because it is fun!"
UCAP: "That is my world!"
UCAP: "Simple."
UCAP: "You know all these words."
UCAP: "You learned them in Phase A."
AKSI: Simpan template poster contoh di meja guru.`,
          bantuan     : null,
          cue         : 'Template terlihat jelas dari belakang kelas. Pakai contoh keluarga netral "big family", bukan "happy family" atau "complete family".',
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
          teks        : `UCAP: "Now flip your poster."
UCAP: "Face up."
AKSI: Tunggu sampai semua siswa membalik poster.
UCAP: "Section 1. Write your name."
UCAP: "Start now."
AKSI: Mulai timer 10 menit.
AKSI: Berkeliling di antara meja siswa selama pembuatan poster.
AKSI: Saat timer mencapai menit kelima, hadap kelas.
UCAP: "Check. Section 1 and 2 done?"
UCAP: "Good."
UCAP: "Move to Section 3 and 4."
AKSI: Saat timer mencapai menit ketujuh, hadap kelas.
UCAP: "Two more minutes."
UCAP: "Finish your favorite part."
AKSI: Saat timer berbunyi, hadap kelas.
UCAP: "Time!"
UCAP: "Posters face down."
UCAP: "Eyes on me."`,
          bantuan     : [
            'Jika siswa cepat selesai: ucapkan "Draw pictures! Make it beautiful!".',
            'Jika siswa berhenti dan bingung: dekati, bisikkan "What is your hobby? Tell me.", tuliskan jawabannya jika perlu.',
            'Jika siswa panik: ucapkan "You are doing great. Take your time.".',
            'Jika poster siswa masih banyak kosong pada menit kedelapan: siswa berbicara dan guru menuliskan kalimatnya.',
            'Jika poster siswa kosong total atau siswa freeze: pegang poster bersama siswa, ajukan "What is your name?" lalu "What do you like?", tuliskan jawabannya.',
            'Jika siswa belum selesai saat waktu habis: lanjut ke presentasi dengan poster yang ada, bantu lengkapi saat siswa maju.',
          ],
          cue         : 'Jangan beri instruksi apa pun selama siswa masih membalik poster. Terima tulisan maupun gambar, dan ejaan bukan prioritas.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ambil kembali template poster contoh dari meja guru.
AKSI: Berdiri di depan kelas.
AKSI: Pegang poster menghadap kelas.
UCAP: "Watch me."
UCAP: "I present first."
AKSI: Ucapkan "Hello! My name is" diikuti nama guru sendiri.
UCAP: "I have a big family."
UCAP: "I live in a house."
UCAP: "I like reading because it is fun!"
UCAP: "That is my world!"
UCAP: "Thank you!"
AKSI: Tepuk tangan untuk diri sendiri.
AKSI: Tunggu kelas ikut bertepuk tangan.
UCAP: "See? Simple."
UCAP: "Four or five sentences."
UCAP: "That is all."
UCAP: "When someone finishes, we do this."
AKSI: Peragakan gestur thumbs up.
UCAP: "Thumbs up means: I heard you."
UCAP: "Well done."
AKSI: Ajak semua siswa melatih gestur thumbs up satu kali.
UCAP: "I will start from this side."
AKSI: Tunjuk deretan pertama.
AKSI: Simpan template poster contoh di meja guru.`,
          bantuan     : 'Jika ada siswa spontan ingin presentasi lebih dulu: persilakan sebagai bonus.',
          cue         : 'Thumbs up diperkenalkan dan dilatih sebelum sesi presentasi dimulai. Presentasi dari tempat duduk dihitung penuh, tidak wajib maju ke depan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Posters on lap."
UCAP: "Eyes front."
AKSI: Panggil nama siswa pertama.
AKSI: Minta siswa memegang poster menghadap kelas.
→ Siswa: mengucapkan dua sampai lima kalimat tentang dunianya.
UCAP: "Thank you!"
AKSI: Ajak semua siswa memberi gestur thumbs up.
AKSI: Panggil nama siswa berikutnya tanpa jeda.
AKSI: Ulangi siklus presentasi untuk setiap siswa.
AKSI: Batasi setiap presenter maksimal 20 detik.
AKSI: Sejak presenter keenam, perhatikan apakah siswa yang menunggu masih fokus.`,
          bantuan     : [
            'Jika siswa gugup tapi mau coba: berdiri di samping siswa, bisikkan "Hello, my name is", tunggu siswa melanjutkan.',
            'Jika siswa blank: ajukan "What is your name?" lalu "What do you like?", umumkan "This is Ana. Ana likes drawing!", ajak kelas memberi thumbs up, lanjut. Tetap dihitung sebagai presentasi.',
            'Jika siswa sangat nervous saat menunggu giliran: dekati sebelum namanya dipanggil, bisikkan "I will stand next to you. You will be fine.".',
            'Jika fokus kelas mulai turun: ucapkan "Quick round. Just your name and one hobby. Go!".',
          ],
          cue         : 'Thumbs up adalah ritual tetap setelah setiap presenter, bukan tepuk tangan bebas. Jangan koreksi grammar; keberanian dan usaha adalah prioritas di layar ini.',
          darurat     : 'Jika waktu tidak cukup untuk semua siswa → ucapkan "You will present at break time or tomorrow. I promise. No one is left out.".',
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
UCAP: "Everyone, well done."
AKSI: Jeda 3 detik.
UCAP: "You all presented your world."
UCAP: "That was brave."
AKSI: Jeda 2 detik.`,
          bantuan     : null,
          cue         : 'Ucapkan dua kalimat saja, jangan langsung masuk ke celebration. Jeda 2 detik tanpa bertanya apa pun.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, stand up!"
AKSI: Tunggu semua siswa berdiri.
UCAP: "You were brave."
UCAP: "You tried."
UCAP: "You spoke English."
UCAP: "That is amazing."
UCAP: "Now, clap for yourself!"
AKSI: Pimpin tepuk tangan dengan gestur jelas.
AKSI: Tunggu kelas ikut bertepuk tangan penuh.
UCAP: "And clap for your friends!"
AKSI: Pimpin tepuk tangan sekali lagi.
AKSI: Angkat kedua tangan ke atas.
UCAP: "Hands down."
UCAP: "You finished Phase A."
UCAP: "All of you."
UCAP: "Together."`,
          bantuan     : null,
          cue         : 'Pimpin "clap for yourself" sebelum "clap for your friends". Beri sinyal tangan turun setelah tepuk tangan kedua sebelum kalimat penutup.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan sekali.
AKSI: Tunggu kelas diam.
UCAP: "Repeat after me."
AKSI: Ajak semua siswa mengulang setiap baris.
UCAP: "Thank you, Phase A!"
→ Siswa: "Thank you, Phase A!"
UCAP: "I learned!"
→ Siswa: "I learned!"
UCAP: "I tried!"
→ Siswa: "I tried!"
UCAP: "I was brave!"
→ Siswa: "I was brave!"
UCAP: "Goodbye, Phase A!"
→ Siswa: "Goodbye, Phase A!"
UCAP: "Hello, Phase B!"
→ Siswa: "Hello, Phase B!"
AKSI: Jeda 3 detik.
UCAP: "Well done."
UCAP: "See you next time."`,
          bantuan     : null,
          cue         : 'Ucapkan ritual baris per baris dan tunggu kelas mengulang setiap baris. Jeda 3 detik di akhir, jangan tambahkan komentar apa pun setelahnya.',
          darurat     : null,
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_18;
