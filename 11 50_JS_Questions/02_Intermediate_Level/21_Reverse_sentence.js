//* 21) Create a function that reverse each word of a given sentence. E.g., Mai hun manas → sanam nuh iam

let sentence = "Mai hun kuldeep";

/* const reverseSentence = (sentence) => {
    let array = sentence.split(' ');
    console.log(array);
    let reverseString = array.reverse().join(' ');
    return reverseString;
};

let reverseStr = reverseSentence(sentence);
console.log(reverseStr);
 */

const reverseWords = (sentence) => {
  return sentence.split(" ").map((word) => {
    let reserveWord = word.split("").reverse().join("");
    return reserveWord;
  }).join(' ');
};

let result = reverseWords(sentence);
console.log(result);