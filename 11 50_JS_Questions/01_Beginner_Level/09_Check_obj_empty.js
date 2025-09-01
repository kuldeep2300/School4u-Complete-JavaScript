//* 9) Check if an object is empty (has no keys).

let person = {};

let length = Object.keys(person).length;
// console.log(length);

if (length > 0) {
    console.log('Object is not empty');
} else {
    console.log('Object is empty!!');
}
