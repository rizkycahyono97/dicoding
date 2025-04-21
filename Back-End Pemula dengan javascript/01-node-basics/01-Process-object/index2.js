// ======================= //
// PRAKTIK
// ======================= //

const initialiMemoryUsage = process.memoryUsage().heapUsed
const yourName = process.argv[2]
const environment = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com'

for(let i = 0; i < 1000; i++) {
    // Proses looping ini akan membuat penggunaan memori naik
} 

const currentMemoryUsage = process.memoryUsage().heapUsed

console.log(`Hai ${yourName}`)
console.log(`Mode Environment: ${environment}`)
console.log(`penggunaan memori dari ${initialiMemoryUsage} naik ke ${currentMemoryUsage}`)

// cara running
//  NODE_ENV=development node ./index2.js "rizky"