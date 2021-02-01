const categoryOptions = {
	category: {
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
			// {
			// 	radioBot: true,
			// 	type: "radio",
			// 	value: "windowsill",
			// 	text: "Подоконник",
			// 	img: "category-windowsill.svg",
			// },
			// {
			// 	radioBot: true,
			// 	type: "radio",
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
			form2: {
				heading: "Выберите подходящую форму столешницы2",
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
			form3: {
				heading: "Выберите подходящую форму столешницы3",
				required: false,
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
			form4: {
				heading: "Выберите подходящую форму столешницы3",
				required: false,
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
			// materials: {
			// 	heading: "Выберите разновидность и цвет камня",
			// 	required: true,
			// },
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
			// Добавляет выбранную опцию в state.selectOptions
			state.selectOptions[payload.key] = payload.value;
		},
		// Формирует selectOptions из всех имеющихся опций в options
		createSelectOptions(state) {
			for (const screenKey in options[state.selectOptions.category]) {
				const categoryOptions = options[state.selectOptions.category][screenKey];
				for (const optionsKey in categoryOptions) {
					Vue.set(state.selectOptions, optionsKey, "");
				}
			}
		},
	},
});
