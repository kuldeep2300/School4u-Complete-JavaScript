let obj = {
  name: "Kuldeep Verma",
  age: 21,
  isMarried: false,
  profession: "btech",
};

let { name, age, isMarried } = obj;

console.log(name, age, isMarried);

let arr = [1, 2, "kuldeep", { name: "Kushagra" }];

let [, , , item4] = arr;
let [item1, item2, item3] = arr;
console.log(item4);
console.log(item1, item2, item3);
