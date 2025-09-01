//? 32. How would you handle form validation in real time and show error messages dynamically?

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");

nameInput.addEventListener("input", (e) => {
  let name = e.target.value;
  if (name.length < 3) {
    nameError.textContent = "Name must be 3 characters long...";
  } else {
    nameError.textContent = "";
  }
});

emailInput.addEventListener("input", (e) => {
  let email = e.target.value;
  if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Invalid email";
  } else {
    emailError.textContent = "";
  }
});

passwordInput.addEventListener("input", (e) => {
  let password = e.target.value;
  if (password.length < 6) {
    passwordError.textContent = "Password at least 6 characters long...";
  } else {
    passwordError.textContent = "";
  }
});
