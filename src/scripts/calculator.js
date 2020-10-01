function listShowItem(items, idItem, display = "block") {
	// Показывает нужный элемент остальные скрывает
	for (const blockItem of items) {
		blockItem.style.display = "none";
	}
	document.querySelector("#" + idItem).style.display = display;

	// Скрывает блок с размерами при переходи на вкладку 'Итог'
	const activeSize = document.querySelector(".options__size-wrap");
	if (idItem == "total") {
		activeSize.style.display = "none";
	} else {
		activeSize.style.display = "block";
	}
}

function calcTab(button, block, data_attribute) {
	//Табы для калькулятора черуз dataAttribute
	for (const buttonItem of button) {
		const buttonData = buttonItem.getAttribute(data_attribute);
		buttonItem.addEventListener("click", () => {
			listShowItem(block, buttonData);
		});
	}
}

function calcNextButton(buttons, roadMapButton) {
	function removeDisable(roadMapButton, ntxtPoint) {
		// Уберает disabled у кнопок навигации (roadMapButton)
		for (const roadMapButtonItem of roadMapButton) {
			if (roadMapButtonItem.dataset.calcTab == ntxtPoint) {
				roadMapButtonItem.removeAttribute("disabled");
			}
		}
	}

	for (const buttonItem of buttons) {
		const ntxtPoint = buttonItem.dataset.calcNextButton;
		const radioRequired = buttonItem.dataset.radioRequired;

		buttonItem.addEventListener("click", () => {
			if (radioRequired != "" && document.querySelector(`input[name="${radioRequired}"]:checked`)) {
				removeDisable(roadMapButton, ntxtPoint);
				listShowItem(calcBody, ntxtPoint);
			} else if (radioRequired == undefined) {
				removeDisable(roadMapButton, ntxtPoint);
				listShowItem(calcBody, ntxtPoint);
			}
		});
	}
}

function calcPreviousButton(buttons) {
	for (const buttonItem of buttons) {
		const previousPoint = buttonItem.dataset.calcPreviousButton;
		buttonItem.addEventListener("click", () => {
			listShowItem(calcBody, previousPoint);
		});
	}
}

function choiceForm(input, block, display) {
	// Выбор формы (столешнице, подоконника, ступеней)
	for (const inputItem of input) {
		inputItem.addEventListener("change", () => {
			listShowItem(block, inputItem.value, display);
		});
	}
}

// Переключает вкладки настроек калькулятора
const roadMapButton = document.querySelectorAll("button[data-calc-tab]"),
	calcBody = document.querySelectorAll(".calc__body");
calcTab(roadMapButton, calcBody, "data-calc-tab");

// Кнопки назад далее
const listCalcNextButton = document.querySelectorAll("button[data-calc-next-button]"),
	listCalcPreviousButton = document.querySelectorAll("button[data-calc-previous-button]");
calcNextButton(listCalcNextButton, roadMapButton);
calcPreviousButton(listCalcPreviousButton, roadMapButton);

// Выберите подходящую форму столешницы
const radioForm = document.querySelectorAll('input[name="form"]'),
	blockForm = document.querySelectorAll(".options__size");
choiceForm(radioForm, blockForm);

// Выберите разновидность и цвет камня
const selectMaterials = document.querySelectorAll("select[data-select-materials]"),
	materialsList = document.querySelectorAll(".options__materials-wrap");
choiceForm(selectMaterials, materialsList, "grid");

// Количество углов
const radioRounding = document.querySelectorAll('input[name="rounding"]'),
	numberRoundingWrap = document.querySelector(".options__rounding-range-wrap"),
	numberRounding = numberRoundingWrap.querySelector('input[name="rounding-number-range"]'),
	numberRoundingNumber = numberRoundingWrap.querySelector("#rounding-number-text");

for (const radioItem of radioRounding) {
	radioItem.addEventListener("change", () => {
		let styleOpacity = "0.3";
		if (radioItem.value != "0") {
			numberRounding.removeAttribute("disabled");
			styleOpacity = "1";
		} else {
			numberRounding.setAttribute("disabled", "");
		}
		numberRoundingWrap.style.opacity = styleOpacity;
	});
}

numberRounding.addEventListener("input", (event) => {
	numberRoundingNumber.innerHTML = event.target.value;
});

// Доп опции в чекбоксе
const moreInput = document.querySelectorAll("[data-calc-more-input]");

