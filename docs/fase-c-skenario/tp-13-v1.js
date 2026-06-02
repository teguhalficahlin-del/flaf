/**
 * =============================================================
 * FLAF — TP C13 (Reading an Announcement)
 * File: docs/fase-c-skenario/tp-13-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 6)
 * Kluster: D — Membaca Dunia
 * Jenis: Biasa
 * Source: flaf-c-tp13-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c13 = {

  id        : 'tp-c13',
  nomor     : 13,
  kelas     : 6,
  nama      : 'Reading an Announcement',
  tema      : 'Membaca Dunia',
  kluster   : 'D',
  jenis     : 'Biasa',
  deskripsi : '',

  indikator: [
    'Peserta didik dapat mengekstrak lima jenis informasi dari teks pengumuman: event, kapan, di mana, waktu, dan apa yang harus dibawa.',
    'Peserta didik dapat membuat keputusan tentang informasi mana yang paling penting dari teks dan menjelaskan alasannya.',
    'Peserta didik dapat menulis respons terhadap teks pengumuman menggunakan kalimat sendiri, termasuk rencana atau pendapat personal.',
  ],

  vocab: ['announcement', 'event', 'hall', 'bring', 'fair', 'Thursday', 'money'],

  persiapan: [
    'Teks pengumuman di papan (atau cetak satu per siswa): Visual poster berjudul "SCHOOL BOOK FAIR" dengan teks — "School Book Fair is on Thursday, 20 March. It is in the school hall from 8.00 to 12.00. All students can come. Please bring money if you want to buy a book." Tetap tampil sepanjang sesi — termasuk saat OUTPUT.',
    'Choice Sheet (satu per siswa): Secarik kertas kecil atau sticky note kosong. Digunakan di L6 sebelum pair work dimulai — siswa menulis pilihan mereka (SATU informasi paling penting) sebelum berbagi ke pasangan.',
  ],

  checklist: [
    'Reactivation L1 adalah bridge keterampilan membaca — "Last time you read a menu. You looked for prices. Today — different text, different things."',
    'Lima kategori diekstraksi bersama di L3: event · when · where · time · what to bring',
    ''if' dalam text-anchor tidak dijelaskan sebagai grammar — jika ditanya: "It means — for students who want to buy"',
    'Setiap siswa menulis pilihan di Choice Sheet SEBELUM pair work di L6 dimulai',
    'Demo L6 menunjukkan guru MENULIS pilihan dulu, baru berbagi — bukan langsung berbicara',
    'Teks pengumuman tetap tampil saat OUTPUT (L8) — siswa butuh teks untuk merespons',
    'Output siswa menggunakan kalimat sendiri — bukan menyalin verbatim dari pengumuman',
    'Tidak ada connector baru yang didorong',
    'Guru sudah mendekati minimal 2–3 siswa barisan belakang di L8 atau L9',
  ],

  printables: [],

  energi_map: [
    'L0 ⚪',
    'L1 🟡',
    'L2 🟡',
    'L3 🟡',
    'L4 🟡',
    'L5 🟡',
    'L6 🟡',
    'L7 🟡',
    'L8 🔵',
    'L9 🔵',
    'L10 🟡',
    'L11 🔵',
  ],

  catatan: {
    risiko: [
      'L3: Lima kategori harus diekstraksi bersama — jangan skip ke L4 sebelum siswa bisa mengidentifikasi kelimanya.',
      'L6: Urutan "tulis dulu, baru berbagi" adalah kunci. Jika guru lupa instruksi ini dan langsung memulai pair work tanpa Choice Sheet, pilihan siswa akan berubah mengikuti pasangan — gap hilang.',
      'L8: Teks pengumuman sengaja tetap di papan. Guru yang terbiasa menghapus text-anchor sebelum OUTPUT (seperti TP01–11) perlu diingatkan: di Kluster D, teks adalah scaffold yang harus tersedia.',
    ],
    autonomy: [
      'Topik pengumuman boleh diganti dengan event sekolah yang lebih relevan untuk waktu tersebut.',
      'Lima kategori (event, when, where, time, what to bring) boleh ditulis sebagai label di pojok papan selama sesi.',
      '"What to bring" bisa berupa selain uang — "wear sports clothes," "bring your student ID," dll.',
      'Boleh memperpanjang L6 (choice gap) sampai 8 menit jika diskusi pilihan terasa hidup.',
    ],
  },

  text_anchor    : 'School Book Fair is on Thursday, 20 March. It is in the school hall from 8.00 to 12.00. All students can come. Please bring money if you want to buy a book.',
  connector_aktif: '— (tidak ada connector baru; jangan dorong connector apapun; 'if' dalam text-anchor adalah bagian fungsional teks — bukan target pembelajaran)',
  recycle_fase_b : [
    '[event] is on [day] — adaptasi pola On [day] I... (TP07 Fase B)',
    'All students can come — pola can (TP16 Fase B)',
    'I like... because... (TP13 Fase B) — muncul natural di OUTPUT siswa',
  ],

  breakpoints: [],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Visual poster pengumuman sudah tampil di papan.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut.
UCAP: "Today — we read an announcement."
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
          teks            : `AKSI: Guru berdiri di depan kelas tanpa menunjukkan teks baru.
UCAP: "Last time you read a menu."
→ Jeda.
UCAP: "One sentence. Who remembers — from the menu?"
→ Tunggu SATU siswa menyebut kalimat dari TP12.
→ Guru angguk dan terima.
UCAP: "Good. Today — we read something different."
UCAP: "An announcement. We look for different things."
→ Lanjut ke L2.`,
          bantuan         : null,
          cue             : 'Satu respons sudah cukup — jangan tunggu lebih dari 20 detik. Bridge ke pengumuman lebih penting dari kedalaman reactivation.',
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
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Guru menunjuk visual poster di papan tanpa langsung membacakannya.
UCAP: "Look at the board. What can you see?"
→ Biarkan siswa melihat 10–15 detik.
→ Terima 1–2 respons spontan — "a notice," "school event," apapun.

AKSI: Guru membaca text-anchor perlahan, tunjuk setiap kalimat.
👂 LISTEN FIRST — siswa mendengarkan dan membaca papan.

"School Book Fair is on Thursday, 20 March." [tunjuk kalimat 1]
"It is in the school hall from 8.00 to 12.00." [tunjuk kalimat 2]
"All students can come." [tunjuk kalimat 3]
"Please bring money if you want to buy a book." [tunjuk kalimat 4]

UCAP: "This is an announcement. It gives information. And it tells you what to do."`,
          bantuan         : 'Jika siswa tidak memperhatikan papan saat guru membaca: ketuk papan dua kali sebelum kalimat berikutnya.',
          cue             : '"It gives information. And it tells you what to do." — dua fungsi pengumuman yang perlu diartikulasikan sebelum siswa mulai mengekstrak info.',
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
          teks            : `AKSI: Guru menunjuk teks pengumuman di papan sambil mengekstrak informasi.
UCAP: "Let's find the information. I ask — you find the answer in the text."

UCAP: "What is the event?" → tunjuk kalimat 1 → siswa: "School Book Fair."
UCAP: "When?" → tunjuk → siswa: "Thursday, 20 March."
UCAP: "Where?" → tunjuk → siswa: "school hall."
UCAP: "What time?" → tunjuk → siswa: "8.00 to 12.00."
UCAP: "What to bring?" → tunjuk → siswa: "money."

UCAP: "Five things. Event — when — where — time — what to bring."
→ Tuliskan lima kategori ini di papan di samping teks (hanya label singkat).`,
          bantuan         : 'Jika siswa menjawab dalam bahasa Indonesia: terima dan angguk — lanjutkan ke kategori berikutnya. Tujuannya menemukan informasi, bukan memproduks kalimat sempurna.',
          cue             : 'Lima kategori ini adalah kerangka kerja membaca pengumuman — bukan grammar, tapi navigasi teks. Tuliskan sebagai label singkat saja, tidak perlu kalimat.',
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
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Guru bertanya, siswa menjawab dengan menemukan jawaban di teks — bukan menebak atau mengingat.
UCAP: "I ask again — find the answer. Read the text."

UCAP: "When is the Book Fair?" → siswa baca dan jawab: "Thursday, 20 March."
UCAP: "What time does it start?" → siswa: "8.00."
UCAP: "Can all students come?" → siswa: "Yes."
UCAP: "What do you need if you want to buy a book?" → siswa: "money."
UCAP: "Where exactly is it?" → siswa: "school hall."

AKSI: Lakukan dengan seluruh kelas terlebih dahulu, lalu tunjuk 2–3 siswa secara individual untuk menjawab pertanyaan yang sama.
→ Ini memastikan siswa membaca teks, bukan hanya mendengar jawaban teman.`,
          bantuan         : 'Jika siswa tidak bisa menemukan jawaban: tunjuk kalimat yang relevan di papan dan ucap "Read this sentence." Tunggu siswa menemukan jawabannya sendiri.',
          cue             : '"Find the answer — read the text" harus diucapkan setiap kali. Ini menanamkan kebiasaan membaca untuk informasi spesifik, bukan menebak atau mengingat.',
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
          id              : 'l5',
          tipe            : 'instruksi',
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Guru bertanya pertanyaan interpretasi ringan — bukan hanya factual.
UCAP: "This announcement tells you to DO something. What is it?"
→ Siswa: "Come to the Book Fair." atau "Bring money."
UCAP: "If you forget to bring money — can you still come?"
→ Siswa membaca: "All students can come." — lalu interpretasi: "Yes, but can't buy."
UCAP: "Who is this announcement for?"
→ Siswa: "All students."

AKSI: 3–4 pertanyaan interpretasi, cepat. Siswa selalu merujuk ke teks.`,
          bantuan         : 'Jika siswa tidak bisa menjawab pertanyaan interpretasi: turunkan ke pertanyaan faktual — "What does the announcement say about money?" — lalu naikkan kembali: "So what should you do?"',
          cue             : 'Pertanyaan interpretasi ("What does it tell you to DO?") adalah satu langkah lebih tinggi dari ekstraksi faktual. Ini mempersiapkan siswa untuk choice gap di L6.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika kelas sudah menjawab dengan lancar di L4',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Bagikan Choice Sheet — satu per siswa (atau gunakan pojok lembar cetak).
UCAP: "Look at the announcement again. Five pieces of information."
UCAP: "Which ONE is the most important for a student? Choose."
UCAP: "Write your choice first — before you talk."
→ Siswa menulis pilihan mereka (satu kata atau frasa pendek) di Choice Sheet. 1 menit.

AKSI: Demonstrasi — guru menulis pilihan sendiri dulu di papan atau kertas.
👂 LISTEN FIRST — kelas perhatikan.
Guru tulis: "[guru menulis 'date' atau 'Thursday, 20 March' di kertas]"
UCAP: "I choose the date. For me — if I don't know when, I might miss it."
→ Tunjuk tulisan ke satu siswa.
UCAP: "What did you choose?"
→ Siswa menjawab (sudah punya pilihan tertulis).
UCAP: "Do you agree with my reason? Or do you have a different reason?"
→ Siswa merespons.
UCAP: "Now — do the same with your partner."

AKSI: Siswa bekerja berpasangan.
→ Siswa A tunjukkan Choice Sheet → jelaskan pilihan + satu alasan singkat.
→ Siswa B merespons: "I agree because..." atau "I think [other info] is more important because..."
→ Bergantian.
→ Pertanyaan penutup: "Is there information you both agree is most important?"
→ Waktu total: 5–6 menit.

AKSI: Guru circulate — perhatikan apakah siswa menunjukkan Choice Sheet atau langsung berbicara tanpa artefak.`,
          bantuan         : [
            'Jika siswa tidak tahu harus memilih apa: ucap "Pick one — date, time, place, or what to bring. Write just that one word." Jangan bantu memilih — bantu proses memilih.',
            'Jika siswa A langsung setuju dengan B tanpa membaca Choice Sheet-nya: tunjuk kertas A dan ucap "What did you write? Read it first."',
          ],
          cue             : 'Urutan wajib — TULIS dulu, BARU berbagi. Tanpa artefak tertulis, siswa bisa langsung setuju dengan apapun yang pasangan katakan tanpa benar-benar memilih.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas.
2. Demo ulang: guru tunjukkan Choice Sheet tertulis, ucapkan pilihan + alasan singkat.
3. Sederhanakan: "Just tell your partner what you wrote. One word is enough."
4. Restart — batasi 60 detik.`,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INTERACT',
          assessment_overlay: {
            recommended: true,
            priority   : 'belum_dinilai',
          },
          interact_contract: {
            gap_type         : 'choice',
            artifact_required: true,
            artifact_type    : 'choice_slip',
            collapse_signal  : 'pair diam > 90 detik',
          },
          artifact: null,
        },

        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru bertanya ke kelas.
UCAP: "Who chose the same thing as their partner? Raise your hand."
→ Tangan naik — perhatikan berapa pasangan yang sepakat.
UCAP: "Who chose something different?"
→ Tangan naik.
UCAP: "Who chose the date? The time? The place? What to bring?"
→ Tangan naik per kategori — ini memberikan gambaran distribusi pilihan kelas.`,
          bantuan         : 'Jika tidak ada yang mau mengangkat tangan: tunjuk 2 pasangan secara langsung — "What did you choose?" Cukup satu jawaban per pasangan.',
          cue             : 'Jangan tanya "siapa yang benar?" — tidak ada jawaban benar tunggal. Tujuan layar ini adalah menunjukkan bahwa teks yang sama bisa dibaca dengan prioritas yang berbeda-beda.',
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
          teks            : `AKSI: Teks pengumuman tetap tampil di papan — siswa perlu teks untuk menulis respons yang akurat.
UCAP: "Now — write. In your own sentences: what is this announcement about?"
UCAP: "And then — will you go? What will you do?"

UCAP: "Three questions to answer in your writing:"
UCAP: "What is the event? When and where?"
UCAP: "And — will you go? What will you do?"
→ Tidak ditulis di papan. Diucapkan sekali.
→ Siswa menjawab ketiga pertanyaan ini dalam kalimat sendiri.

AKSI: Siswa menulis secara individual.
→ Teks pengumuman boleh dilihat — tapi output harus "dalam kalimat sendiri, bukan menyalin kata per kata."
→ Waktu: 8–10 menit.
→ Beri waktu start 2–3 menit sebelum circulate.
→ Prioritaskan barisan belakang.
→ Perhatikan: apakah siswa menyalin langsung dari papan, atau menulis dalam kalimat sendiri? Jika menyalin: tepuk bahu dan ucap "Write it your way — not the same words."`,
          bantuan         : 'Jika siswa freeze: tunjuk kalimat 1 pengumuman dan ucap "What is this about? Write: This announcement is about..." Tunggu satu kalimat. Tinggalkan.',
          cue             : 'Teks pengumuman tetap di papan karena output adalah RESPONS terhadap teks — bukan produksi dari pengalaman personal. Yang dilarang hanya menyalin verbatim.',
          darurat         : '⚠ DARURAT — waktu ≤ 5 menit dan sebagian besar siswa baru menulis 1 kalimat:\nUcap: "Two sentences — one about the event, one about what you will do." Turunkan target.',
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
          teks            : `AKSI: Setelah 8 menit, guru memberi sinyal.
UCAP: "Two more minutes. Read your sentences. Did you include the most important information?"

Diferensiasi:
- Perlu support: guru dekati, tunjuk Choice Sheet siswa, tanya "Did you write about this? Add one sentence." — tunggu siswa tambahkan informasi yang mereka pilih tadi.
- Sudah bisa: tambah kalimat yang menghubungkan pengumuman dengan rencana atau preferensi personal — contoh: "I want to go because I like reading." atau "I will bring Rp 20.000 and buy two books."

AKSI: Guru circulate — cek apakah informasi utama sudah ada dalam tulisan siswa.
→ Jika connector muncul spontan ('because', 'and') — angguk.`,
          bantuan         : 'Jika siswa sudah menulis 3 kalimat tapi semuanya faktual: tanya "Will you go? Write one sentence." — tunggu siswa tambahkan respons personal.',
          cue             : 'Diferensiasi "Sudah bisa" mengacu pada rencana konkret dan alasan personal — berbeda-beda per siswa.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'guru dekati, tunjuk Choice Sheet siswa, tanya "Did you write about this? Add one sentence."',
            sudahBisa   : 'tambah kalimat yang menghubungkan pengumuman dengan rencana atau preferensi personal — contoh: "I want to go because I like reading."',
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
UCAP: "Who wants to share? What did you write? From your seat is fine."
→ Terima siapapun yang mau.

AKSI: Setelah setiap siswa berbagi, guru bertanya:
UCAP: "Will you go to the Book Fair? Yes or no?"
→ Tangan naik — resonansi natural yang tidak menstigmatisasi.`,
          bantuan         : 'Jika tidak ada yang mau sukarela: tunjuk 1–2 siswa yang tadi aktif di INTERACT.',
          cue             : 'Pertanyaan "Will you go?" lebih aman dari "Do you like books?" karena tidak mengekspos preferensi yang mungkin dianggap tidak "normal."',
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
UCAP: "Today you read an announcement."
→ Jeda.
UCAP: "You found the information. When. Where. What to do."
→ Jeda.
UCAP: "And you made a choice — what matters most."
→ Jeda.
UCAP: "Keep it."

AKSI: Tunjuk Choice Sheet dan tulisan siswa di atas meja mereka.
UCAP: "Next time — we read instructions."
→ Jeda singkat.
UCAP: "How to make something. Step by step."
→ Preview TP14 yang natural.

UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : '"And you made a choice — what matters most." — kalimat yang merangkum keterampilan membaca sesungguhnya: tidak hanya menemukan fakta, tapi memilih yang paling penting.',
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

export default tp_c13;

/*
 * =============================================================
 * CATATAN KONVERSI — tp-13-v1.js
 * =============================================================
 *
 * Keputusan ambiguitas:
 *   1. interact_contract L6 artifact_type = 'choice_slip': Choice Sheet
 *      adalah artefak yang diproduksi siswa sebelum INTERACT dan digunakan
 *      saat INTERACT berlangsung. Ini bukan 'commitment' atau 'choice_card'
 *      seperti TP20/TP22 — field ini menggunakan string literal 'choice_slip'.
 *
 * =============================================================
 */
