/**
 * =============================================================
 * FLAF — TP C03 (My Home and Neighborhood)
 * File: docs/fase-c-skenario/tp-03-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 5)
 * Kluster: A — Diri yang Lebih Lengkap
 * Jenis: Biasa
 * Source: flaf-c-tp03-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c03 = {

  id        : 'tp-c03',
  nomor     : 3,
  kelas     : 5,
  nama      : 'My Home and Neighborhood',
  tema      : 'Diri yang Lebih Lengkap',
  kluster   : 'A',
  jenis     : 'Biasa',
  deskripsi : '',

  indikator: [
    'Peserta didik dapat mendeskripsikan lingkungan sekitar rumah dalam minimal tiga kalimat menggunakan pola My house is near... / There is... / It is... and...',
    'Peserta didik dapat menggunakan connector and untuk menghubungkan dua kata sifat dalam kalimat deskripsi tempat (reinforcement).',
    'Peserta didik dapat menggali informasi lingkungan pasangan melalui pertanyaan lisan dan menuliskannya di Comparison Table.',
  ],

  vocab: ['mosque', 'market', 'school', 'garden', 'rice field', 'river', 'quiet', 'busy', 'clean', 'green', 'noisy'],

  persiapan: [
    'My Neighborhood Card (satu per siswa): secarik kertas kecil dengan tiga baris isian — Near my house: ___ · Next to it: ___ · It is: ___ (pilihan kata sifat ditulis di papan: quiet / busy / clean / green / noisy, atau siswa boleh tulis sendiri). Di awal L6, kartu ini diletakkan tertutup (menghadap bawah) di atas meja masing-masing siswa.',
    'Comparison Table (satu per siswa): tabel dua kolom — My Neighborhood dan My Partner\'s Neighborhood — dengan tiga baris: Near my house · Next to it · It is... Kolom My Partner\'s Neighborhood kosong semua. Dibagikan guru tepat sebelum L6 dimulai.',
    'Tampilan text-anchor di papan: tulis sebelum siswa masuk kelas. "My house is near a mosque. There is a garden next to it. It is quiet and clean." Tetap tampil dari L2 sampai akhir L7. Hapus atau tutup sebelum L8 dimulai.',
  ],

  checklist: [
    'Framing inklusif diucapkan di L2 — "your neighborhood might be different" — agar siswa yang tidak tinggal dekat masjid tetap merasa skenario ini untuk mereka',
    'My Neighborhood Card terisi sebelum INTERACT dimulai (L4) — kolom My Neighborhood di Comparison Table terisi sebelum pair work dimulai (L6)',
    'Comparison Table kolom My Partner\'s Neighborhood benar-benar kosong saat dibagikan — tidak boleh diisi tanpa bertanya ke pasangan',
    'Text-anchor diturunkan dari papan sebelum OUTPUT dimulai (L8)',
    'Connector `and` muncul di ucapan model guru di L3 — dimodelkan secara natural, tidak diajarkan sebagai grammar',
    'Output siswa mendeskripsikan lingkungan mereka sendiri — bukan replikasi text-anchor',
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
      'L4: Siswa yang tidak tahu kosakata untuk tempat di sekitar rumah bisa memperlambat seluruh kelas. Daftar opsi (mosque, market, school, rice field, river) harus ditulis di papan sejak sebelum L4 dimulai — jangan tunggu siswa macet baru menulis.',
      'L6: Pastikan kolom My Neighborhood terisi sebelum pair work dimulai. Siswa yang kolomnya masih kosong tidak punya informasi untuk dibagikan — pair work mereka akan collapse. Dekati mereka sebelum demonstrasi selesai jika terlihat belum siap.',
      'L8: Siswa kelas 5 biasanya butuh 1–2 menit pertama untuk mulai menulis — beri waktu tanpa intervensi dulu. Baru circulate setelah menit ke-2 atau ke-3.',
    ],
    autonomy: [
      'Tempat dalam model guru (L3) harus tentang lingkungan guru yang nyata — lebih autentik dari contoh generik. Boleh sebutkan nama warung atau tempat yang benar-benar ada.',
      'Daftar kata sifat di pojok papan boleh ditambah dengan kata yang relevan untuk lingkungan kelas — misalnya "shady", "loud", "crowded" jika kelas berada di area tertentu.',
      'Boleh memperpanjang INTERACT (L6) sampai 8 menit jika pertukaran terasa hidup dan kelas kondusif.',
      'Boleh skip L10 jika ada siswa yang tampak tidak nyaman dengan sharing tentang kondisi tempat tinggal mereka — tidak semua siswa siap mendiskusikan lingkungan rumah secara terbuka.',
      'Preview TP04 di L11 ("Your name. Your home. Your neighborhood. Everything together.") adalah undangan, bukan pengumuman — ucapkan dengan nada positif dan biarkan siswa membayangkan sendiri tanpa penjelasan lebih lanjut.',
    ],
  },

  text_anchor    : 'My house is near a mosque. There is a garden next to it. It is quiet and clean.',
  connector_aktif: 'and — hadir di text-anchor ("quiet and clean"); reinforcement sebelum fokus produksi di TP04',
  recycle_fase_b : [
    'There is / There are... (TP03 Fase B)',
    'next to / across from (TP03 Fase B)',
    'is [adjective] — pola predikat dasar Fase A/B',
  ],

  breakpoints: [],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Papan sudah bertuliskan text-anchor.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut menjawab.
UCAP: "Today we talk about where we live."
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

        // L1 — Reactivation: Deskripsi TP02
        {
          id              : 'l1',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru tidak menunjukkan text-anchor TP02 — cukup bertanya dari ingatan siswa.
UCAP: "Last time — you described someone you know."
→ Jeda.
UCAP: "Who remembers one sentence from their description?"
→ Tunggu 2–3 siswa menyebut kalimat dari tulisan TP02 mereka.
→ Guru tidak mengoreksi — angguk dan terima apapun yang muncul.

AKSI: Setelah 2–3 respons, guru bridge ke topik hari ini.
UCAP: "Good. Today — not a person. A place."
→ Jeda singkat.
UCAP: "Your home. And what is around it."`,
          bantuan         : 'Jika tidak ada yang merespons dalam 5 detik: ucap contoh dari text-anchor TP02 — "My father is tall. He is kind and funny." — lalu tanya "Who has a sentence like this about your person?" Tunggu siswa melanjutkan dengan versi mereka sendiri.',
          cue             : 'Reactivation cukup 2–3 kalimat dari siswa yang berbeda. Yang penting: pola "is [adjective]" atau "He/She has..." dari TP02 aktif kembali sebelum text-anchor baru diperkenalkan — siswa sudah dalam mode berbahasa Inggris.',
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

        // L2 — Perkenalan Text-Anchor + Framing Inklusif
        {
          id              : 'l2',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru menunjuk text-anchor di papan.
UCAP: "Look at the board. This is a description of a place."
→ Baca text-anchor perlahan, tunjuk setiap baris.
👂 LISTEN FIRST — siswa mendengarkan dan membaca papan.

"My house is near a mosque." [tunjuk baris 1]
"There is a garden next to it." [tunjuk baris 2]
"It is quiet and clean." [tunjuk baris 3]

UCAP: "This is one example. One neighborhood."
→ Jeda. Ucapkan perlahan — beri waktu siswa memproses.
UCAP: "Your neighborhood might be different — and that is fine."
UCAP: "Near a market. Near a school. Near rice fields. Near a river. Whatever is near your home."`,
          bantuan         : 'Jika siswa bertanya "what if I don\'t live near a mosque?": angguk dan ucap "That is fine — what is near your house?" Tidak perlu penjelasan lebih panjang.',
          cue             : 'Kalimat "your neighborhood might be different" diucapkan dengan nada terbuka — ini undangan, bukan koreksi. Text-anchor adalah satu contoh, bukan satu-satunya template yang benar. Jangan ulangi "near a mosque" seolah itu satu-satunya pilihan.',
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

        // L3 — Model Guru + Reinforcement Connector and  [INPUT · CORE]
        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas. Text-anchor masih di papan sebagai referensi.
UCAP: "Now, my turn. I will describe my neighborhood."

UCAP: "My house is near [tempat nyata]."
→ Contoh: "My house is near a school."
UCAP: "There is [sesuatu] next to it."
→ Contoh: "There is a small warung next to it."
UCAP: "It is [kata sifat] and [kata sifat]."
→ Contoh: "It is quiet and green."

AKSI: Tunjuk baris terakhir text-anchor di papan: "It is quiet and clean."
UCAP: "And. It connects two things — quiet and clean. Quiet and green."
→ Ucapkan sekali, natural. Tidak perlu penjelasan lebih panjang dari ini.

AKSI: Langsung lanjut ke pembacaan bersama.
🗣 TOGETHER — guru dan siswa baca text-anchor bersama.
UCAP: "Read with me. Ready?"
→ Baca bersama 1×. Cukup.`,
          bantuan         : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris sambil membaca — siswa biasanya ikut setelah kalimat kedua.',
          cue             : 'Model guru harus tentang lingkungan nyata guru — bukan tempat fiktif. Siswa kelas 5 cepat mendeteksi apakah guru sungguhan atau hanya memberi contoh. Model yang autentik memberi izin implisit pada siswa untuk menulis tentang lingkungan mereka yang sesungguhnya.',
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

        // L4 — My Neighborhood Card  [INPUT · CORE]
        {
          id              : 'l4',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Bagikan My Neighborhood Card yang sudah dicetak, atau minta siswa menyalin baris isian dari papan ke kertas kecil.
→ Jika menyalin: tulis di papan di bawah text-anchor —
   Near my house: ___   Next to it: ___   It is: ___
→ Tulis juga daftar pilihan kata sifat di pojok papan: quiet / busy / clean / green / noisy

UCAP: "Think about your home. What is near it?"
UCAP: "Write three things. Use your neighborhood — not the example on the board."
UCAP: "Three minutes. Go."
→ Guru diam — biarkan siswa berpikir dan menulis.

AKSI: Setelah 3 menit, tunjuk 2–3 siswa secara acak — bukan yang tunjuk tangan.
UCAP: "Read one thing. What is near your house?"
→ Guru tidak mengoreksi. Angguk dan lanjut.`,
          bantuan         : [
            'Jika siswa tidak tahu kata dalam bahasa Inggris untuk tempat di sekitar rumah: ucap beberapa opsi — "mosque, market, school, rice field, river" — dan minta siswa pilih yang paling dekat dengan kondisi mereka. Kata yang siswa pilih sendiri lebih kuat daripada kata yang guru dikte.',
            'Jika siswa tidak tahu kata sifat untuk suasana lingkungan: tunjuk daftar pilihan di pojok papan — "quiet, busy, clean, green, noisy" — biarkan siswa memilih sendiri.',
          ],
          cue             : 'My Neighborhood Card ini digunakan di L6 (INTERACT) sebagai sumber informasi. Pastikan setiap siswa sudah mengisi minimal baris pertama (Near my house) sebelum lanjut ke L5 atau L6.',
          darurat         : '⚠ DARURAT — ada siswa yang masih belum mengisi apapun setelah 3 menit:\nDekati, tunjuk baris pertama ("Near my house"), tanya dalam bahasa Indonesia jika perlu — "Di dekat rumahnya ada apa?" Bantu siswa isi satu kata saja di baris pertama. Tidak perlu tunggu kartu terisi semua.',
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

        // L5 — Drill Cepat: What's Near Your House?  [INPUT · FLEX]
        {
          id              : 'l5',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Minta satu siswa sukarela berdiri.
UCAP: "Tell us — what is near your house? One sentence."
→ Siswa menjawab: "My house is near a [tempat]."
→ Guru angguk, lanjut tanpa komentar grammar.
UCAP: "Is there anything next to it?"
→ Siswa menjawab: "There is a [sesuatu] next to it."

AKSI: Lakukan dengan 3–4 siswa dari barisan berbeda — cepat, tanpa berhenti lama di satu siswa.
→ Setelah tiap siswa menjawab: tunjuk kelas — "Is anyone's neighborhood similar? Raise your hand."
→ Ini menciptakan resonansi natural tanpa memaksa siapapun berbicara panjang.`,
          bantuan         : 'Jika tidak ada yang mau sukarela: tunjuk siswa yang tadi paling aktif merespons di L4 — mereka sudah dalam mode berbicara.',
          cue             : 'Tujuan layar ini adalah membiasakan siswa dengan ritme pertanyaan tentang tempat sebelum pair work. Yang penting: kelas merasakan bahwa pertanyaan-pertanyaan itu natural dan mudah dijawab — bukan ujian.',
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

        // L6 — Neighborhood Comparison Table Exchange  [INTERACT · CORE]
        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Bagikan Comparison Table — satu per siswa. Kolom My Partner's Neighborhood kosong semua.
UCAP: "Fill in your column first — My Neighborhood. Use your card."
→ Siswa mengisi kolom My Neighborhood dari My Neighborhood Card. ~1 menit.

UCAP: "Your partner's column is empty. You need to ask."

AKSI: Demonstrasi dengan satu siswa di depan — maksimal 90 detik.
👂 LISTEN FIRST — kelas perhatikan dulu.
Guru tanya ke satu siswa: "What is near your house?" → siswa jawab → guru isi baris Near my house di kolom My Partner.
"What is next to it?" → isi baris Next to it.
"What is it like? Is it quiet or busy?" → isi baris It is...
Tunjukkan tabel yang sudah terisi kolom My Partner.
UCAP: "Now your turn."

AKSI: Siswa bekerja berpasangan.
→ My Neighborhood Card dibalik (menghadap bawah) — kolom My Neighborhood di tabel sudah terisi.
→ Siswa A bertanya ke B, isi kolom My Partner's Neighborhood.
→ Kemudian B bertanya ke A.
→ Setelah kedua arah selesai: tanya pasangan — "Is your neighborhood similar or different?"
→ Waktu total: 5–6 menit untuk dua arah.

AKSI: Guru circulate — prioritaskan barisan belakang dan pojok kelas.`,
          bantuan         : [
            'Jika pasangan tidak tahu harus bertanya apa: tunjuk baris pertama di tabel — "Near my house" — dan ucap "What is near your house?" Tunggu siswa meniru pertanyaan itu ke pasangannya.',
            'Jika siswa langsung mengisi kolom My Partner tanpa bertanya (menebak sendiri): tutup tabel mereka dengan tangan, ucap "Ask first. Then write." Tunjuk ke arah pasangannya.',
          ],
          cue             : 'Pastikan kolom My Neighborhood terisi sebelum pair work dimulai. Siswa yang My Neighborhood-nya masih kosong tidak punya informasi untuk dibagikan — pair work mereka akan collapse.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas dengan tepukan tangan.
2. Demo ulang dengan 1 pasangan di depan — guru menjadi pasangannya.
3. Sederhanakan: cukup 2 pertanyaan — "What is near your house?" dan "Is it quiet or busy?"
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

        // L7 — Mini-Share: Sama atau Berbeda?  [INTERACT · FLEX]
        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Setelah pair work selesai, guru tunjuk 2–3 pasangan.
UCAP: "Tell me — is your neighborhood similar to your partner's? Or different?"
→ Siswa menjawab berdasarkan tabel yang sudah diisi.
→ Contoh: "Both are quiet." atau "My neighborhood is near a market. My partner's is near a school."

AKSI: Guru tidak mengoreksi grammar. Angguk dan lanjut.
UCAP (opsional): "Interesting. Who lives near something unusual — something different from everyone else?"
→ Ini membuka ruang bagi siswa dengan lingkungan yang tidak biasa untuk berbicara tanpa malu.`,
          bantuan         : 'Jika siswa tidak bisa menjawab: tunjuk tabel mereka dan ucap "Look — your neighborhood and your partner\'s. This row — Near my house — is it the same?" Minta siswa bandingkan satu baris saja dulu.',
          cue             : 'Pertanyaan "similar or different?" lebih mudah dijawab siswa daripada pertanyaan terbuka. Gunakan ini sebagai entri — siswa bisa langsung menjawab "different" dan kemudian menjelaskan apa yang berbeda.',
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

        // L8 — Write My Neighborhood  [OUTPUT · CORE]
        {
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Guru hapus atau tutup text-anchor dari papan.
UCAP: "Now — write about your home and neighborhood."
UCAP: "Not the example from the board. Your home. Your neighborhood."
UCAP: "At least three sentences. You can use your Neighborhood Card to start."
→ My Neighborhood Card boleh dilihat kembali sekarang.

AKSI: Siswa menulis secara individual.
→ Waktu: 8–10 menit. Guru tidak mendiktekan kalimat apapun.
→ Beri waktu start 2–3 menit sebelum circulate.
→ Prioritaskan barisan belakang dan pojok kelas.
→ Perhatikan: apakah ada siswa yang menyalin baris dari papan persis? Jika ya, tepuk bahu dan tanya: "Is this your neighborhood or the example?"`,
          bantuan         : 'Jika siswa freeze (pensil di tangan tapi tidak menulis): ucap kalimat pertama dengan informasi siswa — "What is near your house? Write: My house is near..." Tunggu siswa menulis satu kalimat. Tinggalkan setelah kalimat pertama — jangan dampingi terlalu lama.',
          cue             : 'Text-anchor sudah diturunkan. Setiap deskripsi harus berbeda karena setiap siswa punya lingkungan yang berbeda. Variasi output adalah bukti bahwa bahasa dipakai untuk mendeskripsikan tempat nyata — bukan menyalin template.',
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
- Perlu support: guru dekati dan ucap kalimat pertama dengan informasi siswa — "Your house is near [tempat] — so write: My house is near..." — siswa tinggal melanjutkan dari sana.
- Sudah bisa: tambahkan satu kalimat dengan `and` yang menghubungkan dua hal — contoh: "It is quiet and cool." atau "There is a garden and a small river next to my house."

AKSI: Guru circulate — lihat tulisan siswa tanpa mengoreksi.
→ Jika `and` muncul secara spontan — angguk, tidak perlu komentar.
→ Jika `and` tidak muncul — tidak perlu dipaksakan. Fokus produksi `and` ada di TP04.`,
          bantuan         : 'Jika siswa sudah selesai tapi hanya menulis 2 kalimat: tanya "What is it like? Is it quiet? Is it clean?" — tunggu siswa menulis kalimat tambahan sendiri tanpa dikte.',
          cue             : 'Yang diperiksa di sini bukan kelengkapan grammar — tapi apakah deskripsi mencerminkan lingkungan nyata siswa. Kalimat "There is a big sawah next to my house" lebih berharga daripada kalimat sempurna yang tidak bermakna.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'guru dekati dan ucap kalimat pertama dengan informasi siswa — "Your house is near [tempat] — so write: My house is near..." — siswa tinggal melanjutkan dari sana.',
            sudahBisa   : 'tambahkan satu kalimat dengan `and` yang menghubungkan dua hal — contoh: "It is quiet and cool." atau "There is a garden and a small river next to my house."',
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
UCAP: "Who also lives near a [tempat yang baru disebut]? Raise your hand."
→ Tangan naik — ini resonansi natural yang tidak memaksa siapapun berbicara.`,
          bantuan         : 'Jika tidak ada yang mau sukarela: tunjuk siswa yang tadi paling aktif di INTERACT — mereka sudah dalam mode berbicara dan lebih siap.',
          cue             : 'Pertanyaan "who also lives near a [X]?" lebih konkret dari pertanyaan terbuka. Siswa yang tidak mau berbagi pun bisa ikut mengangkat tangan — ini inklusif dan tidak memaksa disclosure tentang kondisi tempat tinggal.',
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
UCAP: "Today you described where you live. In English."
→ Jeda.
UCAP: "What is near your house. What is next to it. What it is like."
→ Jeda.
UCAP: "That is your neighborhood. Keep it."

AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time — you will write about yourself."
→ Jeda singkat.
UCAP: "Your name. Your home. Your neighborhood. Everything together."
→ Jeda singkat.
UCAP: "One piece of writing. About you."

UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : 'Nada penutup adalah nada selesai dan nada undangan — bukan pengumuman tugas atau ancaman. "Everything together" terasa seperti proyek yang menarik, bukan ujian yang menunggu.',
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

export default tp_c03;
