/**
 * =============================================================
 * FLAF — TP C06 (Hobbies and Free Time)
 * File: docs/fase-c-skenario/tp-06-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 5)
 * Kluster: B — Dunia Sehari-hari
 * Jenis: Biasa
 * Source: flaf-c-tp06-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c06 = {

  id        : 'tp-c06',
  nomor     : 6,
  kelas     : 5,
  nama      : 'Hobbies and Free Time',
  tema      : 'Dunia Sehari-hari',
  kluster   : 'B',
  jenis     : 'Biasa',
  deskripsi : '',

  indikator: [
    'Peserta didik dapat mendeskripsikan hobi dan waktu luang dalam minimal tiga kalimat menggunakan pola I like... because...',
    'Peserta didik dapat menggunakan connector because untuk menjelaskan alasan (exposure pertama Fase C).',
    'Peserta didik dapat menggali informasi hobi pasangan melalui pertanyaan lisan dan menuliskannya di Hobby Exchange Table.',
  ],

  vocab: ['hobby', 'free time', 'fun', 'boring', 'tired', 'always', 'usually', 'play', 'read', 'cook', 'watch', 'help'],

  persiapan: [
    'My Hobby Card (satu per siswa): secarik kertas kecil dengan satu baris isian — I like ___ because ___ . Di awal L6, kartu ini diletakkan tertutup (menghadap bawah) di atas meja masing-masing siswa.',
    'Hobby Exchange Table (satu per siswa): tabel dua kolom — My Hobby dan My Partner\'s Hobby — dengan dua baris: What I like · Why. Kolom My Partner\'s Hobby kosong semua. Dibagikan guru tepat sebelum L6 dimulai.',
    'Tampilan text-anchor di papan: tulis sebelum siswa masuk kelas. "I like playing football because it is fun. I always play with my friends." Tetap tampil dari L2 sampai akhir L7. Hapus atau tutup sebelum L8 dimulai.',
  ],

  checklist: [
    'Framing inklusif diucapkan di L2 — "Helping at home, watching TV, playing outside — anything counts" — sebelum siswa mulai mengisi kartu',
    'My Hobby Card terisi sebelum INTERACT dimulai (L4) — kolom My Hobby di Hobby Exchange Table terisi sebelum pair work dimulai (L6)',
    'Hobby Exchange Table kolom My Partner\'s Hobby benar-benar kosong saat dibagikan — tidak boleh diisi tanpa bertanya ke pasangan',
    'Connector "because" muncul dua kali di model guru (L3) — dimodelkan natural dalam dua konteks hobi berbeda, tidak diajarkan sebagai grammar',
    'Text-anchor diturunkan dari papan sebelum OUTPUT dimulai (L8)',
    'Output siswa mencerminkan hobi mereka sendiri — bukan replikasi text-anchor football',
    'Jika "because" muncul dalam tulisan siswa dengan struktur tidak sempurna — guru angguk dan tidak mengoreksi (L9)',
    'Guru sudah mendekati minimal 2–3 siswa barisan belakang di L8 atau L9',
  ],

  printables: [
    { file: 'tp-c06-reading.png', label: 'Reading' },
    { file: 'tp-c06-playing-football.png', label: 'Playing Football' },
    { file: 'tp-c06-cooking.png', label: 'Cooking' },
    { file: 'tp-c06-watching-tv.png', label: 'Watching TV' },
    { file: 'tp-c06-helping-home.png', label: 'Helping at Home' },
    { file: 'tp-c06-hobby-card.png', label: 'My Hobby Card' },
    { file: 'tp-c06-exchange-table.png', label: 'Hobby Exchange Table' },
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🟡',
    'L2 🟡',
    'L3 🟡',
    'L4 🟡',
    'L5 🟠',
    'L6 🟠',
    'L7 🟡',
    'L8 🔵',
    'L9 🔵',
    'L10 🟡',
    'L11 🔵',
  ],

  catatan: {
    risiko: [
      'L4: Siswa yang tidak tahu nama hobi mereka dalam bahasa Inggris bisa memperlambat seluruh kelas. Daftar opsi (reading, playing, cooking, watching, helping, drawing, singing) sebaiknya sudah ditulis di papan sejak sebelum L4 dimulai.',
      'L6: Pastikan kolom My Hobby terisi sebelum pair work dimulai. Siswa yang kolomnya masih kosong tidak punya informasi untuk dibagikan — dekati mereka sebelum demonstrasi selesai jika terlihat belum siap.',
      'L8–L9 (penanganan because tidak sempurna): Jika siswa menulis "because" dengan struktur tidak sempurna — contoh: "I like football because fun" atau "I like reading because relax" — biarkan. Jangan koreksi grammar di L8 atau L9. Ini adalah exposure pertama "because" di Fase C.',
    ],
    autonomy: [
      'Hobi dalam model guru (L3) harus tentang kegiatan nyata guru — bukan contoh generik. Semakin personal model guru, semakin siswa merasa aman mengungkapkan hobi mereka yang sesungguhnya.',
      'Pertanyaan "Why do you like it?" di L5 dan L6 boleh diucapkan berulang kali oleh guru saat circulate — ini cara natural untuk memunculkan "because" tanpa mengajarkannya.',
      'Boleh memperpanjang INTERACT (L6) sampai 8 menit jika pertukaran terasa hidup dan kelas kondusif.',
      'Boleh skip L10 jika kelas menunjukkan kelelahan setelah writing — cukup tutup dengan L11.',
      'Boleh menambahkan kata sifat lokal dalam daftar di L4 jika ada hobi khas daerah yang relevan untuk kelas.',
    ],
  },

  text_anchor    : 'I like playing football because it is fun. I always play with my friends.',
  connector_aktif: 'because — pertama kali muncul di Fase C via text-anchor dan model guru (INPUT L3); exposure only di TP06; fokus produksi di TP07 dan TP17',
  recycle_fase_b : [
    'I like... (TP13 Fase B — pola dasar)',
    'I like... because... (TP13 Fase B — pola lengkap, pertama kali produktif di Fase C)',
    'I usually... / always (TP06 Fase B — adverb frekuensi)',
  ],

  breakpoints: [],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Papan sudah bertuliskan text-anchor.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut menjawab.
UCAP: "Today we talk about what you love to do."
→ Tidak perlu diterjemahkan. Lanjut ke L1.`,
    bantuan: null,
    cue    : null,
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 8,

      langkah: [

        {
          id              : 'l1',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru tidak menunjukkan text-anchor TP05 — cukup bertanya dari ingatan siswa.
UCAP: "Last time — your week. Your routines."
→ Jeda.
UCAP: "Who remembers one sentence about what they do every day?"
→ Tunggu 2–3 siswa menyebut kalimat dari tulisan atau text-anchor TP05.
→ Guru tidak mengoreksi — angguk dan terima apapun yang muncul.

AKSI: Setelah 2–3 respons, guru bridge ke topik hari ini.
UCAP: "Good. Those are your routines — things you do every week."
→ Jeda singkat.
UCAP: "Today — something different. Not your schedule. Your free time."
UCAP: "What do you like to do when school is over?"`,
          bantuan         : 'Jika tidak ada yang merespons dalam 5 detik: ucap satu kalimat dari text-anchor TP05 — "On Monday I go to school." — lalu tanya "Who has a sentence like this?" Terima kalimat pertama yang muncul dan lanjut.',
          cue             : 'Reactivation mengaktifkan pola "On [day] I..." atau "Then I..." dari TP05 sebelum topik baru diperkenalkan. Bridge dari rutinitas ke waktu luang harus terasa natural — keduanya tentang "apa yang kamu lakukan", hanya konteksnya yang berbeda.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : null,
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l2',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru menunjuk text-anchor di papan.
UCAP: "Look at the board."
→ Baca text-anchor perlahan, tunjuk setiap baris.
👂 LISTEN FIRST — siswa mendengarkan dan membaca papan.

"I like playing football because it is fun." [tunjuk baris 1]
"I always play with my friends." [tunjuk baris 2]

UCAP: "This is one person's hobby. Football."
→ Jeda.
UCAP: "But today — I want to know your hobby. Not football. Yours."
→ Jeda. Ucapkan perlahan.
UCAP: "A hobby is something you like to do in your free time."
UCAP: "Helping at home, watching TV, playing outside — anything counts."
UCAP: "Whatever you enjoy — that is a hobby."`,
          bantuan         : 'Jika siswa bertanya "boleh hobi apa saja?": angguk dan ucap "Yes — anything you enjoy in your free time." Tidak perlu penjelasan lebih panjang.',
          cue             : 'Framing inklusif ini harus diucapkan sebelum siswa mulai mengisi kartu. Tujuannya: siswa yang tidak suka olahraga, atau yang menghabiskan waktu luang dengan membantu keluarga, merasa bahwa pengalaman mereka valid. Jangan ulangi "football" sebagai referensi dominan setelah layar ini.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : null,
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 37,

      langkah: [

        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas. Text-anchor masih di papan sebagai referensi.
UCAP: "Now, my turn. I will tell you about my hobbies."

UCAP: "I like [hobi nyata guru] because [alasan nyata]."
→ Contoh: "I like reading because it is relaxing."
→ Jeda singkat.
UCAP: "I always [kegiatan terkait hobi] when I have free time."
→ Contoh: "I always read before I sleep."

UCAP: "I also like [hobi kedua] because [alasan kedua]."
→ Contoh: "I also like cooking because I like making food for my family."
→ Jeda setelah kalimat ini — tidak perlu komentar tentang 'because'.

AKSI: Kembali ke text-anchor di papan.
🗣 TOGETHER — guru dan siswa baca text-anchor bersama.
UCAP: "Read with me. Ready?"
→ Baca bersama 1×. Cukup.`,
          bantuan         : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris sambil membaca — siswa biasanya ikut setelah kalimat kedua.',
          cue             : 'Connector "because" muncul dua kali dalam model guru — sekali untuk hobi pertama, sekali untuk hobi kedua. Ini exposure yang cukup sebelum siswa diminta memproduksinya sendiri. Jangan sebut kata "because" secara terpisah atau memberi komentar tentang fungsinya.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l4',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Bagikan My Hobby Card yang sudah dicetak, atau minta siswa menyalin baris isian dari papan ke kertas kecil.
→ Jika menyalin: tulis di papan di bawah text-anchor —
   I like ___ because ___ .

UCAP: "Think about your free time. What do you like to do?"
UCAP: "Write one sentence — what you like and why."
UCAP: "Remember — any hobby counts. Helping at home, watching TV, reading, playing."
UCAP: "Three minutes. Go."
→ Guru diam — biarkan siswa berpikir dan menulis.

AKSI: Setelah 3 menit, tunjuk 2–3 siswa secara acak — bukan yang tunjuk tangan.
UCAP: "Read your sentence. What do you like?"
→ Guru tidak mengoreksi. Angguk dan lanjut.`,
          bantuan         : [
            'Jika siswa tidak tahu kata dalam bahasa Inggris untuk hobi mereka: ucap beberapa opsi — "reading, playing, cooking, watching, helping, drawing, singing" — dan minta siswa pilih yang paling dekat.',
            'Jika siswa tidak tahu alasannya dalam bahasa Inggris: ucap beberapa opsi — "because it is fun, because it is relaxing, because I love it, because it makes me happy" — biarkan siswa memilih sendiri.',
          ],
          cue             : 'My Hobby Card ini digunakan di L6 (INTERACT) sebagai sumber informasi. Pastikan setiap siswa sudah mengisi minimal kata hobi mereka (bagian "I like ___") sebelum lanjut ke L5 atau L6. Bagian "because ___" boleh belum terisi — akan dilengkapi saat L6.',
          darurat         : '⚠ DARURAT — ada siswa yang masih belum mengisi apapun setelah 3 menit:\nDekati, tunjuk bagian "I like ___", tanya dalam bahasa Indonesia jika perlu — "Sukanya ngapain kalau pulang sekolah?" Bantu siswa isi satu kata saja. Tidak perlu tunggu kalimat terisi semua.',
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l5',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Minta satu siswa sukarela berdiri.
UCAP: "What do you like to do in your free time? One sentence."
→ Siswa menjawab: "I like [hobi] because [alasan]." atau hanya "I like [hobi]."
→ Guru angguk, tidak mengoreksi.
UCAP: "Why? Tell us."
→ Siswa menjawab dengan alasan — 'because' muncul natural dari pertanyaan ini.

AKSI: Lakukan dengan 3–4 siswa dari barisan berbeda — cepat.
→ Setelah tiap siswa menjawab: guru tunjuk kelas — "Who also likes that? Raise your hand."
→ Ini menciptakan resonansi natural dan memberi tahu siswa bahwa hobi yang "tidak biasa" pun diakui kelas.`,
          bantuan         : 'Jika siswa yang berdiri hanya menyebut hobi tanpa alasan: guru langsung tanya "Why do you like it?" sambil angguk — isyarat bahwa ada lanjutannya.',
          cue             : 'Pertanyaan "Why?" memancing "because" secara natural — guru tidak menyebut kata "because", hanya bertanya alasan. Jika siswa menjawab tanpa "because" ("because fun" atau hanya "fun") — terima saja dan lanjut.',
          darurat         : null,
          energi          : '🟠',
          energy_level    : 'active',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 10 menit sebelum INTERACT',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Bagikan Hobby Exchange Table — satu per siswa. Kolom My Partner's Hobby kosong semua.
UCAP: "Fill in your column first — My Hobby. Use your card."
→ Siswa mengisi kolom My Hobby dari My Hobby Card. ~1 menit.

UCAP: "Your partner's column is empty. You need to ask."

AKSI: Demonstrasi dengan satu siswa di depan — maksimal 90 detik.
👂 LISTEN FIRST — kelas perhatikan dulu.
Guru tanya ke satu siswa: "What do you like to do in your free time?" → siswa jawab → guru isi baris What I like di kolom My Partner.
"Why do you like it?" → isi baris Why.
Tunjukkan tabel yang sudah terisi kolom My Partner.
UCAP: "Now your turn."

AKSI: Siswa bekerja berpasangan.
→ My Hobby Card dibalik (menghadap bawah) — kolom My Hobby di tabel sudah terisi.
→ Siswa A bertanya ke B, isi kolom My Partner's Hobby.
→ Kemudian B bertanya ke A.
→ Setelah kedua arah selesai: tanya pasangan — "Do you have a similar hobby — or completely different?"
→ Waktu total: 5–6 menit untuk dua arah.

AKSI: Guru circulate — prioritaskan barisan belakang dan pojok kelas.`,
          bantuan         : [
            'Jika pasangan tidak tahu harus bertanya apa: tunjuk baris pertama di tabel — "What I like" — dan ucap "What do you like to do?" Tunggu siswa meniru pertanyaan itu ke pasangannya.',
            'Jika siswa mengisi kolom My Partner tanpa bertanya (menebak sendiri): tutup tabel mereka dengan tangan, ucap "Ask first. Then write." Tunjuk ke arah pasangannya.',
          ],
          cue             : 'Pertanyaan "Why do you like it?" adalah cara paling natural untuk memunculkan "because" dalam percakapan. Guru tidak menyebut kata "because" dalam instruksi pair work — cukup demonstrasikan di demo di atas.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas dengan tepukan tangan.
2. Demo ulang dengan 1 pasangan di depan — guru menjadi pasangannya.
3. Sederhanakan: cukup 2 pertanyaan — "What do you like?" dan "Why?"
4. Restart pair work — batasi 60 detik.`,
          energi          : '🟠',
          energy_level    : 'active',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INTERACT',
          assessment_overlay: {
            recommended: true,
            priority   : 'belum_dinilai',
          },
          interact_contract: {
            gap_type         : 'information',
            artifact_required: false,
            artifact_type    : null,
            collapse_signal  : 'pair diam > 90 detik',
          },
          artifact: null,
        },

        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Setelah pair work selesai, guru tunjuk 2–3 pasangan.
UCAP: "Tell me — what is your partner's hobby? Is it similar to yours or different?"
→ Siswa menjawab berdasarkan tabel yang sudah diisi.
→ Contoh: "My partner likes cooking. I like reading. We are different." atau "We both like watching TV."

AKSI: Guru tidak mengoreksi grammar. Angguk dan lanjut.
UCAP (opsional): "Did anyone find a hobby they have never heard of before?"
→ Ini membuka ruang bagi siswa dengan hobi yang tidak biasa untuk berbagi tanpa malu.`,
          bantuan         : 'Jika siswa tidak bisa merangkum: tunjuk tabel mereka dan ucap "Your partner — what do they like? Just read from the table." Minta siswa membaca baris pertama saja dulu.',
          cue             : 'Pertanyaan "Did anyone find a hobby they have never heard of?" memberi nilai pada keunikan — siswa yang hobinya berbeda dari teman-temannya merasa diapresiasi, bukan aneh.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 12 menit',
          blok            : 'INTERACT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Guru hapus atau tutup text-anchor dari papan.
UCAP: "Now — write about your hobby."
UCAP: "Not the football from the board. Your hobby."
UCAP: "At least three sentences. You can use your Hobby Card to start."
→ My Hobby Card boleh dilihat kembali sekarang.

AKSI: Siswa menulis secara individual.
→ Waktu: 8–10 menit. Guru tidak mendiktekan kalimat apapun.
→ Beri waktu start 2–3 menit sebelum circulate.
→ Prioritaskan barisan belakang dan pojok kelas.
→ Perhatikan: apakah ada siswa yang menyalin kalimat text-anchor persis? Jika ya, tepuk bahu dan tanya: "Is this your hobby or the example?"`,
          bantuan         : 'Jika siswa freeze (pensil di tangan tapi tidak menulis): ucap kalimat pertama dengan informasi siswa — "What do you like? Write: I like..." Tunggu siswa menulis satu kalimat. Tinggalkan setelah itu.',
          cue             : 'Text-anchor sudah diturunkan. Setiap tulisan harus berbeda karena setiap siswa punya hobi berbeda. Jika "because" muncul dalam tulisan siswa — dengan struktur sempurna maupun tidak sempurna — ini adalah tanda connector sedang bekerja.',
          darurat         : '⚠ DARURAT — waktu ≤ 5 menit dan sebagian besar siswa baru menulis 1 kalimat:\nUcap: "Two sentences — that is enough for today." Turunkan target dan lanjut ke L9.',
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'OUTPUT',
          assessment_overlay: {
            recommended: true,
            priority   : 'barisan_belakang',
          },
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l9',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Setelah 8 menit, guru memberi sinyal tanpa menghentikan siswa yang masih menulis.
UCAP: "Two more minutes. Read your sentences. Can you add one more?"

Diferensiasi:
- Perlu support: guru dekati dan ucap panduan konkret — "You wrote what you like. Can you write when you do it? I always [hobi] on [hari/waktu]." — siswa tinggal melanjutkan dari sana.
- Sudah bisa: tambahkan kalimat kedua yang menggunakan 'because' untuk alasan berbeda — contoh: "I also like [hobi lain] because [alasan]." — atau tambahkan kalimat tentang siapa yang biasanya bersama mereka: "I always [hobi] with [orang]."

Catatan penanganan produksi: Jika 'because' muncul dalam tulisan siswa dengan struktur tidak sempurna — contoh: "I like football because fun" atau "I like reading because relax" — angguk dan tidak perlu mengoreksi.

AKSI: Guru circulate — lihat tulisan siswa tanpa mengoreksi grammar.
→ Jika 'because' muncul secara spontan — angguk.
→ Jika 'because' tidak muncul — tidak perlu dipaksakan. Fokus produksi 'because' ada di TP07.`,
          bantuan         : 'Jika siswa sudah selesai tapi hanya menulis 2 kalimat: tanya "Who do you usually do this with? Can you write: I always [hobi] with...?" — tunggu siswa menulis kalimat tambahan sendiri tanpa dikte.',
          cue             : 'Yang diperiksa di sini bukan kelengkapan grammar — tapi apakah tulisan mencerminkan hobi nyata siswa. Kalimat "I like helping my mother cook because she looks happy" lebih berharga daripada kalimat sempurna yang tidak bermakna.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'guru dekati dan ucap panduan konkret — "You wrote what you like. Can you write when you do it? I always [hobi] on [hari/waktu]." — siswa tinggal melanjutkan dari sana.',
            sudahBisa   : 'tambahkan kalimat kedua yang menggunakan "because" untuk alasan berbeda — contoh: "I also like [hobi lain] because [alasan]." — atau tambahkan kalimat tentang siapa yang biasanya bersama mereka.',
          },
          flex            : false,
          flex_kondisi    : null,
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 9,

      langkah: [

        {
          id              : 'l10',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru minta 2–3 siswa sukarela membacakan 1–2 kalimat dari tulisan mereka.
UCAP: "Who wants to share? One or two sentences — from your seat is fine."
→ Terima siapapun yang mau. Tidak perlu berdiri di depan kelas.

AKSI: Setelah setiap siswa berbagi, guru bertanya ke kelas:
UCAP: "Who also likes [hobi yang baru disebut]? Raise your hand."
→ Tangan naik — resonansi natural yang tidak memaksa siapapun berbicara.`,
          bantuan         : 'Jika tidak ada yang mau sukarela: tunjuk siswa yang tadi paling aktif di INTERACT — mereka sudah dalam mode berbicara dan lebih siap.',
          cue             : 'Terima dengan nada yang sama antuk siswa yang menyebut hobi "biasa" (bermain bola) dan "tidak biasa" (membantu di sawah, menonton sinetron, menjahit). Nada guru menentukan apakah siswa lain merasa semua hobi setara nilainya.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 5 menit',
          blok            : null,
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l11',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas.
UCAP: "Today you talked about what you love to do. In English."
→ Jeda.
UCAP: "What you like. Why you like it. Who you do it with."
→ Jeda.
UCAP: "That is your hobby. Keep it."

AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time — we talk about food."
→ Jeda singkat.
UCAP: "What you eat. And why."
→ Tidak perlu penjelasan lebih — biarkan siswa memikirkan sendiri apa artinya.

UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : 'Preview "What you eat. And why." adalah undangan natural ke "because" dan "but" di TP07 — tanpa menyebut kata connector apapun. "And why" juga memperkuat "because" yang sudah dikenalkan hari ini.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : null,
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

      ],
    },

  ],

};

export default tp_c06;
