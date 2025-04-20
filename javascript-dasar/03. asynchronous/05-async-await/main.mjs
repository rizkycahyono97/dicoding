import { doSomething } from "./utils.mjs"

async function promiseWithAsyncAwait() {
    try {
        console.log('Start.')

        const result = await doSomething()  // kita tunggu sampai doSomething selesai
        console.log(result)

        console.log('End')
    } catch (error) {
        console.log(error)
    }
}

promiseWithAsyncAwait()