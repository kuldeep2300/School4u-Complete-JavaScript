//? 27. Write a javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

const getArrayElements = (arr, n) => {
    if(!n) {
        return arr[0];
    } else if(n > arr.length) {
        console.log(`Does not have ${n} elements in the array!`);
    } else {
        return arr.slice(0, n)
    }
}

let result = getArrayElements([2, 3, 4, 5], 3);
console.log(result);