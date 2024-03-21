// Welcome To JavaScript
// Link: https://course.acciojob.com/idle?question=c931523a-97aa-428c-a285-6fce277688a4
console.log("Hello, World.");
console.log("Hello, JavaScript.");

// Variable Practice Question 1
// Link: https://course.acciojob.com/idle?question=2180cf80-db05-4bb0-894d-d46967d5f251
console.log("My num is 10");
console.log("My num is", 10);
let a = 10;
console.log("My num is", a);

// Variable Practice Question 2
// Link: https://course.acciojob.com/idle?question=d7f01721-b073-4270-b4e3-d0629d5550d1
let a = 10.45;
a = 20.55;
console.log(a);

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

// Celsius to Fahrenheit 2
// Link: https://course.acciojob.com/idle?question=ea7be5f0-3781-49f5-a435-2183f1a0212a
readline.question("", (C) => {
  readline.close();
  // Your code here
  const F = C * 1.8 + 32;
  console.log(F.toFixed(6));
});

// Mathematical Operations
// Link: https://course.acciojob.com/idle?question=db7c833b-1a2d-451f-8357-c67567270e1d
readline.question("", (input) => {
  const [a, b] = input.split(" ").map(Number);
  //Write code here and print output
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(parseInt(a / b)); // only integral part required
  console.log(a % b);
  readline.close();
});

// Variable Practice Question 8
// Link: https://course.acciojob.com/idle?question=ee04dfd0-ee0b-4512-ac07-46ba464cce2b
const num = 8;
let i = 1;
console.log(`${num} x ${i} = ${num * i++}`);
console.log(`${num} x ${i} = ${num * i++}`);
console.log(`${num} x ${i} = ${num * i++}`);
console.log(`${num} x ${i} = ${num * i++}`);
console.log(`${num} x ${i} = ${num * i++}`);
console.log(`${num} x ${i} = ${num * i++}`);
console.log(`${num} x ${i} = ${num * i++}`);
console.log(`${num} x ${i} = ${num * i++}`);
console.log(`${num} x ${i} = ${num * i++}`);
console.log(`${num} x ${i} = ${num * i++}`);

// Variable Practice Question 5
// Link: https://course.acciojob.com/idle?question=d2ab1301-e24c-47e3-abed-3421163ba5a8
const v1 = 10.5;
const v2 = 12.5;
const v3 = 12.15;
const avg = (v1 + v2 + v3) / 3;
console.log(parseInt(avg));

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

// Variable Practice Question 4
// Link: https://course.acciojob.com/idle?question=68211524-103e-4140-af84-17773aa301d9
const a = 1042;
const b = 7;
const quo = parseInt(a / b);
const rem = a % b;
console.log(quo, rem);

// Leap Year
// Link: https://course.acciojob.com/idle?question=2c8693a8-885f-4c9b-9191-8faaf9ff9913
readline.question("", (year) => {
  //Write your code here and print the required output
  const A = year % 400 == 0;
  const C = year % 4 == 0;
  const D = year % 100 != 0;

  if (A || (C && D)) {
    console.log(1); // leap year
  } else {
    console.log(0); // not a leap year
  }

  readline.close();
});

// Which Case
// Link: https://course.acciojob.com/idle?question=1c9a8bab-4f79-4c84-a309-bd850576d228
readline.question("", (ch) => {
  // Your code here
  const ascii = ch.charCodeAt(0);
  if (65 <= ascii && ascii <= 90) {
    console.log(1);
  } else if (97 <= ascii && ascii <= 122) {
    console.log(0);
  } else {
    console.log(-1);
  }

  readline.close();
});

// Easy way
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
    // we know overtake happens but not sure about same position
    if ((h2 - h1) % (v1 - v2) == 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
});

// Quadrants
// Link: https://course.acciojob.com/idle?question=c878e8a7-f476-4303-a251-5e878a60a736
rl.on("line", (x) => {
  rl.on("line", (y) => {
    //write code here
    // blue -> +ve and red -> -ve
    // blue, blue -> chamber 1
    // red, blue -> chamber 2
    // red, red -> chamber 3
    // blue, red -> chamber 4
    if (x > 0 && y > 0) {
      console.log(1);
    } else if (x < 0 && y > 0) {
      console.log(2);
    } else if (x < 0 && y < 0) {
      console.log(3);
    } else {
      console.log(4);
    }

    rl.close();
  });
});

