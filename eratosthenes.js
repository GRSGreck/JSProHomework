/**
 * Целое число, большее 1, называется простым, если оно не делится нацело ни на какое другое, кроме себя и 1.
 * Древний алгоритм «Решето Эратосфена» для поиска всех простых чисел до n выглядит так:
 * Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
 * Пусть p=2, это первое простое число.
 * Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
 * Поменять значение p на первое не зачеркнутое число после p.
 * Повторить шаги 3-4 пока p2 < n.
 * Все оставшиеся не зачеркнутыми числа – простые.
 * Реализуйте «Решето Эратосфена» в JavaScript, используя массив.
 * Найдите все простые числа до 100 и выведите их сумму.
 */

// Вариант 1 (мой)
console.time('Variant 1');
var arr = [];
 
for (var i = 1; i <= 100; i++) {
  arr.push(i);
}

console.log( eratosthenes(arr) );

/**
 * Функция находит все простые числа в переданом массиве
 * и выводит в консоль их сумму
 *
 * @param {array} arr массив с последовательными числами
 * @return {number} sum возвращает сумму всех простых чисел
 */
function eratosthenes(arr) {
  var _arr = arr.slice();
  var resultArr = [];
  var sum = 0;
 
  for (var i = 0; i < arr.length; i++) {
 
    if (arr[i] > 1 && Math.pow(arr[i], 2) < arr.length) {
 
      for (var j = i; arr[j] * arr[i] <= arr[arr.length - 1]; j++) {
          var deleteNum;
          var indexElem;
 
          deleteNum = arr[j] * arr[i];
          _arr[arr.indexOf(deleteNum)] = undefined;

      }
    }
  }
 
  for (var i = 0; i < _arr.length; i++) {
    if (_arr[i] !== undefined && _arr[i] !== 1) {
      sum += _arr[i]
    }
  }
 
  return sum;
}

console.timeEnd('Variant 1');

// Вариант 2 (Книга)
console.time('Variant 2');
var arr = [];
var n = 100;
var sum = 0;

for (var i = 2; i <= n; i++) {
  arr[i] = true;
}

var p = 2;

do {
  for (i = 2 * p; i < n; i += p) {
    arr[i] = false;
  }

  for (i = p + 1; i < n; i++) {
    if (arr[i]) break;
  }

  p = i;
} while (p * p < n);

for(var i = 0; i < n; i++) {
  if (arr[i]) sum += i; 
}

console.log(sum);
console.timeEnd("Variant 2");
