const TP_13 = {

  // METADATA
  id    : 'tp-13',
  nomor : 13,
  kelas : 2,
  nama  : 'Weather and Seasons',
  tema  : 'Alam dan Lingkungan',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebut kondisi cuaca (sunny, cloudy, rainy, windy, hot, cold) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan cuaca hari ini menggunakan "Today is ..." dan "The weather is ...".',
    'Peserta didik dapat menghubungkan cuaca dengan aktivitas: "When it is rainy, I use an umbrella."',
  ],
  vocab     : ['sunny', 'cloudy', 'rainy', 'windy', 'hot', 'cold', 'weather', 'today', 'umbrella', 'when it is'],
  persiapan : [
    'Kartu printable cuaca x6: sunny, cloudy, rainy, windy, hot, cold.',
    'Kartu sudah diberi nomor urut di belakang, ditempel sesuai gelombang.',
    'Papan tulis: tulis "Today is ___. The weather is ___." dan "When it is ___, I ___." sebelum kelas masuk.',
    'Tidak ada material siswa di meja sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [
    { file: 'tp13-cloudy.png', label: 'Cloudy' },
    { file: 'tp13-cold.png',   label: 'Cold' },
    { file: 'tp13-hot.png',    label: 'Hot' },
    { file: 'tp13-rainy.png',  label: 'Rainy' },
    { file: 'tp13-sunny.png',  label: 'Sunny' },
    { file: 'tp13-windy.png',  label: 'Windy' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',                                       tujuan: 'Guru mengunci perhatian siswa sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Hook Cuaca Hari Ini',                                     tujuan: 'Guru memancing minat lewat cuaca nyata di luar kelas.' },
    { layar:  2, judul: 'Inti · Listen First Gelombang 1',                                   tujuan: 'Guru memperkenalkan empat kata cuaca pertama.' },
    { layar:  3, judul: 'Inti · Produksi Bersama Gelombang 1 + Contrast Drill',              tujuan: 'Guru memimpin produksi dan membedakan sunny dengan rainy.' },
    { layar:  4, judul: 'Inti · Reactivation + Listen First Gelombang 2',                    tujuan: 'Guru meninjau gelombang 1 dan memperkenalkan hot dan cold.' },
    { layar:  5, judul: 'Inti · Produksi Gabungan Enam Kartu',                               tujuan: 'Guru memimpin produksi enam kata cuaca dalam tiga fase.' },
    { layar:  6, judul: 'Inti · TPR "Show Me ..."',                                          tujuan: 'Guru memimpin retrieval lewat perintah bergestur tanpa kartu.' },
    { layar:  7, judul: 'Inti · Reset + Listen First "Today is ... / The weather is ..."',   tujuan: 'Guru memodelkan pola "Today is ... The weather is ...".' },
    { layar:  8, judul: 'Inti · Produksi Bersama Anchor Struktur',                           tujuan: 'Guru memimpin produksi pola dan transfer ke cuaca nyata.' },
    { layar:  9, judul: 'Inti · Listen First "When it is ..., I ..." + Demo Partner',        tujuan: 'Guru memodelkan pola sebab-tindakan dan mendemokan latihan berpasangan.' },
    { layar: 10, judul: 'Inti · Partner Practice',                                           tujuan: 'Guru memandu latihan berpasangan dengan kartu.' },
    { layar: 11, judul: 'Penutup · Reset + Choral Weather',                                  tujuan: 'Guru memimpin choral cuaca dengan frame penuh.' },
    { layar: 12, judul: 'Penutup · Exit Ticket',                                            tujuan: 'Guru mengecek pemahaman lewat dua kalimat.' },
    { layar: 13, judul: 'Penutup · Closing',                                                tujuan: 'Guru menutup kelas.' },
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
UCAP: "Before we start, look at me."
AKSI: Berjalan ke jendela.
AKSI: Lihat ke luar selama 2 detik.
AKSI: Kembali ke tengah kelas.
UCAP: "Outside, what do you see?"
AKSI: Tunggu dua sampai tiga respons siswa, boleh dalam Bahasa Indonesia.
→ Siswa: menjawab bebas.
AKSI: Jika cuaca cerah: buka kedua tangan ke atas.
UCAP: "Sunny!"
AKSI: Jika cuaca mendung: lambaikan tangan pelan di atas kepala.
UCAP: "Cloudy!"
AKSI: Jika cuaca hujan: turunkan jari-jari seperti tetes hujan.
UCAP: "Rainy!"
AKSI: Jika cuaca berangin: ayunkan tangan ke satu arah.
AKSI: Jika cuaca panas terik: kipas-kipaskan tangan ke wajah.
AKSI: Jika cuaca dingin: peluk diri sendiri.
UCAP: "That's the weather."
UCAP: "Today's weather."
UCAP: "Remember that word: weather."
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it with me!"
UCAP: "Weather."
→ Siswa: "Weather."`,
          bantuan     : 'Jika kelas diam: ucapkan sendiri "Weather.", lalu lanjut.',
          cue         : 'Guru yang berjalan ke jendela, bukan siswa. Terima respons bebas siswa tanpa koreksi.',
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
AKSI: Tempel kartu sunny di papan tulis.
AKSI: Tempel kartu cloudy di papan tulis.
AKSI: Tempel kartu rainy di papan tulis.
AKSI: Tempel kartu windy di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu sunny.
AKSI: Buka kedua tangan ke atas.
UCAP: "Sunny."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu cloudy.
AKSI: Lambaikan tangan pelan di atas kepala.
UCAP: "Cloudy."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu rainy.
AKSI: Turunkan jari-jari seperti tetes hujan.
UCAP: "Rainy."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kartu windy.
AKSI: Tiup napas pelan.
AKSI: Ayunkan tangan ke satu arah.
UCAP: "Windy."
UCAP: "One more time."
AKSI: Ulangi keempat kata sekali lagi.`,
          bantuan     : null,
          cue         : 'Gunakan arah ayun windy yang sama sepanjang sesi. Kelas belum diminta produksi di layar ini.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Now, together."
UCAP: "I point, you say and do the action."
UCAP: "Say it together!"
AKSI: Tunjuk kartu sunny.
→ Siswa: "Sunny!" sambil membuka kedua tangan ke atas.
AKSI: Tunjuk kartu cloudy.
→ Siswa: "Cloudy!" sambil melambaikan tangan pelan.
AKSI: Tunjuk kartu rainy.
→ Siswa: "Rainy!" sambil menurunkan jari-jari.
AKSI: Tunjuk kartu windy.
→ Siswa: "Windy!" sambil meniup dan mengayun tangan.
AKSI: Ulangi urutan sekali lagi dengan dua kartu diacak.
UCAP: "Watch."
AKSI: Tunjuk kartu sunny.
AKSI: Buka kedua tangan ke atas.
UCAP: "Sunny. Nice day!"
AKSI: Tunjuk kartu rainy.
AKSI: Turunkan jari-jari seperti tetes hujan.
UCAP: "Rainy. Wet day!"
UCAP: "Ready?"
UCAP: "Which one?"
UCAP: "Wet day, show me!"
→ Siswa: membuat gestur rainy.
UCAP: "Nice day, show me!"
→ Siswa: membuat gestur sunny.
AKSI: Ulangi contrast drill dua putaran.`,
          bantuan     : 'Jika kelas tertukar sunny dan cloudy: tunjuk kartu sunny, ucapkan "Sunny. Bright.", tunjuk kartu cloudy, ucapkan "Cloudy. Grey.", lalu lanjut.',
          cue         : 'Contrast drill memasangkan sunny dengan rainy, bukan sunny dengan cloudy. Pertahankan gestur konsisten di layar berikutnya.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk empat kartu gelombang pertama berurutan.
UCAP: "Quick check."
→ Siswa: menyebut kata setiap kartu sambil membuat gestur.
AKSI: Lanjut tanpa mengoreksi.
👂 LISTEN FIRST
AKSI: Tempel kartu hot di papan tulis.
AKSI: Tempel kartu cold di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu hot.
AKSI: Kipas-kipaskan tangan ke wajah.
UCAP: "Hot."
AKSI: Tunjuk kartu cold.
AKSI: Peluk diri sendiri sambil menggigil.
UCAP: "Cold."
UCAP: "One more time."
AKSI: Ulangi kedua kata sekali lagi.
UCAP: "Watch."
AKSI: Kipas-kipaskan tangan ke wajah.
UCAP: "Hot."
AKSI: Peluk diri sendiri.
UCAP: "Cold."
UCAP: "Ready?"
UCAP: "Hot, show me!"
→ Siswa: mengipaskan tangan ke wajah.
UCAP: "Cold, show me!"
→ Siswa: memeluk diri sendiri.
AKSI: Ulangi contrast drill dua putaran.`,
          bantuan     : null,
          cue         : 'Lakukan reactivation gelombang pertama tanpa mengoreksi. Gestur hot mengarah keluar dan gestur cold mengarah ke dalam — jaga arah tetap berlawanan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunjuk kartu hot, lalu kartu cold, dengan tempo lambat.
→ Siswa: menyebut kata setiap kartu sambil membuat gestur.
UCAP: "Now, all together."
AKSI: Tunjuk keenam kartu berurutan dengan tempo sedang.
→ Siswa: menyebut kata setiap kartu sambil membuat gestur.
UCAP: "Ready?"
UCAP: "Fast, but clear!"
AKSI: Pilih empat kartu secara acak.
AKSI: Tunjuk satu kartu, lalu tahan 1 detik sebelum kartu berikutnya.
→ Siswa: menyebut kata setiap kartu sambil membuat gestur.`,
          bantuan     : 'Jika kelas mulai telat atau gestur tidak sinkron: kurangi tempo, ulangi dua kartu, lalu lanjut.',
          cue         : 'Pertahankan gestur sepanjang seluruh fase. Jangan letakkan hot dan cold berurutan pada putaran acak.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Lepaskan semua kartu dari papan tulis.
AKSI: Simpan kartu di meja guru.
UCAP: "No cards."
UCAP: "Just me and you."
UCAP: "Show me sunny!"
→ Siswa: membuka kedua tangan ke atas.
UCAP: "Show me rainy!"
→ Siswa: menurunkan jari-jari.
UCAP: "Show me cold!"
→ Siswa: memeluk diri sendiri.
UCAP: "Show me windy!"
→ Siswa: meniup dan mengayun tangan.
UCAP: "Show me hot!"
→ Siswa: mengipaskan tangan ke wajah.
UCAP: "Show me cloudy!"
→ Siswa: melambaikan tangan pelan.
UCAP: "My turn to watch."
UCAP: "You do it."
AKSI: Pilih lima cue secara acak.
AKSI: Jangan letakkan hot dan cold berurutan.
AKSI: Jangan ikut membuat gestur saat putaran acak.
→ Siswa: membuat gestur sesuai cue guru.
AKSI: Berhenti setelah lima cue.
UCAP: "Stop."
UCAP: "Good."`,
          bantuan     : 'Jika kelas tertukar hot dan cold: berhenti, kipaskan tangan ke wajah, ucapkan "Hot.", peluk diri sendiri, ucapkan "Cold.", lalu lanjut.',
          cue         : 'Kartu sudah dilepas; retrieval berasal dari memori. Putaran acak maksimal lima cue, lalu berhenti.',
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
AKSI: Tempel kembali keenam kartu di papan tulis.
AKSI: Tunjuk pola "Today is ___." di papan tulis.
AKSI: Tunjuk pola "The weather is ___." di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu sunny.
AKSI: Buka kedua tangan ke atas.
UCAP: "Today is sunny."
AKSI: Tunjuk pola "The weather is ___." di papan tulis.
UCAP: "The weather is sunny."
AKSI: Jeda 2 detik.
AKSI: Tunjuk kartu rainy.
AKSI: Turunkan jari-jari seperti tetes hujan.
UCAP: "Today is rainy."
AKSI: Tunjuk pola "The weather is ___." di papan tulis.
UCAP: "The weather is rainy."
AKSI: Jeda 2 detik.
AKSI: Tunjuk kartu cloudy.
UCAP: "Today is cloudy."
AKSI: Tunjuk pola "The weather is ___." di papan tulis.
UCAP: "The weather is cloudy."
UCAP: "One more time."
AKSI: Ulangi ketiga pasang kalimat sekali lagi.`,
          bantuan     : null,
          cue         : 'Tunjuk papan tulis setiap mengucapkan "Today is" dan "The weather is". Modelkan tiga pasang kalimat, bukan satu.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Full sentence."
UCAP: "Say it with me!"
AKSI: Tunjuk pola "Today is ___." dan "The weather is ___." di papan tulis.
AKSI: Tunjuk kartu sunny.
UCAP: "Today is sunny."
→ Siswa: "Today is sunny."
UCAP: "The weather is sunny."
→ Siswa: "The weather is sunny."
AKSI: Jeda 2 detik.
AKSI: Tunjuk kartu rainy.
AKSI: Ucapkan "Today is..." agar siswa melengkapi kalimat.
→ Siswa: "...rainy!"
AKSI: Ucapkan "The weather is..." agar siswa melengkapi kalimat.
→ Siswa: "...rainy!"
AKSI: Tunjuk kartu cold.
AKSI: Ucapkan "Today is..." agar siswa melengkapi kalimat.
→ Siswa: "...cold!"
AKSI: Ucapkan "The weather is..." agar siswa melengkapi kalimat.
→ Siswa: "...cold!"
UCAP: "Now, what is the weather today?"
UCAP: "Look outside."
AKSI: Tunjuk kartu yang sesuai cuaca nyata hari ini.
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
→ Siswa: "Today is ___. The weather is ___." sesuai cuaca nyata.`,
          bantuan     : 'Jika kelas menghilangkan "The weather is" dan hanya menyebut nama cuaca: tunjuk papan tulis, ucapkan "The weather is...", tunggu 2 detik, lalu lanjut choral.',
          cue         : 'Dua struktur "Today is" dan "The weather is" selalu berpasangan. Lakukan transfer cuaca nyata secara choral, bukan tanya individual.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Tunjuk pola "When it is ___, I ___." di papan tulis.
UCAP: "Listen."
UCAP: "My turn."
AKSI: Tunjuk kartu rainy.
UCAP: "When it is rainy,"
AKSI: Jeda 1 detik.
AKSI: Peragakan gestur membuka payung.
UCAP: "I use an umbrella."
AKSI: Tunjuk kartu sunny.
UCAP: "When it is sunny,"
AKSI: Jeda 1 detik.
AKSI: Peragakan gestur memakai topi.
UCAP: "I wear a hat."
AKSI: Tunjuk kartu cold.
UCAP: "When it is cold,"
AKSI: Jeda 1 detik.
AKSI: Peragakan gestur memakai jaket.
UCAP: "I wear a jacket."
AKSI: Tunjuk kartu hot.
UCAP: "When it is hot,"
AKSI: Jeda 1 detik.
AKSI: Peragakan gestur minum.
UCAP: "I drink water."
UCAP: "One more time."
AKSI: Ulangi keempat kalimat sekali lagi.
UCAP: "Watch us."
AKSI: Tunjuk satu siswa untuk maju ke depan.
AKSI: Tunjuk kartu rainy ke siswa itu.
AKSI: Ucapkan "When it is rainy..." agar siswa melengkapi kalimat.
→ Siswa: "...I use an umbrella!"
UCAP: "Good."
AKSI: Ulangi demo sekali lagi dengan kartu sunny.
UCAP: "See?"
UCAP: "One card, one sentence."
UCAP: "Partner voice, not shouting."
UCAP: "Partner A picks the card."
UCAP: "Partner B makes the sentence."
AKSI: Peragakan cara mengulang kalimat dengan satu siswa sukarela.
UCAP: "Listener, repeat the sentence."
AKSI: Tunjuk dua kartu dengan gestur tangan tanpa mengucapkannya.
UCAP: "When I clap, stop."
AKSI: Tepuk tangan sekali untuk melatih tanda berhenti.
UCAP: "Go."`,
          bantuan     : 'Jika kelas menghilangkan "When it is" dan hanya menyebut nama cuaca dan benda: tunjuk papan tulis, ucapkan "When it is...", tunggu 2 detik, lalu lanjut choral jika tidak ada respons.',
          cue         : 'Beri jeda 1 detik antara "When it is" dan "I" di setiap kalimat. Demo partner dan latihan listener mengulang kalimat dilakukan sebelum partner practice.',
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
AKSI: Saat berkeliling, sesekali modelkan kalimat "When it is cold, I wear a jacket."`,
          bantuan     : 'Jika pasangan diam total: dekati, bisikkan "Point to rainy. Say: When it is rainy, I use an umbrella.", tanpa menghentikan kelas.',
          cue         : 'Listener wajib mengulang kalimat, bukan hanya menonton. Jangan koreksi grammar saat berkeliling.',
          darurat     : 'Jika waktu ≤10 menit → lewati partner practice, langsung ke Layar 11.',
          diferensiasi: {
            perluSupport: 'Dekati mereka dan batasi latihan pada dua kartu yaitu rainy dan sunny.',
            sudahBisa   : 'Minta mereka memakai keenam kartu dan membuat tiga kalimat berbeda.',
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
UCAP: "Weather."
UCAP: "Say it together!"
AKSI: Tunjuk keenam kartu berurutan dengan tempo lambat.
→ Siswa: menyebut kata setiap kartu sambil membuat gestur.
UCAP: "Now, full sentence."
AKSI: Tunjuk kartu rainy.
→ Siswa: "When it is rainy, I use an umbrella!"
AKSI: Tunjuk kartu sunny.
→ Siswa: "When it is sunny, I wear a hat!"`,
          bantuan     : null,
          cue         : 'Putaran kedua menggunakan frame "When it is ..., I ...", bukan nama kartu saja. Cukup dua kartu, tidak semua enam.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pegang kartu rainy dan kartu sunny.
AKSI: Tunjukkan kedua kartu ke semua siswa.
UCAP: "Last one."
UCAP: "Write two sentences."
AKSI: Tunjuk pola "When it is ___, I ___." di papan tulis.
UCAP: "Use these two cards."
AKSI: Tunggu 45 sampai 60 detik.
UCAP: "Show me."`,
          bantuan     : 'Terima dua kalimat penuh, frasa parsial seperti "rainy, umbrella", atau gambar dengan label, tanpa koreksi terbuka.',
          cue         : 'Gunakan dua kartu pasangan contrast yaitu rainy dan sunny dengan struktur "When it is ..., I ...". Tidak diperluas.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "One more time."
UCAP: "Show me rainy!"
→ Siswa: menurunkan jari-jari sambil mengucapkan "Rainy!".
UCAP: "Show me sunny!"
→ Siswa: membuka kedua tangan ke atas sambil mengucapkan "Sunny!".
AKSI: Tunjuk keenam kartu berurutan dengan cepat.
→ Siswa: menyebut kata setiap kartu sambil membuat gestur.
UCAP: "Today, weather."
UCAP: "When it is rainy, I use an umbrella."
UCAP: "When it is sunny, I wear a hat."
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

export default TP_13;
