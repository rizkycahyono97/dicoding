export function makeCoffee(name) {
    return new Promise((resolve, rejected) => {
        const estimationTime = 2000;
        let isSuccess = false

        const inSecond = Math.ceil(estimationTime / 1000)
        console.log(`mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond}`)

        setTimeout(() => {
            const number = Math.random()
            console.log(number)

            if (number > 0) {
                isSuccess = true
            } else {
                rejected(new Error('maaf, kopi gagal dibuatkan'))
                return
            }

            console.log('Pramusaji selesai membuat kopi')
            resolve(name)
        }, estimationTime)
    })
}

export function sendCoffee(name) {
    return new Promise((resolve, rejected) => {
        const estimationTime = 2000
        let isSuccess = false

        console.log('Pramusaji sedang mengantarkan kopi pesanan')

        setTimeout(() => {
            const number = Math.random
            console.log(number) 

            if (number < 0) {
                isSuccess = true
            } else {
                rejected(new Error('Maaf, kopi gagal diantarkan'))
                return
            }

            console.log('Pramusaji sudah sampai ke meja.')
            resolve(name)
        }, estimationTime)
    })
}
