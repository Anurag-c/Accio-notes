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

// Improved version
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  n = Number(n);

  let isPrime = true;
  for (let num = 2; num * num <= n; num++) {
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

// Sum of digits
// Link: https://course.acciojob.com/idle?question=16ae2277-0d38-4eba-9a84-d4326ea2da2e
function SumofDigits(n) {
  let sum = 0;
  while (n != 0) {
    const digit = n % 10; // get last digit
    sum = sum + digit;
    n = parseInt(n / 10); // remove last digit
  }

  console.log(sum);
}

// Reverse digits of a Number
// Link: https://course.acciojob.com/idle?question=817d51d8-e009-4322-8e51-257b76455a4c
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  let rev = 0;
  while (n != 0) {
    const digit = n % 10;
    n = parseInt(n / 10);
    rev = rev * 10 + digit;
  }
  console.log(rev);
  readline.close();
});

// N Stars
// Link: https://course.acciojob.com/idle?question=24eb1955-7e70-45d9-8ce8-f9d9a8268aca
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  // horizontal stars
  for (let i = 0; i < n; i++) {
    process.stdout.write("* ");
  }

  console.log(); // go to next line after printing all horizontal stars

  // vertical stars
  for (let i = 0; i < n; i++) {
    console.log("*");
  }
  readline.close();
});

// Right Angle Triangle Stars
// Link: https://course.acciojob.com/idle?question=a148f7c8-e47f-45a9-bd72-8808f823ead1
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  // go to every row
  for (let row = 1; row <= n; row++) {
    // print required pattern for the current row
    for (let col = 1; col <= row; col++) {
      process.stdout.write("*");
    }
    console.log(); // move to next line
  }

  readline.close();
});

// Staircase
// Link: https://course.acciojob.com/idle?question=ac6a801c-d206-4945-9e19-583eb006417f
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  n = parseInt(n);

  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      process.stdout.write(" ");
    }
    for (let hashes = 1; hashes <= row; hashes++) {
      process.stdout.write("#");
    }
    console.log();
  }

  readline.close();
});

// Star Pyramid
// Link: https://course.acciojob.com/idle?question=e9e6daa1-9972-4e6c-a285-7a3e084a56b9
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  n = parseInt(n);

  // same as staircase but, there is a gap in between
  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      process.stdout.write(" ");
    }
    for (let stars = 1; stars <= row; stars++) {
      process.stdout.write("* ");
    }
    console.log();
  }

  readline.close();
});

// Print Number Pattern 2
// Link: https://course.acciojob.com/idle?question=8e5ac095-1d55-41cc-aaa7-75f2c24f953a
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (n) => {
  // your code here
  for (let row = 1; row <= n; row++) {
    for (let num = row; num >= 1; num--) {
      process.stdout.write(num + "");
    }
    console.log();
  }

  rl.close();
});

// Armstrong Numbers in Range
// Link: https://course.acciojob.com/idle?question=620db89b-bcf4-4913-be13-64da3b4ddbeb
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (line) => {
  let [m, n] = line.split(" ").map(Number);

  for (let num = m; num <= n; num++) {
    // count the number of digits
    let temp = num;
    let cnt = 0;
    while (temp != 0) {
      temp = parseInt(temp / 10);
      cnt++;
    }

    // sum of (digit power no.of digits)
    temp = num;
    let sum = 0;
    while (temp != 0) {
      const digit = temp % 10;
      sum = sum + digit ** cnt;
      temp = parseInt(temp / 10);
    }

    // armstrong number
    if (num == sum) {
      console.log(num);
    }
  }

  readline.close();
});

// Print Character Pattern
// Link: https://course.acciojob.com/idle?question=687fa3e9-43fd-4000-8e0d-71330c8742e1
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  for (let row = 1; row <= n; row++) {
    const alphabet = String.fromCharCode(64 + row);
    for (let col = 1; col <= row; col++) {
      process.stdout.write(alphabet);
    }
    console.log();
  }

  readline.close();
});

// Function Problem 2
// Link: https://course.acciojob.com/idle?question=b27b4039-2b8b-4834-9a6b-f8622057be7a
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fun(n, m) {
  console.log(n + m);
}

readline.question("", (input) => {
  const [n, m] = input.split(" ").map(Number);
  fun(n, m);
  readline.close();
});

// Function Problem 3
// Link: https://course.acciojob.com/idle?question=922be2a0-a552-456c-9f9e-5c41b514d200
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fun(n) {
  return n + 5;
}

