'use strict';

const btn = document.querySelector('.btn');
let timerId,
	i = 0;

let counter = 0;

function myAnimation() {
	const element = document.querySelector('.box');
	let pos = 0;

	const id = setInterval(frame, 3);


	function frame() {
		if (pos == 300) {
			clearInterval();
		} else {
			pos++;
			element.style.top = pos + 'px';
			element.style.left = pos + 'px';
		}
		if (counter % 2 == 0) {
			clearInterval();
			pos = 0;
		}
	}
}

btn.addEventListener('click', (e) => {
	counter++;
	myAnimation();
})



// function logger() {
// 	if (i == 3) {

// 	}
// 	alert('Hello');
// 	i++;
// }

// let id = setTimeout(function log() {
// 	console.log('Hello');
// 	id = setTimeout(log, 500)
// }, 500)