const TP_14 = {

  // METADATA
  id    : 'tp-14',
  nomor : 14,
  kelas : 2,
  nama  : 'In the Classroom',
  tema  : 'Sekolah dan Benda-benda',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebut benda-benda kelas (book, pen, pencil, eraser, ruler, bag, table, chair, whiteboard) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan lokasi benda menggunakan preposisi sederhana (on, in, under, next to).',
    'Peserta didik dapat meminjam benda menggunakan ekspresi "Can I borrow your ...? Sure! / Sorry, I am using it."',
  ],
  vocab     : ['book', 'pen', 'pencil', 'eraser', 'ruler', 'bag', 'whiteboard',
               'on', 'in', 'under', 'next to', 'can I borrow'],
  persiapan : [
    'Kartu printable benda kelas x6: book, pen, pencil, eraser, ruler, bag.',
    'Kartu sudah diberi nomor urut di belakang, ditempel sesuai gelombang.',
    'Papan tulis: tulis "The ___ is ___ the ___." sebelum kelas masuk.',
    'Benda nyata untuk demonstrasi preposisi: satu buku, satu pena, satu pensil, satu penghapus, satu penggaris, dan satu tas guru.',
    'Tidak ada material siswa di meja sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',                              tujuan: 'Guru mengunci perhatian siswa sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Hook Benda di Kelas',                            tujuan: 'Guru memancing minat lewat benda di sekitar kelas.' },
    { layar:  2, judul: 'Inti · Listen First Gelombang 1',                          tujuan: 'Guru memperkenalkan tiga benda kelas pertama.' },
    { layar:  3, judul: 'Inti · Produksi Bersama Gelombang 1 + Contrast Drill',     tujuan: 'Guru memimpin produksi dan membedakan pen dengan pencil.' },
    { layar:  4, judul: 'Inti · Reactivation + Listen First Gelombang 2',           tujuan: 'Guru meninjau gelombang 1 dan memperkenalkan tiga benda berikutnya.' },
    { layar:  5, judul: 'Inti · Produksi Gabungan',                                 tujuan: 'Guru memimpin produksi enam benda dalam tiga fase.' },
    { layar:  6, judul: 'Inti · TPR "Show Me ..."',                                 tujuan: 'Guru memimpin retrieval lewat perintah menunjukkan benda tanpa kartu.' },
    { layar:  7, judul: 'Inti · Reset + Listen First Preposisi "On, In, Under"',    tujuan: 'Guru memodelkan tiga preposisi dengan benda nyata.' },
    { layar:  8, judul: 'Inti · Produksi Bersama Kalimat Preposisi',                tujuan: 'Guru memimpin produksi pola "The ... is ... the ...".' },
    { layar:  9, judul: 'Inti · Permainan "Where Is the ...?" + Demo Partner',      tujuan: 'Guru memimpin permainan tanya jawab dan mendemokan latihan berpasangan.' },
    { layar: 10, judul: 'Inti · Partner Practice',                                  tujuan: 'Guru memandu latihan berpasangan dengan benda sendiri.' },
    { layar: 11, judul: 'Penutup · Reset + Choral Benda + Preposisi',               tujuan: 'Guru memimpin choral benda kelas dengan frame penuh.' },
    { layar: 12, judul: 'Penutup · Exit Ticket',                                    tujuan: 'Guru mengecek pemahaman lewat satu kalimat.' },
    { layar: 13, judul: 'Penutup · Closing',                                        tujuan: 'Guru menutup kelas.' },
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
          teks        : `AKSI: Berdiri di tengah kelas.
AKSI: Jangan tunjukkan kartu dulu.
UCAP: "Look around."
UCAP: "What do you see?"
AKSI: Tunggu dua sampai tiga respons siswa, boleh dalam Bahasa Indonesia.
→ Siswa: menjawab bebas.
AKSI: Tunjuk meja sendiri.
AKSI: Angkat buku.
UCAP: "I see a book."
AKSI: Tunjuk pensil di meja siswa terdekat.
UCAP: "I see a pencil."
AKSI: Tunjuk tas di sudut kelas.
UCAP: "I see a bag."
UCAP: "These are classroom things."
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it with me!"
UCAP: "Classroom."
→ Siswa: "Classroom."`,
          bantuan     : 'Jika ada siswa yang diam: lanjut tanpa menunjuk siswa itu, tanpa komentar.',
          cue         : 'Guru yang menunjuk dan menyebut, bukan meminta siswa menebak. Terima respons bebas siswa tanpa koreksi.',
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
AKSI: Tempel kartu book di papan tulis.
AKSI: Tempel kartu pen di papan tulis.
AKSI: Tempel kartu pencil di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu book.
AKSI: Angkat buku nyata.
UCAP: "Book."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu pen.
AKSI: Peragakan gestur menulis mengalir.
UCAP: "Pen."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu pencil.
AKSI: Peragakan gestur menulis dengan ujung runcing menekan.
UCAP: "Pencil."
UCAP: "One more time."
AKSI: Ulangi ketiga kata sekali lagi.`,
          bantuan     : null,
          cue         : 'Buat gestur pen dan pencil jelas berbeda. Kelas belum diminta produksi di layar ini.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Now, together."
UCAP: "I point, you say."
UCAP: "Say it together!"
AKSI: Tunjuk kartu book.
→ Siswa: "Book!"
AKSI: Tunjuk kartu pen.
AKSI: Peragakan gestur menulis mengalir.
→ Siswa: "Pen!" sambil membuat gestur.
AKSI: Tunjuk kartu pencil.
AKSI: Peragakan gestur ujung runcing menekan.
→ Siswa: "Pencil!" sambil membuat gestur.
AKSI: Ulangi urutan sekali lagi dengan dua kartu diacak.
UCAP: "Watch."
AKSI: Tunjuk kartu pen.
AKSI: Peragakan gestur menulis mengalir.
UCAP: "Pen. Ink."
AKSI: Tunjuk kartu pencil.
AKSI: Peragakan gestur ujung runcing menekan.
AKSI: Tunjuk ujung pensil nyata.
UCAP: "Pencil. Wood."
UCAP: "Ready?"
UCAP: "Which one?"
UCAP: "Ink, show me!"
→ Siswa: menunjuk kartu pen.
UCAP: "Wood, show me!"
→ Siswa: menunjuk kartu pencil.
AKSI: Ulangi contrast drill dua putaran dengan cepat.`,
          bantuan     : 'Jika kelas tertukar pen dan pencil: tunjuk pensil nyata, ucapkan "Pencil. Longer word, longer thing.", lalu lanjut.',
          cue         : 'Contrast drill pen dan pencil tidak boleh dilewati. Gunakan anchor "ink" dan "wood", jangan jelaskan artinya.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk tiga kartu gelombang pertama berurutan dengan cepat.
