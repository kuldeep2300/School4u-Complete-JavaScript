//* 11. What will be the output of the following JavaScript code?

let a = 6;
let b = 3;
let c = "6";

a += b << 1;       // 12

let d = a & b;    // 0
let e = a | b;    // 15
let f = a ^ b;    // 15
let g = ~a;       // -13

let check = (a == c) && (d < e) || !(f === e);  // false

let result = check ? typeof g : --b;    // 2

console.log("a :", a);  // 12
console.log("b :", b);  // 2
console.log("c :", c);  // 6
console.log("d (a & b) :", d);  // 
console.log("e (a | b) :", e);
console.log("f (a ^ b) :", f);
console.log("g (~a) :", g);
console.log("check :", check);
console.log("result :", result);