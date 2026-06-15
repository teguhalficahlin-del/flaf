# FLAF Fase D — Pattern Registry

---

## Metadata

| Field            | Nilai                                         |
|------------------|-----------------------------------------------|
| Versi            | v1.0 — Registry Lengkap (66 pattern)          |
| Status           | FINAL — Siap untuk TP Mapping dan Schema      |
| Tanggal Dibuat   | 14 Juni 2026                                  |
| Tanggal Selesai  | 14 Juni 2026                                  |
| Dokumen Induk    | FLAF Fase D Fondasi Pedagogis v1.0            |
| Disusun oleh     | Romo (pemilik proyek), Claude Chat, ChatGPT   |

---

## Catatan Versioning

| Versi | Tipe Perubahan | Status |
|-------|----------------|--------|
| v0.1  | Template resmi — struktur dan prinsip ditetapkan | ✅ Selesai |
| v0.2  | Pattern Kelas 7 selesai (24 pattern) | ✅ Selesai |
| v0.3  | Pattern Kelas 8 selesai (24 pattern) | ✅ Selesai |
| v1.0  | Pattern Kelas 9 selesai — Registry lengkap (66 pattern) | ✅ Selesai |

---

## Daftar Isi

1. Prinsip Akumulasi Pattern
2. Guardrail Pattern Registry (GR-1 s/d GR-8)
3. Struktur Entri
4. Generator Rules
5. Genre Architecture Referensi
6. Pattern Registry — Kelas 7
7. Pattern Registry — Kelas 8
8. Pattern Registry — Kelas 9
9. Index Pattern

---

## 1. Prinsip Akumulasi Pattern

Setiap pattern dalam FLAF merupakan bagian dari perkembangan
yang bersifat akumulatif. Pattern baru tidak menggantikan atau
mengulang pattern sebelumnya sebagai target baru, melainkan
memperluas kemampuan yang telah dibangun melalui konteks,
elaborasi, dan fungsi komunikasi yang lebih kaya. Setiap
Teaching Package berdiri di atas fondasi pattern yang telah
dipelajari sebelumnya sehingga siswa terus menggunakan,
mengintegrasikan, dan memperkuat kemampuan yang sudah dimiliki
sambil memperoleh kemampuan baru.

Dengan demikian, perkembangan belajar membentuk struktur spiral
yang semakin luas tanpa meninggalkan inti pembelajaran, tetap
berada dalam koridor Capaian Pembelajaran Fase D, dan mengarah
secara bertahap menuju kompetensi CEFR B1.

**Aturan wajib:** Setiap pattern, kecuali pattern pertama pada
suatu jalur perkembangan, wajib memiliki tepat satu `builds_on`
yang eksplisit. Tidak boleh ada pattern yang muncul tanpa akar
perkembangan yang jelas.

**Catatan untuk Kelas 9:** Field `extends_to` pada pattern
Kelas 9 diisi dengan referensi ke Fase E sebagai placeholder,
karena Fase D adalah tahap akhir sebelum transisi ke SMA/SMK.

---

## 2. Guardrail Pattern Registry

Delapan aturan berikut berlaku untuk seluruh pattern di semua
kelas. Pelanggaran terhadap satu guardrail saja cukup menjadi
alasan pattern ditolak dari registry.

**GR-1 — Pattern adalah unit komunikasi, bukan unit grammar**
Pattern harus dapat langsung digunakan untuk berkomunikasi.
Bukan nama grammar rule atau kategori vocabulary.
✅ "I like..." ❌ "Simple Present Tense"

**GR-2 — Pattern harus produktif**
Siswa harus dapat menghasilkan puluhan variasi dengan satu
pattern yang sama hanya dengan mengganti konten.

**GR-3 — Pattern tidak boleh bergantung pada satu topik**
Topik boleh berubah, pattern tetap.
✅ "I like..." ❌ "I like cats."

**GR-4 — Pattern harus cukup kaya untuk 45–90 menit**
Pattern yang baik dapat digunakan untuk MODEL, REPEAT, CHANGE,
INTERACT, dan SHARE tanpa kehabisan variasi.

**GR-5 — Satu TP = satu productive sentence engine**
Pattern adalah engine komunikasi, bukan label grammar.
✅ "Can you + V...?" ❌ "Modal Can"

**GR-6 — Progression melalui elaborasi, bukan pergantian grammar**
Yang meningkat adalah konteks, elaborasi, dan fungsi komunikasi
— bukan pergantian tense atau struktur grammar secara mekanis.

**GR-7 — Pattern harus memiliki transformability tinggi**
Pattern harus mudah dipakai untuk langkah CHANGE — satu elemen
diganti, pattern tetap dapat digunakan.

**GR-8 — Pattern Registry harus unik**
QA harus dapat menjawab: "Apakah ini pattern baru atau hanya
variasi pattern lama?" Jika jawabannya tidak jelas, pattern
tidak boleh masuk registry.

---

## 3. Struktur Entri

Setiap pattern dalam registry menggunakan struktur berikut.
Semua field berstatus wajib kecuali dinyatakan lain.

```
pattern_id          : [PAT-7-01 / PAT-8-01 / PAT-9-01]
target_pattern      : [Pattern produktif — contoh: "I like..."]
grade               : [7 / 8 / 9]
genre               : [Nama genre sesuai Genre Architecture]
cluster             : [Nama cluster dalam genre]
cefr_target         : [A2 / A2+ / B1-]
communicative_function : [Fungsi komunikasi — contoh: "menyatakan preferensi"]
builds_on           : [pattern_id yang menjadi fondasi langsung, atau "ROOT" jika pattern pertama]
extends_to          : [pattern_id yang mengembangkan pattern ini, atau "FASE-E" jika Kelas 9]
CP_reference        : [Elemen CP Fase D yang dicakup]
forbidden_overlap   : [Pattern yang mirip dan tidak boleh dianggap sama]
example_output      : [3 contoh kalimat siswa]
```

---

## 4. Generator Rules

Empat aturan berikut mengikat seluruh generator AI yang
menggunakan Pattern Registry ini.

**GR-GEN-1 — Generator hanya boleh memilih pattern dari Registry**
Generator tidak boleh membuat pattern baru secara mandiri.
Seluruh pattern yang digunakan dalam TP harus terdaftar di
registry dengan pattern_id yang valid.

**GR-GEN-2 — Setiap TP wajib memuat validasi empat field**
Sebelum TP dianggap valid, generator wajib memastikan:
- current_pattern terdaftar di registry
- builds_on valid dan merujuk ke pattern yang ada
- communicative_function konsisten dengan genre
- CP_reference terhubung ke elemen CP Fase D

**GR-GEN-3 — Generator wajib menggunakan builds_on sebagai konteks**
Pattern yang tercantum di builds_on harus muncul kembali dalam
TP sebagai support — bukan sebagai target baru. Ini memastikan
prinsip akumulasi terjaga di setiap TP yang dihasilkan.

**GR-GEN-4 — QA otomatis menggunakan checklist empat item**
Setiap TP yang dihasilkan generator wajib lolos checklist:
[ ] Target pattern unik dan terdaftar di registry?
[ ] builds_on valid dan merujuk ke pattern yang ada?
[ ] Pattern lama muncul sebagai support, bukan target baru?
[ ] Pattern lama TIDAK dijadikan target baru?

---

## 5. Genre Architecture Referensi

Dokumen ini mengacu pada Genre Architecture resmi FLAF Fase D.

### Kelas 7 — Genre Layer (24 TP)

| Genre         | Cluster | TP |
|---------------|---------|----|
| Interpersonal | A, B    | 4  |
| Descriptive   | A, B    | 4  |
| Procedure     | A, B    | 4  |
| Recount       | A, B    | 4  |
| Functional    | A, B    | 4  |
| Narrative     | A, B    | 4  |

### Kelas 8 — Genre Layer (24 TP)

| Genre         | Cluster | TP |
|---------------|---------|----|
| Interpersonal | A, B    | 4  |
| Report        | A, B    | 4  |
| Explanation   | A, B    | 4  |
| Exposition    | A, B    | 4  |
| Narrative     | A, B    | 4  |
| Functional    | A, B    | 4  |

### Kelas 9 — Transition Communication Layer (18 TP)

| Cluster                        | TP |
|--------------------------------|----|
| Argumentative Communication    | 3  |
| Review                         | 3  |
| Presentation                   | 3  |
| Information Synthesis          | 3  |
| Problem & Solution             | 3  |
| Reflection                     | 3  |

---

## 6. Pattern Registry — Kelas 7

*Belum diisi. Target: 24 pattern (PAT-7-01 s/d PAT-7-24).*

### Genre: Interpersonal (PAT-7-01 s/d PAT-7-04)

---
pattern_id          : PAT-7-01
target_pattern      : I am / I like / I can + personal information
grade               : 7
genre               : Interpersonal
cluster             : A — Building Personal Connection
cefr_target         : A2
communicative_function : introducing self and exchanging basic personal information
builds_on           : ROOT
extends_to          : PAT-7-02
CP_reference        : berinteraksi untuk membangun hubungan sosial dan bertukar informasi sederhana tentang diri serta kehidupan sehari-hari
forbidden_overlap   : asking for opinions, giving reasons, describing routines in detail
example_output      :
  1. I am Rina. I am from Bandung.
  2. I like drawing and listening to music.
  3. I can swim, but I cannot dance.

