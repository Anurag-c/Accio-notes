// Variable Practice Question 1
// Link: https://course.acciojob.com/idle?question=2180cf80-db05-4bb0-894d-d46967d5f251
const a = 10;
console.log(`My num is ${a}`);
// console.log("My num is " + a);

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
let i = 1;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;

// Circle Area-Perimeter
// Link: https://course.acciojob.com/idle?question=f6f6fc43-493d-4c2e-8cfd-e07f3acad1e8
rl.on("line", (radius) => {
  //Write your code here
  const PI = 3;
  const area = PI * radius * radius;
  const peri = 2 * PI * radius;
  console.log(area);
  console.log(peri);
});

// Mathematical Operations
// Link: https://course.acciojob.com/idle?question=db7c833b-1a2d-451f-8357-c67567270e1d
readline.question("", (input) => {
  const [a, b] = input.split(" ").map(Number);
  // Write code here and print output
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(parseInt(a / b));
  console.log(a % b);

  readline.close();
});

// Celsius to Fahrenheit
// Link: https://course.acciojob.com/idle?question=6d435b0a-c2ab-4beb-b476-e311ee9bffdf
readline.question("", (tempInCelsius) => {
  //Write your code here and print the required output
  const fahrenheit = tempInCelsius * (9 / 5) + 32;
  console.log(fahrenheit);
  readline.close();
});

// Celsius to Fahrenheit 2
// Link: https://course.acciojob.com/idle?question=ea7be5f0-3781-49f5-a435-2183f1a0212a
readline.question("", (C) => {
  readline.close();
  const fahrenheit = C * (9 / 5) + 32;
  console.log(fahrenheit.toFixed(6));
});

// Agent Binod
// Link: https://course.acciojob.com/idle?question=c50797ee-7d99-47ba-916f-c8b704d95d4d
readline.question("", (agentName) => {
  console.log(`Hi my name is Agent ${agentName}`);
});

// Conditional Problem 1
// Link: https://course.acciojob.com/idle?question=208cee53-a998-404f-a455-5307d71abacd
readline.question("", (n) => {
  // write code here
  if (n == 28) {
    console.log("i am young");
  } else {
    console.log("i am not young");
  }
  readline.close();
});

// Conditional Problem 2
// Link: https://course.acciojob.com/idle?question=2f5bfb63-8713-432e-90e3-789ee00bc337
rl.on("line", (input) => {
  // Write your code here
  if (input < 30) {
    console.log("less important");
  } else {
    console.log("more important");
  }
  rl.close();
});

// Conditional Problem 3
// Link: https://course.acciojob.com/idle?question=fa2265ac-6e4a-480f-b428-5056768d05f0
readline.question("", (n) => {
  // write code here
  if (n > 1) {
    console.log("You entered more");
  } else {
    console.log("You entered less");
  }
  readline.close();
});

// Conditional Problem 5
// Link: https://course.acciojob.com/idle?question=38436ae2-5f85-4b5c-82ad-f5bd437c5e73
rl.on("line", (n) => {
  // Your code here
  if (n % 6 == 0) {
    console.log("Divisible");
  } else {
    console.log("Not divisible");
  }
});

// Verify Cube
// Link: https://course.acciojob.com/idle?question=ad87c003-dc8d-4ea3-b416-de0ed0c6788e
readline.question("", (n) => {
  let [a, b] = n.split(" ");
  a = Number(a);
  b = Number(b);
  //Write your code here

  const LHS = (a + b) ** 3;
  const RHS = a ** 3 + b ** 3 + 3 * a * a * b + 3 * a * b ** 2;

  console.log(LHS);
  console.log(RHS);

  if (LHS == RHS) {
    console.log("VERIFIED");
  } else {
    console.log("NOT VERIFIED");
  }

  readline.close();
});

