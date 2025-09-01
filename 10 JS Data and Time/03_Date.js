//? Date 
// let date = new Date();
// console.log(date); // represent time in date
// console.log(date.toISOString()); // convert date time into string
// console.log(date.toString());

// let date2 = new Date('2025-08-28T04:50:00Z')
// console.log(date2.toLocaleString());

// let date3 = new Date(2025, 8, 28, 6, 40, 30) // month having zero based indexing
// console.log(date3);
// console.log(date3.toLocaleString());

// let date4 = new Date(1756380181394);
// console.log(date4.toLocaleString());

//* Date Methods
/* let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth()); // In JS months are zero based indexed
console.log(date.getDate());
console.log(date.getDay()); // 0 - 6 (Sunday to saturday)
console.log(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());

console.log(date.getTimezoneOffset()); // return difference in minutes from UTC time and local time (UTC - LOCAL TIME) that's why return negative value in minutes for IST (Indian standard time)

console.log(date.getTimezoneOffset()/60);*/

//? Set Methods 

/* date.setFullYear(2030);
date.setMonth(7)
date.setDate(15)
console.log(date);
console.log(date.getFullYear(), date.getMonth(), date.getDate());
*/

//? Time Stamps
// let timeStamps = new Date().getTime();
// console.log(timeStamps);

// let timeStamps2 = Date.now();
// console.log(timeStamps2);

//? Formatting
// let date = new Date();
// console.log(date); // ISO format
// console.log(date.toISOString());
// console.log();

// // Above ISO String and below toString() result
// console.log(date.toString()); // IST (Indian standard time) - Local time zone
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log();

// // Into proper format
// console.log(date.toLocaleString());
// console.log(date.toUTCString());
// console.log(date.getUTCDate());
// console.log(date.getUTCDay());
// console.log();

// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

//? 
let date = new Date();
console.log(`Year : ${date.getFullYear()}, Month : ${date.getMonth() + 1}, Day : ${date.getDate()}`);