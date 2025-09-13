'use strict';

// function showThis(a, b) {
// 	console.log(this);

// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}

// 	console.log(sum());
// }

// showThis(1, 2);

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		function show() {
// 			console.log(this)
// 		}
// 		show();
// 	}
// }

// obj.sum()

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// }

// let ivan = new User('Ivan', 12); 

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// const user = {
// 	name: 'Bob'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']); 

// function count(num) {
// 	return this*num;
// }

// const double = count.bind(2);

// console.log(double(4))

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	this.style.backgroundColor = 'red';
// 	this.style.width = '200px';
// 	this.style.height = '200px';
// });

const obj = {
	num: 5,
	sayNumber: function () {
		const say = () => {
			console.log(this.num);
		}

		say();
	}
}

obj.sayNumber();

const double = a => a * 2;

console.log(double(2))