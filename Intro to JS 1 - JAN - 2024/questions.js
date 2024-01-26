// Circle Area Perimeter
// Link: https://course.acciojob.com/idle?question=f6f6fc43-493d-4c2e-8cfd-e07f3acad1e8
rl.on("line", (radius) => {
  //Write your code here
  const PI = 3;
  console.log(PI * radius * radius);
  console.log(2 * PI * radius);
});

// Celsius to Fahrenheit 2
// Link: https://course.acciojob.com/idle?question=ea7be5f0-3781-49f5-a435-2183f1a0212a
readline.question("", (C) => {
  readline.close();
  // Your code here
  const F = C * (9 / 5) + 32;
  console.log(F.toFixed(6));
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

  if (LHS === RHS) {
    console.log("VERIFIED");
  } else {
    console.log("NOT VERIFIED");
  }

  readline.close();
});

// Leap Year
// Link: https://course.acciojob.com/idle?question=2c8693a8-885f-4c9b-9191-8faaf9ff9913
readline.question("", (year) => {
  // Write your code here and print the required output
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

// Sum of Natural Numbers
// Link: https://course.acciojob.com/idle?question=75a292e5-d69d-44a0-a74d-366c7c3c5e95
rl.on("line", (N) => {
  // write your code here
  // console.log(N, typeof N)

  N = Number(N);
  let sum = 0;
  let prod = 1;
  for (let num = 1; num <= N; num++) {
    sum = sum + num;
    prod = prod * num;
  }

  console.log(sum);
  console.log(prod);
  rl.close();
});

// efficient / optimal approach
rl.on("line", (N) => {
  // write your code here
  N = Number(N);
  console.log((N * (N + 1)) / 2);
});

// Factorial with loop
// Link: https://course.acciojob.com/idle?question=a93bddb1-78e4-4ad6-a018-275668ecc3e4
readline.question("", (n) => {
  readline.close();
  // Write your code here
  n = Number(n);
  let prod = 1;
  for (let num = 1; num <= n; num++) {
    prod = prod * num;
  }
  console.log(prod);
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

// Efficient / optimal
readline.question("", (n) => {
  n = parseInt(n);
  // Write your code here
  if (n % 2 != 0) {
    n--;
  }

  console.log((n * (n + 2)) / 4);
});

// Check Prime
// Link: https://course.acciojob.com/idle?question=03d33e77-b47d-43ee-a075-e46ff509b0a6
readline.question("", (n) => {
  // your code here
  n = Number(n); // to be safe always make sure input is a number

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
// Link: https://course.acciojob.com/idle?question=16ae2277-0d38-4eba-9a84-d4326ea2da2e
function SumofDigits(n) {
  n = Number(n);
  let sum = 0;
  while (n != 0) {
    const lastDigit = n % 10;
    sum = sum + lastDigit;
    n = parseInt(n / 10);
  }
  console.log(sum);
}

// Reverse digits of a Number
// Link: https://course.acciojob.com/idle?question=817d51d8-e009-4322-8e51-257b76455a4c
readline.question("", (n) => {
  //Write your code here
  n = Number(n);
  let rev = 0;
  while (n != 0) {
    const lastDigit = n % 10;
    rev = rev * 10 + lastDigit;
    n = parseInt(n / 10);
  }
  console.log(rev);

  readline.close();
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

// Right Angle Triangle Stars
// Link: https://course.acciojob.com/idle?question=a148f7c8-e47f-45a9-bd72-8808f823ead1
readline.question("", (n) => {
  //Write your code here
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < row + 1; col++) {
      process.stdout.write("*"); // prints in the same line
    }
    console.log(); // move to next line
  }

  readline.close();
});

// Staircase
// Link: https://course.acciojob.com/idle?question=ac6a801c-d206-4945-9e19-583eb006417f
readline.question("", (n) => {
  n = parseInt(n);
  //write code here
  for (let row = 0; row < n; row++) {
    for (let space = 0; space < n - row - 1; space++) {
      process.stdout.write(" ");
    }
    for (let hash = 0; hash < row + 1; hash++) {
      process.stdout.write("#");
    }
    console.log();
  }

  readline.close();
});

// Star pyramid
// Link: https://course.acciojob.com/idle?question=e9e6daa1-9972-4e6c-a285-7a3e084a56b9
readline.question("", (n) => {
  //Write your code here
  for (let row = 0; row < n; row++) {
    for (let space = 0; space < n - row - 1; space++) {
      process.stdout.write(" ");
    }
    for (let starsp = 0; starsp < row + 1; starsp++) {
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
  for (let row = 0; row < n; row++) {
    let num = row + 1;
    for (let col = 0; col < row + 1; col++) {
      process.stdout.write(String(num));
      num--;
    }
    console.log();
  }

  rl.close();
});

// Character Pattern
// Link: https://course.acciojob.com/idle?question=687fa3e9-43fd-4000-8e0d-71330c8742e1
readline.question("", (n) => {
  // Write your code here
  for (let row = 0; row < n; row++) {
    const alphabet = String.fromCharCode(65 + row);
    for (let col = 0; col < row + 1; col++) {
      process.stdout.write(alphabet);
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
    // 1. Count no.of digits
    let temp = num;
    let cnt = 0;
    while (temp != 0) {
      temp = parseInt(temp / 10);
      cnt++;
    }

    // 2. sum of every digit to power no.of digits
    // re-initialize temp as it becomes 0 after step-1
    temp = num;
    let sum = 0;
    while (temp != 0) {
      const lastDigit = temp % 10;
      sum += lastDigit ** cnt;
      temp = parseInt(temp / 10);
    }

    if (sum == num) {
      console.log(num);
    }
  }

  readline.close();
});

// Function Problem 1
// Link: https://course.acciojob.com/idle?question=13a54748-3053-4959-a051-b14a4634770c
function fun() {
  console.log("I am another function");
}

fun();

// Function Problem 2
// Link: https://course.acciojob.com/idle?question=b27b4039-2b8b-4834-9a6b-f8622057be7a
function fun(n, m) {
  // write code here
  console.log(n + m);
}

readline.question("", (input) => {
  const [n, m] = input.split(" ").map(Number);
  fun(n, m);
  readline.close();
});

// Function Problem 3
// Link: https://course.acciojob.com/idle?question=922be2a0-a552-456c-9f9e-5c41b514d200
function fun(n) {
  // write code here
  for (let i = 0; i < 5; i++) {
    n++;
  }
  return n;
  // or return n + 5 directly insted of for loop
}

rl.on("line", (n) => {
  let result = fun(parseInt(n));
  console.log(result);
  rl.close();
});

// Frequency of digit
// Link: https://course.acciojob.com/idle?question=e2214e07-d190-4c58-8287-52e6b136e293
function frequencyOfDigit(n, d) {
  // Write your code here
  let cnt = 0;
  while (n != 0) {
    const digit = n % 10;
    if (digit == d) {
      cnt++;
    }
    n = parseInt(n / 10);
  }

  return cnt;
}

// Super Hero
// Link: https://course.acciojob.com/idle?question=4b50de0b-5e1c-4477-8a34-82fa7d292044
function ModifyName(name) {
  // write code here
  return `${name} is a Super Hero`;
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
  const n_fact = factorial(n);
  const r_fact = factorial(r);
  const nr_fact = factorial(n - r);
  return n_fact / (r_fact * nr_fact);
}

// Place value checker
// Link: https://course.acciojob.com/idle?question=7412f7e1-3017-44fa-83a9-00b9c0781986
function determineSecondLastDigit(n) {
  // write code here
  n = parseInt(n / 10); // remove last digit
  // after removing, now the last digit is actually 2nd last
  return n % 10 == 0; // check last digit is 0
}

// Binary To Decimal
// Link: https://course.acciojob.com/idle?question=f89c75c7-084a-4472-b293-43736a2f34ab
// This will not work with string greater than 15/16 length
// Hence We need to do string iteration which comes in module 2
function binToDec(s) {
  //Write code here
  let num = Number(s);
  let dec = 0;
  let power = 0;

  while (num != 0) {
    const digit = num % 10;
    dec += digit * 2 ** power;
    power++;
    num = parseInt(num / 10);
  }

  return dec;
}

function binToDec(s) {
  // Write code here
  return parseInt(s, 2);
}

// Diamond Pattern
// Link: https://course.acciojob.com/idle?question=ba892dad-d841-4f88-9d20-8f7c633f8b6b
function pyramid(n) {
  for (let row = 0; row < n; row++) {
    for (let space = 0; space < n - row - 1; space++) {
      process.stdout.write("  ");
    }
    for (let star = 0; star < 2 * row + 1; star++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

function revPyramid(n) {
  for (let row = 0; row < n; row++) {
    for (let space = 0; space < row + 1; space++) {
      process.stdout.write("  ");
    }
    for (let star = 0; star < 2 * (n - row) - 1; star++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

function diamond(n) {
  pyramid(parseInt(n / 2) + 1);
  revPyramid(parseInt(n / 2));
}

// Array Problem 1
// Link: https://course.acciojob.com/idle?question=203c6532-1438-4d70-8854-94f35fe1b0ba
function ArrayProblem1(n, arr) {
  // Write code here
  let maxEle = -Infinity;
  let maxIdx = -1;
  for (let i = 0; i < n; i++) {
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
  let maxEle = -Infinity;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (arr[i] > maxEle) {
      maxEle = arr[i];
    }
  }

  const average = parseInt(sum / n);

  console.log(sum, average, maxEle);
}

// Array Problem 5
// Link: https://course.acciojob.com/idle?question=f98feeb1-40eb-4b6f-a600-067714166864
function ArrayProblem(arr, k) {
  // Write code here
  let n = arr.length;
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

// Efficient / optimal
function ArrayProblem(arr) {
  // Write your code here
  let maxEle = -Infinity;
  let minEle = Infinity;
  const n = arr.length;
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
    if (arr[i] != firstMax && arr[i] > secondMax) {
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

// Array Adding
// Link: https://course.acciojob.com/idle?question=a426a64f-8962-4a98-9433-3200d900ad67
function calSumUtil(a, b, n, m) {
  // Write your code here

  // we assume that n >= m is guaranteed

  // 1. Initialize / create empty result array
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(0);
  }

  // 2. Start adding from right to left
  let i = n - 1;
  let j = m - 1;
  let carry = 0;

  while (i >= 0) {
    let sum = j >= 0 ? a[i] + b[j] + carry : a[i] + carry;
    res[i] = sum % 10;
    carry = parseInt(sum / 10);
    i--;
    j--;
  }

  // 3. Handle Leftover Carry
  if (carry == 1) {
    res.unshift(1); // adds an element at front of the array
  }

  return res;
}

function calSum(a, b, n, m) {
  // Write your code here
  if (n >= m) {
    return calSumUtil(a, b, n, m);
  } else {
    return calSumUtil(b, a, m, n);
  }
}

// Buildings
// Link: https://course.acciojob.com/idle?question=a7bdae50-cbdd-4048-a3c3-be52504b9580
function countVisibleRoofs(heights) {
  // Write your code here
  const n = heights.length;
  let runningMax = -Infinity;
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    if (heights[i] >= runningMax) {
      cnt++;
      runningMax = heights[i];
    }
  }

  return cnt;
}

// Rotate array
// Link: https://course.acciojob.com/idle?question=444d4b46-efef-467a-8833-e3fede7d22f0
function reverseArr(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}

function rotateArray(arr, n, k) {
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
function findSplit(n, arr) {
  // 1. find total sum
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += arr[i];
  }

  // 2. use running sum technique
  let lsum = 0;
  for (let split = 0; split < n - 1; split++) {
    lsum += arr[split];
    const rsum = total - lsum;
    if (lsum == rsum) {
      return split;
    }
  }

  return -1;
}

function splitArray(n, arr) {
  const split = findSplit(n, arr);
  if (split == -1) {
    console.log("Not Possible");
  } else {
    for (let i = 0; i <= split; i++) {
      process.stdout.write(arr[i] + " ");
    }
    console.log();
    for (let i = split + 1; i < n; i++) {
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
        // a = arr[i], b = arr[j], c = arr[k]
        // b / a == c / b
        // b * b == a * c (cross multiply)
        if (arr[j] * arr[j] == arr[i] * arr[k]) {
          console.log(arr[i], arr[j], arr[k]);
        }
      }
    }
  }
}

// Array Subtraction
// Link: https://course.acciojob.com/idle?question=4ed416d3-76b0-41a6-a956-3201e2fb6079
function findSubtractionUtil(arr1, n, arr2, m) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(0);
  }

  let i = n - 1;
  let j = m - 1;
  let borrow = 0;

  while (i >= 0) {
    let diff = j >= 0 ? arr1[i] - arr2[j] - borrow : arr1[i] - borrow;

    if (diff < 0) {
      diff += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }

    res[i] = diff;
    i--;
    j--;
  }
  return res;
}

function shouldISwap(arr1, n, arr2, m) {
  if (n > m) {
    return false;
  } else if (n < m) {
    return true;
  } else {
    for (let i = 0; i < n; i++) {
      if (arr1[i] > arr2[i]) {
        return false;
      } else if (arr1[i] < arr2[i]) {
        return true;
      }
    }
    return false;
  }
}

function findSubtraction(arr1, n, arr2, m) {
  if (shouldISwap(arr1, n, arr2, m)) {
    const res = findSubtractionUtil(arr2, m, arr1, n);
    res[0] = res[0] * -1;
    return res;
  }

  return findSubtractionUtil(arr1, n, arr2, m);
}

// Print Matrix Column Wise
// Link: https://course.acciojob.com/idle?question=31900452-fb2e-45cd-93b0-fb4d6afbfac0
function printMatrixColumnwise(mat, n, m) {
  const rows = n;
  const cols = m;

  for (let c = 0; c < cols; c++) {
    // Pick the column, Iterate on row
    for (let r = 0; r < rows; r++) {
      process.stdout.write(mat[r][c] + " ");
    }
  }
}

// Alternate Manner Matrix Traversal
// Link: https://course.acciojob.com/idle?question=191ba184-3c72-468a-83fe-5100d558f7eb
function printElementsAlternately(mat, m, n) {
  const rows = m;
  const cols = n;

  for (let r = 0; r < rows; r++) {
    if (r % 2 == 0) {
      for (let c = 0; c < cols; c++) {
        process.stdout.write(mat[r][c] + " ");
      }
    } else {
      for (let c = cols - 1; c >= 0; c--) {
        process.stdout.write(mat[r][c] + " ");
      }
    }
  }
}
