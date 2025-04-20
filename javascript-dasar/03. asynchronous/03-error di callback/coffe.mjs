export function makeCoffe(name, callback) {
    const estimationTime = 5000
    let isSuccess = false

    const inSecond = Math.ceil(estimationTime / 1000)
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`)

    setTimeout(() => {
        const number = Math.random()
        console.log(number)

        if (number > 0.3) {
            isSuccess = true
        }

        if (!isSuccess) {
            callback(new Error('Gagal membuatkan kopi'), null)
            return
        }

        console.log('Pramusaji selesai membuat kopi')
        callback(null, name)
    }, estimationTime)
}

export function sendCoffee(name, callback) {
    const estimationTime = 2000
    let isSuccess = false

    console.log('pramusaji mengantarkan kopi pesanan')

    setTimeout(() => {
        const number = Math.random()

        if (number > 0.3) {
            isSuccess = true
        }

        if (!isSuccess) {
            callback(new Error('Gagal mengantarkan kopi'), null)
            return
        }

        console.log('pramusaji sudah sampai ke meja')
        callback(null, name)
    }, estimationTime)
}
