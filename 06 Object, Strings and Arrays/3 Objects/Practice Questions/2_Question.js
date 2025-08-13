/* 2. Create a function that takes an object with firstName, middleName, lastName properties and returns the full name. */

function createFullName({ firstName, middlename, lastName }) {
  const fullName = `${firstName} ${middlename} ${lastName}`;
  return fullName;
}

let nameObj = {
  firstName: "Kuldeep",
  middlename: "Kumar",
  lastName: "Verma",
};

let fullName = createFullName(nameObj);
console.log(fullName);
