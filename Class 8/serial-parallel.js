const fs = require("fs");

//Synchronous function provided by node js to read the file.

// console.log("Before");
// const buffer =  fs.readFileSync("./f1.txt");
// console.log("" + buffer);

// console.log("After");


//Asynchronous function provided by node js to read a file

// console.log("Before");
// const buffer = fs.readFile("./f1.txt", function(err, data) { //this is async file reader with a callback function 
//     if(err) {
//         console.log(err);
//         return;

//     }

//     console.log("" + data);

// });

// console.log("After");

//2 synchronous things

// console.log("Before");
// const buffer1 =  fs.readFileSync("./f1.txt");
// const buffer2 =  fs.readFileSync("./f2.txt");
// console.log("" + buffer1);
// console.log("" + buffer2);


// console.log("After");


//2 async file reads

console.log("Before");
const buffer1 = fs.readFile("./f1.txt", function(err, data) { //this is async file reader with a callback function 
    if(err) {
        console.log(err);
        return;

    }

    console.log("" + data);

});

const buffer2 = fs.readFile("./f2.txt", function(err, data) { //this is async file reader with a callback function 
    if(err) {
        console.log(err);
        return;

    }

    console.log("" + data);

});

console.log("After");