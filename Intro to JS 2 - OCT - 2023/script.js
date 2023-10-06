// SWITCH CASE STATEMENTS

const day = "monday";

switch (day) {
  case "monday":
    console.log("plan course curriculum");
    console.log("Arrange a team meeting");
    break;

  case "tuesday":
    console.log("prepare videos for theory");
    break;

  case "wednesday":
  case "thursday":
    console.log("write examples for teaching");
    break;

  case "friday":
    console.log("do a reharsal for the class");
    break;

  case "saturday":
  case "sunday":
    console.log("enjoy the weekend!!!!");
    break;

  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("plan course curriculum");
  console.log("Arrange a team meeting");
} else if (day === "tuesday") {
  console.log("prepare videos for theory");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write examples for teaching");
} else if (day === "friday") {
  console.log("do a rehearsal for the class");
} else if (day === "saturday" || day === "sunday") {
  console.log("enjoy the weekend!!!!!");
} else {
  console.log("Not a valid day!!!");
}

// checking even or not using switch case
const a = 12;
switch (a % 2) {
  case 0:
    console.log("even");
    break;

  case 1:
    console.log("odd");
    break;
}

/*
function solve(mat, rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i == j && mat[i][j] == 0) {
        return false;
      }
      if (i != j && mat[i][j] != 0) {
        return false;
      }
    }
  }

  return true;
}
*/

// ARRAY METHODS

const arr = [1, 2, 3, 4];

// adding element at the end
arr.push(5);
console.log("Added 5 : ", arr);

// length
console.log(arr.length);

// remove last element
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);

// remove first element
arr.shift();
console.log(arr);

// add elements at the start
arr.unshift(1);
console.log(arr);
arr.unshift(4);
console.log(arr);

// subarray
const animals = ["ant", "bison", "camel", "duck", "elephant", "lion"];
console.log("start 2 until end: ", animals.slice(2));
console.log(animals); // slice will not change the array unlike other methods
console.log("start 2 until 3: ", animals.slice(2, 4));
console.log("start 1 until 4: ", animals.slice(1, 5));
console.log("start -2 until end: ", animals.slice(-2)); // do not use negative indexing, just for knowledge

// splice method
const months = ["Jan", "Feb", "Mar", "Apr", "Jun"];
months.splice(1, 3); // (startIdx, deleteCount)
console.log(months);

// remove an element at specified index
const removeAt = 3;
months.splice(removeAt, 1);
console.log(months);

// add an element at specified index
const addAt = 1;
months.splice(addAt, 0, "Jul"); // (startIdx, delCount, item)
console.log(months);

// reversing an array
const actual = ["one", "two", "three", "four"];
actual.reverse(); // reverse is inplace
console.log(actual);

// sorting an array
const numberArr = [5, 3, 2, 1, 4];
numberArr.sort();
console.log(numberArr);

const strArr = ["March", "Jan", "Feb", "Dec"];
strArr.sort(); // sorts the string in dictionary (lexicographical) order
console.log(strArr);

const numberStrArr = [5, "abc", 3, "def"];
// ["5", "3", "abc", "def"]
numberStrArr.sort();
console.log(numberStrArr);

// join
const joined = strArr.join("");
console.log(joined);
