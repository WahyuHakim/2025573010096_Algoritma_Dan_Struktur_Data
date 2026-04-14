// 05-rekursi.js
// ================================================
// FUNCTION BERULANG: PEMANGGILAN DIRI SENDIRI
// ================================================

// --- 1. Menghitung faktorial ---
function faktorial(n) {
    // kondisi berhenti
    if (n <= 1) return 1;
    // proses berulang
    return n * faktorial(n - 1);
}

console.log('=== Faktorial ===');
console.log('0! =', faktorial(0));  // hasil standar
console.log('1! =', faktorial(1));  // hasil dasar
console.log('5! =', faktorial(5));  // perhitungan bertahap
console.log('7! =', faktorial(7));  // hasil lebih besar

// --- 2. Deret fibonacci ---
// pola angka bertambah dari dua angka sebelumnya
function fibonacci(n) {
    // kondisi awal
    if (n === 0) return 0;
    if (n === 1) return 1;

    // proses hitung berulang
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('\n=== Fibonacci ===');
for (let i = 0; i <= 8; i++) {
    process.stdout.write(fibonacci(i) + ' ');
}
console.log(''); // pindah baris

// --- 3. Menjumlahkan isi array dengan rekursi ---
function jumlahArray(arr, indeks = 0) {
    // berhenti saat data habis
    if (indeks === arr.length) return 0;

    // tambah nilai satu per satu
    return arr[indeks] + jumlahArray(arr, indeks + 1);
}

const angka = [3, 7, 2, 9, 5];
console.log('\n=== Jumlah Array dengan Rekursi ===');
console.log('Array :', angka);
console.log('Jumlah :', jumlahArray(angka)); // total hasil

// --- 4. Hitung mundur ---
function countdown(n) {
    if (n < 0) {
        console.log('Selesai!');
        return;
}
    
console.log(n);
countdown(n - 1);
}

console.log('\n=== Countdown Rekursif ===');
countdown(5);