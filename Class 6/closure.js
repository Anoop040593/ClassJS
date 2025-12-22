// function outerFn() {
//     let count = 0;

//     function innerFn() {
//         count++;
//         return count;
//     }
//     return innerFn;
// }

// const innerFunnc = outerFn(); 
// //innerFunnc will store the reference of innerFn which contains even the count as well, 
// // which is part of its lexical scope. 
// // Data persists between multiple calls to innerFunnc even after it is returned

// console.log(innerFunnc());
// console.log(innerFunnc());

function createCounter(init, delta) {
    function count() {
        init = init + delta;
        return init;
    }

    return count;
}
//if we dont store the closures in variables, 
// each call to createCounter will create a new closure  and data gets reset everytime
let c1 = createCounter(10, 5);
let c2 = createCounter(5, 2);
console.log(c1()); // 15
console.log(c2()); // 7
console.log(c1()); // 20
console.log(c2()); // 9