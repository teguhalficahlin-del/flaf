/**
 * =============================================================
 * FLAF — TP B15 (Writing: My Country)
 * File: docs/output-v5-faseb/tp-15-v5.js
 * Format: v5.0
 * Fase: B (Kelas 4)
 * Jenis: Panen — Kluster D
 * Source: flaf-skenario-tp15-v2.txt (Fase B)
 * =============================================================
 */

const TP_B15 = {

  id       : 'tp-b15',
  nomor    : 15,
  kelas    : 4,
  nama     : 'Writing: My Country',
  tema     : 'Menulis teks deskriptif tentang Indonesia — profesi, makanan, dan perayaan',
  kluster  : 'D',
  jenis    : 'Panen',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat merencanakan dan menulis teks deskriptif tentang Indonesia (tiga topik: profesi, makanan, perayaan) dalam satu teks kohesif.',
    'Peserta didik dapat mengintegrasikan kosakata dan pola kalimat dari TP12–14 ("She works at", "I like... because...", "On... we...") dalam satu produksi tulis yang utuh.',
    'Peserta didik dapat membacakan satu bagian dari teks yang ditulis sendiri dengan percaya diri di depan kelas.',
  ],

  vocab    : ['doctor', 'farmer', 'She works at...', 'rendang', 'spicy', 'I like... because...', 'Eid', 'visit', 'On... we...', 'grandmother', 'family', 'happy', 'rice'],

  persiapan: [
    'Lembar kerja siswa: 1 per siswa — Bagian A (Planning Sheet tiga topik) dan Bagian B (Writing Space) dalam satu lembar',
    'Teks contoh guru "My Country" — sudah ditulis sebelum kelas di kertas besar atau papan kecil (lihat L5); jangan tulis saat L5 berlangsung',
    'Papan tulis + spidol untuk struktur pengingat lima bagian di L6',
  ],

  checklist: [
    'Teks contoh "My Country" guru sudah disiapkan sebelum kelas — bukan ditulis saat L5 berlangsung',
    'Lembar kerja sudah dicetak — Bagian A (Planning Sheet tiga topik) dan Bagian B (Writing Space) dalam satu lembar',
    'Struktur pengingat lima bagian sudah tertulis di papan sebelum L6 dimulai',
    'Penilaian formatif sudah dibuka di L6 atau L7 — minimal 4 siswa sudah dinilai',
    'Breakpoint Alami sudah disampaikan ke siswa jika sesi terpotong',
    'Guru tidak mendominasi lebih dari 40% layar — L4 sampai L10 adalah layar siswa',
    'Siswa yang membacakan di L11 berbeda dari yang paling aktif menjawab di L2',
    'Kalimat "Nobody else has the same Indonesia" diucapkan di L12',
    'Tidak ada kosakata baru yang diperkenalkan — semua dari TP12–14',
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
      'Budget 64 menit lebih ketat dari TP04 dan TP08. L8, L9, L10 adalah tiga FLEX yang menjadi buffer. Jika L6 memakan 12 menit penuh dan L7 berjalan 8 menit, waktu tersisa sekitar 16 menit untuk L8–L12 — cukup jika L8 dan L9 diperpendek atau dilewati.',
      'L6 adalah layar terpanjang dan paling kritis. Jangan potong L6 lebih awal dari 8 menit. Teks yang tidak selesai lebih baik dari teks yang terburu-buru.',
      'L7: Guru akan tergoda membantu terlalu banyak. Tahan. Di Panen, guru hanya cek: apakah tiga topik (job, food, celebration) hadir? Jika ya — tulisan itu valid, apapun kualitas grammarnya.',
      'Breakpoint Alami: jika digunakan, teks contoh guru harus tetap terlihat di awal sesi kedua. Jika di papan, jangan hapus. Lembar kerja yang hilang sebelum sesi berikutnya adalah risiko nyata — minta siswa menyimpan secara fisik.',
    ],
    autonomy: [
      'Teks contoh guru di L5 paling bermakna jika menggunakan orang, makanan, dan perayaan yang nyata dari komunitas guru — bukan karakter fiksi. Siswa lebih percaya pada contoh yang nyata.',
      'Jika siswa ingin menulis tentang profesi, makanan, atau perayaan yang tidak ada di TP12–14 (nelayan, pempek, Galungan) — izinkan dan bantu. Kreativitas ini tanda siswa sudah melampaui scaffold.',
      'Peer sharing di L9 boleh dilakukan sebagian dalam Bahasa Indonesia — yang penting teks yang dibacakan tetap dalam Bahasa Inggris.',
      'Kalimat penutup teks contoh guru boleh diubah sesuai konteks lokal. Yang penting ada satu kalimat penutup yang terasa personal, bukan formal.',
    ],
  },

  breakpoint: {
    posisi    : 'Setelah L5, sebelum L6',
    instruksi : `Jika waktu tidak cukup: hentikan di sini. Sesi berikutnya mulai dari L6. Siswa simpan lembar kerja mereka — Planning Sheet sudah terisi, teks guru sudah terlihat. Di awal sesi kedua: minta siswa buka Planning Sheet (Bagian A) terlebih dahulu — baca ulang pilihan mereka. Baru kemudian buka Bagian B dan mulai menulis dari L6. Guru tidak perlu menjelaskan ulang struktur — teks contoh di papan atau kertas besar cukup untuk mengingatkan.`,
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. Today is a special day — again."`,
    bantuan: 'Jika ada siswa yang masih gaduh — jeda 3 detik diam, lanjutkan hanya setelah mereka berhenti.',
    cue    : '"Again" adalah kata yang bermakna — siswa yang ingat TP04 dan TP08 akan merasakan continuity. Ini Panen ketiga mereka. Untuk pertama kali dalam Fase B, Panen ini tentang identitas — tentang negara mereka sendiri, bukan jadwal atau makanan semata.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 12,

      langkah: [

        // L1 — Reconnect — Chant Gabungan Kluster D
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Doctor — farmer — they help us — GO!
Rendang — spicy — I like it because — GO!
On Eid — we visit — we eat together — GO!
This is my country — let's write it — GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal semua kata di putaran pertama: itu normal untuk chant panjang. Perlambat ritme, tunjuk papan jika kata-kata sudah tertulis. Putaran kedua akan lebih baik.',
          cue    : 'Baris terakhir ("this is my country — let\'s write it") adalah framing Panen. Biarkan energi naik di 🟠 — tapi jaga agar tidak meledak ke 🔴. Ini pemanasan, bukan puncak.',
          darurat: null,
          energi : '🟠',
        },

        // L2 — Warm-Up — Review Semua Kosakata TP12–14
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tanya kelas dengan ritme cepat — satu pertanyaan per 5 detik. Ini pemanasan, bukan tes.

UCAP: "A doctor — where does she work?"
→ Kelas: "She works at a hospital!"
UCAP: "A farmer — what does she do?"
→ Kelas: "She grows food!"
UCAP: "Rendang — spicy, sweet, or salty?"
→ Kelas: "Spicy!"
UCAP: "I like rendang — why?"
→ Kelas: "Because it is delicious!" atau variasi lain.
UCAP: "On Eid — what do we do?"
→ Kelas: "We visit family! We eat rendang!"
UCAP: "How do you feel on Eid?"
→ Kelas: "Happy! Excited!"

UCAP: "Good. You remember everything from Kluster D. Today — you put it all in one piece of writing about your country."`,
          bantuan: 'Jika kelas stagnan di satu pertanyaan lebih dari 5 detik: ucapkan jawabannya sendiri, minta kelas echo, lanjut ke pertanyaan berikutnya.',
          cue    : 'Jika kelas tidak bisa menjawab dua atau lebih pertanyaan — jangan panik dan mundur ke re-teaching. Scaffold di L5 dan L6 akan mengingatkan semua yang perlu diingat untuk writing.',
          darurat: null,
          energi : '🟡',
        },

        // L3 — Orientasi Panen — Apa yang Kita Tulis
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kembali ke depan kelas. Suara lebih pelan.

UCAP: "Today — we write about our country. Indonesia."
→ Jeda.
UCAP: "Not one topic. Three topics — in one text."

AKSI: Tulis di papan:
  MY COUNTRY
  → The people who help us (jobs)
  → The food we love (culture)
  → The celebrations we share (traditions)

UCAP: "You choose the job, the food, the celebration. Your words. Your Indonesia."
UCAP: "Let me show you first. Then you write your own."`,
          bantuan: null,
          cue    : '"Your Indonesia" adalah kalimat terpenting di layar ini. Indonesia yang digambarkan setiap siswa akan berbeda — siswa di Pekanbaru menulis tentang soto dan Lebaran; siswa dari Bali mungkin menulis tentang nelayan dan Galungan. Semua valid. Tidak ada satu jawaban yang benar.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 53,

      langkah: [

        // L4 — Planning — Siswa Pilih Profesi, Makanan, Perayaan
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan lembar kerja (1 per siswa). Minta siswa buka Bagian A — Planning Sheet.

Bagian A berisi:

  MY COUNTRY PLAN

  One job that helps my community:
  Job: _______________________
  Where she/he works: _______________________

  One food I love from my country:
  Food: _______________________
  Why I like it: _______________________ (because _______)

  One celebration I share with family:
  Celebration: _______________________
  What we do: _______________________

UCAP: "Fill in Bagian A. Just key words — not full sentences yet."
UCAP: "Think about YOUR Indonesia. Your job, your food, your celebration."

AKSI: Circulate pelan. Jangan intervensi kecuali ada siswa yang benar-benar bingung tentang instruksi.`,
          diferensiasi: {
            perluSupport: 'bantu pilih dengan tanya langsung — "Siapa satu orang yang bekerja keras di sekitar kamu?" dan "Makanan apa yang paling kamu suka?" — lalu arahkan tangan mereka ke kertas.',
            sudahBisa   : 'setelah tiga bagian terisi, tambah satu catatan: "One more thing about Indonesia I want to say: ___."',
          },
          bantuan: 'Jika siswa duduk diam tidak menulis apapun setelah 1 menit: dekati, tunjuk baris pertama, ucap pelan — "Who helps people in your neighborhood? A doctor? A farmer? A teacher?" — setelah mereka menyebut satu, arahkan: "Write that job here."',
          cue    : 'Siswa boleh memilih profesi di luar doctor dan farmer — nelayan, bidan, chef, guru. Boleh memilih makanan apapun. Boleh memilih perayaan apapun. Planning Sheet adalah alat berpikir — bukan batasan.',
          darurat: 'Jika sebagian besar kelas tidak mengerti instruksi Planning Sheet: bacakan setiap baris dengan keras sambil isi contoh di papan. Maksimal 2 menit ekstra — lanjut ke L5 setelahnya.',
          energi : '🟡',
        },

        // L5 — Modeling — Guru Demo Teks "My Country" Lengkap
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjukkan teks yang sudah disiapkan sebelum kelas — kertas besar atau papan kecil:

  MY COUNTRY

  My country is Indonesia. Indonesia is a beautiful country.

  In my country, there are many helpers. One of them is Ibu Rina.
  She is a farmer. She works on a farm near my village.
  She grows rice and vegetables. Her job is important because
  she feeds our community.

  I also love the food in my country. My favorite food is rendang.
  Rendang is a traditional Indonesian food. It is spicy and delicious.
  I like rendang because it reminds me of home.

  Every year, my family celebrates Eid. On Eid, we visit grandmother
  and grandfather. We eat rendang and rice together.
  I feel happy and grateful because I am with my family.

  Indonesia is my home. I am proud of my country.

UCAP: "Listen. I will read my writing about Indonesia."
→ Baca seluruh teks dengan pelan dan jelas.

UCAP: "Now — let's look at the structure."
AKSI: Tunjuk bagian per bagian:
UCAP: "Bagian pertama — about the country. Just one or two sentences." [tunjuk baris 1]
UCAP: "Bagian kedua — about a job. Use 'She works at' and 'because.'" [tunjuk paragraf 2]
UCAP: "In my example — a farmer. But you can choose any job: doctor, teacher, fisherman. Same pattern: She is a ___, she works at ___, because ___."
UCAP: "Bagian ketiga — about food. Use 'I like because.'" [tunjuk paragraf 3]
UCAP: "Bagian keempat — about a celebration. Use 'On ___, we ___'" [tunjuk paragraf 4]
UCAP: "Bagian kelima — closing. One or two sentences. Your choice." [tunjuk baris terakhir]

UCAP: "Five parts. That is your target — or more."`,
          bantuan: 'Jika siswa tampak kewalahan melihat panjang teks: tunjuk hanya satu kalimat per bagian — "Lihat bagian dua — satu kalimat saja sudah cukup: \'She is a farmer. She grows rice.\'" Mulai kecil, tambah belakangan.',
          cue    : 'Teks ini harus sudah ditulis sebelum kelas — jangan menulis di depan siswa saat L5 berlangsung. Teks yang paling efektif menggunakan orang dan tempat yang nyata dari komunitas guru — ini membuat "My Country" terasa nyata, bukan latihan.',
          darurat: null,
          energi : '🔵',
        },

        // L6 — Writing Draft — Teks "My Country"
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa buka Bagian B — Writing Space di lembar kerja.

UCAP: "Now — your turn. Use your Planning Sheet. Write your text about Indonesia."
UCAP: "Five parts — about your country, a job, a food, a celebration, and a closing."
UCAP: "Your words. Your Indonesia."

AKSI: Tulis di papan sebagai pengingat (bukan template kalimat per kalimat):
  Part 1: My country is Indonesia. _______.
  Part 2: In my country, _______ [job + She works at + because]
  Part 3: I love _______ [food + I like because]
  Part 4: On _______, we _______ [celebration + On… we…]
  Part 5: Indonesia is _______ [closing, free]

UCAP: "The board helps you. But your sentences — your ideas. Your real Indonesia."

AKSI: Mundur dari depan kelas. Circulate pelan.`,
          diferensiasi: {
            perluSupport: 'cukup tulis tiga bagian — job, food, celebration. Bagian pembuka dan penutup opsional.',
            sudahBisa   : 'setelah lima bagian selesai, tambah satu paragraf — "One thing I want the world to know about Indonesia is ___."',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai. Selama L6, guru tidak mengajar. Guru mengamati dan mencatat. Jika siswa menulis dalam Bahasa Indonesia — tulis kata kunci Bahasa Inggrisnya di pojok papan tanpa komentar. Ini pengayaan organik, bukan koreksi.',
          darurat: 'Jika setelah 5 menit lebih dari separuh kelas masih belum menulis kalimat pertama: hentikan semua, minta kelas baca bersama baris pertama teks guru di papan, lanjutkan. Jangan beri instruksi baru.',
          energi : '🔵',
        },

        // L7 — Circulation + Penilaian Formatif
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Teruskan circulate dari L6. Fokus sekarang bergeser ke penilaian.

UCAP: "Keep writing. I will come to you."

AKSI: Kunjungi tiap meja. Untuk setiap siswa:
→ Baca 2–3 kalimat pertama diam-diam.
→ Jika tiga topik sudah muncul: angguk, ucap pelan "Good — keep going."
→ Jika ada topik yang hilang: tunjuk Planning Sheet mereka, ucap pelan "What about the food part? Use your plan."
→ Jangan tulis ulang kalimat mereka.`,
          bantuan: 'Jika menemukan siswa yang hanya menulis satu bagian dan berhenti: duduk sebentar, baca yang sudah ada, tanya pelan — "What celebration does your family have?" — tunggu mereka menjawab lisan, lalu: "Write that." Jangan tulis untuk mereka.',
          cue    : 'Jika penilaian formatif belum dibuka di L6 — buka sekarang. Di L7, guru hanya cek satu hal: apakah tiga topik (job, food, celebration) hadir? Jika ya — tulisan itu valid sebagai Panen, apapun kualitas grammarnya.',
          darurat: 'Jika menit ke-53 sudah tercapai sebelum L7 selesai: hentikan circulate, lanjut ke L11 (Gallery Sharing) langsung. Lewati L8, L9, dan L10.',
          energi : '🔵',
        },

        // L8 — Silent Reread — Underline Favorite Sentence [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Stop for a moment. Put your pen down."
