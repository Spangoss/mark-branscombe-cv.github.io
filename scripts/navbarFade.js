$(window).scroll(function () {

	if ($(window).scrollTop() > 200) {
		$('.navbar-dark').addClass('stickyadd');
	} else {
		$('.navbar-dark').removeClass('stickyadd');
	};
});
