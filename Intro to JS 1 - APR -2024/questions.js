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

// Print Continuous Character Pattern
// Link: https://course.acciojob.com/idle?question=d3216ae1-5d6c-42da-b63d-2d6166dc78ef
readline.question("", (n) => {
  readline.close();
  // write code here
  for (let r = 0; r < n; r++) {
    let ascii = 65 + (r % 26);
    for (let c = 0; c < r + 1; c++) {
      // reset the ascii back to 65
      if (ascii == 91) {
        ascii = 65;
      }

      process.stdout.write(String.fromCharCode(ascii));
      ascii++;
    }
    console.log();
  }
});

// Optimus Prime
// Link: https://course.acciojob.com/idle?question=c77a4030-9552-4f23-b348-f2fdc22c330a
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

rl.on("line", (n) => {
  // Your code here
  for (let num = 1; num <= n; num++) {
    if (isPrime(num)) {
      console.log(num);
    }
  }
});

// Crazy Numbers
// Link: https://course.acciojob.com/idle?question=affc66cb-d061-4933-b572-22f8b0b9e3c6
readline.question("", (n) => {
  numberPattern(parseInt(n));
  readline.close();
});

function numberPattern(n) {
  // your code here
  let num = 1;
  for (let r = 0; r < n; r++) {
    const spaces = n - r - 1;
    const numbers = r + 1;
    for (let sp = 0; sp < spaces; sp++) {
      process.stdout.write(" ");
    }
    for (let nu = 0; nu < numbers; nu++) {
      process.stdout.write(String(num));
      num++;
      if (num == 10) {
        num = 1; // reset back to 1
      }
    }
    console.log();
  }
}

// Binary To Decimal
// Link: https://course.acciojob.com/idle?question=f89c75c7-084a-4472-b293-43736a2f34ab
function binToDec(s) {
  //Write code here
  return parseInt(s, 2);
}

// Array Problem 1 (Max ele and index)
// Link: https://course.acciojob.com/idle?question=203c6532-1438-4d70-8854-94f35fe1b0ba
function ArrayProblem1(n, arr) {
  // Write code here
  let maxEle = -Infinity;
  let idx = -1;

  for (let i = 0; i < n; i++) {
    if (arr[i] > maxEle) {
      maxEle = arr[i];
      idx = i;
    }
  }

  return idx;
}

// Maximum difference between two elements in an Array
// Link: https://course.acciojob.com/idle?question=b5a0f4ca-7b5e-4fee-9487-3ca52a582741
function ArrayProblem(arr) {
  // Write your code here
  let maxEle = -Infinity;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const diff = Math.abs(arr[i] - arr[j]);
      if (diff > maxEle) {
        maxEle = diff;
      }
    }
  }
  console.log(maxEle);
}

// Efficient/Optimal
function ArrayProblem(arr) {
  // Write your code here
  let maxEle = -Infinity; // as low as possible
  let minEle = Infinity; // as high as possible
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    maxEle = Math.max(arr[i], maxEle);
    minEle = Math.min(arr[i], minEle);
  }

  console.log(maxEle - minEle);
}

// Array Problem 6
// Link: https://course.acciojob.com/idle?question=02fe1fa2-2fba-4a5f-aca0-baac93f166a3
function ArrayProblem6(n, arr) {
  // Write code here
  let minDis = Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 != 0) {
      continue;
    }
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > 0 && arr[i] % 2 == 0 && arr[j] > 0 && arr[j] % 2 == 0) {
        minDis = Math.min(minDis, j - i);
      }
    }
  }

  // if none of the pairs are positive even
  if (minDis == Infinity) {
    return -1;
  }
  return minDis;
}

// efficient / optimal
function ArrayProblem6(n, arr) {
  // Write code here
  let prevEvenNumIdx = -1;
  let minDis = Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0 && arr[i] % 2 == 0) {
      // check if prev even number exists and then update dis
      if (prevEvenNumIdx != -1) {
        minDis = Math.min(minDis, i - prevEvenNumIdx);
      }
      prevEvenNumIdx = i;
    }
  }

  // if none of the pairs are positive even
  if (minDis == Infinity) {
    return -1;
  }
  return minDis;
}

// Sorted Insert Position
// Link: https://course.acciojob.com/idle?question=be428ee1-8e73-4bcc-975f-af6f6c629d27
function searchInsert(arr, tar) {
  // Write code here
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] >= tar) {
      return i;
    }
  }

  // you will reach here only when all ele < tar
  // [1, 2, 3, 4, 5] and insert(6)
  return n;
}

