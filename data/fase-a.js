/**
 * =============================================================
 * FLAF — DATA KURIKULUM FASE A
 * File: data/fase-a.js
 * =============================================================
 * Terakhir direvisi: Mei 2026 — Revisi skenario v3
 *
 * Standar tipe langkah:
 *   instruksi     — panduan aksi guru (teks murni, tanpa embed kalimat ucap)
 *   audio         — kalimat guru yang diucapkan ke siswa (bisa diputar TTS)
 *   respons_siswa — contoh kalimat yang diharapkan dari siswa (bisa TTS)
 *   diferensiasi  — dua jalur: field `sudah` dan `belum`
 *   darurat       — langkah cadangan jika waktu tersisa ≤10 menit
 *
 * Tag PM (Pembelajaran Mendalam) — opsional pada tiap langkah:
 *   pm: 'mindful'    — mendorong kesadaran & refleksi siswa
 *   pm: 'meaningful' — mengaitkan dengan konteks nyata / kehidupan
 *   pm: 'joyful'     — aktivitas yang memicu semangat & rasa ingin tahu
 *
 * TP 1, 2, 18 sudah direvisi ke standar v3.
 * TP 3–17 masih format v2 (akan direvisi bertahap).
 * =============================================================
 */

const FASE_A = {

  meta: {
    fase          : 'A',
    kelas         : '1 & 2 SD',
    mata_pelajaran: 'Bahasa Inggris',
    data_version  : '2026-05-v3',
    total_tp      : 18,
    total_jp      : 306,
  },

  cp: {
    menyimak_berbicara: `Pada akhir Fase A, peserta didik menggunakan bahasa Inggris
      sederhana untuk berinteraksi dalam situasi sosial dan kelas seperti berkenalan,
      memberikan informasi diri, mengucapkan salam dan perpisahan, serta merespons
      instruksi sederhana. Mereka memahami dan menggunakan kosakata dasar terkait
      lingkungan sekitar, anggota keluarga, warna, bentuk, angka, dan rutinitas
      sehari-hari. Peserta didik mampu menyanyikan lagu dan melakukan chant sederhana
      dalam bahasa Inggris.`,
    membaca_memirsa: `Pada akhir Fase A, peserta didik mampu memahami teks sangat
      sederhana berupa kata, frasa, dan kalimat pendek yang disertai gambar. Mereka
      dapat mengenali huruf, membaca nyaring kata-kata yang sudah dikenal, dan
      memahami makna kata-kata tersebut dalam konteks bergambar.`,
    menulis_mempresentasikan: `Pada akhir Fase A, peserta didik mampu menulis kata
      dan kalimat sangat sederhana dengan bantuan gambar atau model. Mereka dapat
      menyalin kata-kata yang sudah dikenal dan menulis label sederhana untuk
      benda-benda di sekitar mereka.`,
  },

  atp: {
    deskripsi: `ATP Fase A Bahasa Inggris disusun secara spiral dan tematik.
      TP 1–6 membangun fondasi interaksi dasar. TP 7–12 memperluas kosakata
      tematik. TP 13–18 mengintegrasikan kemampuan dalam konteks yang lebih
      kompleks dan bermakna.`,
    total_tp: 18,
    total_jp: 306,
  },

  tujuan_pembelajaran: [

    // ─── TP 1 — REVISI v3 ────────────────────────────────────────────────────
    {
      id       : 'tp-01',
      nomor    : 1,
      kelas    : 1,
      nama     : 'Greetings & Farewells',
      tema     : 'Interaksi Sosial Dasar',
      jp       : 16,
      deskripsi: `Peserta didik belajar mengucapkan salam dan perpisahan dalam
        bahasa Inggris sesuai waktu dan situasi. Fokus pada interaksi lisan
        yang natural dalam rutinitas kelas.`,
      indikator: [
        'Peserta didik dapat mengucapkan salam (hello, good morning, good afternoon, good evening) dan perpisahan (goodbye, bye, see you) dengan benar sesuai waktu.',
        'Peserta didik dapat merespons salam dan perpisahan dari guru atau teman dengan ekspresi dan gestur yang tepat.',
        'Peserta didik dapat menggunakan salam dan perpisahan secara spontan dalam rutinitas kelas sehari-hari.',
      ],
      vocab: ['hello', 'hi', 'goodbye', 'bye', 'see you', 'good morning',
              'good afternoon', 'good evening', 'good night'],
      persiapan: ['Kartu gambar salam (pagi/siang/sore)', 'Kartu waktu (matahari/bulan)'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi',     teks: 'Berdiri di pintu kelas, sambut siswa satu per satu saat masuk.', pm: 'joyful' },
            { tipe: 'audio',         teks: 'Good morning! Come in, come in!' },
            { tipe: 'instruksi',     teks: 'Setelah semua duduk, sapa seluruh kelas.', pm: 'mindful' },
            { tipe: 'audio',         teks: 'Good morning, everyone! How are you today?' },
            { tipe: 'respons_siswa', teks: 'Good morning, teacher! I am fine, thank you!' },
            { tipe: 'instruksi',     teks: 'Tunjukkan kartu waktu (pagi/siang/sore). Tanya siswa sambil menunjuk gambar — biarkan mereka menebak dulu sebelum memberi tahu.', pm: 'meaningful' },
            { tipe: 'audio',         teks: 'What time is this? Morning? Afternoon?' },
            { tipe: 'respons_siswa', teks: 'Morning! Good morning!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi',     teks: 'Tempel 4 kartu salam di papan. Tunjuk satu per satu, kelas ucapkan bersama.', pm: 'mindful' },
            { tipe: 'audio',         teks: 'Good morning. Good afternoon. Good evening. Good night.' },
            { tipe: 'respons_siswa', teks: 'Good morning! Good afternoon! Good evening! Good night!' },
            { tipe: 'instruksi',     teks: 'Chant dengan tepuk tangan — guru mulai, siswa ikuti setelah putaran pertama.', pm: 'joyful' },
            { tipe: 'audio',         teks: 'Hello hello, how are you? I am fine, thank you!' },
            { tipe: 'respons_siswa', teks: 'Hello hello, how are you? I am fine, thank you!' },
            { tipe: 'instruksi',     teks: 'Permainan kartu waktu: guru angkat kartu, siswa berlomba ucapkan salam yang tepat. Siapa pertama berdiri dan benar, dapat poin.', pm: 'joyful' },
            { tipe: 'instruksi',     teks: 'Hubungkan dengan kehidupan nyata: tanya siswa apa yang mereka ucapkan saat bertemu orang tua di rumah pagi hari.', pm: 'meaningful' },
            { tipe: 'audio',         teks: 'What do you say to your parents in the morning at home?' },
            { tipe: 'respons_siswa', teks: 'Good morning, Mom! Good morning, Dad!' },
            { tipe: 'instruksi',     teks: 'Ajarkan perpisahan: goodbye, bye, see you. Tunjuk kartu, ucapkan bersama.' },
            { tipe: 'audio',         teks: 'Goodbye! Bye! See you tomorrow!' },
            { tipe: 'respons_siswa', teks: 'Goodbye! Bye! See you!' },
            { tipe: 'diferensiasi',  sudah: 'Minta siswa buat kalimat salam sendiri dengan waktu yang berbeda — tanpa kartu.', belum: 'Bimbing satu per satu dengan menunjuk kartu waktu, tidak perlu buru-buru.' },
            { tipe: 'darurat',       teks: 'Langsung ke latihan berpasangan — abaikan permainan kartu berlomba. Minta siswa saling sapa dengan teman di sampingnya.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi',     teks: 'Tanya 3–4 siswa secara acak — tunjuk kartu waktu, mereka sebut salam yang tepat.', pm: 'mindful' },
            { tipe: 'audio',         teks: 'What greeting do we use in the morning?' },
            { tipe: 'respons_siswa', teks: 'Good morning!' },
            { tipe: 'instruksi',     teks: 'Refleksi singkat: tanya satu siswa apa salam favorit mereka hari ini dan mengapa.', pm: 'meaningful' },
            { tipe: 'instruksi',     teks: 'Tutup kelas bersama — guru mulai, siswa ikut.' },
            { tipe: 'audio',         teks: 'See you next time. Goodbye, everyone!' },
            { tipe: 'respons_siswa', teks: 'Goodbye, teacher! See you!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Sambil siswa berkemas, ucapkan salam ke beberapa siswa satu per satu. Amati apakah mereka merespons dengan tepat tanpa dibantu.' },
            { tipe: 'audio',     teks: 'Good morning, Ahmad!' },
            { tipe: 'instruksi', teks: 'Nilai Listening: merespons salam dengan kata yang benar. Speaking: lafal terdengar jelas. Reading: bisa baca kartu salam.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang masih diam saat disapa? Siapa yang mencampur morning/afternoon?' },
          ],
        },
      ],
    },

    // ─── TP 2 — REVISI v3 ────────────────────────────────────────────────────
    {
      id       : 'tp-02',
      nomor    : 2,
      kelas    : 1,
      nama     : 'Introducing Myself',
      tema     : 'Interaksi Sosial Dasar',
      jp       : 16,
      deskripsi: `Peserta didik belajar memperkenalkan diri sendiri meliputi nama
        dan usia. Interaksi dilakukan secara berpasangan dan di depan kelas.`,
      indikator: [
        'Peserta didik dapat menyebutkan nama diri sendiri menggunakan struktur "My name is ..." atau "I am ..." dengan lafal yang jelas.',
        'Peserta didik dapat menyebutkan usia menggunakan struktur "I am ... years old" dan merespons pertanyaan "How old are you?"',
        'Peserta didik dapat memperkenalkan diri lengkap (nama + usia) kepada teman dan guru dalam situasi bermain peran.',
      ],
      vocab: ['name', 'my name is', 'I am', 'years old', 'how old',
              'nice to meet you', 'what is your name'],
      persiapan: ['Papan tulis + spidol', 'Kertas name tag kosong'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',         teks: 'Good morning, class! Let us learn how to introduce ourselves today!' },
            { tipe: 'instruksi',     teks: 'Guru perkenalkan diri sebagai model. Tulis nama di papan sambil berbicara — pelan dan jelas.', pm: 'mindful' },
            { tipe: 'audio',         teks: 'Hello! My name is ... I am a teacher. Nice to meet you!' },
            { tipe: 'instruksi',     teks: 'Tanya kelas — biarkan mereka menjawab sebelum guru konfirmasi.' },
            { tipe: 'audio',         teks: 'Everyone — what is my name? Louder please!' },
            { tipe: 'respons_siswa', teks: 'Your name is ...!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi',     teks: 'Tulis di papan: "My name is ___." Tunjuk papan, ucapkan bersama dua kali.', pm: 'mindful' },
            { tipe: 'audio',         teks: 'My name is Budi. My name is Sari. My name is Andi.' },
            { tipe: 'respons_siswa', teks: 'My name is ...' },
            { tipe: 'instruksi',     teks: 'Bagikan kertas name tag. Siswa tulis nama sendiri. Bantu yang belum bisa menulis — tidak apa-apa kalau belum rapi.' },
            { tipe: 'instruksi',     teks: 'Ajarkan usia — hubungkan dengan ulang tahun yang pernah mereka rayakan.', pm: 'meaningful' },
            { tipe: 'audio',         teks: 'How old are you? I am six years old. I am seven years old.' },
            { tipe: 'respons_siswa', teks: 'I am six years old! I am seven years old!' },
            { tipe: 'instruksi',     teks: 'Permainan walk and talk: siswa berdiri, berjalan 2 menit, perkenalkan diri ke 3 teman berbeda. Guru pantau dan bantu.', pm: 'joyful' },
            { tipe: 'audio',         teks: 'Hello! My name is ... I am ... years old. Nice to meet you!' },
            { tipe: 'respons_siswa', teks: 'Hi! My name is ... I am ... years old. Nice to meet you too!' },
            { tipe: 'diferensiasi',  sudah: 'Dorong menambahkan "I am from ..." atau "I like ..." setelah nama dan usia.', belum: 'Boleh hanya nama saja dulu, usia bisa belakangan — tidak ada paksaan.' },
            { tipe: 'darurat',       teks: 'Batalkan permainan jalan. Latihan berpasangan di tempat duduk masing-masing — cukup saling perkenalkan nama saja.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi',     teks: 'Panggil 3 siswa sukarela maju. Beri tepuk semangat sebelum mereka mulai.', pm: 'joyful' },
            { tipe: 'audio',         teks: 'Come to the front — introduce yourself!' },
            { tipe: 'respons_siswa', teks: 'Hello! My name is ... I am ... years old. Nice to meet you!' },
            { tipe: 'instruksi',     teks: 'Setelah tiap penampilan, ajak kelas bertepuk tangan meriah.' },
            { tipe: 'instruksi',     teks: 'Refleksi: tanya siswa — apakah mereka tahu nama lengkap teman baru yang baru dikenal hari ini?', pm: 'meaningful' },
            { tipe: 'audio',         teks: 'Great job, everyone! You can introduce yourself in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Sambil siswa berkemas, dekati 4–5 siswa dan tanya langsung tanpa pemberitahuan.' },
            { tipe: 'audio',     teks: 'What is your name? How old are you?' },
            { tipe: 'instruksi', teks: 'Nilai Listening: merespons pertanyaan nama/usia. Speaking: mengucapkan nama sendiri dengan jelas. Reading: bisa baca name tag.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang hanya diam? Siapa yang menjawab dalam bahasa Indonesia? Mereka perlu latihan lebih.' },
          ],
        },
      ],
    },

    // ─── TP 3 ───────────────────────────────────────────────────────────────
    {
      id       : 'tp-03',
      nomor    : 3,
      kelas    : 1,
      nama     : 'Classroom Instructions',
      tema     : 'Interaksi Sosial Dasar',
      jp       : 16,
      deskripsi: `Peserta didik memahami dan merespons instruksi kelas yang sering
        digunakan guru. Fokus pada pemahaman mendengar dan respons fisik (TPR).`,
      indikator: [
        'Peserta didik dapat merespons instruksi satu langkah (sit down, stand up, open your book, close your book, listen, look) dengan tindakan yang benar.',
        'Peserta didik dapat merespons instruksi dua langkah sederhana (open your book and read, listen and repeat) dengan urutan tindakan yang tepat.',
        'Peserta didik dapat mengucapkan instruksi kelas dasar untuk memimpin teman dalam aktivitas terbimbing.',
      ],
      vocab: ['sit down', 'stand up', 'open', 'close', 'listen', 'look',
              'repeat', 'read', 'write', 'draw', 'stop', 'go'],
      persiapan: ['Kartu instruksi bergambar (sit/stand/open/close)', 'Poster TPR'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Good morning! Today we learn classroom instructions. Are you ready?' },
            { tipe: 'instruksi', teks: 'Langsung demonstrasikan tanpa penjelasan — lakukan gerakan sebelum berkata. [Stand up!] — berdiri. [Sit down!] — duduk. Ulangi 3×.' },
            { tipe: 'audio',     teks: 'Stand up! Sit down! Stand up! Sit down!' },
            { tipe: 'instruksi', teks: 'Percepat tempo di putaran ketiga. Siswa akan tertawa — itu bagus, pertanda mereka terlibat.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan kartu instruksi satu per satu. Tunjuk gambar dulu, jangan sebut — biarkan siswa menebak. [What is this? Listen. Listen!]' },
            { tipe: 'audio',     teks: 'Listen. Look. Open your book. Close your book. Write. Draw.' },
            { tipe: 'instruksi', teks: 'Simon Says — guru beri instruksi. Siswa lakukan hanya jika didahului "Simon says". Kalau tidak ada "Simon says", yang bergerak duduk dulu. [Simon says, stand up!]' },
            { tipe: 'audio',     teks: 'Simon says, stand up! Simon says, open your book! Sit down!' },
            { tipe: 'instruksi', teks: 'Instruksi dua langkah — pelan dulu, lalu makin cepat. [Open your book AND read. Ready?]' },
            { tipe: 'audio',     teks: 'Open your book and read. Listen and repeat. Look and write.' },
            { tipe: 'instruksi', teks: 'Giliran siswa jadi pemimpin: panggil satu siswa maju. [Come here — you are the teacher now!] Siswa beri instruksi ke kelas.' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: beri instruksi dua langkah. Belum bisa: cukup instruksi satu langkah, tidak apa-apa kalau sedikit terlambat merespons.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati giliran siswa jadi pemimpin, langsung review cepat 5 instruksi di penutup.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Review cepat: ucapkan 5 instruksi tanpa kartu, siswa lakukan. [Ready? Fast!]' },
            { tipe: 'audio',     teks: 'Well done! Now you know classroom instructions in English!' },
            { tipe: 'audio',     teks: 'Goodbye, everyone! See you next time!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Ucapkan 5 instruksi berbeda secara acak. Amati: siapa yang langsung bergerak? Siapa yang menunggu melihat teman dulu?' },
            { tipe: 'instruksi', teks: 'Nilai Listening: respons fisik benar/salah. Speaking: bisa ucapkan instruksi. Reading: bisa baca kartu instruksi.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang masih bingung open/close atau sit/stand?' },
          ],
        },
      ],
    },

    // ─── TP 4 ───────────────────────────────────────────────────────────────
    {
      id       : 'tp-04',
      nomor    : 4,
      kelas    : 1,
      nama     : 'Numbers 1–20',
      tema     : 'Dunia di Sekitar Kita',
      jp       : 16,
      deskripsi: `Peserta didik mengenal dan menggunakan angka 1–20 dalam bahasa
        Inggris. Angka diintegrasikan dengan kegiatan menghitung benda nyata
        dan penggunaan dalam konteks sehari-hari.`,
      indikator: [
        'Peserta didik dapat menyebut dan mengurutkan angka 1–10 dengan lafal yang benar dalam aktivitas menghitung bersama.',
        'Peserta didik dapat menyebut angka 11–20 dan mengenali pola pembentukan angka belasan dalam bahasa Inggris.',
        'Peserta didik dapat menggunakan angka dalam konteks nyata: menghitung benda, menjawab "how many?", dan menyebut usia.',
      ],
      vocab: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
              'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
              'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'how many'],
      persiapan: ['Kartu angka 1–20', 'Benda untuk dihitung (buku, pensil, dll)'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello everyone! Today we learn numbers in English. Let us count together!' },
            { tipe: 'audio',     teks: 'One, two, three, four, five, six, seven, eight, nine, ten!' },
            { tipe: 'instruksi', teks: 'Siswa ikuti sambil tepuk tangan per angka. Dua putaran: normal, lalu cepat. [Clap and count!]' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Tempel kartu 1–10 di papan. Tunjuk satu per satu, kelas ucapkan bersama. [What number is this? Say it!]' },
            { tipe: 'audio',     teks: 'One. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten.' },
            { tipe: 'instruksi', teks: 'Lanjut 11–20. Peringatkan: 11–19 itu sulit, tidak apa-apa kalau belum hafal hari ini. [These are tricky — just try your best!]' },
            { tipe: 'audio',     teks: 'Eleven. Twelve. Thirteen. Fourteen. Fifteen. Sixteen. Seventeen. Eighteen. Nineteen. Twenty.' },
            { tipe: 'instruksi', teks: 'Permainan: guru tunjuk angka di papan secara acak, siswa berlomba sebut. Siswa yang pertama benar angkat tangan. [Who is fastest?]' },
            { tipe: 'instruksi', teks: 'Hitung benda nyata di kelas. [How many books on my desk? Let us count!] — hitung bersama.' },
            { tipe: 'audio',     teks: 'How many? One, two, three... There are ten books!' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tantang menghitung mundur 10–1. Belum bisa: fokus 1–10 dulu, 11–20 hanya diperkenalkan saja.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati permainan berlomba, langsung ke penutup hitung bersama.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Hitung mundur bersama-sama: 10 ke 1. Siswa berdiri, satu per angka duduk. [When I say your number, sit down!]' },
            { tipe: 'audio',     teks: 'Ten, nine, eight, seven, six, five, four, three, two, one. Blast off!' },
            { tipe: 'audio',     teks: 'Great work today! You can count to twenty in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Sambil siswa istirahat, tunjukkan kartu angka acak ke beberapa siswa. [What number is this?] — amati tanpa tekanan.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: merespons "how many". Speaking: lafal angka. Reading: baca angka di kartu.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang masih kesulitan 11–19? Itu wajar — butuh lebih banyak latihan berulang.' },
          ],
        },
      ],
    },

    // ─── TP 5 ───────────────────────────────────────────────────────────────
    {
      id       : 'tp-05',
      nomor    : 5,
      kelas    : 1,
      nama     : 'Colours',
      tema     : 'Dunia di Sekitar Kita',
      jp       : 16,
      deskripsi: `Peserta didik mengenal dan menggunakan nama-nama warna dalam
        bahasa Inggris. Warna diintegrasikan dengan benda-benda di lingkungan
        kelas dan kehidupan sehari-hari.`,
      indikator: [
        'Peserta didik dapat menyebut nama 8 warna dasar (red, blue, green, yellow, orange, purple, black, white) dengan lafal yang benar.',
        'Peserta didik dapat mendeskripsikan warna benda menggunakan struktur "The ... is ..." atau "It is ..." dalam aktivitas show and tell.',
        'Peserta didik dapat merespons pertanyaan "What colour is it?" dan "What is your favourite colour?" dengan kalimat lengkap.',
      ],
      vocab: ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink',
              'black', 'white', 'brown', 'colour', 'favourite', 'what colour'],
      persiapan: ['Kartu warna 8 warna dasar', 'Benda berwarna dari kelas/tas siswa'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Today is a colourful day! Let us learn colours in English!' },
            { tipe: 'instruksi', teks: 'Tunjukkan kartu warna satu per satu — hanya tunjuk, jangan sebut dulu. Tanya siswa. [What colour is this? Do you know?]' },
            { tipe: 'audio',     teks: 'Red. Blue. Green. Yellow. Orange. Purple. Black. White.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Tempel kartu di papan. Tunjuk, siswa ucapkan bersama. Ulangi 2× per warna. [Say it together!]' },
            { tipe: 'audio',     teks: 'What colour is this? It is red! What colour is this? It is blue!' },
            { tipe: 'instruksi', teks: 'Permainan sentuh warna: guru sebut warna, siswa berlari sentuh benda berwarna itu di kelas. [Touch something red — go!]' },
            { tipe: 'instruksi', teks: 'Show and tell: setiap siswa ambil satu benda dari tas, tunjukkan ke kelas, sebut warnanya. [What do you have? What colour is it?]' },
            { tipe: 'audio',     teks: 'This is my pencil. It is yellow. This is my book. It is blue.' },
            { tipe: 'instruksi', teks: 'Tanya warna favorit ke 5–6 siswa. [What is your favourite colour?] — bantu dengan menunjuk kartu jika siswa lupa kata.' },
            { tipe: 'audio',     teks: 'What is your favourite colour? My favourite colour is red!' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: deskripsikan dengan kalimat lengkap "My bag is blue and green". Belum bisa: cukup satu kata warna saja.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati show and tell, langsung ke nyanyian penutup.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Nyanyikan "I Can Sing a Rainbow" bersama. Guru nyanyi dulu, siswa ikuti di putaran kedua. [Sing with me!]' },
            { tipe: 'audio',     teks: 'Red and yellow and pink and green, orange and purple and blue. I can sing a rainbow, sing a rainbow, sing a rainbow too!' },
            { tipe: 'audio',     teks: 'Wonderful! You know your colours in English now!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu warna acak ke 5–6 siswa. [What colour is this?] — catat respons langsung mereka.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: merespons "what colour is it". Speaking: lafal warna benar. Reading: baca nama warna di kartu.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang masih menukar purple/orange atau black/brown?' },
          ],
        },
      ],
    },

    // ─── TP 6 ───────────────────────────────────────────────────────────────
    {
      id       : 'tp-06',
      nomor    : 6,
      kelas    : 1,
      nama     : 'Shapes',
      tema     : 'Dunia di Sekitar Kita',
      jp       : 16,
      deskripsi: `Peserta didik mengenal bentuk geometri dasar dalam bahasa Inggris
        dan menghubungkannya dengan benda-benda nyata di sekitar mereka.`,
      indikator: [
        'Peserta didik dapat menyebut nama bentuk dasar (circle, square, triangle, rectangle, star, heart) dengan lafal yang benar.',
        'Peserta didik dapat mengidentifikasi bentuk dalam gambar dan benda nyata serta menyatakan "This is a ..." atau "I see a ...".',
        'Peserta didik dapat mendeskripsikan benda menggunakan kombinasi warna dan bentuk: "The circle is red", "I have a blue square".',
      ],
      vocab: ['circle', 'square', 'triangle', 'rectangle', 'star', 'heart',
              'diamond', 'oval', 'shape', 'this is', 'I see'],
      persiapan: ['Kartu bentuk berwarna', 'Gunting + kertas warna (opsional)'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Can you see shapes around you? Look around! What do you see?' },
            { tipe: 'instruksi', teks: 'Tunjuk benda di kelas — pintu (rectangle), jam (circle), papan tulis (rectangle). Tanya siswa bentuknya apa.' },
            { tipe: 'audio',     teks: 'What shape is the door? What shape is the clock?' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Tempel kartu bentuk di papan. Tunjuk, ucapkan bersama. [What shape is this? Circle!]' },
            { tipe: 'audio',     teks: 'Circle. Square. Triangle. Rectangle. Star. Heart.' },
            { tipe: 'instruksi', teks: 'Permainan tebak bentuk: guru gambar bentuk perlahan di papan (satu garis per detik), siswa tebak sebelum selesai. [What is it?]' },
            { tipe: 'instruksi', teks: 'Gabungkan warna + bentuk. Guru tunjuk kartu, siswa buat kalimat. [The circle is red! The square is blue!]' },
            { tipe: 'audio',     teks: 'I see a red circle. I see a blue square. I see a yellow triangle.' },
            { tipe: 'instruksi', teks: 'Siswa cari 3 benda berbentuk dari tas/kelas mereka, sebut ke teman. [What shape is your eraser?]' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: buat kalimat gabungan warna + bentuk + benda "My red eraser is a rectangle". Belum bisa: cukup sebut nama bentuk saja.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati aktivitas mencari benda, langsung review 5 bentuk di penutup.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Guru tunjuk benda di kelas — siswa sebut bentuknya. Cepat dan bergantian.' },
            { tipe: 'audio',     teks: 'Excellent! You can name shapes in English!' },
            { tipe: 'audio',     teks: 'Goodbye everyone! See you next time!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu bentuk acak ke beberapa siswa. [What shape is this?]' },
            { tipe: 'instruksi', teks: 'Nilai Listening: merespons "what shape is it". Speaking: lafal bentuk benar. Reading: baca nama bentuk di kartu.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar triangle/rectangle atau circle/oval?' },
          ],
        },
      ],
    },

    // ─── TP 7–17: placeholder — belum direvisi ke v3 ─────────────────────────
    // Format masih v2, akan direvisi bertahap.
    // TP 7 ────────────────────────────────────────────────────────────────────
    {
      id: 'tp-07', nomor: 7, kelas: 1,
      nama: 'My Family', tema: 'Keluarga dan Rumah', jp: 16,
      deskripsi: 'Peserta didik mengenal anggota keluarga inti dan memperkenalkan keluarga menggunakan struktur sederhana.',
      indikator: [
        'Peserta didik dapat menyebut anggota keluarga inti (mother, father, sister, brother, grandmother, grandfather) dengan lafal yang benar.',
        'Peserta didik dapat mendeskripsikan anggota keluarga menggunakan "This is my ..." dalam konteks foto atau gambar.',
        'Peserta didik dapat memperkenalkan keluarga inti dalam 3–4 kalimat sederhana.',
      ],
      vocab: ['mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather', 'family', 'this is my'],
      persiapan: ['Gambar keluarga dari majalah/buku', 'Foto keluarga guru (opsional)'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Hello everyone! Today we talk about family. Do you love your family?' },
          { tipe: 'instruksi', teks: 'Tunjukkan foto/gambar keluarga guru. Perkenalkan satu per satu sebagai model. [This is my mother. This is my father.]' },
          { tipe: 'audio',     teks: 'This is my family. This is my mother. This is my father. I love my family!' },
        ]},
        { fase: 'Inti', durasi: 35, langkah: [
          { tipe: 'instruksi', teks: 'Tempel kartu gambar anggota keluarga di papan. Tunjuk satu per satu, kelas ucapkan bersama.' },
          { tipe: 'audio',     teks: 'Mother. Father. Sister. Brother. Grandmother. Grandfather.' },
          { tipe: 'instruksi', teks: 'Siswa ambil gambar keluarga yang sudah disiapkan. Ceritakan ke teman di sampingnya. [Tell your friend about your family!]' },
          { tipe: 'audio',     teks: 'This is my mother. She is kind. This is my brother. He is funny!' },
          { tipe: 'instruksi', teks: 'Tanya 3–4 siswa maju, ceritakan keluarga mereka ke kelas.' },
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan sifat (kind, funny, tall, smart). Belum bisa: cukup "This is my ..." saja.' },
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati presentasi ke kelas, cukup latihan berpasangan.' },
        ]},
        { fase: 'Penutup', durasi: 7, langkah: [
          { tipe: 'instruksi', teks: 'Tanya beberapa siswa: siapa anggota keluarga favorit mereka dan kenapa?' },
          { tipe: 'audio',     teks: 'I love my family so much! Goodbye everyone!' },
        ]},
        { fase: 'Penilaian', durasi: 4, langkah: [
          { tipe: 'instruksi', teks: 'Tunjuk kartu anggota keluarga acak ke beberapa siswa. [Who is this?]' },
          { tipe: 'instruksi', teks: 'Nilai Listening: memahami "who is this". Speaking: menyebut anggota keluarga. Reading: baca kata di kartu.' },
          { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar grandmother/grandfather?' },
        ]},
      ],
    },

    // TP 8 ────────────────────────────────────────────────────────────────────
    {
      id: 'tp-08', nomor: 8, kelas: 1,
      nama: 'My House', tema: 'Keluarga dan Rumah', jp: 18,
      deskripsi: 'Peserta didik mengenal ruangan dan benda-benda dalam rumah menggunakan bahasa Inggris.',
      indikator: [
        'Peserta didik dapat menyebut nama ruangan utama (bedroom, kitchen, bathroom, living room) dengan lafal yang benar.',
        'Peserta didik dapat menyebut benda-benda umum dalam setiap ruangan menggunakan "There is a ... in the ...".',
        'Peserta didik dapat mendeskripsikan rumah mereka dalam 3–4 kalimat sederhana.',
      ],
      vocab: ['bedroom', 'kitchen', 'bathroom', 'living room', 'bed', 'table', 'chair', 'sofa', 'there is', 'in the'],
      persiapan: ['Gambar denah rumah sederhana', 'Kartu nama ruangan'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Hello class! Let us talk about our homes today! What rooms do you have at home?' },
          { tipe: 'instruksi', teks: 'Gambar denah rumah sederhana di papan: 4 kotak berlabel. Tanya siswa ruangan mana yang mereka punya.' },
          { tipe: 'audio',     teks: 'Bedroom. Kitchen. Bathroom. Living room.' },
        ]},
        { fase: 'Inti', durasi: 35, langkah: [
          { tipe: 'instruksi', teks: 'Tunjuk setiap ruangan di gambar, ucapkan bersama. Tanya benda apa yang ada di sana.' },
          { tipe: 'audio',     teks: 'In the bedroom, there is a bed. In the kitchen, there is a table.' },
          { tipe: 'instruksi', teks: 'Siswa gambar rumah mereka sendiri — 4 kotak, tulis nama ruangan. Bantu yang kesulitan menulis.' },
          { tipe: 'instruksi', teks: 'Pasangkan siswa. Ceritakan rumah mereka ke teman. [Tell your friend about your house!]' },
          { tipe: 'audio',     teks: 'My house has a bedroom, a kitchen, and a bathroom. In my bedroom, there is a bed.' },
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan 2 benda per ruangan. Belum bisa: cukup sebut nama ruangan saja.' },
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: skip menggambar, langsung latihan lisan berpasangan.' },
        ]},
        { fase: 'Penutup', durasi: 7, langkah: [
          { tipe: 'instruksi', teks: 'Tanya 3 siswa: ruangan favorit mereka di rumah dan alasannya.' },
          { tipe: 'audio',     teks: 'Wonderful! You can talk about your house in English!' },
        ]},
        { fase: 'Penilaian', durasi: 6, langkah: [
          { tipe: 'instruksi', teks: 'Tunjuk ruangan di gambar denah. [What room is this? What is in this room?]' },
          { tipe: 'instruksi', teks: 'Nilai Listening: merespons "what room". Speaking: menyebut ruangan + benda. Reading: baca label ruangan.' },
          { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar kitchen/bathroom?' },
        ]},
      ],
    },

    // TP 9 ────────────────────────────────────────────────────────────────────
    {
      id: 'tp-09', nomor: 9, kelas: 1,
      nama: 'Animals', tema: 'Alam dan Lingkungan', jp: 18,
      deskripsi: 'Peserta didik mengenal nama hewan umum dan suara yang mereka hasilkan.',
      indikator: [
        'Peserta didik dapat menyebut nama 10 hewan umum (cat, dog, bird, fish, rabbit, cow, chicken, elephant, monkey, snake) dengan lafal yang benar.',
        'Peserta didik dapat mendeskripsikan hewan menggunakan "A ... can ..." dan "A ... has ...".',
        'Peserta didik dapat mengidentifikasi hewan berdasarkan deskripsi sederhana yang diucapkan guru.',
      ],
      vocab: ['cat', 'dog', 'bird', 'fish', 'rabbit', 'cow', 'chicken', 'elephant', 'monkey', 'snake', 'can', 'has'],
      persiapan: ['Kartu gambar hewan', 'Poster hewan'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Hello everyone! Do you like animals? What is your favourite animal?' },
          { tipe: 'instruksi', teks: 'Tiru suara hewan tanpa memperlihatkan kartu. Siswa tebak hewannya. [What animal is this? Listen!]' },
          { tipe: 'audio',     teks: 'Meow! Woof! Moo! Cluck cluck!' },
        ]},
        { fase: 'Inti', durasi: 35, langkah: [
          { tipe: 'instruksi', teks: 'Tempel kartu hewan di papan satu per satu. Ucapkan bersama + tiru suaranya.' },
          { tipe: 'audio',     teks: 'Cat. Dog. Bird. Fish. Rabbit. Cow. Chicken. Elephant. Monkey. Snake.' },
          { tipe: 'instruksi', teks: 'Ajarkan struktur deskripsi. Tulis di papan: "A cat can meow. A cat has four legs."' },
          { tipe: 'audio',     teks: 'A dog can run. A bird can fly. An elephant has a long nose.' },
          { tipe: 'instruksi', teks: 'Tebak hewan: guru beri 2 petunjuk, siswa tebak. [It can fly. It has two wings. What is it?]' },
          { tipe: 'instruksi', teks: 'Siswa buat teka-teki hewan sendiri dalam pasangan.' },
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: buat 3 kalimat deskripsi per hewan. Belum bisa: cukup sebut nama + satu suara hewan.' },
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati teka-teki siswa, langsung review nama hewan di penutup.' },
        ]},
        { fase: 'Penutup', durasi: 7, langkah: [
          { tipe: 'instruksi', teks: 'Guru tunjuk kartu hewan — siswa sebut nama + suaranya bersamaan.' },
          { tipe: 'audio',     teks: 'Fantastic! You know so many animals in English!' },
        ]},
        { fase: 'Penilaian', durasi: 6, langkah: [
          { tipe: 'instruksi', teks: 'Beri deskripsi singkat, siswa tebak hewannya. [It is big. It has a long nose. What is it?]' },
          { tipe: 'instruksi', teks: 'Nilai Listening: memahami deskripsi hewan. Speaking: menyebut nama + suara. Reading: baca nama hewan di kartu.' },
          { tipe: 'instruksi', teks: 'Catat: siapa yang masih kesulitan hewan yang lebih jarang (rabbit, snake)?' },
        ]},
      ],
    },

    // TP 10 ───────────────────────────────────────────────────────────────────
    {
      id: 'tp-10', nomor: 10, kelas: 2,
      nama: 'Food and Drinks', tema: 'Kehidupan Sehari-hari', jp: 18,
      deskripsi: 'Peserta didik mengenal makanan dan minuman dalam bahasa Inggris dan mengungkapkan preferensi makanan.',
      indikator: [
        'Peserta didik dapat menyebut nama 10 makanan dan minuman umum dengan lafal yang benar.',
        'Peserta didik dapat mengungkapkan preferensi menggunakan "I like ..." dan "I do not like ..." dengan alasan sederhana.',
        'Peserta didik dapat menanyakan dan merespons preferensi makanan: "Do you like ...? Yes, I do / No, I do not."',
      ],
      vocab: ['rice', 'noodles', 'bread', 'egg', 'chicken', 'fish', 'milk', 'water', 'juice', 'like', 'do not like'],
      persiapan: ['Kartu gambar makanan/minuman', 'Gambar piring kosong'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Good morning! Are you hungry? What did you eat for breakfast today?' },
          { tipe: 'instruksi', teks: 'Guru ceritakan sarapan hari ini sebagai model. [This morning I ate rice and egg. I love rice!]' },
          { tipe: 'audio',     teks: 'I ate rice for breakfast. Rice is delicious! What about you?' },
        ]},
        { fase: 'Inti', durasi: 35, langkah: [
          { tipe: 'instruksi', teks: 'Tempel kartu makanan/minuman di papan. Ucapkan bersama.' },
          { tipe: 'audio',     teks: 'Rice. Noodles. Bread. Egg. Chicken. Fish. Milk. Water. Juice.' },
          { tipe: 'instruksi', teks: 'Ajarkan "I like" dan "I do not like". Guru contohkan dengan ekspresi wajah.' },
          { tipe: 'audio',     teks: 'I like rice! I do not like... hmm... I do not like very spicy food!' },
          { tipe: 'instruksi', teks: 'Siswa isi "piring kosong" mereka — gambar/tulis 3 makanan yang mereka suka.' },
          { tipe: 'audio',     teks: 'Do you like rice? Yes, I do! Do you like bread? No, I do not.' },
          { tipe: 'instruksi', teks: 'Survei kelas: angkat tangan siapa yang suka nasi? Susu? Hitung bersama.' },
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan alasan "because it is delicious / healthy". Belum bisa: cukup "I like ..." tanpa alasan.' },
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati survei, langsung ke penutup.' },
        ]},
        { fase: 'Penutup', durasi: 7, langkah: [
          { tipe: 'instruksi', teks: 'Tanya 3 siswa: makanan favorit mereka dan kenapa.' },
          { tipe: 'audio',     teks: 'Delicious! You can talk about food in English now!' },
        ]},
        { fase: 'Penilaian', durasi: 6, langkah: [
          { tipe: 'instruksi', teks: 'Tunjuk kartu makanan. [Do you like this? Yes or no?] — amati jawaban lengkap mereka.' },
          { tipe: 'instruksi', teks: 'Nilai Listening: merespons "do you like". Speaking: kalimat preferensi. Reading: baca nama makanan di kartu.' },
          { tipe: 'instruksi', teks: 'Catat: siapa yang masih menjawab hanya "yes/no" tanpa "I do / I do not"?' },
        ]},
      ],
    },

    // TP 11 ───────────────────────────────────────────────────────────────────
    {
      id: 'tp-11', nomor: 11, kelas: 2,
      nama: 'Daily Routines', tema: 'Kehidupan Sehari-hari', jp: 18,
      deskripsi: 'Peserta didik mengenal dan mengungkapkan kegiatan rutin sehari-hari menggunakan kalimat sederhana.',
      indikator: [
        'Peserta didik dapat menyebut kegiatan rutin harian (wake up, brush teeth, eat breakfast, go to school, study, sleep) dengan lafal yang benar.',
        'Peserta didik dapat mengungkapkan urutan kegiatan menggunakan "first, then, after that" dalam 3–4 kalimat.',
        'Peserta didik dapat menanyakan dan merespons "What do you do every day?" dengan kalimat rutin lengkap.',
      ],
      vocab: ['wake up', 'brush teeth', 'eat breakfast', 'go to school', 'study', 'play', 'eat dinner', 'sleep', 'every day', 'first', 'then'],
      persiapan: ['Kartu gambar kegiatan rutin', 'Kartu urutan (first/then/after that)'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Good morning! What did you do before coming to school today?' },
          { tipe: 'instruksi', teks: 'Guru ceritakan rutinitas pagi sambil peragakan gerakan. [First I wake up. Then I brush my teeth. Then I eat breakfast!]' },
          { tipe: 'audio',     teks: 'Every morning, I wake up, brush my teeth, and eat breakfast. Then I go to school!' },
        ]},
        { fase: 'Inti', durasi: 35, langkah: [
          { tipe: 'instruksi', teks: 'Tempel kartu kegiatan rutin di papan berurutan. Ucapkan + peragakan bersama.' },
          { tipe: 'audio',     teks: 'Wake up. Brush teeth. Eat breakfast. Go to school. Study. Play. Eat dinner. Sleep.' },
          { tipe: 'instruksi', teks: 'Ajarkan kata urutan. Tulis di papan: First ... Then ... After that ...' },
          { tipe: 'audio',     teks: 'First, I wake up. Then, I brush my teeth. After that, I eat breakfast.' },
          { tipe: 'instruksi', teks: 'Siswa susun kartu kegiatan dalam urutan rutinitas mereka sendiri.' },
          { tipe: 'instruksi', teks: 'Pasangkan siswa — ceritakan rutinitas pagi masing-masing.' },
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan waktu "At 6 o\'clock, I wake up". Belum bisa: cukup 3 kegiatan dengan "first" dan "then".' },
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati presentasi berpasangan, langsung penutup.' },
        ]},
        { fase: 'Penutup', durasi: 7, langkah: [
          { tipe: 'instruksi', teks: 'Tanya 3 siswa: kegiatan pertama yang mereka lakukan setiap pagi.' },
          { tipe: 'audio',     teks: 'Great! You can talk about your daily routine in English!' },
        ]},
        { fase: 'Penilaian', durasi: 6, langkah: [
          { tipe: 'instruksi', teks: 'Tunjuk kartu kegiatan acak. [What is this? When do you do this?]' },
          { tipe: 'instruksi', teks: 'Nilai Listening: memahami pertanyaan "what do you do". Speaking: menyebut kegiatan dalam urutan. Reading: baca kata di kartu.' },
          { tipe: 'instruksi', teks: 'Catat: siapa yang masih kesulitan menggunakan kata urutan?' },
        ]},
      ],
    },

    // TP 12 ───────────────────────────────────────────────────────────────────
    {
      id: 'tp-12', nomor: 12, kelas: 2,
      nama: 'Body Parts', tema: 'Tubuh dan Kesehatan', jp: 16,
      deskripsi: 'Peserta didik mengenal nama anggota tubuh dan menggunakannya dalam konteks deskripsi dan lagu.',
      indikator: [
        'Peserta didik dapat menyebut nama anggota tubuh utama (head, eyes, ears, nose, mouth, hands, legs, feet) dengan lafal yang benar.',
        'Peserta didik dapat mendeskripsikan fungsi anggota tubuh menggunakan "I use my ... to ...".',
        'Peserta didik dapat merespons instruksi "touch your ..." dengan tindakan yang tepat.',
      ],
      vocab: ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet', 'touch', 'I use my', 'to see', 'to hear'],
      persiapan: ['Poster tubuh manusia', 'Kartu nama anggota tubuh'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Hello class! Let us sing! Head, shoulders, knees and toes!' },
          { tipe: 'instruksi', teks: 'Nyanyikan Head Shoulders Knees and Toes sambil sentuh bagian tubuh. Ulangi 2× — makin cepat di putaran kedua.' },
          { tipe: 'audio',     teks: 'Head, shoulders, knees and toes, knees and toes! Eyes and ears and mouth and nose!' },
        ]},
        { fase: 'Inti', durasi: 30, langkah: [
          { tipe: 'instruksi', teks: 'Tunjuk poster tubuh. Sebut nama anggota tubuh, siswa sentuh bagian tubuh mereka sendiri.' },
          { tipe: 'audio',     teks: 'Touch your head! Touch your nose! Touch your ears! Touch your eyes!' },
          { tipe: 'instruksi', teks: 'Ajarkan fungsi: "I use my eyes to see. I use my ears to hear." Tanya siswa secara bergantian.' },
          { tipe: 'audio',     teks: 'I use my eyes to see. I use my ears to hear. I use my mouth to speak. I use my hands to write.' },
          { tipe: 'instruksi', teks: 'Permainan: guru sebut fungsi, siswa sentuh anggota tubuh yang tepat. [I use this to smell — touch it!]' },
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: buat kalimat fungsi sendiri tanpa bantuan. Belum bisa: cukup sentuh saat nama disebutkan.' },
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: langsung ke lagu penutup, skip permainan fungsi.' },
        ]},
        { fase: 'Penutup', durasi: 10, langkah: [
          { tipe: 'instruksi', teks: 'Nyanyikan Head Shoulders Knees and Toes sekali lagi — kali ini sekencang mungkin.' },
          { tipe: 'audio',     teks: 'Wonderful! You know your body parts in English!' },
        ]},
        { fase: 'Penilaian', durasi: 6, langkah: [
          { tipe: 'instruksi', teks: 'Sebut fungsi, siswa sentuh. [Touch the part you use to smell. Touch the part you use to walk.]' },
          { tipe: 'instruksi', teks: 'Nilai Listening: respons instruksi "touch your". Speaking: menyebut nama + fungsi. Reading: baca label di poster.' },
          { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar ears/eyes atau hands/feet?' },
        ]},
      ],
    },

    // TP 13 ───────────────────────────────────────────────────────────────────
    {
      id: 'tp-13', nomor: 13, kelas: 2,
      nama: 'Weather and Seasons', tema: 'Alam dan Lingkungan', jp: 18,
      deskripsi: 'Peserta didik mengenal kondisi cuaca dan musim dalam bahasa Inggris serta menghubungkannya dengan aktivitas sehari-hari.',
      indikator: [
        'Peserta didik dapat menyebut kondisi cuaca (sunny, cloudy, rainy, windy, hot, cold) dengan lafal yang benar.',
        'Peserta didik dapat mendeskripsikan cuaca hari ini menggunakan "Today is ..." dan "The weather is ...".',
        'Peserta didik dapat menghubungkan cuaca dengan aktivitas: "When it is rainy, I use an umbrella."',
      ],
      vocab: ['sunny', 'cloudy', 'rainy', 'windy', 'hot', 'cold', 'weather', 'today', 'umbrella', 'when it is'],
      persiapan: ['Kartu gambar cuaca', 'Kalender cuaca kelas (opsional)'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Good morning! Look outside the window. What is the weather like today?' },
          { tipe: 'instruksi', teks: 'Ajak siswa lihat ke jendela. Tanya mereka mendeskripsikan cuaca hari ini.' },
          { tipe: 'audio',     teks: 'Is it sunny today? Or is it cloudy? What do you think?' },
        ]},
        { fase: 'Inti', durasi: 35, langkah: [
          { tipe: 'instruksi', teks: 'Tempel kartu cuaca di papan. Ucapkan + peragakan gerakan (mengipas jika hot, peluk diri jika cold).' },
          { tipe: 'audio',     teks: 'Sunny. Cloudy. Rainy. Windy. Hot. Cold.' },
          { tipe: 'instruksi', teks: 'Ajarkan "Today is ..." dan "The weather is ...". Siswa deskripsikan cuaca hari ini bersama.' },
          { tipe: 'audio',     teks: 'Today is Monday. The weather is sunny. It is hot!' },
          { tipe: 'instruksi', teks: 'Hubungkan cuaca dengan aktivitas. [When it is rainy, what do you bring?]' },
          { tipe: 'audio',     teks: 'When it is rainy, I use an umbrella. When it is sunny, I wear a hat.' },
          { tipe: 'instruksi', teks: 'Siswa gambar cuaca favorit + 1 aktivitas yang mereka lakukan saat cuaca itu.' },
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: buat 3 kalimat cuaca + aktivitas. Belum bisa: cukup sebut nama cuaca + benda yang dipakai.' },
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati menggambar, langsung tanya-jawab cuaca.' },
        ]},
        { fase: 'Penutup', durasi: 7, langkah: [
          { tipe: 'instruksi', teks: 'Tanya siswa: cuaca favorit mereka dan mengapa.' },
          { tipe: 'audio',     teks: 'Great! Now you can talk about the weather in English!' },
        ]},
        { fase: 'Penilaian', durasi: 6, langkah: [
          { tipe: 'instruksi', teks: 'Tunjuk kartu cuaca acak. [What weather is this? What do you do when it is like this?]' },
          { tipe: 'instruksi', teks: 'Nilai Listening: memahami deskripsi cuaca. Speaking: mendeskripsikan cuaca + aktivitas. Reading: baca kata cuaca di kartu.' },
          { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar cloudy/rainy atau hot/cold?' },
        ]},
      ],
    },

    // TP 14 ───────────────────────────────────────────────────────────────────
    {
      id: 'tp-14', nomor: 14, kelas: 2,
      nama: 'In the Classroom', tema: 'Sekolah dan Benda-benda', jp: 16,
      deskripsi: 'Peserta didik mengenal nama benda-benda di kelas dan menggunakannya dalam percakapan.',
      indikator: [
        'Peserta didik dapat menyebut benda-benda kelas (book, pen, pencil, eraser, ruler, bag, table, chair, whiteboard) dengan lafal yang benar.',
        'Peserta didik dapat mendeskripsikan lokasi benda menggunakan preposisi sederhana (on, in, under, next to).',
        'Peserta didik dapat meminjam benda menggunakan ekspresi "Can I borrow your ...? Sure! / Sorry, I am using it."',
      ],
      vocab: ['book', 'pen', 'pencil', 'eraser', 'ruler', 'bag', 'whiteboard', 'on', 'in', 'under', 'next to', 'can I borrow'],
      persiapan: ['Benda nyata dari kelas', 'Kartu preposisi bergambar'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Good morning! Look around. What do you see in this classroom? Name it in English!' },
          { tipe: 'instruksi', teks: 'Guru tunjuk benda di kelas secara acak — siswa tebak nama Inggrisnya.' },
          { tipe: 'audio',     teks: 'What is this? Is it a book? Is it a pen? What do you call this in English?' },
        ]},
        { fase: 'Inti', durasi: 30, langkah: [
          { tipe: 'instruksi', teks: 'Angkat setiap benda satu per satu. Ucapkan bersama.' },
          { tipe: 'audio',     teks: 'Book. Pen. Pencil. Eraser. Ruler. Bag. Whiteboard.' },
          { tipe: 'instruksi', teks: 'Ajarkan preposisi dengan benda nyata. Taruh buku di atas meja, di dalam tas, di bawah kursi.' },
          { tipe: 'audio',     teks: 'The book is on the table. The pen is in the bag. The eraser is under the chair.' },
          { tipe: 'instruksi', teks: 'Permainan: guru sembunyikan benda, siswa tebak lokasinya. [Where is the eraser? Is it on the table?]' },
          { tipe: 'instruksi', teks: 'Roleplay meminjam benda — latih dalam pasangan.' },
          { tipe: 'audio',     teks: 'Can I borrow your pencil? Sure! Here you go. Thank you! You are welcome.' },
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: buat kalimat 2 preposisi "The book is on the table next to my bag". Belum bisa: cukup 1 preposisi per kalimat.' },
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: skip roleplay, langsung review nama benda.' },
        ]},
        { fase: 'Penutup', durasi: 10, langkah: [
          { tipe: 'instruksi', teks: 'Guru taruh benda di posisi tertentu. Siswa buat kalimat preposisi.' },
          { tipe: 'audio',     teks: 'Excellent! You can talk about things in your classroom!' },
        ]},
        { fase: 'Penilaian', durasi: 6, langkah: [
          { tipe: 'instruksi', teks: 'Taruh benda di posisi berbeda. [Where is the ...?] — amati kalimat preposisi siswa.' },
          { tipe: 'instruksi', teks: 'Nilai Listening: memahami preposisi. Speaking: kalimat lokasi benda. Reading: baca nama benda di kartu.' },
          { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar on/under atau in/next to?' },
        ]},
      ],
    },

    // TP 15 ───────────────────────────────────────────────────────────────────
    {
      id: 'tp-15', nomor: 15, kelas: 2,
      nama: 'Feelings and Emotions', tema: 'Diri Sendiri dan Perasaan', jp: 16,
      deskripsi: 'Peserta didik belajar mengungkapkan perasaan dan emosi dasar dalam bahasa Inggris.',
      indikator: [
        'Peserta didik dapat menyebut perasaan dasar (happy, sad, angry, scared, tired, excited, bored) dengan lafal yang benar.',
        'Peserta didik dapat mengungkapkan perasaan menggunakan "I feel ..." dan "I am ..." serta menunjukkan ekspresi wajah yang sesuai.',
        'Peserta didik dapat menanyakan dan merespons "How do you feel?" dengan kalimat lengkap dan alasan sederhana.',
      ],
      vocab: ['happy', 'sad', 'angry', 'scared', 'tired', 'excited', 'bored', 'I feel', 'how do you feel', 'because'],
      persiapan: ['Kartu emosi bergambar ekspresi wajah', 'Cermin kecil (opsional)'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Good morning! How do you feel today? I feel very happy to see you all!' },
          { tipe: 'instruksi', teks: 'Tunjukkan ekspresi wajah berbeda tanpa kata — siswa tebak perasaannya.' },
          { tipe: 'audio',     teks: 'How do I feel? Look at my face! Happy? Sad? Angry?' },
        ]},
        { fase: 'Inti', durasi: 30, langkah: [
          { tipe: 'instruksi', teks: 'Tempel kartu emosi di papan. Tunjuk satu per satu — siswa buat ekspresi + ucapkan bersama.' },
          { tipe: 'audio',     teks: 'Happy. Sad. Angry. Scared. Tired. Excited. Bored.' },
          { tipe: 'instruksi', teks: 'Ajarkan "I feel ..." dan "because". Guru contohkan dengan cerita mini.' },
          { tipe: 'audio',     teks: 'I feel happy because I have good friends. I feel tired because I walked far today.' },
          { tipe: 'instruksi', teks: 'Permainan ekspresi: guru panggil perasaan, siswa buat ekspresi wajah + pose tubuh.' },
          { tipe: 'instruksi', teks: 'Tanya jawab berpasangan: [How do you feel today? Why?]' },
          { tipe: 'audio',     teks: 'How do you feel? I feel excited because today is English class!' },
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: buat 2 kalimat perasaan + alasan. Belum bisa: cukup "I feel ..." tanpa alasan.' },
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: skip tanya jawab berpasangan, guru tanya langsung ke beberapa siswa.' },
        ]},
        { fase: 'Penutup', durasi: 10, langkah: [
          { tipe: 'instruksi', teks: 'Tanya 3–4 siswa: bagaimana perasaan mereka sekarang dan mengapa.' },
          { tipe: 'audio',     teks: 'Wonderful! You can express your feelings in English now!' },
        ]},
        { fase: 'Penilaian', durasi: 6, langkah: [
          { tipe: 'instruksi', teks: 'Tunjuk kartu emosi. [How does this person feel? When do you feel like this?]' },
          { tipe: 'instruksi', teks: 'Nilai Listening: merespons "how do you feel". Speaking: kalimat perasaan + alasan. Reading: baca nama emosi di kartu.' },
          { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar scared/angry atau tired/bored?' },
        ]},
      ],
    },

    // TP 16 ───────────────────────────────────────────────────────────────────
    {
      id: 'tp-16', nomor: 16, kelas: 2,
      nama: 'Simple Story Retelling', tema: 'Literasi Awal', jp: 18,
      deskripsi: 'Peserta didik menyimak cerita bergambar sederhana dan menceritakan kembali menggunakan kosakata yang sudah dipelajari.',
      indikator: [
        'Peserta didik dapat memahami cerita bergambar sederhana dan menjawab pertanyaan "who, what, where" tentang isi cerita.',
        'Peserta didik dapat menceritakan kembali isi cerita dalam 3–4 kalimat menggunakan kata urutan (first, then, after that, finally).',
        'Peserta didik dapat mengidentifikasi perasaan tokoh cerita dan mengaitkannya dengan pengalaman pribadi.',
      ],
      vocab: ['story', 'character', 'first', 'then', 'after that', 'finally', 'who', 'what', 'where', 'because', 'I think'],
      persiapan: ['Buku cerita bergambar sederhana (3–6 halaman)', 'Kartu urutan cerita'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Today we have a story! Are you ready to listen? Sit comfortably and listen carefully!' },
          { tipe: 'instruksi', teks: 'Tunjukkan sampul buku. Tanya siswa: siapa yang ada di gambar? Apa yang akan terjadi?' },
          { tipe: 'audio',     teks: 'Look at the cover. What do you see? Who is in the story? What do you think will happen?' },
        ]},
        { fase: 'Inti', durasi: 40, langkah: [
          { tipe: 'instruksi', teks: 'Baca cerita dengan ekspresi — tunjukkan gambar di setiap halaman. Berhenti di tengah untuk tanya prediksi.' },
          { tipe: 'audio',     teks: 'Once upon a time... What do you think happens next?' },
          { tipe: 'instruksi', teks: 'Selesai membaca. Tanya pemahaman: [Who is in the story? What happened? Where did the story happen?]' },
          { tipe: 'instruksi', teks: 'Ajarkan kata urutan. Siswa susun kartu urutan sesuai isi cerita.' },
          { tipe: 'audio',     teks: 'First... Then... After that... Finally...' },
          { tipe: 'instruksi', teks: 'Siswa ceritakan kembali dalam pasangan menggunakan kartu urutan.' },
          { tipe: 'instruksi', teks: 'Tanya perasaan tokoh dan kaitkan dengan pengalaman siswa. [How did the character feel? Have you ever felt like that?]' },
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: ceritakan kembali 4 kalimat tanpa kartu. Belum bisa: boleh melihat kartu + gambar, 2 kalimat sudah cukup.' },
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: skip retelling berpasangan, langsung guru tanya jawab perasaan tokoh.' },
        ]},
        { fase: 'Penutup', durasi: 4, langkah: [
          { tipe: 'instruksi', teks: 'Tanya siswa: bagian cerita mana yang paling mereka suka dan mengapa.' },
          { tipe: 'audio',     teks: 'What a great story! You are amazing listeners and storytellers!' },
        ]},
        { fase: 'Penilaian', durasi: 4, langkah: [
          { tipe: 'instruksi', teks: 'Minta 2–3 siswa ceritakan kembali isi cerita dalam 2 kalimat.' },
          { tipe: 'instruksi', teks: 'Nilai Listening: memahami isi cerita. Speaking: retelling dengan kata urutan. Reading: membaca kartu urutan.' },
          { tipe: 'instruksi', teks: 'Catat: siapa yang bisa menceritakan kembali secara mandiri? Siapa yang masih butuh bantuan gambar?' },
        ]},
      ],
    },

    // TP 17 ───────────────────────────────────────────────────────────────────
    {
      id: 'tp-17', nomor: 17, kelas: 2,
      nama: 'My Hobbies', tema: 'Diri Sendiri dan Perasaan', jp: 18,
      deskripsi: 'Peserta didik memperkenalkan hobi dan aktivitas waktu luang menggunakan kalimat sederhana.',
      indikator: [
        'Peserta didik dapat menyebut nama hobi (reading, drawing, singing, dancing, playing football, cooking, swimming, cycling) menggunakan gerund dengan benar.',
        'Peserta didik dapat mengungkapkan hobi dan alasan menggunakan "I like ... because it is fun / interesting."',
        'Peserta didik dapat menanyakan dan merespons "What do you like to do?" dalam percakapan sederhana.',
      ],
      vocab: ['reading', 'drawing', 'singing', 'dancing', 'playing football', 'cooking', 'swimming', 'cycling', 'I like', 'because', 'fun', 'interesting'],
      persiapan: ['Kartu gambar hobi', 'Tabel survei kelas'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Hello class! What do you do in your free time? Today we talk about hobbies!' },
          { tipe: 'instruksi', teks: 'Guru ceritakan hobi sendiri sebagai model — dengan ekspresi antusias.' },
          { tipe: 'audio',     teks: 'I like reading. I like cooking. Reading is fun! Cooking is interesting!' },
        ]},
        { fase: 'Inti', durasi: 35, langkah: [
          { tipe: 'instruksi', teks: 'Perkenalkan kartu hobi satu per satu. Siswa ucapkan bersama + tiru gerakannya.' },
          { tipe: 'audio',     teks: 'Reading. Drawing. Singing. Dancing. Playing football. Cooking. Swimming. Cycling.' },
          { tipe: 'instruksi', teks: 'Latihan struktur "I like + gerund". Tulis di papan, ucapkan bersama.' },
          { tipe: 'audio',     teks: 'I like reading. I like drawing. I like singing. I like playing football.' },
          { tipe: 'instruksi', teks: 'Tambahkan alasan. Hanya dua pilihan: fun atau interesting.' },
          { tipe: 'audio',     teks: 'I like swimming because it is fun! I like reading because it is interesting!' },
          { tipe: 'instruksi', teks: 'Survei kelas: buat tabel di papan. Tanya satu per satu. [Raise your hand — who likes singing?] Hitung dan tulis angkanya.' },
          { tipe: 'audio',     teks: 'What do you like to do? I like dancing! What about you? I like playing football!' },
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan "... with my friends / with my family". Belum bisa: cukup "I like ... because it is fun" tanpa elaborasi.' },
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati survei, langsung 3–4 siswa perkenalkan hobi di penutup.' },
        ]},
        { fase: 'Penutup', durasi: 7, langkah: [
          { tipe: 'instruksi', teks: 'Setiap siswa perkenalkan hobi dalam 2 kalimat. Yang mau sukarela dulu.' },
          { tipe: 'audio',     teks: 'My name is Budi. I like drawing because it is fun!' },
          { tipe: 'audio',     teks: 'Fantastic! You all have wonderful hobbies!' },
        ]},
        { fase: 'Penilaian', durasi: 6, langkah: [
          { tipe: 'instruksi', teks: 'Tunjuk kartu hobi ke beberapa siswa. [Do you like this? Why?] — amati gerund dan alasan yang mereka gunakan.' },
          { tipe: 'instruksi', teks: 'Nilai Listening: paham "what do you like". Speaking: kalimat hobi + alasan. Reading: baca kartu nama hobi.' },
          { tipe: 'instruksi', teks: 'Catat: siapa yang kesulitan menggunakan gerund (reading, swimming, cycling bukan read, swim, cycle)?' },
        ]},
      ],
    },

    // ─── TP 18 — REVISI v3 ───────────────────────────────────────────────────
    {
      id       : 'tp-18',
      nomor    : 18,
      kelas    : 2,
      nama     : 'Integrative Project — My World',
      tema     : 'Proyek Integratif',
      jp       : 18,
      deskripsi: `TP penutup Fase A. Peserta didik mengintegrasikan seluruh
        kemampuan yang telah dipelajari dalam proyek presentasi "My World".`,
      indikator: [
        'Peserta didik dapat membuat poster atau buku mini bergambar yang menampilkan informasi diri, keluarga, rumah, dan hobi menggunakan kalimat-kalimat sederhana dari TP 1–17.',
        'Peserta didik dapat mempresentasikan "My World" di depan kelas dalam 3–5 kalimat dengan lafal yang jelas dan kepercayaan diri.',
        'Peserta didik dapat merespons pertanyaan sederhana dari teman atau guru tentang isi presentasi mereka.',
      ],
      vocab: ['my world', 'this is me', 'my family', 'my house', 'I like',
              'every day', 'my hobby', 'present', 'poster', 'project'],
      persiapan: ['Poster/buku mini siswa (PR sebelumnya)', 'Kertas untuk siswa yang belum siap'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',         teks: 'Hello everyone! Today is a special day. You will present your My World project!' },
            { tipe: 'instruksi',     teks: 'Tenangkan siswa yang gugup. Sampaikan bahwa hari ini tidak ada yang salah — semua usaha dihargai.', pm: 'mindful' },
            { tipe: 'instruksi',     teks: 'Tunjukkan template presentasi di papan: nama → keluarga → rumah → hobi. Siswa boleh ikuti urutan ini atau bicara tentang apa yang mereka ingat.', pm: 'meaningful' },
            { tipe: 'audio',         teks: 'Hello! My name is ... I am ... years old. I have a ... family. I live in a house. I like ... because it is fun!' },
            { tipe: 'respons_siswa', teks: 'Hello! My name is ... I am ... years old!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 40,
          langkah: [
            { tipe: 'instruksi',     teks: 'Beri siswa 10 menit memeriksa poster/buku mini. Guru keliling membantu yang belum siap — bantu tulis kalimat sederhana.', pm: 'mindful' },
            { tipe: 'instruksi',     teks: 'Mulai presentasi: panggil siswa yang mengangkat tangan maju duluan. Tidak ada paksaan.', pm: 'joyful' },
            { tipe: 'audio',         teks: 'Please come to the front. Tell us about your world!' },
            { tipe: 'respons_siswa', teks: 'Hello! My name is ... My family has ... I live in ... I like ... because ...' },
            { tipe: 'instruksi',     teks: 'Setelah tiap presentasi: ajukan SATU pertanyaan ringan — pilih yang mudah untuk siswa itu.', pm: 'meaningful' },
            { tipe: 'audio',         teks: 'Do you have a sister? What is your favourite colour? What do you eat every morning?' },
            { tipe: 'respons_siswa', teks: 'Yes, I have a sister! / No, I do not. My favourite colour is ...' },
            { tipe: 'instruksi',     teks: 'Kelas bertepuk tangan meriah setelah tiap presentasi.', pm: 'joyful' },
            { tipe: 'diferensiasi',  sudah: 'Presentasi tanpa melihat catatan, jawab 2 pertanyaan dari teman.', belum: 'Boleh melihat poster, guru bantu mulai kalimat pertama — tidak ada siswa yang tidak tampil.' },
            { tipe: 'darurat',       teks: 'Jika masih ada siswa yang belum presentasi dan waktu hampir habis: beri pilihan presentasi singkat 1 kalimat saja sudah cukup. Tidak ada siswa yang tidak tampil.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 4,
          langkah: [
            { tipe: 'instruksi',     teks: 'Rayakan bersama. Semua berdiri. Ini hari terakhir Fase A Bahasa Inggris.', pm: 'joyful' },
            { tipe: 'audio',         teks: 'Congratulations, everyone! You have finished Phase A English! You are amazing!' },
            { tipe: 'respons_siswa', teks: 'Thank you, teacher! We did it!' },
            { tipe: 'instruksi',     teks: 'Minta siswa refleksi: satu hal yang paling mereka ingat dari pelajaran Bahasa Inggris selama Fase A.', pm: 'mindful' },
            { tipe: 'audio',         teks: 'Keep speaking English every day. Goodbye and good luck!' },
            { tipe: 'respons_siswa', teks: 'Goodbye, teacher! Thank you!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 4,
          langkah: [
            { tipe: 'instruksi', teks: 'Nilai berdasarkan presentasi yang sudah berlangsung. Tidak perlu tes tambahan — presentasi sudah cukup sebagai bukti belajar.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: merespons pertanyaan audience. Speaking: presentasi 3–5 kalimat dengan lafal jelas. Reading: baca teks di poster/buku mini.' },
            { tipe: 'instruksi', teks: 'Catatan akhir Fase A: tulis satu kalimat positif tentang perkembangan setiap siswa untuk laporan.' },
          ],
        },
      ],
    },

  ],

};

(function validateFaseA() {
  const { tujuan_pembelajaran: tps, meta } = FASE_A;
  if (!Array.isArray(tps)) throw new Error('[FLAF] fase-a.js: tujuan_pembelajaran harus berupa array');
  if (tps.length !== meta.total_tp) throw new Error(`[FLAF] fase-a.js: jumlah TP harus ${meta.total_tp}, ditemukan ${tps.length}`);
  tps.forEach((tp, i) => {
    const num = i + 1;
    if (!tp.id)        throw new Error(`[FLAF] fase-a.js: TP ${num} tidak punya id`);
    if (!tp.nama)      throw new Error(`[FLAF] fase-a.js: TP ${num} tidak punya nama`);
    if (typeof tp.jp !== 'number') throw new Error(`[FLAF] fase-a.js: TP ${num} jp harus number`);
    if (!Array.isArray(tp.indikator) || tp.indikator.length !== 3)
      throw new Error(`[FLAF] fase-a.js: TP ${num} harus punya tepat 3 indikator`);
    if (!Array.isArray(tp.vocab) || tp.vocab.length === 0)
      throw new Error(`[FLAF] fase-a.js: TP ${num} vocab tidak boleh kosong`);
    if (!Array.isArray(tp.skenario) || tp.skenario.length === 0)
      throw new Error(`[FLAF] fase-a.js: TP ${num} skenario tidak boleh kosong`);
  });
  const totalJP = tps.reduce((sum, tp) => sum + tp.jp, 0);
  if (totalJP !== meta.total_jp)
    console.warn(`[FLAF] fase-a.js: total JP ${totalJP} tidak sama dengan meta.total_jp ${meta.total_jp}`);
})();

export default FASE_A;
