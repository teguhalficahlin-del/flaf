const TP_17 = {

  // METADATA
  id    : 'tp-17',
  nomor : 17,
  kelas : 2,
  nama  : 'My Hobbies',
  tema  : 'Diri Sendiri dan Perasaan',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebut dan mengenali 8 hobi dengan gerund yang benar (reading, drawing, singing, dancing, playing football, cooking, swimming, cycling).',
    'Peserta didik dapat mengungkapkan hobi dan alasan menggunakan pola "I like ... because it is fun / interesting" dengan struktur yang tepat.',
    'Peserta didik dapat menanyakan dan merespons "What do you like to do?" dalam percakapan berpasangan sederhana.',
  ],
  vocab     : ['reading', 'drawing', 'singing', 'dancing', 'playing football', 'cooking',
               'swimming', 'cycling', 'I like', 'because', 'fun', 'interesting'],
  persiapan : [
    'Kartu hobi bergambar x8: reading, drawing, singing, dancing, playing football, cooking, swimming, cycling.',
    'Kartu ditempel sesuai gelombang, tidak semua sekaligus.',
    'Papan tulis: tulis "I like ___ because it is ___." sebelum kelas masuk.',
    'Kertas exit ticket disiapkan di bawah meja setiap siswa sebelum kelas masuk.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',                                 tujuan: 'Guru mengunci perhatian siswa sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Hook Guru Model Hobi',                              tujuan: 'Guru memancing minat lewat peragaan hobinya sendiri.' },
    { layar:  2, judul: 'Inti · Listen First Gelombang 1',                             tujuan: 'Guru memperkenalkan empat hobi pertama.' },
    { layar:  3, judul: 'Inti · Produksi Bersama Gelombang 1 + Contrast Drill',        tujuan: 'Guru memimpin produksi dan membedakan reading dengan drawing.' },
    { layar:  4, judul: 'Inti · Reactivation + Listen First Gelombang 2',              tujuan: 'Guru meninjau gelombang 1 dan memperkenalkan empat hobi berikutnya.' },
    { layar:  5, judul: 'Inti · Produksi Gabungan Delapan Hobi + Contrast Drill',      tujuan: 'Guru memimpin produksi delapan hobi dan membedakan swimming dengan cycling.' },
    { layar:  6, judul: 'Inti · TPR "Show Me ..."',                                    tujuan: 'Guru memimpin retrieval lewat perintah bergestur tanpa kartu.' },
    { layar:  7, judul: 'Inti · Reset + Listen First Frame "I like ... because it is ..."', tujuan: 'Guru memodelkan pola "I like ... because it is ...".' },
    { layar:  8, judul: 'Inti · Produksi Bersama Frame Kalimat',                       tujuan: 'Guru memimpin produksi pola dengan model penuh lalu fill-in.' },
    { layar:  9, judul: 'Inti · Whole-Class QA Drill + Demo Partner',                  tujuan: 'Guru memimpin drill tanya jawab dan mendemokan tugas berpasangan.' },
    { layar: 10, judul: 'Inti · Pair Dialogue',                                        tujuan: 'Guru memandu dialog berpasangan dengan kartu hobi.' },
    { layar: 11, judul: 'Penutup · Reset + Thumbs Up Survey',                          tujuan: 'Guru memimpin survei jempol yang aman secara sosial.' },
    { layar: 12, judul: 'Penutup · Retrieval Choral Hobi + Frame',                     tujuan: 'Guru memimpin choral hobi dengan frame penuh.' },
    { layar: 13, judul: 'Penutup · Exit Ticket',                                       tujuan: 'Guru mengecek pemahaman lewat satu kalimat.' },
    { layar: 14, judul: 'Penutup · Closing',                                           tujuan: 'Guru menutup kelas.' },
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
AKSI: Peragakan gestur membaca buku.
UCAP: "I like reading!"
AKSI: Jeda 2 detik.
AKSI: Peragakan gestur mengaduk panci.
UCAP: "I like cooking!"
AKSI: Jeda 2 detik.
AKSI: Peragakan gestur menendang bola.
UCAP: "I like playing football!"
AKSI: Jeda 2 detik.
UCAP: "These are hobbies."
UCAP: "Things we love to do."
UCAP: "Today, hobbies in English."
UCAP: "What about you?"
AKSI: Tunggu respons siswa tanpa mengoreksi.
→ Siswa: menjawab bebas.`,
          bantuan     : 'Jika ada siswa yang diam: lanjut tanpa menunjuk siswa itu, tanpa komentar.',
          cue         : 'Guru yang bergestur, bukan siswa. Cukup tiga hobi, jangan perkenalkan delapan hobi di layar ini.',
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
AKSI: Tempel kartu reading di papan tulis.
AKSI: Tempel kartu drawing di papan tulis.
AKSI: Tempel kartu singing di papan tulis.
AKSI: Tempel kartu dancing di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu reading.
AKSI: Peragakan gestur membaca buku dengan mata ke bawah.
UCAP: "Reading."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu drawing.
AKSI: Peragakan gestur menggambar di udara.
UCAP: "Drawing."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu singing.
AKSI: Peragakan gestur menyanyi dengan tangan ke mulut.
UCAP: "Singing."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu dancing.
AKSI: Peragakan gestur menggerakkan badan ke kiri dan ke kanan.
UCAP: "Dancing."
UCAP: "One more time."
AKSI: Ulangi keempat kata sekali lagi.`,
          bantuan     : null,
          cue         : 'Bedakan reading dan drawing lewat gestur: reading tangan diam, drawing tangan bergerak. Kelas belum diminta produksi di layar ini.',
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
AKSI: Peragakan gestur membaca buku.
→ Siswa: "Reading!"
AKSI: Peragakan gestur menggambar di udara.
→ Siswa: "Drawing!"
AKSI: Peragakan gestur menyanyi dengan tangan ke mulut.
→ Siswa: "Singing!"
AKSI: Peragakan gestur menggerakkan badan ke kiri dan ke kanan.
→ Siswa: "Dancing!"
AKSI: Ulangi sekali lagi dengan dua kartu diacak.
UCAP: "Watch."
AKSI: Tunjuk kartu reading.
AKSI: Peragakan gestur membaca buku dengan tangan diam.
UCAP: "Reading. Hands still."
AKSI: Tunjuk kartu drawing.
AKSI: Peragakan gestur menggambar dengan tangan bergerak.
UCAP: "Drawing. Hands move."
UCAP: "Ready?"
UCAP: "Which one?"
UCAP: "Hands still, show me!"
→ Siswa: membuat gestur reading.
UCAP: "Hands move, show me!"
→ Siswa: membuat gestur drawing.
AKSI: Ulangi contrast drill dua putaran.`,
          bantuan     : 'Jika kelas tertukar reading dan drawing: berdiri diam, peragakan gestur membaca dengan tangan diam, peragakan gestur menggambar dengan tangan bergerak, lalu lanjut.',
          cue         : 'Contrast drill memasangkan reading dengan drawing. Bedakan lewat gestur tangan, bukan kata-katanya.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Peragakan gestur reading, drawing, singing, dan dancing berurutan.
UCAP: "Quick check."
→ Siswa: menyebut kata setiap gestur.
AKSI: Lanjut tanpa mengoreksi.
👂 LISTEN FIRST
AKSI: Tempel kartu playing football di papan tulis.
AKSI: Tempel kartu cooking di papan tulis.
AKSI: Tempel kartu swimming di papan tulis.
AKSI: Tempel kartu cycling di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu playing football.
AKSI: Peragakan gestur menendang bola.
UCAP: "Playing football."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu cooking.
AKSI: Peragakan gestur mengaduk panci.
UCAP: "Cooking."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu swimming.
AKSI: Peragakan gestur berenang dengan kedua lengan ke samping.
UCAP: "Swimming."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu cycling.
AKSI: Peragakan gestur mengayuh sepeda dengan kedua tangan memegang setir.
UCAP: "Cycling."
UCAP: "One more time."
AKSI: Ulangi keempat kata sekali lagi.`,
          bantuan     : 'Jika kelas melambat di "playing football": ulangi kata itu saja, lalu lanjut.',
          cue         : 'Lakukan reactivation gelombang pertama tanpa mengoreksi. Bedakan swimming dan cycling lewat gestur: swimming kedua lengan ke samping, cycling setir dan kaki mengayuh.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Peragakan gestur menendang bola dengan tempo lambat.
