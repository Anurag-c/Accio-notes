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

// Array Problem 1
// Link: https://course.acciojob.com/idle?question=203c6532-1438-4d70-8854-94f35fe1b0ba
function ArrayProblem1(n, arr) {
  // Write code here
  let maxEle = arr[0];
  let maxIdx = 0;

  /*
  // alternatively
  let maxEle = -Infinity;
  let maxIdx = -1;
  run loop from i = 0
  */

  for (let i = 1; i < n; i++) {
    // if you find a shop with greater chocolates
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
  let sum = 0;
  let maxEle = -Infinity; // or arr[0];
  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
    // If your current ele > maximum element then update
    if (arr[i] > maxEle) {
      maxEle = arr[i];
    }
  }

  const average = parseInt(sum / n);
  console.log(sum, average, maxEle);
}

// Array Problem 2
// Link: https://course.acciojob.com/idle?question=e958fa46-11df-46f0-9153-6907e969d40d
function ArrayProblem2(n, arr) {
  // Write code here
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

// Maximum difference between two elements in an Array
// Link: https://course.acciojob.com/idle?question=b5a0f4ca-7b5e-4fee-9487-3ca52a582741
function ArrayProblem(arr) {
  // Write your code here
  const n = arr.length;
  let maxDiff = -Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const diff = Math.abs(arr[i] - arr[j]);
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
  }

  console.log(maxDiff);
}

// optimal / efficient approach
function ArrayProblem(arr) {
  // Write your code here
  const n = arr.length;
  let maxEle = -Infinity;
  let minEle = Infinity;

  for (let i = 0; i < n; i++) {
    if (arr[i] > maxEle) {
      maxEle = arr[i];
    }

    if (arr[i] < minEle) {
      minEle = arr[i];
    }
  }

  console.log(maxEle - minEle);
}

// 2nd Largest from array
// https://course.acciojob.com/idle?question=d5b5b101-0636-4654-bd4d-bfecce8e5d00
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
    if (arr[i] != firstMax && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }

  console.log(secondMax);
}

// Reverse an array
// Link: https://course.acciojob.com/idle?question=94Reverse an array4dba4b-f895-44af-8ec1-7445343e5713
function reverseArray(arr, start, end) {
  //Write code here
  while (start <= end) {
    // swap arr[start], arr[end]
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  /* 
  // just for understanding
  for (let start = 0, end = n - 1; start <= end; start++, end--) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
  }
  */
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

// Array Adding
// Link: https://course.acciojob.com/idle?question=a426a64f-8962-4a98-9433-3200d900ad67
function calSumUtil(a, b, n, m) {
  // Write your code here

  // 1. initialize / create empty result array
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(0);
  }

  // 2. start adding from last
  let i = n - 1;
  let j = m - 1;
  let carry = 0;

  while (i >= 0) {
    /*
    let sum;
    if(j >= 0) {
      sum = a[i] + b[j] + carry;
    }
    else {
      sum = a[i] + carry;
    }
    */

    let sum = j >= 0 ? a[i] + b[j] + carry : a[i] + carry;
    res[i] = sum % 10;
    carry = sum / 10;

    i--;
    j--;
  }

  // 3. If there is carry left, add 1 to the beginning of array
  if (carry == 1) {
    res.unshift(1);
  }

  return res;
}

function calSum(a, b, n, m) {
  // Write your code here
  if (n >= m) {
    return calSumUtil(a, b, n, m);
  }
  return calSumUtil(b, a, m, n);
}

// Buildings
// Link: https://course.acciojob.com/idle?question=a7bdae50-cbdd-4048-a3c3-be52504b9580
function isVisible(heights, idx) {
  for (let i = idx - 1; i >= 0; i--) {
    if (heights[i] > heights[idx]) {
      return false;
    }
  }
  return true;
}

function countVisibleRoofs(heights) {
  // Write your code here
  const n = heights.length;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (isVisible(heights, i)) {
      cnt++;
    }
  }

  return cnt;
}

// Efficient / optimal
function countVisibleRoofs(heights) {
  // Write your code here
  const n = heights.length;
  let cnt = 0;
  let runningMax = -Infinity;
  for (let i = 0; i < n; i++) {
    if (runningMax <= heights[i]) {
      cnt++;
      runningMax = heights[i];
    }
  }

  return cnt;
}

// Rotate array
// Link: https://course.acciojob.com/idle?question=444d4b46-efef-467a-8833-e3fede7d22f0
function reverse(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}

