//? 31. How can you update the DOM based on user input in real-time (e.g., live preview of a form)?

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')

const nameValue = document.querySelector('.nameValue')
const emailValue = document.querySelector('.emailValue')

nameInput.addEventListener('input', (e) => {
    nameValue.textContent = e.target.value;
})

emailInput.addEventListener('input', (e) => {
    emailValue.textContent = e.target.value;
})