// class ClassName {
//     static propertyName = value;

//     static methodName() {
//         //Method body
//     }
// }

class MathUtils {
    static PI = 3.14159;
    static square(x) {
        return x * x;
    }

    static cube(x) {
        return x * x * x;
    }

    //instance method
    calculateArea(radius) {
        return MathUtils.PI * MathUtils.square(radius);
    }
}

//using static methods and properties
console.log("PI:", MathUtils.PI); // PI: 3.14159
console.log("Square of 4:", MathUtils.square(4));
console.log("Cube of 3:", MathUtils.cube(3)); // Cube of 3: 27

//with Instance methods
const utils = new MathUtils();
console.log("Area of circle with radius 5:", utils.calculateArea(5)); //calculate area is not a static method so this works
console.log(utils.square(4)); // TypeError: utils.square is not a function, because square is a static method