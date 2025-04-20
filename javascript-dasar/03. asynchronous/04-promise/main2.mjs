import { makeCoffee, sendCoffee } from "./coffee.mjs";

const order = 'Kopi Espresso'

console.log(`saya memesan ${order} di cafe`)

makeCoffee(order)
    .then(
        (value) => {
            return sendCoffee(value)
        },

        (error) =>  {
            console.log(error.message)
            throw error
        }
    )
    .then(
        (value) => {
            console.log(`Pramusaji memberikan ${value} pesanan`)
            console.log(`Saya mendapatkan ${value} dan menghabiskanya`)
        },

        (error) => {
            console.log(error.message)
            throw error
        },
    )
