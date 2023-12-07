// Printing Values
console.log("Hello world"); // String
console.log("Hello I am Anurag, 22 years old"); // String
console.log("123"); // String
console.log(123); // Number
console.log(45.782); // Number
console.log(true); // Boolean
console.log(false); // Boolean
// console.log(hello); // this will give an error

// Variables
let intro = "Hello I am Anurag, 22 years old";
console.log(intro);
console.log(intro);
console.log(intro);

console.log(typeof 123);
console.log(typeof true);
console.log(typeof intro);

let someVariable;
console.log(someVariable);
console.log(typeof someVariable); // undefined

// fact / bug in JS
console.log(null);
console.log(typeof null);

// you can change values of a variable
let isJavaScriptFun = true;
console.log(isJavaScriptFun);
console.log(typeof isJavaScriptFun);

/*
let isJavaScriptFun = "YESS!!!"
-> this is redeclaring a same variable which will give
an error because you cannot have 2 varibles with same name.
*/

isJavaScriptFun = "YES!!!"; // changing the box value
console.log(isJavaScriptFun);
console.log(typeof isJavaScriptFun);
