/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const advBlocks = document.querySelectorAll('.ptomo__adv img'),
//     promoBg = document.querySelector('.promo .promo__bg'),
//     promoGenre = promoBg.querySelector('.promo__genre'),
//     promoInteractiveItems = document.querySelectorAll('.promo__interactive-list .promo__interactive-item');

const advBlocks = document.querySelectorAll('.ptomo__adv img'),
    promoBg = document.querySelector('.promo .promo__bg'),
    promoGenre = promoBg.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

advBlocks.forEach((item) => { item.remove() });

promoGenre.textContent = 'драма';

movieList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, index) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item"> ${index + 1}. ${film}
        <div class="delete"></div>
    </li>
    `;
})

// promoInteractiveItems.forEach((item, index) => {
//     movieDB.movies.sort();
//     promoInteractiveItems[index].innerHTML = `${index + 1}. ` + movieDB.movies[index];
// })

// promoBg.style.cssText = 'background: url("../img/bg.jpg") center center / cover no-repeat; background-position: top';

promoBg.style.backgroundImage = 'url("/img/bg.jpg")'