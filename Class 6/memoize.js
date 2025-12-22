function calC(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
//If it is not present in cache, then only we will call calC
function memoize(fn) {
    let cache = {};
    return function(n) {
        let isTheInputPresent = cache[n] == undefined;
        if(isTheInputPresent) {
            console.log("Fetching from cache for n = " + n);
            return cache[n];
        }
        else {
            const result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

const memoizedCalC = memoize(calC);
console.time();
memoizedCalC(17);
console.timeEnd();
console.time();
memoizedCalC(17); // fetching from cache
console.timeEnd();
