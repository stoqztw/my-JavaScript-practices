'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');
const boxes = document.querySelectorAll('.box');

console.log(block);

// if (block) {
// 	console.log(block.textContent);
// }

// console.log(block?.textContent);

// console.log(1 + 2);

const userData = {
	name: 'Ivan',
	age: null,
	say: function () {
		console.log('Hello');
	}
}

console.log(boxes[0].closest('.wrapper'));

console.log(userData.skills?.js);