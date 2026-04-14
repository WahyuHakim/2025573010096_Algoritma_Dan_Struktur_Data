// 04-array-method.js
// ================================================
// PENGULANGAN ARRAY MODERN: forEach, map, filter, reduce
// ================================================

const nilaiMahasiswa = [75, 90, 55, 82, 68, 95, 48, 77];

// --- 1. forEach: menjalankan aksi untuk setiap data ---
console.log('=== forEach: Tampilkan Semua Nilai ===');
nilaiMahasiswa.forEach((nilai, indeks) => {
    console.log(` Mahasiswa-${indeks + 1}: ${nilai}`);
});

// --- 2. map: mengubah isi array menjadi bentuk baru ---
// ubah nilai angka menjadi huruf
const gradeHuruf = nilaiMahasiswa.map(nilai => {
    if (nilai >= 90) return 'A';
    if (nilai >= 80) return 'B';
    if (nilai >= 70) return 'C';
    if (nilai >= 60) return 'D';
    return 'E';
});

console.log('\n=== map: Nilai ke Grade ===');
console.log('Nilai :', nilaiMahasiswa);
console.log('Grade :', gradeHuruf);

// --- 3. filter: mengambil data sesuai syarat ---
const nilaiLulus = nilaiMahasiswa.filter(nilai => nilai >= 60);
const nilaiGagal = nilaiMahasiswa.filter(nilai => nilai < 60);

console.log('\n=== filter: Lulus dan Tidak Lulus ===');
console.log('Semua nilai :', nilaiMahasiswa);
console.log('Nilai lulus :', nilaiLulus);
console.log('Nilai gagal :', nilaiGagal);

// --- 4. reduce: menjumlahkan semua nilai ---
const totalNilai = nilaiMahasiswa.reduce((akumulator, nilai) => {
    return akumulator + nilai;
}, 0);      // nilai awal penjumlahan

const rataRata = totalNilai / nilaiMahasiswa.length;
console.log('\n=== reduce: Statistik Nilai ===');
console.log('Total nilai :', totalNilai);
console.log('Rata-rata :', rataRata.toFixed(2));

// --- 5. gabungkan beberapa method sekaligus ---
const rataRataNilaiLulus = nilaiMahasiswa
.filter(nilai => nilai >= 60)   // ambil nilai yang lolos
.reduce((acc, val, idx, arr) => {
return acc + val / arr.length;  // hitung rata-rata langsung
}, 0);

console.log('\n=== Method Chaining ===');
console.log('Rata-rata nilai lulus:', rataRataNilaiLulus.toFixed(2));

// ============================
// LATIHAN 4: DATA PRODUK
// ============================

// daftar produk
const produk = [
    { nama: 'Laptop', harga: 8500000, stok: 5 },
    { nama: 'Mouse', harga: 150000, stok: 0 },
    { nama: 'Keyboard', harga: 450000, stok: 12 },
    { nama: 'Monitor', harga: 3200000, stok: 0 },
    { nama: 'Headset', harga: 350000, stok: 8 }
];

// ambil produk yang masih ada stok
const produkTersedia = produk.filter(p => p.stok > 0);
console.log('\n=== Produk Tersedia ===');
console.log(produkTersedia);

// ambil nama produk saja
const namaProduk = produkTersedia.map(p => p.nama);
console.log('\nNama Produk Tersedia:', namaProduk);

// hitung total nilai semua barang
const totalInventaris = produkTersedia.reduce((total, p) => {
    return total + (p.harga * p.stok);
}, 0);

console.log('\nTotal Nilai Inventaris:', totalInventaris);

// tampilkan semua produk dengan status
console.log('\n=== Daftar Produk ===');
produk.forEach(p => {
    if (p.stok > 0) {
        console.log(`[TERSEDIA] ${p.nama} - Rp${p.harga} (${p.stok} unit)`);
    } else {
        console.log(`[HABIS] ${p.nama} - Rp${p.harga}`);
    }
});