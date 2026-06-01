/**
 * =============================================================
 * FLAF — TP B14 (Celebrations and Traditions)
 * File: docs/output-v5-faseb/tp-14-v5.js
 * Format: v5.0
 * Fase: B (Kelas 4)
 * Jenis: Biasa — Kluster D
 * Source: flaf-skenario-tp14-v2.txt (Fase B)
 * =============================================================
 */

const TP_B14 = {

  id       : 'tp-b14',
  nomor    : 14,
  kelas    : 4,
  nama     : 'Celebrations and Traditions',
  tema     : 'Mendeskripsikan perayaan dan tradisi keluarga menggunakan pola kalimat komunal',
  kluster  : 'D',
  jenis    : 'Biasa',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat menyebutkan nama perayaan dan mendeskripsikan tradisi keluarga menggunakan pola "On ___, we ___".',
    'Peserta didik dapat menggunakan "we" sebagai subjek komunal untuk membedakan tindakan bersama dari tindakan personal.',
    'Peserta didik dapat menulis deskripsi perayaan favorit lengkap termasuk nama perayaan, tradisi, dan perasaan dengan alasan.',
  ],

  vocab    : ['grandmother', 'grandfather', 'sister', 'brother', 'family', 'happy', 'rendang', 'Eid', 'visit', 'On... we...'],

  persiapan: [
    'Gambar atau foto suasana perayaan Eid (keluarga berkumpul, meja makan, pakaian baru) — disiapkan sebelum kelas atau ditampilkan di layar',
    'Lembar kerja siswa: 1 per siswa — template MY FAVORITE CELEBRATION (lihat L8)',
    'Papan tulis + spidol untuk pola "On Eid, we…" di L4 dan scaffold lima kalimat di L6 — jangan hapus sampai L8 selesai',
  ],

  checklist: [
    'Gambar suasana perayaan Eid sudah disiapkan sebelum kelas — terlihat jelas dari seluruh sudut kelas',
    'Scaffold lima kalimat di papan dari L6 TIDAK dihapus sampai L8 selesai',
    'Penilaian formatif sudah dibuka di L8 — minimal 3 siswa sudah dinilai',
    'Referensi ke TP13 ("food reminds us of family — when do families eat together the most?") sudah disampaikan di L1',
    '"We" sebagai subjek komunal sudah ditunjuk eksplisit di L4 — termasuk perbedaan dengan "I"',
    'Kalimat "because" dari TP11–13 sudah muncul kembali di L6 baris keempat — dalam konteks perayaan',
    'Template L8 tidak membatasi pilihan perayaan — semua perayaan valid',
    'Teaser TP15 disampaikan dengan framing "semua yang dipelajari di Kluster D" — bukan hanya nama topik',
  ],

  printables: [
    { file: 'tp-b14-birthday.png',                  label: 'Birthday' },
    { file: 'tp-b14-christmas.png',                 label: 'Christmas' },
    { file: 'tp-b14-eid.png',                       label: 'Eid' },
    { file: 'tp-b14-graduation.png',                label: 'Graduation' },
    { file: 'tp-b14-my-celebration-worksheet.png',  label: 'My Celebration Worksheet' },
    { file: 'tp-b14-nyepi.png',                     label: 'Nyepi' },
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
      'L3: Koneksi "rendang from TP13 — now at Eid" tidak boleh dilewati. Jika lupa, tunjuk gambar rendang di papan (jika masih ada) dan ucap: "Remember rendang? On Eid — we eat it." Tiga detik, satu kalimat.',
      'L4: "We" sebagai subjek baru perlu satu kalimat penjelasan — tidak lebih. Jangan masuk ke penjelasan grammar pronoun. Cukup: "\'We\' — kita semua. On Eid, WE visit — bersama-sama." Lanjut ke drill.',
      'L8: Siswa yang tidak merayakan Eid mungkin merasa bingung tentang perayaan apa yang harus mereka tulis. Jika ada siswa yang tampak diam: dekati, tanya pelan "Kamu merayakan hari apa yang istimewa?" — setelah mereka menjawab, arahkan ke template.',
    ],
    autonomy: [
      'Gambar Eid boleh diganti atau ditambah dengan gambar perayaan lain — Natal, Imlek, Waisak, ulang tahun. Yang penting ada satu gambar yang menunjukkan keluarga berkumpul dan makan bersama.',
      '"Excited" yang diperkenalkan di L2 tidak perlu didrill — cukup ditawarkan sebagai kosakata bonus yang berguna untuk konteks perayaan.',
      'Jika ada siswa yang perayaan favoritnya tidak ada dalam daftar contoh (festival daerah, hari keluarga, pernikahan kerabat) — izinkan dan bantu temukan kalimatnya. Ini tanda siswa sudah melampaui scaffold.',
      'Pair practice di L7 paling kaya jika partner memiliki perayaan yang berbeda — mendorong pertukaran yang genuine. Jika memungkinkan, pasangkan siswa yang berbeda latar belakang.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — jeda 3 detik diam, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'TP14 adalah TP terakhir sebelum Panen Kluster D. Semua yang dipelajari di TP12–13 — profesi, makanan, perasaan — akan muncul kembali dalam konteks perayaan. Ini adalah konvergensi, bukan topik baru.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP13 + Chant Perayaan
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas.

UCAP: "Last time — we talked about food. Rendang. Spicy. I like rendang because it is delicious."
UCAP: "And we said — food reminds us of family."
→ Jeda.
UCAP: "When do families eat together the most? When do you see your grandmother, your cousins, everyone?"
→ Biarkan kelas menjawab dalam Bahasa apapun: "Lebaran!" "Natal!" "Hari Raya!"
UCAP: "Yes — celebrations. Today — we talk about those special days."

AKSI: Langsung masuk ke chant dengan ketukan meja.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Eid is here — we celebrate — GO!
Visit family — eat together — GO!
Happy, happy — it's a special day — GO!
Celebrations — let's GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal chant: tiga gesture membantu — tangan terbuka untuk "celebrate," tangan melambai untuk "visit," senyum lebar dan tepuk tangan untuk "happy."',
          cue    : 'Jembatan ke TP13 ("food reminds us of family — when do families eat together the most?") adalah pertanyaan yang mengalir natural dari penutup TP13. Ucap sebelum chant — satu kalimat, satu jeda, lanjut.',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — Family dan Feelings
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tanya kelas dengan ritme cepat.

UCAP: "Family — who comes to your house during celebrations?"
→ Kelas menyebut anggota keluarga. Tulis di papan: grandmother, grandfather, sister, brother — sambil menyebut nama Inggrisnya.
UCAP: "Grandmother — in English?"
→ Kelas: "Grandmother!"
UCAP: "Grandfather?"
→ Kelas: "Grandfather!"
UCAP: "Sister? Brother?"
→ Kelas: "Sister! Brother!"

UCAP: "Good. Now — feelings. When Eid comes — how do you feel?"
→ Kelas: "Happy!" "Excited!"
UCAP: "Excited — artinya sangat antusias, tidak sabar menunggu. Say it — excited."
→ Kelas: "Excited!"
UCAP: "When you see your grandmother after a long time — how do you feel?"
→ Kelas: "Happy!" atau "Excited!" atau variasi lain.

UCAP: "Good. Celebrations make us feel happy and excited. Today — we learn to talk about them."`,
          bantuan: 'Jika kelas tidak merespons pertanyaan feelings: ucap sambil buat ekspresi muka — senyum lebar dan tangan ke atas untuk "excited," peluk diri sendiri untuk "happy." Ekspresi fisik lebih cepat dari penjelasan.',
          cue    : '"Excited" ditawarkan di sini sebagai kosakata bonus yang berguna — bukan target formal. Tidak perlu didrill atau diuji. Cukup diucap, diartikan, dan dibiarkan masuk secara natural.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 40,

      langkah: [

        // L3 — Introduksi: Eid dan Visit
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo, siswa hanya mendengar dan melihat.

AKSI: Tunjukkan gambar suasana perayaan Eid.

UCAP: "Look at this." [tunjuk gambar]
UCAP: "This is — Eid. Eid." [ucap dengan jelas]
→ Jeda 3 detik.
UCAP: "Eid is a special celebration. We wear new clothes. We pray together. We eat together."
UCAP: "In Indonesia — we call it Lebaran or Hari Raya Idul Fitri. In English — Eid."

UCAP: "And — we visit family."
UCAP: "Visit — artinya mengunjungi. We go to see people we love."
→ Tulis di papan: VISIT
→ Jeda 3 detik.
UCAP: "On Eid, we visit grandmother. We visit relatives."

AKSI: Hubungkan kembali ke TP13:
UCAP: "And — what do we eat on Eid?"
→ Kelas: "Rendang!" atau "Ketupat!" atau variasi lain.
UCAP: "Yes! The food from last time — now it's part of the celebration."

🗣 TOGETHER
UCAP: "Say it — Eid."
→ Kelas: "Eid!"
UCAP: "Visit."
→ Kelas: "Visit!"`,
          bantuan: 'Jika siswa tidak familiar dengan Eid: ucap dengan hangat — "Not everyone celebrates Eid — that\'s okay. We also talk about other celebrations. Birthdays, New Year, any special day with family."',
          cue    : 'Koneksi "rendang from TP13 — now at Eid" memperkuat rantai TP13 → TP14 secara konkret. Siswa yang menulis tentang rendang di TP13 akan merasakan bahwa makanan itu sekarang hadir dalam konteks perayaan yang lebih besar.',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Introduksi: On… We…
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — let's talk about what we DO on celebrations."
UCAP: "On Eid — we visit family."
→ Tulis di papan: On Eid, we visit family.
→ Jeda 3 detik. Tunjuk "On Eid" lalu tunjuk "we visit family."

UCAP: "'On Eid' — ini waktunya. When does it happen."
UCAP: "'We' — artinya kita. Not just I — we. Together."
UCAP: "'Visit' — we go to see people."

AKSI: Tambahkan dua contoh lagi:
UCAP: "On Eid, we eat rendang and rice."
→ Tulis: On Eid, we eat rendang and rice.
UCAP: "On Eid, we wear new clothes."
→ Tulis: On Eid, we wear new clothes.

🗣 TOGETHER
UCAP: "Say it with me — 'On Eid, we visit family.'"
→ Kelas mengulang 2 kali.
UCAP: "'On Eid, we eat rendang and rice.'"
→ Kelas mengulang.

UCAP: "On Eid, on birthdays, on New Year — same pattern. On [celebration], we [activity]."`,
          bantuan: 'Jika siswa mengucapkan "On Eid, I visit" alih-alih "we visit": jangan koreksi keras. Ucap dengan penekanan — "WE — kita semua. On Eid, WE visit family." Lanjut.',
          cue    : '"We" sebagai subjek komunal adalah yang pertama dalam Fase B. Tunjuk eksplisit: "\'We\' — kita semua. Bukan hanya saya, bukan hanya kamu. Semua bersama." Satu kalimat ini mencegah kebingungan antara "we" dan "I" yang akan muncul di L8.',
          darurat: null,
          energi : '🔵',
        },

        // L5 — Drill — Tradisi Perayaan
        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Good. Now — let's practice together. Fast."

🗣 TOGETHER

AKSI: Guru menyebut satu perayaan, kelas menjawab kalimat tradisinya.

UCAP: "On Eid — what do we do?"
→ Kelas: "We visit family!" atau "We eat rendang!"
UCAP: "On New Year — what do we do?"
→ Kelas: "We celebrate!" atau "We watch fireworks!"
UCAP: "On your birthday — what do we do?"
→ Kelas: "We eat cake!" atau "We sing!"

AKSI: Percepat — 3–4 perayaan secara acak.

AKSI: Balik arah — guru sebut aktivitas, kelas sebut perayaannya:
UCAP: "We eat rendang and ketupat — when?"
→ Kelas: "On Eid!"
UCAP: "We blow out candles — when?"
→ Kelas: "On a birthday!"

AKSI: Tunjuk 2–3 siswa individual:
UCAP: "[nama] — on Eid, what does YOUR family do?"
→ Siswa menjawab dengan satu tradisi dalam Bahasa apapun.
→ Bantu framing: "So — 'On Eid, we ___'"`,
          diferensiasi: {
            perluSupport: 'cukup menjawab satu aktivitas — "visit family" atau "eat rendang."',
            sudahBisa   : 'minta kalimat penuh — "On Eid, we visit grandmother and eat rendang."',
          },
          bantuan: 'Jika siswa tidak tahu menjawab: tunjuk daftar aktivitas perayaan di papan — "On Eid, we: visit family / eat together / wear new clothes / pray." Pilih dari daftar ini.',
          cue    : 'Bagian balik arah ("We eat rendang — when?") lebih penting dari bagian pertama. Di sana siswa membuktikan bahwa mereka memahami pola "On… we…" secara aktif — bukan hanya mengulang pasangan perayaan-aktivitas.',
          darurat: null,
          energi : '🟠',
        },

        // L6 — Modeling Kalimat Tradisi Lengkap
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pelan suara. Tunggu 2 detik sebelum mulai.

👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — let's describe a celebration completely. Listen."

UCAP: "My favorite celebration is Eid."
→ Tulis di papan: My favorite celebration is Eid.
UCAP: "On Eid, we wear new clothes."
→ Tulis: On Eid, we wear new clothes.
UCAP: "We visit grandmother and grandfather."
→ Tulis: We visit grandmother and grandfather.
UCAP: "We eat rendang and rice because they are delicious."
→ Tulis: We eat rendang and rice because they are delicious.
UCAP: "I feel happy and excited on Eid."
→ Tulis: I feel happy and excited on Eid.

🗣 TOGETHER
AKSI: Tunjuk kalimat di papan satu per satu. Kelas membaca bersama guru.
→ Putaran pertama: guru tunjuk dan pimpin.
→ Putaran kedua: guru tunjuk saja — kelas baca sendiri.

UCAP: "Good. Now — you will describe your own favorite celebration."`,
          bantuan: 'Jika kelas membaca tidak sinkron di putaran kedua: biarkan. Lima kalimat sudah cukup untuk scaffold — yang penting setiap siswa membaca setidaknya sekali sebelum L7.',
          cue    : 'Kalimat keempat ("We eat rendang and rice because they are delicious") mengintegrasikan tiga elemen sekaligus: On… we… (TP14) + makanan dari TP13 + because dari TP11. Tunjuk eksplisit: "\'Because\' — sama seperti kemarin. \'I like rendang because\' — sekarang \'We eat rendang because.\'"',
          darurat: null,
          energi : '🔵',
        },

        // L7 — Pair Practice — Ceritakan Perayaan [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "Tell your partner about your favorite celebration."
UCAP: "Use: 'My favorite celebration is ___. On ___, we ___. I feel ___ because ___'"

AKSI: Demo singkat dengan satu siswa sukarelawan:
UCAP: "[nama] — what is your favorite celebration?"
→ Siswa menyebut perayaan.
UCAP: "On that day — what does your family do?"
→ Siswa: "We visit grandmother. We eat together."
UCAP: "Good — how do you feel?"
→ Siswa: "I feel happy!"
UCAP: "Now — with your partner. Tell them your celebration."

AKSI: Beri waktu 4 menit — masing-masing 2 menit per arah. Circulate.`,
          diferensiasi: {
            perluSupport: 'cukup dua kalimat — "My favorite celebration is ___. On ___, we ___."',
            sudahBisa   : 'tambahkan kalimat "because" — "I feel happy because I see my family."',
          },
          bantuan: 'Jika satu pasang tidak bisa memulai: tunjuk scaffold di papan, ucap kalimat pertama untuk mereka — "My favorite celebration is..." — tunggu mereka melengkapi.',
          cue    : null,
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair practice gaduh dalam 1 menit: hentikan. Ucap "Okay — take your pencil. Let\'s write." Lanjut ke L8 dengan transisi: "Think about your favorite celebration."',
          energi : '🟡',
        },

        // L8 — Writing Individual — Perayaan Favoritku
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L6 (L7 dilewati) — ucap: "Okay. Take your pencil. Think about your favorite celebration. Let's write." Jeda 3 detik. Bagikan lembar kerja.
AKSI: Bagikan lembar kerja (1 per siswa). Scaffold di papan dari L6 tetap ada.

