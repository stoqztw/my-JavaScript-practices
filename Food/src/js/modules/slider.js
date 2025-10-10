function slider() {
	// slider

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
}

exports.slider = slider;