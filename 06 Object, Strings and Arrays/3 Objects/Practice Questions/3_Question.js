/* 3. Write a function that takes object and returns the number of properties in an object */

function keys(obj) {
    return Object.keys(obj);
}

let nameObj = {
  firstName: "Kuldeep",
  middlename: "Kumar",
  lastName: "Verma",
};

console.log(keys(nameObj));