/**
 * =============================================================
 * FLAF — TP C02 (Describing People I Know)
 * File: docs/fase-c-skenario/tp-02-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 5)
 * Kluster: A — Diri yang Lebih Lengkap
 * Jenis: Biasa
 * Source: flaf-c-tp02-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c02 = {

  id        : 'tp-c02',
  nomor     : 2,
  kelas     : 5,
  nama      : 'Describing People I Know',
  tema      : 'Diri yang Lebih Lengkap',
  kluster   : 'A',
  jenis     : 'Biasa',
  deskripsi : '',

  indikator: [
    'Peserta didik dapat mendeskripsikan seseorang yang dikenal dalam minimal tiga kalimat menggunakan pola [Name] is... / He/She has... / He/She is... and...',
    'Peserta didik dapat menggunakan connector and (konfirmasi) dan but (exposure) dalam kalimat deskripsi.',
    'Peserta didik dapat menggali informasi deskripsi pasangan melalui pertanyaan lisan dan menuliskannya di Comparison Table.',
  ],

  vocab: ['tall', 'short', 'kind', 'funny', 'patient', 'quiet', 'loud', 'hair'],

  persiapan: [
    'My Person Card (satu per siswa): secarik kertas kecil dengan baris isian — Who? (circle one): father / mother / sibling / friend / teacher / other: ___ · [Name/role] is ___ . He/She has ___ . He/She is ___ and ___ . Di awal L6, kartu ini diletakkan tertutup (menghadap bawah) di atas meja.',
    'Comparison Table (satu per siswa): tabel dua kolom — My Person dan My Partner\'s Person — dengan tiga baris: Relationship · Physical · Personality. Semua kolom My Partner\'s Person kosong. Dibagikan tepat sebelum L6 dimulai.',
    'Tampilan text-anchor di papan: tulis sebelum siswa masuk kelas. "My father is tall. He has short hair. He is kind and funny." Tetap tampil dari L2 sampai akhir L7. Hapus atau tutup sebelum L8 dimulai.',
  ],

  checklist: [
    'Framing inklusif diucapkan di L2 dan L4 — "a friend, a parent, a sibling, a teacher — anyone you know well"',
    'My Person Card terisi sebelum INTERACT dimulai (L4) — kolom My Person di Comparison Table terisi sebelum pair work dimulai (L6)',
    'Comparison Table kolom My Partner\'s Person benar-benar kosong saat dibagikan — tidak boleh diisi tanpa bertanya ke pasangan',
    'Text-anchor diturunkan dari papan sebelum OUTPUT dimulai (L8)',
    'Connector "but" muncul di ucapan model guru di L3 — dua kalimat terpisah, bukan satu kalimat majemuk',
    'Output siswa mencerminkan figur yang mereka pilih sendiri — bukan replikasi text-anchor',
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
      'L4: Siswa yang ragu memilih figur bisa memperlambat seluruh kelas. BANTUAN bisik di menit ke-1 — jangan tunggu menit ke-3.',
      'L6: Pastikan kolom My Person terisi sebelum pair work dimulai. Siswa yang My Person-nya masih kosong tidak bisa menjalankan pair work — dekati mereka sebelum demonstrasi selesai.',
      'L8: Beberapa siswa mungkin memilih figur yang sama dengan teman sebangku. Ini tidak masalah selama deskripsinya berbeda — fokus pada personal traits yang spesifik, bukan siapa yang dipilih.',
    ],
    autonomy: [
      'Figur dalam model guru (L3) boleh disesuaikan dengan orang yang guru benar-benar kenal — lebih autentik jika guru bercerita tentang orang sungguhan, bukan karakter fiktif.',
      'Comparison Table boleh disederhanakan menjadi 2 baris saja (Physical + Personality) jika kelas terlihat kesulitan dengan tabel 3 baris.',
      'Boleh memperpanjang INTERACT (L6) sampai 8 menit jika pertukaran terasa hidup dan kelas kondusif.',
      'Boleh skip L10 jika ada siswa yang tampak tidak nyaman dengan sharing figur personal — tidak semua siswa siap mendiskusikan orang-orang dalam kehidupan mereka secara terbuka.',
    ],
  },

  text_anchor    : 'My father is tall. He has short hair. He is kind and funny.',
  connector_aktif: 'and (hadir di text-anchor — konfirmasi dari TP01) · but (pertama kali muncul di model guru INPUT L3); exposure only di TP02; fokus produksi di TP07',
  recycle_fase_b : [
    'She/He has... (TP02 Fase B)',
    'is [adjective] (pola predikat dasar Fase A/B)',
    'I like... (TP13 Fase B)',
  ],

  breakpoints: [],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Papan sudah bertuliskan text-anchor.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut menjawab.
UCAP: "Today we describe someone special."
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

        // L1 — Reactivation: Profil TP01
        {
          id              : 'l1',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru tidak menunjukkan text-anchor TP01 — cukup bertanya dari ingatan siswa.
UCAP: "Last time — you wrote about yourself. In English."
→ Jeda.
UCAP: "Who remembers one sentence from their profile?"
→ Tunggu 2–3 siswa menyebut kalimat dari tulisan mereka sendiri.
→ Guru tidak mengoreksi — angguk dan terima apapun yang muncul.

AKSI: Setelah 2–3 respons, guru beri bridge ke topik hari ini.
UCAP: "Good. Today — we don't describe ourselves."
→ Jeda singkat.
UCAP: "We describe someone we know."`,
          bantuan         : 'Jika tidak ada yang merespons dalam 5 detik: ucap contoh dari text-anchor TP01 — "My name is Rina. I live in Bandung." — lalu tanya "Who has a sentence like this about yourself?" Tunggu siswa melanjutkan dengan versi mereka sendiri.',
          cue             : 'Reactivation cukup 2–3 kalimat dari siswa yang berbeda. Yang penting: siswa sudah dalam mode berbahasa Inggris dan pola kalimat dari TP01 aktif kembali sebelum text-anchor baru diperkenalkan.',
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

        // L2 — Perkenalan Topik + Framing Inklusif
        {
          id              : 'l2',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru menunjuk text-anchor di papan.
UCAP: "Look at the board. This is a description of someone."
→ Baca text-anchor perlahan, tunjuk setiap baris.
👂 LISTEN FIRST — siswa mendengarkan dan membaca papan.

"My father is tall." [tunjuk baris 1]
"He has short hair." [tunjuk baris 2]
"He is kind and funny." [tunjuk baris 3]

UCAP: "This is about a father. But today — you can describe anyone."
→ Jeda. Ucapkan perlahan — beri waktu siswa memproses pilihan ini.
UCAP: "A friend. A parent. A sibling. A teacher. Anyone you know well."`,
          bantuan         : 'Jika siswa bertanya "boleh siapa saja?": angguk dan ucap "Yes — a friend, a teacher, anyone you know." Tidak perlu penjelasan lebih panjang.',
          cue             : 'Kalimat "you can describe anyone" harus diucapkan dengan nada terbuka — bukan aturan, tapi undangan. Text-anchor adalah satu contoh, bukan satu-satunya opsi. Jangan ulangi "my father" seolah itu satu-satunya pilihan.',
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

        // L3 — Model Guru + Exposure Connector but  [INPUT · CORE]
        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas. Text-anchor masih di papan sebagai referensi.
UCAP: "Now, my turn. I will describe two people I know."

Orang pertama — model dengan "and":
UCAP: "My [person 1] is [trait]."
UCAP: "She/He has [physical trait]."
UCAP: "She/He is [trait 1] and [trait 2]."
→ Contoh: "My mother is tall. She has long hair. She is patient and kind."

→ Jeda singkat sebelum orang kedua.

Orang kedua — exposure "but":
UCAP: "My [person 2] is [trait]."
UCAP: "But my [person 2] is [contrasting trait]."
→ Contoh: "My father is not tall. But my father is funny."
→ Atau: "My mother is patient. But my friend is loud and funny."

UCAP: "But. It shows something different."
→ Ucapkan sekali, natural. Tidak perlu penjelasan lebih panjang dari ini.

AKSI: Kembali ke text-anchor Rina di papan.
🗣 TOGETHER — guru dan siswa baca text-anchor bersama.
UCAP: "Read with me. Ready?"
→ Baca bersama 1×. Cukup.`,
          bantuan         : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris sambil membaca — siswa biasanya ikut setelah kalimat kedua.',
          cue             : 'Exposure "but" terjadi via dua kalimat terpisah — "My mother is patient. But my father is funny." Jangan gunakan satu kalimat majemuk panjang. Dua kalimat pendek lebih mudah ditangkap dan ditiru.',
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

        // L4 — My Person Card  [INPUT · CORE]
        {
          id              : 'l4',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Bagikan My Person Card yang sudah dicetak, atau minta siswa menyalin baris isian dari papan ke kertas kecil.
→ Jika menyalin: tulis di papan di bawah text-anchor —
   Who? ___   [Name/role] is ___ .   He/She has ___ .   He/She is ___ and ___ .

UCAP: "Choose one person you know well."
UCAP: "A friend. A parent. A sibling. A teacher. Anyone."
UCAP: "Write three things about them. Three minutes. Go."
→ Guru diam — biarkan siswa memilih dan menulis.

AKSI: Setelah 3 menit, tunjuk 2–3 siswa secara acak — bukan yang tunjuk tangan.
UCAP: "Read one sentence about your person. Go."
→ Guru tidak mengoreksi. Angguk dan lanjut.`,
          bantuan         : [
            'Jika siswa terlihat ragu memilih figur: bisikkan "You can describe a teacher or a friend — anyone is fine." Jangan tunggu siswa memutuskan sendiri lebih dari 30 detik.',
            'Jika siswa tidak tahu kata adjective yang dibutuhkan: tunjuk papan dan ucapkan beberapa opsi — "tall, short, kind, funny, patient, quiet" — biarkan siswa memilih sendiri.',
          ],
          cue             : 'My Person Card ini digunakan di L6 (INTERACT) sebagai sumber informasi. Pastikan setiap siswa sudah memilih figur dan mengisi minimal 2 baris sebelum lanjut ke L5 atau L6.',
          darurat         : '⚠ DARURAT — ada siswa yang masih belum memilih figur setelah 3 menit:\nDekati, tunjuk baris "Who?" di kartu, tanya dalam bahasa Indonesia jika perlu — "Mau cerita tentang siapa?" Bantu siswa isi satu kata saja di baris pertama. Tidak perlu tunggu kartu terisi semua.',
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

        // L5 — Drill Cepat: Describe and Guess  [INPUT · FLEX]
        {
          id              : 'l5',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Minta satu siswa sukarela berdiri.
UCAP: "Describe your person — but don't say who they are. No 'my father', no 'my friend'. Just describe."
UCAP: "Class — listen and guess: who is this person?"

AKSI: Siswa mendeskripsikan orang mereka (2–3 kalimat) tanpa menyebut relationship.
→ Kelas menebak: "Is it your father? Your teacher? Your friend?"
→ Siswa konfirmasi.
→ Lakukan dengan 2 siswa dari barisan berbeda — cepat.`,
          bantuan         : 'Jika siswa yang berdiri tidak tahu harus mulai dari mana: ucap "Start with: [Name/role] is..." — tunggu siswa melanjutkan.',
          cue             : 'Kelas yang aktif menebak adalah tanda skenario berjalan. Tujuan layar ini: siswa merasakan bahwa deskripsi fisik + kepribadian cukup untuk menggambarkan seseorang — sebelum mereka melakukan hal yang sama di pair work.',
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

        // L6 — Comparison Table Exchange  [INTERACT · CORE]
        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Bagikan Comparison Table — satu per siswa. Kolom My Partner's Person kosong semua.
UCAP: "Fill in your column first — My Person. Use your card."
→ Siswa mengisi kolom My Person dari My Person Card. ~1 menit.

UCAP: "Your partner's column is empty. You need to ask."

AKSI: Demonstrasi dengan satu siswa di depan — maksimal 90 detik.
👂 LISTEN FIRST — kelas perhatikan dulu.
Guru tanya: "Who is your person?" → isi Relationship.
"What does he/she look like?" → isi Physical.
"What is he/she like?" → isi Personality.
Guru tunjukkan tabel yang sudah terisi kolom My Partner.
UCAP: "Now your turn."

AKSI: Siswa bekerja berpasangan.
→ My Person Card tertutup (menghadap bawah) — kolom My Person di tabel sudah terisi.
→ Siswa A bertanya ke B, isi kolom My Partner's Person.
→ Kemudian B bertanya ke A.
→ Setelah kedua arah selesai: tanya pasangan — "Is there anything the same between your person and my person?"
→ Waktu total: 5–6 menit.

AKSI: Guru circulate — prioritaskan barisan belakang dan pojok kelas.`,
          bantuan         : [
            'Jika pasangan tidak tahu harus bertanya apa: tunjuk baris pertama di tabel — "Relationship" — dan ucap "Who is your person?" Tunggu siswa meniru pertanyaan itu ke pasangannya.',
            'Jika siswa mengisi kolom My Partner tanpa bertanya (menebak sendiri): tutup tabel mereka dengan tangan, ucap "Ask first. Then write." Tunjuk ke arah pasangannya.',
          ],
          cue             : 'Pastikan kolom My Person terisi sebelum pair work dimulai. Siswa yang My Person-nya kosong tidak punya informasi untuk dibagikan — pair work mereka akan collapse.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas dengan tepukan tangan.
2. Demo ulang dengan 1 pasangan di depan — guru menjadi pasangannya.
3. Sederhanakan: cukup 2 pertanyaan — "Who is your person?" dan "What is he/she like?"
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

        // L7 — Mini-Share: Satu Kesamaan  [INTERACT · FLEX]
        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Setelah pair work selesai, guru tunjuk 2–3 pasangan.
UCAP: "Did you find anything the same between your person and your partner's person?"
→ Siswa menjawab berdasarkan tabel yang sudah diisi.
→ Contoh: "Both are kind." atau "My person is tall. My partner's person is also tall."

AKSI: Guru tidak mengoreksi grammar. Angguk dan lanjut.
UCAP (opsional): "Interesting. What is different?"
→ Ini membuka ruang natural untuk "but" — jangan paksa, tapi terima jika muncul spontan.`,
          bantuan         : 'Jika siswa tidak bisa menjawab pertanyaan kesamaan: ucap "OK — what is different?" Jawaban kontras sama validnya dan lebih mudah ditemukan.',
          cue             : 'Pertanyaan "What is different?" lebih mudah dijawab siswa daripada "What is the same?" — gunakan ini sebagai fallback jika tidak ada kesamaan yang ditemukan.',
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

        // L8 — Write My Person  [OUTPUT · CORE]
        {
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Guru hapus atau tutup text-anchor dari papan.
UCAP: "Now — write about your person. Not the father from the board. Your person."
UCAP: "At least three sentences. You can use your Person Card to start."
→ My Person Card boleh dilihat kembali sekarang.

AKSI: Siswa menulis secara individual.
→ Waktu: 8–10 menit. Guru tidak mendiktekan kalimat.
→ Beri waktu start 2–3 menit sebelum circulate.
→ Prioritaskan barisan belakang.
→ Perhatikan: apakah siswa menulis "My father is tall. He has short hair." persis seperti text-anchor? Jika ya, tepuk bahu dan tanya: "Is this your father or Rina's father?"`,
          bantuan         : 'Jika siswa freeze: ucap kalimat pertama dengan figur yang siswa pilih — "Your person is [nama/role] — write: [Name] is..." Tunggu siswa menulis satu kalimat. Tinggalkan setelah kalimat pertama.',
          cue             : 'Text-anchor sudah diturunkan. Setiap deskripsi harus berbeda karena setiap siswa memilih figur yang berbeda. Variasi output adalah bukti bahwa bahasa dipakai untuk mengekspresikan orang nyata — bukan menyalin template.',
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

        // L9 — Check & Extend  [OUTPUT · CORE]
        {
          id              : 'l9',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Setelah 8 menit, guru memberi sinyal tanpa menghentikan siswa yang masih menulis.
UCAP: "Two more minutes. Read your sentences. Can you add one more?"

Diferensiasi:
- Perlu support: guru dekati dan ucap kalimat pertama dengan figur siswa ("Your person is [nama] — so write: [Name] is...") — siswa tinggal melanjutkan dari sana.
- Sudah bisa: tambahkan satu kalimat kontras dengan "but" — contoh: "My sister is quiet, but my brother is loud." atau "My teacher is strict, but she is also kind."

AKSI: Guru circulate — lihat tulisan siswa tanpa mengoreksi.
→ Jika "but" muncul secara spontan — angguk, tidak perlu komentar.
→ Jika "but" tidak muncul — tidak perlu dipaksakan. Fokus produksi "but" baru di TP07.`,
          bantuan         : 'Jika siswa sudah selesai tapi hanya menulis 2 kalimat: tanya "What does he/she like to do?" — tunggu siswa menulis kalimat tambahan sendiri tanpa dikte.',
          cue             : 'Yang diperiksa di sini adalah apakah deskripsi mencerminkan orang nyata yang siswa kenal — bukan kelengkapan grammar. Kalimat "She is kind and a bit strict" lebih berharga daripada kalimat sempurna yang tidak bermakna.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'guru dekati dan ucap kalimat pertama dengan figur siswa ("Your person is [nama] — so write: [Name] is...") — siswa tinggal melanjutkan dari sana.',
            sudahBisa   : 'tambahkan satu kalimat kontras dengan "but" — contoh: "My sister is quiet, but my brother is loud." atau "My teacher is strict, but she is also kind."',
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

        // L10 — Sharing ke Kelas  [FLEX]
        {
          id              : 'l10',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru minta 2–3 siswa sukarela membacakan 1–2 kalimat dari deskripsi mereka.
UCAP: "Who wants to share? One or two sentences — from your seat is fine."
→ Terima siapapun yang mau. Tidak perlu berdiri di depan kelas.

AKSI: Setelah setiap siswa berbagi, guru bertanya ke kelas:
UCAP: "Who described a friend? Who described a teacher?"
→ Tangan siswa naik — ini resonansi natural yang tidak memaksa disclosure tentang figur keluarga.`,
          bantuan         : 'Jika tidak ada yang mau sukarela: tunjuk siswa yang tadi paling aktif di INTERACT — mereka sudah dalam mode berbicara dan lebih siap.',
          cue             : 'Pertanyaan "Who described a friend?" lebih aman dari "Who described a father?" — ini menciptakan rasa komunitas tanpa menekan siswa dengan situasi keluarga yang berbeda-beda.',
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

        // L11 — Closure  [CORE]
        {
          id              : 'l11',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas.
UCAP: "Today you described someone you know. In English."
→ Jeda.
UCAP: "Tall or short. Kind or funny. Patient or loud."
→ Jeda.
UCAP: "That is a description. Keep it."

AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time — we describe a place."
→ Jeda singkat.
UCAP: "Your home. Your neighborhood. What is around you."
→ Preview TP03 yang natural, tidak membebani.

UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : 'Nada penutup adalah nada selesai, bukan nada menyuruh. "Keep it" bukan instruksi — ini validasi bahwa yang mereka buat punya nilai.',
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

export default tp_c02;

/*
 * =============================================================
 * CATATAN KONVERSI — tp-02-v1.js
 * =============================================================
 *
 * Field yang tidak bisa diisi dari .txt (diisi default):
 *   - indikator[]: derived dari tujuan TP dan instruksi skenario.
 *   - deskripsi: kosong string.
 *   - printables[]: kosong.
 *
 * Keputusan ambiguitas:
 *   1. interact_contract L6: gap_type = 'information' — siswa A tidak tahu
 *      siapa Person Card B sampai ditanya.
 *
 * =============================================================
 */
