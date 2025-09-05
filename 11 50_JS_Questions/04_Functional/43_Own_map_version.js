//* 43. How do you implement your own version of .map() function on arrays?

let arr = [1, 2, 3, 4, 5, 6];

const squareLogic = (elem) => {
  return elem * elem;
};
const cubeLogic = (elem) => {
  return elem * elem * elem;
};
const diameterLogic = (elem) => {
  return 2 * elem;
};

function calculate(logicFn) {
  let outputArr = [];
  for (let elem of arr) {
    outputArr.push(logicFn(elem));
  }

  return outputArr
}

Array.prototype.ownMap = calculate;

let squareArr = arr.ownMap(squareLogic);
let cubeArr = arr.ownMap(cubeLogic);
let diameterArr = arr.ownMap(diameterLogic);
console.log(squareArr);
console.log(cubeArr);
console.log(diameterArr);

/* let squareArr = calculate(arr, squareLogic)
let cubeArr = calculate(arr, cubeLogic)
let diameterArr = calculate(arr, diameterLogic)

let result = arr.map(diameterLogic)
console.log(result);

console.log(squareArr);
console.log(cubeArr);
console.log(diameterArr);
 */


/* function square(arr) {
  let outputArr = [];
  for (let elem of arr) {
    outputArr.push(elem * elem);
  }
  return outputArr;
}

function cube(arr) {
  let outputArr = [];
  for (let elem of arr) {
    outputArr.push(elem * elem * elem);
  }
  return outputArr;
}

function diameter(arr) {
  let outputArr = [];
  for (let elem of arr) {
    outputArr.push(2 * elem);
  }
  return outputArr;
}

let squareArr = square(arr);
let cubeArr = cube(arr);
let diameterArr = diameter(arr);
console.log(squareArr);
console.log(cubeArr);
console.log(diameterArr);
 */