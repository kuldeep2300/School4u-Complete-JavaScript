//* 1. Get user to input two number using prompt and print their possible arithmetic results.

const num1 = Number(prompt("Enter first number value : "));
const num2 = Number(prompt("Enter second number value : "));

const sum = num1 + num2;
const diff = num1 - num2;
const mul = num1 * num2;
const div = num1 / num2;
const mod = num1 % num2;
const pow = num1 ** num2;

console.log("Sum of 2 number : ", sum);
console.log("Difference of 2 number : ", diff);
console.log("Multiplication of 2 number : ", mul);
console.log("Division of 2 number : ", div);
console.log("Modulus of 2 number : ", mod);
console.log("Power of 2 number : ", pow);