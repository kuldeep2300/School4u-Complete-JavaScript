//* Array Methods

//* 1) push() and pop() method
// let arr = [2, 4, 'kuldeep', 4, 7]

/* console.log(arr, arr.length);
let a = arr.push(999);
console.log(arr, a);

let b = arr.pop();
console.log(arr, b); */

//* 2) unshift() and shift() : work like push and pop but instead of arrays end it works on arrays starting
// let a = arr.unshift(9);
// console.log(arr, a);
// let b = arr.shift();
// console.log(arr, b);

//* 3) splice() and slice()
// let arr = [2, 4, 'kuldeep', 4, 7, 'alpha', 'beta', 'gamma']

// let newArr = arr.slice(1, 3);
// console.log(arr);
// console.log(newArr);

// let test = arr.splice(3, 2);
// console.log(arr, test);
// arr.splice(2, 1, 'kushagra')
// console.log(arr);
// arr.splice(2, 0, 'Muskan', 89, 99, 'Komal')
// console.log(arr);

// * 4) concat()

// let arr = [1, 2, 3];
// let arr2 = [4, 5, 6, 7];
// let arr3 = [8, 9, 10];

// let newArr = arr.concat(arr2, arr3);
// console.log(arr);
// console.log(newArr);

// CAN BE DONE SAME LIKE USING SPREAD OPERATOR - FHOD DO ARRAY KO USKE SARE ELEMENTS AA JAYENGE
// let newArr = [...arr, ...arr2, ...arr3];
// console.log(newArr);

// * 5) join(), includes(), toString(), indexOf(), reverse(), find()

// let arr = ['mango', 'apple', 'lichi']
// let test = arr.join(' And ');
// let test = arr.join();

// console.log(arr);
// console.log(test);
// console.log(typeof test);

// let test = arr.includes('lichi');
// console.log(test);

// let str = arr.toString()
// console.log(str, typeof str);

// let index = arr.indexOf('lichi');
// console.log(index);

// arr.reverse();
// console.log(arr);

// let test = arr.find((item) => {
//     return item === 'apple'
// })
// console.log(test);

// * 6) flat()

// let arr = [1, 2, 3, ['kuldeep', 'kushagra', ['manas', 'lal', ['kumar sahu']]]];
// let test = arr.flat();
// console.log(arr.flat(3));
// console.log(test);

// * 7) sort()
/* let arr = [10, 5, 1, 20];
arr.sort((a, b) => {
    // return a-b; // ascending order
    return b-a; // descending order
});
console.log(arr);
*/

// let heroes = ['spiderman', 'batman', 'hawkeye', 'ironman']
// console.log(heroes.sort()); 