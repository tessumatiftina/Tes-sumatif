import { Question } from '../types';
import imgTumpukanBuku from '../assets/images/tumpukan_buku_sekolah_1795060423535.jpg';
import imgPanenJeruk from '../assets/images/panen_jeruk_kebun_1795060424084.jpg';
import imgKueKantin from '../assets/images/kue_kantin_sekolah_1795060423603.jpg';
import imgToplesKelereng from '../assets/images/toples_kelereng_warna_1795060422939.jpg';
import imgRakPerpustakaan from '../assets/images/rak_perpustakaan_sd_1795060423703.jpg';

/**
 * Bank Soal Matematika Kelas 2 SD - Lingkup Materi: Bilangan Cacah hingga 1000
 * Total: 22 Butir Soal
 * - Pilihan Ganda (PG): 10 Soal (ID 1 - 10)
 * - Pilihan Ganda Kompleks (PGK, 3 pilihan jawaban): 3 Soal (ID 11 - 13)
 * - Pilihan Ganda Kompleks Kategori (Benar/Salah, 3 deskripsi): 9 Soal (ID 14 - 22)
 */
export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // A. PILIHAN GANDA (10 SOAL: ID 1 - 10)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Membaca & Menghitung Kubus Satuan',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar susunan kubus satuan di atas! Banyak kubus seluruhnya yang ditunjukkan oleh gambar tersebut adalah...',
    diagram: {
      kind: 'kubus_satuan',
      ratusan: 3,
      puluhan: 4,
      satuan: 7,
      caption: 'Gambar susunan kubus ratusan, puluhan, dan satuan',
    },
    options: [
      { id: 'A', text: '347' },
      { id: 'B', text: '374' },
      { id: 'C', text: '437' },
      { id: 'D', text: '743' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada gambar terdapat 3 blok ratusan (= 300), 4 batang puluhan (= 40), dan 7 kubus satuan (= 7).\nJumlah seluruh kubus = 300 + 40 + 7 = 347.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Nama & Lambang Bilangan',
    difficulty: 'Mudah',
    text: 'Lambang bilangan dari "enam ratus delapan puluh lima" adalah...',
    options: [
      { id: 'A', text: '658' },
      { id: 'B', text: '680' },
      { id: 'C', text: '685' },
      { id: 'D', text: '865' },
    ],
    correctAnswer: 'C',
    explanation:
      'Enam ratus = 600, delapan puluh = 80, lima = 5.\nJika digabungkan: 600 + 80 + 5 = 685.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Nilai Tempat Bilangan',
    difficulty: 'Mudah',
    text: 'Pada bilangan 739, angka 3 menempati nilai tempat...',
    options: [
      { id: 'A', text: 'Satuan' },
      { id: 'B', text: 'Puluhan' },
      { id: 'C', text: 'Ratusan' },
      { id: 'D', text: 'Ribuan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada bilangan 739:\n• Angka 7 menempati tempat ratusan (nilainya 700)\n• Angka 3 menempati tempat puluhan (nilainya 30)\n• Angka 9 menempati tempat satuan (nilainya 9).',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Garis Bilangan & Pola Lompatan',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar garis bilangan di atas! Bilangan yang tepat untuk mengisi kotak bertanda tanya (?) adalah...',
    diagram: {
      kind: 'garis_bilangan',
      lineItems: ['450', '500', '?', '600', '650'],
      caption: 'Gambar garis bilangan berpola lompatan tetap',
    },
    options: [
      { id: 'A', text: '525' },
      { id: 'B', text: '550' },
      { id: 'C', text: '575' },
      { id: 'D', text: '590' },
    ],
    correctAnswer: 'B',
    explanation:
      'Selisih tiap titik berurutan adalah 500 - 450 = 50 (pola loncat 50 ke kanan).\nBilangan setelah 500 = 500 + 50 = 550.\nCek langkah berikutnya: 550 + 50 = 600 (cocok).',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Mengurutkan Bilangan Cacah',
    difficulty: 'Mudah',
    text: 'Urutan bilangan 542, 489, 615, dan 524 dari yang terkecil hingga yang terbesar adalah...',
    options: [
      { id: 'A', text: '489, 524, 542, 615' },
      { id: 'B', text: '489, 542, 524, 615' },
      { id: 'C', text: '524, 489, 542, 615' },
      { id: 'D', text: '615, 542, 524, 489' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bandingkan angka ratusannya terlebih dahulu: 489 (4 ratusan) paling kecil, lalu 524 dan 542 (sama-sama 5 ratusan; karena 2 puluhan < 4 puluhan maka 524 < 542), dan terbesar 615 (6 ratusan).\nUrutan terkecil ke terbesar: 489, 524, 542, 615.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Penjumlahan Bilangan Cacah',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar tumpukan buku di kelas! Di ruang kelas 2 SD Negeri 1 Sangkaragung terdapat 236 buku tulis di tumpukan kiri dan 148 buku tulis di tumpukan kanan. Berapa jumlah seluruh buku tulis di ruang kelas tersebut?',
    imageUrl: imgTumpukanBuku,
    imageAlt: 'Ilustrasi tumpukan buku tulis di meja kelas sekolah dasar',
    imageCaption: 'Ilustrasi tumpukan buku tulis di ruang kelas',
    options: [
      { id: 'A', text: '374 buku' },
      { id: 'B', text: '384 buku' },
      { id: 'C', text: '394 buku' },
      { id: 'D', text: '484 buku' },
    ],
    correctAnswer: 'B',
    explanation:
      'Penjumlahan bersusun:\nSatuan: 6 + 8 = 14 (tulis 4, simpan 1 puluhan)\nPuluhan: 3 + 4 + 1 = 8\nRatusan: 2 + 1 = 3\nJadi, 236 + 148 = 384 buku.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Penjumlahan Tiga Bilangan',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar hasil panen jeruk di kebun Pak Made! Keranjang pertama berisi 215 jeruk, keranjang kedua berisi 240 jeruk, dan keranjang ketiga berisi 135 jeruk. Jumlah seluruh jeruk hasil panen Pak Made adalah...',
    imageUrl: imgPanenJeruk,
    imageAlt: 'Ilustrasi tiga keranjang bambu berisi buah jeruk segar di kebun',
    imageCaption: 'Ilustrasi tiga keranjang panen buah jeruk Pak Made',
    options: [
      { id: 'A', text: '580 jeruk' },
      { id: 'B', text: '590 jeruk' },
      { id: 'C', text: '600 jeruk' },
      { id: 'D', text: '690 jeruk' },
    ],
    correctAnswer: 'B',
    explanation:
      'Langkah 1: 215 + 240 = 455 jeruk.\nLangkah 2: 455 + 135 = 590 jeruk.\nJadi, jumlah seluruh jeruk hasil panen adalah 590 jeruk.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Pengurangan dengan Meminjam',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar etalase kantin sekolah! Ibu kantin menyiapkan 425 kue jajanan untuk dijual. Saat jam istirahat, terjual sebanyak 168 kue. Sisa kue yang belum terjual di etalase adalah...',
    imageUrl: imgKueKantin,
    imageAlt: 'Ilustrasi etalase kue dan donat di kantin sekolah',
    imageCaption: 'Ilustrasi jajanan kue di etalase kantin sekolah',
    options: [
      { id: 'A', text: '247 kue' },
      { id: 'B', text: '257 kue' },
      { id: 'C', text: '267 kue' },
      { id: 'D', text: '343 kue' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pengurangan bersusun 425 - 168:\n• Satuan: 15 - 8 = 7 (pinjam 1 puluhan dari 2)\n• Puluhan: 11 - 6 = 5 (pinjam 1 ratusan dari 4)\n• Ratusan: 3 - 1 = 2\nJadi, sisa kue adalah 257 kue.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Dekomposisi / Bentuk Panjang Bilangan',
    difficulty: 'Mudah',
    text: 'Bentuk panjang yang tepat dari bilangan 806 adalah...',
    options: [
      { id: 'A', text: '800 + 60 + 0' },
      { id: 'B', text: '800 + 0 + 6' },
      { id: 'C', text: '80 + 0 + 6' },
      { id: 'D', text: '8 + 0 + 6' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bilangan 806 terdiri atas:\n• 8 ratusan = 800\n• 0 puluhan = 0\n• 6 satuan = 6\nSehingga bentuk panjangnya adalah 800 + 0 + 6.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Operasi Campuran Penjumlahan & Pengurangan',
    difficulty: 'Sukar',
    text: 'Di perpustakaan sekolah mula-mula ada 520 buku cerita. Hari Senin datang sumbangan 185 buku cerita baru. Hari Selasa, sebanyak 240 buku dipinjam oleh siswa. Banyak buku cerita yang masih ada di perpustakaan sekarang adalah...',
    options: [
      { id: 'A', text: '455 buku' },
      { id: 'B', text: '465 buku' },
      { id: 'C', text: '475 buku' },
      { id: 'D', text: '565 buku' },
    ],
    correctAnswer: 'B',
    explanation:
      'Langkah 1 (tambah sumbangan): 520 + 185 = 705 buku.\nLangkah 2 (dikurangi yang dipinjam): 705 - 240 = 465 buku.\nJadi, banyak buku di perpustakaan sekarang adalah 465 buku.',
  },

  // =========================================================================
  // B. PILIHAN GANDA KOMPLEKS (3 SOAL: ID 11 - 13, masing-masing 3 pilihan)
  // =========================================================================
  {
    id: 11,
    type: 'pgk',
    topic: 'Menyusun Bilangan dari Kartu Angka',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar tiga kartu angka di atas! Jika ketiga kartu angka tersebut disusun menjadi bilangan tiga angka tanpa mengulang angka, pilihlah pernyataan yang BENAR (boleh memilih lebih dari satu):',
    diagram: {
      kind: 'kartu_angka',
      cards: ['2', '7', '5'],
      caption: 'Gambar tiga kartu angka: 2, 7, dan 5',
    },
    options: [
      { id: 'A', text: 'Bilangan terbesar yang dapat dibentuk adalah 752.' },
      { id: 'B', text: 'Bilangan terkecil yang dapat dibentuk adalah 257.' },
      { id: 'C', text: 'Pada bilangan 527, nilai angka 5 adalah 50.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Opsi A BENAR: Urutkan angka dari terbesar (7, 5, 2) menghasilkan 752.\n• Opsi B BENAR: Urutkan angka dari terkecil (2, 5, 7) menghasilkan 257.\n• Opsi C SALAH: Pada bilangan 527, angka 5 menempati tempat ratusan sehingga nilainya 500, bukan 50.',
  },
  {
    id: 12,
    type: 'pgk',
    topic: 'Membandingkan & Menghitung Koleksi Benda',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar tiga toples kelereng milik Komang! Toples kiri berisi 245 kelereng, toples tengah berisi 418 kelereng, dan toples kanan berisi 162 kelereng. Pilihlah pernyataan yang BENAR (boleh memilih lebih dari satu):',
    imageUrl: imgToplesKelereng,
    imageAlt: 'Ilustrasi tiga toples kaca berisi kelereng berwarna-warni dengan isi berbeda',
    imageCaption: 'Ilustrasi tiga toples kelereng Komang (Kiri: 245, Tengah: 418, Kanan: 162)',
    options: [
      { id: 'A', text: 'Jumlah kelereng pada toples kiri dan toples kanan adalah 407 butir.' },
      { id: 'B', text: 'Selisih kelereng antara toples tengah dan toples kiri adalah 173 butir.' },
      { id: 'C', text: 'Jumlah seluruh kelereng di ketiga toples adalah 925 butir.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Opsi A BENAR: 245 + 162 = 407 butir.\n• Opsi B BENAR: 418 - 245 = 173 butir.\n• Opsi C SALAH: 245 + 418 + 162 = 825 butir (bukan 925 butir).',
  },
  {
    id: 13,
    type: 'pgk',
    topic: 'Komposisi Operasi Hitung Bilangan 600',
    difficulty: 'Sukar',
    text: 'Ibu guru menuliskan bilangan 600 di papan tulis. Pilihlah operasi hitung berikut yang hasilnya SAMA DENGAN 600 (boleh memilih lebih dari satu):',
    options: [
      { id: 'A', text: '345 + 255' },
      { id: 'B', text: '850 - 250' },
      { id: 'C', text: '425 + 185' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Opsi A BENAR: 345 + 255 = 600.\n• Opsi B BENAR: 850 - 250 = 600.\n• Opsi C SALAH: 425 + 185 = 610 (tidak sama dengan 600).',
  },

  // =========================================================================
  // C. PGK KATEGORI / BENAR-SALAH (9 SOAL: ID 14 - 22, masing-masing 3 deskripsi)
  // =========================================================================
  {
    id: 14,
    type: 'pgk_kategori',
    topic: 'Nilai Tempat pada Kubus Satuan',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar susunan kubus satuan di atas! Tentukan kebenaran dari setiap pernyataan berikut (Pilih Benar atau Salah):',
    diagram: {
      kind: 'kubus_satuan',
      ratusan: 5,
      puluhan: 2,
      satuan: 6,
      caption: 'Gambar susunan kubus ratusan, puluhan, dan satuan',
    },
    statements: [
      {
        id: 's1',
        text: 'Banyak seluruh kubus pada gambar tersebut adalah 526.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Angka 2 pada bilangan tersebut menempati nilai tempat puluhan dengan nilai 20.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bilangan yang ditunjukkan gambar lebih besar daripada 562.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 5 ratusan (500) + 2 puluhan (20) + 6 satuan (6) = 526 (BENAR).\n2. Angka 2 berada di posisi puluhan, sehingga nilainya 20 (BENAR).\n3. 526 lebih kecil daripada 562 karena 2 puluhan < 6 puluhan (SALAH).',
  },
  {
    id: 15,
    type: 'pgk_kategori',
    topic: 'Membaca & Membandingkan Nomor Dada',
    difficulty: 'Mudah',
    text: 'Dalam lomba gerak jalan sekolah, tiga peserta memakai nomor dada 409, 490, dan 904. Tentukan kebenaran dari setiap pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Bilangan 409 dibaca "empat ratus sembilan".',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Nomor dada yang paling besar dari ketiga peserta tersebut adalah 490.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Angka 9 pada bilangan 490 bernilai 90.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Bilangan 409 memiliki 4 ratusan, 0 puluhan, 9 satuan sehingga dibaca "empat ratus sembilan" (BENAR).\n2. Nomor dada terbesar adalah 904, bukan 490 (SALAH).\n3. Pada bilangan 490, angka 9 berada di nilai tempat puluhan sehingga nilainya 90 (BENAR).',
  },
  {
    id: 16,
    type: 'pgk_kategori',
    topic: 'Pola Bilangan pada Garis Bilangan',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar garis bilangan dengan pola lompatan yang sama di atas! Tentukan kebenaran dari setiap pernyataan berikut (Pilih Benar atau Salah):',
    diagram: {
      kind: 'garis_bilangan',
      lineItems: ['700', '725', 'A', '775', 'B'],
      caption: 'Gambar garis bilangan berpola dari 700 ke kanan',
    },
    statements: [
      {
        id: 's1',
        text: 'Pola bilangan pada garis tersebut selalu bertambah 25 setiap langkah ke kanan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bilangan pengganti huruf A adalah 750.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bilangan pengganti huruf B adalah 825.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Selisih dua bilangan berdekatan = 725 - 700 = 25 (BENAR).\n2. A = 725 + 25 = 750 (BENAR).\n3. B = 775 + 25 = 800, bukan 825 (SALAH).',
  },
  {
    id: 17,
    type: 'pgk_kategori',
    topic: 'Membandingkan & Selisih Pengunjung',
    difficulty: 'Sedang',
    text: 'Berikut catatan jumlah pengunjung kebun binatang selama tiga hari:\n• Hari Jumat: 675 orang\n• Hari Sabtu: 840 orang\n• Hari Minggu: 915 orang\nTentukan kebenaran dari setiap pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Pengunjung paling banyak datang pada hari Minggu.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pengunjung hari Jumat lebih banyak daripada pengunjung hari Sabtu.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Selisih pengunjung hari Minggu dan hari Jumat adalah 240 orang.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Urutan jumlah pengunjung: 675 < 840 < 915, terbanyak hari Minggu (BENAR).\n2. 675 lebih sedikit daripada 840 (SALAH).\n3. Selisih Minggu dan Jumat = 915 - 675 = 240 orang (BENAR).',
  },
  {
    id: 18,
    type: 'pgk_kategori',
    topic: 'Penjumlahan Data Rak Buku Perpustakaan',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar tiga rak buku di perpustakaan sekolah! Rak Biru berisi 315 buku, Rak Kuning berisi 285 buku, dan Rak Hijau berisi 340 buku. Tentukan kebenaran dari setiap pernyataan berikut (Pilih Benar atau Salah):',
    imageUrl: imgRakPerpustakaan,
    imageAlt: 'Ilustrasi perpustakaan sekolah dasar dengan Rak Biru, Rak Kuning, dan Rak Hijau berisi buku cerita',
    imageCaption: 'Ilustrasi perpustakaan sekolah (Rak Biru: 315, Rak Kuning: 285, Rak Hijau: 340 buku)',
    statements: [
      {
        id: 's1',
        text: 'Jumlah buku pada Rak Biru dan Rak Kuning seluruhnya adalah 600 buku.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Rak yang paling banyak memuat buku adalah Rak Hijau.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jumlah seluruh buku di ketiga rak tersebut melebihi 1.000 buku.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Rak Biru + Rak Kuning = 315 + 285 = 600 buku (BENAR).\n2. Perbandingan: 340 (Hijau) > 315 (Biru) > 285 (Kuning), terbanyak Rak Hijau (BENAR).\n3. Total seluruh buku = 600 + 340 = 940 buku, tidak melebihi 1.000 (SALAH).',
  },
  {
    id: 19,
    type: 'pgk_kategori',
    topic: 'Pengurangan Bertahap Bilangan Cacah',
    difficulty: 'Sedang',
    text: 'Putu memiliki tabungan koin sebanyak 750 keping. Ia menukarkan 275 keping di koperasi sekolah, lalu memberikan 125 keping kepada adiknya. Tentukan kebenaran dari setiap pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Setelah ditukarkan di koperasi, sisa koin Putu adalah 475 keping.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jumlah koin yang ditukarkan dan diberikan kepada adiknya adalah 400 keping.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Sisa koin Putu pada akhirnya adalah 300 keping.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 750 - 275 = 475 keping (BENAR).\n2. 275 + 125 = 400 keping (BENAR).\n3. Sisa akhir = 750 - 400 = 350 keping, bukan 300 keping (SALAH).',
  },
  {
    id: 20,
    type: 'pgk_kategori',
    topic: 'Bilangan Genap, Ganjil & Nilai Tempat',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar empat kartu bilangan di atas! Tentukan kebenaran dari setiap pernyataan berikut (Pilih Benar atau Salah):',
    diagram: {
      kind: 'kartu_angka',
      cards: ['314', '527', '680', '901'],
      caption: 'Gambar empat kartu bilangan: 314, 527, 680, dan 901',
    },
    statements: [
      {
        id: 's1',
        text: 'Bilangan 314 dan 680 merupakan bilangan genap.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bilangan 527 merupakan bilangan genap karena angka ratusannya 5.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Angka 0 pada bilangan 901 menempati nilai tempat puluhan.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Bilangan genap memiliki angka satuan 0, 2, 4, 6, atau 8; 314 (satuan 4) dan 680 (satuan 0) keduanya genap (BENAR).\n2. 527 berakhiran angka 7 sehingga merupakan bilangan ganjil (SALAH).\n3. Pada 901: 9 = ratusan, 0 = puluhan, 1 = satuan (BENAR).',
  },
  {
    id: 21,
    type: 'pgk_kategori',
    topic: 'Penjumlahan & Target Bilangan 1000',
    difficulty: 'Sukar',
    text: 'Sekolah mengadakan bakti sosial dengan target mengumpulkan 1.000 paket alat tulis. Kelas 1 mengumpulkan 265 paket, Kelas 2 mengumpulkan 335 paket, dan Kelas 3 mengumpulkan 280 paket. Tentukan kebenaran dari setiap pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Jumlah paket yang dikumpulkan Kelas 1 dan Kelas 2 adalah 600 paket.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Total paket yang sudah terkumpul dari ketiga kelas adalah 880 paket.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Sekolah masih membutuhkan 220 paket lagi agar mencapai target 1.000 paket.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Kelas 1 + Kelas 2 = 265 + 335 = 600 paket (BENAR).\n2. Total 3 kelas = 600 + 280 = 880 paket (BENAR).\n3. Kekurangan menuju 1.000 = 1.000 - 880 = 120 paket, bukan 220 paket (SALAH).',
  },
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Pemecahan Masalah Kontekstual Bilangan Cacah',
    difficulty: 'Sukar',
    text: 'Di taman sekolah SD Negeri 1 Sangkaragung ditanam 345 bunga mawar dan 428 bunga melati. Karena musim kemarau, 53 bunga mawar layu sehingga diganti dengan 80 bunga mawar baru. Tentukan kebenaran dari setiap pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Jumlah seluruh bunga mawar dan melati mula-mula adalah 773 tangkai.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jumlah bunga mawar sekarang setelah diganti adalah 372 tangkai.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jumlah seluruh bunga di taman sekolah sekarang adalah 800 tangkai.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Jumlah mula-mula = 345 + 428 = 773 tangkai (BENAR).\n2. Bunga mawar sekarang = 345 - 53 + 80 = 292 + 80 = 372 tangkai (BENAR).\n3. Total seluruh bunga sekarang = 372 + 428 = 800 tangkai (BENAR).',
  },
];
