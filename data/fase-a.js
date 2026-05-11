/**
 * =============================================================
 * FLAF — DATA KURIKULUM FASE A
 * File: data/fase-a.js
 * =============================================================
 * Terakhir direvisi: Mei 2026 — Revisi skenario v2
 * Standar penulisan:
 *   - Setiap langkah 'instruksi' menyertakan kalimat yang bisa
 *     langsung diucapkan guru (dalam tanda kurung siku [])
 *   - Diferensiasi: setiap fase Inti punya catatan Sudah bisa / Belum bisa
 *   - Fleksibilitas: ada langkah darurat jika waktu tersisa ≤10 menit
 * =============================================================
 */

const FASE_A = {

  meta: {
    fase          : 'A',
    kelas         : '1 & 2 SD',
    mata_pelajaran: 'Bahasa Inggris',
    data_version  : '2026-05-v2',
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

    // ─── TP 1 ───────────────────────────────────────────────────────────────
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
            { tipe: 'instruksi', teks: 'Berdiri di pintu kelas, sambut siswa satu per satu. [Good morning! Come in, come in!]' },
            { tipe: 'audio',     teks: 'Good morning, everyone! How are you today?' },
            { tipe: 'instruksi', teks: 'Tunggu siswa menjawab. Kalau diam, bantu mereka. [Say after me — I am fine, thank you!]' },
            { tipe: 'audio',     teks: 'I am fine, thank you. And you?' },
            { tipe: 'instruksi', teks: 'Tunjukkan kartu Pagi/Siang/Sore. Tanya dengan menunjuk kartu. [What time is this? Morning? Afternoon?]' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Tempel kartu 4 salam di papan. Tunjuk satu per satu, ucapkan bersama. [Everyone say: Good morning!]' },
            { tipe: 'audio',     teks: 'Good morning. Good afternoon. Good evening. Good night.' },
            { tipe: 'instruksi', teks: 'Chant dengan tepuk tangan. Guru mulai, siswa ikuti setelah putaran pertama. [Clap with me!]' },
            { tipe: 'audio',     teks: 'Hello hello, how are you? I am fine, thank you!' },
            { tipe: 'instruksi', teks: 'Permainan kartu: guru angkat kartu waktu, siswa berlomba ucapkan salam yang tepat. [Who is first? Ready?]' },
            { tipe: 'instruksi', teks: 'Ajarkan perpisahan: goodbye, bye, see you. [Now, how do we say goodbye in English?]' },
            { tipe: 'audio',     teks: 'Goodbye! Bye! See you tomorrow!' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: minta siswa buat kalimat salam sendiri, beda waktu. Belum bisa: bimbing satu per satu dengan kartu, tidak perlu buru-buru.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: langsung lompat ke latihan berpasangan — abaikan kartu berlomba. [Find a partner, greet each other!]' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Tanya 3–4 siswa secara acak, tunjuk kartu waktu. [What greeting do we use in the morning?]' },
            { tipe: 'instruksi', teks: 'Tutup kelas bersama. Guru mulai, siswa ikut. [Everyone, say goodbye together!]' },
            { tipe: 'audio',     teks: 'See you next time. Goodbye, everyone!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Sambil siswa berkemas, ucapkan salam ke beberapa siswa satu per satu. Amati apakah mereka merespons dengan tepat tanpa dibantu. [Good morning, Ahmad — apa yang dia ucapkan?]' },
            { tipe: 'instruksi', teks: 'Nilai Listening: merespons salam dengan kata yang benar. Speaking: lafal terdengar jelas. Reading: bisa baca kartu salam.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang masih diam saat disapa? Siapa yang mencampur morning/afternoon?' },
          ],
        },
      ],
    },

    // ─── TP 2 ───────────────────────────────────────────────────────────────
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
            { tipe: 'audio',     teks: 'Good morning, class! Let us learn how to introduce ourselves today!' },
            { tipe: 'instruksi', teks: 'Guru perkenalkan diri sebagai model. Tulis nama di papan sambil berbicara. [Watch me first. Hello! My name is ...]' },
            { tipe: 'audio',     teks: 'Hello! My name is ... I am a teacher. Nice to meet you!' },
            { tipe: 'instruksi', teks: 'Tanya kelas. [Everyone — what is my name? Louder please!]' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Tulis di papan: My name is ___ . Tunjuk papan, ucapkan bersama. [Read with me!]' },
            { tipe: 'audio',     teks: 'My name is Budi. My name is Sari. My name is Andi.' },
            { tipe: 'instruksi', teks: 'Bagikan kertas name tag. Siswa tulis nama sendiri. Bantu yang belum bisa menulis. [Write your name here — just your name, that is okay!]' },
            { tipe: 'instruksi', teks: 'Ajarkan usia. Tunjuk angka di papan, ucapkan bersama. [How old are you? I am six years old!]' },
            { tipe: 'audio',     teks: 'How old are you? I am six years old. I am seven years old.' },
            { tipe: 'instruksi', teks: 'Permainan: siswa berdiri, berjalan 2 menit, perkenalkan diri ke 3 teman berbeda. Guru pantau dan bantu. [Walk and talk — go!]' },
            { tipe: 'audio',     teks: 'Hello! My name is ... I am ... years old. Nice to meet you!' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: dorong menambahkan "I am from ..." atau "I like ...". Belum bisa: boleh hanya nama saja, usia belakangan.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: batalkan permainan jalan, langsung latihan berpasangan di tempat duduk masing-masing.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Panggil 3 siswa maju. Beri isyarat dengan jempol — mereka tahu saatnya tampil. [Come to the front — introduce yourself!]' },
            { tipe: 'instruksi', teks: 'Setelah tiap penampilan, ajak kelas bertepuk tangan. [Let us clap for ...!]' },
            { tipe: 'audio',     teks: 'Great job, everyone! You can introduce yourself in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Sambil siswa berkemas, dekati 4–5 siswa dan tanya langsung. [What is your name? How old are you?] — amati jawaban spontan mereka.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: merespons pertanyaan nama/usia. Speaking: mengucapkan nama sendiri dengan jelas. Reading: bisa baca name tag.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang hanya diam? Siapa yang menjawab dalam bahasa Indonesia?' },
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
            { tipe: 'instruksi', teks: 'Perkenalkan kartu instruksi satu per satu. Tunjuk gambar dulu, lalu ucapkan. [What is this? Listen. Listen!]' },
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
      tema     : 'Angka & Matematika Dasar',
      jp       : 18,
      deskripsi: `Peserta didik belajar menyebut, membaca, dan menulis angka 1–20
        dalam bahasa Inggris. Angka dikontekstualisasikan dalam situasi nyata:
        menghitung benda, usia, dan urutan.`,
      indikator: [
        'Peserta didik dapat menyebut dan mengurutkan angka 1–20 dalam bahasa Inggris secara lisan dengan lafal yang benar.',
        'Peserta didik dapat menghubungkan angka (numeral) dengan kata (number word) untuk angka 1–20 dalam aktivitas mencocokkan gambar.',
        'Peserta didik dapat menggunakan angka 1–20 dalam konteks nyata: menghitung benda di kelas, menyebut usia, dan menjawab pertanyaan "How many?"',
      ],
      vocab: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
              'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
              'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
              'how many', 'count'],
      persiapan: ['Kartu angka 1–20', 'Benda-benda di kelas untuk dihitung'],
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
      persiapan: ['Kartu bentuk geometri', 'Spidol warna untuk gambar di papan'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello everyone! Look around the classroom. Do you see any shapes?' },
            { tipe: 'instruksi', teks: 'Tunjuk benda berbentuk bulat di kelas — jam, piring, koin. [What shape is this? A circle!]' },
            { tipe: 'audio',     teks: 'This is a circle. This is a square. This is a triangle.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan kartu bentuk satu per satu. Siswa gambar bentuk di udara dengan jari saat mendengar nama. [Draw in the air!]' },
            { tipe: 'audio',     teks: 'Circle. Square. Triangle. Rectangle. Star. Heart.' },
            { tipe: 'instruksi', teks: 'Permainan tebak: guru gambar bentuk di papan secara perlahan — setengah gambar dulu, lalu minta siswa tebak. [What shape is this?]' },
            { tipe: 'instruksi', teks: 'Latihan kombinasi warna + bentuk. Tempel dua kartu berdampingan. [A RED circle. A BLUE square. Say it!]' },
            { tipe: 'audio',     teks: 'A red circle. A blue square. A yellow triangle. A green rectangle.' },
            { tipe: 'instruksi', teks: 'Siswa gambar 3 bentuk pilihan mereka, warnai, lalu tunjukkan ke teman sebelah. [Show your friend — what shapes do you have?]' },
            { tipe: 'audio',     teks: 'I have a red circle, a blue square, and a yellow star!' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: minta deskripsikan dengan "I have a ... and a ..." dua bentuk sekaligus. Belum bisa: cukup satu bentuk + satu warna.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati aktivitas menggambar, langsung identifikasi benda di kelas.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjuk benda di kelas: papan tulis, buku, jam, jendela. Tanya siswa bentuknya. [What shape is the board?]' },
            { tipe: 'audio',     teks: 'The board is a rectangle. The clock is a circle. The window is a square.' },
            { tipe: 'audio',     teks: 'Excellent! You can name shapes in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu bentuk acak ke beberapa siswa. [What shape is this? What colour?] — amati respons natural.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: paham "what shape is it". Speaking: lafal nama bentuk. Reading: baca label bentuk.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang masih bingung square/rectangle?' },
          ],
        },
      ],
    },

    // ─── TP 7 ───────────────────────────────────────────────────────────────
    {
      id       : 'tp-07',
      nomor    : 7,
      kelas    : 1,
      nama     : 'My Family',
      tema     : 'Keluarga & Identitas',
      jp       : 18,
      deskripsi: `Peserta didik belajar menyebut anggota keluarga inti dan
        memperkenalkan keluarga mereka kepada teman menggunakan kalimat sederhana.`,
      indikator: [
        'Peserta didik dapat menyebut anggota keluarga inti (father, mother, brother, sister, grandfather, grandmother) dengan lafal yang benar.',
        'Peserta didik dapat memperkenalkan anggota keluarga menggunakan struktur "This is my ..." dalam aktivitas show and tell dengan foto/gambar.',
        'Peserta didik dapat merespons pertanyaan sederhana tentang keluarga: "Do you have a brother/sister?", "How many people in your family?"',
      ],
      vocab: ['father', 'mother', 'brother', 'sister', 'grandfather',
              'grandmother', 'family', 'this is my', 'I have', 'parents'],
      persiapan: ['Gambar pohon keluarga', 'Foto keluarga siswa (PR sebelumnya)'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Do you love your family? Today we talk about family!' },
            { tipe: 'instruksi', teks: 'Tunjukkan gambar pohon keluarga. Tunjuk setiap anggota, ucapkan bersama. [Who is this? Father!]' },
            { tipe: 'audio',     teks: 'This is a family. Father, mother, brother, sister. My family!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan kartu anggota keluarga satu per satu. Ucapkan, siswa tirukan. [Say after me: Father!]' },
            { tipe: 'audio',     teks: 'Father. Mother. Brother. Sister. Grandfather. Grandmother.' },
            { tipe: 'instruksi', teks: 'Siswa siapkan foto/gambar keluarga. Yang tidak bawa, bantu gambar pohon keluarga sederhana sekarang. [No photo? No problem — draw your family!]' },
            { tipe: 'audio',     teks: 'This is my father. This is my mother. This is my brother. I love my family!' },
            { tipe: 'instruksi', teks: 'Show and tell berpasangan: siswa perkenalkan keluarga ke teman sebelahnya. Guru keliling membantu. [Tell your friend about your family!]' },
            { tipe: 'instruksi', teks: 'Latihan pertanyaan-jawaban: guru tanya ke kelas, siswa jawab bersama dulu, lalu individual. [Do you have a sister? Raise your hand if yes!]' },
            { tipe: 'audio',     teks: 'Do you have a sister? Yes, I have a sister. No, I do not have a sister.' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan "My father is a ..." (pekerjaan). Belum bisa: cukup "This is my father" saja.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati latihan Q&A, langsung 2 siswa presentasi di penutup.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Panggil 2 siswa maju. Beri kebebasan memilih — yang mau maju angkat tangan. [Who wants to share their family?]' },
            { tipe: 'audio',     teks: 'Family is important. We love our family. I love you, family!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjuk kartu anggota keluarga ke beberapa siswa. [Who is this?] — catat spontanitas jawaban.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: merespons pertanyaan "do you have a...". Speaking: lafal anggota keluarga. Reading: baca kartu anggota keluarga.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang bingung grandfather/grandmother?' },
          ],
        },
      ],
    },

    // ─── TP 8 ───────────────────────────────────────────────────────────────
    {
      id       : 'tp-08',
      nomor    : 8,
      kelas    : 1,
      nama     : 'Parts of the Body',
      tema     : 'Keluarga & Identitas',
      jp       : 16,
      deskripsi: `Peserta didik mengenal nama-nama anggota tubuh dalam bahasa
        Inggris melalui lagu, chant, dan Total Physical Response (TPR).`,
      indikator: [
        'Peserta didik dapat menyebut nama anggota tubuh utama (head, eyes, ears, nose, mouth, hands, fingers, legs, feet) dengan menunjuk bagian tubuh yang benar.',
        'Peserta didik dapat menyanyikan lagu "Head, Shoulders, Knees and Toes" dengan gerakan yang koordinatif dan lafal yang jelas.',
        'Peserta didik dapat merespons instruksi "Touch your ..." dan "Show me your ..." dengan tindakan yang benar dalam permainan kelas.',
      ],
      vocab: ['head', 'shoulders', 'knees', 'toes', 'eyes', 'ears',
              'nose', 'mouth', 'hair', 'hands', 'fingers', 'legs', 'feet', 'body'],
      persiapan: ['Poster tubuh manusia', 'Lagu Head Shoulders Knees and Toes'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Let us sing and move our body today!' },
            { tipe: 'instruksi', teks: 'Langsung nyanyikan lagu — jangan jelaskan dulu. Biarkan siswa mengamati gerakan guru. [Watch me first!]' },
            { tipe: 'audio',     teks: 'Head, shoulders, knees and toes, knees and toes! Eyes and ears and mouth and nose, head shoulders knees and toes!' },
            { tipe: 'instruksi', teks: 'Ulangi bersama. Normal dulu, lalu cepat. Boleh tertawa kalau kepayahan — itu tandanya berhasil.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan poster. Tunjuk bagian tubuh satu per satu. Siswa tunjuk tubuh mereka sendiri dan ucapkan. [Touch your head — head!]' },
            { tipe: 'audio',     teks: 'Head. Eyes. Ears. Nose. Mouth. Shoulders. Hands. Fingers. Legs. Feet.' },
            { tipe: 'instruksi', teks: 'Permainan Touch Your Body: ucapkan instruksi makin cepat. Sesekali sengaja salah untuk test — [Touch your nose!] sambil menyentuh telinga. Siapa yang ikut-ikutan salah?' },
            { tipe: 'audio',     teks: 'Touch your nose! Touch your ears! Show me your hands! Touch your head!' },
            { tipe: 'instruksi', teks: 'Siswa gambar wajah sederhana di kertas. Beri label: eye, nose, mouth, ear. Bantu yang kesulitan menulis. [Draw a face — label the parts!]' },
            { tipe: 'instruksi', teks: 'Berpasangan: tanya-jawab sambil menunjuk. [Where is your nose? Here! Show me!]' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: buat kalimat "I have two eyes and one nose". Belum bisa: cukup menunjuk dan menyebut nama bagian tubuh.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati menggambar, langsung nyanyikan lagu sekali lagi.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Nyanyikan "Head Shoulders Knees and Toes" sekali lagi — kali ini paling cepat yang bisa. [Super fast version!]' },
            { tipe: 'audio',     teks: 'Head, shoulders, knees and toes, knees and toes!' },
            { tipe: 'audio',     teks: 'Amazing! You know all parts of the body in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Ucapkan "Touch your ..." ke beberapa siswa secara individual saat mereka berkemas. Amati respons natural.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: respons "touch your" benar. Speaking: hafal lirik lagu dengan gerakan. Reading: baca label poster tubuh.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang belum hafal shoulders/fingers/toes? Latihan berulang akan membantu.' },
          ],
        },
      ],
    },

    // ─── TP 9 ───────────────────────────────────────────────────────────────
    {
      id       : 'tp-09',
      nomor    : 9,
      kelas    : 1,
      nama     : 'Animals Around Us',
      tema     : 'Alam & Lingkungan',
      jp       : 18,
      deskripsi: `Peserta didik mengenal nama hewan yang akrab di lingkungan
        sehari-hari dan dapat mendeskripsikan hewan dengan kalimat sangat sederhana.`,
      indikator: [
        'Peserta didik dapat menyebut nama hewan umum (cat, dog, bird, fish, rabbit, cow, chicken, duck, butterfly, ant) dengan lafal yang benar.',
        'Peserta didik dapat meniru suara hewan dan menghubungkan suara dengan nama hewan dalam aktivitas tebak-tebakan.',
        'Peserta didik dapat mendeskripsikan hewan sederhana: "The cat is black", "The bird can fly", menggunakan kosakata warna dan kemampuan hewan.',
      ],
      vocab: ['cat', 'dog', 'bird', 'fish', 'rabbit', 'cow', 'chicken',
              'duck', 'butterfly', 'ant', 'elephant', 'animal', 'can fly',
              'can swim', 'can run'],
      persiapan: ['Kartu gambar hewan', 'Lagu Old MacDonald Had a Farm'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Good morning class! Do you like animals? What is your favourite animal?' },
            { tipe: 'instruksi', teks: 'Tiru suara hewan tanpa sebut nama dulu. Siswa tebak hewannya. [What animal makes this sound?] Meong... Guk guk... Kukuruyuk...' },
            { tipe: 'audio',     teks: 'Cat. Dog. Chicken. What sound does a cat make? Meow!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu gambar hewan satu per satu. Siswa ucapkan nama dan tiru suaranya bersama. [What animal? What sound?]' },
            { tipe: 'audio',     teks: 'Cat. Dog. Bird. Fish. Rabbit. Cow. Chicken. Duck. Butterfly. Ant.' },
            { tipe: 'instruksi', teks: 'Permainan tebak: guru tiru suara, siswa tebak nama hewannya. Poin untuk yang pertama benar. [Listen carefully — what animal?]' },
            { tipe: 'instruksi', teks: 'Ajarkan kemampuan hewan. Tunjuk kartu, ucapkan bersama. [Can a bird fly? Yes — the bird CAN fly!]' },
            { tipe: 'audio',     teks: 'The bird can fly. The fish can swim. The dog can run. The duck can swim and fly!' },
            { tipe: 'instruksi', teks: 'Berpasangan: satu tanya, satu jawab. Gantian setelah 2 pertanyaan. [Can a cat swim? No, a cat cannot swim!]' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: deskripsikan warna + kemampuan ("The black cat can run"). Belum bisa: cukup nama hewan dan suaranya.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati latihan berpasangan, langsung ke lagu Old MacDonald.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Nyanyikan "Old MacDonald Had a Farm". Siswa pilih hewan untuk dimasukkan ke lagu. [Which animal? A cow? Let us sing!]' },
            { tipe: 'audio',     teks: 'Old MacDonald had a farm, E-I-E-I-O! And on his farm he had a cow, E-I-E-I-O!' },
            { tipe: 'audio',     teks: 'Great! You know so many animals in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu hewan ke beberapa siswa. [What animal? What can it do?] — amati respons langsung.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: paham "can/cannot". Speaking: lafal nama hewan jelas. Reading: baca nama hewan di kartu.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang masih sulit mengucapkan butterfly/elephant? Latihan berulang dengan lagu membantu.' },
          ],
        },
      ],
    },

    // ─── TP 10 ──────────────────────────────────────────────────────────────
    {
      id       : 'tp-10',
      nomor    : 10,
      kelas    : 2,
      nama     : 'Food & Drinks',
      tema     : 'Alam & Lingkungan',
      jp       : 18,
      deskripsi: `Peserta didik mengenal nama makanan dan minuman dalam bahasa
        Inggris dan dapat menyatakan kesukaan sederhana menggunakan I like / I don't like.`,
      indikator: [
        'Peserta didik dapat menyebut nama makanan dan minuman umum (rice, noodles, bread, egg, milk, water, juice, fruit) dengan lafal yang benar.',
        'Peserta didik dapat menyatakan kesukaan menggunakan "I like ..." dan "I don\'t like ..." serta merespons pertanyaan "Do you like ...?"',
        'Peserta didik dapat memesan makanan/minuman sederhana dalam bermain peran warung atau kantin sekolah.',
      ],
      vocab: ['rice', 'noodles', 'bread', 'egg', 'milk', 'water', 'juice',
              'fruit', 'apple', 'banana', 'I like', "I don't like",
              'I want', 'can I have', 'food', 'drink'],
      persiapan: ['Kartu gambar makanan dan minuman', 'Properti bermain peran kantin'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Are you hungry? What do you like to eat? Today we learn food and drinks!' },
            { tipe: 'instruksi', teks: 'Tunjukkan kartu makanan yang akrab: nasi, mie, telur. [Do you know these in English?] Tunggu jawaban siswa.' },
            { tipe: 'audio',     teks: 'Rice. Noodles. Bread. Egg. Fruit. Milk. Water. Juice.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan kartu makanan. Siswa ucapkan bersama. [What is this? Say it!]' },
            { tipe: 'audio',     teks: 'I like rice. I like noodles. I like milk. I like juice.' },
            { tipe: 'instruksi', teks: 'Latihan I like / I do not like. Guru contohkan dengan tangan — ibu jari naik untuk like, turun untuk do not like. [Thumbs up or thumbs down!]' },
            { tipe: 'audio',     teks: 'Do you like rice? Yes, I like rice! Do you like milk? No, I do not like milk.' },
            { tipe: 'instruksi', teks: 'Bermain peran kantin: susun meja jadi "warung". Guru jadi penjual dulu sebagai model. [I am the seller — come and buy!]' },
            { tipe: 'audio',     teks: 'Can I have some rice please? Here you are! Thank you! You are welcome!' },
            { tipe: 'instruksi', teks: 'Gantian: siswa jadi penjual dan pembeli. Guru keliling membantu yang belum bisa. [Your turn — you are the seller!]' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan jumlah "Can I have TWO eggs please?" Belum bisa: cukup "I like rice" dan "Can I have rice?" tanpa please.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati bermain peran, siswa cukup sebutkan 2 makanan yang disukai dan 1 yang tidak.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Setiap siswa sebutkan: 1 makanan yang disukai dan 1 yang tidak. Boleh hanya beberapa siswa jika waktu terbatas. [I like ... I do not like ...]' },
            { tipe: 'audio',     teks: 'I like rice and fruit. I do not like milk.' },
            { tipe: 'audio',     teks: 'Wonderful! Now you can talk about food in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjuk kartu makanan ke beberapa siswa. [Do you like this?] — amati apakah mereka menjawab dengan kalimat atau hanya satu kata.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: paham "do you like". Speaking: kalimat like/dislike. Reading: baca nama makanan di kartu.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang masih bingung struktur "I do not like"?' },
          ],
        },
      ],
    },

    // ─── TP 11 ──────────────────────────────────────────────────────────────
    {
      id       : 'tp-11',
      nomor    : 11,
      kelas    : 2,
      nama     : 'Classroom Objects',
      tema     : 'Sekolah & Kelas',
      jp       : 16,
      deskripsi: `Peserta didik mengenal nama benda-benda di dalam kelas dan
        dapat menyatakan kepemilikan menggunakan my dan your.`,
      indikator: [
        'Peserta didik dapat menyebut nama benda di kelas (book, pencil, pen, ruler, eraser, bag, chair, table, board, crayon) dengan lafal yang benar.',
        'Peserta didik dapat menyatakan kepemilikan menggunakan "This is my ..." dan "That is your ..." serta merespons "Whose is this?"',
        'Peserta didik dapat meminta dan memberi benda menggunakan "Can I borrow your ...?", "Here you are", "Thank you".',
      ],
      vocab: ['book', 'pencil', 'pen', 'ruler', 'eraser', 'bag', 'chair',
              'table', 'board', 'crayon', 'scissors', 'glue', 'my', 'your',
              'borrow', 'here you are', 'thank you'],
      persiapan: ['Label nama benda kelas (buku/pensil/penggaris)', 'Benda-benda di meja'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Look at your desk. What do you see? Let us name them in English!' },
            { tipe: 'instruksi', teks: 'Angkat benda dari meja satu per satu. Diam sebentar — biarkan siswa yang menebak dulu. [What is this? Do you know?]' },
            { tipe: 'audio',     teks: 'Book. Pencil. Pen. Ruler. Eraser. Bag. Crayon.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Tempel label nama di benda-benda di kelas. Siswa jalan keliling membaca label. [Walk around and read!]' },
            { tipe: 'audio',     teks: 'This is my book. That is your pencil. This is my bag.' },
            { tipe: 'instruksi', teks: 'Permainan Whose is this? — guru kumpulkan beberapa benda siswa, lalu angkat satu per satu. [Whose pencil is this?] Pemilik angkat tangan. [It is MY pencil!]' },
            { tipe: 'audio',     teks: 'Whose pencil is this? It is my pencil! It is Budi\'s pencil!' },
            { tipe: 'instruksi', teks: 'Latihan meminjam: guru contohkan dulu, lalu siswa berpasangan. [Can I borrow your ruler? — Yes, here you are! — Thank you! — You are welcome!]' },
            { tipe: 'audio',     teks: 'Can I borrow your ruler? Yes, here you are! Thank you! You are welcome!' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan warna "Can I borrow your RED ruler?" Belum bisa: cukup "This is my pencil" tanpa pertanyaan.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati latihan meminjam, langsung ke permainan What is missing?' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Permainan What is missing? — siswa tutup mata, guru hilangkan satu benda. [Close your eyes! Open! What is missing?]' },
            { tipe: 'audio',     teks: 'What is missing? The eraser is missing! Good job!' },
            { tipe: 'audio',     teks: 'Excellent! You know all classroom objects in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Angkat benda satu per satu ke beberapa siswa. [What is this? Is it yours?] — amati keberanian berbicara.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: paham "whose is this". Speaking: kalimat kepemilikan. Reading: baca label benda di kelas.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang masih bingung my/your?' },
          ],
        },
      ],
    },

    // ─── TP 12 ──────────────────────────────────────────────────────────────
    {
      id       : 'tp-12',
      nomor    : 12,
      kelas    : 2,
      nama     : 'Days of the Week',
      tema     : 'Waktu & Rutinitas',
      jp       : 16,
      deskripsi: `Peserta didik mengenal nama hari dalam bahasa Inggris dan dapat
        menggunakannya dalam konteks jadwal dan rutinitas mingguan.`,
      indikator: [
        'Peserta didik dapat menyebut dan mengurutkan nama hari (Monday sampai Sunday) dengan lafal dan ejaan yang benar.',
        'Peserta didik dapat merespons pertanyaan "What day is it today?", "What day is tomorrow?", dan "What day was yesterday?"',
        'Peserta didik dapat menyebutkan kegiatan yang dilakukan pada hari-hari tertentu menggunakan "On Monday, I ...".',
      ],
      vocab: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
              'Saturday', 'Sunday', 'today', 'tomorrow', 'yesterday',
              'week', 'day', 'on Monday'],
      persiapan: ['Kartu nama hari (Mon–Sun)', 'Kalender kelas'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Good morning! What day is it today? Let us learn the days of the week!' },
            { tipe: 'audio',     teks: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday!' },
            { tipe: 'instruksi', teks: 'Siswa ikuti sambil tepuk tangan per suku kata — Wednesday paling banyak suku kata. [Clap every syllable — Wed-nes-day!]' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Tempel kartu hari di papan berurutan. Tunjuk satu per satu. [What day is this? Monday!]' },
            { tipe: 'audio',     teks: 'Monday. Tuesday. Wednesday. Thursday. Friday. Saturday. Sunday.' },
            { tipe: 'instruksi', teks: 'Permainan: hapus satu kartu, siswa tebak hari mana yang hilang. [Close your eyes! Open! Which day is missing?]' },
            { tipe: 'instruksi', teks: 'Latihan today/tomorrow/yesterday dengan kalender kelas yang nyata. Tunjuk tanggal sekarang. [Today is ... — what day is it?]' },
            { tipe: 'audio',     teks: 'Today is Monday. Tomorrow is Tuesday. Yesterday was Sunday.' },
            { tipe: 'instruksi', teks: 'Siswa ceritakan kegiatan di hari tertentu. Tanya beberapa siswa. [On Saturday, what do you do?]' },
            { tipe: 'audio',     teks: 'On Monday, I go to school. On Saturday, I play with friends. On Sunday, I go to church.' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tulis jadwal mingguan mereka sendiri. Belum bisa: cukup hafalkan urutan hari saja dulu.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati latihan kegiatan harian, langsung nyanyikan lagu hari.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Nyanyikan "Days of the Week" dengan nada bebas — boleh nada pop, boleh nada lagu anak. [Choose a tune — sing!]' },
            { tipe: 'audio',     teks: 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday. Seven days in a week!' },
            { tipe: 'audio',     teks: 'Great work! You know all days of the week!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjuk kartu hari ke beberapa siswa. [What day is this? What day is tomorrow?] — amati tanpa tekanan.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: paham today/tomorrow/yesterday. Speaking: lafal hari benar. Reading: baca kartu nama hari.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang kesulitan mengeja/mengucapkan Wednesday dan Thursday?' },
          ],
        },
      ],
    },

    // ─── TP 13 ──────────────────────────────────────────────────────────────
    {
      id       : 'tp-13',
      nomor    : 13,
      kelas    : 2,
      nama     : 'Daily Routines',
      tema     : 'Waktu & Rutinitas',
      jp       : 18,
      deskripsi: `Peserta didik belajar mengungkapkan rutinitas harian dalam
        bahasa Inggris, dari bangun pagi hingga tidur malam.`,
      indikator: [
        'Peserta didik dapat menyebut kegiatan rutinitas harian (wake up, brush teeth, eat breakfast, go to school, study, play, eat dinner, sleep) dengan lafal yang benar.',
        'Peserta didik dapat menceritakan rutinitas harian menggunakan "I ... every day" atau "Every morning, I ..." dalam aktivitas bercerita dengan gambar seri.',
        'Peserta didik dapat merespons dan mengajukan pertanyaan "What do you do every morning/afternoon/evening?" dalam percakapan berpasangan.',
      ],
      vocab: ['wake up', 'brush teeth', 'wash face', 'eat breakfast',
              'go to school', 'study', 'play', 'eat lunch', 'eat dinner',
              'take a bath', 'sleep', 'every day', 'every morning',
              'every afternoon', 'every evening'],
      persiapan: ['Kartu gambar seri rutinitas harian', 'Kertas gambar untuk siswa'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Good morning! What did you do this morning before coming to school?' },
            { tipe: 'instruksi', teks: 'Tanya 2 siswa cerita rutinitas pagi mereka dalam bahasa Indonesia. Guru "terjemahkan" ke Inggris langsung di depan kelas. [You said "mandi" — that is "take a bath"!]' },
            { tipe: 'audio',     teks: 'I wake up. I brush my teeth. I eat breakfast. I go to school!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu gambar seri. Susun di papan berurutan. Tunjuk satu per satu, siswa ucapkan. [What is this? Wake up!]' },
            { tipe: 'audio',     teks: 'Wake up. Brush teeth. Wash face. Eat breakfast. Go to school. Study. Play. Eat dinner. Sleep.' },
            { tipe: 'instruksi', teks: 'Acak urutan kartu. Siswa maju susun kembali. [Come and fix the order! Is this right?]' },
            { tipe: 'instruksi', teks: 'Latihan bercerita: guru tunjuk kartu, siswa buat kalimat. [Every morning, I ...]' },
            { tipe: 'audio',     teks: 'Every morning, I wake up and brush my teeth. Then I eat breakfast. After school, I play with friends.' },
            { tipe: 'instruksi', teks: 'Latihan berpasangan tanya-jawab. Guru keliling — bantu yang bingung dengan menunjukkan kartu gambar. [What do you do every morning?]' },
            { tipe: 'audio',     teks: 'What do you do every morning? I wake up and brush my teeth. What do you do in the evening? I eat dinner and sleep.' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan waktu "At 6 o\'clock, I wake up". Belum bisa: cukup 3 aktivitas tanpa "every morning".' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati tanya-jawab berpasangan, siswa cukup gambar 3 aktivitas dan beri label.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Siswa gambar 3 rutinitas favorit dan tulis label. Yang selesai cepat boleh tambah kalimat. [Draw and label — what do you do every day?]' },
            { tipe: 'audio',     teks: 'Having a good routine is important. Good job learning your daily routines!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Minta beberapa siswa ceritakan rutinitas pagi dalam 2–3 kalimat. Tidak perlu seluruh kelas — cukup 4–5 siswa. [Tell me your morning routine!]' },
            { tipe: 'instruksi', teks: 'Nilai Listening: paham "what do you do". Speaking: urutan kalimat rutinitas. Reading: baca kartu gambar seri.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang kesulitan menyusun kalimat rutinitas berurutan?' },
          ],
        },
      ],
    },

    // ─── TP 14 ──────────────────────────────────────────────────────────────
    {
      id       : 'tp-14',
      nomor    : 14,
      kelas    : 2,
      nama     : 'My House & Rooms',
      tema     : 'Rumah & Lingkungan',
      jp       : 18,
      deskripsi: `Peserta didik mengenal nama ruangan dalam rumah dan dapat
        mendeskripsikan kegunaan setiap ruangan menggunakan kalimat sederhana.`,
      indikator: [
        'Peserta didik dapat menyebut nama ruangan (bedroom, bathroom, kitchen, living room, dining room) dan area di sekitar rumah dengan lafal yang benar.',
        'Peserta didik dapat mendeskripsikan kegunaan ruangan menggunakan "We ... in the ..." (We sleep in the bedroom, We cook in the kitchen).',
        'Peserta didik dapat mendeskripsikan posisi benda menggunakan preposisi tempat sederhana (in, on, under) dalam konteks ruangan rumah.',
      ],
      vocab: ['bedroom', 'bathroom', 'kitchen', 'living room', 'dining room',
              'garden', 'house', 'room', 'in', 'on', 'under', 'next to',
              'we sleep', 'we cook', 'we eat'],
      persiapan: ['Gambar denah rumah sederhana', 'Kartu gambar ruangan'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Where do you sleep? Where do you eat? Today we learn about rooms in our house!' },
            { tipe: 'instruksi', teks: 'Tunjukkan gambar denah rumah sederhana. Tunjuk setiap ruangan, biarkan siswa tebak namanya dulu. [What room is this?]' },
            { tipe: 'audio',     teks: 'This is a house. It has a bedroom, a bathroom, a kitchen, a living room, and a dining room.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu gambar setiap ruangan satu per satu. Siswa ucapkan bersama. [What room is this?]' },
            { tipe: 'audio',     teks: 'Bedroom. Bathroom. Kitchen. Living room. Dining room. Garden.' },
            { tipe: 'instruksi', teks: 'Cocokkan kartu kegiatan dengan ruangan. Siswa maju menempelkan di papan. [Where do we sleep? In the BEDROOM!]' },
            { tipe: 'audio',     teks: 'We sleep in the bedroom. We cook in the kitchen. We eat in the dining room. We watch TV in the living room.' },
            { tipe: 'instruksi', teks: 'Ajarkan preposisi in/on/under dengan benda di kelas sekarang. Jangan pakai gambar — pakai benda nyata. [Where is the book? ON the table! Where is the bag? UNDER the chair!]' },
            { tipe: 'audio',     teks: 'The book is on the table. The bag is under the chair. The pencil is in the box.' },
            { tipe: 'instruksi', teks: 'Siswa gambar denah rumah mereka sendiri — sederhana saja, tidak perlu artistik. Beri label. [Draw your house — name each room!]' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan 2 kalimat preposisi tentang benda di rumah mereka. Belum bisa: cukup label ruangan di denah.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati menggambar, langsung siswa presentasikan denah rumah ke teman sebelah.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Beberapa siswa presentasikan denah rumah mereka ke teman sebelahnya. [Tell your partner about your house!]' },
            { tipe: 'audio',     teks: 'This is my house. I have a bedroom and a kitchen. My book is on the table.' },
            { tipe: 'audio',     teks: 'Wonderful! Your house is amazing! Great work today!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjuk gambar ruangan ke beberapa siswa. [What room? What do we do here?] — amati kalimat yang mereka buat.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: paham "where do you". Speaking: kalimat ruangan + kegiatan. Reading: baca label denah rumah.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang masih bingung living room/dining room?' },
          ],
        },
      ],
    },

    // ─── TP 15 ──────────────────────────────────────────────────────────────
    {
      id       : 'tp-15',
      nomor    : 15,
      kelas    : 2,
      nama     : 'Weather & Seasons',
      tema     : 'Alam & Lingkungan',
      jp       : 16,
      deskripsi: `Peserta didik mengenal jenis cuaca dan dapat mendeskripsikan
        cuaca hari ini. Disesuaikan dengan konteks iklim tropis Indonesia.`,
      indikator: [
        'Peserta didik dapat menyebut jenis cuaca (sunny, cloudy, rainy, windy, hot) yang relevan dengan iklim Indonesia.',
        'Peserta didik dapat mendeskripsikan cuaca menggunakan "It is ..." dan "Today is ..." dalam aktivitas jurnal cuaca harian kelas.',
        'Peserta didik dapat menghubungkan cuaca dengan pakaian atau kegiatan yang sesuai.',
      ],
      vocab: ['sunny', 'cloudy', 'rainy', 'windy', 'hot', 'cold', 'wet',
              'weather', 'today', 'it is', 'umbrella', 'raincoat',
              "how's the weather"],
      persiapan: ['Kartu cuaca (sunny/rainy/cloudy)', 'Jurnal cuaca kelas (kertas)'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Ajak siswa lihat ke luar jendela tanpa berkata apa-apa. Tunggu 5 detik. Lalu tanya. [Look outside — how is the weather?]' },
            { tipe: 'audio',     teks: "How's the weather today? Is it sunny or rainy? Let us check!" },
            { tipe: 'instruksi', teks: 'Tunjukkan kartu cuaca sesuai kondisi nyata hari ini. Konteks nyata lebih mudah diingat. [Today is ... What do we call this?]' },
            { tipe: 'audio',     teks: 'Today is sunny! It is hot! Today is rainy! It is wet!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan semua kartu cuaca. Siswa ucapkan bersama. [Say it!]' },
            { tipe: 'audio',     teks: 'Sunny. Cloudy. Rainy. Windy. Hot. Cold.' },
            { tipe: 'instruksi', teks: 'Cocokkan kartu cuaca dengan kartu pakaian/kegiatan. Siswa maju mencocokkan. [If it is rainy, what do we use? An UMBRELLA!]' },
            { tipe: 'audio',     teks: 'It is rainy. I use an umbrella and a raincoat. It is sunny. I wear sunglasses and play outside.' },
            { tipe: 'instruksi', teks: 'Buat jurnal cuaca kelas: setiap siswa tulis hari ini di kertas kecil. [Write today\'s date and weather — just one sentence!]' },
            { tipe: 'audio',     teks: 'Today is Monday. The weather is sunny. It is hot. I wear a hat.' },
            { tipe: 'instruksi', teks: 'Berpasangan: tanya-jawab cuaca favorit. [What is your favourite weather? Why?]' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: deskripsikan cuaca + kegiatan favorit saat cuaca itu. Belum bisa: cukup "It is sunny" tanpa tambahan.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati jurnal cuaca, langsung tanya-jawab cuaca favorit 3–4 siswa.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Siswa gambar cuaca hari ini dan tulis 1 kalimat deskripsi. Boleh diwarnai. [Draw today\'s weather!]' },
            { tipe: 'audio',     teks: 'Today is sunny. It is hot. I am happy!' },
            { tipe: 'audio',     teks: 'Great! You are our weather reporters now!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu cuaca ke beberapa siswa. [How\'s the weather?] — amati apakah mereka menjawab dengan kalimat lengkap.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: paham pertanyaan cuaca. Speaking: kalimat "It is ...". Reading: baca kata cuaca di kartu.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang masih bingung sunny/cloudy?' },
          ],
        },
      ],
    },

    // ─── TP 16 ──────────────────────────────────────────────────────────────
    {
      id       : 'tp-16',
      nomor    : 16,
      kelas    : 2,
      nama     : 'Clothes & Dressing',
      tema     : 'Keluarga & Identitas',
      jp       : 18,
      deskripsi: `Peserta didik mengenal nama pakaian dan dapat mendeskripsikan
        pakaian yang sedang dikenakan menggunakan "I am wearing ..." dan kombinasi warna.`,
      indikator: [
        'Peserta didik dapat menyebut nama pakaian (shirt, trousers, skirt, dress, shoes, socks, hat, jacket, uniform) dengan lafal yang benar.',
        'Peserta didik dapat mendeskripsikan pakaian yang dikenakan menggunakan "I am wearing a ... shirt" dengan kombinasi warna.',
        'Peserta didik dapat merespons pertanyaan "What are you wearing?" dan mendeskripsikan pakaian teman.',
      ],
      vocab: ['shirt', 'trousers', 'skirt', 'dress', 'shoes', 'socks',
              'hat', 'jacket', 'uniform', 'wear', 'I am wearing',
              'he is wearing', 'she is wearing'],
      persiapan: ['Kartu gambar pakaian', 'Cermin kecil (opsional untuk show and tell)'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Look at what you are wearing today. Can you describe it in English?' },
            { tipe: 'instruksi', teks: 'Guru deskripsikan pakaian yang dikenakan sendiri sebagai model — perlahan. [I am wearing a ... shirt. What colour? White! Yes, a WHITE shirt.]' },
            { tipe: 'audio',     teks: 'I am wearing a white shirt and black trousers. I am wearing black shoes and white socks.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan kartu pakaian satu per satu. Siswa ucapkan bersama. [What is this? Shirt!]' },
            { tipe: 'audio',     teks: 'Shirt. Trousers. Skirt. Dress. Shoes. Socks. Hat. Jacket. Uniform.' },
            { tipe: 'instruksi', teks: 'Latihan kombinasi: tempel kartu warna + kartu pakaian. Siswa ucapkan bersama. [A RED shirt! A BLUE skirt!]' },
            { tipe: 'audio',     teks: 'A red shirt. Blue trousers. A white dress. Black shoes. A yellow hat.' },
            { tipe: 'instruksi', teks: 'Show and tell: siswa berdiri, deskripsikan pakaian yang mereka kenakan hari ini. Mulai dari yang berani maju. [Stand up and describe your clothes today!]' },
            { tipe: 'audio',     teks: 'I am wearing a blue shirt and grey trousers. I am wearing black shoes.' },
            { tipe: 'instruksi', teks: 'Latihan deskripsikan teman: tunjuk satu siswa, kelas deskripsikan pakaiannya. [Look at ... — what is she wearing?]' },
            { tipe: 'audio',     teks: 'She is wearing a red dress. He is wearing a white shirt and blue trousers.' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: deskripsikan 3 item pakaian sekaligus. Belum bisa: cukup satu item "I am wearing a shirt".' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati latihan deskripsikan teman, langsung 3 siswa show and tell.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Tanya 3 siswa acak: [What are you wearing today?] — siswa berdiri dan menjawab. Kelas bertepuk tangan.' },
            { tipe: 'audio',     teks: 'Fashion show time! Walk and describe your outfit in English!' },
            { tipe: 'audio',     teks: 'Excellent! You can describe clothes in English now!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Minta beberapa siswa deskripsikan pakaian hari ini dalam 2 kalimat. Tidak perlu semua siswa — amati yang representatif. [What are you wearing?]' },
            { tipe: 'instruksi', teks: 'Nilai Listening: paham "what are you wearing". Speaking: kalimat "I am wearing". Reading: baca kartu nama pakaian.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang masih bingung trousers/skirt/dress?' },
          ],
        },
      ],
    },

    // ─── TP 17 ──────────────────────────────────────────────────────────────
    {
      id       : 'tp-17',
      nomor    : 17,
      kelas    : 2,
      nama     : 'Hobbies & Free Time',
      tema     : 'Aktivitas & Ekspresi',
      jp       : 18,
      deskripsi: `Peserta didik belajar mengungkapkan hobi dan kegiatan waktu luang
        menggunakan "I like ..." + gerund dan dapat bertanya serta merespons tentang hobi teman.`,
      indikator: [
        'Peserta didik dapat menyebut kegiatan hobi (reading, drawing, singing, dancing, playing football, cooking, swimming, cycling) dengan lafal yang benar.',
        'Peserta didik dapat menyatakan hobi menggunakan "I like ..." + gerund dan menjelaskan alasan singkat.',
        'Peserta didik dapat mengajukan pertanyaan "What do you like to do?" dan merespons dalam percakapan berpasangan.',
      ],
      vocab: ['reading', 'drawing', 'singing', 'dancing', 'playing football',
              'cooking', 'swimming', 'cycling', 'hobby', 'I like',
              'because', 'fun', 'interesting', 'what do you like'],
      persiapan: ['Kartu gambar hobi', 'Tabel survei kelas kosong'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! What do you do in your free time? Today we talk about hobbies!' },
            { tipe: 'instruksi', teks: 'Guru ceritakan hobi sendiri sebagai model — dengan ekspresi antusias. [I love reading! Reading is so fun! What about you?]' },
            { tipe: 'audio',     teks: 'I like reading. I like cooking. Reading is fun! Cooking is interesting!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan kartu hobi satu per satu. Siswa ucapkan bersama + tiru gerakannya. [Reading — buka buku. Swimming — gaya renang!]' },
            { tipe: 'audio',     teks: 'Reading. Drawing. Singing. Dancing. Playing football. Cooking. Swimming. Cycling.' },
            { tipe: 'instruksi', teks: 'Latihan struktur "I like + gerund". Tulis di papan, ucapkan bersama. [I like READING. Not "I like read" — READING!]' },
            { tipe: 'audio',     teks: 'I like reading. I like drawing. I like singing. I like playing football.' },
            { tipe: 'instruksi', teks: 'Tambahkan alasan. Hanya dua pilihan: fun atau interesting. [Why? Because it is FUN! Or because it is INTERESTING!]' },
            { tipe: 'audio',     teks: 'I like swimming because it is fun! I like reading because it is interesting!' },
            { tipe: 'instruksi', teks: 'Survei kelas: buat tabel di papan. Tanya satu per satu. [Raise your hand — who likes singing?] Hitung dan tulis angkanya.' },
            { tipe: 'audio',     teks: 'What do you like to do? I like dancing! What about you? I like playing football!' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan "... with my friends / with my family". Belum bisa: cukup "I like ... because it is fun" tanpa elaborasi.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati survei, langsung 3–4 siswa perkenalkan hobi di penutup.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Setiap siswa perkenalkan hobi dalam 2 kalimat. Yang mau sukarela dulu. [Who wants to share?]' },
            { tipe: 'audio',     teks: 'My name is Budi. I like drawing because it is fun!' },
            { tipe: 'audio',     teks: 'Fantastic! You all have wonderful hobbies!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjuk kartu hobi ke beberapa siswa. [Do you like this? Why?] — amati gerund dan alasan yang mereka gunakan.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: paham "what do you like". Speaking: kalimat hobi + alasan. Reading: baca kartu nama hobi.' },
            { tipe: 'instruksi', teks: 'Catat: siapa yang kesulitan menggunakan gerund (reading, swimming, cycling bukan read, swim, cycle)?' },
          ],
        },
      ],
    },

    // ─── TP 18 ──────────────────────────────────────────────────────────────
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
            { tipe: 'audio',     teks: 'Hello everyone! Today is a special day. You will present your My World project!' },
            { tipe: 'instruksi', teks: 'Tenangkan siswa yang gugup — sampaikan bahwa tidak ada yang salah hari ini. [It is okay to be nervous. Just try your best — I am proud of you already!]' },
            { tipe: 'instruksi', teks: 'Beri contoh template presentasi di papan: nama → keluarga → rumah → hobi. [Follow this order if you want — or say what you remember!]' },
            { tipe: 'audio',     teks: 'Hello! My name is ... I am ... years old. I have a ... family. I live in a house with a bedroom and a kitchen. I like ... because it is fun!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 40,
          langkah: [
            { tipe: 'instruksi', teks: 'Beri siswa 10 menit memeriksa poster/buku mini. Guru keliling membantu yang belum siap — bantu tulis kalimat sederhana. [Any questions before we start?]' },
            { tipe: 'instruksi', teks: 'Mulai presentasi: panggil siswa yang mengangkat tangan maju duluan. Tidak ada paksaan. [Who wants to go first? Brave volunteers!]' },
            { tipe: 'audio',     teks: 'Please come to the front. Tell us about your world!' },
            { tipe: 'instruksi', teks: 'Setelah tiap presentasi: ajukan SATU pertanyaan ringan — guru pilih yang mudah untuk siswa itu. [What is your favourite colour?] bukan pertanyaan yang sulit.' },
            { tipe: 'audio',     teks: 'Do you have a sister? What is your favourite colour? What do you eat every morning?' },
            { tipe: 'instruksi', teks: 'Kelas bertepuk tangan meriah setelah tiap presentasi. [Let us clap for ...! Amazing!]' },
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: presentasi tanpa melihat catatan, jawab 2 pertanyaan. Belum siap: boleh melihat poster, guru bantu mulai kalimat pertama.' },
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT dan masih ada siswa: beri pilihan — presentasi singkat 1 kalimat saja sudah cukup. Tidak ada siswa yang tidak tampil.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 4,
          langkah: [
            { tipe: 'instruksi', teks: 'Rayakan bersama. Berdiri semua. [Everyone stand up — you finished Phase A English! You are amazing!]' },
            { tipe: 'audio',     teks: 'Congratulations, everyone! You have finished Phase A English! You are amazing!' },
            { tipe: 'audio',     teks: 'Keep speaking English every day. Goodbye and good luck!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 4,
          langkah: [
            { tipe: 'instruksi', teks: 'Nilai berdasarkan presentasi yang sudah berlangsung. Tidak perlu tes tambahan — presentasi sudah cukup sebagai bukti belajar.' },
            { tipe: 'instruksi', teks: 'Nilai Listening: merespons pertanyaan audience. Speaking: presentasi 3–5 kalimat dengan lafal jelas. Reading: baca teks di poster/buku mini.' },
            { tipe: 'instruksi', teks: 'Catatan akhir Fase A: tulis satu kalimat positif tentang perkembangan setiap siswa. Ini untuk laporan, bukan untuk siswa baca. [What is the strongest skill each child showed today?]' },
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