---
pattern_id          : PAT-7-02
target_pattern      : Do you ...? / Can you ...? / Yes, I do. / No, I don't. / Yes, I can. / No, I can't.
grade               : 7
genre               : Interpersonal
cluster             : A — Building Personal Connection
cefr_target         : A2
communicative_function : asking and answering simple personal questions
builds_on           : PAT-7-01
extends_to          : PAT-7-03
CP_reference        : berinteraksi secara lisan untuk memperoleh dan memberikan informasi sederhana dalam percakapan sehari-hari
forbidden_overlap   : WH-question interviews, opinion seeking, preference justification
example_output      :
  1. Do you like comics? Yes, I do.
  2. Can you play chess? No, I can't.
  3. Do you enjoy science? Yes, I do.

---
pattern_id          : PAT-7-03
target_pattern      : Let's ... / Shall we ...? / Sure. / Sorry, I can't.
grade               : 7
genre               : Interpersonal
cluster             : B — Making Social Interaction
cefr_target         : A2
communicative_function : making, accepting, and declining invitations or suggestions
builds_on           : PAT-7-02
extends_to          : PAT-7-04
CP_reference        : menggunakan bahasa untuk melakukan tindakan sosial sederhana seperti mengajak, merespons, dan menjaga interaksi
forbidden_overlap   : giving instructions, requesting permission, explaining procedures
example_output      :
  1. Let's study together after school.
  2. Shall we play badminton? Sure!
  3. Let's watch the video. Sorry, I can't.

---
pattern_id          : PAT-7-04
target_pattern      : I think ... because ... / That's true. / I agree. / I don't think so.
grade               : 7
genre               : Interpersonal
cluster             : B — Making Social Interaction
cefr_target         : A2
communicative_function : expressing simple opinions and responding to others in conversation
builds_on           : PAT-7-03
extends_to          : PAT-8-01
CP_reference        : menyampaikan dan merespons pandangan sederhana dalam interaksi sosial dengan dukungan alasan yang sangat sederhana
forbidden_overlap   : formal argumentation, exposition, extended persuasion, analytical discussion
example_output      :
  1. I think English is fun because I like games.
  2. I agree. The activity is interesting.
  3. I don't think so because I prefer reading.
---

### Genre: Descriptive (PAT-7-05 s/d PAT-7-08)

---
pattern_id          : PAT-7-05
target_pattern      : It is / It has / It looks + adjective / noun phrase
grade               : 7
genre               : Descriptive
cluster             : A — Identifying Characteristics
cefr_target         : A2
communicative_function : identifying and describing basic characteristics of people, objects, and places
builds_on           : PAT-7-04
extends_to          : PAT-7-06
CP_reference        : menyampaikan informasi faktual sederhana tentang orang, benda, dan tempat melalui deskripsi
forbidden_overlap   : introducing self, expressing opinions, giving instructions
example_output      :
  1. It is a small library.
  2. My bag has two pockets.
  3. The cat looks sleepy.

---
pattern_id          : PAT-7-06
target_pattern      : It is + adjective + and / but + adjective
grade               : 7
genre               : Descriptive
cluster             : A — Identifying Characteristics
cefr_target         : A2
communicative_function : combining multiple descriptive features into one meaningful description
builds_on           : PAT-7-05
extends_to          : PAT-7-07
CP_reference        : mengembangkan deskripsi sederhana dengan informasi yang lebih lengkap dan terhubung
forbidden_overlap   : comparison, giving reasons, sequencing events
example_output      :
  1. The classroom is clean and bright.
  2. My bicycle is old but strong.
  3. The park is quiet and beautiful.

---
pattern_id          : PAT-7-07
target_pattern      : There is / There are + noun + place expression
grade               : 7
genre               : Descriptive
cluster             : B — Describing Surroundings
cefr_target         : A2
communicative_function : describing the existence and location of people or objects in a place
builds_on           : PAT-7-06
extends_to          : PAT-7-08
CP_reference        : menyampaikan informasi sederhana tentang lingkungan dan tata letak secara lisan maupun tertulis
forbidden_overlap   : giving directions, explaining procedures, narrating events
example_output      :
  1. There is a tree in front of the school.
  2. There are three windows in my bedroom.
  3. There is a computer next to the teacher's desk.

---
pattern_id          : PAT-7-08
target_pattern      : It is + adjective + for + noun / to + verb
grade               : 7
genre               : Descriptive
cluster             : B — Describing Function and Purpose
cefr_target         : A2
communicative_function : describing qualities together with simple function or purpose
builds_on           : PAT-7-07
extends_to          : PAT-8-05
CP_reference        : mengembangkan deskripsi dengan menghubungkan karakteristik dan fungsi secara sederhana sesuai konteks
forbidden_overlap   : explanation of cause-effect, procedure steps, argumentation
example_output      :
  1. This bag is useful for carrying books.
  2. The playground is safe for children.
  3. A dictionary is helpful to learn new words.
---

### Genre: Procedure (PAT-7-09 s/d PAT-7-12)

---
pattern_id          : PAT-7-09
target_pattern      : First, ... Then, ... Finally, ...
grade               : 7
genre               : Procedure
cluster             : A — Sequencing Actions
cefr_target         : A2
communicative_function : giving and following simple ordered steps
builds_on           : PAT-7-08
extends_to          : PAT-7-10
CP_reference        : menyampaikan langkah-langkah sederhana untuk mencapai tujuan dalam konteks sehari-hari
forbidden_overlap   : recounting past events, describing characteristics, explaining causes
example_output      :
  1. First, open your book. Then, read the text. Finally, answer the questions.
  2. First, wash your hands. Then, eat your lunch. Finally, clean the table.
  3. First, choose a picture. Then, write a sentence. Finally, share it.

---
pattern_id          : PAT-7-10
target_pattern      : Verb + object + place / time expression
grade               : 7
genre               : Procedure
cluster             : A — Performing Actions
cefr_target         : A2
communicative_function : giving clear action instructions with simple contextual information
builds_on           : PAT-7-09
extends_to          : PAT-7-11
CP_reference        : menggunakan instruksi sederhana dengan informasi pendukung agar tindakan dapat dilakukan dengan tepat
forbidden_overlap   : making invitations, giving opinions, describing locations
example_output      :
  1. Put the bottle on the table.
  2. Write your name at the top of the paper.
  3. Read the story before dinner.

---
pattern_id          : PAT-7-11
target_pattern      : Don't ... / Be ... / Always ...
grade               : 7
genre               : Procedure
cluster             : B — Giving Rules and Tips
cefr_target         : A2
communicative_function : giving simple warnings, reminders, and procedural advice
builds_on           : PAT-7-10
extends_to          : PAT-7-12
CP_reference        : menggunakan ungkapan sederhana untuk mengarahkan tindakan secara aman dan efektif
forbidden_overlap   : expressing prohibition as opinion, explanation of consequences, argumentation
example_output      :
  1. Don't touch the hot pan.
  2. Be careful with the scissors.
  3. Always wash your hands before eating.

---
pattern_id          : PAT-7-12
target_pattern      : If you want to ..., Verb ... / Use ... to ...
grade               : 7
genre               : Procedure
cluster             : B — Expressing Purpose in Procedures
cefr_target         : A2
communicative_function : connecting goals with appropriate actions or tools in simple procedures
builds_on           : PAT-7-11
extends_to          : PAT-8-09
CP_reference        : mengembangkan prosedur sederhana dengan menghubungkan tujuan, tindakan, dan penggunaan alat secara bermakna
forbidden_overlap   : explanation of cause-effect, giving reasons for opinions, conditional problem solving
example_output      :
  1. If you want to draw a circle, use a compass.
  2. Use a dictionary to find new words.
  3. If you want to save water, turn off the tap.
---

### Genre: Recount (PAT-7-13 s/d PAT-7-16)

---
pattern_id          : PAT-7-13
target_pattern      : Yesterday, ... / Last ..., ... + past event
grade               : 7
genre               : Recount
cluster             : A — Setting Past Events
cefr_target         : A2
communicative_function : introducing a past experience with a simple time reference
builds_on           : PAT-7-09
extends_to          : PAT-7-14
CP_reference        : menceritakan pengalaman atau peristiwa yang telah terjadi dengan penanda waktu sederhana
forbidden_overlap   : giving procedures, describing present characteristics, expressing future plans
example_output      :
  1. Yesterday, I visited my grandmother.
  2. Last Sunday, we played football.
  3. Last week, my class cleaned the garden.

---
pattern_id          : PAT-7-14
target_pattern      : Subject + past action + and / then + past action
grade               : 7
genre               : Recount
cluster             : A — Connecting Past Events
cefr_target         : A2
communicative_function : linking two or more past actions into a simple event sequence
builds_on           : PAT-7-13
extends_to          : PAT-7-15
CP_reference        : mengembangkan cerita pengalaman sederhana melalui rangkaian peristiwa yang saling terhubung
forbidden_overlap   : procedure sequencing, cause-effect explanation, narrative conflict development
example_output      :
  1. I opened the door and greeted my friend.
  2. We watched a movie and ate popcorn.
  3. She finished her homework and played outside.

---
pattern_id          : PAT-7-15
target_pattern      : It was + adjective + because + simple event
grade               : 7
genre               : Recount
cluster             : B — Expressing Experience
cefr_target         : A2
communicative_function : expressing a simple personal response to a past experience
builds_on           : PAT-7-14
extends_to          : PAT-7-16
CP_reference        : menyampaikan pengalaman masa lalu disertai tanggapan pribadi yang sederhana
forbidden_overlap   : giving opinions on general topics, argumentation, explanation texts
example_output      :
  1. It was fun because we played together.
  2. It was exciting because I won the game.
  3. It was difficult because the questions were long.

