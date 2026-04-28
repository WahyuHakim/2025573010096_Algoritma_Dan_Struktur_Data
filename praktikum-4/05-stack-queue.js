// 05-stack-queue.js
// ================================================
// Penerapan Stack dan Queue menggunakan Class
// ================================================

// CLASS STACK dengan konsep LIFO
class Stack {
  constructor() {
    this.data = []; // tempat penyimpanan data menggunakan array
    this.ukuran = 0;
  }

  // Menambahkan elemen ke bagian atas stack
  push(elemen) {
    this.data.push(elemen);
    this.ukuran++;
    console.log(` Push '${elemen}' → Stack: [${this.data}]`);
  }

  // Menghapus elemen paling atas
  pop() {
    if (this.isEmpty()) {
      console.log(' Stack kosong, tidak bisa mengambil data.');
      return null;
    }
    const dikeluarkan = this.data.pop();
    this.ukuran--;
    console.log(` Pop '${dikeluarkan}' → Stack: [${this.data}]`);
    return dikeluarkan;
  }

  // Melihat elemen teratas tanpa menghapus
  peek() {
    if (this.isEmpty()) return null;
    return this.data[this.data.length - 1];
  }

  isEmpty() { return this.ukuran === 0; }
  size() { return this.ukuran; }

  // Menampilkan isi stack dari atas ke bawah
  tampilkan() {
    console.log(` Stack (atas ke bawah): [${[...this.data].reverse()}]`);
  }
}

// -----------------------------------------
// CLASS QUEUE dengan konsep FIFO
// -----------------------------------------
class Queue {
  constructor() {
    this.data = [];
    this.ukuran = 0;
  }

  // Menambahkan elemen ke belakang antrian
  enqueue(elemen) {
    this.data.push(elemen);
    this.ukuran++;
    console.log(` Enqueue '${elemen}' → Queue: [${this.data}]`);
  }

  // Mengambil elemen paling depan
  dequeue() {
    if (this.isEmpty()) {
      console.log(' Queue kosong, tidak bisa mengambil data.');
      return null;
    }
    const dikeluarkan = this.data.shift();
    this.ukuran--;
    console.log(` Dequeue '${dikeluarkan}' → Queue: [${this.data}]`);
    return dikeluarkan;
  }

  // Melihat elemen paling depan tanpa menghapus
  front() {
    if (this.isEmpty()) return null;
    return this.data[0];
  }

  isEmpty() { return this.ukuran === 0; }
  size() { return this.ukuran; }

  // Menampilkan isi queue dari depan ke belakang
  tampilkan() {
    console.log(` Queue (depan ke belakang): [${this.data}]`);
  }
}

// -----------------------------------------
// Contoh penggunaan Stack
// -----------------------------------------
console.log('==============================');
console.log('DEMONSTRASI STACK (LIFO)');
console.log('==============================');

const stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');

console.log(' Peek (puncak):', stack.peek());

stack.pop();
stack.pop();
stack.pop();
stack.pop(); // mencoba pop saat data kosong

// Contoh penggunaan pada fitur undo
console.log('\n--- Simulasi Undo ---');
const riwayatAksi = new Stack();
riwayatAksi.push('Ketik: Halo');
riwayatAksi.push('Ketik: Dunia');
riwayatAksi.push('Bold teks');
riwayatAksi.push('Ubah warna');

console.log(' Undo:', riwayatAksi.pop());
console.log(' Undo:', riwayatAksi.pop());

riwayatAksi.tampilkan();

// ----------------------------------------
// Contoh penggunaan Queue
// ----------------------------------------
console.log('\n==============================');
console.log('DEMONSTRASI QUEUE (FIFO)');
console.log('==============================');

const queue = new Queue();
queue.enqueue('X');
queue.enqueue('Y');
queue.enqueue('Z');

console.log(' Front (depan):', queue.front());

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue(); // mencoba dequeue saat kosong

// Contoh penggunaan pada antrian printer
console.log('\n--- Simulasi Antrian Printer ---');
const antrianPrinter = new Queue();
antrianPrinter.enqueue('Dokumen-Laporan.pdf');
antrianPrinter.enqueue('Foto-Wisuda.jpg');
antrianPrinter.enqueue('Tugas-Akhir.docx');

console.log(' Mencetak...');

while (!antrianPrinter.isEmpty()) {
  const dokumen = antrianPrinter.dequeue();
  console.log(` Selesai mencetak: ${dokumen}`);
}

console.log(' Semua dokumen selesai dicetak.');