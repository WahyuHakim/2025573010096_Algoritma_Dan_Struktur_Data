// =================================================
// TUGAS 2
// =================================================

// Implementasi Stack
class Stack {
  constructor() {
    this.data = [];
  }

  // Menambahkan elemen ke stack
  push(item) {
    this.data.push(item);
  }

  // Menghapus elemen paling atas
  pop() {
    return this.data.pop();
  }

  // Mengecek apakah stack kosong
  isEmpty() {
    return this.data.length === 0;
  }

  // Melihat isi stack
  tampilkan() {
    return this.data;
  }
}

// Function untuk mengecek kurung seimbang
function cekKurungSeimbang(ekspresi) {
  const stack = new Stack();

  for (let i = 0; i < ekspresi.length; i++) {
    const char = ekspresi[i];

    // Jika kurung buka, simpan ke stack
    if (char === '(') {
      stack.push(char);
    }

    // Jika kurung tutup
    else if (char === ')') {
      // Jika tidak ada pasangan
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }

  // Jika masih ada sisa di stack berarti tidak seimbang
  return stack.isEmpty();
}

// ===============================
// PENGUJIAN
// ===============================
const dataUji = [
  '(2 + 3) * (4 - 1)',
  '((a + b)',
  ')(',
  '((()))',
  '(a + (b * c))',
  '(()))('
];

// Menampilkan hasil
console.log('=== Hasil Pengujian ===');

dataUji.forEach(ekspresi => {
  const hasil = cekKurungSeimbang(ekspresi);
  console.log(`'${ekspresi}' → Seimbang: ${hasil}`);
});