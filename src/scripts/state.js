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
						value: "form-norm",
						text: "Прямая",
						img: "form-norm.svg",
					},
					{
						value: "form-g",
						text: "Г-образна",
						img: "form-g.svg",
					},
					{
						value: "form-p",
						text: "П-образна",
						img: "form-p.svg",
					},
				],
			},
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
				required: true,
				type: "radio",
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
				visible: false,
				disabled: true,
				disabledButton: true,
			},
			notch: {
				text: "Вырезы",
				visible: true,
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
	},
	mutations: {
		// Переключения вкладок с опциями
		roadMapTo(state, index) {
			const roadMapArrae = Object.keys(state.roadMap);
			if (index >= 0 && index <= roadMapArrae.length - 1) {
				for (const key in state.roadMap) {
					state.roadMap[key].visible = false;
				}
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
			} else {
				state.selectOptions[payload.key].value = underOptions.value;
				state.selectOptions[payload.key].prise = underOptions.prise;
			}
		},
		// Формирует selectOptions из всех имеющихся опций в options
		createSelectOptions(state) {
			for (const screenKey in options[state.selectOptions.category]) {
				const categoryOptions = options[state.selectOptions.category][screenKey];
				for (const optionsKey in categoryOptions) {
					let underOptions = { value: "", prise: "" };
					if (categoryOptions[optionsKey].type === "checkbox") underOptions = {};
					Vue.set(state.selectOptions, optionsKey, underOptions);
				}
			}
		},
	},
});
