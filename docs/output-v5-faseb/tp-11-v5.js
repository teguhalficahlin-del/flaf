/**
 * =============================================================
 * FLAF — TP B11 (Healthy Habits)
 * File: docs/output-v5-faseb/tp-11-v5.js
 * Format: v5.0
 * Fase: B (Kelas 3–4)
 * Jenis: Kompleks — Kluster C
 * Source: flaf-skenario-tp11-v2.txt (Fase B)
 * =============================================================
 */

const TP_B11 = {

  id       : 'tp-b11',
  nomor    : 11,
  kelas    : 3,
  nama     : 'Healthy Habits',
  tema     : 'Menghubungkan kebiasaan sehat dengan tubuh dan alasan sederhana',
  kluster  : 'C',
  jenis    : 'Kompleks',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat menyebutkan arti kata "healthy" dan "exercise" dan menggunakannya dalam konteks kebiasaan sehari-hari.',
    'Peserta didik dapat menggunakan kata "because" untuk memberikan alasan atas kebiasaan sehat yang mereka lakukan.',
    'Peserta didik dapat menulis minimal empat kebiasaan sehat menggunakan pola "I [kebiasaan] because [alasan]."',
  ],

  vocab    : ['head', 'eyes', 'hands', 'feet', 'rice', 'milk', 'water', 'apple', 'healthy', 'exercise', 'I eat... because...'],

  persiapan: [
    'Kartu kebiasaan: 6 kartu berisi satu kebiasaan per kartu — disiapkan dan dibagikan SEBELUM kelas dimulai (lihat L7):\n    Kartu 1: "I eat an apple every day."\n    Kartu 2: "I drink water every day."\n    Kartu 3: "I exercise for 30 minutes."\n    Kartu 4: "I sleep at nine o\'clock."\n    Kartu 5: "I brush my teeth twice a day."\n    Kartu 6: "I eat rice and vegetables."',
    'Lembar kerja siswa: 1 per siswa — template MY HEALTHY HABITS (lihat L10)',
    'Papan tulis + spidol untuk scaffold di L5 dan L8 — tidak dihapus sampai L10 selesai',
  ],

  checklist: [
    'Kartu kebiasaan (6 kartu) sudah disiapkan sebelum kelas — satu kartu per pasang atau kelompok 3',
    'Makanan yang disebutkan siswa di L2 ditulis di papan — dipakai sebagai contoh di L6 dan L10',
    'Scaffold empat kalimat di papan dari L8 TIDAK dihapus sampai L10 selesai',
    'Penilaian formatif sudah dibuka di L10 — minimal 3 siswa sudah dinilai',
    'Referensi ke TP10 ("we make decisions based on conditions — same idea for health") sudah disampaikan di L1',
    '"Because" sudah diucapkan dalam kalimat lengkap minimal 4 kali sebelum L10 — di L5, L6, L7, L8',
    'L7 dijalankan dengan urutan: baca kartu → berpikir → berbagi → kelas ulang',
    'Siswa yang membacakan di L11 berbeda dari yang menjawab di L4 dan L6',
    'Closure di L13 diakhiri dengan pertanyaan komitmen — bukan sekadar recap',
  ],

  printables: [
    { file: 'tp-b11-brush-teeth.png',              label: 'Brush Teeth' },
    { file: 'tp-b11-drink-water.png',              label: 'Drink Water' },
    { file: 'tp-b11-eat-vegetables.png',           label: 'Eat Vegetables' },
    { file: 'tp-b11-exercise.png',                 label: 'Exercise' },
    { file: 'tp-b11-healthy-habits-worksheet.png', label: 'Healthy Habits Worksheet' },
    { file: 'tp-b11-sleep-early.png',              label: 'Sleep Early' },
    { file: 'tp-b11-wash-hands.png',               label: 'Wash Hands' },
    { file: 'tp-b11-habit-card-1.png', label: 'Habit Card – I eat an apple every day.' },
    { file: 'tp-b11-habit-card-2.png', label: 'Habit Card – I drink water every day.' },
    { file: 'tp-b11-habit-card-3.png', label: 'Habit Card – I exercise for 30 minutes.' },
    { file: 'tp-b11-habit-card-4.png', label: 'Habit Card – I sleep at nine o\'clock.' },
    { file: 'tp-b11-habit-card-5.png', label: 'Habit Card – I brush my teeth twice a day.' },
    { file: 'tp-b11-habit-card-6.png', label: 'Habit Card – I eat rice and vegetables.' },
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 🟡',
    'L3 🔵',
    'L4 🟠',
    'L5 🔵',
    'L6 🟡',
    'L7 🔵',
    'L8 🔵',
    'L9 🟡',
    'L10 🔵',
    'L11 🔵',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'Budget 67 menit adalah yang paling ketat di Fase B sejauh ini. L9 dan L11 adalah buffer — potong keduanya jika perlu. Jika L7 berjalan lambat, langsung potong ke 2 pasang yang berbagi saja.',
      'L5: Jeda "WHY is an apple healthy?" sebelum mengajarkan "because" tidak boleh dipersingkat. Sepuluh detik jeda ini membuat "because" terasa perlu — bukan sekadar kosakata baru.',
      'L7: Kartu kebiasaan harus dibagikan sebelum kelas dimulai. Membagikan kartu di tengah sesi akan memakan waktu 2 menit yang tidak ada dalam budget.',
      'L10: Jangan seragamkan tulisan siswa — "I eat tempe because it is healthy" sama validnya dengan "I eat apple because it is sweet and healthy." Variasi makanan lokal harus disambut, bukan dikoreksi.',
    ],
    autonomy: [
      'Kartu kebiasaan boleh disesuaikan dengan makanan lokal yang lebih relevan — tempe, tahu, sayur bayam, ikan. Lebih bermakna dari apple atau milk yang mungkin tidak setiap hari dikonsumsi siswa.',
      'Jika ada siswa yang bertanya "is [makanan] healthy?" — jawab jujur dan singkat. TP11 bukan tentang nutrisi ilmiah, tapi tentang struktur "I eat ___ because ___."',
      'Pair practice di L9 boleh menggunakan kartu dari L7 sebagai prompt — siswa menceritakan kebiasaan di kartu mereka, bukan hanya kebiasaan pribadi. Ini membantu siswa yang bingung memilih.',
      '"I will [kebiasaan] because [alasan]" di L13 menggunakan future tense yang belum diajarkan — jika siswa menggunakannya, terima saja. Present tense juga valid.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — jeda 3 detik diam, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'TP11 adalah TP Kompleks pertama — sesi ini lebih panjang dan lebih banyak lapisan dari sebelumnya. Settling yang solid di L0 adalah investasi. Setiap menit yang hilang di sini akan terasa di L10.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP10 + Chant Sehat
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas.

UCAP: "Last time — we talked about weather and what we wear."
UCAP: "When it rains — what do we wear?"
→ Kelas: "A raincoat!"
UCAP: "Good. We make decisions based on conditions."
→ Jeda.
UCAP: "Today — same idea. We make decisions for our HEALTH. I eat this — because it's healthy. I exercise — because it's good for my body."

AKSI: Langsung masuk ke chant dengan ketukan meja.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Eat your vegetables — they're healthy — GO!
Drink your milk — it's good — GO!
Exercise every day — stay strong — GO!
Healthy habits — let's GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal chant di putaran pertama: tunjuk tangan ke mulut untuk "eat," tunjuk gelas imajiner untuk "drink," lakukan gerakan lari di tempat untuk "exercise." Tiga gesture konkret.',
          cue    : 'Jembatan ke TP10 ("we make decisions based on conditions — same idea for health") adalah kalimat terpenting di layar ini. Struktur kondisi → keputusan yang dipelajari di TP10 sekarang dipakai dalam konteks kesehatan. Ucap dengan penekanan pada "same idea."',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — Body Parts dan Food
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk bagian tubuh sendiri — tanya kelas dengan ritme cepat.

UCAP: "What is this?" [tunjuk kepala]
→ Kelas: "Head!"
UCAP: "These?" [tunjuk mata]
→ Kelas: "Eyes!"
UCAP: "And these?" [tunjuk tangan]
→ Kelas: "Hands!"
UCAP: "These?" [tunjuk kaki]
→ Kelas: "Feet!"

UCAP: "Good. Now — food. Name a healthy food."
→ Kelas menyebut 3–4 makanan. Tulis di papan.
UCAP: "Apple — healthy or not healthy?"
→ Kelas: "Healthy!"
UCAP: "Rice?"
→ Kelas: "Healthy!"
UCAP: "Milk?"
→ Kelas: "Healthy!"
UCAP: "Candy — healthy?"
→ Kelas: "No! Not healthy!"

UCAP: "Good. Today — we talk about healthy habits. What we do to take care of our body."`,
          bantuan: 'Jika kelas tidak menyebut makanan apapun: tunjuk benda di kelas — botol air minum, kotak bekal siswa — dan tanya "Is this healthy?"',
          cue    : 'Makanan yang disebutkan kelas di bagian bebas akan muncul kembali di L6 dan L10. Tulis 3–4 nama makanan mereka di papan — ini membuat contoh di L6 lebih personal dan relevan.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 47,

      langkah: [

        // L3 — Introduksi: Healthy dan Exercise
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo, siswa hanya mendengar dan melihat.

UCAP: "Two new words today — listen."

UCAP: "Healthy. Heal-thy." [ucap perlahan]
→ Tulis di papan: HEALTHY
→ Jeda 3 detik.
UCAP: "Healthy — artinya sehat. Good for your body. Good for your mind."
UCAP: "Apple — healthy. Milk — healthy. Sleep — healthy."

UCAP: "And — exercise. Ex-er-cise." [ucap perlahan]
→ Tulis di papan: EXERCISE
→ Jeda 3 detik.
UCAP: "Exercise — artinya olahraga. Moving your body. Running, jumping, swimming."
→ Lakukan gerakan lari di tempat 3 detik.
UCAP: "Exercise is healthy. Good for your legs, your heart, your whole body."

AKSI: Tunjuk bagian tubuh saat menyebut exercise:
UCAP: "When you exercise — your legs move." [tunjuk kaki]
UCAP: "Your arms move." [tunjuk lengan]
UCAP: "Your heart beats faster." [tunjuk dada]

🗣 TOGETHER
UCAP: "Say it — healthy."
→ Kelas: "Healthy!"
UCAP: "Exercise."
→ Kelas: "Exercise!"`,
          bantuan: 'Jika siswa bingung dengan "healthy" vs "exercise": ucap analogi konkret — "Healthy = kondisi. Sehat. Exercise = cara mencapainya. Olahraga." Dua kata satu kalimat cukup.',
          cue    : 'Dua kata ini cukup diperkenalkan dalam satu layar karena bisa dikontraskan langsung: "healthy = sehat" dan "exercise = cara menjadi sehat." Jangan pisahkan ke dua layar berbeda.',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Drill — Kebiasaan Sehat vs Tidak Sehat
        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER

AKSI: Guru menyebut satu kebiasaan, kelas menjawab "healthy" atau "not healthy."

UCAP: "Sleep eight hours — healthy or not healthy?"
→ Kelas: "Healthy!"
UCAP: "Eat vegetables every day?"
→ Kelas: "Healthy!"
UCAP: "Never exercise?"
→ Kelas: "Not healthy!"
UCAP: "Drink water?"
→ Kelas: "Healthy!"
UCAP: "Eat candy for breakfast every day?"
→ Kelas: "Not healthy!"
UCAP: "Brush your teeth every morning?"
→ Kelas: "Healthy!"

AKSI: Percepat — 3–4 kebiasaan lagi secara acak, bergantian antara healthy dan not healthy.

AKSI: Tunjuk 2–3 siswa individual:
UCAP: "[nama] — give me one healthy habit. Something YOU do."
→ Siswa menyebut satu kebiasaan dalam Bahasa apapun.
→ Bantu framing: "So — 'I [kebiasaan]. It's healthy.'"`,
          diferensiasi: {
            perluSupport: 'cukup menjawab "healthy" atau "not healthy" tanpa kalimat penuh.',
            sudahBisa   : 'minta satu kalimat — "Drinking water is healthy."',
          },
          bantuan: 'Jika siswa menjawab "healthy" dan "not healthy" terbalik: jangan langsung koreksi. Tanya kelas "Do you agree?" Biarkan kelas yang merespons — peer correction lebih efektif dari koreksi guru.',
          cue    : 'Peer correction di layar ini lebih efektif dari koreksi guru langsung — setiap kali kelas merespons "Do you agree?", itu momen pemahaman aktif, bukan hanya mendengar.',
          darurat: null,
          energi : '🟠',
        },

        // L5 — Introduksi: Because + Modeling Sebab-Akibat
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pelan suara. Tunggu 2 detik sebelum mulai.

👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — I have a question. WHY is an apple healthy?"
→ Jeda 10 detik. Biarkan siswa mencoba menjawab dalam Bahasa apapun.
UCAP: "Good question — needs a good answer. We use — because."
→ Tulis di papan: because
→ Jeda 3 detik.

UCAP: "Listen. 'I eat an apple — because it is healthy.'"
→ Tulis di papan: I eat an apple because it is healthy.
→ Tunjuk "because" lalu tunjuk "it is healthy."

UCAP: "'Because' — artinya karena. It gives the reason. The WHY."
UCAP: "I eat an apple — [tunjuk bagian pertama] — because it is healthy — [tunjuk bagian kedua]. Action — then reason."

AKSI: Tambahkan contoh kedua:
UCAP: "I exercise — because it is good for my body."
→ Tulis: I exercise because it is good for my body.

UCAP: "I drink milk — because — ?"
→ Tunggu kelas mencoba melengkapi.
→ Bantu: "Because it is healthy. Because it makes my bones strong."
→ Tulis: I drink milk because it is healthy.

🗣 TOGETHER
UCAP: "Say it with me — 'I eat an apple because it is healthy.'"
→ Kelas mengulang 2 kali.`,
          bantuan: 'Jika siswa menjawab hanya kata setelah "because" tanpa kalimat penuh: ucap seluruh kalimat dengan nada menggantung — "I eat an apple be-CAUSE..." tunggu kelas melengkapi. Teknik nada menggantung setelah "because" sama seperti "when" di TP10.',
          cue    : '"WHY is an apple healthy?" adalah pertanyaan yang membuat "because" terasa perlu sebelum diajarkan. Jangan lewatkan jeda 10 detik ini — momen itu yang menciptakan kebutuhan, bukan penjelasan guru.',
          darurat: null,
          energi : '🔵',
        },

        // L6 — Drill: I Eat… Because…
        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER

