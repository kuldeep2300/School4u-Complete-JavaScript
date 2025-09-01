//* 13) Write a function that checks if all elements in an array are numbers.

let arr = ["kuldeep", 1, 2, 3, [1, 2, 3], "kushagra"];
// let arr = [1, 2, 3];

const checkNumbers = (arrays) => {
  //? 1st way
  /* let isNumbers = true;
  arrays.forEach((elem) => {
    if (typeof elem !== "number") {
      isNumbers = false;
    }
  });

  return isNumbers; */

  //? 2nd way
  return arrays.every((elem) => typeof elem === "number");
};

// const result = checkNumbers(arr);
console.log(checkNumbers(arr));
