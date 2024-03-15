class Slider {
	constructor() {

		this.slider = document.querySelector('.slides__hidden');
		this.sliderContainer = document.querySelector('.slides__container');
		this.sliderLinks = document.querySelectorAll('.slides__link');
		this.slidePagination = document.querySelectorAll('.slides__pagination');
		this.sliderCount = 0;
		this.sliderWidth;
		this.x1 = 0;
		this.x2 = 0;
		this.xDiff = 0;

		this.showSlide();

	}


	showSlide() {
		this.sliderWidth = document.querySelector('.slides__hidden').offsetWidth;
		this.sliderContainer.style.width = `${this.sliderWidth * this.sliderLinks.length}px`;
		this.sliderLinks.forEach(item => item.style.width = `${this.sliderWidth}px`)

		this.rollSlide();
	}

	rollSlide() {
		this.sliderContainer.style.transform = `translate3d(${-this.sliderCount * this.sliderWidth}px,0px,0px)`
	}

	thisSlide(index) {
		this.slidePagination.forEach(dot => dot.classList.remove('slides__paginarion-active'));
		this.slidePagination[index].classList.add('slides__paginarion-active')
	}

	assigningEvents() {
		this.slidePagination.forEach((dot, index) => {
			dot.addEventListener('click', () => {
				this.sliderCount = index;
				this.rollSlide();
				this.thisSlide(this.sliderCount);
			})
		})

		this.sliderContainer.addEventListener('touchstart', (e) => {
			this.x1 = e.touches[0].clientX;
			console.log(this.x1)
		}, false);

		this.sliderContainer.addEventListener('touchmove', (e) => {
			this.x2 = e.touches[0].clientX;
			console.log(this.x1)
			console.log(this.x2)
			this.xDiff = this.x1 - this.x2
		}, false)

		this.sliderContainer.addEventListener('touchend', () => {
			if (this.xDiff > 0) {
				if (this.sliderCount != this.sliderLinks.length - 1) {
					this.sliderCount++;
					this.rollSlide();
					this.thisSlide(this.sliderCount);
				}
				else {
					this.sliderLinks[this.sliderLinks.length - 1].classList.add('slides__container-animation-left');
					setTimeout(() => {
						this.sliderLinks[this.sliderLinks.length - 1].classList.remove('slides__container-animation-left');
					}, 1000)
				}

			}
			if (this.xDiff < 0) {
				if (this.sliderCount != 0) {
					this.sliderCount--;
					this.rollSlide();
					this.thisSlide(this.sliderCount);
				}
				else {
					this.sliderLinks[0].classList.add('slides__container-animation-right');
					setTimeout(() => {
						this.sliderLinks[0].classList.remove('slides__container-animation-right');
					}, 1000)
				}

			}
		}, false);
	}


}
