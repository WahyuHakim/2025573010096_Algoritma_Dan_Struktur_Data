// ============================
// TUGAS 2: FUNCTION BERULANG
// ============================

// menghitung perpangkatan tanpa operator bawaan
function pangkat(basis, eksponen) {
    if (eksponen === 0) return 1; // kondisi berhenti
    return basis * pangkat(basis, eksponen - 1); // proses berulang
}

// membalik urutan karakter dalam string
function balikString(str) {
    if (str.length <= 1) return str; // kondisi akhir
    return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

// mengecek apakah kata sama saat dibalik
function cekPalindrom(str) {
    const hasilBalik = balikString(str);
    return str === hasilBalik;
}

// ============================
// UJI HASIL
// ============================

console.log('=== PANGKAT ===');
console.log('2^3 =', pangkat(2, 3));
console.log('5^2 =', pangkat(5, 2));
console.log('3^4 =', pangkat(3, 4));

console.log('\n=== BALIK STRING ===');
console.log('halo ->', balikString('halo'));
console.log('javascript ->', balikString('javascript'));

console.log('\n=== CEK PALINDROM ===');
const kata = ['katak', 'civic', 'level', 'halo'];

kata.forEach(k => {
    const hasil = cekPalindrom(k) ? 'Palindrom' : 'Bukan palindrom';
    console.log(`${k} -> ${hasil}`);
});