---
pattern_id          : PAT-7-16
target_pattern      : At the end, ... / After that, ... / I learned ...
grade               : 7
genre               : Recount
cluster             : B — Closing a Recount
cefr_target         : A2
communicative_function : concluding a personal recount with a simple result or reflection
builds_on           : PAT-7-15
extends_to          : PAT-8-13
CP_reference        : menutup cerita pengalaman dengan hasil, kesan, atau pembelajaran sederhana sesuai konteks
forbidden_overlap   : narrative moral lesson, formal reflection, argumentative conclusion
example_output      :
  1. At the end, we went home happily.
  2. After that, everyone smiled and took a photo.
  3. I learned to work with my friends.
---

### Genre: Functional (PAT-7-17 s/d PAT-7-20)

---
pattern_id          : PAT-7-17
target_pattern      : Please ... / Please don't ...
grade               : 7
genre               : Functional
cluster             : A — Everyday Messages
cefr_target         : A2
communicative_function : making simple requests and notices in everyday functional texts
builds_on           : PAT-7-11
extends_to          : PAT-7-18
CP_reference        : memahami dan menghasilkan teks fungsional sederhana untuk keperluan sehari-hari secara tepat dan sopan
forbidden_overlap   : procedural instructions with ordered steps, invitations, opinions
example_output      :
  1. Please close the door.
  2. Please don't leave your bag here.
  3. Please bring your English book tomorrow.

---
pattern_id          : PAT-7-18
target_pattern      : Time / Date + event + place
grade               : 7
genre               : Functional
cluster             : A — Schedules and Announcements
cefr_target         : A2
communicative_function : sharing essential event information in schedules and announcements
builds_on           : PAT-7-17
extends_to          : PAT-7-19
CP_reference        : menyampaikan informasi praktis mengenai waktu, tempat, dan kegiatan dalam teks fungsional sederhana
forbidden_overlap   : recount with time markers, descriptive location, procedural sequence
example_output      :
  1. Monday, 8 a.m. English Club in Room 3.
  2. July 10 Sports Day on the school field.
  3. Friday, 2 p.m. Class meeting in the library.

---
pattern_id          : PAT-7-19
target_pattern      : Name: ... / Class: ... / Number: ... / Choice: ...
grade               : 7
genre               : Functional
cluster             : B — Forms and Records
cefr_target         : A2
communicative_function : completing and exchanging basic personal information in functional formats
builds_on           : PAT-7-18
extends_to          : PAT-7-20
CP_reference        : menggunakan bahasa sederhana untuk mengisi dan memahami formulir atau data praktis sehari-hari
forbidden_overlap   : self-introduction, descriptive paragraphs, narrative writing
example_output      :
  1. Name: Siti Rahma
  2. Class: 7A
  3. Favorite Club: Science Club

---
pattern_id          : PAT-7-20
target_pattern      : Notice: ... / No ... / Keep ... / Use ...
grade               : 7
genre               : Functional
cluster             : B — Public Information
cefr_target         : A2
communicative_function : understanding and creating short public notices and signs
builds_on           : PAT-7-19
extends_to          : PAT-8-17
CP_reference        : menghasilkan dan menggunakan teks fungsional singkat untuk mendukung aktivitas di lingkungan sekolah dan masyarakat
forbidden_overlap   : procedural explanations, descriptive labels, argumentative messages
example_output      :
  1. Notice: Keep the classroom clean.
  2. No Food or Drinks in the Computer Room.
  3. Use the front door only.
---

### Genre: Narrative (PAT-7-21 s/d PAT-7-24)

---
pattern_id          : PAT-7-21
target_pattern      : Once there was ... / There was ... + character + place
grade               : 7
genre               : Narrative
cluster             : A — Building Story World
cefr_target         : A2
communicative_function : introducing characters and setting in a simple story
builds_on           : PAT-7-05
extends_to          : PAT-7-22
CP_reference        : memahami dan menghasilkan teks naratif sederhana dengan orientasi yang jelas terhadap tokoh dan latar
forbidden_overlap   : factual description, personal recount, self-introduction
example_output      :
  1. Once there was a kind rabbit in a small forest.
  2. There was a clever girl in a quiet village.
  3. Once there was a lonely lion near a river.

---
pattern_id          : PAT-7-22
target_pattern      : One day, ... but ... / Suddenly, ...
grade               : 7
genre               : Narrative
cluster             : A — Creating Conflict
cefr_target         : A2
communicative_function : introducing a simple problem or unexpected event in a story
builds_on           : PAT-7-21
extends_to          : PAT-7-23
CP_reference        : mengembangkan cerita dengan peristiwa yang memunculkan konflik atau tantangan sederhana
forbidden_overlap   : recount sequencing, procedure steps, explanation of causes
example_output      :
  1. One day, the rabbit ran fast, but he got lost.
  2. Suddenly, the door opened.
  3. One day, the princess smiled, but her ring disappeared.

---
pattern_id          : PAT-7-23
target_pattern      : So, ... / Then, ... and ... / Finally, ...
grade               : 7
genre               : Narrative
cluster             : B — Solving the Story
cefr_target         : A2
communicative_function : resolving a simple conflict through connected story events
builds_on           : PAT-7-22
extends_to          : PAT-7-24
CP_reference        : menyusun rangkaian peristiwa menuju penyelesaian sederhana dalam teks naratif
forbidden_overlap   : procedure sequencing, recount chronology without conflict, factual reporting
example_output      :
  1. So, the rabbit found his friends.
  2. Then, the boy opened the box and found a key.
  3. Finally, the family lived together again.

---
pattern_id          : PAT-7-24
target_pattern      : In the end, ... / The character learned ... / Everyone felt ... because ...
grade               : 7
genre               : Narrative
cluster             : B — Closing the Story
cefr_target         : A2
communicative_function : concluding a story with a simple resolution and character response
builds_on           : PAT-7-23
extends_to          : PAT-8-01
CP_reference        : menutup teks naratif dengan penyelesaian yang menunjukkan perubahan, perasaan, atau pembelajaran tokoh secara sederhana
forbidden_overlap   : personal recount reflection, argumentative conclusion, factual summary
example_output      :
  1. In the end, the fox found a new friend.
  2. The character learned to share with others.
  3. Everyone felt happy because they helped each other.
---

---

## 7. Pattern Registry — Kelas 8

*Belum diisi. Target: 24 pattern (PAT-8-01 s/d PAT-8-24).*

### Genre: Interpersonal (PAT-8-01 s/d PAT-8-04)

---
pattern_id          : PAT-8-01
target_pattern      : I think ... because ... but ... / What do you think?
grade               : 8
genre               : Interpersonal
cluster             : A — Exchanging Views
cefr_target         : A2+
communicative_function : expressing and inviting more elaborated opinions with simple contrast
builds_on           : PAT-7-04
extends_to          : PAT-8-02
CP_reference        : bertukar pandangan dan menanggapi ide orang lain dengan alasan sederhana dalam interaksi sosial
forbidden_overlap   : formal argumentation, analytical exposition, debate claims
example_output      :
  1. I think online learning is useful because it is flexible, but I prefer studying in class. What do you think?
  2. I think this game is fun because everyone can join, but it takes a long time.
  3. I think the poster is clear because the pictures help, but the text is too small.

---
pattern_id          : PAT-8-02
target_pattern      : I prefer ... because ... / I'd rather ... than ...
grade               : 8
genre               : Interpersonal
cluster             : A — Expressing Preferences
cefr_target         : A2+
communicative_function : comparing alternatives and expressing personal preferences with simple justification
builds_on           : PAT-8-01
extends_to          : PAT-8-03
CP_reference        : membandingkan pilihan dan menjelaskan preferensi dalam percakapan sehari-hari
forbidden_overlap   : descriptive comparison, factual classification, formal evaluation
example_output      :
  1. I prefer reading because it helps me relax.
  2. I'd rather walk than take a bus.
  3. I prefer this book because the pictures are clearer.

---
pattern_id          : PAT-8-03
target_pattern      : How about ...? / We could ... / That's a good idea, but ...
grade               : 8
genre               : Interpersonal
cluster             : B — Negotiating Plans
cefr_target         : A2+
communicative_function : making, modifying, and responding to suggestions collaboratively
builds_on           : PAT-8-02
extends_to          : PAT-8-04
CP_reference        : bernegosiasi secara sederhana untuk mencapai kesepakatan dalam kegiatan bersama
forbidden_overlap   : giving procedures, direct commands, argumentative persuasion
example_output      :
  1. How about meeting after school?
  2. We could finish the poster first.
  3. That's a good idea, but I have basketball practice.

---
pattern_id          : PAT-8-04
target_pattern      : I agree that ... because ... / Maybe we should ... so ...
grade               : 8
genre               : Interpersonal
cluster             : B — Building Shared Decisions
cefr_target         : A2+
communicative_function : reaching simple agreement by combining opinion, reason, and proposed action
builds_on           : PAT-8-03
extends_to          : PAT-8-13
CP_reference        : membangun keputusan bersama melalui pertukaran pendapat, alasan, dan usulan sederhana
forbidden_overlap   : exposition with multiple arguments, formal recommendation, problem-solution exposition
example_output      :
  1. I agree that we should recycle because it keeps the school clean.
  2. Maybe we should start earlier so everyone can join.
  3. I agree that this plan is better because it saves time.
