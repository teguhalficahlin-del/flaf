/**
 * =============================================================
 * FLAF — TP 3 (Classroom Instructions)
 * File: tp-03-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp03-v2.txt
 * Generated: 2026-05-24
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_03 = {

  id       : 'tp-03',
  nomor    : 3,
  kelas    : 0,          // TODO: isi manual
  nama     : 'Classroom Instructions',
  tema     : 'Interaksi Sosial Dasar',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat merespons instruksi satu langkah (sit down, stand up, open your book, close your book, listen, look) dengan tindakan yang benar.',
    'Peserta didik dapat merespons instruksi dua langkah sederhana (open your book and read, listen and repeat) dengan urutan tindakan yang tepat.',
    'Peserta didik dapat mengucapkan instruksi kelas dasar untuk memimpin teman dalam aktivitas terbimbing.',
  ],
  vocab    : ['sit down', 'stand up', 'open', 'close', 'listen', 'look',
              'repeat', 'read', 'write', 'draw', 'stop', 'go'],
  persiapan: [],         // TODO: isi manual
  media    : [],         // TODO: isi manual
  printables: [],        // TODO: isi manual

  checklist: [
    'Kartu instruksi bergambar x6 (listen/look/write/open/close/draw) tersedia sebelum kelas masuk',
    'Poster TPR tersedia sebelum kelas masuk',
    'Buku siswa sudah di atas meja sebelum kelas mulai — cek sebelum Layar 0',
    'Layar 0 dilakukan sebelum kelas resmi dimulai',
    'Tidak mulai Layar 1 sebelum kelas benar-benar tenang (Layar 0)',
    'Gerakan dilakukan sebelum kata di setiap instruksi baru — prinsip TPR (Layar 1–4)',
    '"Careful body. Stay in your space." diucapkan sebelum putaran cepat (Layar 1)',
    'Freeze dan tunjuk mata setelah putaran cepat — tunggu diam total (Layar 1)',
    'Micro-drill dilakukan setelah Gelombang 1 sebelum lanjut Gelombang 2 (Layar 3)',
    'Pastikan mayoritas sudah mapping sebelum lanjut Gelombang 2 (Layar 3)',
    'Jeda 1 detik setelah "Close your book" — beri waktu transisi motorik (Layar 4)',
    'Semua 6 kartu ditempel di papan sebelum Drill dimulai (Layar 5)',
    'Putaran bisik dilakukan sebelum putaran super cepat (Layar 5)',
    'Demo Simon Says dilakukan sebelum permainan dimulai (Layar 6)',
    'Jika waktu ≤10 menit saat masuk Layar 6: lewati Simon Says, lanjut ke Layar 9',
    'Simon Says dibatasi 8–10 instruksi — berhenti saat kelas masih antusias (Layar 7)',
    'Micro-reset dilakukan sebelum masuk Instruksi Dua Langkah (Layar 8)',
    '"Write" selalu dimodelkan di udara, bukan di buku — kelas 1 sangat literal (Layar 8)',
    'Kartu instruksi diberikan ke tangan siswa yang maju sebagai prop (Layar 9)',
    'Siswa cukup tunjuk kartu — guru yang ucapkan instruksi segera (Layar 9)',
    'Tampil sebagai pemimpin dibatasi 2–3 siswa, 15–20 detik per siswa (Layar 9)',
    'Prioritas partner practice: noise → semua ikut → baru diferensiasi level (Layar 10)',
    'Guru keliling selama partner practice — proximity control (Layar 10)',
    'Partner practice dibatasi 3–4 menit (Layar 10)',
    'Model "Soft goodbye" sebelum chorus penutup (Layar 13)',
    'Kumpulkan kartu instruksi setelah sesi selesai',
    'Simpan poster TPR setelah sesi selesai',
    'Catat siswa yang tidak merespons gerakan TPR',
    'Catat siswa yang tidak bisa bedakan "Simon says" vs tidak',
    'Catat siswa yang tidak mau / tidak bisa maju sebagai pemimpin',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 ⚪',
    'L3 🟡',
    'L4 🟡',
    'L5 🟡',
    'L6 ⚪',
    'L7 🔴',
    'L8 ⚪ → 🟡',
    'L9 🟠',
    'L10 🟡',
    'L11 ⚪ → 🔴',
    'L12 🔵',
    'L13 🔵',
    'L14 🔵',
  ],

  catatan: {
    risiko: [
      'L7 Simon Says — berhenti saat kelas masih antusias, disiplin 8–10 instruksi',
      'L10 partner practice — prioritas: noise → semua ikut → baru diferensiasi',
      'L9 siswa jadi pemimpin — guru pegang kendali verbal, siswa hanya tunjuk kartu',
    ],
    autonomy: [
      'Jika kelas sangat responsif di L3–L5, boleh langsung lompat ke Simon Says',
      'Jika kelas antusias di L9, tambah satu putaran sebelum diferensiasi',
      'Jika waktu terbatas, L8 cukup 2 contoh saja',
      'Jika kelas cepat tenang di L11, langsung mulai review tanpa tunggu hitungan selesai',
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
          teks   : `AKSI: Berdiri di depan kelas. Pastikan semua siswa sudah duduk dan buku ada di atas meja sebelum mulai. UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] "I'm fine, thank you! Today — we learn classroom instructions. Are you ready?" [Tunggu respons — berdiri diam jika kelas belum fokus]`,
          bantuan: null,
          cue    : 'Layar ini pendek dan wajib. Fungsinya mengunci perhatian sebelum aktivitas TPR dimulai. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam. Jangan mulai Layar 1 sebelum kelas benar-benar tenang.',
          darurat: null,
          energi : '⚪',
        },

        // L1 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Berdiri di depan kelas. Langsung lakukan gerakan tanpa penjelasan dulu. UCAP: "Stand up!" [berdiri] "Sit down!" [duduk] "Stand up!" [berdiri] "Sit down!" [duduk] AKSI: Sebelum putaran cepat — ucapkan: "Careful body. Stay in your space." [tunjuk ruang tubuh sendiri] AKSI: Putaran ketiga — lebih cepat. AKSI: Setelah putaran cepat — angkat tangan → diam total → tunjuk mata sendiri. UCAP: "Freeze. Eyes on me."`,
          bantuan: null,
          cue    : 'Gerakan sebelum kata — siswa ikuti secara naluriah. Jika siswa tertawa saat putaran cepat: itu bagus, tanda mereka terlibat. Tunggu sampai semua benar-benar diam sebelum lanjut.',
          darurat: null,
          energi : '🔴',
        },

        // L2 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Angkat tangan. Tunggu semua duduk tenang 2–3 detik. UCAP: "Sit nicely. Eyes here." "Good! You know 'stand up' and 'sit down'." "Now let us learn more instructions!" AKSI: Angkat kartu instruksi pertama ke depan kelas.`,
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
          teks   : `AKSI: "Books on the table." [lanjut jika mayoritas sudah siap — jangan tunggu semua sempurna] AKSI: Tunjuk kartu instruksi — lakukan gerakan dulu sebelum ucapkan kata. UCAP: "Listen." [tunjuk telinga] "Look." [tunjuk mata] "Write." [gerak menulis di udara] AKSI: Micro-drill — ulangi 3 kartu ini sekali lagi dengan tempo sedikit lebih cepat. → Siswa melakukan gerakan — tidak perlu mengucapkan kata.`,
          bantuan: [
            'Jika siswa tidak ikut: dekati, tunjuk kartu + lakukan gerakan perlahan → ajak ikut.',
            'Jika siswa menulis di meja: tunjuk udara → "In the air! Like this."',
          ],
          cue    : 'Gerakan dulu, kata belakangan — prinsip TPR. Tunjukkan gerakan di udara sebagai model — siswa kelas 1 cenderung literal. Pastikan mayoritas sudah mapping sebelum lanjut Gelombang 2.',
          darurat: null,
          energi : '🟡',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Lanjut 3 kartu berikutnya — pola sama. UCAP: "Open your book." [buka buku] "Close your book." [tutup buku — jeda 1 detik] "Draw." [gerak menggambar di udara] AKSI: Micro-drill — ulangi 3 kartu ini sekali lagi. → Siswa melakukan gerakan mengikuti guru.`,
          bantuan: [
            'Jika siswa tidak ikut: dekati, tunjuk kartu + lakukan gerakan perlahan → ajak ikut.',
            'Jika ada siswa masih cari buku: biarkan, fokus ke mayoritas yang sudah siap.',
          ],
          cue    : 'Jeda 1 detik setelah "Close your book" — beri waktu transisi motorik.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tempel semua 6 kartu di papan. Tunjuk kartu satu per satu — siswa lakukan gerakan. UCAP: "Listen and do! Ready?" AKSI: Putaran 1 — pelan: "Listen... Look... Write... Open your book... Close your book... Draw!" AKSI: Putaran 2 — cepat: "Listen! Look! Write! Open! Close! Draw!" AKSI: Putaran 3 — bisik: [bisikkan instruksi] → siswa tetap lakukan gerakan. "Ready? Fast — not loud." AKSI: Putaran 4 — super cepat, 4 instruksi saja: "Listen! Open! Draw! Close!" → Siswa melakukan gerakan serentak.`,
          bantuan: 'Jika siswa salah gerakan: lakukan ulang perlahan + tunjuk kartu — jangan koreksi verbal, cukup tunjukkan gerakan yang benar.',
          cue    : 'Putaran bisik adalah cue shift mode sebelum putaran super cepat. Batasi Putaran 4 hanya 4 instruksi — jaga success momentum, hindari cognitive fatigue.',
          darurat: null,
          energi : '🟡',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan sekali. Minta semua duduk dan fokus. → "Hands down. Eyes on me." → "Stay in your space. Hands to yourself." UCAP: "Simon says? Do it!" "No Simon says? Freeze!" AKSI: Demo aturan: → Demo 1: "Simon says, stand up!" [berdiri] → "Good — Simon says!" → Demo 2: "Sit down!" [tetap berdiri] → "Freeze! No Simon says!" → Demo 3: "Simon says, listen!" [tunjuk telinga] → "Good!"`,
          bantuan: null,
          cue    : 'Turunkan tangan perlahan dan tunjuk mata sendiri saat reset — kelas perlu momen hening sebelum aturan dijelaskan.',
          darurat: 'Waktu ≤10 menit → lewati Simon Says, lanjut ke Layar 9 (Siswa Jadi Pemimpin).',
          energi : '⚪',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Mulai permainan. Campur instruksi dengan dan tanpa "Simon says". 🔁 8–10 instruksi — jaga tempo tetap cepat dan mengejutkan. Contoh urutan: → "Simon says, stand up!" → "Simon says, listen!" → "Sit down!" [jebakan] → "Simon says, open your book!" → "Write!" [jebakan] → "Simon says, close your book!" Konsekuensi jika salah: "Oops — hands on head." [lanjut segera — jangan sorot siswa yang salah]`,
          bantuan: [
            'Jika kelas selalu bergerak tanpa filter: perlambat → ucapkan "Simon says?" dengan jeda panjang sebelum instruksi tanpa "Simon says".',
            'Jika kelas terlalu ramai: tepuk tangan dua kali → "Hands down. Eyes on me."',
          ],
          cue    : 'Konsekuensi cukup symbolic — jangan berhenti memastikan semua menjalankan. Simon Says hidup dari rhythm, bukan akurasi hukuman. Berhenti saat kelas masih antusias.',
          darurat: null,
          energi : '🔴',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta semua duduk. Micro-reset dulu — siswa masih energi tinggi dari Simon Says. → "Sit nicely. Eyes here. Now listen carefully." → Angkat dua jari sebagai penanda "dua langkah". UCAP: "Now — two steps! Listen carefully." AKSI: Pola bertahap — ucapkan langkah pertama → jeda → langkah kedua → ulangi gabung: → "Open your book..." [tunggu siswa buka] "...and look." [tunjuk mata] → Ulangi gabung: "Open your book and look." → "Listen..." [tunjuk telinga] "...and write." [gerak menulis di udara] → Ulangi gabung: "Listen and write." → "Open your book..." [buka buku] "...and write." [gerak menulis di udara] → Ulangi gabung: "Open your book and write." → Siswa melakukan dua gerakan berurutan.`,
          bantuan: 'Jika siswa hanya lakukan satu gerakan: ucapkan instruksi kedua lagi dengan penekanan → "AND... write!"',
          cue    : 'Saat modeling "write" — tetap di udara, bukan di buku. Kelas 1 sangat literal.',
          darurat: null,
          energi : '⚪ → 🟡',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru demo dulu — ambil satu kartu instruksi. Tunjuk kartu ke kelas → kelas lakukan gerakan. Ulangi sekali. UCAP: "Now YOU are the teacher! Watch me first." AKSI: Panggil satu siswa sukarela maju. Berikan kartu instruksi di tangan siswa sebagai prop. UCAP ke siswa yang maju: "Show the card to the class!" AKSI: Guru ucapkan instruksi sesuai kartu yang ditunjuk siswa — segera, tanpa jeda sosial. → Kelas melakukan gerakan. 🔁 2–3 siswa bergantian — maksimal 15–20 detik per siswa.`,
          bantuan: 'Jika siswa maju diam: bisik nama instruksi → beri waktu 5 detik → guru ucapkan sendiri sambil siswa tetap tunjuk kartu.',
          cue    : 'Siswa cukup TUNJUK kartu — guru yang ucapkan instruksi segera. Jangan ada jeda sosial antara tunjuk kartu dan instruksi guru.',
          darurat: null,
          energi : '🟠',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta semua duduk. Beri sinyal perubahan mode. Guru keliling selama partner practice. Prioritas monitoring: → Noise level — jika naik, reset segera → Semua siswa tetap ikut — tidak ada yang diam → Baru diferensiasi level UCAP: "Great! Now practise with your partner." "Small voice. Only your partner listens." "Partner A gives 3 instructions. STOP. Then Partner B." "If you need help, look at the cards. If you are ready, try without cards!" "If you finish early — do it again." Diferensiasi: - Need Help: lihat kartu saat memberi instruksi — cukup 1 instruksi per giliran — guru bantu dengan bisik kata instruksi. - Ready: tanpa kartu, 3 instruksi per giliran — jika sudah lancar: coba dua langkah "Open your book and write!" — jika sangat lancar: tambahkan "Simon says".`,
          bantuan: 'Jika noise pecah: tepuk tangan dua kali → "Hands down. Eyes on me." → reset → lanjut.',
          cue    : 'Batas waktu 3–4 menit. Naik satu level per satu — jangan tumpuk sekaligus. Proximity control lebih efektif daripada teguran verbal — guru terus bergerak keliling.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L11 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan sekali. → "Freeze. Hands down. 3... 2... 1..." UCAP: "Last round! Listen and do!" UCAP: "Stand up!" [berdiri] "Listen." [tunjuk telinga] "Look." [tunjuk mata] "Sit down!" [duduk] "Close your book." [tutup buku] → Siswa melakukan gerakan serentak mengikuti instruksi guru.`,
          bantuan: null,
          cue    : 'Jika kelas sudah cepat tenang — boleh langsung mulai review tanpa tunggu hitungan selesai.',
          darurat: null,
          energi : '⚪ → 🔴',
        },

        // L12 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Beri pujian singkat. Tunjuk kartu-kartu instruksi di papan. UCAP: "Well done! Look at all these instructions." "Which one is your favourite? 3... 2... 1... point!" → Siswa tunjuk satu kartu instruksi favorit serentak saat hitungan selesai — cukup menunjuk, tidak perlu mengucapkan.`,
          bantuan: 'Jika siswa bingung: guru tunjuk satu kartu → "This one?" → siswa angguk atau geleng.',
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Berdiri di depan kelas. Lambaikan tangan. UCAP: "Excellent work today! You know classroom instructions in English!" "Soft goodbye..." [guru ucap pelan → siswa ikut] "Goodbye, everyone! See you next time!" 🗣 TOGETHER → Siswa: "Goodbye, teacher! See you!"`,
          bantuan: 'Jika diam: mulai lambai tangan → ucap "Good-bye..." menggantung.',
          cue    : 'Model volume "Soft goodbye" dulu sebelum chorus — cegah eskalasi noise di penutup.',
          darurat: null,
          energi : '🔵',
        },

        // L14 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kumpulkan dan simpan semua material: → Kumpulkan kartu instruksi → Simpan poster TPR AKSI: Catat siswa yang: → Tidak merespons gerakan TPR — perlu observasi pemahaman instruksi lisan → Tidak bisa bedakan "Simon says" vs tidak — perlu latihan listening fokus → Tidak mau / tidak bisa maju sebagai pemimpin — catat untuk dorongan bertahap`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_03;
