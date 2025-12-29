// const p0 = Promise.resolve(3);
// const p1 = 42;
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("foo");
//     }, 2000)
// }) 

// Promise.all([p0, p1, p2]).then((data) => {
//     console.log("DATA: ", data);
// }).catch((err) => {
//     console.log("Error Message: ", err )
// })

// const p0 = Promise.reject("JUST FOR FUN");
// const p1 = 42;
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("foo");
//     }, 2000)
// }) 

// Promise.all([p0, p1, p2]).then((data) => {
//     console.log("DATA: ", data);
// }).catch((err) => {
//     console.log("Error Message: ", err )
// })

// const p0 = Promise.resolve("JUST FOR FUN");
// const p1 = 42;
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("foo");
//     }, 1000)
// }) 

// Promise.all([p0, p1, p2]).then((data) => {
//     console.log("DATA: ", data);
// }).catch((err) => {
//     console.log("Error Message: ", err )
// })


const p0 = Promise.resolve("JUST FOR FUN");
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 1000)
}) 

// Promise.allSettled([p0, p1, p2]).then((data) => { //all -> Whole promise fails for even 1 rejected promise. 
// // allSettled will be resolved always and gives the whole data.
//     console.log("DATA: ", data);
// }).catch((err) => {
//     console.log("Error Message: ", err )
// })

//same as above, above is short hand for this
// new Promsise((res, rej) => {
//     res(3);
// })

//custom Promise
//one way of doing this.
// Promise.myAll = function(arrayOfPromises) {
//     return new Promise((resolve, reject) => {
//         let unresolved = arrayOfPromises.length;
//         let resolvedPromiseArr = [];
//         if(unresolved === 0) {
//             resolve([]);
//             return;
//         } 

//         for(let i = 0; i < unresolved; i++) {
//             Promise.resolve(arrayOfPromises[i]).then(res => {
//                 resolvedPromiseArr[i] = res;
//                 unresolved--;

//                 if(unresolved === 0) {
//                     resolve(resolvedPromiseArr);
//                 }
//             }).catch((err) => {
//                 reject(err);
//             })
//         }
//     });
// }

//another way of doing this
Promise.myAll = function(arrayOfPromises) {
    return new Promise((resolve, reject) => {
        const results = [];

        let completedPromises = 0;

        if(arrayOfPromises.length ===0) {
            resolve([]);
            return;
        }

        arrayOfPromises.forEach((promise, index) => {
            Promise.resolve(promise).then((value) => {
                results[index] = value;
                completedPromises++;

                if(completedPromises === arrayOfPromises.length) {
                    resolve(results);
                }
            })
            .catch((err) => {
                reject(err);
            });
        });
    })
}

Promise.myAll([p0, p1, p2]).then((data) => { //all -> Whole promise fails for even 1 rejected promise. 
// allSettled will be resolved always and gives the whole data.
    console.log("DATA: ", data);
}).catch((err) => {
    console.log("Error Message: ", err )
})