$(function(){
	$('.slideshow').each(function(){
		var $slides = $(this).find('img'),
		slidecount = $slides.length,
		currentIndex = 0;
		$slides.eq(currentIndex).fadeIn();

		setInterval(showNextSlide, 4000);

		function showNextSlide (){
			var nextIndex = (currentIndex + 1) % slidecount;

			$slides.eq(currentIndex).fadeOut();
			$slides.eq(nextIndex).fadeIn();

			currentIndex = nextIndex;
		};
	});
	
});