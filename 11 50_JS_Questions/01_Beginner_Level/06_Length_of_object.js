//* 6) Write a function that returns the length of a given object (number of keys).

let obj = {
  name: "Kuldeep",
  age: 21,
  isMarried: false,
  city: "Kota",
  state: "Rajasthan",
  fullName: "Kuldeep Verma",
};

const getObjectLength = (object) => {
  let objKeys = Object.keys(object);
  return objKeys.length;
};

let length = getObjectLength(obj);
console.log(length);
