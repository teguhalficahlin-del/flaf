// ============================================================
// FLAF — Service Worker Produksi
// WAJIB update CACHE_VERSION setiap deploy
// ============================================================

const CACHE_VERSION  = 'flaf-v91';          // ← bump: label diferensiasi
const PDF_CACHE_NAME = 'flaf-pdf-v1';

const APP_SHELL = [
  './',
  './index.html',
  './app.js',
  './style.css',
  './manifest.json',
  // screens
  './screens/activation.js',
  './screens/kurikulum.js',
  './screens/dashboard.js',
  './screens/jejak.js',
  './screens/nilai.js',
  './screens/sesi-runtime.js',
  './screens/kurikulum.css',
  './screens/sesi-runtime.css',
  './screens/dashboard.css',
  './screens/nilai.css',

  // storage
  './storage/db.js',
  './storage/logger.js',
  './storage/export.js',
  './storage/jejak.js',
  './storage/nilai.js',
  './storage/presensi.js',
  './storage/siswa-history.js',

  // data
  './data/index.js',
  './data/fase-a.js',
  './data/fase-b.js',
  './data/fase-b-kluster-a.js',
  './data/fase-b-kluster-b.js',
  './data/fase-b-kluster-c.js',
  './data/fase-b-kluster-d.js',
  './data/fase-b-kluster-e.js',
  './data/fase-b-capstone.js',
  './data/printables.js',

  // docs/output-v5 — TP01–14 (kelas 1 & 2)
  './docs/output-v5/tp-01-v5.js',
  './docs/output-v5/tp-02-v5.js',
  './docs/output-v5/tp-03-v5.js',
  './docs/output-v5/tp-04-v5.js',
  './docs/output-v5/tp-05-v5.js',
  './docs/output-v5/tp-06-v5.js',
  './docs/output-v5/tp-07-v5.js',
  './docs/output-v5/tp-08-v5.js',
  './docs/output-v5/tp-09-v5.js',
  './docs/output-v5/tp-10-v5.js',
  './docs/output-v5/tp-11-v5.js',
  './docs/output-v5/tp-12-v5.js',
  './docs/output-v5/tp-13-v5.js',
  './docs/output-v5/tp-14-v5.js',

  // docs/sesi-m* — TP15–18 (kelas 2 lanjut)
  './docs/sesi-m10/tp-15-v5.js',
  './docs/sesi-m11/tp-16-v5.js',
  './docs/sesi-m12/tp-17-v5.js',
  './docs/sesi-m13/tp-18-v5.js',

  // printables images — TP01
  './assets/images/printables/tp01-good-morning.png',
  './assets/images/printables/tp01-good-afternoon.png',
  './assets/images/printables/tp01-good-evening.png',
  './assets/images/printables/tp01-good-night.png',
  './assets/images/printables/tp01-morning.png',
  './assets/images/printables/tp01-afternoon.png',
  './assets/images/printables/tp01-evening.png',
  './assets/images/printables/tp01-night.png',
  // printables images — TP02
  './assets/images/printables/tp02-name-tag.png',
  './assets/images/printables/tp02-introduce-boy.png',
  './assets/images/printables/tp02-introduce-girl.png',
  // printables images — TP03
  './assets/images/printables/tp03-listen.png',
  './assets/images/printables/tp03-look.png',
  './assets/images/printables/tp03-write.png',
  './assets/images/printables/tp03-open-book.png',
  './assets/images/printables/tp03-close-book.png',
  './assets/images/printables/tp03-draw.png',
  // printables images — TP04
  './assets/images/printables/tp04-num-01.png',
  './assets/images/printables/tp04-num-02.png',
  './assets/images/printables/tp04-num-03.png',
  './assets/images/printables/tp04-num-04.png',
  './assets/images/printables/tp04-num-05.png',
  './assets/images/printables/tp04-num-06.png',
  './assets/images/printables/tp04-num-07.png',
  './assets/images/printables/tp04-num-08.png',
  './assets/images/printables/tp04-num-09.png',
  './assets/images/printables/tp04-num-10.png',
  './assets/images/printables/tp04-num-11.png',
  './assets/images/printables/tp04-num-12.png',
  './assets/images/printables/tp04-num-13.png',
  './assets/images/printables/tp04-num-14.png',
  './assets/images/printables/tp04-num-15.png',
  './assets/images/printables/tp04-num-16.png',
  './assets/images/printables/tp04-num-17.png',
  './assets/images/printables/tp04-num-18.png',
  './assets/images/printables/tp04-num-19.png',
  './assets/images/printables/tp04-num-20.png',
  // printables images — TP05
  './assets/images/printables/tp05-red.png',
  './assets/images/printables/tp05-blue.png',
  './assets/images/printables/tp05-green.png',
  './assets/images/printables/tp05-yellow.png',
  './assets/images/printables/tp05-orange.png',
  './assets/images/printables/tp05-purple.png',
  './assets/images/printables/tp05-black.png',
  './assets/images/printables/tp05-white.png',
  './assets/images/printables/tp05-pink.png',
  // printables images — TP06
  './assets/images/printables/tp06-circle.png',
  './assets/images/printables/tp06-square.png',
  './assets/images/printables/tp06-triangle.png',
  './assets/images/printables/tp06-rectangle.png',
  './assets/images/printables/tp06-star.png',
  './assets/images/printables/tp06-heart.png',
  // printables images — TP07
  './assets/images/printables/tp07-mother.png',
  './assets/images/printables/tp07-father.png',
  './assets/images/printables/tp07-sister.png',
  './assets/images/printables/tp07-brother.png',
  './assets/images/printables/tp07-grandmother.png',
  './assets/images/printables/tp07-grandfather.png',
  // printables images — TP08
  './assets/images/printables/tp08-bedroom.png',
  './assets/images/printables/tp08-kitchen.png',
  './assets/images/printables/tp08-bathroom.png',
  './assets/images/printables/tp08-living-room.png',
  './assets/images/printables/tp08-garage.png',
  './assets/images/printables/tp08-floor-plan.png',
  // printables images — TP09
  './assets/images/printables/tp09-cat.png',
  './assets/images/printables/tp09-dog.png',
  './assets/images/printables/tp09-bird.png',
  './assets/images/printables/tp09-fish.png',
  './assets/images/printables/tp09-rabbit.png',
  './assets/images/printables/tp09-elephant.png',
  './assets/images/printables/tp09-lion.png',
  './assets/images/printables/tp09-monkey.png',
  './assets/images/printables/tp09-snake.png',
  './assets/images/printables/tp09-frog.png',
  // printables images — TP10
  './assets/images/printables/tp10-rice.png',
  './assets/images/printables/tp10-bread.png',
  './assets/images/printables/tp10-egg.png',
  './assets/images/printables/tp10-apple.png',
  './assets/images/printables/tp10-banana.png',
  './assets/images/printables/tp10-milk.png',
  './assets/images/printables/tp10-water.png',
  './assets/images/printables/tp10-juice.png',
  './assets/images/printables/tp10-noodles.png',
  './assets/images/printables/tp10-chicken.png',
  './assets/images/printables/tp10-plate-worksheet.png',
  // printables images — TP11
  './assets/images/printables/tp11-wake-up.png',
  './assets/images/printables/tp11-brush-teeth.png',
  './assets/images/printables/tp11-eat-breakfast.png',
  './assets/images/printables/tp11-go-to-school.png',
  './assets/images/printables/tp11-study.png',
  './assets/images/printables/tp11-play.png',
  './assets/images/printables/tp11-eat-dinner.png',
  './assets/images/printables/tp11-sleep.png',
  // printables images — TP12
  './assets/images/printables/tp12-head.png',
  './assets/images/printables/tp12-eyes.png',
  './assets/images/printables/tp12-ears.png',
  './assets/images/printables/tp12-nose.png',
  './assets/images/printables/tp12-mouth.png',
  './assets/images/printables/tp12-hands.png',
  './assets/images/printables/tp12-legs.png',
  './assets/images/printables/tp12-feet.png',
  // printables images — TP13
  './assets/images/printables/tp13-sunny.png',
  './assets/images/printables/tp13-cloudy.png',
  './assets/images/printables/tp13-rainy.png',
  './assets/images/printables/tp13-windy.png',
  './assets/images/printables/tp13-hot.png',
  './assets/images/printables/tp13-cold.png',
  // printables images — TP14
  './assets/images/printables/tp14-book.png',
  './assets/images/printables/tp14-pen.png',
  './assets/images/printables/tp14-pencil.png',
  './assets/images/printables/tp14-eraser.png',
  './assets/images/printables/tp14-ruler.png',
  './assets/images/printables/tp14-bag.png',
  // printables images — TP15
  './assets/images/printables/tp15-happy.png',
  './assets/images/printables/tp15-sad.png',
  './assets/images/printables/tp15-angry.png',
  './assets/images/printables/tp15-scared.png',
  './assets/images/printables/tp15-bored.png',
  './assets/images/printables/tp15-excited.png',
  './assets/images/printables/tp15-tired.png',
  // printables images — TP16
  './assets/images/printables/tp16-cover.png',
  './assets/images/printables/tp16-page-01.png',
  './assets/images/printables/tp16-page-02.png',
  './assets/images/printables/tp16-page-03.png',
  './assets/images/printables/tp16-page-04.png',
  './assets/images/printables/tp16-sequence-cards.png',
  // printables images — TP17
  './assets/images/printables/tp17-cooking.png',
  './assets/images/printables/tp17-cycling.png',
  './assets/images/printables/tp17-dancing.png',
  './assets/images/printables/tp17-drawing.png',
  './assets/images/printables/tp17-playing-football.png',
  './assets/images/printables/tp17-reading.png',
  './assets/images/printables/tp17-singing.png',
  './assets/images/printables/tp17-swimming.png',
  // printables images — TP18
  './assets/images/printables/tp18-poster-template.png',
  './assets/images/printables/tp18-reference-card.png',

  // printables images — TP-B01
  './assets/images/printables_fase_b/tp-b01-canteen.png',
  './assets/images/printables_fase_b/tp-b01-classroom.png',
  './assets/images/printables_fase_b/tp-b01-gate.png',
  './assets/images/printables_fase_b/tp-b01-hall.png',
  './assets/images/printables_fase_b/tp-b01-library.png',
  './assets/images/printables_fase_b/tp-b01-office.png',
  './assets/images/printables_fase_b/tp-b01-playground.png',
  './assets/images/printables_fase_b/tp-b01-school-map-worksheet.png',
  './assets/images/printables_fase_b/tp-b01-toilet.png',

  // printables images — TP-B02
  './assets/images/printables_fase_b/tp-b02-curly.png',
  './assets/images/printables_fase_b/tp-b02-describe-me-worksheet.png',
  './assets/images/printables_fase_b/tp-b02-funny.png',
  './assets/images/printables_fase_b/tp-b02-kind.png',
  './assets/images/printables_fase_b/tp-b02-long-hair.png',
  './assets/images/printables_fase_b/tp-b02-short-hair.png',
  './assets/images/printables_fase_b/tp-b02-short.png',
  './assets/images/printables_fase_b/tp-b02-smart.png',
  './assets/images/printables_fase_b/tp-b02-straight.png',
  './assets/images/printables_fase_b/tp-b02-tall.png',

  // printables images — TP-B03
  './assets/images/printables_fase_b/tp-b03-bank.png',
  './assets/images/printables_fase_b/tp-b03-behind.png',
  './assets/images/printables_fase_b/tp-b03-hospital.png',
  './assets/images/printables_fase_b/tp-b03-in-front-of.png',
  './assets/images/printables_fase_b/tp-b03-market.png',
  './assets/images/printables_fase_b/tp-b03-mosque.png',
  './assets/images/printables_fase_b/tp-b03-neighborhood-map-worksheet.png',
  './assets/images/printables_fase_b/tp-b03-next-to.png',
  './assets/images/printables_fase_b/tp-b03-park.png',

  // printables images — TP-B04
  './assets/images/printables_fase_b/tp-b04-sentence-frame-card.png',
  './assets/images/printables_fase_b/tp-b04-writing-worksheet.png',

  // printables images — TP-B05
  './assets/images/printables_fase_b/tp-b05-clock-worksheet.png',
  './assets/images/printables_fase_b/tp-b05-draw-the-clock-worksheet.png',
  './assets/images/printables_fase_b/tp-b05-half-past.png',
  './assets/images/printables_fase_b/tp-b05-oclock.png',
  './assets/images/printables_fase_b/tp-b05-quarter-past.png',
  './assets/images/printables_fase_b/tp-b05-quarter-to.png',
  './assets/images/printables_fase_b/tp-b05-time-reference-card.png',

  // printables images — TP-B06
  './assets/images/printables_fase_b/tp-b06-go-to-school.png',
  './assets/images/printables_fase_b/tp-b06-have-breakfast.png',
  './assets/images/printables_fase_b/tp-b06-have-lunch.png',
  './assets/images/printables_fase_b/tp-b06-play.png',
  './assets/images/printables_fase_b/tp-b06-schedule-worksheet.png',
  './assets/images/printables_fase_b/tp-b06-sleep.png',
  './assets/images/printables_fase_b/tp-b06-study.png',
  './assets/images/printables_fase_b/tp-b06-wake-up.png',

  // printables images — TP-B07
  './assets/images/printables_fase_b/tp-b07-calendar-worksheet.png',
  './assets/images/printables_fase_b/tp-b07-friday.png',
  './assets/images/printables_fase_b/tp-b07-monday.png',
  './assets/images/printables_fase_b/tp-b07-months-reference-card.png',
  './assets/images/printables_fase_b/tp-b07-saturday.png',
  './assets/images/printables_fase_b/tp-b07-sunday.png',
  './assets/images/printables_fase_b/tp-b07-thursday.png',
  './assets/images/printables_fase_b/tp-b07-tuesday.png',
  './assets/images/printables_fase_b/tp-b07-wednesday.png',

  // printables images — TP-B08
  './assets/images/printables_fase_b/tp-b08-weekly-schedule-worksheet.png',
  './assets/images/printables_fase_b/tp-b08-writing-guide-card.png',

  // printables images — TP-B09
  './assets/images/printables_fase_b/tp-b09-bird.png',
  './assets/images/printables_fase_b/tp-b09-butterfly.png',
  './assets/images/printables_fase_b/tp-b09-cat.png',
  './assets/images/printables_fase_b/tp-b09-dog.png',
  './assets/images/printables_fase_b/tp-b09-fish.png',
  './assets/images/printables_fase_b/tp-b09-flower.png',
  './assets/images/printables_fase_b/tp-b09-grass.png',
  './assets/images/printables_fase_b/tp-b09-habitat-worksheet.png',
  './assets/images/printables_fase_b/tp-b09-leaf.png',
  './assets/images/printables_fase_b/tp-b09-tree.png',

  // printables images — TP-B10
  './assets/images/printables_fase_b/tp-b10-cloudy.png',
  './assets/images/printables_fase_b/tp-b10-hat.png',
  './assets/images/printables_fase_b/tp-b10-jacket.png',
  './assets/images/printables_fase_b/tp-b10-raincoat.png',
  './assets/images/printables_fase_b/tp-b10-rainy.png',
  './assets/images/printables_fase_b/tp-b10-sandals.png',
  './assets/images/printables_fase_b/tp-b10-shorts.png',
  './assets/images/printables_fase_b/tp-b10-sunny.png',
  './assets/images/printables_fase_b/tp-b10-umbrella.png',
  './assets/images/printables_fase_b/tp-b10-weather-outfit-worksheet.png',
  './assets/images/printables_fase_b/tp-b10-windy.png',

  // printables images — TP-B11
  './assets/images/printables_fase_b/tp-b11-brush-teeth.png',
  './assets/images/printables_fase_b/tp-b11-drink-water.png',
  './assets/images/printables_fase_b/tp-b11-eat-vegetables.png',
  './assets/images/printables_fase_b/tp-b11-exercise.png',
  './assets/images/printables_fase_b/tp-b11-healthy-habits-worksheet.png',
  './assets/images/printables_fase_b/tp-b11-sleep-early.png',
  './assets/images/printables_fase_b/tp-b11-wash-hands.png',

  // printables images — TP-B12
  './assets/images/printables_fase_b/tp-b12-chef.png',
  './assets/images/printables_fase_b/tp-b12-doctor.png',
  './assets/images/printables_fase_b/tp-b12-driver.png',
  './assets/images/printables_fase_b/tp-b12-farmer.png',
  './assets/images/printables_fase_b/tp-b12-firefighter.png',
  './assets/images/printables_fase_b/tp-b12-job-description-worksheet.png',
  './assets/images/printables_fase_b/tp-b12-nurse.png',
  './assets/images/printables_fase_b/tp-b12-police.png',
  './assets/images/printables_fase_b/tp-b12-teacher.png',

  // printables images — TP-B13
  './assets/images/printables_fase_b/tp-b13-gado-gado.png',
  './assets/images/printables_fase_b/tp-b13-my-favorite-food-worksheet.png',
  './assets/images/printables_fase_b/tp-b13-nasi-goreng.png',
  './assets/images/printables_fase_b/tp-b13-rendang.png',
  './assets/images/printables_fase_b/tp-b13-sate.png',
  './assets/images/printables_fase_b/tp-b13-soto.png',
  './assets/images/printables_fase_b/tp-b13-tempeh.png',

  // printables images — TP-B14
  './assets/images/printables_fase_b/tp-b14-birthday.png',
  './assets/images/printables_fase_b/tp-b14-christmas.png',
  './assets/images/printables_fase_b/tp-b14-eid.png',
  './assets/images/printables_fase_b/tp-b14-graduation.png',
  './assets/images/printables_fase_b/tp-b14-my-celebration-worksheet.png',
  './assets/images/printables_fase_b/tp-b14-nyepi.png',

  // printables images — TP-B15
  './assets/images/printables_fase_b/tp-b15-indonesia-poster-template.png',
  './assets/images/printables_fase_b/tp-b15-my-country-worksheet.png',
  './assets/images/printables_fase_b/tp-b15-sentence-starter-card.png',

  // printables images — TP-B16
  './assets/images/printables_fase_b/tp-b16-badminton.png',
  './assets/images/printables_fase_b/tp-b16-cycling.png',
  './assets/images/printables_fase_b/tp-b16-football.png',
  './assets/images/printables_fase_b/tp-b16-martial-arts.png',
  './assets/images/printables_fase_b/tp-b16-running.png',
  './assets/images/printables_fase_b/tp-b16-sports-survey-worksheet.png',
  './assets/images/printables_fase_b/tp-b16-swimming.png',

  // printables images — TP-B17
  './assets/images/printables_fase_b/tp-b17-crossroad.png',
  './assets/images/printables_fase_b/tp-b17-direction-phrase-card.png',
  './assets/images/printables_fase_b/tp-b17-directions-map-worksheet.png',
  './assets/images/printables_fase_b/tp-b17-go-straight.png',
  './assets/images/printables_fase_b/tp-b17-stop.png',
  './assets/images/printables_fase_b/tp-b17-traffic-light.png',
  './assets/images/printables_fase_b/tp-b17-turn-left.png',
  './assets/images/printables_fase_b/tp-b17-turn-right.png',

  // printables images — TP-B18
  './assets/images/printables_fase_b/tp-b18-ago.png',
  './assets/images/printables_fase_b/tp-b18-last-month.png',
  './assets/images/printables_fase_b/tp-b18-last-week.png',
  './assets/images/printables_fase_b/tp-b18-past-event-worksheet.png',
  './assets/images/printables_fase_b/tp-b18-this-morning.png',
  './assets/images/printables_fase_b/tp-b18-verb-past-tense-card.png',
  './assets/images/printables_fase_b/tp-b18-yesterday.png',

  // printables images — TP-B19
  './assets/images/printables_fase_b/tp-b19-budis-day-text.png',
  './assets/images/printables_fase_b/tp-b19-reading-comprehension-worksheet.png',
  './assets/images/printables_fase_b/tp-b19-sequence-cards.png',

  // printables images — TP-B20
  './assets/images/printables_fase_b/tp-b20-my-story-worksheet.png',
  './assets/images/printables_fase_b/tp-b20-story-frame-card.png',

  // printables images — TP-B21
  './assets/images/printables_fase_b/tp-b21-budis-week-table.png',
  './assets/images/printables_fase_b/tp-b21-stay-healthy-poster.png',

  // printables images — TP-B22
  './assets/images/printables_fase_b/tp-b22-planning-guide-card.png',
  './assets/images/printables_fase_b/tp-b22-project-poster-template.png',

  // modules
  './modules/pdf-handler.js',
  './modules/pdf-generator.js',

  // assets
  './icons/icon-192.png',
  './icons/icon-512.png',

  // secrets.js sengaja TIDAK masuk precache
  // karena berisi credentials Supabase — hanya dimuat saat runtime
];

