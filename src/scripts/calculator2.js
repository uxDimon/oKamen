var calcApp = new Vue({
	el: "#calc-app",
	store,
	data: {
		roadMap: store.state.roadMap,
	},
	methods: {
		roadMapTo: function (index) {
			// Переключения вкладок с опциями
			store.commit("roadMapTo", index);
		},
		roadMapNext: function (index) {
			// Убирает disabled у следующей вкладки
			store.commit("roadMapNext", index);
		},
		buttonNext: function (index) {
			return store.state.roadMap[index + 1].disabled;
		},
	},
});
