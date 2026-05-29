/**
 * =============================================================
 * FLAF — TP B08 (Writing: My Weekly Schedule)
 * File: docs/output-v5-faseb/tp-08-v5.js
 * Format: v5.0
 * Fase: B (Kelas 3–4)
 * Jenis: Panen — Kluster B
 * Source: flaf-skenario-tp08-v2.txt (Fase B)
 * =============================================================
 */

const TP_B08 = {

  id       : 'tp-b08',
  nomor    : 8,
  kelas    : 3,
  nama     : 'Writing: My Weekly Schedule',
  tema     : 'Menulis jadwal mingguan lengkap menggunakan semua kosakata Kluster B',
  kluster  : 'B',
  jenis    : 'Panen',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat merencanakan dan menulis jadwal mingguan (minimal 3 hari) menggunakan nama hari, ekspresi waktu, dan kegiatan dari Kluster B.',
    'Peserta didik dapat mengintegrasikan penanda urutan "first, then, after that" dan ekspresi "I usually..." dalam kalimat jadwal yang koheren.',
    'Peserta didik dapat membacakan satu bagian jadwal mingguan mereka sendiri di depan kelas.',
  ],

  vocab    : ['o\'clock', 'half past', 'first', 'then', 'after that', 'I usually...', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'tomorrow'],

  persiapan: [
    'Contoh jadwal mingguan guru sudah ditulis di kertas besar atau papan kecil SEBELUM kelas dimulai — tidak ditulis saat L5 berlangsung (lihat L5)',
    'Lembar kerja siswa: 1 per siswa — Bagian A (Planning Sheet: tabel 5 baris hari/kegiatan/jam) dan Bagian B (Writing Space: tabel jadwal + ruang narasi) dalam satu lembar',
    'Papan tulis + spidol untuk struktur pengingat di L6 — tetap ada sampai L7 selesai',
  ],

  checklist: [
    'Contoh jadwal mingguan guru sudah disiapkan sebelum kelas — bukan ditulis saat L5 berlangsung',
    'Lembar kerja sudah dicetak — Bagian A (Planning Sheet) dan Bagian B (Writing Space) dalam satu lembar',
    'Struktur pengingat di papan TIDAK dihapus sampai L7 selesai',
    'Penilaian formatif sudah dibuka di L6 atau L7 — minimal 4 siswa sudah dinilai',
    'Breakpoint Alami sudah disampaikan ke siswa jika sesi terpotong — siswa tahu mereka lanjut dari L6',
    'Guru tidak mendominasi lebih dari 40% layar — L4 sampai L9 adalah layar siswa',
    'Siswa yang membacakan di L11 berbeda dari yang paling aktif menjawab di L2',
    'Kalimat "Nobody else has the same week" diucapkan di L12 — ini ritual penutup Panen, bukan opsional',
    'Tidak ada kosakata baru yang diperkenalkan secara formal — kata yang ditulis atas permintaan siswa adalah pengayaan organik',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🟠',
    'L2 🟡',
    'L3 🔵',
    'L4 🟡',
    'L5 🔵',
    'L6 🔵',
    'L7 🔵',
    'L8 🔵',
    'L9 🟡',
    'L10 🔵',
    'L11 🟡',
    'L12 🔵',
  ],

  catatan: {
    risiko: [
      'L6: Jadwal mingguan lebih panjang dari jadwal satu hari di TP06. Siswa yang menulis lambat mungkin hanya selesai dua hari dalam 10 menit — itu valid. Jangan potong L6 lebih awal dari 8 menit. Produksi yang tidak selesai lebih baik daripada produksi yang terburu-buru.',
      'L7: Guru akan tergoda membantu terlalu banyak. Tahan. Tugas guru di L7 hanya: konfirmasi ada nama hari, konfirmasi ada kegiatan. Ejaan dan grammar adalah urusan TP09 ke atas.',
      'L4 dan L6 bersama-sama memakan ~17 menit. Ini normal untuk Panen. Jika total waktu terasa mepet, potong L8, L9, atau L10 — jangan potong L6.',
      'Breakpoint Alami: jika digunakan, pastikan contoh jadwal guru tetap terlihat di awal sesi kedua. Jika ditulis di papan, jangan hapus. Jika di kertas besar, tempelkan kembali.',
    ],
    autonomy: [
      'Contoh jadwal guru di L5 boleh lebih pendek dari contoh di skenario — dua hari sudah cukup sebagai model. Tapi kalimat penutup ("My favorite day is...") harus ada sebagai contoh kalimat bebas.',
      'Jika siswa meminta kosakata yang tidak ada di TP05–07 (misalnya nama olahraga atau nama tempat) — tulis di pojok papan tanpa komentar. Ini pengayaan organik — valid dan tidak perlu dilarang.',
      'Peer sharing di L9 boleh dilakukan sebagian dalam Bahasa Indonesia — yang penting nama hari dan ekspresi waktu tetap dalam Bahasa Inggris.',
      'Jika kelas menggunakan sesi kedua setelah Breakpoint Alami — tidak perlu chant atau warm-up panjang. Cukup L0 singkat (settling), minta siswa buka Planning Sheet, lanjutkan dari L6.',
    ],
  },

  breakpoint: {
    posisi    : 'Setelah L5, sebelum L6',
    instruksi : `Jika waktu tidak cukup: hentikan di sini. Sesi berikutnya mulai dari L6. Siswa simpan lembar kerja mereka — Planning Sheet sudah terisi, contoh jadwal guru sudah terlihat. Di awal sesi kedua: minta siswa buka Planning Sheet (Bagian A) terlebih dahulu — baca ulang hari dan kegiatan yang mereka pilih. Baru kemudian buka Bagian B dan mulai menulis dari L6. Guru tidak perlu menjelaskan ulang struktur — contoh di papan atau kertas besar cukup untuk mengingatkan.`,
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. Today is a special day — again."`,
    bantuan: 'Jika ada siswa yang masih gaduh — beri jeda 3 detik diam, lanjutkan hanya setelah mereka berhenti.',
    cue    : '"Again" adalah kata kunci — siswa yang ingat TP04 akan merasakan continuity. Ini Panen kedua mereka. Ucap dengan nada yang sama seperti TP04: tulus, tidak terburu-buru.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 12,

      langkah: [

        // L1 — Reconnect — Chant Gabungan Kluster B
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"O'clock — half past — what time is it? — GO!
First — then — after that — I usually — GO!
Monday — Tuesday — Wednesday — tomorrow — GO!
This is our week — let's write it — GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal semua kata di putaran pertama: perlambat ritme, tunjuk papan jika kata sudah tertulis. Putaran kedua selalu lebih baik.',
          cue    : 'Chant ini merangkum tiga TP Kluster B dalam urutan yang benar. Baris terakhir ("This is our week — let\'s write it") adalah framing Panen — siswa tidak hanya mengingat, mereka bersiap menulis. Jaga energi di 🟠 — bukan 🔴.',
          darurat: null,
          energi : '🟠',
        },

        // L2 — Warm-Up — Review Semua Kosakata TP05–07
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tanya kelas dengan ritme cepat — satu pertanyaan per 5 detik. Ini pemanasan, bukan tes.

UCAP: "Jam tujuh tepat — in English?"
→ Kelas: "Seven o'clock!"
UCAP: "Jam setengah delapan?"
→ Kelas: "Half past seven!"
UCAP: "How do we ask the time?"
→ Kelas: "What time is it?"
UCAP: "Hari pertama dalam seminggu?"
→ Kelas: "Monday!"
UCAP: "Hari terakhir?"
→ Kelas: "Sunday!"
UCAP: "Bulan pertama dalam setahun?"
→ Kelas: "January!"
UCAP: "Besok dalam Bahasa Inggris?"
→ Kelas: "Tomorrow!"
UCAP: "Kegiatan pertama di pagi hari — two words?"
→ Kelas: "Wake up!" atau "First, I wake up!"

UCAP: "Good. You remember everything. Today — we put it all in one place."`,
          bantuan: 'Jika kelas stagnan di satu pertanyaan lebih dari 5 detik: ucapkan jawabannya sendiri, minta kelas echo, lanjut.',
          cue    : 'Jika kelas tidak bisa menjawab dua atau lebih pertanyaan — jangan mundur ke re-teaching. Scaffold di L5 dan L6 akan mengingatkan kembali semua yang perlu diingat untuk writing.',
          darurat: null,
          energi : '🟡',
        },

        // L3 — Orientasi Panen — Apa yang Kita Buat Hari Ini
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kembali ke depan kelas. Suara lebih pelan dari L1 dan L2.

UCAP: "Today — we write. Not one sentence. Not one day."
→ Jeda.
UCAP: "We write our whole week. Five days — or more."

AKSI: Tulis di papan:
  MY WEEKLY SCHEDULE
  → days + activities + times

UCAP: "You choose which days. You choose what you do. You choose what time."
UCAP: "Let me show you first. Then you write your own."`,
          bantuan: null,
          cue    : '"You choose" adalah kalimat terpenting di layar ini. Jadwal yang dibuat harus mencerminkan kehidupan siswa sendiri — bukan jadwal yang direka-reka. Tidak ada jawaban yang salah selama hari, kegiatan, dan waktu ditulis.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 50,

      langkah: [

        // L4 — Planning — Siswa Pilih 5 Hari dan Kegiatan
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan lembar kerja (1 per siswa). Minta siswa buka Bagian A — Planning Sheet.

Bagian A berisi:

  MY WEEK PLAN

  Day         | Main activity         | Time
  ------------|-----------------------|------------------
  ___________ | _____________________ | _________________
  ___________ | _____________________ | _________________
  ___________ | _____________________ | _________________
  ___________ | _____________________ | _________________
  ___________ | _____________________ | _________________

UCAP: "Fill in Bagian A. Choose five days. For each day — one main activity and one time."
UCAP: "Just key words — not full sentences yet."

AKSI: Circulate pelan. Jangan intervensi kecuali ada siswa yang benar-benar bingung tentang instruksi.`,
          diferensiasi: {
            perluSupport: 'bantu pilih dengan tanya langsung — "Hari apa kamu paling suka?" dan "Biasanya kamu ngapain hari itu?" — lalu arahkan tangan mereka ke kertas.',
            sudahBisa   : 'setelah lima baris terisi, minta tambahkan kolom keempat: "How do you feel on this day?" — satu kata Bahasa Inggris (happy, tired, excited).',
          },
          bantuan: 'Jika siswa duduk diam tidak menulis apapun setelah 1 menit: dekati, tunjuk kolom "Day", ucap pelan — "Which day do you like? Monday? Friday?" — setelah mereka menyebut satu hari, arahkan: "Write it here."',
          cue    : 'Siswa boleh memilih hari yang sama dua kali jika aktivitasnya berbeda. Siswa boleh menulis kegiatan dalam Bahasa Indonesia jika tidak tahu Inggrisnya — yang penting satu hari, satu kegiatan, satu waktu per baris.',
          darurat: 'Jika sebagian besar kelas tidak mengerti instruksi Planning Sheet: bacakan setiap kolom dengan keras sambil isi contoh di papan. Maksimal 2 menit ekstra — lanjut ke L5 setelahnya.',
          energi : '🟡',
        },

        // L5 — Modeling — Guru Demo Jadwal Mingguan Lengkap
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjukkan contoh jadwal guru — kertas besar atau papan kecil yang sudah disiapkan sebelum kelas:

  MY WEEKLY SCHEDULE

  On Monday, I usually go to school at seven o'clock.
  First, I have English class in the morning.
  After that, I go home at half past twelve.

  On Wednesday, I usually go to school at seven o'clock.
  After school, I usually eat lunch at one o'clock.

  On Saturday, I don't go to school.
  I usually wake up at half past seven.
  After that, I go to the market with my mother.

  My favorite day is Saturday.
  My birthday is in [bulan guru]. This month is [bulan sekarang].
  Tomorrow is [hari besok yang sebenarnya].

UCAP: "Listen. I will read my weekly schedule."
→ Baca seluruh teks dengan pelan dan jelas.

UCAP: "Now — let's look at the structure."
AKSI: Tunjuk kalimat per bagian:
UCAP: "'On Monday, I usually...' — ini dimulai dengan hari." [tunjuk baris 1]
UCAP: "'First... After that...' — ini urutan kegiatan." [tunjuk baris 2–3]
UCAP: "'My favorite day is...' — ini kalimat penutup bebas." [tunjuk baris terakhir]

UCAP: "You don't need to write about every day. Choose three or four — or more. Your choice."
UCAP: "End with one free sentence — anything true about your week."`,
          bantuan: 'Jika siswa tampak kewalahan melihat panjang teks contoh: tunjuk hanya baris pertama setiap bagian hari — "On Monday..." dan "On Saturday..." — dan katakan: "Start with this. Just the first sentence for each day. You can add more later."',
          cue    : 'Teks contoh guru harus sudah ditulis sebelum kelas — jangan menulis di depan siswa saat L5 berlangsung. Contoh yang paling efektif adalah jadwal yang benar-benar nyata milik guru, bukan jadwal yang direka-reka.',
          darurat: null,
          energi : '🔵',
        },

        // L6 — Writing Draft — Jadwal Mingguan Siswa
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa buka Bagian B — Writing Space di lembar kerja.

UCAP: "Now — your turn. Use your Planning Sheet. Write your weekly schedule."
UCAP: "For each day — start with 'On [day], I usually...'"
UCAP: "Add times. Add 'first', 'then', 'after that' if you want."
UCAP: "End with one free sentence — your choice."

AKSI: Tulis di papan sebagai pengingat (bukan template kalimat per kalimat):
  Start:    On [day], I usually _______ at _______.
  Add:      First / Then / After that, I _______.
  Close:    My favorite day is _______. / Tomorrow is _______.
  Optional: My birthday is in _______. / This month is _______.

UCAP: "The board helps you. But your sentences — your ideas. Your real week."

AKSI: Mundur dari depan kelas. Circulate pelan.`,
          diferensiasi: {
            perluSupport: 'cukup tulis dua hari — satu kalimat per hari. "On Monday, I go to school at seven o\'clock. On Saturday, I stay at home."',
            sudahBisa   : 'tulis lima hari atau lebih, gunakan first/then/after that di setiap hari, tambahkan kalimat penutup bebas.',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai di TP ini. Selama L6, guru tidak mengajar. Guru mengamati dan mencatat. Jika ada siswa bertanya kosakata di luar TP05–07 — tulis di pojok papan tanpa komentar.',
          darurat: 'Jika setelah 5 menit lebih dari separuh kelas masih belum menulis kalimat pertama: hentikan semua, minta kelas baca bersama baris pertama dari contoh guru di papan, lalu lanjutkan. Jangan beri instruksi baru.',
          energi : '🔵',
        },

        // L7 — Circulation + Penilaian Formatif
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Teruskan circulate dari L6. Fokus sekarang bergeser ke penilaian.

UCAP: "Keep writing. I will come to you."

AKSI: Kunjungi tiap meja. Untuk setiap siswa yang dikunjungi:
→ Baca 2–3 kalimat pertama mereka diam-diam.
→ Jika struktur sudah benar: angguk, ucap pelan "Good — keep going."
→ Jika tidak ada nama hari sama sekali: tunjuk Planning Sheet mereka, ucap pelan "Use your plan — which day first?"
→ Jangan tulis ulang kalimat mereka.`,
          bantuan: 'Jika menemukan siswa yang menulis hanya satu kalimat dan berhenti: duduk sebentar di sebelah mereka, baca kalimat yang sudah ada, tanya pelan — "And what about Saturday — what do you do?" — tunggu mereka menjawab lisan, lalu arahkan: "Write that." Jangan tulis untuk mereka.',
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif jika belum dibuka di L6. Di L7, guru tidak memperbaiki ejaan. Fokus hanya pada: apakah ada nama hari yang disebut dan ada satu kegiatan yang ditulis. Jika ya — itu sudah Panen yang valid.',
          darurat: 'Jika menit ke-52 sudah tercapai sebelum L7 selesai: hentikan circulate, lanjut ke L11 langsung. Lewati L8, L9, dan L10.',
          energi : '🔵',
        },

        // L8 — Silent Reread — Garis Bawahi Hari Favorit [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Stop for a moment. Put your pen down."
