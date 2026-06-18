const skenario = {
  "persiapan": {
    "papan_tulis": "In conclusion, ___.\nTherefore, ___.\nThank you for listening. Do you have any questions?\nThat's an interesting question. ___.",
    "kartu": "Siapkan tiga kartu di meja guru — kartu kerangka urutan penutup lima slot (SUMMARY / RECOMMENDATION / THANK YOU / INVITE QUESTIONS / RESPOND), kartu perbandingan penutup paralel (penutup email \"See you soon, Dito and Wulan\" di sebelah penutup presentasi \"Thank you for listening. Do you have any questions?\"), dan kartu setup simulasi tanya jawab (satu siswa di depan, yang lain memegang kartu pertanyaan).",
    "instruksi": []
  },
  "siapkan_kelas": {
    "settling": [
      {
        "tipe": "AKSI",
        "teks": "Berdiri di depan kelas."
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu kelas kondusif sebelum memulai."
      },
      {
        "tipe": "UCAP",
        "teks": "Welcome back, everyone. Let us bring all our focus to the front."
      }
    ],
    "hook": [
      {
        "tipe": "UCAP",
        "teks": "You have opened your presentation. You have presented your main points. Now, what is left?"
      },
      {
        "tipe": "AKSI",
        "teks": "Beri jeda singkat — biarkan siswa menjawab. Jika tidak ada respons dalam lima detik — tunjuk satu siswa dan minta pendapatnya."
      },
      {
        "tipe": "AKSI",
        "teks": "Tampilkan kartu kerangka urutan penutup — tunjuk setiap slot: SUMMARY, RECOMMENDATION, THANK YOU, INVITE QUESTIONS, RESPOND."
      },
      {
        "tipe": "UCAP",
        "teks": "And after the closing, the audience gets to ask you questions. Are you prepared to respond?"
      },
      {
        "tipe": "AKSI",
        "teks": "Tunggu respons singkat dari dua atau tiga siswa — lanjutkan."
      },
      {
        "tipe": "AKSI",
        "teks": "Angguk — lalu letakkan kartu di meja guru."
      },
      {
        "tipe": "UCAP",
        "teks": "Let us now see how to close a formal presentation and handle audience questions."
      }
    ]
  },
  "langkah": {
    "model": {
      "durasi_menit": 6,
      "intro": "Siswa hanya menonton dan mendengarkan — belum diminta melakukan apapun.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Ambil kartu kerangka urutan penutup — satukan kedua tangan perlahan."
        },
        {
          "tipe": "UCAP",
          "teks": "In conclusion, the old storage room holds important pieces of our school's heritage that have been forgotten for decades and deserve to be shared with everyone."
        },
        {
          "tipe": "UCAP",
          "teks": "Therefore, I recommend that the school create a small heritage display in the main corridor so all students can learn about this part of their school's history."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu kerangka — bungkuk sedikit ke arah audiens."
        },
        {
          "tipe": "UCAP",
          "teks": "Thank you for listening to our presentation. Do you have any questions?"
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan kartu — angkat kartu setup simulasi tanya jawab. Miringkan kepala dan angguk penuh perhatian."
        },
        {
          "tipe": "UCAP",
          "teks": "That's an interesting question. I think the school should open the storage room for more community discussion about how to best preserve and share these items."
        },
        {
          "tipe": "AKSI",
          "teks": "Letakkan semua kartu."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "AKSI",
          "teks": "Angguk kepada seluruh kelas dan angkat kedua tangan sebagai isyarat bahwa langkah berikutnya adalah REPEAT."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa mulai ikut berbicara sebelum waktunya — angkat telapak tangan ke arah mereka dan ucapkan \"Please observe first.\""
        }
      ],
      "diferensiasi": null
    },
    "repeat": {
      "durasi_menit": 5,
      "intro": "Guru mengucapkan satu kalimat — siswa menirukan bersama. Satu putaran per kalimat. Kartu dan gesture tetap digunakan.",
      "kalimat": [
        {
          "label": "Kalimat 1",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat kartu kerangka urutan penutup — satukan kedua tangan perlahan."
            },
            {
              "tipe": "UCAP",
              "teks": "In conclusion, the old storage room holds important pieces of our school's heritage that have been forgotten for decades and deserve to be shared with everyone."
            },
            {
              "tipe": "AKSI",
              "teks": "Jeda 1 detik."
            },
            {
              "tipe": "AKSI",
              "teks": "Beri isyarat tangan ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "Say it with me."
            },
            {
              "tipe": "AKSI",
              "teks": "Tunggu seluruh kelas mengucapkan bersama."
            },
            {
              "tipe": "AKSI",
              "teks": "Jika pengucapan masih ragu-ragu — ulangi sekali lagi sebelum lanjut."
            }
          ]
        },
        {
          "label": "Kalimat 2",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Tetap pegang kartu kerangka."
            },
            {
              "tipe": "UCAP",
              "teks": "Therefore, I recommend that the school create a small heritage display in the main corridor so all students can learn about this part of their school's history."
            },
            {
              "tipe": "AKSI",
              "teks": "Jeda 1 detik."
            },
            {
              "tipe": "AKSI",
              "teks": "Beri isyarat tangan ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "Say it with me."
            },
            {
              "tipe": "AKSI",
              "teks": "Tunggu seluruh kelas mengucapkan bersama."
            },
            {
              "tipe": "AKSI",
              "teks": "Jika pengucapan masih ragu-ragu — ulangi sekali lagi sebelum lanjut."
            }
          ]
        },
        {
          "label": "Kalimat 3",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Letakkan kartu kerangka — bungkuk sedikit ke arah audiens."
            },
            {
              "tipe": "UCAP",
              "teks": "Thank you for listening to our presentation. Do you have any questions?"
            },
            {
              "tipe": "AKSI",
              "teks": "Jeda 1 detik."
            },
            {
              "tipe": "AKSI",
              "teks": "Beri isyarat tangan ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "Say it with me."
            },
            {
              "tipe": "AKSI",
              "teks": "Tunggu seluruh kelas mengucapkan bersama."
            },
            {
              "tipe": "AKSI",
              "teks": "Jika pengucapan masih ragu-ragu — ulangi sekali lagi sebelum lanjut."
            }
          ]
        },
        {
          "label": "Kalimat 4",
          "instruksi": [
            {
              "tipe": "AKSI",
              "teks": "Angkat kartu setup simulasi tanya jawab — miringkan kepala dan angguk penuh perhatian."
            },
            {
              "tipe": "UCAP",
              "teks": "That's an interesting question. I think the school should open the storage room for more community discussion about how to best preserve and share these items."
            },
            {
              "tipe": "AKSI",
              "teks": "Jeda 1 detik."
            },
            {
              "tipe": "AKSI",
              "teks": "Beri isyarat tangan ke arah siswa."
            },
            {
              "tipe": "UCAP",
              "teks": "Say it with me."
            },
            {
              "tipe": "AKSI",
              "teks": "Tunggu seluruh kelas mengucapkan bersama."
            },
            {
              "tipe": "AKSI",
              "teks": "Jika pengucapan masih ragu-ragu — ulangi sekali lagi sebelum lanjut."
            }
          ]
        }
      ],
      "instruksi_penutup": [
        {
          "tipe": "AKSI",
          "teks": "Letakkan semua kartu."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now it is your turn. Write your own presentation closing."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika sebagian besar siswa masih ragu setelah dua putaran — tampilkan kartu perbandingan penutup paralel dan tunjuk perbedaan antara \"See you soon\" (email) dan \"Thank you for listening\" (presentasi). Minta siswa menyalin pola di buku catatan sebelum melanjutkan. Beri waktu dua menit, lalu ulangi REPEAT sekali lagi. Jika bantuan ini digunakan, kurangi waktu CHANGE menjadi enam menit."
        }
      ],
      "diferensiasi": null
    },
    "change": {
      "durasi_menit": 8,
      "intro": "Siswa menulis penutup presentasi mereka sendiri dan satu respons tanya jawab. Dikerjakan secara individual, ditulis di buku catatan. Pola sudah tertulis di papan tulis sejak sebelum kelas.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tempelkan ketiga kartu di papan tulis di sebelah pola — biarkan tetap terlihat selama langkah ini."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pola di papan tulis."
        },
        {
          "tipe": "UCAP",
          "teks": "Write a presentation closing: In conclusion, summarize. Therefore, give your recommendation. Then: Thank you for listening. Do you have any questions? Finally, prepare your Q&A response with That's an interesting question."
        },
        {
          "tipe": "UCAP",
          "teks": "Keep it formal. Not \"So basically...\" and not a recommendation without a summary first."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Open your notebook. You have five minutes. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu lima menit untuk menulis."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — prioritaskan siswa yang melewati In conclusion dan langsung menulis Therefore, atau yang menulis \"Yes, you're right\" sebagai respons tanya jawab."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah lima menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop writing. Now find a partner."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika siswa tidak tahu cara memulai ringkasan — tunjuk slot SUMMARY di kerangka dan minta siswa mulai dengan \"In conclusion, the storage room...\" lalu satu kalimat tentang apa yang ditemukan."
        },
        {
          "tipe": "darurat",
          "teks": "Jika ada siswa belum menulis apapun setelah tiga menit — dekati, tunjuk slot In conclusion di pola, dan minta siswa ucapkan \"In conclusion, we found\" lalu satu detail. Tunggu siswa menulis satu baris, lalu tinggalkan."
        }
      ],
      "diferensiasi": {
        "mudah": "Gunakan kerangka urutan penutup lima slot dan isi setiap slot. Boleh menggunakan catatan penemuan untuk isi ringkasan.",
        "standar": "Tulis penutup dan respons tanya jawab sendiri tanpa membaca kerangka. Gunakan kosakata: heritage atau discussion.",
        "tantangan": "Tulis penutup dan respons tanya jawab, lalu siapkan respons kedua untuk pertanyaan berbeda yang lebih sulit dijawab."
      }
    },
    "interact": {
      "durasi_menit": 12,
      "intro": "Guru menentukan pasangan — tunjuk dua siswa yang duduk berdekatan. Untuk jumlah ganjil, bentuk satu kelompok tiga.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk dua siswa yang duduk berdekatan sebagai contoh — minta mereka berdiri sebentar."
        },
        {
          "tipe": "UCAP",
          "teks": "Watch first. Then you do the same."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa A berdiri dan menyampaikan penutup presentasinya: In conclusion, Therefore, Thank you for listening. Do you have any questions?"
        },
        {
          "tipe": "AKSI",
          "teks": "Minta Siswa B mengajukan satu pertanyaan tentang penemuan."
        },
        {
          "tipe": "AKSI",
          "teks": "Siswa A merespons dengan \"That's an interesting question...\" lalu menjawab."
        },
        {
          "tipe": "AKSI",
          "teks": "Lalu tukar peran — Siswa B menyampaikan penutup, Siswa A mengajukan pertanyaan."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta keduanya duduk kembali."
        },
        {
          "tipe": "UCAP",
          "teks": "Your turn. Stand when you present. Partner B asks one question. Then swap."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu delapan menit untuk dua arah."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan keliling kelas — amati beberapa pasangan dan pastikan sebagian besar siswa menggunakan \"That's an interesting question\" sebagai pembuka respons, bukan langsung menjawab atau menolak pertanyaan."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah delapan menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Good. Now stay with your partner and join another pair."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan merespons pertanyaan dengan \"Yes, you're right\" atau \"No, that is not right\" — tunjuk pola di papan tulis dan ucapkan \"Start with: That's an interesting question. Try again.\" Tunggu siswa mengulang sebelum berpindah."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika pasangan diam lebih dari sepuluh detik — tunjuk pola pertama di papan tulis dan minta siswa ucapkan \"In conclusion,\" saja dulu sebagai pembuka."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat — minta siswa sampaikan seluruh penutup sekali lagi tanpa melihat buku."
        },
        {
          "tipe": "darurat",
          "teks": "Jika waktu tersisa kurang dari lima menit atau kelas tidak lagi kondusif — hentikan simulasi kelompok. Tunjuk pola penutup presentasi di papan tulis, minta seluruh kelas mengucapkan empat komponen penutup secara berurutan satu kali bersama-sama, lalu tutup sesi."
        }
      ],
      "diferensiasi": {
        "mudah": "Sampaikan penutup menggunakan catatan. Pasangan mengajukan satu pertanyaan sederhana (\"What did you find in the room?\") dan kamu merespons.",
        "standar": "Sampaikan penutup tanpa catatan. Pasangan mengajukan pertanyaan berbeda dari kartu catatan penemuan dan kamu merespons.",
        "tantangan": "Sampaikan penutup dan pasangan mengajukan pertanyaan tak terduga. Kamu merespons dengan \"That's an interesting question\" dan memberikan jawaban yang dipikirkan, meski perlu jeda sebentar."
      }
    },
    "share": {
      "durasi_menit": 8,
      "intro": "Setiap pasangan bergabung dengan satu pasangan lain — bukan pasangan dari langkah INTERACT — membentuk kelompok empat orang. Langkah ini mencakup seluruh presentasi singkat: pembuka (dari TP-07) + satu poin isi (dari TP-08) + penutup + tanya jawab.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk pasangan mana bergabung dengan pasangan mana — jangan biarkan siswa memilih sendiri."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua kelompok terbentuk dan kondusif."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa di tiap kelompok sebagai presenter pertama."
        },
        {
          "tipe": "UCAP",
          "teks": "The person I point to presents first."
        },
        {
          "tipe": "UCAP",
          "teks": "Give a short presentation: your opening from last lesson, one body point, then your closing. The group asks at least one question."
        },
        {
          "tipe": "UCAP",
          "teks": "Presenter responds with That's an interesting question."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri waktu enam menit untuk semua anggota kelompok berbagi."
        },
        {
          "tipe": "AKSI",
          "teks": "Berjalan antar kelompok — pastikan sesi tanya jawab berlangsung di setiap kelompok."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika ada anggota kelompok yang diam terus — tunjuk siswa tersebut dan minta ucapkan \"In conclusion,\" saja dulu. Jika masih diam — ucapkan nama siswa tersebut terlebih dahulu lalu minta siswa mengulang."
        },
        {
          "tipe": "bantuan",
          "teks": "Jika satu siswa selesai jauh lebih cepat dari kelompoknya — minta siswa sampaikan seluruh presentasi singkat sekali lagi tanpa melihat buku."
        },
        {
          "tipe": "AKSI",
          "teks": "Setelah enam menit — ketuk meja sekali sebagai tanda berhenti."
        },
        {
          "tipe": "UCAP",
          "teks": "Stop. Everyone back to your seat."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu semua siswa kembali ke posisi semula dan kondusif."
        }
      ],
      "diferensiasi": {
        "mudah": "Sampaikan hanya bagian penutup ke kelompok dan jawab satu pertanyaan dari kelompok.",
        "standar": "Sampaikan presentasi singkat penuh — pembuka, satu poin isi, penutup — dan jawab satu pertanyaan tanpa membaca.",
        "tantangan": "Sampaikan presentasi singkat penuh, lalu jawab dua pertanyaan berbeda dari kelompok, termasuk satu pertanyaan tak terduga."
      }
    },
    "check": {
      "durasi_menit": 4,
      "intro": "Guru mengamati selama langkah SHARE berlangsung — bukan setelah selesai. Setelah SHARE selesai, lakukan konfirmasi cepat ke dua siswa, lalu putuskan jalur berikutnya.",
      "instruksi": [
        {
          "tipe": "AKSI",
          "teks": "Tunjuk satu siswa secara acak."
        },
        {
          "tipe": "UCAP",
          "teks": "Give me your In conclusion sentence. Go."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa membuka dengan ringkasan sebelum rekomendasi, atau langsung ke Therefore?"
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk siswa lain."
        },
        {
          "tipe": "UCAP",
          "teks": "Someone asks you a question. How do you start your response?"
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mengucapkan."
        },
        {
          "tipe": "AKSI",
          "teks": "Amati — apakah siswa membuka dengan \"That's an interesting question\" atau langsung menjawab atau menolak?"
        }
      ],
      "jalur_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Lanjut ke BOOST."
        }
      ],
      "jalur_belum_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Angkat kembali kartu kerangka urutan penutup."
        },
        {
          "tipe": "UCAP",
          "teks": "Let us try again. Say it with me."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk setiap slot di kerangka secara berurutan — SUMMARY, RECOMMENDATION, THANK YOU, INVITE, RESPOND — sambil mengucapkan kalimat model yang sesuai dengan gesture."
        },
        {
          "tipe": "AKSI",
          "teks": "Beri isyarat ke siswa — tunggu seluruh kelas mengucapkan bersama."
        },
        {
          "tipe": "AKSI",
          "teks": "Minta siswa buka buku catatan — lengkapi atau tulis ulang komponen yang belum selesai. Beri waktu dua menit."
        },
        {
          "tipe": "UCAP",
          "teks": "Good work today. We will continue next time."
        },
        {
          "tipe": "AKSI",
          "teks": "Tutup sesi — lewati BOOST karena waktu tidak mencukupi."
        }
      ]
    },
    "boost": {
      "durasi_menit": 5,
      "intro": "Dijalankan hanya jika CHECK menunjukkan sebagian besar siswa sudah lancar. Pilih SATU fokus yang paling dibutuhkan kelas. Jangan jalankan kedua aktivitas jika waktu tidak mencukupi. Maksimal tiga siswa per fokus.",
      "untuk_kesulitan": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Modelkan respons tanya jawab perlahan — tunjuk bahwa \"That's an interesting question\" adalah pengakuan formal yang memberi waktu berpikir sebelum menjawab."
        },
        {
          "tipe": "UCAP",
          "teks": "That's an interesting question, then you think, then you answer. Try once more."
        },
        {
          "tipe": "AKSI",
          "teks": "Modelkan satu sesi tanya jawab lagi dengan pertanyaan berbeda — misalnya \"Who owned these objects originally?\" — menggunakan struktur respons yang sama. Minta siswa mengikuti."
        }
      ],
      "untuk_lancar": [
        {
          "tipe": "AKSI",
          "teks": "Dekati siswa secara individual — jangan panggil di depan kelas."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunjuk respons tanya jawab dalam catatan siswa."
        },
        {
          "tipe": "UCAP",
          "teks": "Try a humble response for a harder question. Listen first."
        },
        {
          "tipe": "UCAP",
          "teks": "I'm not completely sure, but I believe the school could work with the local museum to help preserve these heritage items properly."
        },
        {
          "tipe": "AKSI",
          "teks": "Jeda 2 detik."
        },
        {
          "tipe": "UCAP",
          "teks": "Now prepare a second question and answer response using I'm not completely sure, but I believe for a question you find harder to answer."
        },
        {
          "tipe": "AKSI",
          "teks": "Tunggu siswa mencoba."
        },
        {
          "tipe": "AKSI",
          "teks": "Jika siswa berhasil — angguk dan ucapkan \"That adds a second Q&A register — humble and honest, not just confident.\""
        }
      ],
      "cue_sisa": "Sisa siswa yang tidak terlibat BOOST — minta mereka sampaikan seluruh urutan penutup sekali lagi tanpa melihat buku, atau memperkuat kalimat In conclusion dengan satu detail spesifik tentang mengapa penemuan ini penting bagi warisan sekolah."
    }
  }
};

