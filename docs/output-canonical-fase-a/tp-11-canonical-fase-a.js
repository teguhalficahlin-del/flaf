const TP_11 = {

  // METADATA
  id    : 'tp-11',
  nomor : 11,
  kelas : 2,
  nama  : 'Daily Routines',
  tema  : 'Kehidupan Sehari-hari',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebut kegiatan rutin harian (wake up, brush teeth, eat breakfast, go to school, study, sleep) dengan lafal yang benar.',
    'Peserta didik dapat mengungkapkan urutan kegiatan menggunakan "first, then, after that" dalam 3–4 kalimat.',
    'Peserta didik dapat menanyakan dan merespons "What do you do every day?" dengan kalimat rutin lengkap.',
  ],
  vocab     : ['wake up', 'brush teeth', 'eat breakfast', 'go to school', 'study', 'play', 'eat dinner', 'sleep', 'every day', 'first', 'then'],
  persiapan : [
    'Kartu printable kegiatan harian x8: wake up, brush teeth, eat breakfast, go to school, study, play, eat dinner, sleep.',
    'Kartu sudah diberi nomor urut di belakang, ditempel sesuai gelombang.',
    'Papan tulis: tulis "First, I ___." dan "Then, I ___." sebelum kelas masuk.',
    'Tidak ada material siswa di meja sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',                          tujuan: 'Guru mengunci perhatian siswa sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Hook Rutinitas Pagi',                        tujuan: 'Guru memancing minat lewat peragaan rutinitas pagi.' },
    { layar:  2, judul: 'Inti · Listen First Gelombang 1',                      tujuan: 'Guru memperkenalkan empat kegiatan pertama.' },
    { layar:  3, judul: 'Inti · Produksi Bersama Gelombang 1',                  tujuan: 'Guru memimpin produksi frasa dan gestur empat kegiatan pertama.' },
    { layar:  4, judul: 'Inti · Reactivation + Listen First Gelombang 2',       tujuan: 'Guru meninjau gelombang 1 dan memperkenalkan empat kegiatan berikutnya.' },
    { layar:  5, judul: 'Inti · Produksi Bersama Gelombang 2 + Gabungan',       tujuan: 'Guru memimpin produksi delapan kegiatan dalam tiga fase.' },
    { layar:  6, judul: 'Inti · Reset Sebelum Struktur',                        tujuan: 'Guru menenangkan kelas sebelum masuk struktur kalimat.' },
    { layar:  7, judul: 'Inti · Listen First Struktur "First ... Then ..."',    tujuan: 'Guru memodelkan pola "First, I ... Then, I ...".' },
    { layar:  8, judul: 'Inti · Produksi Bersama "First ... Then ..."',         tujuan: 'Guru memimpin produksi pola "First ... Then ...".' },
    { layar:  9, judul: 'Inti · Demo Cerita Rutinitas + Partner Practice',      tujuan: 'Guru mendemokan cerita rutinitas dan memandu latihan berpasangan.' },
    { layar: 10, judul: 'Penutup · Reset + Choral Rutinitas',                   tujuan: 'Guru memimpin choral rutinitas dengan frame penuh.' },
    { layar: 11, judul: 'Penutup · Survei Oral Cepat',                          tujuan: 'Guru memimpin survei oral cepat.' },
    { layar: 12, judul: 'Penutup · Exit Ticket',                               tujuan: 'Guru mengecek pemahaman lewat dua kalimat.' },
    { layar: 13, judul: 'Penutup · Closing',                                   tujuan: 'Guru menutup kelas.' },
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
UCAP: "Before school today, what did you do?"
AKSI: Tunggu dua sampai tiga respons siswa, boleh dalam Bahasa Indonesia.
→ Siswa: menjawab bebas.
UCAP: "Me too."
UCAP: "Listen."
AKSI: Peragakan gestur bangun tidur.
UCAP: "I wake up."
AKSI: Peragakan gestur menyikat gigi.
UCAP: "I brush my teeth."
AKSI: Peragakan gestur menyendok makanan ke mulut.
UCAP: "I eat breakfast."
AKSI: Peragakan gestur berjalan.
UCAP: "Then, I go to school!"
UCAP: "That's my morning."
AKSI: Ajak semua siswa mengucapkan bersama sambil membuat gestur bangun tidur.
UCAP: "Say it with me!"
UCAP: "Wake up!"
→ Siswa: "Wake up!" sambil membuat gestur.`,
          bantuan     : 'Jika ada siswa yang diam: lanjut tanpa menunjuk siswa itu, tanpa komentar.',
          cue         : 'Gestur muncul sebelum kata di setiap frasa. Jika kelas diam total: lanjutkan monolog dan gestur, ajak kelas ikut di akhir.',
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
AKSI: Tempel kartu wake up di papan tulis.
AKSI: Tempel kartu brush teeth di papan tulis.
AKSI: Tempel kartu eat breakfast di papan tulis.
AKSI: Tempel kartu go to school di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu wake up.
AKSI: Peragakan gestur bangun tidur sambil menepuk pipi.
UCAP: "Wake up."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu brush teeth.
AKSI: Peragakan gestur menyikat gigi.
UCAP: "Brush teeth."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu eat breakfast.
AKSI: Peragakan gestur menguap.
AKSI: Peragakan gestur menyendok makanan ke mulut.
UCAP: "Eat breakfast."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu go to school.
AKSI: Peragakan gestur berjalan sambil mengayun tangan.
UCAP: "Go to school."`,
          bantuan     : null,
          cue         : 'Ucapkan frasa dua kata secara natural, jangan dipenggal. Jaga gestur eat breakfast berbeda dari eat dinner.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "I point, you say and do the action."
