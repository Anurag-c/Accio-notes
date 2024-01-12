/*
/////////////////////////////////////////////////// JAN 8 ///////////////////////////////////////////

// How to print to console / output
console.log("Hi I am Anurag");
console.log("Hello world");
console.log(234);
console.log("234");

// How to create a variable ?
let firstName = "Anurag";
console.log("Anurag");
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable Naming conventions and rules
// 1. variable names cannot start with number
/*
let 3years = "three years";
console.log(3years);


// 2. It can only have letters, numbers, dollar, underscore
let first_name = "Anurag";
let first$name = "Anurag";
let first123name = "Anurag";
let first_name_1$2$3 = "Anurag";

console.log(first_name);
console.log(first$name);
console.log(first123name);
console.log(first_name_1$2$3);

// 3. Try to follow camelcase
// (first letter is small, all other first letters
// of a word are capital)
let placeOfBirth = "India";
console.log(placeOfBirth);

let birthYear = 2001;
console.log(birthYear);

// 4. you cannot use reserved keywords
/*
let let = "Anurag";
console.log(let);

let function = "Anurag";
console.log(function);


// 5. use all capitals for constants
let PI = 3.14;
console.log(PI);

let DATABASE_URL = "https://acciodb-external-ind-west.com/students";
console.log(DATABASE_URL);

// 6. Meaningful variable names (V.IMP)
let a = "Software Engineer";
let x = "Teacher";
console.log(a);
console.log(x);

let job1 = "Software Engineer";
let job2 = "Teacher";
console.log(job1);
console.log(job2);

let prevJob = "Software Engineer";
let currJob = "Teacher";
console.log(prevJob);
console.log(currJob);

//////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/////////////////////////////////////////////////// JAN 9 ///////////////////////////////////////////
/*
// Numbers
let year = 2001;
let primeNumber = 13;
let currYear = 2024;
console.log(year);
console.log(primeNumber);
console.log(currYear);
console.log(typeof 123456);
console.log(typeof primeNumber);

// String
let myName = "Anurag";
let sentence = "Quick brown fox jumped over the river";
let birthYear = "2001";
console.log(myName);
console.log(sentence);
console.log(birthYear);
console.log(typeof birthYear);
console.log(typeof "something");
console.log(typeof sentence);

// Boolean
let canDrinkAlcohol = false;
let isPrime = true;
let canDrive = "false";
console.log(canDrinkAlcohol);
console.log(isPrime);
console.log(canDrive);
console.log(typeof canDrive);
console.log(typeof canDrinkAlcohol);
console.log(typeof isPrime);

// Undefined
let someVariable;
console.log(undefined);
console.log(someVariable);
console.log(typeof someVariable);

// null (fact / bug in JS)
console.log(null);
console.log(typeof null); // Object

// we can change the values of a variable
let example = "How old are you ?";
console.log(example);
console.log(typeof example);

example = 23;
console.log(example);
console.log(typeof example);

example = false;
console.log(example);
console.log(typeof example);

/*
// we cannot declare two variable with same name
let myJob = "Teacher";
let myJob = "Teacher";


// declare multiple variables in a single line
let a = 1,
  b = 2,
  c = 3,
  d = "four";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(a, b, c, d);

// some other ways to declare variables
let superHero1 = "SpiderMan";
console.log(superHero1);
superHero1 = "Hulk";
console.log(superHero1);

let superHero2;
console.log(superHero2);

const superHero3 = "IronMan";
console.log(superHero3);

/*
// const variables cannot be changed once declared
superHero3 = "CaptainAmerica";
console.log(superHero3);

// Always const variables should have some value (they cant be undefined)
const superHero4;
console.log(superHero4);


var superHero5 = "AntMan";
console.log(superHero5);


// Arithmetic operators (Are for Numbers)
const currYear = 2024;
const ageAnurag = currYear - 2001; // 2024 - 2001 = 23
const ageKajal = currYear - 2002; // 2024 - 2002 = 22
const ageSovan = currYear - 1999; // 2024 - 1999 = 25
console.log(ageAnurag, ageKajal, ageSovan);
console.log(ageAnurag * 2); // 23 * 2 = 46
console.log(ageKajal / 2); // 22 / 2 = 11
console.log(ageSovan / 2); // 25 / 2 = 12.5
console.log(ageAnurag + 3); // 23 + 3 = 26

// parseInt and toFixed
const largeFraction = 152.447699923;
console.log(largeFraction);
console.log(parseInt(largeFraction));
console.log(largeFraction.toFixed(0));
console.log(largeFraction.toFixed(2));
console.log(largeFraction.toFixed(4));
console.log(typeof largeFraction.toFixed(4)); // string

// exponential operator
console.log(2 ** 3); // 2 power 3 = 8
console.log(7 ** 5); // 7 power 5 = 16807
console.log(16 ** (1 / 2)); // square root of 16 = 4
console.log(27 ** (1 / 3)); // cube root of 27 = 3

// modulo operator => remainder
console.log(11 % 3); // 2
console.log(19 % 4); // 3

// Addition also works with strings (Concatenation)
const firstName = "Ranbir";
const lastName = "Kapoor";
const fullName = firstName + " " + lastName + " is handsome";
console.log(fullName);

// Make strings dynamic based on variables
const name = "Naveen";
const birthYear = 1999;
const job = "Civil Engineer";
const age = 2024 - birthYear;

console.log("Hi I am Anurag, 23 years old, working as a software engineer");
console.log("Hi I am " + name + ", " + age + " years old, working as a " + job);

// Efficient way (String templating) (VVVV.IMP)
console.log(`Hi I am ${name}, ${age} years old, working as a ${job}`);

// Assignment Operators
let num = 10 + 5; // num = 15
console.log(num);

num += 10; // num = num + 10 => num = 15 + 10 = 25
console.log(num);

num *= 2; // num = num * 2 => num = 25 * 2 = 50
console.log(num);

num /= 10; // num = num / 10 => num = 50 / 10 = 5
console.log(num);

num -= 8; // num = num - 8 => num = 5 - 8 = -3
console.log(num);

// post increment, decrement
num++; // num += 1 => num = num + 1 => num = -3 + 1 = -2
console.log(num);

num--; // num -= 1 => num = num - 1 => num = -2 - 1 = -3
console.log(num);

// pre increment, decrement
++num; // num += 1 => num = num + 1 => num = -3 + 1 = -2
console.log(num);

--num; // num -= 1 => num = num - 1 => num = -2 - 1 = -3
console.log(num);

// Comparision operators
console.log(ageAnurag, ageKajal, ageSovan);

// Is Anurag's age greater than age of Kajal
console.log(ageAnurag > ageKajal); // 23 > 22 = true

// Is Sovan's age less than age of kajal
console.log(ageSovan < ageKajal); // 25 < 22 = false

// can Anurag drink alcohol ?
// anurag should be atleast 21 years old
console.log(ageAnurag >= 21); // 23 >= 21 = true
console.log(21 >= 21); // true
console.log(21 <= 21); // true
console.log(21 > 21); // false
console.log(21 < 21); // false

// are anurag and sovan of same age ?
console.log(ageAnurag == ageSovan); // 23 == 25 = false
// Do not make this mistake => console.log((ageAnurag = ageSovan));

// are anurag and sovan of different age ?
console.log(ageAnurag != ageSovan); // 23 != 25 = true

// operator precedence
// Table: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
console.log(currYear - 1991 > currYear - 2018);

// always prefer using brackets to avoid unexpected outcomes
const average = (ageAnurag + ageSovan) / 2;
console.log(average);

//////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////// JAN 10 ///////////////////////////////////////////

// Type conversion
const birthYear = "2001";

// what will be the year after 23 years ?
console.log("2001" + "23");
console.log(typeof birthYear);
console.log(typeof Number(birthYear));
console.log(Number(birthYear) + 23);

console.log(String(23), typeof String(23));
console.log(Number("an12u3r4ag")); // NaN
console.log(typeof NaN); // number

// false for only these values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(NaN));

// anyother values it is true
console.log(Boolean(123));
console.log(Boolean("anurag"));

// Type Coercion
// string + number = string + string
console.log("I am " + 22 + " Years old");
console.log("23" + 10 + 5);
console.log(5 + 10 + "23");
console.log(5 + "23" + 10);
console.log(10, "abc", 9082);

// all other cases string -> number
console.log("23" - "10" + 5);
console.log("23" * 2);
console.log("23" / "2");

// Strict checking
console.log(1 == 1);
console.log(1 === 1);

console.log("1" == 1);
console.log("2023" == 2023);
console.log("1" === 1);

console.log("1" == "1");
console.log("1" === "1");

console.log(1 !== 1);
console.log(1 !== "1");

// If-else statements
const age = 16;

if (age >= 18) {
  console.log("You can get a driving license");
  console.log("line1");
  console.log("line1");
}

console.log("This is after if statement");

if (age >= 18) {
  console.log("You can get a driving license");
} else {
  console.log("Sorry you cannot get License");
}

console.log("This is after if-else statements");

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
  console.log("I have a weddding to attend");
}

// else if statements
const day = "abcdef";

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

// scope
const birthYear = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

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


//////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////// JAN 12 ///////////////////////////////////////////

// Logical operators
const age = 16;
const A = age >= 20; // Age is greater than or equal to 20
const B = age < 30; // Age is less than 30

console.log(!A); // NOT A
console.log(A && B); // A AND B
console.log(A || B); // A OR B
console.log(!A && B); // NOT A AND B
console.log(A || !B); // A OR NOT B

const hasDriversLicense = false; // A
const hasGoodVision = true; // B

// Tell whether sarah can drive or not
if (hasDriversLicense && hasDriversLicense) {
  console.log("Sarah can drive");
} else {
  console.log("Sarah cannot drive");
}
*/

// Ascii conversions
console.log(String.fromCharCode(65));
console.log(String.fromCharCode(90));
console.log(String.fromCharCode(97));
console.log(String.fromCharCode(122));
console.log(String.fromCharCode(60));

console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));
