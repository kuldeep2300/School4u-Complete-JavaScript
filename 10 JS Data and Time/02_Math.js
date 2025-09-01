//* Math methods

//? 1) Math.round() method
/* console.log(Math.round(142.3))
console.log(Math.round(142.6))
console.log(Math.round(142.7))*/

//? 2) Math.floor() method
/* console.log(Math.floor(1));
console.log(Math.floor(1.54));
console.log(Math.floor(1.34));
console.log(Math.floor(2.95));
console.log(Math.floor(-2.92)); // in negative -2 is bigger value then -3 (it is less value) */

//? 3) Math.ceil() method
/* console.log(Math.ceil(1));
console.log(Math.ceil(1.54));
console.log(Math.ceil(1.34));
console.log(Math.ceil(2.95));
console.log(Math.ceil(-2.92)); // in negative -2 is bigger value then -3 (it is less value) */

//? 4) Math.abs() method
/* console.log(Math.abs(-3));
console.log(Math.abs(3));
console.log(Math.abs(0));
console.log(Math.abs(-0)); */

//? 5) Math.sqrt() method
// console.log(Math.sqrt(16));

//? 6) Math.pow() method
// console.log(2**3);
// console.log(2**8);

// console.log(Math.pow(2, 3));
// console.log(Math.pow(2, 8));

//? 7) Math.min() method
// console.log(Math.min(3, 1, 3, 0, 232));

//? 8) Math.max() method
// console.log(Math.max(3, 1, 3, 0, 232));

//! Most Important - 9) Math.random() method
// console.log(Math.floor(Math.random()));

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(generateRandomNumber(1, 10));
