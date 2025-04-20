import { makeCoffe2, sendCoffee } from "./coffee2.mjs";

console.log('saya memesan coffee di cafe')

makeCoffe2(() => {
    sendCoffee(() => {
        console.log('pramusaji memberikan kopi pesanan')
        console.log('saya mendapatkan kopi dan menghabiskanya')
    })
})