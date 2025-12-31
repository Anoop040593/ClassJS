// const p = new Promise((resolve, reject) => {
//     resolve("Something") //Promise.resolve is shorthand
// })
const p = Promise.resolve("Something");

p.then(function(value) {
    console.log("Resolved: ", value);
})

const pRej = Promise.reject("Reject error Message");

pRej.then(() => {
    console.log("This will not be executed!")
}).catch((err) => {
    console.log("Caught an error: ", err);
})


// const p2 = new Promise((resolve, reject) => {
//     reject("Something") //Promise.reject is shorthand
// })

