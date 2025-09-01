//* 23) How would you check if a number is an integer?

//? In Number object we have in method isInteger which will return true if value is integer or return false if not.
//? Or we can also check using by dividing a number with 1 if we get remainder is equal to zero then it is integer otherwise for floating point number is not divisble completely by 1 it will return false.

// let num = 124;
let num = 124.4343;

console.log(Number.isInteger(num));
console.log(num % 1 === 0);