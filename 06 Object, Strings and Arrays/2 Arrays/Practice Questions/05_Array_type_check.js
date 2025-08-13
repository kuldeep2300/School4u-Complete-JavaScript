// 5. How to check if given thing is array or not? How to convert other datatypes to array? What if we try to convert an object into an array?

// let test = 2;
//* Array.isArray() method

let test = ['manas'];
let result = Array.isArray(test);
console.log(result);

//* Array.form() method
let str = 'Kuldeep Verma';
let series = Array.from(str);
console.log(series);

// If we try to covert an object into an array
let object = [];
console.log(Array.from(object)); // we get an empty array