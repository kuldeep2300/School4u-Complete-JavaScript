//* 7. Take an email and password from the user. If the email or password is incorrect or does not match the stored values, display the message "Invalid email or password." If both email and password match the stored values, display "You are logged in successfully!"

let email = "kuldeep.dev@gmail.com";
let password = "kuldeep#1234";

let userEmail = prompt("Enter user email : ");
let userPassword = prompt("Enter user password : ");

let result = (userEmail === email && userPassword === password) ? alert("You are logged in successfully!") : alert("Invalid email or password!");

