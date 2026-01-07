const str1 = "hello";
const str2 = "hello";

console.log(str1 === str2); //true; primitive data types, compared by value

const array1 = [1,2,3];
const array2 = [1,2,3];
console.log(array1 === array2); //false; non primitive, compared by address reference.

// ----------------------------------------------

//even after passing same value, they are still unique.
const symbol1 = Symbol("Description"); 
const symbol2 = Symbol("Description");

const person = {
    name: "Learner",
    age: 30,
    [symbol1]: "A person"  //symbol, it is non immutable,
};

console.log(person[symbol1]);
console.log(person[symbol2]);

console.log(symbol1.toString());
console.log(symbol2.description);