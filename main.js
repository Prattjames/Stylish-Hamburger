$(document).ready(function () {
	$(".ham").click(function () {
		$(this).toggleClass("close");
    if ($('.close').val() < 1) {
      $('.menu').animate({
        left: '0px'
      }, 500);
      $('body').animate({
        marginLeft: '300px'
      }, 500);
    } else {
      $('.menu').animate({
        left: '-300px'
      }, 500);
      $('body').animate({
        marginLeft: '0px'
      }, 500);
    }
	});
});