let someArray2 = [231, 48, 52, 1013, 18, 24, 5, 11, 85, '100000'/*, 'Hello'*/];

console.log(sortNumberArray(someArray2, 'min'));

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
        if (i !== j || arr.length) {

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
  }

  return newArr;  
}
