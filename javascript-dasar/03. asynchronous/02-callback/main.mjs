import { makeCoffe } from "./coffee.mjs";

console.log('saya memesan coffee di cafe')

makeCoffe(() => {
    console.log('pramusaji memberikan kopi pesanan')
    console.log('saya mendapatkan kopi dan menghabiskanya')
})