function rotateArray(arr, n, k) {
  // Write code here
  k = k % n;

  // reverse entire array
  reverse(arr, 0, n - 1);

  // reverse 1st n - k elements
  reverse(arr, 0, n - k - 1);

  // reverse last k elements
  reverse(arr, n - k, n - 1);

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
      sum = sum + arr[end];
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

// Subarray sum divisible by k
// Link: https://course.acciojob.com/idle?question=fd54a321-f9b7-4772-9d78-69ffe5a0ccb8
function subarrayDivisbleByK(arr, n, k) {
  let cnt = 0;

  for (let start = 0; start < n; start++) {
    let sum = 0;
    for (let end = start; end < n; end++) {
      sum = sum + arr[end];
      if (sum % k == 0) {
        cnt++;
      }
    }
  }

  return cnt;
}

// Find Split Point
// Link: https://course.acciojob.com/idle?question=c0af5738-5a1c-4a05-a68c-789f38a620d1
function getSplitPoint(N, arr) {
  let total = 0;
  for (let i = 0; i < N; i++) {
    total += arr[i];
  }

  let lsum = 0;
  for (let i = 0; i < N - 1; i++) {
    lsum += arr[i];
    const rsum = total - lsum;
    if (lsum == rsum) {
      return i;
    }
  }

  return -1;
}

function splitArray(N, arr) {
  const cutPos = getSplitPoint(N, arr);
  if (cutPos == -1) {
    console.log("Not Possible");
  } else {
    for (let i = 0; i <= cutPos; i++) {
      process.stdout.write(arr[i] + " ");
    }
    console.log();
    for (let i = cutPos + 1; i < N; i++) {
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
  // Write your code here
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

  // go to every column
  for (let c = 0; c < m; c++) {
    // iterate on rows
    for (let r = 0; r < n; r++) {
      process.stdout.write(mat[r][c] + " ");
    }
  }
}

// Alternate Manner Matrix Traversal
// Link: https://course.acciojob.com/idle?question=191ba184-3c72-468a-83fe-5100d558f7eb
function printElementsAlternately(mat, m, n) {
  // Write code here and print output
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

// Transpose of a Matrix
// Link: https://course.acciojob.com/idle?question=57e7562d-b233-42ca-89f6-c10ad5cdf579
function matrixTranspose(mat, n) {
  //Write your code here
  const transMat = [];
  for (let c = 0; c < n; c++) {
    const arr = [];
    for (let r = 0; r < n; r++) {
      arr.push(mat[r][c]);
    }
    transMat.push(arr);
  }

  return transMat;
}

// space efficient
function matrixTranspose(mat, n) {
  //Write your code here
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < r; c++) {
      const temp = mat[r][c];
      mat[r][c] = mat[c][r];
      mat[c][r] = temp;
    }
  }

  return mat;
}

// Array Subtracting
// Link: https://course.acciojob.com/idle?question=4ed416d3-76b0-41a6-a956-3201e2fb6079
function compare(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  if (n1 > n2) {
    return true;
  } else if (n1 < n2) {
    return false;
  }

  // where n1 == n2
  for (let i = 0; i < n1; i++) {
    if (arr1[i] < arr2[i]) {
      return false;
    } else if (arr1[i] > arr2[i]) {
      return true;
    }
  }
  return true;
}

function arraySubtracting(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;

  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(0);
  }
  let i = n - 1;
  let j = m - 1;
  let sub = 0;
  let carry = 0;
  while (i >= 0) {
    sub = j >= 0 ? arr1[i] - arr2[j] - carry : arr1[i] - carry;
    carry = 0;
    if (sub < 0) {
      sub += 10;
      carry = 1;
    }
    res[i] = sub % 10;
    i--;
    j--;
  }
  return res;
}

function subtract(arr1, arr2) {
  if (compare(arr1, arr2)) {
    return arraySubtracting(arr1, arr2);
  }
  const res = arraySubtracting(arr2, arr1);
  res[0] = res[0] * -1;
  return res;
}

// Matrix Multiplication
// Link: https://course.acciojob.com/idle?question=da3dfaa3-541f-4b9b-a202-30b4fb01a835
function printMultiplication(matrix1, matrix2, n) {
  const rows1 = n;
  const cols1 = n;
  const rows2 = n;
  const cols2 = n;

  if (cols1 != rows2) return;

  // Initialize an empty matrix
  const res = []; // rows1 x cols2
  for (let r = 0; r < rows1; r++) {
    const arr = [];
    for (let c = 0; c < cols2; c++) {
      arr.push(0);
    }
    res.push(arr);
  }

  // Fill each box in res matrix
  // res[r][c] = rth row of matrix1 x cth col of matrix2
  for (let r = 0; r < rows1; r++) {
    for (let c = 0; c < cols2; c++) {
      for (let k = 0; k < rows2; k++) {
        res[r][c] += matrix1[r][k] * matrix2[k][c];
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
    // 1. Top wall (minR, minC to maxC)
    for (let c = minC; c <= maxC && totalEle > 0; c++) {
      process.stdout.write(mat[minR][c] + " ");
      totalEle--;
    }
    minR++;

    // 2. right wall (maxC, minR to maxR)
    for (let r = minR; r <= maxR && totalEle > 0; r++) {
      process.stdout.write(mat[r][maxC] + " ");
      totalEle--;
    }
    maxC--;

    // 3. bottom wall (maxR, maxC to minC)
    for (let c = maxC; c >= minC && totalEle > 0; c--) {
      process.stdout.write(mat[maxR][c] + " ");
      totalEle--;
    }
    maxR--;

    // 4. left wall (minC, maxR to minR)
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
  let diag = 0;
  let adiag = 0;
  for (let r = 0; r < n; r++) {
    diag += mat[r][r];
    adiag += mat[r][n - r - 1];
  }

  console.log(Math.abs(diag - adiag));
}

// Sum of upper and lower triangles
// Link: https://course.acciojob.com/idle?question=d39c3375-6cfe-47a6-9c75-9f0acf8ae916
function triangleSums(n, matrix) {
  // your code here
  let upper = 0;
  let lower = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (r >= c) {
        lower += matrix[r][c];
      }
      if (r <= c) {
        upper += matrix[r][c];
      }
    }
  }

  console.log(upper, lower);
}

// Find the way
// Link: https://course.acciojob.com/idle?question=60d37a31-7584-48eb-baad-ee073ffc7acf
function findTheWay(matrix) {
  //Write code here

  const rows = matrix.length;
  const cols = matrix[0].length;

  // Initially mouse is at top-left (0, 0) and facing right (0)
  let i = 0;
  let j = 0;
  let facing = 0;

  while (true) {
    facing = (facing + matrix[i][j]) % 4;

    if (matrix[i][j] == 1) {
      matrix[i][j] = 0;
    }

    if (facing == 0) {
      j++;
    } else if (facing == 1) {
      i++;
    } else if (facing == 2) {
      j--;
    } else {
      i--;
    }

    if (j == cols) {
      // exit from right
      return [i, j - 1];
    } else if (i == rows) {
      // exit from bottom
      return [i - 1, j];
    } else if (j == -1) {
      // exit from left
      return [i, j + 1];
    } else if (i == -1) {
      // exit from top
      return [i + 1, j];
    }
  }
}

// Maxima Minima
// Link: https://course.acciojob.com/idle?question=834a5e9e-9b0c-45db-b0e1-375bafb999ea
function minRow(mat, row) {
  let minEle = Infinity;
  const cols = mat[0].length;
  for (let c = 0; c < cols; c++) {
    if (mat[row][c] < minEle) {
      minEle = mat[row][c];
    }
  }

  return minEle;
}

function maxCol(mat, col) {
  let maxEle = -Infinity;
  const rows = mat.length;
  for (let r = 0; r < rows; r++) {
    if (mat[r][col] > maxEle) {
      maxEle = mat[r][col];
    }
  }

  return maxEle;
}

function maximaMinima(mat) {
  //Write code here
  const rows = mat.length;
  const cols = mat[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const minR = minRow(mat, i);
      const maxC = maxCol(mat, j);
      if (mat[i][j] == minR && mat[i][j] == maxC) {
        return mat[i][j];
      }
    }
  }

  return -1;
}

readline.question("", (n) => {
  let matrix = [];
  let count = 0;
  readline.on("line", (line) => {
    matrix.push(line.trim().split(" ").map(Number));
    count++;
    if (count == n) {
      let result = maximaMinima(matrix);
      console.log(result);
      readline.close();
    }
  });
});

// Efficient / optimal approach
function maximaMinima(mat) {
  //Write code here
  const rows = mat.length;
  const cols = mat[0].length;

  const minRow = [];
  for (let i = 0; i < rows; i++) {
    minRow.push(Infinity);
  }

  const maxCol = [];
  for (let i = 0; i < cols; i++) {
    maxCol.push(-Infinity);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] < minRow[i]) {
        minRow[i] = mat[i][j];
      }
      if (mat[i][j] > maxCol[j]) {
        maxCol[j] = mat[i][j];
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const minR = minRow[i];
      const maxC = maxCol[j];
      if (mat[i][j] == minR && mat[i][j] == maxC) {
        return mat[i][j];
      }
    }
  }

  return -1;
}