→ Jeda 3 detik. Tunggu semua pena diletakkan.
UCAP: "Read your schedule — from the beginning. Just for yourself."
→ Jeda 30 detik. Biarkan siswa membaca diam-diam.

UCAP: "Now — find the day you wrote the most about. Underline that section."
→ Beri waktu 30 detik.

UCAP: "That day — that is your favorite part of your schedule."`,
          bantuan: 'Jika siswa tampak bingung bagian mana yang harus digaris bawahi: bisikkan pelan — "Hari mana yang paling banyak kamu tulis?" Setelah mereka menunjuk, ucap: "Underline that part."',
          cue    : 'Ini adalah momen privat — siswa dan tulisan mereka sendiri. Guru tidak perlu berkeliling atau bertanya. Momen ini juga mempersiapkan siswa untuk L9: mereka sudah tahu bagian mana yang ingin mereka bagikan.',
          darurat: '[FLEX — lewati jika waktu tersisa < 15 menit]',
          energi : '🔵',
        },

        // L9 — Peer Sharing — Baca Satu Hari ke Partner [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "Read the part you underlined — or your favorite day — to your partner."
UCAP: "Partner — listen. Then say: 'I like the part about [day].'"

AKSI: Beri waktu 3 menit — masing-masing 90 detik per arah.

UCAP (setelah 3 menit): "Good. Now — you can go back and add or change one thing."
→ Beri 1 menit untuk perubahan kecil.`,
          bantuan: 'Jika partner tidak tahu harus berkata apa: contohkan — "You can say: \'I like the part about Saturday\'" atau "\'I like that you go to the market.\'" Satu contoh konkret cukup.',
          cue    : '"I like the part about [day]" adalah respons yang sengaja sederhana — siswa kelas 3 tidak perlu memberi feedback kompleks. Yang penting: mendengarkan jadwal orang lain dan merespons secara afirmatif.',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit atau draft siswa rata-rata kurang dari 2 hari tertulis] Jika peer sharing menjadi gaduh dalam 1 menit: hentikan. Ucap "Okay — back to your own paper." Lanjut ke L10.',
          energi : '🟡',
        },

        // L10 — Mini Self-Check — Days dan Time Expressions [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Look at your writing one more time."
