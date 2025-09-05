/* 

Imperative forEach v/s Declarative forEach
Imperative map v/s Declarative map
Imperative filter v/s Declarative filter 
Imperative reduce v/s Declarative reduce
Imperative every v/s Declarative every
Imperative find v/s Declarative find 
Sort

*/

//? Imperative Programming
/* let arr = [1, 2, 3, 4, 5];
let double = [];

for (let i = 0; i < arr.length; i++) {
  double.push(arr[i] * 2);
  console.log(double);
}

console.log();
console.log(double); */

//? Declarative Programming
// let arr = [1, 2, 3, 4, 5]

// let double = arr.map(elem => elem * 2)

// let double = arr.map(elem => {
//     return elem * 2;
// })

// console.log(double);

//* 1) Pure Function

// const sum = (a, b) => a + b;

// let result = sum(1, 2)
// console.log(result);

//? Impure function
// let total = 0;

// function increment() {
//     total++;
// }

// increment();
// increment()
// console.log(total);

//* 2) Immutability

//? String
// const str = 'kuldeep'
// str[0] = 'm'
// console.log(str[0]);

//? Object - In functional programming instead of changing mutable data types try to use immutability concepts also in mutable objects

// const user = { name: "Kuldeep Verma", age: 21 };

// function replaceName(name) {
//     // user.name = name; // this is mutability
//     const newUser = {...user, name}  // It will override the first object property - Immutability
//     return newUser;
// }

// console.log(user);
// let newObj = replaceName('Kushagra Verma')
// console.log(user);
// console.log(newObj);

//? Array
// Example - 1
// const arr = [1, 2, 3, 4, 5]

// arr[0] = 100
// console.log(arr);

// Example - 2
// const arr = ['apple', 'banana', 'mango']

// function addItem(item) {
//     // arr.push(item) // Mutability
//     const newArr = [...arr, item]
//     return newArr;
// }

// console.log(arr);
// let newArr = addItem('watermelon')
// console.log(arr);
// console.log(newArr);

// Example - 3
// const arr = ['apple', 'banana', 'mango']

// function removeLastItem(arr) {
//     let newArr = arr.slice(0, -1)
//     return newArr
// }

// console.log(arr);
// let newArr = removeLastItem(arr)
// console.log(arr);
// console.log(newArr);

//* 3) Declarative Approach - See above example of Imperative & Declarative

//* 4) ❌ Avoid Share state - Here its managing 2 states together like function calling and also total value updatation

// let total = 0;

// function addAmount(amount) {
//   total += amount;
// }

// addAmount(100);
// addAmount(100);
// console.log(total);

//* 5) Avoid Side Effects - Avoiding meaning only using functional programming it does not include interacting with bom.

/* function capitalizeLetter(str) {
  let newStr = str.charAt(0).toUpperCase() + str.slice(1);
  return newStr;
  //? Side effect instead of using pure function here we are using bom feature printing on console or using alert we should avoid doing this
  // alert(newStr)
  // console.log(newStr);
} */

/* let newStr = capitalizeLetter("kuldeep");
console.log(newStr); */

//* 6) Reuse & Compose - Build small resuable functions then compose them together

// let name = "Kuldeep Verma"

// let toLowerCase = str => str.toLowerCase()
// let replaceAll = str => str.replaceAll(' ', '')
// let atTheRate = str => "@"+str;

// // console.log("@"+name.toLowerCase().replaceAll(' ', '')); Instead of doing this we

// console.log(atTheRate(replaceAll(toLowerCase(name))));

//* 7) Don't Iterate (Imperatively) - Avoid for, while, etc, and use map, filter & reduce.

/* let evenNum = [];
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//? Use filter, map, forEach
let evenArr = nums.filter(elem => elem % 2 === 0)
console.log(evenArr); 
 */

//? Avoid using this
/* for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evenNum.push(nums[i]);
  }
}

console.log(evenNum); */

//* 8) Loose Coupling

/* Coupling refers to how dependent one piece of code is on another.
Loose coupling means less dependent, Keep functions and modules independent. 
*/

//? Tightly Coupled
/* function getUser() {
  return fetch("https://api.example.com/user").then((res) => res.json());
}

function getProduct() {
  return fetch("https://api.example.com/product").then((res) => res.json());
}

function getRating() {
  return fetch("https://api.example.com/rating").then((res) => res.json());
}

//? Loosely Coupled
let api = "https://api.example.com/";
function getData() {
  return fetch(`${api}/user`).then((res) => res.json());
}
 */

//* 9) First class function and higher order function
//! First class function is basically super set, and hof(higher-order function) & callback function are the subsets of the first class function. All hof are first class function, but all first class functions are not hof, because if a function is not taking any argument then it will be treated as normal function not as a higher order function.

//! Similary all callback functions are hof functions, but all first class functions are not callback functions.
/* 
function greetHello() {
  return "Hello";
}

function greetNamaste() {
  return "Namaste";
}

function greetWithName(callback, name) {
  return callback() + " " + name;
}

let result = greetWithName(greetHello, 'Kuldeep Verma')
let result = greetWithName(greetNamaste, 'Kuldeep Verma')
console.log(result); */

//* 10) Every and find methods
/* 
* Every return true if all elements satisfies the condition otherwise return false.

* Find method find the first satisfying element in the array then return true if it find element, otherwise it will return undefined instead of false, it will return undefined not false.

*/
