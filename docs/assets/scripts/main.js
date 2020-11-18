const activeClass = "_active";

// Бургер меню
const burgerButton = document.querySelector("[data-burger-button]"),
	burgerManu = document.querySelector(".header__main-menu"),
	burgerArea = document.querySelector("[data-close-area='burger']");

const dropKontactsButton = document.querySelector("[data-drop-kontacts-button]"),
	dropKontactsBlock = document.querySelector(".header__kontacts"),
	dropKontactsArea = document.querySelector("[data-close-area='kontacts']");

const closeArea = document.querySelectorAll("[data-close-area]");

function removeActiveClass() {
	for (const active of document.querySelectorAll("." + activeClass)) {
		active.classList.remove(activeClass);
	}
}

burgerButton.addEventListener("click", () => {
	dropKontactsButton.classList.remove(activeClass);
	dropKontactsBlock.classList.remove(activeClass);
	dropKontactsArea.classList.remove(activeClass);

	burgerManu.classList.toggle(activeClass);
	burgerButton.classList.toggle(activeClass);
	burgerArea.classList.toggle(activeClass);
});

dropKontactsButton.addEventListener("click", () => {
	burgerManu.classList.remove(activeClass);
	burgerButton.classList.remove(activeClass);
	burgerArea.classList.remove(activeClass);

	dropKontactsButton.classList.toggle(activeClass);
	dropKontactsBlock.classList.toggle(activeClass);
	dropKontactsArea.classList.toggle(activeClass);
});

for (const cA of closeArea) {
	cA.addEventListener("click", () => {
		removeActiveClass();
	});
}

// header-fixed
const headerManu = document.querySelector(".header"),
	headerMenuWrap = document.querySelector(".header__wrap"),
	numberScrollStart = document.querySelector(".header__menu-second-wrap").offsetTop;

function headerHeight() {
	headerManu.classList.remove("header-fixed");
	headerMenuWrap.style.height = "";
	headerMenuWrap.style.height = headerManu.offsetHeight + "px";
	if (pageYOffset >= numberScrollStart) {
		headerManu.classList.add("header-fixed");
	}
}

headerHeight();

window.addEventListener("resize", () => {
	headerHeight();
});

window.addEventListener("scroll", () => {
	if (pageYOffset >= numberScrollStart) {
		headerManu.classList.add("header-fixed");
	} else {
		headerManu.classList.remove("header-fixed");
	}
});

// input file
function uploadFile(target) {
	document.querySelector(".input-file > span").innerHTML = target.files[0].name;
}

// Табы
for (const tabs of document.querySelectorAll("[data-tab]")) {
	const buttons = tabs.querySelectorAll("[data-buttn-tab]");
	const items = tabs.querySelectorAll("[data-item-tab]");

	for (const button of buttons) {
		button.addEventListener("change", (event) => {
			for (const item of items) {
				item.style.display = "none";
			}
			tabs.querySelector(`[data-item-tab=${event.target.dataset.buttnTab}]`).style.display = "block";
		});
	}
}

// https://imask.js.org/
// Маска для телефона
document.querySelectorAll("input[type='tel']").forEach((item) => {
	let telMask = IMask(item, {
		mask: "+{7}(000)000-00-00",
	});
	/*Добавление и удаление класса при снятии фокуса с data-type="tel"*/
	telMask.on("accept", function () {
		item.setCustomValidity("Укажите полностью номер телефона.");
	});
	telMask.on("complete", function () {
		item.setCustomValidity("");
	});
});

for (const input of document.querySelectorAll(".input_prise-wrap input")) {
	let priseMask = IMask(input, {
		mask: "{₽} num",
		blocks: {
			num: {
				// nested masks are available!
				mask: Number,
				thousandsSeparator: " ",
				min: 0,
				max: 99999999,
			},
		},
	});
}

// Слайдер https://swiperjs.com/api
function paginationVal(number) {
	if (number < 10) {
		number = "0" + number;
	}
	return number;
}

let styleProjects;
let sliderOn = false;

function initSlider() {
	if (document.body.clientWidth >= 768 && sliderOn) {
		styleProjects.destroy();
		sliderOn = false;
	}
	if (document.body.clientWidth < 768 && !sliderOn) {
		styleProjects = new Swiper(".our-projects-slider", {
			slidesPerView: "auto",
			spaceBetween: 20,
		});
		sliderOn = true;
	}
}

window.onresize = function () {
	initSlider();
};

initSlider();

var styleAge = new Swiper(".style-age__slider", {
	slidesPerView: "auto",
	spaceBetween: 30,
});

var reviews = new Swiper(".reviews__slider", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 500,
	// autoHeight: true,
	// loop: true,
	spaceBetween: 20,
	breakpoints: {
		// when window width is >= 768px
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		// when window width is >= 960px
		960: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
	},
	navigation: {
		prevEl: ".reviews__slider-prev",
		nextEl: ".reviews__slider-next",
	},
});

