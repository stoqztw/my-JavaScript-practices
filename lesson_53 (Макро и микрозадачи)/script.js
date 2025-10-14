'use strict';

setTimeout(() => {
	console.log('timeout');
});

Promise.resolve()
	.then(() => console.log('promise'));

queueMicrotask(() => console.log('My microtask'));

Promise.resolve()
	.then(() => console.log('promise'));

console.log('code');

// code promise My microtask promise timeout