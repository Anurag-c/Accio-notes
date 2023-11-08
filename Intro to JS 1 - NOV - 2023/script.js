/*
// What is a value, How to print the output
console.log("Hello world !!!");
console.log(234); // double quotes not required for numbers
console.log("234");
console.log("abcd");
console.log("Hello I am Anurag 23 years old");

// variables are required to store values
let firstName = "anurag";
let age = 23;
console.log(firstName);
console.log(age);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(age);
console.log(age);
console.log(age);

// create a variable to store color
let color = "red";
console.log(color);

// Numbers
let n1 = 23;
let n2 = 23.789;
let n3 = 0.12;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);

// Booleans
let isJavaScriptFun = true;
console.log(isJavaScriptFun);
console.log(typeof isJavaScriptFun); // boolean

// you can change the value of a variable
isJavaScriptFun = "YES!!!!";
console.log(isJavaScriptFun);
console.log(typeof isJavaScriptFun); // string

console.log(typeof false); // boolean
console.log(typeof "true"); // string
console.log(typeof 23); // number
console.log(typeof "1234"); // string

let year;
console.log(year);
console.log(typeof year);

// bug in JS for many years
console.log(typeof null); // object

// How to print only integral part
let num = 16.234;
console.log(num);

// naming conventions
let my_first_job = "teacher";
let my$first$job = "teacher";
let my_1st_job = "teacher";
let myFirstJob = "teacher"; // camel case (practice)
console.log(my_first_job);
console.log(my$first$job);
console.log(my_1st_job);
console.log(myFirstJob);

// let let = "xyz"
// let typeof = "boolean"
// let new = "abc"
// let function = "1234"

let PI = 3.14; // (practice)

// meaningful variable names (practice)
let x1 = "teacher";
let x2 = "engineer";
let lastJob = "teacher";
let currentJob = "engineer";

let age = 30;
age = 23;
console.log(age);

const currYear = 2023;
// const values cannot be changed
// currYear = 2024;

console.log(currYear);
// You cannot have empty values in const
// const job;

// will be discussed during functions / scope
var name = "anurag";
name = "xyz";
console.log(name);

// Arithmetic operators
const currYear = 2023;
const ageAnurag = currYear - 2001; // 22
const ageYajnesh = currYear - 1999; // 24
const agePrakriti = currYear - 2000; // 23
console.log(ageAnurag, ageYajnesh, agePrakriti);
console.log(ageAnurag * 2); // 22 * 2 = 44
console.log(ageAnurag / 10); // 22 / 10 = 2.2
console.log(parseInt(ageAnurag / 10)); // 2 // this is a function
console.log(ageYajnesh + 2); // 24 + 2 = 26

// exponential operator
console.log(2 ** 3); // 2 power 3 = 8
console.log(16 ** 0.5); // 16 power 0.5 => squareroot of 16 = 4
console.log(7 ** 5); // 7 power 5 = 16807

// modulo operator => remainder
console.log(11 % 3); // 2
console.log(19 % 4); // 3

// addition also works with strings
const firstName = "Ranbir";
const lastName = "Kapoor";
const fullName = firstName + " " + lastName;
console.log("Hello " + fullName + ", How are you ?");
// String templating

console.log("Hello I am Anurag\nA Teacher\nAn Engineer");
console.log("Hello I am Anurag\\nA Teacher\\nAn Engineer");

console.log("Hello I am Anurag");
console.log("A Teacher");
console.log("An Engineer");

// Assingment operators
let x = 10 + 5; // 15
console.log(x);

x += 10; // x = x + 10 = 15 + 10 = 25
console.log(x);

x += 5; // x = x + 5 = 25 + 5 = 30
console.log(x);

x *= 2; // x = x * 2 = 30 * 2 = 60
console.log(x);

x /= 10; // x = x / 10 = 60 / 10 = 6
console.log(x);

x -= 8; // x = x - 8 = 6 - 8 = -2;
console.log(x);

x++; // x += 1 // x = x + 1 = -2 + 1 = -1;
console.log(x);

x++; // x += 1 // x = x + 1 = -1 + 1 = 0;
console.log(x);

x--; // x -= 1 // x = x - 1 = 0 - 1 = -1;
console.log(x);

// comparision operators
const currYear = 2023;
const ageAnurag = currYear - 1998; // 25
const ageYajnesh = currYear - 1999; // 24
const agePrakriti = currYear - 2000; // 23

// Is ageAnurag greater than agePrakriti ?
console.log(ageAnurag > agePrakriti);

// Is agePrakriti greater than ageAnurag ?
console.log(agePrakriti > ageAnurag);

// Is anurag atleast 21 years old ?
const canDrinkAlcohol = ageAnurag >= 21;
console.log(canDrinkAlcohol);

const areTheyEqual = ageAnurag == ageYajnesh;
console.log(areTheyEqual);

const areTheyNotEqual = ageAnurag != ageYajnesh;
console.log(areTheyNotEqual);

// === vs == or !== vs !=
console.log(1 == 1, 1 === 1, "1" == 1, "1" === 1);

// operator precedence
console.log(currYear - 1991 > currYear - 2018);

// let a;
// let b;
let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

// always place brackets to ensure correct outputs
const average = (ageAnurag + agePrakriti) / 2;
console.log(average);

// Type conversion
const birthYear = "2001";

// What will the year after 22 years ?
console.log(Number(birthYear), birthYear);
console.log(Number(birthYear) + 22);

console.log(String(23), 23);
console.log(Number("an1u2ra3g")); // NaN
console.log(typeof NaN); // number

// false
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(NaN));

console.log(Boolean(1)); // true
console.log(Boolean("anurag")); // true

// Type coercion
console.log("I am " + 22 + " Years old");
console.log("23" + 10 + 5);
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" * 2);

let n = "1" + 1;
console.log(n, typeof n);
n--;
console.log(n, typeof n);

// String templating
const fname = "Anurag";
const job = "Teacher";
const year = 2001;

const anurag =
  "I am " + fname + ", a " + job + ", " + (currYear - year) + " years old";
console.log(anurag);

const anuragNew = `I am ${fname}, a ${job}, ${currYear - year} years old`;
console.log(anuragNew);
*/
