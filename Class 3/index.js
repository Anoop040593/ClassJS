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