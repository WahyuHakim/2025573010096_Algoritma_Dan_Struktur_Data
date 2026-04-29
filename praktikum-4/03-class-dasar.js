// 03-class-dasar.js
// ================================================
// Class: Constructor, Properti, dan Method
// ================================================

// --- 1. Membuat class ---
class Mahasiswa {
  // Constructor dijalankan saat object dibuat dari class
  constructor(nama, nim, jurusan) {
    this.nama = nama; // menyimpan data ke dalam properti
    this.nim = nim;
    this.jurusan = jurusan;
    this.nilai = []; // menyiapkan array kosong untuk nilai
  }

  // Method untuk menambahkan nilai ke dalam array
  tambahNilai(nilai) {
    this.nilai.push(nilai);
  }

  // Method untuk menghitung rata-rata nilai
  hitungRataRata() {
    if (this.nilai.length === 0) return 0;
    const total = this.nilai.reduce((sum, n) => sum + n, 0);
    return (total / this.nilai.length).toFixed(2);
  }

  // Method untuk menampilkan informasi mahasiswa
  getInfo() {
    return `[${this.nim}] ${this.nama} - ${this.jurusan} | IPK: ${this.hitungRataRata()}`;
  }
}

// --- 2. Membuat object dari class ---
const mhs1 = new Mahasiswa('Budi Santoso', '2021001', 'Informatika');
const mhs2 = new Mahasiswa('Siti Rahayu', '2021002', 'Sistem Informasi');
const mhs3 = new Mahasiswa('Ahmad Fauzi', '2021003', 'Informatika');

// Menambahkan beberapa nilai ke masing-masing mahasiswa
mhs1.tambahNilai(85); mhs1.tambahNilai(90); mhs1.tambahNilai(78);
mhs2.tambahNilai(92); mhs2.tambahNilai(88); mhs2.tambahNilai(95);
mhs3.tambahNilai(70); mhs3.tambahNilai(75);

console.log('=== Data Mahasiswa ===');
console.log(mhs1.getInfo());
console.log(mhs2.getInfo());
console.log(mhs3.getInfo());

// --- 3. Method static ---
class Kalkulator {
  // Method ini dipanggil langsung dari class, bukan dari object
  static tambah(a, b) { return a + b; }
  static kurang(a, b) { return a - b; }
  static kali(a, b) { return a * b; }
  static bagi(a, b) {
    if (b === 0) return 'Error: bagi nol';
    return a / b;
  }
}

// Pemanggilan method static menggunakan nama class
console.log('\n=== Static Method ===');
console.log('10 + 5 =', Kalkulator.tambah(10, 5));
console.log('10 * 5 =', Kalkulator.kali(10, 5));
console.log('10 / 0 =', Kalkulator.bagi(10, 0));

// --- 4. Getter dan Setter ---
class Lingkaran {
  constructor(jariJari) {
    this._jariJari = jariJari; // tanda _ sebagai penanda internal
  }

  // Getter untuk mengambil nilai jari-jari
  get jariJari() { return this._jariJari; }

  // Getter untuk menghitung luas
  get luas() { return (Math.PI * this._jariJari ** 2).toFixed(2); }

  // Getter untuk menghitung keliling
  get keliling() { return (2 * Math.PI * this._jariJari).toFixed(2); }

  // Setter untuk mengubah nilai jari-jari
  set jariJari(nilai) {
    if (nilai <= 0) throw new Error('Jari-jari harus positif!');
    this._jariJari = nilai;
  }
}

console.log('\n=== Getter & Setter ===');
const l = new Lingkaran(7);
console.log('Jari-jari:', l.jariJari);
console.log('Luas :', l.luas);
console.log('Keliling :', l.keliling);

l.jariJari = 10;
console.log('Setelah diubah - Luas:', l.luas);

// =================================================
// LATIHAN
// =================================================

// Membuat class untuk rekening bank
class BankAccount {
  constructor(namaPemilik, saldoAwal = 0) {
    this.namaPemilik = namaPemilik;
    this.saldo = saldoAwal;
  }

  // Method untuk menambah saldo
  setor(jumlah) {
    if (jumlah <= 0) {
      console.log('Jumlah setor tidak valid');
      return;
    }
    this.saldo += jumlah;
    console.log(`Setor berhasil: Rp${jumlah}`);
  }

  // Method untuk menarik saldo
  tarik(jumlah) {
    if (jumlah <= 0) {
      console.log('Jumlah tarik tidak valid');
      return;
    }
    if (jumlah > this.saldo) {
      console.log('Saldo tidak mencukupi');
      return;
    }
    this.saldo -= jumlah;
    console.log(`Tarik berhasil: Rp${jumlah}`);
  }

  // Method untuk melihat saldo
  cekSaldo() {
    console.log(`Pemilik: ${this.namaPemilik} | Saldo: Rp${this.saldo}`);
  }

  // Method static untuk transfer antar akun
  static transfer(akun1, akun2, jumlah) {
    console.log(`\nTransfer Rp${jumlah} dari ${akun1.namaPemilik} ke ${akun2.namaPemilik}`);
    if (jumlah <= 0) {
      console.log('Jumlah transfer tidak valid');
      return;
    }
    if (jumlah > akun1.saldo) {
      console.log('Saldo tidak mencukupi untuk transfer');
      return;
    }
    akun1.tarik(jumlah);
    akun2.setor(jumlah);
  }
}

// Membuat dua akun
const akun1 = new BankAccount('Budi', 100000);
const akun2 = new BankAccount('Siti', 50000);

// Uji method setor
akun1.setor(50000);
akun1.setor(-10); // error

// Uji method tarik
akun1.tarik(30000);
akun1.tarik(200000); // saldo tidak cukup
akun1.tarik(-5); // error

// Cek saldo
akun1.cekSaldo();
akun2.cekSaldo();

// Uji transfer
BankAccount.transfer(akun1, akun2, 20000);
BankAccount.transfer(akun1, akun2, 999999); // gagal

// Cek saldo setelah transfer
akun1.cekSaldo();
akun2.cekSaldo();