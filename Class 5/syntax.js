// class Rectangle { //basic syntax of class declaration
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// //class expression
// const Rectangle = class {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

//Name class Expression
// const Rectangle = class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

//----------------------------------------

class Student {
    grade = "A"; //public field
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }


    //Static method static, can only be called on the class itself not on instances
    static fromObject(obj) { 
        return new Student(obj.firstName, obj.lastName);
    }
}

//Creating an instance
const student = new Student("John", "Doe");
console.log(student.getFullName()); // John Doe
console.log(Student.fromObject({firstName: "Johnny", lastName: "Doe"})); // TypeError: student.fromObject is not a function, because fromObject is a static method