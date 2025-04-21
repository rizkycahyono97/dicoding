// ======================= //
// process.env
// ======================= //
// untuk mengakses env dari host
const http = require('http');
const hostName = process.env.NODE_ENV !== 'production' ? "localhost" : "dicoding.com";
const port = 3000
const requestHandler = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n');
};
const server = http.createServer(requestHandler)
server.listen(port, hostName, () => {
    // console.log(`Server berjalan pada http://${hostName}:${port}/`)
})

// ======================= //
// memoryUsage
// ======================= //
// akses memory host
const memoryInformation = process.memoryUsage();
// console.log(memoryInformation)


// ======================= //
// argumen
// ======================= //
// Elemen pertama : Alamat (path) lengkap dari lokasi node yang menjalankan prosesnya. 
// Element kedua : Alamat (path) berkas JavaScript yang dieksekusi (app.js)
// Element ketiga : “harry”
// Element keempat : “potter”

const firstName = process.argv[2];
const secondName = process.argv[3]
console.log(`Hello ${firstName} ${secondName}`)
    // node app.js "harry" "potter"