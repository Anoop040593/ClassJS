const fs = require("fs");

console.log("Before");

// const p = fs.promises.readFile("./f1.txt");

// p.then(function(data) {
//     console.log("Content: " + data);

//     const p2 = fs.promises.readFile("./f1.txt");
//     p2.then(function(data) {
//         console.log("Content: " + data);

//         const p3 =  fs.promises.readFile("./f1.txt");
//         p3.then(function(data) {
//         console.log("Content: " + data);
//         //looks like the same as callback hell
//         })

//     })
// })

//
const p = fs.promises.readFile("./f1.txt");

p.then(function(data) {
    console.log("Content: " + data);
    const p2 = fs.promises.readFile("./f2.txt");
    return p2;
}).then(function(data) {
    console.log("Content: " + data);
    const p3 = fs.promises.readFile("./f3.txt");
    return p3;
}).then(function(data) {
    console.log("Content: " + data);
}).catch(function(err, data) {
    console.log("Error " + err);
}).finally(function() {
    console.log("Done!")
})

console.log("After");