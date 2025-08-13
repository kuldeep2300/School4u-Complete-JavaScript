const openModalBtn = document.querySelector(".openModalBtn");
const modalContainer = document.querySelector(".modalContainer");


openModalBtn.addEventListener("click", (event) => {
  modalContainer.style.display = "flex";
});

modalContainer.addEventListener("click", (event) => {
  let target = event.target;
  if (target.className === "modalContainer") {
    modalContainer.style.display = "none";
  }
});
