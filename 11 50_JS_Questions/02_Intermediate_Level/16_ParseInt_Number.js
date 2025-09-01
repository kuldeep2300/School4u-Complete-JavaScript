//* 16) What’s the difference between parseInt and Number()?

// console.log(parseInt('123.2342'));
// console.log(Number('123.3433'));

// console.log(parseInt('124.43px'));
// console.log(Number('124.43px')); 
//? NaN - It will try to convert entire string into number and if does not found number anywhere then return NaN while parseInt try to give number always.

//? We have Number type only not having any other type like float and double but using parseInt() and parseFloat() we can achieve that result also. In parseInt if in front part there is only one number exist then it will return this one value only but not give NaN, yeah if we start our string from character not on number then it will return NaN

// console.log(parseInt('1lsljksldj'));
// console.log(parseInt('fjdlkjfdfd1'));

//? ParseInt provide an addition argument by passing it we can get any value in hex, binary, decimal also while number does not provide extra arguement and it will not covert value in hex, binary or in other format also.

// console.log(parseInt('1010', 2));
// console.log(Number('1010', 2));

// console.log(parseInt('101', 16));


