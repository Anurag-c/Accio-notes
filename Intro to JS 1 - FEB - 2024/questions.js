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
  const n_fact = factorial(n);
  const r_fact = factorial(r);
  const n_r_fact = factorial(n - r);

  const ans = n_fact / (r_fact * n_r_fact);
  return ans;
}

// Frequency of digit
// Link: https://course.acciojob.com/idle?question=e2214e07-d190-4c58-8287-52e6b136e293
function frequencyOfDigit(n, d) {
  // Write your code here
  let cnt = 0;
  while (n > 0) {
    const digit = n % 10;
    if (digit == d) {
      cnt++;
    }
    n = parseInt(n / 10);
  }

  return cnt;
}

// Place Value Checker
// Link: https://course.acciojob.com/idle?question=7412f7e1-3017-44fa-83a9-00b9c0781986
function determineSecondLastDigit(n) {
  // write code here
  n = parseInt(n / 10);
  const digit = n % 10;

  /*
  if (digit == 0) {
    return true;
  }
  return false;
  */

  return digit == 0;
}

// Diamond Pattern
// Link: https://course.acciojob.com/idle?question=ba892dad-d841-4f88-9d20-8f7c633f8b6b
function printDiamond(n) {
  // print upper star pyramid
  const upperRows = parseInt(n / 2) + 1;
  for (let r = 0; r < upperRows; r++) {
    const spaces = 2 * (upperRows - r - 1);
    for (let sp = 0; sp < spaces; sp++) {
      process.stdout.write(" ");
    }
    for (let starsp = 0; starsp < 2 * r + 1; starsp++) {
      process.stdout.write("* ");
    }

    console.log();
  }

  // print lower star pyramid
  const lowerRows = n - upperRows;
  for (let r = 0; r < lowerRows; r++) {
    for (let sp = 0; sp < 2 * (r + 1); sp++) {
      process.stdout.write(" ");
    }
    const starSpaces = 2 * (lowerRows - r) - 1;
    for (let starsp = 0; starsp < starSpaces; starsp++) {
      process.stdout.write("* ");
    }

    console.log();
  }
}

// Optimus Prime
// Link: https://course.acciojob.com/idle?question=c77a4030-9552-4f23-b348-f2fdc22c330a
function isPrime(num) {
  let isFound = false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isFound = true;
      break;
    }
  }

  return !isFound;
}

rl.on("line", (n) => {
  // Your code here
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
});

// Print Continuous Character Pattern
// Link: https://course.acciojob.com/idle?question=d3216ae1-5d6c-42da-b63d-2d6166dc78ef
readline.question("", (n) => {
  readline.close();
  // write code here

  for (let row = 0; row < n; row++) {
    let ascii = 65 + (row % 26);
    for (let col = 0; col < row + 1; col++) {
      if (ascii == 91) {
        ascii = 65;
      }
      process.stdout.write(String.fromCharCode(ascii));
      ascii++;
    }
    console.log();
  }
});

// Binary To Decimal
// Link: https://course.acciojob.com/idle?question=f89c75c7-084a-4472-b293-43736a2f34ab
// This fails if the length of string is > 16
// because max value of number is aprrox 10^15 or 10^16
function binToDec(s) {
  //Write code here
  num = Number(s);
  let sum = 0;
  let power = 1;
  while (num > 0) {
    const digit = num % 10;
    sum += digit * power;
    num = parseInt(num / 10);
    power = power * 2;
  }

  return sum;
}

// we can use inbuilt JS functions
// or you can iterate on strings (this is for later topics)
function binToDec(s) {
  //Write code here
  return parseInt(s, 2);
}

// Array Problem 1
// Link: https://course.acciojob.com/idle?question=203c6532-1438-4d70-8854-94f35fe1b0ba
function ArrayProblem1(n, arr) {
  // Write code here
  let maxEle = -Infinity;
  let maxIdx = -1;
  for (let i = 0; i < n; i++) {
    // curr element > the max value you have seen until now
    if (arr[i] > maxEle) {
      maxEle = arr[i];
      maxIdx = i;
    }
  }

  return maxIdx;
}

// Array Operations
// Link: https://course.acciojob.com/idle?question=c2985a2b-5ee0-4569-a77b-7459b1efd8d7
function arrayOperations(arr, n) {
  // Write your code here
  let maxEle = -Infinity;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    maxEle = Math.max(maxEle, arr[i]);
    /*
    if (arr[i] > maxEle) {
      maxEle = arr[i];
    }
    */

    sum += arr[i];
  }

  const average = Math.floor(sum / n);
  console.log(sum, average, maxEle);
}

