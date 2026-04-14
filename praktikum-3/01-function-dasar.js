// 01-function-dasar.js
// ================================================
// DASAR FUNCTION: CARA BUAT, INPUT, OUTPUT, DAN AREA VARIABEL
// ================================================

// --- 1. Function tanpa input dan tanpa hasil balik ---
function sapa() {
    console.log('Halo! Selamat datang di praktikum JavaScript.');
}
sapa();     // menjalankan function
sapa();     // bisa dipanggil berulang kali

// --- 2. Function dengan input ---
function sapaNama(nama) {
    console.log(`Halo, ${nama}! Selamat belajar.`);
}
sapaNama('Budi');
sapaNama('Siti');

// --- 3. Function dengan input dan menghasilkan nilai ---
function tambah(angka1, angka2) {
    const hasil = angka1 + angka2;
    return hasil; // mengirim hasil keluar function
}

const hasilPenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilPenjumlahan);
console.log('7 + 13 =', tambah(7, 13));     // langsung dipakai tanpa simpan

// --- 4. Function dengan nilai awal otomatis ---
// jika tidak diberi nilai kedua, akan pakai nilai bawaan
function hitung(nilai, pengali = 2) {
    return nilai * pengali;
}
console.log(hitung(5));     // hasil pakai nilai default
console.log(hitung(5, 3));  // hasil pakai nilai yang dikirim

// --- 5. Area penggunaan variabel ---
const pesanGlobal = 'Saya ada di mana saja'; // bisa dipakai di mana saja
function cekScope() {
    const pesanLokal = 'Saya hanya ada di dalam function ini'; // hanya di dalam function
    console.log(pesanGlobal); // akses variabel luar
    console.log(pesanLokal); // akses variabel dalam
}

cekScope();
console.log(pesanGlobal);   // masih bisa dipakai di luar
// console.log(pesanLokal); // akan error jika diaktifkan

/* ============================
   BAGIAN LATIHAN: KALKULATOR
============================ */

// fungsi untuk pengurangan
function kurang(a, b) {
    return a - b;
}

// fungsi untuk perkalian
function kali(a, b) {
    return a * b;
}

// fungsi untuk pembagian dengan pengecekan
function bagi(a, b) {
    if (b === 0) {
        console.log('Error: tidak bisa membagi dengan nol');
        return null;
    }
    return a / b;
}

// fungsi utama untuk memilih operasi
function kalkulator(a, operator, b) {
    if (operator === '+') {
        return tambah(a, b);
    } else if (operator === '-') {
        return kurang(a, b);
    } else if (operator === '*') {
        return kali(a, b);
    } else if (operator === '/') {
        return bagi(a, b);
    } else {
        console.log('Operator tidak valid');
        return null;
    }
}

// percobaan hasil
console.log('10 + 5 =', kalkulator(10, '+', 5));
console.log('10 - 5 =', kalkulator(10, '-', 5));
console.log('10 * 5 =', kalkulator(10, '*', 5));
console.log('10 / 5 =', kalkulator(10, '/', 5));
console.log('10 / 0 =', kalkulator(10, '/', 0));