// Switch Case Problem 1
readline.question("", (N) => {
  N = parseInt(N);

  switch (N) {
    case 55:
      console.log("Study is important");
      break;
    default:
      console.log("No value");
  }

  readline.close();
});

// Condition Problem 4
function conditionalProblem(letter) {
  switch (letter) {
    case "A":
      console.log("I am the first letter");
      break;

    case "B":
      console.log("I am the second letter");
      break;

    case "C":
      console.log("I am the third letter");
      break;

    case "D":
      console.log("I am the fourth letter");
      break;

    case "E":
      console.log("I am the fifth letter");
      break;

    default:
      console.log("I don't belong here");
  }
}

// Switch Case Problem 3
function switchCase3(a, b) {
  const result = a % b;
  switch (result) {
    case 0:
      console.log("Remainder is too small");
      break;
    case 1:
      console.log("Remainder is small");
      break;
    case 2:
      console.log("Remainder is large");
      break;
    default:
      console.log("Remainder is too large");
  }
}

// Switch case problem 2
rl.question("", (N) => {
  N = parseInt(N);
  switch (N) {
    case 12:
      console.log("I am even");
      break;
    case 13:
      console.log("I am prime");
      break;
    case 25:
      console.log("I am odd");
      break;
    default:
      console.log("I am just a number");
  }
  rl.close();
});

// remove composites
function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function removeComposites(N, arr) {
  res = [];
  for (let i = 0; i < N; i++) {
    if (isPrime(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

// Count words in a string
function countWords(s) {
  const arr = s.split(" ");
  let words = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length != 0) {
      words++;
    }
  }

  return words;
}

// Toggle Characters
// link : https://course.acciojob.com/idle?question=4ed3641c-3947-40e1-a296-114067186afe
function toggleCase(n, str) {
  let ans = "";
  for (let i = 0; i < n; i++) {
    if ("A" <= str[i] && str[i] <= "Z") {
      ans += str[i].toLowerCase();
    } else {
      ans += str[i].toUpperCase();
    }
  }
  console.log(ans);
}

function toggleCase(n, str) {
  let ans = "";
  for (let i = 0; i < n; i++) {
    const ch = str[i];
    const lower = str[i].toLowerCase();
    const upper = str[i].toUpperCase();
    if (ch == lower) {
      ans += upper;
    } else {
      ans += lower;
    }
  }
  console.log(ans);
}

// Pangrams
// link: https://course.acciojob.com/idle?question=7eee469e-1a6d-4b5f-bbe0-a31fdc15e47d
function isPangram(sentence) {
  sentence = sentence.toLowerCase();
  for (let ascii = 97; ascii <= 122; ascii++) {
    const ch = String.fromCharCode(ascii);
    if (sentence.includes(ch) == false) {
      return "not pangram";
    }
  }
  return "pangram";
}

// Camel Case
// link: https://course.acciojob.com/idle?question=a39547be-677e-48bd-b068-ee49f6fb8e25
function camelCase(s) {
  const allWords = s.split("_");
  for (let i = 1; i < allWords.length; i++) {
    const word = allWords[i];
    allWords[i] = word[0].toUpperCase() + word.slice(1);
  }
  return allWords.join("");
}

function camelCase(s) {
  const allWords = s.split("_");
  let ans = allWords[0];
  for (let i = 1; i < allWords.length; i++) {
    const word = allWords[i];
    ans += word.replace(word[0], word[0].toUpperCase());
  }
  return ans;
}

// Palindrome String
// link: https://course.acciojob.com/idle?question=598cc264-4776-408f-a80b-4d156d9e8709
function isPalindrome(s) {
  s = s.toLowerCase();
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    if (s[start] < "a" || s[start] > "z") {
      start++;
    } else if (s[end] < "a" || s[end] > "z") {
      end--;
    } else if (s[start] != s[end]) {
      return 0;
    } else {
      start++;
      end--;
    }
  }

  return 1;
}
// TC : O(N), SC: O(1)

// Compressed Strings
// link: https://course.acciojob.com/idle?question=d0efdf7e-f990-49d7-bbdc-8f4c5eb37de1
function compressString(s) {
  let cnt = 1;
  let ans = "";
  const n = s.length;
  for (let i = 1; i < n; i++) {
    if (s[i] == s[i - 1]) {
      cnt++; // same region increment cnt
    } else {
      ans += s[i - 1] + (cnt > 1 ? cnt : ""); // prev_char + cnt
      cnt = 1; // re-initialize as you entered new region
    }
  }

  // missed adding last exploration
  ans += s[n - 1] + (cnt > 1 ? cnt : "");
  return ans;
}
// TC: O(N), SC: O(1) (if you want to consider output => O(N))

// Substrings
// Link: https://course.acciojob.com/idle?question=94779a98-b326-4d58-a107-b50cc370b894
function SubString(str) {
  const n = str.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      console.log(str.slice(i, j + 1));
    }
  }
}
// TC: O(N^3), SC: O(1)