// Array Problem 5
// Link: https://course.acciojob.com/idle?question=f98feeb1-40eb-4b6f-a600-067714166864
function ArrayProblem(arr, k) {
  // Write code here
  const n = arr.length;
  let cnt = 0;
  for (let i = 0; i < n - 1; i++) {
    const sum = arr[i] + arr[i + 1];
    if (sum == k) {
      cnt++;
    }
  }

  return cnt;
}

// Maximum difference between two elements in an Array
// Link: https://course.acciojob.com/idle?question=b5a0f4ca-7b5e-4fee-9487-3ca52a582741
function ArrayProblem(arr) {
  // Write your code here
  let maxDiff = -Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const diff = Math.abs(arr[i] - arr[j]);
      maxDiff = Math.max(maxDiff, diff);
      /*
      if (diff > maxDiff) {
        maxDiff = diff;
      }
      */
    }
  }

  console.log(maxDiff);
}

// Efficient way
function ArrayProblem(arr) {
  // Write your code here
  let maxEle = -Infinity;
  let minEle = Infinity;
  for (let i = 0; i < n; i++) {
    maxEle = Math.max(arr[i], maxEle);
    minEle = Math.min(arr[i], minEle);
  }

  console.log(maxEle - minEle);
}

// 2nd Largest from array
// Link: https://course.acciojob.com/idle?question=d5b5b101-0636-4654-bd4d-bfecce8e5d00

function SecondLargest(arr, n) {
  // Write code here
  let firstMax = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > firstMax) {
      firstMax = arr[i];
    }
  }

  let secondMax = -Infinity;
  for (let i = 0; i < n; i++) {
    /*
    // You can also write like this instead of continue
    if (arr[i] != firstMax && arr[i] > secondMax) {
      secondMax = arr[i];
    }
    */

    if (arr[i] == firstMax) {
      continue;
    }

    // you will come here only when arr[i] != firstMax due to continue
    if (arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }

  console.log(secondMax);
}

// Reverse an array
// Link: https://course.acciojob.com/idle?question=944dba4b-f895-44af-8ec1-7445343e5713
function reverseArray(arr, start, end) {
  //Write code here
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}

// Sum of Array Except Self
// Link: https://course.acciojob.com/idle?question=3cf411ff-c59c-4202-ae5c-6b0292d31764
function sumArrayExceptSelf(nums, n) {
  // Write your code here
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += nums[i];
  }

  const ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(total - nums[i]);
  }

  return ans;
}

// Array Problem 6
// Link: https://course.acciojob.com/idle?question=02fe1fa2-2fba-4a5f-aca0-baac93f166a3
function ArrayProblem6(n, arr) {
  // Write code here
  let minDist = Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > 0 && arr[j] > 0 && arr[i] % 2 == 0 && arr[j] % 2 == 0) {
        const dist = Math.abs(i - j);
        minDist = Math.min(minDist, dist);
      }
    }
  }

  if (minDist == Infinity) {
    // This will happen only when there are 0 or 1 even number
    return -1;
  }
  return minDist;
}

// Efficient way - HW

// Array Adding
// Link: https://course.acciojob.com/idle?question=a426a64f-8962-4a98-9433-3200d900ad67
function calSum(a, b, n, m) {
  // Write your code here
  let i = n - 1;
  let j = m - 1;
  let carry = 0;
  const res = [];

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

  /*
  while (i >= 0 && j >= 0) {
    const sum = a[i] + b[j] + carry;
    res.push(sum % 10);
    carry = parseInt(sum / 10);
    i--;
    j--;
  }

  while (i >= 0) {
    const sum = a[i] + carry;
    res.push(sum % 10);
    carry = parseInt(sum / 10);
    i--;
  }

  while (j >= 0) {
    const sum = b[j] + carry;
    res.push(sum % 10);
    carry = parseInt(sum / 10);
    j--;
  }
  */

  // carry cannot be greater than 1
  // because max possible sum = 9 + 9 + 1 = 19
  if (carry == 1) {
    res.push(1);
  }

  res.reverse();
  return res;
}

// Buildings
// Link: https://course.acciojob.com/idle?question=a7bdae50-cbdd-4048-a3c3-be52504b9580
function countVisibleRoofs(heights) {
  // Write your code here
  const n = heights.length;
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    let leftMax = -Infinity;
    for (let j = 0; j < i; j++) {
      leftMax = Math.max(leftMax, heights[j]);
    }

    if (heights[i] >= leftMax) {
      cnt++;
    }
  }

  return cnt;
}

