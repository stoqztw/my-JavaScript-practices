'use strict';

// localStorage.setItem('number', 5);
// console.log(localStorage.getItem('number'));

const checkBox = document.querySelector('#checkbox'),
	form = document.querySelector('form'),
	changeColorButton = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
	checkBox.checked = true;
}

checkBox.addEventListener('change', () => {
	localStorage.setItem('isChecked', true);
});