/**
 * =============================================================
 * FLAF — TP C17 (Giving My Opinion)
 * File: docs/fase-c-skenario/tp-17-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 6)
 * Kluster: E — Memproduksi untuk Orang Lain
 * Jenis: Biasa
 * Source: flaf-c-tp17-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c17 = {

  id        : 'tp-c17',
  nomor     : 17,
  kelas     : 6,
  nama      : 'Giving My Opinion',
  tema      : 'Memproduksi untuk Orang Lain',
  kluster   : 'E',
  jenis     : 'Biasa',
  deskripsi : '',

  indikator: [
    'Peserta didik dapat mengungkapkan pendapat tentang satu topik dalam minimal tiga kalimat menggunakan pola I think... because... / But... / So...',
    'Peserta didik dapat menggunakan connector because dan but (fokus produksi kembali aktif) serta so (fokus produksi pertama kali).',
    'Peserta didik dapat merespons pendapat pasangan dengan agree/disagree + alasan menggunakan connector.',
  ],

  vocab: [],

  persiapan: [
    'Text-anchor di papan (ditulis sebelum kelas masuk, tetap tampil selama sesi): "I think football is fun because it is good for our health. But I also like reading."',
    'Empat topik di pojok papan (ditambahkan sebelum L5, tetap tampil sampai L10): "Football · Reading · Cooking · Swimming"',
  ],

  checklist: [
    'L1 reactivation: "Last time — you responded to a text. Who remembers one sentence from their response?" — satu kalimat dari tulisan TP16 siswa; bridge ke "Your own opinion." sudah diucapkan sebelum tunjuk anchor',
    'L2: text-anchor dibaca dua kali — pertama LISTEN FIRST, kedua dengan dua micro-output questions; "Not everyone agrees" diucapkan untuk validasi disagreement',
    'L3: "I don\'t like running in hot weather, so I prefer swimming." — satu kalimat, tidak dikomentari lebih lanjut; noticing "so — the result" hanya jika momen natural muncul',
    'L5: siswa menulis satu kalimat opini dengan because SEBELUM pair sharing — "Don\'t talk yet" diucapkan eksplisit',
    'L6 demo: A state opinion → B respond (agree/disagree + because/but/so) — maksimal 40 detik',
    'L6: guru circulate dan perhatikan pair yang "agree semua" — nudge "Disagree a little? Why?" jika terjadi',
    'L8: circulate dimulai setelah 3 menit — barisan belakang diprioritaskan',
    'L9: diferensiasi dijalankan — "perlu support" → tambah because; "sudah bisa" → tambah so',
    'Closure L11: "Next time — not what you think. What happened. Something you remember." — diucapkan verbatim',
  ],

  printables: [],

  energi_map: [
    'L0 ⚪',
    'L1 🟡',
    'L2 🟡',
    'L3 🟡',
    'L4 🟠',
    'L5 🔵',
    'L6 🟠',
    'L7 🟡',
    'L8 🔵',
    'L9 🔵',
    'L10 🟡',
    'L11 🔵',
  ],

  catatan: {
    risiko: [
      'L3: Risiko connector explanation merayap menjadi grammar lesson. "Because — why. But — something different. So — the result." — tiga kalimat, stop.',
      'L6: Risiko "agree semua" — pair yang selalu setuju tanpa alasan genuine. Kata kunci guru saat circulate: "Disagree a little? Why?"',
      'L8: Risiko siswa menyalin text-anchor verbatim. Intervensi terbaik di L9, bukan saat L8 berlangsung.',
    ],
    autonomy: [
      'Empat topik di pojok papan boleh diganti dengan topik yang lebih relevan untuk konteks kelas.',
      'Kalimat contoh "so" di L3 boleh diganti dengan contoh yang lebih dekat dengan konteks lokal.',
      'Guru boleh memperpanjang L6 sampai 8 menit jika pair exchange terasa sangat aktif.',
      'Jika ada siswa yang memilih topik di luar daftar papan: valid.',
    ],
  },

  text_anchor    : 'I think football is fun because it is good for our health. But I also like reading.',
  connector_aktif: 'because — fokus produksi (kembali aktif setelah TP07) · but — fokus produksi (kembali aktif setelah TP07) · so — fokus produksi PERTAMA KALI (exposure sejak TP10); because dan but ada di text-anchor; so ditanam di model guru L3',
  recycle_fase_b : [
    'I like... (TP13 Fase B)',
    'I like... because... (TP06/07 Fase C, fondasi Fase B TP13)',
    'I can... (TP16 Fase B)',
  ],

  breakpoints: [],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Text-anchor sudah tampil di papan.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut.
UCAP: "Today — your opinion."
→ Tunjuk text-anchor di papan. Tidak perlu diterjemahkan. Lanjut ke L1.`,
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
UCAP: "Last time — you responded to a text."
→ Jeda.
UCAP: "Who remembers one sentence from their response?"
→ Tunggu SATU siswa menyebut kalimat dari tulisan TP16.
→ Guru angguk dan terima.
UCAP: "Today — not responding to someone else's text."
→ Jeda.
UCAP: "Your own opinion."
→ Tunjuk text-anchor di papan.
→ Lanjut ke L2.`,
          bantuan         : 'Jika tidak ada yang merespons dalam 10 detik: ucap "Last time you wrote \'I think...\' or \'I choose...\' — who remembers one word after \'because\'?" Tunggu satu kata.',
          cue             : 'Reactivation mengaktifkan kalimat bermakna dari TP16. Bridge ke "your own opinion" harus terasa seperti langkah alami.',
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
UCAP: "Listen. This is an opinion."
👂 LISTEN FIRST — siswa mendengarkan dan membaca papan.
Baca perlahan: "I think football is fun because it is good for our health. But I also like reading."
→ Baca sekali lagi, lebih perlahan.

UCAP: "What do I think about football?"
→ Tunggu respons: "It is fun." / "You think it is fun."
→ Guru angguk.
UCAP: "What else do I like?"
→ Tunggu respons: "Reading."
→ Guru angguk.

UCAP: "This is my opinion. My thoughts. My choice."
→ Jeda.
UCAP: "Not everyone agrees. Some of you may think football is boring."
→ Jeda — biarkan reaksi natural muncul.
UCAP: "That is also an opinion."`,
          bantuan         : 'Jika siswa tidak merespons pertanyaan "What do I think about football?": tunjuk kata "fun" di anchor, ucap "Fun — I think it is...?" Tunggu siswa melanjutkan.',
          cue             : '"Not everyone agrees. Some of you may think football is boring." — kalimat ini memvalidasi opini yang berbeda dari anchor dan mempersiapkan siswa bahwa disagreement di INTERACT adalah normal.',
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
      durasi: 34,

      langkah: [

        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru tunjuk text-anchor di papan.
UCAP: "Look — because. But."
→ Tunjuk kata "because" dan "but" di anchor secara berurutan.
UCAP: "One more."
→ Guru ucapkan satu kalimat baru — tidak ditulis di papan:
UCAP: "I don't like running in hot weather, so I prefer swimming."
→ Jeda.

→ Jika momen natural muncul: tunjuk ke udara sambil ucap "so — the result." Satu kalimat. Tidak lebih.

UCAP: "Because — why. But — something different. So — the result."
→ Tunjuk text-anchor saat sebut "because" dan "but." Tunjuk kalimat guru sendiri saat sebut "so."
→ Tiga kalimat. Stop.

UCAP: "What do YOU think? About anything. One sentence."
→ Minta 2–3 siswa merespons spontan — satu kalimat masing-masing.
→ Guru angguk. Jika ada siswa yang secara natural menggunakan connector: angguk lebih kuat.`,
          bantuan         : 'Jika siswa tidak bisa mengucapkan satu kalimat saat ditanya "What do YOU think?": ucap "I like [topik]?" — tunggu satu kata respons. Terima, lanjut.',
          cue             : 'Tiga connector — tiga fungsi — tiga kalimat. Stop di sini. Tujuan L3 adalah siswa melihat ketiga connector dalam konteks, bukan memahami aturan.',
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
          teks            : `UCAP: "Fast. I say an opinion. You say: agree or disagree."
→ Energi tinggi, tempo cepat.

UCAP: "Football is the best sport."
→ Kelas: "Agree!" / "Disagree!" — natural, tidak perlu teratur.
→ Tunjuk satu siswa yang terlihat disagree: "Why?" → Terima satu kalimat.

UCAP: "Spicy food is delicious."
→ Kelas merespons.
→ Tunjuk satu siswa yang merespons paling antusias: "Why?" → Terima satu kalimat.

UCAP: "Reading is boring."
→ Kelas akan ribut.
→ Terima 1–2 respons spontan.

UCAP: "Good. You have opinions. Now — write one."
→ Lanjut ke L5.`,
          bantuan         : null,
          cue             : 'Drill ini membangun energi dan memvalidasi bahwa "disagree" adalah respons yang diinginkan, bukan tidak sopan.',
          darurat         : null,
          energi          : '🟠',
          energy_level    : 'active',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika kelas sudah spontan memproduksi opini dengan connector di L3',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l5',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Guru tuliskan empat topik di pojok papan jika belum ada:
"Football · Reading · Cooking · Swimming"
UCAP: "Choose one topic."
→ Tunjuk pojok papan.
UCAP: "Write ONE sentence. Your opinion. Use 'because'."
UCAP: "Don't talk yet."
→ Siswa menulis. Waktu: 2–3 menit.
→ Guru diam. Tidak circulate belum.`,
          bantuan         : [
            'Jika siswa tidak bisa menulis satu kalimat: ucap "Write: \'I think [topic] is...\' — one word after \'is\'." Satu kata dulu.',
            'Jika siswa ingin topik selain yang ada di papan: boleh. Ucap "Yes — any topic you like."',
          ],
          cue             : 'Ini komitmen tertulis sebelum INTERACT — sama seperti Choice Slip di TP16. Siswa yang menulis opini sendiri sebelum mendengar opini pasangan akan masuk pair sharing dengan posisi yang sudah terbentuk.',
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
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Demo — maksimal 40 detik.
👂 LISTEN FIRST — kelas perhatikan.
Guru bicara ke satu siswa di depan:
UCAP: "I think swimming is fun because I like water. — What do YOU think about swimming?"
→ Siswa menjawab dari perspektif sendiri.
→ Guru: "Do you agree with me?"
→ Siswa: "Agree" atau "Disagree."
→ Guru: "Good. Now say why — because, but, or so."
→ Siswa coba satu kalimat respons.
→ Guru angguk.
UCAP: "That is opinion gap. Now — with your partner."

AKSI: Siswa bekerja berpasangan.
UCAP: "Read your sentence to your partner."
UCAP: "Partner: agree or disagree? Say why."
UCAP: "Use because, but, or so."
→ Siswa A membacakan kalimat opininya. Siswa B merespons.
→ Lalu peran berganti.
→ Waktu total: 5–6 menit.

AKSI: Guru circulate dan dengarkan.
→ Jika pair hanya "agree agree": dekati, ucap "Disagree a little? Why?" — tunggu satu kalimat.`,
          bantuan         : [
            'Jika siswa B tidak tahu cara merespons: ucap "Say: \'I agree because...\' or \'But I think...\'." — dua opsi konkret.',
            'Jika pasangan bicara dalam bahasa Indonesia sepenuhnya: biarkan ide terbentuk, lalu ucap "Now say it in English — one sentence."',
          ],
          cue             : 'Gap ini nyata karena opini A ditulis sendiri sebelum B mendengarnya. Respons B bergantung pada ISI opini A. Bahkan jika topik sama, alasan masing-masing bisa berbeda.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas.
2. Demo ulang dengan pasangan nyata di depan — guru jadi siswa B.
3. Sederhanakan: "Just say agree or disagree. One word. Then why — one word."
4. Restart pair work — batasi 60 detik per arah.`,
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
            gap_type         : 'opinion',
            artifact_required: false,
            artifact_type    : null,
            collapse_signal  : 'pair diam > 90 detik',
          },
          artifact: null,
        },

        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Setelah pair sharing selesai.
UCAP: "Who wants to share? Your opinion — one sentence."
→ Terima 2 siswa secara sukarela. Masing-masing baca kalimat opini mereka.
→ Setelah setiap kalimat: UCAP "Agree or disagree?" — kelas merespons spontan 3 detik.
→ Guru angguk. Tidak ada evaluasi.

UCAP: "Good opinions. Now — write."
→ Transisi langsung ke OUTPUT.`,
          bantuan         : null,
          cue             : 'L7 berfungsi sebagai transisi energi dari 🟠 (INTERACT) ke 🔵 (OUTPUT).',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 18 menit sebelum akhir sesi',
          blok            : 'INTERACT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Text-anchor tetap di papan. Empat topik tetap di pojok.
UCAP: "Now — write your opinion. More sentences."
UCAP: "Start from your sentence. Add more."
→ Jeda.
UCAP: "Use because. Use but. Try to use so."
→ Jeda.
UCAP: "Three sentences minimum. Your opinion."
→ Siswa menulis secara individual. Waktu: 8 menit.
→ Beri waktu 3 menit start sebelum circulate.

AKSI: Circulate setelah 3 menit.
→ Mulai dari barisan belakang.
→ Perhatikan: opini genuine atau menyalin text-anchor verbatim? Catat untuk L9.
→ Connector: jika belum ada, biarkan di draft — L9 akan address.`,
          bantuan         : [
            'Jika siswa freeze: tunjuk kalimat yang mereka tulis di L5, ucap "Start from this sentence. Write it again. Then add one more."',
            'Jika siswa bertanya "Boleh topik lain?": jawab "Yes — any topic. Your opinion."',
          ],
          cue             : 'Siswa yang menyalin text-anchor verbatim membuat pola yang sama dengan "summary vs response" di TP16. Nudge ringan di L9 lebih efektif dari koreksi saat L8 berlangsung.',
          darurat         : '⚠ DARURAT — waktu ≤ 5 menit dan sebagian besar siswa baru menulis 1 kalimat:\nUcap: "Two sentences — enough. One opinion with because. That is done."',
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
UCAP: "Two more minutes. Read your opinion."
→ Jeda — biarkan siswa membaca tulisannya sendiri.
UCAP: "Did you use because? Did you use but?"
→ Jeda.
UCAP: "Can you add so? The result of your opinion."
→ Jeda singkat.
UCAP: "If you have three sentences — add one more."
UCAP: "If you have fewer — finish one more sentence first."

AKSI: Circulate — prioritaskan barisan tengah yang belum tersentuh di L8.
→ Untuk siswa yang menyalin text-anchor di L8: dekati, bisik "Is this YOUR opinion? Change one thing — your own words."

Diferensiasi:
- Perlu support: dekati siswa, tunjuk kalimat mereka, ucap "Why? Add: because..." — tunggu satu alasan personal.
- Sudah bisa: bisik "Add one more — use so. Like: 'I don't like [sesuatu], so I prefer...'"`,
          bantuan         : 'Jika siswa tidak bisa menambah "so": jangan paksa. Dua connector (because dan but) sudah cukup untuk TP17.',
          cue             : '"so" adalah connector yang baru pertama kali jadi fokus produksi di TP17. Siswa yang berhasil menggunakannya sedang membuat koneksi linguistik baru.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'dekati siswa dengan kalimat opini tanpa connector. Tunjuk kalimat mereka, ucap "Why? Add: because..." — tunggu siswa melanjutkan dengan satu alasan personal.',
            sudahBisa   : 'bisik "Add one more — use so. Like: \'I don\'t like [sesuatu], so I prefer...\'" Kalimat dengan "so" mendorong kesimpulan logis yang berbeda per siswa.',
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
          teks            : `AKSI: Siswa duduk di tempat masing-masing dengan tulisan di tangan.
UCAP: "Who wants to share? One sentence from your opinion. From your seat."
→ Terima 2–3 sukarela. Masing-masing baca satu kalimat opini.
→ Setelah setiap kalimat: UCAP "Agree or disagree?" — kelas merespons spontan.`,
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
          id              : 'l11',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas.
UCAP: "Today — you said what you think."
→ Jeda.
UCAP: "In English."
→ Jeda.
UCAP: "You used because — to explain."
→ Jeda.
UCAP: "You used but — to say something different."
→ Jeda.
UCAP: "Some of you used so — the result."
→ Jeda.
UCAP: "That is giving your opinion."
→ Jeda.
UCAP: "Keep what you wrote."
→ Jeda singkat.
UCAP: "Next time — not what you think."
→ Jeda.
UCAP: "What happened. Something you remember."
→ Preview TP18 tanpa menyebut "TP18" atau "past tense" atau "cerita."
UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : '"Not what you think. What happened. Something you remember." — tiga kalimat yang membuka past tense narrative tanpa menyebut grammar.',
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

export default tp_c17;
