//? 48. Calculate the user's age from their date of birth.

let dob = new Date('2003-12-10')
let currentDay = new Date();

let age = currentDay.getFullYear() - dob.getFullYear()
let monthDiff = currentDay.getMonth() - dob.getMonth();
let dayDiff =  currentDay.getDate() - dob.getDate()

// if(monthDiff < 0) {
//     age--;
// } else if(monthDiff == 0 && dayDiff < 0) {
//     age--;
// }

if((monthDiff < 0) || (monthDiff == 0 && dayDiff < 0)) {
    age--;
}

console.log('Your current age :', age);