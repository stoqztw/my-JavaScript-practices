'use strict';

let user = {
	name: 'Artem'
}

let admin = user;
user = null;

console.log(admin);

 