function fn(p1, p2, p3) {
    console.log("Params:" , p1, p2, p3=null);
}

fn("Hello", "Good", "Morning");
fn("Hi", "Good");
fn("Hey");
fn();


const arr = [1,2,3,4,5];
const arr2 = arr;
arr2.pop();
arr2.push(100);
arr2[2] = 200;
console.log(arr);
console.log(arr2);
console.log("===================================");
const arr3 = [...arr];

const obj = {
    frirstName: "Peter",
    lastName: "Parker",
    age: 21
    
}

const array1 = [1,2,[1,2]];
const array2 = [...array1]; //spread operator
array2[0] = 100;
array2[2] = 200;

console.log("A1: ", array1);
console.log("A2: ", array2);

//rest operator
function fn(params1, ...restParams) { //rest operator
    console.log("P:", params1);
    console.log("R:" ,restParams);
}

fn("h1", "remaining", " rem", "r");
fn("hi", "header", "heading");
fn("h1");