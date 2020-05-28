$(document).ready(function(){
	$(".menu-toggle").click(function(){
		$(".menu-bar").toggleClass("open-menu");
		$(".menu-toggle i").toggleClass("fa-times-circle fa-bars");
		$("body").toggleClass("overflow-hide");
	})
	if($(window).width() < 768)
	{
	   $('.fetured-cars').slick({
	    arrows: true,
	    dots:true,
	    infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	  });
	}
});

  