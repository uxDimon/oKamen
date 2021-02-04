const categoryOptions = {
	category: {
		heading: "Выберите подходящую категорию",
		required: true,
		type: "radio",
		inputsImg: [
			{
				value: "table",
				text: "Столешница",
				img: "category-table.svg",
			},
			// {
			// 	value: "windowsill",
			// 	text: "Подоконник",
			// 	img: "category-windowsill.svg",
			// },
			// {
			// 	value: "stage",
			// 	text: "Ступени",
			// 	img: "category-stage.svg",
			// },
		],
	},
};

const options = {
	table: {
		form: {
			form: {
				heading: "Выберите подходящую форму столешницы",
				required: true,
				type: "radio",
				inputsImg: [
					{
						value: "formNorm",
						text: "Прямая",
						img: "form-norm.svg",
					},
					{
						value: "formG",
						text: "Г-образна",
						img: "form-g.svg",
					},
					{
						value: "formP",
						text: "П-образна",
						img: "form-p.svg",
					},
				],
			},
			// notchOther: {
			// 	heading: "",
			// 	required: true,
			// 	type: "checkbox",
			// 	inputs: [
			// 		{
			// 			value: "other",
			// 			text: "Иные вырезы",
			// 			detail: "(итоговая цена будет известна после фактических замеров)",
			// 			prise: 0,
			// 		},
			// 		{
			// 			value: "other2",
			// 			text: "Иные вырезы",
			// 			detail: "(итоговая цена будет известна после фактических замеров)",
			// 			prise: 0,
			// 		},
			// 	],
			// },
		},
		materials: {
			// materials: {
			// 	heading: "Выберите разновидность и цвет камня",
			// 	required: true,
			// },
		},
		parameters: {
			thickness: {
				heading: "Выберете подходящую толщину столешнице",
				required: true,
				type: "radio",
				inputs: [
					{
						value: "two",
						text: "2 см",
						detail: "",
						prise: 0,
					},
					{
						value: "three",
						text: "3 см",
						detail: "(3 000 ₽ за 1 м2)",
						prise: 3000,
					},
				],
			},
			rounding: {
				heading: "Выберите подходящее форму скругления края столешницы",
				required: false,
				type: "radio",
				infoBlock: {
					text: "Количество углов: ",
					infoPaер1: "optionsSize",
					infoPaер2: "roundingNumber",
				},
				inputsImg: [
					{
						value: "a",
						text: "А",
						img: "rounding-0.svg",
						detail: "",
						prise: 0,
					},
					{
						value: "b",
						text: "Б",
						img: "rounding-1.svg",
						detail: "(2 000 ₽ за 1 уг.)",
						prise: 2000,
					},
					{
						value: "c",
						text: "В",
						img: "rounding-2.svg",
						detail: "(4 000 ₽ за 1 уг.)",
						prise: 4000,
					},
				],
			},
			chamferFront: {
				heading: "Выберите подходящее форму скругления края столешницы",
				required: false,
				type: "radio",
				inputsImg: [
					{
						value: "a",
						text: "Простой",
						img: "chamfer-01.svg",
						detail: "(2 000 ₽ за 1м)",
						prise: 2000,
					},
					{
						value: "b",
						text: "Сложный",
						img: "chamfer-03.svg",
						detail: "(2 300 ₽ за 1м)",
						prise: 2300,
					},
					{
						value: "c",
						text: "Сборный",
						img: "chamfer-08.svg",
						detail: "(2 600 ₽ за 1м)",
						prise: 2600,
					},
				],
			},
		},
		notch: {
			notchSink: {
				heading: "Выберите нужные вам вырезы в столешницы",
				required: false,
				type: "checkbox",
				// type: "checkbox",
				optionsClass: "subInputs",
				subInputs: {
					text: "Вырез под мойку",
					detail: "(от 3 000 ₽)",
					value: "sink",
					inputs: [
						{
							value: "up",
							text: "Поверх столешницы",
							detail: "(от 3 000 ₽)",
							prise: 3000,
						},
						{
							value: "down",
							text: "Снизу столешницы",
							detail: "(от 4 000 ₽)",
							prise: 4000,
						},
					],
				},
			},
			notchHob: {
				heading: "",
				required: false,
				type: "radio",
				optionsClass: "subInputs",
				subInputs: {
					text: "Вырез под варочную панель",
					detail: "(от 3 000 ₽)",
					value: "hob",
					inputs: [
						{
							value: "up",
							text: "Поверх столешницы",
							detail: "(от 3 000 ₽)",
							prise: 3000,
						},
						{
							value: "flush",
							text: "Вровень со столешницей",
							detail: "(от 5 000 ₽)",
							prise: 5000,
						},
					],
				},
			},
			notchMixer: {
				heading: "",
				required: false,
				type: "checkbox",
				optionsClass: "subInputs",
				subInputs: {
					text: "Вырез под смеситель",
					detail: "(от 1 000 ₽)",
					value: "mixer",
					inputNumber: [
						{
							value: "up",
							text: "До 30 мм",
							detail: "(1 000 ₽)",
							textInput: "",
							prise: 1000,
						},
						{
							value: "flush",
							text: "От 30 до 65 мм",
							detail: "(1 300 ₽)",
							textInput: "",
							prise: 1300,
						},
						{
							value: "down",
							text: "Свыше 65 мм",
							detail: "(1 500 ₽)",
							textInput: "",
							prise: 1500,
						},
					],
				},
			},
			notchOther: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "subInputs",
				inputs: [
					{
						value: "other",
						text: "Иные вырезы",
						detail: "(итоговая цена будет известна после фактических замеров)",
						prise: 0,
					},
				],
			},
		},
		services: {
			stand: {
				heading: "Выберите нужные вам услуги",
				required: true,
				type: "checkbox",
				optionsClass: "services",
				inputs: [
					{
						value: "stand",
						text: "Подставка под горячее",
						detail: "(от 3 000 ₽)",
						prise: 3000,
					},
				],
			},
			installHob: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "services",
				inputs: [
					{
						value: "installHob",
						text: "Монтаж варочной панели",
						detail: "(от 4 000 ₽)",
						prise: 4000,
					},
				],
			},
			wallPanel: {
				heading: "",
				required: false,
				type: "checkbox",
				optionsClass: "subInputs",
				subInputs: {
					text: "Стеновые панели из камня",
					detail: "(от 10 000 ₽)",
					value: "wallPanel",
					inputNumber: [
						{
							value: "weight",
							text: "Общая длина",
							detail: "",
							textInput: "см",
							prise: 1000,
						},
						{
							value: "height",
							text: "Средняя высота",
							detail: "",
							textInput: "см",
							prise: 1300,
						},
						{
							value: "number",
							text: "Количество розеток",
							detail: "",
							textInput: "",
							prise: 1500,
						},
					],
				},
			},
			dimension: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "services",
				inputs: [
					{
						value: "dimension",
						text: "Замер",
						detail: "(бесплатно)",
						prise: 0,
					},
				],
			},
			delivery: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "services",
				inputs: [
					{
						value: "delivery",
						text: "Доставка",
						detail: "(от 3 000 ₽)",
						prise: 3000,
					},
				],
			},
			mounting: {
				heading: "",
				required: true,
				type: "checkbox",
				optionsClass: "subInputs",
				inputs: [
					{
						value: "mounting",
						text: "Установка",
						detail: "(от 3 000 ₽)",
						prise: 3000,
					},
				],
			},
		},
	},
	windowsill: {},
	stage: {},
};

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		roadMap: {
			category: {
				text: "Категория",
				visible: false,
				disabled: false,
				disabledButton: true,
			},
			form: {
				text: "Форма",
				visible: false,
				disabled: true,
				disabledButton: true,
			},
			materials: {
				text: "Материалы",
				visible: false,
				disabled: true,
				disabledButton: true,
			},
			parameters: {
				text: "Параметры",
				visible: true,
				disabled: true,
				disabledButton: true,
			},
			notch: {
				text: "Вырезы",
				visible: false,
				disabled: true,
				disabledButton: true,
			},
			services: {
				text: "Доп. услуги",
				visible: false,
				disabled: true,
				disabledButton: true,
			},
			total: {
				text: "Итог",
				visible: false,
				disabled: true,
				disabledButton: true,
			},
		},
		selectOptions: {
			category: "table",
		},
		subInputsDisabledList: {},
		optionsSize: {
			visible: {
				formNorm: true,
				formG: false,
				formP: false,
			},
			roundingNumber: 0,
			roundingActive: false,
			rounding: {
				TopLeft: false,
				TopRight: false,
				BottomRight: false,
				BottomLeft: false,
				// rounding: false,
				// rounding: false,
				// rounding: false,
			},
		},
	},
	mutations: {
		// Переключения вкладок с опциями
		roadMapTo(state, index) {
			const roadMapArrae = Object.keys(state.roadMap);
			if (index >= 0 && index <= roadMapArrae.length - 1) {
				for (const key in state.roadMap) state.roadMap[key].visible = false;
				state.roadMap[roadMapArrae[index]].visible = true;
				state.roadMap[roadMapArrae[index]].disabled = false;
			}
		},
		// Убирает disabled у следующей вкладки eсли заполнены обязательные поля
		nextButtonDisabled(state, key) {
			state.roadMap[key].disabledButton = false;
		},
		chooseOption(state, payload) {
			// Добавляет/удаляет выбранную опцию в state.selectOptions
			let underOptions = { value: payload.value, prise: payload.prise === undefined ? false : payload.prise };
			if (payload.typeInput === "checkbox") {
				if (payload.checked) {
					Vue.set(state.selectOptions[payload.key], payload.value, underOptions);
				} else {
					Vue.delete(state.selectOptions[payload.key], payload.value);
				}
			} else if (payload.typeInput === "number") {
				underOptions.value = payload.valueInput;
				Vue.set(state.selectOptions[payload.key], payload.value, underOptions);
			} else {
				state.selectOptions[payload.key].value = underOptions.value;
				state.selectOptions[payload.key].prise = underOptions.prise;
			}
		},
		defaultOptions(state, payload) {
			let underOptions = { value: "", prise: "" };
			if (payload.categoryOptions[payload.optionsKey].type === "checkbox") underOptions = {};
			Vue.set(state.selectOptions, payload.optionsKey, underOptions);
			if (payload.categoryOptions[payload.optionsKey].subInputs !== undefined) Vue.set(state.subInputsDisabledList, payload.optionsKey, true);
		},
		// Формирует selectOptions из всех имеющихся опций в options
		createSelectOptions(state) {
			for (const screenKey in options[state.selectOptions.category]) {
				const categoryOptions = options[state.selectOptions.category][screenKey];
				for (const optionsKey in categoryOptions) this.commit({ type: "defaultOptions", optionsKey, categoryOptions });
			}
		},
		subInputsDisabled(state, payload) {
			// Убирает и добавляет disabled у subInputs
			if (payload.checked) {
				state.subInputsDisabledList[payload.optionKey] = false;
			} else {
				state.subInputsDisabledList[payload.optionKey] = true;
				this.commit({
					type: "defaultOptions",
					optionsKey: payload.optionKey,
					categoryOptions: options[state.selectOptions.category][payload.windowKey],
				});
			}
		},
		roundingAngle(state, payload) {
			state.optionsSize.rounding[payload.angle] = !state.optionsSize.rounding[payload.angle];
			state.optionsSize.roundingNumber = 0;
			for (const key in state.optionsSize.rounding) {
				if (state.optionsSize.rounding[key]) state.optionsSize.roundingNumber++;
			}
		},
	},
	getters: {
		sizeVisible: (state) => {
			// Скрывает / показывает выбранную форму
			if (state.selectOptions.form.value !== "") {
				for (const key in state.optionsSize.visible) state.optionsSize.visible[key] = false;
				state.optionsSize.visible[state.selectOptions.form.value] = true;
			}
		},
		sizeRounding: (state) => {
			// Скругления края столешницы
			if (state.selectOptions.rounding.value !== "") {
				let rounding = 2,
					active = false;
				if (state.selectOptions.rounding.value === "a") {
					state.optionsSize.roundingNumber = 0;
					for (const key in state.optionsSize.rounding) state.optionsSize.rounding[key] = false;
					rounding = 2;
				} else if (state.selectOptions.rounding.value === "b") {
					rounding = 20;
					active = true;
				} else if (state.selectOptions.rounding.value === "c") {
					rounding = 40;
					active = true;
				}
				state.optionsSize.roundingActive = active;
				document.querySelector(":root").style.setProperty("--form-rounding", rounding + "px");
			}
		},
	},
});
