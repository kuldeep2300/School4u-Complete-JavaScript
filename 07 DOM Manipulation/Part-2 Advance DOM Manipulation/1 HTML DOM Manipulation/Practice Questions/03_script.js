// 3. Create a <div> tag in html and give it a class & some styling. Now create a new class in css and try to append this class to the <div> element.

const div = document.querySelector("div");
div.setAttribute('class', `${div.getAttribute('class')} div-class`);

console.log(div.getAttribute('class'));