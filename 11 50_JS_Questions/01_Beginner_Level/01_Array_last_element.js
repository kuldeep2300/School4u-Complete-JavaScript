//* 1) Create a function that returns the last element of an array.

// const arr = [1, 2, 3, 4, 5];
const arr = [1, 2, 3, 4, 5, 10, 100];

const returnLastArrElement = (arr) => {
  return arr[arr.length - 1];
};

console.log(`Last Element of arr : ${returnLastArrElement(arr)}`);
    