// -----------------------------------------------------------------------------------------
	// Задание 1
// -----------------------------------------------------------------------------------------

// Знайти неперервний підмасив масиву , сума елементів якого є максимальною.

console.log('>>> Задание №1 <<<');
console.log('');

/**
 * Принцип работы данной функции по нахождению непрерывного подмассива массива, сумма
 * элементов которого является максимальной, можно увидеть на примере данного массива (см. ниже):
 *
 * var arr = [-3, 5, 3, -9, 14];
 *
 * // Начиная с -3
 * 
 * console.log(-3); // Результат => -3
 * console.log(-3 + 5); // Результат => 2
 * console.log(-3 + 5 + 3);  // Результат => 5
 * console.log(-3 + 5 + 3 + (-9)); // Результат => -4
 * console.log(-3 + 5 + 3 + (-9) + 14);  // Результат => 10
 * 
 * // Начиная с 5
 * 
 * console.log('');
 * console.log(5); // Результат => 5
 * console.log(5 + 3); // Результат => 8
 * console.log(5 + 3 + (-9)); // Результат => -1
 * console.log(5 + 3 + (-9) + 14); // Результат => 13
 * 
 * // Начиная с 3
 * 
 * console.log('');
 * console.log(3); // Результат => 3
 * console.log(3 + (-9)); // Результат => -6
 * console.log(3 + (-9) + 14); // Результат => 8
 * 
 * // Начиная с -9
 * 
 * console.log('');
 * console.log(-9); // Результат => -9
 * console.log(-9 + 14); // Результат => 5
 * 
 * // Начиная с 14
 * 
 * console.log('');
 * console.log(14); // Результат => 14
 * 
 * Анализируя данные результаты приходим к выводу что непрерывный подмассив массива,
 * сумма элементов которого является максимальной (максимальная сумма равна 14) => [14]
 * 
 * Реализацию кода см. ниже...
 */


function getMaxAmSubarr(arr) {
	// Функция предназначенная для нахождения максимального значения в массиве из чисел
	var getMaxOfArray = function(subarr) {
		return Math.max.apply(null, subarr);
	};

	// Хранилище подмассивов
	var storageSubarr = [];

	// Хранилище сумм значений из каждого подмассива
	var maxValOfSubarrays = [];
	var maxVal;
	var indexMaxVal;
	var i;

	for (i = 0; i < arr.length; i++) {
		var sumFix = 0;
		var j;

		for (j = i; j < arr.length; j++) {
			sumFix += arr[j];
			maxValOfSubarrays.push(sumFix);
			storageSubarr.push(arr.slice(i, j + 1));
		}
	}

	// Определяем максимальное значение помощью функции getMaxAmSubarr
	maxVal = getMaxOfArray(maxValOfSubarrays);

	// Определяем индекс элемента массива который содержит максимальное значение
	indexMaxVal = maxValOfSubarrays.indexOf(maxVal);

	/**
	 * Подставляем этот индекс массиву-хранилищу в котором хранятся все подмассивы
	 * и на выходе получаем наш непрерывный подмассив массива сумма элементов которого
	 * является максимальной
	 */
	return 'Непрерывный подмассив массива, сумма элементов которого является максимальной (максимальная сумма равна ' + maxVal + ') => ' + '[' + storageSubarr[indexMaxVal] + ']';
}

/**
 * Результатом выполнения функции будет:
 *
 * "Непрерывный подмассив массива, сумма элементов которого является максимальной
 * (максимальная сумма равна 14) => [14]"
*/
console.log(getMaxAmSubarr([-3, 5, 3, -9, 14]));

/**
 * И еще попробуем подставить в функцию парочку массивов для того что бы удостовериться
 * что все работает как надо...
 *
 * Результатом выполнения функции будет:
 *
 * "Непрерывный подмассив массива, сумма элементов которого является максимальной
 * (максимальная сумма равна 6) => [1, 2, 3]"
*/
console.log(getMaxAmSubarr([1, 2, 3]));

/**
 * Результатом выполнения функции будет:
 *
 * "Непрерывный подмассив массива, сумма элементов которого является максимальной
 * (максимальная сумма равна 2) => [2]"
*/
console.log(getMaxAmSubarr([-1, 2, -3]));

/**
 * Результатом выполнения функции будет:
 *
 * "Непрерывный подмассив массива, сумма элементов которого является максимальной
 * (максимальная сумма равна 233) => [83, 150]"
*/
console.log(getMaxAmSubarr([25, -42, 83, 150, -90]));

/**
 * Результатом выполнения функции будет:
 *
 * "Непрерывный подмассив массива, сумма элементов которого является максимальной
 * (максимальная сумма равна 11) => [3, -1, 4, 5]"
*/
console.log(getMaxAmSubarr([3, -1, 4, 5, -9]));



// -----------------------------------------------------------------------------------------
	// Задание 2
// -----------------------------------------------------------------------------------------

// Створити функцію сумування двох дуже довгих чисел представлених строкою.

console.log('');
console.log('>>> Задание №2 <<<');
console.log('');

