const smallCursor = document.querySelector(".smallCursor");
const shadowCursor = document.querySelector(".shadowCursor");

let mouseX;
let mouseY;
let animationId = null;
let timer = null;

document.addEventListener("mousemove", (eventObj) => {
  mouseX = eventObj.clientX;
  mouseY = eventObj.clientY;
  smallCursor.style.left = mouseX + "px";
  smallCursor.style.top = mouseY + "px";

  if (!animationId) {
    animateShadowCursor();
  }

  clearTimeout(timer);
  timer = setTimeout(() => {
    cancelAnimationFrame(animationId);
    animationId = null; // We have to also make it null so that after shadowCursor stop then if small cursor move again then animateShadowCursor() function can be run.
  }, 2000);
});

function animateShadowCursor() {
  let currentX = parseFloat(shadowCursor.style.left) || 0;
  let currentY = parseFloat(shadowCursor.style.top) || 0;

  let distanceX = mouseX - currentX;
  let distanceY = mouseY - currentY;

  shadowCursor.style.left = currentX + distanceX * 0.09 + "px";
  shadowCursor.style.top = currentY + distanceY * 0.09 + "px";

  console.log(currentX, currentY);

  animationId = requestAnimationFrame(animateShadowCursor); // It returns an id based on that we will stop it becasue in 1sec it run 60 times.
}
