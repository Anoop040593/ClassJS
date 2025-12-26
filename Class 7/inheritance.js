class Candidate {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

class User extends Candidate {
    constructor(name) {
        super(name);
    }
}

let c1 = new User("Anoop");
c1.greet();

//-----------------------------------------------

function Scaler(property) {
    this.property = property;
}

let obj = new Scaler("Academy"); //created a new object using functions
console.log(obj);