// Efficient way
function countVisibleRoofs(heights) {
  // Write your code here
  const n = heights.length;
  let cnt = 0;
  let runningMax = -Infinity;
  for (let i = 0; i < n; i++) {
    if (heights[i] >= runningMax) {
      cnt++;
    }
    runningMax = Math.max(heights[i], runningMax);
  }

  return cnt;
}

// Rotate array
// Link: https://course.acciojob.com/idle?question=444d4b46-efef-467a-8833-e3fede7d22f0
function rotateArray(arr, n, k) {
  // Write code here
  for (let time = 0; time < k; time++) {
    const firstEle = arr[0];
    for (let i = 0; i < n - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[n - 1] = firstEle;
  }

  for (let i = 0; i < n; i++) {
    process.stdout.write(arr[i] + " ");
  }
}

function reverseArr(arr, start, end) {
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
  reverseArr(arr, 0, n - 1);
  reverseArr(arr, 0, n - k - 1);
  reverseArr(arr, n - k, n - 1);

  for (let i = 0; i < n; i++) {
    process.stdout.write(arr[i] + " ");
  }
}

// Subarray Sum Zero
// Link: https://course.acciojob.com/idle?question=7f096e64-5c0d-4333-b324-02e6ac91a3d7
function zeroSubarray(arr) {
  //Write your code here
  const n = arr.length;
  let isFound = false;
  for (let start = 0; start < n; start++) {
    let sum = 0;
    for (let end = start; end < n; end++) {
      sum += arr[end];
      if (sum == 0) {
        console.log(`Subarray found from Index ${start} to ${end}`);
        isFound = true;
      }
    }
  }

  if (isFound == false) {
    console.log(-1);
  }
}

// Subarray sum divisible by k
// Link: https://course.acciojob.com/idle?question=fd54a321-f9b7-4772-9d78-69ffe5a0ccb8
function subarrayDivisbleByK(arr, n, k) {
  // your code here
  const n = arr.length;
  let cnt = 0;
  for (let start = 0; start < n; start++) {
    let sum = 0;
    for (let end = start; end < n; end++) {
      sum += arr[end];
      if (sum % k == 0) {
        cnt++;
      }
    }
  }

  return cnt;
}

// Find Split Point
// Link: https://course.acciojob.com/idle?question=c0af5738-5a1c-4a05-a68c-789f38a620d1
function findSplit(arr, N) {
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

  // you will reach here only when no split possible
  return -1;
}

function splitArray(N, arr) {
  // Write your code here
  const split = findSplit(arr, N);
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

// Array Subtracting
// Link: https://course.acciojob.com/idle?question=4ed416d3-76b0-41a6-a956-3201e2fb6079
function shouldIConvert(a, n, b, m) {
  if (n < m) {
    return true;
  }
  if (n > m) {
    return false;
  }

  // equal length case
  for (let i = 0; i < n; i++) {
    // first non equal element
    if (a[i] != b[i]) {
      if (a[i] < b[i]) {
        return true;
      } else {
        return false;
      }
    }
  }

  return false;
}

function findSubtraction(a, n, b, m) {
  //Write your code here
  const conversion = shouldIConvert(a, n, b, m);
  if (conversion == true) {
    let temp = a;
    a = b;
    b = temp;
    temp = n;
    n = m;
    m = temp;
  }

  let i = n - 1;
  let j = m - 1;
  let carry = 0;
  let res = [];
  while (i >= 0 || j >= 0) {
    let diff = a[i] + carry;
    if (j >= 0) diff -= b[j];

    if (diff < 0) {
      carry = -1;
      diff += 10;
    } else {
      carry = 0;
    }

    res.push(diff);
    i--;
    j--;
  }

  res.reverse();
  if (conversion == true) {
    res[0] *= -1;
  }

  return res;
}

// Print 2D Array
// Link: https://course.acciojob.com/idle?question=9ea8dbd6-3b71-45c9-a8c3-1bfb7608ad13
function printElements(arr, n, m) {
  //Write your code here
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      process.stdout.write(arr[r][c] + " ");
    }
    console.log();
  }
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
// Link: https://course.acciojob.com/idle?question=57e7562d-b233-42ca-89f6-c10ad5cdf579
function matrixTranspose(mat, n) {
  //Write your code here
  for (let r = 1; r < n; r++) {
    for (let c = 0; c < r; c++) {
      const temp = mat[r][c];
      mat[r][c] = mat[c][r];
      mat[c][r] = temp;
    }
  }

  return mat;
}

// Find sum of all the elements of 2-D array
// Link: https://course.acciojob.com/idle?question=6f64e510-b7fd-44b7-9d5f-923a0995bde9
function findSum(arr, n, m) {
  //Write your code here
  let sum = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      sum += arr[r][c];
    }
  }
  return sum;
}

