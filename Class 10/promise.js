// function promSetTimeout(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hey then")
//         }, delay);
//     })
// }

// promSetTimeout(1000).then((data) => {
//     console.log(data);
// })

//-------------------------------------------------
const executorFn = (resolve, reject) => {
    setTimeout((value) => {
        console.log("Hey Then");
        resolve(value);
    }, 1000);
}

const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function CustomPromise(executorFn) {
    let state = PENDING;
    let value = undefined;
    let scbArr = []; //for Success Call Back
    let fcbArr = []; // for FAILED call Back

    this.then = (cb) => { //defining then and assigning to the function using this.then 
        if(state === RESOLVED) {
            cb(value);
        } else {
            scbArr.push(cb);
        }
    }

    this.catch = (cb) => {  //defining catch and assigning to the function using this.catch 
        if(state === REJECTED) {
            cb(value);
        } else {
            fcbArr.push(cb);
        }
    }

    const resolve = (val) => { //
        state = RESOLVED;
        value = val;
        scbArr.push(cb => cb(value)); //invoking by pushing to array
    }

    const reject = (err) => {
        state = REJECTED;
        value = err;
        fcbArr.push(cb => cb(value));
    }

    executorFn(resolve, reject)
}

const myPromise = new CustomPromise(executorFn);
myPromise.then((data) => {
    console.log(data);
})

myPromise.catch((err) => {
    console.log(err);
})