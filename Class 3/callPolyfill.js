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
//using call to borrow method from person2 and use it for person object
person2.prntAllDetails.call(person); 
Function.prototype.myCall = function(context = {}, ...parameters) { //contxt is person in this scenario.
    //what 'this' will point to.
    //it will point to the function on which myCall is invoked.
    //this works the same way for object as well.
    console.log("Inside myCall, 'this' refers to: ", this); //this points to prntAllDetails function
    context.fn = this; //assigning the function(referred by 'this') to a property of context object.
    context.fn(...parameters); //invoking the function as a method of context object.
    delete context.fn; //cleaning up the added property.
};
person2.prntAllDetails.myCall(person, "param1Value", "param2Value");
