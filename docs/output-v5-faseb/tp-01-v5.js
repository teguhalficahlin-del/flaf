/**
 * =============================================================
 * FLAF — TP B01 (My School Life)
 * File: docs/output-v5-faseb/tp-01-v5.js
 * Format: v5.0
 * Fase: B (Kelas 3–4)
 * Source: flaf-skenario-tp01-v2.txt (Fase B)
 * =============================================================
 */

const TP_B01 = {

  id       : 'tp-b01',
  nomor    : 1,
  kelas    : 3,
  nama     : 'My School Life',
  tema     : 'Mengenal tempat dan aturan di sekolah',
  kluster  : 'A',
  jenis    : 'Biasa',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat menyebutkan nama dan fungsi tempat di sekolah (library dan canteen) dalam kalimat sederhana bahasa Inggris.',
    'Peserta didik dapat menggunakan prosedur "raise your hand" secara konsisten saat ingin menjawab pertanyaan di kelas.',
    'Peserta didik dapat menulis kalimat sederhana tentang tempat di sekolah menggunakan kosakata library, canteen, dan raise your hand.',
  ],

  vocab    : ['library', 'canteen', 'raise your hand', 'pencil', 'book', 'sit down', 'listen', 'write', 'read', 'open', 'bag'],

  persiapan: [
    'Gambar atau foto perpustakaan (library) dan kantin (canteen) — dicetak atau ditampilkan di layar',
    'Lembar kerja siswa: 1 per siswa — 3 kalimat rumpang (lihat L8)',
    'Papan tulis + spidol',
  ],

  checklist: [
    'Gambar library dan canteen sudah disiapkan dan terlihat jelas dari seluruh sudut kelas',
    'Lembar kerja siswa sudah dicetak — 1 per siswa',
    'Kelas sudah tahu prosedur "raise your hand" sebelum memasuki L6',
    'Penilaian formatif sudah dibuka di L6 — minimal 3 siswa sudah dinilai',
    'L8 selesai sebelum waktu tersisa tinggal 10 menit',
    'Siswa yang membacakan di L9 berbeda dari yang menjawab di L6',
    'Closure di L11 tidak diisi aktivitas baru — sesi benar-benar ditutup',
    'Ejaan "library" sudah dieja bersama kelas minimal 1 kali',
  ],

  printables: [
    { file: 'tp-b01-canteen.png',              label: 'Canteen' },
    { file: 'tp-b01-classroom.png',            label: 'Classroom' },
    { file: 'tp-b01-gate.png',                 label: 'Gate' },
    { file: 'tp-b01-hall.png',                 label: 'Hall' },
    { file: 'tp-b01-library.png',              label: 'Library' },
    { file: 'tp-b01-office.png',               label: 'Office' },
    { file: 'tp-b01-playground.png',           label: 'Playground' },
    { file: 'tp-b01-school-map-worksheet.png', label: 'School Map Worksheet' },
    { file: 'tp-b01-toilet.png',               label: 'Toilet' },
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 🟡',
    'L3 🔵',
    'L4 🟠',
    'L5 🟡',
    'L6 🟡',
    'L7 ⚪→🟡',
    'L8 🔵',
    'L9 🔵',
    'L10 🟡',
    'L11 🔵',
  ],

  catatan: {
    risiko: [
      'L3: Guru sering tergoda berbicara terlalu panjang saat memperkenalkan kosakata baru. Batasi diri — maksimal 2 kalimat konteks per kata baru. Sisanya dikerjakan oleh drill di L4.',
      'L8: Writing individual paling sering memakan waktu lebih dari rencana. Jika di menit ke-8 masih banyak siswa yang belum selesai kalimat ke-2 — panggil perhatian kelas, baca jawaban bersama dari papan, dan lanjut.',
      'L7: FLEX screen ini adalah yang pertama dikorbankan jika waktu mepet — itu rancangan yang benar. L8 tidak memerlukan pair practice sebagai prasyarat.',
    ],
    autonomy: [
      'Gambar library dan canteen boleh diganti dengan benda nyata dari sekolah — misal: bawa buku dari perpustakaan, atau tunjuk arah kantin dari jendela kelas.',
      'Chant di L1 boleh diganti dengan ritme yang lebih dikenal siswa — yang penting kata pencil, book, bag, listen, write, read muncul.',
      'Urutan pertanyaan di L6 boleh disesuaikan dengan kondisi kelas — tidak harus persis empat pertanyaan, bisa 3 jika waktu terbatas.',
      'Siswa yang diminta membacakan di L9 tidak harus dipilih acak — guru boleh memilih siswa yang paling siap untuk memberikan model yang kuat bagi kelas.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Jangan mulai sebelum setidaknya 80% kelas fokus ke depan.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Open your eyes. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — beri jeda 3 detik diam, pandang bagian kelas yang paling ramai, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'Jangan mulai L1 sebelum kelas benar-benar siap. 30 detik ekstra di sini lebih murah daripada kehilangan 5 menit di tengah sesi.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Chant Reactivation
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo sekali, siswa belum ikut.

AKSI: Tepuk tangan dua kali untuk menarik perhatian. Ucap chant berikut dengan ritme ketukan meja:

UCAP (guru, ketuk meja 1×1):
"Pencil — book — bag — let's go!
Listen — write — read — let's go!
We are in school — let's GO!"

🗣 TOGETHER — ulangi chant bersama, 2 putaran.

AKSI: Putaran pertama pelan. Putaran kedua lebih cepat. Biarkan siswa ikut mengetuk meja.`,
          bantuan: 'Jika siswa tidak mau ikut di putaran pertama: lakukan sendiri dengan berlebihan — ketuk keras, suara besar — sampai ada 2–3 siswa yang tertawa dan ikut. Itu cukup untuk memulai.',
          cue    : 'Energi naik di sini — ini tujuannya. Biarkan kelas ramai sebentar. Kamu akan turunkan energi di L2.',
          darurat: 'Jika kelas sudah gaduh sebelum chant selesai: hentikan chant di putaran kedua, tepuk satu kali keras, ucap "Freeze" — lanjutkan ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation Tanya-Jawab
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pegang benda di meja guru — atau tunjuk benda di kelas — satu per satu. Tanya kelas.

UCAP: "What is this?" [tunjuk pensil]
→ Tunggu kelas menjawab: "Pencil!"
UCAP: "Good. What is this?" [tunjuk buku]
→ "Book!"
UCAP: "This one?" [tunjuk tas milik salah satu siswa]
→ "Bag!"

Lanjut ke instruksi kelas:
UCAP: "Okay. Now — listen." [tangan di telinga]
→ Tunjuk papan tulis.
UCAP: "Read." [gerak tangan ke arah tulisan di papan — tulis "SCHOOL" besar]
→ Tunjuk siswa untuk membaca.`,
          bantuan: 'Jika kelas tidak merespons "pencil": angkat pensil, ketuk ke meja dua kali, ucap "pen-cil" dengan pelan — tunggu echo dari kelas.',
          cue    : 'Ini bukan tes — ini pengingat. Jika siswa tidak ingat sebuah kata, ucapkan sendiri dengan santai dan lanjut. Jangan berhenti di satu kata lebih dari 5 detik.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 40,

      langkah: [

        // L3 — Introduksi Kosakata Baru: Library dan Canteen
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo, siswa hanya mendengar dan melihat.

AKSI: Tunjukkan gambar library (perpustakaan).

UCAP: "Look at this. This is the library."
→ Jeda 3 detik.
UCAP: "Library. Li-bra-ry." [ucap perlahan, suku kata jelas]
→ Jeda.
UCAP: "In the library, we read books. We use pencils. We are quiet."

AKSI: Ganti ke gambar canteen (kantin).

UCAP: "And this — this is the canteen."
→ Jeda 3 detik.
UCAP: "Can-teen." [ucap perlahan]
→ Jeda.
UCAP: "In the canteen, we eat. We drink water. We open our lunch bag."

AKSI: Tulis di papan:
  library → we read books
  canteen → we eat and drink`,
          bantuan: 'Jika siswa tampak bingung perbedaannya: tunjuk gambar library, ucap "ssssh — quiet" sambil jari di bibir. Tunjuk gambar canteen, ucap "makan makan!" sambil gerak tangan ke mulut. Kontras fisik ini lebih efektif dari penjelasan verbal.',
          cue    : 'Pastikan kedua gambar terlihat jelas dari semua sudut kelas sebelum kamu mulai bicara. Jika tidak punya gambar: gambar kotak sederhana di papan dan beri label besar.',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Drill Kosakata — Tempat di Sekolah
        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER

AKSI: Tunjuk gambar library — tunjuk canteen. Kelas menjawab bersama.

UCAP: "What is this?" [tunjuk library]
→ Kelas: "Library!"
UCAP: "And this?" [tunjuk canteen]
→ Kelas: "Canteen!"

AKSI: Percepat ritme — bolak-balik 4–5 kali tanpa jeda panjang. Lalu balik urutan, munculkan yang tidak terduga.

AKSI: Tunjuk papan tulis di kelas.
UCAP: "Is this a library?"
→ Kelas: "No!"
UCAP: "Is this a canteen?"
→ Kelas: "No! It's a classroom!"
UCAP: "Yes! This is our classroom."

AKSI: Tunjuk 2–3 siswa secara acak, tanya individual:
UCAP: "[nama siswa], what place is this?" [tunjuk salah satu gambar]
→ Tunggu jawaban individual.`,
          diferensiasi: {
            perluSupport: 'hanya perlu menjawab satu kata — "library" atau "canteen."',
            sudahBisa   : 'minta kalimat penuh — "This is the library" atau "This is the canteen."',
          },
          bantuan: 'Jika siswa yang ditunjuk diam lebih dari 5 detik: ucap awal katanya — "li..." — tunggu. Jika masih diam: ucap "library" bersama kelas lalu lanjut ke siswa berikutnya tanpa komentar.',
          cue    : null,
          darurat: null,
          energi : '🟠',
        },

        // L5 — Introduksi: Raise Your Hand
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dulu.

AKSI: Angkat tangan sendiri dengan jelas, siku lurus, tangan setinggi kepala.

UCAP: "This is — raise your hand."
→ Jeda. Ulangi sambil angkat tangan sendiri.
UCAP: "Raise. Your. Hand." [ucap satu kata per gerakan kecil]

🗣 TOGETHER

UCAP: "Everybody — raise your hand!"
→ Tunggu semua siswa mengangkat tangan.
UCAP: "Good. Put your hands down."
→ Tunggu tangan turun.

UCAP: "Again — raise your hand!"
→ Ulangi 2 kali lebih, makin cepat.

AKSI: Sekarang integrasikan ke konteks kelas:
UCAP: "In this class — when you want to answer, raise your hand. Like this." [demo lagi]
UCAP: "When you want to ask — raise your hand."
UCAP: "Don't shout. Raise your hand."`,
          bantuan: 'Jika ada siswa yang tidak mengangkat tangan: dekati, angkat tangan mereka dengan lembut sambil bilang "raise your hand — like this" — senyum, bukan teguran.',
          cue    : 'Frase ini akan dipakai langsung di L6. Pastikan seluruh kelas sudah bisa melakukan gerakan ini dengan benar sebelum lanjut.',
          darurat: null,
          energi : '🟡',
        },

        // L6 — Praktik: Raise Your Hand dalam Konteks
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Guru mulai sesi tanya-jawab singkat — siswa harus raise their hand sebelum menjawab.

UCAP: "I have a question. If you know the answer — raise your hand."
→ Jeda 2 detik.

UCAP: "Question one: Where do we read books at school?"
→ Tunggu siswa raise their hand. Tunjuk salah satu.
→ Jawaban yang diharapkan: "Library!" atau "In the library."

UCAP: "Question two: Where do we eat at school?"
→ Tunggu raise hand. Tunjuk siswa berbeda dari yang pertama.
→ Jawaban: "Canteen!" atau "In the canteen."

UCAP: "Question three: What do we use to write?"
→ Jawaban: "Pencil!"

UCAP: "Question four: What do we do in the library?"
→ Jawaban: "Read books!" / "We read books."`,
          diferensiasi: {
            perluSupport: 'jawaban satu kata diterima sepenuhnya.',
            sudahBisa   : 'dorong dengan "Can you say a full sentence?" setelah mereka menjawab.',
          },
          bantuan: 'Jika tidak ada yang raise hand sama sekali: tunjuk siswa yang paling percaya diri dan ucap "[nama], can you raise your hand and answer?" — ini memberi model sosial bagi siswa lain.',
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai di TP ini. Jika ada siswa yang menjawab tanpa raise their hand — senyum, jangan marah. Ucap: "Good answer! But — raise your hand first. Try again." Ini momen pembiasaan, bukan momen hukuman.',
          darurat: null,
          energi : '🟡',
        },

        // L7 — Reset + Pair Practice [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak, tarik napas bersama.
UCAP: "Okay — breathe in..." [tunjukkan isap napas] "...and out." [hembuskan]
UCAP: "Good. Now — work with your partner."

AKSI: Instruksikan pair work. Setiap pasang saling tanya-jawab.

UCAP: "Ask your partner: 'Where do we read books?'"
→ Partner jawab: "In the library."

UCAP: "Ask your partner: 'Where do we eat?'"
→ Partner jawab: "In the canteen."

UCAP: "And one more: 'What do we do when we want to answer?'"
→ Partner jawab: "Raise your hand."

AKSI: Beri waktu 2–3 menit untuk pair practice. Circulate — dengarkan tanpa menyela kecuali ada kekeliruan konsep besar.`,
          diferensiasi: {
            perluSupport: 'pasangkan dengan siswa yang lebih percaya diri. Boleh pakai satu kata saja sebagai jawaban.',
            sudahBisa   : 'minta mereka balik urutan — partner yang tanya berganti menjadi yang menjawab, dan vice versa.',
          },
          bantuan: `Jika satu pasang diam dan tidak tahu harus memulai: dekati, tanya salah satunya langsung — "Where do we read books?" — setelah dia menjawab, arahkan ke partnernya: "Good. Now you ask her/him."`,
          cue    : null,
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair work menjadi gaduh tak terkendali dalam 1 menit: hentikan, minta semua duduk, lanjutkan ke L8 langsung.',
          energi : '⚪→🟡',
        },

        // L8 — Writing Individual — Kalimat Sederhana
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L6 (L7 dilewati) — sebelum bagikan lembar kerja, ucap: "Okay, let's take a breath. Good job, everyone." Jeda 3 detik. Lanjut.

AKSI: Bagikan lembar kerja (1 per siswa). Tulis di papan model kalimat berikut:

  I go to the __________ to read books.
  I go to the __________ to eat lunch.
  When I want to answer, I ________________________.

👂 LISTEN FIRST — guru demo dulu mengisi baris pertama.

UCAP: "Look at the board. Number one — 'I go to the blank to read books.' What word goes here?"
→ Tunjuk blank. Tunggu kelas menjawab: "Library!"
UCAP: "Yes. Write: library." [tulis di papan]

UCAP: "Number two — you try. Write it in your paper."
→ Beri waktu 2 menit untuk baris 2 dan 3.

AKSI: Circulate. Jangan berdiri di depan — bergerak ke meja siswa.`,
          diferensiasi: {
            perluSupport: 'boleh melihat tulisan di papan. Kalimat ke-3 boleh diisi dengan gambar tangan naik jika tidak bisa menulis frase-nya.',
            sudahBisa   : 'setelah 3 kalimat selesai, minta tambah satu kalimat sendiri tentang sekolah — bebas.',
          },
          bantuan: null,
          cue    : 'Jangan koreksi ejaan kecil saat siswa menulis. Fokus pada konten — apakah kata yang mereka tulis benar secara konsep. Ejaan bisa didiskusikan di L9, bukan saat siswa sedang menulis.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: lewati kalimat ke-3, fokus pada kalimat 1 dan 2 saja. Langsung ke L10 tanpa melalui L9.',
          energi : '🔵',
        },

        // L9 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tulisan siswa. Pilih 2–3 hasil yang menarik — satu yang benar sempurna, satu yang benar tapi ejaan sedikit meleset, satu yang kreatif (jika ada bonus di L8).