rl.on("line", (n) => {
  let result = fun(parseInt(n));
  console.log(result);
  rl.close();
});

// Super Hero
// Link: https://course.acciojob.com/idle?question=4b50de0b-5e1c-4477-8a34-82fa7d292044
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ModifyName(name) {
  return `${name} is a Super Hero`;
}

rl.on("line", (name) => {
  console.log(ModifyName(name));
  rl.close();
});

// Place Value Checker
// Link: https://course.acciojob.com/idle?question=7412f7e1-3017-44fa-83a9-00b9c0781986
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  let res = determineSecondLastDigit(parseInt(n));
  if (res) console.log("Yes");
  else console.log("No");
  readline.close();
});

function determineSecondLastDigit(n) {
  n = parseInt(n / 10);
  const digit = n % 10;
  return digit == 0;
}

// Calculate nCr
// Link: https://course.acciojob.com/idle?question=869a6e7b-e104-45df-b2b0-28a803fecc43
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function factorial(n) {
  let fact = 1;
  for (let num = 1; num <= n; num++) {
    fact = fact * num;
  }
  return fact;
}

function calculate_nCr(n, r) {
  let nFact = factorial(n);
  let rFact = factorial(r);
  let nrFact = factorial(n - r);
  const ans = nFact / (rFact * nrFact);
  return ans;
}

readline.question("", (input) => {
  const [n, r] = input.split(" ").map(Number);
  const ans = calculate_nCr(n, r);
  console.log(ans);
  readline.close();
});

// Array Problem 1
// Link: https://course.acciojob.com/idle?question=203c6532-1438-4d70-8854-94f35fe1b0ba
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    let ans = ArrayProblem1(n, arr);
    console.log(ans);
    readline.close();
  });
});

function ArrayProblem1(n, arr) {
  let max_ele = -Infinity;
  let max_idx = -1;

  for (let i = 0; i < n; i++) {
    if (arr[i] > max_ele) {
      max_ele = arr[i];
      max_idx = i;
    }
  }

  return max_idx;
}

// Array Problem 2
// Link: https://course.acciojob.com/idle?question=e958fa46-11df-46f0-9153-6907e969d40d
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    const arrNum = arr.split(" ").map(Number);
    const ans = ArrayProblem2(n, arrNum);
    console.log(ans);
    readline.close();
  });
});

function ArrayProblem2(n, arr) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > 35) {
      cnt++;
    }
  }
  return cnt;
}

// Array Problem 5
// Link: https://course.acciojob.com/idle?question=f98feeb1-40eb-4b6f-a600-067714166864
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ArrayProblem(arr, k) {
  const n = arr.length;
  let cnt = 0;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] + arr[i + 1] == k) {
      cnt++;
    }
  }
  return cnt;
}

readline.question("", (input) => {
  const [n, k] = input.split(" ").map(Number);
  readline.question("", (input) => {
    const arr = input.split(" ").map(Number);
    console.log(ArrayProblem(arr, k));
    readline.close();
  });
});

// Array Operations
// Link: https://course.acciojob.com/idle?question=c2985a2b-5ee0-4569-a77b-7459b1efd8d7
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    arrayOperations(arr, n);
    readline.close();
  });
});

function arrayOperations(arr, n) {
  let sum = 0;
  let max_ele = -Infinity;
  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
    if (arr[i] > max_ele) {
      max_ele = arr[i];
    }
  }

  const average = parseInt(sum / n);
  console.log(sum, average, max_ele);
}

// Maximum difference between two elements in an Array
// https://course.acciojob.com/idle?question=b5a0f4ca-7b5e-4fee-9487-3ca52a582741
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

rl.on("line", (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    arr = input.split(" ").map(Number);
    ArrayProblem(arr);
    rl.close();
  }
});

function ArrayProblem(arr) {
  let n = arr.length;
  let max_diff = -Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const diff = Math.abs(arr[i] - arr[j]);
      if (diff > max_diff) {
        max_diff = diff;
      }
    }
  }

  console.log(max_diff);
}

// Improvised version
function ArrayProblem(arr) {
  let n = arr.length;
  let max_ele = -Infinity;
  let min_ele = Infinity;

  for (let i = 0; i < n; i++) {
    if (arr[i] > max_ele) {
      max_ele = arr[i];
    }
    if (arr[i] < min_ele) {
      min_ele = arr[i];
    }
  }

  console.log(max_ele - min_ele);
}