UCAP: "Quick check."
→ Siswa: menyebut kata setiap kartu.
AKSI: Lanjut tanpa mengoreksi.
👂 LISTEN FIRST
AKSI: Tempel kartu eraser di papan tulis.
AKSI: Tempel kartu ruler di papan tulis.
AKSI: Tempel kartu bag di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu eraser.
AKSI: Ambil penghapus.
AKSI: Peragakan gestur menghapus besar kiri-kanan di udara.
UCAP: "Eraser."
AKSI: Tunjuk kartu ruler.
AKSI: Ambil penggaris.
AKSI: Peragakan gestur mengukur garis lurus.
UCAP: "Ruler."
AKSI: Tunjuk kartu bag.
AKSI: Tunjuk tas guru.
AKSI: Peragakan gestur mengangkat tali tas di bahu.
UCAP: "Bag."
UCAP: "One more time."
AKSI: Ulangi ketiga kata sekali lagi.`,
          bantuan     : null,
          cue         : 'Lakukan reactivation gelombang pertama sebelum gelombang kedua, tanpa mengoreksi. Buat gestur eraser besar dan jelas, tangan bergerak kiri-kanan di udara.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Together."
UCAP: "Say it together!"
AKSI: Tunjuk kartu eraser, ruler, dan bag berurutan dengan lambat.
→ Siswa: menyebut kata setiap kartu.
UCAP: "Now, all together."
AKSI: Tunjuk keenam kartu berurutan dengan kecepatan sedang.
→ Siswa: menyebut kata setiap kartu.
UCAP: "Ready?"
UCAP: "Fast, but clear!"
AKSI: Pilih empat kartu secara acak.
AKSI: Tunjuk satu kartu, lalu tahan 1 detik sebelum kartu berikutnya.
→ Siswa: menyebut kata setiap kartu.`,
          bantuan     : 'Jika kelas mulai telat: kurangi tempo, ulangi dua kartu, lalu lanjut.',
          cue         : 'Jangan letakkan pen dan pencil berurutan pada fase cepat. Kejelasan lebih penting daripada kecepatan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Lepaskan semua kartu dari papan tulis.
