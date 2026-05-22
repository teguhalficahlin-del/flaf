/**
 * =============================================================
 * FLAF — TP 17 (My Hobbies)
 * File: docs/sesi-m12/tp-17.js
 * Format: v4.3 — langkah[] only
 * =============================================================
 *
 * STATUS: UPDATED — langkah[] ditambah field mode (Fase 9)
 *
 * KARAKTER KHAS TP 17:
 *   - Topik TINGGI sensitif — hobi bisa expose kondisi ekonomi keluarga.
 *   - Desain inklusif: universal hobbies (8 item) + binary reason (fun/interesting)
 *     + voluntary presentation (ZERO forced exposure).
 *   - Aktivitas utama: hobi identification + pola practice (I like...because...)
 *     + pair dialogue + voluntary sharing.
 *   - Pembuka hook: guru model hobi sendiri (show enthusiasm, not expertise).
 *
 * SCOPE DESIGN:
 *   - Hobbies: 8 item (reading, drawing, singing, dancing, playing football,
 *     cooking, swimming, cycling)
 *   - Pola: "I like [gerund] because it is [fun / interesting]"
 *   - Reason: 2 pilihan (fun, interesting)
 *
 * PENERAPAN PATTERN INKLUSIVITAS (CONTEXT.md §Pattern Inklusivitas):
 *   - Pattern 1: Scripted micro_script untuk hobi modeling.
 *   - Pattern 2: Skip aktivitas personal expose — presentation VOLUNTARY.
 *   - Pattern 4: Pair dialogue universal.
 *   - Pattern 5: Fallback sensitif ketat.
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - docs/sesi-m11/tp-16.js (format reference)
 *   - CONTEXT.md §Pattern Inklusivitas
 */