// Number of Days
// Link: https://course.acciojob.com/idle?question=00d33e88-7041-4dae-afe7-08671b57034a
readline.question("", (month) => {
  //Write your code here
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    console.log(31);
  } else if (month == 2) {
    console.log(28);
  } else {
    console.log(30);
  }
  readline.close();
});

// Sum of Natural Numbers
// Link: https://course.acciojob.com/idle?question=75a292e5-d69d-44a0-a74d-366c7c3c5e95
rl.on("line", (N) => {
  // write your code here
  N = Number(N);
  let sum = 0;
  for (let num = 1; num <= N; num++) {
    sum += num; // sum = sum + num;
  }

  console.log(sum);

  rl.close();
});

// efficient way
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
    sum += num;
  }

  console.log(sum);

  readline.close();
});

// Efficient
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

// Which angled triangle
// Link: https://course.acciojob.com/idle?question=165c71bd-af5e-45bb-acc5-48180c164f97
rl.on("line", (sides) => {
  let [a, b, c] = sides.split(" ");
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

  // Write your code here
  const largest = Math.max(a, b, c);
  const X = 2 * largest ** 2;
  const Y = a ** 2 + b ** 2 + c ** 2;

  if (X < Y) {
    console.log(1);
  } else if (X == Y) {
    console.log(2);
  } else {
    console.log(3);
  }

  rl.close();
});

// Check Prime
// Link: https://course.acciojob.com/idle?question=03d33e77-b47d-43ee-a075-e46ff509b0a6
readline.question("", (N) => {
  N = Number(N);

  let isFound = false;
  for (let num = 2; num <= N - 1; num++) {
    if (N % num == 0) {
      isFound = true;
      break;
    }
  }

  // Take the decision after the entire process using flag variable
  if (isFound == true) {
    console.log(`${N} is not a prime number`);
  } else {
    console.log(`${N} is a prime number`);
  }

  readline.close();
});

// Sum of digits
// Link: https://course.acciojob.com/idle?question=16ae2277-0d38-4eba-9a84-d4326ea2da2e
function SumofDigits(num) {
  let sum = 0;
  while (num != 0) {
    // 1. extract last digit
    const lastDigit = num % 10;
    // 2. remove last digit
    num = parseInt(num / 10);

    // 3. calculate sum
    sum += lastDigit;
  }

  return sum; // console.log(sum);
}

// Reverse digits of a Number
// Link: https://course.acciojob.com/idle?question=817d51d8-e009-4322-8e51-257b76455a4c
readline.question("", (num) => {
  //Write your code here
  let rev = 0;
  num = Number(num);
  while (num != 0) {
    // 1. extract last digit
    const lastDigit = num % 10;
    // 2. remove last digit
    num = parseInt(num / 10);

    // 3. calculate rev
    rev = rev * 10 + lastDigit;
  }

  console.log(rev);

  readline.close();
});

// N Stars
// Link: https://course.acciojob.com/idle?question=24eb1955-7e70-45d9-8ce8-f9d9a8268aca
readline.question("", (n) => {
  // Write your code here
  n = Number(n);
  for (let i = 0; i < n; i++) {
    process.stdout.write("* ");
  }
  console.log();
  for (let i = 0; i < n; i++) {
    console.log("*");
  }

  readline.close();
});

// Right Angle Triangle Stars
// Link: https://course.acciojob.com/idle?question=a148f7c8-e47f-45a9-bd72-8808f823ead1
readline.question("", (n) => {
  //Write your code here
  n = Number(n);
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
    let num = r + 1;
    for (let c = 0; c < r + 1; c++) {
      process.stdout.write(String(num));
      num--;
    }
    console.log();
  }

  rl.close();
});

// Print Character Pattern
// Link: https://course.acciojob.com/idle?question=687fa3e9-43fd-4000-8e0d-71330c8742e1
readline.question("", (n) => {
  // Write your code here
  for (let r = 0; r < n; r++) {
    const alph = String.fromCharCode(65 + r);
    for (let c = 0; c < r + 1; c++) {
      process.stdout.write(alph);
    }
    console.log();
  }
  readline.close();
});

