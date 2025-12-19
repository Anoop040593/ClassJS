//COPYING PRIMITIVE VALUES

let a = 15;
let b = a; // this is a copy

a = 20; // modifying a does not affect b
console.log(a);
console.log(b);


//COPYING NON PRIMITIVE VALUES
let object = {
    a: 20
};

let clonedObject = object; // this is a reference copy

object.a = 30; // modifying object affects clonedObject

console.log(object.a); // 30
console.log(clonedObject.a); // 30





