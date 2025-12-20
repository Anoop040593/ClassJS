class ClassName{ 
    get propertyName() {
        //return the value
    }

    set propertyName(value) {
        //set the value
    }
}


//-----------------------------------------
class Student {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    set fullName(name) {
        const parts = name.split(" ");
        this._firstName = parts[0] || "";
        this._lastName = parts[1] || "";

    }

    //getter for firstName
    get firstName() {
        return this._firstName;
    }

    //setter for firstName
    set firstName(value) {
        if(typeof value !== 'string'){
            throw new Error("First name must be a string");
        }
        this._firstName = value;
    }
}

const student = new Student("John", " Doe");
console.log(student.fullName); // John Doe, no need to call fullName as a function. it's accessed like a property

student.fullName = "Jane Smith"; // invokes the setter
console.log(student.firstName); // Jane
console.log(student.fullName); // Jane Smith

try {
    student.fullName = 1234; // Error: Full name must be a string   
} catch (e) {
    console.error(e.message);
}