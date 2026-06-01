/**
 * =============================================================
 * FLAF — TP B09 (Plants, Animals, and Nature)
 * File: docs/output-v5-faseb/tp-09-v5.js
 * Format: v5.0
 * Fase: B (Kelas 3–4)
 * Jenis: Biasa — Kluster C
 * Source: flaf-skenario-tp09-v2.txt (Fase B)
 * =============================================================
 */

const TP_B09 = {

  id       : 'tp-b09',
  nomor    : 9,
  kelas    : 3,
  nama     : 'Plants, Animals, and Nature',
  tema     : 'Mendeskripsikan hewan dan tempat tinggalnya menggunakan fakta sederhana',
  kluster  : 'C',
  jenis    : 'Biasa',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat menyebutkan nama dua habitat (jungle dan forest) dan mengaitkan masing-masing dengan hewan yang tinggal di sana.',
    'Peserta didik dapat menggunakan pola "They live in..." dan "They eat..." dalam kalimat lisan dan tulisan tentang hewan.',
    'Peserta didik dapat menulis minimal tiga fakta tentang satu hewan pilihan mereka menggunakan kosakata Kluster C.',
  ],

  vocab    : ['cat', 'dog', 'bird', 'fish', 'rabbit', 'elephant', 'tiger', 'frog', 'lion', 'jungle', 'forest', 'They live in...', 'They eat...'],

  persiapan: [
    'Gambar atau sketsa dua habitat: jungle (hutan lebat, gelap) dan forest (hutan terbuka, lebih terang) — disiapkan sebelum kelas atau digambar di papan',
    'Gambar tiga hewan: tiger (jungle), elephant (forest/savanna), dan satu hewan pilihan guru — disiapkan untuk L4 dan L6',
    'Lembar kerja siswa: 1 per siswa — template MY ANIMAL FACTS (lihat L8)',
    'Papan tulis + spidol untuk menulis pola They live in… dan They eat… di L4 dan L6 — tidak dihapus sampai L8 selesai',
  ],

  checklist: [
    'Gambar jungle dan forest sudah disiapkan sebelum kelas — jelas perbedaan visualnya',
    'Gambar tiga hewan (tiger, elephant, satu pilihan guru) sudah siap untuk L4 dan L6',
    'Scaffold tiga kalimat (nama + adjektif, They live in, They eat) di papan TIDAK dihapus sampai L8 selesai',
    'Penilaian formatif sudah dibuka di L8 — minimal 3 siswa sudah dinilai',
    'Referensi ke TP08 ("your schedule was about YOU — today about THEY") sudah disampaikan di L1',
    '"They" sebagai subjek sudah ditunjuk secara eksplisit minimal 2 kali — di L4 dan di L6',
    'Siswa yang membacakan di L9 berbeda dari yang menjawab di L5',
    'Baris "One more fact" di lembar kerja boleh diisi dalam Bahasa Indonesia — ini tidak perlu dikoreksi',
  ],

  printables: [
    { file: 'tp-b09-bird.png',               label: 'Bird' },
    { file: 'tp-b09-butterfly.png',          label: 'Butterfly' },
    { file: 'tp-b09-cat.png',                label: 'Cat' },
    { file: 'tp-b09-dog.png',                label: 'Dog' },
    { file: 'tp-b09-fish.png',               label: 'Fish' },
    { file: 'tp-b09-flower.png',             label: 'Flower' },
    { file: 'tp-b09-grass.png',              label: 'Grass' },
    { file: 'tp-b09-habitat-worksheet.png',  label: 'Habitat Worksheet' },
    { file: 'tp-b09-leaf.png',               label: 'Leaf' },
    { file: 'tp-b09-tree.png',               label: 'Tree' },
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 🟡',
    'L3 🔵',
    'L4 🔵',
    'L5 🟠',
    'L6 🔵',
    'L7 🟡',
    'L8 🔵',
    'L9 🔵',
    'L10 🟡',
    'L11 🔵',
  ],

  catatan: {
    risiko: [
      'L4: "They" sebagai subjek non-first-person pertama kali dalam Fase B. Jangan tergesa — dua contoh (tiger + elephant) sudah cukup. Jika ada siswa yang bertanya "kenapa They bukan He?", jawab singkat: "They = lebih dari satu. Harimau-harimau semuanya."',
      'L5: Drill bisa terasa mekanis jika hanya searah. Balik arah — sebut habitat, minta kelas menyebut hewannya. Ini membuktikan pemahaman, bukan hafalan pasangan kata.',
      'L6: Pelan suara sebelum mulai. Layar ini menggabungkan kosakata baru (They eat) dengan modeling kalimat lengkap. Jika terasa padat, kurangi contoh They eat menjadi dua saja (meat dan plants) — sisanya biar siswa temukan sendiri di L8.',
      'L8: Siswa yang tidak tahu nama hewan dalam Bahasa Inggris adalah situasi normal. Sediakan 5 nama hewan cadangan di pojok papan (crocodile, butterfly, monkey, snake, deer).',
    ],
    autonomy: [
      'Hewan yang digunakan di L4 dan L6 boleh disesuaikan dengan konteks lokal — orangutan, komodo, cendrawasih lebih bermakna daripada lion atau elephant yang lebih generik.',
      'Jika sekolah berada dekat area pertanian atau pesisir: gunakan hewan relevan (ayam, sapi, ikan laut) sebagai tambahan di L5.',
      'Pair practice di L7 boleh menggunakan kartu hewan jika ada — siswa ambil satu kartu dan langsung sebut fakta untuk hewan di kartu tersebut. Memberi variasi fisik yang membantu.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — beri jeda 3 detik diam, pandang bagian kelas yang paling ramai, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'Kluster C dimulai hari ini — topik bergeser dari waktu dan jadwal ke alam dan makhluk hidup. Settling yang tenang memberi ruang transisi ini terasa natural.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP08 + Chant Hewan
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas.

UCAP: "Last time — we wrote our weekly schedule. Days, times, activities."
UCAP: "Your schedule was about you — what YOU do."
→ Jeda.
UCAP: "Today — we talk about animals. What THEY do. Where THEY live. What THEY eat."
UCAP: "Animals have schedules too — they just don't write them down."

AKSI: Langsung masuk ke chant hewan dengan ketukan meja.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Cat — dog — bird — fish — GO!
Rabbit — elephant — tiger — GO!
Frog — lion — they're alive — GO!
Animals, animals — let's learn — GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal chant di putaran pertama: gesture membantu — cakar harimau untuk "tiger", angkat tangan seperti belalai untuk "elephant." Lakukan sendiri; siswa akan mengikuti.',
          cue    : 'Jembatan ke TP08 ("your schedule was about YOU — today we talk about THEY") adalah kalimat terpenting di layar ini. Ini membuat pergeseran dari first-person ke third-person terasa logis. Ucap dengan penekanan pada "YOU" dan "THEY."',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — Hewan, Warna, dan Cuaca
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tanya kelas dengan ritme cepat — satu pertanyaan per 5 detik.

UCAP: "Name an animal — any animal."
→ Kelas menyebut 3–4 hewan. Tulis di papan.
UCAP: "What color is a tiger?"
→ Kelas: "Orange! Black! White!"
UCAP: "What color is a frog?"
→ Kelas: "Green!"
UCAP: "And the weather — sunny, rainy, cloudy?"
→ Tunjuk jendela kelas. "What's the weather today?"
→ Kelas menjawab sesuai kondisi nyata.

UCAP: "Good. Animals live in different places. Some like hot weather. Some like cold. Today — we learn their homes."`,
          bantuan: 'Jika kelas tidak merespons pertanyaan cuaca: tunjuk langit lewat jendela dan ucap "Is it sunny today? Rainy?" — konteks nyata lebih cepat dari pertanyaan abstrak.',
          cue    : 'Warna hewan akan muncul kembali saat siswa menulis di L8 ("They are green" atau "They have black stripes"). Aktifkan warna sekarang agar tersedia saat dibutuhkan. Cuaca juga relevan untuk konteks habitat — jungle adalah panas dan lembab, forest bisa sejuk.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 40,

      langkah: [

        // L3 — Introduksi: Jungle dan Forest
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo, siswa hanya mendengar dan melihat.

AKSI: Tunjukkan atau gambar dua habitat di papan:
- Kiri: gambar jungle — pohon-pohon lebat, gelap, banyak tanaman, label "JUNGLE"
- Kanan: gambar forest — pohon-pohon lebih jarang, lebih terang, label "FOREST"

UCAP: "Look at this." [tunjuk jungle]
UCAP: "This is — the jungle. Jung-le." [ucap perlahan]
→ Jeda 3 detik.
UCAP: "The jungle is hot and wet. Many trees. Many animals."
UCAP: "In Indonesia — we have jungle. Kalimantan. Sumatra."

UCAP: "And this." [tunjuk forest]
UCAP: "This is — the forest. For-est." [ucap perlahan]
→ Jeda 3 detik.
UCAP: "The forest is cooler. Quieter. Also many trees — but different."

AKSI: Tunjuk kedua gambar secara bergantian.
UCAP: "Jungle — hutan lebat, panas. Forest — hutan, lebih sejuk."
UCAP: "Both are homes for animals."`,
          bantuan: 'Jika siswa bingung perbedaannya: tunjuk gambar jungle, ucap "sangat lebat, seperti hutan di Kalimantan." Tunjuk gambar forest, ucap "seperti hutan di pegunungan." Satu kontras lokal cukup.',
          cue    : 'Perbedaan jungle dan forest cukup dua adjektif per habitat (jungle: hot, wet; forest: cool, quiet) dan satu anchor lokal (Kalimantan/Sumatra untuk jungle). Jangan masuk ke diskusi ekologi — fokus pada nama dan asosiasi dasar.',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Introduksi: They Live In…
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — let's talk about animals and their homes."
UCAP: "Tigers — where do tigers live?"
→ Jeda. Biarkan siswa menjawab dalam Bahasa apapun.
UCAP: "Tigers live in the jungle."
→ Tulis di papan: They live in the jungle.
→ Jeda 3 detik. Tunjuk "They" lalu tunjuk gambar tiger.

UCAP: "They — artinya mereka. The tigers — THEY live in the jungle."
UCAP: "Not 'I live' — not 'you live.' THEY live. The animals."

AKSI: Tambahkan contoh kedua dengan gambar elephant:
UCAP: "Elephants — where do they live?"
→ Jeda. Biarkan siswa mencoba menjawab.
UCAP: "They live in the forest. Or the savanna — the open grassland."
→ Tulis: They live in the forest.

🗣 TOGETHER
UCAP: "Say it with me — tigers. They live in — ?"
→ Kelas: "The jungle!"
UCAP: "Full sentence — 'They live in the jungle!'"
→ Kelas mengulang.`,
          bantuan: 'Jika siswa mengucapkan "He live" atau "It live" alih-alih "They live": jangan koreksi keras. Ucap "They — the animals, more than one. They live." Ulangi kalimat penuh dengan penekanan pada "They."',
          cue    : '"They" adalah kata yang pertama kali muncul dalam Fase B sebagai subjek non-first-person. Tunjuk eksplisit setiap kali "They" diucapkan — ini tidak bisa diasumsikan sudah dimengerti.',
          darurat: null,
          energi : '🔵',
        },

        // L5 — Drill — Hewan + Habitatnya
        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER

AKSI: Tunjuk gambar hewan atau sebut nama hewan, kelas ucapkan habitatnya.

UCAP: "Tiger — where?"
→ Kelas: "They live in the jungle!"
UCAP: "Elephant — where?"
→ Kelas: "They live in the forest!"
UCAP: "Fish — where?"
→ Kelas: "They live in the water!" [terima variasi — "river", "ocean", "sea"]

AKSI: Percepat — tunjuk 4–5 hewan berbeda secara acak.

AKSI: Balik arah — sebut habitat, kelas sebut satu hewan yang tinggal di sana:
UCAP: "In the jungle — which animal?"
→ Kelas: "Tiger!" atau "Lion!"
UCAP: "In the water — which animal?"
→ Kelas: "Fish!" atau "Frog!"

AKSI: Tunjuk 2–3 siswa individual:
UCAP: "[nama] — rabbits. Where do they live?"
→ Jawaban: "They live in the forest!" atau "In the grass!"`,
          diferensiasi: {
            perluSupport: 'cukup menyebut satu kata — "jungle" atau "forest" — tanpa kalimat penuh.',
            sudahBisa   : 'minta kalimat penuh — "They live in the jungle. They are orange and black."',
          },
          bantuan: 'Jika siswa yang ditunjuk diam lebih dari 5 detik: tunjuk gambar habitat di papan, ucap "Jungle — or forest?" Pilihan biner lebih mudah dari produksi bebas.',
          cue    : 'Bagian balik arah ("In the jungle — which animal?") lebih penting dari bagian pertama. Di sana siswa membuktikan pemahaman hubungan, bukan hafalan pasangan kata.',
          darurat: null,
          energi : '🟠',
        },

        // L6 — Introduksi: They Eat… + Modeling Fakta Lengkap
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pelan suara. Tunggu 2 detik sebelum mulai.

👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — what do animals eat?"
UCAP: "Tigers — they eat meat. They eat other animals."
→ Tulis di papan: They eat meat.
→ Jeda 3 detik.

UCAP: "Elephants — they eat plants. Grass, leaves, fruit."
→ Tulis: They eat plants.

UCAP: "Rabbits — they eat?"
→ Tunggu kelas menjawab: "Plants!" atau "Grass!"
UCAP: "Yes — they eat grass and vegetables."
→ Tulis: They eat grass.

AKSI: Sekarang modeling fakta lengkap — gabungkan They live in + They eat:
UCAP: "Let's put it together. Watch me. I will say facts about the tiger."

UCAP: "Tigers are big cats."
→ Tulis: Tigers are big cats.
UCAP: "They live in the jungle."
→ Tulis: They live in the jungle.
UCAP: "They eat meat. They hunt other animals."
→ Tulis: They eat meat.

UCAP: "And — remember 'first' and 'after that'? We can use them too."
UCAP: "'First, they hunt. After that, they sleep in the jungle.'"
→ Tulis: First, they hunt. After that, they sleep.

🗣 TOGETHER
UCAP: "Read with me — Tigers are big cats."
→ Kelas membaca bersama. Lanjutkan untuk semua tiga kalimat.`,
          bantuan: 'Jika kelas membaca tidak sinkron: perlambat tempo, tunjuk kata per kata. Sinkronisasi bukan tujuan — familiarisasi dengan struktur tiga kalimat adalah tujuannya.',
          cue    : 'Kelima kalimat di papan (Tigers are... They live in... They eat... First, they hunt. After that, they sleep.) adalah scaffold utama untuk L8. Jangan hapus sampai L8 selesai. Dua kalimat terakhir (First/After that) adalah bonus — siswa yang ingin pakai punya model; yang belum siap cukup tiga kalimat pertama.',
          darurat: null,
          energi : '🔵',
        },

        // L7 — Pair Practice — Fakta Satu Hewan [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "Tell your partner facts about one animal. Choose any animal."
UCAP: "Say: '[Animal] — they live in... They eat...'"

AKSI: Demo singkat dengan satu siswa sukarelawan:
UCAP: "[nama] — choose an animal. Any animal."
→ Siswa menyebut satu hewan.
UCAP: "Good. Now tell me — where do they live? What do they eat?"
→ Siswa: "They live in the forest. They eat grass."
UCAP: "Good. Now — your turn with your partner."

AKSI: Beri waktu 4 menit — masing-masing 2 menit per arah. Circulate dan dengarkan.`,
          diferensiasi: {
            perluSupport: 'cukup dua kalimat — "They live in... They eat..."',
            sudahBisa   : 'tambahkan satu kalimat deskripsi — warna, ukuran, atau sifat hewan.',
          },
          bantuan: 'Jika satu pasang tidak bisa mulai: tunjuk gambar hewan di papan, ucap nama hewan — "Elephant. Where do they live?" — setelah salah satu menjawab, arahkan ke partnernya: "Good. Now you ask."',
          cue    : null,
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair practice menjadi gaduh dalam 1 menit: hentikan. Ucap "Okay — take your pencil. Let\'s write." Lanjut ke L8 langsung.',
          energi : '🟡',
        },

        // L8 — Writing Individual — Faktaku tentang Satu Hewan
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L6 (L7 dilewati) — ucap: "Okay. Take your pencil. Let's write." Jeda 3 detik. Bagikan lembar kerja.
AKSI: Bagikan lembar kerja (1 per siswa). Scaffold di papan dari L6 tetap ada.

