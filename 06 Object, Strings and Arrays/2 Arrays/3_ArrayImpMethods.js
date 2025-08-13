//* 1) map() method
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((elem, index, arr) => {
// let newArr = arr.map((elem) => {
//   return elem * 2;
// });

//* We can also modify our orignal array values
// arr.map((elem, index) => {
//     arr[index] = elem * 2;
// })
// console.log("Original array :", arr);
// // console.log("New array :", newArr);

//* 2) forEach() : not return anything used only for iteration
// arr.forEach((elem, index) => {
//   // console.log(elem * 2);
//   arr[index] = elem * 2;
// });

// console.log(`Original array : ${arr}`);

//* 3) filter() : return value based on true or false only
// let arr = [1, 5, 7, 8, 9, 11, 15, 18, 20];
// let filterArr = arr.filter((elem) => {
//   return elem > 5;
// });

// console.log(filterArr);

//* 4) reduce() : evaluate result in a single term
let arr = [1, 2, 3, 4, 5];

let reuslt = arr.reduce((prevVal, currVal) => {
    return prevVal + currVal;
})

// Here it will set prevVal = 10, and first index value will be the currVal
// let reuslt = arr.reduce((prevVal, currVal) => {
//     return prevVal + currVal;
// }, 10)

console.log(reuslt);