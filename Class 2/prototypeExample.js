let arr = [1, 2, 3, 4, 5];
let arr1 = [2, 3, 5, 6, 7]

Array.prototype.sum = function() {
    let sum = 0;
    for(let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    console.log(sum);
}