// Array Problem 5
// Link: https://course.acciojob.com/idle?question=f98feeb1-40eb-4b6f-a600-067714166864
function ArrayProblem(arr, k) {
  // Write code here
  const n = arr.length;
  let cnt = 0;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] + arr[i + 1] == k) {
      cnt++;
    }
  }
  return cnt;
}

// Last occurrence in unsorted array
// Link: https://course.acciojob.com/idle?question=079f6ebf-4868-4e4a-b75e-651967ef5ab9
function findIndex(key, arr) {
  //Your code goes here
  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] == key) {
      console.log(i);
      return;
    }
  }
}

// 2nd Largest from array
// Link: https://course.acciojob.com/idle?question=d5b5b101-0636-4654-bd4d-bfecce8e5d00
function SecondLargest(arr, n) {
  // Write code here
  let firstMax = -Infinity;
  for (let i = 0; i < n; i++) {
    firstMax = Math.max(firstMax, arr[i]);
  }

  let secondMax = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] != firstMax) {
      secondMax = Math.max(secondMax, arr[i]);
    }
  }

  console.log(secondMax);
}

// writing in a modular way
function findMax(arr, n, firstMax, secondMax) {
  let maxEle = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] != firstMax && arr[i] != secondMax) {
      maxEle = Math.max(maxEle, arr[i]);
    }
  }
  return maxEle;
}

function SecondLargest(arr, n) {
  // Write code here
  const firstMax = findMax(arr, n, -Infinity, -Infinity);
  const secondMax = findMax(arr, n, firstMax, -Infinity);
  const thirdMax = findMax(arr, n, firstMax, secondMax);

  console.log(secondMax);
}

// Reverse an array
// Link: https://course.acciojob.com/idle?question=944dba4b-f895-44af-8ec1-7445343e5713
function reverseArray(arr, start, end) {
  //Write code here
  while (start <= end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}

// Buildings
// Link: https://course.acciojob.com/idle?question=a7bdae50-cbdd-4048-a3c3-be52504b9580
function countVisibleRoofs(heights) {
  // Write your code here
  const n = heights.length;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    let isHidden = false;
    // compare with every building on left
    for (let j = 0; j < i; j++) {
      if (heights[j] > heights[i]) {
        // you found a taller building on left hence you are hidden
        isHidden = true;
      }
    }

    if (isHidden == false) {
      cnt++;
    }
  }

  return cnt;
}

// optimal / efficient
function countVisibleRoofs(heights) {
  // Write your code here
  const n = heights.length;
  let cnt = 0;
  let tallestOnLeft = -Infinity;
  for (let i = 0; i < n; i++) {
    if (heights[i] >= tallestOnLeft) {
      cnt++;
    }
    tallestOnLeft = Math.max(tallestOnLeft, heights[i]);
  }

  return cnt;
}

// Array Adding
// Link: https://course.acciojob.com/idle?question=a426a64f-8962-4a98-9433-3200d900ad67
function calSum(a, b, n, m) {
  // Write your code here
  let i = n - 1;
  let j = m - 1;
  const res = [];
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let sum = 0;
    if (i >= 0) sum += a[i];
    if (j >= 0) sum += b[j];
    sum += carry;

    res.push(sum % 10);
    carry = parseInt(sum / 10);
    i--;
    j--;
  }

  if (carry == 1) {
    res.push(1);
  }

  res.reverse();
  return res;
}

// Rotate array
// Link: https://course.acciojob.com/idle?question=444d4b46-efef-467a-8833-e3fede7d22f0
function reverseArray(arr, start, end) {
  //Write code here
  while (start <= end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}

function rotateArray(arr, n, k) {
  // Write code here
  k = k % n;
  reverseArray(arr, 0, n - 1);
  reverseArray(arr, 0, n - k - 1);
  reverseArray(arr, n - k, n - 1);

  for (let i = 0; i < n; i++) {
    process.stdout.write(arr[i] + " ");
  }
}

// Angry Professor
// Link: https://course.acciojob.com/idle?question=4045b80f-75cb-498f-90d4-1280790e7b6e
function AngryProfessor(arr, n, k) {
  // count how many students are on time
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= 0) {
      cnt++;
    }
  }

  // fewer than k students on time => cancelled => yes
  if (cnt < k) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// FACING THE SUN (here equal heights cant be seen)
// Link: https://course.acciojob.com/idle?question=163324ba-e963-404d-bcf0-5ab5117ac516
function facingSun(n, arr) {
  let cnt = 0;
  let tallestOnLeft = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > tallestOnLeft) {
      cnt++;
    }
    tallestOnLeft = Math.max(tallestOnLeft, arr[i]);
  }

  return cnt;
}

