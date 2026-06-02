/**
 * =============================================================
 * FLAF — TP C21 (Reading: Texts from the Real World)
 * File: docs/fase-c-skenario/tp-21-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 6)
 * Kluster: — (Capstone lintas kluster)
 * Jenis: Capstone
 * Source: flaf-c-tp21-v2.txt
 * Converted: Juni 2026
 * =============================================================
 *
 * Capstone pertama — siswa membaca empat teks dunia nyata
 * (poster, menu, jadwal, notice) dan merespons berdasarkan
 * pertanyaan kunci: "What does this text WANT you to do?"
 * =============================================================
 */

export const tp_c21 = {

  id        : 'tp-c21',
  nomor     : 21,
  kelas     : 6,
  nama      : 'Reading: Texts from the Real World',
  tema      : 'Capstone',
  kluster   : '—',
  jenis     : 'Capstone',
  deskripsi : `Capstone pertama dari dua. Lintas kluster.
Siswa membaca empat jenis teks dunia nyata: poster, menu, jadwal, notice.
Pertanyaan kunci satu untuk semua teks: "What does this text WANT you to do?"
Info gap: siswa ganjil (Teks A — Poster) berpasangan dengan siswa genap (Teks B — Menu).
Teks C (Jadwal) dan Teks D (Notice) ditampilkan di papan untuk seluruh kelas.`,

  indikator: [
    'Peserta didik dapat membaca empat jenis teks fungsional (poster, menu, jadwal, notice) dan mengidentifikasi PURPOSE masing-masing teks.',
    'Peserta didik dapat mendeskripsikan isi teks secara verbal ke pasangan dan menjawab pertanyaan spesifik.',
    'Peserta didik dapat menulis respons terhadap satu teks pilihan dalam tiga kalimat: jenis teks, isi/tujuan, dan opini personal.',
  ],

  vocab: [],

  persiapan: [
    'TEKS A — POSTER (cetak satu per siswa ganjil): ENGLISH READING COMPETITION / Open for all students — Class 4, 5, and 6 / Date: Saturday, 14 June 2025 / Time: 08.00 – 12.00 / Place: School Hall / No registration fee / Register before 10 June / See Mrs. Ani in the Teacher\'s Room',
    'TEKS B — MENU (cetak satu per siswa genap): WARUNG PAK HENDRA / Nasi goreng Rp 8.000 / Nasi uduk Rp 7.000 / Mie ayam Rp 9.000 / Soto ayam Rp 10.000 / Es teh manis Rp 3.000 / Jus buah Rp 5.000 / Air putih GRATIS / Open every day: 06.00 – 14.00',
    'TEKS C — JADWAL (tulis di papan saat L5): BUS SCHEDULE — Bandung to Cimahi / 05.30 / 07.00 / 09.00 / 12.00 / 15.00 / Student ticket (with ID): Rp 3.000 / Adult ticket: Rp 5.000 / Buy at station only. No ticket = no seat.',
    'TEKS D — NOTICE (tulis di papan saat L6): NOTICE — School Library / Library CLOSED: Monday 2 June and Tuesday 3 June / Reason: renovation / Books available in Room 7 during closure. / Open again: Wednesday, 4 June. / — Library Staff',
    'Distribusi Teks A dan B: Ganjil (row 1, row 2 atau nomor absen ganjil): Teks A. Genap (row 3, row 4 atau nomor absen genap): Teks B. Pastikan setiap pasangan INTERACT = satu siswa ganjil + satu siswa genap. Distribusi dilakukan di awal L3.',
  ],

  checklist: [
    'L1 reactivation: "Last time — you wrote. Your topic, your words. Who remembers one sentence?" — satu kalimat dari tulisan TP20; "Today — we read again. But different. Texts from outside this classroom." diucapkan setelah respons',
    'Distribusi teks: ganjil → Teks A (Poster), genap → Teks B (Menu) — DILAKUKAN DI L3, bukan sebelum kelas',
    'Pertanyaan kunci "What does this text WANT you to do?" digunakan di L3-L6 — bukan "What is the main idea?"',
    'L3 Poster: dua pertanyaan — "What does it want you to do?" dan "What information do you need?" — bukan comprehension quiz',
    'L4 Menu: pertanyaan scanning spesifik ("What is the cheapest item?") sebelum pertanyaan purpose',
    'L7 INTERACT: setiap pair = satu ganjil (Poster) + satu genap (Menu) — distribusi dipastikan sebelum pair work',
    'L7: B mengajukan minimal SATU pertanyaan konkret setelah mendengar cerita A',
    'L9 OUTPUT: kalimat ketiga adalah opini personal ("I think... because...") — bukan salinan teks',
    'BREAKPOINT ALAMI: "Stop here. Next time we start from Layar 7 — sharing your text with a partner."',
    'Closure L14: "Next time — last time. Everything. You will show what you know." — verbatim',
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
    'L8 🟡',
    'L9 🔵',
    'L10 🔵',
    'L11 🔵',
    'L12 🟡',
    'L13 🟡',
    'L14 🔵',
  ],

  catatan: {
    risiko: [
      'L3-L4: Risiko pertanyaan berkembang menjadi comprehension quiz. Satu pertanyaan purpose + satu pertanyaan fungsional per teks — stop.',
      'Distribusi L3: Jika teks fisik belum siap, tulis Teks A di papan untuk seluruh kelas — siswa ganjil membaca dari papan dan menghafal satu detail.',
      'L7: Risiko B membaca teks A secara langsung tanpa bertanya.',
      'L9: Risiko kalimat ketiga adalah salinan teks, bukan opini. Kata kunci circulate: "In YOUR words — what do YOU think?"',
    ],
    autonomy: [
      'Teks A (Poster) dan Teks B (Menu) boleh diganti dengan teks yang lebih relevan secara lokal.',
      'Jika kelas tidak memiliki printer, semua teks boleh ditulis tangan atau di papan.',
      'Jika ada pasangan di mana keduanya ganjil atau keduanya genap: minta salah satu pindah.',
      'Guru boleh mengganti Teks C dan D dengan contoh lokal yang lebih relevan.',
    ],
  },

  text_anchor    : null,
  connector_aktif: 'semua connector TP01–20 tersedia; tidak ada connector baru; because paling natural dalam respons opinion',
  recycle_fase_b : [
    'I think... because... (TP17/TP06 — respons opinion terhadap teks)',
    'There is / There are... (TP03 — saat mendeskripsikan isi teks)',
    'On [day]... / At [time]... (TP07 — saat membahas jadwal/waktu)',
  ],

  breakpoints: [
    {
      type             : 'breakpoint',
      id               : 'bp-tp-c21-1',
      kind             : 'natural',
      after_langkah_id : 'l6',
      resume_at        : 'l7',
      text             : 'Stop here. Next time we start from Layar 7 — sharing your text with a partner.',
      recommended      : true,
      persist_state    : true,
      preserve_context : {
        artifacts       : false,
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
    teks   : `Guru berdiri di depan kelas. Teks A dan B sudah disiapkan di tangan guru (belum dibagi).

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut.
UCAP: "Today — we read. Different texts. From the real world."
→ Tunjuk tumpukan Teks A dan B di tangan guru. Tidak perlu diterjemahkan. Lanjut ke L1.`,
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
          teks            : `AKSI: Guru berdiri di depan kelas tanpa menunjukkan teks.
UCAP: "Last time — you wrote. Your topic, your words."
→ Jeda.
UCAP: "Who remembers one sentence?"
→ Tunggu SATU siswa menyebut kalimat dari tulisan TP20.
→ Guru angguk dan terima. Satu siswa sudah cukup.
UCAP: "Today — we read again. But different."
→ Jeda.
UCAP: "Texts from outside this classroom."
→ Tunjuk tumpukan teks di tangan guru.
→ Lanjut ke L2.`,
          bantuan         : 'Jika tidak ada yang merespons dalam 10 detik: ucap "Last time you wrote about something you know — who remembers one word?" Tunggu satu kata.',
          cue             : 'Reactivation mengaktifkan kalimat produksi dari TP20 Panen. Bridge ke "texts from outside this classroom" memberi tahu siswa bahwa hari ini berbeda dari semua TP sebelumnya.',
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
          teks            : `UCAP: "Today — four kinds of texts."
→ Tuliskan di sudut papan: "Poster · Menu · Schedule · Notice"
UCAP: "You see these texts every day. Outside this classroom."
→ Jeda.
UCAP: "For each text — one question."
→ Tulis di papan (atau ucap dengan jelas):
"What does this text WANT you to do?"
→ Jeda.
UCAP: "That is the most important question for real-world texts."
→ Jeda singkat.
UCAP: "Let's start."
→ Lanjut ke L3.`,
          bantuan         : null,
          cue             : '"What does this text WANT you to do?" adalah pertanyaan universal untuk semua teks dunia nyata. Pertanyaan ini diperkenalkan di L2 dan dipakai kembali di L3–L6.',
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
      durasi: 51,

      langkah: [

        // L3 — Teks 1: Poster  [INPUT · CORE]
        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Bagikan Teks A ke siswa bernomor ganjil. Tampilkan Teks A di papan untuk seluruh kelas.
UCAP: "Ganjil — this is your text. Read it carefully."
UCAP: "Genap — read the board."
→ Siswa membaca. Waktu: 1 menit.

UCAP: "What does this POSTER want you to do?"
→ Tunggu respons: "Join the competition!" / "Register before June 10!" / "Go to the school hall!"
UCAP: "And what information do you need to know first before you can join?"
→ "When?" / "Where?" / "Who can join?" / "Is it free?"
→ Terima 2–3 respons. Guru angguk.

UCAP: "A poster wants you to DO something. It gives you what you need to know."
→ Satu kalimat. Stop.`,
          bantuan         : 'Jika siswa kesulitan menjawab: tunjuk bagian judul poster ("ENGLISH READING COMPETITION"), ucap "What is this about? And — what should you do?" Tunggu satu kata.',
          cue             : 'Dua pertanyaan ("What does it want you to do?" dan "What information do you need?") mengarahkan siswa ke PURPOSE teks, bukan ke fakta individual.',
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

        // L4 — Teks 2: Menu  [INPUT · CORE]
        {
          id              : 'l4',
          tipe            : 'instruksi',
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Bagikan Teks B ke siswa bernomor genap. Tampilkan Teks B di papan untuk seluruh kelas.
UCAP: "Genap — this is your text. Read it carefully."
UCAP: "Ganjil — read the board."
→ Siswa membaca. Waktu: 1 menit.

UCAP: "What is the cheapest item on this menu?"
→ Tunggu: "Air putih — it's free!" / "Es teh — Rp 3.000!"
UCAP: "Good. And what does this MENU want you to do?"
→ "Buy something!" / "Come to the warung!" / "Choose what to eat!"
→ Terima 2–3 respons.

UCAP: "A menu gives you information so you can decide what to buy."
→ Satu kalimat. Stop.`,
          bantuan         : 'Jika siswa tidak tahu bagaimana membaca menu: tunjuk kolom harga, ucap "Find the smallest number here."',
          cue             : '"What is the cheapest item?" adalah pertanyaan scanning — siswa harus LOOK FOR informasi spesifik, bukan membaca seluruh teks.',
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

        // L5 — Teks 3: Jadwal  [INPUT · FLEX]
        {
          id              : 'l5',
          tipe            : 'instruksi',
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Tulis atau tampilkan Teks C (JADWAL) di papan.
UCAP: "Read this schedule. One minute."
→ Seluruh siswa membaca. Waktu: 1 menit.

UCAP: "When does the first bus leave?"
→ Tunggu: "05.30!"
UCAP: "And what does this schedule WANT you to do?"
→ "Plan your trip!" / "Know when to go!" / "Buy a ticket!"

UCAP: "A schedule gives you times so you can plan."
→ Satu kalimat. Stop.`,
          bantuan         : null,
          cue             : 'Jadwal dengan kolom waktu adalah format yang berbeda dari narasi atau daftar. Tunjuk kolom waktu secara eksplisit jika siswa tampak bingung dengan format.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 20 menit sebelum akhir sesi',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L6 — Teks 4: Notice  [INPUT · FLEX]
        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Tulis atau tampilkan Teks D (NOTICE) di papan.
UCAP: "Read this notice. One minute."
→ Seluruh siswa membaca. Waktu: 1 menit.

UCAP: "Who is this notice for?"
→ Tunggu: "Students!" / "People who want to use the library!"
UCAP: "And what does this notice WANT you to know?"
→ "The library is closed!" / "Go to Room 7 instead!"

UCAP: "A notice tells you something important — so you can change your plan."
→ Satu kalimat. Stop.`,
          bantuan         : null,
          cue             : 'Notice adalah satu-satunya teks dari empat yang mengandung instruksi alternatif ("go to Room 7"). Ini menunjukkan bahwa real-world texts sering memberi solusi bersama dengan informasinya.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 16 menit sebelum akhir sesi',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L7 — INFO GAP: A Cerita Teks, B Bertanya  [INTERACT · CORE]
        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Pastikan setiap pasangan = satu siswa ganjil (Teks A — Poster) + satu siswa genap (Teks B — Menu).

Demo — maksimal 45 detik:
👂 LISTEN FIRST — kelas perhatikan.
Guru (sebagai A) memegang Teks A, berbicara ke satu siswa genap:
UCAP: "My text is a poster. It is about an English Reading Competition. It is on Saturday, 14 June. You need to register before June 10. It's free."
→ Guru ke siswa: "What question do you have?"
→ Siswa: "Where is it?" / "Who can join?"
→ Guru: [cek teks] "It is in the school hall. Any student in class 4, 5, or 6 can join."
→ Guru ke kelas: "That is the info gap. B asks — A answers from the text."
UCAP: "Now — with your partner. A goes first."

AKSI: Siswa bekerja berpasangan — Ronde 1 (A cerita, B bertanya) lalu Ronde 2 (B cerita, A bertanya).
UCAP: "A — show or describe your poster. What is it? What does it want you to do?"
UCAP: "B — listen. Then ask ONE question that is specific."
UCAP: "A — answer from your text."
UCAP: "Then swap."
→ Total: 6–7 menit (3 menit per arah).

AKSI: Guru circulate.
→ Apakah B bertanya pertanyaan spesifik? ("Is there a fee?" setelah cerita poster = relevant.)
→ Apakah A menjawab dari teks, bukan dari tebakan?`,
          bantuan         : [
            'Jika B tidak tahu harus bertanya apa: bisik "Ask about the details — time? price? place? who can join?"',
            'Jika A tidak tahu cara mendeskripsikan teks: ucap "Start with: \'This is a [poster/menu].\' Then: what does it say?"',
          ],
          cue             : 'Siswa A boleh menunjukkan teks mereka saat bercerita. Yang wajib: B harus mengajukan minimal satu pertanyaan konkret. B tidak boleh hanya mengambil teks A dan membacanya sendiri.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas.
2. Demo ulang: guru mendeskripsikan poster dalam satu kalimat. Satu siswa bertanya "What time does it start?"
3. Sederhanakan: "A — say ONE thing your text says. B — ask about that thing."
4. Restart — batasi 2 menit per arah.`,
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
            gap_type         : 'information',
            artifact_required: false,
            artifact_type    : null,
            collapse_signal  : 'pair diam > 90 detik',
          },
          artifact: null,
        },

        // L8 — Kelas: Teks Mana yang Paling Berguna?  [INTERACT · FLEX]
        {
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `UCAP: "Quick question — which text was most useful for you?"
→ Tunjuk: "Poster? Menu? Schedule? Notice?"
→ Terima 3–4 respons spontan dari kelas: "Which one? Why?"
→ Tidak ada jawaban benar/salah. Terima semua respons, angguk.

UCAP: "Different texts — different uses. Now — write."
→ Transisi ke OUTPUT.`,
          bantuan         : null,
          cue             : null,
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 15 menit sebelum akhir sesi',
          blok            : 'INTERACT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L9 — Pilih Satu Teks + Tulis Respons  [OUTPUT · CORE]
        {
          id              : 'l9',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `UCAP: "Now — choose ONE text. The one you found most interesting."
UCAP: "Write three things:"
UCAP: "One: what kind of text it is."
UCAP: "Two: what it says — what does it want you to do?"
UCAP: "Three: what do YOU think about it. Use 'because'."
→ Jeda.
UCAP: "Three sentences. Your words — not the text's words."
→ Siswa memilih teks dan mulai menulis. Waktu: 7 menit.
→ Beri waktu 3 menit sebelum circulate.

AKSI: Circulate setelah 3 menit.
→ Mulai dari barisan belakang.
→ Perhatikan dua hal:
   1. Apakah ini respons atau salinan verbatim teks? Jika menyalin: bisik "In your words — what does this text WANT you to do?"
   2. Apakah ada kalimat personal ("I think... because...")? Jika hanya dua kalimat fakta: catat untuk L10.`,
          bantuan         : [
            'Jika siswa freeze: ucap "What kind of text is this? Write that first — \'This is a [poster/menu]\'."',
            'Jika siswa tidak bisa menulis kalimat ketiga (opini): ucap "What do YOU think? \'I think... because...\'"',
          ],
          cue             : 'Perbedaan antara respons dan salinan: menyalin = "No registration fee. Register before 10 June." Merespons = "This poster wants students to join a competition. I think it is a good idea because it helps us practice English."',
          darurat         : '⚠ DARURAT — waktu ≤ 5 menit dan sebagian besar siswa baru menulis 1 kalimat:\nUcap: "Two sentences — enough. What kind of text. What it says. Write those two."',
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

        // L10 — Revisi + Pertanyaan Kunci  [OUTPUT · CORE]
        {
          id              : 'l10',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Guru memberi sinyal untuk berhenti menulis.
UCAP: "Two more minutes. Read your response."
→ Jeda.
UCAP: "Check: is sentence three YOUR opinion? Not the text's words?"
→ Jeda singkat.
UCAP: "Did you use 'because'? If not — add it now."

AKSI: Circulate — barisan tengah yang belum tersentuh di L9.

Diferensiasi:
- Perlu support: tunjuk kalimat terakhir siswa, bisik "This is what the text says. But what do YOU think about it? Start with 'I think...'"
- Sudah bisa: bisik "Can you add: what will you DO because of this text? 'I will...' or 'I want to...'"`,
          bantuan         : 'Jika siswa tidak bisa menambah 'because': ucap "Why do you think that? Add: because..." Satu kata, tinggalkan.',
          cue             : '"I will join the competition." / "I want to go to Warung Pak Hendra." / "I will take the 07.00 bus." — kalimat-kalimat ini membuktikan bahwa siswa memahami PURPOSE teks.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'tunjuk kalimat terakhir siswa, bisik "This is what the text says. But what do YOU think about it? Start with \'I think...\'"',
            sudahBisa   : 'bisik "Can you add: what will you DO because of this text? \'I will...\' or \'I want to...\'"',
          },
          flex            : false,
          flex_kondisi    : null,
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L11 — Peer Quick Read  [OUTPUT · FLEX]
        {
          id              : 'l11',
          tipe            : 'instruksi',
          interaction_mode: 'peer_review',
          teks            : `AKSI: Siswa bertukar kertas dengan pasangan.
UCAP: "Read your partner's response. One minute. Silent."
→ Siswa membaca. Waktu: 1 menit.

UCAP: "Tell your partner: 'I understand your text. It wants you to...' — complete the sentence."
→ Masing-masing melengkapi kalimat ke pasangan. Berganti.
→ Waktu: 30 detik per arah.`,
          bantuan         : 'Jika siswa tidak bisa melengkapi kalimat: ucap "Read sentence two again — that should answer it." Tunjuk kalimat kedua respons pasangan.',
          cue             : '"I understand your text. It wants you to..." adalah verifikasi bahwa respons siswa sudah menyampaikan PURPOSE teks dengan cukup jelas.',
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
          id              : 'l12',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Siswa duduk di tempat masing-masing dengan tulisan di tangan.
UCAP: "Who wants to share? One sentence from your response. From your seat."
→ Terima 2–3 sukarela. Masing-masing baca satu kalimat.
→ Setelah setiap kalimat: UCAP "Which text? Poster? Menu? Schedule? Notice?"
→ Kelas merespons spontan.`,
          bantuan         : 'Jika tidak ada sukarela: tunjuk 1–2 siswa yang tadi aktif di INTERACT.',
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
          id              : 'l13',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berjalan ke barisan yang belum sempat dikunjungi.
→ Lihat 2–3 tulisan yang belum terbaca — fokus pada kalimat ketiga (opini personal).
→ Untuk respons yang sudah punya opini personal: angguk atau ucap "Good."
→ Untuk respons yang masih dua kalimat fakta: catat untuk referensi TP22.`,
          bantuan         : null,
          cue             : null,
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika sudah circulate penuh di L9–L10',
          blok            : null,
          assessment_overlay: {
            recommended: true,
            priority   : 'barisan_belakang',
          },
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l14',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas.
UCAP: "Today — you read four texts."
→ Jeda.
UCAP: "Posters. Menus. Schedules. Notices."
→ Jeda.
UCAP: "You found what each text wants you to do."
→ Jeda.
UCAP: "These are texts from your world."
→ Jeda.
UCAP: "You will see them again — outside this classroom."
→ Jeda singkat.
UCAP: "Next time — last time."
→ Jeda.
UCAP: "Everything."
→ Jeda.
UCAP: "You will show what you know."
→ Preview TP22 tanpa menyebut format atau nama TP.
UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : '"You will see them again — outside this classroom." menutup TP21 dengan memperluas makna sesi ke dunia nyata. "Last time. Everything. You will show what you know." membuka TP22 dengan sense of occasion.',
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

export default tp_c21;
