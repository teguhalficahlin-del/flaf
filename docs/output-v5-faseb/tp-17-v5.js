/**
 * =============================================================
 * FLAF — TP B17 (Getting Around: Directions)
 * File: docs/output-v5-faseb/tp-17-v5.js
 * Format: v5.0
 * Fase: B (Kelas 4)
 * Jenis: Biasa — Kluster E
 * Source: flaf-skenario-tp17-v2.txt (Fase B)
 * =============================================================
 */

const TP_B17 = {

  id       : 'tp-b17',
  nomor    : 17,
  kelas    : 4,
  nama     : 'Getting Around: Directions',
  tema     : 'Meminta dan memberikan petunjuk arah menggunakan instruksi navigasi sederhana',
  kluster  : 'E',
  jenis    : 'Biasa',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat memberikan petunjuk arah sederhana menggunakan "turn left," "turn right," dan "go straight."',
    'Peserta didik dapat menggunakan pola "How do I get to…?" untuk meminta petunjuk arah.',
    'Peserta didik dapat menggambar peta sederhana dan menulis petunjuk arah dari satu tempat ke tempat lain.',
  ],

  vocab    : ['school', 'market', 'library', 'hospital', 'turn left', 'turn right', 'go straight', 'How do I get to...?'],

  persiapan: [
    'Peta sederhana di papan — digambar sebelum kelas: grid jalan 3×3 dengan bangunan berlabel (school, market, hospital, library) dan satu titik START',
    'Lembar kerja siswa: 1 per siswa — berisi peta kosong 3×3 dan ruang tulis petunjuk arah (lihat L8)',
    'Papan tulis + spidol untuk turn left/right/go straight di L3 dan scaffold dialog di L6 — jangan hapus sampai L8 selesai',
  ],

  checklist: [
    'Peta sederhana sudah digambar di papan sebelum kelas — dengan label tempat yang jelas dan titik START',
    'Guru menghadap ke arah yang SAMA dengan siswa saat demo turn left/right di L3 — BUKAN menghadap siswa',
    'Scaffold dialog di papan dari L6 TIDAK dihapus sampai L8 selesai',
    'Penilaian formatif sudah dibuka di L8 — minimal 3 siswa sudah dinilai',
    'Referensi ke TP16 ("you can run — but where do you run TO?") sudah disampaikan di L1',
    'Drill fisik di L4 dijalankan dengan siswa berdiri — gerakan nyata lebih efektif dari drill lisan saja',
    'Petunjuk arah yang dibacakan di L9 diverifikasi pada peta di papan — bukan hanya didengarkan',
    'Siswa yang membacakan di L9 berbeda dari yang menjawab di L4',
  ],

  printables: [
    { file: 'tp-b17-crossroad.png',                label: 'Crossroad' },
    { file: 'tp-b17-direction-phrase-card.png',    label: 'Direction Phrase Card' },
    { file: 'tp-b17-directions-map-worksheet.png', label: 'Directions Map Worksheet' },
    { file: 'tp-b17-go-straight.png',              label: 'Go Straight' },
    { file: 'tp-b17-stop.png',                     label: 'Stop' },
    { file: 'tp-b17-traffic-light.png',            label: 'Traffic Light' },
    { file: 'tp-b17-turn-left.png',                label: 'Turn Left' },
    { file: 'tp-b17-turn-right.png',               label: 'Turn Right' },
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
      'L3: Orientasi guru — menghadap ke arah yang sama dengan siswa, BUKAN ke siswa — adalah instruksi paling kritis dalam TP ini. Lakukan orientasi ini sebelum kelas dimulai. Jika guru menghadap siswa dan menunjuk kiri, itu kanan dari perspektif siswa.',
      'L4: Drill fisik dengan siswa berdiri. Jika ruang kelas sempit, siswa bisa lakukan gerakan tangan saja tanpa berdiri. Yang penting adalah respons fisik terhadap perintah arah.',
      'L8: Batasi waktu menggambar: "You have two minutes for the map, then write." Beberapa siswa mungkin menghabiskan terlalu banyak waktu pada Bagian A dan tidak sempat menulis Bagian B.',
      'L9: Verifikasi rute pada peta di papan adalah aktivitas paling bermakna tapi juga paling memakan waktu. Jika waktu mepet, cukup verifikasi satu rute saja.',
    ],
    autonomy: [
      'Peta di papan boleh dibuat semenyenangkan mungkin — tambahkan nama jalan, taman, atau bangunan yang familiar bagi siswa di kota mereka.',
      '"Turn right" ditambahkan sebagai kontras alami dengan "turn left" — tidak mungkin mengajarkan arah tanpa keduanya.',
      'Jika ada siswa yang tidak familiar dengan konsep peta: mulai dari gesture tubuh — "your left hand, your right hand" — sebelum pindah ke peta abstrak.',
      'Lembar kerja Bagian A boleh diganti dengan peta setengah jadi — beberapa jalan sudah digambar, siswa hanya menambahkan bangunan. Ini menghemat waktu dan tetap mempertahankan elemen kreatif.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — jeda 3 detik diam, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'TP17 membawa dimensi baru ke Kluster E — ruang dan navigasi. Siswa yang bisa berlari cepat (TP16) sekarang perlu tahu ke mana mereka berlari. Settling yang tenang memberi ruang untuk transisi ini.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP16 + Chant Arah
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas.

UCAP: "Last time — sports. You can run, you can kick, you can swim."
UCAP: "But — where do you run TO? Where do you go?"
→ Jeda.
UCAP: "Today — we talk about directions. How to get from here to there."

AKSI: Langsung masuk ke chant dengan ketukan meja.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Turn left — turn right — go straight — GO!
How do I get to school — GO!
Left, right, straight — follow the way — GO!
Directions — let's GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal chant: tiga gesture membantu — tangan menunjuk kiri untuk "turn left", tangan menunjuk kanan untuk "turn right", tangan mendorong ke depan untuk "go straight." Tiga gesture ini akan dipakai sepanjang sesi.',
          cue    : 'Jembatan ke TP16 ("you can run — but where do you run TO?") menggunakan kemampuan fisik dari TP16 sebagai titik berangkat ke navigasi ruang. Siswa merasakan bahwa kemampuan bergerak tidak lengkap tanpa tahu arah — teknik "felt need." Ucap sebelum chant.',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — Neighborhood dan Numbers
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk peta di papan (sudah disiapkan sebelum kelas). Tanya kelas.

UCAP: "Look at the map. What places do you see?"
→ Kelas menyebut nama tempat: "School! Market! Hospital! Library!"
UCAP: "School — where do you go every day?"
→ Kelas: "School!"
UCAP: "And market — what do we buy there?"
→ Kelas: "Food! Rice! Vegetables!"

UCAP: "Good. Now — numbers."
UCAP: "How many steps to turn? We count."
UCAP: "Count with me — one, two, three, four, five."
→ Tunjuk jalan di peta satu blok per hitungan.

UCAP: "On this map — the school is two blocks away. The market is three blocks. We use numbers to give directions."`,
          bantuan: 'Jika kelas tidak merespons nama tempat: tunjuk satu bangunan di peta dan tanya "What is this place? Is it a school? A hospital?" Pilihan biner lebih mudah dari produksi bebas.',
          cue    : 'Peta di papan adalah alat utama untuk L3–L8. Semua instruksi arah akan merujuk ke peta ini. Pastikan peta cukup besar untuk dilihat dari seluruh sudut kelas dan semua label tempat tertulis jelas.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 40,

      langkah: [

        // L3 — Introduksi: Turn Left, Turn Right, Go Straight
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo, siswa hanya mendengar dan melihat.

UCAP: "Now — three direction words. Listen and watch."

AKSI: Berdiri di depan kelas menghadap ke arah yang SAMA dengan siswa — bukan menghadap siswa.

UCAP: "Turn left." [putar badan ke kiri, tangan menunjuk kiri]
→ Tulis di papan: TURN LEFT ← [panah kiri]
→ Jeda 3 detik.

UCAP: "Turn right." [putar badan ke kanan, tangan menunjuk kanan]
→ Tulis di papan: TURN RIGHT → [panah kanan]
→ Jeda 3 detik.

UCAP: "Go straight." [jalan ke depan beberapa langkah, tangan mendorong ke depan]
→ Tulis di papan: GO STRAIGHT ↑ [panah atas]
→ Jeda 3 detik.

UCAP: "Three directions. Turn left. Turn right. Go straight."

AKSI: Tunjuk peta di papan. Mulai dari titik START, berikan contoh rute:
UCAP: "From START — go straight two blocks."
→ Tunjuk jalan di peta sambil ucapkan.
UCAP: "Then — turn left."
→ Tunjuk persimpangan.
UCAP: "Go straight one block — and you are at the school."
→ Tunjuk bangunan school.

🗣 TOGETHER
UCAP: "Say it — turn left."
→ Kelas: "Turn left!" [tangan menunjuk kiri]
UCAP: "Turn right."
→ Kelas: "Turn right!" [tangan menunjuk kanan]
UCAP: "Go straight."
→ Kelas: "Go straight!" [tangan mendorong depan]`,
          bantuan: 'Jika siswa mencampur left dan right: minta semua siswa angkat tangan kanan dulu — "Your right hand — up!" — lalu: "Turn right = that direction. Turn left = the other direction." Anchor fisik lebih kuat dari penjelasan verbal.',
          cue    : 'Guru harus menghadap ke arah yang SAMA dengan siswa saat demo "turn left/right" — bukan menghadap siswa. Jika guru menghadap siswa dan menunjuk kiri, itu menjadi kanan dari perspektif siswa. Ini adalah sumber kebingungan terbesar dalam TP arah.',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Drill — Arah dengan Gerakan Fisik
        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER

UCAP: "Good. Now — let's move. Stand up."
→ Siswa berdiri di tempat.

UCAP: "When I say 'turn left' — you turn left. When I say 'turn right' — you turn right. 'Go straight' — you walk in place."

AKSI: Demo satu kali — lakukan gerakan sendiri sambil ucapkan perintah agar siswa melihat model yang jelas.

AKSI: Mulai drill:
UCAP: "Turn left!" → Siswa berputar ke kiri.
UCAP: "Go straight!" → Siswa berjalan di tempat.
UCAP: "Turn right!" → Siswa berputar ke kanan.
UCAP: "Turn left!" → Siswa berputar ke kiri.
UCAP: "Go straight!" → Siswa berjalan di tempat.

AKSI: Percepat — 6–8 perintah dalam 90 detik. Variasikan urutan secara tak terduga.

UCAP: "Sit down."

AKSI: Tunjuk peta di papan. Ucapkan rute, kelas lakukan gerakan tangan:
UCAP: "From school — turn right."
→ Kelas: [tangan menunjuk kanan]
UCAP: "Go straight."
→ Kelas: [tangan mendorong depan]
UCAP: "Turn left — and you are at the market."
→ Kelas: [tangan menunjuk kiri]`,
          diferensiasi: {
            perluSupport: 'cukup melakukan gerakan fisik tanpa mengucapkan kata.',
            sudahBisa   : 'ucapkan perintah berikutnya sebelum guru mengucapkannya — prediksi rute dari peta.',
          },
          bantuan: 'Jika siswa mencampur left dan right saat gerakan fisik: berhenti sejenak, minta semua siswa angkat tangan kanan — "Right hand up — that\'s right. Other side — left." Ulangi dua perintah terakhir. Jangan lanjut sampai mayoritas kelas benar.',
          cue    : 'Drill fisik adalah cara tercepat untuk membangun refleks antara kata dan arah tubuh. Siswa yang merespons dengan gerakan — bukan hanya pikiran — akan lebih mudah mengingat left/right saat menjawab di L7 dan L8.',
          darurat: null,
          energi : '🟠',
        },

        // L5 — Introduksi: How Do I Get To…?
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pelan suara. Tunggu 2 detik sebelum mulai.

👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — how do we ASK for directions?"
UCAP: "Excuse me — how do I get to the school?"
→ Tulis di papan: How do I get to the ___?
→ Jeda 3 detik. Tunjuk "How do I get to" lalu tunjuk "school" di peta.

UCAP: "This is the question. 'How do I get to the school?'"
UCAP: "'How do I get to' — artinya bagaimana cara ke... Ini pertanyaan arah."

AKSI: Berikan dua contoh pertanyaan:
UCAP: "How do I get to the market?"
→ Tulis: How do I get to the market?
UCAP: "How do I get to the hospital?"
→ Tulis: How do I get to the hospital?

UCAP: "Now — your turn. Ask me a question."
→ Tunjuk 2–3 siswa: "Ask me 'how do I get to' somewhere."
→ Siswa: "How do I get to the library?" atau "How do I get to the school?"

🗣 TOGETHER
UCAP: "Say it — 'How do I get to the school?'"
→ Kelas mengulang 2 kali.`,
          bantuan: 'Jika siswa membuat pertanyaan tanpa "How do I get to" — misalnya hanya "Where is the school?": terima dan ucap versi yang diminta — "\'Where is the school?\' is also good! But today we practice: \'How do I get to the school?\'"',
          cue    : '"How do I get to" adalah fixed phrase — ajarkan sebagai satu unit, bukan diurai kata per kata. Siswa tidak perlu tahu mengapa "do I" bukan "I do" — mereka hanya perlu hafal pola frasa ini sebagai satu kesatuan.',
          darurat: null,
          energi : '🟡',
        },

        // L6 — Modeling Dialog Petunjuk Arah Lengkap
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pelan suara. Tunggu 2 detik sebelum mulai.