function onOffMoreInput(data, boolean) {
	const wrap = document.querySelector("#" + data),
		items = wrap.querySelectorAll("input");
	let styleOpacity = "0.3";
	if (boolean) {
		styleOpacity = "1";
		for (const i of items) {
			i.removeAttribute("disabled");
		}
	} else {
		for (const i of items) {
			i.setAttribute("disabled", "");
		}
	}
	wrap.style.opacity = styleOpacity;
}

for (const inputItem of moreInput) {
	const inputData = inputItem.dataset.calcMoreInput;
	onOffMoreInput(inputData, false);
	inputItem.addEventListener("change", (event) => {
		onOffMoreInput(inputData, event.target.checked);
	});
}

// Расчет площади
const inputSize = document.querySelectorAll("[data-table-size]");
let activSizeForm = {
	name: "",
	size: {},
};

// html ошибки
let errorHtml = document.createElement("span"),
	errorHtmlText = "Не может быть меньше размера", // Текст ошибки
	errorHtmlClass = "options__size-error", // Класс ошибки
	errorInputClass = "options__size-min-error"; // Класс ошибки инпута с большим значением
errorHtml.className = errorHtmlClass;

function errorInput(object) {
	// Вводит ошибку если значение внесено некорректно
	// console.log(object.maxInput);
	console.log(object);
	if (!Number.isInteger(object)) {
		let inputError = document.querySelector(`[data-table-size = "${object.maxInput}"]`).parentNode;
		let inputMinError = document.querySelector(`[data-table-size = "${object.minInput}"]`);
		let errorElement = document.querySelector("." + errorInputClass);
		errorHtml.innerHTML = errorHtmlText;
		inputError.append(errorHtml);
		if (errorElement) {
			errorElement.classList.remove(errorInputClass);
		}
		inputMinError.classList.add(errorInputClass);
	} else if (document.querySelector("." + errorHtmlClass)) {
		document.querySelector("." + errorHtmlClass).remove();
		document.querySelector("." + errorInputClass).classList.remove(errorInputClass);
		console.log(document.querySelector("." + errorInputClass));
	}
}

function calcArea(object) {
	function generateError(maxInput, minInput) {
		return { maxInput, minInput };
	}
	// Расчет площади Прямая
	if (activSizeForm.name == "table-size-norm") {
		const area = object.size["bot"] * object.size["left"];
		return area;
	}
	// Расчет площади Г-образная
	if (activSizeForm.name == "table-size-g") {
		if (object.size["top"] <= object.size["bot-right"] && object.size["top"] != 0) {
			return generateError("top", "bot-right");
		}
		if (object.size["right"] <= object.size["left-top"] && object.size["right"] != 0) {
			return generateError("right", "left-top");
		}
		const area_left = (object.size["top"] - object.size["bot-right"]) * (object.size["right"] - object.size["left-top"]);
		const area_right = (object.size["top"] - object.size["bot-right"]) * object.size["right"];
		return area_left + area_right;
	}
	// Расчет площади П-образная
	if (activSizeForm.name == "table-size-p") {
		if (object.size["left"] <= object.size["body"]) {
			return generateError("left", "body");
		}
		if (object.size["right"] <= object.size["body"]) {
			return generateError("right", "body");
		}
		if (object.size["top"] <= object.size["bot-left"] + object.size["bot-right"]) {
			return generateError("top", ["left-top", "bot-right"]);
		}
		const area_left = object.size["left"] * object.size["bot-left"];
		const area_right = object.size["right"] * object.size["bot-right"];
		const area_body = (object.size["top"] - (object.size["bot-left"] + object.size["bot-right"])) * object.size["body"];
		return area_left + area_right + area_body;
	}
}

for (const radioItem of radioForm) {
	radioItem.addEventListener("change", (event) => {
		activSizeForm.name = event.target.value;
		activSizeForm.size = {};

		let inputActive = document.querySelectorAll("#" + activSizeForm["name"] + " [data-table-size]");
		for (const inputItem of inputActive) {
			activSizeForm.size[inputItem.dataset.tableSize] = Number(inputItem.value);
			inputItem.addEventListener("change", (event) => {
				activSizeForm.size[event.target.dataset.tableSize] = Number(event.target.value);
				// console.log(calcArea(activSizeForm));
				errorInput(calcArea(activSizeForm));
			});
		}
	});
}

for (const inputItem of inputSize) {
	// Минимальное значение для инпута, указывается в min=""
	inputItem.addEventListener("change", (event) => {
		if (event.target.min > event.target.value) {
			event.target.value = event.target.min;
		}
	});
}
