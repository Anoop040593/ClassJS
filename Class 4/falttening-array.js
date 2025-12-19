let input = [1,2,3,[4,5],[6,7,8,[9,10,11]]];

//output = [1,2,3,4,5,6,7,8,9,10,11];

function flattenArray(srcArr) {
    let newArr = [];
    for(let i = 0; i < srcArr.length; i++) {
        let elem = srcArr[i];
        let isElemArr = Array.isArray(elem);
        if(isElemArr) {
            //flatten the array again 
            let smallFlattenArray=  flattenArray(elem);
            newArr.push(...smallFlattenArray);
        } else {
            // push ot newArr
            newArr.push(elem);
        }
    }
    return newArr;
}

let flattened = input.flat(Infinity); // flattenArray(input); same thing.   
console.log(flattened);