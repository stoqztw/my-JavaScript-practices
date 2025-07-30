'use strict'

const counter = document.querySelector('.counter'),
    btn = document.querySelector('.btn');

let counterMeaning = +counter.innerHTML;
const counterClicker = (e) => {
    counterMeaning++;
    counter.innerHTML = counterMeaning;
};

btn.addEventListener('click', counterClicker)