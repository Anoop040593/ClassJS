class Rectangle {
    //Public class fields
    name="Unknown"; //public field with default value
    price = 0; //public field with default value
    h = 10;
    constructor(height = h, width) {
        this.height = height;
        this.width = width;
        this.randomProperty = this.price;
    }   

    //Instance method
    calcuateArea() {
        return this.height * this.width;
    }

    //Instance method with Parameter
    scale(factor) {
        this.width *= factor;
        this.height *= factor;
        return this;
    }
}

const rect = new Rectangle(10, 5);
console.log("Area:", rect.calcuateArea()); // Area: 50
rect.scale(2);
console.log("Scaled Area:", rect.calcuateArea()); // Scaled Area: 200