const listContainer = document.querySelector(".listContainer");

listContainer.addEventListener("click", (event) => {
  let target = event.target;
  if (target.className === "listItem") {
    target.style.textDecoration = "line-through";
  }
});
