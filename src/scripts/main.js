// Бургер меню
const burgerButton = document.querySelector("[data-burger-button]");
const burgerManu = document.querySelector(".header__main-menu");

burgerButton.addEventListener("click", () => {
	burgerManu.classList.toggle("main-menu_active");
	burgerButton.classList.toggle("header__burger-button_active");
});

// input file
function uploadFile(target) {
	document.querySelector(".input-file > span").innerHTML = target.files[0].name;
}

// // Табы
// const tabsButton = document.querySelectorAll(".stages-work__button");
// const tabsContainerSW = document.querySelectorAll(".stages-work__tabs-item");

// const tabsButtonCalc = document.querySelectorAll(".calculator__head-booton");
// const tabsContainerCalc = document.querySelectorAll(".calculator__body");

// function mainTab(tabsButton, tabsContainer) {
// 	for (const i of tabsButton) {
// 		i.addEventListener("click", () => {
// 			for (const b of tabsButton) {
// 				b.classList.add("button_hgost-neutral");
// 			}
// 			i.classList.remove("button_hgost-neutral");

// 			for (const c of tabsContainer) {
// 				c.classList.remove("tab-container-active");
// 			}
// 			document.querySelector("#" + i.value).classList.add("tab-container-active");
// 		});
// 	}
// }

// mainTab(tabsButton, tabsContainerSW);
// mainTab(tabsButtonCalc, tabsContainerCalc);

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

// Слайдер https://swiperjs.com/api
function paginationVal(number) {
	if (number < 10) {
		number = "0" + number;
	}
	return number;
}

var styleAge = new Swiper(".style-age__slider", {
	slidesPerView: "auto",
	// centeredSlides: true,
	spaceBetween: 30,
	// grabCursor: true,
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
		nextEl: ".slider-main1-next",
		prevEl: ".slider-main1-prev",
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

// // Аккардион
// if (document.querySelector(".faq")) {
// 	new Accordion(".faq");
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