→ Jeda 3 detik. Tunggu semua pena diletakkan.
UCAP: "Read your text — from the beginning. Just for yourself."
→ Jeda 30 detik. Biarkan siswa membaca diam-diam.

UCAP: "Now — find your favorite sentence. The one you are most proud of. Underline it."
→ Beri waktu 20 detik.

UCAP: "That sentence — that is your best work today."`,
          bantuan: 'Jika siswa tampak bingung harus menggaris bawahi yang mana: bisikkan pelan — "Kalimat mana yang paling kamu suka? Garis bawahi itu."',
          cue    : 'Ini adalah momen privat — guru tidak berkeliling. Biarkan ruang menjadi tenang. Momen ini mempersiapkan siswa untuk L9: mereka sudah tahu bagian mana yang ingin mereka bagikan.',
          darurat: '[FLEX — lewati jika waktu tersisa < 15 menit]',
          energi : '🔵',
        },

        // L9 — Peer Sharing — Baca Bagian Favorit ke Partner [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "Read the sentence you underlined — or your favorite part — to your partner."
UCAP: "Partner — listen. Then say: 'I like the part about [topic].'"

AKSI: Beri waktu 3 menit — masing-masing 90 detik per arah.

UCAP (setelah 3 menit): "Good. You can go back and add or change one thing."
→ Beri 1 menit untuk perubahan kecil.`,
          bantuan: 'Jika partner tidak tahu harus berkata apa: contohkan — "You can say: \'I like the part about rendang\' atau \'I like your sentence about Eid.\'"',
          cue    : '"I like the part about [topic]" adalah respons yang sengaja positif. Siswa kelas 4 tidak perlu memberi feedback kompleks. Apresiasi adalah feedback yang cukup.',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit atau teks siswa rata-rata kurang dari 3 bagian] Jika peer sharing gaduh dalam 1 menit: hentikan. Lanjut ke L10.',
          energi : '🟡',
        },

        // L10 — Mini Self-Check — Tiga Topik dalam Teks [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Look at your text one more time."
