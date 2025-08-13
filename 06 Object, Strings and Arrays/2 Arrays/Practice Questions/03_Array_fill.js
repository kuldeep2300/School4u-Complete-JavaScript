// 3. Create an array with the given length (n) and store natural numbers from 1 to n.

let n = 25;
let arr = new Array(25).fill(0);

// for(let i = 0; i < arr.length; i++) {
//     arr[i] = i+1;
// }

arr.forEach((elem, index) => {
  arr[index] = index + 1;
});

console.log(arr);
