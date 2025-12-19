// function fn() {
//     console.log("Hi, I am a function");
// }

function fn(name, callbackFn) {
    console.log(`Hi, I am a function. My name is ${name}`);
    callbackFn("foo");
}

const randomFn = function(value) {
    console.log(`Hi, I am a random function. Value passed is ${value}`);
}

fn("Anup", randomFn); 
// fn();
