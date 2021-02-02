var calcApp = new Vue({
	el: "#calc-app",
	store,
	data: {
		roadMap: store.state.roadMap,
		selectOptions: store.state.selectOptions,
		categoryOptions,
		urlImg: "./assets/images/calc-svg/",
		options,
		checked: [],
	},
	methods: {
		roadMapTo: function (index) {
			// Переключения вкладок с опциями
			store.commit("roadMapTo", index);
		},
		chooseOption: function (key, input, event) {
			// Добавляет выбранную опцию в state.selectOptions
			store.commit({
				type: "chooseOption",
				key,
				value: input.value,
				prise: input.prise,
				subInputs: input.subInputs,
				checked: event.target.checked,
				typeInput: event.target.type,
			});
		},
		nextButtonDisabled: function (obItem, key) {
			// Убирает disabled у следующей вкладки eсли заполнены обязательные поля
			let requiredOk = [];
			for (const item in obItem) {
				const required = obItem[item].required;
				(required && this.selectOptions[item].value != "") || !required ? requiredOk.push(true) : requiredOk.push(false);
			}
			if (requiredOk.every((item) => item == true)) store.commit("nextButtonDisabled", key);
		},
		createSelectOptions: function () {
			// Формирует selectOptions из всех имеющихся опций в options
			store.commit("createSelectOptions");

			// Убирает disabledButton на страницах без обязательных полей
			const renderOptions = this.options[this.selectOptions.category];
			for (const key in renderOptions) {
				this.nextButtonDisabled(renderOptions[key], key);
			}
		},
	},
	created: function () {},
});
