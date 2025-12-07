console.log(this); //resulted in WindowObject, 
// for global exection context this is always the case

// For Execution context created with method call (calling with object) 
// this will be that object
let user = {
    name: "alice",
    greet() { //new Execution context is created for every function
        console.log("Hello " + this.name);
    }
}

user.greet();

//this's value changes depending on how it is called, not on where it is defined.
function show() {
    console.log(this); //window object
}

show();


let user1= {
    name: "alice",
    greet: () => { //new Execution context is created for every function
        console.log("Hello " + this.name); //arrow function doesnt have its own this,
        //  inherit from surrounding, in this case, window.
    }
}

user1.greet();
