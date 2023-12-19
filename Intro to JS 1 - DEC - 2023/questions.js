// Variable Practice Question 1
// Link: https://course.acciojob.com/idle?question=2180cf80-db05-4bb0-894d-d46967d5f251
const a = 10;
console.log("My num is " + a);

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
const num = 8;
console.log(num + " x " + "1 = " + num * 1);
console.log(num + " x " + "2 = " + num * 2);
console.log(num + " x " + "3 = " + num * 3);
console.log(num + " x " + "4 = " + num * 4);
console.log(num + " x " + "5 = " + num * 5);
console.log(num + " x " + "6 = " + num * 6);
console.log(num + " x " + "7 = " + num * 7);
console.log(num + " x " + "8 = " + num * 8);
console.log(num + " x " + "9 = " + num * 9);
console.log(num + " x " + "10 = " + num * 10);

// Circle Area-Perimeter
// Link: https://course.acciojob.com/idle?question=f6f6fc43-493d-4c2e-8cfd-e07f3acad1e8
rl.on("line", (radius) => {
  const PI = 3;
  console.log(PI * radius * radius);
  console.log(2 * PI * radius);
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
  // always convert to avoid any unknown errors
  // console.log(input, typeof input);
  input = Number(input);
  if (input < 30) {
    console.log("less important");
  } else {
    console.log("more important");
  }
  rl.close();
});

