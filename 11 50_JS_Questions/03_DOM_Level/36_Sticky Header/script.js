const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY > 60) {
    navbar.classList.add("stick");
  } else {
    navbar.classList.remove("stick");
  }
});
