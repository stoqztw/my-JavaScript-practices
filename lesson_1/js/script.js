'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let lastUserFilmName = prompt('Один из последних просмотренных фильмов?'),
    userRateFilm = prompt('На сколько оцените его');

personaMovieDB.movies[lastUserFilmName] = userRateFilm;

console.log(personaMovieDB);