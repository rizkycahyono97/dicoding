import { makeCoffe, sendCoffee } from "./coffe.mjs";

const order = 'Kopi Espresso'

console.log(`saya memesan kopi ${order}`)

makeCoffe(order, (makeCoffeError, makeCoffeData) => {
    if (makeCoffeError) {
        console.log(makeCoffeError)
        return
    }

    sendCoffee(order, (sendCoffeeError, sendCoffeData) => {
        if (sendCoffeeError) {
            console.log(sendCoffeeError)
            return
        }

        console.log(`Pramusaji memberikan ${sendCoffeData} pesanan`)
        console.log(`saya mendapatkan ${sendCoffeData} dan menghabiskannya`)
    })
})