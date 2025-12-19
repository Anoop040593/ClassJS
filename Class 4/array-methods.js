let arr = [1,2,3,4,5,6,7,8,9];

//Splice syntax => array.splice(startIndex, deleteCount, item1, item2, ...);
//arr.splice(2,3); // removes 3 elements starting from index 2, modifies the original array. it is not a immutable function.
// console.log("After splice:", arr);

//Slice syntax => array.slice(startIndex, endIndex);
let slicedArr = arr.slice(2,5);
console.log("After slice:", slicedArr); // does not modify the original array. it is immutable function.
console.log("Original array after slice:", arr);


//concat => array1.concat(array2, array3, ...);
let concatArr = arr.concat([100,200,300]);
console.log("After concat:", concatArr);
console.log("Original array after concat:", arr);

//split => string.split(separator, limit);
let str = "Hello from the other side. I must have called a thousand times.";
let words = str.split(" ");
console.log("After split:", words);