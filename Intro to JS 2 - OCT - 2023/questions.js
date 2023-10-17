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
