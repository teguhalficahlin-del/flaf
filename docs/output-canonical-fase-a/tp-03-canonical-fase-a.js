const TP_03 = {

  // METADATA
  id    : 'tp-03',
  nomor : 3,
  kelas : 1,
  nama  : 'Classroom Instructions',
  tema  : 'Interaksi Sosial Dasar',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat merespons instruksi satu langkah (sit down, stand up, open your book, close your book, listen, look) dengan tindakan yang benar.',
    'Peserta didik dapat merespons instruksi dua langkah sederhana (open your book and read, listen and repeat) dengan urutan tindakan yang tepat.',
    'Peserta didik dapat mengucapkan instruksi kelas dasar untuk memimpin teman dalam aktivitas terbimbing.',
  ],
  vocab     : ['sit down', 'stand up', 'open', 'close', 'listen', 'look',
               'repeat', 'read', 'write', 'draw', 'stop', 'go'],
  persiapan : [
    'Kartu instruksi bergambar x6: listen, look, write, open your book, close your book, draw.',
    'Poster TPR.',
    'Buku siswa sudah berada di atas meja sebelum kelas mulai (cek sebelum Layar 0).',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',          tujuan: 'Guru mengunci perhatian siswa sebelum aktivitas dimulai.' },
    { layar:  1, judul: 'Pembuka · Stand Up Sit Down',          tujuan: 'Guru memimpin gerakan stand up dan sit down tanpa penjelasan.' },
    { layar:  2, judul: 'Pembuka · Jembatan ke Inti',           tujuan: 'Guru menjembatani ke instruksi kelas yang baru.' },
    { layar:  3, judul: 'Inti · Kartu Instruksi Gelombang 1',   tujuan: 'Guru memperkenalkan tiga instruksi pertama lewat gerakan.' },
    { layar:  4, judul: 'Inti · Kartu Instruksi Gelombang 2',   tujuan: 'Guru memperkenalkan tiga instruksi berikutnya lewat gerakan.' },
    { layar:  5, judul: 'Inti · Drill Semua Instruksi',         tujuan: 'Guru memimpin drill enam instruksi dalam empat putaran.' },
    { layar:  6, judul: 'Inti · Reset + Aturan Simon Says',     tujuan: 'Guru menenangkan kelas dan menjelaskan aturan Simon Says.' },
    { layar:  7, judul: 'Inti · Simon Says',                    tujuan: 'Guru memimpin permainan Simon Says.' },
    { layar:  8, judul: 'Inti · Instruksi Dua Langkah',         tujuan: 'Guru memperkenalkan instruksi dua langkah.' },
    { layar:  9, judul: 'Inti · Siswa Jadi Pemimpin',           tujuan: 'Guru memandu siswa memimpin instruksi dengan kartu.' },
    { layar: 10, judul: 'Inti · Diferensiasi',                  tujuan: 'Guru memberi pilihan latihan berpasangan dengan atau tanpa kartu.' },
    { layar: 11, judul: 'Penutup · Reset + Review Cepat',       tujuan: 'Guru memimpin review cepat semua instruksi.' },
    { layar: 12, judul: 'Penutup · Refleksi',                   tujuan: 'Guru menanyakan instruksi favorit siswa.' },
    { layar: 13, judul: 'Penutup · Penutup Kelas',              tujuan: 'Guru menutup kelas dengan salam perpisahan bersama.' },
    { layar: 14, judul: 'Penutup Sesi · Selesai',               tujuan: 'Guru membereskan media dan mencatat observasi siswa.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Tunggu sampai semua siswa duduk.
AKSI: Tunggu sampai semua buku ada di atas meja.
UCAP: "Good morning, everyone!"
UCAP: "How are you today?"
AKSI: Tunggu respons siswa.
UCAP: "I'm fine, thank you!"
UCAP: "Today we learn classroom instructions."
UCAP: "Are you ready?"
AKSI: Tunggu respons siswa.`,
    bantuan: 'Jika kelas belum fokus: berdiri diam, ucapkan "Are you ready?" sekali lagi.',
    cue    : 'Jangan mulai Layar 1 sebelum kelas benar-benar tenang.',
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
AKSI: Peragakan gerakan berdiri.
UCAP: "Stand up!"
AKSI: Peragakan gerakan duduk.
UCAP: "Sit down!"
AKSI: Peragakan gerakan berdiri.
UCAP: "Stand up!"
AKSI: Peragakan gerakan duduk.
UCAP: "Sit down!"
AKSI: Tunjuk ruang tubuh sendiri.
UCAP: "Careful body."
UCAP: "Stay in your space."
AKSI: Peragakan putaran ketiga gerakan stand up dan sit down.
AKSI: Angkat tangan.
AKSI: Tunjuk mata sendiri.
UCAP: "Freeze."
UCAP: "Eyes on me."
AKSI: Tunggu sampai semua siswa diam.`,
          bantuan     : null,
          cue         : 'Lakukan setiap gerakan sebelum mengucapkan katanya.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Angkat tangan.
AKSI: Tunggu sampai semua siswa duduk tenang selama 2–3 detik.
UCAP: "Sit nicely."
UCAP: "Eyes here."
UCAP: "Good! You know 'stand up' and 'sit down'."
UCAP: "Now let's learn more instructions!"
AKSI: Tunjukkan kartu instruksi pertama ke semua siswa.`,
          bantuan     : null,
          cue         : null,
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
          teks        : `UCAP: "Books on the table."
AKSI: Tunjuk kartu instruksi "listen".
AKSI: Tunjuk telinga sendiri.
UCAP: "Listen."
AKSI: Tunjuk kartu instruksi "look".
AKSI: Tunjuk mata sendiri.
UCAP: "Look."
AKSI: Tunjuk kartu instruksi "write".
AKSI: Peragakan gerakan menulis di udara.
UCAP: "Write."
AKSI: Ulangi tiga instruksi ini sekali lagi.
→ Siswa: melakukan gerakan tanpa mengucapkan kata.`,
          bantuan     : [
            'Jika siswa tidak ikut: dekati siswa, tunjuk kartu, peragakan gerakan, lalu ajak siswa mengikuti.',
            'Jika siswa menulis di meja: tunjuk udara, ucapkan "In the air! Like this.".',
          ],
          cue         : 'Lanjut saat mayoritas siswa sudah siap, jangan tunggu semua sempurna. Pastikan mayoritas siswa menguasai ketiga instruksi sebelum lanjut ke Layar 4.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk kartu instruksi "open your book".
AKSI: Peragakan gerakan membuka buku.
UCAP: "Open your book."
AKSI: Tunjuk kartu instruksi "close your book".
AKSI: Peragakan gerakan menutup buku.
UCAP: "Close your book."
AKSI: Tunjuk kartu instruksi "draw".
AKSI: Peragakan gerakan menggambar di udara.
UCAP: "Draw."
AKSI: Ulangi tiga instruksi ini sekali lagi.
→ Siswa: melakukan gerakan mengikuti guru.`,
          bantuan     : [
            'Jika siswa tidak ikut: dekati siswa, tunjuk kartu, peragakan gerakan, lalu ajak siswa mengikuti.',
            'Jika ada siswa masih mencari buku: fokus ke mayoritas yang sudah siap.',
          ],
          cue         : 'Beri jeda 1 detik setelah ucapkan "Close your book".',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tempel enam kartu instruksi di papan tulis.
AKSI: Tunjuk kartu satu per satu saat memberi instruksi.
UCAP: "Listen and do!"
UCAP: "Ready?"
AKSI: Mulai putaran pertama.
UCAP: "Listen."
AKSI: Jeda 3 detik.
UCAP: "Look."
AKSI: Jeda 3 detik.
UCAP: "Write."
AKSI: Jeda 3 detik.
UCAP: "Open your book."
AKSI: Jeda 3 detik.
UCAP: "Close your book."
AKSI: Jeda 3 detik.
UCAP: "Draw."
AKSI: Mulai putaran kedua.
UCAP: "Listen!"
AKSI: Jeda 1 detik.
UCAP: "Look!"
AKSI: Jeda 1 detik.
UCAP: "Write!"
AKSI: Jeda 1 detik.
UCAP: "Open!"
AKSI: Jeda 1 detik.
UCAP: "Close!"
AKSI: Jeda 1 detik.
UCAP: "Draw!"
AKSI: Mulai putaran ketiga.
UCAP: "Ready?"
UCAP: "Fast, not loud."
AKSI: Bisikkan keenam instruksi satu per satu.
AKSI: Mulai putaran keempat.
UCAP: "Listen!"
UCAP: "Open!"
UCAP: "Draw!"
UCAP: "Close!"
→ Siswa: melakukan gerakan serentak.`,
          bantuan     : 'Jika siswa salah gerakan: peragakan ulang gerakan yang benar, tunjuk kartu, tanpa koreksi verbal.',
          cue         : 'Batasi putaran keempat pada empat instruksi.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan sekali.
AKSI: Angkat tangan untuk meminta perhatian kelas.
AKSI: Tunggu sampai semua siswa diam dan menatap guru.
UCAP: "Hands down."
UCAP: "Eyes on me."
UCAP: "Stay in your space."
UCAP: "Hands to yourself."
AKSI: Tunjuk mata sendiri.
UCAP: "Simon says? Do it!"
UCAP: "No Simon says? Freeze!"
AKSI: Peragakan aturan dengan demo pertama.
UCAP: "Simon says, stand up!"
AKSI: Peragakan gerakan berdiri.
UCAP: "Good, Simon says!"
AKSI: Peragakan aturan dengan demo kedua.
UCAP: "Sit down!"
AKSI: Tetap berdiri tanpa bergerak.
UCAP: "Freeze! No Simon says!"
AKSI: Peragakan aturan dengan demo ketiga.
UCAP: "Simon says, listen!"
AKSI: Tunjuk telinga sendiri.
UCAP: "Good!"`,
          bantuan     : null,
          cue         : null,
          darurat     : 'Jika waktu ≤10 menit → lewati Simon Says, langsung ke Layar 9.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Mulai permainan Simon Says.
AKSI: Campur instruksi dengan dan tanpa "Simon says".
🔁 8–10 instruksi.
UCAP: "Simon says, stand up!"
UCAP: "Simon says, listen!"
UCAP: "Sit down!"
UCAP: "Simon says, open your book!"
UCAP: "Write!"
UCAP: "Simon says, close your book!"
AKSI: Saat ada siswa salah, ucapkan "Oops, hands on head.", lalu lanjutkan.
→ Siswa: melakukan gerakan hanya pada instruksi ber-"Simon says".`,
          bantuan     : [
            'Jika kelas selalu bergerak tanpa menyaring: ucapkan "Simon says?" dengan jeda panjang sebelum instruksi tanpa "Simon says".',
            'Jika kelas terlalu ramai: tepuk tangan dua kali, ucapkan "Hands down.", ucapkan "Eyes on me.".',
          ],
          cue         : 'Jangan menyoroti siswa yang salah. Berhenti saat kelas masih antusias.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ajak semua siswa duduk.
UCAP: "Sit nicely."
UCAP: "Eyes here."
UCAP: "Now listen carefully."
AKSI: Angkat dua jari sebagai penanda dua langkah.
UCAP: "Now, two steps!"
UCAP: "Listen carefully."
UCAP: "Open your book."
AKSI: Tunggu sampai siswa membuka buku.
AKSI: Tunjuk mata sendiri.
UCAP: "And look."
UCAP: "Open your book and look."
AKSI: Tunjuk telinga sendiri.
UCAP: "Listen."
AKSI: Peragakan gerakan menulis di udara.
UCAP: "And write."
UCAP: "Listen and write."
AKSI: Peragakan gerakan membuka buku.
UCAP: "Open your book."
AKSI: Peragakan gerakan menulis di udara.
UCAP: "And write."
UCAP: "Open your book and write."
→ Siswa: melakukan dua gerakan berurutan.`,
          bantuan     : 'Jika siswa hanya melakukan satu gerakan: ucapkan instruksi kedua lagi dengan penekanan, "AND... write!".',
          cue         : 'Jangan peragakan gerakan menulis di atas buku.',
          darurat     : 'Jika waktu terbatas → cukup 2 contoh instruksi dua langkah.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ambil satu kartu instruksi.
UCAP: "Now you are the teacher!"
UCAP: "Watch me first!"
AKSI: Tunjukkan kartu instruksi ke semua siswa.
AKSI: Ulangi demo tunjukkan kartu sekali lagi.
AKSI: Tanyakan siapa yang mau maju ke depan.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
AKSI: Berikan kartu instruksi ke tangan siswa sebagai prop.
UCAP: "Show the card to the class!"
AKSI: Ucapkan instruksi sesuai kartu yang ditunjuk siswa.
→ Siswa: melakukan gerakan sesuai kartu.
🔁 2–3 siswa bergantian · 15–20 detik per siswa.`,
          bantuan     : 'Jika siswa maju diam: bisikkan nama instruksi, beri waktu 5 detik, lalu ucapkan instruksi sendiri sambil siswa tetap tunjuk kartu.',
          cue         : 'Siswa hanya menunjuk kartu, guru yang mengucapkan instruksi tanpa jeda.',
          darurat     : 'Jika kelas antusias → tambah satu putaran sebelum ke Layar 10.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ajak semua siswa duduk.
AKSI: Tepuk tangan sekali untuk menandai pergantian aktivitas.
UCAP: "Great!"
UCAP: "Now practise with your partner."
UCAP: "Small voice."
UCAP: "Only your partner listens."
UCAP: "Partner A gives three instructions."
UCAP: "Stop."
UCAP: "Then Partner B."
UCAP: "If you need help, look at the cards."
UCAP: "If you are ready, try without cards!"
UCAP: "If you finish early, do it again."
AKSI: Pantau latihan berpasangan semua siswa.`,
          bantuan     : 'Jika noise pecah: tepuk tangan dua kali, ucapkan "Hands down.", ucapkan "Eyes on me.", lalu lanjutkan.',
          cue         : 'Pastikan semua siswa tetap ikut sebelum menaikkan level. Batasi latihan berpasangan pada 3–4 menit.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati mereka dan tunjuk kartu instruksi sambil membisikkan satu kata instruksi.',
            sudahBisa   : 'Minta mereka memberi tiga instruksi kepada pasangan tanpa melihat kartu.',
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
          teks        : `AKSI: Tepuk tangan sekali.
UCAP: "Freeze."
UCAP: "Hands down."
UCAP: "Three, two, one."
UCAP: "Last round!"
UCAP: "Listen and do!"
AKSI: Peragakan gerakan berdiri.
UCAP: "Stand up!"
AKSI: Tunjuk telinga sendiri.
UCAP: "Listen."
AKSI: Tunjuk mata sendiri.
UCAP: "Look."
AKSI: Peragakan gerakan duduk.
UCAP: "Sit down!"
AKSI: Peragakan gerakan menutup buku.
UCAP: "Close your book."
→ Siswa: melakukan gerakan serentak mengikuti instruksi guru.`,
          bantuan     : null,
          cue         : null,
          darurat     : 'Jika kelas sudah tenang → langsung mulai review tanpa menunggu hitungan selesai.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk kartu-kartu instruksi di papan tulis.
UCAP: "Well done!"
UCAP: "Look at all these instructions."
UCAP: "Which one is your favourite?"
AKSI: Hitung mundur dengan ucapkan "Three, two, one, point!"
→ Siswa: menunjuk satu kartu instruksi favorit serentak saat hitungan selesai.`,
          bantuan     : 'Jika siswa bingung: tunjuk satu kartu, ucapkan "This one?", lalu tunggu siswa mengangguk atau menggeleng.',
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
AKSI: Lambaikan tangan ke semua siswa.
UCAP: "Excellent work today!"
UCAP: "You know classroom instructions in English!"
UCAP: "Goodbye, everyone!"
UCAP: "See you next time!"
🗣 TOGETHER
→ Siswa: "Goodbye, teacher! See you!"`,
          bantuan     : 'Jika diam: lambaikan tangan, ucapkan "Good-bye..." menggantung.',
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Kumpulkan kartu instruksi.
AKSI: Simpan poster TPR di meja guru.
AKSI: Catat siswa yang tidak merespons gerakan TPR.
AKSI: Catat siswa yang tidak bisa membedakan instruksi ber-"Simon says" dan tanpa "Simon says".
AKSI: Catat siswa yang tidak mau atau tidak bisa maju sebagai pemimpin.`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_03;
