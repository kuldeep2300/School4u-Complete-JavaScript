//? 45. Validate that a user's selected date range is no longer than 30 days.

let nowDate = new Date('2025-08-01') // ISO format of date & time
let userDate = new Date('2025-08-31')
// let userDate = new Date('2025-12-01')

// user form bhar rha hai 4 month baad jbki usko 1 month ke andr andr form bhar lena chaiye tha

let diff = userDate - nowDate;
let numOfDays = Math.floor(diff / 1000 / 60 / 60 / 24)

if(numOfDays > 30) {
    console.log('Form date already ended..., you should fill the form under 30 days from nowDate!');
} else {
    console.log('Congratulations... your form is submitted successfully....');
}
