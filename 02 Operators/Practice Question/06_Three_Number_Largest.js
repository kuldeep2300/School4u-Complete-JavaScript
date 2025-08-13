//* 6. Write a program to find the largest number between 3 numbers using ternary operator.

let a = 215;
let b = 116;
let c = 90;

let result = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(result);