// Index of an element
// Link: https://course.acciojob.com/idle?question=71ec4228-63be-4027-9fa4-08135d2a16d6
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function indexOfElement(N, X, arr) {
  let isFound = false;
  for (let i = 0; i < N; i++) {
    if (arr[i] == X) {
      isFound = true;
      process.stdout.write(i + 1 + " ");
    }
  }

  if (isFound == false) {
    console.log(-1);
  }
}

readline.question("", (input) => {
  const [N, X] = input.split(" ").map(Number);
  readline.question("", (input) => {
    const arr = input.split(" ").map(Number);
    indexOfElement(N, X, arr);
    readline.close();
  });
});

// A contest
// Link: https://course.acciojob.com/idle?question=0363c617-a2d0-41a5-a2a3-f5736d1c36f7
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (a) => {
  rl.on("line", (b) => {
    const [n, k] = a.split(" ").map(Number);
    const arr = b.split(" ").map(Number);
    printFindParticipants(arr, n, k);
    rl.close();
  });
});

function printFindParticipants(arr, n, k) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0 && arr[i] >= arr[k - 1]) {
      cnt++;
    }
  }
  console.log(cnt);
}

// Reverse an array
// Link: https://course.acciojob.com/idle?question=944dba4b-f895-44af-8ec1-7445343e5713
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

rl.on("line", (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    arr = input.split(" ").map(Number);
    reverseArray(arr, 0, n - 1);
    console.log(arr.join(" "));
    rl.close();
  }
});

function reverseArray(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Array Problem 6
// Link: https://course.acciojob.com/idle?question=02fe1fa2-2fba-4a5f-aca0-baac93f166a3
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    let ans = ArrayProblem6(n, arr);
    console.log(ans);
    readline.close();
  });
});

function ArrayProblem6(n, arr) {
  let prev_even_idx = -1;
  let minDiff = Infinity;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0 && arr[i] % 2 == 0) {
      if (prev_even_idx != -1) {
        const diff = i - prev_even_idx;
        if (minDiff > diff) {
          minDiff = diff;
        }
      }

      prev_even_idx = i;
    }
  }

  if (minDiff == Infinity) {
    return -1;
  }
  return minDiff;
}

// 2nd Largest from array
// Link: https://course.acciojob.com/idle?question=d5b5b101-0636-4654-bd4d-bfecce8e5d00
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  let n = parseInt(input[0]);
  let arr = input[1].split(" ").map(Number);
  SecondLargest(arr, n);
});

function SecondLargest(arr, n) {
  let firstMax = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > firstMax) {
      firstMax = arr[i];
    }
  }

  let secondMax = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] != firstMax && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }

  console.log(secondMax);
}

// Buildings
// Link: https://course.acciojob.com/idle?question=a7bdae50-cbdd-4048-a3c3-be52504b9580
function isGreater(arr, idx) {
  const ele = arr[idx];
  for (let i = 0; i < idx; i++) {
    // I found a building on left with h > currh
    if (arr[i] > ele) {
      return true;
    }
  }
  return false;
}

function countVisibleRoofs(heights) {
  let n = heights.length;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    const check = isGreater(heights, i);
    if (check == false) {
      cnt++;
    }
  }
  return cnt;
}

// Improved version
function countVisibleRoofs(heights) {
  let n = heights.length;
  let cnt = 0;
  let maxUntilNow = -Infinity;
  for (let i = 0; i < n; i++) {
    if (maxUntilNow <= heights[i]) {
      cnt++;
      maxUntilNow = heights[i];
    }
  }
  return cnt;
}

// Array Adding
// Link: https://course.acciojob.com/idle?question=a426a64f-8962-4a98-9433-3200d900ad67

function calSumUtil(a, b, n, m) {
  let i = n - 1;
  let j = m - 1;
  let carry = 0;
  const res = [];

  while (i >= 0) {
    const sum = j >= 0 ? a[i] + b[j] + carry : a[i] + carry;
    res[i] = sum % 10;
    carry = parseInt(sum / 10);
    i--;
    j--;
  }

  if (carry > 0) {
    // add an element 1 to start of res
    res.unshift(1);
  }

  return res;
}

function calSum(a, b, n, m) {
  if (n >= m) return calSumUtil(a, b, n, m);
  return calSumUtil(b, a, m, n);
}

