// ============================
// TUGAS 1: PENGOLAHAN DATA NILAI
// ============================

// kumpulan data mahasiswa
const dataMahasiswa = [
    { nama: 'Budi', nilai: 85 },
    { nama: 'Siti', nilai: 92 },
    { nama: 'Ahmad', nilai: 76 },
    { nama: 'Rina', nilai: 60 },
    { nama: 'Doni', nilai: 55 },
    { nama: 'Lina', nilai: 88 }
];

// fungsi untuk menghitung ringkasan nilai
function hitungStatistik(arr) {
    const hasil = arr.reduce((acc, mhs) => {
        acc.total++;
        acc.jumlahNilai += mhs.nilai;

        if (mhs.nilai > acc.tertinggi) acc.tertinggi = mhs.nilai;
        if (mhs.nilai < acc.terendah) acc.terendah = mhs.nilai;

        return acc;
    }, {
        total: 0,
        jumlahNilai: 0,
        tertinggi: -Infinity,
        terendah: Infinity
    });

    return {
        total: hasil.total,
        rataRata: hasil.jumlahNilai / hasil.total,
        tertinggi: hasil.tertinggi,
        terendah: hasil.terendah
    };
}

// ambil mahasiswa yang memenuhi syarat kelulusan
function filterLulus(arr, batasLulus) {
    return arr.filter(mhs => mhs.nilai >= batasLulus);
}

// tambahkan informasi grade ke setiap data
function tambahGrade(arr) {
    return arr.map(mhs => {
        let grade;

        if (mhs.nilai >= 90) grade = 'A';
        else if (mhs.nilai >= 80) grade = 'B';
        else if (mhs.nilai >= 70) grade = 'C';
        else if (mhs.nilai >= 60) grade = 'D';
        else grade = 'E';

        return { ...mhs, grade };
    });
}

// tampilkan semua hasil pengolahan
console.log('=== STATISTIK ===');
const statistik = hitungStatistik(dataMahasiswa);
console.log(`Total: ${statistik.total}`);
console.log(`Rata-rata: ${statistik.rataRata.toFixed(2)}`);
console.log(`Tertinggi: ${statistik.tertinggi}`);
console.log(`Terendah: ${statistik.terendah}`);

console.log('\n=== MAHASISWA LULUS (>= 70) ===');
const lulus = filterLulus(dataMahasiswa, 70);
lulus.forEach(mhs => {
    console.log(`${mhs.nama} - ${mhs.nilai}`);
});

console.log('\n=== DATA DENGAN GRADE ===');
const denganGrade = tambahGrade(dataMahasiswa);
denganGrade.forEach(mhs => {
    console.log(`${mhs.nama} - ${mhs.nilai} (${mhs.grade})`);
});