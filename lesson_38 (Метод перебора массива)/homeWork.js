'use strict';

const films = [
	{
		name: 'Titanic',
		rating: 9
	},
	{
		name: 'Die hard 5',
		rating: 5
	},
	{
		name: 'Matrix',
		rating: 8
	},
	{
		name: 'Some bad film',
		rating: 4
	}
];

function showGoodFilms(arr) {
	return arr.filter(item => item.rating >= 8);
}

function showListOfFilms(arr) {
	// return arr
	// 	.map(item => item.name)
	// 	.reduce((sum, current) => `${sum}, ${current}`);

	return arr.reduce((sum, cur) => `${typeof(sum) === 'object' ? sum.name : sum}, ${cur.name}`);
}

function setFilmsIds(arr) {
	return arr.map((item, index) => {
		item.id = index;
		return item;
	});
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
	return arr.every(film => film.id || film.id === 0 ? true : false);
}

console.log(showListOfFilms(films));
