/**
 * =============================================================
 * FLAF — TP C14 (Reading: Instructions and Steps)
 * File: docs/fase-c-skenario/tp-14-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 6)
 * Kluster: D — Membaca Dunia
 * Jenis: Kompleks
 * Source: flaf-c-tp14-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c14 = {

  id        : 'tp-c14',
  nomor     : 14,
  kelas     : 6,
  nama      : 'Reading: Instructions and Steps',
  tema      : 'Membaca Dunia',
  kluster   : 'D',
  jenis     : 'Kompleks',
  deskripsi : `TP Kompleks pertama di Kluster D.
Siswa membaca teks prosedur (cara membuat jus jeruk 5 langkah),
lalu merekonstruksi urutan dari gambar acak yang berbeda antar pasangan.
Kriteria Kompleks: sequencing multi-step, reading + writing satu sesi,
integrasi tiga skill di L7 (membaca-berbicara-bernalar), inferensi logis dari gambar.`,

  indikator: [
    'Peserta didik dapat membaca teks prosedur dan mengidentifikasi urutan lima langkah secara benar.',
    'Peserta didik dapat menggunakan connector then untuk menghubungkan langkah-langkah dalam tulisan prosedur.',
    'Peserta didik dapat merekonstruksi urutan langkah yang benar dari gambar acak melalui komunikasi verbal dengan pasangan.',
  ],

  vocab: ['squeeze', 'pour', 'stir', 'half', 'glass', 'sugar'],

  persiapan: [
    'Teks prosedur di papan (+ cetak satu per siswa jika memungkinkan): langkah 1–5 — "1. First, get the oranges. 2. Then cut them in half. 3. Next, squeeze the oranges into a glass. 4. After that, add sugar. 5. Finally, stir and enjoy." Tetap tampil saat OUTPUT.',
    'Image Cards Set A (satu set per siswa versi A): 5 kartu gambar dalam urutan acak 3–1–5–2–4. Label langkah (1–5) ditulis di bagian belakang kartu.',
    'Image Cards Set B (satu set per siswa versi B): 5 kartu gambar yang sama dalam urutan acak berbeda 2–4–1–5–3.',
    'Sequence Sheet (satu per siswa): selembar kertas dengan 5 kotak bernomor — Step 1: ___ · Step 2: ___ · Step 3: ___ · Step 4: ___ · Step 5: ___ . Diisi bersama pasangan di L7.',
  ],

  checklist: [
    'L1 menggunakan pola Kluster D: "Last time you read an announcement. One sentence. Who remembers?" → satu kalimat dari TP13 → "Today — instructions."',
    '`then` muncul empat kali di model guru L4 — satu per transisi; `when` muncul SATU KALI sebagai opsi',
    'Set A (urutan 3–1–5–2–4) dan Set B (urutan 2–4–1–5–3) berbeda — dibagikan bergantian ke siswa A dan B',
    'Demo L7 menunjukkan secara konkret bahwa kartu A dan B berbeda urutannya — "my first card... your first card... different"',
    'Image Cards tidak diperlihatkan ke pasangan selama pair work — dideskripsikan secara verbal',
    'Verifikasi L8: Sequence Sheet dicek terhadap teks dengan diskusi logis dulu, bukan langsung disalin',
    'Teks prosedur tetap tampil saat OUTPUT (L9) — konsisten Kluster D',
    'Output siswa menggunakan `then` minimal sekali — bukan menyalin verbatim dari teks',
    'Guru sudah mendekati minimal 2–3 siswa barisan belakang di L9 atau L10',
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
    'L11 🟡',
    'L12 🔵',
  ],

  catatan: {
    risiko: [
      'L7 adalah inti skenario — JANGAN dipotong. Jika ada tekanan waktu: potong L6 atau L8 dulu sebelum mempertimbangkan L7.',
      'L7 membutuhkan image cards yang sudah disiapkan dengan benar (Set A ≠ Set B). Jika kartu belum siap: sederhanakan dengan guru menulis urutan acak di papan untuk masing-masing set.',
      'L8 (verifikasi): Risiko utama adalah siswa menyalin langsung dari teks tanpa diskusi. Jika terlihat, intervensi dengan pertanyaan "WHY?" sebelum membuka teks.',
    ],
    autonomy: [
      'Topik prosedur boleh diganti dengan yang lebih relevan (cara membuat teh, cara mencuci tangan, cara menanam biji) — selama 5 langkah berurutan dan ada gambar yang bisa diacak.',
      'Demo di L7 boleh menggunakan dua siswa di depan kelas (guru sebagai fasilitator) jika lebih mudah dari guru memegang dua set kartu sendiri.',
      'Jika gambar tidak bisa disiapkan, ganti dengan deskripsi teks saja (kartu bertuliskan aksi tanpa gambar).',
      'Boleh memperpanjang L7 sampai 10 menit jika diskusi rekonstruksi terasa produktif — kurangi L8 sebagai kompensasi.',
    ],
  },

  text_anchor    : 'First, get the oranges. Then cut them in half. Next, squeeze the oranges into a glass. After that, add sugar. Finally, stir and enjoy.',
  connector_aktif: 'then (fokus produksi di TP14 — exposure sejak TP05) · when (fokus produksi di TP14 — exposure sejak TP10); `then` dominan di text-anchor dan model guru; `when` muncul sekali di model guru sebagai opsi alternatif',
  recycle_fase_b : [
    'I usually... / first, then, after that (TP06 Fase B)',
    'When it..., I... → When [condition], [action] (TP10 Fase B)',
  ],

  breakpoints: [],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Teks prosedur sudah tampil di papan.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut.
UCAP: "Today — instructions. How to make something."
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
UCAP: "Last time you read an announcement."
→ Jeda.
UCAP: "One sentence. Who remembers?"
→ Tunggu SATU siswa menyebut kalimat dari TP13.
→ Guru angguk dan terima.
UCAP: "Good. Today — we read something different."
UCAP: "Instructions. How to make something."
→ Lanjut ke L2.`,
          bantuan         : null,
          cue             : 'Satu respons sudah cukup — jangan tunggu lebih dari 20 detik.',
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
          teks            : `AKSI: Guru menunjuk teks prosedur di papan.
UCAP: "Look at the board. This is a procedure — how to make orange juice."
UCAP: "Five steps. Let's read them."
→ Baca teks perlahan, tunjuk setiap kalimat.
👂 LISTEN FIRST — siswa mendengarkan dan membaca papan.

"First, get the oranges." [tunjuk langkah 1]
"Then cut them in half." [tunjuk langkah 2]
"Next, squeeze the oranges into a glass." [tunjuk langkah 3]
"After that, add sugar." [tunjuk langkah 4]
"Finally, stir and enjoy." [tunjuk langkah 5]

UCAP: "Each step tells you what to do. And in what order."`,
          bantuan         : 'Jika siswa tidak memperhatikan saat dibacakan: ketuk papan sebelum setiap langkah — "Step one. Read."',
          cue             : 'Di layar ini siswa hanya mendengarkan dan membaca. Jangan bertanya atau minta respons dulu. Teks perlu diserap dulu secara utuh sebelum diekstraksi per langkah di L3.',
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
      durasi: 49,

      langkah: [

        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Guru bertanya langsung, siswa menemukan jawaban dari teks di papan.
UCAP: "What is Step 1?" → siswa: "Get the oranges."
UCAP: "What do you do after that? Step 2?" → siswa: "Cut them in half."
UCAP: "Step 3?" → siswa: "Squeeze the oranges."
UCAP: "Step 4?" → siswa: "Add sugar."
UCAP: "And the last step?" → siswa: "Stir and enjoy."

AKSI: Setelah semua langkah diekstraksi:
🗣 TOGETHER — guru dan siswa baca teks bersama.
UCAP: "Read with me. All five steps."
→ Baca bersama 1×. Tunjuk setiap kalimat saat dibaca.`,
          bantuan         : 'Jika siswa tidak bisa menemukan langkah tertentu: tunjuk kalimat yang relevan dan ucap "Read this." Tunggu siswa menemukan jawabannya sendiri.',
          cue             : 'Setiap jawaban harus ditemukan dari teks, bukan dari ingatan. Jika siswa menjawab tanpa melihat papan: ucap "Show me where in the text."',
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
          teks            : `AKSI: Guru berdiri di depan kelas. Teks masih di papan tapi guru tidak melihatnya.
UCAP: "Now — I will describe the steps. Listen to how I connect them."

UCAP: "First, get the oranges."
UCAP: "Then cut them in half."
UCAP: "Then squeeze the oranges."
UCAP: "Then add sugar."
UCAP: "Then stir and enjoy."

→ Jeda singkat.

UCAP: "Then, then, then — that is how steps connect. Each step follows the next."

→ Jeda singkat. Satu contoh `when` sebagai opsi:
UCAP: "Or — 'When the glass is full, stop pouring.'"
UCAP: "When — for a condition. But for steps, 'then' is easier."
→ Ucapkan sekali. Tidak lebih.`,
          bantuan         : 'Jika siswa tidak mengikuti kecepatan model guru: perlambat antara setiap kalimat — beri jeda 2 detik setelah setiap "Then..."',
          cue             : '`then` muncul empat kali di model guru — satu per transisi antar langkah. `when` muncul SATU KALI sebagai opsi alternatif. Siswa harus keluar dari layar ini dengan rasa bahwa `then` adalah pilihan default untuk menulis prosedur.',
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
          teks            : `AKSI: Guru tutup atau sembunyikan teks di papan sementara.
UCAP: "Now — without the text. Tell me the steps. Use 'then'."

UCAP: "Step 1: get the oranges. Then — what?"
→ Tunjuk satu siswa: jawab dengan "Then cut them."
UCAP: "Then — what next?"
→ Tunjuk siswa lain: "Then squeeze the oranges."
→ Lanjutkan sampai semua 5 langkah terucapkan oleh siswa berbeda.

AKSI: Lakukan satu putaran penuh dari Step 1 ke Step 5 dengan 5 siswa berbeda.
→ Jika ada yang lupa: cukup ucap "Look at the board" dan tampilkan teks kembali sebentar.`,
          bantuan         : 'Jika siswa tidak bisa melanjutkan chain: ucap kata pertama dari langkah tersebut — "Squeeze..." — tunggu siswa melanjutkan.',
          cue             : 'Ini latihan oral sebelum INTERACT — siswa harus bisa mendeskripsikan setiap langkah secara verbal sebelum mereka diminta mendeskripsikan gambar ke pasangan.',
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
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Tampilkan kembali teks di papan. Guru tunjuk satu langkah secara acak.
UCAP: "Read the step. Add 'then' at the beginning. Fast."
→ Contoh: guru tunjuk langkah 3 → siswa: "Then squeeze the oranges into a glass."

AKSI: Lakukan 4–5 langkah secara acak, cepat. Tidak ada koreksi.`,
          bantuan         : 'Jika siswa lambat merespons: guru ucap "Then..." dan tunggu siswa melanjutkan sisa kalimat dari teks.',
          cue             : 'Ini membiasakan `then` di awal kalimat instruksi sebelum siswa menulis sendiri. Cepat — tidak lebih dari 3 menit.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika kelas sudah lancar menggunakan then di L4–L5',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Bagikan Image Cards — Set A ke setengah kelas (bergantian), Set B ke setengah lainnya. Bagikan juga Sequence Sheet satu per siswa.
UCAP: "You have 5 image cards. They are NOT in the right order."
UCAP: "Your partner has the same 5 images — but in a DIFFERENT wrong order."

AKSI: Demonstrasi — maksimal 2 menit.
👂 LISTEN FIRST — kelas perhatikan.

Guru pegang Set A (urutan 3–1–5–2–4) dan tunjukkan ke kelas:
UCAP: "My first card — someone is squeezing oranges."
→ Tunjuk Set B kartu 1 (step 2 — cutting) ke satu siswa di depan:
UCAP: "What is YOUR first card?"
→ Siswa: "Cutting oranges."
UCAP: "Different starting point. That is the gap."
UCAP: "Together — figure out the correct order. Fill in the Sequence Sheet."
UCAP: "Describe your cards. Use: 'My first card shows... My second card shows...'"

AKSI: Siswa bekerja berpasangan.
→ Masing-masing mendeskripsikan kartu mereka ke pasangan.
→ Bersama-sama mengisi Sequence Sheet: Step 1 = ___, Step 2 = ___, dst.
→ Image Cards tidak diperlihatkan ke pasangan — deskripsikan secara verbal.
→ Waktu: 7–8 menit.

AKSI: Guru circulate — prioritaskan barisan belakang. Dengarkan deskripsi verbal.`,
          bantuan         : [
            'Jika siswa tidak tahu bagaimana mendeskripsikan gambar: ucap "Say what you see. \'My first card shows someone [action].\'" — tunggu siswa meniru pola ini.',
            'Jika satu siswa mendominasi dan mengisi semua kotak: hentikan sebentar, ucap "Does your partner agree? Ask them."',
          ],
          cue             : 'Urutan acak Set A dan Set B secara sengaja berbeda — ini bukan kebetulan. Demo harus menunjukkan perbedaan ini secara konkret. Tanpa ini, siswa tidak memahami WHY mereka harus berkomunikasi.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas.
2. Demo ulang: tunjuk kartu pertama Set A, deskripsikan satu gambar. Tunjuk kartu pertama Set B, deskripsikan satu gambar.
3. Sederhanakan: "Just say: my first card shows [action]. Then ask: what is your first card?"
4. Restart — batasi 60 detik per arah.`,
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
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Tampilkan kembali teks prosedur di papan jika sudah disembunyikan.
UCAP: "Now — read the text. Check your Sequence Sheet."
UCAP: "Is your order the same? If not — talk to your partner first. Why is this step before that?"
→ Siswa membandingkan Sequence Sheet dengan teks. Waktu: 2–3 menit.

AKSI: Jika ada pair yang urutannya salah:
UCAP: "Look at Step 1 in the text. Does it match what you wrote in Step 1?"
→ Jangan ucapkan "yang benar itu..." — biarkan siswa melihat sendiri dari teks.
→ Jika pair masih tidak sepakat: ucap "Read the text slowly. What is the first action?"`,
          bantuan         : 'Jika siswa tidak bisa menjelaskan mengapa satu langkah sebelum langkah lain: ucap "Can you cut an orange before you get it?" — pertanyaan ini mendorong logika kausal.',
          cue             : 'Teks adalah alat verifikasi, BUKAN jawaban yang disalin. Jika siswa langsung menyalin urutan dari teks tanpa diskusi: tutup teks dengan tangan dan ucap "Tell me WHY this step is first. Then check."',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 10 menit sebelum OUTPUT',
          blok            : 'INTERACT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l9',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Teks prosedur tetap tampil di papan — siswa perlu teks sebagai referensi.
UCAP: "Now — write the steps. In your own words."
UCAP: "Use 'then' between each step. You can also use 'when' if it feels right."

AKSI: Tunjukkan cara memulai (ucap sekali, tidak ditulis):
UCAP: "First, get the oranges. Then..." — stop. Siswa lanjutkan sendiri.
→ Siswa menulis 4–5 kalimat dengan `then` menghubungkan langkah-langkah.
→ Teks prosedur boleh dirujuk untuk akurasi — tapi output harus dalam kalimat sendiri.

AKSI: Siswa menulis secara individual.
→ Waktu: 8–10 menit.
→ Beri waktu start 2–3 menit sebelum circulate.
→ Prioritaskan barisan belakang.
→ Perhatikan: apakah `then` muncul di tulisan siswa? Jika tidak ada satu pun: tunjuk baris kedua teks prosedur dan ucap bisik "Use 'then' here." Tunggu siswa menulis.`,
          bantuan         : 'Jika siswa freeze: tunjuk Sequence Sheet siswa di Step 1 dan ucap "Write this step first: First, [action]." Tunggu satu kalimat. Tinggalkan.',
          cue             : 'Output di sini adalah parafrase prosedur — siswa menulis ulang langkah-langkah dengan kata-kata sendiri dan menghubungkannya dengan `then`. Perbedaan kecil dalam diksi dari teks asli sudah cukup bukti produksi mandiri.',
          darurat         : '⚠ DARURAT — waktu ≤ 5 menit dan sebagian besar siswa baru menulis 2 kalimat:\nUcap: "Three steps — that is enough. Step 1, then Step 2, then Step 3." Turunkan target.',
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
          teks            : `AKSI: Setelah 8 menit, guru memberi sinyal.
UCAP: "Two more minutes. Read your steps. Is the order correct? Did you use 'then'?"

Diferensiasi:
- Perlu support: guru dekati, tunjuk Sequence Sheet siswa, ucap "Write this step — 'Then [action].'" Tunggu satu kalimat tambahan tanpa dikte kata per kata.
- Sudah bisa: tambah kalimat dengan `when` — contoh: "When the juice is ready, you can drink it." atau tambah kalimat opini: "I like this juice because it is sweet and fresh."

AKSI: Guru circulate — cek kehadiran `then` di tulisan, bukan grammar.
→ Jika `when` muncul spontan — angguk.`,
          bantuan         : 'Jika siswa sudah menulis semua 5 langkah tapi belum ada connector: tunjuk jarak antara dua kalimat dan ucap "What word connects these? Then?" — tunggu siswa menambahkan `then` sendiri.',
          cue             : 'Diferensiasi "Sudah bisa" mengacu pada konteks setelah prosedur selesai — opini personal yang berbeda-beda per siswa.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'guru dekati, tunjuk Sequence Sheet siswa, ucap "Write this step — \'Then [action].\'" Tunggu satu kalimat tambahan.',
            sudahBisa   : 'tambah kalimat dengan `when` — contoh: "When the juice is ready, you can drink it." atau tambah kalimat opini.',
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
          id              : 'l11',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru minta 2–3 siswa sukarela membacakan SATU kalimat dari tulisan mereka.
UCAP: "Who wants to share? One step — just one sentence. From your seat is fine."
→ Terima siapapun. Tidak perlu berdiri.

AKSI: Setelah setiap siswa berbagi, guru bertanya ke kelas:
UCAP: "What connector did they use? 'Then' or 'when'?"
→ Tangan naik — resonansi natural yang fokus pada connector.`,
          bantuan         : 'Jika tidak ada yang mau sukarela: tunjuk siswa yang Sequence Sheet-nya terlihat sudah terisi lengkap di L7.',
          cue             : 'Pertanyaan "Then or when?" membuat kelas memperhatikan connector secara aktif — bukan sebagai grammar lesson, tapi sebagai pengamatan dari kalimat nyata.',
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
          teks            : `AKSI: Guru berdiri di depan kelas.
UCAP: "Today you read instructions. Step by step."
→ Jeda.
UCAP: "First. Then. Next. After that. Finally."
→ Jeda.
UCAP: "And you put the steps back in the right order."
→ Jeda.
UCAP: "Keep it."

AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time — we read a story."
→ Jeda singkat.
UCAP: "What happened. Who was there."
→ Preview TP15 yang natural.

UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : '"And you put the steps back in the right order." — kalimat ini merangkum pencapaian spesifik TP14: rekonstruksi logis dari informasi yang tidak berurutan.',
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

export default tp_c14;
