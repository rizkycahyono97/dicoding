// tidak memakai encapsulation
class CoffeMaker {
    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        this.temperature = 90;
    }

    makeCoffee() {
        console.log("Membuat Coffe dengan suhu ", this.temperature)
    }
}

const coffee = new CoffeMaker(100);
coffee.temperature = 200;

coffee.makeCoffee();


// memakai encapsulation
class CoffeMaker2 {
    constructor(waterAmount) {
        this.waterAmount = waterAmount
        this._temperature = 90  // _ menandakan untuk tidak diubah
    }

    // setter
    set temperature(temperature) {
        console.log("you are not allowed change temperature")
    }

    // getter
    get temperature() {
        return this._temperature
    }
}

console.log("=======================================")
const coffee2 = new CoffeMaker2(10);
console.log("sebelum diubah ", coffee2.temperature)

coffee2.temperature = 100;
console.log("Setelah diubah", coffee2.temperature)


class CoffeMaker3 {
    #temperature = 90;

    constructor(waterAmount) {
        this.waterAmount = waterAmount
        this.#temperature = this.#defaultTemperature(); 
    }

    set temperature(temperature) {
        console.log("you are not allowed change")
    }

    get temperature() {
        return this.#temperature
    }

    #defaultTemperature() {
        return 90;
    }
}

console.log("=======================================")
const coffee3 = new CoffeMaker3(10);
console.log("sebelum diubah ", coffee3.temperature)

coffee3.temperature = 100;
console.log("Setelah diubah", coffee3.temperature)