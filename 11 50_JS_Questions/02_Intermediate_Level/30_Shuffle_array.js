//? 30. Write a javascript program to shuffle an array.

const shuffleArr = (arr) => {
  arr.forEach((element, index) => {
    //? Large logic
    // let randomNum = Math.floor(Math.random() * arr.length);
    // let temp = arr[index];
    // arr[index] = arr[randomNum];
    // arr[randomNum] = temp;

    //? One line logic - using array destrucing by changing variable
    // Ex : [b, a] = [a, b];  -> Now a value will be stored in b and b value will be stored in a
    
    let randomNum = Math.floor(Math.random() * arr.length);
    [arr[randomNum], arr[index]] = [arr[index], arr[randomNum]];
  });

  console.log(arr);
};

let arr = [1, 2, 3, 4, 5];
shuffleArr(arr);
