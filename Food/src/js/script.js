'use strict';

window.addEventListener('DOMContentLoaded', function () {

	// Tabs

	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {

		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', function (event) {
		const target = event.target;
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

	// Timer

	const deadline = '2026-06-11';

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor((t / (1000 * 60 * 60 * 24))),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60) % 24));

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return '0' + num;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {

		const timer = document.querySelector(selector),
			days = timer.querySelector("#days"),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('.timer', deadline);

	// Modal

	const modalTrigger = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal');

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', openModal);
	});

	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}

	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			closeModal();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && modal.classList.contains('show')) {
			closeModal();
		}
	});

	// const modalTimerId = setTimeout(openModal, 3000);
	// Закомментировал, чтобы не отвлекало

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);

	// Используем классы для создание карточек меню

	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27;
			this.changeToUAH();
		}

		changeToUAH() {
			this.price = this.price * this.transfer;
		}

		render() {
			const element = document.createElement('div');

			if (this.classes.length === 0) {
				this.classes = "menu__item";
				element.classList.add(this.classes);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}

			element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
			this.parent.append(element);
		}
	}

	const getResurse = async (url) => {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}


	// getResurse('http://localhost:3000/menu')
	// 	.then(data => {
	// 		data.forEach(({ img, altimg, title, descr, price }) => {
	// 			new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
	// 		});
	// 	});

	axios.get('http://localhost:3000/menu')
		.then(data => {
			data.data.forEach(({ img, altimg, title, descr, price }) => {
				new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
			});
		});



	// new MenuCard(
	//     "img/tabs/vegy.jpg",
	//     "vegy",
	//     'Меню "Фитнес"',
	//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
	//     9,
	//     ".menu .container"
	// ).render();

	// new MenuCard(
	//     "img/tabs/post.jpg",
	//     "post",
	//     'Меню "Постное"',
	//     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
	//     14,
	//     ".menu .container"
	// ).render();

	// new MenuCard(
	//     "img/tabs/elite.jpg",
	//     "elite",
	//     'Меню “Премиум”',
	//     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
	//     21,
	//     ".menu .container"
	// ).render();

	//Forms

	const forms = document.querySelectorAll('form');
	const message = {
		loading: 'icons/spinner.svg',
		succes: 'Спасибо! Скоро мы с вами свяжемся.',
		failure: 'Что-то пошло не так...'
	}

	forms.forEach(item => { bindPostData(item) });

	const postData = async (url, data) => {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: data
		});

		return await res.json();
	}

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const btn = form.querySelector('.btn');
			const statusMessage = document.createElement('img');
			btn.innerHTML = '';
			statusMessage.src = message.loading;
			btn.append(statusMessage);

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()))

			// fetch('server.php', {
			//     method: 'POST',
			//     headers: {
			//         'Content-type': 'application/json'
			//     },
			//     body: JSON.stringify(object)
			// })
			postData('http://localhost:3000/requests', json)
				.then(data => {
					console.log(data);
					showThanksModal(message.succes);
					statusMessage.remove();
					btn.innerHTML = 'Перезвонить мне';
				}).catch(() => {
					showThanksModal(message.failure);
					btn.innerHTML = 'Перезвонить мне';
				}).finally(() => {
					form.reset();
				});

			// request.addEventListener('load', () => {
			//     if (request.status === 200) {
			//         console.log(request.response);
			//         showThanksModal(message.succes);
			//         form.reset();
			//         statusMessage.remove();
			//         btn.innerHTML = 'Перезвонить мне';
			//     } else {
			//         showThanksModal(message.failure);
			//         btn.innerHTML = 'Перезвонить мне';
			//     }
			// });
		});
	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		openModal();

		const thanksModal = document.createElement('div');

		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
        <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
        </div>
        `;

		document.querySelector('.modal').append(thanksModal);

		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal();
		}, 4000)
	}

	// slider

	// My slider

	// const slider = document.querySelector('.offer__slider'),
	// 	sliderPictures = slider.querySelectorAll('.offer__slide'),
	// 	currentSlide = slider.querySelector('#current'),
	// 	totalSlide = slider.querySelector('#total');

	// function restartSlider() {
	// 	sliderPictures.forEach(slide => {
	// 		slide.classList.add('hide');
	// 	});

	// 	currentSlide.innerHTML = 1;
	// 	sliderPictures[0].classList.remove('hide');
	// 	sliderPictures[0].classList.add('show');

	// 	if (sliderPictures.length < 9) {
	// 		totalSlide.innerHTML = `0${sliderPictures.length}`;
	// 	} else {
	// 		totalSlide.innerHTML = sliderPictures.length;
	// 	}
	// }

	// restartSlider();

	// function nextSlide() {
	// 	const counter = +currentSlide.innerHTML;

	// 	if (counter < 4) {
	// 		currentSlide.innerHTML = counter + 1;

	// 		sliderPictures[counter - 1].classList.remove('show');
	// 		sliderPictures[counter - 1].classList.add('hide');

	// 		sliderPictures[counter].classList.add('show');
	// 		sliderPictures[counter].classList.remove('hide');
	// 	} else {
	// 		sliderPictures[counter - 1].classList.remove('show');
	// 		sliderPictures[counter - 1].classList.add('hide');

	// 		currentSlide.innerHTML = 1;

	// 		sliderPictures[0].classList.add('show');
	// 		sliderPictures[0].classList.remove('hide');
	// 	}
	// }

	// function prevSlide() {
	// 	const counter = +currentSlide.innerHTML;

	// 	if (counter > 1) {
	// 		currentSlide.innerHTML = counter - 1;

	// 		sliderPictures[counter - 1].classList.remove('show');
	// 		sliderPictures[counter - 1].classList.add('hide');

	// 		sliderPictures[counter - 2].classList.add('show');
	// 		sliderPictures[counter - 2].classList.remove('hide');
	// 	} else {
	// 		sliderPictures[counter - 1].classList.remove('show');
	// 		sliderPictures[counter - 1].classList.add('hide');

	// 		currentSlide.innerHTML = 4;
	// 		console.log(counter);
	// 		sliderPictures[sliderPictures.length - 1].classList.add('show');
	// 		sliderPictures[sliderPictures.length - 1].classList.remove('hide');
	// 	}
	// }

	// slider.addEventListener('click', (e) => {
	// 	// console.log(e);
	// 	if (e.target.className === 'offer__slider-next' || e.target.alt === 'next') {
	// 		nextSlide();
	// 	}

	// 	if (e.target.className === 'offer__slider-prev' || e.target.alt === 'prev') {
	// 		prevSlide();
	// 	}
	// });

	// from lesson

	// const slides = document.querySelectorAll('.offer__slide'),
	// 	next = document.querySelector('.offer__slider-next'),
	// 	prev = document.querySelector('.offer__slider-prev'),
	// 	total = document.querySelector('#total'),
	// 	current = document.querySelector('#current');

	// let slideIndex = 1;

	// showSlide(slideIndex);

	// if (slides.length < 10) {
	// 	total.textContent = `0${slides.length}`;
	// } else {
	// 	total.textContent = slides.length;
	// }

	// function showSlide(n) {
	// 	if (n > slides.length) {
	// 		slideIndex = 1;
	// 	}

	// 	if (n < 1) {
	// 		slideIndex = slides.length;
	// 	}

	// 	slides.forEach(slide => {
	// 		slide.classList.add('hide');
	// 		slide.classList.remove('show');
	// 	});

	// 	slides[slideIndex - 1].classList.add('show');

	// 	if (slides.length < 10) {
	// 		current.textContent = `0${slideIndex}`;
	// 	} else {
	// 		current.textContent = slideIndex;
	// 	}
	// }

	// function plusSlides(n) {
	// 	showSlide(slideIndex += n);
	// }

	// prev.addEventListener('click', (e) => {
	// 	plusSlides(-1);
	// });

	// next.addEventListener('click', () => {
	// 	plusSlides(1);
	// });

	// cool slider

	const slides = document.querySelectorAll('.offer__slide'),
		next = document.querySelector('.offer__slider-next'),
		prev = document.querySelector('.offer__slider-prev'),
		total = document.querySelector('#total'),
		current = document.querySelector('#current'),
		slidesWrapper = document.querySelector('.offer__slider-wrapper'),
		slidesField = document.querySelector('.offer__slider-inner'),
		width = window.getComputedStyle(slidesWrapper).width;

	let slideIndex = 1;
	let offset = 0;

	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
		current.textContent = `0${slideIndex}`;
	} else {
		total.textContent = slides.length;
		current.textContent = slideIndex;
	}

	slidesField.style.width = 100 * slides.length + '%';

	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all';
	slidesWrapper.style.overflow = 'hidden';

	slides.forEach(slide => {
		slide.style.width = width;
	});

	function activeDot(dots) {
		dots.forEach(dot => dot.style.opacity = '.5');
		dots[slideIndex - 1].style.opacity = '1';
	};

	function widthToNum(widthStr, numSlide = 1) {
		return +widthStr.replace(/\D/g, '') * numSlide;
	}

	function indicatorSlides(slideLength) {
		if (slideLength < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}
	}

	next.addEventListener('click', (e) => {
		if (offset === widthToNum(width, (slides.length - 1))) {
			offset = 0;
		} else {
			offset += widthToNum(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex === slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		indicatorSlides(slides.length);

		activeDot(dots);
	});

	// prev.addEventListener('click', (e) => {
	// 	if (offset === 0) {
	// 		offset = +width.replace(/\D/g, '') * (slides.length - 1);
	// 		slidesField.style.transform = `translateX(-${offset}px)`;
	// 	} else {
	// 		offset -= +width.replace(/\D/g, '');
	// 		slidesField.style.transform = `translateX(${offset}px)`;
	// 	}
	// });

	prev.addEventListener('click', (e) => {
		if (offset === 0) {
			offset = widthToNum(width, (slides.length - 1));
		} else {
			offset -= widthToNum(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex === 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		indicatorSlides(slides.length);

		activeDot(dots);
	});

	// dots for slider

	const slider = document.querySelector('.offer__slider'),
		dots = [];

	slider.style.position = 'relative';

	function addDots(slider, slides) {
		const dotsWrapper = document.createElement('ol');
		dotsWrapper.classList.add('carousel-indicators');
		slider.append(dotsWrapper);

		for (let i = 0; i < slides.length; i++) {
			const dot = document.createElement('li');
			dot.classList.add('dot');
			dot.setAttribute('data-dot', i + 1);
			dotsWrapper.append(dot);
			dots.push(dot);

			if (i + 1 === slideIndex) {
				dot.style.opacity = '1';
			}
		}
	}

	addDots(slider, slides);

	dots.forEach(dot => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-dot');

			slideIndex = slideTo;
			if (slideIndex < 10) {
				current.textContent = `0${slideIndex}`;
			} else {
				current.textContent = slideIndex;
			}

			offset = widthToNum(width, (slideTo - 1));
			slidesField.style.transform = `translateX(-${offset}px)`;

			activeDot(dots);
		});
	});
	// const dots = document.querySelectorAll('.dot');

	// calculator

	const result = document.querySelector('.calculating__result span');

	let sex = localStorage.getItem('sex') || (localStorage.setItem('sex', 'female'), 'female'),
		height,
		weight,
		age,
		ration = +localStorage.getItem('ratio') || (localStorage.setItem('ratio', 1.375), 1.375);

	// if (localStorage.getItem('sex')) {
	// 	sex = localStorage.getItem('sex');
	// } else {
	// 	sex = 'female';
	// 	localStorage.setItem('sex', 'female');
	// }

	if (localStorage.getItem('ratio')) {
		sex = localStorage.getItem('ratio');
	} else {
		sex = 1.375;
		localStorage.setItem('ratio', 1.375);
	}

	function initLocalSettings(selector, activeClass) {
		const elements = document.querySelectorAll(selector);

		elements.forEach(element => {
			element.classList.remove(activeClass);

			if (element.getAttribute('id') === localStorage.getItem('sex')) {
				element.classList.add(activeClass);
			}
			if (element.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
				element.classList.add(activeClass);
			}
		});
	}

	initLocalSettings('#gender div', 'calculating__choose-item_active');
	initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

	function calcTotal() {
		if (!sex || !height || !weight || !age || !ration) {
			result.textContent = '____';
			return;
		}

		if (sex === 'female') {
			result.textContent = Math.round((447.6 + (9.3 * weight) + (3.1 * height) + (4.3 * age)) * ration);
		} else {
			result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) + (5.7 * age)) * ration);
		}
	}

	calcTotal();

	function getStatickInformation(selector, activeClass) {
		const elements = document.querySelectorAll(selector);

		elements.forEach(element => {
			element.addEventListener('click', (e) => {
				if (e.target.getAttribute('data-ratio')) {
					ration = +e.target.getAttribute('data-ratio');
					localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
				} else {
					sex = e.target.getAttribute('id');
					localStorage.setItem('sex', e.target.getAttribute('id'));
				}

				elements.forEach(element => {
					element.classList.remove(activeClass);
				});

				e.target.classList.add(activeClass);
				calcTotal();
			});
		});
	}

	getStatickInformation('#gender div', 'calculating__choose-item_active');
	getStatickInformation('.calculating__choose_big div', 'calculating__choose-item_active');

	function getInputInformation(selector) {
		const input = document.querySelector(selector);

		input.addEventListener('input', () => {
			if (input.value.match(/\D/g)) {
				input.style.border = '1px solid red';
			} else {
				input.style.border = 'none';
			}

			switch (input.getAttribute('id')) {
				case 'height':
					height = +input.value;
					break;
				case 'weight':
					weight = +input.value;
					break;
				case 'age':
					age = +input.value;
					break;
			}
			calcTotal();
		});
	}

	getInputInformation('#height');
	getInputInformation('#weight');
	getInputInformation('#age');
});