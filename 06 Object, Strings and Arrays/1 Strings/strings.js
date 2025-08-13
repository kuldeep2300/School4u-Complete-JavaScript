// Methods
// //* 1) toUppercase() and toLowercase()
// let str = "     Hello   ";
// let uppercase = str.toUpperCase();
// let lowercase = str.toLowerCase();
// // console.log(str, uppercase, lowercase);

// //* 2) trim() 
// let trimmedStr = str.trim();
// console.log(str);
// console.log(trimmedStr);

//* 3) concat() 
// let firstname = "Kuldeep";
// let middlename = "Kumar";
// let lastname = "Verma"

// let fullName = firstname.concat(middlename, lastname)
// console.log(fullName);

//* 4) includes(), indexOf() and charAt()
// let str = "I am a boy"
// let check = str.includes('boy')
// console.log(check);
// console.log(str.indexOf("a"));
// console.log(str.indexOf("z"));
// console.log(str.charAt(7));

//* 5) replace(old, new) and replaceAll(old, new)
// let str = "I am a boy and I am a boy again"
// let modifyStr1 = str.replace("boy", "girl");
// console.log(modifyStr1);
// let modifyStr2 = str.replaceAll("boy", "girl");
// console.log(modifyStr2);

//* 6) slice(start, end) and split()
// let username = "@kuldeepverma";
// console.log(username.slice(1));
// console.log(username.slice(8, 13));

// console.log(username.slice(-5, 13));
// console.log(username.substring(-5, 13)); // substring don't effect with negative index it always start from 0 based index that's the main difference between slice and substring

// let str = "mango banana apple";
// let splitStr = str.split(' ');
// console.log(splitStr);