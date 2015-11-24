// -----------------------------------------------------------------------------------------
	// Задание 3
// -----------------------------------------------------------------------------------------

/**
 * Модифікувати код таким чином, щоб можна було зробити наступне:
 * car.setSpeed(200).setSpeed(300).clearSpeed().getSpeed()
 */

var car = {
	speedometer: 0
};

Object.defineProperties (car, {
	getSpeedometer: {
		value: function() {
			console.log(this.speedometer);

			return this;
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

			return this;
		},
		writable: true,
		enumerable: true,
		configurable: true
	}
});

Object.defineProperty (car, 'clearSpeedometer', {
	value: function() {
		this.speedometer = 0;

		return this;
	},
	writable: true,
	enumerable: true,
	configurable: true
});

car.setSpeedometer(200).setSpeedometer(300).clearSpeedometer().getSpeedometer(); // Результатом выполнения данного кода будет => 0
car.setSpeedometer(200).setSpeedometer(300).getSpeedometer(); // Результатом выполнения данного кода будет => 300
car.setSpeedometer(200).getSpeedometer(); // Результатом выполнения данного кода будет => 200


/**
 * P.S. Намного удобнее и приветствуется в кругах программистов
 * вот такая запись цепной функции
 */

car .setSpeedometer(200)
	.setSpeedometer(300)
	.getSpeedometer() // Результатом выполнения данного кода будет => 300
	.clearSpeedometer()
	.getSpeedometer() // Результатом выполнения данного кода будет => 0
	.setSpeedometer(-500)
	.getSpeedometer() // Результатом выполнения данного кода будет => 500
	.clearSpeedometer()
	.getSpeedometer(); // Результатом выполнения данного кода будет => 0