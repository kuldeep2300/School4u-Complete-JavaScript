const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandParent.addEventListener("click", (event) => {
  console.log("GRAND PARENT");
  console.log("Target :", event.target);
  console.log("Current Target :", event.currentTarget);
  // event.stopPropagation();
});
// }, true); // also working for capturing phase 

// another event listener on parent
parent.addEventListener('click', (event) => {
  console.log('This is another event listener on parent');
})

parent.addEventListener("click", (event) => {
  console.log("PARENT");
  console.log("Target :", event.target);
  console.log("Current Target :", event.currentTarget);
  // event.stopPropagation();  // It stop propagation but does not stop the execution of another listener applied on same element that's why we have to use `stopImmediatePropagation() method`
  event.stopImmediatePropagation();  // applied with strict rules not execute further listener
});

// another event listener on parent - this will not run after above listener 
parent.addEventListener('click', (event) => {
  console.log('This is third event listener on parent');
})


child.addEventListener("click", (event) => {
  console.log("CHILD");
  console.log("Target :", event.target);
  console.log("Current Target :", event.currentTarget);
});


//* This Keyword
/* parent.addEventListener("click", function (event) {
  console.log("PARENT");
  console.log("Target :", event.target);
  console.log("Current Target :", event.currentTarget);
  // When we use this in event listener with a normal function then this represent the event.currentTarget element but if we use arrow function then this refers to window object.
  console.log(this);    
});
 */