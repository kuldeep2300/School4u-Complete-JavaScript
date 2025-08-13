/* 2. Insert a button with text “click me” as the first element inside the paragraph created in 1st question. */

const btn = document.createElement('button');
btn.textContent = 'click me';

const p = document.querySelector('p');
// p.insertAdjacentElement('afterbegin', btn);

// p.prepend(btn);

// p.insertBefore(btn, p.firstChild);