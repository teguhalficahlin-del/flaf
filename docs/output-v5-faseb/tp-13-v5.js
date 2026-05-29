/**
 * =============================================================
 * FLAF — TP B13 (Food, Culture, and Choices)
 * File: docs/output-v5-faseb/tp-13-v5.js
 * Format: v5.0
 * Fase: B (Kelas 4)
 * Jenis: Biasa — Kluster D
 * Source: flaf-skenario-tp13-v2.txt (Fase B)
 * =============================================================
 */

const TP_B13 = {

  id       : 'tp-b13',
  nomor    : 13,
  kelas    : 4,
  nama     : 'Food, Culture, and Choices',
  tema     : 'Mendeskripsikan makanan favorit dan budaya kuliner menggunakan ekspresi preferensi',
  kluster  : 'D',
  jenis    : 'Biasa',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat menggunakan adjektif rasa (spicy, sweet, salty) untuk mendeskripsikan makanan.',
    'Peserta didik dapat menggunakan pola "I like... because..." untuk menyatakan preferensi makanan dan alasannya.',
    'Peserta didik dapat menulis deskripsi makanan favorit lengkap termasuk nama, rasa, dan alasan menyukainya.',
  ],

  vocab    : ['rice', 'noodle', 'apple', 'banana', 'happy', 'hungry', 'rendang', 'spicy', 'sweet', 'salty', 'I like... because...'],

  persiapan: [
    'Gambar atau foto tiga makanan: rendang, sate, nasi goreng (atau makanan lokal yang relevan) — disiapkan sebelum kelas atau digambar di papan',
    'Lembar kerja siswa: 1 per siswa — template MY FAVORITE FOOD (lihat L8)',
    'Papan tulis + spidol untuk adjektif rasa dan pola "I like… because…" di L3, L5, L6 — adjektif rasa dari L3 tidak dihapus sampai L8 selesai',
  ],

  checklist: [
    'Gambar tiga makanan (rendang + dua makanan lain) sudah disiapkan sebelum kelas',
    'Daftar adjektif rasa (spicy, sweet, salty) sudah tertulis di papan dari L3 — tidak dihapus sampai L8 selesai',
    'Scaffold lima kalimat di papan dari L6 TIDAK dihapus sampai L8 selesai',
    'Penilaian formatif sudah dibuka di L8 — minimal 3 siswa sudah dinilai',
    'Referensi ke TP12 ("a farmer grows food — today we talk about that food") sudah disampaikan di L1',
    '"I like" diakui sebagai kosakata yang sudah dikenal dari Fase A — tidak diperlakukan sebagai kosakata baru di L5',
    '"Because" dari TP11–12 sudah diintegrasikan ke konteks preferensi makanan di L5 dan L6',
    'Siswa yang membacakan di L9 berbeda dari yang menjawab di L4',
    'Pilihan makanan siswa di L8 tidak diarahkan — semua makanan valid selama struktur "I like ___ because ___" dipakai',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 🟡',
    'L3 🔵',
    'L4 🟠',
    'L5 🟡',
    'L6 🔵',
    'L7 🟡',
    'L8 🔵',
    'L9 🔵',
    'L10 🟡',
    'L11 🔵',
  ],

  catatan: {
    risiko: [
      'L3: Tiga adjektif rasa diperkenalkan sekaligus — ketiganya hanya bermakna dalam kontras satu sama lain. Budget 4 menit sudah cukup. Jika ada siswa yang menyebut adjektif lain ("bitter", "sour") — terima sebagai bonus tapi jangan tambahkan ke papan.',
      'L5: "I like" adalah kosakata lama dari Fase A. Jangan mengajarkannya ulang. Cukup satu kalimat pengakuan: "you already know \'I like\' — now add \'because.\'" Lanjut.',
      'L8: Siswa boleh menulis makanan dalam Bahasa Indonesia (tempe, gado-gado, bakso). Terima semua — tulis nama Inggrisnya di pojok papan jika diminta, tapi jangan paksa translasi. TP13 adalah tentang preferensi personal.',
      'L11: Pertanyaan "what food reminds you of family?" lebih dalam dari biasanya. Beberapa siswa mungkin teringat momen yang bermakna. Beri ruang — jangan terburu-buru ke teaser.',
    ],
    autonomy: [
      '"Rendang" boleh diganti dengan makanan lokal yang lebih dikenal di daerah sekolah — pempek, gudeg, soto, nasi padang. Yang penting ada satu makanan dengan konteks budaya yang kuat.',
      'Adjektif rasa boleh diperluas dengan "sour" (asam) jika relevan untuk konteks makanan lokal — tapi tidak wajib di TP ini.',
      'Pair practice di L7 boleh dilakukan sambil menunjukkan bekal makan siang siswa jika ada — ini membuat diskusi makanan terasa langsung dan nyata.',
      'Jika ada siswa yang tidak suka makanan tertentu yang disebutkan di kelas: "That\'s okay — everyone has different tastes. That\'s what makes food interesting."',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — jeda 3 detik diam, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'TP13 bergerak dari profesi ke makanan — dari "orang yang menanam makanan" ke "makanan yang kita makan dan cintai." Ini salah satu topik paling personal dalam Fase B. Siswa Kelas 4 umumnya sudah punya pendapat kuat tentang makanan favorit mereka.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP12 + Chant Makanan
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas.

UCAP: "Last time — we talked about jobs. Doctors, farmers."
UCAP: "A farmer grows food. What food does a farmer grow?"
→ Kelas: "Rice! Vegetables!"
UCAP: "Good. Today — we talk about that food. What we eat. What we love. And why."

AKSI: Langsung masuk ke chant dengan ketukan meja.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Rice — noodle — bread — let's eat — GO!
Spicy — sweet — salty — yum — GO!
I like rendang — because it's good — GO!
Food and culture — let's GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal chant: tunjuk mulut untuk "eat," kibaskan tangan di muka untuk "spicy," usap perut untuk "yum." Tiga gesture yang menyenangkan.',
          cue    : 'Jembatan ke TP12 ("a farmer grows food — today we talk about that food") adalah satu kalimat yang menghubungkan dua TP secara konkret. Ucap sebelum chant, bukan setelah.',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — Food dan Feelings
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tanya kelas dengan ritme cepat.

UCAP: "Name a food you like — any food."
→ Kelas menyebut 3–4 makanan. Tulis di papan.
UCAP: "Rice — do you like rice?"
→ Kelas: "Yes!"
UCAP: "Noodle?"
→ Kelas: "Yes!" / "Sometimes!"
UCAP: "Banana?"
→ Kelas menjawab bervariasi.

UCAP: "Good. Now — feelings. When you are hungry — how do you feel?"
→ Kelas: "Hungry!"
UCAP: "When you eat your favorite food — how do you feel?"
→ Kelas: "Happy!"
UCAP: "And when you eat something you don't like?"
→ Kelas: "Sad!" atau variasi lain — terima semua.

UCAP: "Good. Food makes us feel things. Today — we talk about the food we love and why."`,
          bantuan: 'Jika kelas tidak merespons pertanyaan feelings: ucap sambil buat ekspresi muka — wajah lapar untuk "hungry," senyum lebar untuk "happy," wajah cemberut untuk "sad." Ekspresi fisik lebih cepat dari penjelasan verbal.',
          cue    : 'Makanan yang disebutkan kelas di bagian bebas dipakai di L5 dan L8. Tulis 3–4 nama makanan mereka di papan — ini membuat contoh di L5 lebih personal dan relevan.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 40,

      langkah: [

        // L3 — Introduksi: Rendang dan Spicy
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo, siswa hanya mendengar dan melihat.

AKSI: Tunjukkan gambar rendang.

UCAP: "Look at this." [tunjuk gambar]
UCAP: "This is — rendang. Ren-dang." [ucap perlahan]
→ Jeda 3 detik.
UCAP: "Rendang is a traditional Indonesian food. It is made with meat and spices."
UCAP: "Rendang is — spicy. Spi-cy." [ucap perlahan]
→ Tulis di papan: SPICY
→ Jeda 3 detik.
UCAP: "Spicy — artinya pedas. It makes your mouth feel hot and tingly."

AKSI: Berikan kontras — tulis dua kata lagi di papan:
UCAP: "Spicy — pedas. But food can also be — sweet. Manis."
→ Tulis: SWEET
UCAP: "Or — salty. Asin."
→ Tulis: SALTY

UCAP: "Rendang — spicy. Cake — sweet. Chips — salty."
→ Tunjuk papan untuk setiap contoh.

AKSI: Tunjuk beberapa gambar makanan dari L2.
UCAP: "This one — spicy, sweet, or salty?"
→ Biarkan kelas menjawab. Terima variasi.

🗣 TOGETHER
UCAP: "Say it — spicy."
→ Kelas: "Spicy!"
UCAP: "Sweet."
→ Kelas: "Sweet!"
UCAP: "Salty."
→ Kelas: "Salty!"`,
          bantuan: 'Jika siswa bingung membedakan spicy dan salty: buat gesture kibaskan tangan di muka untuk "spicy" (panas) dan tepuk bibir untuk "salty" (asin). Dua gesture yang berbeda secara fisik.',
          cue    : 'Tiga adjektif rasa diperkenalkan sebagai satu paket — masing-masing hanya bermakna dalam kontras dengan yang lain. "Spicy" tanpa "sweet" dan "salty" tidak punya referensi. Jangan pisahkan ke layar berbeda.',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Drill — Adjektif Rasa
        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER

AKSI: Guru menyebut satu makanan, kelas menjawab adjektif rasanya.

UCAP: "Rendang — spicy, sweet, or salty?"
→ Kelas: "Spicy!"
UCAP: "Ice cream?"
→ Kelas: "Sweet!"
UCAP: "Potato chips?"
→ Kelas: "Salty!"
UCAP: "Candy?"
→ Kelas: "Sweet!"
UCAP: "Sambal?"
→ Kelas: "Spicy!"

AKSI: Percepat — 5–6 makanan secara acak.

AKSI: Balik arah — guru sebut adjektif, kelas sebut contoh makanan:
UCAP: "Give me a spicy food."
→ Kelas: "Rendang!" atau "Sambal!" atau "Cabai!"
UCAP: "A sweet food."
→ Kelas: "Cake!" atau "Banana!" atau "Candy!"
UCAP: "A salty food."
→ Kelas: "Chips!" atau "Tempe goreng!" atau "Ikan asin!"

AKSI: Tunjuk 2–3 siswa individual:
UCAP: "[nama] — your favorite food. Spicy, sweet, or salty?"
→ Siswa menjawab dengan adjektif.`,
          diferensiasi: {
            perluSupport: 'cukup menjawab satu kata — "spicy" atau "sweet."',
            sudahBisa   : 'minta kalimat — "Rendang is spicy and delicious."',
          },
          bantuan: 'Jika siswa tidak bisa mengkategorikan makanan yang mereka sebut: bantu — "Is it hot in your mouth? Then — spicy! Is it sweet? Then — sweet!" Gunakan pengalaman rasa sebagai referensi.',
          cue    : 'Bagian balik arah ("Give me a spicy food") lebih penting dari bagian pertama. Di sana siswa membuktikan bahwa mereka memahami makna adjektif, bukan hanya menghafal pasangan makanan-kata.',
          darurat: null,
          energi : '🟠',
        },

        // L5 — Introduksi: I Like… Because…
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pelan suara. Tunggu 2 detik sebelum mulai.

👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — 'I like.' Do you remember this from before?"
→ Jeda. Biarkan siswa merespons.
UCAP: "Yes — 'I like reading. I like swimming.' From Fase A."
UCAP: "Today — we use 'I like' with food. And we add — 'because.'"

UCAP: "I like rendang."
→ Tulis di papan: I like rendang.
UCAP: "I like rendang — because it is spicy."
→ Tulis: I like rendang because it is spicy.
→ Jeda 3 detik. Tunjuk "because" lalu tunjuk "it is spicy."

UCAP: "I like rice."
→ Tulis: I like rice.
UCAP: "I like rice — because it makes me full."
→ Tulis: I like rice because it makes me full.

UCAP: "Now — your turn. What food do you like?"
→ Tunjuk 2–3 siswa. Terima nama makanan apapun.
→ Bantu framing: "So — 'I like [makanan] because [alasan].'"

🗣 TOGETHER
UCAP: "Say it with me — 'I like rendang because it is spicy.'"
→ Kelas mengulang 2 kali.`,
          bantuan: 'Jika siswa kesulitan menemukan alasan "because": tanya lebih spesifik — "Is it spicy? Is it sweet? Does it make you happy?" — setelah mereka memilih, bantu bentuk: "So — \'because it is spicy.\'"',
          cue    : '"I like" sudah dikenal dari Fase A — jangan memperkenalkannya seolah kosakata baru. Pertanyaan "do you remember \'I like\' from before?" menghormati pengetahuan siswa yang sudah ada. Cukup sambungkan dengan "because."',
          darurat: null,
          energi : '🟡',
        },

        // L6 — Modeling Kalimat Preferensi Lengkap
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — let's write about food we love. Listen."

UCAP: "My favorite food is rendang."
→ Tulis di papan: My favorite food is rendang.
UCAP: "Rendang is a traditional Indonesian food."
→ Tulis: Rendang is a traditional Indonesian food.
UCAP: "It is spicy and delicious."
→ Tulis: It is spicy and delicious.
UCAP: "I like rendang because it reminds me of home."
→ Tulis: I like rendang because it reminds me of home.
UCAP: "I eat rendang with rice."
→ Tulis: I eat rendang with rice.

🗣 TOGETHER
AKSI: Tunjuk kalimat di papan satu per satu. Kelas membaca bersama guru.
→ Putaran pertama: guru tunjuk dan pimpin.
→ Putaran kedua: guru tunjuk saja — kelas baca sendiri.

UCAP: "Good. Now — you will describe your own favorite food. Ready?"`,
          bantuan: 'Jika kelas membaca tidak sinkron di putaran kedua: biarkan. Lima kalimat dengan "because" yang bermakna lebih penting dari sinkronisasi.',
          cue    : 'Kalimat keempat ("I like rendang because it reminds me of home") adalah yang paling bermakna secara budaya — makanan bukan hanya soal rasa tapi soal identitas dan kenangan. Ucap dengan tulus. Ini mungkin momen pertama siswa melihat bahasa Inggris bisa dipakai untuk bicara tentang sesuatu yang sangat personal.',
          darurat: null,
          energi : '🔵',
        },

        // L7 — Pair Practice — Ceritakan Makanan Favorit [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "Tell your partner about your favorite food."
UCAP: "Use: 'My favorite food is ___. I like it because ___. It is ___'"

AKSI: Demo singkat dengan satu siswa sukarelawan:
UCAP: "[nama] — what is your favorite food?"
→ Siswa menyebut makanan.
UCAP: "Is it spicy, sweet, or salty?"
→ Siswa menjawab.
UCAP: "Good. Now say it with 'I like' and 'because.'"
→ Siswa: "I like [makanan] because it is [adjektif]."
UCAP: "Perfect. Now with your partner."

AKSI: Beri waktu 4 menit — masing-masing 2 menit per arah. Circulate.`,
          diferensiasi: {
            perluSupport: 'cukup dua kalimat — "My favorite food is ___. I like it because ___."',
            sudahBisa   : 'tambahkan konteks budaya — "It is a traditional [nama budaya] food."',
          },
          bantuan: 'Jika satu pasang tidak bisa memulai: tunjuk daftar makanan di papan, ucap — "Choose one food from the board. Which one do you like?" — setelah mereka memilih, arahkan: "Now say: \'I like it because ___\'"',
          cue    : null,
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair practice gaduh dalam 1 menit: hentikan. Ucap "Okay — take your pencil. Let\'s write." Lanjut ke L8 dengan transisi: "Take a breath. Think about your favorite food."',
          energi : '🟡',
        },

        // L8 — Writing Individual — Makanan Favoritku
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L6 (L7 dilewati) — ucap: "Okay. Take your pencil. Think about your favorite food. Let's write." Jeda 3 detik. Bagikan lembar kerja.
AKSI: Bagikan lembar kerja (1 per siswa). Scaffold di papan dari L6 tetap ada.