UCAP: "Circle all the days you wrote — Monday, Tuesday, any day."
→ Beri waktu 20 detik. Siswa melingkari nama-nama hari di tulisan mereka.

UCAP: "Now — underline one time expression. O'clock. Half past. Anything with a time."
→ Beri waktu 20 detik.

UCAP: "Good. You can see your days and your times — right there in your writing."`,
          bantuan: 'Jika siswa tidak menemukan time expression di tulisan mereka: dekati pelan, tunjuk satu kalimat yang ada angkanya, bisikkan — "This — is this a time? Yes? Underline it." Jangan koreksi isi — hanya bantu mereka menemukan apa yang sudah ada.',
          cue    : 'Ini adalah self-check teknis — bukan evaluasi. Guru tidak mengumpulkan atau menilai hasil circling dan underlining. Tujuannya: siswa melihat sendiri bahwa tulisan mereka sudah mengandung elemen kunci Kluster B (hari + waktu). Ini memperkuat rasa percaya diri sebelum gallery sharing.',
          darurat: '[FLEX — lewati jika waktu tersisa < 8 menit]',
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 8,

      langkah: [

        // L11 — Gallery Sharing — Dua Suara
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta semua siswa meletakkan pena. Kembali ke depan kelas.

UCAP: "We are almost done. I want to hear from two people."
UCAP: "Who wants to read one day from their schedule?"
→ Tunggu sukarelawan. Jika tidak ada dalam 5 detik, tunjuk siswa yang dari observasi L7 sudah menulis dengan baik.

AKSI: Siswa pertama membacakan satu bagian hari dari jadwalnya.
→ Kelas mendengarkan.
→ Guru: "Thank you. What day did they write about?"
→ Kelas menjawab nama hari yang disebutkan.

AKSI: Siswa kedua membacakan bagian hari yang berbeda.
→ Kelas mendengarkan.
→ Guru: "Thank you. What time did they mention?"
→ Kelas menjawab waktu yang disebutkan.

UCAP: "Good listening, everyone."`,
          bantuan: 'Jika tidak ada sukarelawan setelah 10 detik: gunakan observasi dari L7 — "I read your schedule — it\'s really complete. Can you share one day?" Persetujuan personal lebih efektif dari penunjukan acak.',
          cue    : 'Dua pertanyaan setelah setiap pembacaan ("what day?" dan "what time?") membuat kelas tetap aktif mendengar. Ini menegaskan dua elemen inti TP08: hari dan waktu.',
          darurat: null,
          energi : '🟡',
        },

        // L12 — Closure Emosional — Refleksi Kluster B
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa memegang lembar kerja mereka. Suara guru pelan.

UCAP: "Look at what you wrote today."
→ Jeda 5 detik. Biarkan siswa membaca tulisan mereka sendiri.

UCAP: "A few weeks ago — you learned to say the time. Seven o'clock. Half past six."
UCAP: "Then — first, then, after that. Your daily schedule."
UCAP: "Then — Monday, Tuesday, Wednesday. The days of the week."
UCAP: "Today — you put it all in one place. Your whole week, in English."

→ Jeda 3 detik.

UCAP: "That schedule — that is yours. Nobody else has the same week."

UCAP: "Next time — we start something new. Plants. Animals. Weather. The natural world."
[Teaser Kluster C — TP09 Plants, Animals, and Nature]

UCAP: "But today — well done."

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: minta siswa menulis nama mereka besar-besar di bagian atas lembar kerja. Ritual kepemilikan — sama seperti TP04.`,
          bantuan: null,
          cue    : 'Narasi perjalanan ("seven o\'clock... first, then... Monday, Tuesday...") harus diucapkan dengan ritme yang membangun — setiap baris sedikit lebih lambat dari yang sebelumnya, sampai berhenti di "your whole week, in English." Ini adalah momen yang perlu dirasakan, bukan diucapkan terburu-buru.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B08;
