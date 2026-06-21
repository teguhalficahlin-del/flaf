# Item Keputusan — Granularitas Diferensiasi Fase D

## Temuan

Rubrik penilaian resmi Fase D (modul "Speak Your Mind", diekstrak langsung dari Panduan Mapel) memakai **3 kategori**: Mulai Berkembang (MB) → Berkembang Sesuai Harapan (BSH) → Sangat Berkembang (SB).

FLAF saat ini (per riwayat kerja) memakai **2 field**: `sudah_bisa` / `perlu_bantuan`.

## Kenapa ini perlu diperiksa, bukan diasumsikan aman

BSH biasanya kategori dengan populasi murid terbesar di kelas nyata — bukan kategori pinggiran. Pertanyaannya bukan "apakah simplifikasi 2-field salah" (itu keputusan pedagogis yang sah), tapi **"BSH dipetakan ke mana, dan apakah pemetaan itu disengaja atau tergerus saat redesign 3-level→2-field yang sudah pernah terjadi sebelumnya"**.

## Yang perlu Anda cek langsung di kode (saya tidak punya akses ke FLAF di sesi ini)

1. Saat redesign Diferensiasi dari 3-level ke 2-field, apakah keputusan "BSH masuk kategori mana" dibuat eksplisit dan didokumentasikan — atau implisit/tidak tercatat?
2. Apakah guru kehilangan kemampuan membedakan murid BSH dari murid SB sungguhan? Kalau keduanya sama-sama jatuh ke `sudah_bisa`, apakah itu memengaruhi keputusan remedial/pengayaan secara nyata di kelas?
3. Apakah `penilaian_log_smp` (yang menyimpan log asesmen) masih menyimpan granularitas asli sebelum dikompresi ke 2 field untuk keperluan UI/trigger diferensiasi? Kalau ya, data 3-level sebenarnya tidak hilang — cuma disembunyikan dari guru, dan ini risikonya lebih rendah.

## Tiga jalan keluar yang masuk akal — bukan rekomendasi, pilihan untuk Anda timbang

| Opsi | Konsekuensi |
|---|---|
| **A. Pertahankan 2-field**, tapi dokumentasikan eksplisit aturan BSH→yang mana | Tidak ada perubahan kode, tapi kejelasan keputusan terjamin, tidak lagi implisit |
| **B. Perluas ke 3-field** sesuai rubrik resmi | Lebih presisi, tapi mengulang siklus redesign yang sudah pernah mahal terjadi — perlu yakin ini bukan akan dirombak lagi nanti |
| **C. Hibrid**: simpan 3-level di data log, tampilkan 2-level ke guru sebagai trigger UI sederhana | Granularitas tidak hilang, kompleksitas tambahan di layer mapping, bukan di schema inti |

## Status

Ini murni item investigasi — bukan bug yang sudah pasti ada. Temuan ini berasal dari membandingkan 1 modul resmi (Fase D) terhadap deskripsi skema FLAF dari riwayat kerja, bukan dari membaca kode FLAF langsung.
