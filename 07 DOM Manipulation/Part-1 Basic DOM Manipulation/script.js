/* 5 phases of dom manupulation:

1. Understanding of DOM ✅
2. Selection of HTML Elements inside JS ✅
3. How to change or manupulate HTML in JS ✅
4. CSS Ko kaise change kar skte hai in JS ✅
5. Event Listeners (event ko kaise suna jaaaye) 
*/

//* HTML Manipulation and Selection
// let a = document.querySelector('h1');
// a.innerHTML = 'This is heading - 1';

// let b = document.querySelector('p');
// b.innerHTML = 'This is paragraph changed by JS'

//* CSS Manipulation and Selction
// let a = document.querySelector("h1");
// a.style.backgroundColor = "rgba(0, 255, 0)";
// a.style.color = "black";
// a.style.borderRadius = "5px";

// let b = document.querySelector("p");
// b.style.backgroundColor = "rgba(0, 255, 0)";
// b.style.color = "black";
// b.style.padding = "10px";
// b.style.borderRadius = "5px";

//* Event Listeners
let h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
  h1.innerHTML = "This is heading - 1";
  h1.style.backgroundColor = "rgba(0, 255, 0)";
  h1.style.color = "black";
  console.log('Heading is changed using event listener!');
});

