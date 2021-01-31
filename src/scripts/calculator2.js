var calcApp = new Vue({
	el: "#calc-app",
	store,
	data: {
		roadMap: store.state.roadMap,
		selectOptions: store.state.selectOptions,
		categoryOptions,
		urlImg: "./assets/images/calc-svg/",
		options,
	},
	methods: {
		roadMapTo: function (index) {
			// Переключения вкладок с опциями
			store.commit("roadMapTo", index);
		},
		roadMapNext: function (key, index) {
			// Убирает disabled у следующей вкладки
			store.commit({
				type: "roadMapNext",
				key,
				index,
			});
		},
		chooseOption: function (key, value) {
			// Добавляет выбранную опцию в state.selectOptions
			store.commit({
				type: "chooseOption",
				key,
				value,
			});
		},
		createSelectOptions: function () {
			store.commit("createSelectOptions");
		},
	},
	created: function () {},
});