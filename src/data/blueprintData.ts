import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase A (Kelas 2) Mata Pelajaran Matematika
 * Lingkup Materi: Bilangan Cacah hingga 1000 (22 Butir Soal)
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 22 butir soal Matematika Kelas 2 (Bilangan Cacah hingga 1000)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membilang dan menentukan banyaknya benda dalam bentuk bilangan cacah sampai 1.000 menggunakan model kubus satuan.',
    indikatorSoal:
      'Disajikan gambar susunan kubus ratusan, puluhan, dan satuan, peserta didik dapat menentukan lambang bilangan cacah yang sesuai.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membaca dan menuliskan lambang bilangan cacah sampai 1.000 dengan tepat.',
    indikatorSoal:
      'Disajikan nama bilangan tiga angka dalam bentuk teks, peserta didik dapat menuliskan lambang bilangannya dengan benar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan nilai tempat (ratusan, puluhan, satuan) pada bilangan cacah sampai 1.000.',
    indikatorSoal:
      'Disajikan sebuah bilangan tiga angka, peserta didik dapat menentukan nilai tempat dari salah satu angka penyusunnya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melengkapi pola bilangan loncat pada garis bilangan cacah sampai 1.000.',
    indikatorSoal:
      'Disajikan gambar garis bilangan berpola lompatan tetap dengan satu titik kosong, peserta didik dapat menentukan bilangan yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dan mengurutkan beberapa bilangan cacah sampai 1.000.',
    indikatorSoal:
      'Disajikan empat bilangan cacah tiga angka secara acak, peserta didik dapat mengurutkannya dari nilai terkecil ke terbesar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan operasi penjumlahan bilangan cacah sampai 1.000 dengan teknik menyimpan.',
    indikatorSoal:
      'Disajikan ilustrasi dan soal cerita tentang tumpukan buku di kelas, peserta didik dapat menghitung jumlah total buku dengan benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah penjumlahan tiga bilangan cacah sampai 1.000 dalam konteks sehari-hari.',
    indikatorSoal:
      'Disajikan ilustrasi tiga keranjang panen jeruk beserta jumlah masing-masing, peserta didik dapat menghitung total hasil panen.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan operasi pengurangan bilangan cacah sampai 1.000 dengan teknik meminjam.',
    indikatorSoal:
      'Disajikan ilustrasi etalase kue kantin dan jumlah kue yang terjual, peserta didik dapat menentukan sisa kue yang belum terjual.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menguraikan (dekomposisi) bilangan cacah sampai 1.000 ke dalam bentuk panjang nilai tempat.',
    indikatorSoal:
      'Disajikan bilangan tiga angka dengan angka nol di tempat puluhan, peserta didik dapat menentukan bentuk panjang yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah kontekstual yang melibatkan operasi penjumlahan dan pengurangan bilangan cacah hingga 1.000.',
    indikatorSoal:
      'Disajikan cerita perubahan jumlah buku perpustakaan (sumbangan dan peminjaman), peserta didik dapat menghitung banyak buku saat ini.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyusun bilangan cacah terbesar dan terkecil serta menentukan nilai angka dari kumpulan kartu angka.',
    indikatorSoal:
      'Disajikan gambar tiga kartu angka (2, 7, 5), peserta didik dapat memilih seluruh pernyataan yang benar terkait bilangan tiga angka yang dapat dibentuk.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis jumlah dan selisih dari tiga kumpulan benda bernilai ratusan.',
    indikatorSoal:
      'Disajikan ilustrasi tiga toples kelereng beserta jumlahnya, peserta didik dapat memilih pernyataan penjumlahan dan selisih yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan komposisi dan dekomposisi operasi hitung bilangan cacah yang menghasilkan bilangan target hingga 1.000.',
    indikatorSoal:
      'Disajikan bilangan target 600 dan tiga operasi hitung penjumlahan/pengurangan, peserta didik dapat memilih semua operasi yang hasilnya 600.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan nilai bilangan, nilai tempat, dan perbandingan dari model kubus satuan.',
    indikatorSoal:
      'Disajikan gambar kubus satuan (5 ratusan, 2 puluhan, 6 satuan), peserta didik dapat menilai kebenaran tiga pernyataan terkait bilangan tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membaca, membandingkan, dan menentukan nilai angka pada bilangan cacah hingga 1.000.',
    indikatorSoal:
      'Disajikan tiga nomor dada peserta lomba (409, 490, 904), peserta didik dapat menentukan kebenaran tiga pernyataan tentang nama, urutan, dan nilai angka.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi aturan pola bilangan dan melengkapi nilai yang hilang pada garis bilangan hingga 1.000.',
    indikatorSoal:
      'Disajikan gambar garis bilangan berpola loncat 25 dengan dua huruf pengganti (A dan B), peserta didik dapat menilai kebenaran tiga pernyataan terkait pola dan nilainya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan bilangan dan menghitung selisih data bilangan cacah hingga 1.000.',
    indikatorSoal:
      'Disajikan catatan jumlah pengunjung kebun binatang selama tiga hari, peserta didik dapat menentukan kebenaran tiga pernyataan perbandingan dan selisih.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis penjumlahan dan perbandingan bilangan cacah sampai 1.000 berdasarkan stimulus gambar.',
    indikatorSoal:
      'Disajikan ilustrasi tiga rak buku perpustakaan beserta jumlah bukunya, peserta didik dapat menentukan kebenaran tiga pernyataan tentang jumlah dan perbandingan buku.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah pengurangan bertahap bilangan cacah hingga 1.000.',
    indikatorSoal:
      'Disajikan cerita tabungan koin yang ditukarkan dan diberikan secara bertahap, peserta didik dapat menilai kebenaran tiga pernyataan tentang sisa koin.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan bilangan genap dan ganjil serta menentukan nilai tempat pada bilangan cacah hingga 1.000.',
    indikatorSoal:
      'Disajikan gambar empat kartu bilangan (314, 527, 680, 901), peserta didik dapat menentukan kebenaran tiga pernyataan tentang bilangan genap/ganjil dan nilai tempat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis penjumlahan bertahap dan selisih menuju bilangan 1.000 dalam konteks pemecahan masalah.',
    indikatorSoal:
      'Disajikan cerita target bakti sosial 1.000 paket dari tiga kelas, peserta didik dapat menilai kebenaran tiga pernyataan tentang jumlah terkumpul dan kekurangan target.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat memecahkan masalah kontekstual multi-langkah yang melibatkan penjumlahan dan pengurangan bilangan cacah hingga 1.000.',
    indikatorSoal:
      'Disajikan cerita jumlah bunga mawar dan melati yang berkurang lalu ditambah kembali, peserta didik dapat menentukan kebenaran tiga pernyataan hasil perhitungan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan matematika.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (
    t.includes('bilangan') ||
    t.includes('kubus') ||
    t.includes('nilai tempat') ||
    t.includes('penjumlahan') ||
    t.includes('pengurangan') ||
    t.includes('operasi') ||
    t.includes('kartu') ||
    t.includes('genap')
  ) {
    return 'Bilangan';
  }
  if (t.includes('pola') || t.includes('garis')) {
    return 'Bilangan';
  }
  return 'Bilangan';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
