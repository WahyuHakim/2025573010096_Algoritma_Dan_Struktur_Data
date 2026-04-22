// 04-space-complexity.js

// --- O(1) Space: hanya pakai variabel tambahan konstan ---
function jumlahArray(arr) {
  let total = 0; // hanya 1 variabel tambahan
  for (const x of arr) total += x;
  return total;
}

// --- O(n) Space: membuat struktur baru sebesar input ---
function duplikasiArray(arr) {
  const baru = []; // array baru tumbuh seiring arr
  for (const x of arr) baru.push(x * 2);
  return baru;
}

// --- O(n) Space: rekursi (call stack) ---
function faktorialRekursif(n) {
  if (n <= 1) return 1;
  return n * faktorialRekursif(n - 1); // n frame di call stack
}

// --- O(1) Space: faktorial iteratif ---
function faktorialIteratif(n) {
  let hasil = 1;
  for (let i = 2; i <= n; i++) hasil *= i; // hanya 2 variabel
  return hasil;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Jumlah array :", jumlahArray(arr)); // O(1) space
console.log("Duplikasi array:", duplikasiArray(arr)); // O(n) space
console.log("Faktorial 10 rekursif :", faktorialRekursif(10));
console.log("Faktorial 10 iteratif :", faktorialIteratif(10));

// Visualisasi: hitung elemen unik (O(n) space)
function hitungUnik(arr) {
  const seen = new Set(); // Set tumbuh hingga n elemen
  for (const x of arr) seen.add(x);
  return seen.size;
}
const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log("Elemen unik:", hitungUnik(dataAcak)); // 7

// --- cariPasanganLambat ---
// Time: O(n²)
// Space: O(1)
// Alasan: nested loop, tidak pakai struktur tambahan
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

// --- cariPasanganCepat ---
// Time: O(n)
// Space: O(n)
// Alasan: 1 loop + Set untuk lookup cepat
function cariPasanganCepat(arr, target) {
  const seen = new Set();

  for (const x of arr) {
    const pasangan = target - x;
    if (seen.has(pasangan)) {
      return [pasangan, x];
    }
    seen.add(x);
  }
  return null;
}

// --- Test kecil ---
const testArr = [2, 7, 11, 15];
const target = 9;

console.log("Lambat:", cariPasanganLambat(testArr, target));
console.log("Cepat :", cariPasanganCepat(testArr, target));

// --- Benchmark ---
function ukurWaktu(label, fn) {
  const start = Date.now();
  fn();
  const end = Date.now();
  console.log(label, ":", end - start, "ms");
}

// buat array 50.000 angka acak
const dataBesar = Array.from({ length: 50000 }, () =>
  Math.floor(Math.random() * 100000),
);

// target yang kemungkinan tidak ada
const targetBesar = -1;

console.log("\n=== Benchmark ===");

ukurWaktu("Lambat O(n²)", () => cariPasanganLambat(dataBesar, targetBesar));

ukurWaktu("Cepat  O(n)", () => cariPasanganCepat(dataBesar, targetBesar));