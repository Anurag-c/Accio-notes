/*
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


function calcAge(birthYear) {
  return 2023 - birthYear;
}

// Function declaration
const age = calcAge(2001);
console.log(age);

// Function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(2001);
console.log(age2);

// Function Declaration
function yearsUntilRetirement1(birthYear, firstName) {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement1(2001, "Anurag"));

// Function Expression
const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement2(2001, "Anurag"));

// Arrow Functions
const yearsUntilRetirement3 = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement3(2001, "Anurag"));

// arrow function are used mostly for one line function

function checkEven1(num) {
  return num % 2 == 0;
}

const checkEven2 = (num) => num % 2 == 0;

const checkEven2 = (num) => {
  return (num % 2) == 0;
}

const myInfoArr = [
  "Anurag",
  "Student",
  2023 - 2001,
  8128039044,
  ["Rahul", "Shiva", "Ram"],
];
console.log(myInfoArr);
console.log(myInfoArr[0], myInfoArr[1]);


const myInfoObj = {
  firstName: "Anurag",
  profession: "Student",
  birthYear: 2001,
  phone: 8128039044,
  friends: ["Rahul", "Shiva", "Ram"],
  calcAge: function () {
    this.age = 2023 - this.birthYear;
  },
};

// check whether a property/key exists
if (myInfoObj.age) {
  // undefined => false
  console.log(myInfoObj.age);
} else {
  console.log("Age doesnt exist hence I am calculating it");
  myInfoObj.calcAge();
}

console.log(myInfoObj);
console.log(myInfoObj.age);


console.log(myInfoObj);
console.log(myInfoObj.firstName, myInfoObj.age);
console.log(myInfoObj["firstName"], myInfoObj["age"]);

myInfoObj.location = "United States";
myInfoObj["instagram"] = "anurag_nampally";
console.log(myInfoObj);

console.log(
  `${myInfoObj.firstName} has ${myInfoObj.friends.length} friends, and ${myInfoObj.friends[0]} is his best friend`
);

// EXAMPLE QUESTION

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${
      john.fullName
    }'s (${john.bmi.toFixed(2)})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${
      mark.fullName
    }'s (${mark.bmi.toFixed(2)})!`
  );
}

// DESTRUCTURING ARRAYS

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);

// its easy to swap two variables
let primary = 12;
let secondary = 23;
console.log(primary, secondary);

[primary, secondary] = [secondary, primary];

console.log(primary, secondary);

// DESTRUCTURING OBJECTS

const library = {
  name: "Book Haven Library",
  location: "123 Main Street, Anytown, USA",
  categories: ["fiction", "non-fiction", "mystery", "drama"],
  fiction: ["FictionBook1", "FictionBook2", "FictionBook3"],
  mystery: ["mysteryBook1", "mysteryBook2", "mysteryBook3"],
  // order will buy two books from fiction
  order: function (fictionIdx1, fictionIdx2) {
    return [this.fiction[fictionIdx1], this.fiction[fictionIdx2]];
  },
};

// retrive 1st two fictional books
console.log(library.fiction[0], library.fiction[1]);
// using destructure
const [first, second] = library.fiction;
console.log(first, second);

// retrive 2nd and 4th categories
console.log(library.categories[1], library.categories[3]);
// using destructure
const [, two, , four] = library.categories;
console.log(two, four);

// how to return more than one value from a function
const [book1, book2] = library.order(1, 2);
console.log(book1, book2);


// nested destructuring
const nested = [2, 4, [5, [6, 7, 8]]];
const [, , [a, [b, c, d]]] = nested;
console.log(a, b, c, d);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


const library = {
  name: "Book Haven Library",
  location: "123 Main Street, Anytown, USA",
  categories: ["fiction", "non-fiction", "mystery", "drama"],
  fiction: ["FictionBook1", "FictionBook2", "FictionBook3"],
  mystery: ["mysteryBook1", "mysteryBook2", "mysteryBook3"],
  libraryHours: {
    mon: {
      open: 0,
      close: 24,
    },
    wed: {
      open: 10,
      close: 22,
    },
    fri: {
      open: 12,
      close: 20,
    },
  },
  // order will buy two books from fiction
  order: function (fictionIdx1, fictionIdx2) {
    return [this.fiction[fictionIdx1], this.fiction[fictionIdx2]];
  },
};

const { name, libraryHours, categories } = library;
console.log(name, libraryHours, categories);

// if you want different variable names
const { name: libraryName, libraryHours: hours, categories: tags } = library;
console.log(libraryName, hours, tags);

// default values
const { nonFiction = [], mystery = [], fiction = [] } = library;
console.log(nonFiction, fiction, mystery);

// nested object destructuring
const {
  libraryHours: {
    mon: { open, close },
  },
} = library;
console.log(open, close);
*/
