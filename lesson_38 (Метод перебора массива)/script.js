'use strict';

// filter 

// const names = ['Alex', 'Danya', 'Voldemart', 'Ivan', 'Serji', 'Andrey'];

// const shortNames = names.filter(function (name) {
// 	return name.split('')[0] == 'A';
// });

// console.log(shortNames);

// MAP

// let answers = ['IVaN', 'HELlo', 'AHmuT'];

// answers = answers.map(item => item.toLowerCase());

// console.log(answers);

// EVERY/SOME

// const some = [4, 'asda', 'asdaafd'];

// console.log(some.some(item => typeof(item) == 'number'));

// const every = [4, 5, 5, 4];
// console.log(some.every(item => typeof(item) == 'number'));
// console.log(every.every(item => typeof(item) == 'number'));


// REDUCE

// const nums = ['apple', 'oranje', 'alabuga'];
// const result = nums.reduce((sum, current) => `${sum}, ${current}`, 3);

// console.log(result);

const obj = {
	ivan: 'persone',
	ann: 'persone',
	dog: 'animal',
	cat: 'animal'
};

const arrPersones = Object.entries(obj)
	.filter(item => item[1] === 'persone')
	.map(item => item[0]);
console.log(arrPersones);