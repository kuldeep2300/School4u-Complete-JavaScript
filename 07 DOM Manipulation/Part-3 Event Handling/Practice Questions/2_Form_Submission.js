/* 2) Create a simple form and display the submitted details on the webpage. Ensure that if any field is left empty, the form should not be submitted. */

const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!email.value || !name.value) {
        alert('Fill all the fields!');
        return;
    }
    console.log(name.value, email.value);
    form.reset();
})