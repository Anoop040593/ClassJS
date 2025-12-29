const fs = require("fs");

const promise = fs.promises.readFile("./f1.txt")

// promise.then(function(data) {
//     console.log("Hi, the data is: " + data);
// })

// promise.then(function(data) {
//     console.log("Hi, the Buffer data is: ", data);
// })

// promise.then(function() {
//     console.log("I am not accepting")
// })

// promise.catch(function(error) {
//     console.log("Error: " + error);
// })

// promise.catch(function(error) {
//     console.log("Error 2: " + error);
// })
// promise.catch(function(error) {
//     console.log("I am not accepting");
// })

// promise.finally(function(error) {
//     console.log("Error: " + error);
// })

// promise.finally(function(error) {
//     console.log("Error 2: " + error);
// })
// promise.finally(function(error) {
//     console.log("I am not accepting");
//      console.log("I am not accepting second line of finally");
// })


// ------------ Skipping in Promises --------------

// Promise.resolve(100); // a promise that resolves with the value of 100

// new Promise(function(res, rej) { //same thing as above
//     res(100);
// })

// Promise.resolve(100).catch((err) => {
//     console.log("err", err);
// }).then((data) => {
//     console.log("data: " + data);
// })

// Promise.reject(100)
//     .then(() => {
//         console.log("THEN");
//     }).then(() => {
//         console.log("THEN");
//     }).catch(() => {
//         console.log("CATCH"); // This Catch makes the promise a success. So the promise goes to subsequent THENs
//         throw new Error("Error from then!") //if we throw error here, then it will go to catch instead of then,
//         //  if no error, then only it will go to Then
//     }).then(() => {
//         console.log("THEN");
//     }).catch(() => {
//         console.log("CATCH"); //if we throw error in previous then, then it will go to this catch.
//     }).then(() => {
//         console.log("THEN");
//     })

//-------------------------------------------------------

// Promise.resolve("Initial Data").then((data) => {
//     console.log("1st then: ", data);
//     return Promise.reject("rejected from first then");
// }).catch((err) => {
//     console.log("1st Catch: ", err);
// })

// Promise.resolve("Initial data") //this Initial data is going as data to then in case of resolve, 
// // to catch in case of reject
// .catch((err) => {
//     console.log("1st catch: " , err);
// }).then((data) => {
//     console.log("2nd then: ", data);
//     return fs.promises.readFile("./f12.txt")
// }).catch((err) => {
//     console.log("2nd catch: ", err.message)
// })

//FINALLY - takes no parameter at all.
// Promise.resolve("Initial Data").finally(() => {
//     console.log("Finally block executed");
// }).then((data) => {
//     console.log("Resolved: ", data);
// })

// Promise.resolve("Initial Data").finally(() => {
//     console.log("Finally block executed");
//     throw new Error("I am an error");
// }).catch((err) => {
//     console.log("Error: ", err.message);
// })


// Promise.reject("Initial Data").finally(() => {
//     console.log("Finally block executed");
//     return 100;
// }).catch((err) => {
//     console.log("Error: ", err.message);
// })

// Promise.resolve("Initial Data").finally(() => {
//     console.log("Finally block executed");
//     return 100;
// }).catch((err) => {
//     console.log("Error: ", err.message);
// })

// Promise.resolve("Initial Data").finally(() => {
//     console.log("Finally block executed");
//     return 100; //even if we return something in finally,
//     //  the next then takes from the resolve and not from the finally. 
// }).then((data) => {
//     console.log("Data: "+  data);
// })
