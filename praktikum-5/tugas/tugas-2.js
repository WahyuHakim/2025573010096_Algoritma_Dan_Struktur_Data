// tugas-2.js

// =======================
// DEFINISI FUNGSI
// =======================

// O(1)
// Time: O(1) | Space: O(1)
function fn_O1(n) {
  return n + 1;
}

// O(n)
// Time: O(n) | Space: O(1)
function fn_On(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}

// O(n log n)
// Time: O(n log n) | Space: O(1)
function fn_OnLogn(n) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    // loop log2(n)
    for (let j = 1; j < n; j *= 2) {
      total += j;
    }
  }

  return total;
}

// O(n^2)
// Time: O(n^2) | Space: O(1)
function fn_On2(n) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += i + j;
    }
  }

  return total;
}

// =======================
// FUNGSI UKUR WAKTU
// =======================

function ukurWaktu(fn, n) {
  const start = Date.now();
  fn(n);
  const end = Date.now();
  return end - start;
}

// =======================
// BENCHMARK
// =======================

function benchmarkSemua(ukuranData) {
  for (let i = 0; i < ukuranData.length; i++) {
    const n = ukuranData[i];

    console.log("\nUkuran data:", n);

    console.log("O(1):", ukurWaktu(fn_O1, n), "ms");
    console.log("O(n):", ukurWaktu(fn_On, n), "ms");
    console.log("O(n log n):", ukurWaktu(fn_OnLogn, n), "ms");
    console.log("O(n^2):", ukurWaktu(fn_On2, n), "ms");
  }
}

// =======================
// JALANKAN
// =======================

benchmarkSemua([100, 500, 1000, 5000, 10000]);

/*
Analisis hasil:

1. O(1)
Waktu hampir tidak berubah walaupun n bertambah.

2. O(n)
Waktu naik secara linear.
Jika n naik 10x, waktu juga kira-kira naik 10x.

3. O(n log n)
Lebih lambat dari O(n), tapi jauh lebih cepat dari O(n^2).
Kenaikan tidak terlalu tajam.

4. O(n^2)
Paling lambat.
Saat n besar, waktu naik sangat drastis.

Kesimpulan:
Hasil sesuai teori Big O.
Semakin tinggi kompleksitas, semakin cepat waktu eksekusi membesar saat n naik.
*/