// Rotate Array
// Link: https://course.acciojob.com/idle?question=444d4b46-efef-467a-8833-e3fede7d22f0
function reverse(arr, start, end) {
  while (start <= end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateArray(arr, n, k) {
  k = k % n;
  reverse(arr, 0, n - 1);
  reverse(arr, 0, n - k - 1);
  reverse(arr, n - k, n - 1);
  for (let i = 0; i < n; i++) {
    process.stdout.write(arr[i] + " ");
  }
}

// Subarray Sum Zero
// Link: https://course.acciojob.com/idle?question=7f096e64-5c0d-4333-b324-02e6ac91a3d7
function zeroSubarray(arr) {
  const n = arr.length;
  let isFound = false;

  for (let start = 0; start < n; start++) {
    let subArrSum = 0;
    for (let end = start; end < n; end++) {
      subArrSum = subArrSum + arr[end];
      // you will have the sum of [start, end]
      if (subArrSum == 0) {
        isFound = true;
        console.log(`Subarray found from Index ${start} to ${end}`);
      }
    }
  }

  if (isFound == false) {
    console.log(-1);
  }
}

// Subarray sum divisible by k
// Link: https://course.acciojob.com/idle?question=fd54a321-f9b7-4772-9d78-
function subarrayDivisbleByK(arr, n, k) {
  let cnt = 0;
  for (let start = 0; start < n; start++) {
    let subArrSum = 0;
    for (let end = start; end < n; end++) {
      subArrSum = subArrSum + arr[end];
      if (subArrSum % k == 0) {
        cnt++;
      }
    }
  }

  return cnt;
}

// Find Split Point
// Link: https://course.acciojob.com/idle?question=c0af5738-5a1c-4a05-a68c-789f38a620d1
function findSplit(n, arr) {
  for (let cut = 0; cut < n - 1; cut++) {
    let lsum = 0;
    let larr = "";
    for (let i = 0; i <= cut; i++) {
      lsum += arr[i];
      larr += arr[i] + " ";
    }

    let rsum = 0;
    let rarr = "";
    for (let i = cut + 1; i < n; i++) {
      rsum += arr[i];
      rarr += arr[i] + " ";
    }

    if (lsum == rsum) {
      return [larr, rarr];
    }
  }

  return -1;
}

function splitArray(n, arr) {
  const cut = findSplit(n, arr);
  if (cut == -1) {
    console.log("Not Possible");
  } else {
    console.log(cut[0]);
    console.log(cut[1]);
  }
}

// Improved version
function findSplit(n, arr) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += arr[i];
  }

  let lsum = 0;
  for (let cut = 0; cut < n - 1; cut++) {
    lsum += arr[cut];
    const rsum = total - lsum;
    if (lsum == rsum) {
      return cut;
    }
  }

  return -1;
}

function splitArray(n, arr) {
  const cut = findSplit(n, arr);
  if (cut == -1) {
    console.log("Not Possible");
  } else {
    for (let i = 0; i <= cut; i++) {
      process.stdout.write(arr[i] + " ");
    }
    console.log();
    for (let i = cut + 1; i < n; i++) {
      process.stdout.write(arr[i] + " ");
    }
  }
}

// Find Geometric Triplets
// Link: https://course.acciojob.com/idle?question=cefcef33-7a3f-46ea-99f4-694dd5297224
function findGeometricTriplets(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[j] * arr[j] == arr[i] * arr[k]) {
          console.log(arr[i], arr[j], arr[k]);
        }
      }
    }
  }
}

// Print 2D Array
// Link: https://course.acciojob.com/idle?question=9ea8dbd6-3b71-45c9-a8c3-1bfb7608ad13
function printElements(arr, n, m) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      process.stdout.write(arr[i][j] + " ");
    }
    console.log();
  }
}

// Print Matrix Column Wise
// Link: https://course.acciojob.com/idle?question=31900452-fb2e-45cd-93b0-fb4d6afbfac0
function printMatrixColumnwise(mat, n, m) {
  // go to every column
  for (let c = 0; c < m; c++) {
    // go to every row
    for (let r = 0; r < n; r++) {
      process.stdout.write(mat[r][c] + " ");
    }
  }
}

// Alternate Manner Matrix Traversal
// Link: https://course.acciojob.com/idle?question=191ba184-3c72-468a-83fe-5100d558f7eb
function printElementsAlternately(mat, n, m) {
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < m; j++) {
        process.stdout.write(mat[i][j] + " ");
      }
    } else {
      for (let j = m - 1; j >= 0; j--) {
        process.stdout.write(mat[i][j] + " ");
      }
    }
  }
}