AKSI: Simpan kartu di meja guru.
UCAP: "No cards."
UCAP: "Just me and you."
UCAP: "Show me book!"
→ Siswa: mengangkat buku masing-masing.
UCAP: "Show me pencil!"
→ Siswa: mengangkat pensil.
UCAP: "Show me eraser!"
→ Siswa: mengangkat penghapus.
UCAP: "Show me bag!"
→ Siswa: menunjuk tas.
UCAP: "Show me ruler!"
→ Siswa: mengangkat penggaris.
UCAP: "Show me pen!"
→ Siswa: mengangkat pena.
UCAP: "My turn to watch."
UCAP: "You do it."
AKSI: Pilih lima cue secara acak.
AKSI: Jangan letakkan pen dan pencil berurutan.
AKSI: Jangan ikut membuat gestur saat putaran acak.
→ Siswa: mengangkat benda sesuai cue guru.
AKSI: Berhenti setelah lima cue.
UCAP: "Stop."
UCAP: "Good."`,
          bantuan     : 'Jika kelas tertukar pen dan pencil: berdiri diam, tunjuk pensil nyata, ucapkan "Pencil.", tunjuk pena, ucapkan "Pen.", lalu lanjut.',
          cue         : 'Retrieval berasal dari benda nyata di meja siswa, bukan dari kartu. Pilih maksimal lima cue dan jangan letakkan pen dan pencil berurutan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan sekali.
UCAP: "Stop."
UCAP: "Hands down."
UCAP: "Sit up."
AKSI: Jeda 3 detik.
UCAP: "Good."
UCAP: "Now, watch."
👂 LISTEN FIRST
AKSI: Ambil buku nyata.
AKSI: Tunjuk pola "The ___ is ___ the ___." di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Taruh buku di atas meja.
AKSI: Tunjuk kartu book.
AKSI: Peragakan gestur tangan datar di atas.
UCAP: "On."
UCAP: "On the table."
AKSI: Taruh buku di dalam tas guru.
AKSI: Tunjuk kartu bag.
AKSI: Peragakan gestur tangan masuk ke dalam.
UCAP: "In."
UCAP: "In the bag."
AKSI: Taruh buku di bawah kursi guru.
AKSI: Peragakan gestur tangan ke bawah.
UCAP: "Under."
UCAP: "Under the chair."
UCAP: "One more time."
AKSI: Ulangi ketiga demonstrasi sekali lagi.`,
          bantuan     : null,
          cue         : 'Setiap preposisi memakai gestur tangan berbeda dan konsisten: on tangan datar di atas, in tangan masuk ke dalam, under tangan ke bawah. Semua modeling posisi harus terlihat dari belakang kelas.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Full sentence."
UCAP: "Say it with me!"
AKSI: Tunjuk pola "The ___ is ___ the ___." di papan tulis.
AKSI: Taruh buku di atas meja.
UCAP: "The book is on the table."
→ Siswa: "The book is on the table."
AKSI: Taruh penghapus di dalam tas guru.
UCAP: "The eraser is in the bag."
→ Siswa: "The eraser is in the bag."
AKSI: Jeda 2 detik.
AKSI: Taruh penggaris di bawah kursi.
AKSI: Ucapkan "The ruler is..." agar siswa melengkapi kalimat.
→ Siswa: "...under the chair!"
AKSI: Taruh pensil di atas buku.
AKSI: Ucapkan "The pencil is..." agar siswa melengkapi kalimat.
→ Siswa: "...on the book!"`,
          bantuan     : 'Jika kelas menghilangkan "The book is" dan hanya menyebut preposisi: tunjuk papan tulis, ucapkan "The book is...", tunggu 2 detik, lalu lanjut choral.',
          cue         : 'Gerakkan benda fisik sebelum mengucapkan setiap kalimat. Lakukan choral frame penuh sebelum fill-in.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ambil penghapus dari meja guru.
AKSI: Sembunyikan penghapus di bawah kursi guru.
UCAP: "Where is my eraser?"
→ Siswa: "Under the chair!"
UCAP: "The eraser is under the chair."
UCAP: "Yes!"
UCAP: "Full sentence."
→ Siswa: "The eraser is under the chair!"
AKSI: Taruh penggaris di dalam tas guru.
UCAP: "Where is my ruler?"
→ Siswa: "In the bag!"
UCAP: "The ruler is in the bag."
UCAP: "Together."
→ Siswa: "The ruler is in the bag!"
AKSI: Taruh buku di atas meja.
AKSI: Ajak semua siswa bertanya bersama.
UCAP: "Now, you ask."
UCAP: "Ready?"
UCAP: "Ask me."
→ Siswa: "Where is the book?"
UCAP: "The book is on the table!"
UCAP: "Good."
UCAP: "That's the question."
UCAP: "That's the answer."
UCAP: "Watch them."
AKSI: Pilih satu pasang siswa sukarela untuk maju ke depan.
AKSI: Minta siswa A menyembunyikan pensil di bawah buku.
→ Siswa B: "Where is the pencil?"
→ Siswa A: "The pencil is under the book!"
UCAP: "Good."
UCAP: "Full sentence."
UCAP: "Partner voice, not shouting."
UCAP: "Partner A hides the object."
UCAP: "Partner B asks the question."
UCAP: "Partner A answers in a full sentence."
AKSI: Tunjuk pola "The ___ is ___ the ___." di papan tulis.
AKSI: Tunjuk dua benda dengan gestur tangan tanpa mengucapkannya.
UCAP: "When I clap, stop."
AKSI: Tepuk tangan sekali untuk melatih tanda berhenti.
UCAP: "Go."`,
          bantuan     : 'Jika kelas menghilangkan frame dan hanya menyebut preposisi: tunjuk papan tulis, ucapkan "The book is...", tunggu 2 detik, tanpa menghentikan kelas.',
          cue         : 'Lakukan whole-class QA drill sebelum demo partner. Pakai satu benda per putaran dan listener wajib bertanya "Where is the book?", bukan hanya menebak.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Biarkan siswa memakai benda di meja masing-masing: buku, pensil, dan penghapus.