function SubString(str) {
  const n = str.length;
  for (let i = 0; i < n; i++) {
    let substr = "";
    for (let j = i; j < n; j++) {
      substr += str[j];
      console.log(substr);
    }
  }
}
// TC: O(N^2), SC: O(1)

// Distinct Palindromic SubStrings
// Link: https://course.acciojob.com/idle?question=a2253264-33ae-4cd3-85ce-ba0f6f461418
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] != str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

function palindromeSubStrs(str) {
  const n = str.length;
  const map = {};

  for (let i = 0; i < n; i++) {
    let substr = "";
    for (let j = i; j < n; j++) {
      substr += str[j];
      if (isPalindrome(substr)) {
        // add it to the object / map
        if (map[substr] != undefined) {
          map[substr]++;
        } else {
          map[substr] = 1;
        }
      }
    }
  }

  // get all the keys from a map
  const keys = Object.keys(map);

  // lexicographical order -> sorted order
  keys.sort();

  // print according output format
  for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
  }
}
// TC: O(N^3), SC: O(N^2)

// Ptice
// Link: https://course.acciojob.com/idle?question=9e8aaa54-86e5-4a82-bba6-deaaacb9700c
function ptice(n, key) {
  const [adrian, bruno, goran] = ["ABC", "BABC", "CCAABB"];
  let [acnt, bcnt, gcnt] = [0, 0, 0];

  for (let i = 0; i < n; i++) {
    const ans = key[i];
    const adrianAns = adrian[i % 3];
    const brunoAns = bruno[i % 4];
    const goranAns = goran[i % 6];

    if (ans == adrianAns) acnt++;
    if (ans == brunoAns) bcnt++;
    if (ans == goranAns) gcnt++;
  }

  let maxMarks = Math.max(acnt, bcnt, gcnt);
  console.log(maxMarks);
  if (maxMarks == acnt) console.log("Adrian");
  if (maxMarks == bcnt) console.log("Bruno");
  if (maxMarks == gcnt) console.log("Goran");
}
// TC: O(N), SC: O(1)

// Autori
// Link: https://course.acciojob.com/idle?question=5f129c6b-4ef9-461a-b716-60316168e12f
function autori(str) {
  const n = str.length;
  let ans = str[0];
  for (let i = 0; i < n; i++) {
    if (str[i] == "-") {
      ans += str[i + 1];
    }
  }
  return ans;
}
// TC: O(N), SC: O(1)

// String to Integer Array
// Link: https://course.acciojob.com/idle?question=318ca0ab-0c63-4b0b-934b-f34925bfd0cb
function arrayGenerator(s) {
  const arr = s.split(",");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  return arr;
}

function arrayGenerator(s) {
  let rs = "";
  const n = s.length;
  const ans = [];

  for (let i = 0; i < n; i++) {
    if (s[i] == ",") {
      ans.push(Number(rs));
      rs = "";
    } else {
      rs += s[i];
    }
  }

  // unexplored rs
  ans.push(Number(rs));
  return ans;
}
// TC: O(N), SC: O(1)

