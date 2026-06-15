# FLAF Fase D — TP Mapping

---

## Metadata

| Field            | Nilai                                         |
|------------------|-----------------------------------------------|
| Versi            | v1.0 — TP Mapping Lengkap (66/66 TP)          |
| Status           | FINAL — Siap untuk Schema JS dan Repository   |
| Tanggal Dibuat   | 14 Juni 2026                                  |
| Tanggal Selesai  | 14 Juni 2026                                  |
| Dokumen Induk    | FLAF Fase D Fondasi Pedagogis v1.0            |
| Dokumen Terkait  | FLAF Fase D Pattern Registry v1.0             |
| Disusun oleh     | Romo (pemilik proyek), Claude Chat, ChatGPT   |

---

## Catatan Versioning

| Versi | Tipe Perubahan | Status |
|-------|----------------|--------|
| v0.1  | Template resmi + Pilot Kelas 7 Interpersonal (4 TP) | ✅ Selesai |
| v0.2  | Kelas 7 selesai (24 TP) + TG-6A ditambahkan | ✅ Selesai |
| v0.3  | Kelas 8 selesai (24 TP) + TG-5A ditambahkan | ✅ Selesai |
| v1.0  | Kelas 9 selesai — TP Mapping lengkap (66 TP) + prinsip "Tiga Bentuk Integrasi" & "Kontinuitas Isu Lintas Cluster" | ✅ Selesai |

---

## Daftar Isi

1. Prinsip Konteks (GR-10)
2. Guardrail Pemilihan Topik (TG-1 s/d TG-7, TG-5A, TG-6A)
3. Struktur Entri
4. Format Title
5. TP Mapping — Kelas 7 ✅ SELESAI (24/24)
6. TP Mapping — Kelas 8 ✅ SELESAI (24/24)
7. TP Mapping — Kelas 9 ✅ SELESAI (18/18)

---

## 1. Prinsip Konteks (GR-10)

### One Pattern, One Context, Many Reuses

Pattern Registry menjawab **"bagaimana berkomunikasi"** —
struktur kalimat yang produktif dan lintas-topik.

TP Mapping menjawab **"dalam konteks apa pattern itu
dialami"** — topik dan situasi konkret untuk satu sesi
mengajar.

Setiap TP memiliki satu context yang sangat konkret agar
pembelajaran fokus, tetapi context tersebut bukan bagian
dari pattern dan dapat muncul kembali pada kelas
berikutnya dengan fungsi komunikasi yang lebih kompleks
(lihat TG-5 — Topic Spiral).

Dengan pemisahan ini, Pattern Registry tetap stabil (66
pattern), sementara TP Mapping dapat berkembang —
direvisi, diperluas, atau disesuaikan dengan konteks lokal
— tanpa mengubah fondasi pedagogis FLAF.

---

## 2. Guardrail Pemilihan Topik

### TG-1 — Topic ≠ Pattern

Pattern harus dapat diajarkan pada minimal 5 topik
berbeda. Topic yang dipilih untuk satu TP tidak boleh
menjadi satu-satunya konteks yang mungkin untuk pattern
tersebut.

### TG-2 — Topic harus dekat dengan kehidupan siswa SMP

Prioritas domain topik:

```
self · family · friends · school · community ·
digital life · hobbies · health · environment · future
```

### TG-3 — Topic harus observable

Topik konkret dan dapat diamati lebih baik daripada topik
abstrak.

✅ "school canteen" ❌ "global economy"

### TG-4 — Topic harus culture-neutral

Hindari: denominasi agama, partai politik, isu ideologis,
konflik sosial.

Boleh: holiday, traditional food, local market, school
festival, community service.

### TG-5 — Topic Spiral

Topik boleh kembali pada kelas yang lebih tinggi, tetapi
dengan fungsi komunikasi yang naik level.

Contoh:

```
Kelas 7 — Favorite Food
  ↓
Kelas 8 — Healthy Food Habits
  ↓
Kelas 9 — School Nutrition Program Review
```

Topik sama, fungsi komunikasi berubah.

### TG-5A — Exposition Skill Progression

Berbeda dengan Narrative (TG-6A) yang memerlukan satu
story universe untuk koherensi alur, genre Exposition
menggunakan TOPIK BERBEDA per TP untuk mengisolasi
sub-skill retoris (claim+example → multiple reasons →
counter-view → recommendation). Kontinuitas dijaga oleh
PATTERN (builds_on berurutan), bukan oleh topik.

Setiap TP Exposition memanfaatkan thread konvergensi dari
TP genre lain (biasanya Interpersonal) yang topiknya
sudah established di kelas yang sama — merealisasikan
TG-5 (Topic Spiral) dalam skala mikro: topik yang sama
naik level fungsi komunikatif dalam satu kelas (bukan
lintas kelas).

Hasil dari pendekatan ini: Kelas 9 (Argumentative
Communication, PAT-9-01 s/d PAT-9-03) dapat
mengintegrasikan MULTIPLE topik/skill dari berbagai TP
Exposition menjadi satu performa argumentatif utuh.

### TG-6 — Tidak ada domain berturut-turut

Tidak boleh lebih dari 2 TP berturut-turut memakai domain
topik yang sama. Harus diselingi domain lain.

### TG-6A — Narrative Continuity Exception

Dalam satu genre Narrative, maksimal 4 TP boleh berbagi
domain dan topic yang sama apabila membentuk satu alur
cerita utuh dan setiap TP merepresentasikan fungsi
naratif yang berbeda (orientasi → konflik → resolusi →
koda). Pengecualian ini berlaku karena satu cerita tidak
dapat dipecah menjadi topik-topik yang berbeda tanpa
merusak koherensi naratif.

### TG-7 — Diversitas domain per genre

Setiap genre minimal memakai 5 domain topik yang berbeda
agar tidak terasa repetitif.

---

## 3. Struktur Entri

Setiap TP dalam mapping menggunakan struktur berikut.

```
tp_id                  : [path file]
pattern_id             : [dari Pattern Registry]
title                  : [Topic]: [Communicative Function]
short_title            : [versi singkat untuk mobile]
grade                  : [7 / 8 / 9]
genre                  : [dari Genre Architecture]
cluster                : [dari Pattern Registry]
topic                  : [tema umum]
context                : [situasi konkret satu kalimat]
communicative_goal     : [tujuan komunikatif operasional]
vocabulary_domain      : [daftar domain kosakata]
input_anchor           : [sumber stimulus]
output_anchor          : [produk utama siswa]
prerequisite_patterns  : [pattern_id yang dibutuhkan]
reusable_in            : [pattern_id yang bisa memakai
                          ulang topik ini]
complexity_level       : [Acquire / Expand / Integrate]
notes                  : [catatan author, opsional]
```

---

## 4. Format Title

```
[Topic]: [Communicative Function]
```

Guru berpikir "hari ini saya mengajar apa" (topik), bukan
"pattern apa" (struktur). Title menggabungkan keduanya
agar guru langsung memahami konten DAN tujuan sesi.

Contoh: "Favorite Activities: Introducing Yourself"

---

## 5. TP Mapping — Kelas 7

*✅ 24/24 TP selesai.*

