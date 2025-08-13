const firstBtn = document.querySelector(".firstBtn");

/* 
 * 2) PROPERTY BASED EVENT HANDLING OR DIRECT EVENT ASSIGNMENT
 /*In CSS inline styling have higher specificity but in JS inline event handling does not have higher specificity property method have higher specificity.
 /* But if we define same event two times here then it will only be override so don't avoid this practice.
*/

// firstBtn.onclick = () => {
//     console.log('Mai property method wala click hun');
// }

// firstBtn.onclick = () => {
//     console.log('Mene phle walw onclick ko override kr diya hai');
// }

// firstBtn.ondblclick = () => {
//     console.log('Mai double click property method se!');
// }

//* 3) LISTENER METHOD - It does not override same event, we can apply same event on an element more than one time.

let showResponse = () => {
  console.log("Event function is called!");
};

// Here we create one reference showResponse it will check if same event apply on same element then instead of showing 2 times it only show result on time both will not run.

// But we don't use reference and define the function inside of both listener then it will treat as different reference and run both event listener.
// firstBtn.addEventListener('click', showResponse)
// firstBtn.addEventListener('click', showResponse)

// firstBtn.removeEventListener('click', showResponse);

//* EVENT OBJECT
/* firstBtn.addEventListener('dblclick', (eventObj) => {
    console.log(eventObj.target);
}) */

//* MOUSE EVENTS
const box = document.querySelector(".box");
/*
box.addEventListener('click', ()=> {
    console.log('Click event listener working-1');
});

box.addEventListener('dblclick', () => {
    console.log('Double click event listener working-2');
})

box.addEventListener('mousedown', () => {
    console.log('Mouse Down event listener working-3');
})

box.addEventListener('mouseup', () => {
    console.log('Mouse up event listener working-4');
})

box.addEventListener('mouseenter', () => {
    console.log('Mouse enter event listener working-5');
})

box.addEventListener('mouseleave', () => {
    console.log('Mouse leave event listener working-6');
})

box.addEventListener('mouseover', () => {
    console.log('Mouse over event listener working-7');
})

box.addEventListener('mouseout', () => {
    console.log('Mouse out event listener working-8');
})

box.addEventListener('mousemove', () => {
    console.log('Mouse move event listener working-9');
})

box.addEventListener('contextmenu', () => {
    console.log('Context menu event listener working-10');
})

box.addEventListener('auxclick', () => {
    console.log('Auxclick event listener working-11');
}) */

//* KEYBOARD EVENTS
/* firstBtn.addEventListener('keydown', () => {
    console.log('Key down hui hai');
})

firstBtn.addEventListener('keypress', () => {
    console.log('Key pressed hui hai');
})

firstBtn.addEventListener('keyup', () => {
    console.log('Key up (released) hui hai');
})
*/

//* FORM EVENTS
const form = document.querySelector("form");
const submit = document.querySelector("button");
const nameInput = document.querySelector("#nameInput");

//? 1) Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submit ho gya!");
});

//? 2) Focus & blur
nameInput.addEventListener("focus", () => {
  console.log("Foucs on input field");
});

nameInput.addEventListener("blur", () => {
  console.log("Outside input field");
});

//* 3) Input Event
// nameInput.addEventListener("input", () => {
//   console.log(nameInput.value); // Likhte likhte check krega
// });

nameInput.addEventListener("change", () => {
  console.log(nameInput.value); // jb blur honge input fields se bhar pura likhne ke baad
});

//? 4) Touch screen event
box.addEventListener('touchmove', () => {
    console.log("Mobile screen touch move ho rha hai");
})

//* WINDOW EVENTS
window.addEventListener('scroll', () => {
    console.log('Scroll ho jayega');
})

window.addEventListener('load', () => {
    console.log('load ho jayega');
})

window.addEventListener('resize', () => {
    console.log('resize ho jayega');
})

//* CLIPBOARD EVENTS
const h1 = document.querySelector('h1');
h1.addEventListener('copy', () => {
    console.log(window.getSelection().toString());
})



