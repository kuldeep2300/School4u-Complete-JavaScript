//* 1) Insert Elements (Addition of Elements)

let div = document.querySelector('div');
let elem = document.createElement('p');

console.log(elem);
elem.innerText = 'New Para - 4'

// div.append(elem);
// div.prepend(elem);

// div.after(elem);
// div.before(elem);

// div.insertAdjacentElement('afterbegin', elem);
// div.insertAdjacentElement('afterend', elem);
// div.insertAdjacentElement('beforeend', elem);
// div.insertAdjacentElement('beforebegin', elem);

//* 2) Remove or Delete an element

// let p = div.children[3];
// console.log(p);
// p.remove();

// let p2 = div.children[1];
// p2.remove();

//* 3) Parent Node & Common methods
// let alpha = document.querySelector('#alpha');
// alpha.style.backgroundColor = 'blue';

// let parentNode = alpha.parentNode;
// console.log(parentNode);

// parentNode.append(elem);

// let newElem = document.createElement('div');
// newElem.innerHTML = 'New Element';

// parentNode.replaceChild(newElem, alpha) // This methods work on parentNode childrens
// parentNode.removeChild(newElem)

// let lastPara = div.children[2];
// console.log(lastPara);

// div.insertBefore(elem, lastPara);

//* Attributes
let box = document.querySelector('.box');
// console.log(box.attributes);
// console.log(box.getAttribute('class')); // get attribute value by passing its name
// console.log(box.getAttribute('title')); // get attribute value by passing its name

// console.log(box.setAttribute('placeholder', 'This is demo div for testing'));
// console.log(box.attributes);
// console.log(box.attributes.placeholder.value);

let classValue = box.getAttribute('class');

console.log(box.setAttribute('class', `${classValue} random`)); // This will replace existing class .box, here complete old class attribute will be replaced with new class attribute

console.log(box.getAttribute('class'));