const fs = require('fs');

const writeableStream = fs.createWriteStream('./output.txt');

writeableStream.write('Ini merupakan text baris pertama\n');
writeableStream.write('Ini merupakan text baris kedua\n');
writeableStream.write('Ini merupakan text baris ketiga\n');
writeableStream.write('Ini merupakan text baris keempat\n');
writeableStream.end();