var pageSlider = new Swiper(".page-slider", {
	loop: true,
	spaceBetween: 30,
	navigation: {
		prevEl: ".page-slider-prev",
		nextEl: ".page-slider-next",
	},
	pagination: {
		el: ".page-slider-pagination",
		type: "fraction",
		formatFractionCurrent: function (number) {
			return paginationVal(number);
		},
		formatFractionTotal: function (number) {
			return paginationVal(number);
		},
	},
});

var mySwiper2 = new Swiper(".slider-main2", {
	loop: true,
	spaceBetween: 30,
	effect: "fade",
});

var mySwiper1 = new Swiper(".slider-main1", {
	loop: true,
	spaceBetween: 30,
	navigation: {
		prevEl: ".slider-main1-prev",
		nextEl: ".slider-main1-next",
	},
	pagination: {
		el: ".slider-main1-pagination",
		type: "fraction",
		formatFractionCurrent: function (number) {
			return paginationVal(number);
		},
		formatFractionTotal: function (number) {
			return paginationVal(number);
		},
	},
	on: {
		transitionStart: function (slider) {
			mySwiper2.slideToLoop(slider.realIndex);
		},
	},
});

let manySliders = document.querySelectorAll(".many-sliders__item");

for (const slider of manySliders) {
	const nextButton = slider.querySelector(".slider-nav__button-next"),
		prevButton = slider.querySelector(".slider-nav__button-prev"),
		paginationBlock = slider.querySelector(".slider-nav__pagination");

	let manySliders = new Swiper(slider, {
		loop: true,
		spaceBetween: 30,
		navigation: {
			nextEl: nextButton,
			prevEl: prevButton,
		},
		pagination: {
			el: paginationBlock,
			type: "fraction",
			formatFractionCurrent: function (number) {
				return paginationVal(number);
			},
			formatFractionTotal: function (number) {
				return paginationVal(number);
			},
		},
	});
}

// // Галерея в статьях
// const mainGalleryWrap = document.querySelectorAll(".main-gallery__wrap");
// if (mainGalleryWrap) {
// 	for (const g of mainGalleryWrap) {
// 		const mainGallery = g.querySelector(".main-gallery");
// 		const mainGalleryControls = g.querySelector(".main-gallery-controls");

// 		var injury = tns({
// 			container: mainGallery,
// 			navContainer: mainGalleryControls,
// 			items: 1,
// 			gutter: 20,
// 			mouseDrag: true,
// 			loop: false,
// 			speed: 250,
// 			controls: false,
// 			navAsThumbnails: true,
// 			lazyload: true,
// 		});
// 	}
// }

// // Убирает tabIndex у ссылок внутри не активных слайдов
// window.onload = function () {
// 	const tnsItem = document.querySelectorAll(".tns-slider .tns-item");

// 	if (tnsItem) {
// 		for (const i of tnsItem) {
// 			console.log(i.ariaHidden);
// 			if (i.ariaHidden) {
// 				const tabs = i.querySelectorAll("a");
// 				for (const t of tabs) {
// 					t.tabIndex = -1;
// 				}
// 			}
// 		}
// 	}
// };

// Аккардион
// if (document.querySelector(".con-page__wrap")) {
// 	new Accordion(".con-page__wrap");
// }

// if (document.querySelector(".footer__accordion")) {
// 	new Accordion(".footer__accordion");
// }

// // Увеличения картинок
// // https://github.com/francoischalifour/medium-zoom
// mediumZoom("[data-zoomable]", {
// 	background: "#d9e2ec",
// });

// // popup
// const pooupBut = document.querySelectorAll(".popup-open");

// if (pooupBut) {
// 	const pooupWindow = document.querySelector(".certificate-popup"),
// 		pooupClose = document.querySelector(".popup--close"),
// 		pooupCloseArea = document.querySelector(".popup--close-area");

// 	for (const i of pooupBut) {
// 		i.addEventListener("click", () => {
// 			pooupWindow.classList.add("certificate-popup-active");
// 		});
// 	}

// 	pooupClose.addEventListener("click", () => {
// 		pooupWindow.classList.remove("certificate-popup-active");
// 	});

// 	pooupCloseArea.addEventListener("click", () => {
// 		pooupWindow.classList.remove("certificate-popup-active");
// 	});
// }

// // cookies close
// const cookiesBlock = document.querySelector(".cookies"),
// 	cookiesClose = document.querySelector(".cookies__close");

// if (cookiesBlock) {
// 	cookiesClose.addEventListener("click", () => {
// 		cookiesBlock.classList.add("cookies__close-none");
// 	});
// }