→ Siswa: "Playing football!"
AKSI: Peragakan gestur mengaduk panci.
→ Siswa: "Cooking!"
AKSI: Peragakan gestur berenang dengan kedua lengan ke samping.
→ Siswa: "Swimming!"
AKSI: Peragakan gestur mengayuh sepeda dengan kedua tangan memegang setir.
→ Siswa: "Cycling!"
UCAP: "Now, all together."
AKSI: Tunjuk kedelapan kartu berurutan dengan tempo sedang.
→ Siswa: menyebut kata setiap kartu.
UCAP: "Ready?"
UCAP: "Fast, but clear!"
AKSI: Pilih empat kartu secara acak.
AKSI: Jangan letakkan swimming dan cycling berurutan.
AKSI: Tunjuk satu kartu, lalu tahan 1 detik sebelum kartu berikutnya.
→ Siswa: menyebut kata setiap kartu.
UCAP: "Watch."
AKSI: Tunjuk kartu swimming.
AKSI: Peragakan gestur berenang dengan kedua lengan ke samping.
UCAP: "Swimming. Arms out."
AKSI: Tunjuk kartu cycling.
AKSI: Peragakan gestur mengayuh sepeda dengan kedua tangan memegang setir.
UCAP: "Cycling. Hands and feet."
UCAP: "Which one?"
UCAP: "Arms out, show me!"
→ Siswa: membuat gestur swimming.
UCAP: "Hands and feet, show me!"
→ Siswa: membuat gestur cycling.
AKSI: Ulangi contrast drill dua putaran.`,
          bantuan     : 'Jika kelas mulai telat pada fase sedang atau fase cepat: kurangi tempo, ulangi dua kartu, lalu lanjut.',
          cue         : 'Contrast drill memasangkan swimming dengan cycling. Pada fase cepat cukup tunjuk kartu tanpa membuat gestur penuh.',
          darurat     : 'Jika energi kelas sudah terlalu tinggi setelah fase sedang → langsung ke fase cepat tanpa mengulang.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Lepaskan semua kartu dari papan tulis.
AKSI: Simpan kartu di meja guru.
UCAP: "No cards."
UCAP: "Just me and you."
UCAP: "Show me reading!"
→ Siswa: membuat gestur reading.
UCAP: "Show me drawing!"
→ Siswa: membuat gestur drawing.
UCAP: "Show me singing!"
→ Siswa: membuat gestur singing.
UCAP: "Show me dancing!"
→ Siswa: membuat gestur dancing.
UCAP: "Show me playing football!"
→ Siswa: membuat gestur menendang bola.
UCAP: "Show me cooking!"
→ Siswa: membuat gestur mengaduk panci.
UCAP: "Show me swimming!"
→ Siswa: membuat gestur berenang.
UCAP: "Show me cycling!"
→ Siswa: membuat gestur mengayuh sepeda.
UCAP: "My turn to watch."
UCAP: "You show me."
AKSI: Pilih lima cue secara acak.
AKSI: Jangan letakkan reading dan drawing berurutan.
AKSI: Jangan letakkan swimming dan cycling berurutan.
AKSI: Jangan ikut membuat gestur saat putaran acak.
→ Siswa: membuat gestur sesuai cue guru.
AKSI: Berhenti setelah lima cue.
UCAP: "Stop."
UCAP: "Good."
AKSI: Tepuk tangan sekali.
UCAP: "Sit down."
UCAP: "Hands down."
AKSI: Jeda 3 detik.`,
          bantuan     : 'Jika kelas tertukar swimming dan cycling: berdiri diam, peragakan gestur berenang, peragakan gestur mengayuh sepeda, lalu lanjut.',
          cue         : 'Retrieval berasal dari memori tubuh, bukan dari kartu. Putaran acak maksimal lima cue, lalu berhenti.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Good."
