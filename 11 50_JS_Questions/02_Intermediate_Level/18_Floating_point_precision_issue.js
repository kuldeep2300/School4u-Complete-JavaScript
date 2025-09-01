//* 18) Explain floating-point precision issues in JavaScript.

console.log((0.1 + 0.2) === 0.3); // returning false

let sum = Number((0.1 + 0.2).toFixed(1)) // when we apply to fixed then it will convert result in string so we have to convert again it into number
console.log(sum, typeof sum);

console.log(sum === 0.3);
