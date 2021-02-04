var calcApp = new Vue({
	el: "#calc-app",
	store,
	data: {
		roadMap: store.state.roadMap,
		selectOptions: store.state.selectOptions,
		subInputsDisabledList: store.state.subInputsDisabledList,
		optionsSize: store.state.optionsSize,
		_store: store.state,
		categoryOptions,
		options,
		urlImg: "./assets/images/calc-svg/",
		formSizeError: {
			bottom: false,
			left: false,
		},
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
				valueInput: event.target.value,
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
		subInputsDisabled: function (optionKey, windowKey, event) {
			// Убирает и добавляет disabled у subInputs
			store.commit({
				type: "subInputsDisabled",
				optionKey,
				windowKey,
				checked: event.target.checked,
			});
		},
		roundingAngle: function (angle) {
			// Выбор угла закругления
			store.commit({
				type: "roundingAngle",
				angle,
			});
		},
		formSize: function (position, event) {
			store.commit({
				type: "formSize",
				position,
				value: Number(event.target.value),
			});

			if (this.optionsSize.size[selectOptions.form.value] === "formNorm") {
				this.sizeFormNorm();
			}
		},
	},
	computed: {
		rounding: function () {
			let style = "";
			if (!this.optionsSize.rounding.TopLeft) style += "border-top-left-radius: 2px;";
			if (!this.optionsSize.rounding.TopRight) style += "border-top-right-radius: 2px;";
			if (!this.optionsSize.rounding.BottomRight) style += "border-bottom-right-radius: 2px;";
			if (!this.optionsSize.rounding.BottomLeft) style += "border-bottom-left-radius: 2px;";
			return style;
		},
		sizeFormNorm: function () {
			// this.optionsSize.size
		},
	},
	created: function () {},
});
