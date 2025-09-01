const passwordInput = document.getElementById('password')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'
    button.innerText = passwordInput.type === 'password' ? 'Show' : 'Hide'
})