// 01-objek-literal.js
// ================================================
// Objek Literal: Properti, Metode, dan this
// ================================================

// --- 1. Membuat objek ---
const mahasiswa = {
  nama: "Budi Santoso",
  umur: 20,
  jurusan: "Teknik Informatika",
  ipk: 3.75,
  aktif: true,
};

// --- 2. Mengakses data pada objek ---
console.log("=== Akses Properti ===");
console.log("Nama :", mahasiswa.nama); // akses menggunakan titik
console.log("Jurusan :", mahasiswa["jurusan"]); // akses menggunakan kurung siku

// Kurung siku digunakan jika kunci disimpan dalam variabel
const kunciYangDicari = "ipk";
console.log("IPK :", mahasiswa[kunciYangDicari]);

// --- 3. Menambahkan dan mengubah data ---
mahasiswa.email = "budi@email.com"; // menambah data baru
mahasiswa.umur = 21; // mengubah nilai yang sudah ada
console.log("\nSetelah diubah:", mahasiswa);

// --- 4. Menghapus data dari objek ---
delete mahasiswa.aktif;
console.log("Setelah dihapus:", mahasiswa);

// --- 5. Menambahkan metode ke dalam objek ---
const dosen = {
  nama: "Dr. Ahmad Fauzi",
  mataKuliah: "Struktur Data",
  pengalaman: 10, // dalam tahun

  // metode yang dimiliki oleh objek
  perkenalan() {
    // this mengacu pada objek dosen
    return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
  },

  statusSenior() {
    if (this.pengalaman >= 10) {
      return `${this.nama} adalah dosen senior.`;
    }
    return `${this.nama} adalah dosen junior.`;
  },
};

console.log("\n=== Metode Objek ===");
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

// --- 6. Menampilkan isi objek menggunakan perulangan ---
console.log("\n=== Iterasi Objek ===");
for (const kunci in dosen) {
  if (typeof dosen[kunci] !== "function") {
    // hanya menampilkan data, bukan metode
    console.log(` ${kunci}: ${dosen[kunci]}`);
  }
}

// Menampilkan daftar kunci dan nilai dari objek
console.log("Keys :", Object.keys(mahasiswa));
console.log("Values:", Object.values(mahasiswa));

// ================================================
// LATIHAN 1: Objek Buku dan Perpustakaan
// ================================================

// 1. Membuat objek buku
const buku = {
  judul: "Belajar JavaScript",
  pengarang: "Andi",
  tahunTerbit: 2022,
  harga: 100000,
  tersedia: true,

  // 2. Method untuk menampilkan informasi buku
  info() {
    return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}`;
  },

  // 3. Method untuk menghitung harga setelah diskon
  diskon(persen) {
    return this.harga * (1 - persen / 100);
  }
};

console.log("\n=== Info Buku ===");
console.log(buku.info());
console.log("Harga setelah diskon 10%:", buku.diskon(10));

// 4. Membuat array koleksi buku (minimal 3)
const koleksiBuku = [
  {
    judul: "JavaScript Dasar",
    pengarang: "Budi",
    tahunTerbit: 2020,
    harga: 80000,
    tersedia: true,
    info() {
      return `${this.judul} - ${this.pengarang} (${this.tahunTerbit})`;
    }
  },
  {
    judul: "Node.js Lanjutan",
    pengarang: "Siti",
    tahunTerbit: 2021,
    harga: 120000,
    tersedia: false,
    info() {
      return `${this.judul} - ${this.pengarang} (${this.tahunTerbit})`;
    }
  },
  {
    judul: "Struktur Data",
    pengarang: "Ahmad",
    tahunTerbit: 2019,
    harga: 90000,
    tersedia: true,
    info() {
      return `${this.judul} - ${this.pengarang} (${this.tahunTerbit})`;
    }
  }
];

// 5. Menampilkan semua buku menggunakan forEach
console.log("\n=== Semua Buku ===");
koleksiBuku.forEach(b => {
  console.log(b.info());
});

// 6. Mengambil buku yang tersedia
const bukuTersedia = koleksiBuku.filter(b => b.tersedia === true);

console.log("\n=== Buku Tersedia ===");
bukuTersedia.forEach(b => {
  console.log(b.info());
});