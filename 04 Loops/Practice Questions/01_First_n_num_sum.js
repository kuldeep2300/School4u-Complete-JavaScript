//* 1) Calculate sum of first ‘n’ numbers.

let n = Number(prompt("Enter value of n : "));
let nSum = 0;

for(let i = 1; i <= n; i++) {
    nSum += i;
}

console.log(`Sum of first ${n} numbers : ${nSum}`);

