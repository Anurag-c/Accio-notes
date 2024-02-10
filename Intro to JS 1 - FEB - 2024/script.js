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


////////////////////////////////////////////////////////////// Feb 9 //////////////////////////////////////////////////////////////

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
*/