// Quadrants
// Link: https://course.acciojob.com/idle?question=c878e8a7-f476-4303-a251-5e878a60a736
rl.on("line", (x) => {
  rl.on("line", (y) => {
    // write code here

    if (x > 0 && y > 0) {
      console.log(1);
    } else if (x < 0 && y > 0) {
      console.log(2);
    } else if (x < 0 && y < 0) {
      console.log(3);
    } else if (x > 0 && y < 0) {
      console.log(4);
    }

    rl.close();
  });
});

// Leap Year
// Link: https://course.acciojob.com/idle?question=2c8693a8-885f-4c9b-9191-8faaf9ff9913
readline.question("", (year) => {
  //Write your code here and print the required output
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
readline.question("", (ch) => {
  // Your code here
  const ascii = ch.charCodeAt(0);

  // ascii in range [65, 90] (capital) => 65 <= ascii <= 90
  // ascii in range [97, 122] (small) => 97 <= ascii <= 122
  if (65 <= ascii && ascii <= 90) {
    console.log(1);
  } else if (97 <= ascii && ascii <= 122) {
    console.log(0);
  } else {
    console.log(-1);
  }

  readline.close();
});

// Simplified
readline.question("", (ch) => {
  // Your code here
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
rl.on("line", (input) => {
  const [h1, h2, v1, v2] = input.split(" ").map(Number);
  // Write your code here
  if (h1 == h2) {
    console.log(true);
  } else if (h1 < h2 && v1 <= v2) {
    console.log(false);
  } else if (h2 < h1 && v2 <= v1) {
    console.log(false);
  } else {
    if ((h2 - h1) % (v2 - v1) == 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
});

// Which angled triangle
// Link: https://course.acciojob.com/idle?question=165c71bd-af5e-45bb-acc5-48180c164f97
rl.on("line", (sides) => {
  let [a, b, c] = sides.split(" ");
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

  // Write your code here
  /*
  let largest;
  if (a >= b && a >= c) {
    largest = a;
  } else if (b >= a && b >= c) {
    largest = b;
  } else if (c >= a && c >= b) {
    largest = c;
  }
  */

  const largest = Math.max(a, b, c);
  const LHS = 2 * largest ** 2;
  const RHS = a ** 2 + b ** 2 + c ** 2;

  if (LHS < RHS) {
    console.log(1);
  } else if (LHS > RHS) {
    console.log(3);
  } else {
    console.log(2);
  }

  rl.close();
});

// Sum of Natural Numbers
// Link: https://course.acciojob.com/idle?question=75a292e5-d69d-44a0-a74d-366c7c3c5e95
rl.on("line", (N) => {
  // write your code here
  N = Number(N);

  let sum = 0;
  for (let num = 1; num <= N; num++) {
    sum += num;
  }
  console.log(sum);
  rl.close();
});

// simple / efficient
rl.on("line", (N) => {
  // write your code here
  N = Number(N);
  const sum = (N * (N + 1)) / 2;
  console.log(sum);
  rl.close();
});

// Even Sum
// Link: https://course.acciojob.com/idle?question=c6e3351d-7e24-4eea-b683-ba262959fa84
readline.question("", (n) => {
  n = parseInt(n);
  // Write your code here
  let sum = 0;
  for (let num = 2; num <= n; num += 2) {
    sum += num; // sum = sum + num;
  }
  console.log(sum);

  readline.close();
});

// Iterate over all numbers until n and consider only even numbers out of them
readline.question("", (n) => {
  n = parseInt(n);
  // Write your code here
  let sum = 0;
  for (let num = 1; num <= n; num++) {
    if (num % 2 == 0) {
      sum += num; // sum = sum + num;
    }
  }
  console.log(sum);

  readline.close();
});

// simple / efficient
readline.question("", (n) => {
  n = parseInt(n);
  // Write your code here
  if (n % 2 == 1) {
    n = n - 1;
  }

  const sum = (n * (n + 2)) / 4;
  console.log(sum);

  readline.close();
});

// Check Prime
// Link: https://course.acciojob.com/idle?question=03d33e77-b47d-43ee-a075-e46ff509b0a6
readline.question("", (n) => {
  // your code here
  n = Number(n);
  let flag = true; // guessing that n is a prime

  // try to prove that n is not a prime
  for (let num = 2; num < n; num++) {
    if (n % num == 0) {
      flag = false;
      break;
    }
  }

  if (flag) {
    console.log(`${n} is a prime number`);
  } else {
    console.log(`${n} is not a prime number`);
  }

  readline.close();
});

// HCF of two Numbers
// Link: https://course.acciojob.com/idle?question=81da7d29-0653-423e-a44a-f96fc14eb8fc
rl.on("line", (input) => {
  const [a, b] = input.split(" ").map(Number);
  // your code here
  let ans = 1;
  for (let num = 1; num <= Math.min(a, b); num++) {
    if (a % num == 0 && b % num == 0) {
      ans = num;
    }
  }

  console.log(ans);
});

// iterate from back
rl.on("line", (input) => {
  const [a, b] = input.split(" ").map(Number);
  // your code here
  for (let num = Math.min(a, b); num >= 1; num--) {
    if (a % num == 0 && b % num == 0) {
      console.log(num);
      break;
    }
  }
});

// Factorial with loop
// Link: https://course.acciojob.com/idle?question=a93bddb1-78e4-4ad6-a018-275668ecc3e4
readline.question("", (n) => {
  readline.close();
  // Write your code here

  let prod = 1;
  for (let num = 1; num <= n; num++) {
    prod = prod * num; // prod *= num;
  }

  console.log(prod);
});

// Power of a Number
// Link: https://course.acciojob.com/idle?question=0f925a63-cce8-449c-983d-bfc2bacada93
rl.on("line", (line) => {
  const [a, b] = line.split(" ").map(Number);
  // write code here
  // console.log(a ** b);

  let prod = 1;
  for (let i = 0; i < b; i++) {
    prod = prod * a;
  }
  console.log(prod);
});

// Sum of digits
// Link: https://course.acciojob.com/idle?question=16ae2277-0d38-4eba-9a84-d4326ea2da2e
function SumofDigits(n) {
  let sum = 0;
  while (n != 0) {
    // 1. extract last digit
    const lastDigit = n % 10;

    // 2. remove last digit
    n = parseInt(n / 10);

    // 3. calculation
    sum += lastDigit;
  }

  return sum; // console.log(sum);
}

// Reverse digits of a Number
// Link: https://course.acciojob.com/idle?question=817d51d8-e009-4322-8e51-257b76455a4c
readline.question("", (n) => {
  //Write your code here
  let rev = 0;
  while (n != 0) {
    const lastDigit = n % 10;
    n = parseInt(n / 10);
    rev = rev * 10 + lastDigit;
  }

  console.log(rev);

  readline.close();
});

// N stars
// Link: https://course.acciojob.com/idle?question=24eb1955-7e70-45d9-8ce8-f9d9a8268aca
readline.question("", (n) => {
  // Write your code here
  for (let i = 0; i < n; i++) {
    process.stdout.write("* ");
  }

  console.log();

  for (let i = 0; i < n; i++) {
    console.log("*");
  }

  readline.close();
});

// Palindrome number
// Link: https://course.acciojob.com/idle?question=340d0f67-3062-487f-ac95-adcb744c410c
readline.question("", (n) => {
  //Write your code here and print the required output

  // original number gets lost hence store in a separate variable
  let rev = 0;
  let temp = n;
  while (temp != 0) {
    const lastDigit = temp % 10;
    temp = parseInt(temp / 10);
    rev = rev * 10 + lastDigit;
  }

  if (n == rev) {
    console.log(true);
  } else {
    console.log(false);
  }

  readline.close();
});

// Right Angle Triangle Stars
// Link: https://course.acciojob.com/idle?question=a148f7c8-e47f-45a9-bd72-8808f823ead1
readline.question("", (n) => {
  //Write your code here
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < r + 1; c++) {
      process.stdout.write("*");
    }
    console.log();
  }

  readline.close();
});

// Staircase
// Link: https://course.acciojob.com/idle?question=ac6a801c-d206-4945-9e19-583eb006417f
readline.question("", (n) => {
  n = parseInt(n);
  //write code here
  for (let r = 0; r < n; r++) {
    const hashes = r + 1;
    const spaces = n - hashes;
    for (let sp = 0; sp < spaces; sp++) {
      process.stdout.write(" ");
    }

    for (let ha = 0; ha < hashes; ha++) {
      process.stdout.write("#");
    }

    console.log();
  }
  readline.close();
});

// Star Pyramid
// Link: https://course.acciojob.com/idle?question=e9e6daa1-9972-4e6c-a285-7a3e084a56b9
readline.question("", (n) => {
  n = parseInt(n);
  //write code here
  for (let r = 0; r < n; r++) {
    const starSpaces = r + 1;
    const spaces = n - starSpaces;
    for (let sp = 0; sp < spaces; sp++) {
      process.stdout.write(" ");
    }

    for (let starsp = 0; starsp < starSpaces; starsp++) {
      process.stdout.write("* ");
    }

    console.log();
  }
  readline.close();
});

// Print Number Pattern 2
// Link: https://course.acciojob.com/idle?question=8e5ac095-1d55-41cc-aaa7-75f2c24f953a
rl.on("line", (n) => {
  // your code here
  for (let r = 0; r < n; r++) {
    let start = r + 1;
    for (let c = 0; c < r + 1; c++) {
      process.stdout.write(String(start));
      start--;
    }
    console.log();
  }

  rl.close();
});

// Print Character Pattern
// Link: https://course.acciojob.com/idle?question=687fa3e9-43fd-4000-8e0d-71330c8742e1
// Method 1
readline.question("", (n) => {
  // Write your code here
  let ch = "A";
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < r + 1; c++) {
      process.stdout.write(ch);
    }
    console.log();
    // ch++;
    const ascii = ch.charCodeAt(0);
    ch = String.fromCharCode(ascii + 1);
  }
  readline.close();
});

// Method 2
readline.question("", (n) => {
  // Write your code here
  let ascii = 65;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < r + 1; c++) {
      process.stdout.write(String.fromCharCode(ascii));
    }
    console.log();
    ascii++;
  }
  readline.close();
});

