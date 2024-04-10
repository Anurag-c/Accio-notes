// Variable Practice Question 1
// Link: https://course.acciojob.com/idle?question=2180cf80-db05-4bb0-894d-d46967d5f251
const a = 10;
console.log(`My num is ${a}`);
// console.log("My num is " + a);

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
const input = 8;
let i = 1;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;
console.log(`${input} x ${i} = ${input * i}`);
i++;

// Circle Area-Perimeter
// Link: https://course.acciojob.com/idle?question=f6f6fc43-493d-4c2e-8cfd-e07f3acad1e8
rl.on("line", (radius) => {
  //Write your code here
  const PI = 3;
  const area = PI * radius * radius;
  const peri = 2 * PI * radius;
  console.log(area);
  console.log(peri);
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
