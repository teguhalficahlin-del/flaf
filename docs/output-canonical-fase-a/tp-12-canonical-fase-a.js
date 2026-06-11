const TP_12 = {

  // METADATA
  id    : 'tp-12',
  nomor : 12,
  kelas : 2,
  nama  : 'Body Parts',
  tema  : 'Tubuh dan Kesehatan',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebut nama anggota tubuh utama (head, eyes, ears, nose, mouth, hands, legs, feet) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan fungsi anggota tubuh menggunakan "I use my ... to ...".',
    'Peserta didik dapat merespons instruksi "touch your ..." dengan tindakan yang tepat.',
  ],
  vocab     : ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet', 'touch', 'I use my', 'to see', 'to hear'],
  persiapan : [
    'Kartu printable bagian tubuh x8: head, eyes, ears, nose, mouth, hands, legs, feet.',
    'Kartu sudah diberi nomor urut di belakang, ditempel sesuai gelombang.',
    'Papan tulis: tulis "I use my ___. To ___." sebelum kelas masuk.',
    'Tidak ada material siswa di meja sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',                                  tujuan: 'Guru mengunci perhatian siswa sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Hook Lagu',                                          tujuan: 'Guru membangkitkan energi lewat lagu bagian tubuh.' },
    { layar:  2, judul: 'Pembuka · Reset + Anchor ke Vocab',                            tujuan: 'Guru menurunkan energi dan mengaitkan lagu dengan kosakata.' },
    { layar:  3, judul: 'Inti · Listen First Gelombang 1',                              tujuan: 'Guru memperkenalkan empat bagian tubuh pertama.' },
    { layar:  4, judul: 'Inti · Produksi Bersama Gelombang 1 + Contrast Drill',         tujuan: 'Guru memimpin produksi dan membedakan eyes dengan ears.' },
    { layar:  5, judul: 'Inti · Reactivation + Listen First Gelombang 2',               tujuan: 'Guru meninjau gelombang 1 dan memperkenalkan empat bagian berikutnya.' },
    { layar:  6, judul: 'Inti · Produksi Gabungan',                                     tujuan: 'Guru memimpin produksi delapan bagian tubuh dalam tiga fase.' },
    { layar:  7, judul: 'Inti · TPR "Touch Your ..."',                                  tujuan: 'Guru memimpin retrieval lewat perintah menyentuh tanpa kartu.' },
    { layar:  8, judul: 'Inti · Reset + Listen First Struktur "I use my ... to ..."',   tujuan: 'Guru memodelkan pola "I use my ... to ...".' },
    { layar:  9, judul: 'Inti · Produksi Bersama + Demo Partner',                       tujuan: 'Guru memimpin produksi pola dan mendemokan latihan berpasangan.' },
    { layar: 10, judul: 'Inti · Partner Practice',                                      tujuan: 'Guru memandu latihan berpasangan dengan kartu.' },
    { layar: 11, judul: 'Penutup · Reset + Choral Body Parts',                          tujuan: 'Guru memimpin choral bagian tubuh dengan frame penuh.' },
    { layar: 12, judul: 'Penutup · Exit Ticket',                                       tujuan: 'Guru mengecek pemahaman lewat dua kalimat.' },
    { layar: 13, judul: 'Penutup · Closing',                                           tujuan: 'Guru menutup kelas.' },
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
UCAP: "Before we start, let's sing!"
UCAP: "Stand up!"
AKSI: Nyanyikan lagu "Head, Shoulders, Knees and Toes" sambil menyentuh setiap bagian tubuh.
AKSI: Ajak semua siswa mengikuti pada putaran pertama.
UCAP: "One more time!"
AKSI: Ajak semua siswa menyanyi penuh pada putaran kedua.
UCAP: "Good!"
UCAP: "Sit down."`,
          bantuan     : 'Jika kelas belum sinkron di putaran pertama: lanjutkan ke putaran kedua tanpa berhenti.',
          cue         : 'Lagu ini dipakai untuk membangkitkan semangat kelas, jangan berhenti untuk mengoreksi lafal.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan sekali.
UCAP: "Stop."
UCAP: "Hands down."
UCAP: "Eyes on me."
AKSI: Jeda 3 detik.
UCAP: "Good."
UCAP: "Now, listen."
AKSI: Sentuh kepala sendiri.
UCAP: "Head."
AKSI: Tunjuk kedua mata dengan dua jari.
UCAP: "Eyes."
AKSI: Sentuh kedua telinga dengan telapak tangan.
UCAP: "Ears."
AKSI: Sentuh hidung dengan satu jari.
UCAP: "Nose."
UCAP: "These are body parts."
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it with me!"
UCAP: "Body parts."
→ Siswa: "Body parts."`,
          bantuan     : null,
          cue         : 'Empat kata diucapkan guru saja, kelas belum diminta produksi. Buat gestur besar dan lambat.',
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
AKSI: Tempel kartu head di papan tulis.
AKSI: Tempel kartu eyes di papan tulis.
AKSI: Tempel kartu ears di papan tulis.
AKSI: Tempel kartu nose di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu head.
AKSI: Sentuh kepala sendiri.
UCAP: "Head."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu eyes.
AKSI: Tunjuk kedua mata dengan dua jari.
UCAP: "Eyes."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu ears.
AKSI: Sentuh kedua telinga dengan telapak tangan.
UCAP: "Ears."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu nose.
AKSI: Sentuh hidung dengan satu jari.
UCAP: "Nose."
UCAP: "One more time."
AKSI: Ulangi keempat kata sekali lagi.`,
          bantuan     : null,
          cue         : 'Buat gestur eyes dan ears jelas berbeda. Kelas belum diminta produksi di layar ini.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "I point, you say and touch."
UCAP: "Say it together!"
AKSI: Tunjuk kartu head.
→ Siswa: "Head!" sambil menyentuh kepala.
AKSI: Tunjuk kartu eyes.
→ Siswa: "Eyes!" sambil menunjuk kedua mata.
AKSI: Tunjuk kartu ears.
→ Siswa: "Ears!" sambil menyentuh kedua telinga.
AKSI: Tunjuk kartu nose.
→ Siswa: "Nose!" sambil menyentuh hidung.
AKSI: Ulangi urutan sekali lagi dengan dua kartu diacak.
UCAP: "Watch."
AKSI: Tunjuk kartu eyes.
AKSI: Tunjuk kedua mata dengan dua jari.
AKSI: Buka kedua tangan ke depan.
UCAP: "Eyes. I see with these."
AKSI: Tunjuk kartu ears.
AKSI: Sentuh kedua telinga dengan telapak tangan.
UCAP: "Ears. I hear with these."
UCAP: "Ready?"
UCAP: "Which one?"
UCAP: "I hear, touch it!"
→ Siswa: menyentuh telinga.
UCAP: "I see, touch it!"
→ Siswa: menyentuh mata.
AKSI: Ulangi contrast drill dua putaran.`,
          bantuan     : 'Jika kelas tertukar eyes dan ears: sentuh telinga sendiri, ucapkan "Watch me. Ears.", lalu ulangi cue.',
          cue         : 'Contrast drill eyes dan ears tidak boleh dilewati. Jaga gestur tetap konsisten di layar berikutnya.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk empat kartu gelombang pertama berurutan.
