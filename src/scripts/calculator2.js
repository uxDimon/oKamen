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
			top: false,
			left: false,
			right: false,
		},
		roundingActive: false,
		materials: {
			allList: null,
			filterList: null,
			filter: {
				category: "Любой",
				color: "Любой",
			},
			filterInput: {
				category: ["Любой"],
				color: ["Любой"],
			},
		},
	},
	// fix:
	// скругления первая подсказка
	// m2
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

			// Генерирует option в фильтрах материала
			for (const keyList in this.materials.allList) {
				for (const keyFilter in this.materials.filterInput) {
					const item = this.materials.allList[keyList][keyFilter],
						filter = this.materials.filterInput[keyFilter];
					// console.log(keyFilter);
					if (!filter.includes(item)) {
						this.materials.filterInput[keyFilter].push(item);
					}
				}
			}
			this.filterMaterialsList();
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
		},
		formSizeErrorDefault: function () {
			// Сбрасывает ошибки формы
			for (const key in this.formSizeError) {
				this.formSizeError[key] = false;
			}
		},
		selectFilter: function (filter, event) {
			// Выбор фильтра в материалах
			this.materials.filter[filter] = event.target.value;
			this.filterMaterialsList();
		},
		filterMaterialsList: function () {
			// Фильтрует список с учетом выбранных значений в materials.filter
			let lest = {};
			for (const listKey in this.materials.allList) {
				let correct = [];
				for (const filterKey in this.materials.filter) {
					const list = this.materials.allList[listKey][filterKey],
						filter = this.materials.filter[filterKey];
					filter === list || filter === "Любой" ? correct.push(true) : correct.push(false);
				}
				if (correct.every((item) => item == true)) lest[listKey] = this.materials.allList[listKey];
			}
			this.materials.filterList = lest;
		},
		chooseMaterial: function (height, id) {
			// Выбор материала
			store.commit({
				type: "chooseMaterial",
				height,
				id,
			});
		},
		chooseHeight: function (input) {
			// Выбор толщину материала
			store.commit("chooseHeight", input);
		},
	},
	computed: {
		roundingNorm() {
			// Генерирует класс для закругления формы
			let style = "";
			if (!this.optionsSize.rounding.topLeft) style += "border-top-left-radius: 2px;";
			if (!this.optionsSize.rounding.topRight) style += "border-top-right-radius: 2px;";
			if (!this.optionsSize.rounding.bottomRight) style += "border-bottom-right-radius: 2px;";
			if (!this.optionsSize.rounding.bottomLeft) style += "border-bottom-left-radius: 2px;";
			return style;
		},
		roundingGBody() {
			// Генерирует класс для закругления формы
			let style = "";
			if (!this.optionsSize.rounding.topLeft) style += "border-top-left-radius: 2px;";
			if (!this.optionsSize.rounding.topRight) style += "border-top-right-radius: 2px;";
			if (!this.optionsSize.rounding.centerLeft) style += "border-bottom-left-radius: 2px;";
			return style;
		},
		roundingPBody() {
			// Генерирует класс для закругления формы
			let style = "";
			if (!this.optionsSize.rounding.topLeft) style += "border-top-left-radius: 2px;";
			if (!this.optionsSize.rounding.topRight) style += "border-top-right-radius: 2px;";
			return style;
		},
		roundingGRight() {
			// Генерирует класс для закругления формы
			let style = "";
			if (!this.optionsSize.rounding.bottomRight) style += "border-bottom-right-radius: 2px;";
			if (!this.optionsSize.rounding.bottomCenterLeft) style += "border-bottom-left-radius: 2px;";
			return style;
		},
		roundingPLeft() {
			// Генерирует класс для закругления формы
			let style = "";
			if (!this.optionsSize.rounding.bottomCenterRight) style += "border-bottom-right-radius: 2px;";
			if (!this.optionsSize.rounding.bottomLeft) style += "border-bottom-left-radius: 2px;";
			return style;
		},
		chooseForm() {
			for (const key in this.optionsSize.visible) {
				if (this.optionsSize.visible[key]) return true;
			}
		},
	},
	watch: {
		"optionsSize.size.formNorm": {
			// Рассчитывает площадь и предает ошибки
			handler: function (val) {
				let area = 0;
				if (val.bottom > 0 && val.left > 0) {
					area = (val.bottom * val.left) / 10000;
					store.commit({
						type: "formSize",
						position: "area",
						value: area,
					});
				}
			},
			deep: true,
		},
		"optionsSize.size.formG": {
			// Рассчитывает площадь и предает ошибки
			handler: function (val) {
				let area = 0;
				if (val.top > 0 && val.left > 0 && val.right > 0 && val.bottom > 0) {
					this.formSizeErrorDefault();
					if (val.left >= val.right) {
						this.formSizeError.right = true;
						return false;
					} else if (val.bottom >= val.top) {
						this.formSizeError.top = true;
						return false;
					}
					area = (val.top * val.left + (val.right - val.left) * val.bottom) / 10000;
					store.commit({
						type: "formSize",
						position: "area",
						value: area,
					});
				}
			},
			deep: true,
		},
		"optionsSize.size.formP": {
			// Рассчитывает площадь и предает ошибки
			handler: function (val) {
				let area = 0;
				if (val.top > 0 && val.left > 0 && val.right > 0 && val.bottomRight > 0 && val.bottomLeft > 0 && val.center > 0) {
					this.formSizeErrorDefault();
					if (val.center >= val.left) {
						this.formSizeError.left = true;
						return false;
					} else if (val.center >= val.right) {
						this.formSizeError.right = true;
						return false;
					} else if (val.bottomRight + val.bottomLeft >= val.top) {
						this.formSizeError.top = true;
						return false;
					}
					area = (val.left * val.bottomLeft + val.right * val.bottomRight + (val.top - (val.bottomLeft + val.bottomRight)) * val.center) / 10000;
					store.commit({
						type: "formSize",
						position: "area",
						value: area,
					});
				}
			},
			deep: true,
		},
		"selectOptions.form.value": function () {
			// Скрывает / показывает выбранную форму
			store.commit("sizeVisible");
			store.commit("roundingDefalt");
		},
		"selectOptions.rounding.value": function () {
			// Скругления края столешницы
			let rounding = 2,
				active = false;
			if (this.selectOptions.rounding.value === "a") {
				store.commit("roundingDefalt");
				rounding = 2;
			} else if (this.selectOptions.rounding.value === "b") {
				rounding = 20;
				active = true;
			} else if (this.selectOptions.rounding.value === "c") {
				rounding = 40;
				active = true;
			}
			this.roundingActive = active;
			document.querySelector(":root").style.setProperty("--form-rounding", rounding + "px");
		},
	},
	created: function () {
		fetch("./assets/scripts/materials.json")
			.then((r) => r.json())
			.then((json) => {
				this.materials.allList = json;
			});
	},
});
