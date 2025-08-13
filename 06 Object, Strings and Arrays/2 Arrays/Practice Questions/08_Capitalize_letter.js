// 8. Capitalize the first letter of every word in a sentence.

let str = 'hello how are you i am kuldeep verma';

let capitalizeArr = str.split(' ').map((elem) => {
    return elem.charAt(0).toUpperCase() + elem.slice(1);
});

let capitalizeStr = capitalizeArr.join(' ');

console.log(capitalizeStr);