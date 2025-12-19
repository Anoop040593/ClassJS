let arr = [1,2,3, 4,5 ];
let arr2 = arr; // call by reference
arr2.pop();
arr2 = 10;
console.log(arr); // [1,2,3,4]
console.log(arr2); // 10


function chagneValue(x) {
    x = 100;
}

let a = {b: 10}; // call by value in js it is always call by value even for objects.
chagneValue(a);
console.log(a); // {b: 10}

function Modifier(a, b) {
    console.log("Before modification: ", a, b);
    a = 20; // modifying the local copy
    b = 30;
    console.log("After modification: ", a, b);
}

let p = [1,2,3];
let q = {x: 10, y: 20};
Modifier(p, q);
console.log("Outside function: ", p, q);
