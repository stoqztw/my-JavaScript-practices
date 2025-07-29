'use strict'

const btn = document.querySelector('#btn'),
    overlay = document.querySelector('.overlay');

// btn.addEventListener('mouseenter', () => {alert('AHAHAHHA')})

let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type)
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target)
})