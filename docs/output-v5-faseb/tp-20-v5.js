/**
 * =============================================================
 * FLAF — TP B20 (Writing: My Story)
 * File: docs/output-v5-faseb/tp-20-v5.js
 * Format: v5.0
 * Fase: B (Kelas 4)
 * Jenis: Panen — Kluster E
 * Source: flaf-skenario-tp20-v2.txt (Fase B)
 * =============================================================
 */

const TP_B20 = {

  id       : 'tp-b20',
  nomor    : 20,
  kelas    : 4,
  nama     : 'Writing: My Story',
  tema     : 'Menulis cerita naratif tentang hari kemarin menggunakan kosakata past tense dan struktur naratif',
  kluster  : 'E',
  jenis    : 'Panen',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat merencanakan dan menulis cerita naratif pendek (minimal 5 kalimat) tentang hari kemarin menggunakan kata kerja bentuk lampau (went, ate, played, woke up) dari Kluster E.',
    'Peserta didik dapat menggunakan kata penghubung narasi (first, then, after that) untuk menyusun urutan kejadian dalam cerita yang koheren.',
    'Peserta didik dapat membacakan cerita yang ditulis sendiri dengan percaya diri sebagai bentuk berbagi dengan kelas.',
  ],

  vocab    : ['went', 'ate', 'played', 'Yesterday, I...', 'woke up', 'first', 'then', 'after that', 'football', 'always', 'sometimes', 'I can', 'go to school', 'eat breakfast', 'sleep', 'school', 'friends', 'once upon a time', 'the end'],

  persiapan: [
    'Lembar kerja siswa: 1 per siswa — Bagian A (Planning Sheet) dan Bagian B (Writing Space) dalam satu lembar',
    'Contoh cerita guru "My Yesterday" — sudah ditulis di kertas besar atau papan kecil SEBELUM kelas dimulai — tidak ditulis saat L5 berlangsung (lihat L5)',
    'Teks "Budi\'s Day" dari TP19 — ditempel di papan atau dibagikan ulang sebagai referensi model (opsional, lihat L3)',
    'Papan tulis + spidol untuk struktur pengingat empat baris di L6 — tidak dihapus sampai L7 selesai',
  ],

  checklist: [
    'Cerita guru "My Yesterday" sudah disiapkan sebelum kelas — bukan ditulis saat L5 berlangsung',
    'Lembar kerja sudah dicetak — Bagian A (Planning Sheet) dan Bagian B (Writing Space) dalam satu lembar',
    'Teks "Budi\'s Day" TP19 tersedia sebagai referensi model (opsional tapi sangat membantu)',
    'Struktur pengingat empat baris di papan TIDAK dihapus sampai L7 selesai',
    'Penilaian formatif sudah dibuka di L6 atau L7 — minimal 4 siswa sudah dinilai (Panen)',
    'Breakpoint Alami sudah disampaikan ke siswa jika sesi terpotong',
    'Guru tidak mendominasi lebih dari 40% layar — L4 sampai L10 adalah layar siswa',
    'Siswa yang membacakan di L11 berbeda dari yang paling aktif menjawab di L2',
    'Kalimat "Nobody else has the same yesterday" diucapkan di L12',
    'Tidak ada kosakata baru yang diperkenalkan — semua dari TP16–19',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🟠',
    'L2 🟡',
    'L3 🔵',
    'L4 🟡',
    'L5 🔵',
    'L6 🔵',
    'L7 🔵',
    'L8 🔵',
    'L9 🟡',
    'L10 🔵',
    'L11 🟡',
    'L12 🔵',
  ],

  catatan: {
    risiko: [
      'Budget 64 menit — lebih longgar dari TP15 tapi tetap ketat karena L6 membutuhkan 10–12 menit penuh. L8, L9, L10 adalah tiga FLEX yang menjadi buffer. Jika L6 memakan 12 menit penuh dan L7 8 menit, waktu tersisa adalah 16 menit untuk L8–L12 — cukup jika dua dari tiga FLEX dilewati.',
      'L6 adalah layar terpenting. Jangan potong L6 lebih awal dari 8 menit. Cerita yang tidak selesai lebih baik dari cerita yang terburu-buru.',
      'L7: Satu-satunya hal yang diperiksa adalah apakah ada minimal satu kata past tense dalam tiga kalimat pertama. Bukan panjang cerita, bukan spelling, bukan grammar lain. Guru yang terlalu detail di L7 akan membuang waktu yang dibutuhkan untuk L8–L11.',
      'Breakpoint Alami: jika digunakan, cerita guru harus tetap terlihat di awal sesi kedua — Planning Sheet yang sudah terisi tidak bisa digantikan oleh instruksi verbal.',
    ],
    autonomy: [
      'Cerita guru di L5 paling bermakna jika menggunakan kejadian nyata dari hari kemarin guru sendiri. Siswa akan lebih percaya dan lebih termotivasi jika ceritanya terasa nyata.',
      'Kalimat "I always go to the market on [hari]" sengaja dimasukkan di L5 untuk menunjukkan bahwa always/sometimes dari TP16 bisa hadir dalam cerita past tense. Guru boleh menggantinya dengan kalimat lain yang menggunakan always/sometimes.',
      'Siswa yang menulis sebagian dalam Bahasa Indonesia — terima. Tulis versi Inggrisnya di pojok papan tanpa komentar jika diminta. Yang penting struktur "Yesterday was... First I... Then I..." ada.',
      'Peer feedback di L9 ("I like your story because ___") adalah langkah kecil ke critical appreciation. Siswa yang memberi feedback substantif perlu diapresiasi di L11.',
    ],
  },

  breakpoint: {
    posisi    : 'Setelah L5, sebelum L6',
    instruksi : `Jika waktu tidak cukup: hentikan di sini. Sesi berikutnya mulai dari Layar 6. Siswa simpan lembar kerja — Planning Sheet sudah terisi, cerita guru sudah terlihat. Di awal sesi kedua: minta siswa buka Planning Sheet, baca ulang tiga kejadian yang dipilih, lalu buka Bagian B dan mulai menulis dari L6.`,
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. Today is a special day — again."`,
    bantuan: 'Jika ada siswa yang masih gaduh — jeda 3 detik diam, lanjutkan hanya setelah mereka berhenti.',
    cue    : '"Again" — siswa yang ingat TP04, TP08, TP15 akan merasakan continuity. Ini adalah Panen keempat dan terakhir sebelum Capstone. Untuk pertama kali dalam Fase B, siswa menulis cerita naratif dalam past tense — genre yang paling dekat dengan tulisan nyata.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 11,

      langkah: [

        // L1 — Reconnect — Chant Gabungan Kluster E
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"I can run — I can play — I can GO — GO!
Turn left — go straight — I went there — GO!
Yesterday I ate — I played — I woke — GO!
My story — let's write it — GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal semua kata: yang paling penting adalah baris ketiga ("Yesterday I ate — I played — I woke") — ulangi baris ini dua kali jika perlu.',
          cue    : 'Chant merangkum empat TP Kluster E — olahraga (TP16), arah (TP17), past tense (TP18), narasi (TP19/20). Baris terakhir "my story — let\'s write it" adalah framing Panen. Biarkan energi naik di 🟠 tapi jaga agar tidak meledak.',
          darurat: null,
          energi : '🟠',
        },

        // L2 — Warm-Up — Review Kosakata TP16–19
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tanya kelas dengan ritme cepat — satu pertanyaan per 5 detik.

UCAP: "Go — yesterday?"
→ Kelas: "Went!"
UCAP: "Eat — yesterday?"
→ Kelas: "Ate!"
UCAP: "Play — yesterday?"
→ Kelas: "Played!"
UCAP: "How do we start a story about yesterday?"
→ Kelas: "Yesterday, I...!"
UCAP: "First, then, after that — remember?"
→ Kelas: "First — then — after that!"
UCAP: "And — what sport can you play?"
→ Kelas menyebut: "Football! Badminton! Swimming!"
UCAP: "How do you get to school — left, right, or straight?"
→ Kelas menjawab variasi.

UCAP: "Good. You remember everything. Today — you write YOUR story."`,
          bantuan: 'Jika kelas stagnan di satu pertanyaan: ucapkan jawabannya sendiri, minta kelas echo, lanjut. Jika kelas tidak bisa menjawab dua atau lebih pertanyaan: jangan panik — scaffold di L5 dan L6 akan mengingatkan semua yang perlu diingat.',
          cue    : 'Warm-up adalah aktivasi, bukan tes. Jika kelas tidak bisa menjawab dua pertanyaan atau lebih — lanjut ke L3 tanpa re-teaching.',
          darurat: null,
          energi : '🟡',
        },

        // L3 — Orientasi Panen — Apa yang Kita Tulis
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kembali ke depan kelas. Suara lebih pelan.

UCAP: "Today — we write a story. A real story."
→ Jeda.
UCAP: "Remember Budi's Day? Yesterday was Monday. First, he ate breakfast. He played football."
UCAP: "Today — YOU are the character. YOUR day. YOUR story."

AKSI: Jika teks "Budi's Day" masih tersedia:
UCAP: "Look at Budi's story. Now — imagine your own version."
UCAP: "Same structure. But different person — and different day."

AKSI: Tulis di papan:
  MY STORY
  → Yesterday, I...
  → First / Then / After that
  → I can... / I always... / I sometimes...
  → The end.

UCAP: "Your story. Your yesterday. Your words."
UCAP: "Let me show you first."`,
          bantuan: null,
          cue    : '"YOU are the character" adalah kalimat terpenting di layar ini. Ini adalah pergeseran dari membaca tentang Budi (TP19) ke menulis tentang diri sendiri (TP20). Ucap dengan penekanan pada "YOU."',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 53,

      langkah: [

        // L4 — Planning — Siswa Pilih Kejadian dari Hari Kemarin
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan lembar kerja (1 per siswa). Minta siswa buka Bagian A — Planning Sheet.

Bagian A berisi:

  MY STORY PLAN

  Yesterday was: _______________________

  Three things I did yesterday:
  1. ___________________________________
  2. ___________________________________
  3. ___________________________________

  One place I went: ______________________

  How I felt at the end of the day: _______________________

UCAP: "Fill in Bagian A. Just key words — not sentences yet."
UCAP: "What day was yesterday? What did YOU do?"

AKSI: Circulate pelan. Jangan intervensi kecuali ada siswa yang benar-benar bingung.`,
          diferensiasi: {
            perluSupport: 'bantu pilih dengan tanya langsung — "Kemarin kamu ngapain pagi-pagi?" — lalu arahkan tangan mereka ke kertas.',
            sudahBisa   : 'setelah tiga kejadian terisi, tambah satu kejadian keempat: "One more special moment from yesterday."',
          },
          bantuan: `Jika siswa duduk diam tidak menulis setelah 1 menit: dekati, tunjuk baris pertama, ucap pelan — "What day was yesterday? Monday? Tuesday?" — setelah mereka menjawab, arahkan: "Write it here."`,
          cue    : 'Planning Sheet ini sengaja sederhana — tiga kejadian, satu tempat, satu perasaan. Siswa tidak perlu merasa bahwa hari kemarin mereka harus "menarik." Bahkan "I woke up, ate breakfast, went to school" adalah cerita yang valid.',
          darurat: 'Jika sebagian besar kelas tidak mengerti instruksi: bacakan setiap baris sambil isi contoh di papan. Maksimal 2 menit — lanjut ke L5 setelahnya.',
          energi : '🟡',
        },

        // L5 — Modeling — Guru Demo Cerita "My Yesterday"
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjukkan cerita guru — kertas besar atau papan kecil yang sudah disiapkan sebelum kelas.

  MY YESTERDAY

  Yesterday was [hari yang sebenarnya].

  First, I woke up at six o'clock.
  Then, I ate breakfast. I ate rice and egg.
  After that, I went to school.
  At school, I played badminton with my students.
  Then, I went to the market.
  I always go to the market on [hari].
  In the evening, I went home and went to sleep.

  It was a good day. I felt happy because I played badminton.

UCAP: "Listen. I will read my story."
→ Baca seluruh teks dengan pelan dan jelas.

UCAP: "Now — let's look at the structure."
AKSI: Tunjuk teks per bagian:
UCAP: "Kalimat pertama — when." [tunjuk "Yesterday was..."]
UCAP: "Lalu — kejadian berurutan. First, then, after that." [tunjuk urutan]
UCAP: "Saya juga pakai 'always' — I always go to the market." [tunjuk kalimat always]
UCAP: "Kalimat terakhir — how you felt. Because." [tunjuk kalimat penutup]

UCAP: "Same structure as Budi's Day — but this is MY story."
UCAP: "Now — yours."`,
          bantuan: 'Jika siswa tampak kewalahan melihat panjang cerita: tunjuk hanya empat kalimat pertama — "Cukup ini dulu. Tambah nanti."',
          cue    : 'Cerita guru harus menggunakan hari yang nyata dan kejadian yang benar-benar terjadi kemarin. Kalimat "I always go to the market on [hari]" sengaja memasukkan always dari TP16 — ini menunjukkan bahwa kosakata lama bisa hadir dalam cerita past tense. Tunjuk ini secara eksplisit.',
          darurat: null,
          energi : '🔵',
        },

        // L6 — Writing Draft — Cerita "My Yesterday"
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa buka Bagian B — Writing Space di lembar kerja.

UCAP: "Now — your turn. Use your Planning Sheet. Write YOUR story."

AKSI: Tulis di papan sebagai pengingat:
  Start:   Yesterday was _______.
  Add:     First / Then / After that, I _______ [past tense verb]
  Extra:   I always / sometimes _______. / I can _______.
  Close:   It was a ___ day. I felt ___ because ___.

UCAP: "Use went, ate, played — and any other past word you know."
UCAP: "Your story. Your day. Your words."

AKSI: Mundur dari depan kelas. Circulate pelan.`,
          diferensiasi: {
            perluSupport: 'cukup tulis empat kalimat — Yesterday was ___, First I ___, Then I ___, It was a ___ day.',
            sudahBisa   : 'tulis enam atau lebih kalimat, gunakan always/sometimes/I can, tambah kalimat tentang arah ("I went to the market — turn left from school").',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai. Selama L6, guru tidak mengajar. Jika ada siswa yang menggunakan past tense yang salah (goed, eated) — tulis di pojok papan versi yang benar tanpa komentar. Jika ada yang menulis dalam Bahasa Indonesia — terima kata kuncinya dan tulis versi Inggrisnya di pojok papan. Produksi lancar adalah prioritas.',
          darurat: 'Jika setelah 5 menit lebih dari separuh kelas belum menulis kalimat pertama: hentikan semua, minta kelas baca baris pertama dari cerita guru di papan bersama, lalu lanjutkan. Jangan beri instruksi baru.',
          energi : '🔵',
        },

        // L7 — Circulation + Penilaian Formatif
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Teruskan circulate dari L6. Fokus sekarang bergeser ke penilaian.

UCAP: "Keep writing. I will come to you."

AKSI: Kunjungi tiap meja. Untuk setiap siswa:
→ Baca 2–3 kalimat pertama diam-diam.
→ Jika past tense sudah dipakai: angguk, ucap pelan "Good — keep going."
→ Jika tidak ada past tense sama sekali: tunjuk papan, ucap pelan "Use 'went' or 'ate' — look at the board."
→ Jangan tulis ulang kalimat mereka.`,
          bantuan: 'Jika menemukan siswa yang hanya menulis satu kalimat dan berhenti: duduk sebentar, baca yang sudah ada, tanya pelan — "And then? What did you do next?" — tunggu mereka menjawab lisan, lalu: "Write that." Jangan tulis untuk mereka.',
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif jika belum dibuka di L6. Di L7, guru hanya cek satu hal: apakah ada minimal satu kata past tense dalam tiga kalimat pertama? Jika ya — tulisan itu valid sebagai Panen. Grammar lain (articles, spelling) diabaikan.',
          darurat: 'Jika menit ke-54 sudah tercapai sebelum L7 selesai: hentikan circulate, lanjut ke L11 (Gallery Sharing) langsung. Lewati L8, L9, dan L10.',
          energi : '🔵',
        },

        // L8 — Silent Reread — Underline Favorite Sentence [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Stop for a moment. Put your pen down."
