/**
 * =============================================================
 * FLAF — TP C05 (My Week: Routines and Plans)
 * File: docs/fase-c-skenario/tp-05-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 5)
 * Kluster: B — Dunia Sehari-hari
 * Jenis: Biasa
 * Source: flaf-c-tp05-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c05 = {

  id        : 'tp-c05',
  nomor     : 5,
  kelas     : 5,
  nama      : 'My Week: Routines and Plans',
  tema      : 'Dunia Sehari-hari',
  kluster   : 'B',
  jenis     : 'Biasa',
  deskripsi : '',

  indikator: [
    'Peserta didik dapat mendeskripsikan rutinitas mingguan dalam minimal tiga kalimat menggunakan pola On [day] I... / Then I...',
    'Peserta didik dapat menggunakan connector then untuk menghubungkan dua kegiatan berurutan (exposure).',
    'Peserta didik dapat menggali informasi rutinitas pasangan melalui pertanyaan lisan dan menuliskannya di My Week Comparison Table.',
  ],

  vocab: ['go to school', 'help', 'cook', 'play', 'study', 'wake up', 'early', 'late'],

  persiapan: [
    'My Routine Card (satu per siswa): secarik kertas kecil dengan dua bagian — (1) This week: On ___ I ___ . Then I ___ . (2) Last week: Last ___ I ___ . Di awal L6, kartu ini diletakkan tertutup (menghadap bawah) di atas meja masing-masing siswa.',
    'My Week Comparison Table (satu per siswa): tabel dua kolom — My Week dan My Partner\'s Week — dengan dua baris: This week · Last week. Kolom My Partner\'s Week kosong semua. Dibagikan guru tepat sebelum L6 dimulai.',
    'Tampilan text-anchor di papan: tulis sebelum siswa masuk kelas. "On Monday I go to school. Last Monday I went to school early." Tetap tampil dari L2 sampai akhir L7. Hapus atau tutup sebelum L8 dimulai.',
  ],

  checklist: [
    'Reactivation (L1) mengaktifkan kalimat dari tulisan TP04 — bukan dari text-anchor TP01–03',
    'My Routine Card terisi sebelum INTERACT dimulai (L4) — kolom My Week di Comparison Table terisi sebelum pair work dimulai (L6)',
    'Comparison Table kolom My Partner\'s Week benar-benar kosong saat dibagikan — tidak boleh diisi tanpa bertanya ke pasangan',
    'Text-anchor diturunkan dari papan sebelum OUTPUT dimulai (L8)',
    'Connector "then" muncul di model guru (L3) dan di drill cepat (L5) — dimodelkan natural, tidak diajarkan sebagai grammar',
    'Kalimat past tense di model guru (L3) diucapkan sekali dan dilanjutkan — tidak ditunjuk, tidak diulang, tidak dijadikan bahan komentar',
    'Output siswa mencerminkan rutinitas mereka sendiri — bukan replikasi text-anchor',
    'Guru sudah mendekati minimal 2–3 siswa barisan belakang di L8 atau L9',
  ],

  printables: [
    { file: 'tp-c05-go-to-school.png', label: 'Go to School' },
    { file: 'tp-c05-cook.png', label: 'Cook' },
    { file: 'tp-c05-play-outside.png', label: 'Play Outside' },
    { file: 'tp-c05-study.png', label: 'Study' },
    { file: 'tp-c05-wake-up.png', label: 'Wake Up' },
    { file: 'tp-c05-help-at-home.png', label: 'Help at Home' },
    { file: 'tp-c05-routine-card.png', label: 'My Routine Card' },
    { file: 'tp-c05-comparison-table.png', label: 'My Week Comparison Table' },
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
      'L4: Siswa yang tidak tahu kosakata untuk kegiatan sehari-hari bisa memperlambat seluruh kelas. Daftar opsi (go to school, help at home, play, study, cook, sleep early) sebaiknya sudah ditulis di papan sejak sebelum L4 dimulai.',
      'L6: Pastikan kolom My Week terisi sebelum pair work dimulai. Siswa yang kolomnya masih kosong tidak punya informasi untuk dibagikan — dekati mereka sebelum demonstrasi selesai jika terlihat belum siap.',
      'L8: Past tense mungkin muncul dalam tulisan siswa dengan bentuk yang tidak sempurna ("last week I go to..." atau "yesterday I playing..."). Ini normal dan tidak perlu dikoreksi di L8 — biarkan tulisan mengalir. Koreksi grammar bukan tujuan sesi ini.',
    ],
    autonomy: [
      'Rutinitas dalam model guru (L3) harus tentang minggu nyata guru — bukan contoh generik. Semakin spesifik ("Then I correct student work" alih-alih "Then I work"), semakin siswa merasakan bahwa rutinitas yang berbeda-beda itu valid.',
      'Pertanyaan "Then what?" di L5 boleh diucapkan berulang kali oleh guru saat circulate di L6 — ini cara natural untuk memunculkan "then" tanpa mengajarkannya.',
      'Boleh memperpanjang INTERACT (L6) sampai 8 menit jika pertukaran terasa hidup dan kelas kondusif.',
      'Boleh skip L10 jika kelas menunjukkan kelelahan setelah writing — cukup tutup dengan L11.',
      'Boleh menambahkan hari-hari spesifik dalam daftar opsi di papan (Senin, Selasa, dll.) jika siswa kesulitan dengan nama hari dalam bahasa Inggris.',
    ],
  },

  text_anchor    : 'On Monday I go to school. Last Monday I went to school early.',
  connector_aktif: 'then — pertama kali muncul di ucapan model guru (INPUT L3); exposure only di TP05; fokus produksi di TP14 · Past tense — exposure pertama Fase C via text-anchor dan 1 kalimat model guru; bukan target produksi di TP05',
  recycle_fase_b : [
    'On [day] I... (TP07 Fase B)',
    'I usually... / first, then, after that (TP06 Fase B)',
    'Yesterday I... / Last week I... (TP05 Fase B — exposure)',
  ],

  breakpoints: [],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Papan sudah bertuliskan text-anchor.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut menjawab.
UCAP: "Today we talk about your week."
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

        // L1 — Reactivation: Output TP04
        {
          id              : 'l1',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru tidak membuka tulisan TP04 — cukup bertanya dari ingatan siswa.
UCAP: "Last time you wrote about yourself — everything together."
→ Jeda.
UCAP: "Who remembers one sentence from that writing?"
→ Tunggu 2–3 siswa menyebut kalimat dari tulisan "This Is Me" mereka.
→ Guru tidak mengoreksi — angguk dan terima apapun yang muncul.

AKSI: Setelah 2–3 respons, guru bridge ke topik hari ini.
UCAP: "Good. Today — not what you are. What you do."
→ Jeda singkat.
UCAP: "Your week. What happens every day. What happened last week."`,
          bantuan         : 'Jika tidak ada yang merespons dalam 5 detik: ucap contoh kalimat yang mungkin ada di tulisan TP04 — "My name is... I live in... I like..." — lalu tanya "Who wrote something like this?" Terima kalimat pertama yang muncul dan lanjut.',
          cue             : 'Reactivation ini mengaktifkan bahasa dari tulisan Panen TP04 — bukan dari text-anchor TP01–03. Yang penting: siswa mengucapkan kalimat milik mereka sendiri sebelum topik baru diperkenalkan.',
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

        // L2 — Perkenalan Text-Anchor
        {
          id              : 'l2',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru menunjuk text-anchor di papan.
UCAP: "Look at the board. Two sentences about one week."
→ Baca text-anchor perlahan, tunjuk setiap baris.
👂 LISTEN FIRST — siswa mendengarkan dan membaca papan.

"On Monday I go to school." [tunjuk baris 1]
"Last Monday I went to school early." [tunjuk baris 2]

UCAP: "Two sentences. Same day — Monday. But different time."
→ Jeda. Tunjuk baris 1.
UCAP: "This one — every week. Every Monday."
→ Tunjuk baris 2.
UCAP: "This one — last week. One Monday that already happened."
→ Tidak perlu penjelasan lebih panjang dari ini. Lanjut ke L3.`,
          bantuan         : 'Jika siswa terlihat bingung dengan kalimat kedua: ucap "Last Monday — it already happened. It is finished." Cukup sampai situ — lanjutkan ke L3.',
          cue             : 'Komentar "different time" adalah noticing natural — bukan grammar lesson. Guru menunjukkan perbedaan konteks, bukan perbedaan bentuk kata kerja. Jangan sebut "past tense" atau "verb form". Jangan minta siswa mengulang kedua kalimat itu secara terpisah untuk membandingkan.',
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

        // L3 — Model Guru + Exposure then + Past  [INPUT · CORE]
        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas. Text-anchor masih di papan sebagai referensi.
UCAP: "Now, my turn. This is my week."

UCAP: "On Monday I go to [tempat nyata]."
UCAP: "Then I [kegiatan berikutnya yang nyata]."
→ Contoh: "On Monday I go to school. Then I correct student work at home."

UCAP: "On [hari lain] I [kegiatan]."
UCAP: "Then I [kegiatan berikutnya]."
→ Contoh: "On Saturday I go to the market. Then I cook for my family."

→ Jeda singkat sebelum kalimat past tense.
UCAP: "Last Monday I [sesuatu yang nyata terjadi minggu lalu]."
→ Contoh: "Last Monday I helped my mother cook dinner."
→ Lanjut tanpa komentar apapun tentang kalimat ini.

AKSI: Langsung lanjut ke pembacaan bersama.
🗣 TOGETHER — guru dan siswa baca text-anchor bersama.
UCAP: "Read with me. Ready?"
→ Baca bersama 1×. Cukup.`,
          bantuan         : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris sambil membaca — siswa biasanya ikut setelah kalimat kedua.',
          cue             : 'Connector "then" muncul dua kali di model guru — dalam konteks yang natural, bukan sebagai kata yang disorot. Kalimat past tense ("Last Monday I helped my mother cook dinner.") diucapkan sekali dan langsung dilanjutkan — tidak ditunjuk, tidak diulang, tidak dijadikan bahan komentar. Ini exposure, bukan instruksi.',
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

        // L4 — My Routine Card  [INPUT · CORE]
        {
          id              : 'l4',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Bagikan My Routine Card yang sudah dicetak, atau minta siswa menyalin baris isian dari papan ke kertas kecil.
→ Jika menyalin: tulis di papan di bawah text-anchor —
   This week: On ___ I ___ . Then I ___ .
   Last week: Last ___ I ___ .

UCAP: "Think about your week. Choose one day."
UCAP: "What do you do on that day? Then what?"
UCAP: "And one thing from last week — something that happened."
UCAP: "Three minutes. Go."
→ Guru diam — biarkan siswa berpikir dan menulis.

AKSI: Setelah 3 menit, tunjuk 2–3 siswa secara acak — bukan yang tunjuk tangan.
UCAP: "Read one sentence. What do you do on [hari yang mereka tulis]?"
→ Guru tidak mengoreksi. Angguk dan lanjut.`,
          bantuan         : [
            'Jika siswa tidak tahu hari apa yang ingin ditulis: ucap "Monday, Tuesday, Wednesday — pick one. Any day." Jangan tunggu siswa memutuskan lebih dari 30 detik.',
            'Jika siswa tidak tahu kata kerja dalam bahasa Inggris untuk kegiatan mereka: ucap beberapa opsi — "go to school, help at home, play, study, cook, sleep early" — biarkan siswa memilih yang paling dekat.',
          ],
          cue             : 'My Routine Card ini digunakan di L6 (INTERACT) sebagai sumber informasi. Pastikan setiap siswa sudah mengisi minimal bagian "This week" sebelum lanjut ke L5 atau L6.',
          darurat         : '⚠ DARURAT — ada siswa yang masih belum mengisi apapun setelah 3 menit:\nDekati, tunjuk baris "On ___ I ___", tanya dalam bahasa Indonesia jika perlu — "Hari Senin biasanya ngapain?" Bantu siswa isi satu kata saja di baris pertama. Tidak perlu tunggu kartu terisi semua.',
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

        // L5 — Drill Cepat: What Do You Do on Monday?  [INPUT · FLEX]
        {
          id              : 'l5',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Minta satu siswa sukarela berdiri.
UCAP: "What do you do on Monday? One sentence."
→ Siswa menjawab: "On Monday I [kegiatan]."
UCAP: "Then what?"
→ Siswa menjawab: "Then I [kegiatan berikutnya]."

AKSI: Lakukan dengan 3–4 siswa dari barisan berbeda — cepat, tanpa berhenti lama di satu siswa.
→ Setelah tiap siswa menjawab: guru tunjuk kelas — "Who does the same thing on Monday? Raise your hand."
→ Ini menciptakan resonansi natural tanpa memaksa siapapun berbicara panjang.`,
          bantuan         : 'Jika siswa yang berdiri berhenti setelah kalimat pertama: guru langsung tanya "Then what?" sambil angguk — ini isyarat bahwa ada lanjutannya.',
          cue             : 'Tujuan layar ini adalah membiasakan siswa dengan pola "On [day] I... Then I..." sebelum pair work. Guru memancing pertanyaan "Then what?" agar "then" terasa natural sebagai kelanjutan — bukan sebagai kata yang diajarkan.',
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

        // L6 — My Week Comparison Table Exchange  [INTERACT · CORE]
        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Bagikan My Week Comparison Table — satu per siswa. Kolom My Partner's Week kosong semua.
UCAP: "Fill in your column first — My Week. Use your card."
→ Siswa mengisi kolom My Week dari My Routine Card. ~1 menit.

UCAP: "Your partner's column is empty. You need to ask."

AKSI: Demonstrasi dengan satu siswa di depan — maksimal 90 detik.
👂 LISTEN FIRST — kelas perhatikan dulu.
Guru tanya ke satu siswa: "What do you do this week? Pick one day." → siswa jawab → guru isi baris This week di kolom My Partner.
"And last week — what happened?" → isi baris Last week.
Tunjukkan tabel yang sudah terisi kolom My Partner.
UCAP: "Now your turn."

AKSI: Siswa bekerja berpasangan.
→ My Routine Card dibalik (menghadap bawah) — kolom My Week di tabel sudah terisi.
→ Siswa A bertanya ke B, isi kolom My Partner's Week.
→ Kemudian B bertanya ke A.
→ Setelah kedua arah selesai: tanya pasangan — "Is your week similar or different?"
→ Waktu total: 5–6 menit untuk dua arah.

AKSI: Guru circulate — prioritaskan barisan belakang dan pojok kelas.`,
          bantuan         : [
            'Jika pasangan tidak tahu harus bertanya apa: tunjuk baris pertama di tabel — "This week" — dan ucap "What do you do this week?" Tunggu siswa meniru pertanyaan itu ke pasangannya.',
            'Jika siswa langsung mengisi kolom My Partner tanpa bertanya: tutup tabel mereka dengan tangan, ucap "Ask first. Then write." Tunjuk ke arah pasangannya.',
          ],
          cue             : 'Pertanyaan "Then what?" boleh dimunculkan saat siswa bertanya ke pasangan — ini cara natural "then" masuk ke percakapan. Jangan diinstruksikan secara eksplisit, tapi guru bisa memodelkan saat lewat dekat pasangan yang sedang tanya-jawab.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas dengan tepukan tangan.
2. Demo ulang dengan 1 pasangan di depan — guru menjadi pasangannya.
3. Sederhanakan: cukup 2 pertanyaan — "What do you do on Monday?" dan "What did you do last week?"
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
UCAP: "Tell me — is your week similar to your partner's? Or different?"
→ Siswa menjawab berdasarkan tabel yang sudah diisi.
→ Contoh: "We both go to school on Monday." atau "My partner plays football on Saturday. I help at home."

AKSI: Guru tidak mengoreksi grammar. Angguk dan lanjut.
UCAP (opsional): "Interesting. Did anyone do something unusual last week?"
→ Ini membuka ruang natural untuk kalimat past tense — jangan paksa, tapi terima jika muncul spontan.`,
          bantuan         : 'Jika siswa tidak bisa menjawab: tunjuk tabel mereka dan ucap "Look — This week: same or different?" Minta siswa bandingkan satu baris saja dulu.',
          cue             : 'Pertanyaan "did anyone do something unusual last week?" adalah undangan untuk past tense yang natural — guru tidak menyebut past tense, hanya membuka ruang cerita tentang minggu lalu. Jika siswa menjawab dengan bentuk yang tidak sempurna ("last week I go to..."), terima saja tanpa koreksi.',
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

        // L8 — Write My Week  [OUTPUT · CORE]
        {
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Guru hapus atau tutup text-anchor dari papan.
UCAP: "Now — write about your week."
UCAP: "Not the example from the board. Your week."
UCAP: "At least three sentences. You can use your Routine Card to start."
→ My Routine Card boleh dilihat kembali sekarang.

AKSI: Siswa menulis secara individual.
→ Waktu: 8–10 menit. Guru tidak mendiktekan kalimat apapun.
→ Beri waktu start 2–3 menit sebelum circulate.
→ Prioritaskan barisan belakang dan pojok kelas.
→ Perhatikan: apakah ada siswa yang menyalin text-anchor persis? Jika ya, tepuk bahu dan tanya: "Is this your week or the example?"`,
          bantuan         : 'Jika siswa freeze (pensil di tangan tapi tidak menulis): ucap kalimat pertama dengan informasi siswa — "What day do you go to school? Write: On [hari] I go to school." Tunggu siswa menulis satu kalimat. Tinggalkan setelah itu.',
          cue             : 'Text-anchor sudah diturunkan. Setiap tulisan harus berbeda karena setiap siswa punya rutinitas yang berbeda. Jika "then" muncul dalam tulisan siswa secara spontan — itu bukti connector sudah bekerja. Jika tidak muncul — tidak perlu dipaksakan.',
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
- Perlu support: guru dekati dan ucap panduan konkret — "You wrote about Monday. What about another day? On [hari lain] I..." — siswa tinggal melanjutkan dari sana.
- Sudah bisa: tambahkan kalimat dengan 'then' — "On [hari] I [kegiatan]. Then I [kegiatan berikutnya]." — atau tambahkan satu kalimat past tense: "Last [hari] I [sesuatu]."

AKSI: Guru circulate — lihat tulisan siswa tanpa mengoreksi grammar.
→ Jika 'then' muncul secara spontan — angguk, tidak perlu komentar.
→ Jika ada kalimat past tense yang muncul (sempurna maupun tidak sempurna) — angguk, tidak perlu koreksi.`,
          bantuan         : 'Jika siswa sudah selesai tapi hanya menulis 2 kalimat: tanya "What do you do after school? Can you write: Then I...?" — tunggu siswa menulis kalimat tambahan sendiri tanpa dikte.',
          cue             : 'Yang diperiksa di sini bukan kelengkapan grammar — tapi apakah tulisan mencerminkan minggu nyata siswa. Kalimat "On Sunday I help my father at the warung" lebih berharga daripada kalimat sempurna yang tidak bermakna.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'guru dekati dan ucap panduan konkret — "You wrote about Monday. What about another day? On [hari lain] I..." — siswa tinggal melanjutkan dari sana.',
            sudahBisa   : 'tambahkan kalimat dengan "then" — "On [hari] I [kegiatan]. Then I [kegiatan berikutnya]." — atau tambahkan satu kalimat past tense: "Last [hari] I [sesuatu]."',
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
          teks            : `AKSI: Guru minta 2–3 siswa sukarela membacakan 1–2 kalimat dari tulisan mereka.
UCAP: "Who wants to share? One or two sentences — from your seat is fine."
→ Terima siapapun yang mau. Tidak perlu berdiri di depan kelas.

AKSI: Setelah setiap siswa berbagi, guru bertanya ke kelas:
UCAP: "Who also does that on [hari yang disebut]? Raise your hand."
→ Tangan naik — resonansi natural yang tidak memaksa siapapun berbicara.`,
          bantuan         : 'Jika tidak ada yang mau sukarela: tunjuk siswa yang tadi paling aktif di INTERACT — mereka sudah dalam mode berbicara dan lebih siap.',
          cue             : 'Pertanyaan "Who also does that on [X]?" lebih konkret dari pertanyaan terbuka. Siswa yang tidak mau berbagi pun bisa ikut mengangkat tangan — ini inklusif.',
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
UCAP: "Today you talked about your week. In English."
→ Jeda.
UCAP: "What you do every day. What happened last week."
→ Jeda.
UCAP: "That is your routine. Keep it."

AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time — not just what you do."
→ Jeda singkat.
UCAP: "Why you do it."
→ Biarkan siswa memikirkan sendiri apa artinya. Tidak perlu penjelasan lebih.

UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : 'Preview "Why you do it" adalah undangan natural ke "because" di TP06 — tanpa menyebut kata "because" atau menjelaskan apapun. Siswa yang penasaran akan membawa pertanyaan itu ke sesi berikutnya. Nada penutup adalah nada selesai, bukan nada penugasan.',
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

export default tp_c05;
