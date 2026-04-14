// 03-array-dasar.js
// ================================================
// PENGGUNAAN ARRAY: BUAT, AKSES, DAN UBAH DATA
// ================================================

// --- 1. Inisialisasi array ---
const mahasiswa = ['Budi', 'Siti', 'Ahmad', 'Rina'];
const nilai = [85, 92, 78, 95, 88];
console.log('=== Array Awal ===');
console.log('Mahasiswa          :', mahasiswa);
console.log('Nilai              :', nilai);
console.log('Jumlah mahasiswa   :', mahasiswa.length);

// --- 2. Mengambil data berdasarkan posisi ---
console.log('\n=== Akses Elemen ===');
console.log('Elemen pertama     :', mahasiswa[0]);      // posisi awal
console.log('Elemen ketiga      :', mahasiswa[2]);      // posisi ke-3
console.log('Elemen terakhir    :', mahasiswa[mahasiswa.length - 1]);

// --- 3. Mengganti isi array ---
mahasiswa[1] = 'Siti Rahayu';           // ubah data pada posisi tertentu
console.log('\nSetelah diubah:', mahasiswa);

// --- 4. Operasi tambah dan hapus ---
console.log('\n=== Manipulasi Array ===');
mahasiswa.push('Doni');                 // tambah data di belakang
console.log('Setelah push       :', mahasiswa);
mahasiswa.unshift('Zahra');             // tambah data di depan
console.log('Setelah unshift    :', mahasiswa);
const dihapusAkhir = mahasiswa.pop();   // hapus data terakhir
console.log('Dihapus (pop)      :', dihapusAkhir);
console.log('Setelah pop        :', mahasiswa);
const dihapusAwal = mahasiswa.shift();  // hapus data pertama
console.log('Dihapus (shift)    :', dihapusAwal);
console.log('Setelah shift      :', mahasiswa);

// --- 5. Mencari data dalam array ---
console.log('\n=== Pencarian ===');
console.log('Indeks Ahmad       :', mahasiswa.indexOf('Ahmad'));
console.log('Ada Rina?          :', mahasiswa.includes('Rina'));
console.log('Ada Budi?          :', mahasiswa.includes('Budi'));

// --- 6. Mengambil sebagian isi array ---
const sebagian = nilai.slice(1, 4); // ambil dari indeks 1 sampai sebelum 4
console.log('\nNilai asli       :', nilai);
console.log('Slice [1,4]        :', sebagian);

// ============================
// LATIHAN 3: LIST BELANJA
// ============================

// daftar awal barang
let daftarBelanja = ['Beras', 'Gula', 'Minyak', 'Telur', 'Garam'];

// tampilkan semua item dengan nomor urut
console.log('\n=== DAFTAR BELANJA AWAL ===');
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log((i + 1) + '. ' + daftarBelanja[i]);
}

// tambah item baru di bagian akhir
daftarBelanja.push('Susu');
daftarBelanja.push('Kopi');

console.log('\nSetelah tambah item:', daftarBelanja);

// hapus item pertama dari daftar
const itemDihapus = daftarBelanja.shift();
console.log('\nItem yang dihapus:', itemDihapus);

// cek keberadaan item tertentu
const adaSusu = daftarBelanja.includes('Susu');
console.log('\nApakah ada Susu?', adaSusu ? 'Ya, ada' : 'Tidak ada');

// tampilkan total item terbaru
console.log('\nJumlah item sekarang:', daftarBelanja.length);