let someArray = [231, 48, 52, 1013, 18, 52, 24, 15, "85"/*, "Hello"*/];

console.log( sortNumArray(someArray, "min") );

/**
 * Сортирует переданый массив по спаданию и по возростанию
 * используя цикл for (c Math.min, Math.max)
 * 
 * @param {array} arr массив который передается для сортировки
 * @param {string} maxOrMin можно передать строку "min" или "max" 
 * для сортировки массива по спаданию ("max") и по возростанию  ("min").
 * По умолчанию maxOrMin = "max".
 * @return {array} newArr возвращает отсортированный массив
 */

function sortNumArray(arr, minOrMax = "max") {
  let newArr = [];
  let myMath;

  try {
  for (let i = 0; i < arr.length; i++) {
    if (!parseInt(arr[i]) || arr[i] === NaN) {
      throw new Error('Массив должен состоять из чисел');
    }
  }
  } catch(e) {
    return e.message;
  }
 
  arr = arr.slice(0);
 
  if (minOrMax === "min")  {
    myMath = Math.min;
  } else if (minOrMax === "max") {
    myMath = Math.max;
  } else {
    return `Вы ввели не правильное значение: ${minOrMax}`;
  }
 
  for (; arr.length !== 0;) {
    let minValue;
    let indexValue;
 
    minValue = myMath.apply(null, arr); 
     
    indexValue = arr.indexOf(minValue);
    newArr.push(minValue);
    arr.splice(indexValue, 1);
  }
 
  return newArr;
}



let someArray2 = [231, 48, 52, 1013, 18, 24, 5, 11, 85, "100000"/*, 'Hello'*/];

console.log( sortNumberArray(someArray2, 'min') );

/**
 * Сортирует переданый массив по спаданию и по возростанию
 * используя только цикл for (без Math.min, Math.max)
 *
 * @param {array} arr массив который передается для сортировки
 * @param {string} maxOrMin можно передать строку "min" или "max" 
 * для сортировки массива по спаданию ("max") и по возростанию  ("min").
 * По умолчанию maxOrMin = "max".
 * @return {array} newArr возвращает отсортированный массив
 */

function sortNumberArray(arr, maxOrMin = 'max') {
  let newArr;

  try {
    for (let i = 0; i < arr.length; i++) {
      if (!parseInt(arr[i]) || arr[i] === NaN) {
        throw new Error('Массив должен состоять из чисел');
      }
    }
  } catch(e) {
    return e.message;
  }


  newArr = [];
  arr = arr.slice(0);

  for (; arr.length !== 0;) {

    for (let i = 0; i < arr.length; i++) {
      let count = 0;

      for (let j = 0; j < arr.length; j++) {
        if (maxOrMin === 'max') {
          if (arr[i] > arr[j]) {
            count++;
          }
        } else if (maxOrMin === 'min') {
          if (arr[i] < arr[j]) {
            count++;
          }
        } else {
          return `Вы ввели неверное значение: ${maxOrMin}`;
        }

        if (count === arr.length - 1) {
          newArr.push(parseInt(arr[i]));
          arr.splice(i, 1);
        }
      }

    }
  }

  return newArr;  
}



let someArray3 = [231, 48, 52, 1013, 18, 24, 5, 11, 85, "100000"/*, 'Hello'*/];

console.log( sortNumberArray(someArray3, 'min') );

/**
 * Сортирует переданый массив по спаданию и по возростанию
 *
 * @param {array} arr массив который передается для сортировки
 * @param {string} maxOrMin можно передать строку "min" или "max" 
 * для сортировки массива по спаданию ("max") и по возростанию  ("min").
 * По умолчанию maxOrMin = "max".
 * @return {array} newArr возвращает отсортированный массив
 */

function sortNumberArray(arr, maxOrMin = 'max') {
  let newArr;

  try {
    for (let i = 0; i < arr.length; i++) {
      if (!parseInt(arr[i]) || arr[i] === NaN) {
        throw new Error('Массив должен состоять из чисел');
      }
    }
  } catch(e) {
    return e.message;
  }

  newArr = [];
  arr = arr.slice(0);

  for (; arr.length;) {

	  for (let i = 0; i < arr.length; i++) {	
		  let result;

		  	result = arr.every(function(elem) {
	  		if (maxOrMin === "min") {
		  		return arr[i] <= elem;
			  } else if (maxOrMin === "max") {
			  	return arr[i] >= elem;
			  } else {
			  	return arr[i] >= elem;
			  }
		  });

		  if (result) {
		  	newArr.push(parseInt(arr[i]));
		  	arr.splice(i, 1);
		  }
	  }
  }

  return newArr;  
}
