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
    mon: { a, b },
  },
} = library;
console.log(a, b);
/

const arr = [7, 8, 9, 10, 11, 12, 13, 14];
const oldWay = [1, 2, arr[0], arr[1], arr[2]];
console.log(oldWay);
console.log(arr);
console.log(...arr);

const newWay = [1, 2, ...arr];
console.log(newWay);

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


const allBooks = [...library.fiction, ...library.mystery];
console.log(allBooks);


// deep copy and shallow copy
const arr1 = [1, 2, 3, 4];
const arr2 = arr1;
const arr3 = [...arr1];

arr1[0] = 5;
console.log(arr1);
console.log(arr2);
console.log(arr3);


// spread also works for strings
const str = "Anurag";
const letters = [...str];
console.log(letters);
console.log(...str);

// spread also works with objects
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

/*
const newLibrary = library;
newLibrary.name = "Wells B Library";
newLibrary.founder = "Herman B Wells";
newLibrary.foundedIn = 1991;
console.log(newLibrary);
console.log(library);


const newLibrary = { ...library, founder: "Herman B Wells", foundedIn: 1991 };
newLibrary.name = "Wells B Library";
console.log(library);
console.log(newLibrary);

const arr = [1, 2, 3, 4, 5];
const [a, b, ...others] = arr;
console.log(a, b, others);

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

const { fiction, mystery, ...otherProperties } = library;
console.log(name, otherProperties);
*/

/*
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 4);
add(2, 3, 4, 5, 6);


// default parameters
const allBookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = numPassengers * 1199
) {
  const booking = {
    flightNum: flightNum,
    numPassengers: numPassengers,
    price: price,
  };
  allBookings.push(booking);
};

createBooking("AY476", 2, 8949);
createBooking("AY787", 1, 2300);
createBooking("ED342", 3, 12348);

createBooking("LH123");
createBooking("PQ365", 4);

console.log(allBookings);

// Pass by value vs reference
const flight = "AY786";
const anurag = {
  name: "Anurag",
  passport: 874569,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "AY734";
  passenger.name = "Mr ." + passenger.name;
  if (passenger.passport === 874569) {
    console.log(
      `Correct passport, hence ${passenger.name} checked In ${flightNum}`
    );
  } else {
    console.log("Incorrect passport, checkIn declined");
  }
};

checkIn(flight, anurag);

// function is taking like this....
// const flightNum = flight;
// const passenger = anurag;

console.log(flight);
console.log(anurag);

// function accepting fucntions
const adder = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
};

const multiplier = function (...numbers) {
  let prod = 1;
  for (let i = 0; i < numbers.length; i++) {
    prod = prod * numbers[i];
  }
  return prod;
};

// higher order function
const calculator = function (fn, ...numbers) {
  console.log(fn.name);
  return fn(...numbers); // call back function
};

const sum1 = calculator(adder, 1, 2, 3, 4, 5);
const sum2 = calculator(adder, 1, 2, 3);
const prod1 = calculator(multiplier, 1, 2, 3, 4);
console.log(sum1, sum2, prod1);

// function returing functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Anurag");

greet("Hey")("Anurag");


const airline = "Etihad Airways";
const plane = "EY277";

// How to access strings
console.log(airline[0]);
console.log(plane[1]);
// console.log(plane[-1]); (not working for some reason, need to debug)
// console.log(plane[-4]);
console.log("ABCD"[1]);

// Strings are primitives, hence are not mutable
airline[0] = "A"; // simply ignores this
console.log(airline);

// length of string
console.log(airline.length);
console.log(plane.length);
console.log("ABCD".length);

// Find the index of word
console.log(airline.indexOf("r"));
console.log(airline.indexOf("ways")); // case-sensitive
console.log(airline.indexOf("had"));
console.log(airline.indexOf("a")); // first-occurence
console.log(airline.lastIndexOf("a")); // last-occurence

// picking part of the string (substring)
console.log(airline.slice(7));
console.log(airline.slice(0, 5));

// first and last words in a sentence
const sentence = "Quick brown fox jumped over a river";
console.log(sentence.slice(0, sentence.indexOf(" ")));
console.log(sentence.slice(sentence.lastIndexOf(" ") + 1));

console.log(airline.slice(-4));
console.log(airline.slice(-6, -3));

const checkMiddleSeat = function (seat) {
  const lastLetter = seat[seat.length - 1];
  // const lastLetter = seat.slice(-1);
  // const isBExist = seat.indexOf("B");
  // const isEExist = seat.indexOf("E");

  if (lastLetter == "B" || lastLetter == "E") {
    console.log("yayy i got a middle seat");
  } else {
    console.log("thank god i did not get a middle seat");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("ABCD"));
console.log(typeof new String("ABCD")); // created in heap
console.log(typeof "ABCD"); // created in stack

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in a name
const passenger = "aNuRag";
const passengerLower = passenger.toLowerCase(); // "anurag"
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing emails
const email = "anurag@accio.in";
const loginEmail = "    aNuRag@acCio.in \n \t";
console.log(email === loginEmail);

const trimmedEmail = loginEmail.trim();
const normalizedEmail = trimmedEmail.toLowerCase();
console.log(loginEmail);
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceRs = "300,72#";
const priceUs = priceRs.replace(",", ".").replace("#", "$");
console.log(priceUs);

const announcement =
  "All passengers come to boarding door 23, and start boarding door 23.";

console.log(announcement.replace("door", "gate")); // only replaces first occurence
console.log(announcement.replaceAll("door", "gate")); // replaces all the occurences

// Booleans
const place = "Boeing 777";
console.log(place.includes("ing"));
console.log(place.includes("Boa"));
console.log(place.startsWith("Bo"));
console.log(place.endsWith("77"));

// Simple exercise to check understanding
const checkBaggage = function (itemStr) {
  const baggage = itemStr.toLowerCase();
  console.log(baggage);
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are Not allowed to board");
  } else {
    console.log("Welcome Aboard !!");
  }
};

checkBaggage("I have a laptop, some FOOD and a pocket KniFe");
checkBaggage("Socks and Camera");
checkBaggage("Got some snacks and a gun for safety");

// Split and join
const joinedString = "A-Very---Nice--String";
console.log(joinedString.split("-"));

const fullName = "Virat Kohli";
const [firstName, lastName] = fullName.split(" "); // ["Virat", "Kohli"]
const newName = ["Mr.", firstName, lastName];
console.log(newName.join(" "));

const capitalizeName = function (fullName) {
  const eachName = fullName.toLowerCase().split(" ");
  const correctNames = [];

  for (let i = 0; i < eachName.length; i++) {
    const name = eachName[i];
    correctNames.push(name.replace(name[0], name[0].toUpperCase()));
  }

  console.log(correctNames.join(" "));
};

capitalizeName("virat kohli"); //=> "Virat Kohli"
capitalizeName("maheNdra siNgh dHoni"); //=> "Mahendra Singh Dhoni"

// Padding
const message = "Go to gate number 23!";
console.log(message.length);
console.log(message.padStart(30, "*"));
console.log("anurag".padStart(30, "*"));

console.log(message.padEnd(30, "*"));
console.log("anurag".padEnd(30, "*"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4); // "7384"
  console.log(str.length);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(43378463646467384));

// repeating
const name = "anurag";
const encrypted = "a3b4c5";
const decrypted = "aaabbbbbccccc";
console.log(name.repeat(5));
*/
