const categoryOptions = {
	heading: "Выберите подходящую категорию",
	required: true,
	inputs: [
		{
			radioBot: true,
			type: "radio",
			value: "table",
			text: "Столешница",
			img: "category-table.svg",
		},
		{
			radioBot: true,
			type: "radio",
			value: "windowsill",
			text: "Подоконник",
			img: "category-windowsill.svg",
		},
		{
			radioBot: true,
			type: "radio",
			value: "stage",
			text: "Ступени",
			img: "category-stage.svg",
		},
	],
};

const options = {
	table: {
		form: {
			form: {
				heading: "Выберите подходящую форму столешницы",
				required: true,
				inputs: [
					{
						radioBot: true,
						type: "radio",
						value: "form-norm",
						text: "Прямая",
						img: "form-norm.svg",
					},
					{
						radioBot: true,
						type: "radio",
						value: "form-g",
						text: "Г-образна",
						img: "form-g.svg",
					},
					{
						radioBot: true,
						type: "radio",
						value: "form-p",
						text: "П-образна",
						img: "form-p.svg",
					},
				],
			},
		},
		materials: {
			form: {
				heading: "Выберите подходящую форму столешницы",
				required: true,
				inputs: [
					{
						radioBot: true,
						type: "radio",
						value: "form-norm",
						text: "Прямая",
						img: "form-norm.svg",
					},
					{
						radioBot: true,
						type: "radio",
						value: "form-g",
						text: "Г-образна",
						img: "form-g.svg",
					},
					{
						radioBot: true,
						type: "radio",
						value: "form-p",
						text: "П-образна",
						img: "form-p.svg",
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
				visible: true,
				disabled: false,
			},
			form: {
				text: "Форма",
				visible: false,
				disabled: false,
			},
			materials: {
				text: "Материалы",
				visible: false,
				disabled: false,
			},
			parameters: {
				text: "Параметры",
				visible: false,
				disabled: true,
			},
			notch: {
				text: "Вырезы",
				visible: false,
				disabled: true,
			},
			services: {
				text: "Доп. услуги",
				visible: false,
				disabled: true,
			},
			total: {
				text: "Итог",
				visible: false,
				disabled: true,
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
			}
		},
		// Убирает disabled у следующей вкладки eсли заполнены обязательные поля
		roadMapNext(state, payload) {
			if (state.selectOptions[payload.key] != "") {
				state.roadMap[payload.index + 1].disabled = false;
			}
		},
		chooseOption(state, payload) {
			// Добавляет выбранную опцию в state.selectOptions
			state.selectOptions[payload.key] = payload.value;
		},
		// Формирует selectOptions из всех имеющихся опций в options
		createSelectOptions(state) {
			for (const screenKey in options) {
				for (const optionsKey in options[screenKey]) {
					Vue.set(state.selectOptions, optionsKey, "");
				}
			}
		},
	},
});
