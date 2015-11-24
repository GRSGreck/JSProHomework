// -----------------------------------------------------------------------------------------
	// Задание 2
// -----------------------------------------------------------------------------------------

/**
 * Використовуючи методи Object додати до обєкту car наступні методи:
 * - setSpeedometer, що оновлює дані speedometer (сеттер)
 * - getSpeedometer, що повертає вміст speedometer (геттер)
 * - clearSpeedometr, що очищує вміст speedometer
 */

var car = {
	speedometer: 0
};

/**
 * При создании свойства через литерал объекта автоматически всем атрибуты данного свойства таким
 * как writable, enumerable и configurable присваивается значение => true, а при создании свойств
 * c помощью методов Object таких как defineProperties и defineProperty атрибуты свойств нужно 
 * прописывать вручную (см. код ниже)
 */	

// Метод Object №1 => Object.defineProperties()
Object.defineProperties(car, {
	getSpeedometer: {
		value: function() {
			return this.speedometer;
		},
		writable: true,
		enumerable: true,
		configurable: true
	},
	setSpeedometer: {
		value: function(value){
		/**
		 * Проверка введено ли новое значение, а также если введено отрицательное значение,
		 * с помощью объекта "Math" и его метода "abs" преобразуем его в абсолютное значение
		 * (так же метод "abs" число, переданное в виде строки (например, так: '-150') -
		 * преобразует в числовой тип)
		 */			
 			value = Math.abs(value) || this.speedometer;
			this.speedometer = value;
		},
		writable: true,
		enumerable: true,
		configurable: true
	}
});

// Метод Object №2 => Object.defineProperty()
Object.defineProperty(car, 'clearSpeedometer', {
	value: function() {
		this.speedometer = 0;
	},
	writable: true,
	enumerable: true,
	configurable: true
});


// Проверить атрибуты свойства (метода) можно с помощью метода Object.getOwnPropertyDescriptor()
console.log(Object.getOwnPropertyDescriptor(car, 'speedometer'));
console.log(Object.getOwnPropertyDescriptor(car, 'getSpeedometer'));
console.log(Object.getOwnPropertyDescriptor(car, 'setSpeedometer'));
console.log(Object.getOwnPropertyDescriptor(car, 'clearSpeedometer'));

// Теперь проверим что в итоге у нас получилось
console.log(car.getSpeedometer()); // Результатом выполнения данного кода будет => 0
car.setSpeedometer(100);
console.log(car.getSpeedometer()); // Результатом выполнения данного кода будет => 100
car.setSpeedometer(250);
console.log(car.getSpeedometer()); // Результатом выполнения данного кода будет => 250
car.clearSpeedometer();
console.log(car.getSpeedometer()); // Результатом выполнения данного кода будет => 0
car.setSpeedometer(100);
console.log(car.getSpeedometer()); // Результатом выполнения данного кода будет => 100

// Теперь не введем значение методу "setSpeedometer" чтобы проверить работает ли проверка
car.setSpeedometer();
console.log(car.getSpeedometer()); // Результатом выполнения данного кода снова будет => 100 (вывод: проверка - работает)

/**
 * Теперь введем отрицательное (да еще и в виде строки) значение методу "setSpeedometer"
 * чтобы проверить работает ли преобразование введенного значения к абсолютному числовому значению
*/
car.setSpeedometer('-150');
console.log(car.getSpeedometer()); // Результатом выполнения данного кода будет => число 150 (вывод: преобразование - работает)



/**
 * P.S. так же есть и другой способ (см. ниже) добавить геттер и сеттер объекту "car", путем
 * создания двух свойств (getSpeedometer и setSpeedometer) задав каждому из них соответственно
 * getSpeedometer => get (getter) и setSpeedometer => set (setter). Но этот способ не совсем
 * удовлетворяет условия задания, поэтому был исключен... Атрибута свойства "writable" нет
 * потому как в аксессоре свойства доступность для записи определяется наличием или отсутствием
 * сеттера.
 *
 *
 * Object.defineProperties(car, {
 *	getSpeedometer: {
 *		get: function() {
 *			return this.speedometer;
 *		},
 *		enumerable: true,
 *		configurable: true
 *	},
 *	setSpeedometer: {
 *		set: function(value) {
 *			value = Math.abs(value) || this.speedometer;
 *			this.speedometer = value;
 *		},
 *		enumerable: true,
 *		configurable: true
 *	}
 * });
 */