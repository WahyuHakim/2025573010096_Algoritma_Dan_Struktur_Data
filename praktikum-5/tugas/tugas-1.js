// ===============================
// TUGAS 1
// ===============================

// helper ukur waktu
function ukurWaktu(label, fn) {
  const start = Date.now();
  fn();
  const end = Date.now();
  console.log(label, ":", end - start, "ms");
}

// ===============================
// FUNGSI A: INTERSECTION
// ===============================

// O(n²) Time, O(1) Space
// Alasan: nested loop, tanpa struktur tambahan
function intersectionLambat(arr1, arr2) {
  const hasil = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !hasil.includes(arr1[i])) {
        hasil.push(arr1[i]);
      }
    }
  }
  return hasil;
}

// O(n) Time, O(n) Space
// Alasan: pakai Set untuk lookup cepat
function intersectionCepat(arr1, arr2) {
  const set2 = new Set(arr2);
  const hasil = [];

  for (const x of arr1) {
    if (set2.has(x) && !hasil.includes(x)) {
      hasil.push(x);
    }
  }
  return hasil;
}

// ===============================
// FUNGSI B: ANAGRAM
// ===============================

// O(n * k log k) Time, O(n) Space
// n = jumlah kata, k = panjang kata
// Alasan: setiap kata di-sort lalu dimasukkan ke object
function kelompokAnagram(arr) {
  const map = {};

  for (const kata of arr) {
    const key = kata.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(kata);
  }

  return Object.values(map);
}

// ===============================
// FUNGSI C: KONDISI KUADRAT
// ===============================

// O(n³) Time, O(1) Space
// Alasan: 3 loop bersarang
function cekKuadratLambat(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (arr[i] + arr[j] === arr[k] * arr[k]) {
          return true;
        }
      }
    }
  }
  return false;
}

// O(n log n) Time, O(n) Space
// Alasan: sort + binary search
function cekKuadratCepat(arr) {
  const sorted = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      const target = sorted[i] + sorted[j];

      // binary search target
      let kiri = 0;
      let kanan = sorted.length - 1;

      while (kiri <= kanan) {
        const mid = Math.floor((kiri + kanan) / 2);
        const kuadrat = sorted[mid] * sorted[mid];

        if (kuadrat === target) return true;
        if (kuadrat < target) kiri = mid + 1;
        else kanan = mid - 1;
      }
    }
  }
  return false;
}

// ===============================
// TEST KECIL
// ===============================

console.log("=== TEST KECIL ===");

console.log("Intersection:", intersectionCepat([1, 2, 3], [2, 3, 4]));

console.log(
  "Anagram:",
  kelompokAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]),
);

console.log("Cek Kuadrat:", cekKuadratCepat([2, 3, 5]));

// ===============================
// BENCHMARK DATA BESAR
// ===============================

console.log("\n=== BENCHMARK ===");

// data besar
const arr1 = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 5000),
);
const arr2 = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 5000),
);

ukurWaktu("Intersection Lambat O(n²)", () => intersectionLambat(arr1, arr2));

ukurWaktu("Intersection Cepat O(n)", () => intersectionCepat(arr1, arr2));

// anagram
const words = Array.from({ length: 5000 }, () =>
  Math.random().toString(36).substring(2, 5),
);

ukurWaktu("Anagram", () => kelompokAnagram(words));

// cek kuadrat
const angka = Array.from({ length: 2000 }, () =>
  Math.floor(Math.random() * 100),
);

ukurWaktu("Kuadrat Lambat O(n³)", () => cekKuadratLambat(angka));

ukurWaktu("Kuadrat Cepat O(n log n)", () => cekKuadratCepat(angka));