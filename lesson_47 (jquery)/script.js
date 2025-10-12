import $ from 'jquery';

$(document).ready(function () {
	$('.list-item:first').hover(function () {
		$(this).toggleClass('active');
	});

	$('.list-item:eq(2)').click(() => {
		$('.image:even').fadeToggle();
	});

	$('.list-item:eq(4)').click(() => {
		$('.image:odd').animate({
			opacity: 'toggle',
			height: 'toggle'
		}, 1000);
	});
});