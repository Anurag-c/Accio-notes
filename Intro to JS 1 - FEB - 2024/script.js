////////////////////////////////////////////////////////////// Feb 8 //////////////////////////////////////////////////////////////
// The below code explains how to output to console
/*
comment1
comment2
comment3
comment4


console.log("Hello world !!!");
console.log("Hi I am Anurag");
console.log("12345678");
console.log(12345678);
console.log("1a2b3c");

// How to create a variable
let firstName =
  "Anuragajdsljaslkjdasdnoansdoasnoinfoanfoinsdivnidvjbcvbdbghihfisdkncsivusdhgidngfjk jhdfuigheihkfnsdokfhoisdhgoibwejghudvnisdighewt9iesfoasfjoasfe9wur";

// you reuse whenever you want
console.log(firstName);

// 1000 lines code.....

console.log(firstName);

// 2000 lines code....

console.log(firstName);


////////////////////////////////////////////////////////////// Feb 10 //////////////////////////////////////////////////////////////

// Variable Naming conventions and rules

// 1. variable name cannot start with a number (rule)
// let 3years = "three yrs";
// console.log(3years);

// 2. It can only have alphabets, numbers, dollar, underscore (rule)
let first_name = "Anurag";
let first$name = "Anurag";
let first123name = "Anurag";
// let first name = "Anurag";
// let first-name
// let first#name@#name

// 3. you cannot use reserved keywords (rule)
// let let = "Anurag"
// console.log(let)

// let function = "Anurag"
// console.log(function);

// 4. try to use camel casing
let placeofbirth = "India";
let placeOfBirth = "USA";
console.log(placeofbirth);
console.log(placeOfBirth);

// 5. use capital letters for constants
let PI = 3.14;
console.log(PI);
let DATABASE_URL = "https://acciojobdb-external-ind-west.in/students";
let APP_NAME = "ACCIOJOB";

// 6. follow Meaningful / descriptive variable names (v.imp)
let a = "Software Engineer";
let b = "Teacher";
console.log(a);
console.log(b);

let firstJob = "Software Engineer";
let secondJob = "Teacher";
console.log(firstJob);
console.log(secondJob);

// Primitive Data types
// 1. Number
let year = 2001;
let primeNumber = 13;
let currYear = 2024;
console.log(year);
console.log(primeNumber);
console.log(currYear);
console.log(typeof year);
console.log(typeof 3425167);
console.log(typeof primeNumber);

// 2. String
let myName = "Anurag";
let sentence = "Quick brown fox jumped over the river";
let birthYear = "2001";
console.log(myName);
console.log(sentence);
console.log(birthYear);
console.log(typeof birthYear);
console.log(typeof myName);
console.log(typeof sentence);

// 3. Boolean
let canDrinkAlcohol = false;
let isPrime = true;
let canDrive = false;
let isGood = "true";
console.log(isGood);
console.log(typeof isGood);
console.log(canDrinkAlcohol);
console.log(isPrime);
console.log(canDrive);
console.log(typeof canDrinkAlcohol);
console.log(typeof isPrime);
console.log(typeof canDrive);

// 4. undefined
let example;
console.log(example);
console.log(typeof example);

// 5. null (fact / bug in JS)
console.log(null);
console.log(typeof null); // expected: null, actual: object

// we can change values of a variable
let question = "How old are you ?";
console.log(question);
question = "What is your occupation ?";
console.log(question);
question = "What is your name ?";
console.log(question);

// you cannot create variables with same name
// let currYear = 2024;

let currentYear = 2024;
console.log(currentYear);
console.log(typeof currentYear);
currentYear = "twenty twenty four";
console.log(currentYear);
console.log(typeof currentYear);

// Other ways to declare variables
let superHero1 = "SpiderMan";
console.log(superHero1);
superHero1 = "Hanuman";
console.log(superHero1);

let superHero3;
console.log(superHero3);

// const cannot hold undefined values
// const superHero4;
// console.log(superHero4);

const superHero2 = "IronMan";
console.log(superHero2);
// const values cannot be changed (locked box)
// superHero2 = "Hulk";
console.log(superHero2);

var superHero5 = "AntMan";
console.log(superHero5);
superHero5 = "BlackPanther";
console.log(superHero5);
var superHero6;
console.log(superHero6);

// Arithmetic operators
const currYear = 2024;
const ageAnurag = currYear - 2001; // 2024 - 2001 = 23
const ageSandip = currYear - 1999; // 2024 - 1999 = 25
const ageAatif = currYear - 2000; // 2024 - 2000 = 24
console.log(ageAnurag, ageSandip, ageAatif);
console.log(ageAnurag * 2); // 23 * 2 = 46
console.log(ageAatif / 2); // 24 / 2 = 12
console.log(ageSandip / 2); // 25 / 2 = 12.5
console.log(ageAnurag + 3); // 23 + 3 = 26

// parseInt and toFixed
console.log(100 / 3);
console.log(parseInt(100 / 3));
const largeFraction = 152.447699923;
console.log(parseInt(largeFraction));
console.log(largeFraction.toFixed(3));
console.log((123.45786).toFixed(2));

// exponential operator
console.log(2 ** 3); // => 2 power 3 = 8
console.log(7 ** 5); // => 7 power 5 = 16807
console.log(16 ** (1 / 2)); // square root of 16
console.log(27 ** (1 / 3)); // cube root of 27

// modulo operator
console.log(11 % 3); // 2
console.log(19 % 4); // 3
console.log(44 % 2); // 0 (even)
console.log(67 % 2); // 1 (odd)

// Addition also works with strings (Concatenation)
const firstName = "Ranbir";
const lastName = "Kapoor";
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

// Make strings dynamic based on variables provided by user
const fname = "Nikita";
const birthYear = 1999;
const job = "Software Engineer";

const age = 2024 - birthYear;
console.log("Hi I am Anurag, 23 years old, working as a Software Engineer");
console.log(
  "Hi I am " + fname + ", " + age + " years old" + ", working as a " + job
);

// Efficient way to form dynamic strings (Template literals)
const sentence = `Hi I am ${fname}, ${age} years old, working as a ${job}`;
console.log(sentence);
console.log(typeof sentence);

// Assignment operators
let num = 10 + 5; // num = 15;
console.log(num);

num += 10; // num = num + 10 => num = 15 + 10 = 25
console.log(num);

num *= 2; // num = num * 2 => num = 25 * 2 = 50
console.log(num);

num /= 10; // num = num / 10 => num = 50 / 10 = 5
console.log(num);

num -= 8; // num = num - 8 => num = 5 - 8 = -3
console.log(num);

// increment, decrement operators
num++; // num += 1 => num = num + 1 => num = -3 + 1 = -2
console.log(num);

num--; // num -= 1 => num = num - 1 => num = -2 - 1 = -3
console.log(num);

////////////////////////////////////////////////////////////// Feb 14 //////////////////////////////////////////////////////////////

// Comparision operators
const currYear = 2024;
const ageAnurag = currYear - 2001; // 2024 - 2001 = 23
const ageSandip = currYear - 1999; // 2024 - 1999 = 25
const ageAatif = currYear - 2000; // 2024 - 2000 = 24
console.log(ageAnurag, ageSandip, ageAatif);

// Is Anurag's age greater than Sandip's age
console.log(ageAnurag > ageSandip);

// Is Aatif's age less than Sandip's age
console.log(ageAatif < ageSandip);

// Are Aatif and anurag are of same age
console.log(ageAnurag == ageAatif);

// can Anurag drink alcohol ?
// anurag should be atleast 21 years old
console.log(ageAnurag >= 21);
console.log(21 >= 21);
console.log(21 <= 21);
console.log(21 > 21);
console.log(21 < 21);

// are Aatif and anurag are of different age
console.log(ageAnurag != ageAatif);

// Type Conversion
const birthYear = "2001";

// what will be the year after 23 years from birthYear ?
console.log(birthYear + 23);
console.log(Number(birthYear) + 23);
console.log(typeof birthYear);
console.log(typeof Number(birthYear));

console.log("1897230123", typeof "1897230123");
console.log(Number("1897230123"));

console.log(String(23), typeof String(23));
console.log(Number("hello world"));
console.log(typeof NaN);

// false for only these values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(NaN));

// true for any other value
console.log(Boolean(1234));
console.log(Boolean("Hello World"));

// Type Coercion
// string + number = string + string
console.log("I am " + 22 + " Years old");
console.log("23" + 10 + 5);
console.log(5 + 10 + "23");
console.log(5 + "23" + 10);

// All other cases string -> number
console.log("23" - "10" + 5);
console.log("23" * 2);
console.log("23" / "2");

// Strict Checking
console.log(10 == 10);
console.log("hello" == "hello");
console.log("10" == "10");
console.log(10 == "10");

console.log(10 === 10);
console.log("hello" === "hello");
console.log("10" === "10");
console.log(10 === "10"); // false

// If-else statements
const age = 21;

if (age >= 18) {
  console.log("Inside If");
  console.log("You can get driving license");
} else {
  console.log("Inside else");
  console.log("Sorry you cannot get driving license");
}

console.log("outside of if-else");
console.log("outside of if-else");
console.log("outside of if-else");

// experimenting with if-else
const day = "tuesday";
if (day == "monday") {
  console.log("I have to go for a doctor appointment");
} else {
  console.log("I dont know what to do");
}
if (day == "monday") {
  console.log("I have to go for shopping");
}
if (day == "tuesday") {
  console.log("I have an exam");
  console.log("I have a wedding to attend");
}

// else if statements
const day = "tuesday";

if (day == "monday") {
  console.log("Plan course structure");
} else if (day == "tuesday") {
  console.log("Prepare for exams");
} else if (day == "wednesday") {
  console.log("Write examples for coding lectures");
} else if (day == "thursday") {
  console.log("Watch recordings");
} else if (day == "friday") {
  console.log("solve assignments");
} else if (day == "saturday") {
  console.log("Revise all notes");
} else if (day == "sunday") {
  console.log("attempt contest");
} else {
  console.log("Please enter a valid day");
}

// Scope of a variable
const birthYear = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

let firstName;
console.log(firstName); // undefined
console.log(lastName); // not-defined

// Ternary operator
const age = 22;

if (age >= 21) {
  console.log("You can drink alcohol");
} else {
  console.log("You cannot drink alcohol");
}

age >= 21
  ? console.log("You can drink alcohol")
  : console.log("You cannot drink alcohol");

////////////////////////////////////////////////////////////// Feb 15 //////////////////////////////////////////////////////////////

// logical operators
const age = 16;
const A = age >= 20;
const B = age < 30;

console.log(!A); // NOT A
console.log(A && B); // A AND B
console.log(A || B); // A OR B
console.log(!A && B); // NOT A AND B
console.log(A || !B); // A OR NOT B

const hasLicense = true;
const hasVision = false;

// Can sarah drive ?
if (hasLicense && hasVision) {
  console.log("Sarah can drive");
} else {
  console.log("Sarah cannot drive");
}

// ASCII Conversions
console.log(String.fromCharCode(97));
console.log(String.fromCharCode(122));
console.log(String.fromCharCode(65));
console.log(String.fromCharCode(90));

console.log(String.fromCharCode(47));

const ch = "A";
console.log(ch.charCodeAt(0));

////////////////////////////////////////////////////////////// Feb 16 //////////////////////////////////////////////////////////////

// For Loop
for (initialization; condition; operation) {
  // code you want to repeat 
}

for (let i = 1; i <= 5; i++) {
  console.log(`Level ${i}`);
}

for (let i = 5; i > 0; i--) {
  console.log(`Level ${i}`);
}

// break
for (let i = 1; i <= 5; i++) {
  console.log(`Level ${i}`);
  if (i == 3) {
    console.log("Sorry you cannot move forward");
    break;
  }
}

console.log("Out of for loop");

// continue
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    console.log("You can skip this level");
    continue;
  }
  console.log(`Level ${i}`);
}
*/
////////////////////////////////////////////////////////////// Feb 18 //////////////////////////////////////////////////////////////
