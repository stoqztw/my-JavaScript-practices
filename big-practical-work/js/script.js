/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "AAA"
        ]
    };

    let genre = 'драма';

    const advContent = document.querySelectorAll('.promo__adv img'),
        promoBackground = document.querySelector('.promo__bg'),
        promoGenre = promoBackground.querySelector('.promo__genre'),
        promoInteractiveList = document.querySelector('.promo__interactive-list'),
        promoForm = document.querySelector('.promo__interactive .add'),
        promoInput = promoForm.querySelector('.adding__input'),
        promoCheckbox = promoForm.querySelector('[type="checkbox"]');

    const arrSort = (arr) => {
        arr.sort()
    };

    function createFilmList(films, parent) {
        parent.innerHTML = '';
        arrSort(films);

        films.forEach((film, i) => {
            if (film.split('').length > 21) {
                film = `${film.slice(0, 21)}...`;
            }

            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', (e) => {
                films.splice(i, 1)
                createFilmList(films, parent)
            })
        })
    }

    const changePromo = () => {
        promoGenre.textContent = genre;
        promoBackground.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const removeAdv = (advElement) => {
        advElement.forEach(element => element.remove());
    };

    promoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newAddFilm = promoInput.value,
            favorite = promoCheckbox.checked;

        if (newAddFilm) {
            movieDB.movies.push(newAddFilm);

            if (favorite === true) {
                console.log('Добавляем любимый фильм')
            };

            createFilmList(movieDB.movies, promoInteractiveList);
        }


        e.target.reset();
    })

    createFilmList(movieDB.movies, promoInteractiveList);

    changePromo();

    removeAdv(advContent);

    // promoWastebaskets.forEach(item => {
    //     item.addEventListener('click', (e) => {
    //         console.log('test')
    //     })
    // })
})