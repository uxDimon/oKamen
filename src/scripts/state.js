const options = {
	category: {
		productType: {
			heading: "Выберите подходящую категорию",
			required: true,
			inputs: [
				{
					appearance: "input-body",
					radioBot: true,
					type: "radio",
					value: "table",
					text: "Столешница",
					img: "category-table.svg",
				},
				{
					appearance: "input-body",
					radioBot: true,
					type: "radio",
					value: "windowsill",
					text: "Подоконник",
					img: "category-windowsill.svg",
				},
				{
					appearance: "input-body",
					radioBot: true,
					type: "radio",
					value: "stage",
					text: "Ступени",
					img: "category-stage.svg",
				},
			],
		},
	},
	form: {
		testttt: {
			heading: "Выберите подходящую категорию2",
			required: true,
			inputs: [
				{
					appearance: "input-body",
					radioBot: true,
					type: "radio",
					value: "ttt",
					text: "Столешница",
					img: "category-table.svg",
				},
				{
					appearance: "input-body",
					radioBot: true,
					type: "radio",
					value: "rrrr",
					text: "Подоконник",
					img: "category-windowsill.svg",
				},
				{
					appearance: "input-body",
					radioBot: true,
					type: "radio",
					value: "qqq",
					text: "Ступени",
					img: "category-stage.svg",
				},
			],
		},
	},
};

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		roadMap: [
			{
				id: "category",
				text: "Категория",
				visible: true,
				disabled: false,
			},
			{
				id: "form",
				text: "Форма",
				visible: false,
				disabled: true,
			},
			{
				id: "materials",
				text: "Материалы",
				visible: false,
				disabled: true,
			},
			{
				id: "parameters",
				text: "Параметры",
				visible: false,
				disabled: true,
			},
			{
				id: "notch",
				text: "Вырезы",
				visible: false,
				disabled: true,
			},
			{
				id: "services",
				text: "Доп. услуги",
				visible: false,
				disabled: true,
			},
			{
				id: "total",
				text: "Итог",
				visible: false,
				disabled: true,
			},
		],
		selectOptions: {},
	},
	mutations: {
		// Переключения вкладок с опциями
		roadMapTo(state, index) {
			if (index >= 0 && index <= state.roadMap.length - 1) {
				for (const key in state.roadMap) {
					state.roadMap[key].visible = false;
				}
				state.roadMap[index].visible = true;
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