// Conditional Problem 5
// Link: https://course.acciojob.com/idle?question=38436ae2-5f85-4b5c-82ad-f5bd437c5e73
rl.on("line", (n) => {
  // Your code here
  n = Number(n);
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
  const RHS = a ** 3 + b ** 3 + 3 * a * a * b + 3 * a * b * b;
  // const RHS = a ** 3 + b ** 3 + 3 * a ** 2 * b + 3 * a * b ** 2;

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
readline.question("", (year) => {
  //Write your code here and print the required output
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

// another version
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

  if (h1 == h2) {
    console.log(true);
  } else if (h1 < h2 && v1 <= v2) {
    console.log(false);
  } else if (h2 < h1 && v2 <= v1) {
    console.log(false);
  } else {
    if ((h1 - h2) % (v2 - v1) == 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
});

// Sum of Natural Numbers
// Link: https://course.acciojob.com/idle?question=75a292e5-d69d-44a0-a74d-366c7c3c5e95
rl.on("line", (N) => {
  // write your code here
  let sum = 0;
  N = Number(N);
  for (let num = 1; num <= N; num++) {
    sum = sum + num; // sum += num;
  }
  console.log(sum);
  rl.close();
});

// Another approach (efficient)
rl.on("line", (N) => {
  // write your code here
  N = Number(N);
  const sum = (N * (N + 1)) / 2;
  console.log(sum);

  rl.close();
});

// Factorial with loop
// Link: https://course.acciojob.com/idle?question=a93bddb1-78e4-4ad6-a018-275668ecc3e4
readline.question("", (n) => {
  readline.close();
  // Write your code here
  n = Number(n);
  let fact = 1;
  for (let num = 1; num <= n; num++) {
    fact = fact * num; // fact *= num;
  }
  console.log(fact);
});

// Even Sum
// Link: https://course.acciojob.com/idle?question=c6e3351d-7e24-4eea-b683-ba262959fa84
readline.question("", (n) => {
  n = parseInt(n);
  // Write your code here
  let sum = 0;

  /*
  // Approach 1
  for (let num = 1; num <= n; num++) {
    if (num % 2 == 0) {
      sum = sum + num;
    }
  }
  */

  // Approach 2
  for (let num = 2; num <= n; num += 2) {
    sum = sum + num;
  }

  console.log(sum);
  readline.close();
});

// using formula
readline.question("", (n) => {
  n = parseInt(n);
  // Write your code here
  if (n % 2 != 0) {
    n = n - 1;
  }

  const sum = (n * (n + 2)) / 4;
  console.log(sum);
  readline.close();
});

// Quadrants JS (Doubt)
// Link: https://course.acciojob.com/idle?question=c878e8a7-f476-4303-a251-5e878a60a736
rl.on("line", (x) => {
  rl.on("line", (y) => {
    x = Number(x);
    y = Number(y);

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

// Check Prime
// Link: https://course.acciojob.com/idle?question=03d33e77-b47d-43ee-a075-e46ff509b0a6
readline.question("", (n) => {
  // your code here
  n = Number(n);
  let isPrime = true;
  for (let num = 2; num * num <= n; num++) {
    if (n % num == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${n} is a prime number`);
  } else {
    console.log(`${n} is not a prime number`);
  }

  readline.close();
});

// Sum of digits
// Link : https://course.acciojob.com/idle?question=16ae2277-0d38-4eba-9a84-d4326ea2da2e
function SumofDigits(n) {
  let sum = 0;
  n = Number(n);
  while (n > 0) {
    const digit = n % 10; // extract digit
    sum = sum + digit; // sum += digit;
    n = parseInt(n / 10); // remove the digit
  }

  console.log(sum);
}

// Reverse digits of a Number
// Link: https://course.acciojob.com/idle?question=817d51d8-e009-4322-8e51-257b76455a4c
readline.question("", (n) => {
  //Write your code here
  let rev = 0;
  n = Number(n);
  while (n > 0) {
    const digit = n % 10; // extract digit
    rev = rev * 10 + digit;
    n = parseInt(n / 10); // remove the digit
  }

  console.log(rev);
  readline.close();
});

// N Stars
// Link: https://course.acciojob.com/idle?question=24eb1955-7e70-45d9-8ce8-f9d9a8268aca
readline.question("", (n) => {
  // Write your code here
  for (let i = 0; i < n; i++) {
    process.stdout.write("*");
  }
  console.log();
  for (let i = 0; i < n; i++) {
    console.log("*");
  }
  readline.close();
});

// Right Angle Traingle Stars
// Link: https://course.acciojob.com/idle?question=a148f7c8-e47f-45a9-bd72-8808f823ead1
readline.question("", (n) => {
  //Write your code here
  const rows = Number(n);
  for (let i = 1; i <= rows; i++) {
    const cols = i;
    for (let j = 1; j <= cols; j++) {
      process.stdout.write("*");
    }
    console.log(); // after printing a row move to new line
  }
  readline.close();
});

// Staircase
// Link: https://course.acciojob.com/idle?question=ac6a801c-d206-4945-9e19-583eb006417f
readline.question("", (n) => {
  n = parseInt(n);
  //write code here
  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      process.stdout.write(" ");
    }
    for (let hashes = 1; hashes <= row; hashes++) {
      process.stdout.write("#");
    }
    console.log(); // after printing a row move to new line
  }
  readline.close();
});

// Star Pyramid
// Link: https://course.acciojob.com/idle?question=e9e6daa1-9972-4e6c-a285-7a3e084a56b9
readline.question("", (n) => {
  n = parseInt(n);
  //write code here
  for (let row = 1; row <= n; row++) {
    for (let spaces = 1; spaces <= n - row; spaces++) {
      process.stdout.write(" ");
    }
    for (let starsp = 1; starsp <= row; starsp++) {
      process.stdout.write("* ");
    }
    console.log(); // after printing a row move to new line
  }
  readline.close();
});

// Print Number Pattern 2
// Link: https://course.acciojob.com/idle?question=8e5ac095-1d55-41cc-aaa7-75f2c24f953a
rl.on("line", (n) => {
  // your code here
  for (let row = 1; row <= n; row++) {
    for (let num = row; num >= 1; num--) {
      process.stdout.write(num + "");
      // process.stdout.write(String(num));
    }
    console.log(); // after printing a row move to new line
  }
  rl.close();
});

// Print Character Pattern
// Link: https://course.acciojob.com/idle?question=687fa3e9-43fd-4000-8e0d-71330c8742e1
readline.question("", (n) => {
  // Write your code here
  for (let row = 1; row <= n; row++) {
    const charOfRow = String.fromCharCode(64 + row);
    for (let col = 1; col <= row; col++) {
      process.stdout.write(charOfRow);
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
  // go to every number and check if it is armstrong
  for (let num = m; num <= n; num++) {
    // 1. count number of digits
    let cnt = 0;
    let temp = num;
    while (temp > 0) {
      temp = parseInt(temp / 10);
      cnt++;
    }
    // after the above loop temp becomes 0

    // 2. sum of digit power no.of digits
    let sum = 0;
    temp = num;
    while (temp > 0) {
      const digit = temp % 10;
      sum = sum + digit ** cnt;
      temp = parseInt(temp / 10);
    }
    // after the above loop temp becomes 0

    // 3. compare with original number
    if (sum == num) {
      console.log(num);
    }
  }

  readline.close();
});

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
  return n + 5;
}

// Super Hero
// Link: https://course.acciojob.com/idle?question=4b50de0b-5e1c-4477-8a34-82fa7d292044
function ModifyName(name) {
  // write code here
  const ans = `${name} is a Super Hero`;
  return ans;
}

// Place Vlaue checker
// Link: https://course.acciojob.com/idle?question=7412f7e1-3017-44fa-83a9-00b9c0781986
function determineSecondLastDigit(n) {
  // write code here
  n = parseInt(n / 10);
  if (n % 10 == 0) {
    return true;
  }
  return false;
  // only executed when if becomes false,
  // because, if becomes true it will return
}

// Calculate nCr
// Link: https://course.acciojob.com/idle?question=869a6e7b-e104-45df-b2b0-28a803fecc43
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

function calculate_nCr(n, r) {
  // write code here
  let nFact = factorial(n);
  let rFact = factorial(r);
  let nMinusRFact = factorial(n - r);

  const ans = nFact / (rFact * nMinusRFact);
  return ans;
}

// Diamond Pattern
// Link: https://course.acciojob.com/idle?question=ba892dad-d841-4f88-9d20-8f7c633f8b6b
function upperTraingle(x) {
  for (let row = 1; row <= x; row++) {
    for (let space = 1; space <= x - row; space++) {
      process.stdout.write("  ");
    }
    for (let star = 1; star <= 2 * row - 1; star++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

function lowerTraingle(x) {
  for (let row = 1; row <= x; row++) {
    for (let space = 1; space <= row; space++) {
      process.stdout.write("  ");
    }
    for (let star = 1; star <= 2 * (x - row) + 1; star++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let t = Number(input[0]);
  let index = 1;

  while (t > 0) {
    let n = Number(input[index]);
    upperTraingle(parseInt(n / 2) + 1);
    lowerTraingle(parseInt(n / 2));
    t--;
    index++;
  }
});
