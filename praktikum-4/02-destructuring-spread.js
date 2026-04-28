// 02-destructuring-spread.js
// =================================================
// DESTRUCTURING, SPREAD OPERATOR, REST PARAMETER
// =================================================

// --- 1. Object Destructuring ---
const produk = {
  nama: 'Laptop Gaming',
  merk: 'TechBrand',
  harga: 12500000,
  stok: 15,
  garansi: '1 tahun',
};

// Ambil beberapa nilai dari object
const { nama, harga, stok } = produk;

console.log('=== Object Destructuring ===');
console.log(`${nama} | Rp${harga.toLocaleString()} | Stok: ${stok}`);

// Alias nama variabel
const { nama: namaProduk, garansi: periodeGaransi } = produk;
console.log(`Produk: ${namaProduk}, Garansi: ${periodeGaransi}`);

// Default value
const { warna = 'Tidak diketahui', stok: jumlahStok = 0 } = produk;
console.log(`Warna: ${warna} | Stok: ${jumlahStok}`);


// --- 2. Array Destructuring ---
const koordinat = [10, 25, 5];
const [x, y, z] = koordinat;

console.log('\n=== Array Destructuring ===');
console.log(`x=${x}, y=${y}, z=${z}`);

// Ambil elemen tertentu saja
const [, kedua] = [100, 200, 300];
console.log('Elemen kedua:', kedua);

// Tukar nilai variabel
let a = 'pertama', b = 'kedua';
console.log('Sebelum:', a, b);
[a, b] = [b, a];
console.log('Sesudah:', a, b);


// --- 3. Spread Operator ---
const buah = ['Apel', 'Mangga', 'Jeruk'];
const sayur = ['Bayam', 'Wortel'];

// Duplikat array
const salinanBuah = [...buah];
salinanBuah.push('Pisang');

console.log('\n=== Spread Operator ===');
console.log('Data awal :', buah);
console.log('Data baru :', salinanBuah);

// Gabungkan data
const semuaMakanan = [...buah, ...sayur, 'Tempe'];
console.log('Gabungan:', semuaMakanan);

// Salin object lalu ubah isinya
const profil = { nama: 'Siti', umur: 22, kota: 'Jakarta' };
const profilBaru = { ...profil, kota: 'Bandung', pekerjaan: 'Developer' };

console.log('Profil lama:', profil);
console.log('Profil baru:', profilBaru);


// --- 4. Rest Parameter ---
function jumlahkanSemua(...angka) {
  return angka.reduce((total, n) => total + n, 0);
}

console.log('\n=== Rest Parameter ===');
console.log('Total:', jumlahkanSemua(1, 2, 3));
console.log('Total:', jumlahkanSemua(10, 20, 30, 40, 50));

// Pisahkan data pertama dan sisanya
const [kepala, ...ekor] = [1, 2, 3, 4, 5];
console.log('Pertama:', kepala);
console.log('Sisa   :', ekor);


// =================================================
// LATIHAN
// =================================================

// Data anggota tim
const timA = ['Budi', 'Siti', 'Ahmad'];
const timB = ['Rina', 'Doni'];

// Gabungkan semua tim + anggota baru
const timGabungan = [...timA, ...timB, 'Zahra'];
console.log('\nTim gabungan:', timGabungan);

// Ambil kapten dan anggota lain
const [kapten, ...anggota] = timGabungan;
console.log('Kapten:', kapten);
console.log('Anggota:', anggota);

// Pengaturan awal
const pengaturanDefault = {
  tema: 'terang',
  bahasa: 'id',
  notifikasi: true,
  fontSize: 14
};

// Salin lalu ubah beberapa nilai
const pengaturanUser = {
  ...pengaturanDefault,
  tema: 'gelap',
  fontSize: 16
};

console.log('\nPengaturan user:', pengaturanUser);

// Ambil nilai tertentu
const { tema, fontSize } = pengaturanUser;
console.log(`Tema: ${tema}, Font Size: ${fontSize}`);