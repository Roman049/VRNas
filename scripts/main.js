window.addEventListener('load', () => {


	const elements = new Elements();
	const slider = new Slider();


	elements.checkBlocksVisibility();
	window.addEventListener('scroll', elements.checkBlocksVisibility.bind(elements))

	slider.assigningEvents();
})