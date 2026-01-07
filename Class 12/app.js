//Import Named Exports
import {greet, PI} from './utils.js';

console.log(greet("Anoop"));
console.log("Value of PI: ", PI);

import anoopMultiply from './utils.js';//no curly braces. so default export

console.log(anoopMultiply(2, 3));