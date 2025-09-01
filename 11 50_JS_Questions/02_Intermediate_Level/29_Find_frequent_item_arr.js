//? 29. Write a javascript program to find the most frequent item of an array.

const frequentItem = (arr) => {
  let frequObj = {};

  arr.forEach((element) => {
    if (frequObj.hasOwnProperty(element)) {
      frequObj[element]++;
    } else {
      frequObj[element] = 1;
    }
  });

  let maxFrequency = Math.max(...Object.values(frequObj));
  
  let frequArr = Object.entries(frequObj)

  let filteredArr  = frequArr.filter((element) => element[1] === maxFrequency);
  console.log(filteredArr);
};

let arr = [1, 2, 3, 4, 1, 2, 2, 2, 4, 5, 6, 2, 3, 3, 4, 3, 3];
// let arr = [1,2, 3, 4];
frequentItem(arr);
