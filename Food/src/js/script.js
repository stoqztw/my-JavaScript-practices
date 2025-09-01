'use strict';

window.addEventListener('DOMContentLoaded', () => {
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
			})
		}
	})
});