// Sum of Array Except Self
// Link: https://course.acciojob.com/idle?question=3cf411ff-c59c-4202-ae5c-6b0292d31764
function sumArrayExceptSelf(nums, n) {
  // Write your code here
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += nums[i];
  }

  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(total - nums[i]);
  }

  return res;
}

// Subarray Sum Zero
// Link: https://course.acciojob.com/idle?question=7f096e64-5c0d-4333-b324-02e6ac91a3d7
function zeroSubarray(arr) {
  //Write your code here
  const n = arr.length;
  let isFound = false; // assume we did not find a 0 sum subarr

  for (let start = 0; start < n; start++) {
    let sum = 0;
    for (let end = start; end < n; end++) {
      sum += arr[end];
      if (sum == 0) {
        isFound = true;
        console.log(`Subarray found from Index ${start} to ${end}`);
      }
    }
  }

  if (isFound == false) {
    console.log(-1);
  }
}

// Find Split Point
// Link: https://course.acciojob.com/idle?question=c0af5738-5a1c-4a05-a68c-789f38a620d1
function sum(arr, start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += arr[i];
  }
  return sum;
}

function findSplitPoint(N, arr) {
  // Write your code here
  for (let split = 0; split < N - 1; split++) {
    const lsum = sum(arr, 0, split);
    const rsum = sum(arr, split + 1, N - 1);
    if (lsum == rsum) {
      return split;
    }
  }

  return -1;
}

// optimal way
function findSplitPoint(N, arr) {
  // Write your code here
  let total = 0;
  for (let i = 0; i < N; i++) {
    total += arr[i];
  }

  let lsum = 0;
  for (let split = 0; split < N - 1; split++) {
    lsum += arr[split];
    const rsum = total - lsum;
    if (lsum == rsum) {
      return split;
    }
  }

  return -1;
}

function splitArray(N, arr) {
  const split = findSplitPoint(N, arr);
  if (split == -1) {
    console.log("Not Possible");
  } else {
    for (let i = 0; i <= split; i++) {
      process.stdout.write(arr[i] + " ");
    }
    console.log();
    for (let i = split + 1; i < N; i++) {
      process.stdout.write(arr[i] + " ");
    }
  }
}

// Find Geometric Triplets
// Link: https://course.acciojob.com/idle?question=cefcef33-7a3f-46ea-99f4-694dd5297224
function findGeometricTriplets(arr, n) {
  // Write code here
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        // b^2 = ac
        if (arr[j] ** 2 == arr[i] * arr[k]) {
          console.log(arr[i], arr[j], arr[k]);
        }
      }
    }
  }
}

// Subarray Division (Hackerrank)
// Link: https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
function birthday(s, d, m) {
  // Write your code here
  const n = s.length;
  let cnt = 0;

  for (let start = 0; start < n; start++) {
    let sum = 0;
    for (let end = start; end < n; end++) {
      sum += s[end];
      if (sum == d && end - start + 1 == m) {
        cnt++;
      }
    }
  }

  return cnt;
}

// Print Matrix Column Wise
// Link: https://course.acciojob.com/idle?question=31900452-fb2e-45cd-93b0-fb4d6afbfac0
function printMatrixColumnwise(mat, n, m) {
  // Write code here and print output
  for (let c = 0; c < m; c++) {
    for (let r = 0; r < n; r++) {
      process.stdout.write(mat[r][c] + " ");
    }
  }
}

// Alternate Manner Matrix Traversal
// Link: https://course.acciojob.com/idle?question=191ba184-3c72-468a-83fe-5100d558f7eb
function printElementsAlternately(mat, m, n) {
  //Write code here and print output
  for (let r = 0; r < m; r++) {
    if (r % 2 == 0) {
      for (let c = 0; c < n; c++) {
        process.stdout.write(mat[r][c] + " ");
      }
    } else {
      for (let c = n - 1; c >= 0; c--) {
        process.stdout.write(mat[r][c] + " ");
      }
    }
  }
}

// Transpose of Matrix
// https://course.acciojob.com/idle?question=57e7562d-b233-42ca-89f6-c10ad5cdf579
// using additional space
function matrixTranspose(mat, n) {
  //Write your code here
  const trans = [];
  for (let c = 0; c < n; c++) {
    const smallArr = [];
    for (let r = 0; r < n; r++) {
      smallArr.push(mat[r][c]);
    }
    trans.push(smallArr);
  }

  return trans;
}

