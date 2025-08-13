// 6) Create a program to find the factorial of ‘n’.

let n = 5,
  forFact = 1;

for (let i = 1; i <= n; i++) {
  forFact *= i;
}

console.log("Using For Loop : "+forFact);

let i = 1,
  whileFact = 1;
while (i <= n) {
  whileFact *= i++;
}

console.log("Using while loop : "+whileFact);

let j = 1;
doFact = 1;
do {
  doFact *= j++;
} while (j <= n);

console.log("Using Do while loop : "+doFact);
