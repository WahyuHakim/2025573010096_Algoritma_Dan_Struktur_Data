// =================================================
// TUGAS 1
// =================================================

// Class dasar untuk semua produk
class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  // Menampilkan informasi produk
  info() {
    return `[${this.id}] ${this.nama} | Rp${this.harga} | Stok: ${this.stok}`;
  }

  // Mengecek apakah produk masih tersedia
  tersedia() {
    return this.stok > 0;
  }

  // Mengurangi stok saat terjadi penjualan
  jual(jumlah) {
    if (jumlah <= 0) {
      console.log('Jumlah tidak valid');
      return;
    }
    if (jumlah > this.stok) {
      console.log('Stok tidak mencukupi');
      return;
    }
    this.stok -= jumlah;
    console.log(`${this.nama} terjual ${jumlah}`);
  }
}

// Produk digital
class ProdukDigital extends Produk {
  constructor(id, nama, harga, stok, ukuranFile, formatFile) {
    super(id, nama, harga, stok);
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;
  }

  // Menampilkan info tambahan
  info() {
    return `${super.info()} | ${this.ukuranFile}MB | ${this.formatFile}`;
  }

  // Simulasi download
  download() {
    console.log(`Mengunduh ${this.nama}...`);
  }

  // Tidak mengurangi stok
  jual() {
    console.log(`${this.nama} adalah produk digital, tidak mengurangi stok`);
  }
}

// Produk fisik
class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram, dimensi) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
    this.dimensi = dimensi;
  }

  // Menampilkan info tambahan pengiriman
  info() {
    return `${super.info()} | ${this.beratGram} gram | ${this.dimensi}`;
  }

  // Menghitung ongkir berdasarkan berat
  hitungOngkir(tarifPerKg) {
    const beratKg = this.beratGram / 1000;
    return beratKg * tarifPerKg;
  }
}

// Membuat data produk
const p1 = new ProdukDigital(1, 'Ebook JS', 50000, 999, 5, 'PDF');
const p2 = new ProdukDigital(2, 'Video Course', 150000, 999, 1500, 'MP4');

const p3 = new ProdukFisik(3, 'Mouse', 75000, 10, 200, '10x5x3 cm');
const p4 = new ProdukFisik(4, 'Keyboard', 200000, 5, 800, '45x15x3 cm');

// Menggabungkan ke dalam array
const daftarProduk = [p1, p2, p3, p4];

// (a) Menampilkan semua info produk
console.log('=== Semua Produk ===');
daftarProduk.forEach(p => console.log(p.info()));

// (b) Filter produk yang tersedia
console.log('\n=== Produk Tersedia ===');
const tersedia = daftarProduk.filter(p => p.tersedia());
tersedia.forEach(p => console.log(p.nama));

// (c) Mengambil nama produk saja
console.log('\n=== Nama Produk ===');
const namaProduk = daftarProduk.map(p => p.nama);
console.log(namaProduk);