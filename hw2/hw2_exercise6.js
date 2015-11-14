// -----------------------------------------------------------------------------------------
	// Задание 6
// -----------------------------------------------------------------------------------------

/*
6. Написати скріпт використовуючи метод concat() на тему:
		Нехай завжди буде сонце,
		Нехай завжди буде небо,
		Нехай завжди буде мама,
		Нехай завжди буду я.
*/

var sentence = 'Нехай завжди ';
var firstPenultimateWord = 'буде ';
var lastPenultimateWord = 'буду ';
var lastWords = ['сонце', 'небо', 'мама', 'я'];
var i;

for (i = 0; i < lastWords.length; i++) {

	if(lastWords[i] !== 'я'){
		console.log(sentence.concat(firstPenultimateWord, lastWords[i], ','));
	} else {
		console.log(sentence.concat(lastPenultimateWord, lastWords[i], '.'));
	}
	
}