// Time Conversion
// Link: https://course.acciojob.com/idle?question=354f7964-86b9-4bcc-8f31-d070f1336bce
function timeConversion(s) {
  // hh  :mm:ss   AM
  // 01  234567   89

  const ch = s[8]; // to check AM or PM
  const hh = s.slice(0, 2);
  const rem = s.slice(2, 8);

  if (ch == "A") {
    if (hh == "12") {
      console.log("00" + rem); // change to 00, remove AM
    } else {
      console.log(hh + rem); // as it is, just remove AM
    }
  } else {
    if (hh == 12) {
      console.log(hh + rem); // as it is, just remove PM
    } else {
      console.log(Number(hh) + 12 + rem); // add 12, remove PM
    }
  }
}
// TC: O(1), SC: O(1)

// Bubble Sort
function bubbleSort(arr) {
  const n = arr.length;
  let swaps = 0;
  // passes
  for (let fixIdx = n - 1; fixIdx > 0; fixIdx--) {
    // comparing adjacent elements
    for (let i = 0; i < fixIdx; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swaps++;
      }
    }
  }
  return swaps;
}
// TC: O(N^2), SC: O(1)

// Bubble Sort Problem
// Link: https://course.acciojob.com/idle?question=29cbcea0-c4c1-4b3b-a2c3-038dfb499b85
function bubbleSort(a, n) {
  let swaps = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swaps++;
      }
    }
  }
  console.log(swaps);
  console.log(a[0]);
  console.log(a[n - 1]);
}
// TC: O(N^2), SC: O(1)

// Word from Keyboard (Doubt from Student)
// Link: https://course.acciojob.com/idle?question=ceab1561-febd-488e-9db7-a53053b6086f
function canType(str, rowStr) {
  const n = str.length;
  // O(len(str))
  for (let i = 0; i < n; i++) {
    // O(len(rowStr)) => O(len("qwertyuiop")) => O(1)
    if (rowStr.includes(str[i]) == false) {
      return false;
    }
  }
  return true;
}

function getStrings(arr) {
  const n = arr.length;
  const res = [];
  const firstRow = "qwertyuiop";
  const secondRow = "asdfghjkl";
  const thirdRow = "zxcvbnm";

  for (let i = 0; i < n; i++) {
    let check = canType(arr[i], firstRow);
    check = check || canType(arr[i], secondRow);
    check = check || canType(arr[i], thirdRow);
    if (check) {
      res.push(arr[i]);
    }
  }
  return res;
}
// TC: O(len(arr) * maxlen(str)) => O(N^2) [when both arr and str are of same length]

// Selection Sort
function selectionSort(arr) {
  const n = arr.length;
  for (let fixIdx = 0; fixIdx < n - 1; fixIdx++) {
    // find the minimum ele
    let minEle = Infinity;
    let minEleIdx = -1;
    for (let i = fixIdx; i < n; i++) {
      if (arr[i] < minEle) {
        minEle = arr[i];
        minEleIdx = i;
      }
    }

    // avoid un-necessary swappings
    if (fixIdx != minIdx) {
      [arr[fixIdx], arr[minEleIdx]] = [arr[minEleIdx], arr[fixIdx]];
    }
  }
}
// TC: O(N^2), SC: O(1)

// Alice loves number (Contest Question)
// Link: https://course.acciojob.com/idle?question=c4466efa-c2cd-4fe0-a052-3e49e0b5e745
function extractNumbers(str) {
  const n = str.length;
  let ans = "";

  for (let i = 0; i < n; i++) {
    if ("1" <= str[i] && str[i] <= "9") {
      ans += str[i];
    }
  }

  return ans;
}
// TC: O(N), SC: O(1)

