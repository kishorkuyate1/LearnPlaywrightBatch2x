class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(this.brand + " started");
    }
}

class Car extends Vehicle {
}

const car = new Car("Toyota");

car.start();