class Monster {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name} attacked`);
  }

  walk() {
    console.log(`${this.name} walked`);
  }
}

class FlyingMonster extends Monster {
  fly() {
    console.log(`${this.name} flew`);
  }
}

class SwimmingMonster extends Monster {
  swim() {
    console.log(`${this.name} swam`);
  }
}

class FlyingSwimmingMonster extends FlyingMonster {
  swim() {
    console.log(`${this.name} swam`);
  }
}

const bear = new Monster("bear");
bear.walk();
bear.attack();

const eagle = new FlyingMonster("eager");
eagle.walk();
eagle.attack();
eagle.fly();

const shark = new SwimmingMonster("shark");
shark.walk();
shark.attack();
shark.swim();

const dipper = new FlyingSwimmingMonster("dipper");
dipper.walk();
dipper.attack();
dipper.fly();
dipper.swim();

function attackerAndWalker({ name }) {
  return {
    attack: function () {
      console.log(`${name} attacked`);
    },
    walk: function () {
      console.log(`${name} walked`);
    },
  };
}

function flyer({ name }) {
  return {
    fly: function () {
      console.log(`${name} flew`);
    },
  };
}

function swimmer({ name }) {
  return {
    swim: function () {
      console.log(`${name} swam`);
    },
  };
}

function FlyingMonsterCreator(name) {
  const monster = { name };

  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...flyer(monster),
  };
}

function swimmingMonsterCreator(name) {
  const monster = { name };

  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...swimmer(monster),
  };
}

function flyingSwimmingMonsterCreator(name) {
  const monster = { name };

  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...flyer(monster),
    ...swimmer(monster),
  };
}

const obj = flyingSwimmingMonsterCreator("Monster");
obj.attack();
obj.walk();
obj.fly();
obj.swim();

/*

///////////////////////// DEC 7th ///////////////////////////////////

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

//////////////////////////// DEC 8th ////////////////////////////

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

//////////////////////////// DEC 11th ////////////////////////////

// Type Conversion
const birthYear = "2001.05";

// What will be the birth year after 22 years ?
console.log(Number(birthYear), birthYear);
console.log(Number(birthYear) + 22);
console.log(parseInt(birthYear) + 22); // fractional part is lost

console.log(String(23), 23);
console.log(Number("2%3@$csv6abc7")); // NaN
console.log(typeof NaN); // number

// false => similar to Boolean(empty)
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(NaN));

// remaining all are true
console.log(Boolean(1));
console.log(Boolean("anurag"));


// add string with a number without converting
// type coercion
console.log("I am " + 22 + " years old");
console.log("23" + 10); // 2310
console.log("23" + 10 + 5); // 23105
console.log("23" - "10" - 3); // 10
console.log("23" / "2"); // 11.5
console.log("23" * 2); // 46

let n = "1" + 1;
console.log(n, typeof n);
n--;
console.log(n, typeof n);


// String template literals
const fname = "Anurag";
const birthYear = 2001;
const job = "teacher";

const anurag =
  "I am " + fname + ", a " + job + ", " + (2023 - birthYear) + " years old";
console.log(anurag);

const anuragNew = `I am ${fname}, a ${job}, ${2023 - birthYear} years old`;
console.log(anuragNew);
console.log(`I am ${fname}`);

const age = 15;

if (age >= 18) {
  console.log("You can apply for a driver's license");
}

console.log("outside of 1st if-block");

if (age >= 18) {
  console.log("Hurray I got my license");
}

console.log("outside of 2nd if-block");

const age = 15;

if (age >= 18) {
  console.log("I can apply for drivers license");
} else {
  console.log("cannot take drivers license");
}
console.log("outside if-else");

const day = "tuesday";
if (day == "monday") {
  console.log("I have to go to movie");
} else {
  console.log("I do not know what to do");
}
if (day == "monday") {
  console.log("I have to go for shopping");
}
if (day == "tuesday") {
  console.log("I have an exam");
  console.log("I have to attend a wedding");
} else {
  console.log("I do not know what to do");
}
console.log("outside if-else");

// scope
const birthYear = 2001;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// else if statements
const day = "";

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

// logical operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || hasGoodVision); // OR
console.log(!hasDriversLicense); // NOT
console.log(!hasGoodVision);

if (hasDriversLicense && hasGoodVision) {
  console.log("Yayyy !!!!, I am able to drive");
} else {
  console.log("Sorry you cannot drive");
}

/*
BMI = (MASS / HEIGHT^2)
1. Print a nice output to the console, saying who has the higher BMI.
The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. 
Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// you can calculate square(height) in either ways
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn); // brackets are imp

if (bmiMark > bmiJohn) {
  console.log(
    `Mark's BMI (${bmiMark.toFixed(
      1
    )}) is higher than John's (${bmiJohn.toFixed(1)})!`
  );
} else {
  console.log(
    `John's BMI (${bmiJohn.toFixed(
      1
    )}) is higher than Mark's (${bmiMark.toFixed(1)})!`
  );
}