// Method 3
readline.question("", (n) => {
  // Write your code here
  for (let r = 0; r < n; r++) {
    const ascii = 65 + r;
    for (let c = 0; c < r + 1; c++) {
      process.stdout.write(String.fromCharCode(ascii));
    }
    console.log();
  }
  readline.close();
});

// Armstrong numbers in range
// Link: https://course.acciojob.com/idle?question=620db89b-bcf4-4913-be13-64da3b4ddbeb
readline.question("", (line) => {
  let [m, n] = line.split(" ").map(Number);

  // Write the code here
  for (let num = m; num <= n; num++) {
    // 1. Find no.of digits
    let temp = num;
    let cnt = 0;
    while (temp != 0) {
      temp = parseInt(temp / 10);
      cnt++;
    }

    // 2. sum of (digit ^ numDigits)
    temp = num;
    let sum = 0;
    while (temp != 0) {
      const lastDigit = temp % 10;
      temp = parseInt(temp / 10);
      sum += lastDigit ** cnt;
    }

    // 3. If armstrong print that number
    if (sum == num) {
      console.log(num);
    }
  }

  readline.close();
});

// Function Problem 1
// Link: https://course.acciojob.com/idle?question=13a54748-3053-4959-a051-b14a4634770c
function fun() {
  // write code here
  console.log("I am another function");
}

