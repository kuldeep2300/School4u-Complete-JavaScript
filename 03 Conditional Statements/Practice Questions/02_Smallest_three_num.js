//* Q.2- Find the smallest of three numbers. Numbers are given by the user.

let num1 = Number(prompt("Enter first number value : "));
let num2 = Number(prompt("Enter second number value : "));
let num3 = Number(prompt("Enter third number value : "));

if (num1 < num2 && num1 << num3) {
  console.log(`Num1 ${num1} is smallest number among three numbers.`);
} else if (num2 < num3) {
  console.log(`Num2 ${num2} is smallest number among three numbers.`);
} else {
  console.log(`Num3 ${num3} is smallest number among three numbers.`);
}