function matrixTranspose(mat, n) {
  //Write your code here
  for (let r = 0; r < n; r++) {
    for (let c = 0; c <= r; c++) {
      let temp = mat[r][c];
      mat[r][c] = mat[c][r];
      mat[c][r] = temp;
    }
  }

  return mat;
}

// Matrix Multiplication
// Link: https://course.acciojob.com/idle?question=da3dfaa3-541f-4b9b-a202-30b4fb01a835
function printMultiplication(a, b, n) {
  const rowsA = n;
  const rowsB = n;
  const colsA = n;
  const colsB = n;

  if (colsA != rowsB) {
    return;
  }

  // 1) create an empty rowsA x colsB matrix
  const res = [];
  for (let r = 0; r < rowsA; r++) {
    const smallArr = [];
    for (let c = 0; c < colsB; c++) {
      smallArr.push(0);
    }
    res.push(smallArr);
  }

  // res[r][c] = a[r][?] * b[?][c]
  // 2) fill the res matrix with multiplied values
  for (let r = 0; r < rowsA; r++) {
    for (let c = 0; c < colsB; c++) {
      // k < rowsB also works because colsA = rowsB
      for (let k = 0; k < colsA; k++) {
        res[r][c] += a[r][k] * b[k][c];
      }
    }
  }

  // 3) print the matrix
  for (let r = 0; r < rowsA; r++) {
    for (let c = 0; c < colsB; c++) {
      process.stdout.write(res[r][c] + " ");
    }
    console.log();
  }
}

// Spirally traversing a matrix
// Link: https://course.acciojob.com/idle?question=5f714d43-3f91-4c47-b41b-203207e63522
function spirallyTraverse(mat) {
  // Write your code here
  const rows = mat.length;
  const cols = mat[0].length;

  let minR = 0;
  let maxR = rows - 1;
  let minC = 0;
  let maxC = cols - 1;
  let totalEle = rows * cols;

  while (totalEle > 0) {
    // 1) Top wall (minR, minC to maxC)
    for (let c = minC; c <= maxC && totalEle > 0; c++) {
      process.stdout.write(mat[minR][c] + " ");
      totalEle--;
    }
    minR++;

    // 2) Right wall (minR to maxR, maxC)
    for (let r = minR; r <= maxR && totalEle > 0; r++) {
      process.stdout.write(mat[r][maxC] + " ");
      totalEle--;
    }
    maxC--;

    // 3) bottom wall (maxR, maxC to minC)
    for (let c = maxC; c >= minC && totalEle > 0; c--) {
      process.stdout.write(mat[maxR][c] + " ");
      totalEle--;
    }
    maxR--;

    // 4) left wall (maxR to minR, minC)
    for (let r = maxR; r >= minR && totalEle > 0; r--) {
      process.stdout.write(mat[r][minC] + " ");
      totalEle--;
    }
    minC++;
  }
}

// Toeplitz Matrix
// Link: https://course.acciojob.com/idle?question=fa4a91e3-218d-473b-8d33-65fb2af3e145
function isToeplitzMatrix(matrix, m, n) {
  // write code here
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (r + 1 < m && c + 1 < n && matrix[r][c] != matrix[r + 1][c + 1]) {
        return false;
      }
    }
  }

  return true;
}

// Diagonal Difference
// Link: https://course.acciojob.com/idle?question=8a6cbf35-d128-459b-a7ba-9e269d2af40a
function diagonalDifference(mat, n) {
  let i = 0;
  let j = 0;
  let diag = 0;
  while (i < n && j < n) {
    diag += mat[i][j];
    i++;
    j++;
  }

  i = 0;
  j = n - 1;
  let adiag = 0;
  while (i < n && j >= 0) {
    adiag += mat[i][j];
    i++;
    j--;
  }

  console.log(Math.abs(diag - adiag));
}

// other way
function diagonalDifference(mat, n) {
  let diag = 0;
  let adiag = 0;
  for (let r = 0; r < n; r++) {
    diag += mat[r][r];
    adiag += mat[r][n - r - 1];
  }

  console.log(Math.abs(diag - adiag));
}

// Alt Matrix Sum
// Link: https://course.acciojob.com/idle?question=04a591ba-305a-4bd7-a4b2-9a06ac187837
function alternateMatrixSum(mat, n) {
  // Write your code here
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

// Sum of upper and lower triangles
// Link: https://course.acciojob.com/idle?question=d39c3375-6cfe-47a6-9c75-9f0acf8ae916
function triangleSums(n, matrix) {
  // your code here
  let upper = 0;
  let lower = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (r >= c) lower += matrix[r][c];
      if (r <= c) upper += matrix[r][c];
    }
  }
  console.log(upper, lower);
}

