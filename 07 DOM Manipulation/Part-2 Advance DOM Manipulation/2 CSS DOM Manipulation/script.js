const div = document.querySelector('div');

// div.setAttribute('style', 'background-color: black; color: white; font-size: 18px; margin-top: 30px; padding: 20px');

// div.setAttribute('class', 'box');
// console.log(div.getAttribute('class'));

// div.style.backgroundColor = 'black';
// div.style.color = 'yellow';
// div.style.padding = '20px   ';

// div.style.cssText = 'background-color: black; color: yellow; padding: 20px';

// div.className = 'box'
// div.className = 'box-2'
// console.log(div.className);

div.classList.add('box');
div.classList.add('box-2')
div.classList.add('bgRed')

div.classList.remove('bgRed')
div.classList.remove('box-2')

// let isAvailable = div.classList.contains('box');
let isAvailable = div.classList.contains('box-2');
console.log(isAvailable);

div.classList.toggle('box-2'); // If not present then add class or if present then remove the class
div.classList.toggle('bgRed');

console.log(div.classList);

