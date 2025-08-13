// 1.For an array with marks of students find the average marks of the entire class.

let arr = [15, 5, 10];

let sum = arr.reduce((acc, value) => {
    return acc + value;
})
let average = sum/arr.length;
console.log(`sum : ${sum}`);
console.log(`average : ${average}`);