UCAP: "Now, hobbies become sentences."
UCAP: "Watch."
👂 LISTEN FIRST
AKSI: Ambil kembali kartu reading, dancing, dan cooking dari meja guru.
AKSI: Tempel kembali kartu reading di papan tulis.
AKSI: Tempel kembali kartu dancing di papan tulis.
AKSI: Tempel kembali kartu cooking di papan tulis.
AKSI: Tunjuk pola "I like ___ because it is ___." di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Peragakan gestur membaca buku.
AKSI: Tunjuk kartu reading.
UCAP: "I like reading because it is interesting."
AKSI: Jeda 2 detik.
AKSI: Peragakan gestur menggerakkan badan ke kiri dan ke kanan.
AKSI: Tunjuk kartu dancing.
UCAP: "I like dancing because it is fun!"
AKSI: Jeda 2 detik.
AKSI: Peragakan gestur mengaduk panci.
AKSI: Tunjuk kartu cooking.
UCAP: "I like cooking because it is interesting."
UCAP: "One more time."
AKSI: Ulangi ketiga kalimat sekali lagi.`,
          bantuan     : null,
          cue         : 'Buat gestur dan tunjuk kartu sebelum mengucapkan setiap kalimat. Gunakan "fun" dan "interesting" bergantian di tiga contoh.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Whole sentence."
UCAP: "Say it with me!"
AKSI: Tunjuk pola "I like ___ because it is ___." di papan tulis.
AKSI: Peragakan gestur membaca buku.
UCAP: "I like reading because it is interesting."
→ Siswa: "I like reading because it is interesting."
AKSI: Peragakan gestur menyanyi dengan tangan ke mulut.
AKSI: Ucapkan "I like singing because it is..." agar siswa melengkapi kalimat.
→ Siswa: "...fun!"
AKSI: Ajak semua siswa mengucapkan kalimat penuh.
→ Siswa: "I like singing because it is fun."
AKSI: Peragakan gestur menendang bola.
AKSI: Ucapkan "I like playing football because it is..." agar siswa melengkapi kalimat.
→ Siswa: "...fun!"
AKSI: Ajak semua siswa mengucapkan kalimat penuh.
→ Siswa: "I like playing football because it is fun."
AKSI: Peragakan gestur berenang dengan kedua lengan ke samping.
AKSI: Ucapkan "I like swimming because it is..." agar siswa melengkapi kalimat.
→ Siswa: "...interesting!"
AKSI: Ajak semua siswa mengucapkan kalimat penuh.
→ Siswa: "I like swimming because it is interesting."`,
          bantuan     : 'Jika kelas menghilangkan "I like": tunjuk papan tulis, ucapkan "Whole sentence.", tunggu 2 detik, lalu lanjut choral.',
          cue         : 'Pertahankan urutan model penuh, ulang penuh, lalu fill-in. Variasikan alasan antara "fun" dan "interesting".',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, you ask."
