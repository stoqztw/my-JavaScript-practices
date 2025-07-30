'use strict'

// console.log(document.body);
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)

// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]').previousSibling)

// console.log(document.querySelector('#current').nex)

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text' || node.nodeName == '#comment') {
        continue;
    }
    console.log(node);
}