'use strict';

const arr = ['Alex', 'Anna', 'Oleg', 'Alex'];

// const set = new Set(arr);

function unique(arr) {
	return Array.from(new Set(arr));
}

console.log(unique(arr))

// set.add('Alexy')

// console.log(set);

// for (let value of set) {
// 	console.log(value);
// }

// set.forEach((item, id) => {
// 	console.log(item, id)
// })