Lembar kerja berisi template:

  MY FAVORITE FOOD

  My favorite food is _________________________.

  It is a _________________ food.
  [traditional / popular / healthy / family]

  It is _________________.
  [spicy / sweet / salty / delicious — pilih satu atau lebih]

  I like it because _________________________.

  I usually eat it with _________________________.

  Food number two: I also like _________________________.
  I like it because _________________________.

UCAP: "Write about your favorite food. Your real food — not random."
UCAP: "Use the board and your own ideas."

👂 LISTEN FIRST — guru demo mengisi baris pertama di papan:
UCAP: "Watch me. My favorite food is nasi goreng." [tulis]
UCAP: "It is a popular Indonesian food. It is salty and delicious." [tulis]
UCAP: "I like it because it is healthy and makes me happy." [tulis]
UCAP: "Now — your turn."

AKSI: Circulate. Bergerak ke meja siswa — jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'cukup isi empat baris pertama. Baris "I usually eat it with" dan "Food number two" opsional.',
            sudahBisa   : 'setelah semua baris terisi, tambah satu kalimat — "This food is part of my culture because ___."',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai. Siswa boleh menulis makanan apapun — rendang, mie instan, pisang goreng, pizza, semuanya valid. Tugas guru hanya memastikan struktur "I like ___ because ___" dipakai.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: minta siswa hanya mengisi tiga baris pertama (nama makanan, adjektif rasa, karena). Langsung ke L10 tanpa melalui L9.',
          energi : '🔵',
        },

        // L9 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tulisan siswa. Pilih 2 hasil — satu yang menggunakan alasan "because" yang menarik atau personal, satu yang menulis tentang makanan yang tidak umum atau mengandung konteks budaya.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan tulisan tentang makanan favorit mereka.
