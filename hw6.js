/**
 * Этап №1
 *
 * На першому етапі, повинно описати модель користувача, контенту (поста) та модель адміністратора
 * у вигляді JavaScript класів(функцій-конструкторів). Подумайте про наслідування, де і який клас може
 * успадковувати властивості від батьківського і хто буде батьківським класом. Подумайте про методи, які
 * матиме кожен екземпляр, чи взагалі буде мати.
 */

// >>>--- Constractor function => User ---<<<

// Родительским классом будет функция конструктор "User" (User.prototype)
function User( name,
							 dayOfBirth,
							 monthOfBirth,
							 yearOfBirth,
							 town,
							 country,
							 emailAddress,
							 password ) {
	// name
	this.name = name;

	// dateOfBirth
	this.dateOfBirth = {
		dayOfBirth: dayOfBirth,
		monthOfBirth: monthOfBirth,
		yearOfBirth: yearOfBirth
	};
	// Еще один вариант
	// this.dateOfBirth = [dayOfBirth, monthOfBirth, yearOfBirth];

	// geolocation
	this.geolocation = {
		country: country,
		cityOrTown: town
	};
	// Еще один вариант
	// this.geolocation = [country, town];

	// email
	this.emailAddress = emailAddress;

	// password
	this.password = password;
}
User.prototype.avatar = function(avatar) {
	this.avatar = avatar;
};

// Метод для приглашения новых друзей
User.prototype.invitToFriend = function() { };

// Метод для поиска новых друзей с учетом геолокации
User.prototype.searchFriends = function() { };

/**
 * Метод задающий значение типа Boolean (true || false), которое будет отслеживаться для
 * определения того, является ли пользователь администратором или нет
 */
User.prototype.role = function(role) {
	this.role = role || false;
};
var Roman = new User( 'Roman',
										  3,
										  11,
										  1989,
										  'Dnepropetrovsk',
										  'Ukraine',
										  'roman@gmail.com',
										  'sd2342342sasdfasdS' );

console.dir(Roman); // Результат можно посмотреть в консоли

// >>>--- Constractor function => SuperAdmin ---<<<
function SuperAdmin( name,
										 dayOfBirth,
										 monthOfBirth,
										 yearOfBirth,
										 town,
										 country,
										 emailAddress,
										 password ) {
	/**
	 * Чтобы упростить поддержку кода, имеет смысл не дублировать код конструктора "User", а на прямую
	 * вызвать его
	 */
	User.apply(this, arguments);
}

/**
 * Используем функцию "inherit" для наследования (код самой функции см. в самом низу скрипта)
 * 
 * Это намного лаконичней (код становится читабельнее и экономит память) чем, например, вот такая запись:
 * SuperAdmin.prototype = Object.create(User.prototype);
 * SuperAdmin.prototype.constructor = SuperAdmin;
*/
inherit(SuperAdmin, User);

// delete content
SuperAdmin.prototype.deleteContent = function(Content) {	};

// delete users
SuperAdmin.prototype.deleteUsers = function(User) { };
var SuperAdmin = new SuperAdmin( 'Alexander',
																 8,
																 7,
																 1985,
																 'Kiev',
																 'Ukraine',
																 'alexander@gmail.com',
																 '12345asdfasdS' );
SuperAdmin.role(true);
console.dir(SuperAdmin); // Результат можно посмотреть в консоли

// >>>--- Constractor function => Post ---<<<
function Post(body) {
	// Тело контента (post)
	this.body = body;
}
inherit(Post, User);

// Метод возвращает дату публикации нового Post-а
Post.prototype.timeStamp = function() { };
var somePost = new Post('Hello world!!!');
console.dir(somePost); // Результат можно посмотреть в консоли

/**
 * Наследование будет осуществляться с помощью функции inherit (см. ниже)
 * 
 * Функция объявлена как Function Declaration (функция объявлена в основном потоке), поэтому ее можно
 * вызывать в лубом месте кода
 */
function inherit(C, P) {
	C.prototype = Object.create(P.prototype);

	// Также вернем потерянное при создании прототипа свойство "constructor"
	C.prototype.constructor = C;
}