👂 LISTEN FIRST — guru demo dialog lengkap, memerankan dua posisi.

UCAP: "Now — a full conversation. I will play two people. Watch."

Posisi A (bertanya): "Excuse me — how do I get to the school?"
Posisi B (menjawab): "Sure! From here — go straight two blocks."

→ Tulis di papan dan tunjuk peta secara bersamaan:
A: How do I get to the school?
B: Go straight two blocks.

Posisi B: "Then — turn left."
B: Then, turn left.

Posisi B: "Go straight one block — and you will see the school on your right."
B: Go straight one block. The school is on your right.

Posisi A: "Thank you!"
Posisi B: "You're welcome!"

→ Tulis:
A: Thank you!
B: You're welcome!

UCAP: "Let's read together."
🗣 TOGETHER
→ Guru ucap Posisi A, kelas ucap Posisi B — satu putaran.
→ Tukar: kelas ucap Posisi A, guru ucap Posisi B.

UCAP: "Good. Now — with your partner, you will do the same."`,
          bantuan: 'Jika kelas membaca tidak sinkron: perlambat tempo, tunjuk kata per kata. Prioritaskan kelas memahami urutan Posisi A–B, bukan kecepatan.',
          cue    : 'Dialog di papan tetap ada sampai L8 selesai — ini scaffold terpenting karena siswa perlu model dialog aktif, bukan hanya kalimat tunggal. Kelas perlu melihat bahwa "turn left/right/go straight" adalah isi jawaban Posisi B.',
          darurat: null,
          energi : '🔵',
        },

        // L7 — Pair Practice — Tanya dan Beri Arah [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "One person asks — 'How do I get to the ___?'"
UCAP: "Other person answers — use turn left, turn right, go straight."
UCAP: "Use the map on the board to help."

AKSI: Demo singkat dengan satu siswa sukarelawan:
UCAP: "[nama] — ask me: 'How do I get to the market?'"
→ Siswa: "How do I get to the market?"
UCAP: "Sure — go straight two blocks, then turn right. The market is there."
→ Tunjuk rute di peta.
UCAP: "Your turn."

AKSI: Beri waktu 4 menit — masing-masing 2 menit per arah. Circulate.`,
          diferensiasi: {
            perluSupport: 'cukup menjawab dengan satu instruksi — "Turn left" atau "Go straight." Tidak perlu rute lengkap.',
            sudahBisa   : 'beri rute tiga langkah + sebut nama bangunan di akhir — "The market is on your left."',
          },
          bantuan: 'Jika satu pasang tidak bisa menjawab pertanyaan arah: tunjuk peta di papan, tunjuk titik START, ucap perlahan — "From here — look at the map. How do we go?" Biarkan mereka melihat peta dan menjawab sendiri.',
          cue    : null,
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair practice gaduh dalam 1 menit: hentikan. Ucap "Okay — take your pencil. Let\'s draw and write." Lanjut ke L8 langsung.',
          energi : '🟡',
        },

        // L8 — Writing Individual — Peta dan Petunjuk Arahku
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L6 (L7 dilewati) — ucap: "Okay. Take your pencil. Let's draw and write." Jeda 3 detik. Bagikan lembar kerja.
AKSI: Bagikan lembar kerja (1 per siswa). Dialog di papan dari L6 tetap ada.