// Armstrong Numbers in Range
// Link: https://course.acciojob.com/idle?question=620db89b-bcf4-4913-be13-64da3b4ddbeb
readline.question("", (line) => {
  let [m, n] = line.split(" ").map(Number);

  // Write the code here
  for (let num = m; num <= n; num++) {
    // 1. Find no.of digits
    let cnt = 0;
    let temp = num;
    while (temp != 0) {
      temp = parseInt(temp / 10);
      cnt++;
    }

    // 2. Find sum of (digit) ^ numDigits
    let sum = 0;
    temp = num;
    while (temp != 0) {
      const lastDigit = temp % 10;
      temp = parseInt(temp / 10);
      sum += lastDigit ** cnt;
    }

    // 3. check armstrong
    if (sum == num) {
      console.log(num);
    }
  }

  readline.close();
});

// HCF of two Numbers
// Link: https://course.acciojob.com/idle?question=81da7d29-0653-423e-a44a-f96fc14eb8fc
rl.on("line", (input) => {
  const [a, b] = input.split(" ").map(Number);
  // your code here
  for (let num = Math.min(a, b); num > 0; num--) {
    if (a % num == 0 && b % num == 0) {
      console.log(num);
      break;
    }
  }
});

// Function Problem 1
// Link: https://course.acciojob.com/idle?question=922be2a0-a552-456c-9f9e-5c41b514d200
function fun() {
  // write code here
  console.log("I am another function");
}

fun();

// Function Problem 2
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

// Calculate nCr
// Link: https://course.acciojob.com/idle?question=869a6e7b-e104-45df-b2b0-28a803fecc43
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
  let rFact = factorial(r);
  let nrFact = factorial(n - r);

  const nCr = nFact / (rFact * nrFact);
  return nCr;
}

// Frequency of digit
// Link: https://course.acciojob.com/idle?question=e2214e07-d190-4c58-8287-52e6b136e293
function frequencyOfDigit(n, d) {
  // Write your code here
  let cnt = 0;
  while (n != 0) {
    const lastDigit = n % 10;
    n = parseInt(n / 10);
    if (lastDigit == d) {
      cnt++;
    }
  }

  return cnt;
}

// Place Value Checker
// Link: https://course.acciojob.com/idle?question=7412f7e1-3017-44fa-83a9-00b9c0781986
function determineSecondLastDigit(n) {
  // write code here
  n = parseInt(n / 10);
  const secondLast = n % 10;
  return secondLast == 0;
}

// Binary To Decimal
// Link: https://course.acciojob.com/idle?question=f89c75c7-084a-4472-b293-43736a2f34ab
function binToDec(s) {
  //Write code here
  return parseInt(s, 2);
}

// Diamond Pattern
// Link: https://course.acciojob.com/idle?question=ba892dad-d841-4f88-9d20-8f7c633f8b6b
function pyramid(rows) {
  for (let r = 0; r < rows - 1; r++) {
    const spaces = rows - r - 1;
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

function invPyramid(rows) {
  for (let r = rows - 1; r >= 0; r--) {
    const spaces = rows - r - 1;
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

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let t = Number(input[0]);
  let index = 1;

  while (t > 0) {
    let n = Number(input[index]);
    // Write your code here
    pyramid(parseInt(n / 2) + 1);
    invPyramid(parseInt(n / 2) + 1);

    t--;
    index++;
  }
});

// Palindrome Checker
// Link: https://course.acciojob.com/idle?question=340d0f67-3062-487f-ac95-adcb744c410c
function reverse(num) {
  let rev = 0;
  while (num != 0) {
    const lastDigit = num % 10;
    num = parseInt(num / 10);
    rev = rev * 10 + lastDigit;
  }

  return rev;
}

readline.question("", (n) => {
  //Write your code here and print the required output
  if (reverse(n) == n) {
    console.log(true);
  } else {
    console.log(false);
  }

  readline.close();
});

// Print Continuous Character Pattern
// Link: https://course.acciojob.com/idle?question=d3216ae1-5d6c-42da-b63d-2d6166dc78ef
readline.question("", (n) => {
  readline.close();
  // write code here
  for (let r = 0; r < n; r++) {
    let ascii = 65 + r;
    for (let c = 0; c < r + 1; c++) {
      process.stdout.write(String.fromCharCode(ascii));
      ascii++;
      if (ascii == 91) {
        ascii = 65; // reset back to A
      }
    }
    console.log();
  }
});
