// Circle Area-Perimeter
// Link: https://course.acciojob.com/idle?question=f6f6fc43-493d-4c2e-8cfd-e07f3acad1e8
rl.on("line", (radius) => {
  // Write your code here
  const PI = 3;
  console.log(PI * radius * radius);
  console.log(2 * PI * radius);
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

// Verify Cube
// https://course.acciojob.com/idle?question=ad87c003-dc8d-4ea3-b416-de0ed0c6788e
readline.question("", (n) => {
  let [a, b] = n.split(" ");
  a = Number(a);
  b = Number(b);
  // Write your code here
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
  if (65 <= ascii && ascii <= 90) {
    console.log(1);
  } else if (97 <= ascii && ascii <= 122) {
    console.log(0);
  } else {
    console.log(-1);
  }

  readline.close();
});

// you use the characters directly instead of ASCII Values
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
  } else if ((h1 < h2 && v1 <= v2) || (h2 < h1 && v2 <= v1)) {
    console.log(false);
  } else {
    if ((h2 - h1) % (v1 - v2) == 0) {
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
  N = Number(N);
  let sum = 0;
  for (let num = 1; num <= N; num++) {
    // sum = sum + num;
    sum += num;
  }
  console.log(sum);

  rl.close();
});

// Efficient way using formula
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

// Efficient way using formula
readline.question("", (n) => {
  n = parseInt(n);
  // Write your code here

  // when n is odd, make it even
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

  // I did not find any number which divides n
  let isFound = false;
  for (let num = 2; num <= n - 1; num++) {
    if (n % num == 0) {
      // I found a number which divides n
      isFound = true;
      break;
    }
  }

  if (isFound == true) {
    console.log(`${n} is not a prime number`);
  } else {
    console.log(`${n} is a prime number`);
  }

  readline.close();
});

// Please do not make this mistake
readline.question("", (n) => {
  // your code here
  n = Number(n);

  for (let num = 2; num <= n - 1; num++) {
    if (n % num == 0) {
      console.log(`${n} is not a prime number`);
    } else {
      console.log(`${n} is a prime number`);
    }
  }

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
  /*
  let largest;
  if (a >= b && a >= c) {
    largest = a;
  }
  if (b >= a && b >= c) {
    largest = b;
  }
  if (c >= a && c >= b) {
    largest = c;
  }
  */

  const largest = Math.max(a, b, c);
  const sum = a ** 2 + b ** 2 + c ** 2;
  const twice = 2 * largest ** 2;
  if (twice < sum) {
    console.log(1); // acute
  } else if (twice > sum) {
    console.log(3); // obtuse
  } else {
    console.log(2); // right-angle
  }

  rl.close();
});

// Sum of digits
// Link: https://course.acciojob.com/idle?question=16ae2277-0d38-4eba-9a84-d4326ea2da2e
function SumofDigits(n) {
  let sum = 0;

  while (n > 0) {
    // 1. extract last digit
    const digit = n % 10;

    // 2. add the digit to sum
    sum = sum + digit;

    // 3. remove last digit
    n = parseInt(n / 10);
  }

  return sum; // understand it as console.log(sum)
}

// Reverse digits of a Number
// Link: https://course.acciojob.com/idle?question=817d51d8-e009-4322-8e51-257b76455a4c
readline.question("", (n) => {
  // Write your code here
  n = Number(n);
  let rev = 0;
  while (n > 0) {
    // 1. extract last digit
    const digit = n % 10;

    // 2. Apply the reverse formula
    rev = rev * 10 + digit;

    // 3. remove last digit
    n = parseInt(n / 10);
  }

  console.log(rev);
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

// N Stars
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

// Variable practice 8
// Link: https://course.acciojob.com/idle?question=ee04dfd0-ee0b-4512-ac07-46ba464cce2b
for (let i = 1; i <= 10; i++) {
  console.log(`8 x ${i} = ${8 * i}`);
}

let i = 1;
while (i <= 10) {
  console.log(`8 x ${i} = ${8 * i}`);
  i++;
}

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
    for (let sp = 0; sp < n - r - 1; sp++) {
      process.stdout.write(" ");
    }
    for (let ha = 0; ha < r + 1; ha++) {
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
    for (let sp = 0; sp < n - r - 1; sp++) {
      process.stdout.write(" ");
    }
    for (let starsp = 0; starsp < r + 1; starsp++) {
      process.stdout.write("* ");
    }
    console.log();
  }

  readline.close();
});

// Print Number Pattern 2
// https://course.acciojob.com/idle?question=8e5ac095-1d55-41cc-aaa7-75f2c24f953a
rl.on("line", (n) => {
  // your code here
  for (let r = 0; r < n; r++) {
    let startNum = r + 1;
    for (let c = 0; c < r + 1; c++) {
      process.stdout.write(String(startNum));
      startNum--;
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

// using global variable
readline.question("", (n) => {
  // Write your code here
  let ascii = 65;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < r + 1; c++) {
      process.stdout.write(String.fromCharCode(ascii));
    }
    ascii++;
    console.log();
  }

  readline.close();
});

// Armstrong Numbers in Range
// Link: https://course.acciojob.com/idle?question=620db89b-bcf4-4913-be13-64da3b4ddbeb
readline.question("", (line) => {
  let [m, n] = line.split(" ").map(Number);

  // Not required because m <= n as per given constraints
  // But Just to understand we have written this
  if (m > n) {
    let temp = m;
    m = n;
    n = temp;
  }

  // Write the code here
  for (let num = m; num <= n; num++) {
    // 1. count no.of digits
    let temp = num;
    let cnt = 0;
    while (temp > 0) {
      temp = parseInt(temp / 10);
      cnt++;
    }

    // 2. sum of digit to the power no.of.digits
    temp = num; // reinitialize temp because it became 0
    let sum = 0;
    while (temp > 0) {
      const digit = temp % 10;
      sum += digit ** cnt;
      temp = parseInt(temp / 10);
    }

    // 3. check for armstrong
    if (sum == num) {
      console.log(num);
    }
  }

  readline.close();
});
