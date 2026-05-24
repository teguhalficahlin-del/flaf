/**
 * =============================================================
 * FLAF — TP 4 (Numbers 1–20)
 * File: tp-04-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp04-v2.txt
 * Generated: 2026-05-24
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_04 = {

  id       : 'tp-04',
  nomor    : 4,
  kelas    : 0,          // TODO: isi manual
  nama     : 'Numbers 1–20',
  tema     : 'Dunia di Sekitar Kita',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menyebut dan mengurutkan angka 1–10 dengan lafal yang benar dalam aktivitas menghitung bersama.',
    'Peserta didik dapat menyebut angka 11–20 dan mengenali pola pembentukan angka belasan dalam bahasa Inggris.',
    'Peserta didik dapat menggunakan angka dalam konteks nyata: menghitung benda, menjawab "how many?", dan menyebut usia.',
  ],
  vocab    : ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
              'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
              'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'how many'],
  persiapan: ['Kartu angka bergambar 20 angka (1–20)'],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp04-num-01.png', label: '1' },
    { file: 'tp04-num-02.png', label: '2' },
    { file: 'tp04-num-03.png', label: '3' },
    { file: 'tp04-num-04.png', label: '4' },
    { file: 'tp04-num-05.png', label: '5' },
    { file: 'tp04-num-06.png', label: '6' },
    { file: 'tp04-num-07.png', label: '7' },
    { file: 'tp04-num-08.png', label: '8' },
    { file: 'tp04-num-09.png', label: '9' },
    { file: 'tp04-num-10.png', label: '10' },
    { file: 'tp04-num-11.png', label: '11' },
    { file: 'tp04-num-12.png', label: '12' },
    { file: 'tp04-num-13.png', label: '13' },
    { file: 'tp04-num-14.png', label: '14' },
    { file: 'tp04-num-15.png', label: '15' },
    { file: 'tp04-num-16.png', label: '16' },
    { file: 'tp04-num-17.png', label: '17' },
    { file: 'tp04-num-18.png', label: '18' },
    { file: 'tp04-num-19.png', label: '19' },
    { file: 'tp04-num-20.png', label: '20' },
  ],

  checklist: [
    'Kartu angka 1–20 tersedia sebelum kelas masuk',
    'Benda untuk dihitung sudah di meja guru dalam jangkauan tangan sebelum kelas mulai',
    'Layar 0 dilakukan sebelum kelas resmi dimulai',
    'Jangan mulai Layar 1 sebelum kelas benar-benar tenang (Layar 0)',
    'Guru model clap and count satu putaran sendiri sebelum ajak siswa (Layar 1)',
    'Putaran pelan stabil sebelum "Now faster!" (Layar 1)',
    '"Just listen first" diucapkan sebelum kartu 11–20 diperkenalkan (Layar 4)',
    'Guru tempel kartu 1–10 sambil ucapkan sebelum siswa ikut (Layar 3)',
    'Putaran whisper voice dilakukan setelah choral counting (Layar 3)',
    'Semi-echo dibatasi satu putaran saja — jangan over-scaffold (Layar 5)',
    'Jika waktu ≤10 menit saat masuk Layar 6: lewati permainan, lanjut ke Layar 8',
    'Permainan angka dibatasi 6–8 angka saja — berhenti saat energi masih tinggi (Layar 7)',
    'Jangan pakai "Fast!" untuk angka belasan (Layar 7)',
    'Selipkan 1–2 ronde whole class response di permainan (Layar 7)',
    'Semua benda hitung sudah reachable di meja guru — jangan cari-cari (Layar 8)',
    'Object talk singkat — kembali ke counting cepat (Layar 8)',
    'Variasikan jumlah benda — jangan semua 10 (Layar 8)',
    '"Partner voice" diucapkan sebelum partner practice dimulai (Layar 9)',
    'Kelompok ditentukan dengan penunjukan fisik sebelum countdown (Layar 10)',
    'Demo countdown dilakukan sebelum permainan dimulai (Layar 10)',
    'Siswa tetap duduk saat "Blast off!" — cegah re-escalation (Layar 11)',
    'Jaga ritme countdown cepat — jangan tunggu kesempurnaan (Layar 11)',
    '"Think first" + jeda sebelum siswa tunjuk kartu tersulit (Layar 12)',
    'Model "Soft goodbye" sebelum chorus penutup (Layar 13)',
    'Kumpulkan kartu angka 1–20 setelah sesi selesai',
    'Simpan benda yang dipakai untuk menghitung setelah sesi selesai',
    'Catat siswa yang kesulitan angka 11–19',
    'Catat siswa yang tidak bisa menjawab "How many?"',
    'Catat siswa yang tidak ikut clap and count',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🟠',
    'L2 ⚪',
    'L3 🟡',
    'L4 ⚪',
    'L5 🟡',
    'L6 ⚪',
    'L7 🔴',
    'L8 🟡',
    'L9 🟡',
    'L10 ⚪',
    'L11 🔴',
    'L12 🔵',
    'L13 🔵',
    'L14 🔵',
  ],

  catatan: {
    risiko: [
      'L5: semi-echo satu putaran saja — jangan over-scaffold',
      'L7: "Fast!" hanya untuk 1–10. Belasan: "Look carefully." Stop di 6–8 angka.',
      'L8: benda sudah siap di meja — object talk singkat, kembali ke counting cepat',
      'L11: kelompok kecil per angka — ritme countdown tidak habis terlalu cepat',
    ],
    autonomy: [
      'Jika kelas lancar 1–10 di L1, persingkat L3 dan fokus ke 11–20',
      'Jika waktu terbatas, L9 cukup 2 menit partner counting',
      'L12 boleh dilewati jika sangat mepet — langsung ke L13',
      'L5: jika kelas kuat, skip semi-echo dan langsung full chunk',
    ],
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L0 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Berdiri di depan kelas. Benda hitung sudah siap di meja guru dalam jangkauan tangan. Tunggu semua duduk tenang sebelum mulai. UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] "I'm fine, thank you! Today — we count in English! Are you ready?" [Tunggu respons — berdiri diam jika kelas belum fokus]`,
          bantuan: null,
          cue    : 'Layar ini pendek dan wajib. Jangan mulai clap and count sebelum kelas tenang. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.',
          darurat: null,
          energi : '⚪',
        },

        // L1 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Berdiri di depan kelas. Tunggu semua duduk tenang. UCAP: "Good morning, everyone!" "Today we are going to count!" AKSI: Tunjuk jari satu per satu ke udara. → "One... two... three..." → Berhenti di tiga. Tunjuk ke kelas: "You continue! What comes next?" → Jeda 2 detik → lanjut modeling tanpa tunggu: "Four! Five! Let us count together!" AKSI: Angkat tangan sebagai aba-aba. UCAP: "Ready to clap?" AKSI: Guru hitung sendiri satu putaran penuh dengan tepukan. → "One!" 👏 "Two!" 👏 "Three!" 👏 ... "Ten!" 👏 UCAP: "Now together! Slow first… ready?" → Siswa: "One! Two! Three! Four! Five! Six! Seven! Eight! Nine! Ten!" AKSI: Setelah putaran pelan stabil: "Now faster!"`,
          bantuan: 'Jika siswa tidak ikut: perlambat, tunjuk jari satu per satu → ajak ikut pelan.',
          cue    : 'Langsung tunjuk jari tanpa penjelasan — gerakan mengundang keterlibatan naluriah. Beri 2 detik setelah "What comes next?" — jangan tunggu terlalu lama, keep the energy moving. Angkat tangan sebagai micro-transition fisik sebelum clap and count.',
          darurat: null,
          energi : '🟠',
        },

        // L2 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk ke papan yang sudah ada kartu 1–10. UCAP: "Great! You can count to ten!" "Now let us learn the numbers properly — with cards!"`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '⚪',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,  // TODO: verifikasi

      langkah: [

        // L3 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tempel kartu 1–10 di papan satu per satu sambil ucapkan. 👂 LISTEN FIRST UCAP: "One. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten." 🗣 TOGETHER UCAP: "Now say it with me!" [tunjuk kartu satu per satu] → Siswa: "One! Two! Three! Four! Five! Six! Seven! Eight! Nine! Ten!" AKSI: Putaran kedua — whisper voice: "Whisper voice!" → Siswa ucap semua angka dengan suara bisik.`,
          bantuan: [
            'Jika siswa diam: tunjuk kartu + ucap "One..." menggantung → tunggu siswa lanjutkan.',
            'Jika suara pelan: dekatkan tangan ke telinga, angguk semangat.',
          ],
          cue    : 'Guru ucapkan sendiri dulu sebelum siswa ikut. Whisper voice menjaga bentuk bunyi asli lebih baik dari robot voice — satu putaran singkat saja.',
          darurat: null,
          energi : '🟡',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk kartu 10 di papan. UCAP: "Ten! Good. Now what comes after ten?" "These numbers sound different." "Just listen first — no need to repeat yet." AKSI: Mulai tempel kartu 11–20 satu per satu.`,
          bantuan: null,
          cue    : '"Just listen first" menurunkan tekanan performa sebelum bagian tersulit.',
          darurat: null,
          energi : '⚪',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kartu 11–20 sudah tertempel. Tunjuk satu per satu. 👂 LISTEN FIRST — CHUNK 1 UCAP: "Eleven. Twelve. Thirteen. Fourteen. Fifteen." "Good listening!" 👂 LISTEN FIRST — CHUNK 2 UCAP: "Sixteen. Seventeen. Eighteen. Nineteen. Twenty." 🗣 TOGETHER — semi-echo SATU PUTARAN saja AKSI: Guru ucap satu angka → jeda → siswa ikut. Satu putaran — lalu langsung full chunk. → "Eleven..." [siswa ikut] → "Twelve..." [siswa ikut] → dst sampai fifteen. → "Sixteen..." [siswa ikut] → dst sampai twenty. 🔁 Ulangi sekali lagi full chunk — tidak perlu cepat.`,
          bantuan: [
            'Jika siswa diam: ucapkan bersama guru — jangan koreksi individual.',
            'Jika kelas kuat: skip semi-echo, langsung full chunk.',
          ],
          cue    : 'Ucapkan Chunk 1 pelan — fonologi 11–15 sangat berbeda. Jangan terlalu lama di semi-echo — tempo runtuh jika over-scaffolding. Fokus ke exposure, bukan akurasi.',
          darurat: null,
          energi : '🟡',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan sekali. → "Hands down. Eyes on the board." UCAP: "Now a game! I point to a number — you say it!" "Hands up if you know! First hand up, say it!" AKSI: Demo aturan: → Guru sengaja teriak tanpa angkat tangan → "Oh nooo~" → Model benar: angkat tangan diam → ucap angka. → "Like this — hand up first, then say it."`,
          bantuan: null,
          cue    : null,
          darurat: 'Waktu ≤10 menit → lewati permainan, lanjut ke Layar 8 (Hitung Benda Nyata).',
          energi : '⚪',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk kartu angka secara acak. 🔁 6–8 angka saja — berhenti saat energi masih tinggi. UCAP untuk angka 1–10: "What number? Fast!" UCAP untuk angka 11–20: "Look carefully… what number?" AKSI: Selipkan 1–2 ronde whole class response: "Everyone together — what number?" → Individual: angkat tangan → ucapkan angka. → Whole class: semua ucapkan bersama.`,
          bantuan: [
            'Jika tidak ada yang menjawab: ucap suku kata pertama "Thir-..." → tunggu.',
            'Jika chaos: "Freeze. Hands down. Eyes here." → reset → lanjut.',
          ],
          cue    : 'Jangan pakai "Fast!" untuk belasan — target masih recognition stabil, bukan speed. Ronde whole class menjaga partisipasi merata — siswa lambat tetap dapat exposure.',
          darurat: null,
          energi : '🔴',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Now let us count real things!" "How many books? Let us count together!" AKSI: Letakkan benda satu per satu sambil hitung bersama kelas. → "One, two, three..." UCAP: "How many?" → Siswa menjawab jumlah benda. AKSI: Guru model kalimat lengkap — siswa tidak wajib ikut: → "Yes! There are [n] [benda]." AKSI: Ulangi dengan 2–3 benda berbeda.`,
          bantuan: 'Jika siswa diam: tunjuk benda + ucap angkanya → ajak kelas ulang.',
          cue    : 'Semua benda harus sudah reachable di meja guru — ambil langsung tanpa cari-cari. Object talk singkat — kembali ke counting cepat. Variasikan jumlah benda — jangan semua 10. Target utama adalah angka; "There are..." adalah bonus yang guru model saja.',
          darurat: null,
          energi : '🟡',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Beri sinyal perubahan mode. UCAP: "Partner voice." "Now practise with your partner." "Count things on your table. Stay in your seat." "Partner A counts first. Partner B listens. Then switch." Diferensiasi: - Need Help: fokus angka 1–10 saja — hitung benda di meja sendiri — guru bantu tunjuk dan hitung bersama. - Ready: gunakan 11–20 jika bisa — hitung benda di sekitar kursi — guru model "There are [n] [benda]" jika siswa siap ikuti.`,
          bantuan: null,
          cue    : 'Ucapkan "Partner voice" sebelum mulai — volume cue cegah eskalasi noise.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L10 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta semua berdiri. UCAP: "Everyone stand up!" AKSI: Tentukan kelompok dengan penunjukan fisik: → Guru berjalan ke area kiri → sentuh → "Group 1 — here." → Guru ke tengah → sentuh → "Group 2 — here." → Guru ke kanan → sentuh → "Group 3 — here." [Lanjut subdivisi jika kelas besar] UCAP: "I count down from ten. When I call your group — sit down!" AKSI: Demo: → "Watch. Group 1 — ten!" [kelompok 1 duduk] → "Good — like that. Everyone stand again!"`,
          bantuan: null,
          cue    : 'Tentukan kelompok sebelum mulai — penunjukan fisik jauh lebih jelas dari label verbal saja untuk kelas 1.',
          darurat: null,
          energi : '⚪',
        },

        // L11 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Semua berdiri. Guru mulai hitung mundur. 🔁 Kelompok kecil per angka — ritme tetap jalan sampai "One!" UCAP: "Ten!" [Group 1 duduk] "Nine!" [Group 2 duduk] "Eight!" [Group 3 duduk] [terus dengan subdivisi sampai...] "One!" [semua duduk] "Blast off!" 🚀 [semua angkat tangan sambil tetap duduk]`,
          bantuan: null,
          cue    : 'Siswa tetap duduk saat "Blast off!" — cegah re-escalation sebelum refleksi. Jaga ritme cepat — jangan tunggu kesempurnaan.',
          darurat: null,
          energi : '🔴',
        },

        // L12 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Beri pujian. Tunjuk kartu angka di papan. UCAP: "Well done! Look at all these numbers." "Think first…" [jeda — beri waktu respons individual] "Which number is hardest to say? Point to it!" → Siswa tunjuk satu kartu angka yang terasa paling sulit — cukup menunjuk.`,
          bantuan: 'Jika siswa bingung: guru tunjuk angka belasan → "Thirteen? Fifteen? Hard?"',
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Berdiri di depan kelas. Lambaikan tangan. UCAP: "Great work today! You can count to twenty in English!" "Soft goodbye..." [guru ucap pelan → siswa ikut] "Goodbye, everyone! See you next time!" 🗣 TOGETHER → Siswa: "Goodbye, teacher! See you!"`,
          bantuan: 'Jika diam: mulai lambai tangan → ucap "Good-bye..." menggantung.',
          cue    : 'Model volume "Soft goodbye" dulu sebelum chorus — cegah eskalasi noise di penutup.',
          darurat: null,
          energi : '🔵',
        },

        // L14 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kumpulkan dan simpan semua material: → Kumpulkan kartu angka 1–20 → Simpan benda yang dipakai untuk menghitung AKSI: Catat siswa yang: → Kesulitan angka 11–19 — fonologi belasan perlu lebih banyak exposure → Tidak bisa menjawab "How many?" — perlu latihan konteks nyata → Tidak ikut clap and count — perlu observasi partisipasi`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_04;