const PDF_MANIFEST = [
  './pdf/Modul_Ajar_V3_TP01_Greetings_And_Farewells.docx',
  './pdf/Modul_Ajar_V3_TP02_Introducing_Myself.docx',
  './pdf/Modul_Ajar_V3_TP03_Classroom_Instructions.docx',
  './pdf/Modul_Ajar_V3_TP04_Numbers_1_20.docx',
  './pdf/Modul_Ajar_V3_TP05_Colours.docx',
  './pdf/Modul_Ajar_V3_TP06_Shapes.docx',
  './pdf/Modul_Ajar_V3_TP07_My_Family.docx',
  './pdf/Modul_Ajar_V3_TP08_My_House.docx',
  './pdf/Modul_Ajar_V3_TP09_Animals.docx',
  './pdf/Modul_Ajar_V3_TP10_Food_and_Drinks.docx',
  './pdf/Modul_Ajar_V3_TP11_Daily_Routines.docx',
  './pdf/Modul_Ajar_V3_TP12_Body_Parts.docx',
  './pdf/Modul_Ajar_V3_TP13_Weather_and_Seasons.docx',
  './pdf/Modul_Ajar_V3_TP14_In_the_Classroom.docx',
  './pdf/Modul_Ajar_V3_TP15_Feelings_and_Emotions.docx',
  './pdf/Modul_Ajar_V3_TP16_Simple_Story_Retelling.docx',
  './pdf/Modul_Ajar_V3_TP17_My_Hobbies.docx',
  './pdf/Modul_Ajar_V3_TP18_Integrative_Project_My_World.docx',
  './pdf/Soal_STS_Fase_A_Kelas_1_Ganjil.docx',
  './pdf/Soal_STS_Fase_A_Kelas_2_Ganjil.docx',
  './pdf/Soal_STS_Fase_A_Kelas_1_Genap.docx',
  './pdf/Soal_STS_Fase_A_Kelas_2_Genap.docx',
  './pdf/Soal_SAS_Fase_A_Kelas_1_Ganjil.docx',
  './pdf/Soal_SAS_Fase_A_Kelas_2_Ganjil.docx',
  './pdf/Soal_SAS_Fase_A_Kelas_1_Genap.docx',
  './pdf/Soal_SAS_Fase_A_Kelas_2_Genap.docx',
];

