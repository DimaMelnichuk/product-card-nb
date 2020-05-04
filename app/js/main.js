$(function(){
 
 	/***************** Name ********************/
	$('.product-card__colors-color').click(function(){
		$(".product-card__colors-color").removeClass("active");
		$(this).addClass("active");
		$("body").css("background",$(this).attr("data-color"));
		$(".product-card__buy-price").css("color",$(this).attr("data-color"));
		$(".product-card__buy-btn").css("color",$(this).attr("data-color"));
		$(".product-card__images").css("background-image",$(this).attr("data-pic"));

	});

});