UCAP: "Say it together!"
AKSI: Tunjuk kartu wake up.
→ Siswa: "Wake up!" sambil membuat gestur.
AKSI: Tunjuk kartu brush teeth.
→ Siswa: "Brush teeth!" sambil membuat gestur.
AKSI: Tunjuk kartu eat breakfast.
→ Siswa: "Eat breakfast!" sambil membuat gestur.
AKSI: Tunjuk kartu go to school.
→ Siswa: "Go to school!" sambil membuat gestur.
AKSI: Ulangi urutan sekali lagi dengan dua kartu diacak.`,
          bantuan     : 'Jika hanya sebagian siswa ikut: ucapkan "Everybody. Together.", lalu ulangi kartu itu sekali.',
          cue         : 'Pertahankan gestur sepanjang kedua putaran. Jangan lepaskan gestur di putaran kedua.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk empat kartu gelombang pertama berurutan.
UCAP: "Quick check."
→ Siswa: menyebut frasa setiap kartu sambil membuat gestur.
AKSI: Lanjut tanpa mengoreksi.
👂 LISTEN FIRST
AKSI: Tempel kartu study di papan tulis.
AKSI: Tempel kartu play di papan tulis.
AKSI: Tempel kartu eat dinner di papan tulis.
AKSI: Tempel kartu sleep di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu study.
AKSI: Peragakan gestur membuka buku.
UCAP: "Study."
AKSI: Tunjuk kartu play.
AKSI: Peragakan gestur melempar bola.
UCAP: "Play."
AKSI: Tunjuk kartu eat dinner.
AKSI: Peragakan gestur lelah.
AKSI: Peragakan gestur menyendok makanan ke mulut.
UCAP: "Eat dinner."
AKSI: Tunjuk kartu sleep.
AKSI: Peragakan gestur menyandarkan kepala ke telapak tangan sambil menutup mata.
UCAP: "Sleep."
UCAP: "Listen one more time."
AKSI: Ulangi keempat frasa sekali lagi.
UCAP: "Morning?"
→ Siswa: "Eat breakfast!" sambil membuat gestur.
UCAP: "Night?"
→ Siswa: "Eat dinner!" sambil membuat gestur.
AKSI: Ulangi contrast drill dua putaran.`,
          bantuan     : null,
          cue         : 'Jaga gestur eat breakfast dan eat dinner tetap berbeda. Lakukan contrast drill di layar ini, jangan dilewati.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunjuk kartu study, play, eat dinner, dan sleep berurutan.
