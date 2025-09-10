'use strict';

window.addEventListener('DOMContentLoaded', () => {
	//Tabs
	const tabsContent = document.querySelectorAll('.tabcontent'),
		tabs = document.querySelectorAll('.tabheader__items .tabheader__item'),
		tabsWrapper = document.querySelector('.tabheader__items');

	function hideTabsContent() {
		tabsContent.forEach(content => {
			content.classList.remove('show');
			content.classList.add('hide');
		});

		tabs.forEach(tabs => {
			tabs.classList.remove('tabheader__item_active')
		});
	}

	function showTabsContent(i = 0) {
		tabsContent[i].classList.add('show');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabsContent();
	showTabsContent();

	tabsWrapper.addEventListener('click', (e) => {
		const target = e.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (item == target) {
					hideTabsContent();
					showTabsContent(i);
				}
			});
		}
	});

	// Timer

	// const deadline = '2025-09-04';

	// function getTimeRemaining(endtime) {
	// 	const t = Date.parse(endtime) - Date.parse(new Date()),
	// 		days = Math.floor(t / (1000 * 60 * 60 * 24)),
	// 		hours = Math.floor((t / (1000 * 60 * 60)) % 24),
	// 		minutes = Math.floor((t / (1000 * 60)) % 60),
	// 		seconds = Math.floor((t / 1000) % 60);

	// 	return {
	// 		'total': t,
	// 		'days': days,
	// 		'hours': hours,
	// 		'minutes': minutes,
	// 		'seconds': seconds
	// 	}
	// }

	// function getZero(num) {
	// 	if (num >= 0 && num < 10) {
	// 		return `0${num}`;
	// 	} else {
	// 		return num;
	// 	}
	// }

	// function setClock(selector, endtime) {
	// 	const timer = document.querySelector(selector),
	// 		days = timer.querySelector('#days'),
	// 		hours = timer.querySelector('#hours'),
	// 		minutes = timer.querySelector('#minutes'),
	// 		seconds = timer.querySelector('#seconds'),
	// 		timeInterval = setInterval(updateClock, 1000);

	// 		updateClock();

	// 	function updateClock() {
	// 		const t = getTimeRemaining(endtime);

	// 		days.innerHTML = getZero(t.days);
	// 		hours.innerHTML = getZero(t.hours);
	// 		minutes.innerHTML = getZero(t.minutes);
	// 		seconds.innerHTML = getZero(t.seconds);

	// 		if (t.total <= 0) {
	// 			clearInterval(timeInterval);
	// 		}
	// 	}
	// }

	// setClock('.timer', deadline);

	//HOMEWORK (TIMER)

	const deadline = '2025-09-4';

	function getTimeRemaining() {
		let days, hours, minutes, seconds;
		const total = Date.parse(deadline) - Date.parse(Date());

		if (total <= 0) {
			return {
				'total': 0,
				'days': 0,
				'hours': 0,
				'minutes': 0,
				'seconds': 0
			}
		} else {
			days = Math.floor(total / (1000 * 60 * 60 * 24));
			hours = Math.floor((total / (1000 * 60 * 60)) % 24);
			minutes = Math.floor((total / (1000 * 60)) % 60);
			seconds = Math.floor((total / 1000) % 60);
		}

		return {
			'total': total,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		}
	}

	function getZero(num) {
		if (num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timerUpdater = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const time = getTimeRemaining(endtime);

			days.innerHTML = getZero(time.days);
			hours.innerHTML = getZero(time.hours);
			minutes.innerHTML = getZero(time.minutes);
			seconds.innerHTML = getZero(time.seconds);

			if (time.total <= 0) {
				clearInterval(timerUpdater);
			}
		}
	}

	setClock('.timer', deadline);

	// modal

	const buttonModalWindow = document.querySelectorAll('[data-modal'), // лучше назвать modalTrigger
		modalWindow = document.querySelector('.modal'),
		closeModalButton = document.querySelector('[data-close');

	function openModalWindow() {
		modalWindow.classList.remove('hide');
		modalWindow.classList.add('show');
		document.body.style.overflow = 'hidden';
		clearInterval(moadlTimerID);
	}

	function closeModalWindow() {
		modalWindow.classList.remove('show');
		modalWindow.classList.add('hide');
		document.body.style.overflow = '';
	}

	buttonModalWindow.forEach(btn => {
		btn.addEventListener('click', openModalWindow);
	});

	closeModalButton.addEventListener('click', closeModalWindow);

	modalWindow.addEventListener('click', (e) => {
		if (e.target === modalWindow) {
			closeModalWindow();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
			closeModalWindow();
		}
	});

	const moadlTimerID = setTimeout(openModalWindow, 6000);

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
			openModalWindow();
			window.removeEventListener('scroll', showModalByScroll);
			clearInterval(moadlTimerID);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
});