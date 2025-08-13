const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//* Default bubbling phase - event travel from target to root element
// grandParent.addEventListener("click", () => {
//   alert("Grandparent par click hua");
// });

// parent.addEventListener("click", () => {
//   alert("Parent par click hua");
// });

// child.addEventListener("click", () => {
//   alert("Child par click hua");
// });

//* Now capturing phase is true default it is false, then event travel from root to target element.

// grandParent.addEventListener("click", () => {
//   alert("Grandparent par click hua - bubbling phase");
// });

// grandParent.addEventListener("click", () => {
//   alert("Grandparent par click hua - capturing phase");
// }, true);

// parent.addEventListener("click", () => {
//   alert("Parent par click hua - bubbling phase");
// }, false);

// parent.addEventListener("click", () => {
//   alert("Parent par click hua - capturing phase");
// }, true);

// child.addEventListener("click", () => {
//   alert("Child par click hua - bubbling phase");
// }, false);

// child.addEventListener("click", () => {
//   alert("Child par click hua - capturing phase");
// }, true);

//* Challenge : When clicking on the child first Parent should come then child and then grand parent 

// grandParent.addEventListener('click', () => {
//     alert("GrandParent par click hua - bubbling phase")
// })

// parent.addEventListener('click', () => {
//     alert("Parent par click hua - capturing phase")
// }, true)

// child.addEventListener('click', () => {
//     alert("Child par click hua - capturing phase")
// }, true)
