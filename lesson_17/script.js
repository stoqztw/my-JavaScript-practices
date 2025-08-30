'use strict';

const user = {
	name: 'Alex',
	surname: 'Smith',
	birthday: '16/12/2004',
	showMyPublicData: function () {
		console.log(`${this.name} ${this.surname}`);
	}
}

const arr = ['a', 'b', 'c'];

for (const key in user) {
	console.log(user[key])
}

// for (const key in arr) {
// 	console.log(arr[key])
// }

const salaries = {
	John: 500,
	Ivan: 1000,
	Sasha: 2000,
	sayHello: function () {
		console.log('Hello');
	}
}

salaries[Symbol.iterator] = function () {
	return {
		current: this.John,
		last: this.Sasha,

		next() {
			if (this.current < this.last) {
				this.current += 500;
				return { done: false, value: this.current }
			} else {
				return { done: true }
			}
			// {done: true, value: }
		}
	}
}

for (let value of salaries) {
	console.log(value)
} 

const iterator = salaries[Symbol.iterator]();

console.log(iterator.next())