// 02-arrow-callback.js
// ================================================
// PENULISAN FUNCTION MODERN DAN PENGGUNAAN CALLBACK
// ================================================

// --- 1. Perbandingan cara membuat function ---
// metode lama
function kuadratBiasa(x) {
    return x * x;
}

// metode modern dengan arrow
const kuadrat = (x) => {
    return x * x;
};

// versi paling singkat
const kuadratRingkas = x => x * x;

console.log('=== Perbandingan Penulisan ===');
console.log('Biasa :', kuadratBiasa(5));        // hasil kuadrat
console.log('Arrow :', kuadrat(5));             // hasil sama
console.log('Ringkas :', kuadratRingkas(5));    // hasil sama

// --- 2. Arrow function dengan lebih dari satu input ---
const luas = (panjang, lebar) => panjang * lebar;
const salam = (nama, waktu) => `Selamat ${waktu}, ${nama}!`;

console.log('Luas 4x6 :', luas(4, 6));
console.log(salam('Budi', 'Pagi'));

// --- 3. Function yang menerima function lain ---
function lakukanOperasi(angka, operasiCallback) {
    console.log(`Angka awal: ${angka}`);
    const hasil = operasiCallback(angka);
    console.log(`Hasil setelah operasi: ${hasil}`);
}

console.log('\n=== Callback ===');
lakukanOperasi(7, kuadratRingkas);       // kirim fungsi kuadrat
lakukanOperasi(10, x => x + 100);        // kirim fungsi langsung
lakukanOperasi(20, function(x) {         // kirim fungsi biasa
return x / 2;
});

// --- 4. Contoh penggunaan callback dengan timer ---
console.log('\n=== setTimeout (Callback) ===');
console.log('Pesan 1: Sebelum timer');

setTimeout(() => {
    console.log('Pesan 3: Ini dari dalam setTimeout (setelah 1 detik)');
}, 1000);   // jeda 1 detik

console.log('Pesan 2: Setelah mendaftarkan timer');

// ============================
// LATIHAN 2: OLAH KALIMAT DENGAN CALLBACK
// ============================

// ubah semua huruf jadi kapital
const keHurufBesar = (teks) => teks.toUpperCase();

// tambah tanda seru di akhir
const tambahSeru = (teks) => teks + '!!!';

// hitung jumlah kata dalam kalimat
const hitungKata = (teks) => teks.split(' ').length;

// jalankan transformasi dengan callback
function prosesKalimat(kalimat, transformasiCallback) {
    const hasil = transformasiCallback(kalimat);
    console.log('Hasil:', hasil);
}

// percobaan hasil
console.log('\n=== LATIHAN CALLBACK ===');

const kalimat = 'belajar javascript itu menyenangkan';

prosesKalimat(kalimat, keHurufBesar);
prosesKalimat(kalimat, tambahSeru);
prosesKalimat(kalimat, hitungKata);