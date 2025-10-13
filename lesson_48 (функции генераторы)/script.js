'use strict';

function* generator(n) {
	for (let i = 1; i < n; i++) {
		yield i;
	}
}

const counter = generator(7);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

// 1 2 3

for (let k of generator(7)) {
	console.log(k);
}

// 1 2 3 4 5 6