→ Kelas mendengarkan.

UCAP (setelah tiap siswa membacakan): "What food was that?"
→ Kelas menjawab nama makanan.
UCAP: "And why do they like it?"
→ Kelas menjawab "because ___."
UCAP: "Is that food spicy, sweet, or salty?"
→ Kelas menjawab adjektif.`,
          bantuan: 'Jika siswa yang diminta membaca menolak: ucap "That\'s okay" dan tunjuk siswa lain.',
          cue    : 'Tiga pertanyaan setelah setiap pembacaan ("what food?", "why?", "spicy/sweet/salty?") membuat kelas aktif mendengarkan tiga elemen berbeda — nama makanan, alasan, dan rasa. Ini memperkuat tiga kosakata/struktur utama TP13.',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit]',
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 8,

      langkah: [

        // L10 — Review + Hapus Papan
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Siswa simpan lembar kerja. Guru kembali ke depan kelas.

UCAP: "Good work today. Let's remember."
UCAP: "What is rendang?"
→ Kelas: "A traditional Indonesian food!" atau "Spicy food!"
UCAP: "How do we say 'pedas'?"
→ Kelas: "Spicy!"
UCAP: "Manis?"
→ Kelas: "Sweet!"
UCAP: "Asin?"
→ Kelas: "Salty!"
UCAP: "And how do we say we like something — and give a reason?"
→ Kelas: "I like ___ because ___!"

UCAP: "Give me one sentence about your favorite food."
→ Satu siswa: "I like rendang because it is spicy and delicious!"

AKSI: Hapus papan satu bagian per satu. Kelas ucapkan yang dihapus.
Urutan hapus: because it is spicy → I like rendang → spicy → sweet → salty → rendang`,
          bantuan: null,
          cue    : 'Hapus kalimat "because" sebelum adjektif dan nama makanan. Urutan ini memperkuat bahwa "because" + alasan adalah inti TP13 — bukan sekadar kosakata benda.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — Closure Emosional + Teaser TP14
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan.

UCAP: "Before we finish — one question."
UCAP: "What food makes you feel most at home? The food that reminds you of family?"
→ Tunjuk 1–2 siswa yang mau berbagi. Jawaban dalam Bahasa apapun diterima.
→ Bantu framing singkat: "So — 'I like ___ because it reminds me of ___'"

→ Jeda 3 detik.

UCAP: "Food is culture. Food is memory. Food is family."
UCAP: "Now you can say that in English."

UCAP: "Next time — we talk about celebrations. Eid. Traditions. The special days when family comes together — and food is always part of it."
[Teaser TP14 — Celebrations and Traditions]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : 'Teaser TP14 ("celebrations — Eid — family comes together — food is always part of it") menghubungkan TP13 dan TP14 secara natural: makanan (TP13) → perayaan yang selalu ada makanannya (TP14). Ucap dengan antusias.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B13;