UCAP: "Quick check."
→ Siswa: menyebut kata setiap kartu sambil menyentuh bagian tubuh.
AKSI: Lanjut tanpa mengoreksi.
👂 LISTEN FIRST
AKSI: Tempel kartu mouth di papan tulis.
AKSI: Tempel kartu hands di papan tulis.
AKSI: Tempel kartu legs di papan tulis.
AKSI: Tempel kartu feet di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu mouth.
AKSI: Sentuh mulut.
UCAP: "Mouth."
AKSI: Tunjuk kartu hands.
AKSI: Angkat kedua tangan dengan telapak terbuka.
UCAP: "Hands."
AKSI: Tunjuk kartu legs.
AKSI: Tepuk paha dua kali.
UCAP: "Legs."
AKSI: Tunjuk kartu feet.
AKSI: Tunjuk ke bawah.
AKSI: Angkat satu kaki.
UCAP: "Feet."
UCAP: "One more time."
AKSI: Ulangi keempat kata sekali lagi.
UCAP: "Watch."
AKSI: Tepuk paha.
UCAP: "Legs. Up here."
AKSI: Tunjuk kaki.
UCAP: "Feet. Down here."
UCAP: "Ready?"
UCAP: "Up here, touch it!"
→ Siswa: menepuk paha.
UCAP: "Down here, touch it!"
→ Siswa: menunjuk kaki.
AKSI: Ulangi contrast drill dua putaran.`,
          bantuan     : null,
          cue         : 'Lakukan contrast drill legs dan feet di layar ini. Gunakan anchor "up here" dan "down here", bukan hanya nama kartu.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunjuk kartu mouth, hands, legs, dan feet berurutan.
→ Siswa: menyebut kata setiap kartu sambil membuat gestur.
UCAP: "Now, all together."
AKSI: Tunjuk kedelapan kartu berurutan.
→ Siswa: menyebut kata setiap kartu sambil membuat gestur.
UCAP: "Ready?"
UCAP: "Fast, but clear!"
AKSI: Pilih empat kartu secara acak.
AKSI: Tunjuk satu kartu, lalu tahan 1 detik sebelum kartu berikutnya.
→ Siswa: menyebut kata setiap kartu sambil membuat gestur.`,
          bantuan     : 'Jika kelas mulai telat atau gestur tidak sinkron: kurangi tempo, ulangi dua kartu, lalu lanjut.',
          cue         : 'Pertahankan gestur sepanjang seluruh fase. Jika ada siswa yang hanya bicara tanpa gestur: modelkan ulang sambil berjalan melewatinya, jangan hentikan kelas.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Lepaskan semua kartu dari papan tulis.
