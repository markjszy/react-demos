/* Note: most examples taken from https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/ */

/**
 * Destructuring arrays
 */
let someArray = [10,20,30,40,50,60,70];

let [a, b, c] = someArray;
console.log(a);
console.log(b);
console.log(c);

// destructuring patterns can be nested as deeply as required:
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
// 1
console.log(bar);
// 2
console.log(baz);
// 3

// skip items if needed
let [,,third] = ["foo", "bar", "baz"];
console.log(third);
// "baz"

// capture trailing items with "rest" pattern
let [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
// [2, 3, 4]

// non-existent capture will be undefined
let [x, y, z] = [1];
console.log(z);
// undefined

/** 
 * Destructuring objects
 */

var robotA = { name: "Bender" };
var robotB = { name: "Flexo" };

var { name: nameA } = robotA;
var { name: nameB } = robotB;

console.log(nameA);
// "Bender"
console.log(nameB);
// "Flexo"


// Shortcut when property and variable names are the same
var { afoo, abar } = { afoo: "lorem", abar: "ipsum" };
console.log(afoo);
// "lorem"
console.log(abar);
// "ipsum"

// As with arrays, nesting is possible
var complicatedObj = {
    arrayProp: [
      "Zapp",
      { second: "Brannigan" }
    ]
  };
  
var { arrayProp: [first, { second }] } = complicatedObj;

console.log(first);
// "Zapp"
console.log(second);
// "Brannigan"


// if not defined, result will be undefined
var { missing } = {};
console.log(missing);

// you can provide default values when property you are defining is not defined
var [missing = true] = [];
console.log(missing);
// true

var { message: msg = "Something went wrong" } = {};
console.log(msg);
// "Something went wrong"

var { g = 3 } = {};
console.log(g);
// 3