---

### Genre: Report (PAT-8-05 s/d PAT-8-08)

---
pattern_id          : PAT-8-05
target_pattern      : It is a kind of ... / It is used for ... / It usually ...
grade               : 8
genre               : Report
cluster             : A — Classifying Objects and Living Things
cefr_target         : A2+
communicative_function : classifying and reporting general factual information about an object, animal, or phenomenon
builds_on           : PAT-7-08
extends_to          : PAT-8-06
CP_reference        : menyampaikan informasi faktual umum melalui klasifikasi dan fungsi secara sederhana
forbidden_overlap   : personal description, opinion, narrative introduction
example_output      :
  1. A butterfly is a kind of insect. It usually has colorful wings.
  2. A thermometer is used for measuring temperature.
  3. Bamboo is a kind of plant. It grows very fast.

---
pattern_id          : PAT-8-06
target_pattern      : Most ... / Some ... / They usually ...
grade               : 8
genre               : Report
cluster             : A — Describing General Characteristics
cefr_target         : A2+
communicative_function : reporting general characteristics using simple generalization
builds_on           : PAT-8-05
extends_to          : PAT-8-07
CP_reference        : menyampaikan karakteristik umum berdasarkan fakta yang berlaku secara umum
forbidden_overlap   : specific event recount, personal preference, fictional narrative
example_output      :
  1. Most birds have feathers.
  2. Some plants grow in dry places.
  3. They usually live in groups.

---
pattern_id          : PAT-8-07
target_pattern      : It has ... which ... / It can ... to ...
grade               : 8
genre               : Report
cluster             : B — Explaining Features and Functions
cefr_target         : A2+
communicative_function : connecting factual features with their simple functions
builds_on           : PAT-8-06
extends_to          : PAT-8-08
CP_reference        : menghubungkan ciri dan fungsi dalam penyajian informasi faktual yang terorganisasi
forbidden_overlap   : procedural instructions, causal explanation, descriptive opinion
example_output      :
  1. A camel has long legs which help it walk in the desert.
  2. A computer can store information to help people work.
  3. A cactus has thick stems which keep water inside.

---
pattern_id          : PAT-8-08
target_pattern      : This happens because ... / This helps ... to ...
grade               : 8
genre               : Report
cluster             : B — Connecting Facts
cefr_target         : A2+
communicative_function : linking factual characteristics with simple reasons or effects within a report
builds_on           : PAT-8-07
extends_to          : PAT-8-09
CP_reference        : menyusun laporan sederhana dengan menghubungkan fakta, fungsi, dan hubungan logis secara eksplisit
forbidden_overlap   : process explanation with ordered stages, argumentation, personal reflection
example_output      :
  1. Polar bears have thick fur. This helps them stay warm.
  2. Bees visit flowers. This happens because they collect nectar.
  3. Mangrove roots spread widely. This helps the trees stay strong near the sea.
---

### Genre: Explanation (PAT-8-09 s/d PAT-8-12)

---
pattern_id          : PAT-8-09
target_pattern      : When ... , ... happens because ...
grade               : 8
genre               : Explanation
cluster             : A — Understanding Cause and Effect
cefr_target         : A2+
communicative_function : explaining simple causal relationships in natural or social processes
builds_on           : PAT-8-08
extends_to          : PAT-8-10
CP_reference        : menjelaskan bagaimana atau mengapa suatu peristiwa terjadi melalui hubungan sebab-akibat sederhana
forbidden_overlap   : giving instructions, reporting characteristics, expressing opinions
example_output      :
  1. When ice gets warm, it melts because the temperature rises.
  2. When people exercise, their hearts beat faster because the body needs more oxygen.
  3. When it rains a lot, rivers become full because more water flows into them.

---
pattern_id          : PAT-8-10
target_pattern      : First, ... Next, ... Then, ... Finally, ... (process explanation)
grade               : 8
genre               : Explanation
cluster             : A — Explaining Processes
cefr_target         : A2+
communicative_function : explaining a natural or system process through ordered stages
builds_on           : PAT-8-09
extends_to          : PAT-8-11
CP_reference        : menjelaskan tahapan suatu proses secara logis untuk membangun pemahaman, bukan instruksi tindakan
forbidden_overlap   : procedural commands, recount chronology, narrative events
example_output      :
  1. First, water evaporates. Next, it forms clouds. Then, the clouds become heavy. Finally, rain falls.
  2. First, food enters the stomach. Then, the body breaks it down. Finally, nutrients move into the blood.
  3. First, seeds absorb water. Next, they begin to grow. Finally, a small plant appears.

---
pattern_id          : PAT-8-11
target_pattern      : If ... , ... so ...
grade               : 8
genre               : Explanation
cluster             : B — Connecting Conditions and Results
cefr_target         : A2+
communicative_function : explaining how one condition leads to a predictable result
builds_on           : PAT-8-10
extends_to          : PAT-8-12
CP_reference        : menghubungkan kondisi, proses, dan hasil dalam penjelasan sederhana tentang fenomena atau sistem
forbidden_overlap   : giving advice, hypothetical opinions, procedural directions
example_output      :
  1. If plants do not get sunlight, they grow slowly so their leaves become weak.
  2. If people waste water, reservoirs become empty so clean water is harder to find.
  3. If bees disappear, many flowers cannot spread pollen so fewer fruits grow.

---
pattern_id          : PAT-8-12
target_pattern      : This process ... because ... As a result, ...
grade               : 8
genre               : Explanation
cluster             : B — Explaining Systems
cefr_target         : A2+
communicative_function : integrating process, cause, and result into a coherent factual explanation
builds_on           : PAT-8-11
extends_to          : PAT-8-13
CP_reference        : menyusun penjelasan sederhana yang menghubungkan mekanisme, sebab, dan akibat secara runtut dan logis
forbidden_overlap   : argumentative exposition, report classification, procedural instruction
example_output      :
  1. This process keeps the air clean because trees absorb carbon dioxide. As a result, the environment becomes healthier.
  2. This process happens because warm air rises. As a result, clouds begin to form.
  3. This process works because the battery provides energy. As a result, the lamp produces light.
---

### Genre: Exposition (PAT-8-13 s/d PAT-8-16)

---
pattern_id          : PAT-8-13
target_pattern      : I believe ... because ... For example, ...
grade               : 8
genre               : Exposition
cluster             : A — Stating a Position
cefr_target         : A2+
communicative_function : presenting a clear claim supported by a simple reason and example
builds_on           : PAT-8-04
extends_to          : PAT-8-14
CP_reference        : menyampaikan pendapat atau posisi dengan dukungan alasan dan contoh sederhana untuk meyakinkan audiens
forbidden_overlap   : interpersonal opinion exchange, factual report, process explanation
example_output      :
  1. I believe school gardens are important because they make the environment greener. For example, students can plant vegetables.
  2. I believe reading every day is useful because it improves vocabulary. For example, I learn new words from stories.
  3. I believe recycling should start at school because it reduces waste. For example, we can separate plastic bottles.

---
pattern_id          : PAT-8-14
target_pattern      : One reason is ... Another reason is ...
grade               : 8
genre               : Exposition
cluster             : A — Building Arguments
cefr_target         : A2+
communicative_function : organizing multiple supporting reasons for a single claim
builds_on           : PAT-8-13
extends_to          : PAT-8-15
CP_reference        : mengembangkan pendapat melalui beberapa alasan yang tersusun secara logis dan mudah diikuti
forbidden_overlap   : listing factual characteristics, chronological explanation, narrative sequencing
example_output      :
  1. One reason is that bicycles save energy. Another reason is that they reduce pollution.
  2. One reason is that teamwork finishes tasks faster. Another reason is that everyone can share ideas.
  3. One reason is that trees provide shade. Another reason is that they improve air quality.

---
pattern_id          : PAT-8-15
target_pattern      : Some people think ... However, I think ... because ...
grade               : 8
genre               : Exposition
cluster             : B — Responding to Different Views
cefr_target         : B1-
communicative_function : acknowledging an alternative view before presenting a supported position
builds_on           : PAT-8-14
extends_to          : PAT-8-16
CP_reference        : mempertimbangkan sudut pandang berbeda dan menyampaikan posisi sendiri dengan alasan yang jelas
forbidden_overlap   : debate rebuttal, argumentative refutation, interpersonal disagreement only
example_output      :
  1. Some people think homework is unnecessary. However, I think it helps students practice because they review the lesson.
  2. Some people think paper books are better. However, I think digital books are easier to carry.
  3. Some people think uniforms are uncomfortable. However, I think they create equality at school.

---
pattern_id          : PAT-8-16
target_pattern      : Therefore, I recommend ... because ...
grade               : 8
genre               : Exposition
cluster             : B — Making Recommendations
cefr_target         : B1-
communicative_function : concluding an exposition with a supported recommendation or call to action
builds_on           : PAT-8-15
extends_to          : PAT-9-01
CP_reference        : menyusun eksposisi sederhana yang berakhir dengan rekomendasi berdasarkan alasan yang telah dibangun sebelumnya
forbidden_overlap   : procedural instructions, narrative moral, explanation summary
example_output      :
  1. Therefore, I recommend bringing a reusable bottle because it reduces plastic waste.
  2. Therefore, I recommend reading every night because it builds good habits.
  3. Therefore, I recommend planting more trees because they make our school cooler.