AKSI: Simpan kartu di meja guru.
UCAP: "Now, no cards."
UCAP: "Just me and you."
AKSI: Sentuh kepala sendiri.
UCAP: "Touch your head!"
AKSI: Sentuh hidung.
UCAP: "Touch your nose!"
AKSI: Sentuh mulut.
UCAP: "Touch your mouth!"
AKSI: Angkat kedua tangan.
UCAP: "Touch your hands!"
AKSI: Sentuh kedua telinga.
UCAP: "Touch your ears!"
AKSI: Tunjuk kedua mata.
UCAP: "Touch your eyes!"
AKSI: Tepuk paha.
UCAP: "Touch your legs!"
AKSI: Tunjuk kaki.
UCAP: "Touch your feet!"
UCAP: "My turn to watch."
UCAP: "You do it."
AKSI: Pilih lima cue secara acak.
AKSI: Jangan letakkan legs dan feet berurutan.
AKSI: Jangan ikut membuat gestur saat putaran acak.
→ Siswa: menyentuh bagian tubuh sesuai cue guru.
AKSI: Berhenti setelah lima cue.
UCAP: "Stop."
UCAP: "Good."`,
          bantuan     : [
            'Jika kelas tertukar legs dan feet: berhenti, sentuh paha sendiri, ucapkan "Legs. Here.", sentuh kaki, ucapkan "Feet. Here.", lalu lanjut.',
            'Jika ada siswa yang tidak bisa menyentuh: ucapkan "Point if you can\'t touch.", terima tunjukan saja.',
          ],
          cue         : 'Kartu sudah dilepas; retrieval berasal dari memori, bukan dari kartu.',
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
UCAP: "Now, listen."
👂 LISTEN FIRST
AKSI: Tempel kartu eyes di papan tulis.
AKSI: Tempel kartu ears di papan tulis.
AKSI: Tempel kartu nose di papan tulis.
AKSI: Tempel kartu mouth di papan tulis.
AKSI: Tempel kartu hands di papan tulis.
AKSI: Tunjuk pola "I use my ___." di papan tulis.
AKSI: Tunjuk pola "To ___." di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu eyes.
UCAP: "I use my eyes."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kedua mata dengan dua jari.
AKSI: Buka kedua tangan ke depan.
UCAP: "To see."
AKSI: Tunjuk kartu ears.
UCAP: "I use my ears."
AKSI: Jeda 1 detik.
AKSI: Sentuh kedua telinga dengan telapak tangan.
UCAP: "To hear."
AKSI: Tunjuk kartu nose.
UCAP: "I use my nose."
AKSI: Jeda 1 detik.
AKSI: Sentuh hidung.
AKSI: Hirup napas pendek.
UCAP: "To smell."
AKSI: Tunjuk kartu mouth.
UCAP: "I use my mouth."
AKSI: Jeda 1 detik.
AKSI: Sentuh mulut.
AKSI: Buka kedua tangan ke depan.
UCAP: "To speak."
AKSI: Tunjuk kartu hands.
UCAP: "I use my hands."
AKSI: Jeda 1 detik.
AKSI: Peragakan gestur menulis di udara.
UCAP: "To write."
UCAP: "One more time."
AKSI: Ulangi kelima kalimat sekali lagi.`,
          bantuan     : null,
          cue         : 'Tunjuk papan tulis setiap mengucapkan "I use my" dan "to". Beri jeda 1 detik antara "I use my" dan "to" di setiap kalimat.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Full sentence."
