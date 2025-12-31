const value1 = new Promise((res, rej) => {
    res("Scaler Academy");
})

const value2 = "Scaler Academy";

async function fetchValue() { //async keyword makes it an Asynchronous function 
    return value2; //returns promise even if the variable is not promise
}

const result = fetchValue();
console.log(result);