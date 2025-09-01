//* 19) How would you handle high-precision decimal math in JS?

//? Using decimal.js package also we can solve this 

let Decimal = require('decimal.js');

let num1 = Decimal(0.1);
let num2 = Decimal(0.2);

// console.log(typeof num1, typeof num2);
// console.log(num1 + num2); // we have to use decimal package method also for addition and other operations also

let sum = num1.plus(num2);
// console.log(typeof sum, sum); // typeof sum is object so we have to convert into number

console.log(Number(sum) === 0.3);