→ Siswa: menyebut frasa setiap kartu sambil membuat gestur.
UCAP: "Now, all together."
AKSI: Tunjuk kedelapan kartu berurutan.
→ Siswa: menyebut frasa setiap kartu sambil membuat gestur.
UCAP: "Ready?"
UCAP: "Fast, but clear!"
AKSI: Pilih empat kartu secara acak.
AKSI: Tunjuk satu kartu, lalu tahan 1 detik sebelum kartu berikutnya.
→ Siswa: menyebut frasa setiap kartu sambil membuat gestur.`,
          bantuan     : 'Jika kelas mulai telat atau gestur tidak sinkron: kurangi tempo, ulangi dua kartu, lalu lanjut.',
          cue         : 'Untuk frasa dua kata, kejelasan lebih penting daripada kecepatan. Jangan penggal suku kata.',
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
UCAP: "Sit up."
UCAP: "Ready."`,
          bantuan     : null,
          cue         : 'Layar ini tidak boleh dilewati.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Tunjuk pola "First, I ___." di papan tulis.
AKSI: Tunjuk pola "Then, I ___." di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu wake up.
AKSI: Peragakan gestur bangun tidur.
UCAP: "First, I wake up."
AKSI: Tunjuk kartu brush teeth.
AKSI: Peragakan gestur menyikat gigi.
UCAP: "Then, I brush my teeth."
AKSI: Jeda 2 detik.
AKSI: Tunjuk kartu eat breakfast.
AKSI: Peragakan gestur menguap.
AKSI: Peragakan gestur menyendok makanan ke mulut.
UCAP: "First, I eat breakfast."
AKSI: Tunjuk kartu go to school.
AKSI: Peragakan gestur berjalan.
UCAP: "Then, I go to school."
UCAP: "Listen one more time."
AKSI: Ulangi dua pasang kalimat sekali lagi.`,
          bantuan     : null,
          cue         : 'Tunjuk papan tulis setiap mengucapkan "First" dan "Then". Berikan dua pasang contoh, bukan satu.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Full sentence."
UCAP: "Say it with me!"
AKSI: Tunjuk pola "First, I ___." dan "Then, I ___." di papan tulis.
AKSI: Tunjuk kartu wake up.
UCAP: "First, I wake up."
→ Siswa: "First, I wake up."
AKSI: Tunjuk kartu brush teeth.
UCAP: "Then, I brush my teeth."
→ Siswa: "Then, I brush my teeth."
AKSI: Jeda 2 detik.
AKSI: Tunjuk kartu study.
AKSI: Ucapkan "First, I..." agar siswa melengkapi kalimat.
→ Siswa: "...study!"
AKSI: Tunjuk kartu play.
AKSI: Ucapkan "Then, I..." agar siswa melengkapi kalimat.
→ Siswa: "...play!"
UCAP: "Your turn!"
UCAP: "Two cards."
AKSI: Tunjuk dua kartu berurutan.
→ Siswa: membentuk kalimat sendiri dengan "First" dan "Then".`,
          bantuan     : 'Jika kelas menghilangkan connector dan hanya menyebut nama frasa: tunjuk papan tulis, ucapkan "First, I...", tunggu 2 detik, lalu lanjut choral jika tidak ada respons.',
          cue         : 'Lakukan choral frame penuh sebelum fill-in-the-blank. Tunjuk papan tulis setiap kelas mulai menghilangkan "First" atau "Then".',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Watch me."