export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-09.js",
    pattern_id: "PAT-9-09",
    title: "The Old Storage Room Discovery: Concluding and Responding",
    short_title: "Presentation Closing",
    grade: 9,
    genre: "Presentation",
    cluster: "B",
    topic: "The Old Storage Room Discovery",
    context: "Students close a formal presentation about the storage room discovery, reinforce the main message, and respond to audience questions.",
    context_id: "Siswa menutup presentasi formal tentang penemuan gudang, menegaskan kembali pesan utama, dan menjawab pertanyaan audiens.",
    communicative_goal: "conclude a presentation, reinforce the main message, and interact with the audience through question-and-answer exchange",
    communicative_goal_id: "menutup presentasi, menegaskan kembali pesan utama, dan berinteraksi dengan audiens melalui sesi tanya jawab",
    vocabulary_domain: ["concluding expressions", "question handling", "school heritage", "discussion"],
    input_anchor: "organized presentation body",
    output_anchor: "full presentation with Q&A",
    prerequisite_patterns: ["PAT-8-03", "PAT-8-16", "PAT-8-21", "PAT-9-08"],
    reusable_in: ["PAT-9-10"],
    complexity_level: "Integrate",
    notes: "TP kesembilan Kelas 9, genre Presentation (cluster B -- CLOSER CLUSTER 3, integrasi seluruh presentasi + Q&A). QUAD PREREQ: PAT-8-03, PAT-8-16, PAT-8-21, PAT-9-08. target_pattern PAT-9-09 = 'In conclusion,...Therefore,...Thank you for listening. Do you have any questions? That\\'s an interesting question...' (penutup + Q&A). BAGIAN 3 dari 3 presentasi 'The Old Storage Room Discovery' (TP-07=opening, TP-08=body, TP-09=closing). PERFORMA PRESENTASI TERLENGKAP: TP-09 menutup arc presentasi dan menambah DIMENSI INTERAKTIF (Q&A) untuk pertama kalinya di seluruh 66 pattern. Reaktivasi PAT-8-03 (WAJIB, VR-1): negotiating/responding 'That\\'s a good idea, but...' (K8, interpersonal) direaktivasi sebagai DASAR MERESPONS PERTANYAAN AUDIENS -- register bergeser dari negosiasi antar-teman ke Q&A formal presentasi; 'That\\'s an interesting question' menggantikan 'That\\'s a good idea, but' sebagai opener respons. Reaktivasi PAT-8-16 (WAJIB, VR-1): 'Therefore, I recommend...' (K8) direaktivasi sebagai KOMPONEN PENUTUP presentasi -- kini mengikuti 'In conclusion,...' sebagai reinforcement dalam konteks presentasi formal. Reaktivasi PAT-8-21 (WAJIB, VR-1): closing register 'See you soon' (K8, email) direaktivasi sebagai 'Thank you for listening.' -- parallel structure: keduanya adalah KALIMAT PENUTUP FUNGSIONAL, register naik dari email informal ke presentasi formal. Reaktivasi PAT-9-08 (WAJIB, VR-1): KAPASITAS body presentasi (First/Next/Another point/Finally/Based on this) direaktivasi sebagai SUMBER MATERI 'In conclusion,...' -- summary conclusion dibangun dari poin-poin yang sudah diorganisasi di TP-08. extends_to PAT-9-10 (jembatan ke cluster Information Synthesis -- kapasitas presentasi utuh + Q&A menjadi fondasi untuk mensintesis informasi lebih kompleks di Cluster 4). forbidden_overlap (argumentative rebuttal, exposition recommendation only, interpersonal discussion): Q&A di sini adalah RESPONS PRESENTASI FORMAL -- bukan debat (rebuttal), bukan negosiasi informal ('That\\'s a good idea, but what if...'), bukan 'Therefore, I recommend...' yang berdiri sendiri tanpa konteks presentasi. vocabulary_domain: 'concluding expressions' = In conclusion / Therefore (pattern words). 'question handling' = Do you have any questions? / That\\'s an interesting question (pattern words). heritage ✓ model_1/2, discussion ✓ model_4. BOOST extension: tambah humble Q&A response 'I\\'m not completely sure, but I believe...' untuk pertanyaan yang tidak pasti -- berbeda dari 'That\\'s an interesting question,...' (confident response).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Welcome back, everyone. Let's bring all our focus to the front." },
      { type: "AKSI", text: "Tunggu kelas kondusif sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "You have opened your presentation. You have presented your main points. Now — what is left?" },
      { type: "AKSI", text: "Beri jeda singkat, biarkan siswa menjawab." },
      { type: "AKSI", text: "Tampilkan kerangka urutan penutup: SUMMARY / RECOMMENDATION / THANK YOU / INVITE QUESTIONS / RESPOND." },
      { type: "UCAP", text: "And after the closing — the audience gets to ask you questions. Are you prepared to respond?" },
    ],

    active_vocabulary: [
      "In conclusion,",
      "Therefore,",
      "Thank you for listening.",
      "Do you have any questions?",
      "That's an interesting question",
      "heritage",
      "discussion"
    ],

    model_sentences: [
      { id: "model_1", text: "In conclusion, the old storage room holds important pieces of our school's heritage that have been forgotten for decades and deserve to be shared with everyone." },
      { id: "model_2", text: "Therefore, I recommend that the school create a small heritage display in the main corridor so all students can learn about this part of their school's history." },
      { id: "model_3", text: "Thank you for listening to our presentation. Do you have any questions?" },
      { id: "model_4", text: "That's an interesting question. I think the school should open the storage room for more community discussion about how to best preserve and share these items." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A closing sequence frame with five labelled slots: SUMMARY ('In conclusion,...') / RECOMMENDATION ('Therefore,...') / THANK YOU ('Thank you for listening.') / INVITE QUESTIONS ('Do you have any questions?') / RESPOND ('That\\'s an interesting question...')", description_id: "Kerangka urutan penutup dengan lima slot berlabel: SUMMARY ('In conclusion,...') / RECOMMENDATION ('Therefore,...') / THANK YOU ('Thank you for listening.') / INVITE QUESTIONS ('Do you have any questions?') / RESPOND ('That's an interesting question...')", asset_id: null },
      { id: "visual_2", description: "A parallel closing comparison: email closing ('See you soon, Dito and Wulan') next to presentation closing ('Thank you for listening. Do you have any questions?') -- same functional move, different register.", description_id: "Perbandingan penutup paralel: penutup email ('See you soon, Dito and Wulan') di sebelah penutup presentasi ('Thank you for listening. Do you have any questions?') -- gerakan fungsional yang sama, register yang berbeda.", asset_id: null },
      { id: "visual_3", description: "A Q&A simulation setup: one student at the front, others with question cards -- showing the formal Q&A exchange as part of a presentation, not a casual class discussion.", description_id: "Setup simulasi tanya jawab: satu siswa di depan, yang lain memegang kartu pertanyaan -- menunjukkan sesi tanya jawab formal sebagai bagian dari presentasi, bukan diskusi kelas yang santai.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher brings hands slowly together while saying 'In conclusion,...' -- to signal drawing all threads together at the end of the presentation.", description_id: "Guru menyatukan kedua tangan perlahan sambil mengucapkan 'In conclusion,...' -- untuk menandai menyatukan semua alur di akhir presentasi." },
      { id: "gesture_2", description: "Teacher bows slightly while saying 'Thank you for listening.' -- to model the formal close of a presentation addressed to the whole audience.", description_id: "Guru membungkuk sedikit sambil mengucapkan 'Thank you for listening.' -- untuk mencontohkan penutup formal presentasi yang ditujukan ke seluruh audiens." },
      { id: "gesture_3", description: "Teacher tilts head and nods attentively while saying 'That\\'s an interesting question' -- to model the formal Q&A response opener: acknowledge before answering, not 'Yes, you\\'re right' or a direct rebuttal.", description_id: "Guru memiringkan kepala dan mengangguk penuh perhatian sambil mengucapkan 'That's an interesting question' -- untuk mencontohkan pembuka respons tanya jawab formal: mengakui sebelum menjawab, bukan 'Yes, you're right' atau sanggahan langsung." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher close a presentation and handle audience questions: 'In conclusion,...' (summary) + 'Therefore,...' (recommendation) + 'Thank you for listening.' + 'Do you have any questions?' + 'That\\'s an interesting question...' (Q&A response) -- a formal presentation close, not an argumentative conclusion or a casual sign-off.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-03", "PAT-8-16", "PAT-8-21", "PAT-9-08"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the closing sequence ('In conclusion,...' / 'Therefore,...' / 'Thank you for listening.' / 'Do you have any questions?' / 'That\\'s an interesting question...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own presentation closing and practise one Q&A response about the storage room discovery.",
      prompt: "Write a presentation closing using: 'In conclusion, ___.' (summarize the main point), 'Therefore, ___.' (your recommendation), 'Thank you for listening. Do you have any questions?' (close and invite Q&A), 'That\\'s an interesting question. ___.' (respond to one imagined question). Use: heritage or discussion. Keep the closing formal -- not 'So basically...' (casual) and not a standalone recommendation without a summary.",
      change_target: ["summary (In conclusion, ...)", "recommendation (Therefore, ...)", "formal close (Thank you for listening. Do you have any questions?)", "Q&A response (That's an interesting question. ...)"],
      differentiation: {
        easy: { task: "Use the closing frame and fill in each slot. You may use the discovery notes for the summary content." },
        standard: { task: "Write your own closing sequence and Q&A response without reading the frame." },
        challenge: { task: "Write the closing and Q&A response, then prepare a second Q&A response to a different imagined question -- one you are less certain about." }
      },
      support: { pattern_support: ["PAT-8-03", "PAT-8-16", "PAT-8-21", "PAT-9-08"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Deliver your presentation closing and simulate a Q&A exchange with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Partner A delivers the closing ('In conclusion,...' / 'Therefore,...' / 'Thank you for listening. Do you have any questions?'). Partner B asks one question about the discovery. Partner A responds ('That\\'s an interesting question...'). Then swap roles. Each partner checks: summary? recommendation? formal close? Q&A response?",
      differentiation: {
        easy: { task: "Deliver your closing using notes. Your partner asks one simple question ('What did you find in the room?') and you respond." },
        standard: { task: "Deliver your closing without notes. Your partner asks a different question from the discovery cards and you respond." },
        challenge: { task: "Deliver your closing and your partner asks an unexpected question. You respond with 'That\\'s an interesting question' and give a thoughtful answer, even if you have to pause." }
      },
      support: { pattern_support: ["PAT-8-03", "PAT-8-16", "PAT-8-21", "PAT-9-08"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Deliver your full presentation with opening, body summary, closing, and Q&A to a new group (full presentation with Q&A).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. One student delivers a short presentation (opening from TP-07 + one body point from TP-08 + closing from TP-09). The group asks at least one question and the presenter responds with 'That\\'s an interesting question...'.",
      differentiation: {
        easy: { task: "Deliver just the closing section and respond to one question from the group." },
        standard: { task: "Deliver the full short presentation and respond to one question without reading." },
        challenge: { task: "Deliver the full presentation, then respond to two different questions from the group, including one unexpected question." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students deliver the closing with 'In conclusion,...', 'Therefore,...', 'Thank you for listening.', and respond to questions with 'That\\'s an interesting question...' in formal register",
        "students keep the Q&A response as a formal acknowledgment before answering -- not an aggressive rebuttal and not a simple agreement",
        "students skip 'In conclusion,...' and jump straight to 'Therefore, I recommend...' alone, or respond to questions with 'Yes, you\\'re right' or an interpersonal rebuttal ('That\\'s wrong because...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a humble Q&A response for a question they are less sure about.",
        needs_model: "Repeat the MODEL step, focusing on the Q&A exchange -- model both 'That\\'s an interesting question' as acknowledgment and the answer that follows.",
        needs_repeat: "Do one more round of REPEAT (choral) on the closing sequence before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "responds to audience questions aggressively ('No, that is not right') or too passively ('I don\\'t know') without using the formal Q&A opener",
        "delivers the closing and responds to Q&A but cannot do so without reading",
        "delivers the full closing and handles Q&A with 'That\\'s an interesting question...' accurately and confidently"
      ],
      action: [
        "recast the Q&A response slowly, modelling 'That\\'s an interesting question' as a formal acknowledgment that buys thinking time -- then show how the answer follows, even if brief",
        "model one more Q&A exchange on a different unexpected question (e.g. 'Who owned these objects originally?') to show the same response structure still works",
        "for a student who is ready, model ONE humble response for an uncertain question first -- 'I\\'m not completely sure, but I believe the school could work with the local museum to help preserve these heritage items properly.' -- then invite that student to prepare a second Q&A response using 'I\\'m not completely sure, but I believe...' for a question they find harder to answer; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it adds a second Q&A register (humble/uncertain) alongside the confident one"
      ]
    }
  ],

  constraints: {
    single_productive_pattern: true,
    requires_student_output: true,
    check_without_score: true,
    boost_without_label: true,
    tts_optional_backup: true,
    self_contained: true
  },
  skenario,
}