Lembar kerja berisi template:

  MY FAVORITE CELEBRATION

  My favorite celebration is _________________________.

  On _________________, we _________________________.

  We also _________________________.

  We eat _________________ because _________________.

  I feel _________________ because _________________________.

  One special tradition: On this day, we always _________________________.

UCAP: "Write about your favorite celebration. Eid, birthday, New Year — any special day."
UCAP: "Use 'On ___, we ___' and 'because' in your sentences."

👂 LISTEN FIRST — guru demo mengisi baris pertama di papan:
UCAP: "Watch me. My favorite celebration is Eid." [tulis]
UCAP: "On Eid, we visit grandmother and eat rendang." [tulis]
UCAP: "I feel happy because I see all my family." [tulis]
UCAP: "Now — your turn."

AKSI: Circulate. Bergerak ke meja siswa — jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'cukup isi empat baris pertama. Baris "One special tradition" opsional.',
            sudahBisa   : 'setelah template selesai, tambah satu kalimat — "This celebration is important to me because ___."',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai. Siswa boleh menulis tentang perayaan apapun — Eid, Natal, Waisak, ulang tahun, Imlek. TP14 adalah tentang tradisi personal dan keluarga, bukan tentang satu agama atau budaya. Jangan arahkan pilihan perayaan siswa.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: minta siswa hanya mengisi tiga baris pertama (nama perayaan, On… we…, I feel because). Langsung ke L10 tanpa melalui L9.',
          energi : '🔵',
        },

        // L9 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tulisan siswa. Pilih 2 hasil — satu yang menggunakan "because" dengan alasan yang personal, satu yang menceritakan tradisi yang unik atau tidak biasa.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan deskripsi perayaan mereka.
