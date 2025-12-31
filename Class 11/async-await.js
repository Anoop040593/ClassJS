const p = new Promise((resolve, reject) => {
    setTimeout(function() {
        reject("Data received");
    }, 2500)
});

const p2 =  new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Data received");
    }, 2500)
});

async function handlePromise() {
    console.log("Scaler");
    let response;

    try {
        response = await p; //since it is rejected it goes ot catch in this case
    } catch(err) {
        response = "Fallback";
    }

    console.log(response);
    console.log("Create Impact 1");

    const response2 = await p2;
    console.log(response2);
    console.log("Create Impact 2");
}

handlePromise();
console.log("After"); //How did After get printed after Scaler, that is confusing. 