fun();

// Fuction Problem 2
// Link: https://course.acciojob.com/idle?question=b27b4039-2b8b-4834-9a6b-f8622057be7a
function fun(n, m) {
  // write code here
  console.log(n + m);
}

// Function Problem 3
// Link: https://course.acciojob.com/idle?question=922be2a0-a552-456c-9f9e-5c41b514d200
function fun(n) {
  // write code here
  for (let i = 0; i < 5; i++) {
    n++;
  }

  return n;
}

// Super Hero
// Link: https://course.acciojob.com/idle?question=4b50de0b-5e1c-4477-8a34-82fa7d292044
function ModifyName(name) {
  // write code here
  return `${name} is a Super Hero`;
}

// Calculate nCr
// Link: https://course.acciojob.com/idle?question=869a6e7b-e104-45df-b2b0-28a803fecc43
// DRY not followed
function calculate_nCr(n, r) {
  // write code here
  let nFact = 1;
  for (let i = 1; i <= n; i++) {
    nFact = nFact * i;
  }

  let rFact = 1;
  for (let i = 1; i <= r; i++) {
    rFact = rFact * i;
  }

  let nMinusRFact = 1;
  for (let i = 1; i <= n - r; i++) {
    nMinusRFact = nMinusRFact * i;
  }

  const nCr = nFact / (rFact * nMinusRFact);
  return nCr;
}

