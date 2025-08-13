/* 1. Create a person object with properties: name, age, and city. 
Then
a) Log each property as: value of “name” property is “manas” using loop.
b) Add a new property called email to the person object.
c) Delete “city” property from person object. */

let person = {
  name: "Kuldeep",
  age: 21,
  city: "Kota",
};

// a) Log each property as: value of “name” property is “manas” using loop.

for(let index in person) {
    console.log(`${index} : ${person[index]}`);
}

// b) Add a new property called email to the person object.

person['email'] = 'kuldeep.dev@gmail.com';
console.log(person);

// c) Delete “city” property from person object.
delete person.city;
console.log(person);