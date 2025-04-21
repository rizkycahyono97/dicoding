const fs = require('fs');

const fileReadCallback = (error, data) => {
  if (error) {
    console.log('Gagal membaca file');
    return;
  }

  console.log(data);
};

fs.readFile('./text.txt', 'utf-8', fileReadCallback);   // versi sync
fs.readFileSync('./text.txt', 'utf-8', fileReadCallback)    // versi async
