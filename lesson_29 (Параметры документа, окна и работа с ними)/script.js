'use strict';

const box = document.querySelector('.box');

const width = box.offsetWidth,
	height = box.scrollHeight;

const btn = document.querySelector('button');

// btn.addEventListener('click', (e) => {
// 	// box.style.height = box.scrollHeight + 'px';
// 	// console.log(box.scrollTop);
// 	btn.style.width = btn.offsetWidth + 100 + 'px';
// });

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(document.documentElement.scrollTop);

const arrowButton = document.querySelector('.arrow');

arrowButton.addEventListener('click', (e) => {
	e.preventDefault();
	document.documentElement.scroll({
		top: 0,
		behavior: 'smooth'
	});
})