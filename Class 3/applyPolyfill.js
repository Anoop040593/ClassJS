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

person2.prntAllDetails.apply(person, ["param1Value", "param2Value"]);

Function.prototype.myApply = function(context = {}, parameters = []) { //contxt is person in this scenario.
    if(typeof this !== 'function') {
        throw new TypeError(this + " is not a function");
    }
    context.fn = this; //assigning the function(referred by 'this') to a property of context object.
    context.fn(...parameters);
    delete context.fn; //cleaning up the added property.
}

person2.prntAllDetails.myApply(person, ["param1Value", "param2Value"]);