// Helping Ron 3 (Contest Question)
// Link: https://course.acciojob.com/idle?question=d7582fdb-6347-4ac2-be37-a0e4e93d7b9c
function subtractTwoMatrix(m, n, mat1, mat2) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      mat2[i][j] = mat1[i][j] - mat2[i][j];
    }
  }

  return mat2;
}
// TC: O(M * N), SC: O(1)

// Insertion sort
function insertionSort(arr) {
  const n = arr.length;
  // We are getting cards one by one
  for (let i = 1; i < n; i++) {
    // I got ith card place it in the right position
    const myCard = arr[i];
    let j = i - 1;
    while (j >= 0 && myCard < arr[j]) {
      arr[j + 1] = arr[j]; // shifting towards right
      j--;
    }
    arr[j + 1] = myCard;
  }
  return arr;
}
// TC: O(N^2), SC: O(1)

// AS Sorting 1
function printMatrix(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      process.stdout.write(mat[r][c] + " ");
    }
    console.log();
  }
}

/* 
all are same
function compare(a, b) {
	return Number(a) - Number(b);
}
const compare = (a, b) => {
	return Number(a) - Number(b);
}
const compare = (a, b) => Number(a) - Number(b);
*/

function sortCol(mat, n, m) {
  for (let c = 0; c < m; c++) {
    const col = [];
    for (let r = 0; r < n; r++) {
      col.push(mat[r][c]);
      // same as col[r] = mat[r][c];
    }
    col.sort((a, b) => Number(a) - Number(b));
    for (let r = 0; r < n; r++) {
      mat[r][c] = col[r];
    }
  }
  printMatrix(mat);
}
// TC: O(N^2), SC: O(1)

// 0-1 Sorting
// Link: https://course.acciojob.com/idle?question=09d1a3ab-046f-4594-b5b4-41040ef6650f
function Sorting01(n, arr) {
  let cnt0 = 0;
  let cnt1 = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) cnt0++;
    else cnt1++;
  }

  let idx = 0;
  while (cnt0 > 0) {
    arr[idx] = 0;
    idx++;
    cnt0--;
  }

  while (cnt1 > 0) {
    arr[idx] = 1;
    idx++;
    cnt1--;
  }

  return arr;
}
// TC: O(N), SC: O(1)

function Sorting01(n, arr) {
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    if (arr[start] == 1 && arr[end] == 0) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    } else if (arr[start] == 0) start++;
    else if (arr[end] == 1) end--;
  }

  return arr;
}
// TC: O(N), SC: O(1)

// Smallest Greater Elements - Bubble Sort
// Link: https://course.acciojob.com/idle?question=037c82ed-47d5-4683-a08c-5cdfb48fb39e
function smallestGreaterElements(arr) {
  let res = [];

  for (let i = 0; i < n; i++) {
    let minEle = Infinity;
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i] && arr[j] < minEle) {
        minEle = arr[j];
      }
    }

    if (minEle == Infinity) res.push(-10000000);
    else res.push(minEle);
  }

  return res;
}

// Insertion Sort 1
// Link: https://course.acciojob.com/idle?question=757b5de7-d2dd-4e4d-bee5-13de2526d9d1
function insertionSort1(arr, n) {
  const i = n - 1; // run insertion sort only for last element
  const myCard = arr[i];
  let j = i - 1;
  while (j >= 0 && myCard < arr[j]) {
    arr[j + 1] = arr[j];
    j--;
    console.log(...arr);
  }
  if (i != j + 1) {
    arr[j + 1] = myCard;
    console.log(...arr);
  }
}
// TC: O(N), SC: O(1)

// AS Sorting 4
// Link: https://course.acciojob.com/idle?question=b999b5d4-ca48-45be-9159-10790d371b98
function sorting4(n, arr, l) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const maxEle = Math.max(arr[i], arr[j], arr[k]);
        const minEle = Math.min(arr[i], arr[j], arr[k]);
        if (maxEle - minEle <= l) cnt++;
      }
    }
  }
  return cnt;
}
// TC: O(N^3), SC: O(1)

