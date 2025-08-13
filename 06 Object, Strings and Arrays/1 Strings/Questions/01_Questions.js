// 1.Create a program to take full name from user and generate a username start with @, followed by their full name and ends with underscore followed by the length of full name.

/* Example : Full Name : Muskan Kumari
@muskankumari_12 (length on name only not @)
*/

let fullName = prompt("Enter your full name");
let lowercase = fullName.trim().toLowerCase().replaceAll(' ','');
let length = lowercase.length;


let username = `@${lowercase}_${length}`;
console.log(username);