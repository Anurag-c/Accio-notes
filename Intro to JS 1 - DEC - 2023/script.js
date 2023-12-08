/*
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
console.log(typeof null); // object

// you can change values of a variable
let isJavaScriptFun = true;
console.log(isJavaScriptFun);
console.log(typeof isJavaScriptFun);

/*
let isJavaScriptFun = "YESS!!!"
-> this is redeclaring a same variable which will give
an error because you cannot have 2 varibles with same name.


isJavaScriptFun = "YES!!!"; // changing the box value
console.log(isJavaScriptFun);
console.log(typeof isJavaScriptFun);

// variable names cannot start with a number
let 1num = 12;
console.log(1num);*

// variable can have only letters, numbers, dollar, underscore
let my_first_job = "teacher";
let my$first$job = "teacher";
let my_1st_job = "teacher";
// let my@first@job = "teacher"
// let my first job = "teacher";

// variable names cannot be a reserverd keyword
let let = "xyz";
console.log(let);

let typeof = "xyz";
console.log(typeof);

// capitals for constants
let PI = 3.14;
let APPNAME = "Zomato";

// meaningful variable names
let x1 = "teacher";
let x2 = "engineer";
let lastJob = "engineer";
let currJob = "teacher";

const currYear = 2023;
console.log(currYear);
// currYear = 2024;

// const lastJob; // cannot have empty values
// console.log(lastJob);

var name = "anurag";
console.log(name);

// Arithmetic operators
const currYear = 2023;
const ageAnurag = currYear - 2001; // 2023 - 2001 = 22
const ageVishal = currYear - 1999; // 2023 - 1999 = 24
const ageAbbas = currYear - 2000; // 2023 - 2000 = 23
console.log(ageAnurag, ageVishal, ageAbbas);
console.log(ageAbbas * 2); // 23 * 2 = 46
console.log(ageVishal / 2); // 24 / 2 = 12
console.log(ageAbbas / 2); // 23 / 2 = 11.5
console.log(parseInt(ageAbbas / 2)); // parseInt(11.5) = 11
console.log(ageAnurag + 3); // 22 + 3 = 25

// exponential operator
console.log(2 ** 3); // 2 power 3 = 8
console.log(16 ** (1 / 2)); // square root of 16 = 4
console.log(27 ** (1 / 3)); // 3
console.log(7 ** 5); // 7 power 5 = 16807

// modulo operator => remainder
console.log(11 % 3); // 2
console.log(19 % 4); // 3

// addition also works with strings
const firstName = "Ranbir";
const lastName = "Kapoor";
const fullName = firstName + " " + lastName;
console.log(fullName);

// special characters in strings
console.log("Hello I am Anurag");
console.log("A Teacher");
console.log("An Engineer");

console.log("Hello I am Anurag\nA Teacher\nAn Engineer");

// Assignment operators
let x = 10 + 5;
console.log(x);

x += 10; // x = x + 10 = 15 + 10 = 25
console.log(x);

x *= 2; // x = x * 2 = 25 * 2 = 50
console.log(x);

x /= 10; // x = x / 10 = 50 / 10 = 5
console.log(x);

x -= 8; // x = x - 8 = 5 - 8 = -3;
console.log(x);

// post increment / decrement
x++; // x += 1 => x = x + 1 = -3 + 1 = -2
console.log(x);

x--; // x -= 1 => x = x - 1 = -2 - 1 = -3
console.log(x);

// pre increment / decrement
++x; // x += 1 => x = x + 1 = -3 + 1 = -2
console.log(x);

--x; // x -= 1 => x = x - 1 = -2 - 1 = -3
console.log(x);

// comparision operators
const currYear = 2023;
const ageAnurag = currYear - 2001; // 2023 - 2001 = 22
const ageVishal = currYear - 1999; // 2023 - 1999 = 24
const ageAbbas = currYear - 2000; // 2023 - 2000 = 23

// Is Anurag's age greater than age of Abbas
console.log(ageAnurag > ageAbbas); // 22 > 23 = false

// Is Abbas's age less than age of vishal
console.log(ageAbbas < ageVishal); // 23 < 24 = true

// can anurag drink alcohol ?
// anurag should atleast 21 years old ?
// age of anurag should be greater than or equal to 21 ?
const canDrinkAlcohol = ageAnurag >= 21;
console.log(canDrinkAlcohol);

// are abbas and vishal of same age
const areTheyEqual = ageAbbas == ageVishal;
console.log(areTheyEqual);

const areTheyNotEqual = ageAbbas != ageVishal;
console.log(areTheyNotEqual);

console.log(1 == 1, 1 === 1, "1" == 1, "1" === 1);
// true true true false

const currYear = 2023;
const ageAnurag = currYear - 2001; // 2023 - 2001 = 22
const ageVishal = currYear - 1999; // 2023 - 1999 = 24
const ageAbbas = currYear - 2000; // 2023 - 2000 = 23
console.log(currYear - 1991 > currYear - 2018);

let a;
let b;
a = b = 25 - 10 - 5;
console.log(a, b);

// always use brackets to avoid confusion around precedence
const average = (ageAnurag + ageAbbas) / 2;
console.log(average);
*/
