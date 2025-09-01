//* 2) Find the combination of two arrays.

let arr1 = [1, 2, 3];
let arr2 = [5, 6, 7];

// let combinationArr = arr1.concat(arr2);
let combinationArr = [...arr1, ...arr2];
console.log(combinationArr);
