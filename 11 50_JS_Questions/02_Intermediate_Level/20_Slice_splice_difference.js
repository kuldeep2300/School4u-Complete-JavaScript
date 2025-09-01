//* 20) What is the difference between slice and splice?

//? 1) Slice work on both array and string, while splice work only on array but we can also use it on string by converting string into array then using splice method on them.

//? 2) Slice method does not change in the original array and return the slice part of the array, while splice method return only deleted elements in array otherwise we don't delete any element then it will return empty array but it will change the original array values okay.

//? 3) Slice only give a part of string but splice can add element, delete element and also take a part of string also it can perform all the operation.


let arr = [1, 2, 3, 4, 5];

// console.log(arr.slice(1));
// console.log(arr.slice(1, 3));
console.log(arr.slice(-4, -2)); // it work on both array or string

// arr.splice(-3, 0, "kuldeep"); // it work only array not on string
// console.log(arr);
// arr.splice(1, 0, 12, 'kuldeep', 'kushagra')
// arr.splice(1, 2);
// arr.splice(1, 2, 'kuldeep', 'kushagra')
// console.log(arr);
