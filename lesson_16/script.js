'use strict';

const user = {
	name: 'Alex',
	surname: 'Smith',
	showMyPublicData: function () {
		console.log(`${this.name} ${this.surname}`);
	}
}
Object.defineProperty(user, 'birthday', { value: prompt('Date?'), enumerable: true, configurable: true });
Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
Object.defineProperties(user, {
	name: {writable: false},
	surname: {writable: false}
})



console.log(Object.getOwnPropertyDescriptor(user, 'name'));
Object.defineProperty(user, 'name', { writable: false });

for (let key in user) {
	console.log(key)
}

// writable
// enumerable
// configurable