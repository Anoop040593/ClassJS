let superClone = (original) => {
    let isArr = Array.isArray(original);
    let copy = isArr ? [] : {};

    for(let prop in original) { // iterating over all properties
        if(Array.isArray(original[prop])) {
            copy[prop] = [...original[prop]];
            for(let i=0; i<copy[prop].length; i++) {
                if(copy[prop][i]=== "object") {
                    copy[prop][i] = superClone(copy[prop][i]);
                }
            }
        } else if(typeof original[prop] === 'object') {
            copy[prop] = superClone(original[prop]);
        } else {
            copy[prop] = original[prop];
        }
    }

    return copy;
};
let persoon = {
    firstName: 'John', //primitive
    lastName: 'Doe', //primitive
    age: 24, //primitive
    address: { //non primitive
        street: '123 Main St', //primitive
        city: 'Anytown', //primitive
        country: 'USA' //primitive
    }
}


let deepObj = superClone(persoon);
deepObj.lastName = 'Smith'; // modifying top-level property
deepObj.address.country = 'Canada'; // modifying nested object property


console.log("Original Object:", persoon);
console.log("Deep Copied Object:", deepObj);
