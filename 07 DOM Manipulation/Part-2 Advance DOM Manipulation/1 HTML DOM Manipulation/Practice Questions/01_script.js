// 1. Create a paragraph with text “mai tumse pyar nahi karta hun” and add background color to black and font color to green using javascript.

const p = document.createElement('p');
p.innerText = 'mai tumse pyar nahi karta hun';
p.setAttribute('style', 'background-color: black; color: green; padding : 20px');

// const div = document.querySelector('div');
// div.append(p);

const body = document.querySelector('body');
body.append(p)

// p.style.backgroundColor = 'black';
// p.style.color = 'green';
// p.style.padding = '20px';