// Largest Number At Least Twice of Others
// Link: https://course.acciojob.com/idle?question=cb7fb253-f3f5-47ad-a261-53b8d4fdd033
function LargestElement(nums, n) {
  // First calculate max ele and max idx
  let maxVal = -Infinity;
  let maxIdx = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] > maxVal) {
      maxVal = nums[i];
      maxIdx = i;
    }
  }

  // check whehter max element is atleast twice of all other elements
  for (let i = 0; i < n; i++) {
    if (maxIdx != i && 2 * nums[i] > maxVal) {
      return -1;
    }
  }

  return maxIdx;
}

// Matrix Multiplication
// Link: https://course.acciojob.com/idle?question=da3dfaa3-541f-4b9b-a202-30b4fb01a835
function printMultiplication(a, b, n) {
  // Write your code here
  const rows1 = n;
  const cols1 = n;
  const rows2 = n;
  const cols2 = n;

  // 1. create a empty resultant matrix
  // rows1 x cols2
  const res = [];
  for (let r = 0; r < rows1; r++) {
    const smallArr = [];
    for (let c = 0; c < cols2; c++) {
      smallArr.push(0);
    }
    res.push(smallArr);
  }

  // 2. multiply the matrices
  // res[r][c] = Sum (a[r][k] * b[k][c]), k = 0 to cols1 - 1
  for (let r = 0; r < rows1; r++) {
    for (let c = 0; c < cols2; c++) {
      for (let k = 0; k < cols1; k++) {
        res[r][c] += a[r][k] * b[k][c];
      }
    }
  }

  for (let r = 0; r < rows1; r++) {
    for (let c = 0; c < cols2; c++) {
      process.stdout.write(res[r][c] + " ");
    }
    console.log();
  }
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

// Diagonal Difference!
// Link: https://course.acciojob.com/idle?question=8a6cbf35-d128-459b-a7ba-9e269d2af40a
function diagonalDifference(mat, n) {
  // Write your code here
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

  console.log(Math.abs(adiag - diag));
}

function diagonalDifference(mat, n) {
  let diag = 0;
  let adiag = 0;

  for (let r = 0; r < n; r++) {
    diag += mat[r][r];
    adiag += mat[r][n - r - 1];
  }

  console.log(Math.abs(adiag - diag));
}

// Spirally traversing a matrix
// Link: https://course.acciojob.com/idle?question=5f714d43-3f91-4c47-b41b-203207e63522
function spirallyTraverse(mat) {
  // Write your code here
  const rows = mat.length;
  const cols = mat[0].length;
  const total = rows * cols;

  let minR = 0; // top wall
  let maxR = rows - 1; // bottom wall
  let minC = 0; // left wall
  let maxC = cols - 1; // right wall
  let cnt = 0;

  while (cnt < total) {
    // 1. Top wall (minR, minC to maxC)
    for (let c = minC; c <= maxC && cnt < total; c++) {
      process.stdout.write(mat[minR][c] + " ");
      cnt++;
    }
    minR++;

    // 2. right wall (maxC, minR to maxR)
    for (let r = minR; r <= maxR && cnt < total; r++) {
      process.stdout.write(mat[r][maxC] + " ");
      cnt++;
    }
    maxC--;

    // 3. bottom wall (maxR, maxC to minC)
    for (let c = maxC; c >= minC && cnt < total; c--) {
      process.stdout.write(mat[maxR][c] + " ");
      cnt++;
    }
    maxR--;

    // 4. left wall (minC, maxR to minR)
    for (let r = maxR; r >= minR && cnt < total; r--) {
      process.stdout.write(mat[r][minC] + " ");
      cnt++;
    }
    minC++;
  }
}

// A Contest
// Link: https://course.acciojob.com/idle?question=0363c617-a2d0-41a5-a2a3-f5736d1c36f7
function printFindParticipants(arr, n, k) {
  // Write your code here
  const kthPartScore = arr[k - 1];
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] >= kthPartScore && arr[i] > 0) {
      cnt++;
    }
  }

  console.log(cnt);
}

