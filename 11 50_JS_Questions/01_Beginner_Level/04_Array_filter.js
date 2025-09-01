//* 4) Create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values

let arr = [1, 2, 3, "kuldeep", "mango", "apple", 50, 100, 35];

const filterArr = (arr) => {
  return arr.filter((elem) => typeof elem === "string");
};

const filterdArray = filterArr(arr);
console.log(filterdArray);