// Network-only: Supabase + CDN eksternal (jsPDF, dll)
// CDN di-exclude agar tidak cache-miss error saat offline —
// jsPDF hanya dipakai saat aktif download, bukan fungsi inti offline
const NETWORK_ONLY_PATTERNS = [
  /supabase\.co/,
  /\.supabase\./,
  /cdnjs\.cloudflare\.com/,   // ← jsPDF CDN
  /cdn\.jsdelivr\.net/,       // CDN lain yang mungkin dipakai
  /unpkg\.com/,
];

const FONT_PATTERNS = [
  /fonts\.googleapis\.com/,
  /fonts\.gstatic\.com/,
];

const PDF_PATTERN = /\/pdf\/.*\.docx$/i;
const MAX_PDF_VERSIONS = 2;

// ============================================================
// INSTALL
// ============================================================
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(async cache => {
      await cache.addAll(APP_SHELL);
      const test = await cache.match('./index.html');
      if (!test) {
        console.error('[SW] FATAL: index.html tidak masuk cache');
      }
    })
  );
  self.skipWaiting();
});

// ============================================================
// ACTIVATE
// ============================================================
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    for (const k of keys) {
      if (k !== CACHE_VERSION && k !== PDF_CACHE_NAME) {
        await caches.delete(k);
      }
    }
    await self.clients.claim();
    broadcastToClients({ type: 'SW_ACTIVATED', version: CACHE_VERSION });
  })());
});

