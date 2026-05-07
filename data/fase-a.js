/**
 * =============================================================
 * FLAF — DATA KURIKULUM FASE A
 * File: data/fase-a.js
 * =============================================================
 *
 * YANG BOLEH DIEDIT:
 *   - Teks di dalam string (nama TP, indikator, vocab, skenario)
 *   - Nilai jp (jumlah jam pelajaran)
 *   - Isi array vocab[] dan skenario[]
 *   - Isi array indikator[] — harus tetap 3 item
 *
 * YANG TIDAK BOLEH DIUBAH:
 *   - Nama key (id, nama, jp, indikator, vocab, skenario, dst.)
 *   - Jumlah TP (harus tetap 18)
 *   - Struktur objek skenario: { fase, durasi, langkah[] }
 *   - Setiap langkah: { tipe: 'instruksi'|'audio', teks }
 *
 * Terakhir direvisi : Mei 2026
 * =============================================================
 */

const FASE_A = {

  meta: {
    fase          : 'A',
    kelas         : '1 & 2 SD',
    mata_pelajaran: 'Bahasa Inggris',
    data_version  : '2026-05-v1',
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

    // TP 1
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Sambut siswa di pintu kelas. Ucapkan salam sesuai waktu.' },
            { tipe: 'audio',     teks: 'Good morning, everyone! How are you today?' },
            { tipe: 'instruksi', teks: 'Minta siswa menirukan salam bersama-sama sebanyak 3 kali.' },
            { tipe: 'audio',     teks: 'Good morning! Good morning! Good morning, teacher!' },
            { tipe: 'instruksi', teks: 'Tunjukkan kartu gambar Pagi/Siang/Sore. Tanya siswa: waktu apa sekarang?' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan 4 salam utama dengan kartu gambar matahari/bulan.' },
            { tipe: 'audio',     teks: 'Good morning. Good afternoon. Good evening. Good night.' },
            { tipe: 'instruksi', teks: 'Latihan chant — siswa tepuk tangan mengikuti ritme.' },
            { tipe: 'audio',     teks: 'Hello hello, how are you? I am fine, thank you!' },
            { tipe: 'instruksi', teks: 'Permainan: guru menunjuk kartu waktu, siswa berlomba mengucapkan salam yang tepat.' },
            { tipe: 'instruksi', teks: 'Perkenalkan perpisahan: goodbye, bye, see you tomorrow.' },
            { tipe: 'audio',     teks: 'Goodbye! Bye! See you tomorrow!' },
            { tipe: 'instruksi', teks: 'Latihan berpasangan: siswa saling menyapa dan berpamitan bergantian.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Tanya 3–4 siswa secara acak: salam apa yang dipakai saat pagi/siang/sore?' },
            { tipe: 'instruksi', teks: 'Bersama-sama ucapkan perpisahan untuk menutup kelas.' },
            { tipe: 'audio',     teks: 'See you next time. Goodbye, everyone!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Panggil siswa satu per satu. Ucapkan salam, minta siswa merespons secara spontan.' },
            { tipe: 'instruksi', teks: 'Nilai aspek Listening (pemahaman salam), Speaking (pengucapan), Reading (baca kartu salam).' },
            { tipe: 'instruksi', teks: 'Catat catatan observasi jika ada siswa yang perlu perhatian khusus.' },
          ],
        },
      ],
    },

    // TP 2
    {
      id       : 'tp-02',
      nomor    : 2,
      kelas    : 1,
      nama     : 'Introducing Myself',
      tema     : 'Interaksi Sosial Dasar',
      jp       : 16,
      deskripsi: `Peserta didik belajar memperkenalkan diri sendiri meliputi nama,
        usia, dan asal sekolah. Interaksi dilakukan secara berpasangan dan di
        depan kelas.`,
      indikator: [
        'Peserta didik dapat menyebutkan nama diri sendiri menggunakan struktur "My name is ..." atau "I am ..." dengan lafal yang jelas.',
        'Peserta didik dapat menyebutkan usia menggunakan struktur "I am ... years old" dan merespons pertanyaan "How old are you?"',
        'Peserta didik dapat memperkenalkan diri lengkap (nama + usia) kepada teman dan guru dalam situasi bermain peran.',
      ],
      vocab: ['name', 'my name is', 'I am', 'years old', 'how old',
              'nice to meet you', 'what is your name'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Good morning, class! Let us learn how to introduce ourselves today!' },
            { tipe: 'instruksi', teks: 'Guru memperkenalkan diri sebagai model: tulis nama di papan tulis.' },
            { tipe: 'audio',     teks: 'Hello! My name is ... I am a teacher. Nice to meet you!' },
            { tipe: 'instruksi', teks: 'Tanya siswa: What is my name? Minta siswa menjawab bersama.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Ajarkan struktur: My name is... Tulis di papan tulis.' },
            { tipe: 'audio',     teks: 'My name is Budi. My name is Sari. My name is Andi.' },
            { tipe: 'instruksi', teks: 'Setiap siswa membuat name tag. Tulis nama sendiri di kertas.' },
            { tipe: 'instruksi', teks: 'Latihan usia: tunjukkan angka di kartu, minta siswa ucapkan.' },
            { tipe: 'audio',     teks: 'How old are you? I am six years old. I am seven years old.' },
            { tipe: 'instruksi', teks: 'Permainan: siswa berdiri, perkenalkan diri ke 3 teman berbeda.' },
            { tipe: 'audio',     teks: 'Hello! My name is ... I am ... years old. Nice to meet you!' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Panggil 3 siswa maju ke depan, perkenalkan diri ke seluruh kelas.' },
            { tipe: 'instruksi', teks: 'Kelas memberi tepuk tangan setelah setiap perkenalan.' },
            { tipe: 'audio',     teks: 'Great job, everyone! You can introduce yourself in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Minta setiap siswa memperkenalkan diri singkat: nama dan usia.' },
            { tipe: 'instruksi', teks: 'Nilai Listening (paham instruksi), Speaking (lafal nama & usia), Reading (baca name tag).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang belum lancar menyebut usia dalam bahasa Inggris.' },
          ],
        },
      ],
    },

    // TP 3
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Good morning! Today we learn classroom instructions. Are you ready?' },
            { tipe: 'instruksi', teks: 'Demonstrasikan instruksi sambil melakukan gerakannya.' },
            { tipe: 'audio',     teks: 'Stand up! Sit down! Stand up! Sit down!' },
            { tipe: 'instruksi', teks: 'Siswa ikuti gerakan. Ulangi 3 kali dengan tempo makin cepat.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan kartu instruksi satu per satu dengan gambar dan kata.' },
            { tipe: 'audio',     teks: 'Listen. Look. Open your book. Close your book. Write. Draw.' },
            { tipe: 'instruksi', teks: 'Permainan Simon Says — guru beri instruksi, siswa lakukan hanya jika didahului "Simon says".' },
            { tipe: 'audio',     teks: 'Simon says, stand up! Simon says, open your book! Sit down!' },
            { tipe: 'instruksi', teks: 'Latihan instruksi dua langkah — tunjukkan di papan, lakukan bersama.' },
            { tipe: 'audio',     teks: 'Open your book and read. Listen and repeat. Look and write.' },
            { tipe: 'instruksi', teks: 'Giliran siswa jadi pemimpin: panggil satu siswa maju, beri instruksi ke kelas.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Review: guru ucapkan instruksi, siswa lakukan gerakannya dengan cepat.' },
            { tipe: 'audio',     teks: 'Well done! Now you know classroom instructions in English!' },
            { tipe: 'audio',     teks: 'Goodbye, everyone! See you next time!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Ucapkan 5 instruksi secara acak, amati respons fisik setiap siswa.' },
            { tipe: 'instruksi', teks: 'Nilai Listening (respons benar/salah), Speaking (ucap instruksi), Reading (baca kartu instruksi).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang masih bingung membedakan open/close atau sit/stand.' },
          ],
        },
      ],
    },

    // TP 4
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello everyone! Today we learn numbers in English. Let us count together!' },
            { tipe: 'audio',     teks: 'One, two, three, four, five, six, seven, eight, nine, ten!' },
            { tipe: 'instruksi', teks: 'Siswa ikuti menghitung sambil tepuk tangan. Ulangi 2 kali.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Tempel kartu angka 1–10 di papan. Tunjuk satu per satu, siswa ucapkan bersama.' },
            { tipe: 'audio',     teks: 'One. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten.' },
            { tipe: 'instruksi', teks: 'Lanjutkan angka 11–20. Tempel kartu di papan satu per satu.' },
            { tipe: 'audio',     teks: 'Eleven. Twelve. Thirteen. Fourteen. Fifteen. Sixteen. Seventeen. Eighteen. Nineteen. Twenty.' },
            { tipe: 'instruksi', teks: 'Permainan: guru tunjuk angka di papan secara acak, siswa berlomba sebut.' },
            { tipe: 'instruksi', teks: 'Hitung benda di kelas: buku, pensil, kursi. Tanya "How many books?".' },
            { tipe: 'audio',     teks: 'How many? One, two, three... There are ten books!' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Nyanyi bersama: "Ten Little Numbers" atau hitung mundur 10–1.' },
            { tipe: 'audio',     teks: 'Ten, nine, eight, seven, six, five, four, three, two, one. Blast off!' },
            { tipe: 'audio',     teks: 'Great work today! You can count to twenty in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu angka acak 1–20, siswa sebutkan satu per satu.' },
            { tipe: 'instruksi', teks: 'Nilai Listening (respons "how many"), Speaking (lafal angka), Reading (baca angka di kartu).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang masih kesulitan di angka 11–19 (paling sering salah).' },
          ],
        },
      ],
    },

    // TP 5
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Today is a colourful day! Let us learn colours in English!' },
            { tipe: 'instruksi', teks: 'Tunjukkan kartu warna satu per satu. Siswa tebak nama warnanya.' },
            { tipe: 'audio',     teks: 'Red. Blue. Green. Yellow. Orange. Purple. Black. White.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Tempel kartu warna di papan. Tunjuk warna, siswa ucapkan bersama.' },
            { tipe: 'audio',     teks: 'What colour is this? It is red! What colour is this? It is blue!' },
            { tipe: 'instruksi', teks: 'Permainan: guru sebut warna, siswa sentuh benda di kelas yang sesuai.' },
            { tipe: 'instruksi', teks: 'Show and tell: setiap siswa tunjukkan benda dari tasnya, sebut warnanya.' },
            { tipe: 'audio',     teks: 'This is my pencil. It is yellow. This is my book. It is blue.' },
            { tipe: 'instruksi', teks: 'Tanya warna favorit ke beberapa siswa.' },
            { tipe: 'audio',     teks: 'What is your favourite colour? My favourite colour is red!' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Nyanyikan "I Can Sing a Rainbow" bersama-sama.' },
            { tipe: 'audio',     teks: 'Red and yellow and pink and green, orange and purple and blue. I can sing a rainbow, sing a rainbow, sing a rainbow too!' },
            { tipe: 'audio',     teks: 'Wonderful! You know your colours in English now!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu warna acak. Minta siswa sebutkan nama warnanya.' },
            { tipe: 'instruksi', teks: 'Nilai Listening (paham "what colour is it?"), Speaking (lafal warna), Reading (baca nama warna di kartu).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang menukar purple/orange atau black/brown.' },
          ],
        },
      ],
    },

    // TP 6
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello everyone! Look around the classroom. Do you see any shapes?' },
            { tipe: 'instruksi', teks: 'Tunjuk benda berbentuk bulat, kotak, segitiga di kelas. Tanya siswa bentuknya.' },
            { tipe: 'audio',     teks: 'This is a circle. This is a square. This is a triangle.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan kartu bentuk satu per satu. Siswa gambar di udara dengan jari.' },
            { tipe: 'audio',     teks: 'Circle. Square. Triangle. Rectangle. Star. Heart.' },
            { tipe: 'instruksi', teks: 'Permainan: guru gambar bentuk di papan secara perlahan, siswa tebak.' },
            { tipe: 'instruksi', teks: 'Latihan kombinasi: tempel kartu warna + kartu bentuk di papan.' },
            { tipe: 'audio',     teks: 'A red circle. A blue square. A yellow triangle. A green rectangle.' },
            { tipe: 'instruksi', teks: 'Siswa menggambar 3 bentuk dan mewarnai, lalu tunjukkan ke teman.' },
            { tipe: 'audio',     teks: 'I have a red circle, a blue square, and a yellow star!' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan benda di kelas: papan tulis, buku, jam. Siswa sebut bentuknya.' },
            { tipe: 'audio',     teks: 'The board is a rectangle. The clock is a circle. The window is a square.' },
            { tipe: 'audio',     teks: 'Excellent! You can name shapes in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu bentuk acak. Minta siswa sebutkan nama dan warnanya.' },
            { tipe: 'instruksi', teks: 'Nilai Listening (paham "what shape is it?"), Speaking (lafal nama bentuk), Reading (baca label bentuk).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang masih bingung antara square/rectangle.' },
          ],
        },
      ],
    },

    // TP 7
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Do you love your family? Today we talk about family!' },
            { tipe: 'instruksi', teks: 'Tunjukkan gambar pohon keluarga sederhana di papan tulis.' },
            { tipe: 'audio',     teks: 'This is a family. Father, mother, brother, sister. My family!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan kartu anggota keluarga: father, mother, brother, sister, grandfather, grandmother.' },
            { tipe: 'audio',     teks: 'Father. Mother. Brother. Sister. Grandfather. Grandmother.' },
            { tipe: 'instruksi', teks: 'Siswa siapkan gambar keluarga yang dibawa dari rumah atau gambar di kertas.' },
            { tipe: 'audio',     teks: 'This is my father. This is my mother. This is my brother. I love my family!' },
            { tipe: 'instruksi', teks: 'Show and tell berpasangan: saling memperkenalkan anggota keluarga.' },
            { tipe: 'instruksi', teks: 'Latihan pertanyaan-jawaban di depan kelas.' },
            { tipe: 'audio',     teks: 'Do you have a sister? Yes, I have a sister. No, I do not have a sister.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Panggil 2 siswa maju, perkenalkan keluarga mereka ke kelas.' },
            { tipe: 'audio',     teks: 'Family is important. We love our family. I love you, family!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjuk kartu anggota keluarga, minta siswa sebutkan dan buat kalimat "This is my...".' },
            { tipe: 'instruksi', teks: 'Nilai Listening (paham pertanyaan keluarga), Speaking (lafal & kalimat), Reading (baca kartu anggota keluarga).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang masih bingung grandfather/grandmother.' },
          ],
        },
      ],
    },

    // TP 8
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Let us sing and move our body today!' },
            { tipe: 'audio',     teks: 'Head, shoulders, knees and toes, knees and toes! Eyes and ears and mouth and nose, head shoulders knees and toes!' },
            { tipe: 'instruksi', teks: 'Siswa ikuti lagu sambil sentuh bagian tubuh. Ulangi 2 kali: normal, lalu cepat.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan poster tubuh manusia. Tunjuk bagian tubuh, siswa ucapkan.' },
            { tipe: 'audio',     teks: 'Head. Eyes. Ears. Nose. Mouth. Shoulders. Hands. Fingers. Legs. Feet.' },
            { tipe: 'instruksi', teks: 'Permainan Touch Your Body: guru ucapkan instruksi, siswa sentuh bagian tubuhnya.' },
            { tipe: 'audio',     teks: 'Touch your nose! Touch your ears! Show me your hands! Touch your head!' },
            { tipe: 'instruksi', teks: 'Siswa gambar wajah sederhana dan beri label bagian-bagiannya.' },
            { tipe: 'instruksi', teks: 'Berpasangan: saling tanya "Where is your ...?" sambil menunjuk.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Nyanyikan "Head Shoulders Knees and Toes" sekali lagi dengan tempo cepat.' },
            { tipe: 'audio',     teks: 'Head, shoulders, knees and toes, knees and toes!' },
            { tipe: 'audio',     teks: 'Amazing! You know all parts of the body in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Ucapkan instruksi "Touch your..." secara acak. Amati ketepatan respons siswa.' },
            { tipe: 'instruksi', teks: 'Nilai Listening (respons touch your), Speaking (nyanyikan lagu), Reading (baca label poster tubuh).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang belum hafal shoulders/fingers/toes.' },
          ],
        },
      ],
    },

    // TP 9
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Good morning class! Do you like animals? What is your favourite animal?' },
            { tipe: 'instruksi', teks: 'Tiru suara hewan: meong, guk guk, kukuruyuk. Tanya nama hewannya dalam Bahasa Inggris.' },
            { tipe: 'audio',     teks: 'Cat. Dog. Chicken. What sound does a cat make? Meow!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu gambar hewan satu per satu. Siswa ucapkan nama dan tiru suaranya.' },
            { tipe: 'audio',     teks: 'Cat. Dog. Bird. Fish. Rabbit. Cow. Chicken. Duck. Butterfly. Ant.' },
            { tipe: 'instruksi', teks: 'Permainan tebak hewan: guru tiru suara hewan, siswa tebak nama hewannya.' },
            { tipe: 'instruksi', teks: 'Ajarkan kemampuan hewan: can fly, can swim, can run.' },
            { tipe: 'audio',     teks: 'The bird can fly. The fish can swim. The dog can run. The duck can swim and fly!' },
            { tipe: 'instruksi', teks: 'Siswa berpasangan: satu tanya "Can a cat swim?", satu jawab "No, a cat cannot swim".' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Nyanyikan "Old MacDonald Had a Farm" bersama.' },
            { tipe: 'audio',     teks: 'Old MacDonald had a farm, E-I-E-I-O! And on his farm he had a cow, E-I-E-I-O!' },
            { tipe: 'audio',     teks: 'Great! You know so many animals in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu hewan acak. Minta siswa sebut nama dan satu kemampuannya.' },
            { tipe: 'instruksi', teks: 'Nilai Listening (paham pertanyaan can/cannot), Speaking (lafal nama hewan), Reading (baca nama hewan di kartu).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang masih sulit menyebut butterfly/elephant.' },
          ],
        },
      ],
    },

    // TP 10
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Are you hungry? What do you like to eat? Today we learn food and drinks!' },
            { tipe: 'instruksi', teks: 'Tunjukkan gambar makanan populer Indonesia dalam bahasa Inggris.' },
            { tipe: 'audio',     teks: 'Rice. Noodles. Bread. Egg. Fruit. Milk. Water. Juice.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan kartu makanan dan minuman. Siswa ucapkan bersama.' },
            { tipe: 'audio',     teks: 'I like rice. I like noodles. I like milk. I like juice.' },
            { tipe: 'instruksi', teks: 'Latihan I like / I do not like dengan kartu gambar.' },
            { tipe: 'audio',     teks: 'Do you like rice? Yes, I like rice! Do you like milk? No, I do not like milk.' },
            { tipe: 'instruksi', teks: 'Bermain peran kantin sekolah: satu siswa jadi penjual, satu pembeli.' },
            { tipe: 'audio',     teks: 'Can I have some rice please? Here you are! Thank you! You are welcome!' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Siswa berbagi: sebutkan 2 makanan yang disukai dan 1 yang tidak disukai.' },
            { tipe: 'audio',     teks: 'I like rice and fruit. I do not like milk.' },
            { tipe: 'audio',     teks: 'Wonderful! Now you can talk about food in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjuk kartu makanan, tanya "Do you like this?" Siswa jawab dengan kalimat lengkap.' },
            { tipe: 'instruksi', teks: 'Nilai Listening (paham "do you like"), Speaking (lafal & kalimat like/dislike), Reading (baca nama makanan di kartu).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang masih bingung struktur "I do not like".' },
          ],
        },
      ],
    },

    // TP 11
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Look at your desk. What do you see? Let us name them in English!' },
            { tipe: 'instruksi', teks: 'Angkat benda dari meja: buku, pensil, penggaris. Tanya nama dalam bahasa Inggris.' },
            { tipe: 'audio',     teks: 'Book. Pencil. Pen. Ruler. Eraser. Bag. Crayon.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Tempel label nama benda di setiap benda di kelas.' },
            { tipe: 'audio',     teks: 'This is my book. That is your pencil. This is my bag.' },
            { tipe: 'instruksi', teks: 'Permainan Whose is this?: guru angkat benda, tanya pemiliknya.' },
            { tipe: 'audio',     teks: 'Whose pencil is this? It is my pencil! It is Budi\'s pencil!' },
            { tipe: 'instruksi', teks: 'Latihan meminjam benda: berpasangan di kelas.' },
            { tipe: 'audio',     teks: 'Can I borrow your ruler? Yes, here you are! Thank you! You are welcome!' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Guru menghilangkan satu benda dari meja. Siswa tebak benda apa yang hilang.' },
            { tipe: 'audio',     teks: 'What is missing? The eraser is missing! Good job!' },
            { tipe: 'audio',     teks: 'Excellent! You know all classroom objects in English!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Angkat benda satu per satu. Siswa sebut nama dan buat kalimat "This is my...".' },
            { tipe: 'instruksi', teks: 'Nilai Listening (paham "whose is this?"), Speaking (lafal & kalimat kepemilikan), Reading (baca label benda di kelas).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang masih bingung my/your.' },
          ],
        },
      ],
    },

    // TP 12
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Good morning! What day is it today? Let us learn the days of the week!' },
            { tipe: 'audio',     teks: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday!' },
            { tipe: 'instruksi', teks: 'Siswa ikuti ucapkan sambil tepuk tangan per suku kata.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Tempel kartu hari di papan secara berurutan. Tunjuk satu per satu.' },
            { tipe: 'audio',     teks: 'Monday. Tuesday. Wednesday. Thursday. Friday. Saturday. Sunday.' },
            { tipe: 'instruksi', teks: 'Hapus satu kartu. Siswa tebak hari mana yang hilang.' },
            { tipe: 'instruksi', teks: 'Latihan today/tomorrow/yesterday dengan kalender kelas.' },
            { tipe: 'audio',     teks: 'Today is Monday. Tomorrow is Tuesday. Yesterday was Sunday.' },
            { tipe: 'instruksi', teks: 'Siswa sebutkan kegiatan mereka pada hari tertentu.' },
            { tipe: 'audio',     teks: 'On Monday, I go to school. On Saturday, I play with friends. On Sunday, I go to church.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Nyanyikan "Days of the Week" dengan nada lagu favorit.' },
            { tipe: 'audio',     teks: 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday. Seven days in a week!' },
            { tipe: 'audio',     teks: 'Great work! You know all days of the week!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tanya siswa secara acak: "What day is it today? What day is tomorrow?".' },
            { tipe: 'instruksi', teks: 'Nilai Listening (paham today/tomorrow/yesterday), Speaking (lafal hari), Reading (baca kartu nama hari).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang masih kesulitan di Wednesday/Thursday.' },
          ],
        },
      ],
    },

    // TP 13
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Good morning! What did you do this morning before coming to school?' },
            { tipe: 'instruksi', teks: 'Minta 2 siswa cerita rutinitas pagi mereka dalam bahasa Indonesia, lalu guru terjemahkan.' },
            { tipe: 'audio',     teks: 'I wake up. I brush my teeth. I eat breakfast. I go to school!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu gambar seri rutinitas harian. Susun di papan secara berurutan.' },
            { tipe: 'audio',     teks: 'Wake up. Brush teeth. Wash face. Eat breakfast. Go to school. Study. Play. Eat dinner. Sleep.' },
            { tipe: 'instruksi', teks: 'Siswa susun kartu gambar rutinitas mereka sendiri di meja.' },
            { tipe: 'instruksi', teks: 'Latihan bercerita dengan gambar: setiap siswa ceritakan 3 aktivitas hariannya.' },
            { tipe: 'audio',     teks: 'Every morning, I wake up and brush my teeth. Then I eat breakfast. After school, I play with friends.' },
            { tipe: 'instruksi', teks: 'Latihan tanya-jawab berpasangan.' },
            { tipe: 'audio',     teks: 'What do you do every morning? I wake up and brush my teeth. What do you do in the evening? I eat dinner and sleep.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Siswa gambar 3 rutinitas favorit mereka dan beri label dalam bahasa Inggris.' },
            { tipe: 'audio',     teks: 'Having a good routine is important. Good job learning your daily routines!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Minta siswa ceritakan rutinitas paginya dalam 3 kalimat bahasa Inggris.' },
            { tipe: 'instruksi', teks: 'Nilai Listening (paham pertanyaan "what do you do"), Speaking (lafal & urutan kalimat), Reading (baca kartu gambar seri).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang kesulitan menyusun kalimat rutinitas berurutan.' },
          ],
        },
      ],
    },

    // TP 14
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Where do you sleep? Where do you eat? Today we learn about rooms in our house!' },
            { tipe: 'instruksi', teks: 'Tunjukkan gambar denah rumah sederhana di papan.' },
            { tipe: 'audio',     teks: 'This is a house. It has a bedroom, a bathroom, a kitchen, a living room, and a dining room.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu gambar setiap ruangan. Siswa ucapkan nama ruangannya.' },
            { tipe: 'audio',     teks: 'Bedroom. Bathroom. Kitchen. Living room. Dining room. Garden.' },
            { tipe: 'instruksi', teks: 'Cocokkan kartu kegiatan dengan ruangan: tidur-kamar tidur, masak-dapur.' },
            { tipe: 'audio',     teks: 'We sleep in the bedroom. We cook in the kitchen. We eat in the dining room. We watch TV in the living room.' },
            { tipe: 'instruksi', teks: 'Ajarkan preposisi: in, on, under dengan benda di kelas.' },
            { tipe: 'audio',     teks: 'The book is on the table. The bag is under the chair. The pencil is in the box.' },
            { tipe: 'instruksi', teks: 'Siswa gambar denah rumah mereka sendiri dan beri label setiap ruangan.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Siswa presentasikan denah rumah mereka ke teman sebelah.' },
            { tipe: 'audio',     teks: 'This is my house. I have a bedroom and a kitchen. My book is on the table.' },
            { tipe: 'audio',     teks: 'Wonderful! Your house is amazing! Great work today!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjuk gambar ruangan. Minta siswa sebut nama dan satu kegiatan di ruangan itu.' },
            { tipe: 'instruksi', teks: 'Nilai Listening (paham "where do you..."), Speaking (lafal ruangan & kalimat), Reading (baca label denah rumah).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang masih bingung living room/dining room.' },
          ],
        },
      ],
    },

    // TP 15
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Ajak siswa lihat ke luar jendela. Tanya cuaca hari ini.' },
            { tipe: 'audio',     teks: "How's the weather today? Is it sunny or rainy? Let us check!" },
            { tipe: 'instruksi', teks: 'Tunjukkan kartu cuaca sesuai kondisi hari ini.' },
            { tipe: 'audio',     teks: 'Today is sunny! It is hot! Today is rainy! It is wet!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan semua kartu cuaca: sunny, cloudy, rainy, windy, hot.' },
            { tipe: 'audio',     teks: 'Sunny. Cloudy. Rainy. Windy. Hot. Cold.' },
            { tipe: 'instruksi', teks: 'Cocokkan kartu cuaca dengan kartu pakaian atau kegiatan yang sesuai.' },
            { tipe: 'audio',     teks: 'It is rainy. I use an umbrella and a raincoat. It is sunny. I wear sunglasses and play outside.' },
            { tipe: 'instruksi', teks: 'Buat jurnal cuaca kelas: setiap siswa catat cuaca hari ini.' },
            { tipe: 'audio',     teks: 'Today is Monday. The weather is sunny. It is hot. I wear a hat.' },
            { tipe: 'instruksi', teks: 'Berpasangan: tanya-jawab tentang cuaca favorit.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Siswa gambar cuaca hari ini dan tulis satu kalimat deskripsinya.' },
            { tipe: 'audio',     teks: 'Today is sunny. It is hot. I am happy!' },
            { tipe: 'audio',     teks: 'Great! You are our weather reporters now!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjukkan kartu cuaca acak. Tanya "How\'s the weather?" Siswa jawab dengan kalimat lengkap.' },
            { tipe: 'instruksi', teks: 'Nilai Listening (paham pertanyaan cuaca), Speaking (lafal & kalimat "It is..."), Reading (baca kata cuaca di kartu).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang masih bingung sunny/cloudy.' },
          ],
        },
      ],
    },

    // TP 16
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Look at what you are wearing today. Can you describe it in English?' },
            { tipe: 'instruksi', teks: 'Guru mendeskripsikan pakaian yang dikenakan sebagai model.' },
            { tipe: 'audio',     teks: 'I am wearing a white shirt and black trousers. I am wearing black shoes and white socks.' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan kartu gambar pakaian satu per satu.' },
            { tipe: 'audio',     teks: 'Shirt. Trousers. Skirt. Dress. Shoes. Socks. Hat. Jacket. Uniform.' },
            { tipe: 'instruksi', teks: 'Latihan kombinasi warna + pakaian.' },
            { tipe: 'audio',     teks: 'A red shirt. Blue trousers. A white dress. Black shoes. A yellow hat.' },
            { tipe: 'instruksi', teks: 'Permainan: guru gambar pakaian di papan, siswa deskripsikan warnanya.' },
            { tipe: 'instruksi', teks: 'Show and tell: siswa deskripsikan pakaian yang mereka kenakan hari ini.' },
            { tipe: 'audio',     teks: 'I am wearing a blue shirt and grey trousers. I am wearing black shoes.' },
            { tipe: 'instruksi', teks: 'Latihan: siswa deskripsikan pakaian teman di sebelahnya.' },
            { tipe: 'audio',     teks: 'She is wearing a red dress. He is wearing a white shirt and blue trousers.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Tanya 3 siswa acak: "What are you wearing today?" Siswa jawab dengan kalimat lengkap.' },
            { tipe: 'audio',     teks: 'Fashion show time! Walk and describe your outfit in English!' },
            { tipe: 'audio',     teks: 'Excellent! You can describe clothes in English now!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Minta siswa deskripsikan pakaian yang mereka kenakan hari ini dalam 2–3 kalimat.' },
            { tipe: 'instruksi', teks: 'Nilai Listening (paham "what are you wearing?"), Speaking (lafal & kalimat "I am wearing"), Reading (baca kartu nama pakaian).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang masih bingung trousers/skirt/dress.' },
          ],
        },
      ],
    },

    // TP 17
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! What do you do in your free time? Today we talk about hobbies!' },
            { tipe: 'instruksi', teks: 'Guru ceritakan hobi sendiri sebagai model.' },
            { tipe: 'audio',     teks: 'I like reading. I like cooking. Reading is fun! Cooking is interesting!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Perkenalkan kartu gambar hobi satu per satu.' },
            { tipe: 'audio',     teks: 'Reading. Drawing. Singing. Dancing. Playing football. Cooking. Swimming. Cycling.' },
            { tipe: 'instruksi', teks: 'Latihan struktur "I like + gerund".' },
            { tipe: 'audio',     teks: 'I like reading. I like drawing. I like singing. I like playing football.' },
            { tipe: 'instruksi', teks: 'Tambahkan alasan: because it is fun/interesting/exciting.' },
            { tipe: 'audio',     teks: 'I like swimming because it is fun! I like reading because it is interesting!' },
            { tipe: 'instruksi', teks: 'Survei kelas: buat tabel hobi paling populer di kelas.' },
            { tipe: 'audio',     teks: 'What do you like to do? I like dancing! What about you? I like playing football!' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Setiap siswa perkenalkan hobi ke depan kelas dalam 2 kalimat.' },
            { tipe: 'audio',     teks: 'My name is Budi. I like drawing because it is fun!' },
            { tipe: 'audio',     teks: 'Fantastic! You all have wonderful hobbies!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 6,
          langkah: [
            { tipe: 'instruksi', teks: 'Tunjuk kartu hobi acak. Minta siswa buat kalimat lengkap dengan alasan.' },
            { tipe: 'instruksi', teks: 'Nilai Listening (paham "what do you like to do?"), Speaking (lafal & kalimat hobi+alasan), Reading (baca kartu nama hobi).' },
            { tipe: 'instruksi', teks: 'Catat siswa yang kesulitan menggunakan gerund (reading, swimming, cycling).' },
          ],
        },
      ],
    },

    // TP 18
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
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello everyone! Today is a special day. You will present your My World project!' },
            { tipe: 'instruksi', teks: 'Jelaskan urutan presentasi: nama → keluarga → rumah → hobi → rutinitas.' },
            { tipe: 'audio',     teks: 'Hello! My name is ... I am ... years old. I have a ... family. I live in a house with a bedroom and a kitchen. I like ... because it is fun!' },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 40,
          langkah: [
            { tipe: 'instruksi', teks: 'Beri siswa 10 menit untuk menyiapkan/memeriksa poster/buku mini mereka.' },
            { tipe: 'instruksi', teks: 'Mulai presentasi: panggil siswa satu per satu ke depan kelas.' },
            { tipe: 'audio',     teks: 'Please come to the front. Tell us about your world!' },
            { tipe: 'instruksi', teks: 'Setelah setiap presentasi, ajukan 1–2 pertanyaan dari kelas.' },
            { tipe: 'audio',     teks: 'Do you have a sister? What is your favourite colour? What do you eat every morning?' },
            { tipe: 'instruksi', teks: 'Kelas berikan tepuk tangan setelah setiap presentasi.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 4,
          langkah: [
            { tipe: 'instruksi', teks: 'Rayakan pencapaian siswa menyelesaikan Fase A.' },
            { tipe: 'audio',     teks: 'Congratulations, everyone! You have finished Phase A English! You are amazing!' },
            { tipe: 'audio',     teks: 'Keep speaking English every day. Goodbye and good luck!' },
          ],
        },
        {
          fase  : 'Penilaian',
          durasi: 4,
          langkah: [
            { tipe: 'instruksi', teks: 'Nilai berdasarkan presentasi yang sudah dilakukan: kelancaran, lafal, kepercayaan diri.' },
            { tipe: 'instruksi', teks: 'Nilai Listening (paham pertanyaan audience), Speaking (presentasi 3–5 kalimat), Reading (baca poster/buku mini).' },
            { tipe: 'instruksi', teks: 'Catat catatan akhir untuk setiap siswa sebagai refleksi perkembangan selama Fase A.' },
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