→ Jeda 3 detik.
UCAP: "Read your story — from the beginning. Just for yourself."
→ Jeda 30 detik.

UCAP: "Now — find your favorite sentence. The one that feels most like YOU. Underline it."
→ Beri waktu 20 detik.

UCAP: "That sentence — that is the heart of your story."`,
          bantuan: 'Jika siswa tampak bingung: bisikkan pelan — "Kalimat mana yang paling kamu suka? Yang paling terasa seperti kamu?"',
          cue    : 'Momen privat ini mempersiapkan siswa untuk L9 — mereka sudah tahu bagian mana yang ingin dibagikan. Guru tidak berkeliling. Biarkan ruang menjadi tenang.',
          darurat: '[FLEX — lewati jika waktu tersisa < 15 menit]',
          energi : '🔵',
        },

        // L9 — Peer Sharing — Baca Satu Bagian ke Partner [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "Read the sentence you underlined — or your favorite part — to your partner."
UCAP: "Partner — listen. Then say: 'I like your story because ___'"

AKSI: Beri waktu 3 menit — masing-masing 90 detik per arah.

UCAP (setelah 3 menit): "Good. You can go back and add or change one thing."
→ Beri 1 menit untuk perubahan kecil.`,
          bantuan: `Jika partner tidak tahu harus berkata apa: berikan contoh — "You can say: 'I like your story because you played football' atau 'because it is funny.'"`,
          cue    : '"I like your story because ___" meminta partner memberi alasan singkat — ini adalah feedback yang lebih kaya dari TP08. Siswa kelas 4 di TP20 sudah lebih siap untuk feedback yang sedikit lebih substantif.',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit atau cerita siswa rata-rata kurang dari 3 kalimat] Jika peer sharing gaduh dalam 1 menit: hentikan. Lanjut ke L10.',
          energi : '🟡',
        },

        // L10 — Mini Self-Check — Lingkari Kata Past Tense [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Look at your story one more time."