// Good code
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

function calculate_nCr(n, r) {
  // write code here
  const nFact = factorial(n);
  const rFact = factorial(r);
  const nMinusRFact = factorial(n - r);
  const nCr = nFact / (rFact * nMinusRFact);
  return nCr;
}

// Armstrong numbers in range
// Link: https://course.acciojob.com/idle?question=620db89b-bcf4-4913-be13-64da3b4ddbeb
// Good way of writing
function cntDigits(num) {
  let temp = num;
  let cnt = 0;
  while (temp != 0) {
    temp = parseInt(temp / 10);
    cnt++;
  }
  return cnt;
}

function checkArmstrong(num) {
  const cnt = cntDigits(num);
  let temp = num;
  let sum = 0;
  while (temp != 0) {
    const lastDigit = temp % 10;
    temp = parseInt(temp / 10);
    sum += lastDigit ** cnt;
  }

  if (sum == num) {
    return true;
  }

  return false;
}

readline.question("", (line) => {
  let [m, n] = line.split(" ").map(Number);

  // Write the code here
  for (let num = m; num <= n; num++) {
    const check = checkArmstrong(num);
    if (check == true) {
      console.log(num);
    }
  }

  readline.close();
});

// Place Value Checker
// Link: https://course.acciojob.com/idle?question=7412f7e1-3017-44fa-83a9-00b9c0781986
function determineSecondLastDigit(n) {
  // write code here
  n = parseInt(n / 10); // remove last digit
  const secondLast = n % 10; // extract digit;
  /*
  if(secondLast == 0) {
    return true;
  }
  else return false;
  */
  return secondLast == 0;
}

// Frequency of digit
// Link: https://course.acciojob.com/idle?question=e2214e07-d190-4c58-8287-52e6b136e293
function frequencyOfDigit(n, d) {
  // Write your code here
  let temp = n;
  let cnt = 0;
  while (temp != 0) {
    const lastDigit = temp % 10;
    temp = parseInt(temp / 10);
    if (lastDigit == d) {
      cnt++;
    }
  }

  return cnt;
}

// Diamond Pattern
// Link: https://course.acciojob.com/idle?question=ba892dad-d841-4f88-9d20-8f7c633f8b6b
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function upperPyramid(n) {
  // run unitl one lesser row to avoid duplicate lines
  for (let r = 0; r < n - 1; r++) {
    const spaces = n - r - 1;
    const stars = 2 * r + 1;
    for (let sp = 0; sp < spaces; sp++) {
      process.stdout.write("  ");
    }
    for (let st = 0; st < stars; st++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

function lowerPyramid(n) {
  for (let r = n - 1; r >= 0; r--) {
    const spaces = n - r - 1;
    const stars = 2 * r + 1;
    for (let sp = 0; sp < spaces; sp++) {
      process.stdout.write("  ");
    }
    for (let st = 0; st < stars; st++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

function diamond(n) {
  const half = parseInt(n / 2) + 1;
  upperPyramid(half); // remember upper pyramid runs one lesser row
  lowerPyramid(half);
}

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let t = Number(input[0]);
  let index = 1;

  while (t > 0) {
    let n = Number(input[index]);
    // Write your code here
    diamond(n);
    t--;
    index++;
  }
});
