'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let a = prompt('Один из последних просмотренных фильмов?'),
    b = prompt('На сколько оцените его?'),
    c = prompt('Один из последних просмотренных фильмов?'),
    d = prompt('На сколько оцените его?');

personaMovieDB.movies[a] = b,
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);