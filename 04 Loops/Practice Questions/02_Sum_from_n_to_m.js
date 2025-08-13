// 2) Calculate the sum of numbers from ‘m’ to ‘n’.

let m = 1;
let n = 4;
let nSum = 0;

for(let i = m; i <= n; i++) {
    nSum += i;
}

console.log(`Sum of numbers from ${m} to ${n} : ${nSum}`);