→ Kelas mendengarkan.

UCAP (setelah tiap siswa membacakan): "What celebration was that?"
→ Kelas menjawab nama perayaan.
UCAP: "What do they do on that day?"
→ Kelas menjawab satu tradisi.
UCAP: "Say the 'we' sentence together."
→ Kelas mengulang satu kalimat "On ___, we ___."`,
          bantuan: 'Jika siswa yang diminta membaca menolak: ucap "That\'s okay" dan tunjuk siswa lain.',
          cue    : 'Pertanyaan "what do they do on that day?" memancing kelas untuk mendengar kalimat "On ___, we ___" secara aktif — bukan hanya menunggu giliran. Tiga pertanyaan setelah setiap pembacaan memperkuat tiga elemen utama TP14.',
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
UCAP: "What is Eid?"
→ Kelas: "A celebration!" atau "Hari Raya!"
UCAP: "And 'visit' — artinya?"
→ Kelas: "Mengunjungi!" atau "Go to see people!"
UCAP: "How do we say 'Saat Lebaran, kita...'"
→ Kelas: "On Eid, we...!"

UCAP: "Give me one complete sentence about your celebration."
→ Satu siswa: "On Eid, we visit grandmother and eat rendang!"

AKSI: Hapus papan satu bagian per satu. Kelas ucapkan yang dihapus.
Urutan hapus: because they are delicious → we eat rendang → we visit grandmother → On Eid → visit → Eid`,
          bantuan: null,
          cue    : 'Hapus kalimat "because" sebelum kalimat "On Eid, we…" — urutan ini memperkuat bahwa "because" adalah lapisan deskripsi yang lebih dalam, dan "On… we…" adalah struktur inti TP14.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — Closure Emosional + Teaser TP15
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan.

UCAP: "Before we finish — I want to say something."
UCAP: "You have learned to talk about jobs. About food. About celebrations."
UCAP: "These are not just English words. These are parts of your life."

→ Jeda 3 detik.

UCAP: "One question — what is one tradition in your family that you love?"
→ Tunjuk 1–2 siswa yang mau berbagi. Jawaban dalam Bahasa apapun diterima.
→ Bantu framing: "So — 'On ___, we always ___. I love it because ___'"

→ Jeda 3 detik.

UCAP: "Next time — something special. We will put everything together — jobs, food, celebrations — and write about our country."
[Teaser TP15 — My Country — Panen]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : 'Teaser TP15 ("jobs, food, celebrations — write about our country") adalah framing Panen yang membuat siswa antusias. Ucap dengan nada penuh harapan — bukan formal. Siswa sudah punya semua alat yang mereka butuhkan untuk TP15.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B14;