// Find The Way
// Link: https://course.acciojob.com/idle?question=60d37a31-7584-48eb-baad-ee073ffc7acf
function findTheWay(matrix) {
  //Write code here
  const rows = matrix.length;
  const cols = matrix[0].length;

  let i = 0;
  let j = 0;
  let facing = 0;

  while (true) {
    // 1. if the matrix cell is 1
    if (matrix[i][j] == 1) {
      facing = (facing + 1) % 4;
      matrix[i][j] = 0;
    }

    // 2. move forward in any case either 1 or 0
    if (facing == 0) j++;
    else if (facing == 1) i++;
    else if (facing == 2) j--;
    else if (facing == 3) i--;

    // 3. check for exit cell
    if (i == -1) return [0, j];
    else if (j == -1) return [i, 0];
    else if (i == rows) return [i - 1, j];
    else if (j == cols) return [i, j - 1];
  }
}

// Maxima Minima
// Link: https://course.acciojob.com/idle?question=834a5e9e-9b0c-45db-b0e1-375bafb999ea
function findMinRow(mat, r) {
  const cols = mat[0].length;
  let minEle = Infinity;
  for (let c = 0; c < cols; c++) {
    minEle = Math.min(minEle, mat[r][c]);
  }
  return minEle;
}

function findMaxCol(mat, c) {
  const rows = mat.length;
  let maxEle = -Infinity;
  for (let r = 0; r < rows; r++) {
    maxEle = Math.max(maxEle, mat[r][c]);
  }
  return maxEle;
}

function maximaMinima(mat) {
  //Write code here
  const rows = mat.length;
  const cols = mat[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const minR = findMinRow(mat, r);
      const maxC = findMaxCol(mat, c);
      if (mat[r][c] == minR && mat[r][c] == maxC) {
        return mat[r][c];
      }
    }
  }

  return -1;
}

// optimized
function maximaMinima(mat) {
  //Write code here
  const rows = mat.length;
  const cols = mat[0].length;

  // 1) precomputation
  const minRow = [];
  for (let r = 0; r < rows; r++) {
    const val = findMinRow(mat, r);
    minRow.push(val);
  }

  const maxCol = [];
  for (let c = 0; c < cols; c++) {
    const val = findMaxCol(mat, c);
    maxCol.push(val);
  }

  // 2) your logic now uses stored computations
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const minR = minRow[r];
      const maxC = maxCol[c];
      if (mat[r][c] == minR && mat[r][c] == maxC) {
        return mat[r][c];
      }
    }
  }

  return -1;
}

// matrix.push(line.trim().split(' ').map(Number));

// Array Subtracting
// Link: https://course.acciojob.com/idle?question=4ed416d3-76b0-41a6-a956-3201e2fb6079
function isSwapReq(arr1, n1, arr2, n2) {
  if (n1 < n2) return true;
  else if (n1 > n2) return false;

  // when n1 == n2
  for (let i = 0; i < n1; i++) {
    if (arr1[i] != arr2[i]) {
      if (arr1[i] < arr2[i]) return true;
      else return false;
    }
  }

  // you will reach here if arr1 == arr2
  // in this case no swap required hence false
  return false;
}

function findSubtraction(arr1, n1, arr2, n2) {
  //Write your code here
  // 1) swap arrays if arr1 < arr2
  const swap = isSwapReq(arr1, n1, arr2, n2);
  if (swap == true) {
    let temp = arr1;
    arr1 = arr2;
    arr2 = temp;
    temp = n1;
    n1 = n2;
    n2 = temp;
  }

  // 2) perform subtraction as usual
  let i = n1 - 1;
  let j = n2 - 1;
  let carry = 0;
  const res = [];
  while (i >= 0 || j >= 0) {
    let diff = arr1[i] + carry;
    if (j >= 0) diff -= arr2[j];

    // if borrow required there will be carry of -1
    if (diff < 0) {
      diff += 10;
      carry = -1;
    } else carry = 0;

    res.push(diff);
    i--;
    j--;
  }

  res.reverse();

  // 3) if there was a swap then multiply -1
  if (swap == true) res[0] *= -1;

  return res;
}

// Subarray sum divisible by k
// Link: https://course.acciojob.com/idle?question=fd54a321-f9b7-4772-9d78-69ffe5a0ccb8
function subarrayDivisbleByK(arr, n, k) {
  let cnt = 0;
  for (let start = 0; start < n; start++) {
    let sum = 0;
    for (let end = start; end < n; end++) {
      sum += arr[end];
      if (sum % k == 0) cnt++;
    }
  }

  return cnt;
}
