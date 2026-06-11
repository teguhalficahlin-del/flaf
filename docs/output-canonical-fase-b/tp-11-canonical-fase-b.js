const TP_B11 = {

  // METADATA
  id     : 'tp-b11',
  nomor  : 11,
  kelas  : 3,
  nama   : 'Healthy Habits',
  tema   : 'Mendeskripsikan kebiasaan sehat dan memberikan alasannya menggunakan kalimat sebab-akibat',
  kluster: 'C — Alam, Tubuh, dan Kesehatan',
  jenis  : 'Kompleks',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebutkan arti kata "healthy" dan "exercise" dan menggunakannya dalam konteks kebiasaan sehari-hari.',
    'Peserta didik dapat menggunakan kata "because" untuk memberikan alasan atas kebiasaan sehat yang mereka lakukan.',
    'Peserta didik dapat menulis minimal empat kebiasaan sehat menggunakan pola "I [kebiasaan] because [alasan]."',
  ],
  vocab     : ['head', 'eyes', 'hands', 'feet', 'rice', 'milk', 'water', 'apple', 'healthy', 'exercise', 'I eat... because...'],
  persiapan : [
    'Enam kartu kebiasaan, satu kebiasaan per kartu, disiapkan sebelum kelas dimulai, untuk Layar 7. Kartu 1: I eat an apple every day. Kartu 2: I drink milk in the morning. Kartu 3: I exercise for 30 minutes. Kartu 4: I sleep at nine o\'clock. Kartu 5: I brush my teeth twice a day. Kartu 6: I eat rice and vegetables.',
    'Lembar kerja siswa satu per siswa, berisi template kebiasaan sehat dengan baris I am healthy, I eat, I drink, I exercise, I sleep, dan One more habit, di meja guru sebelum dibagikan.',
    'Papan tulis dan spidol untuk menulis kata HEALTHY dan EXERCISE, scaffold I eat because, dan kalimat modeling di Layar 3, Layar 5, dan Layar 8.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi', tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-10 dan Chant Sehat', tujuan: 'Guru menghubungkan TP-10 dan menyalakan energi lewat chant sehat.' },
    { layar:  2, judul: 'Pembuka · Reactivation Body Parts dan Food', tujuan: 'Guru meninjau bagian tubuh dan makanan.' },
    { layar:  3, judul: 'Inti · Introduksi Healthy dan Exercise', tujuan: 'Guru memperkenalkan dua kosakata baru.' },
    { layar:  4, judul: 'Inti · Drill Kebiasaan Sehat dan Tidak Sehat', tujuan: 'Guru memimpin drill penilaian kebiasaan.' },
    { layar:  5, judul: 'Inti · Introduksi Because dan Modeling Sebab-Akibat', tujuan: 'Guru memperkenalkan because lewat kalimat sebab-akibat.' },
    { layar:  6, judul: 'Inti · Drill I Eat Because', tujuan: 'Guru memimpin drill kalimat beralasan.' },
    { layar:  7, judul: 'Inti · Reading Kartu Kebiasaan Inferensi', tujuan: 'Guru memandu siswa membaca kartu dan menyimpulkan alasannya.' },
    { layar:  8, judul: 'Inti · Modeling Kalimat Lengkap dan Baca Bersama', tujuan: 'Guru memodelkan struktur kebiasaan lengkap dan membacanya bersama.' },
    { layar:  9, judul: 'Inti · Pair Practice Kebiasaan Sehat Saya', tujuan: 'Guru memandu latihan bercerita kebiasaan berpasangan.' },
    { layar: 10, judul: 'Inti · Writing Individual Kebiasaan Sehatku', tujuan: 'Guru memandu siswa menulis kebiasaan sehat mereka.' },
    { layar: 11, judul: 'Inti · Berkeliling dan Review Tulisan', tujuan: 'Guru meninjau hasil tulisan dan menguatkan pola because.' },
    { layar: 12, judul: 'Penutup · Review dan Hapus Papan', tujuan: 'Guru mengonsolidasi kosakata dan pola lalu menghapus papan tulis.' },
    { layar: 13, judul: 'Penutup · Closure Emosional dan Teaser TP-12', tujuan: 'Guru menutup sesi dengan pertanyaan komitmen dan teaser TP-12.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Tunggu sampai semua siswa duduk dan tenang.
UCAP: "Good morning, everyone."
AKSI: Tunggu respons semua siswa.
UCAP: "Sit down, please."
UCAP: "Listen."
UCAP: "We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh: jeda 3 detik dalam diam, pandang bagian kelas yang paling ramai, lanjut hanya setelah mereka berhenti.',
    cue    : 'Jangan mulai Layar 1 sebelum minimal 80 persen siswa menatap ke depan.',
    darurat: null,
  },

  // SKENARIO
  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,
      langkah: [

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan dua kali untuk menarik perhatian.
UCAP: "Last time, we talked about weather and what we wear."
UCAP: "When it rains, what do we wear?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. We make decisions based on conditions."
AKSI: Jeda 1 detik.
UCAP: "Today, same idea. We make decisions for our health. I eat this because it's healthy. I exercise because it's good for my body."
👂 LISTEN FIRST
AKSI: Ucapkan chant dengan ritme ketukan meja.
UCAP: "Eat your vegetables, they're healthy, go!"
UCAP: "Drink your milk, it's good, go!"
UCAP: "Exercise every day, stay strong, go!"
UCAP: "Healthy habits, let's go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "Eat your vegetables, they're healthy, go!"
UCAP: "Drink your milk, it's good, go!"
UCAP: "Exercise every day, stay strong, go!"
UCAP: "Healthy habits, let's go!"`,
          bantuan     : 'Jika siswa tidak hafal chant di putaran pertama: tunjuk tangan ke mulut untuk eat, tunjuk gelas imajiner untuk drink, lakukan gerakan lari di tempat untuk exercise. Tiga gestur konkret.',
          cue         : 'Ucapkan jembatan ke TP-10 dengan penekanan pada "same idea" sebelum chant dimulai.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk kepala sendiri.
UCAP: "What is this?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk mata sendiri.
UCAP: "These?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tangan sendiri.
UCAP: "And these?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk kaki sendiri.
UCAP: "These?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Now, food. Name a healthy food."
AKSI: Tunjuk tiga sampai empat siswa.
AKSI: Tulis nama makanan yang disebut di papan tulis.
UCAP: "Apple, healthy or not healthy?"
AKSI: Tunggu respons semua siswa.
UCAP: "Rice?"
AKSI: Tunggu respons semua siswa.
UCAP: "Milk?"
AKSI: Tunggu respons semua siswa.
UCAP: "Candy, healthy?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Today, we talk about healthy habits. What we do to take care of our body."`,
          bantuan     : 'Jika kelas tidak menyebut makanan apa pun: tunjuk botol air minum atau kotak bekal siswa, ucapkan "Is this healthy?".',
          cue         : 'Pertahankan nama makanan yang ditulis di papan tulis sampai Layar 6 selesai.',
          darurat     : null,
          diferensiasi: null,
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,
      langkah: [

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
UCAP: "Two new words today. Listen."
UCAP: "Healthy."
AKSI: Ucapkan "healthy" perlahan per suku kata.
AKSI: Tulis "HEALTHY" di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Beri penjelasan bahwa "healthy" berarti sehat, baik untuk tubuh dan pikiran.
UCAP: "Apple, healthy. Milk, healthy. Sleep, healthy."
UCAP: "And exercise."
AKSI: Ucapkan "exercise" perlahan per suku kata.
AKSI: Tulis "EXERCISE" di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Beri penjelasan bahwa "exercise" berarti olahraga, menggerakkan tubuh seperti berlari, melompat, dan berenang.
AKSI: Lakukan gerakan lari di tempat selama 3 detik.
UCAP: "Exercise is healthy. Good for your legs, your heart, your whole body."
AKSI: Tunjuk kaki sendiri.
UCAP: "When you exercise, your legs move."
AKSI: Tunjuk lengan sendiri.
UCAP: "Your arms move."
AKSI: Tunjuk dada sendiri.
UCAP: "Your heart beats faster."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan "HEALTHY" di papan tulis.
UCAP: "Say it with me!"
UCAP: "Healthy."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "EXERCISE" di papan tulis.
UCAP: "Exercise."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa bingung dengan healthy dan exercise: beri analogi konkret, "healthy adalah kondisi sehat, exercise adalah cara mencapainya, olahraga". Dua kata satu kalimat cukup.',
          cue         : 'Kedua kata diperkenalkan dalam satu layar ini, tidak terpisah.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
UCAP: "Sleep eight hours, healthy or not healthy?"
AKSI: Tunggu respons semua siswa.
UCAP: "Eat vegetables every day?"
AKSI: Tunggu respons semua siswa.
UCAP: "Never exercise?"
AKSI: Tunggu respons semua siswa.
UCAP: "Drink water?"
AKSI: Tunggu respons semua siswa.
UCAP: "Eat candy for breakfast every day?"
AKSI: Tunggu respons semua siswa.
UCAP: "Brush your teeth every morning?"
AKSI: Tunggu respons semua siswa.
AKSI: Sebut tiga sampai empat kebiasaan lagi secara acak, bergantian antara healthy dan not healthy.
AKSI: Tunggu respons semua siswa setiap kali.
AKSI: Tunjuk satu siswa.
UCAP: "Give me one healthy habit. Something you do."
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Jika jawaban siswa belum berbentuk kalimat, ucapkan "I" dan ajak mereka melanjutkan dengan kegiatan dan "It's healthy."
AKSI: Ulangi pertanyaan individual untuk satu sampai dua siswa lain secara acak.`,
          bantuan     : 'Jika siswa menjawab "healthy" dan "not healthy" secara terbalik: jangan langsung koreksi. Tanyakan ke kelas "Do you agree?", biarkan kelas yang merespons.',
          cue         : null,
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima jawaban "healthy" atau "not healthy" tanpa kalimat penuh.',
            sudahBisa   : 'Minta satu kalimat, "Drinking water is healthy.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan volume suara.
AKSI: Jeda 2 detik.
👂 LISTEN FIRST
UCAP: "Now, I have a question. Why is an apple healthy?"
AKSI: Jeda 3 detik.
AKSI: Biarkan dua sampai tiga siswa menjawab dalam Bahasa apa pun.
UCAP: "Good question. It needs a good answer. We use because."
AKSI: Tulis "because" di papan tulis.
AKSI: Jeda 3 detik.
UCAP: "Listen. I eat an apple because it is healthy."
AKSI: Tulis "I eat an apple because it is healthy." di papan tulis.
AKSI: Tunjuk tulisan "because" di papan tulis.
AKSI: Tunjuk tulisan "it is healthy" di papan tulis.
AKSI: Beri penjelasan bahwa "because" berarti karena, memberi alasan atau jawaban atas pertanyaan mengapa.
AKSI: Tunjuk bagian pertama kalimat di papan tulis.
AKSI: Tunjuk bagian kedua kalimat di papan tulis.
UCAP: "Action, then reason."
UCAP: "I exercise because it is good for my body."
AKSI: Tulis "I exercise because it is good for my body." di papan tulis.
AKSI: Ucapkan "I drink milk because" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Jika semua siswa tidak merespons, ucapkan "Because it is healthy. Because it makes my bones strong." sebagai contoh.
AKSI: Tulis "I drink milk because it is healthy." di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan "I eat an apple because it is healthy." di papan tulis.
UCAP: "Say it with me!"
UCAP: "I eat an apple because it is healthy."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa hanya menjawab kata setelah "because" tanpa kalimat penuh: ucapkan seluruh kalimat dengan nada mengundang "I eat an apple because", tunggu kelas melengkapi.',
          cue         : 'Beri jeda penuh setelah pertanyaan "Why is an apple healthy?" sebelum mengajarkan because.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk salah satu makanan yang ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Ucapkan "I eat rice because" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Ucapkan "I drink water because" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Ucapkan "I exercise because" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk satu siswa.
AKSI: Ucapkan "I eat apples because" dan ajak siswa yang ditunjuk melengkapi kalimat.
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi pertanyaan individual untuk dua sampai tiga siswa lain secara acak.
AKSI: Sebut alasan, minta semua siswa menyebut tindakannya.
UCAP: "Because it is healthy and sweet, what do you eat?"
AKSI: Tunggu respons semua siswa.
UCAP: "Because it makes your bones strong, what do you drink?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika kelas mengulang "because it is healthy" untuk semua jawaban: terima dulu, lalu tunjukkan variasi "because it gives energy" dan "because it makes me strong". Tulis dua frasa ini di papan tulis sebagai opsi.',
          cue         : null,
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima kata setelah "because", "healthy" atau "good for my body", tanpa kalimat penuh.',
            sudahBisa   : 'Minta kalimat penuh dengan dua alasan, "I eat an apple because it is healthy and it is sweet.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan kartu kebiasaan, satu kartu per pasang siswa.
AKSI: Periksa tiap pasang siswa sudah memegang satu kartu.
AKSI: Berikan kartu tambahan jika ada pasang siswa yang belum mendapat kartu.
UCAP: "Read your card. Then answer this question: Why is this a healthy habit?"
UCAP: "Use because in your answer."
AKSI: Beri waktu dua menit untuk siswa berpikir dan berbicara pelan dengan partner.
AKSI: Tunjuk satu pasang siswa.
UCAP: "What is your habit? And why is it healthy?"
AKSI: Tunggu jawaban pasang yang ditunjuk.
AKSI: Tulis kalimat yang baru dibacakan pasang itu di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Ulangi langkah berbagi, menulis kalimat, dan baca bersama untuk dua sampai tiga pasang lain.`,
          bantuan     : 'Jika siswa tidak bisa menemukan alasan "because": tanya lebih spesifik, "Is sleeping at nine o\'clock healthy for your body? So why? Because your body needs?", biarkan siswa mengisi kata terakhir.',
          cue         : 'Siswa membaca kartu diam-diam sebelum berbagi. Urutan layar ini adalah baca, berpikir, lalu berbagi.',
          darurat     : 'Jika Layar 7 melewati 7 menit → potong jumlah pasang yang berbagi menjadi dua, langsung ke Layar 8.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Kumpulkan kartu kebiasaan dari semua pasang.
AKSI: Berdiri kembali di depan kelas.
UCAP: "Good reading and thinking. Now, let's put it all together."
AKSI: Tulis scaffold empat kalimat di papan tulis dengan baris berikut: "I am healthy because I ___.", "I eat ___ because ___.", "I exercise because ___.", "I sleep at ___ because my body needs rest.".
UCAP: "Listen. I will read my healthy habits."
UCAP: "I am healthy because I eat good food and exercise."
UCAP: "I eat rice and vegetables because they give me energy."
UCAP: "I exercise every morning because it makes my body strong."
UCAP: "I sleep at nine o'clock because my body needs rest."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat pertama scaffold di papan tulis.
UCAP: "Say it with me!"
AKSI: Tunjuk tiap kalimat satu per satu, tunggu semua siswa membaca bersama.
AKSI: Ulangi sekali, tunjuk tiap kalimat sambil semua siswa membaca sendiri.
UCAP: "Good. Now, you write your own healthy habits."`,
          bantuan     : 'Jika kelas membaca tidak sinkron: biarkan. Putaran kedua biasanya lebih baik. Yang penting setiap siswa membaca setidaknya sekali sebelum Layar 9.',
          cue         : 'Pertahankan scaffold empat kalimat di papan tulis sampai Layar 10 selesai.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Tell your partner two healthy habits. Use because."
UCAP: "Start with: I am healthy because I."
AKSI: Tanyakan siapa yang mau menjadi contoh.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "Tell me one healthy habit. Use because."
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Good. And one more, what else do you do?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Perfect. Now, your turn with your partner. You have four minutes."
AKSI: Berkeliling dan dengarkan tanpa menyela.`,
          bantuan     : 'Jika satu pasang tidak bisa memulai: tunjuk scaffold di papan tulis, tanyakan "What do you eat that is healthy?", setelah mereka menjawab arahkan "Now say it with because.".',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit, atau energi kelas rendah → lewati layar ini, langsung ke Layar 10.',
            'Jika pair practice menjadi gaduh dalam satu menit → ucapkan "Okay. Take your pencil. Let\'s write.", langsung ke Layar 10.',
          ],
          diferensiasi: {
            perluSupport: 'Terima satu kalimat dengan because, boleh memakai scaffold dari kartu Layar 7.',
            sudahBisa   : 'Minta ceritakan tiga kebiasaan dengan variasi because yang berbeda.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Okay. Take your pencil. Let's write."
AKSI: Jeda 3 detik.
AKSI: Bagikan lembar kerja, satu per siswa.
UCAP: "Write your real habits. Use because in every sentence."
UCAP: "Your food, your exercise, your sleep. Your real life."
👂 LISTEN FIRST
AKSI: Tulis "I am healthy because I eat vegetables and exercise every day." di papan tulis.
UCAP: "Watch me. I am healthy because I eat vegetables and exercise every day."
UCAP: "Now, your turn."
AKSI: Pantau penulisan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa tidak tahu nama makanan dalam Bahasa Inggris: tulis empat nama makanan cadangan di pojok papan tulis, spinach, tofu, fish, chicken, untuk dipilih.',
          cue         : 'Siswa boleh menulis makanan dalam Bahasa Indonesia selama struktur "I eat ___ because ___" terpenuhi.',
          darurat     : 'Jika waktu tersisa 8 menit atau kurang saat layar ini dimulai → minta siswa hanya mengisi tiga baris pertama, I am healthy, I eat, dan I drink, langsung ke Layar 12 tanpa melalui Layar 11.',
          diferensiasi: {
            perluSupport: 'Izinkan mengisi hanya empat baris pertama.',
            sudahBisa   : 'Setelah semua baris terisi, minta tambah satu kalimat dengan because tentang kebiasaan bebas.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua hasil tulisan siswa — satu yang menggunakan because dengan alasan menarik, satu yang memilih kebiasaan tidak umum.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good. Let's hear from two friends."
AKSI: Minta siswa pertama membacakan satu atau dua kalimat dari tulisannya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What was their habit?"
AKSI: Tunggu respons semua siswa.
UCAP: "And why? What was the reason?"
AKSI: Tunggu respons semua siswa.
AKSI: Tulis kalimat because yang dibacakan siswa pertama di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Minta siswa kedua membacakan satu atau dua kalimat dari tulisannya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What was their habit?"
AKSI: Tunggu respons semua siswa.
UCAP: "And why? What was the reason?"
AKSI: Tunggu respons semua siswa.
AKSI: Tulis kalimat because yang dibacakan siswa kedua di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa yang diminta membaca menolak: ucapkan "That\'s okay.", lalu tunjuk siswa lain tanpa komentar tambahan.',
          cue         : 'Pilih siswa yang berbeda dari peserta Layar 4 dan Layar 6.',
          darurat     : 'Jika waktu tersisa kurang dari 10 menit → lewati layar ini, langsung ke Layar 12.',
          diferensiasi: null,
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,
      langkah: [

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa menyimpan lembar kerja di dalam tas.
AKSI: Berdiri kembali di depan kelas.
UCAP: "Good work today. Let's remember."
AKSI: Tanyakan kata Inggris untuk "sehat".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan kata Inggris untuk "olahraga".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
UCAP: "How do we give a reason, one word?"
AKSI: Tunggu respons semua siswa.
UCAP: "Give me one complete sentence. I eat something, because, why."
AKSI: Tunggu respons semua siswa.
AKSI: Hapus tulisan "because it is healthy" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "because it is healthy".
AKSI: Hapus tulisan "I eat" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "I eat".
AKSI: Hapus tulisan "EXERCISE" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "exercise".
AKSI: Hapus tulisan "HEALTHY" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "healthy".`,
          bantuan     : null,
          cue         : 'Hapus "because" bersama alasannya, bukan kata "because" sendiri.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, I want to ask."
UCAP: "What is one healthy thing you will do today, after school?"
AKSI: Tunjuk satu sampai dua siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Jika jawaban siswa belum berbentuk kalimat, ucapkan "I will" dan ajak mereka melanjutkan dengan because.
AKSI: Jeda 3 detik.
UCAP: "Small habits. Every day. That's what makes us healthy."
UCAP: "Next time, we talk about people who help us stay healthy. Doctors. Nurses. And other helpers in our community."
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'Akhiri sesi dengan pertanyaan komitmen lalu ritual goodbye, bukan sekadar recap.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → biarkan siswa merapikan meja, jangan tambahkan aktivitas baru.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B11;
