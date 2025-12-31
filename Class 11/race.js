// const firstPromise = new Promise((res, rej) => {
//     setTimeout(() => res('first'), 2000);
// });

// const secondPromise = new Promise((res, rej) => {
//     setTimeout(() => res('second'), 1500)
// });

// Promise.race([firstPromise, secondPromise]).then((result) => {
//     console.log("result: "+ result)
// })

const firstPromise = new Promise((res, rej) => {
    setTimeout(() => res('first'), 2000);
});

const secondPromise = new Promise((res, rej) => {
    setTimeout(() => rej('second'), 1500)
});

Promise.race([firstPromise, secondPromise]).then((result) => {
    console.log("result: "+ result)
}).catch((err) => {
    console.log("error: " + err);
})