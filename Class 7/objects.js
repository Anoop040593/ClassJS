const candidate = { //object literal
    firstName: "Alice",
    class: 12,
    greet: function() {
        console.log("Hello, " + this.firstName);
    }
};

// console.log(candidate.firstName); // Accessing property using dot notation
// console.log(candidate.class); // Accessing property using dot notation
// candidate.greet(); // Calling method

// -------------------------------------------------------------------------------

// let a = "Hello"; //string primitive, js converts it to String object when needed
// console.log(typeof a);

// let b = new String(a); //object equivalent of string primitive
// console.log(typeof b);

// let c = b.valueOf(); //converts String object back to string primitive
// console.log(typeof c);

// console.log(c.toUpperCase()); //method available on String object

//Object.create() 
//creating the prototype object taht will be created later
function greeting() {
    this.greeting = "Hello " + candidate.firstName;
}

function greetName() {
    greeting.call(this); //calling greeting function to set greeting property
}

greetName.prototype = Object.create(greeting.prototype); //setting prototype
const app = new greetName(); //creating new object
console.log(app.greeting);

// -------------------------------------------------------------------------------
const carPrototype = {
    //a shared value
    wheels: 4,
    start: function() {
        console.log("Car started");
    }
}

const myCar = Object.create(carPrototype); //creating new object with carPrototype as prototype
console.log(myCar);

//craeting an object from another object
let c = {
    name: "Mithun",
    age: 24,
    job: "Developer"
}

let pickNameAndAge = function(record) {
    return {
        name: record.name,
        age: record.age,
        job: record.job
    }
}

const obj = pickNameAndAge(c);
console.log(obj);


//iterate an obj
const student = {
    firstName: "John",
    lastName: "Doe",
}

//for ... in loop
for(attr in student) {
    console.log(`${attr}: ${student[attr]}`); //for keys and values
}

console.log(Object.keys(student)); //array of keys
console.log(Object.values(student)); //array of values

