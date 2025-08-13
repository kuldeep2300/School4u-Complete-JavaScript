/* 6. We have three variables a, b, c, d, a contains any number, b contains any string, c contains any object, and d contains any array. Can we create an array from all these four variables? If yes, How? */

let a = 5;
let b = "kuldeep";
let c = { name: "kushagra" };
let d = ['mango', 'apple'];

// let newArr = [a, b, c, ...d];

//* Using Array.of() method we can make a combination of different data types value into array

console.log(Array.of(a, b, c, d));
