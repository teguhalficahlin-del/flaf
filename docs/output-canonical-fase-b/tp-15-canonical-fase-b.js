const TP_B15 = {

  // METADATA
  id     : 'tp-b15',
  nomor  : 15,
  kelas  : 4,
  nama   : 'Writing: My Country',
  tema   : 'Menulis teks deskriptif tentang Indonesia — profesi, makanan, dan perayaan',
  kluster: 'D — Komunitas, Budaya, dan Dunia',
  jenis  : 'Panen',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat merencanakan dan menulis teks deskriptif tentang Indonesia (tiga topik: profesi, makanan, perayaan) dalam satu teks kohesif.',
    'Peserta didik dapat mengintegrasikan kosakata dan pola kalimat dari TP12–14 ("She works at", "I like... because...", "On... we...") dalam satu produksi tulis yang utuh.',
    'Peserta didik dapat membacakan satu bagian dari teks yang ditulis sendiri dengan percaya diri di depan kelas.',
  ],
  vocab     : ['doctor', 'farmer', 'She works at...', 'rendang', 'spicy', 'I like... because...', 'Eid', 'visit', 'On... we...', 'grandmother', 'family', 'happy', 'rice'],
  persiapan : [
    'Lembar kerja siswa satu per siswa, berisi Bagian A Planning Sheet dengan tiga seksi profesi, makanan, dan perayaan, serta Bagian B Writing Space, dalam satu lembar, di meja guru sebelum dibagikan.',
    'Teks contoh "My Country" guru, ditulis di kertas besar atau papan kecil sebelum kelas dimulai, berisi lima bagian negara, profesi, makanan, perayaan, dan penutup, untuk Layar 5.',
    'Papan tulis dan spidol untuk menulis judul orientasi dan struktur pengingat lima bagian di Layar 3 dan Layar 6.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [
    { file: 'tp-b15-indonesia-poster-template.png', label: 'Indonesia Poster Template' },
    { file: 'tp-b15-my-country-worksheet.png',      label: 'My Country Worksheet' },
    { file: 'tp-b15-sentence-starter-card.png',     label: 'Sentence Starter Card' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi', tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Reconnect Chant Gabungan Kluster D', tujuan: 'Guru menyalakan energi lewat chant gabungan tiga TP.' },
    { layar:  2, judul: 'Pembuka · Warm-Up Review Kosakata TP-12 sampai TP-14', tujuan: 'Guru memanaskan memori lewat tanya jawab cepat.' },
    { layar:  3, judul: 'Pembuka · Orientasi Panen', tujuan: 'Guru menjelaskan target menulis teks tentang negara.' },
    { layar:  4, judul: 'Inti · Planning Memilih Profesi Makanan Perayaan', tujuan: 'Guru memandu siswa mengisi Planning Sheet.' },
    { layar:  5, judul: 'Inti · Modeling Teks My Country Lengkap', tujuan: 'Guru memodelkan teks contoh dan strukturnya.' },
    { layar:  6, judul: 'Inti · Writing Draft Teks My Country', tujuan: 'Guru memandu siswa menulis draf teks.' },
    { layar:  7, judul: 'Inti · Berkeliling dan Penilaian Formatif', tujuan: 'Guru berkeliling menilai dan mendampingi penulisan.' },
    { layar:  8, judul: 'Inti · Silent Reread Underline Favorite Sentence', tujuan: 'Guru memandu siswa membaca ulang dan menandai kalimat favorit.' },
    { layar:  9, judul: 'Inti · Peer Sharing Baca Bagian Favorit ke Partner', tujuan: 'Guru memandu siswa membaca bagian favorit ke partner.' },
    { layar: 10, judul: 'Inti · Mini Self-Check Tiga Topik dalam Teks', tujuan: 'Guru memandu siswa menemukan tiga topik di teks mereka.' },
    { layar: 11, judul: 'Penutup · Gallery Sharing Dua Suara', tujuan: 'Guru memandu dua siswa membacakan satu bagian.' },
    { layar: 12, judul: 'Penutup · Closure Emosional Refleksi Kluster D', tujuan: 'Guru menutup sesi dengan refleksi Kluster D dan teaser TP-16.' },
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
UCAP: "Today is a special day, again."`,
    bantuan: 'Jika ada siswa yang masih gaduh: jeda 3 detik dalam diam, pandang bagian kelas yang paling ramai, lanjut hanya setelah mereka berhenti.',
    cue    : 'Jangan mulai Layar 1 sebelum minimal 80 persen siswa menatap ke depan. Ucapkan "Today is a special day, again." dengan tulus, bukan terburu-buru.',
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
👂 LISTEN FIRST
AKSI: Ucapkan chant dengan ritme ketukan meja.
UCAP: "Doctor, farmer, they help us, go!"
UCAP: "Rendang, spicy, I like it because, go!"
UCAP: "On Eid, we visit, we eat together, go!"
UCAP: "This is my country, let's write it, go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "Doctor, farmer, they help us, go!"
UCAP: "Rendang, spicy, I like it because, go!"
UCAP: "On Eid, we visit, we eat together, go!"
UCAP: "This is my country, let's write it, go!"`,
          bantuan     : 'Jika siswa tidak hafal semua kata di putaran pertama: perlambat ritme, tunjuk papan tulis jika kata-kata sudah tertulis. Putaran kedua akan lebih baik.',
          cue         : 'Biarkan energi kelas naik selama chant, tetapi jaga tetap terkendali.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "A doctor. Where does she work?"
AKSI: Tunggu respons semua siswa.
UCAP: "A farmer. What does she do?"
AKSI: Tunggu respons semua siswa.
UCAP: "Rendang. Spicy, sweet, or salty?"
AKSI: Tunggu respons semua siswa.
UCAP: "I like rendang. Why?"
AKSI: Tunggu respons semua siswa.
UCAP: "On Eid, what do we do?"
AKSI: Tunggu respons semua siswa.
UCAP: "How do you feel on Eid?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. You remember everything from Kluster D. Today, you put it all in one piece of writing about your country."`,
          bantuan     : 'Jika kelas stagnan di satu pertanyaan: ucapkan jawabannya sendiri, minta semua siswa echo, lanjut ke pertanyaan berikutnya.',
          cue         : 'Jaga ritme cepat, satu pertanyaan tiap 5 detik.',
          darurat     : 'Jika semua siswa tidak bisa menjawab dua pertanyaan atau lebih → jangan ulang pengajaran, langsung ke Layar 3.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri kembali di depan kelas.
AKSI: Turunkan volume suara.
UCAP: "Today, we write about our country. Indonesia."
AKSI: Jeda 1 detik.
UCAP: "Not one topic. Three topics in one text."
AKSI: Tulis "MY COUNTRY" di papan tulis.
AKSI: Tulis "the people who help us, the food we love, the celebrations we share" di bawahnya di papan tulis.
UCAP: "You choose the job, the food, the celebration. Your words. Your Indonesia."
UCAP: "Let me show you first. Then you write your own."`,
          bantuan     : null,
          cue         : 'Setiap Indonesia yang ditulis siswa valid. Tidak ada satu jawaban yang benar.',
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
          teks        : `AKSI: Bagikan lembar kerja, satu per siswa.
AKSI: Minta siswa membuka Bagian A, Planning Sheet.
UCAP: "Fill in Part A. Just key words, not full sentences yet."
UCAP: "Think about your Indonesia. Your job, your food, your celebration."
AKSI: Pantau pengisian Planning Sheet semua siswa.`,
          bantuan     : 'Jika siswa duduk diam tidak menulis apa pun setelah satu menit: dekati, tunjuk baris pertama, ucapkan "Who helps people in your neighborhood? A doctor? A farmer? A teacher?", setelah mereka menyebut satu arahkan "Write that job here.".',
          cue         : 'Siswa boleh memilih profesi, makanan, dan perayaan apa pun di luar contoh TP-12 sampai TP-14.',
          darurat     : 'Jika sebagian besar kelas tidak mengerti instruksi Planning Sheet → bacakan tiap baris dengan keras sambil mengisi contoh di papan tulis, maksimal 2 menit ekstra, lalu lanjut ke Layar 5.',
          diferensiasi: {
            perluSupport: 'Tanyakan "Siapa satu orang yang bekerja keras di lingkunganmu?", tunggu jawaban lisan, lalu arahkan tangan mereka ke kertas.',
            sudahBisa   : 'Setelah tiga bagian terisi, minta tambah satu catatan, "One more thing about Indonesia I want to say: ___.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Hapus tulisan di papan tulis.
AKSI: Tunjukkan teks contoh "My Country" guru yang sudah disiapkan ke semua siswa.
AKSI: Tempel teks contoh "My Country" di papan tulis.
UCAP: "Listen. I will read my writing about Indonesia."
AKSI: Baca seluruh teks contoh dengan pelan dan jelas.
UCAP: "Now, let's look at the structure."
AKSI: Tunjuk bagian pertama teks contoh.
AKSI: Beri penjelasan bahwa bagian pertama menyebut negara dalam satu atau dua kalimat.
UCAP: "Part one. About the country."
AKSI: Tunjuk paragraf kedua teks contoh.
AKSI: Beri penjelasan bahwa bagian kedua tentang profesi memakai She works at dan because.
UCAP: "Part two. About a job. She works at, and because."
AKSI: Tunjuk paragraf ketiga teks contoh.
AKSI: Beri penjelasan bahwa bagian ketiga tentang makanan memakai I like because.
UCAP: "Part three. About food. I like, and because."
AKSI: Tunjuk paragraf keempat teks contoh.
AKSI: Beri penjelasan bahwa bagian keempat tentang perayaan memakai On we.
UCAP: "Part four. About a celebration. On a day, we do something."
AKSI: Tunjuk baris terakhir teks contoh.
AKSI: Beri penjelasan bahwa bagian kelima adalah kalimat penutup bebas.
UCAP: "Part five. A closing sentence. Your choice."
UCAP: "Five parts. That is your target, or more."`,
          bantuan     : 'Jika siswa tampak kewalahan melihat panjang teks: tunjuk hanya satu kalimat per bagian, ucapkan "One sentence is enough: She is a farmer. She grows rice.". Mulai kecil, tambah belakangan.',
          cue         : 'Teks contoh harus sudah disiapkan sebelum kelas. Jangan menulis teks di depan siswa saat Layar 5 berlangsung.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa membuka Bagian B, Writing Space.
UCAP: "Now, your turn. Use your Planning Sheet. Write your text about Indonesia."
UCAP: "Five parts. About your country, a job, a food, a celebration, and a closing."
UCAP: "Your words. Your Indonesia."
AKSI: Tulis pengingat struktur lima bagian di papan tulis dengan baris berikut: "Part 1: My country is Indonesia.", "Part 2: a job, She works at, because.", "Part 3: a food, I like, because.", "Part 4: a celebration, On a day, we.", "Part 5: a closing sentence.".
UCAP: "The board helps you. But your sentences, your ideas. Your real Indonesia."
AKSI: Mundur dari depan kelas.
AKSI: Pantau penulisan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa menulis dalam Bahasa Indonesia untuk bagian yang sulit: tulis kata kunci Bahasa Inggrisnya di pojok papan tulis tanpa komentar.',
          cue         : 'Jangan potong Layar 6 lebih awal dari 8 menit. Pertahankan struktur pengingat di papan tulis sampai Layar 10 selesai.',
          darurat     : 'Jika setelah 5 menit lebih dari separuh kelas belum menulis kalimat pertama → minta semua siswa membaca bersama baris pertama teks guru sekali, lalu lanjutkan menulis.',
          diferensiasi: {
            perluSupport: 'Cukup tulis tiga bagian, job, food, dan celebration.',
            sudahBisa   : 'Setelah lima bagian selesai, minta tambah satu paragraf, "One thing I want the world to know about Indonesia is ___.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Lanjutkan memantau penulisan semua siswa dari Layar 6.
UCAP: "Keep writing. I will come to you."
AKSI: Kunjungi tiap meja siswa.
AKSI: Baca dua sampai tiga kalimat pertama tiap siswa dalam diam.
AKSI: Lanjutkan penilaian formatif untuk siswa yang belum dinilai.`,
          bantuan     : 'Jika menemukan siswa yang hanya menulis satu bagian lalu berhenti: duduk di sebelahnya, baca yang sudah ada, tanya pelan "What celebration does your family have?", tunggu jawaban lisan, lalu ucapkan "Write that.".',
          cue         : 'Cek satu hal saja: apakah tiga topik profesi, makanan, dan perayaan muncul. Jangan koreksi grammar.',
          darurat     : 'Jika menit ke-53 tercapai sebelum Layar 7 selesai → hentikan berkeliling, lewati Layar 8, Layar 9, dan Layar 10, langsung ke Layar 11.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Stop for a moment. Put your pen down."
AKSI: Jeda 3 detik.
AKSI: Tunggu semua pena diletakkan.
UCAP: "Read your text from the beginning. Just for yourself."
AKSI: Jeda 30 detik.
UCAP: "Now, find your favorite sentence. The one you are most proud of. Underline it."
AKSI: Jeda 20 detik.
UCAP: "That sentence is your best work today."`,
          bantuan     : 'Jika siswa tampak bingung: bisikkan pelan "Kalimat mana yang paling kamu suka? Garis bawahi itu.".',
          cue         : 'Ini momen privat. Guru cukup berdiri di depan dan menjaga ruang tetap tenang.',
          darurat     : 'Jika waktu tersisa kurang dari 15 menit → lewati layar ini, langsung ke Layar 9.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Read the sentence you underlined, or your favorite part, to your partner."
UCAP: "Partner, listen. Then say: I like the part about Eid."
AKSI: Beri waktu tiga menit, masing-masing 90 detik per arah.
AKSI: Berkeliling dan dengarkan tanpa menyela.
UCAP: "Good. You can go back and add or change one thing."
AKSI: Beri waktu 1 menit untuk perubahan kecil.`,
          bantuan     : 'Jika partner tidak tahu harus berkata apa setelah mendengar: berikan contoh, ucapkan "You can say: I like the part about rendang.".',
          cue         : 'Minta siswa menyebut satu hal yang disukai, bukan koreksi.',
          darurat     : [
            'Jika waktu tersisa kurang dari 10 menit, atau teks siswa rata-rata kurang dari tiga bagian → lewati layar ini, langsung ke Layar 10.',
            'Jika peer sharing menjadi gaduh dalam satu menit → ucapkan "Okay. Back to your own paper.", langsung ke Layar 10.',
          ],
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Look at your text one more time."
UCAP: "Circle the name of one job in your text."
AKSI: Beri waktu 15 detik.
UCAP: "Underline the name of one food."
AKSI: Beri waktu 15 detik.
UCAP: "Put a star next to the celebration you wrote about."
AKSI: Beri waktu 15 detik.
UCAP: "Good. Job, food, celebration. All three are there."`,
          bantuan     : 'Jika siswa tidak menemukan salah satu topik: dekati pelan, bisikkan "Mana bagian tentang makanan, pekerjaan, atau perayaan?", jika tidak ada ucapkan "That\'s okay. You can add one sentence now.".',
          cue         : 'Guru tidak menilai hasil melingkari dan menggaris bawahi. Ini self-check siswa.',
          darurat     : 'Jika waktu tersisa kurang dari 8 menit → lewati layar ini, langsung ke Layar 11.',
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
          teks        : `AKSI: Minta semua siswa meletakkan pena.
AKSI: Berdiri kembali di depan kelas.
UCAP: "We are almost done. I want to hear from two people."
UCAP: "Who wants to read one part of their My Country text?"
AKSI: Tunggu sukarelawan selama 5 detik.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
AKSI: Minta siswa itu membacakan satu bagian ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "Thank you. What topic was that, job, food, or celebration?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk siswa lain yang mengangkat tangan.
AKSI: Minta siswa itu membacakan bagian yang berbeda topiknya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "Thank you. What part of Indonesia did they write about?"
AKSI: Tunggu respons semua siswa.
UCAP: "Two different Indonesias. Both are true."`,
          bantuan     : 'Jika tidak ada sukarelawan setelah 10 detik: panggil nama satu siswa yang menulis dengan baik dari observasi Layar 7, ucapkan dengan hangat "I read your text. It\'s really beautiful. Can you share one part?".',
          cue         : 'Pilih siswa yang berbeda dari peserta paling aktif di Layar 2.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa memegang lembar kerja mereka.
AKSI: Turunkan volume suara.
UCAP: "Look at what you wrote today."
AKSI: Jeda 5 detik.
UCAP: "You learned to talk about jobs. About food. About celebrations."
UCAP: "And today, you put it all together. In English. About your own country."
AKSI: Jeda 3 detik.
UCAP: "That text is yours. Nobody else has the same Indonesia."
UCAP: "Next time, we start something new. Sports. Directions. Stories. The world keeps getting bigger."
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'Ucapkan "Nobody else has the same Indonesia." dengan tulus. Akhiri sesi dengan ritual goodbye, bukan instruksi administratif.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → minta siswa menulis nama mereka besar di bagian atas lembar kerja.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B15;
