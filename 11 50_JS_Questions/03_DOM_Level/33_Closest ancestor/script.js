const child = document.getElementById('child')

child.addEventListener('click', (e) => {
    console.log(e.target.closest('.parent'));
})