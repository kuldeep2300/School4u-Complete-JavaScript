// 1) Create a function that takes node and newTagName and replace the node from the new node with changed tag name in the DOM.

function replaceNode(oldNode, newTagName) {
    if(!(oldNode instanceof Element)) {
        console.error('Invalid node');
    }

    const newElem = document.createElement(newTagName);
    newElem.innerHTML = oldNode.innerHTML;

    for(let attr of oldNode.attributes) {
        newElem.setAttribute(attr.name, attr.value);
    }

    oldNode.replaceWith(newElem);
}

const div = document.querySelector('div');

replaceNode(div, 'p');