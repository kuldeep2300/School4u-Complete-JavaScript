//? 47. Add or subtract n days from a given date. (E.g., Add 7 days to "2025-05-01“)

let n = 25;

let startingDate = new Date('2025-09-01T08:09:00.000Z')

// let newDateTimeStamps = startingDate.getTime() + n * 24 * 60 * 60 * 1000;
let newDateTimeStamps = startingDate.getTime() - n * 24 * 60 * 60 * 1000;
console.log(newDateTimeStamps);

let newDate = new Date(newDateTimeStamps)
console.log(newDate);



