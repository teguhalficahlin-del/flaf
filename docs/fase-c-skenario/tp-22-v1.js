/**
 * =============================================================
 * FLAF — TP C22 (My World Project)
 * File: docs/fase-c-skenario/tp-22-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 6)
 * Kluster: — (Capstone lintas kluster)
 * Jenis: Capstone
 * Source: flaf-c-tp22-v2.txt
 * Converted: Juni 2026
 * =============================================================
 *
 * Capstone kedua dan terakhir Fase C.
 * Siswa memproduksi satu proyek: teks (opinion/story/description/combination)
 * + visual (gambar/diagram/peta/deskripsi visual).
 * Tidak ada model di papan selama produksi. Satu-satunya model = demo guru L4.
 * Sampling lisan individual di L12 memverifikasi kriteria ke-4 rubrik.
 * =============================================================
 */

export const tp_c22 = {

  id        : 'tp-c22',
  nomor     : 22,
  kelas     : 6,
  nama      : 'My World Project',
  tema      : 'Capstone',
  kluster   : '—',
  jenis     : 'Capstone',
  deskripsi : `Capstone kedua dan terakhir Fase C.
Siswa memproduksi proyek individual: satu teks komunikatif + satu visual.
Empat jenis teks tersedia: Opinion, Story, Description, Combination.
Rubrik empat kriteria: Text, Content, Visual, Oral.
Sampling lisan individu di L12 memverifikasi bahwa proyek benar-benar milik siswa.
Tidak ada model baru di papan setelah L4. Ketiadaan model adalah desain, bukan kelalaian.`,

  indikator: [
    'Peserta didik dapat memproduksi teks komunikatif minimal tiga kalimat dalam register dan tipe pilihan sendiri (opinion/story/description/combination).',
    'Peserta didik dapat memproduksi visual yang relevan dengan teks (gambar, diagram, peta, atau deskripsi visual).',
    'Peserta didik dapat menjelaskan proyek mereka secara lisan dalam 2–3 kalimat kepada guru ketika diminta.',
  ],

  vocab: ['opinion', 'story', 'description', 'combination', 'topic', 'visual', 'project', 'register', 'informal', 'formal'],

  persiapan: [
    'Choice Card (cetak atau tulis satu per siswa sebelum kelas): Baris 1: "My topic: ___" / Baris 2: "Register: □ informal □ formal" / Baris 3: "Visual: □ drawing □ diagram □ map □ photo description" / Garis pemisah / Baris 4: "My first sentence: ___ / ___". Dibagikan di L6.',
    'Poster mini demo guru (disiapkan sebelum kelas, dibawa masuk oleh guru): Satu lembar kertas A5. Gambar tangan warung kecil (persegi panjang sederhana + tulisan "Warung Pak Hendra"). Di bawah gambar, tulisan tangan tiga kalimat: "I think Warung Pak Hendra is the best warung near my school." / "Last week I went there with my friends and we had mie ayam." / "It is small but the food is always delicious." PENTING: gambar harus terlihat dibuat tangan — tidak sempurna. Setelah L4 selesai: SET ASIDE.',
    'Papan tulis sebelum kelas dimulai: di sisi kiri — "Opinion · Story · Description · Combination". Rubrik 4 kriteria ditulis di pojok papan saat L5. TIDAK ADA kalimat contoh di papan selama produksi (L9 sampai selesai).',
  ],

  checklist: [
    'L1 reactivation: "Last time — you read texts from the real world. Who remembers one sentence from their response?" — satu kalimat dari tulisan TP21; "Today — last time. You don\'t read someone else\'s text. You create your own." diucapkan setelah respons',
    'L4 demo: poster mini warung Pak Hendra ditunjukkan, tiga kalimat dibacakan (opinion + story + description), gambar tangan dikomentari "Not perfect — that\'s okay" — setelah demo selesai, poster di-SET ASIDE',
    'L5 rubrik: empat baris ditulis di pojok papan sebelum L6 — BUKAN tabel, BUKAN kolom skor',
    'L5: kriteria ke-4 disampaikan eksplisit: "I will come to each of you and ask: \'Tell me about your project.\'"',
    'L6: Choice Card dibagikan di L6 — tidak sebelumnya',
    'L7 demo: guru membacakan KEEMPAT elemen Choice Card (topik + register + visual + kalimat pertama)',
    'L7 INTERACT: setiap siswa mengajukan minimal SATU pertanyaan berdasarkan apa yang didengar',
    'Tidak ada kalimat model baru di papan setelah L4',
    'Jika siswa minta contoh selama L9–L11: jawaban guru = "Look at what you wrote in TP17, 18, or 19"',
    'BREAKPOINT ALAMI: "Stop here. Save your project. Next time we start from Layar 9."',
    'L12 sampling: guru MENDEKATI siswa individual, TIDAK memanggil ke depan — 5–8 siswa, maksimal 30 detik',
    'L12 pertanyaan sampling verbatim: "Tell me about your project — what is it about and why did you choose this topic?"',
    'L12 DARURAT: siswa tidak bisa menjawab dalam 30 detik → "Thank you — keep working." — TIDAK menunggu',
    'L15 closure — lima kalimat verbatim dengan jeda: "Today — you made something." / "Your topic. Your words. Your image." / "Keep it." / "Show it to someone outside this classroom." / "That is the end."',
  ],

  printables: [
    { file: 'tp-c22-choice-card.png', label: 'Project Choice Card' },
  ],

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
    'L11 🟡',
    'L12 🟡',
    'L13 🟡',
    'L14 🟡',
    'L15 🔵',
  ],

  catatan: {
    risiko: [
      'L4: risiko demo terlalu panjang. Demo maksimal 4 menit — tunjuk, baca, label, set aside.',
      'L6: risiko siswa menghabiskan terlalu lama untuk memilih topik. Setelah 3 menit tanpa progres: BANTUAN aktif.',
      'L7: risiko B tidak bertanya tapi hanya berkata "bagus." Circulate aktif di 2 menit pertama.',
      'L9: risiko siswa menyalin kalimat demo guru ("I think Warung Pak Hendra..."). Cek saat circulate.',
      'L12: risiko guru menghabiskan terlalu lama pada satu siswa. Protokol 30 detik adalah batas keras.',
    ],
    autonomy: [
      'Demo L4 boleh diganti dengan contoh proyek yang lebih relevan secara lokal — selama topik personal guru, gambar tidak sempurna, tiga kalimat kombinasi tipe.',
      'Choice Card boleh diisi digital jika sekolah punya akses.',
      'Jika waktu L6 terasa kurang: naikkan budget menjadi 7 menit dan potong L8.',
      'Gallery walk L13 boleh diganti dengan "pass your project to the next person" jika ruang tidak memungkinkan.',
    ],
  },

  text_anchor    : null,
  connector_aktif: 'semua connector TP01–20 tersedia; because paling natural dalam penjelasan lisan; and, but, so hadir sesuai jenis teks; tidak ada connector baru',
  recycle_fase_b : [
    'I think... because... (TP17/TP06) — pola opinion',
    'Last week I... / Yesterday I... (TP18/TP20) — pola story',
    'It is... / There is... (TP11/TP19) — pola description',
    'She/He has... / I have... (TP02) — pola deskripsi',
    'I like... because... (TP06/TP13) — pola opinii',
    'first, then, after that (TP05/TP14) — pola sekuens',
  ],

  breakpoints: [
    {
      type             : 'breakpoint',
      id               : 'bp-tp-c22-1',
      kind             : 'natural',
      after_langkah_id : 'l8',
      resume_at        : 'l9',
      text             : 'Stop here. Save your project.\nNext time we start from Layar 9 — finishing your project.',
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
    teks   : `Guru berdiri di depan kelas. Papan sudah bertuliskan "Opinion · Story · Description · Combination" di sisi kiri. Choice Card belum dibagikan.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut.
UCAP: "Today is the last day."
→ Jeda panjang. Biarkan kalimat ini landing. Tidak perlu diterjemahkan.
→ Lanjut ke L1.`,
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
          teks            : `AKSI: Guru berdiri di depan kelas. Tidak menunjukkan apapun.
UCAP: "Last time — you read texts from the real world."
→ Jeda.
UCAP: "Who remembers one sentence from their response?"
→ Tunggu SATU siswa menyebut kalimat dari tulisan TP21.
→ Guru angguk dan terima. Satu siswa sudah cukup.
→ Jeda.
UCAP: "Today — last time."
→ Jeda.
UCAP: "You don't read someone else's text."
→ Jeda.
UCAP: "You create your own."
→ Lanjut ke L2.`,
          bantuan         : 'Jika tidak ada yang merespons dalam 10 detik: ucap "Last time you read about a real text — who remembers one word from what you wrote?" Tunggu satu kata.',
          cue             : '"You don\'t read someone else\'s text. You create your own." adalah turning point: siswa bukan lagi pembaca teks milik orang lain — mereka menjadi penulis teks untuk dunia nyata.',
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
          teks            : `UCAP: "This is My World Project."
→ Tulis di tengah papan: "MY WORLD PROJECT"
UCAP: "One project. Your topic. Your words. Your image."
→ Jeda.
UCAP: "By the end — you have something real."
→ Tunjuk sisi kiri papan: "Opinion · Story · Description · Combination"
UCAP: "Four types. You choose."
→ Jeda singkat.
UCAP: "Let me show you first."
→ Lanjut ke L3.`,
          bantuan         : null,
          cue             : null,
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika kelas sudah responsif di L1 dan waktu tersisa < 55 menit',
          blok            : null,
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 57,

      langkah: [

        // L3 — Orientasi: Empat Jenis Teks  [INPUT · CORE]
        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `UCAP: "Four types of text. Look at the board."
→ Tunjuk: "Opinion · Story · Description · Combination"
UCAP: "Opinion — what YOU think. 'I think... because...'"
UCAP: "Story — what happened. 'Last week I...'"
UCAP: "Description — what something looks like or is. 'It is... There is...'"
UCAP: "Combination — two or more types together."
→ Jeda.
UCAP: "One type is best for your topic. You will choose."
→ Tunjuk papan sekali lagi.
UCAP: "These stay on the board all day."
→ Lanjut ke L4.`,
          bantuan         : null,
          cue             : 'Empat jenis teks diperkenalkan secara minimal — satu kalimat pembuka per tipe. L3 hanya memberi label eksplisit agar bisa digunakan sebagai referensi di Choice Card.',
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

        // L4 — Demo Guru: Poster Mini Warung Pak Hendra  [INPUT · CORE]
        {
          id              : 'l4',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru mengambil poster mini warung Pak Hendra yang sudah disiapkan.
Tunjukkan ke kelas.
👂 LISTEN FIRST — kelas perhatikan, belum menulis apapun.

UCAP: "This is my project."
→ Tunjukkan poster ke kelas. Minta siswa melihat, bukan menyalin.
UCAP: "I chose Warung Pak Hendra. Near my school."
→ Tunjuk gambar tangan di poster.
UCAP: "This is my drawing. Not perfect — that's okay."
→ Jeda singkat. Biarkan siswa melihat bahwa gambar tidak sempurna.
→ Tunjuk teks di poster. Baca tiga kalimat secara perlahan:

UCAP: "I think Warung Pak Hendra is the best warung near my school."
→ Jeda.
UCAP: "Last week I went there with my friends and we had mie ayam."
→ Jeda.
UCAP: "It is small but the food is always delicious."
→ Jeda.

UCAP: "Three sentences."
→ Tunjuk kalimat satu per satu:
UCAP: "Opinion. Story. Description."
→ Tunjuk label "Combination" di papan.
UCAP: "That is Combination."
→ Jeda.
UCAP: "One image. Three sentences. Your topic. That is the project."

AKSI: Set aside poster. TIDAK ditampilkan lagi selama produksi berlangsung.`,
          bantuan         : 'Jika siswa bertanya "Harus tiga kalimat?": ucap "Minimum three. More is fine."',
          cue             : 'Demo ini adalah SATU-SATUNYA model sebelum produksi. Setelah poster di-set aside — JANGAN tampilkan lagi saat produksi berlangsung. Jika siswa menunjuk poster: "Your topic is different — use your own words."',
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

        // L5 — Rubrik 4 Kriteria  [INPUT · CORE]
        {
          id              : 'l5',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru menulis rubrik di pojok papan — biarkan sampai akhir sesi.
Tulis persis begini (empat baris terpisah, BUKAN tabel):
  "1. Text: is there a communicative text?"
  "2. Content: is it about your own topic?"
  "3. Visual: does the image support the text?"
  "4. Oral: can you explain your project in 2-3 sentences?"

UCAP: "These are the four things I will check."
→ Tunjuk rubrik.
UCAP: "One: you have a text. Not a title — a TEXT."
UCAP: "Two: it is YOUR topic. Not the warung. Not any example."
UCAP: "Three: your image matches your words."
→ Jeda.
UCAP: "Four: you can explain your project to me."
→ Jeda.
UCAP: "I will come to each of you and ask: 'Tell me about your project.'"
→ Jeda.
UCAP: "These stay on the board. Check when you finish."
→ Lanjut ke L6.`,
          bantuan         : null,
          cue             : 'Kriteria ke-4 (penjelasan lisan) disampaikan sekarang — bukan di akhir sebagai kejutan. Siswa tahu sejak awal bahwa guru akan mendatangi mereka.',
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

        // L6 — Choice Card: Rencanakan Proyekmu  [INTERACT · CORE]
        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Bagikan Choice Card — satu per siswa.

UCAP: "Fill in your card. Four things."
→ Tunjuk keempat bagian di kartu sambil menjelaskan:
UCAP: "One — your topic. Choose something you know well. Your life, your place, your experience."
UCAP: "Two — register. Informal: like talking to a friend. Formal: like a notice or announcement."
UCAP: "Three — visual. What image will you make?"
UCAP: "Four — your first sentence. Write it now."
→ Jeda.
UCAP: "Five minutes. Silent. Think first — then write."
→ Siswa mengisi Choice Card. Waktu: 5 menit.

AKSI: Guru circulate pelan-pelan.
→ Perhatikan siswa yang blank lebih dari 2 menit — ini prioritas BANTUAN.
→ Jangan membaca kartu siswa kecuali diminta.
→ Jangan koreksi pilihan topik yang "tidak umum" — topik unik adalah nilai.`,
          bantuan         : [
            'Jika siswa tidak bisa memilih topik setelah 2 menit: bisik "What did you write about in TP17, 18, or 19? Start from there — or choose something different."',
            'Jika siswa tidak bisa menulis kalimat pertama: bisik "Look at the board — Opinion? Story? Description? Start with that type."',
          ],
          cue             : '"Choose something you know well." adalah instruksi terpenting di L6. Topik abstrak ("the world", "happiness") akan menghasilkan teks yang tidak genuine.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INTERACT',
          assessment_overlay: null,
          interact_contract : null,
          artifact: {
            type                    : 'choice_card',
            fields                  : ['topik', 'register', 'visual_type', 'kalimat_pertama'],
            required_before_interact: true,
          },
        },

        // L7 — Share Choice Card dengan Pasangan  [INTERACT · CORE]
        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `Demo — maksimal 45 detik:
👂 LISTEN FIRST — kelas perhatikan.
Guru membaca keempat elemen Choice Card demo ke satu siswa (verbal):
UCAP: "My topic: Warung Pak Hendra."
UCAP: "Register: informal."
UCAP: "Visual: hand drawing."
UCAP: "First sentence: 'I think Warung Pak Hendra is the best warung near my school.'"
→ Guru ke siswa: "What type of text is that?"
→ Siswa: "Opinion!" (atau "Combination!")
→ Guru: "Yes. What will my visual look like?"
→ Siswa: "A warung!"
→ Guru ke kelas: "You heard four things. You can predict the project."
UCAP: "Now — share your card with your partner. Read all four. Partner asks ONE question."

AKSI: Siswa bekerja berpasangan.
UCAP: "A reads all four elements — B listens, then asks ONE question."
UCAP: "A answers. Then swap."
→ Total: 4–5 menit (2 menit per arah).

Jenis pertanyaan yang valid dari pasangan:
- "Why did you choose that topic?"
- "Why formal — not informal?"
- "Why a map? Is your topic about a place?"
- "Is your first sentence opinion or description?"

AKSI: Guru circulate.
→ Perhatikan apakah B benar-benar mendengarkan sebelum bertanya.
→ Jika B tidak bertanya sama sekali: bisik "Ask A one question about the card."`,
          bantuan         : null,
          cue             : 'Gap genuine di L7 adalah CHOICE GAP: setiap Choice Card berbeda karena kombinasi empat elemen bersifat personal. Validitas INTERACT: B harus mengajukan pertanyaan yang hanya bisa ditanyakan setelah mendengar keempat elemen.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas.
2. Demo ulang dengan satu pasangan di depan.
3. Sederhanakan: "Cukup tanya satu hal: 'Why did you choose that topic?'"
4. Restart — batasi 90 detik per arah.`,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INTERACT',
          assessment_overlay: null,
          interact_contract: {
            gap_type         : 'choice',
            artifact_required: true,
            artifact_type    : 'choice_card',
            collapse_signal  : 'pair diam > 90 detik',
          },
          artifact: null,
        },

        // L8 — Micro-output: Kalimat Pertama Lisan  [INTERACT · FLEX]
        {
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `UCAP: "Before we write — say your first sentence. To your partner. Now."
→ A ucap kalimat pertama dari Choice Card ke B. B dengarkan.
→ B ucap kalimat pertamanya ke A.
→ Tidak ada evaluasi. Total: ~1 menit.
UCAP: "Good. Keep that sentence. Start from there."
→ Transisi ke BREAKPOINT dan OUTPUT.`,
          bantuan         : null,
          cue             : 'L8 adalah warm-up mulut sebelum tangan menulis. Tidak ada umpan balik guru terhadap kalimat yang terdengar kurang sempurna.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 5 menit sebelum BREAKPOINT atau kelas sudah antusias',
          blok            : 'INTERACT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L9 — Produksi TEKS  [OUTPUT · CORE]
        {
          id              : 'l9',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `UCAP: "Now — write."
→ Tunjuk papan: "Opinion · Story · Description · Combination" dan rubrik di pojok.
UCAP: "Look at your Choice Card. Start from your first sentence."
UCAP: "Write minimum three sentences. In English."
UCAP: "No model on the board. Use what you know."
→ Jeda.
UCAP: "Eight minutes. Start."
→ Siswa mulai menulis. Waktu: 8 menit.
→ Beri 3 menit sebelum circulate.

AKSI: Circulate setelah 3 menit. Pertanyaan guru saat mendekati:
→ "What are you writing about?"
→ Dengarkan. Tidak mengoreksi. Respons guru yang valid: angguk, atau "Good — keep going."
→ Jika teks tidak koheren dengan topik di Choice Card: bisik "Does this sentence fit your topic? Read it again."
→ Jika siswa menulis kalimat demo guru secara verbatim ("I think Warung Pak Hendra..."): bisik "Your topic is different. Cross that and start from your own topic."
→ Jika siswa menulis dalam Bahasa Indonesia: bisik "In English — use what you know. First sentence first."`,
          bantuan         : [
            'Jika siswa freeze: ucap "Start with your first sentence from the card. Copy it — then write one more thing about your topic."',
            'Jika siswa minta contoh kalimat: ucap "Look at what you wrote in TP17, 18, or 19." Tidak memberi contoh baru.',
          ],
          cue             : 'Tidak ada kalimat model di papan. Yang ada hanya: rubrik + empat jenis teks. Jika siswa meminta contoh: "Look at what you wrote in TP17, 18, or 19." Kalimat dari tulisan siswa sendiri adalah model paling kuat.',
          darurat         : '⚠ DARURAT — waktu ≤ 3 menit dan sebagian besar siswa baru menulis 1 kalimat:\nUcap: "Two sentences — enough for now. We continue next." Turunkan target. L10 (visual) tetap jalan.',
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

        // L10 — Produksi VISUAL  [OUTPUT · CORE]
        {
          id              : 'l10',
          tipe            : 'instruksi',
          interaction_mode: 'drawing',
          teks            : `UCAP: "Now — your image."
→ Tunjuk Choice Card siswa: "What visual did you choose? Make it now."
UCAP: "Simple is fine — one image that matches your text."
UCAP: "Your image must match your text. That's the only rule."
→ Jeda.
UCAP: "Five minutes."
→ Siswa mulai menggambar, membuat diagram, membuat notasi peta, atau menulis deskripsi visual. Waktu: 5 menit.

AKSI: Guru circulate. Pertanyaan guru saat mendekati:
→ "Does your visual match your text?"
→ Biarkan siswa menjawab lisan. Tidak menilai kualitas gambar.
→ Jika visual tidak relevan dengan teks: bisik "What does your text say? Your image should show that — not something else."
→ Jika siswa ingin membuat visual yang terlalu kompleks: bisik "Simple is enough — just one image that matches."`,
          bantuan         : [
            'Jika siswa tidak tahu harus menggambar apa: ucap "Your text is about [topic]. Draw one thing from that topic."',
            'Jika siswa memilih "photo description" di Choice Card tapi tidak punya foto: ucap "Describe it in words — what does it look like? Write: \'This is a photo of...\'"',
          ],
          cue             : 'Tolak ukur visual yang valid: jika seseorang melihat gambar tanpa membaca teks, apakah mereka bisa menebak topiknya? Jika ya — visual sudah cukup.',
          darurat         : '⚠ DARURAT — waktu ≤ 1 menit dan siswa belum mulai visual:\nUcap: "Draw one shape — just one thing that shows your topic."',
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

        // L11 — Circulate + Rubrik Check  [OUTPUT · CORE]
        {
          id              : 'l11',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `UCAP: "Look at the rubric. Check your own work."
→ Tunjuk pojok papan: empat kriteria.
UCAP: "One: is there a text — not just a title?"
UCAP: "Two: is it YOUR topic — your words?"
UCAP: "Three: does your image match your text?"
→ Jeda 30 detik — siswa check sendiri diam-diam.
UCAP: "If something is missing — fix it now. Two minutes."
→ Siswa melengkapi jika ada yang kurang.

AKSI: Guru circulate — bergerak ke barisan yang belum tersentuh di L9–L10.
→ Lihat teks: minimal 3 kalimat? Relevan dengan topik di Choice Card?
→ Lihat visual: ada gambar atau notasi yang terhubung dengan teks?
→ Untuk siswa yang teksnya masih 1–2 kalimat: bisik "One more sentence — what else about your topic?"
→ Untuk siswa yang teksnya banyak tapi visual belum ada: bisik "Quick drawing — just one thing."

Diferensiasi:
- Perlu support: tunjuk kalimat terakhir siswa, bisik "Good. Now — what do YOU think about this topic? Write: 'I think... because...'"
- Sudah bisa: bisik "Can you add one more sentence — something personal? What does this topic mean to you?"`,
          bantuan         : null,
          cue             : 'L11 adalah verifikasi sebelum sampling lisan. Teks 3 kalimat yang koheren sudah valid. Jangan mendorong penambahan kalimat hanya untuk menambah volume.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : {
            perluSupport: 'tunjuk kalimat terakhir siswa, bisik "Good. Now — what do YOU think about this topic? Write: \'I think... because...\'"',
            sudahBisa   : 'bisik "Can you add one more sentence — something personal? What does this topic mean to you?"',
          },
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
      durasi: 20,

      langkah: [

        // L12 — Sampling Lisan  [CORE]
        {
          id              : 'l12',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `UCAP: "Now — I will come to you."
→ Jeda.
UCAP: "Keep working while I walk around."
→ Siswa yang belum selesai melanjutkan proyek.
→ Siswa yang sudah selesai membaca kembali tulisan mereka.

AKSI: Guru mendekati 5–8 siswa secara individual —
TIDAK memanggil ke depan kelas.
→ Urutan: mulai dari barisan belakang atau tengah.
→ Prioritaskan: siswa yang jarang aktif di INTERACT · siswa yang teksnya tampak "terlalu rapi" · siswa yang belum pernah diobservasi di TP ini.
→ Untuk setiap siswa yang didekati — ucap pelan:
UCAP: "Tell me about your project — what is it about and why did you choose this topic?"
→ Dengarkan. Maksimal 30 detik per siswa.
→ Jika siswa bisa menjelaskan dengan 2–3 kalimat: angguk, ucap "Thank you." Lanjut ke siswa berikutnya.

Panduan distribusi sampling:
→ Jika MAYORITAS dari 5–8 sampel tidak bisa menjelaskan: hentikan sesi.
  Ucap: "Three more minutes — read your project. Prepare 2–3 sentences to explain it."
  Beri waktu. Lalu restart sampling.
→ Jika mayoritas BISA menjelaskan: lanjut ke L13.`,
          bantuan         : null,
          cue             : 'Sampling lisan adalah verifikasi kriteria ke-4 rubrik. 30 detik sudah cukup untuk sinyal: apakah siswa bisa menghubungkan topik dengan satu alasan? "I chose this because I know it well." sudah valid.',
          darurat         : `⚠ DARURAT — siswa tidak bisa menjelaskan dalam 30 detik:
Ucap: "Thank you — keep working." Lanjut ke siswa berikutnya.
JANGAN menunggu lebih dari 30 detik.
JANGAN mengoreksi. JANGAN membantu. JANGAN menjelaskan.
Ketidakmampuan menjelaskan adalah DATA untuk guru —
bukan momen koreksi publik.
Catat siswa ini untuk evaluasi setelah kelas.`,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : null,
          assessment_overlay: {
            recommended: true,
            priority   : 'barisan_belakang',
          },
          interact_contract : null,
          artifact          : null,
        },

        // L13 — Gallery Walk  [FLEX]
        {
          id              : 'l13',
          tipe            : 'instruksi',
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Siswa menaruh proyek di meja masing-masing — teks dan visual menghadap ke atas.
UCAP: "Walk around. Read two projects — not your partner's."
UCAP: "One minute per project. Silent."
→ Siswa berjalan membaca proyek teman. Waktu: 3–4 menit total.
UCAP: "Back to your seat."

AKSI: Guru pilih 1–2 proyek yang menarik secara topik — bukan yang paling rapi secara grammar.
UCAP: "I noticed [paraphrase topik siswa — tanpa menyebut nama]. Something I had not thought of."
→ Satu kalimat. Guru tidak membandingkan. Stop.`,
          bantuan         : null,
          cue             : 'Gallery walk bukan kompetisi. Guru memilih topik yang unik atau unexpected — bukan "proyek terbaik." Jangan komentari grammar atau visual apapun di depan kelas.',
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

        // L14 — Share Satu Kalimat  [FLEX]
        {
          id              : 'l14',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `UCAP: "Who wants to share? One sentence from your project. From your seat."
→ Terima 2–3 sukarela. Masing-masing baca satu kalimat.
→ Setelah setiap kalimat: UCAP "Opinion? Story? Description?"
→ Kelas menebak spontan. Tidak ada jawaban benar/salah.`,
          bantuan         : 'Jika tidak ada sukarela: tunjuk 1–2 siswa yang tadi aktif di INTERACT atau yang baru saja disampling.',
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

        // L15 — Closure  [CORE]
        {
          id              : 'l15',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas. Kelas kondusif.
UCAP: "Today — you made something."
→ Jeda.
UCAP: "Your topic. Your words. Your image."
→ Jeda.
UCAP: "Keep it."
→ Jeda.
UCAP: "Show it to someone outside this classroom."
→ Jeda.
UCAP: "That is the end."`,
          bantuan         : null,
          cue             : 'Lima kalimat ini adalah finale Fase C. Ucapkan dengan tenang dan lambat — bukan dramatis. "Show it to someone outside this classroom." adalah instruksi nyata: siswa membawa proyek pulang. "That is the end." — Fase C selesai. Jeda di antara setiap kalimat adalah bagian dari instruksi.',
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

export default tp_c22;

/*
 * =============================================================
 * CATATAN KONVERSI — tp-22-v1.js
 * =============================================================
 *
 * Keputusan ambiguitas:
 *   1. interact_contract L7 gap_type = 'choice': partner memilih topik,
 *      register, visual, kalimat pertama — semua bersifat personal.
 *      Ini adalah genuine choice gap karena setiap Choice Card
 *      kombinasinya unik per siswa.
 *
 *   2. artifact L6: type = 'choice_card', fields mencakup empat elemen
 *      yang ada di Choice Card. required_before_interact = true karena
 *      Choice Card harus selesai sebelum pair sharing di L7.
 *
 *   3. interaction_mode L10 (Produksi Visual): ditetapkan 'writing'
 *      karena ini tetap produksi tulis/gambar secara individual.
 *      Tidak ada enum khusus untuk 'drawing' dalam schema.
 *
 *   4. L12 (Sampling Lisan) tidak punya blok — ini bukan OUTPUT,
 *      INTERACT, atau INPUT. Ini adalah verifikasi akhir.
 *      blok = null, konsisten dengan penutup di TP lain.
 *
 * =============================================================
 */
