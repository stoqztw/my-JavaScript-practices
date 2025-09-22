'use strict';

const person = {
	name: 'Alex',
	phone: '324234',
	parents: {
		mom: 'Olga',
		dad: 'Pavel'
	}
};

const clone = JSON.parse(JSON.stringify(person));

person.parents.mom = 'Sanya';
console.log(clone);