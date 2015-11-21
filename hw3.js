/**
 *Задание:

 *Розробити функцію (аналог Math), яка б
 *виконувала прості математичні операції
 *(додавання, віднімання, множення,
 *ділення), а попередній обрахований
 *результат кешувала (меморизація,
 *мемойз, memoization)
 *добре зробити мемойз кожного типу
 *операції (ділення, множення...)
 */

/**
 * Вариант 1

 * Реализация функции с конечным количеством аргументов
 */

var myMath = (function() {
	var memo;
	var previousResult;

	return function (oper, leftOper, rightOper) {
		var value;
		var result;

		if (!memo) {
			memo = JSON.stringify(arguments);
		} else {
			value = JSON.stringify(arguments);
		}

		if (memo !== value) {
			if(oper === '+'){
				result = leftOper + rightOper;
			} else if (oper === '-') {
				result = leftOper - rightOper;
			} else if (oper === '*') {
				result = leftOper * rightOper;
			} else if (oper === '/') {
				result = leftOper / rightOper;
			} else if (oper === '%') {
				result = leftOper % rightOper;
			} else {
				result = 'Такой операции данная функция не умеет выполнять :(';
			}

			memo = JSON.stringify(arguments);
			previousResult = result;

			return result;
		} else {
			return ('Аргументы, переданные в данную функцию равны аргументам, \nпереданным в предыдущем вызове данной функции, поэтому \nрезультат выполнения идентичен и равен:  ' + previousResult);
		}
	};
})();

console.log(myMath('+', 4, 2));
console.log(myMath('+', 4, 2));
console.log(myMath('+', 10, 2));

console.log(myMath('-', 9, 5));
console.log(myMath('-', 9, 5));
console.log(myMath('-', 9, 2));

console.log(myMath('%', 9, 5));
console.log(myMath('%', 9, 5));
console.log(myMath('%', 9, 3));

console.log(myMath('*', 10, 5));
console.log(myMath('*', 10, 5));
console.log(myMath('*', 9, 3));

console.log(myMath('/', 21, 3));
console.log(myMath('/', 21, 3));
console.log(myMath('/', 21, 5));

console.log(myMath('', 9, 5));



/**
 * Вариант 2

 * Реализация функции с бесконечным количеством аргументов
 */

console.log('');
console.log('');
console.log('<=== Вариант 2 ===>');
console.log('');

var myMathInfNumOfArg = (function () {
	var memo;
	var previousResult;

	return function() {
		var value;
		var result = arguments[1];
		var i = 2;

		if(!memo) {
			memo = JSON.stringify(arguments);
		} else {
			value = JSON.stringify(arguments);
		}

		if (memo !== value) {
			if(arguments[0] === '+'){
				for (i; i < arguments.length; i++) {
					result += arguments[i];
				}
			} else if (arguments[0] === '-') {
				for (i; i < arguments.length; i++) {
					result -= arguments[i];
				}
			} else if (arguments[0] === '*') {
				for (i; i < arguments.length; i++) {
					result *= arguments[i];
				}
			} else if (arguments[0] === '/') {
				for (i; i < arguments.length; i++) {
					result /= arguments[i];
				}
			} else if (arguments[0] === '%') {
				for (i; i < arguments.length; i++) {
					result %= arguments[i];
				}
			} else {
				result = 'Такой операции данная функция не умеет выполнять :(';
			}

			memo = JSON.stringify(arguments);
			previousResult = result;

			return result;
		} else {
			return ('Аргументы, переданные в данную функцию равны аргументам, \nпереданным в предыдущем вызове данной функции, поэтому \nрезультат выполнения идентичен и равен:  ' + previousResult);
		}
	};
})();

console.log(myMathInfNumOfArg('+', 4, 2, 5, 10));
console.log(myMathInfNumOfArg('+', 4, 2, 5, 10));
console.log(myMathInfNumOfArg('+', 4, 2, 5));

console.log(myMathInfNumOfArg('*', 4, 2, 5));
console.log(myMathInfNumOfArg('*', 4, 2, 5));
console.log(myMathInfNumOfArg('*', 5, 2, 5));

console.log(myMathInfNumOfArg('/', 8, 2, 2, 2));
console.log(myMathInfNumOfArg('/', 8, 2, 2, 2));
console.log(myMathInfNumOfArg('/', 8, 2, 2));

console.log(myMathInfNumOfArg('-', 8, 2, 2, 2));
console.log(myMathInfNumOfArg('-', 8, 2, 2, 2));
console.log(myMathInfNumOfArg('-', 8, 2, 20));

console.log(myMathInfNumOfArg('%', 9, 5, 3));
console.log(myMathInfNumOfArg('%', 9, 5, 3));
console.log(myMathInfNumOfArg('%', 9, 5));

console.log(myMathInfNumOfArg('', 9, 5));