//////////////////////////// DEC 12th ////////////////////////////

// ASCII Values
console.log(String.fromCharCode(65));
console.log("M".charCodeAt(0));
console.log("+".charCodeAt(0));
console.log(String.fromCharCode(45));


//////////////////////////// DEC 13th ////////////////////////////

// ternary operator
const age = 18;
if (age >= 21) {
  console.log("You can drink alcohol");
} else {
  console.log("You cannot drink alcohol");
}

// ternary operators mostly used in conditional rendering of react components
const ans = age >= 21 ? "You can drink alcohol" : "You cannot drink alcohol";
console.log(ans);

age >= 21
  ? console.log("you can drink alcohol")
  : console.log("you cannot drink alcohol");


// for loop
console.log("pushup 1");
console.log("pushup 2");
console.log("pushup 3");
console.log("pushup 4");
console.log("pushup 5");
console.log("pushup 6");
console.log("pushup 7");
console.log("pushup 8");
console.log("pushup 9");
console.log("pushup 10");

for (initialization; condition; operation) {
  // your code
}


for (let cnt = 1; cnt <= 10; cnt++) {
  console.log(`pushup ${cnt}`);
}


console.log("pushup 5");
console.log("pushup 4");
console.log("pushup 3");
console.log("pushup 2");
console.log("pushup 1");

for (let cnt = 5; cnt > 0; cnt--) {
  console.log(`pushup ${cnt}`);
  console.log(`you are at level ${cnt}`);
}

// break
for (let num = 1; num <= 5; num++) {
  if (num == 3) {
    console.log("Sorry you cannot proceed to next level");
    break;
  }
  console.log(`You are at level ${num}`);
}

console.log("for loop completed");


//continue
for (let num = 1; num <= 5; num++) {
  if (num == 3) {
    console.log("Congratulations!!! you can skip this due to bonus points");
    continue;
  }
  console.log(`You are at level ${num}`);
}

console.log("for loop completed");


//////////////////////////// DEC 13th ////////////////////////////

// while
let num = 1;
while (num <= 10) {
  let temp = 5;
  console.log(num);
  num++;
}
console.log(num); // 11
console.log(temp); // error (out of scope)

let num = 1;
while (num <= 5) {
  if (num == 3) {
    console.log("Sorry you cannot go forward");
    num++; // fix, move the number from 3 -> 4
    continue; // infinite iterations
  }
  console.log(`level ${num}`);
  num++;
}

function logger() {
  console.log("Hi I am Anurag");
  console.log("I am your Instructor");
}

logger();
logger();
logger();


function cutPieces(fruit) {
  return 4 * fruit;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const ans = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return ans;
}

const res = fruitProcessor(4, 2);
console.log(res);

const fname = "anurag";

function first() {
  let a = 1;
  const b = second();
  a = a + b;
  return a;
}

function second() {
  let c = 2;
  return c;
}

const x = first();
console.log(x);

// global scope
const a = 5;
let fname = "arjun";
const year = 2023;

function test() {
  console.log(a, fname, year);
}

test();
console.log(a, fname, year);

// function scope
function calcAge(birthYear) {
  const currYear = 2023;
  var age = currYear - birthYear;
  return age;
}

console.log(calcAge(2001));
console.log(age); // as expected, reference error

// block scope
const birthYear = 1991;
if (1981 <= birthYear && birthYear <= 1996) {
  const oldGen = true;
  var century = 20;
}
console.log(century); // var type variables are not block scoped
console.log(oldGen); // reference error

test();
demo();
console.log(currYear); // undefined

function test() {
  console.log("Hi, How are you ?");
}

function demo() {
  console.log("demo function");
}

var currYear = 2023;
let example = "some value";

/////////////////// DEC 20 /////////////////
// Arrays

const friend1 = "Vishal";
const friend2 = "Piyush";
const friend3 = "Rohit";
const friend4 = "Ankit";

console.log(friend1, friend2, friend3, friend4);

// Datastructures help us store and access data efficiently.

// How to create an array
const friends1 = ["Amit", "Piyush", "Vishal", "Rohit", 1, 2, 3, true, false];
console.log(friends1);

const friends2 = new Array("Amit", "Piyush", "Vishal", "Rohit");
console.log(friends2);