UCAP: "My morning routine."
AKSI: Tunjuk kartu wake up.
AKSI: Gerakkan tangan ke kanan.
UCAP: "First, I wake up."
AKSI: Tunjuk kartu brush teeth.
AKSI: Gerakkan tangan ke kanan.
UCAP: "Then, I brush my teeth."
AKSI: Tunjuk kartu eat breakfast.
AKSI: Gerakkan tangan ke kanan.
UCAP: "Then, I eat breakfast."
AKSI: Tunjuk kartu go to school.
AKSI: Gerakkan tangan ke kanan.
UCAP: "Then, I go to school."
AKSI: Gerakkan tangan ke kanan empat langkah.
UCAP: "See? First, then, then, then."
AKSI: Tunjuk satu siswa untuk maju ke depan.
UCAP: "You, you."
UCAP: "Tell me your morning."
UCAP: "Use the cards."
UCAP: "In order."
→ Siswa: menunjuk kartu dan menceritakan rutinitasnya.
AKSI: Jika siswa beku, bisikkan "First, I...", lalu tunjuk kartu wake up.
UCAP: "Partner voice, not shouting."
UCAP: "Partner A tells first."
UCAP: "Partner B listens."
AKSI: Peragakan cara menunjuk kartu saat partner bercerita.
UCAP: "Listener, point to the cards."
AKSI: Gerakkan tangan ke kanan tiga langkah.
UCAP: "Use three cards in order."
UCAP: "Not fast."
UCAP: "In order."
UCAP: "When I clap, stop."
AKSI: Tepuk tangan sekali untuk melatih tanda berhenti.
UCAP: "Go."
AKSI: Setelah 90 detik, tepuk tangan sekali.
UCAP: "Switch."
UCAP: "Partner B tells now."
AKSI: Tepuk tangan sekali untuk melanjutkan.`,
          bantuan     : 'Jika pasangan diam total: dekati, bisikkan "Point to wake up. Say: First, I wake up.", tanpa menghentikan kelas.',
          cue         : 'Listener wajib menunjuk kartu saat partner bercerita. Jangan koreksi grammar saat latihan berlangsung.',
          darurat     : 'Jika waktu ≤10 menit → lewati demo dan partner practice, langsung ke Layar 10.',
          diferensiasi: {
            perluSupport: 'Dekati mereka dan batasi cerita pada dua kartu dengan pola "First ... Then ...".',
            sudahBisa   : 'Minta mereka menceritakan lima sampai enam kartu dengan "then" berulang.',
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
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Routine."
UCAP: "Say it together!"
AKSI: Tunjuk kedelapan kartu berurutan.
→ Siswa: menyebut frasa setiap kartu sambil membuat gestur.
UCAP: "Now, full sentence."
AKSI: Tunjuk kartu study.
→ Siswa: "First, I study!"
AKSI: Tunjuk kartu play.
→ Siswa: "Then, I play!"`,
          bantuan     : null,
          cue         : 'Putaran kedua menggunakan frame "First ... Then ...", bukan nama frasa saja. Cukup dua kartu, tidak semua delapan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Quick question."
UCAP: "What do you do first in the morning?"
AKSI: Tunjuk kartu wake up.
UCAP: "Wake up? Raise your hand."
AKSI: Tunjuk kartu eat breakfast.
UCAP: "Eat breakfast first? Raise your hand."
→ Siswa: mengangkat tangan sesuai pilihan.
AKSI: Tunjuk diri sendiri.
UCAP: "Before sleep, I eat dinner."
UCAP: "What do you do before sleep?"
AKSI: Tunggu dua sampai tiga respons siswa, boleh satu kata.
→ Siswa: menjawab kegiatan sebelum tidur.
UCAP: "Interesting!"
UCAP: "Everyone has a routine."`,
          bantuan     : null,
          cue         : 'Survei maksimal dua pertanyaan. Modelkan jawaban sebelum bertanya kepada kelas.',
          darurat     : 'Jika waktu mepet → cukup satu pertanyaan dengan model guru.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pegang kartu eat breakfast dan kartu go to school.
AKSI: Tunjukkan kedua kartu ke semua siswa.
UCAP: "Last one."
UCAP: "Write two sentences."
AKSI: Tunjuk pola "First, I ___." dan "Then, I ___." di papan tulis.
UCAP: "Use these two cards."
AKSI: Tunggu 45 sampai 60 detik.
UCAP: "Show me."`,
          bantuan     : 'Terima dua kalimat penuh, frasa saja seperti "first eat breakfast", atau gambar dengan urutan satu sampai dua, tanpa koreksi terbuka.',
          cue         : 'Gunakan dua kartu berdampingan dengan struktur "First ... Then ...". Urutan berbeda dari rutinitas sehari-hari tetap diterima.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "One more time."
UCAP: "What do you do first?"
→ Siswa: "Wake up!" sambil membuat gestur.
AKSI: Tunjuk kedelapan kartu berurutan.
→ Siswa: menyebut frasa setiap kartu sambil membuat gestur.
UCAP: "Today, daily routines."
UCAP: "First, then."
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

export default TP_11;