function sorting4(n, arr, l) {
  arr.sort((a, b) => Number(a) - Number(b));
  let start = 0;
  let end = 2;
  let cnt = 0;
  while (end < n) {
    if (end - start < 2) {
      end++;
    } else if (arr[end] - arr[start] <= l) {
      const btwn = end - start - 1;
      cnt += (btwn * (btwn + 1)) / 2;
      end++;
    } else {
      start++;
    }
  }

  return cnt;
}
// TC: O(NLogN), SC: O(1)

// Print ACCIOJOB
// Link: https://course.acciojob.com/idle?question=46f24e9e-fdff-4067-bf4b-8b5e4e65a6ea
// pre-way
function solve(n) {
  if (n == 0) {
    return;
  }

  console.log("ACCIOJOB");
  solve(n - 1);
}

// post-way
function solve(n) {
  if (n == 0) {
    return;
  }

  solve(n - 1);
  console.log("ACCIOJOB");
}

// using count variable
function print(cnt, n) {
  if (cnt == n) {
    return;
  }

  console.log("ACCIOJOB");
  print(cnt + 1, n);
}

function solve(n) {
  print(0, n);
}

// Recusively print numbers
// Link: https://course.acciojob.com/idle?question=081952cc-46a8-4444-bebd-735bff0c558d
// post-way
function print(n) {
  if (n == 0) {
    return;
  }

  print(n - 1); // 1 2 3 4
  process.stdout.write(n + " "); // 5
}

function printTillN(N, curr_num) {
  print(N);
}

// pre-way
function printTillN(N, curr_num) {
  if (curr_num > N) {
    return;
  }

  process.stdout.write(curr_num + " "); // 1
  printTillN(N, curr_num + 1); // 2 3 4 5
}

// Recursively Print Numbers In Reverse
// Link: https://course.acciojob.com/idle?question=b0401342-76e9-4b81-9e06-4a92b204a6ef
// pre-way
function printtillN(N) {
  if (N == 0) {
    return;
  }

  process.stdout.write(N + " "); // 5
  printtillN(N - 1); // 4 3 2 1
}

// post-way
function print(curr_num, n) {
  if (curr_num > n) {
    return;
  }

  print(curr_num + 1, n); // 5 4 3 2
  process.stdout.write(curr_num + " "); // 1
}

function printtillN(N) {
  print(1, N);
}

// Decrease Print Increase Print
// Link: https://course.acciojob.com/idle?question=c00092ae-e058-4be3-b2c7-89ac1206270a
function printDI(n) {
  if (n == 0) {
    return;
  }

  console.log(n);
  printDI(n - 1);
  console.log(n);
}

// Factorial Recursively
// Link: https://course.acciojob.com/idle?question=044b6db7-d0b6-4ab5-9bb5-8475269790cf
// post-way
function factorial_recursive(n) {
  if (n == 0) {
    return 1;
  }

  const smallAns = factorial_recursive(n - 1);
  return n * smallAns;
}

// pre-way
function fact(curr_num, curr_fact, n) {
  if (curr_num == n) {
    return curr_fact;
  }

  return fact(curr_num + 1, curr_fact * (curr_num + 1), n);
}

// Power calculation
// Link: https://course.acciojob.com/idle?question=80e462de-7fd5-4923-ad70-0a388d47c94d
function xPowerN(x, n) {
  if (n == 0) {
    return 1;
  }

  const smallAns = xPowerN(x, n - 1);
  return x * smallAns;
}

function power(x, n, curr_power) {
  if (n == 0) {
    return curr_power;
  }

  return power(x, n - 1, curr_power * x);
}

// Optimized power calculation
// Link: https://course.acciojob.com/idle?question=96deddd4-3669-4f3a-ade8-0cbc50118ae4
function power(x, y) {
  if (y == 0) {
    return 1;
  }

  const smallAns = power(x, parseInt(y / 2));
  if (y % 2 == 1) {
    return smallAns * smallAns * x;
  }
  return smallAns * smallAns;
}

