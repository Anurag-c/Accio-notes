const a = 10;
console.log(`My num is ${a}`);

// Variable Practice Question 2
// Link: https://course.acciojob.com/idle?question=d7f01721-b073-4270-b4e3-d0629d5550d1
let a = 10.45;
a = 20.55;
console.log(a);

// Variable Practice Question 3
// Link: https://course.acciojob.com/idle?question=7bc017d7-2d4b-498d-b8b0-096b36b2ad58
const a = 10;
const b = 20;
const c = a + b;
console.log(c);

// Variable Practice Question 4
// Link: https://course.acciojob.com/idle?question=68211524-103e-4140-af84-17773aa301d9
const a = 1042;
const b = 7;
const quo = parseInt(a / b);
const rem = a % b;
console.log(quo, rem);

// Variable Practice Question 5
// Link: https://course.acciojob.com/idle?question=d2ab1301-e24c-47e3-abed-3421163ba5a8
const v1 = 10.5;
const v2 = 12.5;
const v3 = 12.15;
const average = (v1 + v2 + v3) / 3;
console.log(parseInt(average));

// Variable Practice Question 8
// Link: https://course.acciojob.com/idle?question=ee04dfd0-ee0b-4512-ac07-46ba464cce2b
const input = 8;
console.log(`${input} x 1 = ${input * 1}`);
console.log(`${input} x 2 = ${input * 2}`);
console.log(`${input} x 3 = ${input * 3}`);
console.log(`${input} x 4 = ${input * 4}`);
console.log(`${input} x 5 = ${input * 5}`);
console.log(`${input} x 6 = ${input * 6}`);
console.log(`${input} x 7 = ${input * 7}`);
console.log(`${input} x 8 = ${input * 8}`);
console.log(`${input} x 9 = ${input * 9}`);
console.log(`${input} x 10 = ${input * 10}`);

// Celsius to Fahrenheit
// Link: https://course.acciojob.com/idle?question=6d435b0a-c2ab-4beb-b476-e311ee9bffdf
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (tempInCelsius) => {
  const F = tempInCelsius * (9 / 5) + 32;
  console.log(F);
  readline.close();
});

// Mathematical Operations
// Link: https://course.acciojob.com/idle?question=db7c833b-1a2d-451f-8357-c67567270e1d
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (input) => {
  const [a, b] = input.split(" ").map(Number);
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(parseInt(a / b));
  console.log(a % b);
  readline.close();
});

// Celsius to Fahrenheit 2
// Link: https://course.acciojob.com/idle?question=ea7be5f0-3781-49f5-a435-2183f1a0212a
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (C) => {
  const F = C * (9 / 5) + 32;
  console.log(F.toFixed(6));
  readline.close();
});

// Circle Area-Perimeter
// Link: https://course.acciojob.com/idle?question=f6f6fc43-493d-4c2e-8cfd-e07f3acad1e8
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (radius) => {
  const PI = 3;
  console.log(PI * radius * radius);
  console.log(2 * PI * radius);
});

// Conditional Problem 1
// Link: https://course.acciojob.com/idle?question=208cee53-a998-404f-a455-5307d71abacd
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  if (n == 28) {
    console.log("i am young");
  } else {
    console.log("i am not young");
  }

  readline.close();
});

// Conditional Problem 2
// Link: https://course.acciojob.com/idle?question=2f5bfb63-8713-432e-90e3-789ee00bc337
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  if (Number(input) < 30) {
    console.log("less important");
  } else {
    console.log("more important");
  }
  rl.close();
});

// Conditional Problem 5
// Link: https://course.acciojob.com/idle?question=38436ae2-5f85-4b5c-82ad-f5bd437c5e73
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (n) => {
  if (Number(n) % 6 == 0) {
    console.log("Divisible");
  } else {
    console.log("Not divisible");
  }
});

// Verify Cube
// Link: https://course.acciojob.com/idle?question=ad87c003-dc8d-4ea3-b416-de0ed0c6788e
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  let [a, b] = n.split(" ");
  a = Number(a);
  b = Number(b);

  // your code from here
  const LHS = (a + b) ** 3;
  const RHS = a ** 3 + b ** 3 + 3 * a ** 2 * b + 3 * a * b ** 2;

  console.log(LHS);
  console.log(RHS);
  if (LHS == RHS) {
    console.log("VERIFIED");
  } else {
    console.log("NOT VERIFIED");
  }

  readline.close();
});

// Leap Year
// Link: https://course.acciojob.com/idle?question=2c8693a8-885f-4c9b-9191-8faaf9ff9913
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (year) => {
  year = Number(year);

  const A = year % 400 == 0;
  const C = year % 4 == 0;
  const D = year % 100 != 0;

  if (A || (C && D)) {
    console.log(1);
  } else {
    console.log(0);
  }

  readline.close();
});

// Which Case
// Link: https://course.acciojob.com/idle?question=1c9a8bab-4f79-4c84-a309-bd850576d228
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (ch) => {
  if ("A" <= ch && ch <= "Z") {
    console.log(1);
  } else if ("a" <= ch && ch <= "z") {
    console.log(0);
  } else {
    console.log(-1);
  }

  readline.close();
});

// Big Light
// Link: https://course.acciojob.com/idle?question=0a4750a0-1950-4442-a4a2-c2f4708a4bc1
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [h1, h2, v1, v2] = input.split(" ").map(Number);

  if (h1 == h2) {
    console.log(true);
  } else if ((h1 < h2 && v1 <= v2) || (h2 < h1 && v2 <= v1)) {
    console.log(false);
  } else {
    if ((h1 - h2) % (v2 - v1) == 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
});

// Print 1 to 10
// Link: https://course.acciojob.com/idle?question=f8efe7b3-6e86-4d39-91c2-b72148c46da6
for (let num = 1; num <= 10; num++) {
  console.log(num);
}

// Sum of Natural Numbers
// https://course.acciojob.com/idle?question=75a292e5-d69d-44a0-a74d-366c7c3c5e95
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  N = Number(N);
  let sum = 0;
  for (let num = 1; num <= N; num++) {
    sum = sum + num;
  }

  console.log(sum);

  rl.close();
});

// Another Approach
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  N = Number(N);

  const ans = (N * (N + 1)) / 2;
  console.log(ans);
  rl.close();
});

// Factorial with loop
// Link: https://course.acciojob.com/idle?question=a93bddb1-78e4-4ad6-a018-275668ecc3e4
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.close();
  n = Number(n);
  let fact = 1;

  for (let num = 1; num <= n; num++) {
    fact = fact * num;
  }
  /*
  for (let num = n; num >= 1; num--) {
    fact = fact * num;
  }
  */

  console.log(fact);
});

// Even Sum
// Link: https://course.acciojob.com/idle?question=c6e3351d-7e24-4eea-b683-ba262959fa84
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  n = Number(n);
  /*
  let sum = 0;
  for (let num = 1; num <= n; num++) {
    if (num % 2 == 0) {
      sum = sum + num;
    }
  }

  for (let num = 2; num <= n; num += 2) {
    sum = sum + num;
  }
  */
  if (n % 2 != 0) {
    n = n - 1;
  }

  const sum = (n * (n + 2)) / 4;
  console.log(sum);
  readline.close();
});

// Check Prime
// Link: https://course.acciojob.com/idle?question=03d33e77-b47d-43ee-a075-e46ff509b0a6
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  n = Number(n);

  let isPrime = true;
  for (let num = 2; num <= n - 1; num++) {
    if (n % num == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime == true) {
    console.log(`${n} is a prime number`);
  } else {
    console.log(`${n} is not a prime number`);
  }

  readline.close();
});
