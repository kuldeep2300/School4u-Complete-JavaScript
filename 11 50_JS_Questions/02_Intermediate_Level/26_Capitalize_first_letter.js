//? 26. Write a Javascript function that accepts a string as a parameter and conversts the first letter of each word of the string in upper case.

const toCapitalizeStr = (str) => {
  let strArr = str.split(" ");
  let updatedArr = "";

  for (let str of strArr) {
    updatedArr += str.charAt(0).toUpperCase() + str.slice(1) + " ";
  }

  return updatedArr;
};

let str = "i am kuldeep verma";
console.log("Capitalize String :", toCapitalizeStr(str));