UCAP: "Use your own things."
UCAP: "Partner A hides."
UCAP: "Partner B asks and answers."
UCAP: "Full sentence."
UCAP: "Go."
AKSI: Setelah 90 detik, tepuk tangan sekali.
UCAP: "Switch."
UCAP: "Partner B hides now."
AKSI: Tepuk tangan sekali untuk melanjutkan.
AKSI: Saat berkeliling, sesekali modelkan ulang gestur preposisi tanpa menghentikan kelas.`,
          bantuan     : 'Jika pasangan diam total: dekati, bisikkan "Hide your eraser. Now ask: Where is the eraser?", tanpa menghentikan kelas.',
          cue         : 'Benda disembunyikan tetapi tetap terlihat oleh partner. Jangan koreksi grammar saat berkeliling.',
          darurat     : 'Jika waktu ≤10 menit → lewati partner practice, langsung ke Layar 11.',
          diferensiasi: {
            perluSupport: 'Dekati mereka dan batasi latihan pada satu preposisi "on".',
            sudahBisa   : 'Minta mereka memakai preposisi berbeda dan mengganti benda setiap putaran.',
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
UCAP: "Stop."
UCAP: "Eyes on me."
AKSI: Jeda 2 detik.
AKSI: Tempel keenam kartu di papan tulis: book, pen, pencil, eraser, ruler, dan bag.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Classroom things."
UCAP: "Say it together!"
AKSI: Tunjuk keenam kartu berurutan dengan lambat.
→ Siswa: menyebut kata setiap kartu.
UCAP: "Now, full sentence."
AKSI: Taruh buku di atas penghapus.
→ Siswa: "The book is on the eraser!"
AKSI: Taruh pensil di dalam tas.
→ Siswa: "The pencil is in the bag!"`,
          bantuan     : null,
          cue         : 'Putaran kedua memakai frame "The ___ is ___ the ___.", bukan nama benda saja. Cukup dua posisi, tidak semua.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Taruh buku di atas penghapus di meja guru.
AKSI: Diamkan posisi benda, jangan menggerakkannya.
UCAP: "Last one."
UCAP: "Write one sentence."
AKSI: Tunjuk pola "The ___ is ___ the ___." di papan tulis.
AKSI: Tunjuk posisi benda.
UCAP: "Look at this."
AKSI: Tunggu 45 sampai 60 detik.
UCAP: "Show me."`,
          bantuan     : 'Terima kalimat penuh, frasa parsial seperti "book on eraser", atau gambar dengan label posisi, tanpa koreksi terbuka.',
          cue         : 'Tunjukkan satu posisi tetap dan satu kalimat dengan struktur "The ___ is ___ the ___.". Jangan ganti posisi benda selama siswa menulis.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "One more time."
UCAP: "Show me your book!"
→ Siswa: mengangkat buku sambil mengucapkan "Book!".
UCAP: "Show me your pencil!"
→ Siswa: mengangkat pensil sambil mengucapkan "Pencil!".
AKSI: Tunjuk keenam kartu dengan cepat.
→ Siswa: menyebut kata setiap kartu.
UCAP: "Today, classroom things."
UCAP: "The book is on the table."
UCAP: "The eraser is in the bag."
UCAP: "Well done."
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

export default TP_14;