UCAP: "Circle the name of one job in your text."
→ Beri waktu 15 detik.
UCAP: "Underline the name of one food."
→ Beri waktu 15 detik.
UCAP: "Put a star next to the celebration you wrote about."
→ Beri waktu 15 detik.

UCAP: "Good. Job — food — celebration. All three are there."`,
          bantuan: 'Jika siswa tidak menemukan salah satu dari tiga topik: dekati pelan, bisikkan — "Mana bagian tentang [makanan/pekerjaan/perayaan]? Ada?" — jika tidak ada, ucap: "That\'s okay. You can add one sentence now."',
          cue    : 'Ini self-check teknis yang membangun rasa percaya diri sebelum gallery sharing. Guru tidak menilai. Tujuannya: siswa melihat sendiri bahwa tiga topik Kluster D sudah tercakup dalam satu teks.',
          darurat: '[FLEX — lewati jika waktu tersisa < 8 menit]',
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 8,

      langkah: [

        // L11 — Gallery Sharing — Dua Suara
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta semua siswa meletakkan pena. Kembali ke depan kelas.

UCAP: "We are almost done. I want to hear from two people."
UCAP: "Who wants to read one part of their 'My Country' text?"
→ Tunggu sukarelawan. Jika tidak ada dalam 5 detik, tunjuk siswa yang dari observasi L7 sudah menulis dengan baik.

AKSI: Siswa pertama membacakan satu bagian.
→ Kelas mendengarkan.
→ Guru: "Thank you. What topic was that — job, food, or celebration?"
→ Kelas menjawab.

AKSI: Siswa kedua membacakan bagian yang berbeda topiknya dari siswa pertama.
→ Kelas mendengarkan.
→ Guru: "Thank you. What part of Indonesia did they write about?"
→ Kelas menjawab.

UCAP: "Two different Indonesias. Both are true."`,
          bantuan: 'Jika tidak ada sukarelawan setelah 10 detik: gunakan observasi dari L7 — "I read your text — it\'s really beautiful. Can you share one part?"',
          cue    : '"Two different Indonesias — both are true" adalah kalimat penutup gallery yang paling bermakna. Indonesia yang ditulis siswa dari Pekanbaru berbeda dari siswa dari Bali atau Jakarta — dan keduanya valid. Ucap dengan tulus.',
          darurat: null,
          energi : '🟡',
        },

        // L12 — Closure Emosional — Refleksi Kluster D dan Fase B
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa memegang lembar kerja mereka. Suara guru pelan.

