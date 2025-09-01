const sidebar = document.querySelector(".sidebar");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  sidebar.classList.toggle("showSidebar");

//   console.log(sidebar);
});
