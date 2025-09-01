//* 24) Write a JavaScript function that reverse a number.

let number = 54321;

const reverseNumber = (number) => {
  let numToStr = number.toString();
  let reverseNum = numToStr.split("").reverse().join("");
  return Number(reverseNum);
};

console.log(reverseNumber(number));
