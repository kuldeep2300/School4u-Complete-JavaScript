const button = document.querySelector("button");

const body = document.querySelector("body");

//? Question - 3) Solve first question by toogle css class.
// button.addEventListener("click", () => {
//   body.classList.toggle("change-theme");
// });

//? Question - 2) Solve first question by changing css class.
button.addEventListener("click", () => {
  if (body.className === "light") {
    body.className = "dark";
  } else {
    body.className = "light";
  }
});