Lembar kerja berisi dua bagian:

  BAGIAN A — Draw Your Map:
  [Kotak peta kosong 3×3 — siswa menggambar 2–3 bangunan dan jalan-jalan]
  Label bangunan yang kamu gambar: _________________, _________________, _________________

  BAGIAN B — Write Directions:
  Start: _______________________
  How to get there:
  1. _______________________
  2. _______________________
  3. _______________________
  Destination: _______________________

UCAP: "First — draw your map. Put two or three places on it."
UCAP: "You have two minutes for the map — then write your directions."
UCAP: "Then — write directions from one place to another."
UCAP: "Use turn left, turn right, go straight."

👂 LISTEN FIRST — guru demo mengisi satu bagian di papan:
UCAP: "Watch me. Start: school. Go straight two blocks. Turn right. The market is on your left." [tulis]
UCAP: "Now — your turn. Draw your map first. Then write."

AKSI: Circulate. Bergerak ke meja siswa — jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'cukup gambar peta (Bagian A) dan tulis satu instruksi arah (baris 1 Bagian B). Tiga baris opsional.',
            sudahBisa   : 'setelah selesai, tambah dialog "How do I get to ___?" + jawaban lengkap di bawah peta.',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai. Bagian A (menggambar peta) bukan dekorasi — ini fondasi untuk Bagian B. Siswa yang kesulitan menulis dapat mengekspresikan pemahaman arah secara visual melalui peta.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: minta siswa hanya menggambar peta (Bagian A) dan tulis satu instruksi (baris 1 Bagian B). Langsung ke L10 tanpa melalui L9.',
          energi : '🔵',
        },

        // L9 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil lembar kerja siswa. Pilih 2 hasil — satu yang peta dan petunjuknya konsisten (rute yang ditulis cocok dengan peta yang digambar), satu yang memiliki rute yang menarik atau tidak biasa.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan petunjuk arah mereka (Bagian B).
