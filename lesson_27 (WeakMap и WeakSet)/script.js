'use strict';

// let user = {
// 	name: 'Artem'
// }

// let map = new WeakMap();
// map.set(user, 'data');

// user = null;
// console.log(map);

let cache = new WeakMap();

function cacheUser(user) {
	if (!cache.has(user)) {
		cache.set(user, Date.now());
	}

	return cache.get(user);
}

let lena = { name: 'Elena' },
	alex = { name: 'Alex' };

cacheUser(lena);
cacheUser(alex);

lena = null;

// console.log(cache.has(lena));
// console.log(cache.has(alex));

let messages = [
	{text: 'Hello', from: 'Artem'},
	{text: 'Hello', from: 'Anya'},
	{text: '....', from: 'Ivan'}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

