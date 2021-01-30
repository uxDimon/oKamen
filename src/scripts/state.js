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
		// Убирает disabled у следующей вкладки
		roadMapNext(state, index) {
			state.roadMap[index + 1].disabled = false;
		},
	},
});