---

### Genre: Narrative (PAT-8-17 s/d PAT-8-20)

---
pattern_id          : PAT-8-17
target_pattern      : Once ... , ... was ... who ... / Everyone believed ...
grade               : 8
genre               : Narrative
cluster             : A — Building Rich Story Worlds
cefr_target         : A2+
communicative_function : introducing characters, setting, and initial situation with richer background information
builds_on           : PAT-7-24
extends_to          : PAT-8-18
CP_reference        : membangun orientasi naratif dengan tokoh, latar, dan situasi awal yang lebih rinci serta saling berkaitan
forbidden_overlap   : factual report, descriptive classification, personal recount
example_output      :
  1. Once there was a quiet boy who lived near a dark forest.
  2. Everyone believed the old tree had a secret.
  3. Once a young fisherman found a strange shell by the sea.

---
pattern_id          : PAT-8-18
target_pattern      : Suddenly ... so ... but ...
grade               : 8
genre               : Narrative
cluster             : A — Developing Conflict
cefr_target         : A2+
communicative_function : developing a story through connected events, obstacles, and immediate consequences
builds_on           : PAT-8-17
extends_to          : PAT-8-19
CP_reference        : mengembangkan konflik melalui rangkaian peristiwa yang saling memengaruhi dalam teks naratif
forbidden_overlap   : explanation of cause-effect, procedure sequence, factual chronology
example_output      :
  1. Suddenly the bridge broke, so the children stopped, but the dog kept running.
  2. Suddenly the light disappeared, so everyone became quiet, but Maya walked forward.
  3. Suddenly the wind became stronger, so the boat moved away, but Ali stayed calm.

---
pattern_id          : PAT-8-19
target_pattern      : "..." said ... / "...," replied ... / The character decided to ...
grade               : 8
genre               : Narrative
cluster             : B — Character Response and Dialogue
cefr_target         : B1-
communicative_function : expressing character interaction and decision making through simple dialogue and response
builds_on           : PAT-8-18
extends_to          : PAT-8-20
CP_reference        : mengembangkan cerita melalui dialog sederhana dan respons tokoh terhadap konflik
forbidden_overlap   : interpersonal conversation, direct opinion exchange, drama script writing
example_output      :
  1. "Don't worry," said Rina. The boy smiled.
  2. "We can help," replied the villagers.
  3. The character decided to return the lost necklace.

---
pattern_id          : PAT-8-20
target_pattern      : In the end ... because ... / From that day on ... / The story shows ...
grade               : 8
genre               : Narrative
cluster             : B — Resolution and Reflection
cefr_target         : B1-
communicative_function : concluding a narrative with resolution, lasting change, and explicit story meaning
builds_on           : PAT-8-19
extends_to          : PAT-8-21
CP_reference        : menutup teks naratif dengan penyelesaian yang menunjukkan perubahan, dampak, dan makna cerita secara lebih utuh
forbidden_overlap   : exposition recommendation, recount reflection, argumentative conclusion
example_output      :
  1. In the end, the brothers became friends because they trusted each other.
  2. From that day on, the village celebrated the festival together.
  3. The story shows that kindness can change people's lives.
---

### Genre: Functional (PAT-8-21 s/d PAT-8-24)

---
pattern_id          : PAT-8-21
target_pattern      : Subject: ... / Hi ... / I'm writing to ... / See you soon.
grade               : 8
genre               : Functional
cluster             : A — Digital Communication
cefr_target         : A2+
communicative_function : composing short structured digital messages with clear purpose and closing
builds_on           : PAT-8-20
extends_to          : PAT-8-22
CP_reference        : menghasilkan teks fungsional sederhana dalam format komunikasi digital dengan tujuan dan struktur yang jelas
forbidden_overlap   : interpersonal conversation, narrative dialogue, exposition paragraph
example_output      :
  1. Subject: Study Group. Hi Dina, I'm writing to invite you to our study session. See you soon.
  2. Subject: Library Visit. Hi Everyone, I'm writing to remind you about tomorrow's visit.
  3. Subject: Class Project. Hi Team, I'm writing to share our meeting time.

---
pattern_id          : PAT-8-22
target_pattern      : Step 1: ... / Before ..., ... / After ..., ... / Remember to ...
grade               : 8
genre               : Functional
cluster             : A — Guided Instructions
cefr_target         : A2+
communicative_function : presenting contextualized operational instructions in organized functional formats
builds_on           : PAT-8-21
extends_to          : PAT-8-23
CP_reference        : menyusun petunjuk praktis yang terstruktur dan sesuai konteks penggunaan nyata
forbidden_overlap   : explanation of natural processes, procedure as generic genre, recount chronology
example_output      :
  1. Step 1: Scan the QR code. Before logging in, check your internet connection. Remember to save your password.
  2. After uploading your file, wait for the confirmation message.
  3. Before borrowing a book, prepare your student card.

---
pattern_id          : PAT-8-23
target_pattern      : Join us ... / Don't miss ... / You can ... because ...
grade               : 8
genre               : Functional
cluster             : B — Public Communication
cefr_target         : B1-
communicative_function : creating short promotional or informational texts for a public audience
builds_on           : PAT-8-22
extends_to          : PAT-8-24
CP_reference        : menghasilkan teks fungsional publik yang menggabungkan informasi, tujuan, dan ajakan secara efektif
forbidden_overlap   : exposition recommendation, interpersonal invitation, commercial advertisement analysis
example_output      :
  1. Join us at the Reading Festival. You can discover new books because local authors will be there.
  2. Don't miss the Science Fair this Friday.
  3. Join our Clean School Day and help make our environment better.

---
pattern_id          : PAT-8-24
target_pattern      : Title + key information + contact/action + additional note
grade               : 8
genre               : Functional
cluster             : B — Organizing Public Information
cefr_target         : B1-
communicative_function : organizing multiple pieces of practical information into a coherent functional text for diverse audiences
builds_on           : PAT-8-23
extends_to          : PAT-9-10
CP_reference        : mengintegrasikan berbagai informasi penting ke dalam teks fungsional yang terstruktur, ringkas, dan mudah digunakan
forbidden_overlap   : presentation speech, argumentative exposition, narrative summary
example_output      :
  1. School Recycling Drive | Saturday, 8 a.m. | Register at Room 5 | Bring reusable bags.
  2. English Camp | July 15–16 | Contact Ms. Rina | Limited seats available.
  3. Community Book Swap | Library Hall | Free Entry | Exchange at least one book.
---

---

## 8. Pattern Registry — Kelas 9

*Belum diisi. Target: 18 pattern (PAT-9-01 s/d PAT-9-18).*

### Cluster: Argumentative Communication (PAT-9-01 s/d PAT-9-03)

---
pattern_id          : PAT-9-01
target_pattern      : I believe ... because ... One reason is ... For example, ... Therefore, I recommend ...
grade               : 9
genre               : Argumentative Communication
cluster             : Transition Cluster 1
cefr_target         : B1
communicative_function : presenting a complete position supported by organized reasons, examples, and a recommendation
builds_on           : PAT-8-16, PAT-8-13, PAT-8-14
extends_to          : PAT-9-02
CP_reference        : menyampaikan posisi secara logis dengan alasan, contoh, dan rekomendasi yang saling mendukung dalam komunikasi lisan maupun tulis
forbidden_overlap   : exposition with a single reason only, factual report, explanation of processes
example_output      :
  1. I believe students should read every day because it improves vocabulary. One reason is that books introduce new words. For example, short stories teach useful expressions. Therefore, I recommend reading for twenty minutes every evening.
  2. I believe school gardens are important because they create better learning spaces. One reason is that they make the environment cooler. For example, students can study outside. Therefore, I recommend planting more trees.
  3. I believe teamwork should be part of every project because students learn from each other. One reason is that everyone contributes different ideas. For example, our science project improved after discussion. Therefore, I recommend working in small groups.

---
pattern_id          : PAT-9-02
target_pattern      : Some people think ... However, I believe ... because ... One reason is ... For example, ... Therefore ...
grade               : 9
genre               : Argumentative Communication
cluster             : Transition Cluster 1
cefr_target         : B1
communicative_function : acknowledging an alternative position while defending a supported personal stance
builds_on           : PAT-8-15, PAT-8-14, PAT-8-16, PAT-8-01
extends_to          : PAT-9-03
CP_reference        : mempertimbangkan sudut pandang berbeda serta mempertahankan posisi melalui alasan dan bukti sederhana yang terorganisasi
forbidden_overlap   : interpersonal disagreement, exposition without counterpoint, debate rebuttal requiring formal evidence
example_output      :
  1. Some people think homework should be removed. However, I believe it is useful because it builds responsibility. One reason is that students review lessons. For example, I remember new vocabulary better. Therefore, homework should stay.
  2. Some people think digital books are enough. However, I believe printed books are still important because they reduce screen time. One reason is that reading feels more comfortable. Therefore, schools should keep both options.
  3. Some people think uniforms are unnecessary. However, I believe they create equality because everyone looks the same. For example, students focus more on learning. Therefore, uniforms are still valuable.