// How to access elements of array
console.log(friends1[2]);
console.log(friends1[1]);
console.log(friends1[3]);
console.log(friends1[0]);

// Find the number of elements in the array
console.log(friends1.length);
console.log(friends2.length);

// How to get the last element of the array
console.log(friends1[friends1.length - 1]);
console.log(friends2[friends2.length - 1]);

// How to print all elements on a new line
for (let i = 0; i < friends1.length; i++) {
  console.log(i, friends1[i]);
}
for (let i = 0; i < friends2.length; i++) {
  console.log(i, friends2[i]);
}

// Can i change a box / element ? yes
console.log(friends2);
friends2[2] = "Ankit";
friends2[0] = "Vishal";
console.log(friends2);

// How to add new elements to array (at end)?
friends2.push("Anoop");
friends2.push("Arsh");
friends2.push("Ayush");
console.log(friends2);

// Arrays can store multiple data types at once
const firstName = "Anurag";
const age = 21;
const job = "Teacher";
const friends = ["Anoop", "Arsh", "Ayush", "xyz"];

const myArr = [firstName, age, job, friends];
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);

// how many friends are there to anurag ?
console.log(myArr[3].length);
console.log(friends[1]);
console.log(myArr[3][1]);

// get the last friend in general ?
console.log(friends[friends.length - 1]);
console.log(myArr[3][myArr[3].length - 1]);

// hoisting doubt in break
var a = 5;
function test() {
  console.log(a);
  var a = 10;
  console.log(a);
}
test();

// Exercise
function calcAge(birthYear) {
  return 2023 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018, 1992, 2003, 1987];

// create an array called ages which has
// respective age for each birthYear in the years array
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(calcAge(years[i]));
}

console.log(ages);


// How to generate pairs
let arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    console.log(i, j, arr[i], arr[j]);
  }
}
console.log(typeof Infinity, typeof -Infinity);

// How to generate subarray
const arr = [10, 20, 30, 40];
const n = arr.length;
for (let start = 0; start < n; start++) {
  let subarr = "";
  for (let end = start; end < n; end++) {
    subarr = subarr + arr[end] + " ";
    console.log(subarr);
  }
}

const friends1 = ["Amit", "Rohit", "Anoop"];
const friends2 = ["Vishal", "Saurabh", "Piyush", "Sujata"];
const friends3 = ["Akram", "JavaScript"];

const allFriends = [friends1, friends2, friends3];

console.log(allFriends);
console.log(allFriends[0]);
console.log(allFriends[1]);
console.log(allFriends[2]);

const rows = allFriends.length;
const cols0 = allFriends[0].length;
const cols1 = allFriends[1].length;
const cols2 = allFriends[2].length;
console.log("No.of rows (smaller arrays): " + rows);
console.log("No.of cols in row-0: " + cols0);
console.log("No.of cols in row-1: " + cols1);
console.log("No.of cols in row-2: " + cols2);

// How to print a matrix
function printMatrix(mat) {
  /*
  // print all elements from row - 0
  for (let i = 0; i < mat[0].length; i++) {
    process.stdout.write(mat[0][i] + " ");
  }
  console.log();

  // print all elements from row - 1
  for (let i = 0; i < mat[1].length; i++) {
    process.stdout.write(mat[1][i] + " ");
  }
  console.log();

  // print all elements from row - 2
  for (let i = 0; i < mat[2].length; i++) {
    process.stdout.write(mat[2][i] + " ");
  }
  

  const rows = mat.length;
  // as the no.of cols are same for every row
  const cols = mat[0].length;

  // go to every row
  for (let r = 0; r < rows; r++) {
    // iterate on cols of that row
    // when in case of jagged arrays (no.of cols in each row differ)
    // const cols = mat[r].length;
    for (let c = 0; c < cols; c++) {
      process.stdout.write(mat[r][c] + " ");
    }
    console.log();
  }
}

function createMatrix(n) {
  const mat = [];

  /*
  const arr1 = [];
  for (let i = 0; i < 3; i++) {
    arr1.push(i + 1);
  }
  mat.push(arr1);

  const arr2 = [];
  for (let i = 0; i < 3; i++) {
    arr2.push(i + 1);
  }
  mat.push(arr2);

  const arr3 = [];
  for (let i = 0; i < 3; i++) {
    arr3.push(i + 1);
  }
  mat.push(arr3);
  

  for (let r = 0; r < n; r++) {
    const arr = [];
    for (let c = 0; c < n; c++) {
      arr.push(c + 1);
    }
    mat.push(arr);
  }
  return mat;
}

const mat = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
];
printMatrix(mat);

const newMat = createMatrix(3);
printMatrix(newMat);
*/
