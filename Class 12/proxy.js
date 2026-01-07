let obj = {eng: "English", math: "Mathematics"}

//Custom Handler
let handler = {
    get(target, prop) {
        if(prop in target) {
            return target[prop]; 
        } else {
            throw new Error("Property doesnt exist. Sorry!")
        }
    },
    set(target, prop, value) {
        if(prop in target) {
            target[prop] = value;
        } else {
            throw new Error("Cannot add new Property, Sorry!")
        }
    }
}


let proxy = new Proxy(obj, handler);
console.log(proxy);
console.log(proxy.eng);
console.log(proxy.science);

proxy.history = "History";