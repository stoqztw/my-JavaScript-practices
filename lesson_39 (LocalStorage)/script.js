'use strict';

// localStorage.setItem('number', 5);
// console.log(localStorage.getItem('number'));

const checkBox = document.querySelector('#checkbox'),
	form = document.querySelector('form'),
	changeColorButton = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
	checkBox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
	form.style.backgroundColor = 'red';
}

checkBox.addEventListener('change', () => {
	localStorage.setItem('isChecked', true);
});

changeColorButton.addEventListener('click', () => {
	if (localStorage.getItem('bg') === 'changed') {
		localStorage.removeItem('bg');
		form.style.backgroundColor = 'white';
	} else {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = 'red';
	}
});


const persone = {
	name: 'Alex',
	age: 28
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')))