---
pattern_id          : PAT-9-03
target_pattern      : I believe ... because ... One reason is ... Another reason is ... Some people think ... However, ... For example, ... Therefore, I recommend ...
grade               : 9
genre               : Argumentative Communication
cluster             : Transition Cluster 1
cefr_target         : B1
communicative_function : constructing an integrated argumentative performance combining claim, multiple reasons, counter-argument, evidence, and recommendation
builds_on           : PAT-8-13, PAT-8-14, PAT-8-15, PAT-8-16, PAT-8-04
extends_to          : PAT-9-04
CP_reference        : membangun argumen yang utuh melalui integrasi posisi, alasan, sudut pandang alternatif, contoh, dan rekomendasi dalam satu kesatuan komunikasi
forbidden_overlap   : exposition with linear support only, review text, analytical essay requiring external evidence
example_output      :
  1. I believe students should limit phone use at school because it improves concentration. One reason is that they pay more attention. Another reason is that discussions become more active. Some people think phones help learning. However, face-to-face interaction is more effective for many activities. For example, group projects work better without distractions. Therefore, I recommend using phones only when teachers ask for them.
  2. I believe every class should recycle because it reduces waste. One reason is that plastic can be reused. Another reason is that students learn responsibility. Some people think recycling takes too much time. However, simple sorting only takes a few minutes. Therefore, I recommend placing recycling bins in every classroom.
  3. I believe reading clubs should be expanded because they improve communication skills. One reason is that students share ideas. Another reason is that they learn new vocabulary. Some people think clubs reduce study time. However, they support learning in meaningful ways. Therefore, I recommend starting a weekly reading club.
---

### Cluster: Review (PAT-9-04 s/d PAT-9-06)

---
pattern_id          : PAT-9-04
target_pattern      : It is ... and ... I think ... because ...
grade               : 9
genre               : Review
cluster             : Transition Cluster 2
cefr_target         : B1
communicative_function : describing an object or experience and giving an initial evaluative response
builds_on           : PAT-9-03, PAT-7-06, PAT-8-13
extends_to          : PAT-9-05
CP_reference        : menyampaikan ulasan sederhana dengan menggabungkan deskripsi dan penilaian awal berdasarkan pengalaman atau pengamatan
forbidden_overlap   : descriptive report without evaluation, personal recount without judgment, argumentative persuasion
example_output      :
  1. The movie is exciting and funny. I think it is worth watching because the story is easy to follow.
  2. The museum is clean and interactive. I think it is interesting because visitors can try many activities.
  3. The app is simple but useful. I think it helps students learn faster.

---
pattern_id          : PAT-9-05
target_pattern      : I believe ... because ... One strength is ... However, ...
grade               : 9
genre               : Review
cluster             : Transition Cluster 2
cefr_target         : B1
communicative_function : evaluating strengths and limitations while maintaining a balanced judgment
builds_on           : PAT-8-13, PAT-8-15, PAT-7-15
extends_to          : PAT-9-06
CP_reference        : memberikan evaluasi yang mempertimbangkan kelebihan dan kekurangan disertai alasan yang jelas
forbidden_overlap   : exposition defending a public issue, factual report, narrative reflection
example_output      :
  1. I believe this novel is enjoyable because the characters feel real. One strength is the dialogue. However, the ending is too short.
  2. I believe the science exhibition is useful because students can learn by doing. One strength is the variety of projects. However, some explanations are difficult.
  3. I believe this learning app is effective because it gives quick feedback. One strength is the simple design. However, it needs more practice activities.

---
pattern_id          : PAT-9-06
target_pattern      : It is ... I believe ... because ... One strength is ... However, ... Therefore, I recommend ...
grade               : 9
genre               : Review
cluster             : Transition Cluster 2
cefr_target         : B1
communicative_function : producing a complete review integrating description, evaluation, balanced judgment, and recommendation
builds_on           : PAT-7-06, PAT-8-13, PAT-8-15, PAT-8-16, PAT-9-05
extends_to          : PAT-9-07
CP_reference        : menghasilkan ulasan utuh yang mengintegrasikan deskripsi, evaluasi, pertimbangan, dan rekomendasi secara koheren
forbidden_overlap   : argumentative essay on public issues, neutral report, promotional advertisement
example_output      :
  1. The documentary is informative and engaging. I believe it is worth watching because it explains real problems clearly. One strength is the visual presentation. However, some parts are too fast. Therefore, I recommend it for junior high students.
  2. The city park is clean and comfortable. I believe it is a great place to visit because families can enjoy many activities. One strength is the large green area. However, there are not enough benches. Therefore, I recommend visiting in the morning.
  3. The reading app is simple but effective. I believe it improves vocabulary because it provides daily practice. One strength is the interactive quiz. However, it requires internet access. Therefore, I recommend it for regular English practice.
---

### Cluster: Presentation (PAT-9-07 s/d PAT-9-09)

---
pattern_id          : PAT-9-07
target_pattern      : Good morning ... My name is ... Today I would like to present ... The purpose of this presentation is ...
grade               : 9
genre               : Presentation
cluster             : Transition Cluster 3
cefr_target         : B1
communicative_function : opening a presentation by greeting the audience, introducing the speaker, and establishing a clear presentation purpose
builds_on           : PAT-7-01, PAT-8-21
extends_to          : PAT-9-08
CP_reference        : menyampaikan pembukaan presentasi yang terstruktur melalui sapaan, identitas pembicara, topik, dan tujuan presentasi
forbidden_overlap   : interpersonal self-introduction, email opening, casual greeting
example_output      :
  1. Good morning, everyone. My name is Dinda. Today I would like to present my review of a reading app. The purpose of this presentation is to explain why I recommend it.
  2. Hello, teachers and friends. I'm Arga. Today I would like to present our recycling project. The purpose of this presentation is to share our results.
  3. Good afternoon. My name is Riko. Today I would like to present my opinion about school gardens. The purpose of this presentation is to encourage more students to join the program.

---
pattern_id          : PAT-9-08
target_pattern      : First, ... Next, ... Another point is ... Finally, ... Based on this, ...
grade               : 9
genre               : Presentation
cluster             : Transition Cluster 3
cefr_target         : B1
communicative_function : organizing information, arguments, or reviews into a coherent spoken presentation with explicit transitions
builds_on           : PAT-8-10, PAT-9-06, PAT-9-03
extends_to          : PAT-9-09
CP_reference        : menyampaikan isi presentasi melalui pengorganisasian beberapa gagasan utama yang saling terhubung secara logis
forbidden_overlap   : explanation process only, procedure instructions, narrative event sequence
example_output      :
  1. First, I will describe the application. Next, I will explain its strengths. Another point is its weaknesses. Finally, I will give my recommendation. Based on this, I think it is useful for students.
  2. First, I will introduce the problem. Next, I will explain two reasons. Another point is a different opinion. Finally, I will share my recommendation. Based on this, our idea is practical.
  3. First, I will review the book. Next, I will discuss the characters. Another point is the message of the story. Finally, I will explain my evaluation. Based on this, I recommend reading it.

---
pattern_id          : PAT-9-09
target_pattern      : In conclusion, ... Therefore, ... Thank you for listening. Do you have any questions? That's an interesting question ...
grade               : 9
genre               : Presentation
cluster             : Transition Cluster 3
cefr_target         : B1
communicative_function : concluding a presentation, reinforcing the main message, and interacting with the audience through question-and-answer exchange
builds_on           : PAT-8-03, PAT-8-16, PAT-8-21, PAT-9-08
extends_to          : PAT-9-10
CP_reference        : menutup presentasi dengan merangkum gagasan utama, menyampaikan penegasan akhir, dan merespons audiens secara komunikatif
forbidden_overlap   : argumentative rebuttal, exposition recommendation only, interpersonal discussion
example_output      :
  1. In conclusion, the reading app is simple and effective. Therefore, I recommend it for junior high students. Thank you for listening. Do you have any questions?
  2. In conclusion, our recycling project reduced plastic waste. Therefore, we should continue it next semester. That's an interesting question. We measured the results every week.
  3. In conclusion, the book teaches teamwork and responsibility. Therefore, I recommend it for young readers. Thank you for listening. I'd be happy to answer your questions.
---

### Cluster: Information Synthesis (PAT-9-10 s/d PAT-9-12)

---
pattern_id          : PAT-9-10
target_pattern      : Source A says ... Source B says ... Together, they show ...
grade               : 9
genre               : Information Synthesis
cluster             : Transition Cluster 4
cefr_target         : B1
communicative_function : combining information from two different sources into one coherent understanding
builds_on           : PAT-8-24, PAT-9-09, PAT-8-05
extends_to          : PAT-9-11
CP_reference        : mengintegrasikan informasi dari lebih dari satu sumber untuk membangun pemahaman yang lebih utuh terhadap suatu topik
forbidden_overlap   : report from a single source, presentation summary, factual listing without integration
example_output      :
  1. Source A says bicycles reduce pollution. Source B says they improve health. Together, they show that cycling benefits both people and the environment.
  2. Source A says mangroves protect beaches. Source B says they provide habitats for animals. Together, they show the importance of mangrove forests.
  3. Source A says reading improves vocabulary. Source B says reading develops imagination. Together, they show why reading is an important habit.

