// --------- 

let arr = [1,2,3,4, [10,12], 5,6];
//let clonedArr = [...arr]; // shallow copy of arr
let clonedArr = JSON.parse(JSON.stringify(arr)); // deep copy of arr

clonedArr[2] = 100;
clonedArr[3] = 200;
clonedArr[4][1] = 300; // modifying nested array but changes the original array as well

console.log("old: ",arr); // original array
console.log("new: ", clonedArr); // cloned array

//------------Object.assign ---- 

let persoon = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
}

//shallow copy using Object.assign
let shallowObj = Object.assign({}, persoon); // shallow copy

shallowObj.firstName = 'Jane'; // modifying top-level property
shallowObj.address.city = 'Othertown'; // modifying nested object property

//Deep Copy using JSON methods
let deepObj = JSON.parse(JSON.stringify(persoon));
deepObj.lastName = 'Smith'; // modifying top-level property
deepObj.address.country = 'Canada'; // modifying nested object property

console.log("Original Object:", persoon);
console.log("Shallow Copied Object:", shallowObj);
console.log("Deep Copied Object:", deepObj);