// Subarray Problem 3
// Link: https://course.acciojob.com/idle?question=0298655b-b264-421a-906d-32443ebe3e55
function largestAltitude(gain) {
  //Write your code here
  let sum = 0;
  let maxAlt = 0;
  const n = gain.length;
  for (let i = 0; i < n; i++) {
    sum += gain[i];
    maxAlt = Math.max(sum, maxAlt);
  }

  return maxAlt;
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
    // 1. turning right should happen only on 1
    if (matrix[i][j] == 1) {
      matrix[i][j] = 0;
      facing = (facing + 1) % 4;
    }

    // 2. move forward should happen in both 0, 1
    if (facing == 0) {
      j++;
    } else if (facing == 1) {
      i++;
    } else if (facing == 2) {
      j--;
    } else {
      i--;
    }

    // 3. Check whether you are outside, and return lastbox
    if (i == -1) {
      return [0, j];
    } else if (j == cols) {
      return [i, cols - 1];
    } else if (i == rows) {
      return [rows - 1, j];
    } else if (j == -1) {
      return [i, 0];
    }
  }
}

// Maxima Minima
// Link: https://course.acciojob.com/idle?question=834a5e9e-9b0c-45db-b0e1-375bafb999ea
function findMinRow(mat, row) {
  const cols = mat[0].length;
  let minEle = Infinity;
  for (let c = 0; c < cols; c++) {
    minEle = Math.min(mat[row][c], minEle);
  }

  return minEle;
}

function findMaxCol(mat, col) {
  const rows = mat.length;
  let maxEle = -Infinity;
  for (let r = 0; r < rows; r++) {
    maxEle = Math.max(maxEle, mat[r][col]);
  }

  return maxEle;
}

// O(N^3)
function maximaMinima(mat) {
  //Write code here
  const rows = mat.length;
  const cols = mat[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const minR = findMinRow(mat, r);
      const maxC = findMaxCol(mat, c);
      if (minR == mat[r][c] && maxC == mat[r][c]) {
        return mat[r][c];
      }
    }
  }

  return -1;
}

// Optimal => O(N^2)
function maximaMinima(mat) {
  //Write code here
  const rows = mat.length;
  const cols = mat[0].length;

  const minRow = [];
  const maxCol = [];

  for (let r = 0; r < rows; r++) {
    const minEle = findMinRow(mat, r);
    minRow.push(minEle);
  }

  for (let c = 0; c < cols; c++) {
    const maxEle = findMaxCol(mat, c);
    maxCol.push(maxEle);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const minR = minRow[r];
      const maxC = maxCol[c];
      if (minR == mat[r][c] && maxC == mat[r][c]) {
        return mat[r][c];
      }
    }
  }

  return -1;
}

// Diagonal Traversal of a Matrix
// Link: https://course.acciojob.com/idle?question=c6c26827-a9b9-478e-bafb-77ab8d37bc88
function diagonalTraversal(mat, n) {
  // your code here
  const res = [];
  for (let c = n - 1; c >= 1; c--) {
    let i = 0;
    let j = c;
    while (i < n && j < n) {
      res.push(mat[i][j]);
      i++;
      j++;
    }
  }

  for (let r = 0; r < n; r++) {
    let i = r;
    let j = 0;
    while (i < n && j < n) {
      res.push(mat[i][j]);
      i++;
      j++;
    }
  }

  return res;
}

// Toeplitz Matrix
// Link: https://course.acciojob.com/idle?question=fa4a91e3-218d-473b-8d33-65fb2af3e145
function isToeplitzMatrix(matrix, m, n) {
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      // Check the respective diagonal element is equal / not
      if (matrix[i][j] != matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }

  return true;
}

// Subarray Problem 1
// Link: https://course.acciojob.com/idle?question=aaa5a80f-db4e-4cca-a438-ff25b1aadebf
function solve(arr, n, s) {
  // Write your code here
  let found = false;
  for (let start = 0; start < 10; start++) {
    let sum = 0;
    for (let end = start; end < 10; end++) {
      sum += arr[end];
      if (sum == s && end - start + 1 == n) {
        console.log("YES");
        found = true;
        break;
      }
    }
  }

  if (!found) {
    console.log("NO");
  }
}

// Boundary Traversal of matrix
// Link: https://course.acciojob.com/idle?question=20df8834-ee3c-4414-9d44-16e3e22d266e
function boundaryTraversal(m, n, matrix) {
  // Write your code here
  let total = 2 * (m + n - 2);
  // edge cases where our total formula fails
  if (m == 1) total = n;
  if (n == 1) total = m;

  let cnt = 0;

  for (let c = 0; c < n && cnt < total; c++) {
    console.log(matrix[0][c]);
    cnt++;
  }

  for (let r = 1; r < m && cnt < total; r++) {
    console.log(matrix[r][n - 1]);
    cnt++;
  }

  for (let c = n - 2; c >= 0 && cnt < total; c--) {
    console.log(matrix[m - 1][c]);
    cnt++;
  }

  for (let r = m - 2; r >= 1 && cnt < total; r--) {
    console.log(matrix[r][0]);
    cnt++;
  }
}
