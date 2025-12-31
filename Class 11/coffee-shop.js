function placeOrder(drink) {
    return new Promise((resolve, reject) => {
        if(drink === "coffee") {
            resolve("Order for coffee placed");
        } else {
            reject(`Order for ${drink} cannot be placed`)
        }
    })
}

function processOrder(orderPlaced) {
    return new Promise((resolve) => {
        resolve(`${orderPlaced} and served`)
    })
}

function generateBill(processedOrder) {
    return new Promise(function(resolve) {
        resolve(`${processedOrder} and Bill generated for 200 INR`)
    })
}

//using Traditional then catch Promises
// placeOrder("coffee")
// .then(function (orderStatus) {
//     console.log(orderStatus);
//      let orderIsProcesed = processOrder(orderStatus);
//      return orderIsProcesed
// }).then(function (orderIsProcesed) {
//     console.log(orderIsProcesed);
//     let finalLog = generateBill(orderIsProcesed);
//     return finalLog
// }).then(function (finalLog) {
//     console.log(finalLog);
// }).catch((message) => {
//     console.log(message);
// })

//using Async Await with try catch
async function serveOrder() {
    try {
        let orderStatus = await placeOrder("Matcha");
        console.log(orderStatus)

        let orderIsProcesed = await processOrder(orderStatus);
        console.log(orderIsProcesed);

        let finalLog = await generateBill(orderIsProcesed);
        console.log(finalLog);

    } catch(message) {
        console.log(message);
    }
}

serveOrder();