// ============================================================
// FETCH — Routing
// ============================================================
self.addEventListener('fetch', event => {
  const { request } = event;

  if (
    request.method === 'GET' &&
    (
      request.mode === 'navigate' ||
      (request.headers.get('accept') || '').includes('text/html')
    )
  ) {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  const url = new URL(request.url);
  if (request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;

  // 1. Network-only: Supabase + CDN eksternal (termasuk jsPDF)
  if (NETWORK_ONLY_PATTERNS.some(p => p.test(request.url))) {
    event.respondWith(networkOnly(request));
    return;
  }

  // 2. Cache-first: Google Fonts
  if (FONT_PATTERNS.some(p => p.test(request.url))) {
    event.respondWith(cacheFirst(request, 'flaf-fonts'));
    return;
  }

  // 3. Cache-first: PDF
  if (PDF_PATTERN.test(url.pathname)) {
    event.respondWith(cacheFirstPDF(request));
    return;
  }

  // 4. Stale-while-revalidate: Data fase
  if (url.pathname.startsWith('/data/')) {
    event.respondWith(
      caches.open(CACHE_VERSION).then(async cache => {
        const cached = await cache.match(request);
        const fetchPromise = fetch(request).then(res => {
          if (res.ok) cache.put(request, res.clone());
          return res;
        }).catch(() => null);
        return cached || fetchPromise || new Response(
          JSON.stringify({ error: 'offline-data-missing', url: request.url }),
          { status: 503, headers: { 'Content-Type': 'application/json' } }
        );
      })
    );
    return;
  }

  // 5. Cache-first: semua resource lain (app shell)
  event.respondWith(cacheFirstAppShell(request));
});

// ============================================================
// STRATEGY: Network-only
// ============================================================
async function networkOnly(request) {
  try {
    return await fetch(request);
  } catch {
    return new Response(JSON.stringify({ error: 'offline', url: request.url }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// ============================================================
// STRATEGY: Cache-first (umum)
// ============================================================
async function cacheFirst(request, cacheName = CACHE_VERSION) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Offline — resource tidak tersedia', { status: 503 });
  }
}

// ============================================================
// STRATEGY: Cache-first untuk app shell
// ============================================================
async function cacheFirstAppShell(request) {
  const url = new URL(request.url);

  let cached =
    await caches.match(request) ||
    await caches.match(url.pathname) ||
    await caches.match(url.pathname.replace(/^\//, ''));

  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    if (request.mode === 'navigate') {
      const fallback = await caches.match('/index.html');
      if (fallback) return fallback;
    }
    return new Response('Offline — app tidak tersedia', { status: 503 });
  }
}

// ============================================================
// STRATEGY: Cache-first PDF
// ============================================================
async function cacheFirstPDF(request) {
  const pdfCache = await caches.open(PDF_CACHE_NAME);
  const cached   = await pdfCache.match(request);

  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      await pdfCache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response(
      JSON.stringify({ error: 'PDF tidak tersedia offline', url: request.url }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }
}



// ============================================================
// PRECACHE ALL PDF
// Payload per progress: { current, total, filename, status }
// Konsisten dengan yang dibaca app.js _onPDFPrecacheProgress
// ============================================================
async function precacheAllPDF() {
  const pdfCache = await caches.open(PDF_CACHE_NAME);
  const total    = PDF_MANIFEST.length;
  let processed  = 0;
  let failed     = 0;

  broadcastToClients({ type: 'PDF_PRECACHE_START', total, timestamp: Date.now() });

  for (let i = 0; i < PDF_MANIFEST.length; i++) {
    const pdfPath = PDF_MANIFEST[i];
    const current = i + 1;

    const existing = await pdfCache.match(pdfPath);
    if (existing) {
      processed++;
      broadcastToClients({
        type    : 'PDF_PRECACHE_PROGRESS',
        current,
        total,
        filename: pdfPath,
        status  : 'cached',
      });
      continue;
    }

    try {
      const response = await fetch(pdfPath);
      if (response.ok) {
        await pdfCache.put(pdfPath, response.clone());
        processed++;
        broadcastToClients({
          type    : 'PDF_PRECACHE_PROGRESS',
          current,
          total,
          filename: pdfPath,
          status  : 'downloaded',
        });
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (err) {
      failed++;
      console.warn(`[SW] PDF precache gagal TP${current}:`, err.message);
      broadcastToClients({
        type    : 'PDF_PRECACHE_PROGRESS',
        current,
        total,
        filename: pdfPath,
        status  : 'failed',
        error   : err.message,
      });
    }
  }

  broadcastToClients({
    type      : 'PDF_PRECACHE_DONE',
    total,
    failed,
    allSuccess: failed === 0,
    timestamp : Date.now(),
  });
}

// ============================================================
// GET PDF CACHE STATUS
// ============================================================
async function getPDFCacheStatus() {
  try {
    const pdfCache   = await caches.open(PDF_CACHE_NAME);
    const statusList = [];

    for (let i = 0; i < PDF_MANIFEST.length; i++) {
      const pdfPath = PDF_MANIFEST[i];
      const cached  = await pdfCache.match(pdfPath);
      statusList.push({ tpNum: i + 1, path: pdfPath, isCached: !!cached });
    }

    const cachedCount = statusList.filter(s => s.isCached).length;
    return {
      total        : PDF_MANIFEST.length,
      cachedCount,
      uncachedCount: PDF_MANIFEST.length - cachedCount,
      allCached    : cachedCount === PDF_MANIFEST.length,
      items        : statusList,
    };
  } catch (err) {
    return { error: err.message };
  }
}

// ============================================================
// HARD RESET
// ============================================================
async function handleHardReset() {
  try {
    const cacheKeys = await caches.keys();
    await Promise.all(cacheKeys.map(k => caches.delete(k)));
    await self.registration.unregister();
    broadcastToClients({ type: 'HARD_RESET_DONE' });
  } catch (err) {
    console.error('[SW] Hard Reset gagal:', err.message);
    broadcastToClients({ type: 'HARD_RESET_ERROR', message: err.message });
  }
}

// ============================================================
// NAVIGATION — Cache-first (bukan network-first)
// Untuk guru di lapangan dengan koneksi tidak stabil
// ============================================================
async function handleNavigationRequest(request) {
  const cache = await caches.open(CACHE_VERSION);

  // Cache-first: sajikan dari cache jika ada
  const cachedPage = await cache.match(request) || await cache.match('/index.html');
  if (cachedPage) {
    // Revalidate di background (non-blocking)
    fetch(request).then(res => {
      if (res && res.ok) cache.put(request, res.clone());
    }).catch(() => {});
    return cachedPage;
  }

  // Tidak ada di cache — coba network
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response(
      `<html>
        <head><title>Offline</title></head>
        <body style="font-family:sans-serif;padding:20px;background:#1A1A1A;color:#fff;">
          <h1>Offline</h1>
          <p>Aplikasi belum siap offline. Buka sekali saat online agar bisa diakses offline.</p>
        </body>
      </html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
}

// ============================================================
// MESSAGE HANDLER
// ============================================================
self.addEventListener('message', event => {
  const { type } = event.data || {};

  switch (type) {
    case 'PING':
      event.source?.postMessage({
        type       : 'PONG',
        version    : CACHE_VERSION,
        pdfCacheName: PDF_CACHE_NAME,
        timestamp  : Date.now(),
      });
      break;

    case 'HARD_RESET':
      event.waitUntil(handleHardReset());
      break;

    case 'SOFT_UPDATE':
      event.source?.postMessage({
        type   : 'SOFT_UPDATE_ACK',
        message: 'Soft Update dihandle oleh app layer',
      });
      break;

    case 'GET_VERSION':
      event.source?.postMessage({
        type        : 'VERSION_INFO',
        version     : CACHE_VERSION,
        pdfCacheName: PDF_CACHE_NAME,
      });
      break;

    case 'GET_CACHE_STATS':
      event.waitUntil(getCacheStats().then(stats => {
        event.source?.postMessage({ type: 'CACHE_STATS', stats });
      }));
      break;

    case 'PRECACHE_ALL_PDF':
      event.waitUntil(precacheAllPDF());
      break;

    case 'GET_PDF_CACHE_STATUS':
      event.waitUntil(getPDFCacheStatus().then(status => {
        event.source?.postMessage({ type: 'PDF_CACHE_STATUS', status });
      }));
      break;

    case 'CLEAR_PDF_CACHE':
      event.waitUntil(
        caches.delete(PDF_CACHE_NAME).then(deleted => {
          broadcastToClients({ type: 'PDF_CACHE_CLEARED', success: deleted });
        })
      );
      break;

    default:
      console.warn(`[SW] Message tidak dikenal: ${type}`);
  }
});

// ============================================================
// HELPER: Broadcast ke semua client
// ============================================================
async function broadcastToClients(message) {
  try {
    const allClients = await clients.matchAll({ includeUncontrolled: true });
    allClients.forEach(client => client.postMessage(message));
  } catch (err) {
    console.warn('[SW] Broadcast gagal:', err.message);
  }
}

// ============================================================
// HELPER: Cache stats
// ============================================================
async function getCacheStats() {
  try {
    const appCache = await caches.open(CACHE_VERSION);
    const appKeys  = await appCache.keys();
    const pdfCache = await caches.open(PDF_CACHE_NAME);
    const pdfKeys  = await pdfCache.keys();

    return {
      version     : CACHE_VERSION,
      pdfCacheName: PDF_CACHE_NAME,
      appShell: {
        files: appKeys.length,
        list : appKeys.map(req => new URL(req.url).pathname),
      },
      pdf: {
        files       : pdfKeys.length,
        totalManifest: PDF_MANIFEST.length,
        allCached   : pdfKeys.length >= PDF_MANIFEST.length,
        list        : pdfKeys.map(req => new URL(req.url).pathname),
      },
    };
  } catch (err) {
    return { error: err.message };
  }
}
