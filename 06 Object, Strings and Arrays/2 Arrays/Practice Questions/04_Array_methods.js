/* 4. Consider an array of mcu heroes ([ironman, captain, black widow, wanda, hulk, black panther]). 
Now:
a) Add spiderman at the end and thor at the start.
b) Remove black widow and add hawkeye in its place.
c) Check whether captain is present in the array.
 */

let heroes = ['ironman', 'captain', 'black widow', 'wanda', 'hulk', 'black panther'];

// a) Add spiderman at the end and thor at the start.
heroes.push('spiderman');
heroes.unshift('thor');
console.log(heroes);

// b) Remove black widow and add hawkeye in its place.
console.log(heroes.indexOf('black widow'));
heroes.splice(3, 1, 'hawkeye');
console.log(heroes);

// c) Check whether captain is present in the array.
console.log(heroes.includes('captain'));
console.log(heroes.indexOf('captain'));
console.log(heroes.find((item) => item === 'captain'));


