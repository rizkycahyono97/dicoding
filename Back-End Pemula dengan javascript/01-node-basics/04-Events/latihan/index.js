// ===============================//
// events adalah modul bawaan (core module) Node.js yang memungkinkan kita membuat dan mengatur event (peristiwa) dalam aplikasi, mirip seperti "event listener" di JavaScript browser (misalnya klik, submit, dsb).
// ===============================//

const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({ price }) => {
  console.log(`Bill sebesar ${price} telah dibuat`);
};

// fungsi khusus untuk menangani event
const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee({name});
  makeBill({price});
};

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 3000 });
