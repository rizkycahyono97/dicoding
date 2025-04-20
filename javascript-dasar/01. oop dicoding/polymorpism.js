// super class
class SmartPhone {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging() {
        console.log(`charging , ${this.model}`)
    }
}

// child class from smartphone
class Android extends SmartPhone {
    constructor(color, brand, model, device) {
        super(color, brand, model)
        this.device = device;
    }

    charging() {
        console.log(`charging, ${this.model} with fast charger`);
    }

    splitScreen() {
        console.log("Android have Split Screen")
    }
}

const android = new Android("red", "samsung", "GALAXY-345", "smart tv")
android.charging()