UCAP: "Look at what you wrote today."
→ Jeda 5 detik. Biarkan siswa membaca tulisan mereka sendiri.

UCAP: "You learned to talk about jobs. About food. About celebrations."
UCAP: "And today — you put it all together. In English. About your own country."

→ Jeda 3 detik.

UCAP: "That text — that is yours. Nobody else has the same Indonesia."

AKSI [jika TP15 adalah TP terakhir yang diajarkan — penutup Fase B]:
UCAP: "You have finished Fase B. Twenty-two topics. Hundreds of sentences."
UCAP: "You started with 'library' and 'canteen.' Now you can write about your country."
UCAP: "That is not a small thing."

AKSI [jika masih ada TP yang akan dilanjutkan — TP16–22]:
UCAP: "Next time — we start something new. Sports. Directions. Stories. The world keeps getting bigger."

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: minta siswa menulis nama mereka besar-besar di bagian atas lembar kerja. Ritual kepemilikan — sama seperti TP04 dan TP08.`,
          bantuan: null,
          cue    : 'Kalimat "Nobody else has the same Indonesia" adalah ritual penutup Panen ini. Ucap dengan tulus — ini kebenaran literal yang sekaligus bermakna secara emosional. Tidak ada dua siswa yang akan menulis teks yang identik tentang negara mereka.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B15;