AKSI: Tunjuk makanan atau kebiasaan yang sudah ada di papan dari L2. Kelas lengkapi kalimat "because."

UCAP: "I eat rice — because — ?"
→ Kelas: "Because it is healthy!" atau "Because it gives energy!"
UCAP: "I drink water — because — ?"
→ Kelas: "Because it is good for my body!"
UCAP: "I exercise — because — ?"
→ Kelas: "Because it is healthy!" atau "Because it makes me strong!"

AKSI: Tunjuk 3–4 siswa individual:
UCAP: "[nama] — I eat apples because — ?"
→ Siswa melengkapi dengan "because" + alasan.

AKSI: Balik arah — guru ucap alasan, kelas sebut tindakannya:
UCAP: "Because it is healthy and sweet — what do you eat?"
→ Kelas: "Apple!" atau "I eat an apple!"
UCAP: "Because it makes your bones strong — what do you drink?"
→ Kelas: "Milk!" atau "I drink milk!"`,
          diferensiasi: {
            perluSupport: 'cukup ucap kata setelah "because" — "healthy" atau "good for my body" — tanpa kalimat penuh.',
            sudahBisa   : 'buat kalimat penuh dengan "because" + dua alasan — "I eat an apple because it is healthy and it is sweet."',
          },
          bantuan: 'Jika kelas mengulang "because it is healthy" untuk semua jawaban: tulis dua alternatif di papan — "because it gives energy" dan "because it makes me strong." Dua opsi tambahan ini akan memperkaya tulisan di L10.',
          cue    : 'Balik arah ("because it is healthy and sweet — what do you eat?") adalah momen yang membuktikan pemahaman hubungan sebab-akibat, bukan hafalan pasangan kata.',
          darurat: null,
          energi : '🟡',
        },

        // L7 — Reading Kartu Kebiasaan — Inferensi
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Bagikan kartu kebiasaan — satu kartu per pasang atau per kelompok 3. Pastikan setiap siswa bisa membaca kartunya.

Kartu berisi:
  Kartu 1: "I eat an apple every day."
  Kartu 2: "I drink water every day."
  Kartu 3: "I exercise for 30 minutes."
  Kartu 4: "I sleep at nine o'clock."
  Kartu 5: "I brush my teeth twice a day."
  Kartu 6: "I eat rice and vegetables."

UCAP: "Read your card. Then — answer this question: WHY is this a healthy habit?"
UCAP: "Use 'because' in your answer."
→ Jeda 2 menit. Biarkan siswa membaca diam-diam lalu berbicara pelan dengan partner.

AKSI: Tanya 3–4 pasang untuk berbagi:
UCAP: "[pasang] — what is your habit? And why is it healthy?"
→ Siswa membaca kartu dan menyebut satu alasan dengan "because."

UCAP (setelah setiap pasang): "Good. That is healthy because — [ulangi alasan mereka]. Say it together."
→ Kelas mengulang kalimat lengkap.`,
          bantuan: 'Jika siswa tidak bisa menemukan alasan "because": tanya lebih spesifik — "Is sleeping at nine o\'clock healthy? Yes? So why? Because your body needs ___?" Biarkan siswa mengisi kata terakhir.',
          cue    : 'Urutan reading → speaking → (nanti) writing adalah integrasi skill yang menjadi penanda TP Kompleks. Pastikan siswa membaca kartu diam-diam dulu sebelum berbagi ke kelas — jangan lewati tahap baca.',
          darurat: 'Jika L7 melewati 7 menit: potong jumlah pasang yang berbagi menjadi 2 saja. Lanjut ke L8.',
          energi : '🔵',
        },

        // L8 — Modeling Kalimat Lengkap + Baca Bersama
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kumpulkan kartu. Guru kembali ke papan.

