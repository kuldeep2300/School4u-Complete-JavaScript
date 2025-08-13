// Q.5- Create a simple calculator. Take two numbers and an operator (+, -, *, /) and calculate the result using switch.

let num1 = parseInt(prompt("Enter num1 value : "));
let num2 = parseInt(prompt("Enter num2 value : "));
let opr = prompt("Enter operator (+, -, *, /): ");

switch (opr) {
  case "+":
    console.log(`Addition of 2 numbers : ${num1 + num2}`);
    break;
  case "-":
    console.log(`Subtraction of 2 numbers : ${num1 - num2}`);
    break;
  case "*":
    console.log(`Multiplication of 2 numbers : ${num1 * num2}`);
    break;
  case "/":
    console.log(`Dividation of 2 numbers : ${num1 / num2}`);
    break;
  default:
    console.log("No valid operation!");
}
