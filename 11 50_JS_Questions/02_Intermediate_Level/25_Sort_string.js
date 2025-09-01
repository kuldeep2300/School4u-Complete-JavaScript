//* 25) Write a javascript function that returns a passed string with letters in alphabetical order.

let str =  "I am kuldeep verma";

const orderString = (str) => {
    return str.toLowerCase().split(' ').sort().join(' ');
}

let result = orderString(str)
console.log(result);