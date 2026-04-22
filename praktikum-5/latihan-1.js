function hitungKompleksitas(n, fn) {
  const start = Date.now();
  fn(n);
  const end = Date.now();
  console.log("Waktu eksekusi:", end - start, "ms");
}

// Fungsi A
function fungsiA(n) {
  // Big O: O(1)
  // Alasan: hanya 1 operasi, tidak tergantung n
  return n * 2;
}

// Fungsi B
function fungsiB(n) {
  // Big O: O(n²)
  // Alasan: 2 loop bersarang, masing-masing n
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++);
}

// Fungsi C
function fungsiC(n) {
  // Big O: O(log n)
  // Alasan: i dikali 2 setiap iterasi
  for (let i = 1; i < n; i *= 2);
}

// Fungsi D
function fungsiD(n) {
  // Big O: O(n³)
  // Alasan: 3 loop bersarang
  const arr = Array.from({ length: n }, (_, i) => i);
  arr.forEach((x) => arr.forEach((y) => arr.forEach((z) => {})));
}

// Jalankan
console.log("Fungsi A (O(1))");
hitungKompleksitas(1000, fungsiA);

console.log("Fungsi B (O(n²))");
hitungKompleksitas(1000, fungsiB);

console.log("Fungsi C (O(log n))");
hitungKompleksitas(1000, fungsiC);

// pakai n kecil biar tidak berat
console.log("Fungsi D (O(n³))");
hitungKompleksitas(100, fungsiD);