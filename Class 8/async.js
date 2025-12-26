/*
    Synchronous code -> Code executes line by line
*/

//  

// -------------------------

/* 

* Async code -> Piece of code that is executed at the current point 
of time and other piece of code is executed in later part 
*/
// console.log("Before"); //part of window object of the browser.
// //  not part of JS

// function fn() {
//     console.log("fn");
// }

// setTimeout(fn, 2000);

// console.log("After")

// let a = true;

// console.log("Before");

// setTimeout(() => 
//     {
//         a = false;
//         console.log("I broke the while loop");
//     }
// )

// console.log("After")

// // while(a) {}

// console.log("Before");

// const cb2 = () =>  {
//     console.log("Set timeout 1");
//     while(1) {} // Gets stuck at this, becuase call stack is stuck on this.
// }

// const cb1 = () => {
//     console.log("Hello")
// }

// setTimeout(cb2, 1000);
// setTimeout(cb1, 2000);

// console.log("After");

console.log("Before");

const cb2 = () => {
    console.log("Set Timeout 1");
    let timeInFuture = Date.now() + 5000;
    while(Date.now() < timeInFuture) {} // will be executed after 5 secs 
}

const cb1 = () => console.log("Hello");

setTimeout(cb2, 1000);
setTimeout(cb1, 1000);

console.log("After");