UCAP: "Ready?"
AKSI: Peragakan gestur membaca buku.
AKSI: Berdiri diam.
UCAP: "Ask me."
→ Siswa: "What do you like to do?"
UCAP: "I like reading because it is interesting!"
AKSI: Peragakan gestur menggerakkan badan ke kiri dan ke kanan.
AKSI: Berdiri diam.
→ Siswa: "What do you like to do?"
UCAP: "I like dancing because it is fun!"
UCAP: "Good."
UCAP: "That's the question."
UCAP: "That's the answer."
UCAP: "Watch them."
AKSI: Pilih satu pasang siswa sukarela untuk maju ke depan.
AKSI: Bisikkan hobi "You like cooking." kepada siswa A.
AKSI: Ambil kartu cooking dari papan tulis.
AKSI: Berikan kartu cooking kepada siswa A.
→ Siswa B: "What do you like to do?"
→ Siswa A: "I like cooking because it is fun!"
UCAP: "Good."
UCAP: "Full sentence."
AKSI: Ambil kembali kartu cooking dari siswa A.
AKSI: Tempel kembali kartu cooking di papan tulis.`,
          bantuan     : null,
          cue         : 'Lakukan QA drill dua putaran sebelum demo. Bisikkan hobi kepada siswa A, jangan ucapkan ke semua siswa.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Lepaskan kartu reading, dancing, dan cooking dari papan tulis.
AKSI: Ambil kartu drawing, singing, playing football, swimming, dan cycling dari meja guru.
AKSI: Bagikan satu set kartu hobi untuk setiap pasang siswa.
AKSI: Tunggu semua pasang memegang kartu.
UCAP: "Partner A picks a card."
UCAP: "Hold it face down."
UCAP: "Partner B asks: What do you like to do?"
AKSI: Tunjuk pola "I like ___ because it is ___." di papan tulis.
UCAP: "Partner A answers."
UCAP: "Partner B, raise the card when you hear the hobby."
UCAP: "When I clap, stop."
AKSI: Tepuk tangan sekali untuk melatih tanda berhenti.
UCAP: "Full sentence."
UCAP: "Go."
AKSI: Setelah dua menit, tepuk tangan sekali.
UCAP: "Switch."
UCAP: "Partner B picks a card."
UCAP: "Partner A asks and raises the card."
AKSI: Tepuk tangan sekali untuk melanjutkan.
AKSI: Hentikan pair dialogue setelah empat menit.
AKSI: Saat berkeliling, bergerak membentuk huruf U.
AKSI: Periksa apakah Partner B mengangkat kartu setelah mendengar nama hobi.`,
          bantuan     : [
            'Jika pasangan diam total: dekati, tunjuk kartu di tangan Partner A, bisikkan "I like...", tunggu Partner A lanjut, tanpa menghentikan kelas.',
            'Jika Partner B tidak mengangkat kartu: dekati, peragakan gestur mengangkat kartu kepada Partner B, tanpa bicara, tanpa menghentikan kelas.',
            'Jika pasangan selesai terlalu cepat: ucapkan "Pick another card. Switch again."',
          ],
          cue         : 'Selesaikan distribusi kartu sebelum instruksi practice. Jangan koreksi grammar saat berkeliling.',
          darurat     : 'Jika volume kelas naik terlalu tinggi → tepuk tangan sekali, semua siswa duduk diam 3 detik, lalu lanjutkan pair dialogue.',
          diferensiasi: {
            perluSupport: 'Dekati mereka dan izinkan menyebut nama hobi saja tanpa "because".',
            sudahBisa   : 'Minta mereka mengganti kartu setiap giliran dan menciptakan alasan sendiri selain "fun" dan "interesting".',
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
AKSI: Ambil kembali kartu drawing, singing, playing football, swimming, dan cycling dari meja guru.
AKSI: Tempel kembali kartu drawing di papan tulis.
AKSI: Tempel kembali kartu singing di papan tulis.
AKSI: Tempel kembali kartu playing football di papan tulis.
AKSI: Tempel kembali kartu swimming di papan tulis.
AKSI: Tempel kembali kartu cycling di papan tulis.
UCAP: "Quick survey."
UCAP: "Thumbs up if you like it."
UCAP: "Thumbs close to your chest."
AKSI: Tunjuk kartu reading.
UCAP: "Reading?"
→ Siswa: mengangkat jempol dekat dada jika menyukainya.
AKSI: Tunjuk kartu singing.
UCAP: "Singing?"
→ Siswa: mengangkat jempol dekat dada jika menyukainya.
AKSI: Tunjuk kartu dancing.
UCAP: "Dancing?"
→ Siswa: mengangkat jempol dekat dada jika menyukainya.
AKSI: Tunjuk kartu playing football.
UCAP: "Playing football?"
→ Siswa: mengangkat jempol dekat dada jika menyukainya.
AKSI: Tunjuk kartu swimming.
UCAP: "Swimming?"
→ Siswa: mengangkat jempol dekat dada jika menyukainya.
UCAP: "People like different hobbies."`,
          bantuan     : null,
          cue         : 'Terima jempol dan diam tanpa komentar. Jangan menghitung jumlah dan jangan membandingkan pilihan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Hobbies."
UCAP: "Say it together!"
AKSI: Tunjuk kedelapan kartu satu per satu, tahan 1 detik sebelum kartu berikutnya.
→ Siswa: menyebut kata setiap kartu.
UCAP: "Now, full sentence."
AKSI: Peragakan gestur membaca buku.
→ Siswa: "I like reading because it is interesting!"
AKSI: Peragakan gestur menggerakkan badan ke kiri dan ke kanan.
→ Siswa: "I like dancing because it is fun!"`,
          bantuan     : null,
          cue         : 'Putaran kedua memakai frame "I like ... because it is ...", bukan nama hobi saja. Cukup dua hobi, tidak semua delapan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Take your pencil."
AKSI: Tunggu sampai semua siswa memegang pensil.
AKSI: Peragakan gestur mengayuh sepeda dengan kedua tangan memegang setir.
AKSI: Berdiri diam di depan kelas.
UCAP: "Last one."
UCAP: "Write one sentence."
AKSI: Tunjuk pola "I like ___ because it is ___." di papan tulis.
UCAP: "Look at my gesture."
AKSI: Tahan gestur cycling.
AKSI: Tunggu 45 sampai 60 detik.
UCAP: "Show me."`,
          bantuan     : [
            'Terima kalimat penuh, frasa parsial seperti "cycling, fun", atau gambar hobi dengan label, tanpa koreksi terbuka.',
            'Jika siswa belum selesai saat waktu habis: minta siswa memperagakan gestur hobi yang disukai dan mengucapkan kalimatnya kepada guru.',
          ],
          cue         : 'Gunakan gestur cycling, bukan reading atau singing. Satu hobi, satu kalimat, satu alasan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "One more time."
UCAP: "Show me reading!"
→ Siswa: membuat gestur reading sambil mengucapkan "Reading!".
UCAP: "Show me dancing!"
→ Siswa: membuat gestur dancing sambil mengucapkan "Dancing!".
AKSI: Tunjuk kedelapan kartu berurutan dengan cepat.
→ Siswa: menyebut kata setiap kartu.
UCAP: "Today, hobbies."
UCAP: "Reading, drawing, singing, dancing, playing football, cooking, swimming, cycling."
UCAP: "I like reading because it is interesting."
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

export default TP_17;
