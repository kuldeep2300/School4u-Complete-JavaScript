/* 2. Take a string and a character from the user and:
a)count how many times that character appears in the string.
b) Case-Insensitive Version
c)Find All Occurrence Positions */

let str = prompt("Enter a string");
let char = prompt("Enter a character only");

// a) Solution b) case insensitive

let count = 0;

/* for(let ch of str) {
    if(char.toLowerCase() === ch.toLowerCase()) {
        count++;
    }
}
 */

// c) find all occurrences
for(index in str) {
    if(str[index].toLowerCase() === char.toLowerCase()) {
        console.log("occurrence position :", index);
        count++;
    }
}

console.log(`Count: ${count}`);