UCAP: "Good reading and thinking. Now — let's put it all together."

AKSI: Tulis scaffold di papan:

  I am healthy because I _________________.
  I eat _________________ because _________________.
  I exercise because _________________.
  I sleep at _________________ because my body needs rest.

UCAP: "Listen. I will read my healthy habits."

UCAP: "I am healthy because I eat good food and exercise."
UCAP: "I eat rice and vegetables because they give me energy."
UCAP: "I exercise every morning because it makes my body strong."
UCAP: "I sleep at nine o'clock because my body needs rest."

🗣 TOGETHER
AKSI: Tunjuk kalimat di papan satu per satu. Kelas membaca bersama guru.
→ Putaran pertama: guru tunjuk dan pimpin.
→ Putaran kedua: guru tunjuk saja — kelas baca sendiri.

UCAP: "Good. Now — you write your own healthy habits."`,
          bantuan: 'Jika kelas membaca tidak sinkron: biarkan. Putaran kedua biasanya lebih baik. Yang penting setiap siswa membaca setidaknya sekali sebelum L9.',
          cue    : 'Scaffold di papan tetap ada sampai L10 selesai. Ini lebih penting dari layar sebelumnya karena TP Kompleks membutuhkan scaffold yang lebih kuat — siswa mengintegrasikan lebih banyak elemen sekaligus.',
          darurat: null,
          energi : '🔵',
        },

        // L9 — Pair Practice — Kebiasaan Sehat Saya [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "Tell your partner two healthy habits. Use 'because.'"
UCAP: "Start with: 'I am healthy because I...'"

AKSI: Demo singkat dengan satu siswa sukarelawan:
UCAP: "[nama] — tell me one healthy habit. Use 'because.'"
→ Siswa: "I eat vegetables because they are healthy."
UCAP: "Good. And one more — what else do you do?"
→ Siswa: "I exercise because it makes me strong."
UCAP: "Perfect. Now — your turn with your partner."

AKSI: Beri waktu 4 menit — masing-masing 2 menit per arah. Circulate dan dengarkan.`,
          diferensiasi: {
            perluSupport: 'cukup satu kalimat dengan "because." Boleh gunakan scaffold dari kartu L7.',
            sudahBisa   : 'ceritakan tiga kebiasaan, gunakan variasi "because" yang berbeda-beda.',
          },
          bantuan: 'Jika satu pasang tidak bisa memulai: tunjuk scaffold di papan, tanya — "What do you eat that is healthy?" — setelah mereka menjawab, arahkan: "Now say it with \'because.\'"',
          cue    : null,
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair practice menjadi gaduh dalam 1 menit: hentikan. Ucap "Okay — take your pencil. Let\'s write." Lanjut ke L10 langsung.',
          energi : '🟡',
        },

        // L10 — Writing Individual — Kebiasaan Sehatku
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L8 (L9 dilewati) — ucap: "Okay. Take your pencil. Let's write." Jeda 3 detik. Bagikan lembar kerja.
AKSI: Bagikan lembar kerja (1 per siswa). Scaffold di papan dari L8 tetap ada.

