'use strict';

const buttons = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block')

// console.log(buttons[0].classList.length)
// console.log(buttons[0].classList.item(0));
// console.log(buttons[0].classList.add('red'));
// console.log(buttons[0].classList.remove('blue'))
// console.log(buttons[0].classList.toggle('blue'))

// console.log(buttons[0].classList.contains('red'));

// buttons[0].addEventListener('click', (e) => {
// 	// if (!buttons[1].classList.contains('red')) {
// 	// 	buttons[1].classList.add('red');
// 	// } else {
// 	// 	buttons[1].classList.remove('red');
// 	// }

// 	buttons[1].classList.toggle('red')
// });

wrapper.addEventListener('click', (e) => {
	if (e.target && e.target.matches('button')) {
		e.target.classList.toggle('red')
	}
});

// buttons.forEach(btn => {
// 	btn.addEventListener('click', (e) => {
// 		e.target.classList.toggle('red')
// 	})
// })

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);