Lembar kerja berisi template:

  MY ANIMAL FACTS

  My animal: _______________________

  _________________ are _________________.
  [nama hewan]       [satu adjektif — big, small, green, fast...]

  They live in _________________.

  They eat _________________.

  One more fact: _______________________
  (tulis apa saja yang kamu tahu tentang hewan ini — boleh dalam Bahasa Indonesia)

UCAP: "Choose one animal. Write three or four facts about it."
UCAP: "Use the structure on the board. Your animal — your facts."

👂 LISTEN FIRST — guru demo mengisi satu template di papan:
UCAP: "Watch me. My animal — tiger. Tigers are big cats. They live in the jungle. They eat meat." [tulis di papan]
UCAP: "See the adjective — 'big.' You can use: big, small, green, fast, slow, beautiful. Choose one."
UCAP: "Now — your turn. Choose your animal."

AKSI: Circulate. Bergerak ke meja siswa — jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'cukup isi tiga baris pertama (nama + adjektif, live in, eat). Baris "One more fact" opsional.',
            sudahBisa   : 'setelah empat baris selesai, tambah kalimat menggunakan "first" atau "after that" — misalnya "First, they hunt. After that, they sleep."',
          },
          bantuan: 'Jika siswa tidak tahu nama hewan dalam Bahasa Inggris: biarkan tulis nama hewannya dalam Bahasa Indonesia dan tulis versi Inggrisnya di pojok papan. Siswa boleh memilih hewan apapun — termasuk yang tidak ada di TP ini.',
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai di TP ini. Baris "One more fact" boleh diisi dalam Bahasa Indonesia — yang penting tiga baris pertama dalam Bahasa Inggris.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: minta siswa hanya mengisi dua baris pertama (nama + live in). Langsung ke L10 tanpa melalui L9.',
          energi : '🔵',
        },

        // L9 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tulisan siswa. Pilih 2 hasil — satu yang menggunakan "They live in" dan "They eat" dengan benar, satu yang memilih hewan yang menarik atau tidak umum.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan fakta hewan mereka — semua baris.
