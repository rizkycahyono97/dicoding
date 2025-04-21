const fs = require('fs')
const path = require('path')

// path
const inputPath = path.resolve(__dirname, './input.txt')
const outputPath = path.resolve(__dirname, './output.txt')

// TODO 1: Buat readable stream dengan chunk 15 karakter
const readableStream = fs.createReadStream(inputPath, {
    highWaterMark: 15,
    encoding: 'utf-8',
})

// TODO 2: Buat writable stream untuk output.txt
const writeableStream = fs.createWriteStream(outputPath)

// TODO 3: Ketika data bisa dibaca / menulis data dari input
readableStream.on('data', (chunk) => {
    try {
        writeableStream.write(`${chunk}\n`)
    } catch (error) {
        console.log('Error')
    }
})

// TODO 4: Jika selesai, tampilkan info
readableStream.on('end', () => {
    console.log('Done')
})