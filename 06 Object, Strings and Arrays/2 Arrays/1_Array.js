let arr = [4, 5, 6, 7, 8];
let arr2 = ['apple', 'banana', 'mango', 'watermelon']
let arr3 = ['apple', 15, 'bhagalpur', 24, 'kuldeep']
let arr4 = ['apple', 25, 'mango', [2, 5, 6, 6]]

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);

let arr5 = new Array('spiderma', 'superman', 'batman');
console.log(arr5);

// let arr6 = new Array(20); // here we only set the size of array 20, 20 empty elements
let arr7 = [20];
let arr8 = new Array(20).fill(0);
console.log(arr8);
console.log(arr7);

console.log(arr7.length);
console.log(arr8.length);
console.log(typeof arr);

//* Arrays are mutable
let arr9 = [1, 2, 3, 4, 5]
console.log(arr9[0]);
console.log(arr9[1]);

arr9[0] = 100;
arr9[1] = 99;

console.log(arr9);