function fib(n) {
  if (n == 1) return 0;
  if (n == 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

// Print Array Recursively
// Link: https://course.acciojob.com/idle?question=42087e6a-fcc5-431d-b78a-e1c57a7bb814
// preorder
function printArrayRecursive(arr, idx, n) {
  if (idx == n) {
    return;
  }

  process.stdout.write(arr[idx] + " ");
  printArrayRecursive(arr, idx + 1, n);
}

// postorder
function printArr(arr, idx) {
  if (idx == -1) {
    return;
  }

  printArr(arr, idx - 1);
  process.stdout.write(arr[idx] + " ");
}

function printArrayRecursive(arr, i, n) {
  printArr(arr, n - 1);
}

// Print Reverse Array Recursively
// Link: https://course.acciojob.com/idle?question=4ad63387-62e1-484f-916b-16a1e5bde7c9
// post order
function printReverseArrayRecursive(arr, i, n) {
  if (i == n) {
    return;
  }

  printReverseArrayRecursive(arr, i + 1, n);
  process.stdout.write(arr[i] + " ");
}

// preorder
function printArrRev(arr, idx) {
  if (idx == -1) {
    return;
  }

  process.stdout.write(arr[idx] + " ");
  printArrRev(arr, idx - 1);
}

function printReverseArrayRecursive(arr, i, n) {
  printArrRev(arr, n - 1);
}

// Smallest Number in an Array using Recursion
// Link: https://course.acciojob.com/idle?question=f35ea8a2-6832-4e44-8318-c24f708421e3
// postorder
function findMinRec(arr, idx) {
  if (idx == arr.length - 1) {
    return arr[idx];
  }

  const smallAns = findMinRec(arr, idx + 1);
  return Math.min(arr[idx], smallAns);
}

function findMin(arr, n) {
  return findMinRec(arr, 0);
}

// preorder
function findMinRec(arr, idx, curr_min) {
  if (idx == arr.length) {
    return curr_min;
  }

  return findMinRec(arr, idx + 1, Math.min(arr[idx], curr_min));
}

function findMin(arr, n) {
  return findMinRec(arr, 0, Infinity);
  // return findMinRec(arr, 1, arr[0]);
}

// Check whether Array is a Palindrome using Recursion
// Link: https://course.acciojob.com/idle?question=ad0d1ee4-a4b1-4132-b6b5-5a226479cc3a
// postorder
function isPalindromic(arr, start_idx, end_idx) {
  if (start_idx > end_idx) {
    return 1;
  }

  const smallAns = isPalindromic(arr, start_idx + 1, end_idx - 1);
  if (smallAns == 0) return 0;
  return arr[start_idx] == arr[end_idx] ? 1 : 0;
}

// preorder
function isPalindromic(arr, start_idx, end_idx) {
  if (start_idx > end_idx) {
    return 1;
  }

  if (arr[start_idx] != arr[end_idx]) {
    return 0;
  }

  return isPalindromic(arr, start_idx + 1, end_idx - 1);
}

// First Occurence Index
// Link: https://course.acciojob.com/idle?question=f03dab51-36ef-4e58-b5de-8995417f59ac
// postorder
function firstIndex(arr, ele, idx) {
  if (idx == arr.length) {
    return -1;
  }

  const smallAns = firstIndex(arr, ele, idx + 1);
  if (arr[idx] == ele) return idx;
  return smallAns;
}

// preorder
function firstIndex(arr, ele, idx) {
  if (idx == arr.length) {
    return -1;
  }

  if (arr[idx] == ele) return idx;

  return firstIndex(arr, ele, idx + 1);
}

// Last Occurence Index
// Link: https://course.acciojob.com/idle?question=a33a78a1-76d9-45f9-b6a3-9c7d51df6ee2
// postorder with idx = n - 1
function lastIndex(arr, ele, idx) {
  if (idx == -1) {
    return -1;
  }

  const smallAns = lastIndex(arr, ele, idx - 1);
  if (arr[idx] == ele) return idx;
  return smallAns;
}

// preorder with idx = n - 1
function lastIndex(arr, ele, idx) {
  if (idx == -1) {
    return -1;
  }

  if (arr[idx] == ele) return idx;

  return lastIndex(arr, ele, idx - 1);
}

// postorder with idx = 0
function lastIndex(arr, ele, idx) {
  if (idx == arr.length) {
    return -1;
  }

  const smallAns = lastIndex(arr, ele, idx + 1);
  if (smallAns != -1) return smallAns;
  if (arr[idx] == ele) return idx;
  return -1;
}

// preorder with idx = 0
function lastIndex(arr, ele, idx) {
  if (idx == arr.length) {
    return -1;
  }

  if (arr[idx] == ele) {
    const smallAns = lastIndex(arr, ele, idx + 1);
    if (smallAns != -1) return smallAns;
    return idx;
  }
  return lastIndex(arr, ele, idx + 1);
}

// Find Indices
// Link: https://course.acciojob.com/idle?question=ba5e0f11-6785-42a7-a9a8-46fa03379de9
// preorder
function printAllIndices(arr, ele, idx) {
  if (idx == arr.length) {
    return;
  }

  if (arr[idx] == ele) {
    process.stdout.write(idx + " ");
  }
  printAllIndices(arr, ele, idx + 1);
}

function findX(arr, n, x) {
  printAllIndices(arr, x, 0);
}

// postorder
function getAllIndices(arr, ele, idx) {
  if (idx == arr.length) {
    return [];
  }

  const smallAns = getAllIndices(arr, ele, idx + 1); // [4, 6]
  if (arr[idx] == ele) return [idx, ...smallAns]; // [1, 4, 6]
  return smallAns;
}

function findX(arr, n, x) {
  const ans = getAllIndices(arr, x, 0);
  console.log(...ans);
}

// Doubt: Nth Even Fibonacci Number
// Link: https://course.acciojob.com/idle?question=09f6911f-992e-43cb-98dc-75f7848a14e3
function NthEvenFibonacci(n) {
  if (n == 1) return 2;
  if (n == 2) return 8;

  const M = 1000000007;
  const f1 = (4 * NthEvenFibonacci(n - 1)) % M;
  const f2 = NthEvenFibonacci(n - 2) % M;
  return (f1 + f2) % M;
}

// Find Number of Digits
// Link: https://course.acciojob.com/idle?question=2b98dab6-8c91-4f4d-8bb7-829fc1155a26
// postorder
function numOfDigi(n) {
  if (n == 0) return 0;
  return 1 + numOfDigi(parseInt(n / 10));
}

// preorder
function numDigits(n, cnt) {
  if (n == 0) return cnt;
  return numDigits(parseInt(n / 10), cnt + 1);
}

function numOfDigi(n) {
  return numDigits(n, 0);
}

// No X
// Link: https://course.acciojob.com/idle?question=2aff4e35-b341-4902-b262-4c095ed174f9
// postorder
function removeX(str, idx) {
  if (idx == str.length) return "";

  const smallAns = removeX(str, idx + 1);
  if (str[idx] == "x") return smallAns;
  return str[idx] + smallAns;
}

// preorder
function removeX(str, idx, ans) {
  if (idx == str.length) return ans;

  // not consider
  if (str[idx] == "x") return removeX(str, idx + 1, ans);

  // consider
  return removeX(str, idx + 1, ans + str[idx]);
}

// Print all subsequences of a string
// Link: https://course.acciojob.com/idle?question=47e066fc-64ac-4ce9-ab5f-3a3d6d522765
// postorder
function getAllSubseq(str, idx) {
  if (idx == str.length) {
    return [""];
  }

  const smallAns = getAllSubseq(str, idx + 1);
  const ans = [];

  // with str[idx]
  for (let i = 0; i < smallAns.length; i++) {
    ans.push(str[idx] + smallAns[i]); // "a" + "bcd"
  }

  // also add without str[idx]
  return [ans, ...smallAns];
}

// preorder
function printSubSeq(str, idx, subseq, ans) {
  if (idx == str.length) {
    ans.push(subseq);
    return;
  }

  printSubSeq(str, idx + 1, subseq + str[idx], ans);
  printSubSeq(str, idx + 1, subseq, ans);
}

function printSubsequence(str) {
  const ans = [];
  printSubSeq(str, 0, "", ans);
  console.log(...ans);
}

// Print Stair Path
// Link: https://course.acciojob.com/idle?question=c6abdf5c-6981-4f50-8908-0ce691ee6851
// preorder
function printPaths(n, path) {
  if (n == 0) {
    console.log(path);
    return;
  }

  if (n < 0) {
    return;
  }

  printPaths(n - 1, path + "1");
  printPaths(n - 2, path + "2");
  printPaths(n - 3, path + "3");

  // if you have many choices let say 10, 11.. etc
  // how will you write the code in that case ?
}

// aMaze paths
// Link: https://course.acciojob.com/idle?question=bb073cbd-0873-4607-824f-35edc0041c02
function printMazePaths(sr, sc, dr, dc, path) {
  // reached destination hence stop recursion
  if (sr == dr && sc == dc) {
    console.log(path);
    return;
  }

  // can i go to right
  if (sc + 1 <= dc) {
    // (sr, sc) -> (sr, sc + 1)
    // going right hence add "h"
    printMazePaths(sr, sc + 1, dr, dc, path + "h");
  }
  // can i go down
  if (sr + 1 <= dr) {
    // (sr, sc) -> (sr + 1, sc)
    // going down hence add "v"
    printMazePaths(sr + 1, sc, dr, dc, path + "v");
  }
}

// Maze Problem
// Link: https://course.acciojob.com/idle?question=21ed24d5-3798-4152-a4e8-85627d51884c
function printMazeJumps(sr, sc, dr, dc, path) {
  if (sr == dr && sc == dc) {
    console.log(path);
    return;
  }

  // I can go right by any no.of jumps
  for (let jump = 1; sc + jump <= dc; jump++) {
    printMazeJumps(sr, sc + jump, dr, dc, path + "h" + jump);
  }

  // I can go down by any no.of jumps
  for (let jump = 1; sr + jump <= dr; jump++) {
    printMazeJumps(sr + jump, sc, dr, dc, path + "v" + jump);
  }

  // I can go diagonally by any no.of jumps
  for (let jump = 1; sr + jump <= dr && sc + jump <= dc; jump++) {
    printMazeJumps(sr + jump, sc + jump, dr, dc, path + "d" + jump);
  }
}

// Permutation Printing
// Link: https://course.acciojob.com/idle?question=6a9ab058-5cca-42d5-aeea-3f4003dcd428
function permute(str, path) {
  // no ch in str to pick
  if (str.length == 0) {
    console.log(path);
    return;
  }

  // you can choose any ch from str in this blank
  // remaining str apart from ch will be the options for next blank(call)
  for (let i = 0; i < str.length; i++) {
    // if curr ch is same as prev ch skip it to avoid duplicates (str should be sorted
    if (i > 0 && str[i] == str[i - 1]) {
      continue;
    }
    // exclude current ch so that options for next blank doesnt include current ch
    permute(str.slice(0, i) + str.slice(i + 1), path + str[i]);
  }
}

function printPermutations(str) {
  str = [...str].sort().join("");
  permute(str, "");
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

inputArr = [];
rl.on("line", (input) => {
  inputArr.push(input);
});

rl.on("close", () => {
  // use your input array as required
  printPermutations(inputArr[0], "");
});
