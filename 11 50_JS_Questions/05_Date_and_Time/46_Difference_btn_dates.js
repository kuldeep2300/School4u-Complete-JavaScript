//? 46. Calculate difference between two dates in the format of “_ years _ months _days _ hours _ minutes _ sec.

// console.log(date1.toString(), date2.toString());

//? Doing manually without the libary
// function takeDifference(start, end) {
//     let diff = (end - start) / 1000;

//     let years = Math.floor(diff / (60 * 60 * 24 * 365))
//     diff = Math.floor(diff % (60 * 60 * 24 * 365))

//     let months = Math.floor(diff / (60 * 60 * 24 * 30))
//     diff = Math.floor(diff % (60 * 60 * 24 * 30))

//     let days = Math.floor(diff / (60 * 60 * 24))
//     diff = Math.floor(diff % (60 * 60 * 24))

//     let hours = Math.floor(diff / (60 * 60))
//     diff = Math.floor(diff % (60 * 60))

//     let minutes = Math.floor(diff / (60))
//     diff = Math.floor(diff % 60)

//     let seconds = (diff)

//     return `${years} years ${months} months ${days} days - ${hours} ${hours > 1 ? "hours" : "hour"} ${minutes} ${minutes > 1 ? "minutes" : "minute"} ${seconds}`;
// }

//? Using the library luxon.js

let { DateTime } = require("luxon");

function takeDifference(start, end) {
  let startDate =  DateTime.fromISO(start);
  let endDate = DateTime.fromISO(end);

  let diff = endDate.diff(startDate, [
    "years",
    "months",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds",
  ]);

  let { years, months, days, hours, minutes, seconds } = diff;

  return `${years} ${years > 1 ? "years" : "year"} ${months} months ${days} days - ${hours} ${
    hours > 1 ? "hours" : "hour"
  } ${minutes} ${minutes > 1 ? "minutes" : "minute"} ${seconds} seconds`;
}

let startDate = "2025-09-01T00:00:00";
let endingDate = "2025-12-31T00:00:00";
let diff = takeDifference(startDate, endingDate);
console.log(diff);
