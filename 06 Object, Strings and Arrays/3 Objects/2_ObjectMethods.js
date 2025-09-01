//* 1) Object.keys(object) - Get all keys

let obj = {
  name: "Kuldeep Verma",
  age: 21,
  isMarried: false,
  profession: "btech",
};

// let keys = Object.keys(obj);
// console.log(keys);

//* 2) Object.values(object) - Get all values

// let values = Object.values(obj);
// console.log(values);

//* NOTE - In object we can't iterate object using for-of loop and also can't apply array methods like map, forEach(), filter and reduce() but we can use for-in loop because it returns the index meaning keys of the object.

// for(let index in obj) {
//     console.log(`${index} : ${obj[index]}`);
// }

//* 3) Object.entries(obj) - Returns the entires in nested array in [key-value] pair
// let entries = Object.entries(obj);
// console.log(entries);

//* 4) Object.assing(target, source) - Copy source properties & methods into target object and return updated object.
// let source = {
//   name: "Kuldeep",
//   age: 21,
//   isMarried: false,
// };

// 1 - Way of doing this using spread operator
// let target = {...source};

// 2 - Way of using Object.assing() method
// let target = {};
// let modifiedTarget  = Object.assign(target, source);
// console.log(target);
// console.log(modifiedTarget);

//* 5) Object.freeze(obj) - Freeze object no adding, removing, and modifying, freeze pura sb kuch band kr deta hai

// let obj = {
//   name: "Kuldeep Verma",
//   age: 21,
//   isMarried: false,
//   profession: "btech",
// };

// Object.freeze(obj);

// obj.city = "Kota";
// obj.name = "Kushagra";
// delete obj.age;

//  Nothing is changed - here we only freeze object properties and methods but we can directly change the object because it is created using let
// obj = 'Kuldeep';    // Output : Kuldeep (if we assing usign const than it will give error but using const doesn't mean we can't change the object properties we can easily change object properties directly)

// console.log(obj);

//* 6) Object.seal(obj) : It only seal modfication like adding or delete properties and methods, but we can easily modify existing properties and methods, it will not seal completely like freeze.

// let obj = {
//   name: "Kuldeep Verma",
//   age: 21,
//   isMarried: false,
//   profession: "btech",
// };

// Object.seal(obj);

// obj.city = "Kota"; // ❌
// delete obj.age; // ❌
// obj.name = "Kushagra Kumar Verma";

// console.log(obj);

//* 7) ObjName.hasOwnProperty(key) : Return Boolean result, check object have specified key or not, doesn't modify original object.

// let obj = {
//   name: "Kuldeep Verma",
//   age: 21,
//   isMarried: false,
//   profession: "btech",
// };

// console.log(obj.hasOwnProperty("name"));
