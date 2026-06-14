const TP_15 = {

  // METADATA
  id    : 'tp-15',
  nomor : 15,
  kelas : 2,
  nama  : 'Feelings and Emotions',
  tema  : 'Diri Sendiri dan Perasaan',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebutkan 7 kata emosi dalam Bahasa Inggris.',
    'Peserta didik dapat menggunakan frame "I feel ___ because ___."',
    'Peserta didik dapat merespons cue emosi dengan ekspresi wajah dan gestur.',
  ],
  vocab     : ['happy', 'sad', 'angry', 'scared', 'tired', 'excited', 'bored'],
  persiapan : [
    'Kartu emosi bergambar x7: happy, sad, angry, scared, tired, excited, bored.',
    'Kartu ditempel sesuai gelombang, tidak semua sekaligus.',
    'Papan tulis: tulis "I feel ___ because ___." sebelum kelas masuk.',
    'Kertas exit ticket disiapkan di bawah meja setiap siswa sebelum kelas masuk.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [
    { file: 'tp15-happy.png',   label: 'Happy' },
    { file: 'tp15-sad.png',     label: 'Sad' },
    { file: 'tp15-angry.png',   label: 'Angry' },
    { file: 'tp15-scared.png',  label: 'Scared' },
    { file: 'tp15-tired.png',   label: 'Tired' },
    { file: 'tp15-excited.png', label: 'Excited' },
    { file: 'tp15-bored.png',   label: 'Bored' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',                              tujuan: 'Guru mengunci perhatian siswa sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Hook Ekspresi Guru',                             tujuan: 'Guru memancing minat lewat ekspresi wajahnya sendiri.' },
    { layar:  2, judul: 'Inti · Listen First Gelombang 1',                          tujuan: 'Guru memperkenalkan empat emosi pertama.' },
    { layar:  3, judul: 'Inti · Produksi Bersama Gelombang 1 + Contrast Drill',     tujuan: 'Guru memimpin produksi dan membedakan angry dengan scared.' },
    { layar:  4, judul: 'Inti · Reactivation + Listen First Gelombang 2',           tujuan: 'Guru meninjau gelombang 1 dan memperkenalkan tiga emosi berikutnya.' },
    { layar:  5, judul: 'Inti · Produksi Gabungan Tujuh Emosi',                     tujuan: 'Guru memimpin produksi tujuh emosi dalam tiga fase.' },
    { layar:  6, judul: 'Inti · TPR "Show Me ..."',                                 tujuan: 'Guru memimpin retrieval lewat perintah berekspresi tanpa kartu.' },
    { layar:  7, judul: 'Inti · Reset + Listen First Frame "I feel ... because ..."', tujuan: 'Guru memodelkan pola "I feel ... because ...".' },
    { layar:  8, judul: 'Inti · Produksi Bersama Kalimat Emosi',                    tujuan: 'Guru memimpin produksi pola dengan model penuh lalu fill-in.' },
    { layar:  9, judul: 'Inti · Whole-Class QA Drill + Demo Partner',               tujuan: 'Guru memimpin drill tanya jawab dan mendemokan latihan berpasangan.' },
    { layar: 10, judul: 'Inti · Partner Practice',                                  tujuan: 'Guru memandu latihan berpasangan dengan skenario emosi.' },
    { layar: 11, judul: 'Penutup · Reset + Choral Emosi + Kalimat',                 tujuan: 'Guru memimpin choral emosi dengan frame penuh.' },
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
AKSI: Buat ekspresi happy dengan senyum lebar dan kedua tangan terangkat.
UCAP: "Look at my face."
UCAP: "How do I feel?"
AKSI: Tunggu dua sampai tiga respons siswa, boleh dalam Bahasa Indonesia.
→ Siswa: menjawab bebas.
AKSI: Buat ekspresi sad dengan muka murung dan bahu turun.
UCAP: "And now?"
AKSI: Tunggu dua sampai tiga respons siswa.
→ Siswa: menjawab bebas.
AKSI: Buat ekspresi scared dengan mata membesar dan kedua tangan di pipi.
UCAP: "Now?"
AKSI: Tunggu respons siswa tanpa mengoreksi.
→ Siswa: menjawab bebas.
UCAP: "These are feelings."
UCAP: "Everyone has feelings."
UCAP: "Today we learn feelings in English."`,
          bantuan     : 'Jika ada siswa yang diam: lanjut tanpa menunjuk siswa itu, tanpa komentar.',
          cue         : 'Guru yang berekspresi, bukan siswa. Cukup tiga ekspresi, jangan perkenalkan tujuh emosi di layar ini.',
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
AKSI: Tempel kartu happy di papan tulis.
AKSI: Tempel kartu sad di papan tulis.
AKSI: Tempel kartu angry di papan tulis.
AKSI: Tempel kartu scared di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu happy.
AKSI: Buat ekspresi happy dengan senyum lebar.
UCAP: "Happy."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu sad.
AKSI: Buat ekspresi sad dengan muka murung dan bahu turun.
UCAP: "Sad."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu angry.
AKSI: Buat ekspresi angry dengan alis turun dan kedua tangan mengepal.
UCAP: "Angry."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu scared.
AKSI: Buat ekspresi scared dengan mata membesar dan kedua tangan di pipi.
UCAP: "Scared."
UCAP: "One more time."
AKSI: Ulangi keempat kata sekali lagi.`,
          bantuan     : null,
          cue         : 'Bedakan angry dan scared lewat gestur tangan: angry mengepal, scared di pipi. Kelas belum diminta produksi di layar ini.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Now, together."
UCAP: "I show, you say."
UCAP: "Say it together!"
AKSI: Buat ekspresi happy.
→ Siswa: "Happy!"
AKSI: Buat ekspresi sad.
→ Siswa: "Sad!"
AKSI: Buat ekspresi angry.
→ Siswa: "Angry!"
AKSI: Buat ekspresi scared.
→ Siswa: "Scared!"
AKSI: Ulangi sekali lagi dengan dua kartu diacak.
UCAP: "Watch."
AKSI: Tunjuk kartu angry.
AKSI: Kepalkan kedua tangan.
UCAP: "Angry. Hands tight."
AKSI: Tunjuk kartu scared.
AKSI: Letakkan kedua tangan di pipi.
UCAP: "Scared. Hands here."
UCAP: "Ready?"
UCAP: "Which one?"
UCAP: "Hands tight, show me!"
→ Siswa: menunjuk kartu angry.
UCAP: "Hands here, show me!"
→ Siswa: menunjuk kartu scared.
AKSI: Ulangi contrast drill dua putaran.`,
          bantuan     : 'Jika kelas tertukar angry dan scared: berdiri diam, kepalkan kedua tangan, ucapkan "Angry.", letakkan kedua tangan di pipi, ucapkan "Scared.", lalu lanjut.',
          cue         : 'Contrast drill memasangkan angry dengan scared. Bedakan lewat gestur tangan, bukan ekspresi wajah saja.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Buat ekspresi happy, sad, angry, dan scared berurutan.
UCAP: "Quick check."
→ Siswa: menyebut kata setiap ekspresi.
AKSI: Lanjut tanpa mengoreksi.
👂 LISTEN FIRST
AKSI: Tempel kartu tired di papan tulis.
AKSI: Tempel kartu excited di papan tulis.
AKSI: Tempel kartu bored di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu tired.
AKSI: Buat ekspresi tired dengan mata sayu dan kedua tangan di dada.
UCAP: "Tired."
AKSI: Tunjuk kartu excited.
AKSI: Buat ekspresi excited dengan mata berbinar dan kedua tangan terangkat.
UCAP: "Excited."
AKSI: Tunjuk kartu bored.
AKSI: Buat ekspresi bored dengan muka datar dan pipi bertumpu di tangan.
UCAP: "Bored."
UCAP: "One more time."
AKSI: Ulangi ketiga kata sekali lagi.`,
          bantuan     : null,
          cue         : 'Lakukan reactivation gelombang pertama tanpa mengoreksi. Bedakan tired dan bored lewat gestur: tired tangan ke dada, bored pipi bertumpu di tangan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Buat ekspresi tired, lalu excited, lalu bored, dengan tempo lambat.
→ Siswa: menyebut kata setiap ekspresi.
UCAP: "Now, all together."
AKSI: Tunjuk ketujuh kartu berurutan dengan tempo sedang.
→ Siswa: menyebut kata setiap kartu.
UCAP: "Ready?"
UCAP: "Fast, but clear!"
AKSI: Pilih empat kartu secara acak.
AKSI: Tunjuk satu kartu, lalu tahan 1 detik sebelum kartu berikutnya.
→ Siswa: menyebut kata setiap kartu.`,
          bantuan     : 'Jika kelas mulai telat: kurangi tempo, ulangi dua kartu, lalu lanjut.',
          cue         : 'Jangan letakkan tired dan bored berurutan, dan jangan letakkan excited dan happy berurutan pada fase cepat. Pada fase cepat cukup tunjuk kartu tanpa membuat ekspresi penuh.',
          darurat     : 'Jika energi kelas sudah terlalu tinggi setelah fase sedang → langsung ke fase cepat tanpa mengulang.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Lepaskan semua kartu dari papan tulis.
AKSI: Simpan kartu di meja guru.
UCAP: "No cards."
UCAP: "Just me and you."
UCAP: "Show me happy!"
→ Siswa: membuat ekspresi happy.
UCAP: "Show me sad!"
→ Siswa: membuat ekspresi sad.
UCAP: "Show me angry!"
→ Siswa: membuat ekspresi angry.
UCAP: "Show me scared!"
→ Siswa: membuat ekspresi scared.
UCAP: "Show me tired!"
→ Siswa: membuat ekspresi tired.
UCAP: "Show me excited!"
→ Siswa: membuat ekspresi excited.
UCAP: "Show me bored!"
→ Siswa: membuat ekspresi bored.
UCAP: "My turn to watch."
UCAP: "You show me."
AKSI: Pilih lima cue secara acak.
AKSI: Jangan letakkan tired dan bored berurutan.
AKSI: Jangan letakkan angry dan scared berurutan.
AKSI: Jangan ikut membuat ekspresi saat putaran acak.
→ Siswa: membuat ekspresi sesuai cue guru.
AKSI: Berhenti setelah lima cue.
UCAP: "Stop."
UCAP: "Good."`,
          bantuan     : 'Jika kelas tertukar tired dan bored: berdiri diam, letakkan kedua tangan di dada untuk tired, tumpukan pipi di tangan untuk bored, lalu lanjut.',
          cue         : 'Retrieval berasal dari memori tubuh, bukan dari kartu. Putaran acak maksimal lima cue, lalu berhenti.',
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
UCAP: "Now feelings become sentences."
UCAP: "Watch."
👂 LISTEN FIRST
AKSI: Tunjuk pola "I feel ___ because ___." di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Buat ekspresi happy.
AKSI: Tunjuk kartu happy.
UCAP: "I feel happy because I see my friends."
AKSI: Buat ekspresi sad.
UCAP: "I feel sad because it is raining."
AKSI: Buat ekspresi scared.
UCAP: "I feel scared because I see a big dog."
UCAP: "One more time."
AKSI: Ulangi ketiga kalimat sekali lagi.`,
          bantuan     : null,
          cue         : 'Buat ekspresi dulu sebelum mengucapkan setiap kalimat. Pakai tangan kiri untuk feeling dan tangan kanan untuk because, konsisten sampai Layar 10.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Whole sentence."
UCAP: "Say it with me!"
AKSI: Tunjuk pola "I feel ___ because ___." di papan tulis.
AKSI: Buat ekspresi happy.
UCAP: "I feel happy because I see my friends."
→ Siswa: "I feel happy because I see my friends."
AKSI: Buat ekspresi angry.
AKSI: Ucapkan "I feel angry because..." agar siswa melengkapi kalimat.
→ Siswa: "...someone took my pencil!"
AKSI: Ajak semua siswa mengucapkan kalimat penuh.
→ Siswa: "I feel angry because someone took my pencil."
AKSI: Buat ekspresi excited.
AKSI: Ucapkan "I feel excited because..." agar siswa melengkapi kalimat.
→ Siswa: "...we play a game!"
AKSI: Ajak semua siswa mengucapkan kalimat penuh.
→ Siswa: "I feel excited because we play a game."
AKSI: Buat ekspresi bored.
AKSI: Ucapkan "I feel bored because..." agar siswa melengkapi kalimat.
→ Siswa: "...the lesson is long."
AKSI: Ajak semua siswa mengucapkan kalimat penuh.
→ Siswa: "I feel bored because the lesson is long."`,
          bantuan     : 'Jika kelas menghilangkan "I feel": tunjuk papan tulis, ucapkan "Whole sentence.", tunggu 2 detik, lalu lanjut choral.',
          cue         : 'Pertahankan urutan model penuh, ulang penuh, lalu fill-in. Pakai tangan kiri untuk feeling dan tangan kanan untuk because.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, you ask."
UCAP: "Ready?"
AKSI: Buat ekspresi excited.
AKSI: Berdiri diam.
UCAP: "Ask me."
→ Siswa: "How do you feel?"
UCAP: "I feel excited because we have English today!"
AKSI: Buat ekspresi tired.
AKSI: Berdiri diam.
→ Siswa: "How do you feel?"
UCAP: "I feel tired because I walked a long way."
UCAP: "Good."
UCAP: "That's the question."
UCAP: "That's the answer."
UCAP: "Watch them."
AKSI: Pilih satu pasang siswa sukarela untuk maju ke depan.
AKSI: Bisikkan skenario "You found a toy." kepada siswa A.
→ Siswa B: "How do you feel?"
→ Siswa A: "I feel happy because I found a toy!"
UCAP: "Good."
UCAP: "Full sentence."
UCAP: "Partner voice, not shouting."
UCAP: "Partner A gives a scenario."
UCAP: "Partner B asks: How do you feel?"
UCAP: "Partner A answers."
AKSI: Tunjuk pola "I feel ___ because ___." di papan tulis.
UCAP: "When I clap, stop."
AKSI: Tepuk tangan sekali untuk melatih tanda berhenti.
UCAP: "Go."`,
          bantuan     : 'Jika kelas menghilangkan frame dan hanya menyebut emosi: tunjuk papan tulis, ucapkan "I feel...", tunggu 2 detik, tanpa menghentikan kelas.',
          cue         : 'Lakukan QA drill dua putaran sebelum demo partner. Bisikkan skenario kepada siswa A, jangan ucapkan ke semua siswa.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Biarkan siswa memilih ekspresi sendiri tanpa kartu.
UCAP: "Partner A gives a scenario."
UCAP: "Partner B asks."
UCAP: "Partner A answers."
AKSI: Tunjuk pola "I feel ___ because ___." di papan tulis.
UCAP: "Full sentence."
UCAP: "Go."
AKSI: Setelah 90 detik, tepuk tangan sekali.
UCAP: "Switch."
UCAP: "Partner B gives a scenario."
UCAP: "Partner A asks."
UCAP: "Partner B answers."
AKSI: Tepuk tangan sekali untuk melanjutkan.
AKSI: Saat berkeliling, bergerak membentuk huruf U.
AKSI: Periksa apakah Partner B masih bertanya "How do you feel?".
AKSI: Hentikan partner practice setelah tiga menit.`,
          bantuan     : [
            'Jika pasangan diam total: dekati, bisikkan skenario kepada Partner A, lalu beri gestur bertanya kepada Partner B, tanpa menghentikan kelas.',
            'Jika Partner B langsung menebak tanpa bertanya: dekati, beri gestur bertanya kepada Partner B, tanpa menghentikan kelas.',
            'Jika skenario terlalu aneh dan memecah fokus kelas: bisikkan skenario konkret baru kepada pasangan itu, lalu lanjut.',
          ],
          cue         : 'Pertahankan peran tetap bersih: Partner A pemberi skenario dan penjawab, Partner B penanya. Jangan koreksi grammar saat berkeliling.',
          darurat     : 'Jika volume kelas naik terlalu tinggi → tepuk tangan sekali, semua siswa duduk diam 3 detik, lalu lanjutkan partner practice.',
          diferensiasi: {
            perluSupport: 'Dekati mereka dan izinkan menyebut nama emosi saja tanpa "because".',
            sudahBisa   : 'Minta mereka menciptakan skenario sendiri dan mengganti emosi setiap putaran.',
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
AKSI: Ambil kembali ketujuh kartu dari meja guru.
AKSI: Tempel kembali ketujuh kartu di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Feelings."
UCAP: "Say it together!"
AKSI: Tunjuk ketujuh kartu berurutan dengan tempo lambat.
→ Siswa: menyebut kata setiap kartu.
UCAP: "Now, full sentence."
AKSI: Buat ekspresi tired.
→ Siswa: "I feel tired because I ran a lot!"
AKSI: Buat ekspresi excited.
→ Siswa: "I feel excited because we play a game!"`,
          bantuan     : null,
          cue         : 'Putaran kedua memakai frame "I feel ... because ...", bukan nama emosi saja. Cukup dua emosi, tidak semua tujuh.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Take your pencil."
AKSI: Tunggu sampai semua siswa memegang pensil.
AKSI: Buat ekspresi scared.
AKSI: Berdiri diam di depan kelas.
UCAP: "Last one."
UCAP: "Write one sentence."
AKSI: Tunjuk pola "I feel ___ because ___." di papan tulis.
UCAP: "Look at my face."
AKSI: Tahan ekspresi scared.
AKSI: Tunggu 45 sampai 60 detik.
UCAP: "Show me."`,
          bantuan     : [
            'Terima kalimat penuh, frasa parsial seperti "scared, big dog", atau gambar ekspresi dengan label, tanpa koreksi terbuka.',
            'Jika siswa belum selesai saat waktu habis: minta siswa melingkari kartu emosi yang sesuai dan mengucapkan alasannya kepada guru.',
          ],
          cue         : 'Tahan ekspresi scared yang sama selama siswa menulis. Gunakan ekspresi scared, bukan happy.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "One more time."
UCAP: "Show me happy!"
→ Siswa: membuat ekspresi happy sambil mengucapkan "Happy!".
UCAP: "Show me excited!"
→ Siswa: membuat ekspresi excited sambil mengucapkan "Excited!".
AKSI: Tunjuk ketujuh kartu berurutan dengan cepat.
→ Siswa: menyebut kata setiap kartu.
UCAP: "Today, feelings."
UCAP: "Happy, sad, angry, scared, tired, excited, bored."
UCAP: "I feel happy because I see my friends."
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

export default TP_15;
