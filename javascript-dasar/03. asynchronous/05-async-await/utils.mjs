function promiseExecutor(resove, reject) {
    setTimeout(() => {
        resove('You did it!')
    }, 2000)
}

export function doSomething() {
    return new Promise(promiseExecutor)
}