let box = document.querySelector("p");
let onButton = document.querySelector(".onButton");
let offButton = document.querySelector(".offButton");

box.style.borderRadius = '10px';

onButton.addEventListener("click", () => {
  //   box.classList.remove("rotate");
  void box.offsetWidth;
  box.classList.add("rotate");
});

offButton.addEventListener("click", () => {
  void box.offsetWidth;
  box.classList.remove("rotate");
});