const TP_17 = {

  id       : 'tp-17',
  nomor    : 17,
  kelas    : 2,
  nama     : 'My Hobbies',
  tema     : 'Diri Sendiri dan Perasaan',
  deskripsi: `Peserta didik belajar mengungkapkan hobi dan aktivitas waktu luang
    menggunakan pola "I like [gerund] because it is [fun/interesting]" dalam
    konteks yang universal dan inklusif. Fokus pada pattern practice dan
    voluntary sharing, bukan forced personal exposure.`,

  indikator: [
    'Peserta didik dapat menyebut dan mengenali 8 hobi dengan gerund yang benar (reading, drawing, singing, dancing, playing football, cooking, swimming, cycling).',
    'Peserta didik dapat mengungkapkan hobi dan alasan menggunakan pola "I like ... because it is fun / interesting" dengan struktur yang tepat.',
    'Peserta didik dapat menanyakan dan merespons "What do you like to do?" dalam percakapan berpasangan sederhana.',
  ],

  vocab: ['reading', 'drawing', 'singing', 'dancing', 'playing football', 'cooking', 'swimming', 'cycling', 'I like', 'because', 'fun', 'interesting'],

  persiapan: ['Kartu hobi bergambar 8 item dengan gerund form'],

  media: [
    {
      id                 : 'media-kartu-hobi',
      nama               : 'Kartu Hobi Bergambar (8 item)',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'Modul_Ajar_V3_TP17_My_Hobbies.docx',
      pdf_halaman        : 1,
      reusable_lintas_tp : true,
      keterangan         : '8 kartu A5 dengan gambar & text: reading, drawing, singing, dancing, playing football, cooking, swimming, cycling. Ilustrasi netral & beragam. Universal framing.',
    },
  ],

  printables: [
    { file: 'tp17-cooking.png',         label: 'Cooking' },
    { file: 'tp17-cycling.png',         label: 'Cycling' },
    { file: 'tp17-dancing.png',         label: 'Dancing' },
    { file: 'tp17-drawing.png',         label: 'Drawing' },
    { file: 'tp17-playing-football.png',label: 'Playing Football' },
    { file: 'tp17-reading.png',         label: 'Reading' },
    { file: 'tp17-singing.png',         label: 'Singing' },
    { file: 'tp17-swimming.png',        label: 'Swimming' },
  ],

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [
        {
          tipe: 'instruksi',
          pm  : 'mindful',
          teks: 'Guru berdiri di depan kelas. Ucap: "Good morning, everyone! How are you today?" — tunggu respons kelas. Ucap: "I\'m fine, thank you! Are you ready? Let\'s start." Cue kritis: layar ini pendek dan wajib. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.',
          mode: {
            mudah:     { bantuan: '' },
            normal:    { bantuan: '' },
            tantangan: { bantuan: '' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Good morning, everyone! How are you today? / I\'m fine, thank you! Are you ready? Let\'s start.',
        },
        {
          tipe: 'instruksi',
          pm  : 'joyful',
          teks: 'Guru berdiri di tengah kelas — tidak ada kartu. Gesture membuka buku, pura-pura membaca: "I like reading!" [tunggu 2–3 detik]. Gesture mengaduk masakan: "I like cooking!" [tunggu 2–3 detik]. Gesture menendang bola: "I like playing football!" [tunggu 2–3 detik]. Ucap: "These are hobbies. Things we love to do. Today — hobbies in English." Tunggu respons bebas. Cue kritis: guru yang perform — bukan meminta siswa respond dulu. Tiga hobi cukup, jangan perkenalkan semua 8. Respons bebas siswa diterima tanpa koreksi.',
          mode: {
            mudah:     { bantuan: '' },
            normal:    { bantuan: '' },
            tantangan: { bantuan: '' },
          },
        },
        {
          tipe: 'respons_siswa',
          teks: 'Respons bebas — boleh nama hobi dalam bahasa Indonesia atau Inggris, gesture ikut, atau ekspresi pengenalan. Tidak dikoreksi, tidak dikonfirmasi.',
        },
      ],
    },

    {
      fase  : 'Inti',
      durasi: 35,

      langkah: [
        {
          tipe: 'instruksi',
          pm  : 'meaningful',
          teks: 'Tempel 4 kartu satu per satu — reading, drawing, singing, dancing. Setiap kartu: tunjuk kartu → gesture → ucap gerund, satu detik jeda. Ucap: "Listen. My turn." — "Reading." [gesture membuka buku, mata ke bawah — tunjuk kartu] — "Drawing." [gesture pegang pensil, gambar di udara — tunjuk kartu] — "Singing." [gesture tangan ke mulut, kepala sedikit naik — tunjuk kartu] — "Dancing." [gesture gerak badan kiri kanan — tunjuk kartu]. Ucap: "One more time." — ulang sekali. Cue kritis: gesture harus exaggerated dan berbeda jelas — ini anchor utama. Reading = mata ke bawah, tangan diam / drawing = tangan bergerak di udara. Guru belum minta kelas produksi di layar ini.',
          mode: {
            mudah:     { bantuan: '' },
            normal:    { bantuan: '' },
            tantangan: { bantuan: '' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Listen. My turn. Reading. Drawing. Singing. Dancing. One more time.',
        },
        {
          tipe: 'instruksi',
          pm  : 'joyful',
          teks: 'Ucap: "Now together. I show — you say." Gesture membuka buku — kelas ucap "Reading!". Gesture pensil di udara — "Drawing!". Gesture tangan ke mulut — "Singing!". Gesture gerak badan — "Dancing!". Putaran 2: tunjuk 2 kartu acak — kelas ucap. Langsung lanjut contrast drill (15 detik): ucap "Watch." → gesture reading (mata ke bawah, tangan diam): "Reading — hands still." → gesture drawing (tangan bergerak di udara): "Drawing — hands move." Ucap: "Ready? Which one?" — "Hands still — show me!" → kelas gesture reading — "Hands move — show me!" → kelas gesture drawing. Ulangi 2 putaran, cepat. Cue kritis: contrast drill reading vs drawing wajib — anchor perbedaan: reading = tangan diam / drawing = tangan bergerak. Jangan explain — tunjukkan perbedaan fisik dan lanjut.',
          mode: {
            mudah:     { bantuan: 'Jika kelas tertukar reading/drawing: guru berdiri diam — gesture reading (tangan diam) → gesture drawing (tangan bergerak). Lanjut.' },
            normal:    { bantuan: 'Jika kelas tertukar reading/drawing: guru berdiri diam — gesture reading (tangan diam) → gesture drawing (tangan bergerak). Lanjut.' },
            tantangan: { bantuan: 'Jika kelas tertukar reading/drawing: guru berdiri diam — gesture reading (tangan diam) → gesture drawing (tangan bergerak). Lanjut.' },
          },
        },
        {
          tipe: 'respons_siswa',
          teks: 'Kelas ucap "Reading!", "Drawing!", "Singing!", "Dancing!" sesuai gesture guru. Di contrast drill: kelas gesture reading (tangan diam) atau drawing (tangan bergerak) sesuai cue "Hands still" / "Hands move".',
        },
        {
          tipe: 'instruksi',
          pm  : 'meaningful',
          teks: 'Reactivation (15–20 detik): ucap "Quick check." — gesture 4 hobi gelombang 1 berurutan, kelas ucap. Tidak dikoreksi, tidak diulang, langsung lanjut. LISTEN FIRST Gelombang 2: tempel 4 kartu berikutnya — playing football, cooking, swimming, cycling. Ucap: "Listen. My turn." — "Playing football." [gesture menendang bola — tunjuk kartu] — "Cooking." [gesture mengaduk panci — tunjuk kartu] — "Swimming." [gesture lengan berenang ke samping — tunjuk kartu] — "Cycling." [gesture pegang setir + kaki mengayuh — tunjuk kartu]. Ucap: "One more time." — ulang sekali. Cue kritis: reactivation wajib 15–20 detik. Swimming = kedua lengan ke samping / cycling = tangan pegang setir + kaki mengayuh. "Playing football" tiga kata — ucap pelan. Jika satu item lambat: ulang item itu saja, tidak restart semua 4.',
          mode: {
            mudah:     { bantuan: 'Jika kelas mulai lambat di "playing football": jangan ulang semua 4 item dari awal — ulang item itu saja, lanjut.' },
            normal:    { bantuan: 'Jika kelas mulai lambat di "playing football": jangan ulang semua 4 item dari awal — ulang item itu saja, lanjut.' },
            tantangan: { bantuan: 'Jika kelas mulai lambat di "playing football": jangan ulang semua 4 item dari awal — ulang item itu saja, lanjut.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Listen. My turn. Playing football. Cooking. Swimming. Cycling. One more time.',
        },
        {
          tipe: 'instruksi',
          pm  : 'joyful',
          teks: 'Fase A — gelombang 2 saja, lambat. Ucap: "Together." — gesture menendang: "Playing football!" — gesture mengaduk: "Cooking!" — gesture lengan ke samping: "Swimming!" — gesture pegang setir: "Cycling!". Fase B — campur 8 kartu, medium. Ucap: "Now — all together." — tunjuk semua 8 kartu berurutan, kelas ucap. Fase C — 4 kartu acak, cepat. Ucap: "Ready? Fast — but clear." — pilih 4 kartu acak, tahan 1 detik sebelum lanjut. Jika energi naik liar setelah Fase B: langsung masuk Fase C tanpa ulang. Contrast drill swimming vs cycling langsung setelah Fase C (15 detik): ucap "Watch." — gesture swimming (kedua lengan ke samping): "Swimming — arms out." — gesture cycling (tangan setir + kaki): "Cycling — hands and feet." Ucap: "Which one? Arms out — show me!" → kelas gesture swimming. "Hands and feet — show me!" → kelas gesture cycling. Ulangi 2 putaran, cepat. Cue kritis: swimming dan cycling tidak berurutan di Fase C. Di Fase C cukup tunjuk kartu, tidak perlu gesture penuh. Jika energi turun setelah Fase C: langsung masuk contrast drill tanpa repeat.',
          mode: {
            mudah:     { bantuan: 'Jika kelas mulai telat di Fase B/C: kurangi tempo, ulangi 2 kartu, lanjut.' },
            normal:    { bantuan: 'Jika kelas mulai telat di Fase B/C: kurangi tempo, ulangi 2 kartu, lanjut.' },
            tantangan: { bantuan: 'Jika kelas mulai telat di Fase B/C: kurangi tempo, ulangi 2 kartu, lanjut.' },
          },
        },
        {
          tipe: 'respons_siswa',
          teks: 'Kelas ucap nama 8 hobi sesuai kartu/gesture di Fase A–C. Di contrast drill: kelas gesture swimming (lengan ke samping) atau cycling (tangan setir + kaki) sesuai cue "Arms out" / "Hands and feet".',
        },
        {
          tipe: 'instruksi',
          pm  : 'joyful',
          teks: 'Lepas semua kartu dari papan — simpan. Siswa tidak pegang apa-apa. Ucap: "No cards. Just me and you." Cue semua 8 hobi berurutan: "Show me reading!" → kelas gesture → "Show me drawing!" → ... → "Show me cycling!". Putaran acak — maksimal 5 cue. Ucap: "My turn to watch. You show me." — pilih 5 cue acak, pisahkan pasangan mirip: reading/drawing tidak berurutan, swimming/cycling tidak berurutan. Setelah 5 cue: langsung stop. Ucap: "Stop. Good." [tepuk 1 kali — freeze]. Ucap: "Sit down. Hands down." [jeda 3 detik]. Cue kritis: guru tidak ikut di putaran acak — fokus observasi siapa yang tertukar. Maksimal 5 cue, langsung stop. Freeze wajib sebelum masuk frame kalimat.',
          mode: {
            mudah:     { bantuan: 'Jika kelas tertukar swimming/cycling: guru berdiri diam — gesture swimming (lengan) → gesture cycling (setir + kaki). Lanjut.' },
            normal:    { bantuan: 'Jika kelas tertukar swimming/cycling: guru berdiri diam — gesture swimming (lengan) → gesture cycling (setir + kaki). Lanjut.' },
            tantangan: { bantuan: 'Jika kelas tertukar swimming/cycling: guru berdiri diam — gesture swimming (lengan) → gesture cycling (setir + kaki). Lanjut.' },
          },
        },
        {
          tipe: 'respons_siswa',
          teks: 'Kelas gesture sesuai cue "Show me…" untuk semua 8 hobi. Di putaran acak: kelas gesture sendiri tanpa guru ikut. Setelah "Stop. Good." dan tepuk 1 kali — semua berhenti, duduk, tangan turun.',
        },
        {
          tipe: 'instruksi',
          pm  : 'meaningful',
          teks: 'Ucap: "Good. Now — hobbies become sentences. Watch." Tempel kembali kartu reading dan dancing. Tunjuk papan — I like ___ because it is ___. Ucap: "Listen. My turn." → gesture reading, tunjuk kartu: "I like reading — because it is interesting." [gesture curious eyes] [jeda 2 detik] → gesture dancing, tunjuk kartu: "I like dancing — because it is fun!" [gesture senyum lebar, tangan naik] [jeda 2 detik] → gesture cooking, tunjuk kartu cooking: "I like cooking — because it is fun!". Ucap: "One more time." — ulang tiga kalimat. Cue kritis: "Hobbies become sentences." wajib diucapkan — reset mode mental dari TPR ke frame kalimat. Jeda 2 detik setelah contoh pertama wajib. Tunjuk papan setiap kali ucap frame. Guru randomize reason. Guru tidak tanya kelas dulu di layar ini.',
          mode: {
            mudah:     { bantuan: '' },
            normal:    { bantuan: '' },
            tantangan: { bantuan: '' },
          },
        },
        {
          tipe: 'instruksi',
          pm  : 'joyful',
          teks: 'Ucap: "Together now. Whole sentence." Tunjuk papan: I like ___ because it is ___. Pattern wajib: guru model penuh → kelas ulang penuh → baru fill-in. Giliran 1 — gesture reading: guru model "I like reading because it is interesting." → kelas ulang penuh. Giliran 2 — gesture singing: guru model "I like singing because it is…" [tangan buka, tunggu] → kelas isi "…fun!" → kelas ulang penuh. Giliran 3 — gesture playing football: guru model "I like playing football because it is…" [tangan buka] → kelas isi "…fun!" → kelas ulang penuh. Giliran 4 — gesture swimming: guru model "I like swimming because it is…" [tangan buka] → kelas isi "…interesting!" → kelas ulang penuh. Cue kritis: jangan balik urutan pattern. Guru randomize fun/interesting. "Playing football" tiga kata — ucap pelan. Koreksi via model ulang, bukan teguran terbuka.',
          mode: {
            mudah:     { bantuan: 'Jika kelas drop "I like": tunjuk papan — "Whole sentence." [gestur garis panjang tangan] — tunggu 2 detik, lanjut choral.' },
            normal:    { bantuan: 'Jika kelas drop "I like": tunjuk papan — "Whole sentence." [gestur garis panjang tangan] — tunggu 2 detik, lanjut choral.' },
            tantangan: { bantuan: 'Jika kelas drop "I like": tunjuk papan — "Whole sentence." [gestur garis panjang tangan] — tunggu 2 detik, lanjut choral.' },
          },
        },
        {
          tipe: 'respons_siswa',
          teks: 'Kelas ulang kalimat penuh setelah guru model. Kelas isi bagian reason saat guru buka tangan. Kelas ulang kalimat penuh setelah fill-in.',
        },
        {
          tipe: 'instruksi',
          pm  : 'meaningful',
          teks: 'Whole-class QA drill — 2 putaran. Ucap: "Now you ask. Ready?" → gesture reading, berdiri diam → ucap: "Ask me." → kelas bersama: "What do you like to do?" → guru: "I like reading because it is interesting!" → gesture dancing → kelas: "What do you like to do?" → guru: "I like dancing because it is fun!" Ucap: "Good. That\'s the question. That\'s the answer." Demo pasang — 1 siswa sukarela: ucap "Watch them." → bisik ke Siswa A: "You like cooking." → Siswa A pegang kartu cooking → Siswa B tanya: "What do you like to do?" → Siswa A jawab: "I like cooking because it is fun!" → guru: "Good. Full sentence." Instruksi sebelum practice (chunk pendek): "Partner voice — not shouting." "Partner A holds a card — face down." "Partner B asks: What do you like to do?" "Partner A answers: I like ___ because it is ___." [tunjuk papan] "Partner B: raise the card when you hear the hobby." Latih stop signal: "When I clap —" [tepuk 1 kali] "— stop." Ucap: "Go." Cue kritis: QA drill 2 putaran wajib. Guru bisik hobi ke Siswa A — tidak diucapkan ke kelas. Tugas Listener: "Raise the card" — bukan "hold".',
          mode: {
            mudah:     { bantuan: '' },
            normal:    { bantuan: '' },
            tantangan: { bantuan: '' },
          },
        },
        {
          tipe: 'respons_siswa',
          teks: 'Kelas bersama ucap "What do you like to do?" saat guru gesture dan diam. Demo: Siswa B tanya, Siswa A jawab "I like cooking because it is fun!". Semua siswa latih stop signal tepuk 1 kali.',
        },
        {
          tipe: 'instruksi',
          pm  : 'joyful',
          teks: 'Distribusi kartu hobi — 1 set per pasang. Tunggu semua siap sebelum instruksi. Ucap dalam chunk pendek: "Partner A picks a card — holds it face down." "Partner B asks: What do you like to do?" "Partner A answers: I like ___ because it is ___." [tunjuk papan] "Partner B: raise the card when you hear the hobby." "Full sentence. Go." Total durasi Â±4 menit — jangan lewati. Checkpoint tengah (Â±2 menit): [tepuk 1 kali — freeze] "Switch." "Partner B picks a card." "Partner A asks and raises." [tepuk 1 kali — lanjut]. Saat circulate: bergerak huruf U — cek Partner B angkat kartu setelah mendengar, bukan sebelum. Fokus pada produksi bahasa — tidak verifikasi apakah hobi benar-benar dilakukan siswa. Guru tidak koreksi grammar.',
          mode: {
            mudah:     { bantuan: 'Pasangan diam: dekati, tunjuk kartu Partner A, bisik "I like…", tunggu lanjut — tidak hentikan kelas. Partner B tidak angkat kartu: dekati, gesture angkat tanpa bicara — tidak hentikan kelas. Pasangan selesai cepat: "Pick another card. Switch again."' },
            normal:    { bantuan: 'Pasangan diam: dekati, tunjuk kartu Partner A, bisik "I like…", tunggu lanjut — tidak hentikan kelas. Partner B tidak angkat kartu: dekati, gesture angkat tanpa bicara — tidak hentikan kelas. Pasangan selesai cepat: "Pick another card. Switch again."' },
            tantangan: { bantuan: 'Pasangan diam: dekati, tunjuk kartu Partner A, bisik "I like…", tunggu lanjut — tidak hentikan kelas. Partner B tidak angkat kartu: dekati, gesture angkat tanpa bicara — tidak hentikan kelas. Pasangan selesai cepat: "Pick another card. Switch again."' },
          },
        },
        {
          tipe: 'darurat',
          teks: 'Jika volume kelas naik terlalu tinggi → tepuk 1 kali, duduk diam 3 detik, lanjut.',
        },
        {
          tipe: 'diferensiasi',
          sudah: [
            'Ganti kartu setiap giliran.',
            'Ciptakan reason sendiri selain fun/interesting.',
          ],
          belum: [
            'Cukup ucap hobi saja — "Reading!" — tanpa "because".',
          ],
        },
        {
          tipe: 'instruksi',
          pm  : 'mindful',
          teks: '[Tepuk 1 kali — freeze]. Ucap: "Stop. Look here." [jeda 2 detik]. Ucap: "Quick survey. Thumbs up if you like it — thumbs close to your chest." → tunjuk kartu reading: "Reading?" → kelas thumbs up dekat dada / diam → tunjuk kartu singing: "Singing?" → tunjuk kartu dancing: "Dancing?" → tunjuk kartu playing football: "Playing football?" → tunjuk kartu swimming: "Swimming?". Ucap: "People like different hobbies." [lanjut]. Cue kritis: "Thumbs close to your chest" wajib — mengurangi exposure sosial. Tidak ada hitung jumlah, tidak ada komentar komparatif, tidak ada "siapa yang paling banyak". Diam diterima sama seperti thumbs up — tidak dikomentari. Kalimat penutup cukup "People like different hobbies." Maksimal 5 kartu.',
          mode: {
            mudah:     { bantuan: '' },
            normal:    { bantuan: '' },
            tantangan: { bantuan: '' },
          },
        },
      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,

      langkah: [
        {
          tipe: 'instruksi',
          pm  : 'meaningful',
          teks: 'Ucap: "Together — hobbies." Putaran 1: tempel kembali semua 8 kartu — tunjuk berurutan, lambat, kelas ucap nama hobi. Tahan 1 detik sebelum tunjuk kartu berikutnya — jangan biarkan kelas chant otomatis. Putaran 2: gesture reading — kelas ucap frame penuh: "I like reading because it is interesting!" → gesture dancing: "I like dancing because it is fun!" Cukup 2 hobi — tidak semua. Cue kritis: putaran 2 pakai discourse frame — bukan nama hobi saja. Tahan 1 detik per kartu di putaran 1 — retrieval harus genuine. Cukup 2 contoh di putaran 2 — tidak perlu semua 8.',
          mode: {
            mudah:     { bantuan: '' },
            normal:    { bantuan: '' },
            tantangan: { bantuan: '' },
          },
        },
        {
          tipe: 'respons_siswa',
          teks: 'Kelas ucap nama 8 hobi satu per satu di Putaran 1. Di Putaran 2: kelas ucap frame penuh "I like reading because it is interesting!" dan "I like dancing because it is fun!"',
        },
        {
          tipe: 'instruksi',
          pm  : 'meaningful',
          teks: 'Ucap: "Take your pencil." [tunggu — pastikan semua siswa sudah pegang pensil]. Guru gesture cycling — tahan posisi. Tunjuk papan. Ucap: "Last. Write one sentence." → "I like ___ because it is ___." → "Look at my gesture." [tahan gesture cycling]. Tunggu 45–60 detik. Ucap: "Show me." Cue kritis: pilih cycling — bukan reading atau singing yang paling mudah. Cycling mengharuskan siswa mengingat hobi gelombang 2 yang lebih menantang. Guru tahan gesture selama siswa menulis — tidak ganti gesture. Satu hobi, satu kalimat, satu reason.',
          mode: {
            mudah:     { bantuan: 'Terima: kalimat penuh, frasa parsial ("cycling, fun"), atau gambar hobi dengan label — tidak ada koreksi terbuka. Jika siswa belum selesai saat waktu habis: gesture hobi yang mereka suka + ucap kalimat lisan ke guru.' },
            normal:    { bantuan: 'Terima: kalimat penuh, frasa parsial ("cycling, fun"), atau gambar hobi dengan label — tidak ada koreksi terbuka. Jika siswa belum selesai saat waktu habis: gesture hobi yang mereka suka + ucap kalimat lisan ke guru.' },
            tantangan: { bantuan: 'Terima: kalimat penuh, frasa parsial ("cycling, fun"), atau gambar hobi dengan label — tidak ada koreksi terbuka. Jika siswa belum selesai saat waktu habis: gesture hobi yang mereka suka + ucap kalimat lisan ke guru.' },
          },
        },
        {
          tipe: 'instruksi',
          pm  : 'mindful',
          teks: 'Retrieval mikro: ucap "One more time — show me reading!" → kelas gesture reading + ucap "Reading!". Ucap: "Show me dancing!" → kelas gesture dancing + ucap "Dancing!". Tunjuk semua 8 kartu cepat — kelas ucap nama hobi bersama. Ucap: "Today — hobbies. Reading, drawing, singing, dancing, playing football, cooking, swimming, cycling. And we say: I like ___ because it is fun or interesting. Well done. See you next time."',
          mode: {
            mudah:     { bantuan: '' },
            normal:    { bantuan: '' },
            tantangan: { bantuan: '' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Today — hobbies. Reading, drawing, singing, dancing, playing football, cooking, swimming, cycling. And we say: I like ___ because it is fun or interesting. Well done. See you next time.',
        },
      ],
    },

  ],

};

export default TP_17;
