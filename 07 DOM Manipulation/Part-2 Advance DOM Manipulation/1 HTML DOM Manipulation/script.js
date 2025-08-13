/*

HTMLCollection is a live collection of element nodes (only HTML tags).
NodeList is an array-like collection of all node types (elements, text, comments, etc.) and can be live or static.
An Array is a true JavaScript array that can contain any data type, offers the full range of array methods, and is mutable. 

1) DOM ✅
2) Selection ✅
3) Manipulate the HTML

*/

// let nodeList = document.querySelectorAll('div');
// console.log(nodeList);

//? Select by Tag name - here elements meaning more than one
// let htmlCollection = document.getElementsByTagName('div');
// console.log(htmlCollection);

//? Select by id - id's are unique - here element only meaning one element
// console.log(document.getElementById('heading'));

//? Class selector
// console.log(document.getElementsByClassName('hi'));

//? querySelector
// let a = document.querySelector('div'); // return first div
// console.log(a);

// let b = document.querySelector('.hi'); // for class
// let c = document.querySelector('#heading'); // id

// console.log(b);
// console.log(c);

// let a = document.querySelectorAll('#heading');
// console.log(a);

// let b = document.querySelectorAll('div');
// console.log(b);

// let a = document.querySelector('#div-container');
// console.log(a.firstChild);
// console.log(a.lastChild);

// console.log(a.children);
// console.log(a.childNodes);

//* Manipulate the HTML
// let h1 = document.querySelector("h1");

// console.log(h1.tagName);
// console.log(h1.nodeName);

// console.log(h1.firstChild);
// console.log(h1.lastChild);

// console.log(h1.firstChild.nodeName);

//? Changing the text of an element
let h1 = document.querySelector('h1');
// console.log(h1.innerText);  // remove extra spaces show in properly format
// console.log(h1.textContent); // show as it is contain spaces or new lines also

// h1.innerText = '        This is heading - 1 by using innerText property';
// console.log(h1.innerText);
// console.log(h1.textContent);

// console.log(h1.innerHTML);
// h1.innerHTML = '<p>Hello This is Kuldeep Verma</p>';
// console.log(h1.innerHTML);
// console.log(h1.textContent);
// console.log(h1.innerText);

h1.style.visibility = 'hidden';
console.log(h1.tagName);
console.log(h1.nodeName);
console.log(h1.innerText);
console.log(h1.innerHTML);
console.log(h1.textContent);
