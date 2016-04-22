console.time("test");
console.log(maxSumSubArr([-1, 2, 3, -9]));
console.log(maxSumSubArr([2, -1, 2, 3, -9]));
console.log(maxSumSubArr([-1, 2, 3, -9, 11]));
console.log(maxSumSubArr([-2, -1, 1, 2]));
console.log(maxSumSubArr([100, -9, 2, -3, 5]));
console.log(maxSumSubArr([1, 2, 3]));
console.log(maxSumSubArr([-1, -2, -3]));
 
/**
 * Находит подмассив наибольшей суммы
 *
 * @param {array} arr передаваемый массив
 * @return {string} Подмассив наибольшей суммы: {array}
 * Сумма чисел которого равна: {number};
 */
 
function maxSumSubArr(arr) {
  var arrSubArrSumElem = [];
  var arrSubArr = [];
  var subArrMaxSum;
  var maxValueSum;
  var subArr;
  var result;

  // Проверка все ли элементы массыва отрицательные числа
  result = arr.every(function(elem) {
    return elem < 0;
  });

  if (result) {
    maxValueSum = 0;
    subArrMaxSum = null;

    return "Подмассив наибольшей суммы:" + JSON.stringify(subArrMaxSum) +
      "\nСумма чисел которого равна: " + maxValueSum;
  }

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j <= arr.length; j++) {
      subArr = arr.slice(i, j);
      arrSubArr.push(subArr);
    }
  }
  
  // Считаем сумму чисел каждого подмассива
  for (var i = 0; i < arrSubArr.length; i++) {
    var sum = 0;
 
    for (var j = 0; j < arrSubArr[i].length; j++) {
      sum += arrSubArr[i][j];
    }

    arrSubArrSumElem.push(sum);
  }

  maxValueSum = Math.max.apply(null, arrSubArrSumElem);
  subArrMaxSum = arrSubArr[ arrSubArrSumElem.indexOf(maxValueSum) ];

  return "Подмассив наибольшей суммы:" + JSON.stringify(subArrMaxSum) +
    "\nСумма чисел которого равна: " + maxValueSum;
}
console.timeEnd("test");

console.time("test2");
console.log(maxSumSubArr2([-1, 2, 3, -9]));
console.log(maxSumSubArr2([2, -1, 2, 3, -9]));
console.log(maxSumSubArr2([-1, 2, 3, -9, 11]));
console.log(maxSumSubArr2([-2, -1, 1, 2]));
console.log(maxSumSubArr2([100, -9, 2, -3, 5]));
console.log(maxSumSubArr2([1, 2, 3]));
console.log(maxSumSubArr2([-1, -2, -3]));
 
/**
 * Находит подмассив наибольшей суммы
 *
 * @param {array} arr передаваемый массив
 * @return {string} Подмассив наибольшей суммы: {array}
 * Сумма чисел которого равна: {number};
 */
 
function maxSumSubArr2(arr) {
  var subArrMaxSum;
  var maxValueSum = 0;
  var subArr;
  var result;

  // Проверка все ли элементы массыва отрицательные числа
  result = arr.every(function(elem) {
    return elem < 0;
  });

  if (result) {
    maxValueSum = 0;
    subArrMaxSum = null;

    return "Подмассив наибольшей суммы:" + JSON.stringify(subArrMaxSum) +
      "\nСумма чисел которого равна: " + maxValueSum;
  }

  for (var i = 0; i < arr.length; i++) {

    for (var j = i + 1; j <= arr.length; j++) {
      var sum = 0;

      subArr = arr.slice(i, j);

      for (var q = 0; q < subArr.length; q++) {
        sum += subArr[q];
      }

      if (sum > maxValueSum) {
        maxValueSum = sum;
        subArrMaxSum = subArr.slice(0);
      }
    }
  }

  return "Подмассив наибольшей суммы:" + JSON.stringify(subArrMaxSum) +
    "\nСумма чисел которого равна: " + maxValueSum;
}
console.timeEnd("test2");



// Создаем массив заданной длины
var arr = [];
var numOrArrElems = 10000;

for (;numOrArrElems-- ;) {
  arr.push(random(-30, 100));
}


/**
 * Выдает случайное число в заданном диапазоне
 * 
 * @param  {number} min минимальное число в заданном диапазоне
 * @param  {number} max максимальное число в заданном диапазоне
 * @return {number}     возвращает случайное число
 */
function random(min, max) {
  return min + Math.floor(Math.random() * (max + 1 - min));
}


console.time('Test 1');

console.log(getMaxAmSubarr1(arr));

/**
 * Находит подмассив наибольшей суммы
 * @param  {array}  arr массив для расчета
 * @return {number} число максимальной суммы
 */
function getMaxAmSubarr1(arr) {
  var maxSum = 0;

  for (var i = 0; i < arr.length; i++) {
    var sumCurrentSubArr = 0;

    for (var j = i; j < arr.length; j++) {
      sumCurrentSubArr += arr[j];

      maxSum = Math.max(sumCurrentSubArr, maxSum);
    }
  }

  return maxSum;
}
console.timeEnd("Test 1");

console.time('Test 1*');
console.log(getMaxAmSubarr2(arr));

/**
 * Находит подмассив наибольшей суммы
 * @param  {array}  arr массив для расчета
 * @return {number} число максимальной суммы
 */
function getMaxAmSubarr2(arr) {
  var maxSum = 0;

  for (var i = 0; i < arr.length; i++) {
    var sumCurrentSubArr = 0;

    for (var j = i; j < arr.length; j++) {
      sumCurrentSubArr += arr[j];

      if (maxSum < sumCurrentSubArr) maxSum = sumCurrentSubArr;
    }
  }

  return maxSum;
}
console.timeEnd("Test 1*");

console.time("Test 2");
console.log(getMaxAmSubarr3(arr));

/**
 * Находит подмассив наибольшей суммы
 * @param  {array}  arr массив для расчета
 * @return {number} число максимальной суммы
 */
function getMaxAmSubarr3(arr) {
  var maxSum = 0;
  var sumCurrentSubArr = 0;

  for (var i = 0; i < arr.length; i++) {
    sumCurrentSubArr += arr[i];

    maxSum = Math.max(sumCurrentSubArr, maxSum);
    if (sumCurrentSubArr < 0) sumCurrentSubArr = 0;
  }

  return maxSum;
}
console.timeEnd("Test 2");

console.time("Test 2*");
console.log(getMaxAmSubarr3(arr));

/**
 * Находит подмассив наибольшей суммы
 * @param  {array}  arr массив для расчета
 * @return {number} число максимальной суммы
 */
function getMaxAmSubarr3(arr) {
  var maxSum = 0;
  var sumCurrentSubArr = 0;

  for (var i = 0; i < arr.length; i++) {
    sumCurrentSubArr += arr[i];

    if ( maxSum < sumCurrentSubArr) maxSum = sumCurrentSubArr;
    if (sumCurrentSubArr < 0) sumCurrentSubArr = 0;
  }

  return maxSum;
}
console.timeEnd("Test 2*");
