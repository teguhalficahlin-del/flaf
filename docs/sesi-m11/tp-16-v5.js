/**
 * =============================================================
 * FLAF — TP 16 (Simple Story Retelling)
 * File: docs/sesi-m11/tp-16-v5.js
 * Format: v5.0
 * Source: docs/skenario/flaf-skenario-tp16-v2.txt
 * =============================================================
 */

const TP_16 = {

  id       : 'tp-16',
  nomor    : 16,
  kelas    : 2,
  nama     : 'Simple Story Retelling',
  tema     : 'Literasi Awal',
  deskripsi: `Peserta didik menyimak cerita bergambar sederhana yang sama untuk
    semua siswa, memahami isi cerita, dan menceritakan kembali menggunakan
    kata urutan (first, then, after that, finally) dengan dukungan kartu.
    Fokus pada comprehension dan sequential thinking, bukan memorization.`,

  indikator: [
    'Peserta didik dapat memahami cerita bergambar sederhana dan menjawab pertanyaan "who, what, where" tentang isi cerita.',
    'Peserta didik dapat menceritakan kembali isi cerita dalam 3–4 kalimat menggunakan kata urutan (first, then, after that, finally) dengan bantuan kartu.',
    'Peserta didik dapat mengidentifikasi perasaan tokoh cerita secara mindful (without forced personal exposure).',
  ],

  vocab: ['story', 'character', 'first', 'then', 'after that', 'finally', 'who', 'what', 'where', 'because', 'I think'],

  persiapan: [
    'Buku cerita bergambar pre-defined: "Ani Finds a Cat" (3–5 halaman)',
    'Kartu urutan: first, then, after that, finally (1 set per pasang)',
  ],

  media: [
    {
      id                 : 'media-cerita-sederhana',
      nama               : 'Buku Cerita Bergambar Pre-defined',
      tipe               : 'buku_cetak',
      printable          : true,
      pdf_ref            : 'Modul_Ajar_V3_TP16_Simple_Story_Retelling.docx',
      pdf_halaman        : '1–5',
      reusable_lintas_tp : false,
      keterangan         : 'Satu cerita standard (3–5 halaman) yang sama untuk semua kelas. Cerita: karakter positif, urutan jelas, ending baik. Contoh: "Ani finds a lost cat → she helps it → the cat finds home."',
    },
    {
      id                 : 'media-kartu-urutan',
      nama               : 'Kartu Urutan Cerita (4 item)',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'Modul_Ajar_V3_TP16_Simple_Story_Retelling.docx',
      pdf_halaman        : 2,
      reusable_lintas_tp : true,
      keterangan         : '4 kartu A5 dengan text + visual: "First" (start icon), "Then" (arrow), "After that" (continuation), "Finally" (end icon). Untuk scaffold pair retelling.',
    },
  ],

  printables: [
    { file: 'tp16-cover.png',          label: 'Story Cover' },
    { file: 'tp16-page-01.png',        label: 'Page 1' },
    { file: 'tp16-page-02.png',        label: 'Page 2' },
    { file: 'tp16-page-03.png',        label: 'Page 3' },
    { file: 'tp16-page-04.png',        label: 'Page 4' },
    { file: 'tp16-sequence-cards.png', label: 'Sequence Cards' },
  ],

  checklist: [
    'Buku cerita "Ani Finds a Cat" tersedia sebelum kelas masuk',
    'Kartu urutan (1 set per pasang) disiapkan di meja guru — belum dibagikan',
    'Papan tulis: First · Then · After that · Finally sudah tertulis sebelum kelas masuk',
    'Buku/kertas exit ticket sudah disiapkan di bawah meja siswa sebelum kelas masuk',
    'Layar 0 Greeting dilakukan',
    'Hook L1: sampul ditunjuk — halaman dalam tidak dibuka',
    'Prediksi siswa tidak dikonfirmasi benar atau salah di L1',
    'Guru pegang buku menghadap kelas saat story listening L2',
    'Satu titik berhenti prediksi saja di L2 — antara halaman 1 dan 2',
    'Jika perhatian turun di L2: percepat transisi halaman, jangan lebih dari 3 detik per halaman',
    'Pause 3 detik setelah halaman terakhir L2 — wajib sebelum lanjut',
    '"Point to ___!" dipakai sebelum setiap pertanyaan comprehension di L3',
    'Tiga pertanyaan who/what/where di L3 — tidak lebih',
    'LISTEN FIRST vocab dilakukan sebelum produksi di L4',
    'Gesture dua lapis konsisten L4–L11: spatial kiri→kanan + aksi cerita',
    'Kelas ulang full sentence di L5 — bukan hanya kata urutan',
    'Jika energi turun di "After that" L5: lanjut ke "Finally" — jangan ulang dari awal',
    'Papan ditutup/dihapus sebelum TPR di L6',
    'Putaran acak L6 maksimal 4 gesture — guru tidak ucap kata',
    'Freeze dilakukan setelah L6 sebelum distribusi kartu',
    'Distribusi kartu selesai sebelum instruksi cara pakai di L7',
    'Cek kartu "First" dan "Finally" setelah distribusi',
    'Demo partner dilakukan sebelum pair practice di L8',
    'Gesture dua lapis dipakai di demo L8 — konsisten dengan L4–L6',
    'Tugas Listener diucapkan eksplisit: "Raise when you hear the word"',
    'Stop signal dilatih sebelum pair practice',
    'Instruksi pair practice L9 diucapkan dalam chunk pendek',
    'Total pair retelling L9 tidak melebihi ±4 menit',
    'Checkpoint switch: Switch → Partner B tells → Partner A holds',
    'Saat circulate L9: bergerak huruf U — cek apakah Listener aktif angkat kartu',
    'Buku tertutup di meja saat pair retelling — boleh dilihat sebentar jika lupa, tidak ditelusuri',
    'Pasangan selesai cepat: tukar role lagi tanpa buku',
    'Freeze dan "Cards down" dilakukan sebelum reflection L10',
    'Reflection L10 observasional — sebut fakta cerita, bukan interpretasi moral',
    'Diam 5 detik wajib di akhir reflection — tidak tanya apa-apa',
    'Reflection L10 maksimal 2 menit total',
    'Gesture dua lapis L11 identik dengan L4, L5, L6, L8',
    '"Take your pencil." diucapkan dan ditunggu sebelum instruksi exit ticket',
    'Exit ticket: kartu "Then" ditahan, satu kalimat, 45–60 detik',
    'Jika siswa belum selesai: angkat kartu "Then" + ucap lisan ke guru',
    'Retrieval mikro empat kata dilakukan sebelum closing',
    'Setiap siswa sudah produksi minimal 1 kalimat dengan kata urutan',
  ],

  energi_map: [
    'L0 🔵',
    'L1 🟠',
    'L2 🟡',
    'L3 🟡',
    'L4 🟡',
    'L5 🟠',
    'L6 🔴',
    'L7 ⚪ → 🟡',
    'L8 🟡',
    'L9 🔴',
    'L10 ⚪ → 🟡',
    'L11 🟠',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L2 Story Listening: gambar selalu menghadap kelas — guru tidak lihat buku sendiri',
      'L2: satu titik berhenti prediksi saja (antara halaman 1 dan 2) — tidak lebih',
      'L4 Sequencing Vocab: "After that" dua kata — ucap pelan, tidak terburu',
      'L7 Distribusi: instruksi selesai sebelum kartu urutan dibagikan — bukan bersamaan',
    ],
    autonomy: [
      'Jika perhatian kelas turun saat story: percepat transisi halaman, jangan pause >3 detik',
      'Gesture dua lapis konsisten: spatial (tangan kiri ke kanan) + aksi cerita',
      'Jika kelas melambat di "After that": lanjut ke "Finally" — jangan restart dari awal',
      'L9: acceptance rule berlaku — fragment diterima, model ulang saat lewat',
    ],
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L0 — PEMBUKA KELAS · Greeting
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Good morning, everyone! How are you today?" — Tunggu respons kelas. UCAP: "I'm fine, thank you! Are you ready? Let's start."`,
          bantuan: null,
          cue    : 'Layar ini pendek dan wajib. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.',
          darurat: null,
          energi : '🔵',
        },

        // L1 — PEMBUKA · Hook Prediction
        {
          tipe   : 'instruksi',
          teks   : `Pegang buku cerita — tunjuk sampul ke kelas. Jangan buka halaman dalam dulu. UCAP: "Look at this. What do you see?" — tunggu 2–3 respons bebas, boleh Bahasa Indonesia. UCAP: "Who is in the picture?" — tunggu 2–3 respons. UCAP: "What do you think will happen in this story?" — tunggu 2–3 prediksi, tidak dikoreksi dan tidak dikonfirmasi. UCAP: "Let's find out. Listen carefully."`,
          bantuan: null,
          cue    : 'Guru tidak konfirmasi prediksi benar atau salah — semua prediksi diterima dengan anggukan. Jangan buka halaman dalam di layar ini. Tiga pertanyaan cukup — jangan tambah. Ini aktivasi antisipasi, bukan tes vocab.',
          darurat: null,
          energi : '🟠',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,

      langkah: [

        // L2 — INTI · Story Listening
        {
          tipe   : 'instruksi',
          teks   : `Berdiri di depan kelas, pegang buku cerita menghadap siswa. UCAP: "Listen. My turn to tell the story." → Halaman 1: baca ekspresif, tunjuk gambar Ani. [Berhenti] "What do you think she will find?" [tunggu 2–3 jawab bebas — lanjut tanpa konfirmasi] → Halaman 2: baca, tunjuk gambar kucing. → Halaman 3: baca, gesture Ani memberi makan. → Halaman 4/5: baca, tunjuk ending — kucing menemukan rumah. [Pause 3 detik setelah halaman terakhir] UCAP: "That is the end. Did you like the story?" [Tunggu respons bebas — senyum, lanjut]`,
          bantuan: 'Jika perhatian kelas mulai turun: percepat transisi halaman — jangan berhenti lebih dari 3 detik per halaman. Skip halaman supporting jika perlu, fokus di 3 halaman utama: opening, climax, ending.',
          cue    : 'Guru pegang buku menghadap kelas — gambar selalu terlihat siswa. Gesture untuk aksi cerita (gesture jalan, gesture terkejut, gesture memberi makan) lebih penting dari intonasi. Satu titik berhenti prediksi saja — antara halaman 1 dan 2. Pause 3 detik setelah halaman terakhir wajib — beri waktu siswa proses sebelum lanjut.',
          darurat: null,
          energi : '🟡',
        },

        // L3 — INTI · Whole-Class Comprehension QA
        {
          tipe   : 'instruksi',
          teks   : `Pegang buku terbuka di halaman relevant saat tanya. UCAP: "Now — questions." → Tunjuk gambar Ani — minta siswa tunjuk juga: "Point to Ani!" [kelas tunjuk] "Who is the main character?" Kelas: "Ani!" / "The girl!" → Tunjuk gambar kucing: "Point to the cat!" [kelas tunjuk] "What did she find in the park?" Kelas: "A cat!" → Tunjuk halaman ending: "Where did they find the cat's home?" [terima jawaban apapun yang masuk akal] UCAP: "Good. You understand the story."`,
          bantuan: null,
          cue    : '"Point to ___!" sebelum setiap pertanyaan — micro movement ini membantu perhatian kelas yang sudah tiga layar berturut-turut dalam mode focused. Guru selalu tunjuk halaman relevant sebelum tanya. Terima jawaban Bahasa Indonesia dan campuran. Tiga pertanyaan cukup — tidak lebih.',
          darurat: null,
          energi : '🟡',
        },

        // L4 — INTI · LISTEN FIRST Sequencing Vocab
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — Simpan buku cerita. Tunjuk papan: First · Then · After that · Finally. UCAP: "Listen. Four magic words." → Tunjuk "First" — tangan kiri posisi paling kiri, gesture jalan: "First." [spatial: paling kiri] → Tunjuk "Then" — tangan geser satu langkah ke kanan, gesture terkejut: "Then." [spatial: satu langkah maju] → Tunjuk "After that" — tangan geser satu langkah lagi ke kanan, gesture memberi makan: "After that." [spatial: dua langkah maju] → Tunjuk "Finally" — tangan geser ke posisi paling kanan, buka lebar: "Finally." [spatial: paling kanan]. UCAP: "One more time." → ulang sekali, lambat.`,
          bantuan: null,
          cue    : 'Gesture dua lapis konsisten sepanjang L4–L11: spatial (posisi tangan kiri ke kanan) + aksi cerita (jalan, terkejut, memberi makan, buka lebar). Dua layer ini harus selalu muncul bersama — spatial saja tidak cukup. "After that" dua kata — ucap pelan, tidak terburu. Guru belum minta kelas produksi di layar ini.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI · Produksi Bersama + Apply ke Cerita
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER — Fase A (produksi vocab, lambat): UCAP: "Together." → Tunjuk papan: "First!" kelas: "First!" → "Then!" kelas: "Then!" → "After that!" kelas: "After that!" → "Finally!" kelas: "Finally!" Ulangi sekali, medium speed. Fase B (apply ke cerita): UCAP: "Now — the story." → Tunjuk "First" + tangan kiri paling kiri + gesture jalan: "First — Ani walked in the park." Kelas ulang full sentence. → Tunjuk "Then" + tangan satu langkah kanan + gesture terkejut: "Then — she found a cat." Kelas ulang. → Tunjuk "After that" + tangan dua langkah kanan + gesture memberi makan: "After that — she helped the cat." Kelas ulang. → Tunjuk "Finally" + tangan paling kanan + buka lebar: "Finally — they found the home!" Kelas ulang.`,
          bantuan: [
            'Jika kelas drop kata urutan dan hanya ucap aksi: tunjuk papan — ucap kata urutan — tunggu 2 detik, lanjut choral.',
            'Jika kelas mulai melambat di "After that": jangan ulang seluruh rangkaian dari awal — lanjut langsung ke "Finally."',
          ],
          cue    : 'Gesture dua lapis wajib setiap kalimat — spatial + aksi cerita. Kelas ulang full sentence — bukan hanya kata urutan. Tunjuk papan sebelum ucap kalimat — bukan setelah. Jangan masuk loop repetisi panjang jika energi turun di "After that" — lanjut.',
          darurat: null,
          energi : '🟠',
        },

        // L6 — INTI · TPR Sequencing
        {
          tipe   : 'instruksi',
          teks   : `Tutup/hapus papan. UCAP: "No board. Just me and you." Putaran berurutan dulu — kelas produksi dari gesture guru: → Tangan kiri paling kiri + gesture jalan: "What word?" kelas: "First!" → Tangan satu langkah kanan + gesture terkejut: "What word?" kelas: "Then!" → Tangan dua langkah kanan + gesture memberi makan: "What word?" kelas: "After that!" → Tangan paling kanan + buka lebar: "What word?" kelas: "Finally!" Putaran acak — maksimal 4 gesture. Guru tidak ucap kata — kelas yang produksi. UCAP: "Stop. Good." [Tepuk 1 kali — freeze] UCAP: "Sit down. Hands down." [Jeda 3 detik]`,
          bantuan: 'Jika kelas tertukar "then" dan "after that": tunjuk posisi tangan — "Then — satu langkah." Geser — "After that — dua langkah." Lanjut.',
          cue    : 'Gesture di layar ini harus identik dengan L4 dan L5 — dua lapis, spatial + aksi. Jangan improvisasi gesture baru. Maksimal 4 putaran acak, langsung stop. Guru tidak ucap kata di putaran acak — ini cek retrieval mandiri. Freeze wajib setelah layar ini sebelum distribusi kartu.',
          darurat: null,
          energi : '🔴',
        },

        // L7 — RESET + DISTRIBUSI · Kartu Urutan
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Good. Now — cards." Distribusi kartu urutan (1 set per pasang) — guru atau siswa bantu distribusi. Tahan semua instruksi cara pakai sampai semua pasang sudah pegang kartu. Tunggu semua siap. UCAP: "Look at your cards. Four cards." → "Raise First!" [cek semua angkat kartu yang benar] → "Raise Finally!" [cek]. UCAP: "Good. Now listen — before you practice."`,
          bantuan: null,
          cue    : 'Distribusi wajib selesai sebelum instruksi apapun tentang cara pakai kartu. Jangan berikan instruksi sambil distribusi masih berjalan. Cek "First" dan "Finally" setelah distribusi — dua anchor paling penting.',
          darurat: null,
          energi : '⚪ → 🟡',
        },

        // L8 — INTI · Demo Partner Retelling
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Watch. I show you first." Pegang set kartu urutan. Pilih 1 siswa sukarela sebagai Listener — siswa ini pegang set kartu mereka sendiri. Demo empat kalimat dengan gesture dua lapis: → Angkat kartu "First" + gesture jalan: "First — Ani walked in the park." Siswa Listener angkat kartu "First" — tahan. → Angkat kartu "Then" + gesture terkejut: "Then — she found a cat." Siswa Listener angkat kartu "Then." → Angkat kartu "After that" + gesture memberi makan: "After that — she helped the cat." Siswa Listener angkat kartu "After that." → Angkat kartu "Finally" + buka lebar: "Finally — they found the home!" Siswa Listener angkat kartu "Finally." UCAP: "Storyteller tells. Listener holds the card. Raise when you hear the word." UCAP: "Partner voice — not shouting." Latih stop signal: "When I clap —" [tepuk 1 kali] "— stop." — latih 1x. UCAP: "Partner A tells the story. Partner B holds cards. Go."`,
          bantuan: null,
          cue    : 'Demo wajib — siswa kelas 1 tidak bisa membayangkan tugas Listener tanpa contoh konkret. Guru demo sebagai Storyteller, siswa sukarela demo sebagai Listener. Gesture dua lapis tetap dipakai di demo — konsisten dengan L4–L6. Ucapkan tugas Listener eksplisit: "Raise when you hear the word." Latih stop signal sebelum "Go."',
          darurat: null,
          energi : '🟡',
        },

        // L9 — INTI · Pair Retelling
        {
          tipe   : 'instruksi',
          teks   : `UCAP dalam chunk pendek: "Partner A tells." "Partner B holds cards — raise when you hear the word." "Buku tertutup di meja — boleh lihat sebentar jika lupa." "Go." Total durasi: ±4 menit maksimal. Checkpoint tengah (±2 menit): [Tepuk 1 kali — freeze] UCAP: "Switch." "Partner B tells." "Partner A holds cards." [Tepuk 1 kali — lanjut]`,
          bantuan: [
            'Pasangan diam total: dekati, tunjuk kartu "First" di tangan mereka — bisik: "First, Ani walked…" Tunggu Partner A lanjut. Tidak hentikan kelas.',
            'Storyteller lupa urutan: tunjuk kartu berikutnya di tangannya — tanpa bicara. Tidak hentikan kelas.',
            'Listener tidak angkat kartu: dekati, tunjuk kartu yang sesuai — gesture angkat. Tidak hentikan kelas.',
            'Pasangan selesai terlalu cepat: tukar role lagi — "Try again. No book this time."',
          ],
          cue    : 'Saat circulate: bergerak membentuk huruf U — jangan berhenti lama di satu pasangan. Cek apakah Listener aktif angkat kartu — tugas Listener paling cepat collapse. Buku tertutup di meja — boleh dilihat sebentar jika lupa, tidak ditelusuri. Guru tidak koreksi grammar. Total ±4 menit — jangan lewati.',
          darurat: 'Jika volume kelas naik terlalu tinggi → tepuk 1 kali, duduk diam 3 detik, lanjut.',
          energi : '🔴',
        },

        // L10 — RESET + REFLEKSI · Emosi Tokoh
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — freeze] UCAP: "Stop. Cards down. Look here." [Jeda 3 detik] UCAP: "Let's think about the story." → Tunjuk halaman kucing di awal cerita: "The cat felt sad. The cat was lost. Alone." → Tunjuk halaman Ani membantu: "Ani helped. The cat felt happy." → Tunjuk halaman ending: "Ani helped. Ani felt happy too." [Jeda 2 detik] UCAP: "Think quietly." [Diam 5 detik — jangan tanya apa-apa] UCAP: "Good. That is the story."`,
          bantuan: 'Jika ada siswa tampak sedih: dekati diam-diam, kontak mata lembut — "It is OK." Lanjut tenang, tidak teruskan reflection untuk siswa itu.',
          cue    : 'Reflection ini observasional — guru sebut fakta cerita, bukan interpretasi moral. Hindari kalimat seperti "when we help someone we feel good inside" — terlalu abstrak dan berisiko jadi ceramah. Guru yang bicara, bukan kelas. Tidak ada tangan angkat, tidak ada sharing wajib. Diam 5 detik wajib — jangan tanya apa-apa selama jeda. Maksimal 2 menit total.',
          darurat: null,
          energi : '⚪ → 🟡',
        },

        // L11 — RETRIEVAL · Choral Sequencing
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "One more time — together." Buka papan kembali. → "First!" kelas: "First!" → "Then!" kelas: "Then!" → "After that!" kelas: "After that!" → "Finally!" kelas: "Finally!" Guru tunjuk kartu satu per satu acak — kelas ucap nama. Maksimal 5 kartu acak — tahan 1 detik sebelum lanjut. UCAP: "And the story — fast." → Tangan kiri paling kiri + gesture jalan: kelas ucap "First — Ani walked!" → Tangan satu langkah kanan + gesture terkejut: "Then — she found a cat!" → Tangan dua langkah kanan + gesture memberi makan: "After that — she helped!" → Tangan paling kanan + buka lebar: "Finally — they found the home!"`,
          bantuan: null,
          cue    : 'Gesture dua lapis wajib — identik dengan L4, L5, L6, dan L8. Ini anchor retrieval utama — jika gesture berubah, anchor putus. Di putaran acak kartu: tahan 1 detik sebelum lanjut. Kelas ucap full sentence di retrieval cerita — bukan hanya kata urutan.',
          darurat: null,
          energi : '🟠',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,

      langkah: [

        // L12 — PENUTUP · Exit Ticket
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Take your pencil." [Tunggu — pastikan semua siswa sudah pegang pensil] Tunjuk kartu "Then" — tahan di depan kelas. UCAP: "Write one sentence. Use this word." [tunjuk kartu "Then"] → "Then — ___________." → "Tell me about the story." [Tunggu 45–60 detik] UCAP: "Show me."`,
          bantuan: [
            'Terima: kalimat penuh ("Then she found a cat"), frasa parsial ("then cat"), atau gambar dengan label kata urutan. Tidak ada koreksi terbuka.',
            'Jika siswa belum selesai saat waktu habis: angkat kartu "Then" + ucapkan lanjutan kalimat lisan ke guru.',
          ],
          cue    : 'Pilih "Then" — bukan "First" atau "Finally." Middle sequence membutuhkan siswa mengingat urutan tengah cerita — bukti comprehension yang lebih nyata. Guru tahan kartu selama siswa menulis — tidak ganti kartu. Satu kata urutan, satu kalimat.',
          darurat: null,
          energi : '🟡',
        },

        // L13 — PENUTUP · Closing
        {
          tipe   : 'instruksi',
          teks   : `Retrieval mikro: UCAP: "One more time — all four words." Tunjuk kartu satu per satu — kelas ucap: "First! Then! After that! Finally!" UCAP: "Today — we listened to a story. We used four words: first, then, after that, finally. You are great storytellers. See you next time."`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_16;
