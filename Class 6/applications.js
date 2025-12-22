//Currying: involves splitting up a function that accepts mutliple arguments 
// into a series of functions that each accept a single argument. 
// Only possible because of closures

// function getFirstName(firstName){
//     console.log("Inside getFirstName");
//     return function getLastName(lastName){
//         return function greeting(){
//             console.log("Hello " + firstName + " " + lastName);
//         }
//     }
// }

// // getFirstName("John")("Doe")();

// // const getLastName = getFirstName("Jane");
// // const greeter = getLastName("Smith");
// // greeter();

// // console.log("--------");

// let a = 100;
// console.log("Before");

// function cb() {
//     console.log("Inside cb: " + a);
// }

// setTimeout(cb, 2000);
// console.log("After");

//------------------------------------------

function outer() {
    let arrFn = [];
    for(var i = 0; i < 3; i++) {
        arrFn.push(function fn() {
            i++;
            console.log(i);
        })
    }
    return arrFn;
}

let arrFn = outer();
arrFn[0](); //3 //4 after i++
arrFn[1](); //3 //5 after i++
arrFn[2]();  //3 How? See below //6 after i++

// Why 3 3 3?
// The loop uses var i, which is function-scoped (not block-scoped like let or const). This means i is shared across all iterations of the loop and the entire outer() function.
// During the loop:
// i starts at 0, pushes a function that captures i (via closure).
// i increments to 1, pushes another function capturing the same i.
// i increments to 2, pushes the third function.
// After the loop condition i < 3 fails, i increments one final time to 3.
// All three pushed functions reference the same i variable (the one in outer()'s scope). 
// By the time you call arrFn[0](), arrFn[1](), or arrFn[2](),
//  the loop has finished and i is 3. So each logs 3.
//if we want 0 1 2 then use let, because it is block scoped. 

