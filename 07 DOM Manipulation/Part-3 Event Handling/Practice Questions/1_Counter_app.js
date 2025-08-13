/* 1) Build an increment–decrement counter similar to what you see in the shopping cart on Amazon or Flipkart. */

const decBtn = document.querySelector(".decBtn");
const incBtn = document.querySelector(".incBtn");
const countValue = document.querySelector(".countValue");

decBtn.addEventListener("click", () => {
  let value = Number(countValue.innerText);
  if (value <= 0) return;
  countValue.innerText = value - 1;
});

incBtn.addEventListener("click", () => {
  let value = Number(countValue.innerText);
  countValue.innerText = value + 1;
});
