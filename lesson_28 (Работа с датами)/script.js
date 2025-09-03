'use strict';

// const now = new Date('2025-09-04');
// new Date.parse('2025-09-04')

// console.log(now.setHours(40));
// console.log(now)


// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
	const some = i ** 3;
}

let end = new Date();
console.log(end - start);