Lembar kerja berisi template:

  MY HEALTHY HABITS

  I am healthy because I _________________________.

  I eat _________________ because _________________.

  I drink _________________ because _________________.

  I exercise because _________________________.

  I sleep at _________________ because my body needs rest.

  One more habit: I _________________ because _________________.

UCAP: "Write your real habits. Use 'because' in every sentence."
UCAP: "Your food, your exercise, your sleep — your real life."

👂 LISTEN FIRST — guru demo mengisi baris pertama di papan:
UCAP: "Watch me. 'I am healthy because I eat vegetables and exercise every day.'" [tulis]
UCAP: "Now — your turn."

AKSI: Circulate. Bergerak ke meja siswa — jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'cukup isi empat baris pertama. Baris "one more habit" opsional.',
            sudahBisa   : 'setelah semua baris terisi, tambah satu kalimat bebas — "I also [kebiasaan] because [alasan]."',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai. Siswa boleh menulis makanan dalam Bahasa Indonesia jika tidak tahu nama Inggrisnya — yang penting struktur "I eat ___ because ___" terpenuhi. Tulis 3–4 nama makanan tambahan di pojok papan jika diminta: spinach, tofu, fish, chicken.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: minta siswa hanya mengisi tiga baris pertama (I am healthy, I eat, I drink). Langsung ke L12 tanpa melalui L11.',
          energi : '🔵',
        },

        // L11 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tulisan siswa. Pilih 2 hasil — satu yang menggunakan "because" dengan alasan yang menarik, satu yang memilih kebiasaan yang tidak umum.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan satu atau dua kalimat dari tulisan mereka.
