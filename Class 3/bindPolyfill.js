const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    contact: 'xxxxxx2842',
    describe: function() {
        console.log(`describe function from person and this refers to ${this}`);
    }
}

const person2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 30,
    contact: 'xxxxxx1234',
    prntAllDetails: function(param1, param2) {
        console.log("Parameters passed:", param1, param2);
        console.log(`prntAllDetails function from person2 and this refers to ${this}`);
        console.log(`Name: ${this.firstName} ${this.lastName}, Age: ${this.age}, Contact: ${this.contact}`);
    }
}

const fn = person2.prntAllDetails.bind(person, "param1Value", "param2Value");
fn();

Function.prototype.myBind = function(context = {}, ...parameters) {
    if(typeof this !== 'function') {
        throw new TypeError(this + " is not a function");
    }  
    const printAllDetailsFn = this;
    const params = parameters;
    return function(...parameters) {
        context.fn = printAllDetailsFn;
        context.fn(params,...parameters);
        delete context.fn;
    };
};

const boundFn = person2.prntAllDetails.myBind(
    person, 
    "param1Value", 
    "param2Value"
);

boundFn();