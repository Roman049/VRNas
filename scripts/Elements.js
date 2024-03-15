class Elements {
	constructor() {
		this.elements = document.querySelectorAll('.rising-blocks');
		this.blocks = document.querySelectorAll('.whyChooseUs__blockAn');
		this.icons = document.querySelectorAll('.testimonial-blocks__block-text');
		this.triangles = document.querySelectorAll('.testimonial-blocks__triangle');
		this.menu = document.querySelector('.nav__hamburg');
		this.menuClose = document.querySelector('.menu__close');
		this.header = document.querySelector('.header');
		this.items = document.querySelectorAll('.testimonial__blocks');


		this.assigningEvents();
		this.locationMoveMouse();
		this.headerScroll();

	}

	/**
	 * Метод открывает блоки во время скролла
	 * @param {elements} - вслпывающие блоки
	 */
	checkBlocksVisibility() {
		this.elements.forEach(block => {
			block.getBoundingClientRect().top < window.innerHeight - 100 ? block.classList.add('rising-block-active') : block.classList.remove('rising-block-active')
		});
	}

	/**
	 * Метод назначает события элементам
	 * @param {blocks} /block whyChooseUs
	 * @param {menu}  меню в header
	 * @param {menuClose}
	 */
	assigningEvents() {
		this.blocks.forEach(block => {
			block.addEventListener('click', this.blockActivation.bind(this));
		});

		document.addEventListener('scroll', this.headerScroll.bind(this))

		this.menu.addEventListener('click', this.openMenu);
		this.menuClose.addEventListener('click', this.openMenu);

		this.items.forEach(item => {
			item.addEventListener('mouseover', this.locationMoveMouse.bind(this))
		})
	}

	/**
	 * /block whyChooseUs
	 * Метод открывает/закрывает блок с текстом по клику 
	 * @param {*} e 
	 */
	blockActivation(e) {
		e.currentTarget.parentElement.children[2].classList.toggle('whyChooseUs-block__text-open');

	}


	/**
	 * Метод определяет в какой локации экрана было наведение на элемент и
	 * добовляет/удаляет или оставляет соответствующий класс
	 * @param {icons} @param {triangles}  элементы которым добавляем класс в зависимости их локации 
	 * 
	 */
	locationMoveMouse() {
		document.onmousemove = (e) => {
			if (e.pageX > window.innerWidth / 2) {
				this.icons.forEach(icon => {
					icon.classList.add('testimonial-blocks__block-text-right');
				})
				this.triangles.forEach(item => {
					item.classList.add('testimonial-blocks__triangle-right');
				})
			}
			else {
				this.icons.forEach(icon => {
					icon.classList.remove('testimonial-blocks__block-text-right');
				})
				this.triangles.forEach(item => {
					item.classList.remove('testimonial-blocks__triangle-right');
				})
			}
		}
	}


	/**
	 * Метод открывает/закрывает выдвигающееся боковое меню
	 */
	openMenu() {
		let menu = document.querySelector('.nav__menu');
		menu.classList.toggle('nav__menu-open');

		menu.addEventListener('click', (e) => {
			e.stopPropagation();
		})


	}
	/**
	 * Метод меняет стили у header  во время скролла
	 */
	headerScroll() {
		window.scrollY > 0 ? this.header.classList.add('header__scroll') : this.header.classList.remove('header__scroll');
	}

}