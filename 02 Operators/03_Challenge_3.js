//* Challenge 3:
// On a login page, verify the user's credentials: Check if username is not empty AND password is not empty (&& operator).
// If either is empty, display an error message: "Both fields are required."

let username = "Kuldeep";
let password = "kuldeep12345";

let messsage = (username && password) ? "Login Successfully!" : "Both fields are required";
console.log(messsage);