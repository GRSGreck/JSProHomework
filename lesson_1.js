// =========================================================================================
	// Lesson 1 (home)
// =========================================================================================

/*

1. Вивести всі види змінних з їх типами. Як мінімум мають бути об'єкт, масив, рядок, число, функція. //var varString.
2. Для рядка і числа поміняти значення так, щоб їх типи помінялися.
3. Порівняти між собою рядок і число з "однаковими" значеннями.
4. Простими способами зашифрувати / дешифрувати числову інформацію.

*/

// *** Exercise 1 ***
// 1. Вивести всі види змінних з їх типами. Як мінімум мають бути об'єкт, масив, рядок, число, функція. //var varString.

console.log("<=== Exercise 1 ===>");
console.log("");

// Простые типы данных
var myString = "Hello world",
		myNumber = 26,
		myBoolean = true;

console.log(typeof myString, typeof myNumber, typeof myBoolean);

// Специальные типы данных
var myNull = null,
		myUndef;

console.log(typeof myNull, typeof myUndef);

// Сложные типы данных
var myRegExp = /\d\d\d/g,
		myArray = [1, 2, 3],
		myObject = {
			name: "Roman",
			age: 26,
			gender: "male"
		};

console.log(typeof myRegExp, typeof myArray, typeof myObject);

// Специальный тип данных "funciton"
var f = function (a, b) {
	return a + b;
};

console.log(typeof f);



// *** Exercise 2 ***
// 2. Для рядка і числа поміняти значення так, щоб їх типи помінялися.

console.log('');
console.log("<=== Exercise 2 ===>");
console.log('');


// Инициализируем переменные и задаем им первоначальные значения
var sString = "Hello",
		sNumber = 48;

// Оператор typeof выдаст такие типы данных
console.log(typeof sString, typeof sNumber);

// Меняем первоначальные значения переменным так что бы сменился их тип
sString = 25;
sNumber = "Some string";

// Проверяем сменились ли типы с помощью оператора typeof
console.log(typeof sString, typeof sNumber);

if( typeof sString === "number" && typeof sNumber === "string" ) {
	console.log("Типы данных успешно поменялись");
}



// *** Exercise 3 ***
// 3. Порівняти між собою рядок і число з "однаковими" значеннями.

console.log('');
console.log("<=== Exercise 3 ===>");
console.log('');

var someStr = "245",
		someNumber = 245;

// При сравнении с помощью оператора cравнения с приведением типов "==" интерпритатор выдаст => true
console.log(someStr == someNumber);

// При сравнении с помощью оператора cравнения без приведением типов "===" интерпритатор выдаст => false, так как у данных переменных разные типы данных
console.log(someStr === someNumber);

// Строгое преведени к типу осуществляется с помощью унарного оператора "+" или функции "Number()"

someStr = +someStr; // Равносильно someStr = Number(someStr);

console.log(someStr === someNumber);

// Нестрогое преведени к типу осуществляется с помощью глобальных методов "parseInt()" или "parseFloat()". Приимущество данных методов в том что они могут переобразовать строку в число даже если после числа идет не число
someStr = "245a";
someStr = parseInt(someStr);

console.log(someStr === someNumber);

// parseFloat() возвращает то же самое что и parseInt() но к тому же сохраняет знаки после точки
someStr = "245.25a";
someNumber = 245.25;

someStr = parseFloat(someStr);
console.log(someStr === someNumber);



// *** Exercise 4 ***
// 4. Простими способами зашифрувати / дешифрувати числову інформацію.

console.log('');
console.log("<=== Exercise 4 ===>");
console.log('');

// Шифрования числовой информации
var num = 255;

num = num.toString(16);

console.log(num);

// Дешифрования числовой информации

num = parseInt(num, 16);

console.log(num);