→ Kelas mendengarkan.

UCAP (setelah tiap siswa membacakan): "What was their habit?"
→ Kelas menjawab nama kebiasaan.
UCAP: "And why? What was the reason?"
→ Kelas menjawab "because ___."

UCAP: "Say it together — [nama siswa] said: '___'"
→ Kelas mengulang kalimat "because" yang baru didengar.`,
          bantuan: 'Jika siswa yang diminta membaca menolak: ucap "That\'s okay" dan tunjuk siswa lain.',
          cue    : 'Pertanyaan "what was their reason?" memaksa kelas untuk mendengarkan secara aktif — bukan hanya menunggu giliran mereka. Pilih siswa yang berbeda dari yang sudah menjawab di L4 dan L6.',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit]',
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 8,

      langkah: [

        // L12 — Review + Hapus Papan
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Siswa simpan lembar kerja. Guru kembali ke depan kelas.

UCAP: "Good work today. Let's remember."
UCAP: "How do we say 'sehat' in English?"
→ Kelas: "Healthy!"
UCAP: "And 'olahraga'?"
→ Kelas: "Exercise!"
UCAP: "How do we give a reason — one word?"
→ Kelas: "Because!"

UCAP: "Give me one complete sentence — I eat something — because — why."
→ Satu siswa atau kelas: "I eat an apple because it is healthy!"

AKSI: Hapus papan satu bagian per satu. Kelas ucapkan yang dihapus.
Urutan hapus: because it is healthy → I eat… → exercise → healthy`,
          bantuan: null,
          cue    : 'Hapus "because it is healthy" dahulu — bukan kata "because" sendiri. Ini memperkuat bahwa "because" selalu hadir bersama alasan, tidak bisa berdiri sendiri.',
          darurat: null,
          energi : '🟡',
        },

        // L13 — Closure Emosional + Teaser TP12
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan.

UCAP: "Before we finish — I want to ask."
UCAP: "What is one healthy thing you will do today — after school?"
→ Tunjuk 1–2 siswa yang mau berbagi. Jawaban dalam Bahasa apapun diterima.
→ Bantu framing: "So — 'I will [kebiasaan] because [alasan].'"

→ Jeda 3 detik.

UCAP: "Small habits. Every day. That's what makes us healthy."

UCAP: "Next time — we talk about people who help us stay healthy. Doctors. Nurses. And other helpers in our community."
[Teaser TP12 — Community Helpers / Professions]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : 'Pertanyaan "what healthy thing will you do today?" membuat closure terasa seperti komitmen nyata, bukan sekadar penutup sesi. Ucap dengan tulus dan tunggu jawaban — jangan terburu-buru ke goodbye.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B11;