// Matrix Multiplication
// Link: https://course.acciojob.com/idle?question=da3dfaa3-541f-4b9b-a202-30b4fb01a835
function printMultiplication(a, b, n) {
  const rows1 = n;
  const cols1 = n;
  const rows2 = n;
  const cols2 = n;

  if (cols1 != rows2) return;

  // Initializing the matrix
  let res = [];
  for (let r = 0; r < rows1; r++) {
    res[r] = [];
    for (let c = 0; c < cols2; c++) {
      res[r][c] = 0;
    }
  }

  // pick row of a and col of b and iterate on k
  for (let r = 0; r < rows1; r++) {
    for (let c = 0; c < cols2; c++) {
      for (let k = 0; k < cols1; k++) {
        res[r][c] += a[r][k] * b[k][c];
      }
    }
  }

  // printing the result
  for (let r = 0; r < rows1; r++) {
    for (let c = 0; c < cols2; c++) {
      process.stdout.write(res[r][c] + " ");
    }
    console.log();
  }
}

// Transpose of Matrix
// Link: https://course.acciojob.com/idle?question=57e7562d-b233-42ca-89f6-c10ad5cdf579
function matrixTranspose(mat, n) {
  for (let r = 1; r < n; r++) {
    for (let c = 0; c < r; c++) {
      const temp = mat[r][c];
      mat[r][c] = mat[c][r];
      mat[c][r] = temp;
    }
  }
  return mat;
}

// Spirally traversing a matrix
// Link: https://course.acciojob.com/idle?question=5f714d43-3f91-4c47-b41b-203207e63522
function spirallyTraverse(mat) {
  const rows = mat.length;
  const cols = mat[0].length;

  let minR = 0;
  let maxR = rows - 1;
  let minC = 0;
  let maxC = cols - 1;
  let totalEle = rows * cols;

  while (totalEle > 0) {
    // top wall
    for (let c = minC; c <= maxC && totalEle > 0; c++) {
      process.stdout.write(mat[minR][c] + " ");
      totalEle--;
    }
    minR++;

    // right wall
    for (let r = minR; r <= maxR && totalEle > 0; r++) {
      process.stdout.write(mat[r][maxC] + " ");
      totalEle--;
    }
    maxC--;

    // bottom wall
    for (let c = maxC; c >= minC && totalEle > 0; c--) {
      process.stdout.write(mat[maxR][c] + " ");
      totalEle--;
    }
    maxR--;

    // left wall
    for (let r = maxR; r >= minR && totalEle > 0; r--) {
      process.stdout.write(mat[r][minC] + " ");
      totalEle--;
    }
    minC++;
  }
}

// Alt Matrix Sum
// Link: https://course.acciojob.com/idle?question=04a591ba-305a-4bd7-a4b2-9a06ac187837
function alternateMatrixSum(mat, n) {
  let bsum = 0;
  let wsum = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if ((r + c) % 2 == 0) {
        bsum += mat[r][c];
      } else {
        wsum += mat[r][c];
      }
    }
  }

  console.log(bsum);
  console.log(wsum);
}

// Other way
function alternateMatrixSum(mat, n) {
  let bsum = 0;
  let wsum = 0;
  for (let r = 0; r < n; r++) {
    let isBlack = false;
    if (r % 2 == 0) isBlack = true;

    for (let c = 0; c < n; c++) {
      if (isBlack) {
        bsum += mat[r][c];
      } else {
        wsum += mat[r][c];
      }

      isBlack = !isBlack; // invert
    }
  }

  console.log(bsum);
  console.log(wsum);
}

// Diagonal Difference!
// Link: https://course.acciojob.com/idle?question=8a6cbf35-d128-459b-a7ba-9e269d2af40a
function diagonalDifference(mat, n) {
  let diag = 0;
  let adiag = 0;
  for (let r = 0; r < n; r++) {
    diag += mat[r][r];
    adiag += mat[r][n - r - 1];
  }

  console.log(Math.abs(diag - adiag));
}

