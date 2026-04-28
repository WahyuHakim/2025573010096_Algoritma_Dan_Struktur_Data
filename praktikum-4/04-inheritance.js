// 04-inheritance.js
// ================================================
// Pewarisan: extends, super, dan override
// ================================================

// --- Class induk ---
class Kendaraan {
  constructor(merk, model, tahun) {
    this.merk = merk;
    this.model = model;
    this.tahun = tahun;
    this.kecepatanSaatIni = 0;
  }

  // Method untuk menambah kecepatan
  akselerasi(tambahan) {
    this.kecepatanSaatIni += tambahan;
    console.log(`${this.merk} ${this.model}: kecepatan ${this.kecepatanSaatIni} km/h`);
  }

  // Method untuk menghentikan kendaraan
  rem() {
    this.kecepatanSaatIni = 0;
    console.log(`${this.merk} ${this.model}: berhenti.`);
  }

  // Method untuk menampilkan informasi kendaraan
  info() {
    return `${this.tahun} ${this.merk} ${this.model}`;
  }
}

// --- Class turunan: Mobil ---
class Mobil extends Kendaraan {
  constructor(merk, model, tahun, jumlahPintu) {
    super(merk, model, tahun); // memanggil constructor dari class induk
    this.jumlahPintu = jumlahPintu; // menambahkan properti baru
  }

  // Method khusus untuk mobil
  bunyikanKlakson() {
    console.log(`${this.merk}: Beep beep!`);
  }

  // Mengubah method info dari class induk
  info() {
    const infoParent = super.info(); // mengambil hasil dari parent
    return `${infoParent} (${this.jumlahPintu} pintu)`;
  }
}

// --- Class turunan: Motor ---
class Motor extends Kendaraan {
  constructor(merk, model, tahun, jenisMotor) {
    super(merk, model, tahun);
    this.jenisMotor = jenisMotor;
  }

  // Method tambahan untuk motor
  wheelie() {
    if (this.kecepatanSaatIni > 50) {
      console.log(`${this.merk}: Wheelie!`);
    } else {
      console.log('Kecepatan terlalu rendah untuk wheelie.');
    }
  }

  // Mengubah tampilan info
  info() {
    return `${super.info()} [${this.jenisMotor}]`;
  }
}

// --- Membuat object dari class ---
const mobil = new Mobil('Toyota', 'Avanza', 2022, 4);
const motor = new Motor('Honda', 'CBR600RR', 2021, 'Sport');

console.log('=== Info Kendaraan ===');
console.log(mobil.info());
console.log(motor.info());

console.log('\n=== Aksi ===');
mobil.akselerasi(60); // method dari class induk
mobil.bunyikanKlakson(); // method khusus mobil
motor.akselerasi(80);
motor.wheelie();
motor.rem();

// --- Mengecek tipe object ---
console.log('\n=== instanceof ===');
console.log('mobil instanceof Mobil :', mobil instanceof Mobil);
console.log('mobil instanceof Kendaraan :', mobil instanceof Kendaraan);
console.log('motor instanceof Mobil :', motor instanceof Mobil);

// --- Perbedaan hasil method pada tiap object ---
console.log('\n=== Polymorphism ===');
const semuaKendaraan = [mobil, motor];
semuaKendaraan.forEach(k => console.log(k.info()));

// =================================================
// LATIHAN
// =================================================

// Class induk untuk semua hewan
class Hewan {
  constructor(nama, suara) {
    this.nama = nama;
    this.suara = suara;
  }

  // Method untuk menampilkan suara hewan
  bersuara() {
    console.log(`${this.nama} berkata: ${this.suara}`);
  }

  // Method untuk menampilkan info dasar
  info() {
    return `Nama: ${this.nama}`;
  }
}

// Class turunan Anjing
class Anjing extends Hewan {
  // Method khusus anjing
  fetch() {
    console.log(`${this.nama} mengambil bola!`);
  }

  // Mengubah tampilan info
  info() {
    return `${super.info()} (jenis: anjing)`;
  }
}

// Class turunan Kucing
class Kucing extends Hewan {
  // Method khusus kucing
  cakarSofa() {
    console.log(`${this.nama} mencakar sofa!`);
  }

  // Menambahkan perilaku pada method bersuara
  bersuara() {
    super.bersuara();
    console.log('Purrr...');
  }

  // Mengubah tampilan info
  info() {
    return `${super.info()} (jenis: kucing)`;
  }
}

// Membuat beberapa object
const anjing1 = new Anjing('Buddy', 'Guk guk');
const anjing2 = new Anjing('Rocky', 'Woof');

const kucing1 = new Kucing('Milo', 'Meong');
const kucing2 = new Kucing('Luna', 'Miaw');

// Menggabungkan semua ke dalam array
const semuaHewan = [anjing1, anjing2, kucing1, kucing2];

console.log('\n=== Polymorphism Hewan ===');

// Menjalankan method yang sama pada object berbeda
semuaHewan.forEach(h => {
  h.bersuara();
  console.log(h.info());
});

// Contoh method khusus
anjing1.fetch();
kucing1.cakarSofa();