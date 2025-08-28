'use strict';

let id = Symbol('id');

const obj = {
	'name': 'test',
	[id]: 1,
	getId: function() {
		return this[id]
	}
}

// let id = Symbol('id');
// obj[id] = 1;

// console.log(obj);

// for (let value in obj) console.log(value);

console.log(obj.getId())