// Find The Way
// Link: https://course.acciojob.com/idle?question=60d37a31-7584-48eb-baad-ee073ffc7acf
function findTheWay(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let i = 0;
  let j = 0;
  let facing = 0;

  while (true) {
    // decide your facing
    facing = (facing + matrix[i][j]) % 4;
    matrix[i][j] = 0;

    // move forward
    // facing right (i, j) -> (i, j + 1)
    if (facing == 0) {
      j++;
    }
    // facing down (i, j) -> (i + 1, j)
    else if (facing == 1) {
      i++;
    }
    // facing left (i, j) -> (i, j - 1)
    else if (facing == 2) {
      j--;
    }
    // facing top (i, j) -> (i - 1, j)
    else {
      i--;
    }

    // exit conditions
    // exit from right
    if (j == cols) {
      j--; // to get the previous cell (before exit)
      break;
    }
    // exit from down
    else if (i == rows) {
      i--;
      break;
    }
    // exit from left
    else if (j == -1) {
      j++;
      break;
    }
    // exit from top
    else if (i == -1) {
      i++;
      break;
    }
  }

  return [i, j];
}

// Array Subtracting
// Link: https://course.acciojob.com/idle?question=4ed416d3-76b0-41a6-a956-3201e2fb6079
function subtractUtil(a, b, n, m) {
  let i = n - 1;
  let j = m - 1;
  let borrow = 0;
  res = [];

  // cover same lengths
  while (i >= 0 && j >= 0) {
    if (a[i] + borrow >= b[j]) {
      res[i] = a[i] + borrow - b[j];
      borrow = 0;
    } else {
      res[i] = a[i] + borrow + 10 - b[j];
      borrow = -1;
    }

    i--;
    j--;
  }

  // left over elements in 1st array, when length of a > length b
  while (i >= 0) {
    res[i] = a[i] + borrow;
    borrow = 0;
    i--;
  }

  return res;
}

function subtract(arr1, arr2) {
  const n = arr1.length;
  const m = arr2.length;

  if (n > m) {
    return subtractUtil(arr1, arr2, n, m);
  } else if (n < m) {
    let res = subtractUtil(arr2, arr1, m, n);
    res[0] = res[0] * -1;
    return res;
  } else {
    for (let i = 0; i < n; i++) {
      if (arr1[i] > arr2[i]) {
        return subtractUtil(arr1, arr2, n, m);
      } else if (arr2[i] > arr1[i]) {
        let res = subtractUtil(arr2, arr1, m, n);
        res[0] = res[0] * -1;
        return res;
      }
    }
    return subtractUtil(arr1, arr2, n, m);
  }
}

// Maxima Minima
// Link: https://course.acciojob.com/idle?question=834a5e9e-9b0c-45db-b0e1-375bafb999ea
function minEleRow(mat, row) {
  const cols = mat[row].length;
  let minEle = Infinity;
  for (let c = 0; c < cols; c++) {
    if (mat[row][c] < minEle) {
      minEle = mat[row][c];
    }
  }
  return minEle;
}

function maxEleCol(mat, col) {
  const rows = mat.length;
  let maxEle = -Infinity;
  for (let r = 0; r < rows; r++) {
    if (mat[r][col] > maxEle) {
      maxEle = mat[r][col];
    }
  }
  return maxEle;
}

function maximaMinima(mat) {
  const rows = mat.length;
  const cols = mat[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const minR = minEleRow(mat, i);
      const maxC = maxEleCol(mat, j);
      if (mat[i][j] == minR && mat[i][j] == maxC) {
        return mat[i][j];
      }
    }
  }

  return -1;
}

// Using Precomputation
function maximaMinima(mat) {
  const rows = mat.length;
  const cols = mat[0].length;

  // Initialize arrays
  const minEleRow = [];
  for (let i = 0; i < rows; i++) {
    minEleRow[i] = Infinity;
  }
  const maxEleCol = [];
  for (let i = 0; i < cols; i++) {
    maxEleCol[i] = -Infinity;
  }

  // precompute
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] < minEleRow[i]) {
        minEleRow[i] = mat[i][j];
      }
      if (mat[i][j] > maxEleCol[j]) {
        maxEleCol[j] = mat[i][j];
      }
    }
  }

  // main logic
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const minR = minEleRow[i];
      const maxC = maxEleCol[j];
      if (mat[i][j] == minR && mat[i][j] == maxC) {
        return mat[i][j];
      }
    }
  }

  return -1;
}

// Toeplitz Matrix
// Link: https://course.acciojob.com/idle?question=fa4a91e3-218d-473b-8d33-65fb2af3e145
function isToeplitzMatrix(matrix, m, n) {
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (matrix[i][j] != matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }

  return true;
}
