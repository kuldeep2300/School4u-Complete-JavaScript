//* 22) In an array of numbers and strings, only add those numbers which are not strings.

let arr = [1, 2, "kuldee", "kushagra", [1, 2], 7, 2];

//! We have to define a variable with 0 or null if we don't define it the its value will be undefined and adding anything in undefined will return NaN
let sum = 0;

for (let value of arr) {
  if (typeof value === "number") sum += value;
}

console.log(sum);