---
pattern_id          : PAT-9-11
target_pattern      : Both sources ... However, Source A ... while Source B ... Therefore ...
grade               : 9
genre               : Information Synthesis
cluster             : Transition Cluster 4
cefr_target         : B1
communicative_function : identifying similarities and differences across sources to build a comparative understanding
builds_on           : PAT-9-10, PAT-8-06, PAT-8-08
extends_to          : PAT-9-12
CP_reference        : membandingkan informasi dari berbagai sumber untuk menemukan persamaan, perbedaan, dan hubungan antargagasan
forbidden_overlap   : argumentative counter-argument, review evaluation, descriptive comparison without synthesis
example_output      :
  1. Both sources support recycling. However, Source A focuses on the environment while Source B focuses on saving money. Therefore, recycling has multiple benefits.
  2. Both sources explain healthy eating. However, Source A discusses nutrition while Source B discusses daily habits. Therefore, a healthy lifestyle needs both knowledge and practice.
  3. Both sources describe online learning. However, Source A highlights flexibility while Source B highlights interaction. Therefore, both aspects should be considered.

---
pattern_id          : PAT-9-12
target_pattern      : Based on these sources ... This suggests ... Therefore ...
grade               : 9
genre               : Information Synthesis
cluster             : Transition Cluster 4
cefr_target         : B1
communicative_function : constructing a new evidence-based conclusion by integrating multiple related sources
builds_on           : PAT-9-10, PAT-9-11, PAT-8-12, PAT-8-24
extends_to          : PAT-9-13
CP_reference        : menyusun pemahaman baru melalui sintesis beberapa sumber dengan menghubungkan fakta, proses, dan hubungan logis menjadi satu kesimpulan yang koheren
forbidden_overlap   : report summary, exposition recommendation without synthesis, presentation conclusion
example_output      :
  1. Based on these sources, regular exercise and healthy food improve well-being. This suggests that small daily habits create long-term benefits. Therefore, students should build healthy routines.
  2. Based on these sources, trees reduce heat and improve air quality. This suggests that green spaces support healthier cities. Therefore, planting more trees is important.
  3. Based on these sources, digital books increase access while printed books improve focus. This suggests that both formats have unique advantages. Therefore, schools should provide both options.
---

### Cluster: Problem & Solution (PAT-9-13 s/d PAT-9-15)

---
pattern_id          : PAT-9-13
target_pattern      : The problem is ... because ... As a result, ...
grade               : 9
genre               : Problem & Solution
cluster             : Transition Cluster 5
cefr_target         : B1
communicative_function : identifying a problem and explaining its causes and consequences clearly
builds_on           : PAT-9-12, PAT-8-09, PAT-8-08
extends_to          : PAT-9-14
CP_reference        : mengidentifikasi permasalahan serta menjelaskan hubungan sebab-akibat yang melatarbelakangi dan dampaknya secara logis
forbidden_overlap   : explanation of neutral processes, factual report, argumentative opinion without a defined problem
example_output      :
  1. The problem is that many students throw away plastic bottles because recycling bins are difficult to find. As a result, the school becomes dirtier.
  2. The problem is that many teenagers sleep late because they use their phones for too long. As a result, they feel tired in class.
  3. The problem is that the library is often empty because students do not know about new books. As a result, many resources are unused.

---
pattern_id          : PAT-9-14
target_pattern      : To solve this problem, ... If ... , ... so ... This will help ...
grade               : 9
genre               : Problem & Solution
cluster             : Transition Cluster 5
cefr_target         : B1
communicative_function : proposing a practical solution and explaining how it produces positive results
builds_on           : PAT-7-12, PAT-8-11, PAT-9-13
extends_to          : PAT-9-15
CP_reference        : mengusulkan solusi yang dapat dilaksanakan serta menjelaskan mekanisme dan hasil yang diharapkan secara runtut
forbidden_overlap   : procedure instructions only, explanation without intervention, recommendation without implementation
example_output      :
  1. To solve this problem, we should place recycling bins in every classroom. If students can recycle easily, they will separate their waste, so the school will become cleaner. This will help reduce plastic pollution.
  2. To solve this problem, students should create a study schedule. If they manage their time well, they will finish homework earlier, so they can sleep on time. This will help improve concentration.
  3. To solve this problem, the library can share book recommendations every week. If students receive new information, they will visit more often, so reading habits will improve. This will help increase library use.

---
pattern_id          : PAT-9-15
target_pattern      : The problem is ... To solve it, ... This solution works because ... As a result, ... Therefore, ...
grade               : 9
genre               : Problem & Solution
cluster             : Transition Cluster 5
cefr_target         : B1
communicative_function : presenting a complete problem-solution performance integrating diagnosis, intervention, justification, expected impact, and evaluation
builds_on           : PAT-9-13, PAT-9-14, PAT-8-11, PAT-9-12
extends_to          : PAT-9-16
CP_reference        : menyusun solusi yang utuh melalui integrasi identifikasi masalah, tindakan perbaikan, penjelasan mekanisme, dampak yang diharapkan, dan evaluasi sederhana
forbidden_overlap   : argumentative recommendation without problem analysis, explanation text, procedural guide
example_output      :
  1. The problem is that students waste too much paper. To solve it, each class should prepare a recycling box. This solution works because paper can be collected and reused. As a result, less waste will be produced. Therefore, every class should join the program.
  2. The problem is that many students arrive late. To solve it, the school can send reminder messages every morning. This solution works because students remember the schedule. As a result, punctuality will improve. Therefore, the program should continue.
  3. The problem is that the school garden is neglected. To solve it, each class can take care of one area. This solution works because responsibility is shared. As a result, the garden will become healthier. Therefore, this plan is practical for everyone.
---

### Cluster: Reflection (PAT-9-16 s/d PAT-9-18)

---
pattern_id          : PAT-9-16
target_pattern      : I learned ... because ... From this experience, I realized ...
grade               : 9
genre               : Reflection
cluster             : Transition Cluster 6
cefr_target         : B1
communicative_function : reflecting on learning experiences and constructing personal meaning from them
builds_on           : PAT-7-16, PAT-7-15, PAT-9-15
extends_to          : PAT-9-17
CP_reference        : mengevaluasi pengalaman belajar dengan menghubungkan peristiwa, pembelajaran yang diperoleh, dan makna pribadi secara reflektif
forbidden_overlap   : recount of events only, narrative resolution, argumentative conclusion
example_output      :
  1. I learned that planning is important because our project became more organized. From this experience, I realized that good preparation saves time.
  2. I learned new vocabulary because I read every day. From this experience, I realized that small habits create big progress.
  3. I learned to listen to different ideas because group discussions helped me understand others better.

---
pattern_id          : PAT-9-17
target_pattern      : At first, ... However, ... I overcame it by ... Now I can ...
grade               : 9
genre               : Reflection
cluster             : Transition Cluster 6
cefr_target         : B1
communicative_function : reflecting on challenges, strategies, and personal growth through self-evaluation
builds_on           : PAT-7-15, PAT-8-20, PAT-9-15
extends_to          : PAT-9-18
CP_reference        : merefleksikan tantangan yang dihadapi, strategi yang digunakan, serta perkembangan diri yang dicapai melalui pengalaman belajar
forbidden_overlap   : problem-solution proposal, narrative conflict, explanation of processes
example_output      :
  1. At first, I was afraid to speak English. However, I practiced every week. I overcame it by joining group discussions. Now I can speak more confidently.
  2. At first, I found presentations difficult. However, I prepared carefully and practiced with my friends. Now I can explain my ideas clearly.
  3. At first, I depended on my teacher. However, I learned to study independently. Now I can organize my own learning.

---
pattern_id          : PAT-9-18
target_pattern      : Looking back, ... I have learned ... In the future, I will ... because ... I am ready to ...
grade               : 9
genre               : Reflection
cluster             : Transition Cluster 6
cefr_target         : B1
communicative_function : integrating past learning, present identity, and future goals into a coherent personal reflection
builds_on           : PAT-7-16, PAT-8-20, PAT-9-16, PAT-9-17
extends_to          : FASE-E
CP_reference        : menyusun refleksi utuh yang mengintegrasikan pengalaman, pembelajaran, perkembangan diri, dan kesiapan menghadapi tahap pembelajaran berikutnya secara mandiri
forbidden_overlap   : recount timeline, narrative ending, exposition recommendation
example_output      :
  1. Looking back, I have learned that making mistakes is part of learning. In the future, I will keep practicing English because every conversation helps me improve. I am ready to learn in senior high school.
  2. Looking back, I have learned to express my ideas, listen to others, and solve problems together. In the future, I will use these skills to explore new challenges. I am ready to become a more independent learner.
  3. Looking back, I have learned much more than vocabulary and grammar. I have learned confidence, curiosity, and responsibility. In the future, I will continue learning because communication opens new opportunities. I am ready for senior high school and new English challenges.
---

---

## 9. Index Pattern

Index lengkap 66 pattern FLAF Fase D, terurut dari ROOT
hingga jembatan ke Fase E.

