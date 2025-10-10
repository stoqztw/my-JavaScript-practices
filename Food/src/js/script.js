'use strict';

window.addEventListener('DOMContentLoaded', () => {
	const tabs = require('./modules/tabs'),
		modal = require('./modules/modal'),
		timer = require('./modules/timer'),
		calculator = require('./modules/calculator'),
		forms = require('./modules/forms'),
		cards = require('./modules/cards'),
		slider = require('./modules/slider');

	tabs();
	modal();
	timer();
	calculator();
	forms();
	cards();
	slider();
});