UCAP: "Say it with me!"
AKSI: Tunjuk pola "I use my ___." dan "To ___." di papan tulis.
AKSI: Tunjuk kartu eyes.
UCAP: "I use my eyes to see."
→ Siswa: "I use my eyes to see."
AKSI: Tunjuk kartu ears.
UCAP: "I use my ears to hear."
→ Siswa: "I use my ears to hear."
AKSI: Jeda 2 detik.
AKSI: Tunjuk kartu nose.
AKSI: Ucapkan "I use my nose..." agar siswa melengkapi kalimat.
→ Siswa: "...to smell!"
AKSI: Tunjuk kartu mouth.
AKSI: Ucapkan "I use my mouth..." agar siswa melengkapi kalimat.
→ Siswa: "...to speak!"
AKSI: Tunjuk kartu hands.
AKSI: Ucapkan "I use my hands..." agar siswa melengkapi kalimat.
→ Siswa: "...to write!"
UCAP: "Watch us."
AKSI: Tunjuk satu siswa untuk maju ke depan.
AKSI: Tunjuk kartu eyes.
AKSI: Ucapkan "I use my..." agar siswa melengkapi kalimat.
→ Siswa: "...eyes to see!"
UCAP: "Good."
AKSI: Ulangi demo sekali lagi dengan kartu ears.
UCAP: "See?"
UCAP: "One card, one sentence."
UCAP: "That's your job."
UCAP: "Partner voice, not shouting."
UCAP: "Partner A holds the card."
UCAP: "Partner B makes the sentence."
AKSI: Peragakan cara mengulang kalimat dengan satu siswa sukarela.
UCAP: "Listener, repeat the sentence."
AKSI: Tunjuk dua kartu dengan gestur tangan tanpa mengucapkannya.
UCAP: "When I clap, stop."
AKSI: Tepuk tangan sekali untuk melatih tanda berhenti.
UCAP: "Go."`,
          bantuan     : 'Jika kelas menghilangkan "I use my" dan hanya menyebut nama fungsi: tunjuk papan tulis, ucapkan "I use my...", tunggu 2 detik, lalu lanjut choral jika tidak ada respons.',
          cue         : 'Lakukan choral frame penuh sebelum fill-in-the-blank. Listener wajib mengulang kalimat partner.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Use these cards."
UCAP: "Partner A, pick a card, make a sentence."
UCAP: "Partner B, repeat it."
UCAP: "Clear sentence."
UCAP: "Go."
AKSI: Setelah 90 detik, tepuk tangan sekali.
UCAP: "Switch."
UCAP: "Partner B picks the card now."
AKSI: Tepuk tangan sekali untuk melanjutkan.
AKSI: Saat berkeliling, sesekali modelkan kalimat "I use my nose to smell."`,
          bantuan     : 'Jika pasangan diam total: dekati, bisikkan "Point to eyes. Say: I use my eyes to see.", tanpa menghentikan kelas.',
          cue         : 'Listener wajib mengulang kalimat, bukan hanya menonton. Jangan koreksi grammar saat berkeliling.',
          darurat     : 'Jika waktu ≤10 menit → lewati partner practice, langsung ke Layar 11.',
          diferensiasi: {
            perluSupport: 'Dekati mereka dan batasi latihan pada dua kartu yaitu eyes dan ears.',
            sudahBisa   : 'Minta mereka memakai kedelapan kartu dan menambah legs dan feet.',
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
AKSI: Tempel kembali kartu head, legs, dan feet di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Body parts."
UCAP: "Say it together!"
AKSI: Tunjuk kedelapan kartu berurutan.
→ Siswa: menyebut kata setiap kartu sambil membuat gestur.
UCAP: "Now, full sentence."
AKSI: Tunjuk kartu eyes.
→ Siswa: "I use my eyes to see!"
AKSI: Tunjuk kartu ears.
→ Siswa: "I use my ears to hear!"`,
          bantuan     : null,
          cue         : 'Putaran kedua menggunakan frame "I use my ... to ...", bukan nama kartu saja. Cukup dua kartu, tidak semua delapan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pegang kartu eyes dan kartu ears.
AKSI: Tunjukkan kedua kartu ke semua siswa.
UCAP: "Last one."
UCAP: "Write two sentences."
AKSI: Tunjuk pola "I use my ___." dan "To ___." di papan tulis.
UCAP: "Use these two cards."
AKSI: Tunggu 45 sampai 60 detik.
UCAP: "Show me."`,
          bantuan     : 'Terima dua kalimat penuh, frasa parsial seperti "use eyes, see", atau gambar dengan label, tanpa koreksi terbuka.',
          cue         : 'Gunakan dua kartu pasangan contrast yaitu eyes dan ears dengan struktur "I use my ... to ...". Tidak diperluas.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "One more time."
UCAP: "Touch your eyes!"
→ Siswa: menyentuh mata sambil mengucapkan "Eyes!".
UCAP: "Touch your ears!"
→ Siswa: menyentuh telinga sambil mengucapkan "Ears!".
AKSI: Tunjuk kedelapan kartu berurutan.
→ Siswa: menyebut kata setiap kartu sambil membuat gestur.
UCAP: "Today, body parts."
UCAP: "I use my eyes to see."
UCAP: "I use my ears to hear."
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

export default TP_12;