UCAP: "Circle every past tense word — went, ate, played, woke up, or any past word you used."
→ Beri waktu 30 detik.

UCAP: "How many circles do you have? Count."
→ Biarkan beberapa siswa menjawab berapa lingkaran mereka.

UCAP: "Good. Every circle is a past tense word. You used the past tense to write your story."`,
          bantuan: `Jika siswa tidak menemukan kata past tense: dekati pelan, tunjuk satu kalimat, bisikkan — "Is 'went' in here? Or 'ate'? Circle it." Jangan koreksi isi — hanya bantu menemukan.`,
          cue    : 'Ini adalah self-check teknis — bukan penilaian. Tujuannya: siswa melihat sendiri bahwa mereka sudah menggunakan past tense dalam tulisan mereka. Guru tidak menghitung atau menilai jumlah lingkaran. Ini adalah momen kepercayaan diri sebelum gallery sharing.',
          darurat: '[FLEX — lewati jika waktu tersisa < 8 menit]',
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 9,

      langkah: [

        // L11 — Gallery Sharing — Dua Suara
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta semua siswa meletakkan pena. Kembali ke depan kelas.

UCAP: "We are almost done. I want to hear from two people."
UCAP: "Who wants to read one part of their story?"
→ Tunggu sukarelawan. Jika tidak ada dalam 5 detik, tunjuk siswa yang dari observasi L7 sudah menulis dengan baik.

AKSI: Siswa pertama membacakan satu bagian ceritanya.
→ Kelas mendengarkan.
→ Guru: "What past tense word did they use?"
→ Kelas menjawab kata went/ate/played yang didengar.

AKSI: Siswa kedua membacakan bagian yang berbeda.
→ Kelas mendengarkan.
→ Guru: "What happened in their story?"
→ Kelas menjawab singkat.

UCAP: "Two different stories. Two different yesterdays. Both are real."`,
          bantuan: 'Jika tidak ada sukarelawan: gunakan observasi L7 — "I read your story — it\'s very interesting. Can you share one sentence?"',
          cue    : '"Two different yesterdays — both are real" adalah kalimat penutup gallery yang bermakna. Setiap siswa punya cerita yang berbeda — tidak ada yang lebih baik atau lebih buruk. Ucap dengan tulus.',
          darurat: null,
          energi : '🟡',
        },

        // L12 — Closure Emosional — Refleksi Kluster E dan Fase B
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa memegang lembar kerja mereka. Suara guru pelan.

UCAP: "Look at what you wrote today."
→ Jeda 5 detik. Biarkan siswa membaca cerita mereka sendiri.

UCAP: "In Kluster E — you learned to play sports in English."
UCAP: "You learned to find your way — turn left, go straight."
UCAP: "You learned to talk about the past — went, ate, played."
UCAP: "And today — you wrote your story. In English."

→ Jeda 3 detik.

UCAP: "That story — that is yours. Nobody else has the same yesterday."

AKSI: Jika ini adalah akhir Fase B atau mendekati Capstone:
UCAP: "You have traveled far. From 'hello' to 'my story.' That is not a small thing."

AKSI: Minta siswa menulis nama mereka besar-besar di bagian atas lembar kerja. Ritual kepemilikan — sama seperti TP04, TP08, TP15.

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja.`,
          bantuan: null,
          cue    : 'Kalimat "Nobody else has the same yesterday" adalah versi TP20 dari ritual penutup Panen. "Yesterday" adalah yang paling personal dari semua — tidak ada dua orang yang mengalami hari yang persis sama. Ucap dengan tulus dan lambat.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B20;
