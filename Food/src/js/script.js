'use strict';

window.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tabheader .tabheader__items .tabheader__item'),
		tabsContent = document.querySelectorAll('.preview .tabcontent'),
		tabsParent = document.querySelector('.tabheader .tabheader__items');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.style.display = 'none';
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		})
	}

	function showTabContent (i = 0) {
		tabsContent[i].style.display = 'block';
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();

	showTabContent();

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((tabs, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i)
				}
			});
		}
	});
});