→ Kelas mendengarkan.

UCAP (setelah tiap siswa membacakan): "Nice. What animal was that?"
→ Kelas menjawab nama hewan.
UCAP: "Say the facts together."
→ Kelas ulang kalimat "They live in..." dan "They eat..." dari fakta yang baru dibacakan.`,
          bantuan: 'Jika siswa yang diminta membaca menolak: ucap "That\'s okay" dan tunjuk siswa lain.',
          cue    : 'Pilih siswa yang berbeda dari yang sudah menjawab di L5. Jika ada siswa yang menulis nama hewan dalam Bahasa Indonesia — baca dengan bangga: "Great — and in English, [nama hewan] is [nama Inggris]."',
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
UCAP: "What is the word for hutan lebat yang panas?"
→ Kelas: "Jungle!"
UCAP: "And hutan yang lebih sejuk?"
→ Kelas: "Forest!"
UCAP: "How do we say animals live somewhere?"
→ Kelas: "They live in...!"
UCAP: "And what they eat?"
→ Kelas: "They eat...!"

UCAP: "Give me two facts about tigers — fast."
→ Satu siswa atau kelas: "They live in the jungle. They eat meat."

AKSI: Hapus papan satu bagian per satu. Kelas ucapkan yang dihapus.
Urutan hapus: They eat… → They live in… → forest → jungle`,
          bantuan: null,
          cue    : 'Hapus "They eat" sebelum "They live in" — siswa mengucapkan struktur dalam urutan terbalik dari cara mereka mempelajarinya. Ini memperkuat memori dengan retrieval dari arah yang berbeda.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — Closure Emosional + Teaser TP10
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan.

UCAP: "Before we finish — one question."
UCAP: "What is your favorite animal? And why?"
→ Tunjuk 1–2 siswa yang mau berbagi. Jawaban dalam Bahasa apapun diterima.
→ Bantu terjemahkan singkat jika dalam Bahasa Indonesia: "So — [nama hewan]. They live in [habitat]. They eat [makanan]."

→ Jeda 3 detik.

UCAP: "Every animal has a home. Every animal has food. Now you can say that in English."

UCAP: "Next time — we talk about weather and what we wear. Sunny days, rainy days — and what we put on."
[Teaser TP10 — Weather and What We Wear]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : 'Jika siswa menjawab hewan favorit dalam Bahasa Indonesia, jangan paksa terjemahkan — cukup ucapkan nama Inggrisnya sekali dan lanjut. Momen ini adalah percakapan, bukan penilaian.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B09;
