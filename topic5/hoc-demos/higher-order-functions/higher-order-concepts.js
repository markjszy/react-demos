/*
 * By "higher order function" we mean a function that takes and returns a function
 *    sometimes loosened to "operates on functions", either takes a fn or returns fn
 * see https://en.wikipedia.org/wiki/Higher-order_function
 */

const greaterThan = (n) => { return m => m > n }; // greaterThan is a HOF

let greaterThan5 = greaterThan(5);
console.log(greaterThan5(8));

const verbose = (f) => { // verbose is a HOF
    return (...args) => {
        console.log(`calling function with args ${args}`);
        let result = f(...args);
        console.log(`called with ${args}, returned ${result}`);
        return result;
    };
}

let verboseMax = verbose(Math.max);
verboseMax(200,400,12,321);