//* 2) Calculate how many vowels and consonents are in a given string using for of loop

let string = "hello";
let vowelCount = 0, consonentCount = 0;

for(let letter of string) {
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        vowelCount++;
    } else {
        consonentCount++;
    }
}

console.log(`Vowels : ${vowelCount}`);
console.log(`Consonents : ${consonentCount}`);