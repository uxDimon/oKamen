function listShowItem(items, idItem, display = "block") {
	// Показывает нужный элемент остальные скрывает
	for (const blockItem of items) {
		blockItem.style.display = "none";
	}
	document.querySelector("#" + idItem).style.display = display;
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
{
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
		inputItem.addEventListener("change", (event) => {
			onOffMoreInput(inputData, event.target.checked);
		});
	}
}
