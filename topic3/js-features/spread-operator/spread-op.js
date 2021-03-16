function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
console.log(numberStore);
// expected output: [0, 1, 2, 12]

// create a new array using an existing array
let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);
//  ["head", "shoulders", "knees", "and", "toes"]

// copy an array
let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice()

arr2.push(4);
console.log(arr2);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected

// concatenate arrays
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];