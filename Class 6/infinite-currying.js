function counter(args) {
    let count = 0;
    count++;
    if(args == 0) {
        return count;
    } else {
        return function inner(args) {
            count++;
            if(args == 0) {
                return count;
            } else {
                return inner;
            }
        }
    }
}
console.log(counter()(0)); //2
console.log(counter()( )()(0)); //3
console.log(counter()()()()(0)); //4
console.log(counter()()()()()()(0)); //6
// Explanation: Doesn't matter how many we add, if we add 0 at the end,
//  it returns the count till that point. 
// if we dont add 0 at the end, it returns the inner function itself.