// Если увеличить еще на один порядок лубое из чисел в строке то получем бесконечность (Infinity)
var megaNumbers = '10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
var megaNumbers2 = '2500000000000000, 3000000000000000000000000, 5000000000000000000.15';


// ***Вариант №1 => сумма неограниченного количества чисел (немного усовершенствованная функция)
function sumOfNumberUnlim(myNumStr) {
	var arrNumber;
	var sum = 0;
	var i;
	/**
	 * Преобразуем строку в массив с помощью метода split(','), запятая в виде 
	 * атрибута метода "split" играет роль разделителя (разделит строку на элементы
	 * массива, разделителем может быть даже пустая строка => '')
	 */
	arrNumber = myNumStr ? myNumStr.split(',') : [];

	for (i = 0; i < arrNumber.length; i++) {
		/**
		 * Не забывает что результатом работы метода "split" является массив, элементы
		 * которого строки (string). Если мы хотим получить числа нужно воспользоваться
		 * одним из методов преобразования строки в число: parseInt, parseFloat или
		 * оператором "+". Пожалуй, выберем метод parseFloat так как он возвращает
		 * десятичное число с плавающей точкой, а также отбрасывает текст после числа так
		 * же, как и метод parseInt
		 */
		sum += parseFloat(arrNumber[i]);
	}

	return sum;
}

console.log(sumOfNumberUnlim(megaNumbers)); // Результат => 1.1e+308

// Проверим работает ли функция sumOfNumberUnlim большим чем 2 количеством элементов массива
console.log(sumOfNumberUnlim(megaNumbers2)); // Результат => 3.0000050025e+24


// ***Вариант №2 => сумма двух чисел (то что требовалось по заданию)
function sumOfNumber(myNumStr) {
	var arrNumber;
	var sum = 0;

	arrNumber = myNumStr ? myNumStr.split(',') : [];
	sum = parseFloat(arrNumber[0]) + parseFloat(arrNumber[1]);

	return sum;
}

console.log(sumOfNumber(megaNumbers)); // Результат => 1.1e+308



// -----------------------------------------------------------------------------------------
	// Задание 3
// -----------------------------------------------------------------------------------------

/**
 * Написати метод реалізуючий різницю двох масивів. Причому різниця має враховувати
 * кількість однакових елементів.
*/

console.log('');
console.log('>>> Задание №3 <<<');
console.log('');

var A = [1, 2, 3, 1, 6, 7, 10, 15, 20];
var B = [1, 2, 6, 10];
var G = [1, 2, 3, 1, 6, 7, 10, '15', 20];
var D = [1, 2, 6, 10];

function searchDifferBetweenArr(A, B) {
	var diff = [];
	var check;
	var valid;
	var i;

	/**
	 * Если хотя бы один элемент любого из переданных массивов не отвечает условию то метод "every"
	 * вернет логическое значение => "false"
	*/
	valid = A.every(function(e) {return typeof e === 'number';}) &&
			B.every(function(e) {return typeof e === 'number';});
	if(!valid) {
		return 'Массивы передаваемы в качестве аргументов в функцию для сравнения массивов, должны состоять из значений ЧИСЛОВОГО ТИПА. Пожалуйста проверьте передаваемые массивы, отвечают ли они данным ТРЕБОВАНИЯМ.';
	}


	for (i = 0; i < A.length; i++) {
		/**
		 * Если хотя бы один элемент массива "В" совпадает с текущим значением элемента полученного
		 * при работе цикла (который перебирает массив "А" ) то метод "some" вернет логическое
		 * значение => true
		*/
		check = B.some(function(e) {
			return e === A[i];
		});

		if (!check) {
			diff.push(A[i]);
		} else {
			/**
			 * Совпадающий элемент массива "В" нужно удалить, чтобы учесть при разнице массивов
			 * одинаковые элементы. Метод "splice" именно УДАЛЯЕТ елемент с обновлением длинны
			 * массива в отличии от унарного оператора "delete" который просто меняет значение 
			 * элемента в "undefined" и при этом длина массива НЕ меняется. Выходя из этого 
			 * используем именно метод splice
			*/
			B.splice(B.indexOf(A[i]), 1);
		}
	}

	return 'Разницей двух массивов с учетом одинаковых элементов будет массив => ' + '[' + diff + ']. Количество несовпадающих элементов с учетом одинаковых: ' + diff.length + '.';
}

/**
 * Результат => Разницей двух массивов с учетом одинаковых элементов будет массив => [3,1,7,15,20].
 * Количество несовпадающих элементов с учетом одинаковых: 5.
 */
console.log(searchDifferBetweenArr(A, B));

/**
 * Проверим работает ли проверка на правильности переданных массивов в качестве аргументов функции
 * 
 * Результат => Массивы передаваемы в качестве аргументов в функцию для сравнения массивов, должны
 * состоять из значений ЧИСЛОВОГО ТИПА. Пожалуйста проверьте передаваемые массив, отвечают ли они
 * данным ТРЕБОВАНИЯМ.
 */
console.log(searchDifferBetweenArr(G, D));