//? 28. Write a javascript function to get the number of occurrences of each letter in specified string.

const getOccurences = (str) => {
  let obj = {};

  let strArr = str.split("");

  for (let char of strArr) {
    if (!obj.hasOwnProperty(char)) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }

  return obj;
};

let str = "kuldeep verma";

let result = getOccurences(str);
console.log(result);