→ Kelas mendengarkan.

UCAP (sambil tunjuk peta di papan): "Let's follow their directions on our map."
→ Ikuti rute yang dibacakan pada peta papan — tunjuk dengan spidol.
→ "Did we arrive at the right place?"
→ Kelas menjawab yes/no.`,
          bantuan: 'Jika siswa yang diminta membaca menolak: ucap "That\'s okay" dan tunjuk siswa lain.',
          cue    : 'Mengikuti petunjuk arah pada peta di papan adalah verifikasi langsung apakah instruksi yang ditulis siswa logis. Ini membuat L9 terasa seperti "uji nyata" — siswa melihat sendiri apakah arah yang mereka tulis benar-benar sampai ke tujuan.',
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
UCAP: "How do we say 'belok kiri'?"
→ Kelas: "Turn left!" [tangan menunjuk kiri]
UCAP: "Belok kanan?"
→ Kelas: "Turn right!" [tangan menunjuk kanan]
UCAP: "Jalan lurus?"
→ Kelas: "Go straight!" [tangan mendorong depan]
UCAP: "And how do we ask for directions?"
→ Kelas: "How do I get to ___!"

UCAP: "Give me one direction sentence — from school to market."
→ Satu siswa: "Go straight two blocks, then turn right!"

AKSI: Hapus papan satu bagian per satu. Kelas ucapkan yang dihapus.
Urutan hapus: Thank you / You're welcome → dialog B → dialog A → go straight → turn right → turn left`,
          bantuan: null,
          cue    : 'Hapus dialog sebelum kata-kata arah — siswa mengucapkan isi dialog saat dihapus, memperkuat bahwa kata-kata arah adalah isi dari dialog, bukan kosakata yang terpisah.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — Closure Emosional + Teaser TP18
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan.

UCAP: "Before we finish — one question."
UCAP: "What is one place in your neighborhood that you love to go? And how do you get there?"
→ Tunjuk 1–2 siswa yang mau berbagi. Jawaban dalam Bahasa apapun diterima.
→ Bantu framing: "So — 'From my house — go straight, turn left — and I arrive at ___'"

→ Jeda 3 detik.

UCAP: "Directions are not just about maps. They are about knowing where you belong."

UCAP: "Next time — we talk about the past. Yesterday. What happened. What you did."
[Teaser TP18 — Talking About the Past]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : 'Pertanyaan "what place do you love to go — and how do you get there?" menghubungkan kosakata navigasi dengan pengalaman personal. TP17 bukan tentang peta abstrak tapi tentang tempat-tempat nyata dalam hidup siswa.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B17;
