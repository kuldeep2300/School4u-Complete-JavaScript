//*  10. What will be the output of the following JavaScript code?

let x = 10;
let y = 5;
let z = "10";

x += y * 2;

let isEqual = x == z; // Loose comparison
let isStrictEqual = x === z; // Strict equal
let logicTest = (isEqual || isStrictEqual) && !(y > 10); // Logical + Comparison + NOT

let result = logicTest ? ++x : --y; // Ternary + pre-increment / pre-decrement

console.log("x:", x);   // 20
console.log("y:", y);   // 4
console.log("z:", z);   // "10"
console.log("isEqual:", isEqual);   // false
console.log("isStrictEqual:", isStrictEqual);   // false
console.log("logicTest:", logicTest);   // false
console.log("result:", result);     // 4
console.log("Type of z:", typeof z); // Unary operator typeof -> String