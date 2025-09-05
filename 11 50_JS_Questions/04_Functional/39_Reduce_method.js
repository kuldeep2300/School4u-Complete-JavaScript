//* 39. How do you use .reduce() to calculate the total price in a shopping cart?

let arr = [1, 2, 3, 4, 5];

// let total = arr.reduce((acc, elem) => elem + acc);
let total = arr.reduce((acc, elem) => {
  return elem + acc;
}, 10);
console.log(total);
