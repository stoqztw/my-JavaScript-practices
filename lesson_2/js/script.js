/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < numberOfFilms; i++) {
        if (numberOfFilms === 0) {
            break;
        };
        let nameOfTheFilm = prompt('Какое название фильма?', ''),
            rateOfTheFilm = prompt('На сколько оцените его?', '');

        if (nameOfTheFilm != null && rateOfTheFilm != null && nameOfTheFilm != "" && rateOfTheFilm != "" && nameOfTheFilm.length < 50) {
            personalMovieDB.movies[nameOfTheFilm] = rateOfTheFilm;
        } else {
            alert('Нельзя вводить пустую строку!');
            i--;
        }
    };
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    };
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden.privat) {
        console.log(hidden);
    } else {
        console.log('Ошибка в доступе')
    }
}

showMyDB(personalMovieDB);

// console.log(personalMovieDB);

