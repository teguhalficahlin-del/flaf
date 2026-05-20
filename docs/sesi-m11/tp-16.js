/**
 * =============================================================
 * FLAF — TP 16 (Simple Story Retelling)
 * File: docs/sesi-m11/tp-16.js
 * Format: v4.3
 * =============================================================
 *
 * STATUS: UPDATED — langkah[] ditambah field mode (Fase 9)
 *
 * KARAKTER KHAS TP 16:
 *   - Topik RENDAH sensitif — cerita bergambar generic.
 *   - Fokus: listening comprehension + sequential thinking + retelling dengan scaffold.
 *   - Desain: pre-defined cerita standard (3–5 panel) → semua siswa same story.
 *   - Aktivitas utama: prediction → story listening → comprehension Q&A →
 *     sequencing vocab (first/then/after/finally) → pair retelling (card-assisted) →
 *     character emotion mindful reflection (no forced exposure).
 *   - Closure: jembatan rumah — siswa perhatikan cerita di rumah/media (natural curiosity).
 *
 * SCOPE DESIGN:
 *   - Cerita: 1 pre-defined simple story (3–5 halaman, karakter positif, ending baik)
 *   - Vocab urutan: 4 item (first, then, after that, finally)
 *   - Comprehension: who/what/where questions
 *   - Retelling: card-assisted di semua mode (mudah-normal-tantangan)
 *
 * PENERAPAN PATTERN INKLUSIVITAS (CONTEXT.md):
 *   - Pattern 1: Scripted micro_script untuk story reading.
 *   - Pattern 4: Pair retelling universal — semua bisa ceritakan dengan kartu support.
 *   - Pattern 5: Fallback untuk siswa yang kesulitan ingat cerita atau gugup saat pair.
 *   - Character emotion reflection: MINDFUL ONLY.
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - docs/sesi-m10/tp-15.js (format reference)
 *   - CONTEXT.md §Pattern Inklusivitas
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

  persiapan: ['Buku cerita bergambar pre-defined: "Ani Finds a Cat" (3–5 halaman)', 'Kartu urutan: first, then, after that, finally (1 set per pasang)'],

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

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L0 — PEMBUKA KELAS · Greeting 🔵
        {
          tipe: 'instruksi',
          pm  : 'mindful',
          teks: 'Berdiri di depan kelas. Ucap: "Good morning, everyone! How are you today?" — tunggu respons kelas. Ucap: "I\'m fine, thank you! Are you ready? Let\'s start." Cue kritis: layar ini pendek dan wajib. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.',
          mode: null,
        },
        {
          tipe: 'audio',
          teks: 'Good morning, everyone! How are you today? / I\'m fine, thank you! Are you ready? Let\'s start.',
        },
        {
          tipe: 'respons_siswa',
          teks: 'Respons bebas kelas — "Fine!" / "Good morning!" / suara dan ekspresi.',
        },

        // L1 — PEMBUKA · Hook Prediction 🟠
        {
          tipe: 'instruksi',
          pm  : 'joyful',
          teks: 'Pegang buku cerita — tunjuk sampul ke kelas. Jangan buka halaman dalam. Tiga pertanyaan berurutan: "Look at this. What do you see?" [tunggu 2–3 respons bebas] → "Who is in the picture?" [tunggu 2–3 respons] → "What do you think will happen in this story?" [tunggu 2–3 prediksi]. Terima semua prediksi dengan anggukan — tidak dikonfirmasi benar atau salah. Ucap: "Let\'s find out. Listen carefully."',
          mode: {
            mudah:     { bantuan: 'Guru tanya simple: "Who is in the picture?" Siswa boleh jawab satu kata atau gesture/tunjuk gambar.' },
            normal:    { bantuan: 'Tiga pertanyaan berurutan. Siswa jawab dalam Inggris atau Indonesian mix.' },
            tantangan: { bantuan: 'Tiga pertanyaan + follow up "Why do you think so?" Siswa jawab kalimat pendek.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Look at this. What do you see? / Who is in the picture? / What do you think will happen in this story? / Let\'s find out. Listen carefully.',
        },
        {
          tipe: 'respons_siswa',
          teks: 'Prediksi bebas — boleh Bahasa Indonesia atau Inggris. "A cat!" / "A girl and a cat!" / "They play together!" — tidak dikoreksi, tidak dikonfirmasi.',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,

      langkah: [
        // L2 — INTI · Story Listening 🟡
        {
          tipe: 'instruksi',
          pm  : 'meaningful',
          teks: 'Pegang buku cerita menghadap siswa — gambar selalu terlihat kelas. "Listen. My turn to tell the story." Baca ekspresif halaman per halaman. Satu titik berhenti prediksi saja — antara halaman 1 dan 2: "What do you think she will find?" [tunggu 2–3 jawab bebas — lanjut tanpa konfirmasi]. Lanjut H2 → H3 → H4/5. Pause 3 detik wajib setelah halaman terakhir. Ucap: "That is the end. Did you like the story?" Bantuan jika perhatian turun: percepat transisi halaman — jangan >3 detik per halaman, skip halaman supporting jika perlu.',
          mode: {
            mudah:     { bantuan: 'Baca lebih lambat, gesture lebih jelas. Skip titik prediksi — cukup listening saja.' },
            normal:    { bantuan: 'Normal pace, gesture natural. Satu titik prediksi antara H1 dan H2.' },
            tantangan: { bantuan: 'Normal pace, tanya prediksi antara H1–H2. Siswa boleh tanya pertanyaan tentang cerita.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Listen. My turn to tell the story. / What do you think she will find? / That is the end. Did you like the story?',
        },
        {
          tipe: 'respons_siswa',
          teks: 'Prediksi di tengah cerita: "A cat!" / "A dog!" — bebas, tidak dikonfirmasi. Respons akhir: "Yes!" / ekspresi bebas.',
        },

        // L3 — INTI · Whole-Class Comprehension QA 🟡
        {
          tipe: 'instruksi',
          pm  : 'meaningful',
          teks: 'Pegang buku terbuka di halaman relevant. "Now — questions." Sebelum setiap pertanyaan: minta siswa tunjuk gambar dulu. → Tunjuk gambar Ani: "Point to Ani!" [kelas tunjuk] "Who is the main character?" → Tunjuk gambar kucing: "Point to the cat!" [kelas tunjuk] "What did she find in the park?" → Tunjuk halaman ending: "Where did they find the cat\'s home?" Terima jawaban Bahasa Indonesia dan campuran. Ucap: "Good. You understand the story." Cue kritis: tiga pertanyaan cukup — tidak lebih.',
          mode: {
            mudah:     { bantuan: 'Satu pertanyaan saja — Who (main character). Kelas jawab bersama. Tunjuk halaman relevant.' },
            normal:    { bantuan: 'Tiga pertanyaan who/what/where. Terima semua jawaban masuk akal termasuk Bahasa Indonesia.' },
            tantangan: { bantuan: 'Tiga pertanyaan + follow up: "Why did she help the cat?" Siswa jawab kalimat.' },
          },
        },
        {
          tipe: 'respons_siswa',
          teks: 'Kelas tunjuk gambar per cue "Point to ___!". Kelas jawab: "Ani!" / "The girl!" / "A cat!" / jawaban bebas yang masuk akal.',
        },
        // L4 — INTI · LISTEN FIRST · Sequencing Vocab 🟡
        {
          tipe: 'instruksi',
          pm  : 'meaningful',
          teks: 'Simpan buku cerita. Tunjuk papan — tertulis: First · Then · After that · Finally. Ucap: "Listen. Four magic words." → Tunjuk "First" — tangan kiri posisi paling kiri, gesture jalan: "First." → Tunjuk "Then" — geser satu langkah kanan, gesture terkejut: "Then." → Tunjuk "After that" — geser satu langkah lagi, gesture memberi makan: "After that." [ucap pelan — dua kata, jangan terburu] → Tunjuk "Finally" — geser paling kanan, buka lebar: "Finally." Ucap: "One more time." — ulang sekali, lambat. Cue kritis: gesture dua lapis konsisten — spatial (kiri ke kanan) + aksi cerita. Guru belum minta kelas produksi di layar ini.',
          mode: null,
        },
        {
          tipe: 'audio',
          teks: 'Listen. Four magic words. / First. / Then. / After that. / Finally. / One more time.',
        },

        // L5 — INTI · Produksi Bersama + Apply ke Cerita 🟠
        {
          tipe: 'instruksi',
          pm  : 'joyful',
          teks: 'Fase A — Produksi vocab: Ucap: "Together." Tunjuk papan → "First!" kelas: "First!" → "Then!" kelas: "Then!" → "After that!" kelas: "After that!" → "Finally!" kelas: "Finally!" Ulangi sekali, medium speed. Fase B — Apply ke cerita: Ucap: "Now — the story." Tunjuk "First" + gesture jalan: "First — Ani walked in the park." Kelas ulang full sentence. Tunjuk "Then" + gesture terkejut: "Then — she found a cat." Kelas ulang. Tunjuk "After that" + gesture memberi makan: "After that — she helped the cat." Kelas ulang. Tunjuk "Finally" + buka lebar: "Finally — they found the home!" Kelas ulang. Cue kritis: tunjuk papan sebelum ucap kalimat — bukan setelah. Kelas ulang full sentence — bukan hanya kata urutan. Jika kelas drop kata urutan: tunjuk papan, ucap kata urutan, tunggu 2 detik, lanjut choral. Jika melambat di "After that": lanjut ke "Finally" — jangan ulang dari awal.',
          mode: null,
        },
        {
          tipe: 'audio',
          teks: 'Together. / First! Then! After that! Finally! / Now — the story. / First — Ani walked in the park. / Then — she found a cat. / After that — she helped the cat. / Finally — they found the home!',
        },
        {
          tipe: 'respons_siswa',
          teks: 'Kelas ulang per cue: "First!" / "Then!" / "After that!" / "Finally!" — kemudian full sentences: "First — Ani walked in the park." / "Then — she found a cat." / "After that — she helped the cat." / "Finally — they found the home!"',
        },

        // L6 — INTI · TPR Sequencing 🔴
        {
          tipe: 'instruksi',
          pm  : 'joyful',
          teks: 'Tutup/hapus papan. Ucap: "No board. Just me and you." Putaran acak — maksimal 4 gesture. Guru tidak ucap kata — kelas yang produksi: → Tangan kiri paling kiri + gesture jalan: kelas ucap "First!" → Tangan satu langkah kanan + gesture terkejut: kelas ucap "Then!" → Tangan dua langkah kanan + gesture memberi makan: kelas ucap "After that!" → Tangan paling kanan + buka lebar: kelas ucap "Finally!" Ucap: "Stop. Good." Tepuk 1 kali — freeze. Ucap: "Sit down. Hands down." Jeda 3 detik. Cue kritis: gesture identik dengan L4 dan L5 — dua lapis, spatial + aksi. Jika kelas tertukar "then" dan "after that": tunjuk posisi tangan — "Then — satu langkah." Geser — "After that — dua langkah." Lanjut. Freeze wajib setelah layar ini sebelum distribusi kartu.',
          mode: null,
        },
        {
          tipe: 'audio',
          teks: 'No board. Just me and you. / What word? / Stop. Good. / Sit down. Hands down.',
        },
        {
          tipe: 'respons_siswa',
          teks: 'Kelas produksi mandiri per gesture guru: "First!" / "Then!" / "After that!" / "Finally!" — tanpa ucapan guru.',
        },

        // L7 — RESET + DISTRIBUSI · Kartu Urutan ⚪
        {
          tipe: 'instruksi',
          pm  : 'mindful',
          teks: 'Ucap: "Good. Now — cards." Distribusi kartu urutan (1 set per pasang) — guru atau siswa bantu distribusi. Tahan semua instruksi cara pakai sampai semua pasang sudah pegang kartu. Tunggu semua siap. Ucap: "Look at your cards. Four cards." → "Raise First!" [cek semua angkat kartu yang benar] → "Raise Finally!" [cek]. Ucap: "Good. Now listen — before you practice." Cue kritis: distribusi wajib selesai sebelum instruksi apapun tentang cara pakai kartu. Jangan berikan instruksi sambil distribusi masih berjalan. Cek "First" dan "Finally" setelah distribusi — dua anchor paling penting.',
          mode: null,
        },
        {
          tipe: 'audio',
          teks: 'Good. Now — cards. / Look at your cards. Four cards. / Raise First! / Raise Finally! / Good. Now listen — before you practice.',
        },

        // L8 — INTI · Demo Partner Retelling 🟡
        {
          tipe: 'instruksi',
          pm  : 'meaningful',
          teks: 'Ucap: "Watch. I show you first." Pegang set kartu urutan. Pilih 1 siswa sukarela sebagai Listener — siswa ini pegang set kartu mereka sendiri. Demo empat kalimat dengan gesture dua lapis: → Angkat kartu "First" + gesture jalan: "First — Ani walked in the park." Siswa Listener angkat kartu "First" — tahan. → Angkat kartu "Then" + gesture terkejut: "Then — she found a cat." Siswa Listener angkat kartu "Then." → Angkat kartu "After that" + gesture memberi makan: "After that — she helped the cat." Siswa Listener angkat kartu "After that." → Angkat kartu "Finally" + buka lebar: "Finally — they found the home!" Siswa Listener angkat kartu "Finally." Ucap eksplisit: "Storyteller tells. Listener holds the card. Raise when you hear the word." Ucap: "Partner voice — not shouting." Latih stop signal: "When I clap —" [tepuk 1 kali] "— stop." — latih 1x. Ucap: "Partner A tells the story. Partner B holds cards. Go." Cue kritis: demo wajib sebelum pair practice — siswa kelas 1 tidak bisa membayangkan tugas Listener tanpa contoh konkret. Gesture dua lapis tetap dipakai di demo — konsisten dengan L4–L6. Ucapkan tugas Listener eksplisit. Latih stop signal sebelum "Go."',
          mode: null,
        },
        {
          tipe: 'audio',
          teks: 'Watch. I show you first. / First — Ani walked in the park. / Then — she found a cat. / After that — she helped the cat. / Finally — they found the home! / Storyteller tells. Listener holds the card. Raise when you hear the word. / Partner voice — not shouting. / Partner A tells the story. Partner B holds cards. Go.',
        },
        {
          tipe: 'respons_siswa',
          teks: 'Siswa Listener demo: angkat kartu "First" → "Then" → "After that" → "Finally" saat mendengar kata urutan dari guru. Kelas mengamati.',
        },

        // L9 — INTI · Pair Retelling 🔴
        {
          tipe: 'instruksi',
          pm  : 'joyful',
          teks: 'Ucap dalam chunk pendek: "Partner A tells." "Partner B holds cards — raise when you hear the word." "Buku tertutup di meja — boleh lihat sebentar jika lupa." "Go." Total durasi: ±4 menit maksimal. Checkpoint tengah (±2 menit): tepuk 1 kali — freeze. Ucap: "Switch." "Partner B tells." "Partner A holds cards." Tepuk 1 kali — lanjut. Saat circulate: bergerak membentuk huruf U — jangan berhenti lama di satu pasangan. Cek apakah Listener aktif angkat kartu — tugas Listener paling cepat collapse. Bantuan: pasangan diam total → dekati, tunjuk kartu "First" di tangan mereka, bisik: "First, Ani walked…" Tunggu Partner A lanjut — tidak hentikan kelas. Bantuan: Storyteller lupa urutan → tunjuk kartu berikutnya di tangannya, tanpa bicara — tidak hentikan kelas. Bantuan: Listener tidak angkat kartu → dekati, tunjuk kartu yang sesuai, gesture angkat — tidak hentikan kelas. Bantuan: pasangan selesai terlalu cepat → "Try again. No book this time." Cue kritis: buku tertutup di meja — boleh dilihat sebentar jika lupa, tidak ditelusuri. Guru tidak koreksi grammar. Total ±4 menit — jangan lewati.',
          mode: null,
        },
        {
          tipe: 'audio',
          teks: 'Partner A tells. / Partner B holds cards — raise when you hear the word. / Buku tertutup di meja — boleh lihat sebentar jika lupa. / Go. / Switch. / Partner B tells. / Partner A holds cards. / Try again. No book this time.',
        },
        {
          tipe: 'respons_siswa',
          teks: 'Partner A cerita ulang dengan kartu urutan: "First — Ani walked in the park." / "Then — she found a cat." / "After that — she helped the cat." / "Finally — they found the home!" Partner B angkat kartu saat mendengar kata urutan. Tukar role setelah checkpoint.',
        },
        {
          tipe: 'darurat',
          teks: 'Jika volume kelas naik terlalu tinggi: tepuk 1 kali — duduk diam 3 detik — lanjut.',
        },
        {
          tipe       : 'diferensiasi',
          sudah      : 'Cerita tanpa lihat buku — kartu saja sebagai scaffold.',
          belum      : 'Boleh lihat buku sebentar jika lupa — tidak ditelusuri.',
        },

        // L10 — RESET + REFLEKSI · Emosi Tokoh ⚪
        {
          tipe: 'instruksi',
          pm  : 'mindful',
          teks: 'Tepuk 1 kali — freeze. Ucap: "Stop. Cards down. Look here." Jeda 3 detik. Ucap: "Let\'s think about the story." → Tunjuk halaman kucing di awal cerita: "The cat felt sad. The cat was lost. Alone." → Tunjuk halaman Ani membantu: "Ani helped. The cat felt happy." → Tunjuk halaman ending: "Ani helped. Ani felt happy too." Jeda 2 detik. Ucap: "Think quietly." Diam 5 detik — jangan tanya apa-apa selama jeda. Ucap: "Good. That is the story." Bantuan jika ada siswa tampak sedih: dekati diam-diam, kontak mata lembut — "It is OK." Lanjut tenang, skip sisa reflection untuk siswa itu. Cue kritis: reflection observasional — sebut fakta cerita, bukan interpretasi moral. Hindari kalimat seperti "when we help someone we feel good inside" — terlalu abstrak dan berisiko jadi ceramah. Guru yang bicara, bukan kelas. Tidak ada tangan angkat, tidak ada sharing wajib. Diam 5 detik wajib. Maksimal 2 menit total.',
          mode: null,
        },

        // L11 — RETRIEVAL · Choral Sequencing 🟠
        {
          tipe: 'instruksi',
          pm  : 'joyful',
          teks: 'Ucap: "One more time — together." Buka papan kembali. Tunjuk kata satu per satu: "First!" kelas: "First!" → "Then!" kelas: "Then!" → "After that!" kelas: "After that!" → "Finally!" kelas: "Finally!" Putaran acak kartu — maksimal 5 kartu acak. Tahan 1 detik sebelum lanjut ke kartu berikutnya. Ucap: "And the story — fast." → Tangan kiri paling kiri + gesture jalan: kelas ucap "First — Ani walked!" → Tangan satu langkah kanan + gesture terkejut: kelas ucap "Then — she found a cat!" → Tangan dua langkah kanan + gesture memberi makan: kelas ucap "After that — she helped!" → Tangan paling kanan + buka lebar: kelas ucap "Finally — they found the home!" Cue kritis: gesture dua lapis wajib — identik dengan L4, L5, L6, dan L8. Tahan 1 detik sebelum lanjut di putaran acak kartu. Kelas ucap full sentence di retrieval cerita — bukan hanya kata urutan.',
          mode: null,
        },
        {
          tipe: 'audio',
          teks: 'One more time — together. / First! Then! After that! Finally! / And the story — fast. / First — Ani walked! / Then — she found a cat! / After that — she helped! / Finally — they found the home!',
        },
        {
          tipe: 'respons_siswa',
          teks: 'Kelas ucap per kartu: "First!" / "Then!" / "After that!" / "Finally!" — kemudian full sentences: "First — Ani walked!" / "Then — she found a cat!" / "After that — she helped!" / "Finally — they found the home!"',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,

      langkah: [
        // L12 — PENUTUP · Exit Ticket 🟡
        {
          tipe: 'instruksi',
          pm  : 'meaningful',
          teks: 'Ucap: "Take your pencil." [Tunggu — pastikan semua siswa sudah pegang pensil]. Tunjuk kartu "Then" — tahan di depan kelas. Ucap: "Write one sentence. Use this word." [tunjuk kartu "Then"] → "Then — ___________." → "Tell me about the story." [Tunggu 45–60 detik]. Ucap: "Show me." Bantuan: terima kalimat penuh ("Then she found a cat"), frasa parsial ("then cat"), atau gambar dengan label kata urutan — tidak ada koreksi terbuka. Bantuan jika siswa belum selesai saat waktu habis: angkat kartu "Then" + siswa ucapkan lanjutan kalimat lisan ke guru. Cue kritis: pilih "Then" — bukan "First" atau "Finally." Middle sequence membutuhkan siswa mengingat urutan tengah cerita — bukti comprehension yang lebih nyata. Guru tahan kartu selama siswa menulis — tidak ganti kartu. Satu kata urutan, satu kalimat.',
          mode: null,
        },
        {
          tipe: 'audio',
          teks: 'Take your pencil. / Write one sentence. Use this word. / Then — ___________. / Tell me about the story. / Show me.',
        },
        {
          tipe: 'respons_siswa',
          teks: 'Siswa tulis satu kalimat menggunakan "Then" — kalimat penuh, frasa parsial, atau gambar + label kata urutan diterima. "Then she found a cat." / "then cat" / dll.',
        },

        // L13 — PENUTUP · Closing 🔵
        {
          tipe: 'instruksi',
          pm  : 'mindful',
          teks: 'Retrieval mikro: Ucap: "One more time — all four words." Tunjuk kartu satu per satu — kelas ucap: "First! Then! After that! Finally!" Ucap: "Today — we listened to a story. We used four words: first, then, after that, finally. You are great storytellers. See you next time."',
          mode: null,
        },
        {
          tipe: 'audio',
          teks: 'One more time — all four words. / First! Then! After that! Finally! / Today — we listened to a story. We used four words: first, then, after that, finally. You are great storytellers. See you next time.',
        },
        {
          tipe: 'respons_siswa',
          teks: 'Kelas ucap per kartu: "First!" / "Then!" / "After that!" / "Finally!"',
        },
      ],
    },

  ],

};

export default TP_16;
