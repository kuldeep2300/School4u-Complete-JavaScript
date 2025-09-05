//* 41. How would you compose multiple functions to transform data step-by-step (e.g., sanitize → trim → capitalize)? Scenario: You’re preparing user input before storing it. (Expected knowledge: Function composition, chaining, pipe or compose logic.)

const add2 = (num) => num + 2;
const multiply5 = (num) => num * 5;
const subtract10 = (num) => num - 10;

//? Chaining
// let result = subtract10(multiply5(add2(10)))
// console.log(result);

//? Compose -> right to left
//? Pipe -> left to right

function compose(...fns) {
  return function (val) {
    return fns.reduceRight((acc, currFun) => {
      return currFun(acc);
    }, val);
  };
}

function pipe(...fns) {
  return function (val) {
    return fns.reduce((acc, currFun) => {
      return currFun(acc);
    }, val);
  };
}

let result = compose(subtract10, multiply5, add2)(6);
let result2 = pipe(subtract10, multiply5, add2)(6);
// result(6)
console.log(result);
console.log(result2);