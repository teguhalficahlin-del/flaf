/**
 * =============================================================
 * FLAF — TP C18 (Telling a Past Experience)
 * File: docs/fase-c-skenario/tp-18-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 6)
 * Kluster: E — Memproduksi untuk Orang Lain
 * Jenis: Kompleks
 * Source: flaf-c-tp18-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c18 = {

  id        : 'tp-c18',
  nomor     : 18,
  kelas     : 6,
  nama      : 'Telling a Past Experience',
  tema      : 'Memproduksi untuk Orang Lain',
  kluster   : 'E',
  jenis     : 'Kompleks',
  deskripsi : `TP Kompleks pertama di Kluster E.
Pertama kalinya siswa menceritakan pengalaman PRIBADI dalam past tense (TP15 tentang Budi fiksi).
Info gap natural: B benar-benar tidak tahu apa yang terjadi pada A.
Lima pasangan past tense di papan pojok sebagai referensi praktis.
Kriteria Kompleks: past tense production dari pengalaman pribadi, outline + writing + INTERACT, integrasi tiga skill di L7.`,

  indikator: [
    'Peserta didik dapat menceritakan pengalaman pribadi di masa lalu dalam minimal empat kalimat menggunakan past tense.',
    'Peserta didik dapat menggunakan connector then dan and dalam narasi pengalaman pribadi.',
    'Peserta didik dapat menceritakan pengalaman pribadi secara verbal ke pasangan dan menjawab pertanyaan spesifik dari pasangan.',
  ],

  vocab: ['market', 'vegetables', 'fruit', 'experience', 'remember'],

  persiapan: [
    'Text-anchor di papan (ditulis sebelum kelas masuk, tetap tampil selama sesi): "Last week I went to the market with my mother. We bought vegetables and fruit."',
    'Lima pasangan past tense di pojok papan (ditulis saat L3 atau disiapkan tertutup sebelum kelas masuk — dibuka saat L3): "went — go · bought — buy · ate — eat · saw — see · met — meet" — Tetap tampil sampai akhir sesi.',
    'Kertas outline: satu lembar kecil per siswa atau sudut buku tulis — digunakan di L6 untuk menulis 2–3 kalimat sebelum INTERACT.',
  ],

  checklist: [
    'L1 reactivation: "Last time — you gave your opinion. Who remembers one sentence?" — satu kalimat dari tulisan TP17 siswa; "Today — not what you think. What happened. Something you remember." diucapkan setelah respons',
    'L3 past tense noticing: LIMA pasangan ditulis/dibuka di pojok papan; "This happened last week — past." diucapkan sebelum kelima pasangan; tiga kalimat konteks setelahnya, stop',
    'Lima pasangan tetap di pojok papan sepanjang sesi — referensi untuk outline (L6), INTERACT (L7), dan writing (L9–L10)',
    'L4 demo: guru menceritakan pengalaman BERBEDA dari anchor (bukan pasar, bukan Budi) — lisan only, tidak ditulis di papan',
    'L6 outline: "Don\'t talk yet. Write first." diucapkan eksplisit; siswa menulis 2–3 kalimat SEBELUM INTERACT L7',
    'L7 demo: guru jadi siswa B, menunggu siswa A selesai bercerita BARU bertanya — pertanyaan muncul dari mendengar',
    'L7: kedua arah dicakup dalam satu layar (A→B, lalu B→A) sebelum waktu habis',
    'Koreksi past tense: selalu bisikan satu kata + tunjuk papan pojok — TIDAK ADA koreksi publik',
    'L9 circulate: dimulai setelah 3 menit — barisan belakang diprioritaskan',
    'Closure L13: "Next time — not what happened. What it looks like. A place. Or something you know." — verbatim',
  ],

  printables: [],

  energi_map: [
    'L0 ⚪',
    'L1 🟡',
    'L2 🟡',
    'L3 🟡',
    'L4 🟡',
    'L5 🟡',
    'L6 🔵',
    'L7 🟡',
    'L8 🟡',
    'L9 🔵',
    'L10 🔵',
    'L11 🔵',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L3: Risiko past tense noticing merayap jadi grammar lesson. Lima pasangan, tiga kalimat konteks — stop.',
      'L6: Risiko outline terlalu panjang. Batasi dengan instruksi "two to three sentences".',
      'L7: Risiko INTERACT collapse jika B tidak mengajukan pertanyaan relevan — sinyal B tidak mendengarkan.',
      'L9: Risiko present tense sepenuhnya dalam tulisan — sangat umum di TP18. Tunjuk papan, bisik satu kata, tinggalkan.',
    ],
    autonomy: [
      'Cerita demo guru di L4 boleh disesuaikan dengan pengalaman yang lebih relevan untuk konteks lokal.',
      'Lima pasangan past tense di papan boleh ditambah SATU verba jika banyak siswa membutuhkan.',
      'Guru boleh membiarkan siswa yang sudah lancar past tense untuk langsung mulai L9 writing.',
      'Jika cerita siswa di L7 muncul dalam bahasa Indonesia: biarkan konsep terbentuk, lalu bantu transisi ke English.',
    ],
  },

  text_anchor    : 'Last week I went to the market with my mother. We bought vegetables and fruit.',
  connector_aktif: 'and · then — natural dalam sekuens narasi · because, but, so — semua aktif dari TP17, available untuk elaborasi; tidak ada connector baru',
  recycle_fase_b : [
    'Yesterday I... / Last week I... (TP05)',
    'We went / We bought — pola We [verb]-ed dari They live / They eat (TP09)',
    'first, then, after that (TP06) — sequencing narasi',
    'On [day] I... (TP07) — "On Sunday I went..." available di produksi siswa',
  ],

  breakpoints: [],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Text-anchor sudah tampil di papan.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut.
UCAP: "Today — a story. Your story."
→ Tunjuk text-anchor di papan. Tidak perlu diterjemahkan. Lanjut ke L1.`,
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
UCAP: "Last time — you gave your opinion."
→ Jeda.
UCAP: "Who remembers one sentence?"
→ Tunggu SATU siswa menyebut kalimat dari tulisan TP17.
→ Guru angguk dan terima.
UCAP: "Today — not what you think."
→ Jeda.
UCAP: "What happened. Something you remember."
→ Tunjuk text-anchor di papan.
→ Lanjut ke L2.`,
          bantuan         : 'Jika tidak ada yang merespons dalam 10 detik: ucap "Last time you wrote \'I think...\' — who remembers one word after \'because\'?" Tunggu satu kata.',
          cue             : 'Reactivation mengaktifkan kalimat bermakna dari TP17. Bridge ke "what happened" memberi tahu siswa bahwa hari ini berbeda dari "pendapat".',
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
          teks            : `AKSI: Guru tunjuk text-anchor di papan.
UCAP: "Listen. This is a past experience."
👂 LISTEN FIRST — siswa mendengarkan dan membaca papan.
Baca perlahan: "Last week I went to the market with my mother. We bought vegetables and fruit."
→ Baca sekali lagi, lebih perlahan.

UCAP: "When did this happen?"
→ Tunggu: "Last week."
UCAP: "Who went?"
→ Tunggu: "I / the speaker."
UCAP: "What did they buy?"
→ Tunggu: "Vegetables and fruit."
→ Guru angguk.

UCAP: "This happened last week. It is finished. It is in the past."
→ Jeda.
UCAP: "Today — you will tell YOUR past experience. Something YOU remember."`,
          bantuan         : 'Jika siswa tidak bisa menjawab "What did they buy?": tunjuk kata "vegetables and fruit" di anchor.',
          cue             : 'Tiga pertanyaan (when, who, what) mengakses isi anchor tanpa grammar explanation. "Something YOU remember" menegaskan bahwa cerita yang dibutuhkan adalah milik siswa sendiri.',
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
      durasi: 47,

      langkah: [

        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru tunjuk "went" di anchor.
UCAP: "Went — that is 'go' in the past."
→ Tunjuk "bought."
UCAP: "Bought — that is 'buy' in the past."
→ Jeda.
UCAP: "This happened last week — past."

AKSI: Tulis atau buka lima pasangan di pojok papan:
"went — go · bought — buy · ate — eat · saw — see · met — meet"
→ Tunjuk lima pasangan satu per satu, ucapkan masing-masing SATU kali.
→ Tidak ada drill. Tidak ada tabel.

UCAP: "These are for your story."
UCAP: "When you went somewhere — went. When you ate — ate. When you saw something — saw."
→ Tiga kalimat konteks. Stop.

UCAP: "What did YOU do last week? One thing. Say it."
→ Tunggu 2–3 siswa merespons spontan — masing-masing satu kalimat.
→ Jika past tense dipakai: angguk lebih kuat. Jika present tense: tunjuk papan pojok, ucap "Past?" satu kata.`,
          bantuan         : 'Jika siswa menjawab dengan present tense ("Last week I go to..."): ucap satu kata — "Went." Tunggu siswa mengulang.',
          cue             : 'Lima pasangan di pojok papan bukan wall grammar — ini referensi praktis. Tunjuk papan saat circulate jika siswa lupa bentuk.',
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
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru tunjuk pojok papan dengan lima pasangan.
UCAP: "Watch me. I tell my past experience."
→ Guru tidak menulis apapun. Demo lisan sepenuhnya.

👂 LISTEN FIRST — siswa mendengarkan.
UCAP (perlahan, natural, bukan membaca):
"Last Saturday, I went to a restaurant with my family."
→ Jeda.
"We ate noodles. It was delicious."
→ Jeda.
"I also saw my old friend there. We talked for a long time."
→ Jeda.
"I was happy because I had not seen her for a long time."
→ Jeda.

UCAP: "Four sentences. When — what I did — what I saw — how I felt."
→ Tunjuk empat jari secara berurutan.

UCAP: "Now — think. What is YOUR experience? Last week? Last weekend?"
→ Jeda 5 detik. Biarkan siswa berpikir diam-diam.`,
          bantuan         : 'Jika siswa langsung bertanya "Boleh cerita tentang sekolah?": jawab "Yes — any experience. Last week, last weekend, last holiday."',
          cue             : 'Demo menggunakan cerita BERBEDA dari anchor (bukan pasar, bukan Budi) — restoran dan teman lama. Demo lisan only — tidak ditulis di papan.',
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
          interaction_mode: 'teacher_input',
          teks            : `UCAP: "Your turn. One sentence. What did you do last week?"
→ Tunggu 3–4 siswa merespons — masing-masing satu kalimat.
→ Guru angguk. Jika past tense muncul: angguk lebih kuat.
→ Jika present: tunjuk pojok papan, ucap "Past?" — biarkan siswa koreksi sendiri.

UCAP: "Good. Now — write your outline."
→ Lanjut ke L6.`,
          bantuan         : null,
          cue             : 'Ini rehearsal lisan sebelum outline writing — bukan INTERACT. Jika kelas sudah aktif sejak L3–L4, lewati layar ini.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika kelas sudah spontan merespons dengan past tense di L3 atau L4',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `UCAP: "Now — write your outline."
UCAP: "Two to three sentences. Your past experience."
UCAP: "What happened. Who was there. What you did or saw."
UCAP: "Use the verbs from the board."
→ Tunjuk pojok papan dengan lima pasangan.
UCAP: "Don't talk yet. Write first."
→ Siswa menulis. Waktu: 3–4 menit.
→ Guru circulate diam-diam:
   - Siswa yang menulis lancar → siap INTERACT.
   - Siswa yang menatap kertas kosong → nudge konten: bisik "What did you eat last week? Or where did you go? Write that."
   - Siswa yang menulis dalam present tense → tunjuk papan pojok, bisik "Past — went."`,
          bantuan         : [
            'Jika siswa tidak bisa menulis dua kalimat: ucap "Write ONE sentence first — just where you went: \'Last week I went to...\'" Tunggu satu kalimat.',
            'Jika siswa tidak ingat pengalaman khusus: bisik "What did you eat for dinner this week? Write that."',
          ],
          cue             : 'Outline ini adalah FONDASI INTERACT L7. Tanpa outline, info gap collapse. "Don\'t talk yet. Write first." adalah instruksi yang tidak boleh dilanggar.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Demo — maksimal 60 detik.
👂 LISTEN FIRST — kelas perhatikan.
Guru minta satu siswa di depan. Guru jadi siswa B.
UCAP ke siswa: "Read your outline to me. Tell me what happened."
→ Siswa membacakan outline mereka.
→ Guru (sebagai B): bertanya satu pertanyaan yang muncul natural dari cerita siswa — contoh: "Oh — where exactly? / Who was with you? / What did you see there?"
→ Siswa menjawab satu kalimat.
→ Guru (ke kelas): "Did you see? I listened — then I asked. My question came from what they said."
UCAP: "Now — with your partner. A tells. B listens and asks."

AKSI: Siswa bekerja berpasangan — Ronde 1 (A bercerita) lalu langsung Ronde 2 (B bercerita).
UCAP: "A — read your outline. Tell your story."
UCAP: "B — listen. Then ask ONE question. A answers."
UCAP: "Then swap — B reads outline, A listens and asks."
→ Total waktu: 6–7 menit.

AKSI: Guru circulate dan dengarkan.
→ Perhatikan: apakah B mengajukan pertanyaan yang relevan terhadap isi cerita A?
→ Jika A bercerita dengan present tense: dekati, bisik "Past — what happened?"`,
          bantuan         : [
            'Jika B tidak tahu harus bertanya apa: bisik "Ask: \'Where did you go?\' or \'Who was with you?\'."',
            'Jika pair berbicara bahasa Indonesia: bisik "In English — one sentence. Start with \'Last week I...\'"',
          ],
          cue             : 'Pertanyaan B harus muncul dari MENDENGARKAN, bukan dari kartu pertanyaan. Gap ini nyata karena B benar-benar tidak tahu apa yang terjadi pada A.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas.
2. Demo ulang: minta satu siswa membaca kalimat pertama outlinenya keras-keras. Guru bertanya "Where was that?"
3. Sederhanakan: "A: read just your first sentence. B: ask one question."
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

        {
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `UCAP: "Find a new partner. Someone different."
→ Siswa berpindah pasangan.
UCAP: "Same activity — tell your story. Partner asks one question."
→ Ronde singkat: hanya satu arah (A→B saja, atau siapapun yang belum sempat bercerita di L7).
→ Waktu: 3–4 menit.
→ Guru circulate — fokus pada siswa yang di L7 tidak mendapat giliran atau terlihat kurang lancar.`,
          bantuan         : null,
          cue             : 'L8 memberi siswa kesempatan kedua untuk menceritakan pengalaman dengan lebih lancar. Gunakan L8 hanya jika ada waktu.',
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

        {
          id              : 'l9',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Text-anchor dan lima pasangan tetap tampil di papan.
UCAP: "Now — write. Your past experience. Full sentences."
UCAP: "Use your outline. Add more."
→ Jeda.
UCAP: "Four sentences minimum. What happened, who was there, what you did or saw."
UCAP: "Use past tense — check the board if you need."
→ Tunjuk pojok papan.
→ Siswa menulis secara individual. Waktu: 8 menit.
→ Beri waktu 3 menit start sebelum circulate.

AKSI: Circulate setelah 3 menit.
→ Mulai dari barisan belakang.
→ Present vs past tense: jika present ("I go to..."), tunjuk papan pojok, bisik satu kata ("Past — went."). Tinggalkan.
→ Jumlah kalimat: jika kurang dari dua kalimat setelah 5 menit, tunjuk outline — ucap "Write sentence two from here."`,
          bantuan         : [
            'Jika siswa freeze: tunjuk outline mereka, ucap "Write your first sentence from here. Exactly this."',
            'Jika siswa menulis dalam present tense sepenuhnya: tunjuk kalimat pertama, tunjuk papan verba, bisik "Here — past form."',
          ],
          cue             : '"Check the board if you need" menormalisasi penggunaan papan pojok sebagai alat, bukan sebagai tanda kelemahan.',
          darurat         : '⚠ DARURAT — waktu ≤ 5 menit dan sebagian besar siswa baru menulis 1 kalimat:\nUcap: "Three sentences — enough. Where you went. What you did. How you felt. Write those three."',
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
          id              : 'l10',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Guru memberi sinyal untuk berhenti menulis.
UCAP: "Two more minutes. Read your story."
→ Jeda — biarkan siswa membaca tulisannya sendiri.
UCAP: "Check — did you use past tense? Look at the board if you need."
→ Jeda.
UCAP: "Add one connector — 'then', 'and', 'because', or 'so'."
→ Jeda singkat.

AKSI: Circulate — prioritaskan barisan tengah yang belum tersentuh di L9.

Diferensiasi:
- Perlu support: tunjuk satu kata present tense dalam tulisan siswa, tunjuk pasangan di papan pojok, bisik "Change this — past."
- Sudah bisa: bisik "Add how you felt — 'I was happy because...' Or add one more detail: 'Then I also saw...'"`,
          bantuan         : 'Jika siswa tidak bisa menemukan connector yang pas: ucap "Add \'then\' between two sentences — \'First I went... then I saw...\'"',
          cue             : '"How did you feel? \'I was happy because...\'" mendorong connector 'because' dan ekspresi emosi — momen di mana past tense narrative bertemu dengan opini dari TP17.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'tunjuk satu kata present tense dalam tulisan siswa, tunjuk pasangan di papan pojok, bisik "Change this — past."',
            sudahBisa   : 'bisik "Add how you felt — \'I was happy because...\' Or add one more detail: \'Then I also saw...\'"',
          },
          flex            : false,
          flex_kondisi    : null,
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l11',
          tipe            : 'instruksi',
          interaction_mode: 'peer_review',
          teks            : `AKSI: Siswa bertukar kertas dengan pasangan.
UCAP: "Read your partner's story. One minute. Silent."
→ Siswa membaca tulisan pasangan. Waktu: 1 menit.

UCAP: "Tell your partner: one thing that surprised you — or one question."
→ Masing-masing satu kalimat lisan ke pasangan. Lalu berganti.
→ Waktu: 30 detik per arah.`,
          bantuan         : 'Jika siswa tidak tahu harus bilang apa: ucap "Say: \'I want to know more about...\' or \'I didn\'t know you...\'."',
          cue             : 'Peer response untuk past experience berfokus pada ISI cerita, bukan koreksi grammar.',
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
      durasi: 8,

      langkah: [

        {
          id              : 'l12',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Siswa duduk di tempat dengan tulisan di tangan.
UCAP: "Who wants to share? One sentence from your story. From your seat."
→ Terima 2–3 sukarela. Masing-masing baca satu kalimat.
→ Setelah setiap kalimat: UCAP "When was that?" → siswa menjawab "Last week / last weekend / last holiday."`,
          bantuan         : 'Jika tidak ada yang sukarela: tunjuk 1–2 siswa yang tadi aktif di INTERACT.',
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
          teks            : `AKSI: Guru berdiri di depan kelas.
UCAP: "Today — you told a story."
→ Jeda.
UCAP: "In the past. In English."
→ Jeda.
UCAP: "Your story. Not Budi's."
→ Jeda.
UCAP: "You remembered something — and you told it."
→ Jeda.
UCAP: "Keep your writing."
→ Jeda singkat.
UCAP: "Next time — not what happened."
→ Jeda.
UCAP: "What it looks like. A place. Or something you know."
→ Preview TP19 tanpa menyebut "TP19" atau "deskripsi."
UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : '"Your story. Not Budi\'s." — satu kalimat yang merayakan pergeseran dari TP15 (cerita Budi, fiksi) ke TP18 (cerita siswa sendiri, nyata).',
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

export default tp_c18;
