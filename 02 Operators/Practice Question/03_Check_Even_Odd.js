//* 3. Get user to input a number using prompt and check whether even or odd using ternary operator.

const num = Number(prompt("Enter a number : "));

let result = (num % 2 === 0) ? "Even Number" : "Odd Number";
console.log(result);