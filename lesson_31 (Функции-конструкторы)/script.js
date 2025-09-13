'use strict';

function user(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = () => {
		console.log(`Hello, ${this.name }`)
	}
}

const alex = new user('Alex', 12);

alex.hello();
console.log(alex);

user.prototype.exit = function() {
	console.log(`User ${this.name} get out`)
}

alex.exit();