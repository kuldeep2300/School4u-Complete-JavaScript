// 5) Simple Password Checker (Fixed Attempts)

let orgPassword = "Kuldeep@12";
let attempt = 3,
  count = 1;
let userPassword = null;

while (count <= attempt && userPassword !== orgPassword) {
  userPassword = prompt("Enter your password : ");
  if (userPassword === orgPassword) {
    console.log("Password matched successfully...");
  } else {
    console.log("Password does not match : no attempts left!");
  }

  alert(`Password mismatch : ${attempt - count} attempt left`);
  count++;
}
