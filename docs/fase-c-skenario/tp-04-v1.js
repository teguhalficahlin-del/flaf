/**
 * =============================================================
 * FLAF — TP C04 (Writing: This Is Me)
 * File: docs/fase-c-skenario/tp-04-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 5)
 * Kluster: A — Diri yang Lebih Lengkap
 * Jenis: Panen
 * Source: flaf-c-tp04-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c04 = {

  id        : 'tp-c04',
  nomor     : 4,
  kelas     : 5,
  nama      : 'Writing: This Is Me',
  tema      : 'Diri yang Lebih Lengkap',
  kluster   : 'A',
  jenis     : 'Panen',
  deskripsi : '',

  indikator: [
    'Peserta didik dapat mengintegrasikan pola dari TP01–03 (profil, deskripsi orang, deskripsi lingkungan) ke dalam satu tulisan mandiri minimal 5 kalimat.',
    'Peserta didik dapat menggunakan connector and dalam konteks yang natural dan bermakna dalam tulisan mandiri.',
    'Peserta didik dapat memproduksi tulisan yang mencerminkan diri, orang yang dikenal, dan lingkungan mereka sendiri — bukan menyalin model guru.',
  ],

  vocab: [],

  persiapan: [
    'Catatan siswa dari tiga TP sebelumnya: My Profile Note (TP01) · My Person Card (TP02) · My Neighborhood Card (TP03) — minta siswa membawa, atau guru menyimpan untuk dikembalikan sebelum L7.',
    'Kertas kosong A5 atau setengah lembar untuk tulisan final "This Is Me" — satu per siswa, dibagikan di L8.',
    '(Opsional untuk L12 Opsi B) Selotip atau isolasi untuk menempel tulisan di atas meja atau dinding.',
  ],

  checklist: [
    'Reactivation (L1) mengaktifkan kalimat dari ketiga TP sebelumnya — bukan hanya menyebut tema TP01, TP02, dan TP03',
    'Brief (L2) mengandung "and" secara natural dalam kalimat instruksi — tidak ada instruksi eksplisit "gunakan and"',
    'Model guru (L3) diucapkan lisan — tidak ditulis di papan sebagai template yang bisa disalin siswa',
    'Catatan TP01–03 (My Profile Note · My Person Card · My Neighborhood Card) tersedia untuk siswa di L7',
    'Breakpoint alami disampaikan dengan UCAP konkret: "Stop where you are. Save your work. Next time we continue from Layar 9."',
    'Output setiap siswa berbeda karena mencerminkan diri, orang, dan lingkungan mereka masing-masing',
    'Guru sudah mendekati minimal 5–8 siswa di L11 — prioritas siswa yang belum pernah dinilai di TP01–03',
  ],

  printables: [],

  energi_map: [
    'L0 ⚪',
    'L1 🟡',
    'L2 🔵',
    'L3 🔵',
    'L4 🟡',
    'L5 🟡',
    'L6 🟡',
    'L7 🔵',
    'L8 🔵',
    'L9 🔵',
    'L10 🔵',
    'L11 🔵',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L5 (INTERACT): Pair response bisa collapse jika siswa merasa tidak punya cukup kalimat untuk dibagikan. Normalkan di demo — cukup 2 kalimat lisan dan 1 respons. Jangan tuntut lebih dari itu.',
      'L8 (Writing): Siswa yang menulis pelan mungkin tidak selesai sebelum Breakpoint. Itu normal dan sudah diantisipasi. Jangan tunda Breakpoint karena menunggu siswa yang lambat — Breakpoint ada untuk kondisi ini.',
      'L9 (Revisi, sesi lanjutan): Jika ini sesi lanjutan setelah Breakpoint, beri siswa ~2 menit untuk membaca ulang tulisan mereka sebelum diminta merevisi. Hitung waktu ini sebagai bagian dari L9 — tidak mengganggu budget.',
    ],
    autonomy: [
      'Model guru di L3 harus tentang kehidupan guru yang nyata — bukan karakter fiktif. Semakin autentik model guru, semakin siswa merasa aman menulis tentang diri mereka yang sesungguhnya.',
      'Boleh memilih antara Opsi A (share dari tempat duduk) atau Opsi B (Gallery Walk) di L12 berdasarkan kondisi kelas dan sisa waktu — tidak perlu menjalankan keduanya.',
      'Boleh memperpanjang L8 sampai 12 menit jika kelas kondusif dan tidak ada yang perlu Breakpoint.',
      'Boleh skip L4 (Warm-Up) dan L6 (Mini-Share) tanpa merusak alur — tapi jangan skip L5 (Peer Response) karena itu satu-satunya blok INTERACT di skenario ini.',
      'Jika sesi lanjutan setelah Breakpoint: mulai langsung dari L9. Tidak perlu mengulang L1–L8.',
    ],
  },

  text_anchor    : null,
  connector_aktif: 'and — fokus produksi pertama (exposure TP01–03, produksi mandiri di TP04); muncul natural di brief dan model guru',
  recycle_fase_b : [
    'semua pola TP01–03 Fase C — My name is... / I like... (TP13 Fase B)',
    'She/He is... / She/He has... (TP02 Fase B)',
    'There is... / next to / near / is [adjective] (TP03 Fase B)',
  ],

  breakpoints: [
    {
      type             : 'breakpoint',
      id               : 'bp-tp-c04-1',
      kind             : 'natural',
      after_langkah_id : 'l8',
      resume_at        : 'l9',
      text             : 'Stop where you are. Save your work.\nNext time we continue from here — Layar 9.\nKeep your writing and your notes. Bring them next time.',
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
    teks   : `Guru berdiri di depan kelas. Papan kosong atau hanya ada judul hari ini.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut menjawab.
UCAP: "Today is a writing day."
→ Tidak perlu diterjemahkan. Lanjut ke L1.`,
    bantuan: null,
    cue    : null,
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 9,

      langkah: [

        // L1 — Reactivation: Output dari TP01–03
        {
          id              : 'l1',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru tidak membuka text-anchor apapun — cukup bertanya dari ingatan siswa.
UCAP: "Three times — you wrote something."
→ Jeda.
UCAP: "TP01 — you wrote about yourself. TP02 — you described someone you know. TP03 — you wrote about your neighborhood."
→ Jeda singkat.
UCAP: "Who remembers one sentence — from any of those three?"

AKSI: Tunggu 3 siswa dari TP yang berbeda menyebut kalimat dari tulisan mereka.
→ Guru tidak mengoreksi — angguk dan terima apapun yang muncul.
→ Jika dua siswa menyebut kalimat dari TP yang sama: tanya "Who has something from TP02? Or TP03?" — dorong agar ketiga TP terwakili.

UCAP: "Good. All three — they are yours. Today you put them together."`,
          bantuan         : 'Jika tidak ada yang merespons dalam 5 detik: ucap satu kalimat contoh dari TP01 — "My name is Rina. I live in Bandung." — lalu tanya "Who has a sentence like this about yourself?" Terima kalimat pertama yang muncul, lanjut ke TP berikutnya.',
          cue             : 'Reactivation ini mengaktifkan pola bahasa dari tiga TP sebelumnya sekaligus — bukan hanya menyebut temanya. Yang penting: siswa sudah dalam mode berbahasa Inggris dan ingatan tentang ketiga topik aktif sebelum brief diberikan.',
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

        // L2 — Brief + Framing
        {
          id              : 'l2',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas. Tulis di papan:
   "This Is Me"
   At least 5 sentences.
   You choose what to include. You choose the order.

UCAP: "Today — one piece of writing."
→ Jeda.
UCAP: "Write about yourself — your name, your home, and your neighborhood."
→ Jeda.
UCAP: "Five sentences — that is the minimum. You can write more."
UCAP: "Your notes from the last three times — you can use them. But do not copy. Write in your own words."`,
          bantuan         : 'Jika siswa bertanya "harus tentang apa saja?": tunjuk brief di papan — "Your name, your home, your neighborhood — that is the guide. You decide the rest."',
          cue             : 'Brief mengandung "and" secara natural — "your name, your home, and your neighborhood." Siswa mendengar "and" sebagai bagian dari instruksi guru, bukan sebagai target grammar yang harus dipenuhi. Jangan ulangi kata "and" secara terpisah atau beri komentar apapun tentangnya.',
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

    {
      fase  : 'Inti',
      durasi: 44,

      langkah: [

        // L3 — Model Guru — This Is Me  [INPUT · CORE]
        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas. Papan hanya menampilkan brief. Tidak ada teks tambahan.
UCAP: "First — my turn. I will show you what this looks like."

UCAP: "My name is [nama guru]. I am [usia] years old."
UCAP: "I live in [kota] and I love [aktivitas nyata guru]."
UCAP: "My [orang yang dikenal guru] is [kata sifat]. She/He is [kata sifat] and [kata sifat]."
UCAP: "My neighborhood is near [tempat nyata]. It is [kata sifat] and [kata sifat]."
UCAP: "I like living here because it is [kata sifat]."
→ Jeda setelah kalimat terakhir.
UCAP: "That is This Is Me — for me."
UCAP: "Yours will be different. Because you are different."`,
          bantuan         : 'Jika siswa meminta model ditulis di papan: ucap "You can write what you heard if you want to remember — but this is mine, not yours. Your sentences are different." Tetap jangan tulis di papan.',
          cue             : 'Model guru bukan template — tidak ada urutan yang wajib diikuti siswa. Yang ditunjukkan: (1) kalimat bisa berpindah dari satu topik ke topik lain secara natural, (2) "and" muncul dalam konteks yang berbeda tanpa terasa dipaksakan. Jangan tulis model ini di papan — cukup diucapkan, agar siswa tidak menyalin.',
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

        // L4 — Warm-Up: Satu Kalimat Tentang Diri Sendiri  [INPUT · FLEX]
        {
          id              : 'l4',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru tunjuk 4–5 siswa dari barisan berbeda secara acak — bukan yang tunjuk tangan.
UCAP: "One sentence — about yourself. Any sentence. Go."
→ Siswa menyebut satu kalimat tentang diri mereka (dari ingatan TP01–03 atau kalimat baru).
→ Guru angguk setelah setiap kalimat — tidak mengoreksi.

UCAP: "Good. Remember that sentence — you might use it today."`,
          bantuan         : 'Jika siswa yang ditunjuk diam lebih dari 5 detik: ucap "Your name — in English. Go." Terima satu kata jika perlu, angguk, dan lanjut ke siswa berikutnya.',
          cue             : 'Warm-up ini bukan assessment. Tujuannya: siswa merasakan bahwa mereka sudah punya bahasa yang cukup sebelum mulai menulis. Pilih siswa dari barisan berbeda — bukan hanya yang tunjuk tangan.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 40 menit sebelum OUTPUT',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L5 — Peer Response — Dua Kalimat Tentang Diri  [INTERACT · CORE]
        {
          id              : 'l5',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Siswa duduk berpasangan (teman sebangku atau pasangan dari TP sebelumnya).
UCAP: "Two sentences — about yourself. Any two sentences."
UCAP: "Tell your partner. Then — your partner responds."

AKSI: Demonstrasi dengan satu siswa di depan — maksimal 60 detik.
👂 LISTEN FIRST — kelas perhatikan dulu.
Guru bercerita 2 kalimat: "My name is [guru]. I live in [kota] and I like [aktivitas]."
→ Guru tanya siswa: "Is that like you — or different?"
→ Siswa menjawab: "That's different — I live in [kota lain]." atau "That's like me — I also like [aktivitas]."
UCAP: "Now your turn. Two sentences. Then ask: Is that like you — or different?"

AKSI: Siswa bekerja berpasangan.
→ Siswa A bercerita 2 kalimat → Siswa B merespons dengan "That's like me" atau "That's different."
→ Kemudian Siswa B bercerita 2 kalimat → Siswa A merespons.
→ Waktu total: 3–4 menit.

AKSI: Guru circulate — prioritaskan barisan belakang.`,
          bantuan         : 'Jika pasangan hanya mengangguk tanpa merespons lisan: tunjuk salah satu dan ucap "Is that like you? Yes or no — and one sentence." Tunggu minimal 1 kalimat.',
          cue             : 'Instruksi "Is that like you — or different?" wajib ada di demo dan diulang saat siswa mulai. Pertanyaan ini memaksa pasangan mendengarkan sebelum bisa menjawab — dan itulah yang membuat INTERACT ini punya gap nyata.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas dengan tepukan tangan.
2. Demo ulang cepat dengan satu pasangan di depan — 30 detik.
3. Sederhanakan: cukup 1 kalimat per orang, cukup jawab "same" atau "different" tanpa kalimat penuh.
4. Restart pair work — batasi 60 detik.`,
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
            gap_type         : 'opinion',
            artifact_required: false,
            artifact_type    : null,
            collapse_signal  : 'pair diam > 90 detik',
          },
          artifact: null,
        },

        // L6 — Mini-Share ke Kelas  [INTERACT · FLEX]
        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru tunjuk 2–3 pasangan secara acak.
UCAP: "Tell me one thing — same or different between you and your partner."
→ Siswa menjawab berdasarkan apa yang baru didengar dari pasangan.
→ Contoh: "We both live near a market." atau "My partner lives in a village. I live in a city."

AKSI: Guru tidak mengoreksi grammar. Angguk dan lanjut.
UCAP (opsional): "Interesting. Did anyone find something surprising about their partner?"
→ Ini membuka ruang bagi siswa yang menemukan perbedaan yang tidak terduga.`,
          bantuan         : 'Jika siswa tidak bisa merangkum: ucap "Your partner — what is one thing about them you did not know before?" Lebih mudah menjawab "hal baru yang diketahui" daripada membandingkan secara formal.',
          cue             : 'Layar ini bukan evaluasi — ini resonansi sosial sebelum menulis. Jika ada kalimat menarik yang muncul, guru boleh merespons natural: "That\'s interesting — I didn\'t know that about you."',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 25 menit',
          blok            : 'INTERACT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L7 — Persiapan Menulis — Atur Catatan  [OUTPUT · CORE]
        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Guru memberi sinyal untuk mengambil catatan.
UCAP: "Take out your notes — from TP01, TP02, TP03. All of them."
→ My Profile Note (TP01), My Person Card (TP02), My Neighborhood Card (TP03).

UCAP: "Look at your notes. What do you want to include in your writing today?"
UCAP: "Write a short list — three to five ideas. Not sentences yet. Just ideas."
→ Siswa membuat outline singkat di kertas atau di bagian kosong catatan mereka. ~2–3 menit.
→ Guru diam dan biarkan siswa memilih sendiri.`,
          bantuan         : [
            'Jika siswa tidak punya catatan TP sebelumnya: ucap "No notes? That is fine — write from memory. You know yourself." Siswa yang tidak punya catatan bisa mulai langsung tanpa outline.',
            'Jika siswa bingung apa yang harus masuk outline: tunjuk brief di papan — "Your name, your home, your neighborhood — start with those. Then add what you want." Jangan dikte isinya lebih dari itu.',
          ],
          cue             : 'Outline ini bukan template yang didikte guru. Siswa memilih sendiri apa yang ingin mereka tulis. Guru tidak menyediakan poin yang "harus ada" — hanya mendorong siswa untuk memilih sebelum mulai menulis.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L8 — Writing Utama — This Is Me  [OUTPUT · CORE]
        {
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Bagikan kertas kosong — satu per siswa.
UCAP: "Now — write."
UCAP: "Five sentences minimum. Use your notes. Use your outline. But write in your own words."
UCAP: "Ten minutes. Go."
→ Guru diam. Biarkan siswa menulis.
→ Mulai circulate setelah menit ke-3 — beri waktu start dulu.
→ Prioritaskan barisan belakang dan pojok kelas.
→ Saat circulate: cukup nod jika tulisan sudah berjalan. Tidak perlu berkomentar.
→ Perhatikan: jika ada siswa yang menyalin kalimat model guru persis — bisikkan "That is my sentence. What is yours?"`,
          bantuan         : 'Jika siswa freeze — pensil di tangan tapi tidak menulis: tunjuk outline atau catatan mereka dan ucap "Start with your name — just that first sentence." Tunggu siswa menulis satu kalimat. Tinggalkan setelah itu.',
          cue             : 'Tidak ada text-anchor di papan. Brief tetap tertulis di papan sebagai satu-satunya panduan. Guru tidak mendiktekan kalimat apapun saat circulate.',
          darurat         : '⚠ DARURAT — waktu ≤ 3 menit dan sebagian besar siswa baru menulis 1–2 kalimat:\nTidak perlu panik. Ucap: "Stop where you are." Lanjutkan ke Breakpoint Alami.',
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

        // L9 — Revisi + Extend  [OUTPUT · CORE]
        {
          id              : 'l9',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `Catatan: Jika sesi ini adalah lanjutan setelah Breakpoint, beri siswa ~2 menit untuk membaca ulang tulisan mereka sebelum mulai revisi.

AKSI: Guru memberi sinyal tanpa menghentikan siswa yang masih menulis.
UCAP: "Read what you have. Can you add one more sentence?"
UCAP: "Or — can you make one sentence better?"
→ Siswa membaca ulang dan merevisi atau menambah. ~5 menit.

Diferensiasi:
- Perlu support: guru dekati dan ucap panduan konkret — "You wrote about your name. Can you add something about your neighborhood? Just one sentence." Jangan dikte isi kalimatnya.
- Sudah bisa: tambahkan kalimat yang menghubungkan dua topik dengan "and" — contoh: "I like my neighborhood because it is quiet and clean." atau "My [orang] is kind and my home is peaceful."

AKSI: Guru circulate — lihat tulisan siswa tanpa mengoreksi grammar.
→ Jika "and" muncul spontan dalam konteks baru — angguk.
→ Jika ada siswa yang menulis lebih dari 8 kalimat — tidak perlu dibatasi.`,
          bantuan         : 'Jika siswa menyatakan sudah selesai tapi baru 3 kalimat: tanya "What is one more thing about you — that is not in your writing yet?" Tunggu siswa menjawab lisan, lalu dorong: "Write that."',
          cue             : 'Revisi bukan rewrite. Cukup 1 kalimat tambahan atau 1 perbaikan kecil — jangan buat siswa merasa tulisan mereka salah atau tidak cukup.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'guru dekati dan ucap panduan konkret — "You wrote about your name. Can you add something about your neighborhood? Just one sentence." Jangan dikte isi kalimatnya.',
            sudahBisa   : 'tambahkan kalimat yang menghubungkan dua topik dengan "and" — contoh: "I like my neighborhood because it is quiet and clean." atau "My [orang] is kind and my home is peaceful."',
          },
          flex            : false,
          flex_kondisi    : null,
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L10 — Self-Check  [OUTPUT · CORE]
        {
          id              : 'l10',
          tipe            : 'instruksi',
          interaction_mode: 'reflection',
          teks            : `AKSI: Guru memberi sinyal untuk berhenti menulis.
UCAP: "Put down your pen. Read your writing one more time."
→ Jeda 1–2 menit — biarkan siswa membaca tulisan mereka sendiri.

UCAP: "One question only: Is this you? Does every sentence feel true?"
→ Jeda.
UCAP: "If yes — you are done. If there is one sentence that does not feel right — change it now."
→ Siswa melakukan koreksi kecil terakhir jika perlu. ~1 menit.`,
          bantuan         : 'Jika siswa terlihat hendak menulis ulang seluruh tulisan: tepuk bahu lembut dan ucap "Just one sentence — if there is one that does not feel right." Batasi revisi terakhir pada satu perbaikan kecil.',
          cue             : 'Self-check ini tentang autentisitas — bukan kelengkapan topik atau kebenaran grammar. Siswa yang menulis 5 kalimat yang sungguh-sungguh milik mereka lebih baik dari siswa yang menulis 8 kalimat generik. Jangan tanya "sudah ada tentang orang lain belum?" — biarkan siswa menilai sendiri apakah tulisannya sudah terasa benar.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L11 — Circulation + Penilaian Formatif  [OUTPUT · CORE]
        {
          id              : 'l11',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru bergerak ke seluruh kelas dan membaca sebentar tulisan siswa satu per satu.
→ Prioritaskan:
   1. Siswa yang belum pernah dinilai di TP01, TP02, atau TP03
   2. Siswa di barisan belakang dan pojok yang jarang terlihat
→ Guru membaca tanpa komentar grammar. Cukup angguk atau senyum jika konten terasa autentik.
→ Jika ada tulisan yang terlihat menyalin model guru persis: bisikkan "Is this yours or mine?" Biarkan siswa merespons.`,
          bantuan         : null,
          cue             : 'Yang diamati di sini adalah apakah output mencerminkan siswa secara individual — bukan apakah struktur kalimat sempurna. Catat observasi secara mental atau di catatan singkat untuk penilaian formatif.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'OUTPUT',
          assessment_overlay: {
            recommended: true,
            priority   : 'belum_dinilai',
          },
          interact_contract : null,
          artifact          : null,
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 9,

      langkah: [

        // L12 — Gallery Walk / Share Pilihan  [FLEX]
        {
          id              : 'l12',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `Pilih salah satu opsi berdasarkan kondisi kelas dan sisa waktu:

Opsi A — Share dari Tempat Duduk (waktu < 8 menit atau kelas tidak kondusif untuk bergerak):
AKSI: Guru minta 2–3 siswa sukarela membacakan 1–2 kalimat favorit dari tulisan mereka.
UCAP: "Who wants to share? One or two sentences — your favorite part. From your seat is fine."
→ Setelah setiap siswa berbagi: guru tanya kelas — "Did anyone write something similar?"

Opsi B — Gallery Walk (waktu cukup dan kelas kondusif):
AKSI: Siswa menempel tulisan di atas meja masing-masing.
UCAP: "Walk around — read two or three writing from your classmates."
UCAP: "Three minutes. Then back to your seat."
→ Siswa berjalan dan membaca tulisan teman tanpa berkomentar. Guru circulate dan observasi.`,
          bantuan         : 'Jika tidak ada yang mau sukarela di Opsi A: tunjuk siswa yang tadi paling aktif di INTERACT — mereka sudah dalam mode berbicara dan lebih siap.',
          cue             : 'Gallery Walk bukan presentasi formal — tidak ada evaluasi dan tidak ada komentar publik. Siswa hanya membaca, bukan menilai. Ini kesempatan siswa merasakan bahwa teman-teman mereka punya cerita yang berbeda-beda.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 8 menit',
          blok            : null,
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L13 — Closure  [CORE]
        {
          id              : 'l13',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas.
UCAP: "Today you wrote about yourself. All of you — in one piece."
→ Jeda.
UCAP: "Your name. Your home. Your neighborhood. The people you know."
→ Jeda.
UCAP: "That is a lot to carry in one page."

AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Keep this. It is yours."
→ Jeda singkat.
UCAP: "Next time — we move on. New things to talk about, new things to write."
UCAP: "But today — you did something complete."

UCAP: "Good work. See you next time."`,
          bantuan         : null,
          cue             : 'Nada penutup adalah validasi Panen — bukan pengumuman topik berikutnya. "You did something complete" adalah kalimat yang menegaskan bahwa apa yang sudah dibuat hari ini punya nilai dan selesai — bukan hanya latihan.',
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

export default tp_c04;

/*
 * =============================================================
 * CATATAN KONVERSI — tp-04-v1.js
 * =============================================================
 *
 * Field yang tidak bisa diisi dari .txt (diisi default):
 *   - indikator[]: derived dari tujuan Panen dan instruksi skenario.
 *   - vocab[]: kosong — TP Panen, tidak ada vocab baru.
 *   - printables[]: kosong.
 *   - text_anchor: null — TP Panen by design.
 *
 * Keputusan ambiguitas:
 *   1. interact_contract L5 gap_type = 'opinion': instruksi "Is that like you —
 *      or different?" meminta siswa membandingkan pengalaman — ini lebih dekat ke
 *      opinion gap daripada information gap karena jawaban bergantung pada
 *      perspektif personal.
 *
 *   2. Breakpoint after_langkah_id = 'l8': posisi breakpoint di .txt adalah
 *      setelah L8 (Writing Utama). resume_at = 'l9' (Revisi + Extend).
 *      preserve_context.artifacts = true karena tulisan fisik siswa diperlukan
 *      di sesi lanjutan.
 *
 *   3. L10 interaction_mode = 'reflection': aktivitas utama adalah membaca ulang
 *      dan menilai tulisan sendiri — ini lebih dekat ke refleksi daripada writing.
 *
 * =============================================================
 */
