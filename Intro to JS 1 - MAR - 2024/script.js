/*
// Values
console.log("Hi I am Anurag");
console.log("Hello world");
console.log(12345);
console.log("12345");
console.log("Hi I am Anurag", 23, "years old", "xyz", "abc");
console.log("shivya", "shalini", "kanishk", "omkar");
console.log("shivya shalini kanishk omkar");

// You can store values in a variable
// How to create variable ?
let firstName = "Anurag";
console.log(firstName);

let age = 18;
console.log(age);

let gender = "male";
console.log(gender);

let birthYear = 2001;
console.log(birthYear);

// Always give meaningful variable names
let a = "software engineer";
let x = "teacher";
console.log(a);
console.log(x);

let prevJob = "software engineer";
let currJob = "teacher";
console.log(prevJob);
console.log(currJob);

// You cannot have two variables with same name
// let age = 18;
// let age = 20;

// You can change the values of a variable
// one variable can have different values
let superHero = "Hulk";
console.log(superHero);
superHero = "Iron Man";
console.log(superHero);
superHero = "Spider Man";
console.log(superHero);
superHero = 1234;
console.log(superHero);

// you can declare multiple variables in a single line

/*
let p = 1;
let q = 2;
let r = 3;
console.log(p, q, r);


let p = 1, q = "two", r = 3;
console.log(p, q, r);


////////////////////////////////////////////////////////////////////////

// Data types
// Number
let year = 2001;
let primeNumber = 13.123;
let currYear = 2024;
console.log(year);
console.log(primeNumber);
console.log(currYear);
console.log(typeof year);
console.log(typeof 134578);
console.log(typeof primeNumber);

// String
let myName = "Anurag";
let sentence = "Quick brown fox jumped over the river";
console.log(sentence);
console.log(myName);
console.log(2001, "2001", typeof 2001, typeof "2001");
console.log(typeof myName);
console.log(typeof sentence);
console.log(typeof "abdskbdia123468sflfshr");

// Boolean
let canDrinkAlcohol = false;
let isPrime = true;
let canDrive = "false";
console.log(canDrinkAlcohol);
console.log(isPrime);
console.log(canDrive);
console.log(typeof canDrinkAlcohol);
console.log(typeof isPrime);
console.log(typeof canDrive);

// undefined
let someVariable;
console.log(someVariable);
console.log(typeof someVariable);
// console.log(firstName); // error : Not defined

// null (Fact / bug in JS)
console.log(null);
console.log(typeof null); // expected: null, actual: object

// Dynamically typed language
let example = "Hello world";
console.log(example, typeof example);
example = 123;
console.log(example, typeof example);
example = true;
console.log(example, typeof example);
example = "how are you";
console.log(example, typeof example);

// Other ways to create variables
let superHero1 = "SpiderMan";
console.log(superHero1);
superHero1 = "Hulk";
console.log(superHero1);

const superHero2 = "IronMan";
console.log(superHero2);

/*
// const variables cannot be changed (immutable)
superHero2 = "BlackPanther";
console.log(superHero2);


/*
// const variables cannot be undefined
const superHero3;
console.log(superHero3);


// var is similar to let
// Difference is discussed during functions lecture
// Hoisting
var superHero4 = "BatMan";
console.log(superHero4);
superHero4 = "AntMan";
console.log(superHero4);

var superHero5;
console.log(superHero5);

// Arithmetic operators (Are for numbers)
const currYear = 2024;
const ageAnurag = currYear - 2001; // 2024 - 2001 = 23
const ageOmkar = currYear - 2000; // 2024 - 2000 = 24
const ageIshan = currYear - 1999; // 2024 - 1999 = 25;
console.log(ageAnurag, ageOmkar, ageIshan);
console.log(ageAnurag * 2); // 23 * 2 = 46
console.log(ageIshan / 2); // 25 / 2 = 12.5
console.log(ageAnurag + 5); // 23 + 5 = 28

// parseInt and toFixed
const largeFraction = 152.46578239127;
console.log(largeFraction);
console.log(parseInt(largeFraction));
console.log(parseInt(12.789));
console.log(largeFraction.toFixed(2));
console.log(largeFraction.toFixed(4));
console.log((123.789).toFixed(1));

// exponential operator
// a ** b => a power b
console.log(2 ** 3); // 2 power 3 = 8
console.log(7 ** 5); // 7 power 5 = 16807
console.log(8 ** 10); // 8 power 10 = 1073741824
console.log(16 ** (1 / 2)); // 16 power 1/2 = 4
console.log(27 ** (1 / 3)); // 27 power 1/3 = 3
console.log(17 ** (1 / 3)); // 17 power 1/3 = 2.57

// Modulo operator (remanider)
console.log(11 % 3);
console.log(19 % 4);
// even = 0, odd = 1
console.log(12 % 2); // 0
console.log(13 % 2); // 1

// Addition also works with strings
const firstName = "Ranbir";
const lastName = "kapoor";
const fullName = firstName + " " + lastName;
console.log(firstName, lastName); // these are two values
console.log(fullName); // single value

// Making string dynamic based on data
const name = "Ritu";
const birthYear = 2000;
const job = "Mechanical Engineer";
const age = 2024 - birthYear;

console.log("Hi I am " + name + ", " + age + " years old, working as a " + job);

// String template literals (Easy / Efficient)
console.log(`Hi I am ${name}, ${age} years old, working as a ${job}`);

// Assignment operators
let num = 10 + 5; // num = 15
console.log(num);

num += 10; // num = num + 10 => num = 15 + 10 = 25
console.log(num);

num *= 2; // num = num * 2 => num = 25 * 2 = 50
console.log(num);

num /= 10; // num = num / 10 => num = 50 / 10 = 5
console.log(num);

// num **= 2; // num = num ** 2 => num = 5 ** 2 = 25
// console.log(num);

num -= 8; // num = num - 8 => num = 5 - 8 = -3
console.log(num);

// post increment, decrement
num++; // num = num + 1 => num = -3 + 1 = -2
console.log(num);

num--; // num = num - 1 => num = -2 - 1 = -3
console.log(num);

// pre increment, decrement
++num; // num = num + 1 => num = -3 + 1 = -2
console.log(num);

--num; // num = num - 1 => num = -2 - 1 = -3
console.log(num);

// Comparision operators
const currYear = 2024;
const ageAnurag = currYear - 2000; // 2024 - 2000 = 24
const ageOmkar = currYear - 2000; // 2024 - 2000 = 24
const ageIshan = currYear - 1999; // 2024 - 1999 = 25;
console.log(ageAnurag, ageOmkar, ageIshan);

// Is Anurag older than Omkar ?
console.log(ageAnurag > ageOmkar);

// Is Anurag older than or equal to Omkar ?
console.log(ageAnurag >= ageOmkar);

// Is Omkar younger than Ishan ?
console.log(ageOmkar < ageIshan);

// Is Omkar younger than or equal to Ishan ?
console.log(ageOmkar <= ageIshan);

// Is Anurag equal to Omkar ?
console.log(ageAnurag == ageOmkar);

// Is Omkar equal to Ishan ?
console.log(ageOmkar == ageIshan);

// Is Omkar not equal to Ishan ?
console.log(ageOmkar != ageIshan);

// Operator precedence (Bracket are imp)
// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
const average = (ageAnurag + ageOmkar) / 2;
console.log(average);

// pre increment (first inc, then assign)
// pre -> before
let x = 5;
const val1 = ++x;
console.log(x);
console.log(val1);

// post increment (first assign, then inc)
// post -> after
let y = 5;
const val2 = y++;
console.log(y);
console.log(val2);

/////////////////////////////////////////////////////////////////////////////////

// Type conversion
const birthYear = "2001";

// what will be the year after 22 years ?
console.log(birthYear + 22); // 200122

// String to Number
console.log(Number(birthYear) + 22);

// Number to String
console.log(String(23), 23);
console.log(Number("a1234nurag")); // NaN
console.log(typeof NaN);
console.log(String(NaN)); // => "NaN"

// false
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(NaN));

// all other values will give true
console.log(Boolean(1));
console.log(Boolean("anu1234rag"));

// Type Coercion
// String + Number => String + String (Only addition works)
// String - Number => Number - Number (All other operators)
console.log("I am " + 22 + " years old");
console.log("23" + 10 + 5);
console.log(5 + 10 + "23");
console.log(10 + "23" + 5);
console.log("23" - "10" + 5);
console.log("23" * 2);
console.log("23" / 2);

// == vs ===
console.log("10" == 10, "10" === 10);
console.log("10" == "10", "10" === "10");
console.log(1 == true, 1 === true);

// If Statement
const age = 20;

if (age < 18) {
  console.log("Sorry you cannot get license");
} else {
  console.log("You can get license");
}

console.log("remaining lines of code");
console.log("remaining lines of code");
console.log("remaining lines of code");

const day = "monday";

if (day == "monday") {
  console.log("I have a doctor appointment");
}

if (day == "monday") {
  console.log("I have to go for shopping");
}

if (day == "tuesday") {
  console.log("I have assignments");
  console.log("I have exam");
} else {
  console.log("I dont know what to do");
}

// else if statements
const day = "abcd";

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

const age = 22;
let canDrinkAlcohol;

if (age >= 21) {
  canDrinkAlcohol = true;
} else {
  canDrinkAlcohol = false;
}

console.log(canDrinkAlcohol);

// ternary operator
// much helpul in React
age >= 21
  ? console.log("Can Drink Alcohol")
  : console.log("Cannot drink Alcohol");

///////////////////////////////////////////////////////////////

// logical operators
const age = 16;
const A = age >= 20;
const B = age < 30;

console.log(!A); // NOT A
console.log(A && B); // A AND B
console.log(A || B); // A OR B
console.log(!A && B); // NOT A AND B
console.log(A || !B); // A OR NOT B

// ASCII Values
console.log(String.fromCharCode(45));
console.log(String.fromCharCode(62));
console.log(String.fromCharCode(100));
console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));
console.log(">".charCodeAt(0));
console.log("-".charCodeAt(0));


console.log("Level 1");
console.log("Level 2");
console.log("Level 3");
console.log("Level 4");
console.log("Level 5");
console.log("Level 6");
console.log("Level 7");
console.log("Level 8");
console.log("Level 9");
console.log("Level 10");


// for loop
// for(initialization; condition; operation)
for (let num = 1; num <= 20; num++) {
  console.log(`Level ${num}`);
}

for (let num = 10; num > 0; num--) {
  console.log(`Level ${num}`);
}

// break
for (let num = 1; num <= 5; num++) {
  console.log(`Level ${num}`);

  if (num == 3) {
    console.log("Sorry you cannot proceed");
    break;
  }
}

console.log("Outside for loop");
console.log("Outside for loop");
console.log("Outside for loop");

// continue
for (let num = 1; num <= 5; num++) {
  if (num == 3) {
    console.log("congratulations you can skip this level");
    continue;
  }

  console.log(`Level ${num}`);
}


for (let num = 1; num <= 5; num++) {
  console.log(`Level ${num}`);

  if (num == 3) {
    console.log("congratulations you can skip this level");
    continue;
  }
}

console.log("Outside for loop");
console.log("Outside for loop");
console.log("Outside for loop");

// while loop
let num = 1;
while (num <= 5) {
  console.log(`Level ${num}`);
  num++;
}
*/

// process.stdout.write
const n = 3;
for (let i = 0; i < n; i++) {
  process.stdout.write("* ");
}
console.log();
for (let i = 0; i < n; i++) {
  console.log("*");
}
