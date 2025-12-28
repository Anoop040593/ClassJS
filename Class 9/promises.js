const fs = require("fs");

console.log("Before");

const p = fs.promises.readFile("./f1.txt");
p.then(function(value) {
    console.log("Data inside the file is: " + value);
});

p.catch(function(error) {
    console.log("Error: " + error);
})

p.finally(function() {
    console.log("all done")
})

console.log("After");

// setTimeout(() => {
//     console.log("After file read");
//     console.log("Data: " + p);
// }, 2000);