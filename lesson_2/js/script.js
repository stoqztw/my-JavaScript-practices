/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        };
    },
    rememberMyFilms: function () {
        for (let i = 0; i < personalMovieDB.count; i++) {
            if (personalMovieDB.count === 0) {
                break;
            };
            let nameOfTheFilm = prompt('Какое название фильма?', '').trim(),
                rateOfTheFilm = prompt('На сколько оцените его?', '');

            if (nameOfTheFilm != null && rateOfTheFilm != null && nameOfTheFilm != "" && rateOfTheFilm != "" && nameOfTheFilm.length < 50) {
                personalMovieDB.movies[nameOfTheFilm] = rateOfTheFilm;
            } else {
                alert('Нельзя вводить пустую строку!');
                i--;
            }
        };
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        };
    },
    writeYourGenres: function () {
        // for (let i = 1; i <= 3; i++) {
        //     let genre = '';
        //     while (genre === '' || genre === null) {
        //         genre = prompt(`Ваш любимый жанр под номером ${i}`);
        //         personalMovieDB.genres[i - 1] = genre;
        //     };
        // };
        for (let i = 1; i < 2; i++) {
            let genre = prompt('Введите ваши любимые жанры через запятую').toLowerCase()=;
            if (genre === '' || genre == null) {
                alert('Вы ввели неверное значение, попробуте снова');
                i--;
            } else {
                personalMovieDB.genres = genre.split(', ');
            };
        };
        personalMovieDB.genres.forEach((genreName, index) => { console.log(`Любимый жанр #${index + 1} - это ${genreName}`) });
    },
    showMyDB: function (hidden) {
        if (!hidden.privat) {
            console.log(hidden);
        } else {
            console.log('Отказано в доступе')
        }
    },
    toggleVisibleMyDB: function (visibleSetting) {
        if (visibleSetting.privat) {
            visibleSetting.privat = false;
        } else {
            visibleSetting.privat = true;
        };
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB);


// console.log(personalMovieDB);

