const TP_B05 = {

  // METADATA
  id     : 'tp-b05',
  nomor  : 5,
  kelas  : 3,
  nama   : 'Telling Time',
  tema   : 'Mengenal dan menggunakan ekspresi waktu dalam percakapan sehari-hari',
  kluster: 'B — Waktu, Jadwal, dan Kebiasaan',
  jenis  : 'Biasa',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebutkan jam dengan benar menggunakan ekspresi "o\'clock" dan "half past" untuk jam penuh dan setengah jam.',
    'Peserta didik dapat menanyakan dan menjawab pertanyaan waktu menggunakan "What time is it?" dan "It is ___ o\'clock / half past ___."',
    'Peserta didik dapat menulis jadwal kegiatan harian sederhana menggunakan ekspresi waktu dalam bahasa Inggris.',
  ],
  vocab     : ['o\'clock', 'half past', 'What time is it?', 'wake up', 'go to school',
               'eat breakfast', 'sleep', 'morning', 'afternoon'],
  persiapan : [
    'Papan tulis dan spidol untuk menggambar jam analog, menulis angka, ekspresi waktu, dan dialog di Layar 2, Layar 3, Layar 5, Layar 6, dan Layar 9.',
    'Lembar kerja siswa satu per siswa, berisi tiga gambar jam analog kosong dan tiga template kalimat rutinitas, di meja guru sebelum dibagikan.',
    'Jam dinding kelas atau telepon guru yang dapat dilihat semua siswa untuk Layar 11.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi',                  tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-04 dan Number Chant',             tujuan: 'Guru menghubungkan paragraf TP-04 dan menyalakan energi lewat number chant.' },
    { layar:  2, judul: 'Pembuka · Reactivation Numbers dan Daily Routines',    tujuan: 'Guru meninjau angka 1 sampai 12 dan rutinitas harian.' },
    { layar:  3, judul: 'Inti · Introduksi O\'clock',                           tujuan: 'Guru memperkenalkan ekspresi jam penuh.' },
    { layar:  4, judul: 'Inti · Drill O\'clock dengan Angka',                   tujuan: 'Guru memimpin drill ekspresi o\'clock.' },
    { layar:  5, judul: 'Inti · Introduksi Half Past',                          tujuan: 'Guru memperkenalkan ekspresi setengah jam.' },
    { layar:  6, judul: 'Inti · What Time Is It dan Modeling Dialog',           tujuan: 'Guru memperkenalkan pertanyaan waktu dan memodelkan dialog.' },
    { layar:  7, judul: 'Inti · Pair Practice Tanya-Jawab Waktu',               tujuan: 'Guru memandu latihan tanya jawab waktu berpasangan.' },
    { layar:  8, judul: 'Inti · Writing Jadwal Waktuku',                        tujuan: 'Guru memandu siswa menulis jadwal waktu mereka.' },
    { layar:  9, judul: 'Inti · Berkeliling dan Review Tulisan',                tujuan: 'Guru meninjau hasil tulisan dan kontras waktu.' },
    { layar: 10, judul: 'Penutup · Review dan Hapus Papan',                     tujuan: 'Guru mengonsolidasi ekspresi waktu dan menghapus papan tulis.' },
    { layar: 11, judul: 'Penutup · Closure Emosional',                          tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-06.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Tunggu sampai semua siswa duduk dan tenang.
UCAP: "Good morning, everyone."
AKSI: Tunggu respons semua siswa.
UCAP: "Sit down, please."
UCAP: "Listen."
UCAP: "We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh: jeda 3 detik dalam diam, pandang bagian kelas yang paling ramai, lanjut hanya setelah mereka berhenti.',
    cue    : 'Jangan mulai Layar 1 sebelum minimal 80 persen siswa menatap ke depan.',
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
          teks        : `AKSI: Tepuk tangan dua kali untuk menarik perhatian.
UCAP: "Last time, we wrote a paragraph about one person and one place."
UCAP: "Your paragraph said: she goes to the market."
AKSI: Jeda 3 detik.
UCAP: "But what time does she go? Seven? Eight? Nine?"
AKSI: Biarkan dua sampai tiga siswa menjawab bebas.
AKSI: Terima tiap jawaban dengan anggukan.
UCAP: "Today, we learn to say the time. So our paragraphs can be more complete."
👂 LISTEN FIRST
AKSI: Ucapkan number chant dengan ritme ketukan meja.
UCAP: "One, two, three, four, five!"
UCAP: "Six, seven, eight, nine, ten!"
UCAP: "Eleven, twelve, what time is it, let's go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "One, two, three, four, five!"
UCAP: "Six, seven, eight, nine, ten!"
UCAP: "Eleven, twelve, what time is it, let's go!"`,
          bantuan     : 'Jika siswa tidak hafal urutan angka di putaran pertama: turunkan tempo, tunjuk jari setiap angka, biarkan siswa mengikuti secara fisik.',
          cue         : 'Biarkan energi kelas naik selama chant. Ucapkan jembatan ke market dengan nada penasaran, bukan terburu-buru.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tulis angka 1 sampai 12 di papan tulis dalam dua baris.
UCAP: "Count with me, one to twelve."
AKSI: Tunjuk tiap angka di papan tulis satu per satu.
AKSI: Tunggu semua siswa menghitung bersama.
AKSI: Ulangi hitungan sekali dengan tempo lebih cepat.
UCAP: "Good. Now, daily routines."
UCAP: "What do you do in the morning?"
AKSI: Tunggu respons semua siswa.
UCAP: "And at night?"
AKSI: Tunggu respons semua siswa.
AKSI: Tulis "wake up, eat breakfast, go to school, sleep" di papan tulis di samping angka.
UCAP: "These things happen at different times."
UCAP: "What time do you wake up?"
AKSI: Biarkan dua sampai tiga siswa menjawab dalam Bahasa apa pun.
AKSI: Dengarkan tanpa koreksi.
UCAP: "Good. Today, we learn how to say those times in English."`,
          bantuan     : 'Jika semua siswa tidak merespons "wake up" atau "go to school": ucapkan sendiri sambil membuat gestur — tangan di pipi untuk tidur, tangan melambai untuk pergi ke sekolah.',
          cue         : 'Pertahankan angka 1 sampai 12 di papan tulis sampai Layar 7 selesai.',
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
AKSI: Gambar jam analog sederhana di papan tulis dengan jarum menunjukkan pukul 7.00.
AKSI: Tulis "7:00" di bawah gambar jam.
AKSI: Tunjuk gambar jam.
UCAP: "Look at this clock."
UCAP: "This is seven o'clock."
UCAP: "Se-ven o'clock."
AKSI: Tulis "7 o'clock" di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Beri penjelasan bahwa "o'clock" dipakai untuk jam penuh, seperti jam tujuh tepat.
UCAP: "Seven o'clock."
AKSI: Hapus gambar jam dan tulisan "7:00" dari papan tulis.
AKSI: Buat gambar jam analog baru dengan jarum menunjukkan pukul 8.00.
AKSI: Tulis "8:00" di bawah gambar jam baru.
UCAP: "Now, eight o'clock."
AKSI: Tulis "8 o'clock" di papan tulis.
AKSI: Hapus gambar jam dan tulisan "8:00" dari papan tulis.
AKSI: Buat gambar jam analog baru dengan jarum menunjukkan pukul 6.00.
AKSI: Tulis "6:00" di bawah gambar jam baru.
UCAP: "And this one?"
AKSI: Tunggu respons semua siswa.
UCAP: "Yes, six o'clock."
AKSI: Tunjuk tulisan "wake up" di papan tulis.
AKSI: Tunjuk gambar jam yang menunjukkan pukul 6.00.
UCAP: "I wake up at six o'clock."
AKSI: Tunjuk tulisan "go to school" di papan tulis.
AKSI: Tunjuk tulisan "7 o'clock" di papan tulis.
UCAP: "I go to school at seven o'clock."`,
          bantuan     : 'Jika siswa bingung dengan kata "o\'clock": ucapkan perlahan "o\' clock" sambil tunjuk gambar jam di papan tulis dua kali.',
          cue         : 'Setiap kali mengucapkan jam, tunjuk angkanya di papan tulis sebelum mengucapkan "o\'clock".',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk angka 9 di papan tulis.
UCAP: "What time?"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk angka 12 di papan tulis.
UCAP: "What time?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk angka 3 di papan tulis.
UCAP: "What time?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk lima sampai enam angka berbeda di papan tulis secara acak tanpa jeda panjang.
UCAP: "Five o'clock, which number?"
AKSI: Tunggu semua siswa mengangkat lima jari.
AKSI: Panggil nama satu siswa.
UCAP: "What time do you wake up? Tell me with o'clock."
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi pertanyaan individual untuk dua sampai tiga siswa secara acak.`,
          bantuan     : 'Jika siswa yang ditunjuk diam lebih dari 5 detik: tunjuk angka di papan tulis, ucapkan separuhnya "Seven", tunggu siswa melanjutkan. Jika masih diam: ucapkan bersama semua siswa dan lanjut.',
          cue         : 'Bolak-balik antar angka tanpa jeda panjang.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima jawaban angka dan "o\'clock", seperti "Seven o\'clock.".',
            sudahBisa   : 'Minta kalimat penuh "I wake up at seven o\'clock.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan volume suara.
AKSI: Tarik napas kecil yang terlihat oleh semua siswa.
AKSI: Jeda 2 detik.
👂 LISTEN FIRST
AKSI: Gambar jam analog baru di papan tulis dengan jarum menunjukkan pukul 6.30.
AKSI: Tulis "6:30" di bawah gambar jam.
AKSI: Tunjuk gambar jam.
UCAP: "Look at this clock."
UCAP: "This is half past six."
UCAP: "Half past six."
AKSI: Tulis "half past 6" di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Beri penjelasan bahwa "half past" artinya setengah lewat, seperti pukul enam lewat tiga puluh menit.
UCAP: "Half past six."
AKSI: Tunjuk angka 6 di papan tulis.
AKSI: Tunjuk gambar jam.
UCAP: "Half past six. I wake up at half past six."
AKSI: Hapus gambar jam dan tulisan "6:30" dari papan tulis.
AKSI: Buat gambar jam analog baru dengan jarum menunjukkan pukul 7.30.
AKSI: Tulis "7:30" di bawah gambar jam baru.
UCAP: "And this?"
AKSI: Tunggu respons semua siswa.
UCAP: "Half past seven."
UCAP: "Half past seven."
AKSI: Tulis "half past 7" di papan tulis.
AKSI: Tunjuk tulisan "7 o'clock" di papan tulis.
UCAP: "Seven o'clock."
AKSI: Tunjuk tulisan "half past 7" di papan tulis.
UCAP: "Half past seven."
UCAP: "Different, yes?"
AKSI: Tunggu respons semua siswa.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan "half past 6" di papan tulis.
UCAP: "Say it with me!"
UCAP: "Half past six."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "half past 7" di papan tulis.
UCAP: "Half past seven."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa bingung dengan "half past": sebutkan padanan "setengah tujuh" satu kali, lalu ucapkan "half past six.". Lanjut ke contoh berikutnya.',
          cue         : 'Jika siswa mencampur "o\'clock" dan "half past", kembali ke kontras visual di papan tulis.',
          darurat     : 'Jika Layar 5 melewati 6 menit dan siswa belum bisa mengulang "half past" → lanjut ke Layar 6. Scaffold di papan tulis sudah cukup untuk Layar 8.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Hapus tulisan rutinitas harian dari papan tulis.
UCAP: "Now, we learn how to ask the time."
UCAP: "The question is: what time is it?"
AKSI: Tulis "What time is it?" di papan tulis.
AKSI: Jeda 3 detik.
UCAP: "And the answer. It is seven o'clock. Or it is half past six."
AKSI: Tulis "It is ___ o'clock." di papan tulis.
AKSI: Tulis "It is half past ___." di papan tulis.
AKSI: Buat gambar jam kecil dengan jarum menunjukkan pukul 7.00 di papan tulis.
UCAP: "What time is it?"
UCAP: "It is seven o'clock."
AKSI: Buat gambar jam kecil dengan jarum menunjukkan pukul 6.30 di papan tulis.
UCAP: "What time is it?"
UCAP: "It is half past six."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk angka 8 di papan tulis.
UCAP: "Say it together!"
UCAP: "What time is it?"
AKSI: Tunggu respons semua siswa.
AKSI: Buat gambar jam kecil dengan jarum menunjukkan pukul 9.30 di papan tulis.
UCAP: "What time is it?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Now, you will practice with a partner."`,
          bantuan     : 'Jika semua siswa menjawab hanya angkanya tanpa ekspresi waktu: ucapkan kalimat penuh dengan intonasi melebih-lebihkan "It is eight o\'clock!", minta semua siswa mengulangi dengan intonasi yang sama.',
          cue         : 'Pertahankan dialog "What time is it?" dan dua template jawaban di papan tulis sampai Layar 8 selesai.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Work with your partner."
UCAP: "One person asks, what time is it? The other person answers."
UCAP: "Use the clock on the board to choose a time."
AKSI: Tanyakan siapa yang mau menjadi contoh.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
AKSI: Tunjuk angka 10 di papan tulis.
UCAP: "What time is it?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Good. Now swap. You ask me."
AKSI: Tunggu siswa yang ditunjuk bertanya.
AKSI: Tunjuk gambar jam yang menunjukkan pukul 7.30.
UCAP: "It is half past seven!"
UCAP: "Your turn. You have four minutes."
AKSI: Berkeliling dan dengarkan tanpa menyela kecuali ada kekeliruan konsep besar.`,
          bantuan     : 'Jika satu pasang tidak tahu harus mulai dari mana: dekati, tunjuk angka di papan tulis, ucapkan separuh pertanyaan "What time", tunggu salah satu siswa melanjutkan "is it?", lalu arahkan yang lain untuk menjawab.',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit, atau energi kelas rendah → lewati layar ini, langsung ke Layar 8.',
            'Jika pair practice menjadi gaduh dalam satu menit → ucapkan "Okay, back to me. Look at the board.", langsung ke Layar 8.',
          ],
          diferensiasi: {
            perluSupport: 'Izinkan menggunakan hanya "o\'clock" dan melewati "half past".',
            sudahBisa   : 'Minta tambah satu kalimat rutinitas, seperti "It is seven o\'clock. I go to school.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Okay. Take your pencil. Let's write."
AKSI: Jeda 3 detik.
AKSI: Bagikan lembar kerja, satu per siswa.
UCAP: "Look at the clocks. Write the time you do each activity."
UCAP: "Use o'clock or half past."
UCAP: "Your real time, not a random number."
👂 LISTEN FIRST
AKSI: Tulis "six o'clock in the morning" di bawah gambar jam pukul 7.00 di papan tulis.
UCAP: "Watch me. I wake up at six o'clock in the morning."
AKSI: Beri penjelasan bahwa "in the morning" berarti pagi dan "in the afternoon" berarti siang.
UCAP: "If you want, add in the morning or in the afternoon after your time."
UCAP: "Now, your turn. Write your real times."
AKSI: Berkeliling di antara meja siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa tidak tahu jam berapa mereka biasa bangun: bisikkan "Choose a time that makes sense.", tunjuk gambar jam di lembar kerja mereka.',
          cue         : 'Siswa menulis waktu nyata mereka sendiri. Tidak ada jawaban salah selama format "o\'clock" atau "half past" benar.',
          darurat     : 'Jika waktu tersisa 8 menit atau kurang saat layar dimulai → minta siswa hanya mengisi dua baris pertama, langsung ke Layar 10 tanpa melalui Layar 9.',
          diferensiasi: {
            perluSupport: 'Izinkan menggunakan hanya angka dan "o\'clock" untuk ketiga baris.',
            sudahBisa   : 'Setelah tiga baris selesai, minta tambah satu kalimat "I sleep at ___ o\'clock.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua hasil tulisan siswa — satu menggunakan "o'clock", satu menggunakan "half past" atau menambah rutinitas ekstra.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good. Let's hear from two friends."
AKSI: Minta dua siswa membacakan kalimat mereka ke semua siswa.
UCAP: "Nice."
AKSI: Tulis kalimat yang baru dibacakan siswa di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Let's say it together."
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "7 o'clock" di papan tulis.
UCAP: "Seven o'clock."
AKSI: Tunjuk tulisan "half past 7" di papan tulis.
UCAP: "Half past seven."
UCAP: "Remember the difference. It will come back next time."`,
          bantuan     : 'Jika siswa yang diminta membaca menolak: ucapkan "That\'s okay.", lalu tunjuk siswa lain tanpa komentar tambahan.',
          cue         : 'Pilih siswa yang berbeda dari peserta Layar 4.',
          darurat     : 'Jika waktu tersisa kurang dari 10 menit → lewati layar ini, langsung ke Layar 10.',
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
          teks        : `AKSI: Minta siswa menyimpan lembar kerja di dalam tas.
AKSI: Berdiri kembali di depan kelas.
UCAP: "Good work today. Let's remember."
AKSI: Tunjuk tulisan "7 o'clock" di papan tulis.
UCAP: "How do we say this time?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "half past 7" di papan tulis.
UCAP: "And this time?"
AKSI: Tunggu respons semua siswa.
UCAP: "And how do we ask the time?"
AKSI: Tunggu respons semua siswa.
UCAP: "Give me a sentence."
AKSI: Ucapkan "I wake up at" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Hapus tulisan di papan tulis satu per satu dengan urutan "o'clock", "half past", "What time is it?", lalu angka 1 sampai 12.
AKSI: Tunggu semua siswa mengucapkan setiap tulisan yang dihapus.`,
          bantuan     : null,
          cue         : 'Jaga ritme tetap tenang di layar ini. Hapus angka 1 sampai 12 paling akhir.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, one question."
AKSI: Tunjuk jam dinding kelas.
UCAP: "What time is it right now?"
AKSI: Tunggu siswa menjawab dalam format apa pun.
UCAP: "Good. Now you can say the time in English."
AKSI: Jeda 3 detik.
UCAP: "Next time, we use these times to talk about our whole day."
UCAP: "What we do first. What we do after."
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'Akhiri sesi dengan ritual goodbye, bukan instruksi administratif.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → biarkan siswa merapikan meja, jangan tambahkan aktivitas baru.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B05;
