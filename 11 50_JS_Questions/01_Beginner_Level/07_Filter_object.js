//* 7) In an array of objects filter out those objects which have gender's value male.

const obj = [
  {
    name: "Kuldeep",
    age: 21,
    gender: "male",
  },
  {
    name: "Kushagra",
    age: 21,
    gender: "male",
  },
  {
    name: "Sonia",
    age: 25,
    gender: "female",
  },
  {
    name: "Rakshita Meena",
    age: 18,
    gender: "female",
  },
  {
    name: "Vishesh",
    age: 17,
    gender: "male",
  },
];

const filterObject = obj.filter((person) => person.gender === "male");
console.log(filterObject);
