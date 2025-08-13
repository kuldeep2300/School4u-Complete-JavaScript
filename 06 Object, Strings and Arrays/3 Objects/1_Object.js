/* Example - 1 
let obj = {
  name: "Sanorita",
  age: 21,
  isMarried: false,
};

console.log(obj); */

//* SINGLETON OBJECT
// let car = {
//   brand: "lamborgini",
//   color: "red",
//   maxSpeed: 180,
//   "full name": "Kuldeep Verma",
//   stop: () => {
//     console.log("stopping the car...");
//   },
//   start: function () {
//     console.log("starting the car....");
//   },
// };

// console.log(car);
// car.start();
// console.log(car.brand);
// console.log(car.maxSpeed);
// console.log(car.color);
// console.log(car.stop()); // this method not return anything that's why it print undefined
// car.stop();

// console.log(car["brand"]);
// console.log(car["maxSpeed"]);
// console.log(car["color"]);

// car["start"]();
// console.log(car["full name"]);

//* CRATE USING CONSTRUCTOR
// let obj = new Object({
//   name: "Kuldeep",
// });

// obj.age = 21;

// let obj2 = {
//   fullname: "Kuldeep Verma",
//   age: 21,
//   isMarried: false,
// };

// obj2.profession = "btech";
// obj2["city"] = "kota";
// delete obj2.age;
// delete obj2.isMarried;

// console.log(obj);
// console.log(obj2);

//* THIS KEYWORD
let obj = {
  name: "Kuldeep Verma",
  age: 21,
  greet: function() {
    console.log(`Hello I am ${this.name}`);
  }
};

obj.greet();