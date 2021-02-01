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
		roadMapNext: function (index) {
			// Убирает disabled у следующей вкладки
			const key = Object.keys(this.roadMap)[index];
			store.commit("roadMapNext", key);
		},
		chooseOption: function (key, value) {
			// Добавляет выбранную опцию в state.selectOptions
			store.commit({
				type: "chooseOption",
				key,
				value,
			});
		},
		nextButtonDisabled: function (itemList) {
			for (const item in itemList) {
				console.log(itemList[item].required);
				// if (itemList[item].required) {
				// 	console.log(1);
				// }
			}
		},
		createSelectOptions: function () {
			// Формирует selectOptions из всех имеющихся опций в options
			store.commit("createSelectOptions");
		},
	},
	created: function () {},
});