UCAP: "Good. Let's see some answers."
→ Minta 2 siswa membacakan kalimat mereka keras-keras ke kelas.
→ Kelas mendengarkan.

UCAP (setelah siswa membacakan): "Nice work. Let's all say it together."
→ Kelas ulang kalimat yang baru dibacakan.

AKSI: Tunjukkan bahwa ejaan "library" adalah kata yang cukup panjang — tulis di papan perlahan: L-I-B-R-A-R-Y.
UCAP: "Library — tricky word. Let's spell it together."
→ Tunjuk huruf satu per satu, kelas ucap bersama.`,
          bantuan: `Jika siswa yang diminta membaca menolak atau malu: jangan paksa. Ucap "That's okay — maybe next time" dan tunjuk siswa lain. Kembali ke siswa itu di akhir sesi secara pribadi jika memungkinkan.`,
          cue    : 'Pilih siswa yang berbeda dari yang sudah berpartisipasi di L6. Ini momen inklusi, bukan momen perfeksionisme.',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit]',
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 8,

      langkah: [

        // L10 — Sharing dan Review Cepat
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Siswa simpan lembar kerja. Guru kembali ke depan kelas.

UCAP: "Good work today, everyone. Let's remember what we learned."
UCAP: "This is the...?" [tunjuk gambar library]
→ Kelas: "Library!"
UCAP: "And this?" [tunjuk gambar canteen]
→ Kelas: "Canteen!"
UCAP: "And when you want to answer — what do you do?"
→ Kelas angkat tangan sambil menjawab: "Raise your hand!"

UCAP: "Perfect. Library — canteen — raise your hand. Remember these three."

AKSI: Tunjuk kata-kata di papan sekali lagi. Hapus satu per satu sambil kelas mengucapkan kata yang dihapus.`,
          bantuan: null,
          cue    : 'Energi harus turun di sini — jaga ritme tetap pelan dan tenang. Ini bukan drill, ini konsolidasi.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — Closure Emosional
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan dari sebelumnya.

UCAP: "Before we finish — I want to ask you something."
UCAP: "Today, what was your favorite part?"

→ Beri jeda 5 detik. Tidak perlu semua menjawab.
→ Tunjuk 1–2 siswa yang mau berbagi. Respons apa saja diterima.

UCAP: "Good. I'm happy you're here today."

UCAP: "Next time — we will talk about our friends. What do they look like? What are their names?"
[Ini teaser untuk TP02 — Describing People]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja dan menyiapkan diri untuk mata pelajaran berikutnya. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : 'Jangan akhiri sesi dengan instruksi administratif. Kalimat terakhir guru harus terasa seperti penutup, bukan pengumuman.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B01;