| Pattern ID | Target Pattern (ringkas) | Grade | Genre/Cluster | builds_on | extends_to |
|------------|---------------------------|-------|---------------|-----------|------------|
| PAT-7-01 | I am / I like / I can ... | 7 | Interpersonal | ROOT | PAT-7-02 |
| PAT-7-02 | Do you...? / Can you...? | 7 | Interpersonal | PAT-7-01 | PAT-7-03 |
| PAT-7-03 | Let's... / Shall we...? | 7 | Interpersonal | PAT-7-02 | PAT-7-04 |
| PAT-7-04 | I think... because... | 7 | Interpersonal | PAT-7-03 | PAT-8-01 |
| PAT-7-05 | It is / It has / It looks... | 7 | Descriptive | PAT-7-04 | PAT-7-06 |
| PAT-7-06 | It is + adj + and/but + adj | 7 | Descriptive | PAT-7-05 | PAT-7-07 |
| PAT-7-07 | There is / There are... | 7 | Descriptive | PAT-7-06 | PAT-7-08 |
| PAT-7-08 | It is + adj + for/to... | 7 | Descriptive | PAT-7-07 | PAT-8-05 |
| PAT-7-09 | First,... Then,... Finally,... | 7 | Procedure | PAT-7-08 | PAT-7-10 |
| PAT-7-10 | Verb + object + place/time | 7 | Procedure | PAT-7-09 | PAT-7-11 |
| PAT-7-11 | Don't... / Be... / Always... | 7 | Procedure | PAT-7-10 | PAT-7-12 |
| PAT-7-12 | If you want to..., Use... to... | 7 | Procedure | PAT-7-11 | PAT-8-09 |
| PAT-7-13 | Yesterday,... / Last...,... | 7 | Recount | PAT-7-09 | PAT-7-14 |
| PAT-7-14 | ...past action + and/then... | 7 | Recount | PAT-7-13 | PAT-7-15 |
| PAT-7-15 | It was + adj + because... | 7 | Recount | PAT-7-14 | PAT-7-16 |
| PAT-7-16 | At the end,... / I learned... | 7 | Recount | PAT-7-15 | PAT-8-13 |
| PAT-7-17 | Please... / Please don't... | 7 | Functional | PAT-7-11 | PAT-7-18 |
| PAT-7-18 | Time/Date + event + place | 7 | Functional | PAT-7-17 | PAT-7-19 |
| PAT-7-19 | Name:... / Class:... / Number:... | 7 | Functional | PAT-7-18 | PAT-7-20 |
| PAT-7-20 | Notice:... / No.../Keep.../Use... | 7 | Functional | PAT-7-19 | PAT-8-17 |
| PAT-7-21 | Once there was... + character | 7 | Narrative | PAT-7-05 | PAT-7-22 |
| PAT-7-22 | One day,... but.../Suddenly,... | 7 | Narrative | PAT-7-21 | PAT-7-23 |
| PAT-7-23 | So,.../Then,... and.../Finally,... | 7 | Narrative | PAT-7-22 | PAT-7-24 |
| PAT-7-24 | In the end,... Everyone felt... | 7 | Narrative | PAT-7-23 | PAT-8-01 |
| PAT-8-01 | I think... but... What do you think? | 8 | Interpersonal | PAT-7-04 | PAT-8-02 |
| PAT-8-02 | I prefer... because... / I'd rather... | 8 | Interpersonal | PAT-8-01 | PAT-8-03 |
| PAT-8-03 | How about...? / We could... | 8 | Interpersonal | PAT-8-02 | PAT-8-04 |
| PAT-8-04 | I agree that... / Maybe we should... | 8 | Interpersonal | PAT-8-03 | PAT-8-13 |
| PAT-8-05 | It is a kind of.../used for... | 8 | Report | PAT-7-08 | PAT-8-06 |
| PAT-8-06 | Most.../Some.../They usually... | 8 | Report | PAT-8-05 | PAT-8-07 |
| PAT-8-07 | It has... which.../It can... to... | 8 | Report | PAT-8-06 | PAT-8-08 |
| PAT-8-08 | This happens because.../helps...to... | 8 | Report | PAT-8-07 | PAT-8-09 |
| PAT-8-09 | When...,... happens because... | 8 | Explanation | PAT-8-08 | PAT-8-10 |
| PAT-8-10 | First,...Next,...Then,...Finally,... (process) | 8 | Explanation | PAT-8-09 | PAT-8-11 |
| PAT-8-11 | If...,... so... | 8 | Explanation | PAT-8-10 | PAT-8-12 |
| PAT-8-12 | This process... because... As a result,... | 8 | Explanation | PAT-8-11 | PAT-8-13 |
| PAT-8-13 | I believe... because... For example,... | 8 | Exposition | PAT-8-04 | PAT-8-14 |
| PAT-8-14 | One reason is... Another reason is... | 8 | Exposition | PAT-8-13 | PAT-8-15 |
| PAT-8-15 | Some people think... However, I think... | 8 | Exposition | PAT-8-14 | PAT-8-16 |
| PAT-8-16 | Therefore, I recommend... because... | 8 | Exposition | PAT-8-15 | PAT-9-01 |
| PAT-8-17 | Once...,... was... who.../Everyone believed... | 8 | Narrative | PAT-7-24 | PAT-8-18 |
| PAT-8-18 | Suddenly... so... but... | 8 | Narrative | PAT-8-17 | PAT-8-19 |
| PAT-8-19 | "..." said.../"...," replied... | 8 | Narrative | PAT-8-18 | PAT-8-20 |
| PAT-8-20 | In the end... because.../The story shows... | 8 | Narrative | PAT-8-19 | PAT-8-21 |
| PAT-8-21 | Subject:.../Hi.../I'm writing to... | 8 | Functional | PAT-8-20 | PAT-8-22 |
| PAT-8-22 | Step 1:.../Before,.../After,.../Remember to... | 8 | Functional | PAT-8-21 | PAT-8-23 |
| PAT-8-23 | Join us.../Don't miss.../You can...because... | 8 | Functional | PAT-8-22 | PAT-8-24 |
| PAT-8-24 | Title + key info + contact/action + note | 8 | Functional | PAT-8-23 | PAT-9-10 |
| PAT-9-01 | I believe...because...One reason is...Therefore, I recommend... | 9 | Argumentative Communication | PAT-8-16, PAT-8-13, PAT-8-14 | PAT-9-02 |
| PAT-9-02 | Some people think...However, I believe...because... | 9 | Argumentative Communication | PAT-8-15, PAT-8-14, PAT-8-16, PAT-8-01 | PAT-9-03 |
| PAT-9-03 | I believe...One reason...Another reason...Some people think...However...Therefore, I recommend... | 9 | Argumentative Communication | PAT-8-13, PAT-8-14, PAT-8-15, PAT-8-16, PAT-8-04 | PAT-9-04 |
| PAT-9-04 | It is...and... I think...because... | 9 | Review | PAT-9-03, PAT-7-06, PAT-8-13 | PAT-9-05 |
| PAT-9-05 | I believe...because...One strength is...However,... | 9 | Review | PAT-8-13, PAT-8-15, PAT-7-15 | PAT-9-06 |
| PAT-9-06 | It is...I believe...One strength...However...Therefore, I recommend... | 9 | Review | PAT-7-06, PAT-8-13, PAT-8-15, PAT-8-16, PAT-9-05 | PAT-9-07 |
| PAT-9-07 | Good morning...My name is...Today I would like to present... | 9 | Presentation | PAT-7-01, PAT-8-21 | PAT-9-08 |
| PAT-9-08 | First,...Next,...Another point is...Finally,...Based on this,... | 9 | Presentation | PAT-8-10, PAT-9-06, PAT-9-03 | PAT-9-09 |
| PAT-9-09 | In conclusion,...Therefore,...Thank you for listening. Do you have any questions? | 9 | Presentation | PAT-8-03, PAT-8-16, PAT-8-21, PAT-9-08 | PAT-9-10 |
| PAT-9-10 | Source A says...Source B says...Together, they show... | 9 | Information Synthesis | PAT-8-24, PAT-9-09, PAT-8-05 | PAT-9-11 |
| PAT-9-11 | Both sources...However, Source A...while Source B...Therefore... | 9 | Information Synthesis | PAT-9-10, PAT-8-06, PAT-8-08 | PAT-9-12 |
| PAT-9-12 | Based on these sources...This suggests...Therefore... | 9 | Information Synthesis | PAT-9-10, PAT-9-11, PAT-8-12, PAT-8-24 | PAT-9-13 |
| PAT-9-13 | The problem is...because...As a result,... | 9 | Problem & Solution | PAT-9-12, PAT-8-09, PAT-8-08 | PAT-9-14 |
| PAT-9-14 | To solve this problem,...If...,... so...This will help... | 9 | Problem & Solution | PAT-7-12, PAT-8-11, PAT-9-13 | PAT-9-15 |
| PAT-9-15 | The problem is...To solve it,...This solution works because...As a result,...Therefore,... | 9 | Problem & Solution | PAT-9-13, PAT-9-14, PAT-8-11, PAT-9-12 | PAT-9-16 |
| PAT-9-16 | I learned...because...From this experience, I realized... | 9 | Reflection | PAT-7-16, PAT-7-15, PAT-9-15 | PAT-9-17 |
| PAT-9-17 | At first,...However,...I overcame it by...Now I can... | 9 | Reflection | PAT-7-15, PAT-8-20, PAT-9-15 | PAT-9-18 |
| PAT-9-18 | Looking back,...I have learned...In the future, I will...because...I am ready to... | 9 | Reflection | PAT-7-16, PAT-8-20, PAT-9-16, PAT-9-17 | FASE-E |

---

## Penutup

Dokumen ini merupakan **dokumen operasional** FLAF Fase D.

Seluruh TP, schema, dan generator wajib merujuk ke Pattern
Registry ini. Pattern yang tidak terdaftar di registry tidak
boleh menjadi target pattern dalam TP manapun.

Jika terjadi konflik antara Pattern Registry dengan TP atau
generator, Pattern Registry menjadi acuan utama sampai
dilakukan revisi versi resmi.
