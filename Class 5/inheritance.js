//SYNTAX

// class childClass extends parentClass {
//     // code
// }

class vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        return `${this.make} ${this.model} started.`;
    }

    stop() {
        this.isRunning = false;
        return `${this.make} ${this.model} stopped.`;
    }

    getInfo() {
        return `${this.make} ${this.model}`;
    }
}

class Car extends vehicle {
    constructor(make, model, doors) {
        super(make, model); //call the parent class constructor with super
        this.doors = doors;
    }

    //Overrding getInfo method in Parent Class
    getInfo() {
        return `${super.getInfo()}, ${this.doors} doors`; //calling parent method with super
    }

    honk() {
        return "Beep Beep!";
    }
}

const car = new Car("Toyota", "Camry", 4);
console.log(car.start()); // Toyota Camry started.
console.log(car.getInfo()); // Toyota Camry, 4 doors

class ElectricCar extends Car {
    constructor(make, model, doors, batteryCapacity) {
        super(make, model, doors);
        this.batteryCapacity = batteryCapacity;
    }
    getInfo() {
        return `${super.getInfo()}, Battery: ${this.batteryCapacity} kWh`;
    }
}

const myTesla = new ElectricCar("Tesla", "Model S", 4, 100);
console.log(myTesla.getInfo());