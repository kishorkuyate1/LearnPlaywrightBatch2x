class Car {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(this.brand + " Started")
    }
}

const car = new Car("Toyota");
car.start();