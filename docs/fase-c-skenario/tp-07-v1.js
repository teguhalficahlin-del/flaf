/**
 * =============================================================
 * FLAF — TP C07 (Food I Eat and Why)
 * File: docs/fase-c-skenario/tp-07-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 5)
 * Kluster: B — Dunia Sehari-hari
 * Jenis: Biasa
 * Source: flaf-c-tp07-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c07 = {

  id        : 'tp-c07',
  nomor     : 7,
  kelas     : 5,
  nama      : 'Food I Eat and Why',
  tema      : 'Dunia Sehari-hari',
  kluster   : 'B',
  jenis     : 'Biasa',
  deskripsi : '',

  indikator: [
    'Peserta didik dapat mendeskripsikan makanan sehari-hari dalam minimal tiga kalimat menggunakan pola I eat... because... / But I also like...',
    'Peserta didik dapat menggunakan connector because (fokus produksi pertama) dan but (fokus produksi pertama) dalam kalimat tentang makanan.',
    'Peserta didik dapat menggali informasi makanan pasangan melalui pertanyaan lisan dan menuliskannya di Food Exchange Table.',
  ],

  vocab: ['rice', 'noodles', 'corn', 'bread', 'vegetables', 'fish', 'chicken', 'energy', 'delicious', 'spicy', 'sweet'],

  persiapan: [
    'My Food Card (satu per siswa): secarik kertas kecil dengan dua bagian — (1) I eat ___ every day because ___ . (2) But I also like ___ . Di awal L6, kartu ini diletakkan tertutup (menghadap bawah) di atas meja masing-masing siswa.',
    'Food Exchange Table (satu per siswa): tabel dua kolom — My Food dan My Partner\'s Food — dengan tiga baris: What they eat · Why · But also like. Kolom My Partner\'s Food kosong semua. Dibagikan guru tepat sebelum L6 dimulai.',
    'Tampilan text-anchor di papan: tulis sebelum siswa masuk kelas. "I eat rice every day because it gives me energy. But I also like noodles." Tetap tampil dari L2 sampai akhir L7. Hapus atau tutup sebelum L8 dimulai.',
  ],

  checklist: [
    'Framing inklusif diucapkan di L2 sebelum siswa mulai mengisi kartu — "Whatever you eat — rice, corn, bread, noodles, anything — that is your food. No food is wrong here."',
    'Connector 'because' muncul SEBELUM 'but' di model guru L3 — dua kalimat terpisah, tidak digabungkan',
    'My Food Card terisi sebelum INTERACT dimulai (L4) — kolom My Food di Food Exchange Table terisi sebelum pair work dimulai (L6)',
    'Food Exchange Table kolom My Partner\'s Food benar-benar kosong saat dibagikan — tidak boleh diisi tanpa bertanya ke pasangan',
    'Text-anchor diturunkan dari papan sebelum OUTPUT dimulai (L8)',
    'Output siswa mencerminkan makanan mereka sendiri — bukan replikasi text-anchor rice dan noodles',
    'Jika 'because' atau 'but' muncul dalam tulisan siswa dengan struktur tidak sempurna — angguk, tidak koreksi (L9)',
    'Guru sudah mendekati minimal 2–3 siswa barisan belakang di L8 atau L9',
  ],

  printables: [],

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
      'L4: Siswa yang tidak tahu nama makanan dalam bahasa Inggris bisa memperlambat seluruh kelas. Daftar opsi (rice, corn, bread, noodles, fish, vegetables, chicken) harus ditulis di papan sejak sebelum L4 dimulai — nama makanan lokal tidak harus diterjemahkan.',
      'L6: Food Exchange Table punya tiga baris — lebih banyak dari tabel di TP05 dan TP06. Demo di awal L6 harus mencakup ketiga pertanyaan dengan cepat (maksimal 90 detik total). Jika tiga baris terasa berat: sederhanakan tabel menjadi 2 baris (What they eat + But also like).',
      'L8–L9 (penanganan connector tidak sempurna): Jika siswa menulis 'because' atau 'but' dengan struktur tidak sempurna — biarkan. Prinsip yang sama berlaku seperti past tense di TP05 dan 'because' di TP06.',
    ],
    autonomy: [
      'Makanan dalam model guru (L3) harus tentang makanan nyata yang guru makan — semakin spesifik ("I eat rice with tempe goreng every day"), semakin siswa merasa aman menulis tentang makanan sehari-hari mereka yang sesungguhnya.',
      'Food Exchange Table boleh disederhanakan menjadi 2 baris (What they eat + But also like) jika 3 baris terasa terlalu berat untuk sesi ini.',
      'Pertanyaan "But what else do you like?" di L5 dan L6 boleh diulang oleh guru saat circulate — ini cara natural untuk memunculkan 'but' tanpa mengajarkannya.',
      'Boleh memperpanjang INTERACT (L6) sampai 8 menit jika pertukaran terasa hidup dan kelas kondusif.',
      'Boleh skip L10 jika kelas menunjukkan kelelahan setelah writing — cukup tutup dengan L11.',
    ],
  },

  text_anchor    : 'I eat rice every day because it gives me energy. But I also like noodles.',
  connector_aktif: 'because — fokus produksi pertama (exposure TP06, produksi mandiri di TP07) · but — fokus produksi (exposure TP02, pertama kali dipraktikkan dalam produksi di TP07); keduanya hadir di text-anchor dan model guru INPUT L3 — because tampil dulu, baru but',
  recycle_fase_b : [
    'They eat... / I eat... (TP09 Fase B)',
    'I like... (TP13 Fase B)',
    'every day / always / usually (TP06 Fase B — adverb frekuensi)',
  ],

  breakpoints: [],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Papan sudah bertuliskan text-anchor.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut menjawab.
UCAP: "Today we talk about food."
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
          teks            : `AKSI: Guru tidak menunjukkan text-anchor TP06 — cukup bertanya dari ingatan siswa.
UCAP: "Last time — your hobbies. What you like to do in your free time."
→ Jeda.
UCAP: "Who remembers one sentence about their hobby?"
→ Tunggu 2–3 siswa menyebut kalimat dari tulisan atau text-anchor TP06.
→ Guru tidak mengoreksi — angguk dan terima apapun yang muncul.

AKSI: Setelah 2–3 respons, guru bridge ke topik hari ini.
UCAP: "Good. Today — something different."
→ Jeda singkat.
UCAP: "Not what you do in your free time. What you eat."
UCAP: "Every day — what is on your plate?"`,
          bantuan         : 'Jika tidak ada yang merespons dalam 5 detik: ucap satu kalimat dari text-anchor TP06 — "I like playing football because it is fun." — lalu tanya "Who has a sentence like this about their hobby?" Terima kalimat pertama yang muncul dan lanjut.',
          cue             : 'Reactivation mengaktifkan pola "I like... because..." dari TP06 sebelum text-anchor baru diperkenalkan. Bridge dari hobi ke makanan terasa natural — keduanya tentang "apa yang kamu sukai dan kenapa".',
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

"I eat rice every day because it gives me energy." [tunjuk baris 1]
"But I also like noodles." [tunjuk baris 2]

UCAP: "This is one person's food. Rice. And noodles."
→ Jeda.
UCAP: "But today — I want to know your food. Not rice and noodles. Yours."
→ Jeda. Ucapkan perlahan — beri waktu siswa memproses.
UCAP: "Whatever you eat — rice, corn, bread, noodles, anything — that is your food."
UCAP: "No food is wrong here."`,
          bantuan         : 'Jika siswa bertanya "boleh makanan apa saja?": angguk dan ucap "Yes — anything you eat. Whatever is on your plate at home." Tidak perlu penjelasan lebih panjang.',
          cue             : 'Framing inklusif ini harus diucapkan sebelum siswa mulai mengisi kartu. TP07 membawa sensitivitas yang tidak ada di TP sebelumnya — tidak semua siswa punya kebebasan memilih makanan, dan tidak semua makanan sehari-hari terasa "layak" untuk disebut di kelas. "No food is wrong here" adalah izin eksplisit yang perlu diberikan.',
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
UCAP: "Now, my turn. I will tell you about what I eat."

UCAP: "I eat [makanan nyata] every day because [alasan nyata]."
→ Contoh: "I eat rice every day because it is easy to cook."
→ Jeda singkat.
UCAP: "But I also like [makanan lain yang nyata]."
→ Contoh: "But I also like bakso. I eat bakso on weekends."
→ Jeda setelah kalimat ini.

UCAP: "Sometimes — on busy days — I eat [makanan lain] because [alasan nyata]."
→ Contoh: "Sometimes I eat bread because it is fast."
UCAP: "But my favorite is still [makanan favorit]."
→ Contoh: "But my favorite is still rice with tempeh."

AKSI: Kembali ke text-anchor di papan.
🗣 TOGETHER — guru dan siswa baca text-anchor bersama.
UCAP: "Read with me. Ready?"
→ Baca bersama 1×. Cukup.`,
          bantuan         : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris sambil membaca — siswa biasanya ikut setelah kalimat kedua.',
          cue             : 'Urutan wajib — 'because' muncul SEBELUM 'but' dalam model guru. 'because' lebih familiar (sudah di-expose di TP06), sehingga ditampilkan dulu sebagai fondasi. 'but' masuk sebagai kontras yang natural setelahnya. Keduanya dalam kalimat terpisah — tidak digabungkan dalam satu kalimat panjang.',
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
          teks            : `AKSI: Bagikan My Food Card yang sudah dicetak, atau minta siswa menyalin baris isian dari papan ke kertas kecil.
→ Jika menyalin: tulis di papan di bawah text-anchor —
   I eat ___ every day because ___ .
   But I also like ___ .
→ Tulis juga daftar opsi di pojok papan: rice, corn, bread, noodles, fish, vegetables, chicken

UCAP: "Think about your food. What do you eat most days?"
UCAP: "And — what else do you like, even if you don't eat it every day?"
UCAP: "Remember — any food counts. Whatever you eat at home."
UCAP: "Three minutes. Go."
→ Guru diam — biarkan siswa berpikir dan menulis.

AKSI: Setelah 3 menit, tunjuk 2–3 siswa secara acak — bukan yang tunjuk tangan.
UCAP: "Read one sentence. What do you eat?"
→ Guru tidak mengoreksi. Angguk dan lanjut.`,
          bantuan         : [
            'Jika siswa tidak tahu nama makanan dalam bahasa Inggris: tunjuk daftar di pojok papan dan minta siswa pilih yang paling dekat. Jika makanan mereka tidak ada di daftar: ucap "Just write the name — if it sounds the same, that is fine."',
            'Jika siswa tidak tahu alasan dalam bahasa Inggris: ucap beberapa opsi — "because it is delicious, because it is easy, because my mother cooks it, because I like the taste" — biarkan siswa memilih sendiri.',
          ],
          cue             : 'My Food Card ini digunakan di L6 (INTERACT) sebagai sumber informasi. Pastikan setiap siswa sudah mengisi minimal bagian pertama (I eat ___) sebelum lanjut ke L5 atau L6.',
          darurat         : '⚠ DARURAT — ada siswa yang masih belum mengisi apapun setelah 3 menit:\nDekati, tunjuk bagian "I eat ___", tanya dalam bahasa Indonesia jika perlu — "Sehari-harinya makan apa?" Bantu siswa isi satu kata saja. Tidak perlu tunggu kartu terisi semua.',
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
UCAP: "What do you eat every day? One sentence."
→ Siswa menjawab: "I eat [makanan] every day because [alasan]." atau hanya "I eat [makanan] every day."
→ Guru angguk, tidak mengoreksi.
UCAP: "But what else do you like?"
→ Siswa menjawab dengan makanan lain — 'but' muncul natural dari pertanyaan ini.

AKSI: Lakukan dengan 3–4 siswa dari barisan berbeda — cepat.
→ Setelah tiap siswa menjawab: guru tunjuk kelas — "Who also eats that? Raise your hand."
→ Resonansi natural — siswa yang punya makanan sama mengangkat tangan tanpa harus berbicara.`,
          bantuan         : 'Jika siswa yang berdiri hanya menyebut makanan pertama tanpa lanjutan: guru langsung tanya "But what else?" sambil angguk — ini isyarat bahwa ada kontras yang ditunggu.',
          cue             : 'Pertanyaan "But what else do you like?" adalah cara paling natural untuk memunculkan 'but' dalam percakapan. Guru tidak menyebut kata "but" dalam pertanyaan — "but" muncul dari konteks kontras yang dibangun oleh pertanyaan itu sendiri.',
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
          teks            : `AKSI: Bagikan Food Exchange Table — satu per siswa. Kolom My Partner's Food kosong semua.
UCAP: "Fill in your column first — My Food. Use your card."
→ Siswa mengisi kolom My Food dari My Food Card. ~1 menit.

UCAP: "Your partner's column is empty. You need to ask."

AKSI: Demonstrasi dengan satu siswa di depan — maksimal 90 detik.
👂 LISTEN FIRST — kelas perhatikan dulu.
Guru tanya ke satu siswa: "What do you eat every day?" → siswa jawab → guru isi baris What they eat di kolom My Partner.
"Why?" → isi baris Why.
"But what else do you like?" → isi baris But also like.
Tunjukkan tabel yang sudah terisi kolom My Partner.
UCAP: "Three questions. Now your turn."

AKSI: Siswa bekerja berpasangan.
→ My Food Card dibalik (menghadap bawah) — kolom My Food di tabel sudah terisi.
→ Siswa A bertanya ke B, isi kolom My Partner's Food.
→ Kemudian B bertanya ke A.
→ Setelah kedua arah selesai: tanya pasangan — "Is your food similar or different?"
→ Waktu total: 5–6 menit untuk dua arah.

AKSI: Guru circulate — prioritaskan barisan belakang dan pojok kelas.`,
          bantuan         : [
            'Jika pasangan tidak tahu harus bertanya apa: tunjuk baris pertama di tabel — "What they eat" — dan ucap "What do you eat every day?" Tunggu siswa meniru pertanyaan itu ke pasangannya.',
            'Jika siswa mengisi kolom My Partner tanpa bertanya: tutup tabel mereka dengan tangan, ucap "Ask first. Then write." Tunjuk ke arah pasangannya.',
          ],
          cue             : 'Pertanyaan "Why?" memunculkan 'because' natural — pertanyaan "But what else do you like?" memunculkan 'but' natural. Guru tidak perlu menyebut nama connector apapun dalam instruksi pair work.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas dengan tepukan tangan.
2. Demo ulang dengan 1 pasangan di depan — guru menjadi pasangannya.
3. Sederhanakan: cukup 2 pertanyaan — "What do you eat?" dan "But what else do you like?"
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
UCAP: "Tell me — what is the most interesting difference between your food and your partner's?"
→ Siswa menjawab berdasarkan tabel yang sudah diisi.
→ Contoh: "I eat rice every day. But my partner eats corn." atau "We both eat rice but we like different things."

AKSI: Guru tidak mengoreksi grammar. Angguk dan lanjut.
UCAP (opsional): "Interesting. Did anyone find a food they had never heard of?"
→ Ini memberi nilai pada keberagaman makanan — siswa dengan makanan "tidak biasa" merasa diapresiasi.`,
          bantuan         : 'Jika siswa tidak bisa merangkum: tunjuk tabel mereka dan ucap "Your food and your partner\'s — is this the same?" Minta siswa bandingkan baris pertama saja dulu.',
          cue             : 'Pertanyaan "most interesting difference" mendorong siswa untuk menemukan kontras yang bermakna — dan kontras ini adalah konteks alami untuk 'but'. Jika 'but' muncul spontan dalam jawaban siswa, itu bukti connector bekerja.',
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
UCAP: "Now — write about your food."
UCAP: "Not the rice and noodles from the board. Your food."
UCAP: "At least three sentences. You can use your Food Card to start."
→ My Food Card boleh dilihat kembali sekarang.

AKSI: Siswa menulis secara individual.
→ Waktu: 8–10 menit. Guru tidak mendiktekan kalimat apapun.
→ Beri waktu start 2–3 menit sebelum circulate.
→ Prioritaskan barisan belakang dan pojok kelas.
→ Perhatikan: apakah ada siswa yang menyalin text-anchor persis? Jika ya, tepuk bahu dan tanya: "Is this your food or the example?"`,
          bantuan         : 'Jika siswa freeze (pensil di tangan tapi tidak menulis): ucap kalimat pertama dengan informasi siswa — "What do you eat? Write: I eat..." Tunggu siswa menulis satu kalimat. Tinggalkan setelah itu.',
          cue             : 'Text-anchor sudah diturunkan. Setiap tulisan harus berbeda karena setiap siswa punya makanan yang berbeda. Jika 'because' atau 'but' muncul dalam tulisan — dengan struktur sempurna maupun tidak sempurna — ini adalah tanda kedua connector sedang bekerja.',
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
- Perlu support: guru dekati dan ucap panduan konkret — "You wrote what you eat. Can you write why? I eat [makanan] because [alasan]." — siswa tinggal melengkapi dari sana.
- Sudah bisa: tambahkan kalimat kontras dengan 'but' — "But I don't like [makanan]." atau "But on [hari] I eat [makanan lain] because [alasan]."

Catatan penanganan produksi: Jika 'because' atau 'but' muncul dalam tulisan siswa dengan struktur tidak sempurna — contoh: "I eat rice because energy" atau "but I like bakso very much" — angguk dan tidak perlu mengoreksi.

AKSI: Guru circulate — lihat tulisan siswa tanpa mengoreksi grammar.
→ Jika 'because' atau 'but' muncul secara spontan — angguk.
→ Jika keduanya tidak muncul — tidak perlu dipaksakan.`,
          bantuan         : 'Jika siswa sudah selesai tapi hanya menulis 2 kalimat: tanya "What else do you like? Can you write: But I also like...?" — tunggu siswa menulis kalimat tambahan sendiri tanpa dikte.',
          cue             : 'Yang diperiksa di sini bukan kelengkapan grammar atau kehadiran kedua connector — tapi apakah tulisan mencerminkan makanan nyata siswa. Kalimat "I eat ubi every day because my grandmother cooks it" lebih berharga daripada kalimat sempurna yang tidak bermakna.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'guru dekati dan ucap panduan konkret — "You wrote what you eat. Can you write why? I eat [makanan] because [alasan]." — siswa tinggal melengkapi dari sana.',
            sudahBisa   : 'tambahkan kalimat kontras dengan 'but' — "But I don\'t like [makanan]." atau "But on [hari] I eat [makanan lain] because [alasan]."',
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
UCAP: "Who also eats [makanan yang baru disebut]? Raise your hand."
→ Tangan naik — resonansi natural yang tidak memaksa siapapun berbicara.`,
          bantuan         : 'Jika tidak ada yang mau sukarela: tunjuk siswa yang tadi paling aktif di INTERACT — mereka sudah dalam mode berbicara dan lebih siap.',
          cue             : 'Terima dengan nada yang sama antara makanan "biasa" dan "tidak biasa". Guru yang merespons lebih antusias pada makanan tertentu akan — tanpa disadari — memberi sinyal bahwa makanan lain kurang layak. Nada netral dan penasaran adalah yang tepat.',
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
UCAP: "Today you talked about your food. In English."
→ Jeda.
UCAP: "What you eat. Why. And what else you like."
→ Jeda.
UCAP: "That is your food story. Keep it."

AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time — you will write about your days."
→ Jeda singkat.
UCAP: "Your routines, your hobbies, your food. Everything together."
→ Jeda singkat.
UCAP: "One piece of writing. About everything."

UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : 'Preview ini menggunakan formulasi yang dikonfirmasi untuk TP08 (Panen kedua) — "Your routines, your hobbies, your food. Everything together." Nada undangan, bukan pengumuman tugas. Tidak menyebut "Panen", "ulangan", atau "review".',
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

export default tp_c07;
