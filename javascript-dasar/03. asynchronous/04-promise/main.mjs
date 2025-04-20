import { doSomething } from "./utils.mjs";

function onFulfilled(doSomethingData) {
    console.log(doSomethingData)
}

function onRejected(doSomethingError) {
    console.log(doSomethingError)
}

doSomething(onFulfilled, onRejected)