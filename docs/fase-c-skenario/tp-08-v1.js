/**
 * =============================================================
 * FLAF — TP C08 (Writing: My Typical Day)
 * File: docs/fase-c-skenario/tp-08-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 5)
 * Kluster: B — Dunia Sehari-hari
 * Jenis: Panen
 * Source: flaf-c-tp08-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c08 = {

  id        : 'tp-c08',
  nomor     : 8,
  kelas     : 5,
  nama      : 'Writing: My Typical Day',
  tema      : 'Dunia Sehari-hari',
  kluster   : 'B',
  jenis     : 'Panen',
  deskripsi : '',

  indikator: [
    'Peserta didik dapat mengintegrasikan topik rutinitas, hobi, dan makanan dari TP05–07 ke dalam satu tulisan mandiri.',
    'Peserta didik dapat menggunakan minimal dua dari empat connector (and, then, because, but) dalam tulisan mandiri tanpa template.',
    'Peserta didik dapat memproduksi tulisan minimal tiga kalimat yang mencerminkan kehidupan nyata mereka sendiri.',
  ],

  vocab: [],

  persiapan: [
    'Writing Plan Sheet (satu per siswa): secarik kertas kecil untuk planning — tiga baris kosong, diisi siswa dengan catatan singkat: My routine · My hobby · My food. Bisa dicetak atau siswa menulis sendiri di kertas kecil. Digunakan di L4 dan L6.',
    'Writing Paper (satu per siswa): kertas tulis bersih tanpa baris isian. Satu lembar — dipakai untuk Stage 1 (L7–L8) dan dilanjutkan untuk Stage 2 (L9). Jangan gunakan form berkolom atau template bergaris — blank paper saja.',
    'Brief di papan (tiga baris, ditulis sebelum sesi dimulai): "Write about your week." / "What you do. What you like. What you eat." / "Use: and · then · because · but" — Tetap tampil dari L2 sampai akhir sesi.',
  ],

  checklist: [
    'Brief di papan hanya tiga baris — tidak ada tambahan tulisan apapun sepanjang sesi',
    'Model guru di L3 diucapkan lisan saja — tidak ditulis di papan; jika diminta: "That is mine. Yours will be different."',
    'Demo INTERACT di L6 mencakup tiga langkah konkret: share plan → partner pilih → penulis respons',
    'Writing Paper adalah blank paper — tidak ada form, kolom, atau baris isian',
    'Tidak ada vocab atau pola baru diperkenalkan sepanjang sesi',
    'BREAKPOINT ALAMI ditandai eksplisit — instruksi sesi lanjutan tersedia di layar BREAKPOINT',
    'Guru tidak mendominasi lebih dari 40% layar (L2 dan L3 adalah satu-satunya layar guru-dominant)',
    'Output setiap siswa berbeda — tidak ada template yang bisa disalin',
    'Guru sudah mendekati minimal 2–3 siswa barisan belakang di L7 atau L9',
  ],

  printables: [],

  energi_map: [
    'L0 ⚪',
    'L1 🟡',
    'L2 🟡',
    'L3 🟡',
    'L4 🔵',
    'L5 🟠',
    'L6 🟡',
    'L7 🔵',
    'L8 🔵',
    'L9 🔵',
    'L10 🔵',
    'L11 🟡',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L4: Siswa yang blank saat planning akan blank juga saat writing. BANTUAN bisik harus terjadi di menit ke-1, bukan menit ke-3.',
      'L6: Demo tiga langkah harus persis — jika guru melewatkan langkah 3 ("OK — I will write more about that"), siswa tidak tahu apa yang harus direspons setelah dipilih pasangan.',
      'L7: Blank paper tanpa template bisa membuat beberapa siswa panik di menit pertama. Beri waktu start tanpa intervensi — baru circulate di menit ke-3.',
      'BREAKPOINT: Jika sesi berjalan lancar dan Stage 2 dimulai, BREAKPOINT tidak perlu diumumkan. Hanya digunakan jika waktu habis sebelum L9.',
    ],
    autonomy: [
      'Aktivitas dalam model guru (L3) boleh diganti dengan kebiasaan nyata guru sendiri — semakin personal, semakin autentik sebagai model.',
      'Writing Plan Sheet boleh disederhanakan menjadi 2 baris saja (My routine · My food) jika waktu L4 mepet.',
      'Boleh memperpanjang Stage 1 (L7) sampai 12 menit jika kelas terlihat produktif dan kondusif.',
      'Boleh skip L11 (peer review) jika guru melihat kelelahan setelah Stage 2 — closure lebih penting dari review di TP Panen.',
      'Pertanyaan "Does it sound like you?" di L8 boleh diucapkan dalam bahasa Indonesia jika kelas tampak tidak mengerti.',
    ],
  },

  text_anchor    : null,
  connector_aktif: 'and · then · because · but — semua connector Kluster B tersedia untuk produksi bebas; tidak ada connector baru di TP ini',
  recycle_fase_b : [
    'I usually... / first, then, after that (TP06 Fase B)',
    'On [day] I... (TP07 Fase B)',
    'I like... · I like... because... (TP13 Fase B)',
    'Yesterday I... (TP05 Fase B — exposure)',
  ],

  breakpoints: [
    {
      type             : 'breakpoint',
      id               : 'bp-tp-c08-1',
      kind             : 'natural',
      after_langkah_id : 'l8',
      resume_at        : 'l9',
      text             : 'Good. Save your text. We continue next time.',
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
    teks   : `Guru berdiri di depan kelas. Brief sudah tertulis di papan — siswa bisa membacanya saat masuk.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut menjawab.
UCAP: "Today — we write."
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
          teks            : `AKSI: Guru tidak menunjukkan text-anchor TP07 — cukup bertanya dari tulisan siswa sendiri.
UCAP: "Last time — you wrote about food. What you eat and why."
→ Jeda.
UCAP: "Who remembers one sentence from their writing? With because or but."
→ Tunggu 2–3 siswa menyebut kalimat dari tulisan mereka sendiri di TP07.
→ Guru tidak mengoreksi — angguk dan terima apapun yang muncul.

AKSI: Setelah 2–3 respons, bridge ke topik hari ini.
UCAP: "Good. Today — we write about more than food."
UCAP: "Your whole week."`,
          bantuan         : 'Jika tidak ada yang merespons dalam 5 detik: ucap satu kalimat model sederhana — "I eat rice because it gives me energy. Who has a sentence like this?" — tunggu siswa melanjutkan dengan versi mereka sendiri.',
          cue             : 'Reactivation ini merujuk tulisan siswa sendiri dari TP07 — bukan text-anchor Rina, bukan kalimat guru. Yang penting: pola 'because' dan 'but' aktif kembali di kepala siswa sebelum masuk ke brief.',
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
          teks            : `AKSI: Guru menunjuk brief di papan — tiga baris, sudah tertulis sejak L0.
UCAP: "Look at the board. Three things."
→ Tunjuk baris 1: "Write about your week."
→ Tunjuk baris 2: "What you do. What you like. What you eat."
→ Tunjuk baris 3: "Use: and · then · because · but"

UCAP: "Write about your week — what you do, what you like, and what you eat because it matters to you."
→ Jeda.
UCAP: "Maybe you have a routine you like, but also one you don't."
→ Jeda.
UCAP: "This is your text. Your week is different from everyone else."`,
          bantuan         : 'Jika siswa bertanya "harus berapa kalimat?": ucap "At least three. More is better." Tidak perlu batasan atas.',
          cue             : ''because' dan 'but' ada dalam kalimat instruksi guru — bukan kalimat model yang bisa disalin. Guru tidak menjelaskan connector — siswa sudah kenal keduanya dari TP06 dan TP02.',
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
      durasi: 45,

      langkah: [

        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas. Brief masih di papan — tidak ada tambahan tulisan.
UCAP: "Let me show you what I mean. My week."
UCAP: "On Monday I go to school early. I like Monday because the class is quiet."
UCAP: "But on Friday I feel tired. Then I go home and rest."
UCAP: "I eat rice for lunch because it gives me energy. But I also like noodles sometimes."
→ Jeda singkat.
UCAP: "That is my week. Yours will be different."

→ Guru TIDAK menulis kalimat-kalimat ini di papan.
→ Jika siswa meminta ditulis: "That is mine. Yours will be different." Lanjutkan tanpa menulis.

AKSI: Langsung lanjut ke L4 tanpa choral repeat dan tanpa drill.`,
          bantuan         : null,
          cue             : 'Model ini hanya menunjukkan panjang dan nada — bukan kata-kata yang bisa disalin. Dengan tidak menulisnya di papan, siswa tidak punya pilihan selain menggunakan kata-kata mereka sendiri.',
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
          interaction_mode: 'writing',
          teks            : `AKSI: Bagikan Writing Plan Sheet yang sudah dicetak, atau minta siswa mengambil kertas kecil dan menulis tiga baris sendiri.
UCAP: "Before you write — make a plan."
UCAP: "Three things: your routine, your hobby, your food. Just notes — not sentences yet."
UCAP: "Two minutes. Go."
→ Guru diam. Biarkan siswa berpikir dan menulis catatan singkat.

AKSI: Setelah 2 menit, guru circulate sebentar.
→ Lihat apakah setiap siswa sudah punya tiga catatan — satu per baris.
→ Tidak perlu cek tiap siswa — cukup barisan belakang.`,
          bantuan         : 'Jika siswa tidak tahu apa yang ditulis di plan: ucap perlahan "What do you do on a school day? Just one word — that is your routine." Biarkan siswa menulis satu kata, lanjut ke baris berikutnya.',
          cue             : 'Writing Plan Sheet adalah catatan kerja siswa — bukan lembar yang dikumpulkan. Siswa membawa plan ini ke L6 (INTERACT) dan menggunakannya saat menulis.',
          darurat         : '⚠ DARURAT — ada siswa yang masih blank setelah 2 menit:\nDekati, tunjuk baris pertama "My routine," tanya dalam bahasa Indonesia jika perlu — "Kamu biasanya ngapain pagi-pagi?" Bantu isi satu kata saja. Tidak perlu tunggu ketiga baris terisi.',
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
          id              : 'l5',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru ucap sentence starter, siswa lanjutkan secara spontan.
→ Cepat — tidak ada yang "benar" atau "salah."

"I like football..." → siswa: "because it is fun" / "and I play with friends"
"I eat rice every day..." → siswa: "because it gives me energy"
"My routine is good..." → siswa: "but it is sometimes boring"
"On Monday I go to school, then..." → siswa: "I eat breakfast" / "I go home"

AKSI: Lakukan 4–5 starter, cepat, tanpa koreksi.
→ Jika ada respons yang menggunakan connector yang tidak diharapkan — angguk dan terima.`,
          bantuan         : 'Jika kelas tidak merespons starter pertama: ucap respons sendiri — "because it is fun" — lalu ulangi starter yang sama dan tunjuk siswa lain.',
          cue             : 'Ini warming up, bukan tes. Tujuannya satu: connector `and · then · because · but` sudah terasa natural di mulut siswa sebelum mereka menulis.',
          darurat         : null,
          energi          : '🟠',
          energy_level    : 'active',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika kelas sudah dalam mode fokus sejak L3–L4',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Demonstrasi tiga langkah — maksimal 2 menit.
👂 LISTEN FIRST — kelas perhatikan dulu.

Langkah 1: Guru tunjukkan plan sendiri (3 hal, ucapkan lisan):
UCAP: "My routine: school early. My hobby: reading. My food: rice."

Langkah 2: Tunjuk satu siswa.
UCAP: "Choose one — which do you want to know more about?"
→ Siswa memilih: "Your [food / hobby / routine]."

Langkah 3: Guru merespons ke seluruh kelas:
UCAP: "OK — I will write more about that. My [food] section will be the longest."

UCAP: "Now — your turn. Share your plan. Let your partner choose."

AKSI: Siswa bekerja berpasangan.
→ Siswa A membacakan plan (3 hal) ke siswa B.
→ Siswa B memilih SATU: "I want to know more about your [routine / hobby / food]."
→ Siswa A merespons: "OK — I will write more about [that]."
→ Bergantian: B share, A pilih, B respons.
→ Waktu total: 4–5 menit.

AKSI: Guru circulate — tidak perlu intervensi kecuali pair diam.`,
          bantuan         : [
            'Jika siswa tidak bisa memilih dari plan partner: ucap "Pick one word — which is most interesting?" — cukup siswa menunjuk satu kata dari plan partner.',
            'Jika siswa A tidak tahu bagaimana merespons setelah B memilih: ucap contoh — "OK — I will write more about that." Minta siswa mengulangi kalimat itu.',
          ],
          cue             : 'Demo tiga langkah ini adalah kunci — tanpa demo, siswa tidak tahu bahwa pilihan pasangan menentukan bagian mana yang diperluas. Langkah 2 (partner memilih) dan langkah 3 (penulis merespons) harus kedua-duanya ada dalam demo.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas.
2. Demo ulang langkah 1–2–3 dengan pasangan baru di depan.
3. Sederhanakan: cukup langkah 2 saja — "Point to one word in your partner's plan."
4. Restart — batasi 60 detik.`,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INTERACT',
          assessment_overlay: {
            recommended: true,
            priority   : null,
          },
          interact_contract: {
            gap_type         : 'choice',
            artifact_required: false,
            artifact_type    : null,
            collapse_signal  : 'pair diam > 90 detik',
          },
          artifact: null,
        },

        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Bagikan Writing Paper (blank, kosong).
UCAP: "Now — write. Start with your routine and your hobby."
UCAP: "Use your plan. Use the board."
→ Brief tetap di papan. Writing Plan Sheet boleh dilihat.

AKSI: Siswa menulis secara individual.
→ Guru tidak mendiktekan kalimat. Tidak ada template di atas meja.
→ Beri waktu start 2–3 menit sebelum circulate.
→ Setelah menit ke-3: bergerak ke barisan belakang.
→ Waktu writing: 8–10 menit.

AKSI: Saat circulate, perhatikan dua hal:
1. Apakah siswa menulis dengan kata-kata sendiri, atau menyalin langsung dari catatan TP05–06?
   Jika terlihat menyalin: bisik satu pertanyaan — "Why do you like that?" — tunggu siswa menulis jawaban.
2. Siswa yang freeze di kertas kosong: ucap bisik "Start with: On Monday I..." — tinggalkan setelah satu kalimat.`,
          bantuan         : 'Jika siswa freeze (pensil di tangan, tidak menulis): bisik "What do you do on a school day? Write that first." Tunggu satu kalimat. Tinggalkan.',
          cue             : 'Blank paper tanpa template adalah desain yang sengaja. Siswa tidak punya pilihan selain mulai dari kata-kata sendiri. Jangan tawarkan scaffold tambahan di luar yang sudah ada di papan.',
          darurat         : '⚠ DARURAT — waktu ≤ 5 menit dan sebagian besar siswa baru punya 1 kalimat:\nTidak perlu panik. Ucap: "Three sentences — that is Stage 1." Turunkan target dan lanjut ke L8.',
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
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Setelah 8–10 menit, guru memberi sinyal tanpa menghentikan seluruh kelas.
UCAP: "Read what you have. Does it sound like you?"
UCAP: "One more minute — then we pause."
→ 1 menit untuk siswa membaca dan menyesuaikan tulisan mereka sendiri.
→ Guru circulate terakhir — catatan mental: siapa yang sudah punya 3+ kalimat, siapa yang masih 1–2.`,
          bantuan         : null,
          cue             : '"Does it sound like you?" adalah pertanyaan yang tepat untuk momen ini — bukan "Is it correct?" Siswa menilai tulisan dari perspektif makna, bukan struktur.',
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

        {
          id              : 'l9',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Jika lanjut dari sesi yang sama: brief masih di papan, siswa langsung lanjut.
Jika lanjut dari sesi berikutnya: bagikan tulisan siswa, beri 1 menit untuk membaca ulang.

UCAP: "Now — add your food. What you eat, and why — or what you like, but also what you don't."
UCAP: "Add to your text. Don't start over."
→ Brief masih di papan: "Use: and · then · because · but"
→ Writing Plan Sheet boleh dilihat kembali.
→ Waktu: 7–8 menit.

AKSI: Guru circulate — jangan koreksi grammar. Perhatikan apakah 'because' atau 'but' muncul secara natural.
→ Jika muncul: angguk, tidak perlu komentar.
→ Jika tidak muncul sama sekali: tidak perlu dipaksakan.`,
          bantuan         : 'Jika siswa tidak tahu harus menambahkan apa setelah Stage 1: bisik "What do you eat every day? Write that." Satu kalimat sudah cukup untuk memulai Stage 2.',
          cue             : '"Add to your text. Don\'t start over." — kalimat ini penting. Siswa yang panik dan ingin memulai dari awal akan menulis lebih sedikit, bukan lebih banyak.',
          darurat         : '⚠ DARURAT — ada siswa yang masih belum melanjutkan setelah 2 menit Stage 2:\nDekati, tunjuk tulisan Stage 1 siswa, tanya bisik "What do you eat?" Tunggu siswa menulis satu kalimat. Tinggalkan.',
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

        {
          id              : 'l10',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Setelah 7 menit, guru memberi sinyal.
UCAP: "Two more minutes. Read everything. Can you add one sentence that connects two parts?"

Diferensiasi:
- Perlu support: guru dekati, tanya "What do you eat on weekends?" — tunggu siswa menulis satu kalimat tambahan tanpa dikte.
- Sudah bisa: tambah satu kalimat yang menyambungkan dua bagian dari tulisan — contoh: "I like playing football, but I always eat rice first because I need energy."

AKSI: Guru circulate — lihat tulisan siswa tanpa mengoreksi.
→ Jika connector muncul spontan — angguk, tidak perlu komentar lebih.`,
          bantuan         : null,
          cue             : 'Diferensiasi "Sudah bisa" mengacu pada pengalaman konkret siswa (makanan sebelum aktivitas), bukan pada kemampuan bahasa itu sendiri.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'guru dekati, tanya "What do you eat on weekends?" — tunggu siswa menulis satu kalimat tambahan tanpa dikte.',
            sudahBisa   : 'tambah satu kalimat yang menyambungkan dua bagian dari tulisan — contoh: "I like playing football, but I always eat rice first because I need energy."',
          },
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 5 menit setelah Stage 2',
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l11',
          tipe            : 'instruksi',
          interaction_mode: 'peer_review',
          teks            : `AKSI: Siswa swap tulisan dengan pasangan.
UCAP: "Read your partner's text. Then write one question in the corner of the paper — something you want to know more about."
→ Contoh pertanyaan yang wajar: "What do you eat on weekends?" atau "Why do you like that?"

AKSI: Kembalikan tulisan. Siswa baca pertanyaan dari partner.
UCAP: "Can you answer that question? Add one sentence if you can."
→ 1–2 menit untuk tambah kalimat jawaban.`,
          bantuan         : 'Jika siswa tidak tahu pertanyaan apa yang ditulis: bisik "What part do you want to know more about?" Arahkan ke satu bagian teks partner — rutinitas, hobi, atau makanan.',
          cue             : 'Peer review ini bukan penilaian — siswa menulis pertanyaan, bukan koreksi. "Something you want to know more about" adalah framing yang aman dan tidak mengancam.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
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
      durasi: 9,

      langkah: [

        {
          id              : 'l12',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru minta 2–3 siswa sukarela membacakan satu kalimat favorit dari tulisan mereka.
UCAP: "Who wants to share? One sentence — your best sentence. From your seat is fine."
→ Terima siapapun yang mau. Tidak perlu berdiri.
→ Guru tidak mengoreksi. Angguk dan lanjut.

UCAP (opsional setelah sharing): "Did anyone use because today? Did anyone use but?"
→ Tangan naik — resonansi natural, bukan kuis.`,
          bantuan         : 'Jika tidak ada yang mau sukarela: tunjuk siswa yang tadi aktif di INTERACT — mereka sudah dalam mode berbicara.',
          cue             : '"Your best sentence" memberi siswa agensi untuk memilih — ini berbeda dari "read the first sentence." Siswa yang memilih sendiri lebih percaya diri berbagi.',
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
UCAP: "Today you wrote about your week."
→ Jeda.
UCAP: "Your routines. Your hobbies. Your food."
→ Jeda.
UCAP: "That is three topics. In one text. In English."
→ Jeda.
UCAP: "Keep it."

AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time — we go outside."
→ Jeda singkat.
UCAP: "Places. Towns. What is around you."
→ Preview TP09 (Kluster C) yang natural, tidak membebani.

UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : '"Keep it" adalah validasi — tulisan ini punya nilai, bukan hanya tugas yang dikumpulkan. Nada penutup adalah nada selesai, bukan nada menyuruh.',
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

export default tp_c08;

/*
 * =============================================================
 * CATATAN KONVERSI — tp-08-v1.js
 * =============================================================
 *
 * Keputusan ambiguitas:
 *   1. assessment_overlay L6: priority = null karena .txt menyebut
 *      "Perhatikan plan siswa — apakah plan mereka spesifik-personal
 *      atau generik?" — ini bukan 'belum_dinilai' atau 'barisan_belakang'
 *      secara eksplisit.
 *
 *   2. interact_contract L6 gap_type = 'choice': partner memilih SATU
 *      dari tiga pilihan plan penulis — ini adalah choice gap yang genuinely
 *      berbeda dari information gap.
 *
 * =============================================================
 */
