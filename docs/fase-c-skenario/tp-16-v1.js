/**
 * =============================================================
 * FLAF — TP C16 (Writing: Responding to Text)
 * File: docs/fase-c-skenario/tp-16-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 6)
 * Kluster: D — Membaca Dunia
 * Jenis: Panen
 * Source: flaf-c-tp16-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c16 = {

  id        : 'tp-c16',
  nomor     : 16,
  kelas     : 6,
  nama      : 'Writing: Responding to Text',
  tema      : 'Membaca Dunia',
  kluster   : 'D',
  jenis     : 'Panen',
  deskripsi : `Panen ketiga dari empat (TP04, TP08, TP16, TP20).
Siswa memilih satu dari empat teks Kluster D (menu, pengumuman, instruksi, cerita) dan menulis respons personal.
Tidak ada vocab baru. Brief bukan template. Output berbeda-beda karena pilihan teks dan sudut pandang berbeda.
Guru tidak mendominasi lebih dari 40% layar.`,

  indikator: [
    'Peserta didik dapat memilih satu teks dari Kluster D dan menulis respons personal dalam minimal tiga kalimat menggunakan kalimat sendiri.',
    'Peserta didik dapat membedakan antara merangkum teks (summary) dan merespons teks (response) dalam tulisan.',
    'Peserta didik dapat menjelaskan pilihan teks dan alasan personal mereka kepada pasangan.',
  ],

  vocab: [],

  persiapan: [
    'Brief di papan (3 baris — ditulis sebelum kelas masuk, tetap tampil selama sesi): "Choose one text." / "Write your response." / "Your own words."',
    'Empat judul teks di pojok papan (tetap tampil selama sesi): "TP12: Menu · TP13: Announcement · TP14: Instructions · TP15: Short Story"',
    'Choice Slip: satu lembar kecil per siswa (kertas lipat atau karton 10x7 cm) — disiapkan di atas meja siswa sebelum kelas masuk. Berisi dua baris isian: "I choose: ___________" dan "I will write: ___________"',
    'Kertas writing siswa: lembar terpisah atau buku tulis yang dipakai di TP12–15.',
  ],

  checklist: [
    'L1 reactivation: satu kalimat dari tulisan TP15 SISWA — bukan guru yang mengucapkan sendiri; "Today — you choose. Any text we read." diucapkan setelah respons siswa',
    'Brief L2: kalimat "because you read it. But only YOU can write your response." — dua connector ditanam dalam instruksi secara natural',
    'Demo L4: guru menggunakan TP13 (Announcement), bukan TP15 (Short Story) — lisan only, tidak ditulis di papan',
    '"Think — which text? Tell your neighbor — one word." di L4 sudah dijalankan sebelum pindah ke L5',
    'Choice Slip sudah ditulis siswa SEBELUM pair sharing di L6 — urutan ini tidak boleh dibalik',
    'L6 INTERACT: demo 30 detik dijalankan dengan pilihan "announcement" (konsisten dengan L4)',
    'L8 OUTPUT: circulate dimulai setelah 3 menit (bukan langsung) — barisan belakang diprioritaskan pertama',
    'L8: siswa yang meringkas (bukan merespons) mendapat nudge: "What do YOU think about it?" — satu pertanyaan, tinggalkan',
    'BREAKPOINT ALAMI sudah disampaikan jika sesi terancam: "Next time we start from Layar 9 — revision. Save your work."',
    'Guru tidak mendominasi lebih dari 40% layar — L0, L2, L4, L13 dominan = 4 dari 14 layar = 28%',
  ],

  printables: [
    { file: 'tp-c16-choice-slip.png', label: 'Choice Slip' },
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🟡',
    'L2 🟡',
    'L3 🟡',
    'L4 🟡',
    'L5 🔵',
    'L6 🟡',
    'L7 🟡',
    'L8 🔵',
    'L9 🔵',
    'L10 🔵',
    'L11 🟡',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L4: Risiko terbesar adalah demo yang merayap menjadi penjelasan panjang. Tiga kalimat demo — stop.',
      'L5: Risiko siswa tidak bisa menulis satu kalimat di Choice Slip — ini sinyal butuh scaffolding ringan. Satu kata saja sudah cukup untuk Choice Slip.',
      'L6: Risiko pair sharing menjadi one-way (satu siswa share, yang lain tidak merespons). Demo 30 detik di awal harus mencontohkan pertanyaan "Why?" secara eksplisit.',
      'L8: Risiko terbesar adalah siswa meringkas teks alih-alih merespons. Kata kunci untuk guru saat circulate: "What do YOU think?" — bukan "Apa isi teks ini?"',
    ],
    autonomy: [
      'Judul teks di pojok papan boleh disesuaikan dengan nama yang lebih spesifik.',
      'Guru boleh memberi siswa 1–2 menit ekstra di L8 jika writing terasa hidup.',
      'Choice Slip boleh diganti dengan catatan di sudut buku tulis jika tidak ada kertas tersedia.',
      'Guru boleh mengizinkan siswa yang lebih kuat untuk merespons dua teks jika selesai lebih awal.',
    ],
  },

  text_anchor    : null,
  connector_aktif: 'and · but · because · so · when · then — semua tersedia; tidak ada connector baru di sesi ini; because dan but paling natural muncul dalam respons teks',
  recycle_fase_b : [
    'Yesterday I... / Last Sunday... (TP05)',
    'I like... because... (TP06/13)',
    'first, then, after that (TP06)',
    'There is / There are... (TP03)',
    'On [day] I... (TP07)',
  ],

  breakpoints: [
    {
      type             : 'breakpoint',
      id               : 'bp-tp-c16-1',
      kind             : 'natural',
      after_langkah_id : 'l8',
      resume_at        : 'l9',
      text             : 'Next time we start from Layar 9 — revision.\nSave your work.',
      recommended      : true,
      persist_state    : true,
      preserve_context : {
        artifacts       : true,
        assessment_state: true,
        pairing_state   : false,
      },
      ui: {
        primary_action  : 'Simpan & keluar',
        secondary_action: 'Lanjut mengajar',
      },
    },
  ],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Brief 3 baris sudah tampil di papan. Empat judul teks sudah tampil di pojok papan. Choice Slip sudah di atas meja siswa.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut.
UCAP: "Today — you choose. You write."
→ Tidak perlu diterjemahkan. Tunjuk brief di papan. Lanjut ke L1.`,
    bantuan: null,
    cue    : null,
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 7,

      langkah: [

        {
          id              : 'l1',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas tanpa menunjukkan teks baru.
UCAP: "Last time you wrote a story."
→ Jeda.
UCAP: "One sentence. Who remembers a sentence from their story?"
→ Tunggu SATU siswa menyebut kalimat dari tulisan TP15.
→ Guru angguk dan terima.
UCAP: "Good. Today — you choose. Any text we read."
→ Tunjuk pojok papan dengan empat judul.
→ Lanjut ke L2.`,
          bantuan         : 'Jika tidak ada yang merespons dalam 10 detik: ucap "Last Sunday, Budi..." — jeda — tunggu siswa melanjutkan satu kata. Terima, angguk, lanjut.',
          cue             : 'Reactivation mengaktifkan past tense dan pola narasi dari tulisan TP15 siswa. Satu kalimat dari siswa sudah cukup. Jangan tunggu lebih dari 20 detik.',
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
          teks            : `AKSI: Guru tunjuk brief di papan (3 baris).
UCAP: "Read this with me."
🗣 TOGETHER — baca tiga baris bersama kelas:
"Choose one text."
"Write your response."
"Your own words."
→ Jeda.

UCAP: "You read four texts in this cluster."
→ Tunjuk pojok papan dengan empat judul.
UCAP: "A menu. An announcement. Instructions. A short story."
→ Jeda.
UCAP: "Choose one. Write what you think — because you read it."
→ Jeda.
UCAP: "But only YOU can write your response."
→ Tunjuk seorang siswa, lalu siswa lain.
UCAP: "Different people — different responses. That is the point."`,
          bantuan         : null,
          cue             : '"because you read it. But only YOU can write your response." — dua connector ditanam secara natural dalam kalimat instruksi. Kalimat ini juga menegaskan bahwa Panen adalah produksi personal, bukan pengisian template.',
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
      durasi: 46,

      langkah: [

        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru sebut empat judul satu per satu — ucapkan SATU kalimat memorable dari masing-masing.
UCAP: "TP12 — Menu. 'This is nasi goreng. It costs Rp 15.000.'"
UCAP: "TP13 — Announcement. A school event. Remember?"
→ Jeda singkat. Terima 1 respons spontan dari kelas.
UCAP: "TP14 — Instructions. Step by step. First... then..."
UCAP: "TP15 — Short Story. Budi. Last Sunday. The market."
→ Tidak lebih dari ini.

UCAP: "That is all you need to remember. Now — choose."
→ Siswa yang ingin melihat catatan TP12–15 boleh membuka tulisan lama. Waktu: 30 detik.`,
          bantuan         : null,
          cue             : 'FLEX ini bukan re-teaching — ini recall cepat. Maksimal 2 menit. Jika kelas sudah spontan menunjukkan ingatan saat L2, lewati layar ini.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika kelas sudah membawa tulisan TP12–15 atau terlihat mengingat keempat teks',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l4',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru tunjuk "TP13: Announcement" di pojok papan.
UCAP: "Watch me. I choose one text — and I respond."
→ Jeda. Guru tidak menulis apapun di papan — ini demo lisan sepenuhnya.

👂 LISTEN FIRST — siswa mendengarkan.
UCAP (perlahan, natural, bukan membaca):
"I choose the announcement about the Book Fair."
→ Jeda.
"I think it is interesting because I like books."
→ Jeda.
"But I think the time is too short — only four hours."
→ Jeda.

UCAP: "That is a response. Three sentences."
→ Tunjuk tiga jari secara berurutan:
"One: what I choose."
"Two: what I think — because."
"Three: what I disagree — but."
→ Tidak ada label grammar. Tidak ada tabel. Tidak ada penjelasan lebih lanjut.

UCAP: "Now — think. Which text are YOU thinking about?"
→ Jeda 3 detik.
UCAP: "Tell your neighbor — one word. Which text?"
→ Siswa berbisik ke tetangga selama 15 detik.

UCAP: "Good. Now — Choice Slip."
→ Lanjut ke L5.`,
          bantuan         : [
            'Jika siswa bertanya "Boleh pilih TP15?": jawab "Yes. Any text. You choose."',
            'Jika siswa bertanya "Harus tiga kalimat?": jawab "Three or more. But at least three."',
          ],
          cue             : 'Demo menggunakan TP13 (bukan TP15) — menunjukkan bahwa respons terhadap pengumuman sama validnya dengan respons terhadap cerita. Demo lisan only — tidak ditulis di papan agar siswa tidak menyalin struktur.',
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
          interaction_mode: 'writing',
          teks            : `AKSI: Guru tunjuk Choice Slip di meja siswa.
UCAP: "Take your Choice Slip. Two things to write. Don't talk yet."
→ Tunjuk atau ucapkan dua pertanyaan:
"One: which text do you choose?"
"Two: write ONE sentence — what will you say about it?"
→ Siswa menulis secara individual. Waktu: 2–3 menit.
→ Guru diam. Tidak circulate belum.`,
          bantuan         : [
            'Jika siswa tidak bisa menulis satu kalimat: ucap "Just write the name of the text. Then one word — how do you feel? Interesting? Surprising? Funny?"',
            'Jika siswa ingin ganti pilihan setelah menulis: boleh. Coret dan tulis ulang.',
          ],
          cue             : '"Don\'t talk yet" — mencegah siswa mengikuti pilihan pasangan sebelum berkomitmen sendiri. Choice Slip adalah komitmen tertulis.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact: {
            type                    : 'choice_slip',
            fields                  : ['teks_pilihan', 'kalimat_pertama'],
            required_before_interact: true,
          },
        },

        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Demo singkat sebelum pair work — maksimal 30 detik.
👂 LISTEN FIRST — kelas perhatikan.
Guru tunjuk Choice Slip imajiner sendiri, bicara ke satu siswa di depan:
UCAP: "I chose the announcement. I will write: 'I think it is interesting because...' — What did YOU choose?"
→ Siswa menjawab dari Choice Slip mereka.
→ Guru: "Good. Now ask me: why did I choose it?"
→ Siswa bertanya: "Why?"
→ Guru: "Because I like books." — satu kalimat. Selesai.
UCAP: "That is pair sharing. Now — with your partner."

AKSI: Siswa bekerja berpasangan.
UCAP: "Show your Choice Slip. Read it to your partner."
UCAP: "Partner: ask one question — 'Why did you choose that?' or 'What did you find interesting?'"
→ Siswa pertama menjawab dari Choice Slip dan alasan mereka. Lalu peran berganti.
→ Waktu total: 4 menit.

AKSI: Guru circulate dan dengarkan.`,
          bantuan         : 'Jika pasangan tidak bertanya dan hanya menunjukkan Choice Slip satu sama lain: ucap ke pair tersebut: "Ask: \'Why did you choose that?\'" Tunggu siswa bertanya sebelum pergi.',
          cue             : 'Choice gap ini nyata karena setiap siswa sudah berkomitmen di Choice Slip SEBELUM mendengar pilihan pasangan. Jika pilihan berbeda — ada information gap. Jika pilihan sama — ada opinion gap.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas.
2. Tunjuk satu pasangan di depan. Demo ulang: baca isi Choice Slip satu siswa keras-keras, siswa lain tanya "Why?"
3. Sederhanakan: "Just read your Choice Slip to your partner. That is enough."
4. Restart pair work — batasi 60 detik per arah.`,
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
          teks            : `AKSI: Setelah pair sharing selesai.
UCAP: "Who wants to share — which text did you choose?"
→ Terima 2–3 siswa secara sukarela. Masing-masing sebut nama teks dan SATU kata alasannya.
→ Setelah setiap siswa berbagi: tunjuk judul teks di pojok papan. Guru angguk.

UCAP: "Different choices. All valid. Now — write."
→ Lanjut langsung ke L8 tanpa transisi panjang.`,
          bantuan         : null,
          cue             : 'L7 hanya ada jika ada waktu — tujuannya membangun rasa bahwa variasi pilihan adalah normal. Jangan tunda writing lebih lama dari yang perlu.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 20 menit sebelum akhir sesi',
          blok            : 'INTERACT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Brief 3 baris dan empat judul tetap tampil di papan.
UCAP: "Now — write. Use your Choice Slip as your starting point."
UCAP: "Write your response. What YOU think. What YOU find interesting."
→ Jeda.
UCAP: "Three sentences minimum. Your way."
→ Siswa menulis secara individual. Waktu: 8–10 menit.
→ Beri waktu 3 menit start sebelum circulate — jangan intervensi saat siswa baru mulai.

AKSI: Circulate setelah 3 menit.
→ Mulai dari barisan belakang.
→ Perhatikan dua hal:
   1. Respons atau ringkasan? ("I think..." adalah respons. "The story is about..." adalah ringkasan.) Jika siswa meringkas: dekati, bisik "What do YOU think about it?" Tunggu siswa menulis. Tinggalkan.
   2. Output bisa selesai tanpa menyalin teks asli? Jika siswa menyalin verbatim: dekati, tunjuk Choice Slip mereka, bisik "Your words — not the text's words."`,
          bantuan         : [
            'Jika siswa freeze: tunjuk Choice Slip mereka, ucap "Start with your first line here — write it." Tunggu satu kalimat ditulis. Tinggalkan.',
            'Jika siswa bertanya "Apa artinya \'respond\'?": ucap dalam bahasa Indonesia jika perlu — "Tulis apa yang kamu pikirkan tentang teks itu. Pendapatmu sendiri."',
          ],
          cue             : '"I choose..." dan "I think..." adalah dua pembuka yang paling natural untuk respons teks. Siswa yang kesulitan memulai seringkali mencari kalimat yang "benar" — padahal tidak ada benar atau salah.',
          darurat         : '⚠ DARURAT — waktu ≤ 5 menit dan sebagian besar siswa baru menulis 1 kalimat:\nUcap: "Two sentences — enough. One: which text you chose. Two: one thing you think about it."',
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
          teks            : `AKSI: Guru memberi sinyal untuk berhenti menulis.
UCAP: "Two more minutes. Read what you wrote."
→ Jeda — biarkan siswa membaca tulisannya sendiri secara diam.
UCAP: "Check: Is this YOUR response? Or is it a summary of the text?"
→ Jeda.
UCAP: "If you have three sentences — add one more. Use 'because' or 'but'."
UCAP: "If you have fewer than three — finish one more sentence first."

AKSI: Guru circulate — prioritaskan barisan tengah yang belum tersentuh di L8.

Diferensiasi:
- Perlu support: dekati siswa, ingatkan demo L4 secara lisan: "Remember: 'I think it is interesting because...' — try this with your text."
- Sudah bisa: bisik "Add one more sentence: 'I recommend this text because...' — your reason."`,
          bantuan         : 'Jika siswa tidak tahu harus menambah kalimat apa: ucap "What did you FEEL when you read it? Write that."',
          cue             : '"Is this YOUR response? Or is it a summary?" adalah self-check yang bisa dilakukan siswa secara mandiri.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'dekati siswa, ingatkan demo L4 secara lisan: "Remember: \'I think it is interesting because...\' — try this with your text."',
            sudahBisa   : 'bisik "Add one more sentence: \'I recommend this text because...\' — your reason."',
          },
          flex            : false,
          flex_kondisi    : null,
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l10',
          tipe            : 'instruksi',
          interaction_mode: 'peer_review',
          teks            : `AKSI: Siswa bertukar kertas dengan pasangan.
UCAP: "Read your partner's response. One minute. Silent."
→ Siswa membaca tulisan pasangan secara individual. Waktu: 1 menit.

UCAP: "Now — one sentence to your partner."
UCAP: "'I liked when you said...' or 'I want to know more about...'"
→ Siswa menyampaikan satu kalimat respons lisan ke pasangan. Lalu peran berganti.
→ Waktu: 30 detik per arah.`,
          bantuan         : 'Jika siswa tidak tahu harus bilang apa: ucap "Say one thing: \'I liked the part about...\' — one part."',
          cue             : 'Ini peer response, bukan peer correction. Tidak ada koreksi grammar. Fungsinya: siswa merasakan bahwa tulisan mereka dibaca dan direspons oleh orang nyata.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 8 menit',
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 11,

      langkah: [

        {
          id              : 'l11',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Siswa duduk di tempat masing-masing dengan tulisan di tangan.
UCAP: "Who wants to share? One sentence from your response. From your seat is fine."
→ Terima 2–3 sukarela. Masing-masing baca satu kalimat dari tulisannya.
→ Setelah setiap kalimat: tunjuk judul teks di pojok papan.
UCAP: "Which text? [sebut judul]."
→ Biarkan respons natural dari kelas muncul.`,
          bantuan         : 'Jika tidak ada yang sukarela: tunjuk 1–2 siswa yang tadi aktif di INTERACT. Ucap: "[Nama], can you share your first sentence?"',
          cue             : null,
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
          id              : 'l12',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berjalan pelan ke barisan yang belum sempat dikunjungi selama OUTPUT.
→ Lihat 2–3 tulisan siswa — tidak perlu komentar panjang.
→ Untuk tulisan yang sudah berupa respons personal: angguk atau ucap "Good."
→ Untuk tulisan yang masih berupa ringkasan: catat nama siswa untuk referensi TP17.`,
          bantuan         : null,
          cue             : null,
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika sudah circulate penuh di L8–L9',
          blok            : null,
          assessment_overlay: {
            recommended: true,
            priority   : 'barisan_belakang',
          },
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l13',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas.
UCAP: "Today — you chose."
→ Jeda.
UCAP: "You read four texts this month."
→ Tunjuk empat judul di pojok papan.
UCAP: "Today — you decided which one matters to you."
→ Jeda.
UCAP: "And you wrote why."
→ Jeda.
UCAP: "That is responding to text."
→ Jeda.
UCAP: "Keep your writing."
→ Jeda singkat.
UCAP: "Next time — we don't respond to someone else's text."
→ Jeda.
UCAP: "We give our own opinion. About things we see and think."
→ Preview TP17 secara natural — tanpa menyebut "TP17."
UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : '"You decided which one matters to you — and you wrote why." — validasi Panen yang konkret. "Next time — we give our own opinion" menutup Kluster D dan membuka Kluster E.',
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

export default tp_c16;