### Genre: Interpersonal (TP-01 s/d TP-04)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-01.js",
  pattern_id: "PAT-7-01",
  title: "Getting to Know Friends: Introducing Yourself",
  short_title: "Introducing Yourself",
  grade: 7,
  genre: "Interpersonal",
  cluster: "A",
  topic: "Personal Identity",
  context: "Students meet new classmates on the first day of school.",
  communicative_goal: "share basic personal information",
  vocabulary_domain: ["name", "age", "hobbies", "abilities"],
  input_anchor: "picture cards",
  output_anchor: "pair conversation",
  prerequisite_patterns: [],
  reusable_in: ["PAT-8-01"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-02.js",
  pattern_id: "PAT-7-02",
  title: "School Clubs: Asking About Preferences",
  short_title: "Asking Preferences",
  grade: 7,
  genre: "Interpersonal",
  cluster: "A",
  topic: "School Clubs",
  context: "Students ask classmates about interests before joining clubs.",
  communicative_goal: "ask and answer simple preference questions",
  vocabulary_domain: ["clubs", "sports", "music", "arts"],
  input_anchor: "club posters",
  output_anchor: "class survey",
  prerequisite_patterns: ["PAT-7-01"],
  reusable_in: ["PAT-8-02"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-03.js",
  pattern_id: "PAT-7-03",
  title: "Weekend Plans: Making Simple Invitations",
  short_title: "Making Invitations",
  grade: 7,
  genre: "Interpersonal",
  cluster: "B",
  topic: "Weekend Activities",
  context: "Friends plan an activity after school or on the weekend.",
  communicative_goal: "invite, accept, and refuse politely",
  vocabulary_domain: ["park", "library", "cycling", "games"],
  input_anchor: "activity pictures",
  output_anchor: "role play",
  prerequisite_patterns: ["PAT-7-01", "PAT-7-02"],
  reusable_in: ["PAT-8-03"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-04.js",
  pattern_id: "PAT-7-04",
  title: "Clean School: Sharing Simple Opinions",
  short_title: "Sharing Opinions",
  grade: 7,
  genre: "Interpersonal",
  cluster: "B",
  topic: "School Environment",
  context: "Students discuss ideas for keeping the classroom clean.",
  communicative_goal: "express and respond to simple opinions with reasons",
  vocabulary_domain: ["clean", "recycle", "teamwork", "rules"],
  input_anchor: "classroom photo",
  output_anchor: "small-group discussion",
  prerequisite_patterns: ["PAT-7-01", "PAT-7-02", "PAT-7-03"],
  reusable_in: ["PAT-8-01", "PAT-8-13", "PAT-9-01"],
  complexity_level: "Acquire"
}
```
---

### Genre: Descriptive (TP-05 s/d TP-08)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-05.js",
  pattern_id: "PAT-7-05",
  title: "My Pet: Describing Basic Characteristics",
  short_title: "Describing a Pet",
  grade: 7,
  genre: "Descriptive",
  cluster: "A",
  topic: "Pets",
  context: "Students introduce and describe their favorite pet or an animal from picture cards.",
  communicative_goal: "describe basic characteristics using simple adjectives and noun phrases",
  vocabulary_domain: ["animals", "colors", "size", "appearance"],
  input_anchor: "animal picture cards",
  output_anchor: "show and tell",
  prerequisite_patterns: ["PAT-7-01", "PAT-7-04"],
  reusable_in: ["PAT-8-05"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-06.js",
  pattern_id: "PAT-7-06",
  title: "Healthy Snacks: Comparing Characteristics",
  short_title: "Healthy Snacks",
  grade: 7,
  genre: "Descriptive",
  cluster: "A",
  topic: "Healthy Snacks",
  context: "Students describe different snacks using connected adjectives.",
  communicative_goal: "combine descriptive features with and/but",
  vocabulary_domain: ["food", "taste", "texture", "health"],
  input_anchor: "food photos",
  output_anchor: "pair description",
  prerequisite_patterns: ["PAT-7-05"],
  reusable_in: ["PAT-8-06"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-07.js",
  pattern_id: "PAT-7-07",
  title: "Neighborhood Park: Describing Places",
  short_title: "Neighborhood Park",
  grade: 7,
  genre: "Descriptive",
  cluster: "B",
  topic: "Neighborhood Park",
  context: "Students explore a simple map or picture and describe what exists in the park.",
  communicative_goal: "describe locations using there is/there are expressions",
  vocabulary_domain: ["park", "trees", "playground", "facilities"],
  input_anchor: "park map",
  output_anchor: "map description",
  prerequisite_patterns: ["PAT-7-05", "PAT-7-06"],
  reusable_in: ["PAT-8-05", "PAT-8-24"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-08.js",
  pattern_id: "PAT-7-08",
  title: "Amazing Insects: Describing Function",
  short_title: "Amazing Insects",
  grade: 7,
  genre: "Descriptive",
  cluster: "B",
  topic: "Insects Around Us",
  context: "Students observe pictures of common insects and describe their characteristics and simple functions.",
  communicative_goal: "connect characteristics with simple functions using for/to expressions",
  vocabulary_domain: ["insects", "body parts", "habitats", "functions"],
  input_anchor: "nature photo cards",
  output_anchor: "mini description card",
  prerequisite_patterns: ["PAT-7-05", "PAT-7-06", "PAT-7-07"],
  reusable_in: ["PAT-8-05", "PAT-8-07"],
  complexity_level: "Acquire"
}
```
---

### Genre: Procedure (TP-09 s/d TP-12)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-09.js",
  pattern_id: "PAT-7-09",
  title: "Morning Routine: Sequencing Daily Actions",
  short_title: "Morning Routine",
  grade: 7,
  genre: "Procedure",
  cluster: "A",
  topic: "Morning Routine",
  context: "Students arrange and describe simple daily activities before going to school.",
  communicative_goal: "sequence actions using first, then, and finally",
  vocabulary_domain: ["wake up", "breakfast", "school", "daily routine"],
  input_anchor: "picture sequence",
  output_anchor: "ordered oral retelling",
  prerequisite_patterns: ["PAT-7-08", "PAT-7-01", "PAT-7-04"],
  reusable_in: ["PAT-8-10"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-10.js",
  pattern_id: "PAT-7-10",
  title: "Cooking Together: Giving Simple Instructions",
  short_title: "Cooking Together",
  grade: 7,
  genre: "Procedure",
  cluster: "A",
  topic: "Simple Cooking",
  context: "Students guide a friend through preparing a simple snack using short action commands.",
  communicative_goal: "give action instructions with object and place/time information",
  vocabulary_domain: ["kitchen", "ingredients", "utensils", "actions"],
  input_anchor: "recipe picture cards",
  output_anchor: "pair instruction game",
  prerequisite_patterns: ["PAT-7-09", "PAT-7-06"],
  reusable_in: ["PAT-8-10", "PAT-9-08"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-11.js",
  pattern_id: "PAT-7-11",
  title: "Online Safety: Giving Rules and Tips",
  short_title: "Online Safety",
  grade: 7,
  genre: "Procedure",
  cluster: "B",
  topic: "Safe Internet Use",
  context: "Students create simple digital safety reminders for friends.",
  communicative_goal: "give rules, warnings, and helpful tips",
  vocabulary_domain: ["password", "account", "privacy", "internet"],
  input_anchor: "digital poster",
  output_anchor: "class safety poster",
  prerequisite_patterns: ["PAT-7-10", "PAT-7-04"],
  reusable_in: ["PAT-8-21", "PAT-8-23"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-12.js",
  pattern_id: "PAT-7-12",
  title: "Study Habits: Choosing Helpful Strategies",
  short_title: "Study Habits",
  grade: 7,
  genre: "Procedure",
  cluster: "B",
  topic: "Effective Study Habits",
  context: "Students discuss simple goals and choose appropriate tools or actions to study better.",
  communicative_goal: "connect goals with appropriate actions or tools",
  vocabulary_domain: ["study", "dictionary", "notes", "practice"],
  input_anchor: "study scenario cards",
  output_anchor: "goal-action matching dialogue",
  prerequisite_patterns: ["PAT-7-09", "PAT-7-10", "PAT-7-11"],
  reusable_in: ["PAT-8-09", "PAT-8-11", "PAT-9-14"],
  complexity_level: "Acquire"
}
```
---

### Genre: Recount (TP-13 s/d TP-16)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-13.js",
  pattern_id: "PAT-7-13",
  title: "Family Picnic: Recalling Past Events",
  short_title: "Family Picnic",
  grade: 7,
  genre: "Recount",
  cluster: "A",
  topic: "Family Picnic",
  context: "Students share a real family outing that happened last weekend.",
  communicative_goal: "introduce a past experience using simple time expressions",
  vocabulary_domain: ["family", "park", "weekend", "activities"],
  input_anchor: "photo sequence",
  output_anchor: "pair storytelling",
  prerequisite_patterns: ["PAT-7-09"],
  reusable_in: ["PAT-8-17"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-14.js",
  pattern_id: "PAT-7-14",
  title: "Sports Day: Connecting Past Events",
  short_title: "Sports Day",
  grade: 7,
  genre: "Recount",
  cluster: "A",
  topic: "School Sports Day",
  context: "Students retell a sequence of real activities during a school sports event.",
  communicative_goal: "connect past actions into a simple chronological recount",
  vocabulary_domain: ["sports", "games", "friends", "competition"],
  input_anchor: "event photo cards",
  output_anchor: "timeline retelling",
  prerequisite_patterns: ["PAT-7-13"],
  reusable_in: ["PAT-8-17", "PAT-8-18"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-15.js",
  pattern_id: "PAT-7-15",
  title: "My First Library Visit: Expressing Experience",
  short_title: "Library Visit",
  grade: 7,
  genre: "Recount",
  cluster: "B",
  topic: "Library Visit",
  context: "Students describe how they felt after a real visit to a library or reading corner.",
  communicative_goal: "express personal responses to a past experience with simple reasons",
  vocabulary_domain: ["books", "reading", "library", "feelings"],
  input_anchor: "experience photos",
  output_anchor: "experience sharing",
  prerequisite_patterns: ["PAT-7-14"],
  reusable_in: ["PAT-8-13", "PAT-9-04"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-16.js",
  pattern_id: "PAT-7-16",
  title: "Community Clean-Up: Reflecting on Helping Others",
  short_title: "Community Clean-Up",
  grade: 7,
  genre: "Recount",
  cluster: "B",
  topic: "Community Clean-Up Day",
  context: "Students recount a real community service activity and reflect on what they learned from working together.",
  communicative_goal: "close a recount by expressing personal learning and social value",
  vocabulary_domain: ["community", "teamwork", "cleanliness", "responsibility"],
  input_anchor: "community activity photos",
  output_anchor: "reflection circle",
  prerequisite_patterns: ["PAT-7-15"],
  reusable_in: ["PAT-8-13", "PAT-8-16", "PAT-9-01", "PAT-9-16"],
  complexity_level: "Acquire"
}
```
---

### Genre: Functional (TP-17 s/d TP-20)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-17.js",
  pattern_id: "PAT-7-17",
  title: "Class Chat: Writing Polite Messages",
  short_title: "Class Chat",
  grade: 7,
  genre: "Functional",
  cluster: "A",
  topic: "Class Group Messages",
  context: "Students write short polite messages for a class chat about borrowing or returning school items.",
  communicative_goal: "use polite requests and reminders in everyday messages",
  vocabulary_domain: ["chat", "friends", "books", "stationery"],
  input_anchor: "chat screenshot cards",
  output_anchor: "mini chat messages",
  prerequisite_patterns: ["PAT-7-11"],
  reusable_in: ["PAT-8-21", "PAT-9-07"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-18.js",
  pattern_id: "PAT-7-18",
  title: "Club Events: Reading Schedules",
  short_title: "Club Events",
  grade: 7,
  genre: "Functional",
  cluster: "A",
  topic: "School Club Schedule",
  context: "Students read and create simple schedules for different extracurricular activities.",
  communicative_goal: "share event information using time, date, and place expressions",
  vocabulary_domain: ["calendar", "club", "time", "location"],
  input_anchor: "event calendar",
  output_anchor: "schedule card",
  prerequisite_patterns: ["PAT-7-17"],
  reusable_in: ["PAT-8-21", "PAT-8-23"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-19.js",
  pattern_id: "PAT-7-19",
  title: "Library Membership: Completing Forms",
  short_title: "Library Form",
  grade: 7,
  genre: "Functional",
  cluster: "B",
  topic: "Library Membership",
  context: "Students complete and exchange simple membership forms before borrowing books.",
  communicative_goal: "fill in and understand basic personal information forms",
  vocabulary_domain: ["name", "address", "class", "membership"],
  input_anchor: "membership form",
  output_anchor: "completed form",
  prerequisite_patterns: ["PAT-7-18"],
  reusable_in: ["PAT-8-21", "PAT-8-24"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-20.js",
  pattern_id: "PAT-7-20",
  title: "The Old Storage Room: Reading Mysterious Notices",
  short_title: "Old Storage Room",
  grade: 7,
  genre: "Functional",
  cluster: "B",
  topic: "Mysterious School Notices",
  context: "Students observe warning signs and public notices placed near an old unused room and imagine why they exist.",
  communicative_goal: "interpret public notices and infer simple contextual meaning",
  vocabulary_domain: ["notice", "warning", "door", "secret"],
  input_anchor: "notice and sign cards",
  output_anchor: "notice interpretation",
  prerequisite_patterns: ["PAT-7-19"],
  reusable_in: ["PAT-8-17", "PAT-8-18", "PAT-8-20"],
  complexity_level: "Acquire"
}
```
---

### Genre: Narrative (TP-21 s/d TP-24)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-21.js",
  pattern_id: "PAT-7-21",
  title: "The Lost Firefly: Building Story World",
  short_title: "The Lost Firefly",
  grade: 7,
  genre: "Narrative",
  cluster: "A",
  topic: "The Lost Firefly",
  context: "Students meet a small firefly who lives near a quiet pond and dreams of finding bright friends.",
  communicative_goal: "introduce characters and setting in a simple story world",
  vocabulary_domain: ["animals", "forest", "pond", "friends"],
  input_anchor: "story picture cards",
  output_anchor: "story opening",
  prerequisite_patterns: ["PAT-7-05"],
  reusable_in: ["PAT-8-17"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-22.js",
  pattern_id: "PAT-7-22",
  title: "The Lost Firefly: Creating Conflict",
  short_title: "Firefly Conflict",
  grade: 7,
  genre: "Narrative",
  cluster: "A",
  topic: "The Lost Firefly",
  context: "The little firefly loses its way when the forest becomes dark and suddenly cannot find its friends.",
  communicative_goal: "develop a simple conflict using sequence and contrast",
  vocabulary_domain: ["night", "forest", "lost", "light"],
  input_anchor: "story sequence cards",
  output_anchor: "story continuation",
  prerequisite_patterns: ["PAT-7-21"],
  reusable_in: ["PAT-8-18"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-23.js",
  pattern_id: "PAT-7-23",
  title: "The Lost Firefly: Solving the Story",
  short_title: "Firefly Solution",
  grade: 7,
  genre: "Narrative",
  cluster: "B",
  topic: "The Lost Firefly",
  context: "Other small animals work together to help the firefly return home before sunrise.",
  communicative_goal: "connect events to build a simple resolution",
  vocabulary_domain: ["help", "rabbit", "bird", "home"],
  input_anchor: "story board",
  output_anchor: "group storytelling",
  prerequisite_patterns: ["PAT-7-22"],
  reusable_in: ["PAT-8-19", "PAT-9-17"],
  complexity_level: "Acquire"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-7/tp-24.js",
  pattern_id: "PAT-7-24",
  title: "The Lost Firefly: Reflecting on the Story",
  short_title: "Firefly Reflection",
  grade: 7,
  genre: "Narrative",
  cluster: "B",
  topic: "The Lost Firefly",
  context: "Students discuss the ending of the story and the lesson about helping others and asking for help.",
  communicative_goal: "close a narrative by expressing the lesson learned and preparing personal responses",
  vocabulary_domain: ["kindness", "friendship", "help", "choices"],
  input_anchor: "ending illustration",
  output_anchor: "story reflection discussion",
  prerequisite_patterns: ["PAT-7-23"],
  reusable_in: ["PAT-8-01", "PAT-8-13", "PAT-9-01", "PAT-9-16"],
  complexity_level: "Acquire"
}
```
---

---

## 6. TP Mapping — Kelas 8

*✅ 24/24 TP selesai.*

### Genre: Interpersonal (TP-01 s/d TP-04)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-01.js",
  pattern_id: "PAT-8-01",
  title: "Phone-Free Break Time: Exchanging Views",
  short_title: "Phone-Free Break",
  grade: 8,
  genre: "Interpersonal",
  cluster: "A",
  topic: "Phone-Free Break Time",
  context: "Students discuss whether break time should be used without mobile phones and respond to different opinions.",
  communicative_goal: "exchange and respond to opinions with reasons and contrasting ideas",
  vocabulary_domain: ["phones", "break time", "friends", "communication"],
  input_anchor: "discussion cards",
  output_anchor: "paired opinion exchange",
  prerequisite_patterns: ["PAT-7-04", "PAT-7-24"],
  reusable_in: ["PAT-8-13", "PAT-9-01"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-02.js",
  pattern_id: "PAT-8-02",
  title: "After-School Activities: Expressing Preferences",
  short_title: "After-School Choices",
  grade: 8,
  genre: "Interpersonal",
  cluster: "A",
  topic: "After-School Activities",
  context: "Students compare different activities and explain which one they prefer and why.",
  communicative_goal: "express preferences and compare alternatives with reasons",
  vocabulary_domain: ["sports", "music", "coding", "volunteering"],
  input_anchor: "activity cards",
  output_anchor: "preference interview",
  prerequisite_patterns: ["PAT-8-01"],
  reusable_in: ["PAT-8-14", "PAT-9-03"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-03.js",
  pattern_id: "PAT-8-03",
  title: "Class Charity Project: Negotiating Plans",
  short_title: "Charity Project",
  grade: 8,
  genre: "Interpersonal",
  cluster: "B",
  topic: "Class Charity Project",
  context: "Students discuss different ideas for a class charity activity and negotiate a shared plan.",
  communicative_goal: "propose, modify, and negotiate ideas collaboratively",
  vocabulary_domain: ["charity", "fundraising", "community", "planning"],
  input_anchor: "planning board",
  output_anchor: "group negotiation",
  prerequisite_patterns: ["PAT-8-02"],
  reusable_in: ["PAT-8-16", "PAT-9-15"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-04.js",
  pattern_id: "PAT-8-04",
  title: "Healthy School Canteen: Building Shared Decisions",
  short_title: "Healthy Canteen",
  grade: 8,
  genre: "Interpersonal",
  cluster: "B",
  topic: "Healthy School Canteen",
  context: "Students evaluate several canteen improvement ideas and work toward a shared recommendation for healthier food choices.",
  communicative_goal: "build agreement and formulate shared decisions supported by reasons",
  vocabulary_domain: ["canteen", "healthy food", "choices", "school policy"],
  input_anchor: "proposal cards",
  output_anchor: "consensus discussion",
  prerequisite_patterns: ["PAT-8-03"],
  reusable_in: ["PAT-8-13", "PAT-8-16", "PAT-9-01"],
  complexity_level: "Expand"
}
```
---

### Genre: Report (TP-05 s/d TP-08)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-05.js",
  pattern_id: "PAT-8-05",
  title: "Butterflies Around Us: Classifying Living Things",
  short_title: "Butterflies",
  grade: 8,
  genre: "Report",
  cluster: "A",
  topic: "Butterflies Around Us",
  context: "Students observe photographs of butterflies and classify them as insects while describing their common characteristics.",
  communicative_goal: "classify living things using kind, use, and usual characteristics",
  vocabulary_domain: ["butterflies", "insects", "wings", "habitat"],
  input_anchor: "nature photo cards",
  output_anchor: "classification card",
  prerequisite_patterns: ["PAT-7-08"],
  reusable_in: ["PAT-8-09", "PAT-9-10"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-06.js",
  pattern_id: "PAT-8-06",
  title: "City Trees: Describing General Characteristics",
  short_title: "City Trees",
  grade: 8,
  genre: "Report",
  cluster: "A",
  topic: "City Trees",
  context: "Students compare several common trees found in parks and streets and identify their shared characteristics.",
  communicative_goal: "describe general characteristics using most, some, and usually",
  vocabulary_domain: ["trees", "leaves", "shade", "parks"],
  input_anchor: "comparison chart",
  output_anchor: "group report",
  prerequisite_patterns: ["PAT-8-05"],
  reusable_in: ["PAT-8-12", "PAT-9-10"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-07.js",
  pattern_id: "PAT-8-07",
  title: "Sports Equipment: Explaining Features and Functions",
  short_title: "Sports Equipment",
  grade: 8,
  genre: "Report",
  cluster: "B",
  topic: "Sports Equipment",
  context: "Students examine everyday sports equipment and explain how different features support their functions.",
  communicative_goal: "connect physical features with practical functions",
  vocabulary_domain: ["ball", "helmet", "racket", "protection"],
  input_anchor: "real objects",
  output_anchor: "feature-function presentation",
  prerequisite_patterns: ["PAT-8-06"],
  reusable_in: ["PAT-8-09", "PAT-9-10"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-08.js",
  pattern_id: "PAT-8-08",
  title: "Exercise and Heart Rate: Connecting Facts",
  short_title: "Heart Rate",
  grade: 8,
  genre: "Report",
  cluster: "B",
  topic: "Exercise and Heart Rate",
  context: "Students observe simple data and pictures showing how the body responds during physical activity and discuss factual relationships.",
  communicative_goal: "connect observable facts with simple causes and effects",
  vocabulary_domain: ["exercise", "heart", "body", "energy"],
  input_anchor: "data chart",
  output_anchor: "fact explanation card",
  prerequisite_patterns: ["PAT-8-07"],
  reusable_in: ["PAT-8-09", "PAT-8-11", "PAT-9-13"],
  complexity_level: "Expand"
}
```
---

### Genre: Explanation (TP-09 s/d TP-12)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-09.js",
  pattern_id: "PAT-8-09",
  title: "Exercise and Heart Rate: Understanding Cause and Effect",
  short_title: "Heart Rate Process",
  grade: 8,
  genre: "Explanation",
  cluster: "A",
  topic: "Exercise and Heart Rate",
  context: "Students observe simple activity data and explain why the heart beats faster during physical exercise.",
  communicative_goal: "explain natural cause-and-effect relationships using when...because... patterns",
  vocabulary_domain: ["exercise", "heart", "oxygen", "body"],
  input_anchor: "activity infographic",
  output_anchor: "cause-effect explanation",
  prerequisite_patterns: ["PAT-8-08"],
  reusable_in: ["PAT-8-12", "PAT-9-13"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-10.js",
  pattern_id: "PAT-8-10",
  title: "Online Shopping: Explaining a Digital Process",
  short_title: "Online Shopping",
  grade: 8,
  genre: "Explanation",
  cluster: "A",
  topic: "Online Shopping Process",
  context: "Students explain the sequence of buying an item through an online marketplace from choosing a product to receiving it.",
  communicative_goal: "describe a multi-step process using clear sequencing language",
  vocabulary_domain: ["online store", "payment", "delivery", "order"],
  input_anchor: "process diagram",
  output_anchor: "process explanation",
  prerequisite_patterns: ["PAT-8-09"],
  reusable_in: ["PAT-9-08", "PAT-9-10"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-11.js",
  pattern_id: "PAT-8-11",
  title: "Saving Money: Connecting Conditions and Results",
  short_title: "Saving Money",
  grade: 8,
  genre: "Explanation",
  cluster: "B",
  topic: "Personal Saving Habits",
  context: "Students explore how everyday financial choices lead to different outcomes through simple conditional relationships.",
  communicative_goal: "connect conditions with logical results using if...so... patterns",
  vocabulary_domain: ["money", "saving", "goal", "budget"],
  input_anchor: "scenario cards",
  output_anchor: "condition-result chart",
  prerequisite_patterns: ["PAT-8-10"],
  reusable_in: ["PAT-9-14", "PAT-9-15"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-12.js",
  pattern_id: "PAT-8-12",
  title: "Trees and Clean Air: Explaining Environmental Systems",
  short_title: "Trees and Clean Air",
  grade: 8,
  genre: "Explanation",
  cluster: "B",
  topic: "Trees and Air Quality",
  context: "Students connect information about trees and air quality to explain how an environmental system works and why it benefits people.",
  communicative_goal: "integrate process, cause, and result into a coherent system explanation",
  vocabulary_domain: ["trees", "carbon dioxide", "oxygen", "air quality"],
  input_anchor: "environment infographic",
  output_anchor: "system explanation poster",
  prerequisite_patterns: ["PAT-8-11", "PAT-8-06"],
  reusable_in: ["PAT-8-13", "PAT-9-10", "PAT-9-13"],
  complexity_level: "Expand"
}
```
---

### Genre: Exposition (TP-13 s/d TP-16)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-13.js",
  pattern_id: "PAT-8-13",
  title: "Healthy School Canteen: Stating a Position",
  short_title: "Healthy Canteen",
  grade: 8,
  genre: "Exposition",
  cluster: "A",
  topic: "Healthy School Canteen",
  context: "Students express a position about improving the school canteen and support it with a simple example.",
  communicative_goal: "state a position with a reason and one supporting example",
  vocabulary_domain: ["canteen", "healthy food", "students", "choices"],
  input_anchor: "photo comparison",
  output_anchor: "opinion card",
  prerequisite_patterns: ["PAT-8-04", "PAT-8-12"],
  reusable_in: ["PAT-9-01", "PAT-9-04"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-14.js",
  pattern_id: "PAT-8-14",
  title: "After-School Clubs: Building Arguments",
  short_title: "School Clubs",
  grade: 8,
  genre: "Exposition",
  cluster: "A",
  topic: "After-School Clubs",
  context: "Students give multiple reasons for joining an extracurricular club.",
  communicative_goal: "support one position using more than one reason",
  vocabulary_domain: ["clubs", "skills", "friends", "experience"],
  input_anchor: "student profiles",
  output_anchor: "reason map",
  prerequisite_patterns: ["PAT-8-13"],
  reusable_in: ["PAT-9-01", "PAT-9-03"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-15.js",
  pattern_id: "PAT-8-15",
  title: "Homework Policy: Responding to Different Views",
  short_title: "Homework Debate",
  grade: 8,
  genre: "Exposition",
  cluster: "B",
  topic: "Homework Policy",
  context: "Students compare different opinions about homework and respond with their own position.",
  communicative_goal: "acknowledge another viewpoint before presenting a different opinion",
  vocabulary_domain: ["homework", "study", "time", "learning"],
  input_anchor: "opinion cards",
  output_anchor: "paired mini debate",
  prerequisite_patterns: ["PAT-8-14"],
  reusable_in: ["PAT-9-02", "PAT-9-03"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-16.js",
  pattern_id: "PAT-8-16",
  title: "Class Charity Project: Making Recommendations",
  short_title: "Charity Project",
  grade: 8,
  genre: "Exposition",
  cluster: "B",
  topic: "Class Charity Project",
  context: "Students evaluate several community service ideas and recommend one with supporting reasons.",
  communicative_goal: "make a recommendation based on reasons and shared benefits",
  vocabulary_domain: ["charity", "community", "volunteers", "donation"],
  input_anchor: "project proposal cards",
  output_anchor: "recommendation presentation",
  prerequisite_patterns: ["PAT-8-15", "PAT-8-03"],
  reusable_in: ["PAT-9-01", "PAT-9-15", "PAT-9-16"],
  complexity_level: "Expand"
}
```
---

### Genre: Narrative (TP-17 s/d TP-20)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-17.js",
  pattern_id: "PAT-8-17",
  title: "The Old Storage Room: Building a Rich Story World",
  short_title: "Old Storage Room",
  grade: 8,
  genre: "Narrative",
  cluster: "A",
  topic: "The Old Storage Room Mystery",
  context: "Students enter the story of an old locked storage room that everyone at school believes hides a forgotten secret.",
  communicative_goal: "build a richer story world with characters, setting, and shared beliefs",
  vocabulary_domain: ["storage room", "school", "secret", "old objects"],
  input_anchor: "story illustration",
  output_anchor: "story opening",
  prerequisite_patterns: ["PAT-7-24", "PAT-7-20"],
  reusable_in: ["PAT-9-05"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-18.js",
  pattern_id: "PAT-8-18",
  title: "The Old Storage Room: Developing the Mystery",
  short_title: "Storage Room Mystery",
  grade: 8,
  genre: "Narrative",
  cluster: "A",
  topic: "The Old Storage Room Mystery",
  context: "Students continue the story as unexpected sounds and a hidden key create new problems for the characters.",
  communicative_goal: "develop a narrative conflict through connected events and unexpected changes",
  vocabulary_domain: ["key", "door", "footsteps", "flashlight"],
  input_anchor: "story sequence cards",
  output_anchor: "conflict retelling",
  prerequisite_patterns: ["PAT-8-17"],
  reusable_in: ["PAT-9-05", "PAT-9-17"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-19.js",
  pattern_id: "PAT-8-19",
  title: "The Old Storage Room: Character Dialogue",
  short_title: "Storage Room Dialogue",
  grade: 8,
  genre: "Narrative",
  cluster: "B",
  topic: "The Old Storage Room Mystery",
  context: "Students bring the story to life by creating conversations as friends decide whether to open the mysterious room.",
  communicative_goal: "express character responses and advance the story through dialogue",
  vocabulary_domain: ["friends", "voice", "question", "decision"],
  input_anchor: "dialogue comic",
  output_anchor: "role play",
  prerequisite_patterns: ["PAT-8-18"],
  reusable_in: ["PAT-9-07", "PAT-9-09"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-20.js",
  pattern_id: "PAT-8-20",
  title: "The Old Storage Room: Resolution and Reflection",
  short_title: "Storage Room Ending",
  grade: 8,
  genre: "Narrative",
  cluster: "B",
  topic: "The Old Storage Room Mystery",
  context: "Students discover that the room contains old letters and school memories, then decide to write a message to share their discovery with others.",
  communicative_goal: "resolve a narrative, express its message, and create a natural transition to written communication",
  vocabulary_domain: ["letters", "memories", "message", "discovery"],
  input_anchor: "ending storyboard",
  output_anchor: "story reflection and message draft",
  prerequisite_patterns: ["PAT-8-19"],
  reusable_in: ["PAT-8-21", "PAT-9-16"],
  complexity_level: "Expand"
}
```
---

### Genre: Functional (TP-21 s/d TP-24)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-21.js",
  pattern_id: "PAT-8-21",
  title: "The Old Storage Room: Sharing the Discovery",
  short_title: "Storage Room Message",
  grade: 8,
  genre: "Functional",
  cluster: "A",
  topic: "Writing a Digital Message about a School Discovery",
  context: "After finding old letters in the storage room, students write an email/message to share the discovery with teachers and classmates.",
  communicative_goal: "write a structured digital message with subject, greeting, purpose, and closing",
  vocabulary_domain: ["email", "discovery", "school", "message"],
  input_anchor: "story reflection and message draft",
  output_anchor: "digital message",
  prerequisite_patterns: ["PAT-8-20"],
  reusable_in: ["PAT-9-07", "PAT-9-10"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-22.js",
  pattern_id: "PAT-8-22",
  title: "School Learning App: Creating Guided Instructions",
  short_title: "Learning App Guide",
  grade: 8,
  genre: "Functional",
  cluster: "A",
  topic: "Using a School Learning Application",
  context: "Students create simple guided instructions to help new users access assignments and submit their work.",
  communicative_goal: "write clear guided instructions with ordered actions and reminders",
  vocabulary_domain: ["application", "login", "assignment", "submit"],
  input_anchor: "app interface cards",
  output_anchor: "instruction guide",
  prerequisite_patterns: ["PAT-8-21"],
  reusable_in: ["PAT-9-08", "PAT-9-10"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-23.js",
  pattern_id: "PAT-8-23",
  title: "After-School Club Festival: Public Communication",
  short_title: "Club Festival",
  grade: 8,
  genre: "Functional",
  cluster: "B",
  topic: "After-School Club Festival",
  context: "Students create promotional posts inviting friends to visit and join different school clubs during a festival.",
  communicative_goal: "produce persuasive public communication for a school event",
  vocabulary_domain: ["club", "festival", "activities", "members"],
  input_anchor: "event poster samples",
  output_anchor: "promotional post",
  prerequisite_patterns: ["PAT-8-22"],
  reusable_in: ["PAT-9-07", "PAT-9-10"],
  complexity_level: "Expand"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-8/tp-24.js",
  pattern_id: "PAT-8-24",
  title: "Community Book Swap: Organizing Public Information",
  short_title: "Book Swap",
  grade: 8,
  genre: "Functional",
  cluster: "B",
  topic: "Community Book Swap",
  context: "Students organize information from a reading event into a clear public information layout containing title, key details, contact, action, and additional notes.",
  communicative_goal: "organize multiple pieces of public information into one coherent text",
  vocabulary_domain: ["books", "library", "exchange", "community"],
  input_anchor: "event information cards",
  output_anchor: "information board",
  prerequisite_patterns: ["PAT-8-23"],
  reusable_in: ["PAT-9-10", "PAT-9-11", "PAT-9-12"],
  complexity_level: "Expand"
}
```
---

---

## 7. TP Mapping — Kelas 9

*✅ 18/18 TP selesai. SELURUH 66 TP MAPPING SELESAI.*

### Prinsip Penerapan: Tiga Bentuk Integrasi Kelas 9

Kelas 9 adalah fase "Integrate" — setiap cluster
memanfaatkan thread konvergensi yang sudah terbentuk di
Kelas 7-8 (dicatat di `reusable_in`), tetapi TIDAK harus
memaksa SATU topik menanggung SELURUH struktur pattern
(berbeda dengan Narrative/TG-6A). Sebaliknya, tiga TP
dalam satu cluster biasanya merepresentasikan TIGA BENTUK
INTEGRASI BERBEDA:

1. **Integrasi Topik** — banyak thread konvergensi
   (beberapa topik Kelas 7-8 yang bertema serupa)
   digabung menjadi SATU konteks baru di Kelas 9.
2. **Integrasi Skill** — SATU topik (biasanya dengan
   satu-satunya thread konvergensi yang jelas) dinaikkan
   ke kompleksitas retorik baru.
3. **Integrasi Struktur** — SATU topik membawa struktur
   pattern PALING KOMPLEKS dalam cluster (builds_on
   terbanyak), biasanya pada TP terakhir cluster.

Dengan pendekatan ini, siswa Kelas 9 benar-benar
mentransfer pola argumentasi/komunikasi ke konteks baru,
sambil mengakumulasi kompleksitas retorik — sesuai
filosofi "Acquire (K7) → Expand (K8) → Integrate (K9)".

### Catatan Tambahan: Kontinuitas Isu Lintas Cluster

Ketika satu cluster extends_to ke cluster berikutnya
dengan signal builds_on yang sangat kuat (misalnya
PAT-9-12 → PAT-9-13, di mana PAT-9-13 builds_on dua
pattern dari topik yang identik), TG-6A TIDAK otomatis
berlaku — karena dua cluster tersebut biasanya memiliki
TUJUAN KOMUNIKATIF BERBEDA (bukan satu diskursus
inheren seperti Narrative atau Presentation).

Solusinya: **kontinuitas ISU dipertahankan, tetapi
KOMPONEN DOMAIN bergeser** — fokus berpindah dari satu
aspek (misalnya "environment" dalam payung "health") ke
aspek lain (misalnya "school/self" dalam payung yang
sama "health"). Topik literal juga boleh berevolusi
mengikuti pergeseran fungsi (analisis → intervensi →
evaluasi/visi), bukan harus identik.

Pendekatan ini menjaga koherensi diskursus lintas
cluster TANPA melanggar TG-6 (domain tidak berulang
identik >2 kali berturut-turut).

### Cluster: Argumentative Communication (TP-01 s/d TP-03)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-01.js",
  pattern_id: "PAT-9-01",
  title: "Recycling for Our Community: Building an Argument",
  short_title: "Community Recycling",
  grade: 9,
  genre: "Argumentative Communication",
  cluster: "Argumentative Communication",
  topic: "Community Recycling Program",
  context: "Students develop an argument supporting a recycling program by connecting experiences from clean-up activities, school initiatives, and community projects.",
  communicative_goal: "construct a claim supported by reasons and a practical recommendation",
  vocabulary_domain: ["recycling", "community", "environment", "responsibility"],
  input_anchor: "community issue cards",
  output_anchor: "structured argument",
  prerequisite_patterns: ["PAT-8-16", "PAT-8-13", "PAT-8-14", "PAT-8-04"],
  reusable_in: ["PAT-9-04", "PAT-9-07"],
  complexity_level: "Integrate"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-02.js",
  pattern_id: "PAT-9-02",
  title: "Homework Policy: Responding to Different Opinions",
  short_title: "Homework Debate",
  grade: 9,
  genre: "Argumentative Communication",
  cluster: "Argumentative Communication",
  topic: "Homework Policy",
  context: "Students examine contrasting opinions about homework and develop their own position by acknowledging and responding to alternative views.",
  communicative_goal: "integrate counter-arguments into a coherent position",
  vocabulary_domain: ["homework", "learning", "time", "balance"],
  input_anchor: "opinion comparison cards",
  output_anchor: "counter-argument response",
  prerequisite_patterns: ["PAT-8-15", "PAT-8-14", "PAT-8-16", "PAT-8-01"],
  reusable_in: ["PAT-9-03", "PAT-9-05"],
  complexity_level: "Integrate"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-03.js",
  pattern_id: "PAT-9-03",
  title: "Teamwork in School Clubs: Integrating Arguments",
  short_title: "Teamwork",
  grade: 9,
  genre: "Argumentative Communication",
  cluster: "Argumentative Communication",
  topic: "Teamwork in After-School Clubs and Projects",
  context: "Students integrate multiple reasons, acknowledge different opinions, and make recommendations about effective teamwork in school clubs and collaborative projects.",
  communicative_goal: "produce a complete argumentative performance combining claim, multiple reasons, counter-view, and recommendation",
  vocabulary_domain: ["teamwork", "clubs", "projects", "cooperation"],
  input_anchor: "case study discussion",
  output_anchor: "integrated argumentative presentation",
  prerequisite_patterns: ["PAT-8-13", "PAT-8-14", "PAT-8-15", "PAT-8-16", "PAT-8-04"],
  reusable_in: ["PAT-9-04", "PAT-9-06", "PAT-9-07"],
  complexity_level: "Integrate"
}
```
---

### Cluster: Review (TP-04 s/d TP-06)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-04.js",
  pattern_id: "PAT-9-04",
  title: "Healthy Canteen Menu: Giving a Simple Review",
  short_title: "Healthy Canteen Review",
  grade: 9,
  genre: "Review",
  cluster: "Review",
  topic: "Healthy Canteen Menu",
  context: "Students review a proposed healthy school canteen menu and explain their opinion with simple supporting reasons.",
  communicative_goal: "Give a basic review by describing something positively and supporting an opinion with a reason.",
  vocabulary_domain: ["healthy food", "school canteen", "nutrition", "taste and price"],
  input_anchor: "A healthy school canteen menu poster with food descriptions and prices.",
  output_anchor: "A short review: 'It is... and... I think... because...'",
  prerequisite_patterns: ["PAT-9-03", "PAT-7-06", "PAT-8-13"],
  reusable_in: ["PAT-9-05", "PAT-9-06"],
  complexity_level: "Integrate"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-05.js",
  pattern_id: "PAT-9-05",
  title: "Homework Policy: Writing a Balanced Review",
  short_title: "Homework Policy Review",
  grade: 9,
  genre: "Review",
  cluster: "Review",
  topic: "Homework Policy",
  context: "Students evaluate a school homework policy by recognizing its strengths while presenting a balanced opinion.",
  communicative_goal: "Express a belief, identify one strength, and introduce a contrasting point in a structured review.",
  vocabulary_domain: ["homework", "study habits", "time management", "school rules"],
  input_anchor: "A school homework policy and several student comments.",
  output_anchor: "A balanced review: 'I believe... because... One strength is... However,...'",
  prerequisite_patterns: ["PAT-8-13", "PAT-8-15", "PAT-7-15"],
  reusable_in: ["PAT-9-06"],
  complexity_level: "Integrate"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-06.js",
  pattern_id: "PAT-9-06",
  title: "Class Charity Project: Review and Recommendation",
  short_title: "Charity Project Review",
  grade: 9,
  genre: "Review",
  cluster: "Review",
  topic: "Class Charity Project",
  context: "Students review a completed class charity project and recommend whether it should continue next semester.",
  communicative_goal: "Produce a complete review by describing, evaluating strengths and weaknesses, and giving a final recommendation.",
  vocabulary_domain: ["charity", "community service", "participation", "project evaluation"],
  input_anchor: "A summary of a class charity project with outcomes, feedback, and participation data.",
  output_anchor: "A complete review ending with: 'Therefore, I recommend...'",
  prerequisite_patterns: ["PAT-7-06", "PAT-8-13", "PAT-8-15", "PAT-8-16", "PAT-9-05"],
  reusable_in: ["PAT-9-07"],
  complexity_level: "Integrate"
}
```
---

### Cluster: Presentation (TP-07 s/d TP-09)

> **[TG-6 NOTE — Cluster 3 Presentation]**
> TP-07, TP-08, dan TP-09 berbagi topik identik ("The Old Storage
> Room Discovery") secara disengaja. Ketiganya bukan tiga TP
> independen bertopik sama, melainkan tiga bagian dari satu performa
> presentasi utuh (opening → body → closing+Q&A). Pengulangan topik
> diperlakukan sebagai pengecualian TG-6 berbasis prinsip "satu unit
> diskursus", analog dengan TG-6A untuk Narrative arc. Desain ini
> sudah final di TP Mapping v1.0 dan tidak memerlukan perubahan
> struktur.

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-07.js",
  pattern_id: "PAT-9-07",
  title: "The Old Storage Room Discovery: Opening a Presentation",
  short_title: "Storage Room Presentation Opening",
  grade: 9,
  genre: "Presentation",
  cluster: "Presentation",
  topic: "The Old Storage Room Discovery",
  context: "Students introduce a presentation about the discovery of old materials found in the school storage room and explain its purpose.",
  communicative_goal: "Open a formal presentation by greeting the audience, introducing the speaker, stating the topic, and explaining the presentation purpose.",
  vocabulary_domain: ["presentation expressions", "school facilities", "historical objects", "discovery"],
  input_anchor: "Photos and notes showing old letters, photographs, and objects discovered in the school storage room.",
  output_anchor: "Presentation opening: 'Good morning... My name is... Today I would like to present... The purpose of this presentation is...'",
  prerequisite_patterns: ["PAT-7-01", "PAT-8-21"],
  reusable_in: ["PAT-9-08", "PAT-9-09"],
  complexity_level: "Integrate"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-08.js",
  pattern_id: "PAT-9-08",
  title: "The Old Storage Room Discovery: Organizing Presentation Points",
  short_title: "Storage Room Presentation Body",
  grade: 9,
  genre: "Presentation",
  cluster: "Presentation",
  topic: "The Old Storage Room Discovery",
  context: "Students organize and present the main findings from the storage room using a clear sequence of ideas.",
  communicative_goal: "Present information in a logical order and summarize the main findings with an evidence-based statement.",
  vocabulary_domain: ["sequence markers", "historical documents", "school history", "evidence"],
  input_anchor: "A collection of discovered letters, photographs, notebooks, and labels from the storage room.",
  output_anchor: "Presentation body: 'First,... Next,... Another point is... Finally,... Based on this,...'",
  prerequisite_patterns: ["PAT-8-10", "PAT-9-06", "PAT-9-03"],
  reusable_in: ["PAT-9-09", "PAT-9-10"],
  complexity_level: "Integrate"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-09.js",
  pattern_id: "PAT-9-09",
  title: "The Old Storage Room Discovery: Concluding and Responding",
  short_title: "Storage Room Presentation Closing",
  grade: 9,
  genre: "Presentation",
  cluster: "Presentation",
  topic: "The Old Storage Room Discovery",
  context: "Students conclude their presentation, invite questions, and respond appropriately to audience inquiries about the discovery.",
  communicative_goal: "Deliver a clear conclusion, thank the audience, invite questions, and provide a simple follow-up response.",
  vocabulary_domain: ["concluding expressions", "question handling", "school heritage", "discussion"],
  input_anchor: "Completed presentation outline and audience question cards related to the storage room findings.",
  output_anchor: "Presentation closing: 'In conclusion,... Therefore,... Thank you for listening. Do you have any questions? That's an interesting question...'",
  prerequisite_patterns: ["PAT-8-03", "PAT-8-16", "PAT-8-21", "PAT-9-08"],
  reusable_in: ["PAT-9-10"],
  complexity_level: "Integrate"
}
```
---

### Cluster: Information Synthesis (TP-10 s/d TP-12)

> **Catatan untuk fase penulisan TP:** TP-12
> mencantumkan PAT-8-24 (Book Swap) sebagai builds_on
> struktural (sesuai Pattern Registry), tetapi
> sebaiknya diperlakukan sebagai *unused potential*
> (TG-1) — fokus konten TP-12 pada 2-3 sumber lanjutan
> tema Trees+Exercise dari TP-11, agar sintesis tidak
> terlalu padat.

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-10.js",
  pattern_id: "PAT-9-10",
  title: "The Old Storage Room Documents: Synthesizing Information",
  short_title: "Storage Room Sources",
  grade: 9,
  genre: "Information Synthesis",
  cluster: "Information Synthesis",
  topic: "The Old Storage Room Documents",
  context: "Students compare an old letter and an old photograph discovered in the school storage room and identify the shared information.",
  communicative_goal: "Combine information from two sources into one integrated understanding.",
  vocabulary_domain: ["historical documents", "school history", "photographs", "evidence"],
  input_anchor: "Source A: an old letter from a former principal; Source B: an old photograph with captions.",
  output_anchor: "Source A says... Source B says... Together, they show...",
  prerequisite_patterns: ["PAT-8-24", "PAT-9-09", "PAT-8-05"],
  reusable_in: ["PAT-9-11", "PAT-9-12"],
  complexity_level: "Integrate"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-11.js",
  pattern_id: "PAT-9-11",
  title: "Green Spaces and Physical Activity: Comparing Sources",
  short_title: "Health & Green Spaces",
  grade: 9,
  genre: "Information Synthesis",
  cluster: "Information Synthesis",
  topic: "Green Spaces and Physical Activity",
  context: "Students compare two reports: one about city trees and another about exercise and heart rate to identify similarities, differences, and overall implications.",
  communicative_goal: "Compare two related sources and produce a balanced synthesis with a simple conclusion.",
  vocabulary_domain: ["green spaces", "physical activity", "public health", "comparison"],
  input_anchor: "Source A: report on city trees; Source B: report on exercise and heart rate.",
  output_anchor: "Both sources... However, Source A... while Source B... Therefore...",
  prerequisite_patterns: ["PAT-9-10", "PAT-8-06", "PAT-8-08"],
  reusable_in: ["PAT-9-12", "PAT-9-13"],
  complexity_level: "Integrate"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-12.js",
  pattern_id: "PAT-9-12",
  title: "Healthy School Environment: Drawing Evidence-Based Conclusions",
  short_title: "Healthy Environment Conclusion",
  grade: 9,
  genre: "Information Synthesis",
  cluster: "Information Synthesis",
  topic: "Healthy School Environment",
  context: "Students synthesize information from sources about air quality, green spaces, physical activity, and book-sharing culture to form evidence-based conclusions and recommendations.",
  communicative_goal: "Draw an integrated conclusion from multiple sources and prepare ideas for solving a school health problem.",
  vocabulary_domain: ["air quality", "physical activity", "healthy habits", "evidence-based conclusions"],
  input_anchor: "Multiple sources about trees, exercise, and school community activities.",
  output_anchor: "Based on these sources... This suggests... Therefore...",
  prerequisite_patterns: ["PAT-9-10", "PAT-9-11", "PAT-8-12", "PAT-8-24"],
  reusable_in: ["PAT-9-13"],
  complexity_level: "Integrate"
}
```
---

### Cluster: Problem & Solution (TP-13 s/d TP-15)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-13.js",
  pattern_id: "PAT-9-13",
  title: "Low Student Physical Activity: Identifying the Problem",
  short_title: "Physical Activity Problem",
  grade: 9,
  genre: "Problem & Solution",
  cluster: "Problem & Solution",
  topic: "Student Physical Activity at School",
  context: "Students identify a school problem based on synthesized information about physical activity and student health.",
  communicative_goal: "Describe a problem, explain its cause, and state its consequences.",
  vocabulary_domain: ["student wellbeing", "physical activity", "school routine", "healthy habits"],
  input_anchor: "A summary of school activity data and student health observations.",
  output_anchor: "The problem is... because... As a result,...",
  prerequisite_patterns: ["PAT-9-12", "PAT-8-09", "PAT-8-08"],
  reusable_in: ["PAT-9-14", "PAT-9-15"],
  complexity_level: "Integrate"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-14.js",
  pattern_id: "PAT-9-14",
  title: "Active Break Program: Proposing a Solution",
  short_title: "Active Break Solution",
  grade: 9,
  genre: "Problem & Solution",
  cluster: "Problem & Solution",
  topic: "Building Healthy School Habits",
  context: "Students propose practical school routines that encourage students to move more during the school day.",
  communicative_goal: "Explain a solution using conditional reasoning and expected outcomes.",
  vocabulary_domain: ["daily routines", "healthy habits", "school programs", "action plans"],
  input_anchor: "Ideas for active breaks, walking clubs, and classroom movement routines.",
  output_anchor: "To solve this problem,... If..., ... so... This will help...",
  prerequisite_patterns: ["PAT-7-12", "PAT-8-11", "PAT-9-13"],
  reusable_in: ["PAT-9-15", "PAT-9-16"],
  complexity_level: "Integrate"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-15.js",
  pattern_id: "PAT-9-15",
  title: "Creating an Active School Culture: Evaluating the Solution",
  short_title: "Active School Proposal",
  grade: 9,
  genre: "Problem & Solution",
  cluster: "Problem & Solution",
  topic: "Creating an Active School Culture",
  context: "Students integrate the identified problem and proposed solution into a complete recommendation for improving everyday school life.",
  communicative_goal: "Present a complete problem-solution argument and justify why the solution should be implemented.",
  vocabulary_domain: ["school improvement", "healthy lifestyle", "student participation", "long-term benefits"],
  input_anchor: "Problem analysis and proposed school activity program.",
  output_anchor: "The problem is... To solve it,... This solution works because... As a result,... Therefore,...",
  prerequisite_patterns: ["PAT-9-13", "PAT-9-14", "PAT-8-11", "PAT-9-12"],
  reusable_in: ["PAT-9-16"],
  complexity_level: "Integrate"
}
```
---

### Cluster: Reflection (TP-16 s/d TP-18)

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-16.js",
  pattern_id: "PAT-9-16",
  title: "Creating Positive Change: Personal Reflection",
  short_title: "Learning from Change",
  grade: 9,
  genre: "Reflection",
  cluster: "Reflection",
  topic: "Learning from Creating Positive Change",
  context: "Students reflect on their experience of analyzing evidence, identifying a school problem, and proposing solutions to improve student wellbeing.",
  communicative_goal: "Reflect on personal learning and explain new understanding gained through an authentic problem-solving experience.",
  vocabulary_domain: ["reflection", "learning process", "evidence", "personal growth"],
  input_anchor: "A completed problem-solution proposal about building a more active school culture.",
  output_anchor: "I learned... because... From this experience, I realized...",
  prerequisite_patterns: ["PAT-7-16", "PAT-7-15", "PAT-9-15"],
  reusable_in: ["PAT-9-17", "PAT-9-18"],
  complexity_level: "Integrate"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-17.js",
  pattern_id: "PAT-9-17",
  title: "Finding My Voice: Reflecting on Challenges",
  short_title: "Overcoming Challenges",
  grade: 9,
  genre: "Reflection",
  cluster: "Reflection",
  topic: "Overcoming the Fear of Speaking and Presenting",
  context: "Students reflect on personal challenges they experienced while presenting ideas, discussing discoveries, and communicating in English throughout the learning journey.",
  communicative_goal: "Describe an initial difficulty, explain how it was overcome, and express present confidence.",
  vocabulary_domain: ["confidence", "presentation", "perseverance", "communication"],
  input_anchor: "Personal experiences from presenting the Old Storage Room Discovery and other collaborative classroom activities.",
  output_anchor: "At first,... However,... I overcame it by... Now I can...",
  prerequisite_patterns: ["PAT-7-15", "PAT-8-20", "PAT-9-15"],
  reusable_in: ["PAT-9-18"],
  complexity_level: "Integrate"
}
```

---
```javascript
{
  tp_id: "docs/fase-d/kelas-9/tp-18.js",
  pattern_id: "PAT-9-18",
  title: "My Three-Year English Journey: Looking Forward",
  short_title: "My English Journey",
  grade: 9,
  genre: "Reflection",
  cluster: "Reflection",
  topic: "Three Years of Learning, Growing, and Communicating",
  context: "Students look back on their English learning journey from Acquire (Grade 7) through Expand (Grade 8) to Integrate (Grade 9), reflecting on projects, discoveries, collaboration, and personal growth while preparing for senior high school.",
  communicative_goal: "Synthesize personal learning experiences into a forward-looking reflection that connects past achievements with future goals.",
  vocabulary_domain: ["growth", "experience", "future goals", "lifelong learning"],
  input_anchor: "A portfolio of major learning experiences including community projects, environmental topics, charity work, the Old Storage Room discovery, presentations, information synthesis, and school improvement proposals.",
  output_anchor: "Looking back,... I have learned... In the future, I will... because... I am ready to...",
  prerequisite_patterns: ["PAT-7-16", "PAT-8-20", "PAT-9-16", "PAT-9-17"],
  reusable_in: ["FASE-E"],
  complexity_level: "Integrate"
}
```
---

---

## Penutup

**TP Mapping FLAF Fase D v1.0 — SELESAI 66/66.**

Dokumen ini merupakan **dokumen operasional** FLAF Fase D,
pelengkap Pattern Registry v1.0.

Seluruh penulisan TP wajib merujuk ke TP Mapping ini untuk
topik, konteks, dan metadata authoring. Pattern Registry
tetap menjadi sumber kebenaran untuk struktur komunikasi;
TP Mapping menjadi sumber kebenaran untuk konteks
pembelajaran.

Jika terjadi konflik antara TP Mapping dengan TP aktual
atau generator, dokumen ini menjadi acuan utama sampai
dilakukan revisi versi resmi.

### Ringkasan Thread Konvergensi Utama

Selama proses pemetaan, beberapa thread topik berkembang
menjadi spiral lintas-kelas yang signifikan:

- **Old Storage Room** (8 TP, K7→K9): notice misterius
  (K7 TP-20) → cerita lengkap (K8 TP-17-20) → pesan
  temuan (K8 TP-21) → presentasi penemuan (K9 TP-07-09)
  → bahan refleksi (K9 TP-17-18)
- **Community Service/Recycling** (K7 Clean-Up → K8
  Charity → K9 Recycling Program → K9 Reflection)
- **Healthy Food/Canteen** (4 spiral: K7 Descriptive →
  K8 Interpersonal → K8 Exposition → K9 Review)
- **After-School Activities/Clubs** (3 spiral: K8
  Interpersonal → K8 Exposition → K8 Functional)
- **Homework Policy** (K8 Exposition → K9 Argumentative
  → K9 Review)
- **Library/Reading** (K7 Recount → K7 Functional → K8
  Functional → K9 Information Synthesis, via PAT-8-24)
- **Student Physical Activity/Healthy School** (K8
  Report → K9 Information Synthesis → K9 Problem &
  Solution → K9 Reflection)

Thread-thread ini menunjukkan bahwa GR-10 ("One Pattern,
One Context, Many Reuses") dan TG-5 (Topic Spiral)
berhasil menciptakan jaringan konteks yang koheren tanpa
mengorbankan keberagaman (TG-6/TG-7), sambil
mempertahankan stabilitas Pattern Registry (66 pattern,
tidak diubah).

### Status Roadmap Fase D

| # | Deliverable | Status |
|---|---|---|
| 1 | Dokumen Fondasi Pedagogis v1.0 | ✅ Selesai |
| 2 | Genre Architecture | ✅ Selesai |
| 3 | Pattern Registry v1.0 (66/66) | ✅ Selesai |
| 4 | **TP Mapping v1.0 (66/66)** | **✅ Selesai** |
| 5 | Schema JS Fase D | ⏳ Berikutnya |
| 6 | Repository baru (fork dari FLAF SD) | ⏳ Menunggu |
