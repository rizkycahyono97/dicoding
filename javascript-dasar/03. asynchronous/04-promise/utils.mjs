function promiseExecutor(resolve, reject) {
    setTimeout(() => {
        console.log('Melakukan sesuatu sebelum promise diselesaikan')
    
        const number = Math.random()

        // Nilai fulfillment dari Promise
        if (number > 0) {
            resolve('You did it!')
        } else {
            reject('Sorry, something dari Promise')
        }
    }, 2000)
}

export function doSomething() {
    return new Promise(promiseExecutor) //menangani operasi asynchronous dengan Promise
}