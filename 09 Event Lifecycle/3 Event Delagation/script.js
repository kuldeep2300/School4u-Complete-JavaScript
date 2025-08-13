const boxes = document.querySelectorAll('.box');
const container = document.querySelector('.container');

container.addEventListener('click', (event) => {
    let target = event.target;
    if(target.className === 'box') {
        console.log(target.innerText);
    }
});

/* boxes.forEach(elem => {
    elem.addEventListener('click', () => {
        console.log(elem.innerText);
    })
}) */