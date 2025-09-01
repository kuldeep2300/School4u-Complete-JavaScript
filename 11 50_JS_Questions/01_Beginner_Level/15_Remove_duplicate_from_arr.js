//* 15) Create a function that removes duplicate values from an array.

let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 1, 1];

// let set = new Set([...arr]);
// let uniqueArr = [...set];
// console.log(set);
// console.log(uniqueArr);

function removeDuplicate(arr) {
  //? 1st way
  // let set = new Set(arr);
  // return [...set];

  //? 2nd way
  let uniqueArr = arr.filter((elem, index) => {
    return arr.indexOf(elem) === index;
  });

  return uniqueArr;
}

let uniqueArr = removeDuplicate(arr);
console.log(uniqueArr);
